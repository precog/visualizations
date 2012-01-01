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
			case "topleft":
				return DownloaderPosition.TopLeft;
			case "topright", "auto":
				return DownloaderPosition.TopRight;
			case "bottomleft":
				return DownloaderPosition.BottomLeft;
			case "before":
				return DownloaderPosition.Before;
			case "after":
				return DownloaderPosition.After;
			default: // "bottomright"
				return DownloaderPosition.BottomRight;
		}
	}
}