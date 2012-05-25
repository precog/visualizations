define([
      "order!ui/jquery.ui.core"
    , "order!ui/jquery.ui.widget"
    , "order!ui/jquery.ui.mouse"
    , "order!ui/jquery.ui.button"
    , "order!ui/jquery.ui.tabs"
    , "order!ui/jquery.ui.menu"
//    , "jQuery/ui/jquery.ui.sortable"
],

function() {
    return {
        button : function(el, o) {
            o = $.extend({
                disabled : false,
                label : "",
                text : false,
                handler : function() {},
                icons : null
            }, o);

            var options = {
                disabled : o.disabled,
                text: o.text,
                label: o.label,
                icons: o.icon ? { primary : o.icon } : o.icons
            };

            if(!options.icons) delete options.icons;

            var button = el.append('<button></button>')
                .find('button:last')
                .button(options)
                .click(function(e) {
                    o.handler.apply(button.get(0));
                    e.preventDefault(); return false;
                });

            return button;
        },
        menu : function(el, o) {
            o = $.extend({
                disabled : false
            }, o);
            return el.menu({
                disabled: o.disabled
            });
        },
        tabs : function(el, o) {
            return el.tabs(o);
        },
        buttonset : function(el) {
            return el.buttonset();
        }
    };
});