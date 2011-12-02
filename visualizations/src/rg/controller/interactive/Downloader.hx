/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.interactive;

import haxe.Http;
import js.Lib;
import rg.util.Jsonp;
import rg.view.svg.util.RGCss;
import thx.error.Error;
import thx.js.Selection;
import thx.json.Json;
import rg.util.RG;

class Downloader
{
	static var ALLOWED_FORMATS = ['png', 'pdf', 'jpg'];
	static var ERROR_PREFIX = "ERROR:";

	var serviceUrl : String;
	var defaultBackgroundColor : String;
	var container : Selection;

	public function new(container : Selection, serviceurl : String, backgroundcolor : Null<String>)
	{
		this.container = container;
		this.serviceUrl = serviceurl;
		this.defaultBackgroundColor = backgroundcolor;
	}

	public function download(format : String, backgroundcolor : Null<String>, success : Void -> Void, error : String -> Void)
	{
		if (!Arrays.exists(ALLOWED_FORMATS, format))
			throw new Error("The download format '{0}' is not correct", [format]);
		var ob : Dynamic = {
			tokenId : RG.getTokenId(),
			css : RGCss.cssSources(),
			id : container.attr("id").get(),
			format : format,
			xml : container.node().innerHTML,
			element : container.node().nodeName.toLowerCase()
		};
		var bg = null == backgroundcolor ? defaultBackgroundColor : backgroundcolor;
		if (null != bg)
			ob.backgroundcolor = bg;
		var cls = getClassName(container);
		if (null != cls)
			ob.className = cls;

		var http = new Http(serviceUrl);
		if(null != error)
			http.onError = error;
		http.onData = callback(complete, success, error);
		var buf = [];
		for (field in Reflect.fields(ob))
			http.setParameter(field, Reflect.field(ob, field));
		http.request(true);
	}

	static function getClassName(container : Selection)
	{
		var name = container.attr("class").get();
		name = StringTools.trim((~/\s+/g).replace((~/(^rg$|^rg\s+|\s+rg\s+|\s+rg$)/g).replace(name, " "), " "));
		return ("" == name) ? null : name;
	}

	function complete(success : Void -> Void, error : String -> Void, content : String)
	{
		if(content.substr(0, ERROR_PREFIX.length) == ERROR_PREFIX)
		{
			if (null != error)
				error(content.substr(ERROR_PREFIX.length));
		} else {
			trace(content);
			if (null != success)
				success();
//			Lib.window.location.href = content;
		}
	}
}