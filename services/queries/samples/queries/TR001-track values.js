//** DATA
data(20)

//** CODE

function data(samples)
{
	var d = new Date(),
		s = parseInt(d.getFullYear() + d.getMonth() + d.getDate() + d.getHours() + d.getMinutes()),
		values = {
			browser : {
				chrome  : 10,
				ie      : 8,
				firefox : 9,
				safari  : 6,
				opera   : 2,
				other   : 2
			},
			env : {
				Win7     : 10,
				WinVista : 8,
				WinXP    : 9,
				MacOSX   : 12,
				Linux    : 2,
				iPad     : 5,
				iPhone   : 7,
				Android  : 3,
				other    : 1
			},
			gender : {
				male    : 10,
				female  : 10,
				unknown : 1
			},
			age : {
				13 : 1, 14 : 2, 15 : 3, 16 : 5, 17 : 8, 18 : 12, 19 : 14, 20 : 20, 21 : 25, 22 : 26, 23 : 28, 24 : 26, 25 : 24,
				26 : 21, 27 : 22, 28 : 23, 29 : 25, 30 : 28, 31 : 21, 32 : 14, 33 : 20, 34 : 20, 35 : 22, 36 : 20, 37 : 19, 38 : 16
			},
			location : {
				'{"country": "usa", "state": "usa/colorado", "city": "usa/colorado/boulder"}' : 2,
				'{"country": "usa", "state": "usa/colorado", "city": "usa/colorado/denver"}'  : 3,
				'{"country": "usa", "state": "usa/colorado", "city": "usa/colorado/colorado springs"}' : 1,
				'{"country": "usa", "state": "usa/california", "city": "usa/california/los angeles"}' : 2,
				'{"country": "usa", "state": "usa/california", "city": "usa/california/san francisco"}' : 2,
				'{"country": "usa", "state": "usa/nevada", "city": "usa/nevada/las vegas"}' : 2,
				'{"country": "italy", "state": "italy/lombardia", "city": "italy/lombardia/milano"}' : 2,
				'{"country": "portugal", "state": "portugal/beja", "city": "portugal/beja/serpa"}' : 1
			}
		};
console.log(s);
	ReportGrid.math.setRandomSeed(s);

	for(var type in values)
	{
		var tot = 0,
			names = [];
		for(var key in values[type])
		{
			tot += values[type][key];
			names.push(key);
		}
		values[type+"_tot"] = tot;
		values[type+"_names"] = names;
	}

	function random(type)
	{
		var r = ReportGrid.math.random(),
			v = Math.floor(r * values[type+"_tot"]),
			range = 0,
			names = values[type+"_names"];
		for(var i = 0; i < names.length; i++)
		{
			var name = names[i];
			range += values[type][name];
			if(v < range)
				return name;
		}
		return "ERRROR";
	}

	function _data(samples)
	{
		var result = [];
		for(var i = 0; i < samples; i++)
		{
			result.push({ 
				impression : {
					browser : random("browser"),
					env :     random("env"),
					gender :  random("gender"),
					age :     parseInt(random("age")),
					'#location' : thx.json.Json.decode(random("location"))
				}
			});
		}
		return result;
	}

	return _data(samples);
}