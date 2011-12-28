/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.frame;

enum FrameLayout
{
	Fill(before : Int, after : Int, ?min : Int, ?max : Int);
	FillPercent(before : Int, after : Int, percent : Float, ?min : Int, ?max : Int);
	FillRatio(before : Int, after : Int, ?ratio : Float);
	Fixed(before : Int, after : Int, size : Int);
	Floating(x : Int, y : Int, width : Int, height : Int);
}