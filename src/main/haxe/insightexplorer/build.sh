#!/bin/sh
haxe  -cp src \
      -cp $RG_CLIENT_HOME/haxe/src\
      -cp $THX_HOME/src\
      -js bin/insightexplorer.js\
      rg.InsightExplorer;

#open bin/index.html;
