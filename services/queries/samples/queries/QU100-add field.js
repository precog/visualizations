//** LOAD
impressions

//** QUERY
var year = (new Date()).getFullYear();
ReportGrid.query
	.data(data())
	.setFields({
		group  : "A",
		age    : function(ob, value, i) { return value + 1; },
		year   : function(ob, value, i) { return year - ob.age; }
	})