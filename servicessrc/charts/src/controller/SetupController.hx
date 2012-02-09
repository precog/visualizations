package controller;

import ufront.web.mvc.Controller;
import ufront.web.mvc.ContentResult;
import mongo.Mongo;

class SetupController extends Controller
{

	var mongo : Mongo;
	public function new(mongo : Mongo)
	{
		super();
		this.mongo = mongo;
	}

	public function mongodb()
	{
		// ensure DB
		var dbname  = App.MONGO_DB_NAME,
			db      = mongo.selectDB(dbname),
			collections = db.listCollections(),
			renderablesName = App.RENDERABLES_COLLECTION,
			renderablesExisted = true;

		// ensure Renderable Collection
		var collection = db.selectCollection(renderablesName);
//		collection.drop(); return null;
		if(collection.validate().ok < 1)
		{
			renderablesExisted = false;
			collection = db.createCollection(renderablesName);
			collection.ensureIndexOn("uid", { unique : true });
			collection.ensureIndexOn("lastUsage");
		}

		// number of renderables
		var content = {
        	baseurl : App.BASE_URL,
			url : new ufront.web.mvc.view.UrlHelper.UrlHelperInst(controllerContext.requestContext),
			db : {
				name : dbname,
				collections : collections
			},
			renderables : {
				name    : renderablesName,
				existed : renderablesExisted,
				count   : collection.count()
			}
		};

		return new ContentResult(new template.MongoDBStatus().execute(content));
	}

	public function info()
	{
		return collectPhpInfo();
	}

	function collectPhpInfo() : String
	{
		untyped __call__("ob_start");
		untyped __call__("phpinfo");
		return untyped __call__("ob_get_clean");
	}
}