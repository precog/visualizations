rm bin/js/reportgrid-charts-normal.js
mv bin/js/reportgrid-charts.js bin/js/reportgrid-charts-normal.js
compilejs --js bin/js/reportgrid-charts-normal.js --js_output_file bin/js/reportgrid-charts.js
cp -R bin/js/reportgrid-charts.js ../../client-libraries/reportgrid/js/src/v1/reportgrid-charts.js
#compilejs "--js bin/js/reportgrid-charts-normal.js --compilation_level ADVANCED_OPTIMIZATIONS --js_output_file bin/js/reportgrid-charts.js"