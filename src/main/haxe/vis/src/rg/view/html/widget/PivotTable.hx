/**
 * ...
 * @author Franco Ponticelli
 */

package rg.view.html.widget;
import rg.data.Stats;
import thx.color.Hsl;
import rg.data.DataPoint;
import thx.js.Selection;
import rg.util.RGStrings;
import rg.util.Periodicity;
import thx.color.Rgb;
import rg.data.VariableDependent;
import rg.data.VariableIndependent;
import rg.util.DataPoints;
import thx.culture.FormatNumber;
import thx.js.Access;
import rg.util.Properties;
using Strings;
using Arrays;

// TODO add sorting (probably in VisualizationPivotTable)
class PivotTable 
{
	static var defaultColorStart = new Hsl(210, 1, 1);
	static var defaultColorEnd   = new Hsl(210, 1, 0.5);
	
	public var displayColumnTotal : Bool;
	public var displayRowTotal : Bool;
	public var displayHeatMap : Bool;
	public var colorStart : Hsl;
	public var colorEnd : Hsl;
	
	public var columnVariables : Array<VariableIndependent<Dynamic>>;
	public var rowVariables : Array<VariableIndependent<Dynamic>>;
	public var cellVariable : VariableDependent<Dynamic>;
	
	public var click : DataPoint -> Void;
	
	var container : Selection;
	var stats : Stats;
	
	public function new(container : Selection) 
	{
		this.container = container;
		
		displayColumnTotal = true;
		displayRowTotal = true;
		displayHeatMap = true;
		colorStart = defaultColorStart;
		colorEnd = defaultColorEnd;
	}
	
	public dynamic function labelDataPoint(dp : DataPoint, stats : Stats)
	{
		var v = DataPoints.value(dp, cellVariable.type);
		return FormatNumber.int(v);
	}
	
	public dynamic function labelDataPointOver(dp : DataPoint, stats : Stats)
	{
		var v = DataPoints.value(dp, cellVariable.type);
		return FormatNumber.percent(100 * v / stats.tot, 1);
	}
	
	public dynamic function labelAxis(v : String)
	{
		return Properties.humanize(v);
	}
	
	public dynamic function labelAxisValue(v : Dynamic, axis : String)
	{
		if (Properties.isTime(axis))
		{
			var p = Properties.periodicity(axis);
			return Periodicity.format(p, v);
		} else
			return RGStrings.humanize(v);
	}
	
	
	public dynamic function labelTotal(v : Float, stats : Stats)
	{
		return FormatNumber.int(v);
	}
	
	public dynamic function labelTotalOver(v : Float, stats : Stats)
	{
		return FormatNumber.percent(100 * v / stats.tot, 1);
	}
	
