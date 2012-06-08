define([
      "util/precog"
    , "util/ui"
    , "text!templates/toolbar.folders.html"
    , "order!jlib/jstree/vakata"
    , "order!jlib/jstree/jstree"
    , "order!jlib/jstree/jstree.themes"
],
function(precog, ui, tplToolbar){
    var basePath = precog.config.basePath || "/";
    return function(el) {
        var wrapper, map;

        el.find(".pg-toolbar").append(tplToolbar);
        var elActions = el.find(".pg-toolbar-actions"),
            elContext = el.find(".pg-toolbar-context"),
            elFolders = el.find(".pg-tree").append('<div class="pg-structure"></div>').find(".pg-structure");
        elActions.html("folders");
        var tree = elFolders.jstree({
            plugins : [
                "themes"
            ]
        });

        tree.bind("open_node.jstree", function(e, data) {
            var paths = $(data.rslt.obj).find("li");

            paths.each(function(i, el){
                var path = $(el).attr("data");
                if(map[path]) return;
                loadAtPath(path, 1, el);
            });
        });

        function triggerQuery(path) {
//            path = "/" + path.substr(basePath.length === 1 ? 1 : basePath.length + 1);
            $(wrapper).trigger("querypath", path);
        }

        function addFolder(name, path, callback, parent) {
            if(!parent) parent = -1;
            tree.jstree(
                  "create_node"
                , parent
                , {
                      "title" : name
                    , data : path
                    , "li_attr" : {
                        data : path
                    }
                }
                , "last"
                , function(el) {
                    $(el).find("a:first")
                        .click(function(e) {
                            tree.jstree("toggle_node", e.currentTarget);
                            e.preventDefault(); return false;
                        })
                        .dblclick(function(e) {
                            var path = $(e.currentTarget).closest("li").attr("data");
                            triggerQuery(path);
                            e.preventDefault(); return false;
                        });
                    if(callback) callback.apply(el, [path]);
                    return false;
                }
            );
        }

        function loadAtPath(path, levels, parent) {
            if("undefined" === typeof levels)
                levels = 1;

            map[path] = true;
            precog.paths(path, function(paths){
                var base = "/" === path ? "" : path;
                paths.forEach(function(subpath) {
                    subpath = base + subpath;
                    addFolder(subpath.split("/").pop(), subpath, function(){
                        if(levels > 1) {
                            loadAtPath(subpath, levels-1, this);
                        }
                    }, parent || -1);
                });
            });
        }

        ui.button(elContext, {
            label   : "refresh",
            handler : function() { wrapper.refresh(); }
        });

        wrapper = {
            refresh : function() {
                map = {};
                tree.jstree("delete_node", "*");
                loadAtPath(basePath, 2);
            }
        };

        wrapper.refresh();

        return wrapper;
    }
});