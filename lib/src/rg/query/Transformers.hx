package rg.query;

using Arrays;

class Transformers
{
	public static function cross(values : Array<Dynamic>)
	{
		return function(data : Array<Dynamic>)
		{
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
}