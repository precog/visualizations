package rg.chart;
import rg.query.Query;
import rg.QueryOptions;
import rg.svg.SvgPanel;
import rg.svg.SvgScaleLabel;
import rg.svg.SvgScaleTick;
import thx.js.Selection;
import rg.js.ReportGrid;
import rg.svg.SvgSpace3x3;
import thx.js.Timer;
import thx.math.scale.Linear;
import rg.svg.Anchor;
import rg.ChartOptions;
import rg.svg.SvgLayer;
import thx.svg.LineInterpolator;

/**
 * ...
 * @author Franco Ponticelli
 */

class BaseChart<TService, TData>
{
	public var container(default, null) : Selection;
	public var width(default, null) : Int;
	public var height(default, null) : Int;
	public var space(default, null) : SvgSpace3x3;
	
	public var x(default, null) : Linear;
	public var y(default, null) : Linear;
	
	public var timerAnimationUpdate(default, null) : Int;
	public var timerDataUpdate(default, null) : Int;
	public var periodicity(default, null) : String;
	
	public var lineInterpolator(default, null) : LineInterpolator;
	
	public var stacked(default, null) : Bool;
	
	
	public var query(default, null) : { path : String, event : String, property : String, values : Array<String> }
	
	var layers : Array<SvgLayer>;
		
	var start : Float;
	var startdata : Float;
	var end : Float;
	var loader : Query<TService, TData>;
	
	public function new(container : Selection, loader : Query<TService, TData>, options : ChartOptions) 
	{
		this.container = container;
		this.loader = loader;
		loader.onChange.add(onData);
		layers = [];
		initOptions(options, callback(init, options));
	}
	
	function onData(v : TData)
	{
		trace("data is here");
	}
	
	function onAnimationStep() { }
	function onDataStep() { }
	
	var _lastanimation : Float;
	var _lastdata : Float;
	function _stepanimation(t : Float)
	{
		if (t - _lastanimation < timerAnimationUpdate)
			return false;
		_lastanimation = t;
		updateTimeDomain();
		onAnimationStep();
		return false;
	}
	
	function _stepdata(t : Float)
	{
		if (t - _lastdata < timerDataUpdate)
			return false;
		_lastdata = t;
		onDataStep();
		return false;
	}
	
	function init(options)
	{
		updateTimeDomain();
		initScales(options);
		initSpace(options);
		initChart(options);
		refresh();
		
		if (timerAnimationUpdate > 0)
		{
			_lastanimation = 0.0;
			Timer.timer(_stepanimation, timerAnimationUpdate);
		}
		
		if (timerDataUpdate > 0)
		{
			_lastdata = 0.0;
			Timer.timer(_stepdata, timerDataUpdate);
		}
	}
	
	function initScales(options : ChartOptions)
	{
//		throw "abstract method";
	}
	
	function initQuery(q : QueryOptions)
	{
		query.event = q.event;
		query.path = q.path;
		query.property = q.property;
		// TODO
//		query.values = q.values;
	}
	
	function initOptions(options : ChartOptions, handler : Void -> Void)
	{
		width = options.width;
		height = options.height;
//		query = options.query;
		// TODO
		options.animated;
		timerAnimationUpdate = options.animation.refresh;
		timerDataUpdate = options.animation.dataupdate;
		periodicity = "minute";
//		stacked = options.stacked == true;
		var interp = null == options.lineinterpolation ? null : options.lineinterpolation.split("-")[0];
		lineInterpolator = switch(interp)
		{
			case "basis":
				LineInterpolator.Basis;
			case "cardinal":
				var v = options.lineinterpolation.split("-")[1];
				if(null == v)
					LineInterpolator.Cardinal();
				else
					LineInterpolator.Cardinal(Std.parseFloat(v));
			case "stepafter":
				LineInterpolator.StepAfter;
			case "stepbefore":
				LineInterpolator.StepBefore;
			default:
				null;
		}
		if (null == query.values)
		{
			ReportGrid.propertyValues(query.path, { property : query.event + "." + query.property }, callback(loadProperties, handler));
		} else
			handler();
	}
	
	function loadProperties(handler : Void -> Void, data : Array<Dynamic>)
	{
		query.values = cast data;
		handler();
	}
	
	function initSpace(options : ChartOptions)
	{
		space = new SvgSpace3x3(width, height, container, 0);
		space.svg.attr("class").string("rg");
		
		space.setLeft(	scalePanel(space.left, Right, y, options.left));
		space.setRight(	scalePanel(space.right, Left, y, options.right));
		space.setTop(	scalePanel(space.top, Bottom, x, options.top));
		space.setBottom(scalePanel(space.bottom, Top, x, options.bottom));
	}
	
	function initChart(options : ChartOptions)
	{
		
	}
	
	function refresh()
	{
		for (layer in layers)
			layer.redraw();
	}
	
	function scalePanel(panel : SvgPanel, anchor : Anchor, scale : Linear, options : ScaleInfo)
	{
		var len = 0;
		if (options.ticks)
		{
			var tick = SvgScaleTick.ofLinear(panel, anchor, scale);
			layers.push(tick);
			tick.length(options.ticklength);
			len += options.ticklength;
		}
		if (options.labels)
		{
			if (options.ticks)
				len += options.spacing;
				
			var label = SvgScaleLabel.ofLinear(panel, anchor, scale);
			label.padding(len);
			layers.push(label);
			len += options.labellength;
		}
		return len;
	}
	
	function updateTimeDomain()
	{
		var now = Date.now().getTime();
		start = now - 1000 * 60 * 15;
		startdata = now - 1000 * 60 * 16;
		end = now - 1000 * 60 * .5;
	}
}