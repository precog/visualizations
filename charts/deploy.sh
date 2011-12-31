rm bin/js/reportgrid-charts-normal.js
mv bin/js/reportgrid-charts.js bin/js/reportgrid-charts-normal.js
compilejs --js bin/js/reportgrid-charts-normal.js --js_output_file bin/js/reportgrid-charts.js
# --compilation_level ADVANCED_OPTIMIZATIONS --externs externs/reportgrid-core.js