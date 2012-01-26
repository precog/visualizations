//** QUERY
ReportGrid.query
	.series({
		path : "/query/test",
		event : "impression",
		where : {
			"gender" : "male",
			"browser" : "safari"
		},
		timezone : "2"
	})
