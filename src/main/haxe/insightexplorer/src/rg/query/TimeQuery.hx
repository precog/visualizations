package rg.query;

import hxevents.Dispatcher;
import rg.util.Periodicity;
import thx.error.Error;
import rg.query.DateLimit;

class TimeQuery 
{

	public var periodicity(default, setPeriodicity) : String;
	public var onChangePeriodicity(default, null) : Dispatcher<String>;
	public var onChangeRange(default, null) : Dispatcher<{ start : Null<Date>, end : Null<Date> }>;
	public var startLimit : DateLimit;
	public var endLimit : DateLimit;
	public var autosetPeriodicity : Bool;
	public var start(default, null) : Null<Date>;
	public var end(default, null) : Null<Date>;
	
	public function new() 
	{
		onChangePeriodicity = new Dispatcher();
		onChangeRange = new Dispatcher();
		startLimit = NoLimit;
		endLimit = NoLimit;
		autosetPeriodicity = true;
		this.periodicity = "eternity";
	}
	
	public function close()
	{
		onChangePeriodicity.clear();
		onChangeRange.clear();
	}
	
	public function update()
	{
		var s = getDateLimit(startLimit),
			e = getDateLimit(endLimit),
			ts : Null<Float> = s == null ? null : s.getTime(),
			te : Null<Float> = e == null ? null : e.getTime(),
			now = Date.now().getTime();
		
		if (ts != null && te != null && ts > te)
		{
			var td = s, tt = ts;
			s = e; e = td;
			ts = te; te = tt;
		}
		
		if (te != null && te > now)
			e = Date.fromTime(te = now);
		
		if (ts != null && ts > now)
			s = Date.fromTime(ts = now - 60000);
		
		var trigger =
			   (null == start && null != ts) || (null != start && start.getTime() != ts)
			||
			   (null == end && null != te) || (null != end && end.getTime() != te);
		if (trigger)
			onChangeRange.dispatch( { start : start = s, end : end = e } );
		
		if (autosetPeriodicity)
			periodicity = Periodicity.calculateBetween(start, end);
	}
	
	function getDateLimit(limit : DateLimit) : Null<Date>
	{
		switch(limit)
		{
			case NoLimit: return null;
			case FixedLimit(d): return d;
			case VariableLimit(f): return f();
		}
	}
	
	function setPeriodicity(v : String)
	{
		if (null == v)
			v = "eternity";
		else {
			v = v.toLowerCase();
			if (!Periodicity.isValid(v))
				throw new Error("invalid periodicity '{0}'", v);
		}
		
		if (v != periodicity)
			onChangePeriodicity.dispatch(periodicity = v);

		return this.periodicity;
	}
}