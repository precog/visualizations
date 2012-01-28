//** QUERY
ReportGrid.query
	.cross([{ event : "impression" }, { event : "click" }, { event : "conversion" }])
	.count({ path : "/query/test" })

//** VIZ
ReportGrid.leaderBoard("#chart", {
	axes : ['event', 'count'],
	load : loader
})