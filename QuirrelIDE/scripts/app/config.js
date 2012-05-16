define(["app/storage"], function(createStore) {
    var CONFIG_KEY = "pg-quirrel-ide-config",
        defaults = {
            theme : "default",
            indentUsingSpaces : true,
            tabWidth : 2,
            disableClientCache : true
        };

    return createStore(CONFIG_KEY, defaults);
});