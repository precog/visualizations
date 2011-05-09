#!/bin/sh
haxe   -cp ./src -cp ./src/dom -js pivotTable.js -main pivotTable.Main;
open index.html;