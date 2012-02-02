package rg.query;

using Arrays;

class Transformers
{
	public static function cross(values : Array<Dynamic>)
	{
		if(!Std.is(values, Array))
			values = [values];
		return function(data : Array<Dynamic>)
		{
			if(data.length == 0)
				return values;
			var results = [];
			for(item in data)
			{
				for(value in values)
				{
					results.push(Objects.copyTo(value, Objects.copyTo(item, {})));
				}
			}
			return results;
		}
	}

	public static function map(handler : Dynamic -> ?Int -> Dynamic)
	{
		return function(data : Array<Dynamic>) return data.map(handler);
	}

	public static function filter(handler : Dynamic -> Bool)
	{
		return function(data : Array<Dynamic>) return data.filter(handler);
	}

	public static function filterValues(o : Dynamic)
	{
		var entries = Objects.entries(o);
		entries.each(function(entry, _) {
			if(!Reflect.isFunction(entry.value))
			{
				var test = entry.value;
				entry.value = function(v) return v == test;
			}
		});
		function handler(d : Dynamic)
		{
			for(entry in entries)
			{
				if(!entry.value(Reflect.field(d, entry.key)))
					return false;
			}
			return true;
		}
		return function(data : Array<Dynamic>) return data.filter(handler);
	}

	public static function filterValue(name : String, o : Dynamic)
	{
		if(!Reflect.isFunction(o))
		{
			var test = o;
			o = function(v) return v == test;
		}
		function handler(d : Dynamic)
		{
			if(!o(Reflect.field(d, name)))
				return false;
			return true;
		}
		return function(data : Array<Dynamic>) return data.filter(handler);
	}

	public static function setField(name : String, o : Dynamic)
	{
		if(!Reflect.isFunction(o))
		{
			var value = o;
			o = function(obj, index) return value;
		}
		function handler(d : Dynamic, i : Int)
		{
			Reflect.setField(d, name, o(d, i));
		}
		return function(data : Array<Dynamic>)
		{
			data.each(handler);
			return data;
		}
	}

	public static function sort(handler : Dynamic -> Dynamic -> Int)
	{
		return function(data : Array<Dynamic>) return data.order(handler);
	}

	public static function limit(offset : Int, count : Int)
	{
		return function(data : Array<Dynamic>)
		{
			if (offset >= data.length)
				return [];
			var end = offset + count > data.length ? data.length : offset + count;
			return data.slice(offset, end);
		}
	}

	public static function reverse(arr : Array<Dynamic>)
	{
		arr.reverse();
		return arr;
	}

	public static function uniquef(?fun : Dynamic -> Dynamic -> Bool)
	{
		return function(arr : Array<Dynamic>)
		{
			var i = 0, j;
			while(i < arr.length - 1)
			{
				var cur = arr[i];
				j = arr.length - 1;
				while(j > i)
				{
					if(fun(cur, arr[j]))
					{
						arr.splice(j, 1);
					}
					j--;
				}
				i++;
			}
			return arr;
		};
	}
}