del bin\js\reportgrid-viz-normal.js
rename bin\js\reportgrid-viz.js reportgrid-viz-normal.js
compilejs --js bin\js\reportgrid-viz-normal.js --js_output_file bin\js\reportgrid-viz.js
REM --compilation_level ADVANCED_OPTIMIZATIONS --externs externs/reportgrid-core.js
PAUSE