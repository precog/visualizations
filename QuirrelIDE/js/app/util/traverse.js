define([], function() {
    function splitPath(key) {
        return key.split(/\./g);
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
//console.log(key, JSON.stringify(value), splitPath(key));
            var path = splitPath(key),
                ref = o,
                segment = path.shift();
            while(path.length > 0) {
                if("undefined" === typeof ref[segment]) {
                    ref[segment] = {};
                }
                ref = ref[segment];
                segment = path.shift();
            }
            var svalue = JSON.stringify(value);
            if(JSON.stringify(ref[segment]) !== svalue) {
                ref[segment] = JSON.parse(svalue); // avoids object reference
                return true;
            } else {
                return false;
            }
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