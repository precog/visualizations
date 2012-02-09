package controller;

import model.ConfigObject;
import model.Renderable;
import model.ConfigRendering;
import template.UploadAPIOutput;
import ufront.web.mvc.ActionResult;
import ufront.web.mvc.ContentResult;
import ufront.web.mvc.JsonResult;

import model.RenderableGateway;
import ufront.web.mvc.view.UrlHelper;

class UploadAPIController extends ufront.web.mvc.Controller
{
	var gateway : RenderableGateway;
	public var urlHelper(getUrlHelper, null) : UrlHelperInst;
	function getUrlHelper()
	{
		if(null == urlHelper)
		{
			urlHelper = new UrlHelperInst(controllerContext.requestContext);
		}
		return urlHelper;
	}
	public function new(gateway : RenderableGateway)
	{
		super();
		this.gateway = gateway;
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
		var outputformat = format(outputformat);
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
		if(gateway.exists(renderable.uid))
		{
			renderable = gateway.load(renderable.uid);
		} else {
			gateway.insert(renderable);
		}
		return success(renderable, outputformat);
	}

	function tryParseIni(s : String)
	{
		try
		{
			return thx.ini.Ini.decode(s);
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
		return output({ info : {
			uid : r.uid,
			pdf : serviceUrl(r.uid, 'pdf'),
			png : serviceUrl(r.uid, 'png'),
			jpg : serviceUrl(r.uid, 'jpg'),
			html : serviceUrl(r.uid, 'html')
		}}, format);
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
				return new ContentResult(new UploadAPIOutput().execute(content));
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
}