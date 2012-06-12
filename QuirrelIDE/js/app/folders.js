define([
    "util/precog"
    , "util/md5"
    , "util/storagemonitor"
    , "util/ui"
    , "util/dialog-lineinput"
    , "text!templates/toolbar.folders.html"
    , "text!templates/menu.context.system.node.html"
    , "text!templates/menu.context.system.root.html"
    , "order!jlib/jstree/vakata"
    , "order!jlib/jstree/jstree"
    , "order!jlib/jstree/jstree.themes"
],
    function(precog, md5, createStore, ui, openRequestInputDialog, tplToolbar, tplNodeContextMenut, tplRootContextMenut){
        var STORE_KEY = "pg-quirrel-virtualpaths-"+md5(precog.config.tokenId),
            basePath = precog.config.basePath || "/",
            store = createStore(STORE_KEY, { virtuals : { }});

        store.monitor.start(500);

        function setVirtualPath(parent, name) {
            var arr = getVirtualPaths(parent);
            if(arr.indexOf(name) < 0)
            {
                arr.push(name);
                store.set("virtuals." + parent, arr);
            }
        }

        function getAllVirtualPaths() {
            return store.get("virtuals", {});
        }

        function getVirtualPaths(parent) {
            return store.get("virtuals."+parent, []);
        }

        function removeVirtualPaths(parent, name) {
            var arr = store.get("virtuals."+parent, []),
                pos = arr.indexOf(name);
            if(pos < 0) return;
            arr.splice(pos, 1);
            if(arr.length === 0) {
                store.remove("virtuals."+parent);
            } else {
                store.set("virtuals." + parent, arr);
            }
        }

        return function(el) {
            var wrapper, map;

            el.find(".pg-toolbar").append(tplToolbar);
            var elActions = el.find(".pg-toolbar-actions"),
                elContext = el.find(".pg-toolbar-context"),
                elRoot = el.find(".pg-tree").append('<div class="pg-root"></div>').find(".pg-root"),
                elFolders = el.find(".pg-tree").append('<div class="pg-structure"></div>').find(".pg-structure");
            elActions.html("folders");
            var tree = elFolders.jstree({
                plugins : [
                    "themes"
                ]
            });

            elRoot.html('<div class="jstree jstree-default"><a href="#" data="'+basePath+'"><ins class="jstree-icon jstree-themeicon"> </ins>/</a></div>');

            tree.bind("open_node.jstree", function(e, data) {
                var paths = $(data.rslt.obj).find("li");

                paths.each(function(i, el){
                    var path = $(el).attr("data");
                    if(map[path]) return;
                    loadAtPath(path, 1, el);
                });
            });

            function triggerQuery(path) {
                $(wrapper).trigger("querypath", path);
            }

            function pathFromSelectedNode() {
                return $(menuselected).closest("li").attr("data") || $(menuselected).attr("data");
            }

            function createNodeAt(path, name) {
                if(!(name && path)) {
                    return;
                }
                // create path in config
                setVirtualPath(path, name);
                // traverse the tree from the root to path
                var parent;
                if(path == basePath) {
                    parent = -1;
                } else {
                    var list = tree.find("li"),
                        len  = list.length;
                    for(var i = 0; i < len; i++) {
                        if($(list.get(i)).attr("data") === path) {
                            parent = list.get(i);
                            break;
                        }
                    }
                }
                if(!parent) return;
                // create visual node
                var p = ("/" === path ? "/" : path + "/") + name;
                if(map[p]) return; // node already exists in the tree
                map[p] = true;
                addFolder(name, p, null, parent);
            }

            function requestNodeCreationAt(path) {
                var p = path.substr(0, basePath.length) === basePath ? "/" + path.substr(basePath.length) : path,
                    title   = "Create Folder",
                    message = "Create a sub folder at: <i>"+path+"</i>";
                // open dialog
                openRequestInputDialog(title, message, "folder name", "", function(name) {
                    if(null != name && name.match(/^[a-z0-9]+$/i))
                        return null; // OK
                    else
                        return "path name cannot be empty and it can only be composed of alpha-numeric characters";
                }, function(name) {
                    createNodeAt(path, name);
                });
            }

            var menuselected,
                menu = ui.contextmenu(tplNodeContextMenut),
                menuRoot = ui.contextmenu(tplRootContextMenut);

            menu.find(".pg-toggle").click(function() {
                tree.jstree("toggle_node", menuselected);
            });
            menu.find(".pg-query").click(function() {
                triggerQuery(pathFromSelectedNode());
            });
            menu.find(".pg-create").click(function() {
                var path = pathFromSelectedNode();
                requestNodeCreationAt(path);
            });

            menuRoot.find(".pg-create").click(function() {
                var path = pathFromSelectedNode();
                requestNodeCreationAt(path);
            });

            elRoot.find("a").click(function(e) {
                var left = e.pageX - menuRoot.outerWidth() / 2;
                if(left < 0) left = 0;
                var pos = $(e.currentTarget).offset(),
                    h = $(e.currentTarget).outerHeight();
                menuRoot.css({
                    position : "absolute",
                    top : (pos.top + h) + "px",
                    left : (pos.left) + "px",
                    zIndex : e.currentTarget.style.zIndex + 100
                }).show();
                menuselected = e.currentTarget;
            })

            function addFolder(name, path, callback, parent) {
                if(!parent) parent = -1;
                return tree.jstree(
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
                                var pos = $(e.currentTarget).offset(),
                                    h = $(e.currentTarget).outerHeight();
                                menu.css({
                                    position : "absolute",
                                    top : (pos.top + h) + "px",
                                    left : (pos.left) + "px",
                                    zIndex : e.currentTarget.style.zIndex + 100
                                }).show();
                                menuselected = e.currentTarget;
                            })
                            .dblclick(function(e) {
                                var path = $(e.currentTarget).closest("li").attr("data");
                                triggerQuery(path);
                                menu.hide();
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
                    var base = "/" === path ? "" : path,
                        virtuals = getVirtualPaths(path);
                    virtuals.forEach(function(virtual) {
                        if(virtual.substr(0,1) !== '/') virtual = '/' + virtual;
                        if(paths.indexOf(virtual) < 0) paths.push(virtual);
                    });
                    paths.sort();
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
                icon   : "ui-icon-refresh",
                handler : function() { wrapper.refresh(); }
            });

            wrapper = {
                refresh : function() {
                    map = {};
                    tree.jstree("delete_node", "*");
                    loadAtPath(basePath, 2);
                },
                createNodeAt : function(path, name) {
                    createNodeAt(path, name);
                },
                requestNodeCreationAt : function(path) {
                    requestNodeCreationAt(path);
                }
            };

            wrapper.refresh();


            store.monitor.bind("virtuals", function(_, paths) {
                var current = getAllVirtualPaths(),
                    toadd = [];
                for(var path in paths) {
                    if(current.hasOwnProperty(path)) {
                        if(!current[paths]) {
                            var list = paths[path];
                            for(var i = 0; i < list.length; i++) {
                                toadd.push({
                                    path : path,
                                    name : list[i]
                                });
                            }
                        }
                    }
                }
                for(var i = 0; i < toadd.length; i++) {
                    var o = toadd[i];
                    createNodeAt(o.path, o.name);
                }
            });

            return wrapper;
        }
    });