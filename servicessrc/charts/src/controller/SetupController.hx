package controller;

import model.CacheGateway;
import model.LogGateway;
import model.RenderableGateway;
import ufront.web.mvc.ActionResult;
import ufront.web.mvc.Controller;
import ufront.web.mvc.ContentResult;
import mongo.Mongo;

class SetupController extends BaseController
{

	var mongo : Mongo;
	public function new(mongo : Mongo)
	{
		super();
		this.mongo = mongo;
	}

	public function dropRenderables(auth : String)
	{
		authorize(auth);
		dropCollection(App.RENDERABLES_COLLECTION);
		return redirectToStatus(auth);
	}

	function authorize(auth : String)
	{
		if(auth != App.AUTH)
			throw new ufront.web.error.UnauthorizedError();
	}

	public function dropCache(auth : String)
	{
		authorize(auth);
		dropCollection(App.CACHE_COLLECTION);
		return redirectToStatus(auth);
	}

	public function dropCollections(auth : String)
	{
		authorize(auth);
		dropCollection(App.RENDERABLES_COLLECTION);
		dropCollection(App.CACHE_COLLECTION);
		return redirectToStatus(auth);
	}

	public function displayLogs(auth : String, format : String)
	{
		authorize(auth);
		var db = mongo.selectDB(App.MONGO_DB_NAME),
			gate = new LogGateway(db.selectCollection(App.LOG_COLLECTION));
		return output(gate.list(), format, template.Logs);
	}

	public function clearLogs(auth : String)
	{
		authorize(auth);
		var db = mongo.selectDB(App.MONGO_DB_NAME),
			gate = new LogGateway(db.selectCollection(App.LOG_COLLECTION));
		gate.clear();
		return redirectToStatus(auth);
	}

	function redirectToStatus(auth : String)
	{
		return new ufront.web.mvc.ForwardResult({ controller : "setup", action : "mongodb", auth : auth });
	}

	function dropCollection(collection : String)
	{
		var db = mongo.selectDB(App.MONGO_DB_NAME),
			collection = db.selectCollection(collection);
		collection.drop();
	}

	function cacheCollection()
	{
		var dbname = App.MONGO_DB_NAME,
			db     = mongo.selectDB(dbname);
		return db.selectCollection(App.CACHE_COLLECTION);
	}

	function renderableCollection()
	{
		var dbname = App.MONGO_DB_NAME,
			db     = mongo.selectDB(dbname);
		return db.selectCollection(App.RENDERABLES_COLLECTION);
	}

	public function createCollections(auth : String)
	{
		authorize(auth);
		// ensure DB
		var dbname  = App.MONGO_DB_NAME,
			db      = mongo.selectDB(dbname),
			cacheCollections = db.listCollections(),
			renderablesCollectionName = App.RENDERABLES_COLLECTION,
			cacheCollectionName = App.CACHE_COLLECTION,
			configCollectionName = App.CONFIG_COLLECTION;

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
			cacheCollection.ensureIndexOn("uid", { unique : true });
			cacheCollection.ensureIndexOn("expiresOn");
		}

		// ensure Config Collection
		var configCollection = db.selectCollection(configCollectionName);
		if(cacheCollection.validate().ok < 1)
		{
			configCollection = db.createCollection(configCollectionName);
			configCollection.ensureIndexOn("name", { unique : true });
		}

		// add sample
		var controller = new RenderableAPIController(new model.RenderableGateway(renderableCollection));
		var renderable = controller.makeRenderable(model.Sample.html, model.Sample.config);

		var config = new model.ConfigGateway(configCollection);
		config.setSampleUID(renderable.uid);

		return redirectToStatus(auth);
	}

	public function mongodb(auth : String)
	{
		authorize(auth);
		// ensure DB
		var dbname  = App.MONGO_DB_NAME,
			db      = mongo.selectDB(dbname),
			cacheCollections = db.listCollections(),
			renderablesCollectionName = App.RENDERABLES_COLLECTION,
			cacheCollectionName = App.CACHE_COLLECTION,
			logCollectionName = App.LOG_COLLECTION,
			renderablesExists = true,
			cacheExists = true,
			logExists = true;

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

		// ensure Logs Collection
		var logCollection = db.selectCollection(logCollectionName);
		if(logCollection.validate().ok < 1)
		{
			logExists = false;
		}

		// number of renderables
		var content = {
        	baseurl : App.baseUrl(),
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
			},
			logs : {
				name    : logCollectionName,
				exists : logExists,
				count   : logExists ? logCollection.count() : -1
			}
		};

		return new ContentResult(new template.MongoDBStatus().execute(content));
	}

	public function topRenderables(auth : String, top = 10)
	{
		authorize(auth);
		var gate    = new RenderableGateway(renderableCollection()),
			list    = gate.topByUsage(top),
			content = {
	        	baseurl     : App.baseUrl(),
				url         : new ufront.web.mvc.view.UrlHelper.UrlHelperInst(controllerContext.requestContext),
				top         : top,
				renderables : list
			};
		return new ContentResult(new template.RenderablesInfo().execute(content));
	}

	public function purge(auth : String)
	{
		authorize(auth);
		var gate = new CacheGateway(cacheCollection());
		gate.removeExpired();
		var gate = new RenderableGateway(renderableCollection());
		gate.removeOldAndUnused();
		return redirectToStatus(auth);
	}

	public function purgeCache(auth : String)
	{
		authorize(auth);
		var gate = new CacheGateway(cacheCollection()),
			purged = gate.removeExpired();
		return redirectToStatus(auth);
	}

	public function clearCache(auth : String)
	{
		authorize(auth);
		var gate = new CacheGateway(cacheCollection()),
			purged = gate.removeAll();
		return redirectToStatus(auth);
	}

	public function purgeRenderables(auth : String)
	{
		authorize(auth);
		var gate = new RenderableGateway(renderableCollection()),
			purged = gate.removeOldAndUnused();
		return redirectToStatus(auth);
	}

	public function purgeExpiredRenderables(auth : String)
	{
		authorize(auth);
		var gate = new RenderableGateway(renderableCollection()),
			purged = gate.removeExpired();
		return redirectToStatus(auth);
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