define([
    "order!jquery",
    "order!app/ui",
    "text!templates/toolbar.editor.html"
], function($, ui, tplToolbar) {

    return function(el) {
        el.append(tplToolbar);
    }
});
