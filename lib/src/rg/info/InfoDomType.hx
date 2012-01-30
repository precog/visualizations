/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;
import rg.visualization.Visualizations;

class InfoDomType
{
	public var kind : DomKind;
	public function new() { }

	public static function filters() : Array<FieldFilter>
	{
		return [{
			field : "visualization",
			validator : function(v) return Arrays.exists(Visualizations.visualizations, v.toLowerCase()),
			filter : function(v) return [{
				value :
					Arrays.exists(Visualizations.html, v.toLowerCase())
					? Html
					: Svg,
				field : "kind"
			}]
		}];
	}
}

enum DomKind
{
	Html;
	Svg;
}