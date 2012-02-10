<?php

class model_ConfigRendering {
	public function __construct() {
		if(!php_Boot::$skip_constructor) {
		$this->pdf = new model_ConfigPdf();
		$this->image = new model_ConfigImage();
		$this->wk = new model_ConfigWKHtml();
	}}
	public $cacheExpirationTime;
	public $pdf;
	public $image;
	public $wk;
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
	static function create($options) {
		$config = new model_ConfigRendering();
		$config->cacheExpirationTime = $options->cacheExpires;
		return $config;
	}
	function __toString() { return 'model.ConfigRendering'; }
}
