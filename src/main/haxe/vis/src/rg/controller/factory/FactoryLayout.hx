/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.factory;
import rg.controller.info.InfoLayout;
import rg.controller.Visualizations;
import thx.error.Error;
import thx.js.Selection;

class FactoryLayout 
{
	public inline static var LIMIT_WIDTH = 10;
	public inline static var LIMIT_HEIGHT = 10;
	public inline static var DEFAULT_WIDTH = 400;
	public inline static var DEFAULT_HEIGHT = 300;
	
	public function new() { }
	
	public function create(info : InfoLayout, container : Selection)
	{
		var v,
			width = null == info.width 
				? ((v = container.node().clientWidth) > LIMIT_WIDTH ? v : DEFAULT_WIDTH)
				: info.width,
			height = null == info.height 
				? ((v = container.node().clientHeight) > LIMIT_HEIGHT ? v : DEFAULT_HEIGHT)
				: info.height;
		var layout = info.layout;
		if (null == layout)
			layout = Visualizations.layoutDefault.get(info.type);
		if (null == layout)
			throw new Error("unable to find a suitable layout for '{0}'", info.type);
		return Visualizations.instantiateLayout(layout, width, height, container);
	}
}