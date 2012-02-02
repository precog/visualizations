//** QUERY
ReportGrid.query
	.paths({ parent : "/test" })
	.renameFields({ "path" : "parent" })
	.paths()
	.events()
	.properties()
	.sortFields(["path", "event", "property"])
