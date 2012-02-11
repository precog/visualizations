package controller;

import model.ConfigObject;
import model.Renderable;
import model.ConfigRendering;
import template.RenderableDisplay;
import ufront.web.mvc.ActionResult;
import ufront.web.mvc.ContentResult;
import ufront.web.mvc.ForwardResult;
import ufront.web.mvc.JsonResult;

import model.RenderableGateway;
import ufront.web.mvc.view.UrlHelper;

class RenderableAPIController extends BaseController
{
	var renderables : RenderableGateway;
/*
	public var urlHelper(getUrlHelper, null) : UrlHelperInst;
	function getUrlHelper()
	{
		if(null == urlHelper)
		{
			urlHelper = new UrlHelperInst(controllerContext.requestContext);
		}
		return urlHelper;
	}
*/
	public function new(renderables : RenderableGateway)
	{
		super();
		this.renderables = renderables;
	}

	public function uploadFromUrl(urlhtml : String, ?urlconfig, outputformat : String)
	{
		var http = new haxe.Http(urlhtml), html = null, config = null, errormsg = null;
		http.onData = function(data) {
			html = data;
		};
		http.onError = function(msg) {
			errormsg = msg;
		};
		http.request(false);
		if(null != urlconfig)
		{
			http = new haxe.Http(urlconfig);
			http.onData = function(data) {
				config = data;
			};
			http.onError = function(msg) {
				errormsg = msg;
			};
			http.request(false);
		}
		if(null != errormsg)
			return error(errormsg, outputformat);
		return upload(html, config, outputformat);
	}

	public function upload(html : String, ?config : String, outputformat : String)
	{
		if(!validateHtml(html))
			return error("invalid content for HTML", outputformat);
		var cobj = ConfigObjects.createDefault();
		if(null != config && ('' != (config = StringTools.trim(config))))
		{
			var params = tryParseIni(config);
			if(null == params)
				params = tryParseJson(config);
			if(null == params)
				return error("unable to parse the config argument: '{0}', it should be either a valid INI or JSON string", config);
			cobj = ConfigObjects.overrideValues(cobj, params);
		}
		var renderable = new Renderable(html, ConfigRendering.create(cobj));
		if(!renderables.exists(renderable.uid))
		{
			renderables.insert(renderable);
		}
		return new ForwardResult({
			controller : "renderableAPI",
			action : "display",
			uid : renderable.uid,
			outputformat : outputformat
		});
	}

	public function display(uid : String, outputformat : String)
	{
		var renderable = renderables.load(uid);
		if(null == renderable)
			return error(Std.format("uid '$uid' doesn't exist"), outputformat);
		return success(renderable, outputformat);
	}

	static var DEARRAY = ~/\[\d+\]$/;
	static function arrayizee(o : Dynamic)
	{
		for(field in Reflect.fields(o))
		{
			var value = Reflect.field(o, field);
			if(Types.isAnonymous(value))
				arrayizee(value);

			if(DEARRAY.match(field))
			{
				var f = field.substr(0, field.indexOf("["));
				var values = Reflect.field(o, f);
				if(null == values)
				{
					Reflect.setField(o, f, [value]);
				} else {
					values.push(value);
				}
				Reflect.deleteField(o, field);
			}
		}
	}
	function tryParseIni(s : String)
	{
		try
		{
			var ini = thx.ini.Ini.decode(s);
			arrayizee(ini);
			return ini;
		} catch(e : Dynamic) {
			return null;
		}
	}

	function tryParseJson(s : String)
	{
		try
		{
			return thx.json.Json.decode(s);
		} catch(e : Dynamic) {
			return null;
		}
	}

	function validateHtml(html : String)
	{
		return html.toLowerCase().indexOf("reportgrid") >= 0;
	}

	function success(r : Renderable, format : String)
	{
		var content = {
			uid : r.uid,
			createdOn : r.createdOn,
			cacheExpirationTime : r.config.cacheExpirationTime,
			formats : r.config.allowedFormats,
			preserveTimeAfterLastUsage : model.RenderableGateway.DELETE_IF_NOT_USED_FOR,
			service : {}
		};
		for(format in content.formats)
		{
			Reflect.setField(content.service, format, serviceUrl(r.uid, format));
		}
		return output(content, format, RenderableDisplay);
	}

	function serviceUrl(uid : String, format : String)
	{
		return App.BASE_URL + urlHelper.route({
			controller : "downloadAPI",
			action : 'download',
			uid : uid,
			ext : format
		});
	}
/*
	function error(message : String, format : String)
	{
		return output({ error : message }, format);
	}

	function output(content : { ?error : String, ?info : RenderableInfo, ?url : UrlHelperInst, ?baseurl : String }, format : String) : ActionResult
	{
		switch (format) {
			case "html":
				content.baseurl = App.BASE_URL;
				content.url = urlHelper;
				return new ContentResult(new RenderableDisplay().execute(content));
			case "json":
				return new JsonResult(content);
			default:
				return throw new thx.error.Error("invalid format '{0}'", [format]);
		}
	}

	function format(f : String)
	{
		f = f.toLowerCase();
		return switch(f) {
			case 'html', 'json': f;
			default : 'html';
		}
	}
*/
}