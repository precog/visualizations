<?php

class model_CacheGateway {
	public function __construct($coll) {
		if(!php_Boot::$skip_constructor) {
		$this->coll = $coll;
	}}
	public $coll;
	public function key($id, $format, $params) {
		return "" . $id . "." . $format . "?" . Iterators::map($params->iterator(), array(new _hx_lambda(array(&$format, &$id, &$params), "model_CacheGateway_0"), 'execute'))->join("&");
	}
	public function exists($id, $format, $params) {
		$uid = $this->key($id, $format, $params);
		return null !== $this->coll->findOne(_hx_anonymous(array("uid" => $uid)), _hx_anonymous(array()));
	}
	public function insert($id, $format, $params, $content, $expiresOn) {
		$uid = $this->key($id, $format, $params);
		$ob = _hx_anonymous(array("uid" => $uid, "content" => new MongoBinData($content, 2), "expiresOn" => $expiresOn));
		$r = $this->coll->insert($ob, null);
		return $ob;
	}
	public function load($id, $format, $params) {
		$uid = $this->key($id, $format, $params);
		$o = $this->coll->findOne(_hx_anonymous(array("uid" => $uid)), null);
		if(null === $o) {
			return null;
		}
		return $o;
	}
	public function remove($id, $format, $params) {
		$uid = $this->key($id, $format, $params);
		return $this->coll->remove(_hx_anonymous(array("uid" => $uid)), null);
	}
	public function expired() {
		$now = Date::now()->getTime();
		return $this->coll->find(_hx_anonymous(array("expiresOn" => _hx_anonymous(array("\$lt" => $now)))), _hx_anonymous(array("uid" => true)));
	}
	public function removeExpired() {
		$now = Date::now()->getTime();
		return $this->coll->remove(_hx_anonymous(array("expiresOn" => _hx_anonymous(array("\$lt" => $now)))), null);
	}
	public function loadContent($id, $format, $params) {
		$uid = $this->key($id, $format, $params);
		$o = $this->coll->findOne(_hx_anonymous(array("uid" => $uid)), _hx_anonymous(array("content" => true)));
		if(null === $o) {
			return null;
		}
		return $o->content;
	}
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
	function __toString() { return 'model.CacheGateway'; }
}
function model_CacheGateway_0(&$format, &$id, &$params, $d, $_) {
	{
		return rawurlencode(Std::string($d));
	}
}
