requirejs.config({
    paths: {
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min',
        'ace' : 'scripts/editor/ace/ace-noconflict'
    }
});

require(["order!jquery", "app/config", "app/layout", "app/bar-main", "app/bar-editor", "app/theme"],

function($, config, createLayout, buildBarMain, buildBarEditor, theme) {
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
})