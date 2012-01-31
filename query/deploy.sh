rm bin/js/reportgrid-query-normal.js
mv bin/js/reportgrid-query.js bin/js/reportgrid-query-normal.js
compilejs --js bin/js/reportgrid-query-normal.js --js_output_file bin/js/reportgrid-query.js
# --compilation_level ADVANCED_OPTIMIZATIONS --externs externs/reportgrid-core.js