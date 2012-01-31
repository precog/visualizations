//** QUERY
ReportGrid.query
	.histogram({
		event : "impression",
		path : "/query/test",
		property : 'keywords',
		start : "1 month ago"
	})
	.map(function(o) {
		var keywords = [];
		for(k in o.keywords)
			keywords.push(k);
		return {
			count : o.count,
			keywords : keywords.join(', ')
		};
	})
	.sortByField("count", true)

//** VIZ
ReportGrid.leaderBoard("#chart", {
	axes : ['keywords', 'count'],
	load : loader
})