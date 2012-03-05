/**
 * ...
 * @author Franco Ponticelli
 */

package rg.svg.panel;
import rg.frame.StackItem;
import dhx.Selection;
import rg.frame.FrameLayout;
import rg.frame.Orientation;
import rg.frame.Frame;

class Space extends Container
{
	var panel : StackItem;
	var svg : Selection;
	
	public function new(width : Int, height : Int, domcontainer : Selection) 
	{
		panel = new StackItem(Fill(0, 0));
		super(panel, Vertical);
		init(svg = domcontainer.append("svg:svg").attr("xmlns").string("http://www.w3.org/2000/svg"));
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