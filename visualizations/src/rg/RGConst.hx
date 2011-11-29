/**
 * ...
 * @author Franco Ponticelli
 */

package rg;

class RGConst 
{
	public static var SERVICE_VISTRACK_HASH = "http://devapp02.reportgrid.com:30050/auditPath?tokenId={$token}";
#if release
	public static var BASE_URL_GEOJSON = "http://api.reportgrid.com/geo/json/";
	public static var SERVICE_RENDERING_STATIC = "http://devapp02.reportgrid.com:20000/";
	public static var TRACKING_TOKEN = "SUPERFAKETOKEN";
#else
	public static var BASE_URL_GEOJSON = "geo/json/";
	public static var SERVICE_RENDERING_STATIC= "http://devapp02.reportgrid.com:20000/";
	public static var TRACKING_TOKEN = "SUPERFAKETOKEN";
#end
}