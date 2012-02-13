/**
 * ...
 * @author Franco Ponticelli
 */

package rg.util;

class RG
{
	public static function getTokenId() : String
	{
		if(untyped __js__("ReportGrid.$"))
			return Strings.trim(untyped __js__("ReportGrid.$.Config.tokenId"), '"');
		else
			return null;
	}
}