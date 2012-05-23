define([
      "editor/ace/ace-noconflict"
    , "editor/ace/mode-quirrel-uncompressed.js"
],

function() {
    return function(el) {
        var wrapper,
            editor = ;
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
        sess.on("change", (function() {
            var kill;

            function trigger() {
                $(wrapper).trigger("changed", wrapper.get());
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
            }
        };

        return wrapper;
    }
});