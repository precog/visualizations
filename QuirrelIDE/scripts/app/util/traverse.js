define([], function() {
    function splitPath(key) {
        return key.split(/\.|\[|\]\.?/g);
    }

    return {
        get : function(o, key) {
            var path = splitPath(key),
                ref = o,
                segment = path.shift();
            while(segment && ref) {
                ref = ref[segment];
                segment = path.shift();
            }
            return ref;
        },
        set : function (o, key, value) {
            var path = splitPath(key),
                ref = o,
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
        },
        remove : function(o, key) {
            var path = splitPath(key),
                ref = o,
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
    };
});