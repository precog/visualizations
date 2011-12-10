/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.source;
import hxevents.Dispatcher;
import rg.data.IDataSource;
import rg.data.source.rgquery.IExecutorReportGrid;
import rg.data.source.rgquery.QueryAst;
import rg.data.source.rgquery.transform.TransformCount;
import rg.data.source.rgquery.transform.TransformCounts;
import rg.data.source.rgquery.transform.TransformIntersectGroup;
import rg.data.source.rgquery.transform.TransformIntersectGroupUtc;
import rg.data.source.rgquery.transform.TransformIntersect;
import rg.data.source.rgquery.transform.TransformTimeSeries;
import rg.data.source.rgquery.transform.TransformTimeSeriesValues;
import rg.data.source.rgquery.transform.TransformIntersectTime;
import rg.data.source.rgquery.transform.TransformIntersectUtc;
import rg.data.source.rgquery.transform.TransformStatisticTime;
import thx.error.Error;
import rg.data.source.ITransform;
import rg.util.Properties;
import rg.util.Periodicity;
using Arrays;

class DataSourceReportGrid implements IDataSource
{
	var executor : IExecutorReportGrid;

	// specific query stuff
	var exp : Array<{ property : String, event : String, limit : Int, order : String }>;
	var operation : QOperation;
	var where : Array<{ property : String, event : String, values : Array<Dynamic> }>;
	var periodicity : String;

	// general query stuff
	public var event(default, null) : String;
	public var path(default, null) : String;
	public var timeStart : Float;
	public var timeEnd : Float;
	public var groupBy : Null<String>;
	public var timeZone : Null<String>;

	var transform : ITransform<Dynamic>;

	public var query(default, null) : Query;
	public var onLoad(default, null) : Dispatcher<Array<DataPoint>>;

	function mapProperties(d, _)
	{
		switch(d)
		{
			case Property(name, limit, descending):
				return {
					event : event,
					property : name,
					limit : null == limit ? 10 : limit,
					order : false == descending ? "ascending" : "descending"
				};
			case Event:
				return {
					event : event,
					property : null,
					limit : null,
					order : null
				};
			default:
				throw new Error("normalization failed, only Property values should be allowed");
		}
	}

	public function new(executor : IExecutorReportGrid, path : String, event : String, query : Query, operation : QOperation, ?groupby : String, ?timezone : String, ?start : Float, ?end : Float)
	{
		this.query = query;
		this.executor = executor;
		this.groupBy = groupby;
		this.timeZone = timezone;
		var e = normalize(query.exp);
		this.event = event;
		this.periodicity = switch(e.pop()) { case Time(p): p; default: throw new Error("normalization failed, the last value should always be a Time expression"); };
		this.exp = e.map(mapProperties);
		this.where = query.where.map(function(d, i) return switch(d)
		{
			case Equality(property, value): {
				event : event,
				property : property,
				values : [value]
			};
			case In(property, values): {
				event : event,
				property : property,
				values : values
			};
			default: throw new Error("invalid data for 'where' condition"); } );
		this.operation = operation;
		this.path = path;
		this.timeStart = start;
		this.timeEnd = end;
		this.onLoad = new Dispatcher();
	}

	function basicOptions(appendPeriodicity = true) : Dynamic
	{
		var opt : Dynamic = { };
		if (null != timeStart)
			Reflect.setField(opt, "start", timeStart);
		if (null != timeEnd)
		{
			var e = Periodicity.next(periodicity, timeEnd);
			Reflect.setField(opt, "end", e); // since end is not inclusive we have to extend the query span
		}
		if (appendPeriodicity)
		{
			Reflect.setField(opt, "periodicity", periodicity);
			if (null != groupBy)
				Reflect.setField(opt, "groupBy", groupBy);
			if (null != timeZone)
				Reflect.setField(opt, "timeZone", timeZone);
		}

		if (where.length > 1)
		{
			var arr = [];
			for (c in where)
			{
				for(v in c.values)
				{
					var cond : Dynamic = { };
					Reflect.setField(cond, propertyName(c), v);
					arr.push(cond);
				}
			}
			opt.where = arr;
		}
		return opt;
	}

	function unit()
	{
		return switch(operation)
		{
			case Count: "count";
			case Mean:  "mean";
			case StandardDeviation:  "standardDeviation";
//			default: throw new Error("unsupported operation '{0}'", operation);
		}
	}

	static function parallelExecution<T>(actions : Array<{ method : ExCallback<T>, value : Dynamic }>, success : Dynamic -> Void, error : String -> Void)
	{
		var tot = actions.length,
			result = [];

		function complete()
		{
			success(result);
		}

		function handler(v : Dynamic, r : T)
		{
			var t : Array<Dynamic>;
			if (Std.is(r, Array))
				t = cast r;
			else
				t = [r];
			for (item in t)
			{
				var ob : Dynamic = Types.isAnonymous(item) ? item : { count : item };
				ob.value = v;
				result.push(ob);
			}

			tot--;
			if (tot == 0)
				complete();
		}

		var i = 0;
		while(i < actions.length)
			actions[i].method(callback(handler, actions[i++].value), error);
	}

