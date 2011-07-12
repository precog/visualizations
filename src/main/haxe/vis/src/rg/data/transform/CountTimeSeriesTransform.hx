/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.transform;
import rg.data.DataPoint;
import rg.data.Predicates;
using Arrays;

class CountTimeSeriesTransform implements ITransform<Dynamic<Array<Array<Float>>>, Float>
{
	var predicates : Dynamic;
	var id : String;
	var unit : String;
	var periodicity : String;
	public function new(predicates : Dynamic, ?unit = "count", ?periodicity : String) 
	{
		this.predicates = predicates;
		this.id = Predicates.id(predicates);
		this.unit = unit;
		this.periodicity = null == periodicity ? Predicates.periodicity(predicates) : periodicity;
	}
	
	public function transform(data : Dynamic<Array<Array<Float>>>) : Array<DataPoint<Float>>
	{
		var values : Array<Array<Float>> = Reflect.field(data, periodicity),
			predicates = this.predicates,
			unit = this.unit;
		if (null == values)
			return [];
		return values.map(function(d, _) {
			var p = Objects.addFields(Dynamics.clone(predicates), [".#timestamp"], [d[0]]);
			return {
				id : Predicates.id(p),
				predicates : p,
				value : d[1],
				unit : unit
			}
		});
	}
}