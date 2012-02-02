//** LOAD
impressions

//** QUERY
ReportGrid.query
	.data(data())
	.renameFields({
		gender : "sex",
		age    : "years"
	})
	.unique()
	.sortFields(["sex", "years"])