define([
    'app/config/themes'
],

function(themes) {
    var UI_BASE_THEME_URL = "css/jquery/ui/",
        SPRITE_BASE_URL = "css/",
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

    function setSpriteTheme(name) {
        var url = SPRITE_BASE_URL + name + ".css",
            cssLink = $('<link href="'+url+'" type="text/css" rel="Stylesheet" class="pg-sprite-theme" />');
        $("head").append(cssLink);


        if( $("link.pg-sprite-theme").size() > 1){
            $("link.pg-sprite-theme:first").remove();
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
            setSpriteTheme(map[name].sprite);
        },
        list : function() { return themes; },
        map : function() { return map; },
        groups : function() { return groups; }
    }

    return theme;
});