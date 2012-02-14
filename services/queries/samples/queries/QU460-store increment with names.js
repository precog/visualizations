//** QUERY
ReportGrid.query
	.data([{ a : 1}, { b : 2 }])
	.store("first")
	.data([{ c : 3}, { d : 4 }])
	.cross()
	.store("second")
	.data([{ e : 5}, { f : 6 }])
	.cross()
	.store("third").clear()
	.retrieve("first")
	.retrieve("second")
	.retrieve("third")