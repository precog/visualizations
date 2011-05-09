#!/bin/sh
../main/haxe/pivotTable/buildAll.sh;  
mv pivotTable.js ../main/js/pivotTable.js; 
../main/haxe/insightexplorer/buildAll.sh;
mv ../main/haxe/insightexplorer/bin/insightexplorer.js ../main/js/insightexplorer.js;  
cp ../main/haxe/insightexplorer/bin/insightexplorer.css ../main/css/insightexplorer.css;  