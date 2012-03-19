//** QUERY
ReportGrid.query
    .data(params).series({ event : "click" }) .stackStore("c") .stackClear()
    .console()
    .data(params).series({ event : "impression" }) .stackRetrieve("c") .stackMerge()
    .console()
    .split("time:day") .transform(function(dataset) {
        if(!dataset[0].count)
            return [];
        else
            return [{
            	"event" : "impression",
                "value" : dataset[0].count,
                "time:day" : dataset[0]["time:day"]
              }, {
            	"event" : "click",
                "value" : dataset[1].count,
                "time:day" : dataset[0]["time:day"]
              }, {
            	"event" : "ctr",
                "value" : dataset[1].count / dataset[0].count,
                "time:day" : dataset[0]["time:day"]
              }];
          })
   	.console()

//** VIZ
var params = { path : "/query/test2", start : "24 days ago", periodicity : "day" };
ReportGrid.pivotTable("#chart", {
    axes : ["time:day", "event", "value"],
    load : loader
})