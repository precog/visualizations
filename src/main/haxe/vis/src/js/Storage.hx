/**
 * ...
 * @author Franco Ponticelli
 */

package js;

interface Storage 
{
	public var length(default, null) : Int;
	public function key(index : Int) : Null<String>;
	public function getItem(key : String) : String;
	public function setItem(key : String, value : String) : Void;
	public function removeItem(key : String) : Void;
	public function clear() : Void;
}