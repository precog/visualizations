package model;

import thx.error.Error;

using Arrays;

class WKHtml
{
	var cmd : String;
	var _wkConfig : ConfigWKHtml;
	public var wkConfig(getWKConfig, setWKConfig) : ConfigWKHtml;
	public var format(getFormat, setFormat) : String;
	public var allowedFormats(default, null) : Array<String>;
	function new(cmd : String)
	{
		this.cmd = cmd;
	}

	public function render(content : String) : String
	{
		var ext = content.indexOf('-//W3C//DTD XHTML 1.0') >= 0 ? 'xhtml' : 'html';
		var t = tmp(ext);
		thx.sys.io.File.putContent(t, content);
		var r = renderUrl(t);
//		thx.sys.FileSystem.deleteFile(t);
		return r;
	}

	public function renderUrl(path : String) : String
	{
		var args = commandOptions(),
			out  = tmp(format);


		args.push('--javascript-delay'); args.push('5000');


		args.push(path);
		args.push(out);

		if(!execute(args))
		{
			trace("ERROR: " + err);
			trace("CMD " + cmd + " " + args.join(" "));
			throw new Error("unable to render the result");
		}
		var result = thx.sys.io.File.getContent(out);
		thx.sys.FileSystem.deleteFile(out);
		return result;
	}

	var err : String;
	function execute(args : Array<String>) : Bool
	{
		var process = new thx.sys.io.Process(cmd, args);
//		var r = thx.sys.Sys.command(cmd, args);
//		var id = process.getPid();
		process.close();
		var r = process.exitCode();
//		trace(id);
		err = process.stderr.readAll().toString();
//		trace("ERROR: " + err);
		var out = process.stdout.readAll().toString();

//		trace("OUT: " + out);
		return r == 0;
	}

	function commandOptions()
	{
		var args = [];

		args.push('--disable-local-file-access');
		args.push('--javascript-delay'); args.push('30000');
		args.push('--user-style-sheet'); args.push(App.RESET_CSS);
		args.push('--run-script'); args.push(App.PRINT_JS);

		var cfg = wkConfig;
		if(null != cfg.zoom)
		{
			args.push("--zoom"); args.push(""+cfg.zoom);
		}

		return args;
	}

	function getFormat() return format
	function setFormat(f : String)
	{
		if(!allowedFormats.exists(f))
			throw new Error("invalid format {0}, you can use any of: {1}", [f, allowedFormats]);
		return format = f;
	}

	function getWKConfig()
	{
		if(null == _wkConfig)
		{
			_wkConfig = new ConfigWKHtml();
		}
		return _wkConfig;
	}

	function setWKConfig(c : model.ConfigWKHtml)
	{
		return _wkConfig = c;
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