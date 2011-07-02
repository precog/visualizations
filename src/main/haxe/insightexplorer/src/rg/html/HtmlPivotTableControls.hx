/**
 * ...
 * @author Franco Ponticelli
 */

package rg.html;

class HtmlPivotTableControls 
{
	var pivot : HtmlPivotTable;
	public function new(pivot : HtmlPivotTable) 
	{
		this.pivot = pivot;
	}
}

package rg.html;
import haxe.Timer;
import thx.culture.FormatDate;
import thx.error.Error;
import thx.js.Selection;
import rg.js.ReportGrid;
//import rg.pivottable.QueryProperty;
import js.Dom;
import thx.color.Hsl;
import thx.color.Rgb;
import rg.query.PropertyType;
using Arrays;

/**
 * ...
 * @author Franco Ponticelli
 * @todo add order query and limit properties based on that
 */

class HtmlPivotTable 
{
	static var startColor = Hsl.toHsl(Rgb.fromInt(0x99FFFF));
	static var endColor = Hsl.toHsl(Rgb.fromInt(0x0000FF));
	
	static var nextid = 0;
	
	var container : Selection;
	var id : String;
	
	public var start : Null<Date>;
	public var end : Null<Date>;
	public var path : String;
	public var event : String;
	public var availableProperties(default, setAvailableProperties) : Array<String>;
	public var queryProperties : Array<PropertyType>;
	public var usedProperties : Array<String>;
	var periodicity : String;
	
	public function new(container : Selection) 
	{
		id = "rg-pivottable-" + (++nextid);
		this.container = container;
		start = null;
		end = null;
		path = null;
		availableProperties = [];
		queryProperties = [];
		periodicity = "day";
	}

	public function init()
	{
		while (queryProperties.length < 3)
			queryProperties.push(EmptyProperty);
		container.node().innerHTML = buildContext(id);
		if (wired != true)
		{
			wired = true;
			wireDateControls();
		}
		refreshQueryProperties();
	}

	
	public function query()
	{
		var event = this.event;
		var properties = queryProperties
			.filter(function(d) return switch(d) { case ValueProperty(_, _, _) : true; default: false; })
			.map(function(d, _) {
				switch(d)
				{
					case ValueProperty(name, top, limit):
						return {
							property : "." + event + name,
							limit : limit,
							order : top ? "descending" : "ascending"
						};
					default:
						return throw new Error("invalid property option {0}", d);
				}
			});
		var hastime = queryHasTimeProperty();
		
		if (properties.length == 0 && !hastime)
			return;

		ReportGrid.intersect(path, {
			start : !hastime || null == start ? 0 : start.getTime(),
			end : !hastime || null == end ? 0 : end.getTime(),
			properties : properties,
			periodicity : hastime ? periodicity : "eternity",
		}, intersect);
	}
	
	function queryHasTimeProperty()
	{
		return queryProperties.any(function(d) return switch(d) { case TimeProperty(_, _): true; default: false; } );
	}
	
	function timePropertyPosition()
	{
		var i = 0;
		while (i < queryProperties.length)
		{
			switch(queryProperties[i])
			{
				case TimeProperty(_, _):
					return i;
				case ValueProperty(_, _, _):
					i++;
				case EmptyProperty:
					//
			}
		}
		return i;
	}
	
