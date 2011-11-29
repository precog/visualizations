rm bin/js/reportgrid-viz-normal.js
mv bin/js/reportgrid-viz.js bin/js/reportgrid-viz-normal.js
compilejs --js bin/js/reportgrid-viz-normal.js --js_output_file bin/js/reportgrid-viz.js
# --compilation_level ADVANCED_OPTIMIZATIONS --externs externs/reportgrid-core.js