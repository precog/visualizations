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
	public static var SERVICE_RENDERING_STATIC = "http://api.reportgrid.com/services/renderer/v1/";
	public static var TRACKING_TOKEN = "SUPERFAKETOKEN";
#else
	public static var BASE_URL_GEOJSON = "http://localhost/rg/vis/geo/json/";
	//http://devapp01.reportgrid.com:20000/
	public static var SERVICE_RENDERING_STATIC= "http://devapi.reportgrid.com/services/renderer/v1/";
	public static var TRACKING_TOKEN = "SUPERFAKETOKEN";
#end
}