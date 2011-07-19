/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.build;

import rg.controller.info.InfoDataSource;
import utest.Assert;

class TestBuilderDataSource 
{
	public function testRGQuery() 
	{
		var builder = new BuilderDataSource(),
			info = new InfoDataSource( { } );
		trace(builder.build(info));
	}
	
	public function testArraySource()
	{
		
	}
	
	public function new() { }
}