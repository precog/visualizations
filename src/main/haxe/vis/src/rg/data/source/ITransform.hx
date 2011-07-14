/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.source;
import rg.data.DataPoint;

interface ITransform<T>
{
	public function transform(data : T) : Array<DataPoint>;
}