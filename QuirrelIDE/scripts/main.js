requirejs.config({
    paths: {
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min',
        'ace' : 'scripts/editor/ace/ace-noconflict'
    }
});

require(["order!jquery", "app/config", "app/layout", "app/mainbar"], function($, config, createLayout, buildMainBar) {
    var layout = createLayout();

    buildMainBar(layout.getMainBar());
})