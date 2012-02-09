<?php

class model_WKHtml {
	public function __construct($cmd) {
		if(!php_Boot::$skip_constructor) {
		$this->cmd = $cmd;
	}}
	public $cmd;
	public $format;
	public $allowedFormats;
	public function render($content) {
		$t = model_WKHtml::tmp("html");
		php_io_File::putContent($t, $content);
		$r = $this->renderUrl($t);
		return $r;
	}
	public function renderUrl($path) {
		$args = $this->commandOptions(); $out = model_WKHtml::tmp($this->getFormat());
		$args->push($path);
		$args->push($out);
		if(!$this->execute($args)) {
			throw new HException(new thx_error_Error("unable to render the result", null, null, _hx_anonymous(array("fileName" => "WKHtml.hx", "lineNumber" => 41, "className" => "model.WKHtml", "methodName" => "renderUrl"))));
		}
		$result = php_io_File::getContent($out);
		@unlink($out);
		return $result;
	}
	public function execute($args) {
		$r = php_Sys::command($this->cmd, $args);
		return $r === 0;
	}
	public function commandOptions() {
		return new _hx_array(array());
	}
	public function getFormat() {
		return $this->format;
	}
	public function setFormat($f) {
		if(!Arrays::exists($this->allowedFormats, $f, null)) {
			throw new HException(new thx_error_Error("invalid format {0}, you can use any of: {1}", new _hx_array(array($f, $this->allowedFormats)), null, _hx_anonymous(array("fileName" => "WKHtml.hx", "lineNumber" => 60, "className" => "model.WKHtml", "methodName" => "setFormat"))));
		}
		return $this->format = $f;
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
	static function tmp($ext) {
		$uid = null;
		do {
			$uid = model_WKHtml::tmpuid($ext);
		} while(file_exists($uid));
		return $uid;
	}
	static function tmpuid($ext) {
		$id = uniqid("WK_");
		return "/tmp/" . $id . "." . $ext;
	}
	function __toString() { return 'model.WKHtml'; }
}
