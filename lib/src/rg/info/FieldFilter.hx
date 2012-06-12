/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;

typedef FieldFilter =
{
	field : String,
	validator : Dynamic -> Bool,
	filter : Dynamic -> Array<{ value : Dynamic, field : String }>
}

class FieldInfo {
	public var name(default, null) : String;
	public var mapTo(default, null) : Null<String>;
	public var validator(default, null) : ValueValidator;
	public var filter(default, null) : ValueFilter;

	public function new(name : String, ?mapto : String, ?validator : ValueValidator, ?filter : ValueFilter)
	{
		this.name  = name;
		this.mapTo = null == mapto ? name : mapto;
		this.validator = null == validator ? ValueValidator.instance : validator;
		this.filter = null == filter ? ValueFilter.instance : filter;
	}
}

class ValueValidator {
	public static var instance(default, null) : ValueValidator = new ValueValidator();
	public function new() {}
	public function validate(value : Dynamic) return true
}

class ValueFilter {
	public static var instance(default, null) : ValueFilter = new ValueFilter();
	public function new() {}
	public function filter(value : Dynamic) return value
}