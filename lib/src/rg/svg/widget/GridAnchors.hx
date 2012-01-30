/**
 * ...
 * @author Franco Ponticelli
 */

package rg.svg.widget;

class GridAnchors 
{
	public static function parse(s : String) : GridAnchor
	{
		return switch(s.toLowerCase())
		{
			case "topleft":     GridAnchor.TopLeft;
			case "top":         GridAnchor.Top;
			case "topright":    GridAnchor.TopRight;
			case "left":        GridAnchor.Left;
			case "center":      GridAnchor.Center;
			case "right":       GridAnchor.Right;
			case "bottomleft":  GridAnchor.BottomLeft;
			case "bottom":      GridAnchor.Bottom;
			case "bottomright": GridAnchor.BottomRight;
			default:            GridAnchor.Center;
		}
	}
}