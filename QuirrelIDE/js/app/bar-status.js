define([
      "order!util/ui"
    , "text!templates/toolbar.status.html"
    , "text!templates/menu.editor.status.html"
],

    function(ui, tplToolbar, tplMenu) {

        return function(el, editor) {
            el.append(tplToolbar);

            var menu = $('body').append(tplMenu).find(".pg-menu-editor-status:last");
            ui.menu(menu);
            menu.hide();
            menu.mouseleave(function() {
                menu.hide();
            }).click(function() {
                menu.hide();
            });

            el.find('.pg-editor-settings-trigger').mouseenter(function() {
                var pos = $(this).offset(),
                    w = $(this).outerWidth(),
                    h = $(this).outerHeight();
                menu.css({
                    position : "absolute",
                    top : (pos.top - menu.outerHeight()) + "px",
                    left : (pos.left) + "px"
                }).show();
            });

            function updateTabSize() {
                var size = "" + editor.getTabSize();
                el.find('.pg-tab-size').text(size);

                menu.find('.pg-tab-size-option').each(function() {
                    if($(this).attr("data-tab-size") === size) {
                        $(this).addClass('ui-state-active');
                    } else {
                        $(this).removeClass('ui-state-active');
                    }
                });
            }

            menu.find('.pg-tab-size-option').click(function() {
                editor.setTabSize(parseInt($(this).attr("data-tab-size")));
            });

            function updateSoftTabs() {
                var toggle = editor.getUseSoftTabs();
                menu.find('.pg-soft-tabs').each(function() {
                    if(toggle) {
                        $(this).addClass('ui-state-active');
                    } else {
                        $(this).removeClass('ui-state-active');
                    }
                });
            }

            menu.find('.pg-soft-tabs').click(function() {
                editor.setUseSoftTabs(!editor.getUseSoftTabs());
            })

            $(editor).on("tabSizeChanged", updateTabSize);
            $(editor).on("useSoftTabsChanged", updateSoftTabs);

            $(editor).on("change", function(_, code) {
                el.find('.pg-words').text(code.split(/\b[a-z0-9]+?\b/gi).length-1);
                el.find('.pg-characters').text(code.length);
            });

            $(editor).on("changeCursor", function(_, pos) {
                el.find('.pg-line').text(pos.row+1);
                el.find('.pg-column').text(pos.column+1);
            });

            updateTabSize();
            updateSoftTabs();




        }
    });