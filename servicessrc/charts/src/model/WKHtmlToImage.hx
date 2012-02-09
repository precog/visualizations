package model;

class WKHtmlToImage extends WKHtml
{
	public function new(binpath : String)
	{
		allowedFormats = ['png', 'jpg'];
		super(binpath);
	}

	override function commandOptions() return []
}