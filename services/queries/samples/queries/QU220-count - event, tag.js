//** QUERY
ReportGrid.query
	.count({
		path : "/query/test",
		event : "impression",
		tag : "location",
		location : '/'
	})
