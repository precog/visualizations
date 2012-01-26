//** QUERY
ReportGrid.query
	.intersect({
		path : "/query/test",
		event : "impression",
		properties : [{
			property : "browser", top : 2
		}, {
			property : "env", bottom : 5
		}],
		start : "2 hours ago",
		end : "now"
	})