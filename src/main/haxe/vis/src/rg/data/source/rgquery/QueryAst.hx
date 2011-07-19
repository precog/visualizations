/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.source.rgquery;

typedef Query = {
	exp : Array<QExp>,
	operation : QOperation,
	where : Array<QCondition>
}

enum QExp
{
	Time(periodicity : String);
	Property(name : String, ?limit : Int, ?descending : Bool);
	Event;
}

enum QCondition
{
	Equality(property : String, v : Dynamic);
}

enum QOperation
{
	Count;
//	Sum;
//	Average;
//	Min;
//	Max;
}
