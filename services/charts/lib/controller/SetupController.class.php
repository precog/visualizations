<?php

class controller_SetupController extends ufront_web_mvc_Controller {
	public function __construct($mongo) {
		if(!php_Boot::$skip_constructor) {
		parent::__construct();
		$this->mongo = $mongo;
	}}
	public $mongo;
	public function dropRenderables() {
		$this->dropCollection("renderables");
		return $this->redirectToStatus();
	}
	public function dropCache() {
		$this->dropCollection("cache");
		return $this->redirectToStatus();
	}
	public function dropCollections() {
		$this->dropCollection("renderables");
		$this->dropCollection("cache");
		return $this->redirectToStatus();
	}
	public function redirectToStatus() {
		return new ufront_web_mvc_ForwardResult(null, _hx_anonymous(array("controller" => "setup", "action" => "mongodb")));
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
	public function createCollections() {
		$dbname = "chartsrenderer1"; $db = new mongo_MongoDB($this->mongo->m->selectDB($dbname)); $cacheCollections = new _hx_array($db->db->listCollections()); $renderablesCollectionName = "renderables"; $cacheCollectionName = "cache";
		$renderableCollection = new mongo_MongoCollection($db->db->selectCollection($renderablesCollectionName));
		if(php_Lib::objectOfAssociativeArray($renderableCollection->c->validate())->ok < 1) {
			$renderableCollection = new mongo_MongoCollection($db->db->createCollection($renderablesCollectionName));
			$renderableCollection->ensureIndexOn("uid", _hx_anonymous(array("unique" => true)));
			$renderableCollection->ensureIndexOn("lastUsage", null);
		}
		$cacheCollection = new mongo_MongoCollection($db->db->selectCollection($cacheCollectionName));
		if(php_Lib::objectOfAssociativeArray($cacheCollection->c->validate())->ok < 1) {
			$cacheCollection = new mongo_MongoCollection($db->db->createCollection($cacheCollectionName));
			$renderableCollection->ensureIndexOn("uid", _hx_anonymous(array("unique" => true)));
			$cacheCollection->ensureIndexOn("expiresOn", null);
		}
		return new ufront_web_mvc_ForwardResult(null, _hx_anonymous(array("controller" => "setup", "action" => "mongodb")));
	}
	public function mongodb() {
		$dbname = "chartsrenderer1"; $db = new mongo_MongoDB($this->mongo->m->selectDB($dbname)); $cacheCollections = new _hx_array($db->db->listCollections()); $renderablesCollectionName = "renderables"; $cacheCollectionName = "cache"; $renderablesExists = true; $cacheExists = true;
		$renderableCollection = new mongo_MongoCollection($db->db->selectCollection($renderablesCollectionName));
		if(php_Lib::objectOfAssociativeArray($renderableCollection->c->validate())->ok < 1) {
			$renderablesExists = false;
		}
		$cacheCollection = new mongo_MongoCollection($db->db->selectCollection($cacheCollectionName));
		if(php_Lib::objectOfAssociativeArray($cacheCollection->c->validate())->ok < 1) {
			$cacheExists = false;
		}
		$content = _hx_anonymous(array("baseurl" => "http://localhost", "url" => new ufront_web_mvc_view_UrlHelperInst($this->controllerContext->requestContext), "db" => _hx_anonymous(array("name" => $dbname, "collections" => $cacheCollections)), "renderables" => _hx_anonymous(array("name" => $renderablesCollectionName, "exists" => $renderablesExists, "count" => (($renderablesExists) ? $renderableCollection->c->count() : -1))), "cache" => _hx_anonymous(array("name" => $cacheCollectionName, "exists" => $cacheExists, "count" => (($cacheExists) ? $cacheCollection->c->count() : -1)))));
		return new ufront_web_mvc_ContentResult(_hx_deref(new template_MongoDBStatus())->execute($content), null);
	}
	public function topRenderables($top) {
		if($top === null) {
			$top = 10;
		}
		$gate = new model_RenderableGateway($this->renderableCollection()); $list = $gate->topByUsage($top); $content = _hx_anonymous(array("baseurl" => "http://localhost", "url" => new ufront_web_mvc_view_UrlHelperInst($this->controllerContext->requestContext), "top" => $top, "renderables" => $list));
		return new ufront_web_mvc_ContentResult(_hx_deref(new template_RenderablesInfo())->execute($content), null);
	}
	public function purge() {
		$gate = new model_CacheGateway($this->cacheCollection());
		$gate->removeExpired();
		$gate1 = new model_RenderableGateway($this->renderableCollection());
		$gate1->removeOldAndUnused(null);
		return $this->redirectToStatus();
	}
	public function purgeCache() {
		$gate = new model_CacheGateway($this->cacheCollection()); $purged = $gate->removeExpired();
		return $this->redirectToStatus();
	}
	public function clearCache() {
		$gate = new model_CacheGateway($this->cacheCollection()); $purged = $gate->removeAll();
		return $this->redirectToStatus();
	}
	public function purgeRenderables() {
		$gate = new model_RenderableGateway($this->renderableCollection()); $purged = $gate->removeOldAndUnused(null);
		return $this->redirectToStatus();
	}
	public function purgeExpiredRenderables() {
		$gate = new model_RenderableGateway($this->renderableCollection()); $purged = $gate->removeExpired();
		return $this->redirectToStatus();
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
	static $__rtti = "<class path=\"controller.SetupController\" params=\"\">\x0A\x09<extends path=\"ufront.web.mvc.Controller\"/>\x0A\x09<mongo><c path=\"mongo.Mongo\"/></mongo>\x0A\x09<dropRenderables public=\"1\" set=\"method\" line=\"20\"><f a=\"\"><c path=\"ufront.web.mvc.ForwardResult\"/></f></dropRenderables>\x0A\x09<dropCache public=\"1\" set=\"method\" line=\"26\"><f a=\"\"><c path=\"ufront.web.mvc.ForwardResult\"/></f></dropCache>\x0A\x09<dropCollections public=\"1\" set=\"method\" line=\"32\"><f a=\"\"><c path=\"ufront.web.mvc.ForwardResult\"/></f></dropCollections>\x0A\x09<redirectToStatus set=\"method\" line=\"39\"><f a=\"\"><c path=\"ufront.web.mvc.ForwardResult\"/></f></redirectToStatus>\x0A\x09<dropCollection set=\"method\" line=\"44\"><f a=\"collection\">\x0A\x09<c path=\"String\"/>\x0A\x09<e path=\"Void\"/>\x0A</f></dropCollection>\x0A\x09<cacheCollection set=\"method\" line=\"51\"><f a=\"\"><c path=\"mongo.MongoCollection\"/></f></cacheCollection>\x0A\x09<renderableCollection set=\"method\" line=\"58\"><f a=\"\"><c path=\"mongo.MongoCollection\"/></f></renderableCollection>\x0A\x09<createCollections public=\"1\" set=\"method\" line=\"65\"><f a=\"\"><c path=\"ufront.web.mvc.ForwardResult\"/></f></createCollections>\x0A\x09<mongodb public=\"1\" set=\"method\" line=\"95\"><f a=\"\"><c path=\"ufront.web.mvc.ContentResult\"/></f></mongodb>\x0A\x09<topRenderables public=\"1\" set=\"method\" line=\"143\"><f a=\"?top\">\x0A\x09<c path=\"Int\"/>\x0A\x09<c path=\"ufront.web.mvc.ContentResult\"/>\x0A</f></topRenderables>\x0A\x09<purge public=\"1\" set=\"method\" line=\"156\"><f a=\"\"><c path=\"ufront.web.mvc.ForwardResult\"/></f></purge>\x0A\x09<purgeCache public=\"1\" set=\"method\" line=\"165\"><f a=\"\"><c path=\"ufront.web.mvc.ForwardResult\"/></f></purgeCache>\x0A\x09<clearCache public=\"1\" set=\"method\" line=\"172\"><f a=\"\"><c path=\"ufront.web.mvc.ForwardResult\"/></f></clearCache>\x0A\x09<purgeRenderables public=\"1\" set=\"method\" line=\"179\"><f a=\"\"><c path=\"ufront.web.mvc.ForwardResult\"/></f></purgeRenderables>\x0A\x09<purgeExpiredRenderables public=\"1\" set=\"method\" line=\"186\"><f a=\"\"><c path=\"ufront.web.mvc.ForwardResult\"/></f></purgeExpiredRenderables>\x0A\x09<info public=\"1\" set=\"method\" line=\"193\"><f a=\"\"><c path=\"String\"/></f></info>\x0A\x09<collectPhpInfo set=\"method\" line=\"198\"><f a=\"\"><c path=\"String\"/></f></collectPhpInfo>\x0A\x09<new public=\"1\" set=\"method\" line=\"14\"><f a=\"mongo\">\x0A\x09<c path=\"mongo.Mongo\"/>\x0A\x09<e path=\"Void\"/>\x0A</f></new>\x0A</class>";
	function __toString() { return 'controller.SetupController'; }
}
