package model;

import thx.error.Error;

using Arrays;

class WKHtml
{
	var cmd : String;
	public var format(getFormat, setFormat) : String;
	public var allowedFormats(default, null) : Array<String>;
	function new(cmd : String)
	{
		this.cmd = cmd;
	}

	public function render(content : String) : String
	{
		var t = tmp('html');
		thx.sys.io.File.putContent(t, content);
		var r = renderUrl(t);
//		thx.sys.FileSystem.deleteFile(t);
		return r;
	}

	public function renderUrl(path : String) : String
	{
		var args = commandOptions(),
			out  = tmp(format);


//args.push('--javascript-delay');
//args.push('10000');


		args.push(path);
		args.push(out);

		if(!execute(args))
		{
			throw new Error("unable to render the result");
		}
		var result = thx.sys.io.File.getContent(out);
		thx.sys.FileSystem.deleteFile(out);
		return result;
	}

	function execute(args : Array<String>) : Bool
	{
		var r = thx.sys.Sys.command(cmd, args);
		return r == 0;
	}

	function commandOptions() return []

	function getFormat() return format
	function setFormat(f : String)
	{
		if(!allowedFormats.exists(f))
			throw new Error("invalid format {0}, you can use any of: {1}", [f, allowedFormats]);
		return format = f;
	}

	static function tmp(ext : String) : String
	{
		var uid;
		do
		{
			uid = tmpuid(ext);
		} while(thx.sys.FileSystem.exists(uid));
		return uid;
	}

	static function tmpuid(ext : String)
	{
		var id = untyped __call__('uniqid', 'WK_');
		return '/tmp/' + id + '.' + ext;
	}
}