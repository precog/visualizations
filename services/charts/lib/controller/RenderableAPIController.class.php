<?php

class controller_RenderableAPIController extends controller_BaseController {
	public function __construct($renderables) {
		if(!php_Boot::$skip_constructor) {
		parent::__construct();
		$this->renderables = $renderables;
	}}
	public $renderables;
	public function uploadFromUrl($urlhtml, $urlconfig, $outputformat) {
		$http = new haxe_Http($urlhtml); $html = null; $config = null; $errormsg = null;
		$http->onData = array(new _hx_lambda(array(&$config, &$errormsg, &$html, &$http, &$outputformat, &$urlconfig, &$urlhtml), "controller_RenderableAPIController_0"), 'execute');
		$http->onError = array(new _hx_lambda(array(&$config, &$errormsg, &$html, &$http, &$outputformat, &$urlconfig, &$urlhtml), "controller_RenderableAPIController_1"), 'execute');
		$http->request(false);
		if(null !== $urlconfig) {
			$http = new haxe_Http($urlconfig);
			$http->onData = array(new _hx_lambda(array(&$config, &$errormsg, &$html, &$http, &$outputformat, &$urlconfig, &$urlhtml), "controller_RenderableAPIController_2"), 'execute');
			$http->onError = array(new _hx_lambda(array(&$config, &$errormsg, &$html, &$http, &$outputformat, &$urlconfig, &$urlhtml), "controller_RenderableAPIController_3"), 'execute');
			$http->request(false);
		}
		if(null !== $errormsg) {
			return $this->error($errormsg, $outputformat);
		}
		return $this->upload($html, $config, $outputformat);
	}
	public function upload($html, $config, $outputformat) {
		if(!$this->validateHtml($html)) {
			return $this->error("invalid content for HTML", $outputformat);
		}
		$cobj = model_ConfigObjects::createDefault();
		if(null !== $config && "" !== ($config = trim($config))) {
			$params = $this->tryParseIni($config);
			if(null === $params) {
				$params = $this->tryParseJson($config);
			}
			if(null === $params) {
				return $this->error("unable to parse the config argument: '{0}', it should be either a valid INI or JSON string", $config);
			}
			$cobj = model_ConfigObjects::overrideValues($cobj, $params);
		}
		$renderable = new model_Renderable($html, model_ConfigRendering::create($cobj), null, null, null);
		if(!$this->renderables->exists($renderable->getUid())) {
			$this->renderables->insert($renderable);
		}
		return new ufront_web_mvc_ForwardResult(null, _hx_anonymous(array("controller" => "renderableAPI", "action" => "display", "uid" => $renderable->getUid(), "outputformat" => $outputformat)));
	}
	public function display($uid, $outputformat) {
		$renderable = $this->renderables->load($uid);
		if(null === $renderable) {
			return $this->error("uid '" . $uid . "' doesn't exist", $outputformat);
		}
		return $this->success($renderable, $outputformat);
	}
	public function tryParseIni($s) {
		try {
			$ini = thx_ini_Ini::decode($s);
			controller_RenderableAPIController::arrayizee($ini);
			return $ini;
		}catch(Exception $�e) {
			$_ex_ = ($�e instanceof HException) ? $�e->e : $�e;
			$e = $_ex_;
			{
				return null;
			}
		}
	}
	public function tryParseJson($s) {
		try {
			return thx_json_Json::decode($s);
		}catch(Exception $�e) {
			$_ex_ = ($�e instanceof HException) ? $�e->e : $�e;
			$e = $_ex_;
			{
				return null;
			}
		}
	}
	public function validateHtml($html) {
		return _hx_index_of(strtolower($html), "reportgrid", null) >= 0;
	}
	public function success($r, $format) {
		$content = _hx_anonymous(array("uid" => $r->getUid(), "createdOn" => $r->createdOn, "cacheExpirationTime" => $r->config->cacheExpirationTime, "formats" => $r->config->allowedFormats, "preserveTimeAfterLastUsage" => model_RenderableGateway::$DELETE_IF_NOT_USED_FOR, "service" => _hx_anonymous(array())));
		{
			$_g = 0; $_g1 = $content->formats;
			while($_g < $_g1->length) {
				$format1 = $_g1[$_g];
				++$_g;
				$content->service->{$format1} = $this->serviceUrl($r->getUid(), $format1);
				unset($format1);
			}
		}
		return $this->output($content, $format, _hx_qtype("template.RenderableDisplay"));
	}
	public function serviceUrl($uid, $format) {
		return "http://localhost" . $this->getUrlHelper()->route(_hx_anonymous(array("controller" => "downloadAPI", "action" => "download", "uid" => $uid, "ext" => $format)));
	}
	public function __call($m, $a) {
		if(isset($this->$m) && is_callable($this->$m))
			return call_user_func_array($this->$m, $a);
		else if(isset($this->�dynamics[$m]) && is_callable($this->�dynamics[$m]))
			return call_user_func_array($this->�dynamics[$m], $a);
		else if('toString' == $m)
			return $this->__toString();
		else
			throw new HException('Unable to call �'.$m.'�');
	}
	static $__rtti = "<class path=\"controller.RenderableAPIController\" params=\"\">\x0A\x09<extends path=\"controller.BaseController\"/>\x0A\x09<DEARRAY line=\"96\" static=\"1\"><c path=\"EReg\"/></DEARRAY>\x0A\x09<arrayizee set=\"method\" line=\"97\" static=\"1\"><f a=\"o\">\x0A\x09<d/>\x0A\x09<e path=\"Void\"/>\x0A</f></arrayizee>\x0A\x09<renderables><c path=\"model.RenderableGateway\"/></renderables>\x0A\x09<uploadFromUrl public=\"1\" set=\"method\" line=\"35\"><f a=\"urlhtml:?urlconfig:outputformat\">\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"ufront.web.mvc.ActionResult\"/>\x0A</f></uploadFromUrl>\x0A\x09<upload public=\"1\" set=\"method\" line=\"61\"><f a=\"html:?config:outputformat\">\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"ufront.web.mvc.ActionResult\"/>\x0A</f></upload>\x0A\x09<display public=\"1\" set=\"method\" line=\"88\"><f a=\"uid:outputformat\">\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"ufront.web.mvc.ActionResult\"/>\x0A</f></display>\x0A\x09<tryParseIni set=\"method\" line=\"119\"><f a=\"s\">\x0A\x09<c path=\"String\"/>\x0A\x09<unknown/>\x0A</f></tryParseIni>\x0A\x09<tryParseJson set=\"method\" line=\"131\"><f a=\"s\">\x0A\x09<c path=\"String\"/>\x0A\x09<unknown/>\x0A</f></tryParseJson>\x0A\x09<validateHtml set=\"method\" line=\"141\"><f a=\"html\">\x0A\x09<c path=\"String\"/>\x0A\x09<e path=\"Bool\"/>\x0A</f></validateHtml>\x0A\x09<success set=\"method\" line=\"146\"><f a=\"r:format\">\x0A\x09<c path=\"model.Renderable\"/>\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"ufront.web.mvc.ActionResult\"/>\x0A</f></success>\x0A\x09<serviceUrl set=\"method\" line=\"163\"><f a=\"uid:format\">\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"String\"/>\x0A</f></serviceUrl>\x0A\x09<new public=\"1\" set=\"method\" line=\"29\"><f a=\"renderables\">\x0A\x09<c path=\"model.RenderableGateway\"/>\x0A\x09<e path=\"Void\"/>\x0A</f></new>\x0A</class>";
	static $DEARRAY;
	static function arrayizee($o) {
		$_g = 0; $_g1 = Reflect::fields($o);
		while($_g < $_g1->length) {
			$field = $_g1[$_g];
			++$_g;
			$value = Reflect::field($o, $field);
			if(Reflect::isObject($value) && null === Type::getClass($value)) {
				controller_RenderableAPIController::arrayizee($value);
			}
			if(controller_RenderableAPIController::$DEARRAY->match($field)) {
				$f = _hx_substr($field, 0, _hx_index_of($field, "[", null));
				$values = Reflect::field($o, $f);
				if(null === $values) {
					$o->{$f} = new _hx_array(array($value));
				} else {
					$values->push($value);
				}
				Reflect::deleteField($o, $field);
				unset($values,$f);
			}
			unset($value,$field);
		}
	}
	function __toString() { return 'controller.RenderableAPIController'; }
}
controller_RenderableAPIController::$DEARRAY = new EReg("\\[\\d+\\]\$", "");
function controller_RenderableAPIController_0(&$config, &$errormsg, &$html, &$http, &$outputformat, &$urlconfig, &$urlhtml, $data) {
	{
		$html = $data;
	}
}
function controller_RenderableAPIController_1(&$config, &$errormsg, &$html, &$http, &$outputformat, &$urlconfig, &$urlhtml, $msg) {
	{
		$errormsg = $msg;
	}
}
function controller_RenderableAPIController_2(&$config, &$errormsg, &$html, &$http, &$outputformat, &$urlconfig, &$urlhtml, $data) {
	{
		$config = $data;
	}
}
function controller_RenderableAPIController_3(&$config, &$errormsg, &$html, &$http, &$outputformat, &$urlconfig, &$urlhtml, $msg) {
	{
		$errormsg = $msg;
	}
}