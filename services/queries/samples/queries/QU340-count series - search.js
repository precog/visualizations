//** QUERY
ReportGrid.query
	.series({
		path : "/query/test",
		event : "impression",
		where : { 'browser' : 'safari', 'gender' : 'male' }
	})
