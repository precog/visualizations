package template;

import erazor.macro.Template;
import ufront.web.mvc.view.UrlHelper;

@:includeTemplate("gistupload.html")
class GistUpload extends Template<{
	baseurl : String,
	url : UrlHelperInst,
	?error : String,
	gistid : String
}>
{ }