	function intersect(v : Dynamic)
	{
		var data = normalizeData(v),
			table = container.select("table");
		
		table.html().string("");
		
		var thead = table.append("thead");
		var _bg = Hsl.interpolatef(startColor, endColor),
			delta = data.max - data.min,
			bg = function(t) {
			return _bg((t - data.min) / delta);
		};
		
		// COLUMNS HEADER
		var h = thead.append("tr");
		for (i in 0...data.rows[0].headers.length)
			h.append("th").attr("class").string("filler");
		h.append("th")
			.attr("class").string("columns-header")
			.attr("colspan").float(data.columns.count)
			.text().string(Strings.trim(data.columns.header, '.'));
		h.append("th").attr("class").string("total");
		
		// COLUMN HEADER
		h = thead.append("tr");
		var q = queryProperties.copy().splice(1, queryProperties.length - 1);
				
		var properties = q
			.filter(function(d) return switch(d) { case EmptyProperty : false; default: true; })
			.map(function(d, i) {
				return switch(d)
				{
					case ValueProperty(n, _, _): Strings.ltrim(n, ".");
					case TimeProperty(p, _): p;
					default: "";
				}
			});
		

		for (i in 0...properties.length)
			h.append("th")
				.attr("class").string("filler columns-header")
				.text().string(properties[i]);

		for (v in data.columns.values)
		{
			h.append("th")
				.attr("class").string("column-header")
				.text().string(Strings.trim(v, '"'));
		}
		
		h.append("th")
			.attr("class").string("column-header total")
			.text().string("total");

		// BODY
		var tbody = table.append("tbody");
		
		// ROWS
		for (row in data.rows)
		{
			var tr = tbody.append("tr");
			// HEADERS
			for (header in row.headers)
			{
				var th = tr.append("th").text().string(Strings.trim(header, '"'));
				if (header == '')
					th.classed().add("empty");
			}
			
			// VALUES
			for (value in row.values)
			{
				var bgcolor : Hsl = cast bg(value);
				var color = Rgb.contrastBW(bgcolor);
				tr.append("td")
					.text().string(Ints.format(value))
					.style("background-color").color(bgcolor)
					.style("color").color(color)
					;
			}
			
			// TOTAL
			tr.append("td")
				.attr("class").string("total")
				.text().string(Ints.format(row.total));
		}
		
		// TOTAL
		var tr = tbody.append("tr");
		for (i in 0...properties.length - 1)
			tr.append("th")
				.attr("class").string("empty");
		
		if (data.rows.length > 1)
		{
			tr.append("th")
				.attr("class").string("total")
				.text().string("total");
				
			for (total in data.columns.totals)
				tr.append("td")
					.attr("class").string("total")
					.text().string(Ints.format(total));
			tr.append("td")
				.attr("class").string("total")
				.text().string(Ints.format(data.total));
		}
	}
	
	function normalizeData(src : Dynamic) : {
		columns : {
			header   : String,
			values   : Array<String>,
			count    : Int,
			totals   : Array<Int>,
			averages : Array<Float>
		},
		rows : Array<{
			headers  : Array<String>,
//			headersf : Array<Bool>,
			values   : Array<Int>,
			count    : Int,
			total    : Int,
			average  : Float
		}>,
		max : Int,
		min : Int,
		total : Int
	}
	{
		var data = {
			columns : {
				header   : null,
				values   : [],
				count    : 0,
				totals   : [],
				averages : []
			},
			rows : [],
			max : -1,
			min : -1,
			total : 0
		};
		
		var first = queryProperties.firstf(function(d) return !Type.enumEq(d, EmptyProperty));
		data.columns.header = switch(first) {
			case ValueProperty(n, _, _): n;
			case TimeProperty(p, _): "time: " + p;
			case EmptyProperty: "";
		};

		var fields = data.columns.values = Reflect.fields(src);
		data.columns.count = fields.length;
		data.columns.totals = fields.map(function(_, _) return 0);

		var arr = [];
		var rows = -1;
		for (field in fields)
		{
			var v = Reflect.field(src, field);
			var f = Objects.flatten(v);
			if (rows < 0)
				rows = f.length;
			arr = arr.concat(f);
		}
		var count = data.columns.count;
		for (i in 0...rows)
		{
			var row = {
				headers  : arr[i].fields,
//					headersf : [],
				values   : [],
				count    : 0,
				total    : 0,
				average  : 0.0
			};
			for (j in 0...count)
			{
				var item = arr[i + j * rows],
					v = null == item ? 0.0 : item.value;
				row.values.push(v);
				row.count++;
				row.total += v;
				data.total += v;
				if (v < data.min || data.min < 0)
					data.min = v;
				if (v > data.max)
					data.max = v;
				data.columns.totals[j] += v;
			}
			row.average = row.total / row.count;
			data.rows.push(row);
		}
		
		var len = data.rows[0].headers.length;
		var hastime = queryHasTimeProperty();
		if (!hastime)
		{
			for (row in data.rows)
			{
				row.headers.pop();
				row.headers.pop();
			}
			
			data.rows.order(function(a, b) {
				var ah = a.headers,
					bh = b.headers,
					c = Reflect.compare(ah[0], bh[0]),
					i = 1;
				while (c == 0 && i < ah.length)
					c = Reflect.compare(ah[i], bh[i++]);
				return c;
			});
		} else {
			var pos = timePropertyPosition() - 1;
			var per = data.rows[0].headers[len-2];
			var time;
			var stime;
			var f = formatTimef(per);
			for (row in data.rows)
			{
				stime = row.headers[len - 1];
				time = f(Std.parseFloat(stime));
				row.headers.pop();
				row.headers.pop();
				row.headers.insert(pos, stime);
			}
			
			data.rows.order(function(a, b) {
				var ah = a.headers,
					bh = b.headers,
					c = Reflect.compare(ah[0], bh[0]),
					i = 1;
				while (c == 0 && i < ah.length)
					c = Reflect.compare(ah[i], bh[i++]);
				return c;
			});
			
			for (row in data.rows)
			{
				row.headers[pos] = f(Std.parseFloat(row.headers[pos]));
			}
		}
		
		// remove duplicated
		var last = Ints.range(len).map(function(_, _) return null);
		
		len = hastime ? len - 1 : len - 2;
		for (row in data.rows)
		{
			for (i in 0...len)
			{
				if(last[i] != row.headers[i])
					last[i] = row.headers[i];
				else
					row.headers[i] = '';
			}
		}
		
		
		for (i in 0...fields.length)
		{
			data.columns.averages[i] = data.columns.totals[i] / data.rows.length;
		}	
		
		return data;
	}
	
