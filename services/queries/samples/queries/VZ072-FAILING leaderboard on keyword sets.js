//** QUERY
ReportGrid.query
	.histogram({
		event : "impression",
		path : pathvalue
	})
	.map(function(dp) {
		var keywords = [];
		for(keyword in dp.keywords)
			keywords.push(keyword);
		dp.keywords = keywords.join(", ");
		return dp;
	})
	.sortField("count")
	.reverse()

//** VIZ
ReportGrid.leaderBoard("#chart", {
	axes : ['keywords', 'count'],
	load : loader
})