//** QUERY
ReportGrid.query({
	path : "/test/query",
	event : "impression"
})

//** VIZ
ReportGrid.barChart("#chart", {
	axes : ['gender', 'count'],
//	load : loader
	datapoints : [{ count : 99, gender : "male"}, { count : 80, gender : "female" }]
})