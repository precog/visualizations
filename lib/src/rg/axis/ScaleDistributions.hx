/**
 * ...
 * @author Franco Ponticelli
 */

package rg.axis;

class ScaleDistributions
{
	public static function distribute(scale : ScaleDistribution, pos : Int, values : Int) : Float
	{
		switch(scale)
		{
			case ScaleFit:
				return (pos + 0.5) / values;
			case ScaleFill:
				return pos / (values-1);
			case ScaleBefore:
				return pos / values;
			case ScaleAfter:
				return (pos + 1) / values;
		}
	}
}