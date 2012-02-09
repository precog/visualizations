package template;

import erazor.macro.Template;
import ufront.web.mvc.view.UrlHelper;

@:includeTemplate("downloaderror.html")
class DownloadError extends Template<{
	baseurl : String,
	url : UrlHelperInst,
	error : String
}>
{ }