package rg.query;

import thx.date.DateParser;

using Arrays;

class ReportGridTransformers
{
	public static function childrenPath(arr : Array<String>, params : { parent : String }) : Array<{ parent : String, path : String }>
	{
		var parent = params.parent,
			prefix = parent == '/' ? '' : parent;
		return arr.map(function(path, _) {
			return {
				parent : parent,
				path :   prefix + "/" + path
			};
		});
	}

	public static function childrenEvent(arr : Array<String>, params : { path : String }) : Array<{ event : String, path : String }>
	{
		var path = params.path;
		return arr.map(function(event, _) {
			return {
				path :  path,
				event : _trimPrefix(event)
			};
		});
	}

	public static function childrenProperty(arr : Array<String>, params : { path : String, event : String }) : Array<{ event : String, path : String, property : String }>
	{
		var path  = params.path,
			event = params.event;
		return arr.map(function(property, _) {
			return {
				path :  path,
				event : event,
				property : _trimPrefix(property),
			};
		});
	}

	public static function propertyValues(arr : Array<String>, params : { path : String, event : String, property : String }) : Array<{ event : String, path : String, property : String, value : Dynamic }>
	{
		var path     = params.path,
			event    = params.event,
			property = params.property;
		return arr.map(function(value, _) {
			return {
				path :     path,
				event :    event,
				property : property,
				value :    value
			};
		});
	}

	public static function histogram(arr : Array<Array<Dynamic>>, params : { path : String, event : String, property : String }) : Array<{ event : String, path : String, property : String, value : Dynamic, count : Int }>
	{
		var path     = params.path,
			event    = params.event,
			property = params.property;
		return arr.map(function(value : Array<Dynamic>, _) {
			return {
				path :     path,
				event :    event,
				property : property,
				value :    value[0],
				count :    value[1]
			};
		});
	}

	public static function intersect(ob : Dynamic, params : { path : String, event : String, ?properties : Array<{ property : String }> }) : Array<{ event : String, path : String, property : String, value : Dynamic, count : Int }>
	{
		var path       = params.path,
			event      = params.event,
			properties = params.properties,
			result     = [];

		for(pair in Objects.flatten(ob))
		{
			var o : Dynamic = {
				path  : path,
				event : event,
				count : pair.value
			};
			for(i in 0...properties.length)
			{
				Reflect.setField(o, properties[i].property, thx.json.Json.decode(pair.fields[i]));
			}
			result.push(o);
		}
		return result;
	}

	public static function intersectSeries(ob : Dynamic, params : { path : String, event : String, periodicity : String, ?timezone : Dynamic, ?groupby : String, ?properties : Array<{ property : String }> }) : Array<{ event : String, path : String, property : String, value : Dynamic, count : Int }>
	{
		var path        = params.path,
			event       = params.event,
			properties  = params.properties,
			periodicity = params.periodicity,
			timezone    = params.timezone,
			groupby     = params.groupby,
			result      = [];

		for(pair in Objects.flatten(ob))
		{
			var values : Array<Array<Dynamic>> = pair.value;
			for(item in values)
			{
				var o : Dynamic = {
					path  : path,
					event : event,
					count : item[1]
				};
				_injectTime(o, item[0], periodicity, timezone, groupby);
				for(i in 0...properties.length)
				{
					Reflect.setField(o, properties[i].property, thx.json.Json.decode(pair.fields[i]));
				}
				result.push(o);
			}
		}
		return result;
	}

	public static function eventCount(count : Int, params : { path : String, event : String, ?where : Dynamic }) : Array<{ event : String, path : String, count : Int }>
	{
		var o = {
			path :  params.path,
			event : params.event,
			count : count
		};
		if(null != params.where)
			Objects.copyTo(params.where, o);
		return [o];
	}

	public static function eventCountTag(counts : Dynamic, params : { path : String, event : String, tag : String, ?where : Dynamic }) : Array<{ event : String, path : String, count : Int }>
	{
		var path  = params.path,
			event = params.event,
			tag   = params.tag;
		return Objects.map(counts, function(key, count) {
			var o = {
				path :  path,
				event : event,
				count : count
			};
			Reflect.setField(o, tag, Strings.trim(key, "/"));
			if(null != params.where)
				Objects.copyTo(params.where, o);
			return o;
		});
	}

	public static function eventSeriesTagGroupedBy(ob : Dynamic, params : { path : String, event : String, periodicity : String, ?where : Dynamic, tag : String, groupby : String }) : Array<{ event : String, path : String, count : Int }>
	{
		var path        = params.path,
			event       = params.event,
			periodicity = params.periodicity,
			where       = params.where,
			groupby     = params.groupby,
			tag         = params.tag;
		return Arrays.flatten(Objects.map(ob, function(key, values : Array<Array<Dynamic>>) {
			var result = [];
			for(item in values)
			{
				var o = {
					path :  path,
					event : event,
					count : item[1]
				};
				Reflect.setField(o, tag, Strings.trim(key, "/"));
				_injectTime(o, item[0], periodicity, null, groupby);
				if(null != where)
					Objects.copyTo(where, o);
				result.push(o);
			}
			return result;
		}));
	}

	public static function eventSeries(values : Array<Array<Dynamic>>, params : { path : String, event : String, periodicity : String, ?where : Dynamic, ?timezone : Dynamic, ?groupby : String }) : Array<{ event : String, path : String, count : Int }>
	{
		var path        = params.path,
			event       = params.event,
			periodicity = params.periodicity,
			where       = params.where,
			timezone    = params.timezone,
			groupby     = params.groupby,
			result      = [];
		for(item in values)
		{
			var o = {
				path :  path,
				event : event,
				count : item[1]
			};
			_injectTime(o, item[0], periodicity, timezone, groupby);
			if(null != where)
				Objects.copyTo(where, o);
			result.push(o);
		}
		return result;
	}