	var wired : Bool;

	function setAvailableProperties(values : Array<String>)
	{
		if (null == values)
			values = [];
		availableProperties = values;
//		_init();
		return values;
	}
	
	
	static function formatTimef(p : String)
	{
		return switch(p)
		{
			case "minute", "hour":
				function(v) return FormatDate.timeShort(Date.fromTime(v));
			case "day":
				function(v) return FormatDate.dateShort(Date.fromTime(v));
			case "week":
				function(v) return FormatDate.monthDay(Date.fromTime(v));
			case "month":
				function(v) return FormatDate.monthNameShort(Date.fromTime(v));
			case "year":
				function(v) return "" + Date.fromTime(v).getFullYear();
		}
	}
	
	function refreshQueryProperties()
	{
		usedProperties = [];
		var panel = container
			.select(".property-controls")
			.selectAll("div.property-panel")
			.data(queryProperties);
			
		var p = panel.enter()
			.append("div")
			.attr("class").string("property-panel")
			.html().stringf(buildPanel);
		p.select("select.property")
			.onNode("change", valueChanged);
		p.select("input.limit")
			.onNode("change", valueChanged);
		p.select("input.top")
			.onNode("change", valueChanged);
	}
	
	function periodicityChanged(d : HtmlDom, i : Int)
	{
		periodicity = thx.js.Dom.selectNode(d).property("value").get();
		for (i in 0...queryProperties.length)
		{
			switch(queryProperties[i])
			{
				case TimeProperty(_, a):
					queryProperties[i] = TimeProperty(periodicity, a);
				default:
					//
			}
		}
		query();
	}
	
	function valueChanged(d : HtmlDom, i : Int)
	{
		var p = d.parentNode;
		while (p.className != "property-panel")
			p = p.parentNode;
		var parent = thx.js.Dom.selectNode(p);
		updateQuery(parent, i);
		query();
	}
	
