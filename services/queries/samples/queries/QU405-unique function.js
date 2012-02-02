//** LOAD
impressions

//** QUERY
ReportGrid.query
	.data(data())
	.renameFields({
		gender : "gender",
		age    : "age"
	})
	.unique(function(a, b) {
		return a.gender == b.gender && a.age == b.age
	})
	.sortFields(["gender", "age"])