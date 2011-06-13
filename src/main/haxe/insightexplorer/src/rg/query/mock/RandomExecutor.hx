package rg.query.mock;
import haxe.Timer;
import rg.query.IExecutor;
using Iterators;
using Arrays;

/**
 * ...
 * @author Franco Ponticelli
 */

class RandomExecutor implements IExecutor
{
	var delay : Int;
	var structure : Hash<{ path : String, sub : Array<String>, events : Hash<Hash<Hash<Int>>> }>;
	var start : Float;
	var cache : Hash<Array<Int>>;
	public function new(delay = 15, ?start : Date, ?structure : Hash<{ path : String, sub : Array<String>, events : Hash<Hash<Hash<Int>>> }>) 
	{
		this.delay = delay;
		if (null != structure)
			this.structure = structure;
		else
			this.structure = DefaultStructure.getStructure();
		if (null == start)
			this.start = DateTools.delta(Date.now(), -DateTools.days(3)).getTime();
		else
			this.start = start.getTime();
		cache = new Hash();
	}
	
	function time() : { minute : Int, percent : Float }
	{
		var delta = (Date.now().getTime() - start),
			min = Math.floor(delta / 60000);
		return {
			minute : min,
			percent : (delta - (min * 60000)) / 60000
		};
	}
	
	static function getProperties(values : Iterator<String>)
	{
		return values.array().map(function(d, i) return "." + d);
	}
	
	public function children(path : String, options : { }, success : Array<String> -> Void, ?error : String -> Void)
	{
		var type = untyped options.type;
		switch(type)
		{
			case "all":
				var h = structure.get(path);
				return if (null == h)
					go(success, []);
				else
					go(success, h.sub.concat(getProperties(h.events.keys())));
			case "path":
				var h = structure.get(path);
				return if (null == h)
					go(success, []);
				else
					go(success, h.sub);
				return;
			case "property":
				var h = structure.get(path);
				return if (null == h)
					go(success, []);
				else
					go(success, getProperties(h.events.keys()));
			default:
				//
		}
		return go(error, "'property' option is not implemented in children()");
	}
	public function propertyCount(path : String, options : { property : String }, success : Int -> Void, ?error : String -> Void)
	{
		filldata(path);
		var event = structure.get(path);
		if (null == event)
			return go(success, { } );
		else {
			return go(success, countproperty(path, extractEventFromProperty(options.property), extractNameFromProperty(options.property)));
		}
	}
	public function propertySeries(path : String, options : { }, success : Dynamic<Dynamic<Int>> -> Void, ?error : String -> Void)
	{
		filldata(path);
		var event = structure.get(path);
		if (null == event)
			return go(success, { } );
		else {
			var periodicity = Reflect.field(options, "periodicity"),
				start : Null<Float> = Reflect.field(options, "start"),
				end : Null<Float> = Reflect.field(options, "end"),
				property = Reflect.field(options, "property"),
				event = extractEventFromProperty(property),
				name = extractNameFromProperty(property),
				properties
			;
			
			if (name == null)
			{
				properties = propertiesforevent(path, event);
			} else {
				properties = [name];
			}
			var result = { count : 0, series : [] };
			for (name in properties)
			{
				var values = valuesforproperty(path, event, name);
				for (value in values)
				{
		//			var key = valuekey(periodicity, path, event, name, value);
					series(periodicity, start, end, path, event, name, value, result);
				}
			}
			var s = { };
			Reflect.setField(s, periodicity, result.series);
			return go(success, s);
		}
	}
	public function propertyValues(path : String, options : { }, success : Array<Dynamic> -> Void, ?error : String -> Void)
	{
		filldata(path);
		var event = structure.get(path);
		if (null == event)
			return go(success, { } );
		else {
			return go(error, "propertyValues: not implemented");
		}
	}
	public function propertyValueCount(path : String, options : { }, success : Int -> Void, ?error : String -> Void)
	{
		filldata(path);
		var event = structure.get(path);
		if (null == event)
			return go(success, { } );
		else {
			return go(error, "propertyValueCount: not implemented");
		}
	}
	public function propertyValueSeries(path : String, options : { property : String, value : Dynamic }, success : Dynamic<Dynamic<Int>> -> Void, ?error : String -> Void)
	{
		filldata(path);
		var event = structure.get(path);
		if (null == event)
			return go(success, { } );
		else {
			var periodicity = Reflect.field(options, "periodicity"),
				start : Null<Float> = Reflect.field(options, "start"),
				end : Null<Float> = Reflect.field(options, "end"),
				event = extractEventFromProperty(options.property),
				property = extractNameFromProperty(options.property);
				
			
			var result = series(periodicity, start, end, path, event, property, options.value);
			
			return go(success, result.series);
		}
	}
	public function searchCount(path : String, options : { }, success : Int -> Void, ?error : String -> Void)
	{
		filldata(path);
		var event = structure.get(path);
		if (null == event)
			return go(success, { } );
		else {
			return go(error, "searchCount: not implemented");
		}
	}
	public function searchSeries(path : String, options : { }, success : Dynamic<Dynamic<Int>> -> Void, ?error : String -> Void)
	{
		filldata(path);
		var event = structure.get(path);
		if (null == event)
			return go(success, { } );
		else {
			return go(error, "searchSeries: not implemented");
		}
	}
	public function intersect(path : String, options : { }, success : Dynamic<Dynamic> -> Void, ?error : String -> Void)
	{
		filldata(path);
		var events = structure.get(path);
		if (null == events)
			return go(success, { } );
		else {
			var periodicity = Reflect.field(options, "periodicity"),
				start : Null<Float> = Reflect.field(options, "start"),
				end : Null<Float> = Reflect.field(options, "end");
				
			if(null == periodicity)
				return go(error, "periodicity is null");
			var properties : Array<{ property : String, limit : Int, order : String }> = Reflect.field(options, "properties");
	//		var eventname = extractEventFromProperty(properties[0].property);
	//		var event = events.events.get(eventname);
			var result = { },
				current = result;
			for (property in properties)
			{
				var event = extractEventFromProperty(property.property),
					name = extractNameFromProperty(property.property);
				var values = topseries(periodicity, start, end, path, event, name, property.limit, property.order == "ascending");
				for (value in values)
				{
					Reflect.setField(current, value.value, value.series);
				}
//				Reflect.setField(current, periodicity, v);
	//			type(values);
			}
			return go(success, result);
		}
	}
	
