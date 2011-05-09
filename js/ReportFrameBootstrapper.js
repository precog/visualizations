//var reportGridBase = "http://reportgrid.com/";
var reportGridBase = "http://gladstone/reportgrid/";
//var apiBase = "http://svc.webservius.com/v1/ReportGrid/report_grid/";
var apiBase = "http://gladstone:8888/";

// ReportFrameBootstrapper.js
function addScript(src) {
	var zzz = document.createElement("script");
	zzz.setAttribute("type", "text/javascript");
	zzz.setAttribute("charset", "utf-8");
	zzz.setAttribute("src", src);
	document.getElementsByTagName("head").item(0).appendChild(zzz);
}
addScript("http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js");
addScript(reportGridBase + "js/lib/hc.js");
addScript(reportGridBase + "js/lib/highcharts/js/highcharts.js");

// include some css
function addCss(src) {
	var zzz = document.createElement("link");
	zzz.setAttribute("type", "text/css");
	zzz.setAttribute("charset", "utf-8");
	zzz.setAttribute("rel", "stylesheet");
	zzz.setAttribute("href", src);
	document.getElementsByTagName("head").item(0).appendChild(zzz);
}
addCss(reportGridBase + "css/report-frame-default.css");
// include a base html template
function loadTemplate() {
	if (typeof document.body == "undefined" || document.body == null) {
		document.documentElement.appendChild(document.createElement("body"));
	}
	document.body.className = "claro";
	document.body.innerHTML = templateContent;
	// make an initial data call (jsonp)
//	addScript(apiBase + "pull?killCache=" + (new Date()).getTime()
//			+ '&content={"tokenId":"' + apiKey + '","folder":"/"}&wsvKey='+ wsvKey + "&callback=displayNewData");
	addScript(apiBase + "reports/events/summary/vfs/?tokenId=" + apiKey + "&callback=displayNewData");
	
	
//	addScript(apiBase + "reports/events/series/hour/start/0/end/1296582835315/vfs/?tokenId=" + apiKey + "&callback=detailData");
//	addScript(apiBase + "describe?killCache=" + (new Date()).getTime()
//			+ '&content={"tokenId":"' + apiKey + '"}&wsvKey='+ wsvKey + "&callback=buildNewTree");
}
//addScript(reportGridBase + "api/template/template.jsp?templateId=UCVBV2arfe2R4Ryp");
var templateContent = "<div id=\"topContainer\" style=\"width:300px;float:right;\"><div id=\"folderContainer\"></div></div>";
//templateContent +=	"<div id=\"barGraph\" style=\"width:300px;height:300px;\"><div id=\"pieChart\" style=\"width:300px;height:300px;\"></div>";
templateContent +=	"<div id=\"barGraph\" style=\"width:500px;height:400px;\"></div>";

function displayNewData(data) {
	console.debug(data);
	buildNewTree(data);
	//buildDataGrid(data);
	buildPeriodicity();	
}

