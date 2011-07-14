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
			end = Date.fromString("2011-07-12 12:00:00").getTime(),
			trange = Periodicity.range(start, end, "hour"),
			vrange = Ints.range(trange.length),
			ageRanges = ["1-13", "14-17", "18-20", "21+"],
//			ages = [8,14,15,20,25,39],
			genders = ["male", "female"],
			defaultAxis = "count",
			defaultSegment = "default";

		var src : Array<IDataSource> = [];
		src.push(DataSourceArray.fromValues(vrange, "count", "impression", function(d, i) {
			return ( { } )
				.addField(".#time:hour", trange[i])
				.addField(".ageRange", ageRanges[i % ageRanges.length])
				.addField(".gender", genders[i % genders.length])
			;
		}));
		vrange.reverse();
		src.push(DataSourceArray.fromValues(vrange, "count", "impression", function(d, i) {
			return ( { } )
				.addField(".#time:hour", trange[i])
				.addField(".ageRange", ageRanges[i % ageRanges.length])
				.addField(".gender", genders[i % genders.length])
			;
		}));
		
		var iv : Array<VariableIndependent<Dynamic>> = [];
			
			// TODO: build values if not available from the config
			// TODO: guess limits if not availavle from the config
			
			iv.push(new VariableIndependent(".#time:hour",
				new AxisTime("hour"),
				start, end));
			iv.push(new VariableIndependent(".ageRange",
				new AxisOrdinal(["1-13", "14-17", "18-20", "21+"]),
				"1-13", "21+"));
			iv.push(new VariableIndependent(".gender",
				new AxisOrdinal(["male", "female"]),
				"male", "female"));
		
		var sources = new Sources(src),
			processor = new DataProcessor(sources);
		processor.defaultAxis = "count";
		processor.defaultSegment = "default";
		processor.independentVariables = iv;
		
		sources.load();
	}
	
	public function new() { }
}