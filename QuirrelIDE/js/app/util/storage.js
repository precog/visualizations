define([
      "order!util/traverse"
    , "order!jlib/jstorage/jstorage"
],

function(traverse) {
    return function(key, defaults) {
        var params = $.extend({}, defaults);

        function save() {
            $.jStorage.set(key, params)
        }

        function load() {
            $.jStorage.reInit();
            var value = $.jStorage.get(key, {});
            $.extend(params, value);
        }

        var delayedSave = (function() {
            var k = null;
            return function() {
                if(k !== null) {
                    clearInterval(k);
                    k = null;
                }
                k = setTimeout(save, 100);
            }
        })();

        load();

        var storage = {
                get : function(key, alternative) {
                    var v = traverse.get(params, key);
                    if("undefined" === typeof v)
                        return alternative;
                    else
                        return v;
                },
                set : function(key, value) {
//                    console.log("SET " +key);
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
                all : function() {
                    return params;
                }
            };

        return storage;
    };
});