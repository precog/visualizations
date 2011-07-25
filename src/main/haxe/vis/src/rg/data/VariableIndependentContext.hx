/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;

class VariableIndependentContext<T>
{
	public var partial : Bool;
	public var variable : VariableIndependent<T>;
	public function new(variable : VariableIndependent<T>, partial : Bool)
	{
		this.variable = variable;
		this.partial = partial;
	}
}