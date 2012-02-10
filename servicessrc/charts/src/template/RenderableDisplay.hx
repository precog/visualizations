package template;

import erazor.macro.Template;
import ufront.web.mvc.view.UrlHelper;

@:includeTemplate("renderabledisplay.html")
class RenderableDisplay extends Template<{
	baseurl : String,
	url : UrlHelperInst,
	data : RenderableInfo
}>
{ }

typedef RenderableInfo = {
	uid   : String,
	createdOn : Date,
	cacheExpirationTime : Float,
	formats : Array<String>,
	service : {
		?pdf  : String,
		?png  : String,
		?jpg  : String,
		?html : String
	}
}