//** DATA
var data = [{
		id : "Clip 1",
		count : 100,
		parents : { "Clip 10" : 1, "Clip 6" : 10 }
	}, {
		id : "Clip 2",
		count : 30,
		parents : { "Clip 1" : 30 }
	},{
		id : "Clip 3",
		count : 60,
		parents : { "Clip 1" : 55}
	},{
		id : "Clip 4",
		count : 5,
		parents : { "Clip 1" : 5}
	},{
		id : "Clip 5",
		count : 25,
		parents : { "Clip 2" : 20}
	},{
		id : "Clip 6",
		count : 40,
		parents : { "Clip 3" : 35, "Clip 4" : 5 }
	},{
		id : "Clip 7",
		count : 10,
		parents : { "Clip 5" : 8 }
	},{
		id : "Clip 8",
		count : 30,
		parents : { "Clip 5" : 5, "Clip 3" : 5, "Clip 10" : 4 }
	},{
		id : "Clip 9",
		count : 12,
		parents : { "Clip 8" : 10 }
	},{
		id : "Clip 10",
		count : 9,
		parents : { "Clip 8" : 1, "Clip 9" : 5, "Clip 7" : 3 }
	}];

//** VIZ
ReportGrid.sankey("#chart", {
	axes : ["count"],
	datapoints : data,
	options : {
		imagewidth : 60,
		imageheight : 40,
		imagespacing : 1,
		imagepath : function(dp)
		{
			return "../samples/images/" + dp.id.replace(" ", "_").toLowerCase() + ".png";
		}
	}
});

//** CLASS
big