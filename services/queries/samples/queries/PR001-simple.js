//** QUERY
ReportGrid.query
//	.quirrel("orders := load(//orders) \n { user : orders.userId, total : orders.subTotal + orders.subTotal * orders.taxRate + orders.shipping + orders.handling}")
//	.quirrel("clicks := load(//clicks)\nviews  := load(//views)\nclickthroughRate('page) :=\n  {page: 'page, ctr: count(clicks where clicks.pageId = 'page) /\n                     count(views where views.pageId = 'page)}\nclickthroughRate")
	.quirrel("data := load(//organizations)\nhist('group) := { group: 'group, cnt: count(data where data.category = 'group) }\nhist")

//** VIZ
ReportGrid.barChart("#chart", {
	axes : ["group", "cnt"],
	load : loader,
	options : {
		barpadding: 2
	}
});


//data := load(//organizations)\nhist('group) := { group: 'group, cnt: count(data where data.employees = 'group) }\nhist