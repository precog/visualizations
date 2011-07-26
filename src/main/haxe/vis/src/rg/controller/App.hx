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
				visualization = new FactoryHtmlVisualization().create(infoviz.type, params.options);
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

/*
//import rg.controller.apply.ApplySvgOption;
import rg.controller.factory.FactoryDataContext;
import rg.controller.factory.FactoryDataSource;
import rg.controller.info.InfoDataContext;
import rg.controller.info.InfoSvgOption;
import rg.controller.info.InfoVisualizationOption;
//import rg.controller.viz.VisualizationSvg;
import rg.data.DataContext;
import rg.data.DataRequest;
import rg.data.source.rgquery.IExecutorReportGrid;
import rg.data.IDataSource;
import rg.view.svg.panel.Container;
import rg.view.svg.panel.Space;
import thx.error.Error;
//import rg.controller.viz.LineChart;
//import rg.controller.viz.Visualization;
import thx.js.Selection;
import rg.data.DataRequest;
using Arrays;
using rg.controller.info.Info;

class App 
{
	var factoryDataContext : FactoryDataContext;
	var request : DataRequest;
//	var layouts : Hash<VisualizationLayout>;
	public function new(executor : IExecutorReportGrid) 
	{
//		layouts = new Hash();
		var cache = new Hash(),
			factoryDataSource = new FactoryDataSource(cache, executor);
		factoryDataContext = new FactoryDataContext(factoryDataSource);
		request = new DataRequest(cache);
	}
	
	public function visualization(el : Selection, jsoptions : Dynamic)
	{
		var options = new InfoVisualizationOption().feed(jsoptions),
			create = factoryDataContext.create;
		var datacontext = options.data.map(function(d, _) return create(new InfoDataContext().feed(d)));
		
		
		request.request(datacontext, function(data) {
			trace(data);
		});
		
		
		
		var context = new VisualizationContext(datacontext);

		var space = new Space(100, 100, el);
		
		switch(jsoptions.type)
		{
			case "linechart":
//				viz = ApplySvgOption.apply(new VisualizationSvg(el), jsoptions);
//				var chart = new LineChart(el, context);
			default:
//				throw new Error("the visualization of type '{0}' is not available (yet)", type);
		}
//		viz.init();
		context.execute();
		
	}
	
	public function layout(el : Selection, jsoptions : Dynamic)
	{
		
	}
}
*/