/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;

interface DataStore<T>
{
	public function iterator() : Iterator<DataPoint<T>>;
}