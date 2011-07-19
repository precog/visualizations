/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;
import thx.error.AbstractMethod;
import thx.error.Error;

class Info 
{
	public function new(?o : { }) 
	{
		if (null != o)
			feedOptions(o);
	}
	
	function filters() : Array<FieldFilter>
	{
		return throw new AbstractMethod();
	}

	public function feedOptions(o : { } )
	{
		var value : Dynamic;
		for (filter in filters())
		{
			if (Reflect.hasField(o, filter.field))
			{
				if (null != filter.validator && !filter.validator(value = Reflect.field(o, filter.field)))
					throw new Error("the parameter '{0}' can't have value '{1}'", [filter.field, value]);

				var items = null == filter.filter ? [ { field : filter.field, value : value } ] : filter.filter(value);
				for(item in items)
					Reflect.setField(this, item.field, item.value);
			}
		}
	}
}