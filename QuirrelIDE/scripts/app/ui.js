define([
    "order!jquery",
    "order!jquery-ui-1.9/ui/jquery.ui.core",
    "order!jquery-ui-1.9/ui/jquery.ui.widget",
    "jquery-ui-1.9/ui/jquery.ui.button",
    "jquery-ui-1.9/ui/jquery.ui.menu"
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

            var button = el.append('<button></button>')
                .find('button:last')
                .button({
                    disabled : o.disabled,
                    text: o.text,
                    label: o.label,
                    icons: o.icon ? { primary : o.icon } : o.icons
                })
                .click(function(e) {
                    o.handler.apply(button.get(0));
                    e.preventDefault(); return false;
                });
            ;
            return button;
        },
        menu : function(el, o) {
            o = $.extend({
                disabled : false,
            }, o);
            return el.menu({
                disabled: o.disabled
            });
        }
    };
});