/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.reportgrid;

interface ITrackReportGrid 
{
	public function track(path : String, events : { }, success : Void -> Void, error : String -> Void, options : Null<{ tokenId : String }> ) : Void;
}