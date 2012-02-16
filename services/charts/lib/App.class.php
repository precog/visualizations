<?php

class App {
	public function __construct(){}
	static $AUTH = "6kdsbgv46272";
	static $MONGO_DB_NAME = "chartsrenderer1";
	static $RENDERABLES_COLLECTION = "renderables";
	static $CACHE_COLLECTION = "cache";
	static $CONFIG_COLLECTION = "config";
	static $LOG_COLLECTION = "log";
	static $SERVER_HOST;
	static $BASE_HOST;
	static $JS_PATH;
	static $CSS_PATH;
	static $BASE_PATH = "/rg/services/viz/charts/";
	static $RESET_CSS = "/Users/francoponticelli/Projects/reportgrid/visualizations/services/charts/css/reset.css";
	static $version;
	static function baseUrl() {
		return "http://" . $_SERVER["HTTP_HOST"] . "";
	}
	static function main() {
		App::$version = "1.0.3.490";
		$wkhtmltopdfbin = "/usr/lib/wkhtmltopdf.app/Contents/MacOS/wkhtmltopdf"; $wkhtmltoimagebin = "/usr/lib/wkhtmltoimage.app/Contents/MacOS/wkhtmltoimage";
		$locator = new thx_util_TypeLocator();
		$locator->memoize(_hx_qtype("model.WKHtmlToImage"), array(new _hx_lambda(array(&$locator, &$wkhtmltoimagebin, &$wkhtmltopdfbin), "App_0"), 'execute'));
		$locator->memoize(_hx_qtype("model.WKHtmlToPdf"), array(new _hx_lambda(array(&$locator, &$wkhtmltoimagebin, &$wkhtmltopdfbin), "App_1"), 'execute'));
		$locator->memoize(_hx_qtype("mongo.Mongo"), array(new _hx_lambda(array(&$locator, &$wkhtmltoimagebin, &$wkhtmltopdfbin), "App_2"), 'execute'));
		$locator->memoize(_hx_qtype("mongo.MongoDB"), array(new _hx_lambda(array(&$locator, &$wkhtmltoimagebin, &$wkhtmltopdfbin), "App_3"), 'execute'));
		$locator->memoize(_hx_qtype("model.RenderableGateway"), array(new _hx_lambda(array(&$locator, &$wkhtmltoimagebin, &$wkhtmltopdfbin), "App_4"), 'execute'));
		$locator->memoize(_hx_qtype("model.CacheGateway"), array(new _hx_lambda(array(&$locator, &$wkhtmltoimagebin, &$wkhtmltopdfbin), "App_5"), 'execute'));
		$locator->memoize(_hx_qtype("model.ConfigGateway"), array(new _hx_lambda(array(&$locator, &$wkhtmltoimagebin, &$wkhtmltopdfbin), "App_6"), 'execute'));
		ufront_web_mvc_DependencyResolver::$current = new ufront_external_mvc_ThxDependencyResolver($locator);
		$config = new ufront_web_AppConfiguration("controller", true, "/rg/services/viz/charts/", null, false); $routes = new ufront_web_routing_RouteCollection(null); $app = new ufront_web_mvc_MvcApplication($config, $routes, null);
		$app->modules->add(new util_TraceToMongo("chartsrenderer1", "log", App::serverName()));
		$routes->addRoute("/", _hx_anonymous(array("controller" => "home", "action" => "index")), null, null);
		$routes->addRoute("/up/form/html", _hx_anonymous(array("controller" => "uploadForm", "action" => "display")), null, null);
		$routes->addRoute("/up/form/gist", _hx_anonymous(array("controller" => "uploadForm", "action" => "gist")), null, null);
		$routes->addRoute("/up.{outputformat}", _hx_anonymous(array("controller" => "renderableAPI", "action" => "upload")), null, new _hx_array(array(new ufront_web_routing_ValuesConstraint("outputformat", new _hx_array(array("json", "html")), null, null), new ufront_web_routing_HttpMethodConstraint("POST", null))));
		$routes->addRoute("/upandsee.{ext}", _hx_anonymous(array("controller" => "renderableAPI", "action" => "uploadAndDisplay")), null, new _hx_array(array(new ufront_web_routing_HttpMethodConstraint("POST", null))));
		$routes->addRoute("/up/gist/{gistid}.{outputformat}", _hx_anonymous(array("controller" => "gistUpload", "action" => "importGist")), null, new _hx_array(array(new ufront_web_routing_ValuesConstraint("outputformat", new _hx_array(array("json", "html")), null, null))));
		$routes->addRoute("/up/url.{outputformat}", _hx_anonymous(array("controller" => "renderableAPI", "action" => "uploadFromUrl")), null, new _hx_array(array(new ufront_web_routing_ValuesConstraint("outputformat", new _hx_array(array("json", "html")), null, null))));
		$routes->addRoute("/up/info/{uid}.{outputformat}", _hx_anonymous(array("controller" => "renderableAPI", "action" => "display")), null, new _hx_array(array(new ufront_web_routing_ValuesConstraint("outputformat", new _hx_array(array("json", "html")), null, null))));
		$routes->addRoute("/down/{uid}.{ext}", _hx_anonymous(array("controller" => "downloadAPI", "action" => "download")), null, null);
		$routes->addRoute("/status/info", _hx_anonymous(array("controller" => "setup", "action" => "info")), null, null);
		$routes->addRoute("/status/db", _hx_anonymous(array("controller" => "setup", "action" => "mongodb")), null, null);
		$routes->addRoute("/status/renderables", _hx_anonymous(array("controller" => "setup", "action" => "topRenderables")), null, null);
		$routes->addRoute("/maintenance/renderables/purge/unused", _hx_anonymous(array("controller" => "setup", "action" => "purgeRenderables")), null, null);
		$routes->addRoute("/maintenance/renderables/purge/expired", _hx_anonymous(array("controller" => "setup", "action" => "purgeExpiredRenderables")), null, null);
		$routes->addRoute("/maintenance/cache/purge", _hx_anonymous(array("controller" => "setup", "action" => "purgeCache")), null, null);
		$routes->addRoute("/maintenance/cache/clear", _hx_anonymous(array("controller" => "setup", "action" => "clearCache")), null, null);
		$routes->addRoute("/maintenance/logs/clear", _hx_anonymous(array("controller" => "setup", "action" => "clearLogs")), null, null);
		$routes->addRoute("/maintenance/logs.json", _hx_anonymous(array("controller" => "setup", "action" => "displayLogs", "format" => "json")), null, null);
		$routes->addRoute("/maintenance/logs.html", _hx_anonymous(array("controller" => "setup", "action" => "displayLogs", "format" => "html")), null, null);
		$routes->addRoute("/setup/collections/create", _hx_anonymous(array("controller" => "setup", "action" => "createCollections")), null, null);
		$routes->addRoute("/setup/collections/drop", _hx_anonymous(array("controller" => "setup", "action" => "dropCollections")), null, null);
		$routes->addRoute("/setup/renderables/drop", _hx_anonymous(array("controller" => "setup", "action" => "dropRenderables")), null, null);
		$routes->addRoute("/setup/cache/drop", _hx_anonymous(array("controller" => "setup", "action" => "dropCache")), null, null);
		$app->execute();
	}
	static function serverName() {
		return trim(`hostname -f`);
	}
	function __toString() { return 'App'; }
}
App::$SERVER_HOST = "http://" . $_SERVER["HTTP_HOST"];
App::$BASE_HOST = "http://" . $_SERVER["HTTP_HOST"] . "";
App::$JS_PATH = "http://" . $_SERVER["HTTP_HOST"] . "/rg/charts/js/";
App::$CSS_PATH = "http://" . $_SERVER["HTTP_HOST"] . "/rg/charts/css/";
function App_0(&$locator, &$wkhtmltoimagebin, &$wkhtmltopdfbin) {
	{
		return new model_WKHtmlToImage($wkhtmltoimagebin);
	}
}
function App_1(&$locator, &$wkhtmltoimagebin, &$wkhtmltopdfbin) {
	{
		return new model_WKHtmlToPdf($wkhtmltopdfbin);
	}
}
function App_2(&$locator, &$wkhtmltoimagebin, &$wkhtmltopdfbin) {
	{
		return new mongo_Mongo();
	}
}
function App_3(&$locator, &$wkhtmltoimagebin, &$wkhtmltopdfbin) {
	{
		return new mongo_MongoDB($locator->get(_hx_qtype("mongo.Mongo"))->m->selectDB("chartsrenderer1"));
	}
}
function App_4(&$locator, &$wkhtmltoimagebin, &$wkhtmltopdfbin) {
	{
		return new model_RenderableGateway(new mongo_MongoCollection($locator->get(_hx_qtype("mongo.MongoDB"))->db->selectCollection("renderables")));
	}
}
function App_5(&$locator, &$wkhtmltoimagebin, &$wkhtmltopdfbin) {
	{
		return new model_CacheGateway(new mongo_MongoCollection($locator->get(_hx_qtype("mongo.MongoDB"))->db->selectCollection("cache")));
	}
}
function App_6(&$locator, &$wkhtmltoimagebin, &$wkhtmltopdfbin) {
	{
		return new model_ConfigGateway(new mongo_MongoCollection($locator->get(_hx_qtype("mongo.MongoDB"))->db->selectCollection("config")));
	}
}
