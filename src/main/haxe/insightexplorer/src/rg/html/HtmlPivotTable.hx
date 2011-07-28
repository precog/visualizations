package rg.html;
import haxe.Timer;
import thx.culture.FormatDate;
import thx.error.Error;
import thx.js.Selection;
import rg.js.ReportGrid;
import js.Dom;
import thx.color.Hsl;
import thx.color.Rgb;
import rg.query.PropertyType;
import rg.query.QueryIntersect;
import thx.math.Ease;
import thx.math.Equations;
import rg.util.Periodicity;
using Arrays;
using Strings;
import rg.util.RGStrings;

/**
 * ...
 * @author Franco Ponticelli
 * @todo add order query and limit properties based on that
 */

class HtmlPivotTable 
{
	static var defaultStartColor = new Hsl(210, 1, 1);
	static var defaultEndColor = new Hsl(210, 1, 0.5);

	public var displayColumnTotal : Bool;
	public var displayRowTotal : Bool;
	public var heatMap : Bool;
	public var startColor : Hsl;
	public var endColor : Hsl;
	
	
	var container : Selection;
	var loader : QueryIntersect<{
		column_headers : Array<String>,
		row_headers : Array<String>,
		columns : Array<{ values : Array<Dynamic>, calc : Calc }>,
		rows : Array<{ values : Array<Dynamic>, cells : Array<Dynamic>, calc : Calc}>,
		calc : Calc
	}>;
	
	public function new(container : Selection) 
	{
		this.container = container;
		container
			.classed().add("rg")
			.classed().add("pivot-table");
		displayColumnTotal = true;
		displayRowTotal = true;
		startColor = defaultStartColor;
		endColor = defaultEndColor;
		heatMap = true;
	}

	public function data(d : {
		column_headers : Array<String>,
		row_headers : Array<String>,
		columns : Array<{ values : Array<Dynamic>, calc : Calc }>,
		rows : Array<{ values : Array<Dynamic>, cells : Array<Dynamic>, calc : Calc}>,
		calc : Calc
	})
	{
		trace(d);
		container.html().string("");
		
		var table = container.append("table"),
			thead = table.append("thead"),
			leftspan = d.rows.length > 0 ? d.rows[0].values.length : 0,
			color = heatMap ? Hsl.interpolatef(startColor, endColor) : null;
		
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
						.text().string(formatHeader(d.column_headers[i]));
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
							.text().string(formatHeader(h));
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
					.text().string(formatHeader(h));
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
					.text().string(rep ? "" : formatValue(v, d.row_headers[i]));
			}
			
			for (cell in row.cells)
			{
				var td = tr.append("td")
					.text().string(formatCell(cell));
				if (heatMap)
				{
					var c = color(cell / d.calc.max);
					td
						.style("background-color").color(c)
						.style("color").color(Rgb.contrastBW(c));
				}
			}
			
			if (displayRowTotal && d.columns.length > 1)
				tr.append("th")
					.attr("class").string("row total")
					.text().string(formatCell(row.calc.total));
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
					.text().string(formatCell(col.calc.total));
			}
			
			if(displayRowTotal && d.columns.length > 1)
				tr.append("th")
					.attr("class").string("table total")
					.text().string(formatCell(d.calc.total));
		}
	}
	
	function buildValue(value : Dynamic, header : String, counter : Int, tr : Selection)
	{
		var th = tr
			.append("th")
			.attr("class").string("column value")
			.text().string(formatValue(value, header));
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
	
	public dynamic function formatCell(value : Float)
	{
		return Floats.format(value, "I");
	}
	
	public dynamic function formatHeader(value : String)
	{
		return RGStrings.humanize(value.ltrim("#"));
	}
	
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
}