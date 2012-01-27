package rg.app.query;

import rg.data.DataPoint;
import rg.data.reportgrid.ReportGridExecutorMemoryCache;
import rg.query.ReportGridQuery;
import thx.math.Random;

class JSBridge
{
	static function main()
	{
		var r : Dynamic = untyped __js__("(typeof ReportGrid == 'undefined') ? (ReportGrid = {}) : ReportGrid"),
			executor = new ReportGridExecutorMemoryCache(r);

		r.query = ReportGridQuery.create(executor);

		r.info = null != r.info ? r.info : { };
		r.info.query = {
			version : thx.util.MacroVersion.fullVersion()
		};

		var rand = new Random(666);
		r.math = {
			setRandomSeed : function(s) rand = new Random(s),
			random : function() return rand.float()
		}
	}

	static inline function opt(ob : Dynamic) return null == ob ? { } : Objects.clone(ob)
}