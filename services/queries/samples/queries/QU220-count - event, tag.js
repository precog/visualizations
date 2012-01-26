//** QUERY
ReportGrid.query
	.count({
		path : "/query/test",
		event : "impression",
		tag : "location",
		location : '/'/*,
		start : "2 hours ago",
		end : "now"*/
	})
