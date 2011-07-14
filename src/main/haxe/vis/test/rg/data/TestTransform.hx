/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;

import rg.util.Periodicity;
import utest.Assert;
import rg.data.source.DataSourceArray;
import thx.collections.HashList;
using Objects;
using Arrays;

class TestTransform 
{
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
		
		var injectValues = [false, true, false],
			iv : Array<VariableIndependent<Dynamic>> = [],
			periodicity = "hour";
			
		iv.push(VariableIndependent.forTime(".#time:hour", periodicity, start, end));
		iv.push(VariableIndependent.forOrdinal(".ageRange"));
		iv.push(VariableIndependent.forOrdinal(".gender", ["male", "female"]));

		var sources = new Sources(src),
			processor = new DataProcessor(sources);
		processor.defaultSegment = "default";
		processor.independentVariables = iv;
		processor.variablesToFill = injectValues;
		
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
				properties : ({}).addFields([".#time:hour", ".ageRange", ".gender", "count"], [1310450400000, "1-12", "male", 2])
			}, {
				event : "impression",
				properties : ({}).addFields([".#time:hour", ".ageRange", ".gender", "count"], [1310454000000, "13-20", "female", 2])
			}, {
				event : "impression",
				properties : ({}).addFields([".#time:hour", ".ageRange", ".gender", "count"], [1310457600000, "21+", "male", 2])
			}];
			Assert.same(expected, data.get("default"));
		});
		
		sources.load();
	}
	
	public function new() { }
}