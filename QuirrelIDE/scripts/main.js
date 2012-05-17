requirejs.config({
    paths: {
          'jquery' : 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min'
        , 'ace'    : 'scripts/editor/ace/ace-noconflict'
        , 'precog' : 'http://api.reportgrid.com/js/precog.js'
    }
});

require(["order!jquery", "app/util/config", "app/layout", "app/editors", "app/bar-main", "app/bar-editor", "app/theme"],

function($, config, createLayout, editors, buildBarMain, buildBarEditor, theme) {
    var layout = createLayout();

    buildBarMain(layout.getBarMain());
    buildBarEditor(layout.getBarEditor());

    theme.set(config.get("theme", "default"));

    $(theme).on("change", function(e, name) {
        config.set("theme", name);
    });

    $(config).on("theme", function(e, name) {
        theme.set(name);
    });


    if(!editors.count()) editors.add();
})