/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.factory;
import rg.controller.info.InfoVariable;
import rg.data.source.DataSourceReportGrid;
import rg.util.Properties;
import thx.collection.Set;
import rg.data.DataContext;
import rg.data.VariableIndependent;
import rg.data.VariableDependent;

class FactoryVariableReportGrid
{
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
		return new FactoryVariable(kp);
	}
}
