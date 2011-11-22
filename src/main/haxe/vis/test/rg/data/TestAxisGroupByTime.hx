/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;

import utest.Assert;

class TestAxisGroupByTime
{
	public function testYear()
	{
		var values = AxisGroupByTime.valuesByGroup("year");
		Assert.same(Ints.range(1, 365), values);
	}

	public function testMonth()
	{
		var values = AxisGroupByTime.valuesByGroup("month");
		Assert.same(Ints.range(1, 12), values);
	}

	public function testWeek()
	{
		var values = AxisGroupByTime.valuesByGroup("week");
		Assert.same(Ints.range(1, 7), values);
	}

	public function testDay()
	{
		var values = AxisGroupByTime.valuesByGroup("day");
		Assert.same(Ints.range(1, 31), values);
	}

	public function testHour()
	{
		var values = AxisGroupByTime.valuesByGroup("hour");
		Assert.same(Ints.range(1, 24), values);
	}

	public function testMinute()
	{
		var values = AxisGroupByTime.valuesByGroup("minute");
		Assert.same(Ints.range(1, 60), values);
	}

	public function new() { }
}