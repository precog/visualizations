import model.RenderableGateway;
import thx.util.Imports;
import ufront.web.AppConfiguration;
import ufront.web.mvc.MvcApplication;
import ufront.web.routing.RouteCollection;
import mongo.Mongo;
import mongo.MongoDB;
import mongo.MongoCollection;

class App
{
	public static inline var MONGO_DB_NAME = "chartsrenderer1";
	public static inline var RENDERABLES_COLLECTION = "renderables";
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

		ufront.web.mvc.DependencyResolver.current = new ufront.external.mvc.ThxDependencyResolver(locator);

		Imports.pack("controller", true);

		var config = new AppConfiguration("controller", true, "rg/services/viz/charts/"),
			routes = new RouteCollection(),
			app    = new MvcApplication(config, routes);

		routes.addRoute('/', {
			controller : "home", action : "index"
		});

		routes.addRoute('/up/form', {
			controller : "uploadForm", action : "display"
		});

		routes.addRoute('/up.html', {
			controller : "uploadAPI", action : "upload", outputformat : 'html'
		});

		routes.addRoute('/up.json', {
			controller : "uploadAPI", action : "upload", outputformat : 'json'
		});

		routes.addRoute('/up/url.html', {
			controller : "uploadAPI", action : "uploadFromUrl", outputformat : 'html'
		});

		routes.addRoute('/up/url.json', {
			controller : "uploadAPI", action : "uploadFromUrl", outputformat : 'json'
		});

		routes.addRoute('/down/{uid}.{ext}', {
			controller : "downloadAPI", action : "download"
		});

// this should run only on localhost
		routes.addRoute('/info', {
			controller : "setup", action : "info"
		});
		routes.addRoute('/statusdb', {
			controller : "setup", action : "mongodb"
		});

		app.execute();
	}
}