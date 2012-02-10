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

	public function dropRenderables()
	{
		dropCollection(App.RENDERABLES_COLLECTION);
		return redirectToStatus();
	}

	public function dropCache()
	{
		dropCollection(App.CACHE_COLLECTION);
		return redirectToStatus();
	}

	public function dropCollections()
	{
		dropCollection(App.RENDERABLES_COLLECTION);
		dropCollection(App.CACHE_COLLECTION);
		return redirectToStatus();
	}

	function redirectToStatus()
	{
		return new ufront.web.mvc.ForwardResult({ controller : "setup", action : "mongodb" });
	}

	function dropCollection(collection : String)
	{
		var db = mongo.selectDB(App.MONGO_DB_NAME),
			collection = db.selectCollection(collection);
		collection.drop();
	}

	public function createCollections()
	{
		// ensure DB
		var dbname  = App.MONGO_DB_NAME,
			db      = mongo.selectDB(dbname),
			cacheCollections = db.listCollections(),
			renderablesCollectionName = App.RENDERABLES_COLLECTION,
			cacheCollectionName = App.CACHE_COLLECTION;

		// ensure Renderable Collection
		var renderableCollection = db.selectCollection(renderablesCollectionName);
		if(renderableCollection.validate().ok < 1)
		{
			renderableCollection = db.createCollection(renderablesCollectionName);
			renderableCollection.ensureIndexOn("uid", { unique : true });
			renderableCollection.ensureIndexOn("lastUsage");
		}

		// ensure Cache Collection
		var cacheCollection = db.selectCollection(cacheCollectionName);
		if(cacheCollection.validate().ok < 1)
		{
			cacheCollection = db.createCollection(cacheCollectionName);
			renderableCollection.ensureIndexOn("uid", { unique : true });
			cacheCollection.ensureIndexOn("expiresOn");
		}

		return new ufront.web.mvc.ForwardResult({ controller : "setup", action : "mongodb" });
	}

	public function mongodb()
	{
		// ensure DB
		var dbname  = App.MONGO_DB_NAME,
			db      = mongo.selectDB(dbname),
			cacheCollections = db.listCollections(),
			renderablesCollectionName = App.RENDERABLES_COLLECTION,
			cacheCollectionName = App.CACHE_COLLECTION,
			renderablesExists = true,
			cacheExists = true;

		// ensure Renderable Collection
		var renderableCollection = db.selectCollection(renderablesCollectionName);
		if(renderableCollection.validate().ok < 1)
		{
			renderablesExists = false;
		}

		// ensure Cache Collection
		var cacheCollection = db.selectCollection(cacheCollectionName);
		if(cacheCollection.validate().ok < 1)
		{
			cacheExists = false;
		}

		// number of renderables
		var content = {
        	baseurl : App.BASE_URL,
			url : new ufront.web.mvc.view.UrlHelper.UrlHelperInst(controllerContext.requestContext),
			db : {
				name : dbname,
				collections : cacheCollections
			},
			renderables : {
				name    : renderablesCollectionName,
				exists : renderablesExists,
				count   : renderablesExists ? renderableCollection.count() : -1
			},
			cache : {
				name    : cacheCollectionName,
				exists : cacheExists,
				count   : cacheExists ? cacheCollection.count() : -1
			}
		};

		return new ContentResult(new template.MongoDBStatus().execute(content));
	}

	public function topRenderables()
	{
		var dbname  = App.MONGO_DB_NAME,
			db      = mongo.selectDB(dbname),
			gate = new model.RenderableGateway(db.selectCollection(App.RENDERABLES_COLLECTION));
		return Dynamics.string(gate.topByUsage(10));
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