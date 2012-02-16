<?php

class template_Home extends erazor_macro_Template {
	public function __construct() { if(!php_Boot::$skip_constructor) {
		parent::__construct();
	}}
	public function execute($__context__) {
		$__b__ = new StringBuf();
		{
			{
				$x = "<!DOCTYPE html>\x0A<html>\x0A<head>\x0A  <title>Rendering Service (v.";
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
				$x = $__context__->version;
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
				$x = ")</title>\x0A  <link rel=\"stylesheet\" type=\"text/css\" href=\"";
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
				$x = "\">\x0A</head>\x0A<body>\x0A<h1>Rendering Service (v.";
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
				$x = $__context__->version;
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
				$x = ")</h1>\x0A<h2>Upload Options</h2>\x0A<h3>HTML/Config</h3>\x0A<ul class=\"bullet\">\x0A  <li>Upload using a form: <a href=\"";
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
				$x = "\" class=\"tag\">";
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
				$x = "</a></li>\x0A  <li>Upload using a form and display result: <a href=\"";
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
				$x = $__context__->url->route(_hx_anonymous(array("controller" => "uploadForm", "action" => "display", "displayFormat" => "png")));
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
				$x = "\" class=\"tag\">";
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
				$x = $__context__->url->route(_hx_anonymous(array("controller" => "uploadForm", "action" => "display", "displayFormat" => "png")));
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
				$x = "</a></li>\x0A  <li>Upload making a POST call to these services <span class=\"params\">(parameters: html (string), ?config (ini or json string)</span>:\x0A    <dl>\x0A      <dt>HTML output:</dt>\x0A      <dd>";
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
				$x = $__context__->url->route(_hx_anonymous(array("controller" => "renderableAPI", "action" => "upload", "outputformat" => "html")));
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
				$x = "</dd>\x0A      <dt>JSON output:</dt>\x0A      <dd>";
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
				$x = $__context__->url->route(_hx_anonymous(array("controller" => "renderableAPI", "action" => "upload", "outputformat" => "json")));
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
				$x = "</dd>\x0A    </dl>\x0A  </li>\x0A  <li>Upload making a GET/POST call to these service <span class=\"params\">(parameters: urlhtml (path to a html resource), ?urlconfig (path to a ini or json resource)</span>:\x0A    <dl>\x0A      <dt>HTML output:</dt>\x0A      <dd>";
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
				$x = $__context__->url->route(_hx_anonymous(array("controller" => "renderableAPI", "action" => "uploadFromUrl", "outputformat" => "html", "urlhtml" => "http://example.com/chart.hml")));
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
				$x = "</dd>\x0A      <dt>JSON output:</dt>\x0A      <dd>";
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
				$x = $__context__->url->route(_hx_anonymous(array("controller" => "renderableAPI", "action" => "uploadFromUrl", "outputformat" => "json", "urlhtml" => "http://example.com/chart.hml")));
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
				$x = "</dd>\x0A    </dl>\x0A  </li>\x0A</ul>\x0A<h3>GIST</h3>\x0A<ul class=\"bullet\">\x0A  <li>Upload GIST using a form: <a href=\"";
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
				$x = $__context__->url->route(_hx_anonymous(array("controller" => "uploadForm", "action" => "gist")));
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
				$x = "\" class=\"tag\">";
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
				$x = $__context__->url->route(_hx_anonymous(array("controller" => "uploadForm", "action" => "gist")));
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
				$x = "</a></li>\x0A  <li>Upload from GIST using these services:\x0A    <dl>\x0A      <dt>HTML output:</dt>\x0A";
				if(is_null($x)) {
					$x = "null";
				} else {
					if(is_bool($x)) {
						$x = (($x) ? "true" : "false");
					}
				}
				$__b__->b .= $x;
			}
			$path = $__context__->baseurl . $__context__->url->route(_hx_anonymous(array("controller" => "gistUpload", "action" => "importGist", "gistid" => "1732325", "outputformat" => "html")));
			{
				$x = "\x0A      <dd><a href=\"";
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
				$x = $path;
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
				$x = "\">";
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
				$x = $path;
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
				$x = "</a></dd>\x0A      <dt>JSON output:</dt>\x0A";
				if(is_null($x)) {
					$x = "null";
				} else {
					if(is_bool($x)) {
						$x = (($x) ? "true" : "false");
					}
				}
				$__b__->b .= $x;
			}
			$path1 = $__context__->baseurl . $__context__->url->route(_hx_anonymous(array("controller" => "gistUpload", "action" => "importGist", "gistid" => "1732325", "outputformat" => "json")));
			{
				$x = "\x0A      <dd><a href=\"";
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
				$x = $path1;
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
				$x = "\">";
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
				$x = $path1;
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
				$x = "</a></dd>\x0A    </dl>\x0A  </li>\x0A</ul>\x0A\x0A\x0A<h2>Download</h2>\x0A<dl class=\"bullet\">\x0A";
				if(is_null($x)) {
					$x = "null";
				} else {
					if(is_bool($x)) {
						$x = (($x) ? "true" : "false");
					}
				}
				$__b__->b .= $x;
			}
			$uid = $__context__->sampleuid;
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
			{
				$_g = 0; $_g1 = new _hx_array(array("html", "json"));
				while($_g < $_g1->length) {
					$ext = $_g1[$_g];
					++$_g;
					{
						$x = "\x0A  ";
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
					$p = $__context__->baseurl . $__context__->url->route(_hx_anonymous(array("controller" => "renderableAPI", "action" => "display", "uid" => ((null === $uid) ? "uid" : $uid), "outputformat" => $ext)));
					{
						$x = "\x0A  <dt>";
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
						$x = strtoupper($ext);
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
						$x = " Information:</dt>\x0A  ";
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
					if(null === $uid) {
						{
							$x = "\x0A    <dd>";
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
							$x = $p;
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
							$x = "</dd>\x0A  ";
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
					} else {
						{
							$x = "\x0A    <dd><a href=\"";
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
							$x = $p;
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
							$x = "\">";
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
							$x = $p;
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
							$x = "</a></dd>\x0A  ";
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
						unset($x);
					}
					null;
					unset($p,$ext);
				}
			}
			{
				$x = "\x0A</dl>\x0A\x0A";
				if(is_null($x)) {
					$x = "null";
				} else {
					if(is_bool($x)) {
						$x = (($x) ? "true" : "false");
					}
				}
				$__b__->b .= $x;
			}
			if($__context__->authorized) {
				{
					$x = "\x0A<h2>Status</h2>\x0A<ul class=\"bullet\">\x0A  <li><a href=\"";
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
					$x = $__context__->url->route(_hx_anonymous(array("controller" => "setup", "action" => "mongodb", "auth" => $__context__->auth)));
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
					$x = "\">DB</a></li>\x0A  <li><a href=\"";
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
					$x = $__context__->url->route(_hx_anonymous(array("controller" => "setup", "action" => "topRenderables", "auth" => $__context__->auth)));
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
					$x = "\">Renderables</a></li>\x0A</ul>\x0A\x0A<h2>Maintenance</h2>\x0A<ul class=\"bullet\">\x0A  <li><a href=\"";
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
					$x = $__context__->url->route(_hx_anonymous(array("controller" => "setup", "action" => "purgeCache", "auth" => $__context__->auth)));
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
					$x = "\">Purge Cache</a></li>\x0A  <li><a href=\"";
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
					$x = $__context__->url->route(_hx_anonymous(array("controller" => "setup", "action" => "clearCache", "auth" => $__context__->auth)));
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
					$x = "\">Clear Cache</a></li>\x0A  <li><a href=\"";
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
					$x = $__context__->url->route(_hx_anonymous(array("controller" => "setup", "action" => "purgeRenderables", "auth" => $__context__->auth)));
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
					$x = "\">Purge Unused Renderables</a></li>\x0A  <li><a href=\"";
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
					$x = $__context__->url->route(_hx_anonymous(array("controller" => "setup", "action" => "purgeExpiredRenderables", "auth" => $__context__->auth)));
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
					$x = "\">Purge Expired Renderables</a></li>\x0A\x0A  <li><a href=\"";
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
					$x = $__context__->url->route(_hx_anonymous(array("controller" => "setup", "action" => "displayLogs", "auth" => $__context__->auth, "format" => "json")));
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
					$x = "\">Logs (json)</a></li>\x0A  <li><a href=\"";
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
					$x = $__context__->url->route(_hx_anonymous(array("controller" => "setup", "action" => "displayLogs", "auth" => $__context__->auth, "format" => "html")));
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
					$x = "\">Logs (html)</a></li>\x0A  <li><a href=\"";
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
					$x = $__context__->url->route(_hx_anonymous(array("controller" => "setup", "action" => "clearLogs", "auth" => $__context__->auth)));
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
					$x = "\">Clear Logs</a></li>\x0A</ul>\x0A\x0A\x0A<h2>Setup</h2>\x0A<ul class=\"bullet\">\x0A  <li><a href=\"";
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
					$x = $__context__->url->route(_hx_anonymous(array("controller" => "setup", "action" => "createCollections", "auth" => $__context__->auth)));
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
					$x = "\">Create Collections</a></li>\x0A  <li><a href=\"";
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
					$x = $__context__->url->route(_hx_anonymous(array("controller" => "setup", "action" => "dropCollections", "auth" => $__context__->auth)));
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
					$x = "\">Drop Collections</a></li>\x0A  <li><a href=\"";
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
					$x = $__context__->url->route(_hx_anonymous(array("controller" => "setup", "action" => "dropCache", "auth" => $__context__->auth)));
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
					$x = "\">Drop Cache</a></li>\x0A  <li><a href=\"";
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
					$x = $__context__->url->route(_hx_anonymous(array("controller" => "setup", "action" => "dropRenderables", "auth" => $__context__->auth)));
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
					$x = "\">Drop Renderables</a></li>\x0A  <li><a href=\"";
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
					$x = $__context__->url->route(_hx_anonymous(array("controller" => "setup", "action" => "info", "auth" => $__context__->auth)));
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
					$x = "\">PHP Info</a></li>\x0A</ul>\x0A";
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
				$x = "\x0A\x0A\x0A</body>\x0A</html>";
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
	function __toString() { return 'template.Home'; }
}
