/*
 * Include this script in the head as
 * http://reportgrid.com/js/ReportGrid.js?wsvKey=<your WebServius key>&apiKey=<your ReportGrid api key>
 * ReportGrid.js
 * Usage:
 * ReportGrid.sendData(data)
 * data - { folders:["/path/to/data/points/captured", ...],
 * 			data:{
 * 				datapoint1:string or number or array or object, ...
 * 			}
 * 		}
 * returns - 	true if the data was successfully sent
 * 				false if missing data
 * 				null if not known (waiting for modules to load)
 * example: <a href="somePage.html" onclick="ReportGrid.sendData({folders:['/megacorp/acme'], data:{click:'somePage.html'}})">Some Page</a>
 * 
 * The following function can be used when a link that directs the browser away from the current page needs to be tracked. 
 * Call this function and the previous onclick will be called (if applicable) 
 * ReportGrid.sendDataOnclick(data, anchorTag)
 * data - see above
 * anchorTag - anchor dom element
 * example: ReportGrid.sendDataOnClick(seeAbove, document.getElementById("anchorTagsId"));
 */

ReportGrid = {};

ReportGrid.apiKey;
ReportGrid.wsvKey;

//ReportGrid.documentBase = "http://reportgrid.com/";
ReportGrid.documentBase = "http://gladstone/reportgrid/";
//ReportGrid.apiBase = "http://svc.webservius.com/v1/ReportGrid/report_grid/";
ReportGrid.apiBase = "http://gladstone:8888/events/";

ReportGrid.loadRetries = 0;
ReportGrid.loadObjects = ["JSON"];
ReportGrid.loadPoll = .5 * 1000;//half second poll

ReportGrid.go = function(){
	//add json lib
	ReportGrid.addLib(ReportGrid.documentBase + "js/json2.js");
	ReportGrid.setApiKey();
}

ReportGrid.setApiKey = function(){
	var headScripts = document.getElementsByTagName("head").item(0).getElementsByTagName("script");
	for(var i = 0; i < headScripts.length; i++){
		if(headScripts[i].src.indexOf("ReportGrid") != -1){
			ReportGrid.wsvKey = ReportGrid.getQuerystring(headScripts[i].src, "wsvKey");
			ReportGrid.apiKey = ReportGrid.getQuerystring(headScripts[i].src, "apiKey");
		}
	}
}

ReportGrid.addLib = function(src){
	var zzz = document.createElement("script");
	zzz.setAttribute("type", "text/javascript");
	zzz.setAttribute("charset", "utf-8");
	zzz.setAttribute("src", src);
	document.getElementsByTagName("head").item(0).appendChild(zzz);	
}

ReportGrid.isLoaded = function(){
	var rv = true;
	for(var i = 0; i < ReportGrid.loadObjects.length; i++){
		rv = rv && typeof eval(ReportGrid.loadObjects[i]) != "undefined";
	}
	return rv;
}

ReportGrid.currentData;
ReportGrid.currentPaths;

ReportGrid.report = function(path, data, callback){
	ReportGrid.currentPaths = path;
	ReportGrid.sendData(data, callback);
}


ReportGrid.sendData = function(data, callback){
	if(typeof data == "undefined"){
		data = ReportGrid.currentData;
	}
	ReportGrid.currentData = data;
	//check if ready
	if(!ReportGrid.isLoaded() && ReportGrid.loadRetries < 5){
		ReportGrid.loadRetries++;
		setTimeout("ReportGrid.sendData()", ReportGrid.loadPoll);
		//TODO:May want to deal with callback?
		return null;
	}
	if(!ReportGrid.isLoaded()){
		//failed, call callback if applicable
		if(typeof callback != "undefined"){
			callback();
		}
		return false;
	}
	
	//assert data is of expected structure
	if(typeof data == "undefined" || typeof data != "object"){
		return false;
	}
//	if(typeof data.folders == "undefined"){
//		return false;
//	}
//	if(data.folders.length == 0){
//		return false;
//	}
//	if(typeof data.data == "undefined"){
//		return false;
//	}
	//...
//	data.tokenId=ReportGrid.apiKey;
	//serialize data
	var serializedData = escape(JSON.stringify(data));
	
	var imgPing = new Image();
	imgPing.onload=function(eee){
		if(typeof callback != "undefined"){
			callback();
		}
	};
	imgPing.onerror=function(eee){
		if(typeof callback != "undefined"){
			callback();
		}
	}
	if(typeof ReportGrid.currentPaths == "string"){
		var swap = ReportGrid.currentPaths;
		ReportGrid.currentPaths = new Array();
		ReportGrid.currentPaths.push(swap);
	}
	//TODO:cleanse the path of preceding and trailing /'s
	for(var i = 0; i < ReportGrid.currentPaths.length; i++){
		var path = ReportGrid.currentPaths[i];
		imgPing.src = ReportGrid.apiBase + "vfs/" + path + "?killCache=" + (new Date()).getTime() + "_" + i + "&content=" + serializedData + "&wsvKey=" + ReportGrid.wsvKey + "&tokenId=" + ReportGrid.apiKey;
		//imgPing.src = ReportGrid.apiBase + "/push?killCache=" + (new Date()).getTime() + "&content=" + serializedData + "&wsvKey=" + ReportGrid.wsvKey;
		imgPing.style.width="0px";
		imgPing.style.height="0px";
		imgPing.style.border="0px";
		document.body.appendChild(imgPing);
	}
	return true;
}

ReportGrid.functionIdents = new Array();
ReportGrid.callbackIdents = new Array();
ReportGrid.functionIdentCurrentIndex = 0;

ReportGrid.sendDataOnclick = function(data, anchorTag){
	ReportGrid.functionIdents[ReportGrid.functionIdentCurrentIndex] = data;
	var oldOnclick = anchorTag.onclick;
	if(typeof oldOnclick == "undefined"){
		oldOnclick = function(){void(0);};
	}
	var callback = new Function("window.location = '" + anchorTag.href + "';");
	anchorTag.setAttribute("href", "");
	ReportGrid.callbackIdents[ReportGrid.functionIdentCurrentIndex] = callback;
	var sendData = new Function("ReportGrid.sendData(ReportGrid.functionIdents[" + ReportGrid.functionIdentCurrentIndex + "], ReportGrid.callbackIdents[" + ReportGrid.functionIdentCurrentIndex + "])");
	//clear out old onclick
	anchorTag.onclick = function(){void(0);};
	if(anchorTag.addEventListener){
		anchorTag.addEventListener("click", sendData, false);
		anchorTag.addEventListener("click", oldOnclick, false);
	}
	else if(anchorTag.attachEvent){
		anchorTag.attachEvent("onclick", sendData);
		anchorTag.attachEvent("onclick", oldOnclick);
	}
	ReportGrid.functionIdentCurrentIndex++;
}

ReportGrid.getQuerystring = function(url, key, default_){
	if(default_==null){
		default_="";
	}
	key = key.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	var regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
	var qs = regex.exec(url);
	if(qs == null){
		return default_;
	}
	else{
		return qs[1];
	}
}

ReportGrid.go();