	function valuesforproperty(path : String, event : String, property : String)
	{
		var events = structure.get(path);
		if (null == events)
			return [];
		var e = events.events.get(event);
		if (null == e)
			return [];
		var values = e.get(property);
		if (null == values)
			return [];
		else
			return values.keys().array();
	}
	
	function propertiesforevent(path : String, event : String)
	{
		var events = structure.get(path);
		if (null == events)
			return [];
		var e = events.events.get(event);
		if (null == e)
			return [];
		else
			return e.keys().array();
	}
	
	function topseries(periodicity : String, start : Null<Float>, end : Null<Float>, path : String, event : String, property : String, qt : Int, reverse : Bool)
	{
		var events = structure.get(path);
		if (null == events)
			return [];
		var e = events.events.get(event);
		if (null == e)
			return [];
		var values = e.get(property);
		if (null == values)
			return [];
		var result = [];
		for (value in values.keys())
		{
			result.push({
				value : '"' + value + '"',
				data : series(periodicity, start, end, path, event, property, value)
			});
		}
	
		result.sort(function(a, b) {
			return Ints.compare(b.data.count, a.data.count);
		});
		if (reverse)
			result.reverse();
		
		return result.slice(0, qt).map(function(d, i) {
			return {
				value : d.value,
				series : d.data.series
			}
		});
	}
	
