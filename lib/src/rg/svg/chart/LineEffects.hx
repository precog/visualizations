/**
 * ...
 * @author Franco Ponticelli
 */

package rg.svg.chart;

class LineEffects 
{
	public static function parse(s : String) : LineEffect 
	{
		var parts = s.toLowerCase().split(":");
		switch(parts.shift())
		{
			case "dropshadow":
				var offsetx = 0.5,
					offsety = 0.5,
					levels = 2,
					parameters = parts.pop();
				if (null != parameters)
				{
					var parameters = parameters.split(",");
					offsetx = Std.parseFloat(parameters[0]);
					if(parameters.length > 1)
						offsety = Std.parseFloat(parameters[1]);
					else
						offsety = offsetx;
					if (parameters.length > 2)
						levels =  Std.parseInt(parameters[2]);
				}
				return LineEffect.DropShadow(offsetx, offsety, levels);
			case "gradient":
				var lightness = 0.75,
					levels = 2,
					parameters = parts.pop();
				if (null != parameters)
				{
					lightness = Std.parseFloat(parameters.split(",").shift());
					var nlevels = parameters.split(",").pop();
					if (null != nlevels)
						levels =  Std.parseInt(nlevels);
				}
				return LineEffect.Gradient(lightness, levels);
			default:
				return LineEffect.NoEffect;
		}
	}
}