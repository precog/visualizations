package rg;
import rg.chart.TimeChart;
import rg.chart.PieChart;
import rg.chart.StreamChart;
import rg.chart.ChartOptions;
import rg.pivottable.PivotTable;
import rg.pivottable.PivotTableOptions;
import thx.error.Error;
import thx.js.Dom;
import rg.pivottable.QueryProperty;
using Objects;

/**
 * ...
 * @author Franco Ponticelli
 */

class Viz 
{
	public static function pivot(el : Dynamic, ?options : { } )
	{
		var pivot = new PivotTable(select(el));
		makePivotOptions(pivot, options);
		pivot.init();
		return pivot;
	}
	
	static function makePivotOptions(pivot : PivotTable, options : { } )
	{
		if (null == options)
			options = { };
		var o : PivotTableOptions = cast options.copyTo({ 
			query : {
				path : null,
				event : null,
				properties : []
			}
		});
		
		pivot.availableProperties = o.properties;
		pivot.start = toDate(o.query.start);
		pivot.end = toDate(o.query.end);
		pivot.path = o.query.path;
		pivot.event = o.query.event;
		if (null == pivot.path)
			throw new Error("you must provide a path value for your query");
		if (null == pivot.event)
			throw new Error("you must provide an event name for your query");
		pivot.queryProperties = [];
		for (property in o.query.properties)
		{
			if (null != property.time)
			{
				pivot.queryProperties.push(TimeProperty(
					periodicity(property.time), 
					property.order.toLowerCase() == "ascending",
					null == property.limit ? 20 : property.limit
				));
			} else {
				pivot.queryProperties.push(ValueProperty(
					property.name, 
					property.order.toLowerCase() == "ascending",
					null == property.limit ? 20 : property.limit
				));
			}
		}
	}
	
	static function periodicity(v : String)
	{
		if (null == v)
			return "Eternity";
		var v = Strings.capitalize(v.toLowerCase());
		if (!Reflect.hasField(rg.js.ReportGrid.Periodicity, v))
			throw new Error("invalid periodicity '{0}'", v);
		return v;
	}
	
	static function toDate(v : Dynamic) : Null<Date>
	{
		if (null == v || Std.is(v, Date))
			return null;
		if (Std.is(v, Float))
			return Date.fromTime(v);
		if (Std.is(v, String) && Dates.canParse(v))
			return Dates.parse(v);
		throw new Error("invalid date value '{0}'", v);
	}
	
	public static function pie(el : Dynamic, ?options : { } )
	{
		return new PieChart(select(el), makeoptions(options, {
			timeranimationupdate : 0,
			left : scale(false, false, 0),
			bottom : scale(false, false, 0),
		}));
	}
	
	public static function time(el : Dynamic, ?options : { } )
	{
		return new TimeChart(select(el), makeoptions(options, { }));
	}

	public static function stream(el : Dynamic, ?options : { } )
	{
		return new StreamChart(select(el), makeoptions(options, {
			lineinterpolation : "cardinal",
			left : scale(false, false, 0),
		}));
	}
	
	static function makeoptions(?options : { }, defaults : { } ) : ChartOptions
	{
		var o = defaultOptions.clone();
		defaults.copyTo(o);
		if (null == Reflect.field(options, "query"))
			throw new Error("you have to provide a query for your data");
		
		options.copyTo(o);
		return cast o;
	}
	
	static function select(el : Dynamic)
	{
		var el = if (Std.is(el, String)) Dom.select(el) else Dom.selectNode(el);
		if (el.empty())
			throw new Error("invalid container");
		return el;
	}
	
	static var hlen = 20;
	static var vlen = 50;
	static var defaultOptions : ChartOptions = {
		width : 400,
		height : 400,
		query : null,
		left : scale(true, true, hlen),
		right : scale(false, false, hlen),
		top : scale(false, false, vlen),
		bottom : scale(true, true, vlen),
		timeranimationupdate : 250,
		timerdataupdate : 10000,
		lineinterpolation : null,
		stacked : false
	}
	
	static function scale(displayLabels : Bool, displayTicks : Bool, labellength : Int)
	{
		return {
			ticks : displayTicks,
			labels : displayLabels,
			ticklength : 5,
			labellength : labellength,
			spacing : 4
		};
	}
}