function buildPeriodicity(){
	var periodicitySelectContainer = dojo.create("div");
	dojo.byId("topContainer").appendChild(periodicitySelectContainer);
	var radioContainer = dojo.create("div");
	periodicitySelectContainer.appendChild(radioContainer);
//	radioContainer.innerHTML = '<input type="radio" name="periodicityRadio" id="infinityRadio" value="infinity" />';
//	radioContainer.innerHTML += '<label for="infinityRadio">Infinity</label>';
	var units = ["Minute", "Hour", "Day", "Week", "Month", "Year", "Eternity"];
	radioContainer.innerHTML = "<br /><hr />";
	for(var i = 0; i < units.length; i++){
		var unit = units[i];
		radioContainer.innerHTML += '<input type="radio" name="periodicityRadio" id="' + unit + 'Radio" value="' + unit + '" />';
		radioContainer.innerHTML += '<label for="' + unit + 'Radio">' + unit + '</label><br />';
	}
	for(var i = 0; i < units.length; i++){
		if(i == units.length - 1){
			var periodicitySelect = new dijit.form.RadioButton({checked: true}, units[i] + "Radio");
		}
		else{
			var periodicitySelect = new dijit.form.RadioButton({
				onChange:function(){dojo.byId("periodicityRangeSelectorContainer").style.display = "block";}
			}, units[i] + "Radio");
		}
	}
	var periodicityRangeSelectorContainer = dojo.create("div");
	periodicitySelectContainer.appendChild(periodicityRangeSelectorContainer);
	periodicityRangeSelectorContainer.id = "periodicityRangeSelectorContainer";
	periodicityRangeSelectorContainer.style.display = "none";
	var rangeInner = "";
	rangeInner += '<table><tr><td><b>Start:</b></td><td><input id="startTime" /></td><td>';
	rangeInner += '<input id="startDate" /></td></tr>';
	rangeInner += '<tr><td><b>End:</b></td><td><input id="endTime" /></td><td>';
	rangeInner += '<input id="endDate" /></td></tr></table>';
	console.debug(rangeInner);
	periodicityRangeSelectorContainer.innerHTML = rangeInner;
	var dStart = new Date();
	dStart.setHours(0);
	dStart.setMinutes(0);
	dStart.setSeconds(0);
	dStart.setMilliseconds(0);
	var startTime = new dijit.form.TimeTextBox({
         name: "startTime",
         value: dStart,
         constraints: {
             timePattern: 'HH:mm:ss',
             clickableIncrement: 'T01:00:00',
             visibleIncrement: 'T01:00:00',
             visibleRange: 'T06:00:00'
         }
     },
     "startTime");
	dStart.setHours(23);
	var endTime = new dijit.form.TimeTextBox({
        name: "endTime",
        value: dStart,
        constraints: {
            timePattern: 'HH:mm:ss',
            clickableIncrement: 'T01:00:00',
            visibleIncrement: 'T01:00:00',
            visibleRange: 'T06:00:00'
        }
    },
    "endTime");
	var startDate = new dijit.form.DateTextBox({value:new Date(), style:{width:"90px"}}, "startDate");
	var endDate = new dijit.form.DateTextBox({value:new Date(), style:{width:"90px"}}, "endDate");
	var buttonEl = dojo.create("div");
	buttonEl.innerHTML = "Update";
	periodicityRangeSelectorContainer.appendChild(buttonEl);
	var updateButton = new dijit.form.Button({
		onClick:updateDetailData
	}, buttonEl);
	dojo.parser.parse();
	startTime.startup();
	//startTime.setValue(0);
}

var isDetail = false;
function updateDetailData(){
	isDetail = true;
	addScript(apiBase + "reports/events/series/hour/start/0/end/1328124236481/vfs/?tokenId=" + apiKey + "&callback=detailData");
}

function detailData(data){
	HC.renderLineGraph(data);
}

function buildNewTree(data){
	var origData = data;
	var rootName = "root";
	for(var x in data){
		if(x.indexOf("@") != 0){
			rootName = x;
		}
	}
	var treeFormattedData = transformData(origData, rootName);
	var treeStore = new dojo.data.ItemFileWriteStore({});
	treeStore.data = treeFormattedData;
	var rootItem = {
	        store:treeStore,
	        rootId: rootName,
	        rootLabel: rootName + " (" + data[rootName]["@count"].eternity[0] + ")",
	        count: data[rootName]["@count"].eternity[0],
	        childrenAttrs: ["children"]
	    };
	var treeModel = new dijit.tree.ForestStoreModel(rootItem);
	currentChartableItems = new Array();
	currentChartableItems.push(rootItem);

	tree = new checkbox_tree.CheckBoxTree({
        model: treeModel
    },
    "folderContainer");
	dojo.connect(tree, "onClick", function(item){
		var path = "";
		if(typeof item.root != "undefined" && item.root != null && item.root){
			path = "/";
		}
		else{
			path = item.path[0];
		}
		addScript(apiBase + "pull?killCache=" + (new Date()).getTime() + '&content={"tokenId":"' + apiKey + '","folder":"' + path + '"}&wsvKey='+ wsvKey + "&callback=displayNewData");
	});
	dojo.connect(tree, "onLoad", function(){resizeFrame();});
	dojo.connect(tree, "onOpen", function(){setTimeout("resizeFrame();", 200);});
	dojo.connect(tree, "onClose", function(){setTimeout("resizeFrame();", 200);});
	HC.renderBarGraph();
}

function transformData(data, rootName){
	var totalCount = data["@count"].eternity[0];
	var childs = new Array();
	var items = new Array();
	var rv = {identifier: "id", label: "name", items:items, pathName: "/"};
	for(var x in data[rootName]){
		if(typeof x != "number" && (typeof x == "string" && x.indexOf("@") != 0)){
			_buildTree(items, x, data[rootName][x], "/root", rv);
		}
	}
	return rv;
}

