//** LOAD
impressions

//** QUERY
ReportGrid.query
	.data(data())
	.split("gender")
	.stack(function(a, b, i) {
		if(i == 0)
			a.y0 = 0;
		b.y0 = a.count;
	}, function(a, b) {
		return a.age == b.age;
	})