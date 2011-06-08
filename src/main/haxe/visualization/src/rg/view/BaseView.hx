package rg.view;
import hxevents.Notifier;

/**
 * ...
 * @author Franco Ponticelli
 */

class BaseView 
{
	function new()
	{
		width = height = 0;
		onResize = new Notifier();
	}
	
	public var container(default, null) : Selection;
	public var width(default, null) : Int;
	public var height(default, null) : Int;
	
	public var onResize(default, null) : Notifier;
	
	public function resize(w : Int, h : Int)
	{
		if (width == w && height == h)
			return this;
		width = w;
		height = h;
		onResize.dispatch();
		return this;
	}
}