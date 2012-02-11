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
	expiresOn : Null<Date>,
	cacheExpirationTime : Float,
	formats : Array<String>,
	preserveTimeAfterLastUsage : Float,
	service : {
		?pdf  : String,
		?ps   : String,
		?png  : String,
		?jpg  : String,
		?html : String,
		?svg  : String,
		?bmp  : String,
		?tif  : String
	}
}