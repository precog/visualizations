var start = + new Date(),
    element = null,
    cls = null,
    id = "chart",
    token = "66178806-8389-42CA-9E6B-86B4285F487A",
    css = ['http://api.reportgrid.com/css/rg.css'],
    js = ['http://api.reportgrid.com/js/reportgrid-core.js?tokenId=' + token, 'http://api.reportgrid.com/js/reportgrid-viz.js'],
    options = {},
    output = "sample.png",
    content = '<html>\
<head>\
<title>ReportGrid Renderer</title>\
{$css}\
{$js}\
</head>\
<body>\
<{$el} id="{$id}" class=" {$cls}"></{$el}>\
HELLO WORLD!\
</body>\
</html>"template/index.html"'
    .replace("{$css}", css.map(function(d) { return cssTag(d) }).join("\n"))
    .replace("{$js}", js.map(function(d) { return jsTag(d) }).join("\n"))
    .replace("{$id}", id)
    .replace("{$cls}", cls || "")
    .replace(/\{\$el\}/g, element || "div");

var page = new WebPage();
page.content = content;
page.onLoadFinished = function(status){
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