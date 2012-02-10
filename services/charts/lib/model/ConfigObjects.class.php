<?php

class model_ConfigObjects {
	public function __construct(){}
	static function createDefault() {
		return _hx_anonymous(array("cacheExpires" => 43200000.));
	}
	static function overrideValues($config, $over) {
		if(null !== _hx_field($over, "cacheExpires")) {
			$e = $over->cacheExpires;
			if(Std::is($e, _hx_qtype("Float"))) {
				if($e <= 0) {
					throw new HException(new thx_error_Error("invalid negative value for cacheExpires: {0}", new _hx_array(array($e)), null, _hx_anonymous(array("fileName" => "ConfigObject.hx", "lineNumber" => 27, "className" => "model.ConfigObjects", "methodName" => "overrideValues"))));
				}
				$config->cacheExpires = $e;
			} else {
				if(Std::is($e, _hx_qtype("String"))) {
					$v = thx_date_MilliParser::parse($e);
					if($v <= 0) {
						throw new HException(new thx_error_Error("invalid expression for cacheExpires: {0}", new _hx_array(array($e)), null, _hx_anonymous(array("fileName" => "ConfigObject.hx", "lineNumber" => 32, "className" => "model.ConfigObjects", "methodName" => "overrideValues"))));
					}
					$config->cacheExpires = $v;
				} else {
					throw new HException(new thx_error_Error("invalid value type for cacheExpires: {0}", new _hx_array(array($e)), null, _hx_anonymous(array("fileName" => "ConfigObject.hx", "lineNumber" => 35, "className" => "model.ConfigObjects", "methodName" => "overrideValues"))));
				}
			}
		}
		return $config;
	}
	function __toString() { return 'model.ConfigObjects'; }
}
