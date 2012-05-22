define([
      "order!util/ui"
    , "text!templates/toolbar.main.html"
    , "text!templates/menu.settings.html"
    , "util/fullscreen"
    , "app/theme"
], function(ui, tplToolbar, tplMenu, fullscreen, theme) {
    function buildItems(menu, groups) {
        $.each(groups, function(key) {
            menu.append('<li class="ui-state-disabled"><a href="#">'+key+' themes:</a></li>');
            $.each(this, function() {
                menu.append('<li data-editor-theme="'+this.token+'" class="editor-theme"><a href="#">'+this.name+'</a></li>');
            })
        });
    }

    return function(el) {
        el.append(tplToolbar);
        var right = el.find(".pg-toolbar-context"),
            menu = $('body').append(tplMenu).find("ul.pg-settings-menu:last");

        buildItems(menu, theme.groups());

        $(theme).on("change", function(e, name) {
            menu.find('.editor-theme').each(function() {
                if($(this).attr("data-editor-theme") === name) {
                    $(this).addClass('ui-state-active');
                } else {
                    $(this).removeClass('ui-state-active');
                }
            });
        });

        menu.find(".editor-theme").click(function() {
            theme.set($(this).attr("data-editor-theme"));
        });

        ui.menu(menu);
        menu.hide();
        menu.mouseleave(function() {
            menu.hide();
        }).click(function() {
            menu.hide();
        });

        ui.button(right, {
           icon : "ui-icon-gear"
        }).mouseenter(function() {
           var pos = $(this).offset(),
               w = $(this).outerWidth(),
               h = $(this).outerHeight();
           menu.css({
               position : "absolute",
               top : (pos.top + h) + "px",
               left : (pos.left + w - menu.outerWidth()) + "px"
           }).show();
        });

        ui.button(right, {
            icon : fullscreen.isFullScreen() ? "ui-icon-newwin" : "ui-icon-arrow-4-diag",
            handler : function() {
                fullscreen.toggle();
                if(fullscreen.isFullScreen()) {
                    $(this).find('.pg-icon').removeClass("ui-icon-newwin").addClass("ui-icon-arrow-4-diag");
                } else {
                    $(this).find('.pg-icon').removeClass("ui-icon-arrow-4-diag").addClass("ui-icon-newwin");
                }
            }
        });
    }
});
