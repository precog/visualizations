define(["order!jquery", "text!templates/full-layout.html"
    , "order!jquery-ui-1.9/ui/jquery.ui.core"
    , "order!jquery-ui-1.9/ui/jquery.ui.widget"
    , "order!jquery-ui-1.9/ui/jquery.ui.mouse"
    , "order!jquery-ui-1.9/ui/jquery.ui.draggable"
    , "order!jquery-layout/jquery.layout"
    , "domReady!"
],

 function($, template) {
    var toolbarHeight = 30,
        create = function(container) {
            var layouts = [];
            container = (container && $(container)) || $('body');

            container.append(template);
            layouts.push(container.layout());

            var defaults = {
                    initClosed : false,
                    resizable : true
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

            setTimeout(refreshLayouts, 0);

            return {
                container : container,
                refresh : refreshLayouts,
                getMainBar : function() { return container.find('.pg-mainbar'); }
            };
        };

    return create;
})