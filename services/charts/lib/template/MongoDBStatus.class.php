<?php

class template_MongoDBStatus extends erazor_macro_Template {
	public function __construct() { if(!php_Boot::$skip_constructor) {
		parent::__construct();
	}}
	public function execute($__context__) {
		$__b__ = new StringBuf();
		{
			{
				$x = "<!DOCTYPE html>\x0A<html>\x0A<head>\x0A  <title>MongoDB Status and Setup</title>\x0A  <link rel=\"stylesheet\" type=\"text/css\" href=\"";
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
				$x = "\">\x0A</head>\x0A<body>\x0A<h1>MongoDB Status and Setup</h1>\x0A<div>\x0A  <h2>DB</h2>\x0A  <dl>\x0A    <dt>name:</dt>\x0A    <dd>";
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
				$x = $__context__->db->name;
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
				$x = "</dd>\x0A    <dt>collections:</dt>\x0A    <dd>";
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
				$x = $__context__->db->collections->join(", ");
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
				$x = "</dd>\x0A  </dl>\x0A  <h2>Renderables</h2>\x0A  <dl>\x0A    <dt>collection name:</dt>\x0A    <dd>";
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
				$x = $__context__->renderables->name;
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
				$x = "</dd>\x0A    <dt>exists:</dt>\x0A    <dd>";
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
				$x = $__context__->renderables->exists;
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
				$x = "</dd>\x0A    <dt>renderables:</dt>\x0A    <dd>";
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
				$x = $__context__->renderables->count;
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
				$x = "</dd>\x0A  </dl>\x0A  <h2>Cache</h2>\x0A  <dl>\x0A    <dt>collection name:</dt>\x0A    <dd>";
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
				$x = $__context__->cache->name;
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
				$x = "</dd>\x0A    <dt>exists:</dt>\x0A    <dd>";
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
				$x = $__context__->cache->exists;
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
				$x = "</dd>\x0A    <dt>cached values:</dt>\x0A    <dd>";
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
				$x = $__context__->cache->count;
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
				$x = "</dd>\x0A  </dl>\x0A</div>\x0A</body>\x0A</html>";
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
	function __toString() { return 'template.MongoDBStatus'; }
}
