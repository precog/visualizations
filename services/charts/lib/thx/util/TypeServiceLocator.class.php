<?php

class thx_util_TypeServiceLocator extends thx_util_TypeFactory {
	public function __construct() { if(!php_Boot::$skip_constructor) {
		parent::__construct();
	}}
	function __toString() { return 'thx.util.TypeServiceLocator'; }
}
