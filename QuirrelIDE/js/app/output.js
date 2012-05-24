define([

],

function() {
    return function(el) {

        return {
            set : function(result, type) {
                console.log(type + ": " + JSON.stringify(result));
            }
        };
    }
});