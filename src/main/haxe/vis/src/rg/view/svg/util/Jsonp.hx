package rg.view.svg.util;

/**
 * ...
 * @author Franco Ponticelli
 */

class Jsonp 
{
	public static function get(path, success : String -> Void, failure : Null<Int -> String -> Void>, query : {}, headers : {})
	{
		var api : String -> { success : String -> Void, failure : Null<Int -> String -> Void> } -> {} -> {} -> Void = untyped __js__("ReportGrid.$.Http.Jsonp.get");
		api(path, { success : success, failure : failure }, query, headers);
	}
	
	public static function post(path, content : {}, success : String -> Void, failure : Null<Int -> String -> Void>, query : {}, headers : {})
	{
		var api : String -> {} -> { success : String -> Void, failure : Null<Int -> String -> Void> } -> {} -> {} -> Void = untyped __js__("ReportGrid.$.Http.Jsonp.post");
		api(path, content, { success : success, failure : failure }, query, headers);
	}
}