	function updateQuery(parent : Selection, i : Int)
	{
		var name : String = parent.select("select.property").property("value").get();
		var limitcontrol = parent.select("input.limit");
		var asccontrol = parent.select("input.top");
		var limit = Std.parseInt(limitcontrol.property("value").get());
		var top : Bool = cast parent.select("input.top").property("checked").get();

		limitcontrol.attr("disabled").remove();
		asccontrol.attr("disabled").remove();
		switch(name)
		{
			case "":
				queryProperties[i] = EmptyProperty;
			case "time":
				queryProperties[i] = TimeProperty(periodicity, top);
				limitcontrol.attr("disabled").string("true");
				asccontrol.attr("disabled").string("true");
			default:
				queryProperties[i] = ValueProperty(name, top, limit);
		}

		var timecontrols = [
			container.select("select.periodicity"),
			container.select("input.start-time"),
			container.select("input.end-time")
		];
		var timecontrolscontainer = container.select(".time-controls").style("display").string("none");
			
		if (queryHasTimeProperty())
		{
			timecontrols.each(function(d, _) d.attr("disabled").remove());
			timecontrolscontainer.style("display").string("block");
		} else {
			timecontrols.each(function(d, _) d.attr("disabled").string("true"));
			timecontrolscontainer.style("display").string("none");
		}
	}
	
	function buildPanel(p : PropertyType, i : Int)
	{
//		var values = [""].concat(availableProperties.copy().concat(["time"]));
		
		switch(p)
		{
			case TimeProperty(periodicity, top):
				return "time panel";
			case ValueProperty(name, top, limit):
				return "value panel " + name;
			case EmptyProperty:
				var buf = '<div><select name="property" class="property">' + getOptionsString(i == 0) + '</select></div>';
				buf += '<div>limit <input name="limit" class="limit" type="number" step="1" value="20"/></div>';
				buf += '<div>top <input name="top" class="top" type="checkbox" checked/></div>';
				return buf;
		}
	}
	
	function getOptions(skiptime : Bool)
	{
		var pairs = [{
			value : null,
			label : "- select an option -"
		}];
		for (p in availableProperties)
		{
			pairs.push( {
				value : "." + p,
				label : p
			});
		}
		if(!skiptime)
			pairs.push( {
				value : "time",
				label : "time"
			});
		return pairs;
	}
	
	function getOptionsString(skiptime : Bool)
	{
		var buf = [];
		for (option in getOptions(skiptime))
		{
			buf.push('<option value="'+(null == option.value ? "" : option.value) +'">'+option.label+'</option>');
		}
		return buf.join('');
	}
	
	function wireDateControls()
	{
		container.select("input.start-time").onNode("change", startTimeChanged);
		container.select("input.end-time").onNode("change", endTimeChanged);
		container.select("select.periodicity").onNode("change", periodicityChanged);
	}
	
	function startTimeChanged(n : HtmlDom, _ : Int)
	{
		var v : String = untyped n.value;
		if (v == '')
			start = null;
		else if (Dates.canParse(v))
		{
			start = Dates.parse(v);
		} else
		{
			trace("unable to parse date");
			return;
		}
		query();
	}
	
	function endTimeChanged(n : HtmlDom, _ : Int)
	{
		var v : String = untyped n.value;
		if (v == '')
			end = null;
		else if (Dates.canParse(v))
		{
			end = Dates.parse(v);
		} else
		{
			trace("unable to parse date");
			return;
		}
		query();
	}
	
	function _loadProperties(v : Array<String>)
	{
		availableProperties = v;
		init();
	}
	
	static function buildContext(id : String)
	{
		var b = '<div class="rg" class="pivot-table-container">';
		b += '<form id="' + id + '">';
		b += '<div class="controls">';
		
		// PROPERTIES
		b += '<div class="property-controls">';
		b += '</div>';
		
		// TIME CONTROLS
		b += '<div class="time-controls" style="display:none">';
		b += 'start <input placeholder="YYYY-MM-DD" type="datetime-local" name="start-time" class="start-time" disabled/>';
		b += " ";
		b += 'end <input placeholder="YYYY-MM-DD" type="datetime-local" name="end-time" class="end-time" disabled/>';
		b += " ";
		b += '<select name="periodicity" class="periodicity" disabled><option>minute</option><option>hour</option><option selected>day</option><option>week</option><option>month</option><option>year</option></select>';
		b += '</div>';
		
		// CLOSE FORM
		b += '</div>';
		b += '</form>';
		
		// VISUALIZATION AREA
		b += '<div class="pivot-table"><table></table></div>';
		
		// CLOSE CONTEXT
		b += '</div>';
		return b;
	}
}