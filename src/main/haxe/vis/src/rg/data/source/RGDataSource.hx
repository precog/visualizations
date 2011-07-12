/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.source;
import hxevents.Dispatcher;
import rg.data.IDataSource;
import rg.data.source.rgquery.IRGExecutor;
import rg.data.source.rgquery.QueryAst;
import rg.data.transform.CountTransform;
import rg.data.transform.CountTimeSeriesTransform;
import rg.data.transform.CountTimeIntersectTransform;
import thx.error.Error;
import rg.data.transform.ITransform;
using Arrays;

class RGDataSource implements IDataSource<Dynamic>
{
	var executor : IRGExecutor;
	
	// specific query stuff
	var exp : Array<{ property : String, limit : Int, order : String }>;
	var operation : QOperation;
	var where : Array<{ property : String, value : Dynamic }>;
	var periodicity : String;
	
	// general query stuff
	var path : String;
	var start : Float;
	var end : Float;
	
	var transform : ITransform<Dynamic, Dynamic>;
	
	public var onLoad(default, null) : Dispatcher<Array<DataPoint<Dynamic>>>;
	public function new(executor : IRGExecutor, path : String, query : Query, ?start : Float, ?end : Float) 
	{
		this.executor = executor;
		var e = normalize(query.exp);
		this.periodicity = switch(e.pop()) { case Time(_, p): p; default: throw new Error("normalization failed, the last value should always be a Time expression"); };
		this.exp = e.map(function(d, _) return switch(d) { case Property(name, limit, descending): { 
			property : name, 
			limit : null == limit ? 10 : limit, 
			order : false == descending ? "ascending" : "descending"
		}; default: throw new Error("normalization failed, only Property values should be allowed"); } );
		this.where = query.where.map(function(d, i) return switch(d) { case Equality(property, value): {
			property : property,
			value : value
		}; default: throw new Error("invalid data for Where"); } );
		this.operation = query.operation;
		
		switch(operation)
		{
			case Count: //
			default: throw new Error("RGDataSource doesn't support operation '{0}'", operation);
		}
		
		this.path = path;
		this.start = start;
		this.end = end;
		
		this.onLoad = new Dispatcher();
	}
	
	function basicOptions(appendPeriodicity = true) : Dynamic
	{
		var o = { };
		if (null != start)
			Reflect.setField(o, "start", start);
		if (null != end)
			Reflect.setField(o, "end", end);	
		if (appendPeriodicity)
			Reflect.setField(o, "periodicity", periodicity);
			
		if (where.length > 1)
		{
			var w = { };
			for (c in where)
				Reflect.setField(w, c.property, c.value);
			Reflect.setField(o, "where", w);
		}
			
		return o;
	}
	
	function unit()
	{
		return switch(operation)
		{
			case Count: "count";
			default: throw new Error("unsupported operation '{0}'", operation);
		}
	}

	public function load()
	{
		if (0 == exp.length)
		{
			throw new Error("invalid empty query");
		} else if (exp.length == 1)
		{
			if (periodicity == "eternity")
			{
				transform = new CountTransform( { }, unit());
				var o : Dynamic = basicOptions(false);
				if (where.length > 1)
					executor.searchCount(path, o, success, error);
				else if (where.length == 1)
				{
					o.property = exp[0].property;
					o.value = where[0].value;
					executor.propertyValueCount(path, o, success, error);
				} else {
					o.property = exp[0].property;
					executor.propertyCount(path, o, success, error);
				}
			} else {
				transform = new CountTimeSeriesTransform( { periodicity : periodicity }, unit());
				var o : Dynamic = basicOptions(true);
				if (where.length > 1)
					executor.searchSeries(path, o, success, error);
				else if (where.length == 1)
				{
					o.property = exp[0].property;
					o.value = where[0].value;
					executor.propertyValueSeries(path, o, success, error);
				} else {
					o.property = exp[0].property;
					executor.propertySeries(path, o, success, error);
				}
			}
		} else {
			transform = new CountTimeIntersectTransform( { periodicity : periodicity }, exp.map(function(d, _) return d.property), unit());
			var o = basicOptions(true);
			o.properties = exp;
			executor.intersect(path, o, success, error);
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
				return exp.copy().concat([Time("", "eternity")]);
			}
		} else if (exp.length == 1)
		{
			switch(exp[0])
			{
				case Property(name, _, _):
					return [exp[0], Time(name, "eternity")];
				case Time(name, periodicity):
					return [Property(name), exp[0]];
			}
		} else {
			return exp;
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

	static function isTimeProperty(exp : QExp) : Bool
	{
		switch(exp)
		{
			case Time(_, _):
				return true;
			default:
				return false;
		}
	}
}