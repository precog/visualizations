package controller;

import model.RenderableGateway;
import model.WKHtmlToImage;
import model.WKHtmlToPdf;
import ufront.web.mvc.Controller;
import template.DownloadError;

class DownloadAPIController extends Controller
{
	var renderables : RenderableGateway;
	var topdf : WKHtmlToPdf;
	var toimage : WKHtmlToImage;
	public function new(renderables : RenderableGateway, topdf : WKHtmlToPdf, toimage : WKHtmlToImage)
	{
		super();
		this.renderables = renderables;
		this.topdf = topdf;
		this.toimage = toimage;
	}

	public function download(uid : String, ext : String)
	{
		var renderable = renderables.load(uid);
		if(null == renderable)
			return error(Std.format("uid '$uid' doesn't exist"), ext);

// TRIGGERS ERROR: "$set" used as key of ass array
		renderables.use(uid);
		return renderHtml(renderable.html, ext);
	}

	function error(msg : String, ext : String)
	{
		var ext = ext.toLowerCase(),
			content = new DownloadError().execute({
        		baseurl : App.BASE_URL,
				url : new ufront.web.mvc.view.UrlHelper.UrlHelperInst(controllerContext.requestContext),
				error : msg
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