<?php

class model_Renderable {
	public function __construct($html, $config, $createdOn, $lastUsage, $usages) {
		if(!php_Boot::$skip_constructor) {
		$this->html = $html;
		$this->config = $config;
		$this->createdOn = ((null === $createdOn) ? Date::now() : $createdOn);
		$this->lastUsage = ((null === $lastUsage) ? Date::now() : $lastUsage);
		$this->usages = ((null === $usages) ? 0 : $usages);
	}}
	public $html;
	public $config;
	public $createdOn;
	public $lastUsage;
	public $usages;
	public $uid;
	public function getUid() {
		if(null === $this->uid) {
			$s = $this->html . "::" . haxe_Serializer::run($this->config);
			$s = "][4p5.,vsd" . _hx_deref(new EReg("\\s+", "mg"))->replace($s, "");
			$this->uid = model_Renderable::hash($s);
		}
		return $this->uid;
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
	static $SEED = "][4p5.,vsd";
	static function hash($s) {
		$s = md5($s);
		$s = base_convert($s, 16, 36);
		return _hx_substr($s, 0, 12);
	}
	function __toString() { return 'model.Renderable'; }
}
