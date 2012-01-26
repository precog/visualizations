//** QUERY
ReportGrid.query
	.summarySeries({
		path : "/query/test",
		event : "impression",
		property : "age",
		start       : "24 hours ago",
		end         : "now",
		periodicity : "minute",
		groupby     : "hour"
	})