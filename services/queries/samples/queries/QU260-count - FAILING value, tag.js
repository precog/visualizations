//** QUERY
ReportGrid.query
	.count({
		path : "/query/test",
		event : "impression",
		tag : "location",
		property : 'browser',
		value : 'chrome',
		location : '/',
	})
