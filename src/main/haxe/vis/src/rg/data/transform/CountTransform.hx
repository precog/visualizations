/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.transform;
import rg.data.Predicates;

class CountTransform implements ITransform<Int, Float>
{
	var predicates : Dynamic;
	var id : String;
	var unit : String;
	public function new(predicates : Dynamic, unit = "count") 
	{
		this.predicates = predicates;
		this.id = Predicates.id(predicates);
		this.unit = unit;
	}
	
	public function transform(data : Int)
	{
		return [{
			id : id,
			predicates : predicates, // TODO, should be a clone?
			value : 0.0 + data,
			unit : unit
		}];
	}
}