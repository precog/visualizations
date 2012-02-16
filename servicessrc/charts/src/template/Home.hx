package template;

import erazor.macro.Template;
import ufront.web.mvc.view.UrlHelper;

@:includeTemplate("home.html")
//@:template("<h1>hello world: @title</h1>")
class Home extends Template<{
	baseurl : String,
	url : UrlHelperInst,
	sampleuid : String,
	version : String,
	authorized : Bool,
	auth : String
}>
{
	
}