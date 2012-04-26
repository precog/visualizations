/**
 * ...
 * @author Franco Ponticelli
 */

package rg;

class RGConst
{
//	public static var SERVICE_VISTRACK_HASH = "http://devapp01.reportgrid.com:30050/auditPath?tokenId={$token}";
#if release
	public static var BASE_URL_GEOJSON = "http://api.reportgrid.com/geo/json/";
	public static var SERVICE_RENDERING_STATIC = "http://api.reportgrid.com/services/viz/charts/up.json";
	public static var LEGACY_RENDERING_STATIC  = "http://api.reportgrid.com/services/viz/charts/upandsee.{ext}";
#else
	static var HOST = "" == js.Lib.window.location.host ? "localhost" : js.Lib.window.location.host;
	public static var BASE_URL_GEOJSON = "http://"+HOST+"/rg/vis/geo/json/";
	public static var SERVICE_RENDERING_STATIC = "http://"+HOST+"/rg/services/viz/charts/up.json";
	public static var LEGACY_RENDERING_STATIC  = "http://"+HOST+"/rg/services/viz/charts/upandsee.{ext}";
#end
}