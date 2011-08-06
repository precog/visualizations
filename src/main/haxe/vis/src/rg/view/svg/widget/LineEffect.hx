/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.svg.widget;

enum LineEffect 
{
	NoEffect;
	Gradient(lightness : Float, levels : Int);
	DropShadow(ox : Float, oy : Float, evels : Int);
}