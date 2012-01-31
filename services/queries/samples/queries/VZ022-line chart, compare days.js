//** QUERY
ReportGrid.query
	.series({
		path : pathvalue,
		event : "impression",
		periodicity : "hour",
		start : "2 days ago midnight",
		end : "yesterday midnight"
	})
	.map(function(o) {
		o['time:hour'] = o['time:hour'] + 24 * 60 * 60000;
		return o;
	})
	.cross({ group : "yesterday" })
	.append()
		.series({
			path : pathvalue,
			event : "impression",
			periodicity : "hour",
			start : "yesterday midnight",
			end : "midnight"
		})
		.cross({ group : "today" })
	.collect()

//** VIZ
ReportGrid.lineChart("#chart", {
	axes : ['time:hour', 'count'],
	load : loader,
	options : {
		segmenton : "group"
	}
})