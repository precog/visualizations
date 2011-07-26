/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.svg.panel;
import rg.view.frame.StackItem;
import thx.js.Selection;
import rg.view.frame.FrameLayout;
import rg.view.frame.Orientation;
import rg.view.frame.Frame;

class Space extends Container
{
	var panel : StackItem;
	var svg : Selection;
	
	public function new(width : Int, height : Int, domcontainer : Selection) 
	{
		panel = new StackItem(Fill(0, 0));
		super(panel, Vertical);
		init(svg = domcontainer.append("svg:svg"));
		resize(width, height);
	}
	
	public function resize(width : Int, height : Int)
	{
		if (panel.width == width && panel.height == height)
			return;
		svg
			.attr("width").float(width)
			.attr("height").float(height);
		var sf : FrameFriend = panel;
		sf.setLayout(0, 0, width, height);
	}
}