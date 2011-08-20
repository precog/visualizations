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
	public var text(getText, setText) : String;
	public var anchor(default, setAnchor) : Anchor;
	public var padding(default, setPadding) : Int;
	
	var label : Label;
	var group : Selection;
//	var nodeText : Selection;
//	var nodeGroup : Selection;
	
	public function new(panel : Panel, text : String, anchor : Anchor, padding = 1, className = "title", shadow = true, outline = false) 
	{
		super(panel);
		this.addClass(className);
		group = g.append("svg:g");
		label = new Label(group, false, shadow, outline);
		label.orientation = LabelOrientation.Orthogonal;
		
//		nodeGroup = g.append("svg:g");
//		nodeText = nodeGroup.append("svg:text")
//			.attr("text-anchor").string("middle");
		this.anchor = anchor;
		this.padding = padding;
		this.text = text;
		
		resize();
	}
	
	public function idealHeight() : Int
	{
		var size = label.getSize();
		return Math.round(switch(anchor)
		{
			case Left, Right: size.width + padding;
			case Top, Bottom: size.height + padding;
		});
//		if (Strings.empty(text))
//			return 0;
//		var bbox : { height : Float } = untyped nodeText.node().getBBox();
//		return Math.round(bbox.height);
	}
	
	override function resize()
	{
//		if (null == nodeText || null == anchor || null == width || padding == null)
//			return;
		if (null == anchor || null == width || padding == null)
			return;
		switch(anchor)
		{
			case Top:    group.attr("transform").string("translate(" + (width / 2) + "," + padding + ")");
			case Right:  group.attr("transform").string("translate(" + (width - padding) + "," + (height / 2) + ")");
			case Left:   group.attr("transform").string("translate(" + (padding) + "," + (height / 2) + ")");
			case Bottom: group.attr("transform").string("translate(" + (width / 2) + "," + (height - padding) + ")");
		}
			
/*
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
*/
	}
	
	function getText() return label.text
	
	function setText(v : String)
	{
		return label.text = v;
//		this.text = v;
//		if(null != nodeText)
//			nodeText.text().string(text);
//		return v;
	}
	
	function setAnchor(v : Anchor)
	{
		
		switch(this.anchor = v)
		{
			case Top:    label.anchor = GridAnchor.Top;
			case Bottom: label.anchor = GridAnchor.Bottom;
			case Left:   label.anchor = GridAnchor.Bottom;
			case Right:  label.anchor = GridAnchor.Bottom;
		}
		return v;
//		label.anchor
//		this.anchor = v;
//		resize();
//		return v;
	}
	
	function setPadding(v : Int)
	{
		this.padding = v;
		switch(anchor)
		{
			case Top:    label.place(0, 0, 90);
			case Bottom: label.place(0, 0, 90);
			case Left:   label.place(0, 0, 180);
			case Right:  label.place(0, 0, 0);
		}
//		label.place(
//		resize();
		return v;
	}
}