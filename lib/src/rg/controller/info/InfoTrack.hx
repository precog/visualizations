/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;
import rg.RGConst;
using rg.controller.info.Info;

class InfoTrack
{
	public var enabled : Bool;
	public var token : String;
	public var paths : Array<String>;
	public var hash : String;

	public function new()
	{
		enabled = false;
		token = RGConst.TRACKING_TOKEN;
		paths = [
			"/",
			"/{hash}/"
		];
		hash = null;
	}

	public static function filters()
	{
		return [{
			field : "enabled",
			validator : function(v) return Std.is(v, Bool),
			filter : null
		}, {
			field : "token",
			validator : function(v) return Std.is(v, String),
			filter : null
		}, {
			field : "paths",
			validator : function(v) return Std.is(v, Array),
			filter : null
		},{
			field : "hash",
			validator : function(v) return v == null || Std.is(v, String),
			filter : null
		}];
	}
}