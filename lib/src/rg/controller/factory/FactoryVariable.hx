/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.factory;
import rg.controller.info.InfoVariable;
import rg.util.Properties;
import rg.data.VariableIndependent;
import rg.data.VariableDependent;
import rg.data.Variable;
import rg.data.IAxis;
using Arrays;

class FactoryVariable
{
	var independentFactory : FactoryVariableIndependent;
	var dependentFactory : FactoryVariableDependent;
	public function new()
	{
		independentFactory = new FactoryVariableIndependent();
		dependentFactory = new FactoryVariableDependent();
	}

	public function createVariables(arr : Array<InfoVariable>) : Array<Variable<Dynamic, IAxis<Dynamic>>>
	{
		return arr.map(function(info : InfoVariable, _) : Variable<Dynamic, IAxis<Dynamic>> {
			switch(info.variableType)
			{
				case Independent:
					return cast independentFactory.create(info);
				case Dependent:
					return dependentFactory.create(info, null);
				case Unknown:
					return dependentFactory.create(info, null);
			}
		});
	}

	public function createIndependents(info : Array<InfoVariable>) : Array<VariableIndependent<Dynamic>>
	{
		var result = [], ordinal, discrete, ctx;
		for (i in info)
		{
			var moveon = switch(i.variableType)
			{
				case Independent: false;
				case Unknown: true;
				default: true;
			}
			if (moveon)
				continue;
			result.push(independentFactory.create(i));
		}
		return result;
	}

	public function createDependents(info : Array<InfoVariable>) : Array<VariableDependent<Dynamic>>
	{
		var result = [], ordinal;
		for (i in info)
		{
			var moveon = switch(i.variableType)
			{
				case Dependent: false;
				case Unknown: false;
				default: true;
			}
			if (moveon)
				continue;
			result.push(dependentFactory.create(i, null/*isnumeric*/));
		}
		return result;
	}
}