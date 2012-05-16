requirejs.config({
    paths: {
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min',
        'ace' : 'scripts/editor/ace/ace-noconflict'
    }
});

require(["app/config", "app/layout"], function(config, createLayout) {
    // get config
    // merge config with page config
    console.log(config.toString());

    console.log("START APP");

    var layout = createLayout();

    console.log("END APP");
})