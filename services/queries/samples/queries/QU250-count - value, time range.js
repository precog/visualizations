//** QUERY
ReportGrid.query
	.count({
		path : "/query/test",
		event : "impression",
		property : "gender",
		value : "female" ,
		start : "2 hours ago",
		end : "now"
	})
