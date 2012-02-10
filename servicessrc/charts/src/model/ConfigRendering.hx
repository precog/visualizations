package model;

class ConfigRendering
{
	public static function create(?options : model.ConfigObject) : ConfigRendering
	{
		var config = new ConfigRendering();
		config.cacheExpirationTime = options.cacheExpires;
		config.allowedFormats = options.allowedFormats;
		for(param in Reflect.fields(options.params))
		{
			var value = Reflect.field(options.params, param);
			config.template.addParameter(param, value == true ? null : cast value);
		}
		for(param in Reflect.fields(options.defaults))
		{
			var value = Reflect.field(options.defaults, param);
			config.template.setDefault(param, value);
		}
		return config;
	}

	public var allowedFormats : Array<String>;
	public var cacheExpirationTime : Float;

	public var pdf : ConfigPdf;
	public var image : ConfigImage;
	public var wk : ConfigWKHtml;
	public var template : model.ConfigTemplate;
	function new()
	{
		pdf      = new ConfigPdf();
		image    = new ConfigImage();
		wk       = new ConfigWKHtml();
		template = new ConfigTemplate();
		allowedFormats;
	}
}