define([
      "util/querystring"
    , "http://api.reportgrid.com/js/precog.js"
],

function(qs){
// TODO basePath

    var precog   = window.Precog,
        config   = precog.$.Config,
        params   = ["tokenId", "analyticsService"],
        contexts = [null],
        reprecog = /(require|precog)[^.]*.js[?]/i;

    $('script').each(function() {
        if(!this.src || !reprecog.test(this.src)) return;
        contexts.push(this.src);
    });

    function appendConfig(ctx) {
        for(var i = params.length-1; i >= 0; i--) {
            var param = params[i],
                value = qs.get(param, ctx);
            if(value !== "") {
                config[param] = value;
                params.splice(i, 1);
            }
        }
    }

    while(contexts.length > 0 && params.length > 0) {
        appendConfig(contexts.shift());
    }

    return window.Precog;
});