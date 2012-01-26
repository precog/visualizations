//** QUERY
ReportGrid.query
	.intersect({
		path : "/query/test",
		event : "impression",
		properties : [{ property : "browser" }],
		start : "2 hours ago",
		end : "now"
	})