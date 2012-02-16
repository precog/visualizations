<?php

class template_Logs extends erazor_macro_Template {
	public function __construct() { if(!php_Boot::$skip_constructor) {
		parent::__construct();
	}}
	public function execute($__context__) {
		$__b__ = new StringBuf();
		{
			{
				$x = "<!DOCTYPE html>\x0A<html>\x0A<head>\x0A  <title>Logs</title>\x0A  <link rel=\"stylesheet\" type=\"text/css\" href=\"";
				if(is_null($x)) {
					$x = "null";
				} else {
					if(is_bool($x)) {
						$x = (($x) ? "true" : "false");
					}
				}
				$__b__->b .= $x;
			}
			{
				$x = $__context__->baseurl;
				if(is_null($x)) {
					$x = "null";
				} else {
					if(is_bool($x)) {
						$x = (($x) ? "true" : "false");
					}
				}
				$__b__->b .= $x;
			}
			{
				$x = $__context__->url->base("css/style.css");
				if(is_null($x)) {
					$x = "null";
				} else {
					if(is_bool($x)) {
						$x = (($x) ? "true" : "false");
					}
				}
				$__b__->b .= $x;
			}
			{
				$x = "\">\x0A</head>\x0A<body>\x0A<h1>Logs</h1>\x0A<ol class=\"logs\">\x0A";
				if(is_null($x)) {
					$x = "null";
				} else {
					if(is_bool($x)) {
						$x = (($x) ? "true" : "false");
					}
				}
				$__b__->b .= $x;
			}
			if($__context__->data->length === 0) {
				{
					$x = "\x0A\x09<div class=\"message\">no logs are available</div>\x0A";
					if(is_null($x)) {
						$x = "null";
					} else {
						if(is_bool($x)) {
							$x = (($x) ? "true" : "false");
						}
					}
					$__b__->b .= $x;
				}
				null;
			} else {
				{
					$x = "\x0A\x09";
					if(is_null($x)) {
						$x = "null";
					} else {
						if(is_bool($x)) {
							$x = (($x) ? "true" : "false");
						}
					}
					$__b__->b .= $x;
				}
				{
					$_g = 0; $_g1 = $__context__->data;
					while($_g < $_g1->length) {
						$log = $_g1[$_g];
						++$_g;
						{
							$x = "\x0A\x09  <li>\x0A\x09    <div class=\"loc\">";
							if(is_null($x)) {
								$x = "null";
							} else {
								if(is_bool($x)) {
									$x = (($x) ? "true" : "false");
								}
							}
							$__b__->b .= $x;
							unset($x);
						}
						{
							$x = Date::fromTime($log->time)->toString();
							if(is_null($x)) {
								$x = "null";
							} else {
								if(is_bool($x)) {
									$x = (($x) ? "true" : "false");
								}
							}
							$__b__->b .= $x;
							unset($x);
						}
						{
							$x = " on ";
							if(is_null($x)) {
								$x = "null";
							} else {
								if(is_bool($x)) {
									$x = (($x) ? "true" : "false");
								}
							}
							$__b__->b .= $x;
							unset($x);
						}
						{
							$x = $log->server;
							if(is_null($x)) {
								$x = "null";
							} else {
								if(is_bool($x)) {
									$x = (($x) ? "true" : "false");
								}
							}
							$__b__->b .= $x;
							unset($x);
						}
						{
							$x = "</div>\x0A\x09    <div class=\"info\">";
							if(is_null($x)) {
								$x = "null";
							} else {
								if(is_bool($x)) {
									$x = (($x) ? "true" : "false");
								}
							}
							$__b__->b .= $x;
							unset($x);
						}
						{
							$x = template_Logs_0($this, $__b__, $__context__, $_g, $_g1, $log);
							if(is_null($x)) {
								$x = "null";
							} else {
								if(is_bool($x)) {
									$x = (($x) ? "true" : "false");
								}
							}
							$__b__->b .= $x;
							unset($x);
						}
						{
							$x = $log->pos->className;
							if(is_null($x)) {
								$x = "null";
							} else {
								if(is_bool($x)) {
									$x = (($x) ? "true" : "false");
								}
							}
							$__b__->b .= $x;
							unset($x);
						}
						{
							$x = ".";
							if(is_null($x)) {
								$x = "null";
							} else {
								if(is_bool($x)) {
									$x = (($x) ? "true" : "false");
								}
							}
							$__b__->b .= $x;
							unset($x);
						}
						{
							$x = $log->pos->methodName;
							if(is_null($x)) {
								$x = "null";
							} else {
								if(is_bool($x)) {
									$x = (($x) ? "true" : "false");
								}
							}
							$__b__->b .= $x;
							unset($x);
						}
						{
							$x = "(";
							if(is_null($x)) {
								$x = "null";
							} else {
								if(is_bool($x)) {
									$x = (($x) ? "true" : "false");
								}
							}
							$__b__->b .= $x;
							unset($x);
						}
						{
							$x = $log->pos->lineNumber;
							if(is_null($x)) {
								$x = "null";
							} else {
								if(is_bool($x)) {
									$x = (($x) ? "true" : "false");
								}
							}
							$__b__->b .= $x;
							unset($x);
						}
						{
							$x = ")</div>\x0A\x09    <div class=\"msg\">";
							if(is_null($x)) {
								$x = "null";
							} else {
								if(is_bool($x)) {
									$x = (($x) ? "true" : "false");
								}
							}
							$__b__->b .= $x;
							unset($x);
						}
						{
							$x = StringTools::htmlEscape($log->msg);
							if(is_null($x)) {
								$x = "null";
							} else {
								if(is_bool($x)) {
									$x = (($x) ? "true" : "false");
								}
							}
							$__b__->b .= $x;
							unset($x);
						}
						{
							$x = "</div>\x0A\x09  </li>\x0A\x09";
							if(is_null($x)) {
								$x = "null";
							} else {
								if(is_bool($x)) {
									$x = (($x) ? "true" : "false");
								}
							}
							$__b__->b .= $x;
							unset($x);
						}
						null;
						unset($log);
					}
				}
				{
					$x = "\x0A";
					if(is_null($x)) {
						$x = "null";
					} else {
						if(is_bool($x)) {
							$x = (($x) ? "true" : "false");
						}
					}
					$__b__->b .= $x;
				}
				null;
			}
			{
				$x = "\x0A</ol>\x0A</body>\x0A</html>";
				if(is_null($x)) {
					$x = "null";
				} else {
					if(is_bool($x)) {
						$x = (($x) ? "true" : "false");
					}
				}
				$__b__->b .= $x;
			}
		}
		return $__b__->b;
	}
	function __toString() { return 'template.Logs'; }
}
function template_Logs_0(&$»this, &$__b__, &$__context__, &$_g, &$_g1, &$log) {
	if(_hx_explode(".", $log->pos->fileName)->shift() === _hx_explode(".", $log->pos->className)->pop()) {
		return "";
	} else {
		return $log->pos->fileName . ": ";
	}
}
