package rg.pivottable;

/**
 * ...
 * @author Franco Ponticelli
 */

enum QueryProperty 
{
	// todo, can limit be null?
	ValueProperty(name : String, top : Bool, limit : Int);
	TimeProperty(periodicity : String, top : Bool);
	EmptyProperty;
}