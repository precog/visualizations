/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.svg.panel;

import utest.Assert;
import thx.js.Selection;
import thx.js.Dom;
import rg.view.frame.Orientation;
import rg.view.frame.FrameLayout;

class TestPanel 
{
	var container : Selection;
	
	var space : Space;
	var cont1 : Container;
	var cont2  : Container;
	var panel1 : Panel;
	var panel2 : Panel;
	
	public function setup()
	{
		container = Dom.select("body").append("div");
		space = new Space(200, 150, container);
		// x: 0, y:10, w:200, h:140
		cont1 = space.createContainer(Fill(10, 0), Orientation.Horizontal);
		// x: 10, y:10, w:190, h:150
		cont2  = cont1.createContainer(Fill(10, 0), Orientation.Vertical);
		// x: 10, y:20, w:190, h:20
		panel1 = cont2.createPanel(Fixed(10, 0, 20));
		// x: 10, y:50, w:190, h:100
		panel2 = cont2.createPanel(Fill(10, 0));
	}
	
	public function teardown() container.remove()
	
	public function testBoundingBox()
	{
		Assert.same({
			x : 10,
			y : 50,
			width : 190,
			height : 100
		}, Panels.boundingBox(panel2));
		
		Assert.same({
			x : 10,
			y : 40,
			width : 190,
			height : 100
		}, Panels.boundingBox(panel2, cont1));
		
		Assert.same({
			x : 0,
			y : 40,
			width : 190,
			height : 100
		}, Panels.boundingBox(panel2, cont2));
	}
	
	public function ancestorBoundingBox()
	{
		Assert.same({
			x : -10,
			y : -50,
			width : 200,
			height : 150
		}, Panels.ancestorBoundingBox(panel2));
		
		Assert.same({
			x : -10,
			y : -40,
			width : 200,
			height : 140
		}, Panels.ancestorBoundingBox(panel2, cont1));
		
		Assert.same({
			x : -0,
			y : -40,
			width : 190,
			height : 140
		}, Panels.ancestorBoundingBox(panel2, cont2));
	}
	
	public function testRootSize()
	{
		Assert.same({ width : 200, height : 150 }, Panels.rootSize(panel2));
	}
	
	public function new() { }
}