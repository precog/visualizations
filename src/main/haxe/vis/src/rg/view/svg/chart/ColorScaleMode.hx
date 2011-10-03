/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.svg.chart;

import thx.color.Rgb;
import rg.data.DataPoint;
import rg.data.Stats;

enum ColorScaleMode 
{
	FromCss(?Steps : Int);
	Interpolation(colors : Array<Rgb>);
	Sequence(colors : Array<Rgb>);
	Fixed(color : Rgb);
	Fun(f : DataPoint -> Stats<Dynamic> -> String);
}