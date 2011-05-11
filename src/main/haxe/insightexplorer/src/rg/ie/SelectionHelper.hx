package rg.ie;

/**
 * ...
 * @author Franco Ponticelli
 */

import thx.js.Selection;

class SelectionHelper
{

	public static function appendCount(sel : Selection, count : Int)
	{
		sel.html().string(sel.html().get() + ' <spann class="count">(' + Ints.format(count) +')</span>');
	}
	
}