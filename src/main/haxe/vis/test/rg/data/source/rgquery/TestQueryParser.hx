/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.source.rgquery;

import haxe.PosInfos;
import utest.Assert;
import rg.data.source.rgquery.QueryAst;

class TestQueryParser 
{
	public function test() 
	{
		assertParse(
			[Event],
			QOperation.Count,
			[],
			""
		);
		assertParse(
			[Property(".click")],
			QOperation.Count,
			[],
			".click"
		);

		assertParse(
			[Property(".click.gender")],
			QOperation.Count,
			[Equality(".click.gender", "female")],
			".click.gender = 'female'"
		);
		
		assertParse(
			[Property(".click"), Time("hour")],
			QOperation.Count,
			[],
			".click * .#time:hour"
		);
		
		assertParse(
			[Property(".click", 10)],
			QOperation.Count,
			[],
			".click(10)"
		);
		
		assertParse(
			[Property(".click", 10, false)],
			QOperation.Count,
			[],
			".click(10, asc)"
		);
		
		assertParse(
			[Property(".click", 10, true)],
			QOperation.Count,
			[],
			".click(10,desc)"
		);
		//".click * .#time.hour"
		//".sale.amount:sum * .#time:day"
		//".click.ageRange * .click.gender * .#time.day"
	}
	
	function assertParse(exp : Array<QExp>, operation : QOperation, where : Array<QCondition>, s : String, ?pos : PosInfos)
	{
		var parser = new QueryParser();
		var expected = { exp : exp, operation : operation, where : where },
			test = parser.parse(s);
		Assert.same(expected, test, "expected: " + Dynamics.string(expected) + " but was " + Dynamics.string(test), pos);
	}
	
	public function new() { }
}