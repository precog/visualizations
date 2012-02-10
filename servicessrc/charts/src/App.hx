import model.CacheGateway;
import model.RenderableGateway;
import thx.util.Imports;
import ufront.web.AppConfiguration;
import ufront.web.mvc.MvcApplication;
import ufront.web.routing.RouteCollection;
import ufront.web.routing.HttpMethodConstraint;
import ufront.web.routing.IRouteConstraint;
import ufront.web.routing.ValuesConstraint;
import mongo.Mongo;
import mongo.MongoDB;
import mongo.MongoCollection;

class App
{
	public static inline var MONGO_DB_NAME = "chartsrenderer1";
	public static inline var RENDERABLES_COLLECTION = "renderables";
	public static inline var CACHE_COLLECTION = "cache";
	public static inline var BASE_URL = "http://localhost";

	static function main()
	{
		var wkhtmltopdfbin   = "/usr/lib/wkhtmltopdf.app/Contents/MacOS/wkhtmltopdf",
			wkhtmltoimagebin = "/usr/lib/wkhtmltoimage.app/Contents/MacOS/wkhtmltoimage";
		var locator = new thx.util.TypeServiceLocator();
		locator.memoize(model.WKHtmlToImage, function() {
			return new model.WKHtmlToImage(wkhtmltoimagebin);
		});
		locator.memoize(model.WKHtmlToPdf, function() {
			return new model.WKHtmlToPdf(wkhtmltopdfbin);
		});
		locator.memoize(Mongo, function() {
			return new Mongo();
		});
		locator.memoize(MongoDB, function() {
			return locator.get(Mongo).selectDB(MONGO_DB_NAME);
		});
		locator.memoize(RenderableGateway, function() {
			return new RenderableGateway(locator.get(MongoDB).selectCollection(RENDERABLES_COLLECTION));
		});
		locator.memoize(CacheGateway, function() {
			return new CacheGateway(locator.get(MongoDB).selectCollection(CACHE_COLLECTION));
		});

		ufront.web.mvc.DependencyResolver.current = new ufront.external.mvc.ThxDependencyResolver(locator);

		Imports.pack("controller", true);

		var config = new AppConfiguration(
				"controller",
				true, // mod rewrite
				"rg/services/viz/charts/",
				"logs/logs.txt"
			),
			routes = new RouteCollection(),
			app    = new MvcApplication(config, routes);

		routes.addRoute('/', {
			controller : "home", action : "index"
		});

		routes.addRoute('/up/form', {
			controller : "uploadForm", action : "display"
		});

		routes.addRoute('/up.{outputformat}', {
				controller : "uploadAPI", action : "upload"
			},
			[
				cast(new ValuesConstraint("outputformat", ["json", "html"]), IRouteConstraint),
				new HttpMethodConstraint("POST")
			]
		);

		routes.addRoute('/up/url.{outputformat}', {
				controller : "uploadAPI", action : "uploadFromUrl"
			},
			[
				cast(new ValuesConstraint("outputformat", ["json", "html"]), IRouteConstraint)
			]
		);

		routes.addRoute('/down/{uid}.{ext}', {
			controller : "downloadAPI", action : "download"
		});

// this should run only on localhost
		routes.addRoute('/status/info', {
			controller : "setup", action : "info"
		});
		routes.addRoute('/status/db', {
			controller : "setup", action : "mongodb"
		});
		routes.addRoute('/status/renderables', {
			controller : "setup", action : "topRenderables"
		});

		routes.addRoute('/setup/collections/create', {
			controller : "setup", action : "createCollections"
		});
		routes.addRoute('/setup/collections/drop', {
			controller : "setup", action : "dropCollections"
		});
		routes.addRoute('/setup/renderables/drop', {
			controller : "setup", action : "dropRenderables"
		});
		routes.addRoute('/setup/cache/drop', {
			controller : "setup", action : "dropCache"
		});

		app.execute();
	}
}