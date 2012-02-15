<?php

class controller_HomeController extends ufront_web_mvc_Controller {
	public function __construct() { if(!php_Boot::$skip_constructor) {
		parent::__construct();
	}}
	public function index() {
		return new ufront_web_mvc_ContentResult(_hx_deref(new template_Home())->execute(_hx_anonymous(array("baseurl" => App::baseUrl(), "url" => new ufront_web_mvc_view_UrlHelperInst($this->controllerContext->requestContext), "sampleuid" => model_Sample::$uid, "version" => App::$version))), null);
	}
	static $__rtti = "<class path=\"controller.HomeController\" params=\"\">\x0A\x09<extends path=\"ufront.web.mvc.Controller\"/>\x0A\x09<index public=\"1\" set=\"method\" line=\"11\"><f a=\"\"><c path=\"ufront.web.mvc.ContentResult\"/></f></index>\x0A\x09<new public=\"1\" set=\"method\" line=\"7\"><f a=\"\"><e path=\"Void\"/></f></new>\x0A</class>";
	function __toString() { return 'controller.HomeController'; }
}
