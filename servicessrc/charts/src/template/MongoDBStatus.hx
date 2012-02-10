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
		exists : Bool,
		count   : Int
	},
	cache : {
		name    : String,
		exists : Bool,
		count   : Int
	}
}>
{ }