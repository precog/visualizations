<?php

class model_ConfigImage {
	public function __construct() {
		if(!php_Boot::$skip_constructor) {
		$this->disableSmartWidth = false;
		$this->transparent = false;
	}}
	public $x;
	public $y;
	public $width;
	public $height;
	public $screenWidth;
	public $screenHeight;
	public $quality;
	public $disableSmartWidth;
	public $transparent;
	public function toString() {
		$pairs = new _hx_array(array());
		{
			$_g = 0; $_g1 = Reflect::fields($this);
			while($_g < $_g1->length) {
				$field = $_g1[$_g];
				++$_g;
				$pairs->push($field . ":" . Reflect::field($this, $field));
				unset($field);
			}
		}
		return "ConfigImage " . $pairs->join(", ");
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
	function __toString() { return $this->toString(); }
}
