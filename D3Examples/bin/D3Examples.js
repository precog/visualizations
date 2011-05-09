$estr = function() { return js.Boot.__string_rec(this,''); }
if(typeof thx=='undefined') thx = {}
if(!thx.js) thx.js = {}
thx.js.ISelectorEngine = function() { }
thx.js.ISelectorEngine.__name__ = ["thx","js","ISelectorEngine"];
thx.js.ISelectorEngine.prototype.select = null;
thx.js.ISelectorEngine.prototype.selectAll = null;
thx.js.ISelectorEngine.prototype.__class__ = thx.js.ISelectorEngine;
if(!thx.color) thx.color = {}
thx.color.Rgb = function(r,g,b) {
	if( r === $_ ) return;
	$s.push("thx.color.Rgb::new");
	var $spos = $s.length;
	this.red = Ints.clamp(r,0,255);
	this.green = Ints.clamp(g,0,255);
	this.blue = Ints.clamp(b,0,255);
	$s.pop();
}
thx.color.Rgb.__name__ = ["thx","color","Rgb"];
thx.color.Rgb.fromFloats = function(r,g,b) {
	$s.push("thx.color.Rgb::fromFloats");
	var $spos = $s.length;
	var $tmp = new thx.color.Rgb(Ints.interpolate(r,0,255),Ints.interpolate(g,0,255),Ints.interpolate(b,0,255));
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.color.Rgb.fromInt = function(v) {
	$s.push("thx.color.Rgb::fromInt");
	var $spos = $s.length;
	var $tmp = new thx.color.Rgb(v >> 16 & 255,v >> 8 & 255,v & 255);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.color.Rgb.equals = function(a,b) {
	$s.push("thx.color.Rgb::equals");
	var $spos = $s.length;
	var $tmp = a.red == b.red && a.green == b.green && a.blue == b.blue;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.color.Rgb.darker = function(color,t,interpolator) {
	$s.push("thx.color.Rgb::darker");
	var $spos = $s.length;
	var $tmp = new thx.color.Rgb(Ints.interpolate(t * color.red,0,255,interpolator),Ints.interpolate(t * color.green,0,255,interpolator),Ints.interpolate(t * color.blue,0,255,interpolator));
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.color.Rgb.interpolate = function(a,b,t,interpolator) {
	$s.push("thx.color.Rgb::interpolate");
	var $spos = $s.length;
	var $tmp = new thx.color.Rgb(Ints.interpolate(t,a.red,b.red,interpolator),Ints.interpolate(t,a.green,b.green,interpolator),Ints.interpolate(t,a.blue,b.blue,interpolator));
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.color.Rgb.interpolatef = function(a,b,interpolator) {
	$s.push("thx.color.Rgb::interpolatef");
	var $spos = $s.length;
	var r = Ints.interpolatef(a.red,b.red), g = Ints.interpolatef(a.green,b.green), b1 = Ints.interpolatef(a.blue,b.blue);
	var $tmp = function(t) {
		$s.push("thx.color.Rgb::interpolatef@96");
		var $spos = $s.length;
		var $tmp = new thx.color.Rgb(r(t),g(t),b1(t));
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.color.Rgb.contrast = function(c) {
	$s.push("thx.color.Rgb::contrast");
	var $spos = $s.length;
	var nc = thx.color.Hsl.toHsl(c);
	if(nc.lightness < .5) {
		var $tmp = new thx.color.Hsl(nc.hue,nc.saturation,nc.lightness + 0.5);
		$s.pop();
		return $tmp;
	} else {
		var $tmp = new thx.color.Hsl(nc.hue,nc.saturation,nc.lightness - 0.5);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
thx.color.Rgb.contrastBW = function(c) {
	$s.push("thx.color.Rgb::contrastBW");
	var $spos = $s.length;
	var nc = thx.color.Hsl.toHsl(c);
	if(nc.lightness < .5) {
		var $tmp = new thx.color.Hsl(nc.hue,nc.saturation,1.0);
		$s.pop();
		return $tmp;
	} else {
		var $tmp = new thx.color.Hsl(nc.hue,nc.saturation,0);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
thx.color.Rgb.prototype.blue = null;
thx.color.Rgb.prototype.green = null;
thx.color.Rgb.prototype.red = null;
thx.color.Rgb.prototype["int"] = function() {
	$s.push("thx.color.Rgb::int");
	var $spos = $s.length;
	var $tmp = (this.red & 255) << 16 | (this.green & 255) << 8 | this.blue & 255;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.color.Rgb.prototype.hex = function(prefix) {
	$s.push("thx.color.Rgb::hex");
	var $spos = $s.length;
	if(prefix == null) prefix = "";
	var $tmp = prefix + StringTools.hex(this.red,2) + StringTools.hex(this.green,2) + StringTools.hex(this.blue,2);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.color.Rgb.prototype.toCss = function() {
	$s.push("thx.color.Rgb::toCss");
	var $spos = $s.length;
	var $tmp = this.hex("#");
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.color.Rgb.prototype.toRgbString = function() {
	$s.push("thx.color.Rgb::toRgbString");
	var $spos = $s.length;
	var $tmp = "rgb(" + this.red + "," + this.green + "," + this.blue + ")";
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.color.Rgb.prototype.toString = function() {
	$s.push("thx.color.Rgb::toString");
	var $spos = $s.length;
	var $tmp = this.toRgbString();
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.color.Rgb.prototype.__class__ = thx.color.Rgb;
thx.color.Hsl = function(h,s,l) {
	if( h === $_ ) return;
	$s.push("thx.color.Hsl::new");
	var $spos = $s.length;
	this.hue = h = Floats.circularWrap(h,360);
	this.saturation = s = Floats.normalize(s);
	this.lightness = l = Floats.normalize(l);
	thx.color.Rgb.call(this,Ints.interpolate(thx.color.Hsl._c(h + 120,s,l),0,255,null),Ints.interpolate(thx.color.Hsl._c(h,s,l),0,255,null),Ints.interpolate(thx.color.Hsl._c(h - 120,s,l),0,255,null));
	$s.pop();
}
thx.color.Hsl.__name__ = ["thx","color","Hsl"];
thx.color.Hsl.__super__ = thx.color.Rgb;
for(var k in thx.color.Rgb.prototype ) thx.color.Hsl.prototype[k] = thx.color.Rgb.prototype[k];
thx.color.Hsl._c = function(d,s,l) {
	$s.push("thx.color.Hsl::_c");
	var $spos = $s.length;
	var m2 = l <= 0.5?l * (1 + s):l + s - l * s;
	var m1 = 2 * l - m2;
	d = Floats.circularWrap(d,360);
	if(d < 60) {
		var $tmp = m1 + (m2 - m1) * d / 60;
		$s.pop();
		return $tmp;
	} else if(d < 180) {
		$s.pop();
		return m2;
	} else if(d < 240) {
		var $tmp = m1 + (m2 - m1) * (240 - d) / 60;
		$s.pop();
		return $tmp;
	} else {
		$s.pop();
		return m1;
	}
	$s.pop();
}
thx.color.Hsl.toHsl = function(c) {
	$s.push("thx.color.Hsl::toHsl");
	var $spos = $s.length;
	var r = c.red / 255.0;
	var g = c.green / 255.0, b = c.blue / 255.0, min = Floats.min(r < g?r:g,b), max = Floats.max(r > g?r:g,b), delta = max - min, h, s, l = (max + min) / 2;
	if(delta == 0.0) s = h = 0.0; else {
		s = l < 0.5?delta / (max + min):delta / (2 - max - min);
		if(r == max) h = (g - b) / delta + (g < b?6:0); else if(g == max) h = (b - r) / delta + 2; else h = (r - g) / delta + 4;
		h *= 60;
	}
	var $tmp = new thx.color.Hsl(h,s,l);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.color.Hsl.equals = function(a,b) {
	$s.push("thx.color.Hsl::equals");
	var $spos = $s.length;
	var $tmp = a.hue == b.hue && a.saturation == b.saturation && a.lightness == b.lightness;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.color.Hsl.darker = function(color,t,interpolator) {
	$s.push("thx.color.Hsl::darker");
	var $spos = $s.length;
	var v = color.lightness / t;
	var $tmp = new thx.color.Hsl(color.hue,color.saturation,null == interpolator?v:interpolator(v,0,1));
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.color.Hsl.interpolate = function(a,b,t,interpolator) {
	$s.push("thx.color.Hsl::interpolate");
	var $spos = $s.length;
	var $tmp = new thx.color.Hsl(Floats.interpolate(t,a.hue,b.hue,interpolator),Floats.interpolate(t,a.saturation,b.saturation,interpolator),Floats.interpolate(t,a.lightness,b.lightness,interpolator));
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.color.Hsl.prototype.hue = null;
thx.color.Hsl.prototype.saturation = null;
thx.color.Hsl.prototype.lightness = null;
thx.color.Hsl.prototype.toHslString = function() {
	$s.push("thx.color.Hsl::toHslString");
	var $spos = $s.length;
	var $tmp = "hsl(" + this.hue + "," + this.saturation * 100 + "%," + this.lightness * 100 + "%)";
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.color.Hsl.prototype.__class__ = thx.color.Hsl;
Example = function(cid) {
	if( cid === $_ ) return;
	$s.push("Example::new");
	var $spos = $s.length;
	this.cid = cid;
	$s.pop();
}
Example.__name__ = ["Example"];
Example.prototype.cid = null;
Example.prototype.container = null;
Example.prototype.run = function() {
	$s.push("Example::run");
	var $spos = $s.length;
	var des = this.description();
	thx.js.Dom.select("#description").html().string(null != des?des:"");
	this.container = thx.js.Dom.select(this.cid).attr("class").string(Type.getClassName(Type.getClass(this)).split(".").pop());
	this.runExample();
	$s.pop();
}
Example.prototype.runExample = function() {
	$s.push("Example::runExample");
	var $spos = $s.length;
	haxe.Log.trace("abstract method: " + Type.getClassName(Type.getClass(this)) + ".runExample",{ fileName : "Example.hx", lineNumber : 27, className : "Example", methodName : "runExample"});
	$s.pop();
}
Example.prototype.destroy = function() {
	$s.push("Example::destroy");
	var $spos = $s.length;
	this.destroyExample();
	this.container.attr("class").remove().selectAll("*").remove();
	thx.js.Dom.select("#haxe\\:trace").html().string("");
	$s.pop();
}
Example.prototype.description = function() {
	$s.push("Example::description");
	var $spos = $s.length;
	$s.pop();
	return null;
	$s.pop();
}
Example.prototype.destroyExample = function() {
	$s.push("Example::destroyExample");
	var $spos = $s.length;
	$s.pop();
}
Example.prototype.stageWidth = function() {
	$s.push("Example::stageWidth");
	var $spos = $s.length;
	var $tmp = js.Lib.document.body.clientWidth - 290;
	$s.pop();
	return $tmp;
	$s.pop();
}
Example.prototype.__class__ = Example;
if(typeof examples=='undefined') examples = {}
examples.Area = function(cid) {
	if( cid === $_ ) return;
	$s.push("examples.Area::new");
	var $spos = $s.length;
	Example.call(this,cid);
	$s.pop();
}
examples.Area.__name__ = ["examples","Area"];
examples.Area.__super__ = Example;
for(var k in Example.prototype ) examples.Area.prototype[k] = Example.prototype[k];
examples.Area.prototype.runExample = function() {
	$s.push("examples.Area::runExample");
	var $spos = $s.length;
	var data = Ints.range(20).map(function(_,i) {
		$s.push("examples.Area::runExample@14");
		var $spos = $s.length;
		var $tmp = { x : i / 19, y : (Math.sin(i / 3) + 1) / 2};
		$s.pop();
		return $tmp;
		$s.pop();
	});
	var w = 450, h = 275, p = 20, x = new thx.math.scale.Linear().domain(0,1).range(0,w), y = new thx.math.scale.Linear().domain(0,1).range(h,0);
	var vis = this.container.append("svg:svg").attr("class").string("areaex").data([data]).update().attr("width")["float"](w + p * 2).attr("height")["float"](h + p * 2).append("svg:g").attr("transform").string("translate(" + p + "," + p + ")");
	var rules = vis.selectAll("g.rule").data(x.ticks()).enter().append("svg:g").attr("class").string("rule");
	rules.append("svg:line").attr("x1").floatf($closure(x,"scale")).attr("x2").floatf($closure(x,"scale")).attr("y1")["float"](0).attr("y2")["float"](h - 1);
	rules.append("svg:line").attr("class").stringf(function(d,i) {
		$s.push("examples.Area::runExample@46");
		var $spos = $s.length;
		var $tmp = d != 0?null:"axis";
		$s.pop();
		return $tmp;
		$s.pop();
	}).attr("y1").floatf($closure(y,"scale")).attr("y2").floatf($closure(y,"scale")).attr("x1")["float"](0).attr("x2")["float"](w + 1);
	rules.append("svg:text").attr("x").floatf($closure(x,"scale")).attr("y")["float"](h + 3).attr("dy").string(".71em").attr("text-anchor").string("middle").text().stringf($closure(x,"tickFormat"));
	rules.append("svg:text").attr("y").floatf($closure(y,"scale")).attr("x")["float"](-3).attr("dy").string(".35em").attr("text-anchor").string("end").text().stringf($closure(y,"tickFormat"));
	vis.append("svg:path").attr("class").string("area").attr("d").stringf($closure(thx.svg.Area.pointObjectXY().x(function(d,_) {
		$s.push("examples.Area::runExample@69");
		var $spos = $s.length;
		var $tmp = x.scale(d.x);
		$s.pop();
		return $tmp;
		$s.pop();
	}).y0(function(_,_1) {
		$s.push("examples.Area::runExample@70");
		var $spos = $s.length;
		var $tmp = h - 1;
		$s.pop();
		return $tmp;
		$s.pop();
	}).y1(function(d,_) {
		$s.push("examples.Area::runExample@71");
		var $spos = $s.length;
		var $tmp = y.scale(d.y);
		$s.pop();
		return $tmp;
		$s.pop();
	}),"shape"));
	vis.append("svg:path").attr("class").string("line").attr("d").stringf($closure(thx.svg.Line.pointObject().x(function(d,_) {
		$s.push("examples.Area::runExample@79");
		var $spos = $s.length;
		var $tmp = x.scale(d.x);
		$s.pop();
		return $tmp;
		$s.pop();
	}).y(function(d,_) {
		$s.push("examples.Area::runExample@80");
		var $spos = $s.length;
		var $tmp = y.scale(d.y);
		$s.pop();
		return $tmp;
		$s.pop();
	}),"shape"));
	vis.selectAll("circle.area").data(data).enter().append("svg:circle").attr("class").string("area").attr("cx").floatf(function(d,_) {
		$s.push("examples.Area::runExample@89");
		var $spos = $s.length;
		var $tmp = x.scale(d.x);
		$s.pop();
		return $tmp;
		$s.pop();
	}).attr("cy").floatf(function(d,_) {
		$s.push("examples.Area::runExample@90");
		var $spos = $s.length;
		var $tmp = y.scale(d.y);
		$s.pop();
		return $tmp;
		$s.pop();
	}).attr("r")["float"](3.5);
	$s.pop();
}
examples.Area.prototype.description = function() {
	$s.push("examples.Area::description");
	var $spos = $s.length;
	$s.pop();
	return "Area Chart from Math.sin() values. Not interactive.";
	$s.pop();
}
examples.Area.prototype.__class__ = examples.Area;
thx.js.AccessTween = function(transition,tweens) {
	if( transition === $_ ) return;
	$s.push("thx.js.AccessTween::new");
	var $spos = $s.length;
	this.transition = transition;
	this.tweens = tweens;
	$s.pop();
}
thx.js.AccessTween.__name__ = ["thx","js","AccessTween"];
thx.js.AccessTween.prototype.transition = null;
thx.js.AccessTween.prototype.tweens = null;
thx.js.AccessTween.prototype.transitionColorTween = function(value) {
	$s.push("thx.js.AccessTween::transitionColorTween");
	var $spos = $s.length;
	var $tmp = function(d,i,a) {
		$s.push("thx.js.AccessTween::transitionColorTween@22");
		var $spos = $s.length;
		var $tmp = thx.color.Rgb.interpolatef(a,value);
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessTween.prototype.transitionColorTweenf = function(f) {
	$s.push("thx.js.AccessTween::transitionColorTweenf");
	var $spos = $s.length;
	var $tmp = function(d,i,a) {
		$s.push("thx.js.AccessTween::transitionColorTweenf@27");
		var $spos = $s.length;
		var $tmp = thx.color.Rgb.interpolatef(a,f(d,i));
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessTween.prototype.transitionStringTween = function(value) {
	$s.push("thx.js.AccessTween::transitionStringTween");
	var $spos = $s.length;
	var $tmp = function(d,i,a) {
		$s.push("thx.js.AccessTween::transitionStringTween@32");
		var $spos = $s.length;
		var $tmp = Strings.interpolatef(a,value);
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessTween.prototype.transitionStringTweenf = function(f) {
	$s.push("thx.js.AccessTween::transitionStringTweenf");
	var $spos = $s.length;
	var $tmp = function(d,i,a) {
		$s.push("thx.js.AccessTween::transitionStringTweenf@37");
		var $spos = $s.length;
		var $tmp = Strings.interpolatef(a,f(d,i));
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessTween.prototype.transitionFloatTween = function(value) {
	$s.push("thx.js.AccessTween::transitionFloatTween");
	var $spos = $s.length;
	var $tmp = function(d,i,a) {
		$s.push("thx.js.AccessTween::transitionFloatTween@42");
		var $spos = $s.length;
		var $tmp = Floats.interpolatef(a,value);
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessTween.prototype.transitionFloatTweenf = function(f) {
	$s.push("thx.js.AccessTween::transitionFloatTweenf");
	var $spos = $s.length;
	var $tmp = function(d,i,a) {
		$s.push("thx.js.AccessTween::transitionFloatTweenf@47");
		var $spos = $s.length;
		var $tmp = Floats.interpolatef(a,f(d,i));
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessTween.prototype._that = function() {
	$s.push("thx.js.AccessTween::_that");
	var $spos = $s.length;
	var $tmp = this.transition;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessTween.prototype.__class__ = thx.js.AccessTween;
thx.js.AccessTweenStyle = function(name,transition,tweens) {
	if( name === $_ ) return;
	$s.push("thx.js.AccessTweenStyle::new");
	var $spos = $s.length;
	thx.js.AccessTween.call(this,transition,tweens);
	this.name = name;
	$s.pop();
}
thx.js.AccessTweenStyle.__name__ = ["thx","js","AccessTweenStyle"];
thx.js.AccessTweenStyle.__super__ = thx.js.AccessTween;
for(var k in thx.js.AccessTween.prototype ) thx.js.AccessTweenStyle.prototype[k] = thx.js.AccessTween.prototype[k];
thx.js.AccessTweenStyle.prototype.name = null;
thx.js.AccessTweenStyle.prototype.floatfNode = function(f,priority) {
	$s.push("thx.js.AccessTweenStyle::floatfNode");
	var $spos = $s.length;
	var $tmp = this.floatTween(this.transitionFloatTweenf(f),priority);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessTweenStyle.prototype["float"] = function(value,priority) {
	$s.push("thx.js.AccessTweenStyle::float");
	var $spos = $s.length;
	var $tmp = this.floatTween(this.transitionFloatTween(value),priority);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessTweenStyle.prototype.floatTween = function(tween,priority) {
	$s.push("thx.js.AccessTweenStyle::floatTween");
	var $spos = $s.length;
	if(null == priority) priority = null;
	var name = this.name;
	var styleTween = function(d,i) {
		$s.push("thx.js.AccessTweenStyle::floatTween@38");
		var $spos = $s.length;
		var f = tween(d,i,Std.parseFloat(js.Lib.window.getComputedStyle(d,null).getPropertyValue(name)));
		var $tmp = function(t) {
			$s.push("thx.js.AccessTweenStyle::floatTween@38@41");
			var $spos = $s.length;
			d.style.setProperty(name,"" + f(t),priority);
			$s.pop();
		};
		$s.pop();
		return $tmp;
		$s.pop();
	};
	this.tweens.set("style." + name,styleTween);
	var $tmp = this.transition;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessTweenStyle.prototype.stringfNode = function(f,priority) {
	$s.push("thx.js.AccessTweenStyle::stringfNode");
	var $spos = $s.length;
	var $tmp = this.stringTween(this.transitionStringTweenf(f),priority);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessTweenStyle.prototype.string = function(value,priority) {
	$s.push("thx.js.AccessTweenStyle::string");
	var $spos = $s.length;
	var $tmp = this.stringTween(this.transitionStringTween(value),priority);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessTweenStyle.prototype.stringTween = function(tween,priority) {
	$s.push("thx.js.AccessTweenStyle::stringTween");
	var $spos = $s.length;
	if(null == priority) priority = null;
	var name = this.name;
	var styleTween = function(d,i) {
		$s.push("thx.js.AccessTweenStyle::stringTween@65");
		var $spos = $s.length;
		var f = tween(d,i,js.Lib.window.getComputedStyle(d,null).getPropertyValue(name));
		var $tmp = function(t) {
			$s.push("thx.js.AccessTweenStyle::stringTween@65@68");
			var $spos = $s.length;
			d.style.setProperty(name,f(t),priority);
			$s.pop();
		};
		$s.pop();
		return $tmp;
		$s.pop();
	};
	this.tweens.set("style." + name,styleTween);
	var $tmp = this.transition;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessTweenStyle.prototype.colorfNode = function(f,priority) {
	$s.push("thx.js.AccessTweenStyle::colorfNode");
	var $spos = $s.length;
	var $tmp = this.colorTween(this.transitionColorTweenf(f),priority);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessTweenStyle.prototype.color = function(value,priority) {
	$s.push("thx.js.AccessTweenStyle::color");
	var $spos = $s.length;
	var $tmp = this.colorTween(this.transitionColorTween(thx.color.Colors.parse(value)),priority);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessTweenStyle.prototype.colorTween = function(tween,priority) {
	$s.push("thx.js.AccessTweenStyle::colorTween");
	var $spos = $s.length;
	if(null == priority) priority = null;
	var name = this.name;
	var styleTween = function(d,i) {
		$s.push("thx.js.AccessTweenStyle::colorTween@92");
		var $spos = $s.length;
		var f = tween(d,i,thx.color.Colors.parse(js.Lib.window.getComputedStyle(d,null).getPropertyValue(name)));
		var $tmp = function(t) {
			$s.push("thx.js.AccessTweenStyle::colorTween@92@95");
			var $spos = $s.length;
			d.style.setProperty(name,f(t).toRgbString(),priority);
			$s.pop();
		};
		$s.pop();
		return $tmp;
		$s.pop();
	};
	this.tweens.set("style." + name,styleTween);
	var $tmp = this.transition;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessTweenStyle.prototype.__class__ = thx.js.AccessTweenStyle;
thx.js.AccessDataTweenStyle = function(name,transition,tweens) {
	if( name === $_ ) return;
	$s.push("thx.js.AccessDataTweenStyle::new");
	var $spos = $s.length;
	thx.js.AccessTweenStyle.call(this,name,transition,tweens);
	$s.pop();
}
thx.js.AccessDataTweenStyle.__name__ = ["thx","js","AccessDataTweenStyle"];
thx.js.AccessDataTweenStyle.__super__ = thx.js.AccessTweenStyle;
for(var k in thx.js.AccessTweenStyle.prototype ) thx.js.AccessDataTweenStyle.prototype[k] = thx.js.AccessTweenStyle.prototype[k];
thx.js.AccessDataTweenStyle.prototype.floatf = function(f,priority) {
	$s.push("thx.js.AccessDataTweenStyle::floatf");
	var $spos = $s.length;
	var $tmp = this.floatfNode(function(n,i) {
		$s.push("thx.js.AccessDataTweenStyle::floatf@114");
		var $spos = $s.length;
		var $tmp = f(Reflect.field(n,"__data__"),i);
		$s.pop();
		return $tmp;
		$s.pop();
	},priority);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessDataTweenStyle.prototype.stringf = function(f,priority) {
	$s.push("thx.js.AccessDataTweenStyle::stringf");
	var $spos = $s.length;
	var $tmp = this.stringfNode(function(n,i) {
		$s.push("thx.js.AccessDataTweenStyle::stringf@119");
		var $spos = $s.length;
		var $tmp = f(Reflect.field(n,"__data__"),i);
		$s.pop();
		return $tmp;
		$s.pop();
	},priority);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessDataTweenStyle.prototype.colorf = function(f,priority) {
	$s.push("thx.js.AccessDataTweenStyle::colorf");
	var $spos = $s.length;
	var $tmp = this.colorfNode(function(n,i) {
		$s.push("thx.js.AccessDataTweenStyle::colorf@124");
		var $spos = $s.length;
		var $tmp = f(Reflect.field(n,"__data__"),i);
		$s.pop();
		return $tmp;
		$s.pop();
	},priority);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessDataTweenStyle.prototype.__class__ = thx.js.AccessDataTweenStyle;
if(!thx.math) thx.math = {}
if(!thx.math.scale) thx.math.scale = {}
thx.math.scale.Linear = function(p) {
	if( p === $_ ) return;
	$s.push("thx.math.scale.Linear::new");
	var $spos = $s.length;
	this.x0 = 0;
	this.x1 = 1;
	this.y0 = 0;
	this.y1 = 1;
	this.kx = 1;
	this.ky = 1;
	this.f = $closure(Floats,"interpolatef");
	this.i = this.f(this.y0,this.y1,null);
	this.m = 10;
	this._clamp = false;
	this._clampmin = 0.0;
	this._clampmax = 1.0;
	$s.pop();
}
thx.math.scale.Linear.__name__ = ["thx","math","scale","Linear"];
thx.math.scale.Linear.prototype.x0 = null;
thx.math.scale.Linear.prototype.x1 = null;
thx.math.scale.Linear.prototype.y0 = null;
thx.math.scale.Linear.prototype.y1 = null;
thx.math.scale.Linear.prototype.kx = null;
thx.math.scale.Linear.prototype.ky = null;
thx.math.scale.Linear.prototype.f = null;
thx.math.scale.Linear.prototype.i = null;
thx.math.scale.Linear.prototype.m = null;
thx.math.scale.Linear.prototype._clamp = null;
thx.math.scale.Linear.prototype._clampmin = null;
thx.math.scale.Linear.prototype._clampmax = null;
thx.math.scale.Linear.prototype.scale = function(x,_) {
	$s.push("thx.math.scale.Linear::scale");
	var $spos = $s.length;
	x = (x - this.x0) * this.kx;
	var $tmp = this.i(this._clamp?Floats.clamp(x,this._clampmin,this._clampmax):x);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Linear.prototype.invert = function(y,_) {
	$s.push("thx.math.scale.Linear::invert");
	var $spos = $s.length;
	var $tmp = (y - this.y0) * this.ky + this.x0;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Linear.prototype.getDomain = function() {
	$s.push("thx.math.scale.Linear::getDomain");
	var $spos = $s.length;
	var $tmp = [this.x0,this.x1];
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Linear.prototype.domain = function(x0,x1) {
	$s.push("thx.math.scale.Linear::domain");
	var $spos = $s.length;
	this.x0 = x0;
	this.x1 = x1;
	this.kx = 1 / (x1 - x0);
	this.ky = (x1 - x0) / (this.y1 - this.y0);
	$s.pop();
	return this;
	$s.pop();
}
thx.math.scale.Linear.prototype.getModulo = function() {
	$s.push("thx.math.scale.Linear::getModulo");
	var $spos = $s.length;
	var $tmp = this.m;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Linear.prototype.modulo = function(m) {
	$s.push("thx.math.scale.Linear::modulo");
	var $spos = $s.length;
	this.m = m;
	$s.pop();
	return this;
	$s.pop();
}
thx.math.scale.Linear.prototype.getRange = function() {
	$s.push("thx.math.scale.Linear::getRange");
	var $spos = $s.length;
	var $tmp = [this.y0,this.y1];
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Linear.prototype.range = function(y0,y1) {
	$s.push("thx.math.scale.Linear::range");
	var $spos = $s.length;
	this.y0 = y0;
	this.y1 = y1;
	this.ky = (this.x1 - this.x0) / (y1 - y0);
	this.i = this.f(y0,y1,null);
	$s.pop();
	return this;
	$s.pop();
}
thx.math.scale.Linear.prototype.rangeRound = function(x0,x1) {
	$s.push("thx.math.scale.Linear::rangeRound");
	var $spos = $s.length;
	this.x0 = x0;
	this.x1 = x1;
	var $tmp = this.range(x0,x1).interpolatef($closure(Ints,"interpolatef"));
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Linear.prototype.getInterpolate = function() {
	$s.push("thx.math.scale.Linear::getInterpolate");
	var $spos = $s.length;
	var $tmp = this.f;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Linear.prototype.interpolatef = function(x) {
	$s.push("thx.math.scale.Linear::interpolatef");
	var $spos = $s.length;
	this.i = (this.f = x)(this.y0,this.y1,null);
	$s.pop();
	return this;
	$s.pop();
}
thx.math.scale.Linear.prototype.getClamp = function() {
	$s.push("thx.math.scale.Linear::getClamp");
	var $spos = $s.length;
	var $tmp = this._clamp;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Linear.prototype.clamp = function(v) {
	$s.push("thx.math.scale.Linear::clamp");
	var $spos = $s.length;
	this._clamp = v;
	$s.pop();
	return this;
	$s.pop();
}
thx.math.scale.Linear.prototype.getClampMin = function() {
	$s.push("thx.math.scale.Linear::getClampMin");
	var $spos = $s.length;
	var $tmp = this._clampmin;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Linear.prototype.clampMin = function(v) {
	$s.push("thx.math.scale.Linear::clampMin");
	var $spos = $s.length;
	this._clampmin = v;
	$s.pop();
	return this;
	$s.pop();
}
thx.math.scale.Linear.prototype.getClampMax = function() {
	$s.push("thx.math.scale.Linear::getClampMax");
	var $spos = $s.length;
	var $tmp = this._clampmax;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Linear.prototype.clampMax = function(v) {
	$s.push("thx.math.scale.Linear::clampMax");
	var $spos = $s.length;
	this._clampmax = v;
	$s.pop();
	return this;
	$s.pop();
}
thx.math.scale.Linear.prototype.tickRange = function() {
	$s.push("thx.math.scale.Linear::tickRange");
	var $spos = $s.length;
	var start = Math.min(this.x0,this.x1), stop = Math.max(this.x0,this.x1), span = stop - start, step = Math.pow(10,Math.floor(Math.log(span / this.m) / 2.302585092994046)), err = this.m / (span / step);
	if(err <= .15) step *= 10; else if(err <= .35) step *= 5; else if(err <= .75) step *= 2;
	var $tmp = { start : Math.ceil(start / step) * step, stop : Math.floor(stop / step) * step + step * .5, step : step};
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Linear.prototype.ticks = function() {
	$s.push("thx.math.scale.Linear::ticks");
	var $spos = $s.length;
	var range = this.tickRange();
	var $tmp = Floats.range(range.start,range.stop,range.step);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Linear.prototype.tickFormat = function(v,i) {
	$s.push("thx.math.scale.Linear::tickFormat");
	var $spos = $s.length;
	var n = Math.max(0,-Math.floor(Math.log(this.tickRange().step) / 2.302585092994046 + .01));
	var $tmp = Floats.format(v,"D:" + n);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Linear.prototype.transform = function(scale,t,a,b) {
	$s.push("thx.math.scale.Linear::transform");
	var $spos = $s.length;
	var range = this.getRange().map(function(v,_) {
		$s.push("thx.math.scale.Linear::transform@138");
		var $spos = $s.length;
		var $tmp = (v - t) / scale;
		$s.pop();
		return $tmp;
		$s.pop();
	});
	this.domain(a,b);
	var r = range.map($closure(this,"invert"));
	this.domain(r[0],r[1]);
	$s.pop();
}
thx.math.scale.Linear.prototype.__class__ = thx.math.scale.Linear;
if(!thx.culture) thx.culture = {}
thx.culture.Info = function() { }
thx.culture.Info.__name__ = ["thx","culture","Info"];
thx.culture.Info.prototype.name = null;
thx.culture.Info.prototype["native"] = null;
thx.culture.Info.prototype.english = null;
thx.culture.Info.prototype.iso2 = null;
thx.culture.Info.prototype.iso3 = null;
thx.culture.Info.prototype.pluralRule = null;
thx.culture.Info.prototype.toString = function() {
	$s.push("thx.culture.Info::toString");
	var $spos = $s.length;
	var $tmp = this["native"] + " (" + this.english + ")";
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.culture.Info.prototype.__class__ = thx.culture.Info;
thx.culture.Culture = function() { }
thx.culture.Culture.__name__ = ["thx","culture","Culture"];
thx.culture.Culture.__super__ = thx.culture.Info;
for(var k in thx.culture.Info.prototype ) thx.culture.Culture.prototype[k] = thx.culture.Info.prototype[k];
thx.culture.Culture.cultures = null;
thx.culture.Culture.getCultures = function() {
	$s.push("thx.culture.Culture::getCultures");
	var $spos = $s.length;
	if(null == thx.culture.Culture.cultures) thx.culture.Culture.cultures = new Hash();
	var $tmp = thx.culture.Culture.cultures;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.culture.Culture.get = function(name) {
	$s.push("thx.culture.Culture::get");
	var $spos = $s.length;
	var $tmp = thx.culture.Culture.getCultures().get(name.toLowerCase());
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.culture.Culture.names = function() {
	$s.push("thx.culture.Culture::names");
	var $spos = $s.length;
	var $tmp = thx.culture.Culture.getCultures().keys();
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.culture.Culture._defaultCulture = null;
thx.culture.Culture.defaultCulture = null;
thx.culture.Culture.getDefaultCulture = function() {
	$s.push("thx.culture.Culture::getDefaultCulture");
	var $spos = $s.length;
	if(null == thx.culture.Culture._defaultCulture) {
		var $tmp = thx.cultures.EnUS.getCulture();
		$s.pop();
		return $tmp;
	} else {
		var $tmp = thx.culture.Culture._defaultCulture;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
thx.culture.Culture.setDefaultCulture = function(culture) {
	$s.push("thx.culture.Culture::setDefaultCulture");
	var $spos = $s.length;
	var $tmp = thx.culture.Culture._defaultCulture = culture;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.culture.Culture.add = function(culture) {
	$s.push("thx.culture.Culture::add");
	var $spos = $s.length;
	if(null == thx.culture.Culture._defaultCulture) thx.culture.Culture._defaultCulture = culture;
	var name = (culture.iso2 + culture.language.iso2).toLowerCase();
	if(!thx.culture.Culture.getCultures().exists(name)) thx.culture.Culture.getCultures().set(name,culture);
	$s.pop();
}
thx.culture.Culture.prototype.language = null;
thx.culture.Culture.prototype.date = null;
thx.culture.Culture.prototype.englishCurrency = null;
thx.culture.Culture.prototype.nativeCurrency = null;
thx.culture.Culture.prototype.currencySymbol = null;
thx.culture.Culture.prototype.currencyIso = null;
thx.culture.Culture.prototype.englishRegion = null;
thx.culture.Culture.prototype.nativeRegion = null;
thx.culture.Culture.prototype.isMetric = null;
thx.culture.Culture.prototype.digits = null;
thx.culture.Culture.prototype.signNeg = null;
thx.culture.Culture.prototype.signPos = null;
thx.culture.Culture.prototype.symbolNaN = null;
thx.culture.Culture.prototype.symbolPercent = null;
thx.culture.Culture.prototype.symbolPermille = null;
thx.culture.Culture.prototype.symbolNegInf = null;
thx.culture.Culture.prototype.symbolPosInf = null;
thx.culture.Culture.prototype.number = null;
thx.culture.Culture.prototype.currency = null;
thx.culture.Culture.prototype.percent = null;
thx.culture.Culture.prototype.__class__ = thx.culture.Culture;
if(!thx.cultures) thx.cultures = {}
thx.cultures.EnUS = function(p) {
	if( p === $_ ) return;
	$s.push("thx.cultures.EnUS::new");
	var $spos = $s.length;
	this.language = thx.languages.En.getLanguage();
	this.name = "en-US";
	this.english = "English (United States)";
	this["native"] = "English (United States)";
	this.date = new thx.culture.core.DateTimeInfo(["January","February","March","April","May","June","July","August","September","October","November","December",""],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Su","Mo","Tu","We","Th","Fr","Sa"],"AM","PM","/",":",0,"%B, %Y","%B %d","%A, %B %d, %Y","%f/%e/%Y","%a, %d %b %Y %H:%M:%S GMT","%A, %B %d, %Y %l:%M:%S %p","%Y-%m-%d %H:%M:%SZ","%Y-%m-%dT%H:%M:%S","%l:%M:%S %p","%l:%M %p");
	this.symbolNaN = "NaN";
	this.symbolPercent = "%";
	this.symbolPermille = "‰";
	this.signNeg = "-";
	this.signPos = "+";
	this.symbolNegInf = "-Infinity";
	this.symbolPosInf = "Infinity";
	this.number = new thx.culture.core.NumberInfo(2,".",[3],",","-n","n");
	this.currency = new thx.culture.core.NumberInfo(2,".",[3],",","($n)","$n");
	this.percent = new thx.culture.core.NumberInfo(2,".",[3],",","-n %","n %");
	this.pluralRule = 1;
	this.englishCurrency = "US Dollar";
	this.nativeCurrency = "US Dollar";
	this.currencySymbol = "$";
	this.currencyIso = "USD";
	this.englishRegion = "United States";
	this.nativeRegion = "United States";
	this.iso2 = "US";
	this.iso3 = "USA";
	this.isMetric = false;
	thx.culture.Culture.add(this);
	$s.pop();
}
thx.cultures.EnUS.__name__ = ["thx","cultures","EnUS"];
thx.cultures.EnUS.__super__ = thx.culture.Culture;
for(var k in thx.culture.Culture.prototype ) thx.cultures.EnUS.prototype[k] = thx.culture.Culture.prototype[k];
thx.cultures.EnUS.culture = null;
thx.cultures.EnUS.getCulture = function() {
	$s.push("thx.cultures.EnUS::getCulture");
	var $spos = $s.length;
	if(null == thx.cultures.EnUS.culture) thx.cultures.EnUS.culture = new thx.cultures.EnUS();
	var $tmp = thx.cultures.EnUS.culture;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.cultures.EnUS.prototype.__class__ = thx.cultures.EnUS;
examples.HelloData = function(cid) {
	if( cid === $_ ) return;
	$s.push("examples.HelloData::new");
	var $spos = $s.length;
	Example.call(this,cid);
	$s.pop();
}
examples.HelloData.__name__ = ["examples","HelloData"];
examples.HelloData.__super__ = Example;
for(var k in Example.prototype ) examples.HelloData.prototype[k] = Example.prototype[k];
examples.HelloData.prototype._refresh = null;
examples.HelloData.prototype.runExample = function() {
	$s.push("examples.HelloData::runExample");
	var $spos = $s.length;
	var data = [4,8,15,16,23,42];
	var container = this.container;
	data.forEach(function(_,_1) {
		$s.push("examples.HelloData::runExample@20");
		var $spos = $s.length;
		container.append("span");
		$s.pop();
	});
	container.selectAll("span").data(data).update().append("svg:svg").attr("width")["float"](100).attr("height")["float"](100).append("svg:text").attr("x").string("50%").attr("y").string("50%").attr("dy").string(".35em").attr("text-anchor").string("middle").attr("fill").string("white").attr("stroke").string("black").attr("stroke-width")["float"](1.5).style("font").string("36pt Comic Sans MS").style("text-shadow").string("3px 3px 3px rgba(0,0,0,.4)").text().data();
	this._refresh = function(_) {
		$s.push("examples.HelloData::runExample@40");
		var $spos = $s.length;
		var _g1 = 0, _g = data.length;
		while(_g1 < _g) {
			var i = _g1++;
			data[i] = (data[i] + 1) % 100;
		}
		container.selectAll("text").data(data).update().text().data();
		$s.pop();
	};
	js.Lib.window.addEventListener("keypress",this._refresh,false);
	$s.pop();
}
examples.HelloData.prototype.destroyExample = function() {
	$s.push("examples.HelloData::destroyExample");
	var $spos = $s.length;
	js.Lib.window.removeEventListener("keypress",this._refresh,false);
	$s.pop();
}
examples.HelloData.prototype.description = function() {
	$s.push("examples.HelloData::description");
	var $spos = $s.length;
	$s.pop();
	return "Styled SVG texts. Press any key to increment the values.";
	$s.pop();
}
examples.HelloData.prototype.__class__ = examples.HelloData;
examples.HelloTransition = function(cid) {
	if( cid === $_ ) return;
	$s.push("examples.HelloTransition::new");
	var $spos = $s.length;
	Example.call(this,cid);
	$s.pop();
}
examples.HelloTransition.__name__ = ["examples","HelloTransition"];
examples.HelloTransition.__super__ = Example;
for(var k in Example.prototype ) examples.HelloTransition.prototype[k] = Example.prototype[k];
examples.HelloTransition.prototype.transform = null;
examples.HelloTransition.prototype.runExample = function() {
	$s.push("examples.HelloTransition::runExample");
	var $spos = $s.length;
	var container = this.container;
	var width = this.stageWidth() + "px";
	this.transform = function() {
		$s.push("examples.HelloTransition::runExample@22");
		var $spos = $s.length;
		container.append("div");
		container.select("div").style("width").string("0px").style("background-color").string("steelblue").text().string("hello").transition().ease($closure(thx.math.Equations,"bounce")).duration(null,2000).style("width").string(width).style("background-color").color("brown");
		$s.pop();
	};
	this.transform();
	js.Lib.window.addEventListener("keypress",this.transform,false);
	$s.pop();
}
examples.HelloTransition.prototype.destroyExample = function() {
	$s.push("examples.HelloTransition::destroyExample");
	var $spos = $s.length;
	js.Lib.window.removeEventListener("keypress",this.transform,false);
	$s.pop();
}
examples.HelloTransition.prototype.description = function() {
	$s.push("examples.HelloTransition::description");
	var $spos = $s.length;
	$s.pop();
	return "Bounce transition over the width of a Html DIV element and its background color. Press any key to bounce again.";
	$s.pop();
}
examples.HelloTransition.prototype.__class__ = examples.HelloTransition;
thx.js.Access = function(selection) {
	if( selection === $_ ) return;
	$s.push("thx.js.Access::new");
	var $spos = $s.length;
	this.selection = selection;
	$s.pop();
}
thx.js.Access.__name__ = ["thx","js","Access"];
thx.js.Access.getData = function(d) {
	$s.push("thx.js.Access::getData");
	var $spos = $s.length;
	var $tmp = Reflect.field(d,"__data__");
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.Access.setData = function(d,v) {
	$s.push("thx.js.Access::setData");
	var $spos = $s.length;
	d["__data__"] = v;
	$s.pop();
}
thx.js.Access.emptyHtmlDom = function(v) {
	$s.push("thx.js.Access::emptyHtmlDom");
	var $spos = $s.length;
	var $tmp = { __data__ : v};
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.Access.eventName = function(event) {
	$s.push("thx.js.Access::eventName");
	var $spos = $s.length;
	var $tmp = "__on" + event;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.Access.getEvent = function(d,event) {
	$s.push("thx.js.Access::getEvent");
	var $spos = $s.length;
	var $tmp = Reflect.field(d,"__on" + event);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.Access.hasEvent = function(d,event) {
	$s.push("thx.js.Access::hasEvent");
	var $spos = $s.length;
	var $tmp = null != Reflect.field(d,"__on" + event);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.Access.addEvent = function(d,event,listener) {
	$s.push("thx.js.Access::addEvent");
	var $spos = $s.length;
	d["__on" + event] = listener;
	$s.pop();
}
thx.js.Access.removeEvent = function(d,event) {
	$s.push("thx.js.Access::removeEvent");
	var $spos = $s.length;
	Reflect.deleteField(d,"__on" + event);
	$s.pop();
}
thx.js.Access.setTransition = function(d,id) {
	$s.push("thx.js.Access::setTransition");
	var $spos = $s.length;
	if(Reflect.hasField(d,"__transition__")) Reflect.field(d,"__transition__").owner = id; else d["__transition__"] = { owner : id};
	$s.pop();
}
thx.js.Access.getTransition = function(d) {
	$s.push("thx.js.Access::getTransition");
	var $spos = $s.length;
	var $tmp = Reflect.field(d,"__transition__");
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.Access.resetTransition = function(d) {
	$s.push("thx.js.Access::resetTransition");
	var $spos = $s.length;
	Reflect.deleteField(d,"__transition__");
	$s.pop();
}
thx.js.Access.prototype.selection = null;
thx.js.Access.prototype._that = function() {
	$s.push("thx.js.Access::_that");
	var $spos = $s.length;
	var $tmp = this.selection;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.Access.prototype.__class__ = thx.js.Access;
thx.js.AccessClassed = function(selection) {
	if( selection === $_ ) return;
	$s.push("thx.js.AccessClassed::new");
	var $spos = $s.length;
	thx.js.Access.call(this,selection);
	$s.pop();
}
thx.js.AccessClassed.__name__ = ["thx","js","AccessClassed"];
thx.js.AccessClassed.__super__ = thx.js.Access;
for(var k in thx.js.Access.prototype ) thx.js.AccessClassed.prototype[k] = thx.js.Access.prototype[k];
thx.js.AccessClassed.prototype.remove = function(v) {
	$s.push("thx.js.AccessClassed::remove");
	var $spos = $s.length;
	this.selection.eachNode(function(node,i) {
		$s.push("thx.js.AccessClassed::remove@20");
		var $spos = $s.length;
		node.className = node.className.split(v).map(function(d,i1) {
			$s.push("thx.js.AccessClassed::remove@20@21");
			var $spos = $s.length;
			var $tmp = StringTools.trim(d);
			$s.pop();
			return $tmp;
			$s.pop();
		}).join(" ");
		$s.pop();
	});
	var $tmp = this.selection;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessClassed.prototype.add = function(v) {
	$s.push("thx.js.AccessClassed::add");
	var $spos = $s.length;
	this.selection.eachNode(function(node,i) {
		$s.push("thx.js.AccessClassed::add@28");
		var $spos = $s.length;
		var cls = node.className;
		if(cls.indexOf(v) >= 0) {
			$s.pop();
			return;
		}
		node.className += (node.className.length > 0?" ":"") + v;
		$s.pop();
	});
	var $tmp = this.selection;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessClassed.prototype.__class__ = thx.js.AccessClassed;
thx.js.AccessDataClassed = function(selection) {
	if( selection === $_ ) return;
	$s.push("thx.js.AccessDataClassed::new");
	var $spos = $s.length;
	thx.js.AccessClassed.call(this,selection);
	$s.pop();
}
thx.js.AccessDataClassed.__name__ = ["thx","js","AccessDataClassed"];
thx.js.AccessDataClassed.__super__ = thx.js.AccessClassed;
for(var k in thx.js.AccessClassed.prototype ) thx.js.AccessDataClassed.prototype[k] = thx.js.AccessClassed.prototype[k];
thx.js.AccessDataClassed.prototype.__class__ = thx.js.AccessDataClassed;
if(!thx.js.behavior) thx.js.behavior = {}
thx.js.behavior.ZoomEvent = function(scale,tx,ty) {
	if( scale === $_ ) return;
	$s.push("thx.js.behavior.ZoomEvent::new");
	var $spos = $s.length;
	this.scale = scale;
	this.tx = tx;
	this.ty = ty;
	$s.pop();
}
thx.js.behavior.ZoomEvent.__name__ = ["thx","js","behavior","ZoomEvent"];
thx.js.behavior.ZoomEvent.prototype.scale = null;
thx.js.behavior.ZoomEvent.prototype.tx = null;
thx.js.behavior.ZoomEvent.prototype.ty = null;
thx.js.behavior.ZoomEvent.prototype.toString = function() {
	$s.push("thx.js.behavior.ZoomEvent::toString");
	var $spos = $s.length;
	var $tmp = "ZoomEvent {scale: " + this.scale + ", tx: " + this.tx + ", ty: " + this.ty + "}";
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.behavior.ZoomEvent.prototype.__class__ = thx.js.behavior.ZoomEvent;
EReg = function(r,opt) {
	if( r === $_ ) return;
	$s.push("EReg::new");
	var $spos = $s.length;
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
	$s.pop();
}
EReg.__name__ = ["EReg"];
EReg.prototype.r = null;
EReg.prototype.match = function(s) {
	$s.push("EReg::match");
	var $spos = $s.length;
	this.r.m = this.r.exec(s);
	this.r.s = s;
	this.r.l = RegExp.leftContext;
	this.r.r = RegExp.rightContext;
	var $tmp = this.r.m != null;
	$s.pop();
	return $tmp;
	$s.pop();
}
EReg.prototype.matched = function(n) {
	$s.push("EReg::matched");
	var $spos = $s.length;
	var $tmp = this.r.m != null && n >= 0 && n < this.r.m.length?this.r.m[n]:(function($this) {
		var $r;
		throw "EReg::matched";
		return $r;
	}(this));
	$s.pop();
	return $tmp;
	$s.pop();
}
EReg.prototype.matchedLeft = function() {
	$s.push("EReg::matchedLeft");
	var $spos = $s.length;
	if(this.r.m == null) throw "No string matched";
	if(this.r.l == null) {
		var $tmp = this.r.s.substr(0,this.r.m.index);
		$s.pop();
		return $tmp;
	}
	var $tmp = this.r.l;
	$s.pop();
	return $tmp;
	$s.pop();
}
EReg.prototype.matchedRight = function() {
	$s.push("EReg::matchedRight");
	var $spos = $s.length;
	if(this.r.m == null) throw "No string matched";
	if(this.r.r == null) {
		var sz = this.r.m.index + this.r.m[0].length;
		var $tmp = this.r.s.substr(sz,this.r.s.length - sz);
		$s.pop();
		return $tmp;
	}
	var $tmp = this.r.r;
	$s.pop();
	return $tmp;
	$s.pop();
}
EReg.prototype.matchedPos = function() {
	$s.push("EReg::matchedPos");
	var $spos = $s.length;
	if(this.r.m == null) throw "No string matched";
	var $tmp = { pos : this.r.m.index, len : this.r.m[0].length};
	$s.pop();
	return $tmp;
	$s.pop();
}
EReg.prototype.split = function(s) {
	$s.push("EReg::split");
	var $spos = $s.length;
	var d = "#__delim__#";
	var $tmp = s.replace(this.r,d).split(d);
	$s.pop();
	return $tmp;
	$s.pop();
}
EReg.prototype.replace = function(s,by) {
	$s.push("EReg::replace");
	var $spos = $s.length;
	var $tmp = s.replace(this.r,by);
	$s.pop();
	return $tmp;
	$s.pop();
}
EReg.prototype.customReplace = function(s,f) {
	$s.push("EReg::customReplace");
	var $spos = $s.length;
	var buf = new StringBuf();
	while(true) {
		if(!this.match(s)) break;
		buf.b[buf.b.length] = this.matchedLeft();
		buf.b[buf.b.length] = f(this);
		s = this.matchedRight();
	}
	buf.b[buf.b.length] = s;
	var $tmp = buf.b.join("");
	$s.pop();
	return $tmp;
	$s.pop();
}
EReg.prototype.__class__ = EReg;
if(typeof js=='undefined') js = {}
js.Lib = function() { }
js.Lib.__name__ = ["js","Lib"];
js.Lib.isIE = null;
js.Lib.isOpera = null;
js.Lib.document = null;
js.Lib.window = null;
js.Lib.alert = function(v) {
	$s.push("js.Lib::alert");
	var $spos = $s.length;
	alert(js.Boot.__string_rec(v,""));
	$s.pop();
}
js.Lib.eval = function(code) {
	$s.push("js.Lib::eval");
	var $spos = $s.length;
	var $tmp = eval(code);
	$s.pop();
	return $tmp;
	$s.pop();
}
js.Lib.setErrorHandler = function(f) {
	$s.push("js.Lib::setErrorHandler");
	var $spos = $s.length;
	js.Lib.onerror = f;
	$s.pop();
}
js.Lib.prototype.__class__ = js.Lib;
thx.js.Svg = function() { }
thx.js.Svg.__name__ = ["thx","js","Svg"];
thx.js.Svg.mouse = function(dom) {
	$s.push("thx.js.Svg::mouse");
	var $spos = $s.length;
	var point = (null != dom.ownerSVGElement?dom.ownerSVGElement:dom).createSVGPoint();
	if(thx.js.Svg._usepage && (js.Lib.window.scrollX || js.Lib.window.scrollY)) {
		var svg = thx.js.Dom.selectNode(js.Lib.document.body).append("svg:svg").style("position").string("absolute").style("top")["float"](0).style("left")["float"](0);
		var ctm = svg.node().dom.getScreenCTM();
		thx.js.Svg._usepage = !(ctm.f || ctm.e);
		svg.remove();
	}
	if(thx.js.Svg._usepage) {
		point.x = thx.js.Dom.event.pageX;
		point.y = thx.js.Dom.event.pageY;
	} else {
		point.x = thx.js.Dom.event.clientX;
		point.y = thx.js.Dom.event.clientY;
	}
	point = point.matrixTransform(dom.getScreenCTM().inverse());
	var $tmp = [point.x,point.y];
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.Svg.prototype.__class__ = thx.js.Svg;
if(!thx.svg) thx.svg = {}
thx.svg.LineInterpolator = { __ename__ : ["thx","svg","LineInterpolator"], __constructs__ : ["Linear","StepBefore","StepAfter","Basis","BasisClosed","Cardinal","CardinalClosed"] }
thx.svg.LineInterpolator.Linear = ["Linear",0];
thx.svg.LineInterpolator.Linear.toString = $estr;
thx.svg.LineInterpolator.Linear.__enum__ = thx.svg.LineInterpolator;
thx.svg.LineInterpolator.StepBefore = ["StepBefore",1];
thx.svg.LineInterpolator.StepBefore.toString = $estr;
thx.svg.LineInterpolator.StepBefore.__enum__ = thx.svg.LineInterpolator;
thx.svg.LineInterpolator.StepAfter = ["StepAfter",2];
thx.svg.LineInterpolator.StepAfter.toString = $estr;
thx.svg.LineInterpolator.StepAfter.__enum__ = thx.svg.LineInterpolator;
thx.svg.LineInterpolator.Basis = ["Basis",3];
thx.svg.LineInterpolator.Basis.toString = $estr;
thx.svg.LineInterpolator.Basis.__enum__ = thx.svg.LineInterpolator;
thx.svg.LineInterpolator.BasisClosed = ["BasisClosed",4];
thx.svg.LineInterpolator.BasisClosed.toString = $estr;
thx.svg.LineInterpolator.BasisClosed.__enum__ = thx.svg.LineInterpolator;
thx.svg.LineInterpolator.Cardinal = function(tension) { var $x = ["Cardinal",5,tension]; $x.__enum__ = thx.svg.LineInterpolator; $x.toString = $estr; return $x; }
thx.svg.LineInterpolator.CardinalClosed = function(tension) { var $x = ["CardinalClosed",6,tension]; $x.__enum__ = thx.svg.LineInterpolator; $x.toString = $estr; return $x; }
thx.js.AccessStyle = function(name,selection) {
	if( name === $_ ) return;
	$s.push("thx.js.AccessStyle::new");
	var $spos = $s.length;
	thx.js.Access.call(this,selection);
	this.name = name;
	$s.pop();
}
thx.js.AccessStyle.__name__ = ["thx","js","AccessStyle"];
thx.js.AccessStyle.__super__ = thx.js.Access;
for(var k in thx.js.Access.prototype ) thx.js.AccessStyle.prototype[k] = thx.js.Access.prototype[k];
thx.js.AccessStyle.prototype.name = null;
thx.js.AccessStyle.prototype.get = function() {
	$s.push("thx.js.AccessStyle::get");
	var $spos = $s.length;
	var n = this.name;
	var $tmp = this.selection.firstNode(function(node) {
		$s.push("thx.js.AccessStyle::get@21");
		var $spos = $s.length;
		var $tmp = js.Lib.window.getComputedStyle(node,null).getPropertyValue(n);
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessStyle.prototype.remove = function() {
	$s.push("thx.js.AccessStyle::remove");
	var $spos = $s.length;
	var n = this.name;
	this.selection.eachNode(function(node,i) {
		$s.push("thx.js.AccessStyle::remove@27");
		var $spos = $s.length;
		node.style.removeProperty(n);
		$s.pop();
	});
	var $tmp = this.selection;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessStyle.prototype.string = function(v,priority) {
	$s.push("thx.js.AccessStyle::string");
	var $spos = $s.length;
	var n = this.name;
	if(null == priority) priority = null;
	this.selection.eachNode(function(node,i) {
		$s.push("thx.js.AccessStyle::string@35");
		var $spos = $s.length;
		node.style.setProperty(n,v,priority);
		$s.pop();
	});
	var $tmp = this.selection;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessStyle.prototype["float"] = function(v,priority) {
	$s.push("thx.js.AccessStyle::float");
	var $spos = $s.length;
	var s = "" + v, n = this.name;
	if(null == priority) priority = null;
	this.selection.eachNode(function(node,i) {
		$s.push("thx.js.AccessStyle::float@44");
		var $spos = $s.length;
		node.style.setProperty(n,s,priority);
		$s.pop();
	});
	var $tmp = this.selection;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessStyle.prototype.__class__ = thx.js.AccessStyle;
thx.js.AccessDataStyle = function(name,selection) {
	if( name === $_ ) return;
	$s.push("thx.js.AccessDataStyle::new");
	var $spos = $s.length;
	thx.js.AccessStyle.call(this,name,selection);
	$s.pop();
}
thx.js.AccessDataStyle.__name__ = ["thx","js","AccessDataStyle"];
thx.js.AccessDataStyle.__super__ = thx.js.AccessStyle;
for(var k in thx.js.AccessStyle.prototype ) thx.js.AccessDataStyle.prototype[k] = thx.js.AccessStyle.prototype[k];
thx.js.AccessDataStyle.prototype.stringf = function(v,priority) {
	$s.push("thx.js.AccessDataStyle::stringf");
	var $spos = $s.length;
	var n = this.name;
	if(null == priority) priority = null;
	this.selection.eachNode(function(node,i) {
		$s.push("thx.js.AccessDataStyle::stringf@61");
		var $spos = $s.length;
		var s = v(Reflect.field(node,"__data__"),i);
		if(s == null) node.style.removeProperty(n); else node.style.setProperty(n,s,priority);
		$s.pop();
	});
	var $tmp = this.selection;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessDataStyle.prototype.floatf = function(v,priority) {
	$s.push("thx.js.AccessDataStyle::floatf");
	var $spos = $s.length;
	var n = this.name;
	if(null == priority) priority = null;
	this.selection.eachNode(function(node,i) {
		$s.push("thx.js.AccessDataStyle::floatf@75");
		var $spos = $s.length;
		var s = v(Reflect.field(node,"__data__"),i);
		if(s == null) node.style.removeProperty(n); else node.style.setProperty(n,"" + s,priority);
		$s.pop();
	});
	var $tmp = this.selection;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessDataStyle.prototype.data = function() {
	$s.push("thx.js.AccessDataStyle::data");
	var $spos = $s.length;
	var $tmp = this.stringf(function(d,_) {
		$s.push("thx.js.AccessDataStyle::data@87");
		var $spos = $s.length;
		var $tmp = "" + d;
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessDataStyle.prototype.__class__ = thx.js.AccessDataStyle;
Ints = function() { }
Ints.__name__ = ["Ints"];
Ints.range = function(start,stop,step) {
	$s.push("Ints::range");
	var $spos = $s.length;
	if(step == null) step = 1;
	if(null == stop) {
		stop = start;
		start = 0;
	}
	if((stop - start) / step == Math.POSITIVE_INFINITY) throw new thx.error.Error("infinite range",null,null,{ fileName : "Ints.hx", lineNumber : 19, className : "Ints", methodName : "range"});
	var range = [], i = -1, j;
	if(step < 0) while((j = start + step * ++i) > stop) range.push(j); else while((j = start + step * ++i) < stop) range.push(j);
	$s.pop();
	return range;
	$s.pop();
}
Ints.sign = function(v) {
	$s.push("Ints::sign");
	var $spos = $s.length;
	var $tmp = v < 0?-1:1;
	$s.pop();
	return $tmp;
	$s.pop();
}
Ints.abs = function(a) {
	$s.push("Ints::abs");
	var $spos = $s.length;
	var $tmp = a < 0?-a:a;
	$s.pop();
	return $tmp;
	$s.pop();
}
Ints.min = function(a,b) {
	$s.push("Ints::min");
	var $spos = $s.length;
	var $tmp = a < b?a:b;
	$s.pop();
	return $tmp;
	$s.pop();
}
Ints.max = function(a,b) {
	$s.push("Ints::max");
	var $spos = $s.length;
	var $tmp = a > b?a:b;
	$s.pop();
	return $tmp;
	$s.pop();
}
Ints.wrap = function(v,min,max) {
	$s.push("Ints::wrap");
	var $spos = $s.length;
	var $tmp = Math.round(Floats.wrap(v,min,max));
	$s.pop();
	return $tmp;
	$s.pop();
}
Ints.clamp = function(v,min,max) {
	$s.push("Ints::clamp");
	var $spos = $s.length;
	if(v < min) {
		$s.pop();
		return min;
	} else if(v > max) {
		$s.pop();
		return max;
	} else {
		$s.pop();
		return v;
	}
	$s.pop();
}
Ints.clampSym = function(v,max) {
	$s.push("Ints::clampSym");
	var $spos = $s.length;
	if(v < -max) {
		var $tmp = -max;
		$s.pop();
		return $tmp;
	} else if(v > max) {
		$s.pop();
		return max;
	} else {
		$s.pop();
		return v;
	}
	$s.pop();
}
Ints.interpolate = function(f,min,max,interpolator) {
	$s.push("Ints::interpolate");
	var $spos = $s.length;
	if(max == null) max = 100.0;
	if(min == null) min = 0.0;
	if(null == interpolator) interpolator = $closure(thx.math.Equations,"linear");
	var $tmp = Math.round(min + interpolator(f) * (max - min));
	$s.pop();
	return $tmp;
	$s.pop();
}
Ints.interpolatef = function(min,max,interpolator) {
	$s.push("Ints::interpolatef");
	var $spos = $s.length;
	if(max == null) max = 1.0;
	if(min == null) min = 0.0;
	if(null == interpolator) interpolator = $closure(thx.math.Equations,"linear");
	var d = max - min;
	var $tmp = function(f) {
		$s.push("Ints::interpolatef@85");
		var $spos = $s.length;
		var $tmp = Math.round(min + interpolator(f) * d);
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
Ints.ascending = function(a,b) {
	$s.push("Ints::ascending");
	var $spos = $s.length;
	var $tmp = a < b?-1:a > b?1:0;
	$s.pop();
	return $tmp;
	$s.pop();
}
Ints.descending = function(a,b) {
	$s.push("Ints::descending");
	var $spos = $s.length;
	var $tmp = a > b?-1:a < b?1:0;
	$s.pop();
	return $tmp;
	$s.pop();
}
Ints.format = function(v,param,params,culture) {
	$s.push("Ints::format");
	var $spos = $s.length;
	var $tmp = (Ints.formatf(param,params,culture))(v);
	$s.pop();
	return $tmp;
	$s.pop();
}
Ints.formatf = function(param,params,culture) {
	$s.push("Ints::formatf");
	var $spos = $s.length;
	var $tmp = Floats.formatf(null,thx.culture.FormatParams.params(param,params,"I"),culture);
	$s.pop();
	return $tmp;
	$s.pop();
}
Ints.prototype.__class__ = Ints;
Dynamics = function() { }
Dynamics.__name__ = ["Dynamics"];
Dynamics.format = function(v,param,params,nullstring,culture) {
	$s.push("Dynamics::format");
	var $spos = $s.length;
	var $tmp = (Dynamics.formatf(param,params,nullstring,culture))(v);
	$s.pop();
	return $tmp;
	$s.pop();
}
Dynamics.formatf = function(param,params,nullstring,culture) {
	$s.push("Dynamics::formatf");
	var $spos = $s.length;
	if(nullstring == null) nullstring = "null";
	var $tmp = function(v) {
		$s.push("Dynamics::formatf@18");
		var $spos = $s.length;
		var $e = (Type["typeof"](v));
		switch( $e[1] ) {
		case 0:
			$s.pop();
			return nullstring;
		case 1:
			var $tmp = Ints.format(v,param,params,culture);
			$s.pop();
			return $tmp;
		case 2:
			var $tmp = Floats.format(v,param,params,culture);
			$s.pop();
			return $tmp;
		case 3:
			var $tmp = Bools.format(v,param,params,culture);
			$s.pop();
			return $tmp;
		case 6:
			var c = $e[2];
			if(c == String) {
				var $tmp = Strings.formatOne(v,param,params,culture);
				$s.pop();
				return $tmp;
			} else if(c == Array) {
				var $tmp = Arrays.format(v,param,params,culture);
				$s.pop();
				return $tmp;
			} else if(c == Date) {
				var $tmp = Dates.format(v,param,params,culture);
				$s.pop();
				return $tmp;
			} else {
				var $tmp = Std.string(v);
				$s.pop();
				return $tmp;
			}
			break;
		default:
			var $tmp = (function($this) {
				var $r;
				throw new thx.error.Error("Unsupported type format: {0}",null,Type["typeof"](v),{ fileName : "Dynamics.hx", lineNumber : 40, className : "Dynamics", methodName : "formatf"});
				return $r;
			}(this));
			$s.pop();
			return $tmp;
		}
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
Dynamics.interpolate = function(v,a,b,interpolator) {
	$s.push("Dynamics::interpolate");
	var $spos = $s.length;
	var $tmp = (Dynamics.interpolatef(a,b,interpolator))(v);
	$s.pop();
	return $tmp;
	$s.pop();
}
Dynamics.interpolatef = function(a,b,interpolator) {
	$s.push("Dynamics::interpolatef");
	var $spos = $s.length;
	var ta = Type["typeof"](a);
	if(!Type.enumEq(ta,Type["typeof"](b))) throw new thx.error.Error("arguments a {0} and b {0} differ in types",[ta,Type["typeof"](b)],null,{ fileName : "Dynamics.hx", lineNumber : 54, className : "Dynamics", methodName : "interpolatef"});
	var $e = (ta);
	switch( $e[1] ) {
	case 0:
		var $tmp = function(_) {
			$s.push("Dynamics::interpolatef@57");
			var $spos = $s.length;
			$s.pop();
			return null;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	case 1:
		var $tmp = Ints.interpolatef(a,b,interpolator);
		$s.pop();
		return $tmp;
	case 2:
		var $tmp = Floats.interpolatef(a,b,interpolator);
		$s.pop();
		return $tmp;
	case 3:
		var $tmp = Bools.interpolatef(a,b,interpolator);
		$s.pop();
		return $tmp;
	case 4:
		var $tmp = Dynamics.interpolatef(a,b,interpolator);
		$s.pop();
		return $tmp;
	case 6:
		var c = $e[2];
		var name = Type.getClassName(c);
		switch(name) {
		case "String":
			var $tmp = Strings.interpolatef(a,b,interpolator);
			$s.pop();
			return $tmp;
		case "Date":
			var $tmp = Dates.interpolatef(a,b,interpolator);
			$s.pop();
			return $tmp;
		default:
			throw new thx.error.Error("cannot interpolate on instances of {0}",null,name,{ fileName : "Dynamics.hx", lineNumber : 68, className : "Dynamics", methodName : "interpolatef"});
		}
		break;
	default:
		throw new thx.error.Error("cannot interpolate on functions/enums/unknown",null,null,{ fileName : "Dynamics.hx", lineNumber : 70, className : "Dynamics", methodName : "interpolatef"});
	}
	$s.pop();
}
Dynamics.prototype.__class__ = Dynamics;
thx.math.EaseMode = { __ename__ : ["thx","math","EaseMode"], __constructs__ : ["EaseIn","EaseOut","EaseInEaseOut","EaseOutEaseIn"] }
thx.math.EaseMode.EaseIn = ["EaseIn",0];
thx.math.EaseMode.EaseIn.toString = $estr;
thx.math.EaseMode.EaseIn.__enum__ = thx.math.EaseMode;
thx.math.EaseMode.EaseOut = ["EaseOut",1];
thx.math.EaseMode.EaseOut.toString = $estr;
thx.math.EaseMode.EaseOut.__enum__ = thx.math.EaseMode;
thx.math.EaseMode.EaseInEaseOut = ["EaseInEaseOut",2];
thx.math.EaseMode.EaseInEaseOut.toString = $estr;
thx.math.EaseMode.EaseInEaseOut.__enum__ = thx.math.EaseMode;
thx.math.EaseMode.EaseOutEaseIn = ["EaseOutEaseIn",3];
thx.math.EaseMode.EaseOutEaseIn.toString = $estr;
thx.math.EaseMode.EaseOutEaseIn.__enum__ = thx.math.EaseMode;
examples.TransitionEquations = function(cid) {
	if( cid === $_ ) return;
	$s.push("examples.TransitionEquations::new");
	var $spos = $s.length;
	Example.call(this,cid);
	$s.pop();
}
examples.TransitionEquations.__name__ = ["examples","TransitionEquations"];
examples.TransitionEquations.__super__ = Example;
for(var k in Example.prototype ) examples.TransitionEquations.prototype[k] = Example.prototype[k];
examples.TransitionEquations.next = function() {
	$s.push("examples.TransitionEquations::next");
	var $spos = $s.length;
	examples.TransitionEquations.current++;
	if(examples.TransitionEquations.current == examples.TransitionEquations.transitions.length) examples.TransitionEquations.current = 0;
	var $tmp = examples.TransitionEquations.transitions[examples.TransitionEquations.current];
	$s.pop();
	return $tmp;
	$s.pop();
}
examples.TransitionEquations.prototype.activeTransitions = null;
examples.TransitionEquations.prototype.end = function() {
	$s.push("examples.TransitionEquations::end");
	var $spos = $s.length;
	if(this.container.select(".label").empty()) {
		$s.pop();
		return;
	}
	this.runTransition();
	$s.pop();
}
examples.TransitionEquations.prototype.runTransition = function() {
	$s.push("examples.TransitionEquations::runTransition");
	var $spos = $s.length;
	var width = this.stageWidth() + "px";
	var end = $closure(this,"end");
	var ease = examples.TransitionEquations.next();
	var activeTransitions = this.activeTransitions = [];
	this.container.select(".label").text().string(Strings.humanize(Std.string(ease)));
	this.container.selectAll("div.flying").eachNode(function(n,i) {
		$s.push("examples.TransitionEquations::runTransition@47");
		var $spos = $s.length;
		var f = Reflect.field(n,"__data__").f;
		var t = thx.js.Dom.selectNode(n).transition().delay(null,0).duration(null,2500).ease(f,ease).style("left").string(examples.TransitionEquations.current % 2 == 0?width:"5px");
		activeTransitions.push(t);
		if(i == 0) t.endNode(function(_,_1) {
			$s.push("examples.TransitionEquations::runTransition@47@57");
			var $spos = $s.length;
			haxe.Timer.delay(end,500);
			$s.pop();
		});
		$s.pop();
	});
	$s.pop();
}
examples.TransitionEquations.prototype.runExample = function() {
	$s.push("examples.TransitionEquations::runExample");
	var $spos = $s.length;
	var equations = [{ n : "back", f : thx.math.Equations.backf()},{ n : "bounce", f : $closure(thx.math.Equations,"bounce")},{ n : "circle", f : $closure(thx.math.Equations,"circle")},{ n : "elastic", f : thx.math.Equations.elasticf()},{ n : "exponential", f : $closure(thx.math.Equations,"exponential")},{ n : "linear", f : $closure(thx.math.Equations,"linear")},{ n : "quadratic", f : $closure(thx.math.Equations,"quadratic")},{ n : "cubic", f : $closure(thx.math.Equations,"cubic")}];
	var color = thx.color.Colors.interpolatef("aquamarine","beige");
	this.container.append("div").attr("class").string("label");
	this.container.selectAll("div.flying").data(equations).enter().append("div").attr("class").string("flying").text().stringf(function(d,i) {
		$s.push("examples.TransitionEquations::runExample@87");
		var $spos = $s.length;
		var $tmp = d.n;
		$s.pop();
		return $tmp;
		$s.pop();
	}).style("position").string("absolute").style("left").string("5px").style("top").stringf(function(d,i) {
		$s.push("examples.TransitionEquations::runExample@90");
		var $spos = $s.length;
		var $tmp = i * 40 + 30 + "px";
		$s.pop();
		return $tmp;
		$s.pop();
	}).style("background-color").stringf(function(d,i) {
		$s.push("examples.TransitionEquations::runExample@91");
		var $spos = $s.length;
		var $tmp = color(i / equations.length);
		$s.pop();
		return $tmp;
		$s.pop();
	});
	this.runTransition();
	$s.pop();
}
examples.TransitionEquations.prototype.destroyExample = function() {
	$s.push("examples.TransitionEquations::destroyExample");
	var $spos = $s.length;
	this.activeTransitions.forEach(function(t,_) {
		$s.push("examples.TransitionEquations::destroyExample@102");
		var $spos = $s.length;
		t.stop();
		$s.pop();
	});
	$s.pop();
}
examples.TransitionEquations.prototype.description = function() {
	$s.push("examples.TransitionEquations::description");
	var $spos = $s.length;
	$s.pop();
	return "Transition equations. Displays the effects of several equation over the transition from 2 points. Not interactive.";
	$s.pop();
}
examples.TransitionEquations.prototype.__class__ = examples.TransitionEquations;
thx.color.Cmyk = function(cyan,magenta,yellow,black) {
	if( cyan === $_ ) return;
	$s.push("thx.color.Cmyk::new");
	var $spos = $s.length;
	thx.color.Rgb.call(this,Ints.interpolate(Floats.normalize(1 - cyan - black),0,255,null),Ints.interpolate(Floats.normalize(1 - magenta - black),0,255,null),Ints.interpolate(Floats.normalize(1 - yellow - black),0,255,null));
	this.cyan = Floats.normalize(cyan);
	this.magenta = Floats.normalize(magenta);
	this.yellow = Floats.normalize(yellow);
	this.black = Floats.normalize(black);
	$s.pop();
}
thx.color.Cmyk.__name__ = ["thx","color","Cmyk"];
thx.color.Cmyk.__super__ = thx.color.Rgb;
for(var k in thx.color.Rgb.prototype ) thx.color.Cmyk.prototype[k] = thx.color.Rgb.prototype[k];
thx.color.Cmyk.toCmyk = function(rgb) {
	$s.push("thx.color.Cmyk::toCmyk");
	var $spos = $s.length;
	var c = 0.0, y = 0.0, m = 0.0, k;
	if(rgb.red + rgb.blue + rgb.green == 0) k = 1.0; else {
		c = 1 - rgb.red / 255;
		m = 1 - rgb.green / 255;
		y = 1 - rgb.blue / 255;
		k = Floats.min(c < m?c:m,y);
		c = (c - k) / (1 - k);
		m = (m - k) / (1 - k);
		y = (y - k) / (1 - k);
	}
	var $tmp = new thx.color.Cmyk(c,m,y,k);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.color.Cmyk.equals = function(a,b) {
	$s.push("thx.color.Cmyk::equals");
	var $spos = $s.length;
	var $tmp = a.black == b.black && a.cyan == b.cyan && a.magenta == b.magenta && a.yellow == b.yellow;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.color.Cmyk.darker = function(color,t,interpolator) {
	$s.push("thx.color.Cmyk::darker");
	var $spos = $s.length;
	var v = t * color.black;
	var $tmp = new thx.color.Cmyk(color.cyan,color.magenta,color.yellow,null == interpolator?v:interpolator(v,0,1));
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.color.Cmyk.interpolate = function(a,b,t,interpolator) {
	$s.push("thx.color.Cmyk::interpolate");
	var $spos = $s.length;
	var $tmp = new thx.color.Cmyk(Floats.interpolate(t,a.cyan,b.cyan,interpolator),Floats.interpolate(t,a.magenta,b.magenta,interpolator),Floats.interpolate(t,a.yellow,b.yellow,interpolator),Floats.interpolate(t,a.black,b.black,interpolator));
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.color.Cmyk.prototype.black = null;
thx.color.Cmyk.prototype.cyan = null;
thx.color.Cmyk.prototype.magenta = null;
thx.color.Cmyk.prototype.yellow = null;
thx.color.Cmyk.prototype.toCmykString = function() {
	$s.push("thx.color.Cmyk::toCmykString");
	var $spos = $s.length;
	var $tmp = "cmyk(" + this.cyan + "," + this.magenta + "," + this.yellow + "," + this.black + ")";
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.color.Cmyk.prototype.__class__ = thx.color.Cmyk;
thx.js.AccessAttribute = function(name,selection) {
	if( name === $_ ) return;
	$s.push("thx.js.AccessAttribute::new");
	var $spos = $s.length;
	thx.js.Access.call(this,selection);
	this.name = name;
	this.qname = thx.xml.Namespace.qualify(name);
	$s.pop();
}
thx.js.AccessAttribute.__name__ = ["thx","js","AccessAttribute"];
thx.js.AccessAttribute.__super__ = thx.js.Access;
for(var k in thx.js.Access.prototype ) thx.js.AccessAttribute.prototype[k] = thx.js.Access.prototype[k];
thx.js.AccessAttribute.prototype.name = null;
thx.js.AccessAttribute.prototype.qname = null;
thx.js.AccessAttribute.prototype.get = function() {
	$s.push("thx.js.AccessAttribute::get");
	var $spos = $s.length;
	var n = this.name, q = this.qname;
	var $tmp = this.selection.firstNode(function(node) {
		$s.push("thx.js.AccessAttribute::get@25");
		var $spos = $s.length;
		var $tmp = q == null?node.getAttribute(n):node.getAttributeNS(q.space,q.local);
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessAttribute.prototype.remove = function() {
	$s.push("thx.js.AccessAttribute::remove");
	var $spos = $s.length;
	if(null == this.qname) {
		var n = this.name;
		this.selection.eachNode(function(node,i) {
			$s.push("thx.js.AccessAttribute::remove@32");
			var $spos = $s.length;
			node.removeAttribute(n);
			$s.pop();
		});
	} else {
		var q = this.qname;
		this.selection.eachNode(function(node,i) {
			$s.push("thx.js.AccessAttribute::remove@35");
			var $spos = $s.length;
			node.removeAttributeNS(q.space,q.local);
			$s.pop();
		});
	}
	var $tmp = this.selection;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessAttribute.prototype.string = function(v) {
	$s.push("thx.js.AccessAttribute::string");
	var $spos = $s.length;
	if(null == this.qname) {
		var n = this.name;
		this.selection.eachNode(function(node,i) {
			$s.push("thx.js.AccessAttribute::string@44");
			var $spos = $s.length;
			node.setAttribute(n,v);
			$s.pop();
		});
	} else {
		var q = this.qname;
		this.selection.eachNode(function(node,i) {
			$s.push("thx.js.AccessAttribute::string@47");
			var $spos = $s.length;
			node.setAttributeNS(q.space,q.local,v);
			$s.pop();
		});
	}
	var $tmp = this.selection;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessAttribute.prototype["float"] = function(v) {
	$s.push("thx.js.AccessAttribute::float");
	var $spos = $s.length;
	var s = "" + v;
	if(null == this.qname) {
		var n = this.name;
		this.selection.eachNode(function(node,i) {
			$s.push("thx.js.AccessAttribute::float@57");
			var $spos = $s.length;
			node.setAttribute(n,s);
			$s.pop();
		});
	} else {
		var q = this.qname;
		this.selection.eachNode(function(node,i) {
			$s.push("thx.js.AccessAttribute::float@60");
			var $spos = $s.length;
			node.setAttributeNS(q.space,q.local,s);
			$s.pop();
		});
	}
	var $tmp = this.selection;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessAttribute.prototype.__class__ = thx.js.AccessAttribute;
thx.js.AccessDataAttribute = function(name,selection) {
	if( name === $_ ) return;
	$s.push("thx.js.AccessDataAttribute::new");
	var $spos = $s.length;
	thx.js.AccessAttribute.call(this,name,selection);
	$s.pop();
}
thx.js.AccessDataAttribute.__name__ = ["thx","js","AccessDataAttribute"];
thx.js.AccessDataAttribute.__super__ = thx.js.AccessAttribute;
for(var k in thx.js.AccessAttribute.prototype ) thx.js.AccessDataAttribute.prototype[k] = thx.js.AccessAttribute.prototype[k];
thx.js.AccessDataAttribute.prototype.stringf = function(v) {
	$s.push("thx.js.AccessDataAttribute::stringf");
	var $spos = $s.length;
	if(null == this.qname) {
		var n = this.name;
		this.selection.eachNode(function(node,i) {
			$s.push("thx.js.AccessDataAttribute::stringf@78");
			var $spos = $s.length;
			var s = v(Reflect.field(node,"__data__"),i);
			if(null == s) node.removeAttribute(n); else node.setAttribute(n,s);
			$s.pop();
		});
	} else {
		var q = this.qname;
		this.selection.eachNode(function(node,i) {
			$s.push("thx.js.AccessDataAttribute::stringf@87");
			var $spos = $s.length;
			var s = v(Reflect.field(node,"__data__"),i);
			if(null == s) node.removeAttributeNS(n); else node.setAttributeNS(q.space,q.local,s);
			$s.pop();
		});
	}
	var $tmp = this.selection;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessDataAttribute.prototype.floatf = function(v) {
	$s.push("thx.js.AccessDataAttribute::floatf");
	var $spos = $s.length;
	if(null == this.qname) {
		var n = this.name;
		this.selection.eachNode(function(node,i) {
			$s.push("thx.js.AccessDataAttribute::floatf@102");
			var $spos = $s.length;
			var s = v(Reflect.field(node,"__data__"),i);
			if(null == s) node.removeAttribute(n); else node.setAttribute(n,"" + s);
			$s.pop();
		});
	} else {
		var q = this.qname;
		this.selection.eachNode(function(node,i) {
			$s.push("thx.js.AccessDataAttribute::floatf@111");
			var $spos = $s.length;
			var s = v(Reflect.field(node,"__data__"),i);
			if(null == s) node.removeAttributeNS(n); else node.setAttributeNS(q.space,q.local,"" + s);
			$s.pop();
		});
	}
	var $tmp = this.selection;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessDataAttribute.prototype.data = function() {
	$s.push("thx.js.AccessDataAttribute::data");
	var $spos = $s.length;
	var $tmp = this.stringf(function(d,_) {
		$s.push("thx.js.AccessDataAttribute::data@124");
		var $spos = $s.length;
		var $tmp = "" + d;
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessDataAttribute.prototype.__class__ = thx.js.AccessDataAttribute;
Iterators = function() { }
Iterators.__name__ = ["Iterators"];
Iterators.indexOf = function(it,v,f) {
	$s.push("Iterators::indexOf");
	var $spos = $s.length;
	if(null == f) f = function(v2) {
		$s.push("Iterators::indexOf@11");
		var $spos = $s.length;
		var $tmp = v == v2;
		$s.pop();
		return $tmp;
		$s.pop();
	};
	var c = 0;
	while( it.hasNext() ) {
		var i = it.next();
		if(f(i)) {
			$s.pop();
			return c;
		} else c++;
	}
	$s.pop();
	return -1;
	$s.pop();
}
Iterators.contains = function(it,v,f) {
	$s.push("Iterators::contains");
	var $spos = $s.length;
	if(null == f) f = function(v2) {
		$s.push("Iterators::contains@24");
		var $spos = $s.length;
		var $tmp = v == v2;
		$s.pop();
		return $tmp;
		$s.pop();
	};
	var c = 0;
	while( it.hasNext() ) {
		var i = it.next();
		if(f(i)) {
			$s.pop();
			return true;
		}
	}
	$s.pop();
	return false;
	$s.pop();
}
Iterators.array = function(it) {
	$s.push("Iterators::array");
	var $spos = $s.length;
	var result = [];
	while( it.hasNext() ) {
		var v = it.next();
		result.push(v);
	}
	$s.pop();
	return result;
	$s.pop();
}
Iterators.map = function(it,f) {
	$s.push("Iterators::map");
	var $spos = $s.length;
	var result = [], i = 0;
	while( it.hasNext() ) {
		var v = it.next();
		result.push(f(v,i++));
	}
	$s.pop();
	return result;
	$s.pop();
}
Iterators.each = function(it,f) {
	$s.push("Iterators::each");
	var $spos = $s.length;
	var i = 0;
	while( it.hasNext() ) {
		var o = it.next();
		f(o,i++);
	}
	$s.pop();
}
Iterators.reduce = function(it,f,initialValue) {
	$s.push("Iterators::reduce");
	var $spos = $s.length;
	var accumulator = initialValue, i = 0;
	while( it.hasNext() ) {
		var o = it.next();
		accumulator = f(accumulator,o,i++);
	}
	$s.pop();
	return accumulator;
	$s.pop();
}
Iterators.random = function(it) {
	$s.push("Iterators::random");
	var $spos = $s.length;
	var $tmp = Arrays.random(Iterators.array(it));
	$s.pop();
	return $tmp;
	$s.pop();
}
Iterators.any = function(it,f) {
	$s.push("Iterators::any");
	var $spos = $s.length;
	while( it.hasNext() ) {
		var v = it.next();
		if(f(v)) {
			$s.pop();
			return true;
		}
	}
	$s.pop();
	return false;
	$s.pop();
}
Iterators.all = function(it,f) {
	$s.push("Iterators::all");
	var $spos = $s.length;
	while( it.hasNext() ) {
		var v = it.next();
		if(!f(v)) {
			$s.pop();
			return false;
		}
	}
	$s.pop();
	return true;
	$s.pop();
}
Iterators.prototype.__class__ = Iterators;
if(!thx.culture.core) thx.culture.core = {}
thx.culture.core.DateTimeInfo = function(months,abbrMonths,days,abbrDays,shortDays,am,pm,separatorDate,separatorTime,firstWeekDay,patternYearMonth,patternMonthDay,patternDate,patternDateShort,patternDateRfc,patternDateTime,patternUniversal,patternSortable,patternTime,patternTimeShort) {
	if( months === $_ ) return;
	$s.push("thx.culture.core.DateTimeInfo::new");
	var $spos = $s.length;
	this.months = months;
	this.abbrMonths = abbrMonths;
	this.days = days;
	this.abbrDays = abbrDays;
	this.shortDays = shortDays;
	this.am = am;
	this.pm = pm;
	this.separatorDate = separatorDate;
	this.separatorTime = separatorTime;
	this.firstWeekDay = firstWeekDay;
	this.patternYearMonth = patternYearMonth;
	this.patternMonthDay = patternMonthDay;
	this.patternDate = patternDate;
	this.patternDateShort = patternDateShort;
	this.patternDateRfc = patternDateRfc;
	this.patternDateTime = patternDateTime;
	this.patternUniversal = patternUniversal;
	this.patternSortable = patternSortable;
	this.patternTime = patternTime;
	this.patternTimeShort = patternTimeShort;
	$s.pop();
}
thx.culture.core.DateTimeInfo.__name__ = ["thx","culture","core","DateTimeInfo"];
thx.culture.core.DateTimeInfo.prototype.months = null;
thx.culture.core.DateTimeInfo.prototype.abbrMonths = null;
thx.culture.core.DateTimeInfo.prototype.days = null;
thx.culture.core.DateTimeInfo.prototype.abbrDays = null;
thx.culture.core.DateTimeInfo.prototype.shortDays = null;
thx.culture.core.DateTimeInfo.prototype.am = null;
thx.culture.core.DateTimeInfo.prototype.pm = null;
thx.culture.core.DateTimeInfo.prototype.separatorDate = null;
thx.culture.core.DateTimeInfo.prototype.separatorTime = null;
thx.culture.core.DateTimeInfo.prototype.firstWeekDay = null;
thx.culture.core.DateTimeInfo.prototype.patternYearMonth = null;
thx.culture.core.DateTimeInfo.prototype.patternMonthDay = null;
thx.culture.core.DateTimeInfo.prototype.patternDate = null;
thx.culture.core.DateTimeInfo.prototype.patternDateShort = null;
thx.culture.core.DateTimeInfo.prototype.patternDateRfc = null;
thx.culture.core.DateTimeInfo.prototype.patternDateTime = null;
thx.culture.core.DateTimeInfo.prototype.patternUniversal = null;
thx.culture.core.DateTimeInfo.prototype.patternSortable = null;
thx.culture.core.DateTimeInfo.prototype.patternTime = null;
thx.culture.core.DateTimeInfo.prototype.patternTimeShort = null;
thx.culture.core.DateTimeInfo.prototype.__class__ = thx.culture.core.DateTimeInfo;
thx.culture.FormatParams = function() { }
thx.culture.FormatParams.__name__ = ["thx","culture","FormatParams"];
thx.culture.FormatParams.cleanQuotes = function(p) {
	$s.push("thx.culture.FormatParams::cleanQuotes");
	var $spos = $s.length;
	if(p.length <= 1) {
		$s.pop();
		return p;
	}
	var f = p.substr(0,1);
	if(("\"" == f || "'" == f) && p.substr(-1) == f) {
		var $tmp = p.substr(1,p.length - 2);
		$s.pop();
		return $tmp;
	} else {
		$s.pop();
		return p;
	}
	$s.pop();
}
thx.culture.FormatParams.params = function(p,ps,alt) {
	$s.push("thx.culture.FormatParams::params");
	var $spos = $s.length;
	if(null != ps && null != p) {
		var $tmp = [p].concat(ps);
		$s.pop();
		return $tmp;
	}
	if((null == ps || ps.length == 0) && null == p) {
		var $tmp = [alt];
		$s.pop();
		return $tmp;
	}
	if(null == ps || ps.length == 0) {
		var parts = p.split(":");
		var $tmp = [parts[0]].concat(parts.length == 1?[]:parts[1].split(",").map(function(s,i) {
			$s.push("thx.culture.FormatParams::params@33");
			var $spos = $s.length;
			if(0 == i) {
				$s.pop();
				return s;
			} else {
				var $tmp = thx.culture.FormatParams.cleanQuotes(s);
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}));
		$s.pop();
		return $tmp;
	}
	$s.pop();
	return ps;
	$s.pop();
}
thx.culture.FormatParams.prototype.__class__ = thx.culture.FormatParams;
Reflect = function() { }
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	$s.push("Reflect::hasField");
	var $spos = $s.length;
	if(o.hasOwnProperty != null) {
		var $tmp = o.hasOwnProperty(field);
		$s.pop();
		return $tmp;
	}
	var arr = Reflect.fields(o);
	var $it0 = arr.iterator();
	while( $it0.hasNext() ) {
		var t = $it0.next();
		if(t == field) {
			$s.pop();
			return true;
		}
	}
	$s.pop();
	return false;
	$s.pop();
}
Reflect.field = function(o,field) {
	$s.push("Reflect::field");
	var $spos = $s.length;
	var v = null;
	try {
		v = o[field];
	} catch( e ) {
		$e = [];
		while($s.length >= $spos) $e.unshift($s.pop());
		$s.push($e[0]);
	}
	$s.pop();
	return v;
	$s.pop();
}
Reflect.setField = function(o,field,value) {
	$s.push("Reflect::setField");
	var $spos = $s.length;
	o[field] = value;
	$s.pop();
}
Reflect.callMethod = function(o,func,args) {
	$s.push("Reflect::callMethod");
	var $spos = $s.length;
	var $tmp = func.apply(o,args);
	$s.pop();
	return $tmp;
	$s.pop();
}
Reflect.fields = function(o) {
	$s.push("Reflect::fields");
	var $spos = $s.length;
	if(o == null) {
		var $tmp = new Array();
		$s.pop();
		return $tmp;
	}
	var a = new Array();
	if(o.hasOwnProperty) {
		for(var i in o) if( o.hasOwnProperty(i) ) a.push(i);
	} else {
		var t;
		try {
			t = o.__proto__;
		} catch( e ) {
			$e = [];
			while($s.length >= $spos) $e.unshift($s.pop());
			$s.push($e[0]);
			t = null;
		}
		if(t != null) o.__proto__ = null;
		for(var i in o) if( i != "__proto__" ) a.push(i);
		if(t != null) o.__proto__ = t;
	}
	$s.pop();
	return a;
	$s.pop();
}
Reflect.isFunction = function(f) {
	$s.push("Reflect::isFunction");
	var $spos = $s.length;
	var $tmp = typeof(f) == "function" && f.__name__ == null;
	$s.pop();
	return $tmp;
	$s.pop();
}
Reflect.compare = function(a,b) {
	$s.push("Reflect::compare");
	var $spos = $s.length;
	var $tmp = a == b?0:a > b?1:-1;
	$s.pop();
	return $tmp;
	$s.pop();
}
Reflect.compareMethods = function(f1,f2) {
	$s.push("Reflect::compareMethods");
	var $spos = $s.length;
	if(f1 == f2) {
		$s.pop();
		return true;
	}
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) {
		$s.pop();
		return false;
	}
	var $tmp = f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
	$s.pop();
	return $tmp;
	$s.pop();
}
Reflect.isObject = function(v) {
	$s.push("Reflect::isObject");
	var $spos = $s.length;
	if(v == null) {
		$s.pop();
		return false;
	}
	var t = typeof(v);
	var $tmp = t == "string" || t == "object" && !v.__enum__ || t == "function" && v.__name__ != null;
	$s.pop();
	return $tmp;
	$s.pop();
}
Reflect.deleteField = function(o,f) {
	$s.push("Reflect::deleteField");
	var $spos = $s.length;
	if(!Reflect.hasField(o,f)) {
		$s.pop();
		return false;
	}
	delete(o[f]);
	$s.pop();
	return true;
	$s.pop();
}
Reflect.copy = function(o) {
	$s.push("Reflect::copy");
	var $spos = $s.length;
	var o2 = { };
	var _g = 0, _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var f = _g1[_g];
		++_g;
		o2[f] = Reflect.field(o,f);
	}
	$s.pop();
	return o2;
	$s.pop();
}
Reflect.makeVarArgs = function(f) {
	$s.push("Reflect::makeVarArgs");
	var $spos = $s.length;
	var $tmp = function() {
		$s.push("Reflect::makeVarArgs@108");
		var $spos = $s.length;
		var a = new Array();
		var _g1 = 0, _g = arguments.length;
		while(_g1 < _g) {
			var i = _g1++;
			a.push(arguments[i]);
		}
		var $tmp = f(a);
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
Reflect.prototype.__class__ = Reflect;
examples.SelectEnterAdd = function(cid) {
	if( cid === $_ ) return;
	$s.push("examples.SelectEnterAdd::new");
	var $spos = $s.length;
	Example.call(this,cid);
	$s.pop();
}
examples.SelectEnterAdd.__name__ = ["examples","SelectEnterAdd"];
examples.SelectEnterAdd.__super__ = Example;
for(var k in Example.prototype ) examples.SelectEnterAdd.prototype[k] = Example.prototype[k];
examples.SelectEnterAdd.prototype.runExample = function() {
	$s.push("examples.SelectEnterAdd::runExample");
	var $spos = $s.length;
	this.container.append("span").append("span");
	var s = this.container.selectAll("span").data(new EReg("\\b","").split("The test passed, hooray!"));
	s.enter().append("span").append("b").text().data();
	s.update().selectAll("b").dataf(function(d,i) {
		$s.push("examples.SelectEnterAdd::runExample@32");
		var $spos = $s.length;
		var $tmp = [d];
		$s.pop();
		return $tmp;
		$s.pop();
	}).enter().append("b").text().data();
	$s.pop();
}
examples.SelectEnterAdd.prototype.destroyExample = function() {
	$s.push("examples.SelectEnterAdd::destroyExample");
	var $spos = $s.length;
	$s.pop();
}
examples.SelectEnterAdd.prototype.description = function() {
	$s.push("examples.SelectEnterAdd::description");
	var $spos = $s.length;
	$s.pop();
	return "Select some existing spans and add new ones from data. Not interactive.";
	$s.pop();
}
examples.SelectEnterAdd.prototype.__class__ = examples.SelectEnterAdd;
examples.SelectAllEnterAdd = function(cid) {
	if( cid === $_ ) return;
	$s.push("examples.SelectAllEnterAdd::new");
	var $spos = $s.length;
	Example.call(this,cid);
	$s.pop();
}
examples.SelectAllEnterAdd.__name__ = ["examples","SelectAllEnterAdd"];
examples.SelectAllEnterAdd.__super__ = Example;
for(var k in Example.prototype ) examples.SelectAllEnterAdd.prototype[k] = Example.prototype[k];
examples.SelectAllEnterAdd.prototype.runExample = function() {
	$s.push("examples.SelectAllEnterAdd::runExample");
	var $spos = $s.length;
	this.container.append("span");
	this.container.selectAll("span").data(["Test"," passed."]).update().text().data().enter().append("span").text().data();
	$s.pop();
}
examples.SelectAllEnterAdd.prototype.destroyExample = function() {
	$s.push("examples.SelectAllEnterAdd::destroyExample");
	var $spos = $s.length;
	$s.pop();
}
examples.SelectAllEnterAdd.prototype.description = function() {
	$s.push("examples.SelectAllEnterAdd::description");
	var $spos = $s.length;
	$s.pop();
	return "Select an existing span and add a new one from data. Not interactive.";
	$s.pop();
}
examples.SelectAllEnterAdd.prototype.__class__ = examples.SelectAllEnterAdd;
thx.js.BaseSelection = function(groups) {
	if( groups === $_ ) return;
	$s.push("thx.js.BaseSelection::new");
	var $spos = $s.length;
	this.groups = groups;
	$s.pop();
}
thx.js.BaseSelection.__name__ = ["thx","js","BaseSelection"];
thx.js.BaseSelection.bindJoin = function(join,group,groupData,update,enter,exit) {
	$s.push("thx.js.BaseSelection::bindJoin");
	var $spos = $s.length;
	var n = group.nodes.length, m = groupData.length, updateHtmlDoms = [], exitHtmlDoms = [], enterHtmlDoms = [], node, nodeData;
	var nodeByKey = new Hash(), keys = [], key, j = groupData.length;
	var _g = 0;
	while(_g < n) {
		var i = _g++;
		node = group.nodes[i];
		key = join(Reflect.field(node,"__data__"),i);
		if(nodeByKey.exists(key)) exitHtmlDoms[j++] = node; else nodeByKey.set(key,node);
		keys.push(key);
	}
	var _g = 0;
	while(_g < m) {
		var i = _g++;
		node = nodeByKey.get(key = join(nodeData = groupData[i],i));
		if(null != node) {
			node["__data__"] = nodeData;
			updateHtmlDoms[i] = node;
			enterHtmlDoms[i] = exitHtmlDoms[i] = null;
		} else {
			node = { __data__ : nodeData};
			enterHtmlDoms[i] = node;
			updateHtmlDoms[i] = exitHtmlDoms[i] = null;
		}
		nodeByKey.remove(key);
	}
	var _g = 0;
	while(_g < n) {
		var i = _g++;
		if(nodeByKey.exists(keys[i])) exitHtmlDoms[i] = group.nodes[i];
	}
	var enterGroup = new thx.js.Group(enterHtmlDoms);
	enterGroup.parentNode = group.parentNode;
	enter.push(enterGroup);
	var updateGroup = new thx.js.Group(updateHtmlDoms);
	updateGroup.parentNode = group.parentNode;
	update.push(updateGroup);
	var exitGroup = new thx.js.Group(exitHtmlDoms);
	exitGroup.parentNode = group.parentNode;
	exit.push(exitGroup);
	$s.pop();
}
thx.js.BaseSelection.bind = function(group,groupData,update,enter,exit) {
	$s.push("thx.js.BaseSelection::bind");
	var $spos = $s.length;
	var n0 = Ints.min(group.nodes.length,groupData.length), n1 = Ints.max(group.nodes.length,groupData.length), updateHtmlDoms = [], exitHtmlDoms = [], enterHtmlDoms = [], node, nodeData;
	var _g = 0;
	while(_g < n0) {
		var i = _g++;
		node = group.nodes[i];
		nodeData = groupData[i];
		if(null != node) {
			node["__data__"] = nodeData;
			updateHtmlDoms[i] = node;
			enterHtmlDoms[i] = exitHtmlDoms[i] = null;
		} else {
			node = { __data__ : nodeData};
			enterHtmlDoms[i] = node;
			updateHtmlDoms[i] = exitHtmlDoms[i] = null;
		}
	}
	var _g1 = n0, _g = groupData.length;
	while(_g1 < _g) {
		var i = _g1++;
		node = { __data__ : groupData[i]};
		enterHtmlDoms[i] = node;
		updateHtmlDoms[i] = exitHtmlDoms[i] = null;
	}
	var _g = groupData.length;
	while(_g < n1) {
		var i = _g++;
		exitHtmlDoms[i] = group.nodes[i];
		enterHtmlDoms[i] = updateHtmlDoms[i] = null;
	}
	var enterGroup = new thx.js.Group(enterHtmlDoms);
	enterGroup.parentNode = group.parentNode;
	enter.push(enterGroup);
	var updateGroup = new thx.js.Group(updateHtmlDoms);
	updateGroup.parentNode = group.parentNode;
	update.push(updateGroup);
	var exitGroup = new thx.js.Group(exitHtmlDoms);
	exitGroup.parentNode = group.parentNode;
	exit.push(exitGroup);
	$s.pop();
}
thx.js.BaseSelection.prototype.parentNode = null;
thx.js.BaseSelection.prototype.groups = null;
thx.js.BaseSelection.prototype.select = function(selector) {
	$s.push("thx.js.BaseSelection::select");
	var $spos = $s.length;
	var $tmp = this._select(function(el) {
		$s.push("thx.js.BaseSelection::select@358");
		var $spos = $s.length;
		var $tmp = thx.js.Dom.selectionEngine.select(selector,el);
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BaseSelection.prototype.selectAll = function(selector) {
	$s.push("thx.js.BaseSelection::selectAll");
	var $spos = $s.length;
	var $tmp = this._selectAll(function(el) {
		$s.push("thx.js.BaseSelection::selectAll@365");
		var $spos = $s.length;
		var $tmp = thx.js.Dom.selectionEngine.selectAll(selector,el);
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BaseSelection.prototype._this = function() {
	$s.push("thx.js.BaseSelection::_this");
	var $spos = $s.length;
	var $tmp = this;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BaseSelection.prototype.append = function(name) {
	$s.push("thx.js.BaseSelection::append");
	var $spos = $s.length;
	var qname = thx.xml.Namespace.qualify(name);
	var append = function(node) {
		$s.push("thx.js.BaseSelection::append@379");
		var $spos = $s.length;
		var n = js.Lib.document.createElement(name);
		node.appendChild(n);
		$s.pop();
		return n;
		$s.pop();
	};
	var appendNS = function(node) {
		$s.push("thx.js.BaseSelection::append@386");
		var $spos = $s.length;
		var n = js.Lib.document.createElementNS(qname.space,qname.local);
		node.appendChild(n);
		$s.pop();
		return n;
		$s.pop();
	};
	var $tmp = this._select(null == qname?append:appendNS);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BaseSelection.prototype.remove = function() {
	$s.push("thx.js.BaseSelection::remove");
	var $spos = $s.length;
	var $tmp = this.eachNode(function(node,i) {
		$s.push("thx.js.BaseSelection::remove@398");
		var $spos = $s.length;
		var parent = node.parentNode;
		if(null != parent) parent.removeChild(node);
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BaseSelection.prototype.eachNode = function(f) {
	$s.push("thx.js.BaseSelection::eachNode");
	var $spos = $s.length;
	var _g = 0, _g1 = this.groups;
	while(_g < _g1.length) {
		var group = _g1[_g];
		++_g;
		group.each(f);
	}
	var $tmp = this;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BaseSelection.prototype.insert = function(name,before,beforeSelector) {
	$s.push("thx.js.BaseSelection::insert");
	var $spos = $s.length;
	var qname = thx.xml.Namespace.qualify(name);
	var insertDom = function(node) {
		$s.push("thx.js.BaseSelection::insert@415");
		var $spos = $s.length;
		var n = js.Lib.document.createElement(name);
		node.insertBefore(n,Sizzle(null != before?before:beforeSelector,node,node)[0]);
		$s.pop();
		return n;
		$s.pop();
	};
	var insertNsDom = function(node) {
		$s.push("thx.js.BaseSelection::insert@421");
		var $spos = $s.length;
		var n = js.Lib.document.createElementNS(qname.space,qname.local);
		node.insertBefore(n,Sizzle(null != before?before:beforeSelector,node,node)[0]);
		$s.pop();
		return n;
		$s.pop();
	};
	var $tmp = this._select(null == qname?insertDom:insertNsDom);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BaseSelection.prototype.sortNode = function(comparator) {
	$s.push("thx.js.BaseSelection::sortNode");
	var $spos = $s.length;
	var m = this.groups.length;
	var _g = 0;
	while(_g < m) {
		var i = _g++;
		var group = this.groups[i];
		group.nodes.sort(comparator);
		var n = group.nodes.length;
		var prev = group.nodes[0];
		var _g1 = 1;
		while(_g1 < n) {
			var j = _g1++;
			var node = group.nodes[j];
			if(null != node) {
				if(null != prev) prev.parentNode.insertBefore(node,prev.nextSibling);
				prev = node;
			}
		}
	}
	$s.pop();
	return this;
	$s.pop();
}
thx.js.BaseSelection.prototype.firstNode = function(f) {
	$s.push("thx.js.BaseSelection::firstNode");
	var $spos = $s.length;
	var _g = 0, _g1 = this.groups;
	while(_g < _g1.length) {
		var group = _g1[_g];
		++_g;
		var $it0 = group.nodes.iterator();
		while( $it0.hasNext() ) {
			var node = $it0.next();
			if(null != node) {
				var $tmp = f(node);
				$s.pop();
				return $tmp;
			}
		}
	}
	$s.pop();
	return null;
	$s.pop();
}
thx.js.BaseSelection.prototype.node = function() {
	$s.push("thx.js.BaseSelection::node");
	var $spos = $s.length;
	var $tmp = this.firstNode(function(n) {
		$s.push("thx.js.BaseSelection::node@466");
		var $spos = $s.length;
		$s.pop();
		return n;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BaseSelection.prototype.empty = function() {
	$s.push("thx.js.BaseSelection::empty");
	var $spos = $s.length;
	var $tmp = null == this.firstNode(function(n) {
		$s.push("thx.js.BaseSelection::empty@471");
		var $spos = $s.length;
		$s.pop();
		return n;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BaseSelection.prototype.filterNode = function(f) {
	$s.push("thx.js.BaseSelection::filterNode");
	var $spos = $s.length;
	var subgroups = [], subgroup;
	var _g = 0, _g1 = this.groups;
	while(_g < _g1.length) {
		var group = _g1[_g];
		++_g;
		var sg = new thx.js.Group(subgroup = []);
		sg.parentNode = group.parentNode;
		subgroups.push(sg);
		var i = -1;
		var $it0 = group.nodes.iterator();
		while( $it0.hasNext() ) {
			var node = $it0.next();
			if(null != node && f(node,++i)) subgroup.push(node);
		}
	}
	var $tmp = this.createSelection(subgroups);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BaseSelection.prototype.onNode = function(type,listener) {
	$s.push("thx.js.BaseSelection::onNode");
	var $spos = $s.length;
	var i = type.indexOf("."), typo = i < 0?type:type.substr(0,i);
	var $tmp = this.eachNode(function(n,i1) {
		$s.push("thx.js.BaseSelection::onNode@502");
		var $spos = $s.length;
		var l = function(e) {
			$s.push("thx.js.BaseSelection::onNode@502@503");
			var $spos = $s.length;
			var o = thx.js.Dom.event;
			thx.js.Dom.event = e;
			try {
				listener(n,i1);
			} catch( e1 ) {
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
			}
			thx.js.Dom.event = o;
			$s.pop();
		};
		if(null != Reflect.field(n,"__on" + type)) {
			n.removeEventListener(typo,Reflect.field(n,"__on" + type),false);
			Reflect.deleteField(n,"__on" + type);
		}
		if(null != listener) {
			n["__on" + type] = l;
			n.addEventListener(typo,l,false);
		}
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BaseSelection.prototype.createSelection = function(groups) {
	$s.push("thx.js.BaseSelection::createSelection");
	var $spos = $s.length;
	var $tmp = (function($this) {
		var $r;
		throw new thx.error.AbstractMethod({ fileName : "Selection.hx", lineNumber : 529, className : "thx.js.BaseSelection", methodName : "createSelection"});
		return $r;
	}(this));
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BaseSelection.prototype._select = function(selectf) {
	$s.push("thx.js.BaseSelection::_select");
	var $spos = $s.length;
	var subgroups = [], subgroup, subnode, node;
	var _g = 0, _g1 = this.groups;
	while(_g < _g1.length) {
		var group = _g1[_g];
		++_g;
		subgroups.push(subgroup = new thx.js.Group([]));
		subgroup.parentNode = group.parentNode;
		var $it0 = group.nodes.iterator();
		while( $it0.hasNext() ) {
			var node1 = $it0.next();
			if(null != node1) {
				subgroup.nodes.push(subnode = selectf(node1));
				if(null != subnode) subnode["__data__"] = Reflect.field(node1,"__data__");
			} else subgroup.nodes.push(null);
		}
	}
	var $tmp = this.createSelection(subgroups);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BaseSelection.prototype._selectAll = function(selectallf) {
	$s.push("thx.js.BaseSelection::_selectAll");
	var $spos = $s.length;
	var subgroups = [], subgroup;
	var _g = 0, _g1 = this.groups;
	while(_g < _g1.length) {
		var group = _g1[_g];
		++_g;
		var $it0 = group.nodes.iterator();
		while( $it0.hasNext() ) {
			var node = $it0.next();
			if(null != node) {
				subgroups.push(subgroup = new thx.js.Group(selectallf(node)));
				subgroup.parentNode = node;
			}
		}
	}
	var $tmp = this.createSelection(subgroups);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BaseSelection.prototype.__class__ = thx.js.BaseSelection;
thx.js.UnboundSelection = function(groups) {
	if( groups === $_ ) return;
	$s.push("thx.js.UnboundSelection::new");
	var $spos = $s.length;
	thx.js.BaseSelection.call(this,groups);
	$s.pop();
}
thx.js.UnboundSelection.__name__ = ["thx","js","UnboundSelection"];
thx.js.UnboundSelection.__super__ = thx.js.BaseSelection;
for(var k in thx.js.BaseSelection.prototype ) thx.js.UnboundSelection.prototype[k] = thx.js.BaseSelection.prototype[k];
thx.js.UnboundSelection.prototype.html = function() {
	$s.push("thx.js.UnboundSelection::html");
	var $spos = $s.length;
	var $tmp = new thx.js.AccessHtml(this);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.UnboundSelection.prototype.text = function() {
	$s.push("thx.js.UnboundSelection::text");
	var $spos = $s.length;
	var $tmp = new thx.js.AccessText(this);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.UnboundSelection.prototype.attr = function(name) {
	$s.push("thx.js.UnboundSelection::attr");
	var $spos = $s.length;
	var $tmp = new thx.js.AccessAttribute(name,this);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.UnboundSelection.prototype.classed = function() {
	$s.push("thx.js.UnboundSelection::classed");
	var $spos = $s.length;
	var $tmp = new thx.js.AccessClassed(this);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.UnboundSelection.prototype.property = function(name) {
	$s.push("thx.js.UnboundSelection::property");
	var $spos = $s.length;
	var $tmp = new thx.js.AccessProperty(name,this);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.UnboundSelection.prototype.style = function(name) {
	$s.push("thx.js.UnboundSelection::style");
	var $spos = $s.length;
	var $tmp = new thx.js.AccessStyle(name,this);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.UnboundSelection.prototype.transition = function() {
	$s.push("thx.js.UnboundSelection::transition");
	var $spos = $s.length;
	var $tmp = new thx.js.UnboundTransition(this);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.UnboundSelection.prototype.data = function(d,join) {
	$s.push("thx.js.UnboundSelection::data");
	var $spos = $s.length;
	var update = [], enter = [], exit = [];
	if(null == join) {
		var _g = 0, _g1 = this.groups;
		while(_g < _g1.length) {
			var group = _g1[_g];
			++_g;
			thx.js.BaseSelection.bind(group,d,update,enter,exit);
		}
	} else {
		var _g = 0, _g1 = this.groups;
		while(_g < _g1.length) {
			var group = _g1[_g];
			++_g;
			thx.js.BaseSelection.bindJoin(join,group,d,update,enter,exit);
		}
	}
	var $tmp = new thx.js.DataChoice(update,enter,exit);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.UnboundSelection.prototype.selectAllData = function(selector) {
	$s.push("thx.js.UnboundSelection::selectAllData");
	var $spos = $s.length;
	var selection = this.selectAll(selector);
	var $tmp = new thx.js.ResumeSelection(selection.groups);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.UnboundSelection.prototype.__class__ = thx.js.UnboundSelection;
thx.js.Selection = function(groups) {
	if( groups === $_ ) return;
	$s.push("thx.js.Selection::new");
	var $spos = $s.length;
	thx.js.UnboundSelection.call(this,groups);
	$s.pop();
}
thx.js.Selection.__name__ = ["thx","js","Selection"];
thx.js.Selection.__super__ = thx.js.UnboundSelection;
for(var k in thx.js.UnboundSelection.prototype ) thx.js.Selection.prototype[k] = thx.js.UnboundSelection.prototype[k];
thx.js.Selection.create = function(groups) {
	$s.push("thx.js.Selection::create");
	var $spos = $s.length;
	var $tmp = new thx.js.Selection(groups);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.Selection.prototype.createSelection = function(groups) {
	$s.push("thx.js.Selection::createSelection");
	var $spos = $s.length;
	var $tmp = new thx.js.Selection(groups);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.Selection.prototype.__class__ = thx.js.Selection;
thx.js.DataChoice = function(update,enter,exit) {
	if( update === $_ ) return;
	$s.push("thx.js.DataChoice::new");
	var $spos = $s.length;
	this._update = update;
	this._enter = enter;
	this._exit = exit;
	$s.pop();
}
thx.js.DataChoice.__name__ = ["thx","js","DataChoice"];
thx.js.DataChoice.prototype._update = null;
thx.js.DataChoice.prototype._enter = null;
thx.js.DataChoice.prototype._exit = null;
thx.js.DataChoice.prototype.enter = function() {
	$s.push("thx.js.DataChoice::enter");
	var $spos = $s.length;
	var $tmp = new thx.js.PreEnterSelection(this._enter,this);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.DataChoice.prototype.exit = function() {
	$s.push("thx.js.DataChoice::exit");
	var $spos = $s.length;
	var $tmp = new thx.js.ExitSelection(this._exit,this);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.DataChoice.prototype.update = function() {
	$s.push("thx.js.DataChoice::update");
	var $spos = $s.length;
	var $tmp = new thx.js.UpdateSelection(this._update,this);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.DataChoice.prototype.__class__ = thx.js.DataChoice;
thx.js.BoundSelection = function(groups) {
	if( groups === $_ ) return;
	$s.push("thx.js.BoundSelection::new");
	var $spos = $s.length;
	thx.js.BaseSelection.call(this,groups);
	$s.pop();
}
thx.js.BoundSelection.__name__ = ["thx","js","BoundSelection"];
thx.js.BoundSelection.__super__ = thx.js.BaseSelection;
for(var k in thx.js.BaseSelection.prototype ) thx.js.BoundSelection.prototype[k] = thx.js.BaseSelection.prototype[k];
thx.js.BoundSelection.prototype.html = function() {
	$s.push("thx.js.BoundSelection::html");
	var $spos = $s.length;
	var $tmp = new thx.js.AccessDataHtml(this);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BoundSelection.prototype.text = function() {
	$s.push("thx.js.BoundSelection::text");
	var $spos = $s.length;
	var $tmp = new thx.js.AccessDataText(this);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BoundSelection.prototype.attr = function(name) {
	$s.push("thx.js.BoundSelection::attr");
	var $spos = $s.length;
	var $tmp = new thx.js.AccessDataAttribute(name,this);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BoundSelection.prototype.classed = function() {
	$s.push("thx.js.BoundSelection::classed");
	var $spos = $s.length;
	var $tmp = new thx.js.AccessDataClassed(this);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BoundSelection.prototype.property = function(name) {
	$s.push("thx.js.BoundSelection::property");
	var $spos = $s.length;
	var $tmp = new thx.js.AccessDataProperty(name,this);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BoundSelection.prototype.style = function(name) {
	$s.push("thx.js.BoundSelection::style");
	var $spos = $s.length;
	var $tmp = new thx.js.AccessDataStyle(name,this);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BoundSelection.prototype.transition = function() {
	$s.push("thx.js.BoundSelection::transition");
	var $spos = $s.length;
	var $tmp = new thx.js.BoundTransition(this);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BoundSelection.prototype.data = function(d,join) {
	$s.push("thx.js.BoundSelection::data");
	var $spos = $s.length;
	var update = [], enter = [], exit = [];
	if(null == join) {
		var _g = 0, _g1 = this.groups;
		while(_g < _g1.length) {
			var group = _g1[_g];
			++_g;
			thx.js.BaseSelection.bind(group,d,update,enter,exit);
		}
	} else {
		var _g = 0, _g1 = this.groups;
		while(_g < _g1.length) {
			var group = _g1[_g];
			++_g;
			thx.js.BaseSelection.bindJoin(join,group,d,update,enter,exit);
		}
	}
	var $tmp = new thx.js.DataChoice(update,enter,exit);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BoundSelection.prototype.dataf = function(fd,join) {
	$s.push("thx.js.BoundSelection::dataf");
	var $spos = $s.length;
	if(null == join) {
		var update = [], enter = [], exit = [], i = 0;
		var _g = 0, _g1 = this.groups;
		while(_g < _g1.length) {
			var group = _g1[_g];
			++_g;
			thx.js.BaseSelection.bind(group,fd(Reflect.field(group.parentNode,"__data__"),i++),update,enter,exit);
		}
		var $tmp = new thx.js.DataChoice(update,enter,exit);
		$s.pop();
		return $tmp;
	} else {
		var update = [], enter = [], exit = [], i = 0;
		var _g = 0, _g1 = this.groups;
		while(_g < _g1.length) {
			var group = _g1[_g];
			++_g;
			thx.js.BaseSelection.bindJoin(join,group,fd(Reflect.field(group.parentNode,"__data__"),i++),update,enter,exit);
		}
		var $tmp = new thx.js.DataChoice(update,enter,exit);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
thx.js.BoundSelection.prototype.selfData = function() {
	$s.push("thx.js.BoundSelection::selfData");
	var $spos = $s.length;
	var $tmp = this.dataf(function(d,i) {
		$s.push("thx.js.BoundSelection::selfData@164");
		var $spos = $s.length;
		$s.pop();
		return d;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BoundSelection.prototype.each = function(f) {
	$s.push("thx.js.BoundSelection::each");
	var $spos = $s.length;
	var $tmp = this.eachNode(function(n,i) {
		$s.push("thx.js.BoundSelection::each@169");
		var $spos = $s.length;
		f(Reflect.field(n,"__data__"),i);
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BoundSelection.prototype.sort = function(comparator) {
	$s.push("thx.js.BoundSelection::sort");
	var $spos = $s.length;
	var $tmp = this.sortNode(function(a,b) {
		$s.push("thx.js.BoundSelection::sort@174");
		var $spos = $s.length;
		var $tmp = comparator(Reflect.field(a,"__data__"),Reflect.field(b,"__data__"));
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BoundSelection.prototype.filter = function(f) {
	$s.push("thx.js.BoundSelection::filter");
	var $spos = $s.length;
	var $tmp = this.filterNode(function(n,i) {
		$s.push("thx.js.BoundSelection::filter@179");
		var $spos = $s.length;
		var $tmp = f(Reflect.field(n,"__data__"),i);
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BoundSelection.prototype.map = function(f) {
	$s.push("thx.js.BoundSelection::map");
	var $spos = $s.length;
	var ngroups = [];
	var _g = 0, _g1 = this.groups;
	while(_g < _g1.length) {
		var group = _g1[_g];
		++_g;
		var ngroup = new thx.js.Group([]);
		var i = 0;
		var $it0 = group.nodes.iterator();
		while( $it0.hasNext() ) {
			var node = $it0.next();
			if(null != node) node["__data__"] = f(Reflect.field(node,"__data__"),i++);
			ngroup.nodes.push(node);
		}
		ngroups.push(ngroup);
	}
	var $tmp = this.createSelection(ngroups);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BoundSelection.prototype.first = function(f) {
	$s.push("thx.js.BoundSelection::first");
	var $spos = $s.length;
	var $tmp = this.firstNode(function(n) {
		$s.push("thx.js.BoundSelection::first@202");
		var $spos = $s.length;
		var $tmp = f(Reflect.field(n,"__data__"));
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BoundSelection.prototype.on = function(type,listener) {
	$s.push("thx.js.BoundSelection::on");
	var $spos = $s.length;
	var $tmp = this.onNode(type,null == listener?null:function(n,i) {
		$s.push("thx.js.BoundSelection::on@207");
		var $spos = $s.length;
		listener(Reflect.field(n,"__data__"),i);
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BoundSelection.prototype.__class__ = thx.js.BoundSelection;
thx.js.ResumeSelection = function(groups) {
	if( groups === $_ ) return;
	$s.push("thx.js.ResumeSelection::new");
	var $spos = $s.length;
	thx.js.BoundSelection.call(this,groups);
	$s.pop();
}
thx.js.ResumeSelection.__name__ = ["thx","js","ResumeSelection"];
thx.js.ResumeSelection.__super__ = thx.js.BoundSelection;
for(var k in thx.js.BoundSelection.prototype ) thx.js.ResumeSelection.prototype[k] = thx.js.BoundSelection.prototype[k];
thx.js.ResumeSelection.create = function(groups) {
	$s.push("thx.js.ResumeSelection::create");
	var $spos = $s.length;
	var $tmp = new thx.js.ResumeSelection(groups);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.ResumeSelection.prototype.createSelection = function(groups) {
	$s.push("thx.js.ResumeSelection::createSelection");
	var $spos = $s.length;
	var $tmp = new thx.js.ResumeSelection(groups);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.ResumeSelection.prototype.__class__ = thx.js.ResumeSelection;
thx.js.PreEnterSelection = function(enter,choice) {
	if( enter === $_ ) return;
	$s.push("thx.js.PreEnterSelection::new");
	var $spos = $s.length;
	this.groups = enter;
	this._choice = choice;
	$s.pop();
}
thx.js.PreEnterSelection.__name__ = ["thx","js","PreEnterSelection"];
thx.js.PreEnterSelection.prototype.groups = null;
thx.js.PreEnterSelection.prototype._choice = null;
thx.js.PreEnterSelection.prototype.append = function(name) {
	$s.push("thx.js.PreEnterSelection::append");
	var $spos = $s.length;
	var qname = thx.xml.Namespace.qualify(name);
	var append = function(node) {
		$s.push("thx.js.PreEnterSelection::append@224");
		var $spos = $s.length;
		var n = js.Lib.document.createElement(name);
		node.appendChild(n);
		$s.pop();
		return n;
		$s.pop();
	};
	var appendNS = function(node) {
		$s.push("thx.js.PreEnterSelection::append@231");
		var $spos = $s.length;
		var n = js.Lib.document.createElementNS(qname.space,qname.local);
		node.appendChild(n);
		$s.pop();
		return n;
		$s.pop();
	};
	var $tmp = this._select(null == qname?append:appendNS);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.PreEnterSelection.prototype.insert = function(name,before,beforeSelector) {
	$s.push("thx.js.PreEnterSelection::insert");
	var $spos = $s.length;
	var qname = thx.xml.Namespace.qualify(name);
	var insertDom = function(node) {
		$s.push("thx.js.PreEnterSelection::insert@244");
		var $spos = $s.length;
		var n = js.Lib.document.createElement(name);
		node.insertBefore(n,Sizzle(null != before?before:beforeSelector,node)[0]);
		$s.pop();
		return n;
		$s.pop();
	};
	var insertNsDom = function(node) {
		$s.push("thx.js.PreEnterSelection::insert@250");
		var $spos = $s.length;
		var n = js.Lib.document.createElementNS(qname.space,qname.local);
		node.insertBefore(n,Sizzle(null != before?before:beforeSelector,node)[0]);
		$s.pop();
		return n;
		$s.pop();
	};
	var $tmp = this._select(null == qname?insertDom:insertNsDom);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.PreEnterSelection.prototype.createSelection = function(groups) {
	$s.push("thx.js.PreEnterSelection::createSelection");
	var $spos = $s.length;
	var $tmp = new thx.js.EnterSelection(groups,this._choice);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.PreEnterSelection.prototype._select = function(selectf) {
	$s.push("thx.js.PreEnterSelection::_select");
	var $spos = $s.length;
	var subgroups = [], subgroup, subnode, node;
	var _g = 0, _g1 = this.groups;
	while(_g < _g1.length) {
		var group = _g1[_g];
		++_g;
		subgroups.push(subgroup = new thx.js.Group([]));
		subgroup.parentNode = group.parentNode;
		var $it0 = group.nodes.iterator();
		while( $it0.hasNext() ) {
			var node1 = $it0.next();
			if(null != node1) {
				subgroup.nodes.push(subnode = selectf(group.parentNode));
				subnode["__data__"] = Reflect.field(node1,"__data__");
			} else subgroup.nodes.push(null);
		}
	}
	var $tmp = this.createSelection(subgroups);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.PreEnterSelection.prototype.__class__ = thx.js.PreEnterSelection;
thx.js.EnterSelection = function(enter,choice) {
	if( enter === $_ ) return;
	$s.push("thx.js.EnterSelection::new");
	var $spos = $s.length;
	thx.js.BoundSelection.call(this,enter);
	this._choice = choice;
	$s.pop();
}
thx.js.EnterSelection.__name__ = ["thx","js","EnterSelection"];
thx.js.EnterSelection.__super__ = thx.js.BoundSelection;
for(var k in thx.js.BoundSelection.prototype ) thx.js.EnterSelection.prototype[k] = thx.js.BoundSelection.prototype[k];
thx.js.EnterSelection.prototype._choice = null;
thx.js.EnterSelection.prototype.createSelection = function(groups) {
	$s.push("thx.js.EnterSelection::createSelection");
	var $spos = $s.length;
	var $tmp = new thx.js.EnterSelection(groups,this._choice);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.EnterSelection.prototype.exit = function() {
	$s.push("thx.js.EnterSelection::exit");
	var $spos = $s.length;
	var $tmp = this._choice.exit();
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.EnterSelection.prototype.update = function() {
	$s.push("thx.js.EnterSelection::update");
	var $spos = $s.length;
	var $tmp = this._choice.update();
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.EnterSelection.prototype.__class__ = thx.js.EnterSelection;
thx.js.ExitSelection = function(exit,choice) {
	if( exit === $_ ) return;
	$s.push("thx.js.ExitSelection::new");
	var $spos = $s.length;
	thx.js.UnboundSelection.call(this,exit);
	this._choice = choice;
	$s.pop();
}
thx.js.ExitSelection.__name__ = ["thx","js","ExitSelection"];
thx.js.ExitSelection.__super__ = thx.js.UnboundSelection;
for(var k in thx.js.UnboundSelection.prototype ) thx.js.ExitSelection.prototype[k] = thx.js.UnboundSelection.prototype[k];
thx.js.ExitSelection.prototype._choice = null;
thx.js.ExitSelection.prototype.createSelection = function(groups) {
	$s.push("thx.js.ExitSelection::createSelection");
	var $spos = $s.length;
	var $tmp = new thx.js.ExitSelection(groups,this._choice);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.ExitSelection.prototype.enter = function() {
	$s.push("thx.js.ExitSelection::enter");
	var $spos = $s.length;
	var $tmp = this._choice.enter();
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.ExitSelection.prototype.update = function() {
	$s.push("thx.js.ExitSelection::update");
	var $spos = $s.length;
	var $tmp = this._choice.update();
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.ExitSelection.prototype.__class__ = thx.js.ExitSelection;
thx.js.UpdateSelection = function(update,choice) {
	if( update === $_ ) return;
	$s.push("thx.js.UpdateSelection::new");
	var $spos = $s.length;
	thx.js.BoundSelection.call(this,update);
	this._choice = choice;
	$s.pop();
}
thx.js.UpdateSelection.__name__ = ["thx","js","UpdateSelection"];
thx.js.UpdateSelection.__super__ = thx.js.BoundSelection;
for(var k in thx.js.BoundSelection.prototype ) thx.js.UpdateSelection.prototype[k] = thx.js.BoundSelection.prototype[k];
thx.js.UpdateSelection.prototype._choice = null;
thx.js.UpdateSelection.prototype.createSelection = function(groups) {
	$s.push("thx.js.UpdateSelection::createSelection");
	var $spos = $s.length;
	var $tmp = new thx.js.UpdateSelection(groups,this._choice);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.UpdateSelection.prototype.enter = function() {
	$s.push("thx.js.UpdateSelection::enter");
	var $spos = $s.length;
	var $tmp = this._choice.enter();
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.UpdateSelection.prototype.exit = function() {
	$s.push("thx.js.UpdateSelection::exit");
	var $spos = $s.length;
	var $tmp = this._choice.exit();
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.UpdateSelection.prototype.__class__ = thx.js.UpdateSelection;
thx.color.Colors = function() { }
thx.color.Colors.__name__ = ["thx","color","Colors"];
thx.color.Colors.interpolatef = function(a,b,interpolator) {
	$s.push("thx.color.Colors::interpolatef");
	var $spos = $s.length;
	var ca = thx.color.Colors.parse(a);
	var cb = thx.color.Colors.parse(b);
	var f = thx.color.Rgb.interpolatef(ca,cb,interpolator);
	var $tmp = function(v) {
		$s.push("thx.color.Colors::interpolatef@20");
		var $spos = $s.length;
		var $tmp = f(v).toString();
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.color.Colors.interpolate = function(v,a,b,interpolator) {
	$s.push("thx.color.Colors::interpolate");
	var $spos = $s.length;
	var $tmp = (thx.color.Colors.interpolatef(a,b,interpolator))(v);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.color.Colors.parse = function(s) {
	$s.push("thx.color.Colors::parse");
	var $spos = $s.length;
	if(!thx.color.Colors._reParse.match(s)) {
		var v = thx.color.NamedColors.byName.get(s);
		if(null == v) {
			if("transparent" == s) {
				var $tmp = thx.color.Rgb.fromInt(16777215);
				$s.pop();
				return $tmp;
			} else {
				var $tmp = (function($this) {
					var $r;
					throw new thx.error.Error("invalid color: '{0}'",null,s,{ fileName : "Colors.hx", lineNumber : 39, className : "thx.color.Colors", methodName : "parse"});
					return $r;
				}(this));
				$s.pop();
				return $tmp;
			}
		} else {
			$s.pop();
			return v;
		}
	}
	var type = thx.color.Colors._reParse.matched(1);
	if(!Strings.empty(type)) {
		var values = thx.color.Colors._reParse.matched(2).split(",");
		switch(type.toLowerCase()) {
		case "rgb":case "rgba":
			var $tmp = new thx.color.Rgb(thx.color.Colors._c(values[0]),thx.color.Colors._c(values[1]),thx.color.Colors._c(values[2]));
			$s.pop();
			return $tmp;
		case "hsl":
			var $tmp = new thx.color.Hsl(thx.color.Colors._d(values[0]),thx.color.Colors._p(values[1]),thx.color.Colors._p(values[2]));
			$s.pop();
			return $tmp;
		case "cmyk":
			var $tmp = new thx.color.Cmyk(thx.color.Colors._p(values[0]),thx.color.Colors._p(values[1]),thx.color.Colors._p(values[2]),thx.color.Colors._p(values[3]));
			$s.pop();
			return $tmp;
		}
	}
	var color = thx.color.Colors._reParse.matched(3);
	if(color.length == 3) color = color.split("").map(function(d,_) {
		$s.push("thx.color.Colors::parse@56");
		var $spos = $s.length;
		var $tmp = d + d;
		$s.pop();
		return $tmp;
		$s.pop();
	}).join(""); else if(color.length != 6) {
		var $tmp = (function($this) {
			var $r;
			throw new thx.error.Error("invalid color: '{0}'",null,s,{ fileName : "Colors.hx", lineNumber : 58, className : "thx.color.Colors", methodName : "parse"});
			return $r;
		}(this));
		$s.pop();
		return $tmp;
	}
	var $tmp = thx.color.Rgb.fromInt(Std.parseInt("0x" + color));
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.color.Colors._c = function(s) {
	$s.push("thx.color.Colors::_c");
	var $spos = $s.length;
	var $tmp = Std.parseInt(s);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.color.Colors._d = function(s) {
	$s.push("thx.color.Colors::_d");
	var $spos = $s.length;
	var s1 = StringTools.trim(s);
	if(s1.substr(-3) == "deg") s1 = s1.substr(0,-3); else if(s1.substr(-1) == "º") s1 = s1.substr(0,-1);
	var $tmp = Std.parseFloat(s1);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.color.Colors._p = function(s) {
	$s.push("thx.color.Colors::_p");
	var $spos = $s.length;
	var s1 = StringTools.trim(s);
	if(s1.substr(-1) == "%") {
		var $tmp = Std.parseFloat(s1.substr(0,-1)) / 100;
		$s.pop();
		return $tmp;
	} else {
		var $tmp = Std.parseFloat(s1);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
thx.color.Colors.prototype.__class__ = thx.color.Colors;
thx.js.AccessTweenAttribute = function(name,transition,tweens) {
	if( name === $_ ) return;
	$s.push("thx.js.AccessTweenAttribute::new");
	var $spos = $s.length;
	thx.js.AccessTween.call(this,transition,tweens);
	this.name = name;
	this.qname = thx.xml.Namespace.qualify(name);
	$s.pop();
}
thx.js.AccessTweenAttribute.__name__ = ["thx","js","AccessTweenAttribute"];
thx.js.AccessTweenAttribute.__super__ = thx.js.AccessTween;
for(var k in thx.js.AccessTween.prototype ) thx.js.AccessTweenAttribute.prototype[k] = thx.js.AccessTween.prototype[k];
thx.js.AccessTweenAttribute.prototype.name = null;
thx.js.AccessTweenAttribute.prototype.qname = null;
thx.js.AccessTweenAttribute.prototype.stringfNode = function(f) {
	$s.push("thx.js.AccessTweenAttribute::stringfNode");
	var $spos = $s.length;
	var $tmp = this.stringTween(this.transitionStringTweenf(f));
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessTweenAttribute.prototype.string = function(value) {
	$s.push("thx.js.AccessTweenAttribute::string");
	var $spos = $s.length;
	var $tmp = this.stringTween(this.transitionStringTween(value));
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessTweenAttribute.prototype.stringTween = function(tween) {
	$s.push("thx.js.AccessTweenAttribute::stringTween");
	var $spos = $s.length;
	var name = this.name;
	var attrTween = function(d,i) {
		$s.push("thx.js.AccessTweenAttribute::stringTween@37");
		var $spos = $s.length;
		var f = tween(d,i,d.getAttribute(name));
		var $tmp = function(t) {
			$s.push("thx.js.AccessTweenAttribute::stringTween@37@40");
			var $spos = $s.length;
			d.setAttribute(name,f(t));
			$s.pop();
		};
		$s.pop();
		return $tmp;
		$s.pop();
	};
	var attrTweenNS = function(d,i) {
		$s.push("thx.js.AccessTweenAttribute::stringTween@45");
		var $spos = $s.length;
		var f = tween(d,i,d.getAttributeNS(name.space,name.local));
		var $tmp = function(t) {
			$s.push("thx.js.AccessTweenAttribute::stringTween@45@48");
			var $spos = $s.length;
			d.setAttributeNS(name.space,name.local,f(t));
			$s.pop();
		};
		$s.pop();
		return $tmp;
		$s.pop();
	};
	this.tweens.set("attr." + name,null == this.qname?attrTween:attrTweenNS);
	var $tmp = this.transition;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessTweenAttribute.prototype.floatNode = function(f) {
	$s.push("thx.js.AccessTweenAttribute::floatNode");
	var $spos = $s.length;
	var $tmp = this.floatTween(this.transitionFloatTweenf(f));
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessTweenAttribute.prototype["float"] = function(value) {
	$s.push("thx.js.AccessTweenAttribute::float");
	var $spos = $s.length;
	var $tmp = this.floatTween(this.transitionFloatTween(value));
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessTweenAttribute.prototype.floatTween = function(tween) {
	$s.push("thx.js.AccessTweenAttribute::floatTween");
	var $spos = $s.length;
	var name = this.name;
	var attrTween = function(d,i) {
		$s.push("thx.js.AccessTweenAttribute::floatTween@71");
		var $spos = $s.length;
		var f = tween(d,i,Std.parseFloat(d.getAttribute(name)));
		var $tmp = function(t) {
			$s.push("thx.js.AccessTweenAttribute::floatTween@71@74");
			var $spos = $s.length;
			d.setAttribute(name,"" + f(t));
			$s.pop();
		};
		$s.pop();
		return $tmp;
		$s.pop();
	};
	var attrTweenNS = function(d,i) {
		$s.push("thx.js.AccessTweenAttribute::floatTween@79");
		var $spos = $s.length;
		var f = tween(d,i,Std.parseFloat(d.getAttributeNS(name.space,name.local)));
		var $tmp = function(t) {
			$s.push("thx.js.AccessTweenAttribute::floatTween@79@82");
			var $spos = $s.length;
			haxe.Log.trace(t,{ fileName : "AccessTweenAttribute.hx", lineNumber : 83, className : "thx.js.AccessTweenAttribute", methodName : "floatTween"});
			d.setAttributeNS(name.space,name.local,"" + f(t));
			$s.pop();
		};
		$s.pop();
		return $tmp;
		$s.pop();
	};
	this.tweens.set("attr." + name,null == this.qname?attrTween:attrTweenNS);
	var $tmp = this.transition;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessTweenAttribute.prototype.__class__ = thx.js.AccessTweenAttribute;
thx.js.AccessDataTweenAttribute = function(name,transition,tweens) {
	if( name === $_ ) return;
	$s.push("thx.js.AccessDataTweenAttribute::new");
	var $spos = $s.length;
	thx.js.AccessTweenAttribute.call(this,name,transition,tweens);
	$s.pop();
}
thx.js.AccessDataTweenAttribute.__name__ = ["thx","js","AccessDataTweenAttribute"];
thx.js.AccessDataTweenAttribute.__super__ = thx.js.AccessTweenAttribute;
for(var k in thx.js.AccessTweenAttribute.prototype ) thx.js.AccessDataTweenAttribute.prototype[k] = thx.js.AccessTweenAttribute.prototype[k];
thx.js.AccessDataTweenAttribute.prototype.stringf = function(f) {
	$s.push("thx.js.AccessDataTweenAttribute::stringf");
	var $spos = $s.length;
	var $tmp = this.stringfNode(function(n,i) {
		$s.push("thx.js.AccessDataTweenAttribute::stringf@102");
		var $spos = $s.length;
		var $tmp = f(Reflect.field(n,"__data__"),i);
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessDataTweenAttribute.prototype.floatf = function(f) {
	$s.push("thx.js.AccessDataTweenAttribute::floatf");
	var $spos = $s.length;
	var $tmp = this.floatNode(function(n,i) {
		$s.push("thx.js.AccessDataTweenAttribute::floatf@107");
		var $spos = $s.length;
		var $tmp = f(Reflect.field(n,"__data__"),i);
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessDataTweenAttribute.prototype.__class__ = thx.js.AccessDataTweenAttribute;
IntIter = function(min,max) {
	if( min === $_ ) return;
	$s.push("IntIter::new");
	var $spos = $s.length;
	this.min = min;
	this.max = max;
	$s.pop();
}
IntIter.__name__ = ["IntIter"];
IntIter.prototype.min = null;
IntIter.prototype.max = null;
IntIter.prototype.hasNext = function() {
	$s.push("IntIter::hasNext");
	var $spos = $s.length;
	var $tmp = this.min < this.max;
	$s.pop();
	return $tmp;
	$s.pop();
}
IntIter.prototype.next = function() {
	$s.push("IntIter::next");
	var $spos = $s.length;
	var $tmp = this.min++;
	$s.pop();
	return $tmp;
	$s.pop();
}
IntIter.prototype.__class__ = IntIter;
examples.HelloDataNestedKey = function(cid) {
	if( cid === $_ ) return;
	$s.push("examples.HelloDataNestedKey::new");
	var $spos = $s.length;
	Example.call(this,cid);
	$s.pop();
}
examples.HelloDataNestedKey.__name__ = ["examples","HelloDataNestedKey"];
examples.HelloDataNestedKey.__super__ = Example;
for(var k in Example.prototype ) examples.HelloDataNestedKey.prototype[k] = Example.prototype[k];
examples.HelloDataNestedKey.prototype._refresh = null;
examples.HelloDataNestedKey.prototype.runExample = function() {
	$s.push("examples.HelloDataNestedKey::runExample");
	var $spos = $s.length;
	var data = Ints.range(10).map(function(_,_1) {
		$s.push("examples.HelloDataNestedKey::runExample@17");
		var $spos = $s.length;
		var $tmp = Ints.range(10).map(function(_2,_3) {
			$s.push("examples.HelloDataNestedKey::runExample@17@17");
			var $spos = $s.length;
			var $tmp = Std.random(360);
			$s.pop();
			return $tmp;
			$s.pop();
		});
		$s.pop();
		return $tmp;
		$s.pop();
	}), container = this.container;
	var table = container.append("table").attr("class").string("nestedkey");
	var transform = function() {
		$s.push("examples.HelloDataNestedKey::runExample@22");
		var $spos = $s.length;
		var t = table.selectAll("tr").data(data);
		t.enter().append("tr").selectAll("td").selfData().enter().append("td").style("background-color").stringf(function(d,i) {
			$s.push("examples.HelloDataNestedKey::runExample@22@32");
			var $spos = $s.length;
			var $tmp = new thx.color.Hsl(d,1,.5).toHslString();
			$s.pop();
			return $tmp;
			$s.pop();
		}).text().data();
		t.update().selectAll("td").selfData().update().style("background-color").stringf(function(d,i) {
			$s.push("examples.HelloDataNestedKey::runExample@22@38");
			var $spos = $s.length;
			var $tmp = new thx.color.Hsl(d,1,.5).toHslString();
			$s.pop();
			return $tmp;
			$s.pop();
		}).text().data();
		$s.pop();
	};
	this._refresh = function(_) {
		$s.push("examples.HelloDataNestedKey::runExample@42");
		var $spos = $s.length;
		var _g = 0;
		while(_g < 10) {
			var i = _g++;
			var _g1 = 0;
			while(_g1 < 10) {
				var j = _g1++;
				data[i][j] = (data[i][j] + 1) % 360;
			}
		}
		transform();
		$s.pop();
	};
	transform();
	js.Lib.window.addEventListener("keypress",this._refresh,false);
	$s.pop();
}
examples.HelloDataNestedKey.prototype.destroyExample = function() {
	$s.push("examples.HelloDataNestedKey::destroyExample");
	var $spos = $s.length;
	js.Lib.window.removeEventListener("keypress",this._refresh,false);
	$s.pop();
}
examples.HelloDataNestedKey.prototype.description = function() {
	$s.push("examples.HelloDataNestedKey::description");
	var $spos = $s.length;
	$s.pop();
	return "Html table filled with data from a 2 dimensional array. Press any key to increment the values.";
	$s.pop();
}
examples.HelloDataNestedKey.prototype.__class__ = examples.HelloDataNestedKey;
thx.js.Group = function(nodes) {
	if( nodes === $_ ) return;
	$s.push("thx.js.Group::new");
	var $spos = $s.length;
	this.nodes = nodes;
	$s.pop();
}
thx.js.Group.__name__ = ["thx","js","Group"];
thx.js.Group.prototype.parentNode = null;
thx.js.Group.prototype.nodes = null;
thx.js.Group.prototype.each = function(f) {
	$s.push("thx.js.Group::each");
	var $spos = $s.length;
	var _g1 = 0, _g = this.nodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(null != this.nodes[i]) f(this.nodes[i],i);
	}
	$s.pop();
}
thx.js.Group.prototype.iterator = function() {
	$s.push("thx.js.Group::iterator");
	var $spos = $s.length;
	var $tmp = this.nodes.iterator();
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.Group.prototype.get = function(i) {
	$s.push("thx.js.Group::get");
	var $spos = $s.length;
	var $tmp = this.nodes[i];
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.Group.prototype.count = function() {
	$s.push("thx.js.Group::count");
	var $spos = $s.length;
	var $tmp = this.nodes.length;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.Group.prototype.push = function(node) {
	$s.push("thx.js.Group::push");
	var $spos = $s.length;
	this.nodes.push(node);
	$s.pop();
}
thx.js.Group.prototype.sort = function(comparator) {
	$s.push("thx.js.Group::sort");
	var $spos = $s.length;
	this.nodes.sort(comparator);
	$s.pop();
}
thx.js.Group.prototype.__class__ = thx.js.Group;
thx.js.SizzleEngine = function(p) {
	$s.push("thx.js.SizzleEngine::new");
	var $spos = $s.length;
	$s.pop();
}
thx.js.SizzleEngine.__name__ = ["thx","js","SizzleEngine"];
thx.js.SizzleEngine.prototype.select = function(selector,node) {
	$s.push("thx.js.SizzleEngine::select");
	var $spos = $s.length;
	var $tmp = thx.js.Sizzle.select(selector,node)[0];
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.SizzleEngine.prototype.selectNode = function(n,p) {
	$s.push("thx.js.SizzleEngine::selectNode");
	var $spos = $s.length;
	var $tmp = thx.js.Sizzle.select(n,p)[0];
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.SizzleEngine.prototype.selectAll = function(selector,node) {
	$s.push("thx.js.SizzleEngine::selectAll");
	var $spos = $s.length;
	var $tmp = thx.js.Sizzle.uniqueSort(thx.js.Sizzle.select(selector,node));
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.SizzleEngine.prototype.__class__ = thx.js.SizzleEngine;
thx.js.SizzleEngine.__interfaces__ = [thx.js.ISelectorEngine];
thx.js.Dom = function() { }
thx.js.Dom.__name__ = ["thx","js","Dom"];
thx.js.Dom.select = function(selector) {
	$s.push("thx.js.Dom::select");
	var $spos = $s.length;
	var $tmp = thx.js.Dom.doc.select(selector);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.Dom.selectAll = function(selector) {
	$s.push("thx.js.Dom::selectAll");
	var $spos = $s.length;
	var $tmp = thx.js.Dom.doc.selectAll(selector);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.Dom.selectNode = function(node) {
	$s.push("thx.js.Dom::selectNode");
	var $spos = $s.length;
	var $tmp = thx.js.Selection.create([new thx.js.Group([node])]);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.Dom.selectNodeData = function(node) {
	$s.push("thx.js.Dom::selectNodeData");
	var $spos = $s.length;
	var $tmp = thx.js.ResumeSelection.create([new thx.js.Group([node])]);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.Dom.event = null;
thx.js.Dom.prototype.__class__ = thx.js.Dom;
Dates = function() { }
Dates.__name__ = ["Dates"];
Dates.format = function(d,param,params,culture) {
	$s.push("Dates::format");
	var $spos = $s.length;
	var $tmp = (Dates.formatf(param,params,culture))(d);
	$s.pop();
	return $tmp;
	$s.pop();
}
Dates.formatf = function(param,params,culture) {
	$s.push("Dates::formatf");
	var $spos = $s.length;
	params = thx.culture.FormatParams.params(param,params,"D");
	var format = params.shift();
	switch(format) {
	case "D":
		var $tmp = function(d) {
			$s.push("Dates::formatf@25");
			var $spos = $s.length;
			var $tmp = thx.culture.FormatDate.date(d,culture);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	case "DS":
		var $tmp = function(d) {
			$s.push("Dates::formatf@27");
			var $spos = $s.length;
			var $tmp = thx.culture.FormatDate.dateShort(d,culture);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	case "DST":
		var $tmp = function(d) {
			$s.push("Dates::formatf@29");
			var $spos = $s.length;
			var $tmp = thx.culture.FormatDate.dateShort(d,culture) + " " + thx.culture.FormatDate.time(d,culture);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	case "DSTS":
		var $tmp = function(d) {
			$s.push("Dates::formatf@31");
			var $spos = $s.length;
			var $tmp = thx.culture.FormatDate.dateShort(d,culture) + " " + thx.culture.FormatDate.timeShort(d,culture);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	case "DTS":
		var $tmp = function(d) {
			$s.push("Dates::formatf@33");
			var $spos = $s.length;
			var $tmp = thx.culture.FormatDate.date(d,culture) + " " + thx.culture.FormatDate.timeShort(d,culture);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	case "Y":
		var $tmp = function(d) {
			$s.push("Dates::formatf@35");
			var $spos = $s.length;
			var $tmp = thx.culture.FormatDate.year(d,culture);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	case "YM":
		var $tmp = function(d) {
			$s.push("Dates::formatf@37");
			var $spos = $s.length;
			var $tmp = thx.culture.FormatDate.yearMonth(d,culture);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	case "M":
		var $tmp = function(d) {
			$s.push("Dates::formatf@39");
			var $spos = $s.length;
			var $tmp = thx.culture.FormatDate.month(d,culture);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	case "MN":
		var $tmp = function(d) {
			$s.push("Dates::formatf@41");
			var $spos = $s.length;
			var $tmp = thx.culture.FormatDate.monthName(d,culture);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	case "MS":
		var $tmp = function(d) {
			$s.push("Dates::formatf@43");
			var $spos = $s.length;
			var $tmp = thx.culture.FormatDate.monthNameShort(d,culture);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	case "MD":
		var $tmp = function(d) {
			$s.push("Dates::formatf@45");
			var $spos = $s.length;
			var $tmp = thx.culture.FormatDate.monthDay(d,culture);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	case "WD":
		var $tmp = function(d) {
			$s.push("Dates::formatf@47");
			var $spos = $s.length;
			var $tmp = thx.culture.FormatDate.weekDay(d,culture);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	case "WN":
		var $tmp = function(d) {
			$s.push("Dates::formatf@49");
			var $spos = $s.length;
			var $tmp = thx.culture.FormatDate.weekDayName(d,culture);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	case "WS":
		var $tmp = function(d) {
			$s.push("Dates::formatf@51");
			var $spos = $s.length;
			var $tmp = thx.culture.FormatDate.weekDayNameShort(d,culture);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	case "R":
		var $tmp = function(d) {
			$s.push("Dates::formatf@53");
			var $spos = $s.length;
			var $tmp = thx.culture.FormatDate.dateRfc(d,culture);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	case "DT":
		var $tmp = function(d) {
			$s.push("Dates::formatf@55");
			var $spos = $s.length;
			var $tmp = thx.culture.FormatDate.dateTime(d,culture);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	case "U":
		var $tmp = function(d) {
			$s.push("Dates::formatf@57");
			var $spos = $s.length;
			var $tmp = thx.culture.FormatDate.universal(d,culture);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	case "S":
		var $tmp = function(d) {
			$s.push("Dates::formatf@59");
			var $spos = $s.length;
			var $tmp = thx.culture.FormatDate.sortable(d,culture);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	case "T":
		var $tmp = function(d) {
			$s.push("Dates::formatf@61");
			var $spos = $s.length;
			var $tmp = thx.culture.FormatDate.time(d,culture);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	case "TS":
		var $tmp = function(d) {
			$s.push("Dates::formatf@63");
			var $spos = $s.length;
			var $tmp = thx.culture.FormatDate.timeShort(d,culture);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	case "C":
		var f = params[0];
		if(null == f) {
			var $tmp = function(d) {
				$s.push("Dates::formatf@67");
				var $spos = $s.length;
				var $tmp = thx.culture.FormatDate.date(d,culture);
				$s.pop();
				return $tmp;
				$s.pop();
			};
			$s.pop();
			return $tmp;
		} else {
			var $tmp = function(d) {
				$s.push("Dates::formatf@69");
				var $spos = $s.length;
				var $tmp = thx.culture.FormatDate.format(f,d,culture,params[1] != null?params[1] == "true":true);
				$s.pop();
				return $tmp;
				$s.pop();
			};
			$s.pop();
			return $tmp;
		}
		break;
	default:
		throw new thx.error.Error("Unsupported date format: {0}",null,format,{ fileName : "Dates.hx", lineNumber : 71, className : "Dates", methodName : "formatf"});
	}
	$s.pop();
}
Dates.interpolate = function(f,a,b,interpolator) {
	$s.push("Dates::interpolate");
	var $spos = $s.length;
	var $tmp = (Dates.interpolatef(a,b,interpolator))(f);
	$s.pop();
	return $tmp;
	$s.pop();
}
Dates.interpolatef = function(a,b,interpolator) {
	$s.push("Dates::interpolatef");
	var $spos = $s.length;
	var f = Floats.interpolatef(a.getTime(),b.getTime(),interpolator);
	var $tmp = function(v) {
		$s.push("Dates::interpolatef@83");
		var $spos = $s.length;
		var $tmp = Date.fromTime(f(v));
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
Dates.snap = function(time,period) {
	$s.push("Dates::snap");
	var $spos = $s.length;
	switch(period) {
	case "second":
		var $tmp = Math.round(time / 1000) * 1000;
		$s.pop();
		return $tmp;
	case "minute":
		var $tmp = Math.round(time / 60000) * 60000;
		$s.pop();
		return $tmp;
	case "hour":
		var $tmp = Math.round(time / 3600000) * 3600000;
		$s.pop();
		return $tmp;
	case "day":
		var $tmp = Math.round(time / 86400000) * 86400000;
		$s.pop();
		return $tmp;
	case "week":
		var $tmp = Math.round(time / 604800000) * 604800000;
		$s.pop();
		return $tmp;
	case "month":
		var d = Date.fromTime(time);
		var $tmp = new Date(d.getFullYear(),d.getMonth(),1,0,0,0).getTime();
		$s.pop();
		return $tmp;
	case "year":
		var d = Date.fromTime(time);
		var $tmp = new Date(d.getFullYear(),0,1,0,0,0).getTime();
		$s.pop();
		return $tmp;
	default:
		var $tmp = (function($this) {
			var $r;
			throw new thx.error.Error("unknown period '{0}'",null,period,{ fileName : "Dates.hx", lineNumber : 107, className : "Dates", methodName : "snap"});
			return $r;
		}(this));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Dates.snapToWeekDay = function(time,day) {
	$s.push("Dates::snapToWeekDay");
	var $spos = $s.length;
	var d = Date.fromTime(time).getDay();
	var s = 0;
	switch(day.toLowerCase()) {
	case "sunday":
		s = 0;
		break;
	case "monday":
		s = 1;
		break;
	case "tuesday":
		s = 2;
		break;
	case "wednesday":
		s = 3;
		break;
	case "thursday":
		s = 4;
		break;
	case "friday":
		s = 5;
		break;
	case "saturday":
		s = 6;
		break;
	default:
		throw new thx.error.Error("unknown week day '{0}'",null,day,{ fileName : "Dates.hx", lineNumber : 132, className : "Dates", methodName : "snapToWeekDay"});
	}
	var $tmp = time - (d - s) % 7 * 24 * 60 * 60 * 1000;
	$s.pop();
	return $tmp;
	$s.pop();
}
Dates.prototype.__class__ = Dates;
examples.Chord = function(cid) {
	if( cid === $_ ) return;
	$s.push("examples.Chord::new");
	var $spos = $s.length;
	Example.call(this,cid);
	$s.pop();
}
examples.Chord.__name__ = ["examples","Chord"];
examples.Chord.__super__ = Example;
for(var k in Example.prototype ) examples.Chord.prototype[k] = Example.prototype[k];
examples.Chord.prototype.update = null;
examples.Chord.prototype.fade = function(opacity) {
	$s.push("examples.Chord::fade");
	var $spos = $s.length;
	var me = this;
	var $tmp = function(d,i) {
		$s.push("examples.Chord::fade@20");
		var $spos = $s.length;
		me.update.filter(function(d1,_) {
			$s.push("examples.Chord::fade@20@23");
			var $spos = $s.length;
			var $tmp = d1.source.index != i && d1.target.index != i;
			$s.pop();
			return $tmp;
			$s.pop();
		}).transition().attr("opacity")["float"](opacity);
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
examples.Chord.prototype.groupTicks = function(d,i) {
	$s.push("examples.Chord::groupTicks");
	var $spos = $s.length;
	var k = (d.endAngle - d.startAngle) / d.value;
	var $tmp = Floats.range(0,d.value,1000).map(function(v,i1) {
		$s.push("examples.Chord::groupTicks@34");
		var $spos = $s.length;
		var $tmp = { angle : v * k + d.startAngle, label : 0 != i1 % 5?null:v / 1000 + "k"};
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
examples.Chord.prototype.runExample = function() {
	$s.push("examples.Chord::runExample");
	var $spos = $s.length;
	var chord = new thx.geom.layout.Chord().padding(0.05).sortSubgroups($closure(Floats,"descending")).matrix([[11975,5871,8916,2868],[1951,10048,2060,6171],[8010,16145,8090,8045],[1013,990,940,6907]]);
	var w = 600, h = 600, r0 = Math.min(w,h) * .41, r1 = r0 * 1.1;
	var fill = new thx.math.scale.Ordinal().domain(Ints.range(4)).range(["#000000","#FFDD89","#957244","#F26223"]);
	var data = chord.groups();
	var svg = this.container.append("svg:svg").attr("width")["float"](w).attr("height")["float"](h).append("svg:g").attr("transform").string("translate(" + w / 2 + "," + h / 2 + ")");
	var choice = svg.append("svg:g").selectAll("path").data(data);
	choice.enter().append("svg:path").attr("fill").stringf(function(d,i) {
		$s.push("examples.Chord::runExample@78");
		var $spos = $s.length;
		var $tmp = thx.color.Colors.parse(fill.scale(d.index)).toRgbString();
		$s.pop();
		return $tmp;
		$s.pop();
	}).attr("stroke").stringf(function(d,i) {
		$s.push("examples.Chord::runExample@79");
		var $spos = $s.length;
		var $tmp = thx.color.Colors.parse(fill.scale(d.index)).toRgbString();
		$s.pop();
		return $tmp;
		$s.pop();
	}).attr("d").stringf($closure(new thx.svg.Arc().innerRadius(r0).outerRadius(r1),"shape")).on("mouseover",this.fade(.1)).on("mouseout",this.fade(1));
	var ticks = svg.append("svg:g").selectAll("g").data(chord.groups()).enter().append("svg:g").selectAll("g").dataf($closure(this,"groupTicks")).enter().append("svg:g").attr("transform").stringf(function(d,i) {
		$s.push("examples.Chord::runExample@92");
		var $spos = $s.length;
		var $tmp = "rotate(" + (d.angle * 180 / Math.PI - 90) + ")" + "translate(" + r1 + ",0)";
		$s.pop();
		return $tmp;
		$s.pop();
	});
	ticks.append("svg:line").attr("x1")["float"](1).attr("y1")["float"](0).attr("x2")["float"](5).attr("y2")["float"](0).attr("stroke").string("#000");
	ticks.append("svg:text").attr("x")["float"](8).attr("dy").string(".35em").attr("text-anchor").stringf(function(d,i) {
		$s.push("examples.Chord::runExample@106");
		var $spos = $s.length;
		var $tmp = d.angle > Math.PI?"end":null;
		$s.pop();
		return $tmp;
		$s.pop();
	}).attr("transform").stringf(function(d,i) {
		$s.push("examples.Chord::runExample@109");
		var $spos = $s.length;
		var $tmp = d.angle > Math.PI?"rotate(180)translate(-16)":null;
		$s.pop();
		return $tmp;
		$s.pop();
	}).text().stringf(function(d,i) {
		$s.push("examples.Chord::runExample@112");
		var $spos = $s.length;
		var $tmp = d.label;
		$s.pop();
		return $tmp;
		$s.pop();
	});
	var chords = chord.chords();
	svg.append("svg:g").attr("class").string("chord").selectAll("path").data(chords).enter().append("svg:path").attr("fill").stringf(function(d,i) {
		$s.push("examples.Chord::runExample@121");
		var $spos = $s.length;
		var $tmp = fill.scale(d.target.index);
		$s.pop();
		return $tmp;
		$s.pop();
	}).attr("d").stringf($closure(thx.svg.Chord.pathObject().radius(r0),"shape")).attr("opacity")["float"](1);
	this.update = svg.selectAll("g.chord path").data(chords).update();
	$s.pop();
}
examples.Chord.prototype.description = function() {
	$s.push("examples.Chord::description");
	var $spos = $s.length;
	$s.pop();
	return "Chord Diagram from fixed values. Move the mouse over the circle permiter.";
	$s.pop();
}
examples.Chord.prototype.__class__ = examples.Chord;
examples.Line = function(cid) {
	if( cid === $_ ) return;
	$s.push("examples.Line::new");
	var $spos = $s.length;
	Example.call(this,cid);
	$s.pop();
}
examples.Line.__name__ = ["examples","Line"];
examples.Line.__super__ = Example;
for(var k in Example.prototype ) examples.Line.prototype[k] = Example.prototype[k];
examples.Line.prototype.runExample = function() {
	$s.push("examples.Line::runExample");
	var $spos = $s.length;
	var data = Ints.range(20).map(function(_,i) {
		$s.push("examples.Line::runExample@14");
		var $spos = $s.length;
		var $tmp = { x : i / 19, y : (Math.sin(i / 3) + 1) / 2};
		$s.pop();
		return $tmp;
		$s.pop();
	});
	var w = 450, h = 275, p = 20, x = new thx.math.scale.Linear().domain(0,1).range(0,w), y = new thx.math.scale.Linear().domain(0,1).range(h,0);
	var vis = this.container.append("svg:svg").attr("class").string("areaex").data([data]).update().attr("width")["float"](w + p * 2).attr("height")["float"](h + p * 2).append("svg:g").attr("transform").string("translate(" + p + "," + p + ")");
	var rules = vis.selectAll("g.rule").data(x.ticks()).enter().append("svg:g").attr("class").string("rule");
	rules.append("svg:line").attr("x1").floatf($closure(x,"scale")).attr("x2").floatf($closure(x,"scale")).attr("y1")["float"](0).attr("y2")["float"](h - 1);
	rules.append("svg:line").attr("class").stringf(function(d,i) {
		$s.push("examples.Line::runExample@47");
		var $spos = $s.length;
		var $tmp = d != 0?null:"axis";
		$s.pop();
		return $tmp;
		$s.pop();
	}).attr("y1").floatf($closure(y,"scale")).attr("y2").floatf($closure(y,"scale")).attr("x1")["float"](0).attr("x2")["float"](w + 1);
	rules.append("svg:text").attr("x").floatf($closure(x,"scale")).attr("y")["float"](h + 3).attr("dy").string(".71em").attr("text-anchor").string("middle").text().stringf($closure(x,"tickFormat"));
	rules.append("svg:text").attr("y").floatf($closure(y,"scale")).attr("x")["float"](-3).attr("dy").string(".35em").attr("text-anchor").string("end").text().stringf($closure(y,"tickFormat"));
	vis.append("svg:path").attr("class").string("line").attr("d").stringf($closure(thx.svg.Line.pointObject().x(function(d,_) {
		$s.push("examples.Line::runExample@70");
		var $spos = $s.length;
		var $tmp = x.scale(d.x);
		$s.pop();
		return $tmp;
		$s.pop();
	}).y(function(d,_) {
		$s.push("examples.Line::runExample@71");
		var $spos = $s.length;
		var $tmp = y.scale(d.y);
		$s.pop();
		return $tmp;
		$s.pop();
	}),"shape"));
	vis.selectAll("circle.line").data(data).enter().append("svg:circle").attr("class").string("line").attr("cx").floatf(function(d,_) {
		$s.push("examples.Line::runExample@80");
		var $spos = $s.length;
		var $tmp = x.scale(d.x);
		$s.pop();
		return $tmp;
		$s.pop();
	}).attr("cy").floatf(function(d,_) {
		$s.push("examples.Line::runExample@81");
		var $spos = $s.length;
		var $tmp = y.scale(d.y);
		$s.pop();
		return $tmp;
		$s.pop();
	}).attr("r")["float"](3.5);
	$s.pop();
}
examples.Line.prototype.description = function() {
	$s.push("examples.Line::description");
	var $spos = $s.length;
	$s.pop();
	return "Line chart. Not interactive.";
	$s.pop();
}
examples.Line.prototype.__class__ = examples.Line;
thx.culture.Language = function() { }
thx.culture.Language.__name__ = ["thx","culture","Language"];
thx.culture.Language.__super__ = thx.culture.Info;
for(var k in thx.culture.Info.prototype ) thx.culture.Language.prototype[k] = thx.culture.Info.prototype[k];
thx.culture.Language.languages = null;
thx.culture.Language.getLanguages = function() {
	$s.push("thx.culture.Language::getLanguages");
	var $spos = $s.length;
	if(null == thx.culture.Language.languages) thx.culture.Language.languages = new Hash();
	var $tmp = thx.culture.Language.languages;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.culture.Language.get = function(name) {
	$s.push("thx.culture.Language::get");
	var $spos = $s.length;
	var $tmp = thx.culture.Language.getLanguages().get(name.toLowerCase());
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.culture.Language.names = function() {
	$s.push("thx.culture.Language::names");
	var $spos = $s.length;
	var $tmp = thx.culture.Language.getLanguages().keys();
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.culture.Language.add = function(language) {
	$s.push("thx.culture.Language::add");
	var $spos = $s.length;
	if(!thx.culture.Language.getLanguages().exists(language.iso2)) thx.culture.Language.getLanguages().set(language.iso2,language);
	$s.pop();
}
thx.culture.Language.prototype.__class__ = thx.culture.Language;
if(!thx.languages) thx.languages = {}
thx.languages.En = function(p) {
	if( p === $_ ) return;
	$s.push("thx.languages.En::new");
	var $spos = $s.length;
	this.name = "en";
	this.english = "English";
	this["native"] = "English";
	this.iso2 = "en";
	this.iso3 = "eng";
	this.pluralRule = 1;
	thx.culture.Language.add(this);
	$s.pop();
}
thx.languages.En.__name__ = ["thx","languages","En"];
thx.languages.En.__super__ = thx.culture.Language;
for(var k in thx.culture.Language.prototype ) thx.languages.En.prototype[k] = thx.culture.Language.prototype[k];
thx.languages.En.language = null;
thx.languages.En.getLanguage = function() {
	$s.push("thx.languages.En::getLanguage");
	var $spos = $s.length;
	if(null == thx.languages.En.language) thx.languages.En.language = new thx.languages.En();
	var $tmp = thx.languages.En.language;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.languages.En.prototype.__class__ = thx.languages.En;
ValueType = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] }
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
Type = function() { }
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	$s.push("Type::getClass");
	var $spos = $s.length;
	if(o == null) {
		$s.pop();
		return null;
	}
	if(o.__enum__ != null) {
		$s.pop();
		return null;
	}
	var $tmp = o.__class__;
	$s.pop();
	return $tmp;
	$s.pop();
}
Type.getEnum = function(o) {
	$s.push("Type::getEnum");
	var $spos = $s.length;
	if(o == null) {
		$s.pop();
		return null;
	}
	var $tmp = o.__enum__;
	$s.pop();
	return $tmp;
	$s.pop();
}
Type.getSuperClass = function(c) {
	$s.push("Type::getSuperClass");
	var $spos = $s.length;
	var $tmp = c.__super__;
	$s.pop();
	return $tmp;
	$s.pop();
}
Type.getClassName = function(c) {
	$s.push("Type::getClassName");
	var $spos = $s.length;
	var a = c.__name__;
	var $tmp = a.join(".");
	$s.pop();
	return $tmp;
	$s.pop();
}
Type.getEnumName = function(e) {
	$s.push("Type::getEnumName");
	var $spos = $s.length;
	var a = e.__ename__;
	var $tmp = a.join(".");
	$s.pop();
	return $tmp;
	$s.pop();
}
Type.resolveClass = function(name) {
	$s.push("Type::resolveClass");
	var $spos = $s.length;
	var cl;
	try {
		cl = eval(name);
	} catch( e ) {
		$e = [];
		while($s.length >= $spos) $e.unshift($s.pop());
		$s.push($e[0]);
		cl = null;
	}
	if(cl == null || cl.__name__ == null) {
		$s.pop();
		return null;
	}
	$s.pop();
	return cl;
	$s.pop();
}
Type.resolveEnum = function(name) {
	$s.push("Type::resolveEnum");
	var $spos = $s.length;
	var e;
	try {
		e = eval(name);
	} catch( err ) {
		$e = [];
		while($s.length >= $spos) $e.unshift($s.pop());
		$s.push($e[0]);
		e = null;
	}
	if(e == null || e.__ename__ == null) {
		$s.pop();
		return null;
	}
	$s.pop();
	return e;
	$s.pop();
}
Type.createInstance = function(cl,args) {
	$s.push("Type::createInstance");
	var $spos = $s.length;
	if(args.length <= 3) {
		var $tmp = new cl(args[0],args[1],args[2]);
		$s.pop();
		return $tmp;
	}
	if(args.length > 8) throw "Too many arguments";
	var $tmp = new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	$s.pop();
	return $tmp;
	$s.pop();
}
Type.createEmptyInstance = function(cl) {
	$s.push("Type::createEmptyInstance");
	var $spos = $s.length;
	var $tmp = new cl($_);
	$s.pop();
	return $tmp;
	$s.pop();
}
Type.createEnum = function(e,constr,params) {
	$s.push("Type::createEnum");
	var $spos = $s.length;
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw "Constructor " + constr + " need parameters";
		var $tmp = f.apply(e,params);
		$s.pop();
		return $tmp;
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
	$s.pop();
	return f;
	$s.pop();
}
Type.createEnumIndex = function(e,index,params) {
	$s.push("Type::createEnumIndex");
	var $spos = $s.length;
	var c = e.__constructs__[index];
	if(c == null) throw index + " is not a valid enum constructor index";
	var $tmp = Type.createEnum(e,c,params);
	$s.pop();
	return $tmp;
	$s.pop();
}
Type.getInstanceFields = function(c) {
	$s.push("Type::getInstanceFields");
	var $spos = $s.length;
	var a = Reflect.fields(c.prototype);
	a.remove("__class__");
	$s.pop();
	return a;
	$s.pop();
}
Type.getClassFields = function(c) {
	$s.push("Type::getClassFields");
	var $spos = $s.length;
	var a = Reflect.fields(c);
	a.remove("__name__");
	a.remove("__interfaces__");
	a.remove("__super__");
	a.remove("prototype");
	$s.pop();
	return a;
	$s.pop();
}
Type.getEnumConstructs = function(e) {
	$s.push("Type::getEnumConstructs");
	var $spos = $s.length;
	var a = e.__constructs__;
	var $tmp = a.copy();
	$s.pop();
	return $tmp;
	$s.pop();
}
Type["typeof"] = function(v) {
	$s.push("Type::typeof");
	var $spos = $s.length;
	switch(typeof(v)) {
	case "boolean":
		var $tmp = ValueType.TBool;
		$s.pop();
		return $tmp;
	case "string":
		var $tmp = ValueType.TClass(String);
		$s.pop();
		return $tmp;
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) {
			var $tmp = ValueType.TInt;
			$s.pop();
			return $tmp;
		}
		var $tmp = ValueType.TFloat;
		$s.pop();
		return $tmp;
	case "object":
		if(v == null) {
			var $tmp = ValueType.TNull;
			$s.pop();
			return $tmp;
		}
		var e = v.__enum__;
		if(e != null) {
			var $tmp = ValueType.TEnum(e);
			$s.pop();
			return $tmp;
		}
		var c = v.__class__;
		if(c != null) {
			var $tmp = ValueType.TClass(c);
			$s.pop();
			return $tmp;
		}
		var $tmp = ValueType.TObject;
		$s.pop();
		return $tmp;
	case "function":
		if(v.__name__ != null) {
			var $tmp = ValueType.TObject;
			$s.pop();
			return $tmp;
		}
		var $tmp = ValueType.TFunction;
		$s.pop();
		return $tmp;
	case "undefined":
		var $tmp = ValueType.TNull;
		$s.pop();
		return $tmp;
	default:
		var $tmp = ValueType.TUnknown;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.enumEq = function(a,b) {
	$s.push("Type::enumEq");
	var $spos = $s.length;
	if(a == b) {
		$s.pop();
		return true;
	}
	try {
		if(a[0] != b[0]) {
			$s.pop();
			return false;
		}
		var _g1 = 2, _g = a.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(!Type.enumEq(a[i],b[i])) {
				$s.pop();
				return false;
			}
		}
		var e = a.__enum__;
		if(e != b.__enum__ || e == null) {
			$s.pop();
			return false;
		}
	} catch( e ) {
		$e = [];
		while($s.length >= $spos) $e.unshift($s.pop());
		$s.push($e[0]);
		$s.pop();
		return false;
	}
	$s.pop();
	return true;
	$s.pop();
}
Type.enumConstructor = function(e) {
	$s.push("Type::enumConstructor");
	var $spos = $s.length;
	var $tmp = e[0];
	$s.pop();
	return $tmp;
	$s.pop();
}
Type.enumParameters = function(e) {
	$s.push("Type::enumParameters");
	var $spos = $s.length;
	var $tmp = e.slice(2);
	$s.pop();
	return $tmp;
	$s.pop();
}
Type.enumIndex = function(e) {
	$s.push("Type::enumIndex");
	var $spos = $s.length;
	var $tmp = e[1];
	$s.pop();
	return $tmp;
	$s.pop();
}
Type.prototype.__class__ = Type;
examples.Moire = function(cid) {
	if( cid === $_ ) return;
	$s.push("examples.Moire::new");
	var $spos = $s.length;
	Example.call(this,cid);
	$s.pop();
}
examples.Moire.__name__ = ["examples","Moire"];
examples.Moire.__super__ = Example;
for(var k in Example.prototype ) examples.Moire.prototype[k] = Example.prototype[k];
examples.Moire.prototype.runExample = function() {
	$s.push("examples.Moire::runExample");
	var $spos = $s.length;
	var w = this.stageWidth(), h = 500;
	var svg = this.container.append("svg:svg").attr("width")["float"](w).attr("height")["float"](h).attr("pointer-events").string("all");
	svg.append("svg:g").selectAll("circle").data(Ints.range(110)).enter().append("svg:circle").attr("transform").string("translate(" + w / 2 + "," + h / 2 + ")").attr("r").floatf(function(d,i) {
		$s.push("examples.Moire::runExample@25");
		var $spos = $s.length;
		var $tmp = d * 5;
		$s.pop();
		return $tmp;
		$s.pop();
	});
	var circle = svg.append("svg:g").selectAll("circle").data(Ints.range(60)).enter().append("svg:circle").attr("transform").string("translate(" + w / 2 + "," + h / 2 + ")").attr("r").floatf(function(d,i) {
		$s.push("examples.Moire::runExample@32");
		var $spos = $s.length;
		var $tmp = d * 3;
		$s.pop();
		return $tmp;
		$s.pop();
	});
	svg.onNode("mousemove",function(n,i) {
		$s.push("examples.Moire::runExample@34");
		var $spos = $s.length;
		var mouse = thx.js.Svg.mouse(n), r = (Math.sqrt(mouse[0]) + 10) / 10;
		circle.attr("transform").string("translate(" + mouse + ")").attr("r").floatf(function(d,i1) {
			$s.push("examples.Moire::runExample@34@40");
			var $spos = $s.length;
			var $tmp = d * r;
			$s.pop();
			return $tmp;
			$s.pop();
		});
		$s.pop();
	});
	$s.pop();
}
examples.Moire.prototype.description = function() {
	$s.push("examples.Moire::description");
	var $spos = $s.length;
	$s.pop();
	return "Moire effect. Move the mouse over the circles.";
	$s.pop();
}
examples.Moire.prototype.__class__ = examples.Moire;
if(!thx.util) thx.util = {}
thx.util.Message = function(message,params,param) {
	if( message === $_ ) return;
	$s.push("thx.util.Message::new");
	var $spos = $s.length;
	this.message = message;
	if(null == params) this.params = []; else this.params = params;
	if(null != param) this.params.push(param);
	$s.pop();
}
thx.util.Message.__name__ = ["thx","util","Message"];
thx.util.Message.prototype.message = null;
thx.util.Message.prototype.params = null;
thx.util.Message.prototype.toString = function() {
	$s.push("thx.util.Message::toString");
	var $spos = $s.length;
	var $tmp = Strings.format(this.message,this.params);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.util.Message.prototype.translate = function(translator) {
	$s.push("thx.util.Message::translate");
	var $spos = $s.length;
	var $tmp = Strings.format(translator(this.message),this.params);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.util.Message.prototype.__class__ = thx.util.Message;
js.Boot = function() { }
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	$s.push("js.Boot::__unhtml");
	var $spos = $s.length;
	var $tmp = s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
	$s.pop();
	return $tmp;
	$s.pop();
}
js.Boot.__trace = function(v,i) {
	$s.push("js.Boot::__trace");
	var $spos = $s.length;
	var msg = i != null?i.fileName + ":" + i.lineNumber + ": ":"";
	msg += js.Boot.__unhtml(js.Boot.__string_rec(v,"")) + "<br/>";
	var d = document.getElementById("haxe:trace");
	if(d == null) alert("No haxe:trace element defined\n" + msg); else d.innerHTML += msg;
	$s.pop();
}
js.Boot.__clear_trace = function() {
	$s.push("js.Boot::__clear_trace");
	var $spos = $s.length;
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
	$s.pop();
}
js.Boot.__closure = function(o,f) {
	$s.push("js.Boot::__closure");
	var $spos = $s.length;
	var m = o[f];
	if(m == null) {
		$s.pop();
		return null;
	}
	var f1 = function() {
		$s.push("js.Boot::__closure@67");
		var $spos = $s.length;
		var $tmp = m.apply(o,arguments);
		$s.pop();
		return $tmp;
		$s.pop();
	};
	f1.scope = o;
	f1.method = m;
	$s.pop();
	return f1;
	$s.pop();
}
js.Boot.__string_rec = function(o,s) {
	$s.push("js.Boot::__string_rec");
	var $spos = $s.length;
	if(o == null) {
		$s.pop();
		return "null";
	}
	if(s.length >= 5) {
		$s.pop();
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ != null || o.__ename__ != null)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__ != null) {
				if(o.length == 2) {
					var $tmp = o[0];
					$s.pop();
					return $tmp;
				}
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2, _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				var $tmp = str + ")";
				$s.pop();
				return $tmp;
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				str += (i1 > 0?",":"") + js.Boot.__string_rec(o[i1],s);
			}
			str += "]";
			$s.pop();
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			$e = [];
			while($s.length >= $spos) $e.unshift($s.pop());
			$s.push($e[0]);
			$s.pop();
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				$s.pop();
				return s2;
			}
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		$s.pop();
		return str;
	case "function":
		$s.pop();
		return "<function>";
	case "string":
		$s.pop();
		return o;
	default:
		var $tmp = String(o);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.Boot.__interfLoop = function(cc,cl) {
	$s.push("js.Boot::__interfLoop");
	var $spos = $s.length;
	if(cc == null) {
		$s.pop();
		return false;
	}
	if(cc == cl) {
		$s.pop();
		return true;
	}
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) {
				$s.pop();
				return true;
			}
		}
	}
	var $tmp = js.Boot.__interfLoop(cc.__super__,cl);
	$s.pop();
	return $tmp;
	$s.pop();
}
js.Boot.__instanceof = function(o,cl) {
	$s.push("js.Boot::__instanceof");
	var $spos = $s.length;
	try {
		if(o instanceof cl) {
			if(cl == Array) {
				var $tmp = o.__enum__ == null;
				$s.pop();
				return $tmp;
			}
			$s.pop();
			return true;
		}
		if(js.Boot.__interfLoop(o.__class__,cl)) {
			$s.pop();
			return true;
		}
	} catch( e ) {
		$e = [];
		while($s.length >= $spos) $e.unshift($s.pop());
		$s.push($e[0]);
		if(cl == null) {
			$s.pop();
			return false;
		}
	}
	switch(cl) {
	case Int:
		var $tmp = Math.ceil(o%2147483648.0) === o;
		$s.pop();
		return $tmp;
	case Float:
		var $tmp = typeof(o) == "number";
		$s.pop();
		return $tmp;
	case Bool:
		var $tmp = o === true || o === false;
		$s.pop();
		return $tmp;
	case String:
		var $tmp = typeof(o) == "string";
		$s.pop();
		return $tmp;
	case Dynamic:
		$s.pop();
		return true;
	default:
		if(o == null) {
			$s.pop();
			return false;
		}
		var $tmp = o.__enum__ == cl || cl == Class && o.__name__ != null || cl == Enum && o.__ename__ != null;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.Boot.__init = function() {
	$s.push("js.Boot::__init");
	var $spos = $s.length;
	js.Lib.isIE = typeof document!='undefined' && document.all != null && typeof window!='undefined' && window.opera == null;
	js.Lib.isOpera = typeof window!='undefined' && window.opera != null;
	Array.prototype.copy = Array.prototype.slice;
	Array.prototype.insert = function(i,x) {
		$s.push("js.Boot::__init@205");
		var $spos = $s.length;
		this.splice(i,0,x);
		$s.pop();
	};
	Array.prototype.remove = Array.prototype.indexOf?function(obj) {
		$s.push("js.Boot::__init@208");
		var $spos = $s.length;
		var idx = this.indexOf(obj);
		if(idx == -1) {
			$s.pop();
			return false;
		}
		this.splice(idx,1);
		$s.pop();
		return true;
		$s.pop();
	}:function(obj) {
		$s.push("js.Boot::__init@213");
		var $spos = $s.length;
		var i = 0;
		var l = this.length;
		while(i < l) {
			if(this[i] == obj) {
				this.splice(i,1);
				$s.pop();
				return true;
			}
			i++;
		}
		$s.pop();
		return false;
		$s.pop();
	};
	Array.prototype.iterator = function() {
		$s.push("js.Boot::__init@225");
		var $spos = $s.length;
		var $tmp = { cur : 0, arr : this, hasNext : function() {
			$s.push("js.Boot::__init@225@229");
			var $spos = $s.length;
			var $tmp = this.cur < this.arr.length;
			$s.pop();
			return $tmp;
			$s.pop();
		}, next : function() {
			$s.push("js.Boot::__init@225@232");
			var $spos = $s.length;
			var $tmp = this.arr[this.cur++];
			$s.pop();
			return $tmp;
			$s.pop();
		}};
		$s.pop();
		return $tmp;
		$s.pop();
	};
	if(String.prototype.cca == null) String.prototype.cca = String.prototype.charCodeAt;
	String.prototype.charCodeAt = function(i) {
		$s.push("js.Boot::__init@239");
		var $spos = $s.length;
		var x = this.cca(i);
		if(x != x) {
			$s.pop();
			return null;
		}
		$s.pop();
		return x;
		$s.pop();
	};
	var oldsub = String.prototype.substr;
	String.prototype.substr = function(pos,len) {
		$s.push("js.Boot::__init@246");
		var $spos = $s.length;
		if(pos != null && pos != 0 && len != null && len < 0) {
			$s.pop();
			return "";
		}
		if(len == null) len = this.length;
		if(pos < 0) {
			pos = this.length + pos;
			if(pos < 0) pos = 0;
		} else if(len < 0) len = this.length + len - pos;
		var $tmp = oldsub.apply(this,[pos,len]);
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$closure = js.Boot.__closure;
	$s.pop();
}
js.Boot.prototype.__class__ = js.Boot;
thx.svg.Area = function(x,y0,y1,interpolator) {
	if( x === $_ ) return;
	$s.push("thx.svg.Area::new");
	var $spos = $s.length;
	this._x = x;
	this._y0 = y0;
	this._y1 = y1;
	this._interpolator = interpolator;
	$s.pop();
}
thx.svg.Area.__name__ = ["thx","svg","Area"];
thx.svg.Area.pointArray = function(interpolator) {
	$s.push("thx.svg.Area::pointArray");
	var $spos = $s.length;
	var $tmp = new thx.svg.Area(function(d,_) {
		$s.push("thx.svg.Area::pointArray@65");
		var $spos = $s.length;
		var $tmp = d[0];
		$s.pop();
		return $tmp;
		$s.pop();
	},function(d,_) {
		$s.push("thx.svg.Area::pointArray@65");
		var $spos = $s.length;
		var $tmp = d[1];
		$s.pop();
		return $tmp;
		$s.pop();
	},function(d,_) {
		$s.push("thx.svg.Area::pointArray@65");
		var $spos = $s.length;
		var $tmp = d[2];
		$s.pop();
		return $tmp;
		$s.pop();
	},interpolator);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Area.pointObject = function(interpolator) {
	$s.push("thx.svg.Area::pointObject");
	var $spos = $s.length;
	var $tmp = new thx.svg.Area(function(d,_) {
		$s.push("thx.svg.Area::pointObject@70");
		var $spos = $s.length;
		var $tmp = d.x;
		$s.pop();
		return $tmp;
		$s.pop();
	},function(d,_) {
		$s.push("thx.svg.Area::pointObject@70");
		var $spos = $s.length;
		var $tmp = d.y0;
		$s.pop();
		return $tmp;
		$s.pop();
	},function(d,_) {
		$s.push("thx.svg.Area::pointObject@70");
		var $spos = $s.length;
		var $tmp = d.y1;
		$s.pop();
		return $tmp;
		$s.pop();
	},interpolator);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Area.pointArray2 = function(interpolator) {
	$s.push("thx.svg.Area::pointArray2");
	var $spos = $s.length;
	var $tmp = new thx.svg.Area(function(d,_) {
		$s.push("thx.svg.Area::pointArray2@75");
		var $spos = $s.length;
		var $tmp = d[0];
		$s.pop();
		return $tmp;
		$s.pop();
	},function(_,_1) {
		$s.push("thx.svg.Area::pointArray2@75");
		var $spos = $s.length;
		$s.pop();
		return 0.0;
		$s.pop();
	},function(d,_) {
		$s.push("thx.svg.Area::pointArray2@75");
		var $spos = $s.length;
		var $tmp = d[1];
		$s.pop();
		return $tmp;
		$s.pop();
	},interpolator);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Area.pointObjectXY = function(interpolator) {
	$s.push("thx.svg.Area::pointObjectXY");
	var $spos = $s.length;
	var $tmp = new thx.svg.Area(function(d,_) {
		$s.push("thx.svg.Area::pointObjectXY@80");
		var $spos = $s.length;
		var $tmp = d.x;
		$s.pop();
		return $tmp;
		$s.pop();
	},function(_,_1) {
		$s.push("thx.svg.Area::pointObjectXY@80");
		var $spos = $s.length;
		$s.pop();
		return 0.0;
		$s.pop();
	},function(d,_) {
		$s.push("thx.svg.Area::pointObjectXY@80");
		var $spos = $s.length;
		var $tmp = d.y;
		$s.pop();
		return $tmp;
		$s.pop();
	},interpolator);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Area.prototype._x = null;
thx.svg.Area.prototype._y0 = null;
thx.svg.Area.prototype._y1 = null;
thx.svg.Area.prototype._interpolator = null;
thx.svg.Area.prototype.shape = function(data,i) {
	$s.push("thx.svg.Area::shape");
	var $spos = $s.length;
	var second = thx.svg.LineInternals.linePoints(data,this._x,this._y0);
	second.reverse();
	var $tmp = data.length < 1?null:"M" + thx.svg.LineInternals.interpolatePoints(thx.svg.LineInternals.linePoints(data,this._x,this._y1),this._interpolator) + "L" + thx.svg.LineInternals.interpolatePoints(second,this._interpolator) + "Z";
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Area.prototype.getInterpolator = function() {
	$s.push("thx.svg.Area::getInterpolator");
	var $spos = $s.length;
	var $tmp = this._interpolator;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Area.prototype.interpolator = function(type) {
	$s.push("thx.svg.Area::interpolator");
	var $spos = $s.length;
	this._interpolator = type;
	$s.pop();
	return this;
	$s.pop();
}
thx.svg.Area.prototype.getX = function() {
	$s.push("thx.svg.Area::getX");
	var $spos = $s.length;
	var $tmp = this._x;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Area.prototype.x = function(v) {
	$s.push("thx.svg.Area::x");
	var $spos = $s.length;
	this._x = v;
	$s.pop();
	return this;
	$s.pop();
}
thx.svg.Area.prototype.getY0 = function() {
	$s.push("thx.svg.Area::getY0");
	var $spos = $s.length;
	var $tmp = this._y0;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Area.prototype.y0 = function(v) {
	$s.push("thx.svg.Area::y0");
	var $spos = $s.length;
	this._y0 = v;
	$s.pop();
	return this;
	$s.pop();
}
thx.svg.Area.prototype.getY1 = function() {
	$s.push("thx.svg.Area::getY1");
	var $spos = $s.length;
	var $tmp = this._y1;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Area.prototype.y1 = function(v) {
	$s.push("thx.svg.Area::y1");
	var $spos = $s.length;
	this._y1 = v;
	$s.pop();
	return this;
	$s.pop();
}
thx.svg.Area.prototype.__class__ = thx.svg.Area;
examples.HelloWebkitTransition = function(cid) {
	if( cid === $_ ) return;
	$s.push("examples.HelloWebkitTransition::new");
	var $spos = $s.length;
	Example.call(this,cid);
	$s.pop();
}
examples.HelloWebkitTransition.__name__ = ["examples","HelloWebkitTransition"];
examples.HelloWebkitTransition.__super__ = Example;
for(var k in Example.prototype ) examples.HelloWebkitTransition.prototype[k] = Example.prototype[k];
examples.HelloWebkitTransition.prototype.transform = null;
examples.HelloWebkitTransition.prototype.runExample = function() {
	$s.push("examples.HelloWebkitTransition::runExample");
	var $spos = $s.length;
	var container = this.container;
	container.append("div").attr("id").string("cells");
	var n = 10;
	container.select("#cells").selectAll("div").data(Ints.range(n)).enter().append("div").attr("class").string("cell").style("left").stringf(function(d,i) {
		$s.push("examples.HelloWebkitTransition::runExample@33");
		var $spos = $s.length;
		var $tmp = i * 30 + "px";
		$s.pop();
		return $tmp;
		$s.pop();
	});
	this.transform = function() {
		$s.push("examples.HelloWebkitTransition::runExample@35");
		var $spos = $s.length;
		container.selectAll(".cell").data(Ints.range(n).map(function(d,i) {
			$s.push("examples.HelloWebkitTransition::runExample@35@38");
			var $spos = $s.length;
			var $tmp = Math.random();
			$s.pop();
			return $tmp;
			$s.pop();
		})).update().style("top").stringf(function(d,i) {
			$s.push("examples.HelloWebkitTransition::runExample@35@39");
			var $spos = $s.length;
			var $tmp = (1 - d) * 300 + "px";
			$s.pop();
			return $tmp;
			$s.pop();
		}).style("background-color").stringf(function(d,i) {
			$s.push("examples.HelloWebkitTransition::runExample@35@42");
			var $spos = $s.length;
			var $tmp = "rgb(" + Std["int"](d * 255) + ",50,100)";
			$s.pop();
			return $tmp;
			$s.pop();
		}).text().floatf(function(d,i) {
			$s.push("examples.HelloWebkitTransition::runExample@35@45");
			var $spos = $s.length;
			var $tmp = Std["int"](d * 100);
			$s.pop();
			return $tmp;
			$s.pop();
		});
		$s.pop();
	};
	this.transform();
	js.Lib.window.addEventListener("keypress",this.transform,false);
	$s.pop();
}
examples.HelloWebkitTransition.prototype.destroyExample = function() {
	$s.push("examples.HelloWebkitTransition::destroyExample");
	var $spos = $s.length;
	js.Lib.window.removeEventListener("keypress",this.transform,false);
	$s.pop();
}
examples.HelloWebkitTransition.prototype.description = function() {
	$s.push("examples.HelloWebkitTransition::description");
	var $spos = $s.length;
	$s.pop();
	return "Bar charts from random data. On Webkit browsers the bars are animated using CSS animation. Press a key to create a new set of random data.";
	$s.pop();
}
examples.HelloWebkitTransition.prototype.__class__ = examples.HelloWebkitTransition;
if(typeof haxe=='undefined') haxe = {}
haxe.Timer = function(time_ms) {
	if( time_ms === $_ ) return;
	$s.push("haxe.Timer::new");
	var $spos = $s.length;
	this.id = haxe.Timer.arr.length;
	haxe.Timer.arr[this.id] = this;
	this.timerId = window.setInterval("haxe.Timer.arr[" + this.id + "].run();",time_ms);
	$s.pop();
}
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.delay = function(f,time_ms) {
	$s.push("haxe.Timer::delay");
	var $spos = $s.length;
	var t = new haxe.Timer(time_ms);
	t.run = function() {
		$s.push("haxe.Timer::delay@78");
		var $spos = $s.length;
		t.stop();
		f();
		$s.pop();
	};
	$s.pop();
	return t;
	$s.pop();
}
haxe.Timer.measure = function(f,pos) {
	$s.push("haxe.Timer::measure");
	var $spos = $s.length;
	var t0 = haxe.Timer.stamp();
	var r = f();
	haxe.Log.trace(haxe.Timer.stamp() - t0 + "s",pos);
	$s.pop();
	return r;
	$s.pop();
}
haxe.Timer.stamp = function() {
	$s.push("haxe.Timer::stamp");
	var $spos = $s.length;
	var $tmp = Date.now().getTime() / 1000;
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Timer.prototype.id = null;
haxe.Timer.prototype.timerId = null;
haxe.Timer.prototype.stop = function() {
	$s.push("haxe.Timer::stop");
	var $spos = $s.length;
	if(this.id == null) {
		$s.pop();
		return;
	}
	window.clearInterval(this.timerId);
	haxe.Timer.arr[this.id] = null;
	if(this.id > 100 && this.id == haxe.Timer.arr.length - 1) {
		var p = this.id - 1;
		while(p >= 0 && haxe.Timer.arr[p] == null) p--;
		haxe.Timer.arr = haxe.Timer.arr.slice(0,p + 1);
	}
	this.id = null;
	$s.pop();
}
haxe.Timer.prototype.run = function() {
	$s.push("haxe.Timer::run");
	var $spos = $s.length;
	$s.pop();
}
haxe.Timer.prototype.__class__ = haxe.Timer;
thx.svg.Shape = function() { }
thx.svg.Shape.__name__ = ["thx","svg","Shape"];
thx.svg.Shape.prototype.apply = function(o,d) {
	$s.push("thx.svg.Shape::apply");
	var $spos = $s.length;
	if(null != d) {
		var _g = 0, _g1 = Reflect.fields(d);
		while(_g < _g1.length) {
			var field = _g1[_g];
			++_g;
			var f = Reflect.field(this,field);
			if(null == f) continue;
			if(Reflect.isFunction(f)) f.apply(o,[Reflect.field(d,field)]); else o[field] = Reflect.field(d,field);
		}
	}
	$s.pop();
}
thx.svg.Shape.prototype.shape = function(d,i) {
	$s.push("thx.svg.Shape::shape");
	var $spos = $s.length;
	this.apply(this,d);
	$s.pop();
	return "";
	$s.pop();
}
thx.svg.Shape.prototype.__class__ = thx.svg.Shape;
thx.svg.Arc = function(p) {
	if( p === $_ ) return;
	$s.push("thx.svg.Arc::new");
	var $spos = $s.length;
	this.r0 = 0;
	this.r1 = 1;
	this.a0 = 0;
	this.a1 = Math.PI;
	$s.pop();
}
thx.svg.Arc.__name__ = ["thx","svg","Arc"];
thx.svg.Arc.__super__ = thx.svg.Shape;
for(var k in thx.svg.Shape.prototype ) thx.svg.Arc.prototype[k] = thx.svg.Shape.prototype[k];
thx.svg.Arc.prototype.r0 = null;
thx.svg.Arc.prototype.r1 = null;
thx.svg.Arc.prototype.a0 = null;
thx.svg.Arc.prototype.a1 = null;
thx.svg.Arc.prototype.getInnerRadius = function() {
	$s.push("thx.svg.Arc::getInnerRadius");
	var $spos = $s.length;
	var $tmp = this.r0;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Arc.prototype.innerRadius = function(v) {
	$s.push("thx.svg.Arc::innerRadius");
	var $spos = $s.length;
	this.r0 = v;
	$s.pop();
	return this;
	$s.pop();
}
thx.svg.Arc.prototype.getOuterRadius = function() {
	$s.push("thx.svg.Arc::getOuterRadius");
	var $spos = $s.length;
	var $tmp = this.r0;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Arc.prototype.outerRadius = function(v) {
	$s.push("thx.svg.Arc::outerRadius");
	var $spos = $s.length;
	this.r1 = v;
	$s.pop();
	return this;
	$s.pop();
}
thx.svg.Arc.prototype.getStartAngle = function() {
	$s.push("thx.svg.Arc::getStartAngle");
	var $spos = $s.length;
	var $tmp = this.r0;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Arc.prototype.startAngle = function(v) {
	$s.push("thx.svg.Arc::startAngle");
	var $spos = $s.length;
	this.a0 = v;
	$s.pop();
	return this;
	$s.pop();
}
thx.svg.Arc.prototype.getEndAngle = function() {
	$s.push("thx.svg.Arc::getEndAngle");
	var $spos = $s.length;
	var $tmp = this.r0;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Arc.prototype.endAngle = function(v) {
	$s.push("thx.svg.Arc::endAngle");
	var $spos = $s.length;
	this.a1 = v;
	$s.pop();
	return this;
	$s.pop();
}
thx.svg.Arc.prototype.shape = function(d,i) {
	$s.push("thx.svg.Arc::shape");
	var $spos = $s.length;
	thx.svg.Shape.prototype.shape.call(this,d,i);
	var a0 = this.a0 + thx.svg.LineInternals.arcOffset, a1 = this.a1 + thx.svg.LineInternals.arcOffset, da = a1 - a0, df = da < Math.PI?"0":"1", c0 = Math.cos(a0), s0 = Math.sin(a0), c1 = Math.cos(a1), s1 = Math.sin(a1);
	var $tmp = da >= thx.svg.LineInternals.arcMax?this.r0 != 0?"M0," + this.r1 + "A" + this.r1 + "," + this.r1 + " 0 1,1 0," + -this.r1 + "A" + this.r1 + "," + this.r1 + " 0 1,1 0," + this.r1 + "M0," + this.r0 + "A" + this.r0 + "," + this.r0 + " 0 1,1 0," + -this.r0 + "A" + this.r0 + "," + this.r0 + " 0 1,1 0," + this.r0 + "Z":"M0," + this.r1 + "A" + this.r1 + "," + this.r1 + " 0 1,1 0," + -this.r1 + "A" + this.r1 + "," + this.r1 + " 0 1,1 0," + this.r1 + "Z":this.r0 != 0?"M" + this.r1 * c0 + "," + this.r1 * s0 + "A" + this.r1 + "," + this.r1 + " 0 " + df + ",1 " + this.r1 * c1 + "," + this.r1 * s1 + "L" + this.r0 * c1 + "," + this.r0 * s1 + "A" + this.r0 + "," + this.r0 + " 0 " + df + ",0 " + this.r0 * c0 + "," + this.r0 * s0 + "Z":"M" + this.r1 * c0 + "," + this.r1 * s0 + "A" + this.r1 + "," + this.r1 + " 0 " + df + ",1 " + this.r1 * c1 + "," + this.r1 * s1 + "L0,0" + "Z";
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Arc.prototype.centroid = function() {
	$s.push("thx.svg.Arc::centroid");
	var $spos = $s.length;
	var r = (this.r0 + this.r1) / 2, a = (this.a0 + this.a1) / 2 + thx.svg.LineInternals.arcOffset;
	var $tmp = [Math.cos(a) * r,Math.sin(a) * r];
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Arc.prototype.__class__ = thx.svg.Arc;
thx.svg.Chord = function(source,target,radius,startAngle,endAngle) {
	if( source === $_ ) return;
	$s.push("thx.svg.Chord::new");
	var $spos = $s.length;
	this._source = source;
	this._target = target;
	this._radius = radius;
	this._startAngle = startAngle;
	this._endAngle = endAngle;
	$s.pop();
}
thx.svg.Chord.__name__ = ["thx","svg","Chord"];
thx.svg.Chord.pathObject = function() {
	$s.push("thx.svg.Chord::pathObject");
	var $spos = $s.length;
	var $tmp = new thx.svg.Chord(function(d,_) {
		$s.push("thx.svg.Chord::pathObject@130");
		var $spos = $s.length;
		var $tmp = d.source;
		$s.pop();
		return $tmp;
		$s.pop();
	},function(d,_) {
		$s.push("thx.svg.Chord::pathObject@131");
		var $spos = $s.length;
		var $tmp = d.target;
		$s.pop();
		return $tmp;
		$s.pop();
	},function(d,_) {
		$s.push("thx.svg.Chord::pathObject@132");
		var $spos = $s.length;
		var $tmp = d.radius;
		$s.pop();
		return $tmp;
		$s.pop();
	},function(d,_) {
		$s.push("thx.svg.Chord::pathObject@133");
		var $spos = $s.length;
		var $tmp = d.startAngle;
		$s.pop();
		return $tmp;
		$s.pop();
	},function(d,_) {
		$s.push("thx.svg.Chord::pathObject@134");
		var $spos = $s.length;
		var $tmp = d.endAngle;
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Chord.prototype._source = null;
thx.svg.Chord.prototype._target = null;
thx.svg.Chord.prototype._radius = null;
thx.svg.Chord.prototype._startAngle = null;
thx.svg.Chord.prototype._endAngle = null;
thx.svg.Chord.prototype.shape = function(d,i) {
	$s.push("thx.svg.Chord::shape");
	var $spos = $s.length;
	var s = this.subgroup(this._source,d,i), t = this.subgroup(this._target,d,i);
	var $tmp = "M" + s.p0 + this.arc(s.r,s.p1) + (this.equals(s,t)?this.curve(s.r,s.p1,s.r,s.p0):this.curve(s.r,s.p1,t.r,t.p0) + this.arc(t.r,t.p1) + this.curve(t.r,t.p1,s.r,s.p0)) + "Z";
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Chord.prototype.subgroup = function(f,d,i) {
	$s.push("thx.svg.Chord::subgroup");
	var $spos = $s.length;
	var sub = f(d,i), r = this._radius(sub,i), a0 = this._startAngle(sub,i) + thx.svg.LineInternals.arcOffset, a1 = this._endAngle(sub,i) + thx.svg.LineInternals.arcOffset;
	var $tmp = { r : r, a0 : a0, a1 : a1, p0 : [r * Math.cos(a0),r * Math.sin(a0)], p1 : [r * Math.cos(a1),r * Math.sin(a1)]};
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Chord.prototype.equals = function(a,b) {
	$s.push("thx.svg.Chord::equals");
	var $spos = $s.length;
	var $tmp = a.a0 == b.a0 && a.a1 == b.a1;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Chord.prototype.arc = function(r,p) {
	$s.push("thx.svg.Chord::arc");
	var $spos = $s.length;
	var $tmp = "A" + r + "," + r + " 0 0,1 " + p;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Chord.prototype.curve = function(r0,p0,r1,p1) {
	$s.push("thx.svg.Chord::curve");
	var $spos = $s.length;
	var $tmp = "Q 0,0 " + p1;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Chord.prototype.getSource = function() {
	$s.push("thx.svg.Chord::getSource");
	var $spos = $s.length;
	var $tmp = this._source;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Chord.prototype.source = function(v) {
	$s.push("thx.svg.Chord::source");
	var $spos = $s.length;
	this._source = function(_,_1) {
		$s.push("thx.svg.Chord::source@70");
		var $spos = $s.length;
		$s.pop();
		return v;
		$s.pop();
	};
	$s.pop();
	return this;
	$s.pop();
}
thx.svg.Chord.prototype.sourcef = function(v) {
	$s.push("thx.svg.Chord::sourcef");
	var $spos = $s.length;
	this._source = v;
	$s.pop();
	return this;
	$s.pop();
}
thx.svg.Chord.prototype.getTarget = function() {
	$s.push("thx.svg.Chord::getTarget");
	var $spos = $s.length;
	var $tmp = this._target;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Chord.prototype.target = function(v) {
	$s.push("thx.svg.Chord::target");
	var $spos = $s.length;
	this._target = function(_,_1) {
		$s.push("thx.svg.Chord::target@82");
		var $spos = $s.length;
		$s.pop();
		return v;
		$s.pop();
	};
	$s.pop();
	return this;
	$s.pop();
}
thx.svg.Chord.prototype.targetf = function(v) {
	$s.push("thx.svg.Chord::targetf");
	var $spos = $s.length;
	this._target = v;
	$s.pop();
	return this;
	$s.pop();
}
thx.svg.Chord.prototype.getRadius = function() {
	$s.push("thx.svg.Chord::getRadius");
	var $spos = $s.length;
	var $tmp = this._radius;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Chord.prototype.radius = function(v) {
	$s.push("thx.svg.Chord::radius");
	var $spos = $s.length;
	this._radius = function(_,_1) {
		$s.push("thx.svg.Chord::radius@94");
		var $spos = $s.length;
		$s.pop();
		return v;
		$s.pop();
	};
	$s.pop();
	return this;
	$s.pop();
}
thx.svg.Chord.prototype.radiusf = function(v) {
	$s.push("thx.svg.Chord::radiusf");
	var $spos = $s.length;
	this._radius = v;
	$s.pop();
	return this;
	$s.pop();
}
thx.svg.Chord.prototype.getStartAngle = function() {
	$s.push("thx.svg.Chord::getStartAngle");
	var $spos = $s.length;
	var $tmp = this._startAngle;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Chord.prototype.startAngle = function(v) {
	$s.push("thx.svg.Chord::startAngle");
	var $spos = $s.length;
	this._startAngle = function(_,_1) {
		$s.push("thx.svg.Chord::startAngle@106");
		var $spos = $s.length;
		$s.pop();
		return v;
		$s.pop();
	};
	$s.pop();
	return this;
	$s.pop();
}
thx.svg.Chord.prototype.startAnglef = function(v) {
	$s.push("thx.svg.Chord::startAnglef");
	var $spos = $s.length;
	this._startAngle = v;
	$s.pop();
	return this;
	$s.pop();
}
thx.svg.Chord.prototype.getEndAngle = function() {
	$s.push("thx.svg.Chord::getEndAngle");
	var $spos = $s.length;
	var $tmp = this._endAngle;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Chord.prototype.endAngle = function(v) {
	$s.push("thx.svg.Chord::endAngle");
	var $spos = $s.length;
	this._endAngle = function(_,_1) {
		$s.push("thx.svg.Chord::endAngle@118");
		var $spos = $s.length;
		$s.pop();
		return v;
		$s.pop();
	};
	$s.pop();
	return this;
	$s.pop();
}
thx.svg.Chord.prototype.endAnglef = function(v) {
	$s.push("thx.svg.Chord::endAnglef");
	var $spos = $s.length;
	this._endAngle = v;
	$s.pop();
	return this;
	$s.pop();
}
thx.svg.Chord.prototype.__class__ = thx.svg.Chord;
IntHash = function(p) {
	if( p === $_ ) return;
	$s.push("IntHash::new");
	var $spos = $s.length;
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
	$s.pop();
}
IntHash.__name__ = ["IntHash"];
IntHash.prototype.h = null;
IntHash.prototype.set = function(key,value) {
	$s.push("IntHash::set");
	var $spos = $s.length;
	this.h[key] = value;
	$s.pop();
}
IntHash.prototype.get = function(key) {
	$s.push("IntHash::get");
	var $spos = $s.length;
	var $tmp = this.h[key];
	$s.pop();
	return $tmp;
	$s.pop();
}
IntHash.prototype.exists = function(key) {
	$s.push("IntHash::exists");
	var $spos = $s.length;
	var $tmp = this.h[key] != null;
	$s.pop();
	return $tmp;
	$s.pop();
}
IntHash.prototype.remove = function(key) {
	$s.push("IntHash::remove");
	var $spos = $s.length;
	if(this.h[key] == null) {
		$s.pop();
		return false;
	}
	delete(this.h[key]);
	$s.pop();
	return true;
	$s.pop();
}
IntHash.prototype.keys = function() {
	$s.push("IntHash::keys");
	var $spos = $s.length;
	var a = new Array();
	for( x in this.h ) a.push(x);
	var $tmp = a.iterator();
	$s.pop();
	return $tmp;
	$s.pop();
}
IntHash.prototype.iterator = function() {
	$s.push("IntHash::iterator");
	var $spos = $s.length;
	var $tmp = { ref : this.h, it : this.keys(), hasNext : function() {
		$s.push("IntHash::iterator@66");
		var $spos = $s.length;
		var $tmp = this.it.hasNext();
		$s.pop();
		return $tmp;
		$s.pop();
	}, next : function() {
		$s.push("IntHash::iterator@67");
		var $spos = $s.length;
		var i = this.it.next();
		var $tmp = this.ref[i];
		$s.pop();
		return $tmp;
		$s.pop();
	}};
	$s.pop();
	return $tmp;
	$s.pop();
}
IntHash.prototype.toString = function() {
	$s.push("IntHash::toString");
	var $spos = $s.length;
	var s = new StringBuf();
	s.b[s.b.length] = "{";
	var it = this.keys();
	while( it.hasNext() ) {
		var i = it.next();
		s.b[s.b.length] = i;
		s.b[s.b.length] = " => ";
		s.b[s.b.length] = Std.string(this.get(i));
		if(it.hasNext()) s.b[s.b.length] = ", ";
	}
	s.b[s.b.length] = "}";
	var $tmp = s.b.join("");
	$s.pop();
	return $tmp;
	$s.pop();
}
IntHash.prototype.__class__ = IntHash;
thx.svg.LineInternals = function() { }
thx.svg.LineInternals.__name__ = ["thx","svg","LineInternals"];
thx.svg.LineInternals.linePoints = function(data,x,y) {
	$s.push("thx.svg.LineInternals::linePoints");
	var $spos = $s.length;
	var points = [], i = -1, n = data.length, fx = null != x, fy = null != y, value;
	while(++i < n) points.push([x(value = data[i],i),y(value,i)]);
	$s.pop();
	return points;
	$s.pop();
}
thx.svg.LineInternals.interpolatePoints = function(points,type) {
	$s.push("thx.svg.LineInternals::interpolatePoints");
	var $spos = $s.length;
	if(null == type) type = thx.svg.LineInterpolator.Linear;
	var path = [], i = 0, n = points.length, p = points[0];
	var $e = (type);
	switch( $e[1] ) {
	case 0:
		path.push(p[0] + "," + p[1]);
		while(++i < n) {
			p = points[i];
			path.push("L" + p[0] + "," + p[1]);
		}
		break;
	case 1:
		path.push(p[0] + "," + p[1]);
		while(++i < n) {
			p = points[i];
			path.push("V" + p[1] + "H" + p[0]);
		}
		break;
	case 2:
		path.push(p[0] + "," + p[1]);
		while(++i < n) {
			p = points[i];
			path.push("H" + p[0] + "V" + p[1]);
		}
		break;
	case 3:
		if(points.length < 3) {
			var $tmp = thx.svg.LineInternals.interpolatePoints(points,thx.svg.LineInterpolator.Linear);
			$s.pop();
			return $tmp;
		}
		i = 1;
		var x0 = p[0], y0 = p[1], px = [x0,x0,x0,(p = points[1])[0]], py = [y0,y0,y0,p[1]];
		path.push(x0 + "," + y0);
		thx.svg.LineInternals._lineBasisBezier(path,px,py);
		while(++i < n) {
			p = points[i];
			px.shift();
			px.push(p[0]);
			py.shift();
			py.push(p[1]);
			thx.svg.LineInternals._lineBasisBezier(path,px,py);
		}
		i = -1;
		while(++i < 2) {
			px.shift();
			px.push(p[0]);
			py.shift();
			py.push(p[1]);
			thx.svg.LineInternals._lineBasisBezier(path,px,py);
		}
		break;
	case 4:
		i = -1;
		var m = n + 4, px = [], py = [];
		while(++i < 4) {
			p = points[i % n];
			px.push(p[0]);
			py.push(p[1]);
		}
		path.push(thx.svg.LineInternals._lineDot4(thx.svg.LineInternals._lineBasisBezier3,px) + "," + thx.svg.LineInternals._lineDot4(thx.svg.LineInternals._lineBasisBezier3,py));
		--i;
		while(++i < m) {
			p = points[i % n];
			px.shift();
			px.push(p[0]);
			py.shift();
			py.push(p[1]);
			thx.svg.LineInternals._lineBasisBezier(path,px,py);
		}
		break;
	case 5:
		var tension = $e[2];
		if(null == tension) tension = .7;
		if(points.length < 3) {
			var $tmp = thx.svg.LineInternals.interpolatePoints(points,thx.svg.LineInterpolator.Linear);
			$s.pop();
			return $tmp;
		} else {
			var $tmp = points[0] + thx.svg.LineInternals._lineHermite(points,thx.svg.LineInternals._lineCardinalTangents(points,tension));
			$s.pop();
			return $tmp;
		}
		break;
	case 6:
		var tension = $e[2];
		if(null == tension) tension = .7;
		var $tmp = points.length < 3?thx.svg.LineInternals.interpolatePoints(points,thx.svg.LineInterpolator.Linear):points[0] + thx.svg.LineInternals._lineHermite(points,thx.svg.LineInternals._lineCardinalTangents([points[points.length - 2]].concat(points).concat([points[1]]),tension));
		$s.pop();
		return $tmp;
	}
	var $tmp = path.join("");
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.LineInternals._lineDot4 = function(a,b) {
	$s.push("thx.svg.LineInternals::_lineDot4");
	var $spos = $s.length;
	var $tmp = a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.LineInternals._lineBasisBezier = function(path,x,y) {
	$s.push("thx.svg.LineInternals::_lineBasisBezier");
	var $spos = $s.length;
	path.push("C" + thx.svg.LineInternals._lineDot4(thx.svg.LineInternals._lineBasisBezier1,x) + "," + thx.svg.LineInternals._lineDot4(thx.svg.LineInternals._lineBasisBezier1,y) + "," + thx.svg.LineInternals._lineDot4(thx.svg.LineInternals._lineBasisBezier2,x) + "," + thx.svg.LineInternals._lineDot4(thx.svg.LineInternals._lineBasisBezier2,y) + "," + thx.svg.LineInternals._lineDot4(thx.svg.LineInternals._lineBasisBezier3,x) + "," + thx.svg.LineInternals._lineDot4(thx.svg.LineInternals._lineBasisBezier3,y));
	$s.pop();
}
thx.svg.LineInternals._lineHermite = function(points,tangents) {
	$s.push("thx.svg.LineInternals::_lineHermite");
	var $spos = $s.length;
	if(tangents.length < 1 || points.length != tangents.length && points.length != tangents.length + 2) {
		var $tmp = thx.svg.LineInternals.interpolatePoints(points,thx.svg.LineInterpolator.Linear);
		$s.pop();
		return $tmp;
	}
	var quad = points.length != tangents.length, path = "", p0 = points[0], p = points[1], t0 = tangents[0], t = t0, pi = 1;
	if(quad) {
		path += "Q" + (p[0] - t0[0] * 2 / 3) + "," + (p[1] - t0[1] * 2 / 3) + "," + p[0] + "," + p[1];
		p0 = points[1];
		pi = 2;
	}
	if(tangents.length > 1) {
		t = tangents[1];
		p = points[pi];
		pi++;
		path += "C" + (p0[0] + t0[0]) + "," + (p0[1] + t0[1]) + "," + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
		var _g1 = 2, _g = tangents.length;
		while(_g1 < _g) {
			var i = _g1++;
			p = points[pi];
			t = tangents[i];
			path += "S" + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
			pi++;
		}
	}
	if(quad) {
		var lp = points[pi];
		path += "Q" + (p[0] + t[0] * 2 / 3) + "," + (p[1] + t[1] * 2 / 3) + "," + lp[0] + "," + lp[1];
	}
	$s.pop();
	return path;
	$s.pop();
}
thx.svg.LineInternals._lineCardinalTangents = function(points,tension) {
	$s.push("thx.svg.LineInternals::_lineCardinalTangents");
	var $spos = $s.length;
	var tangents = [], a = (1 - tension) / 2, p0 = points[0], p1 = points[1], p2 = points[2], i = 2, n = points.length;
	while(++i < n) {
		tangents.push([a * (p2[0] - p0[0]),a * (p2[1] - p0[1])]);
		p0 = p1;
		p1 = p2;
		p2 = points[i];
	}
	tangents.push([a * (p2[0] - p0[0]),a * (p2[1] - p0[1])]);
	$s.pop();
	return tangents;
	$s.pop();
}
thx.svg.LineInternals.prototype.__class__ = thx.svg.LineInternals;
Hash = function(p) {
	if( p === $_ ) return;
	$s.push("Hash::new");
	var $spos = $s.length;
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
	$s.pop();
}
Hash.__name__ = ["Hash"];
Hash.prototype.h = null;
Hash.prototype.set = function(key,value) {
	$s.push("Hash::set");
	var $spos = $s.length;
	this.h["$" + key] = value;
	$s.pop();
}
Hash.prototype.get = function(key) {
	$s.push("Hash::get");
	var $spos = $s.length;
	var $tmp = this.h["$" + key];
	$s.pop();
	return $tmp;
	$s.pop();
}
Hash.prototype.exists = function(key) {
	$s.push("Hash::exists");
	var $spos = $s.length;
	try {
		key = "$" + key;
		var $tmp = this.hasOwnProperty.call(this.h,key);
		$s.pop();
		return $tmp;
	} catch( e ) {
		$e = [];
		while($s.length >= $spos) $e.unshift($s.pop());
		$s.push($e[0]);
		for(var i in this.h) if( i == key ) return true;
		$s.pop();
		return false;
	}
	$s.pop();
}
Hash.prototype.remove = function(key) {
	$s.push("Hash::remove");
	var $spos = $s.length;
	if(!this.exists(key)) {
		$s.pop();
		return false;
	}
	delete(this.h["$" + key]);
	$s.pop();
	return true;
	$s.pop();
}
Hash.prototype.keys = function() {
	$s.push("Hash::keys");
	var $spos = $s.length;
	var a = new Array();
	for(var i in this.h) a.push(i.substr(1));
	var $tmp = a.iterator();
	$s.pop();
	return $tmp;
	$s.pop();
}
Hash.prototype.iterator = function() {
	$s.push("Hash::iterator");
	var $spos = $s.length;
	var $tmp = { ref : this.h, it : this.keys(), hasNext : function() {
		$s.push("Hash::iterator@75");
		var $spos = $s.length;
		var $tmp = this.it.hasNext();
		$s.pop();
		return $tmp;
		$s.pop();
	}, next : function() {
		$s.push("Hash::iterator@76");
		var $spos = $s.length;
		var i = this.it.next();
		var $tmp = this.ref["$" + i];
		$s.pop();
		return $tmp;
		$s.pop();
	}};
	$s.pop();
	return $tmp;
	$s.pop();
}
Hash.prototype.toString = function() {
	$s.push("Hash::toString");
	var $spos = $s.length;
	var s = new StringBuf();
	s.b[s.b.length] = "{";
	var it = this.keys();
	while( it.hasNext() ) {
		var i = it.next();
		s.b[s.b.length] = i;
		s.b[s.b.length] = " => ";
		s.b[s.b.length] = Std.string(this.get(i));
		if(it.hasNext()) s.b[s.b.length] = ", ";
	}
	s.b[s.b.length] = "}";
	var $tmp = s.b.join("");
	$s.pop();
	return $tmp;
	$s.pop();
}
Hash.prototype.__class__ = Hash;
thx.color.NamedColors = function() { }
thx.color.NamedColors.__name__ = ["thx","color","NamedColors"];
thx.color.NamedColors.aliceblue = null;
thx.color.NamedColors.antiquewhite = null;
thx.color.NamedColors.aqua = null;
thx.color.NamedColors.aquamarine = null;
thx.color.NamedColors.azure = null;
thx.color.NamedColors.beige = null;
thx.color.NamedColors.bisque = null;
thx.color.NamedColors.black = null;
thx.color.NamedColors.blanchedalmond = null;
thx.color.NamedColors.blue = null;
thx.color.NamedColors.blueviolet = null;
thx.color.NamedColors.brown = null;
thx.color.NamedColors.burlywood = null;
thx.color.NamedColors.cadetblue = null;
thx.color.NamedColors.chartreuse = null;
thx.color.NamedColors.chocolate = null;
thx.color.NamedColors.coral = null;
thx.color.NamedColors.cornflowerblue = null;
thx.color.NamedColors.cornsilk = null;
thx.color.NamedColors.crimson = null;
thx.color.NamedColors.cyan = null;
thx.color.NamedColors.darkblue = null;
thx.color.NamedColors.darkcyan = null;
thx.color.NamedColors.darkgoldenrod = null;
thx.color.NamedColors.darkgray = null;
thx.color.NamedColors.darkgreen = null;
thx.color.NamedColors.darkgrey = null;
thx.color.NamedColors.darkkhaki = null;
thx.color.NamedColors.darkmagenta = null;
thx.color.NamedColors.darkolivegreen = null;
thx.color.NamedColors.darkorange = null;
thx.color.NamedColors.darkorchid = null;
thx.color.NamedColors.darkred = null;
thx.color.NamedColors.darksalmon = null;
thx.color.NamedColors.darkseagreen = null;
thx.color.NamedColors.darkslateblue = null;
thx.color.NamedColors.darkslategray = null;
thx.color.NamedColors.darkslategrey = null;
thx.color.NamedColors.darkturquoise = null;
thx.color.NamedColors.darkviolet = null;
thx.color.NamedColors.deeppink = null;
thx.color.NamedColors.deepskyblue = null;
thx.color.NamedColors.dimgray = null;
thx.color.NamedColors.dimgrey = null;
thx.color.NamedColors.dodgerblue = null;
thx.color.NamedColors.firebrick = null;
thx.color.NamedColors.floralwhite = null;
thx.color.NamedColors.forestgreen = null;
thx.color.NamedColors.fuchsia = null;
thx.color.NamedColors.gainsboro = null;
thx.color.NamedColors.ghostwhite = null;
thx.color.NamedColors.gold = null;
thx.color.NamedColors.goldenrod = null;
thx.color.NamedColors.gray = null;
thx.color.NamedColors.green = null;
thx.color.NamedColors.greenyellow = null;
thx.color.NamedColors.grey = null;
thx.color.NamedColors.honeydew = null;
thx.color.NamedColors.hotpink = null;
thx.color.NamedColors.indianred = null;
thx.color.NamedColors.indigo = null;
thx.color.NamedColors.ivory = null;
thx.color.NamedColors.khaki = null;
thx.color.NamedColors.lavender = null;
thx.color.NamedColors.lavenderblush = null;
thx.color.NamedColors.lawngreen = null;
thx.color.NamedColors.lemonchiffon = null;
thx.color.NamedColors.lightblue = null;
thx.color.NamedColors.lightcoral = null;
thx.color.NamedColors.lightcyan = null;
thx.color.NamedColors.lightgoldenrodyellow = null;
thx.color.NamedColors.lightgray = null;
thx.color.NamedColors.lightgreen = null;
thx.color.NamedColors.lightgrey = null;
thx.color.NamedColors.lightpink = null;
thx.color.NamedColors.lightsalmon = null;
thx.color.NamedColors.lightseagreen = null;
thx.color.NamedColors.lightskyblue = null;
thx.color.NamedColors.lightslategray = null;
thx.color.NamedColors.lightslategrey = null;
thx.color.NamedColors.lightsteelblue = null;
thx.color.NamedColors.lightyellow = null;
thx.color.NamedColors.lime = null;
thx.color.NamedColors.limegreen = null;
thx.color.NamedColors.linen = null;
thx.color.NamedColors.magenta = null;
thx.color.NamedColors.maroon = null;
thx.color.NamedColors.mediumaquamarine = null;
thx.color.NamedColors.mediumblue = null;
thx.color.NamedColors.mediumorchid = null;
thx.color.NamedColors.mediumpurple = null;
thx.color.NamedColors.mediumseagreen = null;
thx.color.NamedColors.mediumslateblue = null;
thx.color.NamedColors.mediumspringgreen = null;
thx.color.NamedColors.mediumturquoise = null;
thx.color.NamedColors.mediumvioletred = null;
thx.color.NamedColors.midnightblue = null;
thx.color.NamedColors.mintcream = null;
thx.color.NamedColors.mistyrose = null;
thx.color.NamedColors.moccasin = null;
thx.color.NamedColors.navajowhite = null;
thx.color.NamedColors.navy = null;
thx.color.NamedColors.oldlace = null;
thx.color.NamedColors.olive = null;
thx.color.NamedColors.olivedrab = null;
thx.color.NamedColors.orange = null;
thx.color.NamedColors.orangered = null;
thx.color.NamedColors.orchid = null;
thx.color.NamedColors.palegoldenrod = null;
thx.color.NamedColors.palegreen = null;
thx.color.NamedColors.paleturquoise = null;
thx.color.NamedColors.palevioletred = null;
thx.color.NamedColors.papayawhip = null;
thx.color.NamedColors.peachpuff = null;
thx.color.NamedColors.peru = null;
thx.color.NamedColors.pink = null;
thx.color.NamedColors.plum = null;
thx.color.NamedColors.powderblue = null;
thx.color.NamedColors.purple = null;
thx.color.NamedColors.red = null;
thx.color.NamedColors.rosybrown = null;
thx.color.NamedColors.royalblue = null;
thx.color.NamedColors.saddlebrown = null;
thx.color.NamedColors.salmon = null;
thx.color.NamedColors.sandybrown = null;
thx.color.NamedColors.seagreen = null;
thx.color.NamedColors.seashell = null;
thx.color.NamedColors.sienna = null;
thx.color.NamedColors.silver = null;
thx.color.NamedColors.skyblue = null;
thx.color.NamedColors.slateblue = null;
thx.color.NamedColors.slategray = null;
thx.color.NamedColors.slategrey = null;
thx.color.NamedColors.snow = null;
thx.color.NamedColors.springgreen = null;
thx.color.NamedColors.steelblue = null;
thx.color.NamedColors.tan = null;
thx.color.NamedColors.teal = null;
thx.color.NamedColors.thistle = null;
thx.color.NamedColors.tomato = null;
thx.color.NamedColors.turquoise = null;
thx.color.NamedColors.violet = null;
thx.color.NamedColors.wheat = null;
thx.color.NamedColors.white = null;
thx.color.NamedColors.whitesmoke = null;
thx.color.NamedColors.yellow = null;
thx.color.NamedColors.yellowgreen = null;
thx.color.NamedColors.byName = null;
thx.color.NamedColors.prototype.__class__ = thx.color.NamedColors;
if(!thx.error) thx.error = {}
thx.error.Error = function(message,params,param,pos) {
	if( message === $_ ) return;
	$s.push("thx.error.Error::new");
	var $spos = $s.length;
	thx.util.Message.call(this,message,params,param);
	this.pos = pos;
	$s.pop();
}
thx.error.Error.__name__ = ["thx","error","Error"];
thx.error.Error.__super__ = thx.util.Message;
for(var k in thx.util.Message.prototype ) thx.error.Error.prototype[k] = thx.util.Message.prototype[k];
thx.error.Error.prototype.pos = null;
thx.error.Error.prototype.inner = null;
thx.error.Error.prototype.setInner = function(inner) {
	$s.push("thx.error.Error::setInner");
	var $spos = $s.length;
	this.inner = inner;
	$s.pop();
	return this;
	$s.pop();
}
thx.error.Error.prototype.toString = function() {
	$s.push("thx.error.Error::toString");
	var $spos = $s.length;
	try {
		var $tmp = Strings.format(this.message,this.params);
		$s.pop();
		return $tmp;
	} catch( e ) {
		$e = [];
		while($s.length >= $spos) $e.unshift($s.pop());
		$s.push($e[0]);
		var ps = this.pos.className + "." + this.pos.methodName + "(" + this.pos.lineNumber + ")";
		var pa;
		if(0 == this.params.length) pa = "no parameters passed"; else pa = "wrong parameters passed ({0})";
		haxe.Log.trace("wrong parameters passed (" + this.params.join(", ") + ") for pattern '" + this.message + "' at " + ps,{ fileName : "Error.hx", lineNumber : 39, className : "thx.error.Error", methodName : "toString"});
		$s.pop();
		return "";
	}
	$s.pop();
}
thx.error.Error.prototype.__class__ = thx.error.Error;
thx.error.AbstractMethod = function(posInfo) {
	if( posInfo === $_ ) return;
	$s.push("thx.error.AbstractMethod::new");
	var $spos = $s.length;
	thx.error.Error.call(this,"method {0}.{1}() is abstract",[posInfo.className,posInfo.methodName],posInfo,{ fileName : "AbstractMethod.hx", lineNumber : 14, className : "thx.error.AbstractMethod", methodName : "new"});
	$s.pop();
}
thx.error.AbstractMethod.__name__ = ["thx","error","AbstractMethod"];
thx.error.AbstractMethod.__super__ = thx.error.Error;
for(var k in thx.error.Error.prototype ) thx.error.AbstractMethod.prototype[k] = thx.error.Error.prototype[k];
thx.error.AbstractMethod.prototype.__class__ = thx.error.AbstractMethod;
if(!thx.xml) thx.xml = {}
thx.xml.Namespace = function() { }
thx.xml.Namespace.__name__ = ["thx","xml","Namespace"];
thx.xml.Namespace.qualify = function(name) {
	$s.push("thx.xml.Namespace::qualify");
	var $spos = $s.length;
	var i = name.indexOf(":");
	if(i < 0) {
		$s.pop();
		return null;
	} else {
		var space = thx.xml.Namespace.prefix.get(name.substr(0,i));
		if(null == space) throw new thx.error.Error("unable to find a namespace for {0}",[space],null,{ fileName : "Namespace.hx", lineNumber : 29, className : "thx.xml.Namespace", methodName : "qualify"});
		var $tmp = new thx.xml.NSQualifier(space,name.substr(i + 1));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
thx.xml.Namespace.prototype.__class__ = thx.xml.Namespace;
thx.xml.NSQualifier = function(space,local) {
	if( space === $_ ) return;
	$s.push("thx.xml.NSQualifier::new");
	var $spos = $s.length;
	this.space = space;
	this.local = local;
	$s.pop();
}
thx.xml.NSQualifier.__name__ = ["thx","xml","NSQualifier"];
thx.xml.NSQualifier.prototype.space = null;
thx.xml.NSQualifier.prototype.local = null;
thx.xml.NSQualifier.prototype.__class__ = thx.xml.NSQualifier;
thx.math.Ease = function() { }
thx.math.Ease.__name__ = ["thx","math","Ease"];
thx.math.Ease.mode = function(easemode,f) {
	$s.push("thx.math.Ease::mode");
	var $spos = $s.length;
	if(null == f) f = $closure(thx.math.Equations,"cubic");
	if(null == easemode) easemode = thx.math.EaseMode.EaseIn;
	switch( (easemode)[1] ) {
	case 0:
		$s.pop();
		return f;
	case 1:
		var $tmp = function(t) {
			$s.push("thx.math.Ease::mode@18");
			var $spos = $s.length;
			var $tmp = 1 - f(1 - t);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	case 2:
		var $tmp = function(t) {
			$s.push("thx.math.Ease::mode@20");
			var $spos = $s.length;
			var $tmp = .5 * (t < .5?f(2 * t):2 - f(2 - 2 * t));
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	case 3:
		var $tmp = thx.math.Ease.mode(thx.math.EaseMode.EaseInEaseOut,thx.math.Ease.mode(thx.math.EaseMode.EaseOut,f));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
thx.math.Ease.prototype.__class__ = thx.math.Ease;
StringBuf = function(p) {
	if( p === $_ ) return;
	$s.push("StringBuf::new");
	var $spos = $s.length;
	this.b = new Array();
	$s.pop();
}
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype.add = function(x) {
	$s.push("StringBuf::add");
	var $spos = $s.length;
	this.b[this.b.length] = x;
	$s.pop();
}
StringBuf.prototype.addSub = function(s,pos,len) {
	$s.push("StringBuf::addSub");
	var $spos = $s.length;
	this.b[this.b.length] = s.substr(pos,len);
	$s.pop();
}
StringBuf.prototype.addChar = function(c) {
	$s.push("StringBuf::addChar");
	var $spos = $s.length;
	this.b[this.b.length] = String.fromCharCode(c);
	$s.pop();
}
StringBuf.prototype.toString = function() {
	$s.push("StringBuf::toString");
	var $spos = $s.length;
	var $tmp = this.b.join("");
	$s.pop();
	return $tmp;
	$s.pop();
}
StringBuf.prototype.b = null;
StringBuf.prototype.__class__ = StringBuf;
examples.Stream = function(cid) {
	if( cid === $_ ) return;
	$s.push("examples.Stream::new");
	var $spos = $s.length;
	Example.call(this,cid);
	$s.pop();
}
examples.Stream.__name__ = ["examples","Stream"];
examples.Stream.__super__ = Example;
for(var k in Example.prototype ) examples.Stream.prototype[k] = Example.prototype[k];
examples.Stream.prototype.data0 = null;
examples.Stream.prototype.data1 = null;
examples.Stream.prototype.area = null;
examples.Stream.prototype.runExample = function() {
	$s.push("examples.Stream::runExample");
	var $spos = $s.length;
	this.container.append("button").text().string("switch data").onNode("click",$closure(this,"transition"));
	this.container.append("br");
	var n = 20, m = 200, color = thx.color.Colors.interpolatef("#aad","#556");
	this.data0 = new thx.geom.layout.Stack().offset(thx.geom.layout.StackOffset.Wiggle).stack(examples.Streams.layers(n,m));
	this.data1 = new thx.geom.layout.Stack().offset(thx.geom.layout.StackOffset.Wiggle).stack(examples.Streams.layers(n,m));
	var w = this.stageWidth(), h = 500.0, mx = m - 1, my = Arrays.floatMax(this.data0.concat(this.data1),function(d) {
		$s.push("examples.Stream::runExample@34");
		var $spos = $s.length;
		var $tmp = Arrays.floatMax(d,function(d1) {
			$s.push("examples.Stream::runExample@34@35");
			var $spos = $s.length;
			var $tmp = d1.y0 + d1.y;
			$s.pop();
			return $tmp;
			$s.pop();
		});
		$s.pop();
		return $tmp;
		$s.pop();
	});
	this.area = new thx.svg.Area().x(function(d,i) {
		$s.push("examples.Stream::runExample@41");
		var $spos = $s.length;
		var $tmp = d.x * w / mx;
		$s.pop();
		return $tmp;
		$s.pop();
	}).y0(function(d,i) {
		$s.push("examples.Stream::runExample@42");
		var $spos = $s.length;
		var $tmp = h - d.y0 * h / my;
		$s.pop();
		return $tmp;
		$s.pop();
	}).y1(function(d,i) {
		$s.push("examples.Stream::runExample@43");
		var $spos = $s.length;
		var $tmp = h - (d.y + d.y0) * h / my;
		$s.pop();
		return $tmp;
		$s.pop();
	});
	var vis = this.container.append("svg:svg").attr("width")["float"](w).attr("height")["float"](h);
	vis.selectAll("path").data(this.data0).enter().append("svg:path").attr("fill").stringf(function(d,i) {
		$s.push("examples.Stream::runExample@53");
		var $spos = $s.length;
		var $tmp = color(Math.random());
		$s.pop();
		return $tmp;
		$s.pop();
	}).attr("d").stringf($closure(this.area,"shape"));
	$s.pop();
}
examples.Stream.prototype.transition = function(_,_1) {
	$s.push("examples.Stream::transition");
	var $spos = $s.length;
	var me = this;
	this.container.selectAllData("path").dataf(function(_2,_3) {
		$s.push("examples.Stream::transition@62");
		var $spos = $s.length;
		var d = me.data1;
		me.data1 = me.data0;
		var $tmp = me.data0 = d;
		$s.pop();
		return $tmp;
		$s.pop();
	}).update().transition().delay(null,500).duration(null,2500).attr("d").stringf(function(d,i) {
		$s.push("examples.Stream::transition@71");
		var $spos = $s.length;
		var $tmp = me.area.shape(d);
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
}
examples.Stream.prototype.description = function() {
	$s.push("examples.Stream::description");
	var $spos = $s.length;
	$s.pop();
	return "Stream chart. Datasets are randomly generated. Press the button to switch dataset.";
	$s.pop();
}
examples.Stream.prototype.__class__ = examples.Stream;
Strings = function() { }
Strings.__name__ = ["Strings"];
Strings.format = function(pattern,values,nullstring,culture) {
	$s.push("Strings::format");
	var $spos = $s.length;
	if(nullstring == null) nullstring = "null";
	var $tmp = (Strings.formatf(pattern,nullstring,culture))(values);
	$s.pop();
	return $tmp;
	if(null == values) values = [];
	var buf = new StringBuf();
	while(true) {
		if(!Strings._reFormat.match(pattern)) {
			buf.b[buf.b.length] = pattern;
			break;
		}
		var pos = Std.parseInt(Strings._reFormat.matched(1));
		var f = Strings._reFormat.matched(2);
		if(f == "") f = null;
		var p = null;
		var params = [];
		var _g = 3;
		while(_g < 20) {
			var i = _g++;
			p = Strings._reFormat.matched(i);
			if(p == null || p == "") break;
			params.push(thx.culture.FormatParams.cleanQuotes(p));
		}
		pattern = Strings._reFormat.matchedRight();
		buf.b[buf.b.length] = Strings._reFormat.matchedLeft();
		buf.b[buf.b.length] = Dynamics.format(values[pos],f,params,nullstring,culture);
	}
	var $tmp = buf.b.join("");
	$s.pop();
	return $tmp;
	$s.pop();
}
Strings.formatf = function(pattern,nullstring,culture) {
	$s.push("Strings::formatf");
	var $spos = $s.length;
	if(nullstring == null) nullstring = "null";
	var buf = [];
	while(true) {
		if(!Strings._reFormat.match(pattern)) {
			buf.push((function() {
				$s.push("Strings::formatf@142");
				var $spos = $s.length;
				var $tmp = function(_) {
					$s.push("Strings::formatf@142@142");
					var $spos = $s.length;
					$s.pop();
					return pattern;
					$s.pop();
				};
				$s.pop();
				return $tmp;
				$s.pop();
			})());
			break;
		}
		var pos = Std.parseInt(Strings._reFormat.matched(1));
		var f = [Strings._reFormat.matched(2)];
		if(f[0] == "") f[0] = null;
		var p = null;
		var params = [];
		var _g = 3;
		while(_g < 20) {
			var i = _g++;
			p = Strings._reFormat.matched(i);
			if(p == null || p == "") break;
			params.push(thx.culture.FormatParams.cleanQuotes(p));
		}
		var left = [Strings._reFormat.matchedLeft()];
		buf.push((function(left) {
			$s.push("Strings::formatf@160");
			var $spos = $s.length;
			var $tmp = function(_) {
				$s.push("Strings::formatf@160@160");
				var $spos = $s.length;
				var $tmp = left[0];
				$s.pop();
				return $tmp;
				$s.pop();
			};
			$s.pop();
			return $tmp;
			$s.pop();
		})(left));
		var df = [Dynamics.formatf(f[0],params,nullstring,culture)];
		buf.push(((function() {
			$s.push("Strings::formatf@162");
			var $spos = $s.length;
			var $tmp = function($t1,a1) {
				$s.push("Strings::formatf@162@162");
				var $spos = $s.length;
				var f = [$t1];
				var $tmp = (function(f) {
					$s.push("Strings::formatf@162@162@162");
					var $spos = $s.length;
					var $tmp = function(a2) {
						$s.push("Strings::formatf@162@162@162@162");
						var $spos = $s.length;
						var $tmp = f[0](a1,a2);
						$s.pop();
						return $tmp;
						$s.pop();
					};
					$s.pop();
					return $tmp;
					$s.pop();
				})(f);
				$s.pop();
				return $tmp;
				$s.pop();
			};
			$s.pop();
			return $tmp;
			$s.pop();
		})())((function(df) {
			$s.push("Strings::formatf@162");
			var $spos = $s.length;
			var $tmp = function(i,v) {
				$s.push("Strings::formatf@162@162");
				var $spos = $s.length;
				var $tmp = df[0](v[i]);
				$s.pop();
				return $tmp;
				$s.pop();
			};
			$s.pop();
			return $tmp;
			$s.pop();
		})(df),pos));
		pattern = Strings._reFormat.matchedRight();
	}
	var $tmp = function(values) {
		$s.push("Strings::formatf@165");
		var $spos = $s.length;
		if(null == values) values = [];
		var $tmp = buf.map(function(df,_) {
			$s.push("Strings::formatf@165@169");
			var $spos = $s.length;
			var $tmp = df(values);
			$s.pop();
			return $tmp;
			$s.pop();
		}).join("");
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
Strings.formatOne = function(v,param,params,culture) {
	$s.push("Strings::formatOne");
	var $spos = $s.length;
	var $tmp = (Strings.formatOnef(param,params,culture))(v);
	$s.pop();
	return $tmp;
	$s.pop();
}
Strings.formatOnef = function(param,params,culture) {
	$s.push("Strings::formatOnef");
	var $spos = $s.length;
	params = thx.culture.FormatParams.params(param,params,"S");
	var format = params.shift();
	switch(format) {
	case "S":
		var $tmp = function(v) {
			$s.push("Strings::formatOnef@185");
			var $spos = $s.length;
			$s.pop();
			return v;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	case "T":
		var len = params.length < 1?10:Std.parseInt(params[0]);
		var elipsis = params.length < 2?"...":params[1];
		var $tmp = function(v) {
			$s.push("Strings::formatOnef@189");
			var $spos = $s.length;
			if(v.length > len) {
				var $tmp = v.substr(0,len) + elipsis;
				$s.pop();
				return $tmp;
			} else {
				$s.pop();
				return v;
			}
			$s.pop();
		};
		$s.pop();
		return $tmp;
	case "PR":
		var len = params.length < 1?10:Std.parseInt(params[0]);
		var pad = params.length < 2?" ":params[1];
		var $tmp = function(v) {
			$s.push("Strings::formatOnef@201");
			var $spos = $s.length;
			var $tmp = StringTools.rpad(v,pad,len);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	case "PL":
		var len = params.length < 1?10:Std.parseInt(params[0]);
		var pad = params.length < 2?" ":params[1];
		var $tmp = function(v) {
			$s.push("Strings::formatOnef@205");
			var $spos = $s.length;
			var $tmp = StringTools.lpad(v,pad,len);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	default:
		var $tmp = (function($this) {
			var $r;
			throw "Unsupported string format: " + format;
			return $r;
		}(this));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Strings.upTo = function(value,searchFor) {
	$s.push("Strings::upTo");
	var $spos = $s.length;
	var pos = value.indexOf(searchFor);
	if(pos < 0) {
		$s.pop();
		return value;
	} else {
		var $tmp = value.substr(0,pos);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Strings.startFrom = function(value,searchFor) {
	$s.push("Strings::startFrom");
	var $spos = $s.length;
	var pos = value.indexOf(searchFor);
	if(pos < 0) {
		$s.pop();
		return value;
	} else {
		var $tmp = value.substr(pos + searchFor.length);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Strings.rtrim = function(value,charlist) {
	$s.push("Strings::rtrim");
	var $spos = $s.length;
	var len = value.length;
	while(len > 0) {
		var c = value.substr(len - 1,1);
		if(charlist.indexOf(c) < 0) break;
		len--;
	}
	var $tmp = value.substr(0,len);
	$s.pop();
	return $tmp;
	$s.pop();
}
Strings.ltrim = function(value,charlist) {
	$s.push("Strings::ltrim");
	var $spos = $s.length;
	var start = 0;
	while(start < value.length) {
		var c = value.substr(start,1);
		if(charlist.indexOf(c) < 0) break;
		start++;
	}
	var $tmp = value.substr(start);
	$s.pop();
	return $tmp;
	$s.pop();
}
Strings.trim = function(value,charlist) {
	$s.push("Strings::trim");
	var $spos = $s.length;
	var $tmp = Strings.rtrim(Strings.ltrim(value,charlist),charlist);
	$s.pop();
	return $tmp;
	$s.pop();
}
Strings.ucfirst = function(value) {
	$s.push("Strings::ucfirst");
	var $spos = $s.length;
	var $tmp = value == null?null:value.charAt(0).toUpperCase() + value.substr(1);
	$s.pop();
	return $tmp;
	$s.pop();
}
Strings.lcfirst = function(value) {
	$s.push("Strings::lcfirst");
	var $spos = $s.length;
	var $tmp = value == null?null:value.charAt(0).toLowerCase() + value.substr(1);
	$s.pop();
	return $tmp;
	$s.pop();
}
Strings.empty = function(value) {
	$s.push("Strings::empty");
	var $spos = $s.length;
	var $tmp = value == null || value == "";
	$s.pop();
	return $tmp;
	$s.pop();
}
Strings.isAlphaNum = function(value) {
	$s.push("Strings::isAlphaNum");
	var $spos = $s.length;
	var $tmp = value == null?false:Strings.__alphaNumPattern.match(value);
	$s.pop();
	return $tmp;
	$s.pop();
}
Strings.digitsOnly = function(value) {
	$s.push("Strings::digitsOnly");
	var $spos = $s.length;
	var $tmp = value == null?false:Strings.__digitsPattern.match(value);
	$s.pop();
	return $tmp;
	$s.pop();
}
Strings.ucwords = function(value) {
	$s.push("Strings::ucwords");
	var $spos = $s.length;
	var $tmp = Strings.__ucwordsPattern.customReplace(value == null?null:value.charAt(0).toUpperCase() + value.substr(1),$closure(Strings,"__upperMatch"));
	$s.pop();
	return $tmp;
	$s.pop();
}
Strings.ucwordsws = function(value) {
	$s.push("Strings::ucwordsws");
	var $spos = $s.length;
	var $tmp = Strings.__ucwordswsPattern.customReplace(value == null?null:value.charAt(0).toUpperCase() + value.substr(1),$closure(Strings,"__upperMatch"));
	$s.pop();
	return $tmp;
	$s.pop();
}
Strings.__upperMatch = function(re) {
	$s.push("Strings::__upperMatch");
	var $spos = $s.length;
	var $tmp = re.matched(0).toUpperCase();
	$s.pop();
	return $tmp;
	$s.pop();
}
Strings.humanize = function(s) {
	$s.push("Strings::humanize");
	var $spos = $s.length;
	var $tmp = StringTools.replace(Strings.underscore(s),"_"," ");
	$s.pop();
	return $tmp;
	$s.pop();
}
Strings.capitalize = function(s) {
	$s.push("Strings::capitalize");
	var $spos = $s.length;
	var $tmp = s.substr(0,1).toUpperCase() + s.substr(1);
	$s.pop();
	return $tmp;
	$s.pop();
}
Strings.succ = function(s) {
	$s.push("Strings::succ");
	var $spos = $s.length;
	var $tmp = s.substr(0,-1) + String.fromCharCode(s.substr(-1).charCodeAt(0) + 1);
	$s.pop();
	return $tmp;
	$s.pop();
}
Strings.underscore = function(s) {
	$s.push("Strings::underscore");
	var $spos = $s.length;
	s = new EReg("::","g").replace(s,"/");
	s = new EReg("([A-Z]+)([A-Z][a-z])","g").replace(s,"$1_$2");
	s = new EReg("([a-z\\d])([A-Z])","g").replace(s,"$1_$2");
	s = new EReg("-","g").replace(s,"_");
	var $tmp = s.toLowerCase();
	$s.pop();
	return $tmp;
	$s.pop();
}
Strings.dasherize = function(s) {
	$s.push("Strings::dasherize");
	var $spos = $s.length;
	var $tmp = StringTools.replace(s,"_","-");
	$s.pop();
	return $tmp;
	$s.pop();
}
Strings.repeat = function(s,times) {
	$s.push("Strings::repeat");
	var $spos = $s.length;
	var b = [];
	var _g = 0;
	while(_g < times) {
		var i = _g++;
		b.push(s);
	}
	var $tmp = b.join("");
	$s.pop();
	return $tmp;
	$s.pop();
}
Strings.wrapColumns = function(s,columns,indent,newline) {
	$s.push("Strings::wrapColumns");
	var $spos = $s.length;
	if(newline == null) newline = "\n";
	if(indent == null) indent = "";
	if(columns == null) columns = 78;
	var parts = Strings._reSplitWC.split(s);
	var result = [];
	var _g = 0;
	while(_g < parts.length) {
		var part = parts[_g];
		++_g;
		result.push(Strings._wrapColumns(StringTools.trim(Strings._reReduceWS.replace(part," ")),columns,indent,newline));
	}
	var $tmp = result.join(newline);
	$s.pop();
	return $tmp;
	$s.pop();
}
Strings._wrapColumns = function(s,columns,indent,newline) {
	$s.push("Strings::_wrapColumns");
	var $spos = $s.length;
	var parts = [];
	var pos = 0;
	var len = s.length;
	var ilen = indent.length;
	columns -= ilen;
	while(true) {
		if(pos + columns >= len - ilen) {
			parts.push(s.substr(pos));
			break;
		}
		var i = 0;
		while(!StringTools.isSpace(s,pos + columns - i) && i < columns) i++;
		if(i == columns) {
			i = 0;
			while(!StringTools.isSpace(s,pos + columns + i) && pos + columns + i < len) i++;
			parts.push(s.substr(pos,columns + i));
			pos += columns + i + 1;
		} else {
			parts.push(s.substr(pos,columns - i));
			pos += columns - i + 1;
		}
	}
	var $tmp = indent + parts.join(newline + indent);
	$s.pop();
	return $tmp;
	$s.pop();
}
Strings.stripTags = function(s) {
	$s.push("Strings::stripTags");
	var $spos = $s.length;
	var $tmp = Strings._reStripTags.replace(s,"");
	$s.pop();
	return $tmp;
	$s.pop();
}
Strings.ascending = function(a,b) {
	$s.push("Strings::ascending");
	var $spos = $s.length;
	var $tmp = a < b?-1:a > b?1:0;
	$s.pop();
	return $tmp;
	$s.pop();
}
Strings.descending = function(a,b) {
	$s.push("Strings::descending");
	var $spos = $s.length;
	var $tmp = a > b?-1:a < b?1:0;
	$s.pop();
	return $tmp;
	$s.pop();
}
Strings.interpolate = function(v,a,b,interpolator) {
	$s.push("Strings::interpolate");
	var $spos = $s.length;
	var $tmp = (Strings.interpolatef(a,b,interpolator))(v);
	$s.pop();
	return $tmp;
	$s.pop();
}
Strings.interpolatef = function(a,b,interpolator) {
	$s.push("Strings::interpolatef");
	var $spos = $s.length;
	var extract = function(value,s,f) {
		$s.push("Strings::interpolatef@453");
		var $spos = $s.length;
		while(Strings._reInterpolateNumber.match(value)) {
			var left = Strings._reInterpolateNumber.matchedLeft();
			if(!Strings.empty(left)) {
				s.push(left);
				f.push(null);
			}
			s.push(null);
			f.push(Std.parseFloat(Strings._reInterpolateNumber.matched(0)));
			value = Strings._reInterpolateNumber.matchedRight();
		}
		if(!Strings.empty(value)) {
			s.push(value);
			f.push(null);
		}
		$s.pop();
	};
	var sa = [], fa = [], sb = [], fb = [];
	extract(a,sa,fa);
	extract(b,sb,fb);
	var functions = [], i = 0;
	var min = Ints.min(sa.length,sb.length);
	while(i < min) {
		if(sa[i] != sb[i]) break;
		if(null == sa[i]) {
			if(fa[i] == fb[i]) {
				var s = ["" + fa[i]];
				functions.push((function(s) {
					$s.push("Strings::interpolatef@491");
					var $spos = $s.length;
					var $tmp = function(_) {
						$s.push("Strings::interpolatef@491@491");
						var $spos = $s.length;
						var $tmp = s[0];
						$s.pop();
						return $tmp;
						$s.pop();
					};
					$s.pop();
					return $tmp;
					$s.pop();
				})(s));
			} else {
				var f = [Floats.interpolatef(fa[i],fb[i],interpolator)];
				functions.push((function(f) {
					$s.push("Strings::interpolatef@494");
					var $spos = $s.length;
					var $tmp = function(t) {
						$s.push("Strings::interpolatef@494@494");
						var $spos = $s.length;
						var $tmp = "" + f[0](t);
						$s.pop();
						return $tmp;
						$s.pop();
					};
					$s.pop();
					return $tmp;
					$s.pop();
				})(f));
			}
		} else {
			var s = [sa[i]];
			functions.push((function(s) {
				$s.push("Strings::interpolatef@498");
				var $spos = $s.length;
				var $tmp = function(_) {
					$s.push("Strings::interpolatef@498@498");
					var $spos = $s.length;
					var $tmp = s[0];
					$s.pop();
					return $tmp;
					$s.pop();
				};
				$s.pop();
				return $tmp;
				$s.pop();
			})(s));
		}
		i++;
	}
	var rest = "";
	while(i < sb.length) {
		if(null != sb[i]) rest += sb[i]; else rest += fb[i];
		i++;
	}
	if("" != rest) functions.push(function(_) {
		$s.push("Strings::interpolatef@512");
		var $spos = $s.length;
		$s.pop();
		return rest;
		$s.pop();
	});
	var $tmp = function(t) {
		$s.push("Strings::interpolatef@513");
		var $spos = $s.length;
		var $tmp = functions.map(function(f,_) {
			$s.push("Strings::interpolatef@513@514");
			var $spos = $s.length;
			var $tmp = f(t);
			$s.pop();
			return $tmp;
			$s.pop();
		}).join("");
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
Strings.prototype.__class__ = Strings;
thx.js.AccessProperty = function(name,selection) {
	if( name === $_ ) return;
	$s.push("thx.js.AccessProperty::new");
	var $spos = $s.length;
	thx.js.Access.call(this,selection);
	this.name = name;
	$s.pop();
}
thx.js.AccessProperty.__name__ = ["thx","js","AccessProperty"];
thx.js.AccessProperty.__super__ = thx.js.Access;
for(var k in thx.js.Access.prototype ) thx.js.AccessProperty.prototype[k] = thx.js.Access.prototype[k];
thx.js.AccessProperty.prototype.name = null;
thx.js.AccessProperty.prototype.get = function() {
	$s.push("thx.js.AccessProperty::get");
	var $spos = $s.length;
	var n = this.name;
	var $tmp = this.selection.firstNode(function(node) {
		$s.push("thx.js.AccessProperty::get@21");
		var $spos = $s.length;
		var $tmp = Reflect.field(node,n);
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessProperty.prototype.remove = function() {
	$s.push("thx.js.AccessProperty::remove");
	var $spos = $s.length;
	var n = this.name;
	this.selection.eachNode(function(node,i) {
		$s.push("thx.js.AccessProperty::remove@27");
		var $spos = $s.length;
		Reflect.deleteField(node,n);
		$s.pop();
	});
	var $tmp = this.selection;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessProperty.prototype.string = function(v) {
	$s.push("thx.js.AccessProperty::string");
	var $spos = $s.length;
	var n = this.name;
	this.selection.eachNode(function(node,i) {
		$s.push("thx.js.AccessProperty::string@33");
		var $spos = $s.length;
		node[n] = v;
		$s.pop();
	});
	var $tmp = this.selection;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessProperty.prototype["float"] = function(v) {
	$s.push("thx.js.AccessProperty::float");
	var $spos = $s.length;
	var s = "" + v;
	var n = this.name;
	this.selection.eachNode(function(node,i) {
		$s.push("thx.js.AccessProperty::float@40");
		var $spos = $s.length;
		node[n] = s;
		$s.pop();
	});
	var $tmp = this.selection;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessProperty.prototype.__class__ = thx.js.AccessProperty;
thx.js.AccessDataProperty = function(name,selection) {
	if( name === $_ ) return;
	$s.push("thx.js.AccessDataProperty::new");
	var $spos = $s.length;
	thx.js.AccessProperty.call(this,name,selection);
	$s.pop();
}
thx.js.AccessDataProperty.__name__ = ["thx","js","AccessDataProperty"];
thx.js.AccessDataProperty.__super__ = thx.js.AccessProperty;
for(var k in thx.js.AccessProperty.prototype ) thx.js.AccessDataProperty.prototype[k] = thx.js.AccessProperty.prototype[k];
thx.js.AccessDataProperty.prototype.stringf = function(v) {
	$s.push("thx.js.AccessDataProperty::stringf");
	var $spos = $s.length;
	var n = this.name;
	this.selection.eachNode(function(node,i) {
		$s.push("thx.js.AccessDataProperty::stringf@55");
		var $spos = $s.length;
		var s = v(Reflect.field(node,"__data__"),i);
		if(null == s) Reflect.deleteField(node,n); else node[n] = s;
		$s.pop();
	});
	var $tmp = this.selection;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessDataProperty.prototype.floatf = function(v) {
	$s.push("thx.js.AccessDataProperty::floatf");
	var $spos = $s.length;
	var n = this.name;
	this.selection.eachNode(function(node,i) {
		$s.push("thx.js.AccessDataProperty::floatf@67");
		var $spos = $s.length;
		var s = v(Reflect.field(node,"__data__"),i);
		if(null == s) Reflect.deleteField(node,n); else node[n] = "" + s;
		$s.pop();
	});
	var $tmp = this.selection;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessDataProperty.prototype.data = function() {
	$s.push("thx.js.AccessDataProperty::data");
	var $spos = $s.length;
	var $tmp = this.stringf(function(d,_) {
		$s.push("thx.js.AccessDataProperty::data@79");
		var $spos = $s.length;
		var $tmp = "" + d;
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessDataProperty.prototype.__class__ = thx.js.AccessDataProperty;
examples.HelloEvent = function(cid) {
	if( cid === $_ ) return;
	$s.push("examples.HelloEvent::new");
	var $spos = $s.length;
	Example.call(this,cid);
	$s.pop();
}
examples.HelloEvent.__name__ = ["examples","HelloEvent"];
examples.HelloEvent.__super__ = Example;
for(var k in Example.prototype ) examples.HelloEvent.prototype[k] = Example.prototype[k];
examples.HelloEvent.prototype.text = null;
examples.HelloEvent.prototype.runExample = function() {
	$s.push("examples.HelloEvent::runExample");
	var $spos = $s.length;
	var data = [4,8,15,16,23,42], container = this.container;
	var click = function(d,i) {
		$s.push("examples.HelloEvent::runExample@23");
		var $spos = $s.length;
		haxe.Log.trace("click",{ fileName : "HelloEvent.hx", lineNumber : 24, className : "examples.HelloEvent", methodName : "runExample", customParams : [d,i]});
		$s.pop();
	};
	var mouseover = function(n,i) {
		$s.push("examples.HelloEvent::runExample@27");
		var $spos = $s.length;
		thx.js.Dom.selectNode(n).attr("fill").string("brown").attr("stroke").string("grey");
		$s.pop();
	};
	var mouseout = function(n,i) {
		$s.push("examples.HelloEvent::runExample@33");
		var $spos = $s.length;
		thx.js.Dom.selectNode(n).attr("fill").string("orange");
		$s.pop();
	};
	container.selectAll("svg").data(data).enter().append("svg:svg").attr("width")["float"](100).attr("height")["float"](100).append("svg:text").attr("x").string("50%").attr("y").string("50%").attr("dy").string(".35em").attr("text-anchor").string("middle").attr("fill").string("white").attr("stroke").string("black").attr("stroke-width")["float"](1.5).attr("cursor").string("pointer").style("font").string("36pt Comic Sans MS").style("text-shadow").string("3px 3px 3px rgba(0,0,0,.4)").text().data().onNode("click",click).onNode("mouseover",mouseover).onNode("mouseout",mouseout);
	$s.pop();
}
examples.HelloEvent.prototype.destroyExample = function() {
	$s.push("examples.HelloEvent::destroyExample");
	var $spos = $s.length;
	$s.pop();
}
examples.HelloEvent.prototype.description = function() {
	$s.push("examples.HelloEvent::description");
	var $spos = $s.length;
	$s.pop();
	return "Event sample. Reacts to mouseover, mouseout and click.";
	$s.pop();
}
examples.HelloEvent.prototype.__class__ = examples.HelloEvent;
thx.js.AccessText = function(selection) {
	if( selection === $_ ) return;
	$s.push("thx.js.AccessText::new");
	var $spos = $s.length;
	thx.js.Access.call(this,selection);
	$s.pop();
}
thx.js.AccessText.__name__ = ["thx","js","AccessText"];
thx.js.AccessText.__super__ = thx.js.Access;
for(var k in thx.js.Access.prototype ) thx.js.AccessText.prototype[k] = thx.js.Access.prototype[k];
thx.js.AccessText.prototype.get = function() {
	$s.push("thx.js.AccessText::get");
	var $spos = $s.length;
	var $tmp = this.selection.firstNode(function(node) {
		$s.push("thx.js.AccessText::get@16");
		var $spos = $s.length;
		var $tmp = node.textContent;
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessText.prototype.string = function(v) {
	$s.push("thx.js.AccessText::string");
	var $spos = $s.length;
	this.clear();
	this.selection.eachNode(function(node,_) {
		$s.push("thx.js.AccessText::string@22");
		var $spos = $s.length;
		node.textContent = v;
		$s.pop();
	});
	var $tmp = this.selection;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessText.prototype.clear = function() {
	$s.push("thx.js.AccessText::clear");
	var $spos = $s.length;
	this.selection.eachNode(function(node,i) {
		$s.push("thx.js.AccessText::clear@28");
		var $spos = $s.length;
		node.textContent = "";
		$s.pop();
	});
	var $tmp = this.selection;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessText.prototype["float"] = function(v) {
	$s.push("thx.js.AccessText::float");
	var $spos = $s.length;
	this.clear();
	this.selection.eachNode(function(node,_) {
		$s.push("thx.js.AccessText::float@35");
		var $spos = $s.length;
		node.textContent = "" + v;
		$s.pop();
	});
	var $tmp = this.selection;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessText.prototype.stringfNode = function(v) {
	$s.push("thx.js.AccessText::stringfNode");
	var $spos = $s.length;
	this.clear();
	this.selection.eachNode(function(node,i) {
		$s.push("thx.js.AccessText::stringfNode@42");
		var $spos = $s.length;
		var x = v(node,i);
		if(null != x) node.textContent = x;
		$s.pop();
	});
	var $tmp = this.selection;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessText.prototype.floatNode = function(v) {
	$s.push("thx.js.AccessText::floatNode");
	var $spos = $s.length;
	this.clear();
	this.selection.eachNode(function(node,i) {
		$s.push("thx.js.AccessText::floatNode@52");
		var $spos = $s.length;
		var x = v(node,i);
		if(null != x) node.textContent = "" + x;
		$s.pop();
	});
	var $tmp = this.selection;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessText.prototype.__class__ = thx.js.AccessText;
thx.js.AccessDataText = function(selection) {
	if( selection === $_ ) return;
	$s.push("thx.js.AccessDataText::new");
	var $spos = $s.length;
	thx.js.AccessText.call(this,selection);
	$s.pop();
}
thx.js.AccessDataText.__name__ = ["thx","js","AccessDataText"];
thx.js.AccessDataText.__super__ = thx.js.AccessText;
for(var k in thx.js.AccessText.prototype ) thx.js.AccessDataText.prototype[k] = thx.js.AccessText.prototype[k];
thx.js.AccessDataText.prototype.stringf = function(v) {
	$s.push("thx.js.AccessDataText::stringf");
	var $spos = $s.length;
	this.clear();
	this.selection.eachNode(function(node,i) {
		$s.push("thx.js.AccessDataText::stringf@70");
		var $spos = $s.length;
		var x = v(Reflect.field(node,"__data__"),i);
		if(null != x) node.textContent = x;
		$s.pop();
	});
	var $tmp = this.selection;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessDataText.prototype.floatf = function(v) {
	$s.push("thx.js.AccessDataText::floatf");
	var $spos = $s.length;
	this.clear();
	this.selection.eachNode(function(node,i) {
		$s.push("thx.js.AccessDataText::floatf@80");
		var $spos = $s.length;
		var x = v(Reflect.field(node,"__data__"),i);
		if(null != x) node.textContent = "" + x;
		$s.pop();
	});
	var $tmp = this.selection;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessDataText.prototype.data = function() {
	$s.push("thx.js.AccessDataText::data");
	var $spos = $s.length;
	var $tmp = this.stringf(function(d,_) {
		$s.push("thx.js.AccessDataText::data@89");
		var $spos = $s.length;
		var $tmp = "" + d;
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessDataText.prototype.__class__ = thx.js.AccessDataText;
thx.culture.FormatDate = function() { }
thx.culture.FormatDate.__name__ = ["thx","culture","FormatDate"];
thx.culture.FormatDate.format = function(pattern,date,culture,leadingspace) {
	$s.push("thx.culture.FormatDate::format");
	var $spos = $s.length;
	if(leadingspace == null) leadingspace = true;
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	var pos = 0;
	var len = pattern.length;
	var buf = new StringBuf();
	var info = culture.date;
	while(pos < len) {
		var c = pattern.charAt(pos);
		if(c != "%") {
			buf.b[buf.b.length] = c;
			pos++;
			continue;
		}
		pos++;
		c = pattern.charAt(pos);
		switch(c) {
		case "a":
			buf.b[buf.b.length] = info.abbrDays[date.getDay()];
			break;
		case "A":
			buf.b[buf.b.length] = info.days[date.getDay()];
			break;
		case "b":case "h":
			buf.b[buf.b.length] = info.abbrMonths[date.getMonth()];
			break;
		case "B":
			buf.b[buf.b.length] = info.months[date.getMonth()];
			break;
		case "c":
			buf.b[buf.b.length] = thx.culture.FormatDate.dateTime(date,culture);
			break;
		case "C":
			buf.b[buf.b.length] = thx.culture.FormatNumber.digits("" + Math.floor(date.getFullYear() / 100),culture);
			break;
		case "d":
			buf.b[buf.b.length] = thx.culture.FormatNumber.digits(StringTools.lpad("" + date.getDate(),"0",2),culture);
			break;
		case "D":
			buf.b[buf.b.length] = thx.culture.FormatDate.format("%m/%d/%y",date,culture);
			break;
		case "e":
			buf.b[buf.b.length] = thx.culture.FormatNumber.digits(leadingspace?StringTools.lpad("" + date.getDate()," ",2):"" + date.getDate(),culture);
			break;
		case "f":
			buf.b[buf.b.length] = thx.culture.FormatNumber.digits(leadingspace?StringTools.lpad("" + (date.getMonth() + 1)," ",2):"" + (date.getMonth() + 1),culture);
			break;
		case "G":
			throw "Not Implemented Yet";
			break;
		case "g":
			throw "Not Implemented Yet";
			break;
		case "H":
			buf.b[buf.b.length] = thx.culture.FormatNumber.digits(StringTools.lpad("" + date.getHours(),"0",2),culture);
			break;
		case "i":
			buf.b[buf.b.length] = thx.culture.FormatNumber.digits(leadingspace?StringTools.lpad("" + date.getMinutes()," ",2):"" + date.getMinutes(),culture);
			break;
		case "I":
			buf.b[buf.b.length] = thx.culture.FormatNumber.digits(StringTools.lpad("" + date.getHours() % 12,"0",2),culture);
			break;
		case "j":
			throw "Not Implemented Yet";
			break;
		case "k":
			buf.b[buf.b.length] = thx.culture.FormatNumber.digits(leadingspace?StringTools.lpad("" + date.getHours()," ",2):"" + date.getHours(),culture);
			break;
		case "l":
			buf.b[buf.b.length] = thx.culture.FormatNumber.digits(leadingspace?StringTools.lpad("" + date.getHours() % 12," ",2):"" + date.getHours() % 12,culture);
			break;
		case "m":
			buf.b[buf.b.length] = thx.culture.FormatNumber.digits(StringTools.lpad("" + (date.getMonth() + 1),"0",2),culture);
			break;
		case "M":
			buf.b[buf.b.length] = thx.culture.FormatNumber.digits(StringTools.lpad("" + date.getMinutes(),"0",2),culture);
			break;
		case "n":
			buf.b[buf.b.length] = "\n";
			break;
		case "p":
			buf.b[buf.b.length] = date.getHours() > 11?info.pm:info.am;
			break;
		case "P":
			buf.b[buf.b.length] = (date.getHours() > 11?info.pm:info.am).toLowerCase();
			break;
		case "q":
			buf.b[buf.b.length] = thx.culture.FormatNumber.digits(leadingspace?StringTools.lpad("" + date.getSeconds()," ",2):"" + date.getSeconds(),culture);
			break;
		case "r":
			buf.b[buf.b.length] = thx.culture.FormatDate.format("%I:%M:%S %p",date,culture);
			break;
		case "R":
			buf.b[buf.b.length] = thx.culture.FormatDate.format("%H:%M",date,culture);
			break;
		case "s":
			buf.b[buf.b.length] = "" + Std["int"](date.getTime() / 1000);
			break;
		case "S":
			buf.b[buf.b.length] = thx.culture.FormatNumber.digits(StringTools.lpad("" + date.getSeconds(),"0",2),culture);
			break;
		case "t":
			buf.b[buf.b.length] = "\t";
			break;
		case "T":
			buf.b[buf.b.length] = thx.culture.FormatDate.format("%H:%M:%S",date,culture);
			break;
		case "u":
			var d = date.getDay();
			buf.b[buf.b.length] = thx.culture.FormatNumber.digits(d == 0?"7":"" + d,culture);
			break;
		case "U":
			throw "Not Implemented Yet";
			break;
		case "V":
			throw "Not Implemented Yet";
			break;
		case "w":
			buf.b[buf.b.length] = thx.culture.FormatNumber.digits("" + date.getDay(),culture);
			break;
		case "W":
			throw "Not Implemented Yet";
			break;
		case "x":
			buf.b[buf.b.length] = thx.culture.FormatDate.date(date,culture);
			break;
		case "X":
			buf.b[buf.b.length] = thx.culture.FormatDate.time(date,culture);
			break;
		case "y":
			buf.b[buf.b.length] = thx.culture.FormatNumber.digits(("" + date.getFullYear()).substr(-2),culture);
			break;
		case "Y":
			buf.b[buf.b.length] = thx.culture.FormatNumber.digits("" + date.getFullYear(),culture);
			break;
		case "z":
			buf.b[buf.b.length] = "+0000";
			break;
		case "Z":
			buf.b[buf.b.length] = "GMT";
			break;
		case "%":
			buf.b[buf.b.length] = "%";
			break;
		default:
			buf.b[buf.b.length] = "%" + c;
		}
		pos++;
	}
	var $tmp = buf.b.join("");
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.culture.FormatDate.yearMonth = function(date,culture) {
	$s.push("thx.culture.FormatDate::yearMonth");
	var $spos = $s.length;
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	var $tmp = thx.culture.FormatDate.format(culture.date.patternYearMonth,date,culture,false);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.culture.FormatDate.monthDay = function(date,culture) {
	$s.push("thx.culture.FormatDate::monthDay");
	var $spos = $s.length;
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	var $tmp = thx.culture.FormatDate.format(culture.date.patternMonthDay,date,culture,false);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.culture.FormatDate.date = function(date,culture) {
	$s.push("thx.culture.FormatDate::date");
	var $spos = $s.length;
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	var $tmp = thx.culture.FormatDate.format(culture.date.patternDate,date,culture,false);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.culture.FormatDate.dateShort = function(date,culture) {
	$s.push("thx.culture.FormatDate::dateShort");
	var $spos = $s.length;
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	var $tmp = thx.culture.FormatDate.format(culture.date.patternDateShort,date,culture,false);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.culture.FormatDate.dateRfc = function(date,culture) {
	$s.push("thx.culture.FormatDate::dateRfc");
	var $spos = $s.length;
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	var $tmp = thx.culture.FormatDate.format(culture.date.patternDateRfc,date,culture,false);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.culture.FormatDate.dateTime = function(date,culture) {
	$s.push("thx.culture.FormatDate::dateTime");
	var $spos = $s.length;
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	var $tmp = thx.culture.FormatDate.format(culture.date.patternDateTime,date,culture,false);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.culture.FormatDate.universal = function(date,culture) {
	$s.push("thx.culture.FormatDate::universal");
	var $spos = $s.length;
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	var $tmp = thx.culture.FormatDate.format(culture.date.patternUniversal,date,culture,false);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.culture.FormatDate.sortable = function(date,culture) {
	$s.push("thx.culture.FormatDate::sortable");
	var $spos = $s.length;
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	var $tmp = thx.culture.FormatDate.format(culture.date.patternSortable,date,culture,false);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.culture.FormatDate.time = function(date,culture) {
	$s.push("thx.culture.FormatDate::time");
	var $spos = $s.length;
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	var $tmp = thx.culture.FormatDate.format(culture.date.patternTime,date,culture,false);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.culture.FormatDate.timeShort = function(date,culture) {
	$s.push("thx.culture.FormatDate::timeShort");
	var $spos = $s.length;
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	var $tmp = thx.culture.FormatDate.format(culture.date.patternTimeShort,date,culture,false);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.culture.FormatDate.year = function(date,culture) {
	$s.push("thx.culture.FormatDate::year");
	var $spos = $s.length;
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	var $tmp = thx.culture.FormatNumber.digits("" + date.getFullYear(),culture);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.culture.FormatDate.month = function(date,culture) {
	$s.push("thx.culture.FormatDate::month");
	var $spos = $s.length;
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	var $tmp = thx.culture.FormatNumber.digits("" + (date.getMonth() + 1),culture);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.culture.FormatDate.monthName = function(date,culture) {
	$s.push("thx.culture.FormatDate::monthName");
	var $spos = $s.length;
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	var $tmp = culture.date.abbrMonths[date.getMonth()];
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.culture.FormatDate.monthNameShort = function(date,culture) {
	$s.push("thx.culture.FormatDate::monthNameShort");
	var $spos = $s.length;
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	var $tmp = culture.date.months[date.getMonth()];
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.culture.FormatDate.weekDay = function(date,culture) {
	$s.push("thx.culture.FormatDate::weekDay");
	var $spos = $s.length;
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	var $tmp = thx.culture.FormatNumber.digits("" + (date.getDay() + culture.date.firstWeekDay),culture);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.culture.FormatDate.weekDayName = function(date,culture) {
	$s.push("thx.culture.FormatDate::weekDayName");
	var $spos = $s.length;
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	var $tmp = culture.date.abbrDays[date.getDay()];
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.culture.FormatDate.weekDayNameShort = function(date,culture) {
	$s.push("thx.culture.FormatDate::weekDayNameShort");
	var $spos = $s.length;
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	var $tmp = culture.date.days[date.getDay()];
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.culture.FormatDate.prototype.__class__ = thx.culture.FormatDate;
examples.HelloSort = function(cid) {
	if( cid === $_ ) return;
	$s.push("examples.HelloSort::new");
	var $spos = $s.length;
	Example.call(this,cid);
	$s.pop();
}
examples.HelloSort.__name__ = ["examples","HelloSort"];
examples.HelloSort.__super__ = Example;
for(var k in Example.prototype ) examples.HelloSort.prototype[k] = Example.prototype[k];
examples.HelloSort.prototype.runExample = function() {
	$s.push("examples.HelloSort::runExample");
	var $spos = $s.length;
	this.container.html().string("<div><input id='sort' type='checkbox' checked><label for='sort'>Ascending</label></div>");
	this.container.append("svg:svg").attr("viewBox").string("0 0 1000 1000");
	this.container.select("#sort").onNode("change",$closure(this,"sort"));
	this.transform();
	$s.pop();
}
examples.HelloSort.prototype.transform = function() {
	$s.push("examples.HelloSort::transform");
	var $spos = $s.length;
	var width = this.stageWidth();
	var circle = this.container.select("svg").style("width").string(width + "px").style("height").string("100%").selectAll("circle").data(Ints.range(400).map(function(d,i) {
		$s.push("examples.HelloSort::transform@34");
		var $spos = $s.length;
		var $tmp = Math.random();
		$s.pop();
		return $tmp;
		$s.pop();
	}));
	circle.enter().append("svg:circle").attr("cx").floatf(function(d,i) {
		$s.push("examples.HelloSort::transform@37");
		var $spos = $s.length;
		var $tmp = 100 + Math.random() * 800;
		$s.pop();
		return $tmp;
		$s.pop();
	}).attr("cy").floatf(function(d,i) {
		$s.push("examples.HelloSort::transform@38");
		var $spos = $s.length;
		var $tmp = 100 + Math.random() * 800;
		$s.pop();
		return $tmp;
		$s.pop();
	}).attr("r")["float"](0);
	this.container.selectAllData("circle").transition().duration(null,750).attr("r").floatf(function(d,i) {
		$s.push("examples.HelloSort::transform@44");
		var $spos = $s.length;
		var $tmp = 50 * d;
		$s.pop();
		return $tmp;
		$s.pop();
	});
	this.sort();
	$s.pop();
}
examples.HelloSort.prototype.sort = function(_,_1) {
	$s.push("examples.HelloSort::sort");
	var $spos = $s.length;
	this.container.selectAllData("circle").sort(this.container.select("#sort").property("checked").get()?$closure(Floats,"descending"):$closure(Floats,"ascending"));
	$s.pop();
}
examples.HelloSort.prototype.destroyExample = function() {
	$s.push("examples.HelloSort::destroyExample");
	var $spos = $s.length;
	this.container.select("#sort").onNode("change",null);
	$s.pop();
}
examples.HelloSort.prototype.description = function() {
	$s.push("examples.HelloSort::description");
	var $spos = $s.length;
	$s.pop();
	return "Random sized circles with transition. The checkbox forces the circles to be sorted on the z-index according to their size.";
	$s.pop();
}
examples.HelloSort.prototype.__class__ = examples.HelloSort;
thx.svg.Line = function(x,y,interpolator) {
	if( x === $_ ) return;
	$s.push("thx.svg.Line::new");
	var $spos = $s.length;
	this._x = x;
	this._y = y;
	this._interpolator = interpolator;
	$s.pop();
}
thx.svg.Line.__name__ = ["thx","svg","Line"];
thx.svg.Line.pointArray = function(interpolator) {
	$s.push("thx.svg.Line::pointArray");
	var $spos = $s.length;
	var $tmp = new thx.svg.Line(function(d,_) {
		$s.push("thx.svg.Line::pointArray@53");
		var $spos = $s.length;
		var $tmp = d[0];
		$s.pop();
		return $tmp;
		$s.pop();
	},function(d,_) {
		$s.push("thx.svg.Line::pointArray@53");
		var $spos = $s.length;
		var $tmp = d[1];
		$s.pop();
		return $tmp;
		$s.pop();
	},interpolator);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Line.pointObject = function(interpolator) {
	$s.push("thx.svg.Line::pointObject");
	var $spos = $s.length;
	var $tmp = new thx.svg.Line(function(d,_) {
		$s.push("thx.svg.Line::pointObject@58");
		var $spos = $s.length;
		var $tmp = d.x;
		$s.pop();
		return $tmp;
		$s.pop();
	},function(d,_) {
		$s.push("thx.svg.Line::pointObject@58");
		var $spos = $s.length;
		var $tmp = d.y;
		$s.pop();
		return $tmp;
		$s.pop();
	},interpolator);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Line.prototype._x = null;
thx.svg.Line.prototype._y = null;
thx.svg.Line.prototype._interpolator = null;
thx.svg.Line.prototype.shape = function(data,i) {
	$s.push("thx.svg.Line::shape");
	var $spos = $s.length;
	var $tmp = data.length < 1?null:"M" + thx.svg.LineInternals.interpolatePoints(thx.svg.LineInternals.linePoints(data,this._x,this._y),this._interpolator);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Line.prototype.getInterpolator = function() {
	$s.push("thx.svg.Line::getInterpolator");
	var $spos = $s.length;
	var $tmp = this._interpolator;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Line.prototype.interpolator = function(type) {
	$s.push("thx.svg.Line::interpolator");
	var $spos = $s.length;
	this._interpolator = type;
	$s.pop();
	return this;
	$s.pop();
}
thx.svg.Line.prototype.getX = function() {
	$s.push("thx.svg.Line::getX");
	var $spos = $s.length;
	var $tmp = this._x;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Line.prototype.x = function(v) {
	$s.push("thx.svg.Line::x");
	var $spos = $s.length;
	this._x = v;
	$s.pop();
	return this;
	$s.pop();
}
thx.svg.Line.prototype.getY = function() {
	$s.push("thx.svg.Line::getY");
	var $spos = $s.length;
	var $tmp = this._y;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Line.prototype.y = function(v) {
	$s.push("thx.svg.Line::y");
	var $spos = $s.length;
	this._y = v;
	$s.pop();
	return this;
	$s.pop();
}
thx.svg.Line.prototype.__class__ = thx.svg.Line;
Bools = function() { }
Bools.__name__ = ["Bools"];
Bools.format = function(v,param,params,culture) {
	$s.push("Bools::format");
	var $spos = $s.length;
	var $tmp = (Bools.formatf(param,params,culture))(v);
	$s.pop();
	return $tmp;
	$s.pop();
}
Bools.formatf = function(param,params,culture) {
	$s.push("Bools::formatf");
	var $spos = $s.length;
	params = thx.culture.FormatParams.params(param,params,"B");
	var format = params.shift();
	switch(format) {
	case "B":
		var $tmp = function(v) {
			$s.push("Bools::formatf@23");
			var $spos = $s.length;
			var $tmp = v?"true":"false";
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	case "N":
		var $tmp = function(v) {
			$s.push("Bools::formatf@25");
			var $spos = $s.length;
			var $tmp = v?"1":"0";
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	case "R":
		if(params.length != 2) throw "bool format R requires 2 parameters";
		var $tmp = function(v) {
			$s.push("Bools::formatf@29");
			var $spos = $s.length;
			var $tmp = v?params[0]:params[1];
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	default:
		throw "Unsupported bool format: " + format;
	}
	$s.pop();
}
Bools.interpolate = function(v,a,b,interpolator) {
	$s.push("Bools::interpolate");
	var $spos = $s.length;
	var $tmp = (Bools.interpolatef(a,b,interpolator))(v);
	$s.pop();
	return $tmp;
	$s.pop();
}
Bools.interpolatef = function(a,b,interpolator) {
	$s.push("Bools::interpolatef");
	var $spos = $s.length;
	if(a == b) {
		var $tmp = function(_) {
			$s.push("Bools::interpolatef@43");
			var $spos = $s.length;
			$s.pop();
			return a;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	} else {
		var f = Floats.interpolatef(0,1,interpolator);
		var $tmp = function(v) {
			$s.push("Bools::interpolatef@47");
			var $spos = $s.length;
			var $tmp = f(v) < 0.5?a:b;
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Bools.prototype.__class__ = Bools;
examples.HelloTransitionUndefined = function(cid) {
	if( cid === $_ ) return;
	$s.push("examples.HelloTransitionUndefined::new");
	var $spos = $s.length;
	Example.call(this,cid);
	$s.pop();
}
examples.HelloTransitionUndefined.__name__ = ["examples","HelloTransitionUndefined"];
examples.HelloTransitionUndefined.__super__ = Example;
for(var k in Example.prototype ) examples.HelloTransitionUndefined.prototype[k] = Example.prototype[k];
examples.HelloTransitionUndefined.prototype.transform = null;
examples.HelloTransitionUndefined.prototype.runExample = function() {
	$s.push("examples.HelloTransitionUndefined::runExample");
	var $spos = $s.length;
	var container = this.container;
	var width = this.stageWidth() + "px";
	this.transform = function() {
		$s.push("examples.HelloTransitionUndefined::runExample@23");
		var $spos = $s.length;
		container.append("div");
		container.select("div").style("width").string("0px").text().string("hello").transition().ease($closure(thx.math.Equations,"bounce")).duration(null,2000).style("width").string(width).style("background-color").colorfNode(function(d,i) {
			$s.push("examples.HelloTransitionUndefined::runExample@23@35");
			var $spos = $s.length;
			var $tmp = new thx.color.Hsl(Std.random(360),Math.random(),.5);
			$s.pop();
			return $tmp;
			$s.pop();
		});
		$s.pop();
	};
	this.transform();
	js.Lib.window.addEventListener("keypress",this.transform,false);
	$s.pop();
}
examples.HelloTransitionUndefined.prototype.destroyExample = function() {
	$s.push("examples.HelloTransitionUndefined::destroyExample");
	var $spos = $s.length;
	js.Lib.window.removeEventListener("keypress",this.transform,false);
	$s.pop();
}
examples.HelloTransitionUndefined.prototype.description = function() {
	$s.push("examples.HelloTransitionUndefined::description");
	var $spos = $s.length;
	$s.pop();
	return "Bounce transition over the width of a Html DIV element and its background color. Press any key to bounce again. Starting color is undefined.";
	$s.pop();
}
examples.HelloTransitionUndefined.prototype.__class__ = examples.HelloTransitionUndefined;
examples.Timer = function(cid) {
	if( cid === $_ ) return;
	$s.push("examples.Timer::new");
	var $spos = $s.length;
	Example.call(this,cid);
	$s.pop();
}
examples.Timer.__name__ = ["examples","Timer"];
examples.Timer.__super__ = Example;
for(var k in Example.prototype ) examples.Timer.prototype[k] = Example.prototype[k];
examples.Timer.prototype.runExample = function() {
	$s.push("examples.Timer::runExample");
	var $spos = $s.length;
	var container = this.container;
	var f = Floats.formatf();
	container.append("span").attr("id").string("countdown").html().string(f(10.0));
	thx.js.Timer.timer(function(d) {
		$s.push("examples.Timer::runExample@20");
		var $spos = $s.length;
		var s = container.select("#countdown");
		if(s.empty()) {
			$s.pop();
			return true;
		}
		var v = 10 - d / 1000;
		if(v <= 0) {
			s.html().string(f(0.0));
			$s.pop();
			return false;
		} else {
			s.html().string(f(v));
			$s.pop();
			return false;
		}
		$s.pop();
	});
	$s.pop();
}
examples.Timer.prototype.description = function() {
	$s.push("examples.Timer::description");
	var $spos = $s.length;
	$s.pop();
	return "Counter sample. Not interactive.";
	$s.pop();
}
examples.Timer.prototype.__class__ = examples.Timer;
thx.culture.FormatNumber = function() { }
thx.culture.FormatNumber.__name__ = ["thx","culture","FormatNumber"];
thx.culture.FormatNumber.decimal = function(v,decimals,culture) {
	$s.push("thx.culture.FormatNumber::decimal");
	var $spos = $s.length;
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	var $tmp = thx.culture.FormatNumber.crunch(v,decimals,culture.percent,culture.number.patternNegative,culture.number.patternPositive,culture,null,null);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.culture.FormatNumber.percent = function(v,decimals,culture) {
	$s.push("thx.culture.FormatNumber::percent");
	var $spos = $s.length;
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	var $tmp = thx.culture.FormatNumber.crunch(v,decimals,culture.percent,culture.percent.patternNegative,culture.percent.patternPositive,culture,"%",culture.symbolPercent);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.culture.FormatNumber.permille = function(v,decimals,culture) {
	$s.push("thx.culture.FormatNumber::permille");
	var $spos = $s.length;
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	var $tmp = thx.culture.FormatNumber.crunch(v,decimals,culture.percent,culture.percent.patternNegative,culture.percent.patternPositive,culture,"%",culture.symbolPermille);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.culture.FormatNumber.currency = function(v,symbol,decimals,culture) {
	$s.push("thx.culture.FormatNumber::currency");
	var $spos = $s.length;
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	var $tmp = thx.culture.FormatNumber.crunch(v,decimals,culture.currency,culture.currency.patternNegative,culture.currency.patternPositive,culture,"$",symbol == null?culture.currencySymbol:symbol);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.culture.FormatNumber["int"] = function(v,culture) {
	$s.push("thx.culture.FormatNumber::int");
	var $spos = $s.length;
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	var $tmp = thx.culture.FormatNumber.decimal(v,0,culture);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.culture.FormatNumber.digits = function(v,culture) {
	$s.push("thx.culture.FormatNumber::digits");
	var $spos = $s.length;
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	var $tmp = thx.culture.FormatNumber.processDigits(v,culture.digits);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.culture.FormatNumber.crunch = function(v,decimals,info,negative,positive,culture,symbol,replace) {
	$s.push("thx.culture.FormatNumber::crunch");
	var $spos = $s.length;
	if(Math.isNaN(v)) {
		var $tmp = culture.symbolNaN;
		$s.pop();
		return $tmp;
	} else if(!Math.isFinite(v)) {
		var $tmp = v == Math.NEGATIVE_INFINITY?culture.symbolNegInf:culture.symbolPosInf;
		$s.pop();
		return $tmp;
	}
	var fv = thx.culture.FormatNumber.value(v,info,decimals == null?info.decimals:decimals < 0?0:decimals,culture.digits);
	if(symbol != null) {
		var $tmp = StringTools.replace(StringTools.replace(v < 0?negative:positive,"n",fv),symbol,replace);
		$s.pop();
		return $tmp;
	} else {
		var $tmp = StringTools.replace(v < 0?negative:positive,"n",fv);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
thx.culture.FormatNumber.processDigits = function(s,digits) {
	$s.push("thx.culture.FormatNumber::processDigits");
	var $spos = $s.length;
	if(digits == null) {
		$s.pop();
		return s;
	}
	var o = [];
	var _g1 = 0, _g = s.length;
	while(_g1 < _g) {
		var i = _g1++;
		o.push(digits[Std.parseInt(s.substr(i,1))]);
	}
	var $tmp = o.join("");
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.culture.FormatNumber.value = function(v,info,decimals,digits) {
	$s.push("thx.culture.FormatNumber::value");
	var $spos = $s.length;
	var fv = "" + Math.abs(v);
	var pos = fv.indexOf("E");
	if(pos > 0) {
		var e = Std.parseInt(fv.substr(pos + 1));
		var ispos = true;
		if(e < 0) {
			ispos = false;
			e = -e;
		}
		var s = StringTools.replace(fv.substr(0,pos),".","");
		if(ispos) fv = StringTools.rpad(s,"0",e + 1); else fv = "0" + StringTools.rpad(".","0",e) + s;
	}
	var parts = fv.split(".");
	var temp = parts[0];
	var intparts = [];
	var group = 0;
	while(true) {
		if(temp.length == 0) break;
		var len = info.groups[group];
		if(temp.length <= len) {
			intparts.unshift(thx.culture.FormatNumber.processDigits(temp,digits));
			break;
		}
		intparts.unshift(thx.culture.FormatNumber.processDigits(temp.substr(-len),digits));
		temp = temp.substr(0,-len);
		if(group < info.groups.length - 1) group++;
	}
	var intpart = intparts.join(info.groupsSeparator);
	if(decimals > 0) {
		var decpart = parts.length == 1?StringTools.lpad("","0",decimals):parts[1].length > decimals?parts[1].substr(0,decimals):StringTools.rpad(parts[1],"0",decimals);
		var $tmp = intpart + info.decimalsSeparator + thx.culture.FormatNumber.processDigits(decpart,digits);
		$s.pop();
		return $tmp;
	} else {
		$s.pop();
		return intpart;
	}
	$s.pop();
}
thx.culture.FormatNumber.prototype.__class__ = thx.culture.FormatNumber;
if(!thx.geom) thx.geom = {}
if(!thx.geom.layout) thx.geom.layout = {}
thx.geom.layout.Stack = function(p) {
	if( p === $_ ) return;
	$s.push("thx.geom.layout.Stack::new");
	var $spos = $s.length;
	this._order = thx.geom.layout.StackOrder.DefaultOrder;
	this._offset = thx.geom.layout.StackOffset.ZeroOffset;
	$s.pop();
}
thx.geom.layout.Stack.__name__ = ["thx","geom","layout","Stack"];
thx.geom.layout.Stack.getStackOrder = function(order,data) {
	$s.push("thx.geom.layout.Stack::getStackOrder");
	var $spos = $s.length;
	switch( (order)[1] ) {
	case 0:
		var $tmp = Ints.range(data.length);
		$s.pop();
		return $tmp;
	case 1:
		var n = data.length, max = data.map($closure(thx.geom.layout.Stack,"stackMaxIndex")), sums = data.map($closure(thx.geom.layout.Stack,"stackReduceSum")), index = Ints.range(n), top = 0.0, bottom = 0.0, tops = [], bottoms = [];
		index.sort(function(a,b) {
			$s.push("thx.geom.layout.Stack::getStackOrder@83");
			var $spos = $s.length;
			var $tmp = max[a] - max[b];
			$s.pop();
			return $tmp;
			$s.pop();
		});
		var _g = 0;
		while(_g < n) {
			var i = _g++;
			var j = index[i];
			if(top < bottom) {
				top += sums[j];
				tops.push(j);
			} else {
				bottom += sums[j];
				bottoms.push(j);
			}
		}
		bottoms.reverse();
		var $tmp = bottoms.concat(tops);
		$s.pop();
		return $tmp;
	case 2:
		var index = Ints.range(data.length);
		index.reverse();
		$s.pop();
		return index;
	}
	$s.pop();
}
thx.geom.layout.Stack.getStackOffset = function(offset,index,data) {
	$s.push("thx.geom.layout.Stack::getStackOffset");
	var $spos = $s.length;
	switch( (offset)[1] ) {
	case 0:
		var n = data.length, m = data[0].length, sums = [], max = 0.0, o;
		var _g = 0;
		while(_g < m) {
			var j = _g++;
			o = 0.0;
			var _g1 = 0;
			while(_g1 < n) {
				var i = _g1++;
				o += data[i][j].y;
			}
			if(o > max) max = o;
			sums.push(o);
		}
		var i = index[0];
		var _g = 0;
		while(_g < m) {
			var j = _g++;
			data[i][j].y0 = (max - sums[j]) / 2;
		}
		break;
	case 1:
		var n = data.length, x = data[0], m = x.length, max = 0.0, k, ii, ik, i0 = index[0], s1, s2, s3, dx, o, o0;
		data[i0][0].y0 = o = o0 = 0.0;
		var _g = 1;
		while(_g < m) {
			var j = _g++;
			s1 = 0.0;
			var _g1 = 0;
			while(_g1 < n) {
				var i = _g1++;
				s1 += data[i][j].y;
			}
			s2 = 0.0;
			dx = x[j].x - x[j - 1].x;
			var _g1 = 0;
			while(_g1 < n) {
				var i = _g1++;
				ii = index[i];
				s3 = (data[ii][j].y - data[ii][j - 1].y) / (2 * dx);
				var _g2 = 0;
				while(_g2 < i) {
					var k1 = _g2++;
					s3 += (data[ik = index[k1]][j].y - data[ik][j - 1].y) / dx;
				}
				s2 += s3 * data[ii][j].y;
			}
			data[i0][j].y0 = o -= s1 != 0?s2 / s1 * dx:0;
			if(o < o0) o0 = o;
		}
		var _g = 0;
		while(_g < m) {
			var j = _g++;
			data[i0][j].y0 -= o0;
		}
		break;
	case 2:
		var m = data[0].length, i0 = index[0];
		var _g = 0;
		while(_g < m) {
			var j = _g++;
			data[i0][j].y0 = 0.0;
		}
		break;
	}
	$s.pop();
}
thx.geom.layout.Stack.stackMaxIndex = function(data,_) {
	$s.push("thx.geom.layout.Stack::stackMaxIndex");
	var $spos = $s.length;
	var j = 0, v = data[0].y, k, n = data.length;
	var _g = 1;
	while(_g < n) {
		var i = _g++;
		if((k = data[i].y) > v) {
			j = i;
			v = k;
		}
	}
	$s.pop();
	return j;
	$s.pop();
}
thx.geom.layout.Stack.stackReduceSum = function(data,_) {
	$s.push("thx.geom.layout.Stack::stackReduceSum");
	var $spos = $s.length;
	var $tmp = Iterators.reduce(data.iterator(),$closure(thx.geom.layout.Stack,"stackSum"),0.0);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.geom.layout.Stack.stackSum = function(p,c,i) {
	$s.push("thx.geom.layout.Stack::stackSum");
	var $spos = $s.length;
	var $tmp = p + c.y;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.geom.layout.Stack.prototype._order = null;
thx.geom.layout.Stack.prototype._offset = null;
thx.geom.layout.Stack.prototype.stack = function(data) {
	$s.push("thx.geom.layout.Stack::stack");
	var $spos = $s.length;
	var n = data.length, m = data[0].length, i, j, y0, result = [];
	var _g = 0;
	while(_g < n) {
		var i1 = _g++;
		var r = [];
		result.push(r);
		var _g1 = 0;
		while(_g1 < m) {
			var j1 = _g1++;
			var s = data[i1][j1];
			r[j1] = { x : s.x, y : s.y, y0 : 0.0};
		}
	}
	var index = thx.geom.layout.Stack.getStackOrder(this._order,result);
	thx.geom.layout.Stack.getStackOffset(this._offset,index,result);
	var _g = 0;
	while(_g < m) {
		var j1 = _g++;
		y0 = result[index[0]][j1].y0;
		var _g1 = 1;
		while(_g1 < n) {
			var i1 = _g1++;
			result[index[i1]][j1].y0 = y0 += result[index[i1 - 1]][j1].y;
		}
	}
	$s.pop();
	return result;
	$s.pop();
}
thx.geom.layout.Stack.prototype.getOrder = function() {
	$s.push("thx.geom.layout.Stack::getOrder");
	var $spos = $s.length;
	var $tmp = this._order;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.geom.layout.Stack.prototype.order = function(x) {
	$s.push("thx.geom.layout.Stack::order");
	var $spos = $s.length;
	this._order = x;
	$s.pop();
	return this;
	$s.pop();
}
thx.geom.layout.Stack.prototype.getOffset = function() {
	$s.push("thx.geom.layout.Stack::getOffset");
	var $spos = $s.length;
	var $tmp = this._offset;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.geom.layout.Stack.prototype.offset = function(x) {
	$s.push("thx.geom.layout.Stack::offset");
	var $spos = $s.length;
	this._offset = x;
	$s.pop();
	return this;
	$s.pop();
}
thx.geom.layout.Stack.prototype.__class__ = thx.geom.layout.Stack;
thx.geom.layout.StackOrder = { __ename__ : ["thx","geom","layout","StackOrder"], __constructs__ : ["DefaultOrder","InsideOut","ReverseOrder"] }
thx.geom.layout.StackOrder.DefaultOrder = ["DefaultOrder",0];
thx.geom.layout.StackOrder.DefaultOrder.toString = $estr;
thx.geom.layout.StackOrder.DefaultOrder.__enum__ = thx.geom.layout.StackOrder;
thx.geom.layout.StackOrder.InsideOut = ["InsideOut",1];
thx.geom.layout.StackOrder.InsideOut.toString = $estr;
thx.geom.layout.StackOrder.InsideOut.__enum__ = thx.geom.layout.StackOrder;
thx.geom.layout.StackOrder.ReverseOrder = ["ReverseOrder",2];
thx.geom.layout.StackOrder.ReverseOrder.toString = $estr;
thx.geom.layout.StackOrder.ReverseOrder.__enum__ = thx.geom.layout.StackOrder;
thx.geom.layout.StackOffset = { __ename__ : ["thx","geom","layout","StackOffset"], __constructs__ : ["Silhouette","Wiggle","ZeroOffset"] }
thx.geom.layout.StackOffset.Silhouette = ["Silhouette",0];
thx.geom.layout.StackOffset.Silhouette.toString = $estr;
thx.geom.layout.StackOffset.Silhouette.__enum__ = thx.geom.layout.StackOffset;
thx.geom.layout.StackOffset.Wiggle = ["Wiggle",1];
thx.geom.layout.StackOffset.Wiggle.toString = $estr;
thx.geom.layout.StackOffset.Wiggle.__enum__ = thx.geom.layout.StackOffset;
thx.geom.layout.StackOffset.ZeroOffset = ["ZeroOffset",2];
thx.geom.layout.StackOffset.ZeroOffset.toString = $estr;
thx.geom.layout.StackOffset.ZeroOffset.__enum__ = thx.geom.layout.StackOffset;
Arrays = function() { }
Arrays.__name__ = ["Arrays"];
Arrays.pushIf = function(arr,condition,value) {
	$s.push("Arrays::pushIf");
	var $spos = $s.length;
	if(null != condition) {
		if(condition) arr.push(value);
	} else if(null != value) arr.push(value);
	$s.pop();
	return arr;
	$s.pop();
}
Arrays.pushR = function(arr,value) {
	$s.push("Arrays::pushR");
	var $spos = $s.length;
	arr.push(value);
	$s.pop();
	return arr;
	$s.pop();
}
Arrays.removeR = function(arr,value) {
	$s.push("Arrays::removeR");
	var $spos = $s.length;
	arr.remove(value);
	$s.pop();
	return arr;
	$s.pop();
}
Arrays.filter = function(arr,f) {
	$s.push("Arrays::filter");
	var $spos = $s.length;
	var result = [];
	var _g = 0;
	while(_g < arr.length) {
		var i = arr[_g];
		++_g;
		if(f(i)) result.push(i);
	}
	$s.pop();
	return result;
	$s.pop();
}
Arrays.min = function(arr,f) {
	$s.push("Arrays::min");
	var $spos = $s.length;
	if(arr.length == 0) {
		$s.pop();
		return null;
	}
	if(null == f) {
		var a = arr[0], p = 0;
		var _g1 = 0, _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(Reflect.compare(a,arr[i]) > 0) a = arr[p = i];
		}
		var $tmp = arr[p];
		$s.pop();
		return $tmp;
	} else {
		var a = f(arr[0]), p = 0, b;
		var _g1 = 0, _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(a > (b = f(arr[i]))) {
				a = b;
				p = i;
			}
		}
		var $tmp = arr[p];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Arrays.floatMin = function(arr,f) {
	$s.push("Arrays::floatMin");
	var $spos = $s.length;
	if(arr.length == 0) {
		var $tmp = Math.NaN;
		$s.pop();
		return $tmp;
	}
	var a = f(arr[0]), b;
	var _g1 = 0, _g = arr.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(a > (b = f(arr[i]))) a = b;
	}
	$s.pop();
	return a;
	$s.pop();
}
Arrays.max = function(arr,f) {
	$s.push("Arrays::max");
	var $spos = $s.length;
	if(arr.length == 0) {
		$s.pop();
		return null;
	}
	if(null == f) {
		var a = arr[0], p = 0;
		var _g1 = 0, _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(Reflect.compare(a,arr[i]) < 0) a = arr[p = i];
		}
		var $tmp = arr[p];
		$s.pop();
		return $tmp;
	} else {
		var a = f(arr[0]), p = 0, b;
		var _g1 = 0, _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(a < (b = f(arr[i]))) {
				a = b;
				p = i;
			}
		}
		var $tmp = arr[p];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Arrays.floatMax = function(arr,f) {
	$s.push("Arrays::floatMax");
	var $spos = $s.length;
	if(arr.length == 0) {
		var $tmp = Math.NaN;
		$s.pop();
		return $tmp;
	}
	var a = f(arr[0]), b;
	var _g1 = 0, _g = arr.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(a < (b = f(arr[i]))) a = b;
	}
	$s.pop();
	return a;
	$s.pop();
}
Arrays.flatten = function(arr) {
	$s.push("Arrays::flatten");
	var $spos = $s.length;
	var r = [];
	var _g = 0;
	while(_g < arr.length) {
		var v = arr[_g];
		++_g;
		r = r.concat(v);
	}
	$s.pop();
	return r;
	$s.pop();
}
Arrays.map = function(arr,f) {
	$s.push("Arrays::map");
	var $spos = $s.length;
	var $tmp = arr.map(f);
	$s.pop();
	return $tmp;
	$s.pop();
}
Arrays.reduce = function(arr,f,initialValue) {
	$s.push("Arrays::reduce");
	var $spos = $s.length;
	var $tmp = Iterators.reduce(arr.iterator(),f,initialValue);
	$s.pop();
	return $tmp;
	$s.pop();
}
Arrays.order = function(arr,f) {
	$s.push("Arrays::order");
	var $spos = $s.length;
	arr.sort(null == f?$closure(Reflect,"compare"):f);
	$s.pop();
	return arr;
	$s.pop();
}
Arrays.split = function(arr,f) {
	$s.push("Arrays::split");
	var $spos = $s.length;
	if(null == f) f = function(v,_) {
		$s.push("Arrays::split@124");
		var $spos = $s.length;
		var $tmp = v == null;
		$s.pop();
		return $tmp;
		$s.pop();
	};
	var arrays = [], i = -1, values = [], value;
	var _g1 = 0, _g = arr.length;
	while(_g1 < _g) {
		var i1 = _g1++;
		if(f(value = arr[i1],i1)) values = []; else {
			if(values.length == 0) arrays.push(values);
			values.push(value);
		}
	}
	$s.pop();
	return arrays;
	$s.pop();
}
Arrays.exists = function(arr,value,f) {
	$s.push("Arrays::exists");
	var $spos = $s.length;
	if(null != f) {
		var _g = 0;
		while(_g < arr.length) {
			var v = arr[_g];
			++_g;
			if(f(v)) {
				$s.pop();
				return true;
			}
		}
	} else {
		var _g = 0;
		while(_g < arr.length) {
			var v = arr[_g];
			++_g;
			if(v == value) {
				$s.pop();
				return true;
			}
		}
	}
	$s.pop();
	return false;
	$s.pop();
}
Arrays.format = function(v,param,params,culture) {
	$s.push("Arrays::format");
	var $spos = $s.length;
	params = thx.culture.FormatParams.params(param,params,"J");
	var format = params.shift();
	switch(format) {
	case "J":
		if(v.length == 0) {
			var empty = null == params[1]?"[]":params[1];
			$s.pop();
			return empty;
		}
		var sep = null == params[2]?", ":params[2];
		var max = params[3] == null?null:"" == params[3]?null:Std.parseInt(params[3]);
		if(null != max && max < v.length) {
			var elipsis = null == params[4]?" ...":params[4];
			var $tmp = v.copy().splice(0,max).map(function(d,i) {
				$s.push("Arrays::format@173");
				var $spos = $s.length;
				var $tmp = Dynamics.format(d,params[0],null,null,culture);
				$s.pop();
				return $tmp;
				$s.pop();
			}).join(sep) + elipsis;
			$s.pop();
			return $tmp;
		} else {
			var $tmp = v.map(function(d,i) {
				$s.push("Arrays::format@175");
				var $spos = $s.length;
				var $tmp = Dynamics.format(d,params[0],null,null,culture);
				$s.pop();
				return $tmp;
				$s.pop();
			}).join(sep);
			$s.pop();
			return $tmp;
		}
		break;
	case "C":
		var $tmp = Ints.format(v.length,"I",[],culture);
		$s.pop();
		return $tmp;
	default:
		throw "Unsupported array format: " + format;
	}
	$s.pop();
}
Arrays.formatf = function(param,params,culture) {
	$s.push("Arrays::formatf");
	var $spos = $s.length;
	params = thx.culture.FormatParams.params(param,params,"J");
	var format = params.shift();
	switch(format) {
	case "J":
		var $tmp = function(v) {
			$s.push("Arrays::formatf@190");
			var $spos = $s.length;
			if(v.length == 0) {
				var empty = null == params[1]?"[]":params[1];
				$s.pop();
				return empty;
			}
			var sep = null == params[2]?", ":params[2];
			var max = params[3] == null?null:"" == params[3]?null:Std.parseInt(params[3]);
			if(null != max && max < v.length) {
				var elipsis = null == params[4]?" ...":params[4];
				var $tmp = v.copy().splice(0,max).map(function(d,i) {
					$s.push("Arrays::formatf@190@203");
					var $spos = $s.length;
					var $tmp = Dynamics.format(d,params[0],null,null,culture);
					$s.pop();
					return $tmp;
					$s.pop();
				}).join(sep) + elipsis;
				$s.pop();
				return $tmp;
			} else {
				var $tmp = v.map(function(d,i) {
					$s.push("Arrays::formatf@190@205");
					var $spos = $s.length;
					var $tmp = Dynamics.format(d,params[0],null,null,culture);
					$s.pop();
					return $tmp;
					$s.pop();
				}).join(sep);
				$s.pop();
				return $tmp;
			}
			$s.pop();
		};
		$s.pop();
		return $tmp;
	case "C":
		var f = Ints.formatf("I",[],culture);
		var $tmp = function(v) {
			$s.push("Arrays::formatf@209");
			var $spos = $s.length;
			var $tmp = f(v.length);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	default:
		throw "Unsupported array format: " + format;
	}
	$s.pop();
}
Arrays.interpolate = function(v,a,b,interpolator) {
	$s.push("Arrays::interpolate");
	var $spos = $s.length;
	var $tmp = (Arrays.interpolatef(a,b,interpolator))(v);
	$s.pop();
	return $tmp;
	$s.pop();
}
Arrays.interpolatef = function(a,b,interpolator) {
	$s.push("Arrays::interpolatef");
	var $spos = $s.length;
	var functions = [], i = 0, min = Ints.min(a.length,b.length);
	while(i < min) {
		if(a[i] == b[i]) {
			var v = [b[i]];
			functions.push((function(v) {
				$s.push("Arrays::interpolatef@231");
				var $spos = $s.length;
				var $tmp = function(_) {
					$s.push("Arrays::interpolatef@231@231");
					var $spos = $s.length;
					var $tmp = v[0];
					$s.pop();
					return $tmp;
					$s.pop();
				};
				$s.pop();
				return $tmp;
				$s.pop();
			})(v));
		} else functions.push(Floats.interpolatef(a[i],b[i],interpolator));
		i++;
	}
	while(i < b.length) {
		var v = [b[i]];
		functions.push((function(v) {
			$s.push("Arrays::interpolatef@239");
			var $spos = $s.length;
			var $tmp = function(_) {
				$s.push("Arrays::interpolatef@239@239");
				var $spos = $s.length;
				var $tmp = v[0];
				$s.pop();
				return $tmp;
				$s.pop();
			};
			$s.pop();
			return $tmp;
			$s.pop();
		})(v));
		i++;
	}
	var $tmp = function(t) {
		$s.push("Arrays::interpolatef@242");
		var $spos = $s.length;
		var $tmp = functions.map(function(f,_) {
			$s.push("Arrays::interpolatef@242@242");
			var $spos = $s.length;
			var $tmp = f(t);
			$s.pop();
			return $tmp;
			$s.pop();
		});
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
Arrays.interpolateStrings = function(v,a,b,interpolator) {
	$s.push("Arrays::interpolateStrings");
	var $spos = $s.length;
	var $tmp = (Arrays.interpolateStringsf(a,b,interpolator))(v);
	$s.pop();
	return $tmp;
	$s.pop();
}
Arrays.interpolateStringsf = function(a,b,interpolator) {
	$s.push("Arrays::interpolateStringsf");
	var $spos = $s.length;
	var functions = [], i = 0, min = Ints.min(a.length,b.length);
	while(i < min) {
		if(a[i] == b[i]) {
			var v = [b[i]];
			functions.push((function(v) {
				$s.push("Arrays::interpolateStringsf@261");
				var $spos = $s.length;
				var $tmp = function(_) {
					$s.push("Arrays::interpolateStringsf@261@261");
					var $spos = $s.length;
					var $tmp = v[0];
					$s.pop();
					return $tmp;
					$s.pop();
				};
				$s.pop();
				return $tmp;
				$s.pop();
			})(v));
		} else functions.push(Strings.interpolatef(a[i],b[i],interpolator));
		i++;
	}
	while(i < b.length) {
		var v = [b[i]];
		functions.push((function(v) {
			$s.push("Arrays::interpolateStringsf@269");
			var $spos = $s.length;
			var $tmp = function(_) {
				$s.push("Arrays::interpolateStringsf@269@269");
				var $spos = $s.length;
				var $tmp = v[0];
				$s.pop();
				return $tmp;
				$s.pop();
			};
			$s.pop();
			return $tmp;
			$s.pop();
		})(v));
		i++;
	}
	var $tmp = function(t) {
		$s.push("Arrays::interpolateStringsf@272");
		var $spos = $s.length;
		var $tmp = functions.map(function(f,_) {
			$s.push("Arrays::interpolateStringsf@272@272");
			var $spos = $s.length;
			var $tmp = f(t);
			$s.pop();
			return $tmp;
			$s.pop();
		});
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
Arrays.interpolateInts = function(v,a,b,interpolator) {
	$s.push("Arrays::interpolateInts");
	var $spos = $s.length;
	var $tmp = (Arrays.interpolateIntsf(a,b,interpolator))(v);
	$s.pop();
	return $tmp;
	$s.pop();
}
Arrays.interpolateIntsf = function(a,b,interpolator) {
	$s.push("Arrays::interpolateIntsf");
	var $spos = $s.length;
	var functions = [], i = 0, min = Ints.min(a.length,b.length);
	while(i < min) {
		if(a[i] == b[i]) {
			var v = [b[i]];
			functions.push((function(v) {
				$s.push("Arrays::interpolateIntsf@291");
				var $spos = $s.length;
				var $tmp = function(_) {
					$s.push("Arrays::interpolateIntsf@291@291");
					var $spos = $s.length;
					var $tmp = v[0];
					$s.pop();
					return $tmp;
					$s.pop();
				};
				$s.pop();
				return $tmp;
				$s.pop();
			})(v));
		} else functions.push(Ints.interpolatef(a[i],b[i],interpolator));
		i++;
	}
	while(i < b.length) {
		var v = [b[i]];
		functions.push((function(v) {
			$s.push("Arrays::interpolateIntsf@299");
			var $spos = $s.length;
			var $tmp = function(_) {
				$s.push("Arrays::interpolateIntsf@299@299");
				var $spos = $s.length;
				var $tmp = v[0];
				$s.pop();
				return $tmp;
				$s.pop();
			};
			$s.pop();
			return $tmp;
			$s.pop();
		})(v));
		i++;
	}
	var $tmp = function(t) {
		$s.push("Arrays::interpolateIntsf@302");
		var $spos = $s.length;
		var $tmp = functions.map(function(f,_) {
			$s.push("Arrays::interpolateIntsf@302@302");
			var $spos = $s.length;
			var $tmp = f(t);
			$s.pop();
			return $tmp;
			$s.pop();
		});
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
Arrays.indexOf = function(arr,el) {
	$s.push("Arrays::indexOf");
	var $spos = $s.length;
	var $tmp = arr.indexOf(el);
	$s.pop();
	return $tmp;
	$s.pop();
}
Arrays.every = function(arr,f) {
	$s.push("Arrays::every");
	var $spos = $s.length;
	var $tmp = arr.every(f);
	$s.pop();
	return $tmp;
	$s.pop();
}
Arrays.each = function(arr,f) {
	$s.push("Arrays::each");
	var $spos = $s.length;
	arr.forEach(f);
	$s.pop();
}
Arrays.any = function(arr,f) {
	$s.push("Arrays::any");
	var $spos = $s.length;
	var $tmp = Iterators.any(arr.iterator(),f);
	$s.pop();
	return $tmp;
	$s.pop();
}
Arrays.all = function(arr,f) {
	$s.push("Arrays::all");
	var $spos = $s.length;
	var $tmp = Iterators.all(arr.iterator(),f);
	$s.pop();
	return $tmp;
	$s.pop();
}
Arrays.random = function(arr) {
	$s.push("Arrays::random");
	var $spos = $s.length;
	var $tmp = arr[Std.random(arr.length)];
	$s.pop();
	return $tmp;
	$s.pop();
}
Arrays.prototype.__class__ = Arrays;
haxe.Log = function() { }
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	$s.push("haxe.Log::trace");
	var $spos = $s.length;
	js.Boot.__trace(v,infos);
	$s.pop();
}
haxe.Log.clear = function() {
	$s.push("haxe.Log::clear");
	var $spos = $s.length;
	js.Boot.__clear_trace();
	$s.pop();
}
haxe.Log.prototype.__class__ = haxe.Log;
thx.math.scale.Ordinal = function(p) {
	if( p === $_ ) return;
	$s.push("thx.math.scale.Ordinal::new");
	var $spos = $s.length;
	this._domain = [];
	this._range = [];
	this.rangeBand = 0.0;
	$s.pop();
}
thx.math.scale.Ordinal.__name__ = ["thx","math","scale","Ordinal"];
thx.math.scale.Ordinal.prototype._domain = null;
thx.math.scale.Ordinal.prototype._range = null;
thx.math.scale.Ordinal.prototype.rangeBand = null;
thx.math.scale.Ordinal.prototype.scalef = function() {
	$s.push("thx.math.scale.Ordinal::scalef");
	var $spos = $s.length;
	var $tmp = $closure(this,"scale");
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Ordinal.prototype.scaleMap = function(x,i) {
	$s.push("thx.math.scale.Ordinal::scaleMap");
	var $spos = $s.length;
	var $tmp = this.scale(x);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Ordinal.prototype.scale = function(x) {
	$s.push("thx.math.scale.Ordinal::scale");
	var $spos = $s.length;
	var i = this._domain.indexOf(x);
	if(i < 0) {
		this._domain.push(x);
		i = this._domain.length - 1;
	}
	var $tmp = this._range[i];
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Ordinal.prototype.getDomain = function() {
	$s.push("thx.math.scale.Ordinal::getDomain");
	var $spos = $s.length;
	var $tmp = this._domain.copy();
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Ordinal.prototype.domain = function(x) {
	$s.push("thx.math.scale.Ordinal::domain");
	var $spos = $s.length;
	this._domain = x.copy();
	$s.pop();
	return this;
	$s.pop();
}
thx.math.scale.Ordinal.prototype.getRange = function() {
	$s.push("thx.math.scale.Ordinal::getRange");
	var $spos = $s.length;
	var $tmp = this._range.copy();
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Ordinal.prototype.range = function(a) {
	$s.push("thx.math.scale.Ordinal::range");
	var $spos = $s.length;
	this._range = a.copy();
	$s.pop();
	return this;
	$s.pop();
}
thx.math.scale.Ordinal.prototype.rangePoints = function(start,stop,padding) {
	$s.push("thx.math.scale.Ordinal::rangePoints");
	var $spos = $s.length;
	if(padding == null) padding = 0.0;
	var step = (stop - start) / (this._domain.length - 1 + padding);
	var range = this._domain.length == 1?[(start + stop) / 2]:Floats.range(start + step * padding / 2,stop + step / 2,step);
	var ordinal = new thx.math.scale.Ordinal().domain(this._domain).range(range);
	ordinal.rangeBand = 0;
	$s.pop();
	return ordinal;
	$s.pop();
}
thx.math.scale.Ordinal.prototype.rangeBands = function(start,stop,padding) {
	$s.push("thx.math.scale.Ordinal::rangeBands");
	var $spos = $s.length;
	if(padding == null) padding = 0.0;
	var step = (stop - start) / (this._domain.length + padding);
	var range = Floats.range(start + step * padding,stop,step);
	var ordinal = new thx.math.scale.Ordinal().domain(this._domain).range(range);
	ordinal.rangeBand = step * (1 - padding);
	$s.pop();
	return ordinal;
	$s.pop();
}
thx.math.scale.Ordinal.prototype.rangeRoundBands = function(start,stop,padding) {
	$s.push("thx.math.scale.Ordinal::rangeRoundBands");
	var $spos = $s.length;
	if(padding == null) padding = 0.0;
	var diff = stop - start, step = Math.floor(diff / (this._domain.length + padding)), err = diff - (this._domain.length - padding) * step;
	var range = Ints.range(start + Math.round(err / 2),stop,step);
	var ordinal = new thx.math.scale.Ordinal().domain(this._domain).range(range);
	ordinal.rangeBand = Math.round(step * (1 - padding));
	$s.pop();
	return ordinal;
	$s.pop();
}
thx.math.scale.Ordinal.prototype.__class__ = thx.math.scale.Ordinal;
examples.Bar = function(cid) {
	if( cid === $_ ) return;
	$s.push("examples.Bar::new");
	var $spos = $s.length;
	Example.call(this,cid);
	$s.pop();
}
examples.Bar.__name__ = ["examples","Bar"];
examples.Bar.__super__ = Example;
for(var k in Example.prototype ) examples.Bar.prototype[k] = Example.prototype[k];
examples.Bar.prototype.runExample = function() {
	$s.push("examples.Bar::runExample");
	var $spos = $s.length;
	var data = Ints.range(10).map(function(d,_) {
		$s.push("examples.Bar::runExample@16");
		var $spos = $s.length;
		var $tmp = Math.random();
		$s.pop();
		return $tmp;
		$s.pop();
	});
	var w = 430, h = 230, x = new thx.math.scale.Linear().range(0,w).modulo(10), y = new thx.math.scale.Ordinal().domain(Ints.range(data.length)).rangeBands(0,h,.2);
	var vis = this.container.append("svg:svg").attr("class").string("barex").attr("width")["float"](w + 40).attr("height")["float"](h + 40).append("svg:g").attr("transform").string("translate(20,0)");
	var bars = vis.selectAll("g.bar").data(data).enter().append("svg:g").attr("class").string("bar").attr("transform").stringf(function(d,i) {
		$s.push("examples.Bar::runExample@36");
		var $spos = $s.length;
		var $tmp = "translate(0," + y.scale(i) + ")";
		$s.pop();
		return $tmp;
		$s.pop();
	});
	bars.append("svg:rect").attr("fill").string("steelblue").attr("width").floatf($closure(x,"scale")).attr("height")["float"](y.rangeBand);
	bars.append("svg:text").attr("x").floatf($closure(x,"scale")).attr("y")["float"](y.rangeBand / 2).attr("dx")["float"](-6).attr("dy").string(".35em").attr("fill").string("white").attr("text-anchor").string("end").text().stringf($closure(x.modulo(100),"tickFormat"));
	x.modulo(10);
	bars.append("svg:text").attr("x")["float"](0).attr("y")["float"](y.rangeBand / 2).attr("dx")["float"](-6).attr("dy").string(".35em").attr("text-anchor").string("end").text().stringf(function(d,i) {
		$s.push("examples.Bar::runExample@60");
		var $spos = $s.length;
		var $tmp = String.fromCharCode(65 + i);
		$s.pop();
		return $tmp;
		$s.pop();
	});
	var rules = vis.selectAll("g.rule").data(x.ticks()).enter().append("svg:g").attr("class").string("rule").attr("transform").stringf(function(d,i) {
		$s.push("examples.Bar::runExample@67");
		var $spos = $s.length;
		var $tmp = "translate(" + x.scale(d) + ",0)";
		$s.pop();
		return $tmp;
		$s.pop();
	});
	rules.append("svg:line").attr("y1")["float"](h).attr("y2")["float"](h + 6).attr("stroke").string("black").attr("stroke-opacity")["float"](1);
	rules.append("svg:line").attr("y1")["float"](0).attr("y2")["float"](h).attr("stroke").string("white").attr("stroke-opacity")["float"](.3);
	rules.append("svg:text").attr("y")["float"](h + 9).attr("dy").string(".71em").attr("text-anchor").string("middle").text().stringf($closure(x,"tickFormat"));
	vis.append("svg:line").attr("y1")["float"](0).attr("y2")["float"](h).attr("stroke").string("black");
	$s.pop();
}
examples.Bar.prototype.description = function() {
	$s.push("examples.Bar::description");
	var $spos = $s.length;
	$s.pop();
	return "Bar Chart from random data. Not interactive.";
	$s.pop();
}
examples.Bar.prototype.__class__ = examples.Bar;
Floats = function() { }
Floats.__name__ = ["Floats"];
Floats.normalize = function(v) {
	$s.push("Floats::normalize");
	var $spos = $s.length;
	if(v < 0.0) {
		$s.pop();
		return 0.0;
	} else if(v > 1.0) {
		$s.pop();
		return 1.0;
	} else {
		$s.pop();
		return v;
	}
	$s.pop();
}
Floats.clamp = function(v,min,max) {
	$s.push("Floats::clamp");
	var $spos = $s.length;
	if(v < min) {
		$s.pop();
		return min;
	} else if(v > max) {
		$s.pop();
		return max;
	} else {
		$s.pop();
		return v;
	}
	$s.pop();
}
Floats.clampSym = function(v,max) {
	$s.push("Floats::clampSym");
	var $spos = $s.length;
	if(v < -max) {
		var $tmp = -max;
		$s.pop();
		return $tmp;
	} else if(v > max) {
		$s.pop();
		return max;
	} else {
		$s.pop();
		return v;
	}
	$s.pop();
}
Floats.range = function(start,stop,step) {
	$s.push("Floats::range");
	var $spos = $s.length;
	if(step == null) step = 1.0;
	if(null == stop) {
		stop = start;
		start = 0.0;
	}
	if((stop - start) / step == Math.POSITIVE_INFINITY) throw new thx.error.Error("infinite range",null,null,{ fileName : "Floats.hx", lineNumber : 50, className : "Floats", methodName : "range"});
	var range = [], i = -1.0, j;
	if(step < 0) while((j = start + step * ++i) > stop) range.push(j); else while((j = start + step * ++i) < stop) range.push(j);
	$s.pop();
	return range;
	$s.pop();
}
Floats.sign = function(v) {
	$s.push("Floats::sign");
	var $spos = $s.length;
	var $tmp = v < 0?-1:1;
	$s.pop();
	return $tmp;
	$s.pop();
}
Floats.abs = function(a) {
	$s.push("Floats::abs");
	var $spos = $s.length;
	var $tmp = a < 0?-a:a;
	$s.pop();
	return $tmp;
	$s.pop();
}
Floats.min = function(a,b) {
	$s.push("Floats::min");
	var $spos = $s.length;
	var $tmp = a < b?a:b;
	$s.pop();
	return $tmp;
	$s.pop();
}
Floats.max = function(a,b) {
	$s.push("Floats::max");
	var $spos = $s.length;
	var $tmp = a > b?a:b;
	$s.pop();
	return $tmp;
	$s.pop();
}
Floats.wrap = function(v,min,max) {
	$s.push("Floats::wrap");
	var $spos = $s.length;
	var range = max - min + 1;
	if(v < min) v += range * ((min - v) / range + 1);
	var $tmp = min + (v - min) % range;
	$s.pop();
	return $tmp;
	$s.pop();
}
Floats.circularWrap = function(v,max) {
	$s.push("Floats::circularWrap");
	var $spos = $s.length;
	v = v % max;
	if(v < 0) v += max;
	$s.pop();
	return v;
	$s.pop();
}
Floats.interpolate = function(f,a,b,interpolator) {
	$s.push("Floats::interpolate");
	var $spos = $s.length;
	if(b == null) b = 1.0;
	if(a == null) a = 0.0;
	if(null == interpolator) interpolator = $closure(thx.math.Equations,"linear");
	var $tmp = a + interpolator(f) * (b - a);
	$s.pop();
	return $tmp;
	$s.pop();
}
Floats.interpolatef = function(a,b,interpolator) {
	$s.push("Floats::interpolatef");
	var $spos = $s.length;
	if(b == null) b = 1.0;
	if(a == null) a = 0.0;
	if(null == interpolator) interpolator = $closure(thx.math.Equations,"linear");
	var d = b - a;
	var $tmp = function(f) {
		$s.push("Floats::interpolatef@106");
		var $spos = $s.length;
		var $tmp = a + interpolator(f) * d;
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
Floats.ascending = function(a,b) {
	$s.push("Floats::ascending");
	var $spos = $s.length;
	var $tmp = a < b?-1:a > b?1:0;
	$s.pop();
	return $tmp;
	$s.pop();
}
Floats.descending = function(a,b) {
	$s.push("Floats::descending");
	var $spos = $s.length;
	var $tmp = a > b?-1:a < b?1:0;
	$s.pop();
	return $tmp;
	$s.pop();
}
Floats.format = function(v,param,params,culture) {
	$s.push("Floats::format");
	var $spos = $s.length;
	var $tmp = (Floats.formatf(param,params,culture))(v);
	$s.pop();
	return $tmp;
	$s.pop();
}
Floats.formatf = function(param,params,culture) {
	$s.push("Floats::formatf");
	var $spos = $s.length;
	params = thx.culture.FormatParams.params(param,params,"D");
	var format = params.shift();
	var decimals = params.length > 0?Std.parseInt(params[0]):null;
	switch(format) {
	case "D":
		var $tmp = function(v) {
			$s.push("Floats::formatf@125");
			var $spos = $s.length;
			var $tmp = thx.culture.FormatNumber.decimal(v,decimals,culture);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	case "I":
		var $tmp = function(v) {
			$s.push("Floats::formatf@127");
			var $spos = $s.length;
			var $tmp = thx.culture.FormatNumber["int"](v,culture);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	case "C":
		var s = params.length > 1?params[1]:null;
		var $tmp = function(v) {
			$s.push("Floats::formatf@130");
			var $spos = $s.length;
			var $tmp = thx.culture.FormatNumber.currency(v,s,decimals,culture);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	case "P":
		var $tmp = function(v) {
			$s.push("Floats::formatf@132");
			var $spos = $s.length;
			var $tmp = thx.culture.FormatNumber.percent(v,decimals,culture);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	case "M":
		var $tmp = function(v) {
			$s.push("Floats::formatf@134");
			var $spos = $s.length;
			var $tmp = thx.culture.FormatNumber.permille(v,decimals,culture);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	default:
		var $tmp = (function($this) {
			var $r;
			throw new thx.error.Error("Unsupported number format: {0}",null,format,{ fileName : "Floats.hx", lineNumber : 136, className : "Floats", methodName : "formatf"});
			return $r;
		}(this));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Floats.prototype.__class__ = Floats;
Std = function() { }
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	$s.push("Std::is");
	var $spos = $s.length;
	var $tmp = js.Boot.__instanceof(v,t);
	$s.pop();
	return $tmp;
	$s.pop();
}
Std.string = function(s) {
	$s.push("Std::string");
	var $spos = $s.length;
	var $tmp = js.Boot.__string_rec(s,"");
	$s.pop();
	return $tmp;
	$s.pop();
}
Std["int"] = function(x) {
	$s.push("Std::int");
	var $spos = $s.length;
	if(x < 0) {
		var $tmp = Math.ceil(x);
		$s.pop();
		return $tmp;
	}
	var $tmp = Math.floor(x);
	$s.pop();
	return $tmp;
	$s.pop();
}
Std.parseInt = function(x) {
	$s.push("Std::parseInt");
	var $spos = $s.length;
	var v = parseInt(x,10);
	if(v == 0 && x.charCodeAt(1) == 120) v = parseInt(x);
	if(isNaN(v)) {
		$s.pop();
		return null;
	}
	var $tmp = v;
	$s.pop();
	return $tmp;
	$s.pop();
}
Std.parseFloat = function(x) {
	$s.push("Std::parseFloat");
	var $spos = $s.length;
	var $tmp = parseFloat(x);
	$s.pop();
	return $tmp;
	$s.pop();
}
Std.random = function(x) {
	$s.push("Std::random");
	var $spos = $s.length;
	var $tmp = Math.floor(Math.random() * x);
	$s.pop();
	return $tmp;
	$s.pop();
}
Std.prototype.__class__ = Std;
thx.math.Const = function() { }
thx.math.Const.__name__ = ["thx","math","Const"];
thx.math.Const.prototype.__class__ = thx.math.Const;
thx.culture.core.NumberInfo = function(decimals,decimalsSeparator,groups,groupsSeparator,patternNegative,patternPositive) {
	if( decimals === $_ ) return;
	$s.push("thx.culture.core.NumberInfo::new");
	var $spos = $s.length;
	this.decimals = decimals;
	this.decimalsSeparator = decimalsSeparator;
	this.groups = groups;
	this.groupsSeparator = groupsSeparator;
	this.patternNegative = patternNegative;
	this.patternPositive = patternPositive;
	$s.pop();
}
thx.culture.core.NumberInfo.__name__ = ["thx","culture","core","NumberInfo"];
thx.culture.core.NumberInfo.prototype.decimals = null;
thx.culture.core.NumberInfo.prototype.decimalsSeparator = null;
thx.culture.core.NumberInfo.prototype.groups = null;
thx.culture.core.NumberInfo.prototype.groupsSeparator = null;
thx.culture.core.NumberInfo.prototype.patternNegative = null;
thx.culture.core.NumberInfo.prototype.patternPositive = null;
thx.culture.core.NumberInfo.prototype.__class__ = thx.culture.core.NumberInfo;
Main = function() { }
Main.__name__ = ["Main"];
Main.example = null;
Main.main = function() {
	$s.push("Main::main");
	var $spos = $s.length;
	var classes = [examples.Area,examples.Bar,examples.Chord,examples.HelloData,examples.HelloDataKey,examples.HelloDataNestedKey,examples.HelloEvent,examples.HelloSort,examples.HelloTransition,examples.HelloTransitionUndefined,examples.HelloWebkitTransition,examples.Line,examples.Moire,examples.SelectAllEnterAdd,examples.SelectEnterAdd,examples.Stack,examples.Stream,examples.Timer,examples.TransitionEquations,examples.ZoomPan];
	thx.js.Dom.select("#examples").selectAll("li").data(classes).enter().append("li").append("a").html().stringf($closure(Main,"description")).attr("href").string("#").on("click",$closure(Main,"click")).first(function(d) {
		$s.push("Main::main@42");
		var $spos = $s.length;
		Main.click(d,0);
		$s.pop();
	});
	$s.pop();
}
Main.description = function(d,i) {
	$s.push("Main::description");
	var $spos = $s.length;
	var $tmp = Strings.humanize(Type.getClassName(d).split(".").pop());
	$s.pop();
	return $tmp;
	$s.pop();
}
Main.click = function(d,i) {
	$s.push("Main::click");
	var $spos = $s.length;
	if(null != Main.example) Main.example.destroy();
	Main.example = Type.createInstance(d,["#example"]);
	Main.example.run();
	$s.pop();
}
Main.prototype.__class__ = Main;
thx.geom.layout.Chord = function(p) {
	if( p === $_ ) return;
	$s.push("thx.geom.layout.Chord::new");
	var $spos = $s.length;
	this._padding = 0;
	$s.pop();
}
thx.geom.layout.Chord.__name__ = ["thx","geom","layout","Chord"];
thx.geom.layout.Chord.prototype._chords = null;
thx.geom.layout.Chord.prototype._groups = null;
thx.geom.layout.Chord.prototype._matrix = null;
thx.geom.layout.Chord.prototype._n = null;
thx.geom.layout.Chord.prototype._padding = null;
thx.geom.layout.Chord.prototype._sortGroups = null;
thx.geom.layout.Chord.prototype._sortSubgroups = null;
thx.geom.layout.Chord.prototype._sortChords = null;
thx.geom.layout.Chord.prototype.relayout = function() {
	$s.push("thx.geom.layout.Chord::relayout");
	var $spos = $s.length;
	var subgroups = new Hash(), groupSums = [], groupIndex = Ints.range(this._n), subgroupIndex = [], k, x, x0, i, j;
	this._chords = [];
	this._groups = [];
	k = 0;
	i = -1;
	while(++i < this._n) {
		x = 0;
		j = -1;
		while(++j < this._n) x += this._matrix[i][j];
		groupSums.push(x);
		subgroupIndex.push(Ints.range(this._n));
		k += x;
	}
	if(null != this._sortGroups) {
		var sg = this._sortGroups;
		groupIndex.sort(function(a,b) {
			$s.push("thx.geom.layout.Chord::relayout@60");
			var $spos = $s.length;
			var $tmp = sg(groupSums[a],groupSums[b]);
			$s.pop();
			return $tmp;
			$s.pop();
		});
	}
	if(null != this._sortSubgroups) {
		var ss = this._sortSubgroups, m = this._matrix;
		subgroupIndex.forEach(function(d,i1) {
			$s.push("thx.geom.layout.Chord::relayout@70");
			var $spos = $s.length;
			d.sort(function(a,b) {
				$s.push("thx.geom.layout.Chord::relayout@70@71");
				var $spos = $s.length;
				var $tmp = ss(m[i1][a],m[i1][b]);
				$s.pop();
				return $tmp;
				$s.pop();
			});
			$s.pop();
		});
	}
	k = (2 * Math.PI - this._padding * this._n) / k;
	x = 0;
	i = -1;
	while(++i < this._n) {
		x0 = x;
		j = -1;
		var di = null;
		while(++j < this._n) {
			di = groupIndex[i];
			var dj = subgroupIndex[i][j], v = this._matrix[di][dj];
			subgroups.set(di + "-" + dj,{ index : di, subindex : dj, startAngle : x, endAngle : x += v * k, value : 0.0 + v});
		}
		this._groups.push({ index : di, subindex : null, startAngle : x0, endAngle : x, value : (x - x0) / k});
		x += this._padding;
	}
	i = -1;
	while(++i < this._n) {
		j = i - 1;
		while(++j < this._n) {
			var source = subgroups.get(i + "-" + j), target = subgroups.get(j + "-" + i);
			if(null != source.value || null != target.value) this._chords.push({ source : source, target : target});
		}
	}
	if(null != this._sortChords) this.resort();
	$s.pop();
}
thx.geom.layout.Chord.prototype.resort = function() {
	$s.push("thx.geom.layout.Chord::resort");
	var $spos = $s.length;
	var sc = this._sortChords;
	this._chords.sort(function(a,b) {
		$s.push("thx.geom.layout.Chord::resort@135");
		var $spos = $s.length;
		var aa = Math.min(a.source.value,a.target.value);
		var bb = Math.min(b.source.value,b.target.value);
		var $tmp = sc(aa,bb);
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
}
thx.geom.layout.Chord.prototype.getMatrix = function() {
	$s.push("thx.geom.layout.Chord::getMatrix");
	var $spos = $s.length;
	var $tmp = this._matrix;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.geom.layout.Chord.prototype.matrix = function(x) {
	$s.push("thx.geom.layout.Chord::matrix");
	var $spos = $s.length;
	this._matrix = x;
	this._n = this._matrix.length;
	this._chords = null;
	this._groups = null;
	$s.pop();
	return this;
	$s.pop();
}
thx.geom.layout.Chord.prototype.getPadding = function() {
	$s.push("thx.geom.layout.Chord::getPadding");
	var $spos = $s.length;
	var $tmp = this._padding;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.geom.layout.Chord.prototype.padding = function(v) {
	$s.push("thx.geom.layout.Chord::padding");
	var $spos = $s.length;
	this._padding = v;
	this._chords = null;
	this._groups = null;
	$s.pop();
	return this;
	$s.pop();
}
thx.geom.layout.Chord.prototype.getSortGroups = function() {
	$s.push("thx.geom.layout.Chord::getSortGroups");
	var $spos = $s.length;
	var $tmp = this._sortGroups;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.geom.layout.Chord.prototype.sortGroups = function(v) {
	$s.push("thx.geom.layout.Chord::sortGroups");
	var $spos = $s.length;
	this._sortGroups = v;
	this._chords = null;
	this._groups = null;
	$s.pop();
	return this;
	$s.pop();
}
thx.geom.layout.Chord.prototype.getSortSubgroups = function() {
	$s.push("thx.geom.layout.Chord::getSortSubgroups");
	var $spos = $s.length;
	var $tmp = this._sortSubgroups;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.geom.layout.Chord.prototype.sortSubgroups = function(v) {
	$s.push("thx.geom.layout.Chord::sortSubgroups");
	var $spos = $s.length;
	this._sortSubgroups = v;
	this._chords = null;
	$s.pop();
	return this;
	$s.pop();
}
thx.geom.layout.Chord.prototype.getSortChords = function() {
	$s.push("thx.geom.layout.Chord::getSortChords");
	var $spos = $s.length;
	var $tmp = this._sortChords;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.geom.layout.Chord.prototype.sortChords = function(v) {
	$s.push("thx.geom.layout.Chord::sortChords");
	var $spos = $s.length;
	this._sortChords = v;
	if(null != this._chords) this.resort();
	$s.pop();
	return this;
	$s.pop();
}
thx.geom.layout.Chord.prototype.chords = function() {
	$s.push("thx.geom.layout.Chord::chords");
	var $spos = $s.length;
	if(null == this._chords) this.relayout();
	var $tmp = this._chords;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.geom.layout.Chord.prototype.groups = function() {
	$s.push("thx.geom.layout.Chord::groups");
	var $spos = $s.length;
	if(null == this._groups) this.relayout();
	var $tmp = this._groups;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.geom.layout.Chord.prototype.__class__ = thx.geom.layout.Chord;
thx.js.AccessHtml = function(selection) {
	if( selection === $_ ) return;
	$s.push("thx.js.AccessHtml::new");
	var $spos = $s.length;
	thx.js.Access.call(this,selection);
	$s.pop();
}
thx.js.AccessHtml.__name__ = ["thx","js","AccessHtml"];
thx.js.AccessHtml.__super__ = thx.js.Access;
for(var k in thx.js.Access.prototype ) thx.js.AccessHtml.prototype[k] = thx.js.Access.prototype[k];
thx.js.AccessHtml.prototype.get = function() {
	$s.push("thx.js.AccessHtml::get");
	var $spos = $s.length;
	var $tmp = this.selection.firstNode(function(node) {
		$s.push("thx.js.AccessHtml::get@14");
		var $spos = $s.length;
		var $tmp = node.innerHTML;
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessHtml.prototype.string = function(v) {
	$s.push("thx.js.AccessHtml::string");
	var $spos = $s.length;
	this.selection.eachNode(function(node,i) {
		$s.push("thx.js.AccessHtml::string@19");
		var $spos = $s.length;
		node.innerHTML = v;
		$s.pop();
	});
	var $tmp = this.selection;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessHtml.prototype.clear = function() {
	$s.push("thx.js.AccessHtml::clear");
	var $spos = $s.length;
	this.selection.eachNode(function(node,i) {
		$s.push("thx.js.AccessHtml::clear@25");
		var $spos = $s.length;
		node.innerHTML = "";
		$s.pop();
	});
	var $tmp = this.selection;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessHtml.prototype["float"] = function(v) {
	$s.push("thx.js.AccessHtml::float");
	var $spos = $s.length;
	this.selection.eachNode(function(node,i) {
		$s.push("thx.js.AccessHtml::float@31");
		var $spos = $s.length;
		node.innerHTML = "" + v;
		$s.pop();
	});
	var $tmp = this.selection;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessHtml.prototype.__class__ = thx.js.AccessHtml;
thx.js.AccessDataHtml = function(selection) {
	if( selection === $_ ) return;
	$s.push("thx.js.AccessDataHtml::new");
	var $spos = $s.length;
	thx.js.AccessHtml.call(this,selection);
	$s.pop();
}
thx.js.AccessDataHtml.__name__ = ["thx","js","AccessDataHtml"];
thx.js.AccessDataHtml.__super__ = thx.js.AccessHtml;
for(var k in thx.js.AccessHtml.prototype ) thx.js.AccessDataHtml.prototype[k] = thx.js.AccessHtml.prototype[k];
thx.js.AccessDataHtml.prototype.stringf = function(v) {
	$s.push("thx.js.AccessDataHtml::stringf");
	var $spos = $s.length;
	this.selection.eachNode(function(node,i) {
		$s.push("thx.js.AccessDataHtml::stringf@45");
		var $spos = $s.length;
		var s = v(Reflect.field(node,"__data__"),i);
		if(null == s) s = "";
		node.innerHTML = s;
		$s.pop();
	});
	var $tmp = this.selection;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessDataHtml.prototype.floatf = function(v) {
	$s.push("thx.js.AccessDataHtml::floatf");
	var $spos = $s.length;
	this.selection.eachNode(function(node,i) {
		$s.push("thx.js.AccessDataHtml::floatf@56");
		var $spos = $s.length;
		var f = v(Reflect.field(node,"__data__"),i);
		if(null == f) node.innerHTML = ""; else node.innerHTML = "" + f;
		$s.pop();
	});
	var $tmp = this.selection;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessDataHtml.prototype.data = function() {
	$s.push("thx.js.AccessDataHtml::data");
	var $spos = $s.length;
	var $tmp = this.stringf(function(d,_) {
		$s.push("thx.js.AccessDataHtml::data@69");
		var $spos = $s.length;
		var $tmp = "" + d;
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessDataHtml.prototype.__class__ = thx.js.AccessDataHtml;
if(!thx.collections) thx.collections = {}
thx.collections.IntHashList = function(p) {
	if( p === $_ ) return;
	$s.push("thx.collections.IntHashList::new");
	var $spos = $s.length;
	this.length = 0;
	this.__keys = [];
	this.__hash = new IntHash();
	$s.pop();
}
thx.collections.IntHashList.__name__ = ["thx","collections","IntHashList"];
thx.collections.IntHashList.prototype.length = null;
thx.collections.IntHashList.prototype.set = function(key,value) {
	$s.push("thx.collections.IntHashList::set");
	var $spos = $s.length;
	if(!this.__hash.exists(key)) {
		this.__keys.push(key);
		this.length++;
	}
	this.__hash.set(key,value);
	$s.pop();
}
thx.collections.IntHashList.prototype.get = function(key) {
	$s.push("thx.collections.IntHashList::get");
	var $spos = $s.length;
	var $tmp = this.__hash.get(key);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.collections.IntHashList.prototype.getAt = function(index) {
	$s.push("thx.collections.IntHashList::getAt");
	var $spos = $s.length;
	var $tmp = this.__hash.get(this.__keys[index]);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.collections.IntHashList.prototype.exists = function(key) {
	$s.push("thx.collections.IntHashList::exists");
	var $spos = $s.length;
	var $tmp = this.__hash.exists(key);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.collections.IntHashList.prototype.remove = function(key) {
	$s.push("thx.collections.IntHashList::remove");
	var $spos = $s.length;
	var item = this.__hash.get(key);
	if(item == null) {
		$s.pop();
		return null;
	}
	this.__hash.remove(key);
	this.__keys.remove(key);
	this.length--;
	$s.pop();
	return item;
	$s.pop();
}
thx.collections.IntHashList.prototype.removeAt = function(index) {
	$s.push("thx.collections.IntHashList::removeAt");
	var $spos = $s.length;
	if(index < 0 || index >= this.length) {
		$s.pop();
		return null;
	}
	var key = this.__keys[index];
	var item = this.__hash.get(key);
	this.__hash.remove(key);
	this.__keys.remove(key);
	this.length--;
	$s.pop();
	return item;
	$s.pop();
}
thx.collections.IntHashList.prototype.keys = function() {
	$s.push("thx.collections.IntHashList::keys");
	var $spos = $s.length;
	var $tmp = this.__keys.iterator();
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.collections.IntHashList.prototype.iterator = function() {
	$s.push("thx.collections.IntHashList::iterator");
	var $spos = $s.length;
	var $tmp = this.array().iterator();
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.collections.IntHashList.prototype.clear = function() {
	$s.push("thx.collections.IntHashList::clear");
	var $spos = $s.length;
	this.__hash = new IntHash();
	this.__keys = [];
	this.length = 0;
	$s.pop();
}
thx.collections.IntHashList.prototype.array = function() {
	$s.push("thx.collections.IntHashList::array");
	var $spos = $s.length;
	var values = [];
	var _g = 0, _g1 = this.__keys;
	while(_g < _g1.length) {
		var k = _g1[_g];
		++_g;
		values.push(this.__hash.get(k));
	}
	$s.pop();
	return values;
	$s.pop();
}
thx.collections.IntHashList.prototype.toString = function() {
	$s.push("thx.collections.IntHashList::toString");
	var $spos = $s.length;
	var s = new StringBuf();
	s.b[s.b.length] = "{";
	var it = this.keys();
	while( it.hasNext() ) {
		var i = it.next();
		s.b[s.b.length] = i;
		s.b[s.b.length] = " => ";
		s.b[s.b.length] = Std.string(this.get(i));
		if(it.hasNext()) s.b[s.b.length] = ", ";
	}
	s.b[s.b.length] = "}";
	var $tmp = s.b.join("");
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.collections.IntHashList.prototype.__keys = null;
thx.collections.IntHashList.prototype.__hash = null;
thx.collections.IntHashList.prototype.__class__ = thx.collections.IntHashList;
thx.js.Timer = function() { }
thx.js.Timer.__name__ = ["thx","js","Timer"];
thx.js.Timer.timer = function(f,delay) {
	$s.push("thx.js.Timer::timer");
	var $spos = $s.length;
	if(delay == null) delay = 0.0;
	var now = Date.now().getTime(), found = false, start = now + delay, t0, t1 = thx.js.Timer.queue;
	if(!Math.isFinite(delay)) {
		$s.pop();
		return;
	}
	while(null != t1) {
		if(Reflect.compareMethods(f,t1.f)) {
			t1.then = now;
			t1.delay = delay;
			found = true;
		} else {
			var x = t1.then + t1.delay;
			if(x < start) start = x;
		}
		t0 = t1;
		t1 = t1.next;
	}
	if(!found) thx.js.Timer.queue = { f : f, then : now, delay : delay, next : thx.js.Timer.queue, flush : false};
	if(0 == thx.js.Timer.interval) {
		clearTimeout(thx.js.Timer.timeout);
		thx.js.Timer.timeout = setTimeout(thx.js.Timer.start,Math.max(24,start - now));
	}
	$s.pop();
}
thx.js.Timer.start = function() {
	$s.push("thx.js.Timer::start");
	var $spos = $s.length;
	thx.js.Timer.interval = 1;
	thx.js.Timer.timeout = 0;
	js.Lib.window.requestAnimationFrame(thx.js.Timer._step);
	$s.pop();
}
thx.js.Timer.step = function() {
	$s.push("thx.js.Timer::step");
	var $spos = $s.length;
	var elapsed, now = Date.now().getTime(), t0 = null, t1 = thx.js.Timer.queue;
	while(null != t1) {
		elapsed = now - t1.then;
		if(elapsed > t1.delay) t1.flush = t1.f(elapsed);
		t1 = (t0 = t1).next;
	}
	thx.js.Timer.flush();
	if(0 != thx.js.Timer.interval) js.Lib.window.requestAnimationFrame(thx.js.Timer._step);
	$s.pop();
}
thx.js.Timer.flush = function() {
	$s.push("thx.js.Timer::flush");
	var $spos = $s.length;
	var t0 = null, t1 = thx.js.Timer.queue;
	while(null != t1) t1 = t1.flush?null != t0?t0.next = t1.next:thx.js.Timer.queue = t1.next:(t0 = t1).next;
	if(null == t0) thx.js.Timer.interval = 0;
	$s.pop();
}
thx.js.Timer.prototype.__class__ = thx.js.Timer;
examples.HelloDataKey = function(cid) {
	if( cid === $_ ) return;
	$s.push("examples.HelloDataKey::new");
	var $spos = $s.length;
	Example.call(this,cid);
	$s.pop();
}
examples.HelloDataKey.__name__ = ["examples","HelloDataKey"];
examples.HelloDataKey.__super__ = Example;
for(var k in Example.prototype ) examples.HelloDataKey.prototype[k] = Example.prototype[k];
examples.HelloDataKey.prototype._refresh = null;
examples.HelloDataKey.prototype.runExample = function() {
	$s.push("examples.HelloDataKey::runExample");
	var $spos = $s.length;
	var i = 0, data = [{ id : i++, value : 4},{ id : i++, value : 8},{ id : i++, value : 15},{ id : i++, value : 16},{ id : i++, value : 23},{ id : i++, value : 42}];
	var container = this.container;
	var transform = function() {
		$s.push("examples.HelloDataKey::runExample@29");
		var $spos = $s.length;
		var t = container.selectAll("span").data(data,function(d,i1) {
			$s.push("examples.HelloDataKey::runExample@29@32");
			var $spos = $s.length;
			var $tmp = "" + d.id;
			$s.pop();
			return $tmp;
			$s.pop();
		});
		t.enter().append("span").attr("id").stringf(function(d,i1) {
			$s.push("examples.HelloDataKey::runExample@29@36");
			var $spos = $s.length;
			var $tmp = "span-" + d.id;
			$s.pop();
			return $tmp;
			$s.pop();
		}).append("svg:svg").attr("width")["float"](100).attr("height")["float"](100).append("svg:text").attr("x").string("50%").attr("y").string("50%").attr("dy").string(".35em").attr("text-anchor").string("middle").attr("fill").string("white").attr("stroke").string("black").attr("stroke-width")["float"](1.5).style("font").string("36pt Comic Sans MS").style("text-shadow").string("3px 3px 3px rgba(0,0,0,.4)").text().floatf(function(d,i1) {
			$s.push("examples.HelloDataKey::runExample@29@50");
			var $spos = $s.length;
			var $tmp = d.value;
			$s.pop();
			return $tmp;
			$s.pop();
		});
		t.exit().remove();
		t.update().select("text").text().floatf(function(d,i1) {
			$s.push("examples.HelloDataKey::runExample@29@55");
			var $spos = $s.length;
			var $tmp = d.value;
			$s.pop();
			return $tmp;
			$s.pop();
		});
		$s.pop();
	};
	container.append("div").text().string("Yout lucky numbers are:");
	this._refresh = function(_) {
		$s.push("examples.HelloDataKey::runExample@61");
		var $spos = $s.length;
		data.shift();
		data.push({ id : i++ % 7, value : Std.random(100)});
		transform();
		$s.pop();
	};
	transform();
	js.Lib.window.addEventListener("keypress",this._refresh,false);
	$s.pop();
}
examples.HelloDataKey.prototype.destroyExample = function() {
	$s.push("examples.HelloDataKey::destroyExample");
	var $spos = $s.length;
	js.Lib.window.removeEventListener("keypress",this._refresh,false);
	$s.pop();
}
examples.HelloDataKey.prototype.__class__ = examples.HelloDataKey;
thx.js.BaseTransition = function(selection) {
	if( selection === $_ ) return;
	$s.push("thx.js.BaseTransition::new");
	var $spos = $s.length;
	this.selection = selection;
	var tid = this._transitionId = thx.js.BaseTransition._inheritid > 0?thx.js.BaseTransition._inheritid:++thx.js.BaseTransition._id;
	this._tweens = new Hash();
	this._interpolators = [];
	this._remove = false;
	this._stage = [];
	this._delay = [];
	this._duration = [];
	this._ease = thx.math.Ease.mode(thx.math.EaseMode.EaseInEaseOut,$closure(thx.math.Equations,"cubic"));
	this._step = $closure(this,"step");
	selection.eachNode(function(n,_) {
		$s.push("thx.js.BaseTransition::new@54");
		var $spos = $s.length;
		if(Reflect.hasField(n,"__transition__")) Reflect.field(n,"__transition__").owner = tid; else n["__transition__"] = { owner : tid};
		$s.pop();
	});
	this.delay(null,0);
	this.duration(null,250);
	$s.pop();
}
thx.js.BaseTransition.__name__ = ["thx","js","BaseTransition"];
thx.js.BaseTransition.prototype._transitionId = null;
thx.js.BaseTransition.prototype._tweens = null;
thx.js.BaseTransition.prototype._interpolators = null;
thx.js.BaseTransition.prototype._remove = null;
thx.js.BaseTransition.prototype._stage = null;
thx.js.BaseTransition.prototype._delay = null;
thx.js.BaseTransition.prototype._duration = null;
thx.js.BaseTransition.prototype._durationMax = null;
thx.js.BaseTransition.prototype._ease = null;
thx.js.BaseTransition.prototype._step = null;
thx.js.BaseTransition.prototype._start = null;
thx.js.BaseTransition.prototype._end = null;
thx.js.BaseTransition.prototype.selection = null;
thx.js.BaseTransition.prototype.step = function(elapsed) {
	$s.push("thx.js.BaseTransition::step");
	var $spos = $s.length;
	var clear = true, k = -1, me = this;
	this.selection.eachNode(function(n,i) {
		$s.push("thx.js.BaseTransition::step@67");
		var $spos = $s.length;
		if(2 == me._stage[++k]) {
			$s.pop();
			return;
		}
		var t = (elapsed - me._delay[k]) / me._duration[k], tx = Reflect.field(n,"__transition__"), te, tk, ik = me._interpolators[k];
		if(t < 1) {
			clear = false;
			if(t < 0) {
				$s.pop();
				return;
			}
		} else t = 1;
		if(null != me._stage[k]) {
			if(null == tx || tx.active != me._transitionId) {
				me._stage[k] = 2;
				$s.pop();
				return;
			}
		} else if(null == tx || tx.active > me._transitionId) {
			me._stage[k] = 2;
			$s.pop();
			return;
		} else {
			me._stage[k] = 1;
			if(null != me._start) me._start(n,i);
			ik = me._interpolators[k] = new Hash();
			tx.active = me._transitionId;
			var $it0 = me._tweens.keys();
			while( $it0.hasNext() ) {
				var tk1 = $it0.next();
				var f = me._tweens.get(tk1);
				ik.set(tk1,f(n,i));
			}
		}
		te = me._ease(t);
		var $it1 = me._tweens.keys();
		while( $it1.hasNext() ) {
			var tk1 = $it1.next();
			(ik.get(tk1))(te);
		}
		if(1 == t) {
			me._stage[k] = 2;
			if(tx.active == me._transitionId) {
				var owner = tx.owner;
				if(owner == me._transitionId) {
					Reflect.deleteField(n,"__transition__");
					if(me._remove) n.parentNode.removeChild(n);
				}
				thx.js.BaseTransition._inheritid = me._transitionId;
				if(null != me._end) me._end(n,i);
				thx.js.BaseTransition._inheritid = 0;
				tx.owner = owner;
			}
		}
		$s.pop();
	});
	$s.pop();
	return clear;
	$s.pop();
}
thx.js.BaseTransition.prototype.startNode = function(f) {
	$s.push("thx.js.BaseTransition::startNode");
	var $spos = $s.length;
	this._start = f;
	var $tmp = this._this();
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BaseTransition.prototype.endNode = function(f) {
	$s.push("thx.js.BaseTransition::endNode");
	var $spos = $s.length;
	this._end = f;
	var $tmp = this._this();
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BaseTransition.prototype.stop = function() {
	$s.push("thx.js.BaseTransition::stop");
	var $spos = $s.length;
	var k = -1, me = this;
	this.selection.eachNode(function(n,i) {
		$s.push("thx.js.BaseTransition::stop@156");
		var $spos = $s.length;
		me._stage[++k] = 2;
		Reflect.deleteField(n,"__transition__");
		$s.pop();
	});
	var $tmp = this._this();
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BaseTransition.prototype.delay = function(f,v) {
	$s.push("thx.js.BaseTransition::delay");
	var $spos = $s.length;
	if(v == null) v = 0.0;
	var delayMin = Math.POSITIVE_INFINITY, k = -1, me = this;
	if(null != f) this.selection.eachNode(function(n,i) {
		$s.push("thx.js.BaseTransition::delay@170");
		var $spos = $s.length;
		var x = me._delay[++k] = f(n,i);
		if(x < delayMin) delayMin = x;
		$s.pop();
	}); else {
		delayMin = v;
		this.selection.eachNode(function(n,i) {
			$s.push("thx.js.BaseTransition::delay@177");
			var $spos = $s.length;
			me._delay[++k] = delayMin;
			$s.pop();
		});
	}
	thx.js.Timer.timer(this._step,delayMin);
	var $tmp = this._this();
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BaseTransition.prototype.duration = function(f,v) {
	$s.push("thx.js.BaseTransition::duration");
	var $spos = $s.length;
	if(v == null) v = 0.0;
	var k = -1, me = this;
	if(null != f) {
		this._durationMax = 0;
		this.selection.eachNode(function(n,i) {
			$s.push("thx.js.BaseTransition::duration@192");
			var $spos = $s.length;
			var x = me._duration[++k] = f(n,i);
			if(x > me._durationMax) me._durationMax = x;
			$s.pop();
		});
	} else {
		this._durationMax = v;
		this.selection.eachNode(function(n,i) {
			$s.push("thx.js.BaseTransition::duration@199");
			var $spos = $s.length;
			me._duration[++k] = me._durationMax;
			$s.pop();
		});
	}
	var $tmp = this._this();
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BaseTransition.prototype.ease = function(f,easemode) {
	$s.push("thx.js.BaseTransition::ease");
	var $spos = $s.length;
	this._ease = thx.math.Ease.mode(easemode,f);
	var $tmp = this._this();
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BaseTransition.prototype.remove = function(v) {
	$s.push("thx.js.BaseTransition::remove");
	var $spos = $s.length;
	if(v == null) v = true;
	this._remove = v;
	var $tmp = this._this();
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BaseTransition.prototype.select = function(selector) {
	$s.push("thx.js.BaseTransition::select");
	var $spos = $s.length;
	var k, t = this.createTransition(this.selection.select(selector));
	t._ease = this._ease;
	var delay = this._delay;
	var duration = this._duration;
	k = -1;
	t.delay(function(d,i) {
		$s.push("thx.js.BaseTransition::select@224");
		var $spos = $s.length;
		var $tmp = delay[++k];
		$s.pop();
		return $tmp;
		$s.pop();
	});
	k = -1;
	t.delay(function(d,i) {
		$s.push("thx.js.BaseTransition::select@225");
		var $spos = $s.length;
		var $tmp = duration[++k];
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return t;
	$s.pop();
}
thx.js.BaseTransition.prototype.selectAll = function(selector) {
	$s.push("thx.js.BaseTransition::selectAll");
	var $spos = $s.length;
	var k, t = this.createTransition(this.selection.selectAll(selector));
	t._ease = this._ease;
	var delay = this._delay;
	var duration = this._duration;
	k = -1;
	t.delay(function(d,i) {
		$s.push("thx.js.BaseTransition::selectAll@235");
		var $spos = $s.length;
		var $tmp = delay[i > 0?k:++k];
		$s.pop();
		return $tmp;
		$s.pop();
	});
	k = -1;
	t.delay(function(d,i) {
		$s.push("thx.js.BaseTransition::selectAll@236");
		var $spos = $s.length;
		var $tmp = duration[i > 0?k:++k];
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return t;
	$s.pop();
}
thx.js.BaseTransition.prototype.createTransition = function(selection) {
	$s.push("thx.js.BaseTransition::createTransition");
	var $spos = $s.length;
	var $tmp = (function($this) {
		var $r;
		throw new thx.error.AbstractMethod({ fileName : "Transition.hx", lineNumber : 242, className : "thx.js.BaseTransition", methodName : "createTransition"});
		return $r;
	}(this));
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BaseTransition.prototype._this = function() {
	$s.push("thx.js.BaseTransition::_this");
	var $spos = $s.length;
	var $tmp = this;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BaseTransition.prototype.__class__ = thx.js.BaseTransition;
thx.js.UnboundTransition = function(selection) {
	if( selection === $_ ) return;
	$s.push("thx.js.UnboundTransition::new");
	var $spos = $s.length;
	thx.js.BaseTransition.call(this,selection);
	$s.pop();
}
thx.js.UnboundTransition.__name__ = ["thx","js","UnboundTransition"];
thx.js.UnboundTransition.__super__ = thx.js.BaseTransition;
for(var k in thx.js.BaseTransition.prototype ) thx.js.UnboundTransition.prototype[k] = thx.js.BaseTransition.prototype[k];
thx.js.UnboundTransition.prototype.style = function(name) {
	$s.push("thx.js.UnboundTransition::style");
	var $spos = $s.length;
	var $tmp = new thx.js.AccessTweenStyle(name,this,this._tweens);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.UnboundTransition.prototype.attr = function(name) {
	$s.push("thx.js.UnboundTransition::attr");
	var $spos = $s.length;
	var $tmp = new thx.js.AccessTweenAttribute(name,this,this._tweens);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.UnboundTransition.prototype.createTransition = function(selection) {
	$s.push("thx.js.UnboundTransition::createTransition");
	var $spos = $s.length;
	var $tmp = new thx.js.UnboundTransition(selection);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.UnboundTransition.prototype.__class__ = thx.js.UnboundTransition;
thx.js.BoundTransition = function(selection) {
	if( selection === $_ ) return;
	$s.push("thx.js.BoundTransition::new");
	var $spos = $s.length;
	thx.js.BaseTransition.call(this,selection);
	$s.pop();
}
thx.js.BoundTransition.__name__ = ["thx","js","BoundTransition"];
thx.js.BoundTransition.__super__ = thx.js.BaseTransition;
for(var k in thx.js.BaseTransition.prototype ) thx.js.BoundTransition.prototype[k] = thx.js.BaseTransition.prototype[k];
thx.js.BoundTransition.prototype.style = function(name) {
	$s.push("thx.js.BoundTransition::style");
	var $spos = $s.length;
	var $tmp = new thx.js.AccessDataTweenStyle(name,this,this._tweens);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BoundTransition.prototype.attr = function(name) {
	$s.push("thx.js.BoundTransition::attr");
	var $spos = $s.length;
	var $tmp = new thx.js.AccessDataTweenAttribute(name,this,this._tweens);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BoundTransition.prototype.start = function(f) {
	$s.push("thx.js.BoundTransition::start");
	var $spos = $s.length;
	var $tmp = this.startNode(function(n,i) {
		$s.push("thx.js.BoundTransition::start@271");
		var $spos = $s.length;
		f(Reflect.field(n,"__data__"),i);
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BoundTransition.prototype.end = function(f) {
	$s.push("thx.js.BoundTransition::end");
	var $spos = $s.length;
	var $tmp = this.endNode(function(n,i) {
		$s.push("thx.js.BoundTransition::end@276");
		var $spos = $s.length;
		f(Reflect.field(n,"__data__"),i);
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BoundTransition.prototype.createTransition = function(selection) {
	$s.push("thx.js.BoundTransition::createTransition");
	var $spos = $s.length;
	var $tmp = new thx.js.BoundTransition(selection);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.BoundTransition.prototype.__class__ = thx.js.BoundTransition;
thx.math.Equations = function() { }
thx.math.Equations.__name__ = ["thx","math","Equations"];
thx.math.Equations.linear = function(v) {
	$s.push("thx.math.Equations::linear");
	var $spos = $s.length;
	$s.pop();
	return v;
	$s.pop();
}
thx.math.Equations.polynomial = function(t,e) {
	$s.push("thx.math.Equations::polynomial");
	var $spos = $s.length;
	var $tmp = Math.pow(t,e);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.Equations.quadratic = function(t) {
	$s.push("thx.math.Equations::quadratic");
	var $spos = $s.length;
	var $tmp = thx.math.Equations.polynomial(t,2);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.Equations.cubic = function(t) {
	$s.push("thx.math.Equations::cubic");
	var $spos = $s.length;
	var $tmp = thx.math.Equations.polynomial(t,3);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.Equations.sin = function(t) {
	$s.push("thx.math.Equations::sin");
	var $spos = $s.length;
	var $tmp = 1 - Math.cos(t * Math.PI / 2);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.Equations.exponential = function(t) {
	$s.push("thx.math.Equations::exponential");
	var $spos = $s.length;
	var $tmp = t != 0?Math.pow(2,10 * (t - 1)) - 1e-3:0;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.Equations.circle = function(t) {
	$s.push("thx.math.Equations::circle");
	var $spos = $s.length;
	var $tmp = 1 - Math.sqrt(1 - t * t);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.Equations.elastic = function(t,a,p) {
	$s.push("thx.math.Equations::elastic");
	var $spos = $s.length;
	var s;
	if(null == p) p = 0.45;
	if(null == a) {
		a = 1;
		s = p / 4;
	} else s = p / (2 * Math.PI) / Math.asin(1 / a);
	var $tmp = 1 + a * Math.pow(2,10 * -t) * Math.sin((t - s) * 2 * Math.PI / p);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.Equations.elasticf = function(a,p) {
	$s.push("thx.math.Equations::elasticf");
	var $spos = $s.length;
	var s;
	if(null == p) p = 0.45;
	if(null == a) {
		a = 1;
		s = p / 4;
	} else s = p / (2 * Math.PI) / Math.asin(1 / a);
	var $tmp = function(t) {
		$s.push("thx.math.Equations::elasticf@70");
		var $spos = $s.length;
		var $tmp = 1 + a * Math.pow(2,10 * -t) * Math.sin((t - s) * 2 * Math.PI / p);
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.Equations.back = function(t,s) {
	$s.push("thx.math.Equations::back");
	var $spos = $s.length;
	if(null == s) s = 1.70158;
	var $tmp = t * t * ((s + 1) * t - s);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.Equations.backf = function(s) {
	$s.push("thx.math.Equations::backf");
	var $spos = $s.length;
	if(null == s) s = 1.70158;
	var $tmp = function(t) {
		$s.push("thx.math.Equations::backf@83");
		var $spos = $s.length;
		var $tmp = t * t * ((s + 1) * t - s);
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.Equations.bounce = function(t) {
	$s.push("thx.math.Equations::bounce");
	var $spos = $s.length;
	var $tmp = t < 1 / 2.75?7.5625 * t * t:t < 2 / 2.75?7.5625 * (t -= 1.5 / 2.75) * t + .75:t < 2.5 / 2.75?7.5625 * (t -= 2.25 / 2.75) * t + .9375:7.5625 * (t -= 2.625 / 2.75) * t + .984375;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.Equations.polynomialf = function(e) {
	$s.push("thx.math.Equations::polynomialf");
	var $spos = $s.length;
	var $tmp = function(t) {
		$s.push("thx.math.Equations::polynomialf@96");
		var $spos = $s.length;
		thx.math.Equations.polynomial(t,e);
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.Equations.prototype.__class__ = thx.math.Equations;
examples.Streams = function() { }
examples.Streams.__name__ = ["examples","Streams"];
examples.Streams.bump = function(a,m) {
	$s.push("examples.Streams::bump");
	var $spos = $s.length;
	var x = 1 / (.1 + Math.random()), y = 2 * Math.random() - .5, z = 10 / (.1 + Math.random());
	var _g = 0;
	while(_g < m) {
		var i = _g++;
		var w = (i / m - y) * z;
		a[i] += x * Math.exp(-w * w);
	}
	$s.pop();
}
examples.Streams.layers = function(n,m,o) {
	$s.push("examples.Streams::layers");
	var $spos = $s.length;
	if(o == null) o = 0.0;
	var $tmp = Ints.range(n).map(function(_,_1) {
		$s.push("examples.Streams::layers@26");
		var $spos = $s.length;
		var a = [];
		var _g = 0;
		while(_g < m) {
			var i = _g++;
			a[i] = o + o * Math.random();
		}
		var _g = 0;
		while(_g < 5) {
			var i = _g++;
			examples.Streams.bump(a,m);
		}
		var $tmp = a.map($closure(examples.Streams,"streamIndex"));
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
examples.Streams.waves = function(n,m) {
	$s.push("examples.Streams::waves");
	var $spos = $s.length;
	var $tmp = Ints.range(n).map(function(i,_) {
		$s.push("examples.Streams::waves@38");
		var $spos = $s.length;
		var $tmp = Ints.range(m).map(function(j,_1) {
			$s.push("examples.Streams::waves@38@39");
			var $spos = $s.length;
			var x = 20 * j / m - i / 3;
			var $tmp = 2 * x * Math.exp(-0.5 * x);
			$s.pop();
			return $tmp;
			$s.pop();
		}).map($closure(examples.Streams,"streamIndex"));
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
examples.Streams.streamIndex = function(d,i) {
	$s.push("examples.Streams::streamIndex");
	var $spos = $s.length;
	var $tmp = { x : .0 + i, y : Math.max(0.0,d)};
	$s.pop();
	return $tmp;
	$s.pop();
}
examples.Streams.prototype.__class__ = examples.Streams;
thx.js.behavior.Zoom = function(p) {
	if( p === $_ ) return;
	$s.push("thx.js.behavior.Zoom::new");
	var $spos = $s.length;
	this.webkit533 = new EReg("WebKit/533","").match(js.Lib.window.navigator.userAgent)?-1:0;
	this._x = 0;
	this._y = 0;
	this._z = 0;
	$s.pop();
}
thx.js.behavior.Zoom.__name__ = ["thx","js","behavior","Zoom"];
thx.js.behavior.Zoom.event = null;
thx.js.behavior.Zoom.prototype.webkit533 = null;
thx.js.behavior.Zoom.prototype._pan = null;
thx.js.behavior.Zoom.prototype._zoom = null;
thx.js.behavior.Zoom.prototype._x = null;
thx.js.behavior.Zoom.prototype._y = null;
thx.js.behavior.Zoom.prototype._z = null;
thx.js.behavior.Zoom.prototype._dispatch = null;
thx.js.behavior.Zoom.prototype.mousedown = function(d,i) {
	$s.push("thx.js.behavior.Zoom::mousedown");
	var $spos = $s.length;
	this._pan = { x0 : this._x - thx.js.Dom.event.clientX, y0 : this._y - thx.js.Dom.event.clientY, target : d, data : Reflect.field(d,"__data__"), index : i};
	thx.js.Dom.event.preventDefault();
	js.Lib.window.focus();
	$s.pop();
}
thx.js.behavior.Zoom.prototype.mousemove = function(_,_1) {
	$s.push("thx.js.behavior.Zoom::mousemove");
	var $spos = $s.length;
	this._zoom = null;
	if(null != this._pan) {
		this._x = thx.js.Dom.event.clientX + this._pan.x0;
		this._y = thx.js.Dom.event.clientY + this._pan.y0;
		this.dispatch(this._pan.data,this._pan.index);
	}
	$s.pop();
}
thx.js.behavior.Zoom.prototype.mouseup = function(_,_1) {
	$s.push("thx.js.behavior.Zoom::mouseup");
	var $spos = $s.length;
	if(null != this._pan) {
		this.mousemove();
		this._pan = null;
	}
	$s.pop();
}
thx.js.behavior.Zoom.prototype.mousewheel = function(d,i) {
	$s.push("thx.js.behavior.Zoom::mousewheel");
	var $spos = $s.length;
	var e = thx.js.Dom.event;
	e.preventDefault();
	if(null == this._zoom) {
		var p = thx.js.Svg.mouse(null != d.nearestViewportElement?d.nearestViewportElement:d);
		this._zoom = { x0 : this._x, y0 : this._y, z0 : this._z, x1 : this._x - p[0], y1 : this._y - p[1]};
	}
	if("dblclick" == e.type) this._z = e.shiftKey?Math.ceil(this._z - 1):Math.floor(this._z + 1); else {
		var delta = (e.wheelDelta / 120 || -e.detail) * .1;
		if(this.webkit533 < 0) {
			var now = Date.now().getTime(), since = now - thx.js.behavior.Zoom.last;
			if(since > 9 && Math.abs(e.wheelDelta) / since >= 50) this.webkit533 = 1;
			thx.js.behavior.Zoom.last = now;
		}
		if(this.webkit533 == 1) delta *= .03;
		this._z += delta;
	}
	var k = Math.pow(2,this._z - this._zoom.z0) - 1;
	this._x = this._zoom.x0 + this._zoom.x1 * k;
	this._y = this._zoom.y0 + this._zoom.y1 * k;
	this.dispatch(d,i);
	$s.pop();
}
thx.js.behavior.Zoom.prototype.oldscale = null;
thx.js.behavior.Zoom.prototype.dispatch = function(d,i) {
	$s.push("thx.js.behavior.Zoom::dispatch");
	var $spos = $s.length;
	if(null != this._dispatch) {
		var event = new thx.js.behavior.ZoomEvent(Math.pow(2,this._z),this._x,this._y);
		if(null != thx.js.behavior.Zoom.event && event.scale == thx.js.behavior.Zoom.event.scale && event.tx == thx.js.behavior.Zoom.event.tx && event.ty == thx.js.behavior.Zoom.event.ty) {
			$s.pop();
			return;
		}
		thx.js.behavior.Zoom.event = event;
		try {
			this._dispatch(d,i);
		} catch( e ) {
			$e = [];
			while($s.length >= $spos) $e.unshift($s.pop());
			$s.push($e[0]);
			haxe.Log.trace(e,{ fileName : "Zoom.hx", lineNumber : 134, className : "thx.js.behavior.Zoom", methodName : "dispatch"});
		}
	}
	$s.pop();
}
thx.js.behavior.Zoom.prototype.zoom = function(f,dom) {
	$s.push("thx.js.behavior.Zoom::zoom");
	var $spos = $s.length;
	this._dispatch = f;
	var container = thx.js.Dom.selectNode(dom);
	container.onNode("mousedown",$closure(this,"mousedown")).onNode("mousewheel",$closure(this,"mousewheel")).onNode("DOMMouseScroll",$closure(this,"mousewheel")).onNode("dblclick",$closure(this,"mousewheel"));
	thx.js.Dom.selectNode(js.Lib.window).onNode("mousemove",$closure(this,"mousemove")).onNode("mouseup",$closure(this,"mouseup"));
	$s.pop();
	return this;
	$s.pop();
}
thx.js.behavior.Zoom.prototype.__class__ = thx.js.behavior.Zoom;
examples.ZoomPan = function(cid) {
	if( cid === $_ ) return;
	$s.push("examples.ZoomPan::new");
	var $spos = $s.length;
	Example.call(this,cid);
	$s.pop();
}
examples.ZoomPan.__name__ = ["examples","ZoomPan"];
examples.ZoomPan.__super__ = Example;
for(var k in Example.prototype ) examples.ZoomPan.prototype[k] = Example.prototype[k];
examples.ZoomPan.prototype.size = null;
examples.ZoomPan.prototype.padding = null;
examples.ZoomPan.prototype.x = null;
examples.ZoomPan.prototype.y = null;
examples.ZoomPan.prototype.svg = null;
examples.ZoomPan.prototype.srcx = null;
examples.ZoomPan.prototype.srcy = null;
examples.ZoomPan.prototype.tx = function(d,_) {
	$s.push("examples.ZoomPan::tx");
	var $spos = $s.length;
	var $tmp = "translate(" + this.x.scale(d) + ",0)";
	$s.pop();
	return $tmp;
	$s.pop();
}
examples.ZoomPan.prototype.ty = function(d,_) {
	$s.push("examples.ZoomPan::ty");
	var $spos = $s.length;
	var $tmp = "translate(0," + this.y.scale(d) + ")";
	$s.pop();
	return $tmp;
	$s.pop();
}
examples.ZoomPan.prototype.stroke = function(d,_) {
	$s.push("examples.ZoomPan::stroke");
	var $spos = $s.length;
	var $tmp = d != 0.0 && d != null?"#ccc":"#666";
	$s.pop();
	return $tmp;
	$s.pop();
}
examples.ZoomPan.prototype.runExample = function() {
	$s.push("examples.ZoomPan::runExample");
	var $spos = $s.length;
	this.size = [0.0 + this.stageWidth(),500];
	this.padding = [4.0,4.0,20.0,40.0];
	this.x = new thx.math.scale.Linear().domain(-1.42,1.42).range(0,this.size[0]);
	this.srcx = this.x.getDomain();
	this.y = new thx.math.scale.Linear().domain(1.0,-1.0).range(0,this.size[1]);
	this.srcy = this.y.getDomain();
	var me = this;
	this.svg = this.container.append("svg:svg").attr("width")["float"](this.size[0] + this.padding[3] + this.padding[1]).attr("height")["float"](this.size[1] + this.padding[0] + this.padding[2]).attr("pointer-events").string("all").eachNode(function(n,i) {
		$s.push("examples.ZoomPan::runExample@51");
		var $spos = $s.length;
		new thx.js.behavior.Zoom().zoom($closure(me,"redraw"),n);
		$s.pop();
	}).onNode("zoom",$closure(this,"redraw")).append("svg:g").attr("transform").string("translate(" + this.padding[3] + "," + this.padding[0] + ")");
	this.svg.append("svg:rect").attr("width")["float"](this.size[0]).attr("height")["float"](this.size[1]).attr("stroke").string("#ccc").attr("fill").string("none");
	this.redraw();
	$s.pop();
}
examples.ZoomPan.prototype.redraw = function(_,_1) {
	$s.push("examples.ZoomPan::redraw");
	var $spos = $s.length;
	if(null != thx.js.behavior.Zoom.event) {
		var e = thx.js.behavior.Zoom.event;
		this.x.transform(e.scale,e.tx,this.srcx[0],this.srcx[1]);
		this.y.transform(e.scale,e.ty,this.srcy[0],this.srcy[1]);
	}
	var fx = $closure(this.x,"tickFormat"), fy = $closure(this.y,"tickFormat");
	var gx = this.svg.selectAll("g.x").data(this.x.ticks(),fx).update().attr("transform").stringf($closure(this,"tx"));
	gx.select("text").text().stringf(fx);
	var gxe = gx.enter().insert("svg:g",null,"rect").attr("class").string("x").attr("transform").stringf($closure(this,"tx"));
	gxe.append("svg:line").attr("stroke").stringf($closure(this,"stroke")).attr("y1")["float"](0).attr("y2")["float"](this.size[1]);
	gxe.append("svg:text").attr("y")["float"](this.size[1]).attr("dy").string("1em").attr("text-anchor").string("middle").text().stringf(fx);
	gx.exit().remove();
	var gy = this.svg.selectAll("g.y").data(this.y.ticks(),fy).update().attr("transform").stringf($closure(this,"ty"));
	gy.select("text").text().stringf(fy);
	var gye = gy.enter().insert("svg:g",null,"rect").attr("class").string("y").attr("transform").stringf($closure(this,"ty"));
	gye.append("svg:line").attr("stroke").stringf($closure(this,"stroke")).attr("x1")["float"](0).attr("x2")["float"](this.size[0]);
	gye.append("svg:text").attr("x")["float"](-3).attr("dy").string(".35em").attr("text-anchor").string("end").text().stringf(fy);
	gy.exit().remove();
	$s.pop();
}
examples.ZoomPan.prototype.__class__ = examples.ZoomPan;
examples.Stack = function(cid) {
	if( cid === $_ ) return;
	$s.push("examples.Stack::new");
	var $spos = $s.length;
	Example.call(this,cid);
	$s.pop();
}
examples.Stack.__name__ = ["examples","Stack"];
examples.Stack.__super__ = Example;
for(var k in Example.prototype ) examples.Stack.prototype[k] = Example.prototype[k];
examples.Stack.m = null;
examples.Stack.n = null;
examples.Stack.mx = null;
examples.Stack.my = null;
examples.Stack.mz = null;
examples.Stack.p = null;
examples.Stack.w = null;
examples.Stack.h = null;
examples.Stack.x = function(d,i) {
	$s.push("examples.Stack::x");
	var $spos = $s.length;
	var $tmp = d.x * examples.Stack.w / examples.Stack.mx;
	$s.pop();
	return $tmp;
	$s.pop();
}
examples.Stack.y0 = function(d,i) {
	$s.push("examples.Stack::y0");
	var $spos = $s.length;
	var $tmp = examples.Stack.h - d.y0 * examples.Stack.h / examples.Stack.my;
	$s.pop();
	return $tmp;
	$s.pop();
}
examples.Stack.y1 = function(d,i) {
	$s.push("examples.Stack::y1");
	var $spos = $s.length;
	var $tmp = examples.Stack.h - (d.y + d.y0) * examples.Stack.h / examples.Stack.my;
	$s.pop();
	return $tmp;
	$s.pop();
}
examples.Stack.y2 = function(d,i) {
	$s.push("examples.Stack::y2");
	var $spos = $s.length;
	var $tmp = d.y * examples.Stack.h / examples.Stack.mz;
	$s.pop();
	return $tmp;
	$s.pop();
}
examples.Stack.prototype.data = null;
examples.Stack.prototype.runExample = function() {
	$s.push("examples.Stack::runExample");
	var $spos = $s.length;
	this.container.append("button").text().string("click to switch type").onNode("click",$closure(this,"click"));
	this.container.append("br");
	examples.Stack.n = 4;
	examples.Stack.m = 64;
	this.data = new thx.geom.layout.Stack().stack(examples.Streams.layers(examples.Stack.n,examples.Stack.m,.1));
	var color = thx.color.Colors.interpolatef("#aad","#556");
	examples.Stack.p = 20.0;
	examples.Stack.w = this.stageWidth();
	examples.Stack.h = 499.5 - examples.Stack.p;
	examples.Stack.mx = examples.Stack.m;
	examples.Stack.my = Arrays.floatMax(this.data,function(a) {
		$s.push("examples.Stack::runExample@50");
		var $spos = $s.length;
		var $tmp = Arrays.floatMax(a,function(d) {
			$s.push("examples.Stack::runExample@50@51");
			var $spos = $s.length;
			var $tmp = d.y0 + d.y;
			$s.pop();
			return $tmp;
			$s.pop();
		});
		$s.pop();
		return $tmp;
		$s.pop();
	});
	examples.Stack.mz = Arrays.floatMax(this.data,function(a) {
		$s.push("examples.Stack::runExample@55");
		var $spos = $s.length;
		var $tmp = Arrays.floatMax(a,function(d) {
			$s.push("examples.Stack::runExample@55@56");
			var $spos = $s.length;
			var $tmp = d.y;
			$s.pop();
			return $tmp;
			$s.pop();
		});
		$s.pop();
		return $tmp;
		$s.pop();
	});
	var vis = this.container.append("svg:svg").attr("width")["float"](examples.Stack.w).attr("height")["float"](examples.Stack.h + examples.Stack.p);
	var layers = vis.selectAll("g.layer").data(this.data).enter().append("svg:g").attr("fill").stringf(function(d,i) {
		$s.push("examples.Stack::runExample@69");
		var $spos = $s.length;
		var $tmp = color(i / (examples.Stack.n - 1));
		$s.pop();
		return $tmp;
		$s.pop();
	}).attr("class").string("layer");
	var bars = layers.selectAll("g.bar").dataf(function(d,i) {
		$s.push("examples.Stack::runExample@73");
		var $spos = $s.length;
		$s.pop();
		return d;
		$s.pop();
	}).enter().append("svg:g").attr("class").string("bar").attr("transform").stringf(function(d,i) {
		$s.push("examples.Stack::runExample@76");
		var $spos = $s.length;
		var $tmp = "translate(" + examples.Stack.x(d) + ",0)";
		$s.pop();
		return $tmp;
		$s.pop();
	});
	var t = bars.append("svg:rect").attr("width")["float"](examples.Stack.x({ x : .9, y : 0.0, y0 : 0.0})).attr("x")["float"](0).attr("y")["float"](examples.Stack.h).attr("height")["float"](0).transition().delay(function(n,i) {
		$s.push("examples.Stack::runExample@84");
		var $spos = $s.length;
		var $tmp = i * 10;
		$s.pop();
		return $tmp;
		$s.pop();
	});
	t.attr("y").floatf(function(d,i) {
		$s.push("examples.Stack::runExample@86");
		var $spos = $s.length;
		var $tmp = examples.Stack.y1(d);
		$s.pop();
		return $tmp;
		$s.pop();
	});
	t.attr("height").floatf(function(d,i) {
		$s.push("examples.Stack::runExample@87");
		var $spos = $s.length;
		var $tmp = examples.Stack.y0(d) - examples.Stack.y1(d);
		$s.pop();
		return $tmp;
		$s.pop();
	});
	var labels = vis.selectAll("text.label").data(this.data[0]).enter().append("svg:text").attr("class").string("label").attr("x").floatf($closure(examples.Stack,"x")).attr("y")["float"](examples.Stack.h + 6).attr("dx")["float"](examples.Stack.x({ x : .45, y : 0.0, y0 : 0.0})).attr("dy").string(".71em").attr("text-anchor").string("middle").text().floatf(function(d,i) {
		$s.push("examples.Stack::runExample@98");
		var $spos = $s.length;
		$s.pop();
		return i;
		$s.pop();
	});
	vis.append("svg:line").attr("x1")["float"](0).attr("x2")["float"](examples.Stack.w - examples.Stack.x({ x : .1, y : 0.0, y0 : 0.0})).attr("y1")["float"](examples.Stack.h).attr("y2")["float"](examples.Stack.h);
	$s.pop();
}
examples.Stack.prototype.current = null;
examples.Stack.prototype.click = function(d,i) {
	$s.push("examples.Stack::click");
	var $spos = $s.length;
	if(null == this.current || Reflect.compareMethods(this.current,$closure(this,"transitionStack"))) this.current = $closure(this,"transitionGroup"); else this.current = $closure(this,"transitionStack");
	this.current.apply(this,[]);
	$s.pop();
}
examples.Stack.prototype.transitionGroup = function() {
	$s.push("examples.Stack::transitionGroup");
	var $spos = $s.length;
	var t = this.container.selectAllData("g.layer rect").transition().duration(null,500).delay(function(d,i) {
		$s.push("examples.Stack::transitionGroup@121");
		var $spos = $s.length;
		var $tmp = i % examples.Stack.m * 10;
		$s.pop();
		return $tmp;
		$s.pop();
	});
	t.attr("x").floatf(function(d,i) {
		$s.push("examples.Stack::transitionGroup@123");
		var $spos = $s.length;
		var $tmp = examples.Stack.x({ x : .9 * ~~(i / examples.Stack.m) / examples.Stack.n, y : 0.0, y0 : 0.0});
		$s.pop();
		return $tmp;
		$s.pop();
	});
	t.attr("width")["float"](examples.Stack.x({ x : .9 / examples.Stack.n, y : 0.0, y0 : 0.0}));
	t.endNode($closure(this,"transitionGroupEnd"));
	$s.pop();
}
examples.Stack.prototype.transitionStack = function() {
	$s.push("examples.Stack::transitionStack");
	var $spos = $s.length;
	var t = this.container.selectAllData("g.layer rect").transition().duration(null,500).delay(function(d,i) {
		$s.push("examples.Stack::transitionStack@133");
		var $spos = $s.length;
		var $tmp = i % examples.Stack.m * 10;
		$s.pop();
		return $tmp;
		$s.pop();
	});
	t.attr("y").floatf(function(d,i) {
		$s.push("examples.Stack::transitionStack@134");
		var $spos = $s.length;
		var $tmp = examples.Stack.y1(d);
		$s.pop();
		return $tmp;
		$s.pop();
	});
	t.attr("height").floatf(function(d,i) {
		$s.push("examples.Stack::transitionStack@135");
		var $spos = $s.length;
		var $tmp = examples.Stack.y0(d) - examples.Stack.y1(d);
		$s.pop();
		return $tmp;
		$s.pop();
	});
	t.endNode($closure(this,"transitionStackEnd"));
	$s.pop();
}
examples.Stack.prototype.transitionGroupEnd = function(d,i) {
	$s.push("examples.Stack::transitionGroupEnd");
	var $spos = $s.length;
	var t = thx.js.Dom.selectNodeData(d).transition().duration(null,500);
	t.attr("y").floatf(function(d1,i1) {
		$s.push("examples.Stack::transitionGroupEnd@144");
		var $spos = $s.length;
		var $tmp = examples.Stack.h - examples.Stack.y2(d1);
		$s.pop();
		return $tmp;
		$s.pop();
	});
	t.attr("height").floatf(function(d1,i1) {
		$s.push("examples.Stack::transitionGroupEnd@145");
		var $spos = $s.length;
		var $tmp = examples.Stack.y2(d1);
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
}
examples.Stack.prototype.transitionStackEnd = function(d,i) {
	$s.push("examples.Stack::transitionStackEnd");
	var $spos = $s.length;
	thx.js.Dom.selectNode(d).transition().duration(null,500).attr("x")["float"](0).attr("width")["float"](examples.Stack.x({ x : .9, y : 0.0, y0 : 0.0}));
	$s.pop();
}
examples.Stack.prototype.description = function() {
	$s.push("examples.Stack::description");
	var $spos = $s.length;
	$s.pop();
	return "Stacked bars";
	$s.pop();
}
examples.Stack.prototype.__class__ = examples.Stack;
StringTools = function() { }
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	$s.push("StringTools::urlEncode");
	var $spos = $s.length;
	var $tmp = encodeURIComponent(s);
	$s.pop();
	return $tmp;
	$s.pop();
}
StringTools.urlDecode = function(s) {
	$s.push("StringTools::urlDecode");
	var $spos = $s.length;
	var $tmp = decodeURIComponent(s.split("+").join(" "));
	$s.pop();
	return $tmp;
	$s.pop();
}
StringTools.htmlEscape = function(s) {
	$s.push("StringTools::htmlEscape");
	var $spos = $s.length;
	var $tmp = s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
	$s.pop();
	return $tmp;
	$s.pop();
}
StringTools.htmlUnescape = function(s) {
	$s.push("StringTools::htmlUnescape");
	var $spos = $s.length;
	var $tmp = s.split("&gt;").join(">").split("&lt;").join("<").split("&amp;").join("&");
	$s.pop();
	return $tmp;
	$s.pop();
}
StringTools.startsWith = function(s,start) {
	$s.push("StringTools::startsWith");
	var $spos = $s.length;
	var $tmp = s.length >= start.length && s.substr(0,start.length) == start;
	$s.pop();
	return $tmp;
	$s.pop();
}
StringTools.endsWith = function(s,end) {
	$s.push("StringTools::endsWith");
	var $spos = $s.length;
	var elen = end.length;
	var slen = s.length;
	var $tmp = slen >= elen && s.substr(slen - elen,elen) == end;
	$s.pop();
	return $tmp;
	$s.pop();
}
StringTools.isSpace = function(s,pos) {
	$s.push("StringTools::isSpace");
	var $spos = $s.length;
	var c = s.charCodeAt(pos);
	var $tmp = c >= 9 && c <= 13 || c == 32;
	$s.pop();
	return $tmp;
	$s.pop();
}
StringTools.ltrim = function(s) {
	$s.push("StringTools::ltrim");
	var $spos = $s.length;
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) {
		var $tmp = s.substr(r,l - r);
		$s.pop();
		return $tmp;
	} else {
		$s.pop();
		return s;
	}
	$s.pop();
}
StringTools.rtrim = function(s) {
	$s.push("StringTools::rtrim");
	var $spos = $s.length;
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) {
		var $tmp = s.substr(0,l - r);
		$s.pop();
		return $tmp;
	} else {
		$s.pop();
		return s;
	}
	$s.pop();
}
StringTools.trim = function(s) {
	$s.push("StringTools::trim");
	var $spos = $s.length;
	var $tmp = StringTools.ltrim(StringTools.rtrim(s));
	$s.pop();
	return $tmp;
	$s.pop();
}
StringTools.rpad = function(s,c,l) {
	$s.push("StringTools::rpad");
	var $spos = $s.length;
	var sl = s.length;
	var cl = c.length;
	while(sl < l) if(l - sl < cl) {
		s += c.substr(0,l - sl);
		sl = l;
	} else {
		s += c;
		sl += cl;
	}
	$s.pop();
	return s;
	$s.pop();
}
StringTools.lpad = function(s,c,l) {
	$s.push("StringTools::lpad");
	var $spos = $s.length;
	var ns = "";
	var sl = s.length;
	if(sl >= l) {
		$s.pop();
		return s;
	}
	var cl = c.length;
	while(sl < l) if(l - sl < cl) {
		ns += c.substr(0,l - sl);
		sl = l;
	} else {
		ns += c;
		sl += cl;
	}
	var $tmp = ns + s;
	$s.pop();
	return $tmp;
	$s.pop();
}
StringTools.replace = function(s,sub,by) {
	$s.push("StringTools::replace");
	var $spos = $s.length;
	var $tmp = s.split(sub).join(by);
	$s.pop();
	return $tmp;
	$s.pop();
}
StringTools.hex = function(n,digits) {
	$s.push("StringTools::hex");
	var $spos = $s.length;
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	$s.pop();
	return s;
	$s.pop();
}
StringTools.fastCodeAt = function(s,index) {
	$s.push("StringTools::fastCodeAt");
	var $spos = $s.length;
	var $tmp = s.cca(index);
	$s.pop();
	return $tmp;
	$s.pop();
}
StringTools.isEOF = function(c) {
	$s.push("StringTools::isEOF");
	var $spos = $s.length;
	var $tmp = c != c;
	$s.pop();
	return $tmp;
	$s.pop();
}
StringTools.prototype.__class__ = StringTools;
$_ = {}
js.Boot.__res = {}
$s = [];
$e = [];
js.Boot.__init();
thx.cultures.EnUS.getCulture();
{
	js.Lib.document = document;
	js.Lib.window = window;
	onerror = function(msg,url,line) {
		var stack = $s.copy();
		var f = js.Lib.onerror;
		$s.splice(0,$s.length);
		if( f == null ) {
			var i = stack.length;
			var s = "";
			while( --i >= 0 )
				s += "Called from "+stack[i]+"\n";
			alert(msg+"\n\n"+s);
			return false;
		}
		return f(msg,stack);
	}
}
{
	Math.__name__ = ["Math"];
	Math.NaN = Number["NaN"];
	Math.NEGATIVE_INFINITY = Number["NEGATIVE_INFINITY"];
	Math.POSITIVE_INFINITY = Number["POSITIVE_INFINITY"];
	Math.isFinite = function(i) {
		$s.push("StringTools::isEOF");
		var $spos = $s.length;
		var $tmp = isFinite(i);
		$s.pop();
		return $tmp;
		$s.pop();
	};
	Math.isNaN = function(i) {
		$s.push("StringTools::isEOF");
		var $spos = $s.length;
		var $tmp = isNaN(i);
		$s.pop();
		return $tmp;
		$s.pop();
	};
}
thx.languages.En.getLanguage();
{
	thx.color.NamedColors.byName = new Hash();
	thx.color.NamedColors.byName.set("aliceblue",thx.color.NamedColors.aliceblue = thx.color.Rgb.fromInt(15792383));
	thx.color.NamedColors.byName.set("antiquewhite",thx.color.NamedColors.antiquewhite = thx.color.Rgb.fromInt(16444375));
	thx.color.NamedColors.byName.set("aqua",thx.color.NamedColors.aqua = thx.color.Rgb.fromInt(65535));
	thx.color.NamedColors.byName.set("aquamarine",thx.color.NamedColors.aquamarine = thx.color.Rgb.fromInt(8388564));
	thx.color.NamedColors.byName.set("azure",thx.color.NamedColors.azure = thx.color.Rgb.fromInt(15794175));
	thx.color.NamedColors.byName.set("beige",thx.color.NamedColors.beige = thx.color.Rgb.fromInt(16119260));
	thx.color.NamedColors.byName.set("bisque",thx.color.NamedColors.bisque = thx.color.Rgb.fromInt(16770244));
	thx.color.NamedColors.byName.set("black",thx.color.NamedColors.black = thx.color.Rgb.fromInt(0));
	thx.color.NamedColors.byName.set("blanchedalmond",thx.color.NamedColors.blanchedalmond = thx.color.Rgb.fromInt(16772045));
	thx.color.NamedColors.byName.set("blue",thx.color.NamedColors.blue = thx.color.Rgb.fromInt(255));
	thx.color.NamedColors.byName.set("blueviolet",thx.color.NamedColors.blueviolet = thx.color.Rgb.fromInt(9055202));
	thx.color.NamedColors.byName.set("brown",thx.color.NamedColors.brown = thx.color.Rgb.fromInt(10824234));
	thx.color.NamedColors.byName.set("burlywood",thx.color.NamedColors.burlywood = thx.color.Rgb.fromInt(14596231));
	thx.color.NamedColors.byName.set("cadetblue",thx.color.NamedColors.cadetblue = thx.color.Rgb.fromInt(6266528));
	thx.color.NamedColors.byName.set("chartreuse",thx.color.NamedColors.chartreuse = thx.color.Rgb.fromInt(8388352));
	thx.color.NamedColors.byName.set("chocolate",thx.color.NamedColors.chocolate = thx.color.Rgb.fromInt(13789470));
	thx.color.NamedColors.byName.set("coral",thx.color.NamedColors.coral = thx.color.Rgb.fromInt(16744272));
	thx.color.NamedColors.byName.set("cornflowerblue",thx.color.NamedColors.cornflowerblue = thx.color.Rgb.fromInt(6591981));
	thx.color.NamedColors.byName.set("cornsilk",thx.color.NamedColors.cornsilk = thx.color.Rgb.fromInt(16775388));
	thx.color.NamedColors.byName.set("crimson",thx.color.NamedColors.crimson = thx.color.Rgb.fromInt(14423100));
	thx.color.NamedColors.byName.set("cyan",thx.color.NamedColors.cyan = thx.color.Rgb.fromInt(65535));
	thx.color.NamedColors.byName.set("darkblue",thx.color.NamedColors.darkblue = thx.color.Rgb.fromInt(139));
	thx.color.NamedColors.byName.set("darkcyan",thx.color.NamedColors.darkcyan = thx.color.Rgb.fromInt(35723));
	thx.color.NamedColors.byName.set("darkgoldenrod",thx.color.NamedColors.darkgoldenrod = thx.color.Rgb.fromInt(12092939));
	thx.color.NamedColors.byName.set("darkgray",thx.color.NamedColors.darkgray = thx.color.NamedColors.darkgrey = thx.color.Rgb.fromInt(11119017));
	thx.color.NamedColors.byName.set("darkgrey",thx.color.NamedColors.darkgrey);
	thx.color.NamedColors.byName.set("darkgreen",thx.color.NamedColors.darkgreen = thx.color.Rgb.fromInt(25600));
	thx.color.NamedColors.byName.set("darkkhaki",thx.color.NamedColors.darkkhaki = thx.color.Rgb.fromInt(12433259));
	thx.color.NamedColors.byName.set("darkmagenta",thx.color.NamedColors.darkmagenta = thx.color.Rgb.fromInt(9109643));
	thx.color.NamedColors.byName.set("darkolivegreen",thx.color.NamedColors.darkolivegreen = thx.color.Rgb.fromInt(5597999));
	thx.color.NamedColors.byName.set("darkorange",thx.color.NamedColors.darkorange = thx.color.Rgb.fromInt(16747520));
	thx.color.NamedColors.byName.set("darkorchid",thx.color.NamedColors.darkorchid = thx.color.Rgb.fromInt(10040012));
	thx.color.NamedColors.byName.set("darkred",thx.color.NamedColors.darkred = thx.color.Rgb.fromInt(9109504));
	thx.color.NamedColors.byName.set("darksalmon",thx.color.NamedColors.darksalmon = thx.color.Rgb.fromInt(15308410));
	thx.color.NamedColors.byName.set("darkseagreen",thx.color.NamedColors.darkseagreen = thx.color.Rgb.fromInt(9419919));
	thx.color.NamedColors.byName.set("darkslateblue",thx.color.NamedColors.darkslateblue = thx.color.Rgb.fromInt(4734347));
	thx.color.NamedColors.byName.set("darkslategray",thx.color.NamedColors.darkslategray = thx.color.NamedColors.darkslategrey = thx.color.Rgb.fromInt(3100495));
	thx.color.NamedColors.byName.set("darkslategrey",thx.color.NamedColors.darkslategrey);
	thx.color.NamedColors.byName.set("darkturquoise",thx.color.NamedColors.darkturquoise = thx.color.Rgb.fromInt(52945));
	thx.color.NamedColors.byName.set("darkviolet",thx.color.NamedColors.darkviolet = thx.color.Rgb.fromInt(9699539));
	thx.color.NamedColors.byName.set("deeppink",thx.color.NamedColors.deeppink = thx.color.Rgb.fromInt(16716947));
	thx.color.NamedColors.byName.set("deepskyblue",thx.color.NamedColors.deepskyblue = thx.color.Rgb.fromInt(49151));
	thx.color.NamedColors.byName.set("dimgray",thx.color.NamedColors.dimgray = thx.color.NamedColors.dimgrey = thx.color.Rgb.fromInt(6908265));
	thx.color.NamedColors.byName.set("dimgrey",thx.color.NamedColors.dimgrey);
	thx.color.NamedColors.byName.set("dodgerblue",thx.color.NamedColors.dodgerblue = thx.color.Rgb.fromInt(2003199));
	thx.color.NamedColors.byName.set("firebrick",thx.color.NamedColors.firebrick = thx.color.Rgb.fromInt(11674146));
	thx.color.NamedColors.byName.set("floralwhite",thx.color.NamedColors.floralwhite = thx.color.Rgb.fromInt(16775920));
	thx.color.NamedColors.byName.set("forestgreen",thx.color.NamedColors.forestgreen = thx.color.Rgb.fromInt(2263842));
	thx.color.NamedColors.byName.set("fuchsia",thx.color.NamedColors.fuchsia = thx.color.Rgb.fromInt(16711935));
	thx.color.NamedColors.byName.set("gainsboro",thx.color.NamedColors.gainsboro = thx.color.Rgb.fromInt(14474460));
	thx.color.NamedColors.byName.set("ghostwhite",thx.color.NamedColors.ghostwhite = thx.color.Rgb.fromInt(16316671));
	thx.color.NamedColors.byName.set("gold",thx.color.NamedColors.gold = thx.color.Rgb.fromInt(16766720));
	thx.color.NamedColors.byName.set("goldenrod",thx.color.NamedColors.goldenrod = thx.color.Rgb.fromInt(14329120));
	thx.color.NamedColors.byName.set("gray",thx.color.NamedColors.gray = thx.color.NamedColors.grey = thx.color.Rgb.fromInt(8421504));
	thx.color.NamedColors.byName.set("grey",thx.color.NamedColors.grey);
	thx.color.NamedColors.byName.set("green",thx.color.NamedColors.green = thx.color.Rgb.fromInt(32768));
	thx.color.NamedColors.byName.set("greenyellow",thx.color.NamedColors.greenyellow = thx.color.Rgb.fromInt(11403055));
	thx.color.NamedColors.byName.set("honeydew",thx.color.NamedColors.honeydew = thx.color.Rgb.fromInt(15794160));
	thx.color.NamedColors.byName.set("hotpink",thx.color.NamedColors.hotpink = thx.color.Rgb.fromInt(16738740));
	thx.color.NamedColors.byName.set("indianred",thx.color.NamedColors.indianred = thx.color.Rgb.fromInt(13458524));
	thx.color.NamedColors.byName.set("indigo",thx.color.NamedColors.indigo = thx.color.Rgb.fromInt(4915330));
	thx.color.NamedColors.byName.set("ivory",thx.color.NamedColors.ivory = thx.color.Rgb.fromInt(16777200));
	thx.color.NamedColors.byName.set("khaki",thx.color.NamedColors.khaki = thx.color.Rgb.fromInt(15787660));
	thx.color.NamedColors.byName.set("lavender",thx.color.NamedColors.lavender = thx.color.Rgb.fromInt(15132410));
	thx.color.NamedColors.byName.set("lavenderblush",thx.color.NamedColors.lavenderblush = thx.color.Rgb.fromInt(16773365));
	thx.color.NamedColors.byName.set("lawngreen",thx.color.NamedColors.lawngreen = thx.color.Rgb.fromInt(8190976));
	thx.color.NamedColors.byName.set("lemonchiffon",thx.color.NamedColors.lemonchiffon = thx.color.Rgb.fromInt(16775885));
	thx.color.NamedColors.byName.set("lightblue",thx.color.NamedColors.lightblue = thx.color.Rgb.fromInt(11393254));
	thx.color.NamedColors.byName.set("lightcoral",thx.color.NamedColors.lightcoral = thx.color.Rgb.fromInt(15761536));
	thx.color.NamedColors.byName.set("lightcyan",thx.color.NamedColors.lightcyan = thx.color.Rgb.fromInt(14745599));
	thx.color.NamedColors.byName.set("lightgoldenrodyellow",thx.color.NamedColors.lightgoldenrodyellow = thx.color.Rgb.fromInt(16448210));
	thx.color.NamedColors.byName.set("lightgray",thx.color.NamedColors.lightgray = thx.color.NamedColors.lightgrey = thx.color.Rgb.fromInt(13882323));
	thx.color.NamedColors.byName.set("lightgrey",thx.color.NamedColors.lightgrey);
	thx.color.NamedColors.byName.set("lightgreen",thx.color.NamedColors.lightgreen = thx.color.Rgb.fromInt(9498256));
	thx.color.NamedColors.byName.set("lightpink",thx.color.NamedColors.lightpink = thx.color.Rgb.fromInt(16758465));
	thx.color.NamedColors.byName.set("lightsalmon",thx.color.NamedColors.lightsalmon = thx.color.Rgb.fromInt(16752762));
	thx.color.NamedColors.byName.set("lightseagreen",thx.color.NamedColors.lightseagreen = thx.color.Rgb.fromInt(2142890));
	thx.color.NamedColors.byName.set("lightskyblue",thx.color.NamedColors.lightskyblue = thx.color.Rgb.fromInt(8900346));
	thx.color.NamedColors.byName.set("lightslategray",thx.color.NamedColors.lightslategray = thx.color.NamedColors.lightslategrey = thx.color.Rgb.fromInt(7833753));
	thx.color.NamedColors.byName.set("lightslategrey",thx.color.NamedColors.lightslategrey);
	thx.color.NamedColors.byName.set("lightsteelblue",thx.color.NamedColors.lightsteelblue = thx.color.Rgb.fromInt(11584734));
	thx.color.NamedColors.byName.set("lightyellow",thx.color.NamedColors.lightyellow = thx.color.Rgb.fromInt(16777184));
	thx.color.NamedColors.byName.set("lime",thx.color.NamedColors.lime = thx.color.Rgb.fromInt(65280));
	thx.color.NamedColors.byName.set("limegreen",thx.color.NamedColors.limegreen = thx.color.Rgb.fromInt(3329330));
	thx.color.NamedColors.byName.set("linen",thx.color.NamedColors.linen = thx.color.Rgb.fromInt(16445670));
	thx.color.NamedColors.byName.set("magenta",thx.color.NamedColors.magenta = thx.color.Rgb.fromInt(16711935));
	thx.color.NamedColors.byName.set("maroon",thx.color.NamedColors.maroon = thx.color.Rgb.fromInt(8388608));
	thx.color.NamedColors.byName.set("mediumaquamarine",thx.color.NamedColors.mediumaquamarine = thx.color.Rgb.fromInt(6737322));
	thx.color.NamedColors.byName.set("mediumblue",thx.color.NamedColors.mediumblue = thx.color.Rgb.fromInt(205));
	thx.color.NamedColors.byName.set("mediumorchid",thx.color.NamedColors.mediumorchid = thx.color.Rgb.fromInt(12211667));
	thx.color.NamedColors.byName.set("mediumpurple",thx.color.NamedColors.mediumpurple = thx.color.Rgb.fromInt(9662683));
	thx.color.NamedColors.byName.set("mediumseagreen",thx.color.NamedColors.mediumseagreen = thx.color.Rgb.fromInt(3978097));
	thx.color.NamedColors.byName.set("mediumslateblue",thx.color.NamedColors.mediumslateblue = thx.color.Rgb.fromInt(8087790));
	thx.color.NamedColors.byName.set("mediumspringgreen",thx.color.NamedColors.mediumspringgreen = thx.color.Rgb.fromInt(64154));
	thx.color.NamedColors.byName.set("mediumturquoise",thx.color.NamedColors.mediumturquoise = thx.color.Rgb.fromInt(4772300));
	thx.color.NamedColors.byName.set("mediumvioletred",thx.color.NamedColors.mediumvioletred = thx.color.Rgb.fromInt(13047173));
	thx.color.NamedColors.byName.set("midnightblue",thx.color.NamedColors.midnightblue = thx.color.Rgb.fromInt(1644912));
	thx.color.NamedColors.byName.set("mintcream",thx.color.NamedColors.mintcream = thx.color.Rgb.fromInt(16121850));
	thx.color.NamedColors.byName.set("mistyrose",thx.color.NamedColors.mistyrose = thx.color.Rgb.fromInt(16770273));
	thx.color.NamedColors.byName.set("moccasin",thx.color.NamedColors.moccasin = thx.color.Rgb.fromInt(16770229));
	thx.color.NamedColors.byName.set("navajowhite",thx.color.NamedColors.navajowhite = thx.color.Rgb.fromInt(16768685));
	thx.color.NamedColors.byName.set("navy",thx.color.NamedColors.navy = thx.color.Rgb.fromInt(128));
	thx.color.NamedColors.byName.set("oldlace",thx.color.NamedColors.oldlace = thx.color.Rgb.fromInt(16643558));
	thx.color.NamedColors.byName.set("olive",thx.color.NamedColors.olive = thx.color.Rgb.fromInt(8421376));
	thx.color.NamedColors.byName.set("olivedrab",thx.color.NamedColors.olivedrab = thx.color.Rgb.fromInt(7048739));
	thx.color.NamedColors.byName.set("orange",thx.color.NamedColors.orange = thx.color.Rgb.fromInt(16753920));
	thx.color.NamedColors.byName.set("orangered",thx.color.NamedColors.orangered = thx.color.Rgb.fromInt(16729344));
	thx.color.NamedColors.byName.set("orchid",thx.color.NamedColors.orchid = thx.color.Rgb.fromInt(14315734));
	thx.color.NamedColors.byName.set("palegoldenrod",thx.color.NamedColors.palegoldenrod = thx.color.Rgb.fromInt(15657130));
	thx.color.NamedColors.byName.set("palegreen",thx.color.NamedColors.palegreen = thx.color.Rgb.fromInt(10025880));
	thx.color.NamedColors.byName.set("paleturquoise",thx.color.NamedColors.paleturquoise = thx.color.Rgb.fromInt(11529966));
	thx.color.NamedColors.byName.set("palevioletred",thx.color.NamedColors.palevioletred = thx.color.Rgb.fromInt(14381203));
	thx.color.NamedColors.byName.set("papayawhip",thx.color.NamedColors.papayawhip = thx.color.Rgb.fromInt(16773077));
	thx.color.NamedColors.byName.set("peachpuff",thx.color.NamedColors.peachpuff = thx.color.Rgb.fromInt(16767673));
	thx.color.NamedColors.byName.set("peru",thx.color.NamedColors.peru = thx.color.Rgb.fromInt(13468991));
	thx.color.NamedColors.byName.set("pink",thx.color.NamedColors.pink = thx.color.Rgb.fromInt(16761035));
	thx.color.NamedColors.byName.set("plum",thx.color.NamedColors.plum = thx.color.Rgb.fromInt(14524637));
	thx.color.NamedColors.byName.set("powderblue",thx.color.NamedColors.powderblue = thx.color.Rgb.fromInt(11591910));
	thx.color.NamedColors.byName.set("purple",thx.color.NamedColors.purple = thx.color.Rgb.fromInt(8388736));
	thx.color.NamedColors.byName.set("red",thx.color.NamedColors.red = thx.color.Rgb.fromInt(16711680));
	thx.color.NamedColors.byName.set("rosybrown",thx.color.NamedColors.rosybrown = thx.color.Rgb.fromInt(12357519));
	thx.color.NamedColors.byName.set("royalblue",thx.color.NamedColors.royalblue = thx.color.Rgb.fromInt(4286945));
	thx.color.NamedColors.byName.set("saddlebrown",thx.color.NamedColors.saddlebrown = thx.color.Rgb.fromInt(9127187));
	thx.color.NamedColors.byName.set("salmon",thx.color.NamedColors.salmon = thx.color.Rgb.fromInt(16416882));
	thx.color.NamedColors.byName.set("sandybrown",thx.color.NamedColors.sandybrown = thx.color.Rgb.fromInt(16032864));
	thx.color.NamedColors.byName.set("seagreen",thx.color.NamedColors.seagreen = thx.color.Rgb.fromInt(3050327));
	thx.color.NamedColors.byName.set("seashell",thx.color.NamedColors.seashell = thx.color.Rgb.fromInt(16774638));
	thx.color.NamedColors.byName.set("sienna",thx.color.NamedColors.sienna = thx.color.Rgb.fromInt(10506797));
	thx.color.NamedColors.byName.set("silver",thx.color.NamedColors.silver = thx.color.Rgb.fromInt(12632256));
	thx.color.NamedColors.byName.set("skyblue",thx.color.NamedColors.skyblue = thx.color.Rgb.fromInt(8900331));
	thx.color.NamedColors.byName.set("slateblue",thx.color.NamedColors.slateblue = thx.color.Rgb.fromInt(6970061));
	thx.color.NamedColors.byName.set("slategray",thx.color.NamedColors.slategray = thx.color.NamedColors.slategrey = thx.color.Rgb.fromInt(7372944));
	thx.color.NamedColors.byName.set("slategrey",thx.color.NamedColors.slategrey);
	thx.color.NamedColors.byName.set("snow",thx.color.NamedColors.snow = thx.color.Rgb.fromInt(16775930));
	thx.color.NamedColors.byName.set("springgreen",thx.color.NamedColors.springgreen = thx.color.Rgb.fromInt(65407));
	thx.color.NamedColors.byName.set("steelblue",thx.color.NamedColors.steelblue = thx.color.Rgb.fromInt(4620980));
	thx.color.NamedColors.byName.set("tan",thx.color.NamedColors.tan = thx.color.Rgb.fromInt(13808780));
	thx.color.NamedColors.byName.set("teal",thx.color.NamedColors.teal = thx.color.Rgb.fromInt(32896));
	thx.color.NamedColors.byName.set("thistle",thx.color.NamedColors.thistle = thx.color.Rgb.fromInt(14204888));
	thx.color.NamedColors.byName.set("tomato",thx.color.NamedColors.tomato = thx.color.Rgb.fromInt(16737095));
	thx.color.NamedColors.byName.set("turquoise",thx.color.NamedColors.turquoise = thx.color.Rgb.fromInt(4251856));
	thx.color.NamedColors.byName.set("violet",thx.color.NamedColors.violet = thx.color.Rgb.fromInt(15631086));
	thx.color.NamedColors.byName.set("wheat",thx.color.NamedColors.wheat = thx.color.Rgb.fromInt(16113331));
	thx.color.NamedColors.byName.set("white",thx.color.NamedColors.white = thx.color.Rgb.fromInt(16777215));
	thx.color.NamedColors.byName.set("whitesmoke",thx.color.NamedColors.whitesmoke = thx.color.Rgb.fromInt(16119285));
	thx.color.NamedColors.byName.set("yellow",thx.color.NamedColors.yellow = thx.color.Rgb.fromInt(16776960));
	thx.color.NamedColors.byName.set("yellowgreen",thx.color.NamedColors.yellowgreen = thx.color.Rgb.fromInt(10145074));
}
{
	/*!
 * Sizzle CSS Selector Engine
 *  Copyright 2011, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){

var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
	done = 0,
	toString = Object.prototype.toString,
	hasDuplicate = false,
	baseHasDuplicate = true,
	rBackslash = /\\/g,
	rNonWord = /\W/;

// Here we check if the JavaScript engine is using some sort of
// optimization where it does not always call our comparision
// function. If that is the case, discard the hasDuplicate value.
//   Thus far that includes Google Chrome.
[0, 0].sort(function() {
	baseHasDuplicate = false;
	return 0;
});

var Sizzle = function( selector, context, results, seed ) {
	results = results || [];
	context = context || document;

	var origContext = context;

	if ( context.nodeType !== 1 && context.nodeType !== 9 ) {
		return [];
	}
	
	if ( !selector || typeof selector !== "string" ) {
		return results;
	}

	var m, set, checkSet, extra, ret, cur, pop, i,
		prune = true,
		contextXML = Sizzle.isXML( context ),
		parts = [],
		soFar = selector;
	
	// Reset the position of the chunker regexp (start from head)
	do {
		chunker.exec( "" );
		m = chunker.exec( soFar );

		if ( m ) {
			soFar = m[3];
		
			parts.push( m[1] );
		
			if ( m[2] ) {
				extra = m[3];
				break;
			}
		}
	} while ( m );

	if ( parts.length > 1 && origPOS.exec( selector ) ) {

		if ( parts.length === 2 && Expr.relative[ parts[0] ] ) {
			set = posProcess( parts[0] + parts[1], context );

		} else {
			set = Expr.relative[ parts[0] ] ?
				[ context ] :
				Sizzle( parts.shift(), context );

			while ( parts.length ) {
				selector = parts.shift();

				if ( Expr.relative[ selector ] ) {
					selector += parts.shift();
				}
				
				set = posProcess( selector, set );
			}
		}

	} else {
		// Take a shortcut and set the context if the root selector is an ID
		// (but not if it'll be faster if the inner selector is an ID)
		if ( !seed && parts.length > 1 && context.nodeType === 9 && !contextXML &&
				Expr.match.ID.test(parts[0]) && !Expr.match.ID.test(parts[parts.length - 1]) ) {

			ret = Sizzle.find( parts.shift(), context, contextXML );
			context = ret.expr ?
				Sizzle.filter( ret.expr, ret.set )[0] :
				ret.set[0];
		}

		if ( context ) {
			ret = seed ?
				{ expr: parts.pop(), set: makeArray(seed) } :
				Sizzle.find( parts.pop(), parts.length === 1 && (parts[0] === "~" || parts[0] === "+") && context.parentNode ? context.parentNode : context, contextXML );

			set = ret.expr ?
				Sizzle.filter( ret.expr, ret.set ) :
				ret.set;

			if ( parts.length > 0 ) {
				checkSet = makeArray( set );

			} else {
				prune = false;
			}

			while ( parts.length ) {
				cur = parts.pop();
				pop = cur;

				if ( !Expr.relative[ cur ] ) {
					cur = "";
				} else {
					pop = parts.pop();
				}

				if ( pop == null ) {
					pop = context;
				}

				Expr.relative[ cur ]( checkSet, pop, contextXML );
			}

		} else {
			checkSet = parts = [];
		}
	}

	if ( !checkSet ) {
		checkSet = set;
	}

	if ( !checkSet ) {
		Sizzle.error( cur || selector );
	}

	if ( toString.call(checkSet) === "[object Array]" ) {
		if ( !prune ) {
			results.push.apply( results, checkSet );

		} else if ( context && context.nodeType === 1 ) {
			for ( i = 0; checkSet[i] != null; i++ ) {
				if ( checkSet[i] && (checkSet[i] === true || checkSet[i].nodeType === 1 && Sizzle.contains(context, checkSet[i])) ) {
					results.push( set[i] );
				}
			}

		} else {
			for ( i = 0; checkSet[i] != null; i++ ) {
				if ( checkSet[i] && checkSet[i].nodeType === 1 ) {
					results.push( set[i] );
				}
			}
		}

	} else {
		makeArray( checkSet, results );
	}

	if ( extra ) {
		Sizzle( extra, origContext, results, seed );
		Sizzle.uniqueSort( results );
	}

	return results;
};

Sizzle.uniqueSort = function( results ) {
	if ( sortOrder ) {
		hasDuplicate = baseHasDuplicate;
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			for ( var i = 1; i < results.length; i++ ) {
				if ( results[i] === results[ i - 1 ] ) {
					results.splice( i--, 1 );
				}
			}
		}
	}

	return results;
};

Sizzle.matches = function( expr, set ) {
	return Sizzle( expr, null, null, set );
};

Sizzle.matchesSelector = function( node, expr ) {
	return Sizzle( expr, null, null, [node] ).length > 0;
};

Sizzle.find = function( expr, context, isXML ) {
	var set;

	if ( !expr ) {
		return [];
	}

	for ( var i = 0, l = Expr.order.length; i < l; i++ ) {
		var match,
			type = Expr.order[i];
		
		if ( (match = Expr.leftMatch[ type ].exec( expr )) ) {
			var left = match[1];
			match.splice( 1, 1 );

			if ( left.substr( left.length - 1 ) !== "\\" ) {
				match[1] = (match[1] || "").replace( rBackslash, "" );
				set = Expr.find[ type ]( match, context, isXML );

				if ( set != null ) {
					expr = expr.replace( Expr.match[ type ], "" );
					break;
				}
			}
		}
	}

	if ( !set ) {
		set = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName( "*" ) :
			[];
	}

	return { set: set, expr: expr };
};

Sizzle.filter = function( expr, set, inplace, not ) {
	var match, anyFound,
		old = expr,
		result = [],
		curLoop = set,
		isXMLFilter = set && set[0] && Sizzle.isXML( set[0] );

	while ( expr && set.length ) {
		for ( var type in Expr.filter ) {
			if ( (match = Expr.leftMatch[ type ].exec( expr )) != null && match[2] ) {
				var found, item,
					filter = Expr.filter[ type ],
					left = match[1];

				anyFound = false;

				match.splice(1,1);

				if ( left.substr( left.length - 1 ) === "\\" ) {
					continue;
				}

				if ( curLoop === result ) {
					result = [];
				}

				if ( Expr.preFilter[ type ] ) {
					match = Expr.preFilter[ type ]( match, curLoop, inplace, result, not, isXMLFilter );

					if ( !match ) {
						anyFound = found = true;

					} else if ( match === true ) {
						continue;
					}
				}

				if ( match ) {
					for ( var i = 0; (item = curLoop[i]) != null; i++ ) {
						if ( item ) {
							found = filter( item, match, i, curLoop );
							var pass = not ^ !!found;

							if ( inplace && found != null ) {
								if ( pass ) {
									anyFound = true;

								} else {
									curLoop[i] = false;
								}

							} else if ( pass ) {
								result.push( item );
								anyFound = true;
							}
						}
					}
				}

				if ( found !== undefined ) {
					if ( !inplace ) {
						curLoop = result;
					}

					expr = expr.replace( Expr.match[ type ], "" );

					if ( !anyFound ) {
						return [];
					}

					break;
				}
			}
		}

		// Improper expression
		if ( expr === old ) {
			if ( anyFound == null ) {
				Sizzle.error( expr );

			} else {
				break;
			}
		}

		old = expr;
	}

	return curLoop;
};

Sizzle.error = function( msg ) {
	throw "Syntax error, unrecognized expression: " + msg;
};

var Expr = Sizzle.selectors = {
	order: [ "ID", "NAME", "TAG" ],

	match: {
		ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
		CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
		NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
		ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
		TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
		CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
		POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
		PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
	},

	leftMatch: {},

	attrMap: {
		"class": "className",
		"for": "htmlFor"
	},

	attrHandle: {
		href: function( elem ) {
			return elem.getAttribute( "href" );
		},
		type: function( elem ) {
			return elem.getAttribute( "type" );
		}
	},

	relative: {
		"+": function(checkSet, part){
			var isPartStr = typeof part === "string",
				isTag = isPartStr && !rNonWord.test( part ),
				isPartStrNotTag = isPartStr && !isTag;

			if ( isTag ) {
				part = part.toLowerCase();
			}

			for ( var i = 0, l = checkSet.length, elem; i < l; i++ ) {
				if ( (elem = checkSet[i]) ) {
					while ( (elem = elem.previousSibling) && elem.nodeType !== 1 ) {}

					checkSet[i] = isPartStrNotTag || elem && elem.nodeName.toLowerCase() === part ?
						elem || false :
						elem === part;
				}
			}

			if ( isPartStrNotTag ) {
				Sizzle.filter( part, checkSet, true );
			}
		},

		">": function( checkSet, part ) {
			var elem,
				isPartStr = typeof part === "string",
				i = 0,
				l = checkSet.length;

			if ( isPartStr && !rNonWord.test( part ) ) {
				part = part.toLowerCase();

				for ( ; i < l; i++ ) {
					elem = checkSet[i];

					if ( elem ) {
						var parent = elem.parentNode;
						checkSet[i] = parent.nodeName.toLowerCase() === part ? parent : false;
					}
				}

			} else {
				for ( ; i < l; i++ ) {
					elem = checkSet[i];

					if ( elem ) {
						checkSet[i] = isPartStr ?
							elem.parentNode :
							elem.parentNode === part;
					}
				}

				if ( isPartStr ) {
					Sizzle.filter( part, checkSet, true );
				}
			}
		},

		"": function(checkSet, part, isXML){
			var nodeCheck,
				doneName = done++,
				checkFn = dirCheck;

			if ( typeof part === "string" && !rNonWord.test( part ) ) {
				part = part.toLowerCase();
				nodeCheck = part;
				checkFn = dirNodeCheck;
			}

			checkFn( "parentNode", part, doneName, checkSet, nodeCheck, isXML );
		},

		"~": function( checkSet, part, isXML ) {
			var nodeCheck,
				doneName = done++,
				checkFn = dirCheck;

			if ( typeof part === "string" && !rNonWord.test( part ) ) {
				part = part.toLowerCase();
				nodeCheck = part;
				checkFn = dirNodeCheck;
			}

			checkFn( "previousSibling", part, doneName, checkSet, nodeCheck, isXML );
		}
	},

	find: {
		ID: function( match, context, isXML ) {
			if ( typeof context.getElementById !== "undefined" && !isXML ) {
				var m = context.getElementById(match[1]);
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [m] : [];
			}
		},

		NAME: function( match, context ) {
			if ( typeof context.getElementsByName !== "undefined" ) {
				var ret = [],
					results = context.getElementsByName( match[1] );

				for ( var i = 0, l = results.length; i < l; i++ ) {
					if ( results[i].getAttribute("name") === match[1] ) {
						ret.push( results[i] );
					}
				}

				return ret.length === 0 ? null : ret;
			}
		},

		TAG: function( match, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( match[1] );
			}
		}
	},
	preFilter: {
		CLASS: function( match, curLoop, inplace, result, not, isXML ) {
			match = " " + match[1].replace( rBackslash, "" ) + " ";

			if ( isXML ) {
				return match;
			}

			for ( var i = 0, elem; (elem = curLoop[i]) != null; i++ ) {
				if ( elem ) {
					if ( not ^ (elem.className && (" " + elem.className + " ").replace(/[\t\n\r]/g, " ").indexOf(match) >= 0) ) {
						if ( !inplace ) {
							result.push( elem );
						}

					} else if ( inplace ) {
						curLoop[i] = false;
					}
				}
			}

			return false;
		},

		ID: function( match ) {
			return match[1].replace( rBackslash, "" );
		},

		TAG: function( match, curLoop ) {
			return match[1].replace( rBackslash, "" ).toLowerCase();
		},

		CHILD: function( match ) {
			if ( match[1] === "nth" ) {
				if ( !match[2] ) {
					Sizzle.error( match[0] );
				}

				match[2] = match[2].replace(/^\+|\s*/g, '');

				// parse equations like 'even', 'odd', '5', '2n', '3n+2', '4n-1', '-n+6'
				var test = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(
					match[2] === "even" && "2n" || match[2] === "odd" && "2n+1" ||
					!/\D/.test( match[2] ) && "0n+" + match[2] || match[2]);

				// calculate the numbers (first)n+(last) including if they are negative
				match[2] = (test[1] + (test[2] || 1)) - 0;
				match[3] = test[3] - 0;
			}
			else if ( match[2] ) {
				Sizzle.error( match[0] );
			}

			// TODO: Move to normal caching system
			match[0] = done++;

			return match;
		},

		ATTR: function( match, curLoop, inplace, result, not, isXML ) {
			var name = match[1] = match[1].replace( rBackslash, "" );
			
			if ( !isXML && Expr.attrMap[name] ) {
				match[1] = Expr.attrMap[name];
			}

			// Handle if an un-quoted value was used
			match[4] = ( match[4] || match[5] || "" ).replace( rBackslash, "" );

			if ( match[2] === "~=" ) {
				match[4] = " " + match[4] + " ";
			}

			return match;
		},

		PSEUDO: function( match, curLoop, inplace, result, not ) {
			if ( match[1] === "not" ) {
				// If we're dealing with a complex expression, or a simple one
				if ( ( chunker.exec(match[3]) || "" ).length > 1 || /^\w/.test(match[3]) ) {
					match[3] = Sizzle(match[3], null, null, curLoop);

				} else {
					var ret = Sizzle.filter(match[3], curLoop, inplace, true ^ not);

					if ( !inplace ) {
						result.push.apply( result, ret );
					}

					return false;
				}

			} else if ( Expr.match.POS.test( match[0] ) || Expr.match.CHILD.test( match[0] ) ) {
				return true;
			}
			
			return match;
		},

		POS: function( match ) {
			match.unshift( true );

			return match;
		}
	},
	
	filters: {
		enabled: function( elem ) {
			return elem.disabled === false && elem.type !== "hidden";
		},

		disabled: function( elem ) {
			return elem.disabled === true;
		},

		checked: function( elem ) {
			return elem.checked === true;
		},
		
		selected: function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}
			
			return elem.selected === true;
		},

		parent: function( elem ) {
			return !!elem.firstChild;
		},

		empty: function( elem ) {
			return !elem.firstChild;
		},

		has: function( elem, i, match ) {
			return !!Sizzle( match[3], elem ).length;
		},

		header: function( elem ) {
			return (/h\d/i).test( elem.nodeName );
		},

		text: function( elem ) {
			var attr = elem.getAttribute( "type" ), type = elem.type;
			// IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
			// use getAttribute instead to test this case
			return "text" === type && ( attr === type || attr === null );
		},

		radio: function( elem ) {
			return "radio" === elem.type;
		},

		checkbox: function( elem ) {
			return "checkbox" === elem.type;
		},

		file: function( elem ) {
			return "file" === elem.type;
		},
		password: function( elem ) {
			return "password" === elem.type;
		},

		submit: function( elem ) {
			return "submit" === elem.type;
		},

		image: function( elem ) {
			return "image" === elem.type;
		},

		reset: function( elem ) {
			return "reset" === elem.type;
		},

		button: function( elem ) {
			return "button" === elem.type || elem.nodeName.toLowerCase() === "button";
		},

		input: function( elem ) {
			return (/input|select|textarea|button/i).test( elem.nodeName );
		}
	},
	setFilters: {
		first: function( elem, i ) {
			return i === 0;
		},

		last: function( elem, i, match, array ) {
			return i === array.length - 1;
		},

		even: function( elem, i ) {
			return i % 2 === 0;
		},

		odd: function( elem, i ) {
			return i % 2 === 1;
		},

		lt: function( elem, i, match ) {
			return i < match[3] - 0;
		},

		gt: function( elem, i, match ) {
			return i > match[3] - 0;
		},

		nth: function( elem, i, match ) {
			return match[3] - 0 === i;
		},

		eq: function( elem, i, match ) {
			return match[3] - 0 === i;
		}
	},
	filter: {
		PSEUDO: function( elem, match, i, array ) {
			var name = match[1],
				filter = Expr.filters[ name ];

			if ( filter ) {
				return filter( elem, i, match, array );

			} else if ( name === "contains" ) {
				return (elem.textContent || elem.innerText || Sizzle.getText([ elem ]) || "").indexOf(match[3]) >= 0;

			} else if ( name === "not" ) {
				var not = match[3];

				for ( var j = 0, l = not.length; j < l; j++ ) {
					if ( not[j] === elem ) {
						return false;
					}
				}

				return true;

			} else {
				Sizzle.error( name );
			}
		},

		CHILD: function( elem, match ) {
			var type = match[1],
				node = elem;

			switch ( type ) {
				case "only":
				case "first":
					while ( (node = node.previousSibling) )	 {
						if ( node.nodeType === 1 ) {
							return false;
						}
					}

					if ( type === "first" ) {
						return true;
					}

					node = elem;

				case "last":
					while ( (node = node.nextSibling) )	 {
						if ( node.nodeType === 1 ) {
							return false;
						}
					}

					return true;

				case "nth":
					var first = match[2],
						last = match[3];

					if ( first === 1 && last === 0 ) {
						return true;
					}
					
					var doneName = match[0],
						parent = elem.parentNode;
	
					if ( parent && (parent.sizcache !== doneName || !elem.nodeIndex) ) {
						var count = 0;
						
						for ( node = parent.firstChild; node; node = node.nextSibling ) {
							if ( node.nodeType === 1 ) {
								node.nodeIndex = ++count;
							}
						}

						parent.sizcache = doneName;
					}
					
					var diff = elem.nodeIndex - last;

					if ( first === 0 ) {
						return diff === 0;

					} else {
						return ( diff % first === 0 && diff / first >= 0 );
					}
			}
		},

		ID: function( elem, match ) {
			return elem.nodeType === 1 && elem.getAttribute("id") === match;
		},

		TAG: function( elem, match ) {
			return (match === "*" && elem.nodeType === 1) || elem.nodeName.toLowerCase() === match;
		},
		
		CLASS: function( elem, match ) {
			return (" " + (elem.className || elem.getAttribute("class")) + " ")
				.indexOf( match ) > -1;
		},

		ATTR: function( elem, match ) {
			var name = match[1],
				result = Expr.attrHandle[ name ] ?
					Expr.attrHandle[ name ]( elem ) :
					elem[ name ] != null ?
						elem[ name ] :
						elem.getAttribute( name ),
				value = result + "",
				type = match[2],
				check = match[4];

			return result == null ?
				type === "!=" :
				type === "=" ?
				value === check :
				type === "*=" ?
				value.indexOf(check) >= 0 :
				type === "~=" ?
				(" " + value + " ").indexOf(check) >= 0 :
				!check ?
				value && result !== false :
				type === "!=" ?
				value !== check :
				type === "^=" ?
				value.indexOf(check) === 0 :
				type === "$=" ?
				value.substr(value.length - check.length) === check :
				type === "|=" ?
				value === check || value.substr(0, check.length + 1) === check + "-" :
				false;
		},

		POS: function( elem, match, i, array ) {
			var name = match[2],
				filter = Expr.setFilters[ name ];

			if ( filter ) {
				return filter( elem, i, match, array );
			}
		}
	}
};

var origPOS = Expr.match.POS,
	fescape = function(all, num){
		return "\\" + (num - 0 + 1);
	};

for ( var type in Expr.match ) {
	Expr.match[ type ] = new RegExp( Expr.match[ type ].source + (/(?![^\[]*\])(?![^\(]*\))/.source) );
	Expr.leftMatch[ type ] = new RegExp( /(^(?:.|\r|\n)*?)/.source + Expr.match[ type ].source.replace(/\\(\d+)/g, fescape) );
}

var makeArray = function( array, results ) {
	array = Array.prototype.slice.call( array, 0 );

	if ( results ) {
		results.push.apply( results, array );
		return results;
	}
	
	return array;
};

// Perform a simple check to determine if the browser is capable of
// converting a NodeList to an array using builtin methods.
// Also verifies that the returned array holds DOM nodes
// (which is not the case in the Blackberry browser)
try {
	Array.prototype.slice.call( document.documentElement.childNodes, 0 )[0].nodeType;

// Provide a fallback method if it does not work
} catch( e ) {
	makeArray = function( array, results ) {
		var i = 0,
			ret = results || [];

		if ( toString.call(array) === "[object Array]" ) {
			Array.prototype.push.apply( ret, array );

		} else {
			if ( typeof array.length === "number" ) {
				for ( var l = array.length; i < l; i++ ) {
					ret.push( array[i] );
				}

			} else {
				for ( ; array[i]; i++ ) {
					ret.push( array[i] );
				}
			}
		}

		return ret;
	};
}

var sortOrder, siblingCheck;

if ( document.documentElement.compareDocumentPosition ) {
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		if ( !a.compareDocumentPosition || !b.compareDocumentPosition ) {
			return a.compareDocumentPosition ? -1 : 1;
		}

		return a.compareDocumentPosition(b) & 4 ? -1 : 1;
	};

} else {
	sortOrder = function( a, b ) {
		var al, bl,
			ap = [],
			bp = [],
			aup = a.parentNode,
			bup = b.parentNode,
			cur = aup;

		// The nodes are identical, we can exit early
		if ( a === b ) {
			hasDuplicate = true;
			return 0;

		// If the nodes are siblings (or identical) we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );

		// If no parents were found then the nodes are disconnected
		} else if ( !aup ) {
			return -1;

		} else if ( !bup ) {
			return 1;
		}

		// Otherwise they're somewhere else in the tree so we need
		// to build up a full list of the parentNodes for comparison
		while ( cur ) {
			ap.unshift( cur );
			cur = cur.parentNode;
		}

		cur = bup;

		while ( cur ) {
			bp.unshift( cur );
			cur = cur.parentNode;
		}

		al = ap.length;
		bl = bp.length;

		// Start walking down the tree looking for a discrepancy
		for ( var i = 0; i < al && i < bl; i++ ) {
			if ( ap[i] !== bp[i] ) {
				return siblingCheck( ap[i], bp[i] );
			}
		}

		// We ended someplace up the tree so do a sibling check
		return i === al ?
			siblingCheck( a, bp[i], -1 ) :
			siblingCheck( ap[i], b, 1 );
	};

	siblingCheck = function( a, b, ret ) {
		if ( a === b ) {
			return ret;
		}

		var cur = a.nextSibling;

		while ( cur ) {
			if ( cur === b ) {
				return -1;
			}

			cur = cur.nextSibling;
		}

		return 1;
	};
}

// Utility function for retreiving the text value of an array of DOM nodes
Sizzle.getText = function( elems ) {
	var ret = "", elem;

	for ( var i = 0; elems[i]; i++ ) {
		elem = elems[i];

		// Get the text from text nodes and CDATA nodes
		if ( elem.nodeType === 3 || elem.nodeType === 4 ) {
			ret += elem.nodeValue;

		// Traverse everything else, except comment nodes
		} else if ( elem.nodeType !== 8 ) {
			ret += Sizzle.getText( elem.childNodes );
		}
	}

	return ret;
};

// Check to see if the browser returns elements by name when
// querying by getElementById (and provide a workaround)
(function(){
	// We're going to inject a fake input element with a specified name
	var form = document.createElement("div"),
		id = "script" + (new Date()).getTime(),
		root = document.documentElement;

	form.innerHTML = "<a name='" + id + "'/>";

	// Inject it into the root element, check its status, and remove it quickly
	root.insertBefore( form, root.firstChild );

	// The workaround has to do additional checks after a getElementById
	// Which slows things down for other browsers (hence the branching)
	if ( document.getElementById( id ) ) {
		Expr.find.ID = function( match, context, isXML ) {
			if ( typeof context.getElementById !== "undefined" && !isXML ) {
				var m = context.getElementById(match[1]);

				return m ?
					m.id === match[1] || typeof m.getAttributeNode !== "undefined" && m.getAttributeNode("id").nodeValue === match[1] ?
						[m] :
						undefined :
					[];
			}
		};

		Expr.filter.ID = function( elem, match ) {
			var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");

			return elem.nodeType === 1 && node && node.nodeValue === match;
		};
	}

	root.removeChild( form );

	// release memory in IE
	root = form = null;
})();

(function(){
	// Check to see if the browser returns only elements
	// when doing getElementsByTagName("*")

	// Create a fake element
	var div = document.createElement("div");
	div.appendChild( document.createComment("") );

	// Make sure no comments are found
	if ( div.getElementsByTagName("*").length > 0 ) {
		Expr.find.TAG = function( match, context ) {
			var results = context.getElementsByTagName( match[1] );

			// Filter out possible comments
			if ( match[1] === "*" ) {
				var tmp = [];

				for ( var i = 0; results[i]; i++ ) {
					if ( results[i].nodeType === 1 ) {
						tmp.push( results[i] );
					}
				}

				results = tmp;
			}

			return results;
		};
	}

	// Check to see if an attribute returns normalized href attributes
	div.innerHTML = "<a href='#'></a>";

	if ( div.firstChild && typeof div.firstChild.getAttribute !== "undefined" &&
			div.firstChild.getAttribute("href") !== "#" ) {

		Expr.attrHandle.href = function( elem ) {
			return elem.getAttribute( "href", 2 );
		};
	}

	// release memory in IE
	div = null;
})();

if ( document.querySelectorAll ) {
	(function(){
		var oldSizzle = Sizzle,
			div = document.createElement("div"),
			id = "__sizzle__";

		div.innerHTML = "<p class='TEST'></p>";

		// Safari can't handle uppercase or unicode characters when
		// in quirks mode.
		if ( div.querySelectorAll && div.querySelectorAll(".TEST").length === 0 ) {
			return;
		}
	
		Sizzle = function( query, context, extra, seed ) {
			context = context || document;

			// Only use querySelectorAll on non-XML documents
			// (ID selectors don't work in non-HTML documents)
			if ( !seed && !Sizzle.isXML(context) ) {
				// See if we find a selector to speed up
				var match = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec( query );
				
				if ( match && (context.nodeType === 1 || context.nodeType === 9) ) {
					// Speed-up: Sizzle("TAG")
					if ( match[1] ) {
						return makeArray( context.getElementsByTagName( query ), extra );
					
					// Speed-up: Sizzle(".CLASS")
					} else if ( match[2] && Expr.find.CLASS && context.getElementsByClassName ) {
						return makeArray( context.getElementsByClassName( match[2] ), extra );
					}
				}
				
				if ( context.nodeType === 9 ) {
					// Speed-up: Sizzle("body")
					// The body element only exists once, optimize finding it
					if ( query === "body" && context.body ) {
						return makeArray( [ context.body ], extra );
						
					// Speed-up: Sizzle("#ID")
					} else if ( match && match[3] ) {
						var elem = context.getElementById( match[3] );

						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						if ( elem && elem.parentNode ) {
							// Handle the case where IE and Opera return items
							// by name instead of ID
							if ( elem.id === match[3] ) {
								return makeArray( [ elem ], extra );
							}
							
						} else {
							return makeArray( [], extra );
						}
					}
					
					try {
						return makeArray( context.querySelectorAll(query), extra );
					} catch(qsaError) {}

				// qSA works strangely on Element-rooted queries
				// We can work around this by specifying an extra ID on the root
				// and working up from there (Thanks to Andrew Dupont for the technique)
				// IE 8 doesn't work on object elements
				} else if ( context.nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
					var oldContext = context,
						old = context.getAttribute( "id" ),
						nid = old || id,
						hasParent = context.parentNode,
						relativeHierarchySelector = /^\s*[+~]/.test( query );

					if ( !old ) {
						context.setAttribute( "id", nid );
					} else {
						nid = nid.replace( /'/g, "\\$&" );
					}
					if ( relativeHierarchySelector && hasParent ) {
						context = context.parentNode;
					}

					try {
						if ( !relativeHierarchySelector || hasParent ) {
							return makeArray( context.querySelectorAll( "[id='" + nid + "'] " + query ), extra );
						}

					} catch(pseudoError) {
					} finally {
						if ( !old ) {
							oldContext.removeAttribute( "id" );
						}
					}
				}
			}
		
			return oldSizzle(query, context, extra, seed);
		};

		for ( var prop in oldSizzle ) {
			Sizzle[ prop ] = oldSizzle[ prop ];
		}

		// release memory in IE
		div = null;
	})();
}

(function(){
	var html = document.documentElement,
		matches = html.matchesSelector || html.mozMatchesSelector || html.webkitMatchesSelector || html.msMatchesSelector;

	if ( matches ) {
		// Check to see if it's possible to do matchesSelector
		// on a disconnected node (IE 9 fails this)
		var disconnectedMatch = !matches.call( document.createElement( "div" ), "div" ),
			pseudoWorks = false;

		try {
			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( document.documentElement, "[test!='']:sizzle" );
	
		} catch( pseudoError ) {
			pseudoWorks = true;
		}

		Sizzle.matchesSelector = function( node, expr ) {
			// Make sure that attribute selectors are quoted
			expr = expr.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");

			if ( !Sizzle.isXML( node ) ) {
				try {
					if ( pseudoWorks || !Expr.match.PSEUDO.test( expr ) && !/!=/.test( expr ) ) {
						var ret = matches.call( node, expr );

						// IE 9's matchesSelector returns false on disconnected nodes
						if ( ret || !disconnectedMatch ||
								// As well, disconnected nodes are said to be in a document
								// fragment in IE 9, so check for that
								node.document && node.document.nodeType !== 11 ) {
							return ret;
						}
					}
				} catch(e) {}
			}

			return Sizzle(expr, null, null, [node]).length > 0;
		};
	}
})();

(function(){
	var div = document.createElement("div");

	div.innerHTML = "<div class='test e'></div><div class='test'></div>";

	// Opera can't find a second classname (in 9.6)
	// Also, make sure that getElementsByClassName actually exists
	if ( !div.getElementsByClassName || div.getElementsByClassName("e").length === 0 ) {
		return;
	}

	// Safari caches class attributes, doesn't catch changes (in 3.2)
	div.lastChild.className = "e";

	if ( div.getElementsByClassName("e").length === 1 ) {
		return;
	}
	
	Expr.order.splice(1, 0, "CLASS");
	Expr.find.CLASS = function( match, context, isXML ) {
		if ( typeof context.getElementsByClassName !== "undefined" && !isXML ) {
			return context.getElementsByClassName(match[1]);
		}
	};

	// release memory in IE
	div = null;
})();

function dirNodeCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
	for ( var i = 0, l = checkSet.length; i < l; i++ ) {
		var elem = checkSet[i];

		if ( elem ) {
			var match = false;

			elem = elem[dir];

			while ( elem ) {
				if ( elem.sizcache === doneName ) {
					match = checkSet[elem.sizset];
					break;
				}

				if ( elem.nodeType === 1 && !isXML ){
					elem.sizcache = doneName;
					elem.sizset = i;
				}

				if ( elem.nodeName.toLowerCase() === cur ) {
					match = elem;
					break;
				}

				elem = elem[dir];
			}

			checkSet[i] = match;
		}
	}
}

function dirCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
	for ( var i = 0, l = checkSet.length; i < l; i++ ) {
		var elem = checkSet[i];

		if ( elem ) {
			var match = false;
			
			elem = elem[dir];

			while ( elem ) {
				if ( elem.sizcache === doneName ) {
					match = checkSet[elem.sizset];
					break;
				}

				if ( elem.nodeType === 1 ) {
					if ( !isXML ) {
						elem.sizcache = doneName;
						elem.sizset = i;
					}

					if ( typeof cur !== "string" ) {
						if ( elem === cur ) {
							match = true;
							break;
						}

					} else if ( Sizzle.filter( cur, [elem] ).length > 0 ) {
						match = elem;
						break;
					}
				}

				elem = elem[dir];
			}

			checkSet[i] = match;
		}
	}
}

if ( document.documentElement.contains ) {
	Sizzle.contains = function( a, b ) {
		return a !== b && (a.contains ? a.contains(b) : true);
	};

} else if ( document.documentElement.compareDocumentPosition ) {
	Sizzle.contains = function( a, b ) {
		return !!(a.compareDocumentPosition(b) & 16);
	};

} else {
	Sizzle.contains = function() {
		return false;
	};
}

Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = (elem ? elem.ownerDocument || elem : 0).documentElement;

	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

var posProcess = function( selector, context ) {
	var match,
		tmpSet = [],
		later = "",
		root = context.nodeType ? [context] : context;

	// Position selectors must be done after the filter
	// And so must :not(positional) so we move all PSEUDOs to the end
	while ( (match = Expr.match.PSEUDO.exec( selector )) ) {
		later += match[0];
		selector = selector.replace( Expr.match.PSEUDO, "" );
	}

	selector = Expr.relative[selector] ? selector + "*" : selector;

	for ( var i = 0, l = root.length; i < l; i++ ) {
		Sizzle( selector, root[i], tmpSet );
	}

	return Sizzle.filter( later, tmpSet );
};

// EXPOSE

window.Sizzle = Sizzle;

})();;
	var s = window.Sizzle;
	thx.js.Sizzle = s;
	thx.js.Sizzle.select = s;
}
{
	String.prototype.__class__ = String;
	String.__name__ = ["String"];
	Array.prototype.__class__ = Array;
	Array.__name__ = ["Array"];
	Int = { __name__ : ["Int"]};
	Dynamic = { __name__ : ["Dynamic"]};
	Float = Number;
	Float.__name__ = ["Float"];
	Bool = { __ename__ : ["Bool"]};
	Class = { __name__ : ["Class"]};
	Enum = { };
	Void = { __ename__ : ["Void"]};
}
window.requestAnimationFrame = window.requestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.oRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function(callback) { setTimeout(callback, 1000 / 60); } ;
{
	var d = Date;
	d.now = function() {
		$s.push("StringTools::isEOF");
		var $spos = $s.length;
		var $tmp = new Date();
		$s.pop();
		return $tmp;
		$s.pop();
	};
	d.fromTime = function(t) {
		$s.push("StringTools::isEOF");
		var $spos = $s.length;
		var d1 = new Date();
		d1["setTime"](t);
		$s.pop();
		return d1;
		$s.pop();
	};
	d.fromString = function(s) {
		$s.push("StringTools::isEOF");
		var $spos = $s.length;
		switch(s.length) {
		case 8:
			var k = s.split(":");
			var d1 = new Date();
			d1["setTime"](0);
			d1["setUTCHours"](k[0]);
			d1["setUTCMinutes"](k[1]);
			d1["setUTCSeconds"](k[2]);
			$s.pop();
			return d1;
		case 10:
			var k = s.split("-");
			var $tmp = new Date(k[0],k[1] - 1,k[2],0,0,0);
			$s.pop();
			return $tmp;
		case 19:
			var k = s.split(" ");
			var y = k[0].split("-");
			var t = k[1].split(":");
			var $tmp = new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
			$s.pop();
			return $tmp;
		default:
			throw "Invalid date format : " + s;
		}
		$s.pop();
	};
	d.prototype["toString"] = function() {
		$s.push("StringTools::isEOF");
		var $spos = $s.length;
		var date = this;
		var m = date.getMonth() + 1;
		var d1 = date.getDate();
		var h = date.getHours();
		var mi = date.getMinutes();
		var s = date.getSeconds();
		var $tmp = date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d1 < 10?"0" + d1:"" + d1) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
		$s.pop();
		return $tmp;
		$s.pop();
	};
	d.prototype.__class__ = d;
	d.__name__ = ["Date"];
}
js.Lib.onerror = null;
thx.js.Svg._usepage = new EReg("WebKit","").match(js.Lib.window.navigator.userAgent);
examples.TransitionEquations.transitions = [thx.math.EaseMode.EaseInEaseOut,thx.math.EaseMode.EaseOutEaseIn,thx.math.EaseMode.EaseIn,thx.math.EaseMode.EaseOut];
examples.TransitionEquations.current = -1;
thx.color.Colors._reParse = new EReg("^\\s*(?:(hsl|rgb|rgba|cmyk)\\(([^)]+)\\))|(?:(?:0x|#)([a-f0-9]{3,6}))\\s*$","i");
thx.js.Dom.doc = (function() {
	$s.push("StringTools::isEOF");
	var $spos = $s.length;
	var gs = thx.js.Selection.create([new thx.js.Group([js.Lib.document])]);
	gs.parentNode = js.Lib.document.documentElement;
	$s.pop();
	return gs;
	$s.pop();
})();
thx.js.Dom.selectionEngine = new thx.js.SizzleEngine();
haxe.Timer.arr = new Array();
thx.svg.LineInternals.arcOffset = -Math.PI / 2;
thx.svg.LineInternals.arcMax = 2 * Math.PI - 1e-6;
thx.svg.LineInternals._lineBasisBezier1 = [0,2 / 3,1 / 3,0];
thx.svg.LineInternals._lineBasisBezier2 = [0,1 / 3,2 / 3,0];
thx.svg.LineInternals._lineBasisBezier3 = [0,1 / 6,2 / 3,1 / 6];
thx.xml.Namespace.prefix = (function() {
	$s.push("StringTools::isEOF");
	var $spos = $s.length;
	var h = new Hash();
	h.set("svg","http://www.w3.org/2000/svg");
	h.set("xhtml","http://www.w3.org/1999/xhtml");
	h.set("xlink","http://www.w3.org/1999/xlink");
	h.set("xml","http://www.w3.org/XML/1998/namespace");
	h.set("xmlns","http://www.w3.org/2000/xmlns/");
	$s.pop();
	return h;
	$s.pop();
})();
Strings._re = new EReg("[{](\\d+)(?::[^}]*)?[}]","m");
Strings._reSplitWC = new EReg("(\r\n|\n\r|\n|\r)","g");
Strings._reReduceWS = new EReg("\\s+","");
Strings._reStripTags = new EReg("(<[a-z]+[^>/]*/?>|</[a-z]+>)","i");
Strings._reFormat = new EReg("{(\\d+)(?::([a-zA-Z]+))?(?:,([^\"',}]+|'[^']+'|\"[^\"]+\"))?(?:,([^\"',}]+|'[^']+'|\"[^\"]+\"))?(?:,([^\"',}]+|'[^']+'|\"[^\"]+\"))?}","m");
Strings.__ucwordsPattern = new EReg("[^a-zA-Z]([a-z])","");
Strings.__ucwordswsPattern = new EReg("\\s([a-z])","");
Strings.__alphaNumPattern = new EReg("^[a-z0-9]+$","i");
Strings.__digitsPattern = new EReg("^[0-9]+$","");
Strings._reInterpolateNumber = new EReg("[-+]?(?:\\d+\\.\\d+|\\d+\\.|\\.\\d+|\\d+)(?:[eE][-]?\\d+)?","");
thx.math.Const.TWO_PI = 6.283185307179586477;
thx.math.Const.PI = 3.141592653589793238;
thx.math.Const.HALF_PI = 1.570796326794896619;
thx.math.Const.TO_DEGREE = 57.29577951308232088;
thx.math.Const.TO_RADIAN = 0.01745329251994329577;
thx.math.Const.LN10 = 2.302585092994046;
thx.js.Timer.timeout = 0;
thx.js.Timer.queue = null;
thx.js.Timer.interval = 0;
thx.js.Timer._step = $closure(thx.js.Timer,"step");
thx.js.BaseTransition._id = 0;
thx.js.BaseTransition._inheritid = 0;
thx.js.behavior.Zoom.last = 0.0;
Main.main()