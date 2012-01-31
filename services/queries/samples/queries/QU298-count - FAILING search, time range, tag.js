//** QUERY
ReportGrid.query
	.count({
		path : pathvalue,
		event : "impression",
		tag : "location",
		location : '/',
		where : { gender : "male" },
		start : "4 hours ago",
		end : "now"
	})
