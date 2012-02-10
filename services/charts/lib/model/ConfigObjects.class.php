<?php

class model_ConfigObjects {
	public function __construct(){}
	static $FORMATS;
	static function createDefault() {
		return _hx_anonymous(array("cacheExpires" => 43200000., "allowedFormats" => new _hx_array(array("pdf", "png", "jpg")), "params" => _hx_anonymous(array()), "defaults" => _hx_anonymous(array())));
	}
	static function overrideValues($config, $over) {
		if(null !== _hx_field($over, "cache")) {
			$e = $over->cache;
			if(Std::is($e, _hx_qtype("Float"))) {
				if($e <= 0) {
					throw new HException(new thx_error_Error("invalid negative value for cacheExpires: {0}", new _hx_array(array($e)), null, _hx_anonymous(array("fileName" => "ConfigObject.hx", "lineNumber" => 36, "className" => "model.ConfigObjects", "methodName" => "overrideValues"))));
				}
				$config->cacheExpires = $e;
			} else {
				if(Std::is($e, _hx_qtype("String"))) {
					$v = thx_date_Milli::parse($e);
					if($v <= 0) {
						throw new HException(new thx_error_Error("invalid expression for cacheExpires: {0}", new _hx_array(array($e)), null, _hx_anonymous(array("fileName" => "ConfigObject.hx", "lineNumber" => 41, "className" => "model.ConfigObjects", "methodName" => "overrideValues"))));
					}
					$config->cacheExpires = $v;
				} else {
					throw new HException(new thx_error_Error("invalid value type for cacheExpires: {0}", new _hx_array(array($e)), null, _hx_anonymous(array("fileName" => "ConfigObject.hx", "lineNumber" => 44, "className" => "model.ConfigObjects", "methodName" => "overrideValues"))));
				}
			}
		}
		if(null !== _hx_field($over, "allowedFormats")) {
			$v = $over->allowedFormats; $values = new thx_collection_Set();
			if(Std::is($v, _hx_qtype("String"))) {
				$values->add($v);
			} else {
				if(Std::is($v, _hx_qtype("Array"))) {
					$arr = $v;
					{
						$_g = 0;
						while($_g < $arr->length) {
							$item = $arr[$_g];
							++$_g;
							$values->add($item);
							unset($item);
						}
					}
				}
			}
			$config->allowedFormats = new _hx_array(array());
			if(null == $values) throw new HException('null iterable');
			$»it = $values->iterator();
			while($»it->hasNext()) {
				$item = $»it->next();
				if(!Std::is($item, _hx_qtype("String"))) {
					throw new HException(new thx_error_Error("invalid format value: '{0}'", new _hx_array(array($item)), null, _hx_anonymous(array("fileName" => "ConfigObject.hx", "lineNumber" => 63, "className" => "model.ConfigObjects", "methodName" => "overrideValues"))));
				}
				$s = $item;
				$s = strtolower($s);
				if(!Arrays::exists(model_ConfigObjects::$FORMATS, $s, null)) {
					throw new HException(new thx_error_Error("the format '{0}' is not supported", new _hx_array(array($item)), null, _hx_anonymous(array("fileName" => "ConfigObject.hx", "lineNumber" => 67, "className" => "model.ConfigObjects", "methodName" => "overrideValues"))));
				}
				$config->allowedFormats->push($s);
				unset($s);
			}
		}
		if(null !== _hx_field($over, "params")) {
			$_g = 0; $_g1 = Reflect::fields($over->params);
			while($_g < $_g1->length) {
				$param = $_g1[$_g];
				++$_g;
				$value = Reflect::field($over->params, $param);
				if(Std::is($value, _hx_qtype("Array"))) {
					$config->params->{$param} = $value;
				} else {
					$config->params->{$param} = true;
				}
				unset($value,$param);
			}
		}
		if(null !== _hx_field($over, "defaults")) {
			$_g = 0; $_g1 = Reflect::fields($over->defaults);
			while($_g < $_g1->length) {
				$param = $_g1[$_g];
				++$_g;
				$value = Reflect::field($over->defaults, $param);
				$config->defaults->{$param} = $value;
				unset($value,$param);
			}
		}
		return $config;
	}
	function __toString() { return 'model.ConfigObjects'; }
}
model_ConfigObjects::$FORMATS = new _hx_array(array("pdf", "png", "jpg", "html"));
