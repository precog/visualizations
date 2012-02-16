<?php

class controller_SetupController extends controller_BaseController {
	public function __construct($mongo) {
		if(!php_Boot::$skip_constructor) {
		parent::__construct();
		$this->mongo = $mongo;
	}}
	public $mongo;
	public function dropRenderables($auth) {
		$this->authorize($auth);
		$this->dropCollection("renderables");
		return $this->redirectToStatus($auth);
	}
	public function authorize($auth) {
		if($auth !== "6kdsbgv46272") {
			throw new HException(new ufront_web_error_UnauthorizedError(_hx_anonymous(array("fileName" => "SetupController.hx", "lineNumber" => 31, "className" => "controller.SetupController", "methodName" => "authorize"))));
		}
	}
	public function dropCache($auth) {
		$this->authorize($auth);
		$this->dropCollection("cache");
		return $this->redirectToStatus($auth);
	}
	public function dropCollections($auth) {
		$this->authorize($auth);
		$this->dropCollection("renderables");
		$this->dropCollection("cache");
		return $this->redirectToStatus($auth);
	}
	public function displayLogs($auth, $format) {
		$this->authorize($auth);
		$db = new mongo_MongoDB($this->mongo->m->selectDB("chartsrenderer1")); $gate = new model_LogGateway(new mongo_MongoCollection($db->db->selectCollection("log")));
		return $this->output($gate->hlist(), $format, _hx_qtype("template.Logs"));
	}
	public function clearLogs($auth) {
		$this->authorize($auth);
		$db = new mongo_MongoDB($this->mongo->m->selectDB("chartsrenderer1")); $gate = new model_LogGateway(new mongo_MongoCollection($db->db->selectCollection("log")));
		$gate->clear();
		return $this->redirectToStatus($auth);
	}
	public function redirectToStatus($auth) {
		return new ufront_web_mvc_ForwardResult(null, _hx_anonymous(array("controller" => "setup", "action" => "mongodb", "auth" => $auth)));
	}
	public function dropCollection($collection) {
		$db = new mongo_MongoDB($this->mongo->m->selectDB("chartsrenderer1")); $collection1 = new mongo_MongoCollection($db->db->selectCollection($collection));
		$collection1->c->drop();
	}
	public function cacheCollection() {
		$dbname = "chartsrenderer1"; $db = new mongo_MongoDB($this->mongo->m->selectDB($dbname));
		return new mongo_MongoCollection($db->db->selectCollection("cache"));
	}
	public function renderableCollection() {
		$dbname = "chartsrenderer1"; $db = new mongo_MongoDB($this->mongo->m->selectDB($dbname));
		return new mongo_MongoCollection($db->db->selectCollection("renderables"));
	}
	public function createCollections($auth) {
		$this->authorize($auth);
		$dbname = "chartsrenderer1"; $db = new mongo_MongoDB($this->mongo->m->selectDB($dbname)); $cacheCollections = new _hx_array($db->db->listCollections()); $renderablesCollectionName = "renderables"; $cacheCollectionName = "cache"; $configCollectionName = "config";
		$renderableCollection = new mongo_MongoCollection($db->db->selectCollection($renderablesCollectionName));
		if(php_Lib::objectOfAssociativeArray($renderableCollection->c->validate())->ok < 1) {
			$renderableCollection = new mongo_MongoCollection($db->db->createCollection($renderablesCollectionName));
			$renderableCollection->ensureIndexOn("uid", _hx_anonymous(array("unique" => true)));
			$renderableCollection->ensureIndexOn("lastUsage", null);
		}
		$cacheCollection = new mongo_MongoCollection($db->db->selectCollection($cacheCollectionName));
		if(php_Lib::objectOfAssociativeArray($cacheCollection->c->validate())->ok < 1) {
			$cacheCollection = new mongo_MongoCollection($db->db->createCollection($cacheCollectionName));
			$cacheCollection->ensureIndexOn("uid", _hx_anonymous(array("unique" => true)));
			$cacheCollection->ensureIndexOn("expiresOn", null);
		}
		$configCollection = new mongo_MongoCollection($db->db->selectCollection($configCollectionName));
		if(php_Lib::objectOfAssociativeArray($cacheCollection->c->validate())->ok < 1) {
			$configCollection = new mongo_MongoCollection($db->db->createCollection($configCollectionName));
			$configCollection->ensureIndexOn("name", _hx_anonymous(array("unique" => true)));
		}
		$controller = new controller_RenderableAPIController(new model_RenderableGateway($renderableCollection));
		$renderable = $controller->makeRenderable(model_Sample::$html, model_Sample::$config);
		$config = new model_ConfigGateway($configCollection);
		$config->setSampleUID($renderable->getUid());
		return $this->redirectToStatus($auth);
	}
	public function mongodb($auth) {
		$this->authorize($auth);
		$dbname = "chartsrenderer1"; $db = new mongo_MongoDB($this->mongo->m->selectDB($dbname)); $cacheCollections = new _hx_array($db->db->listCollections()); $renderablesCollectionName = "renderables"; $cacheCollectionName = "cache"; $logCollectionName = "log"; $renderablesExists = true; $cacheExists = true; $logExists = true;
		$renderableCollection = new mongo_MongoCollection($db->db->selectCollection($renderablesCollectionName));
		if(php_Lib::objectOfAssociativeArray($renderableCollection->c->validate())->ok < 1) {
			$renderablesExists = false;
		}
		$cacheCollection = new mongo_MongoCollection($db->db->selectCollection($cacheCollectionName));
		if(php_Lib::objectOfAssociativeArray($cacheCollection->c->validate())->ok < 1) {
			$cacheExists = false;
		}
		$logCollection = new mongo_MongoCollection($db->db->selectCollection($logCollectionName));
		if(php_Lib::objectOfAssociativeArray($logCollection->c->validate())->ok < 1) {
			$logExists = false;
		}
		$content = _hx_anonymous(array("baseurl" => App::baseUrl(), "url" => new ufront_web_mvc_view_UrlHelperInst($this->controllerContext->requestContext), "db" => _hx_anonymous(array("name" => $dbname, "collections" => $cacheCollections)), "renderables" => _hx_anonymous(array("name" => $renderablesCollectionName, "exists" => $renderablesExists, "count" => (($renderablesExists) ? $renderableCollection->c->count() : -1))), "cache" => _hx_anonymous(array("name" => $cacheCollectionName, "exists" => $cacheExists, "count" => (($cacheExists) ? $cacheCollection->c->count() : -1))), "logs" => _hx_anonymous(array("name" => $logCollectionName, "exists" => $logExists, "count" => (($logExists) ? $logCollection->c->count() : -1)))));
		return new ufront_web_mvc_ContentResult(_hx_deref(new template_MongoDBStatus())->execute($content), null);
	}
	public function topRenderables($auth, $top) {
		if($top === null) {
			$top = 10;
		}
		$this->authorize($auth);
		$gate = new model_RenderableGateway($this->renderableCollection()); $list = $gate->topByUsage($top); $content = _hx_anonymous(array("baseurl" => App::baseUrl(), "url" => new ufront_web_mvc_view_UrlHelperInst($this->controllerContext->requestContext), "top" => $top, "renderables" => $list));
		return new ufront_web_mvc_ContentResult(_hx_deref(new template_RenderablesInfo())->execute($content), null);
	}
	public function purge($auth) {
		$this->authorize($auth);
		$gate = new model_CacheGateway($this->cacheCollection());
		$gate->removeExpired();
		$gate1 = new model_RenderableGateway($this->renderableCollection());
		$gate1->removeOldAndUnused(null);
		return $this->redirectToStatus($auth);
	}
	public function purgeCache($auth) {
		$this->authorize($auth);
		$gate = new model_CacheGateway($this->cacheCollection()); $purged = $gate->removeExpired();
		return $this->redirectToStatus($auth);
	}
	public function clearCache($auth) {
		$this->authorize($auth);
		$gate = new model_CacheGateway($this->cacheCollection()); $purged = $gate->removeAll();
		return $this->redirectToStatus($auth);
	}
	public function purgeRenderables($auth) {
		$this->authorize($auth);
		$gate = new model_RenderableGateway($this->renderableCollection()); $purged = $gate->removeOldAndUnused(null);
		return $this->redirectToStatus($auth);
	}
	public function purgeExpiredRenderables($auth) {
		$this->authorize($auth);
		$gate = new model_RenderableGateway($this->renderableCollection()); $purged = $gate->removeExpired();
		return $this->redirectToStatus($auth);
	}
	public function info() {
		return $this->collectPhpInfo();
	}
	public function collectPhpInfo() {
		ob_start();
		phpinfo();
		return ob_get_clean();
	}
	public function __call($m, $a) {
		if(isset($this->$m) && is_callable($this->$m))
			return call_user_func_array($this->$m, $a);
		else if(isset($this->»dynamics[$m]) && is_callable($this->»dynamics[$m]))
			return call_user_func_array($this->»dynamics[$m], $a);
		else if('toString' == $m)
			return $this->__toString();
		else
			throw new HException('Unable to call «'.$m.'»');
	}
	static $__rtti = "<class path=\"controller.SetupController\" params=\"\">\x0A\x09<extends path=\"controller.BaseController\"/>\x0A\x09<mongo><c path=\"mongo.Mongo\"/></mongo>\x0A\x09<dropRenderables public=\"1\" set=\"method\" line=\"21\"><f a=\"auth\">\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"ufront.web.mvc.ForwardResult\"/>\x0A</f></dropRenderables>\x0A\x09<authorize set=\"method\" line=\"28\"><f a=\"auth\">\x0A\x09<c path=\"String\"/>\x0A\x09<e path=\"Void\"/>\x0A</f></authorize>\x0A\x09<dropCache public=\"1\" set=\"method\" line=\"34\"><f a=\"auth\">\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"ufront.web.mvc.ForwardResult\"/>\x0A</f></dropCache>\x0A\x09<dropCollections public=\"1\" set=\"method\" line=\"41\"><f a=\"auth\">\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"ufront.web.mvc.ForwardResult\"/>\x0A</f></dropCollections>\x0A\x09<displayLogs public=\"1\" set=\"method\" line=\"49\"><f a=\"auth:format\">\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"ufront.web.mvc.ActionResult\"/>\x0A</f></displayLogs>\x0A\x09<clearLogs public=\"1\" set=\"method\" line=\"57\"><f a=\"auth\">\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"ufront.web.mvc.ForwardResult\"/>\x0A</f></clearLogs>\x0A\x09<redirectToStatus set=\"method\" line=\"66\"><f a=\"auth\">\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"ufront.web.mvc.ForwardResult\"/>\x0A</f></redirectToStatus>\x0A\x09<dropCollection set=\"method\" line=\"71\"><f a=\"collection\">\x0A\x09<c path=\"String\"/>\x0A\x09<e path=\"Void\"/>\x0A</f></dropCollection>\x0A\x09<cacheCollection set=\"method\" line=\"78\"><f a=\"\"><c path=\"mongo.MongoCollection\"/></f></cacheCollection>\x0A\x09<renderableCollection set=\"method\" line=\"85\"><f a=\"\"><c path=\"mongo.MongoCollection\"/></f></renderableCollection>\x0A\x09<createCollections public=\"1\" set=\"method\" line=\"92\"><f a=\"auth\">\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"ufront.web.mvc.ForwardResult\"/>\x0A</f></createCollections>\x0A\x09<mongodb public=\"1\" set=\"method\" line=\"139\"><f a=\"auth\">\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"ufront.web.mvc.ContentResult\"/>\x0A</f></mongodb>\x0A\x09<topRenderables public=\"1\" set=\"method\" line=\"202\"><f a=\"auth:?top\">\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"Int\"/>\x0A\x09<c path=\"ufront.web.mvc.ContentResult\"/>\x0A</f></topRenderables>\x0A\x09<purge public=\"1\" set=\"method\" line=\"216\"><f a=\"auth\">\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"ufront.web.mvc.ForwardResult\"/>\x0A</f></purge>\x0A\x09<purgeCache public=\"1\" set=\"method\" line=\"226\"><f a=\"auth\">\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"ufront.web.mvc.ForwardResult\"/>\x0A</f></purgeCache>\x0A\x09<clearCache public=\"1\" set=\"method\" line=\"234\"><f a=\"auth\">\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"ufront.web.mvc.ForwardResult\"/>\x0A</f></clearCache>\x0A\x09<purgeRenderables public=\"1\" set=\"method\" line=\"242\"><f a=\"auth\">\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"ufront.web.mvc.ForwardResult\"/>\x0A</f></purgeRenderables>\x0A\x09<purgeExpiredRenderables public=\"1\" set=\"method\" line=\"250\"><f a=\"auth\">\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"ufront.web.mvc.ForwardResult\"/>\x0A</f></purgeExpiredRenderables>\x0A\x09<info public=\"1\" set=\"method\" line=\"258\"><f a=\"\"><c path=\"String\"/></f></info>\x0A\x09<collectPhpInfo set=\"method\" line=\"263\"><f a=\"\"><c path=\"String\"/></f></collectPhpInfo>\x0A\x09<new public=\"1\" set=\"method\" line=\"15\"><f a=\"mongo\">\x0A\x09<c path=\"mongo.Mongo\"/>\x0A\x09<e path=\"Void\"/>\x0A</f></new>\x0A</class>";
	function __toString() { return 'controller.SetupController'; }
}
