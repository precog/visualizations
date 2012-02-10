package model;

class ConfigRendering
{
	public static function create(?options : model.ConfigObject) : ConfigRendering
	{
		var config = new ConfigRendering();
		config.cacheExpirationTime = options.cacheExpires;

		return config;
	}

	public var cacheExpirationTime : Float;
	public var pdf : ConfigPdf;
	public var image : ConfigImage;
	public var wk : ConfigWKHtml;
	function new()
	{
		pdf   = new ConfigPdf();
		image = new ConfigImage();
		wk    = new ConfigWKHtml();
	}
}