	static function serialExecution<T>(value : T, actions : Array<T -> (T -> Void) -> (String -> Void) -> Void>, success : Dynamic -> Void, error : String -> Void)
	{
		function next()
		{
			if(actions.length == 0)
				return success;
			else
				return function(v : T) {
					var action = actions.shift();
					action(v, next(), error);
				}
		}

		actions.shift()(value, next(), error);
	}

	public function load()
	{
		if (0 == exp.length)
		{
			throw new Error("invalid empty query");
		} else if (exp.length == 1 && null == exp[0].property || where.length > 0)
		{
			if (periodicity == "eternity")
			{
				var opt : Dynamic = basicOptions(false);
				if (where.length > 1)
				{
					transform = new TransformCount( { }, event, unit());
//trace("1");
					executor.searchCount(path, opt, success, error);
				} else if (where.length == 1)
				{
					if(exp.length > 1) {
						var whereproperties = where.map(function(w, _) return w.property),
							valueproperty = exp.filter(function(v) return !whereproperties.exists(v.property)).shift();
						transform = new TransformCounts( { }, event, unit(), valueproperty.property);
						var counts : Dynamic = {};
						var actions = [];
						actions.push(function(value : Dynamic, s : Dynamic -> Void, e : String -> Void) {
							//public function propertyValues(path : String, options : { }, success : Array<Dynamic> -> Void, ?error : String -> Void) : Void;
							var o : Dynamic = Objects.clone(opt);
							o.property = propertyName(valueproperty);
//trace("2");
							executor.propertyValues(path, o, s, e);
						});
						actions.push(function(values : Array<String>, s : Dynamic -> Void, e : String -> Void) {
							var subs = [];
							for(v in values)
							{
								var o : Dynamic = Objects.clone(opt);
								if(null == o.where) o.where = [];
								var cond = {};
								Reflect.setField(cond, propertyName(valueproperty), v);
								o.where.push(cond);
								/*
								Reflect.setField(o.where, propertyName(valueproperty), v);
								for(w in where)
								{
									var p = propertyName(w);
									for(v in w.values)
										Reflect.setField(o.where, p, v);
								}
								*/
								////trace("!!!!!!");
								for(w in where)
								{
									var p = propertyName(w);
									for(v in w.values)
									{
										cond = {};
										Reflect.setField(cond, p, v);
										o.where.push(cond);
									}
								}
								subs.push(cast {
									method : callback(executor.searchCount, path, o),
									value : v
								});
							}

							parallelExecution(subs, s, e);
						});
						serialExecution(null, actions, success, error);
					} else {
						opt.property = propertyName(exp[0]);
						if (where[0].values.length > 1)
						{
							transform = new TransformCounts( { }, event, unit());
							var actions : Array<{ method : ExCallback<Int>, value : Dynamic }> = cast where[0].values.map(function(v, _) {
								var o : Dynamic = Objects.clone(opt);
								o.value = v;
								return { method : callback(executor.propertyValueCount, path, o), value : v };
							});
							parallelExecution(actions, success, error);
						} else {
							transform = new TransformCount( { }, event, unit());
							opt.value = where[0].values[0];
//trace("3");
							executor.propertyValueCount(path, opt, success, error);
						}
					}
				} else {
					transform = new TransformCount( { }, event, unit());
					opt.property = propertyName(exp[0]);
//trace("4");
					executor.propertyCount(path, opt, success, error);
				}
			} else {
				var opt : Dynamic = basicOptions(true);
				if (where.length > 1)
				{
					transform = new TransformTimeSeries( { periodicity : periodicity }, event, periodicity, unit());
//trace("5");
					executor.searchSeries(path, opt, success, error);
				} else if (where.length == 1)
				{
					if(exp.length > 1) {
						var whereproperties = where.map(function(w, _) return w.property),
							valueproperty = exp.filter(function(v) return !whereproperties.exists(v.property)).shift();
						transform = new TransformTimeSeriesValues( { periodicity : periodicity }, event, periodicity, unit(), valueproperty.property);
						var counts : Dynamic = {};
						var actions = [];
						actions.push(function(value : Dynamic, s : Dynamic -> Void, e : String -> Void) {
							//public function propertyValues(path : String, options : { }, success : Array<Dynamic> -> Void, ?error : String -> Void) : Void;
							var o : Dynamic = Objects.clone(opt);
							o.property = propertyName(valueproperty);
//trace("6");
							executor.propertyValues(path, o, s, e);
						});
						actions.push(function(values : Array<String>, s : Dynamic -> Void, e : String -> Void) {
							var subs = [];
							for(v in values)
							{
								var o : Dynamic = Objects.clone(opt),
									cond = {};
								if(null == o.where) o.where = [];
								Reflect.setField(cond, propertyName(valueproperty), v);
								o.where.push(cond);
								////trace("#####");
								for(w in where)
								{
									var p = propertyName(w);
									for(v in w.values)
									{
										cond = {};
										Reflect.setField(cond, p, v);
										o.where.push(cond);
									}
								}
								//o.where = {};
								/*
								Reflect.setField(o.where, propertyName(valueproperty), v);
								for(w in where)
								{
									var p = propertyName(w);
									for(v in w.values)
										Reflect.setField(o.where, p, v);
								}
								*/
								subs.push(cast {
									method : callback(executor.searchSeries, path, o),
									value : v
								});
							}

							parallelExecution(subs, s, e);
						});
						serialExecution(null, actions, success, error);
					} else {
						opt.property = propertyName(exp[0]);
						if (where[0].values.length > 1)
						{
							transform = new TransformTimeSeriesValues( { periodicity : periodicity }, event, periodicity, unit());
							var actions : Array<{ method : ExCallback<TimeSeriesType>, value : Dynamic }> = cast where[0].values.map(function(v, _) {
								var o : Dynamic = Objects.clone(opt);
								o.value = v;
								return { method : callback(executor.propertyValueSeries, path, o), value : v };
							});
							parallelExecution(actions, success, error);

	//						opt.value = where[0].values;
	//						executor.propertyValuesSeries(path, opt, success, error);
						} else {
							transform = new TransformTimeSeries( { periodicity : periodicity }, event, periodicity, unit());
							opt.value = where[0].values[0];
//trace("7");
							executor.propertyValueSeries(path, opt, success, error);
						}
					}
				} else {
					transform = new TransformTimeSeries( { periodicity : periodicity }, event, periodicity, unit());
					opt.property = propertyName(exp[0]);
//trace("8");
					executor.propertySeries(path, opt, success, error);
				}
			}
		} else {
			if (groupBy != null)
			{
				if (timeZone != null)
					transform = new TransformIntersectGroupUtc( { }, exp.map(function(d, _) return d.property), event, periodicity, unit());
				else
					transform = new TransformIntersectGroup( { }, exp.map(function(d, _) return d.property), event, periodicity, unit());
			} else if (periodicity == "eternity")
				transform = new TransformIntersect( { }, exp.map(function(d, _) return d.property), event, exp[0].order != "ascending");
			else if (timeZone != null)
				transform = new TransformIntersectUtc( { }, exp.map(function(d, _) return d.property), event, periodicity, unit());
			else {
				switch(operation)
				{
					case StandardDeviation, Mean:
						transform = new TransformStatisticTime( { }, exp.map(function(d, _) return d.property), event, periodicity, unit());
					case Count:
						transform = new TransformIntersectTime( { }, exp.map(function(d, _) return d.property), event, periodicity, unit());
				}
			}
			var opt : Dynamic = basicOptions(true);

//trace("9");

			switch(operation)
			{
				case Count:
					opt.properties = exp.map(function(p, i) {
						return {
							property : propertyName(p),
							limit : p.limit,
							order : p.order
						};
					});
					executor.intersect(path, opt, success, error);
				case Mean:
					opt.property = propertyName(exp[0]);
					executor.propertyMeans(path, opt, success, error);
				case StandardDeviation:
					opt.property = propertyName(exp[0]);
					executor.propertyStandardDeviations(path, opt, success, error);
			}
		}
	}

