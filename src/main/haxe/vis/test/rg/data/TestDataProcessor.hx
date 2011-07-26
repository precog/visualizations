/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;

import rg.util.Periodicity;
import rg.data.source.DataSourceArray;
import thx.collections.HashList;
import utest.Assert;
using Objects;

class TestDataProcessor 
{
	public function testOnData()
	{
		var cache = new Hash();
		var datasources : Array<IDataSource> = cast [new DataSourceArray([{ properties : ({}).addField("count", 100), event : "click", segment : null }])];
		var sources = new Sources(datasources);
		var processor = new DataProcessor(sources);
		var datacontexts = [new DataContext("count", processor)];
		var request = new DataRequest(cache, datacontexts);

		processor.independentVariables = [];
		processor.dependentVariables = [new VariableDependentContext(new VariableDependent("count"), true)];

		processor.onData.add(function(d) {
			Assert.same([{
				properties : {
					count : 100,
				},
				event : "click",
				segment : null
			}], d);
		});
		sources.load();
	}

	public function testFillVariable()
	{
		var ds = new DataSourceArray([
			{ properties : { gender : "male", count : 2 }, event : "click", segment : null },
			{ properties : { gender : "female", count : 3 }, event : "click", segment : null }
		]),
			sources = new Sources(cast [ds]),
			processor = new DataProcessor(sources),
			vi : VariableIndependent<Dynamic>, vd : VariableDependent<Dynamic>;
		processor.independentVariables = [
			new VariableIndependentContext(vi = new VariableIndependent("gender", new AxisOrdinal()), true)
		];
		processor.dependentVariables = [
			new VariableDependentContext(vd = new VariableDependent("count", new AxisNumeric()), true)
		];
		processor.onData.add(function(d) {
			Assert.equals("male", vi.min);
			Assert.equals("female", vi.max);
			Assert.same(["male", "female"], vi.range());
			
			Assert.equals(2, vd.min);
			Assert.equals(3, vd.max);
		});
		sources.load();
	}
	
	public function testTransform()
	{
		var samples = 10,
			start = Date.fromString("2011-07-12 00:00:00").getTime(),
			end = Date.fromString("2011-07-12 02:00:00").getTime(),
			trange = Periodicity.range(start, end, "hour"),
			vrange = Ints.range(trange.length),
			ageRanges = ["1-12", "13-20", "21+"],
			genders = ["male", "female"],
			defaultAxis = "count",
			defaultSegment = "default";

		var src : Array<IDataSource> = [];
		src.push(DataSourceArray.fromValues(vrange, "impression", function(d, i) {
			return ( { } )
				.addField(".#time:hour", trange[i])
				.addField(".ageRange", ageRanges[i % ageRanges.length])
				.addField(".gender", genders[i % genders.length])
				.addField("count", d)
			;
		}));
		vrange.reverse();
		src.push(DataSourceArray.fromValues(vrange, "impression", function(d, i) {
			return ( { } )
				.addField(".#time:hour", trange[i])
				.addField(".ageRange", ageRanges[i % ageRanges.length])
				.addField(".gender", genders[i % genders.length])
				.addField("count", d)
			;
		}));
		
		var iv : Array<VariableIndependentContext<Dynamic>> = [],
			dv : Array<VariableDependentContext<Dynamic>> = [],
			periodicity = "hour";
			
		iv.push(new VariableIndependentContext(VariableIndependent.forTime(".#time:hour", periodicity, start, end), false));
		iv.push(new VariableIndependentContext(VariableIndependent.forOrdinal(".ageRange"), true));
		iv.push(new VariableIndependentContext(VariableIndependent.forOrdinal(".gender", ["male", "female"]), false));
		
		dv.push(new VariableDependentContext(new VariableDependent("count", new AxisNumeric(), 0, 10), false));

		var sources = new Sources(src),
			processor = new DataProcessor(sources);
		processor.independentVariables = iv;
		processor.dependentVariables = dv;
		
		processor.transform = function(sets : Array<Array<DataPoint>>)
		{
			var set = Arrays.flatten(sets);
			var el = set[0].clone();
			el.properties.count = 0;
			for (item in set)
				el.properties.count += item.properties.count;
			return cast [el];
		}
		
		processor.onData.add(function(data) {
			var expected = [{
				event : "impression",
				properties : ({}).addFields([".#time:hour", ".ageRange", ".gender", "count"], [1310450400000, "1-12", "male", 2]),
				segment : null
			}, {
				event : "impression",
				properties : ({}).addFields([".#time:hour", ".ageRange", ".gender", "count"], [1310454000000, "13-20", "female", 2]),
				segment : null
			}, {
				event : "impression",
				properties : ({}).addFields([".#time:hour", ".ageRange", ".gender", "count"], [1310457600000, "21+", "male", 2]),
				segment : null
			}];
			Assert.same(expected, data);
		});
		
		sources.load();
	}
	
	public function new() { }
}