	public function data(dps : Array<DataPoint>)
	{
		var d = transformData(dps),
			table = container.append("table").classed().add("pivot-table"),
			thead = table.append("thead"),
			leftspan = d.rows.length > 0 ? d.rows[0].values.length : 0,
			color = Hsl.interpolatef(colorStart, colorEnd);
		stats = d.stats;

		// HEADER
		if (d.columns.length > 0)
		{
			for (i in 0...d.column_headers.length)
			{
				var tr = thead.append("tr");
				prependSpacer(leftspan, tr);
					
				var header = tr
						.append("th")
						.attr("class").string("col-header")
						.text().string(labelAxis(d.column_headers[i]));
				if(d.columns.length > 1)
					header.attr("colspan").float(d.columns.length);
					
				var counter = 1, last = d.columns[0].values[i];
				
				tr = thead.append("tr");
				
				if (i == d.column_headers.length - 1)
				{
					for (h in d.row_headers)
					{
						tr
							.append("th")
							.attr("class").string("row-header")
							.text().string(labelAxis(h));
					}
				} else
					prependSpacer(leftspan, tr);

				for (j in 1...d.columns.length)
				{
					var value = d.columns[j].values[i];
					if (last == value)
					{
						counter++;
					} else {
						buildValue(last, d.column_headers[i], counter, tr);
						counter = 1;
						last = value;
					}
				}
				if (null != last)
				{
					buildValue(last, d.column_headers[i], counter, tr);
				}
			}
		}
		
		if(d.column_headers.length == 0)
		{
			var tr = thead.append("tr");
			for (h in d.row_headers)
			{
				tr
					.append("th")
					.attr("class").string("row header")
					.text().string(labelAxis(h));
			}
		}
		
		// BODY
		var tbody = table.append("tbody"),
			last = [];
		for (row in d.rows)
		{
			var tr = tbody.append("tr"),
				len = row.values.length;
			for (i in 0...len)
			{
				var v = row.values[i],
					rep = v == last[i];
				if (!rep)
				{
					last[i] = v;
					for (j in i + 1...len)
						last[j] = null;
				}
				tr.append("th")
					.attr("class").string(rep ? "row value empty" : "row value")
					.text().string(rep ? "" : labelAxisValue(v, d.row_headers[i]));
			}
			
			for (cell in row.cells)
			{
				var td = tr.append("td")
					.text().string(formatDataPoint(cell))
					.attr("title").string(formatDataPointOver(cell));
				if (null != click)
					td.onNode("click", callback(onClick, cell));
				if (displayHeatMap)
				{
					var c = color(DataPoints.value(cell, cellVariable.type) / d.stats.max);
					td
						.style("background-color").color(c)
						.style("color").color(Rgb.contrastBW(c));
				}
			}
			
			if (displayRowTotal && d.columns.length > 1)
				tr.append("th")
					.attr("class").string("row total")
					.text().string(formatTotal(row.stats.tot))
					.attr("title").string(formatTotalOver(row.stats.tot));
		}
		
		// FOOT
		var tfoot = table.append("tfoot");
		
		if (displayColumnTotal && d.rows.length > 1)
		{
			var tr = tfoot.append("tr");
			prependSpacer(leftspan, tr);
			for (col in d.columns)
			{
				tr.append("th")
					.attr("class").string("column total")
					.text().string(formatTotal(col.stats.tot))
					.attr("title").string(formatTotalOver(col.stats.tot));
			}
			
			if(displayRowTotal && d.columns.length > 1)
				tr.append("th")
					.attr("class").string("table total")
					.text().string(formatTotal(d.stats.tot))
					.attr("title").string(formatTotalOver(d.stats.tot));
		}
	}
	
	function onClick(dp, ?_, ?_)
	{
		click(dp);
	}
	
	function formatTotal(v : Float, ?_) return labelTotal(v, stats)
	function formatTotalOver(v : Float, ?_) return labelTotalOver(v, stats)
	function formatDataPoint(dp : DataPoint, ?_) return labelDataPoint(dp, stats)
	function formatDataPointOver(dp : DataPoint, ?_) return labelDataPointOver(dp, stats)

	function buildValue(value : Dynamic, header : String, counter : Int, tr : Selection)
	{
		var th = tr
			.append("th")
			.attr("class").string("column value")
			.text().string(labelAxisValue(value, header));
		if (counter > 1)
			th.attr("colspan").float(counter);
	}
	
	function prependSpacer(counter : Int, tr : Selection)
	{
		if (counter == 0)
			return;
		var th = tr.append("th")
			.attr("class").string("spacer");
		if (counter > 1)
			th.attr("colspan").float(counter);
	}
/*
	public dynamic function formatCell(value : Float)
	{
		return Floats.format(value, "I");
	}
*//*
	public dynamic function formatHeader(value : String)
	{
		return RGStrings.humanize(value.ltrim("#"));
	}
*/
	/*
	public dynamic function formatValue(value : Dynamic, header : String)
	{
		if (Std.is(value, String))
		{
			return Strings.trim(value, '"');
		}
		
		if (Std.is(value, Float))
		{
			if ('#' == header.substr(0, 1))
				return Periodicity.format(header.substr(1), Std.parseFloat(value));
			return Floats.format(value);
		}
		
		if (Std.is(value, Int))
		{
			return Ints.format(value);
		}

		return Dynamics.string(value);
	}
	*/
	public function init()
	{
		
	}
	
	public function destroy()
	{
		container.html().string("");
	}
	
