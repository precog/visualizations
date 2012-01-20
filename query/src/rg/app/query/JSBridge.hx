package rg.app.query;

import rg.app.query.App;
import rg.app.query.MVPOptions;
import rg.data.DataPoint;
import rg.data.source.rgquery.ReportGridExecutorMemoryCache;

class JSBridge
{
	static function main()
	{
		var r : Dynamic = untyped __js__("(typeof ReportGrid == 'undefined') ? (ReportGrid = {}) : ReportGrid"),
			executor = new ReportGridExecutorMemoryCache(r),
			app = new App(executor);

		r.query = function(?options : Dynamic) {
			options = opt(options);
			return function(handler : Array<DataPoint> -> Void)
			{
				trace(handler);
				MVPOptions.complete(executor, options, function(opt : Dynamic)
				{
					trace(options);
					trace(handler);
					app.query(opt, handler);
				});
			}
		};

		r.info = null != r.info ? r.info : { };
		r.info.query = {
			version : thx.util.MacroVersion.fullVersion()
		};
	}

	static inline function opt(ob : Dynamic) return null == ob ? { } : Objects.clone(ob)
}