var currentChartableItems = new Array();
var allItemsFlattened = new Array();
function _buildTree(parentNode, data, childs, pathName, lastItem){
	//debugger;
	var nextChilds = new Array();
	var count = childs["@count"].eternity[0];
	var item = {id:data + dojox.uuid.generateRandomUuid(), name:data + " (" + count + ")", path:pathName + "/" + data, count:count};
	allItemsFlattened.push(item);
	parentNode.push(item);
	for(var y in childs){
		if(typeof y != "number" && (typeof y == "string" && y.indexOf("@") != 0 && y != "eternity")){
			item.children = nextChilds;
			_buildTree(nextChilds, y, childs[y], pathName + "/" + data, item);
		}
	}
}

var workingGrid = null;
var workingDataStore = null;

function buildDataGrid(origData) {
	console.debug(origData);
	//TODO:Drop this flatten after issue for '.' in data is fixed
	origData.data = flattenDataForGrid(origData);
	workingDataStore = new dojo.data.ItemFileWriteStore({});
	workingDataStore.data = arrayizeData(origData.data);
	// set the layout structure:
    var layout4 = [{
        field: 'key',
        name: 'key',
        width: "220px"
    },
    {
    	field: 'value',
        name: 'value',
        width: "75px"
    }];

    if(workingGrid == null){
	    // create a new grid:
    	workingGrid = new dojox.grid.DataGrid({
	        query: {
	            key: '*'
	        },
	        store: workingDataStore,
	        clientSort: true,
	        autoWidth: true,
	        rowCount: 20,
	        //rowSelector: '20px',
	        structure: layout4//, 
	        //containerNode: dojo.byId("tabContainer")
	    },
	    //document.createElement('div'));
	    dojo.byId("dataGridElement"));
	
	    // append the new grid to the div "gridContainer4":
	    //dojo.byId("tabContainer").appendChild(workingGrid.domNode);
    	dojo.place(workingGrid.domNode, dojo.body(), "first");
	    // Call startup, in order to render the grid:
    	//workingGrid.render();
	    workingGrid.startup();
	    dojo.place(workingGrid.domNode, dojo.byId("dataGridContainer"), "first");
	    tabify();
    }
    else{
    	workingGrid.setStore(workingDataStore);
    }
    //renderPieChart(origData);
    HC.renderPieChart(origData);
}

function flattenDataForGrid(data){
	var rv = {};
	for(var x in data.data){
		if(typeof data.data[x] == "number"){
			var toAdd = {};
			toAdd[x] = data.data[x];
			dojo.mixin(rv,toAdd);
		}
	}
	return rv;
}

var globalRowIdIdent = 0;

var currentChart = null;
function renderPieChart(origData, filterOptions){
	var data = dojo.clone(origData.data);
	if(currentChart != null){
		currentChart.destroy();
	}
	else{
		//first time in, add filtering options
		//TODO:Need to update sliders for new data (folder)
		var slidersPane = buildPieChartSliders(origData);
		var dialog = new dijit.TooltipDialog({
			content:slidersPane,
			id:"pieChartOptionsDialog"
		});
		var button = new dijit.form.DropDownButton({
            label: "options",
            dropDown: dialog
        });
		dojo.place(button.domNode, dijit.byId("pieContentPane").domNode, "first");
		//dojo.byId("pieChart").appendChild(button.domNode);
	}
	if(typeof filterOptions != "undefined"){
		if(typeof filterOptions.otherMin != "undefined"){
			var dataSwap = dojo.clone(data);
			data = {other:0};
			for(var x in dataSwap){
				if(dataSwap[x] <= filterOptions.otherMin){
					data["other"] += dataSwap[x];
				}
				else{
					var toAdd = {};
					toAdd[x] = dataSwap[x];
					dojo.mixin(data, toAdd);
				}
			}
		}
		else if(typeof filterOptions.exclusionRange != "undefined"){
			var dataSwap = dojo.clone(data);
			data = {};
			for(var x in dataSwap){
				if(dataSwap[x] >= filterOptions.exclusionRange[0] && dataSwap[x] <= filterOptions.exclusionRange[1]){
					var toAdd = {};
					toAdd[x] = dataSwap[x];
					dojo.mixin(data, toAdd);
				}
			}
		}
	}
	console.debug(data);
	var dc = dojox.charting;
    currentChart = new dc.Chart2D("pieChart");
    currentChart.setTheme(dc.themes.MiamiNice).addPlot("default", {
        type: "Pie",
        font: "normal normal 8pt Tahoma",
        fontColor: "black",
        //labelOffset: -5,
        radius: 90
    });
    var series = new Array();
    for(var x in data){
    	var toAdd = {};
    	toAdd.y = data[x];
    	toAdd.text = "";
    	toAdd.tooltip = x + "(" + data[x] + ")";
    	toAdd.stroke = "black";
    	series.push(toAdd);
    }
    currentChart.addSeries("Series A", series);
    var anim_a = new dc.action2d.MoveSlice(currentChart, "default");
    var anim_b = new dc.action2d.Highlight(currentChart, "default");
    var anim_c = new dc.action2d.Tooltip(currentChart, "default");
    currentChart.render();
    //setTimeout("currentChart.resize()", 250);
}

