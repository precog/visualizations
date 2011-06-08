package rg;

/**
 * ...
 * @author Franco Ponticelli
 */

import rg.pivottable.PivotTableProperty;
import rg.query.Query;

typedef QueryOptions = {
	path : String,
	event : String,
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
	properties : Null<Array<PivotTableProperty>>,
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
	
	public static function toQueryInst<TService, TData>(options : QueryOptions) : Query<TService, TData>
	{
		
		return null;
	}
}