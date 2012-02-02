package rg.storage;

import thx.json.Json;

class BrowserStorage implements IStorage
{
	var storage : API;
	public var kind(default, null) : String;
	private function new(api : API, kind : String)
	{
		storage = api;
		this.kind = kind;
	}
	public function set(name : String, value : Dynamic) : Void
	{
		storage.setItem(name, Json.encode(value));
	}
	public function get(name : String) : Dynamic
	{
		var v = storage.getItem(name);
		if(null == v)
			return v;
		else
			return Json.decode(v);
	}
	public function clear() : Void
	{
		storage.clear();
	}
	public function remove(name : String) : Void
	{
		storage.removeItem(name);
	}
	public function keys()
	{
		var keys = [];
		for(i in 0...storage.length)
			keys.push(storage.key(i));
		return keys.iterator();
	}

	public static function hasSessionStorage()
	{
		return null != untyped __js__("sessionStorage");
	}

	public static function sessionStorage()
	{
		return new BrowserStorage(untyped __js__("sessionStorage"), "sessionStorage");
	}

	public static function hasLocalStorage()
	{
		return null != untyped __js__("localStorage");
	}

	public static function localStorage()
	{
		return new BrowserStorage(untyped __js__("localStorage"), "localStorage");
	}

	public function toString() return Std.format("BrowserStorage[$kind]")
}

typedef API = {
	public var length(default, null) : Int;
	public function key(index : Int) : String;
	public function getItem(key : String) : String;
	public function setItem(key : String, data : String) : Void;
	public function removeItem(key : String) : Void;
	public function clear() : Void;
}