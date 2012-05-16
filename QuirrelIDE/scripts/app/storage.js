define(["order!jquery", "order!jquery-jstorage/jstorage"], function($) {
    return function(key, defaults) {
        var params = $.extend({}, defaults);

        function splitPath(key) {
            return key.split(/\.|\[|\]\.?/g);
        }

        function traverseGet(key) {
            var path = splitPath(key),
                ref = params,
                segment = path.shift();
            while(segment && ref) {
                ref = ref[segment];
                segment = path.shift();
            }
            return ref;
        }

        function traverseSet(key, value) {
            var path = splitPath(key),
                ref = params,
                segment = path.shift(),
                next,
                nextref;
            while(path.length > 0) {
                next = path.shift();
                nextref = ref[segment];
                if("undefined" === typeof nextref) {
                    nextref = ref[segment] = {};
                }
                ref = nextref;
                segment = next;
            }
            ref[segment] = value;
        }

        function traverseRemove(key) {
            var path = splitPath(key),
                ref = params,
                segment = path.shift(),
                next;
            while(path.length > 0) {
                next = path.shift();
                ref = ref[segment];
                if("undefined" === typeof ref)
                {
                    return;
                }
                segment = next;
            }
            delete ref[segment];
        }

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

        return {
            get : function(key, alternative) {
                var v = traverseGet(key);
                if("undefined" === typeof v)
                    return alternative;
                else
                    return v;
            },
            set : function(key, value) {
                traverseSet(key, value);
                delayedSave();
            },
            remove : function(key) {
                traverseRemove(key);
                delayedSave();
            },
            keys : function(key) {
                var ref = traverseGet(key);
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
            }
        }        
    };
});