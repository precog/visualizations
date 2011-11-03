/**
 * ...
 * @author Franco Ponticelli
 */

package rg.util;

class RG 
{
	public static function getTokenId() : String
	{
		return Strings.trim(Dynamics.string(untyped __js__("ReportGrid.$.Config.tokenId")), '"');
	}
}