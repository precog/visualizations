define([
    "require",
    "ace/ace",
    "ace/mode/quirrel"
],

function(require, ace) {
    return function(el) {
        var wrapper,
            editor = ace.edit($(el).get(0));
        editor.commands.addCommand({
            bindKey: {
                win: 'Shift-Return',
                mac: 'Shift-Return|Command-Return',
                sender: 'editor|cli'
            },
            exec: function() {
                $(wrapper).trigger('execute', wrapper.get());
            }
        });
        editor.setShowPrintMargin(false);
        var sess = editor.getSession();
        sess.setMode(new (require("ace/mode/quirrel").Mode)());
        sess.getSelection().on("changeCursor", function() {
            $(wrapper).trigger("changeCursor", editor.getCursorPosition());
        });
        sess.getSelection().on("changeSelection", function() {
            $(wrapper).trigger("changeSelection", editor.getSelection());
        });
        sess.on("change", (function() {
            var kill;

            function trigger() {
                $(wrapper).trigger("change", wrapper.get());
            };

            return function() {
                clearInterval(kill);
                kill = setTimeout(trigger, 250);
            };
        })());

        wrapper = {
            get : function() {
                return sess.getValue(); //editor.getSession()
            },
            set : function(code) {
                sess.setValue(code);
            },
            setTabSize : function(size) {
                if(size === sess.getTabSize()) return;
                sess.setTabSize(size);
                $(wrapper).trigger("tabSizeChanged", size);
            },
            setUseSoftTabs : function(toogle) {
                if(toogle === sess.getUseSoftTabs()) return;
                sess.setUseSoftTabs(toogle);
                $(wrapper).trigger("useSoftTabsChanged", toogle);
            },
            setTheme : function(theme) {
                var path = "ace/theme/" + theme;
                require([path], function() {
                    editor.setTheme(path);
                });
            },
            resize : function() {
                editor.resize();
            },
            engine : function() {
                return "ace";
            },
            focus : function() {
                editor.focus();
            }
        };

        return wrapper;
    }
});