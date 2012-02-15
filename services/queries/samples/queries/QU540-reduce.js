//** LOAD
impressions

//** QUERY
ReportGrid.query
	.data(data())
	.split("age")
	.reduce(function(start) {
		return { count : start.count, age : start.age };
	}, function(cum, other){
		cum.count += other.count;
		return cum;
	})
	.merge()
	.sortField("age")