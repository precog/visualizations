//** QUERY
ReportGrid.query
	.summarySeries({
		path : "/query/test",
		event : "impression",
		property : "age",
		type : "mean",
		start : "2 hours ago",
		end : "now",
		periodicity : "minute",
		tag : "location",
		location : '/'
	})