//** QUERY
ReportGrid.query
	.events({ path : "/query/test" })
	.values({
		property : "browser",
		start : "5 hours ago",
		end : "now"
	})
