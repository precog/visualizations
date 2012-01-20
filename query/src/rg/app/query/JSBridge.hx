package rg.app.query;

import rg.data.DataPoint;
import rg.data.reportgrid.ReportGridExecutorMemoryCache;

class JSBridge
{
	static function main()
	{
		var r : Dynamic = untyped __js__("(typeof ReportGrid == 'undefined') ? (ReportGrid = {}) : ReportGrid"),
			executor = new ReportGridExecutorMemoryCache(r),
			app = new App(executor);

		r.query = function(?options : Dynamic) {
			options = opt(options);
			var params = null;
			MVPOptions.complete(executor, options, function(opt : Dynamic)
			{
				params = opt;
			});
			function queue(handler : Array<DataPoint> -> Void)
			{
				if(null == params)
				{
					haxe.Timer.delay(callback(queue, handler), 30);
					return;
				}
				app.query(params, handler);
			}
			return queue;
		};

		r.info = null != r.info ? r.info : { };
		r.info.query = {
			version : thx.util.MacroVersion.fullVersion()
		};
	}

	static inline function opt(ob : Dynamic) return null == ob ? { } : Objects.clone(ob)
}