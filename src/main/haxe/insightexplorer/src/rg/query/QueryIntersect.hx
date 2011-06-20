package rg.query;

/**
 * ...
 * @author Franco Ponticelli
 */

import rg.query.Query;
import rg.util.Periodicity;
using Arrays;

class QueryIntersect<TData> extends QueryProperties<Dynamic<Dynamic>, TData> 
{
	override function executeLoad(success : Dynamic<Dynamic> -> Void, error : String -> Void)
	{
		var p = [];
		for (prop in properties)
		{
			if(prop.property != "#timestamp")
				p.push({
					property : prop.event + "." + prop.property,
					limit : prop.limit,
					order : prop.top ? "descending" : "ascending"
				});
		}
		executor.intersect(path, {
			start : time.start,
			end : time.end,
			periodicity : time.periodicity,
			properties : p
		}, success, error);
	}

	public static function forPivotTable(executor : IExecutor, path : String, properties : Array<{ event : String, property : String, top : Bool, limit : Int }>, propertiesForColumns : Int)
	{
		var query = new QueryIntersect<{
			column_headers : Array<String>,
			row_headers : Array<String>,
			columns : Array<{ values : Array<Dynamic>, calc : Calc }>,
			rows : Array<{ values : Array<Dynamic>, cells : Array<Dynamic>, calc : Calc}>,
			calc : Calc
		}>(executor, path, properties);
		
		var transformer = new PivotTableTransform(propertiesForColumns, query);
		query.transform = transformer.transform;
		return query;
	}
}

private class PivotTableTransform<TData>
{
	var columns : Int;
	var query : QueryIntersect<TData>;
	public function new(columns : Int, query : QueryIntersect<TData>)
	{
		this.columns = columns;
		this.query = query;
	}
	
	function queryHasTimeProperty()
	{
		return query.properties.any(function(v) return v.property == "#timestamp");
	}
	
	function timePropertyPosition()
	{
		for (i in 0...query.properties.length)
			if (query.properties[i].property == "#timestamp")
				return i;
		return -1;
	}
	
	public function transform(src : Dynamic)
	{
		var data : {
				column_headers : Array<String>,
				row_headers : Array<String>,
				columns : Array<{ values : Array<Dynamic>, calc : Calc }>,
				rows : Array<{ values : Array<Dynamic>, cells : Array<Dynamic>, calc : Calc}>,
				calc : Calc
			} = {
				column_headers : [],
				row_headers : [],
				columns : [],
				rows : [],
				calc : emptyCalc()
			},
			temp = Objects.flatten(src),
			values;

		if (queryHasTimeProperty())
		{
			var pos = timePropertyPosition(),
				properties = query.properties.slice(0, pos).map(function(d,i) return d.property)
					.concat([query.time.periodicity])
					.concat(query.properties.slice(pos).map(function(d,i) return d.property)),
				headers = data.column_headers;
			for (i in 0...properties.length)
			{
				if (i == columns)
					headers = data.row_headers;
				headers.push(properties[i]);
			}
			
			values = [];
			
			for (item in temp)
			{
				var arr : Array<Array<Dynamic>> = item.value;
				for (pair in arr)
				{
					var fields = item.fields.slice(0, pos)
						.concat([pair[0]])
						.concat(item.fields.slice(pos, -1));
					values.push({
						fields : fields,
						value : pair[1]
					});
				}
			}
		} else {
			data.column_headers = query.properties.slice(0, columns).map(function(d,i) return d.property);
			data.row_headers = query.properties.slice(columns).map(function(d,i) return d.property);
		
			values = temp.map(function(d, i) {
				return {
					fields : d.fields.slice(0, -1),
					// TODO: remove conditional once server is fixed
					value : d.value.length > 0 ? d.value[0][1] : 0
				};
			});
		}

		var rmap = new Hash(),
			cmap = new Hash(),
			rkey, ckey, rvalues, cvalues, item, row, col, value;
		for (i in 0...values.length)
		{
			item = values[i];
			value = item.value;
			
			cvalues = item.fields.slice(0, columns);
			ckey = cvalues.join("/");
			if (cmap.exists(ckey))
				col = cmap.get(ckey);
			else {
				col = {
					values : item.fields.slice(0, columns),
					calc : emptyCalc()
				};
				data.columns.push(col);
				cmap.set(ckey, col);
			}
			// set column calc
			if (col.calc.max < value)
				col.calc.max = value;
			if (col.calc.min > value)
				col.calc.min = value;
			col.calc.total += value;
				
			rvalues = item.fields.slice(columns);
			rkey = rvalues.join("/");
			if (rmap.exists(rkey))
				row = rmap.get(rkey);
			else {
				row = { values : rvalues, cells : [], calc : emptyCalc() };
				data.rows.push(row);
				rmap.set(rkey, row);
			}
			// set row calc
			if (row.calc.max < value)
				row.calc.max = value;
			if (row.calc.min > value)
				row.calc.min = value;
			row.calc.total += value;
			
			// set table calc
			if (data.calc.max < value)
				data.calc.max = value;
			if (data.calc.min > value)
				data.calc.min = value;
			data.calc.total += value;
			
			row.cells.push(item.value);
		}

		return data;
	}
	
	static function emptyCalc()
	{
		return {
			min : Math.POSITIVE_INFINITY,
			max : Math.NEGATIVE_INFINITY,
			total : 0.0
		};
	}
}
// {"iphone":{"hour":{"1239232323":293}},"android":{"hour":{"1239232323":155}},"blackberry":{"hour":{"1239232323":65}}}

typedef Calc = {
	min : Float,
	max : Float,
	total : Float
}