//** QUERY
ReportGrid.query
	.data([{ a : 1}, { b : 2 }])
	.store()
	.data([{ c : 3}, { d : 4 }])
	.retrieve()