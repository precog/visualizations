/**
 * ...
 * @author Franco Ponticelli
 */

package rg.axis;

interface IAxisDiscrete<T> implements IAxis<T>
{
	public var scaleDistribution(default, setScaleDistribution) : ScaleDistribution;
	public function range(start : T, end : T) : Array<T>;
}