define([
      "util/traverse"
    , "util/storage"
],

function(traverse, buildStorage) {
    return function(key, defaults) {
        var storage = buildStorage(key, defaults),
            monitor;

        function equals(a, b) {
//            console.log("COMPARING " + JSON.stringify(a) + " AND " + JSON.stringify(b));
            if(typeof a !== typeof b)
                return false;
            else if(a instanceof Array) {
                if(a.length != b.length)
                    return false;
                for(var i = 0; i < a.length; i++) {
                    if(!equals(a[i], b[i]))
                        return false;
                }
                return true;
            } else if(a instanceof Object) {
                var akeys = $.map(a, function(value, key) { return key }),
                    bkeys = $.map(b, function(value, key) { return key });
                if(!equals(akeys, bkeys))
                    return false;
                for(var i = 0; i < akeys.length; i++) {
                    if(!equals(a[akeys[i]], b[akeys[i]]))
                        return false;
                }
                return true;
            } else {
                return a === b;
            }
        }

        storage.monitor = monitor = (function() {
            var kill = null,
                last = {},
                paths = [];

            function loop() {
                if(paths.length == 0) return;
                $.jStorage.reInit();
                var len = paths.length,
                    cached = $.jStorage.get(key, {}),
                    path,
                    cvalue;
                for(var i = 0; i < len; i++) {
                    path = paths[i];
//                    console.log("path " + path + " for " + JSON.stringify(cached) + " AND " + JSON.stringify(params));
                    cvalue = traverse.get(cached, path);
//                    console.log("value " + cvalue + " VS " + traverse.get(params, path));
//                    if("undefined" === typeof cvalue) continue; // no value in cache
                    if("undefined" === typeof last[path]) {
                        last[path] = cvalue;
                        continue;
                    }

                    if(equals(last[path], cvalue)) continue;
                    if(equals(cvalue, traverse.get(params, path))) continue; // value has not changed
                    last[path] = cvalue;
                    traverse.set(params, path, cvalue);
                    $(storage).trigger(path, [cvalue]);
                }
            }

            loop();

            return {
                start : function(delay) {
                    delay = delay || 2500;
                    if(this.monitoring()) {
                        this.end();
                        this.start(delay);
                    } else {
                        kill = setInterval(loop, delay);
                    }
                },
                end : function() {
                    clearInterval(kill);
                    kill = null;
                },
                monitoring : function() {
                    return null !== kill;
                },
                bind : function(path, handler) {
                    if(paths.indexOf(path) < 0) paths.push(path);
                    $(storage).on(path, handler);
//                    console.log("monitoring paths: " + paths);
                }
            }
        }());

        monitor.start();

        return storage;
    };
});