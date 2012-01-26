//** QUERY
ReportGrid.query
	.intersectSeries({
		path        : "/query/test",
		event       : "impression",
		properties  : [{ property : "browser" }],
		start       : "24 hours ago",
		end         : "now",
		periodicity : "minute",
		groupby     : "hour",
		tag         : "location",
		location    : "/"
	})