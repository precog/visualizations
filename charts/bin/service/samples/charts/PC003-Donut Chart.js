//** LOAD
top10-emoticons-twitter

//** VIZ
ReportGrid.pieChart("#chart", {
	axes : ["count"],
	datapoints : data,
	options : {
		label : {
			datapointover : function(dp) { return ReportGrid.format(dp.count) + " " + dp.emoticon; },
			datapoint : function(dp) { return dp.emoticon; }
		},
		labelorientation : "fixed-90",
		innerradius : 0.5,
		labelradius : 0.7
	}
});

//** DOC
People speaking english by country.