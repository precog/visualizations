package rg;

/**
 * ...
 * @author Franco Ponticelli
 */

typedef Query
{
	path : String,
	event : String,
	property : Null<String>,
	values : Bool,
	filter : Null<String -> Int -> Bool>, // value -> count -> include
	top : Null<Int>,
	bottom : Null<Int>,
	other : Bool
}