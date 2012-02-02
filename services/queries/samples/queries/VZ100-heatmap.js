//** QUERY
ReportGrid.query
	.intersect({
		event : "impression",
		path : pathvalue,
		properties : ['age', 'browser']
	})
	.sortFields(['age', 'browser'])

//** VIZ
ReportGrid.heatGrid("#chart", {
	axes : ['age', 'browser', 'count'],
	load : loader
})