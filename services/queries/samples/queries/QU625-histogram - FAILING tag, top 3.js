//** QUERY
ReportGrid.query
	.histogram({
		path : "/query/test",
		event : "impression",
		property : "browser",
		tag : "location",
		location : '/usa',
		top : 3
	})