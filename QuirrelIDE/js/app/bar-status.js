define([
      "order!util/ui"

    , "text!templates/toolbar.status.html"
],

    function(ui, tplToolbar) {

        return function(el, editor) {
            el.append(tplToolbar);

            function updateTabSize() {
                el.find('.pg-tab-size').text(editor.getTabSize());
            }

            $(editor).on("tabSizeChanged", updateTabSize);

            $(editor).on("change", function(_, code) {
                el.find('.pg-words').text(code.split(/\b[a-z0-9]+?\b/gi).length-1);
                el.find('.pg-characters').text(code.length);
            });

            $(editor).on("changeCursor", function(_, pos) {
                el.find('.pg-line').text(pos.row+1);
                el.find('.pg-column').text(pos.column+1);
            });

            updateTabSize();
            console.log("added");
            /*
            var right = el.find('.pg-toolbar-context'),
                autoGoToTab = false,
                tabs = ui.tabs(el.find('.pg-editor-tabs'), {
                    tabTemplate: "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close'>Remove Tab</span></li>",
                    add: function(event, ui) {
                        var index = ui.index;
                        if(autoGoToTab)
                        {
                            tabs.tabs("select", ui.index);
                            editors.activate(ui.index);
                        }
                    }
                });

            tabs.on({
                click : function(){
                    var index = $("li", tabs).index($(this).parent());
                    editors.remove(index);
                }
            }, '.ui-icon-close');

            tabs.on({
                click : function() {
                    var index = $("li", tabs).index($(this).parent());
                    editors.activate(index);
                }
            }, 'li a');

            var index = 0;
            ui.button(right, {
                icon : "ui-icon-plusthick",
                handler : function() {
                    autoGoToTab = true;
                    editors.add();
                    autoGoToTab = false;
                }
            });

            $(editors).on("added", function(e, editor) {
                tabs.tabs("add", "#pg-editor-tab-" + (++index), editor.name);
            });

            $(editors).on("removed", function(e, index) {
                tabs.tabs("remove", index);
            });

            $(editors).on("activated", function(e, index) {
                tabs.tabs("select", index);
            });
            */
        }
    });