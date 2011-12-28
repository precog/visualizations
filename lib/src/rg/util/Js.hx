package rg.util;

class Js 
{
	/**
	* fragment can be both a String or a JS regular expression
	*/
	public static function findScript(fragment : Dynamic)
	{
#if reportgridapi
		return untyped __js__("ReportGrid.$.Util.findScript")(fragment);
#else
		var scripts = js.Lib.document.getElementsByTagName('SCRIPT');
		if(untyped __js__('typeof fragment == "string"'))
		{
			for (i in 0...scripts.length) 
			{
				var script = scripts[i],
					src : String = script.getAttribute('src');
				if (null != src && src.indexOf(fragment) >= 0)
					return script;
			}
		} else {
			for (i in 0...scripts.length) 
			{
				var script = scripts[i],
					src : String = script.getAttribute('src');
				if (null != src && untyped src.match(fragment))
					return script;
			}
		}

		return null;
#end
	}
}