/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;

interface IAxisDiscrete<T> implements IAxis<T>
{
//	public var first (getFirst, null): T;
//	public var last  (getLast,  null): T;
//	public var allTicks (getAllTicks, null): Array<ITickmark>;
	public function range(start : T, end : T) : Array<T>;	
	
	// TODO: move this to IAXIS
	// TODO: rename to "ticks"
	public function sample(start : T, end : T, ?maxTicks : Int) : Array<ITickmark<T>>;
}

/*
{
	name: "impression",
	properties: {
		".#time.hour": 123123123,
		".gender":     "male",
		"count": 123123
	}
}

[{value: 123, segment: "foo", axis: "" }]

[ { name: "foo", position: { "count": 123 } ]

[ { name: "foo", properties: { "count": 123, "#time.hour": 123123123 } ]

[ { name: "foo", properties: { "count": 123, "#time.hour": 123123123 } ]

{
	name: "impression",
	
}

function(subset) {
	return subset.map(function(point) {
		return point;
	});
}
*/