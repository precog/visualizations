//** QUERY
ReportGrid.query
	.series({
		path : pathvalue,
		event : "impression",
		where : { gender : "male" },
		tag : "location",
		location : '/usa'
	})
