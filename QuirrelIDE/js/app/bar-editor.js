define([
      "order!util/ui"
    , "app/editors"

    , "text!templates/toolbar.editor.html"
],

function(ui, editors, tplToolbar) {

    return function(el) {
        el.append(tplToolbar);
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
    }
});

//        tabs.tabs().find( ".ui-tabs-nav" ).sortable({ axis: "x" });