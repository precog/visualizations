/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.svg.chart;

class GradientEffects 
{
	public static function canParse(d : Dynamic)
	{
		if (!Std.is(d, String))
			return false;
		var s : String = d,
			parts = s.toLowerCase().split("-");
		return switch(parts[0])
		{
			case "gradient", "noeffect": true;
			default: false;
		}
	}
	
	public static function parse(s : String) : GradientEffect 
	{
		var parts = s.toLowerCase().split("-");
		switch(parts.shift())
		{
			case "gradient":
				var lightness = 0.75,
					parameters = parts.pop();
				if (null != parameters)
					lightness = Std.parseFloat(parameters.split(",").shift());
				return GradientEffect.Gradient(lightness);
			default:
				return GradientEffect.NoEffect;
		}
	}
}