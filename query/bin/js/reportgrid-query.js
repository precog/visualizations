var $_, $hxClasses = $hxClasses || {}, $estr = function() { return js.Boot.__string_rec(this,''); }
function $extend(from, fields) {
	function inherit() {}; inherit.prototype = from; var proto = new inherit();
	for (var name in fields) proto[name] = fields[name];
	return proto;
}
var thx = thx || {}
if(!thx.color) thx.color = {}
thx.color.Rgb = $hxClasses["thx.color.Rgb"] = function(r,g,b) {
	this.red = Ints.clamp(r,0,255);
	this.green = Ints.clamp(g,0,255);
	this.blue = Ints.clamp(b,0,255);
}
thx.color.Rgb.__name__ = ["thx","color","Rgb"];
thx.color.Rgb.fromFloats = function(r,g,b) {
	return new thx.color.Rgb(Ints.interpolate(r,0,255,null),Ints.interpolate(g,0,255,null),Ints.interpolate(b,0,255,null));
}
thx.color.Rgb.fromInt = function(v) {
	return new thx.color.Rgb(v >> 16 & 255,v >> 8 & 255,v & 255);
}
thx.color.Rgb.equals = function(a,b) {
	return a.red == b.red && a.green == b.green && a.blue == b.blue;
}
thx.color.Rgb.darker = function(color,t,equation) {
	return new thx.color.Rgb(Ints.interpolate(t,color.red,0,equation),Ints.interpolate(t,color.green,0,equation),Ints.interpolate(t,color.blue,0,equation));
}
thx.color.Rgb.lighter = function(color,t,equation) {
	return new thx.color.Rgb(Ints.interpolate(t,color.red,255,equation),Ints.interpolate(t,color.green,255,equation),Ints.interpolate(t,color.blue,255,equation));
}
thx.color.Rgb.interpolate = function(a,b,t,equation) {
	return new thx.color.Rgb(Ints.interpolate(t,a.red,b.red,equation),Ints.interpolate(t,a.green,b.green,equation),Ints.interpolate(t,a.blue,b.blue,equation));
}
thx.color.Rgb.interpolatef = function(a,b,equation) {
	var r = Ints.interpolatef(a.red,b.red,equation), g = Ints.interpolatef(a.green,b.green,equation), b1 = Ints.interpolatef(a.blue,b.blue,equation);
	return function(t) {
		return new thx.color.Rgb(r(t),g(t),b1(t));
	};
}
thx.color.Rgb.contrast = function(c) {
	var nc = thx.color.Hsl.toHsl(c);
	if(nc.lightness < .5) return new thx.color.Hsl(nc.hue,nc.saturation,nc.lightness + 0.5); else return new thx.color.Hsl(nc.hue,nc.saturation,nc.lightness - 0.5);
}
thx.color.Rgb.contrastBW = function(c) {
	var g = thx.color.Grey.toGrey(c);
	var nc = thx.color.Hsl.toHsl(c);
	if(g.grey < .5) return new thx.color.Hsl(nc.hue,nc.saturation,1.0); else return new thx.color.Hsl(nc.hue,nc.saturation,0);
}
thx.color.Rgb.interpolateBrightness = function(t,equation) {
	return (thx.color.Rgb.interpolateBrightnessf(equation))(t);
}
thx.color.Rgb.interpolateBrightnessf = function(equation) {
	var i = Ints.interpolatef(0,255,equation);
	return function(t) {
		var g = i(t);
		return new thx.color.Rgb(g,g,g);
	};
}
thx.color.Rgb.interpolateHeat = function(t,middle,equation) {
	return (thx.color.Rgb.interpolateHeatf(middle,equation))(t);
}
thx.color.Rgb.interpolateHeatf = function(middle,equation) {
	return thx.color.Rgb.interpolateStepsf([new thx.color.Rgb(0,0,0),null != middle?middle:new thx.color.Rgb(255,127,0),new thx.color.Rgb(255,255,255)],equation);
}
thx.color.Rgb.interpolateRainbow = function(t,equation) {
	return (thx.color.Rgb.interpolateRainbowf(equation))(t);
}
thx.color.Rgb.interpolateRainbowf = function(equation) {
	return thx.color.Rgb.interpolateStepsf([new thx.color.Rgb(0,0,255),new thx.color.Rgb(0,255,255),new thx.color.Rgb(0,255,0),new thx.color.Rgb(255,255,0),new thx.color.Rgb(255,0,0)],equation);
}
thx.color.Rgb.interpolateStepsf = function(steps,equation) {
	if(steps.length <= 0) return (function($this) {
		var $r;
		throw new thx.error.Error("invalid number of steps",null,null,{ fileName : "Rgb.hx", lineNumber : 164, className : "thx.color.Rgb", methodName : "interpolateStepsf"});
		return $r;
	}(this)); else if(steps.length == 1) return function(t) {
		return steps[0];
	}; else if(steps.length == 2) return thx.color.Rgb.interpolatef(steps[0],steps[1],equation);
	var len = steps.length - 1, step = 1 / len, f = [];
	var _g = 0;
	while(_g < len) {
		var i = _g++;
		f[i] = thx.color.Rgb.interpolatef(steps[i],steps[i + 1]);
	}
	return function(t) {
		if(t < 0) t = 0; else if(t > 1) t = 1;
		var pos = t == 1?len - 1:Math.floor(t / step);
		return f[pos](len * (t - pos * step));
	};
}
thx.color.Rgb.prototype = {
	blue: null
	,green: null
	,red: null
	,'int': function() {
		return (this.red & 255) << 16 | (this.green & 255) << 8 | this.blue & 255;
	}
	,hex: function(prefix) {
		if(prefix == null) prefix = "";
		return prefix + StringTools.hex(this.red,2) + StringTools.hex(this.green,2) + StringTools.hex(this.blue,2);
	}
	,toCss: function() {
		return this.hex("#");
	}
	,toRgbString: function() {
		return "rgb(" + this.red + "," + this.green + "," + this.blue + ")";
	}
	,toString: function() {
		return this.toRgbString();
	}
	,__class__: thx.color.Rgb
}
thx.color.Hsl = $hxClasses["thx.color.Hsl"] = function(h,s,l) {
	this.hue = h = Floats.circularWrap(h,360);
	this.saturation = s = Floats.normalize(s);
	this.lightness = l = Floats.normalize(l);
	thx.color.Rgb.call(this,Ints.interpolate(thx.color.Hsl._c(h + 120,s,l),0,255,null),Ints.interpolate(thx.color.Hsl._c(h,s,l),0,255,null),Ints.interpolate(thx.color.Hsl._c(h - 120,s,l),0,255,null));
}
thx.color.Hsl.__name__ = ["thx","color","Hsl"];
thx.color.Hsl._c = function(d,s,l) {
	var m2 = l <= 0.5?l * (1 + s):l + s - l * s;
	var m1 = 2 * l - m2;
	d = Floats.circularWrap(d,360);
	if(d < 60) return m1 + (m2 - m1) * d / 60; else if(d < 180) return m2; else if(d < 240) return m1 + (m2 - m1) * (240 - d) / 60; else return m1;
}
thx.color.Hsl.toHsl = function(c) {
	var r = c.red / 255.0;
	var g = c.green / 255.0, b = c.blue / 255.0, min = Floats.min(r < g?r:g,b), max = Floats.max(r > g?r:g,b), delta = max - min, h, s, l = (max + min) / 2;
	if(delta == 0.0) s = h = 0.0; else {
		s = l < 0.5?delta / (max + min):delta / (2 - max - min);
		if(r == max) h = (g - b) / delta + (g < b?6:0); else if(g == max) h = (b - r) / delta + 2; else h = (r - g) / delta + 4;
		h *= 60;
	}
	return new thx.color.Hsl(h,s,l);
}
thx.color.Hsl.equals = function(a,b) {
	return a.hue == b.hue && a.saturation == b.saturation && a.lightness == b.lightness;
}
thx.color.Hsl.darker = function(color,t,equation) {
	return new thx.color.Hsl(color.hue,color.saturation,Floats.interpolate(t,color.lightness,0,equation));
}
thx.color.Hsl.lighter = function(color,t,equation) {
	return new thx.color.Hsl(color.hue,color.saturation,Floats.interpolate(t,color.lightness,1,equation));
}
thx.color.Hsl.interpolate = function(a,b,t,equation) {
	return new thx.color.Hsl(Floats.interpolate(t,a.hue,b.hue,equation),Floats.interpolate(t,a.saturation,b.saturation,equation),Floats.interpolate(t,a.lightness,b.lightness,equation));
}
thx.color.Hsl.interpolatef = function(a,b,equation) {
	return function(t) {
		return new thx.color.Hsl(Floats.interpolate(t,a.hue,b.hue,equation),Floats.interpolate(t,a.saturation,b.saturation,equation),Floats.interpolate(t,a.lightness,b.lightness,equation));
	};
}
thx.color.Hsl.__super__ = thx.color.Rgb;
thx.color.Hsl.prototype = $extend(thx.color.Rgb.prototype,{
	hue: null
	,saturation: null
	,lightness: null
	,toHslString: function() {
		return "hsl(" + this.hue + "," + this.saturation * 100 + "%," + this.lightness * 100 + "%)";
	}
	,__class__: thx.color.Hsl
});
var rg = rg || {}
if(!rg.data) rg.data = {}
if(!rg.data.reportgrid) rg.data.reportgrid = {}
rg.data.reportgrid.IExecutorReportGrid = $hxClasses["rg.data.reportgrid.IExecutorReportGrid"] = function() { }
rg.data.reportgrid.IExecutorReportGrid.__name__ = ["rg","data","reportgrid","IExecutorReportGrid"];
rg.data.reportgrid.IExecutorReportGrid.prototype = {
	children: null
	,propertyCount: null
	,propertySeries: null
	,propertyMeans: null
	,propertyStandardDeviations: null
	,propertyValues: null
	,propertyValueCount: null
	,propertyValueSeries: null
	,searchCount: null
	,searchSeries: null
	,intersect: null
	,histogram: null
	,propertiesHistogram: null
	,__class__: rg.data.reportgrid.IExecutorReportGrid
}
var Types = $hxClasses["Types"] = function() { }
Types.__name__ = ["Types"];
Types.className = function(o) {
	return Type.getClassName(Type.getClass(o)).split(".").pop();
}
Types.fullName = function(o) {
	return Type.getClassName(Type.getClass(o));
}
Types.typeName = function(o) {
	return (function($this) {
		var $r;
		var $e = (Type["typeof"](o));
		switch( $e[1] ) {
		case 0:
			$r = "null";
			break;
		case 1:
			$r = "Int";
			break;
		case 2:
			$r = "Float";
			break;
		case 3:
			$r = "Bool";
			break;
		case 5:
			$r = "function";
			break;
		case 6:
			var c = $e[2];
			$r = Type.getClassName(c);
			break;
		case 7:
			var e = $e[2];
			$r = Type.getEnumName(e);
			break;
		case 4:
			$r = "Object";
			break;
		case 8:
			$r = "Unknown";
			break;
		}
		return $r;
	}(this));
}
Types.hasSuperClass = function(type,sup) {
	while(null != type) {
		if(type == sup) return true;
		type = Type.getSuperClass(type);
	}
	return false;
}
Types.isAnonymous = function(v) {
	return Reflect.isObject(v) && null == Type.getClass(v);
}
Types["as"] = function(value,type) {
	return Std["is"](value,type)?value:null;
}
Types.ifIs = function(value,type,handler) {
	if(Std["is"](value,type)) handler(value);
	return value;
}
Types.of = function(type,value) {
	return Std["is"](value,type)?value:null;
}
Types.sameType = function(a,b) {
	if(null == a && b == null) return true;
	if(null == a || b == null) return false;
	var tb = Type["typeof"](b);
	var $e = (tb);
	switch( $e[1] ) {
	case 6:
		var c = $e[2];
		return Std["is"](a,c);
	case 7:
		var e = $e[2];
		return Std["is"](a,e);
	default:
		return Type["typeof"](a) == tb;
	}
}
Types.isPrimitive = function(v) {
	return (function($this) {
		var $r;
		var $e = (Type["typeof"](v));
		switch( $e[1] ) {
		case 0:
		case 1:
		case 2:
		case 3:
			$r = true;
			break;
		case 5:
		case 7:
		case 4:
		case 8:
			$r = false;
			break;
		case 6:
			var c = $e[2];
			$r = Type.getClassName(c) == "String";
			break;
		}
		return $r;
	}(this));
}
Types.prototype = {
	__class__: Types
}
if(!thx.culture) thx.culture = {}
thx.culture.Info = $hxClasses["thx.culture.Info"] = function() { }
thx.culture.Info.__name__ = ["thx","culture","Info"];
thx.culture.Info.prototype = {
	name: null
	,'native': null
	,english: null
	,iso2: null
	,iso3: null
	,pluralRule: null
	,toString: function() {
		return this["native"] + " (" + this.english + ")";
	}
	,__class__: thx.culture.Info
}
thx.culture.Culture = $hxClasses["thx.culture.Culture"] = function() { }
thx.culture.Culture.__name__ = ["thx","culture","Culture"];
thx.culture.Culture.__properties__ = {set_defaultCulture:"setDefaultCulture",get_defaultCulture:"getDefaultCulture",get_cultures:"getCultures"}
thx.culture.Culture.cultures = null;
thx.culture.Culture.getCultures = function() {
	if(null == thx.culture.Culture.cultures) thx.culture.Culture.cultures = new Hash();
	return thx.culture.Culture.cultures;
}
thx.culture.Culture.get = function(name) {
	return thx.culture.Culture.getCultures().get(name.toLowerCase());
}
thx.culture.Culture.names = function() {
	return thx.culture.Culture.getCultures().keys();
}
thx.culture.Culture.exists = function(culture) {
	return thx.culture.Culture.getCultures().exists(culture.toLowerCase());
}
thx.culture.Culture._defaultCulture = null;
thx.culture.Culture.defaultCulture = null;
thx.culture.Culture.getDefaultCulture = function() {
	if(null == thx.culture.Culture._defaultCulture) return thx.cultures.EnUS.getCulture(); else return thx.culture.Culture._defaultCulture;
}
thx.culture.Culture.setDefaultCulture = function(culture) {
	return thx.culture.Culture._defaultCulture = culture;
}
thx.culture.Culture.add = function(culture) {
	if(null == thx.culture.Culture._defaultCulture) thx.culture.Culture._defaultCulture = culture;
	var name = culture.name.toLowerCase();
	if(!thx.culture.Culture.getCultures().exists(name)) thx.culture.Culture.getCultures().set(name,culture);
}
thx.culture.Culture.loadAll = function() {
}
thx.culture.Culture.__super__ = thx.culture.Info;
thx.culture.Culture.prototype = $extend(thx.culture.Info.prototype,{
	language: null
	,date: null
	,englishCurrency: null
	,nativeCurrency: null
	,currencySymbol: null
	,currencyIso: null
	,englishRegion: null
	,nativeRegion: null
	,isMetric: null
	,digits: null
	,signNeg: null
	,signPos: null
	,symbolNaN: null
	,symbolPercent: null
	,symbolPermille: null
	,symbolNegInf: null
	,symbolPosInf: null
	,number: null
	,currency: null
	,percent: null
	,__class__: thx.culture.Culture
});
thx.culture.Language = $hxClasses["thx.culture.Language"] = function() { }
thx.culture.Language.__name__ = ["thx","culture","Language"];
thx.culture.Language.__properties__ = {get_languages:"getLanguages"}
thx.culture.Language.languages = null;
thx.culture.Language.getLanguages = function() {
	if(null == thx.culture.Language.languages) thx.culture.Language.languages = new Hash();
	return thx.culture.Language.languages;
}
thx.culture.Language.get = function(name) {
	return thx.culture.Language.getLanguages().get(name.toLowerCase());
}
thx.culture.Language.names = function() {
	return thx.culture.Language.getLanguages().keys();
}
thx.culture.Language.add = function(language) {
	if(!thx.culture.Language.getLanguages().exists(language.iso2)) thx.culture.Language.getLanguages().set(language.iso2,language);
}
thx.culture.Language.__super__ = thx.culture.Info;
thx.culture.Language.prototype = $extend(thx.culture.Info.prototype,{
	__class__: thx.culture.Language
});
var Hash = $hxClasses["Hash"] = function() {
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
}
Hash.__name__ = ["Hash"];
Hash.prototype = {
	h: null
	,set: function(key,value) {
		this.h["$" + key] = value;
	}
	,get: function(key) {
		return this.h["$" + key];
	}
	,exists: function(key) {
		try {
			key = "$" + key;
			return this.hasOwnProperty.call(this.h,key);
		} catch( e ) {
			for(var i in this.h) if( i == key ) return true;
			return false;
		}
	}
	,remove: function(key) {
		if(!this.exists(key)) return false;
		delete(this.h["$" + key]);
		return true;
	}
	,keys: function() {
		var a = new Array();
		for(var i in this.h) a.push(i.substr(1));
		return a.iterator();
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref["$" + i];
		}};
	}
	,toString: function() {
		var s = new StringBuf();
		s.b[s.b.length] = "{";
		var it = this.keys();
		while( it.hasNext() ) {
			var i = it.next();
			s.b[s.b.length] = i == null?"null":i;
			s.b[s.b.length] = " => ";
			s.add(Std.string(this.get(i)));
			if(it.hasNext()) s.b[s.b.length] = ", ";
		}
		s.b[s.b.length] = "}";
		return s.b.join("");
	}
	,__class__: Hash
}
if(!thx.languages) thx.languages = {}
thx.languages.En = $hxClasses["thx.languages.En"] = function() {
	this.name = "en";
	this.english = "English";
	this["native"] = "English";
	this.iso2 = "en";
	this.iso3 = "eng";
	this.pluralRule = 1;
	thx.culture.Language.add(this);
}
thx.languages.En.__name__ = ["thx","languages","En"];
thx.languages.En.__properties__ = {get_language:"getLanguage"}
thx.languages.En.language = null;
thx.languages.En.getLanguage = function() {
	if(null == thx.languages.En.language) thx.languages.En.language = new thx.languages.En();
	return thx.languages.En.language;
}
thx.languages.En.__super__ = thx.culture.Language;
thx.languages.En.prototype = $extend(thx.culture.Language.prototype,{
	__class__: thx.languages.En
});
if(!thx.culture.core) thx.culture.core = {}
thx.culture.core.DateTimeInfo = $hxClasses["thx.culture.core.DateTimeInfo"] = function(months,abbrMonths,days,abbrDays,shortDays,am,pm,separatorDate,separatorTime,firstWeekDay,patternYearMonth,patternMonthDay,patternDate,patternDateShort,patternDateRfc,patternDateTime,patternUniversal,patternSortable,patternTime,patternTimeShort) {
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
}
thx.culture.core.DateTimeInfo.__name__ = ["thx","culture","core","DateTimeInfo"];
thx.culture.core.DateTimeInfo.prototype = {
	months: null
	,abbrMonths: null
	,days: null
	,abbrDays: null
	,shortDays: null
	,am: null
	,pm: null
	,separatorDate: null
	,separatorTime: null
	,firstWeekDay: null
	,patternYearMonth: null
	,patternMonthDay: null
	,patternDate: null
	,patternDateShort: null
	,patternDateRfc: null
	,patternDateTime: null
	,patternUniversal: null
	,patternSortable: null
	,patternTime: null
	,patternTimeShort: null
	,__class__: thx.culture.core.DateTimeInfo
}
thx.culture.core.NumberInfo = $hxClasses["thx.culture.core.NumberInfo"] = function(decimals,decimalsSeparator,groups,groupsSeparator,patternNegative,patternPositive) {
	this.decimals = decimals;
	this.decimalsSeparator = decimalsSeparator;
	this.groups = groups;
	this.groupsSeparator = groupsSeparator;
	this.patternNegative = patternNegative;
	this.patternPositive = patternPositive;
}
thx.culture.core.NumberInfo.__name__ = ["thx","culture","core","NumberInfo"];
thx.culture.core.NumberInfo.prototype = {
	decimals: null
	,decimalsSeparator: null
	,groups: null
	,groupsSeparator: null
	,patternNegative: null
	,patternPositive: null
	,__class__: thx.culture.core.NumberInfo
}
if(!thx.cultures) thx.cultures = {}
thx.cultures.EnUS = $hxClasses["thx.cultures.EnUS"] = function() {
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
}
thx.cultures.EnUS.__name__ = ["thx","cultures","EnUS"];
thx.cultures.EnUS.__properties__ = {get_culture:"getCulture"}
thx.cultures.EnUS.culture = null;
thx.cultures.EnUS.getCulture = function() {
	if(null == thx.cultures.EnUS.culture) thx.cultures.EnUS.culture = new thx.cultures.EnUS();
	return thx.cultures.EnUS.culture;
}
thx.cultures.EnUS.__super__ = thx.culture.Culture;
thx.cultures.EnUS.prototype = $extend(thx.culture.Culture.prototype,{
	__class__: thx.cultures.EnUS
});
var List = $hxClasses["List"] = function() {
	this.length = 0;
}
List.__name__ = ["List"];
List.prototype = {
	h: null
	,q: null
	,length: null
	,add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,push: function(item) {
		var x = [item,this.h];
		this.h = x;
		if(this.q == null) this.q = x;
		this.length++;
	}
	,first: function() {
		return this.h == null?null:this.h[0];
	}
	,last: function() {
		return this.q == null?null:this.q[0];
	}
	,pop: function() {
		if(this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		if(this.h == null) this.q = null;
		this.length--;
		return x;
	}
	,isEmpty: function() {
		return this.h == null;
	}
	,clear: function() {
		this.h = null;
		this.q = null;
		this.length = 0;
	}
	,remove: function(v) {
		var prev = null;
		var l = this.h;
		while(l != null) {
			if(l[0] == v) {
				if(prev == null) this.h = l[1]; else prev[1] = l[1];
				if(this.q == l) this.q = prev;
				this.length--;
				return true;
			}
			prev = l;
			l = l[1];
		}
		return false;
	}
	,iterator: function() {
		return { h : this.h, hasNext : function() {
			return this.h != null;
		}, next : function() {
			if(this.h == null) return null;
			var x = this.h[0];
			this.h = this.h[1];
			return x;
		}};
	}
	,toString: function() {
		var s = new StringBuf();
		var first = true;
		var l = this.h;
		s.b[s.b.length] = "{";
		while(l != null) {
			if(first) first = false; else s.b[s.b.length] = ", ";
			s.add(Std.string(l[0]));
			l = l[1];
		}
		s.b[s.b.length] = "}";
		return s.b.join("");
	}
	,join: function(sep) {
		var s = new StringBuf();
		var first = true;
		var l = this.h;
		while(l != null) {
			if(first) first = false; else s.b[s.b.length] = sep == null?"null":sep;
			s.add(l[0]);
			l = l[1];
		}
		return s.b.join("");
	}
	,filter: function(f) {
		var l2 = new List();
		var l = this.h;
		while(l != null) {
			var v = l[0];
			l = l[1];
			if(f(v)) l2.add(v);
		}
		return l2;
	}
	,map: function(f) {
		var b = new List();
		var l = this.h;
		while(l != null) {
			var v = l[0];
			l = l[1];
			b.add(f(v));
		}
		return b;
	}
	,__class__: List
}
if(!thx.json) thx.json = {}
thx.json.JsonDecoder = $hxClasses["thx.json.JsonDecoder"] = function(handler,tabsize) {
	if(tabsize == null) tabsize = 4;
	this.handler = handler;
	this.tabsize = tabsize;
}
thx.json.JsonDecoder.__name__ = ["thx","json","JsonDecoder"];
thx.json.JsonDecoder.prototype = {
	col: null
	,line: null
	,tabsize: null
	,src: null
	,'char': null
	,pos: null
	,handler: null
	,decode: function(s) {
		this.col = 0;
		this.line = 0;
		this.src = s;
		this["char"] = null;
		this.pos = 0;
		this.ignoreWhiteSpace();
		var p = null;
		this.handler.start();
		try {
			p = this.parse();
		} catch( e ) {
			if( js.Boot.__instanceof(e,thx.json._JsonDecoder.StreamError) ) {
				this.error("unexpected end of stream");
			} else throw(e);
		}
		this.ignoreWhiteSpace();
		if(this.pos < this.src.length) this.error("the stream contains unrecognized characters at its end");
		this.handler.end();
	}
	,ignoreWhiteSpace: function() {
		while(this.pos < this.src.length) {
			var c = this.readChar();
			switch(c) {
			case " ":
				this.col++;
				break;
			case "\n":
				this.col = 0;
				this.line++;
				break;
			case "\r":
				break;
			case "\t":
				this.col += this.tabsize;
				break;
			default:
				this["char"] = c;
				return;
			}
		}
	}
	,parse: function() {
		var c = this.readChar();
		switch(c) {
		case "{":
			this.col++;
			this.ignoreWhiteSpace();
			return this.parseObject();
		case "[":
			this.col++;
			this.ignoreWhiteSpace();
			return this.parseArray();
		case "\"":
			this["char"] = c;
			return this.parseString();
		default:
			this["char"] = c;
			return this.parseValue();
		}
	}
	,readChar: function() {
		if(null == this["char"]) {
			if(this.pos == this.src.length) throw thx.json._JsonDecoder.StreamError.Eof;
			return this.src.charAt(this.pos++);
		} else {
			var c = this["char"];
			this["char"] = null;
			return c;
		}
	}
	,expect: function(word) {
		var test = null == this["char"]?this.src.substr(this.pos,word.length):this["char"] + this.src.substr(this.pos,word.length - 1);
		if(test == word) {
			if(null == this["char"]) this.pos += word.length; else {
				this.pos += word.length - 1;
				this["char"] = null;
			}
			return true;
		} else return false;
	}
	,parseObject: function() {
		var first = true;
		this.handler.startObject();
		while(true) {
			this.ignoreWhiteSpace();
			if(this.expect("}")) break; else if(first) first = false; else if(this.expect(",")) this.ignoreWhiteSpace(); else this.error("expected ','");
			var k = this._parseString();
			this.ignoreWhiteSpace();
			if(!this.expect(":")) this.error("expected ':'");
			this.ignoreWhiteSpace();
			this.handler.startField(k);
			this.parse();
			this.handler.endField();
		}
		this.handler.endObject();
	}
	,parseArray: function() {
		this.ignoreWhiteSpace();
		var first = true;
		this.handler.startArray();
		while(true) {
			this.ignoreWhiteSpace();
			if(this.expect("]")) break; else if(first) first = false; else if(this.expect(",")) this.ignoreWhiteSpace(); else this.error("expected ','");
			this.handler.startItem();
			this.parse();
			this.handler.endItem();
		}
		this.handler.endArray();
	}
	,parseValue: function() {
		if(this.expect("true")) this.handler.bool(true); else if(this.expect("false")) this.handler.bool(false); else if(this.expect("null")) this.handler["null"](); else this.parseFloat();
	}
	,parseString: function() {
		this.handler.string(this._parseString());
	}
	,_parseString: function() {
		if(!this.expect("\"")) this.error("expected double quote");
		var buf = "";
		var esc = false;
		try {
			while(true) {
				var c = this.readChar();
				this.col++;
				if(esc) {
					switch(c) {
					case "\"":
						buf += "\"";
						break;
					case "\\":
						buf += "\\";
						break;
					case "/":
						buf += "/";
						break;
					case "b":
						buf += String.fromCharCode(8);
						break;
					case "f":
						buf += String.fromCharCode(12);
						break;
					case "n":
						buf += "\n";
						break;
					case "r":
						buf += "\r";
						break;
					case "t":
						buf += "\t";
						break;
					case "u":
						buf += String.fromCharCode(this.parseHexa());
						break;
					default:
						this.error("unexpected char " + c);
					}
					esc = false;
				} else switch(c) {
				case "\\":
					esc = true;
					break;
				case "\"":
					throw "__break__";
					break;
				default:
					buf += c;
				}
			}
		} catch( e ) { if( e != "__break__" ) throw e; }
		return buf;
	}
	,parseHexa: function() {
		var v = [];
		var _g = 0;
		while(_g < 4) {
			var i = _g++;
			var c = this.readChar();
			var i1 = c.toLowerCase().charCodeAt(0);
			if(!(i1 >= 48 && i1 <= 57 || i1 >= 97 && i1 <= 102)) this.error("invalid hexadecimal value " + c);
			v.push(c);
		}
		this.handler["int"](Std.parseInt("0x" + v.join("")));
		return Std.parseInt("0x" + v.join(""));
	}
	,parseFloat: function() {
		var v = "";
		if(this.expect("-")) v = "-";
		if(this.expect("0")) v += "0"; else {
			var c = this.readChar();
			var i = c.charCodeAt(0);
			if(i < 49 || i > 57) this.error("expected digit between 1 and 9");
			v += c;
			this.col++;
		}
		try {
			v += this.parseDigits();
		} catch( e ) {
			if( js.Boot.__instanceof(e,thx.json._JsonDecoder.StreamError) ) {
				this.handler["int"](Std.parseInt(v));
				return;
			} else throw(e);
		}
		try {
			if(this.expect(".")) v += "." + this.parseDigits(1); else {
				this.handler["int"](Std.parseInt(v));
				return;
			}
			if(this.expect("e") || this.expect("E")) {
				v += "e";
				if(this.expect("+")) {
				} else if(this.expect("-")) v += "-";
				v += this.parseDigits(1);
			}
		} catch( e ) {
			if( js.Boot.__instanceof(e,thx.json._JsonDecoder.StreamError) ) {
				this.handler["float"](Std.parseFloat(v));
				return;
			} else throw(e);
		}
		this.handler["float"](Std.parseFloat(v));
	}
	,parseDigits: function(atleast) {
		if(atleast == null) atleast = 0;
		var buf = "";
		while(true) {
			var c = null;
			try {
				c = this.readChar();
			} catch( e ) {
				if( js.Boot.__instanceof(e,thx.json._JsonDecoder.StreamError) ) {
					if(buf.length < atleast) this.error("expected digit");
					return buf;
				} else throw(e);
			}
			var i = c.charCodeAt(0);
			if(i < 48 || i > 57) {
				if(buf.length < atleast) this.error("expected digit");
				this.col += buf.length;
				this["char"] = c;
				return buf;
			} else buf += c;
		}
		return null;
	}
	,error: function(msg) {
		var context = this.pos == this.src.length?"":"\nrest: " + (null != this["char"]?this["char"]:"") + this.src.substr(this.pos) + "...";
		throw new thx.error.Error("error at L {0} C {1}: {2}{3}",[this.line,this.col,msg,context],null,{ fileName : "JsonDecoder.hx", lineNumber : 358, className : "thx.json.JsonDecoder", methodName : "error"});
	}
	,__class__: thx.json.JsonDecoder
}
if(!thx.json._JsonDecoder) thx.json._JsonDecoder = {}
thx.json._JsonDecoder.StreamError = $hxClasses["thx.json._JsonDecoder.StreamError"] = { __ename__ : ["thx","json","_JsonDecoder","StreamError"], __constructs__ : ["Eof"] }
thx.json._JsonDecoder.StreamError.Eof = ["Eof",0];
thx.json._JsonDecoder.StreamError.Eof.toString = $estr;
thx.json._JsonDecoder.StreamError.Eof.__enum__ = thx.json._JsonDecoder.StreamError;
var Iterables = $hxClasses["Iterables"] = function() { }
Iterables.__name__ = ["Iterables"];
Iterables.count = function(it) {
	return Iterators.count(it.iterator());
}
Iterables.indexOf = function(it,v,f) {
	return Iterators.indexOf(it.iterator(),v,f);
}
Iterables.contains = function(it,v,f) {
	return Iterators.contains(it.iterator(),v,f);
}
Iterables.array = function(it) {
	return Iterators.array(it.iterator());
}
Iterables.join = function(it,glue) {
	if(glue == null) glue = ", ";
	return Iterators.array(it.iterator()).join(glue);
}
Iterables.map = function(it,f) {
	return Iterators.map(it.iterator(),f);
}
Iterables.each = function(it,f) {
	return Iterators.each(it.iterator(),f);
}
Iterables.filter = function(it,f) {
	return Iterators.filter(it.iterator(),f);
}
Iterables.reduce = function(it,f,initialValue) {
	return Iterators.reduce(it.iterator(),f,initialValue);
}
Iterables.random = function(it) {
	return Arrays.random(Iterators.array(it.iterator()));
}
Iterables.any = function(it,f) {
	return Iterators.any(it.iterator(),f);
}
Iterables.all = function(it,f) {
	return Iterators.all(it.iterator(),f);
}
Iterables.last = function(it) {
	return Iterators.last(it.iterator());
}
Iterables.lastf = function(it,f) {
	return Iterators.lastf(it.iterator(),f);
}
Iterables.first = function(it) {
	return it.iterator().next();
}
Iterables.firstf = function(it,f) {
	return Iterators.firstf(it.iterator(),f);
}
Iterables.order = function(it,f) {
	return Arrays.order(Iterators.array(it.iterator()),f);
}
Iterables.isIterable = function(v) {
	var fields = Reflect.isObject(v) && null == Type.getClass(v)?Reflect.fields(v):Type.getInstanceFields(Type.getClass(v));
	if(!Lambda.has(fields,"iterator")) return false;
	return Reflect.isFunction(Reflect.field(v,"iterator"));
}
Iterables.prototype = {
	__class__: Iterables
}
if(!thx.data) thx.data = {}
thx.data.IDataHandler = $hxClasses["thx.data.IDataHandler"] = function() { }
thx.data.IDataHandler.__name__ = ["thx","data","IDataHandler"];
thx.data.IDataHandler.prototype = {
	start: null
	,end: null
	,startObject: null
	,startField: null
	,endField: null
	,endObject: null
	,startArray: null
	,startItem: null
	,endItem: null
	,endArray: null
	,date: null
	,string: null
	,'int': null
	,'float': null
	,'null': null
	,bool: null
	,comment: null
	,__class__: thx.data.IDataHandler
}
if(!thx.math) thx.math = {}
thx.math.Random = $hxClasses["thx.math.Random"] = function(seed) {
	if(seed == null) seed = 1;
	this.seed = seed;
}
thx.math.Random.__name__ = ["thx","math","Random"];
thx.math.Random.prototype = {
	seed: null
	,'int': function() {
		return (this.seed = this.seed * 16807 % 2147483647) & 1073741823;
	}
	,'float': function() {
		return ((this.seed = this.seed * 16807 % 2147483647) & 1073741823) / 1073741823.0;
	}
	,__class__: thx.math.Random
}
var EReg = $hxClasses["EReg"] = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
}
EReg.__name__ = ["EReg"];
EReg.prototype = {
	r: null
	,match: function(s) {
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,matched: function(n) {
		return this.r.m != null && n >= 0 && n < this.r.m.length?this.r.m[n]:(function($this) {
			var $r;
			throw "EReg::matched";
			return $r;
		}(this));
	}
	,matchedLeft: function() {
		if(this.r.m == null) throw "No string matched";
		return this.r.s.substr(0,this.r.m.index);
	}
	,matchedRight: function() {
		if(this.r.m == null) throw "No string matched";
		var sz = this.r.m.index + this.r.m[0].length;
		return this.r.s.substr(sz,this.r.s.length - sz);
	}
	,matchedPos: function() {
		if(this.r.m == null) throw "No string matched";
		return { pos : this.r.m.index, len : this.r.m[0].length};
	}
	,split: function(s) {
		var d = "#__delim__#";
		return s.replace(this.r,d).split(d);
	}
	,replace: function(s,by) {
		return s.replace(this.r,by);
	}
	,customReplace: function(s,f) {
		var buf = new StringBuf();
		while(true) {
			if(!this.match(s)) break;
			buf.add(this.matchedLeft());
			buf.add(f(this));
			s = this.matchedRight();
		}
		buf.b[buf.b.length] = s == null?"null":s;
		return buf.b.join("");
	}
	,__class__: EReg
}
var Ints = $hxClasses["Ints"] = function() { }
Ints.__name__ = ["Ints"];
Ints.range = function(start,stop,step) {
	if(step == null) step = 1;
	if(null == stop) {
		stop = start;
		start = 0;
	}
	if((stop - start) / step == Math.POSITIVE_INFINITY) throw new thx.error.Error("infinite range",null,null,{ fileName : "Ints.hx", lineNumber : 19, className : "Ints", methodName : "range"});
	var range = [], i = -1, j;
	if(step < 0) while((j = start + step * ++i) > stop) range.push(j); else while((j = start + step * ++i) < stop) range.push(j);
	return range;
}
Ints.sign = function(v) {
	return v < 0?-1:1;
}
Ints.abs = function(a) {
	return a < 0?-a:a;
}
Ints.min = function(a,b) {
	return a < b?a:b;
}
Ints.max = function(a,b) {
	return a > b?a:b;
}
Ints.wrap = function(v,min,max) {
	return Math.round(Floats.wrap(v,min,max));
}
Ints.clamp = function(v,min,max) {
	if(v < min) return min; else if(v > max) return max; else return v;
}
Ints.clampSym = function(v,max) {
	if(v < -max) return -max; else if(v > max) return max; else return v;
}
Ints.interpolate = function(f,min,max,equation) {
	if(max == null) max = 100.0;
	if(min == null) min = 0.0;
	if(null == equation) equation = thx.math.Equations.linear;
	return Math.round(min + equation(f) * (max - min));
}
Ints.interpolatef = function(min,max,equation) {
	if(max == null) max = 1.0;
	if(min == null) min = 0.0;
	if(null == equation) equation = thx.math.Equations.linear;
	var d = max - min;
	return function(f) {
		return Math.round(min + equation(f) * d);
	};
}
Ints.format = function(v,param,params,culture) {
	return (Ints.formatf(param,params,culture))(v);
}
Ints.formatf = function(param,params,culture) {
	return Floats.formatf(null,thx.culture.FormatParams.params(param,params,"I"),culture);
}
Ints.canParse = function(s) {
	return Ints._reparse.match(s);
}
Ints.parse = function(s) {
	if(s.substr(0,1) == "+") s = s.substr(1);
	return Std.parseInt(s);
}
Ints.compare = function(a,b) {
	return a - b;
}
Ints.prototype = {
	__class__: Ints
}
var Dynamics = $hxClasses["Dynamics"] = function() { }
Dynamics.__name__ = ["Dynamics"];
Dynamics.format = function(v,param,params,nullstring,culture) {
	return (Dynamics.formatf(param,params,nullstring,culture))(v);
}
Dynamics.formatf = function(param,params,nullstring,culture) {
	if(nullstring == null) nullstring = "null";
	return function(v) {
		var $e = (Type["typeof"](v));
		switch( $e[1] ) {
		case 0:
			return nullstring;
		case 1:
			return Ints.format(v,param,params,culture);
		case 2:
			return Floats.format(v,param,params,culture);
		case 3:
			return Bools.format(v,param,params,culture);
		case 6:
			var c = $e[2];
			if(c == String) return Strings.formatOne(v,param,params,culture); else if(c == Array) return Arrays.format(v,param,params,culture); else if(c == Date) return Dates.format(v,param,params,culture); else return Objects.format(v,param,params,culture);
			break;
		case 4:
			return Objects.format(v,param,params,culture);
		case 5:
			return "function()";
		default:
			return (function($this) {
				var $r;
				throw new thx.error.Error("Unsupported type format: {0}",null,Type["typeof"](v),{ fileName : "Dynamics.hx", lineNumber : 44, className : "Dynamics", methodName : "formatf"});
				return $r;
			}(this));
		}
	};
}
Dynamics.interpolate = function(v,a,b,equation) {
	return (Dynamics.interpolatef(a,b,equation))(v);
}
Dynamics.interpolatef = function(a,b,equation) {
	var ta = Type["typeof"](a);
	var tb = Type["typeof"](b);
	if(!((Std["is"](a,Float) || Std["is"](a,Int)) && (Std["is"](b,Float) || Std["is"](b,Int))) && !Type.enumEq(ta,tb)) throw new thx.error.Error("arguments a ({0}) and b ({0}) have different types",[a,b],null,{ fileName : "Dynamics.hx", lineNumber : 59, className : "Dynamics", methodName : "interpolatef"});
	var $e = (ta);
	switch( $e[1] ) {
	case 0:
		return function(_) {
			return null;
		};
	case 1:
		if(Std["is"](b,Int)) return Ints.interpolatef(a,b,equation); else return Floats.interpolatef(a,b,equation);
		break;
	case 2:
		return Floats.interpolatef(a,b,equation);
	case 3:
		return Bools.interpolatef(a,b,equation);
	case 4:
		return Objects.interpolatef(a,b,equation);
	case 6:
		var c = $e[2];
		var name = Type.getClassName(c);
		switch(name) {
		case "String":
			return Strings.interpolatef(a,b,equation);
		case "Date":
			return Dates.interpolatef(a,b,equation);
		default:
			throw new thx.error.Error("cannot interpolate on instances of {0}",null,name,{ fileName : "Dynamics.hx", lineNumber : 77, className : "Dynamics", methodName : "interpolatef"});
		}
		break;
	default:
		throw new thx.error.Error("cannot interpolate on functions/enums/unknown",null,null,{ fileName : "Dynamics.hx", lineNumber : 79, className : "Dynamics", methodName : "interpolatef"});
	}
}
Dynamics.string = function(v) {
	var $e = (Type["typeof"](v));
	switch( $e[1] ) {
	case 0:
		return "null";
	case 1:
		return Ints.format(v);
	case 2:
		return Floats.format(v);
	case 3:
		return Bools.format(v);
	case 4:
		var keys = Reflect.fields(v);
		var result = [];
		var _g = 0;
		while(_g < keys.length) {
			var key = keys[_g];
			++_g;
			result.push(key + " : " + Dynamics.string(Reflect.field(v,key)));
		}
		return "{" + result.join(", ") + "}";
	case 6:
		var c = $e[2];
		var name = Type.getClassName(c);
		switch(name) {
		case "Array":
			return Arrays.string(v);
		case "String":
			var s = v;
			if(s.indexOf("\"") < 0) return "\"" + s + "\""; else if(s.indexOf("'") < 0) return "'" + s + "'"; else return "\"" + StringTools.replace(s,"\"","\\\"") + "\"";
			break;
		case "Date":
			return Dates.format(v);
		default:
			return Std.string(v);
		}
		break;
	case 7:
		var e = $e[2];
		return Enums.string(v);
	case 8:
		return "<unknown>";
	case 5:
		return "<function>";
	}
}
Dynamics.compare = function(a,b) {
	if(!Types.sameType(a,b)) throw new thx.error.Error("cannot compare 2 different types",null,null,{ fileName : "Dynamics.hx", lineNumber : 131, className : "Dynamics", methodName : "compare"});
	if(null == a && null == b) return 0;
	if(null == a) return -1;
	if(null == b) return 1;
	var $e = (Type["typeof"](a));
	switch( $e[1] ) {
	case 1:
		return a - b;
	case 2:
		return a < b?-1:a > b?1:0;
	case 3:
		return a == b?0:a?-1:1;
	case 4:
		return Objects.compare(a,b);
	case 6:
		var c = $e[2];
		var name = Type.getClassName(c);
		switch(name) {
		case "Array":
			return Arrays.compare(a,b);
		case "String":
			return Strings.compare(a,b);
		case "Date":
			return Floats.compare(a.getTime(),b.getTime());
		default:
			return Strings.compare(Std.string(a),Std.string(b));
		}
		break;
	case 7:
		var e = $e[2];
		return Enums.compare(a,b);
	default:
		return 0;
	}
}
Dynamics.comparef = function(sample) {
	var $e = (Type["typeof"](sample));
	switch( $e[1] ) {
	case 1:
		return Ints.compare;
	case 2:
		return Floats.compare;
	case 3:
		return Bools.compare;
	case 4:
		return Objects.compare;
	case 6:
		var c = $e[2];
		var name = Type.getClassName(c);
		switch(name) {
		case "Array":
			return Arrays.compare;
		case "String":
			return Strings.compare;
		case "Date":
			return Dates.compare;
		default:
			return function(a,b) {
				return Strings.compare(Std.string(a),Std.string(b));
			};
		}
		break;
	case 7:
		var e = $e[2];
		return Enums.compare;
	default:
		return Dynamics.compare;
	}
}
Dynamics.clone = function(v,cloneInstances) {
	if(cloneInstances == null) cloneInstances = false;
	var $e = (Type["typeof"](v));
	switch( $e[1] ) {
	case 0:
		return null;
	case 1:
	case 2:
	case 3:
	case 7:
	case 8:
	case 5:
		return v;
	case 4:
		var o = { };
		Objects.copyTo(v,o);
		return o;
	case 6:
		var c = $e[2];
		var name = Type.getClassName(c);
		switch(name) {
		case "Array":
			var src = v, a = [];
			var _g = 0;
			while(_g < src.length) {
				var i = src[_g];
				++_g;
				a.push(Dynamics.clone(i));
			}
			return a;
		case "String":case "Date":
			return v;
		default:
			if(cloneInstances) {
				var o = Type.createEmptyInstance(c);
				var _g = 0, _g1 = Reflect.fields(v);
				while(_g < _g1.length) {
					var field = _g1[_g];
					++_g;
					o[field] = Dynamics.clone(Reflect.field(v,field));
				}
				return o;
			} else return v;
		}
		break;
	}
}
Dynamics.same = function(a,b) {
	var ta = Types.typeName(a), tb = Types.typeName(b);
	if(ta != tb) return false;
	var $e = (Type["typeof"](a));
	switch( $e[1] ) {
	case 2:
		return Floats.equals(a,b);
	case 0:
	case 1:
	case 3:
		return a == b;
	case 5:
		return Reflect.compareMethods(a,b);
	case 6:
		var c = $e[2];
		var ca = Type.getClassName(c), cb = Type.getClassName(Type.getClass(b));
		if(ca != cb) return false;
		if(Std["is"](a,String) && a != b) return false;
		if(Std["is"](a,Array)) {
			var aa = a, ab = b;
			if(aa.length != ab.length) return false;
			var _g1 = 0, _g = aa.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(!Dynamics.same(aa[i],ab[i])) return false;
			}
			return true;
		}
		if(Std["is"](a,Date)) return a.getTime() == b.getTime();
		if(Std["is"](a,Hash) || Std["is"](a,IntHash)) {
			var ha = a, hb = b;
			var ka = Iterators.array(ha.keys()), kb = Iterators.array(hb.keys());
			if(ka.length != kb.length) return false;
			var _g = 0;
			while(_g < ka.length) {
				var key = ka[_g];
				++_g;
				if(!hb.exists(key) || !Dynamics.same(ha.get(key),hb.get(key))) return false;
			}
			return true;
		}
		var t = false;
		if((t = Iterators.isIterator(a)) || Iterables.isIterable(a)) {
			var va = t?Iterators.array(a):Iterators.array(a.iterator()), vb = t?Iterators.array(b):Iterators.array(b.iterator());
			if(va.length != vb.length) return false;
			var _g1 = 0, _g = va.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(!Dynamics.same(va[i],vb[i])) return false;
			}
			return true;
		}
		var fields = Type.getInstanceFields(Type.getClass(a));
		var _g = 0;
		while(_g < fields.length) {
			var field = fields[_g];
			++_g;
			var va = Reflect.field(a,field);
			if(Reflect.isFunction(va)) continue;
			var vb = Reflect.field(b,field);
			if(!Dynamics.same(va,vb)) return false;
		}
		return true;
	case 7:
		var e = $e[2];
		var ea = Type.getEnumName(e), eb = Type.getEnumName(Type.getEnum(b));
		if(ea != eb) return false;
		if(a[1] != b[1]) return false;
		var pa = a.slice(2), pb = b.slice(2);
		var _g1 = 0, _g = pa.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(!Dynamics.same(pa[i],pb[i])) return false;
		}
		return true;
	case 4:
		var fa = Reflect.fields(a), fb = Reflect.fields(b);
		var _g = 0;
		while(_g < fa.length) {
			var field = fa[_g];
			++_g;
			fb.remove(field);
			if(!Reflect.hasField(b,field)) return false;
			var va = Reflect.field(a,field);
			if(Reflect.isFunction(va)) continue;
			var vb = Reflect.field(b,field);
			if(!Dynamics.same(va,vb)) return false;
		}
		if(fb.length > 0) return false;
		var t = false;
		if((t = Iterators.isIterator(a)) || Iterables.isIterable(a)) {
			if(t && !Iterators.isIterator(b)) return false;
			if(!t && !Iterables.isIterable(b)) return false;
			var aa = t?Iterators.array(a):Iterators.array(a.iterator());
			var ab = t?Iterators.array(b):Iterators.array(b.iterator());
			if(aa.length != ab.length) return false;
			var _g1 = 0, _g = aa.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(!Dynamics.same(aa[i],ab[i])) return false;
			}
			return true;
		}
		return true;
	case 8:
		return (function($this) {
			var $r;
			throw "Unable to compare two unknown types";
			return $r;
		}(this));
	}
	return (function($this) {
		var $r;
		throw new thx.error.Error("Unable to compare values: {0} and {1}",[a,b],null,{ fileName : "Dynamics.hx", lineNumber : 371, className : "Dynamics", methodName : "same"});
		return $r;
	}(this));
}
Dynamics.number = function(v) {
	return Number(v);
}
Dynamics.prototype = {
	__class__: Dynamics
}
thx.color.Cmyk = $hxClasses["thx.color.Cmyk"] = function(cyan,magenta,yellow,black) {
	thx.color.Rgb.call(this,Ints.interpolate(Floats.normalize(1 - cyan - black),0,255,null),Ints.interpolate(Floats.normalize(1 - magenta - black),0,255,null),Ints.interpolate(Floats.normalize(1 - yellow - black),0,255,null));
	this.cyan = Floats.normalize(cyan);
	this.magenta = Floats.normalize(magenta);
	this.yellow = Floats.normalize(yellow);
	this.black = Floats.normalize(black);
}
thx.color.Cmyk.__name__ = ["thx","color","Cmyk"];
thx.color.Cmyk.toCmyk = function(rgb) {
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
	return new thx.color.Cmyk(c,m,y,k);
}
thx.color.Cmyk.equals = function(a,b) {
	return a.black == b.black && a.cyan == b.cyan && a.magenta == b.magenta && a.yellow == b.yellow;
}
thx.color.Cmyk.darker = function(color,t,equation) {
	return new thx.color.Cmyk(color.cyan,color.magenta,color.yellow,Floats.interpolate(t,color.black,0,equation));
}
thx.color.Cmyk.lighter = function(color,t,equation) {
	return new thx.color.Cmyk(color.cyan,color.magenta,color.yellow,Floats.interpolate(t,color.black,1,equation));
}
thx.color.Cmyk.interpolate = function(a,b,t,equation) {
	return new thx.color.Cmyk(Floats.interpolate(t,a.cyan,b.cyan,equation),Floats.interpolate(t,a.magenta,b.magenta,equation),Floats.interpolate(t,a.yellow,b.yellow,equation),Floats.interpolate(t,a.black,b.black,equation));
}
thx.color.Cmyk.__super__ = thx.color.Rgb;
thx.color.Cmyk.prototype = $extend(thx.color.Rgb.prototype,{
	black: null
	,cyan: null
	,magenta: null
	,yellow: null
	,toCmykString: function() {
		return "cmyk(" + this.cyan + "," + this.magenta + "," + this.yellow + "," + this.black + ")";
	}
	,__class__: thx.color.Cmyk
});
var Iterators = $hxClasses["Iterators"] = function() { }
Iterators.__name__ = ["Iterators"];
Iterators.count = function(it) {
	var i = 0;
	while( it.hasNext() ) {
		var _ = it.next();
		i++;
	}
	return i;
}
Iterators.indexOf = function(it,v,f) {
	if(null == f) f = function(v2) {
		return v == v2;
	};
	var c = 0;
	while( it.hasNext() ) {
		var i = it.next();
		if(f(i)) return c; else c++;
	}
	return -1;
}
Iterators.contains = function(it,v,f) {
	if(null == f) f = function(v2) {
		return v == v2;
	};
	var c = 0;
	while( it.hasNext() ) {
		var i = it.next();
		if(f(i)) return true;
	}
	return false;
}
Iterators.array = function(it) {
	var result = [];
	while( it.hasNext() ) {
		var v = it.next();
		result.push(v);
	}
	return result;
}
Iterators.join = function(it,glue) {
	if(glue == null) glue = ", ";
	return Iterators.array(it).join(glue);
}
Iterators.map = function(it,f) {
	var result = [], i = 0;
	while( it.hasNext() ) {
		var v = it.next();
		result.push(f(v,i++));
	}
	return result;
}
Iterators.each = function(it,f) {
	var i = 0;
	while( it.hasNext() ) {
		var o = it.next();
		f(o,i++);
	}
}
Iterators.filter = function(it,f) {
	var result = [];
	while( it.hasNext() ) {
		var i = it.next();
		if(f(i)) result.push(i);
	}
	return result;
}
Iterators.reduce = function(it,f,initialValue) {
	var accumulator = initialValue, i = 0;
	while( it.hasNext() ) {
		var o = it.next();
		accumulator = f(accumulator,o,i++);
	}
	return accumulator;
}
Iterators.random = function(it) {
	return Arrays.random(Iterators.array(it));
}
Iterators.any = function(it,f) {
	while( it.hasNext() ) {
		var v = it.next();
		if(f(v)) return true;
	}
	return false;
}
Iterators.all = function(it,f) {
	while( it.hasNext() ) {
		var v = it.next();
		if(!f(v)) return false;
	}
	return true;
}
Iterators.last = function(it) {
	var o = null;
	while(it.hasNext()) o = it.next();
	return o;
}
Iterators.lastf = function(it,f) {
	var rev = Iterators.array(it);
	rev.reverse();
	return Arrays.lastf(rev,f);
}
Iterators.first = function(it) {
	return it.next();
}
Iterators.firstf = function(it,f) {
	while( it.hasNext() ) {
		var v = it.next();
		if(f(v)) return v;
	}
	return null;
}
Iterators.order = function(it,f) {
	return Arrays.order(Iterators.array(it),f);
}
Iterators.isIterator = function(v) {
	var fields = Reflect.isObject(v) && null == Type.getClass(v)?Reflect.fields(v):Type.getInstanceFields(Type.getClass(v));
	if(!Lambda.has(fields,"next") || !Lambda.has(fields,"hasNext")) return false;
	return Reflect.isFunction(Reflect.field(v,"next")) && Reflect.isFunction(Reflect.field(v,"hasNext"));
}
Iterators.prototype = {
	__class__: Iterators
}
thx.json.Json = $hxClasses["thx.json.Json"] = function() { }
thx.json.Json.__name__ = ["thx","json","Json"];
thx.json.Json.nativeEncoder = null;
thx.json.Json.nativeDecoder = null;
thx.json.Json.encode = function(value) {
	if(null != thx.json.Json.nativeEncoder) return thx.json.Json.nativeEncoder(value);
	var handler = new thx.json.JsonEncoder();
	new thx.data.ValueEncoder(handler).encode(value);
	return handler.encodedString;
}
thx.json.Json.decode = function(value) {
	if(null != thx.json.Json.nativeDecoder) return thx.json.Json.nativeDecoder(value);
	var handler = new thx.data.ValueHandler();
	var r = new thx.json.JsonDecoder(handler).decode(value);
	return handler.value;
}
thx.json.Json.prototype = {
	__class__: thx.json.Json
}
thx.culture.FormatParams = $hxClasses["thx.culture.FormatParams"] = function() { }
thx.culture.FormatParams.__name__ = ["thx","culture","FormatParams"];
thx.culture.FormatParams.cleanQuotes = function(p) {
	if(p.length <= 1) return p;
	var f = p.substr(0,1);
	if(("\"" == f || "'" == f) && p.substr(-1) == f) return p.substr(1,p.length - 2); else return p;
}
thx.culture.FormatParams.params = function(p,ps,alt) {
	if(null != ps && null != p) return [p].concat(ps);
	if((null == ps || ps.length == 0) && null == p) return [alt];
	if(null == ps || ps.length == 0) {
		var parts = p.split(":");
		return [parts[0]].concat(parts.length == 1?[]:parts[1].split(",").map(function(s,i) {
			if(0 == i) return s; else return thx.culture.FormatParams.cleanQuotes(s);
		}));
	}
	return ps;
}
thx.culture.FormatParams.prototype = {
	__class__: thx.culture.FormatParams
}
var Reflect = $hxClasses["Reflect"] = function() { }
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	if(o.hasOwnProperty != null) return o.hasOwnProperty(field);
	var arr = Reflect.fields(o);
	var $it0 = arr.iterator();
	while( $it0.hasNext() ) {
		var t = $it0.next();
		if(t == field) return true;
	}
	return false;
}
Reflect.field = function(o,field) {
	var v = null;
	try {
		v = o[field];
	} catch( e ) {
	}
	return v;
}
Reflect.setField = function(o,field,value) {
	o[field] = value;
}
Reflect.getProperty = function(o,field) {
	var tmp;
	return o == null?null:o.__properties__ && (tmp = o.__properties__["get_" + field])?o[tmp]():o[field];
}
Reflect.setProperty = function(o,field,value) {
	var tmp;
	if(o.__properties__ && (tmp = o.__properties__["set_" + field])) o[tmp](value); else o[field] = value;
}
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
}
Reflect.fields = function(o) {
	if(o == null) return new Array();
	var a = new Array();
	if(o.hasOwnProperty) {
		for(var i in o) if( o.hasOwnProperty(i) ) a.push(i);
	} else {
		var t;
		try {
			t = o.__proto__;
		} catch( e ) {
			t = null;
		}
		if(t != null) o.__proto__ = null;
		for(var i in o) if( i != "__proto__" ) a.push(i);
		if(t != null) o.__proto__ = t;
	}
	return a;
}
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && f.__name__ == null;
}
Reflect.compare = function(a,b) {
	return a == b?0:a > b?1:-1;
}
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
}
Reflect.isObject = function(v) {
	if(v == null) return false;
	var t = typeof(v);
	return t == "string" || t == "object" && !v.__enum__ || t == "function" && v.__name__ != null;
}
Reflect.deleteField = function(o,f) {
	if(!Reflect.hasField(o,f)) return false;
	delete(o[f]);
	return true;
}
Reflect.copy = function(o) {
	var o2 = { };
	var _g = 0, _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var f = _g1[_g];
		++_g;
		o2[f] = Reflect.field(o,f);
	}
	return o2;
}
Reflect.makeVarArgs = function(f) {
	return function() {
		var a = new Array();
		var _g1 = 0, _g = arguments.length;
		while(_g1 < _g) {
			var i = _g1++;
			a.push(arguments[i]);
		}
		return f(a);
	};
}
Reflect.prototype = {
	__class__: Reflect
}
if(!thx.util) thx.util = {}
thx.util.MacroVersion = $hxClasses["thx.util.MacroVersion"] = function() { }
thx.util.MacroVersion.__name__ = ["thx","util","MacroVersion"];
thx.util.MacroVersion.prototype = {
	__class__: thx.util.MacroVersion
}
thx.color.Grey = $hxClasses["thx.color.Grey"] = function(value) {
	this.grey = Floats.normalize(value);
	var c = Ints.interpolate(this.grey,0,255,null);
	thx.color.Rgb.call(this,c,c,c);
}
thx.color.Grey.__name__ = ["thx","color","Grey"];
thx.color.Grey.toGrey = function(rgb,luminance) {
	if(null == luminance) luminance = thx.color.PerceivedLuminance.Perceived;
	switch( (luminance)[1] ) {
	case 0:
		return new thx.color.Grey(rgb.red / 255 * .2126 + rgb.green / 255 * .7152 + rgb.blue / 255 * .0722);
	case 1:
		return new thx.color.Grey(rgb.red / 255 * .299 + rgb.green / 255 * .587 + rgb.blue / 255 * .114);
	case 2:
		return new thx.color.Grey(Math.sqrt(0.241 * Math.pow(rgb.red / 255,2) + 0.691 * Math.pow(rgb.green / 255,2) + 0.068 * Math.pow(rgb.blue / 255,2)));
	}
}
thx.color.Grey.equals = function(a,b) {
	return a.grey == b.grey;
}
thx.color.Grey.darker = function(color,t,equation) {
	return new thx.color.Grey(Floats.interpolate(t,color.grey,0,equation));
}
thx.color.Grey.lighter = function(color,t,equation) {
	return new thx.color.Grey(Floats.interpolate(t,color.grey,1,equation));
}
thx.color.Grey.interpolate = function(a,b,t,equation) {
	return new thx.color.Grey(Floats.interpolate(t,a.grey,b.grey,equation));
}
thx.color.Grey.__super__ = thx.color.Rgb;
thx.color.Grey.prototype = $extend(thx.color.Rgb.prototype,{
	grey: null
	,__class__: thx.color.Grey
});
thx.color.PerceivedLuminance = $hxClasses["thx.color.PerceivedLuminance"] = { __ename__ : ["thx","color","PerceivedLuminance"], __constructs__ : ["Standard","Perceived","PerceivedAccurate"] }
thx.color.PerceivedLuminance.Standard = ["Standard",0];
thx.color.PerceivedLuminance.Standard.toString = $estr;
thx.color.PerceivedLuminance.Standard.__enum__ = thx.color.PerceivedLuminance;
thx.color.PerceivedLuminance.Perceived = ["Perceived",1];
thx.color.PerceivedLuminance.Perceived.toString = $estr;
thx.color.PerceivedLuminance.Perceived.__enum__ = thx.color.PerceivedLuminance;
thx.color.PerceivedLuminance.PerceivedAccurate = ["PerceivedAccurate",2];
thx.color.PerceivedLuminance.PerceivedAccurate.toString = $estr;
thx.color.PerceivedLuminance.PerceivedAccurate.__enum__ = thx.color.PerceivedLuminance;
if(!rg.query) rg.query = {}
rg.query.Transformers = $hxClasses["rg.query.Transformers"] = function() { }
rg.query.Transformers.__name__ = ["rg","query","Transformers"];
rg.query.Transformers.cross = function(values) {
	if(!Std["is"](values,Array)) values = [values];
	return function(data) {
		var results = [];
		var _g = 0;
		while(_g < data.length) {
			var item = data[_g];
			++_g;
			var _g1 = 0;
			while(_g1 < values.length) {
				var value = values[_g1];
				++_g1;
				results.push(Objects.copyTo(value,Objects.copyTo(item,{ })));
			}
		}
		return results;
	};
}
rg.query.Transformers.map = function(handler) {
	return function(data) {
		return data.map(handler);
	};
}
rg.query.Transformers.filter = function(handler) {
	return function(data) {
		return Arrays.filter(data,handler);
	};
}
rg.query.Transformers.filterByFields = function(o) {
	var entries = Objects.entries(o);
	var handler = function(d) {
		var _g = 0;
		while(_g < entries.length) {
			var entry = entries[_g];
			++_g;
			if(Reflect.field(d,entry.key) != entry.value) return false;
		}
		return true;
	};
	return function(data) {
		return Arrays.filter(data,handler);
	};
}
rg.query.Transformers.sort = function(handler) {
	return function(data) {
		return (function($this) {
			var $r;
			data.sort(null == handler?Dynamics.compare:handler);
			$r = data;
			return $r;
		}(this));
	};
}
rg.query.Transformers.limit = function(offset,count) {
	return function(data) {
		if(offset >= data.length) return [];
		var end = offset + count > data.length?data.length:offset + count;
		return data.slice(offset,end);
	};
}
rg.query.Transformers.reverse = function(arr) {
	arr.reverse();
	return arr;
}
rg.query.Transformers.prototype = {
	__class__: rg.query.Transformers
}
thx.color.Colors = $hxClasses["thx.color.Colors"] = function() { }
thx.color.Colors.__name__ = ["thx","color","Colors"];
thx.color.Colors.interpolatef = function(a,b,equation) {
	var ca = thx.color.Colors.parse(a);
	var cb = thx.color.Colors.parse(b);
	var f = thx.color.Rgb.interpolatef(ca,cb,equation);
	return function(v) {
		return f(v).toString();
	};
}
thx.color.Colors.interpolate = function(v,a,b,equation) {
	return (thx.color.Colors.interpolatef(a,b,equation))(v);
}
thx.color.Colors.parse = function(s) {
	if(!thx.color.Colors._reParse.match(s = StringTools.trim(s.toLowerCase()))) {
		var v = thx.color.NamedColors.byName.get(s);
		if(null == v) {
			if("transparent" == s) return thx.color.Rgb.fromInt(16777215); else return null;
		} else return v;
	}
	var type = thx.color.Colors._reParse.matched(1);
	if(!Strings.empty(type)) {
		var values = thx.color.Colors._reParse.matched(2).split(",");
		switch(type) {
		case "rgb":case "rgba":
			return new thx.color.Rgb(thx.color.Colors._c(values[0]),thx.color.Colors._c(values[1]),thx.color.Colors._c(values[2]));
		case "hsl":
			return new thx.color.Hsl(thx.color.Colors._d(values[0]),thx.color.Colors._p(values[1]),thx.color.Colors._p(values[2]));
		case "cmyk":
			return new thx.color.Cmyk(thx.color.Colors._p(values[0]),thx.color.Colors._p(values[1]),thx.color.Colors._p(values[2]),thx.color.Colors._p(values[3]));
		}
	}
	var color = thx.color.Colors._reParse.matched(3);
	if(color.length == 3) color = color.split("").map(function(d,_) {
		return d + d;
	}).join(""); else if(color.length != 6) return null;
	return thx.color.Rgb.fromInt(Std.parseInt("0x" + color));
}
thx.color.Colors._c = function(s) {
	return Std.parseInt(StringTools.trim(s));
}
thx.color.Colors._d = function(s) {
	var s1 = StringTools.trim(s);
	if(s1.substr(-3) == "deg") s1 = s1.substr(0,-3); else if(s1.substr(-1) == "º") s1 = s1.substr(0,-1);
	return Std.parseFloat(s1);
}
thx.color.Colors._p = function(s) {
	var s1 = StringTools.trim(s);
	if(s1.substr(-1) == "%") return Std.parseFloat(s1.substr(0,-1)) / 100; else return Std.parseFloat(s1);
}
thx.color.Colors.prototype = {
	__class__: thx.color.Colors
}
thx.data.ValueEncoder = $hxClasses["thx.data.ValueEncoder"] = function(handler) {
	this.handler = handler;
}
thx.data.ValueEncoder.__name__ = ["thx","data","ValueEncoder"];
thx.data.ValueEncoder.prototype = {
	handler: null
	,encode: function(o) {
		this.handler.start();
		this.encodeValue(o);
		this.handler.end();
	}
	,encodeValue: function(o) {
		var $e = (Type["typeof"](o));
		switch( $e[1] ) {
		case 0:
			this.handler["null"]();
			break;
		case 1:
			this.handler["int"](o);
			break;
		case 2:
			this.handler["float"](o);
			break;
		case 3:
			this.handler.bool(o);
			break;
		case 4:
			this.encodeObject(o);
			break;
		case 5:
			throw new thx.error.Error("unable to encode TFunction type",null,null,{ fileName : "ValueEncoder.hx", lineNumber : 39, className : "thx.data.ValueEncoder", methodName : "encodeValue"});
			break;
		case 6:
			var c = $e[2];
			if(Std["is"](o,String)) this.handler.string(o); else if(Std["is"](o,Array)) this.encodeArray(o); else if(Std["is"](o,Date)) this.handler.date(o); else if(Std["is"](o,Hash)) this.encodeHash(o); else if(Std["is"](o,List)) this.encodeList(o); else throw new thx.error.Error("unable to encode class '{0}'",null,Type.getClassName(c),{ fileName : "ValueEncoder.hx", lineNumber : 53, className : "thx.data.ValueEncoder", methodName : "encodeValue"});
			break;
		case 7:
			var e = $e[2];
			throw new thx.error.Error("unable to encode TEnum type '{0}'",null,Type.getEnumName(e),{ fileName : "ValueEncoder.hx", lineNumber : 55, className : "thx.data.ValueEncoder", methodName : "encodeValue"});
			break;
		case 8:
			throw new thx.error.Error("unable to encode TUnknown type",null,null,{ fileName : "ValueEncoder.hx", lineNumber : 57, className : "thx.data.ValueEncoder", methodName : "encodeValue"});
			break;
		}
	}
	,encodeObject: function(o) {
		this.handler.startObject();
		var _g = 0, _g1 = Reflect.fields(o);
		while(_g < _g1.length) {
			var key = _g1[_g];
			++_g;
			this.handler.startField(key);
			this.encodeValue(Reflect.field(o,key));
			this.handler.endField();
		}
		this.handler.endObject();
	}
	,encodeHash: function(o) {
		this.handler.startObject();
		var $it0 = o.keys();
		while( $it0.hasNext() ) {
			var key = $it0.next();
			this.handler.startField(key);
			this.encodeValue(o.get(key));
			this.handler.endField();
		}
		this.handler.endObject();
	}
	,encodeList: function(list) {
		this.handler.startArray();
		var $it0 = list.iterator();
		while( $it0.hasNext() ) {
			var item = $it0.next();
			this.handler.startItem();
			this.encodeValue(item);
			this.handler.endItem();
		}
		this.handler.endArray();
	}
	,encodeArray: function(a) {
		this.handler.startArray();
		var _g = 0;
		while(_g < a.length) {
			var item = a[_g];
			++_g;
			this.handler.startItem();
			this.encodeValue(item);
			this.handler.endItem();
		}
		this.handler.endArray();
	}
	,__class__: thx.data.ValueEncoder
}
var IntIter = $hxClasses["IntIter"] = function(min,max) {
	this.min = min;
	this.max = max;
}
IntIter.__name__ = ["IntIter"];
IntIter.prototype = {
	min: null
	,max: null
	,hasNext: function() {
		return this.min < this.max;
	}
	,next: function() {
		return this.min++;
	}
	,__class__: IntIter
}
rg.query.BaseQuery = $hxClasses["rg.query.BaseQuery"] = function(delegate,first) {
	this._delegate = delegate;
	this._first = first;
	this._collected = [];
}
rg.query.BaseQuery.__name__ = ["rg","query","BaseQuery"];
rg.query.BaseQuery.delegateTransform = function(t) {
	return function(data,handler) {
		handler(t(data));
	};
}
rg.query.BaseQuery.prototype = {
	_first: null
	,_next: null
	,_delegate: null
	,_collected: null
	,data: function(handler) {
		return this.delegate(function(_,h) {
			handler(h);
		});
	}
	,cross: function(values) {
		return this.transform(rg.query.Transformers.cross(values));
	}
	,map: function(handler) {
		return this.transform(rg.query.Transformers.map(handler));
	}
	,log: function(f) {
		var api = console;
		if(null == f) f = api.log.$bind(api);
		if(null == f) return this;
		return this.transform(function(d) {
			f(d);
			return d;
		});
	}
	,logFirst: function(f) {
		var api = console;
		if(null == f) f = api.log.$bind(api);
		if(null == f) return this;
		return this.transform(function(d) {
			f(d[0]);
			return d;
		});
	}
	,mapFields: function(o) {
		var pairs = Reflect.fields(o).map(function(d,_) {
			return { src : d, dst : Reflect.field(o,d)};
		});
		return this.map(function(src,_) {
			var out = { };
			var _g = 0;
			while(_g < pairs.length) {
				var pair = pairs[_g];
				++_g;
				out[pair.dst] = Reflect.field(src,pair.src);
			}
			return out;
		});
	}
	,transform: function(t) {
		return this.delegate(rg.query.BaseQuery.delegateTransform(t));
	}
	,delegate: function(d) {
		var query = this._createQuery(d,this._first);
		this._next = query;
		return query;
	}
	,each: function(f) {
		return this.delegate(function(data,handler) {
			var tot = data.length, pos = 0, results = [];
			var complete = function(i,r) {
				results[i] = r;
				if(++pos == tot) handler(Arrays.flatten(results));
			};
			var _g = 0;
			while(_g < tot) {
				var i = _g++;
				f(data[i],(function(f1,a1) {
					return function(a2) {
						return f1(a1,a2);
					};
				})(complete,i));
			}
		});
	}
	,filter: function(f) {
		return this.transform(rg.query.Transformers.filter(f));
	}
	,filterByFields: function(f) {
		return this.transform(rg.query.Transformers.filterByFields(f));
	}
	,sort: function(f) {
		return this.transform(rg.query.Transformers.sort(f));
	}
	,sortByField: function(field,reverse) {
		return this.sortByFields([field],reverse);
	}
	,sortByFields: function(fields,reverse) {
		reverse = null == reverse?false:reverse;
		return this.sort(function(a,b) {
			var r;
			var _g = 0;
			while(_g < fields.length) {
				var field = fields[_g];
				++_g;
				r = (reverse?-1:1) * Dynamics.compare(Reflect.field(a,field),Reflect.field(b,field));
				if(r != 0) return r;
			}
			return 0;
		});
	}
	,limit: function(offset,count) {
		if(null == count) {
			count = offset;
			offset = 0;
		}
		return this.transform(rg.query.Transformers.limit(offset,count));
	}
	,append: function(useAseSource) {
		var me = this;
		if(null == useAseSource) useAseSource = false;
		return this.transform(function(arr) {
			me._first._collected.push(arr);
			if(useAseSource) return arr; else return [{ }];
		});
	}
	,collect: function() {
		var me = this;
		return this.transform(function(arr) {
			var collected = me._first._collected.pop();
			return collected.concat(arr);
		});
	}
	,reverse: function() {
		return this.transform(rg.query.Transformers.reverse);
	}
	,accumulate: function(groupby,on,forproperty,atproperty) {
		var map = new Hash();
		var q = this.sortByFields([groupby,on]);
		return q.transform(function(data) {
			var v, f;
			data.forEach(function(dp,_) {
				v = map.get(f = "" + Reflect.field(dp,on));
				if(null == v) v = 0.0;
				dp[atproperty] = v;
				map.set(f,v + Reflect.field(dp,forproperty));
			});
			return data;
		});
	}
	,load: function(handler) {
		this._first.load(handler);
	}
	,_query: function(t) {
		return t;
	}
	,_createQuery: function(delegate,first) {
		return new rg.query.BaseQuery(delegate,first);
	}
	,toString: function() {
		return Type.getClassName(Type.getClass(this)).split(".").pop() + (" [next: " + (null != this._next) + ", delegate: " + (null != this._delegate) + "]");
	}
	,_this: function(q) {
		return q;
	}
	,__class__: rg.query.BaseQuery
}
rg.query.ReportGridBaseQuery = $hxClasses["rg.query.ReportGridBaseQuery"] = function(delegate,first) {
	rg.query.BaseQuery.call(this,delegate,first);
}
rg.query.ReportGridBaseQuery.__name__ = ["rg","query","ReportGridBaseQuery"];
rg.query.ReportGridBaseQuery._defaultOptions = function(params,options) {
	if(null == options) options = { };
	if(null != params.tag) {
		options.tag = params.tag;
		options[params.tag] = Reflect.field(params,params.tag);
	}
	if(null == params.start) return options;
	options.start = params.start;
	options.end = params.end;
	return options;
}
rg.query.ReportGridBaseQuery._defaultSeriesOptions = function(params,options) {
	options = rg.query.ReportGridBaseQuery._defaultOptions(params,options);
	options.periodicity = params.periodicity;
	if(null != params.timezone) options.timeZone = params.timezone;
	if(null != params.groupby) options.groupBy = params.groupby;
	return options;
}
rg.query.ReportGridBaseQuery._ensureOptionalTimeParams = function(params) {
	if(null == params.start && null == params.end) return;
	if(null == params.start) {
		params.end = rg.query.ReportGridBaseQuery._date(params.end);
		params.start = params.end - 86400000;
	} else if(null == params.end) {
		params.start = rg.query.ReportGridBaseQuery._date(params.start);
		params.end = rg.query.ReportGridBaseQuery._date("now");
	} else {
		params.start = rg.query.ReportGridBaseQuery._date(params.start);
		params.end = rg.query.ReportGridBaseQuery._date(params.end);
	}
	if(params.start > params.end) {
		var t = params.end;
		params.end = params.start;
		params.start = t;
	}
}
rg.query.ReportGridBaseQuery._ensureTimeParams = function(params) {
	params.start = rg.query.ReportGridBaseQuery._date(null == params.start?"24 hours ago":params.start);
	params.end = rg.query.ReportGridBaseQuery._date(null == params.end?"now":params.end);
	if(params.start > params.end) {
		var t = params.end;
		params.end = params.start;
		params.start = t;
	}
	params.periodicity = params.periodicity == null?rg.util.Periodicity.defaultPeriodicity(params.end - params.start):params.periodicity;
}
rg.query.ReportGridBaseQuery._date = function(v) {
	if(Std["is"](v,Date)) return v.getTime(); else if(Std["is"](v,String)) return thx.date.DateParser.parse(v).getTime(); else if(Std["is"](v,Float)) return v; else {
		rg.query.ReportGridBaseQuery._error("invalid date format for " + v);
		return null;
	}
}
rg.query.ReportGridBaseQuery._where = function(event,where) {
	var ob = { };
	Objects.each(where,function(key,value) {
		ob[event + ((key.substr(0,1) == "."?"":".") + key)] = value;
	});
	return ob;
}
rg.query.ReportGridBaseQuery._error = function(s) {
	throw new thx.error.Error(s,null,null,{ fileName : "ReportGridQuery.hx", lineNumber : 438, className : "rg.query.ReportGridBaseQuery", methodName : "_error"});
}
rg.query.ReportGridBaseQuery._complete = function(transformer,params,handler) {
	return function(data) {
		handler(transformer(data,params));
	};
}
rg.query.ReportGridBaseQuery._prefixProperty = function(p) {
	return (p.substr(0,1) == "."?"":".") + p;
}
rg.query.ReportGridBaseQuery.__super__ = rg.query.BaseQuery;
rg.query.ReportGridBaseQuery.prototype = $extend(rg.query.BaseQuery.prototype,{
	executor: null
	,paths: function(p) {
		var me = this;
		return this.cross(null == p?[{ }]:Std["is"](p,Array)?p:[p]).each(function(params,handler) {
			me.executor.children(params.parent,{ type : "path"},rg.query.ReportGridBaseQuery._complete(rg.query.ReportGridTransformers.childrenPath,params,handler));
		});
	}
	,events: function(p) {
		var me = this;
		return this.cross(null == p?[{ }]:Std["is"](p,Array)?p:[p]).each(function(params,handler) {
			me.executor.children(params.path,{ type : "property"},rg.query.ReportGridBaseQuery._complete(rg.query.ReportGridTransformers.childrenEvent,params,handler));
		});
	}
	,properties: function(p) {
		var me = this;
		return this.cross(null == p?[{ }]:Std["is"](p,Array)?p:[p]).each(function(params,handler) {
			me.executor.children(params.path,{ property : params.event},rg.query.ReportGridBaseQuery._complete(rg.query.ReportGridTransformers.childrenProperty,params,handler));
		});
	}
	,values: function(p) {
		var me = this;
		return this.cross(null == p?[{ }]:Std["is"](p,Array)?p:[p]).each(function(params,handler) {
			me.executor.propertyValues(params.path,{ property : params.event + rg.query.ReportGridBaseQuery._prefixProperty(params.property)},rg.query.ReportGridBaseQuery._complete(rg.query.ReportGridTransformers.propertyValues,params,handler));
		});
	}
	,count: function(p) {
		var me = this;
		return this.cross(null == p?[{ }]:Std["is"](p,Array)?p:[p]).each(function(params,handler) {
			rg.query.ReportGridBaseQuery._ensureOptionalTimeParams(params);
			var options = rg.query.ReportGridBaseQuery._defaultOptions(params);
			if(null != params.where) {
				if(null != params.property) rg.query.ReportGridBaseQuery._error("the 'where' and the 'property' fields cannot be used together in a count query"); else if(null != params.value) rg.query.ReportGridBaseQuery._error("the 'where' and the 'value' fields cannot be used together in a count query");
				options.where = rg.query.ReportGridBaseQuery._where(params.event,params.where);
				me.executor.searchCount(params.path,options,rg.query.ReportGridBaseQuery._complete(null != params.tag?rg.query.ReportGridTransformers.eventCountTag:rg.query.ReportGridTransformers.eventCount,params,handler));
			} else if(null != params.property) {
				if(null == params.value) rg.query.ReportGridBaseQuery._error("can't count on a property");
				options.property = params.event + rg.query.ReportGridBaseQuery._prefixProperty(params.property);
				options.value = params.value;
				me.executor.propertyValueCount(params.path,options,rg.query.ReportGridBaseQuery._complete(null != params.tag?rg.query.ReportGridTransformers.propertyValueCountTag:rg.query.ReportGridTransformers.propertyValueCount,params,handler));
			} else {
				options.property = params.event;
				me.executor.propertyCount(params.path,options,rg.query.ReportGridBaseQuery._complete(null != params.tag?rg.query.ReportGridTransformers.eventCountTag:rg.query.ReportGridTransformers.eventCount,params,handler));
			}
		});
	}
	,summary: function(p) {
		var me = this;
		return this.cross(null == p?[{ }]:Std["is"](p,Array)?p:[p]).each(function(params,handler) {
			if(null == params.type) params.type = "mean";
			var options = { property : params.event + rg.query.ReportGridBaseQuery._prefixProperty(params.property), periodicity : "eternity"};
			switch(params.type.toLowerCase()) {
			case "mean":
				me.executor.propertyMeans(params.path,options,rg.query.ReportGridBaseQuery._complete(rg.query.ReportGridTransformers.propertySummary,params,handler));
				break;
			case "standarddeviation":
				me.executor.propertyStandardDeviations(params.path,options,rg.query.ReportGridBaseQuery._complete(rg.query.ReportGridTransformers.propertySummary,params,handler));
				break;
			default:
				rg.query.ReportGridBaseQuery._error("invalid summary type: '" + params.type + "'");
			}
		});
	}
	,summarySeries: function(p) {
		var me = this;
		return this.cross(null == p?[{ }]:Std["is"](p,Array)?p:[p]).each(function(params,handler) {
			if(null == params.type) params.type = "mean";
			rg.query.ReportGridBaseQuery._ensureTimeParams(params);
			var options = rg.query.ReportGridBaseQuery._defaultSeriesOptions(params);
			options.property = params.event + rg.query.ReportGridBaseQuery._prefixProperty(params.property);
			var tranform = null != params.tag?rg.query.ReportGridTransformers.propertySummarySeriesTagGroupedBy:rg.query.ReportGridTransformers.propertySummarySeries;
			switch(params.type.toLowerCase()) {
			case "mean":
				me.executor.propertyMeans(params.path,options,rg.query.ReportGridBaseQuery._complete(tranform,params,handler));
				break;
			case "standarddeviation":
				me.executor.propertyStandardDeviations(params.path,options,rg.query.ReportGridBaseQuery._complete(tranform,params,handler));
				break;
			default:
				rg.query.ReportGridBaseQuery._error("invalid summary type: '" + params.type + "'");
			}
		});
	}
	,intersect: function(p) {
		var me = this;
		return this.cross(null == p?[{ }]:Std["is"](p,Array)?p:[p]).each(function(params,handler) {
			rg.query.ReportGridBaseQuery._ensureOptionalTimeParams(params);
			var options = rg.query.ReportGridBaseQuery._defaultOptions(params,{ periodicity : "eternity"}), properties = [];
			options.properties = properties;
			var _g1 = 0, _g = params.properties.length;
			while(_g1 < _g) {
				var i = _g1++;
				var item = params.properties[i];
				if(Std["is"](item,String)) item = params.properties[i] = { property : item};
				var o = { property : params.event + rg.query.ReportGridBaseQuery._prefixProperty(item.property)};
				if(null != item.top) {
					if(null != item.bottom) rg.query.ReportGridBaseQuery._error("you can't specify both 'top' and 'bottom' for the same property");
					o.order = "descending";
					o.limit = item.top;
				} else if(null != item.bottom) {
					o.order = "ascending";
					o.limit = item.bottom;
				}
				properties.push(o);
			}
			me.executor.intersect(params.path,options,rg.query.ReportGridBaseQuery._complete(rg.query.ReportGridTransformers.intersect,params,handler));
		});
	}
	,intersectSeries: function(p) {
		var me = this;
		return this.cross(null == p?[{ }]:Std["is"](p,Array)?p:[p]).each(function(params,handler) {
			rg.query.ReportGridBaseQuery._ensureTimeParams(params);
			var options = rg.query.ReportGridBaseQuery._defaultSeriesOptions(params), properties = [];
			options.properties = properties;
			var _g1 = 0, _g = params.properties.length;
			while(_g1 < _g) {
				var i = _g1++;
				var item = params.properties[i];
				if(Std["is"](item,String)) item = params.properties[i] = { property : item};
				var o = { property : params.event + rg.query.ReportGridBaseQuery._prefixProperty(item.property)};
				if(null != item.top) {
					if(null != item.bottom) rg.query.ReportGridBaseQuery._error("you can't specify both 'top' and 'bottom' for the same property");
					o.order = "descending";
					o.limit = item.top;
				} else if(null != item.bottom) {
					o.order = "ascending";
					o.limit = item.bottom;
				}
				properties.push(o);
			}
			me.executor.intersect(params.path,options,rg.query.ReportGridBaseQuery._complete(rg.query.ReportGridTransformers.intersectSeries,params,handler));
		});
	}
	,histogram: function(p) {
		var me = this;
		return this.cross(null == p?[{ }]:Std["is"](p,Array)?p:[p]).each(function(params,handler) {
			rg.query.ReportGridBaseQuery._ensureOptionalTimeParams(params);
			var options = rg.query.ReportGridBaseQuery._defaultOptions(params,{ property : params.event + rg.query.ReportGridBaseQuery._prefixProperty(params.property)});
			haxe.Log.trace(options,{ fileName : "ReportGridQuery.hx", lineNumber : 272, className : "rg.query.ReportGridBaseQuery", methodName : "histogram"});
			if(null != params.top) {
				if(null != params.bottom) rg.query.ReportGridBaseQuery._error("you can't specify both 'top' and 'bottom' in the same query");
				options.top = params.top;
			} else if(null != params.bottom) options.bottom = params.bottom;
			me.executor.histogram(params.path,options,rg.query.ReportGridBaseQuery._complete(rg.query.ReportGridTransformers.histogram,params,handler));
		});
	}
	,propertiesHistogram: function(p) {
		var me = this;
		return this.cross(null == p?[{ }]:Std["is"](p,Array)?p:[p]).each(function(params,handler) {
			var options = rg.query.ReportGridBaseQuery._defaultOptions(params,{ property : params.event + rg.query.ReportGridBaseQuery._prefixProperty(params.property)});
			me.executor.propertiesHistogram(params.path,options,rg.query.ReportGridBaseQuery._complete(rg.query.ReportGridTransformers.propertiesHistogram,params,handler));
		});
	}
	,series: function(p) {
		var me = this;
		return this.cross(null == p?[{ }]:Std["is"](p,Array)?p:[p]).each(function(params,handler) {
			rg.query.ReportGridBaseQuery._ensureTimeParams(params);
			var options = rg.query.ReportGridBaseQuery._defaultSeriesOptions(params);
			if(null != params.where) {
				if(null != params.property) rg.query.ReportGridBaseQuery._error("the 'where' and the 'property' fields cannot be used together in a count query"); else if(null != params.value) rg.query.ReportGridBaseQuery._error("the 'where' and the 'value' fields cannot be used together in a count query");
				options.where = rg.query.ReportGridBaseQuery._where(params.event,params.where);
				me.executor.searchSeries(params.path,options,rg.query.ReportGridBaseQuery._complete(null != params.tag?rg.query.ReportGridTransformers.eventSeriesTagGroupedBy:rg.query.ReportGridTransformers.eventSeries,params,handler));
			} else if(null != params.property) {
				if(null == params.value) rg.query.ReportGridBaseQuery._error("can't count on a property");
				options.property = params.event + rg.query.ReportGridBaseQuery._prefixProperty(params.property);
				options.value = params.value;
				me.executor.propertyValueSeries(params.path,options,rg.query.ReportGridBaseQuery._complete(null != params.tag?rg.query.ReportGridTransformers.propertyValueSeriesTagGroupedBy:rg.query.ReportGridTransformers.propertyValueSeries,params,handler));
			} else {
				options.property = params.event;
				me.executor.propertySeries(params.path,options,rg.query.ReportGridBaseQuery._complete(null != params.tag?rg.query.ReportGridTransformers.eventSeriesTagGroupedBy:rg.query.ReportGridTransformers.eventSeries,params,handler));
			}
		});
	}
	,_crossp: function(p) {
		return this.cross(null == p?[{ }]:Std["is"](p,Array)?p:[p]);
	}
	,_params: function(p) {
		return null == p?[{ }]:Std["is"](p,Array)?p:[p];
	}
	,_createQuery: function(delegate,first) {
		var query = new rg.query.ReportGridBaseQuery(delegate,first);
		query.executor = this.executor;
		return query;
	}
	,__class__: rg.query.ReportGridBaseQuery
});
rg.query.ReportGridQuery = $hxClasses["rg.query.ReportGridQuery"] = function(executor) {
	rg.query.ReportGridBaseQuery.call(this,null,this);
	this.executor = executor;
}
rg.query.ReportGridQuery.__name__ = ["rg","query","ReportGridQuery"];
rg.query.ReportGridQuery.create = function(executor) {
	var start = new rg.query.ReportGridQuery(executor), query = start._createQuery(null,start);
	start._next = query;
	return query;
}
rg.query.ReportGridQuery.__super__ = rg.query.ReportGridBaseQuery;
rg.query.ReportGridQuery.prototype = $extend(rg.query.ReportGridBaseQuery.prototype,{
	load: function(handler) {
		rg.query.Query.loadHandler(this,handler);
	}
	,__class__: rg.query.ReportGridQuery
});
var Dates = $hxClasses["Dates"] = function() { }
Dates.__name__ = ["Dates"];
Dates.format = function(d,param,params,culture) {
	return (Dates.formatf(param,params,culture))(d);
}
Dates.formatf = function(param,params,culture) {
	params = thx.culture.FormatParams.params(param,params,"D");
	var format = params.shift();
	switch(format) {
	case "D":
		return function(d) {
			return thx.culture.FormatDate.date(d,culture);
		};
	case "DS":
		return function(d) {
			return thx.culture.FormatDate.dateShort(d,culture);
		};
	case "DST":
		return function(d) {
			return thx.culture.FormatDate.dateShort(d,culture) + " " + thx.culture.FormatDate.time(d,culture);
		};
	case "DSTS":
		return function(d) {
			return thx.culture.FormatDate.dateShort(d,culture) + " " + thx.culture.FormatDate.timeShort(d,culture);
		};
	case "DTS":
		return function(d) {
			return thx.culture.FormatDate.date(d,culture) + " " + thx.culture.FormatDate.timeShort(d,culture);
		};
	case "Y":
		return function(d) {
			return thx.culture.FormatDate.year(d,culture);
		};
	case "YM":
		return function(d) {
			return thx.culture.FormatDate.yearMonth(d,culture);
		};
	case "M":
		return function(d) {
			return thx.culture.FormatDate.month(d,culture);
		};
	case "MN":
		return function(d) {
			return thx.culture.FormatDate.monthName(d,culture);
		};
	case "MS":
		return function(d) {
			return thx.culture.FormatDate.monthNameShort(d,culture);
		};
	case "MD":
		return function(d) {
			return thx.culture.FormatDate.monthDay(d,culture);
		};
	case "WD":
		return function(d) {
			return thx.culture.FormatDate.weekDay(d,culture);
		};
	case "WDN":
		return function(d) {
			return thx.culture.FormatDate.weekDayName(d,culture);
		};
	case "WDS":
		return function(d) {
			return thx.culture.FormatDate.weekDayNameShort(d,culture);
		};
	case "R":
		return function(d) {
			return thx.culture.FormatDate.dateRfc(d,culture);
		};
	case "DT":
		return function(d) {
			return thx.culture.FormatDate.dateTime(d,culture);
		};
	case "U":
		return function(d) {
			return thx.culture.FormatDate.universal(d,culture);
		};
	case "S":
		return function(d) {
			return thx.culture.FormatDate.sortable(d,culture);
		};
	case "T":
		return function(d) {
			return thx.culture.FormatDate.time(d,culture);
		};
	case "TS":
		return function(d) {
			return thx.culture.FormatDate.timeShort(d,culture);
		};
	case "C":
		var f = params[0];
		if(null == f) return function(d) {
			return thx.culture.FormatDate.date(d,culture);
		}; else return function(d) {
			return thx.culture.FormatDate.format(f,d,culture,params[1] != null?params[1] == "true":true);
		};
		break;
	default:
		throw new thx.error.Error("Unsupported date format: {0}",null,format,{ fileName : "Dates.hx", lineNumber : 71, className : "Dates", methodName : "formatf"});
	}
}
Dates.interpolate = function(f,a,b,equation) {
	return (Dates.interpolatef(a,b,equation))(f);
}
Dates.interpolatef = function(a,b,equation) {
	var f = Floats.interpolatef(a.getTime(),b.getTime(),equation);
	return function(v) {
		return Date.fromTime(f(v));
	};
}
Dates.snap = function(time,period,mode) {
	if(mode == null) mode = 0;
	if(mode < 0) switch(period) {
	case "second":
		return Math.floor(time / 1000.0) * 1000.0;
	case "minute":
		return Math.floor(time / 60000.0) * 60000.0;
	case "hour":
		return Math.floor(time / 3600000.0) * 3600000.0;
	case "day":
		return Math.floor(time / 86400000.) * 86400000.;
	case "week":
		return Math.floor(time / 604800000.) * 604800000.;
	case "month":
		var d = Date.fromTime(time);
		return new Date(d.getFullYear(),d.getMonth(),1,0,0,0).getTime();
	case "year":
		var d = Date.fromTime(time);
		return new Date(d.getFullYear(),0,1,0,0,0).getTime();
	case "eternity":
		return 0;
	default:
		return (function($this) {
			var $r;
			throw new thx.error.Error("unknown period '{0}'",null,period,{ fileName : "Dates.hx", lineNumber : 111, className : "Dates", methodName : "snap"});
			return $r;
		}(this));
	} else if(mode > 0) switch(period) {
	case "second":
		return Math.ceil(time / 1000.0) * 1000.0;
	case "minute":
		return Math.ceil(time / 60000.0) * 60000.0;
	case "hour":
		return Math.ceil(time / 3600000.0) * 3600000.0;
	case "day":
		return Math.ceil(time / 86400000.) * 86400000.;
	case "week":
		return Math.ceil(time / 604800000.) * 604800000.;
	case "month":
		var d = Date.fromTime(time);
		return new Date(d.getFullYear(),d.getMonth() + 1,1,0,0,0).getTime();
	case "year":
		var d = Date.fromTime(time);
		return new Date(d.getFullYear() + 1,0,1,0,0,0).getTime();
	case "eternity":
		return 0;
	default:
		return (function($this) {
			var $r;
			throw new thx.error.Error("unknown period '{0}'",null,period,{ fileName : "Dates.hx", lineNumber : 136, className : "Dates", methodName : "snap"});
			return $r;
		}(this));
	} else switch(period) {
	case "second":
		return Math.round(time / 1000.0) * 1000.0;
	case "minute":
		return Math.round(time / 60000.0) * 60000.0;
	case "hour":
		return Math.round(time / 3600000.0) * 3600000.0;
	case "day":
		return Math.round(time / 86400000.) * 86400000.;
	case "week":
		return Math.round(time / 604800000.) * 604800000.;
	case "month":
		var d = Date.fromTime(time), mod = d.getDate() > Math.round(DateTools.getMonthDays(d) / 2)?1:0;
		return new Date(d.getFullYear(),d.getMonth() + mod,1,0,0,0).getTime();
	case "year":
		var d = Date.fromTime(time), mod = time > new Date(d.getFullYear(),6,2,0,0,0).getTime()?1:0;
		return new Date(d.getFullYear() + mod,0,1,0,0,0).getTime();
	case "eternity":
		return 0;
	default:
		return (function($this) {
			var $r;
			throw new thx.error.Error("unknown period '{0}'",null,period,{ fileName : "Dates.hx", lineNumber : 162, className : "Dates", methodName : "snap"});
			return $r;
		}(this));
	}
}
Dates.snapToWeekDay = function(time,day) {
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
		throw new thx.error.Error("unknown week day '{0}'",null,day,{ fileName : "Dates.hx", lineNumber : 188, className : "Dates", methodName : "snapToWeekDay"});
	}
	return time - (d - s) % 7 * 24 * 60 * 60 * 1000;
}
Dates.canParse = function(s) {
	return Dates._reparse.match(s);
}
Dates.parse = function(s) {
	var parts = s.split(".");
	var date = Date.fromString(StringTools.replace(parts[0],"T"," "));
	if(parts.length > 1) date = Date.fromTime(date.getTime() + Std.parseInt(parts[1]));
	return date;
}
Dates.compare = function(a,b) {
	return Floats.compare(a.getTime(),b.getTime());
}
Dates.prototype = {
	__class__: Dates
}
if(!thx.date) thx.date = {}
thx.date.DateParser = $hxClasses["thx.date.DateParser"] = function() { }
thx.date.DateParser.__name__ = ["thx","date","DateParser"];
thx.date.DateParser.parse = function(s,d) {
	var time = thx.date.DateParser.parseTime(s), v;
	if(null == d) d = Date.now();
	s = StringTools.replace(s,time.matched,"");
	var year = 0, month = 0, day = 0, found = null != time.matched;
	if(thx.date.DateParser.dateexp.match(s)) {
		found = true;
		s = StringTools.replace(s,thx.date.DateParser.dateexp.matched(0),"");
		if(null != (v = thx.date.DateParser.dateexp.matched(1))) {
			day = Std.parseInt(thx.date.DateParser.dateexp.matched(2));
			month = thx.date.DateParser.months.indexOf(v.toLowerCase());
			year = null != (v = thx.date.DateParser.dateexp.matched(3))?thx.date.DateParser.fixyear(Std.parseInt(v)):d.getFullYear();
		} else if(null != (v = thx.date.DateParser.dateexp.matched(4))) {
			day = Std.parseInt(thx.date.DateParser.dateexp.matched(5));
			month = thx.date.DateParser.shortmonths.indexOf(v.toLowerCase());
			year = null != (v = thx.date.DateParser.dateexp.matched(6))?thx.date.DateParser.fixyear(Std.parseInt(v)):d.getFullYear();
		} else if(null != (v = thx.date.DateParser.dateexp.matched(8))) {
			month = thx.date.DateParser.months.indexOf(v.toLowerCase());
			day = null != (v = thx.date.DateParser.dateexp.matched(7))?Std.parseInt(v):1;
			year = null != (v = thx.date.DateParser.dateexp.matched(9))?thx.date.DateParser.fixyear(Std.parseInt(v)):d.getFullYear();
		} else if(null != (v = thx.date.DateParser.dateexp.matched(11))) {
			month = thx.date.DateParser.shortmonths.indexOf(v.toLowerCase());
			day = null != (v = thx.date.DateParser.dateexp.matched(10))?Std.parseInt(v):1;
			year = null != (v = thx.date.DateParser.dateexp.matched(12))?thx.date.DateParser.fixyear(Std.parseInt(v)):d.getFullYear();
		} else if(null != (v = thx.date.DateParser.dateexp.matched(14))) {
			month = thx.date.DateParser.months.indexOf(v.toLowerCase());
			day = null != (v = thx.date.DateParser.dateexp.matched(13))?Std.parseInt(v):1;
			year = null != (v = thx.date.DateParser.dateexp.matched(15))?thx.date.DateParser.fixyear(Std.parseInt(v)):d.getFullYear();
		} else if(null != (v = thx.date.DateParser.dateexp.matched(17))) {
			month = thx.date.DateParser.shortmonths.indexOf(v.toLowerCase());
			day = null != (v = thx.date.DateParser.dateexp.matched(16))?Std.parseInt(v):1;
			year = null != (v = thx.date.DateParser.dateexp.matched(18))?thx.date.DateParser.fixyear(Std.parseInt(v)):d.getFullYear();
		} else if(null != (v = thx.date.DateParser.dateexp.matched(19))) {
			day = Std.parseInt(thx.date.DateParser.dateexp.matched(20));
			month = Std.parseInt(v) - 1;
			year = null != (v = thx.date.DateParser.dateexp.matched(21))?thx.date.DateParser.fixyear(Std.parseInt(v)):d.getFullYear();
		} else if(null != (v = thx.date.DateParser.dateexp.matched(23))) {
			day = Std.parseInt(thx.date.DateParser.dateexp.matched(22));
			month = Std.parseInt(v) - 1;
			year = null != (v = thx.date.DateParser.dateexp.matched(24))?thx.date.DateParser.fixyear(Std.parseInt(v)):d.getFullYear();
		} else if(null != (v = thx.date.DateParser.dateexp.matched(25))) {
			year = thx.date.DateParser.fixyear(Std.parseInt(v));
			day = Std.parseInt(thx.date.DateParser.dateexp.matched(27));
			month = Std.parseInt(thx.date.DateParser.dateexp.matched(26)) - 1;
		} else if(null != (v = thx.date.DateParser.dateexp.matched(28))) {
			year = d.getFullYear();
			day = Std.parseInt(v);
			month = d.getMonth();
		}
	} else if(thx.date.DateParser.absdateexp.match(s)) {
		found = true;
		s = StringTools.replace(s,thx.date.DateParser.absdateexp.matched(0),"");
		year = d.getFullYear();
		month = d.getMonth();
		day = d.getDate();
		if(null != (v = thx.date.DateParser.absdateexp.matched(1))) switch(v.toLowerCase()) {
		case "now":case "this second":
			if(null == time.matched) {
				time.hour = d.getHours();
				time.minute = d.getMinutes();
				time.second = d.getSeconds();
			}
			break;
		case "tomorrow":
			day += 1;
			break;
		case "yesterday":
			day -= 1;
			break;
		} else if(null != (v = thx.date.DateParser.absdateexp.matched(3))) {
			var t = thx.date.DateParser.absdateexp.matched(2), v1 = thx.date.DateParser.months.indexOf(v.toLowerCase());
			if(v1 == month) year += thx.date.DateParser.last(t)?-1:thx.date.DateParser.next(t)?1:0; else if(v1 > month) year += thx.date.DateParser.last(t)?-1:0; else year += thx.date.DateParser.next(t)?1:0;
			month = v1;
			day = 1;
		} else if(null != (v = thx.date.DateParser.absdateexp.matched(5))) {
			var t = thx.date.DateParser.absdateexp.matched(4), v1 = thx.date.DateParser.days.indexOf(v.toLowerCase());
			var wd = d.getDay();
			if(v1 == wd) day += thx.date.DateParser.last(t)?-7:thx.date.DateParser.next(t)?7:0; else if(v1 > wd) day += v1 - wd + (thx.date.DateParser.last(t)?-7:0); else day += v1 - wd + (thx.date.DateParser.next(t)?7:0);
		} else if(null != (v = thx.date.DateParser.absdateexp.matched(7))) {
			var t = thx.date.DateParser.absdateexp.matched(6), v1 = thx.date.DateParser.shortmonths.indexOf(v.toLowerCase());
			if(v1 == month) year += thx.date.DateParser.last(t)?-1:thx.date.DateParser.next(t)?1:0; else if(v1 > month) year += thx.date.DateParser.last(t)?-1:0; else year += thx.date.DateParser.next(t)?1:0;
			month = v1;
			day = 1;
		} else if(null != (v = thx.date.DateParser.absdateexp.matched(9))) {
			var t = thx.date.DateParser.absdateexp.matched(8), v1 = thx.date.DateParser.shortdays.indexOf(v.toLowerCase());
			var wd = d.getDay();
			if(v1 == wd) day += thx.date.DateParser.last(t)?-7:thx.date.DateParser.next(t)?7:0; else if(v1 > wd) day += v1 - wd + (thx.date.DateParser.last(t)?-7:0); else day += v1 - wd + (thx.date.DateParser.next(t)?7:0);
		}
		if(null == time.matched) time.matched = "x";
	} else {
		year = d.getFullYear();
		month = d.getMonth();
		day = d.getDate();
	}
	while(thx.date.DateParser.relexp.match(s)) {
		found = true;
		s = StringTools.replace(s,thx.date.DateParser.relexp.matched(0),"");
		var dir = thx.date.DateParser.relexp.matched(1), qt, period;
		if(null != dir) {
			qt = null != (v = thx.date.DateParser.relexp.matched(2))?Std.parseInt(v):1;
			period = thx.date.DateParser.relexp.matched(3);
		} else {
			period = thx.date.DateParser.relexp.matched(5);
			if(null == period) break;
			qt = null != (v = thx.date.DateParser.relexp.matched(4))?Std.parseInt(v):1;
			dir = null != (v = thx.date.DateParser.relexp.matched(6))?v:"after";
		}
		dir = dir.toLowerCase();
		switch(dir) {
		case "plus":case "+":case "from":case "hence":case "after":
			break;
		case "minus":case "-":case "before":case "ago":
			qt = -qt;
			break;
		}
		switch(dir) {
		case "ago":case "in":
			if(null == time.matched) {
				time.hour = d.getHours();
				time.minute = d.getMinutes();
				time.second = d.getSeconds();
				time.matched = "x";
			}
			break;
		}
		switch(period.toLowerCase()) {
		case "second":case "seconds":
			time.second += qt;
			break;
		case "minute":case "minutes":
			time.minute += qt;
			break;
		case "hour":case "hours":
			time.hour += qt;
			break;
		case "day":case "days":
			day += qt;
			break;
		case "week":case "weeks":
			day += qt * 7;
			break;
		case "month":case "months":
			month += qt;
			break;
		case "year":case "years":
			year += qt;
			break;
		}
	}
	if(!found) throw new thx.error.Error("no date information found in the string '{0}'",null,s,{ fileName : "DateParser.hx", lineNumber : 338, className : "thx.date.DateParser", methodName : "parse"});
	return Date.fromTime(new Date(year,month,day,time.hour,time.minute,time.second).getTime() + time.millis);
}
thx.date.DateParser.parseTime = function(s) {
	var result = { hour : 0, minute : 0, second : 0, millis : 0.0, matched : null};
	if(!thx.date.DateParser.timeexp.match(s)) return result;
	result.matched = thx.date.DateParser.timeexp.matched(0);
	var v;
	if(null != (v = thx.date.DateParser.timeexp.matched(1))) {
		result.hour = Std.parseInt(v) + thx.date.DateParser.plusPm(thx.date.DateParser.timeexp.matched(3));
		result.minute = Std.parseInt(thx.date.DateParser.timeexp.matched(2));
	} else if(null != (v = thx.date.DateParser.timeexp.matched(4))) {
		result.hour = Std.parseInt(v);
		result.minute = Std.parseInt(thx.date.DateParser.timeexp.matched(5));
		if(null != (v = thx.date.DateParser.timeexp.matched(6))) result.second = Std.parseInt(v);
		if(null != (v = thx.date.DateParser.timeexp.matched(7))) result.millis = Std.parseFloat(v) / 1000;
	} else if(null != (v = thx.date.DateParser.timeexp.matched(8))) {
		result.hour = Std.parseInt(v) + thx.date.DateParser.plusPm(thx.date.DateParser.timeexp.matched(10));
		result.minute = Std.parseInt(thx.date.DateParser.timeexp.matched(9));
	} else if(null != (v = thx.date.DateParser.timeexp.matched(11))) result.hour = Std.parseInt(v) + thx.date.DateParser.plusPm(thx.date.DateParser.timeexp.matched(12)); else if(null != (v = thx.date.DateParser.timeexp.matched(13))) switch(v.toLowerCase()) {
	case "evening":
		result.hour = 17;
		break;
	case "morning":
		result.hour = 8;
		break;
	case "afternoon":
		result.hour = 14;
		break;
	case "sunsrise":case "dawn":
		result.hour = 6;
		break;
	case "sunset":case "dusk":
		result.hour = 19;
		break;
	case "noon":case "midday":case "mid-day":
		result.hour = 12;
		break;
	case "mid-night":case "midnight":
		result.hour = 23;
		result.minute = 59;
		result.second = 59;
		result.millis = 0.999;
		break;
	} else throw new thx.error.Error("failed to parse time for '{0}'",null,s,{ fileName : "DateParser.hx", lineNumber : 405, className : "thx.date.DateParser", methodName : "parseTime"});
	return result;
}
thx.date.DateParser.fixyear = function(y) {
	if(y < 70) return 2000 + y; else if(y < 100) return 1900 + y; else return y;
}
thx.date.DateParser.last = function(s) {
	if(null == s) return false; else return "last" == s.toLowerCase();
}
thx.date.DateParser.next = function(s) {
	if(null == s) return true; else return "next" == s.toLowerCase();
}
thx.date.DateParser.plusPm = function(s) {
	if(null == s) return 0; else return (function($this) {
		var $r;
		switch(s.toLowerCase()) {
		case "pm":case "evening":case "afternoon":
			$r = 12;
			break;
		default:
			$r = 0;
		}
		return $r;
	}(this));
}
thx.date.DateParser.prototype = {
	__class__: thx.date.DateParser
}
var ValueType = $hxClasses["ValueType"] = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] }
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
var Type = $hxClasses["Type"] = function() { }
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	if(o.__enum__ != null) return null;
	return o.__class__;
}
Type.getEnum = function(o) {
	if(o == null) return null;
	return o.__enum__;
}
Type.getSuperClass = function(c) {
	return c.__super__;
}
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
}
Type.getEnumName = function(e) {
	var a = e.__ename__;
	return a.join(".");
}
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || cl.__name__ == null) return null;
	return cl;
}
Type.resolveEnum = function(name) {
	var e = $hxClasses[name];
	if(e == null || e.__ename__ == null) return null;
	return e;
}
Type.createInstance = function(cl,args) {
	if(args.length <= 3) return new cl(args[0],args[1],args[2]);
	if(args.length > 8) throw "Too many arguments";
	return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
}
Type.createEmptyInstance = function(cl) {
	function empty() {}; empty.prototype = cl.prototype;
	return new empty();
}
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw "Constructor " + constr + " need parameters";
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
	return f;
}
Type.createEnumIndex = function(e,index,params) {
	var c = e.__constructs__[index];
	if(c == null) throw index + " is not a valid enum constructor index";
	return Type.createEnum(e,c,params);
}
Type.getInstanceFields = function(c) {
	var a = [];
	for(var i in c.prototype) a.push(i);
	a.remove("__class__");
	a.remove("__properties__");
	return a;
}
Type.getClassFields = function(c) {
	var a = Reflect.fields(c);
	a.remove("__name__");
	a.remove("__interfaces__");
	a.remove("__properties__");
	a.remove("__super__");
	a.remove("prototype");
	return a;
}
Type.getEnumConstructs = function(e) {
	var a = e.__constructs__;
	return a.copy();
}
Type["typeof"] = function(v) {
	switch(typeof(v)) {
	case "boolean":
		return ValueType.TBool;
	case "string":
		return ValueType.TClass(String);
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
		return ValueType.TFloat;
	case "object":
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c = v.__class__;
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	case "function":
		if(v.__name__ != null) return ValueType.TObject;
		return ValueType.TFunction;
	case "undefined":
		return ValueType.TNull;
	default:
		return ValueType.TUnknown;
	}
}
Type.enumEq = function(a,b) {
	if(a == b) return true;
	try {
		if(a[0] != b[0]) return false;
		var _g1 = 2, _g = a.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(!Type.enumEq(a[i],b[i])) return false;
		}
		var e = a.__enum__;
		if(e != b.__enum__ || e == null) return false;
	} catch( e ) {
		return false;
	}
	return true;
}
Type.enumConstructor = function(e) {
	return e[0];
}
Type.enumParameters = function(e) {
	return e.slice(2);
}
Type.enumIndex = function(e) {
	return e[1];
}
Type.allEnums = function(e) {
	var all = [];
	var cst = e.__constructs__;
	var _g = 0;
	while(_g < cst.length) {
		var c = cst[_g];
		++_g;
		var v = Reflect.field(e,c);
		if(!Reflect.isFunction(v)) all.push(v);
	}
	return all;
}
Type.prototype = {
	__class__: Type
}
thx.util.Message = $hxClasses["thx.util.Message"] = function(message,params,param) {
	this.message = message;
	if(null == params) this.params = []; else this.params = params;
	if(null != param) this.params.push(param);
}
thx.util.Message.__name__ = ["thx","util","Message"];
thx.util.Message.prototype = {
	message: null
	,params: null
	,toString: function() {
		return Strings.format(this.message,this.params);
	}
	,translatef: function(translator) {
		return Strings.format(translator(this.message),this.params);
	}
	,translate: function(translator,domain) {
		if(null == domain) domain = translator.getDomain();
		var culture = thx.culture.Culture.get(domain);
		if(this.params.length == 1 && Std["is"](this.params[0],Int)) return Strings.format(translator.__(null,this.message,this.params[0],domain),this.params,null,culture); else return Strings.format(translator._(this.message,domain),this.params,null,culture);
	}
	,__class__: thx.util.Message
}
var Enums = $hxClasses["Enums"] = function() { }
Enums.__name__ = ["Enums"];
Enums.string = function(e) {
	var cons = e[0];
	var params = [];
	var _g = 0, _g1 = e.slice(2);
	while(_g < _g1.length) {
		var param = _g1[_g];
		++_g;
		params.push(Dynamics.string(param));
	}
	return cons + (params.length == 0?"":"(" + params.join(", ") + ")");
}
Enums.compare = function(a,b) {
	var v;
	if((v = a[1] - b[1]) != 0) return v;
	return Arrays.compare(a.slice(2),b.slice(2));
}
Enums.prototype = {
	__class__: Enums
}
var js = js || {}
js.Boot = $hxClasses["js.Boot"] = function() { }
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
js.Boot.__trace = function(v,i) {
	var msg = i != null?i.fileName + ":" + i.lineNumber + ": ":"";
	msg += js.Boot.__string_rec(v,"");
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML += js.Boot.__unhtml(msg) + "<br/>"; else if(typeof(console) != "undefined" && console.log != null) console.log(msg);
}
js.Boot.__clear_trace = function() {
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
}
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ != null || o.__ename__ != null)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__ != null) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2, _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
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
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
}
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
}
js.Boot.__instanceof = function(o,cl) {
	try {
		if(o instanceof cl) {
			if(cl == Array) return o.__enum__ == null;
			return true;
		}
		if(js.Boot.__interfLoop(o.__class__,cl)) return true;
	} catch( e ) {
		if(cl == null) return false;
	}
	switch(cl) {
	case Int:
		return Math.ceil(o%2147483648.0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return o === true || o === false;
	case String:
		return typeof(o) == "string";
	case Dynamic:
		return true;
	default:
		if(o == null) return false;
		return o.__enum__ == cl || cl == Class && o.__name__ != null || cl == Enum && o.__ename__ != null;
	}
}
js.Boot.__init = function() {
	js.Lib.isIE = typeof document!='undefined' && document.all != null && typeof window!='undefined' && window.opera == null;
	js.Lib.isOpera = typeof window!='undefined' && window.opera != null;
	Array.prototype.copy = Array.prototype.slice;
	Array.prototype.insert = function(i,x) {
		this.splice(i,0,x);
	};
	Array.prototype.remove = Array.prototype.indexOf?function(obj) {
		var idx = this.indexOf(obj);
		if(idx == -1) return false;
		this.splice(idx,1);
		return true;
	}:function(obj) {
		var i = 0;
		var l = this.length;
		while(i < l) {
			if(this[i] == obj) {
				this.splice(i,1);
				return true;
			}
			i++;
		}
		return false;
	};
	Array.prototype.iterator = function() {
		return { cur : 0, arr : this, hasNext : function() {
			return this.cur < this.arr.length;
		}, next : function() {
			return this.arr[this.cur++];
		}};
	};
	if(String.prototype.cca == null) String.prototype.cca = String.prototype.charCodeAt;
	String.prototype.charCodeAt = function(i) {
		var x = this.cca(i);
		if(x != x) return undefined;
		return x;
	};
	var oldsub = String.prototype.substr;
	String.prototype.substr = function(pos,len) {
		if(pos != null && pos != 0 && len != null && len < 0) return "";
		if(len == null) len = this.length;
		if(pos < 0) {
			pos = this.length + pos;
			if(pos < 0) pos = 0;
		} else if(len < 0) len = this.length + len - pos;
		return oldsub.apply(this,[pos,len]);
	};
	Function.prototype["$bind"] = function(o) {
		var f = function() {
			return f.method.apply(f.scope,arguments);
		};
		f.scope = o;
		f.method = this;
		return f;
	};
}
js.Boot.prototype = {
	__class__: js.Boot
}
var haxe = haxe || {}
haxe.Timer = $hxClasses["haxe.Timer"] = function(time_ms) {
	var arr = haxe_timers;
	this.id = arr.length;
	arr[this.id] = this;
	this.timerId = window.setInterval("haxe_timers[" + this.id + "].run();",time_ms);
}
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.delay = function(f,time_ms) {
	var t = new haxe.Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
}
haxe.Timer.measure = function(f,pos) {
	var t0 = haxe.Timer.stamp();
	var r = f();
	haxe.Log.trace(haxe.Timer.stamp() - t0 + "s",pos);
	return r;
}
haxe.Timer.stamp = function() {
	return Date.now().getTime() / 1000;
}
haxe.Timer.prototype = {
	id: null
	,timerId: null
	,stop: function() {
		if(this.id == null) return;
		window.clearInterval(this.timerId);
		var arr = haxe_timers;
		arr[this.id] = null;
		if(this.id > 100 && this.id == arr.length - 1) {
			var p = this.id - 1;
			while(p >= 0 && arr[p] == null) p--;
			arr = arr.slice(0,p + 1);
		}
		this.id = null;
	}
	,run: function() {
	}
	,__class__: haxe.Timer
}
if(!thx.translation) thx.translation = {}
thx.translation.ITranslation = $hxClasses["thx.translation.ITranslation"] = function() { }
thx.translation.ITranslation.__name__ = ["thx","translation","ITranslation"];
thx.translation.ITranslation.prototype = {
	domain: null
	,_: null
	,__: null
	,__class__: thx.translation.ITranslation
	,__properties__: {set_domain:"setDomain",get_domain:"getDomain"}
}
rg.query.ReportGridTransformers = $hxClasses["rg.query.ReportGridTransformers"] = function() { }
rg.query.ReportGridTransformers.__name__ = ["rg","query","ReportGridTransformers"];
rg.query.ReportGridTransformers.childrenPath = function(arr,params) {
	var parent = params.parent, prefix = parent == "/"?"":parent;
	return arr.map(function(path,_) {
		return { parent : parent, path : prefix + "/" + path};
	});
}
rg.query.ReportGridTransformers.childrenEvent = function(arr,params) {
	var path = params.path;
	return arr.map(function(event,_) {
		return { path : path, event : event.substr(1)};
	});
}
rg.query.ReportGridTransformers.childrenProperty = function(arr,params) {
	var path = params.path, event = params.event;
	return arr.map(function(property,_) {
		return { path : path, event : event, property : property.substr(1)};
	});
}
rg.query.ReportGridTransformers.propertyValues = function(arr,params) {
	var path = params.path, event = params.event, property = params.property;
	return arr.map(function(value,_) {
		return { path : path, event : event, property : property, value : value};
	});
}
rg.query.ReportGridTransformers.histogram = function(arr,params) {
	var path = params.path, event = params.event, property = params.property;
	return arr.map(function(value,_) {
		var ob = { path : path, event : event, count : value[1]};
		ob[property] = value[0];
		return ob;
	});
}
rg.query.ReportGridTransformers.propertiesHistogram = function(arr,params) {
	var path = params.path, event = params.event, property = params.property;
	return arr.map(function(value,_) {
		var ob = { path : path, event : event, count : value[1]};
		ob[property] = Strings.ltrim(value[0],".");
		return ob;
	});
}
rg.query.ReportGridTransformers.intersect = function(ob,params) {
	var path = params.path, event = params.event, properties = params.properties, result = [];
	var _g = 0, _g1 = Objects.flatten(ob);
	while(_g < _g1.length) {
		var pair = _g1[_g];
		++_g;
		var o = { path : path, event : event, count : pair.value};
		var _g3 = 0, _g2 = properties.length;
		while(_g3 < _g2) {
			var i = _g3++;
			o[properties[i].property] = thx.json.Json.decode(pair.fields[i]);
		}
		result.push(o);
	}
	return result;
}
rg.query.ReportGridTransformers.intersectSeries = function(ob,params) {
	var path = params.path, event = params.event, properties = params.properties, periodicity = params.periodicity, timezone = params.timezone, groupby = params.groupby, result = [];
	var _g = 0, _g1 = Objects.flatten(ob);
	while(_g < _g1.length) {
		var pair = _g1[_g];
		++_g;
		var values = pair.value;
		var _g2 = 0;
		while(_g2 < values.length) {
			var item = values[_g2];
			++_g2;
			var o = { path : path, event : event, count : item[1]};
			rg.query.ReportGridTransformers._injectTime(o,item[0],periodicity,timezone,groupby);
			var _g4 = 0, _g3 = properties.length;
			while(_g4 < _g3) {
				var i = _g4++;
				o[properties[i].property] = thx.json.Json.decode(pair.fields[i]);
			}
			result.push(o);
		}
	}
	return result;
}
rg.query.ReportGridTransformers.eventCount = function(count,params) {
	var o = { path : params.path, event : params.event, count : count};
	if(null != params.where) Objects.copyTo(params.where,o);
	return [o];
}
rg.query.ReportGridTransformers.eventCountTag = function(counts,params) {
	var path = params.path, event = params.event, tag = params.tag;
	return Objects.map(counts,function(key,count) {
		var o = { path : path, event : event, count : count};
		o[tag] = Strings.rtrim(Strings.ltrim(key,"/"),"/");
		if(null != params.where) Objects.copyTo(params.where,o);
		return o;
	});
}
rg.query.ReportGridTransformers.eventSeriesTagGroupedBy = function(ob,params) {
	var path = params.path, event = params.event, periodicity = params.periodicity, where = params.where, groupby = params.groupby, tag = params.tag;
	return Arrays.flatten(Objects.map(ob,function(key,values) {
		var result = [];
		var _g = 0;
		while(_g < values.length) {
			var item = values[_g];
			++_g;
			var o = { path : path, event : event, count : item[1]};
			o[tag] = Strings.rtrim(Strings.ltrim(key,"/"),"/");
			rg.query.ReportGridTransformers._injectTime(o,item[0],periodicity,null,groupby);
			if(null != where) Objects.copyTo(where,o);
			result.push(o);
		}
		return result;
	}));
}
rg.query.ReportGridTransformers.eventSeries = function(values,params) {
	var path = params.path, event = params.event, periodicity = params.periodicity, where = params.where, timezone = params.timezone, groupby = params.groupby, result = [];
	var _g = 0;
	while(_g < values.length) {
		var item = values[_g];
		++_g;
		var o = { path : path, event : event, count : item[1]};
		rg.query.ReportGridTransformers._injectTime(o,item[0],periodicity,timezone,groupby);
		if(null != where) Objects.copyTo(where,o);
		result.push(o);
	}
	return result;
}
rg.query.ReportGridTransformers.propertySummary = function(count,params) {
	var o = { path : params.path, event : params.event, count : count};
	haxe.Log.trace(count,{ fileName : "ReportGridTransformers.hx", lineNumber : 234, className : "rg.query.ReportGridTransformers", methodName : "propertySummary"});
	if(null != params.where) Objects.copyTo(params.where,o);
	return [o];
}
rg.query.ReportGridTransformers.propertySummarySeries = function(values,params) {
	var path = params.path, event = params.event, property = params.property, periodicity = params.periodicity, type = params.type, timezone = params.timezone, groupby = params.groupby, result = [];
	var _g = 0;
	while(_g < values.length) {
		var item = values[_g];
		++_g;
		var o = { path : path, event : event, property : property};
		rg.query.ReportGridTransformers._injectTime(o,item[0],periodicity,timezone,groupby);
		o[type] = item[1];
		result.push(o);
	}
	return result;
}
rg.query.ReportGridTransformers.propertySummarySeriesTagGroupedBy = function(ob,params) {
	var path = params.path, event = params.event, property = params.property, periodicity = params.periodicity, type = params.type, groupby = params.groupby, tag = params.tag;
	return Arrays.flatten(Objects.map(ob,function(key,values) {
		var result = [];
		var _g = 0;
		while(_g < values.length) {
			var item = values[_g];
			++_g;
			var o = { path : path, event : event, property : property};
			o[tag] = Strings.rtrim(Strings.ltrim(key,"/"),"/");
			o[type] = item[1];
			rg.query.ReportGridTransformers._injectTime(o,item[0],periodicity,null,groupby);
			result.push(o);
		}
		return result;
	}));
}
rg.query.ReportGridTransformers.propertyValueCount = function(count,params) {
	var ob = { path : params.path, event : params.event, count : count};
	ob[params.property] = params.value;
	return [ob];
}
rg.query.ReportGridTransformers.propertyValueCountTag = function(counts,params) {
	var path = params.path, event = params.event, property = params.property, value = params.value, tag = params.tag;
	return Objects.map(counts,function(key,count) {
		var o = { path : path, event : event, count : count};
		o[params.property] = params.value;
		o[tag] = Strings.rtrim(Strings.ltrim(key,"/"),"/");
		return o;
	});
}
rg.query.ReportGridTransformers.propertyValueSeries = function(values,params) {
	var path = params.path, event = params.event, property = params.property, periodicity = params.periodicity, value = params.value, timezone = params.timezone, groupby = params.groupby, result = [];
	var _g = 0;
	while(_g < values.length) {
		var item = values[_g];
		++_g;
		var o = { path : path, event : event, count : item[1]};
		o[property] = value;
		rg.query.ReportGridTransformers._injectTime(o,item[0],periodicity,timezone,groupby);
		result.push(o);
	}
	return result;
}
rg.query.ReportGridTransformers.propertyValueSeriesTagGroupedBy = function(ob,params) {
	var path = params.path, event = params.event, property = params.property, value = params.value, periodicity = params.periodicity, groupby = params.groupby, tag = params.tag;
	return Arrays.flatten(Objects.map(ob,function(key,values) {
		var result = [];
		var _g = 0;
		while(_g < values.length) {
			var item = values[_g];
			++_g;
			var o = { path : path, event : event, count : item[1]};
			ob[property] = value;
			o[tag] = Strings.rtrim(Strings.ltrim(key,"/"),"/");
			rg.query.ReportGridTransformers._injectTime(o,item[0],periodicity,null,groupby);
			result.push(o);
		}
		return result;
	}));
}
rg.query.ReportGridTransformers._injectTime = function(o,value,periodicity,timezone,groupby) {
	if(null != groupby) {
		o[periodicity] = Reflect.field(value,periodicity);
		o["groupby"] = groupby;
	} else if(null != timezone) {
		o["time:" + periodicity] = rg.query.ReportGridTransformers._parseTimeTZ(value.datetime);
		o["timezone"] = timezone;
	} else o["time:" + periodicity] = value.timestamp;
}
rg.query.ReportGridTransformers._parseTimeTZ = function(s) {
	var sign = 1, pos = s.indexOf("+");
	if(pos < 0) {
		sign = -1;
		pos = s.indexOf("-");
	}
	var d = Date.fromString(StringTools.replace(StringTools.replace(s.substr(0,pos),"T"," "),".000","")), t = thx.date.DateParser.parseTime(s.substr(pos + 1));
	return d.getTime() + sign * (t.hour * 60 * 60 * 1000 + t.minute * 60 * 1000 + t.second * 1000 + t.millis);
}
rg.query.ReportGridTransformers._trimPrefix = function(v) {
	return v.substr(1);
}
rg.query.ReportGridTransformers.prototype = {
	__class__: rg.query.ReportGridTransformers
}
var IntHash = $hxClasses["IntHash"] = function() {
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
}
IntHash.__name__ = ["IntHash"];
IntHash.prototype = {
	h: null
	,set: function(key,value) {
		this.h[key] = value;
	}
	,get: function(key) {
		return this.h[key];
	}
	,exists: function(key) {
		return this.h[key] != null;
	}
	,remove: function(key) {
		if(this.h[key] == null) return false;
		delete(this.h[key]);
		return true;
	}
	,keys: function() {
		var a = new Array();
		for( x in this.h ) a.push(x);
		return a.iterator();
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i];
		}};
	}
	,toString: function() {
		var s = new StringBuf();
		s.b[s.b.length] = "{";
		var it = this.keys();
		while( it.hasNext() ) {
			var i = it.next();
			s.b[s.b.length] = i == null?"null":i;
			s.b[s.b.length] = " => ";
			s.add(Std.string(this.get(i)));
			if(it.hasNext()) s.b[s.b.length] = ", ";
		}
		s.b[s.b.length] = "}";
		return s.b.join("");
	}
	,__class__: IntHash
}
thx.color.NamedColors = $hxClasses["thx.color.NamedColors"] = function() { }
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
thx.color.NamedColors.prototype = {
	__class__: thx.color.NamedColors
}
if(!rg.app) rg.app = {}
if(!rg.app.query) rg.app.query = {}
rg.app.query.JSBridge = $hxClasses["rg.app.query.JSBridge"] = function() { }
rg.app.query.JSBridge.__name__ = ["rg","app","query","JSBridge"];
rg.app.query.JSBridge.main = function() {
	var r = (typeof ReportGrid == 'undefined') ? (ReportGrid = {}) : ReportGrid, executor = new rg.data.reportgrid.ReportGridExecutorMemoryCache(r);
	r.query = rg.query.ReportGridQuery.create(executor);
	r.info = null != r.info?r.info:{ };
	r.info.query = { version : "1.0.0.916"};
	var rand = new thx.math.Random(666);
	r.math = { setRandomSeed : function(s) {
		rand = new thx.math.Random(s);
	}, random : function() {
		return ((rand.seed = rand.seed * 16807 % 2147483647) & 1073741823) / 1073741823.0;
	}};
}
rg.app.query.JSBridge.opt = function(ob) {
	return null == ob?{ }:Objects.clone(ob);
}
rg.app.query.JSBridge.prototype = {
	__class__: rg.app.query.JSBridge
}
var Strings = $hxClasses["Strings"] = function() { }
Strings.__name__ = ["Strings"];
Strings.format = function(pattern,values,nullstring,culture) {
	if(nullstring == null) nullstring = "null";
	if(null == values || 0 == values.length) return pattern;
	return (Strings.formatf(pattern,nullstring,culture))(values);
}
Strings.formatf = function(pattern,nullstring,culture) {
	if(nullstring == null) nullstring = "null";
	var buf = [];
	while(true) {
		if(!Strings._reFormat.match(pattern)) {
			buf.push((function() {
				return function(_) {
					return pattern;
				};
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
			return function(_) {
				return left[0];
			};
		})(left));
		var df = [Dynamics.formatf(format,params,nullstring,culture)];
		buf.push(((function() {
			return function(f,a1) {
				return (function() {
					return function(a2) {
						return f(a1,a2);
					};
				})();
			};
		})())((function(df) {
			return function(i,v) {
				return df[0](v[i]);
			};
		})(df),pos));
		pattern = Strings._reFormat.matchedRight();
	}
	return function(values) {
		if(null == values) values = [];
		return buf.map(function(df,_) {
			return df(values);
		}).join("");
	};
}
Strings.formatOne = function(v,param,params,culture) {
	return (Strings.formatOnef(param,params,culture))(v);
}
Strings.formatOnef = function(param,params,culture) {
	params = thx.culture.FormatParams.params(param,params,"S");
	var format = params.shift();
	switch(format) {
	case "S":
		return function(v) {
			return v;
		};
	case "T":
		var len = params.length < 1?20:Std.parseInt(params[0]);
		var ellipsis = params.length < 2?"...":params[1];
		return Strings.ellipsisf(len,ellipsis);
	case "PR":
		var len = params.length < 1?10:Std.parseInt(params[0]);
		var pad = params.length < 2?" ":params[1];
		return function(v) {
			return StringTools.rpad(v,pad,len);
		};
	case "PL":
		var len = params.length < 1?10:Std.parseInt(params[0]);
		var pad = params.length < 2?" ":params[1];
		return function(v) {
			return StringTools.lpad(v,pad,len);
		};
	default:
		return (function($this) {
			var $r;
			throw "Unsupported string format: " + format;
			return $r;
		}(this));
	}
}
Strings.upTo = function(value,searchFor) {
	var pos = value.indexOf(searchFor);
	if(pos < 0) return value; else return value.substr(0,pos);
}
Strings.startFrom = function(value,searchFor) {
	var pos = value.indexOf(searchFor);
	if(pos < 0) return value; else return value.substr(pos + searchFor.length);
}
Strings.rtrim = function(value,charlist) {
	var len = value.length;
	while(len > 0) {
		var c = value.substr(len - 1,1);
		if(charlist.indexOf(c) < 0) break;
		len--;
	}
	return value.substr(0,len);
}
Strings.ltrim = function(value,charlist) {
	var start = 0;
	while(start < value.length) {
		var c = value.substr(start,1);
		if(charlist.indexOf(c) < 0) break;
		start++;
	}
	return value.substr(start);
}
Strings.trim = function(value,charlist) {
	return Strings.rtrim(Strings.ltrim(value,charlist),charlist);
}
Strings.collapse = function(value) {
	return Strings._reCollapse.replace(StringTools.trim(value)," ");
}
Strings.ucfirst = function(value) {
	return value == null?null:value.charAt(0).toUpperCase() + value.substr(1);
}
Strings.lcfirst = function(value) {
	return value == null?null:value.charAt(0).toLowerCase() + value.substr(1);
}
Strings.empty = function(value) {
	return value == null || value == "";
}
Strings.isAlphaNum = function(value) {
	return value == null?false:Strings.__alphaNumPattern.match(value);
}
Strings.digitsOnly = function(value) {
	return value == null?false:Strings.__digitsPattern.match(value);
}
Strings.ucwords = function(value) {
	return Strings.__ucwordsPattern.customReplace(value == null?null:value.charAt(0).toUpperCase() + value.substr(1),Strings.__upperMatch);
}
Strings.ucwordsws = function(value) {
	return Strings.__ucwordswsPattern.customReplace(value == null?null:value.charAt(0).toUpperCase() + value.substr(1),Strings.__upperMatch);
}
Strings.__upperMatch = function(re) {
	return re.matched(0).toUpperCase();
}
Strings.humanize = function(s) {
	return StringTools.replace(Strings.underscore(s),"_"," ");
}
Strings.capitalize = function(s) {
	return s.substr(0,1).toUpperCase() + s.substr(1);
}
Strings.succ = function(s) {
	return s.substr(0,-1) + String.fromCharCode(s.substr(-1).charCodeAt(0) + 1);
}
Strings.underscore = function(s) {
	s = new EReg("::","g").replace(s,"/");
	s = new EReg("([A-Z]+)([A-Z][a-z])","g").replace(s,"$1_$2");
	s = new EReg("([a-z\\d])([A-Z])","g").replace(s,"$1_$2");
	s = new EReg("-","g").replace(s,"_");
	return s.toLowerCase();
}
Strings.dasherize = function(s) {
	return StringTools.replace(s,"_","-");
}
Strings.repeat = function(s,times) {
	var b = [];
	var _g = 0;
	while(_g < times) {
		var i = _g++;
		b.push(s);
	}
	return b.join("");
}
Strings.wrapColumns = function(s,columns,indent,newline) {
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
	return result.join(newline);
}
Strings._wrapColumns = function(s,columns,indent,newline) {
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
	return indent + parts.join(newline + indent);
}
Strings.stripTags = function(s) {
	return Strings._reStripTags.replace(s,"");
}
Strings.interpolate = function(v,a,b,equation) {
	return (Strings.interpolatef(a,b,equation))(v);
}
Strings.interpolatef = function(a,b,equation) {
	var extract = function(value,s,f) {
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
					return function(_) {
						return s[0];
					};
				})(s));
			} else {
				var f = [Floats.interpolatef(fa[i],fb[i],equation)];
				functions.push((function(f) {
					return function(t) {
						return "" + f[0](t);
					};
				})(f));
			}
		} else {
			var s = [sa[i]];
			functions.push((function(s) {
				return function(_) {
					return s[0];
				};
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
		return rest;
	});
	return function(t) {
		return functions.map(function(f,_) {
			return f(t);
		}).join("");
	};
}
Strings.interpolateChars = function(v,a,b,equation) {
	return (Strings.interpolateCharsf(a,b,equation))(v);
}
Strings.interpolateCharsf = function(a,b,equation) {
	var aa = a.split(""), ab = b.split("");
	while(aa.length > ab.length) ab.insert(0," ");
	while(ab.length > aa.length) aa.insert(0," ");
	var ai = [];
	var _g1 = 0, _g = aa.length;
	while(_g1 < _g) {
		var i = _g1++;
		ai[i] = Strings.interpolateCharf(aa[i],ab[i]);
	}
	return function(v) {
		var r = [];
		var _g1 = 0, _g = ai.length;
		while(_g1 < _g) {
			var i = _g1++;
			r[i] = ai[i](v);
		}
		return StringTools.trim(r.join(""));
	};
}
Strings.interpolateChar = function(v,a,b,equation) {
	return (Strings.interpolateCharf(a,b,equation))(v);
}
Strings.interpolateCharf = function(a,b,equation) {
	if(new EReg("^\\d","").match(b) && a == " ") a = "0";
	var r = new EReg("^[^a-zA-Z0-9]","");
	if(r.match(b) && a == " ") a = r.matched(0);
	var ca = a.charCodeAt(0), cb = b.charCodeAt(0), i = Ints.interpolatef(ca,cb,equation);
	return function(v) {
		return String.fromCharCode(i(v));
	};
}
Strings.ellipsis = function(s,maxlen,symbol) {
	if(symbol == null) symbol = "...";
	if(maxlen == null) maxlen = 20;
	if(s.length > maxlen) return s.substr(0,Ints.max(symbol.length,maxlen - symbol.length)) + symbol; else return s;
}
Strings.ellipsisf = function(maxlen,symbol) {
	if(symbol == null) symbol = "...";
	if(maxlen == null) maxlen = 20;
	return function(s) {
		if(s.length > maxlen) return s.substr(0,Ints.max(symbol.length,maxlen - symbol.length)) + symbol; else return s;
	};
}
Strings.compare = function(a,b) {
	return a < b?-1:a > b?1:0;
}
Strings.prototype = {
	__class__: Strings
}
var StringBuf = $hxClasses["StringBuf"] = function() {
	this.b = new Array();
}
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	add: function(x) {
		this.b[this.b.length] = x == null?"null":x;
	}
	,addSub: function(s,pos,len) {
		this.b[this.b.length] = s.substr(pos,len);
	}
	,addChar: function(c) {
		this.b[this.b.length] = String.fromCharCode(c);
	}
	,toString: function() {
		return this.b.join("");
	}
	,b: null
	,__class__: StringBuf
}
if(!rg.util) rg.util = {}
rg.util.Periodicity = $hxClasses["rg.util.Periodicity"] = function() { }
rg.util.Periodicity.__name__ = ["rg","util","Periodicity"];
rg.util.Periodicity.defaultPeriodicity = function(span) {
	if(null == span || 0 == span) return "eternity";
	if(span <= 21600000) return "minute"; else if(span <= 172800000) return "hour"; else if(span <= 5184000 * 1000) return "day"; else if(span <= 62208000 * 1000) return "month"; else return "year";
}
rg.util.Periodicity.defaultRange = function(periodicity) {
	return (function($this) {
		var $r;
		switch(periodicity) {
		case "eternity":
			$r = [0.0,0.0];
			break;
		case "minute":
			$r = rg.util.Periodicity.parsePair("6 hours ago","now");
			break;
		case "hour":
			$r = rg.util.Periodicity.parsePair("2 days ago","now");
			break;
		case "day":
			$r = rg.util.Periodicity.parsePair("14 days ago","today");
			break;
		case "month":
			$r = rg.util.Periodicity.parsePair("6 months ago","today");
			break;
		case "year":
			$r = rg.util.Periodicity.parsePair("6 years ago","today");
			break;
		}
		return $r;
	}(this));
}
rg.util.Periodicity.isValid = function(v) {
	return Arrays.exists(rg.util.Periodicity.validPeriods,v);
}
rg.util.Periodicity.calculateBetween = function(a,b,disc) {
	if(disc == null) disc = 2;
	if(null == a || null == b) return "eternity";
	var delta = Math.abs(b.getTime() - a.getTime());
	if(delta >= DateTools.days(365 * disc)) return "year"; else if(delta >= DateTools.days(30 * disc)) return "month"; else if(delta >= DateTools.days(7 * disc)) return "week"; else if(delta >= DateTools.days(disc)) return "day"; else if(delta >= DateTools.hours(disc)) return "hour"; else return "minute";
}
rg.util.Periodicity.unitsBetween = function(start,end,periodicity) {
	return (function($this) {
		var $r;
		switch(periodicity) {
		case "eternity":
			$r = 1;
			break;
		case "minute":
			$r = Math.floor((end - start) / 60000);
			break;
		case "hour":
			$r = Math.floor((end - start) / 3600000);
			break;
		case "day":
			$r = Math.floor((end - start) / 86400000);
			break;
		case "week":
			$r = Math.floor((end - start) / 604800000);
			break;
		case "month":
			$r = (function($this) {
				var $r;
				var s = Date.fromTime(start), e = Date.fromTime(end), sy = s.getFullYear(), ey = e.getFullYear(), sm = s.getMonth(), em = e.getMonth();
				$r = (ey - sy) * 12 + (em - sm);
				return $r;
			}($this));
			break;
		case "year":
			$r = Math.floor(rg.util.Periodicity.unitsBetween(start,end,"month") / 12);
			break;
		}
		return $r;
	}(this));
}
rg.util.Periodicity.units = function(value,periodicity) {
	return rg.util.Periodicity.unitsBetween(0,value,periodicity) + (function($this) {
		var $r;
		switch(periodicity) {
		case "hour":
			$r = 1;
			break;
		default:
			$r = 0;
		}
		return $r;
	}(this));
}
rg.util.Periodicity.range = function(start,end,periodicity) {
	var step = 1000;
	switch(periodicity) {
	case "eternity":
		return [0.0];
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
		var s = rg.util.Periodicity.dateUtc(start), e = rg.util.Periodicity.dateUtc(end), sy = s.getFullYear(), ey = e.getFullYear(), sm = s.getMonth(), em = e.getMonth();
		var result = [];
		while(sy < ey || sy == ey && sm <= em) {
			result.push(new Date(sy,sm,1,0,0,0).getTime());
			sm++;
			if(sm > 11) {
				sm = 0;
				sy++;
			}
		}
		return result;
	case "year":
		return Ints.range(rg.util.Periodicity.dateUtc(start).getFullYear(),rg.util.Periodicity.dateUtc(end).getFullYear() + 1,1).map(function(d,i) {
			return new Date(d,0,1,0,0,0).getTime();
		});
	}
	return Floats.range(start,end + step,step);
}
rg.util.Periodicity.next = function(periodicity,date,step) {
	if(step == null) step = 1;
	if(null == date) date = Date.now().getTime();
	if(0 == step) return date;
	return (function($this) {
		var $r;
		switch(periodicity) {
		case "eternity":
			$r = date;
			break;
		case "minute":
			$r = date + 60000 * step;
			break;
		case "hour":
			$r = date + 3600000 * step;
			break;
		case "day":
			$r = date + 86400000 * step;
			break;
		case "week":
			$r = date + 604800000 * step;
			break;
		case "month":
			$r = (function($this) {
				var $r;
				var d = Date.fromTime(date), y = d.getFullYear(), m = d.getMonth() + step;
				$r = new Date(y,m,d.getDay(),d.getHours(),d.getMinutes(),d.getSeconds()).getTime();
				return $r;
			}($this));
			break;
		case "year":
			$r = (function($this) {
				var $r;
				var d = Date.fromTime(date);
				$r = new Date(d.getFullYear() + step,d.getMonth(),d.getDay(),d.getHours(),d.getMinutes(),d.getSeconds()).getTime();
				return $r;
			}($this));
			break;
		}
		return $r;
	}(this));
}
rg.util.Periodicity.minForPeriodicityInSeries = function(arr,periodicity) {
	return Arrays.floatMin(arr,function(d) {
		return Arrays.floatMin(Reflect.fields(Reflect.field(d,periodicity)),function(d1) {
			return Std.parseFloat(d1);
		});
	});
}
rg.util.Periodicity.maxForPeriodicityInSeries = function(arr,periodicity) {
	return Arrays.floatMax(arr,function(d) {
		return Arrays.floatMax(Reflect.fields(Reflect.field(d,periodicity)),function(d1) {
			return Std.parseFloat(d1);
		});
	});
}
rg.util.Periodicity.formatf = function(periodicity) {
	return (function($this) {
		var $r;
		switch(periodicity) {
		case "eternity":
			$r = function(_) {
				return "all time";
			};
			break;
		case "minute":case "hour":
			$r = function(v) {
				return thx.culture.FormatDate.timeShort(Date.fromTime(v));
			};
			break;
		case "day":case "week":
			$r = function(v) {
				return thx.culture.FormatDate.dateShort(Date.fromTime(v));
			};
			break;
		case "month":
			$r = function(v) {
				return thx.culture.FormatDate.yearMonth(Date.fromTime(v));
			};
			break;
		case "year":
			$r = function(v) {
				return thx.culture.FormatDate.year(Date.fromTime(v));
			};
			break;
		}
		return $r;
	}(this));
}
rg.util.Periodicity.format = function(periodicity,v) {
	switch(periodicity) {
	case "eternity":
		return "all time";
	case "minute":
		return thx.culture.FormatDate.timeShort(Date.fromTime(v));
	case "hour":
		return thx.culture.FormatDate.hourShort(Date.fromTime(v));
	case "day":case "week":
		return thx.culture.FormatDate.dateShort(Date.fromTime(v));
	case "month":
		return thx.culture.FormatDate.yearMonth(Date.fromTime(v));
	case "year":
		return thx.culture.FormatDate.year(Date.fromTime(v));
	default:
		return periodicity + ": " + v;
	}
}
rg.util.Periodicity.smartFormat = function(periodicity,v) {
	switch(periodicity) {
	case "eternity":
		return "all time";
	case "minute":
		if(rg.util.Periodicity.firstInSeries("hour",v)) return thx.culture.FormatDate.timeShort(Date.fromTime(v)); else return thx.culture.FormatDate.format("%i",Date.fromTime(v));
		break;
	case "hour":
		if(rg.util.Periodicity.firstInSeries("day",v)) return thx.culture.FormatDate.format("%b %e",rg.util.Periodicity.dateUtc(v)); else return thx.culture.FormatDate.hourShort(Date.fromTime(v));
		break;
	case "day":
		if(rg.util.Periodicity.firstInSeries("month",v)) return thx.culture.FormatDate.format("%b %e",rg.util.Periodicity.dateUtc(v)); else return thx.culture.FormatDate.format("%e",rg.util.Periodicity.dateUtc(v));
		break;
	case "week":
		var d = rg.util.Periodicity.dateUtc(v);
		if(d.getDate() <= 7) return thx.culture.FormatDate.format("%b %e",d); else return thx.culture.FormatDate.format("%e",d);
		break;
	case "month":
		if(rg.util.Periodicity.firstInSeries("year",v)) return thx.culture.FormatDate.year(rg.util.Periodicity.dateUtc(v)); else return thx.culture.FormatDate.format("%b",rg.util.Periodicity.dateUtc(v));
		break;
	case "year":
		return thx.culture.FormatDate.year(rg.util.Periodicity.dateUtc(v));
	default:
		return periodicity + ": " + Date.fromTime(v);
	}
}
rg.util.Periodicity.firstInSeries = function(periodicity,v) {
	return (function($this) {
		var $r;
		switch(periodicity) {
		case "eternity":
			$r = 0 == v;
			break;
		case "minute":
			$r = 0 == v % 60000;
			break;
		case "hour":
			$r = 0 == v % 3600000;
			break;
		case "day":
			$r = (function($this) {
				var $r;
				var d = Date.fromTime(v);
				$r = 0 == d.getHours() && 0 == d.getMinutes() && 0 == d.getSeconds();
				return $r;
			}($this));
			break;
		case "week":
			$r = (function($this) {
				var $r;
				var d = Date.fromTime(v);
				$r = 0 == d.getDay();
				return $r;
			}($this));
			break;
		case "month":
			$r = (function($this) {
				var $r;
				var d = Date.fromTime(v);
				$r = 1 == d.getDate();
				return $r;
			}($this));
			break;
		case "year":
			$r = (function($this) {
				var $r;
				var d = Date.fromTime(v);
				$r = 1 == d.getDate() && 0 == d.getMonth();
				return $r;
			}($this));
			break;
		default:
			$r = false;
		}
		return $r;
	}(this));
}
rg.util.Periodicity.nextPeriodicity = function(periodicity) {
	return (function($this) {
		var $r;
		switch(periodicity) {
		case "minute":
			$r = "hour";
			break;
		case "hour":
			$r = "day";
			break;
		case "day":case "week":
			$r = "month";
			break;
		case "month":
			$r = "year";
			break;
		default:
			$r = "year";
		}
		return $r;
	}(this));
}
rg.util.Periodicity.prevPeriodicity = function(periodicity) {
	return (function($this) {
		var $r;
		switch(periodicity) {
		case "minute":
			$r = "hour";
			break;
		case "hour":
			$r = "minute";
			break;
		case "day":
			$r = "hour";
			break;
		case "week":case "month":
			$r = "day";
			break;
		default:
			$r = "minute";
		}
		return $r;
	}(this));
}
rg.util.Periodicity.parsePair = function(start,end) {
	return [thx.date.DateParser.parse(start).getTime(),thx.date.DateParser.parse(end).getTime()];
}
rg.util.Periodicity.timezoneOffset = function(d) {
	return d.getTimezoneOffset();
}
rg.util.Periodicity.dateUtc = function(v) {
	var d = Date.fromTime(v), offset = d.getTimezoneOffset();
	if(offset < 0) offset = 0;
	return Date.fromTime(v + 60000 * offset);
}
rg.util.Periodicity.isValidGroupBy = function(value) {
	return Arrays.exists(rg.util.Periodicity.validGroupValues,value);
}
rg.util.Periodicity.prototype = {
	__class__: rg.util.Periodicity
}
if(!thx.error) thx.error = {}
thx.error.Error = $hxClasses["thx.error.Error"] = function(message,params,param,pos) {
	thx.util.Message.call(this,message,params,param);
	this.pos = pos;
}
thx.error.Error.__name__ = ["thx","error","Error"];
thx.error.Error.__super__ = thx.util.Message;
thx.error.Error.prototype = $extend(thx.util.Message.prototype,{
	pos: null
	,inner: null
	,setInner: function(inner) {
		this.inner = inner;
		return this;
	}
	,toStringError: function(pattern) {
		var prefix = Strings.format(null == pattern?thx.error.Error.errorPositionPattern:pattern,[this.pos.className,this.pos.methodName,this.pos.lineNumber,this.pos.fileName,this.pos.customParams]);
		return prefix + this.toString();
	}
	,toString: function() {
		try {
			return Strings.format(this.message,this.params);
		} catch( e ) {
			var ps = this.pos.className + "." + this.pos.methodName + "(" + this.pos.lineNumber + ")";
			haxe.Log.trace("wrong parameters passed for pattern '" + this.message + "' at " + ps,{ fileName : "Error.hx", lineNumber : 42, className : "thx.error.Error", methodName : "toString"});
			return "";
		}
	}
	,__class__: thx.error.Error
});
var Lambda = $hxClasses["Lambda"] = function() { }
Lambda.__name__ = ["Lambda"];
Lambda.array = function(it) {
	var a = new Array();
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		a.push(i);
	}
	return a;
}
Lambda.list = function(it) {
	var l = new List();
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		l.add(i);
	}
	return l;
}
Lambda.map = function(it,f) {
	var l = new List();
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		l.add(f(x));
	}
	return l;
}
Lambda.mapi = function(it,f) {
	var l = new List();
	var i = 0;
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		l.add(f(i++,x));
	}
	return l;
}
Lambda.has = function(it,elt,cmp) {
	if(cmp == null) {
		var $it0 = it.iterator();
		while( $it0.hasNext() ) {
			var x = $it0.next();
			if(x == elt) return true;
		}
	} else {
		var $it1 = it.iterator();
		while( $it1.hasNext() ) {
			var x = $it1.next();
			if(cmp(x,elt)) return true;
		}
	}
	return false;
}
Lambda.exists = function(it,f) {
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(f(x)) return true;
	}
	return false;
}
Lambda.foreach = function(it,f) {
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(!f(x)) return false;
	}
	return true;
}
Lambda.iter = function(it,f) {
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		f(x);
	}
}
Lambda.filter = function(it,f) {
	var l = new List();
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(f(x)) l.add(x);
	}
	return l;
}
Lambda.fold = function(it,f,first) {
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		first = f(x,first);
	}
	return first;
}
Lambda.count = function(it,pred) {
	var n = 0;
	if(pred == null) {
		var $it0 = it.iterator();
		while( $it0.hasNext() ) {
			var _ = $it0.next();
			n++;
		}
	} else {
		var $it1 = it.iterator();
		while( $it1.hasNext() ) {
			var x = $it1.next();
			if(pred(x)) n++;
		}
	}
	return n;
}
Lambda.empty = function(it) {
	return !it.iterator().hasNext();
}
Lambda.indexOf = function(it,v) {
	var i = 0;
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var v2 = $it0.next();
		if(v == v2) return i;
		i++;
	}
	return -1;
}
Lambda.concat = function(a,b) {
	var l = new List();
	var $it0 = a.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		l.add(x);
	}
	var $it1 = b.iterator();
	while( $it1.hasNext() ) {
		var x = $it1.next();
		l.add(x);
	}
	return l;
}
Lambda.prototype = {
	__class__: Lambda
}
thx.culture.FormatDate = $hxClasses["thx.culture.FormatDate"] = function() { }
thx.culture.FormatDate.__name__ = ["thx","culture","FormatDate"];
thx.culture.FormatDate.format = function(pattern,date,culture,leadingspace) {
	if(leadingspace == null) leadingspace = true;
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	var pos = 0;
	var len = pattern.length;
	var buf = new StringBuf();
	var info = culture.date;
	while(pos < len) {
		var c = pattern.charAt(pos);
		if(c != "%") {
			buf.b[buf.b.length] = c == null?"null":c;
			pos++;
			continue;
		}
		pos++;
		c = pattern.charAt(pos);
		switch(c) {
		case "a":
			buf.add(info.abbrDays[date.getDay()]);
			break;
		case "A":
			buf.add(info.days[date.getDay()]);
			break;
		case "b":case "h":
			buf.add(info.abbrMonths[date.getMonth()]);
			break;
		case "B":
			buf.add(info.months[date.getMonth()]);
			break;
		case "c":
			buf.add(thx.culture.FormatDate.dateTime(date,culture));
			break;
		case "C":
			buf.add(thx.culture.FormatNumber.digits("" + Math.floor(date.getFullYear() / 100),culture));
			break;
		case "d":
			buf.add(thx.culture.FormatNumber.digits(StringTools.lpad("" + date.getDate(),"0",2),culture));
			break;
		case "D":
			buf.add(thx.culture.FormatDate.format("%m/%d/%y",date,culture));
			break;
		case "e":
			buf.add(thx.culture.FormatNumber.digits(leadingspace?StringTools.lpad("" + date.getDate()," ",2):"" + date.getDate(),culture));
			break;
		case "f":
			buf.add(thx.culture.FormatNumber.digits(leadingspace?StringTools.lpad("" + (date.getMonth() + 1)," ",2):"" + (date.getMonth() + 1),culture));
			break;
		case "G":
			throw "Not Implemented Yet";
			break;
		case "g":
			throw "Not Implemented Yet";
			break;
		case "H":
			buf.add(thx.culture.FormatNumber.digits(StringTools.lpad("" + date.getHours(),"0",2),culture));
			break;
		case "i":
			buf.add(thx.culture.FormatNumber.digits(leadingspace?StringTools.lpad("" + date.getMinutes()," ",2):"" + date.getMinutes(),culture));
			break;
		case "I":
			buf.add(thx.culture.FormatNumber.digits(StringTools.lpad("" + thx.culture.FormatDate.getMHours(date),"0",2),culture));
			break;
		case "j":
			throw "Not Implemented Yet";
			break;
		case "k":
			buf.add(thx.culture.FormatNumber.digits(leadingspace?StringTools.lpad("" + date.getHours()," ",2):"" + date.getHours(),culture));
			break;
		case "l":
			buf.add(thx.culture.FormatNumber.digits(leadingspace?StringTools.lpad("" + thx.culture.FormatDate.getMHours(date)," ",2):"" + thx.culture.FormatDate.getMHours(date),culture));
			break;
		case "m":
			buf.add(thx.culture.FormatNumber.digits(StringTools.lpad("" + (date.getMonth() + 1),"0",2),culture));
			break;
		case "M":
			buf.add(thx.culture.FormatNumber.digits(StringTools.lpad("" + date.getMinutes(),"0",2),culture));
			break;
		case "n":
			buf.b[buf.b.length] = "\n";
			break;
		case "p":
			buf.add(date.getHours() > 11?info.pm:info.am);
			break;
		case "P":
			buf.add((date.getHours() > 11?info.pm:info.am).toLowerCase());
			break;
		case "q":
			buf.add(thx.culture.FormatNumber.digits(leadingspace?StringTools.lpad("" + date.getSeconds()," ",2):"" + date.getSeconds(),culture));
			break;
		case "r":
			buf.add(thx.culture.FormatDate.format("%I:%M:%S %p",date,culture));
			break;
		case "R":
			buf.add(thx.culture.FormatDate.format("%H:%M",date,culture));
			break;
		case "s":
			buf.add("" + Std["int"](date.getTime() / 1000));
			break;
		case "S":
			buf.add(thx.culture.FormatNumber.digits(StringTools.lpad("" + date.getSeconds(),"0",2),culture));
			break;
		case "t":
			buf.b[buf.b.length] = "\t";
			break;
		case "T":
			buf.add(thx.culture.FormatDate.format("%H:%M:%S",date,culture));
			break;
		case "u":
			var d = date.getDay();
			buf.add(thx.culture.FormatNumber.digits(d == 0?"7":"" + d,culture));
			break;
		case "U":
			throw "Not Implemented Yet";
			break;
		case "V":
			throw "Not Implemented Yet";
			break;
		case "w":
			buf.add(thx.culture.FormatNumber.digits("" + date.getDay(),culture));
			break;
		case "W":
			throw "Not Implemented Yet";
			break;
		case "x":
			buf.add(thx.culture.FormatDate.date(date,culture));
			break;
		case "X":
			buf.add(thx.culture.FormatDate.time(date,culture));
			break;
		case "y":
			buf.add(thx.culture.FormatNumber.digits(("" + date.getFullYear()).substr(-2),culture));
			break;
		case "Y":
			buf.add(thx.culture.FormatNumber.digits("" + date.getFullYear(),culture));
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
			buf.add("%" + c);
		}
		pos++;
	}
	return buf.b.join("");
}
thx.culture.FormatDate.getMHours = function(date) {
	var v = date.getHours();
	return v > 12?v - 12:v;
}
thx.culture.FormatDate.yearMonth = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatDate.format(culture.date.patternYearMonth,date,culture,false);
}
thx.culture.FormatDate.monthDay = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatDate.format(culture.date.patternMonthDay,date,culture,false);
}
thx.culture.FormatDate.date = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatDate.format(culture.date.patternDate,date,culture,false);
}
thx.culture.FormatDate.dateShort = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatDate.format(culture.date.patternDateShort,date,culture,false);
}
thx.culture.FormatDate.dateRfc = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatDate.format(culture.date.patternDateRfc,date,culture,false);
}
thx.culture.FormatDate.dateTime = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatDate.format(culture.date.patternDateTime,date,culture,false);
}
thx.culture.FormatDate.universal = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatDate.format(culture.date.patternUniversal,date,culture,false);
}
thx.culture.FormatDate.sortable = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatDate.format(culture.date.patternSortable,date,culture,false);
}
thx.culture.FormatDate.time = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatDate.format(culture.date.patternTime,date,culture,false);
}
thx.culture.FormatDate.timeShort = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatDate.format(culture.date.patternTimeShort,date,culture,false);
}
thx.culture.FormatDate.hourShort = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	if(null == culture.date.am) return thx.culture.FormatDate.format("%H",date,culture,false); else return thx.culture.FormatDate.format("%l %p",date,culture,false);
}
thx.culture.FormatDate.year = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatNumber.digits("" + date.getFullYear(),culture);
}
thx.culture.FormatDate.month = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatNumber.digits("" + (date.getMonth() + 1),culture);
}
thx.culture.FormatDate.monthName = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return culture.date.abbrMonths[date.getMonth()];
}
thx.culture.FormatDate.monthNameShort = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return culture.date.months[date.getMonth()];
}
thx.culture.FormatDate.weekDay = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatNumber.digits("" + (date.getDay() + culture.date.firstWeekDay),culture);
}
thx.culture.FormatDate.weekDayName = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return culture.date.abbrDays[date.getDay()];
}
thx.culture.FormatDate.weekDayNameShort = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return culture.date.days[date.getDay()];
}
thx.culture.FormatDate.prototype = {
	__class__: thx.culture.FormatDate
}
var Bools = $hxClasses["Bools"] = function() { }
Bools.__name__ = ["Bools"];
Bools.format = function(v,param,params,culture) {
	return (Bools.formatf(param,params,culture))(v);
}
Bools.formatf = function(param,params,culture) {
	params = thx.culture.FormatParams.params(param,params,"B");
	var format = params.shift();
	switch(format) {
	case "B":
		return function(v) {
			return v?"true":"false";
		};
	case "N":
		return function(v) {
			return v?"1":"0";
		};
	case "R":
		if(params.length != 2) throw "bool format R requires 2 parameters";
		return function(v) {
			return v?params[0]:params[1];
		};
	default:
		throw "Unsupported bool format: " + format;
	}
}
Bools.interpolate = function(v,a,b,equation) {
	return (Bools.interpolatef(a,b,equation))(v);
}
Bools.interpolatef = function(a,b,equation) {
	if(a == b) return function(_) {
		return a;
	}; else {
		var f = Floats.interpolatef(0,1,equation);
		return function(v) {
			return f(v) < 0.5?a:b;
		};
	}
}
Bools.canParse = function(s) {
	s = s.toLowerCase();
	return s == "true" || s == "false";
}
Bools.parse = function(s) {
	return s.toLowerCase() == "true";
}
Bools.compare = function(a,b) {
	return a == b?0:a?-1:1;
}
Bools.prototype = {
	__class__: Bools
}
thx.culture.FormatNumber = $hxClasses["thx.culture.FormatNumber"] = function() { }
thx.culture.FormatNumber.__name__ = ["thx","culture","FormatNumber"];
thx.culture.FormatNumber.decimal = function(v,decimals,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatNumber.crunch(v,decimals,culture.percent,culture.number.patternNegative,culture.number.patternPositive,culture,null,null);
}
thx.culture.FormatNumber.percent = function(v,decimals,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatNumber.crunch(v,decimals,culture.percent,culture.percent.patternNegative,culture.percent.patternPositive,culture,"%",culture.symbolPercent);
}
thx.culture.FormatNumber.permille = function(v,decimals,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatNumber.crunch(v,decimals,culture.percent,culture.percent.patternNegative,culture.percent.patternPositive,culture,"%",culture.symbolPermille);
}
thx.culture.FormatNumber.currency = function(v,symbol,decimals,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatNumber.crunch(v,decimals,culture.currency,culture.currency.patternNegative,culture.currency.patternPositive,culture,"$",symbol == null?culture.currencySymbol:symbol);
}
thx.culture.FormatNumber["int"] = function(v,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatNumber.decimal(v,0,culture);
}
thx.culture.FormatNumber.digits = function(v,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatNumber.processDigits(v,culture.digits);
}
thx.culture.FormatNumber.crunch = function(v,decimals,info,negative,positive,culture,symbol,replace) {
	if(Math.isNaN(v)) return culture.symbolNaN; else if(!Math.isFinite(v)) return v == Math.NEGATIVE_INFINITY?culture.symbolNegInf:culture.symbolPosInf;
	var fv = thx.culture.FormatNumber.value(v,info,decimals == null?info.decimals:decimals < 0?0:decimals,culture.digits);
	if(symbol != null) return StringTools.replace(StringTools.replace(v < 0?negative:positive,"n",fv),symbol,replace); else return StringTools.replace(v < 0?negative:positive,"n",fv);
}
thx.culture.FormatNumber.processDigits = function(s,digits) {
	if(digits == null) return s;
	var o = [];
	var _g1 = 0, _g = s.length;
	while(_g1 < _g) {
		var i = _g1++;
		o.push(digits[Std.parseInt(s.substr(i,1))]);
	}
	return o.join("");
}
thx.culture.FormatNumber.value = function(v,info,decimals,digits) {
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
		return intpart + info.decimalsSeparator + thx.culture.FormatNumber.processDigits(decpart,digits);
	} else return intpart;
}
thx.culture.FormatNumber.prototype = {
	__class__: thx.culture.FormatNumber
}
var Arrays = $hxClasses["Arrays"] = function() { }
Arrays.__name__ = ["Arrays"];
Arrays.addIf = function(arr,condition,value) {
	if(null != condition) {
		if(condition) arr.push(value);
	} else if(null != value) arr.push(value);
	return arr;
}
Arrays.add = function(arr,value) {
	arr.push(value);
	return arr;
}
Arrays["delete"] = function(arr,value) {
	arr.remove(value);
	return arr;
}
Arrays.removef = function(arr,f) {
	var index = -1;
	var _g1 = 0, _g = arr.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(f(arr[i])) {
			index = i;
			break;
		}
	}
	if(index < 0) return false;
	arr.splice(index,1);
	return true;
}
Arrays.deletef = function(arr,f) {
	Arrays.removef(arr,f);
	return arr;
}
Arrays.filter = function(arr,f) {
	var result = [];
	var _g = 0;
	while(_g < arr.length) {
		var i = arr[_g];
		++_g;
		if(f(i)) result.push(i);
	}
	return result;
}
Arrays.min = function(arr,f) {
	if(arr.length == 0) return null;
	if(null == f) {
		var a = arr[0], p = 0;
		var comp = Dynamics.comparef(a);
		var _g1 = 1, _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(comp(a,arr[i]) > 0) a = arr[p = i];
		}
		return arr[p];
	} else {
		var a = f(arr[0]), p = 0, b;
		var _g1 = 1, _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(a > (b = f(arr[i]))) {
				a = b;
				p = i;
			}
		}
		return arr[p];
	}
}
Arrays.floatMin = function(arr,f) {
	if(arr.length == 0) return Math.NaN;
	var a = f(arr[0]), b;
	var _g1 = 1, _g = arr.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(a > (b = f(arr[i]))) a = b;
	}
	return a;
}
Arrays.bounds = function(arr,f) {
	if(arr.length == 0) return null;
	if(null == f) {
		var a = arr[0], p = 0;
		var b = arr[0], q = 0;
		var _g1 = 1, _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			var comp = Dynamics.comparef(a);
			if(comp(a,arr[i]) > 0) a = arr[p = i];
			if(comp(b,arr[i]) < 0) b = arr[q = i];
		}
		return [arr[p],arr[q]];
	} else {
		var a = f(arr[0]), p = 0, b;
		var c = f(arr[0]), q = 0, d;
		var _g1 = 1, _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(a > (b = f(arr[i]))) {
				a = b;
				p = i;
			}
		}
		var _g1 = 1, _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(c < (d = f(arr[i]))) {
				c = d;
				q = i;
			}
		}
		return [arr[p],arr[q]];
	}
}
Arrays.boundsFloat = function(arr,f) {
	if(arr.length == 0) return null;
	var a = f(arr[0]), b;
	var c = f(arr[0]), d;
	var _g1 = 1, _g = arr.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(a > (b = f(arr[i]))) a = b;
		if(c < (d = f(arr[i]))) c = d;
	}
	return [a,c];
}
Arrays.max = function(arr,f) {
	if(arr.length == 0) return null;
	if(null == f) {
		var a = arr[0], p = 0;
		var comp = Dynamics.comparef(a);
		var _g1 = 1, _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(comp(a,arr[i]) < 0) a = arr[p = i];
		}
		return arr[p];
	} else {
		var a = f(arr[0]), p = 0, b;
		var _g1 = 1, _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(a < (b = f(arr[i]))) {
				a = b;
				p = i;
			}
		}
		return arr[p];
	}
}
Arrays.floatMax = function(arr,f) {
	if(arr.length == 0) return Math.NaN;
	var a = f(arr[0]), b;
	var _g1 = 1, _g = arr.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(a < (b = f(arr[i]))) a = b;
	}
	return a;
}
Arrays.flatten = function(arr) {
	var r = [];
	var _g = 0;
	while(_g < arr.length) {
		var v = arr[_g];
		++_g;
		r = r.concat(v);
	}
	return r;
}
Arrays.map = function(arr,f) {
	return arr.map(f);
}
Arrays.reduce = function(arr,f,initialValue) {
	return arr.reduce(f,initialValue);
}
Arrays.order = function(arr,f) {
	arr.sort(null == f?Dynamics.compare:f);
	return arr;
}
Arrays.orderMultiple = function(arr,f,rest) {
	var swap = true, t;
	rest.remove(arr);
	while(swap) {
		swap = false;
		var _g1 = 0, _g = arr.length - 1;
		while(_g1 < _g) {
			var i = _g1++;
			if(f(arr[i],arr[i + 1]) > 0) {
				swap = true;
				t = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = t;
				var _g2 = 0;
				while(_g2 < rest.length) {
					var a = rest[_g2];
					++_g2;
					t = a[i];
					a[i] = a[i + 1];
					a[i + 1] = t;
				}
			}
		}
	}
}
Arrays.split = function(arr,f) {
	if(null == f) f = function(v,_) {
		return v == null;
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
	return arrays;
}
Arrays.exists = function(arr,value,f) {
	if(null != f) {
		var _g = 0;
		while(_g < arr.length) {
			var v = arr[_g];
			++_g;
			if(f(v)) return true;
		}
	} else {
		var _g = 0;
		while(_g < arr.length) {
			var v = arr[_g];
			++_g;
			if(v == value) return true;
		}
	}
	return false;
}
Arrays.format = function(v,param,params,culture) {
	params = thx.culture.FormatParams.params(param,params,"J");
	var format = params.shift();
	switch(format) {
	case "J":
		if(v.length == 0) {
			var empty = null == params[1]?"[]":params[1];
			return empty;
		}
		var sep = null == params[2]?", ":params[2];
		var max = params[3] == null?null:"" == params[3]?null:Std.parseInt(params[3]);
		if(null != max && max < v.length) {
			var elipsis = null == params[4]?" ...":params[4];
			return v.copy().splice(0,max).map(function(d,i) {
				return Dynamics.format(d,params[0],null,null,culture);
			}).join(sep) + elipsis;
		} else return v.map(function(d,i) {
			return Dynamics.format(d,params[0],null,null,culture);
		}).join(sep);
		break;
	case "C":
		return Ints.format(v.length,"I",[],culture);
	default:
		throw "Unsupported array format: " + format;
	}
}
Arrays.formatf = function(param,params,culture) {
	params = thx.culture.FormatParams.params(param,params,"J");
	var format = params.shift();
	switch(format) {
	case "J":
		return function(v) {
			if(v.length == 0) {
				var empty = null == params[1]?"[]":params[1];
				return empty;
			}
			var sep = null == params[2]?", ":params[2];
			var max = params[3] == null?null:"" == params[3]?null:Std.parseInt(params[3]);
			if(null != max && max < v.length) {
				var elipsis = null == params[4]?" ...":params[4];
				return v.copy().splice(0,max).map(function(d,i) {
					return Dynamics.format(d,params[0],null,null,culture);
				}).join(sep) + elipsis;
			} else return v.map(function(d,i) {
				return Dynamics.format(d,params[0],null,null,culture);
			}).join(sep);
		};
	case "C":
		var f = Ints.formatf("I",[],culture);
		return function(v) {
			return f(v.length);
		};
	default:
		throw "Unsupported array format: " + format;
	}
}
Arrays.interpolate = function(v,a,b,equation) {
	return (Arrays.interpolatef(a,b,equation))(v);
}
Arrays.interpolatef = function(a,b,equation) {
	var functions = [], i = 0, min = Ints.min(a.length,b.length);
	while(i < min) {
		if(a[i] == b[i]) {
			var v = [b[i]];
			functions.push((function(v) {
				return function(_) {
					return v[0];
				};
			})(v));
		} else functions.push(Floats.interpolatef(a[i],b[i],equation));
		i++;
	}
	while(i < b.length) {
		var v = [b[i]];
		functions.push((function(v) {
			return function(_) {
				return v[0];
			};
		})(v));
		i++;
	}
	return function(t) {
		return functions.map(function(f,_) {
			return f(t);
		});
	};
}
Arrays.interpolateStrings = function(v,a,b,equation) {
	return (Arrays.interpolateStringsf(a,b,equation))(v);
}
Arrays.interpolateStringsf = function(a,b,equation) {
	var functions = [], i = 0, min = Ints.min(a.length,b.length);
	while(i < min) {
		if(a[i] == b[i]) {
			var v = [b[i]];
			functions.push((function(v) {
				return function(_) {
					return v[0];
				};
			})(v));
		} else functions.push(Strings.interpolatef(a[i],b[i],equation));
		i++;
	}
	while(i < b.length) {
		var v = [b[i]];
		functions.push((function(v) {
			return function(_) {
				return v[0];
			};
		})(v));
		i++;
	}
	return function(t) {
		return functions.map(function(f,_) {
			return f(t);
		});
	};
}
Arrays.interpolateInts = function(v,a,b,equation) {
	return (Arrays.interpolateIntsf(a,b,equation))(v);
}
Arrays.interpolateIntsf = function(a,b,equation) {
	var functions = [], i = 0, min = Ints.min(a.length,b.length);
	while(i < min) {
		if(a[i] == b[i]) {
			var v = [b[i]];
			functions.push((function(v) {
				return function(_) {
					return v[0];
				};
			})(v));
		} else functions.push(Ints.interpolatef(a[i],b[i],equation));
		i++;
	}
	while(i < b.length) {
		var v = [b[i]];
		functions.push((function(v) {
			return function(_) {
				return v[0];
			};
		})(v));
		i++;
	}
	return function(t) {
		return functions.map(function(f,_) {
			return f(t);
		});
	};
}
Arrays.indexOf = function(arr,el) {
	return arr.indexOf(el);
}
Arrays.every = function(arr,f) {
	return arr.every(f);
}
Arrays.each = function(arr,f) {
	arr.forEach(f);
}
Arrays.any = function(arr,f) {
	return Iterators.any(arr.iterator(),f);
}
Arrays.all = function(arr,f) {
	return Iterators.all(arr.iterator(),f);
}
Arrays.random = function(arr) {
	return arr[Std.random(arr.length)];
}
Arrays.string = function(arr) {
	return "[" + arr.map(function(v,_) {
		return Dynamics.string(v);
	}).join(", ") + "]";
}
Arrays.last = function(arr) {
	return arr[arr.length - 1];
}
Arrays.lastf = function(arr,f) {
	var i = arr.length;
	while(--i >= 0) if(f(arr[i])) return arr[i];
	return null;
}
Arrays.first = function(arr) {
	return arr[0];
}
Arrays.firstf = function(arr,f) {
	var _g = 0;
	while(_g < arr.length) {
		var v = arr[_g];
		++_g;
		if(f(v)) return v;
	}
	return null;
}
Arrays.bisect = function(a,x,lo,hi) {
	if(lo == null) lo = 0;
	return Arrays.bisectRight(a,x,lo,hi);
}
Arrays.bisectRight = function(a,x,lo,hi) {
	if(lo == null) lo = 0;
	if(null == hi) hi = a.length;
	while(lo < hi) {
		var mid = lo + hi >> 1;
		if(x < a[mid]) hi = mid; else lo = mid + 1;
	}
	return lo;
}
Arrays.bisectLeft = function(a,x,lo,hi) {
	if(lo == null) lo = 0;
	if(null == hi) hi = a.length;
	while(lo < hi) {
		var mid = lo + hi >> 1;
		if(a[mid] < x) lo = mid + 1; else hi = mid;
	}
	return lo;
}
Arrays.nearest = function(a,x,f) {
	var delta = [];
	var _g1 = 0, _g = a.length;
	while(_g1 < _g) {
		var i = _g1++;
		delta.push({ i : i, v : Math.abs(f(a[i]) - x)});
	}
	delta.sort(function(a1,b) {
		return Floats.compare(a1.v,b.v);
	});
	return a[delta[0].i];
}
Arrays.compare = function(a,b) {
	var v;
	if((v = a.length - b.length) != 0) return v;
	var _g1 = 0, _g = a.length;
	while(_g1 < _g) {
		var i = _g1++;
		if((v = Dynamics.compare(a[i],b[i])) != 0) return v;
	}
	return 0;
}
Arrays.product = function(a) {
	if(a.length == 0) return [];
	var arr = a.copy(), result = [], temp;
	var _g = 0, _g1 = arr[0];
	while(_g < _g1.length) {
		var value = _g1[_g];
		++_g;
		result.push([value]);
	}
	var _g1 = 1, _g = arr.length;
	while(_g1 < _g) {
		var i = _g1++;
		temp = [];
		var _g2 = 0;
		while(_g2 < result.length) {
			var acc = result[_g2];
			++_g2;
			var _g3 = 0, _g4 = arr[i];
			while(_g3 < _g4.length) {
				var value = _g4[_g3];
				++_g3;
				temp.push(acc.copy().concat([value]));
			}
		}
		result = temp;
	}
	return result;
}
Arrays.rotate = function(a) {
	if(a.length == 0) return [];
	var result = [];
	var _g1 = 0, _g = a[0].length;
	while(_g1 < _g) {
		var i = _g1++;
		result[i] = [];
	}
	var _g1 = 0, _g = a.length;
	while(_g1 < _g) {
		var j = _g1++;
		var _g3 = 0, _g2 = a[0].length;
		while(_g3 < _g2) {
			var i = _g3++;
			result[i][j] = a[j][i];
		}
	}
	return result;
}
Arrays.shuffle = function(a) {
	var t = Ints.range(a.length), arr = [];
	while(t.length > 0) {
		var pos = Std.random(t.length), index = t[pos];
		t.splice(pos,1);
		arr.push(a[index]);
	}
	return arr;
}
Arrays.prototype = {
	__class__: Arrays
}
var DateTools = $hxClasses["DateTools"] = function() { }
DateTools.__name__ = ["DateTools"];
DateTools.__format_get = function(d,e) {
	return (function($this) {
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
}
DateTools.__format = function(d,f) {
	var r = new StringBuf();
	var p = 0;
	while(true) {
		var np = f.indexOf("%",p);
		if(np < 0) break;
		r.b[r.b.length] = f.substr(p,np - p);
		r.add(DateTools.__format_get(d,f.substr(np + 1,1)));
		p = np + 2;
	}
	r.b[r.b.length] = f.substr(p,f.length - p);
	return r.b.join("");
}
DateTools.format = function(d,f) {
	return DateTools.__format(d,f);
}
DateTools.delta = function(d,t) {
	return Date.fromTime(d.getTime() + t);
}
DateTools.getMonthDays = function(d) {
	var month = d.getMonth();
	var year = d.getFullYear();
	if(month != 1) return DateTools.DAYS_OF_MONTH[month];
	var isB = year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
	return isB?29:28;
}
DateTools.seconds = function(n) {
	return n * 1000.0;
}
DateTools.minutes = function(n) {
	return n * 60.0 * 1000.0;
}
DateTools.hours = function(n) {
	return n * 60.0 * 60.0 * 1000.0;
}
DateTools.days = function(n) {
	return n * 24.0 * 60.0 * 60.0 * 1000.0;
}
DateTools.parse = function(t) {
	var s = t / 1000;
	var m = s / 60;
	var h = m / 60;
	return { ms : t % 1000, seconds : Std["int"](s % 60), minutes : Std["int"](m % 60), hours : Std["int"](h % 24), days : Std["int"](h / 24)};
}
DateTools.make = function(o) {
	return o.ms + 1000.0 * (o.seconds + 60.0 * (o.minutes + 60.0 * (o.hours + 24.0 * o.days)));
}
DateTools.prototype = {
	__class__: DateTools
}
haxe.Log = $hxClasses["haxe.Log"] = function() { }
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
}
haxe.Log.clear = function() {
	js.Boot.__clear_trace();
}
haxe.Log.prototype = {
	__class__: haxe.Log
}
var Objects = $hxClasses["Objects"] = function() { }
Objects.__name__ = ["Objects"];
Objects.field = function(o,fieldname,alt) {
	return Reflect.hasField(o,fieldname)?Reflect.field(o,fieldname):alt;
}
Objects.keys = function(o) {
	return Reflect.fields(o);
}
Objects.values = function(o) {
	var arr = [];
	var _g = 0, _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var key = _g1[_g];
		++_g;
		arr.push(Reflect.field(o,key));
	}
	return arr;
}
Objects.entries = function(o) {
	var arr = [];
	var _g = 0, _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var key = _g1[_g];
		++_g;
		arr.push({ key : key, value : Reflect.field(o,key)});
	}
	return arr;
}
Objects.each = function(o,handler) {
	var _g = 0, _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var key = _g1[_g];
		++_g;
		handler(key,Reflect.field(o,key));
	}
}
Objects.map = function(o,handler) {
	var results = [];
	var _g = 0, _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var key = _g1[_g];
		++_g;
		results.push(handler(key,Reflect.field(o,key)));
	}
	return results;
}
Objects["with"] = function(ob,f) {
	f(ob);
	return ob;
}
Objects.toHash = function(ob) {
	var hash = new Hash();
	return Objects.copyToHash(ob,hash);
}
Objects.copyToHash = function(ob,hash) {
	var _g = 0, _g1 = Reflect.fields(ob);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		hash.set(field,Reflect.field(ob,field));
	}
	return hash;
}
Objects.interpolate = function(v,a,b,equation) {
	return (Objects.interpolatef(a,b,equation))(v);
}
Objects.interpolatef = function(a,b,equation) {
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
	return function(t) {
		var _g = 0, _g1 = Reflect.fields(i);
		while(_g < _g1.length) {
			var k = _g1[_g];
			++_g;
			c[k] = Reflect.field(i,k).apply(i,[t]);
		}
		return c;
	};
}
Objects.interpolateByName = function(k,v) {
	return Std["is"](v,String) && Objects._reCheckKeyIsColor.match(k)?thx.color.Colors.interpolatef:Dynamics.interpolatef;
}
Objects.copyTo = function(src,dst) {
	var _g = 0, _g1 = Reflect.fields(src);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		var sv = Dynamics.clone(Reflect.field(src,field));
		var dv = Reflect.field(dst,field);
		if(Reflect.isObject(sv) && null == Type.getClass(sv) && (Reflect.isObject(dv) && null == Type.getClass(dv))) Objects.copyTo(sv,dv); else dst[field] = sv;
	}
	return dst;
}
Objects.clone = function(src) {
	var dst = { };
	return Objects.copyTo(src,dst);
}
Objects.mergef = function(ob,new_ob,f) {
	var _g = 0, _g1 = Reflect.fields(new_ob);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		var new_val = Reflect.field(new_ob,field);
		if(Reflect.hasField(ob,field)) {
			var old_val = Reflect.field(ob,field);
			ob[field] = f(field,old_val,new_val);
		} else ob[field] = new_val;
	}
}
Objects.merge = function(ob,new_ob) {
	Objects.mergef(ob,new_ob,function(key,old_v,new_v) {
		return new_v;
	});
}
Objects._flatten = function(src,cum,arr,levels,level) {
	var _g = 0, _g1 = Reflect.fields(src);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		var clone = Objects.clone(cum);
		var v = Reflect.field(src,field);
		clone.fields.push(field);
		if(Reflect.isObject(v) && null == Type.getClass(v) && (levels == 0 || level + 1 < levels)) Objects._flatten(v,clone,arr,levels,level + 1); else {
			clone.value = v;
			arr.push(clone);
		}
	}
}
Objects.flatten = function(src,levels) {
	if(levels == null) levels = 0;
	var arr = [];
	var _g = 0, _g1 = Reflect.fields(src);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		var v = Reflect.field(src,field);
		if(Reflect.isObject(v) && null == Type.getClass(v) && levels != 1) {
			var item = { fields : [field], value : null};
			Objects._flatten(v,item,arr,levels,1);
		} else arr.push({ fields : [field], value : v});
	}
	return arr;
}
Objects.compare = function(a,b) {
	var v, fields;
	if((v = Arrays.compare(fields = Reflect.fields(a),Reflect.fields(b))) != 0) return v;
	var _g = 0;
	while(_g < fields.length) {
		var field = fields[_g];
		++_g;
		if((v = Dynamics.compare(Reflect.field(a,field),Reflect.field(b,field))) != 0) return v;
	}
	return 0;
}
Objects.addFields = function(o,fields,values) {
	var _g1 = 0, _g = fields.length;
	while(_g1 < _g) {
		var i = _g1++;
		Objects.addField(o,fields[i],values[i]);
	}
	return o;
}
Objects.addField = function(o,field,value) {
	o[field] = value;
	return o;
}
Objects.format = function(v,param,params,culture) {
	return (Objects.formatf(param,params,culture))(v);
}
Objects.formatf = function(param,params,culture) {
	params = thx.culture.FormatParams.params(param,params,"R");
	var format = params.shift();
	switch(format) {
	case "O":
		return function(v) {
			return Std.string(v);
		};
	case "R":
		return function(v) {
			var buf = [];
			var _g = 0, _g1 = Reflect.fields(v);
			while(_g < _g1.length) {
				var field = _g1[_g];
				++_g;
				buf.push(field + ":" + Dynamics.format(Reflect.field(v,field),null,null,null,culture));
			}
			return "{" + buf.join(",") + "}";
		};
	default:
		return (function($this) {
			var $r;
			throw new thx.error.Error("Unsupported number format: {0}",null,format,{ fileName : "Objects.hx", lineNumber : 263, className : "Objects", methodName : "formatf"});
			return $r;
		}(this));
	}
}
Objects.prototype = {
	__class__: Objects
}
rg.query.Query = $hxClasses["rg.query.Query"] = function() {
	rg.query.BaseQuery.call(this,null,this);
}
rg.query.Query.__name__ = ["rg","query","Query"];
rg.query.Query.create = function() {
	var start = new rg.query.Query(), query = start._createQuery(function(data,handler) {
		handler(data);
	},start);
	start._next = query;
	return query;
}
rg.query.Query.loadHandler = function(instance,handler) {
	var current = instance._next;
	var execute = (function($this) {
		var $r;
		var execute = null;
		execute = function(results) {
			if(null == current._next) {
				handler(results);
				return;
			}
			current = current._next;
			current._delegate(results,execute);
		};
		$r = execute;
		return $r;
	}(this));
	execute([{ }]);
}
rg.query.Query.__super__ = rg.query.BaseQuery;
rg.query.Query.prototype = $extend(rg.query.BaseQuery.prototype,{
	load: function(handler) {
		rg.query.Query.loadHandler(this,handler);
	}
	,__class__: rg.query.Query
});
thx.json.JsonEncoder = $hxClasses["thx.json.JsonEncoder"] = function() {
}
thx.json.JsonEncoder.__name__ = ["thx","json","JsonEncoder"];
thx.json.JsonEncoder.__interfaces__ = [thx.data.IDataHandler];
thx.json.JsonEncoder.prototype = {
	encodedString: null
	,buf: null
	,lvl: null
	,count: null
	,start: function() {
		this.lvl = 0;
		this.buf = new StringBuf();
		this.encodedString = null;
		this.count = [];
	}
	,end: function() {
		this.encodedString = this.buf.b.join("");
		this.buf = null;
	}
	,startObject: function() {
		this.buf.add("{");
		this.count.push(0);
	}
	,startField: function(name) {
		if(this.count[this.count.length - 1]++ > 0) this.buf.add(",");
		this.buf.add(this.quote(name) + ":");
	}
	,endField: function() {
	}
	,endObject: function() {
		this.buf.add("}");
		this.count.pop();
	}
	,startArray: function() {
		this.buf.add("[");
		this.count.push(0);
	}
	,startItem: function() {
		if(this.count[this.count.length - 1]++ > 0) this.buf.add(",");
	}
	,endItem: function() {
	}
	,endArray: function() {
		this.buf.add("]");
		this.count.pop();
	}
	,date: function(d) {
		this.buf.add(d.getTime());
	}
	,string: function(s) {
		this.buf.add(this.quote(s));
	}
	,'int': function(i) {
		this.buf.add(i);
	}
	,'float': function(f) {
		this.buf.add(f);
	}
	,'null': function() {
		this.buf.add("null");
	}
	,bool: function(b) {
		this.buf.add(b?"true":"false");
	}
	,comment: function(s) {
	}
	,quote: function(s) {
		return "\"" + new EReg(".","").customReplace(new EReg("(\n)","g").replace(new EReg("(\"|\\\\)","g").replace(s,"\\$1"),"\\n"),function(r) {
			var c = r.matched(0).charCodeAt(0);
			return c >= 32 && c <= 127?String.fromCharCode(c):"\\u" + StringTools.hex(c,4);
		}) + "\"";
	}
	,__class__: thx.json.JsonEncoder
}
var Floats = $hxClasses["Floats"] = function() { }
Floats.__name__ = ["Floats"];
Floats.normalize = function(v) {
	if(v < 0.0) return 0.0; else if(v > 1.0) return 1.0; else return v;
}
Floats.clamp = function(v,min,max) {
	if(v < min) return min; else if(v > max) return max; else return v;
}
Floats.clampSym = function(v,max) {
	if(v < -max) return -max; else if(v > max) return max; else return v;
}
Floats.range = function(start,stop,step) {
	if(step == null) step = 1.0;
	if(null == stop) {
		stop = start;
		start = 0.0;
	}
	if((stop - start) / step == Math.POSITIVE_INFINITY) throw new thx.error.Error("infinite range",null,null,{ fileName : "Floats.hx", lineNumber : 50, className : "Floats", methodName : "range"});
	var range = [], i = -1.0, j;
	if(step < 0) while((j = start + step * ++i) > stop) range.push(j); else while((j = start + step * ++i) < stop) range.push(j);
	return range;
}
Floats.sign = function(v) {
	return v < 0?-1:1;
}
Floats.abs = function(a) {
	return a < 0?-a:a;
}
Floats.min = function(a,b) {
	return a < b?a:b;
}
Floats.max = function(a,b) {
	return a > b?a:b;
}
Floats.wrap = function(v,min,max) {
	var range = max - min + 1;
	if(v < min) v += range * ((min - v) / range + 1);
	return min + (v - min) % range;
}
Floats.circularWrap = function(v,max) {
	v = v % max;
	if(v < 0) v += max;
	return v;
}
Floats.interpolate = function(f,a,b,equation) {
	if(b == null) b = 1.0;
	if(a == null) a = 0.0;
	if(null == equation) equation = thx.math.Equations.linear;
	return a + equation(f) * (b - a);
}
Floats.interpolatef = function(a,b,equation) {
	if(b == null) b = 1.0;
	if(a == null) a = 0.0;
	if(null == equation) equation = thx.math.Equations.linear;
	var d = b - a;
	return function(f) {
		return a + equation(f) * d;
	};
}
Floats.interpolateClampf = function(min,max,equation) {
	if(null == equation) equation = thx.math.Equations.linear;
	return function(a,b) {
		var d = b - a;
		return function(f) {
			return a + equation(Floats.clamp(f,min,max)) * d;
		};
	};
}
Floats.format = function(v,param,params,culture) {
	return (Floats.formatf(param,params,culture))(v);
}
Floats.formatf = function(param,params,culture) {
	params = thx.culture.FormatParams.params(param,params,"D");
	var format = params.shift();
	var decimals = params.length > 0?Std.parseInt(params[0]):null;
	switch(format) {
	case "D":
		return function(v) {
			return thx.culture.FormatNumber.decimal(v,decimals,culture);
		};
	case "I":
		return function(v) {
			return thx.culture.FormatNumber["int"](v,culture);
		};
	case "C":
		var s = params.length > 1?params[1]:null;
		return function(v) {
			return thx.culture.FormatNumber.currency(v,s,decimals,culture);
		};
	case "P":
		return function(v) {
			return thx.culture.FormatNumber.percent(v,decimals,culture);
		};
	case "M":
		return function(v) {
			return thx.culture.FormatNumber.permille(v,decimals,culture);
		};
	default:
		return (function($this) {
			var $r;
			throw new thx.error.Error("Unsupported number format: {0}",null,format,{ fileName : "Floats.hx", lineNumber : 145, className : "Floats", methodName : "formatf"});
			return $r;
		}(this));
	}
}
Floats.canParse = function(s) {
	return Floats._reparse.match(s);
}
Floats.parse = function(s) {
	if(s.substr(0,1) == "+") s = s.substr(1);
	return Std.parseFloat(s);
}
Floats.compare = function(a,b) {
	return a < b?-1:a > b?1:0;
}
Floats.isNumeric = function(v) {
	return Std["is"](v,Float) || Std["is"](v,Int);
}
Floats.equals = function(a,b,approx) {
	if(approx == null) approx = 1e-5;
	if(Math.isNaN(a)) return Math.isNaN(b); else if(Math.isNaN(b)) return false; else if(!Math.isFinite(a) && !Math.isFinite(b)) return a > 0 == b > 0;
	return Math.abs(b - a) < approx;
}
Floats.uninterpolatef = function(a,b) {
	b = 1 / (b - a);
	return function(x) {
		return (x - a) * b;
	};
}
Floats.uninterpolateClampf = function(a,b) {
	b = 1 / (b - a);
	return function(x) {
		return Floats.clamp((x - a) * b,0.0,1.0);
	};
}
Floats.round = function(number,precision) {
	if(precision == null) precision = 2;
	number *= Math.pow(10,precision);
	return Math.round(number) / Math.pow(10,precision);
}
Floats.prototype = {
	__class__: Floats
}
var Std = $hxClasses["Std"] = function() { }
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	return js.Boot.__instanceof(v,t);
}
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
Std["int"] = function(x) {
	if(x < 0) return Math.ceil(x);
	return Math.floor(x);
}
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && x.charCodeAt(1) == 120) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}
Std.random = function(x) {
	return Math.floor(Math.random() * x);
}
Std.prototype = {
	__class__: Std
}
haxe.Md5 = $hxClasses["haxe.Md5"] = function() {
}
haxe.Md5.__name__ = ["haxe","Md5"];
haxe.Md5.encode = function(s) {
	return new haxe.Md5().doEncode(s);
}
haxe.Md5.prototype = {
	bitOR: function(a,b) {
		var lsb = a & 1 | b & 1;
		var msb31 = a >>> 1 | b >>> 1;
		return msb31 << 1 | lsb;
	}
	,bitXOR: function(a,b) {
		var lsb = a & 1 ^ b & 1;
		var msb31 = a >>> 1 ^ b >>> 1;
		return msb31 << 1 | lsb;
	}
	,bitAND: function(a,b) {
		var lsb = a & 1 & (b & 1);
		var msb31 = a >>> 1 & b >>> 1;
		return msb31 << 1 | lsb;
	}
	,addme: function(x,y) {
		var lsw = (x & 65535) + (y & 65535);
		var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
		return msw << 16 | lsw & 65535;
	}
	,rhex: function(num) {
		var str = "";
		var hex_chr = "0123456789abcdef";
		var _g = 0;
		while(_g < 4) {
			var j = _g++;
			str += hex_chr.charAt(num >> j * 8 + 4 & 15) + hex_chr.charAt(num >> j * 8 & 15);
		}
		return str;
	}
	,str2blks: function(str) {
		var nblk = (str.length + 8 >> 6) + 1;
		var blks = new Array();
		var _g1 = 0, _g = nblk * 16;
		while(_g1 < _g) {
			var i = _g1++;
			blks[i] = 0;
		}
		var i = 0;
		while(i < str.length) {
			blks[i >> 2] |= str.charCodeAt(i) << (str.length * 8 + i) % 4 * 8;
			i++;
		}
		blks[i >> 2] |= 128 << (str.length * 8 + i) % 4 * 8;
		var l = str.length * 8;
		var k = nblk * 16 - 2;
		blks[k] = l & 255;
		blks[k] |= (l >>> 8 & 255) << 8;
		blks[k] |= (l >>> 16 & 255) << 16;
		blks[k] |= (l >>> 24 & 255) << 24;
		return blks;
	}
	,rol: function(num,cnt) {
		return num << cnt | num >>> 32 - cnt;
	}
	,cmn: function(q,a,b,x,s,t) {
		return this.addme(this.rol(this.addme(this.addme(a,q),this.addme(x,t)),s),b);
	}
	,ff: function(a,b,c,d,x,s,t) {
		return this.cmn(this.bitOR(this.bitAND(b,c),this.bitAND(~b,d)),a,b,x,s,t);
	}
	,gg: function(a,b,c,d,x,s,t) {
		return this.cmn(this.bitOR(this.bitAND(b,d),this.bitAND(c,~d)),a,b,x,s,t);
	}
	,hh: function(a,b,c,d,x,s,t) {
		return this.cmn(this.bitXOR(this.bitXOR(b,c),d),a,b,x,s,t);
	}
	,ii: function(a,b,c,d,x,s,t) {
		return this.cmn(this.bitXOR(c,this.bitOR(b,~d)),a,b,x,s,t);
	}
	,doEncode: function(str) {
		var x = this.str2blks(str);
		var a = 1732584193;
		var b = -271733879;
		var c = -1732584194;
		var d = 271733878;
		var step;
		var i = 0;
		while(i < x.length) {
			var olda = a;
			var oldb = b;
			var oldc = c;
			var oldd = d;
			step = 0;
			a = this.ff(a,b,c,d,x[i],7,-680876936);
			d = this.ff(d,a,b,c,x[i + 1],12,-389564586);
			c = this.ff(c,d,a,b,x[i + 2],17,606105819);
			b = this.ff(b,c,d,a,x[i + 3],22,-1044525330);
			a = this.ff(a,b,c,d,x[i + 4],7,-176418897);
			d = this.ff(d,a,b,c,x[i + 5],12,1200080426);
			c = this.ff(c,d,a,b,x[i + 6],17,-1473231341);
			b = this.ff(b,c,d,a,x[i + 7],22,-45705983);
			a = this.ff(a,b,c,d,x[i + 8],7,1770035416);
			d = this.ff(d,a,b,c,x[i + 9],12,-1958414417);
			c = this.ff(c,d,a,b,x[i + 10],17,-42063);
			b = this.ff(b,c,d,a,x[i + 11],22,-1990404162);
			a = this.ff(a,b,c,d,x[i + 12],7,1804603682);
			d = this.ff(d,a,b,c,x[i + 13],12,-40341101);
			c = this.ff(c,d,a,b,x[i + 14],17,-1502002290);
			b = this.ff(b,c,d,a,x[i + 15],22,1236535329);
			a = this.gg(a,b,c,d,x[i + 1],5,-165796510);
			d = this.gg(d,a,b,c,x[i + 6],9,-1069501632);
			c = this.gg(c,d,a,b,x[i + 11],14,643717713);
			b = this.gg(b,c,d,a,x[i],20,-373897302);
			a = this.gg(a,b,c,d,x[i + 5],5,-701558691);
			d = this.gg(d,a,b,c,x[i + 10],9,38016083);
			c = this.gg(c,d,a,b,x[i + 15],14,-660478335);
			b = this.gg(b,c,d,a,x[i + 4],20,-405537848);
			a = this.gg(a,b,c,d,x[i + 9],5,568446438);
			d = this.gg(d,a,b,c,x[i + 14],9,-1019803690);
			c = this.gg(c,d,a,b,x[i + 3],14,-187363961);
			b = this.gg(b,c,d,a,x[i + 8],20,1163531501);
			a = this.gg(a,b,c,d,x[i + 13],5,-1444681467);
			d = this.gg(d,a,b,c,x[i + 2],9,-51403784);
			c = this.gg(c,d,a,b,x[i + 7],14,1735328473);
			b = this.gg(b,c,d,a,x[i + 12],20,-1926607734);
			a = this.hh(a,b,c,d,x[i + 5],4,-378558);
			d = this.hh(d,a,b,c,x[i + 8],11,-2022574463);
			c = this.hh(c,d,a,b,x[i + 11],16,1839030562);
			b = this.hh(b,c,d,a,x[i + 14],23,-35309556);
			a = this.hh(a,b,c,d,x[i + 1],4,-1530992060);
			d = this.hh(d,a,b,c,x[i + 4],11,1272893353);
			c = this.hh(c,d,a,b,x[i + 7],16,-155497632);
			b = this.hh(b,c,d,a,x[i + 10],23,-1094730640);
			a = this.hh(a,b,c,d,x[i + 13],4,681279174);
			d = this.hh(d,a,b,c,x[i],11,-358537222);
			c = this.hh(c,d,a,b,x[i + 3],16,-722521979);
			b = this.hh(b,c,d,a,x[i + 6],23,76029189);
			a = this.hh(a,b,c,d,x[i + 9],4,-640364487);
			d = this.hh(d,a,b,c,x[i + 12],11,-421815835);
			c = this.hh(c,d,a,b,x[i + 15],16,530742520);
			b = this.hh(b,c,d,a,x[i + 2],23,-995338651);
			a = this.ii(a,b,c,d,x[i],6,-198630844);
			d = this.ii(d,a,b,c,x[i + 7],10,1126891415);
			c = this.ii(c,d,a,b,x[i + 14],15,-1416354905);
			b = this.ii(b,c,d,a,x[i + 5],21,-57434055);
			a = this.ii(a,b,c,d,x[i + 12],6,1700485571);
			d = this.ii(d,a,b,c,x[i + 3],10,-1894986606);
			c = this.ii(c,d,a,b,x[i + 10],15,-1051523);
			b = this.ii(b,c,d,a,x[i + 1],21,-2054922799);
			a = this.ii(a,b,c,d,x[i + 8],6,1873313359);
			d = this.ii(d,a,b,c,x[i + 15],10,-30611744);
			c = this.ii(c,d,a,b,x[i + 6],15,-1560198380);
			b = this.ii(b,c,d,a,x[i + 13],21,1309151649);
			a = this.ii(a,b,c,d,x[i + 4],6,-145523070);
			d = this.ii(d,a,b,c,x[i + 11],10,-1120210379);
			c = this.ii(c,d,a,b,x[i + 2],15,718787259);
			b = this.ii(b,c,d,a,x[i + 9],21,-343485551);
			a = this.addme(a,olda);
			b = this.addme(b,oldb);
			c = this.addme(c,oldc);
			d = this.addme(d,oldd);
			i += 16;
		}
		return this.rhex(a) + this.rhex(b) + this.rhex(c) + this.rhex(d);
	}
	,__class__: haxe.Md5
}
rg.data.reportgrid.ReportGridExecutorMemoryCache = $hxClasses["rg.data.reportgrid.ReportGridExecutorMemoryCache"] = function(executor) {
	this.executor = executor;
	this.cache = new Hash();
	this.queue = new Hash();
	this.timeout = 60;
}
rg.data.reportgrid.ReportGridExecutorMemoryCache.__name__ = ["rg","data","reportgrid","ReportGridExecutorMemoryCache"];
rg.data.reportgrid.ReportGridExecutorMemoryCache.__interfaces__ = [rg.data.reportgrid.IExecutorReportGrid];
rg.data.reportgrid.ReportGridExecutorMemoryCache.prototype = {
	timeout: null
	,executor: null
	,cache: null
	,queue: null
	,children: function(path,options,success,error) {
		this.execute("children",path,options,success,error);
	}
	,propertyCount: function(path,options,success,error) {
		this.execute("propertyCount",path,options,success,error);
	}
	,propertySeries: function(path,options,success,error) {
		this.execute("propertySeries",path,options,success,error);
	}
	,propertyMeans: function(path,options,success,error) {
		this.execute("propertyMeans",path,options,success,error);
	}
	,propertyStandardDeviations: function(path,options,success,error) {
		this.execute("propertyStandardDeviations",path,options,success,error);
	}
	,propertyValues: function(path,options,success,error) {
		this.execute("propertyValues",path,options,success,error);
	}
	,propertyValueCount: function(path,options,success,error) {
		this.execute("propertyValueCount",path,options,success,error);
	}
	,propertyValueSeries: function(path,options,success,error) {
		this.execute("propertyValueSeries",path,options,success,error);
	}
	,searchCount: function(path,options,success,error) {
		this.execute("searchCount",path,options,success,error);
	}
	,searchSeries: function(path,options,success,error) {
		this.execute("searchSeries",path,options,success,error);
	}
	,intersect: function(path,options,success,error) {
		this.execute("intersect",path,options,success,error);
	}
	,histogram: function(path,options,success,error) {
		this.execute("histogram",path,options,success,error);
	}
	,propertiesHistogram: function(path,options,success,error) {
		this.execute("propertiesHistogram",path,options,success,error);
	}
	,execute: function(name,path,options,success,error) {
		var id = this.id(name,path,options), val = this.getCache(id);
		if(null != val) success(val);
		var q = this.getQueue(id);
		if(null != q) q.push(success); else (Reflect.field(this.executor,name))(path,options,this.cacheSuccess(id,success),error);
	}
	,cacheSuccess: function(id,success) {
		var me = this;
		this.queue.set(id,[]);
		return function(r) {
			if(me.timeout >= 0) me.cache.set(id,r);
			if(me.timeout > 0) haxe.Timer.delay(function() {
				me.cache.remove(id);
			},me.timeout * 1000);
			success(r);
			var q = me.queue.get(id);
			if(null != q) {
				var _g = 0;
				while(_g < q.length) {
					var item = q[_g];
					++_g;
					item(r);
				}
			}
			me.queue.remove(id);
		};
	}
	,getCache: function(id) {
		return this.cache.get(id);
	}
	,getQueue: function(id) {
		if(this.timeout < 0) return null;
		return this.queue.get(id);
	}
	,id: function(method,path,options) {
		var s = method + ":" + path + ":" + thx.json.Json.encode(options);
		return haxe.Md5.encode(s);
	}
	,__class__: rg.data.reportgrid.ReportGridExecutorMemoryCache
}
thx.data.ValueHandler = $hxClasses["thx.data.ValueHandler"] = function() {
}
thx.data.ValueHandler.__name__ = ["thx","data","ValueHandler"];
thx.data.ValueHandler.__interfaces__ = [thx.data.IDataHandler];
thx.data.ValueHandler.prototype = {
	value: null
	,_stack: null
	,_names: null
	,start: function() {
		this._stack = [];
		this._names = [];
	}
	,end: function() {
		this.value = this._stack.pop();
	}
	,startObject: function() {
		this._stack.push({ });
	}
	,endObject: function() {
	}
	,startField: function(name) {
		this._names.push(name);
	}
	,endField: function() {
		var value = this._stack.pop();
		var last = Arrays.last(this._stack);
		last[this._names.pop()] = value;
	}
	,startArray: function() {
		this._stack.push([]);
	}
	,endArray: function() {
	}
	,startItem: function() {
	}
	,endItem: function() {
		var value = this._stack.pop();
		var last = Arrays.last(this._stack);
		last.push(value);
	}
	,date: function(d) {
		this._stack.push(d);
	}
	,string: function(s) {
		this._stack.push(s);
	}
	,'int': function(i) {
		this._stack.push(i);
	}
	,'float': function(f) {
		this._stack.push(f);
	}
	,'null': function() {
		this._stack.push(null);
	}
	,bool: function(b) {
		this._stack.push(b);
	}
	,comment: function(s) {
	}
	,__class__: thx.data.ValueHandler
}
thx.math.Equations = $hxClasses["thx.math.Equations"] = function() { }
thx.math.Equations.__name__ = ["thx","math","Equations"];
thx.math.Equations.linear = function(v) {
	return v;
}
thx.math.Equations.polynomial = function(t,e) {
	return Math.pow(t,e);
}
thx.math.Equations.quadratic = function(t) {
	return thx.math.Equations.polynomial(t,2);
}
thx.math.Equations.cubic = function(t) {
	return thx.math.Equations.polynomial(t,3);
}
thx.math.Equations.sin = function(t) {
	return 1 - Math.cos(t * Math.PI / 2);
}
thx.math.Equations.exponential = function(t) {
	return t != 0?Math.pow(2,10 * (t - 1)) - 1e-3:0;
}
thx.math.Equations.circle = function(t) {
	return 1 - Math.sqrt(1 - t * t);
}
thx.math.Equations.elastic = function(t,a,p) {
	var s;
	if(null == p) p = 0.45;
	if(null == a) {
		a = 1;
		s = p / 4;
	} else s = p / (2 * Math.PI) / Math.asin(1 / a);
	return 1 + a * Math.pow(2,10 * -t) * Math.sin((t - s) * 2 * Math.PI / p);
}
thx.math.Equations.elasticf = function(a,p) {
	var s;
	if(null == p) p = 0.45;
	if(null == a) {
		a = 1;
		s = p / 4;
	} else s = p / (2 * Math.PI) / Math.asin(1 / a);
	return function(t) {
		return 1 + a * Math.pow(2,10 * -t) * Math.sin((t - s) * 2 * Math.PI / p);
	};
}
thx.math.Equations.back = function(t,s) {
	if(null == s) s = 1.70158;
	return t * t * ((s + 1) * t - s);
}
thx.math.Equations.backf = function(s) {
	if(null == s) s = 1.70158;
	return function(t) {
		return t * t * ((s + 1) * t - s);
	};
}
thx.math.Equations.bounce = function(t) {
	return t < 1 / 2.75?7.5625 * t * t:t < 2 / 2.75?7.5625 * (t -= 1.5 / 2.75) * t + .75:t < 2.5 / 2.75?7.5625 * (t -= 2.25 / 2.75) * t + .9375:7.5625 * (t -= 2.625 / 2.75) * t + .984375;
}
thx.math.Equations.polynomialf = function(e) {
	return function(t) {
		thx.math.Equations.polynomial(t,e);
	};
}
thx.math.Equations.prototype = {
	__class__: thx.math.Equations
}
js.Lib = $hxClasses["js.Lib"] = function() { }
js.Lib.__name__ = ["js","Lib"];
js.Lib.isIE = null;
js.Lib.isOpera = null;
js.Lib.document = null;
js.Lib.window = null;
js.Lib.alert = function(v) {
	alert(js.Boot.__string_rec(v,""));
}
js.Lib.eval = function(code) {
	return eval(code);
}
js.Lib.setErrorHandler = function(f) {
	js.Lib.onerror = f;
}
js.Lib.prototype = {
	__class__: js.Lib
}
var StringTools = $hxClasses["StringTools"] = function() { }
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
}
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
}
StringTools.htmlEscape = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
StringTools.htmlUnescape = function(s) {
	return s.split("&gt;").join(">").split("&lt;").join("<").split("&amp;").join("&");
}
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && s.substr(0,start.length) == start;
}
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	return slen >= elen && s.substr(slen - elen,elen) == end;
}
StringTools.isSpace = function(s,pos) {
	var c = s.charCodeAt(pos);
	return c >= 9 && c <= 13 || c == 32;
}
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) return s.substr(r,l - r); else return s;
}
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) return s.substr(0,l - r); else return s;
}
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
}
StringTools.rpad = function(s,c,l) {
	var sl = s.length;
	var cl = c.length;
	while(sl < l) if(l - sl < cl) {
		s += c.substr(0,l - sl);
		sl = l;
	} else {
		s += c;
		sl += cl;
	}
	return s;
}
StringTools.lpad = function(s,c,l) {
	var ns = "";
	var sl = s.length;
	if(sl >= l) return s;
	var cl = c.length;
	while(sl < l) if(l - sl < cl) {
		ns += c.substr(0,l - sl);
		sl = l;
	} else {
		ns += c;
		sl += cl;
	}
	return ns + s;
}
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
}
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	return s;
}
StringTools.fastCodeAt = function(s,index) {
	return s.cca(index);
}
StringTools.isEOF = function(c) {
	return c != c;
}
StringTools.prototype = {
	__class__: StringTools
}
js.Boot.__res = {}
js.Boot.__init();
thx.languages.En.getLanguage();
thx.cultures.EnUS.getCulture();
{
	var JSON;
	if(null != (JSON = JSON)) {
		thx.json.Json.nativeDecoder = JSON.parse;
		thx.json.Json.nativeEncoder = JSON.stringify;
	}
}
{
	Math.__name__ = ["Math"];
	Math.NaN = Number["NaN"];
	Math.NEGATIVE_INFINITY = Number["NEGATIVE_INFINITY"];
	Math.POSITIVE_INFINITY = Number["POSITIVE_INFINITY"];
	$hxClasses["Math"] = Math;
	Math.isFinite = function(i) {
		return isFinite(i);
	};
	Math.isNaN = function(i) {
		return isNaN(i);
	};
}
if(typeof(haxe_timers) == "undefined") haxe_timers = [];
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
{
	String.prototype.__class__ = $hxClasses["String"] = String;
	String.__name__ = ["String"];
	Array.prototype.__class__ = $hxClasses["Array"] = Array;
	Array.__name__ = ["Array"];
	Int = $hxClasses["Int"] = { __name__ : ["Int"]};
	Dynamic = $hxClasses["Dynamic"] = { __name__ : ["Dynamic"]};
	Float = $hxClasses["Float"] = Number;
	Float.__name__ = ["Float"];
	Bool = $hxClasses["Bool"] = { __ename__ : ["Bool"]};
	Class = $hxClasses["Class"] = { __name__ : ["Class"]};
	Enum = { };
	Void = $hxClasses["Void"] = { __ename__ : ["Void"]};
}
{
	js.Lib.document = document;
	js.Lib.window = window;
	onerror = function(msg,url,line) {
		var f = js.Lib.onerror;
		if( f == null )
			return false;
		return f(msg,[url+":"+line]);
	}
}
{
	var d = Date;
	d.now = function() {
		return new Date();
	};
	d.fromTime = function(t) {
		var d1 = new Date();
		d1["setTime"](t);
		return d1;
	};
	d.fromString = function(s) {
		switch(s.length) {
		case 8:
			var k = s.split(":");
			var d1 = new Date();
			d1["setTime"](0);
			d1["setUTCHours"](k[0]);
			d1["setUTCMinutes"](k[1]);
			d1["setUTCSeconds"](k[2]);
			return d1;
		case 10:
			var k = s.split("-");
			return new Date(k[0],k[1] - 1,k[2],0,0,0);
		case 19:
			var k = s.split(" ");
			var y = k[0].split("-");
			var t = k[1].split(":");
			return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
		default:
			throw "Invalid date format : " + s;
		}
	};
	d.prototype["toString"] = function() {
		var date = this;
		var m = date.getMonth() + 1;
		var d1 = date.getDate();
		var h = date.getHours();
		var mi = date.getMinutes();
		var s = date.getSeconds();
		return date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d1 < 10?"0" + d1:"" + d1) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
	};
	d.prototype.__class__ = $hxClasses["Date"] = d;
	d.__name__ = ["Date"];
}
Ints._reparse = new EReg("^([+-])?\\d+$","");
thx.color.Colors._reParse = new EReg("^(?:(hsl|rgb|rgba|cmyk)\\(([^)]+)\\))|(?:(?:0x|#)([a-f0-9]{3,6}))$","i");
Dates._reparse = new EReg("^\\d{4}-\\d\\d-\\d\\d(( |T)\\d\\d:\\d\\d(:\\d\\d(\\.\\d{1,3})?)?)?Z?$","");
thx.date.DateParser.daynumeric = "0?[1-9]|[1-2][0-9]|3[0-1]";
thx.date.DateParser.months = thx.cultures.EnUS.getCulture().date.months.slice(0,-1).map(function(d,i) {
	return d.toLowerCase();
});
thx.date.DateParser.shortmonths = thx.cultures.EnUS.getCulture().date.abbrMonths.slice(0,-1).map(function(d,i) {
	return d.toLowerCase();
});
thx.date.DateParser.days = thx.cultures.EnUS.getCulture().date.days.map(function(d,i) {
	return d.toLowerCase();
});
thx.date.DateParser.shortdays = thx.cultures.EnUS.getCulture().date.abbrDays.map(function(d,i) {
	return d.toLowerCase();
});
thx.date.DateParser.sfullmonths = thx.date.DateParser.months.join("|");
thx.date.DateParser.sshortmonths = thx.date.DateParser.shortmonths.join("|");
thx.date.DateParser.sfulldays = thx.date.DateParser.days.join("|");
thx.date.DateParser.sshortdays = thx.date.DateParser.shortdays.join("|");
thx.date.DateParser.day = "(0?[0-9]|[1-2][0-9]|3[0-1])(?:st|nd|rd|th)?";
thx.date.DateParser.month = "(?:0?[1-9]|1[0-2])";
thx.date.DateParser.hour = "(?:0?[0-9]|1[0-9]|2[0-3])";
thx.date.DateParser.hhour = "(?:0[0-9]|1[0-2])";
thx.date.DateParser.hohour = "(?:0?[0-9]|1[0-2])";
thx.date.DateParser.fminsec = "(?:0[0-9]|[1-5][0-9])";
thx.date.DateParser.minsec = "(?:0?[0-9]|[1-5][0-9])";
thx.date.DateParser.ampm = "(?:(?:in\\s+the\\s+)?(am|pm|evening|morning|afternoon))";
thx.date.DateParser.daypart = "(?:(?:in\\s+the\\s+)?(evening|morning|afternoon|sunsrise|sunset|dawn|dusk|noon|mid-day|midday|mid-night|midnight))";
thx.date.DateParser.period = "minute|minutes|hour|hours|day|days|week|weeks|month|months|year|years|second|seconds";
thx.date.DateParser.dateexp = new EReg("(?:(?:" + "\\b(" + thx.date.DateParser.sfullmonths + ")\\s+" + thx.date.DateParser.day + "(?:\\s*,\\s*(\\d{2,4}))?\\b" + ")|(?:" + "\\b(" + thx.date.DateParser.sshortmonths + ")\\s+" + thx.date.DateParser.day + "(?:\\s*,?\\s*(\\d{2,4}))?\\b" + ")|(?:" + "\\b" + thx.date.DateParser.day + "\\s+(" + thx.date.DateParser.sfullmonths + ")(?:\\s+(\\d{2,4}))?\\b" + ")|(?:" + "\\b" + thx.date.DateParser.day + "\\s+(" + thx.date.DateParser.sshortmonths + ")(?:\\s+(\\d{2,4}))?\\b" + ")|(?:" + "\\b(?:" + thx.date.DateParser.day + "\\s+)?(" + thx.date.DateParser.sfullmonths + ")\\s+(\\d{2,4})\\b" + ")|(?:" + "\\b(?:" + thx.date.DateParser.day + "\\s+)?(" + thx.date.DateParser.sshortmonths + ")\\s+(\\d{2,4})\\b" + ")|(?:" + "\\b(" + thx.date.DateParser.month + ")/" + thx.date.DateParser.day + "(?:/(\\d{2,4}))?\\b" + ")|(?:" + "\\b" + thx.date.DateParser.day + "/(" + thx.date.DateParser.month + ")(?:/(\\d{2,4}))?\\b" + ")|(?:" + "\\b(\\d{2,4})-(" + thx.date.DateParser.month + ")-" + thx.date.DateParser.day + "\\b" + ")|(?:" + "^\\s*" + thx.date.DateParser.day + "\\s*$" + "))","i");
thx.date.DateParser.absdateexp = new EReg("(?:(?:" + "\\b(today|now|this\\s+second|tomorrow|yesterday)\\b" + ")|(?:" + "\\b(?:(next|last|this)\\s+)?(" + thx.date.DateParser.sfullmonths + ")\\b" + ")|(?:" + "\\b(?:(next|last|this)\\s+)?(" + thx.date.DateParser.sfulldays + ")\\b" + ")|(?:" + "\\b(?:(next|last|this)\\s+)?(" + thx.date.DateParser.sshortmonths + ")\\b" + ")|(?:" + "\\b(?:(next|last|this)\\s+)?(" + thx.date.DateParser.sshortdays + ")\\b" + "))","i");
thx.date.DateParser.relexp = new EReg("(?:(?:" + "\\b(plus\\s+|minus\\s|\\+|-|in)\\s*(\\d+)?\\s+(" + thx.date.DateParser.period + ")\\b" + ")|(?:" + "\\b(\\d+)?\\s+(" + thx.date.DateParser.period + ")\\s+(from|before|hence|after|ago)?\\b" + "))","i");
thx.date.DateParser.timeexp = new EReg("(?:\\bat\\s+)?" + "(?:(?:" + "\\b(" + thx.date.DateParser.hohour + "):(" + thx.date.DateParser.minsec + ")\\s*" + thx.date.DateParser.ampm + "\\b" + ")|(?:" + "\\b(" + thx.date.DateParser.hour + "):(" + thx.date.DateParser.minsec + ")(?:[:](" + thx.date.DateParser.minsec + ")(?:\\.(\\d+))?)?\\b" + ")|(?:" + "(?:^|\\s+)(" + thx.date.DateParser.hhour + ")(" + thx.date.DateParser.fminsec + ")\\s*" + thx.date.DateParser.ampm + "?(?:\\s+|$)" + ")|(?:" + "\\b(" + thx.date.DateParser.hohour + ")\\s*" + thx.date.DateParser.ampm + "\\b" + ")|(?:" + "\\b" + thx.date.DateParser.daypart + "\\b" + "))","i");
Strings._re = new EReg("[{](\\d+)(?::[^}]*)?[}]","m");
Strings._reSplitWC = new EReg("(\r\n|\n\r|\n|\r)","g");
Strings._reReduceWS = new EReg("\\s+","");
Strings._reStripTags = new EReg("(<[a-z]+[^>/]*/?>|</[a-z]+>)","i");
Strings._reFormat = new EReg("{(\\d+)(?::([a-zA-Z]+))?(?:,([^\"',}]+|'[^']+'|\"[^\"]+\"))?(?:,([^\"',}]+|'[^']+'|\"[^\"]+\"))?(?:,([^\"',}]+|'[^']+'|\"[^\"]+\"))?}","m");
Strings._reCollapse = new EReg("\\s+","g");
Strings.__ucwordsPattern = new EReg("[^a-zA-Z]([a-z])","");
Strings.__ucwordswsPattern = new EReg("\\s([a-z])","");
Strings.__alphaNumPattern = new EReg("^[a-z0-9]+$","i");
Strings.__digitsPattern = new EReg("^[0-9]+$","");
Strings._reInterpolateNumber = new EReg("[-+]?(?:\\d+\\.\\d+|\\d+\\.|\\.\\d+|\\d+)(?:[eE][-]?\\d+)?","");
rg.util.Periodicity.validPeriods = ["minute","hour","day","week","month","year","eternity"];
rg.util.Periodicity.validGroupValues = ["hour","day","week","month","year"];
thx.error.Error.errorPositionPattern = "{0}.{1}({2}): ";
DateTools.DAYS_OF_MONTH = [31,28,31,30,31,30,31,31,30,31,30,31];
Objects._reCheckKeyIsColor = new EReg("color\\b|\\bbackground\\b|\\bstroke\\b|\\bfill\\b","");
Floats._reparse = new EReg("^(\\+|-)?\\d+(\\.\\d+)?(e-?\\d+)?$","");
js.Lib.onerror = null;
rg.app.query.JSBridge.main()