	function series(periodicity : String, start : Null<Float>, end : Null<Float>, path : String, event : String, property : String, value : String, ?o : { count : Int, series : Array<Array<Float>>})
	{
		var result = null == o ? { count : 0, series : []} : o,
			series = result.series;
			
//		trace("1: " + periodicity + ",2: " + start + ",3: " + end + ",4: " + path + ",5: " + event + ",6: " + property + ",7: " + value);
		switch(periodicity)
		{
			case "eternity":
				series.push([0.0, result.count += countvalue(path, event, property, value)]);
//				Reflect.setField(series, "0", );
			case "minute", "hour", "day", "week", "month", "year":
				var si = getindex(periodicity, start, true, path, event),
					ei = getindex(periodicity, end, false, path, event),
					k = valuekey(periodicity, path, event, property, value),
					values = cache.get(k);
				if(null != values)
					for (i in si...ei)
					{
						var time = gettimeforindex(periodicity, i),
							value = values[i];
						if (null == value)
							value = 0;
						result.count += value;
						series.push([time, value]);
//						Reflect.setField(series, time, value);
					}
			default:
				throw "series for " + periodicity + " not implemented";
		}
		var s = { };
		Reflect.setField(s, periodicity, series);
		return result;
	}
	
	function gettimeforindex(periodicity : String, i : Int)
	{
		return i * periodicityspan(periodicity) + start;
	}
	
	function getindex(periodicity : String, date : Null<Float>, isstart : Bool, path : String, event : String)
	{
		if (null == date)
		{
			if (isstart)
				return 0;
			var k = eventkey(periodicity, path, event),
				values = cache.get(k);
			return values.length - 1;
		}
		
		return Math.floor((date - start) / periodicityspan(periodicity));
	}
	
	function periodicityspan(periodicity : String)
	{
		return switch(periodicity) {
			case "minute": 60000;
			case "hour": 60 * 60000;
			case "day": 24 * 60 * 60000;
			case "week": 7 * 24 * 60 * 60000;
			case "month": 30.4 * 24 * 60 * 60000;
			case "year": 365 * 24 * 60 * 60000;
			default: 1;
		};
	}
	
	function topvalues(path : String, event : String, property : String, qt : Int, reverse : Bool)
	{
		var events = structure.get(path);
		if (null == events)
			return [];
		var e = events.events.get(event);
		if (null == e)
			return [];
		var values = e.get(property);
		if (null == values)
			return [];
		var result = [];
		for (value in values.keys())
		{
			result.push({
				value : '"' + value + '"',
				count : countvalue(path, event, property, value)
			});
		}
	
		result.sort(function(a, b) {
			return Ints.compare(b.count, a.count);
		});
		if (reverse)
			result.reverse();
		
		return result.slice(0, qt);
	}
	
	function extractEventFromProperty(p : String)
	{
		return Strings.ltrim(p, ".").split('.')[0];
	}
	
	function extractNameFromProperty(p : String)
	{
		return Strings.ltrim(p, ".").split('.')[1];
	}
	
	function countvalue(path : String, event : String, property : String, value : String)
	{
		var key = valuekey("eternity", path, event, property, value);
		var v = cache.get(key);
		return null == v ? 0 : v[0];
	}
	
	function countproperty(path : String, event : String, property : String)
	{
		var key = propertykey("eternity", path, event, property);
		var v = cache.get(key);
		return null == v ? 0 : v[0];
	}
	
	function eventkey(periodicity : String, path : String, event : String)
	{
		return path + ":" + switch(periodicity)
		{
			case "eternity": "e|" + event;
			case "minute": "m|" + event;
			case "hour": "h|" + event;
			case "day": "d|" + event;
			case "week": "w|" + event;
			case "month": "M|" + event;
			case "year": "y|" + event;
			default: throw "invalid periodicity " + periodicity;
		}
	}
	
	function propertykey(periodicity : String, path : String, event : String, property : String)
	{
		return eventkey(periodicity, path, event) + ":" + property;
	}
	
	function valuekey(periodicity : String, path : String, event : String, property : String, value : String)
	{
		return propertykey(periodicity, path, event, property) + ":" + value;
	}
	
