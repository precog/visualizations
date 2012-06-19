/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;

import rg.util.Periodicity;
import rg.data.DataPoint;
import rg.axis.ScaleDistribution;
import rg.axis.Stats;
using rg.info.filter.FilterDescription;
import rg.info.filter.TransformResult;
import thx.util.Message;
using Arrays;

@:keep class InfoVariable extends Info
{
	public var type : Null<String>;
	public var min : Null<Dynamic>;
	public var max : Null<Dynamic>;
	public var values : Null<Array<Dynamic>>;
	public var groupBy : Null<String>;
	public var variableType : VariableType;
	public var scaleDistribution : Null<ScaleDistribution>;

	public function new()
	{
		variableType = Unknown;
	}

	public static function filters() : Array<FilterDescription>
	{
		return [
			"type".toStr(),
			"view".custom(["min"], function(value : Dynamic) {
				if(!Std.is(value, Array) || !testViewValue(value[0]))
					return TransformResult.Failure(new Message("value is expected to be an array of two items but is '{0}'", [value]));
				else
					return TransformResult.Success(value[0]);
			}),
			"view".custom(["max"], function(value : Dynamic) {
				if(!Std.is(value, Array) || !testViewValue(value[1]))
					return TransformResult.Failure(new Message("value is expected to be an array of two items but is '{0}'", [value]));
				else
					return TransformResult.Success(value[1]);
			}),
			"values".toArray(),
			"groupby".custom(["groupBy"], function(value : Dynamic) {
				if(!Std.is(value, String) || !Periodicity.isValidGroupBy(value))
					return TransformResult.Failure(new Message("value is expected to be a valid string periodicity but is '{0}'", [value]));
				else
					return TransformResult.Success(value);
			}),
			"variable".custom(["variableType"], function(value : Dynamic) {
				var v = null == value ? null : (""+value).toLowerCase();
				if(!["independent", "dependent"].exists(v))
					return TransformResult.Failure(new Message("value is expected to be an 'independent' or 'dependent' but is '{0}'", [value]));
				else
					return TransformResult.Success(Type.createEnum(VariableType, Strings.ucfirst(v.toLowerCase()), []));
			}),
			"scalemode".toTry(["scaleDistribution"], function(value : Dynamic) {
				return Type.createEnum(ScaleDistribution, "Scale" + Strings.ucfirst(("" + value).toLowerCase()), []);
			}, "value is expected to be a valid scale distribution value but is '{0}'")
		];
	}
/*
	public static function filters() : Array<FieldFilter>
	{
		return [{
			field : "type",
			validator : function(v) return Std.is(v, String),
			filter : null
		}, {
			field : "view",
			validator : function(v) return Std.is(v, Array) && testViewValue(v[0]) && testViewValue(v[1]),
			filter : function(v) {
				var result = [];
				if (null != v[0])
					result.push( { field : "min", value : v[0] } );
				if (null != v[1])
					result.push( { field : "max", value : v[1] } );
				return result;
			}
		}, {
			field : "values",
			validator : function(v) return Std.is(v, Array) && Arrays.all(v, function(v) return Types.isPrimitive(v)),
			filter : null
		}, {
			field : "groupby",
			validator : function(v : Dynamic) return Std.is(v, String) && Periodicity.isValidGroupBy(v),
			filter : function(v : Dynamic) {
				return [{
					field : "groupBy",
					value : v
				}];
			}
		}, {
			field : "variable",
			validator : function(v : Dynamic) return Std.is(v, String) && ["independent", "dependent"].exists(v.toLowerCase()),
			filter : function(v : Dynamic)
			{
				return [{
					field : "variableType",
					value : Type.createEnum(VariableType, Strings.ucfirst(("" + v).toLowerCase()), [])
				}];
			}
		}, {
			field : "scalemode",
			validator : function(v : Dynamic) return Std.is(v, String),
			filter : function(v : Dynamic)
			{
				return [{
					field : "scaleDistribution",
					value : cast Type.createEnum(ScaleDistribution, "Scale" + Strings.ucfirst(("" + v).toLowerCase()), [])
				}];
			}
		}];
	}
*/
	static function testViewValue(v : Dynamic)
	{
		return v == null || Types.isPrimitive(v) || Std.is(v, Date) || Reflect.isFunction(v);
	}
}

enum VariableType
{
	Unknown;
	Independent;
	Dependent;
}