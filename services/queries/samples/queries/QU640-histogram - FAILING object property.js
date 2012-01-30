//** QUERY
ReportGrid.query
	.histogram({
		path : "/query/test",
		event : "impression",
		property : "keywords",
		start : "yesterday",
		end : "now"
	})