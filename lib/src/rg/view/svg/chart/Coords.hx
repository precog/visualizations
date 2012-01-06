/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.svg.chart;

class Coords 
{
	static var retransform = ~/translate\(\s*(\d+(?:\.\d+)?)\s*(?:[, ]\s*(\d+(?:\.\d+)?)\s*)?\)/;
	public static function fromTransform(s : String)
	{
		if (!retransform.match(s))
			return [0.0, 0];
		else
		{
			var y = retransform.matched(2);
			return [Std.parseFloat(retransform.matched(1)), null == y ? 0 : Std.parseFloat(y)];
		}
	}
}