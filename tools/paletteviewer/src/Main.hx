import erazor.Template;
import thx.error.Error;
import thx.ini.Ini;
import thx.sys.FileSystem;
import thx.sys.io.File;
import thx.sys.Lib;
using Arrays;
/**
 * ...
 * @author Franco Ponticelli
 */

class Main
{
	static var patternColorCapture = ~/background-color\s*:\s*(#?[0-9a-f]+)/i;
	static function main()
	{
		var config = Ini.decode(File.getContent("config.ini")),
			src : String = config.src,
			pattern = new EReg(config.pattern, "i");

		if (!FileSystem.exists(config.template))
			throw new Error("template file not found at '{0}'", config.template);

		var temp = new Template(File.getContent(config.template));

		var items = FileSystem.readDirectory(config.src)
			.filter(function(d) return pattern.match(d))
			.filter(function(d) return !FileSystem.isDirectory(config.src + "/" + d))
			.map(function(d, i) return {
				name : d,
				path : config.src + "/" + d,
				colors : []
			});
		items.sort(function(a, b) return Strings.compare(a.name, b.name));
		items.each(addColors);

		Lib.print(temp.execute({
			items : items
		}));
	}

	static function addColors(item : { name : String, path : String, colors : Array<String> }, _)
	{
		var content = File.getContent(item.path);
		while (patternColorCapture.match(content))
		{
			item.colors.push(patternColorCapture.matched(1));
			content = patternColorCapture.matchedRight();
		}
	}
}