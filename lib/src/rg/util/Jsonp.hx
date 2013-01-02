/**
 * ...
 * @author Franco Ponticelli
 */

package rg.util;

import thx.json.Json;

class Jsonp
{
	public static function get<T>(path, success : T -> Void, failure : Null<Int -> String -> Void>, query : {}, headers : {})
	{
		var api : String -> { success : T -> Void, failure : Null<Int -> String -> Void> } -> {} -> {} -> Void =

#if reportgridapi
		untyped __js__("ReportGrid.$.Http.Jsonp.get");
#else
		get_api;
#end
		api(path, { success : success, failure : failure }, query, headers);
	}

	public static function post<T>(path, content : {}, success : T -> Void, failure : Null<Int -> String -> Void>, query : {}, headers : {})
	{
		var api : String -> {} -> { success : T -> Void, failure : Null<Int -> String -> Void> } -> {} -> {} -> Void =
#if reportgridapi
		untyped __js__("ReportGrid.$.Http.Jsonp.post");
#else
		post_api;
#end
		api(path, content, { success : success, failure : failure }, query, headers);
	}

#if !reportgridapi
	static function request_api<T>(method : String, path : String, content : {}, actions : { success : T -> Void, failure : Null<Int -> String -> Void> }, query : {}, headers : {})
	{
		if(null == query) query = {};

		path = Urls.addQueryParameters(path, query);

		if(null == headers) headers = {};
		var success  = actions.success,
			failure  = null == actions.failure ? function(_, _) {} : actions.failure;


		var random = Std.int(Math.random() * 214748363),
			funcName = 'ReportGridChartsJsonpCallback' + random,
			head = untyped js.Browser.document.head;
		if (null == head)
			head = js.Browser.document.getElementsByTagName('head')[0];
		Reflect.setField(js.Browser.window, funcName, function(content, meta) {
			if (untyped meta.status.code == 200 || meta.status.code == "OK") {
				success(content);
			} else {
				failure(meta.status.code, meta.status.reason);
			}
			head.removeChild(js.Browser.document.getElementById(funcName));

			Reflect.setField(js.Browser.window, funcName, untyped __js__("undefined"));
			untyped __js__("try{ delete window[funcName]; }catch(e){}");
		});

		var extraQuery : Dynamic = {};

		extraQuery.method = method;

		if (Reflect.fields(headers).length > 0)
		{
			extraQuery.headers = Json.encode(headers);
		}

		Reflect.setField(extraQuery, "callback", funcName);

		if (content != null)
		{
			extraQuery.content = Json.encode(content);
		}

		var fullUrl = Urls.addQueryParameters(path, extraQuery);

		var script = js.Browser.document.createElement('SCRIPT');

		script.setAttribute('type', 'text/javascript');
		script.setAttribute('src',  fullUrl);
		script.setAttribute('id',   funcName);

		head.appendChild(script);
	}

	static function get_api<T>(path : String, actions : { success : T -> Void, failure : Null<Int -> String -> Void> }, query : {}, headers : {})
	{
		request_api("GET", path, null, actions, query, headers);
	}

	static function post_api<T>(path : String, content : {}, actions : { success : T -> Void, failure : Null<Int -> String -> Void> }, query : {}, headers : {})
	{
		request_api("POST", path, content, actions, query, headers);
	}
#end
}