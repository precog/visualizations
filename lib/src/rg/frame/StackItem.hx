/**
 * ...
 * @author Franco Ponticelli
 */

package rg.frame;

class StackItem extends Frame
{
	public var disposition(default, setDisposition) : FrameLayout;
	public var parent(default, null): Stack;
	
	public function new(disposition : FrameLayout)
	{
		super();
		this.disposition = disposition;
	}
	
	function setParent(v)
	{
		if (null != parent)
			parent.removeChild(this);
		return parent = v;
	}
	
	function setDisposition(v)
	{
		disposition = v;
		if (null != parent)
			parent.reflow();
		return v;
	}
}