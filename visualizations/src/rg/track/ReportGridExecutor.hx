/**
 * ...
 * @author Franco Ponticelli
 */

package rg.track;

import rg.data.source.rgquery.ITrackReportGrid;

class ReportGridExecutor implements ITrackReportGrid
{
	var rg : Dynamic;
	public function track(path : String, events : { }, success : Void -> Void, error : String -> Void, options : { tokenId : String })
	{
//		rg.track(path, events, success, error, token);
	}

	public function new()
	{
		rg = untyped __js__("ReportGrid");
	}
}