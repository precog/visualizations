/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller;
import rg.controller.factory.FactoryLayout;
import rg.controller.factory.FactoryVariable;
import rg.controller.info.InfoDataContext;
import rg.controller.info.InfoDomType;
import rg.controller.info.InfoDownload;
import rg.controller.info.InfoGeneral;
import rg.controller.info.InfoLayout;
import rg.controller.info.InfoLogo;
import rg.controller.info.InfoTrack;
import rg.controller.info.InfoVisualizationType;
import rg.controller.interactive.Downloader;
import rg.controller.visualization.Visualization;
import rg.data.DataRequest;
import thx.error.Error;
import thx.error.NotImplemented;
import thx.js.Selection;
import rg.controller.info.InfoVisualizationOption;
import rg.controller.factory.FactoryDataContext;
import rg.controller.factory.FactoryDataSource;
import rg.data.DataPoint;
import rg.data.VariableDependent;
import rg.data.VariableIndependent;
import rg.view.layout.Layout;
import rg.controller.factory.FactoryHtmlVisualization;
import rg.controller.factory.FactorySvgVisualization;
import rg.view.html.widget.DownloaderMenu;
import rg.view.html.widget.Logo;
using rg.controller.info.Info;
using Arrays;

class App
{
	static var lastid = 0;
	static function nextid()
	{
		return ":RGVIZ-" + (++lastid);
	}

	var layouts : Hash<Layout>;
	public function new()
	{
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
		var factoryDataSource = new FactoryDataSource(cache);
		var factoryDataContext = new FactoryDataContext(factoryDataSource);
		var datacontexts = params.data.map(function(d : InfoDataContext, _) return factoryDataContext.create(d));
		var factoryVariableContexts = FactoryVariable.createFromDataContexts(datacontexts);
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

		// download
		var download = new InfoDownload().feed(jsoptions.options.download);
		if(!supportsSvg())
		{
			var downloader = new Downloader(visualization.container, download.service, download.background);
			visualization.addReadyOnce(function() {
				downloader.download("png", "#ffffff", function(url : String) {
					visualization.container.selectAll("*").remove();
					visualization.container.append("img")
						.attr("src").string(url);
					return false;
				}, null);
			});
		} else if (null != download.position || null != download.handler)
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

		var infologo = new InfoLogo().feed(jsoptions.options);
		visualization.addReadyOnce(function()
		{
			var widget = new Logo(visualization.container, infologo.darkbackground, infologo.position);
		});

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

	public static function supportsSvg() : Bool
	{
		return untyped __js__("!!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect");
	}
}