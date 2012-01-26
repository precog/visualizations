//** QUERY
ReportGrid.query
	.paths({ parent : "/" })
	.mapFields({ "path" : "parent" })
	.paths()
	.events()
	.properties()
	.sortByFields(["path", "event", "property"])
