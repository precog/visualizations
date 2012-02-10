package controller;

import erazor.macro.Template;
import ufront.web.mvc.Controller;
import ufront.web.mvc.ActionResult;
import ufront.web.mvc.ContentResult;
import ufront.web.mvc.JsonResult;
import ufront.web.mvc.view.UrlHelper;

class BaseController extends Controller
{
	public var urlHelper(getUrlHelper, null) : UrlHelperInst;
	function getUrlHelper()
	{
		if(null == urlHelper)
		{
			urlHelper = new UrlHelperInst(controllerContext.requestContext);
		}
		return urlHelper;
	}

	function error(message : String, format : String)
	{
		return output({ error : message }, format, template.Error);
	}

	function output<T>(data : T, format : String, templateClass : Class<Dynamic>) : ActionResult
	{
		format = normalizeFormat(format);
		switch (format) {
			case "html":
				var template : Template<{ url : ufront.web.mvc.view.UrlHelperInst, data : T, baseurl : String }> = Type.createInstance(templateClass, []);
				var content = {
					baseurl : App.BASE_URL,
					url : urlHelper,
					data : data
				};
				return new ContentResult(untyped template.execute(content));
			case "json":
				return new JsonResult(data);
			default:
				return throw new thx.error.Error("invalid format '{0}'", [format]);
		}
	}

	function normalizeFormat(f : String)
	{
		f = f.toLowerCase();
		return switch(f) {
			case 'html', 'json': f;
			default : 'html';
		}
	}
}