	public static function propertySummary(count : Int, params : { path : String, event : String, ?where : Dynamic }) : Array<{ event : String, path : String, count : Int }>
	{
		var o = {
			path :  params.path,
			event : params.event,
			count : count
		};
		trace(count);
		if(null != params.where)
			Objects.copyTo(params.where, o);
		return [o];
	}

	public static function propertySummarySeries(values : Array<Array<Dynamic>>, params : { path : String, event : String, property : String, periodicity : String, type : String, ?timezone : String, ?groupby : String }) : Array<{ event : String, path : String, property : String }>
	{
		var path        = params.path,
			event       = params.event,
			property    = params.property,
			periodicity = params.periodicity,
			type		= params.type,
			timezone    = params.timezone,
			groupby     = params.groupby,
			result      = [];
		for(item in values)
		{
			var o = {
				path :  path,
				event : event,
				property : property
			};
			_injectTime(o, item[0], periodicity, timezone, groupby);
			Reflect.setField(o, type, item[1]);
			result.push(o);
		}
		return result;
	}

	public static function propertySummarySeriesTagGroupedBy(ob : Dynamic, params : { path : String, event : String, property : String, periodicity : String, type : String, tag : String, groupby : String }) : Array<{ event : String, property : String, path : String }>
	{
		var path        = params.path,
			event       = params.event,
			property    = params.property,
			periodicity = params.periodicity,
			type		= params.type,
			groupby     = params.groupby,
			tag         = params.tag;
		return Arrays.flatten(Objects.map(ob, function(key, values : Array<Array<Dynamic>>) {
			var result = [];
			for(item in values)
			{
				var o = {
					path :  path,
					event : event,
					property : property
				};
				Reflect.setField(o, tag, Strings.trim(key, "/"));
				Reflect.setField(o, type, item[1]);
				_injectTime(o, item[0], periodicity, null, groupby);
				result.push(o);
			}
			return result;
		}));
	}

	public static function propertyValueCount(count : Int, params : { path : String, event : String, property : String, value : Dynamic }) : Array<{ event : String, path : String, count : Int }>
	{
		var ob = {
			path :     params.path,
			event :    params.event,
			count :    count
		};
		Reflect.setField(ob, params.property, params.value);
		return [ob];
	}

	public static function propertyValueCountTag(counts : Dynamic, params : { path : String, event : String, property : String, value : Dynamic, tag : String }) : Array<{ event : String, path : String, count : Int }>
	{
		var path     = params.path,
			event    = params.event,
			property = params.property,
			value    = params.value,
			tag      = params.tag;
		return Objects.map(counts, function(key, count) {
			var o = {
				path     : path,
				event    : event,
				count    : count
			};
			Reflect.setField(o, params.property, params.value);
			Reflect.setField(o, tag, Strings.trim(key, "/"));
			return o;
		});
	}

	public static function propertyValueSeries(values : Array<Array<Dynamic>>, params : { path : String, event : String, property : String, value : Dynamic, periodicity : String, ?timezone : Dynamic, ?groupby : String }) : Array<{ event : String, path : String, count : Int }>
	{
		var path        = params.path,
			event       = params.event,
			property    = params.property,
			periodicity = params.periodicity,
			value       = params.value,
			timezone    = params.timezone,
			groupby     = params.groupby,
			result      = [];
		for(item in values)
		{
			var o = {
				path :  path,
				event : event,
				count : item[1]
			};
			Reflect.setField(o, property, value);
			_injectTime(o, item[0], periodicity, timezone, groupby);
			result.push(o);
		}
		return result;
	}

	public static function propertyValueSeriesTagGroupedBy(ob : Dynamic, params : { path : String, event : String, property : String, value : Dynamic, periodicity : String, tag : String, groupby : String }) : Array<{ event : String, path : String, count : Int }>
	{
		var path        = params.path,
			event       = params.event,
			property    = params.property,
			value       = params.value,
			periodicity = params.periodicity,
			groupby     = params.groupby,
			tag         = params.tag;
		return Arrays.flatten(Objects.map(ob, function(key, values : Array<Array<Dynamic>>) {
			var result = [];
			for(item in values)
			{
				var o = {
					path :  path,
					event : event,
					count : item[1]
				};
				Reflect.setField(ob, property, value);
				Reflect.setField(o, tag, Strings.trim(key, "/"));
				_injectTime(o, item[0], periodicity, null, groupby);
				result.push(o);
			}
			return result;
		}));
	}

	static function _injectTime(o : Dynamic, value : Dynamic, periodicity : String, timezone : String, groupby : String)
	{
		if(null != groupby)
		{
			Reflect.setField(o, periodicity, Reflect.field(value, periodicity));
			Reflect.setField(o, "groupby", groupby);
		} else if(null != timezone)
		{
			Reflect.setField(o, "time:" + periodicity, _parseTimeTZ(value.datetime));
			Reflect.setField(o, "timezone", timezone);
		} else {
			Reflect.setField(o, "time:" + periodicity, value.timestamp);
		}
	}

	static function _parseTimeTZ(s : String)
	{
		var sign = 1,
			pos = s.indexOf("+");
		if(pos < 0)
		{
			sign = -1;
			pos = s.indexOf("-");
		}
		var d = Date.fromString(StringTools.replace(StringTools.replace(s.substr(0, pos), "T", " "), ".000", "")),
			t = DateParser.parseTime(s.substr(pos+1));
		return d.getTime() + sign * (t.hour * 60 * 60 * 1000 + t.minute * 60 * 1000 + t.second * 1000 + t.millis);
	}

	static inline function _trimPrefix(v : String) return v.substr(1)
}