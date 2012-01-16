import neko.FileSystem;
import neko.io.File;
import neko.Lib;
import neko.Sys;
import thx.color.Colors;
import thx.color.Rgb;
import thx.csv.Csv;
import thx.csv.CsvDecoder;
import thx.text.Paths;
using Arrays;
/**
 * ...
 * @author Franco Ponticelli
 */

class Main 
{
	static function main() 
	{
		var args = Sys.args();
		var input = args.shift();
		if ("-help" == input)
			help();
		if (null == input)
			error("invalid input argument");
		if (!FileSystem.exists(input) || FileSystem.isDirectory(input))
		{
			error(Strings.format("invalid input file '{0}'", [input]));
		}
		var output = args.shift();
		if (null == output)
			output = "palettes";
		if (!FileSystem.exists(output) || !FileSystem.isDirectory(output))
			error(Strings.format("output '{0}' is not a directory or doesn't exist", [input]));

		var lines = Csv.decode(File.getContent(input));
		lines.shift(); // remove the header row
		
		var schemes = processLines(lines);
		for (scheme in schemes)
			saveScheme(scheme.colors, output + "/" + scheme.name);
	}
	
	static function processLines(lines : Array<Array<Dynamic>>)
	{
		var schemes = [],
			i = 0;
		
		while (i < lines.length)
		{
			var name : String = lines[i][0],
				numcolors : Int = lines[i][1],
				type = lines[i][2],
				colors = [];
			for (j in 0...numcolors)
			{
				colors.push(new Rgb(lines[i + j][6], lines[i + j][7], lines[i + j][8]));
			}
			
			schemes.push({
				name : (name + "-" + numcolors + "-" + type).toLowerCase(),
				colors : colors
			});
			
			var reverse = colors.copy();
			reverse.reverse();
			
			schemes.push({
				name : (name + "-" + numcolors + "-" + type + "r").toLowerCase(),
				colors : reverse
			});
			
			i += numcolors;
		}
		return schemes;
	}
	
	static function saveScheme(colors : Array<Rgb>, output : String)
	{
		try
		{
			var file = File.write(output);
			file.writeString("// Colors from www.ColorBrewer.org by Cynthia A. Brewer, Geography, Pennsylvania State University.\n");
			file.writeString(colors.map(function(d, _) return d.toCss()).join("\n"));
			file.close();
		} catch (e : Dynamic)
		{
			error(Strings.format("unable to write file '{0}': {1}", [output, Std.string(e)]));
		}
	}
	
	
	static function error(msg : String)
	{
		Lib.println("==========================================================================");
		Lib.println("ERROR: " + msg);
		Lib.println("==========================================================================");
		Lib.println("");
		help(false);
	}
	
	static function help(cleanExit = true)
	{
		Lib.print
('Color Brewer Generator For ReportGrid Color File by Franco Ponticelli.

USAGE:
  colorbrewer [input] [?output]
    where
    - input: input file
    - output (optional, default is "palettes"): output directory
  colorbrewer -help
    show this help
EXAMPLE:
  colorbrewer colorbrewer_csv.txt
');
		Sys.exit(cleanExit ? 0 : 1);
	}
}