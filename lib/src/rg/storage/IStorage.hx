package rg.storage;

interface IStorage
{
	public function keys() : Iterator<String>;
	public function set(name : String, value : Dynamic) : Void;
	public function get(name : String) : Dynamic;
	public function remove(name : String) : Void;
	public function clear() : Void;
}