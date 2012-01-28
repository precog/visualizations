//** QUERY
ReportGrid.query
	.propertiesHistogram({
		event : "impression",
		path : "/query/test",
		property : "keywords"
	})
	.sortByField("count")
	.reverse()

//** VIZ
ReportGrid.leaderBoard("#chart", {
	axes : ['keywords', 'count'],
	load : loader
})