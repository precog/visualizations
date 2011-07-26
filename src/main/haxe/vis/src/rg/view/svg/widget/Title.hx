/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.svg.widget;
import rg.view.svg.panel.Layer;
import thx.js.Selection;
import rg.view.layout.Anchor;
import rg.view.svg.panel.Panel;

class Title extends Layer
{
	public var text(default, setText) : String;
	public var anchor(default, setAnchor) : Anchor;
	public var padding(default, setPadding) : Int;
	
	var nodeText : Selection;
	var nodeGroup : Selection;
	
	public function new(panel : Panel, text : String, anchor : Anchor, padding = 1, className = "title") 
	{
		super(panel);
		this.text = text;
		this.anchor = anchor;
		this.padding = padding;
		this.addClass(className);
		
		nodeGroup = g.append("svg:g");
		nodeText = nodeGroup.append("svg:text")
			.attr("text-anchor").string("middle");
			
		resize();
	}
	
	public function idealHeight() : Int
	{
		if (Strings.empty(text))
			return 0;
		var bbox : { height : Float } = untyped nodeText.node().getBBox();
		return Math.round(bbox.height);
	}
	
	override function resize()
	{
		if (null == nodeText || null == anchor || null == width || padding == null)
			return;
		switch(anchor)
		{
			case Top:
				nodeText.attr("transform").string("rotate(0)")
					.attr("dominant-baseline").string("hanging");
				nodeGroup
					.attr("transform").string("translate(" + (width / 2) + "," + padding + ")")
				;
			case Right:
				nodeText.attr("transform").string("rotate(-90)")
					.attr("dominant-baseline").string("baseline");
				nodeGroup
					.attr("transform").string("translate(" + (width - padding) + "," + (height / 2) + ")")
				;
			case Left:
				nodeText.attr("transform").string("rotate(90)")
					.attr("dominant-baseline").string("baseline");
				nodeGroup
					.attr("transform").string("translate(" + (padding) + "," + (height / 2) + ")")
				;
			case Bottom:
				nodeText.attr("transform").string("rotate(0)")
					.attr("dominant-baseline").string("baseline");
				nodeGroup
					.attr("transform").string("translate(" + (width / 2) + "," + (height - padding) + ")")
				;
		}
	}
	
	function setText(v : String)
	{
		this.text = v;
		if(null != nodeText)
			nodeText.text().string(text);
		return v;
	}
	
	function setAnchor(v : Anchor)
	{
		this.anchor = v;
		resize();
		return v;
	}
	
	function setPadding(v : Int)
	{
		this.padding = v;
		resize();
		return v;
	}
}