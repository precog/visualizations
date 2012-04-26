package rg.storage;

class MemoryStorage implements IStorage
{
	var storage : Hash<Dynamic>;
	public function new()
	{
		storage = new Hash();
	}

	public function set(name : String, value : Dynamic) : Void
	{
		storage.set(name, value);
	}
	public function get(name : String) : Dynamic
	{
		return storage.get(name);
	}
	public function clear() : Void
	{
		storage = new Hash();
	}
	public function remove(name : String) : Void
	{
		storage.remove(name);
	}
	public function keys()
	{
		return storage.keys();
	}

	public function toString() return "MemoryStorage"
}