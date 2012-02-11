<?php

class model_WKHtmlToImage extends model_WKHtml {
	public function __construct($binpath) {
		if(!php_Boot::$skip_constructor) {
		$this->allowedFormats = new _hx_array(array("png", "jpg", "svg", "bmp", "tif"));
		parent::__construct($binpath);
	}}
	public $_imageConfig;
	public $imageConfig;
	public function getImageConfig() {
		if(null === $this->_imageConfig) {
			$this->_imageConfig = new model_ConfigImage();
		}
		return $this->_imageConfig;
	}
	public function setImageConfig($c) {
		return $this->_imageConfig = $c;
	}
	public function commandOptions() {
		$args = new _hx_array(array()); $cfg = $this->getImageConfig();
		if(null !== $cfg->x) {
			$args->push("--crop-x");
			$args->push("" . $cfg->x);
		}
		if(null !== $cfg->y) {
			$args->push("--crop-y");
			$args->push("" . $cfg->y);
		}
		if(null !== $cfg->width) {
			$args->push("--crop-w");
			$args->push("" . $cfg->width);
		}
		if(null !== $cfg->height) {
			$args->push("--crop-h");
			$args->push("" . $cfg->height);
		}
		if(null !== $cfg->screenWidth) {
			$args->push("--width");
			$args->push("" . $cfg->screenWidth);
		}
		if(null !== $cfg->screenHeight) {
			$args->push("--height");
			$args->push("" . $cfg->screenHeight);
		}
		if(null !== $cfg->quality) {
			$args->push("--quality");
			$args->push("" . $cfg->quality);
		}
		if(true === $cfg->disableSmartWidth) {
			$args->push("--disable-smart-width");
		}
		if(true === $cfg->transparent) {
			$args->push("--transparent");
		}
		return parent::commandOptions()->concat($args);
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
	function __toString() { return 'model.WKHtmlToImage'; }
}
