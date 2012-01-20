/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;

class VisualizationData
{
	public var variables : Array<Variable>;
	public var data : Array<DataContext>;

	public function new(variables : Array<Variable>, data : Array<DataContext>)
	{
		this.variables = variables;
		this.data = data;
	}
}