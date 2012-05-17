define(["order!jquery", "app/traverse", "order!jquery-jstorage/jstorage"], function($, traverse) {
    return function(key, defaults) {
        var params = $.extend({}, defaults);

        function save() {
            $.jStorage.set(key, params)
        }

        function load() {
            var value = $.jStorage.get(key, {});
            $.extend(params, value);
        }

        var delayedSave = (function() {
            var kill;
            return function() {
                if(kill) clearInterval(kill);
                kill = setTimeout(save, 100);
            }
        })();

        load();

        function getLeafPaths(o, cur) {
            var paths = [], cur = cur || [];
            for(var key in defaults) {
                if(defaults.hasOwnProperty(key)) {
                    var v = o[key];
                    if(v instanceof Object) {
                        paths = paths.concat(getLeafPaths(v, cur));
                    } else {
                        paths.push(cur.concat([key]).join('.'));
                    }
                }
            }
            return paths;
        }

        var monitor,
            storage = {
            get : function(key, alternative) {
                var v = traverse.get(params, key);
                if("undefined" === typeof v)
                    return alternative;
                else
                    return v;
            },
            set : function(key, value) {
                traverse.set(params, key, value);
                delayedSave();
            },
            remove : function(key) {
                traverse.remove(params, key);
                delayedSave();
            },
            keys : function(key) {
                var ref = traverse.get(params, key);
                if(ref && "object" === typeof ref) {
                    var result = [];
                    for(var k in ref) {
                        if (ref.hasOwnProperty(k)) {
                            result.push(k);
                        }
                    }
                    return result;
                } else {
                    return [];
                }
            },
            save : function(instant) {
                if(instant)
                    save();
                else
                    delayedSave();
            },
            load : function() {
                load();
            },
            clear : function() {
                $.jStorage.flush();
            },
            toString : function() {
                return JSON.stringify(params);
            },
            monitorStart : function(delay) {
                monitor.start(delay);
            },
            monitorEnd : function() {
                monitor.end();
            },
            monitorEnabled : function() {
                return monitor.monitoring();
            }
        };

        monitor = (function() {
            var kill,
                paths = getLeafPaths(defaults),
                len = paths.length,
                last = {};

            function loop() {
                $.jStorage.reInit();
                var cached = $.jStorage.get(key, {}), path, cvalue, i;
                for(i = 0; i < len; i++) {
                    path = paths[i];
                    cvalue = traverse.get(cached, path);
                    if("undefined" === typeof cvalue) continue; // no value in cache
                    if("undefined" === typeof last[path]) {
                        last[path] = cvalue;
                        continue;
                    }
                    if(last[path] === cvalue) continue;
                    if(cvalue === traverse.get(params, path)) continue; // value has not changed
                    last[path] = cvalue;
                    traverse.set(params, path, cvalue);
                    $(storage).trigger(path, cvalue);
                }
            }

            loop();

            return {
                start : function(delay) {
                    delay = delay || 2500;
                    if(kill) {
                        this.end();
                        this.start(delay);
                    } else {
                        kill = setInterval(loop, delay);
                    }
                },
                end : function() {
                    clearInterval(kill);
                },
                monitoring : function() {
                    return !!kill;
                }
            }
        }());

        monitor.start();

        return storage;
    };
});