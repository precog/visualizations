define([
      "text!templates/layout.full.html"
    , "order!app/util/ui"
    , "order!ui/jquery.ui.core"
    , "order!ui/jquery.ui.widget"
    , "order!ui/jquery.ui.mouse"
    , "order!ui/jquery.ui.draggable"
    , "order!libs/jquery/layout/jquery.layout"
    , "domReady!"
],

 function(template, ui) {
    var toolbarHeight = 34;
    return function(container) {
        var layouts = [];
        container = (container && $(container)) || $('body');

        container.append(template);
        layouts.push(container.layout());

        var defaults = {
                fxName:               "slide"
                ,  fxSpeed:               "slow",
                initClosed : false,
                resizable : true,
                slidable : true
            },
            toolbar = {
                resizable : false,
                closable : false,
                slidable : false,
                size: toolbarHeight,
                spacing_open: 0,
                spacing_closed: 0
            };

        function refreshLayouts() {
            for(var i = 0; i < layouts.length; i++) {
                layouts[i].resizeAll();
            }
        }

        // main seperation
        layouts.push(container.find('.pg-ide').layout({
            defaults : defaults,
            north : toolbar,
            east : { size : 200 }
        }));


        // system separation
        layouts.push(container.find('.pg-system').layout({
            defaults : defaults,
            north : {
                size : "50%"
            }
        }));

        // console separation
        layouts.push(container.find('.pg-main').layout({
            defaults : defaults,
            south : { size : "15%" }
        }));

        // editor-support separation
        layouts.push(container.find('.pg-editor-support').layout({
            defaults : defaults,
            east : { size : "30%" }
        }));

        // editor separation
        layouts.push(container.find('.pg-editor').layout({
            defaults : defaults,
            south : toolbar
        }));

        // io separation
        layouts.push(container.find('.pg-io').layout({
            defaults : defaults,
            south : {
                size : 200,
                closable : false
            }
        }));

        // output separation
        layouts.push(container.find('.pg-output').layout({
            defaults : defaults,
            north : toolbar
        }));

        // output separation
        layouts.push( container.find('.pg-input').layout({
            defaults : defaults,
            north : toolbar
        }));

        // wire styling to JQuery UI
        container.find(".pg-pane").addClass("ui-widget-content");
        container.find(".ui-layout-toggler")
            .mouseenter(function() { $(this).addClass("ui-state-hover"); })
            .mouseleave(function() { $(this).removeClass("ui-state-hover"); })
            .addClass("ui-widget-header")
        ;
        container.find(".ui-layout-resizer")
            .addClass("ui-widget-content")
        ;

        container.find(".ui-layout-toggler-vertical")
            .addClass("ui-slider-vertical")
        ;
        container.find(".ui-layout-resizer-dragging")
            .addClass("ui-state-hover")
        ;

        return {
            container : container,
            refresh : refreshLayouts,
            getBarMain : function() { return container.find('.pg-mainbar'); },
            getBarEditor : function() { return container.find('.pg-input .pg-toolbar'); }
        };
    };
});