	function filldata(path : String)
	{
		var time = time(),
			p = structure.get(path);
		if (null == p)
			return;
		for (eventname in p.events.keys())
		{
			var event = p.events.get(eventname),
				ekeymin = eventkey("minute", path, eventname),
				eminvalues = cache.get(ekeymin),
				ekeyh = eventkey("hour", path, eventname),
				ehvalues = cache.get(ekeyh),
				ekeyd = eventkey("day", path, eventname),
				edvalues = cache.get(ekeyd),
				ekeyw = eventkey("week", path, eventname),
				ewvalues = cache.get(ekeyw),
				ekeym = eventkey("month", path, eventname),
				emvalues = cache.get(ekeym),
				ekeyy = eventkey("year", path, eventname),
				eyvalues = cache.get(ekeyy),
				ekeye = eventkey("eternity", path, eventname),
				eevalues = cache.get(ekeye);
				
			if (null == eminvalues)
			{
				cache.set(ekeymin, eminvalues = []);
				cache.set(ekeyh, ehvalues = []);
				cache.set(ekeyd, edvalues = []);
				cache.set(ekeyw, ewvalues = []);
				cache.set(ekeym, emvalues = []);
				cache.set(ekeyy, eyvalues = []);
				cache.set(ekeye, eevalues = [0]);
			}
			for (i in eminvalues.length...time.minute)
				eminvalues[i] = 0;
			for (i in ehvalues.length...Math.floor(time.minute / 60)+1)
				ehvalues[i] = 0;
			for (i in edvalues.length...Math.floor(time.minute / (24 * 60))+1)
				edvalues[i] = 0;
			for (i in ewvalues.length...Math.floor(time.minute / (7 * 24 * 60))+1)
				ewvalues[i] = 0;
			for (i in emvalues.length...Math.floor(time.minute / (30.4 * 24 * 60))+1)
				emvalues[i] = 0;
			for (i in eyvalues.length...Math.floor(time.minute / (365 * 24 * 60))+1)
				eyvalues[i] = 0;
				
			for (propertyname in event.keys())
			{
				var property = event.get(propertyname),
					pkeymin = propertykey("minute", path, eventname, propertyname),
					pminvalues = cache.get(pkeymin),
					pkeyh = propertykey("hour", path, eventname, propertyname),
					phvalues = cache.get(pkeyh),
					pkeyd = propertykey("day", path, eventname, propertyname),
					pdvalues = cache.get(pkeyd),
					pkeyw = propertykey("week", path, eventname, propertyname),
					pwvalues = cache.get(pkeyw),
					pkeym = propertykey("month", path, eventname, propertyname),
					pmvalues = cache.get(pkeym),
					pkeyy = propertykey("year", path, eventname, propertyname),
					pyvalues = cache.get(pkeyy),
					pkeye = propertykey("eternity", path, eventname, propertyname),
					pevalues = cache.get(pkeye);
				if (null == pminvalues)
				{
					cache.set(pkeymin, pminvalues = []);
					cache.set(pkeyh, phvalues = []);
					cache.set(pkeyd, pdvalues = []);
					cache.set(pkeyw, pwvalues = []);
					cache.set(pkeym, pmvalues = []);
					cache.set(pkeyy, pyvalues = []);
					cache.set(pkeye, pevalues = [0]);
				}
				for (i in pminvalues.length...time.minute)
					pminvalues[i] = 0;
				for (i in phvalues.length...Math.floor(time.minute / 60)+1)
					phvalues[i] = 0;
				for (i in pdvalues.length...Math.floor(time.minute / (24 * 60))+1)
					pdvalues[i] = 0;
				for (i in pwvalues.length...Math.floor(time.minute / (7 * 24 * 60))+1)
					pwvalues[i] = 0;
				for (i in pmvalues.length...Math.floor(time.minute / (30.4 * 24 * 60))+1)
					pmvalues[i] = 0;
				for (i in pyvalues.length...Math.floor(time.minute / (365 * 24 * 60))+1)
					pyvalues[i] = 0;
				for (countname in property.keys())
				{
					var count = property.get(countname),
						keymin = valuekey("minute", path, eventname, propertyname, countname),
						minvalues = cache.get(keymin),
						keyh = valuekey("hour", path, eventname, propertyname, countname),
						hvalues = cache.get(keyh),
						keyd = valuekey("day", path, eventname, propertyname, countname),
						dvalues = cache.get(keyd),
						keyw = valuekey("week", path, eventname, propertyname, countname),
						wvalues = cache.get(keyw),
						keym = valuekey("month", path, eventname, propertyname, countname),
						mvalues = cache.get(keym),
						keyy = valuekey("year", path, eventname, propertyname, countname),
						yvalues = cache.get(keyy),
						keye = valuekey("eternity", path, eventname, propertyname, countname),
						evalues = cache.get(keye);
					if (null == minvalues)
					{
						cache.set(keymin, minvalues = []);
						cache.set(keyh, hvalues = []);
						cache.set(keyd, dvalues = []);
						cache.set(keyw, wvalues = []);
						cache.set(keym, mvalues = []);
						cache.set(keyy, yvalues = []);
						cache.set(keye, evalues = [0]);
					}
					var v, ix;
//					for (i in minvalues.length...time.minute)
//						minvalues[i] = 0;
					for (i in hvalues.length...Math.floor(time.minute / 60)+1)
						hvalues[i] = 0;
					for (i in dvalues.length...Math.floor(time.minute / (24 * 60))+1)
						dvalues[i] = 0;
					for (i in wvalues.length...Math.floor(time.minute / (7 * 24 * 60))+1)
						wvalues[i] = 0;
					for (i in mvalues.length...Math.floor(time.minute / (30.4 * 24 * 60))+1)
						mvalues[i] = 0;
					for (i in yvalues.length...Math.floor(time.minute / (365 * 24 * 60))+1)
						yvalues[i] = 0;
					for(i in minvalues.length...time.minute)
					{
						v = Std.random(count);
						minvalues[i] = v;
						eminvalues[i] += v;
						pminvalues[i] += v;
						ix = Math.floor(i / 60);
						hvalues[ix] += v;
						ehvalues[ix] += v;
						phvalues[ix] += v;
						ix = Math.floor(i / (24 * 60));
						dvalues[ix] += v;
						edvalues[ix] += v;
						pdvalues[ix] += v;
						ix = Math.floor(i / (7 * 24 * 60));
						wvalues[ix] += v;
						ewvalues[ix] += v;
						pwvalues[ix] += v;
						ix = Math.floor(i / (30.4 * 24 * 60));
						mvalues[ix] += v;
						emvalues[ix] += v;
						pmvalues[ix] += v;
						ix = Math.floor(i / (365 * 24 * 60));
						yvalues[ix] += v;
						eyvalues[ix] += v;
						pyvalues[ix] += v;
						
						evalues[0] += v;
						eevalues[0] += v;
						pevalues[0] += v;
					}
					v = Std.random(Math.floor(count * time.percent));
					minvalues[time.minute] = v;
		/*			
					hvalues[hvalues.length] = v;
					ehvalues[ehvalues.length] = v;
					phvalues[phvalues.length] = v;
					
					dvalues[dvalues.length] = v;
					edvalues[edvalues.length] = v;
					pdvalues[pdvalues.length] = v;
					
					wvalues[wvalues.length] = v;
					ewvalues[ewvalues.length] = v;
					pwvalues[pwvalues.length] = v;
					
					mvalues[mvalues.length] = v;
					emvalues[emvalues.length] = v;
					pmvalues[pmvalues.length] = v;
					
					yvalues[yvalues.length] = v;
					eyvalues[eyvalues.length] = v;
					pyvalues[pyvalues.length] = v;
					evalues[0] += v;
					eevalues[0] += v;
					pevalues[0] += v;
				*/
				}
			}
		}
	}
	
	function go(f : Dynamic -> Void, o : Dynamic) : Void
	{
		Timer.delay(callback(f, o), delay);
	}
}