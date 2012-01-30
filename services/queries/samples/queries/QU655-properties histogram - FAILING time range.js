//** QUERY
ReportGrid.query
	.propertiesHistogram({
		path : "/query/test",
		event : "impression",
		property : "keywords",
		start : "2 hours ago",
		end : "now"
	})