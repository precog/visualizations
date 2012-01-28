//** QUERY
ReportGrid.query
	.values({
		path : "/query/test",
		event : "impression",
		property : "gender"
	})
	.series({
		periodicity : "hour",
		start : "1 day ago"
	})
	.accumulate('gender', 'time:hour', 'count', 'y0')

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