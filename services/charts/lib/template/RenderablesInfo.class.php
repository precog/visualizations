<?php

class template_RenderablesInfo extends erazor_macro_Template {
	public function __construct() { if(!php_Boot::$skip_constructor) {
		parent::__construct();
	}}
	public function execute($__context__) {
		$__b__ = new StringBuf();
		{
			{
				$x = "<!DOCTYPE html>\x0A<html>\x0A<head>\x0A  <title>Download Error</title>\x0A  <link rel=\"stylesheet\" type=\"text/css\" href=\"";
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
				$x = "\">\x0A</head>\x0A<body>\x0A<h1>Top #";
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
				$x = $__context__->top;
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
				$x = " used renderables</h1>\x0A";
				if(is_null($x)) {
					$x = "null";
				} else {
					if(is_bool($x)) {
						$x = (($x) ? "true" : "false");
					}
				}
				$__b__->b .= $x;
			}
			if(null === $__context__->renderables || $__context__->renderables->length === 0) {
				{
					$x = "\x0A\x09<div class=\"warning\">The list is empty</div>\x0A";
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
					$x = "\x0A\x09<dl>\x0A\x09";
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
					$_g = 0; $_g1 = $__context__->renderables;
					while($_g < $_g1->length) {
						$item = $_g1[$_g];
						++$_g;
						{
							$x = "\x0A\x09  <dt>";
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
							$x = $item->uid;
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
							$x = "</dt>\x0A\x09  <dd>";
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
							$x = $item->usages;
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
							$x = ", created on: ";
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
							$x = Date::fromTime($item->createdOn);
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
							$x = " ";
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
						if($item->createdOn !== $item->lastUsage) {
							{
								$x = ", last usage on: ";
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
								$x = Date::fromTime($item->lastUsage);
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
							$x = "</dd>\x0A\x09";
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
						unset($item);
					}
				}
				{
					$x = "\x0A\x09</dl>\x0A";
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
				$x = "\x0A</body>\x0A</html>";
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
	function __toString() { return 'template.RenderablesInfo'; }
}
