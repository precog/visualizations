<?php

class model_ConfigObjects {
	public function __construct(){}
	static function createDefault() {
		return _hx_anonymous(array());
	}
	static function overrideValues($config, $over) {
		return Objects::copyTo($over, $config);
	}
	function __toString() { return 'model.ConfigObjects'; }
}
