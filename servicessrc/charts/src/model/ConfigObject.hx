package model;

import thx.collection.Set;
import thx.date.Milli;
import thx.error.Error;
using Arrays;

typedef ConfigObject = {
	cacheExpires : Float,
	allowedFormats : Array<String>,
	params : Dynamic,
	defaults : Dynamic
}

class ConfigObjects
{
	static var FORMATS = ['pdf', 'png', 'jpg', 'html'];
	public static function createDefault() : ConfigObject
	{
		return {
			cacheExpires : 30 * 60 * 24 * 1000.0,
			allowedFormats : ['pdf', 'png', 'jpg'],
			params : {},
			defaults : {}
		};
	}

	public static function overrideValues(config : ConfigObject, over : Dynamic)
	{
		if(null != over.cache)
		{
			var e : Dynamic = over.cache;
			if(Std.is(e, Float))
			{
				if(e <= 0)
					throw new Error("invalid negative value for cacheExpires: {0}", [e]);
				config.cacheExpires = e;
			} else if(Std.is(e, String)) {
				var v = Milli.parse(e);
				if(v <= 0)
					throw new Error("invalid expression for cacheExpires: {0}", [e]);
				config.cacheExpires = v;
			} else {
				throw new Error("invalid value type for cacheExpires: {0}", [e]);
			}
		}
		if(null != over.allowedFormats)
		{
			var v : Dynamic = over.allowedFormats,
				values = new Set<Dynamic>();
			if(Std.is(v, String))
			{
				values.add(v);
			} else if(Std.is(v, Array)) {
				var arr : Array<Dynamic> = v;
				for(item in arr)
					values.add(item);
			}
			config.allowedFormats = [];
			for(item in values)
			{
				if(!Std.is(item, String))
					throw new Error("invalid format value: '{0}'", [item]);
				var s : String = item;
				s = s.toLowerCase();
				if(!FORMATS.exists(s))
					throw new Error("the format '{0}' is not supported", [item]);
				config.allowedFormats.push(s);
			}
		}
		if(null != over.params)
		{
			for(param in Reflect.fields(over.params))
			{
				var value = Reflect.field(over.params, param);
				if(Std.is(value, Array))
				{
					Reflect.setField(config.params, param, value);
				} else {
					Reflect.setField(config.params, param, true);
				}
			}
		}
		if(null != over.defaults)
		{
			for(param in Reflect.fields(over.defaults))
			{
				var value = Reflect.field(over.defaults, param);
				Reflect.setField(config.defaults, param, value);
			}
		}
		return config;
	}
}