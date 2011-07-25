/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller;
import rg.controller.factory.FactoryVariableContexts;
import rg.controller.info.InfoDataContext;
import rg.data.DataRequest;
import rg.data.source.rgquery.IExecutorReportGrid;
import thx.js.Selection;
import rg.controller.info.InfoVisualizationOption;
import rg.controller.factory.FactoryDataContext;
import rg.controller.factory.FactoryDataSource;
import rg.data.DataPoint;
import rg.data.source.DataSourceReportGrid;
using rg.controller.info.Info;
using Arrays;

class App
{
	var executor : IExecutorReportGrid;
	public function new(executor : IExecutorReportGrid)
	{
		this.executor = executor;
	}
	
	public function visualization(el : Selection, jsoptions : Dynamic)
	{
		var cache = new Hash();
		var options = new InfoVisualizationOption().feed(jsoptions);
		trace(options.data);
		var factoryDataSource = new FactoryDataSource(cache, executor);
		var factoryDataContext = new FactoryDataContext(factoryDataSource);
		var datacontexts = options.data.map(function(d : InfoDataContext, _) return factoryDataContext.create(d));
		var factoryVariableContexts = FactoryVariableContexts.createFromDataContexts(datacontexts);
		var independentVariables = factoryVariableContexts.createIndependents(options.variables);
		var dependentVariables = factoryVariableContexts.createDependents(options.variables);
		for (context in datacontexts)
		{
			trace(independentVariables);
			context.data.independentVariables = independentVariables;
			context.data.dependentVariables = dependentVariables;
			trace(context.data.independentVariables);
		}
//		var varibles = Facto
		
		var request = new DataRequest(cache, datacontexts);
		request.onData = function(datapoints : Array<DataPoint>) {
			trace(datapoints);
		};
		request.request();
	}
}

/*
//import rg.controller.apply.ApplySvgOption;
import rg.controller.factory.FactoryDataContext;
import rg.controller.factory.FactoryDataSource;
import rg.controller.info.InfoDataContext;
import rg.controller.info.InfoSvgOption;
import rg.controller.info.InfoVisualizationOption;
//import rg.controller.viz.SvgVisualization;
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
//				viz = ApplySvgOption.apply(new SvgVisualization(el), jsoptions);
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