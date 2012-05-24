define(["util/storagemonitor"], function(createStore) {
    var CONFIG_KEY = "pg-quirrel-ide-config",
        defaults = {
            theme : "default",
            indentUsingSpaces : false,
            tabWidth : 2,
            disableClientCache : true,
            ioPanesVertical : true
        };

    return createStore(CONFIG_KEY, defaults);
});