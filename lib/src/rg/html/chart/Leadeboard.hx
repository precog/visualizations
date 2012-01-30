/**
 * ...
 * @author Franco Ponticelli
 */

package rg.html.chart;
import rg.axis.Stats;
import rg.data.VariableDependent;
import rg.data.VariableIndependent;
import rg.util.Properties;
import thx.culture.FormatNumber;
import thx.js.Selection;
import rg.data.DataPoint;
import rg.util.DataPoints;
import thx.math.Equations;
import thx.js.Dom;
import hxevents.Notifier;
using Arrays;

// TODO MOVE SORTING TO AXIS
class Leadeboard
{
	var variableIndependent : VariableIndependent<Dynamic>;
	var variableDependent : VariableDependent<Dynamic>;

	public var animated : Bool;
	public var animationDuration : Int;
	public var animationDelay : Int;
	public var animationEase : Float -> Float;
	public var click : DataPoint -> Void;
	public var sortDataPoint : DataPoint -> DataPoint -> Int;
	public var displayGradient : Bool;
	public var useMax : Bool;
	public var ready(default, null) : Notifier;

	public var displayBar : Bool;

	var container : Selection;
	var list : Selection;

	var _created : Int;
	var stats : StatsNumeric;
	public function new(container : Selection)
	{
		ready = new Notifier();
		this.container = container;
		animated = true;
		animationDuration = 1500;
		animationEase = Equations.elasticf();
		animationDelay = 150;
		_created = 0;
		displayGradient = true;
		useMax = false;
	}

	public dynamic function labelDataPoint(dp : DataPoint, stats : StatsNumeric)
	{
		return Properties.humanize(DataPoints.value(dp, variableIndependent.type));
	}

	public dynamic function labelDataPointOver(dp : DataPoint, stats : StatsNumeric)
	{
		return Floats.format(100*DataPoints.value(dp, stats.type)/(useMax ? stats.max : stats.tot), "P:1");
	}

	public dynamic function labelRank(dp : DataPoint, i : Int, stats : StatsNumeric)
	{
		return "" + (i+1);
	}

	public dynamic function labelValue(dp : DataPoint, stats : StatsNumeric)
	{
		return Properties.formatValue(stats.type, dp);
	}

	public function init()
	{
		var div = container
			.append("div")
			.attr("class").string("leaderboard");
		list = div.append("ul");
		div.append("div").attr("class").string("clear");
	}

	public function setVariables(variableIndependents : Array<VariableIndependent<Dynamic>>, variableDependents : Array<VariableDependent<Dynamic>>)
	{
		variableDependent = variableDependents[0];
		variableIndependent = variableIndependents[0];
	}

	function backgroundSize(dp, i)
	{
		return (100 * DataPoints.value(dp, variableDependent.type) / (useMax ? stats.max : stats.tot)) + "%";
	}

	public function data(dps : Array<DataPoint>)
	{
		var name = variableDependent.type;
		if (null != sortDataPoint)
			dps.sort(sortDataPoint);
		if (null == variableDependent.stats)
			return;

		var stats = this.stats = cast(variableDependent.stats, StatsNumeric);

		var choice = list.selectAll("li").data(dps, id);

		// enter
		var enterli = choice.enter().append("li")
			//	.attr("class").stringf(function(_, i) return i % 2 == 0 ? "fill-0" : "")
			;
		// title
		enterli.attr("title").stringf(lTitle);

		//background
		enterli.append("div").attr("class").stringf(function(_, i) {
			 return i % 2 == 0 ? "background fill-0" : "background";
		});

		var enterlabels = enterli.append("div").attr("class").string("labels");

		// rank
		if(null != labelRank)
		{
			enterlabels.append("div")
				.attr("class").string("rank")
				.text().stringf(lRank);
		}

		// datapoint
		if(null != labelDataPoint)
		{
			enterlabels.append("span")
				.attr("class").string("description color-0")
				.text().stringf(lDataPoint);
		}

		// value
		if(null != labelValue)
		{
			enterlabels.append("span")
				.attr("class").string("value color-2")
				.text().stringf(lValue);
		}

//		enterlabels.append("div").attr("class").string("clear");

		enterli.append("div").attr("class").string("clear");

		// bar
		if(displayBar)
		{
			var barpadding = enterli.append("div").attr("class").string("barpadding"),
				enterbar = barpadding.append("div")
				.attr("class").string("barcontainer");
			enterbar.append("div")
				.attr("class").string("barback fill-0");
			enterbar.append("div")
				.attr("class").string("bar fill-0")
				.style("width").stringf(backgroundSize);
			enterli.append("div").attr("class").string("clear");
		}

//				.attr("class").stringf(function(_, i) return (displayGradient ? "" : "nogradient ") + "stroke-" + i)

//		if (displayGradient)
//			enterli.style("background-size").stringf(backgroundSize);
		if (null != click)
			enterli.on("click.user", onClick);
		if (animated)
		{
			enterli.style("opacity").float(0).eachNode(fadeIn);
		} else {
			enterli.style("opacity").float(1);
		}

		// update
/*
		var update = choice.update()
			.select("li")
				.text().stringf(lDataPoint)
				.attr("title").stringf(lTitle)
		;
*/
//		if (displayGradient)
//			update.style("background-size").stringf(backgroundSize);
		// exit
		if (animated)
		{
			choice.exit()
				.transition().ease(animationEase).duration(animationDuration)
				.style("opacity").float(0)
				.remove();
		} else {
			choice.exit().remove();
		}
		ready.dispatch();
	}

	function onClick(dp : DataPoint, ?_)
	{
		click(dp);
	}

	function fadeIn(n, i)
	{
		var me = this;
		Dom.selectNodeData(n)
			.transition().ease(animationEase).duration(animationDuration)
				.delay(animationDelay * (i - _created))
				.attr("opacity").float(1)
				.endNode(function(_, _) {
					me._created++;
				});
	}


	function lRank(dp, i)
	{
		return labelRank(dp, i, stats);
	}

	function lValue(dp, i)
	{
		return labelValue(dp, stats);
	}

	function lDataPoint(dp, i)
	{
		return labelDataPoint(dp, stats);
	}

	function lTitle(dp, i)
	{
		return labelDataPointOver(dp, stats);
	}

	function id(dp : DataPoint, ?_) return DataPoints.id(dp, [variableDependent.type])
}