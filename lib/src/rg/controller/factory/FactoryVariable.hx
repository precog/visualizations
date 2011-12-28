/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.factory;
import rg.controller.info.InfoVariable;
import rg.util.Properties;
import thx.collection.Set;
import rg.data.DataContext;
import rg.data.VariableIndependent;
import rg.data.VariableDependent;

class FactoryVariable
{
	var knownProperties : Set<String>;
	var independentFactory : FactoryVariableIndependent;
	var dependentFactory : FactoryVariableDependent;
	public function new(knownproperties : Set<String>)
	{
		knownProperties = knownproperties;
		independentFactory = new FactoryVariableIndependent();
		dependentFactory = new FactoryVariableDependent();
	}

	public function createIndependents(info : Array<InfoVariable>) : Array<VariableIndependent<Dynamic>>
	{
		var result = [], ordinal, discrete, ctx;
		for (i in info)
		{
			var moveon = switch(i.variableType)
			{
				case Independent: false;
				case Unknown: !knownProperties.exists(i.type);
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
				case Unknown: knownProperties.exists(i.type);
				default: true;
			}
			if (moveon)
				continue;
			result.push(dependentFactory.create(i, null/*isnumeric*/));
		}
		return result;
	}

	public static function createFromDataContexts(contexts : Array<DataContext>)
	{
		return new FactoryVariable(new Set());
	}
}