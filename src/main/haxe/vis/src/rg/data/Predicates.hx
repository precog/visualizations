/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;
import haxe.Md5;

class Predicates 
{
	public static function id(o : Dynamic)
	{
		return Md5.encode(Dynamics.string(o));
	}
	
	public static function periodicity(o : Dynamic)
	{
		return Reflect.field(o, "periodicity");
	}
}