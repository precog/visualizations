<?php

class controller_SetupController extends ufront_web_mvc_Controller {
	public function __construct($mongo) {
		if(!php_Boot::$skip_constructor) {
		parent::__construct();
		$this->mongo = $mongo;
	}}
	public $mongo;
	public function mongodb() {
		$dbname = "chartsrenderer1"; $db = new mongo_MongoDB($this->mongo->m->selectDB($dbname)); $collections = new _hx_array($db->db->listCollections()); $renderablesName = "renderables"; $renderablesExisted = true;
		$collection = new mongo_MongoCollection($db->db->selectCollection($renderablesName));
		if(php_Lib::objectOfAssociativeArray($collection->c->validate())->ok < 1) {
			$renderablesExisted = false;
			$collection = new mongo_MongoCollection($db->db->createCollection($renderablesName));
			$collection->ensureIndexOn("uid", _hx_anonymous(array("unique" => true)));
			$collection->ensureIndexOn("lastUsage", null);
		}
		$content = _hx_anonymous(array("baseurl" => "http://localhost", "url" => new ufront_web_mvc_view_UrlHelperInst($this->controllerContext->requestContext), "db" => _hx_anonymous(array("name" => $dbname, "collections" => $collections)), "renderables" => _hx_anonymous(array("name" => $renderablesName, "existed" => $renderablesExisted, "count" => $collection->c->count()))));
		return new ufront_web_mvc_ContentResult(_hx_deref(new template_MongoDBStatus())->execute($content), null);
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
	static $__rtti = "<class path=\"controller.SetupController\" params=\"\">\x0A\x09<extends path=\"ufront.web.mvc.Controller\"/>\x0A\x09<mongo><c path=\"mongo.Mongo\"/></mongo>\x0A\x09<mongodb public=\"1\" set=\"method\" line=\"17\"><f a=\"\"><c path=\"ufront.web.mvc.ContentResult\"/></f></mongodb>\x0A\x09<info public=\"1\" set=\"method\" line=\"55\"><f a=\"\"><c path=\"String\"/></f></info>\x0A\x09<collectPhpInfo set=\"method\" line=\"60\"><f a=\"\"><c path=\"String\"/></f></collectPhpInfo>\x0A\x09<new public=\"1\" set=\"method\" line=\"11\"><f a=\"mongo\">\x0A\x09<c path=\"mongo.Mongo\"/>\x0A\x09<e path=\"Void\"/>\x0A</f></new>\x0A</class>";
	function __toString() { return 'controller.SetupController'; }
}
