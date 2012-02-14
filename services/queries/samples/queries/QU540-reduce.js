//** LOAD
impressions

//** QUERY
ReportGrid.query
	.data(data())
	.split("age")
	.reduce(function(cum, other){
		cum.count += other.count;
		return cum;
	}, function(start) {
		return { count : start.count, age : start.age };
	})
	.merge()
	.sortField("age")