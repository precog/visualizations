function waitFor(testFx, onReady, timeOutMillis) {
    var maxtimeOutMillis = timeOutMillis ? timeOutMillis : 30000, //< Default Max Timout is 3s
        start = new Date().getTime(),
        condition = false,
        interval = setInterval(function() {
            if ( (new Date().getTime() - start < maxtimeOutMillis) && !condition ) {
                // If not time-out yet and condition not yet fulfilled
                condition = (typeof(testFx) === "string" ? eval(testFx) : testFx()); //< defensive code
            } else {
                if(!condition) {
                    // If condition still not fulfilled (timeout but condition is 'false')
                    console.log("'waitFor()' timeout");
                    phantom.exit(1);
                } else {
                    // Condition fulfilled (timeout and/or condition is 'true')
                    console.log("'waitFor()' finished in " + (new Date().getTime() - start) + "ms.");
                    typeof(onReady) === "string" ? eval(onReady) : onReady(); //< Do what it's supposed to do once the condition is fulfilled
                    clearInterval(interval); //< Stop this interval
                }
            }
        }, 10); //< repeat check every 250ms
};


var start = new Date().getTime(),
    page = new WebPage(); //require('webpage').create();

// Open Twitter on 'sencha' profile and, onPageLoad, do...
page.open("src/index.html", function (status) {
    // Check for page load success
    if (status !== "success") {
        console.log("Unable to access network");
    } else {
        // Wait for 'signin-dropdown' to be visible
        waitFor(function() {
            // Check in the page if a specific element is now visible
            return page.evaluate(function() { return typeof RG_READY != "undefined" && RG_READY; /*document.getElementById("rgdone");*/ });
        }, function() {
           console.log("rendering, total execution time: " + (new Date().getTime() - start) + "ms.");
           page.render("sample.pdf");
           phantom.exit();
        });        
    }
});



/*
var page = new WebPage();

page.onLoadFinished = function(status)
{
    console.log("status: " + status);
    window.setInterval(function() {

        var ready = page.evaluate(function() { return isReady(); });
        console.log(ready);
        console.log("state: " + phantom.state);
        if(!ready)
        {
            console.log("not ready yet ...");
            return;
        }
        console.log("ready: ");
        window.clearInterval(this);
        page.render("sample.png");
        phantom.exit();

    }, 50);

}
page.open("page/index.html");
*/

/*
var start = + new Date(),
    element = null,
    cls = null,
    id = "chart",
    token = "66178806-8389-42CA-9E6B-86B4285F487A",
    css = ['http://api.reportgrid.com/css/rg.css'],
    js = [
        'http://api.reportgrid.com/js/reportgrid-core.js?tokenId=' + token
        //, 'reportgrid-viz.js'
        //, 'http://api.reportgrid.com/js/reportgrid-viz.js'
        ],
    options = {},
    output = "sample.png",
    content = '<html>\
<head>\
<title>ReportGrid Renderer</title>\
{$css}\
{$js}\
<script type="text/javascript">\
var ready = false;\
window.execute = function() {\
    console.log("executing");\
    try {\
    ReportGrid.children("/", { type : "all" }, function(r) { concole.log(r); });\
    ReportGrid.pieChart("#{$id}", {\
        path : "/snapEngage/11155847/bf7337a6-6c7f-4ff9-8e50-a7bb771c036a/",\
        event : "case",\
        property : "sourceType",\
        options : { label : { datapoint : label.sourceTypePercent, datapointover : label.sourceType } }\
    });\
    } catch(e) {\
        console.log("ERROR: " + e);\
    }\
    return "oi";\
}\
</script>\
</head>\
<body>\
<{$el} id="{$id}" class=" {$cls}"></{$el}>\
</body>\
</html>'
    .replace("{$css}", css.map(function(d) { return cssTag(d) }).join("\n"))
    .replace("{$js}", js.map(function(d) { return jsTag(d) }).join("\n"))
    .replace(/\{\$id\}/g, id)
    .replace("{$cls}", cls || "")
    .replace(/\{\$el\}/g, element || "div");

var page = new WebPage();
page.onConsoleMessage = function(msg) { console.log("page console: " + msg); };
page.onLoadFinished = function(status) {
    page.injectJs('reportgrid-viz.js');
    console.log("result is: " + page.evaluate(function(){
      return ">>> " + window.execute();
    }));
    console.log(typeof ReportGrid);
    
    ReportGrid.pieChart("#" + id, {
        path : path, event : "case", start : start, end : end, periodicity : "eternity",
        property : "sourceType",
        options : { label : { datapoint : label.sourceTypePercent, datapointover : label.sourceType } }
    });
    
    console.log(status);
    page.render("test.png");
    console.log("Image Generated in " + (+new Date() - start) + "ms")
    phantom.exit();
};
page.content = content;
*/


/*
var page = new WebPage(),
    address, output, size;

if (phantom.args.length < 2 || phantom.args.length > 3) {
    console.log('Usage: rasterize.js URL filename');
    phantom.exit();
} else {
    address = phantom.args[0];
    output = phantom.args[1];
    page.viewportSize = { width: 600, height: 600 };
    page.open(address, function (status) {
        if (status !== 'success') {
            console.log('Unable to load the address!');
        } else {
            window.setTimeout(function () {
                page.render(output);
                phantom.exit();
            }, 200);
        }
    });
}
*/

function jsTag(src)
{
    return '<script src="'+src+'" type="text/javascript"></script>';
}

function cssTag(css)
{
    return '<link href="'+css+'" rel="stylesheet" type="text/css" />';
}