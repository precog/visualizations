//** QUERY
ReportGrid.query
	.cross([{ event : "impression" }, { event : "click" }, { event : "conversion" }])
	.count({ path : pathvalue })

//** VIZ
ReportGrid.funnelChart("#chart", {
	axes : ['event', 'count'],
	load : loader
})