	public dynamic function error(msg : String)
	{
		throw new Error(msg);
	}

	function success(src : Dynamic)
	{
		var data = transform.transform(src);
		onLoad.dispatch(data);
	}

	public static function normalize(exp : Array<QExp>)
	{
		if (exp.length > 1)
		{
			var pos = -1;
			for (i in 0...exp.length)
			{
				if (isTimeProperty(exp[i]))
				{
					if (pos >= 0)
						throw new Error("cannot perform intersections on two or more time properties");
					pos = i;
				}
			}
			if (pos >= 0)
			{
				return exp.slice(0, pos).concat(exp.slice(pos + 1)).concat([exp[pos]]);
			} else {
				return exp.copy().concat([Time("eternity")]);
			}
		} else if (exp.length == 1)
		{
			switch(exp[0])
			{
				case Property(name, _, _):
					return [exp[0], Time("eternity")];
				case Time(periodicity):
					return [Event, exp[0]];
				case Event:
					return [Event, Time("eternity")];
			}
		} else {
			return [Event, Time("eternity")];
		}
		/*
		switch(exp)
		{
			case Property(name, type):
				switch(type)
				{
					case Time(_):
						return Cross(Property(name, Unbound(None)), Property(name, type));
					default:
						return Cross(Property(name, type), Property(name, Time("eternity"));
				}
			case Cross(left, right):
				if (isTimeProperty(left))
				{
					if (isTimeProperty(right))
						throw new Error("cannot perform intersections on two time properties");
					return normalize(Cross(right, left));
				}
			default:
				//
		}
		*/
	}

	static function prefixProperty(s : String) return (s.substr(0, 1) == '.') ? s : ('.' + s)

	static function propertyName(p : { property : String, event : String } )
	{
		if(null == p.property)
			return prefixProperty(p.event);
		else
			return prefixProperty(p.event) + prefixProperty(p.property);
	}

	static function isTimeProperty(exp : QExp) : Bool
	{
		switch(exp)
		{
			case Time(_):
				return true;
			default:
				return false;
		}
	}
}

typedef StringVoid = String -> Void;
typedef ExCallback<T> = (T -> Void) -> Null<StringVoid> -> Void;