package template;

import erazor.macro.Template;
import ufront.web.mvc.view.UrlHelper;

@:includeTemplate("uploadapi.html")
class UploadAPIOutput extends Template<{
	baseurl : String,
	url : UrlHelperInst,
	?error : String,
	?info : RenderableInfo
}>
{ }

typedef RenderableInfo = {
	uid   : String,
	?pdf  : String,
	?png  : String,
	?jpg  : String,
	?html : String
}