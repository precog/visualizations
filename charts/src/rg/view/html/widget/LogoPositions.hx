/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.html.widget;

class LogoPositions
{
	public static function parse(v : String)
	{
		switch(v.toLowerCase())
		{
			case "top":
				return LogoPosition.Top;
			case "topleft":
				return LogoPosition.TopLeft;
			case "topright":
				return LogoPosition.TopRight;
			case "bottomleft":
				return LogoPosition.BottomLeft;
			case "before":
				return LogoPosition.Before;
			case "after":
				return LogoPosition.After;
			default: // "bottomright"
				return LogoPosition.BottomRight;
		}
	}
}