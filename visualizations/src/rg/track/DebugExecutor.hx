/**
 * ...
 * @author Franco Ponticelli
 */

package rg.track;
import haxe.Firebug;
import rg.data.source.rgquery.ITrackReportGrid;

class DebugExecutor implements ITrackReportGrid
{
	public function track(path : String, events : { }, ?success : Void -> Void, ?error : String -> Void, ?token : String)
	{
		Firebug.trace("path: " + path + ", token: " + token + "\n" + Dynamics.string(events));
	}
	
	public function new() { }
}