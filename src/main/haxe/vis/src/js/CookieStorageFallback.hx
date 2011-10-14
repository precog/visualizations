/**
 * ...
 * @author Franco Ponticelli
 */

package js;
import js.Cookie;
using Iterators;

class CookieStorageFallback implements Storage
{
	static var DEFAULT_PATH = "/";
	static var DEFAULT_EXPIRATION = 10 * 365 * 24 * 60 * 60;
	
	public function new() 
	{
		length = Cookie.all().keys().array().length;
	}
	
	public var length(default, null) : Int;
	
	public function key(index : Int) : Null<String>
	{
		var keys = Cookie.all().keys().array();
		return keys[index];
	}
	
	public function getItem(key : String) : Null<String>
	{
		return Cookie.get(key);
	}
	
	public function setItem(key : String, value : String) : Void
	{
		if (!Cookie.exists(key))
			length++;
		Cookie.set(key, value, DEFAULT_EXPIRATION, DEFAULT_PATH);
	}
	
	public function removeItem(key : String) : Void
	{
		length--;
		Cookie.remove(key, DEFAULT_PATH);
	}
	
	public function clear() : Void
	{
		var keys = Cookie.all().keys().array();
		for (key in keys)
			removeItem(key);
	}
}