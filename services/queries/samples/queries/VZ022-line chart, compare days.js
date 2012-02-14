//** QUERY
ReportGrid.query
	.data({
		path : pathvalue,
		event : "impression",
		periodicity : "hour"
	})
	.store("params")
	.series({
		start : "2 days ago midnight",
		end : "yesterday midnight"
	})
	.setFields({
		'time:hour' : function(v) { return v + 24 * 60 * 60000; },
		"group" : "yesterday"
	})
	.store("yesterday").clear()
	.retrieve("params")
	.series({
		start : "yesterday midnight",
		end : "midnight"
	})
	.setField("group", "today")
	.retrieve("yesterday")

//** VIZ
ReportGrid.lineChart("#chart", {
	axes : ['time:hour', 'count'],
	load : loader,
	options : {
		segmenton : "group"
	}
})