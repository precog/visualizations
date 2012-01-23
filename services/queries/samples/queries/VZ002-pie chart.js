//** QUERY
{
	path : "/query/test",
	event : "impression",
	query : "gender"
}

//** VIZ
ReportGrid.pieChart("#chart", {
	axes : ['gender', 'count'],
	load : loader
})