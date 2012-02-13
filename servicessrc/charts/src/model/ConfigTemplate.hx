package model;

import thx.collection.Set;
using Arrays;

class ConfigTemplate
{
	var params : Set<String>;
	var allowedValues : Hash<Array<Dynamic>>;
	var defaults : Hash<Dynamic>;
	public function new()
	{
		params = new Set();
		allowedValues = new Hash();
		defaults = new Hash();
	}

	public function addParameter(name : String, ?values : Array<Dynamic>)
	{
		params.add(name);
		if(null != values)
			allowedValues.set(name, values);
	}

	public function isValid(name : String, value : Dynamic)
	{
		var values = allowedValues.get(name);
		if(null == values)
			return true;
		return values.exists(value);
	}

	public function setDefault(name : String, value : Dynamic)
	{
		defaults.set(name, value);
	}

	public function getDefault(name : String)
	{
		return defaults.get(name);
	}

	public function replaceables()
	{
		var list = params.array();
		list.sort(function(a, b) {
			var c = b.length - a.length;
			if(c != 0)
				return c;
			return Strings.compare(a, b);
		});
		return list;
	}
}