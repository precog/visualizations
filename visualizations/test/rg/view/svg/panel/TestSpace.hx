/**
 * ...
 * @author Franco Ponticelli
 */

package rg.svg.panel;

import utest.Assert;
import thx.js.Dom;
import thx.js.Selection;
import rg.frame.FrameLayout;
import rg.frame.Orientation;

class TestSpace 
{
	var container : Selection;
	public function setup()
	{
		container = Dom.select("body").append("div");
	}
	
	public function teardown()
	{
		container.remove();
	}
	
	public function testCreatePanelAppend()
	{
		var space = new Space(100, 100, container),
			fixed = space.createPanel(FrameLayout.Fixed(0, 0, 20));

		Assert.equals(0, fixed.frame.y);
		Assert.equals(20, fixed.frame.height);
		
		var fill = space.createPanel(FrameLayout.Fill(0, 0));
		Assert.equals(20, fill.frame.y);
		Assert.equals(80, fill.frame.height);
	}
	
	public function testCreatePanelInsert()
	{
		var space = new Space(100, 100, container),
			fixed = space.createPanel(FrameLayout.Fixed(0, 0, 20));
		Assert.equals(0, fixed.frame.y);
		Assert.equals(20, fixed.frame.height);
		
		var fill = space.createPanelAt(0, FrameLayout.Fill(0, 0));

		Assert.equals(0, fill.frame.y);
		Assert.equals(80, fill.frame.height);

		Assert.equals(80, fixed.frame.y);
		Assert.equals(20, fixed.frame.height);
	}
	
	public function testResize()
	{
		var space = new Space(50, 100, container),
			fill = space.createPanel(Fill(0, 0));
		Assert.equals(50, fill.frame.width);
		Assert.equals(100, fill.frame.height);
		space.resize(100, 200);
		Assert.equals(100, fill.frame.width);
		Assert.equals(200, fill.frame.height);
	}
	
	public function testLayerSize()
	{
		var space = new Space(50, 100, container),
			panel = space.createPanel(Fill(0, 0)),
			layer = new Layer(panel);

		Assert.equals(50, panel.frame.width);
		Assert.equals(100, panel.frame.height);
		
		Assert.equals(50 , layer.width);
		Assert.equals(100, layer.height);
		
		space.createPanel(Fill(0, 0));
		
		Assert.equals(50, layer.height);
		
		space.resize(100, 200);
		Assert.equals(100, panel.frame.width);
		Assert.equals(100, panel.frame.height);
		
		Assert.equals(100, layer.height);
	}
	
	public function testContainer()
	{
		var space = new Space(200, 200, container);
		space.createPanel(FillPercent(0, 0, .5));
		var cont = space.createContainer(FillPercent(0, 0, .5), Orientation.Horizontal);
		
		cont.createPanel(FillPercent(0, 0, .5));
		var sub  = cont.createContainer(FillPercent(0, 0, .5), Orientation.Vertical);
			
		var panel1 = sub.createPanel(Fill(0, 0)),
			panel2 = sub.createPanel(Fill(0, 0));
		
		Assert.equals(0, panel1.frame.x);
		Assert.equals(0, panel1.frame.y);
		
		Assert.equals(100, panel1.frame.width);
		Assert.equals(50, panel1.frame.height);
		
		Assert.equals(0, panel2.frame.x);
		Assert.equals(50, panel2.frame.y);
		
		Assert.equals(100, panel2.frame.width);
		Assert.equals(50, panel2.frame.height);
		
		space.resize(400, 400);
		
		Assert.equals(200, panel1.frame.width);
		Assert.equals(100, panel1.frame.height);
		
		Assert.equals(100, panel2.frame.y);
		
		Assert.equals(200, panel2.frame.width);
		Assert.equals(100, panel2.frame.height);
	}
	
	public function new() {}
}