//** DATA
var data = ["01","02","04","05","06","08","09","10","11","12","13","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","44","45","46","47","48","49","50","51","53","54","55","56","72"].map(function(d, i) {
	return {
		'location' : d,
		count : Math.round(ReportGrid.math.random() * 100000)
	}
});

//** VIZ
ReportGrid.geo("#chart", {
	axes : ["location", "count"],
	datapoints : data,
	options : {
		map : {
			template : "usa-states",
			color : "i-#FFF,#09F,#F63",
			label : {
				datapointover : function(dp, stats) {
					return dp["#data"].name + ": " + ReportGrid.format(dp.count);
				}
			}
		}
	}
});

//** CLASS
big