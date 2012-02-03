//** QUERY
ReportGrid.query
	.data([{ a : 1}, { b : 2 }])
	.store("first")
	.cross([{ c : 3}, { d : 4 }])
	.store("second")
	.cross([{ e : 5}, { f : 6 }])
	.store("third")
	.clear()
	.retrieve("first")
	.retrieve("second")
	.retrieve("third")