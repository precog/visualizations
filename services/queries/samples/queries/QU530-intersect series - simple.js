//** QUERY
ReportGrid.query
	.intersectSeries({
		path : "/query/test",
		event : "impression",
		properties : [{ property : "browser" }]
	})