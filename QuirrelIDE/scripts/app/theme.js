define(['jquery', 'app/themes'], function($, themes) {
    var UI_BASE_THEME_URL = "scripts/jquery-ui-1.9/themes/",
        map = {},
        groups = {};
    $.each(themes, function() {
        map[this.token] = this;
        groups[this.group] = groups[this.group] || {};
        groups[this.group][this.token] = this;
    });

    function setUITheme(name) {
        var url = UI_BASE_THEME_URL + name + "/jquery.ui.all.css",
            cssLink = $('<link href="'+url+'" type="text/css" rel="Stylesheet" class="ui-theme" />');
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
            setUITheme(map[name].ui);
        },
        list : function() { return themes; },
        map : function() { return map; },
        groups : function() { return groups; }
    }

    return theme;
});