/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.source.rgquery;

typedef Query = {
	exp : Array<QExp>,
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
	In(property : String, v : Array<Dynamic>);
}

enum QOperation
{
	Count;
	Mean;
	StandardDeviation;
}
