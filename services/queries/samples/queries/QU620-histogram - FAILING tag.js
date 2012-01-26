//** QUERY
ReportGrid.query
	.histogram({
		path : "/query/test",
		event : "impression",
		property : "browser",
		top : 10,
		tag : "location",
		location : '/usa'
	})