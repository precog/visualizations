package rg.query;

/**
 * ...
 * @author Franco Ponticelli
 */

enum PropertyType
{
	// todo, can limit be null?
	ValueProperty(name : String, top : Bool, limit : Int);
	TimeProperty(periodicity : String, top : Bool);
	EmptyProperty;
}