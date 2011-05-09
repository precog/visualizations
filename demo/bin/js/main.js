$(document).ready(function() {
var path = "/adv";
var start, end;
// Datepickers
$("#start").val(d3.time.format("%m/%d/%Y")(new Date(Date.now()-48*60*60*1000)));
$("#end").val(d3.time.format("%m/%d/%Y")(new Date(Date.now())));
var dates = $( "#start, #end" ).datepicker({
	changeMonth: true,
	numberOfMonths: 1,
	onSelect: function( selectedDate ) {
		var option = this.id == "start" ? "minDate" : "maxDate",
			instance = $( this ).data( "datepicker" ),
			date = $.datepicker.parseDate(instance.settings.dateFormat || $.datepicker._defaults.dateFormat, selectedDate, instance.settings );
		var other = dates.not( this );
		if(this.id == "start")
			start = date;
		else
			end = date;
			
		other.datepicker( "option", option, date );
		if(this.id == "start")
			end = other.datepicker("getDate");
		else
			start = other.datepicker("getDate");
			
		periodicity = ReportGrid.getPeriodicity(start, end);
		prepare();
	}
});

var options = {
	animate : true,
	height : 400,
	data : null
}

var eventname = "impression";
var breakdown = "";
var breakdowns = [];
var xbreakdown = "";
var xbreakdowns = [];
var periodicity = ReportGrid.Hour;
var charttype = d3.select("#charttype");
var type = charttype.on("change", oncharttype).node().value;
var day = d3.time.format("%y/%m/%d");
var mf = d3.time.format("%I:%M %p");
var time = d3.time.format("%I:%M");
var hour = d3.time.format("%I %p");
var day = d3.time.format("%m/%d");
var week = d3.time.format("%m/%d");
var month = d3.time.format("%Y/%m");
var year = d3.time.format("%Y");

var fd = d3.time.format("%I:%M %p, %a %b %e, %Y");
var data = null;

function labelXDate(d) {
	var date = new Date(d);
	switch(periodicity) {
		case ReportGrid.Minute:	return time(date);
		case ReportGrid.Hour:	return hour(date);
		case ReportGrid.Day:	return day(date);
		case ReportGrid.Week:	return week(date);
		case ReportGrid.Month:	return month(date);
		case ReportGrid.Year:	return year(date);
		default:				return date.toString();
	}
}

function labelXName(d) {
	return xbreakdowns[d];
}

function chart() {
	ReportGrid.chart("#chart", options);
}

function loadAll() {
	ReportGrid.fieldSeries("/adv", { field : eventname, periodicity : periodicity /*, start : start, end : end */ }, function(r){
		options.data = [ReportGrid.transposeTimeData(r[periodicity])];
		chart();
	});
}

function loadForBreakdownAndBreakdownX() {
	var count = 0;
	function go() {
		var expected = xbreakdowns.length * breakdowns.length;
		var current = 0;
		options.data = [];
		for(var i = 0; i < xbreakdowns.length; i++) {
			var where = {};
			var xb = xbreakdowns[i];
			where[eventname + xbreakdown] = xb;
			for(var j = 0; j < breakdowns.length; j++) {
				var b = breakdowns[j];
				where[eventname + breakdown] = b;
				options.data[j] = [];
				ReportGrid.searchCount(path, { where : where }, (function(i,j) { return function(r) {
					options.data[j][i] = { x : i, y : r };
					if(++current == expected) {
						chart();
					}
				};})(i,j));
			}
		}
	}
	ReportGrid.fieldValues("/adv", { field : eventname + breakdown /*, start : start, end : end */ }, function(r){
		breakdowns = r;
		if(++count == 2)
			go();
	});
	ReportGrid.fieldValues("/adv", { field : eventname + xbreakdown /*, start : start, end : end */ }, function(r){
		xbreakdowns = r;
		if(++count == 2)
			go();
	});
}

function loadForBreakdownX() {
	ReportGrid.fieldValues("/adv", { field : eventname + xbreakdown /*, start : start, end : end */ }, function(r){
		xbreakdowns = r;
		var data = [];
		var expected = xbreakdowns.length;
		var current = 0;
		for(var i = 0; i < xbreakdowns.length; i++) {
			var xb = xbreakdowns[i];
			var where = {};
			where[eventname + xbreakdown] = xb;
			ReportGrid.searchCount(path, { where : where }, (function(i) { return function(r) {
				data[i] = { x : i, y : r };
				if(++current == expected) {
					options.data = [data];
					chart();
				}
			};})(i));
		}
	});
}

function loadForBreakdown() {
	ReportGrid.fieldValues("/adv", { field : eventname + breakdown /*, start : start, end : end */ }, function(r){
		breakdowns = r;
		var data = [];
		var expected = breakdowns.length;
		var current = 0;
		var min = Infinity;
		var max = -Infinity;
		for(var i = 0; i < breakdowns.length; i++) {
			ReportGrid.fieldValueSeries("/adv", { field : eventname + breakdown, value : breakdowns[i], periodicity : periodicity /*, start : start, end : end */ }, (function(i) {return function(v) {
				data[i] = v[periodicity] || null;
				if(data[i]) {
					var m = data[i][0][0];
					if(m < min)
						min = m;
					m = data[i][data[i].length-1][0];
					if(m > max)
						max = m;
				}
				if(++current == expected) {
					options.data = [];
					for(var j = 0; j < breakdowns.length; j++) {
						var d = [];
						var m = min;
						var c = 0;
						while(m <= max) {
							if(!data[j] || !data[j][c]) {
								d.push([m, 0]);
							} else if(data[j][c][0] == m) {
								d.push([m, data[j][c][1]]);
								c++;
							} else if(data[j][c][0] < m) {
								c++;
								continue;
							} else if(data[j][c][0] > m) {
								d.push([m, 0]);
							}
							m = ReportGrid.nextPeriod(m, periodicity);
						}
						options.data[j] = ReportGrid.transposeTimeData(d);
					}
					chart();
				}
			}})(i));
		}
	});
}

var ctrlxbreakdown = d3.select("#xbreakdown");
var ctrlbreakdown = d3.select("#breakdown");

function restoreType() {
	var n = charttype.node();
	n.options[0].disabled = false;
	n.options[1].disabled = false;
}

function resetTypeToBar() {
	charttype.on("change", null);
	var n = charttype.node();
	n.options[2].selected = true;
	n.options[0].disabled = true;
	n.options[1].disabled = true;
	options.type = type = "bar";
	charttype.on("change", oncharttype);
}

function prepare() {
	options.type = type;
	options.periodicity = periodicity;
	if(xbreakdown && breakdown && breakdown != xbreakdown) {
		resetTypeToBar();
		options.labelX = labelXName;
		options.periodicity = null;
		options.dataLabel = function(d) {
			return breakdowns[d.layer] + ": <b>" + d.value + "</b>";
		};
		loadForBreakdownAndBreakdownX();
	} else if(xbreakdown) {
		resetTypeToBar();
		options.labelX = labelXName;
		options.periodicity = null;
		options.dataLabel = function(d) {
			return "count: <b>" + d.value + "</b><br/><span class='small'>" + xbreakdowns[d.pos] + "</span>";
		};
		loadForBreakdownX();
	} else if(breakdown) {
		restoreType();
		options.labelX = labelXDate;
		options.dataLabel = function(d) {
			return "<span class='small'>" + breakdown.substr(1) + "</span><br/>" + breakdowns[d.layer] + ": <b>" + d.value + "</b><br/><span class='small'>" + fd(new Date(d.x)) + "</span>";
		};
		loadForBreakdown();
	} else {
		restoreType();
		options.labelX = labelXDate;
		options.dataLabel = function(d) {
			return "count: <b>" + d.value + "</b><br/><span class='small'>" + fd(new Date(d.x)) + "</span>";
		};
		loadAll();
	}
}

function onbreakdown() {
	breakdown = this.value;
	prepare();
}

function onxbreakdown() {
	xbreakdown = this.value;
	prepare();
}

function oncharttype() {
	type = this.value;
	prepare();
}

ReportGrid.children("/adv", { field : eventname /*, start : start, end : end */ }, function(r) {
	var o = r.map(function(n) { return '<option value="'+n+'">'+n.substr(1)+'</option>';}).join("");
	ctrlbreakdown.on("change", onbreakdown).node().innerHTML = '<option value="">- none -</option>' + o
	ctrlxbreakdown.on("change", onxbreakdown).node().innerHTML = '<option value="">- time -</option>' + o;
	
	prepare();
});

function currency(v) {
	return '$ ' + ((~~(v * 100))/100)
}

ReportGrid.fieldCount("/adv", { field : eventname /*, start : start, end : end */ }, function(r) {
	var average = 1.73;
	d3.select("#total").html(r);
	d3.select("#average").html(currency(average));
	d3.select("#spend").html(currency(average * r / 1000));
});
/*
ReportGrid.children("/", {"type":"path"});
//List children of /: ["adv/"]

ReportGrid.children("/adv", {"type":"path"});
//List children of /adv/: []
ReportGrid.children("/adv", {"type":"field"});
//List children of /adv/: [".impression"]

ReportGrid.children("/adv", { field : eventname });
//List children of /adv/.impression: [".carrier",".displayContext",".cmp * 100",".audience",".platform"]

ReportGrid.fieldCount("/adv", { field : eventname });
//Get total count for field /adv/.impression: 101
ReportGrid.fieldCount("/adv", { field : eventname + ".platform" });
//Get total count for field /adv/.impression.platform: 98

ReportGrid.fieldSeries("/adv", { field : eventname, periodicity : "minute" });
//Get series for field /adv/.impression (periodicity = minute): {"minute":{"1298938020000":15,"1298937960000":7,"1298937660000":21,"1298937600000":14,"1298937780000":9,"1298937840000":8,"1298938080000":6,"1298937900000":9,"1298937720000":12}}
ReportGrid.fieldSeries("/adv", { field : eventname, periodicity : "hour" });
//Get series for field /adv/.impression (periodicity = hour): {"hour":{"1298937600000":101}}
ReportGrid.fieldSeries("/adv", { field : eventname, periodicity : "day" });
//Get series for field /adv/.impression (periodicity = day): {"day":{"1298937600000":101}}
ReportGrid.fieldSeries("/adv", { field : eventname, periodicity : "month" });
//Get series for field /adv/.impression (periodicity = month): {"month":{"1293840000000":101}}
ReportGrid.fieldSeries("/adv", { field : eventname, periodicity : "week" });
//Get series for field /adv/.impression (periodicity = year): {"year":{"1262304000000":101}}
ReportGrid.fieldSeries("/adv", { field : eventname, periodicity : "year" });
//Get series for field /adv/.impression (periodicity = week): {"week":{"1298851200000":101}}
ReportGrid.fieldSeries("/adv", { field : eventname + ".platform", periodicity : "minute" });
//Get series for field /adv/.impression.platform (periodicity = minute): {"minute":{"1298938020000":15,"1298937960000":6,"1298937660000":20,"1298937600000":14,"1298937780000":9,"1298937840000":7,"1298938080000":6,"1298937900000":9,"1298937720000":12}}


ReportGrid.fieldValues("/adv", { field : eventname + ".platform"});
//Get all values of field /adv/.impression.platform: ["iPhone","Windows Phone","BlackBerry","Android","Symbian"]

ReportGrid.fieldValueCount("/adv", { field : eventname + ".platform", value : "Android"});
//Get the count for /adv/.impression.platform == "Android": 31

ReportGrid.fieldValueSeries("/adv", { field : eventname + ".platform", value : "Android", periodicity : "minute" });
//Get the time series for /adv/.impression.platform = "Android" (periodicity = minute): {"minute":{"1298938020000":6,"1298937960000":1,"1298937660000":12,"1298937600000":2,"1298937780000":3,"1298937840000":1,"1298938080000":2,"1298937900000":3,"1298937720000":1}}
ReportGrid.fieldValueSeries("/adv", { field : eventname + ".platform", value : "Android", periodicity : "hour" });
//Get the time series for /adv/.impression.platform = "Android" (periodicity = hour): {"hour":{"1298937600000":31}}
ReportGrid.fieldValueSeries("/adv", { field : eventname + ".platform", value : "Android", periodicity : "day" });
//Get the time series for /adv/.impression.platform = "Android" (periodicity = day): {"day":{"1298937600000":31}}
ReportGrid.fieldValueSeries("/adv", { field : eventname + ".platform", value : "Android", periodicity : "week" });
//Get the time series for /adv/.impression.platform = "Android" (periodicity = week): {"week":{"1298851200000":31}}
ReportGrid.fieldValueSeries("/adv", { field : eventname + ".platform", value : "Android", periodicity : "month" });
//Get the time series for /adv/.impression.platform = "Android" (periodicity = month): {"month":{"1293840000000":31}}
ReportGrid.fieldValueSeries("/adv", { field : eventname + ".platform", value : "Android", periodicity : "year" });
//Get the time series for /adv/.impression.platform = "Android" (periodicity = year): {"year":{"1262304000000":31}}


ReportGrid.searchCount("/adv", { where : { eventname + ".platform" : "Android" } });
//Select count from /adv/ where {".impression.platform":"Android"}: 31
ReportGrid.searchCount("/adv", { where : { eventname + ".platform" : "iPhone" } });
//Select count from /adv/ where {".impression.platform":"iPhone"}: 4
ReportGrid.searchCount("/adv", { where : { eventname + ".platform" : "Windows Phone" } });
//Select count from /adv/ where {".impression.platform":"Windows Phone"}: 23


ReportGrid.searchSeries("/adv", { periodicity : "minute", where : { eventname + ".platform" : "Android" } });
//Select series/minute from /adv/ where {".impression.platform":"iPhone"}: {"minute":{"1298937600000":4}}
ReportGrid.searchSeries("/adv", { periodicity : "minute", where : { eventname + ".platform" : "iPhone" } });
//Select series/minute from /adv/ where {".impression.platform":"Android"}: {"minute":{"1298938020000":6,"1298937960000":1,"1298937660000":12,"1298937600000":2,"1298937780000":3,"1298937840000":1,"1298938080000":2,"1298937900000":3,"1298937720000":1}}
ReportGrid.searchSeries("/adv", { periodicity : "minute", where : { eventname + ".platform" : "Windows Phone" } });
//Select series/minute from /adv/ where {".impression.platform":"Windows Phone"}: {"minute":{"1298938020000":4,"1298937960000":2,"1298937660000":4,"1298937600000":2,"1298937780000":1,"1298937840000":2,"1298938080000":1,"1298937900000":3,"1298937720000":4}}
*/
});