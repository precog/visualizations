/**
 * ...
 * @author Franco Ponticelli
 */

package rg.svg;
import thx.js.Selection;

interface ISvgEffect 
{
	public function appendTo(container : Selection, id : String) : Void;
}