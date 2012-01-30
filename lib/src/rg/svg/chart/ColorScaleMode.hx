/**
 * ...
 * @author Franco Ponticelli
 */

package rg.svg.chart;

import thx.color.Rgb;
import rg.data.DataPoint;
import rg.axis.Stats;

enum ColorScaleMode 
{
	FromCssInterpolation(?steps : Int);
	FromCss(?steps : Int);
	Interpolation(colors : Array<Rgb>);
	Sequence(colors : Array<Rgb>);
	Fixed(color : Rgb);
	Fun(f : DataPoint -> Stats<Dynamic> -> String);
}