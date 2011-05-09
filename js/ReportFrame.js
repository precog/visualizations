(function(){
	
	document.write("<ifr" + "ame src='about:blank' name='ReportGridFrame' width='850' height='650' style='width:850px;height:650px;'>");
	document.write("</ifr" + "ame>");
	
	if(typeof window.ReportFrameOnloadRegistered == "undefined"){
		window.ReportFrameQueryString = function(url, key, default_){
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
		
		window.ReportFrameOnloadRegistered = true;
		window.ReportFrameRegistration = function(){
			var allScripts = document.getElementsByTagName("script");
			var wsvKey;
			var apiKey;
			var dojoIncludes = [
			                    "dijit._Widget",
			                    "dojo.parser",
			                    "dijit.form.CheckBox",
			                    "dijit.form.RadioButton",
			                    "dijit.form.TimeTextBox",
			                    "dijit.form.DateTextBox",
			                    "dojo.data.ItemFileReadStore",
			                    "dijit.Tree",
			                    "dojo.data.ItemFileWriteStore",
			                    "dijit.tree.ForestStoreModel",
			                    "dojox.grid.DataGrid",
			                    "dijit.layout.TabContainer",
			                    "dijit.layout.ContentPane",
			                    "dojox.charting.Chart2D",
			                    "dojox.charting.plot2d.Pie",
			                    "dojox.charting.action2d.Highlight",
			                    "dojox.charting.action2d.MoveSlice",
			                    "dojox.charting.action2d.Tooltip",
			                    "dojox.charting.themes.MiamiNice",
			                    "dijit.form.DropDownButton",
			                    "dijit.TooltipDialog",
			                    "dijit.form.Slider",
			                    "dojox.form.RangeSlider",
			                    "dijit.form.HorizontalRule",
			                    "dijit.form.HorizontalRuleLabels",
			                    "dijit.form.TextBox",
			                    "dojox.uuid.generateRandomUuid"
			                    ];
			for(var i = 0; i < allScripts.length; i++){
				if(allScripts[i].src.indexOf("ReportFrame") != -1){
					wsvKey = ReportFrameQueryString(allScripts[i].src, "wsvKey");
					apiKey = ReportFrameQueryString(allScripts[i].src, "apiKey");
					var aReportFrame = allScripts[i];
					while(aReportFrame.nodeName != "IFRAME"){
						aReportFrame = aReportFrame.nextSibling;
					}
					//double check it is an iframe and name is correct
					if(aReportFrame.name == "ReportGridFrame" && aReportFrame.nodeName == "IFRAME"){
						var doco = aReportFrame.contentWindow.document
						doco.write("<ht" + "ml>");
						doco.write("<he" + "ad>");
						doco.write("<st" + "yle type='text/css'>");
						doco.write('@import "http://ajax.googleapis.com/ajax/libs/dojo/1.5/dojo/resources/dojo.css";');
						doco.write('@import "http://ajax.googleapis.com/ajax/libs/dojo/1.5/dijit/themes/dijit.css";');
						doco.write('@import "http://ajax.googleapis.com/ajax/libs/dojo/1.5/dijit/themes/claro/claro.css";');
						doco.write('@import "http://ajax.googleapis.com/ajax/libs/dojo/1.5/dojox/grid/resources/Grid.css";');
						doco.write('@import "http://ajax.googleapis.com/ajax/libs/dojo/1.5/dojox/grid/resources/claroGrid.css";');
						doco.write('@import "http://ajax.googleapis.com/ajax/libs/dojo/1.5/dojox/form/resources/RangeSlider.css";');
						doco.write('');
						doco.write("</st" + "yle>");
						//following is replaced with reportgrid.com/js/ReportFrameBootstrapper.js (non-api call)
						doco.write("<scr" + "ipt src='http://ajax.googleapis.com/ajax/libs/dojo/1.5/dojo/dojo.xd.js' type='text/javascript' >");
						doco.write("</scr" + "ipt>");
						//doco.write("<scr" + "ipt src='http://reportgrid.com/js/ReportFrameBootstrapper.js' type='text/javascript' >");
						doco.write("<scr" + "ipt src='http://gladstone/reportgrid/js/ReportFrameBootstrapper.js' type='text/javascript' >");
						doco.write("</scr" + "ipt>");
						doco.write("<scr" + "ipt type='text/javascript' >");
						doco.write("var wsvKey = '" + wsvKey + "';");
						doco.write("var apiKey = '" + apiKey + "';");
						//doco.write("dojo.registerModulePath('checkbox_tree','http://gladstone/reportgrid/js/lib/dojo/checkbox_tree');");
						for(var j = 0; j < dojoIncludes.length; j++){
							doco.write('dojo.require("' + dojoIncludes[j] + '");');
						}						
						doco.write("dojo.addOnLoad(dojoGo);");
						doco.write("</scr" + "ipt>");
						doco.write("</he" + "ad>");
						doco.write("</ht" + "ml>");
						doco.close();
					}
				}
			}
		}
		if (window.addEventListener) {
			window.addEventListener("load", ReportFrameRegistration, true);
		}
		else if (window.attachEvent) {
			window.attachEvent("onload", ReportFrameRegistration);
		} 
	}
	
})()