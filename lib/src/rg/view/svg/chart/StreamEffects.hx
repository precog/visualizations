/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.svg.chart;

class StreamEffects 
{
	static function getLightness(p : String, alt : Float)
	{
		if (null == p)
			return alt;
		else
			return Std.parseFloat(p);
	}
	
	public static function parse(s : String) : StreamEffect 
	{
		var parts = s.toLowerCase().split(":");
		switch(parts.shift())
		{
			case "gradient", "gradientv", "gradientvert", "gradientvertical":
				return StreamEffect.GradientVertical(getLightness(parts.pop(), 0.75));
			case "gradienth", "gradienthoriz", "gradienthorizontal":
				return StreamEffect.GradientHorizontal(getLightness(parts.pop(), 0.75));
			default:
				return StreamEffect.NoEffect;
		}
	}
}