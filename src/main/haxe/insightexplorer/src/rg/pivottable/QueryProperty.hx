package rg.pivottable;

/**
 * ...
 * @author Franco Ponticelli
 */

enum QueryProperty 
{
	// todo, can limit be null?
	ValueProperty(name : String, ascending : Bool, limit : Int);
	TimeProperty(periodicity : String, ascending : Bool, limit : Int);
}