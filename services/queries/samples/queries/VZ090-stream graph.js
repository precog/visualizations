//** QUERY
ReportGrid.query
	.values({
		path : "/query/test",
		event : "impression",
		property : "gender"
	})
	.series({
		periodicity : "day",
		start : "10 days ago"
	})
	.accumulate('gender', 'time:day', 'count', 'y0')

//** VIZ
ReportGrid.streamGraph("#chart", {
	axes : ['time:day', 'count'],
	load : loader,
	options : {
		segmenton : "gender",
		interpolation : "monotone"
	}
})