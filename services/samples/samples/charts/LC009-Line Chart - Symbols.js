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
			datapointover : function(dp) { return dp.year + ": " + ReportGrid.format(dp.population) + " individuals" }
		},
		labelangle : function(a) { return a != "year" ? 180 : 0; },
		labelanchor : function(a) { return a == "year" ? "right" : "left"; },
		symbol : function(dp) {
			return ReportGrid.symbol("square", (dp.area / 3794083) * 200) // max area
		}
	}
})