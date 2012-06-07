define([
      "text!templates/dialog.export.html"
    , "order!util/ui"
    , "util/dom"
    , "order!ui/jquery.ui.draggable"
    , "order!ui/jquery.ui.position"
    , "order!ui/jquery.ui.resizable"
    , "order!ui/jquery.ui.dialog"
    , "jlib/zclip/jquery.zclip"
], function(tplDialog, ui, dom) {
    var elDialog = $('body')
            .append(tplDialog)
            .find('.pg-dialog-export')
            .dialog({
                  modal : true
                , autoOpen : false
                , resizable : false
                , width : 820
                , height : 480
                , dialogClass : "pg-el"
                , closeOnEscape: true
                , buttons : [{
                    text : "Copy",
                    click : function() {
                        return true;
                    }
                }, {
                    text : "Download",
                    click : function() {

                    }
                }]
            }),
        elActions = elDialog.find(".pg-actions"),
        elText = elDialog.find(".pg-export textarea");
    elDialog.hide();

    function selectCode() {
        setTimeout(function() { dom.selectText(elText.get(0)); }, 100);
    }

    elText.click(function() {
        selectCode();
    });

    return function(title, actions, code) {
        console.log(JSON.stringify(actions));
        console.log(JSON.stringify(code));

        elActions.find("*").remove();

        function execute(action) {
            elText.text(action.handler(code));
            selectCode();
        }

        ui.radios(elActions, $(actions).map(function(i, action) {
            return {
                  label : action.name
                , handler : function() { execute(action); }
                , group : "actions"
            };
        }));

        execute(actions[0]);

        elActions.find(".ui-button:first").click();

        elDialog.dialog("option", "position", "center");
        elDialog.dialog("option", "title", title);
        elDialog.dialog("open");
    };
});