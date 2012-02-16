package rg.interactive;

import thx.js.Selection;

class RGLegacyRenderer
{
	static var FORMAT = 'jpg';

	var serviceUrl : String;
	var container : Selection;
	var tokenId : String;

	public function new(container : Selection, serviceurl : String)
	{
		this.container = container;
		this.serviceUrl = serviceurl;
		this.tokenId = rg.util.RG.getTokenId();
	}

	function url()
	{
		return StringTools.replace(serviceUrl, '{ext}', FORMAT);
	}

	public function display(params : Dynamic)
	{
		normalizeParams(params);
		// create iframe
		var id     = container.attr("id").get(),
			width  = params.options.width,
			height = params.options.height,
			iframe = createIframe(width, height);
		if(null == id)
			id = "rgchart";
		var u = url();
		var h = html(id, params);
		var c = config(width, height);
		var content = 
		'<form method="post" action="'
		+ u + '" name="VIZ"><textarea name="html">'
		+ h + '</textarea><textarea name="config">'
		+ c + '</textarea><script type="text/javascript">
  document.VIZ.submit();
</script>
</form>';
		writeToIframe(cast iframe.node(), content);
	}

	static var nextframeid = 0;
	function createIframe(width : Int, height : Int)
	{
		var id = "rgiframe" + (++nextframeid);
		return container.append("iframe")
			.attr("name").string(id)
			.attr("id").string(id)
			.attr("frameborder").float(0)
			.attr("width").float(width)
			.attr("height").float(height)
			.attr("marginwidth").float(0)
			.attr("marginheight").float(0)
			.attr("scrolling").string("auto")
			.style("overflow").string("hidden")
			.style("border").string("0")
			.style("margin").string("0")
			.style("padding").string("0")
			.attr("src").string("about:blank");
	}

	function writeToIframe(iframe : js.Dom.Frame, content : String)
	{
		var iframeDoc : Dynamic = null;
		if (untyped iframe.contentDocument)
		{
			iframeDoc = untyped iframe.contentDocument;
		} else if (untyped iframe.contentWindow) {
			iframeDoc = untyped iframe.contentWindow.document;
		} else if (null != js.Lib.window.frames[cast iframe.name]) {
			iframeDoc = untyped js.Lib.window.frames[cast iframe.name].document;
		}
		if (iframeDoc) {
			iframeDoc.open();
			iframeDoc.write('<html><head><title></title></head><body style="display:none">'+content+'</body></html>');
			iframeDoc.close();
		}
	}

	function normalizeParams(params : Dynamic)
	{
		if(null == params.options)
			params.options = {};
		var size = rg.factory.FactoryLayout.size(container, params.options, 0);
		params.options.width = size.width;
		params.options.height = size.height;

		// remove functions
		removeFunctions(params.options);

		// remove empty objects
		removeEmpties(params);

		// remove dangerous stuff
		Reflect.deleteField(params, "load");
	}

	static function removeFunctions(o : Dynamic)
	{
		for(field in Reflect.fields(o))
		{
			var f = Reflect.field(o, field);
			if(Reflect.isFunction(f))
			{
				Reflect.deleteField(o, field);
			} else if(Types.isAnonymous(o)) {
				removeFunctions(f);
			}
		}
	}

	static function removeEmpties(o : Dynamic)
	{
		for(field in Reflect.fields(o))
		{
			var f = Reflect.field(o, field);
			if(Types.isAnonymous(f))
			{
				removeEmpties(f);
				if(Reflect.fields(f).length == 0)
					Reflect.deleteField(o, field);
			} else if(null == f)
			{
				Reflect.deleteField(o, field);
			}
		}
	}

	function findJsSources() : Array<String>
	{
		var re  = ~/reportgrid-[^.]+\.js/;
		return thx.js.Dom.selectAll("script").filterNode(function(n, _) {
			return  re.match(untyped n.src);
		}).mapNode(function(n, _) {
			return untyped n.src;
		});
	}

	function findCssSources() : Array<String>
	{
		return thx.js.Dom.selectAll("link").filterNode(function(n, _) {
			return "stylesheet" == untyped n.rel;
		}).mapNode(function(n, _) {
			return untyped n.href;
		});
	}

	function html(id : String, params : Dynamic)
	{
		var p       = thx.json.Json.encode(params),
			scripts = findJsSources(),
			css     = findCssSources(),
			classes = container.attr("class").get();
		if(null == classes)
			classes = "rg";
		else
			classes += " rg";
		var h = '<!DOCTYPE html>
<html>
<head>
<title></title>
'
+
(null == scripts ? "" : Arrays.map(scripts, function(src, _) {
	return Std.format('<script src="$src" type=""text/javascript"></script>');
}).join("\n"))
+
(null == css ? "" : Arrays.map(css, function(href, _) {
	return Std.format('<link href="$href" rel="stylesheet" type="text/css" />');
}).join("\n"))
+ '
</head>
<body>
<div id="'+id+'" class="'+classes+'" style="margin:0"></div>
<script type="text/javascript">
ReportGrid.chart("#'+id+'", '+p+');
</script>
</body>
</html>';
		return h;
	}

	function config(width : Int, height : Int)
	{
		var c = '"cache":"1d","duration":"1d","width":'+width+',"height":'+height+',"formats":["'+FORMAT+'"]';
		return '{'+c+'}';
	}
/*
	static function getClassName(container : Selection)
	{
		var name = container.attr("class").get();
		name = StringTools.trim((~/\s+/g).replace((~/(^rg$|^rg\s+|\s+rg\s+|\s+rg$)/g).replace(name, " "), " "));
		return ("" == name) ? null : name;
	}
*/
/*
	static function appendArgument(url : String, name : String, value : String)
	{
		var sep = url.indexOf("?") >= 0 ? '&' : '?';
		return url + sep + name + '=' + StringTools.urlEncode(value);
	}
*/
}