package model;

class ConfigRendering
{
	public static function create(?options : model.ConfigObject) : ConfigRendering
	{
		var config = new ConfigRendering();


		return config;
	}

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