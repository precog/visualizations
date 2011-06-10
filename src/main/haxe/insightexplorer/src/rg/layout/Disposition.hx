package rg.layout;

/**
 * ...
 * @author Franco Ponticelli
 */

enum Disposition
{
	Fixed(before : Int, after : Int, size : Int);
	Variable(before : Int, after : Int, percent : Float, ?min : Int, ?max : Int);
	Fill(before : Int, after : Int, ?min : Int, ?max : Int);
	Floating(x : Int, y : Int, width : Int, height : Int);
}