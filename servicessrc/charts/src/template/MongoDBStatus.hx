package template;

import erazor.macro.Template;
import ufront.web.mvc.view.UrlHelper;

@:includeTemplate("mongodb.html")
class MongoDBStatus extends Template<{
	baseurl : String,
	url : UrlHelperInst,
	db : {
		name    : String,
		collections : Array<String>
	},
	renderables : {
		name    : String,
		existed : Bool,
		count   : Int
	}
}>
{ }