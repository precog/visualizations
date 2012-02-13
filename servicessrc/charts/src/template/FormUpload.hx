package template;

import erazor.macro.Template;
import ufront.web.mvc.view.UrlHelper;

@:includeTemplate("formupload.html")
class FormUpload extends Template<{
	baseurl : String,
	url : UrlHelperInst,
	html : String,
	config : String,
	errors : Hash<String>,
	displayFormat : String
}>
{ }