/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.html.widget;
import rg.data.VariableDependent;
import rg.data.VariableIndependent;
import thx.js.Selection;
import rg.data.DataPoint;
import rg.util.DataPoints;
import thx.math.Equations;
import thx.js.Dom;

// TODO add title function
// TODO add text function
// TODO add sort function
// TODO add click handler
class Leadeboard 
{
	public var variableIndependent : VariableIndependent<Dynamic>;
	public var variableDependent : VariableDependent<Dynamic>;
	
	public var animated : Bool;
	public var animationDuration : Int;
	public var animationDelay : Int;
	public var animationEase : Float -> Float;
	
	var container : Selection;
	var list : Selection;
	var stats : { min : Float, max : Float, tot : Float };
	
	var _created : Int;
	public function new(container : Selection) 
	{
		this.container = container;
		animated = true;
		animationDuration = 1500;
		animationEase = Equations.elasticf();
		animationDelay = 150;
		_created = 0;
	}
	
	public function init()
	{
		list = container.append("ul")
			.attr("class").string("leaderboard");
	}
	
	public function data(dps : Array<DataPoint>)
	{
		var filtered = DataPoints.filterByVariable(dps, [variableIndependent]),
			name = variableDependent.type,
			stats = DataPoints.stats(filtered, variableDependent.type);
			
		var choice = list.selectAll("li").data(filtered, id);
		
		// enter
		choice.enter()
			.append("li")
				.style("background-size").stringf(function(d, i) return (100*DataPoints.value(d, name)/stats.tot)+"%")
				.text().stringf(description)
				.attr("title").stringf(title)
				.style("opacity").float(0)
					.eachNode(fadeIn)
		;
		
		// update
		choice.update()
			.select("li")
				.style("background-size").stringf(function(d, i) return (100*DataPoints.value(d, name)/stats.tot)+"%")
				.text().stringf(description)
				.attr("title").stringf(title)
		;
		
		// exit
		choice.exit()
			.transition().ease(animationEase).duration(animationDuration)
			.style("opacity").float(1)
			.remove()
		;
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
			})
		;
	}
	
	function description(dp, i)
	{
		return Dynamics.string(dp);
	}
	
	function title(dp, i)
	{
		return Dynamics.string(dp);
	}
	
	function id(dp : DataPoint, ?_) return DataPoints.id(dp, [variableDependent.type])
}