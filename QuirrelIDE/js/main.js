requirejs.config({
    paths: {
          "ui"     : "libs/jquery/ui"
        , "util"   : "app/util"
        , "jlib"   : "libs/jquery"
        , "config" : "app/config"
        , "editor" : "libs/editor"
        , "ace"    : "libs/editor/ace"
    }
});

require([
      "app/util/config"
    , "app/layout"
    , "app/editors"
    , "app/bar-main"
    , "app/bar-editor"
    , "app/bar-status"
    , "app/theme"
    , "editor/editor.ace"
    , "app/editorsync"
],

function(config, createLayout, editors, buildBarMain, buildBarEditor, buildBarStatus, theme, buildEditor, sync) {
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

    var editor = buildEditor(layout.getCodeEditor());
    buildBarStatus(layout.getStatusBar(), editor);

    $(layout).on("resizeCodeEditor", function() {
        editor.resize();
    });

    $(theme).on("change", function(e, name) {
        editor.setTheme(theme.getEditorTheme(name, editor.engine()));
    });

    sync(editor, editors, config);

    editors.load();
    if(!editors.count()) editors.add();
    editors.activate(0);

    theme.set(config.get("theme", "default"));

    config.monitor.bind("theme", function(e, name) {
        theme.set(name);
    });
});