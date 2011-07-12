/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.transform;
import rg.data.DataPoint;

interface ITransform<TIn, TOut>
{
	public function transform(data : TIn) : Array<DataPoint<TOut>>;
}