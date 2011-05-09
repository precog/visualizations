var ReportGrid = window.ReportGrid || {};

(function() {
	var defaultStartColor = "#af9",
		defaultEndColor = "#9af"
	;

	var _tooltip, _tooltipw, _tooltiph;
	function tooltip(text, sx, sy)
	{
		var body = d3.select(document.body);
		var x, y;
		function follow() {
			if(d3.event)
			{
				x = d3.event.pageX;
				y = d3.event.pageY;
			} else {
				x = sx; y = sy;
			}

			_tooltip
				.style("top", (y - _tooltiph - 10) + "px")
				.style("left", (x - _tooltipw / 2) +"px");
		}
		if(null == _tooltip) {
			_tooltip = d3.select(document.createElement("div"));
			var shadow = "3px 3px 5px rgba(0,0,0,0.25)";
			_tooltip
				.style("position", "absolute")
				.style("border", "1px solid #000")
				.style("background-color", "#ff6")
				.style("padding", "2px 4px")
				.style("max-width", "200px")
				.style("text-align", "center")
				.style("-moz-box-shadow", shadow)
				.style("-webkit-box-shadow", shadow)
				.style("box-shadow", shadow)
			;
		}
		if(!text) {
			body.on("mousemove", null);
			if(_tooltip.node().parentNode)
				_tooltip.remove();
		} else {
			body.on("mousemove", follow);
			_tooltip.node().innerHTML = text;
			document.body.appendChild(_tooltip.node());
			_tooltipw = _tooltip.node().offsetWidth;
			_tooltiph = _tooltip.node().offsetHeight;
		}
	}
	
	var baseChart = function(el, o) {
		el = d3.select(el);
		if(null == el) return;
		el.selectAll("svg").remove();
		if(o.data == null || o.data[0].length <= 1)
			return;
		var
			pl = o.paddingLeft || 20,
			pb = o.paddingBottom || 10,
			pt = o.paddingTop || 5,
			w = o.width || parseInt(el.style("width")) || 640,
			h = o.height || parseInt(el.style("height")) || 320,
			dataLabel = o.dataLabel || function(d) { return "value: " + ~~(d.value * 100)/100; },
			n = o.data.length,
			m = o.data[0].length,
			_startColor = o.startColor || defaultStartColor,
			color = o.color || (n == 1 ? function(d) { return _startColor; } : false) || d3.interpolateRgb(_startColor, o.endColor || defaultEndColor),
			values = ("undefined" == typeof o.data[0][0].y0) ? d3.layout.stack()(o.data).reverse() : o.data,
			cw = w - pl,
			ch = h - pb - pt,
			cx = pl,
			cy = pt,
			mx = m,
			g = o.granularity || "minute",
			gt = (g == "hour" ? 60000 * 60 : (g == "day" ? 60000 * 60 * 24 : 60000)),
			labelx = o.labelX || function(d) { return d; },
			labely = o.labelY || function(d) { return d; },
			labelxorient = 0,
			minx = d3.min(o.data, function(d) {
				return d3.min(d, function(d) {
					return d.x;
				});
			}),
			maxx = d3.max(o.data, function(d) {
				return d3.max(d, function(d) {
					return d.x;
				});
			});

		var maxy;
		switch(o.type) {
			case "line":
				maxy = d3.max(o.data, function(d) {
					return d3.max(d, function(d) {
						return d.y;
					});
				}); break;
			default:
				maxy = d3.max(o.data, function(d) {
					return d3.max(d, function(d) {
						return d.y0 + d.y;
					});
				}); break;
		}
			
		for (var j = 0; j < m; ++j) {
			for (var i = 0; i < n; ++i) {
				var d = values[i][j];
				d.pos = j;
				d.layer = i;
				d.value = o.data[i][j].y;
			}
		}
			
		var dx = d3.scale.linear().domain([minx, maxx]).range([0, cw - cw / m]),
			dy = d3.scale.linear().domain([0, maxy]).range([ch, 0]);

		var	y = function(d) { return ~~(ch - d.y * ch / maxy); },
			y0 = function(d) { return ~~(ch - d.y0 * ch / maxy); },
			y1 = function(d) { return ~~(ch - (d.y + d.y0) * ch / maxy); },
//			y2 = function(d) { return d.y * ch / maxz; },
			huw = ~~(cw/m/2) + 0.5,
			x = function(d) { return ~~(d.x * cw / mx); }
		;

		var container = el.append("svg:svg")
			.attr("width", w)
			.attr("height", h)
		
		var chart = container
			.append("svg:g")
				.attr("class", "chart")
				.attr("transform", function(d) { return "translate("+(cx)+".5,"+cy+".5)"; });
		
		var background = chart
			.append("svg:rect")
			.attr("width", cw)
			.attr("height", ch + 1)
			.attr("class", "chart-background");
		
		// DATA
		var layers = chart.selectAll("g.layer")
			.data(values)
			.enter()
				.append("svg:g")
				.attr("class", function(d, i) { return "layer layer"+i; });
		
		switch(o.type) {
			case "bar":
				layers.attr("fill", function(d, i) { return color(i/(n-1)); });
				var bars = layers.selectAll("g.bar")
					.data(function(d) { return d; })
					.enter()
						.append("svg:g")
						.attr("class", function(d, i) { return "bar bar"+i; })
						.attr("transform", function(d) { return "translate("+(~~dx(d.x))+",0)"; })
						.on("mouseover", function(d, i) {
							tooltip(dataLabel(d));
						})
						.on("mouseout", function(d) {
							tooltip();
						})
				;

				var rect = bars.append("svg:rect")
					.attr("width", x({x:0.9}))
					.attr("x", 0);
				if(o.animate) {
					rect
						.attr("y", ch)
						.attr("height", 0)
						.transition()
							.delay(function(d,i) { return i * o.transitionDelay; })
							.duration(o.transitionDuration)
							.attr("y", y1)
							.attr("height", function(d) { return y0(d) - y1(d); });
				} else {
					rect
						.attr("y", y1)
						.attr("height", function(d) { return y0(d) - y1(d); });
				}
				break;
			case "line":
				var path = layers.append("svg:path")
					.attr("class", "line")
					.attr("stroke", function(d, i) { return color(i/(n-1)); });
				var linepath = d3.svg.line()
					.x(function(d) { return dx(d.x) + huw; })
					.y(function(d) { return dy(d.y); });
				var dots = layers.selectAll("circle.dot")
					.data(function(d) { return d; })
					.enter()
						.append("svg:circle")
						.attr("class", "dot")
						.attr("r", o.dotRadius || 4.5)
						.attr("cx", function(d) { return dx(d.x) + huw; })
						.on("mouseover", function(d, i) {
							tooltip(dataLabel(d));
						})
						.on("mouseout", function(d) {
							tooltip();
						});

				if(o.animate)
				{
					path.attr("d", d3.svg.line()
						.x(function(d) { return dx(d.x); })
						.y(function(d) { return ch; })
					);
					
					dots
						.attr("cy", ch)
						.transition()
							.delay(function(d,i) { return i * o.transitionDelay / (n+1); })
							.duration(o.transitionDuration)
							.attr("cy", function(d) { return dy(d.y); })

					path.transition()
							.delay(function(d,i) { return i * o.transitionDelay; })
							.duration(o.transitionDuration)
							.attr("d", linepath);
				} else {
					path.attr("d", linepath);
					dots.attr("cy", function(d) { return dy(d.y); });
				}

				break;
			case "area":
				var areas = layers.append("svg:path")
					.attr("class", "area")
					.attr("fill", function(d, i) { return color(i/(n-1)); })
				;
					
				var area = d3.svg.area()
					.x(function(d) { return dx(d.x) + huw; })
					.y0(dy(d.y0))
					.y1(function(d) { return dy(d.y0+d.y); });
				
				if(o.animate) {
					var start = d3.svg.area()
						.x(function(d) { return dx(d.x) + huw; })
						.y0(function(d) { return ch; })
						.y1(function(d) { return ch; });
					areas.attr("d", start)
						.transition()
							.delay(function(d,i) { return i * o.transitionDelay / (n+1); })
							.duration(o.transitionDuration)
								.attr("d", area);
				} else {
					areas.attr("d", area);
				}

				// INTERACTION
				layers.attr("fill", function(d, i) { return color(i/(n-1)); });
				var bars = layers.selectAll("g.bar")
					.data(function(d) { return d; })
					.enter()
						.append("svg:g")
						.attr("class", "hidden")
						.attr("fill-opacity", "0.0")
						.attr("stroke-opacity", "0.0")
						.attr("transform", function(d) { return "translate("+(~~dx(d.x))+",0)"; })
						.on("mouseover", function(d, i) {
							tooltip(dataLabel(d));
						})
						.on("mouseout", function(d) {
							tooltip();
						})
				;

				var rect = bars.append("svg:rect")
					.attr("width", x({x:1.0}))
					.attr("x", 0)
					.attr("y", y1)
					.attr("height", function(d) { return y0(d) - y1(d); });
				
				break;
		}
		
		// SCALES
		var scales = chart
			.append("svg:g")
				.attr("class", "scales");
		
		// Y AXIS
		var ruley = scales.selectAll("g.ruley")
			.data(dy.ticks(10))
			.enter()
				.append("svg:g")
					.attr("class", "rule ruley");

		var ry = function(d) { return ~~dy(d); };
		ruley.append("svg:line")
			.attr("class", function(d) { return d ? null : "axis"; })
			.attr("y1", ry)
			.attr("y2", ry)
			.attr("x1", 0)
			.attr("x2", cw);
		
		// Y LABELS
		ruley.append("svg:text")
			.attr("class", "labely label")
			.attr("y", ry)
			.attr("x", -3)
			.attr("dy", ".35em")
			.attr("text-anchor", "end")
			.text(labely);
			
		// X AXIS
		var ticks = [];
		var current = o.data[0][0].x;
		while(current <= o.data[0][m-1].x) {
			ticks.push(current);
			current = ReportGrid.nextPeriod(current, o.periodicity);
		}
		
		while(ticks.length * 25 > cw) {
			ticks = ticks.filter(function(d, i) { return i % 2 == 0; });
		}
		
		var rulex = scales.selectAll("g.rulex")
			.data(ticks)
			.enter()
				.append("svg:g")
					.attr("class", "rule rulex");
		if(o.displayYRules) {
			rulex.append("svg:line")
				.attr("class", function(d) { return d ? null : "axis"; })
				.attr("y1", 0)
				.attr("y2", ch)
				.attr("x1", function(d) { return dx(d) + huw; })
				.attr("x2", function(d) { return dx(d) + huw; });
		}
		// LABELS
		rulex
			.append("svg:g")
				.attr("transform", function(d) { return "translate("+~~(dx(d)+(cw/m/2)-2)+","+(ch+8)+") rotate("+labelxorient+")"; })
				.append("svg:text")
					.attr("class", "labelx label")
//					.attr("dy", "1em")
					.attr("text-anchor", "middle")
					.text(labelx);
	}
	
	ReportGrid.chart = function(el, options) {
		tooltip();
		var o = {};
		d3.keys(options).forEach(function(k) {
			o[k] = options[k];
		});
		o.type = o.type || "bar";
		switch(o.type)
		{
			case "bar":
				o.displayYRules = o.displayYRules || false;
				break;
			case "line":
				o.displayYRules = o.displayYRules || true;
				break;
		}
		o.transitionDuration = o.transitionDuration || 400;
		o.transitionDelay = o.transitionDelay || 200;
		o.animate = 'undefined' == typeof o.animate ? true : o.animate;
		baseChart(el, o);
	}
	
	ReportGrid.transposeTimeData = function(data) {
		if(null == data)
			return [];
		return data.map(function(a) {
			return { x : a[0], y : a[1] };
		});
	}
	
	ReportGrid.nextPeriod = function(current, periodicity) {
		if(!periodicity)
			return current+1;
		switch(periodicity) {
			case ReportGrid.Minute:	return current + 60000;
			case ReportGrid.Hour:	return current + 60000 * 60;
			case ReportGrid.Day:	return current + 60000 * 60 * 24;
			case ReportGrid.Week:	return current + 60000 * 60 * 7;
			case ReportGrid.Month:
				var d = new Date(current);
				return new Date(d.getYear(), d.getMonth()+1, 1, 0, 0, 0, 0);
			case ReportGrid.Year:
				var d = new Date(current);
				return new Date(d.getYear()+1, 0, 1, 0, 0, 0, 0);
		}
	}
	
	ReportGrid.getPeriodicity = function(start, end) {
		start = "object" == typeof start ? start : new Date(start);
		end = "object" == typeof end ? end : new Date(end);
		
		var second	= 1000,
			minute	= 60 * second,
			hour	= 60 * minute,
			day		= 24 * hour,
			week	= 7 * day,
			month	= 30 * day,
			year	= 365 * day,
			delta	= end.getTime() - start.getTime();

		if(delta > year * 2)
			return ReportGrid.Year;
		else if(delta > month * 5)
			return ReportGrid.Month;
		else if(delta > week * 5)
			return ReportGrid.Week;
		else if(delta > day * 5)
			return ReportGrid.Day;
		else if(delta > hour * 5)
			return ReportGrid.Hour;
		else
			return ReportGrid.Minute;
	}
})();