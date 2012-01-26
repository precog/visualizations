//** QUERY
ReportGrid.query
	.count({
		path : "/query/test",
		event : "impression",
		tag : "location",
		location : '/',
		start : "4 hours ago",
		end : "now"
	})
