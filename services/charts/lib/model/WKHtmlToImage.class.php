<?php

class model_WKHtmlToImage extends model_WKHtml {
	public function __construct($binpath) { if(!php_Boot::$skip_constructor) {
		$this->allowedFormats = new _hx_array(array("png", "jpg"));
		parent::__construct($binpath);
	}}
	public function commandOptions() {
		return new _hx_array(array());
	}
	function __toString() { return 'model.WKHtmlToImage'; }
}
