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
                    console.log("INVALID NODE CREATION: " + name + " AT " + path);
                    return;
                }
                console.log("CREATE NODE " + name + " AT " + path);
                // create path in config
                setVirtualPath(path, name);
                // traverse the tree from the root to path
                // create visual node
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
                        return "path name cannot be empty and it can only be composed of all alphanumeric characters";
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


            store.monitor.bind("pathAdded", function(_, path) {
                if(path.substring(0, 1) === '/') path = path.substring(1);
                var parts = path.split("/"),
                    name = parts.pop(),
                    parent = "/" + parts.join("/");
                console.log(parent, name);
                createNodeAt(parent, name);
            });

            return wrapper;
        }
    });