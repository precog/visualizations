<?php

class controller_UploadForm extends ufront_web_mvc_Controller {
	public function __construct() { if(!php_Boot::$skip_constructor) {
		parent::__construct();
	}}
	public function display($html, $config) {
		$ob = _hx_anonymous(array("baseurl" => "http://localhost", "url" => new ufront_web_mvc_view_UrlHelperInst($this->controllerContext->requestContext), "html" => $html, "config" => $config, "errors" => new Hash()));
		if($this->controllerContext->request->getHttpMethod() === "POST") {
			$haserrors = false;
			if(null === $html || "" === ($html = trim($html))) {
				$haserrors = true;
				$ob->errors->set("html", "html cannot be left empty");
			} else {
				if(_hx_index_of(strtolower($html), "reportgrid", null) < 0) {
					$haserrors = true;
					$ob->errors->set("html", "html does not contain any reference to reportgrid");
				}
			}
			if(null !== $config && $config !== "") {
				$config = trim($config);
				try {
					thx_ini_Ini::decode($config);
				}catch(Exception $»e) {
					$_ex_ = ($»e instanceof HException) ? $»e->e : $»e;
					$e = $_ex_;
					{
						$haserrors = true;
						$ob->errors->set("config", "the config file is not well formed: " . $e);
					}
				}
			}
			if(!$haserrors) {
				$controller = ufront_web_mvc_DependencyResolver::$current->getService(_hx_qtype("controller.RenderableAPIController"));
				$controller->controllerContext = $this->controllerContext;
				return $controller->upload($html, $config, "html");
			}
		} else {
			if(null === $html && null === $config) {
				$ob->html = model_Sample::$html;
				$ob->config = model_Sample::$config;
			}
		}
		return new ufront_web_mvc_ContentResult(_hx_deref(new template_FormUpload())->execute($ob), null);
	}
	static $__rtti = "<class path=\"controller.UploadForm\" params=\"\" module=\"controller.UploadFormController\">\x0A\x09<extends path=\"ufront.web.mvc.Controller\"/>\x0A\x09<display public=\"1\" set=\"method\" line=\"9\"><f a=\"?html:?config\">\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"String\"/>\x0A\x09<d/>\x0A</f></display>\x0A\x09<new public=\"1\" set=\"method\" line=\"7\"><f a=\"\"><e path=\"Void\"/></f></new>\x0A</class>";
	function __toString() { return 'controller.UploadForm'; }
}
