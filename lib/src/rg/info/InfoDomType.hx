/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;
import rg.visualization.Visualizations;
using rg.info.filter.FilterDescription;
using rg.info.filter.TransformResult;
import thx.util.Message;

@:keep class InfoDomType
{
	public var kind : DomKind;
	public function new() { }

	public static function filters() : Array<FilterDescription>
	{
		return [
			"visualization".custom(["kind"], function(value : Dynamic) {
				var v = null == value ? null : (""+value).toLowerCase();
				if(Arrays.exists(Visualizations.visualizations, v)) {
					return TransformResult.Success(Arrays.exists(Visualizations.html, v)
						? Html
						: Svg);
				} else {
					return TransformResult.Failure(new Message("'{0}' value is not a vailid visualization kind", [value]));
				}
			})
		];
	}
}

enum DomKind
{
	Html;
	Svg;
}