	function transformData(dps : Array<DataPoint>): {
		column_headers : Array<String>,
		row_headers : Array<String>,
		columns : Array<{ values : Array<Dynamic>, stats : Stats }>,
		rows : Array<{ values : Array<Dynamic>, cells : Array<DataPoint>, stats : Stats}>,
		stats : Stats
	}
	{
		var column_headers = [],
			row_headers = [],
			columns = [],
			rows = [],
			tcalc = {
				min : Math.POSITIVE_INFINITY,
				max : Math.NEGATIVE_INFINITY,
				tot : 0.0
			};
			
		var variable;
		// columns : build first level
		for (i in 0...Ints.min(1, columnVariables.length))
		{
			variable = columnVariables[i];
			column_headers.push(variable.type);
			for (value in variable.range())
			{
				columns.push({
					values : [value],
					stats : null
				});
			}
		}
		// columns : append others
		for (i in 1...columnVariables.length)
		{
			variable = columnVariables[i];
			column_headers.push(variable.type);
			var tmp = columns.copy();
			columns = [];
			for (src in tmp)
			{
				for (value in variable.range())
				{
					var column = Objects.clone(src);
					column.values.push(value);
					columns.push(column);
				}
			}
		}
		
		var name,
			headers = column_headers;
		for (i in 0...columns.length)
		{
			var column = columns[i],
				ccalc = { min : Math.POSITIVE_INFINITY, max : Math.NEGATIVE_INFINITY, tot : 0.0 };
			column.stats = ccalc;
			for (dp in dps.filter(function(dp) { 
				for (j in 0...headers.length)
				{
					name = headers[j];
					if (Reflect.field(dp, name) != column.values[j])
						return false;
				}
				return true; 
			} ))
			{
				var v = Reflect.field(dp, cellVariable.type);
				if (null == v)
					continue;
				if (v < ccalc.min)
				{
					ccalc.min = v;
					if (v < tcalc.min)
						tcalc.min = v;
				}
				if (v > ccalc.max)
				{
					ccalc.max = v;
					if (v > tcalc.max)
						tcalc.max = v;
				}
				ccalc.tot += v;
			}
			tcalc.tot += ccalc.tot;
		}
		
		// rows : build first level
		for (i in 0...Ints.min(1, rowVariables.length))
		{
			variable = rowVariables[i];
			row_headers.push(variable.type);
			for (value in variable.range())
			{
				rows.push({
					values : [value],
					stats : null,
					cells : null
				});
			}
		}
		// rows : append others
		for (i in 1...rowVariables.length)
		{
			variable = rowVariables[i];
			row_headers.push(variable.type);
			var tmp = rows.copy();
			rows = [];
			for (src in tmp)
			{
				for (value in variable.range())
				{
					var row = Objects.clone(src);
					row.values.push(value);
					rows.push(row);
				}
			}
		}
		
		var name,
			headers = row_headers;
		for (row in rows)
		{
			row.stats = { min : Math.POSITIVE_INFINITY, max : Math.NEGATIVE_INFINITY, tot : 0.0 };
			row.cells = [];
			
			var rdps = dps.filter(function(d) {
				for (j in 0...headers.length)
				{
					name = headers[j];
					if (Reflect.field(d, name) != row.values[j])
						return false;
				}
				return true; 
			});
			
			for (column in columns)
			{
				var dp = rdps.firstf(function(dp) {
					for (i in 0...column.values.length)
					{
						if (Reflect.field(dp, column_headers[i]) != column.values[i])
							return false;
					}
					return true;
				});
				var v = Reflect.field(dp, cellVariable.type);
				if (null == v)
				{
					row.cells.push({});
					continue;
				}
				row.cells.push(dp);
				if (v < row.stats.min)
				{
					row.stats.min = v;
//					if (v < tcalc.min)
//						tcalc.min = v;
				}
				if (v > row.stats.max)
				{
					row.stats.max = v;
//					if (v > tcalc.max)
//						tcalc.max = v;
				}
				row.stats.tot += v;
			}
		}
			
		return {
			column_headers : column_headers,
			row_headers : row_headers,
			columns : columns,
			rows : rows,
			stats : tcalc
		};
	}
}