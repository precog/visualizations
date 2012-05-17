define([
      "order!jquery"
    , "order!app/util/ui"
    , "app/editors"


    , "text!templates/toolbar.editor.html"
], function($, ui, editors, tplToolbar) {

    return function(el) {
        el.append(tplToolbar);
        var right = el.find('.pg-toolbar-context'),
            tabs = ui.tabs(el.find('.pg-editor-tabs'), {
                tabTemplate: "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close'>Remove Tab</span></li>",
                add: function(event, ui) {
                    console.log("tab added");
                }
            });

        tabs.on({
            click : function(a, b){
                var index = $("li", tabs).index($(this).parent());
                editors.remove(index);
            }
        }, '.ui-icon-close');

        var index = 0;
        ui.button(right, {
            icon : "ui-icon-plus",
            handler : function() {
                editors.add();
            }
        });

        $(editors).on("added", function(e, editor) {
            console.log("added listener");
            tabs.tabs("add", "#pg-editor-tab-" + (++index), editor.name);
        });

        $(editors).on("removed", function(e, index) {
            console.log("removed listener " + index);
            tabs.tabs("remove", index);
        });
    }
});

//        tabs.tabs().find( ".ui-tabs-nav" ).sortable({ axis: "x" });