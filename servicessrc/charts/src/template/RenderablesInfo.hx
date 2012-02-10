package template;

import erazor.macro.Template;
import ufront.web.mvc.view.UrlHelper;

@:includeTemplate("renderablesinfo.html")
class RenderablesInfo extends Template<{
	baseurl : String,
	url : UrlHelperInst,
	top : Int,
	renderables : Array<{
		uid : String,
		createdOn : Float,
		lastUsage : Float,
		usages : Int
	}>
}>
{ }