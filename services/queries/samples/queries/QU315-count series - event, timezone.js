//** QUERY
ReportGrid.query
	.series({
		path : pathvalue,
		event : "impression",
		timezone : "2"
	})

//** DOC
ReportGrid.query
	.paths({ parent : "/" }) // loads [{ parent : "/", path : "/p1" }, { parent : "/", path : "/p2" } ...]
	.events({ limit : 5, order : "ascending" }) // loads [{ path : "/p1", event : "impression" } ... { path : "/p2", event : "engage" } ...]
	.count({
		where : { property : "browser", value : "chrome" }
	}) // loads [{ path : ..., event : ..., count : 100 } ...]

// explore
+.paths(p : {})			// params:  parent (string)
						// returns: parent, path (string)
						// uses:    children
+.events(p : {})		// params:  path
						// returns: path, event (string)
						// uses:    children
+.properties(p : {})	// params:  path, event, ?property (string)
						// uses:    children
						// returns: path, event, property
.values(p : {})			// params:  path, event, property, ?limit, ?order
						// returns: path, event, property, value (dynamic)
						// uses:    propertyValues
.count(p : {})			// params:  path, event, (?property, ?value|?where (Array<{ property : String, value : Dynamic }>)), (?)start/end
						// returns: path, event, ?property, ?value, count
						// uses:    propertyCount | propertyValueCount | searchCount

// still to address
propertyCount               path, event|property, (?)start/end
propertySeries              path, event|properrty, periodicity/start/end, groupBy/groups
propertyMeans               path, event|properrty, periodicity/start/end
propertyStandardDeviations  path, event|properrty, periodicity/start/end
propertyValueCount          path, property, value, (?)start/end
propertyValueSeries         path, property, value, periodicity/start/end, groupBy/groups
searchCount					path, where, (?)start/end
searchSeries				path, where, periodicity/start/end
intersect					path, properties (property, limit, order) , periodicity/start/end, groupBy/groups
histogram					path, property, limit, order, (?)start/end

// common attributes : keep (bool|array string)


// collection
+.delegate(handler : Array<DataPoint> -> Void)
+.cross(values : Array<DataPoint>)
+.map(f : DataPoint -> Int -> DataPoint)
+.transform(f : Array<DataPoint> -> Array<DataPoint>)
+.filter(f : DataPoint -> Bool)
+.limit(?offset : Int, count : Int)
+.sort(f : DataPoint -> DataPoint -> Int)
+.sortByField(field : String)
+.sortByFields(fields : Array<String>)
+.reverse()
+.mapFields

.reduce
.split/zip/concat
.splitAt
