package rg.layout;

/**
 * ...
 * @author Franco Ponticelli
 */

enum Disposition
{
	Fixed(size : Int);
	Variable(percent : Float, ?min : Int, ?max : Int);
	Fill(?min : Int, ?max : Int);
	Floating(x : Int, y : Int, width : Int, height : Int);
}