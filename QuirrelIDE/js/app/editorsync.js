define([

],

function() {

    return function(editor, editors, config) {
         function change(_, code) {
             editors.setCode(code);
         }

         $(editors).on("activated", function(_, index) {
             editor.set("" + editors.getCode());
             $(editor).on("change", change);
         });

         $(editors).on("deactivated", function(_, index) {
             $(editor).off("change", change);
             editors.setCode(editor.get(), index);
         });
    }
});