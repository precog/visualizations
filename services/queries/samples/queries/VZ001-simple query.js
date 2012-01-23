//** QUERY
{
	path : "/query/test",
	event : "impression",
	query : "gender"
}

//** VIZ
ReportGrid.barChart("#chart", {
	axes : ['gender', 'count'],
	load : loader
})