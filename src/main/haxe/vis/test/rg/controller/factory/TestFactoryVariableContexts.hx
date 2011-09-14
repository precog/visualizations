/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.factory;

import rg.controller.info.InfoVariable;
import thx.collection.Set;
import utest.Assert;
using rg.controller.info.Info;
 
class TestFactoryVariableContexts
{
	
	public function testCreateIndependentContextsNotPartialWithTime()
	{
		var factory = new FactoryVariableContexts(Set.ofArray([".#time:hour"])),
			iv : Array<InfoVariable> = [new InfoVariable().feed( { type : ".#time:hour" } )],
			inds = factory.createIndependents(iv),
			ctx = inds[0];
		Assert.notNull(ctx);
		Assert.notNull(ctx.variable);
		Assert.isFalse(ctx.partial);
		Assert.notNull(ctx.variable.axis);
	}
	
	public function testCreateIndependentContextsPartial()
	{
		var factory = new FactoryVariableContexts(Set.ofArray(["count"])),
			iv : Array<InfoVariable> = [new InfoVariable().feed( { type : "count" } )],
			inds = factory.createIndependents(iv),
			ctx = inds[0];
		Assert.notNull(ctx);
		Assert.notNull(ctx.variable);
		Assert.isTrue(ctx.partial);
		Assert.notNull(ctx.variable.axis);
	}
	
	public function testCreateDependentContextsPartial()
	{
		var factory = new FactoryVariableContexts(Set.ofArray([".#time:hour"])),
			dv : Array<InfoVariable> = [new InfoVariable().feed( { type : "count"} )],
			deps = factory.createDependents(dv),
			ctx = deps[0];
		Assert.notNull(ctx);
		Assert.notNull(ctx.variable);
		Assert.isTrue(ctx.partial);
		Assert.isNull(ctx.variable.axis);
	}
	
	public function testCreateIndependentContextsNotPartial()
	{
		var factory = new FactoryVariableContexts(Set.ofArray([".#time:hour"])),
			iv : Array<InfoVariable> = [new InfoVariable().feed( { 
				type : ".#time:hour",
				view : ["yesterday", "now"]
			} )],
			inds = factory.createIndependents(iv),
			ctx = inds[0];
		Assert.notNull(ctx);
		Assert.notNull(ctx.variable);
		Assert.isFalse(ctx.partial);
		Assert.notNull(ctx.variable.axis);
	}
	
	public function testCreateDependentContextsNotPartial()
	{
		var factory = new FactoryVariableContexts(Set.ofArray([".#time:hour"])),
			dv : Array<InfoVariable> = [new InfoVariable().feed( { 
				type : "count",
				view : [0, 100]
			} )],
			deps = factory.createDependents(dv),
			ctx = deps[0];
		Assert.notNull(ctx);
		Assert.notNull(ctx.variable);
		Assert.isFalse(ctx.partial);
		Assert.notNull(ctx.variable.axis);
	}
	
	public function new() {}
}