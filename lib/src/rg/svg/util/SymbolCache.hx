/**
 * ...
 * @author Franco Ponticelli
 */

package rg.svg.util;
import thx.svg.Symbol;

class SymbolCache 
{
	static inline var DEFAULT_SYMBOL = "circle";
	public static var cache(default, null) : SymbolCache;
	
	var c : Hash<String>;
	var r : Int;
	public function new() 
	{
		c = new Hash();
		r = 0;
	}
	
	public function get(type : String, size = 100)
	{
#if debug
		r++;
#end
		var k = type + ":" + size,
			s = c.get(k);
		if (null == s)
		{
			s = Reflect.field(Symbol, type)(size);
			c.set(k, s);
		}
		return s;
	}
	
	public function stats()
	{
		return {
			cachedSymbols : Iterators.array(c.iterator()).length
#if debug
			, requests : r
#end
		};
	}
	
	static function __init__()
	{
		cache = new SymbolCache();
	}
}