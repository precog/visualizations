package model;

class WKHtmlToImage extends WKHtml
{
	var _imageConfig : ConfigImage;
	public var imageConfig(getImageConfig, setImageConfig) : ConfigImage;
	public function new(binpath : String)
	{
		allowedFormats = ['png', 'jpg', 'svg', 'bmp', 'tif'];
		super(binpath);
	}

	function getImageConfig()
	{
		if(null == _imageConfig)
		{
			_imageConfig = new ConfigImage();
		}
		return _imageConfig;
	}

	function setImageConfig(c : model.ConfigImage)
	{
		return _imageConfig = c;
	}

	override function commandOptions()
	{
		var args = [],
			cfg  = imageConfig;


		if(null != cfg.x)
		{
			args.push("--crop-x"); args.push(""+cfg.x);
		}
		if(null != cfg.y)
		{
			args.push("--crop-y"); args.push(""+cfg.y);
		}
		if(null != cfg.width)
		{
			args.push("--crop-w"); args.push(""+cfg.width);
		}
		if(null != cfg.height)
		{
			args.push("--crop-h"); args.push(""+cfg.height);
		}
		if(null != cfg.screenWidth)
		{
			args.push("--width"); args.push(""+cfg.screenWidth);
		}
		if(null != cfg.screenHeight)
		{
			args.push("--height"); args.push(""+cfg.screenHeight);
		}
		if(null != cfg.quality)
		{
			args.push("--quality"); args.push(""+cfg.quality);
		}
		if(true == cfg.disableSmartWidth)
		{
			args.push("--disable-smart-width");
		}
		if(true == cfg.transparent)
		{
			args.push("--transparent");
		}

		return super.commandOptions().concat(args);
	}
}