/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;
using rg.controller.info.Info;

class InfoSankey
{
	public var label : InfoLabel;

	public function new()
	{
		label = new InfoLabel();
	}

	public static function filters()
	{
		return [{
			field : "label",
			validator : function(v) return Types.isAnonymous(v),
			filter : function(v) return [{
				field : "label",
				value : new InfoLabel().feed(v)
			}]
		}];
	}
}