function buildPieChartSliders(origData){
	var data = origData.data;
	var pieSlidersContentPaneDiv = document.createElement("div");
	pieSlidersContentPaneDiv.id = "pieSlidersContentPaneDiv";
	dojo.body().appendChild(pieSlidersContentPaneDiv);
	var range = getRange(data);
	console.debug(range);
	console.debug(data);
	var sliderOneDiv = document.createElement("div");
	sliderOneDiv.id = "sliderOneDiv";
	sliderOneDiv.appendChild(document.createTextNode("Threshold for 'other'"));
	var otherInput = document.createElement("input");
	otherInput.type = "text";
	otherInput.id = "otherInputEl";
	sliderOneDiv.appendChild(otherInput);
	var otherInputDijit = new dijit.form.TextBox({id:"otherInput", value:(range.min - 1)}, otherInput);
	pieSlidersContentPaneDiv.appendChild(sliderOneDiv);
	var otherSlider = new dijit.form.HorizontalSlider({
        value: range.min -1,
        minimum: range.min -1,
        maximum: range.max -1,
        intermediateChanges: true,
        discreteValues:range.max - range.min + 1,
        style: "width:300px;",
        origData: origData,
        onChange: function(value) {
            dojo.byId("otherInput").value = value;
            renderPieChart(this.origData, {otherMin:value});
        }
    },
    sliderOneDiv);
	
	//TODO:Buggy, match http://archive.dojotoolkit.org/nightly/dojotoolkit/dojox/form/tests/test_RangeSlider.html or split to two sliders
	var sliderTwoDiv = document.createElement("div");
	sliderTwoDiv.id = "sliderTwoDiv";
	sliderTwoDiv.appendChild(document.createTextNode("Exclusion Range"));
	var exclusionInput = document.createElement("input");
	exclusionInput.type = "text";
	exclusionInput.id = "exclusionInputEl";
	sliderTwoDiv.appendChild(exclusionInput);
	var exclusionInputDijit = new dijit.form.TextBox({id:"exclusionInput", value:(range.min - 1) + "," + range.max}, exclusionInput);
	pieSlidersContentPaneDiv.appendChild(sliderTwoDiv);
	var exclusionSlider = new dojox.form.HorizontalRangeSlider({
        value: [(range.min - 1), range.max + 1],
		minimum: range.min - 1,
        maximum: range.max - 1,
        intermediateChanges: false,
        discreteValues:range.max - range.min + 1,
        style: "width:300px;",
        origData: origData,
        onChange: function(value) {
	        console.debug(value);    
			dojo.byId("exclusionInput").value = value;
			renderPieChart(this.origData, {exclusionRange:value});
        }
    },
    sliderTwoDiv);
	console.debug(exclusionSlider);
	
	var pieSlidersContentPane = new dijit.layout.ContentPane({
		id:"pieSlidersContentPane",
		content: dojo.byId("pieSlidersContentPaneDiv")
	});
	return pieSlidersContentPane;
}

function getRange(data){
	var minFound = Number.MAX_VALUE;
	var maxFound = Number.MIN_VALUE;
	for(var x in data){
		if(data[x] < minFound){
			minFound = data[x];
		}
		if(data[x] > maxFound){
			maxFound = data[x];
		}
	}
	return {min:minFound, max:maxFound};
}

