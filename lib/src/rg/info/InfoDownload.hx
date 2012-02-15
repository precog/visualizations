/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;

using rg.info.Info;
import rg.html.widget.DownloaderPosition;
import rg.html.widget.DownloaderPositions;
import rg.RGConst;

class InfoDownload
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

	public static function filters()
	{
		return [{
			field : "handler",
			validator : function(v) return Reflect.isFunction(v),
			filter : null
		}, {
			field : "service",
			validator : function(v) return Std.is(v, String),
			filter : null
		}, {
			field : "legacyservice",
			validator : function(v) return Std.is(v, String),
			filter : null
		}, {
			field : "formats",
			validator : function(v) return Std.is(v, Array),
			filter : null
		}, {
			field : "position",
			validator : function(v) return Std.is(v, String),
			filter : function(v)
			{
				return [ {
					field : "position",
					value : DownloaderPositions.parse(v)
				}];
			}
		}];
	}
}