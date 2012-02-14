//** QUERY
ReportGrid.query
	.values({
		path : pathvalue,
		event : "impression",
		property : "gender"
	})
	.series({
		periodicity : "hour",
		start : "1 day ago"
	})
	.split("gender")
	.stackOperation(function(a, b) {
		if(null == a.y0)
			a.y0 = 0;
		b.y0 = a.y0 + a.count;
	}, 'time:hour')

//** VIZ
ReportGrid.lineChart("#chart", {
	axes : ['time:hour', { type : 'count' }],
	load : loader,
	options : {
		segmenton : "gender",
		displayarea : true,
		y0property : "y0",
		effect : "none",
		interpolation : "cardinal-0.8"
	}
})