//** LOAD
persons

//** QUERY
ReportGrid.query
	.data(data())
	.sortFields(["officecenterdist", "name"], [false, true])