//** DATA
var data = [{
		id : "Individual income taxes",
		billions : 1100,
		parents : { }
	}, {
		id : "Corporate income taxes",
		billions : 249,
		parents : { }
	}, {
		id : "Social Security/Payroll taxes",
		billions : 939,
		parents : { }
	}, {
		id : "Excise taxes",
		billions : 78,
		parents : { }
	}, {
		id : "Estate and gift taxes",
		billions : 20,
		parents : { }
	}, {
		id : "Customs duties",
		billions : 24,
		parents : { }
	}, {
		id : "Other",
		billions : 38,
		parents : { }
	}, {
		id : "Total Revenue",
		billions : 2400,
		parents : {
			"Individual income taxes" : 1100,
			"Corporate income taxes" : 249,
			"Social Security/Payroll taxes" : 939,
			"Excise taxes" : 78,
			"Estate and gift taxes" : 20,
			"Customs duties" : 24,
			"Other" : 38
		}
	}, {
		id : "Total Spending",
		billions : 3600,
		parents : { "Total Revenue" : 2400, "Deficit" : 1200 }
	}, {
		id : "Deficit",
		billions : 1200,
		parents : { }
	}, {
		id : "Defense",
		billions : 728,
		parents : { "Total Spending" : 728 }
	}, {
		id : "Other discretionary",
		billions : 675,
		parents : { "Total Spending" : 675 }
	}, {
		id : "Social Security",
		billions : 695,
		parents : { "Total Spending" : 695 }
	}, {
		id : "Medicare",
		billions : 453,
		parents : { "Total Spending" : 453 }
	}, {
		id : "Medicaid",
		billions : 290,
		parents : { "Total Spending" : 290 }
	}, {
		id : "Other Mandatory",
		billions : 575,
		parents : { "Total Spending" : 575 }
	}, {
		id : "Interest on debt",
		billions : 178,
		parents : { "Total Spending" : 178 }
	}, {
		id : "Potentional disaster costs",
		billions : 11,
		parents : { "Total Spending" : 11 }
	}];

//** VIZ
ReportGrid.sankey("#chart", {
	axes : ["billions"],
	datapoints : data,
	options : {
		layerwidth : 100
	}
});

//** CLASS
big