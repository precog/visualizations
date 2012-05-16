define([
    "order!jquery",
    "order!app/ui",
    "text!templates/mainbar.html",
    "app/fullscreen",
], function($, ui, template, fullscreen) {
    return function(el) {
        el.append(template)
        var left  = el.find(".pg-toolbar-actions"),
            right = el.find(".pg-toolbar-context");

        ui.button(right, {
            icon : "pg-icon " + (fullscreen.isFullScreen() ? "pg-minimize" : "pg-maximize" ),
            handler : function() {
                fullscreen.toggle();
                if(fullscreen.isFullScreen()) {
                    $(this).find('.pg-icon').removeClass("pg-minimize").addClass("pg-maximize");
                } else {
                    $(this).find('.pg-icon').removeClass("pg-maximize").addClass("pg-minimize");
                }
            }
        });
    }
});
