package template;

import erazor.macro.Template;
import ufront.web.mvc.view.UrlHelper;

@:includeTemplate("error.html")
class Error extends Template<{
	baseurl : String,
	url : UrlHelperInst,
	data : { error : String }
}>
{ }