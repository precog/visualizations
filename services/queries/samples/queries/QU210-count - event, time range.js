//** QUERY
ReportGrid.query
	.count({
		path  : "/query/test",
		event : "impression",
		start : "2 hours ago",
		end   : "now"
	})
