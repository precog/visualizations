/**
 * ...
 * @author Franco Ponticelli
 */

package rg.util;

class RG 
{
	public static function getTokenId() : String
	{
		return "chart" + haxe.Md5.encode("chart");
	}
}