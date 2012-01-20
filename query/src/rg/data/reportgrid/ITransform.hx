/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.reportgrid;
import rg.data.DataPoint;

interface ITransform<T>
{
	public function transform(data : T) : Array<DataPoint>;
}