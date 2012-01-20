//** QUERY
ReportGrid.query({
	path : "/query/test",
	event : "impression",
	periodicity : "eternity",
	query : "gender",
	start : 1,
	end : new Date().getTime()
})

//** VIZ
ReportGrid.barChart("#chart", {
	axes : ['gender', 'count'],
	load : loader
})