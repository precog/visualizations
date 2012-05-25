define([],

function() {

    var elPanel = $('<div class="ui-widget"><div class="ui-content ui-state-error ui-corner-all"></div></div>'),
        elError = elPanel.find('.ui-state-error');

    return {
        type : "error",
        name : "Error",
        display : false,
        panel : function() {
            return elPanel;
        },
        update : function(error) {
            var message = '<div>'+error.message+'</div>';
            if("undefined" !== typeof error.lineNum) {
                message += '<div>at line '+error.lineNum+', column '+error.colNum+'</div>';

                var indicator = [];
                for(var i = 0; i < error.colNum-1; i++)
                {
                    indicator.push(' ');
                }
                indicator.push('\u2B06');

                var line = error.line.replace(/\t/g, ' ');

                message += '<pre>'+line+'\n'+indicator.join('')+'</pre>';
            }
console.log(JSON.stringify(error));
            elError.html(message);
        }
    };
});

// "line":"//","lineNum":1,"colNum":1,"detail":"error:1: expected operator or path or expression\n  //\n   ^"}
