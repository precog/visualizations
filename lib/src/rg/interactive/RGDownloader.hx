package rg.interactive;

import js.Lib;
import js.Dom;
import haxe.Http;
import thx.error.Error;
import dhx.Selection;

class RGDownloader
{
	static var ALLOWED_FORMATS = ['pdf', 'ps', 'png', 'jpg', 'svg']; //bmp, tif, html

	var serviceUrl : String;
	var container : Selection;
	var format : String;
	var tokenId : String;

	public function new(container : Selection, serviceurl : String)
	{
		this.container = container;
		this.serviceUrl = serviceurl;
		this.tokenId = rg.util.RG.getTokenId();
	}

	function url(ext : String)
	{
		return StringTools.replace(serviceUrl, '{ext}', ext);
	}

	public function download(format : String, backgroundcolor : Null<String>, success : Dynamic -> Bool, error : String -> Void)
	{
		if (!Arrays.exists(ALLOWED_FORMATS, format))
			throw new Error("The download format '{0}' is not correct", [format]);

		this.format = format;
		var http = new Http(url(format));
		http.setHeader("Accept", "application/json");
		if(null != error)
			http.onError = error;
		else
			http.onError = function(e) { trace(e); };

		http.onData = callback(complete, success, error);
		http.setParameter('html', html());
		http.setParameter('config', config());
		http.request(true);
	}

	function findCssSources() : Array<String>
	{
		return dhx.Dom.selectAll("link").filterNode(function(n, _) {
			return "stylesheet" == untyped n.rel;
		}).mapNode(function(n, _) {
			return untyped n.href;
		});
	}

	function extractSvg(s : String)
	{
		var start = ~/<svg/,
			end   = ~/<\/svg>/;
		start.match(s);
		s = start.matchedRight();
		end.match(s);
		return '<svg' + end.matchedLeft() + '</svg>';
	}

	function html()
	{
		var css     = findCssSources(),
			classes = container.attr("class").get(),
			svg     = extractSvg(container.html().get());
		if(null == classes)
			classes = "rg";
		else
			classes += " rg";
		var html = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title></title>
'
+
(null == css ? '' : Arrays.map(css, function(href, _) {
	return Std.format('<link href="$href" rel="stylesheet" type="text/css" />');
}).join("\n"))
+ '
</head>
<body>
<div class="'+classes+'">'+svg+'</div>
</body>
</html>';
		return html;
	}

	function config()
	{
		var svg    = container.select("svg"),
			width  = svg.attr("width").getFloat(),
			height = svg.attr("height").getFloat();
		var config = '"cache":"1d","duration":"1d","width":'+width+',"height":'+height+',"formats":["'+ALLOWED_FORMATS.join('","')+'"]';
		if(null != tokenId)
			config += ',"params":{"tokenId":true}';
		return '{'+config+'}';
	}

	static function getClassName(container : Selection)
	{
		var name = container.attr("class").get();
		name = StringTools.trim((~/\s+/g).replace((~/(^rg$|^rg\s+|\s+rg\s+|\s+rg$)/g).replace(name, " "), " "));
		return ("" == name) ? null : name;
	}

	function complete(success : {} -> Bool, error : String -> Void, content : String)
	{
		var ob : {
			?error : String,
			service : Dynamic<String>
		} = thx.json.Json.decode(content);
		if(null != ob.error)
		{
			if (null != error)
				error(ob.error);
		} else if(success(ob)) {
			var url = Reflect.field(ob.service, format);
			if(null != tokenId)
			{
				url = appendArgument(url, "tokenId", tokenId);
			}
			url = appendArgument(url, "forceDownload", "true");
//			dhx.Dom.select("body").append("img").attr("src").string(url);
			Lib.window.location.href = url;
		}
		/*
		if(content.substr(0, ERROR_PREFIX.length) == ERROR_PREFIX)
		{
			if (null != error)
				error(content.substr(ERROR_PREFIX.length));
		} else if (null == success || success(content))
			Lib.window.location.href = content;
		*/
	}

	static function appendArgument(url : String, name : String, value : String)
	{
		var sep = url.indexOf("?") >= 0 ? '&' : '?';
		return url + sep + name + '=' + StringTools.urlEncode(value);
	}
}