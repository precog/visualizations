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

	function changeCategory(item)
	{
		$("#samplecurrent").html(item.category);
		callService('options', displayOptions, { category : item.code });
	}

	function changeVisualization(sample)
	{
		callService('info', displaySample, { sample : sample });
	}

	function displayOptions(values)
	{
		var ul = $('#sampleoptions').html("");
		for(var i = 0; i < values.length; i++)
		{
			var value = values[i],
				li = $('<li><a href="#details">'+value.title+'</a></li>');
			ul.append(li);
			li.click(value, function(e){
				e.preventDefault();
				changeVisualization(e.data.sample);
				return false;
			});
		}

		changeVisualization(values[0].sample);
	}

	callService('categories', function(values){
		var ul = $('#samplecategories').html("");
		for(var i = 0; i < values.length; i++)
		{
			var value = values[i],
				li = $('<li><a href="#details">'+value.category+'</a></li>');
			ul.append(li);
			li.click(value, function(e){
				e.preventDefault();
				changeCategory(e.data);
				return false;
			});
		}

		changeCategory(values[0]);
	});
})