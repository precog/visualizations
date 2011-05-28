var gluecons = [ 
	"ReportGrid", "Axiomatics", "BigDoor", "Jexy", "Eclipse Foundation",
	"Flomio", "LocVox", "Proxomo", "Sing.ly", "Standing Cloud",
	"StatsMix", "StreamStep", "Tendril", "WanderFly", "Rainmaker"
];

var infos = {
	"ReportGrid" : {
		url : "http://www.reportgrid.com/",
		logo : "images/reportgrid.png",
		name : "ReportGrid"
	},
	
	"Axiomatics" : {
		url : "http://axiomatics.com/",
		logo : "images/axiomatics.png",
		name : "Axiomatics"
	},
	
	"BigDoor" : {
		url : "http://www.bigdoor.com/",
		logo : "images/bigdoor.png",
		name : "BigDoor Media"
	},
	
	"Jexy" : {
		url : "http://www.jexy.co/",
		logo : "images/jexy.png",
		name : "Jexy"
	},
	
	"Eclipse Foundation" : {
		url : "http://www.eclipse.org/",
		logo : "images/orion.png",
		name : "Orion"
	},
	
	"Flomio" : {
		url : "http://www.flomio.com/",
		logo : "images/flomio.png",
		name : "Flomio"
	},
	
	"LocVox" : {
		url : "http://locvox.com/",
		logo : "images/locvox.png",
		name : "LocVox"
	},
	
	"Proxomo" : {
		url : "http://proxomo.com/",
		logo : "images/proxomo.png",
		name : "Proxomo"
	},
	
	"Sing.ly" : {
		url : "http://singly.com/",
		logo : "images/singly.png",
		name : "Singly"
	},
	
	"Standing Cloud" : {
		url : "http://www.standingcloud.com/",
		logo : "images/standingcloud.png",
		name : "Standing Cloud"
	},
	
	"StatsMix" : {
		url : "http://statsmix.com/",
		logo : "images/statsmix.png",
		name : "StatsMix"
	},
	
	"StreamStep" : {
		url : "http://streamstep.com/",
		logo : "images/streamstep.png",
		name : "StreamStep"
	},
	
	"Tendril" : {
		url : "http://www.tendrilinc.com/",
		logo : "images/tendril.png",
		name : "tendril"
	},
	
	"WanderFly" : {
		url : "http://www.wanderfly.com/",
		logo : "images/wanderfly.png",
		name : "wanderfly"
	},
	
	"Rainmaker" : {
		url : "http://rainmaker.cc/",
		logo : "images/rainmaker.png",
		name : "rainmaker"
	},
}

function addlogos(dest, handles)
{
	var buf = "<ul>";
	for(var i = 0; i < handles.length; i++)
	{
		var name = handles[i],
			info = infos[name];
		if(info)
		{
			buf += '<li class="logo logo-'+i+'"><a href="'
				+ info.url + '" title="'
				+ info.name + '" target="_blank"><img src="'
				+ info.logo + '"></a></li>';
		} else {
			buf += '<li class="logo logo-'+i+' text">'+name+'</li>';
		}
	}
	buf += "</ul>";

	$("#logos").first().html(buf);
}

// http://twitter.com/#!/