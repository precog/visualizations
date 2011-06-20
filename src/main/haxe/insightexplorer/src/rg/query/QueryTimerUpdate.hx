package rg.query;
import haxe.Timer;

/**
 * ...
 * @author Franco Ponticelli
 */

class QueryTimerUpdate 
{
	public var elapse : Int;
	public var paused(default, null) : Bool;
	
	var query : Query<Dynamic, Dynamic>;
	
	public function new(query : Query<Dynamic, Dynamic>, elapse = 5000) 
	{
		this.query = query;
		query.onClose.add(pause);
		this.elapse = elapse;
		paused = true;
		resume();
	}
	
	public function pause()
	{
		if (paused)
			return;
		paused = true;
	}
	
	public function resume()
	{
		if (!paused)
			return;
		paused = false;
		query.onComplete.addOnce(scheduleNext);
		query.load();
	}
	
	function scheduleNext()
	{
		if (paused)
			return;
		haxe.Timer.delay(execute, elapse);
	}
	
	function execute()
	{
		if (paused)
			return;
		query.onComplete.addOnce(scheduleNext);
		query.load();
	}
}