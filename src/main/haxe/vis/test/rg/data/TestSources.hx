/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;

import utest.Assert;
import rg.data.source.ArrayDataSource;

class TestSources 
{
	public function testChain()
	{
		var data : Array<IDataSource<Dynamic>> = cast [
			ArrayDataSource.fromValues([1, 2, 3], function(d, i) return { id : null, predicates : { pos : i }, value : d, unit : "count" } ),
			ArrayDataSource.fromValues(['a', 'b', 'c'], function(d, i) return { id : null, predicates : { char : d }, value : i, unit : "pos" } )
		];
		var sources = new ChartSources(data, "axis", "segment");
	/*	
		sources.onLoad.add(function(data) {
			trace(data);
		});
	*/
	}

	public function new() { }
}