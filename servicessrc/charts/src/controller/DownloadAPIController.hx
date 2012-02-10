package controller;

import model.CacheGateway;
import model.ConfigTemplate;
import model.RenderableGateway;
import model.WKHtmlToImage;
import model.WKHtmlToPdf;
import thx.collection.HashList;
import ufront.web.mvc.Controller;
import template.Error;

class DownloadAPIController extends Controller
{
	var cache : CacheGateway;
	var renderables : RenderableGateway;
	var topdf : WKHtmlToPdf;
	var toimage : WKHtmlToImage;
	public function new(cache : CacheGateway, renderables : RenderableGateway, topdf : WKHtmlToPdf, toimage : WKHtmlToImage)
	{
		super();
		this.cache = cache;
		this.renderables = renderables;
		this.topdf = topdf;
		this.toimage = toimage;
	}

	public function download(uid : String, ext : String)
	{
		var renderable = renderables.load(uid);
		if(null == renderable)
			return error(Std.format("uid '$uid' doesn't exist"), ext);
		if(!renderable.canRenderTo(ext))
			return error(Std.format("this visualization cannot be rendered to '$ext'"), ext);

		var params = getParams(renderable.config.template),
			cached = cache.load(uid, ext, params);
		if(null == cached)
		{
			var html;
			try {
				html = processHtml(renderable.html, params, renderable.config.template);
			} catch(e : Dynamic) {
				return error(""+e, ext);
			}
			var content = renderHtml(html, ext);
			cached = cache.insert(uid, ext, params, content, Date.now().getTime() + renderable.config.cacheExpirationTime);
		}

		setHeaders(ext, cached.content.bin.length);

		// log usage
		renderables.use(uid);
		return cached.content.bin;
	}

	function getParams(config : ConfigTemplate)
	{
		var params = new HashList<String>(),
			requestParams = controllerContext.request.params,
			value;
		for(param in config.replaceables())
		{
			value = requestParams.get(param);
			if(null != value)
				params.set(param, value);
		}
		return params;
	}

	function processHtml(html : String, params : HashList<String>, config : ConfigTemplate)
	{
		for(param in config.replaceables())
		{
			var value = params.get(param);
			if(null != value)
			{
				if(!config.isValid(param, value))
					throw new thx.error.Error("invalid value '{0}' for the parameter '{1}'", [value, param]);
				html = StringTools.replace(html, '$'+param, ""+value);
				continue;
			}
			value = config.getDefault(param);
			if(null == value)
				throw new thx.error.Error("the parameter '{0}' is mandatory", [value]);

			html = StringTools.replace(html, '$'+param, ""+value);
		}
		return html;
	}

	function error(msg : String, ext : String)
	{
		var ext = ext.toLowerCase(),
			content = new Error().execute({
        		baseurl : App.BASE_URL,
				url : new ufront.web.mvc.view.UrlHelper.UrlHelperInst(controllerContext.requestContext),
				data : { error : msg }
			});
		return renderHtml(content, ext);
	}

	function renderHtml(html : String, ext : String)
	{
		var result;
		switch (ext) {
			case 'pdf':
				topdf.format = ext;
				result = topdf.render(html);
			case 'png', 'jpg':
				toimage.format = ext;
				result = toimage.render(html);
			default: // html
				result = html;
		}
		setHeaders(ext, result.length);
		return result;
	}

	function setHeaders(ext : String, len : Int)
	{
		var response = controllerContext.response;
		switch (ext) {
			case 'pdf':
				response.contentType = 'application/pdf';

			case 'png':
				response.contentType = 'image/png';

			case 'jpeg', 'jpg':
				response.contentType = 'image/jpeg';

			default: // html
		}
		response.setHeader("Content-Length", "" + len);
	}
}