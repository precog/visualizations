/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.factory;
import rg.controller.info.InfoVariable;
import rg.data.source.rgquery.QueryAst;
import rg.data.IDataSource;
import rg.data.source.DataSourceReportGrid;
import rg.util.Properties;
import thx.collection.Set;
import rg.data.VariableDependentContext;
import rg.data.VariableIndependentContext;
import rg.data.IAxisDiscrete;
import rg.data.AxisOrdinal;
import rg.data.AxisTime;
import rg.data.DataContext;

class FactoryVariableContexts 
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
	
	public function createIndependents(info : Array<InfoVariable>) : Array<VariableIndependentContext<Dynamic>>
	{
		var result = [], ordinal, discrete, v, ctx;
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
			v = independentFactory.create(i);
			if (null != (ordinal = Types.as(v.axis, AxisOrdinal)))
			{
				ctx = new VariableIndependentContext(v, ordinal.values == null || 0 == ordinal.values.length);
			} else {
				ctx = new VariableIndependentContext(v, false);
			}
			result.push(ctx);
		}
		return result;
	}
	
	public function createDependents(info : Array<InfoVariable>) : Array<VariableDependentContext<Dynamic>>
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

			var //isnumeric = null != i.min ? Std.is(i.min, Float) : (i.max ? Std.is(i.max, Float) : false),
				v = dependentFactory.create(i, null/*isnumeric*/);
			result.push(new VariableDependentContext(v, 
//				   null == v.max 
//				|| null == v.min
//				|| 

				null == v.axis
				|| (null != (ordinal = Types.as(v.axis, AxisOrdinal)) && 0 == ordinal.values.length)
				));
		}
		return result;
	}
	
	public static function createFromDataContexts(contexts : Array<DataContext>)
	{
		var kp = new Set();
		for (ctx in contexts)
		{
			for (ds in ctx.data.sources)
			{
				var query = Types.as(ds, DataSourceReportGrid);
				if (null == query)
					continue;
				for (exp in query.query.exp)
				{
					switch(exp)
					{
						case Time(p):
							kp.add(Properties.timeProperty(p));
						case Property(n, _, _):
							kp.add(n);
						case Event:
							kp.add("event");
					}
				}
			}
		}
		return new FactoryVariableContexts(kp);
	}
}