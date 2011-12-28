/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;
import rg.data.DataPoint;
import thx.error.Error;

class InfoDataSource
{
	public var namedData : Null<String>;
	public var data : Null<Array<DataPoint>>;

	public function new()
	{
	}

	public static function filters() : Array<FieldFilter>
	{
		return [{
			field : "data",
			validator : function(v) return Std.is(v, String) || (Std.is(v, Array) && Arrays.all(v, function(v) return Types.isAnonymous(v))),
			filter : function(v)
			{
				if(Std.is(v, Array))
					return [{ field : "data", value : v }];
				else
					return [{ field : "namedData", value : v }];
			}
		}];
	}
}