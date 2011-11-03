/**
 * ...
 * @author Franco Ponticelli
 */

package rg;

class RGConst 
{
	public static var SERVICE_VISTRACK_HASH = "http://devapp01.reportgrid.com:30050/auditPath?tokenId={$token}";
#if release
	public static var BASE_URL_GEOJSON = "http://api.reportgrid.com/geo/json/";
	public static var SERVICE_RENDERING_STATIC = "http://devtest01.reportgrid.com:20000/";
#else
	public static var BASE_URL_GEOJSON = "geo/json/";
	public static var SERVICE_RENDERING_STATIC= "http://rgrender/";
#end
}