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
			[],
			""
		);
		assertParse(
			[Property(".click")],
			[],
			".click"
		);

		assertParse(
			[Property(".click.gender")],
			[Equality(".click.gender", "female")],
			".click.gender = 'female'"
		);

		assertParse(
			[Property(".click"), Time("hour")],
			[],
			".click * .#time:hour"
		);

		assertParse(
			[Property(".click", 10)],
			[],
			".click(10)"
		);

		assertParse(
			[Property(".click", 10, false)],
			[],
			".click(10, asc)"
		);

		assertParse(
			[Property(".click", 10, true)],
			[],
			".click(10,desc)"
		);
		//".click * .#time.hour"
		//".sale.amount:sum * .#time:day"
		//".click.ageRange * .click.gender * .#time.day"
	}

	public function testCleanName()
	{
		Assert.equals(".Spaced Name", QueryParser.cleanName(".'Spaced Name'"));
		Assert.equals(".Spaced Name.Spaced Name", QueryParser.cleanName(".'Spaced Name'.'Spaced Name'"));
		Assert.equals(".Spaced Name.Spaced Name.Spaced Name", QueryParser.cleanName(".'Spaced Name'.'Spaced Name'.'Spaced Name'"));
	}

	public function testQuotedProperty()
	{
		assertParse(
			[Property(".Spaced Event.Spaced Property")],
			[],
			'."Spaced Event"."Spaced Property"'
		);

		assertParse(
			[Property(".Spaced Event.Spaced Property")],
			[],
			".'Spaced Event'.'Spaced Property'"
		);

		assertParse(
			[Property(".Spaced Property")],
			[],
			'."Spaced Property"'
		);

		assertParse(
			[Property("Spaced Property")],
			[],
			"'Spaced Property'"
		);
	}

	function assertParse(exp : Array<QExp>, where : Array<QCondition>, s : String, ?pos : PosInfos)
	{
		var parser = new QueryParser();
		var expected = { exp : exp, where : where },
			test = parser.parse(s);
		Assert.same(expected, test, "expected: " + Dynamics.string(expected) + " but was " + Dynamics.string(test), pos);
	}

	public function new() { }
}