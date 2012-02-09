package model;

class WKHtmlToPdf extends WKHtml
{
	public function new(binpath : String)
	{
		allowedFormats = ['pdf'];
		super(binpath);
	}

	override function commandOptions() return []
}