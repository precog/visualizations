/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.frame;

class Frame
{
	
	public var x(default, null) : Int;
	public var y(default, null) : Int;
	public var width(default, null) : Int;
	public var height(default, null) : Int;
	
	public dynamic function change() {}
	
	public function new()
	{
		x = y = width = height = 0;
	}
	
	function setLayout(x : Int, y : Int, width : Int, height : Int)
	{
		if (this.x == x && this.y == y && this.width == width && this.height == height)
			return;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		change();
	}
	
	public function toString() return "[x: " + x +", y: " + y + ", width: " + width + ", height: " + height + "]"
}

typedef FrameFriend = {
	private function setLayout(x : Int, y : Int, width : Int, height : Int) : Void;
}