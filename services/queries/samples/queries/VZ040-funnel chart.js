//** QUERY
ReportGrid.query
	.cross([{ event : "impression" }, { event : "click" }, { event : "conversion" }])
	.count({ path : "/query/test" })

//** VIZ
ReportGrid.funnelChart("#chart", {
	axes : ['event', 'count'],
	load : loader
})