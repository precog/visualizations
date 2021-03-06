/**
 * ...
 * @author Franco Ponticelli
 */

package rg;

class RGConst
{
//	public static var SERVICE_VISTRACK_HASH = "http://devapp01.reportgrid.com:30050/auditPath?tokenId={$token}";
#if release
	// TODO: add HTTPS!
	public static var BASE_URL_GEOJSON = "https://api.reportgrid.com/geo/json/";
	public static var SERVICE_RENDERING_STATIC = "https://api.reportgrid.com/services/viz/charts/up.json";
	public static var LEGACY_RENDERING_STATIC  = "https://api.reportgrid.com/services/viz/charts/upandsee.{ext}";
#else
	static var HOST = "" == js.Browser.window.location.host ? "localhost" : js.Browser.window.location.host;
	public static var BASE_URL_GEOJSON = "http://"+HOST+"/rg/charts/geo/json/";
	public static var SERVICE_RENDERING_STATIC = "http://"+HOST+"/rg/services/viz/charts/up.json";
//	public static var LEGACY_RENDERING_STATIC  = "http://"+HOST+"/rg/services/viz/charts/upandsee.{ext}";
	public static var LEGACY_RENDERING_STATIC  = "https://api.reportgrid.com/services/viz/charts/upandsee.{ext}";
#end
}