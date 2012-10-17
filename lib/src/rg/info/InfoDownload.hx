/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;

using rg.info.Info;
import rg.html.widget.DownloaderPosition;
import rg.html.widget.DownloaderPositions;
import rg.RGConst;
import thx.util.Message;
using rg.info.filter.FilterDescription;
using rg.info.filter.TransformResult;

@:keep class InfoDownload
{
	public var handler : (String -> String -> (Dynamic -> Bool) -> (String -> Void) -> Void) -> Void;
	public var service : String;
	public var legacyservice : String;
	public var position : Null<DownloaderPosition>;
	public var formats : Array<String>;

	public function new()
	{
		service = RGConst.SERVICE_RENDERING_STATIC;
		legacyservice = RGConst.LEGACY_RENDERING_STATIC;
		formats = ['pdf', 'png', 'jpg', 'svg'];
	}

	public static function filters() : Array<FilterDescription>
	{
		return [
			"handler".toFunction(),
			"service".toStr(),
			"legacyservice".toStr(),
			"formats".toArray(),
			"position".custom(
				function(value : Dynamic) {
					if(Std.is(value, String) || value.nodeName)
						return TransformResult.Success(DownloaderPositions.parse(value));
					else
						return TransformResult.Failure(new Message("invalid downloader position: {0}", value));
				})
		];
	}
}