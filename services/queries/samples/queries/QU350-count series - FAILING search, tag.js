//** QUERY
ReportGrid.query
	.series({
		path : "/query/test",
		event : "impression",
		where : { gender : "male" },
		tag : "location",
		location : '/usa'
	})
