/**
 * ...
 * @author Franco Ponticelli
 */

package js;

class LocalStorage
{
	public static var instance(default, null) : Storage;
	static function __init__() 
	{
		instance = untyped __js__("window.localStorage");
		if (null == instance)
		{
			instance = new CookieStorageFallback();
		}
	}
}

