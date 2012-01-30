/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller;
import rg.factory.FactoryLayout;
import rg.factory.FactoryVariableReportGrid;
import rg.info.InfoDataContext;
import rg.info.InfoDomType;
import rg.info.InfoDownload;
import rg.info.InfoGeneral;
import rg.info.InfoLayout;
import rg.info.InfoTrack;
import rg.info.InfoVisualizationType;
import rg.interactive.Downloader;
import rg.visualization.Visualization;
import rg.data.DataRequest;
import rg.data.source.rgquery.IExecutorReportGrid;
import rg.data.source.rgquery.ITrackReportGrid;
import rg.track.Tracker;
import thx.error.Error;
import thx.error.NotImplemented;
import thx.js.Selection;
import rg.info.InfoVisualizationOptionReportGrid;
import rg.factory.FactoryDataContext;
import rg.factory.FactoryDataSourceReportGrid;
import rg.data.DataPoint;
import rg.data.VariableDependent;
import rg.data.VariableIndependent;
import rg.layout.Layout;
import rg.factory.FactoryHtmlVisualization;
import rg.factory.FactorySvgVisualization;
import rg.html.widget.DownloaderMenu;
using rg.info.Info;
using Arrays;

class App
{
	static var lastid = 0;
	static function nextid()
	{
		return ":RGVIZ-" + (++lastid);
	}

	var executor : IExecutorReportGrid;
	var tracker : ITrackReportGrid;
	var layouts : Hash<Layout>;
	public function new(executor : IExecutorReportGrid, tracker : ITrackReportGrid)
	{
		this.executor = executor;
		this.tracker = tracker;
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
		var params = new InfoVisualizationOptionReportGrid().feed(jsoptions);

		var factoryDataSource = new FactoryDataSourceReportGrid(cache, executor);
		var factoryDataContext = new FactoryDataContext(factoryDataSource);

		var datacontexts = params.data.map(function(d : InfoDataContext, _) return factoryDataContext.create(d));
		var factoryVariableContexts = FactoryVariableReportGrid.createFromDataContexts(datacontexts);
		var variables = factoryVariableContexts.createVariables(params.variables);
		var independentVariables : Array<rg.data.VariableIndependent<Dynamic>> = cast variables.filter(function(v) return Std.is(v, VariableIndependent));
		var dependentVariables : Array<rg.data.VariableDependent<Dynamic>> = cast variables.filter(function(v) return Std.is(v, VariableDependent));
		for (context in datacontexts)
		{
			context.data.independentVariables = independentVariables;
			context.data.dependentVariables = dependentVariables;
		}

		var visualization : Visualization = null;

		var general = new InfoGeneral().feed(params.options);

		var infoviz = new InfoVisualizationType().feed(params.options);

		switch(new InfoDomType().feed(params.options).kind)
		{
			case Svg:
				var layout = getLayout(id, params.options, el, infoviz.replace);
				visualization = new FactorySvgVisualization().create(infoviz.type, layout, params.options);
			case Html:
				if (infoviz.replace)
					el.selectAll("*").remove();
				visualization = new FactoryHtmlVisualization().create(infoviz.type, el, params.options);
		}

		visualization.setVariables(variables, independentVariables, dependentVariables);
		visualization.init();
		if (null != general.ready)
			visualization.addReady(general.ready);

		var request = new DataRequest(cache, datacontexts);
		request.onData = function(datapoints : Array<DataPoint>) {
//			trace(datapoints);
			visualization.feedData(datapoints);
		};
		request.request();

		// tracking
		var track = new InfoTrack().feed(jsoptions.options.track);
		if (null != tracker && track.enabled)
		{
			var paths = track.paths.map(function(d, _) return StringTools.replace(d, "{hash}", track.hash));
			Tracker.instance(tracker, paths, track.token)
				.addVisualization(visualization, jsoptions);
		}

		// download
		var download = new InfoDownload().feed(jsoptions.options.download);

		if (null != download.position || null != download.handler)
		{
			var downloader = new Downloader(visualization.container, download.service, download.background);

			if (null != download.handler)
				visualization.addReadyOnce(function() {
					download.handler(downloader.download);
				});
			else
			{
				visualization.addReadyOnce(function()
				{
					var widget = new DownloaderMenu(downloader.download, download.position, download.formats, visualization.container);
				});

			}
		}

		return visualization;
	}

	public function getLayout(id : String, options : Dynamic, container : Selection, replace : Bool)
	{
		var old = layouts.get(id);
		if (null != old)
		{
			if (replace)
				old.destroy();
			else
				return old;
		}
		var info = new InfoLayout().feed(options),
			layout = new FactoryLayout().create(info, container);
		layouts.set(id, layout);
		return layout;
	}
}