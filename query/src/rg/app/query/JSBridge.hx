package rg.app.query;

import rg.data.DataPoint;
import rg.data.reportgrid.ReportGridExecutorMemoryCache;
import rg.query.ReportGridQuery;
import thx.math.Random;
import thx.date.DateParser;
import rg.util.Periodicity;

class JSBridge
{
	static function main()
	{
		var r : Dynamic = untyped __js__("(typeof ReportGrid == 'undefined') ? (ReportGrid = {}) : ReportGrid"),
			executor = new ReportGridExecutorMemoryCache(r);

		r.query = ReportGridQuery.create(executor);
		r.date  = {
			range : function(a : Dynamic, b : Dynamic, p : String) {
				if (Std.is(a, String))
					a = DateParser.parse(a);
				if (null == a)
					a = Periodicity.defaultRange(p)[0];
				if (Std.is(a, Date))
					a = a.getTime();

				if (Std.is(b, String))
					b = DateParser.parse(b);
				if (null == b)
					b = Periodicity.defaultRange(p)[1];
				if (Std.is(b, Date))
					b = b.getTime();
				return Periodicity.range(a, b, p);
			},
			parse : DateParser.parse,
			snap : Dates.snap
		};
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