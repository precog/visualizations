package model;

import thx.date.MilliParser;
import thx.error.Error;

typedef ConfigObject = {
	cacheExpires : Float
}

class ConfigObjects
{
	public static function createDefault() : ConfigObject
	{
		return {
			cacheExpires : 30 * 60 * 24 * 1000.0
		};
	}

	public static function overrideValues(config : ConfigObject, over : Dynamic)
	{
		if(null != over.cacheExpires)
		{
			var e : Dynamic = over.cacheExpires;
			if(Std.is(e, Float))
			{
				if(e <= 0)
					throw new Error("invalid negative value for cacheExpires: {0}", [e]);
				config.cacheExpires = e;
			} else if(Std.is(e, String)) {
				var v = MilliParser.parse(e);
				if(v <= 0)
					throw new Error("invalid expression for cacheExpires: {0}", [e]);
				config.cacheExpires = v;
			} else {
				throw new Error("invalid value type for cacheExpires: {0}", [e]);
			}
		}
		return config;
	}
}