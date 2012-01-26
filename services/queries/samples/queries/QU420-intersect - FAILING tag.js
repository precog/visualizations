//** QUERY
ReportGrid.query
	.intersect({
		path : "/query/test",
		event : "impression",
		properties : [{ property : "browser" }],
		tag : "location",
		location : '/'
	})