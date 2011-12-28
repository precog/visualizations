package rg.util;

class Urls 
{
	public static function addQueryParameters(url : String, query : {}) : String
	{
#if reportgridapi
		return untyped __js__("ReportGrid.$.Util.addQueryParameters")(url,query);
#else
		var suffix  = url.indexOf('?') < 0 ? '?' : '&',
			queries = [];
		for(key in Reflect.fields(query))
		{
			var value = Std.string(Reflect.field(query, key));
			queries.push(key + "=" + StringTools.urlEncode(value));
		}
		if(queries.length == 0)
			return url;
		else
			return url + suffix + queries.join("&");
#end
	}

	public static function parseQueryParameters(url : String) : Dynamic
	{
#if reportgridapi
		return untyped __js__("ReportGrid.$.Util.parseQueryParameters")(url);
#else
		var index = url.indexOf('?');

		if (index < 0)
			return {};

		var query = url.substr(index + 1),
			keyValuePairs = query.split('&'),
			parameters : Dynamic = {};

		for(pair in keyValuePairs)
		{
			var split = pair.split("="),
				key = split[0],
				value = null == split[1] ? null : StringTools.urlDecode(split[1]);
			Reflect.setField(parameters, key, value);
		}
		return parameters;
#end
	}
}