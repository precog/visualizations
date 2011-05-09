package rg.layout;

class StackFrame extends Frame
{
	public var disposition(default, setDisposition) : Disposition;
	public var parent(default, null): Stack;
	
	public function new(disposition : Disposition)
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