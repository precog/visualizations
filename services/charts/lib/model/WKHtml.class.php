<?php

class model_WKHtml {
	public function __construct($cmd) {
		if(!php_Boot::$skip_constructor) {
		$this->cmd = $cmd;
	}}
	public $cmd;
	public $_wkconfig;
	public $wkconfig;
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
			haxe_Log::trace("ERROR: " . $this->err, _hx_anonymous(array("fileName" => "WKHtml.hx", "lineNumber" => 42, "className" => "model.WKHtml", "methodName" => "renderUrl")));
			haxe_Log::trace("CMD " . $this->cmd . " " . $args->join(" "), _hx_anonymous(array("fileName" => "WKHtml.hx", "lineNumber" => 43, "className" => "model.WKHtml", "methodName" => "renderUrl")));
			throw new HException(new thx_error_Error("unable to render the result", null, null, _hx_anonymous(array("fileName" => "WKHtml.hx", "lineNumber" => 44, "className" => "model.WKHtml", "methodName" => "renderUrl"))));
		}
		$result = php_io_File::getContent($out);
		@unlink($out);
		return $result;
	}
	public $err;
	public function execute($args) {
		$process = new php_io_Process($this->cmd, $args);
		$process->close();
		$r = $process->exitCode();
		$this->err = $process->stderr->readAll(null)->toString();
		$out = $process->stdout->readAll(null)->toString();
		return $r === 0;
	}
	public function commandOptions() {
		$args = new _hx_array(array());
		$args->push("--disable-local-file-access");
		$args->push("--javascript-delay");
		$args->push("1000");
		$args->push("--user-style-sheet");
		$args->push("/Users/francoponticelli/Projects/reportgrid/visualizations/servicessrc/charts/www/css/reset.css");
		$cfg = $this->getWKConfig();
		if(null !== $cfg->zoom) {
			$args->push("--zoom");
			$args->push("" . $cfg->zoom);
		}
		return $args;
	}
	public function getFormat() {
		return $this->format;
	}
	public function setFormat($f) {
		if(!Arrays::exists($this->allowedFormats, $f, null)) {
			throw new HException(new thx_error_Error("invalid format {0}, you can use any of: {1}", new _hx_array(array($f, $this->allowedFormats)), null, _hx_anonymous(array("fileName" => "WKHtml.hx", "lineNumber" => 86, "className" => "model.WKHtml", "methodName" => "setFormat"))));
		}
		return $this->format = $f;
	}
	public function getWKConfig() {
		if(null === $this->_wkconfig) {
			$this->_wkconfig = new model_ConfigWKHtml();
		}
		return $this->_wkconfig;
	}
	public function setWKConfig($c) {
		return $this->_wkconfig = $c;
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
