//** QUERY
ReportGrid.query
	.histogram({
		path : "/query/test",
		event : "impression",
		property : "browser",
		top : 10,
		start : "2 hours ago",
		end : "now"
	})