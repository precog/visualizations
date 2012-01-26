//** QUERY
ReportGrid.query
	.series({
		path        : "/query/test",
		event       : "impression",
		start       : "24 hours ago",
		end         : "now",
		periodicity : "minute",
		groupby     : "hour",
		tag         : "location",
		location    : "usa"
	})
