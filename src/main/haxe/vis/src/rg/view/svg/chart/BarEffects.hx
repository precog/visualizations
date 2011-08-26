/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.svg.chart;

class BarEffects 
{
	public static function parse(s : String) : BarEffect 
	{
		var parts = s.toLowerCase().split("-");
		switch(parts.shift())
		{
			case "gradient":
				var lightness = 0.75,
					parameters = parts.pop();
				if (null != parameters)
					lightness = Std.parseFloat(parameters.split(",").shift());
				return BarEffect.Gradient(lightness);
			default:
				return BarEffect.NoEffect;
		}
	}
}