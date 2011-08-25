/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;

interface IAxisDiscrete<T> implements IAxis<T>
{
	public var scaleDistribution(default, setScaleDistribution) : ScaleDistribution;
	public function range(start : T, end : T) : Array<T>;	
}