/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;
using rg.controller.info.Info;

class InfoSankey
{
	public var label : InfoLabel;
	public var idproperty : String;
	public var weightproperty : String;
	public var parentsproperty : String;
	public function new()
	{
		label = new InfoLabel();
		idproperty = "id";
		weightproperty = "count";
		parentsproperty = "parents";
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