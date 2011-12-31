//** LOAD
usa-population-and-area-1790-2000

//** VIZ
ReportGrid.lineChart("#chart", {
	axes : ["year", "population"],
	datapoints : data,
	options : {
		label : {
			axis : function(a) { return a },
			tickmark : function(v, a) { return a == 'year' ? v: ReportGrid.format(v); },
			datapointover : function(dp) { return ReportGrid.format(dp.population) + " individuals" }
		},
		labelangle : function(a) { return a == "year" ? 140 : 0; },
		labelanchor : "left"
	}
})