/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;
import thx.error.AbstractMethod;
import thx.error.Error;
import thx.util.Message;
using rg.info.filter.FilterDescription;

@:keep class Info
{
	public static function feed<T>(info : T, ob : { }) : T
	{
		if(null == ob)
			return info;
		var cl = Type.getClass(info),
			method = Reflect.field(cl, "filters");
		if (null == method)
			return info;
		var descriptions : Array<FilterDescription> = Reflect.callMethod(cl, method, []),
			value;
		for(description in descriptions) {
			if(Reflect.hasField(ob, description.name))
			{
				value = Reflect.field(ob, description.name);
				switch (description.transformer.transform(value)) {
					case Success(pairs):
						for(pair in pairs)
						{
							Reflect.setField(info, pair.name, pair.value);
						}
					case Failure(reasons): // Array<thx.util.Message>
						warn(description.name, reasons);
				}
			}
		}
		return info;
	}

	static function warn(name : String, message : Message) {
		warner(Std.format("the parameter $name has not been applied because: $message"));
	}

	static var warner =
#if debug
		function(m : Dynamic) {
			haxe.Log.trace("WARN: " + m);
		}
#else
		{
			if(untyped __js__("window.console && window.console.warn"))
			{
				function(m : Dynamic)
				{
					untyped console.warn("" + m);
				}
			} else {
				function(m : Dynamic) { }
			}
		};
#end
}