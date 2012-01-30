/**
 * ...
 * @author Franco Ponticelli
 */

package rg.svg.widget;

class LabelOrientations
{
	public static function parse(s : String) : LabelOrientation
	{
		return switch(s.toLowerCase())
		{
			case "ortho", "orthogonal":
				LabelOrientation.Orthogonal;
			default:
				LabelOrientation.Aligned;
		}
	}
}