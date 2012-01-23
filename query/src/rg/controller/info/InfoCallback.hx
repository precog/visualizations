package rg.controller.info;

import rg.data.DataPoint;

class InfoCallback
{
	public var handler : Array<DataPoint> -> Void;
	public function new()
	{
		handler = function(_) { };
	}

	public static function filters() : Array<FieldFilter>
	{
		return [{
			field : "callback",
			validator : function(v) return Reflect.isFunction(v),
			filter : function(v)
			{
				return [{
					field : "handler",
					value : v
				}];
			}
		}];
	}
}