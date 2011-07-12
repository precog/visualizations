/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.transform;
import rg.data.DataPoint;
import rg.data.Predicates;
using Arrays;

class CountTimeIntersectTransform implements ITransform<Dynamic, Float>
{
	var predicates : Dynamic;
	var id : String;
	var unit : String;
	var periodicity : String;
	var fields : Array<String>;
	public function new(predicates : Dynamic, fields : Array<String>, ?unit = "count", ?periodicity : String) 
	{
		this.predicates = predicates;
		this.id = Predicates.id(predicates);
		this.unit = unit;
		this.periodicity = null == periodicity ? Predicates.periodicity(predicates) : periodicity;
		this.fields = fields;
	}
	
	public function transform(data : Dynamic) : Array<DataPoint<Float>>
	{
		var values = Objects.flatten(data),
			predicates = this.predicates,
			unit = this.unit;
		if (null == values || 0 == values.length)
			return [];
		
			var result = [];
		
		for (item in values)
		{
			var arr : Array<Array<Float>> = item.value,
				values = item.fields.copy(),
				timestamp = values.pop();

			for (i in 0...arr.length)
			{
				var p = Objects.addFields(Dynamics.clone(predicates), 
					[".#timestamp"],
					[arr[i][0]]
				);
					
				Objects.addFields(p,
					fields,
					values.map(typedValue)
				);
				result.push({
					id : Predicates.id(p),
					predicates : p,
					value : arr[i][1],
					unit : unit
				});
			}
		}
		return result;
	}
	
	static function typedValue(s : String, ?_) : Dynamic
	{
		if (s.substr(0, 1) == '"')
			return StringTools.replace(s.substr(1, s.length - 2), '\\"', '"');
		else if ((s = s.toLowerCase()) == "true")
			return true;
		else if (s == "false")
			return false;
		else
			return Std.parseFloat(s);
	}
}