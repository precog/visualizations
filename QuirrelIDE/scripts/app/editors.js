define([
    "app/util/storage"
],

function(storage) {
    var map  = {},
        list = [],
        last = 0;

    function anonymousName() {
        return "*query #" + (++last);
    }

    function createEditor(o) {
        o = $.extend({
            name : null
        }, o);
        if(!o.name)
            o.name = anonymousName();
        return o;
    }

    var editors = {
        add : function(options) {
            var editor = createEditor(options);
            map[editor.name] = editor;
            list.push(editor);
            $(editors).trigger("added", editor);
            return editor;
        },
        remove : function(index) {
            var editor = list[index];
            delete map[editor.name];
            list.splice(index, 1);
            $(editors).trigger("removed", index);
            return editor;
        },
        list : function() {
            return list.copy();
        },
        count : function() {
            return list.length;
        },
        get : function(index) {
            return list[index];
        },
    };

    return editors;
});