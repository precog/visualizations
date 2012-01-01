//** LOAD
usa-states-migration-2010

//** VIZ
var threshold = 20000;
data = data.map(function(item){
	var parents = {},
		count = 0;
	for(var i = 0; i < data.length; i++)
	{
		var v = item.source[i];
		if(v == null)
			continue;
		count += v;
		if(v > threshold)
			parents[data[i].state] = v;
	}
	return {
		id : item.state,
		count : count,
		parents : parents
	};
});

ReportGrid.sankey("#chart", {
	axes : ["viz"],
	datapoints : data
});

//** CLASS
big