//** QUERY
ReportGrid.query
	.intersect({
		event : "impression",
		path : pathvalue,
		properties : ['age', 'browser']
	})
	.sortByFields(['age', 'browser'])

//** VIZ
ReportGrid.heatGrid("#chart", {
	axes : ['age', 'browser', 'count'],
	load : loader
})