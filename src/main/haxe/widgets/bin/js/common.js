function buildOptions(values, def)
{
	var options = "";
	if(def)
		var options = '<option value="">- '+def+' -</option>';
	return options + values.map(function(v) { return '<option value="'+v+'">'+v+'</option>'; }).join('');
}

function setOptions(selector, values, def)
{
	$(selector).html(buildOptions(values, def));
}

function loadPathChildren(path, f)
{
	ReportGrid.children(path, { type : "path" }, f);
}

function feedOptionsPathChildren(path, selector, f)
{
	loadPathChildren(path, function(children) {
		setOptions(selector, children, "select child");
		if(f) f(path);
	});
}

function mapPropertyNames(v) {
	return v.map(function(d) {
		return d.substr(0,1) == '.' ? d.substr(1) : d;
	});
}

function loadEvents(path, f)
{
	ReportGrid.children(path, { type : "property" }, function(d){ f(mapPropertyNames(d)); });
}

function loadProperties(path, event, f)
{
	ReportGrid.children(path, { property : event }, function(d){ f(mapPropertyNames(d)); });
}

function feedOptionsEvent(path, selector)
{
	loadEvents(path, function(d) {
		$(selector).html(buildOptions(d, "select event"));
	});
}

function feedOptionsProperty(path, event, selector)
{
	loadProperties(path, event, function(d) {
		$(selector).html(buildOptions(d, "select property"));
	});
}
