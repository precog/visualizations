package rg;

/**
 * ...
 * @author Franco Ponticelli
 */

import rg.html.PivotProperty;
import rg.query.Query;

typedef QueryOptions = {
	path : String,
	event : String,
	events : Array<String>,
	property : Null<String>,
	values : Null<Bool>,
	filter : Null<String -> Int -> Bool>,
	top : Null<Int>,
	bottom : Null<Int>,
	other : Null<Bool>
}

typedef PivotTableQueryOptions = {
	path : String,
	event : String,
	availableProperties : Null<Array<String>>,
	properties : Null<Array<PivotProperty>>,
	filter : Null<String -> Bool>,
	top : Null<Int>,
	bottom : Null<Int>
}

class QueryOptionsUtil
{
	public static function emptyQuery() : QueryOptions
	{
		return {
			path : null,
			event : null,
			events : null,
			property : null,
			values : null,
			filter : null,
			top : 10,
			bottom : null,
			other : null
		};
	}
	
	public static function emptyPivotTableQuery() : PivotTableQueryOptions
	{
		return {
			path : null,
			event : null,
			availableProperties : null,
			properties : [],
			filter : null,
			top : null,
			bottom : null
		};
	}
}