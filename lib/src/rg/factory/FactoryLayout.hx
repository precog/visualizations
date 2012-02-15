/**
 * ...
 * @author Franco Ponticelli
 */

package rg.factory;
import rg.info.InfoLayout;
import rg.visualization.Visualizations;
import thx.error.Error;
import thx.js.Selection;

class FactoryLayout
{
	public inline static var LIMIT_WIDTH = 10;
	public inline static var LIMIT_HEIGHT = 10;
	public inline static var DEFAULT_WIDTH = 400;
	public inline static var DEFAULT_HEIGHT = 300;

	public function new() { }

	public function create(info : InfoLayout, heightmargin : Int, container : Selection)
	{
		var size = size(container, info, heightmargin);
		var layoutName = info.layout;
		if (null == layoutName)
			layoutName = Visualizations.layoutDefault.get(info.type);
		if (null == layoutName)
			throw new Error("unable to find a suitable layout for '{0}'", info.type);
		var layout = Visualizations.instantiateLayout(layoutName, size.width, size.height, container);
		layout.feedOptions(info);
		return layout;
	}

	public static function size(container : Selection, info : InfoLayout, heightmargin : Int)
	{
		var v,
			width = null == info.width
				? ((v = container.node().clientWidth) > LIMIT_WIDTH ? v : DEFAULT_WIDTH)
				: info.width,
			height = (null == info.height
				? ((v = container.node().clientHeight) > LIMIT_HEIGHT ? v : DEFAULT_HEIGHT)
				: info.height) - heightmargin;
		return {
			width  : width,
			height : height
		}
	}
}