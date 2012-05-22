requirejs.config({
    paths: {
          "ui"     : "libs/jquery/ui"
        , "util"   : "app/util"
        , "jlib"   : "libs/jquery"
        , "config" : "app/config"
    }
});

require([
      "app/util/config"
    , "app/layout", "app/editors", "app/bar-main", "app/bar-editor", "app/theme"],

function(config, createLayout, editors, buildBarMain, buildBarEditor, theme) {
    var layout = createLayout();

    buildBarMain(layout.getBarMain());
    buildBarEditor(layout.getBarEditor());

    $(theme).on("changed", function() {
        // refreshes the panes layout after theme changing
        layout.refresh();
    });

    $(theme).on("change", function(e, name) {
        config.set("theme", name);
    });

    theme.set(config.get("theme", "default"));

    $(config).on("theme", function(e, name) {
        theme.set(name);
    });


    if(!editors.count()) editors.add();
})