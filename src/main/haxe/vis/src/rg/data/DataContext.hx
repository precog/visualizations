/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;

class DataContext 
{
	public var axes(default, null) : Array<DataAxis>;
	public function new() 
	{
		axes = [];
	}
}