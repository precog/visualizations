/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;
import thx.error.AbstractMethod;
import thx.error.Error;

class Info 
{
	public static function feed<T>(info : T, ob : { }) : T
	{
		if (null == ob)
			return info;
		var cl = Type.getClass(info),
			method = Reflect.field(cl, "filters");
		if (null == method)
		{
			Objects.copyTo(ob, info);
			return info;
		}
		
		var filters : Array<FieldFilter> = Reflect.callMethod(cl, method, []),
			value : Dynamic;
		for (filter in filters)
		{
			if (Reflect.hasField(ob, filter.field))
			{
				if (null != filter.validator && !filter.validator(value = Reflect.field(ob, filter.field)))
				{
					trace(value);
					trace(filter.field);
					throw new Error("the parameter '{0}' can't have value '{1}'", [filter.field, value]);
				}

				var items = null == filter.filter ? [ { field : filter.field, value : value } ] : filter.filter(value);
				for(item in items)
					Reflect.setField(info, item.field, item.value);
			}
		}
		return info;
	}
}