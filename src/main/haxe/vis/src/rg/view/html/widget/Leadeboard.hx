/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.html.widget;
import rg.data.Stats;
import rg.data.VariableDependent;
import rg.data.VariableIndependent;
import rg.util.Properties;
import thx.culture.FormatNumber;
import thx.js.Selection;
import rg.data.DataPoint;
import rg.util.DataPoints;
import thx.math.Equations;
import thx.js.Dom;
using Arrays;

class Leadeboard 
{
	public var variableIndependent : VariableIndependent<Dynamic>;
	public var variableDependent : VariableDependent<Dynamic>;
	
	public var animated : Bool;
	public var animationDuration : Int;
	public var animationDelay : Int;
	public var animationEase : Float -> Float;
	public var click : DataPoint -> Void;
	public var sort : DataPoint -> DataPoint -> Int;
	
	var container : Selection;
	var list : Selection;

	var _created : Int;
	var stats : Stats;
	public function new(container : Selection) 
	{
		this.container = container;
		animated = true;
		animationDuration = 1500;
		animationEase = Equations.elasticf();
		animationDelay = 150;
		_created = 0;
	}
	
	public dynamic function labelDataPoint(dp : DataPoint, stats : Stats)
	{
		var p = DataPoints.value(dp, variableIndependent.type);
		var v = DataPoints.value(dp, variableDependent.type);
		return Properties.humanize(p) + ": " + FormatNumber.percent(100 * v / stats.tot, 1);
	}
	
	public dynamic function labelDataPointOver(dp : DataPoint, stats : Stats)
	{
		var p = variableDependent.type;
		var v = DataPoints.value(dp, variableDependent.type);
		return Properties.humanize(p) + ": " + FormatNumber.int(v);
	}
	
	public function init()
	{
		list = container.append("ul")
			.attr("class").string("leaderboard");
	}
	
	public function data(dps : Array<DataPoint>)
	{
		var filtered = DataPoints.filterByVariable(dps, [variableIndependent]),
			name = variableDependent.type;
		if (null != sort)
			filtered.sort(sort);
		
		var stats = this.stats = DataPoints.stats(filtered, variableDependent.type);
			
		var choice = list.selectAll("li").data(filtered, id);
		
		// enter
		var enter = choice.enter()
			.append("li")
				.style("background-size").stringf(function(d, i) return (100*DataPoints.value(d, name)/stats.tot)+"%")
				.text().stringf(description)
				.attr("title").stringf(title);
		if (null != click)
			enter.on("click.user", onClick);
		if (animated)
		{
			enter.style("opacity").float(0)
				.eachNode(fadeIn);
		} else {
			enter.style("opacity").float(1);
		}
		
		// update
		choice.update()
			.select("li")
				.style("background-size").stringf(function(d, i) return (100*DataPoints.value(d, name)/stats.tot)+"%")
				.text().stringf(description)
				.attr("title").stringf(title)
		;
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
				.style("opacity").float(1)
				.endNode(function(_, _) {
					me._created++;
				});
	}
	
	function description(dp, i)
	{
		return labelDataPoint(dp, stats);
	}
	
	function title(dp, i)
	{
		return labelDataPointOver(dp, stats);
	}
	
	function id(dp : DataPoint, ?_) return DataPoints.id(dp, [variableDependent.type])
}