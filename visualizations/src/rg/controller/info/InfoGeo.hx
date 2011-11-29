/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;

import rg.data.DataPoint;
import rg.data.Stats;
using rg.controller.info.Info;
using Arrays;

class InfoGeo
{
	public var map : Array<InfoMap>;
	public var label : InfoLabel;
	
	public function new() 
	{
		label = new InfoLabel();
		map = [new InfoMap().feed({ template : "world" })];
	}
	
	public static function filters()
	{
		return [{
			field : "map",
			validator : function(v) return Types.isAnonymous(v) || Std.is(v, Array),
			filter : function(v) {
				return [{
					field : "map",
					value : (Std.is(v, Array) ? cast v : [v]).map(function(d, i) {
						return new InfoMap().feed(d);
					})
				}];
			}
		}];
	}
}