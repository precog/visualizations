//** QUERY
ReportGrid.query
	.properties({
		path : "/query/test",
		event : "impression"
	})
	.count()

//** VIZ
ReportGrid.pieChart("#chart", {
	axes : ['gender', 'count'],
	load : loader
})