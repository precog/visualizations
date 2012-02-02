//** LOAD
impressions

//** QUERY
ReportGrid.query
	.data(data())
	.addField({
		gender : "sex",
		age    : "years"
	})