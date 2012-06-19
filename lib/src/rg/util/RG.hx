/**
 * ...
 * @author Franco Ponticelli
 */

package rg.util;

class RG
{
	public static function getTokenId() : String
	{
		try {
			return Strings.trim(untyped __js__("ReportGrid.$.Config.tokenId"), '"');
		} catch(e : Dynamic) {
			return null;
		}
	}
}