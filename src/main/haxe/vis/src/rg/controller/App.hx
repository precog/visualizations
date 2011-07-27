/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller;
import rg.controller.factory.FactoryLayout;
import rg.controller.factory.FactoryVariableContexts;
import rg.controller.info.InfoDataContext;
import rg.controller.info.InfoDomType;
import rg.controller.info.InfoLayout;
import rg.controller.info.InfoVisualizationType;
import rg.controller.visualization.Visualization;
import rg.data.DataRequest;
import rg.data.source.rgquery.IExecutorReportGrid;
import thx.error.Error;
import thx.error.NotImplemented;
import thx.js.Selection;
import rg.controller.info.InfoVisualizationOption;
import rg.controller.factory.FactoryDataContext;
import rg.controller.factory.FactoryDataSource;
import rg.data.DataPoint;
import rg.data.source.DataSourceReportGrid;
import rg.view.layout.Layout;
import rg.controller.factory.FactoryHtmlVisualization;
import rg.controller.factory.FactorySvgVisualization;
using rg.controller.info.Info;
using Arrays;

class App
{
	static var lastid = 0;
	static function nextid()
	{
		return ":RGVIZ-" + (++lastid);
	}
	
	var executor : IExecutorReportGrid;
	var layouts : Hash<Layout>;
	public function new(executor : IExecutorReportGrid)
	{
		this.executor = executor;
		this.layouts = new Hash();
	}
	
	public function visualization(el : Selection, jsoptions : Dynamic)
	{
		var node = el.node();
		var id = node.id;
		if (null == id)
		{
			node.id = id = nextid();
		}
		var cache = new Hash();
		var params = new InfoVisualizationOption().feed(jsoptions);
		var factoryDataSource = new FactoryDataSource(cache, executor);
		var factoryDataContext = new FactoryDataContext(factoryDataSource);
		var datacontexts = params.data.map(function(d : InfoDataContext, _) return factoryDataContext.create(d));
		var factoryVariableContexts = FactoryVariableContexts.createFromDataContexts(datacontexts);
		var independentVariables = factoryVariableContexts.createIndependents(params.variables);
		var dependentVariables = factoryVariableContexts.createDependents(params.variables);
		for (context in datacontexts)
		{
			context.data.independentVariables = independentVariables;
			context.data.dependentVariables = dependentVariables;
		}

		var visualization : Visualization = null;
		var infoviz = new InfoVisualizationType().feed(params.options);
		switch(new InfoDomType().feed(params.options).kind)
		{
			case Svg:
				var layout = getLayout(id, params.options, el);
				visualization = new FactorySvgVisualization().create(infoviz.type, layout, params.options);
			case Html:
				visualization = new FactoryHtmlVisualization().create(infoviz.type, el, params.options);
		}
		visualization.setVariables(
			independentVariables.map(function(c, _) return c.variable),
			dependentVariables.map(function(c, _) return c.variable));
		visualization.init();
		
		var request = new DataRequest(cache, datacontexts);
		request.onData = function(datapoints : Array<DataPoint>) {
			visualization.feedData(datapoints);
		};
		request.request();
		return visualization;
	}
	
	public function getLayout(id : String, options : Dynamic, container : Selection)
	{
		if (layouts.exists(id))
			return layouts.get(id);
		var info = new InfoLayout().feed(options),
			layout = new FactoryLayout().create(info, container);
		layouts.set(id, layout);
		return layout;
	}
}