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
		$this->renderables->huse($uid);
		$cached = $this->cache->load($uid, $ext, new _hx_array(array()));
		if(null === $cached) {
			$content = $this->renderHtml($renderable->html, $ext);
			$cached = $this->cache->insert($uid, $ext, new _hx_array(array()), $content, Date::now()->getTime() + $renderable->config->cacheExpirationTime);
		}
		$this->setHeaders($ext, strlen($cached->content->bin));
		return $cached->content->bin;
	}
	public function error($msg, $ext) {
		$ext1 = strtolower($ext); $content = _hx_deref(new template_DownloadError())->execute(_hx_anonymous(array("baseurl" => "http://localhost", "url" => new ufront_web_mvc_view_UrlHelperInst($this->controllerContext->requestContext), "error" => $msg)));
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
	static $__rtti = "<class path=\"controller.DownloadAPIController\" params=\"\">\x0A\x09<extends path=\"ufront.web.mvc.Controller\"/>\x0A\x09<cache><c path=\"model.CacheGateway\"/></cache>\x0A\x09<renderables><c path=\"model.RenderableGateway\"/></renderables>\x0A\x09<topdf><c path=\"model.WKHtmlToPdf\"/></topdf>\x0A\x09<toimage><c path=\"model.WKHtmlToImage\"/></toimage>\x0A\x09<download public=\"1\" set=\"method\" line=\"25\"><f a=\"uid:ext\">\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"String\"/>\x0A</f></download>\x0A\x09<error set=\"method\" line=\"42\"><f a=\"msg:ext\">\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"String\"/>\x0A</f></error>\x0A\x09<renderHtml set=\"method\" line=\"53\"><f a=\"html:ext\">\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"String\"/>\x0A</f></renderHtml>\x0A\x09<setHeaders set=\"method\" line=\"70\"><f a=\"ext:len\">\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"Int\"/>\x0A\x09<e path=\"Void\"/>\x0A</f></setHeaders>\x0A\x09<new public=\"1\" set=\"method\" line=\"16\"><f a=\"cache:renderables:topdf:toimage\">\x0A\x09<c path=\"model.CacheGateway\"/>\x0A\x09<c path=\"model.RenderableGateway\"/>\x0A\x09<c path=\"model.WKHtmlToPdf\"/>\x0A\x09<c path=\"model.WKHtmlToImage\"/>\x0A\x09<e path=\"Void\"/>\x0A</f></new>\x0A</class>";
	function __toString() { return 'controller.DownloadAPIController'; }
}