function arrayizeData(data){
	var items = new Array();
	var rv = { identifier: 'key', label: 'name', items:items};
	for(var x in data){
		var toAdd = {};
		toAdd.key = x;
		toAdd.name = x;
		toAdd.value = data[x];
		items.push(toAdd);
	}
	return rv;
}

function resizeFrame(){
	//first we have to find ourselves in the parent
	var parentFrames = window.top.document.getElementsByName("ReportGridFrame");
	var thisFrameTag;
	for(var i = 0; i < parentFrames.length; i++){
		if(parentFrames[i].contentWindow == window){
			thisFrameTag = parentFrames[i];
		}
	}
	var height = dojo.position(document.body).h;
	var width = dojo.position(document.body).w;
	thisFrameTag.height = height;
	thisFrameTag.width = width;
	thisFrameTag.style.height = (height) + "px";
	thisFrameTag.style.width = width + "px";
}

function dojoGo(){
	console.debug("dojoGo");
	registerCheckboxTree();
	loadTemplate();
}

function registerCheckboxTree(){
	dojo.provide("checkbox_tree.CheckBoxTree");
	dojo.declare( "checkbox_tree._CheckBoxTreeNode", dijit._TreeNode,
	{
		_checkbox: null,
		_createCheckbox: function() {
			this._checkbox = dojo.doc.createElement('input');
			this._checkbox.type    = 'checkbox';
			this._checkbox.checked = true;
			if(typeof this.item.root == "undefined" || this.item.root == false){
				this._checkbox.disabled = true;
				var path = this.item.path[0];
				path = path.replace(new RegExp("/", "g"), "_");
				this._checkbox.id = "tree_checkbox" + path;
			}
			else{
				this._checkbox.id = "tree_checkbox_"; 
			}
			dojo.place(this._checkbox, this.expandoNode, 'after');
		},
		
		postCreate: function() {
			this._createCheckbox();
			this.inherited( arguments );
		}

	});

	dojo.declare( "checkbox_tree.CheckBoxTree", dijit.Tree,
	{
		_onClick: function(nodeWidget, e) {
			var domElement = e.target;
			if(domElement.nodeName != 'INPUT') {
				return this.inherited( arguments );
			}
			var nodeWidget = dijit.getEnclosingWidget(domElement);
			if(!nodeWidget || !nodeWidget.isTreeNode){
				return;
			}
			nodeWidget._checkbox.checked ^ true;
			//here is where the logic happens
			
			undisableChildCheckboxes(nodeWidget, nodeWidget._checkbox.checked);
		},
		
		_createTreeNode: function( args ) {
			return new checkbox_tree._CheckBoxTreeNode(args);
		}

	});
}

function undisableChildCheckboxes(nodeWidget, isChecked){
	
	//TODO:Deal with skipped swaps
	if(typeof nodeWidget.item.children == "undefined"){
		var swap = new Array();
		for(var i = allItemsFlattened.length -1; i >= 0; i--){
			var path = allItemsFlattened[i].path[0];
			path = path.replace(new RegExp("/", "g"), "_");
			var theInput = dojo.byId("tree_checkbox" + path);
			console.debug(theInput);
			if(theInput.checked){
				swap.push(allItemsFlattened[i]);
			}
		}
		currentChartableItems = swap;
		HC.renderBarGraph();
		return;
	}
	currentChartableItems = new Array();
	for(var i = 0; i < nodeWidget.item.children.length; i++){
		var path = nodeWidget.item.children[i].path[0];
		path = path.replace(new RegExp("/", "g"), "_");
		var theInput = dojo.byId("tree_checkbox" + path);
		theInput.disabled = isChecked;
		if(!isChecked){
			currentChartableItems.push(nodeWidget.item.children[i]);
		}
	}
	HC.renderBarGraph();
}

function tabify(){
	console.debug("tabify");
	var tc = new dijit.layout.TabContainer({
		style: "height: 325px; width: 325px;"
	},
	"tabContainer");
	var dataTab = new dijit.layout.ContentPane({
		title: "data",
		content: workingGrid.domNode
	});
	var pieTab = new dijit.layout.ContentPane({
		id:"pieContentPane",
		title: "pie chart",
		content: dojo.byId("pieChart")
	});
	var barTab = new dijit.layout.ContentPane({
		id:"barContentPane",
		title: "bar graph",
		content: dojo.byId("barGraph")
	});
	tc.addChild(dataTab);
	tc.addChild(barTab);
	tc.addChild(pieTab);
	tc.startup();
	resizeFrame();
}