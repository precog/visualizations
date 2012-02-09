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
				$controller = ufront_web_mvc_DependencyResolver::$current->getService(_hx_qtype("controller.UploadAPIController"));
				$controller->controllerContext = $this->controllerContext;
				return $controller->upload($html, $config, "html");
			}
		} else {
			if(null === $html && null === $config) {
				$ob->html = "<?DOCTYPE html>\x0A<html>\x0A<head>\x0A<title>Viz</title>\x0A<script src=\"http://api.reportgrid.com/js/reportgrid-core.js?tokenId=\$tokenId\"></script>\x0A<script src=\"http://api.reportgrid.com/js/reportgrid-charts.js\"></script>\x0A<script src=\"http://api.reportgrid.com/js/reportgrid-query.js\"></script>\x0A<link type=\"text/css\" href=\"http://api.reportgrid.com/css/rg-charts.css\" rel=\"stylesheet\">\x0A</head>\x0A<body>\x0A<div id=\"chart\"></div>\x0A<script>\x0AReportGrid.pieChart(\"#chart\", {\x0A  data : [{browser:\"chrome\",count:100},{browser:\"firefox\",count:80}],\x0A  axes : [\"browser\",\"count\"],\x0A  options : {\x0A  \x09effect : \"noeffect\"\x0A  }\x0A});\x0A</script>\x0A</body>\x0A</html>";
				$ob->config = "cache=2 days\x0Aparameters=tokenId\x0A[defaults]\x0AtokenId=1234567890";
			}
		}
		return new ufront_web_mvc_ContentResult(_hx_deref(new template_FormUpload())->execute($ob), null);
	}
	static $__rtti = "<class path=\"controller.UploadForm\" params=\"\" module=\"controller.UploadFormController\">\x0A\x09<extends path=\"ufront.web.mvc.Controller\"/>\x0A\x09<display public=\"1\" set=\"method\" line=\"9\"><f a=\"?html:?config\">\x0A\x09<c path=\"String\"/>\x0A\x09<c path=\"String\"/>\x0A\x09<d/>\x0A</f></display>\x0A\x09<new public=\"1\" set=\"method\" line=\"7\"><f a=\"\"><e path=\"Void\"/></f></new>\x0A</class>";
	function __toString() { return 'controller.UploadForm'; }
}
