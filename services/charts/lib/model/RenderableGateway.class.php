<?php

class model_RenderableGateway {
	public function __construct($coll) {
		if(!php_Boot::$skip_constructor) {
		$this->coll = $coll;
	}}
	public $coll;
	public function exists($uid) {
		return null !== $this->coll->findOne(_hx_anonymous(array("uid" => $uid)), _hx_anonymous(array()));
	}
	public function insert($r) {
		$ob = _hx_anonymous(array("uid" => $r->getUid(), "config" => model_RenderableGateway::serialize($r->config), "createdOn" => $r->createdOn->getTime(), "html" => $r->html, "lastUsage" => $r->lastUsage->getTime(), "usages" => $r->usages));
		$this->coll->insert($ob, null);
	}
	public function load($uid) {
		$o = $this->coll->findOne(_hx_anonymous(array("uid" => $uid)), null);
		if(null === $o) {
			return null;
		}
		return new model_Renderable($o->html, model_RenderableGateway::unserialize($o->config), Date::fromTime($o->createdOn), Date::fromTime($o->lastUsage), $o->usages);
	}
	public function topByUsage($limit) {
		return $this->coll->find(_hx_anonymous(array()), null)->limit($limit)->toArray();
	}
	public function huse($uid) {
		$data = $this->coll->findOne(_hx_anonymous(array("uid" => $uid)), null);
		$data->lastUsage = Date::now()->getTime();
		$data->usages++;
		$this->coll->update(_hx_anonymous(array("uid" => $uid)), _hx_anonymous(array("\$set" => $data)), null);
		return $data;
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
	static function serialize($o) {
		return php_Lib::serialize($o);
	}
	static function unserialize($s) {
		return php_Lib::unserialize($s);
	}
	function __toString() { return 'model.RenderableGateway'; }
}
