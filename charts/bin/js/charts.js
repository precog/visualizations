$(document).ready(function(){
	var service = API.samplesService;
	var callService = function(action, handler, data)
	{
		data = data || {};
		data.action = action;
		$.getJSON(service, data, handler);
	}

	function displaySample(info)
	{
		var source = info['data'] + "\n\n" + info['viz'];
		source = source.replace(/\t/g, "  ");
		$('#samplevisualization iframe').attr('src', service + "?action=display&sample=" + encodeURI(info.sample));
		$('#samplecode').html(source);

		var doc = info['doc'];
		if(doc)
		{
			$('#sampledoc').html(doc);
			$('#docpanel').show();
		} else {
			$('#docpanel').hide();
		}
	}

	function changeVisualization(item)
	{
		$("#samplecurrent").html(item.title);
		callService('info', displaySample, { sample : item.sample });
	}

	callService('list', function(values){
		var ul = $('#samplesmenu');
		for(var i = 0; i < values.length; i++)
		{
			var value = values[i],
				li = $('<li><a href="#details">'+value.title+'</a></li>');
			ul.append(li);
			li.click(value, function(e){
				e.preventDefault();
				changeVisualization(e.data);
				return false;
			});
		}

		changeVisualization(values[0]);
	});
})