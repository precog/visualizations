/**
 * ...
 * @author Franco Ponticelli
 */

package rg.frame;

import haxe.PosInfos;
import utest.Assert;
import rg.frame.FrameLayout;
import rg.frame.Orientation;
using Iterators;

class TestStack 
{
	var count : Int;
	public function setup()
	{
		count = 0;
	}
	
	function increment() count++
	
	function item(layout : FrameLayout)
	{
		var i = new StackItem(layout);
		i.change = increment;
		return i;
	}
	
	function assertReflows(expected : Int, ?pos : PosInfos)
	{
		Assert.equals(expected, count, pos);
		count = 0;
	}
	
	public function testAddMany()
	{
		var stack = new Stack(50, 100, Vertical),
			items = [
				item(Fill(0, 0)),
				item(Fixed(0, 0, 40)),
				item(Fill(0,0))
			];
		stack.addItems(items);
		
		Assert.equals(0 , items[0].y);
		Assert.equals(30, items[0].height);
		
		Assert.equals(30, items[1].y);
		Assert.equals(40, items[1].height);
		
		Assert.equals(70, items[2].y);
		Assert.equals(30, items[2].height);
	}
	
	public function testAdd() 
	{
		var stack = new Stack(50, 100, Vertical),
			first = item(Fill(5, 10));
		Assert.equals(0, first.x);
		Assert.equals(0, first.y);
		Assert.equals(0, first.width);
		Assert.equals(0, first.height);
		
		stack.addItem(first);
		
		assertReflows(1);
		
		Assert.equals(0,  first.x);
		Assert.equals(5,  first.y);
		Assert.equals(50, first.width);
		Assert.equals(85, first.height);
		
		var second = item(Fixed(5, 10, 20));
		
		stack.addItem(second);
		
		assertReflows(2);
		
		Assert.equals(0,  first.x);
		Assert.equals(5,  first.y);
		Assert.equals(50, first.width);
		Assert.equals(50, first.height);
		
		Assert.equals(0,  second.x);
		Assert.equals(70, second.y);
		Assert.equals(50, second.width);
		Assert.equals(20, second.height);
		
		var third = item(FrameLayout.FillPercent(5, 10, 0.1));
		
		stack.addItem(third);
		assertReflows(3);
		
		Assert.equals(0,  first.x);
		Assert.equals(0,  second.x);
		Assert.equals(0,  third.x);
		Assert.equals(50, first.width);
		Assert.equals(50, second.width);
		Assert.equals(50, third.width);

		Assert.equals(5,  first.y);
		Assert.equals(25, first.height);
		Assert.equals(45, second.y);
		Assert.equals(20, second.height);
		Assert.equals(80, third.y);
		Assert.equals(10, third.height);
	}
	
	public function testInsert()
	{
		var stack  = new Stack(50, 100, Vertical),
			first  = item(Fill(5, 10)),
			second = item(Fixed(5, 10, 20)),
			third  = item(Fixed(5, 10, 20)),
			size;
		
		stack.addItem(first);
		stack.insertItem(0, second);
		assertReflows(3);
		
		Assert.equals(40,  first.y);
		Assert.equals(50, first.height);
		
		Assert.equals(5,  second.y);
		Assert.equals(20, second.height);
		
		stack.insertItem(1, third);
		assertReflows(2);
		
		Assert.equals(75,  first.y);
		Assert.equals(15, first.height);
		
		Assert.equals(5,  second.y);
		Assert.equals(20, second.height);
		
		Assert.equals(40,  third.y);
		Assert.equals(20, third.height);
	}
	
	public function testHorizontal()
	{
		var stack = new Stack(50, 100, Horizontal),
			first = item(Fill(5, 10));

		stack.addItem(first);
		
		Assert.equals(5,  first.x);
		Assert.equals(0,  first.y);
		Assert.equals(35, first.width);
		Assert.equals(100, first.height);
	}
	
	public function testFloating()
	{
		var stack  = new Stack(50, 100, Vertical),
			first  = item(Fill(5, 10)),
			second = item(Floating(20,25,30,35));

		stack.addItem(first);
		stack.addItem(second);
		assertReflows(2);
		
		Assert.equals(5,  first.y);
		Assert.equals(85, first.height);
		
		Assert.equals(25, second.y);
		Assert.equals(35, second.height);
	}
	
	public function new() { }
}