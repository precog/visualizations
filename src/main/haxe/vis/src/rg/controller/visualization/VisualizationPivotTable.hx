/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.visualization;
import rg.controller.info.InfoPivotTable;
import thx.error.NotImplemented;
import thx.js.Selection;

class VisualizationPivotTable extends VisualizationHtml
{
	public var info : InfoPivotTable;
	public function new(container : Selection) 
	{
		super(container);
	}
	
	override function init()
	{
//		throw new NotImplemented();
	}
}