//** QUERY
ReportGrid.query
	.paths({ parent : "/test" })
	.mapFields({ "path" : "parent" })
	.paths()
	.events()
	.properties()
	.sortByFields(["path", "event", "property"])
