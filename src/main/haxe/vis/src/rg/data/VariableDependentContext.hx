/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;

class VariableDependentContext<T>
{
	public var partial : Bool;
	public var variable : VariableDependent<T>;
	public function new(variable : VariableDependent<T>, partial : Bool)
	{
		this.variable = variable;
		this.partial = partial;
	}
}