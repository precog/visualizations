<?php

class model_ConfigRendering {
	public function __construct() {
		if(!php_Boot::$skip_constructor) {
		$this->pdf = new model_ConfigPdf();
		$this->image = new model_ConfigImage();
		$this->wk = new model_ConfigWKHtml();
		$this->template = new model_ConfigTemplate();
		$this->allowedFormats;
	}}
	public $allowedFormats;
	public $cacheExpirationTime;
	public $pdf;
	public $image;
	public $wk;
	public $template;
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
	static function create($options) {
		$config = new model_ConfigRendering();
		$config->cacheExpirationTime = $options->cacheExpires;
		$config->allowedFormats = $options->allowedFormats;
		{
			$_g = 0; $_g1 = Reflect::fields($options->params);
			while($_g < $_g1->length) {
				$param = $_g1[$_g];
				++$_g;
				$value = Reflect::field($options->params, $param);
				$config->template->addParameter($param, (($value === true) ? null : $value));
				unset($value,$param);
			}
		}
		{
			$_g = 0; $_g1 = Reflect::fields($options->defaults);
			while($_g < $_g1->length) {
				$param = $_g1[$_g];
				++$_g;
				$value = Reflect::field($options->defaults, $param);
				$config->template->setDefault($param, $value);
				unset($value,$param);
			}
		}
		return $config;
	}
	function __toString() { return 'model.ConfigRendering'; }
}
