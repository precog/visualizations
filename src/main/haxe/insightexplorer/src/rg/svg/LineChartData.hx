/**
 * ...
 * @author Franco Ponticelli
 */

package rg.svg;

typedef LineChartData = {
	minx : Float,
	miny : Float, 
	maxx : Float,
	maxy : Float,
	data : Array<{
		label : String,
		values : Array<{ x : Float, y : Float}>
	}>
};