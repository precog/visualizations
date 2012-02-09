<?php

class template_FormUpload extends erazor_macro_Template {
	public function __construct() { if(!php_Boot::$skip_constructor) {
		parent::__construct();
	}}
	public function execute($__context__) {
		$__b__ = new StringBuf();
		{
			{
				$x = "<!DOCTYPE html>\x0A<html>\x0A<head>\x0A  <title>Upload Rendering Template</title>\x0A  <link rel=\"stylesheet\" type=\"text/css\" href=\"";
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
				$x = "\">\x0A</head>\x0A<body>\x0A<h1>Upload Form</h1>\x0A<form method=\"post\" action=\"";
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
				$x = $__context__->url->route(_hx_anonymous(array("controller" => "uploadForm", "action" => "display")));
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
				$x = "\" class=\"formupload\">\x0A  <ul>\x0A    <li>\x0A      <label for=\"html\">HTML</label>\x0A      <br>\x0A      <textarea name=\"html\">";
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
				$x = template_FormUpload_0($this, $__b__, $__context__);
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
				$x = "</textarea>\x0A      ";
				if(is_null($x)) {
					$x = "null";
				} else {
					if(is_bool($x)) {
						$x = (($x) ? "true" : "false");
					}
				}
				$__b__->b .= $x;
			}
			if($__context__->errors->exists("html")) {
				{
					$x = "\x0A\x09    <div class=\"error\">";
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
					$x = $__context__->errors->get("html");
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
					$x = "</div>\x0A      ";
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
				$x = "\x0A    </li>\x0A    <li>\x0A      <label for=\"config\">CONFIG (INI format)</label>\x0A      <br>\x0A      <textarea name=\"config\">";
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
				$x = template_FormUpload_1($this, $__b__, $__context__);
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
				$x = "</textarea>\x0A      ";
				if(is_null($x)) {
					$x = "null";
				} else {
					if(is_bool($x)) {
						$x = (($x) ? "true" : "false");
					}
				}
				$__b__->b .= $x;
			}
			if($__context__->errors->exists("config")) {
				{
					$x = "\x0A\x09    <div class=\"error\">";
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
					$x = $__context__->errors->get("config");
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
					$x = "</div>\x0A      ";
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
				$x = "\x0A    </li>\x0A  </ul>\x0A  <input type=\"submit\" value=\"submit\">\x0A<form>\x0A</body>\x0A</html>";
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
	function __toString() { return 'template.FormUpload'; }
}
function template_FormUpload_0(&$»this, &$__b__, &$__context__) {
	if(null === $__context__->html) {
		return "";
	} else {
		return $__context__->html;
	}
}
function template_FormUpload_1(&$»this, &$__b__, &$__context__) {
	if(null === $__context__->config) {
		return "";
	} else {
		return $__context__->config;
	}
}
