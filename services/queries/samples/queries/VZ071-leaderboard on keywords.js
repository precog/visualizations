//** QUERY
ReportGrid.query
	.propertiesHistogram({
		event : "impression",
		path : pathvalue,
		property : "keywords"
	})
	.sortField("count")
	.reverse()

//** VIZ
ReportGrid.leaderBoard("#chart", {
	axes : ['keywords', 'count'],
	load : loader
})