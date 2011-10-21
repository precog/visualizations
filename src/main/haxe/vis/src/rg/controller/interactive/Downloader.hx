/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.interactive;

import haxe.Http;
import js.Lib;
import rg.view.svg.util.Jsonp;
import rg.view.svg.util.RGCss;
import thx.error.Error;
import thx.js.Selection;
import thx.json.Json;

class Downloader 
{
	static var ALLOWED_FORMATS = ['png', 'pdf', 'jpg'];
	
	var serviceUrl : String;
	var defaultBackgroundColor : String;
	var container : Selection;
	
	public function new(container : Selection, serviceurl : String, backgroundcolor : Null<String>) 
	{
		this.container = container;
		this.serviceUrl = serviceurl;
		this.defaultBackgroundColor = backgroundcolor;
	}
	
	public function download(format : String, backgroundcolor : Null<String>)
	{
		if (!Arrays.exists(ALLOWED_FORMATS, format))
			throw new Error("The download format '{0}' is not correct", [format]);
		var ob : Dynamic = {
			tokenId : getTokenId(),
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
//		trace(ob);
		
		var http = new Http(serviceUrl);
		http.onData = success;
		var buf = [];
		for (field in Reflect.fields(ob))
			http.setParameter(field, Reflect.field(ob, field));
//			buf.push(StringTools.urlEncode(field) + "=" + StringTools.urlEncode(Reflect.field(ob, field)));

		
			
//		http.setPostData(buf.join("&"));
		http.request(true);
//		Jsonp.post(serviceUrl, ob, success, null, null, null);
		
	}
	
	static function getClassName(container : Selection)
	{
		var name = container.attr("class").get();
		name = StringTools.trim((~/\s+/g).replace((~/(^rg$|^rg\s+|\s+rg\s+|\s+rg$)/g).replace(name, " "), " "));
		return ("" == name) ? null : name;
	}
	
	static function getTokenId() : String
	{
		return Dynamics.string(untyped __js__("ReportGrid.$.Config.tokenId"));
	}
	
	function success(content : String)
	{
		Lib.window.location.href = serviceUrl + "?file=" + content;
	}
}