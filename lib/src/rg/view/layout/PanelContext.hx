/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.layout;
import rg.view.svg.panel.Panel;

class PanelContext 
{
	public var panel(default, null) : Panel;
	public var anchor(default, null) : Anchor;
	public function new(panel : Panel, anchor : Anchor) 
	{
		this.panel = panel;
		this.anchor = anchor;
	}
}