<?php

class controller_DownloadAPIController extends ufront_web_mvc_Controller {
	public function __construct($cache, $renderables, $topdf, $toimage) {
		if(!php_Boot::$skip_constructor) {
		parent::__construct();
		$this->cache = $cache;
		$this->renderables = $renderables;
		$this->topdf = $topdf;
		$this->toimage = $toimage;
	}}
	public $cache;
	public $renderables;
	public $topdf;
	public $toimage;
	public function download($uid, $ext) {
		$renderable = $this->renderables->load($uid);
		if(null === $renderable) {
			return $this->error("uid '" . $uid . "' doesn't exist", $ext);
		}
		if(!$renderable->canRenderTo($ext)) {
			return $this->error("this visualization cannot be rendered to '" . $ext . "'", $ext);
		}
		$params = $this->getParams($renderable->config->template); $cached = $this->cache->load($uid, $ext, $params);
		if(null === $cached) {
			$html = null;
			try {
				$html = $this->processHtml($renderable->html, $params, $renderable->config->template);
			}catch(Exception $»e) {
				$_ex_ = ($»e instanceof HException) ? $»e->e : $»e;
				$e = $_ex_;
				{
					return $this->error("" . $e, $ext);
				}
			}
			$content = $this->renderHtml($html, $ext);
			$cached = $this->cache->insert($uid, $ext, $params, $content, Date::now()->getTime() + $renderable->config->cacheExpirationTime);
		}
		$this->setHeaders($ext, strlen($cached->content->bin));
		$this->renderables->huse($uid);
		return $cached->content->bin;
	}
	public function getParams($config) {
		$params = new thx_collection_HashList(); $requestParams = $this->controllerContext->request->getParams(); $value = null;
		{
			$_g = 0; $_g1 = $config->replaceables();
			while($_g < $_g1->length) {
				$param = $_g1[$_g];
				++$_g;
				$value = $requestParams->get($param);
				if(null !== $value) {
					$params->set($param, $value);
				}
				unset($param);
			}
		}
		return $params;
	}
	public function processHtml($html, $params, $config) {
		{
			$_g = 0; $_g1 = $config->replaceables();
			while($_g < $_g1->length) {
				$param = $_g1[$_g];
				++$_g;
				$value = $params->get($param);
				if(null !== $value) {
					if(!$config->isValid($param, $value)) {
						throw new HException(new thx_error_Error("invalid value '{0}' for the parameter '{1}'", new _hx_array(array($value, $param)), null, _hx_anonymous(array("fileName" => "DownloadAPIController.hx", "lineNumber" => 78, "className" => "controller.DownloadAPIController", "methodName" => "processHtml"))));
					}
					$html = str_replace("\$" . $param, "" . $value, $html);
					continue;
				}
				$value = $config->getDefault($param);
				if(null === $value) {
					throw new HException(new thx_error_Error("the parameter '{0}' is mandatory", new _hx_array(array($value)), null, _hx_anonymous(array("fileName" => "DownloadAPIController.hx", "lineNumber" => 84, "className" => "controller.DownloadAPIController", "methodName" => "processHtml"))));
				}
				$html = str_replace("\$" . $param, "" . $value, $html);
				unset($value,$param);
			}
		}
		return $html;
	}
	public function error($msg, $ext) {
		$ext1 = strtolower($ext); $content = _hx_deref(new template_Error())->execute(_hx_anonymous(array("baseurl" => "http://localhost", "url" => new ufront_web_mvc_view_UrlHelperInst($this->controllerContext->requestContext), "data" => _hx_anonymous(array("error" => $msg)))));
		return $this->renderHtml($content, $ext1);
	}
	public function renderHtml($html, $ext) {
		$result = null;
		switch($ext) {
		case "pdf":{
			$this->topdf->setFormat($ext);
			$result = $this->topdf->render($html);
		}break;
		case "png":case "jpg":{
			$this->toimage->setFormat($ext);
			$result = $this->toimage->render($html);
		}break;
		default:{
			$result = $html;
		}break;
		}
		$this->setHeaders($ext, strlen($result));
		return $result;
	}
	public function setHeaders($ext, $len) {
		$response = $this->controllerContext->response;
		switch($ext) {
		case "pdf":{
			$response->setContentType("application/pdf");
		}break;
		case "png":{
			$response->setContentType("image/png");
		}break;
		case "jpeg":case "jpg":{
			$response->setContentType("image/jpeg");
		}break;
		default:{
		}break;
		}
		$response->setHeader("Content-Length", "" . $len);
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
	static $__rtti = "<class path=\"controller.DownloadAPIController\" params=\"\">\x0A\x09<extends path=\"ufront.web.mvc.Controller\"/>\x0A\x09<cache><c path=\"model.CacheGateway\"/></cache>\x0A\x09<renderables><c path=\"model.RenderableGateway\"/></renderables>\x0A\x09<topdf><c path=\"model.WKHtmlToPdf\"/></topdf>\x0A\x09<toimage><c path=\"model.WKHtmlToImage\"/></toimage>\x0A\x09<download public=\"1\" set=\"method\" line=\"27\"><f a=\"uid:ext\">\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"String\"/>\x0A</f></download>\x0A\x09<getParams set=\"method\" line=\"56\"><f a=\"config\">\x0A\x09<c path=\"model.ConfigTemplate\"/>\x0A\x09<c path=\"thx.collection.HashList\"><c path=\"String\"/></c>\x0A</f></getParams>\x0A\x09<processHtml set=\"method\" line=\"70\"><f a=\"html:params:config\">\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"thx.collection.HashList\"><c path=\"String\"/></c>\x0A\x09<c path=\"model.ConfigTemplate\"/>\x0A\x09<c path=\"String\"/>\x0A</f></processHtml>\x0A\x09<error set=\"method\" line=\"91\"><f a=\"msg:ext\">\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"String\"/>\x0A</f></error>\x0A\x09<renderHtml set=\"method\" line=\"102\"><f a=\"html:ext\">\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"String\"/>\x0A</f></renderHtml>\x0A\x09<setHeaders set=\"method\" line=\"119\"><f a=\"ext:len\">\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"Int\"/>\x0A\x09<e path=\"Void\"/>\x0A</f></setHeaders>\x0A\x09<new public=\"1\" set=\"method\" line=\"18\"><f a=\"cache:renderables:topdf:toimage\">\x0A\x09<c path=\"model.CacheGateway\"/>\x0A\x09<c path=\"model.RenderableGateway\"/>\x0A\x09<c path=\"model.WKHtmlToPdf\"/>\x0A\x09<c path=\"model.WKHtmlToImage\"/>\x0A\x09<e path=\"Void\"/>\x0A</f></new>\x0A</class>";
	function __toString() { return 'controller.DownloadAPIController'; }
}
