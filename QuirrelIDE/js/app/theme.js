define([
    'config/themes'
],

function(themes) {
    var UI_BASE_THEME_URL = "css/jquery/ui/",
        map = {},
        groups = {};

    $.each(themes, function() {
        map[this.token] = this;
        groups[this.group] = groups[this.group] || {};
        groups[this.group][this.token] = this;
    });

    function themeUrl(name) {
        return UI_BASE_THEME_URL + name + "/jquery.ui.all.css";
    }

    function setUITheme(name, callback) {
        var url = themeUrl(name),
            cssLink = $('<link href="'+url+'" type="text/css" rel="Stylesheet" class="ui-theme" />');
        cssLink.on("load", callback);
        $("head").append(cssLink);


        if( $("link.ui-theme").size() > 3){
            $("link.ui-theme:first").remove();
        }
    }
    var theme = {
        current : null,
        set : function(name) {
            if(this.current === name) return;
            this.current = name;
            $(theme).trigger('change', name);
            setUITheme(map[name].ui, function() {
                $(theme).trigger('changed', name);
            });
        },
        list : function() { return themes; },
        map : function() { return map; },
        groups : function() { return groups; },
        getEditorTheme : function(name, editor) {
            return map[name].editor[editor];
        }
    };

    return theme;
});