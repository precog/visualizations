$estr = function() { return js.Boot.__string_rec(this,''); }
if(typeof rg=='undefined') rg = {}
if(!rg.layout) rg.layout = {}
rg.layout.Frame = function(p) {
	if( p === $_ ) return;
	$s.push("rg.layout.Frame::new");
	var $spos = $s.length;
	this.x = this.y = this.width = this.height = 0;
	$s.pop();
}
rg.layout.Frame.__name__ = ["rg","layout","Frame"];
rg.layout.Frame.prototype.x = null;
rg.layout.Frame.prototype.y = null;
rg.layout.Frame.prototype.width = null;
rg.layout.Frame.prototype.height = null;
rg.layout.Frame.prototype.change = function() {
	$s.push("rg.layout.Frame::change");
	var $spos = $s.length;
	$s.pop();
}
rg.layout.Frame.prototype.set = function(x,y,width,height) {
	$s.push("rg.layout.Frame::set");
	var $spos = $s.length;
	if(this.x == x && this.y == y && this.width == width && this.height == height) {
		$s.pop();
		return;
	}
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.change();
	$s.pop();
}
rg.layout.Frame.prototype.toString = function() {
	$s.push("rg.layout.Frame::toString");
	var $spos = $s.length;
	var $tmp = "[x: " + this.x + ", y: " + this.y + ", width: " + this.width + ", height: " + this.height + "]";
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.layout.Frame.prototype.__class__ = rg.layout.Frame;
if(!rg.ie) rg.ie = {}
rg.ie.HeaderOptions = function(container,t) {
	if( container === $_ ) return;
	$s.push("rg.ie.HeaderOptions::new");
	var $spos = $s.length;
	this._t = t;
	this.init(container);
	$s.pop();
}
rg.ie.HeaderOptions.__name__ = ["rg","ie","HeaderOptions"];
rg.ie.HeaderOptions.prototype._container = null;
rg.ie.HeaderOptions.prototype._t = null;
rg.ie.HeaderOptions.prototype._chart = null;
rg.ie.HeaderOptions.prototype.toggleStack = function() {
	$s.push("rg.ie.HeaderOptions::toggleStack");
	var $spos = $s.length;
	$s.pop();
}
rg.ie.HeaderOptions.prototype.setChart = function(chart) {
	$s.push("rg.ie.HeaderOptions::setChart");
	var $spos = $s.length;
	this._chart = chart;
	if(null == this._chart) this.hide(); else this.show();
	$s.pop();
}
rg.ie.HeaderOptions.prototype.hide = function() {
	$s.push("rg.ie.HeaderOptions::hide");
	var $spos = $s.length;
	this._container.classed().add("hidden");
	$s.pop();
}
rg.ie.HeaderOptions.prototype.show = function() {
	$s.push("rg.ie.HeaderOptions::show");
	var $spos = $s.length;
	this._container.classed().remove("hidden");
	$s.pop();
}
rg.ie.HeaderOptions.prototype.init = function(container) {
	$s.push("rg.ie.HeaderOptions::init");
	var $spos = $s.length;
	this._container = container.append("div").attr("class").string("options hidden");
	var dl = this._container.append("dl");
	dl.append("dt").text().string(this._t._("options"));
	dl.append("dd").text().string(this._t._("toggle stack")).onNode("click",$closure(this,"_toggleStack"));
	$s.pop();
}
rg.ie.HeaderOptions.prototype._toggleStack = function(d,i) {
	$s.push("rg.ie.HeaderOptions::_toggleStack");
	var $spos = $s.length;
	this.toggleStack();
	$s.pop();
}
rg.ie.HeaderOptions.prototype.__class__ = rg.ie.HeaderOptions;
if(typeof thx=='undefined') thx = {}
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
thx.color.Rgb.darker = function(color,t,equation) {
	$s.push("thx.color.Rgb::darker");
	var $spos = $s.length;
	var $tmp = new thx.color.Rgb(Ints.interpolate(t * color.red,0,255,equation),Ints.interpolate(t * color.green,0,255,equation),Ints.interpolate(t * color.blue,0,255,equation));
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.color.Rgb.interpolate = function(a,b,t,equation) {
	$s.push("thx.color.Rgb::interpolate");
	var $spos = $s.length;
	var $tmp = new thx.color.Rgb(Ints.interpolate(t,a.red,b.red,equation),Ints.interpolate(t,a.green,b.green,equation),Ints.interpolate(t,a.blue,b.blue,equation));
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.color.Rgb.interpolatef = function(a,b,equation) {
	$s.push("thx.color.Rgb::interpolatef");
	var $spos = $s.length;
	var r = Ints.interpolatef(a.red,b.red,equation), g = Ints.interpolatef(a.green,b.green,equation), b1 = Ints.interpolatef(a.blue,b.blue,equation);
	var $tmp = function(t) {
		$s.push("thx.color.Rgb::interpolatef@95");
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
	var nc = thx.color.Hsl.ofRgb(c);
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
	var nc = thx.color.Hsl.ofRgb(c);
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
thx.color.Hsl.ofRgb = function(c) {
	$s.push("thx.color.Hsl::ofRgb");
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
thx.color.Hsl.darker = function(color,t,equation) {
	$s.push("thx.color.Hsl::darker");
	var $spos = $s.length;
	var v = color.lightness / t;
	var $tmp = new thx.color.Hsl(color.hue,color.saturation,Floats.interpolate(v,0,1,equation));
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.color.Hsl.interpolate = function(a,b,t,equation) {
	$s.push("thx.color.Hsl::interpolate");
	var $spos = $s.length;
	var $tmp = new thx.color.Hsl(Floats.interpolate(t,a.hue,b.hue,equation),Floats.interpolate(t,a.saturation,b.saturation,equation),Floats.interpolate(t,a.lightness,b.lightness,equation));
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
if(!thx.js) thx.js = {}
thx.js.ISelectorEngine = function() { }
thx.js.ISelectorEngine.__name__ = ["thx","js","ISelectorEngine"];
thx.js.ISelectorEngine.prototype.select = null;
thx.js.ISelectorEngine.prototype.selectAll = null;
thx.js.ISelectorEngine.prototype.__class__ = thx.js.ISelectorEngine;
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
		haxe.Log.trace("wrong parameters (" + this.params.join(", ") + ") passed for pattern '" + this.message + "' at " + ps + ": " + e,{ fileName : "Error.hx", lineNumber : 39, className : "thx.error.Error", methodName : "toString"});
		$s.pop();
		return "";
	}
	$s.pop();
}
thx.error.Error.prototype.__class__ = thx.error.Error;
thx.error.NullArgument = function(argumentName,posInfo) {
	if( argumentName === $_ ) return;
	$s.push("thx.error.NullArgument::new");
	var $spos = $s.length;
	thx.error.Error.call(this,"invalid null argument '{0}'",null,argumentName,posInfo);
	$s.pop();
}
thx.error.NullArgument.__name__ = ["thx","error","NullArgument"];
thx.error.NullArgument.__super__ = thx.error.Error;
for(var k in thx.error.Error.prototype ) thx.error.NullArgument.prototype[k] = thx.error.Error.prototype[k];
thx.error.NullArgument.throwIfNull = function(value,name,posInfo) {
	$s.push("thx.error.NullArgument::throwIfNull");
	var $spos = $s.length;
	if(null == value) throw new thx.error.NullArgument(name,posInfo);
	$s.pop();
}
thx.error.NullArgument.prototype.__class__ = thx.error.NullArgument;
rg.ie.HeaderEvent = function(container,path,t) {
	if( container === $_ ) return;
	$s.push("rg.ie.HeaderEvent::new");
	var $spos = $s.length;
	this.path = path;
	this._t = t;
	this.init(container);
	$s.pop();
}
rg.ie.HeaderEvent.__name__ = ["rg","ie","HeaderEvent"];
rg.ie.HeaderEvent._key = function(d,i) {
	$s.push("rg.ie.HeaderEvent::_key");
	var $spos = $s.length;
	$s.pop();
	return d;
	$s.pop();
}
rg.ie.HeaderEvent.prototype.events = null;
rg.ie.HeaderEvent.prototype.event = null;
rg.ie.HeaderEvent.prototype._block = null;
rg.ie.HeaderEvent.prototype._container = null;
rg.ie.HeaderEvent.prototype._t = null;
rg.ie.HeaderEvent.prototype.path = null;
rg.ie.HeaderEvent.prototype.eventsChange = function() {
	$s.push("rg.ie.HeaderEvent::eventsChange");
	var $spos = $s.length;
	$s.pop();
}
rg.ie.HeaderEvent.prototype.eventChange = function() {
	$s.push("rg.ie.HeaderEvent::eventChange");
	var $spos = $s.length;
	$s.pop();
}
rg.ie.HeaderEvent.prototype.init = function(container) {
	$s.push("rg.ie.HeaderEvent::init");
	var $spos = $s.length;
	this._block = container.append("div").attr("class").string("event hidden");
	var dl = this._block.append("dl");
	dl.append("dt").text().string(this._t._("events"));
	this._container = dl.append("dd").append("ul");
	this.setPath(this.path);
	$s.pop();
}
rg.ie.HeaderEvent.prototype.setPath = function(path) {
	$s.push("rg.ie.HeaderEvent::setPath");
	var $spos = $s.length;
	this.path = path;
	rg.js.ReportGrid.children(path,{ type : "property"},$closure(this,"_updateEvent"));
	$s.pop();
}
rg.ie.HeaderEvent.prototype._updateEvent = function(events) {
	$s.push("rg.ie.HeaderEvent::_updateEvent");
	var $spos = $s.length;
	var t = this._t;
	events = events.map(function(d,i) {
		$s.push("rg.ie.HeaderEvent::_updateEvent@56");
		var $spos = $s.length;
		var $tmp = Strings.rtrim(Strings.ltrim(d,"."),".");
		$s.pop();
		return $tmp;
		$s.pop();
	});
	if(events.length == 0) this._block.classed().add("hidden"); else this._block.classed().remove("hidden");
	this.event = null;
	this.eventsChange();
	this.eventChange();
	var list = this._container.selectAll("li").data([],rg.ie.HeaderEvent._key);
	list.exit().remove();
	var list1 = this._container.selectAll("li").data(events,rg.ie.HeaderEvent._key);
	list1.enter().append("li").text().stringf(function(d,i) {
		$s.push("rg.ie.HeaderEvent::_updateEvent@71");
		var $spos = $s.length;
		var $tmp = t._(d);
		$s.pop();
		return $tmp;
		$s.pop();
	}).on("click",$closure(this,"_click")).eachNode($closure(this,"_eachEventCount"));
	list1.exit().remove();
	$s.pop();
}
rg.ie.HeaderEvent.prototype._click = function(d,i) {
	$s.push("rg.ie.HeaderEvent::_click");
	var $spos = $s.length;
	this.event = d;
	this.eventChange();
	$s.pop();
}
rg.ie.HeaderEvent.prototype._eachEventCount = function(n,i) {
	$s.push("rg.ie.HeaderEvent::_eachEventCount");
	var $spos = $s.length;
	rg.js.ReportGrid.propertyCount(this.path,{ property : Reflect.field(n,"__data__")},(function(f,a1) {
		$s.push("rg.ie.HeaderEvent::_eachEventCount@86");
		var $spos = $s.length;
		var $tmp = function(a2) {
			$s.push("rg.ie.HeaderEvent::_eachEventCount@86@86");
			var $spos = $s.length;
			var $tmp = f(a1,a2);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
		$s.pop();
	})($closure(this,"_eventCount"),n));
	$s.pop();
}
rg.ie.HeaderEvent.prototype._eventCount = function(n,count) {
	$s.push("rg.ie.HeaderEvent::_eventCount");
	var $spos = $s.length;
	rg.ie.SelectionHelper.appendCount(thx.js.Dom.selectNode(n),count);
	$s.pop();
}
rg.ie.HeaderEvent.prototype.__class__ = rg.ie.HeaderEvent;
if(!thx.translation) thx.translation = {}
thx.translation.PluralForms = function() { }
thx.translation.PluralForms.__name__ = ["thx","translation","PluralForms"];
thx.translation.PluralForms.prototype.__class__ = thx.translation.PluralForms;
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
thx.math.scale.NumericScale = function(p) {
	if( p === $_ ) return;
	$s.push("thx.math.scale.NumericScale::new");
	var $spos = $s.length;
	this.x0 = 0;
	this.x1 = 1;
	this.y0 = 0;
	this.y1 = 1;
	this.kx = 1;
	this.ky = 1;
	this.f = Floats.interpolatef;
	this.i = this.f(this.y0,this.y1,null);
	this._clamp = false;
	this._clampmin = 0.0;
	this._clampmax = 1.0;
	$s.pop();
}
thx.math.scale.NumericScale.__name__ = ["thx","math","scale","NumericScale"];
thx.math.scale.NumericScale.prototype.x0 = null;
thx.math.scale.NumericScale.prototype.x1 = null;
thx.math.scale.NumericScale.prototype.y0 = null;
thx.math.scale.NumericScale.prototype.y1 = null;
thx.math.scale.NumericScale.prototype.kx = null;
thx.math.scale.NumericScale.prototype.ky = null;
thx.math.scale.NumericScale.prototype.f = null;
thx.math.scale.NumericScale.prototype.i = null;
thx.math.scale.NumericScale.prototype._clamp = null;
thx.math.scale.NumericScale.prototype._clampmin = null;
thx.math.scale.NumericScale.prototype._clampmax = null;
thx.math.scale.NumericScale.prototype.scale = function(x,_) {
	$s.push("thx.math.scale.NumericScale::scale");
	var $spos = $s.length;
	x = (x - this.x0) * this.kx;
	var $tmp = this.i(this._clamp?Floats.clamp(x,this._clampmin,this._clampmax):x);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.NumericScale.prototype.invert = function(y,_) {
	$s.push("thx.math.scale.NumericScale::invert");
	var $spos = $s.length;
	var $tmp = (y - this.y0) * this.ky + this.x0;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.NumericScale.prototype.getDomain = function() {
	$s.push("thx.math.scale.NumericScale::getDomain");
	var $spos = $s.length;
	var $tmp = [this.x0,this.x1];
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.NumericScale.prototype.domain = function(x0,x1) {
	$s.push("thx.math.scale.NumericScale::domain");
	var $spos = $s.length;
	this.x0 = x0;
	this.x1 = x1;
	this.kx = 1 / (x1 - x0);
	this.ky = (x1 - x0) / (this.y1 - this.y0);
	var $tmp = this;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.NumericScale.prototype.getRange = function() {
	$s.push("thx.math.scale.NumericScale::getRange");
	var $spos = $s.length;
	var $tmp = [this.y0,this.y1];
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.NumericScale.prototype.range = function(y0,y1) {
	$s.push("thx.math.scale.NumericScale::range");
	var $spos = $s.length;
	this.y0 = y0;
	this.y1 = y1;
	this.ky = (this.x1 - this.x0) / (y1 - y0);
	this.i = this.f(y0,y1,null);
	var $tmp = this;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.NumericScale.prototype.rangeRound = function(x0,x1) {
	$s.push("thx.math.scale.NumericScale::rangeRound");
	var $spos = $s.length;
	this.x0 = x0;
	this.x1 = x1;
	this.range(x0,x1);
	this.interpolatef(Ints.interpolatef);
	var $tmp = this;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.NumericScale.prototype.getInterpolate = function() {
	$s.push("thx.math.scale.NumericScale::getInterpolate");
	var $spos = $s.length;
	var $tmp = this.f;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.NumericScale.prototype.interpolatef = function(x) {
	$s.push("thx.math.scale.NumericScale::interpolatef");
	var $spos = $s.length;
	this.i = (this.f = x)(this.y0,this.y1,null);
	var $tmp = this;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.NumericScale.prototype.getClamp = function() {
	$s.push("thx.math.scale.NumericScale::getClamp");
	var $spos = $s.length;
	var $tmp = this._clamp;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.NumericScale.prototype.clamp = function(v) {
	$s.push("thx.math.scale.NumericScale::clamp");
	var $spos = $s.length;
	this._clamp = v;
	var $tmp = this;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.NumericScale.prototype.getClampMin = function() {
	$s.push("thx.math.scale.NumericScale::getClampMin");
	var $spos = $s.length;
	var $tmp = this._clampmin;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.NumericScale.prototype.clampMin = function(v) {
	$s.push("thx.math.scale.NumericScale::clampMin");
	var $spos = $s.length;
	this._clampmin = v;
	var $tmp = this;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.NumericScale.prototype.getClampMax = function() {
	$s.push("thx.math.scale.NumericScale::getClampMax");
	var $spos = $s.length;
	var $tmp = this._clampmax;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.NumericScale.prototype.clampMax = function(v) {
	$s.push("thx.math.scale.NumericScale::clampMax");
	var $spos = $s.length;
	this._clampmax = v;
	var $tmp = this;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.NumericScale.prototype.ticks = function() {
	$s.push("thx.math.scale.NumericScale::ticks");
	var $spos = $s.length;
	var $tmp = (function($this) {
		var $r;
		throw new thx.error.AbstractMethod({ fileName : "NumericScale.hx", lineNumber : 98, className : "thx.math.scale.NumericScale", methodName : "ticks"});
		return $r;
	}(this));
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.NumericScale.prototype.tickFormat = function(v,i) {
	$s.push("thx.math.scale.NumericScale::tickFormat");
	var $spos = $s.length;
	var $tmp = (function($this) {
		var $r;
		throw new thx.error.AbstractMethod({ fileName : "NumericScale.hx", lineNumber : 103, className : "thx.math.scale.NumericScale", methodName : "tickFormat"});
		return $r;
	}(this));
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.NumericScale.prototype.transform = function(scale,t,a,b) {
	$s.push("thx.math.scale.NumericScale::transform");
	var $spos = $s.length;
	var range = this.getRange().map(function(v,_) {
		$s.push("thx.math.scale.NumericScale::transform@108");
		var $spos = $s.length;
		var $tmp = (v - t) / scale;
		$s.pop();
		return $tmp;
		$s.pop();
	});
	this.domain(a,b);
	var r = range.map($closure(this,"invert"));
	this.domain(r[0],r[1]);
	var $tmp = this;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.NumericScale.prototype._this = function() {
	$s.push("thx.math.scale.NumericScale::_this");
	var $spos = $s.length;
	var $tmp = this;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.NumericScale.prototype.__class__ = thx.math.scale.NumericScale;
thx.math.scale.Linear = function(p) {
	if( p === $_ ) return;
	$s.push("thx.math.scale.Linear::new");
	var $spos = $s.length;
	thx.math.scale.NumericScale.call(this);
	this.m = 10;
	$s.pop();
}
thx.math.scale.Linear.__name__ = ["thx","math","scale","Linear"];
thx.math.scale.Linear.__super__ = thx.math.scale.NumericScale;
for(var k in thx.math.scale.NumericScale.prototype ) thx.math.scale.Linear.prototype[k] = thx.math.scale.NumericScale.prototype[k];
thx.math.scale.Linear.prototype.m = null;
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
	var $tmp = this;
	$s.pop();
	return $tmp;
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
	var name = culture.name.toLowerCase();
	if(!thx.culture.Culture.getCultures().exists(name)) thx.culture.Culture.getCultures().set(name,culture);
	$s.pop();
}
thx.culture.Culture.loadAll = function() {
	$s.push("thx.culture.Culture::loadAll");
	var $spos = $s.length;
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
if(!rg.svg) rg.svg = {}
rg.svg.SvgLayer = function(panel) {
	if( panel === $_ ) return;
	$s.push("rg.svg.SvgLayer::new");
	var $spos = $s.length;
	this.panel = panel;
	var p = panel;
	p.addLayer(this);
	this.svg = panel.svg.append("svg:g");
	this.svg.attr("class").string("layer");
	this.init();
	$s.pop();
}
rg.svg.SvgLayer.__name__ = ["rg","svg","SvgLayer"];
rg.svg.SvgLayer.prototype.panel = null;
rg.svg.SvgLayer.prototype.svg = null;
rg.svg.SvgLayer.prototype.init = function() {
	$s.push("rg.svg.SvgLayer::init");
	var $spos = $s.length;
	$s.pop();
}
rg.svg.SvgLayer.prototype.destroy = function() {
	$s.push("rg.svg.SvgLayer::destroy");
	var $spos = $s.length;
	var p = this.panel;
	p.removeLayer(this);
	this.svg.remove();
	$s.pop();
}
rg.svg.SvgLayer.prototype.redraw = function() {
	$s.push("rg.svg.SvgLayer::redraw");
	var $spos = $s.length;
	$s.pop();
}
rg.svg.SvgLayer.prototype.__class__ = rg.svg.SvgLayer;
rg.svg.SvgZoomZone = function(panel) {
	if( panel === $_ ) return;
	$s.push("rg.svg.SvgZoomZone::new");
	var $spos = $s.length;
	rg.svg.SvgLayer.call(this,panel);
	$s.pop();
}
rg.svg.SvgZoomZone.__name__ = ["rg","svg","SvgZoomZone"];
rg.svg.SvgZoomZone.__super__ = rg.svg.SvgLayer;
for(var k in rg.svg.SvgLayer.prototype ) rg.svg.SvgZoomZone.prototype[k] = rg.svg.SvgLayer.prototype[k];
rg.svg.SvgZoomZone.prototype.eventWired = null;
rg.svg.SvgZoomZone.prototype._handler = null;
rg.svg.SvgZoomZone.prototype._zoom = null;
rg.svg.SvgZoomZone.prototype._minx = null;
rg.svg.SvgZoomZone.prototype._maxx = null;
rg.svg.SvgZoomZone.prototype._miny = null;
rg.svg.SvgZoomZone.prototype._maxy = null;
rg.svg.SvgZoomZone.prototype._minz = null;
rg.svg.SvgZoomZone.prototype._maxz = null;
rg.svg.SvgZoomZone.prototype.destroy = function() {
	$s.push("rg.svg.SvgZoomZone::destroy");
	var $spos = $s.length;
	rg.svg.SvgLayer.prototype.destroy.call(this);
	this._handler = function(_) {
		$s.push("rg.svg.SvgZoomZone::destroy@27");
		var $spos = $s.length;
		$s.pop();
	};
	$s.pop();
}
rg.svg.SvgZoomZone.prototype.wireZoom = function(n,i) {
	$s.push("rg.svg.SvgZoomZone::wireZoom");
	var $spos = $s.length;
	this._zoom = new thx.js.behavior.Zoom().zoom($closure(this,"_zoomh"),n);
	$s.pop();
}
rg.svg.SvgZoomZone.prototype._zoomh = function(n,i) {
	$s.push("rg.svg.SvgZoomZone::_zoomh");
	var $spos = $s.length;
	this._handler(thx.js.behavior.Zoom.event);
	$s.pop();
}
rg.svg.SvgZoomZone.prototype.getZoom = function() {
	$s.push("rg.svg.SvgZoomZone::getZoom");
	var $spos = $s.length;
	var $tmp = this._handler;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgZoomZone.prototype.zoom = function(f) {
	$s.push("rg.svg.SvgZoomZone::zoom");
	var $spos = $s.length;
	this._handler = f;
	$s.pop();
	return this;
	$s.pop();
}
rg.svg.SvgZoomZone.prototype.redraw = function() {
	$s.push("rg.svg.SvgZoomZone::redraw");
	var $spos = $s.length;
	if(this.eventWired != true) {
		this.eventWired = true;
		this.svg.append("svg:svg").attr("pointer-events").string("all").eachNode($closure(this,"wireZoom")).append("svg:g").attr("class").string("zoom-container").attr("transform").string("translate(0,1)").append("svg:rect").attr("class").string("zoom-zone").attr("stroke").string("#333").attr("fill").string("none");
	}
	this.svg.select("svg").attr("width")["float"](this.panel.frame.width).attr("height")["float"](this.panel.frame.height).select("rect.zoom-zone").attr("width")["float"](this.panel.frame.width - 1).attr("height")["float"](this.panel.frame.height - 1);
	$s.pop();
}
rg.svg.SvgZoomZone.prototype.__class__ = rg.svg.SvgZoomZone;
rg.svg.SvgScaleRule = function(panel,orientation) {
	if( panel === $_ ) return;
	$s.push("rg.svg.SvgScaleRule::new");
	var $spos = $s.length;
	rg.svg.SvgLayer.call(this,panel);
	this.orientation(orientation);
	this.svg.attr("class").string("scale-rules");
	$s.pop();
}
rg.svg.SvgScaleRule.__name__ = ["rg","svg","SvgScaleRule"];
rg.svg.SvgScaleRule.__super__ = rg.svg.SvgLayer;
for(var k in rg.svg.SvgLayer.prototype ) rg.svg.SvgScaleRule.prototype[k] = rg.svg.SvgLayer.prototype[k];
rg.svg.SvgScaleRule.ofLinear = function(panel,orientation,scale) {
	$s.push("rg.svg.SvgScaleRule::ofLinear");
	var $spos = $s.length;
	var $tmp = new rg.svg.SvgScaleRule(panel,orientation).scale($closure(scale,"scale")).range($closure(scale,"range")).ticks($closure(scale,"ticks")).key($closure(scale,"tickFormat"));
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgScaleRule.prototype._orientation = null;
rg.svg.SvgScaleRule.prototype._pos = null;
rg.svg.SvgScaleRule.prototype._t = null;
rg.svg.SvgScaleRule.prototype._maxRange = null;
rg.svg.SvgScaleRule.prototype._axis = null;
rg.svg.SvgScaleRule.prototype._oaxis = null;
rg.svg.SvgScaleRule.prototype._ticks = null;
rg.svg.SvgScaleRule.prototype._range = null;
rg.svg.SvgScaleRule.prototype._scale = null;
rg.svg.SvgScaleRule.prototype._key = null;
rg.svg.SvgScaleRule.prototype._length = null;
rg.svg.SvgScaleRule.prototype.translateX = function(d,i) {
	$s.push("rg.svg.SvgScaleRule::translateX");
	var $spos = $s.length;
	var $tmp = "translate(" + this._scale(d,i) + ",0)";
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgScaleRule.prototype.translateY = function(d,i) {
	$s.push("rg.svg.SvgScaleRule::translateY");
	var $spos = $s.length;
	var $tmp = "translate(0," + this._scale(d,i) + ")";
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgScaleRule.prototype.redraw = function() {
	$s.push("rg.svg.SvgScaleRule::redraw");
	var $spos = $s.length;
	this._range(0,this._maxRange());
	var g = this.svg.selectAll("g." + this._axis).data(this._ticks(),this._key).update().attr("transform").stringf(this._t);
	g.selectAll("line.rule").attr(this._oaxis + "1")["float"](0).attr(this._oaxis + "2")["float"](this._length());
	g.enter().append("svg:g").attr("class").string(this._axis).attr("transform").stringf(this._t).append("svg:line").attr("class").string("rule").attr(this._oaxis + "1")["float"](0).attr(this._oaxis + "2")["float"](this._length());
	g.exit().remove();
	$s.pop();
}
rg.svg.SvgScaleRule.prototype.getRange = function() {
	$s.push("rg.svg.SvgScaleRule::getRange");
	var $spos = $s.length;
	var $tmp = this._range;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgScaleRule.prototype.range = function(f) {
	$s.push("rg.svg.SvgScaleRule::range");
	var $spos = $s.length;
	this._range = f;
	$s.pop();
	return this;
	$s.pop();
}
rg.svg.SvgScaleRule.prototype.getScale = function() {
	$s.push("rg.svg.SvgScaleRule::getScale");
	var $spos = $s.length;
	var $tmp = this._scale;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgScaleRule.prototype.scale = function(f) {
	$s.push("rg.svg.SvgScaleRule::scale");
	var $spos = $s.length;
	this._scale = f;
	$s.pop();
	return this;
	$s.pop();
}
rg.svg.SvgScaleRule.prototype.getTicks = function() {
	$s.push("rg.svg.SvgScaleRule::getTicks");
	var $spos = $s.length;
	var $tmp = this._ticks;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgScaleRule.prototype.ticks = function(f) {
	$s.push("rg.svg.SvgScaleRule::ticks");
	var $spos = $s.length;
	this._ticks = f;
	$s.pop();
	return this;
	$s.pop();
}
rg.svg.SvgScaleRule.prototype.getKey = function() {
	$s.push("rg.svg.SvgScaleRule::getKey");
	var $spos = $s.length;
	var $tmp = this._key;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgScaleRule.prototype.key = function(f) {
	$s.push("rg.svg.SvgScaleRule::key");
	var $spos = $s.length;
	this._key = f;
	$s.pop();
	return this;
	$s.pop();
}
rg.svg.SvgScaleRule.prototype.getOrientation = function() {
	$s.push("rg.svg.SvgScaleRule::getOrientation");
	var $spos = $s.length;
	var $tmp = this._orientation;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgScaleRule.prototype.orientation = function(o) {
	$s.push("rg.svg.SvgScaleRule::orientation");
	var $spos = $s.length;
	if(Type.enumEq(o,this._orientation)) {
		$s.pop();
		return this;
	}
	var panel = this.panel;
	switch( (this._orientation = o)[1] ) {
	case 0:
		this._axis = "x";
		this._oaxis = "y";
		this._t = $closure(this,"translateX");
		this._maxRange = function() {
			$s.push("rg.svg.SvgScaleRule::orientation@115");
			var $spos = $s.length;
			var $tmp = panel.frame.width;
			$s.pop();
			return $tmp;
			$s.pop();
		};
		this._length = function() {
			$s.push("rg.svg.SvgScaleRule::orientation@116");
			var $spos = $s.length;
			var $tmp = panel.frame.height;
			$s.pop();
			return $tmp;
			$s.pop();
		};
		break;
	case 1:
		this._axis = "y";
		this._oaxis = "x";
		this._t = $closure(this,"translateY");
		this._maxRange = function() {
			$s.push("rg.svg.SvgScaleRule::orientation@121");
			var $spos = $s.length;
			var $tmp = panel.frame.height;
			$s.pop();
			return $tmp;
			$s.pop();
		};
		this._length = function() {
			$s.push("rg.svg.SvgScaleRule::orientation@122");
			var $spos = $s.length;
			var $tmp = panel.frame.width;
			$s.pop();
			return $tmp;
			$s.pop();
		};
		break;
	}
	$s.pop();
	return this;
	$s.pop();
}
rg.svg.SvgScaleRule.prototype.__class__ = rg.svg.SvgScaleRule;
rg.svg.SvgSpace = function(width,height,parentSelection) {
	if( width === $_ ) return;
	$s.push("rg.svg.SvgSpace::new");
	var $spos = $s.length;
	this.svg = parentSelection.append("svg:svg");
	this._stackFrame = new rg.layout.StackFrame(rg.layout.Disposition.Fill());
	this.workspace = new rg.svg._SvgSpace.SvgSpaceContainer(this.svg,this._stackFrame);
	this.resize(width,height);
	$s.pop();
}
rg.svg.SvgSpace.__name__ = ["rg","svg","SvgSpace"];
rg.svg.SvgSpace.prototype.svg = null;
rg.svg.SvgSpace.prototype.workspace = null;
rg.svg.SvgSpace.prototype._stackFrame = null;
rg.svg.SvgSpace.prototype.resize = function(width,height) {
	$s.push("rg.svg.SvgSpace::resize");
	var $spos = $s.length;
	if(this._stackFrame.width == width && this._stackFrame.height == height) {
		$s.pop();
		return;
	}
	this.svg.attr("width")["float"](width).attr("height")["float"](height);
	var sf = this._stackFrame;
	sf.set(0,0,width,height);
	$s.pop();
}
rg.svg.SvgSpace.prototype.redraw = function() {
	$s.push("rg.svg.SvgSpace::redraw");
	var $spos = $s.length;
	this.workspace.redraw();
	$s.pop();
}
rg.svg.SvgSpace.prototype.__class__ = rg.svg.SvgSpace;
rg.svg.SvgPanel = function(frame) {
	if( frame === $_ ) return;
	$s.push("rg.svg.SvgPanel::new");
	var $spos = $s.length;
	this.frame = frame;
	frame.change = $closure(this,"reframe");
	this._layers = [];
	$s.pop();
}
rg.svg.SvgPanel.__name__ = ["rg","svg","SvgPanel"];
rg.svg.SvgPanel.prototype.frame = null;
rg.svg.SvgPanel.prototype.svg = null;
rg.svg.SvgPanel.prototype.parent = null;
rg.svg.SvgPanel.prototype._layers = null;
rg.svg.SvgPanel.prototype.addLayer = function(layer) {
	$s.push("rg.svg.SvgPanel::addLayer");
	var $spos = $s.length;
	this._layers.remove(layer);
	this._layers.push(layer);
	$s.pop();
}
rg.svg.SvgPanel.prototype.removeLayer = function(layer) {
	$s.push("rg.svg.SvgPanel::removeLayer");
	var $spos = $s.length;
	this._layers.remove(layer);
	$s.pop();
}
rg.svg.SvgPanel.prototype.setParent = function(v) {
	$s.push("rg.svg.SvgPanel::setParent");
	var $spos = $s.length;
	if(null != this.svg) this.svg.remove();
	if(null == v) {
		$s.pop();
		return;
	}
	this.init(v.svg);
	$s.pop();
}
rg.svg.SvgPanel.prototype.init = function(container) {
	$s.push("rg.svg.SvgPanel::init");
	var $spos = $s.length;
	this.svg = container.append("svg:g").attr("class").string("panel").attr("transform").string("translate(0,0)");
	this.svg.append("svg:rect").attr("class").string("panel-frame").attr("width")["float"](this.frame.width).attr("height")["float"](this.frame.height);
	$s.pop();
}
rg.svg.SvgPanel.prototype.redraw = function() {
	$s.push("rg.svg.SvgPanel::redraw");
	var $spos = $s.length;
	this._layers.forEach(function(l,i) {
		$s.push("rg.svg.SvgPanel::redraw@68");
		var $spos = $s.length;
		l.redraw();
		$s.pop();
	});
	$s.pop();
}
rg.svg.SvgPanel.prototype.reframe = function() {
	$s.push("rg.svg.SvgPanel::reframe");
	var $spos = $s.length;
	this.svg.attr("transform").string("translate(" + this.frame.x + "," + this.frame.y + ")").select(".panel-frame").attr("width")["float"](this.frame.width).attr("height")["float"](this.frame.height);
	this.redraw();
	$s.pop();
}
rg.svg.SvgPanel.prototype.__class__ = rg.svg.SvgPanel;
rg.svg.SvgContainer = function(frame,orientation) {
	if( frame === $_ ) return;
	$s.push("rg.svg.SvgContainer::new");
	var $spos = $s.length;
	this.stack = new rg.layout.Stack(frame.width,frame.height,orientation);
	this.panels = [];
	rg.svg.SvgPanel.call(this,frame);
	$s.pop();
}
rg.svg.SvgContainer.__name__ = ["rg","svg","SvgContainer"];
rg.svg.SvgContainer.__super__ = rg.svg.SvgPanel;
for(var k in rg.svg.SvgPanel.prototype ) rg.svg.SvgContainer.prototype[k] = rg.svg.SvgPanel.prototype[k];
rg.svg.SvgContainer.prototype.stack = null;
rg.svg.SvgContainer.prototype.panels = null;
rg.svg.SvgContainer.prototype.addPanel = function(panel) {
	$s.push("rg.svg.SvgContainer::addPanel");
	var $spos = $s.length;
	var $tmp = this.addPanels([panel]);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgContainer.prototype.addPanels = function(it) {
	$s.push("rg.svg.SvgContainer::addPanels");
	var $spos = $s.length;
	var frames = [];
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var panel = $it0.next();
		if(null == panel) continue;
		if(null != panel.parent) panel.parent.removePanel(panel);
		this.panels.push(panel);
		var f = panel;
		f.setParent(this);
		frames.push((function($this) {
			var $r;
			var $t = panel.frame;
			if(Std["is"]($t,rg.layout.StackFrame)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)));
	}
	this.stack.addMany(frames);
	$s.pop();
	return this;
	$s.pop();
}
rg.svg.SvgContainer.prototype.removePanel = function(panel) {
	$s.push("rg.svg.SvgContainer::removePanel");
	var $spos = $s.length;
	if(!this.panels.remove(panel)) {
		$s.pop();
		return this;
	}
	this.stack.removeChild((function($this) {
		var $r;
		var $t = panel.frame;
		if(Std["is"]($t,rg.layout.StackFrame)) $t; else throw "Class cast error";
		$r = $t;
		return $r;
	}(this)));
	var f = panel;
	f.setParent(null);
	$s.pop();
	return this;
	$s.pop();
}
rg.svg.SvgContainer.prototype.redraw = function() {
	$s.push("rg.svg.SvgContainer::redraw");
	var $spos = $s.length;
	rg.svg.SvgPanel.prototype.redraw.call(this);
	Iterators.each(this.panels.iterator(),function(v,i) {
		$s.push("rg.svg.SvgContainer::redraw@64");
		var $spos = $s.length;
		v.redraw();
		$s.pop();
	});
	$s.pop();
}
rg.svg.SvgContainer.prototype.reframe = function() {
	$s.push("rg.svg.SvgContainer::reframe");
	var $spos = $s.length;
	rg.svg.SvgPanel.prototype.reframe.call(this);
	this.stack.setSize(this.frame.width,this.frame.height);
	this.stack.reflow();
	this.redraw();
	$s.pop();
}
rg.svg.SvgContainer.prototype.__class__ = rg.svg.SvgContainer;
if(!rg.svg._SvgSpace) rg.svg._SvgSpace = {}
rg.svg._SvgSpace.SvgSpaceContainer = function(svgcontainer,frame) {
	if( svgcontainer === $_ ) return;
	$s.push("rg.svg._SvgSpace.SvgSpaceContainer::new");
	var $spos = $s.length;
	rg.svg.SvgContainer.call(this,frame,rg.layout.Orientation.Vertical);
	this.init(svgcontainer);
	this.reframe();
	$s.pop();
}
rg.svg._SvgSpace.SvgSpaceContainer.__name__ = ["rg","svg","_SvgSpace","SvgSpaceContainer"];
rg.svg._SvgSpace.SvgSpaceContainer.__super__ = rg.svg.SvgContainer;
for(var k in rg.svg.SvgContainer.prototype ) rg.svg._SvgSpace.SvgSpaceContainer.prototype[k] = rg.svg.SvgContainer.prototype[k];
rg.svg._SvgSpace.SvgSpaceContainer.prototype.__class__ = rg.svg._SvgSpace.SvgSpaceContainer;
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
rg.layout.Stack = function(width,height,orientation) {
	if( width === $_ ) return;
	$s.push("rg.layout.Stack::new");
	var $spos = $s.length;
	this.orientation = null == orientation?rg.layout.Orientation.Vertical:orientation;
	this.children = [];
	this.width = width;
	this.height = height;
	$s.pop();
}
rg.layout.Stack.__name__ = ["rg","layout","Stack"];
rg.layout.Stack.prototype.children = null;
rg.layout.Stack.prototype.width = null;
rg.layout.Stack.prototype.height = null;
rg.layout.Stack.prototype.orientation = null;
rg.layout.Stack.prototype.moreSpaceRequired = function(size) {
	$s.push("rg.layout.Stack::moreSpaceRequired");
	var $spos = $s.length;
	$s.pop();
}
rg.layout.Stack.prototype.addChild = function(child) {
	$s.push("rg.layout.Stack::addChild");
	var $spos = $s.length;
	this.children.push(child);
	var f = child;
	f.setParent(this);
	this.reflow();
	$s.pop();
	return this;
	$s.pop();
}
rg.layout.Stack.prototype.addMany = function(it) {
	$s.push("rg.layout.Stack::addMany");
	var $spos = $s.length;
	var added = false;
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var child = $it0.next();
		added = true;
		this.children.push(child);
		var f = child;
		f.setParent(this);
	}
	if(added) this.reflow();
	$s.pop();
	return this;
	$s.pop();
}
rg.layout.Stack.prototype.removeChild = function(child) {
	$s.push("rg.layout.Stack::removeChild");
	var $spos = $s.length;
	if(!this.children.remove(child)) {
		$s.pop();
		return false;
	}
	var f = child;
	f.setParent(null);
	this.reflow();
	$s.pop();
	return true;
	$s.pop();
}
rg.layout.Stack.prototype.iterator = function() {
	$s.push("rg.layout.Stack::iterator");
	var $spos = $s.length;
	var $tmp = this.children.iterator();
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.layout.Stack.prototype.reflow = function() {
	$s.push("rg.layout.Stack::reflow");
	var $spos = $s.length;
	var available = (function($this) {
		var $r;
		switch( ($this.orientation)[1] ) {
		case 0:
			$r = $this.height;
			break;
		case 1:
			$r = $this.width;
			break;
		}
		return $r;
	}(this));
	var required = 0, values = [], variables = [], i = 0, variablespace = 0;
	var _g = 0, _g1 = this.children;
	while(_g < _g1.length) {
		var child = _g1[_g];
		++_g;
		var $e = (child.disposition);
		switch( $e[1] ) {
		case 0:
			var size = $e[2];
			required += size;
			values.push(size);
			break;
		case 1:
			var max = $e[4], min = $e[3], percent = $e[2];
			var size = Math.round(percent / 100 * available);
			if(null != min && size < min) size = min;
			if(null != max && size > max) size = max;
			required += size;
			values.push(size);
			break;
		case 2:
			var max = $e[3], min = $e[2];
			if(null == min) min = 0;
			if(null == max) max = available;
			required += min;
			variablespace += variables[i] = max - min;
			values.push(min);
			break;
		case 3:
			var h = $e[5], w = $e[4], y = $e[3], x = $e[2];
			values.push(0);
			break;
		}
		i++;
	}
	available -= required;
	if(available > 0) {
		i = 0;
		var _g = 0, _g1 = this.children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			switch( (child.disposition)[1] ) {
			case 2:
				var size = Math.round(variables[i] / variablespace * available);
				values[i] += size;
				break;
			default:
			}
			i++;
		}
	}
	i = 0;
	var sizeable;
	var pos = 0;
	switch( (this.orientation)[1] ) {
	case 0:
		var _g = 0, _g1 = this.children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			sizeable = child;
			var $e = (child.disposition);
			switch( $e[1] ) {
			case 3:
				var h = $e[5], w = $e[4], y = $e[3], x = $e[2];
				sizeable.set(x,y,w,h);
				break;
			default:
				sizeable.set(0,pos,this.width,values[i]);
			}
			pos += values[i++];
		}
		break;
	case 1:
		var _g = 0, _g1 = this.children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			sizeable = child;
			var $e = (child.disposition);
			switch( $e[1] ) {
			case 3:
				var h = $e[5], w = $e[4], y = $e[3], x = $e[2];
				sizeable.set(x,y,w,h);
				break;
			default:
				sizeable.set(pos,0,values[i],this.height);
			}
			pos += values[i++];
		}
		break;
	}
	if(available < 0) this.moreSpaceRequired(required);
	$s.pop();
}
rg.layout.Stack.prototype.setSize = function(width,height) {
	$s.push("rg.layout.Stack::setSize");
	var $spos = $s.length;
	if(this.width == width && this.height == height) {
		$s.pop();
		return this;
	}
	this.width = width;
	this.height = height;
	this.reflow();
	$s.pop();
	return this;
	$s.pop();
}
rg.layout.Stack.prototype.toString = function() {
	$s.push("rg.layout.Stack::toString");
	var $spos = $s.length;
	var $tmp = "Stack [width: " + this.width + ", height: " + this.height + ", children: " + this.children.length + "]";
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.layout.Stack.prototype.__class__ = rg.layout.Stack;
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
rg.svg.SvgScaleTick = function(panel,anchor) {
	if( panel === $_ ) return;
	$s.push("rg.svg.SvgScaleTick::new");
	var $spos = $s.length;
	rg.svg.SvgLayer.call(this,panel);
	this._length = rg.svg.SvgScaleTick.defaultTickLength;
	this._padding = rg.svg.SvgScaleTick.defaultTickPadding;
	this.anchor(anchor);
	this.svg.attr("class").string("scale-ticks");
	$s.pop();
}
rg.svg.SvgScaleTick.__name__ = ["rg","svg","SvgScaleTick"];
rg.svg.SvgScaleTick.__super__ = rg.svg.SvgLayer;
for(var k in rg.svg.SvgLayer.prototype ) rg.svg.SvgScaleTick.prototype[k] = rg.svg.SvgLayer.prototype[k];
rg.svg.SvgScaleTick.ofLinear = function(panel,anchor,scale) {
	$s.push("rg.svg.SvgScaleTick::ofLinear");
	var $spos = $s.length;
	var $tmp = new rg.svg.SvgScaleTick(panel,anchor).scale($closure(scale,"scale")).range($closure(scale,"range")).ticks($closure(scale,"ticks")).key($closure(scale,"tickFormat"));
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgScaleTick.prototype._anchor = null;
rg.svg.SvgScaleTick.prototype._padding = null;
rg.svg.SvgScaleTick.prototype._length = null;
rg.svg.SvgScaleTick.prototype._pos = null;
rg.svg.SvgScaleTick.prototype._t = null;
rg.svg.SvgScaleTick.prototype._maxRange = null;
rg.svg.SvgScaleTick.prototype._axis = null;
rg.svg.SvgScaleTick.prototype._oaxis = null;
rg.svg.SvgScaleTick.prototype._ticks = null;
rg.svg.SvgScaleTick.prototype._range = null;
rg.svg.SvgScaleTick.prototype._scale = null;
rg.svg.SvgScaleTick.prototype._key = null;
rg.svg.SvgScaleTick.prototype.translateX = function(d,i) {
	$s.push("rg.svg.SvgScaleTick::translateX");
	var $spos = $s.length;
	var $tmp = "translate(" + this._scale(d,i) + ",0)";
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgScaleTick.prototype.translateY = function(d,i) {
	$s.push("rg.svg.SvgScaleTick::translateY");
	var $spos = $s.length;
	var $tmp = "translate(0," + this._scale(d,i) + ")";
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgScaleTick.prototype.redraw = function() {
	$s.push("rg.svg.SvgScaleTick::redraw");
	var $spos = $s.length;
	this._range(0,this._maxRange());
	var g = this.svg.selectAll("g." + this._axis).data(this._ticks(),this._key).update().attr("transform").stringf(this._t);
	g.selectAll("line.tick").attr(this._oaxis + "1")["float"](this._pos()).attr(this._oaxis + "2")["float"](this._pos() + this._length);
	g.enter().append("svg:g").attr("class").string(this._axis).attr("transform").stringf(this._t).append("svg:line").attr("class").string("tick").attr(this._oaxis + "1")["float"](this._pos()).attr(this._oaxis + "2")["float"](this._pos() + this._length);
	g.exit().remove();
	$s.pop();
}
rg.svg.SvgScaleTick.prototype.getRange = function() {
	$s.push("rg.svg.SvgScaleTick::getRange");
	var $spos = $s.length;
	var $tmp = this._range;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgScaleTick.prototype.range = function(f) {
	$s.push("rg.svg.SvgScaleTick::range");
	var $spos = $s.length;
	this._range = f;
	$s.pop();
	return this;
	$s.pop();
}
rg.svg.SvgScaleTick.prototype.getScale = function() {
	$s.push("rg.svg.SvgScaleTick::getScale");
	var $spos = $s.length;
	var $tmp = this._scale;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgScaleTick.prototype.scale = function(f) {
	$s.push("rg.svg.SvgScaleTick::scale");
	var $spos = $s.length;
	this._scale = f;
	$s.pop();
	return this;
	$s.pop();
}
rg.svg.SvgScaleTick.prototype.getTicks = function() {
	$s.push("rg.svg.SvgScaleTick::getTicks");
	var $spos = $s.length;
	var $tmp = this._ticks;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgScaleTick.prototype.ticks = function(f) {
	$s.push("rg.svg.SvgScaleTick::ticks");
	var $spos = $s.length;
	this._ticks = f;
	$s.pop();
	return this;
	$s.pop();
}
rg.svg.SvgScaleTick.prototype.getKey = function() {
	$s.push("rg.svg.SvgScaleTick::getKey");
	var $spos = $s.length;
	var $tmp = this._key;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgScaleTick.prototype.key = function(f) {
	$s.push("rg.svg.SvgScaleTick::key");
	var $spos = $s.length;
	this._key = f;
	$s.pop();
	return this;
	$s.pop();
}
rg.svg.SvgScaleTick.prototype.getAnchor = function() {
	$s.push("rg.svg.SvgScaleTick::getAnchor");
	var $spos = $s.length;
	var $tmp = this._anchor;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgScaleTick.prototype.anchor = function(o) {
	$s.push("rg.svg.SvgScaleTick::anchor");
	var $spos = $s.length;
	if(Type.enumEq(o,this._anchor)) {
		$s.pop();
		return this;
	}
	var panel = this.panel;
	switch( (this._anchor = o)[1] ) {
	case 0:
	case 1:
		this._axis = "x";
		this._oaxis = "y";
		this._t = $closure(this,"translateX");
		this._maxRange = function() {
			$s.push("rg.svg.SvgScaleTick::anchor@120");
			var $spos = $s.length;
			var $tmp = panel.frame.width;
			$s.pop();
			return $tmp;
			$s.pop();
		};
		break;
	case 2:
	case 3:
		this._axis = "y";
		this._oaxis = "x";
		this._t = $closure(this,"translateY");
		this._maxRange = function() {
			$s.push("rg.svg.SvgScaleTick::anchor@125");
			var $spos = $s.length;
			var $tmp = panel.frame.height;
			$s.pop();
			return $tmp;
			$s.pop();
		};
		break;
	}
	this.adjustPositionFunction();
	$s.pop();
	return this;
	$s.pop();
}
rg.svg.SvgScaleTick.prototype.getLength = function() {
	$s.push("rg.svg.SvgScaleTick::getLength");
	var $spos = $s.length;
	var $tmp = this._length;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgScaleTick.prototype.length = function(v) {
	$s.push("rg.svg.SvgScaleTick::length");
	var $spos = $s.length;
	this._length = v;
	this.adjustPositionFunction();
	$s.pop();
	return this;
	$s.pop();
}
rg.svg.SvgScaleTick.prototype.getPadding = function() {
	$s.push("rg.svg.SvgScaleTick::getPadding");
	var $spos = $s.length;
	var $tmp = this._padding;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgScaleTick.prototype.padding = function(v) {
	$s.push("rg.svg.SvgScaleTick::padding");
	var $spos = $s.length;
	this._padding = v;
	this.adjustPositionFunction();
	$s.pop();
	return this;
	$s.pop();
}
rg.svg.SvgScaleTick.prototype.adjustPositionFunction = function() {
	$s.push("rg.svg.SvgScaleTick::adjustPositionFunction");
	var $spos = $s.length;
	var me = this;
	switch( (this._anchor)[1] ) {
	case 0:
	case 2:
		this._pos = function() {
			$s.push("rg.svg.SvgScaleTick::adjustPositionFunction@153");
			var $spos = $s.length;
			var $tmp = me._padding;
			$s.pop();
			return $tmp;
			$s.pop();
		};
		break;
	case 1:
		this._pos = function() {
			$s.push("rg.svg.SvgScaleTick::adjustPositionFunction@155");
			var $spos = $s.length;
			var $tmp = me.panel.frame.height - me._length - me._padding;
			$s.pop();
			return $tmp;
			$s.pop();
		};
		break;
	case 3:
		this._pos = function() {
			$s.push("rg.svg.SvgScaleTick::adjustPositionFunction@157");
			var $spos = $s.length;
			var $tmp = me.panel.frame.width - me._length - me._padding;
			$s.pop();
			return $tmp;
			$s.pop();
		};
		break;
	}
	$s.pop();
}
rg.svg.SvgScaleTick.prototype.__class__ = rg.svg.SvgScaleTick;
rg.ie.HeaderProperty = function(container,path,t) {
	if( container === $_ ) return;
	$s.push("rg.ie.HeaderProperty::new");
	var $spos = $s.length;
	this.path = path;
	this._t = t;
	this.init(container);
	$s.pop();
}
rg.ie.HeaderProperty.__name__ = ["rg","ie","HeaderProperty"];
rg.ie.HeaderProperty._key = function(d,i) {
	$s.push("rg.ie.HeaderProperty::_key");
	var $spos = $s.length;
	$s.pop();
	return d;
	$s.pop();
}
rg.ie.HeaderProperty.prototype.path = null;
rg.ie.HeaderProperty.prototype.event = null;
rg.ie.HeaderProperty.prototype.properties = null;
rg.ie.HeaderProperty.prototype.property = null;
rg.ie.HeaderProperty.prototype.value = null;
rg.ie.HeaderProperty.prototype.values = null;
rg.ie.HeaderProperty.prototype._block = null;
rg.ie.HeaderProperty.prototype._container = null;
rg.ie.HeaderProperty.prototype._t = null;
rg.ie.HeaderProperty.prototype.propertiesChange = function() {
	$s.push("rg.ie.HeaderProperty::propertiesChange");
	var $spos = $s.length;
	$s.pop();
}
rg.ie.HeaderProperty.prototype.propertyChange = function() {
	$s.push("rg.ie.HeaderProperty::propertyChange");
	var $spos = $s.length;
	$s.pop();
}
rg.ie.HeaderProperty.prototype.init = function(container) {
	$s.push("rg.ie.HeaderProperty::init");
	var $spos = $s.length;
	this._block = container.append("div").attr("class").string("property hidden");
	var dl = this._block.append("dl");
	dl.append("dt").html().string(this._t._("properties"));
	this._container = dl.append("dd").append("ul");
	this.setPath(this.path);
	$s.pop();
}
rg.ie.HeaderProperty.prototype.setPath = function(path) {
	$s.push("rg.ie.HeaderProperty::setPath");
	var $spos = $s.length;
	this.path = path;
	$s.pop();
}
rg.ie.HeaderProperty.prototype.setEvent = function(event) {
	$s.push("rg.ie.HeaderProperty::setEvent");
	var $spos = $s.length;
	this.event = event;
	this.values = new Hash();
	if(null == event) this._updateProperty([]); else rg.js.ReportGrid.children(this.path,{ property : event},$closure(this,"_updateProperty"));
	$s.pop();
}
rg.ie.HeaderProperty.prototype._updateProperty = function(p) {
	$s.push("rg.ie.HeaderProperty::_updateProperty");
	var $spos = $s.length;
	var t = this._t;
	this.properties = p.map(function(d,i) {
		$s.push("rg.ie.HeaderProperty::_updateProperty@67");
		var $spos = $s.length;
		var $tmp = Strings.rtrim(Strings.ltrim(d,"."),".");
		$s.pop();
		return $tmp;
		$s.pop();
	});
	if(this.properties.length == 0) this._block.classed().add("hidden"); else this._block.classed().remove("hidden");
	this.property = null;
	this.propertiesChange();
	this.propertyChange();
	var list = this._container.selectAll("li").data([],rg.ie.HeaderProperty._key);
	list.exit().remove();
	var list1 = this._container.selectAll("li").data(this.properties,rg.ie.HeaderProperty._key);
	var dl = list1.enter().append("li").append("dl");
	dl.append("dt").html().stringf(function(d,i) {
		$s.push("rg.ie.HeaderProperty::_updateProperty@85");
		var $spos = $s.length;
		var $tmp = t._(d);
		$s.pop();
		return $tmp;
		$s.pop();
	}).on("click",$closure(this,"_clickProperty"));
	dl.eachNode($closure(this,"_eachPropertyValue"));
	list1.exit().remove();
	$s.pop();
}
rg.ie.HeaderProperty.prototype._clickProperty = function(d,i) {
	$s.push("rg.ie.HeaderProperty::_clickProperty");
	var $spos = $s.length;
	this.value = null;
	this.property = d;
	this.resetLegend();
	this.propertyChange();
	$s.pop();
}
rg.ie.HeaderProperty.prototype._clickValue = function(p,d,i) {
	$s.push("rg.ie.HeaderProperty::_clickValue");
	var $spos = $s.length;
	this.property = p;
	this.value = d;
	this.resetLegend();
	this.propertyChange();
	$s.pop();
}
rg.ie.HeaderProperty.prototype.resetLegend = function() {
	$s.push("rg.ie.HeaderProperty::resetLegend");
	var $spos = $s.length;
	this._container.selectAll(".layer").classed().add("hidden");
	if(null == this.property || null != this.value) {
		$s.pop();
		return;
	}
	var index = this.properties.indexOf(this.property);
	this._container.selectAll("dl").eachNode(function(n,i) {
		$s.push("rg.ie.HeaderProperty::resetLegend@114");
		var $spos = $s.length;
		if(i != index) {
			$s.pop();
			return;
		}
		var sel = thx.js.Dom.selectNode(n);
		sel.selectAll(".layer").classed().remove("hidden");
		$s.pop();
	});
	$s.pop();
}
rg.ie.HeaderProperty.prototype._eachPropertyValue = function(n,i) {
	$s.push("rg.ie.HeaderProperty::_eachPropertyValue");
	var $spos = $s.length;
	rg.js.ReportGrid.propertyValues(this.path,{ property : this.event + "." + Reflect.field(n,"__data__")},(function(f,a1) {
		$s.push("rg.ie.HeaderProperty::_eachPropertyValue@124");
		var $spos = $s.length;
		var $tmp = function(a2) {
			$s.push("rg.ie.HeaderProperty::_eachPropertyValue@124@124");
			var $spos = $s.length;
			var $tmp = f(a1,a2);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
		$s.pop();
	})($closure(this,"_propertyValue"),n));
	$s.pop();
}
rg.ie.HeaderProperty.prototype._propertyValue = function(n,values) {
	$s.push("rg.ie.HeaderProperty::_propertyValue");
	var $spos = $s.length;
	var t = this._t;
	var sel = thx.js.Dom.selectNode(n);
	this.values.set(Reflect.field(n,"__data__"),values);
	if(values.length == 0) {
		$s.pop();
		return;
	}
	if(Std["is"](values[0],Float)) {
		var min = Arrays.min(values);
		var max = Arrays.max(values);
		if(min == max) sel.append("dd").html()["float"](min); else sel.append("dd").html().string(Strings.format(this._t._("between {0} and {1}"),[min,max]));
	} else sel.selectAll("dd").data(values).enter().append("dd").html().stringf(function(d,i) {
		$s.push("rg.ie.HeaderProperty::_propertyValue@146");
		var $spos = $s.length;
		var $tmp = "<span class=\"hidden layer layer-" + i + "\"> </span> " + t._(d);
		$s.pop();
		return $tmp;
		$s.pop();
	}).on("click",(function(f,a1) {
		$s.push("rg.ie.HeaderProperty::_propertyValue@147");
		var $spos = $s.length;
		var $tmp = function(a2,a3) {
			$s.push("rg.ie.HeaderProperty::_propertyValue@147@147");
			var $spos = $s.length;
			var $tmp = f(a1,a2,a3);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
		$s.pop();
	})($closure(this,"_clickValue"),Reflect.field(n,"__data__"))).eachNode((function(f,a1) {
		$s.push("rg.ie.HeaderProperty::_propertyValue@148");
		var $spos = $s.length;
		var $tmp = function(a2,a3) {
			$s.push("rg.ie.HeaderProperty::_propertyValue@148@148");
			var $spos = $s.length;
			var $tmp = f(a1,a2,a3);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
		$s.pop();
	})($closure(this,"_eachPropertyCount"),Reflect.field(n,"__data__")));
	$s.pop();
}
rg.ie.HeaderProperty.prototype._eachPropertyCount = function(prop,n,i) {
	$s.push("rg.ie.HeaderProperty::_eachPropertyCount");
	var $spos = $s.length;
	rg.js.ReportGrid.propertyValueCount(this.path,{ property : this.event + "." + prop, value : Reflect.field(n,"__data__")},(function(f,a1) {
		$s.push("rg.ie.HeaderProperty::_eachPropertyCount@155");
		var $spos = $s.length;
		var $tmp = function(a2) {
			$s.push("rg.ie.HeaderProperty::_eachPropertyCount@155@155");
			var $spos = $s.length;
			var $tmp = f(a1,a2);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
		$s.pop();
	})($closure(this,"_propertyCount"),n));
	$s.pop();
}
rg.ie.HeaderProperty.prototype._propertyCount = function(n,count) {
	$s.push("rg.ie.HeaderProperty::_propertyCount");
	var $spos = $s.length;
	rg.ie.SelectionHelper.appendCount(thx.js.Dom.selectNode(n),count);
	$s.pop();
}
rg.ie.HeaderProperty.prototype.__class__ = rg.ie.HeaderProperty;
rg.ie.SelectionHelper = function() { }
rg.ie.SelectionHelper.__name__ = ["rg","ie","SelectionHelper"];
rg.ie.SelectionHelper.appendCount = function(sel,count) {
	$s.push("rg.ie.SelectionHelper::appendCount");
	var $spos = $s.length;
	sel.html().string(sel.html().get() + " <spann class=\"count\">(" + Ints.format(count) + ")</span>");
	$s.pop();
}
rg.ie.SelectionHelper.prototype.__class__ = rg.ie.SelectionHelper;
thx.translation.ITranslation = function() { }
thx.translation.ITranslation.__name__ = ["thx","translation","ITranslation"];
thx.translation.ITranslation.prototype.domain = null;
thx.translation.ITranslation.prototype._ = null;
thx.translation.ITranslation.prototype.__ = null;
thx.translation.ITranslation.prototype.__class__ = thx.translation.ITranslation;
thx.translation.EmptyTranslation = function(p) {
	$s.push("thx.translation.EmptyTranslation::new");
	var $spos = $s.length;
	$s.pop();
}
thx.translation.EmptyTranslation.__name__ = ["thx","translation","EmptyTranslation"];
thx.translation.EmptyTranslation.prototype.domain = null;
thx.translation.EmptyTranslation.prototype._domain = null;
thx.translation.EmptyTranslation.prototype._ = function(id,domain) {
	$s.push("thx.translation.EmptyTranslation::_");
	var $spos = $s.length;
	$s.pop();
	return id;
	$s.pop();
}
thx.translation.EmptyTranslation.prototype.__ = function(ids,idp,quantifier,domain) {
	$s.push("thx.translation.EmptyTranslation::__");
	var $spos = $s.length;
	if(quantifier == 1) {
		$s.pop();
		return ids;
	} else {
		$s.pop();
		return idp;
	}
	$s.pop();
}
thx.translation.EmptyTranslation.prototype.getDomain = function() {
	$s.push("thx.translation.EmptyTranslation::getDomain");
	var $spos = $s.length;
	$s.pop();
	return null;
	$s.pop();
}
thx.translation.EmptyTranslation.prototype.setDomain = function(v) {
	$s.push("thx.translation.EmptyTranslation::setDomain");
	var $spos = $s.length;
	$s.pop();
	return v;
	$s.pop();
}
thx.translation.EmptyTranslation.prototype.__class__ = thx.translation.EmptyTranslation;
thx.translation.EmptyTranslation.__interfaces__ = [thx.translation.ITranslation];
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
rg.svg.SvgBarChart = function(panel,data,xscale,yscale) {
	if( panel === $_ ) return;
	$s.push("rg.svg.SvgBarChart::new");
	var $spos = $s.length;
	this._cpid = "barchart_clip_path_" + ++rg.svg.SvgBarChart._pathid;
	rg.svg.SvgLayer.call(this,panel);
	this._data = data;
	this._scalex = xscale;
	this._scaley = yscale;
	this._barwidth = rg.svg.SvgBarChart.defaultBarWidth;
	$s.pop();
}
rg.svg.SvgBarChart.__name__ = ["rg","svg","SvgBarChart"];
rg.svg.SvgBarChart.__super__ = rg.svg.SvgLayer;
for(var k in rg.svg.SvgLayer.prototype ) rg.svg.SvgBarChart.prototype[k] = rg.svg.SvgLayer.prototype[k];
rg.svg.SvgBarChart.prototype._data = null;
rg.svg.SvgBarChart.prototype._prepdata = null;
rg.svg.SvgBarChart.prototype._scalex = null;
rg.svg.SvgBarChart.prototype._scaley = null;
rg.svg.SvgBarChart.prototype._cpid = null;
rg.svg.SvgBarChart.prototype._stacked = null;
rg.svg.SvgBarChart.prototype._curstacked = null;
rg.svg.SvgBarChart.prototype._barwidth = null;
rg.svg.SvgBarChart.prototype.destroy = function() {
	$s.push("rg.svg.SvgBarChart::destroy");
	var $spos = $s.length;
	$s.pop();
}
rg.svg.SvgBarChart.prototype.init = function() {
	$s.push("rg.svg.SvgBarChart::init");
	var $spos = $s.length;
	this.svg.append("svg:clipPath").attr("id").string(this._cpid).append("svg:rect").attr("x")["float"](0).attr("y")["float"](0).attr("width")["float"](0).attr("height")["float"](0);
	this.svg.attr("clip-path").string("url(#" + this._cpid + ")");
	$s.pop();
}
rg.svg.SvgBarChart.prototype.getStacked = function() {
	$s.push("rg.svg.SvgBarChart::getStacked");
	var $spos = $s.length;
	var $tmp = this._stacked;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgBarChart.prototype.stacked = function(v) {
	$s.push("rg.svg.SvgBarChart::stacked");
	var $spos = $s.length;
	this._stacked = v;
	$s.pop();
	return this;
	$s.pop();
}
rg.svg.SvgBarChart.prototype.redraw = function() {
	$s.push("rg.svg.SvgBarChart::redraw");
	var $spos = $s.length;
	this._prepareData();
	if(null == this._data || this._data.length == 0 || this._data[0].length == 0) {
		$s.pop();
		return;
	}
	if(null == this._curstacked || this._curstacked == this._stacked) {
		if(this._stacked) this._redrawStacked(); else this._redrawSideBySide();
	} else if(this._stacked) this._transitionStacked(); else this._transitionSideBySide();
	this._curstacked = this._stacked;
	$s.pop();
}
rg.svg.SvgBarChart.prototype.getData = function() {
	$s.push("rg.svg.SvgBarChart::getData");
	var $spos = $s.length;
	var $tmp = this._data;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgBarChart.prototype.data = function(d) {
	$s.push("rg.svg.SvgBarChart::data");
	var $spos = $s.length;
	this._data = d;
	$s.pop();
}
rg.svg.SvgBarChart.prototype._miny = null;
rg.svg.SvgBarChart.prototype._h = null;
rg.svg.SvgBarChart.prototype._w = null;
rg.svg.SvgBarChart.prototype._stepw = null;
rg.svg.SvgBarChart.prototype._px = null;
rg.svg.SvgBarChart.prototype._pnx = null;
rg.svg.SvgBarChart.prototype._n = null;
rg.svg.SvgBarChart.prototype._bnw = null;
rg.svg.SvgBarChart.prototype._k = null;
rg.svg.SvgBarChart.prototype._prepareData = function() {
	$s.push("rg.svg.SvgBarChart::_prepareData");
	var $spos = $s.length;
	if(null == this._data || this._data.length == 0 || this._data[0].length == 0) {
		$s.pop();
		return;
	}
	this._prepdata = this._data.copy();
	this._prepdata.reverse();
	this._n = this._prepdata.length;
	var domy = this._scaley.getDomain();
	var domx = this._scalex.getDomain();
	this._miny = domy[0];
	var minx = Arrays.min(domx);
	if(null == this._prepdata[0][1]) {
		haxe.Log.trace("#########################",{ fileName : "SvgBarChart.hx", lineNumber : 109, className : "rg.svg.SvgBarChart", methodName : "_prepareData"});
		haxe.Log.trace(this._prepdata,{ fileName : "SvgBarChart.hx", lineNumber : 110, className : "rg.svg.SvgBarChart", methodName : "_prepareData"});
	}
	var delta = 0.0;
	if(Std["is"](this._scalex,thx.math.scale.LinearTime)) switch(((function($this) {
		var $r;
		var $t = $this._scalex;
		if(Std["is"]($t,thx.math.scale.LinearTime)) $t; else throw "Class cast error";
		$r = $t;
		return $r;
	}(this))).getGranularity()) {
	case "minute":
		delta = 60000;
		break;
	case "hour":
		delta = 3600000;
		break;
	case "day":
		delta = 86400000;
		break;
	case "week":
		delta = 604800000;
		break;
	case "month":
		delta = 2592000 * 1000;
		break;
	case "year":
		delta = 31536000 * 1000;
		break;
	} else if(null != this._prepdata[0][1]) delta = Math.abs(this._prepdata[0][1].x - this._prepdata[0][0].x); else {
		var d = this._scalex.getDomain();
		delta = d[1] - d[0] / this._scalex.getModulo();
	}
	var stepx = delta + minx;
	this._h = this.panel.frame.height;
	this._w = this.panel.frame.width;
	this._stepw = this._scalex.scale(stepx);
	this._px = this._barwidth * this._stepw;
	this._pnx = -this._px / 2;
	this._bnw = this._stepw * this._barwidth / this._n;
	if(Std["is"](this._scalex,thx.math.scale.LinearTime)) this._k = ((function($this) {
		var $r;
		var $t = $this._scalex;
		if(Std["is"]($t,thx.math.scale.LinearTime)) $t; else throw "Class cast error";
		$r = $t;
		return $r;
	}(this))).getGranularity() + "."; else this._k = ".";
	$s.pop();
}
rg.svg.SvgBarChart.prototype.tx = function(d,_) {
	$s.push("rg.svg.SvgBarChart::tx");
	var $spos = $s.length;
	var $tmp = "translate(" + this._scalex.scale(d.x) + "," + this._scaley.scale(0) + ")";
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgBarChart.prototype.tl = function(d,i) {
	$s.push("rg.svg.SvgBarChart::tl");
	var $spos = $s.length;
	var $tmp = "translate(" + this._stepw / this._n * i + ",0)";
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgBarChart.prototype.ttx = function(d,i) {
	$s.push("rg.svg.SvgBarChart::ttx");
	var $spos = $s.length;
	var $tmp = -this._stepw * this._barwidth / 2 + this._stepw / this._n / 2;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgBarChart.prototype.py0 = function(d,i) {
	$s.push("rg.svg.SvgBarChart::py0");
	var $spos = $s.length;
	var $tmp = this._scaley.scale(d.y + d.y0 + this._miny);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgBarChart.prototype.py0label = function(d,i) {
	$s.push("rg.svg.SvgBarChart::py0label");
	var $spos = $s.length;
	var $tmp = this._scaley.scale(d.y + d.y0 + this._miny) - 4;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgBarChart.prototype.py = function(d,i) {
	$s.push("rg.svg.SvgBarChart::py");
	var $spos = $s.length;
	var $tmp = this._scaley.scale(d.y + this._miny);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgBarChart.prototype.pylabel = function(d,i) {
	$s.push("rg.svg.SvgBarChart::pylabel");
	var $spos = $s.length;
	var $tmp = this._scaley.scale(d.y + this._miny) - 4;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgBarChart.prototype.hb = function(d,i) {
	$s.push("rg.svg.SvgBarChart::hb");
	var $spos = $s.length;
	var $tmp = this._scaley.scale(this._miny - d.y);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgBarChart.prototype._keyLayer = function(_,i) {
	$s.push("rg.svg.SvgBarChart::_keyLayer");
	var $spos = $s.length;
	var $tmp = "" + i;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgBarChart.prototype._keyBar = function(d,i) {
	$s.push("rg.svg.SvgBarChart::_keyBar");
	var $spos = $s.length;
	var $tmp = this._k + d.x;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgBarChart.prototype.labelText = function(d,i) {
	$s.push("rg.svg.SvgBarChart::labelText");
	var $spos = $s.length;
	var $tmp = d.y == 0?"":Floats.format(d.y,"D:0");
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgBarChart.prototype._redrawStacked = function() {
	$s.push("rg.svg.SvgBarChart::_redrawStacked");
	var $spos = $s.length;
	this.svg.select("#" + this._cpid + " rect").attr("width")["float"](this._w).attr("height")["float"](this._h);
	var layers = this.svg.selectAll("g.layer").data(this._prepdata,$closure(this,"_keyLayer"));
	layers.update().attr("transform").string("translate(0,0)");
	layers.enter().append("svg:g").attr("class").stringf(function(d,i) {
		$s.push("rg.svg.SvgBarChart::_redrawStacked@172");
		var $spos = $s.length;
		var $tmp = "layer layer-" + i;
		$s.pop();
		return $tmp;
		$s.pop();
	});
	layers.exit().remove();
	var bars = layers.update().selectAll("g.bar").dataf(function(d,i) {
		$s.push("rg.svg.SvgBarChart::_redrawStacked@178");
		var $spos = $s.length;
		$s.pop();
		return d;
		$s.pop();
	},$closure(this,"_keyBar"));
	bars.update().attr("transform").stringf($closure(this,"tx")).select("rect").transition().attr("x")["float"](this._pnx).attr("y").floatf($closure(this,"py0")).attr("width")["float"](this._px).attr("height").floatf($closure(this,"hb"));
	bars.update().select("text").attr("x")["float"](0).attr("y").floatf($closure(this,"py0label")).text().stringf($closure(this,"labelText"));
	var be = bars.enter().append("svg:g").attr("class").stringf(function(d,i) {
		$s.push("rg.svg.SvgBarChart::_redrawStacked@200");
		var $spos = $s.length;
		var $tmp = "bar bar-" + i;
		$s.pop();
		return $tmp;
		$s.pop();
	}).attr("transform").stringf($closure(this,"tx"));
	be.append("svg:rect").attr("width")["float"](this._px).attr("x")["float"](this._pnx).attr("y").floatf($closure(this,"py0")).attr("height").floatf($closure(this,"hb"));
	be.append("svg:text").attr("text-anchor").string("middle").attr("x")["float"](0).text().stringf($closure(this,"labelText")).attr("y").floatf($closure(this,"py0label"));
	bars.exit().remove();
	$s.pop();
}
rg.svg.SvgBarChart.prototype._transitionStacked = function() {
	$s.push("rg.svg.SvgBarChart::_transitionStacked");
	var $spos = $s.length;
	var layers = this.svg.selectAll("g.layer").data(this._prepdata,$closure(this,"_keyLayer"));
	var bars = layers.update().selectAll("g.bar").dataf(function(d,i) {
		$s.push("rg.svg.SvgBarChart::_transitionStacked@234");
		var $spos = $s.length;
		$s.pop();
		return d;
		$s.pop();
	},$closure(this,"_keyBar"));
	bars.update().select("rect").transition().attr("y").floatf($closure(this,"py0")).end($closure(this,"_transitionEndStack"));
	bars.update().select("text").transition().attr("y").floatf($closure(this,"py0label"));
	$s.pop();
}
rg.svg.SvgBarChart.prototype._transitionEndStack = function(_,i) {
	$s.push("rg.svg.SvgBarChart::_transitionEndStack");
	var $spos = $s.length;
	if(i > 0) {
		$s.pop();
		return;
	}
	var layers = this.svg.selectAll("g.layer").data(this._prepdata,$closure(this,"_keyLayer"));
	layers.update().transition().attr("transform").string("translate(0,0)");
	var bars = layers.update().selectAll("g.bar").dataf(function(d,i1) {
		$s.push("rg.svg.SvgBarChart::_transitionEndStack@255");
		var $spos = $s.length;
		$s.pop();
		return d;
		$s.pop();
	},$closure(this,"_keyBar"));
	bars.update().select("rect").transition().attr("width")["float"](this._px);
	bars.update().select("text").transition().attr("x")["float"](0);
	$s.pop();
}
rg.svg.SvgBarChart.prototype._transitionSideBySide = function() {
	$s.push("rg.svg.SvgBarChart::_transitionSideBySide");
	var $spos = $s.length;
	var layers = this.svg.selectAll("g.layer").data(this._prepdata,$closure(this,"_keyLayer"));
	layers.update().transition().attr("transform").stringf($closure(this,"tl")).end($closure(this,"_transitionEndSideBySide"));
	var bars = layers.update().selectAll("g.bar").dataf(function(d,i) {
		$s.push("rg.svg.SvgBarChart::_transitionSideBySide@271");
		var $spos = $s.length;
		$s.pop();
		return d;
		$s.pop();
	},$closure(this,"_keyBar"));
	bars.update().select("rect").transition().attr("width")["float"](this._bnw);
	bars.update().select("text").transition().attr("x").floatf($closure(this,"ttx"));
	$s.pop();
}
rg.svg.SvgBarChart.prototype._transitionEndSideBySide = function(_,i) {
	$s.push("rg.svg.SvgBarChart::_transitionEndSideBySide");
	var $spos = $s.length;
	if(i > 0) {
		$s.pop();
		return;
	}
	var layers = this.svg.selectAll("g.layer").data(this._prepdata,$closure(this,"_keyLayer"));
	var bars = layers.update().selectAll("g.bar").dataf(function(d,i1) {
		$s.push("rg.svg.SvgBarChart::_transitionEndSideBySide@282");
		var $spos = $s.length;
		$s.pop();
		return d;
		$s.pop();
	},$closure(this,"_keyBar"));
	bars.update().select("rect").transition().attr("y").floatf($closure(this,"py"));
	bars.update().select("text").transition().attr("y").floatf($closure(this,"pylabel"));
	$s.pop();
}
rg.svg.SvgBarChart.prototype._redrawSideBySide = function() {
	$s.push("rg.svg.SvgBarChart::_redrawSideBySide");
	var $spos = $s.length;
	this.svg.select("#" + this._cpid + " rect").attr("width")["float"](this._w).attr("height")["float"](this._h);
	var layers = this.svg.selectAll("g.layer").data(this._prepdata,$closure(this,"_keyLayer"));
	layers.update().attr("transform").stringf($closure(this,"tl"));
	layers.enter().append("svg:g").attr("class").stringf(function(d,i) {
		$s.push("rg.svg.SvgBarChart::_redrawSideBySide@302");
		var $spos = $s.length;
		var $tmp = "layer layer-" + i;
		$s.pop();
		return $tmp;
		$s.pop();
	}).attr("transform").stringf($closure(this,"tl"));
	layers.exit().remove();
	var bars = layers.update().selectAll("g.bar").dataf(function(d,i) {
		$s.push("rg.svg.SvgBarChart::_redrawSideBySide@310");
		var $spos = $s.length;
		$s.pop();
		return d;
		$s.pop();
	},$closure(this,"_keyBar"));
	bars.update().attr("transform").stringf($closure(this,"tx")).select("rect").transition().attr("x")["float"](this._pnx).attr("y").floatf($closure(this,"py")).attr("width")["float"](this._bnw).attr("height").floatf($closure(this,"hb"));
	bars.update().select("text").attr("x").floatf($closure(this,"ttx")).attr("y").floatf($closure(this,"pylabel")).text().stringf($closure(this,"labelText"));
	var be = bars.enter().append("svg:g").attr("class").stringf(function(d,i) {
		$s.push("rg.svg.SvgBarChart::_redrawSideBySide@332");
		var $spos = $s.length;
		var $tmp = "bar bar-" + i;
		$s.pop();
		return $tmp;
		$s.pop();
	}).attr("transform").stringf($closure(this,"tx"));
	be.append("svg:rect").attr("x")["float"](this._pnx).attr("width")["float"](this._bnw).attr("y").floatf($closure(this,"py")).attr("height").floatf($closure(this,"hb"));
	be.append("svg:text").attr("text-anchor").string("middle").attr("x").floatf($closure(this,"ttx")).attr("y")["float"](0).text().stringf($closure(this,"labelText")).attr("y").floatf($closure(this,"pylabel"));
	bars.exit().remove();
	$s.pop();
}
rg.svg.SvgBarChart.prototype.getBarWidth = function() {
	$s.push("rg.svg.SvgBarChart::getBarWidth");
	var $spos = $s.length;
	var $tmp = this._barwidth;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgBarChart.prototype.barWidth = function(v) {
	$s.push("rg.svg.SvgBarChart::barWidth");
	var $spos = $s.length;
	this._barwidth = v;
	$s.pop();
	return this;
	$s.pop();
}
rg.svg.SvgBarChart.prototype.__class__ = rg.svg.SvgBarChart;
rg.svg.SvgSpace3x3 = function(width,height,parentSelection,t,r,b,l) {
	if( width === $_ ) return;
	$s.push("rg.svg.SvgSpace3x3::new");
	var $spos = $s.length;
	if(t == null) t = 50;
	rg.svg.SvgSpace.call(this,width,height,parentSelection);
	if(null == r) r = t;
	if(null == b) b = t;
	if(null == l) l = r;
	this.containers = [];
	this.frames = [];
	this.workspace.addPanels([this.containers[0] = new rg.svg.SvgContainer(this.frames[0] = new rg.layout.StackFrame(rg.layout.Disposition.Fixed(t)),rg.layout.Orientation.Horizontal),this.containers[1] = new rg.svg.SvgContainer(new rg.layout.StackFrame(rg.layout.Disposition.Fill()),rg.layout.Orientation.Horizontal),this.containers[2] = new rg.svg.SvgContainer(this.frames[1] = new rg.layout.StackFrame(rg.layout.Disposition.Fixed(b)),rg.layout.Orientation.Horizontal)]);
	this.containers[0].addPanels([this.topLeft = new rg.svg.SvgPanel(this.frames[2] = new rg.layout.StackFrame(rg.layout.Disposition.Fixed(l))),this.top = new rg.svg.SvgPanel(new rg.layout.StackFrame(rg.layout.Disposition.Fill())),this.topRight = new rg.svg.SvgPanel(this.frames[3] = new rg.layout.StackFrame(rg.layout.Disposition.Fixed(r)))]);
	this.containers[1].addPanels([this.left = new rg.svg.SvgPanel(this.frames[4] = new rg.layout.StackFrame(rg.layout.Disposition.Fixed(l))),this.center = new rg.svg.SvgPanel(new rg.layout.StackFrame(rg.layout.Disposition.Fill())),this.right = new rg.svg.SvgPanel(this.frames[5] = new rg.layout.StackFrame(rg.layout.Disposition.Fixed(r)))]);
	this.containers[2].addPanels([this.bottomLeft = new rg.svg.SvgPanel(this.frames[6] = new rg.layout.StackFrame(rg.layout.Disposition.Fixed(l))),this.bottom = new rg.svg.SvgPanel(new rg.layout.StackFrame(rg.layout.Disposition.Fill())),this.bottomRight = new rg.svg.SvgPanel(this.frames[7] = new rg.layout.StackFrame(rg.layout.Disposition.Fixed(r)))]);
	$s.pop();
}
rg.svg.SvgSpace3x3.__name__ = ["rg","svg","SvgSpace3x3"];
rg.svg.SvgSpace3x3.__super__ = rg.svg.SvgSpace;
for(var k in rg.svg.SvgSpace.prototype ) rg.svg.SvgSpace3x3.prototype[k] = rg.svg.SvgSpace.prototype[k];
rg.svg.SvgSpace3x3.prototype.top = null;
rg.svg.SvgSpace3x3.prototype.topLeft = null;
rg.svg.SvgSpace3x3.prototype.topRight = null;
rg.svg.SvgSpace3x3.prototype.left = null;
rg.svg.SvgSpace3x3.prototype.center = null;
rg.svg.SvgSpace3x3.prototype.right = null;
rg.svg.SvgSpace3x3.prototype.bottomLeft = null;
rg.svg.SvgSpace3x3.prototype.bottom = null;
rg.svg.SvgSpace3x3.prototype.bottomRight = null;
rg.svg.SvgSpace3x3.prototype.containers = null;
rg.svg.SvgSpace3x3.prototype.frames = null;
rg.svg.SvgSpace3x3.prototype.setTop = function(v) {
	$s.push("rg.svg.SvgSpace3x3::setTop");
	var $spos = $s.length;
	if(v < 0) v = 0;
	this.frames[0].setDisposition(rg.layout.Disposition.Fixed(v));
	$s.pop();
	return this;
	$s.pop();
}
rg.svg.SvgSpace3x3.prototype.setBottom = function(v) {
	$s.push("rg.svg.SvgSpace3x3::setBottom");
	var $spos = $s.length;
	if(v < 0) v = 0;
	this.frames[1].setDisposition(rg.layout.Disposition.Fixed(v));
	$s.pop();
	return this;
	$s.pop();
}
rg.svg.SvgSpace3x3.prototype.setLeft = function(v) {
	$s.push("rg.svg.SvgSpace3x3::setLeft");
	var $spos = $s.length;
	if(v < 0) v = 0;
	this.frames[2].setDisposition(rg.layout.Disposition.Fixed(v));
	this.frames[4].setDisposition(rg.layout.Disposition.Fixed(v));
	this.frames[6].setDisposition(rg.layout.Disposition.Fixed(v));
	$s.pop();
	return this;
	$s.pop();
}
rg.svg.SvgSpace3x3.prototype.setRight = function(v) {
	$s.push("rg.svg.SvgSpace3x3::setRight");
	var $spos = $s.length;
	if(v < 0) v = 0;
	this.frames[3].setDisposition(rg.layout.Disposition.Fixed(v));
	this.frames[5].setDisposition(rg.layout.Disposition.Fixed(v));
	this.frames[7].setDisposition(rg.layout.Disposition.Fixed(v));
	$s.pop();
	return this;
	$s.pop();
}
rg.svg.SvgSpace3x3.prototype.__class__ = rg.svg.SvgSpace3x3;
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
Ints.interpolate = function(f,min,max,equation) {
	$s.push("Ints::interpolate");
	var $spos = $s.length;
	if(max == null) max = 100.0;
	if(min == null) min = 0.0;
	if(null == equation) equation = thx.math.Equations.linear;
	var $tmp = Math.round(min + equation(f) * (max - min));
	$s.pop();
	return $tmp;
	$s.pop();
}
Ints.interpolatef = function(min,max,equation) {
	$s.push("Ints::interpolatef");
	var $spos = $s.length;
	if(max == null) max = 1.0;
	if(min == null) min = 0.0;
	if(null == equation) equation = thx.math.Equations.linear;
	var d = max - min;
	var $tmp = function(f) {
		$s.push("Ints::interpolatef@85");
		var $spos = $s.length;
		var $tmp = Math.round(min + equation(f) * d);
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
Ints.canParse = function(s) {
	$s.push("Ints::canParse");
	var $spos = $s.length;
	var $tmp = Ints._reparse.match(s);
	$s.pop();
	return $tmp;
	$s.pop();
}
Ints.parse = function(s) {
	$s.push("Ints::parse");
	var $spos = $s.length;
	if(s.substr(0,1) == "+") s = s.substr(1);
	var $tmp = Std.parseInt(s);
	$s.pop();
	return $tmp;
	$s.pop();
}
Ints.compare = function(a,b) {
	$s.push("Ints::compare");
	var $spos = $s.length;
	var $tmp = a - b;
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
Dynamics.interpolate = function(v,a,b,equation) {
	$s.push("Dynamics::interpolate");
	var $spos = $s.length;
	var $tmp = (Dynamics.interpolatef(a,b,equation))(v);
	$s.pop();
	return $tmp;
	$s.pop();
}
Dynamics.interpolatef = function(a,b,equation) {
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
		var $tmp = Ints.interpolatef(a,b,equation);
		$s.pop();
		return $tmp;
	case 2:
		var $tmp = Floats.interpolatef(a,b,equation);
		$s.pop();
		return $tmp;
	case 3:
		var $tmp = Bools.interpolatef(a,b,equation);
		$s.pop();
		return $tmp;
	case 4:
		var $tmp = Dynamics.interpolatef(a,b,equation);
		$s.pop();
		return $tmp;
	case 6:
		var c = $e[2];
		var name = Type.getClassName(c);
		switch(name) {
		case "String":
			var $tmp = Strings.interpolatef(a,b,equation);
			$s.pop();
			return $tmp;
		case "Date":
			var $tmp = Dates.interpolatef(a,b,equation);
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
Dynamics.toString = function(v) {
	$s.push("Dynamics::toString");
	var $spos = $s.length;
	var $e = (Type["typeof"](v));
	switch( $e[1] ) {
	case 0:
		$s.pop();
		return "null";
	case 1:
		var $tmp = Ints.format(v);
		$s.pop();
		return $tmp;
	case 2:
		var $tmp = Floats.format(v);
		$s.pop();
		return $tmp;
	case 3:
		var $tmp = Bools.format(v);
		$s.pop();
		return $tmp;
	case 4:
		var keys = Reflect.fields(v);
		var result = [];
		var _g = 0;
		while(_g < keys.length) {
			var key = keys[_g];
			++_g;
			result.push(key + " : " + Dynamics.toString(Reflect.field(v,key)));
		}
		var $tmp = "{" + result.join(", ") + "}";
		$s.pop();
		return $tmp;
	case 6:
		var c = $e[2];
		var name = Type.getClassName(c);
		switch(name) {
		case "Array":
			var $tmp = Arrays.toString(v);
			$s.pop();
			return $tmp;
		case "String":
			var s = v;
			if(s.indexOf("\"") < 0) {
				var $tmp = "\"" + s + "\"";
				$s.pop();
				return $tmp;
			} else if(s.indexOf("'") < 0) {
				var $tmp = "'" + s + "'";
				$s.pop();
				return $tmp;
			} else {
				var $tmp = "\"" + StringTools.replace(s,"\"","\\\"") + "\"";
				$s.pop();
				return $tmp;
			}
			break;
		case "Date":
			var $tmp = Dates.format(v);
			$s.pop();
			return $tmp;
		default:
			var $tmp = Std.string(v);
			$s.pop();
			return $tmp;
		}
		break;
	case 7:
		var e = $e[2];
		var $tmp = Enums.toString(v);
		$s.pop();
		return $tmp;
	case 8:
		$s.pop();
		return "<unknown>";
	case 5:
		$s.pop();
		return "<function>";
	}
	$s.pop();
}
Dynamics.prototype.__class__ = Dynamics;
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
thx.color.Cmyk.darker = function(color,t,equation) {
	$s.push("thx.color.Cmyk::darker");
	var $spos = $s.length;
	var v = t * color.black;
	var $tmp = new thx.color.Cmyk(color.cyan,color.magenta,color.yellow,Floats.interpolate(v,0,1,equation));
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.color.Cmyk.interpolate = function(a,b,t,equation) {
	$s.push("thx.color.Cmyk::interpolate");
	var $spos = $s.length;
	var $tmp = new thx.color.Cmyk(Floats.interpolate(t,a.cyan,b.cyan,equation),Floats.interpolate(t,a.magenta,b.magenta,equation),Floats.interpolate(t,a.yellow,b.yellow,equation),Floats.interpolate(t,a.black,b.black,equation));
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
rg.layout.Orientation = { __ename__ : ["rg","layout","Orientation"], __constructs__ : ["Vertical","Horizontal"] }
rg.layout.Orientation.Vertical = ["Vertical",0];
rg.layout.Orientation.Vertical.toString = $estr;
rg.layout.Orientation.Vertical.__enum__ = rg.layout.Orientation;
rg.layout.Orientation.Horizontal = ["Horizontal",1];
rg.layout.Orientation.Horizontal.toString = $estr;
rg.layout.Orientation.Horizontal.__enum__ = rg.layout.Orientation;
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
Iterators.last = function(it) {
	$s.push("Iterators::last");
	var $spos = $s.length;
	var o = null;
	while(it.hasNext()) o = it.next();
	$s.pop();
	return o;
	$s.pop();
}
Iterators.first = function(it) {
	$s.push("Iterators::first");
	var $spos = $s.length;
	var $tmp = it.next();
	$s.pop();
	return $tmp;
	$s.pop();
}
Iterators.order = function(it,f) {
	$s.push("Iterators::order");
	var $spos = $s.length;
	var $tmp = Arrays.order(Iterators.array(it),f);
	$s.pop();
	return $tmp;
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
		$s.push("thx.js.BaseSelection::select@357");
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
		$s.push("thx.js.BaseSelection::selectAll@364");
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
		$s.push("thx.js.BaseSelection::append@375");
		var $spos = $s.length;
		var n = js.Lib.document.createElement(name);
		node.appendChild(n);
		$s.pop();
		return n;
		$s.pop();
	};
	var appendNS = function(node) {
		$s.push("thx.js.BaseSelection::append@382");
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
		$s.push("thx.js.BaseSelection::remove@394");
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
		$s.push("thx.js.BaseSelection::insert@411");
		var $spos = $s.length;
		var n = js.Lib.document.createElement(name);
		node.insertBefore(n,Sizzle(null != before?before:beforeSelector,node,node)[0]);
		$s.pop();
		return n;
		$s.pop();
	};
	var insertNsDom = function(node) {
		$s.push("thx.js.BaseSelection::insert@417");
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
		$s.push("thx.js.BaseSelection::node@461");
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
		$s.push("thx.js.BaseSelection::empty@466");
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
		$s.push("thx.js.BaseSelection::onNode@496");
		var $spos = $s.length;
		var l = function(e) {
			$s.push("thx.js.BaseSelection::onNode@496@497");
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
		throw new thx.error.AbstractMethod({ fileName : "Selection.hx", lineNumber : 522, className : "thx.js.BaseSelection", methodName : "createSelection"});
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
thx.color.Colors.interpolatef = function(a,b,equation) {
	$s.push("thx.color.Colors::interpolatef");
	var $spos = $s.length;
	var ca = thx.color.Colors.parse(a);
	var cb = thx.color.Colors.parse(b);
	var f = thx.color.Rgb.interpolatef(ca,cb,equation);
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
thx.color.Colors.interpolate = function(v,a,b,equation) {
	$s.push("thx.color.Colors::interpolate");
	var $spos = $s.length;
	var $tmp = (thx.color.Colors.interpolatef(a,b,equation))(v);
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
	case "WDN":
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
	case "WDS":
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
Dates.interpolate = function(f,a,b,equation) {
	$s.push("Dates::interpolate");
	var $spos = $s.length;
	var $tmp = (Dates.interpolatef(a,b,equation))(f);
	$s.pop();
	return $tmp;
	$s.pop();
}
Dates.interpolatef = function(a,b,equation) {
	$s.push("Dates::interpolatef");
	var $spos = $s.length;
	var f = Floats.interpolatef(a.getTime(),b.getTime(),equation);
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
Dates.canParse = function(s) {
	$s.push("Dates::canParse");
	var $spos = $s.length;
	var $tmp = Dates._reparse.match(s);
	$s.pop();
	return $tmp;
	$s.pop();
}
Dates.parse = function(s) {
	$s.push("Dates::parse");
	var $spos = $s.length;
	var parts = s.split(".");
	var date = Date.fromString(StringTools.replace(parts[0],"T"," "));
	if(parts.length > 1) date = Date.fromTime(date.getTime() + Std.parseInt(parts[1]));
	$s.pop();
	return date;
	$s.pop();
}
Dates.prototype.__class__ = Dates;
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
Enums = function() { }
Enums.__name__ = ["Enums"];
Enums.toString = function(e) {
	$s.push("Enums::toString");
	var $spos = $s.length;
	var cons = e[0];
	var params = [];
	var _g = 0, _g1 = e.slice(2);
	while(_g < _g1.length) {
		var param = _g1[_g];
		++_g;
		params.push(Dynamics.toString(param));
	}
	var $tmp = cons + (params.length == 0?"":"(" + params.join(", ") + ")");
	$s.pop();
	return $tmp;
	$s.pop();
}
Enums.prototype.__class__ = Enums;
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
rg.layout.StackFrame = function(disposition) {
	if( disposition === $_ ) return;
	$s.push("rg.layout.StackFrame::new");
	var $spos = $s.length;
	rg.layout.Frame.call(this);
	this.setDisposition(disposition);
	$s.pop();
}
rg.layout.StackFrame.__name__ = ["rg","layout","StackFrame"];
rg.layout.StackFrame.__super__ = rg.layout.Frame;
for(var k in rg.layout.Frame.prototype ) rg.layout.StackFrame.prototype[k] = rg.layout.Frame.prototype[k];
rg.layout.StackFrame.prototype.disposition = null;
rg.layout.StackFrame.prototype.parent = null;
rg.layout.StackFrame.prototype.setParent = function(v) {
	$s.push("rg.layout.StackFrame::setParent");
	var $spos = $s.length;
	if(null != this.parent) this.parent.removeChild(this);
	var $tmp = this.parent = v;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.layout.StackFrame.prototype.setDisposition = function(v) {
	$s.push("rg.layout.StackFrame::setDisposition");
	var $spos = $s.length;
	this.disposition = v;
	if(null != this.parent) this.parent.reflow();
	$s.pop();
	return v;
	$s.pop();
}
rg.layout.StackFrame.prototype.__class__ = rg.layout.StackFrame;
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
thx.math.scale.LinearTime = function(p) {
	if( p === $_ ) return;
	$s.push("thx.math.scale.LinearTime::new");
	var $spos = $s.length;
	thx.math.scale.Linear.call(this);
	this._usetimeticks = false;
	$s.pop();
}
thx.math.scale.LinearTime.__name__ = ["thx","math","scale","LinearTime"];
thx.math.scale.LinearTime.__super__ = thx.math.scale.Linear;
for(var k in thx.math.scale.Linear.prototype ) thx.math.scale.LinearTime.prototype[k] = thx.math.scale.Linear.prototype[k];
thx.math.scale.LinearTime.guessGranularity = function(a,b,disc) {
	$s.push("thx.math.scale.LinearTime::guessGranularity");
	var $spos = $s.length;
	if(disc == null) disc = 2;
	var delta = Math.abs(b - a);
	if(delta >= DateTools.days(365 * disc)) {
		$s.pop();
		return "year";
	} else if(delta >= DateTools.days(30 * disc)) {
		$s.pop();
		return "month";
	} else if(delta >= DateTools.days(7 * disc)) {
		$s.pop();
		return "week";
	} else if(delta >= DateTools.days(disc)) {
		$s.pop();
		return "day";
	} else if(delta >= DateTools.hours(disc)) {
		$s.pop();
		return "hour";
	} else {
		$s.pop();
		return "minute";
	}
	$s.pop();
}
thx.math.scale.LinearTime.prototype._usetimeticks = null;
thx.math.scale.LinearTime.prototype._granularity = null;
thx.math.scale.LinearTime.prototype.domain = function(x0,x1) {
	$s.push("thx.math.scale.LinearTime::domain");
	var $spos = $s.length;
	thx.math.scale.Linear.prototype.domain.call(this,x0,x1);
	this._granularity = thx.math.scale.LinearTime.guessGranularity(this.x0,this.x1);
	$s.pop();
	return this;
	$s.pop();
}
thx.math.scale.LinearTime.prototype.getGranularity = function() {
	$s.push("thx.math.scale.LinearTime::getGranularity");
	var $spos = $s.length;
	var $tmp = this._granularity;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.LinearTime.prototype.granularity = function(v) {
	$s.push("thx.math.scale.LinearTime::granularity");
	var $spos = $s.length;
	v = v.toLowerCase();
	if(!Arrays.exists(thx.math.scale.LinearTime.validPeriods,v)) throw new thx.error.Error("invalid granularity '{0}'",null,v,{ fileName : "LinearTime.hx", lineNumber : 52, className : "thx.math.scale.LinearTime", methodName : "granularity"});
	this._granularity = v;
	$s.pop();
	return this;
	$s.pop();
}
thx.math.scale.LinearTime.prototype.tickFormat = function(v,i) {
	$s.push("thx.math.scale.LinearTime::tickFormat");
	var $spos = $s.length;
	var d = Date.fromTime(v);
	switch(this._granularity) {
	case "minute":
		var $tmp = thx.culture.FormatDate.timeShort(d);
		$s.pop();
		return $tmp;
	case "hour":
		var $tmp = thx.culture.FormatDate.timeShort(d);
		$s.pop();
		return $tmp;
	case "day":case "week":
		var $tmp = thx.culture.FormatDate.monthDay(d);
		$s.pop();
		return $tmp;
	case "month":
		var $tmp = thx.culture.FormatDate.yearMonth(d);
		$s.pop();
		return $tmp;
	case "year":
		var $tmp = thx.culture.FormatDate.year(d);
		$s.pop();
		return $tmp;
	}
	$s.pop();
	return "invalid date granularity";
	$s.pop();
}
thx.math.scale.LinearTime.prototype.getUseTimeTicks = function() {
	$s.push("thx.math.scale.LinearTime::getUseTimeTicks");
	var $spos = $s.length;
	var $tmp = this._usetimeticks;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.LinearTime.prototype.useTimeTicks = function(v) {
	$s.push("thx.math.scale.LinearTime::useTimeTicks");
	var $spos = $s.length;
	this._usetimeticks = v;
	$s.pop();
	return this;
	$s.pop();
}
thx.math.scale.LinearTime.prototype.ticks = function() {
	$s.push("thx.math.scale.LinearTime::ticks");
	var $spos = $s.length;
	if(this._usetimeticks) {
		var $tmp = this.timeTicks();
		$s.pop();
		return $tmp;
	} else {
		var $tmp = this.linearTicks();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
thx.math.scale.LinearTime.prototype.linearTicks = function() {
	$s.push("thx.math.scale.LinearTime::linearTicks");
	var $spos = $s.length;
	var $tmp = thx.math.scale.Linear.prototype.ticks.call(this);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.LinearTime.prototype.timeTicks = function() {
	$s.push("thx.math.scale.LinearTime::timeTicks");
	var $spos = $s.length;
	var start = this.x0;
	var stop = this.x1;
	var step = 0.0;
	switch(this._granularity) {
	case "minute":
		step = 60000;
		break;
	case "hour":
		step = 3600000;
		break;
	case "day":
		step = 86400000;
		break;
	case "week":
		step = 604800000;
		break;
	case "month":
		var range = [];
		var step1 = 86400000 * DateTools.getMonthDays(Date.fromTime(start));
		var step2 = 86400000 * DateTools.getMonthDays(Date.fromTime(stop));
		start = Math.ceil(start / step1) * step1;
		stop = Math.floor(stop / step2) * step2 + step2 * .5;
		while(start <= stop) {
			range.push(start);
			var d = Date.fromTime(start);
			start = new Date(d.getFullYear(),d.getMonth() + 1,d.getDate(),d.getHours(),d.getMinutes(),d.getSeconds()).getTime();
		}
		$s.pop();
		return range;
	case "year":
		var range = [];
		step = 86400000 * 365;
		start = Math.ceil(start / step) * step;
		stop = Math.floor(stop / step) * step + step * .5;
		while(start <= stop) {
			range.push(start);
			var d = Date.fromTime(start);
			start = new Date(d.getFullYear() + 1,d.getMonth(),d.getDate(),d.getHours(),d.getMinutes(),d.getSeconds()).getTime();
		}
		$s.pop();
		return range;
	}
	start = Math.ceil(start / step) * step;
	stop = Math.floor(stop / step) * step + step * .5;
	var $tmp = Floats.range(start,stop,step);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.LinearTime.prototype.__class__ = thx.math.scale.LinearTime;
thx.svg.LineInternals = function() { }
thx.svg.LineInternals.__name__ = ["thx","svg","LineInternals"];
thx.svg.LineInternals.linePoints = function(data,x,y) {
	$s.push("thx.svg.LineInternals::linePoints");
	var $spos = $s.length;
	var points = [], i = -1, n = data.length, fx = null != x, fy = null != y, value;
	while(++i < n) {
		value = data[i];
		points.push([x(value,i),y(value,i)]);
	}
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
			var $tmp = points[0][0] + "," + points[0][1] + thx.svg.LineInternals._lineHermite(points,thx.svg.LineInternals._lineCardinalTangents(points,tension));
			$s.pop();
			return $tmp;
		}
		break;
	case 6:
		var tension = $e[2];
		if(null == tension) tension = .7;
		var $tmp = points.length < 3?thx.svg.LineInternals.interpolatePoints(points,thx.svg.LineInterpolator.Linear):points[0][0] + "," + points[0][1] + thx.svg.LineInternals._lineHermite(points,thx.svg.LineInternals._lineCardinalTangents([points[points.length - 2]].concat(points).concat([points[1]]),tension));
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
rg.InsightExplorer = function(target,path,translator,width,height,start,end) {
	if( target === $_ ) return;
	$s.push("rg.InsightExplorer::new");
	var $spos = $s.length;
	if(height == null) height = 400;
	if(width == null) width = 720;
	if(path == null) path = "/";
	this._container = thx.js.Dom.select(target).attr("class").string("rgviz");
	if(this._container.empty()) throw new thx.error.Error("invalid container selector '{0}'",null,target,{ fileName : "InsightExplorer.hx", lineNumber : 54, className : "rg.InsightExplorer", methodName : "new"});
	if(null == path) throw new thx.error.NullArgument("path",{ fileName : "InsightExplorer.hx", lineNumber : 55, className : "rg.InsightExplorer", methodName : "new"});
	this._t = null == translator?new thx.translation.EmptyTranslation():translator;
	this.width = width;
	this.height = height;
	start = null == start?DateTools.delta(Date.now(),DateTools.days(-7)):start;
	end = null == end?Date.now():end;
	this.time = new thx.math.scale.LinearTime();
	this.time.useTimeTicks(true);
	this.time.domain(start.getTime(),end.getTime());
	this.buildHeader(path);
	this.buildVisualization(path);
	$s.pop();
}
rg.InsightExplorer.__name__ = ["rg","InsightExplorer"];
rg.InsightExplorer.insight = function(target,options) {
	$s.push("rg.InsightExplorer::insight");
	var $spos = $s.length;
	var path = Reflect.hasField(options,"path")?Reflect.field(options,"path"):null, translator = Reflect.hasField(options,"translator")?Reflect.field(options,"translator"):null, width = Reflect.hasField(options,"width")?Reflect.field(options,"width"):null, height = Reflect.hasField(options,"height")?Reflect.field(options,"height"):null, start = Reflect.hasField(options,"start")?Reflect.field(options,"start"):null, end = Reflect.hasField(options,"end")?Reflect.field(options,"end"):null, startd = Std["is"](start,Float)?Date.fromTime(start):Std["is"](start,Date)?start:null, endd = Std["is"](end,Float)?Date.fromTime(end):Std["is"](end,Date)?end:null;
	var $tmp = new rg.InsightExplorer(target,path,translator,width,height,startd,endd);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.InsightExplorer.prototype._container = null;
rg.InsightExplorer.prototype._t = null;
rg.InsightExplorer.prototype._hpath = null;
rg.InsightExplorer.prototype._hevent = null;
rg.InsightExplorer.prototype._hproperty = null;
rg.InsightExplorer.prototype._hoptions = null;
rg.InsightExplorer.prototype._header = null;
rg.InsightExplorer.prototype._visualization = null;
rg.InsightExplorer.prototype._vis = null;
rg.InsightExplorer.prototype.width = null;
rg.InsightExplorer.prototype.height = null;
rg.InsightExplorer.prototype.time = null;
rg.InsightExplorer.prototype.resize = function(width,height) {
	$s.push("rg.InsightExplorer::resize");
	var $spos = $s.length;
	this._vis.resize(width,height);
	$s.pop();
}
rg.InsightExplorer.prototype.buildVisualization = function(path) {
	$s.push("rg.InsightExplorer::buildVisualization");
	var $spos = $s.length;
	this._visualization = this._container.append("div").attr("class").string("visualization");
	this._vis = new rg.ie.Visualization(path,this._visualization,this.time);
	this._vis.resize(this.width,this.height);
	this._vis.chartChange = $closure(this,"_chartChange");
	$s.pop();
}
rg.InsightExplorer.prototype.buildHeader = function(path) {
	$s.push("rg.InsightExplorer::buildHeader");
	var $spos = $s.length;
	this._header = this._container.append("div").attr("class").string("header");
	this._hpath = new rg.ie.HeaderPath(this._header,path,this._t);
	this._hpath.pathChange = $closure(this,"_pathChange");
	this._hevent = new rg.ie.HeaderEvent(this._header,path,this._t);
	this._hevent.eventChange = $closure(this,"_eventChange");
	this._hproperty = new rg.ie.HeaderProperty(this._header,path,this._t);
	this._hproperty.propertyChange = $closure(this,"_propertyChange");
	this._hoptions = new rg.ie.HeaderOptions(this._header,this._t);
	this._hoptions.toggleStack = $closure(this,"_toggleStack");
	$s.pop();
}
rg.InsightExplorer.prototype._toggleStack = function() {
	$s.push("rg.InsightExplorer::_toggleStack");
	var $spos = $s.length;
	this._vis.toggleStack();
	$s.pop();
}
rg.InsightExplorer.prototype._chartChange = function() {
	$s.push("rg.InsightExplorer::_chartChange");
	var $spos = $s.length;
	this._hoptions.setChart(this._vis.chart);
	$s.pop();
}
rg.InsightExplorer.prototype._pathChange = function() {
	$s.push("rg.InsightExplorer::_pathChange");
	var $spos = $s.length;
	this._hevent.setPath(this._hpath.path);
	this._hproperty.setPath(this._hpath.path);
	this._vis.setPath(this._hpath.path);
	$s.pop();
}
rg.InsightExplorer.prototype._eventChange = function() {
	$s.push("rg.InsightExplorer::_eventChange");
	var $spos = $s.length;
	this._hproperty.setEvent(this._hevent.event);
	this._vis.setEvent(this._hevent.event);
	$s.pop();
}
rg.InsightExplorer.prototype._propertyChange = function() {
	$s.push("rg.InsightExplorer::_propertyChange");
	var $spos = $s.length;
	this._vis.setProperty(this._hproperty.property,this._hproperty.values.get(this._hproperty.property),this._hproperty.value);
	$s.pop();
}
rg.InsightExplorer.prototype.__class__ = rg.InsightExplorer;
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
rg.ie.TimeChart = function(container,w,h) {
	if( container === $_ ) return;
	$s.push("rg.ie.TimeChart::new");
	var $spos = $s.length;
	this._w = w;
	this._h = h;
	this._svg = container.append("svg:svg").attr("class").string("time-chart").attr("width")["float"](this._w).attr("height")["float"](this._h);
	this._inited = false;
	$s.pop();
}
rg.ie.TimeChart.__name__ = ["rg","ie","TimeChart"];
rg.ie.TimeChart.prototype._space = null;
rg.ie.TimeChart.prototype._svg = null;
rg.ie.TimeChart.prototype._w = null;
rg.ie.TimeChart.prototype._h = null;
rg.ie.TimeChart.prototype._y = null;
rg.ie.TimeChart.prototype._x = null;
rg.ie.TimeChart.prototype._ytick = null;
rg.ie.TimeChart.prototype._xtick = null;
rg.ie.TimeChart.prototype._ylabel = null;
rg.ie.TimeChart.prototype._xlabel = null;
rg.ie.TimeChart.prototype._xrule = null;
rg.ie.TimeChart.prototype._yrule = null;
rg.ie.TimeChart.prototype._ymax = null;
rg.ie.TimeChart.prototype._layers = null;
rg.ie.TimeChart.prototype._zoomzone = null;
rg.ie.TimeChart.prototype._chart = null;
rg.ie.TimeChart.prototype._start = null;
rg.ie.TimeChart.prototype._end = null;
rg.ie.TimeChart.prototype.toggleStack = function() {
	$s.push("rg.ie.TimeChart::toggleStack");
	var $spos = $s.length;
	if(null == this._chart) {
		$s.pop();
		return;
	}
	this._chart.stacked(!this._chart.getStacked());
	this._chart.redraw();
	$s.pop();
}
rg.ie.TimeChart.prototype.getScaleX = function() {
	$s.push("rg.ie.TimeChart::getScaleX");
	var $spos = $s.length;
	var $tmp = this._x;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.ie.TimeChart.prototype.scaleX = function(s) {
	$s.push("rg.ie.TimeChart::scaleX");
	var $spos = $s.length;
	this._x = s;
	$s.pop();
	return this;
	$s.pop();
}
rg.ie.TimeChart.prototype.getScaleY = function() {
	$s.push("rg.ie.TimeChart::getScaleY");
	var $spos = $s.length;
	var $tmp = this._y;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.ie.TimeChart.prototype.scaleY = function(s) {
	$s.push("rg.ie.TimeChart::scaleY");
	var $spos = $s.length;
	this._y = s;
	$s.pop();
	return this;
	$s.pop();
}
rg.ie.TimeChart.prototype.destroy = function() {
	$s.push("rg.ie.TimeChart::destroy");
	var $spos = $s.length;
	this._svg.remove();
	$s.pop();
}
rg.ie.TimeChart.prototype._inited = null;
rg.ie.TimeChart.prototype._init = function() {
	$s.push("rg.ie.TimeChart::_init");
	var $spos = $s.length;
	this._inited = true;
	this._space = new rg.svg.SvgSpace3x3(this._w,this._h,this._svg,0,0,75,45);
	this._ymax = 10;
	this._layers = [];
	if(null == this._y) this._y = new thx.math.scale.Linear();
	if(null == this._x) this._x = new thx.math.scale.LinearTime();
	this._ytick = rg.svg.SvgScaleTick.ofLinear(this._space.left,rg.svg.Anchor.Right,this._y);
	this._layers.push(this._ytick);
	this._ylabel = rg.svg.SvgScaleLabel.ofLinear(this._space.left,rg.svg.Anchor.Right,this._y).padding(10);
	this._layers.push(this._ylabel);
	this._yrule = rg.svg.SvgScaleRule.ofLinear(this._space.center,rg.layout.Orientation.Horizontal,this._y);
	this._layers.push(this._yrule);
	this._xtick = rg.svg.SvgScaleTick.ofLinear(this._space.bottom,rg.svg.Anchor.Top,this._x);
	this._layers.push(this._xtick);
	this._xlabel = rg.svg.SvgScaleLabel.ofLinear(this._space.bottom,rg.svg.Anchor.Top,this._x).padding(10);
	this._layers.push(this._xlabel);
	this._xrule = rg.svg.SvgScaleRule.ofLinear(this._space.center,rg.layout.Orientation.Vertical,this._x);
	this._layers.push(this._xrule);
	this._chart = new rg.svg.SvgBarChart(this._space.center,[[]],this._x,this._y).stacked(true);
	this._layers.push(this._chart);
	var d = this._x.getDomain();
	this._start = d[0];
	this._end = d[1];
	var me = this;
	this._zoomzone = new rg.svg.SvgZoomZone(this._space.center).zoom(function(e) {
		$s.push("rg.ie.TimeChart::_init@124");
		var $spos = $s.length;
		me._x.transform(e.scale,e.tx,me._start,me._end);
		me.redraw();
		me.change();
		$s.pop();
	});
	this._zoomzone.redraw();
	$s.pop();
}
rg.ie.TimeChart.prototype.change = function() {
	$s.push("rg.ie.TimeChart::change");
	var $spos = $s.length;
	$s.pop();
}
rg.ie.TimeChart.prototype.redraw = function() {
	$s.push("rg.ie.TimeChart::redraw");
	var $spos = $s.length;
	this._layers.forEach(function(d,i) {
		$s.push("rg.ie.TimeChart::redraw@140");
		var $spos = $s.length;
		d.redraw();
		$s.pop();
	});
	this._chart.redraw();
	$s.pop();
}
rg.ie.TimeChart.prototype._lastPeriod = null;
rg.ie.TimeChart.prototype._cache = null;
rg.ie.TimeChart.prototype.data = function(d) {
	$s.push("rg.ie.TimeChart::data");
	var $spos = $s.length;
	if(!this._inited) this._init();
	if(null == d) d = this._cache; else this._cache = d;
	if(null == d) {
		$s.pop();
		return;
	}
	var s = this._start, e = this._end;
	var max = this._chart.getStacked()?Arrays.floatMax(d,function(d1) {
		$s.push("rg.ie.TimeChart::data@158");
		var $spos = $s.length;
		var $tmp = Arrays.floatMax(d1,function(d2) {
			$s.push("rg.ie.TimeChart::data@158@158");
			var $spos = $s.length;
			var $tmp = d2.y + d2.y0;
			$s.pop();
			return $tmp;
			$s.pop();
		});
		$s.pop();
		return $tmp;
		$s.pop();
	}):Arrays.floatMax(d,function(d1) {
		$s.push("rg.ie.TimeChart::data@159");
		var $spos = $s.length;
		var $tmp = Arrays.floatMax(d1,function(d2) {
			$s.push("rg.ie.TimeChart::data@159@159");
			var $spos = $s.length;
			var $tmp = d2.y;
			$s.pop();
			return $tmp;
			$s.pop();
		});
		$s.pop();
		return $tmp;
		$s.pop();
	});
	if(!Math.isFinite(max)) max = 10.0;
	if(this._lastPeriod != this._x.getGranularity()) {
		this._lastPeriod = this._x.getGranularity();
		this._ymax = 10.0;
	}
	this._ymax = Math.max(this._ymax,max * 1.2);
	this._y.domain(this._ymax,0);
	this._chart.data(d);
	this.redraw();
	$s.pop();
}
rg.ie.TimeChart.prototype.__class__ = rg.ie.TimeChart;
thx.math.Ease = function() { }
thx.math.Ease.__name__ = ["thx","math","Ease"];
thx.math.Ease.mode = function(easemode,f) {
	$s.push("thx.math.Ease::mode");
	var $spos = $s.length;
	if(null == f) f = thx.math.Equations.cubic;
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
		var format = Strings._reFormat.matched(2);
		if(format == "") format = null;
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
		var df = [Dynamics.formatf(format,params,nullstring,culture)];
		buf.push(((function() {
			$s.push("Strings::formatf@162");
			var $spos = $s.length;
			var $tmp = function(f,a1) {
				$s.push("Strings::formatf@162@162");
				var $spos = $s.length;
				var $tmp = (function() {
					$s.push("Strings::formatf@162@162@162");
					var $spos = $s.length;
					var $tmp = function(a2) {
						$s.push("Strings::formatf@162@162@162@162");
						var $spos = $s.length;
						var $tmp = f(a1,a2);
						$s.pop();
						return $tmp;
						$s.pop();
					};
					$s.pop();
					return $tmp;
					$s.pop();
				})();
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
		var len = params.length < 1?20:Std.parseInt(params[0]);
		var ellipsis = params.length < 2?"...":params[1];
		var $tmp = Strings.ellipsisf(len,ellipsis);
		$s.pop();
		return $tmp;
	case "PR":
		var len = params.length < 1?10:Std.parseInt(params[0]);
		var pad = params.length < 2?" ":params[1];
		var $tmp = function(v) {
			$s.push("Strings::formatOnef@193");
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
			$s.push("Strings::formatOnef@197");
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
	var $tmp = Strings.__ucwordsPattern.customReplace(value == null?null:value.charAt(0).toUpperCase() + value.substr(1),Strings.__upperMatch);
	$s.pop();
	return $tmp;
	$s.pop();
}
Strings.ucwordsws = function(value) {
	$s.push("Strings::ucwordsws");
	var $spos = $s.length;
	var $tmp = Strings.__ucwordswsPattern.customReplace(value == null?null:value.charAt(0).toUpperCase() + value.substr(1),Strings.__upperMatch);
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
Strings.interpolate = function(v,a,b,equation) {
	$s.push("Strings::interpolate");
	var $spos = $s.length;
	var $tmp = (Strings.interpolatef(a,b,equation))(v);
	$s.pop();
	return $tmp;
	$s.pop();
}
Strings.interpolatef = function(a,b,equation) {
	$s.push("Strings::interpolatef");
	var $spos = $s.length;
	var extract = function(value,s,f) {
		$s.push("Strings::interpolatef@445");
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
					$s.push("Strings::interpolatef@483");
					var $spos = $s.length;
					var $tmp = function(_) {
						$s.push("Strings::interpolatef@483@483");
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
				var f = [Floats.interpolatef(fa[i],fb[i],equation)];
				functions.push((function(f) {
					$s.push("Strings::interpolatef@486");
					var $spos = $s.length;
					var $tmp = function(t) {
						$s.push("Strings::interpolatef@486@486");
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
				$s.push("Strings::interpolatef@490");
				var $spos = $s.length;
				var $tmp = function(_) {
					$s.push("Strings::interpolatef@490@490");
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
		$s.push("Strings::interpolatef@504");
		var $spos = $s.length;
		$s.pop();
		return rest;
		$s.pop();
	});
	var $tmp = function(t) {
		$s.push("Strings::interpolatef@505");
		var $spos = $s.length;
		var $tmp = functions.map(function(f,_) {
			$s.push("Strings::interpolatef@505@506");
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
Strings.ellipsis = function(s,maxlen,symbol) {
	$s.push("Strings::ellipsis");
	var $spos = $s.length;
	if(symbol == null) symbol = "...";
	if(maxlen == null) maxlen = 20;
	if(s.length > maxlen) {
		var $tmp = s.substr(0,Ints.max(symbol.length,maxlen - symbol.length)) + symbol;
		$s.pop();
		return $tmp;
	} else {
		$s.pop();
		return s;
	}
	$s.pop();
}
Strings.ellipsisf = function(maxlen,symbol) {
	$s.push("Strings::ellipsisf");
	var $spos = $s.length;
	if(symbol == null) symbol = "...";
	if(maxlen == null) maxlen = 20;
	var $tmp = function(s) {
		$s.push("Strings::ellipsisf@520");
		var $spos = $s.length;
		if(s.length > maxlen) {
			var $tmp = s.substr(0,Ints.max(symbol.length,maxlen - symbol.length)) + symbol;
			$s.pop();
			return $tmp;
		} else {
			$s.pop();
			return s;
		}
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
rg.svg.SvgLineChart = function(panel,data,xscale,yscale) {
	if( panel === $_ ) return;
	$s.push("rg.svg.SvgLineChart::new");
	var $spos = $s.length;
	this._cpid = "linechart_clip_path_" + ++rg.svg.SvgLineChart._pathid;
	rg.svg.SvgLayer.call(this,panel);
	this._data = data;
	this._scalex = xscale;
	this._scaley = yscale;
	$s.pop();
}
rg.svg.SvgLineChart.__name__ = ["rg","svg","SvgLineChart"];
rg.svg.SvgLineChart.__super__ = rg.svg.SvgLayer;
for(var k in rg.svg.SvgLayer.prototype ) rg.svg.SvgLineChart.prototype[k] = rg.svg.SvgLayer.prototype[k];
rg.svg.SvgLineChart.prototype._data = null;
rg.svg.SvgLineChart.prototype._prepdata = null;
rg.svg.SvgLineChart.prototype._scalex = null;
rg.svg.SvgLineChart.prototype._scaley = null;
rg.svg.SvgLineChart.prototype._cpid = null;
rg.svg.SvgLineChart.prototype._stacked = null;
rg.svg.SvgLineChart.prototype._curstacked = null;
rg.svg.SvgLineChart.prototype.destroy = function() {
	$s.push("rg.svg.SvgLineChart::destroy");
	var $spos = $s.length;
	$s.pop();
}
rg.svg.SvgLineChart.prototype.init = function() {
	$s.push("rg.svg.SvgLineChart::init");
	var $spos = $s.length;
	this.svg.append("svg:clipPath").attr("id").string(this._cpid).append("svg:rect").attr("x")["float"](0).attr("y")["float"](0).attr("width")["float"](0).attr("height")["float"](0);
	this.svg.attr("clip-path").string("url(#" + this._cpid + ")");
	$s.pop();
}
rg.svg.SvgLineChart.prototype.getStacked = function() {
	$s.push("rg.svg.SvgLineChart::getStacked");
	var $spos = $s.length;
	var $tmp = this._stacked;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgLineChart.prototype.stacked = function(v) {
	$s.push("rg.svg.SvgLineChart::stacked");
	var $spos = $s.length;
	this._stacked = v;
	$s.pop();
	return this;
	$s.pop();
}
rg.svg.SvgLineChart.prototype.redraw = function() {
	$s.push("rg.svg.SvgLineChart::redraw");
	var $spos = $s.length;
	this._prepareData();
	if(null == this._curstacked || this._curstacked == this._stacked) this._redraw(); else this._transition();
	this._curstacked = this._stacked;
	$s.pop();
}
rg.svg.SvgLineChart.prototype._h = null;
rg.svg.SvgLineChart.prototype._w = null;
rg.svg.SvgLineChart.prototype._path = null;
rg.svg.SvgLineChart.prototype._patho = null;
rg.svg.SvgLineChart.prototype._prepareData = function() {
	$s.push("rg.svg.SvgLineChart::_prepareData");
	var $spos = $s.length;
	this._prepdata = this._data.copy();
	this._prepdata.reverse();
	var domy = this._scaley.getDomain();
	var domx = this._scalex.getDomain();
	var minx = Arrays.min(domx);
	var stepx = Math.abs(this._prepdata[0][1].x - this._prepdata[0][0].x) + minx;
	this._h = this.panel.frame.height;
	this._w = this.panel.frame.width;
	if(this._stacked) {
		this._path = $closure(this,"pathStacked");
		this._patho = $closure(this,"path");
	} else {
		this._patho = $closure(this,"pathStacked");
		this._path = $closure(this,"path");
	}
	$s.pop();
}
rg.svg.SvgLineChart.prototype.path = function(d,i) {
	$s.push("rg.svg.SvgLineChart::path");
	var $spos = $s.length;
	var sx = this._scalex, sy = this._scaley;
	var shape = new thx.svg.Line(function(d1,i1) {
		$s.push("rg.svg.SvgLineChart::path@96");
		var $spos = $s.length;
		var $tmp = sx.scale(d1.x);
		$s.pop();
		return $tmp;
		$s.pop();
	},function(d1,i1) {
		$s.push("rg.svg.SvgLineChart::path@97");
		var $spos = $s.length;
		var $tmp = sy.scale(d1.y);
		$s.pop();
		return $tmp;
		$s.pop();
	}).shape(d);
	$s.pop();
	return shape;
	$s.pop();
}
rg.svg.SvgLineChart.prototype.path0 = function(d,i) {
	$s.push("rg.svg.SvgLineChart::path0");
	var $spos = $s.length;
	var sx = this._scalex, zero = this._scaley.scale(0);
	var shape = new thx.svg.Line(function(d1,i1) {
		$s.push("rg.svg.SvgLineChart::path0@107");
		var $spos = $s.length;
		var $tmp = sx.scale(d1.x);
		$s.pop();
		return $tmp;
		$s.pop();
	},function(d1,i1) {
		$s.push("rg.svg.SvgLineChart::path0@108");
		var $spos = $s.length;
		$s.pop();
		return zero;
		$s.pop();
	}).shape(d);
	$s.pop();
	return shape;
	$s.pop();
}
rg.svg.SvgLineChart.prototype.pathStacked = function(d,i) {
	$s.push("rg.svg.SvgLineChart::pathStacked");
	var $spos = $s.length;
	var sx = this._scalex, sy = this._scaley;
	var $tmp = new thx.svg.Line(function(d1,i1) {
		$s.push("rg.svg.SvgLineChart::pathStacked@117");
		var $spos = $s.length;
		var $tmp = sx.scale(d1.x);
		$s.pop();
		return $tmp;
		$s.pop();
	},function(d1,i1) {
		$s.push("rg.svg.SvgLineChart::pathStacked@118");
		var $spos = $s.length;
		var $tmp = sy.scale(d1.y + d1.y0);
		$s.pop();
		return $tmp;
		$s.pop();
	}).shape(d);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgLineChart.prototype._transition = function() {
	$s.push("rg.svg.SvgLineChart::_transition");
	var $spos = $s.length;
	var layer = this.svg.selectAll("g.layer").data(this._prepdata);
	layer.update().select("path.line").transition().attr("d").stringf(this._path);
	$s.pop();
}
rg.svg.SvgLineChart.prototype._pathCreated = null;
rg.svg.SvgLineChart.prototype._setPathCreated = function(_,_1) {
	$s.push("rg.svg.SvgLineChart::_setPathCreated");
	var $spos = $s.length;
	this._pathCreated = true;
	$s.pop();
}
rg.svg.SvgLineChart.prototype._redraw = function() {
	$s.push("rg.svg.SvgLineChart::_redraw");
	var $spos = $s.length;
	this.svg.select("#" + this._cpid + " rect").attr("width")["float"](this._w).attr("height")["float"](this._h);
	var layer = this.svg.selectAll("g.layer").data(this._prepdata);
	if(this._pathCreated) layer.update().select("path.line").attr("d").stringf(this._path);
	layer.enter().append("svg:g").attr("class").stringf(function(d,i) {
		$s.push("rg.svg.SvgLineChart::_redraw@156");
		var $spos = $s.length;
		var $tmp = "layer layer-" + i;
		$s.pop();
		return $tmp;
		$s.pop();
	}).append("svg:path").attr("class").string("line").attr("d").stringf($closure(this,"path0")).transition().attr("d").stringf(this._path).endNode($closure(this,"_setPathCreated"));
	layer.exit().remove();
	$s.pop();
}
rg.svg.SvgLineChart.prototype.__class__ = rg.svg.SvgLineChart;
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
Bools.interpolate = function(v,a,b,equation) {
	$s.push("Bools::interpolate");
	var $spos = $s.length;
	var $tmp = (Bools.interpolatef(a,b,equation))(v);
	$s.pop();
	return $tmp;
	$s.pop();
}
Bools.interpolatef = function(a,b,equation) {
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
		var f = Floats.interpolatef(0,1,equation);
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
Bools.canParse = function(s) {
	$s.push("Bools::canParse");
	var $spos = $s.length;
	s = s.toLowerCase();
	var $tmp = s == "true" || s == "false";
	$s.pop();
	return $tmp;
	$s.pop();
}
Bools.parse = function(s) {
	$s.push("Bools::parse");
	var $spos = $s.length;
	var $tmp = s.toLowerCase() == "true";
	$s.pop();
	return $tmp;
	$s.pop();
}
Bools.prototype.__class__ = Bools;
rg.ie.HeaderPath = function(container,path,t) {
	if( container === $_ ) return;
	$s.push("rg.ie.HeaderPath::new");
	var $spos = $s.length;
	this.path = path;
	this._t = t;
	this.init(container);
	$s.pop();
}
rg.ie.HeaderPath.__name__ = ["rg","ie","HeaderPath"];
rg.ie.HeaderPath.childrenPath = function(path,c) {
	$s.push("rg.ie.HeaderPath::childrenPath");
	var $spos = $s.length;
	var $tmp = c.map(function(d,i) {
		$s.push("rg.ie.HeaderPath::childrenPath@92");
		var $spos = $s.length;
		var $tmp = { path : path + d, name : d};
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.ie.HeaderPath.currentPathParts = function(path) {
	$s.push("rg.ie.HeaderPath::currentPathParts");
	var $spos = $s.length;
	var $tmp = Iterators.reduce(Strings.rtrim(Strings.ltrim(path,"/"),"/").split("/").iterator(),function(arr,cur,i) {
		$s.push("rg.ie.HeaderPath::currentPathParts@102");
		var $spos = $s.length;
		if(cur == "") {
			$s.pop();
			return arr;
		}
		var last = arr[arr.length - 1].path;
		cur += "/";
		arr.push({ path : last + cur, name : cur});
		$s.pop();
		return arr;
		$s.pop();
	},[{ path : "/", name : "/"}]);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.ie.HeaderPath.pathName = function(path) {
	$s.push("rg.ie.HeaderPath::pathName");
	var $spos = $s.length;
	path = Strings.rtrim(Strings.ltrim(path,"/"),"/");
	var parts = path.split("/");
	var $tmp = parts.pop();
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.ie.HeaderPath.getParent = function(path) {
	$s.push("rg.ie.HeaderPath::getParent");
	var $spos = $s.length;
	path = Strings.rtrim(Strings.ltrim(path,"/"),"/");
	var parts = path.split("/");
	parts.pop();
	var $tmp = "/" + parts.join("/");
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.ie.HeaderPath.prototype.path = null;
rg.ie.HeaderPath.prototype.children = null;
rg.ie.HeaderPath.prototype._container = null;
rg.ie.HeaderPath.prototype._t = null;
rg.ie.HeaderPath.prototype.pathChange = function() {
	$s.push("rg.ie.HeaderPath::pathChange");
	var $spos = $s.length;
	$s.pop();
}
rg.ie.HeaderPath.prototype.childrenChange = function() {
	$s.push("rg.ie.HeaderPath::childrenChange");
	var $spos = $s.length;
	$s.pop();
}
rg.ie.HeaderPath.prototype.init = function(container) {
	$s.push("rg.ie.HeaderPath::init");
	var $spos = $s.length;
	this._container = container.append("div").attr("class").string("path");
	var dl = this._container.append("dl");
	dl.append("dt").text().string(this._t._("path"));
	dl.append("dd").attr("class").string("current").append("ul");
	dl.append("dt").attr("class").string("children hidden").text().string(this._t._("children"));
	dl.append("dd").attr("class").string("children hidden").append("ul");
	this.setPath(this.path);
	$s.pop();
}
rg.ie.HeaderPath.prototype._clickPath = function(d,i) {
	$s.push("rg.ie.HeaderPath::_clickPath");
	var $spos = $s.length;
	this.setPath(d.path);
	$s.pop();
}
rg.ie.HeaderPath.prototype.setPath = function(path) {
	$s.push("rg.ie.HeaderPath::setPath");
	var $spos = $s.length;
	this.path = path;
	this.pathChange();
	rg.js.ReportGrid.children(path,{ type : "path"},$closure(this,"_updatePath"));
	$s.pop();
}
rg.ie.HeaderPath.prototype._updatePath = function(c) {
	$s.push("rg.ie.HeaderPath::_updatePath");
	var $spos = $s.length;
	var list = this._container.select("dd.current ul").selectAll("li").data(rg.ie.HeaderPath.currentPathParts(this.path),function(d,i) {
		$s.push("rg.ie.HeaderPath::_updatePath@65");
		var $spos = $s.length;
		var $tmp = d.path;
		$s.pop();
		return $tmp;
		$s.pop();
	});
	list.enter().append("li").text().stringf(function(d,i) {
		$s.push("rg.ie.HeaderPath::_updatePath@68");
		var $spos = $s.length;
		var $tmp = d.name;
		$s.pop();
		return $tmp;
		$s.pop();
	}).on("click",$closure(this,"_clickPath"));
	list.exit().remove();
	this.children = rg.ie.HeaderPath.childrenPath(this.path,c);
	this.childrenChange();
	var list1 = this._container.select("dd.children ul").selectAll("li").data(this.children,function(d,i) {
		$s.push("rg.ie.HeaderPath::_updatePath@76");
		var $spos = $s.length;
		var $tmp = d.path;
		$s.pop();
		return $tmp;
		$s.pop();
	});
	list1.exit().remove();
	if(this.children.length == 0) this._container.selectAll(".children").classed().add("hidden"); else {
		this._container.selectAll(".children").classed().remove("hidden");
		list1.enter().append("li").text().stringf(function(d,i) {
			$s.push("rg.ie.HeaderPath::_updatePath@85");
			var $spos = $s.length;
			var $tmp = d.name;
			$s.pop();
			return $tmp;
			$s.pop();
		}).on("click",$closure(this,"_clickPath"));
	}
	$s.pop();
}
rg.ie.HeaderPath.prototype.__class__ = rg.ie.HeaderPath;
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
		var n = data.length, max = data.map(thx.geom.layout.Stack.stackMaxIndex), sums = data.map(thx.geom.layout.Stack.stackReduceSum), index = Ints.range(n), top = 0.0, bottom = 0.0, tops = [], bottoms = [];
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
	var $tmp = Iterators.reduce(data.iterator(),thx.geom.layout.Stack.stackSum,0.0);
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
Arrays.addIf = function(arr,condition,value) {
	$s.push("Arrays::addIf");
	var $spos = $s.length;
	if(null != condition) {
		if(condition) arr.push(value);
	} else if(null != value) arr.push(value);
	$s.pop();
	return arr;
	$s.pop();
}
Arrays.add = function(arr,value) {
	$s.push("Arrays::add");
	var $spos = $s.length;
	arr.push(value);
	$s.pop();
	return arr;
	$s.pop();
}
Arrays["delete"] = function(arr,value) {
	$s.push("Arrays::delete");
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
	arr.sort(null == f?Reflect.compare:f);
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
Arrays.interpolate = function(v,a,b,equation) {
	$s.push("Arrays::interpolate");
	var $spos = $s.length;
	var $tmp = (Arrays.interpolatef(a,b,equation))(v);
	$s.pop();
	return $tmp;
	$s.pop();
}
Arrays.interpolatef = function(a,b,equation) {
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
		} else functions.push(Floats.interpolatef(a[i],b[i],equation));
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
Arrays.interpolateStrings = function(v,a,b,equation) {
	$s.push("Arrays::interpolateStrings");
	var $spos = $s.length;
	var $tmp = (Arrays.interpolateStringsf(a,b,equation))(v);
	$s.pop();
	return $tmp;
	$s.pop();
}
Arrays.interpolateStringsf = function(a,b,equation) {
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
		} else functions.push(Strings.interpolatef(a[i],b[i],equation));
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
Arrays.interpolateInts = function(v,a,b,equation) {
	$s.push("Arrays::interpolateInts");
	var $spos = $s.length;
	var $tmp = (Arrays.interpolateIntsf(a,b,equation))(v);
	$s.pop();
	return $tmp;
	$s.pop();
}
Arrays.interpolateIntsf = function(a,b,equation) {
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
		} else functions.push(Ints.interpolatef(a[i],b[i],equation));
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
Arrays.toString = function(arr) {
	$s.push("Arrays::toString");
	var $spos = $s.length;
	var $tmp = "[" + arr.map(function(v,_) {
		$s.push("Arrays::toString@357");
		var $spos = $s.length;
		var $tmp = Dynamics.toString(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}).join(", ") + "]";
	$s.pop();
	return $tmp;
	$s.pop();
}
Arrays.last = function(arr) {
	$s.push("Arrays::last");
	var $spos = $s.length;
	var $tmp = arr[arr.length - 1];
	$s.pop();
	return $tmp;
	$s.pop();
}
Arrays.first = function(arr) {
	$s.push("Arrays::first");
	var $spos = $s.length;
	var $tmp = arr[0];
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
DateTools = function() { }
DateTools.__name__ = ["DateTools"];
DateTools.__format_get = function(d,e) {
	$s.push("DateTools::__format_get");
	var $spos = $s.length;
	var $tmp = (function($this) {
		var $r;
		switch(e) {
		case "%":
			$r = "%";
			break;
		case "C":
			$r = StringTools.lpad(Std.string(Std["int"](d.getFullYear() / 100)),"0",2);
			break;
		case "d":
			$r = StringTools.lpad(Std.string(d.getDate()),"0",2);
			break;
		case "D":
			$r = DateTools.__format(d,"%m/%d/%y");
			break;
		case "e":
			$r = Std.string(d.getDate());
			break;
		case "H":case "k":
			$r = StringTools.lpad(Std.string(d.getHours()),e == "H"?"0":" ",2);
			break;
		case "I":case "l":
			$r = (function($this) {
				var $r;
				var hour = d.getHours() % 12;
				$r = StringTools.lpad(Std.string(hour == 0?12:hour),e == "I"?"0":" ",2);
				return $r;
			}($this));
			break;
		case "m":
			$r = StringTools.lpad(Std.string(d.getMonth() + 1),"0",2);
			break;
		case "M":
			$r = StringTools.lpad(Std.string(d.getMinutes()),"0",2);
			break;
		case "n":
			$r = "\n";
			break;
		case "p":
			$r = d.getHours() > 11?"PM":"AM";
			break;
		case "r":
			$r = DateTools.__format(d,"%I:%M:%S %p");
			break;
		case "R":
			$r = DateTools.__format(d,"%H:%M");
			break;
		case "s":
			$r = Std.string(Std["int"](d.getTime() / 1000));
			break;
		case "S":
			$r = StringTools.lpad(Std.string(d.getSeconds()),"0",2);
			break;
		case "t":
			$r = "\t";
			break;
		case "T":
			$r = DateTools.__format(d,"%H:%M:%S");
			break;
		case "u":
			$r = (function($this) {
				var $r;
				var t = d.getDay();
				$r = t == 0?"7":Std.string(t);
				return $r;
			}($this));
			break;
		case "w":
			$r = Std.string(d.getDay());
			break;
		case "y":
			$r = StringTools.lpad(Std.string(d.getFullYear() % 100),"0",2);
			break;
		case "Y":
			$r = Std.string(d.getFullYear());
			break;
		default:
			$r = (function($this) {
				var $r;
				throw "Date.format %" + e + "- not implemented yet.";
				return $r;
			}($this));
		}
		return $r;
	}(this));
	$s.pop();
	return $tmp;
	$s.pop();
}
DateTools.__format = function(d,f) {
	$s.push("DateTools::__format");
	var $spos = $s.length;
	var r = new StringBuf();
	var p = 0;
	while(true) {
		var np = f.indexOf("%",p);
		if(np < 0) break;
		r.b[r.b.length] = f.substr(p,np - p);
		r.b[r.b.length] = DateTools.__format_get(d,f.substr(np + 1,1));
		p = np + 2;
	}
	r.b[r.b.length] = f.substr(p,f.length - p);
	var $tmp = r.b.join("");
	$s.pop();
	return $tmp;
	$s.pop();
}
DateTools.format = function(d,f) {
	$s.push("DateTools::format");
	var $spos = $s.length;
	var $tmp = DateTools.__format(d,f);
	$s.pop();
	return $tmp;
	$s.pop();
}
DateTools.delta = function(d,t) {
	$s.push("DateTools::delta");
	var $spos = $s.length;
	var $tmp = Date.fromTime(d.getTime() + t);
	$s.pop();
	return $tmp;
	$s.pop();
}
DateTools.getMonthDays = function(d) {
	$s.push("DateTools::getMonthDays");
	var $spos = $s.length;
	var month = d.getMonth();
	var year = d.getFullYear();
	if(month != 1) {
		var $tmp = DateTools.DAYS_OF_MONTH[month];
		$s.pop();
		return $tmp;
	}
	var isB = year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
	var $tmp = isB?29:28;
	$s.pop();
	return $tmp;
	$s.pop();
}
DateTools.seconds = function(n) {
	$s.push("DateTools::seconds");
	var $spos = $s.length;
	var $tmp = n * 1000.0;
	$s.pop();
	return $tmp;
	$s.pop();
}
DateTools.minutes = function(n) {
	$s.push("DateTools::minutes");
	var $spos = $s.length;
	var $tmp = n * 60.0 * 1000.0;
	$s.pop();
	return $tmp;
	$s.pop();
}
DateTools.hours = function(n) {
	$s.push("DateTools::hours");
	var $spos = $s.length;
	var $tmp = n * 60.0 * 60.0 * 1000.0;
	$s.pop();
	return $tmp;
	$s.pop();
}
DateTools.days = function(n) {
	$s.push("DateTools::days");
	var $spos = $s.length;
	var $tmp = n * 24.0 * 60.0 * 60.0 * 1000.0;
	$s.pop();
	return $tmp;
	$s.pop();
}
DateTools.parse = function(t) {
	$s.push("DateTools::parse");
	var $spos = $s.length;
	var s = t / 1000;
	var m = s / 60;
	var h = m / 60;
	var $tmp = { ms : t % 1000, seconds : Std["int"](s % 60), minutes : Std["int"](m % 60), hours : Std["int"](h % 24), days : Std["int"](h / 24)};
	$s.pop();
	return $tmp;
	$s.pop();
}
DateTools.make = function(o) {
	$s.push("DateTools::make");
	var $spos = $s.length;
	var $tmp = o.ms + 1000.0 * (o.seconds + 60.0 * (o.minutes + 60.0 * (o.hours + 24.0 * o.days)));
	$s.pop();
	return $tmp;
	$s.pop();
}
DateTools.prototype.__class__ = DateTools;
rg.svg.SvgScaleLabel = function(panel,anchor) {
	if( panel === $_ ) return;
	$s.push("rg.svg.SvgScaleLabel::new");
	var $spos = $s.length;
	rg.svg.SvgLayer.call(this,panel);
	this._height = rg.svg.SvgScaleLabel.defaultTextHeight;
	this._padding = rg.svg.SvgScaleLabel.defaultTextPadding;
	this.anchor(anchor);
	this.svg.attr("class").string("scale-ticks");
	$s.pop();
}
rg.svg.SvgScaleLabel.__name__ = ["rg","svg","SvgScaleLabel"];
rg.svg.SvgScaleLabel.__super__ = rg.svg.SvgLayer;
for(var k in rg.svg.SvgLayer.prototype ) rg.svg.SvgScaleLabel.prototype[k] = rg.svg.SvgLayer.prototype[k];
rg.svg.SvgScaleLabel.ofLinear = function(panel,anchor,scale) {
	$s.push("rg.svg.SvgScaleLabel::ofLinear");
	var $spos = $s.length;
	var $tmp = new rg.svg.SvgScaleLabel(panel,anchor).scale($closure(scale,"scale")).range($closure(scale,"range")).ticks($closure(scale,"ticks")).key($closure(scale,"tickFormat")).label($closure(scale,"tickFormat"));
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgScaleLabel.prototype._anchor = null;
rg.svg.SvgScaleLabel.prototype._padding = null;
rg.svg.SvgScaleLabel.prototype._height = null;
rg.svg.SvgScaleLabel.prototype._pos = null;
rg.svg.SvgScaleLabel.prototype._t = null;
rg.svg.SvgScaleLabel.prototype._maxRange = null;
rg.svg.SvgScaleLabel.prototype._axis = null;
rg.svg.SvgScaleLabel.prototype._oaxis = null;
rg.svg.SvgScaleLabel.prototype._ticks = null;
rg.svg.SvgScaleLabel.prototype._range = null;
rg.svg.SvgScaleLabel.prototype._scale = null;
rg.svg.SvgScaleLabel.prototype._key = null;
rg.svg.SvgScaleLabel.prototype._label = null;
rg.svg.SvgScaleLabel.prototype._textAnchor = null;
rg.svg.SvgScaleLabel.prototype._textBaseline = null;
rg.svg.SvgScaleLabel.prototype.translateX = function(d,i) {
	$s.push("rg.svg.SvgScaleLabel::translateX");
	var $spos = $s.length;
	var $tmp = "translate(" + this._scale(d,i) + ",0) rotate(-90)";
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgScaleLabel.prototype.translateY = function(d,i) {
	$s.push("rg.svg.SvgScaleLabel::translateY");
	var $spos = $s.length;
	var $tmp = "translate(0," + this._scale(d,i) + ")";
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgScaleLabel.prototype.redraw = function() {
	$s.push("rg.svg.SvgScaleLabel::redraw");
	var $spos = $s.length;
	this._range(0,this._maxRange());
	var g = this.svg.selectAll("g." + this._axis).data(this._ticks(),this._key).update().attr("transform").stringf(this._t);
	g.selectAll("text.label").attr(this._oaxis)["float"](this._pos()).attr("text-anchor").string(this._textAnchor).attr("dominant-baseline").string(this._textBaseline).text().stringf(this._label);
	g.enter().append("svg:g").attr("class").string(this._axis).attr("transform").stringf(this._t).append("svg:text").attr("class").string("label").attr(this._oaxis)["float"](this._pos()).attr("text-anchor").string(this._textAnchor).attr("dominant-baseline").string(this._textBaseline).text().stringf(this._label);
	g.exit().remove();
	$s.pop();
}
rg.svg.SvgScaleLabel.prototype.getRange = function() {
	$s.push("rg.svg.SvgScaleLabel::getRange");
	var $spos = $s.length;
	var $tmp = this._range;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgScaleLabel.prototype.range = function(f) {
	$s.push("rg.svg.SvgScaleLabel::range");
	var $spos = $s.length;
	this._range = f;
	$s.pop();
	return this;
	$s.pop();
}
rg.svg.SvgScaleLabel.prototype.getScale = function() {
	$s.push("rg.svg.SvgScaleLabel::getScale");
	var $spos = $s.length;
	var $tmp = this._scale;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgScaleLabel.prototype.scale = function(f) {
	$s.push("rg.svg.SvgScaleLabel::scale");
	var $spos = $s.length;
	this._scale = f;
	$s.pop();
	return this;
	$s.pop();
}
rg.svg.SvgScaleLabel.prototype.getTicks = function() {
	$s.push("rg.svg.SvgScaleLabel::getTicks");
	var $spos = $s.length;
	var $tmp = this._ticks;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgScaleLabel.prototype.ticks = function(f) {
	$s.push("rg.svg.SvgScaleLabel::ticks");
	var $spos = $s.length;
	this._ticks = f;
	$s.pop();
	return this;
	$s.pop();
}
rg.svg.SvgScaleLabel.prototype.getKey = function() {
	$s.push("rg.svg.SvgScaleLabel::getKey");
	var $spos = $s.length;
	var $tmp = this._key;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgScaleLabel.prototype.key = function(f) {
	$s.push("rg.svg.SvgScaleLabel::key");
	var $spos = $s.length;
	this._key = f;
	$s.pop();
	return this;
	$s.pop();
}
rg.svg.SvgScaleLabel.prototype.getLabel = function() {
	$s.push("rg.svg.SvgScaleLabel::getLabel");
	var $spos = $s.length;
	var $tmp = this._label;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgScaleLabel.prototype.label = function(f) {
	$s.push("rg.svg.SvgScaleLabel::label");
	var $spos = $s.length;
	this._label = f;
	$s.pop();
	return this;
	$s.pop();
}
rg.svg.SvgScaleLabel.prototype.getAnchor = function() {
	$s.push("rg.svg.SvgScaleLabel::getAnchor");
	var $spos = $s.length;
	var $tmp = this._anchor;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgScaleLabel.prototype.anchor = function(o) {
	$s.push("rg.svg.SvgScaleLabel::anchor");
	var $spos = $s.length;
	if(Type.enumEq(o,this._anchor)) {
		$s.pop();
		return this;
	}
	var panel = this.panel;
	switch( (this._anchor = o)[1] ) {
	case 0:
	case 1:
		this._axis = "x";
		this._oaxis = "x";
		this._t = $closure(this,"translateX");
		this._maxRange = function() {
			$s.push("rg.svg.SvgScaleLabel::anchor@137");
			var $spos = $s.length;
			var $tmp = panel.frame.width;
			$s.pop();
			return $tmp;
			$s.pop();
		};
		break;
	case 2:
	case 3:
		this._axis = "y";
		this._oaxis = "x";
		this._t = $closure(this,"translateY");
		this._maxRange = function() {
			$s.push("rg.svg.SvgScaleLabel::anchor@142");
			var $spos = $s.length;
			var $tmp = panel.frame.height;
			$s.pop();
			return $tmp;
			$s.pop();
		};
		break;
	}
	switch( (this._anchor)[1] ) {
	case 0:
		this._textAnchor = "end";
		this._textBaseline = "middle";
		break;
	case 1:
		this._textAnchor = "start";
		this._textBaseline = "middle";
		break;
	case 2:
		this._textAnchor = "start";
		this._textBaseline = "middle";
		break;
	case 3:
		this._textAnchor = "end";
		this._textBaseline = "middle";
		break;
	}
	this.adjustPositionFunction();
	$s.pop();
	return this;
	$s.pop();
}
rg.svg.SvgScaleLabel.prototype.getHeight = function() {
	$s.push("rg.svg.SvgScaleLabel::getHeight");
	var $spos = $s.length;
	var $tmp = this._height;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgScaleLabel.prototype.height = function(v) {
	$s.push("rg.svg.SvgScaleLabel::height");
	var $spos = $s.length;
	this._height = v;
	this.adjustPositionFunction();
	$s.pop();
	return this;
	$s.pop();
}
rg.svg.SvgScaleLabel.prototype.getPadding = function() {
	$s.push("rg.svg.SvgScaleLabel::getPadding");
	var $spos = $s.length;
	var $tmp = this._padding;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgScaleLabel.prototype.padding = function(v) {
	$s.push("rg.svg.SvgScaleLabel::padding");
	var $spos = $s.length;
	this._padding = v;
	this.adjustPositionFunction();
	$s.pop();
	return this;
	$s.pop();
}
rg.svg.SvgScaleLabel.prototype.adjustPositionFunction = function() {
	$s.push("rg.svg.SvgScaleLabel::adjustPositionFunction");
	var $spos = $s.length;
	var me = this;
	switch( (this._anchor)[1] ) {
	case 0:
		this._pos = function() {
			$s.push("rg.svg.SvgScaleLabel::adjustPositionFunction@185");
			var $spos = $s.length;
			var $tmp = -me._padding;
			$s.pop();
			return $tmp;
			$s.pop();
		};
		break;
	case 2:
		this._pos = function() {
			$s.push("rg.svg.SvgScaleLabel::adjustPositionFunction@187");
			var $spos = $s.length;
			var $tmp = me._padding;
			$s.pop();
			return $tmp;
			$s.pop();
		};
		break;
	case 1:
		this._pos = function() {
			$s.push("rg.svg.SvgScaleLabel::adjustPositionFunction@189");
			var $spos = $s.length;
			var $tmp = me.panel.frame.height - me._padding;
			$s.pop();
			return $tmp;
			$s.pop();
		};
		break;
	case 3:
		this._pos = function() {
			$s.push("rg.svg.SvgScaleLabel::adjustPositionFunction@191");
			var $spos = $s.length;
			var $tmp = me.panel.frame.width - me._padding;
			$s.pop();
			return $tmp;
			$s.pop();
		};
		break;
	}
	$s.pop();
}
rg.svg.SvgScaleLabel.prototype.__class__ = rg.svg.SvgScaleLabel;
Objects = function() { }
Objects.__name__ = ["Objects"];
Objects.field = function(o,fieldname,alt) {
	$s.push("Objects::field");
	var $spos = $s.length;
	var $tmp = Reflect.hasField(o,fieldname)?Reflect.field(o,fieldname):alt;
	$s.pop();
	return $tmp;
	$s.pop();
}
Objects.keys = function(o) {
	$s.push("Objects::keys");
	var $spos = $s.length;
	var $tmp = Reflect.fields(o);
	$s.pop();
	return $tmp;
	$s.pop();
}
Objects.values = function(o) {
	$s.push("Objects::values");
	var $spos = $s.length;
	var arr = [];
	var _g = 0, _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var key = _g1[_g];
		++_g;
		arr.push(Reflect.field(o,key));
	}
	$s.pop();
	return arr;
	$s.pop();
}
Objects.entries = function(o) {
	$s.push("Objects::entries");
	var $spos = $s.length;
	var arr = [];
	var _g = 0, _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var key = _g1[_g];
		++_g;
		arr.push({ key : key, value : Reflect.field(o,key)});
	}
	$s.pop();
	return arr;
	$s.pop();
}
Objects["with"] = function(ob,f) {
	$s.push("Objects::with");
	var $spos = $s.length;
	f(ob);
	$s.pop();
	return ob;
	$s.pop();
}
Objects.toHash = function(ob) {
	$s.push("Objects::toHash");
	var $spos = $s.length;
	var hash = new Hash();
	var $tmp = Objects.copyToHash(ob,hash);
	$s.pop();
	return $tmp;
	$s.pop();
}
Objects.copyToHash = function(ob,hash) {
	$s.push("Objects::copyToHash");
	var $spos = $s.length;
	var _g = 0, _g1 = Reflect.fields(ob);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		hash.set(field,Reflect.field(ob,field));
	}
	$s.pop();
	return hash;
	$s.pop();
}
Objects.interpolate = function(v,a,b,equation) {
	$s.push("Objects::interpolate");
	var $spos = $s.length;
	var $tmp = (Objects.interpolatef(a,b,equation))(v);
	$s.pop();
	return $tmp;
	$s.pop();
}
Objects.interpolatef = function(a,b,equation) {
	$s.push("Objects::interpolatef");
	var $spos = $s.length;
	var i = { }, c = { }, keys = Reflect.fields(a);
	var _g = 0;
	while(_g < keys.length) {
		var key = keys[_g];
		++_g;
		if(Reflect.hasField(b,key)) {
			var va = Reflect.field(a,key);
			i[key] = (Objects.interpolateByName(key,va))(va,Reflect.field(b,key));
		} else c[key] = Reflect.field(a,key);
	}
	keys = Reflect.fields(b);
	var _g = 0;
	while(_g < keys.length) {
		var key = keys[_g];
		++_g;
		if(!Reflect.hasField(a,key)) c[key] = Reflect.field(b,key);
	}
	var $tmp = function(t) {
		$s.push("Objects::interpolatef@82");
		var $spos = $s.length;
		var _g = 0, _g1 = Reflect.fields(i);
		while(_g < _g1.length) {
			var k = _g1[_g];
			++_g;
			c[k] = Reflect.field(i,k).apply(i,[t]);
		}
		$s.pop();
		return c;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
Objects.interpolateByName = function(k,v) {
	$s.push("Objects::interpolateByName");
	var $spos = $s.length;
	var $tmp = Std["is"](v,String) && Objects._reCheckKeyIsColor.match(k)?thx.color.Colors.interpolatef:Dynamics.interpolatef;
	$s.pop();
	return $tmp;
	$s.pop();
}
Objects.applyTo = function(src,dest) {
	$s.push("Objects::applyTo");
	var $spos = $s.length;
	var _g = 0, _g1 = Reflect.fields(src);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		if(!Reflect.hasField(dest,field)) continue;
		if(Reflect.isObject(Reflect.field(src,field)) && Reflect.isObject(Reflect.field(dest,field))) Objects.applyTo(Reflect.field(src,field),Reflect.field(dest,field)); else dest[field] = Reflect.field(src,field);
	}
	$s.pop();
	return dest;
	$s.pop();
}
Objects.copyTo = function(src,dest) {
	$s.push("Objects::copyTo");
	var $spos = $s.length;
	var _g = 0, _g1 = Reflect.fields(src);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		if(Reflect.isObject(Reflect.field(src,field)) && Reflect.isObject(Reflect.field(dest,field))) Objects.copyTo(Reflect.field(src,field),Reflect.field(dest,field)); else dest[field] = Reflect.field(src,field);
	}
	$s.pop();
	return dest;
	$s.pop();
}
Objects.prototype.__class__ = Objects;
rg.ie.Visualization = function(path,container,time) {
	if( path === $_ ) return;
	$s.push("rg.ie.Visualization::new");
	var $spos = $s.length;
	this.path = path;
	this._container = container;
	this._dirty = false;
	this.time = time;
	this.widetime = new thx.math.scale.LinearTime();
	$s.pop();
}
rg.ie.Visualization.__name__ = ["rg","ie","Visualization"];
rg.ie.Visualization.prototype.path = null;
rg.ie.Visualization.prototype.event = null;
rg.ie.Visualization.prototype.property = null;
rg.ie.Visualization.prototype.value = null;
rg.ie.Visualization.prototype.values = null;
rg.ie.Visualization.prototype.chartChange = function() {
	$s.push("rg.ie.Visualization::chartChange");
	var $spos = $s.length;
	$s.pop();
}
rg.ie.Visualization.prototype.chart = null;
rg.ie.Visualization.prototype.time = null;
rg.ie.Visualization.prototype.widetime = null;
rg.ie.Visualization.prototype._container = null;
rg.ie.Visualization.prototype._dirty = null;
rg.ie.Visualization.prototype._w = null;
rg.ie.Visualization.prototype._h = null;
rg.ie.Visualization.prototype.resize = function(w,h) {
	$s.push("rg.ie.Visualization::resize");
	var $spos = $s.length;
	this._w = w;
	this._h = h;
	$s.pop();
	return this;
	$s.pop();
}
rg.ie.Visualization.prototype.setPath = function(path) {
	$s.push("rg.ie.Visualization::setPath");
	var $spos = $s.length;
	this.path = path;
	this._resetChart();
	this._refresh();
	$s.pop();
	return this;
	$s.pop();
}
rg.ie.Visualization.prototype.setEvent = function(event) {
	$s.push("rg.ie.Visualization::setEvent");
	var $spos = $s.length;
	this.event = event;
	this._resetChart();
	this._refresh();
	$s.pop();
	return this;
	$s.pop();
}
rg.ie.Visualization.prototype.setProperty = function(property,values,value) {
	$s.push("rg.ie.Visualization::setProperty");
	var $spos = $s.length;
	this.property = property;
	this.values = values;
	this.value = value;
	this._resetChart();
	this._refresh();
	$s.pop();
	return this;
	$s.pop();
}
rg.ie.Visualization.prototype._resetChart = function() {
	$s.push("rg.ie.Visualization::_resetChart");
	var $spos = $s.length;
	if(null == this.chart) {
		$s.pop();
		return;
	}
	this.chart.destroy();
	this.chart = null;
	this.chartChange();
	$s.pop();
}
rg.ie.Visualization.prototype._refresh = function() {
	$s.push("rg.ie.Visualization::_refresh");
	var $spos = $s.length;
	if(this._dirty) {
		$s.pop();
		return;
	}
	this._dirty = true;
	haxe.Timer.delay($closure(this,"refresh"),250);
	$s.pop();
}
rg.ie.Visualization.prototype.periodicity = null;
rg.ie.Visualization.prototype.start = null;
rg.ie.Visualization.prototype.end = null;
rg.ie.Visualization.prototype.startVis = null;
rg.ie.Visualization.prototype.endVis = null;
rg.ie.Visualization.prototype.seriesTotal = null;
rg.ie.Visualization.prototype.seriesCount = null;
rg.ie.Visualization.prototype._lastRequest = null;
rg.ie.Visualization.prototype._loading = null;
rg.ie.Visualization.prototype.refresh = function() {
	$s.push("rg.ie.Visualization::refresh");
	var $spos = $s.length;
	if(this._loading) {
		this._dirty = false;
		this._refresh();
		$s.pop();
		return;
	}
	var t = this.time.getDomain();
	this.startVis = t[0];
	this.endVis = t[1];
	var delta = this.endVis - this.startVis;
	this.periodicity = this.time.getGranularity();
	var s = Dates.snap(this.startVis - delta,this.periodicity);
	var e = Dates.snap(this.endVis + delta,this.periodicity);
	if("week" == this.periodicity) {
		s = Dates.snapToWeekDay(s,"monday");
		e = Dates.snapToWeekDay(e,"monday");
	}
	this.widetime.domain(s,e);
	this.widetime.granularity(this.periodicity);
	t = this.widetime.getDomain();
	this.start = t[0];
	this.end = t[1];
	this.seriesCount = 0;
	this.collectedData = [];
	if(null != this.value) {
		this.seriesTotal = 1;
		var options = { property : this.event + "." + this.property, value : this.value, start : this.start, end : this.end, periodicity : this.periodicity};
		var serialized = "1:" + Std.string(options);
		if(serialized != this._lastRequest) {
			this._lastRequest = serialized;
			this._loading = true;
			try {
				rg.js.ReportGrid.propertyValueSeries(this.path,options,(function(f,a1) {
					$s.push("rg.ie.Visualization::refresh@159");
					var $spos = $s.length;
					var $tmp = function(a2) {
						$s.push("rg.ie.Visualization::refresh@159@159");
						var $spos = $s.length;
						var $tmp = f(a1,a2);
						$s.pop();
						return $tmp;
						$s.pop();
					};
					$s.pop();
					return $tmp;
					$s.pop();
				})($closure(this,"chartTime2"),0));
			} catch( e1 ) {
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				haxe.Log.trace("error " + e1,{ fileName : "Visualization.hx", lineNumber : 162, className : "rg.ie.Visualization", methodName : "refresh"});
			}
		}
	} else if(null != this.values && this.values.length > 0) {
		this.seriesTotal = this.values.length + 1;
		var options = { property : this.event + "." + this.property, start : this.start, end : this.end, periodicity : this.periodicity};
		var serialized = "2:" + Std.string(options);
		if(serialized != this._lastRequest) {
			this._lastRequest = serialized;
			this._loading = true;
			rg.js.ReportGrid.propertySeries(this.path,options,(function(f,a1) {
				$s.push("rg.ie.Visualization::refresh@175");
				var $spos = $s.length;
				var $tmp = function(a2) {
					$s.push("rg.ie.Visualization::refresh@175@175");
					var $spos = $s.length;
					var $tmp = f(a1,a2);
					$s.pop();
					return $tmp;
					$s.pop();
				};
				$s.pop();
				return $tmp;
				$s.pop();
			})($closure(this,"chartTime2"),this.values.length));
			var _g1 = 0, _g = this.values.length;
			while(_g1 < _g) {
				var i = _g1++;
				var value = this.values[i];
				try {
					rg.js.ReportGrid.propertyValueSeries(this.path,{ property : this.event + "." + this.property, value : value, start : this.start, end : this.end, periodicity : this.periodicity},(function(f,a1) {
						$s.push("rg.ie.Visualization::refresh@182");
						var $spos = $s.length;
						var $tmp = function(a2) {
							$s.push("rg.ie.Visualization::refresh@182@182");
							var $spos = $s.length;
							var $tmp = f(a1,a2);
							$s.pop();
							return $tmp;
							$s.pop();
						};
						$s.pop();
						return $tmp;
						$s.pop();
					})($closure(this,"chartTime2"),i));
				} catch( e1 ) {
					$e = [];
					while($s.length >= $spos) $e.unshift($s.pop());
					$s.push($e[0]);
					haxe.Log.trace("error " + e1,{ fileName : "Visualization.hx", lineNumber : 185, className : "rg.ie.Visualization", methodName : "refresh"});
				}
			}
		}
	} else if(null != this.property) {
	} else if(null != this.event) {
	} else {
	}
	this._dirty = false;
	$s.pop();
}
rg.ie.Visualization.prototype.toString = function() {
	$s.push("rg.ie.Visualization::toString");
	var $spos = $s.length;
	var $tmp = "path: " + this.path + ", event: " + this.event + ", property: " + this.property + ", value: " + this.value + ", values: " + this.values.join(";");
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.ie.Visualization.prototype.collectedData = null;
rg.ie.Visualization.prototype.chartTime2 = function(id,series) {
	$s.push("rg.ie.Visualization::chartTime2");
	var $spos = $s.length;
	var data = Reflect.field(series,this.periodicity);
	this.collectedData[id] = data;
	this.seriesCount++;
	if(this.seriesCount < this.seriesTotal) {
		$s.pop();
		return;
	}
	var results = this.normalizeData(this.collectedData);
	this.chartTime(results);
	this._loading = false;
	$s.pop();
}
rg.ie.Visualization.prototype.chartTime = function(data) {
	$s.push("rg.ie.Visualization::chartTime");
	var $spos = $s.length;
	if(null == this.chart) {
		this.chart = new rg.ie.TimeChart(this._container,this._w,this._h).scaleX(this.time);
		this.chart.change = $closure(this,"_refresh");
		this.chartChange();
	}
	this.chart.data(new thx.geom.layout.Stack().stack(data));
	$s.pop();
}
rg.ie.Visualization.prototype.timeRange = function(data) {
	$s.push("rg.ie.Visualization::timeRange");
	var $spos = $s.length;
	var sd = null;
	var _g1 = 0, _g = data.length;
	while(_g1 < _g) {
		var i = _g1++;
		sd = data[i];
		if(null != sd) break; else data[i] = [];
	}
	if(null == sd || null == sd[0] || null == sd[0][0]) {
		haxe.Log.trace("invalid data",{ fileName : "Visualization.hx", lineNumber : 247, className : "rg.ie.Visualization", methodName : "timeRange"});
		haxe.Log.trace(data,{ fileName : "Visualization.hx", lineNumber : 248, className : "rg.ie.Visualization", methodName : "timeRange"});
		$s.pop();
		return null;
	}
	var s = sd[0][0], sample = s, d;
	switch(this.periodicity) {
	case "minute":
		while(sample > this.start) {
			s = sample;
			sample -= 60000;
		}
		break;
	case "hour":
		while(sample > this.start) {
			s = sample;
			sample -= 3600000;
		}
		break;
	case "day":
		while(sample > this.start) {
			s = sample;
			sample -= 86400000;
		}
		break;
	case "week":
		while(sample > this.start) {
			s = sample;
			sample -= 604800000;
		}
		break;
	case "month":
		while(sample > this.start) {
			s = sample;
			d = Date.fromTime(sample);
			sample = new Date(d.getFullYear(),d.getMonth() - 1,d.getDate(),d.getHours(),d.getMinutes(),d.getSeconds()).getTime();
		}
		break;
	case "year":
		while(sample > this.start) {
			s = sample;
			d = Date.fromTime(sample);
			sample = new Date(d.getFullYear() - 1,d.getMonth(),d.getDate(),d.getHours(),d.getMinutes(),d.getSeconds()).getTime();
		}
		break;
	}
	var results = [];
	sample = s;
	switch(this.periodicity) {
	case "minute":
		while(sample < this.end) {
			results.push(sample);
			sample += 60000;
		}
		break;
	case "hour":
		while(sample < this.end) {
			results.push(sample);
			sample += 3600000;
		}
		break;
	case "day":
		while(sample < this.end) {
			results.push(sample);
			sample += 86400000;
		}
		break;
	case "week":
		while(sample < this.end) {
			results.push(sample);
			sample += 604800000;
		}
		break;
	case "month":
		while(sample < this.end) {
			results.push(sample);
			d = Date.fromTime(sample);
			sample = new Date(d.getFullYear(),d.getMonth() + 1,d.getDate(),d.getHours(),d.getMinutes(),d.getSeconds()).getTime();
		}
		break;
	case "year":
		while(sample < this.end) {
			results.push(sample);
			d = Date.fromTime(sample);
			sample = new Date(d.getFullYear() + 1,d.getMonth(),d.getDate(),d.getHours(),d.getMinutes(),d.getSeconds()).getTime();
		}
		break;
	}
	$s.pop();
	return results;
	$s.pop();
}
rg.ie.Visualization.prototype.normalizeData = function(data) {
	$s.push("rg.ie.Visualization::normalizeData");
	var $spos = $s.length;
	var ticks = this.timeRange(data);
	if(null == ticks) ticks = this.time.timeTicks();
	var map = new Hash();
	var _g1 = 0, _g = ticks.length;
	while(_g1 < _g) {
		var i = _g1++;
		var tick = "" + ticks[i];
		map.set(tick,i);
	}
	var results = [];
	var _g1 = 0, _g = data.length;
	while(_g1 < _g) {
		var i = _g1++;
		var series = [];
		results.push(series);
		var _g3 = 0, _g2 = ticks.length;
		while(_g3 < _g2) {
			var j = _g3++;
			series.push({ x : ticks[j], y : 0.0});
		}
		var seq = data[i];
		if(null == seq) continue;
		var _g3 = 0, _g2 = seq.length;
		while(_g3 < _g2) {
			var j = _g3++;
			var pos = map.get("" + seq[j][0]);
			if(null == pos) {
				haxe.Log.trace("invalid match for " + seq[j] + " should be between " + ticks[0] + " and " + ticks[ticks.length - 1] + " for " + this.periodicity,{ fileName : "Visualization.hx", lineNumber : 374, className : "rg.ie.Visualization", methodName : "normalizeData"});
				continue;
			}
			series[pos].y = seq[j][1];
		}
	}
	var last = results[data.length - 1];
	var _g1 = 0, _g = data.length - 1;
	while(_g1 < _g) {
		var i = _g1++;
		var seq = data[i];
		if(null == seq) continue;
		var _g3 = 0, _g2 = seq.length;
		while(_g3 < _g2) {
			var j = _g3++;
			var pos = map.get("" + seq[j][0]);
			if(null == pos) continue;
			last[pos].y -= seq[j][1];
		}
	}
	if(results.length > 1) results.pop();
	$s.pop();
	return results;
	$s.pop();
}
rg.ie.Visualization.prototype.toggleStack = function() {
	$s.push("rg.ie.Visualization::toggleStack");
	var $spos = $s.length;
	if(null != this.chart) this.chart.toggleStack();
	$s.pop();
}
rg.ie.Visualization.prototype.__class__ = rg.ie.Visualization;
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
Floats.interpolate = function(f,a,b,equation) {
	$s.push("Floats::interpolate");
	var $spos = $s.length;
	if(b == null) b = 1.0;
	if(a == null) a = 0.0;
	if(null == equation) equation = thx.math.Equations.linear;
	var $tmp = a + equation(f) * (b - a);
	$s.pop();
	return $tmp;
	$s.pop();
}
Floats.interpolatef = function(a,b,equation) {
	$s.push("Floats::interpolatef");
	var $spos = $s.length;
	if(b == null) b = 1.0;
	if(a == null) a = 0.0;
	if(null == equation) equation = thx.math.Equations.linear;
	var d = b - a;
	var $tmp = function(f) {
		$s.push("Floats::interpolatef@106");
		var $spos = $s.length;
		var $tmp = a + equation(f) * d;
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
Floats.canParse = function(s) {
	$s.push("Floats::canParse");
	var $spos = $s.length;
	var $tmp = Floats._reparse.match(s);
	$s.pop();
	return $tmp;
	$s.pop();
}
Floats.parse = function(s) {
	$s.push("Floats::parse");
	var $spos = $s.length;
	if(s.substr(0,1) == "+") s = s.substr(1);
	var $tmp = Std.parseFloat(s);
	$s.pop();
	return $tmp;
	$s.pop();
}
Floats.compare = function(a,b) {
	$s.push("Floats::compare");
	var $spos = $s.length;
	var $tmp = a < b?-1:a > b?1:0;
	$s.pop();
	return $tmp;
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
if(!thx.collections) thx.collections = {}
thx.collections.Set = function(p) {
	if( p === $_ ) return;
	$s.push("thx.collections.Set::new");
	var $spos = $s.length;
	this._v = [];
	$s.pop();
}
thx.collections.Set.__name__ = ["thx","collections","Set"];
thx.collections.Set.ofArray = function(arr) {
	$s.push("thx.collections.Set::ofArray");
	var $spos = $s.length;
	var set = new thx.collections.Set();
	var _g = 0;
	while(_g < arr.length) {
		var item = arr[_g];
		++_g;
		set.add(item);
	}
	$s.pop();
	return set;
	$s.pop();
}
thx.collections.Set.prototype._v = null;
thx.collections.Set.prototype.add = function(v) {
	$s.push("thx.collections.Set::add");
	var $spos = $s.length;
	this._v.remove(v);
	this._v.push(v);
	$s.pop();
}
thx.collections.Set.prototype.remove = function(v) {
	$s.push("thx.collections.Set::remove");
	var $spos = $s.length;
	var $tmp = this._v.remove(v);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.collections.Set.prototype.exists = function(v) {
	$s.push("thx.collections.Set::exists");
	var $spos = $s.length;
	var _g = 0, _g1 = this._v;
	while(_g < _g1.length) {
		var t = _g1[_g];
		++_g;
		if(t == v) {
			$s.pop();
			return true;
		}
	}
	$s.pop();
	return false;
	$s.pop();
}
thx.collections.Set.prototype.iterator = function() {
	$s.push("thx.collections.Set::iterator");
	var $spos = $s.length;
	var $tmp = this._v.iterator();
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.collections.Set.prototype.array = function() {
	$s.push("thx.collections.Set::array");
	var $spos = $s.length;
	var $tmp = this._v.copy();
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.collections.Set.prototype.toString = function() {
	$s.push("thx.collections.Set::toString");
	var $spos = $s.length;
	var $tmp = "{" + this._v.join(", ") + "}";
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.collections.Set.prototype.__class__ = thx.collections.Set;
rg.layout.Disposition = { __ename__ : ["rg","layout","Disposition"], __constructs__ : ["Fixed","Variable","Fill","Floating"] }
rg.layout.Disposition.Fixed = function(size) { var $x = ["Fixed",0,size]; $x.__enum__ = rg.layout.Disposition; $x.toString = $estr; return $x; }
rg.layout.Disposition.Variable = function(percent,min,max) { var $x = ["Variable",1,percent,min,max]; $x.__enum__ = rg.layout.Disposition; $x.toString = $estr; return $x; }
rg.layout.Disposition.Fill = function(min,max) { var $x = ["Fill",2,min,max]; $x.__enum__ = rg.layout.Disposition; $x.toString = $estr; return $x; }
rg.layout.Disposition.Floating = function(x,y,width,height) { var $x = ["Floating",3,x,y,width,height]; $x.__enum__ = rg.layout.Disposition; $x.toString = $estr; return $x; }
rg.svg.Anchor = { __ename__ : ["rg","svg","Anchor"], __constructs__ : ["Top","Bottom","Left","Right"] }
rg.svg.Anchor.Top = ["Top",0];
rg.svg.Anchor.Top.toString = $estr;
rg.svg.Anchor.Top.__enum__ = rg.svg.Anchor;
rg.svg.Anchor.Bottom = ["Bottom",1];
rg.svg.Anchor.Bottom.toString = $estr;
rg.svg.Anchor.Bottom.__enum__ = rg.svg.Anchor;
rg.svg.Anchor.Left = ["Left",2];
rg.svg.Anchor.Left.toString = $estr;
rg.svg.Anchor.Left.__enum__ = rg.svg.Anchor;
rg.svg.Anchor.Right = ["Right",3];
rg.svg.Anchor.Right.toString = $estr;
rg.svg.Anchor.Right.__enum__ = rg.svg.Anchor;
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
	this._ease = thx.math.Ease.mode(thx.math.EaseMode.EaseInEaseOut,thx.math.Equations.cubic);
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
ReportGrid.insight = rg.InsightExplorer.insight;
{
	thx.color.NamedColors.byName = new Hash();
	thx.color.NamedColors.byName.set("aliceblue",thx.color.NamedColors.aliceblue = thx.color.Rgb.fromInt(15792383));
	thx.color.NamedColors.byName.set("alice blue",thx.color.NamedColors.aliceblue);
	thx.color.NamedColors.byName.set("antiquewhite",thx.color.NamedColors.antiquewhite = thx.color.Rgb.fromInt(16444375));
	thx.color.NamedColors.byName.set("antique white",thx.color.NamedColors.antiquewhite);
	thx.color.NamedColors.byName.set("aqua",thx.color.NamedColors.aqua = thx.color.Rgb.fromInt(65535));
	thx.color.NamedColors.byName.set("aquamarine",thx.color.NamedColors.aquamarine = thx.color.Rgb.fromInt(8388564));
	thx.color.NamedColors.byName.set("azure",thx.color.NamedColors.azure = thx.color.Rgb.fromInt(15794175));
	thx.color.NamedColors.byName.set("beige",thx.color.NamedColors.beige = thx.color.Rgb.fromInt(16119260));
	thx.color.NamedColors.byName.set("bisque",thx.color.NamedColors.bisque = thx.color.Rgb.fromInt(16770244));
	thx.color.NamedColors.byName.set("black",thx.color.NamedColors.black = thx.color.Rgb.fromInt(0));
	thx.color.NamedColors.byName.set("blanchedalmond",thx.color.NamedColors.blanchedalmond = thx.color.Rgb.fromInt(16772045));
	thx.color.NamedColors.byName.set("blanched almond",thx.color.NamedColors.blanchedalmond);
	thx.color.NamedColors.byName.set("blue",thx.color.NamedColors.blue = thx.color.Rgb.fromInt(255));
	thx.color.NamedColors.byName.set("blueviolet",thx.color.NamedColors.blueviolet = thx.color.Rgb.fromInt(9055202));
	thx.color.NamedColors.byName.set("blue violet",thx.color.NamedColors.blueviolet);
	thx.color.NamedColors.byName.set("brown",thx.color.NamedColors.brown = thx.color.Rgb.fromInt(10824234));
	thx.color.NamedColors.byName.set("burlywood",thx.color.NamedColors.burlywood = thx.color.Rgb.fromInt(14596231));
	thx.color.NamedColors.byName.set("burly wood",thx.color.NamedColors.burlywood);
	thx.color.NamedColors.byName.set("cadetblue",thx.color.NamedColors.cadetblue = thx.color.Rgb.fromInt(6266528));
	thx.color.NamedColors.byName.set("cadet blue",thx.color.NamedColors.cadetblue);
	thx.color.NamedColors.byName.set("chartreuse",thx.color.NamedColors.chartreuse = thx.color.Rgb.fromInt(8388352));
	thx.color.NamedColors.byName.set("chart reuse",thx.color.NamedColors.chartreuse);
	thx.color.NamedColors.byName.set("chocolate",thx.color.NamedColors.chocolate = thx.color.Rgb.fromInt(13789470));
	thx.color.NamedColors.byName.set("coral",thx.color.NamedColors.coral = thx.color.Rgb.fromInt(16744272));
	thx.color.NamedColors.byName.set("cornflowerblue",thx.color.NamedColors.cornflowerblue = thx.color.Rgb.fromInt(6591981));
	thx.color.NamedColors.byName.set("corn flower blue",thx.color.NamedColors.cornflowerblue);
	thx.color.NamedColors.byName.set("cornsilk",thx.color.NamedColors.cornsilk = thx.color.Rgb.fromInt(16775388));
	thx.color.NamedColors.byName.set("corn silk",thx.color.NamedColors.cornsilk);
	thx.color.NamedColors.byName.set("crimson",thx.color.NamedColors.crimson = thx.color.Rgb.fromInt(14423100));
	thx.color.NamedColors.byName.set("cyan",thx.color.NamedColors.cyan = thx.color.Rgb.fromInt(65535));
	thx.color.NamedColors.byName.set("darkblue",thx.color.NamedColors.darkblue = thx.color.Rgb.fromInt(139));
	thx.color.NamedColors.byName.set("dark blue",thx.color.NamedColors.darkblue);
	thx.color.NamedColors.byName.set("darkcyan",thx.color.NamedColors.darkcyan = thx.color.Rgb.fromInt(35723));
	thx.color.NamedColors.byName.set("dark cyan",thx.color.NamedColors.darkcyan);
	thx.color.NamedColors.byName.set("darkgoldenrod",thx.color.NamedColors.darkgoldenrod = thx.color.Rgb.fromInt(12092939));
	thx.color.NamedColors.byName.set("dark golden rod",thx.color.NamedColors.darkgoldenrod);
	thx.color.NamedColors.byName.set("darkgray",thx.color.NamedColors.darkgray = thx.color.NamedColors.darkgrey = thx.color.Rgb.fromInt(11119017));
	thx.color.NamedColors.byName.set("dark gray",thx.color.NamedColors.darkgray);
	thx.color.NamedColors.byName.set("darkgrey",thx.color.NamedColors.darkgrey);
	thx.color.NamedColors.byName.set("dark grey",thx.color.NamedColors.darkgrey);
	thx.color.NamedColors.byName.set("darkgreen",thx.color.NamedColors.darkgreen = thx.color.Rgb.fromInt(25600));
	thx.color.NamedColors.byName.set("dark green",thx.color.NamedColors.darkgreen);
	thx.color.NamedColors.byName.set("darkkhaki",thx.color.NamedColors.darkkhaki = thx.color.Rgb.fromInt(12433259));
	thx.color.NamedColors.byName.set("dark khaki",thx.color.NamedColors.darkkhaki);
	thx.color.NamedColors.byName.set("darkmagenta",thx.color.NamedColors.darkmagenta = thx.color.Rgb.fromInt(9109643));
	thx.color.NamedColors.byName.set("dark magenta",thx.color.NamedColors.darkmagenta);
	thx.color.NamedColors.byName.set("darkolivegreen",thx.color.NamedColors.darkolivegreen = thx.color.Rgb.fromInt(5597999));
	thx.color.NamedColors.byName.set("dark olive green",thx.color.NamedColors.darkolivegreen);
	thx.color.NamedColors.byName.set("darkorange",thx.color.NamedColors.darkorange = thx.color.Rgb.fromInt(16747520));
	thx.color.NamedColors.byName.set("dark orange",thx.color.NamedColors.darkorange);
	thx.color.NamedColors.byName.set("darkorchid",thx.color.NamedColors.darkorchid = thx.color.Rgb.fromInt(10040012));
	thx.color.NamedColors.byName.set("dark orchid",thx.color.NamedColors.darkorchid);
	thx.color.NamedColors.byName.set("darkred",thx.color.NamedColors.darkred = thx.color.Rgb.fromInt(9109504));
	thx.color.NamedColors.byName.set("dark red",thx.color.NamedColors.darkred);
	thx.color.NamedColors.byName.set("darksalmon",thx.color.NamedColors.darksalmon = thx.color.Rgb.fromInt(15308410));
	thx.color.NamedColors.byName.set("dark salmon",thx.color.NamedColors.darksalmon);
	thx.color.NamedColors.byName.set("darkseagreen",thx.color.NamedColors.darkseagreen = thx.color.Rgb.fromInt(9419919));
	thx.color.NamedColors.byName.set("dark sea green",thx.color.NamedColors.darkseagreen);
	thx.color.NamedColors.byName.set("darkslateblue",thx.color.NamedColors.darkslateblue = thx.color.Rgb.fromInt(4734347));
	thx.color.NamedColors.byName.set("dark slate blue",thx.color.NamedColors.darkslateblue);
	thx.color.NamedColors.byName.set("darkslategray",thx.color.NamedColors.darkslategray = thx.color.NamedColors.darkslategrey = thx.color.Rgb.fromInt(3100495));
	thx.color.NamedColors.byName.set("dark slate gray",thx.color.NamedColors.darkslategray);
	thx.color.NamedColors.byName.set("darkslategrey",thx.color.NamedColors.darkslategrey);
	thx.color.NamedColors.byName.set("dark slate grey",thx.color.NamedColors.darkslategrey);
	thx.color.NamedColors.byName.set("darkturquoise",thx.color.NamedColors.darkturquoise = thx.color.Rgb.fromInt(52945));
	thx.color.NamedColors.byName.set("dark turquoise",thx.color.NamedColors.darkturquoise);
	thx.color.NamedColors.byName.set("darkviolet",thx.color.NamedColors.darkviolet = thx.color.Rgb.fromInt(9699539));
	thx.color.NamedColors.byName.set("dark violet",thx.color.NamedColors.darkviolet);
	thx.color.NamedColors.byName.set("deeppink",thx.color.NamedColors.deeppink = thx.color.Rgb.fromInt(16716947));
	thx.color.NamedColors.byName.set("deep pink",thx.color.NamedColors.deeppink);
	thx.color.NamedColors.byName.set("deepskyblue",thx.color.NamedColors.deepskyblue = thx.color.Rgb.fromInt(49151));
	thx.color.NamedColors.byName.set("deep sky blue",thx.color.NamedColors.deepskyblue);
	thx.color.NamedColors.byName.set("dimgray",thx.color.NamedColors.dimgray = thx.color.NamedColors.dimgrey = thx.color.Rgb.fromInt(6908265));
	thx.color.NamedColors.byName.set("dim grey",thx.color.NamedColors.dimgrey);
	thx.color.NamedColors.byName.set("dimgrey",thx.color.NamedColors.dimgrey);
	thx.color.NamedColors.byName.set("dim grey",thx.color.NamedColors.dimgrey);
	thx.color.NamedColors.byName.set("dodgerblue",thx.color.NamedColors.dodgerblue = thx.color.Rgb.fromInt(2003199));
	thx.color.NamedColors.byName.set("dodger blue",thx.color.NamedColors.dodgerblue);
	thx.color.NamedColors.byName.set("firebrick",thx.color.NamedColors.firebrick = thx.color.Rgb.fromInt(11674146));
	thx.color.NamedColors.byName.set("fire brick",thx.color.NamedColors.firebrick);
	thx.color.NamedColors.byName.set("floralwhite",thx.color.NamedColors.floralwhite = thx.color.Rgb.fromInt(16775920));
	thx.color.NamedColors.byName.set("floral white",thx.color.NamedColors.floralwhite);
	thx.color.NamedColors.byName.set("forestgreen",thx.color.NamedColors.forestgreen = thx.color.Rgb.fromInt(2263842));
	thx.color.NamedColors.byName.set("forest green",thx.color.NamedColors.forestgreen);
	thx.color.NamedColors.byName.set("fuchsia",thx.color.NamedColors.fuchsia = thx.color.Rgb.fromInt(16711935));
	thx.color.NamedColors.byName.set("gainsboro",thx.color.NamedColors.gainsboro = thx.color.Rgb.fromInt(14474460));
	thx.color.NamedColors.byName.set("ghostwhite",thx.color.NamedColors.ghostwhite = thx.color.Rgb.fromInt(16316671));
	thx.color.NamedColors.byName.set("ghost white",thx.color.NamedColors.ghostwhite);
	thx.color.NamedColors.byName.set("gold",thx.color.NamedColors.gold = thx.color.Rgb.fromInt(16766720));
	thx.color.NamedColors.byName.set("goldenrod",thx.color.NamedColors.goldenrod = thx.color.Rgb.fromInt(14329120));
	thx.color.NamedColors.byName.set("golden rod",thx.color.NamedColors.goldenrod);
	thx.color.NamedColors.byName.set("gray",thx.color.NamedColors.gray = thx.color.NamedColors.grey = thx.color.Rgb.fromInt(8421504));
	thx.color.NamedColors.byName.set("grey",thx.color.NamedColors.grey);
	thx.color.NamedColors.byName.set("green",thx.color.NamedColors.green = thx.color.Rgb.fromInt(32768));
	thx.color.NamedColors.byName.set("greenyellow",thx.color.NamedColors.greenyellow = thx.color.Rgb.fromInt(11403055));
	thx.color.NamedColors.byName.set("green yellow",thx.color.NamedColors.greenyellow);
	thx.color.NamedColors.byName.set("honeydew",thx.color.NamedColors.honeydew = thx.color.Rgb.fromInt(15794160));
	thx.color.NamedColors.byName.set("honey dew",thx.color.NamedColors.honeydew);
	thx.color.NamedColors.byName.set("hotpink",thx.color.NamedColors.hotpink = thx.color.Rgb.fromInt(16738740));
	thx.color.NamedColors.byName.set("hot pink",thx.color.NamedColors.hotpink);
	thx.color.NamedColors.byName.set("indianred",thx.color.NamedColors.indianred = thx.color.Rgb.fromInt(13458524));
	thx.color.NamedColors.byName.set("indian red",thx.color.NamedColors.indianred);
	thx.color.NamedColors.byName.set("indigo",thx.color.NamedColors.indigo = thx.color.Rgb.fromInt(4915330));
	thx.color.NamedColors.byName.set("ivory",thx.color.NamedColors.ivory = thx.color.Rgb.fromInt(16777200));
	thx.color.NamedColors.byName.set("khaki",thx.color.NamedColors.khaki = thx.color.Rgb.fromInt(15787660));
	thx.color.NamedColors.byName.set("lavender",thx.color.NamedColors.lavender = thx.color.Rgb.fromInt(15132410));
	thx.color.NamedColors.byName.set("lavenderblush",thx.color.NamedColors.lavenderblush = thx.color.Rgb.fromInt(16773365));
	thx.color.NamedColors.byName.set("lavender blush",thx.color.NamedColors.lavenderblush);
	thx.color.NamedColors.byName.set("lawngreen",thx.color.NamedColors.lawngreen = thx.color.Rgb.fromInt(8190976));
	thx.color.NamedColors.byName.set("lawn green",thx.color.NamedColors.lawngreen);
	thx.color.NamedColors.byName.set("lemonchiffon",thx.color.NamedColors.lemonchiffon = thx.color.Rgb.fromInt(16775885));
	thx.color.NamedColors.byName.set("lemon chiffon",thx.color.NamedColors.lemonchiffon);
	thx.color.NamedColors.byName.set("lightblue",thx.color.NamedColors.lightblue = thx.color.Rgb.fromInt(11393254));
	thx.color.NamedColors.byName.set("light blue",thx.color.NamedColors.lightblue);
	thx.color.NamedColors.byName.set("lightcoral",thx.color.NamedColors.lightcoral = thx.color.Rgb.fromInt(15761536));
	thx.color.NamedColors.byName.set("light coral",thx.color.NamedColors.lightcoral);
	thx.color.NamedColors.byName.set("lightcyan",thx.color.NamedColors.lightcyan = thx.color.Rgb.fromInt(14745599));
	thx.color.NamedColors.byName.set("light cyan",thx.color.NamedColors.lightcyan);
	thx.color.NamedColors.byName.set("lightgoldenrodyellow",thx.color.NamedColors.lightgoldenrodyellow = thx.color.Rgb.fromInt(16448210));
	thx.color.NamedColors.byName.set("light golden rod yellow",thx.color.NamedColors.lightgoldenrodyellow);
	thx.color.NamedColors.byName.set("lightgray",thx.color.NamedColors.lightgray = thx.color.NamedColors.lightgrey = thx.color.Rgb.fromInt(13882323));
	thx.color.NamedColors.byName.set("light gray",thx.color.NamedColors.lightgray);
	thx.color.NamedColors.byName.set("lightgrey",thx.color.NamedColors.lightgrey);
	thx.color.NamedColors.byName.set("light grey",thx.color.NamedColors.lightgrey);
	thx.color.NamedColors.byName.set("lightgreen",thx.color.NamedColors.lightgreen = thx.color.Rgb.fromInt(9498256));
	thx.color.NamedColors.byName.set("light green",thx.color.NamedColors.lightgreen);
	thx.color.NamedColors.byName.set("lightpink",thx.color.NamedColors.lightpink = thx.color.Rgb.fromInt(16758465));
	thx.color.NamedColors.byName.set("light pink",thx.color.NamedColors.lightpink);
	thx.color.NamedColors.byName.set("lightsalmon",thx.color.NamedColors.lightsalmon = thx.color.Rgb.fromInt(16752762));
	thx.color.NamedColors.byName.set("light salmon",thx.color.NamedColors.lightsalmon);
	thx.color.NamedColors.byName.set("lightseagreen",thx.color.NamedColors.lightseagreen = thx.color.Rgb.fromInt(2142890));
	thx.color.NamedColors.byName.set("light sea green",thx.color.NamedColors.lightseagreen);
	thx.color.NamedColors.byName.set("lightskyblue",thx.color.NamedColors.lightskyblue = thx.color.Rgb.fromInt(8900346));
	thx.color.NamedColors.byName.set("light sky blue",thx.color.NamedColors.lightskyblue);
	thx.color.NamedColors.byName.set("lightslategray",thx.color.NamedColors.lightslategray = thx.color.NamedColors.lightslategrey = thx.color.Rgb.fromInt(7833753));
	thx.color.NamedColors.byName.set("light slate gray",thx.color.NamedColors.lightslategray);
	thx.color.NamedColors.byName.set("lightslategrey",thx.color.NamedColors.lightslategrey);
	thx.color.NamedColors.byName.set("light slate grey",thx.color.NamedColors.lightslategrey);
	thx.color.NamedColors.byName.set("lightsteelblue",thx.color.NamedColors.lightsteelblue = thx.color.Rgb.fromInt(11584734));
	thx.color.NamedColors.byName.set("light steel blue",thx.color.NamedColors.lightsteelblue);
	thx.color.NamedColors.byName.set("lightyellow",thx.color.NamedColors.lightyellow = thx.color.Rgb.fromInt(16777184));
	thx.color.NamedColors.byName.set("light yellow",thx.color.NamedColors.lightyellow);
	thx.color.NamedColors.byName.set("lime",thx.color.NamedColors.lime = thx.color.Rgb.fromInt(65280));
	thx.color.NamedColors.byName.set("limegreen",thx.color.NamedColors.limegreen = thx.color.Rgb.fromInt(3329330));
	thx.color.NamedColors.byName.set("lime green",thx.color.NamedColors.limegreen);
	thx.color.NamedColors.byName.set("linen",thx.color.NamedColors.linen = thx.color.Rgb.fromInt(16445670));
	thx.color.NamedColors.byName.set("magenta",thx.color.NamedColors.magenta = thx.color.Rgb.fromInt(16711935));
	thx.color.NamedColors.byName.set("maroon",thx.color.NamedColors.maroon = thx.color.Rgb.fromInt(8388608));
	thx.color.NamedColors.byName.set("mediumaquamarine",thx.color.NamedColors.mediumaquamarine = thx.color.Rgb.fromInt(6737322));
	thx.color.NamedColors.byName.set("mediuma quamarine",thx.color.NamedColors.mediumaquamarine);
	thx.color.NamedColors.byName.set("mediumblue",thx.color.NamedColors.mediumblue = thx.color.Rgb.fromInt(205));
	thx.color.NamedColors.byName.set("medium blue",thx.color.NamedColors.mediumblue);
	thx.color.NamedColors.byName.set("mediumorchid",thx.color.NamedColors.mediumorchid = thx.color.Rgb.fromInt(12211667));
	thx.color.NamedColors.byName.set("medium orchid",thx.color.NamedColors.mediumorchid);
	thx.color.NamedColors.byName.set("mediumpurple",thx.color.NamedColors.mediumpurple = thx.color.Rgb.fromInt(9662683));
	thx.color.NamedColors.byName.set("medium purple",thx.color.NamedColors.mediumpurple);
	thx.color.NamedColors.byName.set("mediumseagreen",thx.color.NamedColors.mediumseagreen = thx.color.Rgb.fromInt(3978097));
	thx.color.NamedColors.byName.set("medium sea green",thx.color.NamedColors.mediumseagreen);
	thx.color.NamedColors.byName.set("mediumslateblue",thx.color.NamedColors.mediumslateblue = thx.color.Rgb.fromInt(8087790));
	thx.color.NamedColors.byName.set("medium slate blue",thx.color.NamedColors.mediumslateblue);
	thx.color.NamedColors.byName.set("mediumspringgreen",thx.color.NamedColors.mediumspringgreen = thx.color.Rgb.fromInt(64154));
	thx.color.NamedColors.byName.set("medium spring green",thx.color.NamedColors.mediumspringgreen);
	thx.color.NamedColors.byName.set("mediumturquoise",thx.color.NamedColors.mediumturquoise = thx.color.Rgb.fromInt(4772300));
	thx.color.NamedColors.byName.set("medium turquoise",thx.color.NamedColors.mediumturquoise);
	thx.color.NamedColors.byName.set("mediumvioletred",thx.color.NamedColors.mediumvioletred = thx.color.Rgb.fromInt(13047173));
	thx.color.NamedColors.byName.set("medium violet red",thx.color.NamedColors.mediumvioletred);
	thx.color.NamedColors.byName.set("midnightblue",thx.color.NamedColors.midnightblue = thx.color.Rgb.fromInt(1644912));
	thx.color.NamedColors.byName.set("midnight blue",thx.color.NamedColors.midnightblue);
	thx.color.NamedColors.byName.set("mintcream",thx.color.NamedColors.mintcream = thx.color.Rgb.fromInt(16121850));
	thx.color.NamedColors.byName.set("mint cream",thx.color.NamedColors.mintcream);
	thx.color.NamedColors.byName.set("mistyrose",thx.color.NamedColors.mistyrose = thx.color.Rgb.fromInt(16770273));
	thx.color.NamedColors.byName.set("misty rose",thx.color.NamedColors.mistyrose);
	thx.color.NamedColors.byName.set("moccasin",thx.color.NamedColors.moccasin = thx.color.Rgb.fromInt(16770229));
	thx.color.NamedColors.byName.set("navajowhite",thx.color.NamedColors.navajowhite = thx.color.Rgb.fromInt(16768685));
	thx.color.NamedColors.byName.set("navajo white",thx.color.NamedColors.navajowhite);
	thx.color.NamedColors.byName.set("navy",thx.color.NamedColors.navy = thx.color.Rgb.fromInt(128));
	thx.color.NamedColors.byName.set("oldlace",thx.color.NamedColors.oldlace = thx.color.Rgb.fromInt(16643558));
	thx.color.NamedColors.byName.set("old lace",thx.color.NamedColors.oldlace);
	thx.color.NamedColors.byName.set("olive",thx.color.NamedColors.olive = thx.color.Rgb.fromInt(8421376));
	thx.color.NamedColors.byName.set("olivedrab",thx.color.NamedColors.olivedrab = thx.color.Rgb.fromInt(7048739));
	thx.color.NamedColors.byName.set("olive drab",thx.color.NamedColors.olivedrab);
	thx.color.NamedColors.byName.set("orange",thx.color.NamedColors.orange = thx.color.Rgb.fromInt(16753920));
	thx.color.NamedColors.byName.set("orangered",thx.color.NamedColors.orangered = thx.color.Rgb.fromInt(16729344));
	thx.color.NamedColors.byName.set("orangered",thx.color.NamedColors.orangered);
	thx.color.NamedColors.byName.set("orchid",thx.color.NamedColors.orchid = thx.color.Rgb.fromInt(14315734));
	thx.color.NamedColors.byName.set("palegoldenrod",thx.color.NamedColors.palegoldenrod = thx.color.Rgb.fromInt(15657130));
	thx.color.NamedColors.byName.set("pale golden rod",thx.color.NamedColors.palegoldenrod);
	thx.color.NamedColors.byName.set("palegreen",thx.color.NamedColors.palegreen = thx.color.Rgb.fromInt(10025880));
	thx.color.NamedColors.byName.set("pale green",thx.color.NamedColors.palegreen);
	thx.color.NamedColors.byName.set("paleturquoise",thx.color.NamedColors.paleturquoise = thx.color.Rgb.fromInt(11529966));
	thx.color.NamedColors.byName.set("pale turquoise",thx.color.NamedColors.paleturquoise);
	thx.color.NamedColors.byName.set("palevioletred",thx.color.NamedColors.palevioletred = thx.color.Rgb.fromInt(14381203));
	thx.color.NamedColors.byName.set("pale violet red",thx.color.NamedColors.palevioletred);
	thx.color.NamedColors.byName.set("papayawhip",thx.color.NamedColors.papayawhip = thx.color.Rgb.fromInt(16773077));
	thx.color.NamedColors.byName.set("papaya whip",thx.color.NamedColors.papayawhip);
	thx.color.NamedColors.byName.set("peachpuff",thx.color.NamedColors.peachpuff = thx.color.Rgb.fromInt(16767673));
	thx.color.NamedColors.byName.set("peach puff",thx.color.NamedColors.peachpuff);
	thx.color.NamedColors.byName.set("peru",thx.color.NamedColors.peru = thx.color.Rgb.fromInt(13468991));
	thx.color.NamedColors.byName.set("pink",thx.color.NamedColors.pink = thx.color.Rgb.fromInt(16761035));
	thx.color.NamedColors.byName.set("plum",thx.color.NamedColors.plum = thx.color.Rgb.fromInt(14524637));
	thx.color.NamedColors.byName.set("powderblue",thx.color.NamedColors.powderblue = thx.color.Rgb.fromInt(11591910));
	thx.color.NamedColors.byName.set("powder blue",thx.color.NamedColors.powderblue);
	thx.color.NamedColors.byName.set("purple",thx.color.NamedColors.purple = thx.color.Rgb.fromInt(8388736));
	thx.color.NamedColors.byName.set("red",thx.color.NamedColors.red = thx.color.Rgb.fromInt(16711680));
	thx.color.NamedColors.byName.set("rosybrown",thx.color.NamedColors.rosybrown = thx.color.Rgb.fromInt(12357519));
	thx.color.NamedColors.byName.set("rosy brown",thx.color.NamedColors.rosybrown);
	thx.color.NamedColors.byName.set("royalblue",thx.color.NamedColors.royalblue = thx.color.Rgb.fromInt(4286945));
	thx.color.NamedColors.byName.set("royal blue",thx.color.NamedColors.royalblue);
	thx.color.NamedColors.byName.set("saddlebrown",thx.color.NamedColors.saddlebrown = thx.color.Rgb.fromInt(9127187));
	thx.color.NamedColors.byName.set("saddle brown",thx.color.NamedColors.saddlebrown);
	thx.color.NamedColors.byName.set("salmon",thx.color.NamedColors.salmon = thx.color.Rgb.fromInt(16416882));
	thx.color.NamedColors.byName.set("sandybrown",thx.color.NamedColors.sandybrown = thx.color.Rgb.fromInt(16032864));
	thx.color.NamedColors.byName.set("sandy brown",thx.color.NamedColors.sandybrown);
	thx.color.NamedColors.byName.set("seagreen",thx.color.NamedColors.seagreen = thx.color.Rgb.fromInt(3050327));
	thx.color.NamedColors.byName.set("sea green",thx.color.NamedColors.seagreen);
	thx.color.NamedColors.byName.set("seashell",thx.color.NamedColors.seashell = thx.color.Rgb.fromInt(16774638));
	thx.color.NamedColors.byName.set("sea shell",thx.color.NamedColors.seashell);
	thx.color.NamedColors.byName.set("sienna",thx.color.NamedColors.sienna = thx.color.Rgb.fromInt(10506797));
	thx.color.NamedColors.byName.set("silver",thx.color.NamedColors.silver = thx.color.Rgb.fromInt(12632256));
	thx.color.NamedColors.byName.set("skyblue",thx.color.NamedColors.skyblue = thx.color.Rgb.fromInt(8900331));
	thx.color.NamedColors.byName.set("sky blue",thx.color.NamedColors.skyblue);
	thx.color.NamedColors.byName.set("slateblue",thx.color.NamedColors.slateblue = thx.color.Rgb.fromInt(6970061));
	thx.color.NamedColors.byName.set("slate blue",thx.color.NamedColors.slateblue);
	thx.color.NamedColors.byName.set("slategray",thx.color.NamedColors.slategray = thx.color.NamedColors.slategrey = thx.color.Rgb.fromInt(7372944));
	thx.color.NamedColors.byName.set("slate gray",thx.color.NamedColors.slategray);
	thx.color.NamedColors.byName.set("slategrey",thx.color.NamedColors.slategrey);
	thx.color.NamedColors.byName.set("slate grey",thx.color.NamedColors.slategrey);
	thx.color.NamedColors.byName.set("snow",thx.color.NamedColors.snow = thx.color.Rgb.fromInt(16775930));
	thx.color.NamedColors.byName.set("springgreen",thx.color.NamedColors.springgreen = thx.color.Rgb.fromInt(65407));
	thx.color.NamedColors.byName.set("spring green",thx.color.NamedColors.springgreen);
	thx.color.NamedColors.byName.set("steelblue",thx.color.NamedColors.steelblue = thx.color.Rgb.fromInt(4620980));
	thx.color.NamedColors.byName.set("steel blue",thx.color.NamedColors.steelblue);
	thx.color.NamedColors.byName.set("tan",thx.color.NamedColors.tan = thx.color.Rgb.fromInt(13808780));
	thx.color.NamedColors.byName.set("teal",thx.color.NamedColors.teal = thx.color.Rgb.fromInt(32896));
	thx.color.NamedColors.byName.set("thistle",thx.color.NamedColors.thistle = thx.color.Rgb.fromInt(14204888));
	thx.color.NamedColors.byName.set("tomato",thx.color.NamedColors.tomato = thx.color.Rgb.fromInt(16737095));
	thx.color.NamedColors.byName.set("turquoise",thx.color.NamedColors.turquoise = thx.color.Rgb.fromInt(4251856));
	thx.color.NamedColors.byName.set("violet",thx.color.NamedColors.violet = thx.color.Rgb.fromInt(15631086));
	thx.color.NamedColors.byName.set("wheat",thx.color.NamedColors.wheat = thx.color.Rgb.fromInt(16113331));
	thx.color.NamedColors.byName.set("white",thx.color.NamedColors.white = thx.color.Rgb.fromInt(16777215));
	thx.color.NamedColors.byName.set("whitesmoke",thx.color.NamedColors.whitesmoke = thx.color.Rgb.fromInt(16119285));
	thx.color.NamedColors.byName.set("white smoke",thx.color.NamedColors.whitesmoke);
	thx.color.NamedColors.byName.set("yellow",thx.color.NamedColors.yellow = thx.color.Rgb.fromInt(16776960));
	thx.color.NamedColors.byName.set("yellowgreen",thx.color.NamedColors.yellowgreen = thx.color.Rgb.fromInt(10145074));
	thx.color.NamedColors.byName.set("yellow green",thx.color.NamedColors.yellowgreen);
}
var rg = rg || {}; rg.js = rg.js || {}; rg.js.ReportGrid = window.ReportGrid;
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
thx.translation.PluralForms.pluralRules = [function(n) {
	$s.push("StringTools::isEOF");
	var $spos = $s.length;
	$s.pop();
	return 0;
	$s.pop();
},function(n) {
	$s.push("StringTools::isEOF");
	var $spos = $s.length;
	var $tmp = n != 1?1:0;
	$s.pop();
	return $tmp;
	$s.pop();
},function(n) {
	$s.push("StringTools::isEOF");
	var $spos = $s.length;
	var $tmp = n > 1?1:0;
	$s.pop();
	return $tmp;
	$s.pop();
},function(n) {
	$s.push("StringTools::isEOF");
	var $spos = $s.length;
	var $tmp = n % 10 == 1 && n % 100 != 11?1:n != 0?2:0;
	$s.pop();
	return $tmp;
	$s.pop();
},function(n) {
	$s.push("StringTools::isEOF");
	var $spos = $s.length;
	var $tmp = n == 1?0:n == 2?1:2;
	$s.pop();
	return $tmp;
	$s.pop();
},function(n) {
	$s.push("StringTools::isEOF");
	var $spos = $s.length;
	var $tmp = n == 1?0:n == 0 || n % 100 > 0 && n % 100 < 20?1:2;
	$s.pop();
	return $tmp;
	$s.pop();
},function(n) {
	$s.push("StringTools::isEOF");
	var $spos = $s.length;
	var $tmp = n % 10 == 1 && n % 100 != 11?0:n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20)?2:1;
	$s.pop();
	return $tmp;
	$s.pop();
},function(n) {
	$s.push("StringTools::isEOF");
	var $spos = $s.length;
	var $tmp = n % 10 == 1 && n % 100 != 11?0:n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)?1:2;
	$s.pop();
	return $tmp;
	$s.pop();
},function(n) {
	$s.push("StringTools::isEOF");
	var $spos = $s.length;
	var $tmp = n == 1?0:n >= 2 && n <= 4?1:2;
	$s.pop();
	return $tmp;
	$s.pop();
},function(n) {
	$s.push("StringTools::isEOF");
	var $spos = $s.length;
	var $tmp = n == 1?0:n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)?1:2;
	$s.pop();
	return $tmp;
	$s.pop();
},function(n) {
	$s.push("StringTools::isEOF");
	var $spos = $s.length;
	var $tmp = n % 100 == 1?0:n % 100 == 2?1:n % 100 == 3 || n % 100 == 4?2:3;
	$s.pop();
	return $tmp;
	$s.pop();
},function(n) {
	$s.push("StringTools::isEOF");
	var $spos = $s.length;
	var $tmp = n == 1?0:n == 2?1:n >= 3 && n <= 6?2:n >= 7 && n <= 10?3:4;
	$s.pop();
	return $tmp;
	$s.pop();
},function(n) {
	$s.push("StringTools::isEOF");
	var $spos = $s.length;
	var $tmp = n == 1?0:n == 2?1:n <= 10?2:3;
	$s.pop();
	return $tmp;
	$s.pop();
},function(n) {
	$s.push("StringTools::isEOF");
	var $spos = $s.length;
	var $tmp = n == 1?0:n == 0 || n % 100 > 0 && n % 100 <= 10?1:n % 100 > 10 && n % 100 < 20?2:3;
	$s.pop();
	return $tmp;
	$s.pop();
},function(n) {
	$s.push("StringTools::isEOF");
	var $spos = $s.length;
	var $tmp = n % 10 == 1?0:n % 10 == 2?1:2;
	$s.pop();
	return $tmp;
	$s.pop();
}];
thx.translation.PluralForms.pluralForms = [1,2,2,3,3,3,3,3,3,3,4,5,4,4,3];
thx.translation.PluralForms.pluralRulesDescriptions = ["0","n!=1?1:0","n>1?1:0","n%10==1&&n%100!=11?1:n!=0?2:0","n==1?0:n==2?1:2","n==1?0:n==0||n%100>0&&n%100<20?1:2","n%10==1&&n%100!=11?0:n%10>=2&&(n%100<10||n%100>=20)?2:1","n%10==1&&n%100!=11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2","n==1?0:n>=2&&n<=4?1:2","n==1?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2","n%100==1?0:n%100==2?1:n%100==3||n%100==4?2:3","n==1?0:n==2?1:n>=3&&n<=6?2:n>=7&&n<=10?3:4","n==1?0:n==2?1:n<=10?2:3","n==1?0:n==0||n%100>0&&n%100<=10?1:n%100>10&&n%100<20?2:3","n%10==1?0:n%10==2?1:2"];
rg.svg.SvgPanel.transitionTime = 500;
rg.svg.SvgScaleTick.defaultTickLength = 6;
rg.svg.SvgScaleTick.defaultTickPadding = 2;
js.Lib.onerror = null;
thx.js.Svg._usepage = new EReg("WebKit","").match(js.Lib.window.navigator.userAgent);
rg.svg.SvgBarChart.defaultBarWidth = 0.8;
rg.svg.SvgBarChart._pathid = 0;
Ints._reparse = new EReg("^(\\+|-)?\\d+$","");
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
Dates._reparse = new EReg("^\\d{4}-\\d\\d-\\d\\d(( |T)\\d\\d:\\d\\d:\\d\\d(.\\d{1,3})?)?$","");
haxe.Timer.arr = new Array();
thx.math.scale.LinearTime.validPeriods = ["minute","hour","day","week","month","year"];
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
rg.svg.SvgLineChart._pathid = 0;
DateTools.DAYS_OF_MONTH = [31,28,31,30,31,30,31,31,30,31,30,31];
rg.svg.SvgScaleLabel.defaultTextHeight = 12;
rg.svg.SvgScaleLabel.defaultTextPadding = 2;
Objects._reCheckKeyIsColor = new EReg("color\\b|\\bbackground\\b|\\bstroke\\b|\\bfill\\b","");
Floats._reparse = new EReg("^(\\+|-)?\\d+(\\.\\d+)?(e-?\\d+)?$","");
thx.math.Const.TWO_PI = 6.283185307179586477;
thx.math.Const.PI = 3.141592653589793238;
thx.math.Const.HALF_PI = 1.570796326794896619;
thx.math.Const.TO_DEGREE = 57.29577951308232088;
thx.math.Const.TO_RADIAN = 0.01745329251994329577;
thx.math.Const.LN10 = 2.302585092994046;
thx.js.Timer.timeout = 0;
thx.js.Timer.queue = null;
thx.js.Timer.interval = 0;
thx.js.Timer._step = thx.js.Timer.step;
thx.js.BaseTransition._id = 0;
thx.js.BaseTransition._inheritid = 0;
thx.js.behavior.Zoom.last = 0.0;
