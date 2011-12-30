$(document).ready(function(){
	var service = "service/index.php";
	var callService = function(action, handler, data)
	{
		data = data || {};
		data.action = action;
		$.getJSON(service, data, handler);
	}

	function displaySample(info)
	{
		var source = info['data'] + "\n\n" + info['viz'];
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

	callService('list', function(values){
		var ul = $('#samplesmenu');
		for(var i = 0; i < values.length; i++)
		{
			var value = values[i],
				li = $('<li>'+value.title+'</li>');
			ul.append(li);
			li.click(value, function(e){ callService('info', displaySample, { sample : e.data.sample }); });
		}
	})
})