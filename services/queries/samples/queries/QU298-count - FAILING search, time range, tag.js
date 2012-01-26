//** QUERY
ReportGrid.query
	.count({
		path : "/query/test",
		event : "impression",
		tag : "location",
		location : '/',
		where : { gender : "male" },
		start : "4 hours ago",
		end : "now"
	})
