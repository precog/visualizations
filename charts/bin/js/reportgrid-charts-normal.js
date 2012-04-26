(function () { "use strict";
var $_, $hxClasses = {}, $estr = function() { return js.Boot.__string_rec(this,''); }
function $extend(from, fields) {
	function inherit() {}; inherit.prototype = from; var proto = new inherit();
	for (var name in fields) proto[name] = fields[name];
	return proto;
}
var Arrays = function() { }
$hxClasses["Arrays"] = Arrays;
Arrays.__name__ = ["Arrays"];
Arrays.addIf = function(arr,condition,value) {
	if(null != condition) {
		if(condition) arr.push(value);
	} else if(null != value) arr.push(value);
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
Arrays.indexOf = function(arr,el) {
	return arr.indexOf(el);
}
Arrays.each = function(arr,f) {
	arr.forEach(f);
}
Arrays.all = function(arr,f) {
	return Iterators.all(arr.iterator(),f);
}
Arrays.string = function(arr) {
	return "[" + arr.map(function(v,_) {
		return Dynamics.string(v);
	}).join(", ") + "]";
}
Arrays.last = function(arr) {
	return arr[arr.length - 1];
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
Arrays.prototype = {
	__class__: Arrays
}
var Bools = function() { }
$hxClasses["Bools"] = Bools;
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
Bools.compare = function(a,b) {
	return a == b?0:a?-1:1;
}
Bools.prototype = {
	__class__: Bools
}
var Bytes = function(length,b) {
	this.length = length;
	this.b = b;
};
$hxClasses["Bytes"] = Bytes;
Bytes.__name__ = ["Bytes"];
Bytes.alloc = function(length) {
	var a = new Array();
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		a.push(0);
	}
	return new Bytes(length,a);
}
Bytes.ofString = function(s) {
	var a = new Array();
	var _g1 = 0, _g = s.length;
	while(_g1 < _g) {
		var i = _g1++;
		var c = s.cca(i);
		if(c <= 127) a.push(c); else if(c <= 2047) {
			a.push(192 | c >> 6);
			a.push(128 | c & 63);
		} else if(c <= 65535) {
			a.push(224 | c >> 12);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		} else {
			a.push(240 | c >> 18);
			a.push(128 | c >> 12 & 63);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		}
	}
	return new Bytes(a.length,a);
}
Bytes.prototype = {
	length: null
	,b: null
	,get: function(pos) {
		return this.b[pos];
	}
	,set: function(pos,v) {
		this.b[pos] = v & 255;
	}
	,blit: function(pos,src,srcpos,len) {
		if(len == null) len = src.length - srcpos;
		if(srcpos + len > src.length) len = src.length - srcpos;
		if(pos < 0 || srcpos < 0 || len < 0 || pos + len > this.length || srcpos + len > src.length) throw new chx.lang.OutsideBoundsException();
		var b1 = this.b;
		var b2 = src.b;
		if(b1 == b2 && pos > srcpos) {
			var i = len;
			while(i > 0) {
				i--;
				b1[i + pos] = b2[i + srcpos];
			}
			return;
		}
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			b1[i + pos] = b2[i + srcpos];
		}
	}
	,sub: function(pos,len) {
		if(len == null) len = this.length - pos;
		if(pos + len > this.length) len = this.length - pos;
		if(pos < 0 || len < 0) throw new chx.lang.OutsideBoundsException();
		return new Bytes(len,this.b.slice(pos,pos + len));
	}
	,readString: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) throw new chx.lang.OutsideBoundsException();
		var s = "";
		var b = this.b;
		var fcc = String.fromCharCode;
		var i = pos;
		var max = pos + len;
		while(i < max) {
			var c = b[i++];
			if(c < 128) {
				if(c == 0) break;
				s += fcc(c);
			} else if(c < 224) s += fcc((c & 63) << 6 | b[i++] & 127); else if(c < 240) {
				var c2 = b[i++];
				s += fcc((c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127);
			} else {
				var c2 = b[i++];
				var c3 = b[i++];
				s += fcc((c & 15) << 18 | (c2 & 127) << 12 | c3 << 6 & 127 | b[i++] & 127);
			}
		}
		return s;
	}
	,toString: function() {
		return this.readString(0,this.length);
	}
	,getData: function() {
		return this.b;
	}
	,__class__: Bytes
}
var BytesBuffer = function() {
	this.b = new Array();
};
$hxClasses["BytesBuffer"] = BytesBuffer;
BytesBuffer.__name__ = ["BytesBuffer"];
BytesBuffer.prototype = {
	b: null
	,addByte: function($byte) {
		this.b.push($byte);
	}
	,add: function(src) {
		var b1 = this.b;
		var b2 = src.b;
		var _g1 = 0, _g = src.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.b.push(b2[i]);
		}
	}
	,addBytes: function(src,pos,len) {
		if(pos < 0 || len < 0 || pos + len > src.length) throw new chx.lang.OutsideBoundsException();
		var b1 = this.b;
		var b2 = src.b;
		var _g1 = pos, _g = pos + len;
		while(_g1 < _g) {
			var i = _g1++;
			this.b.push(b2[i]);
		}
	}
	,getBytes: function() {
		var bytes = new Bytes(this.b.length,this.b);
		this.b = null;
		return bytes;
	}
	,writeByte: function(b) {
		this.b.push(b);
	}
	,__class__: BytesBuffer
}
var BytesUtil = function() { }
$hxClasses["BytesUtil"] = BytesUtil;
BytesUtil.__name__ = ["BytesUtil"];
BytesUtil.EMPTY = null;
BytesUtil.cleanHexFormat = function(hex) {
	var e = StringTools.replace(hex,":","");
	e = e.split("|").join("");
	var ereg = new EReg("([\\s]*)","g");
	e = ereg.replace(e,"");
	if(StringTools.startsWith(e,"0x")) e = e.substr(2);
	if((e.length & 1) == 1) e = "0" + e;
	return e.toLowerCase();
}
BytesUtil.hexDump = function(b,separator) {
	return BytesUtil.toHex(b,separator);
}
BytesUtil.toHex = function(b,separator) {
	if(separator == null) separator = " ";
	var sb = new StringBuf();
	var l = b.length;
	var first = true;
	var _g = 0;
	while(_g < l) {
		var i = _g++;
		if(first) first = false; else sb.b[sb.b.length] = separator == null?"null":separator;
		sb.add(StringTools.hex(b.b[i],2).toLowerCase());
	}
	return StringTools.rtrim(sb.b.join(""));
}
BytesUtil.prototype = {
	__class__: BytesUtil
}
var Constants = function() { }
$hxClasses["Constants"] = Constants;
Constants.__name__ = ["Constants"];
Constants.prototype = {
	__class__: Constants
}
var DateTools = function() { }
$hxClasses["DateTools"] = DateTools;
DateTools.__name__ = ["DateTools"];
DateTools.getMonthDays = function(d) {
	var month = d.getMonth();
	var year = d.getFullYear();
	if(month != 1) return DateTools.DAYS_OF_MONTH[month];
	var isB = year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
	return isB?29:28;
}
DateTools.prototype = {
	__class__: DateTools
}
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
$hxClasses["EReg"] = EReg;
EReg.__name__ = ["EReg"];
EReg.prototype = {
	r: null
	,match: function(s) {
		this.r.m = this.r.exec(s);
		this.r.s = s;
		this.r.l = RegExp.leftContext;
		this.r.r = RegExp.rightContext;
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
		if(this.r.l == null) return this.r.s.substr(0,this.r.m.index);
		return this.r.l;
	}
	,matchedRight: function() {
		if(this.r.m == null) throw "No string matched";
		if(this.r.r == null) {
			var sz = this.r.m.index + this.r.m[0].length;
			return this.r.s.substr(sz,this.r.s.length - sz);
		}
		return this.r.r;
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
var Dates = function() { }
$hxClasses["Dates"] = Dates;
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
		var d = Date.fromTime(time);
		return new Date(d.getFullYear(),d.getMonth(),d.getDate(),0,0,0).getTime();
	case "week":
		return Math.floor(time / 604800000.) * 604800000.;
	case "month":
		var d = Date.fromTime(time);
		return new Date(d.getFullYear(),d.getMonth(),1,0,0,0).getTime();
	case "year":
		var d = Date.fromTime(time);
		return new Date(d.getFullYear(),0,1,0,0,0).getTime();
	default:
		return 0;
	} else if(mode > 0) switch(period) {
	case "second":
		return Math.ceil(time / 1000.0) * 1000.0;
	case "minute":
		return Math.ceil(time / 60000.0) * 60000.0;
	case "hour":
		return Math.ceil(time / 3600000.0) * 3600000.0;
	case "day":
		var d = Date.fromTime(time);
		return new Date(d.getFullYear(),d.getMonth(),d.getDate() + 1,0,0,0).getTime();
	case "week":
		return Math.ceil(time / 604800000.) * 604800000.;
	case "month":
		var d = Date.fromTime(time);
		return new Date(d.getFullYear(),d.getMonth() + 1,1,0,0,0).getTime();
	case "year":
		var d = Date.fromTime(time);
		return new Date(d.getFullYear() + 1,0,1,0,0,0).getTime();
	default:
		return 0;
	} else switch(period) {
	case "second":
		return Math.round(time / 1000.0) * 1000.0;
	case "minute":
		return Math.round(time / 60000.0) * 60000.0;
	case "hour":
		return Math.round(time / 3600000.0) * 3600000.0;
	case "day":
		var d = Date.fromTime(time), mod = d.getHours() >= 12?1:0;
		return new Date(d.getFullYear(),d.getMonth(),d.getDate() + mod,0,0,0).getTime();
	case "week":
		return Math.round(time / 604800000.) * 604800000.;
	case "month":
		var d = Date.fromTime(time), mod = d.getDate() > Math.round(DateTools.getMonthDays(d) / 2)?1:0;
		return new Date(d.getFullYear(),d.getMonth() + mod,1,0,0,0).getTime();
	case "year":
		var d = Date.fromTime(time), mod = time > new Date(d.getFullYear(),6,2,0,0,0).getTime()?1:0;
		return new Date(d.getFullYear() + mod,0,1,0,0,0).getTime();
	default:
		return 0;
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
		throw new thx.error.Error("unknown week day '{0}'",null,day,{ fileName : "Dates.hx", lineNumber : 186, className : "Dates", methodName : "snapToWeekDay"});
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
var Dynamics = function() { }
$hxClasses["Dynamics"] = Dynamics;
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
		var ea = Type.getEnumName(e), teb = Type.getEnum(b), eb = Type.getEnumName(teb);
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
		throw new thx.error.Error("Unable to compare values: {0} and {1}",[a,b],null,{ fileName : "Dynamics.hx", lineNumber : 370, className : "Dynamics", methodName : "same"});
		return $r;
	}(this));
}
Dynamics.number = function(v) {
	return Number(v);
}
Dynamics.prototype = {
	__class__: Dynamics
}
var Enums = function() { }
$hxClasses["Enums"] = Enums;
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
var Floats = function() { }
$hxClasses["Floats"] = Floats;
Floats.__name__ = ["Floats"];
Floats.normalize = function(v) {
	if(v < 0.0) return 0.0; else if(v > 1.0) return 1.0; else return v;
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
Floats.min = function(a,b) {
	return a < b?a:b;
}
Floats.max = function(a,b) {
	return a > b?a:b;
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
Floats.parse = function(s) {
	if(s.substr(0,1) == "+") s = s.substr(1);
	return Std.parseFloat(s);
}
Floats.compare = function(a,b) {
	return a < b?-1:a > b?1:0;
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
Floats.prototype = {
	__class__: Floats
}
var Hash = function() {
	this.h = { };
};
$hxClasses["Hash"] = Hash;
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
		return this.h.hasOwnProperty("$" + key);
	}
	,remove: function(key) {
		key = "$" + key;
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key.substr(1));
		}
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
	,__class__: Hash
}
var I32 = function() { }
$hxClasses["I32"] = I32;
I32.__name__ = ["I32"];
I32.abs = function(v) {
	return Math.abs(v) | 0;
}
I32.add = function(a,b) {
	return a + b;
}
I32.baseEncode = function(v,radix) {
	if(radix < 2 || radix > 36) throw "radix out of range";
	var sb = "";
	var av = Math.abs(v) | 0;
	var radix32 = radix;
	while(true) {
		var r32 = av % radix32;
		sb = "0123456789abcdefghijklmnopqrstuvwxyz".charAt(r32 & -1) + sb;
		av = (av - r32) / radix32 | 0;
		if(av == 0) break;
	}
	if(v < 0) return "-" + sb;
	return sb;
}
I32.div = function(a,b) {
	return a / b | 0;
}
I32.eq = function(a,b) {
	return a == b;
}
I32.lt = function(a,b) {
	return a < b;
}
I32.mod = function(a,b) {
	return a % b;
}
I32.ofInt = function(v) {
	return v;
}
I32.sub = function(a,b) {
	return a - b;
}
I32.toInt = function(v) {
	return v & -1;
}
I32.prototype = {
	__class__: I32
}
var IntHash = function() {
	this.h = { };
};
$hxClasses["IntHash"] = IntHash;
IntHash.__name__ = ["IntHash"];
IntHash.prototype = {
	h: null
	,set: function(key,value) {
		this.h[key] = value;
	}
	,get: function(key) {
		return this.h[key];
	}
	,remove: function(key) {
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key | 0);
		}
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
	,__class__: IntHash
}
var IntHashes = function() { }
$hxClasses["IntHashes"] = IntHashes;
IntHashes.__name__ = ["IntHashes"];
IntHashes.count = function(hash) {
	var i = 0;
	var $it0 = hash.iterator();
	while( $it0.hasNext() ) {
		var _ = $it0.next();
		i++;
	}
	return i;
}
IntHashes.prototype = {
	__class__: IntHashes
}
var Ints = function() { }
$hxClasses["Ints"] = Ints;
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
Ints.abs = function(a) {
	return a < 0?-a:a;
}
Ints.min = function(a,b) {
	return a < b?a:b;
}
Ints.max = function(a,b) {
	return a > b?a:b;
}
Ints.clamp = function(v,min,max) {
	if(v < min) return min; else if(v > max) return max; else return v;
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
var Iterables = function() { }
$hxClasses["Iterables"] = Iterables;
Iterables.__name__ = ["Iterables"];
Iterables.count = function(it) {
	return Iterators.count(it.iterator());
}
Iterables.array = function(it) {
	return Iterators.array(it.iterator());
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
var Iterators = function() { }
$hxClasses["Iterators"] = Iterators;
Iterators.__name__ = ["Iterators"];
Iterators.count = function(it) {
	var i = 0;
	while( it.hasNext() ) {
		var _ = it.next();
		i++;
	}
	return i;
}
Iterators.array = function(it) {
	var result = [];
	while( it.hasNext() ) {
		var v = it.next();
		result.push(v);
	}
	return result;
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
Iterators.all = function(it,f) {
	while( it.hasNext() ) {
		var v = it.next();
		if(!f(v)) return false;
	}
	return true;
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
var Lambda = function() { }
$hxClasses["Lambda"] = Lambda;
Lambda.__name__ = ["Lambda"];
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
Lambda.prototype = {
	__class__: Lambda
}
var List = function() { }
$hxClasses["List"] = List;
List.__name__ = ["List"];
List.prototype = {
	h: null
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
	,__class__: List
}
var Objects = function() { }
$hxClasses["Objects"] = Objects;
Objects.__name__ = ["Objects"];
Objects.keys = function(o) {
	return Reflect.fields(o);
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
			throw new thx.error.Error("Unsupported number format: {0}",null,format,{ fileName : "Objects.hx", lineNumber : 242, className : "Objects", methodName : "formatf"});
			return $r;
		}(this));
	}
}
Objects.prototype = {
	__class__: Objects
}
var Reflect = function() { }
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	return Object.prototype.hasOwnProperty.call(o,field);
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
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
}
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
}
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && f.__name__ == null;
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
Reflect.prototype = {
	__class__: Reflect
}
var Std = function() { }
$hxClasses["Std"] = Std;
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	return js.Boot.__instanceof(v,t);
}
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
Std["int"] = function(x) {
	return x | 0;
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
Std.prototype = {
	__class__: Std
}
var StringBuf = function() {
	this.b = new Array();
};
$hxClasses["StringBuf"] = StringBuf;
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	add: function(x) {
		this.b[this.b.length] = x == null?"null":x;
	}
	,toString: function() {
		return this.b.join("");
	}
	,b: null
	,__class__: StringBuf
}
var StringTools = function() { }
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
}
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
}
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && s.substr(0,start.length) == start;
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
StringTools.stripWhite = function(s) {
	var l = s.length;
	var i = 0;
	var sb = new StringBuf();
	while(i < l) {
		if(!StringTools.isSpace(s,i)) sb.add(s.charAt(i));
		i++;
	}
	return sb.b.join("");
}
StringTools.prototype = {
	__class__: StringTools
}
var Strings = function() { }
$hxClasses["Strings"] = Strings;
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
Strings.ucwords = function(value) {
	return Strings.__ucwordsPattern.customReplace(value == null?null:value.charAt(0).toUpperCase() + value.substr(1),Strings.__upperMatch);
}
Strings.__upperMatch = function(re) {
	return re.matched(0).toUpperCase();
}
Strings.humanize = function(s) {
	return StringTools.replace(Strings.underscore(s),"_"," ");
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
	var decimals = function(v) {
		var s = "" + v, p = s.indexOf(".");
		if(p < 0) return 0;
		return s.length - p - 1;
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
				var dec = [Math.pow(10,Ints.max(decimals(fa[i]),decimals(fb[i])))];
				functions.push((function(dec,f) {
					return function(t) {
						return "" + Math.round(f[0](t) * dec[0]) / dec[0];
					};
				})(dec,f));
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
var Type = function() { }
$hxClasses["Type"] = Type;
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
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
}
Type.getEnumName = function(e) {
	var a = e.__ename__;
	return a.join(".");
}
Type.createInstance = function(cl,args) {
	switch(args.length) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	default:
		throw "Too many arguments";
	}
	return null;
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
Type.getInstanceFields = function(c) {
	var a = [];
	for(var i in c.prototype) a.push(i);
	a.remove("__class__");
	a.remove("__properties__");
	return a;
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
Type.prototype = {
	__class__: Type
}
var Types = function() { }
$hxClasses["Types"] = Types;
Types.__name__ = ["Types"];
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
Types.isAnonymous = function(v) {
	return Reflect.isObject(v) && null == Type.getClass(v);
}
Types["as"] = function(value,type) {
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
var chx = {}
chx.crypt = {}
chx.crypt.IBlockCipher = function() { }
$hxClasses["chx.crypt.IBlockCipher"] = chx.crypt.IBlockCipher;
chx.crypt.IBlockCipher.__name__ = ["chx","crypt","IBlockCipher"];
chx.crypt.IBlockCipher.prototype = {
	blockSize: null
	,encryptBlock: null
	,decryptBlock: null
	,__class__: chx.crypt.IBlockCipher
	,__properties__: {get_blockSize:"__getBlockSize"}
}
chx.crypt.IPad = function() { }
$hxClasses["chx.crypt.IPad"] = chx.crypt.IPad;
chx.crypt.IPad.__name__ = ["chx","crypt","IPad"];
chx.crypt.IPad.prototype = {
	blockSize: null
	,pad: null
	,unpad: null
	,isBlockPad: null
	,calcNumBlocks: null
	,blockOverhead: null
	,getBytesReadPerBlock: null
	,__class__: chx.crypt.IPad
	,__properties__: {set_blockSize:"setBlockSize"}
}
chx.crypt.PadPkcs1Type1 = function(size) {
	this["blockSize"] = size;
	this.setPadCount(8);
	this.typeByte = 1;
	this.setPadByte(255);
};
$hxClasses["chx.crypt.PadPkcs1Type1"] = chx.crypt.PadPkcs1Type1;
chx.crypt.PadPkcs1Type1.__name__ = ["chx","crypt","PadPkcs1Type1"];
chx.crypt.PadPkcs1Type1.__interfaces__ = [chx.crypt.IPad];
chx.crypt.PadPkcs1Type1.prototype = {
	blockSize: null
	,textSize: null
	,padByte: null
	,padCount: null
	,typeByte: null
	,getBytesReadPerBlock: function() {
		return this.textSize;
	}
	,pad: function(s) {
		if(s.length > this.textSize) throw "Unable to pad block: provided buffer is " + s.length + " max is " + this.textSize;
		var sb = new BytesBuffer();
		sb.b.push(0);
		sb.b.push(this.typeByte);
		var n = this.blockSize - s.length - 3;
		while(n-- > 0) sb.b.push(this.getPadByte());
		sb.b.push(0);
		sb.add(s);
		var rv = sb.getBytes();
		return rv;
	}
	,unpad: function(s) {
		var i = 0;
		var sb = new BytesBuffer();
		while(i < s.length) {
			while(i < s.length && s.b[i] == 0) ++i;
			if(s.length - i - 3 - this.padCount < 0) throw "Unexpected short message";
			if(s.b[i] != this.typeByte) throw "Expected marker " + this.typeByte + " at position " + i + " [" + BytesUtil.hexDump(s) + "]";
			if(++i >= s.length) return sb.getBytes();
			while(i < s.length && s.b[i] != 0) ++i;
			i++;
			var n = 0;
			while(i < s.length && n++ < this.textSize) sb.b.push(s.b[i++]);
		}
		return sb.getBytes();
	}
	,calcNumBlocks: function(len) {
		return Math.ceil(len / this.textSize);
	}
	,isBlockPad: function() {
		return true;
	}
	,blockOverhead: function() {
		return 3 + this.padCount;
	}
	,setPadCount: function(x) {
		if(x + 3 >= this.blockSize) throw "Internal padding size exceeds crypt block size";
		this.padCount = x;
		this.textSize = this.blockSize - 3 - this.padCount;
		return x;
	}
	,setBlockSize: function(x) {
		this.blockSize = x;
		this.textSize = x - 3 - this.padCount;
		if(this.textSize <= 0) throw "Block size " + x + " to small for Pkcs1 with padCount " + this.padCount;
		return x;
	}
	,getPadByte: function() {
		return this.padByte;
	}
	,setPadByte: function(x) {
		this.padByte = x & 255;
		return x;
	}
	,__class__: chx.crypt.PadPkcs1Type1
	,__properties__: {set_padByte:"setPadByte",get_padByte:"getPadByte",set_blockSize:"setBlockSize"}
}
chx.crypt.RSAEncrypt = function(nHex,eHex) {
	this.init();
	if(nHex != null) this.setPublic(nHex,eHex);
};
$hxClasses["chx.crypt.RSAEncrypt"] = chx.crypt.RSAEncrypt;
chx.crypt.RSAEncrypt.__name__ = ["chx","crypt","RSAEncrypt"];
chx.crypt.RSAEncrypt.__interfaces__ = [chx.crypt.IBlockCipher];
chx.crypt.RSAEncrypt.prototype = {
	n: null
	,e: null
	,blockSize: null
	,init: function() {
		this.n = null;
		this.e = 0;
	}
	,decryptBlock: function(enc) {
		throw "Not a private key";
		return null;
	}
	,encryptBlock: function(block) {
		var bsize = this.__getBlockSize();
		if(block.length != bsize) throw "bad block size";
		var biv = math.BigInteger.ofBytes(block,true);
		var biRes = this.doPublic(biv).toBytesUnsigned();
		var l = biRes.length;
		var i = 0;
		while(l > bsize) {
			if(biRes.b[i] != 0) throw new chx.lang.FatalException("encoded length was " + biRes.length);
			i++;
			l--;
		}
		if(i != 0) biRes = biRes.sub(i,l);
		if(biRes.length < bsize) {
			var bb = new BytesBuffer();
			l = bsize - biRes.length;
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				bb.b.push(0);
			}
			bb.addBytes(biRes,0,biRes.length);
			biRes = bb.getBytes();
		}
		return biRes;
	}
	,setPublic: function(nHex,eHex) {
		this.init();
		if(nHex == null || nHex.length == 0) throw new chx.lang.NullPointerException("nHex not set: " + nHex);
		if(eHex == null || eHex.length == 0) throw new chx.lang.NullPointerException("eHex not set: " + eHex);
		var s = BytesUtil.cleanHexFormat(nHex);
		this.n = math.BigInteger.ofString(s,16);
		if(this.n == null) throw 2;
		var ie = Std.parseInt("0x" + BytesUtil.cleanHexFormat(eHex));
		if(ie == null || ie == 0) throw 3;
		this.e = ie;
	}
	,verify: function(data) {
		return this.doBufferDecrypt(data,this.doPublic.$bind(this),new chx.crypt.PadPkcs1Type1(this.__getBlockSize()));
	}
	,doBufferDecrypt: function(src,f,pf) {
		var bs = this.__getBlockSize();
		var ts = bs - 11;
		var idx = 0;
		var msg = new BytesBuffer();
		while(idx < src.length) {
			if(idx + bs > src.length) bs = src.length - idx;
			var c = math.BigInteger.ofBytes(src.sub(idx,bs),true);
			var m = f(c);
			if(m == null) return null;
			var up = pf.unpad(m.toBytesUnsigned());
			if(up.length > ts) throw "block text length error";
			msg.add(up);
			idx += bs;
		}
		return msg.getBytes();
	}
	,doPublic: function(x) {
		return x.modPowInt(this.e,this.n);
	}
	,__getBlockSize: function() {
		if(this.n == null) return 0;
		return this.n.bitLength() + 7 >> 3;
	}
	,toString: function() {
		var sb = new StringBuf();
		sb.b[sb.b.length] = "Public:\n";
		sb.add("N:\t" + this.n.toHex() + "\n");
		sb.add("E:\t" + math.BigInteger.ofInt(this.e).toHex() + "\n");
		return sb.b.join("");
	}
	,__class__: chx.crypt.RSAEncrypt
	,__properties__: {get_blockSize:"__getBlockSize"}
}
chx.crypt.RSA = function() { }
$hxClasses["chx.crypt.RSA"] = chx.crypt.RSA;
chx.crypt.RSA.__name__ = ["chx","crypt","RSA"];
chx.crypt.RSA.__interfaces__ = [chx.crypt.IBlockCipher];
chx.crypt.RSA.__super__ = chx.crypt.RSAEncrypt;
chx.crypt.RSA.prototype = $extend(chx.crypt.RSAEncrypt.prototype,{
	d: null
	,p: null
	,q: null
	,dmp1: null
	,dmq1: null
	,coeff: null
	,init: function() {
		chx.crypt.RSAEncrypt.prototype.init.call(this);
		this.d = null;
		this.p = null;
		this.q = null;
		this.dmp1 = null;
		this.dmq1 = null;
		this.coeff = null;
	}
	,decryptBlock: function(enc) {
		var c = math.BigInteger.ofBytes(enc,true);
		var m = this.doPrivate(c);
		if(m == null) throw "doPrivate error";
		var ba = m.toBytesUnsigned();
		if(ba.length < this.__getBlockSize()) {
			var b2 = Bytes.alloc(this.__getBlockSize());
			var _g1 = 0, _g = this.__getBlockSize() - ba.length + 1;
			while(_g1 < _g) {
				var i = _g1++;
				b2.b[i] = 0;
			}
			b2.blit(this.__getBlockSize() - ba.length,ba,0,ba.length);
			ba = b2;
		} else while(ba.length > this.__getBlockSize()) {
			var cnt = ba.length - this.__getBlockSize();
			var _g = 0;
			while(_g < cnt) {
				var i = _g++;
				if(ba.b[i] != 0) throw "decryptBlock length error";
			}
			ba = ba.sub(cnt,this.__getBlockSize());
		}
		return ba;
	}
	,doPrivate: function(x) {
		if(this.p == null || this.q == null) return x.modPow(this.d,this.n);
		var xp = x.mod(this.p).modPow(this.dmp1,this.p);
		var xq = x.mod(this.q).modPow(this.dmq1,this.q);
		while(xp.compare(xq) < 0) xp = xp.add(this.p);
		return xp.sub(xq).mul(this.coeff).mod(this.p).mul(this.q).add(xq);
	}
	,toString: function() {
		var sb = new StringBuf();
		sb.add(chx.crypt.RSAEncrypt.prototype.toString.call(this));
		sb.b[sb.b.length] = "Private:\n";
		sb.add("D:\t" + this.d.toHex() + "\n");
		if(this.p != null) sb.add("P:\t" + this.p.toHex() + "\n");
		if(this.q != null) sb.add("Q:\t" + this.q.toHex() + "\n");
		if(this.dmp1 != null) sb.add("DMP1:\t" + this.dmp1.toHex() + "\n");
		if(this.dmq1 != null) sb.add("DMQ1:\t" + this.dmq1.toHex() + "\n");
		if(this.coeff != null) sb.add("COEFF:\t" + this.coeff.toHex() + "\n");
		return sb.b.join("");
	}
	,__class__: chx.crypt.RSA
});
chx.formats = {}
chx.formats.Base64 = function() { }
$hxClasses["chx.formats.Base64"] = chx.formats.Base64;
chx.formats.Base64.__name__ = ["chx","formats","Base64"];
chx.formats.Base64.enc = null;
chx.formats.Base64.decode = function(s) {
	s = StringTools.stripWhite(s);
	s = StringTools.replace(s,"=","");
	if(chx.formats.Base64.enc == null) chx.formats.Base64.enc = new haxe.BaseCode(Bytes.ofString("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"));
	return (function($this) {
		var $r;
		try {
			$r = chx.formats.Base64.enc.decodeBytes(Bytes.ofString(s));
		} catch( e ) {
			$r = null;
		}
		return $r;
	}(this));
}
chx.formats.Base64.prototype = {
	__class__: chx.formats.Base64
}
chx.io = {}
chx.io.Input = function() { }
$hxClasses["chx.io.Input"] = chx.io.Input;
chx.io.Input.__name__ = ["chx","io","Input"];
chx.io.Input.prototype = {
	bigEndian: null
	,readByte: function() {
		return (function($this) {
			var $r;
			throw new chx.lang.FatalException("Not implemented");
			return $r;
		}(this));
	}
	,readBytes: function(s,pos,len) {
		var k = len;
		var b = s.b;
		if(pos < 0 || len < 0 || pos + len > s.length) throw new chx.lang.OutsideBoundsException();
		while(k > 0) {
			b[pos] = this.readByte();
			pos++;
			k--;
		}
		return len;
	}
	,__getBytesAvailable: function() {
		return (function($this) {
			var $r;
			throw new chx.lang.FatalException("Not implemented");
			return $r;
		}(this));
	}
	,__setEndian: function(b) {
		this.bigEndian = b;
		return b;
	}
	,__class__: chx.io.Input
	,__properties__: {set_bigEndian:"__setEndian"}
}
chx.io.BytesInput = function() { }
$hxClasses["chx.io.BytesInput"] = chx.io.BytesInput;
chx.io.BytesInput.__name__ = ["chx","io","BytesInput"];
chx.io.BytesInput.__super__ = chx.io.Input;
chx.io.BytesInput.prototype = $extend(chx.io.Input.prototype,{
	b: null
	,pos: null
	,len: null
	,readByte: function() {
		if(this.len == 0) throw new chx.lang.EofException();
		this.len--;
		return this.b[this.pos++];
	}
	,readBytes: function(buf,pos,len) {
		if(pos < 0 || len < 0 || pos + len > buf.length) throw new chx.lang.OutsideBoundsException();
		if(this.len == 0 && len > 0) throw new chx.lang.EofException();
		if(this.len < len) len = this.len;
		var b1 = this.b;
		var b2 = buf.b;
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			b2[pos + i] = b1[this.pos + i];
		}
		this.pos += len;
		this.len -= len;
		return len;
	}
	,__getBytesAvailable: function() {
		return this.len >= 0?this.len:0;
	}
	,setPosition: function(p) {
		this.len = this.len + (this.getPosition() - p);
		this.pos = p;
		return p;
	}
	,getPosition: function() {
		return this.pos;
	}
	,__class__: chx.io.BytesInput
});
chx.io.Output = function() { }
$hxClasses["chx.io.Output"] = chx.io.Output;
chx.io.Output.__name__ = ["chx","io","Output"];
chx.io.Output.prototype = {
	bigEndian: null
	,writeByte: function(c) {
		return (function($this) {
			var $r;
			throw new chx.lang.FatalException("Not implemented");
			return $r;
		}(this));
	}
	,writeBytes: function(s,pos,len) {
		var k = len;
		var b = s.b;
		if(pos < 0 || len < 0 || pos + len > s.length) throw new chx.lang.OutsideBoundsException();
		while(k > 0) {
			this.writeByte(b[pos]);
			pos++;
			k--;
		}
		return len;
	}
	,setBigEndian: function(b) {
		this.bigEndian = b;
		return b;
	}
	,__class__: chx.io.Output
	,__properties__: {set_bigEndian:"setBigEndian"}
}
chx.io.BytesOutput = function() { }
$hxClasses["chx.io.BytesOutput"] = chx.io.BytesOutput;
chx.io.BytesOutput.__name__ = ["chx","io","BytesOutput"];
chx.io.BytesOutput.__super__ = chx.io.Output;
chx.io.BytesOutput.prototype = $extend(chx.io.Output.prototype,{
	b: null
	,writeByte: function(c) {
		this.b.b.push(c);
		return this;
	}
	,writeBytes: function(buf,pos,len) {
		this.b.addBytes(buf,pos,len);
		return len;
	}
	,__class__: chx.io.BytesOutput
});
chx.lang = {}
chx.lang.Exception = function(msg,cause) {
	this.message = msg;
	this.cause = cause;
};
$hxClasses["chx.lang.Exception"] = chx.lang.Exception;
chx.lang.Exception.__name__ = ["chx","lang","Exception"];
chx.lang.Exception.prototype = {
	message: null
	,cause: null
	,toString: function() {
		return Type.getClassName(Type.getClass(this)) + "(" + (this.message == null?"":this.message + ")");
	}
	,__class__: chx.lang.Exception
}
chx.lang.IOException = function(msg,cause) {
	chx.lang.Exception.call(this,msg,cause);
};
$hxClasses["chx.lang.IOException"] = chx.lang.IOException;
chx.lang.IOException.__name__ = ["chx","lang","IOException"];
chx.lang.IOException.__super__ = chx.lang.Exception;
chx.lang.IOException.prototype = $extend(chx.lang.Exception.prototype,{
	__class__: chx.lang.IOException
});
chx.lang.EofException = function(msg,cause) {
	chx.lang.IOException.call(this,msg,cause);
};
$hxClasses["chx.lang.EofException"] = chx.lang.EofException;
chx.lang.EofException.__name__ = ["chx","lang","EofException"];
chx.lang.EofException.__super__ = chx.lang.IOException;
chx.lang.EofException.prototype = $extend(chx.lang.IOException.prototype,{
	toString: function() {
		return "EOF";
	}
	,__class__: chx.lang.EofException
});
chx.lang.FatalException = function(msg,cause) {
	this.message = msg;
	this.cause = cause;
};
$hxClasses["chx.lang.FatalException"] = chx.lang.FatalException;
chx.lang.FatalException.__name__ = ["chx","lang","FatalException"];
chx.lang.FatalException.prototype = {
	message: null
	,cause: null
	,__class__: chx.lang.FatalException
}
chx.lang.NullPointerException = function(msg,cause) {
	chx.lang.Exception.call(this,msg,cause);
};
$hxClasses["chx.lang.NullPointerException"] = chx.lang.NullPointerException;
chx.lang.NullPointerException.__name__ = ["chx","lang","NullPointerException"];
chx.lang.NullPointerException.__super__ = chx.lang.Exception;
chx.lang.NullPointerException.prototype = $extend(chx.lang.Exception.prototype,{
	__class__: chx.lang.NullPointerException
});
chx.lang.OutsideBoundsException = function(msg,cause) {
	chx.lang.Exception.call(this,msg,cause);
};
$hxClasses["chx.lang.OutsideBoundsException"] = chx.lang.OutsideBoundsException;
chx.lang.OutsideBoundsException.__name__ = ["chx","lang","OutsideBoundsException"];
chx.lang.OutsideBoundsException.__super__ = chx.lang.Exception;
chx.lang.OutsideBoundsException.prototype = $extend(chx.lang.Exception.prototype,{
	__class__: chx.lang.OutsideBoundsException
});
chx.lang.UnsupportedException = function(msg,cause) {
	chx.lang.Exception.call(this,msg,cause);
};
$hxClasses["chx.lang.UnsupportedException"] = chx.lang.UnsupportedException;
chx.lang.UnsupportedException.__name__ = ["chx","lang","UnsupportedException"];
chx.lang.UnsupportedException.__super__ = chx.lang.Exception;
chx.lang.UnsupportedException.prototype = $extend(chx.lang.Exception.prototype,{
	__class__: chx.lang.UnsupportedException
});
var dhx = {}
dhx.Access = function(selection) {
	this.selection = selection;
};
$hxClasses["dhx.Access"] = dhx.Access;
dhx.Access.__name__ = ["dhx","Access"];
dhx.Access.getData = function(d) {
	return Reflect.field(d,"__dhx_data__");
}
dhx.Access.setData = function(d,v) {
	d["__dhx_data__"] = v;
}
dhx.Access.emptyHtmlDom = function(v) {
	return { __dhx_data__ : v};
}
dhx.Access.eventName = function(event) {
	return "__dhx_on__" + event;
}
dhx.Access.getEvent = function(d,event) {
	return Reflect.field(d,"__dhx_on__" + event);
}
dhx.Access.hasEvent = function(d,event) {
	return null != Reflect.field(d,"__dhx_on__" + event);
}
dhx.Access.addEvent = function(d,event,listener) {
	d["__dhx_on__" + event] = listener;
}
dhx.Access.removeEvent = function(d,event) {
	Reflect.deleteField(d,"__dhx_on__" + event);
}
dhx.Access.setTransition = function(d,id) {
	if(Reflect.hasField(d,"__dhx_transition__")) Reflect.field(d,"__dhx_transition__").owner = id; else d["__dhx_transition__"] = { owner : id};
}
dhx.Access.getTransition = function(d) {
	return Reflect.field(d,"__dhx_transition__");
}
dhx.Access.resetTransition = function(d) {
	Reflect.deleteField(d,"__dhx_transition__");
}
dhx.Access.prototype = {
	selection: null
	,_that: function() {
		return this.selection;
	}
	,__class__: dhx.Access
}
dhx.AccessAttribute = function(name,selection) {
	dhx.Access.call(this,selection);
	this.name = name;
	this.qname = dhx.Namespace.qualify(name);
};
$hxClasses["dhx.AccessAttribute"] = dhx.AccessAttribute;
dhx.AccessAttribute.__name__ = ["dhx","AccessAttribute"];
dhx.AccessAttribute.__super__ = dhx.Access;
dhx.AccessAttribute.prototype = $extend(dhx.Access.prototype,{
	name: null
	,qname: null
	,get: function() {
		var n = this.name, q = this.qname;
		return this.selection.firstNode(function(node) {
			return q == null?node.getAttribute(n):node.getAttributeNS(q.space,q.local);
		});
	}
	,getFloat: function() {
		var v = this.get();
		if(dhx.AccessAttribute.refloat.match(v)) return Std.parseFloat(dhx.AccessAttribute.refloat.matched(1)); else return Math.NaN;
	}
	,string: function(v) {
		if(null == this.qname) {
			var n = this.name;
			this.selection.eachNode(function(node,i) {
				node.setAttribute(n,v);
			});
		} else {
			var q = this.qname;
			this.selection.eachNode(function(node,i) {
				node.setAttributeNS(q.space,q.local,v);
			});
		}
		return this.selection;
	}
	,'float': function(v) {
		var s = "" + v;
		if(null == this.qname) {
			var n = this.name;
			this.selection.eachNode(function(node,i) {
				node.setAttribute(n,s);
			});
		} else {
			var q = this.qname;
			this.selection.eachNode(function(node,i) {
				node.setAttributeNS(q.space,q.local,s);
			});
		}
		return this.selection;
	}
	,__class__: dhx.AccessAttribute
});
dhx.AccessDataAttribute = function(name,selection) {
	dhx.AccessAttribute.call(this,name,selection);
};
$hxClasses["dhx.AccessDataAttribute"] = dhx.AccessDataAttribute;
dhx.AccessDataAttribute.__name__ = ["dhx","AccessDataAttribute"];
dhx.AccessDataAttribute.__super__ = dhx.AccessAttribute;
dhx.AccessDataAttribute.prototype = $extend(dhx.AccessAttribute.prototype,{
	stringf: function(v) {
		if(null == this.qname) {
			var n = this.name;
			this.selection.eachNode(function(node,i) {
				var s = v(Reflect.field(node,"__dhx_data__"),i);
				if(null == s) node.removeAttribute(n); else node.setAttribute(n,s);
			});
		} else {
			var q = this.qname;
			this.selection.eachNode(function(node,i) {
				var s = v(Reflect.field(node,"__dhx_data__"),i);
				if(null == s) node.removeAttributeNS(n); else node.setAttributeNS(q.space,q.local,s);
			});
		}
		return this.selection;
	}
	,floatf: function(v) {
		if(null == this.qname) {
			var n = this.name;
			this.selection.eachNode(function(node,i) {
				var s = v(Reflect.field(node,"__dhx_data__"),i);
				if(null == s) node.removeAttribute(n); else node.setAttribute(n,"" + s);
			});
		} else {
			var q = this.qname;
			this.selection.eachNode(function(node,i) {
				var s = v(Reflect.field(node,"__dhx_data__"),i);
				if(null == s) node.removeAttributeNS(n); else node.setAttributeNS(q.space,q.local,"" + s);
			});
		}
		return this.selection;
	}
	,__class__: dhx.AccessDataAttribute
});
dhx.AccessClassed = function(selection) {
	dhx.Access.call(this,selection);
};
$hxClasses["dhx.AccessClassed"] = dhx.AccessClassed;
dhx.AccessClassed.__name__ = ["dhx","AccessClassed"];
dhx.AccessClassed.escapeERegChars = function(s) {
	return dhx.AccessClassed._escapePattern.customReplace(s,function(e) {
		return "\\" + e.matched(0);
	});
}
dhx.AccessClassed.getRe = function(name) {
	return new EReg("(^|\\s+)" + dhx.AccessClassed.escapeERegChars(name) + "(\\s+|$)","g");
}
dhx.AccessClassed.__super__ = dhx.Access;
dhx.AccessClassed.prototype = $extend(dhx.Access.prototype,{
	remove: function(name) {
		this.selection.eachNode((function(f,a1) {
			return function(a2,a3) {
				return f(a1,a2,a3);
			};
		})(this._remove.$bind(this),name));
		return this.selection;
	}
	,_remove: function(name,node,i) {
		var list = node.classList;
		if(null != list) {
			list.remove(name);
			return;
		}
		var cls = node.className, clsb = null != cls.baseVal, clsv = clsb?cls.baseVal:cls;
		var re = new EReg("(^|\\s+)" + dhx.AccessClassed.escapeERegChars(name) + "(\\s+|$)","g");
		clsv = Strings.collapse(re.replace(clsv," "));
		if(clsb) cls.baseVal = clsv; else node.className = clsv;
	}
	,add: function(name) {
		this.selection.eachNode((function(f,a1) {
			return function(a2,a3) {
				return f(a1,a2,a3);
			};
		})(this._add.$bind(this),name));
		return this.selection;
	}
	,_add: function(name,node,i) {
		var list = node.classList;
		if(null != list) {
			list.add(name);
			return;
		}
		var cls = node.className, clsb = null != cls.baseVal, clsv = clsb?cls.baseVal:cls;
		var re = new EReg("(^|\\s+)" + dhx.AccessClassed.escapeERegChars(name) + "(\\s+|$)","g");
		if(!re.match(clsv)) {
			clsv = Strings.collapse(clsv + " " + name);
			if(clsb) cls.baseVal = clsv; else node.className = clsv;
		}
	}
	,__class__: dhx.AccessClassed
});
dhx.AccessDataClassed = function(selection) {
	dhx.AccessClassed.call(this,selection);
};
$hxClasses["dhx.AccessDataClassed"] = dhx.AccessDataClassed;
dhx.AccessDataClassed.__name__ = ["dhx","AccessDataClassed"];
dhx.AccessDataClassed.__super__ = dhx.AccessClassed;
dhx.AccessDataClassed.prototype = $extend(dhx.AccessClassed.prototype,{
	__class__: dhx.AccessDataClassed
});
dhx.AccessHtml = function(selection) {
	dhx.Access.call(this,selection);
};
$hxClasses["dhx.AccessHtml"] = dhx.AccessHtml;
dhx.AccessHtml.__name__ = ["dhx","AccessHtml"];
dhx.AccessHtml.__super__ = dhx.Access;
dhx.AccessHtml.prototype = $extend(dhx.Access.prototype,{
	get: function() {
		return this.selection.firstNode(function(node) {
			return node.innerHTML;
		});
	}
	,string: function(v) {
		this.selection.eachNode(function(node,i) {
			node.innerHTML = v;
		});
		return this.selection;
	}
	,__class__: dhx.AccessHtml
});
dhx.AccessDataHtml = function(selection) {
	dhx.AccessHtml.call(this,selection);
};
$hxClasses["dhx.AccessDataHtml"] = dhx.AccessDataHtml;
dhx.AccessDataHtml.__name__ = ["dhx","AccessDataHtml"];
dhx.AccessDataHtml.__super__ = dhx.AccessHtml;
dhx.AccessDataHtml.prototype = $extend(dhx.AccessHtml.prototype,{
	stringf: function(v) {
		this.selection.eachNode(function(node,i) {
			var s = v(Reflect.field(node,"__dhx_data__"),i);
			if(null == s) s = "";
			node.innerHTML = s;
		});
		return this.selection;
	}
	,__class__: dhx.AccessDataHtml
});
dhx.AccessStyle = function(name,selection) {
	dhx.Access.call(this,selection);
	this.name = name;
};
$hxClasses["dhx.AccessStyle"] = dhx.AccessStyle;
dhx.AccessStyle.__name__ = ["dhx","AccessStyle"];
dhx.AccessStyle._getPropertyName = function(key) {
	if(key == "float" || key == "cssFloat" || key == "styleFloat") return js.Lib.document.body.cssFloat == null?"styleFloat":"cssFloat";
	if(key.indexOf("-") >= 0) key = Strings.ucwords(key);
	return key;
}
dhx.AccessStyle.getComputedStyleValue = function(node,key) {
	if('getComputedStyle' in window) dhx.AccessStyle.getComputedStyleValue = function(node1,key1) {
		return js.Lib.window.getComputedStyle(node1,null).getPropertyValue(key1);
	}; else dhx.AccessStyle.getComputedStyleValue = function(node1,key1) {
		var style = node1.currentStyle;
		if(null == Reflect.field(style,key1)) key1 = dhx.AccessStyle._getPropertyName(key1);
		if(null == Reflect.field(style,key1)) return ""; else return Reflect.field(style,key1);
	};
	return dhx.AccessStyle.getComputedStyleValue(node,key);
}
dhx.AccessStyle.setStyleProperty = function(node,key,value,priority) {
	if('setProperty' in node.style) dhx.AccessStyle.setStyleProperty = function(node1,key1,value1,priority1) {
		node1.style.setProperty(key1,"" + value1,priority1 == null?"":priority1);
	}; else dhx.AccessStyle.setStyleProperty = function(node1,key1,value1,priority1) {
		var style = node1.style;
		if(null == Reflect.field(style,key1)) key1 = dhx.AccessStyle._getPropertyName(key1);
		if(null != priority1 && "" != priority1) style.cssText += ";" + Strings.dasherize(key1) + ":" + value1 + "!important;"; else style[key1] = value1;
	};
	dhx.AccessStyle.setStyleProperty(node,key,value,priority);
}
dhx.AccessStyle.removeStyleProperty = function(node,key) {
	if('removeProperty' in node.style) dhx.AccessStyle.removeStyleProperty = function(node1,key1) {
		node1.style.removeProperty(key1,value);
	}; else dhx.AccessStyle.removeStyleProperty = function(node1,key1) {
		var style = node1.style;
		if(null == Reflect.field(style,key1)) key1 = dhx.AccessStyle._getPropertyName(key1);
		Reflect.deleteField(style,key1);
	};
}
dhx.AccessStyle.__super__ = dhx.Access;
dhx.AccessStyle.prototype = $extend(dhx.Access.prototype,{
	name: null
	,get: function() {
		var me = this;
		return this.selection.firstNode(function(node) {
			return dhx.AccessStyle.getComputedStyleValue(node,me.name);
		});
	}
	,getFloat: function() {
		var v = this.get();
		if(dhx.AccessStyle.refloat.match(v)) return Std.parseFloat(dhx.AccessStyle.refloat.matched(1)); else return Math.NaN;
	}
	,string: function(v,priority) {
		var me = this;
		this.selection.eachNode(function(node,i) {
			dhx.AccessStyle.setStyleProperty(node,me.name,v,priority);
		});
		return this.selection;
	}
	,'float': function(v,priority) {
		var me = this;
		this.selection.eachNode(function(node,i) {
			dhx.AccessStyle.setStyleProperty(node,me.name,v,priority);
		});
		return this.selection;
	}
	,color: function(v,priority) {
		var me = this;
		var s = v.toRgbString();
		this.selection.eachNode(function(node,i) {
			dhx.AccessStyle.setStyleProperty(node,me.name,s,priority);
		});
		return this.selection;
	}
	,__class__: dhx.AccessStyle
});
dhx.AccessDataStyle = function(name,selection) {
	dhx.AccessStyle.call(this,name,selection);
};
$hxClasses["dhx.AccessDataStyle"] = dhx.AccessDataStyle;
dhx.AccessDataStyle.__name__ = ["dhx","AccessDataStyle"];
dhx.AccessDataStyle.__super__ = dhx.AccessStyle;
dhx.AccessDataStyle.prototype = $extend(dhx.AccessStyle.prototype,{
	stringf: function(v,priority) {
		var me = this;
		this.selection.eachNode(function(node,i) {
			var s = v(Reflect.field(node,"__dhx_data__"),i);
			if(s == null) dhx.AccessStyle.removeStyleProperty(node,me.name); else dhx.AccessStyle.setStyleProperty(node,me.name,s,priority);
		});
		return this.selection;
	}
	,__class__: dhx.AccessDataStyle
});
dhx.AccessText = function(selection) {
	dhx.Access.call(this,selection);
};
$hxClasses["dhx.AccessText"] = dhx.AccessText;
dhx.AccessText.__name__ = ["dhx","AccessText"];
dhx.AccessText.__super__ = dhx.Access;
dhx.AccessText.prototype = $extend(dhx.Access.prototype,{
	string: function(v) {
		this.clear();
		this.selection.eachNode(function(node,_) {
			node.textContent = v;
		});
		return this.selection;
	}
	,clear: function() {
		this.selection.eachNode(function(node,i) {
			node.textContent = "";
		});
		return this.selection;
	}
	,__class__: dhx.AccessText
});
dhx.AccessDataText = function(selection) {
	dhx.AccessText.call(this,selection);
};
$hxClasses["dhx.AccessDataText"] = dhx.AccessDataText;
dhx.AccessDataText.__name__ = ["dhx","AccessDataText"];
dhx.AccessDataText.__super__ = dhx.AccessText;
dhx.AccessDataText.prototype = $extend(dhx.AccessText.prototype,{
	stringf: function(v) {
		this.clear();
		this.selection.eachNode(function(node,i) {
			var x = v(Reflect.field(node,"__dhx_data__"),i);
			if(null != x) node.textContent = x;
		});
		return this.selection;
	}
	,__class__: dhx.AccessDataText
});
dhx.AccessTween = function(transition,tweens) {
	this.transition = transition;
	this.tweens = tweens;
};
$hxClasses["dhx.AccessTween"] = dhx.AccessTween;
dhx.AccessTween.__name__ = ["dhx","AccessTween"];
dhx.AccessTween.prototype = {
	transition: null
	,tweens: null
	,transitionStringTween: function(value) {
		return function(d,i,a) {
			return Strings.interpolatef(a,value);
		};
	}
	,transitionStringTweenf: function(f) {
		return function(d,i,a) {
			return Strings.interpolatef(a,f(d,i));
		};
	}
	,transitionFloatTween: function(value) {
		return function(d,i,a) {
			return Floats.interpolatef(a,value);
		};
	}
	,_that: function() {
		return this.transition;
	}
	,__class__: dhx.AccessTween
}
dhx.AccessTweenAttribute = function(name,transition,tweens) {
	dhx.AccessTween.call(this,transition,tweens);
	this.name = name;
	this.qname = dhx.Namespace.qualify(name);
};
$hxClasses["dhx.AccessTweenAttribute"] = dhx.AccessTweenAttribute;
dhx.AccessTweenAttribute.__name__ = ["dhx","AccessTweenAttribute"];
dhx.AccessTweenAttribute.__super__ = dhx.AccessTween;
dhx.AccessTweenAttribute.prototype = $extend(dhx.AccessTween.prototype,{
	name: null
	,qname: null
	,string: function(value) {
		return this.stringTweenNodef(this.transitionStringTween(value));
	}
	,stringTweenNodef: function(tween) {
		var name = this.name;
		var attrTween = function(d,i) {
			var f = tween(d,i,d.getAttribute(name));
			return function(t) {
				d.setAttribute(name,f(t));
			};
		};
		var attrTweenNS = function(d,i) {
			var f = tween(d,i,d.getAttributeNS(name.space,name.local));
			return function(t) {
				d.setAttributeNS(name.space,name.local,f(t));
			};
		};
		this.tweens.set("attr." + name,null == this.qname?attrTween:attrTweenNS);
		return this.transition;
	}
	,'float': function(value) {
		return this.floatTweenNodef(this.transitionFloatTween(value));
	}
	,floatTweenNodef: function(tween) {
		var name = this.name;
		var attrTween = function(d,i) {
			var f = tween(d,i,Std.parseFloat(d.getAttribute(name)));
			return function(t) {
				d.setAttribute(name,"" + f(t));
			};
		};
		var attrTweenNS = function(d,i) {
			var f = tween(d,i,Std.parseFloat(d.getAttributeNS(name.space,name.local)));
			return function(t) {
				d.setAttributeNS(name.space,name.local,"" + f(t));
			};
		};
		this.tweens.set("attr." + name,null == this.qname?attrTween:attrTweenNS);
		return this.transition;
	}
	,__class__: dhx.AccessTweenAttribute
});
dhx.AccessDataTweenAttribute = function(name,transition,tweens) {
	dhx.AccessTweenAttribute.call(this,name,transition,tweens);
};
$hxClasses["dhx.AccessDataTweenAttribute"] = dhx.AccessDataTweenAttribute;
dhx.AccessDataTweenAttribute.__name__ = ["dhx","AccessDataTweenAttribute"];
dhx.AccessDataTweenAttribute.__super__ = dhx.AccessTweenAttribute;
dhx.AccessDataTweenAttribute.prototype = $extend(dhx.AccessTweenAttribute.prototype,{
	stringf: function(f) {
		return this.stringTweenNodef(this.transitionStringTweenf(function(n,i) {
			return f(Reflect.field(n,"__dhx_data__"),i);
		}));
	}
	,__class__: dhx.AccessDataTweenAttribute
});
dhx.AccessTweenStyle = function(name,transition,tweens) {
	dhx.AccessTween.call(this,transition,tweens);
	this.name = name;
};
$hxClasses["dhx.AccessTweenStyle"] = dhx.AccessTweenStyle;
dhx.AccessTweenStyle.__name__ = ["dhx","AccessTweenStyle"];
dhx.AccessTweenStyle.__super__ = dhx.AccessTween;
dhx.AccessTweenStyle.prototype = $extend(dhx.AccessTween.prototype,{
	name: null
	,'float': function(value,priority) {
		return this.floatTweenNodef(this.transitionFloatTween(value),priority);
	}
	,floatTweenNodef: function(tween,priority) {
		var name = this.name;
		var styleTween = function(d,i) {
			var f = tween(d,i,Std.parseFloat(dhx.AccessStyle.getComputedStyleValue(d,name)));
			return function(t) {
				dhx.AccessStyle.setStyleProperty(d,name,"" + f(t),priority);
			};
		};
		this.tweens.set("style." + name,styleTween);
		return this.transition;
	}
	,__class__: dhx.AccessTweenStyle
});
dhx.HostType = $hxClasses["dhx.HostType"] = { __ename__ : ["dhx","HostType"], __constructs__ : ["UnknownServer","NodeJs","IE","Firefox","Safari","Chrome","Opera","Unknown"] }
dhx.HostType.UnknownServer = ["UnknownServer",0];
dhx.HostType.UnknownServer.toString = $estr;
dhx.HostType.UnknownServer.__enum__ = dhx.HostType;
dhx.HostType.NodeJs = ["NodeJs",1];
dhx.HostType.NodeJs.toString = $estr;
dhx.HostType.NodeJs.__enum__ = dhx.HostType;
dhx.HostType.IE = function(version) { var $x = ["IE",2,version]; $x.__enum__ = dhx.HostType; $x.toString = $estr; return $x; }
dhx.HostType.Firefox = function(version) { var $x = ["Firefox",3,version]; $x.__enum__ = dhx.HostType; $x.toString = $estr; return $x; }
dhx.HostType.Safari = function(version) { var $x = ["Safari",4,version]; $x.__enum__ = dhx.HostType; $x.toString = $estr; return $x; }
dhx.HostType.Chrome = function(version) { var $x = ["Chrome",5,version]; $x.__enum__ = dhx.HostType; $x.toString = $estr; return $x; }
dhx.HostType.Opera = function(version) { var $x = ["Opera",6,version]; $x.__enum__ = dhx.HostType; $x.toString = $estr; return $x; }
dhx.HostType.Unknown = function(what) { var $x = ["Unknown",7,what]; $x.__enum__ = dhx.HostType; $x.toString = $estr; return $x; }
dhx.EnvironmentType = $hxClasses["dhx.EnvironmentType"] = { __ename__ : ["dhx","EnvironmentType"], __constructs__ : ["Mobile","Desktop","Server","UnknownEnvironment"] }
dhx.EnvironmentType.Mobile = ["Mobile",0];
dhx.EnvironmentType.Mobile.toString = $estr;
dhx.EnvironmentType.Mobile.__enum__ = dhx.EnvironmentType;
dhx.EnvironmentType.Desktop = ["Desktop",1];
dhx.EnvironmentType.Desktop.toString = $estr;
dhx.EnvironmentType.Desktop.__enum__ = dhx.EnvironmentType;
dhx.EnvironmentType.Server = ["Server",2];
dhx.EnvironmentType.Server.toString = $estr;
dhx.EnvironmentType.Server.__enum__ = dhx.EnvironmentType;
dhx.EnvironmentType.UnknownEnvironment = ["UnknownEnvironment",3];
dhx.EnvironmentType.UnknownEnvironment.toString = $estr;
dhx.EnvironmentType.UnknownEnvironment.__enum__ = dhx.EnvironmentType;
dhx.OSType = $hxClasses["dhx.OSType"] = { __ename__ : ["dhx","OSType"], __constructs__ : ["Windows","IOs","Android","Mac","Linux","UnknownOs"] }
dhx.OSType.Windows = function(version) { var $x = ["Windows",0,version]; $x.__enum__ = dhx.OSType; $x.toString = $estr; return $x; }
dhx.OSType.IOs = ["IOs",1];
dhx.OSType.IOs.toString = $estr;
dhx.OSType.IOs.__enum__ = dhx.OSType;
dhx.OSType.Android = ["Android",2];
dhx.OSType.Android.toString = $estr;
dhx.OSType.Android.__enum__ = dhx.OSType;
dhx.OSType.Mac = ["Mac",3];
dhx.OSType.Mac.toString = $estr;
dhx.OSType.Mac.__enum__ = dhx.OSType;
dhx.OSType.Linux = ["Linux",4];
dhx.OSType.Linux.toString = $estr;
dhx.OSType.Linux.__enum__ = dhx.OSType;
dhx.OSType.UnknownOs = ["UnknownOs",5];
dhx.OSType.UnknownOs.toString = $estr;
dhx.OSType.UnknownOs.__enum__ = dhx.OSType;
dhx.ClientHost = function() { }
$hxClasses["dhx.ClientHost"] = dhx.ClientHost;
dhx.ClientHost.__name__ = ["dhx","ClientHost"];
dhx.ClientHost.host = null;
dhx.ClientHost.environment = null;
dhx.ClientHost.os = null;
dhx.ClientHost.isIE = function() {
	return (function($this) {
		var $r;
		switch( (dhx.ClientHost.host)[1] ) {
		case 2:
			$r = true;
			break;
		default:
			$r = false;
		}
		return $r;
	}(this));
}
dhx.ClientHost.userAgent = function() {
	return "" + navigator.userAgent;
}
dhx.ClientHost.hasNavigator = function() {
	return typeof navigator !== 'undefined';
}
dhx.ClientHost.prototype = {
	__class__: dhx.ClientHost
}
var js = {}
js.Lib = function() { }
$hxClasses["js.Lib"] = js.Lib;
js.Lib.__name__ = ["js","Lib"];
js.Lib.isIE = null;
js.Lib.isOpera = null;
js.Lib.document = null;
js.Lib.window = null;
js.Lib.alert = function(v) {
	alert(js.Boot.__string_rec(v,""));
}
js.Lib.prototype = {
	__class__: js.Lib
}
dhx.Group = function(nodes) {
	this.nodes = nodes;
};
$hxClasses["dhx.Group"] = dhx.Group;
dhx.Group.__name__ = ["dhx","Group"];
dhx.Group.current = null;
dhx.Group.merge = function(source,target) {
	if(target.length != source.length) throw "Group length not equal";
	var _g1 = 0, _g = target.length;
	while(_g1 < _g) {
		var i = _g1++;
		var s = source[i];
		var t = target[i];
		if(s.parentNode != t.parentNode) throw "parentNodes not the same!"; else if(s.nodes.length != t.nodes.length) throw "node length mismatch!"; else {
			var _g3 = 0, _g2 = t.nodes.length;
			while(_g3 < _g2) {
				var i1 = _g3++;
				if(null == t.nodes[i1]) t.nodes[i1] = s.nodes[i1];
			}
		}
	}
	return target;
}
dhx.Group.prototype = {
	parentNode: null
	,nodes: null
	,each: function(f) {
		var _g1 = 0, _g = this.nodes.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(null != this.nodes[i]) f(dhx.Group.current = this.nodes[i],i);
		}
	}
	,iterator: function() {
		return this.nodes.iterator();
	}
	,get: function(i) {
		return this.nodes[i];
	}
	,count: function() {
		return this.nodes.length;
	}
	,push: function(node) {
		this.nodes.push(node);
	}
	,__class__: dhx.Group
}
dhx.BaseSelection = function(groups) {
	this.groups = groups;
};
$hxClasses["dhx.BaseSelection"] = dhx.BaseSelection;
dhx.BaseSelection.__name__ = ["dhx","BaseSelection"];
dhx.BaseSelection.listenerEnterLeave = function(f,dom,i) {
	var e = dhx.Dom.event, target = e.relatedTarget;
	if(null == target || dhx.BaseSelection.isChild(dom,target)) return;
	f(dom,i);
}
dhx.BaseSelection.isChild = function(parent,child) {
	if(child == parent) return false;
	while(child != null) {
		child = child.parentNode;
		if(child == parent) return true;
	}
	return false;
}
dhx.BaseSelection.addEvent = function(target,typo,handler,capture) {
	if(target.addEventListener != null) dhx.BaseSelection.addEvent = function(target1,typo1,handler1,capture1) {
		target1.addEventListener(typo1,handler1,capture1);
	}; else if(target.attachEvent != null) dhx.BaseSelection.addEvent = function(target1,typo1,handler1,capture1) {
		target1.attachEvent(typo1,handler1);
	};
	dhx.BaseSelection.addEvent(target,typo,handler,capture);
}
dhx.BaseSelection.removeEvent = function(target,typo,type,capture) {
	if(target.removeEventListener != null) dhx.BaseSelection.removeEvent = function(target1,typo1,type1,capture1) {
		target1.removeEventListener(typo1,Reflect.field(target1,"__dhx_on__" + type1),false);
	}; else if(target.attachEvent != null) dhx.BaseSelection.removeEvent = function(target1,typo1,type1,capture1) {
		target1.detachEvent(typo1,Reflect.field(target1,"__dhx_on__" + type1));
	};
	dhx.BaseSelection.removeEvent(target,typo,type,capture);
}
dhx.BaseSelection.bindJoin = function(join,group,groupData,update,enter,exit) {
	var n = group.nodes.length, m = groupData.length, updateHtmlDoms = [], exitHtmlDoms = [], enterHtmlDoms = [], node, nodeData;
	var nodeByKey = new Hash(), keys = [], key, j = groupData.length;
	var _g = 0;
	while(_g < n) {
		var i = _g++;
		node = group.nodes[i];
		key = join(Reflect.field(node,"__dhx_data__"),i);
		if(nodeByKey.exists(key)) exitHtmlDoms[j++] = node; else nodeByKey.set(key,node);
		keys.push(key);
	}
	var _g = 0;
	while(_g < m) {
		var i = _g++;
		node = nodeByKey.get(key = join(nodeData = groupData[i],i));
		if(null != node) {
			node["__dhx_data__"] = nodeData;
			updateHtmlDoms[i] = node;
			enterHtmlDoms[i] = exitHtmlDoms[i] = null;
		} else {
			node = { __dhx_data__ : nodeData};
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
	var enterGroup = new dhx.Group(enterHtmlDoms);
	enterGroup.parentNode = group.parentNode;
	enter.push(enterGroup);
	var updateGroup = new dhx.Group(updateHtmlDoms);
	updateGroup.parentNode = group.parentNode;
	update.push(updateGroup);
	var exitGroup = new dhx.Group(exitHtmlDoms);
	exitGroup.parentNode = group.parentNode;
	exit.push(exitGroup);
}
dhx.BaseSelection.bind = function(group,groupData,update,enter,exit) {
	var n0 = group.nodes.length, n1 = group.nodes.length, updateHtmlDoms = [], exitHtmlDoms = [], enterHtmlDoms = [], node, nodeData;
	if(n0 > groupData.length) n0 = groupData.length;
	if(n1 < groupData.length) n1 = groupData.length;
	var _g = 0;
	while(_g < n0) {
		var i = _g++;
		node = group.nodes[i];
		nodeData = groupData[i];
		if(null != node) {
			node["__dhx_data__"] = nodeData;
			updateHtmlDoms[i] = node;
			enterHtmlDoms[i] = exitHtmlDoms[i] = null;
		} else {
			enterHtmlDoms[i] = { __dhx_data__ : nodeData};
			updateHtmlDoms[i] = exitHtmlDoms[i] = null;
		}
	}
	var _g1 = n0, _g = groupData.length;
	while(_g1 < _g) {
		var i = _g1++;
		node = { __dhx_data__ : groupData[i]};
		enterHtmlDoms[i] = node;
		updateHtmlDoms[i] = exitHtmlDoms[i] = null;
	}
	var _g = groupData.length;
	while(_g < n1) {
		var i = _g++;
		exitHtmlDoms[i] = group.nodes[i];
		enterHtmlDoms[i] = updateHtmlDoms[i] = null;
	}
	var enterGroup = new dhx.Group(enterHtmlDoms);
	enterGroup.parentNode = group.parentNode;
	enter.push(enterGroup);
	var updateGroup = new dhx.Group(updateHtmlDoms);
	updateGroup.parentNode = group.parentNode;
	update.push(updateGroup);
	var exitGroup = new dhx.Group(exitHtmlDoms);
	exitGroup.parentNode = group.parentNode;
	exit.push(exitGroup);
}
dhx.BaseSelection.prototype = {
	parentNode: null
	,groups: null
	,select: function(selector) {
		return this._select(function(el) {
			return dhx.Dom.selectionEngine.select(selector,el);
		});
	}
	,selectAll: function(selector) {
		return this._selectAll(function(el) {
			return dhx.Dom.selectionEngine.selectAll(selector,el);
		});
	}
	,_this: function() {
		return this;
	}
	,append: function(name) {
		var qname = dhx.Namespace.qualify(name);
		var append = function(node) {
			var n = js.Lib.document.createElement(name);
			node.appendChild(n);
			return n;
		};
		var appendNS = function(node) {
			var n = js.Lib.document.createElementNS(qname.space,qname.local);
			node.appendChild(n);
			return n;
		};
		return this._select(null == qname?append:appendNS);
	}
	,remove: function() {
		return this.eachNode(function(node,i) {
			var parent = node.parentNode;
			if(null != parent) parent.removeChild(node);
		});
	}
	,eachNode: function(f) {
		var _g = 0, _g1 = this.groups;
		while(_g < _g1.length) {
			var group = _g1[_g];
			++_g;
			group.each(f);
		}
		return this;
	}
	,insert: function(name,before,beforeSelector) {
		var qname = dhx.Namespace.qualify(name);
		var insertDom = function(node) {
			var n = js.Lib.document.createElement(name);
			node.insertBefore(n,null != before?before:dhx.Dom.select(beforeSelector).node());
			return n;
		};
		var insertNsDom = function(node) {
			var n = js.Lib.document.createElementNS(qname.space,qname.local);
			node.insertBefore(n,null != before?before:dhx.Dom.select(beforeSelector).node());
			return n;
		};
		return this._select(null == qname?insertDom:insertNsDom);
	}
	,firstNode: function(f) {
		var _g = 0, _g1 = this.groups;
		while(_g < _g1.length) {
			var group = _g1[_g];
			++_g;
			var $it0 = group.nodes.iterator();
			while( $it0.hasNext() ) {
				var node = $it0.next();
				if(null != node) return f(node);
			}
		}
		return null;
	}
	,node: function() {
		return this.firstNode(function(n) {
			return n;
		});
	}
	,empty: function() {
		return null == this.firstNode(function(n) {
			return n;
		});
	}
	,filterNode: function(f) {
		var subgroups = [], subgroup;
		var _g = 0, _g1 = this.groups;
		while(_g < _g1.length) {
			var group = _g1[_g];
			++_g;
			var sg = new dhx.Group(subgroup = []);
			sg.parentNode = group.parentNode;
			subgroups.push(sg);
			var i = -1;
			var $it0 = group.nodes.iterator();
			while( $it0.hasNext() ) {
				var node = $it0.next();
				if(null != node && f(node,++i)) subgroup.push(node);
			}
		}
		return this.createSelection(subgroups);
	}
	,mapNode: function(f) {
		var results = [];
		var _g = 0, _g1 = this.groups;
		while(_g < _g1.length) {
			var group = _g1[_g];
			++_g;
			var i = -1;
			var $it0 = group.nodes.iterator();
			while( $it0.hasNext() ) {
				var node = $it0.next();
				if(null != node) results.push(f(node,++i));
			}
		}
		return results;
	}
	,onNode: function(type,listener,capture) {
		if(capture == null) capture = false;
		var i = type.indexOf("."), typo = i < 0?type:type.substr(0,i);
		if((typo == "mouseenter" || typo == "mouseleave") && !dhx.ClientHost.isIE()) {
			listener = (function(f,a1) {
				return function(a2,a3) {
					return f(a1,a2,a3);
				};
			})(dhx.BaseSelection.listenerEnterLeave,listener);
			if(typo == "mouseenter") typo = "mouseover"; else typo = "mouseout";
		}
		return this.eachNode(function(n,i1) {
			var l = function(e) {
				var o = dhx.Dom.event;
				dhx.Dom.event = e;
				try {
					listener(n,i1);
				} catch( e1 ) {
				}
				dhx.Dom.event = o;
			};
			if(null != Reflect.field(n,"__dhx_on__" + type)) {
				dhx.BaseSelection.removeEvent(n,typo,type,capture);
				Reflect.deleteField(n,"__dhx_on__" + type);
			}
			if(null != listener) {
				n["__dhx_on__" + type] = l;
				dhx.BaseSelection.addEvent(n,typo,l,capture);
			}
		});
	}
	,createSelection: function(groups) {
		return (function($this) {
			var $r;
			throw "abstract method";
			return $r;
		}(this));
	}
	,_select: function(selectf) {
		var subgroups = [], subgroup, subnode, node;
		var _g = 0, _g1 = this.groups;
		while(_g < _g1.length) {
			var group = _g1[_g];
			++_g;
			subgroups.push(subgroup = new dhx.Group([]));
			subgroup.parentNode = group.parentNode;
			var $it0 = group.nodes.iterator();
			while( $it0.hasNext() ) {
				var node1 = $it0.next();
				if(null != node1) {
					subgroup.parentNode = node1;
					subgroup.nodes.push(subnode = selectf(node1));
					if(null != subnode) subnode["__dhx_data__"] = Reflect.field(node1,"__dhx_data__");
				} else subgroup.nodes.push(null);
			}
		}
		return this.createSelection(subgroups);
	}
	,_selectAll: function(selectallf) {
		var subgroups = [], subgroup;
		var _g = 0, _g1 = this.groups;
		while(_g < _g1.length) {
			var group = _g1[_g];
			++_g;
			var $it0 = group.nodes.iterator();
			while( $it0.hasNext() ) {
				var node = $it0.next();
				if(null != node) {
					subgroups.push(subgroup = new dhx.Group(selectallf(node)));
					subgroup.parentNode = node;
				}
			}
		}
		return this.createSelection(subgroups);
	}
	,__class__: dhx.BaseSelection
}
dhx.UnboundSelection = function(groups) {
	dhx.BaseSelection.call(this,groups);
};
$hxClasses["dhx.UnboundSelection"] = dhx.UnboundSelection;
dhx.UnboundSelection.__name__ = ["dhx","UnboundSelection"];
dhx.UnboundSelection.__super__ = dhx.BaseSelection;
dhx.UnboundSelection.prototype = $extend(dhx.BaseSelection.prototype,{
	html: function() {
		return new dhx.AccessHtml(this);
	}
	,text: function() {
		return new dhx.AccessText(this);
	}
	,attr: function(name) {
		return new dhx.AccessAttribute(name,this);
	}
	,classed: function() {
		return new dhx.AccessClassed(this);
	}
	,style: function(name) {
		return new dhx.AccessStyle(name,this);
	}
	,transition: function() {
		return new dhx.UnboundTransition(this);
	}
	,data: function(d,join) {
		var update = [], enter = [], exit = [];
		if(null == join) {
			var _g = 0, _g1 = this.groups;
			while(_g < _g1.length) {
				var group = _g1[_g];
				++_g;
				dhx.BaseSelection.bind(group,d,update,enter,exit);
			}
		} else {
			var _g = 0, _g1 = this.groups;
			while(_g < _g1.length) {
				var group = _g1[_g];
				++_g;
				dhx.BaseSelection.bindJoin(join,group,d,update,enter,exit);
			}
		}
		return new dhx.DataChoice(update,enter,exit);
	}
	,__class__: dhx.UnboundSelection
});
dhx.Selection = function(groups) {
	dhx.UnboundSelection.call(this,groups);
};
$hxClasses["dhx.Selection"] = dhx.Selection;
dhx.Selection.__name__ = ["dhx","Selection"];
dhx.Selection.__properties__ = {get_current:"getCurrent"}
dhx.Selection.current = null;
dhx.Selection.create = function(groups) {
	return new dhx.Selection(groups);
}
dhx.Selection.getCurrent = function() {
	return dhx.Dom.selectNode(dhx.Group.current);
}
dhx.Selection.getCurrentNode = function() {
	return dhx.Group.current;
}
dhx.Selection.__super__ = dhx.UnboundSelection;
dhx.Selection.prototype = $extend(dhx.UnboundSelection.prototype,{
	createSelection: function(groups) {
		return new dhx.Selection(groups);
	}
	,__class__: dhx.Selection
});
dhx.ISelectorEngine = function() { }
$hxClasses["dhx.ISelectorEngine"] = dhx.ISelectorEngine;
dhx.ISelectorEngine.__name__ = ["dhx","ISelectorEngine"];
dhx.ISelectorEngine.prototype = {
	select: null
	,selectAll: null
	,__class__: dhx.ISelectorEngine
}
dhx.NativeSelectorEngine = function() {
};
$hxClasses["dhx.NativeSelectorEngine"] = dhx.NativeSelectorEngine;
dhx.NativeSelectorEngine.__name__ = ["dhx","NativeSelectorEngine"];
dhx.NativeSelectorEngine.__interfaces__ = [dhx.ISelectorEngine];
dhx.NativeSelectorEngine.supported = function() {
	return 'undefined' != typeof document.querySelector;
}
dhx.NativeSelectorEngine.prototype = {
	select: function(selector,node) {
		if(null == node) node = js.Lib.document;
		return node.querySelector(selector);
	}
	,selectAll: function(selector,node) {
		if(null == node) node = js.Lib.document;
		var s = node.querySelectorAll(selector);
		var r = [];
		var _g1 = 0, _g = s.length;
		while(_g1 < _g) {
			var i = _g1++;
			r.push(s[i]);
		}
		return r;
	}
	,__class__: dhx.NativeSelectorEngine
}
dhx.SizzleEngine = function() {
};
$hxClasses["dhx.SizzleEngine"] = dhx.SizzleEngine;
dhx.SizzleEngine.__name__ = ["dhx","SizzleEngine"];
dhx.SizzleEngine.__interfaces__ = [dhx.ISelectorEngine];
dhx.SizzleEngine.supported = function() {
	return false != dhx.SizzleEngine.getSizzle();
}
dhx.SizzleEngine.getSizzle = function() {
	return (('undefined' != typeof Sizzle && Sizzle) || (('undefined' != typeof jQuery) && jQuery.find) || (('undefined' != typeof $) && $.find));
}
dhx.SizzleEngine.prototype = {
	select: function(selector,node) {
		return dhx.Sizzle.select(selector,node)[0];
	}
	,selectAll: function(selector,node) {
		return dhx.Sizzle.uniqueSort(dhx.Sizzle.select(selector,node));
	}
	,__class__: dhx.SizzleEngine
}
dhx.Dom = function() { }
$hxClasses["dhx.Dom"] = dhx.Dom;
dhx.Dom.__name__ = ["dhx","Dom"];
dhx.Dom.select = function(selector) {
	return dhx.Dom.doc.select(selector);
}
dhx.Dom.selectAll = function(selector) {
	return dhx.Dom.doc.selectAll(selector);
}
dhx.Dom.selectNode = function(node) {
	return dhx.Selection.create([new dhx.Group([node])]);
}
dhx.Dom.selectNodeData = function(node) {
	return dhx.ResumeSelection.create([new dhx.Group([node])]);
}
dhx.Dom.event = null;
dhx.Dom.prototype = {
	__class__: dhx.Dom
}
dhx.Namespace = function() { }
$hxClasses["dhx.Namespace"] = dhx.Namespace;
dhx.Namespace.__name__ = ["dhx","Namespace"];
dhx.Namespace.qualify = function(name) {
	var i = name.indexOf(":");
	if(i < 0) return null; else {
		var space = dhx.Namespace.prefix.get(name.substr(0,i));
		if(null == space) throw "unable to find a namespace for " + space;
		return new dhx.NSQualifier(space,name.substr(i + 1));
	}
}
dhx.Namespace.prototype = {
	__class__: dhx.Namespace
}
dhx.NSQualifier = function(space,local) {
	this.space = space;
	this.local = local;
};
$hxClasses["dhx.NSQualifier"] = dhx.NSQualifier;
dhx.NSQualifier.__name__ = ["dhx","NSQualifier"];
dhx.NSQualifier.prototype = {
	space: null
	,local: null
	,__class__: dhx.NSQualifier
}
dhx.BoundSelection = function(groups) {
	dhx.BaseSelection.call(this,groups);
};
$hxClasses["dhx.BoundSelection"] = dhx.BoundSelection;
dhx.BoundSelection.__name__ = ["dhx","BoundSelection"];
dhx.BoundSelection.__super__ = dhx.BaseSelection;
dhx.BoundSelection.prototype = $extend(dhx.BaseSelection.prototype,{
	html: function() {
		return new dhx.AccessDataHtml(this);
	}
	,text: function() {
		return new dhx.AccessDataText(this);
	}
	,attr: function(name) {
		return new dhx.AccessDataAttribute(name,this);
	}
	,classed: function() {
		return new dhx.AccessDataClassed(this);
	}
	,style: function(name) {
		return new dhx.AccessDataStyle(name,this);
	}
	,transition: function() {
		return new dhx.BoundTransition(this);
	}
	,dataf: function(fd,join) {
		if(null == join) {
			var update = [], enter = [], exit = [], i = 0;
			var _g = 0, _g1 = this.groups;
			while(_g < _g1.length) {
				var group = _g1[_g];
				++_g;
				dhx.BaseSelection.bind(group,fd(Reflect.field(group.parentNode,"__dhx_data__"),i++),update,enter,exit);
			}
			return new dhx.DataChoice(update,enter,exit);
		} else {
			var update = [], enter = [], exit = [], i = 0;
			var _g = 0, _g1 = this.groups;
			while(_g < _g1.length) {
				var group = _g1[_g];
				++_g;
				dhx.BaseSelection.bindJoin(join,group,fd(Reflect.field(group.parentNode,"__dhx_data__"),i++),update,enter,exit);
			}
			return new dhx.DataChoice(update,enter,exit);
		}
	}
	,each: function(f) {
		return this.eachNode(function(n,i) {
			f(Reflect.field(n,"__dhx_data__"),i);
		});
	}
	,filter: function(f) {
		return this.filterNode(function(n,i) {
			return f(Reflect.field(n,"__dhx_data__"),i);
		});
	}
	,on: function(type,listener,capture) {
		if(capture == null) capture = false;
		return this.onNode(type,null == listener?null:function(n,i) {
			listener(Reflect.field(n,"__dhx_data__"),i);
		},capture);
	}
	,__class__: dhx.BoundSelection
});
dhx.UpdateSelection = function(update,choice) {
	dhx.BoundSelection.call(this,update);
	this._choice = choice;
};
$hxClasses["dhx.UpdateSelection"] = dhx.UpdateSelection;
dhx.UpdateSelection.__name__ = ["dhx","UpdateSelection"];
dhx.UpdateSelection.__super__ = dhx.BoundSelection;
dhx.UpdateSelection.prototype = $extend(dhx.BoundSelection.prototype,{
	_choice: null
	,createSelection: function(groups) {
		return new dhx.UpdateSelection(groups,this._choice);
	}
	,update: function() {
		return this;
	}
	,enter: function() {
		return this._choice.enter();
	}
	,exit: function() {
		return this._choice.exit();
	}
	,__class__: dhx.UpdateSelection
});
dhx.DataChoice = function(update,enter,exit) {
	this._update = update;
	this._enter = enter;
	this._exit = exit;
	dhx.UpdateSelection.call(this,this._update,this);
};
$hxClasses["dhx.DataChoice"] = dhx.DataChoice;
dhx.DataChoice.__name__ = ["dhx","DataChoice"];
dhx.DataChoice.merge = function(groups,dc) {
	dhx.Group.merge(groups,dc._update);
}
dhx.DataChoice.__super__ = dhx.UpdateSelection;
dhx.DataChoice.prototype = $extend(dhx.UpdateSelection.prototype,{
	_update: null
	,_enter: null
	,_exit: null
	,enter: function() {
		return new dhx.PreEnterSelection(this._enter,this);
	}
	,exit: function() {
		return new dhx.ExitSelection(this._exit,this);
	}
	,__class__: dhx.DataChoice
});
dhx.ResumeSelection = function(groups) {
	dhx.BoundSelection.call(this,groups);
};
$hxClasses["dhx.ResumeSelection"] = dhx.ResumeSelection;
dhx.ResumeSelection.__name__ = ["dhx","ResumeSelection"];
dhx.ResumeSelection.create = function(groups) {
	return new dhx.ResumeSelection(groups);
}
dhx.ResumeSelection.__super__ = dhx.BoundSelection;
dhx.ResumeSelection.prototype = $extend(dhx.BoundSelection.prototype,{
	createSelection: function(groups) {
		return new dhx.ResumeSelection(groups);
	}
	,__class__: dhx.ResumeSelection
});
dhx.PreEnterSelection = function(enter,choice) {
	this.groups = enter;
	this._choice = choice;
};
$hxClasses["dhx.PreEnterSelection"] = dhx.PreEnterSelection;
dhx.PreEnterSelection.__name__ = ["dhx","PreEnterSelection"];
dhx.PreEnterSelection.prototype = {
	groups: null
	,_choice: null
	,append: function(name) {
		var qname = dhx.Namespace.qualify(name);
		var append = function(node) {
			var n = js.Lib.document.createElement(name);
			node.appendChild(n);
			return n;
		};
		var appendNS = function(node) {
			var n = js.Lib.document.createElementNS(qname.space,qname.local);
			node.appendChild(n);
			return n;
		};
		return this._select(null == qname?append:appendNS);
	}
	,createSelection: function(groups) {
		return new dhx.EnterSelection(groups,this._choice);
	}
	,_select: function(selectf) {
		var subgroups = [], subgroup, subnode, node;
		var _g = 0, _g1 = this.groups;
		while(_g < _g1.length) {
			var group = _g1[_g];
			++_g;
			subgroups.push(subgroup = new dhx.Group([]));
			subgroup.parentNode = group.parentNode;
			var $it0 = group.nodes.iterator();
			while( $it0.hasNext() ) {
				var node1 = $it0.next();
				if(null != node1) {
					subgroup.nodes.push(subnode = selectf(group.parentNode));
					subnode["__dhx_data__"] = Reflect.field(node1,"__dhx_data__");
				} else subgroup.nodes.push(null);
			}
		}
		dhx.DataChoice.merge(subgroups,this._choice);
		return this.createSelection(subgroups);
	}
	,__class__: dhx.PreEnterSelection
}
dhx.EnterSelection = function(enter,choice) {
	dhx.BoundSelection.call(this,enter);
	this._choice = choice;
};
$hxClasses["dhx.EnterSelection"] = dhx.EnterSelection;
dhx.EnterSelection.__name__ = ["dhx","EnterSelection"];
dhx.EnterSelection.__super__ = dhx.BoundSelection;
dhx.EnterSelection.prototype = $extend(dhx.BoundSelection.prototype,{
	_choice: null
	,createSelection: function(groups) {
		return new dhx.EnterSelection(groups,this._choice);
	}
	,update: function() {
		return this._choice.update();
	}
	,__class__: dhx.EnterSelection
});
dhx.ExitSelection = function(exit,choice) {
	dhx.UnboundSelection.call(this,exit);
	this._choice = choice;
};
$hxClasses["dhx.ExitSelection"] = dhx.ExitSelection;
dhx.ExitSelection.__name__ = ["dhx","ExitSelection"];
dhx.ExitSelection.__super__ = dhx.UnboundSelection;
dhx.ExitSelection.prototype = $extend(dhx.UnboundSelection.prototype,{
	_choice: null
	,createSelection: function(groups) {
		return new dhx.ExitSelection(groups,this._choice);
	}
	,update: function() {
		return this._choice.update();
	}
	,__class__: dhx.ExitSelection
});
dhx.Svg = function() { }
$hxClasses["dhx.Svg"] = dhx.Svg;
dhx.Svg.__name__ = ["dhx","Svg"];
dhx.Svg.mouse = function(dom) {
	var point = (null != dom.ownerSVGElement?dom.ownerSVGElement:dom).createSVGPoint();
	if(dhx.Svg._usepage && (js.Lib.window.scrollX || js.Lib.window.scrollY)) {
		var svg = dhx.Dom.selectNode(js.Lib.document.body).append("svg:svg").style("position").string("absolute").style("top")["float"](0).style("left")["float"](0);
		var ctm = svg.node().getScreenCTM();
		dhx.Svg._usepage = !(ctm.f || ctm.e);
		svg.remove();
	}
	if(dhx.Svg._usepage) {
		point.x = dhx.Dom.event.pageX;
		point.y = dhx.Dom.event.pageY;
	} else {
		point.x = dhx.Dom.event.clientX;
		point.y = dhx.Dom.event.clientY;
	}
	point = point.matrixTransform(dom.getScreenCTM().inverse());
	return [point.x,point.y];
}
dhx.Svg.prototype = {
	__class__: dhx.Svg
}
dhx.Timer = function() { }
$hxClasses["dhx.Timer"] = dhx.Timer;
dhx.Timer.__name__ = ["dhx","Timer"];
dhx.Timer.timer = function(f,delay) {
	if(delay == null) delay = 0.0;
	var now = Date.now().getTime(), found = false, t0, t1 = dhx.Timer.queue;
	if(!Math.isFinite(delay)) return;
	while(null != t1) {
		if(Reflect.compareMethods(f,t1.f)) {
			t1.then = now;
			t1.delay = delay;
			found = true;
			break;
		}
		t0 = t1;
		t1 = t1.next;
	}
	if(!found) dhx.Timer.queue = { f : f, then : now, delay : delay, next : dhx.Timer.queue, flush : false};
	if(0 == dhx.Timer.interval) {
		dhx.Timer.timeout = clearTimeout(dhx.Timer.timeout);
		dhx.Timer.interval = 1;
		window.requestAnimationFrame(dhx.Timer._step);
	}
}
dhx.Timer.step = function() {
	var elapsed, now = Date.now().getTime(), t1 = dhx.Timer.queue;
	while(null != t1) {
		elapsed = now - t1.then;
		if(elapsed > t1.delay) t1.flush = t1.f(elapsed);
		t1 = t1.next;
	}
	var delay = dhx.Timer._flush() - now;
	if(delay > 24) {
		if(Math.isFinite(delay)) {
			clearTimeout(dhx.Timer.timeout);
			dhx.Timer.timeout = setTimeout(dhx.Timer._step,delay);
		}
		dhx.Timer.interval = 0;
	} else {
		dhx.Timer.interval = 1;
		window.requestAnimationFrame(dhx.Timer._step);
	}
}
dhx.Timer._flush = function() {
	var t0 = null, t1 = dhx.Timer.queue, then = Math.POSITIVE_INFINITY;
	while(null != t1) if(t1.flush) t1 = null != t0?t0.next = t1.next:dhx.Timer.queue = t1.next; else {
		then = Math.min(then,t1.then + t1.delay);
		t1 = (t0 = t1).next;
	}
	return then;
}
dhx.Timer.prototype = {
	__class__: dhx.Timer
}
dhx.BaseTransition = function(selection) {
	this.selection = selection;
	var tid = this._transitionId = dhx.BaseTransition._inheritid > 0?dhx.BaseTransition._inheritid:++dhx.BaseTransition._id;
	this._tweens = new Hash();
	this._interpolators = [];
	this._remove = false;
	this._stage = [];
	this._delay = [];
	this._duration = [];
	this._ease = dhx.BaseTransition.DEFAULT_EASE;
	this._step = this.step.$bind(this);
	selection.eachNode(function(n,_) {
		if(Reflect.hasField(n,"__dhx_transition__")) Reflect.field(n,"__dhx_transition__").owner = tid; else n["__dhx_transition__"] = { owner : tid};
	});
	this.delay(null,0);
	this.duration(null,250);
};
$hxClasses["dhx.BaseTransition"] = dhx.BaseTransition;
dhx.BaseTransition.__name__ = ["dhx","BaseTransition"];
dhx.BaseTransition.CUBIC_EQUATION = function(t) {
	return Math.pow(t,3);
}
dhx.BaseTransition.DEFAULT_EASE = function(t) {
	return .5 * (t < .5?dhx.BaseTransition.CUBIC_EQUATION(2 * t):2 - dhx.BaseTransition.CUBIC_EQUATION(2 - 2 * t));
}
dhx.BaseTransition.prototype = {
	_transitionId: null
	,_tweens: null
	,_interpolators: null
	,_remove: null
	,_stage: null
	,_delay: null
	,_duration: null
	,_durationMax: null
	,_ease: null
	,_step: null
	,_start: null
	,_end: null
	,selection: null
	,step: function(elapsed) {
		var clear = true, k = -1, me = this;
		this.selection.eachNode(function(n,i) {
			if(2 == me._stage[++k]) return;
			var t = (elapsed - me._delay[k]) / me._duration[k], tx = Reflect.field(n,"__dhx_transition__"), te, tk, ik = me._interpolators[k];
			if(t < 1) {
				clear = false;
				if(t < 0) return;
			} else t = 1;
			if(null != me._stage[k]) {
				if(null == tx || tx.active != me._transitionId) {
					me._stage[k] = 2;
					return;
				}
			} else if(null == tx || tx.active > me._transitionId) {
				me._stage[k] = 2;
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
						Reflect.deleteField(n,"__dhx_transition__");
						if(me._remove) n.parentNode.removeChild(n);
					}
					dhx.BaseTransition._inheritid = me._transitionId;
					if(null != me._end) me._end(n,i);
					dhx.BaseTransition._inheritid = 0;
					tx.owner = owner;
				}
			}
		});
		return clear;
	}
	,endNode: function(f) {
		this._end = f;
		return this._this();
	}
	,delay: function(f,v) {
		if(v == null) v = 0.0;
		var delayMin = Math.POSITIVE_INFINITY, k = -1, me = this;
		if(null != f) this.selection.eachNode(function(n,i) {
			var x = me._delay[++k] = f(n,i);
			if(x < delayMin) delayMin = x;
		}); else {
			delayMin = v;
			this.selection.eachNode(function(n,i) {
				me._delay[++k] = delayMin;
			});
		}
		dhx.Timer.timer(this._step,delayMin);
		return this._this();
	}
	,duration: function(f,v) {
		if(v == null) v = 0.0;
		var k = -1, me = this;
		if(null != f) {
			this._durationMax = 0;
			this.selection.eachNode(function(n,i) {
				var x = me._duration[++k] = f(n,i);
				if(x > me._durationMax) me._durationMax = x;
			});
		} else {
			this._durationMax = v;
			this.selection.eachNode(function(n,i) {
				me._duration[++k] = me._durationMax;
			});
		}
		return this._this();
	}
	,ease: function(f) {
		this._ease = f;
		return this._this();
	}
	,remove: function(v) {
		if(v == null) v = true;
		this._remove = v;
		return this._this();
	}
	,createTransition: function(selection) {
		return (function($this) {
			var $r;
			throw "abstract method";
			return $r;
		}(this));
	}
	,_this: function() {
		return this;
	}
	,__class__: dhx.BaseTransition
}
dhx.UnboundTransition = function(selection) {
	dhx.BaseTransition.call(this,selection);
};
$hxClasses["dhx.UnboundTransition"] = dhx.UnboundTransition;
dhx.UnboundTransition.__name__ = ["dhx","UnboundTransition"];
dhx.UnboundTransition.__super__ = dhx.BaseTransition;
dhx.UnboundTransition.prototype = $extend(dhx.BaseTransition.prototype,{
	style: function(name) {
		return new dhx.AccessTweenStyle(name,this,this._tweens);
	}
	,createTransition: function(selection) {
		return new dhx.UnboundTransition(selection);
	}
	,__class__: dhx.UnboundTransition
});
dhx.BoundTransition = function(selection) {
	dhx.BaseTransition.call(this,selection);
};
$hxClasses["dhx.BoundTransition"] = dhx.BoundTransition;
dhx.BoundTransition.__name__ = ["dhx","BoundTransition"];
dhx.BoundTransition.__super__ = dhx.BaseTransition;
dhx.BoundTransition.prototype = $extend(dhx.BaseTransition.prototype,{
	attr: function(name) {
		return new dhx.AccessDataTweenAttribute(name,this,this._tweens);
	}
	,createTransition: function(selection) {
		return new dhx.BoundTransition(selection);
	}
	,__class__: dhx.BoundTransition
});
var haxe = {}
haxe.BaseCode = function(base) {
	var len = base.length;
	var nbits = 1;
	while(len > 1 << nbits) nbits++;
	if(nbits > 8 || len != 1 << nbits) throw "BaseCode : base length must be a power of two.";
	this.base = base;
	this.nbits = nbits;
};
$hxClasses["haxe.BaseCode"] = haxe.BaseCode;
haxe.BaseCode.__name__ = ["haxe","BaseCode"];
haxe.BaseCode.prototype = {
	base: null
	,nbits: null
	,tbl: null
	,initTable: function() {
		var tbl = new Array();
		var _g = 0;
		while(_g < 256) {
			var i = _g++;
			tbl[i] = -1;
		}
		var _g1 = 0, _g = this.base.length;
		while(_g1 < _g) {
			var i = _g1++;
			tbl[this.base.b[i]] = i;
		}
		this.tbl = tbl;
	}
	,decodeBytes: function(b) {
		var nbits = this.nbits;
		var base = this.base;
		if(this.tbl == null) this.initTable();
		var tbl = this.tbl;
		var size = b.length * nbits >> 3;
		var out = Bytes.alloc(size);
		var buf = 0;
		var curbits = 0;
		var pin = 0;
		var pout = 0;
		while(pout < size) {
			while(curbits < 8) {
				curbits += nbits;
				buf <<= nbits;
				var i = tbl[b.b[pin++]];
				if(i == -1) throw "BaseCode : invalid encoded char";
				buf |= i;
			}
			curbits -= 8;
			out.b[pout++] = buf >> curbits & 255 & 255;
		}
		return out;
	}
	,__class__: haxe.BaseCode
}
haxe.Http = function(url) {
	this.url = url;
	this.headers = new Hash();
	this.params = new Hash();
	this.async = true;
};
$hxClasses["haxe.Http"] = haxe.Http;
haxe.Http.__name__ = ["haxe","Http"];
haxe.Http.prototype = {
	url: null
	,async: null
	,postData: null
	,headers: null
	,params: null
	,setHeader: function(header,value) {
		this.headers.set(header,value);
	}
	,setParameter: function(param,value) {
		this.params.set(param,value);
	}
	,request: function(post) {
		var me = this;
		var r = new js.XMLHttpRequest();
		var onreadystatechange = function() {
			if(r.readyState != 4) return;
			var s = (function($this) {
				var $r;
				try {
					$r = r.status;
				} catch( e ) {
					$r = null;
				}
				return $r;
			}(this));
			if(s == undefined) s = null;
			if(s != null) me.onStatus(s);
			if(s != null && s >= 200 && s < 400) me.onData(r.responseText); else switch(s) {
			case null: case undefined:
				me.onError("Failed to connect or resolve host");
				break;
			case 12029:
				me.onError("Failed to connect to host");
				break;
			case 12007:
				me.onError("Unknown host");
				break;
			default:
				me.onError("Http Error #" + r.status);
			}
		};
		if(this.async) r.onreadystatechange = onreadystatechange;
		var uri = this.postData;
		if(uri != null) post = true; else {
			var $it0 = this.params.keys();
			while( $it0.hasNext() ) {
				var p = $it0.next();
				if(uri == null) uri = ""; else uri += "&";
				uri += StringTools.urlEncode(p) + "=" + StringTools.urlEncode(this.params.get(p));
			}
		}
		try {
			if(post) r.open("POST",this.url,this.async); else if(uri != null) {
				var question = this.url.split("?").length <= 1;
				r.open("GET",this.url + (question?"?":"&") + uri,this.async);
				uri = null;
			} else r.open("GET",this.url,this.async);
		} catch( e ) {
			this.onError(e.toString());
			return;
		}
		if(this.headers.get("Content-Type") == null && post && this.postData == null) r.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		var $it1 = this.headers.keys();
		while( $it1.hasNext() ) {
			var h = $it1.next();
			r.setRequestHeader(h,this.headers.get(h));
		}
		r.send(uri);
		if(!this.async) onreadystatechange();
	}
	,onData: function(data) {
	}
	,onError: function(msg) {
	}
	,onStatus: function(status) {
	}
	,__class__: haxe.Http
}
haxe.Md5 = function() {
};
$hxClasses["haxe.Md5"] = haxe.Md5;
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
haxe.Timer = function(time_ms) {
	var me = this;
	this.id = window.setInterval(function() {
		me.run();
	},time_ms);
};
$hxClasses["haxe.Timer"] = haxe.Timer;
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.delay = function(f,time_ms) {
	var t = new haxe.Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
}
haxe.Timer.prototype = {
	id: null
	,stop: function() {
		if(this.id == null) return;
		window.clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
	,__class__: haxe.Timer
}
var hxevents = {}
hxevents.Dispatcher = function() {
	this.handlers = new Array();
};
$hxClasses["hxevents.Dispatcher"] = hxevents.Dispatcher;
hxevents.Dispatcher.__name__ = ["hxevents","Dispatcher"];
hxevents.Dispatcher.prototype = {
	handlers: null
	,add: function(h) {
		this.handlers.push(h);
		return h;
	}
	,addOnce: function(h) {
		var me = this;
		var _h = null;
		_h = function(v) {
			me.remove(_h);
			h(v);
		};
		this.add(_h);
		return _h;
	}
	,remove: function(h) {
		var _g1 = 0, _g = this.handlers.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(Reflect.compareMethods(this.handlers[i],h)) return this.handlers.splice(i,1)[0];
		}
		return null;
	}
	,dispatch: function(e) {
		var list = this.handlers.copy();
		var _g = 0;
		while(_g < list.length) {
			var l = list[_g];
			++_g;
			if(this._stop == true) {
				this._stop = false;
				break;
			}
			l(e);
		}
	}
	,_stop: null
	,__class__: hxevents.Dispatcher
}
hxevents.Notifier = function() {
	this.handlers = new Array();
};
$hxClasses["hxevents.Notifier"] = hxevents.Notifier;
hxevents.Notifier.__name__ = ["hxevents","Notifier"];
hxevents.Notifier.prototype = {
	handlers: null
	,add: function(h) {
		this.handlers.push(h);
		return h;
	}
	,addOnce: function(h) {
		var me = this;
		var _h = null;
		_h = function() {
			me.remove(_h);
			h();
		};
		this.add(_h);
		return _h;
	}
	,remove: function(h) {
		var _g1 = 0, _g = this.handlers.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(Reflect.compareMethods(this.handlers[i],h)) return this.handlers.splice(i,1)[0];
		}
		return null;
	}
	,dispatch: function() {
		var list = this.handlers.copy();
		var _g = 0;
		while(_g < list.length) {
			var l = list[_g];
			++_g;
			if(this._stop == true) {
				this._stop = false;
				break;
			}
			l();
		}
	}
	,_stop: null
	,__class__: hxevents.Notifier
}
js.Boot = function() { }
$hxClasses["js.Boot"] = js.Boot;
js.Boot.__name__ = ["js","Boot"];
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
js.Scroll = function() { }
$hxClasses["js.Scroll"] = js.Scroll;
js.Scroll.__name__ = ["js","Scroll"];
js.Scroll.getTop = function() {
	var sy = window.pageYOffset;
	if(typeof(sy) == "number") return sy;
	if(document.body) {
		sy = document.body.scrollTop;
		if(sy) return sy;
	}
	return document.documentElement.scrollTop;
}
js.Scroll.getLeft = function() {
	var sx = window.pageXOffset;
	if(typeof(sx) == "number") return sx;
	if(document.body) {
		sx = document.body.scrollLeft;
		if(sx) return sx;
	}
	return document.documentElement.scrollLeft;
}
js.Scroll.prototype = {
	__class__: js.Scroll
}
var math = {}
math.BigInteger = function() {
	if(math.BigInteger.BI_RC == null || math.BigInteger.BI_RC.length == 0) math.BigInteger.initBiRc();
	if(math.BigInteger.BI_RM.length == 0) throw "BI_RM not initialized";
	this.chunks = new Array();
	switch(math.BigInteger.defaultAm) {
	case 1:
		this.am = this.am1.$bind(this);
		break;
	case 2:
		this.am = this.am2.$bind(this);
		break;
	case 3:
		this.am = this.am3.$bind(this);
		break;
	default:
		throw "am error";
		null;
	}
};
$hxClasses["math.BigInteger"] = math.BigInteger;
math.BigInteger.__name__ = ["math","BigInteger"];
math.BigInteger.__properties__ = {get_ONE:"getONE",get_ZERO:"getZERO"}
math.BigInteger.DB = null;
math.BigInteger.DM = null;
math.BigInteger.DV = null;
math.BigInteger.BI_FP = null;
math.BigInteger.FV = null;
math.BigInteger.F1 = null;
math.BigInteger.F2 = null;
math.BigInteger.ZERO = null;
math.BigInteger.ONE = null;
math.BigInteger.BI_RM = null;
math.BigInteger.BI_RC = null;
math.BigInteger.lowprimes = null;
math.BigInteger.lplim = null;
math.BigInteger.defaultAm = null;
math.BigInteger.initBiRc = function() {
	math.BigInteger.BI_RC = new Array();
	var rr = "0".charCodeAt(0);
	var _g = 0;
	while(_g < 10) {
		var vv = _g++;
		math.BigInteger.BI_RC[rr] = vv;
		rr++;
	}
	rr = "a".charCodeAt(0);
	var _g = 10;
	while(_g < 37) {
		var vv = _g++;
		math.BigInteger.BI_RC[rr] = vv;
		rr++;
	}
	rr = "A".charCodeAt(0);
	var _g = 10;
	while(_g < 37) {
		var vv = _g++;
		math.BigInteger.BI_RC[rr] = vv;
		rr++;
	}
}
math.BigInteger.getZERO = function() {
	return math.BigInteger.nbv(0);
}
math.BigInteger.getONE = function() {
	return math.BigInteger.nbv(1);
}
math.BigInteger.nbv = function(i) {
	var r = math.BigInteger.nbi();
	r.fromInt(i);
	return r;
}
math.BigInteger.nbi = function() {
	return new math.BigInteger();
}
math.BigInteger.ofString = function(s,base) {
	var me = math.BigInteger.nbi();
	var fromStringExt = function(s1,b) {
		me.fromInt(0);
		var cs = Math.floor(0.6931471805599453 * math.BigInteger.DB / Math.log(b));
		var d = Math.pow(b,cs) | 0;
		var mi = false;
		var j = 0;
		var w = 0;
		var _g1 = 0, _g = s1.length;
		while(_g1 < _g) {
			var i = _g1++;
			var x = math.BigInteger.intAt(s1,i);
			if(x < 0) {
				if(s1.charAt(i) == "-" && me.sign == 0) mi = true;
				continue;
			}
			w = b * w + x;
			if(++j >= cs) {
				me.dMultiply(d);
				me.dAddOffset(w,0);
				j = 0;
				w = 0;
			}
		}
		if(j > 0) {
			me.dMultiply(Math.pow(b,j) | 0);
			me.dAddOffset(w,0);
		}
		if(mi) math.BigInteger.getZERO().subTo(me,me);
		return me;
	};
	var k;
	if(base == 16) k = 4; else if(base == 10) return fromStringExt(s,base); else if(base == 256) k = 8; else if(base == 8) k = 3; else if(base == 2) k = 1; else if(base == 32) k = 5; else if(base == 4) k = 2; else return fromStringExt(s,base);
	me.t = 0;
	me.sign = 0;
	var i = s.length, mi = false, sh = 0;
	while(--i >= 0) {
		var x = k == 8?s.charCodeAt(i) & 255:math.BigInteger.intAt(s,i);
		if(x < 0) {
			if(s.charAt(i) == "-") mi = true;
			continue;
		}
		mi = false;
		if(sh == 0) {
			me.chunks[me.t] = x;
			me.t++;
		} else if(sh + k > math.BigInteger.DB) {
			me.chunks[me.t - 1] |= (x & (1 << math.BigInteger.DB - sh) - 1) << sh;
			me.chunks[me.t] = x >> math.BigInteger.DB - sh;
			me.t++;
		} else me.chunks[me.t - 1] |= x << sh;
		sh += k;
		if(sh >= math.BigInteger.DB) sh -= math.BigInteger.DB;
	}
	if(k == 8 && (s.charCodeAt(0) & 128) != 0) {
		me.sign = -1;
		if(sh > 0) me.chunks[me.t - 1] |= (1 << math.BigInteger.DB - sh) - 1 << sh;
	}
	me.clamp();
	if(mi) math.BigInteger.getZERO().subTo(me,me);
	return me;
}
math.BigInteger.ofInt = function(x) {
	var i = math.BigInteger.nbi();
	i.fromInt(x);
	return i;
}
math.BigInteger.ofBytes = function(r,unsigned,pos,len) {
	if(pos == null) pos = 0;
	if(len == null) len = r.length - pos;
	if(len == 0) return math.BigInteger.getZERO();
	var bi = math.BigInteger.nbi();
	bi.sign = 0;
	bi.t = 0;
	var i = pos + len;
	var sh = 0;
	while(--i >= pos) {
		var x = i < len?r.b[i] & 255:0;
		if(sh == 0) {
			bi.chunks[bi.t] = x;
			bi.t++;
		} else if(sh + 8 > math.BigInteger.DB) {
			bi.chunks[bi.t - 1] |= (x & (1 << math.BigInteger.DB - sh) - 1) << sh;
			bi.chunks[bi.t] = x >> math.BigInteger.DB - sh;
			bi.t++;
		} else bi.chunks[bi.t - 1] |= x << sh;
		sh += 8;
		if(sh >= math.BigInteger.DB) sh -= math.BigInteger.DB;
	}
	if(!unsigned && (r.b[0] & 128) != 0) {
		bi.sign = -1;
		if(sh > 0) bi.chunks[bi.t - 1] |= (1 << math.BigInteger.DB - sh) - 1 << sh;
	}
	bi.clamp();
	return bi;
}
math.BigInteger.nbits = function(x) {
	var r = 1;
	var t;
	if((t = x >>> 16) != 0) {
		x = t;
		r += 16;
	}
	if((t = x >> 8) != 0) {
		x = t;
		r += 8;
	}
	if((t = x >> 4) != 0) {
		x = t;
		r += 4;
	}
	if((t = x >> 2) != 0) {
		x = t;
		r += 2;
	}
	if((t = x >> 1) != 0) {
		x = t;
		r += 1;
	}
	return r;
}
math.BigInteger.intAt = function(s,i) {
	var c = math.BigInteger.BI_RC[s.charCodeAt(i)];
	if(c == null) return -1;
	return c;
}
math.BigInteger.prototype = {
	t: null
	,sign: null
	,chunks: null
	,am: null
	,fromInt: function(x) {
		this.t = 1;
		this.chunks[0] = 0;
		this.sign = x < 0?-1:0;
		if(x > 0) this.chunks[0] = x; else if(x < -1) this.chunks[0] = x + math.BigInteger.DV; else this.t = 0;
	}
	,toInt: function() {
		if(this.sign < 0) {
			if(this.t == 1) return this.chunks[0] - math.BigInteger.DV; else if(this.t == 0) return -1;
		} else if(this.t == 1) return this.chunks[0]; else if(this.t == 0) return 0;
		return (this.chunks[1] & (1 << 32 - math.BigInteger.DB) - 1) << math.BigInteger.DB | this.chunks[0];
	}
	,toInt32: function() {
		return this.toInt();
	}
	,toHex: function() {
		return this.toRadix(16).toString();
	}
	,toBytesUnsigned: function() {
		var bb = new BytesBuffer();
		var k = 8;
		var km = 255;
		var d = 0;
		var i = this.t;
		var p = math.BigInteger.DB - i * math.BigInteger.DB % k;
		var m = false;
		var c = 0;
		if(i-- > 0) {
			if(p < math.BigInteger.DB && (d = this.chunks[i] >> p) > 0) {
				m = true;
				bb.b.push(d);
				c++;
			}
			while(i >= 0) {
				if(p < k) {
					d = (this.chunks[i] & (1 << p) - 1) << k - p;
					d |= this.chunks[--i] >> (p += math.BigInteger.DB - k);
				} else {
					d = this.chunks[i] >> (p -= k) & km;
					if(p <= 0) {
						p += math.BigInteger.DB;
						--i;
					}
				}
				if(d > 0) m = true;
				if(m) {
					bb.b.push(d);
					c++;
				}
			}
		}
		return bb.getBytes();
	}
	,toRadix: function(b) {
		if(b == null) b = 10;
		if(b < 2 || b > 36) throw new chx.lang.UnsupportedException("invalid base for conversion");
		if(this.sigNum() == 0) return "0";
		var cs = Math.floor(0.6931471805599453 * math.BigInteger.DB / Math.log(b));
		var a = Math.pow(b,cs) | 0;
		var d = math.BigInteger.nbv(a);
		var y = math.BigInteger.nbi();
		var z = math.BigInteger.nbi();
		var r = "";
		this.divRemTo(d,y,z);
		while(y.sigNum() > 0) {
			r = I32.baseEncode(a + z.toInt32(),b).substr(1) + r;
			y.divRemTo(d,y,z);
		}
		return I32.baseEncode(z.toInt32(),b) + r;
	}
	,abs: function() {
		return this.sign < 0?this.neg():this;
	}
	,add: function(a) {
		var r = math.BigInteger.nbi();
		this.addTo(a,r);
		return r;
	}
	,compare: function(a) {
		var r = this.sign - a.sign;
		if(r != 0) return r;
		var i = this.t;
		r = i - a.t;
		if(r != 0) return r;
		while(--i >= 0) {
			r = this.chunks[i] - a.chunks[i];
			if(r != 0) return r;
		}
		return 0;
	}
	,div: function(a) {
		var r = math.BigInteger.nbi();
		this.divRemTo(a,r,null);
		return r;
	}
	,isEven: function() {
		return (this.t > 0?this.chunks[0] & 1:this.sign) == 0;
	}
	,mod: function(a) {
		var r = math.BigInteger.nbi();
		this.abs().divRemTo(a,null,r);
		if(this.sign < 0 && r.compare(math.BigInteger.getZERO()) > 0) a.subTo(r,r);
		return r;
	}
	,modPow: function(e,m) {
		var i = e.bitLength();
		var k;
		var r = math.BigInteger.nbv(1);
		var z;
		if(i <= 0) return r; else if(i < 18) k = 1; else if(i < 48) k = 3; else if(i < 144) k = 4; else if(i < 768) k = 5; else k = 6;
		if(i < 8) z = new math.reduction.Classic(m); else if(m.isEven()) z = new math.reduction.Barrett(m); else z = new math.reduction.Montgomery(m);
		var g = new Array();
		var n = 3;
		var k1 = k - 1;
		var km = (1 << k) - 1;
		g[1] = z.convert(this);
		if(k > 1) {
			var g2 = math.BigInteger.nbi();
			z.sqrTo(g[1],g2);
			while(n <= km) {
				g[n] = math.BigInteger.nbi();
				z.mulTo(g2,g[n - 2],g[n]);
				n += 2;
			}
		}
		var j = e.t - 1;
		var w;
		var is1 = true;
		var r2 = math.BigInteger.nbi();
		var t;
		i = math.BigInteger.nbits(e.chunks[j]) - 1;
		while(j >= 0) {
			if(i >= k1) w = e.chunks[j] >> i - k1 & km; else {
				w = (e.chunks[j] & (1 << i + 1) - 1) << k1 - i;
				if(j > 0) w |= e.chunks[j - 1] >> math.BigInteger.DB + i - k1;
			}
			n = k;
			while((w & 1) == 0) {
				w >>= 1;
				--n;
			}
			if((i -= n) < 0) {
				i += math.BigInteger.DB;
				--j;
			}
			if(is1) {
				g[w].copyTo(r);
				is1 = false;
			} else {
				while(n > 1) {
					z.sqrTo(r,r2);
					z.sqrTo(r2,r);
					n -= 2;
				}
				if(n > 0) z.sqrTo(r,r2); else {
					t = r;
					r = r2;
					r2 = t;
				}
				z.mulTo(r2,g[w],r);
			}
			var chnk = e.chunks[j];
			while(j >= 0 && (chnk & 1 << i) == 0) {
				z.sqrTo(r,r2);
				t = r;
				r = r2;
				r2 = t;
				if(--i < 0) {
					i = math.BigInteger.DB - 1;
					--j;
				}
				chnk = e.chunks[j];
			}
		}
		return z.revert(r);
	}
	,modPowInt: function(e,m) {
		if(m == null) throw "m is null";
		var z;
		if(e < 256 || m.isEven()) z = new math.reduction.Classic(m); else z = new math.reduction.Montgomery(m);
		return this.exp(e,z);
	}
	,mul: function(a) {
		var r = math.BigInteger.nbi();
		this.multiplyTo(a,r);
		return r;
	}
	,neg: function() {
		var r = math.BigInteger.nbi();
		math.BigInteger.getZERO().subTo(this,r);
		return r;
	}
	,sub: function(a) {
		var r = math.BigInteger.nbi();
		this.subTo(a,r);
		return r;
	}
	,bitLength: function() {
		if(this.t <= 0) return 0;
		return math.BigInteger.DB * (this.t - 1) + math.BigInteger.nbits(this.chunks[this.t - 1] ^ this.sign & math.BigInteger.DM);
	}
	,addTo: function(a,r) {
		var i = 0;
		var c = 0;
		var m = Math.min(a.t,this.t) | 0;
		while(i < m) {
			c += this.chunks[i] + a.chunks[i];
			r.chunks[i] = c & math.BigInteger.DM;
			i++;
			c >>= math.BigInteger.DB;
		}
		if(a.t < this.t) {
			c += a.sign;
			while(i < this.t) {
				c += this.chunks[i];
				r.chunks[i] = c & math.BigInteger.DM;
				i++;
				c >>= math.BigInteger.DB;
			}
			c += this.sign;
		} else {
			c += this.sign;
			while(i < a.t) {
				c += a.chunks[i];
				r.chunks[i] = c & math.BigInteger.DM;
				i++;
				c >>= math.BigInteger.DB;
			}
			c += a.sign;
		}
		r.sign = c < 0?-1:0;
		if(c > 0) {
			r.chunks[i] = c;
			i++;
		} else if(c < -1) {
			r.chunks[i] = math.BigInteger.DV + c;
			i++;
		}
		r.t = i;
		r.clamp();
	}
	,copyTo: function(r) {
		var _g1 = 0, _g = this.chunks.length;
		while(_g1 < _g) {
			var i = _g1++;
			r.chunks[i] = this.chunks[i];
		}
		r.t = this.t;
		r.sign = this.sign;
	}
	,divRemTo: function(m,q,r) {
		var pm = m.abs();
		if(pm.t <= 0) return;
		var pt = this.abs();
		if(pt.t < pm.t) {
			if(q != null) q.fromInt(0);
			if(r != null) this.copyTo(r);
			return;
		}
		if(r == null) r = math.BigInteger.nbi();
		var y = math.BigInteger.nbi();
		var ts = this.sign;
		var ms = m.sign;
		var nsh = math.BigInteger.DB - math.BigInteger.nbits(pm.chunks[pm.t - 1]);
		if(nsh > 0) {
			pt.lShiftTo(nsh,r);
			pm.lShiftTo(nsh,y);
		} else {
			pt.copyTo(r);
			pm.copyTo(y);
		}
		var ys = y.t;
		var y0 = y.chunks[ys - 1];
		if(y0 == 0) return;
		var yt = y0 * 1.0 * ((1 << math.BigInteger.F1) * 1.0) + (ys > 1?(y.chunks[ys - 2] >> math.BigInteger.F2) * 1.0:0.0);
		var d1 = math.BigInteger.FV / yt;
		var d2 = (1 << math.BigInteger.F1) * 1.0 / yt;
		var e = (1 << math.BigInteger.F2) * 1.0;
		var i = r.t;
		var j = i - ys;
		var t = q == null?math.BigInteger.nbi():q;
		y.dlShiftTo(j,t);
		if(r.compare(t) >= 0) {
			r.chunks[r.t] = 1;
			r.t++;
			r.subTo(t,r);
		}
		math.BigInteger.getONE().dlShiftTo(ys,t);
		t.subTo(y,y);
		while(y.t < ys) {
			y.chunks[y.t] = 0;
			y.t++;
		}
		while(--j >= 0) {
			var qd;
			if(r.chunks[--i] == y0) qd = math.BigInteger.DM; else qd = Math.floor(r.chunks[i] * 1.0 * d1 + (r.chunks[i - 1] * 1.0 + e) * d2);
			r.chunks[i] += y.am(0,qd,r,j,0,ys);
			if(r.chunks[i] < qd) {
				y.dlShiftTo(j,t);
				r.subTo(t,r);
				while(r.chunks[i] < --qd) r.subTo(t,r);
			}
		}
		if(q != null) {
			r.drShiftTo(ys,q);
			if(ts != ms) math.BigInteger.getZERO().subTo(q,q);
		}
		r.t = ys;
		r.clamp();
		if(nsh > 0) r.rShiftTo(nsh,r);
		if(ts < 0) math.BigInteger.getZERO().subTo(r,r);
	}
	,multiplyLowerTo: function(a,n,r) {
		var i = Math.min(this.t + a.t,n) | 0;
		r.sign = 0;
		r.t = i;
		while(i > 0) {
			--i;
			r.chunks[i] = 0;
		}
		var j = r.t - this.t;
		while(i < j) {
			r.chunks[i + this.t] = this.am(0,a.chunks[i],r,i,0,this.t);
			++i;
		}
		j = Math.min(a.t,n) | 0;
		while(i < j) {
			this.am(0,a.chunks[i],r,i,0,n - i);
			++i;
		}
		r.clamp();
	}
	,multiplyTo: function(a,r) {
		var x = this.abs(), y = a.abs();
		var i = x.t;
		r.t = i + y.t;
		while(--i >= 0) r.chunks[i] = 0;
		var _g1 = 0, _g = y.t;
		while(_g1 < _g) {
			var i1 = _g1++;
			r.chunks[i1 + x.t] = x.am(0,y.chunks[i1],r,i1,0,x.t);
		}
		r.sign = 0;
		r.clamp();
		if(this.sign != a.sign) math.BigInteger.getZERO().subTo(r,r);
	}
	,multiplyUpperTo: function(a,n,r) {
		--n;
		var i = r.t = this.t + a.t - n;
		r.sign = 0;
		while(--i >= 0) r.chunks[i] = 0;
		i = Math.max(n - this.t,0) | 0;
		var _g1 = i, _g = a.t;
		while(_g1 < _g) {
			var x = _g1++;
			r.chunks[this.t + x - n] = this.am(n - x,a.chunks[x],r,0,0,this.t + x - n);
		}
		r.clamp();
		r.drShiftTo(1,r);
	}
	,squareTo: function(r) {
		if(r == this) throw "can not squareTo self";
		var x = this.abs();
		var i = r.t = 2 * x.t;
		while(--i >= 0) r.chunks[i] = 0;
		i = 0;
		while(i < x.t - 1) {
			var c = x.am(i,x.chunks[i],r,2 * i,0,1);
			if((r.chunks[i + x.t] += x.am(i + 1,2 * x.chunks[i],r,2 * i + 1,c,x.t - i - 1)) >= math.BigInteger.DV) {
				r.chunks[i + x.t] -= math.BigInteger.DV;
				r.chunks[i + x.t + 1] = 1;
			}
			i++;
		}
		if(r.t > 0) {
			var rv = x.am(i,x.chunks[i],r,2 * i,0,1);
			r.chunks[r.t - 1] += rv;
		}
		r.sign = 0;
		r.clamp();
	}
	,subTo: function(a,r) {
		var i = 0;
		var c = 0;
		var m = Math.min(a.t,this.t) | 0;
		while(i < m) {
			c += this.chunks[i] - a.chunks[i];
			r.chunks[i] = c & math.BigInteger.DM;
			i++;
			c >>= math.BigInteger.DB;
		}
		if(a.t < this.t) {
			c -= a.sign;
			while(i < this.t) {
				c += this.chunks[i];
				r.chunks[i] = c & math.BigInteger.DM;
				i++;
				c >>= math.BigInteger.DB;
			}
			c += this.sign;
		} else {
			c += this.sign;
			while(i < a.t) {
				c -= a.chunks[i];
				r.chunks[i] = c & math.BigInteger.DM;
				i++;
				c >>= math.BigInteger.DB;
			}
			c -= a.sign;
		}
		r.sign = c < 0?-1:0;
		if(c < -1) {
			r.chunks[i] = math.BigInteger.DV + c;
			i++;
		} else if(c > 0) {
			r.chunks[i] = c;
			i++;
		}
		r.t = i;
		r.clamp();
	}
	,clamp: function() {
		var c = this.sign & math.BigInteger.DM;
		while(this.t > 0 && this.chunks[this.t - 1] == c) --this.t;
	}
	,padTo: function(n) {
		while(this.t < n) {
			this.chunks[this.t] = 0;
			this.t++;
		}
	}
	,sigNum: function() {
		if(this.sign < 0) return -1; else if(this.t <= 0 || this.t == 1 && this.chunks[0] <= 0) return 0; else return 1;
	}
	,dAddOffset: function(n,w) {
		while(this.t <= w) {
			this.chunks[this.t] = 0;
			this.t++;
		}
		this.chunks[w] += n;
		while(this.chunks[w] >= math.BigInteger.DV) {
			this.chunks[w] -= math.BigInteger.DV;
			if(++w >= this.t) {
				this.chunks[this.t] = 0;
				this.t++;
			}
			++this.chunks[w];
		}
	}
	,dlShiftTo: function(n,r) {
		if(r == null) return;
		var i = this.t - 1;
		while(i >= 0) {
			r.chunks[i + n] = this.chunks[i];
			i--;
		}
		i = n - 1;
		while(i >= 0) {
			r.chunks[i] = 0;
			i--;
		}
		r.t = this.t + n;
		r.sign = this.sign;
	}
	,drShiftTo: function(n,r) {
		if(r == null) return;
		var i = n;
		while(i < this.t) {
			r.chunks[i - n] = this.chunks[i];
			i++;
		}
		r.t = Math.max(this.t - n,0) | 0;
		r.sign = this.sign;
	}
	,invDigit: function() {
		if(this.t < 1) return 0;
		var x = this.chunks[0];
		if((x & 1) == 0) return 0;
		var y = x & 3;
		y = y * (2 - (x & 15) * y) & 15;
		y = y * (2 - (x & 255) * y) & 255;
		y = y * (2 - ((x & 65535) * y & 65535)) & 65535;
		y = y * (2 - x * y % math.BigInteger.DV) % math.BigInteger.DV;
		return y > 0?math.BigInteger.DV - y:-y;
	}
	,dMultiply: function(n) {
		this.chunks[this.t] = this.am(0,n - 1,this,0,0,this.t);
		this.t++;
		this.clamp();
	}
	,exp: function(e,z) {
		if(e > 2147483647 || e < 1) return math.BigInteger.getONE();
		var r = math.BigInteger.nbi();
		var r2 = math.BigInteger.nbi();
		var g = z.convert(this);
		var i = math.BigInteger.nbits(e) - 1;
		g.copyTo(r);
		while(--i >= 0) {
			z.sqrTo(r,r2);
			if((e & 1 << i) > 0) z.mulTo(r2,g,r); else {
				var t = r;
				r = r2;
				r2 = t;
			}
		}
		return z.revert(r);
	}
	,lShiftTo: function(n,r) {
		var bs = n % math.BigInteger.DB;
		var cbs = math.BigInteger.DB - bs;
		var bm = (1 << cbs) - 1;
		var ds = Math.floor(n / math.BigInteger.DB), c = this.sign << bs & math.BigInteger.DM, i;
		var i1 = this.t - 1;
		while(i1 >= 0) {
			r.chunks[i1 + ds + 1] = this.chunks[i1] >> cbs | c;
			c = (this.chunks[i1] & bm) << bs;
			i1--;
		}
		i1 = ds - 1;
		while(i1 >= 0) {
			r.chunks[i1] = 0;
			i1--;
		}
		r.chunks[ds] = c;
		r.t = this.t + ds + 1;
		r.sign = this.sign;
		r.clamp();
	}
	,rShiftTo: function(n,r) {
		r.sign = this.sign;
		var ds = Math.floor(n / math.BigInteger.DB);
		if(ds >= this.t) {
			r.t = 0;
			return;
		}
		var bs = n % math.BigInteger.DB;
		var cbs = math.BigInteger.DB - bs;
		var bm = (1 << bs) - 1;
		r.chunks[0] = this.chunks[ds] >> bs;
		var _g1 = ds + 1, _g = this.t;
		while(_g1 < _g) {
			var i = _g1++;
			r.chunks[i - ds - 1] |= (this.chunks[i] & bm) << cbs;
			r.chunks[i - ds] = this.chunks[i] >> bs;
		}
		if(bs > 0) r.chunks[this.t - ds - 1] |= (this.sign & bm) << cbs;
		r.t = this.t - ds;
		r.clamp();
	}
	,am1: function(i,x,w,j,c,n) {
		while(--n >= 0) {
			var v = x * this.chunks[i] + w.chunks[j] + c;
			i++;
			c = Math.floor(v / 67108864);
			w.chunks[j] = v & 67108863;
			j++;
		}
		return c;
	}
	,am2: function(i,x,w,j,c,n) {
		var xl = x & 32767;
		var xh = x >> 15;
		while(--n >= 0) {
			var l = this.chunks[i] & 32767;
			var h = this.chunks[i] >> 15;
			i++;
			var m = xh * l + h * xl;
			l = xl * l + ((m & 32767) << 15) + w.chunks[j] + (c & 1073741823);
			c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
			w.chunks[j] = l & 1073741823;
			j++;
		}
		return c;
	}
	,am3: function(i,x,w,j,c,n) {
		var xl = x & 16383;
		var xh = x >> 14;
		while(--n >= 0) {
			var l = this.chunks[i] & 16383;
			var h = this.chunks[i] >> 14;
			i++;
			var m = xh * l + h * xl;
			l = xl * l + ((m & 16383) << 14) + w.chunks[j] + c;
			c = (l >> 28) + (m >> 14) + xh * h;
			w.chunks[j] = l & 268435455;
			j++;
		}
		return c;
	}
	,__class__: math.BigInteger
}
math.prng = {}
math.prng.IPrng = function() { }
$hxClasses["math.prng.IPrng"] = math.prng.IPrng;
math.prng.IPrng.__name__ = ["math","prng","IPrng"];
math.prng.IPrng.prototype = {
	size: null
	,init: null
	,next: null
	,toString: null
	,__class__: math.prng.IPrng
}
math.reduction = {}
math.reduction.ModularReduction = function() { }
$hxClasses["math.reduction.ModularReduction"] = math.reduction.ModularReduction;
math.reduction.ModularReduction.__name__ = ["math","reduction","ModularReduction"];
math.reduction.ModularReduction.prototype = {
	convert: null
	,revert: null
	,reduce: null
	,mulTo: null
	,sqrTo: null
	,__class__: math.reduction.ModularReduction
}
math.reduction.Barrett = function(m) {
	this.r2 = math.BigInteger.nbi();
	this.q3 = math.BigInteger.nbi();
	math.BigInteger.getONE().dlShiftTo(2 * m.t,this.r2);
	this.mu = this.r2.div(m);
	this.m = m;
};
$hxClasses["math.reduction.Barrett"] = math.reduction.Barrett;
math.reduction.Barrett.__name__ = ["math","reduction","Barrett"];
math.reduction.Barrett.__interfaces__ = [math.reduction.ModularReduction];
math.reduction.Barrett.prototype = {
	m: null
	,mu: null
	,r2: null
	,q3: null
	,convert: function(x) {
		if(x.sign < 0 || x.t > 2 * this.m.t) return x.mod(this.m); else if(x.compare(this.m) < 0) return x; else {
			var r = math.BigInteger.nbi();
			x.copyTo(r);
			this.reduce(r);
			return r;
		}
	}
	,revert: function(x) {
		return x;
	}
	,reduce: function(x) {
		x.drShiftTo(this.m.t - 1,this.r2);
		if(x.t > this.m.t + 1) {
			x.t = this.m.t + 1;
			x.clamp();
		}
		this.mu.multiplyUpperTo(this.r2,this.m.t + 1,this.q3);
		this.m.multiplyLowerTo(this.q3,this.m.t + 1,this.r2);
		while(x.compare(this.r2) < 0) x.dAddOffset(1,this.m.t + 1);
		x.subTo(this.r2,x);
		while(x.compare(this.m) >= 0) x.subTo(this.m,x);
	}
	,sqrTo: function(x,r) {
		x.squareTo(r);
		this.reduce(r);
	}
	,mulTo: function(x,y,r) {
		x.multiplyTo(y,r);
		this.reduce(r);
	}
	,__class__: math.reduction.Barrett
}
math.reduction.Classic = function(m) {
	this.m = m;
};
$hxClasses["math.reduction.Classic"] = math.reduction.Classic;
math.reduction.Classic.__name__ = ["math","reduction","Classic"];
math.reduction.Classic.__interfaces__ = [math.reduction.ModularReduction];
math.reduction.Classic.prototype = {
	m: null
	,convert: function(x) {
		if(x.sign < 0 || x.compare(this.m) >= 0) return x.mod(this.m);
		return x;
	}
	,revert: function(x) {
		return x;
	}
	,reduce: function(x) {
		x.divRemTo(this.m,null,x);
	}
	,mulTo: function(x,y,r) {
		x.multiplyTo(y,r);
		this.reduce(r);
	}
	,sqrTo: function(x,r) {
		x.squareTo(r);
		this.reduce(r);
	}
	,__class__: math.reduction.Classic
}
math.reduction.Montgomery = function(x) {
	this.m = x;
	this.mp = this.m.invDigit();
	this.mpl = this.mp & 32767;
	this.mph = this.mp >> 15;
	this.um = (1 << math.BigInteger.DB - 15) - 1;
	this.mt2 = 2 * this.m.t;
};
$hxClasses["math.reduction.Montgomery"] = math.reduction.Montgomery;
math.reduction.Montgomery.__name__ = ["math","reduction","Montgomery"];
math.reduction.Montgomery.__interfaces__ = [math.reduction.ModularReduction];
math.reduction.Montgomery.prototype = {
	m: null
	,mt2: null
	,mp: null
	,mpl: null
	,mph: null
	,um: null
	,convert: function(x) {
		var r = math.BigInteger.nbi();
		x.abs().dlShiftTo(this.m.t,r);
		r.divRemTo(this.m,null,r);
		if(x.sign < 0 && r.compare(math.BigInteger.getZERO()) > 0) this.m.subTo(r,r);
		return r;
	}
	,revert: function(x) {
		var r = math.BigInteger.nbi();
		x.copyTo(r);
		this.reduce(r);
		return r;
	}
	,reduce: function(x) {
		x.padTo(this.mt2);
		var i = 0;
		while(i < this.m.t) {
			var j = x.chunks[i] & 32767;
			var u0 = j * this.mpl + ((j * this.mph + (x.chunks[i] >> 15) * this.mpl & this.um) << 15) & math.BigInteger.DM;
			j = i + this.m.t;
			x.chunks[j] += this.m.am(0,u0,x,i,0,this.m.t);
			while(x.chunks[j] >= math.BigInteger.DV) {
				x.chunks[j] -= math.BigInteger.DV;
				if(x.chunks.length < j + 2) x.chunks[j + 1] = 0;
				x.chunks[++j]++;
			}
			i++;
		}
		x.clamp();
		x.drShiftTo(this.m.t,x);
		if(x.compare(this.m) >= 0) x.subTo(this.m,x);
	}
	,mulTo: function(x,y,r) {
		x.multiplyTo(y,r);
		this.reduce(r);
	}
	,sqrTo: function(x,r) {
		x.squareTo(r);
		this.reduce(r);
	}
	,__class__: math.reduction.Montgomery
}
var rg = {}
rg.RGConst = function() { }
$hxClasses["rg.RGConst"] = rg.RGConst;
rg.RGConst.__name__ = ["rg","RGConst"];
rg.RGConst.prototype = {
	__class__: rg.RGConst
}
rg.app = {}
rg.app.charts = {}
rg.app.charts.App = function(notifier) {
	this.layouts = new Hash();
	this.globalNotifier = notifier;
};
$hxClasses["rg.app.charts.App"] = rg.app.charts.App;
rg.app.charts.App.__name__ = ["rg","app","charts","App"];
rg.app.charts.App.nextid = function() {
	return ":RGVIZ-" + ++rg.app.charts.App.lastid;
}
rg.app.charts.App.supportsSvg = function() {
	return !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;
}
rg.app.charts.App.prototype = {
	layouts: null
	,globalNotifier: null
	,visualization: function(el,jsoptions) {
		var me = this;
		rg.app.charts.App.chartsCounter++;
		var node = el.node(), id = node.id;
		if(null == id) node.id = id = rg.app.charts.App.nextid();
		var params = rg.info.Info.feed(new rg.info.InfoVisualizationOption(),jsoptions), loader = new rg.data.DataLoader(rg.info.Info.feed(new rg.info.InfoDataSource(),jsoptions).loader), variables = new rg.factory.FactoryVariable().createVariables(params.variables), general = rg.info.Info.feed(new rg.info.InfoGeneral(),params.options), infoviz = rg.info.Info.feed(new rg.info.InfoVisualizationType(),params.options), uselegacy = !rg.app.charts.App.supportsSvg() || general.forcelegacy;
		var visualization = null;
		params.options.marginheight = 29;
		var ivariables = Arrays.filter(variables,function(v) {
			return Std["is"](v,rg.data.VariableIndependent);
		});
		var dvariables = Arrays.filter(variables,function(v) {
			return Std["is"](v,rg.data.VariableDependent);
		});
		loader.onLoad.addOnce(function(data) {
			new rg.data.IndependentVariableProcessor().process(data,ivariables);
			new rg.data.DependentVariableProcessor().process(data,dvariables);
		});
		if(!uselegacy) {
			switch( (rg.info.Info.feed(new rg.info.InfoDomType(),params.options).kind)[1] ) {
			case 1:
				var layout = this.getLayout(id,params.options,el,infoviz.replace);
				visualization = new rg.factory.FactorySvgVisualization().create(infoviz.type,layout,params.options);
				break;
			case 0:
				if(infoviz.replace) el.selectAll("*").remove();
				visualization = new rg.factory.FactoryHtmlVisualization().create(infoviz.type,el,params.options);
				break;
			}
			visualization.setVariables(variables,ivariables,dvariables);
			visualization.init();
			if(null != general.ready) visualization.addReady(general.ready);
			loader.onLoad.addOnce(function(datapoints) {
				visualization.feedData(datapoints);
			});
		}
		var brandPadding = 0;
		var download = rg.info.Info.feed(new rg.info.InfoDownload(),jsoptions.options.download);
		if(uselegacy) {
			var legacy = new rg.interactive.RGLegacyRenderer(el,download.legacyservice);
			loader.onLoad.addOnce(function(data) {
				jsoptions.datapoints = data;
				legacy.display(jsoptions);
			});
		}
		if(!uselegacy && (null != download.position || null != download.handler)) {
			var downloader = new rg.interactive.RGDownloader(visualization.container,download.service);
			if(null != download.handler) visualization.addReadyOnce(function() {
				download.handler(downloader.download.$bind(downloader));
			}); else visualization.addReadyOnce(function() {
				var widget = new rg.html.widget.DownloaderMenu(downloader.download.$bind(downloader),download.position,download.formats,visualization.container);
				brandPadding = 24;
			});
		}
		if(!uselegacy) {
			if(!jsoptions.options.a) visualization.addReadyOnce(function() {
				var widget = rg.html.widget.Logo.createLogo(visualization.container,brandPadding);
			});
			visualization.addReadyOnce(function() {
				rg.app.charts.App.chartsLoaded++;
				if(rg.app.charts.App.chartsLoaded == rg.app.charts.App.chartsCounter) me.globalNotifier.dispatch();
			});
		}
		haxe.Timer.delay(loader.load.$bind(loader),0);
		return visualization;
	}
	,getLayout: function(id,options,container,replace) {
		var old = this.layouts.get(id);
		if(null != old) {
			if(replace) old.destroy(); else return old;
		}
		var info = rg.info.Info.feed(new rg.info.InfoLayout(),options), layout = new rg.factory.FactoryLayout().create(info,options.marginheight,container);
		this.layouts.set(id,layout);
		return layout;
	}
	,__class__: rg.app.charts.App
}
rg.app.charts.JSBridge = function() { }
$hxClasses["rg.app.charts.JSBridge"] = rg.app.charts.JSBridge;
rg.app.charts.JSBridge.__name__ = ["rg","app","charts","JSBridge"];
rg.app.charts.JSBridge.log = function(msg) {
	var c = (window.console && window.console.warn) || alert;
	c(msg);
}
rg.app.charts.JSBridge.main = function() {
	var r = (typeof ReportGrid == 'undefined') ? (window['ReportGrid'] = {}) : ReportGrid;
	var globalNotifier = new hxevents.Notifier();
	var globalReady = false;
	globalNotifier.addOnce(function() {
		globalReady = true;
	});
	r.charts = { ready : function(handler) {
		if(globalReady) handler(); else globalNotifier.add(handler);
	}};
	var app = new rg.app.charts.App(globalNotifier);
	r.chart = function(el,options,type) {
		var copt = rg.app.charts.JSBridge.chartopt(options,type);
		copt.options.a = false;
		rg.app.charts.MVPOptions.complete(copt,function(opt) {
			try {
				app.visualization(rg.app.charts.JSBridge.select(el),opt);
			} catch( $e0 ) {
				if( js.Boot.__instanceof($e0,thx.error.Error) ) {
					var e = $e0;
					rg.app.charts.JSBridge.log(e.toString());
				} else {
				var e = $e0;
				rg.app.charts.JSBridge.log(Std.string(e));
				}
			}
		});
	};
	r.barChart = function(el,options) {
		return r.chart(el,options,"barchart");
	};
	r.funnelChart = function(el,options) {
		return r.chart(el,options,"funnelchart");
	};
	r.geo = function(el,options) {
		return r.chart(el,options,"geo");
	};
	r.heatGrid = function(el,options) {
		return r.chart(el,options,"heatgrid");
	};
	r.leaderBoard = function(el,options) {
		return r.chart(el,options,"leaderboard");
	};
	r.lineChart = function(el,options) {
		return r.chart(el,options,"linechart");
	};
	r.pieChart = function(el,options) {
		return r.chart(el,options,"piechart");
	};
	r.pivotTable = function(el,options) {
		return r.chart(el,options,"pivottable");
	};
	r.sankey = function(el,options) {
		return r.chart(el,options,"sankey");
	};
	r.scatterGraph = function(el,options) {
		return r.chart(el,options,"scattergraph");
	};
	r.streamGraph = function(el,options) {
		return r.chart(el,options,"streamgraph");
	};
	r.parseQueryParameters = rg.util.Urls.parseQueryParameters;
	r.findScript = rg.util.Js.findScript;
	r.format = Dynamics.format;
	r.compare = Dynamics.compare;
	r.dump = Dynamics.string;
	var scache = rg.svg.util.SymbolCache.cache;
	r.symbol = function(type,size) {
		return scache.get(type,null == size?100:size);
	};
	r.date = { range : function(a,b,p) {
		if(Std["is"](a,String)) a = thx.date.DateParser.parse(a);
		if(null == a) a = rg.util.Periodicity.defaultRange(p)[0];
		if(Std["is"](a,Date)) a = a.getTime();
		if(Std["is"](b,String)) b = thx.date.DateParser.parse(b);
		if(null == b) b = rg.util.Periodicity.defaultRange(p)[1];
		if(Std["is"](b,Date)) b = b.getTime();
		return rg.util.Periodicity.range(a,b,p);
	}, formatPeriodicity : function(date,periodicity) {
		var d = Std["is"](date,Date)?date.getTime():Std["is"](date,Float)?date:thx.date.DateParser.parse(date).getTime();
		return rg.util.Periodicity.format(periodicity,d);
	}, parse : thx.date.DateParser.parse, snap : Dates.snap};
	r.humanize = function(v) {
		if(Std["is"](v,String) && v.indexOf("time:") >= 0) return v.substr(v.indexOf("time:") + "time:".length);
		return rg.util.RGStrings.humanize(v);
	};
	var rand = new thx.math.Random(666);
	r.math = { setRandomSeed : function(s) {
		rand = new thx.math.Random(s);
	}, random : function() {
		return ((rand.seed = rand.seed * 16807 % 2147483647) & 1073741823) / 1073741823.0;
	}};
	r.query = null != r.query?r.query:rg.app.charts.JSBridge.createQuery();
	r.info = null != r.info?r.info:{ };
	r.info.charts = { version : "1.4.26.8324"};
}
rg.app.charts.JSBridge.createQuery = function() {
	var inst = rg.query.Query.create();
	var query = { };
	var _g = 0, _g1 = Type.getInstanceFields(Type.getClass(inst));
	while(_g < _g1.length) {
		var field = [_g1[_g]];
		++_g;
		if(field[0].substr(0,1) == "_" || !Reflect.isFunction(Reflect.field(inst,field[0]))) continue;
		query[field[0]] = (function(field) {
			return function() {
				var ob = rg.query.Query.create(), f = Reflect.field(ob,field[0]);
				return f.apply(ob,arguments);
			};
		})(field);
	}
	return query;
}
rg.app.charts.JSBridge.select = function(el) {
	var s = Std["is"](el,String)?dhx.Dom.select(el):dhx.Dom.selectNode(el);
	if(s.empty()) throw new thx.error.Error("invalid container '{0}'",el,null,{ fileName : "JSBridge.hx", lineNumber : 196, className : "rg.app.charts.JSBridge", methodName : "select"});
	return s;
}
rg.app.charts.JSBridge.opt = function(ob) {
	return null == ob?{ }:Objects.clone(ob);
}
rg.app.charts.JSBridge.chartopt = function(ob,viz) {
	ob = null == ob?{ }:Objects.clone(ob);
	ob.options = rg.app.charts.JSBridge.opt(ob.options);
	ob.options.visualization = null != viz?viz:ob.options.visualization;
	return ob;
}
rg.app.charts.JSBridge.prototype = {
	__class__: rg.app.charts.JSBridge
}
rg.app.charts.MVPOptions = function() { }
$hxClasses["rg.app.charts.MVPOptions"] = rg.app.charts.MVPOptions;
rg.app.charts.MVPOptions.__name__ = ["rg","app","charts","MVPOptions"];
rg.app.charts.MVPOptions.a1 = function(params,handler) {
	var authcode = ReportGrid.authCode, authorized = false;
	if(null == authcode) {
		var script = rg.util.Js.findScript("reportgrid-charts.js");
		var args = rg.util.Urls.parseQueryParameters(script.src);
		authcode = Reflect.field(args,"authCode");
	}
	if(null != authcode) {
		var auth = new rg.util.Auth(authcode), hosts = [], host = js.Lib.window.location.hostname;
		if(new EReg("^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$","").match(host)) hosts.push(host); else {
			var parts = host.split(".");
			if(parts.length == 3 && parts[0] == "www") parts.shift();
			hosts.push(parts.join("."));
			while(parts.length > 2) parts.shift();
			hosts.push("*." + parts.join("."));
		}
		authorized = auth.authorizeMany(hosts);
	} else authorized = rg.html.widget.Logo.pageIsBranded();
	rg.app.charts.MVPOptions.a1 = function(params1,handler1) {
		params1.options.a = authorized;
		handler1(params1);
	};
	rg.app.charts.MVPOptions.a1(params,handler);
}
rg.app.charts.MVPOptions.a2 = function(params,handler) {
	var changeAndToggle = function(auth) {
		if(null == auth) rg.app.charts.MVPOptions.a2 = function(params1,handler1) {
			handler1(params1);
		}; else rg.app.charts.MVPOptions.a2 = function(params1,handler1) {
			params1.options.a = auth;
			handler1(params1);
		};
		rg.app.charts.MVPOptions.a2(params,handler);
	};
	var api = ReportGrid.token;
	if(params.options.a || null == api) changeAndToggle(null); else api(function(result) {
		changeAndToggle((result.expires <= 0 || result.expires >= Date.now().getTime()) && result.permissions.read);
	},function(err) {
		changeAndToggle(null);
	});
}
rg.app.charts.MVPOptions.complete = function(parameters,handler) {
	var chain = new rg.util.ChainedExecutor(handler);
	if(null == parameters.options) parameters.options = { };
	var options = parameters.options;
	if(null != options.download && !Types.isAnonymous(options.download)) {
		var v = options.download;
		Reflect.deleteField(options,"download");
		if(v == true) options.download = { position : "auto"}; else if(Std["is"](v,String)) options.download = { position : v}; else throw new thx.error.Error("invalid value for download '{0}'",[v],null,{ fileName : "MVPOptions.hx", lineNumber : 118, className : "rg.app.charts.MVPOptions", methodName : "complete"});
	}
	if(null != options.map && Types.isAnonymous(options.map)) options.map = [options.map];
	chain.addAction(rg.app.charts.MVPOptions.a1);
	chain.addAction(rg.app.charts.MVPOptions.a2);
	chain.addAction(function(params,handler1) {
		var axes = params.axes, hasdependent = false;
		if(null == axes) axes = [];
		params.axes = axes = axes.map(function(v,_) {
			return Std["is"](v,String)?{ type : v}:v;
		});
		var _g1 = 0, _g = axes.length;
		while(_g1 < _g) {
			var i = _g1++;
			var variable = axes[i].variable;
			if(null == variable) axes[i].variable = !hasdependent && i == axes.length - 1?"dependent":"independent"; else if("dependent" == variable) hasdependent = true;
		}
		var _g = 0;
		while(_g < axes.length) {
			var axis = axes[_g];
			++_g;
			if(axis.variable == "dependent") {
			} else switch(params.options.visualization) {
			case "barchart":case "pivottable":
				if(null == axis.scalemode) axis.scalemode = "fit";
				break;
			}
		}
		handler1(params);
	});
	chain.addAction(function(params,handler1) {
		if(null == params.options.label) switch(params.options.visualization) {
		case "linechart":case "barchart":case "streamgraph":
			var type = params.axes[0].type;
			params.options.label = { datapointover : function(dp,stats) {
				return (null != params.options.segmenton?rg.util.Properties.formatValue(params.options.segmenton,dp) + ", ":"") + rg.util.Properties.formatValue(type,dp) + ": " + rg.util.Properties.formatValue(stats.type,dp);
			}};
			break;
		case "scattergraph":case "heatgrid":
			var type = params.axes[0].type;
			params.options.label = { datapointover : function(dp,stats) {
				return rg.util.Properties.formatValue(type,dp) + ": " + rg.util.Properties.formatValue(stats.type,dp);
			}};
			break;
		case "geo":
			var type = params.axes[0].type, maps = params.options.map;
			maps[maps.length - 1].label = { datapointover : function(dp,stats) {
				var v = rg.util.Properties.formatValue(type,dp);
				if(null == v) return null;
				return v + ": " + rg.util.Properties.formatValue(stats.type,dp);
			}};
			break;
		case "piechart":
			params.options.label = { datapoint : function(dp,stats) {
				var v = Reflect.field(dp,stats.type);
				return params.axes.length > 1?rg.util.Properties.formatValue(params.axes[0].type,dp):stats.tot != 0.0?Floats.format(Math.round(1000 * v / stats.tot) / 10,"P:1"):rg.util.RGStrings.humanize(v);
			}, datapointover : function(dp,stats) {
				var v = Reflect.field(dp,stats.type);
				return rg.util.RGStrings.humanize(stats.type) + ": " + rg.util.RGStrings.humanize(v) + (params.axes.length > 1 && stats.tot != 0.0?" (" + Floats.format(Math.round(1000 * v / stats.tot) / 10,"P:1") + ")":"");
			}};
			break;
		case "sankey":
			var axes = params.axes, type = axes[axes.length - 1].type;
			params.options.label = { datapointover : function(dp,stats) {
				var v = Reflect.field(dp,type);
				return rg.util.RGStrings.humanize(type) + ": " + rg.util.Properties.formatValue(type,dp) + "\n" + (stats.tot != 0.0?Floats.format(Math.round(1000 * v / stats.tot) / 10,"P:1"):rg.util.RGStrings.humanize(v));
			}, node : function(dp,stats) {
				return null != dp?dp.id:"";
			}, datapoint : function(dp,stats) {
				return rg.util.Properties.formatValue(type,dp) + "\n" + rg.util.RGStrings.humanize(type);
			}, edge : function(dp,stats) {
				return Floats.format(100 * dp.edgeweight / dp.nodeweight,"D:0") + "%";
			}, edgeover : function(dp,stats) {
				return Floats.format(dp.edgeweight,"D:0") + "\n" + Floats.format(100 * dp.edgeweight / dp.nodeweight,"D:0") + "%";
			}};
			break;
		}
		handler1(params);
	});
	chain.execute(parameters);
}
rg.app.charts.MVPOptions.prototype = {
	__class__: rg.app.charts.MVPOptions
}
rg.axis = {}
rg.axis.IAxis = function() { }
$hxClasses["rg.axis.IAxis"] = rg.axis.IAxis;
rg.axis.IAxis.__name__ = ["rg","axis","IAxis"];
rg.axis.IAxis.prototype = {
	scale: null
	,ticks: null
	,max: null
	,min: null
	,createStats: null
	,__class__: rg.axis.IAxis
}
rg.axis.IAxisDiscrete = function() { }
$hxClasses["rg.axis.IAxisDiscrete"] = rg.axis.IAxisDiscrete;
rg.axis.IAxisDiscrete.__name__ = ["rg","axis","IAxisDiscrete"];
rg.axis.IAxisDiscrete.__interfaces__ = [rg.axis.IAxis];
rg.axis.IAxisDiscrete.prototype = {
	scaleDistribution: null
	,range: null
	,__class__: rg.axis.IAxisDiscrete
	,__properties__: {set_scaleDistribution:"setScaleDistribution"}
}
rg.axis.IAxisOrdinal = function() { }
$hxClasses["rg.axis.IAxisOrdinal"] = rg.axis.IAxisOrdinal;
rg.axis.IAxisOrdinal.__name__ = ["rg","axis","IAxisOrdinal"];
rg.axis.IAxisOrdinal.__interfaces__ = [rg.axis.IAxisDiscrete];
rg.axis.IAxisOrdinal.prototype = {
	first: null
	,last: null
	,allTicks: null
	,values: null
	,__class__: rg.axis.IAxisOrdinal
}
rg.axis.AxisOrdinal = function() {
	this.setScaleDistribution(rg.axis.ScaleDistribution.ScaleFit);
};
$hxClasses["rg.axis.AxisOrdinal"] = rg.axis.AxisOrdinal;
rg.axis.AxisOrdinal.__name__ = ["rg","axis","AxisOrdinal"];
rg.axis.AxisOrdinal.__interfaces__ = [rg.axis.IAxisOrdinal];
rg.axis.AxisOrdinal.prototype = {
	scaleDistribution: null
	,toTickmark: function(start,end,value) {
		var r = this.range(start,end);
		return new rg.axis.TickmarkOrdinal(r.indexOf(value),r,null,this.scaleDistribution);
	}
	,ticks: function(start,end,upperBound) {
		if(0 == upperBound) return [];
		var ticks = rg.axis.TickmarkOrdinal.fromArray(this.range(start,end),this.scaleDistribution);
		return rg.axis.Tickmarks.bound(ticks,upperBound);
	}
	,range: function(start,end) {
		var values = this.values(), s = values.indexOf(start), e = values.indexOf(end);
		if(s < 0) throw new thx.error.Error("the start bound '{0}' is not part of the acceptable values {1}",[start,values],null,{ fileName : "AxisOrdinal.hx", lineNumber : 41, className : "rg.axis.AxisOrdinal", methodName : "range"});
		if(e < 0) throw new thx.error.Error("the end bound '{0}' is not part of the acceptable values {1}",[end,values],null,{ fileName : "AxisOrdinal.hx", lineNumber : 43, className : "rg.axis.AxisOrdinal", methodName : "range"});
		return values.slice(s,e + 1);
	}
	,scale: function(start,end,v) {
		var values = this.values(), s = values.indexOf(start), e = values.indexOf(end), p = values.indexOf(v);
		if(s < 0) throw new thx.error.Error("the start bound '{0}' is not part of the values {1}",[start,values],null,{ fileName : "AxisOrdinal.hx", lineNumber : 54, className : "rg.axis.AxisOrdinal", methodName : "scale"});
		if(e < 0) throw new thx.error.Error("the end bound '{0}' is not part of the values {1}",[end,values],null,{ fileName : "AxisOrdinal.hx", lineNumber : 56, className : "rg.axis.AxisOrdinal", methodName : "scale"});
		if(p < 0) throw new thx.error.Error("the value '{0}' is not part of the values {1}",[v,values],null,{ fileName : "AxisOrdinal.hx", lineNumber : 58, className : "rg.axis.AxisOrdinal", methodName : "scale"});
		return rg.axis.ScaleDistributions.distribute(this.scaleDistribution,p - s,e - s + 1);
	}
	,first: function() {
		return this.values()[0];
	}
	,last: function() {
		return Arrays.last(this.values());
	}
	,values: function() {
		return (function($this) {
			var $r;
			throw new thx.error.AbstractMethod({ fileName : "AxisOrdinal.hx", lineNumber : 64, className : "rg.axis.AxisOrdinal", methodName : "values"});
			return $r;
		}(this));
	}
	,allTicks: function() {
		var me = this;
		var f = this.first(), l = this.last();
		return this.range(f,l).map(function(d,i) {
			return me.toTickmark(f,l,d);
		});
	}
	,setScaleDistribution: function(v) {
		return this.scaleDistribution = v;
	}
	,min: function(stats,meta) {
		return this.values()[0];
	}
	,max: function(stats,meta) {
		return Arrays.last(this.values());
	}
	,createStats: function(type) {
		return new rg.axis.Stats(type);
	}
	,__class__: rg.axis.AxisOrdinal
	,__properties__: {set_scaleDistribution:"setScaleDistribution"}
}
rg.axis.AxisOrdinalFixedValues = function(arr) {
	rg.axis.AxisOrdinal.call(this);
	this._values = arr;
};
$hxClasses["rg.axis.AxisOrdinalFixedValues"] = rg.axis.AxisOrdinalFixedValues;
rg.axis.AxisOrdinalFixedValues.__name__ = ["rg","axis","AxisOrdinalFixedValues"];
rg.axis.AxisOrdinalFixedValues.__super__ = rg.axis.AxisOrdinal;
rg.axis.AxisOrdinalFixedValues.prototype = $extend(rg.axis.AxisOrdinal.prototype,{
	_values: null
	,values: function() {
		return this._values;
	}
	,__class__: rg.axis.AxisOrdinalFixedValues
});
rg.axis.AxisGroupByTime = function(groupby) {
	rg.axis.AxisOrdinalFixedValues.call(this,rg.axis.AxisGroupByTime.valuesByGroup(groupby));
	this.groupBy = groupby;
};
$hxClasses["rg.axis.AxisGroupByTime"] = rg.axis.AxisGroupByTime;
rg.axis.AxisGroupByTime.__name__ = ["rg","axis","AxisGroupByTime"];
rg.axis.AxisGroupByTime.valuesByGroup = function(groupby) {
	return Ints.range(rg.axis.AxisGroupByTime.defaultMin(groupby),rg.axis.AxisGroupByTime.defaultMax(groupby) + 1);
}
rg.axis.AxisGroupByTime.defaultMin = function(periodicity) {
	switch(periodicity) {
	case "minute":case "hour":case "week":case "month":
		return 0;
	case "day":
		return 1;
	default:
		throw new thx.error.Error("invalid periodicity '{0}' for groupBy min",null,periodicity,{ fileName : "AxisGroupByTime.hx", lineNumber : 34, className : "rg.axis.AxisGroupByTime", methodName : "defaultMin"});
	}
}
rg.axis.AxisGroupByTime.defaultMax = function(periodicity) {
	switch(periodicity) {
	case "minute":
		return 59;
	case "hour":
		return 23;
	case "day":
		return 31;
	case "week":
		return 6;
	case "month":
		return 11;
	default:
		throw new thx.error.Error("invalid periodicity '{0}' for groupBy max",null,periodicity,{ fileName : "AxisGroupByTime.hx", lineNumber : 48, className : "rg.axis.AxisGroupByTime", methodName : "defaultMax"});
	}
}
rg.axis.AxisGroupByTime.__super__ = rg.axis.AxisOrdinalFixedValues;
rg.axis.AxisGroupByTime.prototype = $extend(rg.axis.AxisOrdinalFixedValues.prototype,{
	groupBy: null
	,__class__: rg.axis.AxisGroupByTime
});
rg.axis.AxisNumeric = function() {
};
$hxClasses["rg.axis.AxisNumeric"] = rg.axis.AxisNumeric;
rg.axis.AxisNumeric.__name__ = ["rg","axis","AxisNumeric"];
rg.axis.AxisNumeric.__interfaces__ = [rg.axis.IAxis];
rg.axis.AxisNumeric._step = function(span,m) {
	var step = Math.pow(10,Math.floor(Math.log(span / m) / 2.302585092994046)), err = m / span * step;
	if(err <= .15) step *= 10; else if(err <= .35) step *= 5; else if(err <= .75) step *= 2;
	return step;
}
rg.axis.AxisNumeric.nice = function(v) {
	return Math.pow(10,Math.round(Math.log(v) / 2.302585092994046) - 1);
}
rg.axis.AxisNumeric.niceMin = function(d,v) {
	var dv = Math.pow(10,Math.round(Math.log(d) / 2.302585092994046) - 1);
	return Math.floor(v / dv) * dv;
}
rg.axis.AxisNumeric.niceMax = function(d,v) {
	var dv = Math.pow(10,Math.round(Math.log(d) / 2.302585092994046) - 1);
	return Math.ceil(v / dv) * dv;
}
rg.axis.AxisNumeric.prototype = {
	scale: function(start,end,v) {
		if(start == end) return start;
		return (Floats.uninterpolatef(start,end))(v);
	}
	,ticks: function(start,end,maxTicks) {
		var span = end - start, step = 1.0, minors, majors;
		if(start % step == 0 && end % step == 0 && span < 10 && span >= step) {
			majors = Floats.range(start,end + step,step);
			minors = null;
		} else {
			var mM = 5, mm = 20, stepM = rg.axis.AxisNumeric._step(span,mM), stepm = rg.axis.AxisNumeric._step(span,mm);
			minors = Floats.range(start,end + stepM,stepm);
			majors = Floats.range(start,end * 1.0001,stepM);
		}
		return rg.axis.Tickmarks.bound(null == minors?majors.map(function(d,i) {
			return new rg.axis.Tickmark(d,true,(d - start) / (end - start));
		}):minors.map(function(d,i) {
			return new rg.axis.Tickmark(d,majors.remove(d),(d - start) / (end - start));
		}),maxTicks);
	}
	,min: function(stats,meta) {
		if(null != meta.min) return meta.min;
		var min = rg.axis.AxisNumeric.niceMin(stats.max - stats.min,stats.min);
		if(min < 0) return min; else return 0.0;
	}
	,max: function(stats,meta) {
		if(null != meta.max) return meta.max;
		var max = rg.axis.AxisNumeric.niceMax(stats.max - stats.min,stats.max);
		if(max > 0) return max; else return 0.0;
	}
	,createStats: function(type) {
		return new rg.axis.StatsNumeric(type);
	}
	,__class__: rg.axis.AxisNumeric
}
rg.axis.AxisOrdinalStats = function(variable) {
	rg.axis.AxisOrdinal.call(this);
	this.variable = variable;
};
$hxClasses["rg.axis.AxisOrdinalStats"] = rg.axis.AxisOrdinalStats;
rg.axis.AxisOrdinalStats.__name__ = ["rg","axis","AxisOrdinalStats"];
rg.axis.AxisOrdinalStats.__super__ = rg.axis.AxisOrdinal;
rg.axis.AxisOrdinalStats.prototype = $extend(rg.axis.AxisOrdinal.prototype,{
	variable: null
	,values: function() {
		return this.variable.stats.values;
	}
	,__class__: rg.axis.AxisOrdinalStats
});
rg.axis.AxisTime = function(periodicity) {
	this.periodicity = periodicity;
	this.setScaleDistribution(rg.axis.ScaleDistribution.ScaleFill);
};
$hxClasses["rg.axis.AxisTime"] = rg.axis.AxisTime;
rg.axis.AxisTime.__name__ = ["rg","axis","AxisTime"];
rg.axis.AxisTime.__interfaces__ = [rg.axis.IAxisDiscrete];
rg.axis.AxisTime.prototype = {
	periodicity: null
	,scaleDistribution: null
	,isMajor: function(units,value) {
		switch(this.periodicity) {
		case "day":
			if(units <= 31) return true;
			if(units < 121) {
				var d = Date.fromTime(value).getDate();
				return rg.util.Periodicity.firstInSeries("month",value) || rg.util.Periodicity.firstInSeries("week",value);
			}
			return rg.util.Periodicity.firstInSeries("month",value);
		case "week":
			if(units < 31) return true; else return Date.fromTime(value).getDate() <= 7;
			break;
		default:
			var series = Reflect.field(rg.axis.AxisTime.snapping,this.periodicity), unit = rg.util.Periodicity.units(value,this.periodicity);
			if(null == series) return true;
			var _g = 0;
			while(_g < series.length) {
				var item = series[_g];
				++_g;
				if(units > item.to) continue;
				return 0 == unit % item.s;
			}
			var top = Reflect.field(rg.axis.AxisTime.snapping,this.periodicity + "top");
			if(null == top) top = 1;
			return 0 == unit % top;
		}
	}
	,ticks: function(start,end,upperBound) {
		var me = this;
		var span = end - start, units = rg.util.Periodicity.unitsBetween(start,end,this.periodicity), values = this.range(start,end), range = values.map(function(value,i) {
			return new rg.axis.TickmarkTime(value,values,me.isMajor(units,value),me.periodicity,me.scaleDistribution);
		});
		return rg.axis.Tickmarks.bound(range,upperBound);
	}
	,range: function(start,end) {
		return rg.util.Periodicity.range(start,end,this.periodicity);
	}
	,scale: function(start,end,v) {
		switch( (this.scaleDistribution)[1] ) {
		case 1:
			return (v - start) / (end - start);
		default:
			var values = this.range(start,end);
			return rg.axis.ScaleDistributions.distribute(this.scaleDistribution,values.indexOf(Dates.snap(v,this.periodicity)),values.length);
		}
	}
	,setScaleDistribution: function(v) {
		return this.scaleDistribution = v;
	}
	,min: function(stats,meta) {
		return stats.min;
	}
	,max: function(stats,meta) {
		return stats.max;
	}
	,createStats: function(type) {
		return new rg.axis.StatsNumeric(type);
	}
	,__class__: rg.axis.AxisTime
	,__properties__: {set_scaleDistribution:"setScaleDistribution"}
}
rg.axis.ITickmark = function() { }
$hxClasses["rg.axis.ITickmark"] = rg.axis.ITickmark;
rg.axis.ITickmark.__name__ = ["rg","axis","ITickmark"];
rg.axis.ITickmark.prototype = {
	delta: null
	,major: null
	,value: null
	,label: null
	,__class__: rg.axis.ITickmark
	,__properties__: {get_label:"getLabel",get_value:"getValue",get_major:"getMajor",get_delta:"getDelta"}
}
rg.axis.ScaleDistribution = $hxClasses["rg.axis.ScaleDistribution"] = { __ename__ : ["rg","axis","ScaleDistribution"], __constructs__ : ["ScaleFit","ScaleFill","ScaleBefore","ScaleAfter"] }
rg.axis.ScaleDistribution.ScaleFit = ["ScaleFit",0];
rg.axis.ScaleDistribution.ScaleFit.toString = $estr;
rg.axis.ScaleDistribution.ScaleFit.__enum__ = rg.axis.ScaleDistribution;
rg.axis.ScaleDistribution.ScaleFill = ["ScaleFill",1];
rg.axis.ScaleDistribution.ScaleFill.toString = $estr;
rg.axis.ScaleDistribution.ScaleFill.__enum__ = rg.axis.ScaleDistribution;
rg.axis.ScaleDistribution.ScaleBefore = ["ScaleBefore",2];
rg.axis.ScaleDistribution.ScaleBefore.toString = $estr;
rg.axis.ScaleDistribution.ScaleBefore.__enum__ = rg.axis.ScaleDistribution;
rg.axis.ScaleDistribution.ScaleAfter = ["ScaleAfter",3];
rg.axis.ScaleDistribution.ScaleAfter.toString = $estr;
rg.axis.ScaleDistribution.ScaleAfter.__enum__ = rg.axis.ScaleDistribution;
rg.axis.ScaleDistributions = function() { }
$hxClasses["rg.axis.ScaleDistributions"] = rg.axis.ScaleDistributions;
rg.axis.ScaleDistributions.__name__ = ["rg","axis","ScaleDistributions"];
rg.axis.ScaleDistributions.distribute = function(scale,pos,values) {
	switch( (scale)[1] ) {
	case 0:
		return (pos + 0.5) / values;
	case 1:
		return pos / (values - 1);
	case 2:
		return pos / values;
	case 3:
		return (pos + 1) / values;
	}
}
rg.axis.ScaleDistributions.prototype = {
	__class__: rg.axis.ScaleDistributions
}
rg.axis.Stats = function(type,sortf) {
	this.type = type;
	this.sortf = sortf;
	this.reset();
};
$hxClasses["rg.axis.Stats"] = rg.axis.Stats;
rg.axis.Stats.__name__ = ["rg","axis","Stats"];
rg.axis.Stats.prototype = {
	min: null
	,max: null
	,count: null
	,values: null
	,sortf: null
	,type: null
	,reset: function() {
		this.min = null;
		this.max = null;
		this.count = 0;
		this.values = [];
		return this;
	}
	,add: function(v) {
		this.count++;
		if(Arrays.exists(this.values,v)) return this;
		this.values.push(v);
		if(null != this.sortf) this.values.sort(this.sortf);
		this.min = this.values[0];
		this.max = Arrays.last(this.values);
		return this;
	}
	,addMany: function(it) {
		var $it0 = it.iterator();
		while( $it0.hasNext() ) {
			var v = $it0.next();
			this.count++;
			if(Arrays.exists(this.values,v)) continue;
			this.values.push(v);
		}
		if(null != this.sortf) this.values.sort(this.sortf);
		this.min = this.values[0];
		this.max = Arrays.last(this.values);
		return this;
	}
	,__class__: rg.axis.Stats
}
rg.axis.StatsNumeric = function(type,sortf) {
	if(null == sortf) sortf = Floats.compare;
	rg.axis.Stats.call(this,type,sortf);
};
$hxClasses["rg.axis.StatsNumeric"] = rg.axis.StatsNumeric;
rg.axis.StatsNumeric.__name__ = ["rg","axis","StatsNumeric"];
rg.axis.StatsNumeric.__super__ = rg.axis.Stats;
rg.axis.StatsNumeric.prototype = $extend(rg.axis.Stats.prototype,{
	tot: null
	,reset: function() {
		rg.axis.Stats.prototype.reset.call(this);
		this.tot = 0.0;
		return this;
	}
	,add: function(v) {
		rg.axis.Stats.prototype.add.call(this,v);
		this.tot += v;
		return this;
	}
	,addMany: function(it) {
		rg.axis.Stats.prototype.addMany.call(this,it);
		var $it0 = it.iterator();
		while( $it0.hasNext() ) {
			var v = $it0.next();
			this.tot += v;
		}
		return this;
	}
	,__class__: rg.axis.StatsNumeric
});
rg.axis.Tickmark = function(value,major,delta) {
	this.value = value;
	this.major = major;
	this.delta = delta;
};
$hxClasses["rg.axis.Tickmark"] = rg.axis.Tickmark;
rg.axis.Tickmark.__name__ = ["rg","axis","Tickmark"];
rg.axis.Tickmark.__interfaces__ = [rg.axis.ITickmark];
rg.axis.Tickmark.prototype = {
	delta: null
	,major: null
	,value: null
	,label: null
	,getDelta: function() {
		return this.delta;
	}
	,getMajor: function() {
		return this.major;
	}
	,getValue: function() {
		return this.value;
	}
	,getLabel: function() {
		return rg.util.RGStrings.humanize(this.getValue());
	}
	,__class__: rg.axis.Tickmark
	,__properties__: {get_label:"getLabel",get_value:"getValue",get_major:"getMajor",get_delta:"getDelta"}
}
rg.axis.TickmarkOrdinal = function(pos,values,major,scaleDistribution) {
	if(major == null) major = true;
	this.pos = pos;
	this.values = values;
	this.scaleDistribution = scaleDistribution;
	this.major = major;
};
$hxClasses["rg.axis.TickmarkOrdinal"] = rg.axis.TickmarkOrdinal;
rg.axis.TickmarkOrdinal.__name__ = ["rg","axis","TickmarkOrdinal"];
rg.axis.TickmarkOrdinal.__interfaces__ = [rg.axis.ITickmark];
rg.axis.TickmarkOrdinal.fromArray = function(values,scaleDistribution) {
	return values.map(function(_,i) {
		return new rg.axis.TickmarkOrdinal(i,values,null,scaleDistribution);
	});
}
rg.axis.TickmarkOrdinal.prototype = {
	pos: null
	,values: null
	,scaleDistribution: null
	,delta: null
	,getDelta: function() {
		return rg.axis.ScaleDistributions.distribute(this.scaleDistribution,this.pos,this.values.length);
	}
	,major: null
	,getMajor: function() {
		return this.major;
	}
	,value: null
	,getValue: function() {
		return this.values[this.pos];
	}
	,label: null
	,getLabel: function() {
		return rg.util.RGStrings.humanize(this.values[this.pos]);
	}
	,__class__: rg.axis.TickmarkOrdinal
	,__properties__: {get_label:"getLabel",get_value:"getValue",get_major:"getMajor",get_delta:"getDelta"}
}
rg.axis.TickmarkTime = function(value,values,major,periodicity,scaleDistribution) {
	rg.axis.TickmarkOrdinal.call(this,values.indexOf(value),values,major,scaleDistribution);
	this.periodicity = periodicity;
};
$hxClasses["rg.axis.TickmarkTime"] = rg.axis.TickmarkTime;
rg.axis.TickmarkTime.__name__ = ["rg","axis","TickmarkTime"];
rg.axis.TickmarkTime.__super__ = rg.axis.TickmarkOrdinal;
rg.axis.TickmarkTime.prototype = $extend(rg.axis.TickmarkOrdinal.prototype,{
	periodicity: null
	,getLabel: function() {
		return rg.util.Periodicity.smartFormat(this.periodicity,this.values[this.pos]);
	}
	,__class__: rg.axis.TickmarkTime
});
rg.axis.Tickmarks = function() { }
$hxClasses["rg.axis.Tickmarks"] = rg.axis.Tickmarks;
rg.axis.Tickmarks.__name__ = ["rg","axis","Tickmarks"];
rg.axis.Tickmarks.bound = function(tickmarks,max) {
	if(null == max || tickmarks.length <= (2 > max?2:max)) return tickmarks;
	var majors = Arrays.filter(tickmarks,function(d) {
		return d.getMajor();
	});
	if(majors.length > max) return rg.axis.Tickmarks.reduce(majors,max);
	var result = rg.axis.Tickmarks.reduce(Arrays.filter(tickmarks,function(d) {
		return !d.getMajor();
	}),max - majors.length).concat(majors);
	result.sort(function(a,b) {
		return Floats.compare(a.getDelta(),b.getDelta());
	});
	return result;
}
rg.axis.Tickmarks.reduce = function(arr,max) {
	if(max == 1) return [arr[0]];
	if(max == 2) return [arr[arr.length - 1]];
	var keep = arr.length / max, result = [], i = 0;
	do result.push(arr[Math.round(keep * i++)]); while(max > result.length);
	return result;
}
rg.axis.Tickmarks.forFloat = function(start,end,value,major) {
	return new rg.axis.Tickmark(value,major,(value - start) / (end - start));
}
rg.axis.Tickmarks.prototype = {
	__class__: rg.axis.Tickmarks
}
rg.data = {}
rg.data.DataLoader = function(loader) {
	if(null == loader) throw new thx.error.NullArgument("loader","invalid null argument '{0}' for method {1}.{2}()",{ fileName : "DataLoader.hx", lineNumber : 11, className : "rg.data.DataLoader", methodName : "new"}); else null;
	this.loader = loader;
	this.onLoad = new hxevents.Dispatcher();
};
$hxClasses["rg.data.DataLoader"] = rg.data.DataLoader;
rg.data.DataLoader.__name__ = ["rg","data","DataLoader"];
rg.data.DataLoader.prototype = {
	loader: null
	,onLoad: null
	,load: function() {
		var me = this;
		this.loader(function(datapoints) {
			me.onLoad.dispatch(datapoints);
		});
	}
	,__class__: rg.data.DataLoader
}
rg.data.DependentVariableProcessor = function() {
};
$hxClasses["rg.data.DependentVariableProcessor"] = rg.data.DependentVariableProcessor;
rg.data.DependentVariableProcessor.__name__ = ["rg","data","DependentVariableProcessor"];
rg.data.DependentVariableProcessor.prototype = {
	process: function(data,variables) {
		var _g = 0;
		while(_g < variables.length) {
			var variable = variables[_g];
			++_g;
			var values = rg.util.DataPoints.values(data,variable.type);
			if(values.length == 0) continue;
			if(null == variable.axis) variable.setAxis(new rg.factory.FactoryAxis().create(variable.type,Std["is"](values[0],Float),variable,null));
			variable.stats.addMany(values);
			var discrete;
			if(null != variable.scaleDistribution && null != (discrete = Types["as"](variable.axis,rg.axis.IAxisDiscrete))) {
				discrete.setScaleDistribution(variable.scaleDistribution);
				variable.scaleDistribution = null;
			}
		}
	}
	,__class__: rg.data.DependentVariableProcessor
}
rg.data.IndependentVariableProcessor = function() {
};
$hxClasses["rg.data.IndependentVariableProcessor"] = rg.data.IndependentVariableProcessor;
rg.data.IndependentVariableProcessor.__name__ = ["rg","data","IndependentVariableProcessor"];
rg.data.IndependentVariableProcessor.prototype = {
	process: function(data,variables) {
		var _g = 0;
		while(_g < variables.length) {
			var variable = variables[_g];
			++_g;
			variable.stats.addMany(rg.util.DataPoints.values(data,variable.type));
			var discrete;
			if(null != variable.scaleDistribution && null != (discrete = Types["as"](variable.axis,rg.axis.IAxisDiscrete))) {
				discrete.setScaleDistribution(variable.scaleDistribution);
				variable.scaleDistribution = null;
			}
		}
	}
	,__class__: rg.data.IndependentVariableProcessor
}
rg.data.Segmenter = function(on,transform,scale) {
	this.on = on;
	this.transform = transform;
	this.scale = scale;
};
$hxClasses["rg.data.Segmenter"] = rg.data.Segmenter;
rg.data.Segmenter.__name__ = ["rg","data","Segmenter"];
rg.data.Segmenter.prototype = {
	on: null
	,transform: null
	,scale: null
	,segment: function(data) {
		var segmented = null == this.on?[data]:rg.util.DataPoints.partition(data,this.on);
		if(null != this.scale) {
			var _g1 = 0, _g = segmented.length;
			while(_g1 < _g) {
				var i = _g1++;
				segmented[i] = this.scale(segmented[i]);
			}
		}
		if(null != this.transform) {
			var rotated = Arrays.rotate(segmented);
			var _g1 = 0, _g = rotated.length;
			while(_g1 < _g) {
				var i = _g1++;
				rotated[i] = this.transform(rotated[i]);
			}
			segmented = Arrays.rotate(rotated);
		}
		return segmented;
	}
	,__class__: rg.data.Segmenter
}
rg.data.Variable = function(type,scaleDistribution) {
	this.type = type;
	this.scaleDistribution = scaleDistribution;
	this.meta = { };
};
$hxClasses["rg.data.Variable"] = rg.data.Variable;
rg.data.Variable.__name__ = ["rg","data","Variable"];
rg.data.Variable.prototype = {
	type: null
	,scaleDistribution: null
	,axis: null
	,stats: null
	,meta: null
	,minf: null
	,maxf: null
	,setAxis: function(axis) {
		this.axis = axis;
		if(null != axis) this.stats = axis.createStats(this.type); else this.stats = null;
	}
	,min: function() {
		return (this.getMinF())(this.stats,this.meta);
	}
	,max: function() {
		return (this.getMaxF())(this.stats,this.meta);
	}
	,setMinF: function(f) {
		return this.minf = f;
	}
	,setMaxF: function(f) {
		return this.maxf = f;
	}
	,getMinF: function() {
		if(null == this.minf) {
			if(null == this.axis) throw new thx.error.Error("axis is null in '{0}' variable (required by min)",[this.type],null,{ fileName : "Variable.hx", lineNumber : 50, className : "rg.data.Variable", methodName : "getMinF"});
			this.setMinF(($_=this.axis,$_.min.$bind($_)));
		}
		return this.minf;
	}
	,getMaxF: function() {
		if(null == this.maxf) {
			if(null == this.axis) throw new thx.error.Error("axis is null in '{0}' variable (required by max)",[this.type],null,{ fileName : "Variable.hx", lineNumber : 61, className : "rg.data.Variable", methodName : "getMaxF"});
			this.setMaxF(($_=this.axis,$_.max.$bind($_)));
		}
		return this.maxf;
	}
	,__class__: rg.data.Variable
	,__properties__: {set_maxf:"setMaxF",get_maxf:"getMaxF",set_minf:"setMinF",get_minf:"getMinF"}
}
rg.data.VariableDependent = function(type,scaleDistribution) {
	rg.data.Variable.call(this,type,scaleDistribution);
};
$hxClasses["rg.data.VariableDependent"] = rg.data.VariableDependent;
rg.data.VariableDependent.__name__ = ["rg","data","VariableDependent"];
rg.data.VariableDependent.__super__ = rg.data.Variable;
rg.data.VariableDependent.prototype = $extend(rg.data.Variable.prototype,{
	__class__: rg.data.VariableDependent
});
rg.data.VariableIndependent = function(type,scaleDistribution) {
	rg.data.Variable.call(this,type,scaleDistribution);
};
$hxClasses["rg.data.VariableIndependent"] = rg.data.VariableIndependent;
rg.data.VariableIndependent.__name__ = ["rg","data","VariableIndependent"];
rg.data.VariableIndependent.__super__ = rg.data.Variable;
rg.data.VariableIndependent.prototype = $extend(rg.data.Variable.prototype,{
	__class__: rg.data.VariableIndependent
});
rg.factory = {}
rg.factory.FactoryAxis = function() {
};
$hxClasses["rg.factory.FactoryAxis"] = rg.factory.FactoryAxis;
rg.factory.FactoryAxis.__name__ = ["rg","factory","FactoryAxis"];
rg.factory.FactoryAxis.prototype = {
	create: function(type,isnumeric,variable,samples) {
		if(null != samples && samples.length > 0) return new rg.axis.AxisOrdinalFixedValues(samples); else if(true == isnumeric) return new rg.axis.AxisNumeric(); else if(false == isnumeric) return new rg.axis.AxisOrdinalStats(variable); else return null;
	}
	,createDiscrete: function(type,variable,samples,groupBy) {
		if(type.indexOf("time:") >= 0) {
			if(null != groupBy) return new rg.axis.AxisGroupByTime(type.substr(type.indexOf("time:") + "time:".length)); else return new rg.axis.AxisTime(type.substr(type.indexOf("time:") + "time:".length));
		} else if(null != samples && samples.length > 0) return new rg.axis.AxisOrdinalFixedValues(samples);
		return new rg.axis.AxisOrdinalStats(variable);
	}
	,__class__: rg.factory.FactoryAxis
}
rg.factory.FactoryGeoProjection = function() {
};
$hxClasses["rg.factory.FactoryGeoProjection"] = rg.factory.FactoryGeoProjection;
rg.factory.FactoryGeoProjection.__name__ = ["rg","factory","FactoryGeoProjection"];
rg.factory.FactoryGeoProjection.prototype = {
	create: function(info) {
		switch(info.projection.toLowerCase()) {
		case "mercator":
			var projection = new thx.geo.Mercator();
			if(null != info.scale) projection.setScale(info.scale);
			if(null != info.translate) projection.setTranslate(info.translate); else projection.setTranslate([0.0,0]);
			return projection;
		case "albers":
			var projection = new thx.geo.Albers();
			if(null != info.scale) projection.setScale(info.scale);
			if(null != info.translate) projection.setTranslate(info.translate); else projection.setTranslate([0.0,0]);
			if(null != info.origin) projection.setOrigin(info.origin);
			if(null != info.parallels) projection.setParallels(info.parallels);
			return projection;
		case "albersusa":
			var projection = new thx.geo.AlbersUsa();
			if(null != info.scale) projection.setScale(info.scale);
			if(null != info.translate) projection.setTranslate(info.translate); else projection.setTranslate([0.0,0]);
			return projection;
		case "azimuthal":
			var projection = new thx.geo.Azimuthal();
			if(null != info.scale) projection.setScale(info.scale);
			if(null != info.translate) projection.setTranslate(info.translate); else projection.setTranslate([0.0,0]);
			if(null != info.mode) projection.setMode(info.mode);
			if(null != info.origin) projection.setOrigin(info.origin);
			return projection;
		default:
			return (function($this) {
				var $r;
				throw new thx.error.Error("the projection '{0}' does not exist or is not implemented",[info.projection],null,{ fileName : "FactoryGeoProjection.hx", lineNumber : 68, className : "rg.factory.FactoryGeoProjection", methodName : "create"});
				return $r;
			}(this));
		}
	}
	,__class__: rg.factory.FactoryGeoProjection
}
rg.factory.FactoryHtmlVisualization = function() {
};
$hxClasses["rg.factory.FactoryHtmlVisualization"] = rg.factory.FactoryHtmlVisualization;
rg.factory.FactoryHtmlVisualization.__name__ = ["rg","factory","FactoryHtmlVisualization"];
rg.factory.FactoryHtmlVisualization.prototype = {
	create: function(type,container,options) {
		switch(type) {
		case "pivottable":
			var chart = new rg.visualization.VisualizationPivotTable(container);
			chart.info = rg.info.Info.feed(new rg.info.InfoPivotTable(),options);
			return chart;
		case "leaderboard":
			var chart = new rg.visualization.VisualizationLeaderboard(container);
			chart.info = rg.info.Info.feed(new rg.info.InfoLeaderboard(),options);
			return chart;
		default:
			throw new thx.error.Error("unsupported visualization '{0}'",null,type,{ fileName : "FactoryHtmlVisualization.hx", lineNumber : 35, className : "rg.factory.FactoryHtmlVisualization", methodName : "create"});
		}
		return null;
	}
	,__class__: rg.factory.FactoryHtmlVisualization
}
rg.factory.FactoryLayout = function() {
};
$hxClasses["rg.factory.FactoryLayout"] = rg.factory.FactoryLayout;
rg.factory.FactoryLayout.__name__ = ["rg","factory","FactoryLayout"];
rg.factory.FactoryLayout.size = function(container,info,heightmargin) {
	var v, width = null == info.width?(v = container.node().clientWidth) > 10?v:400:info.width, height = (null == info.height?(v = container.node().clientHeight) > 10?v:300:info.height) - heightmargin;
	return { width : width, height : height};
}
rg.factory.FactoryLayout.prototype = {
	create: function(info,heightmargin,container) {
		var size = rg.factory.FactoryLayout.size(container,info,heightmargin);
		var layoutName = info.layout;
		if(null == layoutName) layoutName = rg.visualization.Visualizations.layoutDefault.get(info.type);
		if(null == layoutName) throw new thx.error.Error("unable to find a suitable layout for '{0}'",null,info.type,{ fileName : "FactoryLayout.hx", lineNumber : 28, className : "rg.factory.FactoryLayout", methodName : "create"});
		var layout = rg.visualization.Visualizations.instantiateLayout(layoutName,size.width,size.height,container);
		layout.feedOptions(info);
		return layout;
	}
	,__class__: rg.factory.FactoryLayout
}
rg.factory.FactorySvgVisualization = function() {
};
$hxClasses["rg.factory.FactorySvgVisualization"] = rg.factory.FactorySvgVisualization;
rg.factory.FactorySvgVisualization.__name__ = ["rg","factory","FactorySvgVisualization"];
rg.factory.FactorySvgVisualization.prototype = {
	create: function(type,layout,options) {
		switch(type) {
		case "barchart":
			var chart = new rg.visualization.VisualizationBarChart(layout);
			chart.info = chart.infoBar = rg.info.Info.feed(new rg.info.InfoBarChart(),options);
			return chart;
		case "funnelchart":
			var chart = new rg.visualization.VisualizationFunnelChart(layout);
			chart.info = rg.info.Info.feed(new rg.info.InfoFunnelChart(),options);
			return chart;
		case "geo":
			var chart = new rg.visualization.VisualizationGeo(layout);
			chart.info = rg.info.Info.feed(new rg.info.InfoGeo(),options);
			return chart;
		case "heatgrid":
			var chart = new rg.visualization.VisualizationHeatGrid(layout);
			chart.info = chart.infoHeatGrid = rg.info.Info.feed(new rg.info.InfoHeatGrid(),options);
			return chart;
		case "linechart":
			var chart = new rg.visualization.VisualizationLineChart(layout);
			chart.info = chart.infoLine = rg.info.Info.feed(new rg.info.InfoLineChart(),options);
			return chart;
		case "piechart":
			var chart = new rg.visualization.VisualizationPieChart(layout);
			chart.info = rg.info.Info.feed(new rg.info.InfoPieChart(),options);
			return chart;
		case "sankey":
			var chart = new rg.visualization.VisualizationSankey(layout);
			chart.info = rg.info.Info.feed(new rg.info.InfoSankey(),options);
			return chart;
		case "scattergraph":
			var chart = new rg.visualization.VisualizationScatterGraph(layout);
			chart.info = chart.infoScatter = rg.info.Info.feed(new rg.info.InfoScatterGraph(),options);
			return chart;
		case "streamgraph":
			var chart = new rg.visualization.VisualizationStreamGraph(layout);
			chart.info = chart.infoStream = rg.info.Info.feed(new rg.info.InfoStreamGraph(),options);
			return chart;
		default:
			throw new thx.error.Error("unsupported visualization type '{0}'",null,type,{ fileName : "FactorySvgVisualization.hx", lineNumber : 76, className : "rg.factory.FactorySvgVisualization", methodName : "create"});
		}
	}
	,__class__: rg.factory.FactorySvgVisualization
}
rg.factory.FactoryVariable = function() {
	this.independentFactory = new rg.factory.FactoryVariableIndependent();
	this.dependentFactory = new rg.factory.FactoryVariableDependent();
};
$hxClasses["rg.factory.FactoryVariable"] = rg.factory.FactoryVariable;
rg.factory.FactoryVariable.__name__ = ["rg","factory","FactoryVariable"];
rg.factory.FactoryVariable.prototype = {
	independentFactory: null
	,dependentFactory: null
	,createVariables: function(arr) {
		var me = this;
		return arr.map(function(info,_) {
			switch( (info.variableType)[1] ) {
			case 1:
				return me.independentFactory.create(info);
			case 2:
				return me.dependentFactory.create(info,null);
			case 0:
				return me.dependentFactory.create(info,null);
			}
		});
	}
	,__class__: rg.factory.FactoryVariable
}
rg.factory.FactoryVariableDependent = function() {
};
$hxClasses["rg.factory.FactoryVariableDependent"] = rg.factory.FactoryVariableDependent;
rg.factory.FactoryVariableDependent.__name__ = ["rg","factory","FactoryVariableDependent"];
rg.factory.FactoryVariableDependent.prototype = {
	create: function(info,isnumeric) {
		if(null == info.type) throw new thx.error.Error("cannot create an axis if type is not specified",null,null,{ fileName : "FactoryVariableDependent.hx", lineNumber : 18, className : "rg.factory.FactoryVariableDependent", methodName : "create"});
		var axiscreator = new rg.factory.FactoryAxis(), variable = new rg.data.VariableDependent(info.type,info.scaleDistribution), axis = axiscreator.create(info.type,isnumeric,variable,info.values);
		variable.setAxis(axis);
		variable.setMinF(rg.factory.FactoryVariableIndependent.convertBound(axis,info.min));
		variable.setMaxF(rg.factory.FactoryVariableIndependent.convertBound(axis,info.max));
		return variable;
	}
	,__class__: rg.factory.FactoryVariableDependent
}
rg.factory.FactoryVariableIndependent = function() {
};
$hxClasses["rg.factory.FactoryVariableIndependent"] = rg.factory.FactoryVariableIndependent;
rg.factory.FactoryVariableIndependent.__name__ = ["rg","factory","FactoryVariableIndependent"];
rg.factory.FactoryVariableIndependent.convertBound = function(axis,value) {
	if(null == value || Reflect.isFunction(value)) return value;
	if(Std["is"](axis,rg.axis.AxisTime)) {
		if(Std["is"](value,Date)) value = ((function($this) {
			var $r;
			var $t = value;
			if(Std["is"]($t,Date)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).getTime();
		if(Std["is"](value,Float)) return function(_,_1) {
			return value;
		};
		if(Std["is"](value,String)) return function(_,_1) {
			return thx.date.DateParser.parse(value).getTime();
		};
		throw new thx.error.Error("invalid value '{0}' for time bound",[value],null,{ fileName : "FactoryVariableIndependent.hx", lineNumber : 46, className : "rg.factory.FactoryVariableIndependent", methodName : "convertBound"});
	}
	return function(_,_1) {
		return value;
	};
}
rg.factory.FactoryVariableIndependent.prototype = {
	create: function(info) {
		if(null == info.type) return null;
		var axiscreateer = new rg.factory.FactoryAxis(), variable = new rg.data.VariableIndependent(info.type,info.scaleDistribution), axis = axiscreateer.createDiscrete(info.type,variable,info.values,info.groupBy);
		variable.setAxis(axis);
		variable.setMinF(rg.factory.FactoryVariableIndependent.convertBound(axis,info.min));
		variable.setMaxF(rg.factory.FactoryVariableIndependent.convertBound(axis,info.max));
		return variable;
	}
	,__class__: rg.factory.FactoryVariableIndependent
}
rg.frame = {}
rg.frame.Frame = function() {
	this.x = this.y = this.width = this.height = 0;
};
$hxClasses["rg.frame.Frame"] = rg.frame.Frame;
rg.frame.Frame.__name__ = ["rg","frame","Frame"];
rg.frame.Frame.prototype = {
	x: null
	,y: null
	,width: null
	,height: null
	,change: function() {
	}
	,setLayout: function(x,y,width,height) {
		if(this.x == x && this.y == y && this.width == width && this.height == height) return;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.change();
	}
	,__class__: rg.frame.Frame
}
rg.frame.FrameLayout = $hxClasses["rg.frame.FrameLayout"] = { __ename__ : ["rg","frame","FrameLayout"], __constructs__ : ["Fill","FillPercent","FillRatio","Fixed","Floating"] }
rg.frame.FrameLayout.Fill = function(before,after,min,max) { var $x = ["Fill",0,before,after,min,max]; $x.__enum__ = rg.frame.FrameLayout; $x.toString = $estr; return $x; }
rg.frame.FrameLayout.FillPercent = function(before,after,percent,min,max) { var $x = ["FillPercent",1,before,after,percent,min,max]; $x.__enum__ = rg.frame.FrameLayout; $x.toString = $estr; return $x; }
rg.frame.FrameLayout.FillRatio = function(before,after,ratio) { var $x = ["FillRatio",2,before,after,ratio]; $x.__enum__ = rg.frame.FrameLayout; $x.toString = $estr; return $x; }
rg.frame.FrameLayout.Fixed = function(before,after,size) { var $x = ["Fixed",3,before,after,size]; $x.__enum__ = rg.frame.FrameLayout; $x.toString = $estr; return $x; }
rg.frame.FrameLayout.Floating = function(x,y,width,height) { var $x = ["Floating",4,x,y,width,height]; $x.__enum__ = rg.frame.FrameLayout; $x.toString = $estr; return $x; }
rg.frame.Orientation = $hxClasses["rg.frame.Orientation"] = { __ename__ : ["rg","frame","Orientation"], __constructs__ : ["Vertical","Horizontal"] }
rg.frame.Orientation.Vertical = ["Vertical",0];
rg.frame.Orientation.Vertical.toString = $estr;
rg.frame.Orientation.Vertical.__enum__ = rg.frame.Orientation;
rg.frame.Orientation.Horizontal = ["Horizontal",1];
rg.frame.Orientation.Horizontal.toString = $estr;
rg.frame.Orientation.Horizontal.__enum__ = rg.frame.Orientation;
rg.frame.Stack = function(width,height,orientation) {
	this.orientation = null == orientation?rg.frame.Orientation.Vertical:orientation;
	this.children = [];
	this.width = width;
	this.height = height;
};
$hxClasses["rg.frame.Stack"] = rg.frame.Stack;
rg.frame.Stack.__name__ = ["rg","frame","Stack"];
rg.frame.Stack.prototype = {
	children: null
	,width: null
	,height: null
	,orientation: null
	,length: null
	,moreSpaceRequired: function(size) {
	}
	,insertItem: function(pos,child) {
		if(null == child) return this;
		if(pos >= this.children.length) return this.addItem(child);
		if(pos < 0) pos = 0;
		this.children.insert(pos,child);
		var f = child;
		f.setParent(this);
		this.reflow();
		return this;
	}
	,addItem: function(child) {
		if(null == child) return this;
		this.children.push(child);
		var f = child;
		f.setParent(this);
		this.reflow();
		return this;
	}
	,addItems: function(it) {
		var added = false;
		var $it0 = it.iterator();
		while( $it0.hasNext() ) {
			var child = $it0.next();
			if(null == child) continue;
			added = true;
			this.children.push(child);
			var f = child;
			f.setParent(this);
		}
		if(added) this.reflow();
		return this;
	}
	,removeChild: function(child) {
		if(!this.children.remove(child)) return false;
		var f = child;
		f.setParent(null);
		this.reflow();
		return true;
	}
	,reflow: function() {
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
		}(this)), otherdimension = (function($this) {
			var $r;
			switch( ($this.orientation)[1] ) {
			case 0:
				$r = $this.width;
				break;
			case 1:
				$r = $this.height;
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
				var max = $e[5], min = $e[4], after = $e[3], before = $e[2];
				if(null == min) min = 0;
				if(null == max) max = available;
				required += min + before + after;
				variablespace += variables[i] = max - min;
				values.push(min + before + after);
				break;
			case 1:
				var max = $e[6], min = $e[5], percent = $e[4], after = $e[3], before = $e[2];
				var size = Math.round(percent * available);
				if(null != min && size < min) size = min;
				if(null != max && size > max) size = max;
				required += size + before + after;
				values.push(size + before + after);
				break;
			case 2:
				var ratio = $e[4], after = $e[3], before = $e[2];
				if(null == ratio) ratio = 1;
				var size = Math.round(otherdimension * ratio);
				required += size + before + after;
				values.push(size + before + after);
				break;
			case 3:
				var size = $e[4], after = $e[3], before = $e[2];
				required += size + before + after;
				values.push(size + before + after);
				break;
			case 4:
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
				case 0:
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
				case 4:
					var h = $e[5], w = $e[4], y = $e[3], x = $e[2];
					sizeable.setLayout(x,y,w,h);
					break;
				case 3:
				case 0:
				case 1:
				case 2:
					var after = $e[3], before = $e[2];
					sizeable.setLayout(0,pos + before,this.width,values[i] - after - before);
					break;
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
				case 4:
					var h = $e[5], w = $e[4], y = $e[3], x = $e[2];
					sizeable.setLayout(x,y,w,h);
					break;
				case 3:
				case 0:
				case 1:
				case 2:
					var after = $e[3], before = $e[2];
					sizeable.setLayout(pos + before,0,values[i] - after - before,this.height);
					break;
				}
				pos += values[i++];
			}
			break;
		}
		if(available < 0) this.moreSpaceRequired(required);
	}
	,getLength: function() {
		return this.children.length;
	}
	,setSize: function(width,height) {
		if(this.width == width && this.height == height) return this;
		this.width = width;
		this.height = height;
		this.reflow();
		return this;
	}
	,__class__: rg.frame.Stack
	,__properties__: {get_length:"getLength"}
}
rg.frame.StackItem = function(disposition) {
	rg.frame.Frame.call(this);
	this.setDisposition(disposition);
};
$hxClasses["rg.frame.StackItem"] = rg.frame.StackItem;
rg.frame.StackItem.__name__ = ["rg","frame","StackItem"];
rg.frame.StackItem.__super__ = rg.frame.Frame;
rg.frame.StackItem.prototype = $extend(rg.frame.Frame.prototype,{
	disposition: null
	,parent: null
	,setParent: function(v) {
		if(null != this.parent) this.parent.removeChild(this);
		return this.parent = v;
	}
	,setDisposition: function(v) {
		this.disposition = v;
		if(null != this.parent) this.parent.reflow();
		return v;
	}
	,__class__: rg.frame.StackItem
	,__properties__: {set_disposition:"setDisposition"}
});
rg.html = {}
rg.html.chart = {}
rg.html.chart.Leadeboard = function(container) {
	this.ready = new hxevents.Notifier();
	this.container = container;
	this.animated = true;
	this.animationDuration = 1500;
	this.animationEase = thx.math.Equations.elasticf();
	this.animationDelay = 150;
	this._created = 0;
	this.displayGradient = true;
	this.useMax = false;
	this.colorScale = false;
};
$hxClasses["rg.html.chart.Leadeboard"] = rg.html.chart.Leadeboard;
rg.html.chart.Leadeboard.__name__ = ["rg","html","chart","Leadeboard"];
rg.html.chart.Leadeboard.prototype = {
	variableIndependent: null
	,variableDependent: null
	,animated: null
	,animationDuration: null
	,animationDelay: null
	,animationEase: null
	,click: null
	,sortDataPoint: null
	,displayGradient: null
	,useMax: null
	,colorScale: null
	,ready: null
	,displayBar: null
	,container: null
	,list: null
	,_created: null
	,stats: null
	,labelDataPoint: function(dp,stats) {
		return rg.util.RGStrings.humanize(Reflect.field(dp,this.variableIndependent.type));
	}
	,labelDataPointOver: function(dp,stats) {
		return Floats.format(100 * Reflect.field(dp,stats.type) / (this.useMax?stats.max:stats.tot),"P:1");
	}
	,labelRank: function(dp,i,stats) {
		return "" + (i + 1);
	}
	,labelValue: function(dp,stats) {
		return rg.util.Properties.formatValue(stats.type,dp);
	}
	,init: function() {
		var div = this.container.append("div").attr("class").string("leaderboard");
		this.list = div.append("ul");
		div.append("div").attr("class").string("clear");
	}
	,setVariables: function(variableIndependents,variableDependents) {
		this.variableDependent = variableDependents[0];
		this.variableIndependent = variableIndependents[0];
	}
	,backgroundSize: function(dp,i) {
		return 100 * Reflect.field(dp,this.variableDependent.type) / (this.useMax?this.stats.max:this.stats.tot) + "%";
	}
	,data: function(dps) {
		var name = this.variableDependent.type;
		if(null != this.sortDataPoint) dps.sort(this.sortDataPoint);
		if(null == this.variableDependent.stats) return;
		var stats = this.stats = (function($this) {
			var $r;
			var $t = $this.variableDependent.stats;
			if(Std["is"]($t,rg.axis.StatsNumeric)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this));
		var choice = this.list.selectAll("li").data(dps,this.id.$bind(this));
		var enterli = choice.enter().append("li");
		enterli.attr("title").stringf(this.lTitle.$bind(this));
		enterli.append("div").attr("class").stringf(function(_,i) {
			return i % 2 == 0?"rg_background fill-0":"rg_background";
		});
		var enterlabels = enterli.append("div").attr("class").string("rg_labels");
		if(null != this.labelRank.$bind(this)) {
			var rank = enterlabels.append("div").text().stringf(this.lRank.$bind(this));
			if(this.colorScale) rank.attr("class").stringf(function(_,i) {
				return "rg_rank fill fill-" + i;
			}); else rank.attr("class").string("rg_rank");
		}
		if(null != this.labelDataPoint.$bind(this)) enterlabels.append("span").attr("class").string("rg_description color-0").text().stringf(this.lDataPoint.$bind(this));
		if(null != this.labelValue.$bind(this)) enterlabels.append("span").attr("class").string("rg_value color-2").text().stringf(this.lValue.$bind(this));
		enterli.append("div").attr("class").string("clear");
		if(this.displayBar) {
			var barpadding = enterli.append("div").attr("class").string("rg_barpadding"), enterbar = barpadding.append("div").attr("class").string("rg_barcontainer");
			enterbar.append("div").attr("class").string("rg_barback fill-0");
			enterbar.append("div").attr("class").string("rg_bar fill-0").style("width").stringf(this.backgroundSize.$bind(this));
			enterli.append("div").attr("class").string("clear");
		}
		if(null != this.click) enterli.on("click.user",this.onClick.$bind(this));
		if(this.animated) enterli.style("opacity")["float"](0).eachNode(this.fadeIn.$bind(this)); else enterli.style("opacity")["float"](1);
		if(this.animated) choice.exit().transition().ease(this.animationEase).duration(null,this.animationDuration).style("opacity")["float"](0).remove(); else choice.exit().remove();
		this.ready.dispatch();
	}
	,onClick: function(dp,_) {
		this.click(dp);
	}
	,fadeIn: function(n,i) {
		var me = this;
		dhx.Dom.selectNodeData(n).transition().ease(this.animationEase).duration(null,this.animationDuration).delay(null,this.animationDelay * (i - this._created)).attr("opacity")["float"](1).endNode(function(_,_1) {
			me._created++;
		});
	}
	,lRank: function(dp,i) {
		return this.labelRank(dp,i,this.stats);
	}
	,lValue: function(dp,i) {
		return this.labelValue(dp,this.stats);
	}
	,lDataPoint: function(dp,i) {
		return this.labelDataPoint(dp,this.stats);
	}
	,lTitle: function(dp,i) {
		return this.labelDataPointOver(dp,this.stats);
	}
	,id: function(dp,_) {
		return rg.util.DataPoints.id(dp,[this.variableDependent.type]);
	}
	,__class__: rg.html.chart.Leadeboard
}
var thx = {}
thx.color = {}
thx.color.Rgb = function(r,g,b) {
	this.red = Ints.clamp(r,0,255);
	this.green = Ints.clamp(g,0,255);
	this.blue = Ints.clamp(b,0,255);
};
$hxClasses["thx.color.Rgb"] = thx.color.Rgb;
thx.color.Rgb.__name__ = ["thx","color","Rgb"];
thx.color.Rgb.fromInt = function(v) {
	return new thx.color.Rgb(v >> 16 & 255,v >> 8 & 255,v & 255);
}
thx.color.Rgb.interpolatef = function(a,b,equation) {
	var r = Ints.interpolatef(a.red,b.red,equation), g = Ints.interpolatef(a.green,b.green,equation), b1 = Ints.interpolatef(a.blue,b.blue,equation);
	return function(t) {
		return new thx.color.Rgb(r(t),g(t),b1(t));
	};
}
thx.color.Rgb.contrastBW = function(c) {
	var g = thx.color.Grey.toGrey(c);
	var nc = thx.color.Hsl.toHsl(c);
	if(g.grey < .5) return new thx.color.Hsl(nc.hue,nc.saturation,1.0); else return new thx.color.Hsl(nc.hue,nc.saturation,0);
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
	,__class__: thx.color.Rgb
}
thx.color.Hsl = function(h,s,l) {
	this.hue = h = Floats.circularWrap(h,360);
	this.saturation = s = Floats.normalize(s);
	this.lightness = l = Floats.normalize(l);
	thx.color.Rgb.call(this,Ints.interpolate(thx.color.Hsl._c(h + 120,s,l),0,255,null),Ints.interpolate(thx.color.Hsl._c(h,s,l),0,255,null),Ints.interpolate(thx.color.Hsl._c(h - 120,s,l),0,255,null));
};
$hxClasses["thx.color.Hsl"] = thx.color.Hsl;
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
thx.color.Hsl.darker = function(color,t,equation) {
	return new thx.color.Hsl(color.hue,color.saturation,Floats.interpolate(t,color.lightness,0,equation));
}
thx.color.Hsl.lighter = function(color,t,equation) {
	return new thx.color.Hsl(color.hue,color.saturation,Floats.interpolate(t,color.lightness,1,equation));
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
	,__class__: thx.color.Hsl
});
thx.math = {}
thx.math.Equations = function() { }
$hxClasses["thx.math.Equations"] = thx.math.Equations;
thx.math.Equations.__name__ = ["thx","math","Equations"];
thx.math.Equations.linear = function(v) {
	return v;
}
thx.math.Equations.polynomial = function(t,e) {
	return Math.pow(t,e);
}
thx.math.Equations.cubic = function(t) {
	return thx.math.Equations.polynomial(t,3);
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
thx.math.Equations.prototype = {
	__class__: thx.math.Equations
}
rg.html.chart.PivotTable = function(container) {
	this.ready = new hxevents.Notifier();
	this.container = container;
	this.displayColumnTotal = true;
	this.displayRowTotal = true;
	this.displayHeatMap = true;
	this.colorStart = rg.html.chart.PivotTable.defaultColorStart;
	this.colorEnd = rg.html.chart.PivotTable.defaultColorEnd;
	this.incolumns = 1;
};
$hxClasses["rg.html.chart.PivotTable"] = rg.html.chart.PivotTable;
rg.html.chart.PivotTable.__name__ = ["rg","html","chart","PivotTable"];
rg.html.chart.PivotTable.prototype = {
	displayColumnTotal: null
	,displayRowTotal: null
	,displayHeatMap: null
	,colorStart: null
	,colorEnd: null
	,ready: null
	,columnVariables: null
	,rowVariables: null
	,cellVariable: null
	,incolumns: null
	,click: null
	,cellclass: null
	,valueclass: null
	,headerclass: null
	,totalclass: null
	,container: null
	,stats: null
	,labelDataPoint: function(dp,stats) {
		var v = Reflect.field(dp,this.cellVariable.type);
		if(Math.isNaN(v)) return "0";
		return thx.culture.FormatNumber["int"](v);
	}
	,labelDataPointOver: function(dp,stats) {
		var v = Reflect.field(dp,this.cellVariable.type);
		if(Math.isNaN(v)) return "0";
		return thx.culture.FormatNumber.percent(100 * v / stats.tot,1);
	}
	,labelAxis: function(v) {
		return rg.util.RGStrings.humanize(v);
	}
	,labelAxisValue: function(v,axis) {
		if(axis.indexOf("time:") >= 0) {
			var p = axis.substr(axis.indexOf("time:") + "time:".length);
			return rg.util.Periodicity.format(p,v);
		} else return rg.util.RGStrings.humanize(v);
	}
	,labelTotal: function(v,stats) {
		return thx.culture.FormatNumber["int"](v);
	}
	,labelTotalOver: function(v,stats) {
		return thx.culture.FormatNumber.percent(100 * v / stats.tot,1);
	}
	,data: function(dps) {
		var d = this.transformData(dps), table = this.container.append("table").classed().add("pivot-table"), thead = table.append("thead"), leftspan = d.rows.length > 0?d.rows[0].values.length:0, color = thx.color.Rgb.interpolatef(this.colorStart,this.colorEnd);
		this.stats = d.stats;
		if(d.columns.length > 0) {
			var _g1 = 0, _g = d.column_headers.length;
			while(_g1 < _g) {
				var i = _g1++;
				var tr = thead.append("tr");
				this.prependSpacer(leftspan,tr);
				var header = tr.append("th").text().string(this.labelAxis(d.column_headers[i]));
				var clsbuf = ["col-header"];
				if(null != this.headerclass) {
					var v = this.headerclass(d.column_headers[i]);
					if(null != v) clsbuf.push(v);
				}
				header.attr("class").string(clsbuf.join(" "));
				if(d.columns.length > 1) header.attr("colspan")["float"](d.columns.length);
				var counter = 1, last = d.columns[0].values[i];
				tr = thead.append("tr");
				if(i == d.column_headers.length - 1) {
					var _g2 = 0, _g3 = d.row_headers;
					while(_g2 < _g3.length) {
						var h = _g3[_g2];
						++_g2;
						var th = tr.append("th").text().string(this.labelAxis(h));
						var clsbuf1 = ["row-header"];
						if(null != this.headerclass) {
							var v = this.headerclass(h);
							if(null != v) clsbuf1.push(v);
						}
						th.attr("class").string(clsbuf1.join(" "));
					}
				} else this.prependSpacer(leftspan,tr);
				var _g3 = 1, _g2 = d.columns.length;
				while(_g3 < _g2) {
					var j = _g3++;
					var value = d.columns[j].values[i];
					if(last == value) counter++; else {
						this.buildValue(last,d.column_headers[i],counter,tr);
						counter = 1;
						last = value;
					}
				}
				if(null != last) this.buildValue(last,d.column_headers[i],counter,tr);
			}
		}
		if(d.column_headers.length == 0) {
			var tr = thead.append("tr");
			var _g = 0, _g1 = d.row_headers;
			while(_g < _g1.length) {
				var h = _g1[_g];
				++_g;
				tr.append("th").attr("class").string("row header").text().string(this.labelAxis(h));
			}
		}
		var tbody = table.append("tbody"), last = [];
		var _g = 0, _g1 = d.rows;
		while(_g < _g1.length) {
			var row = _g1[_g];
			++_g;
			var tr = tbody.append("tr"), len = row.values.length;
			var _g2 = 0;
			while(_g2 < len) {
				var i = _g2++;
				var v = row.values[i], rep = v == last[i];
				if(!rep) {
					last[i] = v;
					var _g3 = i + 1;
					while(_g3 < len) {
						var j = _g3++;
						last[j] = null;
					}
				}
				var th = tr.append("th").text().string(rep?"":this.labelAxisValue(v,d.row_headers[i]));
				var clsbuf = ["row value"];
				if(rep) clsbuf.push("empty");
				if(null != this.valueclass) {
					var cls = this.valueclass(v,d.row_headers[i]);
					if(null != cls) clsbuf.push(cls);
				}
				th.attr("class").string(clsbuf.join(" "));
			}
			var v;
			var _g2 = 0, _g3 = row.cells;
			while(_g2 < _g3.length) {
				var cell = _g3[_g2];
				++_g2;
				var td = tr.append("td").text().string(this.formatDataPoint(cell)).attr("title").string(this.formatDataPointOver(cell));
				if(null != this.click) td.onNode("click",(function(f,a1) {
					return function(a2,a3) {
						return f(a1,a2,a3);
					};
				})(this.onClick.$bind(this),cell));
				if(this.displayHeatMap && !Math.isNaN(v = Reflect.field(cell,this.cellVariable.type) / d.stats.max)) {
					var c = color(v);
					td.style("color").color(thx.color.Rgb.contrastBW(c)).style("background-color").color(c);
				}
				var clsbuf = [];
				if(null != this.cellclass) {
					var cls = this.cellclass(cell,row.stats);
					if(null != cls) clsbuf.push(cls);
				}
				td.attr("class").string(clsbuf.join(" "));
			}
			if(this.displayRowTotal && d.columns.length > 1) {
				var th = tr.append("th").text().string(this.formatTotal(row.stats.tot)).attr("title").string(this.formatTotalOver(row.stats.tot));
				var clsbuf = ["row total"];
				if(null != this.totalclass) {
					var cls = this.totalclass(row.stats.tot,row.values);
					if(null != cls) clsbuf.push(cls);
				}
				th.attr("class").string(clsbuf.join(" "));
			}
		}
		var tfoot = table.append("tfoot");
		if(this.displayColumnTotal && d.rows.length > 1) {
			var tr = tfoot.append("tr");
			this.prependSpacer(leftspan,tr);
			var _g = 0, _g1 = d.columns;
			while(_g < _g1.length) {
				var col = _g1[_g];
				++_g;
				var th = tr.append("th").text().string(this.formatTotal(col.stats.tot)).attr("title").string(this.formatTotalOver(col.stats.tot));
				var clsbuf = ["column total"];
				if(null != this.totalclass) {
					var cls = this.totalclass(col.stats.tot,col.values);
					if(null != cls) clsbuf.push(cls);
				}
				th.attr("class").string(clsbuf.join(" "));
			}
			if(this.displayRowTotal && d.columns.length > 1) {
				var th = tr.append("th").text().string(this.formatTotal(d.stats.tot)).attr("title").string(this.formatTotalOver(d.stats.tot));
				var clsbuf = ["table total"];
				if(null != this.totalclass) {
					var cls = this.totalclass(d.stats.tot,[]);
					if(null != cls) clsbuf.push(cls);
				}
				th.attr("class").string(clsbuf.join(" "));
			}
		}
		this.ready.dispatch();
	}
	,onClick: function(dp,_,_1) {
		this.click(dp);
	}
	,formatTotal: function(v,_) {
		return this.labelTotal(v,this.stats);
	}
	,formatTotalOver: function(v,_) {
		return this.labelTotalOver(v,this.stats);
	}
	,formatDataPoint: function(dp,_) {
		return this.labelDataPoint(dp,this.stats);
	}
	,formatDataPointOver: function(dp,_) {
		return this.labelDataPointOver(dp,this.stats);
	}
	,buildValue: function(value,header,counter,tr) {
		var th = tr.append("th").text().string(this.labelAxisValue(value,header));
		if(counter > 1) th.attr("colspan")["float"](counter);
		var clsbuf = ["column value"];
		if(null != this.valueclass) {
			var cls = this.valueclass(value,header);
			if(null != cls) clsbuf.push(cls);
		}
		th.attr("class").string(clsbuf.join(" "));
	}
	,prependSpacer: function(counter,tr) {
		if(counter == 0) return;
		var th = tr.append("th").attr("class").string("spacer");
		if(counter > 1) th.attr("colspan")["float"](counter);
	}
	,init: function() {
	}
	,setVariables: function(variableIndependents,variableDependents) {
		this.cellVariable = variableDependents[0];
		this.columnVariables = [];
		var _g1 = 0, _g = this.incolumns;
		while(_g1 < _g) {
			var i = _g1++;
			this.columnVariables.push(variableIndependents[i]);
		}
		this.rowVariables = [];
		var _g1 = this.incolumns, _g = variableIndependents.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.rowVariables.push(variableIndependents[i]);
		}
	}
	,destroy: function() {
		this.container.html().string("");
	}
	,transformData: function(dps) {
		var column_headers = [], row_headers = [], columns = [], rows = [], tcalc = new rg.axis.StatsNumeric(null);
		var variable;
		var _g1 = 0, _g = Ints.min(1,this.columnVariables.length);
		while(_g1 < _g) {
			var i = _g1++;
			variable = this.columnVariables[i];
			column_headers.push(variable.type);
			var _g2 = 0, _g3 = this.range(variable);
			while(_g2 < _g3.length) {
				var value = _g3[_g2];
				++_g2;
				columns.push({ values : [value], stats : null, type : variable.type});
			}
		}
		var _g1 = 1, _g = this.columnVariables.length;
		while(_g1 < _g) {
			var i = _g1++;
			variable = this.columnVariables[i];
			column_headers.push(variable.type);
			var tmp = columns.copy();
			columns = [];
			var _g2 = 0;
			while(_g2 < tmp.length) {
				var src = tmp[_g2];
				++_g2;
				var _g3 = 0, _g4 = this.range(variable);
				while(_g3 < _g4.length) {
					var value = _g4[_g3];
					++_g3;
					var column = Objects.clone(src);
					column.values.push(value);
					columns.push(column);
				}
			}
		}
		var name, headers = column_headers;
		var _g1 = 0, _g = columns.length;
		while(_g1 < _g) {
			var i = _g1++;
			var column = [columns[i]], ccalc = new rg.axis.StatsNumeric(null);
			column[0].stats = ccalc;
			var _g2 = 0, _g3 = Arrays.filter(dps,(function(column) {
				return function(dp) {
					var _g31 = 0, _g21 = headers.length;
					while(_g31 < _g21) {
						var j = _g31++;
						name = headers[j];
						if(name.indexOf("time:") >= 0 && Dates.snap(Reflect.field(dp,name),name.substr(name.indexOf("time:") + "time:".length)) == column[0].values[j] || Reflect.field(dp,name) == column[0].values[j]) return true;
					}
					return false;
				};
			})(column));
			while(_g2 < _g3.length) {
				var dp = _g3[_g2];
				++_g2;
				var v = Reflect.field(dp,this.cellVariable.type);
				if(null == v) continue;
				ccalc.add(v);
				tcalc.add(v);
			}
		}
		var _g1 = 0, _g = Ints.min(1,this.rowVariables.length);
		while(_g1 < _g) {
			var i = _g1++;
			variable = this.rowVariables[i];
			row_headers.push(variable.type);
			var _g2 = 0, _g3 = this.range(variable);
			while(_g2 < _g3.length) {
				var value = _g3[_g2];
				++_g2;
				rows.push({ values : [value], stats : null, cells : null});
			}
		}
		var _g1 = 1, _g = this.rowVariables.length;
		while(_g1 < _g) {
			var i = _g1++;
			variable = this.rowVariables[i];
			row_headers.push(variable.type);
			var tmp = rows.copy();
			rows = [];
			var _g2 = 0;
			while(_g2 < tmp.length) {
				var src = tmp[_g2];
				++_g2;
				var _g3 = 0, _g4 = this.range(variable);
				while(_g3 < _g4.length) {
					var value = _g4[_g3];
					++_g3;
					var row = Objects.clone(src);
					row.values.push(value);
					rows.push(row);
				}
			}
		}
		var name1, headers1 = row_headers;
		var _g1 = 0, _g = rows.length;
		while(_g1 < _g) {
			var i = _g1++;
			var row = [rows[i]];
			row[0].stats = new rg.axis.StatsNumeric(null);
			row[0].cells = [];
			var rdps;
			rdps = Arrays.filter(dps,(function(row) {
				return function(d) {
					var _g3 = 0, _g2 = headers1.length;
					while(_g3 < _g2) {
						var j = _g3++;
						name1 = headers1[j];
						if(name1.indexOf("time:") >= 0 && Dates.snap(Reflect.field(d,name1),name1.substr(name1.indexOf("time:") + "time:".length)) != row[0].values[j] || Reflect.field(d,name1) != row[0].values[j]) return false;
					}
					return true;
				};
			})(row));
			var _g3 = 0, _g2 = columns.length;
			while(_g3 < _g2) {
				var k = _g3++;
				var column = [columns[k]];
				if(column[0].type.indexOf("time:") >= 0) {
					var periodicity = [rg.util.Properties.periodicity(column[0].type)];
					var dp = Arrays.firstf(rdps,(function(periodicity,column) {
						return function(dp1) {
							var _g5 = 0, _g4 = column[0].values.length;
							while(_g5 < _g4) {
								var i1 = _g5++;
								if(Dates.snap(Reflect.field(dp1,column_headers[i1]),periodicity[0]) != column[0].values[i1]) return false;
							}
							return true;
						};
					})(periodicity,column));
					var v = Reflect.field(dp,this.cellVariable.type);
					if(null == v) {
						row[0].cells.push({ });
						continue;
					}
					row[0].cells.push(dp);
					row[0].stats.add(v);
				} else {
					var dp = Arrays.firstf(rdps,(function(column) {
						return function(dp1) {
							var _g5 = 0, _g4 = column[0].values.length;
							while(_g5 < _g4) {
								var i1 = _g5++;
								if(Reflect.field(dp1,column_headers[i1]) != column[0].values[i1]) return false;
							}
							return true;
						};
					})(column));
					var v = Reflect.field(dp,this.cellVariable.type);
					if(null == v) {
						row[0].cells.push({ });
						continue;
					}
					row[0].cells.push(dp);
					row[0].stats.add(v);
				}
			}
		}
		return { column_headers : column_headers, row_headers : row_headers, columns : columns, rows : rows, stats : tcalc};
	}
	,range: function(variable) {
		return variable.axis.range(variable.min(),variable.max());
	}
	,__class__: rg.html.chart.PivotTable
}
rg.html.widget = {}
rg.html.widget.DownloaderMenu = function(handler,position,formats,container) {
	this.handler = handler;
	this.formats = null == formats?rg.html.widget.DownloaderMenu.DEFAULT_FORMATS:formats;
	this.title = rg.html.widget.DownloaderMenu.DEFAULT_TITLE;
	this.build(position,container);
};
$hxClasses["rg.html.widget.DownloaderMenu"] = rg.html.widget.DownloaderMenu;
rg.html.widget.DownloaderMenu.__name__ = ["rg","html","widget","DownloaderMenu"];
rg.html.widget.DownloaderMenu.prototype = {
	handler: null
	,formats: null
	,title: null
	,backgroundColor: null
	,menu: null
	,build: function(position,container) {
		this.createMenu(container);
		var el = this.menu.node();
		var $e = (position);
		switch( $e[1] ) {
		case 6:
			container.node().parentNode.insertBefore(el,container.node().nextSibling);
			break;
		case 5:
			container.node().parentNode.insertBefore(el,container.node());
			break;
		case 3:
			this.menu.classed().add("bottom").classed().add("left");
			break;
		case 4:
			this.menu.classed().add("bottom").classed().add("right");
			break;
		case 0:
			var selector = $e[2];
			dhx.Dom.select(selector).node().appendChild(el);
			break;
		case 1:
			this.menu.classed().add("top").classed().add("left");
			break;
		case 2:
			this.menu.classed().add("top").classed().add("right");
			break;
		}
	}
	,createMenu: function(container) {
		this.menu = container.append("div").attr("class").string("rg menu");
		var options = this.menu.append("div").attr("class").string("options");
		var title = options.append("div").attr("class").string("title").html().string(this.title);
		var list = options.append("ul").selectAll("li").data(this.formats);
		list.enter().append("li").on("click.download",this.click.$bind(this)).html().stringf(function(d,i) {
			return d;
		});
	}
	,click: function(format,_) {
		var me = this;
		this.menu.classed().add("downloading");
		this.handler(format,this.backgroundColor,function(_1) {
			me.menu.classed().remove("downloading");
			return true;
		},function(e) {
			me.menu.classed().remove("downloading");
			js.Lib.alert("ERROR: " + e);
		});
	}
	,__class__: rg.html.widget.DownloaderMenu
}
rg.html.widget.DownloaderPosition = $hxClasses["rg.html.widget.DownloaderPosition"] = { __ename__ : ["rg","html","widget","DownloaderPosition"], __constructs__ : ["ElementSelector","TopLeft","TopRight","BottomLeft","BottomRight","Before","After"] }
rg.html.widget.DownloaderPosition.ElementSelector = function(selector) { var $x = ["ElementSelector",0,selector]; $x.__enum__ = rg.html.widget.DownloaderPosition; $x.toString = $estr; return $x; }
rg.html.widget.DownloaderPosition.TopLeft = ["TopLeft",1];
rg.html.widget.DownloaderPosition.TopLeft.toString = $estr;
rg.html.widget.DownloaderPosition.TopLeft.__enum__ = rg.html.widget.DownloaderPosition;
rg.html.widget.DownloaderPosition.TopRight = ["TopRight",2];
rg.html.widget.DownloaderPosition.TopRight.toString = $estr;
rg.html.widget.DownloaderPosition.TopRight.__enum__ = rg.html.widget.DownloaderPosition;
rg.html.widget.DownloaderPosition.BottomLeft = ["BottomLeft",3];
rg.html.widget.DownloaderPosition.BottomLeft.toString = $estr;
rg.html.widget.DownloaderPosition.BottomLeft.__enum__ = rg.html.widget.DownloaderPosition;
rg.html.widget.DownloaderPosition.BottomRight = ["BottomRight",4];
rg.html.widget.DownloaderPosition.BottomRight.toString = $estr;
rg.html.widget.DownloaderPosition.BottomRight.__enum__ = rg.html.widget.DownloaderPosition;
rg.html.widget.DownloaderPosition.Before = ["Before",5];
rg.html.widget.DownloaderPosition.Before.toString = $estr;
rg.html.widget.DownloaderPosition.Before.__enum__ = rg.html.widget.DownloaderPosition;
rg.html.widget.DownloaderPosition.After = ["After",6];
rg.html.widget.DownloaderPosition.After.toString = $estr;
rg.html.widget.DownloaderPosition.After.__enum__ = rg.html.widget.DownloaderPosition;
rg.html.widget.DownloaderPositions = function() { }
$hxClasses["rg.html.widget.DownloaderPositions"] = rg.html.widget.DownloaderPositions;
rg.html.widget.DownloaderPositions.__name__ = ["rg","html","widget","DownloaderPositions"];
rg.html.widget.DownloaderPositions.parse = function(v) {
	switch(v.toLowerCase()) {
	case "topleft":
		return rg.html.widget.DownloaderPosition.TopLeft;
	case "topright":case "auto":
		return rg.html.widget.DownloaderPosition.TopRight;
	case "bottomleft":
		return rg.html.widget.DownloaderPosition.BottomLeft;
	case "bottomright":
		return rg.html.widget.DownloaderPosition.BottomRight;
	case "before":
		return rg.html.widget.DownloaderPosition.Before;
	case "after":
		return rg.html.widget.DownloaderPosition.After;
	default:
		return rg.html.widget.DownloaderPosition.ElementSelector(v);
	}
}
rg.html.widget.DownloaderPositions.prototype = {
	__class__: rg.html.widget.DownloaderPositions
}
rg.html.widget.Logo = function(container,padright) {
	this.mapvalues = new Hash();
	this.padRight = padright;
	this.id = ++rg.html.widget.Logo._id;
	this.container = container;
	this.create();
	var timer = new haxe.Timer(5000);
	timer.run = this.live.$bind(this);
};
$hxClasses["rg.html.widget.Logo"] = rg.html.widget.Logo;
rg.html.widget.Logo.__name__ = ["rg","html","widget","Logo"];
rg.html.widget.Logo.pageIsBranded = function() {
	var _g = 0, _g1 = rg.html.widget.Logo.getLogos();
	while(_g < _g1.length) {
		var logo = _g1[_g];
		++_g;
		if(!dhx.Dom.select("img[src=\"" + logo + "\"]").empty()) return true;
	}
	return false;
}
rg.html.widget.Logo.createLogo = function(container,padright) {
	var id = container.attr("id").get(), logo = rg.html.widget.Logo.registry.get(id);
	if(null == logo) rg.html.widget.Logo.registry.set(id,logo = new rg.html.widget.Logo(container,padright)); else logo.live();
	return logo;
}
rg.html.widget.Logo.getLogo = function() {
	return rg.html.widget.Logo.getLogos()[0];
}
rg.html.widget.Logo.getLogos = function() {
	return ["http://api.reportgrid.com/css/images/reportgrid-clear.png","http://api.reportgrid.com/css/images/reportgrid-cleart.png","http://api.reportgrid.com/css/images/reportgrid-dark.png","http://api.reportgrid.com/css/images/reportgrid-darkt.png"];
}
rg.html.widget.Logo.position = function(el) {
	var p = { x : el.offsetLeft || 0, y : el.offsetTop || 0};
	while(null != (el = el.offsetParent)) {
		p.x += el.offsetLeft;
		p.y += el.offsetTop;
	}
	return p;
}
rg.html.widget.Logo.prototype = {
	chartContainer: null
	,container: null
	,frame: null
	,anchor: null
	,image: null
	,id: null
	,mapvalues: null
	,padRight: null
	,live: function() {
		if(this.container.select("div.reportgridbrandcontainer").empty()) this.createFrame(); else this.updateFrame();
		if(dhx.Dom.select("body").select("a.reportgridbrandanchor" + this.id).empty()) this.createAnchor(); else this.updateAnchor();
		if(this.anchor.select("img").empty()) this.createImage(); else this.updateImage();
	}
	,create: function() {
		this.createFrame();
		this.createAnchor();
		this.createImage();
	}
	,createFrame: function() {
		this.chartContainer = this.container.select("*");
		this.frame = this.container.insert("div",this.chartContainer.node()).attr("class").string("reportgridbrandcontainer");
		this.updateFrame();
	}
	,createAnchor: function() {
		this.anchor = dhx.Dom.select("body").append("a").attr("class").string("reportgridbrandanchor" + this.id).attr("target").string("_blank");
		this.updateAnchor();
	}
	,createImage: function() {
		this.image = this.anchor.append("img");
		this.updateImage();
	}
	,updateFrame: function() {
		this.setStyle(this.frame,"display","block");
		this.setStyle(this.frame,"opacity","1");
		this.setStyle(this.frame,"width","100%");
		this.setStyle(this.frame,"height",29 + "px");
		this.setStyle(this.frame,"position","relative");
	}
	,setStyle: function(s,name,value) {
		var key = "style:" + name + ":" + value, v;
		if(null != (v = this.mapvalues.get(key)) && v != s.style(name).get()) s.style(name).string(v,"important"); else if(null == v) {
			s.style(name).string(value,"important");
			this.mapvalues.set(key,s.style(name).get());
		}
	}
	,setAttr: function(s,name,value) {
		var key = "attr:" + name + ":" + value, v;
		if(null != (v = this.mapvalues.get(key)) && v != s.attr(name).get()) s.attr(name).string(v); else if(null == v) {
			s.attr(name).string(value);
			this.mapvalues.set(key,s.attr(name).get());
		}
	}
	,updateAnchor: function() {
		var body = js.Lib.document.body, len = body.childNodes.length;
		if(dhx.Dom.select("body :last-child").node() != this.anchor.node()) body.appendChild(this.anchor.node());
		var pos = rg.html.widget.Logo.position(this.frame.node()), width = this.frame.style("width").getFloat();
		this.setAttr(this.anchor,"title","Powered by ReportGrid");
		this.setAttr(this.anchor,"href","http://www.reportgrid.com/charts/");
		this.setStyle(this.anchor,"z-index","2147483647");
		this.setStyle(this.anchor,"display","block");
		this.setStyle(this.anchor,"opacity","1");
		this.setStyle(this.anchor,"position","absolute");
		this.setStyle(this.anchor,"height",29 + "px");
		this.setStyle(this.anchor,"width",194 + "px");
		this.setStyle(this.anchor,"top",pos.y + "px");
		this.setStyle(this.anchor,"left",pos.x - 194 + width - this.padRight + "px");
	}
	,updateImage: function() {
		this.setAttr(this.image,"src",rg.html.widget.Logo.getLogo());
		this.setAttr(this.image,"title","Powered by ReportGrid");
		this.setAttr(this.image,"height","" + 29);
		this.setAttr(this.image,"width","" + 194);
		this.setStyle(this.image,"opacity","1");
		this.setStyle(this.image,"border","none");
		this.setStyle(this.image,"height",29 + "px");
		this.setStyle(this.image,"width",194 + "px");
	}
	,__class__: rg.html.widget.Logo
}
rg.html.widget.Tooltip = function(el) {
	this.visible = false;
	el = null == el?js.Lib.document.body:el;
	this.tooltip = dhx.Dom.selectNode(el).append("div").style("display").string("none").style("position").string("absolute").style("opacity")["float"](0).style("left").string("0px").style("top").string("0px").attr("class").string("rg tooltip").style("z-index").string("1000000");
	this._anchor = this.tooltip.append("div").style("display").string("block").style("position").string("absolute");
	this.setAnchorClass("");
	this.container = this.tooltip.append("div").style("position").string("relative").attr("class").string("rg_container");
	this.background = this.container.append("div").style("display").string("block").append("div").style("z-index").string("-1").attr("class").string("rg_background").style("position").string("absolute").style("left").string("0").style("right").string("0").style("top").string("0").style("bottom").string("0");
	this.content = this.container.append("div").attr("class").string("rg_content");
	this.content.onNode("DOMSubtreeModified",this.resize.$bind(this));
	this.anchortype = "bottomright";
	this.anchordistance = 0;
};
$hxClasses["rg.html.widget.Tooltip"] = rg.html.widget.Tooltip;
rg.html.widget.Tooltip.__name__ = ["rg","html","widget","Tooltip"];
rg.html.widget.Tooltip.__properties__ = {get_instance:"getInstance"}
rg.html.widget.Tooltip.instance = null;
rg.html.widget.Tooltip.getInstance = function() {
	if(null == rg.html.widget.Tooltip.instance) {
		rg.html.widget.Tooltip.instance = new rg.html.widget.Tooltip();
		ReportGrid.tooltip = rg.html.widget.Tooltip.instance;
	}
	return rg.html.widget.Tooltip.instance;
}
rg.html.widget.Tooltip.prototype = {
	tooltip: null
	,_anchor: null
	,container: null
	,background: null
	,content: null
	,anchortype: null
	,anchordistance: null
	,visible: null
	,html: function(value) {
		this.content.node().innerHTML = value;
		this.reanchor();
	}
	,show: function() {
		if(this.visible) return;
		this.tooltip.style("display").string("block");
		this.visible = true;
		this.reanchor();
		this.tooltip.style("opacity")["float"](1);
	}
	,hide: function() {
		if(!this.visible) return;
		this.visible = false;
		this.tooltip.style("opacity")["float"](0).style("display").string("none");
	}
	,showAt: function(x,y) {
		this.moveAt(x,y);
		this.show();
	}
	,moveAt: function(x,y) {
		this.tooltip.style("left").string(x + "px").style("top").string(y + "px");
	}
	,anchor: function(type,distance) {
		if(null == distance) distance = 0;
		if(this.anchortype == type && this.anchordistance == distance) return;
		this.anchortype = type;
		this.anchordistance = distance;
		this.reanchor();
	}
	,setAnchorClass: function(value) {
		this._anchor.attr("class").string("rg_anchor " + value);
	}
	,setAnchorColor: function(color) {
		this._anchor.style("background-color").string(color);
	}
	,resize: function(_,_1) {
		this.reanchor();
	}
	,reanchor: function() {
		if(!this.visible) return;
		var width = this.container.style("width").getFloat(), height = this.container.style("height").getFloat();
		var type = this.anchortype;
		switch(type) {
		case "top":case "bottom":case "center":
			this.container.style("left").string(-width / 2 + "px");
			break;
		case "left":case "topleft":case "bottomleft":
			this.container.style("left").string(this.anchordistance + "px");
			break;
		case "right":case "topright":case "bottomright":
			this.container.style("left").string(-this.anchordistance - width + "px");
			break;
		default:
			throw new thx.error.Error("invalid anchor point: {" + this.anchortype + "}",null,null,{ fileName : "Tooltip.hx", lineNumber : 157, className : "rg.html.widget.Tooltip", methodName : "reanchor"});
		}
		switch(type) {
		case "top":case "topleft":case "topright":
			this.container.style("top").string(this.anchordistance + "px");
			break;
		case "left":case "center":case "right":
			this.container.style("top").string(-height / 2 + "px");
			break;
		case "bottom":case "bottomleft":case "bottomright":
			this.container.style("top").string(-this.anchordistance - height + "px");
			break;
		}
	}
	,__class__: rg.html.widget.Tooltip
}
rg.info = {}
rg.info.Info = function() { }
$hxClasses["rg.info.Info"] = rg.info.Info;
rg.info.Info.__name__ = ["rg","info","Info"];
rg.info.Info.feed = function(info,ob) {
	if(null == ob) return info;
	var cl = Type.getClass(info), method = Reflect.field(cl,"filters");
	if(null == method) {
		Objects.copyTo(ob,info);
		return info;
	}
	var filters = method.apply(cl,[]), value;
	var _g = 0;
	while(_g < filters.length) {
		var filter = filters[_g];
		++_g;
		if(Reflect.hasField(ob,filter.field)) {
			if(null != filter.validator && !filter.validator(value = Reflect.field(ob,filter.field))) throw new thx.error.Error("the parameter '{0}' can't have value '{1}'",[filter.field,value],null,{ fileName : "Info.hx", lineNumber : 34, className : "rg.info.Info", methodName : "feed"});
			var items = null == filter.filter?[{ field : filter.field, value : value}]:filter.filter(value);
			var _g1 = 0;
			while(_g1 < items.length) {
				var item = items[_g1];
				++_g1;
				info[item.field] = item.value;
			}
		}
	}
	return info;
}
rg.info.Info.prototype = {
	__class__: rg.info.Info
}
rg.info.InfoAnimation = function() {
	this.animated = false;
	this.duration = 1500;
	this.delay = 150;
	this.ease = thx.math.Equations.elasticf();
};
$hxClasses["rg.info.InfoAnimation"] = rg.info.InfoAnimation;
rg.info.InfoAnimation.__name__ = ["rg","info","InfoAnimation"];
rg.info.InfoAnimation.filters = function() {
	return [{ field : "animated", validator : function(v) {
		return Std["is"](v,Bool);
	}, filter : null},{ field : "duration", validator : function(v) {
		return Std["is"](v,Int);
	}, filter : null},{ field : "delay", validator : function(v) {
		return Std["is"](v,Int);
	}, filter : null},{ field : "ease", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null}];
}
rg.info.InfoAnimation.prototype = {
	animated: null
	,duration: null
	,ease: null
	,delay: null
	,__class__: rg.info.InfoAnimation
}
rg.info.InfoCartesianChart = function() {
	this.animation = new rg.info.InfoAnimation();
	this.label = new rg.info.InfoLabelAxis();
	this.displayMinorTick = function(_) {
		return true;
	};
	this.displayMajorTick = function(_) {
		return true;
	};
	this.displayLabelTick = function(_) {
		return true;
	};
	this.displayAnchorLineTick = function(_) {
		return false;
	};
	this.displayMinorRule = function(_) {
		return false;
	};
	this.displayMajorRule = function(_) {
		return false;
	};
	this.displayAnchorLineRule = function(_) {
		return false;
	};
	this.labelOrientation = function(_) {
		return null;
	};
	this.labelAnchor = function(_) {
		return null;
	};
	this.labelAngle = function(_) {
		return null;
	};
	this.lengthTickMinor = 2;
	this.lengthTickMajor = 5;
	this.paddingTickMinor = 1;
	this.paddingTickMajor = 1;
	this.paddingLabel = 10;
};
$hxClasses["rg.info.InfoCartesianChart"] = rg.info.InfoCartesianChart;
rg.info.InfoCartesianChart.__name__ = ["rg","info","InfoCartesianChart"];
rg.info.InfoCartesianChart.filters = function() {
	return [{ field : "animation", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "animation", value : rg.info.Info.feed(new rg.info.InfoAnimation(),v)}];
	}},{ field : "click", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null},{ field : "label", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "label", value : rg.info.Info.feed(new rg.info.InfoLabelAxis(),v)}];
	}},{ field : "displaytickmarks", validator : function(v) {
		return Reflect.isFunction(v) || Std["is"](v,Bool);
	}, filter : function(v) {
		return [{ field : "displayMinorTick", value : Std["is"](v,Bool)?function(_) {
			return v;
		}:v},{ field : "displayMajorTick", value : Std["is"](v,Bool)?function(_) {
			return v;
		}:v},{ field : "displayLabelTick", value : Std["is"](v,Bool)?function(_) {
			return v;
		}:v}];
	}},{ field : "displaytickminor", validator : function(v) {
		return Reflect.isFunction(v) || Std["is"](v,Bool);
	}, filter : function(v) {
		return [{ field : "displayMinorTick", value : Std["is"](v,Bool)?function(_) {
			return v;
		}:v}];
	}},{ field : "displaytickmajor", validator : function(v) {
		return Reflect.isFunction(v) || Std["is"](v,Bool);
	}, filter : function(v) {
		return [{ field : "displayMajorTick", value : Std["is"](v,Bool)?function(_) {
			return v;
		}:v}];
	}},{ field : "displayticklabel", validator : function(v) {
		return Reflect.isFunction(v) || Std["is"](v,Bool);
	}, filter : function(v) {
		return [{ field : "displayLabelTick", value : Std["is"](v,Bool)?function(_) {
			return v;
		}:v}];
	}},{ field : "displayanchorlinetick", validator : function(v) {
		return Reflect.isFunction(v) || Std["is"](v,Bool);
	}, filter : function(v) {
		return [{ field : "displayAnchorLineTick", value : Std["is"](v,Bool)?function(_) {
			return v;
		}:v}];
	}},{ field : "displayrules", validator : function(v) {
		return Reflect.isFunction(v) || Std["is"](v,Bool);
	}, filter : function(v) {
		return [{ field : "displayMinorRule", value : Std["is"](v,Bool)?function(_) {
			return v;
		}:v},{ field : "displayMajorRule", value : Std["is"](v,Bool)?function(_) {
			return v;
		}:v}];
	}},{ field : "displayruleminor", validator : function(v) {
		return Reflect.isFunction(v) || Std["is"](v,Bool);
	}, filter : function(v) {
		return [{ field : "displayMinorRule", value : Std["is"](v,Bool)?function(_) {
			return v;
		}:v}];
	}},{ field : "displayrulemajor", validator : function(v) {
		return Reflect.isFunction(v) || Std["is"](v,Bool);
	}, filter : function(v) {
		return [{ field : "displayMajorRule", value : Std["is"](v,Bool)?function(_) {
			return v;
		}:v}];
	}},{ field : "displayanchorlinerule", validator : function(v) {
		return Reflect.isFunction(v) || Std["is"](v,Bool);
	}, filter : function(v) {
		return [{ field : "displayAnchorLineRule", value : Std["is"](v,Bool)?function(_) {
			return v;
		}:v}];
	}},{ field : "lengthtick", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "lengthTickMajor", value : v},{ field : "lengthTickMinor", value : v}];
	}},{ field : "lengthtickminor", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "lengthTickMinor", value : v}];
	}},{ field : "lengthtickmajor", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "lengthTickMajor", value : v}];
	}},{ field : "paddingtick", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "paddingTickMajor", value : v},{ field : "paddingTickMinor", value : v}];
	}},{ field : "paddingtickminor", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "paddingTickMinor", value : v}];
	}},{ field : "paddingtickmajor", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "paddingTickMajor", value : v}];
	}},{ field : "paddingticklabel", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "paddingLabel", value : v}];
	}},{ field : "labelorientation", validator : function(v) {
		return Reflect.isFunction(v) || Std["is"](v,String);
	}, filter : function(v) {
		return [{ field : "labelOrientation", value : Std["is"](v,String)?function(_) {
			return v;
		}:v}];
	}},{ field : "labelanchor", validator : function(v) {
		return Reflect.isFunction(v) || Std["is"](v,String);
	}, filter : function(v) {
		return [{ field : "labelAnchor", value : Std["is"](v,String)?function(_) {
			return v;
		}:v}];
	}},{ field : "labelangle", validator : function(v) {
		return Reflect.isFunction(v) || Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "labelAngle", value : Std["is"](v,Float)?function(_) {
			return v;
		}:v}];
	}}];
}
rg.info.InfoCartesianChart.prototype = {
	animation: null
	,click: null
	,label: null
	,displayMinorTick: null
	,displayMajorTick: null
	,displayLabelTick: null
	,displayAnchorLineTick: null
	,displayMinorRule: null
	,displayMajorRule: null
	,displayAnchorLineRule: null
	,labelOrientation: null
	,labelAnchor: null
	,labelAngle: null
	,lengthTickMinor: null
	,lengthTickMajor: null
	,paddingTickMinor: null
	,paddingTickMajor: null
	,paddingLabel: null
	,__class__: rg.info.InfoCartesianChart
}
rg.info.InfoBarChart = function() {
	rg.info.InfoCartesianChart.call(this);
	this.segment = new rg.info.InfoSegment();
	this.stacked = true;
	this.effect = rg.svg.chart.GradientEffect.Gradient(1.25);
	this.barPadding = 12;
	this.barPaddingAxis = 4;
	this.barPaddingDataPoint = 2;
	this.horizontal = false;
};
$hxClasses["rg.info.InfoBarChart"] = rg.info.InfoBarChart;
rg.info.InfoBarChart.__name__ = ["rg","info","InfoBarChart"];
rg.info.InfoBarChart.filters = function() {
	return [{ field : "stacked", validator : function(v) {
		return Std["is"](v,Bool);
	}, filter : null},{ field : "horizontal", validator : function(v) {
		return Std["is"](v,Bool);
	}, filter : null},{ field : "effect", validator : function(v) {
		return Std["is"](v,String);
	}, filter : function(v) {
		return [{ field : "effect", value : rg.svg.chart.GradientEffects.parse(v)}];
	}},{ field : "barpadding", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "barPadding", value : v}];
	}},{ field : "barpaddingaxis", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "barPaddingAxis", value : v}];
	}},{ field : "barpaddingdatapoint", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "barPaddingDataPoint", value : v}];
	}},{ field : "segmenton", validator : function(v) {
		return Std["is"](v,String);
	}, filter : function(v) {
		return [{ field : "segment", value : rg.info.Info.feed(new rg.info.InfoSegment(),{ on : v})}];
	}},{ field : "segment", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "segment", value : rg.info.Info.feed(new rg.info.InfoSegment(),v)}];
	}}].concat(rg.info.InfoCartesianChart.filters());
}
rg.info.InfoBarChart.__super__ = rg.info.InfoCartesianChart;
rg.info.InfoBarChart.prototype = $extend(rg.info.InfoCartesianChart.prototype,{
	stacked: null
	,effect: null
	,barPaddingDataPoint: null
	,barPaddingAxis: null
	,barPadding: null
	,horizontal: null
	,segment: null
	,__class__: rg.info.InfoBarChart
});
rg.info.InfoDataSource = function() {
};
$hxClasses["rg.info.InfoDataSource"] = rg.info.InfoDataSource;
rg.info.InfoDataSource.__name__ = ["rg","info","InfoDataSource"];
rg.info.InfoDataSource.filters = function() {
	return [{ field : "data", validator : function(v) {
		return Std["is"](v,Array);
	}, filter : function(v) {
		return [{ field : "loader", value : function(handler) {
			handler(v);
		}}];
	}},{ field : "datapoints", validator : function(v) {
		return Std["is"](v,Array);
	}, filter : function(v) {
		return [{ field : "loader", value : function(handler) {
			handler(v);
		}}];
	}},{ field : "load", validator : function(v) {
		return Reflect.isFunction(v) || null != Reflect.field(v,"execute");
	}, filter : function(v) {
		return [{ field : "loader", value : Reflect.isObject(v)?v.execute.$bind(v):v}];
	}}];
}
rg.info.InfoDataSource.prototype = {
	loader: null
	,__class__: rg.info.InfoDataSource
}
rg.info.InfoDomType = function() {
};
$hxClasses["rg.info.InfoDomType"] = rg.info.InfoDomType;
rg.info.InfoDomType.__name__ = ["rg","info","InfoDomType"];
rg.info.InfoDomType.filters = function() {
	return [{ field : "visualization", validator : function(v) {
		return Arrays.exists(rg.visualization.Visualizations.visualizations,v.toLowerCase());
	}, filter : function(v) {
		return [{ value : Arrays.exists(rg.visualization.Visualizations.html,v.toLowerCase())?rg.info.DomKind.Html:rg.info.DomKind.Svg, field : "kind"}];
	}}];
}
rg.info.InfoDomType.prototype = {
	kind: null
	,__class__: rg.info.InfoDomType
}
rg.info.DomKind = $hxClasses["rg.info.DomKind"] = { __ename__ : ["rg","info","DomKind"], __constructs__ : ["Html","Svg"] }
rg.info.DomKind.Html = ["Html",0];
rg.info.DomKind.Html.toString = $estr;
rg.info.DomKind.Html.__enum__ = rg.info.DomKind;
rg.info.DomKind.Svg = ["Svg",1];
rg.info.DomKind.Svg.toString = $estr;
rg.info.DomKind.Svg.__enum__ = rg.info.DomKind;
rg.info.InfoDownload = function() {
	this.service = rg.RGConst.SERVICE_RENDERING_STATIC;
	this.legacyservice = rg.RGConst.LEGACY_RENDERING_STATIC;
	this.formats = ["pdf","png","jpg","svg"];
};
$hxClasses["rg.info.InfoDownload"] = rg.info.InfoDownload;
rg.info.InfoDownload.__name__ = ["rg","info","InfoDownload"];
rg.info.InfoDownload.filters = function() {
	return [{ field : "handler", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null},{ field : "service", validator : function(v) {
		return Std["is"](v,String);
	}, filter : null},{ field : "legacyservice", validator : function(v) {
		return Std["is"](v,String);
	}, filter : null},{ field : "formats", validator : function(v) {
		return Std["is"](v,Array);
	}, filter : null},{ field : "position", validator : function(v) {
		return Std["is"](v,String);
	}, filter : function(v) {
		return [{ field : "position", value : rg.html.widget.DownloaderPositions.parse(v)}];
	}}];
}
rg.info.InfoDownload.prototype = {
	handler: null
	,service: null
	,legacyservice: null
	,position: null
	,formats: null
	,__class__: rg.info.InfoDownload
}
rg.info.InfoFunnelChart = function() {
	this.animation = new rg.info.InfoAnimation();
	this.label = new rg.info.InfoLabelFunnel();
	this.padding = 2.5;
	this.flatness = 1.0;
	this.effect = rg.svg.chart.GradientEffect.Gradient(1.25);
	this.arrowSize = 30;
};
$hxClasses["rg.info.InfoFunnelChart"] = rg.info.InfoFunnelChart;
rg.info.InfoFunnelChart.__name__ = ["rg","info","InfoFunnelChart"];
rg.info.InfoFunnelChart.filters = function() {
	return [{ field : "animation", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "animation", value : rg.info.Info.feed(new rg.info.InfoAnimation(),v)}];
	}},{ field : "label", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "label", value : rg.info.Info.feed(new rg.info.InfoLabelFunnel(),v)}];
	}},{ field : "sort", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : function(v) {
		return [{ field : "sortDataPoint", value : v}];
	}},{ field : "click", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null},{ field : "segmentpadding", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "padding", value : v}];
	}},{ field : "flatness", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : null},{ field : "effect", validator : rg.svg.chart.GradientEffects.canParse, filter : function(v) {
		return [{ field : "effect", value : rg.svg.chart.GradientEffects.parse(v)}];
	}},{ field : "arrowsize", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "arrowSize", value : v}];
	}}];
}
rg.info.InfoFunnelChart.prototype = {
	animation: null
	,label: null
	,sortDataPoint: null
	,click: null
	,padding: null
	,flatness: null
	,effect: null
	,arrowSize: null
	,__class__: rg.info.InfoFunnelChart
}
rg.info.InfoGeneral = function() {
	this.forcelegacy = false;
};
$hxClasses["rg.info.InfoGeneral"] = rg.info.InfoGeneral;
rg.info.InfoGeneral.__name__ = ["rg","info","InfoGeneral"];
rg.info.InfoGeneral.filter = function() {
	return [{ field : "ready", validator : function(v) {
		return Reflect.isFunction(v);
	}, value : null},{ field : "forcelegacy", validator : function(v) {
		return Std["is"](v,Bool);
	}, value : null}];
}
rg.info.InfoGeneral.prototype = {
	ready: null
	,forcelegacy: null
	,__class__: rg.info.InfoGeneral
}
rg.info.InfoGeo = function() {
	this.label = new rg.info.InfoLabel();
	this.map = [rg.info.Info.feed(new rg.info.InfoMap(),{ template : "world"})];
};
$hxClasses["rg.info.InfoGeo"] = rg.info.InfoGeo;
rg.info.InfoGeo.__name__ = ["rg","info","InfoGeo"];
rg.info.InfoGeo.filters = function() {
	return [{ field : "map", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v) || Std["is"](v,Array);
	}, filter : function(v) {
		return [{ field : "map", value : (Std["is"](v,Array)?v:[v]).map(function(d,i) {
			return rg.info.Info.feed(new rg.info.InfoMap(),d);
		})}];
	}}];
}
rg.info.InfoGeo.prototype = {
	map: null
	,label: null
	,__class__: rg.info.InfoGeo
}
rg.info.InfoHeatGrid = function() {
	rg.info.InfoCartesianChart.call(this);
	this.colorScaleMode = rg.svg.chart.ColorScaleMode.FromCssInterpolation();
};
$hxClasses["rg.info.InfoHeatGrid"] = rg.info.InfoHeatGrid;
rg.info.InfoHeatGrid.__name__ = ["rg","info","InfoHeatGrid"];
rg.info.InfoHeatGrid.filters = function() {
	return [{ field : "contour", validator : function(v) {
		return Std["is"](v,Bool);
	}, filter : null},{ field : "color", validator : function(v) {
		return Std["is"](v,String) || Reflect.isFunction(v);
	}, filter : function(v) {
		return [{ field : "colorScaleMode", value : rg.svg.chart.ColorScaleModes.createFromDynamic(v)}];
	}}].concat(rg.info.InfoCartesianChart.filters());
}
rg.info.InfoHeatGrid.__super__ = rg.info.InfoCartesianChart;
rg.info.InfoHeatGrid.prototype = $extend(rg.info.InfoCartesianChart.prototype,{
	contour: null
	,colorScaleMode: null
	,__class__: rg.info.InfoHeatGrid
});
rg.info.InfoLabel = function() {
};
$hxClasses["rg.info.InfoLabel"] = rg.info.InfoLabel;
rg.info.InfoLabel.__name__ = ["rg","info","InfoLabel"];
rg.info.InfoLabel.filters = function() {
	return [{ field : "title", validator : function(v) {
		return Std["is"](v,String) || Reflect.isFunction(v);
	}, filter : function(v) {
		return [{ field : "title", value : Std["is"](v,String)?function() {
			return v;
		}:v}];
	}},{ field : "datapoint", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null},{ field : "datapointover", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null}];
}
rg.info.InfoLabel.prototype = {
	title: null
	,datapoint: null
	,datapointover: null
	,__class__: rg.info.InfoLabel
}
rg.info.InfoLabelAxis = function() {
	rg.info.InfoLabel.call(this);
};
$hxClasses["rg.info.InfoLabelAxis"] = rg.info.InfoLabelAxis;
rg.info.InfoLabelAxis.__name__ = ["rg","info","InfoLabelAxis"];
rg.info.InfoLabelAxis.filters = function() {
	return [{ field : "axis", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null},{ field : "tickmark", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null}].concat(rg.info.InfoLabel.filters());
}
rg.info.InfoLabelAxis.__super__ = rg.info.InfoLabel;
rg.info.InfoLabelAxis.prototype = $extend(rg.info.InfoLabel.prototype,{
	axis: null
	,tickmark: null
	,__class__: rg.info.InfoLabelAxis
});
rg.info.InfoLabelFunnel = function() {
	rg.info.InfoLabel.call(this);
};
$hxClasses["rg.info.InfoLabelFunnel"] = rg.info.InfoLabelFunnel;
rg.info.InfoLabelFunnel.__name__ = ["rg","info","InfoLabelFunnel"];
rg.info.InfoLabelFunnel.filters = function() {
	return [{ field : "arrow", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null}].concat(rg.info.InfoLabel.filters());
}
rg.info.InfoLabelFunnel.__super__ = rg.info.InfoLabel;
rg.info.InfoLabelFunnel.prototype = $extend(rg.info.InfoLabel.prototype,{
	arrow: null
	,__class__: rg.info.InfoLabelFunnel
});
rg.info.InfoLabelLeaderboard = function() {
	rg.info.InfoLabel.call(this);
};
$hxClasses["rg.info.InfoLabelLeaderboard"] = rg.info.InfoLabelLeaderboard;
rg.info.InfoLabelLeaderboard.__name__ = ["rg","info","InfoLabelLeaderboard"];
rg.info.InfoLabelLeaderboard.filters = function() {
	return [{ field : "rank", validator : function(v) {
		return v == null || Reflect.isFunction(v);
	}, filter : null},{ field : "value", validator : function(v) {
		return v == null || Reflect.isFunction(v);
	}, filter : null}].concat(rg.info.InfoLabel.filters());
}
rg.info.InfoLabelLeaderboard.__super__ = rg.info.InfoLabel;
rg.info.InfoLabelLeaderboard.prototype = $extend(rg.info.InfoLabel.prototype,{
	rank: null
	,value: null
	,__class__: rg.info.InfoLabelLeaderboard
});
rg.info.InfoLabelPivotTable = function() {
	rg.info.InfoLabelAxis.call(this);
};
$hxClasses["rg.info.InfoLabelPivotTable"] = rg.info.InfoLabelPivotTable;
rg.info.InfoLabelPivotTable.__name__ = ["rg","info","InfoLabelPivotTable"];
rg.info.InfoLabelPivotTable.filters = function() {
	return [{ field : "total", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null},{ field : "totalover", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null},{ field : "axisvalue", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null}].concat(rg.info.InfoLabelAxis.filters());
}
rg.info.InfoLabelPivotTable.__super__ = rg.info.InfoLabelAxis;
rg.info.InfoLabelPivotTable.prototype = $extend(rg.info.InfoLabelAxis.prototype,{
	total: null
	,totalover: null
	,axisvalue: null
	,__class__: rg.info.InfoLabelPivotTable
});
rg.info.InfoLabelSankey = function() {
	rg.info.InfoLabel.call(this);
};
$hxClasses["rg.info.InfoLabelSankey"] = rg.info.InfoLabelSankey;
rg.info.InfoLabelSankey.__name__ = ["rg","info","InfoLabelSankey"];
rg.info.InfoLabelSankey.filters = function() {
	return [{ field : "edge", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null},{ field : "edgeover", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null},{ field : "node", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null}].concat(rg.info.InfoLabel.filters());
}
rg.info.InfoLabelSankey.__super__ = rg.info.InfoLabel;
rg.info.InfoLabelSankey.prototype = $extend(rg.info.InfoLabel.prototype,{
	edge: null
	,edgeover: null
	,node: null
	,__class__: rg.info.InfoLabelSankey
});
rg.info.InfoLayout = function() {
	this.main = "main";
	this.titleOnTop = true;
	this.scalePattern = rg.layout.ScalePattern.ScalesAlternating;
	this.padding = new rg.info.InfoPadding();
};
$hxClasses["rg.info.InfoLayout"] = rg.info.InfoLayout;
rg.info.InfoLayout.__name__ = ["rg","info","InfoLayout"];
rg.info.InfoLayout.filters = function() {
	return [{ field : "layout", validator : function(v) {
		return Std["is"](v,String) && Arrays.exists(rg.visualization.Visualizations.layouts,v.toLowerCase());
	}, filter : function(v) {
		return [{ field : "layout", value : v.toLowerCase()}];
	}},{ field : "width", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ value : Math.round(v), field : "width"}];
	}},{ field : "height", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ value : Math.round(v), field : "height"}];
	}},{ field : "visualization", validator : function(v) {
		return Arrays.exists(rg.visualization.Visualizations.svg,v.toLowerCase());
	}, filter : function(v) {
		return [{ value : v.toLowerCase(), field : "type"}];
	}},{ field : "main", validator : function(v) {
		return Std["is"](v,String);
	}, filter : null},{ field : "titleontop", validator : function(v) {
		return Std["is"](v,Bool);
	}, filter : function(v) {
		return [{ value : v, field : "titleOnTop"}];
	}},{ field : "yscaleposition", validator : function(v) {
		return Std["is"](v,String);
	}, filter : function(v) {
		return [{ value : v, field : (function($this) {
			var $r;
			switch(v) {
			case "alt":case "alternate":case "alternating":
				$r = rg.layout.ScalePattern.ScalesAlternating;
				break;
			case "right":
				$r = rg.layout.ScalePattern.ScalesAfter;
				break;
			default:
				$r = rg.layout.ScalePattern.ScalesBefore;
			}
			return $r;
		}(this))}];
	}},{ field : "padding", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "padding", value : rg.info.Info.feed(new rg.info.InfoPadding(),v)}];
	}}];
}
rg.info.InfoLayout.prototype = {
	layout: null
	,width: null
	,height: null
	,type: null
	,main: null
	,titleOnTop: null
	,scalePattern: null
	,padding: null
	,__class__: rg.info.InfoLayout
}
rg.info.InfoLeaderboard = function() {
	this.animation = new rg.info.InfoAnimation();
	this.label = new rg.info.InfoLabelLeaderboard();
	this.usemax = false;
	this.displaybar = true;
	this.colorscale = false;
};
$hxClasses["rg.info.InfoLeaderboard"] = rg.info.InfoLeaderboard;
rg.info.InfoLeaderboard.__name__ = ["rg","info","InfoLeaderboard"];
rg.info.InfoLeaderboard.filters = function() {
	return [{ field : "animation", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		var animation = new rg.info.InfoAnimation();
		animation.ease = thx.math.Equations.linear;
		return [{ field : "animation", value : rg.info.Info.feed(animation,v)}];
	}},{ field : "label", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "label", value : rg.info.Info.feed(new rg.info.InfoLabelLeaderboard(),v)}];
	}},{ field : "click", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null},{ field : "sort", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : function(v) {
		return [{ field : "sortDataPoint", value : v}];
	}},{ field : "displaybar", validator : function(v) {
		return Std["is"](v,Bool);
	}, filter : null},{ field : "usemax", validator : function(v) {
		return Std["is"](v,Bool);
	}, filter : null},{ field : "colorscale", validator : function(v) {
		return Std["is"](v,Bool);
	}, filter : null}];
}
rg.info.InfoLeaderboard.prototype = {
	animation: null
	,label: null
	,click: null
	,sortDataPoint: null
	,usemax: null
	,displaybar: null
	,colorscale: null
	,__class__: rg.info.InfoLeaderboard
}
rg.info.InfoLineChart = function() {
	rg.info.InfoCartesianChart.call(this);
	this.segment = new rg.info.InfoSegment();
	this.effect = rg.svg.chart.LineEffect.Gradient(-1.2,2);
	this.interpolation = thx.svg.LineInterpolator.Linear;
	this.displayarea = false;
	this.sensibleradius = 100;
};
$hxClasses["rg.info.InfoLineChart"] = rg.info.InfoLineChart;
rg.info.InfoLineChart.__name__ = ["rg","info","InfoLineChart"];
rg.info.InfoLineChart.filters = function() {
	return [{ field : "symbol", validator : function(v) {
		return Std["is"](v,String) || Reflect.isFunction(v);
	}, filter : function(v) {
		return [{ field : "symbol", value : Std["is"](v,String)?function(_,_1) {
			return v;
		}:v}];
	}},{ field : "symbolstyle", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : function(v) {
		return [{ field : "symbolStyle", value : v}];
	}},{ field : "y0property", validator : function(v) {
		return Std["is"](v,String);
	}, filter : null},{ field : "displayarea", validator : function(v) {
		return Std["is"](v,Bool);
	}, filter : null},{ field : "sensibleradius", validator : function(v) {
		return Std["is"](v,Int);
	}, filter : null},{ field : "effect", validator : function(v) {
		return Std["is"](v,String);
	}, filter : function(v) {
		return [{ field : "effect", value : rg.svg.chart.LineEffects.parse(v)}];
	}},{ field : "interpolation", validator : function(v) {
		return Std["is"](v,String);
	}, filter : function(v) {
		return [{ field : "interpolation", value : thx.svg.LineInterpolators.parse(v)}];
	}},{ field : "segmenton", validator : function(v) {
		return Std["is"](v,String);
	}, filter : function(v) {
		return [{ field : "segment", value : rg.info.Info.feed(new rg.info.InfoSegment(),{ on : v})}];
	}},{ field : "segment", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "segment", value : rg.info.Info.feed(new rg.info.InfoSegment(),v)}];
	}}].concat(rg.info.InfoCartesianChart.filters());
}
rg.info.InfoLineChart.__super__ = rg.info.InfoCartesianChart;
rg.info.InfoLineChart.prototype = $extend(rg.info.InfoCartesianChart.prototype,{
	effect: null
	,interpolation: null
	,symbol: null
	,symbolStyle: null
	,displayarea: null
	,y0property: null
	,segment: null
	,sensibleradius: null
	,__class__: rg.info.InfoLineChart
});
rg.info.InfoMap = function() {
	this.property = "location";
	this.type = "geojson";
	this.colorScaleMode = rg.svg.chart.ColorScaleMode.FromCssInterpolation();
	this.usejsonp = true;
	this.radius = function(_,_1) {
		return 10;
	};
};
$hxClasses["rg.info.InfoMap"] = rg.info.InfoMap;
rg.info.InfoMap.__name__ = ["rg","info","InfoMap"];
rg.info.InfoMap.filters = function() {
	return [{ field : "url", validator : function(v) {
		return Std["is"](v,String);
	}, filter : null},{ field : "type", validator : function(v) {
		return Std["is"](v,String);
	}, filter : null},{ field : "scale", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : null},{ field : "projection", validator : function(v) {
		return Std["is"](v,String);
	}, filter : null},{ field : "classname", validator : function(v) {
		return Std["is"](v,String);
	}, filter : null},{ field : "translate", validator : function(v) {
		return Std["is"](v,Array);
	}, filter : null},{ field : "origin", validator : function(v) {
		return Std["is"](v,Array);
	}, filter : null},{ field : "parallels", validator : function(v) {
		return Std["is"](v,Array);
	}, filter : null},{ field : "mode", validator : function(v) {
		return Std["is"](v,String);
	}, filter : function(v) {
		return [{ field : "mode", value : Type.createEnum(thx.geo.ProjectionMode,Strings.ucfirst(v.toLowerCase()),[])}];
	}},{ field : "property", validator : function(v) {
		return v == null || Std["is"](v,String);
	}, filter : null},{ field : "usejsonp", validator : function(v) {
		return Std["is"](v,Bool);
	}, filter : null},{ field : "template", validator : function(v) {
		return Std["is"](v,String) && rg.info.InfoMap.isValidTemplate(v);
	}, filter : rg.info.InfoMap.fromTemplate},{ field : "label", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "label", value : rg.info.Info.feed(new rg.info.InfoLabel(),v)}];
	}},{ field : "click", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null},{ field : "color", validator : function(v) {
		return Std["is"](v,String) || Reflect.isFunction(v);
	}, filter : function(v) {
		return [{ field : "colorScaleMode", value : rg.svg.chart.ColorScaleModes.createFromDynamic(v)}];
	}},{ field : "radius", validator : function(v) {
		return Std["is"](v,Float) || Reflect.isFunction(v);
	}, filter : function(v) {
		return [{ field : "radius", value : Std["is"](v,Float)?function(_,_1) {
			return v;
		}:v}];
	}},{ field : "mapping", validator : function(v) {
		return Std["is"](v,String) || Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		if(Std["is"](v,String)) return [{ field : "mappingurl", value : v}]; else return [{ field : "mapping", value : v}];
	}}];
}
rg.info.InfoMap.isValidTemplate = function(t) {
	return Arrays.exists(["world","world-countries","usa-states","usa-state-centroids","usa-counties"],t.toLowerCase());
}
rg.info.InfoMap.fromTemplate = function(t) {
	switch(t.toLowerCase()) {
	case "world":case "world-countries":
		return [{ field : "projection", value : "mercator"},{ field : "url", value : rg.RGConst.BASE_URL_GEOJSON + "world-countries.json.js"}];
	case "usa-states":
		return [{ field : "projection", value : "albersusa"},{ field : "url", value : rg.RGConst.BASE_URL_GEOJSON + "usa-states.json.js"}];
	case "usa-state-centroids":
		return [{ field : "projection", value : "albersusa"},{ field : "url", value : rg.RGConst.BASE_URL_GEOJSON + "usa-state-centroids.json.js"}];
	case "usa-counties":
		return [{ field : "projection", value : "albersusa"},{ field : "url", value : rg.RGConst.BASE_URL_GEOJSON + "usa-counties.json.js"}];
	default:
		return (function($this) {
			var $r;
			throw new thx.error.Error("invalid template",null,null,{ fileName : "InfoMap.hx", lineNumber : 194, className : "rg.info.InfoMap", methodName : "fromTemplate"});
			return $r;
		}(this));
	}
}
rg.info.InfoMap.prototype = {
	url: null
	,type: null
	,scale: null
	,projection: null
	,classname: null
	,translate: null
	,origin: null
	,parallels: null
	,mode: null
	,property: null
	,label: null
	,click: null
	,radius: null
	,colorScaleMode: null
	,usejsonp: null
	,mapping: null
	,mappingurl: null
	,__class__: rg.info.InfoMap
}
rg.info.InfoPadding = function() {
};
$hxClasses["rg.info.InfoPadding"] = rg.info.InfoPadding;
rg.info.InfoPadding.__name__ = ["rg","info","InfoPadding"];
rg.info.InfoPadding.filters = function() {
	return [{ field : "top", validator : function(v) {
		return Std["is"](v,Int);
	}, filter : null},{ field : "bottom", validator : function(v) {
		return Std["is"](v,Int);
	}, filter : null},{ field : "left", validator : function(v) {
		return Std["is"](v,Int);
	}, filter : null},{ field : "right", validator : function(v) {
		return Std["is"](v,Int);
	}, filter : null}];
}
rg.info.InfoPadding.prototype = {
	top: null
	,bottom: null
	,left: null
	,right: null
	,__class__: rg.info.InfoPadding
}
rg.info.InfoPieChart = function() {
	this.innerradius = 0.0;
	this.labelradius = 0.45;
	this.labelorientation = rg.svg.widget.LabelOrientation.Aligned;
	this.outerradius = 0.9;
	this.overradius = 0.95;
	this.tooltipradius = 0.5;
	this.animation = new rg.info.InfoAnimation();
	this.label = new rg.info.InfoLabel();
	this.effect = rg.svg.chart.GradientEffect.Gradient(1.2);
	this.dontfliplabel = true;
};
$hxClasses["rg.info.InfoPieChart"] = rg.info.InfoPieChart;
rg.info.InfoPieChart.__name__ = ["rg","info","InfoPieChart"];
rg.info.InfoPieChart.validateOrientation = function(s) {
	var name = s.split(":")[0].toLowerCase();
	return Arrays.exists(["fixed","ortho","orthogonal","align","aligned","horizontal"],name);
}
rg.info.InfoPieChart.filterOrientation = function(s) {
	var name = s.split(":")[0].toLowerCase();
	switch(name) {
	case "fixed":
		var v = Std.parseFloat(s.split(":")[1]);
		if(null == v || !Math.isFinite(v)) throw new thx.error.Error("when 'fixed' is used a number should follow the 'dash' character",null,null,{ fileName : "InfoPieChart.hx", lineNumber : 60, className : "rg.info.InfoPieChart", methodName : "filterOrientation"});
		return rg.svg.widget.LabelOrientation.FixedAngle(v);
	case "ortho":case "orthogonal":
		return rg.svg.widget.LabelOrientation.Orthogonal;
	case "align":case "aligned":
		return rg.svg.widget.LabelOrientation.Aligned;
	case "horizontal":
		return rg.svg.widget.LabelOrientation.FixedAngle(0);
	default:
		throw new thx.error.Error("invalid filter orientation '{0}'",null,s,{ fileName : "InfoPieChart.hx", lineNumber : 69, className : "rg.info.InfoPieChart", methodName : "filterOrientation"});
	}
}
rg.info.InfoPieChart.filters = function() {
	return [{ field : "labelradius", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : null},{ field : "dontfliplabel", validator : function(v) {
		return Std["is"](v,Bool);
	}, filter : null},{ field : "labelorientation", validator : function(v) {
		return Std["is"](v,String) && rg.info.InfoPieChart.validateOrientation(v);
	}, filter : function(v) {
		return [{ field : "labelorientation", value : rg.info.InfoPieChart.filterOrientation(v)}];
	}},{ field : "innerradius", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : null},{ field : "outerradius", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : null},{ field : "overradius", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : null},{ field : "tooltipradius", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : null},{ field : "animation", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "animation", value : rg.info.Info.feed(new rg.info.InfoAnimation(),v)}];
	}},{ field : "label", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "label", value : rg.info.Info.feed(new rg.info.InfoLabel(),v)}];
	}},{ field : "sort", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : function(v) {
		return [{ field : "sortDataPoint", value : v}];
	}},{ field : "click", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null},{ field : "effect", validator : rg.svg.chart.GradientEffects.canParse, filter : function(v) {
		return [{ field : "effect", value : rg.svg.chart.GradientEffects.parse(v)}];
	}}];
}
rg.info.InfoPieChart.prototype = {
	labelradius: null
	,labelorientation: null
	,innerradius: null
	,outerradius: null
	,overradius: null
	,tooltipradius: null
	,animation: null
	,label: null
	,effect: null
	,sortDataPoint: null
	,dontfliplabel: null
	,click: null
	,__class__: rg.info.InfoPieChart
}
rg.info.InfoPivotTable = function() {
	this.label = new rg.info.InfoLabelPivotTable();
	this.heatmapColorStart = rg.info.InfoPivotTable.defaultStartColor;
	this.heatmapColorEnd = rg.info.InfoPivotTable.defaultEndColor;
	this.displayHeatmap = true;
	this.displayColumnTotal = true;
	this.displayRowTotal = true;
	this.columnAxes = 1;
};
$hxClasses["rg.info.InfoPivotTable"] = rg.info.InfoPivotTable;
rg.info.InfoPivotTable.__name__ = ["rg","info","InfoPivotTable"];
rg.info.InfoPivotTable.filters = function() {
	return [{ field : "columnaxes", validator : function(v) {
		return Std["is"](v,Int);
	}, filter : function(v) {
		return [{ field : "columnAxes", value : v}];
	}},{ field : "displayheatmap", validator : function(v) {
		return Std["is"](v,Bool);
	}, filter : function(v) {
		return [{ field : "displayHeatmap", value : v}];
	}},{ field : "displaycolumntotal", validator : function(v) {
		return Std["is"](v,Bool);
	}, filter : function(v) {
		return [{ field : "displayColumnTotal", value : v}];
	}},{ field : "displayrowtotal", validator : function(v) {
		return Std["is"](v,Bool);
	}, filter : function(v) {
		return [{ field : "displayRowTotal", value : v}];
	}},{ field : "startcolor", validator : function(v) {
		return Std["is"](v,String);
	}, filter : function(v) {
		return [{ field : "heatmapColorStart", value : thx.color.Hsl.toHsl(rg.util.RGColors.parse(v,rg.info.InfoPivotTable.defaultStartColor.hex("#")))}];
	}},{ field : "endcolor", validator : function(v) {
		return Std["is"](v,String);
	}, filter : function(v) {
		return [{ field : "heatmapColorEnd", value : thx.color.Hsl.toHsl(rg.util.RGColors.parse(v,rg.info.InfoPivotTable.defaultEndColor.hex("#")))}];
	}},{ field : "label", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "label", value : rg.info.Info.feed(new rg.info.InfoLabelPivotTable(),v)}];
	}},{ field : "click", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null},{ field : "cellclass", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null},{ field : "valueclass", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null},{ field : "headerclass", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null},{ field : "totalclass", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null}];
}
rg.info.InfoPivotTable.prototype = {
	label: null
	,heatmapColorStart: null
	,heatmapColorEnd: null
	,displayHeatmap: null
	,displayColumnTotal: null
	,displayRowTotal: null
	,columnAxes: null
	,click: null
	,cellclass: null
	,valueclass: null
	,headerclass: null
	,totalclass: null
	,__class__: rg.info.InfoPivotTable
}
rg.info.InfoSankey = function() {
	this.label = new rg.info.InfoLabelSankey();
	this.idproperty = "id";
	this.weightproperty = "count";
	this.parentsproperty = "parents";
	this.stackbackedges = true;
	this.thinbackedges = false;
};
$hxClasses["rg.info.InfoSankey"] = rg.info.InfoSankey;
rg.info.InfoSankey.__name__ = ["rg","info","InfoSankey"];
rg.info.InfoSankey.filters = function() {
	return [{ field : "label", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "label", value : rg.info.Info.feed(new rg.info.InfoLabelSankey(),v)}];
	}},{ field : "layerwidth", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "layerWidth", value : v}];
	}},{ field : "nodespacing", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "nodeSpacing", value : v}];
	}},{ field : "dummyspacing", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "dummySpacing", value : v}];
	}},{ field : "extrawidth", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "extraWidth", value : v}];
	}},{ field : "backedgespacing", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "backEdgeSpacing", value : v}];
	}},{ field : "extraheight", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "extraHeight", value : v}];
	}},{ field : "extraradius", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "extraRadius", value : v}];
	}},{ field : "imagewidth", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "imageWidth", value : v}];
	}},{ field : "imageheight", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "imageHeight", value : v}];
	}},{ field : "imagespacing", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "imageSpacing", value : v}];
	}},{ field : "labelnodespacing", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "labelNodeSpacing", value : v}];
	}},{ field : "imagepath", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : function(v) {
		return [{ field : "imagePath", value : v}];
	}},{ field : "click", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : function(v) {
		return [{ field : "click", value : v}];
	}},{ field : "clickedge", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : function(v) {
		return [{ field : "clickEdge", value : v}];
	}},{ field : "layoutmap", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "layoutmap", value : v}];
	}},{ field : "layoutmethod", validator : function(v) {
		return Std["is"](v,String);
	}, filter : null},{ field : "nodeclass", validator : function(v) {
		return Std["is"](v,String) || Reflect.isFunction(v);
	}, filter : function(v) {
		return [{ field : "nodeclass", value : Std["is"](v,String)?function(_,_1) {
			return v;
		}:v}];
	}},{ field : "edgeclass", validator : function(v) {
		return Std["is"](v,String) || Reflect.isFunction(v);
	}, filter : function(v) {
		return [{ field : "edgeclass", value : Std["is"](v,String)?function(_,_1) {
			return v;
		}:v}];
	}},{ field : "displayentry", validator : function(v) {
		return Std["is"](v,Bool) || Reflect.isFunction(v);
	}, filter : function(v) {
		return [{ field : "displayentry", value : Std["is"](v,Bool)?function(_,_1) {
			return v;
		}:v}];
	}},{ field : "displayexit", validator : function(v) {
		return Std["is"](v,Bool) || Reflect.isFunction(v);
	}, filter : function(v) {
		return [{ field : "displayexit", value : Std["is"](v,Bool)?function(_,_1) {
			return v;
		}:v}];
	}},{ field : "stackbackedges", validator : function(v) {
		return Std["is"](v,Bool);
	}, filter : null},{ field : "thinbackedges", validator : function(v) {
		return Std["is"](v,Bool);
	}, filter : null}];
}
rg.info.InfoSankey.prototype = {
	label: null
	,idproperty: null
	,weightproperty: null
	,parentsproperty: null
	,layerWidth: null
	,nodeSpacing: null
	,dummySpacing: null
	,extraWidth: null
	,backEdgeSpacing: null
	,extraHeight: null
	,extraRadius: null
	,imageWidth: null
	,imageHeight: null
	,imageSpacing: null
	,labelNodeSpacing: null
	,imagePath: null
	,layoutmap: null
	,click: null
	,clickEdge: null
	,layoutmethod: null
	,nodeclass: null
	,edgeclass: null
	,displayentry: null
	,displayexit: null
	,stackbackedges: null
	,thinbackedges: null
	,__class__: rg.info.InfoSankey
}
rg.info.InfoScatterGraph = function() {
	rg.info.InfoCartesianChart.call(this);
	this.segment = new rg.info.InfoSegment();
	this.symbol = function(dp,s) {
		return rg.svg.util.SymbolCache.cache.get("circle",16);
	};
};
$hxClasses["rg.info.InfoScatterGraph"] = rg.info.InfoScatterGraph;
rg.info.InfoScatterGraph.__name__ = ["rg","info","InfoScatterGraph"];
rg.info.InfoScatterGraph.filters = function() {
	return [{ field : "symbol", validator : function(v) {
		return Std["is"](v,String) || Reflect.isFunction(v);
	}, filter : function(v) {
		return [{ field : "symbol", value : Std["is"](v,String)?function(_,_1) {
			return v;
		}:v}];
	}},{ field : "symbolstyle", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : function(v) {
		return [{ field : "symbolStyle", value : v}];
	}},{ field : "segmenton", validator : function(v) {
		return Std["is"](v,String);
	}, filter : function(v) {
		return [{ field : "segment", value : rg.info.Info.feed(new rg.info.InfoSegment(),{ on : v})}];
	}},{ field : "segment", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "segment", value : rg.info.Info.feed(new rg.info.InfoSegment(),v)}];
	}}].concat(rg.info.InfoCartesianChart.filters());
}
rg.info.InfoScatterGraph.__super__ = rg.info.InfoCartesianChart;
rg.info.InfoScatterGraph.prototype = $extend(rg.info.InfoCartesianChart.prototype,{
	symbol: null
	,symbolStyle: null
	,segment: null
	,__class__: rg.info.InfoScatterGraph
});
rg.info.InfoSegment = function() {
};
$hxClasses["rg.info.InfoSegment"] = rg.info.InfoSegment;
rg.info.InfoSegment.__name__ = ["rg","info","InfoSegment"];
rg.info.InfoSegment.filters = function() {
	return [{ field : "on", validator : function(v) {
		return Std["is"](v,String);
	}, filter : null},{ field : "transform", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null},{ field : "scale", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null}];
}
rg.info.InfoSegment.prototype = {
	on: null
	,transform: null
	,scale: null
	,__class__: rg.info.InfoSegment
}
rg.info.InfoStreamGraph = function() {
	rg.info.InfoCartesianChart.call(this);
	this.segment = new rg.info.InfoSegment();
	this.interpolation = thx.svg.LineInterpolator.Cardinal();
	this.effect = rg.svg.chart.StreamEffect.GradientVertical(1.25);
};
$hxClasses["rg.info.InfoStreamGraph"] = rg.info.InfoStreamGraph;
rg.info.InfoStreamGraph.__name__ = ["rg","info","InfoStreamGraph"];
rg.info.InfoStreamGraph.filters = function() {
	return [{ field : "interpolation", validator : function(v) {
		return Std["is"](v,String);
	}, filter : function(v) {
		return [{ field : "interpolation", value : thx.svg.LineInterpolators.parse(v)}];
	}},{ field : "effect", validator : function(v) {
		return Std["is"](v,String);
	}, filter : function(v) {
		return [{ field : "effect", value : rg.svg.chart.StreamEffects.parse(v)}];
	}},{ field : "segmenton", validator : function(v) {
		return Std["is"](v,String);
	}, filter : function(v) {
		return [{ field : "segment", value : rg.info.Info.feed(new rg.info.InfoSegment(),{ on : v})}];
	}},{ field : "segment", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "segment", value : rg.info.Info.feed(new rg.info.InfoSegment(),v)}];
	}}].concat(rg.info.InfoCartesianChart.filters());
}
rg.info.InfoStreamGraph.__super__ = rg.info.InfoCartesianChart;
rg.info.InfoStreamGraph.prototype = $extend(rg.info.InfoCartesianChart.prototype,{
	interpolation: null
	,effect: null
	,segment: null
	,__class__: rg.info.InfoStreamGraph
});
rg.info.InfoVariable = function() {
	this.variableType = rg.info.VariableType.Unknown;
};
$hxClasses["rg.info.InfoVariable"] = rg.info.InfoVariable;
rg.info.InfoVariable.__name__ = ["rg","info","InfoVariable"];
rg.info.InfoVariable.filters = function() {
	return [{ field : "type", validator : function(v) {
		return Std["is"](v,String);
	}, filter : null},{ field : "view", validator : function(v) {
		return Std["is"](v,Array) && rg.info.InfoVariable.testViewValue(v[0]) && rg.info.InfoVariable.testViewValue(v[1]);
	}, filter : function(v) {
		var result = [];
		if(null != v[0]) result.push({ field : "min", value : v[0]});
		if(null != v[1]) result.push({ field : "max", value : v[1]});
		return result;
	}},{ field : "values", validator : function(v) {
		return Std["is"](v,Array) && Iterators.all(v.iterator(),function(v1) {
			return Types.isPrimitive(v1);
		});
	}, filter : null},{ field : "groupby", validator : function(v) {
		return Std["is"](v,String) && rg.util.Periodicity.isValidGroupBy(v);
	}, filter : function(v) {
		return [{ field : "groupBy", value : v}];
	}},{ field : "variable", validator : function(v) {
		return Std["is"](v,String) && Arrays.exists(["independent","dependent"],v.toLowerCase());
	}, filter : function(v) {
		return [{ field : "variableType", value : Type.createEnum(rg.info.VariableType,Strings.ucfirst(("" + v).toLowerCase()),[])}];
	}},{ field : "scalemode", validator : function(v) {
		return Std["is"](v,String);
	}, filter : function(v) {
		return [{ field : "scaleDistribution", value : Type.createEnum(rg.axis.ScaleDistribution,"Scale" + Strings.ucfirst(("" + v).toLowerCase()),[])}];
	}}];
}
rg.info.InfoVariable.testViewValue = function(v) {
	return v == null || Types.isPrimitive(v) || Std["is"](v,Date) || Reflect.isFunction(v);
}
rg.info.InfoVariable.__super__ = rg.info.Info;
rg.info.InfoVariable.prototype = $extend(rg.info.Info.prototype,{
	type: null
	,min: null
	,max: null
	,values: null
	,groupBy: null
	,variableType: null
	,scaleDistribution: null
	,__class__: rg.info.InfoVariable
});
rg.info.VariableType = $hxClasses["rg.info.VariableType"] = { __ename__ : ["rg","info","VariableType"], __constructs__ : ["Unknown","Independent","Dependent"] }
rg.info.VariableType.Unknown = ["Unknown",0];
rg.info.VariableType.Unknown.toString = $estr;
rg.info.VariableType.Unknown.__enum__ = rg.info.VariableType;
rg.info.VariableType.Independent = ["Independent",1];
rg.info.VariableType.Independent.toString = $estr;
rg.info.VariableType.Independent.__enum__ = rg.info.VariableType;
rg.info.VariableType.Dependent = ["Dependent",2];
rg.info.VariableType.Dependent.toString = $estr;
rg.info.VariableType.Dependent.__enum__ = rg.info.VariableType;
rg.info.InfoVisualizationOption = function() {
};
$hxClasses["rg.info.InfoVisualizationOption"] = rg.info.InfoVisualizationOption;
rg.info.InfoVisualizationOption.__name__ = ["rg","info","InfoVisualizationOption"];
rg.info.InfoVisualizationOption.filters = function() {
	return [{ field : "axes", validator : function(v) {
		return Std["is"](v,Array) || Reflect.isObject(v);
	}, filter : function(v) {
		return [{ field : "variables", value : Std["is"](v,Array)?v.map(function(v1,i) {
			return rg.info.Info.feed(new rg.info.InfoVariable(),v1);
		}):[rg.info.Info.feed(new rg.info.InfoVariable(),v)]}];
	}},{ field : "options", validator : function(v) {
		return Reflect.isObject(v);
	}, filter : null}];
}
rg.info.InfoVisualizationOption.prototype = {
	variables: null
	,options: null
	,__class__: rg.info.InfoVisualizationOption
}
rg.info.InfoVisualizationType = function() {
	this.replace = true;
};
$hxClasses["rg.info.InfoVisualizationType"] = rg.info.InfoVisualizationType;
rg.info.InfoVisualizationType.__name__ = ["rg","info","InfoVisualizationType"];
rg.info.InfoVisualizationType.filters = function() {
	return [{ field : "visualization", validator : function(v) {
		return Arrays.exists(rg.visualization.Visualizations.visualizations,v.toLowerCase());
	}, filter : function(v) {
		return [{ value : v.toLowerCase(), field : "type"}];
	}},{ field : "replace", validator : function(v) {
		return Std["is"](v,Bool);
	}, filtern : null}];
}
rg.info.InfoVisualizationType.prototype = {
	replace: null
	,type: null
	,__class__: rg.info.InfoVisualizationType
}
rg.interactive = {}
rg.interactive.RGDownloader = function(container,serviceurl) {
	this.container = container;
	this.serviceUrl = serviceurl;
	this.tokenId = rg.util.RG.getTokenId();
};
$hxClasses["rg.interactive.RGDownloader"] = rg.interactive.RGDownloader;
rg.interactive.RGDownloader.__name__ = ["rg","interactive","RGDownloader"];
rg.interactive.RGDownloader.appendArgument = function(url,name,value) {
	var sep = url.indexOf("?") >= 0?"&":"?";
	return url + sep + name + "=" + StringTools.urlEncode(value);
}
rg.interactive.RGDownloader.prototype = {
	serviceUrl: null
	,container: null
	,format: null
	,tokenId: null
	,url: function(ext) {
		return StringTools.replace(this.serviceUrl,"{ext}",ext);
	}
	,download: function(format,backgroundcolor,success,error) {
		if(!Arrays.exists(rg.interactive.RGDownloader.ALLOWED_FORMATS,format)) throw new thx.error.Error("The download format '{0}' is not correct",[format],null,{ fileName : "RGDownloader.hx", lineNumber : 33, className : "rg.interactive.RGDownloader", methodName : "download"});
		this.format = format;
		var http = new haxe.Http(this.url(format));
		http.setHeader("Accept","application/json");
		if(null != error) http.onError = error; else http.onError = function(e) {
			null;
		};
		http.onData = (function(f,a1,a2) {
			return function(a3) {
				return f(a1,a2,a3);
			};
		})(this.complete.$bind(this),success,error);
		http.setParameter("html",this.html());
		http.setParameter("config",this.config());
		http.request(true);
	}
	,findCssSources: function() {
		return dhx.Dom.selectAll("link").filterNode(function(n,_) {
			return "stylesheet" == n.rel;
		}).mapNode(function(n,_) {
			return n.href;
		});
	}
	,extractSvg: function(s) {
		var start = new EReg("<svg",""), end = new EReg("</svg>","");
		start.match(s);
		s = start.matchedRight();
		end.match(s);
		return "<svg" + end.matchedLeft() + "</svg>";
	}
	,html: function() {
		var css = this.findCssSources(), classes = this.container.attr("class").get(), svg = this.extractSvg(this.container.html().get());
		if(null == classes) classes = "rg"; else classes += " rg";
		var html = "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n<title></title>\n" + (null == css?"":css.map(function(href,_) {
			return "<link href=\"" + href + "\" rel=\"stylesheet\" type=\"text/css\" />";
		}).join("\n")) + "\n</head>\n<body>\n<div class=\"" + classes + "\">" + svg + "</div>\n</body>\n</html>";
		return html;
	}
	,config: function() {
		var svg = this.container.select("svg"), width = svg.attr("width").getFloat(), height = svg.attr("height").getFloat();
		var config = "\"cache\":\"1d\",\"duration\":\"1d\",\"width\":" + width + ",\"height\":" + height + ",\"formats\":[\"" + rg.interactive.RGDownloader.ALLOWED_FORMATS.join("\",\"") + "\"]";
		if(null != this.tokenId) config += ",\"params\":{\"tokenId\":true}";
		return "{" + config + "}";
	}
	,complete: function(success,error,content) {
		var ob = thx.json.Json.decode(content);
		if(null != ob.error) {
			if(null != error) error(ob.error);
		} else if(success(ob)) {
			var url = Reflect.field(ob.service,this.format);
			if(null != this.tokenId) url = rg.interactive.RGDownloader.appendArgument(url,"tokenId",this.tokenId);
			url = rg.interactive.RGDownloader.appendArgument(url,"forceDownload","true");
			js.Lib.window.location.href = url;
		}
	}
	,__class__: rg.interactive.RGDownloader
}
rg.interactive.RGLegacyRenderer = function(container,serviceurl) {
	this.container = container;
	this.serviceUrl = serviceurl;
	this.tokenId = rg.util.RG.getTokenId();
};
$hxClasses["rg.interactive.RGLegacyRenderer"] = rg.interactive.RGLegacyRenderer;
rg.interactive.RGLegacyRenderer.__name__ = ["rg","interactive","RGLegacyRenderer"];
rg.interactive.RGLegacyRenderer.getIframeDoc = function(iframe) {
	var iframeDoc = null;
	if(iframe.contentDocument) iframeDoc = iframe.contentDocument; else if(iframe.contentWindow) iframeDoc = iframe.contentWindow.document; else if(null != js.Lib.window.frames[iframe.name]) iframeDoc = js.Lib.window.frames[iframe.name].document;
	return iframeDoc;
}
rg.interactive.RGLegacyRenderer.removeFunctions = function(o) {
	var _g = 0, _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		var f = Reflect.field(o,field);
		if(Reflect.isFunction(f)) Reflect.deleteField(o,field); else if(Reflect.isObject(o) && null == Type.getClass(o)) rg.interactive.RGLegacyRenderer.removeFunctions(f);
	}
}
rg.interactive.RGLegacyRenderer.removeEmpties = function(o) {
	var _g = 0, _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		var f = Reflect.field(o,field);
		if(Reflect.isObject(f) && null == Type.getClass(f)) {
			rg.interactive.RGLegacyRenderer.removeEmpties(f);
			if(Reflect.fields(f).length == 0) Reflect.deleteField(o,field);
		} else if(null == f) Reflect.deleteField(o,field);
	}
}
rg.interactive.RGLegacyRenderer.prototype = {
	serviceUrl: null
	,container: null
	,tokenId: null
	,url: function() {
		return StringTools.replace(this.serviceUrl,"{ext}",rg.interactive.RGLegacyRenderer.FORMAT);
	}
	,display: function(params) {
		this.normalizeParams(params);
		var id = this.container.attr("id").get(), width = params.options.width, height = params.options.height, iframe = this.createIframe(width,height);
		if(null == id) id = "rgchart";
		var u = this.url();
		var h = this.html(id,params);
		var c = this.config(width,height);
		var content = "<form method=\"post\" action=\"" + u + "\" name=\"VIZ\"><textarea name=\"html\">" + h + "</textarea><textarea name=\"config\">" + c + "</textarea><script type=\"text/javascript\">\n  document.VIZ.submit();\n</script>\n</form>";
		this.writeToIframe(iframe.node(),content);
		var inode = iframe.node();
		var doc = rg.interactive.RGLegacyRenderer.getIframeDoc(inode);
		inode.attachEvent("onload",function() {
			var doc1 = rg.interactive.RGLegacyRenderer.getIframeDoc(inode);
			doc1.body.scroll = "no";
			doc1.body.style.overflow = "hidden";
		});
	}
	,createIframe: function(width,height) {
		var id = "rgiframe" + ++rg.interactive.RGLegacyRenderer.nextframeid;
		return this.container.append("iframe").attr("name").string(id).attr("id").string(id).attr("frameBorder").string("0").attr("scrolling").string("no").attr("width").string(width + "").attr("height").string(height + "").attr("marginwidth").string("0").attr("marginheight").string("0").attr("hspace").string("0").attr("vspace").string("0").attr("style").string("width:100%; border:0; height:100%; overflow:auto;").attr("src").string("about:blank");
	}
	,writeToIframe: function(iframe,content) {
		var iframeDoc = rg.interactive.RGLegacyRenderer.getIframeDoc(iframe);
		if(null != iframeDoc) {
			iframeDoc.open();
			iframeDoc.write("<html><head><title></title></head><body style=\"display:none;border:none\" scroll=\"no\">" + content + "</body></html>");
			iframeDoc.close();
		}
	}
	,normalizeParams: function(params) {
		if(null == params.options) params.options = { };
		var size = rg.factory.FactoryLayout.size(this.container,params.options,0);
		params.options.width = size.width;
		params.options.height = size.height;
		rg.interactive.RGLegacyRenderer.removeFunctions(params.options);
		rg.interactive.RGLegacyRenderer.removeEmpties(params);
		Reflect.deleteField(params,"load");
		Reflect.deleteField(params.options,"download");
		params.options.forcelegacy = false;
	}
	,findJsSources: function() {
		var re = new EReg("reportgrid-[^.]+\\.js","");
		return dhx.Dom.selectAll("script").filterNode(function(n,_) {
			return re.match(n.src);
		}).mapNode(function(n,_) {
			return n.src;
		});
	}
	,findCssSources: function() {
		return dhx.Dom.selectAll("link").filterNode(function(n,_) {
			return "stylesheet" == n.rel;
		}).mapNode(function(n,_) {
			return n.href;
		});
	}
	,html: function(id,params) {
		var p = thx.json.Json.encode(params), scripts = this.findJsSources(), css = this.findCssSources(), classes = this.container.attr("class").get();
		if(null == classes) classes = "rg"; else classes += " rg";
		var h = "<!DOCTYPE html>\n<html>\n<head>\n<title></title>\n" + (null == scripts?"":scripts.map(function(src,_) {
			return "<script src=\"" + src + "\" type=\"text/javascript\"></script>";
		}).join("\n")) + (null == css?"":css.map(function(href,_) {
			return "<link href=\"" + href + "\" rel=\"stylesheet\" type=\"text/css\" />";
		}).join("\n")) + "\n<script type=\"text/javascript\">\nfunction __RG__render()\n{\nReportGrid.chart(\"#" + id + "\", " + p + ");\n}\n</script>\n</head>\n<body onload=\"__RG__render()\">\n<div id=\"" + id + "\" class=\"" + classes + "\" style=\"margin:0\"></div>\n</body>\n</html>";
		return h;
	}
	,config: function(width,height) {
		var c = "\"cache\":\"1d\",\"duration\":\"1d\",\"width\":" + width + ",\"height\":" + height + ",\"formats\":[\"" + rg.interactive.RGLegacyRenderer.FORMAT + "\"]";
		return "{" + c + "}";
	}
	,__class__: rg.interactive.RGLegacyRenderer
}
rg.layout = {}
rg.layout.Anchor = $hxClasses["rg.layout.Anchor"] = { __ename__ : ["rg","layout","Anchor"], __constructs__ : ["Top","Bottom","Left","Right"] }
rg.layout.Anchor.Top = ["Top",0];
rg.layout.Anchor.Top.toString = $estr;
rg.layout.Anchor.Top.__enum__ = rg.layout.Anchor;
rg.layout.Anchor.Bottom = ["Bottom",1];
rg.layout.Anchor.Bottom.toString = $estr;
rg.layout.Anchor.Bottom.__enum__ = rg.layout.Anchor;
rg.layout.Anchor.Left = ["Left",2];
rg.layout.Anchor.Left.toString = $estr;
rg.layout.Anchor.Left.__enum__ = rg.layout.Anchor;
rg.layout.Anchor.Right = ["Right",3];
rg.layout.Anchor.Right.toString = $estr;
rg.layout.Anchor.Right.__enum__ = rg.layout.Anchor;
rg.layout.Layout = function(width,height,container) {
	this.container = container;
	container.classed().add("rg");
	this.space = new rg.svg.panel.Space(this.width = width,this.height = height,container.append("div"));
};
$hxClasses["rg.layout.Layout"] = rg.layout.Layout;
rg.layout.Layout.__name__ = ["rg","layout","Layout"];
rg.layout.Layout.prototype = {
	mainPanelName: null
	,width: null
	,height: null
	,space: null
	,container: null
	,getContext: function(name) {
		return null;
	}
	,getPanel: function(name) {
		return null;
	}
	,suggestSize: function(name,size) {
		var panel = this.getPanel(name);
		if(null == panel) return;
		this.suggestPanelSize(panel,size);
	}
	,destroy: function() {
		this.container.selectAll("*").remove();
	}
	,suggestPanelSize: function(panel,size) {
		var stackitem = Types["as"](panel.frame,rg.frame.StackItem);
		if(null == stackitem) return;
		var $e = (stackitem.disposition);
		switch( $e[1] ) {
		case 3:
			var a = $e[3], b = $e[2];
			stackitem.setDisposition(rg.frame.FrameLayout.Fixed(b,a,size));
			break;
		default:
		}
	}
	,suggestPanelPadding: function(panel,before,after) {
		if(null == panel) return;
		var stackitem = Types["as"](panel.frame,rg.frame.StackItem);
		if(null == stackitem) return;
		var $e = (stackitem.disposition);
		switch( $e[1] ) {
		case 0:
			var max = $e[5], min = $e[4], a = $e[3], b = $e[2];
			stackitem.setDisposition(rg.frame.FrameLayout.Fill(null == before?b:before,null == after?a:after,min,max));
			break;
		case 1:
			var max = $e[6], min = $e[5], percent = $e[4], a = $e[3], b = $e[2];
			stackitem.setDisposition(rg.frame.FrameLayout.FillPercent(null == before?b:before,null == after?a:after,percent,min,max));
			break;
		case 2:
			var ratio = $e[4], a = $e[3], b = $e[2];
			stackitem.setDisposition(rg.frame.FrameLayout.FillRatio(null == before?b:before,null == after?a:after,ratio));
			break;
		case 3:
			var size = $e[4], a = $e[3], b = $e[2];
			stackitem.setDisposition(rg.frame.FrameLayout.Fixed(null == before?b:before,null == after?a:after,size));
			break;
		default:
		}
	}
	,paddings: null
	,feedOptions: function(info) {
		this.mainPanelName = info.main;
		this.paddings = info.padding;
	}
	,adjustPadding: function() {
	}
	,__class__: rg.layout.Layout
}
rg.layout.LayoutCartesian = function(width,height,container) {
	rg.layout.Layout.call(this,width,height,container);
	this.titleOnTop = true;
	this.left = true;
	this.alternating = true;
	this.yitems = [];
};
$hxClasses["rg.layout.LayoutCartesian"] = rg.layout.LayoutCartesian;
rg.layout.LayoutCartesian.__name__ = ["rg","layout","LayoutCartesian"];
rg.layout.LayoutCartesian.__super__ = rg.layout.Layout;
rg.layout.LayoutCartesian.prototype = $extend(rg.layout.Layout.prototype,{
	main: null
	,titleOnTop: null
	,leftcontainer: null
	,rightcontainer: null
	,bottomcontainer: null
	,bottommiddlecontainer: null
	,maincontainer: null
	,middlecontainer: null
	,bottomleft: null
	,bottomright: null
	,xtickmarks: null
	,title: null
	,left: null
	,alternating: null
	,yitems: null
	,xtitle: null
	,getContext: function(name) {
		if(this.isY(name)) return this.getYContext(this.getYIndex(name)); else if(this.isYTitle(name)) return this.getYTitle(this.getYIndex(name));
		switch(name) {
		case "title":
			if(null == this.title) this.title = new rg.layout.PanelContext(this.space.createPanelAt(this.titleOnTop?0:1,rg.frame.FrameLayout.Fixed(0,0,0)),this.titleOnTop?rg.layout.Anchor.Bottom:rg.layout.Anchor.Top);
			return this.title;
		case "x":
			return this.getXTickmarks();
		case "xtitle":
			return this.getXTitle();
		default:
			return null;
		}
	}
	,getPanel: function(name) {
		switch(name) {
		case "main":
			return this.getMain();
		case "xtickmarks":
			return this.getBottomContainer();
		case "left":
			return this.getLeftContainer();
		case "right":
			return this.getRightContainer();
		case "bottomleft":
			return this.bottomleft;
		case "bottomright":
			return this.bottomright;
		default:
			var ctx = this.getContext(name);
			if(null == ctx) return null;
			return ctx.panel;
		}
	}
	,getYItem: function(index) {
		if(null == this.yitems[index]) this.yitems[index] = { container : null, context : null, title : null, anchor : this.alternating && index % 2 == 0?rg.layout.Anchor.Right:rg.layout.Anchor.Left};
		return this.yitems[index];
	}
	,getYContainer: function(index) {
		var item = this.getYItem(index);
		if(null == item.container) {
			if(this.alternating && index % 2 == 0) item.container = this.getLeftContainer().createContainerAt(0,rg.frame.FrameLayout.Fixed(0,0,0),rg.frame.Orientation.Horizontal); else item.container = this.getRightContainer().createContainer(rg.frame.FrameLayout.Fixed(0,0,0),rg.frame.Orientation.Horizontal);
			item.container.g.classed().add("group-" + index);
		}
		return item.container;
	}
	,getYContext: function(index) {
		var item = this.getYItem(index);
		if(null == item.context) {
			var panel = (function($this) {
				var $r;
				switch( (item.anchor)[1] ) {
				case 2:
					$r = $this.getYContainer(index).createPanelAt(0,rg.frame.FrameLayout.Fixed(0,0,0));
					break;
				case 3:
					$r = $this.getYContainer(index).createPanel(rg.frame.FrameLayout.Fixed(0,0,0));
					break;
				default:
					$r = null;
				}
				return $r;
			}(this));
			item.context = new rg.layout.PanelContext(panel,item.anchor);
		}
		return item.context;
	}
	,getYTitle: function(index) {
		var item = this.getYItem(index);
		if(null == item.title) {
			var panel = (function($this) {
				var $r;
				switch( (item.anchor)[1] ) {
				case 2:
					$r = $this.getYContainer(index).createPanel(rg.frame.FrameLayout.Fixed(0,0,0));
					break;
				case 3:
					$r = $this.getYContainer(index).createPanelAt(0,rg.frame.FrameLayout.Fixed(0,0,0));
					break;
				default:
					$r = null;
				}
				return $r;
			}(this));
			item.title = new rg.layout.PanelContext(panel,item.anchor);
		}
		return item.title;
	}
	,getYIndex: function(s) {
		if(!rg.layout.LayoutCartesian.REYINDEX.match(s)) return -1; else return Std.parseInt(rg.layout.LayoutCartesian.REYINDEX.matched(1));
	}
	,isY: function(s) {
		return rg.layout.LayoutCartesian.REYAXIS.match(s);
	}
	,isYTitle: function(s) {
		return rg.layout.LayoutCartesian.REYTITLE.match(s);
	}
	,suggestSize: function(name,size) {
		if(this.isY(name) || this.isYTitle(name)) {
			var index = this.getYIndex(name), item = this.getYItem(index);
			if(null == item.container) return;
			var ysize = 0.0;
			if(null != item.context) {
				if(this.isY(name)) this.suggestPanelSize(item.context.panel,size);
				ysize += item.context.panel.frame.width;
			}
			if(null != item.title) {
				if(this.isYTitle(name)) this.suggestPanelSize(item.title.panel,size);
				ysize += item.title.panel.frame.width;
			}
			this.suggestPanelSize(item.container,Math.round(ysize));
			this.suggestLateralSize(item.anchor);
			return;
		}
		rg.layout.Layout.prototype.suggestSize.call(this,name,size);
		switch(name) {
		case "x":case "xtitle":
			var size1 = 0, c = this.getPanel("x");
			if(null != c) size1 += c.frame.height;
			c = this.getPanel("xtitle");
			if(null != c) size1 += c.frame.height;
			rg.layout.Layout.prototype.suggestSize.call(this,"xtickmarks",size1);
			break;
		}
	}
	,suggestLateralSize: function(anchor) {
		var size = 0;
		var i = 0;
		var _g = 0, _g1 = this.yitems;
		while(_g < _g1.length) {
			var item = _g1[_g];
			++_g;
			i++;
			if(null == item.container || !Type.enumEq(item.anchor,anchor)) continue;
			size += item.container.frame.width;
		}
		switch( (anchor)[1] ) {
		case 3:
			this.suggestSize("left",size);
			this.suggestSize("bottomleft",size);
			break;
		case 2:
			this.suggestSize("right",size);
			this.suggestSize("bottomright",size);
			break;
		default:
		}
	}
	,getXTitle: function() {
		if(null == this.xtitle) this.xtitle = new rg.layout.PanelContext(this.getBottomMiddleContainer().createPanel(rg.frame.FrameLayout.Fixed(0,0,0)),rg.layout.Anchor.Top);
		return this.xtitle;
	}
	,getMainContainer: function() {
		if(null == this.maincontainer) this.maincontainer = this.space.createContainerAt(this.titleOnTop?1:0,rg.frame.FrameLayout.Fill(0,0),rg.frame.Orientation.Vertical);
		return this.maincontainer;
	}
	,getMiddleContainer: function() {
		if(null == this.middlecontainer) this.middlecontainer = this.getMainContainer().createContainerAt(0,rg.frame.FrameLayout.Fill(0,0),rg.frame.Orientation.Horizontal);
		return this.middlecontainer;
	}
	,getLeftContainer: function() {
		if(null == this.leftcontainer) this.leftcontainer = this.getMiddleContainer().createContainerAt(0,rg.frame.FrameLayout.Fixed(0,0,0),rg.frame.Orientation.Horizontal);
		return this.leftcontainer;
	}
	,getRightContainer: function() {
		if(null == this.rightcontainer) this.rightcontainer = this.getMiddleContainer().createContainerAt(2,rg.frame.FrameLayout.Fixed(0,0,0),rg.frame.Orientation.Horizontal);
		return this.rightcontainer;
	}
	,getBottomContainer: function() {
		if(null == this.bottomcontainer) this.bottomcontainer = this.getMainContainer().createContainerAt(1,rg.frame.FrameLayout.Fixed(0,0,0),rg.frame.Orientation.Horizontal);
		return this.bottomcontainer;
	}
	,getBottomMiddleContainer: function() {
		if(null == this.bottommiddlecontainer) {
			var container = this.getBottomContainer();
			this.bottomleft = container.createPanel(rg.frame.FrameLayout.Fixed(0,0,0));
			this.bottommiddlecontainer = container.createContainer(rg.frame.FrameLayout.Fill(0,0),rg.frame.Orientation.Vertical);
			this.bottommiddlecontainer.g.classed().add("axis-x");
			this.bottomright = container.createPanel(rg.frame.FrameLayout.Fixed(0,0,0));
		}
		return this.bottommiddlecontainer;
	}
	,getXTickmarks: function() {
		if(null == this.xtickmarks) {
			var container = this.getBottomMiddleContainer();
			this.xtickmarks = new rg.layout.PanelContext(container.createPanelAt(0,rg.frame.FrameLayout.Fixed(0,0,0)),rg.layout.Anchor.Top);
		}
		return this.xtickmarks;
	}
	,getMain: function() {
		if(null == this.main) this.main = this.getMiddleContainer().createPanelAt(1,rg.frame.FrameLayout.Fill(0,0));
		return this.main;
	}
	,feedOptions: function(info) {
		rg.layout.Layout.prototype.feedOptions.call(this,info);
		this.titleOnTop = info.titleOnTop;
		switch( (info.scalePattern)[1] ) {
		case 0:
			this.left = true;
			this.alternating = false;
			break;
		case 1:
			this.left = false;
			this.alternating = false;
			break;
		case 2:
			this.left = true;
			this.alternating = true;
			break;
		}
	}
	,adjustPadding: function() {
		var top = null == this.title && null == this.paddings.top?8:this.paddings.top, bottom = (null == this.xtickmarks || !this.titleOnTop && null == this.title) && null == this.paddings.bottom?8:this.paddings.bottom, left = null == this.leftcontainer && null == this.paddings.left?20:this.paddings.left, right = null == this.rightcontainer && null == this.paddings.right?20:this.paddings.right;
		if(null != left || null != right) {
			this.suggestPanelPadding(this.getMain(),left,right);
			this.suggestPanelPadding(this.bottommiddlecontainer,left,right);
		}
		if(null != top || null != bottom) this.suggestPanelPadding(this.middlecontainer,top,bottom);
	}
	,__class__: rg.layout.LayoutCartesian
});
rg.layout.LayoutSimple = function(width,height,container) {
	rg.layout.Layout.call(this,width,height,container);
	this.titleOnTop = true;
};
$hxClasses["rg.layout.LayoutSimple"] = rg.layout.LayoutSimple;
rg.layout.LayoutSimple.__name__ = ["rg","layout","LayoutSimple"];
rg.layout.LayoutSimple.__super__ = rg.layout.Layout;
rg.layout.LayoutSimple.prototype = $extend(rg.layout.Layout.prototype,{
	main: null
	,titleOnTop: null
	,getContext: function(name) {
		switch(name) {
		case "title":
			if(null != this.title) return null;
			return this.getTitle();
		default:
			return null;
		}
	}
	,getPanel: function(name) {
		switch(name) {
		case "main":
			if(null == this.main) this.main = this.space.createPanelAt(this.titleOnTop?1:0,rg.frame.FrameLayout.Fill(0,0));
			return this.main;
		case "title":
			return this.getTitle().panel;
		default:
			return null;
		}
	}
	,title: null
	,getTitle: function() {
		if(null == this.title) this.title = new rg.layout.PanelContext(this.space.createPanelAt(this.titleOnTop?0:1,rg.frame.FrameLayout.Fixed(0,0,20)),this.titleOnTop?rg.layout.Anchor.Bottom:rg.layout.Anchor.Top);
		return this.title;
	}
	,feedOptions: function(info) {
		rg.layout.Layout.prototype.feedOptions.call(this,info);
		this.titleOnTop = info.titleOnTop;
	}
	,__class__: rg.layout.LayoutSimple
});
rg.layout.LayoutX = function(width,height,container) {
	rg.layout.Layout.call(this,width,height,container);
	this.titleOnTop = true;
};
$hxClasses["rg.layout.LayoutX"] = rg.layout.LayoutX;
rg.layout.LayoutX.__name__ = ["rg","layout","LayoutX"];
rg.layout.LayoutX.__super__ = rg.layout.Layout;
rg.layout.LayoutX.prototype = $extend(rg.layout.Layout.prototype,{
	main: null
	,titleOnTop: null
	,bottomcontainer: null
	,bottommiddlecontainer: null
	,maincontainer: null
	,middlecontainer: null
	,xtickmarks: null
	,title: null
	,xtitle: null
	,getContext: function(name) {
		switch(name) {
		case "title":
			if(null == this.title) this.title = new rg.layout.PanelContext(this.space.createPanelAt(this.titleOnTop?0:1,rg.frame.FrameLayout.Fixed(0,0,0)),this.titleOnTop?rg.layout.Anchor.Bottom:rg.layout.Anchor.Top);
			return this.title;
		case "x":
			return this.getXTickmarks();
		case "xtitle":
			return this.getXTitle();
		default:
			return null;
		}
	}
	,getPanel: function(name) {
		switch(name) {
		case "main":
			return this.getMain();
		case "xtickmarks":
			return this.getBottomContainer();
		default:
			var ctx = this.getContext(name);
			if(null == ctx) return null;
			return ctx.panel;
		}
	}
	,suggestSize: function(name,size) {
		rg.layout.Layout.prototype.suggestSize.call(this,name,size);
		switch(name) {
		case "x":case "xtitle":
			var size1 = 0, c = this.getPanel("x");
			if(null != c) size1 += c.frame.height;
			c = this.getPanel("xtitle");
			if(null != c) size1 += c.frame.height;
			rg.layout.Layout.prototype.suggestSize.call(this,"xtickmarks",size1);
			break;
		}
	}
	,getXTitle: function() {
		if(null == this.xtitle) this.xtitle = new rg.layout.PanelContext(this.getBottomMiddleContainer().createPanel(rg.frame.FrameLayout.Fixed(0,0,0)),rg.layout.Anchor.Top);
		return this.xtitle;
	}
	,getMainContainer: function() {
		if(null == this.maincontainer) this.maincontainer = this.space.createContainerAt(this.titleOnTop?1:0,rg.frame.FrameLayout.Fill(0,0),rg.frame.Orientation.Vertical);
		return this.maincontainer;
	}
	,getMiddleContainer: function() {
		if(null == this.middlecontainer) this.middlecontainer = this.getMainContainer().createContainerAt(0,rg.frame.FrameLayout.Fill(0,0),rg.frame.Orientation.Horizontal);
		return this.middlecontainer;
	}
	,getBottomContainer: function() {
		if(null == this.bottomcontainer) this.bottomcontainer = this.getMainContainer().createContainerAt(1,rg.frame.FrameLayout.Fixed(0,0,0),rg.frame.Orientation.Horizontal);
		return this.bottomcontainer;
	}
	,getBottomMiddleContainer: function() {
		if(null == this.bottommiddlecontainer) {
			var container = this.getBottomContainer();
			this.bottommiddlecontainer = container.createContainer(rg.frame.FrameLayout.Fill(0,0),rg.frame.Orientation.Vertical);
			this.bottommiddlecontainer.g.classed().add("axis-x");
		}
		return this.bottommiddlecontainer;
	}
	,getXTickmarks: function() {
		if(null == this.xtickmarks) {
			var container = this.getBottomMiddleContainer();
			this.xtickmarks = new rg.layout.PanelContext(container.createPanelAt(0,rg.frame.FrameLayout.Fixed(0,0,0)),rg.layout.Anchor.Top);
		}
		return this.xtickmarks;
	}
	,getMain: function() {
		if(null == this.main) this.main = this.getMiddleContainer().createPanelAt(1,rg.frame.FrameLayout.Fill(0,0));
		return this.main;
	}
	,feedOptions: function(info) {
		rg.layout.Layout.prototype.feedOptions.call(this,info);
		this.titleOnTop = info.titleOnTop;
	}
	,adjustPadding: function() {
		var top = null == this.title && null == this.paddings.top?8:this.paddings.top, bottom = (null == this.xtickmarks || !this.titleOnTop && null == this.title) && null == this.paddings.bottom?8:this.paddings.bottom, left = null == this.paddings.left?20:this.paddings.left, right = null == this.paddings.right?20:this.paddings.right;
		if(null != left || null != right) {
			this.suggestPanelPadding(this.getMain(),left,right);
			this.suggestPanelPadding(this.bottommiddlecontainer,left,right);
		}
		if(null != top || null != bottom) this.suggestPanelPadding(this.middlecontainer,top,bottom);
	}
	,__class__: rg.layout.LayoutX
});
rg.layout.PanelContext = function(panel,anchor) {
	this.panel = panel;
	this.anchor = anchor;
};
$hxClasses["rg.layout.PanelContext"] = rg.layout.PanelContext;
rg.layout.PanelContext.__name__ = ["rg","layout","PanelContext"];
rg.layout.PanelContext.prototype = {
	panel: null
	,anchor: null
	,__class__: rg.layout.PanelContext
}
rg.layout.ScalePattern = $hxClasses["rg.layout.ScalePattern"] = { __ename__ : ["rg","layout","ScalePattern"], __constructs__ : ["ScalesBefore","ScalesAfter","ScalesAlternating"] }
rg.layout.ScalePattern.ScalesBefore = ["ScalesBefore",0];
rg.layout.ScalePattern.ScalesBefore.toString = $estr;
rg.layout.ScalePattern.ScalesBefore.__enum__ = rg.layout.ScalePattern;
rg.layout.ScalePattern.ScalesAfter = ["ScalesAfter",1];
rg.layout.ScalePattern.ScalesAfter.toString = $estr;
rg.layout.ScalePattern.ScalesAfter.__enum__ = rg.layout.ScalePattern;
rg.layout.ScalePattern.ScalesAlternating = ["ScalesAlternating",2];
rg.layout.ScalePattern.ScalesAlternating.toString = $estr;
rg.layout.ScalePattern.ScalesAlternating.__enum__ = rg.layout.ScalePattern;
rg.query = {}
rg.query.BaseQuery = function(async,first) {
	this._async = async;
	this._first = first;
	this._store = new Hash();
};
$hxClasses["rg.query.BaseQuery"] = rg.query.BaseQuery;
rg.query.BaseQuery.__name__ = ["rg","query","BaseQuery"];
rg.query.BaseQuery.asyncTransform = function(t) {
	return function(data,handler) {
		var _g1 = 0, _g = data.length;
		while(_g1 < _g) {
			var i = _g1++;
			data[i] = t(data[i]);
		}
		handler(data);
	};
}
rg.query.BaseQuery.stackAsyncTransform = function(t) {
	return function(data,handler) {
		handler(t(data));
	};
}
rg.query.BaseQuery.prototype = {
	_first: null
	,_next: null
	,_async: null
	,_store: null
	,load: function(handler) {
		return this.stackAsync(function(stack,h) {
			handler(function(data) {
				stack.push(data);
				h(stack);
			});
		});
	}
	,data: function(values) {
		if(!Std["is"](values,Array)) values = [values];
		return this.stackAsync(function(stack,h) {
			stack.push(values);
			h(stack);
		});
	}
	,map: function(handler) {
		return this.transform(rg.query.Transformers.map(handler));
	}
	,audit: function(f) {
		return this.transform(function(d) {
			f(d);
			return d;
		});
	}
	,console: function(label) {
		return this.stackTransform(function(data) {
			var API = console;
			if(null != API) API.log((null == label?"":label + ": ") + Dynamics.string(data));
			return data;
		});
	}
	,renameFields: function(o) {
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
	,toObject: function(field) {
		return this.transform(rg.query.Transformers.toObject(field));
	}
	,transform: function(t) {
		return this.stackAsync(rg.query.BaseQuery.asyncTransform(t));
	}
	,stackCross: function() {
		return this.stackTransform(rg.query.Transformers.crossStack);
	}
	,stackTransform: function(t) {
		return this.stackAsync(rg.query.BaseQuery.stackAsyncTransform(t));
	}
	,stackAsync: function(f) {
		var query = this._createQuery(f,this._first);
		this._next = query;
		return query;
	}
	,asyncAll: function(f) {
		return this.stackAsync(function(data,handler) {
			var tot = data.length, pos = 0, result = [];
			var complete = function(i,r) {
				result[i] = r;
				if(++pos == tot) handler(result);
			};
			var _g1 = 0, _g = data.length;
			while(_g1 < _g) {
				var i = _g1++;
				f(data[i],(function(f1,a1) {
					return function(a2) {
						return f1(a1,a2);
					};
				})(complete,i));
			}
		});
	}
	,asyncEach: function(f) {
		return this.asyncAll(function(data,handler) {
			var tot = data.length, pos = 0, result = [];
			var complete = function(i,r) {
				result[i] = r;
				if(++pos == tot) handler(Arrays.flatten(result));
			};
			var _g1 = 0, _g = data.length;
			while(_g1 < _g) {
				var i = _g1++;
				f(data[i],(function(f1,a1) {
					return function(a2) {
						return f1(a1,a2);
					};
				})(complete,i));
			}
		});
	}
	,setValue: function(name,f) {
		return this.transform(rg.query.Transformers.setField(name,f));
	}
	,setValues: function(o) {
		return this.transform(rg.query.Transformers.setFields(o));
	}
	,mapValue: function(name,f) {
		return this.transform(rg.query.Transformers.mapField(name,f));
	}
	,mapValues: function(o) {
		return this.transform(rg.query.Transformers.mapFields(o));
	}
	,addIndex: function(name,start) {
		if(null == name) name = "index";
		if(null == start) start = 0;
		return this.fold(function(_,_1) {
			return start;
		},function(index,dp,result) {
			dp[name] = index;
			result.push(dp);
			return ++index;
		});
	}
	,filter: function(f) {
		return this.transform(rg.query.Transformers.filter(f));
	}
	,filterValues: function(f) {
		return this.transform(rg.query.Transformers.filterValues(f));
	}
	,filterValue: function(name,f) {
		return this.transform(rg.query.Transformers.filterValue(name,f));
	}
	,sort: function(f) {
		return this.transform(rg.query.Transformers.sort(f));
	}
	,sortValue: function(field,ascending) {
		var o = { };
		o[field] = null == ascending?true:ascending;
		return this.sortValues(o);
	}
	,sortValues: function(o) {
		var fields = [], orders = [];
		var _g = 0, _g1 = Reflect.fields(o);
		while(_g < _g1.length) {
			var key = _g1[_g];
			++_g;
			fields.push(key);
			orders.push(Reflect.field(o,key) != false);
		}
		return this.sort(function(a,b) {
			var r, field;
			var _g1 = 0, _g = fields.length;
			while(_g1 < _g) {
				var i = _g1++;
				field = fields[i];
				r = (orders[i]?1:-1) * Dynamics.compare(Reflect.field(a,field),Reflect.field(b,field));
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
	,reverse: function() {
		return this.transform(rg.query.Transformers.reverse);
	}
	,unique: function(f) {
		if(null == f) f = Dynamics.same;
		return this.transform(rg.query.Transformers.uniquef(f));
	}
	,fold: function(startf,reducef) {
		return this.transform(function(data) {
			var result = [], acc = Reflect.isFunction(startf)?startf(data,result):startf;
			data.forEach(function(dp,_) {
				acc = reducef(acc,dp,result);
			});
			return result;
		});
	}
	,stackMerge: function() {
		return this.stackAsync(rg.query.BaseQuery.stackAsyncTransform(function(data) {
			return [Arrays.flatten(data)];
		}));
	}
	,stackDiscard: function(howmany) {
		if(null == howmany) howmany = 1;
		return this.stackAsync(rg.query.BaseQuery.stackAsyncTransform(function(data) {
			var _g = 0;
			while(_g < howmany) {
				var i = _g++;
				data.pop();
			}
			return data;
		}));
	}
	,stackKeep: function(howmany) {
		if(null == howmany) howmany = 1;
		return this.stackAsync(rg.query.BaseQuery.stackAsyncTransform(function(data) {
			return data.slice(0,howmany);
		}));
	}
	,split: function(f) {
		if(Std["is"](f,String)) {
			var name = f;
			f = function(o) {
				return Reflect.field(o,name);
			};
		}
		return this.stackAsync(rg.query.BaseQuery.stackAsyncTransform(function(data) {
			var result = [];
			var _g = 0;
			while(_g < data.length) {
				var arr = data[_g];
				++_g;
				result = result.concat(rg.query.Transformers.split(arr,f));
			}
			return result;
		}));
	}
	,stackRotate: function(matchingf) {
		var t = rg.query.Transformers.rotate(matchingf);
		return this.stackAsync(rg.query.BaseQuery.stackAsyncTransform(function(data) {
			return t(data);
		}));
	}
	,stackReverse: function() {
		return this.stackAsync(rg.query.BaseQuery.stackAsyncTransform(function(data) {
			data.reverse();
			return data;
		}));
	}
	,stackStore: function(name) {
		var me = this;
		if(null == name) name = "";
		return this.stackTransform(function(arr) {
			me._first._store.set(name,arr.copy());
			return arr;
		});
	}
	,stackSort: function(f) {
		return this.stackTransform(function(arr) {
			arr.sort(f);
			return arr;
		});
	}
	,stackSortValue: function(fieldName,ascending) {
		if(null == ascending) ascending = true;
		var sum = function(arr) {
			return arr.reduce(function(value,item,_) {
				return value + Reflect.field(item,fieldName);
			},0);
		};
		return this.stackSort(function(a,b) {
			return (ascending?1:-1) * (sum(a) - sum(b));
		});
	}
	,stackRetrieve: function(name) {
		var me = this;
		if(null == name) name = "";
		return this.stackTransform(function(arr) {
			return arr.concat(me._first._store.get(name));
		});
	}
	,stackClear: function() {
		return this.stackTransform(function(_) {
			return [];
		});
	}
	,execute: function(handler) {
		this._first.execute(handler);
	}
	,_query: function(t) {
		return t;
	}
	,_createQuery: function(async,first) {
		return new rg.query.BaseQuery(async,first);
	}
	,toString: function() {
		return Type.getClassName(Type.getClass(this)).split(".").pop() + (" [next: " + (null != this._next) + ", async: " + (null != this._async) + "]");
	}
	,_this: function(q) {
		return q;
	}
	,__class__: rg.query.BaseQuery
}
rg.query.Query = function() {
	rg.query.BaseQuery.call(this,null,this);
};
$hxClasses["rg.query.Query"] = rg.query.Query;
rg.query.Query.__name__ = ["rg","query","Query"];
rg.query.Query.create = function() {
	var start = new rg.query.Query(), query = start._createQuery(function(data,handler) {
		handler(data);
	},start);
	start._next = query;
	return query;
}
rg.query.Query.executeHandler = function(instance,handler) {
	var current = instance._next;
	var execute = (function($this) {
		var $r;
		var execute1 = null;
		execute1 = function(result) {
			if(null == current._next) {
				handler(Arrays.flatten(result));
				return;
			}
			current = current._next;
			current._async(result,execute1);
		};
		$r = execute1;
		return $r;
	}(this));
	execute([]);
}
rg.query.Query.__super__ = rg.query.BaseQuery;
rg.query.Query.prototype = $extend(rg.query.BaseQuery.prototype,{
	execute: function(handler) {
		rg.query.Query.executeHandler(this,handler);
	}
	,__class__: rg.query.Query
});
rg.query.Transformers = function() { }
$hxClasses["rg.query.Transformers"] = rg.query.Transformers;
rg.query.Transformers.__name__ = ["rg","query","Transformers"];
rg.query.Transformers.crossStack = function(data) {
	if(data.length <= 1) return data;
	var src = data.shift();
	while(data.length > 0) {
		var values = data.shift(), results = [];
		var _g = 0;
		while(_g < src.length) {
			var item = src[_g];
			++_g;
			var _g1 = 0;
			while(_g1 < values.length) {
				var value = values[_g1];
				++_g1;
				results.push(Objects.copyTo(value,Objects.copyTo(item,{ })));
			}
		}
		src = results;
	}
	return [src];
}
rg.query.Transformers.split = function(data,f) {
	var map = new Hash(), result = [];
	data.forEach(function(dp,_) {
		var name = "" + f(dp), pos = map.get(name);
		if(null == pos) {
			pos = result.length;
			map.set(name,pos);
			result.push([]);
		}
		result[pos].push(dp);
	});
	return result;
}
rg.query.Transformers.map = function(handler) {
	return function(data) {
		return data.map(handler);
	};
}
rg.query.Transformers.toObject = function(field) {
	return function(data) {
		return data.map(function(dp,_) {
			var ob = { };
			ob[field] = dp;
			return ob;
		});
	};
}
rg.query.Transformers.filter = function(handler) {
	return function(data) {
		return Arrays.filter(data,handler);
	};
}
rg.query.Transformers.filterValues = function(o) {
	var entries = Objects.entries(o);
	entries.forEach(function(entry,_) {
		if(!Reflect.isFunction(entry.value)) {
			var test = entry.value;
			entry.value = function(v) {
				return v == test;
			};
		}
	});
	var handler = function(d) {
		var _g = 0;
		while(_g < entries.length) {
			var entry = entries[_g];
			++_g;
			if(!entry.value(Reflect.field(d,entry.key))) return false;
		}
		return true;
	};
	return function(data) {
		return Arrays.filter(data,handler);
	};
}
rg.query.Transformers.filterValue = function(name,o) {
	if(!Reflect.isFunction(o)) {
		var test = o;
		o = function(v) {
			return v == test;
		};
	}
	var handler = function(d) {
		if(!o(Reflect.field(d,name))) return false;
		return true;
	};
	return function(data) {
		return Arrays.filter(data,handler);
	};
}
rg.query.Transformers.setField = function(name,o) {
	if(!Reflect.isFunction(o)) {
		var value = o;
		o = function(obj) {
			return value;
		};
	}
	var handler = function(obj) {
		obj[name] = o(obj);
	};
	return function(data) {
		data.forEach(function(d,_) {
			handler(d);
		});
		return data;
	};
}
rg.query.Transformers.mapField = function(name,o) {
	if(!Reflect.isFunction(o)) {
		var value = o;
		o = function(obj) {
			return value;
		};
	}
	var handler = function(obj) {
		obj[name] = o(Reflect.field(obj,name));
	};
	return function(data) {
		data.forEach(function(d,_) {
			handler(d);
		});
		return data;
	};
}
rg.query.Transformers.setFields = function(o) {
	var fields = Reflect.fields(o), fs = [];
	var _g = 0;
	while(_g < fields.length) {
		var field = fields[_g];
		++_g;
		var f = Reflect.field(o,field);
		if(!Reflect.isFunction(f)) fs.push((function(f1,a1) {
			return function(a2) {
				return f1(a1,a2);
			};
		})(function(v,obj) {
			return v;
		},f)); else fs.push(f);
	}
	var handler = function(obj) {
		var _g1 = 0, _g = fields.length;
		while(_g1 < _g) {
			var j = _g1++;
			obj[fields[j]] = fs[j](obj);
		}
	};
	return function(data) {
		data.forEach(function(d,_) {
			handler(d);
		});
		return data;
	};
}
rg.query.Transformers.mapFields = function(o) {
	var fields = Reflect.fields(o), fs = [];
	var _g = 0;
	while(_g < fields.length) {
		var field = fields[_g];
		++_g;
		var f = Reflect.field(o,field);
		if(!Reflect.isFunction(f)) fs.push((function(f1,a1) {
			return function(a2) {
				return f1(a1,a2);
			};
		})(function(v,obj) {
			return v;
		},f)); else fs.push(f);
	}
	var handler = function(obj) {
		var _g1 = 0, _g = fields.length;
		while(_g1 < _g) {
			var j = _g1++;
			obj[fields[j]] = fs[j](Reflect.field(obj,fields[j]));
		}
	};
	return function(data) {
		data.forEach(function(d,_) {
			handler(d);
		});
		return data;
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
rg.query.Transformers.uniquef = function(fun) {
	return function(arr) {
		var i = 0, j;
		while(i < arr.length - 1) {
			var cur = arr[i];
			j = arr.length - 1;
			while(j > i) {
				if(fun(cur,arr[j])) arr.splice(j,1);
				j--;
			}
			i++;
		}
		return arr;
	};
}
rg.query.Transformers.rotate = function(matchingf) {
	if(Std["is"](matchingf,String)) {
		var field = matchingf;
		matchingf = function(a,b) {
			return Reflect.field(a,field) == Reflect.field(b,field);
		};
	}
	var m = null == matchingf?function(_,_1,i,k) {
		return i == k;
	}:function(a,b,_,_1) {
		return matchingf(a,b);
	};
	return function(data) {
		var traversed = [], da = data[0];
		var _g1 = 0, _g = da.length;
		while(_g1 < _g) {
			var i = _g1++;
			var a = da[i], traversal = [a];
			var _g3 = 1, _g2 = data.length;
			while(_g3 < _g2) {
				var j = _g3++;
				var db = data[j];
				var _g5 = 0, _g4 = db.length;
				while(_g5 < _g4) {
					var k = _g5++;
					var b = db[k];
					if(m(a,b,i,k)) {
						traversal.push(b);
						break;
					}
				}
			}
			traversed.push(traversal);
		}
		return traversed;
	};
}
rg.query.Transformers.prototype = {
	__class__: rg.query.Transformers
}
rg.svg = {}
rg.svg.panel = {}
rg.svg.panel.Layer = function(panel) {
	this.frame = (this.panel = panel).frame;
	var p = panel;
	p.addLayer(this);
	this.g = panel.g.append("svg:g");
	this.g.attr("class").string("layer");
	this._resize();
};
$hxClasses["rg.svg.panel.Layer"] = rg.svg.panel.Layer;
rg.svg.panel.Layer.__name__ = ["rg","svg","panel","Layer"];
rg.svg.panel.Layer.prototype = {
	panel: null
	,frame: null
	,g: null
	,width: null
	,height: null
	,customClass: null
	,addClass: function(name) {
		var me = this;
		name.split(" ").forEach(function(d,i) {
			me.g.classed().add(d);
		});
	}
	,_resize: function() {
		this.width = this.frame.width;
		this.height = this.frame.height;
		this.resize();
	}
	,resize: function() {
	}
	,destroy: function() {
		var p = this.panel;
		p.removeLayer(this);
		this.g.remove();
	}
	,setCustomClass: function(v) {
		if(null != this.customClass) this.g.classed().remove(this.customClass);
		this.g.classed().add(v);
		return this.customClass = v;
	}
	,__class__: rg.svg.panel.Layer
	,__properties__: {set_customClass:"setCustomClass"}
}
rg.svg.chart = {}
rg.svg.chart.Chart = function(panel) {
	rg.svg.panel.Layer.call(this,panel);
	this.animated = true;
	this.animationDuration = 1500;
	this.animationEase = thx.math.Equations.linear;
	this.ready = new hxevents.Notifier();
};
$hxClasses["rg.svg.chart.Chart"] = rg.svg.chart.Chart;
rg.svg.chart.Chart.__name__ = ["rg","svg","chart","Chart"];
rg.svg.chart.Chart.__super__ = rg.svg.panel.Layer;
rg.svg.chart.Chart.prototype = $extend(rg.svg.panel.Layer.prototype,{
	animated: null
	,animationDuration: null
	,animationEase: null
	,click: null
	,labelDataPoint: null
	,labelDataPointOver: null
	,ready: null
	,panelx: null
	,panely: null
	,tooltip: null
	,resize: function() {
		var coords = rg.svg.panel.Panels.absolutePos(this.panel);
		this.panelx = coords.x;
		this.panely = coords.y;
	}
	,init: function() {
		if(null != this.labelDataPointOver) this.tooltip = rg.html.widget.Tooltip.getInstance();
		this.resize();
	}
	,moveTooltip: function(x,y,color) {
		var coords = rg.svg.panel.Panels.absolutePos(this.panel);
		this.panelx = coords.x;
		this.panely = coords.y;
		this.tooltip.setAnchorColor(color);
		this.tooltip.showAt(this.panelx + x | 0,this.panely + y | 0);
	}
	,__class__: rg.svg.chart.Chart
});
rg.svg.chart.CartesianChart = function(panel) {
	rg.svg.chart.Chart.call(this,panel);
};
$hxClasses["rg.svg.chart.CartesianChart"] = rg.svg.chart.CartesianChart;
rg.svg.chart.CartesianChart.__name__ = ["rg","svg","chart","CartesianChart"];
rg.svg.chart.CartesianChart.__super__ = rg.svg.chart.Chart;
rg.svg.chart.CartesianChart.prototype = $extend(rg.svg.chart.Chart.prototype,{
	yVariables: null
	,xVariable: null
	,setVariables: function(variables,variableIndependents,variableDependents,data) {
		this.xVariable = variables[0];
		this.yVariables = variables.slice(1);
	}
	,data: function(dps) {
		throw new thx.error.AbstractMethod({ fileName : "CartesianChart.hx", lineNumber : 37, className : "rg.svg.chart.CartesianChart", methodName : "data"});
	}
	,__class__: rg.svg.chart.CartesianChart
});
rg.svg.chart.BarChart = function(panel) {
	rg.svg.chart.CartesianChart.call(this,panel);
	this.addClass("bar-chart");
	this.defs = this.g.append("svg:defs");
	this.chart = this.g.append("svg:g");
	this.gradientLightness = 2;
	this.displayGradient = true;
	this.padding = 10;
	this.paddingAxis = 4;
	this.paddingDataPoint = 2;
	this.horizontal = false;
};
$hxClasses["rg.svg.chart.BarChart"] = rg.svg.chart.BarChart;
rg.svg.chart.BarChart.__name__ = ["rg","svg","chart","BarChart"];
rg.svg.chart.BarChart.__super__ = rg.svg.chart.CartesianChart;
rg.svg.chart.BarChart.prototype = $extend(rg.svg.chart.CartesianChart.prototype,{
	stacked: null
	,chart: null
	,defs: null
	,gradientLightness: null
	,displayGradient: null
	,padding: null
	,paddingAxis: null
	,paddingDataPoint: null
	,horizontal: null
	,setVariables: function(variables,variableIndependents,variableDependents,data) {
		if(this.horizontal) {
			this.xVariable = variableDependents[0];
			this.yVariables = variableIndependents;
		} else {
			this.xVariable = variableIndependents[0];
			this.yVariables = variableDependents;
		}
		if(this.stacked) {
			var _g = 0;
			while(_g < variableDependents.length) {
				var v = variableDependents[_g];
				++_g;
				v.meta.max = Math.NEGATIVE_INFINITY;
			}
			var _g1 = 0, _g = data.length;
			while(_g1 < _g) {
				var i = _g1++;
				var _g3 = 0, _g2 = data[i].length;
				while(_g3 < _g2) {
					var j = _g3++;
					var v = variableDependents[j], t = 0.0;
					var _g5 = 0, _g4 = data[i][j].length;
					while(_g5 < _g4) {
						var k = _g5++;
						t += rg.util.DataPoints.valueAlt(data[i][j][k],v.type,0.0);
					}
					if(v.meta.max < t) v.meta.max = t;
				}
			}
		}
	}
	,data: function(dps) {
		if(this.horizontal) this.datah(dps); else this.datav(dps);
	}
	,datah: function(dps) {
		var axisgs = new Hash(), span = (this.height - this.padding * (dps.length - 1)) / dps.length;
		var getGroup = function(name,container) {
			var gr = axisgs.get(name);
			if(null == gr) {
				gr = container.append("svg:g").attr("class").string(name);
				axisgs.set(name,gr);
			}
			return gr;
		};
		var _g1 = 0, _g = dps.length;
		while(_g1 < _g) {
			var i = _g1++;
			var valuedps = dps[i], dist = (span - this.paddingAxis * (valuedps.length - 1)) / valuedps.length;
			var _g3 = 0, _g2 = valuedps.length;
			while(_g3 < _g2) {
				var j = _g3++;
				var axisdps = valuedps[j], axisg = getGroup("group-" + j,this.chart), xtype = this.xVariable.type, xaxis = this.xVariable.axis, xmin = this.xVariable.min(), xmax = this.xVariable.max(), ytype = this.yVariables[j].type, yaxis = this.yVariables[j].axis, ymin = this.yVariables[j].min(), ymax = this.yVariables[j].max(), pad = Math.max(1,(dist - this.paddingDataPoint * (axisdps.length - 1)) / axisdps.length), offset = -span / 2 + j * (dist + this.paddingAxis), stats = this.xVariable.stats, over = (function(f,a1) {
					return function(a2,a3) {
						return f(a1,a2,a3);
					};
				})(this.onmouseover.$bind(this),stats), click = (function(f,a1) {
					return function(a2,a3,a4) {
						return f(a1,a2,a3,a4);
					};
				})(this.onclick.$bind(this),stats);
				var prev = 0.0;
				var _g5 = 0, _g4 = axisdps.length;
				while(_g5 < _g4) {
					var k = _g5++;
					var dp = axisdps[k], seggroup = getGroup("fill-" + k,axisg), x = prev, y = this.height * yaxis.scale(ymin,ymax,Reflect.field(dp,ytype)), w = xaxis.scale(xmin,xmax,Reflect.field(dp,xtype)) * this.width;
					var bar = seggroup.append("svg:rect").attr("class").string("bar").attr("x")["float"](x).attr("y")["float"](this.height - (this.stacked?y - offset:y - offset - k * (pad + this.paddingDataPoint))).attr("height")["float"](this.stacked?dist:pad).attr("width")["float"](w).onNode("mouseover",over).onNode("click",(function(f,a1) {
						return function(a2,a3) {
							return f(a1,a2,a3);
						};
					})(click,dp));
					bar.node()["__dhx_data__"] = dp;
					rg.util.RGColors.storeColorForSelection(bar);
					if(this.displayGradient) bar.eachNode(this.applyGradient.$bind(this));
					if(this.stacked) prev = x + w;
				}
			}
		}
		this.ready.dispatch();
	}
	,datav: function(dps) {
		var axisgs = new Hash(), span = (this.width - this.padding * (dps.length - 1)) / dps.length;
		var getGroup = function(name,container) {
			var gr = axisgs.get(name);
			if(null == gr) {
				gr = container.append("svg:g").attr("class").string(name);
				axisgs.set(name,gr);
			}
			return gr;
		};
		var _g1 = 0, _g = dps.length;
		while(_g1 < _g) {
			var i = _g1++;
			var valuedps = dps[i], dist = (span - this.paddingAxis * (valuedps.length - 1)) / valuedps.length;
			var _g3 = 0, _g2 = valuedps.length;
			while(_g3 < _g2) {
				var j = _g3++;
				var axisdps = valuedps[j], axisg = getGroup("group-" + j,this.chart), xtype = this.xVariable.type, xaxis = this.xVariable.axis, xmin = this.xVariable.min(), xmax = this.xVariable.max(), ytype = this.yVariables[j].type, yaxis = this.yVariables[j].axis, ymin = this.yVariables[j].min(), ymax = this.yVariables[j].max(), pad = Math.max(1,(dist - this.paddingDataPoint * (axisdps.length - 1)) / axisdps.length), offset = -span / 2 + j * (dist + this.paddingAxis), stats = this.yVariables[j].stats, over = (function(f,a1) {
					return function(a2,a3) {
						return f(a1,a2,a3);
					};
				})(this.onmouseover.$bind(this),stats), click = (function(f,a1) {
					return function(a2,a3,a4) {
						return f(a1,a2,a3,a4);
					};
				})(this.onclick.$bind(this),stats);
				var prev = 0.0;
				var _g5 = 0, _g4 = axisdps.length;
				while(_g5 < _g4) {
					var k = _g5++;
					var dp = axisdps[k], seggroup = getGroup("fill-" + k,axisg), x = this.width * xaxis.scale(xmin,xmax,Reflect.field(dp,xtype)), y = prev, h = yaxis.scale(ymin,ymax,Reflect.field(dp,ytype)) * this.height;
					if(Math.isNaN(h)) h = 0;
					var bar = seggroup.append("svg:rect").attr("class").string("bar").attr("x")["float"](this.stacked?x + offset:x + offset + k * (pad + this.paddingDataPoint)).attr("width")["float"](this.stacked?dist:pad).attr("y")["float"](this.height - h - y).attr("height")["float"](h).onNode("mouseover",over).onNode("click",(function(f,a1) {
						return function(a2,a3) {
							return f(a1,a2,a3);
						};
					})(click,dp));
					bar.node()["__dhx_data__"] = dp;
					rg.util.RGColors.storeColorForSelection(bar);
					if(this.displayGradient) bar.eachNode(this.applyGradient.$bind(this));
					if(this.stacked) prev = y + h;
				}
			}
		}
		this.ready.dispatch();
	}
	,onclick: function(stats,dp,_,i) {
		this.click(dp,stats);
	}
	,onmouseover: function(stats,n,i) {
		var dp = Reflect.field(n,"__dhx_data__"), text = this.labelDataPointOver(dp,stats);
		if(null == text) this.tooltip.hide(); else {
			var sel = dhx.Dom.selectNode(n), x = sel.attr("x").getFloat(), y = sel.attr("y").getFloat(), w = sel.attr("width").getFloat();
			this.tooltip.html(text.split("\n").join("<br>"));
			this.moveTooltip(x + w / 2,y,rg.util.RGColors.extractColor(n));
		}
	}
	,applyGradient: function(n,i) {
		var ng = dhx.Dom.selectNodeData(n), dp = Reflect.field(n,"__dhx_data__"), scolor = ng.style("fill").get(), color = rg.util.RGColors.parse(scolor,"#ccc"), id = "rg_bar_gradient_" + color.hex("");
		if(this.defs.select("#" + id).empty()) {
			var scolor1 = rg.util.RGColors.applyLightness(thx.color.Hsl.toHsl(color),this.gradientLightness).toRgbString();
			var gradient = this.defs.append("svg:linearGradient").attr("gradientUnits").string("objectBoundingBox").attr("id").string(id).attr("x1")["float"](0).attr("x2")["float"](0).attr("y1")["float"](1).attr("y2")["float"](0).attr("spreadMethod").string("pad");
			gradient.append("svg:stop").attr("offset")["float"](0).attr("stop-color").string(scolor1).attr("stop-opacity")["float"](1);
			gradient.append("svg:stop").attr("offset")["float"](1).attr("stop-color").string(color.toRgbString()).attr("stop-opacity")["float"](1);
		}
		ng.attr("style").string("fill:url(#" + id + ")");
	}
	,__class__: rg.svg.chart.BarChart
});
rg.svg.chart.ColorScaleMode = $hxClasses["rg.svg.chart.ColorScaleMode"] = { __ename__ : ["rg","svg","chart","ColorScaleMode"], __constructs__ : ["FromCssInterpolation","FromCss","Interpolation","Sequence","Fixed","Fun"] }
rg.svg.chart.ColorScaleMode.FromCssInterpolation = function(steps) { var $x = ["FromCssInterpolation",0,steps]; $x.__enum__ = rg.svg.chart.ColorScaleMode; $x.toString = $estr; return $x; }
rg.svg.chart.ColorScaleMode.FromCss = function(steps) { var $x = ["FromCss",1,steps]; $x.__enum__ = rg.svg.chart.ColorScaleMode; $x.toString = $estr; return $x; }
rg.svg.chart.ColorScaleMode.Interpolation = function(colors) { var $x = ["Interpolation",2,colors]; $x.__enum__ = rg.svg.chart.ColorScaleMode; $x.toString = $estr; return $x; }
rg.svg.chart.ColorScaleMode.Sequence = function(colors) { var $x = ["Sequence",3,colors]; $x.__enum__ = rg.svg.chart.ColorScaleMode; $x.toString = $estr; return $x; }
rg.svg.chart.ColorScaleMode.Fixed = function(color) { var $x = ["Fixed",4,color]; $x.__enum__ = rg.svg.chart.ColorScaleMode; $x.toString = $estr; return $x; }
rg.svg.chart.ColorScaleMode.Fun = function(f) { var $x = ["Fun",5,f]; $x.__enum__ = rg.svg.chart.ColorScaleMode; $x.toString = $estr; return $x; }
rg.svg.chart.ColorScaleModes = function() { }
$hxClasses["rg.svg.chart.ColorScaleModes"] = rg.svg.chart.ColorScaleModes;
rg.svg.chart.ColorScaleModes.__name__ = ["rg","svg","chart","ColorScaleModes"];
rg.svg.chart.ColorScaleModes.createFromDynamic = function(v) {
	if(Reflect.isFunction(v)) return rg.svg.chart.ColorScaleMode.Fun(v);
	if(!Std["is"](v,String)) return (function($this) {
		var $r;
		throw new thx.error.Error("invalid color mode '{0}'",[v],null,{ fileName : "ColorScaleModes.hx", lineNumber : 19, className : "rg.svg.chart.ColorScaleModes", methodName : "createFromDynamic"});
		return $r;
	}(this));
	var s = ((function($this) {
		var $r;
		var $t = v;
		if(Std["is"]($t,String)) $t; else throw "Class cast error";
		$r = $t;
		return $r;
	}(this))).split(":");
	switch(s[0].toLowerCase()) {
	case "css":
		return rg.svg.chart.ColorScaleMode.FromCss(null == s[1]?null:Std.parseInt(s[1]));
	case "i":case "interpolated":
		return rg.svg.chart.ColorScaleMode.Interpolation(s[1].split(",").map(function(d,i) {
			return thx.color.Colors.parse(d);
		}));
	case "s":case "sequence":
		return rg.svg.chart.ColorScaleMode.Sequence(s[1].split(",").map(function(d,i) {
			return thx.color.Colors.parse(d);
		}));
	case "f":case "fixed":
		return rg.svg.chart.ColorScaleMode.Fixed(thx.color.Colors.parse(s[1]));
	default:
		if(s[0].indexOf(",") >= 0) return rg.svg.chart.ColorScaleMode.Sequence(s[0].split(",").map(function(d,i) {
			return thx.color.Colors.parse(d);
		})); else return rg.svg.chart.ColorScaleMode.Fixed(thx.color.Colors.parse(s[0]));
	}
}
rg.svg.chart.ColorScaleModes.prototype = {
	__class__: rg.svg.chart.ColorScaleModes
}
rg.svg.chart.Coords = function() { }
$hxClasses["rg.svg.chart.Coords"] = rg.svg.chart.Coords;
rg.svg.chart.Coords.__name__ = ["rg","svg","chart","Coords"];
rg.svg.chart.Coords.fromTransform = function(s) {
	if(!rg.svg.chart.Coords.retransform.match(s)) return [0.0,0]; else {
		var y = rg.svg.chart.Coords.retransform.matched(2);
		return [Std.parseFloat(rg.svg.chart.Coords.retransform.matched(1)),null == y?0:Std.parseFloat(y)];
	}
}
rg.svg.chart.Coords.prototype = {
	__class__: rg.svg.chart.Coords
}
rg.svg.chart.FunnelChart = function(panel) {
	rg.svg.chart.Chart.call(this,panel);
	this.padding = 2.5;
	this.flatness = 1.0;
	this.arrowSize = 30;
	this.gradientLightness = 1;
	this.displayGradient = true;
	this.labelArrow = this.defaultLabelArrow.$bind(this);
	this.labelDataPoint = this.defaultLabelDataPoint.$bind(this);
	this.labelDataPointOver = this.defaultLabelDataPointOver.$bind(this);
};
$hxClasses["rg.svg.chart.FunnelChart"] = rg.svg.chart.FunnelChart;
rg.svg.chart.FunnelChart.__name__ = ["rg","svg","chart","FunnelChart"];
rg.svg.chart.FunnelChart.__super__ = rg.svg.chart.Chart;
rg.svg.chart.FunnelChart.prototype = $extend(rg.svg.chart.Chart.prototype,{
	padding: null
	,flatness: null
	,displayGradient: null
	,gradientLightness: null
	,arrowSize: null
	,labelArrow: null
	,variableIndependent: null
	,variableDependent: null
	,defs: null
	,dps: null
	,defaultLabelArrow: function(dp,stats) {
		var value = Reflect.field(dp,this.variableDependent.type) / stats.max;
		return thx.culture.FormatNumber.percent(100 * value,0);
	}
	,defaultLabelDataPoint: function(dp,stats) {
		return rg.util.RGStrings.humanize(Reflect.field(dp,this.variableIndependent.type)).split(" ").join("\n");
	}
	,defaultLabelDataPointOver: function(dp,stats) {
		return Ints.format(Reflect.field(dp,this.variableDependent.type));
	}
	,setVariables: function(variableIndependents,variableDependents) {
		this.variableIndependent = variableIndependents[0];
		this.variableDependent = variableDependents[0];
	}
	,data: function(dps) {
		this.dps = dps;
		this.redraw();
	}
	,resize: function() {
		rg.svg.chart.Chart.prototype.resize.call(this);
		this.redraw();
	}
	,dpvalue: function(dp) {
		return Reflect.field(dp,this.variableDependent.type);
	}
	,stats: null
	,topheight: null
	,h: null
	,currentNode: null
	,scale: function(value) {
		return this.variableDependent.axis.scale(this.variableDependent.min(),this.variableDependent.max(),value);
	}
	,next: function(i) {
		return this.dpvalue(this.dps[i + 1 < this.dps.length?i + 1:i]);
	}
	,redraw: function() {
		var me = this;
		if(null == this.dps || 0 == this.dps.length) return;
		this.g.selectAll("g").remove();
		this.g.selectAll("radialGradient").remove();
		this.stats = this.variableDependent.stats;
		var max = this.scale(this.stats.max), wscale = function(v) {
			return me.scale(v) / max * (me.width - 2) / 2;
		}, fx1 = function(v) {
			return me.width / 2 - wscale(v);
		}, fx2 = function(v) {
			return me.width - fx1(v);
		}, diagonal1 = new thx.svg.Diagonal().sourcef(function(o,i) {
			return [fx1(me.dpvalue(o)),0.0];
		}).targetf(function(o,i) {
			return [fx1(me.next(i)),me.h];
		}), diagonal2 = new thx.svg.Diagonal().sourcef(function(o,i) {
			return [fx2(me.next(i)),me.h];
		}).targetf(function(o,i) {
			return [fx2(me.dpvalue(o)),0.0];
		}), conj = function(v,r,dir) {
			var x2 = r?fx1(v) - fx2(v):fx2(v) - fx1(v), a = 5, d = r?dir == 0?1:0:dir;
			return " a " + a + " " + me.flatness + " 0 0 " + d + " " + x2 + " 0";
		}, conj1 = function(d,i) {
			return conj(me.dpvalue(d),true,0);
		}, conj2 = function(d,i) {
			return conj(me.next(i),false,0);
		}, conjr = function(d,i) {
			var v = me.dpvalue(d);
			return " M " + fx1(v) + " 0 " + conj(v,false,0) + conj(v,true,1);
		};
		var top = this.g.append("svg:g");
		var path = top.append("svg:path").attr("class").string("funnel-inside fill-0").attr("d").string(conjr(this.dps[0]));
		if(null != this.click) top.onNode("click",function(_,_1) {
			me.click(me.dps[0],me.stats);
		});
		if(this.displayGradient) this.internalGradient(path);
		path.onNode("mouseover",function(d,_) {
			me.currentNode = d;
			me.mouseOver(me.dps[0],0,me.stats);
		});
		rg.util.RGColors.storeColorForSelection(path);
		this.topheight = Math.ceil(path.node().getBBox().height / 2) + 1;
		var index = this.dps.length - 1, bottom = this.g.append("svg:path").attr("class").string("funnel-inside fill-" + index).attr("d").string(conjr(this.dps[index])), bottomheight = Math.ceil(bottom.node().getBBox().height / 2) + 1;
		bottom.remove();
		this.h = (this.height - this.topheight - bottomheight - (this.dps.length - 1) * this.padding) / this.dps.length;
		top.attr("transform").string("translate(0," + (1 + this.topheight) + ")");
		var section = this.g.selectAll("g.section").data(this.dps);
		var enter = section.enter().append("svg:g").attr("class").string("section").attr("transform").stringf(function(d,i) {
			return "translate(0," + (me.topheight + i * (me.padding + me.h)) + ")";
		});
		var funnel = enter.append("svg:path").attr("class").stringf(function(d,i) {
			return "funnel-outside fill-" + i;
		}).attr("d").stringf(function(d,i) {
			var t = diagonal2.diagonal(d,i).split("C");
			t.shift();
			var d2 = "C" + t.join("C");
			return diagonal1.diagonal(d,i) + conj2(d,i) + d2 + conj1(d,i);
		});
		if(null != this.click) funnel.on("click",function(d,_) {
			me.click(d,me.stats);
		});
		rg.util.RGColors.storeColorForSelection(funnel);
		funnel.onNode("mouseover",function(d,i) {
			me.currentNode = d;
			me.mouseOver(Reflect.field(d,"__dhx_data__"),i,me.stats);
		});
		if(this.displayGradient) enter.eachNode(this.externalGradient.$bind(this));
		var ga = this.g.selectAll("g.arrow").data(this.dps).enter().append("svg:g").attr("class").string("arrow").attr("transform").stringf(function(d,i) {
			return "translate(" + me.width / 2 + "," + (me.topheight + me.h * i + me.arrowSize / 2) + ")";
		});
		ga.each(function(d,i) {
			if(null == me.labelArrow) return;
			var text = me.labelArrow(d,me.stats);
			if(null == text) return;
			var node = dhx.Dom.selectNode(dhx.Group.current);
			node.append("svg:path").attr("transform").string("scale(1.1,0.85)translate(1,1)").attr("class").string("shadow").style("fill").string("#000").attr("opacity")["float"](.25).attr("d").string(thx.svg.Symbol.arrowDownWide(me.arrowSize * me.arrowSize));
			node.append("svg:path").attr("transform").string("scale(1.1,0.8)").attr("d").string(thx.svg.Symbol.arrowDownWide(me.arrowSize * me.arrowSize));
			var label = new rg.svg.widget.Label(node,true,false,true);
			label.setAnchor(rg.svg.widget.GridAnchor.Bottom);
			label.setText(text);
		});
		ga.each(function(d,i) {
			if(null == me.labelDataPoint) return;
			var text = me.labelDataPoint(d,me.stats);
			if(null == text) return;
			var balloon = new rg.svg.widget.Balloon(me.g);
			balloon.setBoundingBox({ x : me.width / 2 + me.arrowSize / 3 * 2, y : 0, width : me.width, height : me.height});
			balloon.setPreferredSide(3);
			balloon.setText(text.split("\n"));
			balloon.moveTo(me.width / 2,me.topheight + me.h * .6 + (me.h + me.padding) * i,false);
		});
		this.ready.dispatch();
	}
	,mouseOver: function(dp,i,stats) {
		if(null == this.labelDataPointOver) return;
		var text = this.labelDataPointOver(dp,stats);
		if(null == text) this.tooltip.hide(); else {
			this.tooltip.html(text.split("\n").join("<br>"));
			this.moveTooltip(this.width / 2,this.topheight + this.h * .6 + (this.h + this.padding) * i,rg.util.RGColors.extractColor(this.currentNode));
		}
	}
	,init: function() {
		rg.svg.chart.Chart.prototype.init.call(this);
		if(null != this.tooltip) this.tooltip.anchor("bottomright");
		this.defs = this.g.classed().add("funnel-chart").append("svg:defs");
	}
	,internalGradient: function(d) {
		var color = rg.util.RGColors.parse(d.style("fill").get(),"#cccccc"), stops = this.defs.append("svg:radialGradient").attr("gradientUnits").string("objectBoundingBox").attr("id").string("rg_funnel_int_gradient_0").attr("cx").string("50%").attr("fx").string("75%").attr("cy").string("20%").attr("r").string(Math.round(75) + "%");
		stops.append("svg:stop").attr("offset").string("0%").attr("stop-color").string(rg.util.RGColors.applyLightness(thx.color.Hsl.toHsl(color),this.gradientLightness).toRgbString());
		stops.append("svg:stop").attr("offset").string("100%").attr("stop-color").string(rg.util.RGColors.applyLightness(thx.color.Hsl.toHsl(color),-this.gradientLightness).toRgbString());
		d.attr("style").string("fill:url(#rg_funnel_int_gradient_0)");
	}
	,externalGradient: function(n,i) {
		var g = dhx.Dom.selectNode(n), d = g.select("path"), color = thx.color.Hsl.toHsl(rg.util.RGColors.parse(d.style("fill").get(),"#cccccc")), vn = this.next(i), vc = this.dpvalue(this.dps[i]), ratio = Math.round(vn / vc * 100) / 100, id = "rg_funnel_ext_gradient_" + color.hex("#") + "-" + ratio;
		var stops = this.defs.append("svg:radialGradient").attr("gradientUnits").string("objectBoundingBox").attr("id").string(id).attr("cx").string("50%").attr("cy").string("0%").attr("r").string("110%");
		var top = color.hex("#");
		stops.append("svg:stop").attr("offset").string("10%").attr("stop-color").string(top);
		var ratio1 = 1 - (vc < vn?vc / vn:vn / vc), middlecolor = rg.util.RGColors.applyLightness(color,ratio1,this.gradientLightness * (vc >= vn?1:-1)).hex("#");
		stops.append("svg:stop").attr("offset").string("50%").attr("stop-color").string(middlecolor);
		stops.append("svg:stop").attr("offset").string("90%").attr("stop-color").string(top);
		d.attr("style").string("fill:url(#" + id + ")");
	}
	,__class__: rg.svg.chart.FunnelChart
});
rg.svg.chart.Geo = function(panel) {
	rg.svg.chart.Chart.call(this,panel);
	this.mapcontainer = this.g.append("svg:g").attr("class").string("mapcontainer");
	this.queue = [];
	this.setColorMode(rg.svg.chart.ColorScaleMode.FromCss());
	this.resize();
};
$hxClasses["rg.svg.chart.Geo"] = rg.svg.chart.Geo;
rg.svg.chart.Geo.__name__ = ["rg","svg","chart","Geo"];
rg.svg.chart.Geo.__super__ = rg.svg.chart.Chart;
rg.svg.chart.Geo.prototype = $extend(rg.svg.chart.Chart.prototype,{
	mapcontainer: null
	,colorMode: null
	,variableDependent: null
	,dps: null
	,queue: null
	,setVariables: function(variableIndependents,variableDependents,data) {
		this.variableDependent = variableDependents[0];
	}
	,data: function(dps) {
		this.dps = dps;
		this.redraw();
	}
	,resize: function() {
		rg.svg.chart.Chart.prototype.resize.call(this);
		if(null != this.mapcontainer) this.mapcontainer.attr("transform").string("translate(" + this.width / 2 + "," + this.height / 2 + ")");
	}
	,drawmap: function(map,field) {
		if(null == this.dps || 0 == this.dps.length) {
			this.queue.push((function(f,a1,a2) {
				return function() {
					return f(a1,a2);
				};
			})(this.drawmap.$bind(this),map,field));
			return;
		}
		this.setColorMode(map.colorMode);
		var text = null;
		var _g = 0, _g1 = this.dps;
		while(_g < _g1.length) {
			var dp = _g1[_g];
			++_g;
			var id = Reflect.field(dp,field), feature = map.map.get(id);
			if(null == feature) continue;
			this.stylefeature(feature.svg,Objects.copyTo(dp,feature.dp));
			if(null != map.radius && feature.svg.node().nodeName == "circle") feature.svg.attr("r")["float"](map.radius(feature.dp,this.variableDependent.stats));
			if(null != map.labelDataPoint && null != (text = map.labelDataPoint(feature.dp,this.variableDependent.stats))) {
				var c = Reflect.field(feature.dp,"#centroid");
				var label = new rg.svg.widget.Label(this.mapcontainer,true,false,false);
				label.setText(text);
				label.place(c[0],c[1],0);
			}
		}
		if(this.queue.length == 0) this.ready.dispatch();
	}
	,handlerDataPointOver: function(n,dp,f) {
		var text = f(dp,this.variableDependent.stats);
		if(null == text) this.tooltip.hide(); else {
			this.tooltip.html(text.split("\n").join("<br>"));
			var centroid = Reflect.field(dp,"#centroid");
			this.moveTooltip(centroid[0] + this.width / 2,centroid[1] + this.height / 2,rg.util.RGColors.extractColor(n));
		}
	}
	,handlerClick: function(dp,f) {
		f(dp,this.variableDependent.stats);
	}
	,stylefeature: function(svg,dp) {
	}
	,redraw: function() {
		while(this.queue.length > 0) (this.queue.shift())();
	}
	,getColorMode: function() {
		return this.colorMode;
	}
	,setColorMode: function(v) {
		var me = this;
		var $e = (this.colorMode = v);
		switch( $e[1] ) {
		case 0:
			var g = $e[2];
			if(null == g) g = 1;
			var colors = rg.svg.util.RGCss.colorsInCss();
			if(colors.length > g) colors = colors.slice(0,g);
			if(colors.length == 1) colors.push(thx.color.Hsl.lighter(thx.color.Hsl.toHsl(thx.color.Colors.parse(colors[0])),0.9).hex("#"));
			colors.reverse();
			this.setColorMode(rg.svg.chart.ColorScaleMode.Interpolation(colors.map(function(s,_) {
				return thx.color.Colors.parse(s);
			})));
			break;
		case 1:
			var g = $e[2];
			if(null == g) g = rg.svg.util.RGCss.numberOfColorsInCss();
			this.stylefeature = function(svg,dp) {
				var t = me.variableDependent.axis.scale(me.variableDependent.min(),me.variableDependent.max(),Reflect.field(dp,me.variableDependent.type)), index = Math.floor(g * t);
				svg.attr("class").string("fill-" + index);
				rg.util.RGColors.storeColorForSelection(svg);
			};
			break;
		case 3:
			var c = $e[2];
			var colors = c.map(function(d,_) {
				return d.hex("#");
			});
			this.stylefeature = function(svg,dp) {
				var t = me.variableDependent.axis.scale(me.variableDependent.min(),me.variableDependent.max(),Reflect.field(dp,me.variableDependent.type)), index = Math.floor(colors.length * t);
				svg.style("fill").string(colors[index]);
				rg.util.RGColors.storeColorForSelection(svg);
			};
			break;
		case 2:
			var colors = $e[2];
			var interpolator = thx.color.Rgb.interpolateStepsf(colors);
			this.stylefeature = function(svg,dp) {
				var t = me.variableDependent.axis.scale(me.variableDependent.min(),me.variableDependent.max(),Reflect.field(dp,me.variableDependent.type));
				svg.style("fill").string(interpolator(t).hex("#"));
				rg.util.RGColors.storeColorForSelection(svg);
			};
			break;
		case 4:
			var c = $e[2];
			var color = c.hex("#");
			this.stylefeature = function(svg,dp) {
				svg.style("fill").string(color);
				rg.util.RGColors.storeColorForSelection(svg);
			};
			break;
		case 5:
			var f = $e[2];
			this.stylefeature = function(svg,dp) {
				svg.style("fill").string(f(dp,me.variableDependent.stats));
				rg.util.RGColors.storeColorForSelection(svg);
			};
			break;
		}
		return v;
	}
	,init: function() {
		rg.svg.chart.Chart.prototype.init.call(this);
		rg.html.widget.Tooltip.getInstance().hide();
		if(null == this.tooltip) this.tooltip = rg.html.widget.Tooltip.getInstance();
		this.g.classed().add("geo");
	}
	,addMap: function(map,field) {
		if(null != field) map.onReady.add((function(f,a1,a2) {
			return function() {
				return f(a1,a2);
			};
		})(this.drawmap.$bind(this),map,field));
	}
	,__class__: rg.svg.chart.Geo
	,__properties__: $extend(rg.svg.chart.Chart.prototype.__properties__,{set_colorMode:"setColorMode",get_colorMode:"getColorMode"})
});
rg.svg.chart.GradientEffect = $hxClasses["rg.svg.chart.GradientEffect"] = { __ename__ : ["rg","svg","chart","GradientEffect"], __constructs__ : ["NoEffect","Gradient"] }
rg.svg.chart.GradientEffect.NoEffect = ["NoEffect",0];
rg.svg.chart.GradientEffect.NoEffect.toString = $estr;
rg.svg.chart.GradientEffect.NoEffect.__enum__ = rg.svg.chart.GradientEffect;
rg.svg.chart.GradientEffect.Gradient = function(lightness) { var $x = ["Gradient",1,lightness]; $x.__enum__ = rg.svg.chart.GradientEffect; $x.toString = $estr; return $x; }
rg.svg.chart.GradientEffects = function() { }
$hxClasses["rg.svg.chart.GradientEffects"] = rg.svg.chart.GradientEffects;
rg.svg.chart.GradientEffects.__name__ = ["rg","svg","chart","GradientEffects"];
rg.svg.chart.GradientEffects.canParse = function(d) {
	if(!Std["is"](d,String)) return false;
	var s = d, parts = s.toLowerCase().split(":");
	return (function($this) {
		var $r;
		switch(parts[0]) {
		case "gradient":case "noeffect":case "none":case "flat":
			$r = true;
			break;
		default:
			$r = false;
		}
		return $r;
	}(this));
}
rg.svg.chart.GradientEffects.parse = function(s) {
	var parts = s.toLowerCase().split(":");
	switch(parts.shift()) {
	case "gradient":
		var lightness = 0.75, parameters = parts.pop();
		if(null != parameters) lightness = Std.parseFloat(parameters.split(",").shift());
		return rg.svg.chart.GradientEffect.Gradient(lightness);
	default:
		return rg.svg.chart.GradientEffect.NoEffect;
	}
}
rg.svg.chart.GradientEffects.prototype = {
	__class__: rg.svg.chart.GradientEffects
}
rg.svg.chart.HeatGrid = function(panel) {
	rg.svg.chart.CartesianChart.call(this,panel);
	this.useContour = false;
	this.setColorMode(rg.svg.chart.ColorScaleMode.FromCss());
};
$hxClasses["rg.svg.chart.HeatGrid"] = rg.svg.chart.HeatGrid;
rg.svg.chart.HeatGrid.__name__ = ["rg","svg","chart","HeatGrid"];
rg.svg.chart.HeatGrid.__super__ = rg.svg.chart.CartesianChart;
rg.svg.chart.HeatGrid.prototype = $extend(rg.svg.chart.CartesianChart.prototype,{
	useContour: null
	,colorMode: null
	,dps: null
	,variableDependent: null
	,setVariables: function(variables,variableIndependents,variableDependents,data) {
		this.xVariable = variableIndependents[0];
		this.yVariables = [variableIndependents[1]];
		this.variableDependent = variableDependents[0];
	}
	,init: function() {
		rg.svg.chart.CartesianChart.prototype.init.call(this);
		this.g.classed().add("heat-grid");
	}
	,resize: function() {
		rg.svg.chart.CartesianChart.prototype.resize.call(this);
		this.redraw();
	}
	,data: function(dps) {
		this.dps = dps;
		this.redraw();
	}
	,xrange: null
	,yrange: null
	,cols: null
	,rows: null
	,w: null
	,h: null
	,stats: null
	,x: function(dp,i) {
		return this.xrange.indexOf(Reflect.field(dp,this.xVariable.type)) * this.w;
	}
	,y: function(dp,i) {
		return this.height - (1 + this.yrange.indexOf(Reflect.field(dp,this.yVariables[0].type))) * this.h;
	}
	,redraw: function() {
		if(null == this.dps || 0 == this.dps.length) return;
		this.stats = this.variableDependent.stats;
		this.xrange = this.range(this.xVariable);
		this.yrange = this.range(this.yVariables[0]);
		this.cols = this.xrange.length;
		this.rows = this.yrange.length;
		this.w = this.width / this.cols;
		this.h = this.height / this.rows;
		if(this.useContour) this.drawContour(); else this.drawSquares();
		this.ready.dispatch();
	}
	,drawContour: function() {
	}
	,currentNode: null
	,drawSquares: function() {
		var me = this;
		var choice = this.g.selectAll("rect").data(this.dps);
		var rect = choice.enter().append("svg:rect").attr("x").floatf(this.x.$bind(this)).attr("y").floatf(this.y.$bind(this)).attr("width")["float"](this.w).attr("height")["float"](this.h).each(function(dp,_) {
			me.stylefeature(dhx.Dom.selectNode(dhx.Group.current),dp);
		}).on("click",this.onclick.$bind(this)).onNode("mouseover",function(n,i) {
			me.currentNode = n;
			me.onmouseover(Reflect.field(n,"__dhx_data__"),i);
		});
		rg.util.RGColors.storeColorForSelection(rect);
	}
	,onmouseover: function(dp,i) {
		if(null == this.labelDataPointOver) return;
		var text = this.labelDataPointOver(dp,this.stats);
		if(null == text) this.tooltip.hide(); else {
			this.tooltip.html(text.split("\n").join("<br>"));
			this.moveTooltip(this.x(dp,i) + this.w / 2,this.y(dp,i) + this.h / 2,rg.util.RGColors.extractColor(this.currentNode));
		}
	}
	,onclick: function(dp,i) {
		if(null == this.click) return;
		this.click(dp,this.stats);
	}
	,range: function(variable) {
		var v = Std["is"](variable,rg.data.VariableIndependent)?variable:null;
		if(null != v) return v.axis.range(v.min(),v.max());
		var tickmarks = variable.axis.ticks(variable.min(),variable.max());
		return tickmarks.map(function(d,i) {
			return d.getValue();
		});
	}
	,stylefeature: function(svg,dp) {
	}
	,getColorMode: function() {
		return this.colorMode;
	}
	,setColorMode: function(v) {
		var me = this;
		var $e = (this.colorMode = v);
		switch( $e[1] ) {
		case 0:
			var g = $e[2];
			if(null == g) g = 1;
			var colors = rg.svg.util.RGCss.colorsInCss();
			if(colors.length > g) colors = colors.slice(0,g);
			if(colors.length == 1) colors.push(thx.color.Hsl.lighter(thx.color.Hsl.toHsl(thx.color.Colors.parse(colors[0])),0.9).hex("#"));
			colors.reverse();
			this.setColorMode(rg.svg.chart.ColorScaleMode.Interpolation(colors.map(function(s,_) {
				return thx.color.Colors.parse(s);
			})));
			break;
		case 1:
			var g = $e[2];
			if(null == g) g = rg.svg.util.RGCss.numberOfColorsInCss();
			this.stylefeature = function(svg,dp) {
				var t = me.variableDependent.axis.scale(me.variableDependent.min(),me.variableDependent.max(),Reflect.field(dp,me.variableDependent.type)), index = Math.floor(g * t);
				svg.attr("class").string("fill-" + index);
			};
			break;
		case 3:
			var c = $e[2];
			var colors = c.map(function(d,_) {
				return d.hex("#");
			});
			this.stylefeature = function(svg,dp) {
				var t = me.variableDependent.axis.scale(me.variableDependent.min(),me.variableDependent.max(),Reflect.field(dp,me.variableDependent.type)), index = Math.floor(colors.length * t);
				svg.style("fill").string(colors[index]);
			};
			break;
		case 2:
			var colors = $e[2];
			var interpolator = thx.color.Rgb.interpolateStepsf(colors);
			this.stylefeature = function(svg,dp) {
				var t = me.variableDependent.axis.scale(me.variableDependent.min(),me.variableDependent.max(),Reflect.field(dp,me.variableDependent.type));
				svg.style("fill").string(interpolator(t).hex("#"));
			};
			break;
		case 4:
			var c = $e[2];
			var color = c.hex("#");
			this.stylefeature = function(svg,dp) {
				svg.style("fill").string(color);
			};
			break;
		case 5:
			var f = $e[2];
			this.stylefeature = function(svg,dp) {
				svg.style("fill").string(f(dp,me.variableDependent.stats));
			};
			break;
		}
		return v;
	}
	,__class__: rg.svg.chart.HeatGrid
	,__properties__: $extend(rg.svg.chart.CartesianChart.prototype.__properties__,{set_colorMode:"setColorMode",get_colorMode:"getColorMode"})
});
rg.svg.chart.LineChart = function(panel) {
	rg.svg.chart.CartesianChart.call(this,panel);
	this.addClass("line-chart");
	this.chart = this.g.append("svg:g");
	this.sensibleRadius = 100;
};
$hxClasses["rg.svg.chart.LineChart"] = rg.svg.chart.LineChart;
rg.svg.chart.LineChart.__name__ = ["rg","svg","chart","LineChart"];
rg.svg.chart.LineChart.__super__ = rg.svg.chart.CartesianChart;
rg.svg.chart.LineChart.prototype = $extend(rg.svg.chart.CartesianChart.prototype,{
	symbol: null
	,symbolStyle: null
	,lineInterpolator: null
	,lineEffect: null
	,y0property: null
	,sensibleRadius: null
	,linePathShape: null
	,chart: null
	,segment: null
	,stats: null
	,setVariables: function(variables,variableIndependents,variableDependents,data) {
		rg.svg.chart.CartesianChart.prototype.setVariables.call(this,variables,variableIndependents,variableDependents,data);
		if(this.y0property != null && this.y0property != "") {
			var t, dp;
			var _g = 0;
			while(_g < variableDependents.length) {
				var v = variableDependents[_g];
				++_g;
				v.meta.max = Math.NEGATIVE_INFINITY;
			}
			var _g1 = 0, _g = data.length;
			while(_g1 < _g) {
				var i = _g1++;
				var v = variableDependents[i];
				var _g3 = 0, _g2 = data[i].length;
				while(_g3 < _g2) {
					var j = _g3++;
					var _g5 = 0, _g4 = data[i][j].length;
					while(_g5 < _g4) {
						var k = _g5++;
						dp = data[i][j][k];
						t = rg.util.DataPoints.valueAlt(dp,v.type,0.0) + rg.util.DataPoints.valueAlt(dp,this.y0property,0.0);
						if(v.meta.max < t) v.meta.max = t;
					}
				}
			}
		}
	}
	,x: function(d,i) {
		var value = Reflect.field(d,this.xVariable.type), scaled = this.xVariable.axis.scale(this.xVariable.min(),this.xVariable.max(),value), scaledw = scaled * this.width;
		return scaledw;
	}
	,getY1: function(pos) {
		var me = this;
		var v = this.yVariables[pos], scale = (function(f,a1,a2) {
			return function(a3) {
				return f(a1,a2,a3);
			};
		})(($_=v.axis,$_.scale.$bind($_)),v.min(),v.max());
		if(null != this.y0property) {
			var min = scale(v.min()) * this.height;
			return function(d,i) {
				return (me.getY0(pos))(d,i) - scale(Reflect.field(d,v.type)) * me.height + min;
			};
		} else return function(d,i) {
			var value = Reflect.field(d,v.type), scaled = scale(value), scaledh = scaled * me.height;
			return me.height - scaledh;
		};
	}
	,getY0: function(pos) {
		var me = this;
		var v = this.yVariables[pos], scale = (function(f,a1,a2) {
			return function(a3) {
				return f(a1,a2,a3);
			};
		})(($_=v.axis,$_.scale.$bind($_)),v.min(),v.max());
		return function(d,i) {
			return me.height - scale(rg.util.DataPoints.valueAlt(d,me.y0property,v.min())) * me.height;
		};
	}
	,segments: null
	,classsf: function(pos,cls) {
		return function(_,i) {
			return cls + " stroke-" + (pos + i);
		};
	}
	,classff: function(pos,cls) {
		return function(_,i) {
			return cls + " fill-" + (pos + i);
		};
	}
	,data: function(dps) {
		var me = this;
		this.linePathShape = [];
		var _g1 = 0, _g = this.yVariables.length;
		while(_g1 < _g) {
			var i = _g1++;
			var line = [new thx.svg.Line(this.x.$bind(this),this.getY1(i))];
			if(null != this.lineInterpolator) line[0].interpolator(this.lineInterpolator);
			this.linePathShape[i] = (function(line) {
				return function(dp,i1) {
					me.segment = i1;
					return line[0].shape(dp,i1);
				};
			})(line);
		}
		var axisgroup = this.chart.selectAll("g.group").data(dps);
		var axisenter = axisgroup.enter().append("svg:g").attr("class").stringf(function(_,i) {
			return "group group-" + i;
		});
		axisgroup.exit().remove();
		this.stats = [];
		var _g1 = 0, _g = dps.length;
		while(_g1 < _g) {
			var i = [_g1++];
			this.segments = dps[i[0]];
			var gi = this.chart.select("g.group-" + i[0]);
			this.stats[i[0]] = new rg.axis.Stats(this.yVariables[i[0]].type);
			this.stats[i[0]].addMany(rg.util.DataPoints.values(Arrays.flatten(this.segments),this.yVariables[i[0]].type));
			if(null != this.y0property) {
				var area = new thx.svg.Area(this.x.$bind(this),this.getY0(i[0]),this.getY1(i[0]));
				if(null != this.lineInterpolator) area.interpolator(this.lineInterpolator);
				gi.selectAll("path.area").data(this.segments).enter().append("svg:path").attr("class").stringf(this.classff(i[0],"area area-" + i[0])).attr("d").stringf(area.shape.$bind(area));
			}
			var segmentgroup = gi.selectAll("path.main").data(this.segments);
			var $e = (this.lineEffect);
			switch( $e[1] ) {
			case 1:
				var levels = $e[3], lightness = $e[2];
				var levels1 = [levels];
				var lightness1 = [lightness];
				var fs = [[]];
				segmentgroup.enter().append("svg:path").attr("class").stringf(this.classsf(i[0],"line")).eachNode((function(fs,lightness1) {
					return function(n,i1) {
						var start = thx.color.Hsl.toHsl(rg.util.RGColors.parse(dhx.Dom.selectNode(n).style("stroke").get(),"#000000")), end = rg.util.RGColors.applyLightness(start,lightness1[0]);
						fs[0][i1] = thx.color.Hsl.interpolatef(end,start);
					};
				})(fs,lightness1)).remove();
				var _g2 = 0;
				while(_g2 < levels1[0]) {
					var j = [_g2++];
					segmentgroup.enter().append("svg:path").attr("class").string("line grad-" + (levels1[0] - j[0] - 1)).style("stroke").stringf((function(j,fs,levels1) {
						return function(_,i1) {
							return fs[0][i1](j[0] / levels1[0]).hex("#");
						};
					})(j,fs,levels1)).attr("d").stringf(this.linePathShape[i[0]]);
				}
				break;
			case 2:
				var levels = $e[4], oy = $e[3], ox = $e[2];
				var _g2 = 0;
				while(_g2 < levels) {
					var j = _g2++;
					segmentgroup.enter().append("svg:path").attr("transform").string("translate(" + (1 + j) * ox + "," + (1 + j) * oy + ")").attr("class").stringf(this.classsf(i[0],"line shadow shadow-" + j)).attr("d").stringf(this.linePathShape[i[0]]);
				}
				break;
			default:
			}
			var path = segmentgroup.enter().append("svg:path").attr("class").stringf(this.classsf(i[0],"line")).attr("d").stringf(this.linePathShape[i[0]]);
			switch( (this.lineEffect)[1] ) {
			case 1:
				path.classed().add("gradient");
				break;
			case 2:
				path.classed().add("dropshadow");
				break;
			case 0:
				path.classed().add("noeffect");
				break;
			}
			segmentgroup.update().attr("d").stringf(this.linePathShape[i[0]]);
			segmentgroup.exit().remove();
			var gsymbols = gi.selectAll("g.symbols").data(this.segments), vars = this.yVariables;
			var enter = gsymbols.enter().append("svg:g").attr("class").stringf(this.classsf(i[0],"symbols"));
			var gsymbol = enter.selectAll("g.symbol").dataf((function() {
				return function(d,i1) {
					return d;
				};
			})()).enter().append("svg:g").attr("transform").stringf(this.getTranslatePointf(i[0]));
			var circle = gsymbol.append("svg:circle").attr("r")["float"](6).attr("opacity")["float"](0.0).style("fill").string("#000000");
			if(null != this.labelDataPointOver) circle.classed().add("rgdata");
			rg.util.RGColors.storeColorForSelection(circle,"stroke");
			if(null != this.symbol) {
				var sp = [this.symbol];
				var spath = gsymbol.append("svg:path").attr("d").stringf((function(sp,i) {
					return function(dp,_) {
						return sp[0](dp,me.stats[i[0]]);
					};
				})(sp,i));
				rg.util.RGColors.storeColorForSelection(spath,"stroke");
				if(null != this.symbolStyle) {
					var ss = [this.symbolStyle];
					spath.attr("style").stringf((function(ss,i) {
						return function(dp,_) {
							return ss[0](dp,me.stats[i[0]]);
						};
					})(ss,i));
				}
			}
			if(null != this.labelDataPoint) {
				var f = [this.labelDataPoint];
				gsymbol.eachNode((function(f,i) {
					return function(n,_) {
						var dp = Reflect.field(n,"__dhx_data__"), label = new rg.svg.widget.Label(dhx.Dom.selectNode(n),true,false,false);
						label.setText(f[0](dp,me.stats[i[0]]));
					};
				})(f,i));
			}
			gsymbols.update().selectAll("g.symbol").dataf((function() {
				return function(d,i1) {
					return d;
				};
			})()).update().attr("transform").stringf(this.getTranslatePointf(i[0]));
			gsymbols.exit().remove();
		}
		rg.svg.widget.Sensible.sensibleZone(this.g,this.panel,null == this.click?null:this.onclick.$bind(this),null == this.labelDataPointOver?null:this.onmouseover.$bind(this),this.sensibleRadius);
		this.ready.dispatch();
	}
	,getTranslatePointf: function(pos) {
		var x = this.x.$bind(this), y = this.getY1(pos);
		return function(dp,i) {
			return "translate(" + x(dp) + "," + y(dp,i) + ")";
		};
	}
	,getStats: function(dp) {
		var _g = 0, _g1 = this.stats;
		while(_g < _g1.length) {
			var s = _g1[_g];
			++_g;
			if(Reflect.field(dp,s.type) != null) return s;
		}
		return null;
	}
	,onmouseover: function(n) {
		var dp = Reflect.field(n,"__dhx_data__"), stats = this.getStats(dp), text = this.labelDataPointOver(dp,stats);
		if(null == text) this.tooltip.hide(); else {
			var sel = dhx.Dom.selectNode(n.parentNode), coords = rg.svg.chart.Coords.fromTransform(sel.attr("transform").get());
			this.tooltip.html(text.split("\n").join("<br>"));
			this.moveTooltip(coords[0],coords[1],rg.util.RGColors.extractColor(n));
		}
	}
	,onclick: function(n) {
		var dp = Reflect.field(n,"__dhx_data__"), stats = this.getStats(dp);
		this.click(dp,stats);
	}
	,__class__: rg.svg.chart.LineChart
});
rg.svg.chart.LineEffect = $hxClasses["rg.svg.chart.LineEffect"] = { __ename__ : ["rg","svg","chart","LineEffect"], __constructs__ : ["NoEffect","Gradient","DropShadow"] }
rg.svg.chart.LineEffect.NoEffect = ["NoEffect",0];
rg.svg.chart.LineEffect.NoEffect.toString = $estr;
rg.svg.chart.LineEffect.NoEffect.__enum__ = rg.svg.chart.LineEffect;
rg.svg.chart.LineEffect.Gradient = function(lightness,levels) { var $x = ["Gradient",1,lightness,levels]; $x.__enum__ = rg.svg.chart.LineEffect; $x.toString = $estr; return $x; }
rg.svg.chart.LineEffect.DropShadow = function(ox,oy,evels) { var $x = ["DropShadow",2,ox,oy,evels]; $x.__enum__ = rg.svg.chart.LineEffect; $x.toString = $estr; return $x; }
rg.svg.chart.LineEffects = function() { }
$hxClasses["rg.svg.chart.LineEffects"] = rg.svg.chart.LineEffects;
rg.svg.chart.LineEffects.__name__ = ["rg","svg","chart","LineEffects"];
rg.svg.chart.LineEffects.parse = function(s) {
	var parts = s.toLowerCase().split(":");
	switch(parts.shift()) {
	case "dropshadow":
		var offsetx = 0.5, offsety = 0.5, levels = 2, parameters = parts.pop();
		if(null != parameters) {
			var parameters1 = parameters.split(",");
			offsetx = Std.parseFloat(parameters1[0]);
			if(parameters1.length > 1) offsety = Std.parseFloat(parameters1[1]); else offsety = offsetx;
			if(parameters1.length > 2) levels = Std.parseInt(parameters1[2]);
		}
		return rg.svg.chart.LineEffect.DropShadow(offsetx,offsety,levels);
	case "gradient":
		var lightness = 0.75, levels = 2, parameters = parts.pop();
		if(null != parameters) {
			lightness = Std.parseFloat(parameters.split(",").shift());
			var nlevels = parameters.split(",").pop();
			if(null != nlevels) levels = Std.parseInt(nlevels);
		}
		return rg.svg.chart.LineEffect.Gradient(lightness,levels);
	default:
		return rg.svg.chart.LineEffect.NoEffect;
	}
}
rg.svg.chart.LineEffects.prototype = {
	__class__: rg.svg.chart.LineEffects
}
rg.svg.chart.PieChart = function(panel) {
	rg.svg.chart.Chart.call(this,panel);
	this.addClass("pie-chart");
	this.g.append("svg:defs");
	this.pie = new thx.geom.layout.Pie();
	this.gradientLightness = 0.75;
	this.displayGradient = true;
	this.animationDelay = 0;
	this.innerRadius = 0.0;
	this.outerRadius = 0.9;
	this.overRadius = 0.95;
	this.labelRadius = 0.45;
	this.tooltipRadius = 0.5;
	this.labels = new Hash();
	this.labelOrientation = rg.svg.widget.LabelOrientation.Orthogonal;
	this.labelDontFlip = true;
};
$hxClasses["rg.svg.chart.PieChart"] = rg.svg.chart.PieChart;
rg.svg.chart.PieChart.__name__ = ["rg","svg","chart","PieChart"];
rg.svg.chart.PieChart.__super__ = rg.svg.chart.Chart;
rg.svg.chart.PieChart.prototype = $extend(rg.svg.chart.Chart.prototype,{
	innerRadius: null
	,outerRadius: null
	,overRadius: null
	,labelRadius: null
	,tooltipRadius: null
	,arcNormal: null
	,arcStart: null
	,arcBig: null
	,pie: null
	,radius: null
	,stats: null
	,variableDependent: null
	,gradientLightness: null
	,displayGradient: null
	,animationDelay: null
	,labelOrientation: null
	,labelDontFlip: null
	,labels: null
	,mouseClick: null
	,setVariables: function(variableIndependents,variableDependents) {
		this.variableDependent = variableDependents[0];
	}
	,resize: function() {
		rg.svg.chart.Chart.prototype.resize.call(this);
		this.radius = Math.min(this.width,this.height) / 2;
		this.arcStart = thx.svg.Arc.fromAngleObject().innerRadius(this.radius * this.innerRadius).outerRadius(this.radius * this.innerRadius);
		this.arcNormal = thx.svg.Arc.fromAngleObject().innerRadius(this.radius * this.innerRadius).outerRadius(this.radius * this.outerRadius);
		this.arcBig = thx.svg.Arc.fromAngleObject().innerRadius(this.radius * this.innerRadius).outerRadius(this.radius * this.overRadius);
		if(this.width > this.height) this.g.attr("transform").string("translate(" + (this.width / 2 - this.height / 2) + ",0)"); else this.g.attr("transform").string("translate(0," + (this.height / 2 - this.width / 2) + ")");
	}
	,data: function(dp) {
		var pv = this.variableDependent.type;
		this.stats = this.variableDependent.stats;
		var choice = this.g.selectAll("g.group").data(this.pief(dp),this.id.$bind(this));
		var enter = choice.enter();
		var arc = enter.append("svg:g").attr("class").stringf(function(d,i) {
			return "group fill-" + i;
		}).attr("transform").string("translate(" + this.radius + "," + this.radius + ")");
		var path = arc.append("svg:path").attr("class").string("slice");
		rg.util.RGColors.storeColorForSelection(arc);
		if(this.displayGradient) arc.eachNode(this.applyGradient.$bind(this));
		if(this.animated) {
			path.attr("d").stringf(this.arcShape(this.arcStart));
			arc.eachNode(this.fadein.$bind(this)).onNode("mouseover.animation",this.highlight.$bind(this)).onNode("mouseout.animation",this.backtonormal.$bind(this));
		} else path.attr("d").stringf(this.arcShape(this.arcNormal));
		arc.onNode("mouseover.label",this.onMouseOver.$bind(this));
		if(null != this.mouseClick) arc.onNode("click.user",this.onMouseClick.$bind(this));
		if(null != this.labelDataPoint) choice.enter().append("svg:g").attr("transform").string("translate(" + this.radius + "," + this.radius + ")").eachNode(this.appendLabel.$bind(this));
		choice.update().select("path").transition().ease(this.animationEase).duration(null,this.animationDuration).attr("d").stringf(this.arcShape(this.arcNormal));
		if(null != this.labelDataPoint) choice.update().eachNode(this.updateLabel.$bind(this));
		choice.exit().eachNode(this.removeLabel.$bind(this)).remove();
		this.ready.dispatch();
	}
	,onMouseOver: function(dom,i) {
		if(null == this.labelDataPointOver) return;
		var d = Reflect.field(dom,"__dhx_data__"), text = this.labelDataPointOver(d.dp,this.stats);
		if(null == text) this.tooltip.hide(); else {
			var a = d.startAngle + (d.endAngle - d.startAngle) / 2 - Math.PI / 2, r = this.radius * this.tooltipRadius;
			this.tooltip.html(text.split("\n").join("<br>"));
			this.moveTooltip(this.width / 2 + Math.cos(a) * r,this.height / 2 + Math.sin(a) * r,rg.util.RGColors.extractColor(dom));
		}
	}
	,onMouseClick: function(dom,i) {
		var d = Reflect.field(dom,"__dhx_data__");
		this.mouseClick(d.dp);
	}
	,removeLabel: function(dom,i) {
		var n = dhx.Dom.selectNode(dom), d = Reflect.field(dom,"__dhx_data__");
		var label = this.labels.get(d.id);
		label.destroy();
		this.labels.remove(d.id);
	}
	,updateLabel: function(dom,i) {
		var n = dhx.Dom.selectNode(dom), d = Reflect.field(dom,"__dhx_data__"), label = this.labels.get(d.id), r = this.radius * this.labelRadius, a = d.startAngle + (d.endAngle - d.startAngle) / 2 - Math.PI / 2;
		label.setText(this.labelDataPoint(d.dp,this.stats));
		label.place(-2.5 + Math.cos(a) * r,-2.5 + Math.sin(a) * r,57.29577951308232088 * a);
		if(Reflect.field(d.dp,this.stats.type) == 0) label.hide(); else label.show();
	}
	,appendLabel: function(dom,i) {
		var n = dhx.Dom.selectNode(dom), label = new rg.svg.widget.Label(n,this.labelDontFlip,true,true), d = Reflect.field(dom,"__dhx_data__"), r = this.radius * this.labelRadius, a = d.startAngle + (d.endAngle - d.startAngle) / 2 - Math.PI / 2;
		label.setOrientation(this.labelOrientation);
		switch( (this.labelOrientation)[1] ) {
		case 0:
			label.setAnchor(rg.svg.widget.GridAnchor.Center);
			break;
		case 1:
			label.setAnchor(rg.svg.widget.GridAnchor.Left);
			break;
		case 2:
			label.setAnchor(rg.svg.widget.GridAnchor.Top);
			break;
		}
		label.setText(this.labelDataPoint(d.dp,this.stats));
		label.place(-2.5 + Math.cos(a) * r,-2.5 + Math.sin(a) * r,57.29577951308232088 * a);
		this.labels.set(d.id,label);
		if(Reflect.field(d.dp,this.stats.type) <= 0) label.hide();
	}
	,applyGradient: function(n,i) {
		var gn = dhx.Dom.selectNodeData(n), dp = Reflect.field(n,"__dhx_data__"), id = dp.id;
		if(this.g.select("defs").select("#rg_pie_gradient_" + id).empty()) {
			var slice = gn.select("path.slice"), shape = this.arcNormal.shape(Reflect.field(n,"__dhx_data__")), t = gn.append("svg:path").attr("d").string(shape), box = (function($this) {
				var $r;
				try {
					$r = t.node().getBBox();
				} catch( e ) {
					$r = { x : 0.0, y : 0.0, width : 0.0, height : 0.0};
				}
				return $r;
			}(this));
			t.remove();
			var color = rg.util.RGColors.parse(slice.style("fill").get(),"#cccccc"), scolor = rg.util.RGColors.applyLightness(thx.color.Hsl.toHsl(color),this.gradientLightness);
			var ratio = box.width / box.height, cx = -box.x * 100 / box.width / ratio, cy = -box.y * 100 / box.height / ratio;
			var r = 100 * (box.width > box.height?Math.min(1,this.radius * this.outerRadius / box.width):Math.max(1,this.radius * this.outerRadius / box.width));
			var stops = this.g.select("defs").append("svg:radialGradient").attr("gradientUnits").string("objectBoundingBox").attr("id").string("rg_pie_gradient_" + id).attr("cx").string(cx * ratio + "%").attr("cy").string(cy + "%").attr("gradientTransform").string("scale(1 " + ratio + ")").attr("r").string(r + "%");
			stops.append("svg:stop").attr("offset").string(100 * this.innerRadius + "%").attr("stop-color").string(color.toRgbString()).attr("stop-opacity")["float"](1);
			stops.append("svg:stop").attr("offset").string("100%").attr("stop-color").string(scolor.toRgbString()).attr("stop-opacity")["float"](1);
		}
		gn.select("path.slice").attr("style").string("fill:url(#rg_pie_gradient_" + id + ")");
	}
	,fadein: function(n,i) {
		var gn = dhx.Dom.selectNodeData(n), shape = this.arcNormal.shape(Reflect.field(n,"__dhx_data__"));
		gn.selectAll("path.slice").transition().ease(this.animationEase).duration(null,this.animationDuration).delay(null,this.animationDelay).attr("d").string(shape);
	}
	,highlight: function(d,i) {
		var slice = dhx.Dom.selectNodeData(d).selectAll("path");
		slice.transition().ease(this.animationEase).duration(null,this.animationDuration).attr("d").stringf(this.arcShape(this.arcBig));
	}
	,backtonormal: function(d,i) {
		var slice = dhx.Dom.selectNodeData(d).selectAll("path");
		slice.transition().ease(this.animationEase).duration(null,this.animationDuration).attr("d").stringf(this.arcShape(this.arcNormal));
	}
	,id: function(dp,i) {
		return dp.id;
	}
	,makeid: function(dp) {
		var c = Objects.clone(dp);
		Reflect.deleteField(c,this.variableDependent.type);
		return haxe.Md5.encode(Dynamics.string(c));
	}
	,arcShape: function(a) {
		return function(d,i) {
			return a.shape(d);
		};
	}
	,pief: function(dp) {
		var name = this.variableDependent.type, temp = dp.map(function(d,i) {
			return Reflect.field(d,name);
		}), arr = this.pie.pie(temp);
		var _g1 = 0, _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			var id = this.makeid(dp[i]);
			arr[i]["id"] = id;
			arr[i]["dp"] = dp[i];
		}
		return arr;
	}
	,destroy: function() {
		var $it0 = this.labels.iterator();
		while( $it0.hasNext() ) {
			var label = $it0.next();
			label.destroy();
		}
		rg.svg.chart.Chart.prototype.destroy.call(this);
	}
	,__class__: rg.svg.chart.PieChart
});
rg.svg.chart.Sankey = function(panel) {
	rg.svg.chart.Chart.call(this,panel);
	this.addClass("sankey");
	this.layerWidth = 61;
	this.nodeSpacing = 28;
	this.dummySpacing = 18;
	this.extraWidth = 28;
	this.backEdgeSpacing = 4.0;
	this.extraHeight = 5;
	this.extraRadius = 5;
	this.imageWidth = 60;
	this.imageHeight = 48;
	this.imageSpacing = 0;
	this.labelNodeSpacing = 4;
	this.styleNode = "0";
	this.styleentry = "4";
	this.styleexit = "6";
	this.styleEdgeBackward = "3";
	this.styleEdgeForward = "0";
	this.stackbackedges = true;
	this.thinbackedges = true;
};
$hxClasses["rg.svg.chart.Sankey"] = rg.svg.chart.Sankey;
rg.svg.chart.Sankey.__name__ = ["rg","svg","chart","Sankey"];
rg.svg.chart.Sankey.__super__ = rg.svg.chart.Chart;
rg.svg.chart.Sankey.prototype = $extend(rg.svg.chart.Chart.prototype,{
	layerWidth: null
	,nodeSpacing: null
	,dummySpacing: null
	,extraWidth: null
	,backEdgeSpacing: null
	,extraHeight: null
	,extraRadius: null
	,imageWidth: null
	,imageHeight: null
	,imageSpacing: null
	,labelNodeSpacing: null
	,stackbackedges: null
	,thinbackedges: null
	,labelEdge: null
	,labelEdgeOver: null
	,labelNode: null
	,imagePath: null
	,clickEdge: null
	,nodeClass: null
	,edgeClass: null
	,displayEntry: null
	,displayExit: null
	,layout: null
	,maxweight: null
	,availableheight: null
	,padBefore: null
	,padAfter: null
	,layerstarty: null
	,styleNode: null
	,styleentry: null
	,styleexit: null
	,styleEdgeBackward: null
	,styleEdgeForward: null
	,dependentVariable: null
	,mapelements: null
	,maphi: null
	,setVariables: function(variableIndependents,variableDependents,data) {
		this.dependentVariable = variableDependents[0];
	}
	,data: function(graphlayout) {
		var me = this;
		this.layout = graphlayout.clone();
		var nodes = Arrays.filter(Iterators.filter(this.layout.graph.nodes.iterator(),function(node) {
			return me.isdummy(node);
		}),function(node) {
			var edge = node.graph.edges.positives(node).next();
			if(null == edge) return false;
			var cellhead = me.layout.cell(edge.head), celltail = me.layout.cell(edge.tail);
			return celltail.layer > cellhead.layer;
		});
		var layers = this.layout.layers();
		var _g = 0;
		while(_g < nodes.length) {
			var node = nodes[_g];
			++_g;
			var cell = this.layout.cell(node), ehead = node.graph.edges.positives(node).next(), etail = node.graph.edges.negatives(node).next();
			layers[cell.layer].splice(cell.position,1);
			this.layout.graph.edges.create(etail.tail,ehead.head,ehead.weight,ehead.data);
			node.graph.nodes._remove(node);
		}
		this.redraw();
	}
	,redraw: function() {
		var me = this;
		this.mapelements = new Hash();
		this.maphi = new Hash();
		this.maxweight = 0;
		this.layerstarty = [];
		var _g1 = 0, _g = this.layout.length;
		while(_g1 < _g) {
			var i = _g1++;
			var v = this.layout.layer(i).reduce(function(cum,cur,_) {
				return cum + cur.data.weight;
			},0);
			if(v > this.maxweight) this.maxweight = v;
		}
		var occupiedspace = 0.0;
		var _g1 = 0, _g = this.layout.length;
		while(_g1 < _g) {
			var i = _g1++;
			var v = this.layout.layer(i).reduce(function(cum,cur,_) {
				return cum + me.nodepadding(cur);
			},0.0);
			if(v > occupiedspace) occupiedspace = v;
		}
		this.availableheight = this.height - occupiedspace;
		if(this.thinbackedges) {
			var count = this.stackbackedges?Iterators.filter(this.layout.graph.edges.collection.iterator(),function(edge) {
				return me.layout.cell(edge.tail).layer >= me.layout.cell(edge.head).layer;
			}).length:1;
			this.availableheight -= (1 + this.backEdgeSpacing) * count;
		} else if(this.stackbackedges) {
			var $it0 = this.layout.graph.edges.collection.iterator();
			while( $it0.hasNext() ) {
				var edge = $it0.next();
				if(this.layout.cell(edge.tail).layer < this.layout.cell(edge.head).layer) continue;
				this.availableheight -= this.backEdgeSpacing;
				this.maxweight += edge.weight;
			}
		} else {
			this.availableheight -= this.backEdgeSpacing;
			var v = 0.0;
			var $it1 = this.layout.graph.edges.collection.iterator();
			while( $it1.hasNext() ) {
				var edge = $it1.next();
				if(this.layout.cell(edge.tail).layer < this.layout.cell(edge.head).layer) continue;
				if(edge.weight > v) v = edge.weight;
			}
			this.maxweight += v;
		}
		this.availableheight -= this.extraRadius + this.extraHeight;
		var backedgesy = 0.0;
		var _g1 = 0, _g = this.layout.length;
		while(_g1 < _g) {
			var i = _g1++;
			var layer = this.layout.layer(i), t = 0.0;
			var _g2 = 0;
			while(_g2 < layer.length) {
				var node = layer[_g2];
				++_g2;
				t += this.nodepadding(node) + this.nheight(node.data.weight);
			}
			this.layerstarty[i] = t;
			if(t > backedgesy) backedgesy = t;
		}
		var _g1 = 0, _g = this.layerstarty.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.layerstarty[i] = (backedgesy - this.layerstarty[i]) / 2;
		}
		backedgesy += this.extraRadius + this.extraHeight;
		this.padBefore = 0.0;
		var _g = 0, _g1 = this.layout.layer(0);
		while(_g < _g1.length) {
			var node = _g1[_g];
			++_g;
			var extra = Math.min(this.nheight(node.data.entry),this.extraWidth);
			var $it2 = node.graph.edges.negatives(node);
			while( $it2.hasNext() ) {
				var edge = $it2.next();
				var tail = edge.tail, parentweight = this.hafter(edge.id,node.graph.edges.negatives(node)) + this.nheight(edge.weight);
				if(parentweight > extra) extra = parentweight;
			}
			if(extra > this.padBefore) this.padBefore = extra;
		}
		this.padBefore += 2;
		this.padAfter = 0.0;
		var _g = 0, _g1 = this.layout.layer(this.layout.length - 1);
		while(_g < _g1.length) {
			var node = _g1[_g];
			++_g;
			var extra = Math.min(this.nheight(node.data.exit),this.extraWidth);
			var $it3 = node.graph.edges.positives(node);
			while( $it3.hasNext() ) {
				var edge = $it3.next();
				var head = edge.head, childweight = this.hafter(edge.id,node.graph.edges.positives(node)) + this.nheight(edge.weight) + Math.min(this.nheight(node.data.exit),this.extraWidth);
				if(childweight > extra) extra = childweight;
			}
			if(extra > this.padAfter) this.padAfter = extra;
		}
		this.padAfter += 2;
		var edgescontainer = this.g.select("g.edges");
		if(edgescontainer.empty()) edgescontainer = this.g.append("svg:g").attr("class").string("edges"); else edgescontainer.selectAll("*").remove();
		var edges = Arrays.order(Iterators.array(this.layout.graph.edges.iterator()),function(ea,eb) {
			var lena = me.layout.cell(ea.tail).layer - me.layout.cell(ea.head).layer, lenb = me.layout.cell(eb.tail).layer - me.layout.cell(eb.head).layer, comp = lenb - lena;
			if(comp != 0) return comp; else return Floats.compare(eb.weight,ea.weight);
		});
		Iterators.each(this.layout.graph.nodes.iterator(),function(node,_) {
			node.graph.edges.sortPositives(node,function(a,b) {
				var ca = me.layout.cell(a.head), cb = me.layout.cell(b.head);
				var t = cb.layer - ca.layer;
				if(t != 0) return t;
				return ca.position - cb.position;
			});
			node.graph.edges.sortNegatives(node,function(a,b) {
				var ca = me.layout.cell(a.tail), cb = me.layout.cell(b.tail);
				if(ca.layer > cb.layer) return 1;
				return ca.position - cb.position;
			});
		});
		var cedges = edges.copy();
		cedges.sort(function(a,b) {
			var ca = me.layout.cell(a.tail), cb = me.layout.cell(b.tail);
			return cb.position - ca.position;
		});
		if(this.thinbackedges) {
			var blockwidth = 10;
			cedges.forEach(function(edge,_) {
				if(edge.weight <= 0) return;
				var cellhead = me.layout.cell(edge.head), celltail = me.layout.cell(edge.tail);
				if(cellhead.layer > celltail.layer) return;
				var weight = me.nheight(edge.weight), before = 5 + me.cafter(edge.id,edge.tail.positives()) * (me.backEdgeSpacing + 1), after = 5 + me.cafter(edge.id,edge.head.negatives()) * (me.backEdgeSpacing + 1), x1 = me.layerWidth / 2 + me.xlayer(celltail.layer), x2 = -me.layerWidth / 2 + me.xlayer(cellhead.layer), y1 = me.ynode(edge.tail) + me.ydiagonal(edge.id,edge.tail.positives()), y2 = me.nheight(edge.head.data.entry) + me.ynode(edge.head) + me.ydiagonal(edge.id,edge.head.negatives());
				var g = edgescontainer.append("svg:g");
				var chunkf = g.append("svg:rect").attr("x")["float"](x1).attr("y")["float"](y1).attr("width")["float"](blockwidth).attr("height")["float"](weight).attr("class").string("edge fill fill-" + me.styleEdgeBackward + " stroke stroke-" + me.styleEdgeBackward).onNode("mouseover",(function(f,a1,a2,a3) {
					return function(a4,a5) {
						return f(a1,a2,a3,a4,a5);
					};
				})(me.onmouseoveredge.$bind(me),(x1 + x2) / 2,backedgesy,edge));
				var chunkf1 = g.append("svg:rect").attr("x")["float"](x2 - blockwidth).attr("y")["float"](y2).attr("width")["float"](blockwidth).attr("height")["float"](weight).attr("class").string("edge fill fill-" + me.styleEdgeBackward + " stroke stroke-" + me.styleEdgeBackward).onNode("mouseover",(function(f,a1,a2,a3) {
					return function(a4,a5) {
						return f(a1,a2,a3,a4,a5);
					};
				})(me.onmouseoveredge.$bind(me),(x1 + x2) / 2,backedgesy,edge));
				var hook = new rg.svg.widget.HookConnector(g,"stroke stroke-" + me.styleEdgeBackward);
				me.addToMap(edge.id,"edge",g);
				hook.update(x1 + blockwidth,y1 + weight / 2,x2 - blockwidth,y2 + weight / 2,backedgesy,before,after);
				hook.g.onNode("mouseover",(function(f,a1,a2,a3) {
					return function(a4,a5) {
						return f(a1,a2,a3,a4,a5);
					};
				})(me.onmouseoveredge.$bind(me),(x1 + x2) / 2,backedgesy,edge));
				if(null != me.edgeClass) {
					var cls = me.edgeClass({ head : edge.head.data, tail : edge.tail.data, edgeweight : edge.weight},me.dependentVariable.stats);
					if(null != cls) hook.addClass(cls);
				}
				rg.util.RGColors.storeColorForSelection(hook.g,"stroke",hook.line.style("stroke").get());
				if(null != me.clickEdge) hook.g.onNode("click",(function(f,a1) {
					return function(a2,a3) {
						return f(a1,a2,a3);
					};
				})(me.edgeClickWithEdge.$bind(me),edge));
				if(me.stackbackedges) backedgesy += 1 + me.backEdgeSpacing;
			});
		} else cedges.forEach(function(edge,_) {
			if(edge.weight <= 0) return;
			var cellhead = me.layout.cell(edge.head), celltail = me.layout.cell(edge.tail);
			if(cellhead.layer > celltail.layer) return;
			var weight = me.nheight(edge.weight), hook = new rg.svg.widget.HookConnectorArea(edgescontainer,"fill fill-" + me.styleEdgeBackward,"stroke stroke-" + me.styleEdgeBackward), before = me.hafter(edge.id,edge.tail.positives()) + Math.min(me.extraWidth,me.nheight(edge.tail.data.exit)), after = me.hafter(edge.id,edge.head.negatives()), x1 = me.layerWidth / 2 + me.xlayer(celltail.layer), x2 = -me.layerWidth / 2 + me.xlayer(cellhead.layer), y1 = me.ynode(edge.tail) + me.ydiagonal(edge.id,edge.tail.positives()), y2 = me.nheight(edge.head.data.entry) + me.ynode(edge.head) + me.ydiagonal(edge.id,edge.head.negatives());
			me.addToMap(edge.id,"edge",hook.g);
			hook.update(x1,y1,x2,y2,weight,backedgesy,before,after);
			hook.g.onNode("mouseover",(function(f,a1,a2,a3) {
				return function(a4,a5) {
					return f(a1,a2,a3,a4,a5);
				};
			})(me.onmouseoveredge.$bind(me),(x1 + x2) / 2,backedgesy + weight / 2,edge));
			if(null != me.edgeClass) {
				var cls = me.edgeClass({ head : edge.head.data, tail : edge.tail.data, edgeweight : edge.weight},me.dependentVariable.stats);
				if(null != cls) hook.addClass(cls);
			}
			rg.util.RGColors.storeColorForSelection(hook.g,"fill",hook.area.style("fill").get());
			if(null != me.clickEdge) hook.g.onNode("click",(function(f,a1) {
				return function(a2,a3) {
					return f(a1,a2,a3);
				};
			})(me.edgeClickWithEdge.$bind(me),edge));
			if(me.stackbackedges) backedgesy += weight + me.backEdgeSpacing;
		});
		edges.forEach(function(edge,_) {
			if(edge.weight <= 0) return;
			var head = edge.head, tail = edge.tail, cellhead = me.layout.cell(head), celltail = me.layout.cell(tail);
			if(cellhead.layer <= celltail.layer) return;
			var x1 = Math.round(me.layerWidth / 2 + me.xlayer(celltail.layer)) - .5, x2 = Math.round(-me.layerWidth / 2 + me.xlayer(cellhead.layer)) - .5, y1 = me.ynode(tail) + me.ydiagonal(edge.id,tail.graph.edges.positives(tail)), y2 = me.ynode(head) + me.nheight(head.data.entry) + me.ydiagonal(edge.id,head.graph.edges.negatives(head)), weight = me.nheight(edge.weight), diagonal = new rg.svg.widget.DiagonalArea(edgescontainer,"fill fill-" + me.styleEdgeForward,"stroke stroke-" + me.styleEdgeForward);
			diagonal.update(x1,y1,x2,y2,weight,weight);
			if(null != me.edgeClass) {
				var cls = me.edgeClass({ head : edge.head.data, tail : edge.tail.data, edgeweight : edge.weight},me.dependentVariable.stats);
				if(null != cls) diagonal.addClass(cls);
			}
			me.addToMap(edge.id,"edge",diagonal.g);
			diagonal.g.onNode("mouseover",(function(f,a1,a2,a3) {
				return function(a4,a5) {
					return f(a1,a2,a3,a4,a5);
				};
			})(me.onmouseoveredge.$bind(me),(x1 + x2) / 2,(y1 + y2 + weight) / 2,edge));
			rg.util.RGColors.storeColorForSelection(diagonal.g,"fill",diagonal.area.style("fill").get());
			if(null != me.clickEdge) diagonal.g.onNode("click",(function(f,a1) {
				return function(a2,a3) {
					return f(a1,a2,a3);
				};
			})(me.edgeClickWithEdge.$bind(me),edge));
		});
		var normMin = function(v) {
			return Math.max(0,Math.min(v - 3,me.extraRadius));
		};
		this.layout.each(function(cell,node) {
			if(node.data.exit <= 0 || me.extraWidth <= 0 || null != me.displayExit && !me.displayExit(node.data,me.dependentVariable.stats)) return;
			var elbow = new rg.svg.widget.ElbowArea(edgescontainer,"fill fill-" + me.styleexit,"stroke stroke-" + me.styleexit), extra = me.nheight(node.data.exit), x = me.layerWidth / 2 + me.xlayer(cell.layer), y = me.ynode(node) + me.ydiagonal(null,node.graph.edges.positives(node)), minr = normMin(extra);
			elbow.update(rg.svg.widget.Orientation.RightBottom,extra,x,y + extra,minr,me.extraWidth,0,me.extraHeight);
			if(null != me.labelEdge) {
				var label, text = me.labelEdge({ tail : node, head : null, nodeweight : node.data.weight, edgeweight : node.data.exit},me.dependentVariable.stats), nodeSpacing = 0;
				label = new rg.svg.widget.Label(edgescontainer,true,true,false);
				label.addClass("edge");
				label.place(x,y + extra / 2,0);
				label.setAnchor(rg.svg.widget.GridAnchor.Left);
				label.setText(text);
				if(label.getSize().height > extra * .75) label.destroy();
			}
			elbow.g.onNode("mouseover",(function(f,a1,a2,a3) {
				return function(a4,a5) {
					return f(a1,a2,a3,a4,a5);
				};
			})(me.onmouseoverexit.$bind(me),x + minr + (-minr + Math.min(me.extraWidth,extra)) / 2,me.ynode(node) + me.hnode(node) + minr + me.extraHeight,node));
			if(null != me.edgeClass) {
				var cls = me.edgeClass({ head : null, tail : node.data, edgeweight : node.data.exit},me.dependentVariable.stats);
				if(null != cls) elbow.addClass(cls);
			}
			rg.util.RGColors.storeColorForSelection(elbow.g,"fill",elbow.area.style("fill").get());
			if(null != me.clickEdge) elbow.g.onNode("click",(function(f,a1,a2) {
				return function(a3,a4) {
					return f(a1,a2,a3,a4);
				};
			})(me.edgeClickWithNode.$bind(me),node,true));
			me.addToMap(node.id,"exit",elbow.g);
		});
		this.layout.each(function(cell,node) {
			if(node.data.entry <= 0 || me.extraWidth <= 0 || null != me.displayEntry && !me.displayEntry(node.data,me.dependentVariable.stats)) return;
			var elbow = new rg.svg.widget.ElbowArea(edgescontainer,"fill fill-" + me.styleentry,"stroke stroke-" + me.styleentry), extra = me.nheight(node.data.entry), minr = normMin(extra), x = -me.layerWidth / 2 + me.xlayer(cell.layer);
			elbow.update(rg.svg.widget.Orientation.LeftTop,extra,x,me.ynode(node),minr,me.extraWidth,0,me.extraHeight);
			if(null != me.labelEdge) {
				var label, text = me.labelEdge({ tail : null, head : node, nodeweight : node.data.weight, edgeweight : node.data.entry},me.dependentVariable.stats), nodeSpacing = 0;
				label = new rg.svg.widget.Label(edgescontainer,true,true,false);
				label.addClass("edge");
				label.place(x,me.ynode(node) + extra / 2,0);
				label.setAnchor(rg.svg.widget.GridAnchor.Right);
				label.setText(text);
				if(label.getSize().height > extra * .75) label.destroy();
			}
			elbow.g.onNode("mouseover",(function(f,a1,a2,a3) {
				return function(a4,a5) {
					return f(a1,a2,a3,a4,a5);
				};
			})(me.onmouseoverentry.$bind(me),x - minr + (minr - Math.min(me.extraWidth,extra)) / 2,me.ynode(node) - minr - me.extraHeight,node));
			if(null != me.edgeClass) {
				var cls = me.edgeClass({ head : node.data, tail : null, edgeweight : node.data.entry},me.dependentVariable.stats);
				if(null != cls) elbow.addClass(cls);
			}
			rg.util.RGColors.storeColorForSelection(elbow.g,"fill",elbow.area.style("fill").get());
			if(null != me.clickEdge) elbow.g.onNode("click",(function(f,a1,a2) {
				return function(a3,a4) {
					return f(a1,a2,a3,a4);
				};
			})(me.edgeClickWithNode.$bind(me),node,false));
			me.addToMap(node.id,"entry",elbow.g);
		});
		if(null != this.labelEdge) edges.forEach(function(edge,_) {
			if(edge.weight <= 0) return;
			var tail = edge.tail;
			if(me.isdummy(tail)) return;
			var celltail = me.layout.cell(tail), weight = me.nheight(edge.weight), label, text = me.labelEdge(me.edgeData(edge),me.dependentVariable.stats), nodeSpacing = 2;
			label = new rg.svg.widget.Label(edgescontainer,true,true,false);
			label.addClass("edge");
			label.place(me.layerWidth / 2 + me.xlayer(celltail.layer) + nodeSpacing,me.ynode(tail) + me.ydiagonal(edge.id,tail.graph.edges.positives(tail)) + weight / 2,0);
			label.setAnchor(rg.svg.widget.GridAnchor.Left);
			label.setText(text);
			if(label.getSize().height > weight * .75) label.destroy();
		});
		var rules = this.g.selectAll("g.layer").data(this.layout.layers()).enter().append("svg:g").attr("class").string("layer").append("svg:line").attr("class").stringf(function(_,i) {
			return "rule rule-" + i;
		}).attr("x1")["float"](0).attr("x2")["float"](0).attr("y1")["float"](0).attr("y2")["float"](this.height).update().attr("transform").stringf(function(_,i) {
			return "translate(" + me.xlayer(i) + ",0)";
		}).exit().remove();
		var choice = rules.update().selectAll("g.node").dataf(function(d,i) {
			return me.layout.layer(i);
		});
		var cont = choice.enter().append("svg:g").attr("class").string("node");
		if(this.layerWidth > 0) {
			var rect = cont.append("svg:rect").attr("class").stringf(function(n,_) {
				return "fill fill-" + (me.isdummy(n)?me.styleEdgeForward + " nonode":me.styleNode + " node");
			}).attr("x")["float"](-this.layerWidth / 2).attr("y")["float"](0).attr("width")["float"](Math.round(this.layerWidth)).attr("height").floatf(this.hnode.$bind(this));
			cont.each(function(node,_) {
				me.addToMap(node.id,"node",dhx.Dom.selectNode(dhx.Group.current));
				if(null != me.nodeClass) {
					var cls = me.nodeClass(node.data,me.dependentVariable.stats);
					if(null != cls) dhx.Dom.selectNode(dhx.Group.current).classed().add(cls);
				}
			});
			rg.util.RGColors.storeColorForSelection(cont,"fill",rect.style("fill").get());
			cont.append("svg:line").attr("class").stringf(function(n,_) {
				return "node stroke stroke-" + (me.isdummy(n)?me.styleEdgeForward:me.styleNode);
			}).attr("x1")["float"](-this.layerWidth / 2).attr("y1")["float"](0).attr("x2")["float"](this.layerWidth / 2).attr("y2")["float"](0);
			cont.append("svg:line").attr("class").stringf(function(n,_) {
				return "node stroke stroke-" + (me.isdummy(n)?me.styleEdgeForward:me.styleNode);
			}).attr("x1")["float"](-this.layerWidth / 2).attr("y1").floatf(this.hnode.$bind(this)).attr("x2")["float"](this.layerWidth / 2).attr("y2").floatf(this.hnode.$bind(this));
		}
		choice.update().attr("transform").stringf(function(n,i) {
			return "translate(0," + me.ynode(n) + ")";
		});
		cont.each(function(n,i) {
			var node = dhx.Dom.selectNode(dhx.Group.current);
			if(me.isdummy(n)) return;
			var nodeheight = me.hnode(n), label;
			if(null != me.labelDataPoint) {
				var lines = me.labelDataPoint(n.data.dp,me.dependentVariable.stats).split("\n"), nodeSpacing = 3, prev = null, text, pos = 0.0;
				var _g1 = 0, _g = lines.length;
				while(_g1 < _g) {
					var i1 = _g1++;
					text = lines[i1];
					label = new rg.svg.widget.Label(node,true,true,false);
					label.addClass("node");
					if(i1 == 0) label.addClass("first");
					pos = nodeSpacing;
					if(null != prev) pos += prev.y + prev.getSize().height;
					label.place(-me.layerWidth / 2 + nodeSpacing * 2,pos,0);
					label.setAnchor(rg.svg.widget.GridAnchor.TopLeft);
					label.setText(text);
					if(label.y + label.getSize().height > nodeheight) {
						label.destroy();
						break;
					}
					prev = label;
				}
			}
			var hasimage = false;
			if(null != me.imagePath && !me.isdummy(n)) {
				var path = me.imagePath(n.data.dp);
				if(path != null) {
					hasimage = true;
					var container = node.append("svg:g").attr("transform").string("translate(" + Math.round(-me.imageWidth / 2) + "," + Math.round(-me.imageHeight - me.imageSpacing) + ")");
					container.append("svg:image").attr("preserveAspectRatio").string("xMidYMid slice").attr("width")["float"](me.imageWidth).attr("height")["float"](me.imageHeight).attr("xlink:href").string(path);
				}
			}
			if(null != me.labelNode) {
				if(hasimage) label = new rg.svg.widget.Label(node,true,true,true); else label = new rg.svg.widget.Label(node,true,false,false);
				label.setAnchor(rg.svg.widget.GridAnchor.Bottom);
				label.place(0,-me.labelNodeSpacing,0);
				label.setText(me.labelNode(n.data.dp,me.dependentVariable.stats));
			}
		});
		cont.each(function(n,i) {
			var node = dhx.Dom.selectNode(dhx.Group.current);
			node.onNode("mouseover",(function(f,a1) {
				return function(a2,a3) {
					return f(a1,a2,a3);
				};
			})(me.onmouseovernode.$bind(me),n));
			if(null != me.click) node.onNode("click",(function(f,a1) {
				return function(a2,a3) {
					return f(a1,a2,a3);
				};
			})(me.nodeclick.$bind(me),n));
		});
		this.ready.dispatch();
	}
	,addToMap: function(id,type,el) {
		this.mapelements.set(type + ":" + id,el);
	}
	,isbackward: function(edge) {
		return this.layout.cell(edge.head).layer <= this.layout.cell(edge.tail).layer;
	}
	,highlight: function(id,type) {
		var me = this;
		var $it0 = this.maphi.iterator();
		while( $it0.hasNext() ) {
			var el = $it0.next();
			el.classed().remove("over");
		}
		this.maphi = new Hash();
		var hiedgep = null, hinodep = null, hiedgen = null, hinoden = null;
		var hielement = function(id1,type1) {
			var key = type1 + ":" + id1;
			me.maphi.set(key,me.mapelements.get(key).classed().add("over"));
		};
		var hientry = function(id1) {
			var key = "entry:" + id1, extra = me.mapelements.get(key);
			if(null == extra) return;
			me.maphi.set(key,extra.classed().add("over"));
		};
		var hiexit = function(id1) {
			var key = "exit:" + id1, extra = me.mapelements.get(key);
			if(null == extra) return;
			me.maphi.set(key,extra.classed().add("over"));
		};
		var ishi = function(id1,type1) {
			return me.maphi.exists(type1 + ":" + id1);
		};
		hiedgep = function(edge) {
			if(ishi(edge.id,"edge")) return;
			hielement(edge.id,"edge");
			if(!me.isbackward(edge)) hinodep(edge.head);
		};
		hinodep = function(node) {
			if(ishi(node.id,"node")) return;
			hielement(node.id,"node");
			hiexit(node.id);
			var $it1 = node.graph.edges.positives(node);
			while( $it1.hasNext() ) {
				var edge = $it1.next();
				hiedgep(edge);
			}
		};
		hiedgen = function(edge) {
			if(!me.isbackward(edge)) hinoden(edge.tail);
			if(ishi(edge.id,"edge")) return;
			if(!me.isbackward(edge)) hielement(edge.id,"edge");
		};
		hinoden = function(node) {
			var $it2 = node.graph.edges.negatives(node);
			while( $it2.hasNext() ) {
				var edge = $it2.next();
				hiedgen(edge);
			}
			if(ishi(node.id,"node")) return;
			hielement(node.id,"node");
			hientry(node.id);
		};
		if(type == "edge") {
			hiedgep(this.layout.graph.edges.get(id));
			hiedgen(this.layout.graph.edges.get(id));
		} else if(type == "node") {
			hinodep(this.layout.graph.nodes.get(id));
			hinoden(this.layout.graph.nodes.get(id));
			hientry(id);
		}
	}
	,edgeData: function(edge) {
		var head = edge.head, tail = edge.tail;
		while(this.isdummy(head)) head = head.graph.edges.positives(head).next().head;
		while(this.isdummy(tail)) tail = tail.graph.edges.negatives(tail).next().tail;
		return { head : head.data.dp, tail : tail.data.dp, edgeweight : edge.weight, nodeweight : tail.data.weight};
	}
	,edgeDataWithNode: function(node,out) {
		return { tail : out?node.data.dp:null, head : out?null:node.data.dp, edgeweight : out?node.data.exit:node.data.entry, nodeweight : node.data.weight};
	}
	,nodeclick: function(node,el,i) {
		this.click(node.data.dp,this.dependentVariable.stats);
	}
	,edgeclick: function(data,el,i) {
		this.clickEdge(data,this.dependentVariable.stats);
	}
	,edgeClickWithEdge: function(edge,el,i) {
		this.edgeclick(this.edgeData(edge),el,i);
	}
	,edgeClickWithNode: function(node,out,el,i) {
		this.edgeclick(this.edgeDataWithNode(node,out),el,i);
	}
	,onmouseovernode: function(node,el,i) {
		this.highlight(node.id,"node");
		if(this.isdummy(node)) {
			if(null == this.labelEdgeOver) return;
			var text = this.labelEdgeOver(this.edgeData(node.graph.edges.positives(node).next()),this.dependentVariable.stats);
			if(false === text) {
			} else if(null == text) this.tooltip.hide(); else {
				var cell = this.layout.cell(node);
				this.tooltip.anchor("bottomright");
				this.tooltip.html(text.split("\n").join("<br>"));
				this.moveTooltip(this.xlayer(cell.layer),this.ynode(node) + this.hnode(node) / 2,rg.util.RGColors.extractColor(el));
			}
		} else {
			if(null == this.labelDataPointOver) return;
			var text = this.labelDataPointOver(node.data.dp,this.dependentVariable.stats);
			if(false === text) {
			} else if(null == text) this.tooltip.hide(); else {
				var cell = this.layout.cell(node);
				this.tooltip.anchor("bottomright");
				this.tooltip.html(text.split("\n").join("<br>"));
				this.moveTooltip(this.xlayer(cell.layer),this.ynode(node) + this.hnode(node) / 2,rg.util.RGColors.extractColor(el));
			}
		}
	}
	,onmouseoveredge: function(x,y,edge,el,i) {
		this.highlight(edge.id,"edge");
		if(null == this.labelEdgeOver) return;
		var text = this.labelEdgeOver(this.edgeData(edge),this.dependentVariable.stats);
		if(null == text) this.tooltip.hide(); else {
			this.tooltip.anchor("bottomright");
			this.tooltip.html(text.split("\n").join("<br>"));
			this.moveTooltip(x,y,rg.util.RGColors.extractColor(el));
		}
	}
	,onmouseoverentry: function(x,y,node,el,i) {
		this.highlight(node.id,"node");
		if(null == this.labelEdgeOver) return;
		var text = this.labelEdgeOver(this.edgeDataWithNode(node,false),this.dependentVariable.stats);
		if(null == text) this.tooltip.hide(); else {
			this.tooltip.anchor("bottomright");
			this.tooltip.html(text.split("\n").join("<br>"));
			this.moveTooltip(x,y,rg.util.RGColors.extractColor(el));
		}
	}
	,onmouseoverexit: function(x,y,node,el,i) {
		this.highlight(node.id,"node");
		if(null == this.labelEdgeOver) return;
		var text = this.labelEdgeOver(this.edgeDataWithNode(node,true),this.dependentVariable.stats);
		if(null == text) this.tooltip.hide(); else {
			this.tooltip.anchor("topleft");
			this.tooltip.html(text.split("\n").join("<br>"));
			this.moveTooltip(x,y,rg.util.RGColors.extractColor(el));
		}
	}
	,nheight: function(v) {
		if(0 == v) return 0;
		return Math.round(v / this.maxweight * this.availableheight);
	}
	,ydiagonal: function(id,edges) {
		var weight = 0.0;
		while( edges.hasNext() ) {
			var edge = edges.next();
			if(edge.id == id) break;
			weight += edge.weight;
		}
		return this.nheight(weight);
	}
	,cafter: function(id,edges) {
		var found = false, count = 0;
		while( edges.hasNext() ) {
			var edge = edges.next();
			if(!found) {
				if(edge.id == id) found = true;
				continue;
			}
			count++;
		}
		return count;
	}
	,hafter: function(id,edges) {
		var found = false, pad = this.backEdgeSpacing / this.nheight(1), weight = pad;
		while( edges.hasNext() ) {
			var edge = edges.next();
			if(!found) {
				if(edge.id == id) found = true;
				continue;
			}
			weight += edge.weight + pad;
		}
		return this.nheight(weight);
	}
	,xlayer: function(pos,_) {
		if(this.layout.length <= 1) return this.width / 2;
		return Math.round((this.width - this.padBefore - this.padAfter - this.layerWidth) / (this.layout.length - 1) * pos + this.layerWidth / 2 + this.padBefore);
	}
	,ynode: function(node,_) {
		var cell = this.layout.cell(node), before = this.layerstarty[cell.layer];
		var _g1 = 0, _g = cell.position;
		while(_g1 < _g) {
			var i = _g1++;
			var prev = this.layout.nodeAt(cell.layer,i);
			before += this.hnode(prev) + this.nodepadding(prev);
		}
		before += this.nodepadding(node);
		return Math.round(before) + 0.5;
	}
	,nodepadding: function(node) {
		return this.isdummy(node)?this.dummySpacing:this.nodeSpacing;
	}
	,isdummy: function(node) {
		return node.data.id.substr(0,1) == "#";
	}
	,hnode: function(node,_) {
		return this.nheight(node.data.weight);
	}
	,__class__: rg.svg.chart.Sankey
});
rg.svg.chart.ScatterGraph = function(panel) {
	rg.svg.chart.CartesianChart.call(this,panel);
	this.addClass("scatter-graph");
	this.chart = this.g.append("svg:g");
};
$hxClasses["rg.svg.chart.ScatterGraph"] = rg.svg.chart.ScatterGraph;
rg.svg.chart.ScatterGraph.__name__ = ["rg","svg","chart","ScatterGraph"];
rg.svg.chart.ScatterGraph.__super__ = rg.svg.chart.CartesianChart;
rg.svg.chart.ScatterGraph.prototype = $extend(rg.svg.chart.CartesianChart.prototype,{
	symbol: null
	,symbolStyle: null
	,chart: null
	,dps: null
	,x: function(d,i) {
		var value = Reflect.field(d,this.xVariable.type), scaled = this.xVariable.axis.scale(this.xVariable.min(),this.xVariable.max(),value), scaledw = scaled * this.width;
		return scaledw;
	}
	,getY1: function(pos) {
		var h = this.height, v = this.yVariables[pos];
		return function(d,i) {
			var value = Reflect.field(d,v.type), scaled = v.axis.scale(v.min(),v.max(),value), scaledh = scaled * h;
			return h - scaledh;
		};
	}
	,classf: function(pos,cls) {
		return function(_,i) {
			return cls + " stroke-" + pos + " fill-" + pos;
		};
	}
	,data: function(dps) {
		this.dps = dps;
		this.redraw();
	}
	,resize: function() {
		rg.svg.chart.CartesianChart.prototype.resize.call(this);
		this.redraw();
	}
	,redraw: function() {
		var me = this;
		if(null == this.dps || null == this.dps[0] || null == this.dps[0][0]) return;
		var axisgroup = this.chart.selectAll("g.group").data(this.dps);
		var axisenter = axisgroup.enter().append("svg:g").attr("class").stringf(function(_,i) {
			return "group group-" + i;
		});
		axisgroup.exit().remove();
		var _g1 = 0, _g = this.dps.length;
		while(_g1 < _g) {
			var i = _g1++;
			var data = this.dps[i], gi = this.chart.select("g.group-" + i), stats = [this.yVariables[i].stats];
			var gsymbol = gi.selectAll("g.symbol").data(data), vars = this.yVariables, onclick = ((function() {
				return function(f,a1) {
					return (function() {
						return function(a2,a3) {
							return f(a1,a2,a3);
						};
					})();
				};
			})())(this.onclick.$bind(this),stats[0]), onmouseover = ((function() {
				return function(f,a1) {
					return (function() {
						return function(a2,a3) {
							return f(a1,a2,a3);
						};
					})();
				};
			})())(this.onmouseover.$bind(this),stats[0]);
			var enter = gsymbol.enter().append("svg:g").attr("class").stringf(this.classf(i,"symbol")).attr("transform").stringf(this.getTranslatePointf(i));
			if(null != this.click) enter.on("click",onclick);
			if(null != this.labelDataPointOver) enter.onNode("mouseover",onmouseover);
			var spath = enter.append("svg:path").attr("d").stringf((function(stats) {
				return function(dp,_) {
					return me.symbol(dp,stats[0]);
				};
			})(stats));
			if(null != this.symbolStyle) spath.attr("style").stringf((function(stats) {
				return function(dp,_) {
					return me.symbolStyle(dp,stats[0]);
				};
			})(stats));
			if(null != this.labelDataPoint) {
				var f = [this.labelDataPoint];
				enter.eachNode((function(f,stats) {
					return function(n,i1) {
						var dp = Reflect.field(n,"__dhx_data__"), label = new rg.svg.widget.Label(dhx.Dom.selectNode(n),true,true,true);
						label.setText(f[0](dp,stats[0]));
					};
				})(f,stats));
			}
			gsymbol.update().selectAll("g.symbol").dataf((function() {
				return function(d,i1) {
					return d;
				};
			})()).update().attr("transform").stringf(this.getTranslatePointf(i));
			gsymbol.exit().remove();
		}
		this.ready.dispatch();
	}
	,getTranslatePointf: function(pos) {
		var x = this.x.$bind(this), y = this.getY1(pos);
		return function(dp,i) {
			return "translate(" + x(dp) + "," + y(dp,i) + ")";
		};
	}
	,onmouseover: function(stats,n,i) {
		var dp = Reflect.field(n,"__dhx_data__"), text = this.labelDataPointOver(dp,stats);
		if(null == text) this.tooltip.hide(); else {
			var sel = dhx.Dom.selectNode(n), coords = rg.svg.chart.Coords.fromTransform(sel.attr("transform").get());
			this.tooltip.html(text.split("\n").join("<br>"));
			this.moveTooltip(coords[0],coords[1],null);
		}
	}
	,onclick: function(stats,dp,i) {
		this.click(dp,stats);
	}
	,__class__: rg.svg.chart.ScatterGraph
});
rg.svg.chart.StreamEffect = $hxClasses["rg.svg.chart.StreamEffect"] = { __ename__ : ["rg","svg","chart","StreamEffect"], __constructs__ : ["NoEffect","GradientHorizontal","GradientVertical"] }
rg.svg.chart.StreamEffect.NoEffect = ["NoEffect",0];
rg.svg.chart.StreamEffect.NoEffect.toString = $estr;
rg.svg.chart.StreamEffect.NoEffect.__enum__ = rg.svg.chart.StreamEffect;
rg.svg.chart.StreamEffect.GradientHorizontal = function(lightness) { var $x = ["GradientHorizontal",1,lightness]; $x.__enum__ = rg.svg.chart.StreamEffect; $x.toString = $estr; return $x; }
rg.svg.chart.StreamEffect.GradientVertical = function(lightness) { var $x = ["GradientVertical",2,lightness]; $x.__enum__ = rg.svg.chart.StreamEffect; $x.toString = $estr; return $x; }
rg.svg.chart.StreamEffects = function() { }
$hxClasses["rg.svg.chart.StreamEffects"] = rg.svg.chart.StreamEffects;
rg.svg.chart.StreamEffects.__name__ = ["rg","svg","chart","StreamEffects"];
rg.svg.chart.StreamEffects.getLightness = function(p,alt) {
	if(null == p) return alt; else return Std.parseFloat(p);
}
rg.svg.chart.StreamEffects.parse = function(s) {
	var parts = s.toLowerCase().split(":");
	switch(parts.shift()) {
	case "gradient":case "gradientv":case "gradientvert":case "gradientvertical":
		return rg.svg.chart.StreamEffect.GradientVertical(rg.svg.chart.StreamEffects.getLightness(parts.pop(),0.75));
	case "gradienth":case "gradienthoriz":case "gradienthorizontal":
		return rg.svg.chart.StreamEffect.GradientHorizontal(rg.svg.chart.StreamEffects.getLightness(parts.pop(),0.75));
	default:
		return rg.svg.chart.StreamEffect.NoEffect;
	}
}
rg.svg.chart.StreamEffects.prototype = {
	__class__: rg.svg.chart.StreamEffects
}
rg.svg.chart.StreamGraph = function(panel) {
	rg.svg.chart.CartesianChart.call(this,panel);
	this.interpolator = thx.svg.LineInterpolator.Cardinal(0.6);
	this.gradientLightness = 0.75;
	this.gradientStyle = 1;
};
$hxClasses["rg.svg.chart.StreamGraph"] = rg.svg.chart.StreamGraph;
rg.svg.chart.StreamGraph.__name__ = ["rg","svg","chart","StreamGraph"];
rg.svg.chart.StreamGraph.__super__ = rg.svg.chart.CartesianChart;
rg.svg.chart.StreamGraph.prototype = $extend(rg.svg.chart.CartesianChart.prototype,{
	interpolator: null
	,gradientLightness: null
	,gradientStyle: null
	,dps: null
	,area: null
	,transformedData: null
	,stats: null
	,defs: null
	,maxy: null
	,init: function() {
		rg.svg.chart.CartesianChart.prototype.init.call(this);
		this.defs = this.g.append("svg:defs");
		this.g.classed().add("stream-chart");
	}
	,setVariables: function(variables,variableIndependents,variableDependents,data) {
		rg.svg.chart.CartesianChart.prototype.setVariables.call(this,variables,variableIndependents,variableDependents,data);
	}
	,data: function(dps) {
		this.dps = dps;
		this.prepareData();
		this.redraw();
	}
	,redraw: function() {
		if(null == this.transformedData) return;
		var layer = this.g.selectAll("g.group").data(this.transformedData);
		layer.update().select("path.line").attr("d").stringf(($_=this.area,$_.shape.$bind($_)));
		var g = layer.enter().append("svg:g").attr("class").string("group");
		var path = g.append("svg:path").attr("class").stringf(function(d,i) {
			return "line fill-" + i + " stroke-" + i;
		}).attr("d").stringf(($_=this.area,$_.shape.$bind($_))).onNode("mousemove",this.onover.$bind(this)).onNode("click",this.onclick.$bind(this));
		rg.util.RGColors.storeColorForSelection(path);
		if(this.gradientStyle != 0) path.each(this.gradientStyle == 1?this.applyGradientV.$bind(this):this.applyGradientH.$bind(this));
		layer.exit().remove();
		this.ready.dispatch();
	}
	,getDataAtNode: function(n,i) {
		var px = dhx.Svg.mouse(n)[0], x = (Floats.uninterpolatef(this.transformedData[i][0].coord.x,Arrays.last(this.transformedData[i]).coord.x))(px / this.width);
		var data = Reflect.field(n,"__dhx_data__");
		return Arrays.nearest(this.transformedData[i],x,function(d) {
			return d.coord.x;
		});
	}
	,onover: function(n,i) {
		if(null == this.labelDataPointOver) return;
		var dp = this.getDataAtNode(n,i);
		this.tooltip.html(this.labelDataPointOver(dp.dp,this.stats).split("\n").join("<br>"));
		this.moveTooltip(dp.coord.x * this.width,this.height - (dp.coord.y + dp.coord.y0) * this.height / this.maxy,rg.util.RGColors.extractColor(n));
	}
	,onclick: function(n,i) {
		if(null == this.click) return;
		var dp = this.getDataAtNode(n,i);
		this.click(dp.dp,this.stats);
	}
	,prepareData: function() {
		var me = this;
		this.defs.selectAll("linearGradient.h").remove();
		var xscale = (function(f,a1,a2) {
			return function(a3) {
				return f(a1,a2,a3);
			};
		})(($_=this.xVariable.axis,$_.scale.$bind($_)),this.xVariable.min(),this.xVariable.max()), xtype = this.xVariable.type, x = function(d) {
			return xscale(Reflect.field(d,xtype));
		}, yscale = (function(f,a1,a2) {
			return function(a3) {
				return f(a1,a2,a3);
			};
		})(($_=this.yVariables[0].axis,$_.scale.$bind($_)),this.yVariables[0].min(),this.yVariables[0].max()), ytype = this.yVariables[0].type, y = function(d) {
			return yscale(Reflect.field(d,ytype));
		}, m = Arrays.floatMax(this.dps,function(d) {
			return d.length;
		}) | 0;
		var altDp = function(pos) {
			var _g1 = 0, _g = me.dps.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(null != me.dps[i][pos]) return me.dps[i][pos];
			}
			return null;
		};
		var coords = this.dps.map(function(d,j) {
			return Ints.range(0,m).map(function(_,i) {
				var dp = d[i];
				if(null == dp) return { x : x(altDp(i)), y : .0};
				return { x : x(dp), y : Math.max(0,y(dp))};
			});
		});
		var data = new thx.geom.layout.Stack().offset(thx.geom.layout.StackOffset.Silhouette).order(thx.geom.layout.StackOrder.DefaultOrder).stack(coords);
		this.transformedData = data.map(function(d,i) {
			return d.map(function(d1,j) {
				return { coord : d1, dp : me.dps[i][j]};
			});
		});
		this.stats = this.yVariables[0].stats;
		this.maxy = Arrays.floatMax(data,function(d) {
			return Arrays.floatMax(d,function(d1) {
				return d1.y0 + d1.y;
			});
		});
		this.area = new thx.svg.Area().interpolator(this.interpolator).x(function(d,i) {
			return d.coord.x * me.width;
		}).y0(function(d,i) {
			return me.height - d.coord.y0 * me.height / me.maxy;
		}).y1(function(d,i) {
			return me.height - (d.coord.y + d.coord.y0) * me.height / me.maxy;
		});
	}
	,applyGradientV: function(d,i) {
		var gn = dhx.Dom.selectNode(dhx.Group.current), color = rg.util.RGColors.parse(gn.style("fill").get(),"#cccccc"), id = "rg_stream_gradient_h_" + color.hex("");
		if(this.defs.select("#" + id).empty()) {
			var scolor = rg.util.RGColors.applyLightness(thx.color.Hsl.toHsl(color),this.gradientLightness).toRgbString();
			var gradient = this.defs.append("svg:linearGradient").attr("gradientUnits").string("objectBoundingBox").attr("id").string(id).attr("x1").string("0%").attr("x2").string("0%").attr("y1").string("100%").attr("y2").string("0%").attr("spreadMethod").string("pad");
			gradient.append("svg:stop").attr("offset").string("0%").attr("stop-color").string(scolor).attr("stop-opacity")["float"](1);
			gradient.append("svg:stop").attr("offset").string("100%").attr("stop-color").string(color.toRgbString()).attr("stop-opacity")["float"](1);
		}
		gn.attr("style").string("fill:url(#" + id + ")");
	}
	,applyGradientH: function(d,i) {
		var gn = dhx.Dom.selectNode(dhx.Group.current), color = thx.color.Hsl.toHsl(rg.util.RGColors.parse(gn.style("fill").get(),"#cccccc")), id = "rg_stream_gradient_v_" + rg.svg.chart.StreamGraph.vid++;
		var gradient = this.defs.append("svg:linearGradient").attr("gradientUnits").string("objectBoundingBox").attr("class").string("x").attr("id").string(id).attr("x1").string("0%").attr("x2").string("100%").attr("y1").string("0%").attr("y2").string("0%");
		var bx = d[0].coord.x, ax = d[d.length - 1].coord.x, span = ax - bx, percent = function(x) {
			return Math.round((x - bx) / span * 10000) / 100;
		}, max = Arrays.floatMax(d,function(d1) {
			return d1.coord.y;
		});
		var _g1 = 0, _g = d.length;
		while(_g1 < _g) {
			var i1 = _g1++;
			var dp = d[i1], v = dp.coord.y / max;
			var gcolor = rg.util.RGColors.applyLightness(color,this.gradientLightness,v);
			gradient.append("svg:stop").attr("offset").string(percent(dp.coord.x) + "%").attr("stop-color").string(gcolor.hex("#")).attr("stop-opacity")["float"](1);
		}
		gn.attr("style").string("fill:url(#" + id + ")");
	}
	,__class__: rg.svg.chart.StreamGraph
});
rg.svg.layer = {}
rg.svg.layer.RulesOrtho = function(panel,orientation) {
	rg.svg.panel.Layer.call(this,panel);
	this.orientation = orientation;
	this.displayMinor = true;
	this.displayMajor = true;
	this.displayAnchorLine = true;
	this.g.classed().add("tickmarks");
};
$hxClasses["rg.svg.layer.RulesOrtho"] = rg.svg.layer.RulesOrtho;
rg.svg.layer.RulesOrtho.__name__ = ["rg","svg","layer","RulesOrtho"];
rg.svg.layer.RulesOrtho.__super__ = rg.svg.panel.Layer;
rg.svg.layer.RulesOrtho.prototype = $extend(rg.svg.panel.Layer.prototype,{
	orientation: null
	,displayMinor: null
	,displayMajor: null
	,displayAnchorLine: null
	,translate: null
	,x1: null
	,y1: null
	,x2: null
	,y2: null
	,axis: null
	,min: null
	,max: null
	,resize: function() {
		if(null == this.axis) return;
		if(this.displayAnchorLine) this.updateAnchorLine();
		this.redraw();
	}
	,update: function(axis,min,max) {
		this.axis = axis;
		this.min = min;
		this.max = max;
		this.redraw();
	}
	,updateAnchorLine: function() {
		var line = this.g.select("line.anchor-line");
		switch( (this.orientation)[1] ) {
		case 1:
			line.attr("x1")["float"](0).attr("y1")["float"](0).attr("x2")["float"](0).attr("y2")["float"](this.height);
			break;
		case 0:
			line.attr("x1")["float"](0).attr("y1")["float"](this.height).attr("x2")["float"](this.width).attr("y2")["float"](this.height);
			break;
		}
	}
	,maxTicks: function() {
		var size = (function($this) {
			var $r;
			switch( ($this.orientation)[1] ) {
			case 1:
				$r = $this.width;
				break;
			case 0:
				$r = $this.height;
				break;
			}
			return $r;
		}(this));
		return Math.round(size / 2.5);
	}
	,id: function(d,i) {
		return "" + d.getValue();
	}
	,redraw: function() {
		var ticks = this.maxTicks(), data = this.axis.ticks(this.min,this.max,ticks);
		var rule = this.g.selectAll("g.rule").data(data,this.id.$bind(this));
		var enter = rule.enter().append("svg:g").attr("class").string("rule").attr("transform").stringf(this.translate);
		if(this.displayMinor) enter.filter(function(d,i) {
			return !d.major;
		}).append("svg:line").attr("x1").floatf(this.x1).attr("y1").floatf(this.y1).attr("x2").floatf(this.x2).attr("y2").floatf(this.y2).attr("class").stringf(this.tickClass.$bind(this));
		if(this.displayMajor) enter.filter(function(d,i) {
			return d.major;
		}).append("svg:line").attr("x1").floatf(this.x1).attr("y1").floatf(this.y1).attr("x2").floatf(this.x2).attr("y2").floatf(this.y2).attr("class").stringf(this.tickClass.$bind(this));
		rule.update().attr("transform").stringf(this.translate);
		rule.exit().remove();
	}
	,initf: function() {
		switch( (this.orientation)[1] ) {
		case 1:
			this.translate = this.translateHorizontal.$bind(this);
			this.x1 = this.x1Horizontal.$bind(this);
			this.y1 = this.y1Horizontal.$bind(this);
			this.x2 = this.x2Horizontal.$bind(this);
			this.y2 = this.y2Horizontal.$bind(this);
			break;
		case 0:
			this.translate = this.translateVertical.$bind(this);
			this.x1 = this.x1Vertical.$bind(this);
			this.y1 = this.y1Vertical.$bind(this);
			this.x2 = this.x2Vertical.$bind(this);
			this.y2 = this.y2Vertical.$bind(this);
			break;
		}
	}
	,init: function() {
		this.initf();
		if(this.displayAnchorLine) {
			this.g.append("svg:line").attr("class").string("anchor-line");
			this.updateAnchorLine();
		}
	}
	,t: function(x,y) {
		return "translate(" + x + "," + y + ")";
	}
	,translateHorizontal: function(d,i) {
		return "translate(" + 0 + "," + (this.height - d.getDelta() * this.height) + ")";
	}
	,translateVertical: function(d,i) {
		return "translate(" + d.getDelta() * this.width + "," + 0 + ")";
	}
	,x1Horizontal: function(d,i) {
		return 0;
	}
	,x1Vertical: function(d,i) {
		return 0;
	}
	,y1Horizontal: function(d,i) {
		return 0;
	}
	,y1Vertical: function(d,i) {
		return 0;
	}
	,x2Horizontal: function(d,i) {
		return this.width;
	}
	,x2Vertical: function(d,i) {
		return 0;
	}
	,y2Horizontal: function(d,i) {
		return 0;
	}
	,y2Vertical: function(d,i) {
		return this.height;
	}
	,tickClass: function(d,i) {
		return d.getMajor()?"major":null;
	}
	,__class__: rg.svg.layer.RulesOrtho
});
rg.svg.layer.TickmarksOrtho = function(panel,anchor) {
	rg.svg.panel.Layer.call(this,panel);
	this.anchor = anchor;
	this.displayMinor = true;
	this.displayMajor = true;
	this.displayLabel = true;
	this.displayAnchorLine = false;
	this.lengthMinor = 2;
	this.lengthMajor = 5;
	this.paddingMinor = 1;
	this.paddingMajor = 1;
	this.paddingLabel = 10;
	this.g.classed().add("tickmarks");
};
$hxClasses["rg.svg.layer.TickmarksOrtho"] = rg.svg.layer.TickmarksOrtho;
rg.svg.layer.TickmarksOrtho.__name__ = ["rg","svg","layer","TickmarksOrtho"];
rg.svg.layer.TickmarksOrtho.__super__ = rg.svg.panel.Layer;
rg.svg.layer.TickmarksOrtho.prototype = $extend(rg.svg.panel.Layer.prototype,{
	anchor: null
	,displayMinor: null
	,displayMajor: null
	,displayLabel: null
	,displayAnchorLine: null
	,lengthMinor: null
	,lengthMajor: null
	,paddingMinor: null
	,paddingMajor: null
	,paddingLabel: null
	,labelOrientation: null
	,labelAnchor: null
	,labelAngle: null
	,desiredSize: null
	,tickLabel: null
	,translate: null
	,x1: null
	,y1: null
	,x2: null
	,y2: null
	,axis: null
	,min: null
	,max: null
	,resize: function() {
		if(null == this.axis) return;
		if(this.displayAnchorLine) this.updateAnchorLine();
		this.redraw();
	}
	,update: function(axis,min,max) {
		this.axis = axis;
		this.min = min;
		this.max = max;
		this.redraw();
	}
	,updateAnchorLine: function() {
		var line = this.g.select("line.anchor-line");
		switch( (this.anchor)[1] ) {
		case 0:
			line.attr("x1")["float"](0).attr("y1")["float"](0).attr("x2")["float"](this.panel.frame.width).attr("y2")["float"](0);
			break;
		case 1:
			line.attr("x1")["float"](0).attr("y1")["float"](this.panel.frame.height).attr("x2")["float"](this.panel.frame.width).attr("y2")["float"](this.panel.frame.height);
			break;
		case 2:
			line.attr("x1")["float"](0).attr("y1")["float"](0).attr("x2")["float"](0).attr("y2")["float"](this.panel.frame.height);
			break;
		case 3:
			line.attr("x1")["float"](this.panel.frame.width).attr("y1")["float"](0).attr("x2")["float"](this.panel.frame.width).attr("y2")["float"](this.panel.frame.height);
			break;
		}
	}
	,maxTicks: function() {
		var size = (function($this) {
			var $r;
			switch( ($this.anchor)[1] ) {
			case 2:
			case 3:
				$r = $this.height;
				break;
			case 0:
			case 1:
				$r = $this.width;
				break;
			}
			return $r;
		}(this));
		return Math.round(size / 2.5);
	}
	,id: function(d,i) {
		return "" + d.getValue();
	}
	,redraw: function() {
		this.desiredSize = Math.max(this.paddingMinor + this.lengthMinor,this.paddingMajor + this.lengthMajor);
		var ticks = this.maxTicks(), data = this.axis.ticks(this.min,this.max,ticks);
		var tick = this.g.selectAll("g.tick").data(data,this.id.$bind(this));
		var enter = tick.enter().append("svg:g").attr("class").string("tick").attr("transform").stringf(this.translate);
		if(this.displayMinor) enter.filter(function(d,i) {
			return !d.major;
		}).append("svg:line").attr("x1").floatf(this.x1).attr("y1").floatf(this.y1).attr("x2").floatf(this.x2).attr("y2").floatf(this.y2).attr("class").stringf(this.tickClass.$bind(this));
		if(this.displayMajor) enter.filter(function(d,i) {
			return d.major;
		}).append("svg:line").attr("x1").floatf(this.x1).attr("y1").floatf(this.y1).attr("x2").floatf(this.x2).attr("y2").floatf(this.y2).attr("class").stringf(this.tickClass.$bind(this));
		if(this.displayLabel) enter.eachNode(this.createLabel.$bind(this));
		tick.update().attr("transform").stringf(this.translate);
		tick.exit().remove();
	}
	,createLabel: function(n,i) {
		var d = Reflect.field(n,"__dhx_data__");
		if(!d.getMajor()) return;
		var label = new rg.svg.widget.Label(dhx.Dom.selectNode(n),false,false,false);
		label.setAnchor(this.labelAnchor);
		label.setOrientation(this.labelOrientation);
		var padding = this.paddingLabel;
		label.setText(null == this.tickLabel?d.getLabel():this.tickLabel(d.getValue()));
		switch( (this.anchor)[1] ) {
		case 0:
			label.place(0,padding,this.labelAngle);
			break;
		case 1:
			label.place(0,-padding,this.labelAngle);
			break;
		case 2:
			label.place(padding,0,this.labelAngle);
			break;
		case 3:
			label.place(-padding,0,this.labelAngle);
			break;
		}
		var s = (function($this) {
			var $r;
			switch( ($this.anchor)[1] ) {
			case 0:
			case 1:
				$r = label.getSize().height + padding;
				break;
			case 2:
			case 3:
				$r = label.getSize().width + padding;
				break;
			}
			return $r;
		}(this));
		if(s > this.desiredSize) this.desiredSize = s;
	}
	,initf: function() {
		switch( (this.anchor)[1] ) {
		case 0:
			this.translate = this.translateTop.$bind(this);
			this.x1 = this.x1Top.$bind(this);
			this.y1 = this.y1Top.$bind(this);
			this.x2 = this.x2Top.$bind(this);
			this.y2 = this.y2Top.$bind(this);
			break;
		case 1:
			this.translate = this.translateBottom.$bind(this);
			this.x1 = this.x1Bottom.$bind(this);
			this.y1 = this.y1Bottom.$bind(this);
			this.x2 = this.x2Bottom.$bind(this);
			this.y2 = this.y2Bottom.$bind(this);
			break;
		case 2:
			this.translate = this.translateLeft.$bind(this);
			this.x1 = this.x1Left.$bind(this);
			this.y1 = this.y1Left.$bind(this);
			this.x2 = this.x2Left.$bind(this);
			this.y2 = this.y2Left.$bind(this);
			break;
		case 3:
			this.translate = this.translateRight.$bind(this);
			this.x1 = this.x1Right.$bind(this);
			this.y1 = this.y1Right.$bind(this);
			this.x2 = this.x2Right.$bind(this);
			this.y2 = this.y2Right.$bind(this);
			break;
		}
		if(null == this.labelOrientation) {
			switch( (this.anchor)[1] ) {
			case 0:
			case 1:
				this.labelOrientation = rg.svg.widget.LabelOrientation.Orthogonal;
				break;
			case 2:
			case 3:
				this.labelOrientation = rg.svg.widget.LabelOrientation.Aligned;
				break;
			}
		} else if(null == this.labelAnchor) {
			var $e = (this.labelOrientation);
			switch( $e[1] ) {
			case 1:
				switch( (this.anchor)[1] ) {
				case 0:
				case 2:
					this.labelAnchor = rg.svg.widget.GridAnchor.Left;
					break;
				case 1:
				case 3:
					this.labelAnchor = rg.svg.widget.GridAnchor.Right;
					break;
				}
				break;
			case 2:
				switch( (this.anchor)[1] ) {
				case 0:
				case 2:
					this.labelAnchor = rg.svg.widget.GridAnchor.Top;
					break;
				case 1:
				case 3:
					this.labelAnchor = rg.svg.widget.GridAnchor.Bottom;
					break;
				}
				break;
			case 0:
				var a = $e[2];
				break;
			}
		}
		if(null == this.labelAnchor) {
			switch( (this.anchor)[1] ) {
			case 0:
				this.labelAnchor = rg.svg.widget.GridAnchor.Top;
				break;
			case 1:
				this.labelAnchor = rg.svg.widget.GridAnchor.Bottom;
				break;
			case 2:
				this.labelAnchor = rg.svg.widget.GridAnchor.Left;
				break;
			case 3:
				this.labelAnchor = rg.svg.widget.GridAnchor.Right;
				break;
			}
		}
		if(null == this.labelAngle) {
			switch( (this.anchor)[1] ) {
			case 0:
				this.labelAngle = 90;
				break;
			case 1:
				this.labelAngle = 90;
				break;
			case 2:
				this.labelAngle = 0;
				break;
			case 3:
				this.labelAngle = 0;
				break;
			}
		}
	}
	,init: function() {
		this.initf();
		if(this.displayAnchorLine) {
			this.g.append("svg:line").attr("class").string("anchor-line");
			this.updateAnchorLine();
		}
	}
	,t: function(x,y) {
		return "translate(" + x + "," + y + ")";
	}
	,translateTop: function(d,i) {
		return "translate(" + d.getDelta() * this.panel.frame.width + "," + 0 + ")";
	}
	,translateBottom: function(d,i) {
		return "translate(" + d.getDelta() * this.panel.frame.width + "," + this.panel.frame.height + ")";
	}
	,translateLeft: function(d,i) {
		return "translate(" + 0 + "," + (this.panel.frame.height - d.getDelta() * this.panel.frame.height) + ")";
	}
	,translateRight: function(d,i) {
		return "translate(" + this.panel.frame.width + "," + (this.panel.frame.height - d.getDelta() * this.panel.frame.height) + ")";
	}
	,x1Top: function(d,i) {
		return 0;
	}
	,x1Bottom: function(d,i) {
		return 0;
	}
	,x1Left: function(d,i) {
		return d.getMajor()?this.paddingMajor:this.paddingMinor;
	}
	,x1Right: function(d,i) {
		return -(d.getMajor()?this.paddingMajor:this.paddingMinor);
	}
	,y1Top: function(d,i) {
		return d.getMajor()?this.paddingMajor:this.paddingMinor;
	}
	,y1Bottom: function(d,i) {
		return -(d.getMajor()?this.paddingMajor:this.paddingMinor);
	}
	,y1Left: function(d,i) {
		return 0;
	}
	,y1Right: function(d,i) {
		return 0;
	}
	,x2Top: function(d,i) {
		return 0;
	}
	,x2Bottom: function(d,i) {
		return 0;
	}
	,x2Left: function(d,i) {
		return d.getMajor()?this.lengthMajor + this.paddingMajor:this.lengthMinor + this.paddingMinor;
	}
	,x2Right: function(d,i) {
		return -(d.getMajor()?this.lengthMajor + this.paddingMajor:this.lengthMinor + this.paddingMinor);
	}
	,y2Top: function(d,i) {
		return d.getMajor()?this.lengthMajor + this.paddingMajor:this.lengthMinor + this.paddingMinor;
	}
	,y2Bottom: function(d,i) {
		return -(d.getMajor()?this.lengthMajor + this.paddingMajor:this.lengthMinor + this.paddingMinor);
	}
	,y2Left: function(d,i) {
		return 0;
	}
	,y2Right: function(d,i) {
		return 0;
	}
	,tickClass: function(d,i) {
		return d.getMajor()?"major":null;
	}
	,__class__: rg.svg.layer.TickmarksOrtho
});
rg.svg.layer.Title = function(panel,text,anchor,padding,className,shadow,outline) {
	if(outline == null) outline = false;
	if(shadow == null) shadow = false;
	if(className == null) className = "title";
	if(padding == null) padding = 1;
	rg.svg.panel.Layer.call(this,panel);
	this.addClass(className);
	this.group = this.g.append("svg:g");
	this.label = new rg.svg.widget.Label(this.group,false,shadow,outline);
	this.label.setOrientation(rg.svg.widget.LabelOrientation.Orthogonal);
	this.setAnchor(anchor);
	this.setPadding(padding);
	this.setText(text);
	this.resize();
};
$hxClasses["rg.svg.layer.Title"] = rg.svg.layer.Title;
rg.svg.layer.Title.__name__ = ["rg","svg","layer","Title"];
rg.svg.layer.Title.__super__ = rg.svg.panel.Layer;
rg.svg.layer.Title.prototype = $extend(rg.svg.panel.Layer.prototype,{
	text: null
	,anchor: null
	,padding: null
	,label: null
	,group: null
	,idealHeight: function() {
		var size = this.label.getSize();
		return Math.round((function($this) {
			var $r;
			switch( ($this.anchor)[1] ) {
			case 2:
			case 3:
				$r = size.width + $this.padding;
				break;
			case 0:
			case 1:
				$r = size.height + $this.padding;
				break;
			}
			return $r;
		}(this)));
	}
	,resize: function() {
		if(null == this.anchor || null == this.width || this.padding == null) return;
		switch( (this.anchor)[1] ) {
		case 0:
			this.group.attr("transform").string("translate(" + this.width / 2 + "," + this.padding + ")");
			break;
		case 3:
			this.group.attr("transform").string("translate(" + (this.width - this.padding) + "," + this.height / 2 + ")");
			break;
		case 2:
			this.group.attr("transform").string("translate(" + this.padding + "," + this.height / 2 + ")");
			break;
		case 1:
			this.group.attr("transform").string("translate(" + this.width / 2 + "," + (this.height - this.padding) + ")");
			break;
		}
	}
	,getText: function() {
		return this.label.text;
	}
	,setText: function(v) {
		return this.label.setText(v);
	}
	,setAnchor: function(v) {
		switch( (this.anchor = v)[1] ) {
		case 0:
			this.label.setAnchor(rg.svg.widget.GridAnchor.Top);
			break;
		case 1:
			this.label.setAnchor(rg.svg.widget.GridAnchor.Bottom);
			break;
		case 2:
			this.label.setAnchor(rg.svg.widget.GridAnchor.Bottom);
			break;
		case 3:
			this.label.setAnchor(rg.svg.widget.GridAnchor.Bottom);
			break;
		}
		return v;
	}
	,setPadding: function(v) {
		this.padding = v;
		switch( (this.anchor)[1] ) {
		case 0:
			this.label.place(0,0,90);
			break;
		case 1:
			this.label.place(0,0,90);
			break;
		case 2:
			this.label.place(0,0,180);
			break;
		case 3:
			this.label.place(0,0,0);
			break;
		}
		return v;
	}
	,__class__: rg.svg.layer.Title
	,__properties__: $extend(rg.svg.panel.Layer.prototype.__properties__,{set_padding:"setPadding",set_anchor:"setAnchor",set_text:"setText",get_text:"getText"})
});
rg.svg.panel.Panel = function(frame) {
	this.frame = frame;
	frame.change = this.reframe.$bind(this);
	this._layers = [];
};
$hxClasses["rg.svg.panel.Panel"] = rg.svg.panel.Panel;
rg.svg.panel.Panel.__name__ = ["rg","svg","panel","Panel"];
rg.svg.panel.Panel.prototype = {
	frame: null
	,g: null
	,parent: null
	,_layers: null
	,addLayer: function(layer) {
		this._layers.remove(layer);
		this._layers.push(layer);
	}
	,removeLayer: function(layer) {
		this._layers.remove(layer);
	}
	,setParent: function(container) {
		if(null != this.g) this.g.remove();
		this.parent = container;
		if(null == container) return;
		this.init(container.g);
	}
	,init: function(container) {
		this.g = container.append("svg:g").attr("class").string("panel").attr("transform").string("translate(" + this.frame.x + "," + this.frame.y + ")");
	}
	,reframe: function() {
		this.g.attr("transform").string("translate(" + this.frame.x + "," + this.frame.y + ")");
		var layer;
		var _g1 = 0, _g = this._layers.length;
		while(_g1 < _g) {
			var i = _g1++;
			layer = this._layers[i];
			layer._resize();
		}
	}
	,__class__: rg.svg.panel.Panel
}
rg.svg.panel.Container = function(frame,orientation) {
	rg.svg.panel.Panel.call(this,frame);
	this.stack = new rg.frame.Stack(frame.width,frame.height,orientation);
	this.panels = [];
};
$hxClasses["rg.svg.panel.Container"] = rg.svg.panel.Container;
rg.svg.panel.Container.__name__ = ["rg","svg","panel","Container"];
rg.svg.panel.Container.__super__ = rg.svg.panel.Panel;
rg.svg.panel.Container.prototype = $extend(rg.svg.panel.Panel.prototype,{
	stack: null
	,panels: null
	,insertPanel: function(pos,panel) {
		if(null == panel) return this;
		if(pos >= this.stack.getLength()) return this.addPanel(panel); else if(pos < 0) pos = 0;
		if(null != panel.parent) panel.parent.removePanel(panel);
		this.panels.insert(pos,panel);
		var f = panel;
		f.setParent(this);
		this.stack.insertItem(pos,(function($this) {
			var $r;
			var $t = panel.frame;
			if(Std["is"]($t,rg.frame.StackItem)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)));
		return this;
	}
	,addPanel: function(panel) {
		return this.addPanels([panel]);
	}
	,addPanels: function(it) {
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
				if(Std["is"]($t,rg.frame.StackItem)) $t; else throw "Class cast error";
				$r = $t;
				return $r;
			}(this)));
		}
		this.stack.addItems(frames);
		return this;
	}
	,removePanel: function(panel) {
		if(!this.panels.remove(panel)) return this;
		this.stack.removeChild((function($this) {
			var $r;
			var $t = panel.frame;
			if(Std["is"]($t,rg.frame.StackItem)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)));
		var f = panel;
		f.setParent(null);
		return this;
	}
	,createPanel: function(layout) {
		var panel = new rg.svg.panel.Panel(new rg.frame.StackItem(layout));
		this.addPanel(panel);
		return panel;
	}
	,createContainer: function(layout,orientation) {
		var panel = new rg.svg.panel.Container(new rg.frame.StackItem(layout),orientation);
		this.addPanel(panel);
		return panel;
	}
	,createPanelAt: function(pos,layout) {
		var panel = new rg.svg.panel.Panel(new rg.frame.StackItem(layout));
		this.insertPanel(pos,panel);
		return panel;
	}
	,createContainerAt: function(pos,layout,orientation) {
		var panel = new rg.svg.panel.Container(new rg.frame.StackItem(layout),orientation);
		this.insertPanel(pos,panel);
		return panel;
	}
	,reframe: function() {
		rg.svg.panel.Panel.prototype.reframe.call(this);
		this.stack.setSize(this.frame.width,this.frame.height);
		this.stack.reflow();
	}
	,__class__: rg.svg.panel.Container
});
rg.svg.panel.Panels = function() { }
$hxClasses["rg.svg.panel.Panels"] = rg.svg.panel.Panels;
rg.svg.panel.Panels.__name__ = ["rg","svg","panel","Panels"];
rg.svg.panel.Panels.absolutePos = function(panel) {
	var p = panel, x = 0, y = 0;
	while(null != p) {
		panel = p;
		x += p.frame.x;
		y += p.frame.y;
		p = p.parent;
	}
	var node = rg.svg.panel.Panels.htmlContainer(panel), left = js.Scroll.getLeft(), top = js.Scroll.getTop();
	if(null == node) return { x : left, y : top};
	var rect = node.getBoundingClientRect();
	return { x : rect.left + x + left, y : rect.top + y + top};
}
rg.svg.panel.Panels.svgContainer = function(panel) {
	var node = panel.g.node();
	do node = node.ownerSVGElement; while(null != node && null != Reflect.field(node.ownerSVGElement,"ownerSVGElement"));
	return null == node?null:node;
}
rg.svg.panel.Panels.htmlContainer = function(panel) {
	var svg = rg.svg.panel.Panels.svgContainer(panel);
	if(null == svg) return null; else return svg.parentNode;
}
rg.svg.panel.Panels.prototype = {
	__class__: rg.svg.panel.Panels
}
rg.svg.panel.Space = function(width,height,domcontainer) {
	this.panel = new rg.frame.StackItem(rg.frame.FrameLayout.Fill(0,0));
	rg.svg.panel.Container.call(this,this.panel,rg.frame.Orientation.Vertical);
	this.init(this.svg = domcontainer.append("svg:svg").attr("xmlns").string("http://www.w3.org/2000/svg"));
	this.resize(width,height);
};
$hxClasses["rg.svg.panel.Space"] = rg.svg.panel.Space;
rg.svg.panel.Space.__name__ = ["rg","svg","panel","Space"];
rg.svg.panel.Space.__super__ = rg.svg.panel.Container;
rg.svg.panel.Space.prototype = $extend(rg.svg.panel.Container.prototype,{
	panel: null
	,svg: null
	,resize: function(width,height) {
		if(this.panel.width == width && this.panel.height == height) return;
		this.svg.attr("width")["float"](width).attr("height")["float"](height);
		var sf = this.panel;
		sf.setLayout(0,0,width,height);
	}
	,__class__: rg.svg.panel.Space
});
rg.svg.util = {}
rg.svg.util.RGCss = function() { }
$hxClasses["rg.svg.util.RGCss"] = rg.svg.util.RGCss;
rg.svg.util.RGCss.__name__ = ["rg","svg","util","RGCss"];
rg.svg.util.RGCss.cache = null;
rg.svg.util.RGCss.colorsInCss = function() {
	if(null != rg.svg.util.RGCss.cache) return rg.svg.util.RGCss.cache;
	var container = dhx.Dom.select("body").append("svg:svg").attr("class").string("rg"), first = rg.svg.util.RGCss.createBlock(container,0).style("fill").get();
	rg.svg.util.RGCss.cache = [first];
	var _g = 1;
	while(_g < 1000) {
		var i = _g++;
		var other = rg.svg.util.RGCss.createBlock(container,i).style("fill").get();
		if(first == other) break; else rg.svg.util.RGCss.cache.push(other);
	}
	container.remove();
	return rg.svg.util.RGCss.cache;
}
rg.svg.util.RGCss.numberOfColorsInCss = function() {
	return rg.svg.util.RGCss.colorsInCss().length;
}
rg.svg.util.RGCss.createBlock = function(container,pos) {
	return container.append("svg:rect").attr("class").string("fill-" + pos);
}
rg.svg.util.RGCss.prototype = {
	__class__: rg.svg.util.RGCss
}
rg.svg.util.SymbolCache = function() {
	this.c = new Hash();
	this.r = 0;
};
$hxClasses["rg.svg.util.SymbolCache"] = rg.svg.util.SymbolCache;
rg.svg.util.SymbolCache.__name__ = ["rg","svg","util","SymbolCache"];
rg.svg.util.SymbolCache.cache = null;
rg.svg.util.SymbolCache.prototype = {
	c: null
	,r: null
	,get: function(type,size) {
		if(size == null) size = 100;
		var k = type + ":" + size, s = this.c.get(k);
		if(null == s) {
			s = (Reflect.field(thx.svg.Symbol,type))(size);
			this.c.set(k,s);
		}
		return s;
	}
	,__class__: rg.svg.util.SymbolCache
}
rg.svg.widget = {}
rg.svg.widget.Balloon = function(container,bindOnTop) {
	if(bindOnTop == null) bindOnTop = true;
	if(bindOnTop) {
		var parent = container.node();
		while(null != parent && parent.nodeName != "svg") parent = parent.parentNode;
		this.container = null == parent?container:dhx.Dom.selectNode(parent);
	} else this.container = container;
	this.visible = true;
	this.duration = 350;
	this.minwidth = 30;
	this.setPreferredSide(2);
	this.ease = thx.math.Ease.mode(thx.math.EaseMode.EaseOut,thx.math.Equations.cubic);
	this.setRoundedCorner(5);
	this.paddingHorizontal = 3.5;
	this.paddingVertical = 1.5;
	this.transition_id = 0;
	this.balloon = this.container.append("svg:g").attr("pointer-events").string("none").attr("class").string("balloon").attr("transform").string("translate(" + (this.x = 0) + ", " + (this.y = 0) + ")");
	this.frame = this.balloon.append("svg:g").attr("transform").string("translate(0, 0)").attr("class").string("frame");
	this.frame.append("svg:path").attr("class").string("shadow").attr("transform").string("translate(1, 1)");
	this.connectorShapeV = thx.svg.Diagonal.forObject();
	this.connectorShapeH = thx.svg.Diagonal.forObject().projection(function(d,i) {
		return [d[1],d[0]];
	});
	this.connector = this.balloon.append("svg:path").attr("class").string("balloon-connector").style("fill").string("none").style("display").string("none").attr("transform").string("translate(0, 0)");
	this.frame.append("svg:path").attr("class").string("bg");
	this.labelsContainer = this.frame.append("svg:g").attr("class").string("labels");
	this.labels = [];
	var temp = this.createLabel(0);
	temp.setText("HELLO");
	this.setLineHeight(temp.getSize().height);
	temp.destroy();
};
$hxClasses["rg.svg.widget.Balloon"] = rg.svg.widget.Balloon;
rg.svg.widget.Balloon.__name__ = ["rg","svg","widget","Balloon"];
rg.svg.widget.Balloon.prototype = {
	text: null
	,x: null
	,y: null
	,boxWidth: null
	,boxHeight: null
	,visible: null
	,lineHeight: null
	,roundedCorner: null
	,paddingHorizontal: null
	,paddingVertical: null
	,preferredSide: null
	,minwidth: null
	,labels: null
	,container: null
	,balloon: null
	,frame: null
	,labelsContainer: null
	,connector: null
	,duration: null
	,ease: null
	,connectorShapeV: null
	,connectorShapeH: null
	,boundingBox: null
	,createLabel: function(i) {
		var label = new rg.svg.widget.Label(this.labelsContainer,true,false,false);
		label.addClass("line-" + i);
		label.setAnchor(rg.svg.widget.GridAnchor.Top);
		label.setOrientation(rg.svg.widget.LabelOrientation.Orthogonal);
		label.place(0,i * this.lineHeight,90);
		return label;
	}
	,setPreferredSide: function(v) {
		this.preferredSide = Ints.clamp(v,0,3);
		this.redraw();
		return v;
	}
	,setText: function(v) {
		while(this.labels.length > v.length) {
			var label = this.labels.pop();
			label.destroy();
		}
		var _g1 = this.labels.length, _g = v.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.labels[i] = this.createLabel(i);
		}
		var _g1 = 0, _g = v.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.labels[i].setText(v[i]);
		}
		this.text = v;
		this.redraw();
		return v;
	}
	,setLineHeight: function(v) {
		this.lineHeight = v;
		this.redraw();
		return v;
	}
	,setRoundedCorner: function(v) {
		this.roundedCorner = v;
		this.redraw();
		return v;
	}
	,setBoundingBox: function(v) {
		this.boundingBox = v;
		this.redraw();
		return v;
	}
	,getBoundingBox: function() {
		if(null == this.boundingBox) try {
			this.setBoundingBox(this.container.node().getBBox());
		} catch( e ) {
			return { width : 0.0, height : 0.0, x : 0.0, y : 0.0};
		}
		return this.boundingBox;
	}
	,transition_id: null
	,moveTo: function(x,y,animate) {
		if(animate == null) animate = true;
		var me = this;
		if(animate) {
			var $int = thx.math.Equations.elasticf(), tid = ++this.transition_id, ix = Floats.interpolatef(this.x,x,this.ease), iy = Floats.interpolatef(this.y,y,this.ease);
			dhx.Timer.timer(function(t) {
				if(tid != me.transition_id) return true;
				if(t > me.duration) {
					me._moveTo(x,y);
					return true;
				}
				me._moveTo(ix(t / me.duration),iy(t / me.duration));
				return false;
			},0);
		} else if(0 == this.boxWidth) haxe.Timer.delay((function(f,a1,a2) {
			return function() {
				return f(a1,a2);
			};
		})(this._moveTo.$bind(this),x,y),15); else this._moveTo(x,y);
	}
	,_moveTo: function(x,y) {
		var bb = this.getBoundingBox(), left = bb.x, right = bb.x + bb.width, top = bb.y, bottom = bb.y + bb.height, limit = this.roundedCorner * 2, offset = 0.0, diagonal = 0;
		var tx = 0.0, ty = 0.0, side = this.preferredSide, found = 1;
		while(found > 0 && found < 5) {
			if(x >= right - limit) {
				if(y <= top + limit) {
					if(x - right < top - y) {
						tx = -this.boxWidth + right - x;
						ty = top - y + this.roundedCorner;
						side = 0;
						offset = this.boxWidth - 4 * this.roundedCorner;
					} else {
						tx = -this.boxWidth + right - x - this.roundedCorner;
						ty = top - y;
						side = 1;
						offset = this.roundedCorner;
					}
					found = 0;
					diagonal = 1;
					break;
				} else if(y >= bottom - limit) {
					if(x - right < y - bottom) {
						tx = -this.boxWidth + right - x;
						ty = bottom - y - this.boxHeight - this.roundedCorner;
						side = 2;
						offset = this.boxWidth - 4 * this.roundedCorner;
					} else {
						tx = -this.boxWidth + right - x - this.roundedCorner;
						ty = bottom - y - this.boxHeight;
						side = 1;
						offset = this.boxHeight - 3 * this.roundedCorner;
					}
					found = 0;
					diagonal = 1;
					break;
				}
			} else if(x <= left + limit) {
				if(y <= top + limit) {
					if(left - x < top - y) {
						tx = left - x;
						ty = top - y + this.roundedCorner;
						side = 0;
						offset = 0;
					} else {
						tx = left - x + this.roundedCorner;
						ty = top - y;
						side = 3;
						offset = this.roundedCorner;
					}
					found = 0;
					diagonal = 1;
					break;
				} else if(y >= bottom - limit) {
					if(left - x < y - bottom) {
						tx = left - x;
						ty = bottom - y - this.boxHeight - this.roundedCorner;
						side = 2;
						offset = 0;
					} else {
						tx = left - x + this.roundedCorner;
						ty = bottom - y - this.boxHeight;
						side = 3;
						offset = this.boxHeight - 3 * this.roundedCorner;
					}
					found = 0;
					diagonal = 1;
					break;
				}
			}
			switch(side) {
			case 0:
				if(y + this.boxHeight + this.roundedCorner >= bottom) {
					side = 2;
					found++;
					continue;
				} else if(x <= left + limit) {
					side = 3;
					found++;
					continue;
				} else if(x >= right - limit) {
					side = 1;
					found++;
					continue;
				}
				tx = -this.boxWidth / 2;
				ty = this.roundedCorner;
				offset = this.boxWidth / 2 - this.roundedCorner * 2;
				if(x - this.boxWidth / 2 <= left) {
					var d = left - x + this.boxWidth / 2;
					offset = Math.max(0,offset - d);
					tx += d;
				} else if(x + this.boxWidth / 2 >= right) {
					var d = right - x - this.boxWidth / 2;
					offset = Math.min(this.boxWidth - this.roundedCorner * 3,offset - d);
					tx += d;
				}
				if(y < top) {
					diagonal = 1;
					ty = top - y + this.roundedCorner;
				}
				break;
			case 1:
				if(x - this.boxWidth - this.roundedCorner <= left) {
					side = 3;
					found++;
					continue;
				} else if(y <= top + limit) {
					side = 2;
					found++;
					continue;
				} else if(y >= bottom - limit) {
					side = 0;
					found++;
					continue;
				}
				tx = -this.boxWidth - this.roundedCorner;
				ty = -this.boxHeight / 2;
				offset = (this.boxHeight - this.roundedCorner * 2) / 2;
				if(y - this.boxHeight / 2 <= top) {
					var d = top - y + this.boxHeight / 2;
					offset = Math.max(0,offset - d);
					ty += d;
				} else if(y + this.boxHeight / 2 >= bottom) {
					var d = bottom - y - this.boxHeight / 2;
					offset = Math.min(this.boxHeight - this.roundedCorner * 3,offset - d);
					ty += d;
				}
				if(x > right) {
					diagonal = 2;
					tx = right - x - this.boxWidth - this.roundedCorner;
				}
				break;
			case 2:
				if(y - this.boxHeight - this.roundedCorner <= top) {
					side = 0;
					found++;
					continue;
				} else if(x <= left + limit) {
					side = 3;
					found++;
					continue;
				} else if(x >= right - limit) {
					side = 1;
					found++;
					continue;
				}
				tx = -this.boxWidth / 2;
				ty = -this.boxHeight - this.roundedCorner;
				offset = this.boxWidth / 2 - this.roundedCorner * 2;
				if(x - this.boxWidth / 2 <= left) {
					var d = left - x + this.boxWidth / 2;
					offset = Math.max(this.roundedCorner,offset - d);
					tx += d;
				} else if(x + this.boxWidth / 2 >= right) {
					var d = right - x - this.boxWidth / 2;
					offset = Math.min(this.boxWidth - this.roundedCorner * 3,offset - d);
					tx += d;
				}
				if(y > bottom) {
					diagonal = 1;
					ty = bottom - y - this.boxHeight - this.roundedCorner;
				}
				break;
			case 3:
				if(x + this.boxWidth + this.roundedCorner >= right) {
					side = 1;
					found++;
					continue;
				} else if(y <= top + limit) {
					side = 2;
					found++;
					continue;
				} else if(y >= bottom - limit) {
					side = 0;
					found++;
					continue;
				}
				tx = this.roundedCorner;
				ty = -this.boxHeight / 2;
				offset = (this.boxHeight - this.roundedCorner * 2) / 2;
				if(y - this.boxHeight / 2 <= top) {
					var d = top - y + this.boxHeight / 2;
					offset = Math.max(this.roundedCorner,offset - d);
					ty += d;
				} else if(y + this.boxHeight / 2 >= bottom) {
					var d = bottom - y - this.boxHeight / 2;
					offset = Math.min(this.boxHeight - this.roundedCorner * 3,offset - d);
					ty += d;
				}
				if(x < left) {
					diagonal = 2;
					tx = left - x + this.roundedCorner;
				}
				break;
			}
			found = 0;
		}
		var coords = null, off = 1.0;
		if(0 == diagonal) this.connector.style("display").string("none"); else {
			this.connector.style("display").string("block");
			coords = { x0 : off, y0 : off, x1 : off, y1 : off};
			switch(side) {
			case 0:
				coords.x1 = tx + off + offset + 2 * this.roundedCorner;
				coords.y1 = ty + off - this.roundedCorner;
				break;
			case 1:
				coords.y1 = tx + off + this.boxWidth + this.roundedCorner;
				coords.x1 = ty + off + offset + this.roundedCorner;
				break;
			case 2:
				coords.x1 = tx + off + offset + 2 * this.roundedCorner;
				coords.y1 = ty + off + this.boxHeight + this.roundedCorner;
				break;
			case 3:
				coords.y1 = tx + off + -this.roundedCorner;
				coords.x1 = ty + off + offset + this.roundedCorner;
				break;
			}
		}
		this.balloon.attr("transform").string("translate(" + (this.x = x) + ", " + (this.y = y) + ")");
		this.frame.attr("transform").string("translate(" + tx + ", " + ty + ")").selectAll("path").attr("d").string(rg.svg.widget.BalloonShape.shape(this.boxWidth,this.boxHeight,this.roundedCorner,this.roundedCorner,side,offset));
		if(0 != diagonal) this.connector.attr("d").string(side % 2 == 0?this.connectorShapeV.diagonal(coords):this.connectorShapeH.diagonal(coords));
	}
	,redraw: function() {
		var me = this;
		if(null == this.text || this.text.length == 0) return;
		this.boxWidth = 0.0;
		var w = 0;
		var _g = 0, _g1 = this.labels;
		while(_g < _g1.length) {
			var label = _g1[_g];
			++_g;
			if((w = Math.ceil(label.getSize().width)) > this.boxWidth) this.boxWidth = w;
		}
		if(w == 0) {
			var t = this.text;
			haxe.Timer.delay(function() {
				me.setText(t);
			},15);
			return;
		}
		this.boxWidth += this.paddingHorizontal * 2;
		this.boxHeight = this.lineHeight * this.labels.length + this.paddingVertical * 2;
		var bg = this.frame.selectAll(".bg"), sw = bg.style("stroke-width").getFloat();
		if(Math.isNaN(sw)) sw = 0;
		this.labelsContainer.attr("transform").string("translate(" + this.boxWidth / 2 + "," + (sw + this.paddingVertical) + ")");
		bg.transition().ease(this.ease).delay(null,this.duration);
	}
	,__class__: rg.svg.widget.Balloon
	,__properties__: {set_boundingBox:"setBoundingBox",get_boundingBox:"getBoundingBox",set_preferredSide:"setPreferredSide",set_roundedCorner:"setRoundedCorner",set_lineHeight:"setLineHeight",set_text:"setText"}
}
rg.svg.widget.BalloonShape = function() { }
$hxClasses["rg.svg.widget.BalloonShape"] = rg.svg.widget.BalloonShape;
rg.svg.widget.BalloonShape.__name__ = ["rg","svg","widget","BalloonShape"];
rg.svg.widget.BalloonShape.shape = function(width,height,rc,rp,side,offset) {
	var w = width - rc * 2, h = height - rc * 2;
	var buf = "M" + rc + ",0";
	if(0 == side) {
		buf += "h" + offset;
		buf += "a" + rc + "," + rc + ",0,0,0," + rc + "," + -rc;
		buf += "a" + rc + "," + rc + ",0,0,0," + rc + "," + rc;
		buf += "h" + (w - (offset + 2 * rc));
	} else buf += "h" + w;
	buf += "a" + rc + "," + rc + ",0,0,1," + rc + "," + rc;
	if(1 == side) {
		buf += "v" + (offset - rc);
		buf += "a" + rc + "," + rc + ",0,0,0," + rc + "," + rc;
		buf += "a" + rc + "," + rc + ",0,0,0," + -rc + "," + rc;
		buf += "v" + (h - (offset + rc));
	} else buf += "v" + h;
	buf += "a" + rc + "," + rc + ",0,0,1," + -rc + "," + rc;
	if(2 == side) {
		buf += "h" + -(w - (offset + 2 * rc));
		buf += "a" + rc + "," + rc + ",0,0,0," + -rc + "," + rc;
		buf += "a" + rc + "," + rc + ",0,0,0," + -rc + "," + -rc;
		buf += "h" + -offset;
	} else buf += "h" + -w;
	buf += "a" + rc + "," + rc + ",0,0,1," + -rc + "," + -rc;
	if(3 == side) {
		buf += "v" + -(h - (offset + rc));
		buf += "a" + rc + "," + rc + ",0,0,0," + -rc + "," + -rc;
		buf += "a" + rc + "," + rc + ",0,0,0," + rc + "," + -rc;
		buf += "v" + -(offset - rc);
	} else buf += "v" + -h;
	buf += "a" + rc + "," + rc + ",0,0,1," + rc + "," + -rc;
	return buf + "Z";
}
rg.svg.widget.BalloonShape.prototype = {
	__class__: rg.svg.widget.BalloonShape
}
rg.svg.widget.DiagonalArea = function(container,classarea,classborder) {
	this.g = container.append("svg:g").attr("class").string("diagonal");
	this.diagonal = thx.svg.Diagonal.forArray().projection(function(a,_) {
		return [a[1],a[0]];
	});
	this.area = this.g.append("svg:path").attr("class").string("diagonal-fill" + (null == classarea?"":" " + classarea));
	this.before = this.g.append("svg:path").attr("class").string("diagonal-stroke before" + (null == classborder?"":" " + classborder));
	this.after = this.g.append("svg:path").attr("class").string("diagonal-stroke after" + (null == classborder?"":" " + classborder));
};
$hxClasses["rg.svg.widget.DiagonalArea"] = rg.svg.widget.DiagonalArea;
rg.svg.widget.DiagonalArea.__name__ = ["rg","svg","widget","DiagonalArea"];
rg.svg.widget.DiagonalArea.prototype = {
	g: null
	,diagonal: null
	,area: null
	,before: null
	,after: null
	,addClass: function(cls) {
		this.g.classed().add(cls);
	}
	,update: function(x1,y1,x2,y2,sw,ew) {
		var top = this.diagonal.diagonal([y1,x1,y2,x2]), bottom = this.diagonal.diagonal([y2 + ew,x2,y1 + sw,x1]);
		var path = top + "L" + bottom.substr(1) + "z";
		this.before.attr("d").string(top);
		this.after.attr("d").string(bottom);
		this.area.attr("d").string(path);
	}
	,__class__: rg.svg.widget.DiagonalArea
}
rg.svg.widget.ElbowArea = function(container,classarea,classborder) {
	this.g = container.append("svg:g").attr("class").string("elbow");
	this.area = this.g.append("svg:path").attr("class").string("elbow-fill" + (null == classarea?"":" " + classarea));
	this.outer = this.g.append("svg:path").attr("class").string("elbow-stroke outer" + (null == classborder?"":" " + classborder));
	this.inner = this.g.append("svg:path").attr("class").string("elbow-stroke inner" + (null == classborder?"":" " + classborder));
};
$hxClasses["rg.svg.widget.ElbowArea"] = rg.svg.widget.ElbowArea;
rg.svg.widget.ElbowArea.__name__ = ["rg","svg","widget","ElbowArea"];
rg.svg.widget.ElbowArea.prototype = {
	g: null
	,area: null
	,outer: null
	,inner: null
	,addClass: function(cls) {
		this.g.classed().add(cls);
	}
	,update: function(orientation,weight,x,y,minradius,maxradius,before,after) {
		if(after == null) after = 10.0;
		if(before == null) before = 0.0;
		if(maxradius == null) maxradius = 16.0;
		if(minradius == null) minradius = 3.0;
		if(weight == 0) return;
		var dinner = "", douter = "", rad = weight < 0?Math.max(maxradius,weight):Math.min(maxradius,weight);
		switch( (orientation)[1] ) {
		case 0:
			dinner = "M" + (before + x + minradius) + "," + (y + minradius + after) + "L" + (before + x + minradius) + "," + (y + minradius) + "A" + Math.abs(minradius) + "," + Math.abs(minradius) + " 0 0,0 " + (before + x) + "," + y + "L" + x + "," + y;
			douter = "M" + x + "," + (y - weight) + "L" + (before + x) + "," + (y - weight) + "A" + Math.abs(rad) + "," + Math.abs(rad) + " 0 0,1 " + (before + x + rad) + "," + (y - weight + rad) + "L" + (before + x + rad) + "," + (y + after + minradius);
			break;
		case 1:
			break;
		case 2:
			break;
		case 3:
			this.update(rg.svg.widget.Orientation.RightBottom,-weight,x,y,-minradius,-maxradius,-before,-after);
			return;
		case 4:
			break;
		case 5:
			break;
		case 6:
			break;
		case 7:
			break;
		}
		var darea = douter + "L" + dinner.substr(1) + "z";
		this.inner.attr("d").string(dinner);
		this.outer.attr("d").string(douter);
		this.area.attr("d").string(darea);
	}
	,__class__: rg.svg.widget.ElbowArea
}
rg.svg.widget.Orientation = $hxClasses["rg.svg.widget.Orientation"] = { __ename__ : ["rg","svg","widget","Orientation"], __constructs__ : ["RightBottom","LeftBottom","RightTop","LeftTop","BottomRight","BottomLeft","TopRight","TopLeft"] }
rg.svg.widget.Orientation.RightBottom = ["RightBottom",0];
rg.svg.widget.Orientation.RightBottom.toString = $estr;
rg.svg.widget.Orientation.RightBottom.__enum__ = rg.svg.widget.Orientation;
rg.svg.widget.Orientation.LeftBottom = ["LeftBottom",1];
rg.svg.widget.Orientation.LeftBottom.toString = $estr;
rg.svg.widget.Orientation.LeftBottom.__enum__ = rg.svg.widget.Orientation;
rg.svg.widget.Orientation.RightTop = ["RightTop",2];
rg.svg.widget.Orientation.RightTop.toString = $estr;
rg.svg.widget.Orientation.RightTop.__enum__ = rg.svg.widget.Orientation;
rg.svg.widget.Orientation.LeftTop = ["LeftTop",3];
rg.svg.widget.Orientation.LeftTop.toString = $estr;
rg.svg.widget.Orientation.LeftTop.__enum__ = rg.svg.widget.Orientation;
rg.svg.widget.Orientation.BottomRight = ["BottomRight",4];
rg.svg.widget.Orientation.BottomRight.toString = $estr;
rg.svg.widget.Orientation.BottomRight.__enum__ = rg.svg.widget.Orientation;
rg.svg.widget.Orientation.BottomLeft = ["BottomLeft",5];
rg.svg.widget.Orientation.BottomLeft.toString = $estr;
rg.svg.widget.Orientation.BottomLeft.__enum__ = rg.svg.widget.Orientation;
rg.svg.widget.Orientation.TopRight = ["TopRight",6];
rg.svg.widget.Orientation.TopRight.toString = $estr;
rg.svg.widget.Orientation.TopRight.__enum__ = rg.svg.widget.Orientation;
rg.svg.widget.Orientation.TopLeft = ["TopLeft",7];
rg.svg.widget.Orientation.TopLeft.toString = $estr;
rg.svg.widget.Orientation.TopLeft.__enum__ = rg.svg.widget.Orientation;
rg.svg.widget.GridAnchor = $hxClasses["rg.svg.widget.GridAnchor"] = { __ename__ : ["rg","svg","widget","GridAnchor"], __constructs__ : ["TopLeft","Top","TopRight","Left","Center","Right","BottomLeft","Bottom","BottomRight"] }
rg.svg.widget.GridAnchor.TopLeft = ["TopLeft",0];
rg.svg.widget.GridAnchor.TopLeft.toString = $estr;
rg.svg.widget.GridAnchor.TopLeft.__enum__ = rg.svg.widget.GridAnchor;
rg.svg.widget.GridAnchor.Top = ["Top",1];
rg.svg.widget.GridAnchor.Top.toString = $estr;
rg.svg.widget.GridAnchor.Top.__enum__ = rg.svg.widget.GridAnchor;
rg.svg.widget.GridAnchor.TopRight = ["TopRight",2];
rg.svg.widget.GridAnchor.TopRight.toString = $estr;
rg.svg.widget.GridAnchor.TopRight.__enum__ = rg.svg.widget.GridAnchor;
rg.svg.widget.GridAnchor.Left = ["Left",3];
rg.svg.widget.GridAnchor.Left.toString = $estr;
rg.svg.widget.GridAnchor.Left.__enum__ = rg.svg.widget.GridAnchor;
rg.svg.widget.GridAnchor.Center = ["Center",4];
rg.svg.widget.GridAnchor.Center.toString = $estr;
rg.svg.widget.GridAnchor.Center.__enum__ = rg.svg.widget.GridAnchor;
rg.svg.widget.GridAnchor.Right = ["Right",5];
rg.svg.widget.GridAnchor.Right.toString = $estr;
rg.svg.widget.GridAnchor.Right.__enum__ = rg.svg.widget.GridAnchor;
rg.svg.widget.GridAnchor.BottomLeft = ["BottomLeft",6];
rg.svg.widget.GridAnchor.BottomLeft.toString = $estr;
rg.svg.widget.GridAnchor.BottomLeft.__enum__ = rg.svg.widget.GridAnchor;
rg.svg.widget.GridAnchor.Bottom = ["Bottom",7];
rg.svg.widget.GridAnchor.Bottom.toString = $estr;
rg.svg.widget.GridAnchor.Bottom.__enum__ = rg.svg.widget.GridAnchor;
rg.svg.widget.GridAnchor.BottomRight = ["BottomRight",8];
rg.svg.widget.GridAnchor.BottomRight.toString = $estr;
rg.svg.widget.GridAnchor.BottomRight.__enum__ = rg.svg.widget.GridAnchor;
rg.svg.widget.GridAnchors = function() { }
$hxClasses["rg.svg.widget.GridAnchors"] = rg.svg.widget.GridAnchors;
rg.svg.widget.GridAnchors.__name__ = ["rg","svg","widget","GridAnchors"];
rg.svg.widget.GridAnchors.parse = function(s) {
	return (function($this) {
		var $r;
		switch(s.toLowerCase()) {
		case "topleft":
			$r = rg.svg.widget.GridAnchor.TopLeft;
			break;
		case "top":
			$r = rg.svg.widget.GridAnchor.Top;
			break;
		case "topright":
			$r = rg.svg.widget.GridAnchor.TopRight;
			break;
		case "left":
			$r = rg.svg.widget.GridAnchor.Left;
			break;
		case "center":
			$r = rg.svg.widget.GridAnchor.Center;
			break;
		case "right":
			$r = rg.svg.widget.GridAnchor.Right;
			break;
		case "bottomleft":
			$r = rg.svg.widget.GridAnchor.BottomLeft;
			break;
		case "bottom":
			$r = rg.svg.widget.GridAnchor.Bottom;
			break;
		case "bottomright":
			$r = rg.svg.widget.GridAnchor.BottomRight;
			break;
		default:
			$r = rg.svg.widget.GridAnchor.Center;
		}
		return $r;
	}(this));
}
rg.svg.widget.GridAnchors.prototype = {
	__class__: rg.svg.widget.GridAnchors
}
rg.svg.widget.HookConnector = function(container,classborder) {
	this.g = container.append("svg:g").attr("class").string("hook");
	this.line = this.g.append("svg:path").attr("class").string("hook-stroke line" + (null == classborder?"":" " + classborder));
};
$hxClasses["rg.svg.widget.HookConnector"] = rg.svg.widget.HookConnector;
rg.svg.widget.HookConnector.__name__ = ["rg","svg","widget","HookConnector"];
rg.svg.widget.HookConnector.lineTo = function(x,y) {
	return "L" + x + "," + y;
}
rg.svg.widget.HookConnector.quarterTo = function(x,y,r) {
	return "A" + Math.abs(r) + "," + Math.abs(r) + " 0 0," + (r < 0?0:1) + " " + x + "," + y;
}
rg.svg.widget.HookConnector.prototype = {
	g: null
	,line: null
	,addClass: function(cls) {
		this.g.classed().add(cls);
	}
	,update: function(x1,y1,x2,y2,yreference,before,after) {
		var linep = this.createPath(x1,y1,x2,y2,yreference,before,after,5,5);
		this.line.attr("d").string(linep);
	}
	,createPath: function(x1,y1,x2,y2,yref,before,after,r1,r2) {
		var path = "M" + x1 + "," + y1;
		path += rg.svg.widget.HookConnector.lineTo(x1 + before - r1,y1);
		path += rg.svg.widget.HookConnector.quarterTo(x1 + before,y1 + r2,r1);
		path += rg.svg.widget.HookConnector.lineTo(x1 + before,yref - r2);
		path += rg.svg.widget.HookConnector.quarterTo(x1 + before - r1,yref,r1);
		path += rg.svg.widget.HookConnector.lineTo(x2 - after + r1,yref);
		path += rg.svg.widget.HookConnector.quarterTo(x2 - after,yref - r2,r1);
		path += rg.svg.widget.HookConnector.lineTo(x2 - after,y2 + r2);
		path += rg.svg.widget.HookConnector.quarterTo(x2 - after + r1,y2,r1);
		path += rg.svg.widget.HookConnector.lineTo(x2,y2);
		return path;
	}
	,__class__: rg.svg.widget.HookConnector
}
rg.svg.widget.HookConnectorArea = function(container,classarea,classborder) {
	this.g = container.append("svg:g").attr("class").string("hook-area");
	this.area = this.g.append("svg:path").attr("class").string("hook-area-fill" + (null == classarea?"":" " + classarea));
	this.upper = this.g.append("svg:path").attr("class").string("hook-area-stroke upper" + (null == classborder?"":" " + classborder));
	this.lower = this.g.append("svg:path").attr("class").string("hook-area-stroke lower" + (null == classborder?"":" " + classborder));
};
$hxClasses["rg.svg.widget.HookConnectorArea"] = rg.svg.widget.HookConnectorArea;
rg.svg.widget.HookConnectorArea.__name__ = ["rg","svg","widget","HookConnectorArea"];
rg.svg.widget.HookConnectorArea.lineTo = function(x,y) {
	return "L" + x + "," + y;
}
rg.svg.widget.HookConnectorArea.quarterTo = function(x,y,r) {
	return "A" + Math.abs(r) + "," + Math.abs(r) + " 0 0," + (r < 0?0:1) + " " + x + "," + y;
}
rg.svg.widget.HookConnectorArea.prototype = {
	g: null
	,area: null
	,upper: null
	,lower: null
	,addClass: function(cls) {
		this.g.classed().add(cls);
	}
	,update: function(x1,y1,x2,y2,weight,yreference,before,after) {
		var min = Math.min(5,weight), upperp = this.createPath(x1,y1,x2,y2,y1 > yreference?yreference:yreference + weight,before + weight,after + weight,weight,weight), lowerp = this.createPath(x2,y2 + weight,x1,y1 + weight,y1 > yreference?yreference - weight:yreference,-after,-before,-min,min);
		this.upper.attr("d").string(upperp);
		this.lower.attr("d").string(lowerp);
		this.area.attr("d").string(upperp + "L" + lowerp.substr(1) + "z");
	}
	,createPath: function(x1,y1,x2,y2,yref,before,after,r1,r2) {
		var path = "M" + x1 + "," + y1;
		path += rg.svg.widget.HookConnectorArea.lineTo(x1 + before - r1,y1);
		path += rg.svg.widget.HookConnectorArea.quarterTo(x1 + before,y1 + r2,r1);
		path += rg.svg.widget.HookConnectorArea.lineTo(x1 + before,yref - r2);
		path += rg.svg.widget.HookConnectorArea.quarterTo(x1 + before - r1,yref,r1);
		path += rg.svg.widget.HookConnectorArea.lineTo(x2 - after + r1,yref);
		path += rg.svg.widget.HookConnectorArea.quarterTo(x2 - after,yref - r2,r1);
		path += rg.svg.widget.HookConnectorArea.lineTo(x2 - after,y2 + r2);
		path += rg.svg.widget.HookConnectorArea.quarterTo(x2 - after + r1,y2,r1);
		path += rg.svg.widget.HookConnectorArea.lineTo(x2,y2);
		return path;
	}
	,__class__: rg.svg.widget.HookConnectorArea
}
rg.svg.widget.Label = function(container,dontflip,shadow,outline) {
	if(dontflip == null) dontflip = true;
	this.shadow = shadow;
	this.outline = outline;
	this.g = container.append("svg:g").attr("class").string("label");
	if(shadow) {
		this.gshadow = this.g.append("svg:g").attr("transform").string("translate(0,0)");
		this.gshadowrot = this.gshadow.append("svg:g");
		this.tshadow = this.gshadowrot.append("svg:text").attr("class").string("shadow" + (outline?"":" nooutline"));
	}
	this.gtext = this.g.append("svg:g");
	if(outline) this.toutline = this.gtext.append("svg:text").attr("class").string("outline" + (shadow?"":" noshadow"));
	var cls = Arrays.addIf(Arrays.addIf(["text"],!outline,"nooutline"),!shadow,"noshadow");
	this.ttext = this.gtext.append("svg:text").attr("class").string(cls.join(" "));
	this.dontFlip = dontflip;
	if(outline) this.setShadowOffset(1,1.25); else this.setShadowOffset(0.5,0.5);
	this.x = 0;
	this.y = 0;
	this.angle = 0;
	this.setOrientation(rg.svg.widget.LabelOrientation.FixedAngle(0));
	this.setAnchor(rg.svg.widget.GridAnchor.Center);
	this.visible = true;
};
$hxClasses["rg.svg.widget.Label"] = rg.svg.widget.Label;
rg.svg.widget.Label.__name__ = ["rg","svg","widget","Label"];
rg.svg.widget.Label.prototype = {
	text: null
	,orientation: null
	,anchor: null
	,x: null
	,y: null
	,angle: null
	,dontFlip: null
	,shadowOffsetX: null
	,shadowOffsetY: null
	,shadow: null
	,outline: null
	,visible: null
	,g: null
	,gshadow: null
	,gtext: null
	,gshadowrot: null
	,ttext: null
	,toutline: null
	,tshadow: null
	,show: function() {
		if(this.visible) return;
		this.visible = true;
		this._toggleVisibility();
	}
	,hide: function() {
		if(!this.visible) return;
		this.visible = false;
		this._toggleVisibility();
	}
	,_toggleVisibility: function() {
		this.g.style("opacity")["float"](this.visible?1:0);
	}
	,addClass: function(name) {
		this.g.classed().add(name);
	}
	,getSize: function() {
		try {
			return this.g.node().getBBox();
		} catch( e ) {
			return { width : 0.0, height : 0.0};
		}
	}
	,place: function(x,y,angle) {
		this.x = Math.isNaN(x)?0.0:x;
		this.y = Math.isNaN(y)?0.0:y;
		this.angle = angle % 360;
		if(this.angle < 0) this.angle += 360;
		this.g.attr("transform").string("translate(" + this.x + "," + this.y + ")");
		var $e = (this.orientation);
		switch( $e[1] ) {
		case 0:
			var a = $e[2];
			this.gtext.attr("transform").string("rotate(" + a + ")");
			break;
		case 1:
			if(this.dontFlip && this.angle > 90 && this.angle < 270) angle += 180;
			this.gtext.attr("transform").string("rotate(" + angle + ")");
			break;
		case 2:
			if(this.dontFlip && this.angle > 180) angle -= 180;
			this.gtext.attr("transform").string("rotate(" + (-90 + angle) + ")");
			break;
		}
		if(this.shadow) this.gshadowrot.attr("transform").string(this.gtext.attr("transform").get());
		this.reanchor();
	}
	,setShadowOffset: function(x,y) {
		this.shadowOffsetX = x;
		this.shadowOffsetY = y;
		if(this.shadow) this.gshadow.attr("transform").string("translate(" + this.shadowOffsetX + "," + this.shadowOffsetY + ")");
	}
	,setText: function(v) {
		this.text = v;
		if(this.outline) this.toutline.text().string(v);
		this.ttext.text().string(v);
		if(this.shadow) this.tshadow.text().string(v);
		this.reanchor();
		return v;
	}
	,setOrientation: function(v) {
		this.orientation = v;
		this.place(this.x,this.y,this.angle);
		return v;
	}
	,setAnchor: function(v) {
		this.anchor = v;
		this.reanchor();
		return v;
	}
	,getBB: function() {
		var n = this.ttext.node(), h = this.ttext.style("font-size").getFloat();
		if(null == h || 0 >= h) try {
			h = n.getExtentOfChar("A").height;
		} catch( e ) {
			h = dhx.Dom.selectNode(n).style("height").getFloat();
		}
		var w;
		try {
			w = n.getComputedTextLength();
		} catch( e ) {
			w = dhx.Dom.selectNode(n).style("width").getFloat();
		}
		return { width : w, height : h};
	}
	,reanchor: function() {
		if(null == this.anchor) return;
		var bb = this.getBB(), x, y;
		var a = this.anchor;
		if(this.dontFlip) {
			switch( (this.orientation)[1] ) {
			case 1:
				if(this.angle > 90 && this.angle < 270) a = (function($this) {
					var $r;
					switch( (a)[1] ) {
					case 0:
						$r = rg.svg.widget.GridAnchor.BottomRight;
						break;
					case 1:
						$r = rg.svg.widget.GridAnchor.Bottom;
						break;
					case 2:
						$r = rg.svg.widget.GridAnchor.BottomLeft;
						break;
					case 3:
						$r = rg.svg.widget.GridAnchor.Right;
						break;
					case 4:
						$r = rg.svg.widget.GridAnchor.Center;
						break;
					case 5:
						$r = rg.svg.widget.GridAnchor.Left;
						break;
					case 6:
						$r = rg.svg.widget.GridAnchor.TopRight;
						break;
					case 7:
						$r = rg.svg.widget.GridAnchor.Top;
						break;
					case 8:
						$r = rg.svg.widget.GridAnchor.TopLeft;
						break;
					}
					return $r;
				}(this));
				break;
			case 2:
				if(this.angle > 180) a = (function($this) {
					var $r;
					switch( (a)[1] ) {
					case 0:
						$r = rg.svg.widget.GridAnchor.BottomRight;
						break;
					case 1:
						$r = rg.svg.widget.GridAnchor.Bottom;
						break;
					case 2:
						$r = rg.svg.widget.GridAnchor.BottomLeft;
						break;
					case 3:
						$r = rg.svg.widget.GridAnchor.Right;
						break;
					case 4:
						$r = rg.svg.widget.GridAnchor.Center;
						break;
					case 5:
						$r = rg.svg.widget.GridAnchor.Left;
						break;
					case 6:
						$r = rg.svg.widget.GridAnchor.TopRight;
						break;
					case 7:
						$r = rg.svg.widget.GridAnchor.Top;
						break;
					case 8:
						$r = rg.svg.widget.GridAnchor.TopLeft;
						break;
					}
					return $r;
				}(this));
				break;
			default:
			}
		}
		switch( (a)[1] ) {
		case 0:
			x = 0;
			y = bb.height;
			break;
		case 1:
			x = -bb.width / 2;
			y = bb.height;
			break;
		case 2:
			x = -bb.width;
			y = bb.height;
			break;
		case 3:
			x = 0;
			y = bb.height / 2;
			break;
		case 4:
			x = -bb.width / 2;
			y = bb.height / 2;
			break;
		case 5:
			x = -bb.width;
			y = bb.height / 2;
			break;
		case 6:
			x = 0;
			y = 0;
			break;
		case 7:
			x = -bb.width / 2;
			y = 0;
			break;
		case 8:
			x = -bb.width;
			y = 0;
			break;
		}
		if(this.outline) this.toutline.attr("x")["float"](x + 0.5).attr("y")["float"](y - 1.5);
		this.ttext.attr("x")["float"](x + 0.5).attr("y")["float"](y - 1.5);
		if(this.shadow) this.tshadow.attr("x")["float"](x + 0.5).attr("y")["float"](y - 1.5);
	}
	,destroy: function() {
		this.g.remove();
	}
	,__class__: rg.svg.widget.Label
	,__properties__: {set_anchor:"setAnchor",set_orientation:"setOrientation",set_text:"setText"}
}
rg.svg.widget.LabelOrientation = $hxClasses["rg.svg.widget.LabelOrientation"] = { __ename__ : ["rg","svg","widget","LabelOrientation"], __constructs__ : ["FixedAngle","Aligned","Orthogonal"] }
rg.svg.widget.LabelOrientation.FixedAngle = function(angle) { var $x = ["FixedAngle",0,angle]; $x.__enum__ = rg.svg.widget.LabelOrientation; $x.toString = $estr; return $x; }
rg.svg.widget.LabelOrientation.Aligned = ["Aligned",1];
rg.svg.widget.LabelOrientation.Aligned.toString = $estr;
rg.svg.widget.LabelOrientation.Aligned.__enum__ = rg.svg.widget.LabelOrientation;
rg.svg.widget.LabelOrientation.Orthogonal = ["Orthogonal",2];
rg.svg.widget.LabelOrientation.Orthogonal.toString = $estr;
rg.svg.widget.LabelOrientation.Orthogonal.__enum__ = rg.svg.widget.LabelOrientation;
rg.svg.widget.LabelOrientations = function() { }
$hxClasses["rg.svg.widget.LabelOrientations"] = rg.svg.widget.LabelOrientations;
rg.svg.widget.LabelOrientations.__name__ = ["rg","svg","widget","LabelOrientations"];
rg.svg.widget.LabelOrientations.parse = function(s) {
	return (function($this) {
		var $r;
		switch(s.toLowerCase()) {
		case "ortho":case "orthogonal":
			$r = rg.svg.widget.LabelOrientation.Orthogonal;
			break;
		default:
			$r = rg.svg.widget.LabelOrientation.Aligned;
		}
		return $r;
	}(this));
}
rg.svg.widget.LabelOrientations.prototype = {
	__class__: rg.svg.widget.LabelOrientations
}
rg.svg.widget.Map = function(container,projection) {
	var me = this;
	this.g = container.append("svg:g").attr("class").string("map");
	this.projection = projection;
	this.map = new Hash();
	this.ready = false;
	this.onReady = new hxevents.Notifier();
	this.onReady.addOnce(function() {
		me.ready = true;
	});
};
$hxClasses["rg.svg.widget.Map"] = rg.svg.widget.Map;
rg.svg.widget.Map.__name__ = ["rg","svg","widget","Map"];
rg.svg.widget.Map.loadJsonp = function(url,handler) {
	rg.util.Jsonp.get(url,handler,null,null,null);
}
rg.svg.widget.Map.loadJsonAjax = function(url,handler) {
	var http = new haxe.Http(url);
	http.onData = function(data) {
		var json = thx.json.Json.decode(data);
		handler(json);
	};
	http.onError = function(err) {
		throw new thx.error.Error("unable to load JSON file '{0}': {1}",[url,err],null,{ fileName : "Map.hx", lineNumber : 97, className : "rg.svg.widget.Map", methodName : "loadJsonAjax"});
	};
	http.request(false);
}
rg.svg.widget.Map.prototype = {
	className: null
	,map: null
	,onReady: null
	,click: null
	,labelDataPoint: null
	,labelDataPointOver: null
	,radius: null
	,colorMode: null
	,ready: null
	,mapping: null
	,projection: null
	,g: null
	,load: function(path,type,mappingurl,usejsonp) {
		switch(type) {
		case "geojson":
			this.loadGeoJson(path,mappingurl,usejsonp);
			break;
		default:
			new thx.error.Error("unsupported geographic format '{0}'",null,type,{ fileName : "Map.hx", lineNumber : 60, className : "rg.svg.widget.Map", methodName : "load"});
		}
	}
	,loadGeoJson: function(geourl,mappingurl,usejsonp) {
		var me = this;
		var load = usejsonp?rg.svg.widget.Map.loadJsonp:rg.svg.widget.Map.loadJsonAjax;
		if(null == mappingurl) load(geourl,this.draw.$bind(this)); else load(mappingurl,function(m) {
			me.mapping = m;
			load(geourl,me.draw.$bind(me));
		});
	}
	,draw: function(json) {
		var me = this;
		var id = null != this.mapping?function(s) {
			return Reflect.hasField(me.mapping,s)?Reflect.field(me.mapping,s):s;
		}:function(s) {
			return s;
		};
		var path = new thx.svg.PathGeoJson();
		path.setProjection(this.projection);
		switch(json.type) {
		case "FeatureCollection":
			var _g1 = 0, _g = json.features.length;
			while(_g1 < _g) {
				var i = _g1++;
				var feature = json.features[i], centroid = path.centroid(feature.geometry), p = feature.geometry.type == "Point"?this.g.append("svg:circle").attr("cx")["float"](centroid[0]).attr("cy")["float"](centroid[1]).attr("r")["float"](5):this.g.append("svg:path").attr("d").string(path.path(feature.geometry));
				var dp = { };
				dp["#centroid"] = centroid;
				dp["#data"] = feature.properties;
				if(null != feature.id) this.map.set(id(feature.id),{ svg : p, dp : dp});
				if(null != this.labelDataPointOver) p.onNode("mouseover",(function(f,a1) {
					return function(a2,a3) {
						return f(a1,a2,a3);
					};
				})(this.onMouseOver.$bind(this),dp));
				if(null != this.click) p.onNode("click",(function(f,a1) {
					return function(a2,a3) {
						return f(a1,a2,a3);
					};
				})(this.onClick.$bind(this),dp));
			}
			break;
		case "MultiPoint":case "MultiLineString":case "MultiPolygon":case "GeometryCollection":
			throw new thx.error.Error("the type '{0}' is not implemented yet",[json.type],null,{ fileName : "Map.hx", lineNumber : 168, className : "rg.svg.widget.Map", methodName : "draw"});
			break;
		default:
			this.g.append("svg:path").attr("d").string(path.path(json));
		}
		this.onReady.dispatch();
	}
	,onMouseOver: function(dp,n,_) {
		this.handlerDataPointOver(n,dp,this.labelDataPointOver);
	}
	,onClick: function(dp,_,_1) {
		this.handlerClick(dp,this.click);
	}
	,handlerDataPointOver: null
	,handlerClick: null
	,setClassName: function(cls) {
		this.g.attr("class").string("map" + (null == cls?"":" " + cls));
		return cls;
	}
	,__class__: rg.svg.widget.Map
	,__properties__: {set_className:"setClassName"}
}
rg.svg.widget.Sensible = function() { }
$hxClasses["rg.svg.widget.Sensible"] = rg.svg.widget.Sensible;
rg.svg.widget.Sensible.__name__ = ["rg","svg","widget","Sensible"];
rg.svg.widget.Sensible.sensibleZone = function(container,panel,click,datapointover,radius) {
	if(null == click && null == datapointover) return;
	var sensible = container.append("svg:rect").attr("class").string("sensible").attr("x")["float"](0).attr("y")["float"](0).attr("width")["float"](panel.frame.width).attr("height")["float"](panel.frame.height).attr("fill").string("#000").style("fill-opacity")["float"](0.0);
	if(null != datapointover) sensible.onNode("mousemove",function(_,_1) {
		var r = rg.svg.widget.Sensible.findDataNodeNearMouse(container,radius);
		if(r.length > 0) {
			datapointover(r[0]);
			if(null != click) sensible.classed().add("pointer");
		} else if(null != click) sensible.classed().remove("pointer");
	});
	if(null != click) {
		if(null == datapointover) sensible.onNode("mousemove",function(_,_1) {
			var r = rg.svg.widget.Sensible.findDataNodeNearMouse(container,radius);
			if(r.length > 0) sensible.classed().add("pointer"); else sensible.classed().remove("pointer");
		});
		sensible.onNode("click",function(_,_1) {
			var r = rg.svg.widget.Sensible.findDataNodeNearMouse(container,radius);
			if(r.length > 0) click(r[0]);
		});
	}
}
rg.svg.widget.Sensible.findDataNodeNearMouse = function(context,distance) {
	var e = dhx.Dom.event;
	return rg.svg.widget.Sensible.findDataNodesNear({ x : e.clientX, y : e.clientY},context,distance);
}
rg.svg.widget.Sensible.findDataNodesNear = function(coords,context,distance) {
	var nodes = context.selectAll(".rgdata"), result = [], distancep = distance * distance;
	nodes.eachNode(function(n,i) {
		var rect = n.getBoundingClientRect();
		var x = coords.x - (rect.left + rect.width / 2), y = coords.y - (rect.top + rect.height / 2);
		var dist = x * x + y * y;
		if(dist > distancep) return;
		result.push({ node : n, dist : dist});
	});
	result.sort(function(a,b) {
		return Floats.compare(a.dist,b.dist);
	});
	return result.map(function(item,_) {
		return item.node;
	});
}
rg.svg.widget.Sensible.prototype = {
	__class__: rg.svg.widget.Sensible
}
rg.util = {}
rg.util.Auth = function(authCode) {
	this.test = rg.util.Decrypt.decrypt(authCode);
};
$hxClasses["rg.util.Auth"] = rg.util.Auth;
rg.util.Auth.__name__ = ["rg","util","Auth"];
rg.util.Auth.prototype = {
	test: null
	,authorize: function(host) {
		return this.test == host;
	}
	,authorizeMany: function(hosts) {
		var auth = false;
		var _g = 0;
		while(_g < hosts.length) {
			var host = hosts[_g];
			++_g;
			if(this.authorize(host)) {
				auth = true;
				break;
			}
		}
		return auth;
	}
	,__class__: rg.util.Auth
}
rg.util.ChainedExecutor = function(handler) {
	this.handler = handler;
	this.actions = [];
	this.pos = 0;
	this.executor = this.execute.$bind(this);
};
$hxClasses["rg.util.ChainedExecutor"] = rg.util.ChainedExecutor;
rg.util.ChainedExecutor.__name__ = ["rg","util","ChainedExecutor"];
rg.util.ChainedExecutor.prototype = {
	handler: null
	,actions: null
	,pos: null
	,addAction: function(handler) {
		this.actions.push(handler);
	}
	,execute: function(ob) {
		if(this.pos == this.actions.length) {
			this.pos = 0;
			this.handler(ob);
		} else this.actions[this.pos++](ob,this.execute.$bind(this));
	}
	,executor: null
	,__class__: rg.util.ChainedExecutor
}
rg.util.DataPoints = function() { }
$hxClasses["rg.util.DataPoints"] = rg.util.DataPoints;
rg.util.DataPoints.__name__ = ["rg","util","DataPoints"];
rg.util.DataPoints.partition = function(dps,property,def) {
	if(def == null) def = "default";
	var map = new thx.collection.HashList();
	var getBucket = function(n) {
		var bucket = map.get(n);
		if(null == bucket) {
			bucket = [];
			map.set(n,bucket);
		}
		return bucket;
	};
	var v, name, bucket;
	var _g = 0;
	while(_g < dps.length) {
		var dp = dps[_g];
		++_g;
		v = Reflect.field(dp,property);
		if(null == v) name = def; else name = Dynamics.string(v);
		getBucket(name).push(dp);
	}
	return map.array();
}
rg.util.DataPoints.filterByIndependents = function(dps,variables) {
	var _g = 0;
	while(_g < variables.length) {
		var variable = [variables[_g]];
		++_g;
		var values = [variable[0].axis.range(variable[0].min(),variable[0].max())];
		dps = Arrays.filter(dps,(function(values,variable) {
			return function(dp) {
				var v = Reflect.field(dp,variable[0].type);
				if(null == v) return false;
				return Arrays.exists(values[0],v);
			};
		})(values,variable));
	}
	return dps;
}
rg.util.DataPoints.filterByDependents = function(dps,variables) {
	var _g = 0;
	while(_g < variables.length) {
		var variable = [variables[_g]];
		++_g;
		dps = Arrays.filter(dps,(function(variable) {
			return function(dp) {
				if(null == Reflect.field(dp,variable[0].type)) return false; else return true;
			};
		})(variable));
	}
	return dps;
}
rg.util.DataPoints.value = function(dp,property) {
	return Reflect.field(dp,property);
}
rg.util.DataPoints.valueAlt = function(dp,property,alt) {
	var v;
	return null == (v = Reflect.field(dp,property))?alt:v;
}
rg.util.DataPoints.values = function(dps,property) {
	return Arrays.filter(dps.map(function(dp,_) {
		return Reflect.field(dp,property);
	}),function(d) {
		return d != null;
	});
}
rg.util.DataPoints.id = function(dp,dependentProperties) {
	var cdp = Objects.clone(dp);
	var _g = 0;
	while(_g < dependentProperties.length) {
		var p = dependentProperties[_g];
		++_g;
		Reflect.deleteField(cdp,p);
	}
	return haxe.Md5.encode(Dynamics.string(cdp));
}
rg.util.DataPoints.prototype = {
	__class__: rg.util.DataPoints
}
rg.util.Decrypt = function() { }
$hxClasses["rg.util.Decrypt"] = rg.util.Decrypt;
rg.util.Decrypt.__name__ = ["rg","util","Decrypt"];
rg.util.Decrypt.decrypt = function(s) {
	var r = new chx.crypt.RSAEncrypt(rg.util.Decrypt.modulus,rg.util.Decrypt.publicExponent), d = chx.formats.Base64.decode(s);
	try {
		return r.verify(d).toString();
	} catch( e ) {
		return null;
	}
}
rg.util.Decrypt.prototype = {
	__class__: rg.util.Decrypt
}
rg.util.Js = function() { }
$hxClasses["rg.util.Js"] = rg.util.Js;
rg.util.Js.__name__ = ["rg","util","Js"];
rg.util.Js.findScript = function(fragment) {
	var scripts = js.Lib.document.getElementsByTagName("SCRIPT");
	if(typeof fragment == "string") {
		var _g1 = 0, _g = scripts.length;
		while(_g1 < _g) {
			var i = _g1++;
			var script = scripts[i], src = script.getAttribute("src");
			if(null != src && src.indexOf(fragment) >= 0) return script;
		}
	} else {
		var _g1 = 0, _g = scripts.length;
		while(_g1 < _g) {
			var i = _g1++;
			var script = scripts[i], src = script.getAttribute("src");
			if(null != src && src.match(fragment)) return script;
		}
	}
	return null;
}
rg.util.Js.prototype = {
	__class__: rg.util.Js
}
rg.util.Jsonp = function() { }
$hxClasses["rg.util.Jsonp"] = rg.util.Jsonp;
rg.util.Jsonp.__name__ = ["rg","util","Jsonp"];
rg.util.Jsonp.get = function(path,success,failure,query,headers) {
	var api = rg.util.Jsonp.get_api;
	api(path,{ success : success, failure : failure},query,headers);
}
rg.util.Jsonp.request_api = function(method,path,content,actions,query,headers) {
	if(null == query) query = { };
	path = rg.util.Urls.addQueryParameters(path,query);
	if(null == headers) headers = { };
	var success = actions.success, failure = null == actions.failure?function(_,_1) {
	}:actions.failure;
	var random = Math.random() * 214748363 | 0, funcName = "ReportGridChartsJsonpCallback" + random, head = js.Lib.document.head;
	if(null == head) head = js.Lib.document.getElementsByTagName("head")[0];
	js.Lib.window[funcName] = function(content1,meta) {
		if(meta.status.code == 200) success(content1); else failure(meta.status.code,meta.status.reason);
		head.removeChild(js.Lib.document.getElementById(funcName));
		js.Lib.window[funcName] = undefined;
		try{ delete window[funcName]; }catch(e){}
	};
	var extraQuery = { };
	extraQuery.method = method;
	if(Reflect.fields(headers).length > 0) extraQuery.headers = thx.json.Json.encode(headers);
	extraQuery["callback"] = funcName;
	if(content != null) extraQuery.content = thx.json.Json.encode(content);
	var fullUrl = rg.util.Urls.addQueryParameters(path,extraQuery);
	var script = js.Lib.document.createElement("SCRIPT");
	script.setAttribute("type","text/javascript");
	script.setAttribute("src",fullUrl);
	script.setAttribute("id",funcName);
	head.appendChild(script);
}
rg.util.Jsonp.get_api = function(path,actions,query,headers) {
	rg.util.Jsonp.request_api("GET",path,null,actions,query,headers);
}
rg.util.Jsonp.prototype = {
	__class__: rg.util.Jsonp
}
rg.util.Periodicity = function() { }
$hxClasses["rg.util.Periodicity"] = rg.util.Periodicity;
rg.util.Periodicity.__name__ = ["rg","util","Periodicity"];
rg.util.Periodicity.defaultRange = function(periodicity) {
	return (function($this) {
		var $r;
		switch(periodicity) {
		case "eternity":case "single":
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
rg.util.Periodicity.unitsBetween = function(start,end,periodicity) {
	return (function($this) {
		var $r;
		switch(periodicity) {
		case "eternity":case "single":
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
	case "eternity":case "single":
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
		var result = Ints.range(rg.util.Periodicity.dateUtc(start).getFullYear(),rg.util.Periodicity.dateUtc(end).getFullYear() + 1,1).map(function(d,i) {
			return new Date(d,0,1,0,0,0).getTime();
		});
		return result;
	}
	return Floats.range(start,end + step,step);
}
rg.util.Periodicity.format = function(periodicity,v) {
	switch(periodicity) {
	case "eternity":
		return "all time";
	case "single":
		return "period";
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
	case "eternity":case "single":
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
		case "eternity":case "single":
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
rg.util.Properties = function() { }
$hxClasses["rg.util.Properties"] = rg.util.Properties;
rg.util.Properties.__name__ = ["rg","util","Properties"];
rg.util.Properties.isTime = function(s) {
	return s.indexOf("time:") >= 0;
}
rg.util.Properties.periodicity = function(s) {
	return s.substr(s.indexOf("time:") + "time:".length);
}
rg.util.Properties.humanize = function(s) {
	return rg.util.RGStrings.humanize(s);
}
rg.util.Properties.formatValue = function(type,dp) {
	var value = Reflect.field(dp,type);
	if(null == value) return value;
	if(type.indexOf("time:") >= 0) {
		var periodicity = type.substr(type.indexOf("time:") + "time:".length);
		return rg.util.Periodicity.format(periodicity,Dates.snap(value,periodicity));
	}
	return rg.util.RGStrings.humanize(value);
}
rg.util.Properties.prototype = {
	__class__: rg.util.Properties
}
rg.util.RG = function() { }
$hxClasses["rg.util.RG"] = rg.util.RG;
rg.util.RG.__name__ = ["rg","util","RG"];
rg.util.RG.getTokenId = function() {
	if(ReportGrid.$) return Strings.rtrim(Strings.ltrim(ReportGrid.$.Config.tokenId,"\""),"\""); else return null;
}
rg.util.RG.prototype = {
	__class__: rg.util.RG
}
rg.util.RGColors = function() { }
$hxClasses["rg.util.RGColors"] = rg.util.RGColors;
rg.util.RGColors.__name__ = ["rg","util","RGColors"];
rg.util.RGColors.parse = function(s,alt) {
	try {
		var c = thx.color.Colors.parse(s);
		if(null != c) return c;
	} catch( _ ) {
	}
	return thx.color.Colors.parse(alt);
}
rg.util.RGColors.applyLightness = function(color,lightness,t) {
	if(null == t) t = 1 / Math.abs(lightness);
	return lightness >= 0?thx.color.Hsl.lighter(color,(1 - t) * (1 + lightness)):thx.color.Hsl.darker(color,(1 - t) * (1 - lightness));
}
rg.util.RGColors.extractColor = function(n) {
	return n.__rgcolor__;
}
rg.util.RGColors.storeColor = function(n,color) {
	n.__rgcolor__ = color;
}
rg.util.RGColors.storeColorForSelection = function(n,style,color) {
	if(style == null) style = "fill";
	n.eachNode(function(n1,_) {
		var c = null == color?dhx.Dom.selectNode(dhx.Group.current).style(style).get():color;
		rg.util.RGColors.storeColor(n1,c);
	});
}
rg.util.RGColors.prototype = {
	__class__: rg.util.RGColors
}
rg.util.RGStrings = function() { }
$hxClasses["rg.util.RGStrings"] = rg.util.RGStrings;
rg.util.RGStrings.__name__ = ["rg","util","RGStrings"];
rg.util.RGStrings.humanize = function(d) {
	if(Std["is"](d,Int)) return Ints.format(d);
	if(Std["is"](d,Float)) return Floats.format(d);
	var s = Std.string(d);
	if(rg.util.RGStrings.range.match(s)) {
		var v1 = rg.util.RGStrings.range.matched(1), v2 = rg.util.RGStrings.range.matched(2);
		if(null != v1) v1 = Ints.canParse(v1)?Ints.format(Ints.parse(v1)):Floats.format(Floats.parse(v1)); else v1 = "";
		if(null != v2) v2 = Ints.canParse(v2)?Ints.format(Ints.parse(v2)):Floats.format(Floats.parse(v2)); else v2 = "";
		return rg.util.RGStrings.hstring(rg.util.RGStrings.range.matchedLeft()) + v1 + "-" + v2 + rg.util.RGStrings.hstring(rg.util.RGStrings.range.matchedRight());
	} else return rg.util.RGStrings.hstring(s);
}
rg.util.RGStrings.hstring = function(s) {
	return Strings.ucwords(Strings.humanize(s));
}
rg.util.RGStrings.prototype = {
	__class__: rg.util.RGStrings
}
rg.util.Urls = function() { }
$hxClasses["rg.util.Urls"] = rg.util.Urls;
rg.util.Urls.__name__ = ["rg","util","Urls"];
rg.util.Urls.addQueryParameters = function(url,query) {
	var suffix = url.indexOf("?") < 0?"?":"&", queries = [];
	var _g = 0, _g1 = Reflect.fields(query);
	while(_g < _g1.length) {
		var key = _g1[_g];
		++_g;
		var value = Std.string(Reflect.field(query,key));
		queries.push(key + "=" + StringTools.urlEncode(value));
	}
	if(queries.length == 0) return url; else return url + suffix + queries.join("&");
}
rg.util.Urls.parseQueryParameters = function(url) {
	var index = url.indexOf("?");
	if(index < 0) return { };
	var query = url.substr(index + 1), keyValuePairs = query.split("&"), parameters = { };
	var _g = 0;
	while(_g < keyValuePairs.length) {
		var pair = keyValuePairs[_g];
		++_g;
		var split = pair.split("="), key = split[0], value = null == split[1]?null:StringTools.urlDecode(split[1]);
		parameters[key] = value;
	}
	return parameters;
}
rg.util.Urls.prototype = {
	__class__: rg.util.Urls
}
rg.visualization = {}
rg.visualization.Visualization = function(container) {
	this.container = container;
};
$hxClasses["rg.visualization.Visualization"] = rg.visualization.Visualization;
rg.visualization.Visualization.__name__ = ["rg","visualization","Visualization"];
rg.visualization.Visualization.prototype = {
	independentVariables: null
	,dependentVariables: null
	,variables: null
	,container: null
	,ready: null
	,hasRendered: null
	,setVariables: function(variables,independentVariables,dependentVariables) {
		var me = this;
		this.variables = variables;
		this.independentVariables = independentVariables;
		this.dependentVariables = dependentVariables;
		this.hasRendered = false;
		this.ready = new hxevents.Notifier();
		this.ready.addOnce(function() {
			me.hasRendered = true;
		});
	}
	,init: function() {
		throw new thx.error.AbstractMethod({ fileName : "Visualization.hx", lineNumber : 43, className : "rg.visualization.Visualization", methodName : "init"});
	}
	,feedData: function(data) {
		null;
	}
	,destroy: function() {
	}
	,addReadyOnce: function(handler) {
		this.ready.addOnce(handler);
		if(this.hasRendered) handler();
	}
	,addReady: function(handler) {
		this.ready.add(handler);
		if(this.hasRendered) handler();
	}
	,__class__: rg.visualization.Visualization
}
rg.visualization.VisualizationSvg = function(layout) {
	rg.visualization.Visualization.call(this,layout.container);
	this.layout = layout;
};
$hxClasses["rg.visualization.VisualizationSvg"] = rg.visualization.VisualizationSvg;
rg.visualization.VisualizationSvg.__name__ = ["rg","visualization","VisualizationSvg"];
rg.visualization.VisualizationSvg.__super__ = rg.visualization.Visualization;
rg.visualization.VisualizationSvg.prototype = $extend(rg.visualization.Visualization.prototype,{
	baseChart: null
	,layout: null
	,__class__: rg.visualization.VisualizationSvg
});
rg.visualization.VisualizationCartesian = function(layout) {
	rg.visualization.VisualizationSvg.call(this,layout);
};
$hxClasses["rg.visualization.VisualizationCartesian"] = rg.visualization.VisualizationCartesian;
rg.visualization.VisualizationCartesian.__name__ = ["rg","visualization","VisualizationCartesian"];
rg.visualization.VisualizationCartesian.__super__ = rg.visualization.VisualizationSvg;
rg.visualization.VisualizationCartesian.prototype = $extend(rg.visualization.VisualizationSvg.prototype,{
	info: null
	,chart: null
	,xlabel: null
	,xrule: null
	,ylabels: null
	,yrules: null
	,title: null
	,xvariable: null
	,yvariables: null
	,init: function() {
		this.initAxes();
		this.initYAxes();
		this.initXAxis();
		this.initTitle();
		this.initPadding();
		this.initChart();
		this.initCartesianChart();
	}
	,initAxes: function() {
		throw new thx.error.AbstractMethod({ fileName : "VisualizationCartesian.hx", lineNumber : 46, className : "rg.visualization.VisualizationCartesian", methodName : "initAxes"});
	}
	,initPadding: function() {
		this.layout.adjustPadding();
	}
	,initYAxes: function() {
		this.ylabels = [];
		this.yrules = [];
		var _g1 = 0, _g = this.yvariables.length;
		while(_g1 < _g) {
			var i = _g1++;
			var tickmarks = this.createTickmarks(i + 1,this.yvariables[i].type,"y" + i), rules = this.createRules(i + 1,this.yvariables[i].type,rg.frame.Orientation.Horizontal);
			if(null != tickmarks) this.ylabels.push({ id : i, tickmarks : tickmarks});
			if(null != rules) this.yrules.push({ id : i, rules : rules});
		}
	}
	,initXAxis: function() {
		this.xlabel = this.createTickmarks(0,this.xvariable.type,"x");
		this.xrule = this.createRules(0,this.xvariable.type,rg.frame.Orientation.Vertical);
	}
	,initChart: function() {
		throw new thx.error.AbstractMethod({ fileName : "VisualizationCartesian.hx", lineNumber : 88, className : "rg.visualization.VisualizationCartesian", methodName : "initChart"});
	}
	,initCartesianChart: function() {
		this.chart.animated = this.info.animation.animated;
		this.chart.animationDuration = this.info.animation.duration;
		this.chart.animationEase = this.info.animation.ease;
		this.chart.click = this.info.click;
		this.chart.labelDataPoint = this.info.label.datapoint;
		this.chart.labelDataPointOver = this.info.label.datapointover;
		this.chart.init();
	}
	,initTitle: function() {
		if(null == this.info.label.title) return;
		var panelContextTitle = this.layout.getContext("title");
		if(null == panelContextTitle) return;
		this.title = new rg.svg.layer.Title(panelContextTitle.panel,null,panelContextTitle.anchor);
	}
	,feedData: function(data) {
		if(0 == data.length) return;
		if(null != this.title && null != this.info.label.title) {
			this.title.setText(this.info.label.title(this.variables,data));
			this.layout.suggestSize("title",this.title.idealHeight());
		}
		var transformed = this.transformData(data);
		this.chart.setVariables(this.variables,this.independentVariables,this.dependentVariables,transformed);
		var _g1 = 0, _g = this.ylabels.length;
		while(_g1 < _g) {
			var i = _g1++;
			var item = this.ylabels[i], variable = this.yvariables[item.id];
			item.tickmarks.update(variable.axis,variable.min(),variable.max());
			var size = Math.round(item.tickmarks.desiredSize);
			this.layout.suggestSize("y" + item.id,size);
		}
		var _g1 = 0, _g = this.yrules.length;
		while(_g1 < _g) {
			var i = _g1++;
			var item = this.yrules[i], variable = this.yvariables[item.id];
			item.rules.update(variable.axis,variable.min(),variable.max());
		}
		if(null != this.xlabel) {
			var variable = this.xvariable;
			this.xlabel.update(variable.axis,variable.min(),variable.max());
			var size = Math.round(this.xlabel.desiredSize);
			this.layout.suggestSize("x",size);
		}
		if(null != this.xrule) {
			var variable = this.xvariable;
			this.xrule.update(variable.axis,variable.min(),variable.max());
		}
		this.chart.data(transformed);
	}
	,transformData: function(dps) {
		return (function($this) {
			var $r;
			throw new thx.error.AbstractMethod({ fileName : "VisualizationCartesian.hx", lineNumber : 163, className : "rg.visualization.VisualizationCartesian", methodName : "transformData"});
			return $r;
		}(this));
	}
	,destroy: function() {
		this.chart.destroy();
	}
	,setTickmarksDefaults: function(tickmarks,i,type,pname) {
	}
	,createTickmarks: function(i,type,pname) {
		var me = this;
		var displayMinor = this.info.displayMinorTick(type), displayMajor = this.info.displayMajorTick(type), displayLabel = this.info.displayLabelTick(type), displayAnchorLine = this.info.displayAnchorLineTick(type), title = null != this.info.label.axis?this.info.label.axis(type):null, tickmarks = null, context;
		if(displayMinor || displayMajor || displayLabel || displayAnchorLine) {
			context = this.layout.getContext(pname);
			if(null == context) return null;
			tickmarks = new rg.svg.layer.TickmarksOrtho(context.panel,context.anchor);
			this.setTickmarksDefaults(tickmarks,i,type,pname);
			if(!displayLabel) tickmarks.displayLabel = false; else if(null != this.info.label.tickmark) tickmarks.tickLabel = function(d) {
				return me.info.label.tickmark(d,type);
			};
			tickmarks.displayMinor = displayMinor;
			tickmarks.displayMajor = displayMajor;
			tickmarks.lengthMinor = this.info.lengthTickMinor;
			tickmarks.lengthMajor = this.info.lengthTickMajor;
			tickmarks.paddingMinor = this.info.paddingTickMinor;
			tickmarks.paddingMajor = this.info.paddingTickMajor;
			tickmarks.paddingLabel = this.info.paddingLabel;
			var s;
			s = this.info.labelAnchor(type);
			if(null != s) tickmarks.labelAnchor = rg.svg.widget.GridAnchors.parse(s);
			s = this.info.labelOrientation(type);
			if(null != s) tickmarks.labelOrientation = rg.svg.widget.LabelOrientations.parse(s);
			var a;
			if(null != (a = this.info.labelAngle(type))) tickmarks.labelAngle = a;
			tickmarks.displayAnchorLine = displayAnchorLine;
		}
		if(null != title && null != (context = this.layout.getContext(pname + "title"))) {
			var t = new rg.svg.layer.Title(context.panel,title,context.anchor,null,"axis-title");
			var h = t.idealHeight();
			this.layout.suggestSize(pname + "title",h);
		}
		if(null != tickmarks) tickmarks.init();
		return tickmarks;
	}
	,createRules: function(i,type,orientation) {
		var displayMinor = this.info.displayMinorRule(type), displayMajor = this.info.displayMajorRule(type), displayAnchorLine = this.info.displayAnchorLineRule(type), title = null != this.info.label.axis?this.info.label.axis(type):null, rules = null, panel;
		if(displayMinor || displayMajor) {
			panel = this.layout.getPanel("main");
			if(null == panel) return null;
			rules = new rg.svg.layer.RulesOrtho(panel,orientation);
			rules.displayMinor = displayMinor;
			rules.displayMajor = displayMajor;
			rules.displayAnchorLine = displayAnchorLine;
			rules.init();
		}
		return rules;
	}
	,__class__: rg.visualization.VisualizationCartesian
});
rg.visualization.VisualizationBarChart = function(layout) {
	rg.visualization.VisualizationCartesian.call(this,layout);
};
$hxClasses["rg.visualization.VisualizationBarChart"] = rg.visualization.VisualizationBarChart;
rg.visualization.VisualizationBarChart.__name__ = ["rg","visualization","VisualizationBarChart"];
rg.visualization.VisualizationBarChart.__super__ = rg.visualization.VisualizationCartesian;
rg.visualization.VisualizationBarChart.prototype = $extend(rg.visualization.VisualizationCartesian.prototype,{
	infoBar: null
	,initAxes: function() {
		if(this.infoBar.horizontal) {
			this.xvariable = this.dependentVariables.map(function(d,_) {
				return d;
			})[0];
			this.yvariables = [this.independentVariables[0]];
		} else {
			this.yvariables = this.dependentVariables.map(function(d,_) {
				return d;
			});
			this.xvariable = this.independentVariables[0];
		}
	}
	,initChart: function() {
		var me = this;
		var chart = new rg.svg.chart.BarChart(this.layout.getPanel(this.layout.mainPanelName));
		this.baseChart = chart;
		chart.ready.add(function() {
			me.ready.dispatch();
		});
		chart.stacked = this.infoBar.stacked;
		var $e = (this.infoBar.effect);
		switch( $e[1] ) {
		case 0:
			chart.displayGradient = false;
			break;
		case 1:
			var lightness = $e[2];
			chart.displayGradient = true;
			chart.gradientLightness = lightness;
			break;
		}
		chart.padding = this.infoBar.barPadding;
		chart.paddingAxis = this.infoBar.barPaddingAxis;
		chart.paddingDataPoint = this.infoBar.barPaddingDataPoint;
		chart.horizontal = this.infoBar.horizontal;
		this.chart = chart;
	}
	,transformData: function(dps) {
		var results = [], variable = this.independentVariables[0], values = variable.axis.range(variable.min(),variable.max());
		if(variable.type.indexOf("time:") >= 0) {
			var periodicity = rg.util.Properties.periodicity(variable.type);
			var _g = 0;
			while(_g < values.length) {
				var value = [values[_g]];
				++_g;
				var axisresults = [];
				var _g2 = 0, _g1 = this.dependentVariables.length;
				while(_g2 < _g1) {
					var i = _g2++;
					var dps1 = rg.util.DataPoints.filterByDependents(dps,[this.dependentVariables[i]]);
					axisresults.push(Arrays.filter(dps1,(function(value) {
						return function(d) {
							return Dates.snap(Reflect.field(d,variable.type),periodicity) == value[0];
						};
					})(value)));
				}
				results.push(axisresults);
			}
		} else {
			var _g = 0;
			while(_g < values.length) {
				var value = [values[_g]];
				++_g;
				var axisresults = [];
				var _g2 = 0, _g1 = this.dependentVariables.length;
				while(_g2 < _g1) {
					var i = _g2++;
					var dps1 = rg.util.DataPoints.filterByDependents(dps,[this.dependentVariables[i]]);
					axisresults.push(Arrays.filter(dps1,(function(value) {
						return function(d) {
							return Reflect.field(d,variable.type) == value[0];
						};
					})(value)));
				}
				results.push(axisresults);
			}
		}
		if(null != this.infoBar.segment.on) {
			var segmenton = this.infoBar.segment.on, svalues = new thx.collection.Set();
			dps.forEach(function(dp,_) {
				svalues.add(Reflect.field(dp,segmenton));
			});
			var _g1 = 0, _g = values.length;
			while(_g1 < _g) {
				var i = _g1++;
				var _g3 = 0, _g2 = this.dependentVariables.length;
				while(_g3 < _g2) {
					var j = _g3++;
					var segment = results[i][j], replace = [], pos = 0;
					var $it0 = svalues.iterator();
					while( $it0.hasNext() ) {
						var svalue = $it0.next();
						if(svalue == Reflect.field(segment[pos],segmenton)) replace.push(segment[pos++]); else {
							var ob = { };
							ob[segmenton] = svalue;
							ob[variable.type] = values[i];
							ob[this.dependentVariables[j].type] = 0;
							replace.push(ob);
						}
					}
					results[i][j] = replace;
				}
			}
		}
		return results;
	}
	,__class__: rg.visualization.VisualizationBarChart
});
rg.visualization.VisualizationFunnelChart = function(layout) {
	rg.visualization.VisualizationSvg.call(this,layout);
};
$hxClasses["rg.visualization.VisualizationFunnelChart"] = rg.visualization.VisualizationFunnelChart;
rg.visualization.VisualizationFunnelChart.__name__ = ["rg","visualization","VisualizationFunnelChart"];
rg.visualization.VisualizationFunnelChart.__super__ = rg.visualization.VisualizationSvg;
rg.visualization.VisualizationFunnelChart.prototype = $extend(rg.visualization.VisualizationSvg.prototype,{
	info: null
	,title: null
	,chart: null
	,init: function() {
		var me = this;
		var panelChart = this.layout.getPanel(this.layout.mainPanelName);
		this.chart = new rg.svg.chart.FunnelChart(panelChart);
		this.baseChart = this.chart;
		this.chart.ready.add(function() {
			me.ready.dispatch();
		});
		if(null != this.info.label.datapoint) this.chart.labelDataPoint = this.info.label.datapoint;
		if(null != this.info.label.datapoint) this.chart.labelDataPointOver = this.info.label.datapointover;
		if(null != this.info.label.arrow) this.chart.labelArrow = this.info.label.arrow;
		if(null != this.info.click) this.chart.click = this.info.click;
		this.chart.padding = this.info.padding;
		this.chart.flatness = this.info.flatness;
		var $e = (this.info.effect);
		switch( $e[1] ) {
		case 1:
			var v = $e[2];
			this.chart.displayGradient = true;
			this.chart.gradientLightness = v;
			break;
		case 0:
			this.chart.displayGradient = false;
			break;
		}
		this.chart.arrowSize = this.info.arrowSize;
		if(null != this.info.label.title) {
			var panelContextTitle = this.layout.getContext("title");
			if(null == panelContextTitle) return;
			this.title = new rg.svg.layer.Title(panelContextTitle.panel,null,panelContextTitle.anchor);
		}
	}
	,feedData: function(data) {
		this.chart.setVariables(this.independentVariables,this.dependentVariables);
		var data1 = rg.util.DataPoints.filterByIndependents(rg.util.DataPoints.filterByDependents(data,this.dependentVariables),this.independentVariables);
		if(null != this.info.sortDataPoint) data1.sort(this.info.sortDataPoint);
		if(null != this.title) {
			if(null != this.info.label.title) {
				this.title.setText(this.info.label.title(this.variables,data1));
				this.layout.suggestSize("title",this.title.idealHeight());
			} else this.layout.suggestSize("title",0);
		}
		if(null != this.info.sortDataPoint) data1.sort(this.info.sortDataPoint);
		this.chart.init();
		this.chart.data(data1);
	}
	,destroy: function() {
		this.chart.destroy();
		if(null != this.title) this.title.destroy();
		rg.visualization.VisualizationSvg.prototype.destroy.call(this);
	}
	,__class__: rg.visualization.VisualizationFunnelChart
});
rg.visualization.VisualizationGeo = function(layout) {
	rg.visualization.VisualizationSvg.call(this,layout);
};
$hxClasses["rg.visualization.VisualizationGeo"] = rg.visualization.VisualizationGeo;
rg.visualization.VisualizationGeo.__name__ = ["rg","visualization","VisualizationGeo"];
rg.visualization.VisualizationGeo.__super__ = rg.visualization.VisualizationSvg;
rg.visualization.VisualizationGeo.prototype = $extend(rg.visualization.VisualizationSvg.prototype,{
	info: null
	,title: null
	,chart: null
	,init: function() {
		var me = this;
		if(null != this.info.label.title) {
			var panelContextTitle = this.layout.getContext("title");
			if(null == panelContextTitle) return;
			this.title = new rg.svg.layer.Title(panelContextTitle.panel,null,panelContextTitle.anchor);
		}
		var panelChart = this.layout.getPanel(this.layout.mainPanelName);
		this.chart = new rg.svg.chart.Geo(panelChart);
		this.baseChart = this.chart;
		this.chart.ready.add(function() {
			me.ready.dispatch();
		});
		var pfactory = new rg.factory.FactoryGeoProjection();
		var _g = 0, _g1 = this.info.map;
		while(_g < _g1.length) {
			var imap = _g1[_g];
			++_g;
			var projection = pfactory.create(imap), map = new rg.svg.widget.Map(this.chart.mapcontainer,projection);
			map.setClassName(imap.classname);
			if(null == imap.label) map.labelDataPoint = this.info.label.datapoint; else map.labelDataPoint = imap.label.datapoint;
			if(null == imap.label) map.labelDataPointOver = this.info.label.datapointover; else map.labelDataPointOver = imap.label.datapointover;
			map.click = imap.click;
			map.radius = imap.radius;
			map.colorMode = imap.colorScaleMode;
			map.handlerClick = ($_=this.chart,$_.handlerClick.$bind($_));
			map.handlerDataPointOver = ($_=this.chart,$_.handlerDataPointOver.$bind($_));
			map.mapping = imap.mapping;
			var mappingurl = imap.mappingurl;
			if(null != mappingurl && (!StringTools.startsWith(mappingurl,"http://") || !StringTools.startsWith(mappingurl,"https://"))) mappingurl = rg.RGConst.BASE_URL_GEOJSON + mappingurl + ".json" + (imap.usejsonp?".js":"");
			map.load(imap.url,imap.type,mappingurl,imap.usejsonp);
			this.chart.addMap(map,imap.property);
		}
	}
	,feedData: function(data) {
		this.chart.setVariables(this.independentVariables,this.dependentVariables,data);
		if(null != this.title) {
			if(null != this.info.label.title) {
				this.title.setText(this.info.label.title(this.variables,data));
				this.layout.suggestSize("title",this.title.idealHeight());
			} else this.layout.suggestSize("title",0);
		}
		this.chart.init();
		this.chart.data(data);
	}
	,destroy: function() {
		this.chart.destroy();
		if(null != this.title) this.title.destroy();
		rg.visualization.VisualizationSvg.prototype.destroy.call(this);
	}
	,__class__: rg.visualization.VisualizationGeo
});
rg.visualization.VisualizationHeatGrid = function(layout) {
	rg.visualization.VisualizationCartesian.call(this,layout);
};
$hxClasses["rg.visualization.VisualizationHeatGrid"] = rg.visualization.VisualizationHeatGrid;
rg.visualization.VisualizationHeatGrid.__name__ = ["rg","visualization","VisualizationHeatGrid"];
rg.visualization.VisualizationHeatGrid.__super__ = rg.visualization.VisualizationCartesian;
rg.visualization.VisualizationHeatGrid.prototype = $extend(rg.visualization.VisualizationCartesian.prototype,{
	infoHeatGrid: null
	,initAxes: function() {
		this.xvariable = this.independentVariables[0];
		this.yvariables = [this.independentVariables[1]];
	}
	,initChart: function() {
		var me = this;
		var chart = new rg.svg.chart.HeatGrid(this.layout.getPanel(this.layout.mainPanelName));
		this.baseChart = chart;
		chart.ready.add(function() {
			me.ready.dispatch();
		});
		chart.useContour = this.infoHeatGrid.contour;
		chart.setColorMode(this.infoHeatGrid.colorScaleMode);
		this.chart = chart;
	}
	,transformData: function(dps) {
		return dps;
	}
	,setTickmarksDefaults: function(tickmarks,i,type,pname) {
		if(i != 0) return;
		tickmarks.labelAnchor = rg.svg.widget.GridAnchor.Left;
		tickmarks.labelAngle = 180;
	}
	,__class__: rg.visualization.VisualizationHeatGrid
});
rg.visualization.VisualizationHtml = function(container) {
	rg.visualization.Visualization.call(this,container);
	container.classed().add("rg");
};
$hxClasses["rg.visualization.VisualizationHtml"] = rg.visualization.VisualizationHtml;
rg.visualization.VisualizationHtml.__name__ = ["rg","visualization","VisualizationHtml"];
rg.visualization.VisualizationHtml.__super__ = rg.visualization.Visualization;
rg.visualization.VisualizationHtml.prototype = $extend(rg.visualization.Visualization.prototype,{
	__class__: rg.visualization.VisualizationHtml
});
rg.visualization.VisualizationLeaderboard = function(container) {
	rg.visualization.VisualizationHtml.call(this,container);
};
$hxClasses["rg.visualization.VisualizationLeaderboard"] = rg.visualization.VisualizationLeaderboard;
rg.visualization.VisualizationLeaderboard.__name__ = ["rg","visualization","VisualizationLeaderboard"];
rg.visualization.VisualizationLeaderboard.__super__ = rg.visualization.VisualizationHtml;
rg.visualization.VisualizationLeaderboard.prototype = $extend(rg.visualization.VisualizationHtml.prototype,{
	info: null
	,chart: null
	,init: function() {
		var me = this;
		this.chart = new rg.html.chart.Leadeboard(this.container);
		this.chart.ready.add(function() {
			me.ready.dispatch();
		});
		if(null != this.info.label.datapoint) this.chart.labelDataPoint = this.info.label.datapoint;
		if(null != this.info.label.datapointover) this.chart.labelDataPointOver = this.info.label.datapointover;
		if(null != this.info.label.rank) this.chart.labelRank = this.info.label.rank;
		if(null != this.info.label.value) this.chart.labelValue = this.info.label.value;
		this.chart.animated = this.info.animation.animated;
		this.chart.animationDuration = this.info.animation.duration;
		this.chart.animationDelay = this.info.animation.delay;
		this.chart.animationEase = this.info.animation.ease;
		this.chart.useMax = this.info.usemax;
		this.chart.displayBar = this.info.displaybar;
		this.chart.colorScale = this.info.colorscale;
		if(null != this.info.click) this.chart.click = this.info.click;
		if(null != this.info.sortDataPoint) this.chart.sortDataPoint = this.info.sortDataPoint;
		this.chart.init();
	}
	,feedData: function(data) {
		this.chart.setVariables(this.independentVariables,this.dependentVariables);
		this.chart.data(data);
	}
	,__class__: rg.visualization.VisualizationLeaderboard
});
rg.visualization.VisualizationLineChart = function(layout) {
	rg.visualization.VisualizationCartesian.call(this,layout);
};
$hxClasses["rg.visualization.VisualizationLineChart"] = rg.visualization.VisualizationLineChart;
rg.visualization.VisualizationLineChart.__name__ = ["rg","visualization","VisualizationLineChart"];
rg.visualization.VisualizationLineChart.__super__ = rg.visualization.VisualizationCartesian;
rg.visualization.VisualizationLineChart.prototype = $extend(rg.visualization.VisualizationCartesian.prototype,{
	infoLine: null
	,initAxes: function() {
		this.xvariable = this.variables[0];
		this.yvariables = this.variables.slice(1);
	}
	,initChart: function() {
		var me = this;
		var chart = new rg.svg.chart.LineChart(this.layout.getPanel(this.layout.mainPanelName));
		this.baseChart = chart;
		chart.ready.add(function() {
			me.ready.dispatch();
		});
		chart.symbol = this.infoLine.symbol;
		chart.symbolStyle = this.infoLine.symbolStyle;
		chart.lineInterpolator = this.infoLine.interpolation;
		chart.lineEffect = this.infoLine.effect;
		chart.sensibleRadius = this.infoLine.sensibleradius;
		if(null == this.independentVariables[0].scaleDistribution) this.independentVariables[0].scaleDistribution = rg.axis.ScaleDistribution.ScaleFill;
		if(null != this.infoLine.y0property) chart.y0property = this.infoLine.y0property; else if(this.infoLine.displayarea) chart.y0property = "";
		this.chart = chart;
	}
	,transformData: function(dps) {
		var results = [], segmenter = new rg.data.Segmenter(this.infoLine.segment.on,this.infoLine.segment.transform,this.infoLine.segment.scale);
		var _g1 = 0, _g = this.dependentVariables.length;
		while(_g1 < _g) {
			var i = _g1++;
			var variable = this.dependentVariables[i];
			var values = rg.util.DataPoints.filterByDependents(dps,[variable]);
			results.push(segmenter.segment(values));
		}
		return results;
	}
	,__class__: rg.visualization.VisualizationLineChart
});
rg.visualization.VisualizationPieChart = function(layout) {
	rg.visualization.VisualizationSvg.call(this,layout);
};
$hxClasses["rg.visualization.VisualizationPieChart"] = rg.visualization.VisualizationPieChart;
rg.visualization.VisualizationPieChart.__name__ = ["rg","visualization","VisualizationPieChart"];
rg.visualization.VisualizationPieChart.__super__ = rg.visualization.VisualizationSvg;
rg.visualization.VisualizationPieChart.prototype = $extend(rg.visualization.VisualizationSvg.prototype,{
	chart: null
	,title: null
	,info: null
	,init: function() {
		var me = this;
		var panelChart = this.layout.getPanel(this.layout.mainPanelName);
		this.chart = new rg.svg.chart.PieChart(panelChart);
		this.baseChart = this.chart;
		this.chart.ready.add(function() {
			me.ready.dispatch();
		});
		this.chart.innerRadius = this.info.innerradius;
		this.chart.outerRadius = this.info.outerradius;
		this.chart.overRadius = this.info.overradius;
		this.chart.tooltipRadius = this.info.tooltipradius;
		var $e = (this.info.effect);
		switch( $e[1] ) {
		case 1:
			var v = $e[2];
			this.chart.displayGradient = true;
			this.chart.gradientLightness = v;
			break;
		case 0:
			this.chart.displayGradient = false;
			break;
		}
		this.chart.labelDataPoint = this.info.label.datapoint;
		this.chart.labelDataPointOver = this.info.label.datapointover;
		this.chart.labelRadius = this.info.labelradius;
		this.chart.labelOrientation = this.info.labelorientation;
		this.chart.labelDontFlip = this.info.dontfliplabel;
		this.chart.animated = this.info.animation.animated;
		this.chart.animationDuration = this.info.animation.duration;
		this.chart.animationEase = this.info.animation.ease;
		this.chart.animationDelay = this.info.animation.delay;
		if(null != this.info.click) this.chart.mouseClick = this.info.click;
		if(null != this.info.label.title) {
			var panelContextTitle = this.layout.getContext("title");
			if(null == panelContextTitle) return;
			this.title = new rg.svg.layer.Title(panelContextTitle.panel,null,panelContextTitle.anchor);
		}
	}
	,feedData: function(data) {
		this.chart.setVariables(this.independentVariables,this.dependentVariables);
		if(null != this.title) {
			if(null != this.info.label.title) {
				this.title.setText(this.info.label.title(this.variables,data));
				this.layout.suggestSize("title",this.title.idealHeight());
			} else this.layout.suggestSize("title",0);
		}
		if(null != this.info.sortDataPoint) data.sort(this.info.sortDataPoint);
		this.chart.init();
		this.chart.data(data);
	}
	,destroy: function() {
		this.chart.destroy();
		if(null != this.title) this.title.destroy();
		rg.visualization.VisualizationSvg.prototype.destroy.call(this);
	}
	,__class__: rg.visualization.VisualizationPieChart
});
rg.visualization.VisualizationPivotTable = function(container) {
	rg.visualization.VisualizationHtml.call(this,container);
};
$hxClasses["rg.visualization.VisualizationPivotTable"] = rg.visualization.VisualizationPivotTable;
rg.visualization.VisualizationPivotTable.__name__ = ["rg","visualization","VisualizationPivotTable"];
rg.visualization.VisualizationPivotTable.__super__ = rg.visualization.VisualizationHtml;
rg.visualization.VisualizationPivotTable.prototype = $extend(rg.visualization.VisualizationHtml.prototype,{
	info: null
	,chart: null
	,init: function() {
		var me = this;
		this.chart = new rg.html.chart.PivotTable(this.container);
		this.chart.ready.add(function() {
			me.ready.dispatch();
		});
		this.chart.displayColumnTotal = this.info.displayColumnTotal;
		this.chart.displayHeatMap = this.info.displayHeatmap;
		this.chart.displayRowTotal = this.info.displayRowTotal;
		this.chart.colorStart = this.info.heatmapColorStart;
		this.chart.colorEnd = this.info.heatmapColorEnd;
		this.chart.cellclass = this.info.cellclass;
		this.chart.valueclass = this.info.valueclass;
		this.chart.headerclass = this.info.headerclass;
		this.chart.totalclass = this.info.totalclass;
		if(null != this.info.click) this.chart.click = this.info.click;
		if(null != this.info.label.datapoint) this.chart.labelDataPoint = this.info.label.datapoint;
		if(null != this.info.label.datapointover) this.chart.labelDataPointOver = this.info.label.datapointover;
		if(null != this.info.label.axis) this.chart.labelAxis = this.info.label.axis;
		if(null != this.info.label.axisvalue) this.chart.labelAxisValue = this.info.label.axisvalue;
		if(null != this.info.label.total) this.chart.labelTotal = this.info.label.total;
		if(null != this.info.label.totalover) this.chart.labelTotalOver = this.info.label.totalover;
		this.chart.incolumns = Ints.min(this.info.columnAxes,this.independentVariables.length);
		this.chart.init();
	}
	,feedData: function(data) {
		this.chart.setVariables(this.independentVariables,this.dependentVariables);
		this.chart.data(data);
	}
	,destroy: function() {
		this.chart.destroy();
	}
	,__class__: rg.visualization.VisualizationPivotTable
});
rg.visualization.VisualizationSankey = function(layout) {
	rg.visualization.VisualizationSvg.call(this,layout);
};
$hxClasses["rg.visualization.VisualizationSankey"] = rg.visualization.VisualizationSankey;
rg.visualization.VisualizationSankey.__name__ = ["rg","visualization","VisualizationSankey"];
rg.visualization.VisualizationSankey.defaultIdf = function(idf) {
	if(idf == null) return function(data) {
		return data.id;
	}; else return idf;
}
rg.visualization.VisualizationSankey.defaultNodef = function(nodef) {
	if(nodef == null) {
		var dummynodeid = 0;
		return function(edge) {
			return { id : "#" + ++dummynodeid, weight : edge.weight, entry : 0.0, exit : 0.0};
		};
	} else return nodef;
}
rg.visualization.VisualizationSankey.defaultEdgesf = function(idf,edgesf) {
	if(edgesf == null) return function(dp) {
		var r = [], id = idf(dp);
		var _g = 0, _g1 = Reflect.fields(dp.parents);
		while(_g < _g1.length) {
			var parent = _g1[_g];
			++_g;
			r.push({ head : id, tail : parent, weight : Reflect.field(dp.parents,parent)});
		}
		return r;
	}; else return edgesf;
}
rg.visualization.VisualizationSankey.__super__ = rg.visualization.VisualizationSvg;
rg.visualization.VisualizationSankey.prototype = $extend(rg.visualization.VisualizationSvg.prototype,{
	info: null
	,title: null
	,chart: null
	,init: function() {
		var me = this;
		if(null != this.info.label.title) {
			var panelContextTitle = this.layout.getContext("title");
			if(null == panelContextTitle) return;
			this.title = new rg.svg.layer.Title(panelContextTitle.panel,null,panelContextTitle.anchor);
		}
		var panelChart = this.layout.getPanel(this.layout.mainPanelName);
		this.chart = new rg.svg.chart.Sankey(panelChart);
		this.baseChart = this.chart;
		this.chart.ready.add(function() {
			me.ready.dispatch();
		});
	}
	,feedData: function(data) {
		this.chart.setVariables(this.independentVariables,this.dependentVariables,data);
		if(null != this.title) {
			if(null != this.info.label.title) {
				this.title.setText(this.info.label.title(this.variables,data));
				this.layout.suggestSize("title",this.title.idealHeight());
			} else this.layout.suggestSize("title",0);
		}
		var layout = null != this.info.layoutmap?this.layoutDataWithMap(data,this.info.layoutmap):this.layoutData(data,this.info.layoutmethod);
		if(null != this.info.layerWidth) this.chart.layerWidth = this.info.layerWidth;
		if(null != this.info.nodeSpacing) this.chart.nodeSpacing = this.info.nodeSpacing;
		if(null != this.info.dummySpacing) this.chart.dummySpacing = this.info.dummySpacing;
		if(null != this.info.extraWidth) this.chart.extraWidth = this.info.extraWidth;
		if(null != this.info.backEdgeSpacing) this.chart.backEdgeSpacing = this.info.backEdgeSpacing;
		if(null != this.info.extraHeight) this.chart.extraHeight = this.info.extraHeight;
		if(null != this.info.extraRadius) this.chart.extraRadius = this.info.extraRadius;
		if(null != this.info.imageWidth) this.chart.imageWidth = this.info.imageWidth;
		if(null != this.info.imageHeight) this.chart.imageHeight = this.info.imageHeight;
		if(null != this.info.imageSpacing) this.chart.imageSpacing = this.info.imageSpacing;
		if(null != this.info.labelNodeSpacing) this.chart.labelNodeSpacing = this.info.labelNodeSpacing;
		this.chart.stackbackedges = this.info.stackbackedges;
		this.chart.thinbackedges = this.info.thinbackedges;
		this.chart.labelDataPoint = this.info.label.datapoint;
		this.chart.labelDataPointOver = this.info.label.datapointover;
		this.chart.labelNode = this.info.label.node;
		this.chart.labelEdge = this.info.label.edge;
		this.chart.labelEdgeOver = this.info.label.edgeover;
		this.chart.imagePath = this.info.imagePath;
		this.chart.click = this.info.click;
		this.chart.clickEdge = this.info.clickEdge;
		this.chart.nodeClass = this.info.nodeclass;
		this.chart.edgeClass = this.info.edgeclass;
		this.chart.displayEntry = this.info.displayentry;
		this.chart.displayExit = this.info.displayexit;
		this.chart.init();
		this.chart.data(layout);
	}
	,layoutDataWithMap: function(data,map,idf,weightf,edgesf) {
		var graph = this.createGraph(data,idf,weightf,edgesf);
		var layers = map.layers.map(function(layer,_) {
			return layer.map(function(id,_1) {
				var n = graph.nodes.getById(id);
				if(null == n) n = graph.nodes.create({ id : id, weight : 0.0, entry : 0.0, exit : 0.0, dp : { id : id}});
				return n.id;
			});
		});
		var _g = 0, _g1 = map.dummies;
		while(_g < _g1.length) {
			var path = _g1[_g];
			++_g;
			var tail = graph.nodes.getById(path[0]), head = graph.nodes.getById(path[path.length - 1]), npath = [tail], edge = tail.connectedBy(head), weight = null == edge?0.0:edge.weight;
			var _g3 = 1, _g2 = path.length - 1;
			while(_g3 < _g2) {
				var i = _g3++;
				var id = path[i], d = { id : id, weight : weight, entry : 0.0, exit : 0.0, dp : null};
				npath.push(graph.nodes.create(d));
			}
			npath.push(head);
			var _g3 = 0, _g2 = npath.length - 1;
			while(_g3 < _g2) {
				var i = _g3++;
				graph.edges.create(npath[i],npath[i + 1],weight);
			}
			if(null != edge) edge.graph.edges._remove(edge);
		}
		var layers1 = map.layers.map(function(layer,_) {
			return layer.map(function(id,_1) {
				var n = graph.nodes.getById(id);
				if(null == n) n = graph.nodes.create({ id : id, weight : 0.0, entry : 0.0, exit : 0.0, dp : { id : id}});
				return n.id;
			});
		});
		return new thx.graph.GraphLayout(graph,layers1);
	}
	,createGraph: function(data,idf,weightf,edgesf) {
		idf = rg.visualization.VisualizationSankey.defaultIdf(idf);
		edgesf = rg.visualization.VisualizationSankey.defaultEdgesf(idf,edgesf);
		weightf = this.defaultWeightf(weightf);
		var graph = new thx.graph.Graph(idf);
		var nodes = this.extractNodes(data), edges = this.extractEdges(data);
		var _g = 0;
		while(_g < nodes.length) {
			var dp = nodes[_g];
			++_g;
			graph.nodes.create({ dp : dp, id : idf(dp), weight : weightf(dp), entry : 0.0, exit : 0.0});
		}
		var _g = 0;
		while(_g < edges.length) {
			var edge = edges[_g];
			++_g;
			var head = graph.nodes.getById(edge.head), tail = graph.nodes.getById(edge.tail);
			if(head == null) {
				var dp = { id : edge.head}, weight = weightf(edge);
				dp[this.dependentVariables[0].type] = weight;
				head = graph.nodes.create({ dp : dp, id : edge.head, weight : weight, entry : 0.0, exit : 0.0});
			}
			if(tail == null) {
				var dp = { id : edge.tail}, weight = weightf(edge);
				dp[this.dependentVariables[0].type] = weight;
				tail = graph.nodes.create({ dp : dp, id : edge.tail, weight : weight, entry : 0.0, exit : 0.0});
			}
			graph.edges.create(tail,head,weightf(edge));
		}
		var $it0 = graph.nodes.collection.iterator();
		while( $it0.hasNext() ) {
			var node = $it0.next();
			var win = node.negativeWeight(), wout = node.positiveWeight();
			if(node.data.weight == 0) node.data.weight = win;
			node.data.entry = Math.max(0,node.data.weight - win);
			node.data.exit = Math.max(0,node.data.weight - wout);
		}
		return graph;
	}
	,extractNodes: function(data) {
		var nodes = Arrays.filter(data,function(dp) {
			return dp.id != null;
		});
		if(nodes.length == 0) {
			var type = this.dependentVariables[0].type, map = new Hash(), edges = Arrays.filter(data,function(dp) {
				return Reflect.hasField(dp,"head") || Reflect.hasField(dp,"tail");
			});
			var nodize = function(name,istail,weight) {
				if(null == name) return;
				var n = map.get(name);
				if(null == n) {
					n = { node : { id : name}, positive : 0.0, negative : 0.0};
					map.set(name,n);
				}
				if(istail) n.positive += weight; else n.negative += weight;
			};
			edges.forEach(function(dp,i) {
				var v = Reflect.field(dp,type);
				nodize(dp.tail,true,v);
				nodize(dp.head,false,v);
			});
			nodes = Iterators.array(map.iterator()).map(function(n,i) {
				var node = n.node;
				node[type] = Math.max(n.positive,n.negative);
				return node;
			});
		}
		return nodes;
	}
	,extractEdges: function(data) {
		return Arrays.filter(data,function(dp) {
			return dp.head != null && dp.tail != null;
		});
	}
	,layoutData: function(data,method,idf,nodef,weightf,edgesf) {
		var graph = this.createGraph(data,idf,weightf,edgesf);
		nodef = rg.visualization.VisualizationSankey.defaultNodef(nodef);
		switch(method) {
		case "weightbalance":
			return this.weightBalance(graph,nodef);
		default:
			return this.sugiyama(graph,nodef);
		}
	}
	,weightBalance: function(graph,nodef) {
		var layout = new thx.graph.GraphLayout(graph,new thx.graph.HeaviestNodeLayer().lay(graph));
		layout = new thx.graph.EdgeSplitter().split(layout,[],nodef);
		layout = thx.graph.GreedySwitchDecrosser.best().decross(layout);
		return layout;
	}
	,sugiyama: function(graph,nodef) {
		return new thx.graph.SugiyamaMethod().resolve(graph,nodef);
	}
	,defaultWeightf: function(weightf) {
		if(null == weightf) {
			var type = this.dependentVariables[0].type;
			return function(dp) {
				var v = Reflect.field(dp,type);
				return null != v?v:0.0;
			};
		} else return weightf;
	}
	,destroy: function() {
		this.chart.destroy();
		if(null != this.title) this.title.destroy();
		rg.visualization.VisualizationSvg.prototype.destroy.call(this);
	}
	,__class__: rg.visualization.VisualizationSankey
});
rg.visualization.VisualizationScatterGraph = function(layout) {
	rg.visualization.VisualizationCartesian.call(this,layout);
};
$hxClasses["rg.visualization.VisualizationScatterGraph"] = rg.visualization.VisualizationScatterGraph;
rg.visualization.VisualizationScatterGraph.__name__ = ["rg","visualization","VisualizationScatterGraph"];
rg.visualization.VisualizationScatterGraph.__super__ = rg.visualization.VisualizationCartesian;
rg.visualization.VisualizationScatterGraph.prototype = $extend(rg.visualization.VisualizationCartesian.prototype,{
	infoScatter: null
	,initAxes: function() {
		this.xvariable = this.independentVariables[0];
		this.yvariables = this.dependentVariables.map(function(d,_) {
			return d;
		});
	}
	,initChart: function() {
		var me = this;
		var chart = new rg.svg.chart.ScatterGraph(this.layout.getPanel(this.layout.mainPanelName));
		this.baseChart = chart;
		chart.ready.add(function() {
			me.ready.dispatch();
		});
		chart.symbol = this.infoScatter.symbol;
		chart.symbolStyle = this.infoScatter.symbolStyle;
		if(null == this.independentVariables[0].scaleDistribution) this.independentVariables[0].scaleDistribution = rg.axis.ScaleDistribution.ScaleFill;
		this.chart = chart;
	}
	,transformData: function(dps) {
		var results = [], segmenter = new rg.data.Segmenter(this.infoScatter.segment.on,this.infoScatter.segment.transform,this.infoScatter.segment.scale);
		var _g = 0, _g1 = this.dependentVariables;
		while(_g < _g1.length) {
			var variable = _g1[_g];
			++_g;
			results.push(rg.util.DataPoints.filterByDependents(dps,[variable]));
		}
		return results;
	}
	,__class__: rg.visualization.VisualizationScatterGraph
});
rg.visualization.VisualizationStreamGraph = function(layout) {
	rg.visualization.VisualizationCartesian.call(this,layout);
};
$hxClasses["rg.visualization.VisualizationStreamGraph"] = rg.visualization.VisualizationStreamGraph;
rg.visualization.VisualizationStreamGraph.__name__ = ["rg","visualization","VisualizationStreamGraph"];
rg.visualization.VisualizationStreamGraph.__super__ = rg.visualization.VisualizationCartesian;
rg.visualization.VisualizationStreamGraph.prototype = $extend(rg.visualization.VisualizationCartesian.prototype,{
	infoStream: null
	,initAxes: function() {
		this.xvariable = this.independentVariables[0];
		this.yvariables = this.dependentVariables.map(function(d,_) {
			return d;
		});
	}
	,initChart: function() {
		var me = this;
		var chart = new rg.svg.chart.StreamGraph(this.layout.getPanel(this.layout.mainPanelName));
		this.baseChart = chart;
		chart.ready.add(function() {
			me.ready.dispatch();
		});
		chart.interpolator = this.infoStream.interpolation;
		var $e = (this.infoStream.effect);
		switch( $e[1] ) {
		case 0:
			chart.gradientStyle = 0;
			break;
		case 2:
			var lightness = $e[2];
			chart.gradientStyle = 1;
			chart.gradientLightness = lightness;
			break;
		case 1:
			var lightness = $e[2];
			chart.gradientStyle = 2;
			chart.gradientLightness = lightness;
			break;
		}
		this.chart = chart;
	}
	,transformData: function(dps) {
		var segmenter = new rg.data.Segmenter(this.infoStream.segment.on,this.infoStream.segment.transform,this.infoStream.segment.scale);
		return segmenter.segment(dps);
	}
	,__class__: rg.visualization.VisualizationStreamGraph
});
rg.visualization.Visualizations = function() { }
$hxClasses["rg.visualization.Visualizations"] = rg.visualization.Visualizations;
rg.visualization.Visualizations.__name__ = ["rg","visualization","Visualizations"];
rg.visualization.Visualizations.layoutDefault = null;
rg.visualization.Visualizations.layoutType = null;
rg.visualization.Visualizations.layoutArgs = null;
rg.visualization.Visualizations.instantiateLayout = function(name,width,height,container) {
	return Type.createInstance(rg.visualization.Visualizations.layoutType.get(name),[width,height,container]);
}
rg.visualization.Visualizations.prototype = {
	__class__: rg.visualization.Visualizations
}
thx.collection = {}
thx.collection.HashList = function() {
	this.length = 0;
	this.__keys = [];
	this.__hash = new Hash();
};
$hxClasses["thx.collection.HashList"] = thx.collection.HashList;
thx.collection.HashList.__name__ = ["thx","collection","HashList"];
thx.collection.HashList.prototype = {
	length: null
	,set: function(key,value) {
		if(!this.__hash.exists(key)) {
			this.__keys.push(key);
			this.length++;
		}
		this.__hash.set(key,value);
	}
	,get: function(key) {
		return this.__hash.get(key);
	}
	,array: function() {
		var values = [];
		var _g = 0, _g1 = this.__keys;
		while(_g < _g1.length) {
			var k = _g1[_g];
			++_g;
			values.push(this.__hash.get(k));
		}
		return values;
	}
	,__keys: null
	,__hash: null
	,__class__: thx.collection.HashList
}
thx.collection.Set = function() {
	this._v = [];
	this.length = 0;
};
$hxClasses["thx.collection.Set"] = thx.collection.Set;
thx.collection.Set.__name__ = ["thx","collection","Set"];
thx.collection.Set.prototype = {
	length: null
	,_v: null
	,add: function(v) {
		this._v.remove(v);
		this._v.push(v);
		this.length = this._v.length;
	}
	,iterator: function() {
		return this._v.iterator();
	}
	,__class__: thx.collection.Set
}
thx.color.Cmyk = function(cyan,magenta,yellow,black) {
	thx.color.Rgb.call(this,Ints.interpolate(Floats.normalize(1 - cyan - black),0,255,null),Ints.interpolate(Floats.normalize(1 - magenta - black),0,255,null),Ints.interpolate(Floats.normalize(1 - yellow - black),0,255,null));
	this.cyan = Floats.normalize(cyan);
	this.magenta = Floats.normalize(magenta);
	this.yellow = Floats.normalize(yellow);
	this.black = Floats.normalize(black);
};
$hxClasses["thx.color.Cmyk"] = thx.color.Cmyk;
thx.color.Cmyk.__name__ = ["thx","color","Cmyk"];
thx.color.Cmyk.__super__ = thx.color.Rgb;
thx.color.Cmyk.prototype = $extend(thx.color.Rgb.prototype,{
	black: null
	,cyan: null
	,magenta: null
	,yellow: null
	,__class__: thx.color.Cmyk
});
thx.color.Colors = function() { }
$hxClasses["thx.color.Colors"] = thx.color.Colors;
thx.color.Colors.__name__ = ["thx","color","Colors"];
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
thx.color.Grey = function(value) {
	this.grey = Floats.normalize(value);
	var c = Ints.interpolate(this.grey,0,255,null);
	thx.color.Rgb.call(this,c,c,c);
};
$hxClasses["thx.color.Grey"] = thx.color.Grey;
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
thx.color.NamedColors = function() { }
$hxClasses["thx.color.NamedColors"] = thx.color.NamedColors;
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
thx.culture = {}
thx.culture.Info = function() { }
$hxClasses["thx.culture.Info"] = thx.culture.Info;
thx.culture.Info.__name__ = ["thx","culture","Info"];
thx.culture.Info.prototype = {
	name: null
	,'native': null
	,english: null
	,iso2: null
	,iso3: null
	,pluralRule: null
	,__class__: thx.culture.Info
}
thx.culture.Culture = function() { }
$hxClasses["thx.culture.Culture"] = thx.culture.Culture;
thx.culture.Culture.__name__ = ["thx","culture","Culture"];
thx.culture.Culture.__properties__ = {set_defaultCulture:"setDefaultCulture",get_defaultCulture:"getDefaultCulture",get_cultures:"getCultures"}
thx.culture.Culture.cultures = null;
thx.culture.Culture.getCultures = function() {
	if(null == thx.culture.Culture.cultures) thx.culture.Culture.cultures = new Hash();
	return thx.culture.Culture.cultures;
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
thx.culture.FormatDate = function() { }
$hxClasses["thx.culture.FormatDate"] = thx.culture.FormatDate;
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
			buf.add("" + (date.getTime() / 1000 | 0));
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
thx.culture.FormatNumber = function() { }
$hxClasses["thx.culture.FormatNumber"] = thx.culture.FormatNumber;
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
thx.culture.FormatParams = function() { }
$hxClasses["thx.culture.FormatParams"] = thx.culture.FormatParams;
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
thx.culture.Language = function() { }
$hxClasses["thx.culture.Language"] = thx.culture.Language;
thx.culture.Language.__name__ = ["thx","culture","Language"];
thx.culture.Language.__properties__ = {get_languages:"getLanguages"}
thx.culture.Language.languages = null;
thx.culture.Language.getLanguages = function() {
	if(null == thx.culture.Language.languages) thx.culture.Language.languages = new Hash();
	return thx.culture.Language.languages;
}
thx.culture.Language.add = function(language) {
	if(!thx.culture.Language.getLanguages().exists(language.iso2)) thx.culture.Language.getLanguages().set(language.iso2,language);
}
thx.culture.Language.__super__ = thx.culture.Info;
thx.culture.Language.prototype = $extend(thx.culture.Info.prototype,{
	__class__: thx.culture.Language
});
thx.culture.core = {}
thx.culture.core.DateTimeInfo = function(months,abbrMonths,days,abbrDays,shortDays,am,pm,separatorDate,separatorTime,firstWeekDay,patternYearMonth,patternMonthDay,patternDate,patternDateShort,patternDateRfc,patternDateTime,patternUniversal,patternSortable,patternTime,patternTimeShort) {
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
};
$hxClasses["thx.culture.core.DateTimeInfo"] = thx.culture.core.DateTimeInfo;
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
thx.culture.core.NumberInfo = function(decimals,decimalsSeparator,groups,groupsSeparator,patternNegative,patternPositive) {
	this.decimals = decimals;
	this.decimalsSeparator = decimalsSeparator;
	this.groups = groups;
	this.groupsSeparator = groupsSeparator;
	this.patternNegative = patternNegative;
	this.patternPositive = patternPositive;
};
$hxClasses["thx.culture.core.NumberInfo"] = thx.culture.core.NumberInfo;
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
thx.languages = {}
thx.languages.En = function() {
	this.name = "en";
	this.english = "English";
	this["native"] = "English";
	this.iso2 = "en";
	this.iso3 = "eng";
	this.pluralRule = 1;
	thx.culture.Language.add(this);
};
$hxClasses["thx.languages.En"] = thx.languages.En;
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
thx.cultures = {}
thx.cultures.EnUS = function() {
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
};
$hxClasses["thx.cultures.EnUS"] = thx.cultures.EnUS;
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
thx.data = {}
thx.data.IDataHandler = function() { }
$hxClasses["thx.data.IDataHandler"] = thx.data.IDataHandler;
thx.data.IDataHandler.__name__ = ["thx","data","IDataHandler"];
thx.data.IDataHandler.prototype = {
	start: null
	,end: null
	,objectStart: null
	,objectFieldStart: null
	,objectFieldEnd: null
	,objectEnd: null
	,arrayStart: null
	,arrayItemStart: null
	,arrayItemEnd: null
	,arrayEnd: null
	,valueDate: null
	,valueString: null
	,valueInt: null
	,valueFloat: null
	,valueNull: null
	,valueBool: null
	,comment: null
	,__class__: thx.data.IDataHandler
}
thx.data.ValueEncoder = function(handler) {
	this.handler = handler;
};
$hxClasses["thx.data.ValueEncoder"] = thx.data.ValueEncoder;
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
			this.handler.valueNull();
			break;
		case 1:
			this.handler.valueInt(o);
			break;
		case 2:
			this.handler.valueFloat(o);
			break;
		case 3:
			this.handler.valueBool(o);
			break;
		case 4:
			this.encodeObject(o);
			break;
		case 5:
			throw new thx.error.Error("unable to encode TFunction type",null,null,{ fileName : "ValueEncoder.hx", lineNumber : 39, className : "thx.data.ValueEncoder", methodName : "encodeValue"});
			break;
		case 6:
			var c = $e[2];
			if(Std["is"](o,String)) this.handler.valueString(o); else if(Std["is"](o,Array)) this.encodeArray(o); else if(Std["is"](o,Date)) this.handler.valueDate(o); else if(Std["is"](o,Hash)) this.encodeHash(o); else if(Std["is"](o,List)) this.encodeList(o); else throw new thx.error.Error("unable to encode class '{0}'",null,Type.getClassName(c),{ fileName : "ValueEncoder.hx", lineNumber : 53, className : "thx.data.ValueEncoder", methodName : "encodeValue"});
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
		this.handler.objectStart();
		var _g = 0, _g1 = Reflect.fields(o);
		while(_g < _g1.length) {
			var key = _g1[_g];
			++_g;
			this.handler.objectFieldStart(key);
			this.encodeValue(Reflect.field(o,key));
			this.handler.objectFieldEnd();
		}
		this.handler.objectEnd();
	}
	,encodeHash: function(o) {
		this.handler.objectStart();
		var $it0 = o.keys();
		while( $it0.hasNext() ) {
			var key = $it0.next();
			this.handler.objectFieldStart(key);
			this.encodeValue(o.get(key));
			this.handler.objectFieldEnd();
		}
		this.handler.objectEnd();
	}
	,encodeList: function(list) {
		this.handler.arrayStart();
		var $it0 = list.iterator();
		while( $it0.hasNext() ) {
			var item = $it0.next();
			this.handler.arrayItemStart();
			this.encodeValue(item);
			this.handler.arrayItemEnd();
		}
		this.handler.arrayEnd();
	}
	,encodeArray: function(a) {
		this.handler.arrayStart();
		var _g = 0;
		while(_g < a.length) {
			var item = a[_g];
			++_g;
			this.handler.arrayItemStart();
			this.encodeValue(item);
			this.handler.arrayItemEnd();
		}
		this.handler.arrayEnd();
	}
	,__class__: thx.data.ValueEncoder
}
thx.data.ValueHandler = function() {
};
$hxClasses["thx.data.ValueHandler"] = thx.data.ValueHandler;
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
	,objectStart: function() {
		this._stack.push({ });
	}
	,objectEnd: function() {
	}
	,objectFieldStart: function(name) {
		this._names.push(name);
	}
	,objectFieldEnd: function() {
		var value = this._stack.pop();
		var last = Arrays.last(this._stack);
		last[this._names.pop()] = value;
	}
	,arrayStart: function() {
		this._stack.push([]);
	}
	,arrayEnd: function() {
	}
	,arrayItemStart: function() {
	}
	,arrayItemEnd: function() {
		var value = this._stack.pop();
		var last = Arrays.last(this._stack);
		last.push(value);
	}
	,valueDate: function(d) {
		this._stack.push(d);
	}
	,valueString: function(s) {
		this._stack.push(s);
	}
	,valueInt: function(i) {
		this._stack.push(i);
	}
	,valueFloat: function(f) {
		this._stack.push(f);
	}
	,valueNull: function() {
		this._stack.push(null);
	}
	,valueBool: function(b) {
		this._stack.push(b);
	}
	,comment: function(s) {
	}
	,__class__: thx.data.ValueHandler
}
thx.date = {}
thx.date.DateParser = function() { }
$hxClasses["thx.date.DateParser"] = thx.date.DateParser;
thx.date.DateParser.__name__ = ["thx","date","DateParser"];
thx.date.DateParser.parse = function(s,d) {
	var time = thx.date.DateParser.parseTime(s), v;
	if(null == d) d = Date.now();
	if(null != time.matched) s = StringTools.replace(s,time.matched,"");
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
	if(!found) throw new thx.error.Error("no date information found in the string '{0}'",null,s,{ fileName : "DateParser.hx", lineNumber : 339, className : "thx.date.DateParser", methodName : "parse"});
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
	} else throw new thx.error.Error("failed to parse time for '{0}'",null,s,{ fileName : "DateParser.hx", lineNumber : 406, className : "thx.date.DateParser", methodName : "parseTime"});
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
thx.util = {}
thx.util.Message = function(message,params,param) {
	this.message = message;
	if(null == params) this.params = []; else this.params = params;
	if(null != param) this.params.push(param);
};
$hxClasses["thx.util.Message"] = thx.util.Message;
thx.util.Message.__name__ = ["thx","util","Message"];
thx.util.Message.prototype = {
	message: null
	,params: null
	,toString: function() {
		return Strings.format(this.message,this.params);
	}
	,__class__: thx.util.Message
}
thx.error = {}
thx.error.Error = function(message,params,param,pos) {
	thx.util.Message.call(this,message,params,param);
	this.pos = pos;
};
$hxClasses["thx.error.Error"] = thx.error.Error;
thx.error.Error.__name__ = ["thx","error","Error"];
thx.error.Error.__super__ = thx.util.Message;
thx.error.Error.prototype = $extend(thx.util.Message.prototype,{
	pos: null
	,toString: function() {
		try {
			return Strings.format(this.message,this.params);
		} catch( e ) {
			var ps = this.pos.className + "." + this.pos.methodName + "(" + this.pos.lineNumber + ")";
			return "";
		}
	}
	,__class__: thx.error.Error
});
thx.error.AbstractMethod = function(posInfo) {
	thx.error.Error.call(this,"method {0}.{1}() is abstract",[posInfo.className,posInfo.methodName],posInfo,{ fileName : "AbstractMethod.hx", lineNumber : 14, className : "thx.error.AbstractMethod", methodName : "new"});
};
$hxClasses["thx.error.AbstractMethod"] = thx.error.AbstractMethod;
thx.error.AbstractMethod.__name__ = ["thx","error","AbstractMethod"];
thx.error.AbstractMethod.__super__ = thx.error.Error;
thx.error.AbstractMethod.prototype = $extend(thx.error.Error.prototype,{
	__class__: thx.error.AbstractMethod
});
thx.error.NotImplemented = function(posInfo) {
	thx.error.Error.call(this,"method {0}.{1}() needs to be implemented",[posInfo.className,posInfo.methodName],posInfo,{ fileName : "NotImplemented.hx", lineNumber : 13, className : "thx.error.NotImplemented", methodName : "new"});
};
$hxClasses["thx.error.NotImplemented"] = thx.error.NotImplemented;
thx.error.NotImplemented.__name__ = ["thx","error","NotImplemented"];
thx.error.NotImplemented.__super__ = thx.error.Error;
thx.error.NotImplemented.prototype = $extend(thx.error.Error.prototype,{
	__class__: thx.error.NotImplemented
});
thx.error.NullArgument = function(argumentName,message,posInfo) {
	if(null == message) message = "invalid null or empty argument '{0}' for method {1}.{2}()";
	thx.error.Error.call(this,message,[argumentName,posInfo.className,posInfo.methodName],posInfo,{ fileName : "NullArgument.hx", lineNumber : 16, className : "thx.error.NullArgument", methodName : "new"});
};
$hxClasses["thx.error.NullArgument"] = thx.error.NullArgument;
thx.error.NullArgument.__name__ = ["thx","error","NullArgument"];
thx.error.NullArgument.__super__ = thx.error.Error;
thx.error.NullArgument.prototype = $extend(thx.error.Error.prototype,{
	__class__: thx.error.NullArgument
});
thx.geo = {}
thx.geo.IProjection = function() { }
$hxClasses["thx.geo.IProjection"] = thx.geo.IProjection;
thx.geo.IProjection.__name__ = ["thx","geo","IProjection"];
thx.geo.IProjection.prototype = {
	project: null
	,invert: null
	,__class__: thx.geo.IProjection
}
thx.geo.Albers = function() {
	this._origin = [-98.0,38];
	this._parallels = [29.5,45.5];
	this._scale = 1000;
	this._translate = [480.0,250];
	this.reload();
};
$hxClasses["thx.geo.Albers"] = thx.geo.Albers;
thx.geo.Albers.__name__ = ["thx","geo","Albers"];
thx.geo.Albers.__interfaces__ = [thx.geo.IProjection];
thx.geo.Albers.prototype = {
	origin: null
	,parallels: null
	,translate: null
	,scale: null
	,lng0: null
	,n: null
	,C: null
	,p0: null
	,_origin: null
	,_parallels: null
	,_translate: null
	,_scale: null
	,project: function(coords) {
		var t = this.n * (0.01745329251994329577 * coords[0] - this.lng0), p = Math.sqrt(this.C - 2 * this.n * Math.sin(0.01745329251994329577 * coords[1])) / this.n;
		return [this.getScale() * p * Math.sin(t) + this.getTranslate()[0],this.getScale() * (p * Math.cos(t) - this.p0) + this.getTranslate()[1]];
	}
	,invert: function(coords) {
		var x = (coords[0] - this.getTranslate()[0]) / this.getScale(), y = (coords[1] - this.getTranslate()[1]) / this.getScale(), p0y = this.p0 + y, t = Math.atan2(x,p0y), p = Math.sqrt(x * x + p0y * p0y);
		return [(this.lng0 + t / this.n) / 0.01745329251994329577,Math.asin((this.C - p * p * this.n * this.n) / (2 * this.n)) / 0.01745329251994329577];
	}
	,getOrigin: function() {
		return this._origin.copy();
	}
	,setOrigin: function(origin) {
		this._origin = [origin[0],origin[1]];
		this.reload();
		return origin;
	}
	,getParallels: function() {
		return this._parallels.copy();
	}
	,setParallels: function(parallels) {
		this._parallels = [parallels[0],parallels[1]];
		this.reload();
		return parallels;
	}
	,getTranslate: function() {
		return this._translate.copy();
	}
	,setTranslate: function(translate) {
		this._translate = [translate[0],translate[1]];
		return translate;
	}
	,reload: function() {
		var phi1 = 0.01745329251994329577 * this.getParallels()[0], phi2 = 0.01745329251994329577 * this.getParallels()[1], lat0 = 0.01745329251994329577 * this.getOrigin()[1], s = Math.sin(phi1), c = Math.cos(phi1);
		this.lng0 = 0.01745329251994329577 * this.getOrigin()[0];
		this.n = .5 * (s + Math.sin(phi2));
		this.C = c * c + 2 * this.n * s;
		this.p0 = Math.sqrt(this.C - 2 * this.n * Math.sin(lat0)) / this.n;
		return this;
	}
	,setScale: function(scale) {
		return this._scale = scale;
	}
	,getScale: function() {
		return this._scale;
	}
	,__class__: thx.geo.Albers
	,__properties__: {set_scale:"setScale",get_scale:"getScale",set_translate:"setTranslate",get_translate:"getTranslate",set_parallels:"setParallels",get_parallels:"getParallels",set_origin:"setOrigin",get_origin:"getOrigin"}
}
thx.geo.AlbersUsa = function() {
	this.lower48 = new thx.geo.Albers();
	this.alaska = new thx.geo.Albers();
	this.alaska.setOrigin([-160.0,60]);
	this.alaska.setParallels([55.0,65]);
	this.hawaii = new thx.geo.Albers();
	this.hawaii.setOrigin([-160.0,20]);
	this.hawaii.setParallels([8.0,18]);
	this.puertoRico = new thx.geo.Albers();
	this.puertoRico.setOrigin([-60.0,10]);
	this.puertoRico.setParallels([8.0,18]);
	this.setScale(this.lower48.getScale());
};
$hxClasses["thx.geo.AlbersUsa"] = thx.geo.AlbersUsa;
thx.geo.AlbersUsa.__name__ = ["thx","geo","AlbersUsa"];
thx.geo.AlbersUsa.__interfaces__ = [thx.geo.IProjection];
thx.geo.AlbersUsa.prototype = {
	translate: null
	,scale: null
	,lower48: null
	,alaska: null
	,hawaii: null
	,puertoRico: null
	,project: function(coords) {
		var lon = coords[0], lat = coords[1];
		return (lat > 50?this.alaska:lon < -140?this.hawaii:lat < 21?this.puertoRico:this.lower48).project(coords);
	}
	,invert: function(coords) {
		return (function($this) {
			var $r;
			throw new thx.error.NotImplemented({ fileName : "AlbersUsa.hx", lineNumber : 67, className : "thx.geo.AlbersUsa", methodName : "invert"});
			return $r;
		}(this));
	}
	,setScale: function(scale) {
		this.lower48.setScale(scale);
		this.alaska.setScale(scale * .6);
		this.hawaii.setScale(scale);
		this.puertoRico.setScale(scale * 1.5);
		this.setTranslate(this.lower48.getTranslate());
		return scale;
	}
	,getScale: function() {
		return this.lower48.getScale();
	}
	,setTranslate: function(translate) {
		var dz = this.lower48.getScale() / 1000, dx = translate[0], dy = translate[1];
		this.lower48.setTranslate(translate);
		this.alaska.setTranslate([dx - 400 * dz,dy + 170 * dz]);
		this.hawaii.setTranslate([dx - 190 * dz,dy + 200 * dz]);
		this.puertoRico.setTranslate([dx + 580 * dz,dy + 430 * dz]);
		return translate;
	}
	,getTranslate: function() {
		return this.lower48.getTranslate();
	}
	,__class__: thx.geo.AlbersUsa
	,__properties__: {set_scale:"setScale",get_scale:"getScale",set_translate:"setTranslate",get_translate:"getTranslate"}
}
thx.geo.Azimuthal = function() {
	this.setMode(thx.geo.ProjectionMode.Orthographic);
	this.setScale(200);
	this.setTranslate([480.0,250]);
	this.setOrigin([0.0,0]);
};
$hxClasses["thx.geo.Azimuthal"] = thx.geo.Azimuthal;
thx.geo.Azimuthal.__name__ = ["thx","geo","Azimuthal"];
thx.geo.Azimuthal.__interfaces__ = [thx.geo.IProjection];
thx.geo.Azimuthal.prototype = {
	mode: null
	,origin: null
	,scale: null
	,translate: null
	,x0: null
	,y0: null
	,cy0: null
	,sy0: null
	,project: function(coords) {
		var x1 = coords[0] * 0.01745329251994329577 - this.x0, y1 = coords[1] * 0.01745329251994329577, cx1 = Math.cos(x1), sx1 = Math.sin(x1), cy1 = Math.cos(y1), sy1 = Math.sin(y1), k = (function($this) {
			var $r;
			switch( ($this.getMode())[1] ) {
			case 0:
				$r = 1;
				break;
			case 1:
				$r = 1 / (1 + $this.sy0 * sy1 + $this.cy0 * cy1 * cx1);
				break;
			}
			return $r;
		}(this)), x = k * cy1 * sx1, y = k * (this.sy0 * cy1 * cx1 - this.cy0 * sy1);
		return [this.getScale() * x + this.getTranslate()[0],this.getScale() * y + this.getTranslate()[1]];
	}
	,invert: function(coords) {
		var x = (coords[0] - this.getTranslate()[0]) / this.getScale(), y = (coords[1] - this.getTranslate()[1]) / this.getScale(), p = Math.sqrt(x * x + y * y), c = (function($this) {
			var $r;
			switch( ($this.getMode())[1] ) {
			case 0:
				$r = Math.asin(p);
				break;
			case 1:
				$r = Math.atan(p);
				break;
			}
			return $r;
		}(this)), sc = Math.sin(c), cc = Math.cos(c);
		return [(this.x0 + Math.atan2(x * sc,p * this.cy0 * cc + y * this.sy0 * sc)) / 0.01745329251994329577,Math.asin(cc * this.sy0 - y * sc * this.cy0 / p) / 0.01745329251994329577];
	}
	,getOrigin: function() {
		return this.origin.copy();
	}
	,setOrigin: function(origin) {
		this.origin = [origin[0],origin[1]];
		this.x0 = origin[0] * 0.01745329251994329577;
		this.y0 = origin[1] * 0.01745329251994329577;
		this.cy0 = Math.cos(this.y0);
		this.sy0 = Math.sin(this.y0);
		return origin;
	}
	,getTranslate: function() {
		return this.translate.copy();
	}
	,setTranslate: function(translate) {
		this.translate = [translate[0],translate[1]];
		return translate;
	}
	,setScale: function(scale) {
		return this.scale = scale;
	}
	,getScale: function() {
		return this.scale;
	}
	,setMode: function(mode) {
		return this.mode = mode;
	}
	,getMode: function() {
		return this.mode;
	}
	,__class__: thx.geo.Azimuthal
	,__properties__: {set_translate:"setTranslate",get_translate:"getTranslate",set_scale:"setScale",get_scale:"getScale",set_origin:"setOrigin",get_origin:"getOrigin",set_mode:"setMode",get_mode:"getMode"}
}
thx.geo.ProjectionMode = $hxClasses["thx.geo.ProjectionMode"] = { __ename__ : ["thx","geo","ProjectionMode"], __constructs__ : ["Orthographic","Stereographic"] }
thx.geo.ProjectionMode.Orthographic = ["Orthographic",0];
thx.geo.ProjectionMode.Orthographic.toString = $estr;
thx.geo.ProjectionMode.Orthographic.__enum__ = thx.geo.ProjectionMode;
thx.geo.ProjectionMode.Stereographic = ["Stereographic",1];
thx.geo.ProjectionMode.Stereographic.toString = $estr;
thx.geo.ProjectionMode.Stereographic.__enum__ = thx.geo.ProjectionMode;
thx.geo.Mercator = function() {
	this.setScale(500);
	this.setTranslate([480.0,250]);
};
$hxClasses["thx.geo.Mercator"] = thx.geo.Mercator;
thx.geo.Mercator.__name__ = ["thx","geo","Mercator"];
thx.geo.Mercator.__interfaces__ = [thx.geo.IProjection];
thx.geo.Mercator.prototype = {
	scale: null
	,translate: null
	,project: function(coords) {
		var x = coords[0] / 360, y = -(Math.log(Math.tan(Math.PI / 4 + coords[1] * 0.01745329251994329577 / 2)) / 0.01745329251994329577) / 360;
		return [this.getScale() * x + this.getTranslate()[0],this.getScale() * Math.max(-.5,Math.min(.5,y)) + this.getTranslate()[1]];
	}
	,invert: function(coords) {
		var x = (coords[0] - this.getTranslate()[0]) / this.getScale(), y = (coords[1] - this.getTranslate()[1]) / this.getScale();
		return [360 * x,2 * Math.atan(Math.exp(-360 * y * 0.01745329251994329577)) / 0.01745329251994329577 - 90];
	}
	,setScale: function(scale) {
		return this.scale = scale;
	}
	,getScale: function() {
		return this.scale;
	}
	,getTranslate: function() {
		return this.translate.copy();
	}
	,setTranslate: function(translate) {
		this.translate = [translate[0],translate[1]];
		return translate;
	}
	,__class__: thx.geo.Mercator
	,__properties__: {set_translate:"setTranslate",get_translate:"getTranslate",set_scale:"setScale",get_scale:"getScale"}
}
thx.geom = {}
thx.geom.Polygon = function(coordinates) {
	this.coordinates = coordinates;
};
$hxClasses["thx.geom.Polygon"] = thx.geom.Polygon;
thx.geom.Polygon.__name__ = ["thx","geom","Polygon"];
thx.geom.Polygon.prototype = {
	coordinates: null
	,area: function() {
		var n = this.coordinates.length, a = this.coordinates[n - 1][0] * this.coordinates[0][1], b = this.coordinates[n - 1][1] * this.coordinates[0][0];
		var _g = 1;
		while(_g < n) {
			var i = _g++;
			a += this.coordinates[i - 1][0] * this.coordinates[i][1];
			b += this.coordinates[i - 1][1] * this.coordinates[i][0];
		}
		return (b - a) * .5;
	}
	,centroid: function(k) {
		var a, b, c, x = 0.0, y = 0.0;
		if(null == k) k = 1 / (6 * this.area());
		var _g1 = 0, _g = this.coordinates.length - 1;
		while(_g1 < _g) {
			var i = _g1++;
			a = this.coordinates[i];
			b = this.coordinates[i + 1];
			c = a[0] * b[1] - b[0] * a[1];
			x += (a[0] + b[0]) * c;
			y += (a[1] + b[1]) * c;
		}
		return [x * k,y * k];
	}
	,__class__: thx.geom.Polygon
}
thx.geom.layout = {}
thx.geom.layout.Pie = function() {
	this._startAngle = function(_,_1) {
		return 0.0;
	};
	this._endAngle = function(_,_1) {
		return 6.283185307179586477;
	};
	this._sort = null;
	this._value = function(d,_) {
		return Number(d);
	};
};
$hxClasses["thx.geom.layout.Pie"] = thx.geom.layout.Pie;
thx.geom.layout.Pie.__name__ = ["thx","geom","layout","Pie"];
thx.geom.layout.Pie.prototype = {
	_startAngle: null
	,_endAngle: null
	,_sort: null
	,_value: null
	,pie: function(data,i) {
		var a = this._startAngle(data,i), k = this._endAngle(data,i) - a;
		var index = Ints.range(data.length);
		if(this._sort != null) {
			var s = this._sort;
			index.sort(function(i1,j) {
				return s(data[i1],data[j]);
			});
		}
		var values = data.map(this._value);
		k /= values.reduce(function(p,d,_) {
			return p + d;
		},0.0);
		if(!Math.isFinite(k)) k = 0;
		var d;
		var arcs = index.map(function(_,i1) {
			d = values[i1];
			return { value : d, startAngle : a, endAngle : a += d * k};
		});
		return data.map(function(d1,i1) {
			return arcs[index[i1]];
		});
	}
	,__class__: thx.geom.layout.Pie
}
thx.geom.layout.Stack = function() {
	this._order = thx.geom.layout.StackOrder.DefaultOrder;
	this._offset = thx.geom.layout.StackOffset.ZeroOffset;
};
$hxClasses["thx.geom.layout.Stack"] = thx.geom.layout.Stack;
thx.geom.layout.Stack.__name__ = ["thx","geom","layout","Stack"];
thx.geom.layout.Stack.getStackOrder = function(order,data) {
	switch( (order)[1] ) {
	case 0:
		return Ints.range(data.length);
	case 1:
		var n = data.length, max = data.map(thx.geom.layout.Stack.stackMaxIndex), sums = data.map(thx.geom.layout.Stack.stackReduceSum), index = Ints.range(n), top = 0.0, bottom = 0.0, tops = [], bottoms = [];
		index.sort(function(a,b) {
			return max[a] - max[b];
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
		return bottoms.concat(tops);
	case 2:
		var index = Ints.range(data.length);
		index.reverse();
		return index;
	}
}
thx.geom.layout.Stack.getStackOffset = function(offset,index,data) {
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
}
thx.geom.layout.Stack.stackMaxIndex = function(data,_) {
	var j = 0, v = data[0].y, k, n = data.length;
	var _g = 1;
	while(_g < n) {
		var i = _g++;
		if((k = data[i].y) > v) {
			j = i;
			v = k;
		}
	}
	return j;
}
thx.geom.layout.Stack.stackReduceSum = function(data,_) {
	return data.reduce(thx.geom.layout.Stack.stackSum,0.0);
}
thx.geom.layout.Stack.stackSum = function(p,c,i) {
	return p + c.y;
}
thx.geom.layout.Stack.prototype = {
	_order: null
	,_offset: null
	,stack: function(data) {
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
		return result;
	}
	,order: function(x) {
		this._order = x;
		return this;
	}
	,offset: function(x) {
		this._offset = x;
		return this;
	}
	,__class__: thx.geom.layout.Stack
}
thx.geom.layout.StackOrder = $hxClasses["thx.geom.layout.StackOrder"] = { __ename__ : ["thx","geom","layout","StackOrder"], __constructs__ : ["DefaultOrder","InsideOut","ReverseOrder"] }
thx.geom.layout.StackOrder.DefaultOrder = ["DefaultOrder",0];
thx.geom.layout.StackOrder.DefaultOrder.toString = $estr;
thx.geom.layout.StackOrder.DefaultOrder.__enum__ = thx.geom.layout.StackOrder;
thx.geom.layout.StackOrder.InsideOut = ["InsideOut",1];
thx.geom.layout.StackOrder.InsideOut.toString = $estr;
thx.geom.layout.StackOrder.InsideOut.__enum__ = thx.geom.layout.StackOrder;
thx.geom.layout.StackOrder.ReverseOrder = ["ReverseOrder",2];
thx.geom.layout.StackOrder.ReverseOrder.toString = $estr;
thx.geom.layout.StackOrder.ReverseOrder.__enum__ = thx.geom.layout.StackOrder;
thx.geom.layout.StackOffset = $hxClasses["thx.geom.layout.StackOffset"] = { __ename__ : ["thx","geom","layout","StackOffset"], __constructs__ : ["Silhouette","Wiggle","ZeroOffset"] }
thx.geom.layout.StackOffset.Silhouette = ["Silhouette",0];
thx.geom.layout.StackOffset.Silhouette.toString = $estr;
thx.geom.layout.StackOffset.Silhouette.__enum__ = thx.geom.layout.StackOffset;
thx.geom.layout.StackOffset.Wiggle = ["Wiggle",1];
thx.geom.layout.StackOffset.Wiggle.toString = $estr;
thx.geom.layout.StackOffset.Wiggle.__enum__ = thx.geom.layout.StackOffset;
thx.geom.layout.StackOffset.ZeroOffset = ["ZeroOffset",2];
thx.geom.layout.StackOffset.ZeroOffset.toString = $estr;
thx.geom.layout.StackOffset.ZeroOffset.__enum__ = thx.geom.layout.StackOffset;
thx.graph = {}
thx.graph.EdgeSplitter = function() {
};
$hxClasses["thx.graph.EdgeSplitter"] = thx.graph.EdgeSplitter;
thx.graph.EdgeSplitter.__name__ = ["thx","graph","EdgeSplitter"];
thx.graph.EdgeSplitter.prototype = {
	split: function(layout,splitted,dataf,edgef) {
		var layers = layout.layers(), cell, ocell, cur;
		if(null == edgef) edgef = function(_,_1,_2) {
		};
		var $it0 = layout.graph.nodes.collection.iterator();
		while( $it0.hasNext() ) {
			var node = $it0.next();
			cell = layout.cell(node);
			var $it1 = node.graph.edges.positives(node);
			while( $it1.hasNext() ) {
				var edge = $it1.next();
				ocell = layout.cell(edge.head);
				if(cell.layer == ocell.layer) continue;
				if(cell.layer == ocell.layer - 1) continue;
				if(cell.layer == ocell.layer + 1) continue;
				var sign = [cell.layer < ocell.layer?1:-1], diff = Ints.abs(ocell.layer - cell.layer) - 1;
				splitted.push(edge.split(diff,dataf,(function(sign) {
					return function(ea,eb,i) {
						layers[cell.layer + (1 + i) * sign[0]].push(ea.head.id);
						edgef(ea,eb,i);
					};
				})(sign)));
			}
		}
		return new thx.graph.GraphLayout(layout.graph,layers);
	}
	,__class__: thx.graph.EdgeSplitter
}
thx.graph.GraphElement = function(graph,id,data) {
	this.id = id;
	this.data = data;
	this.graph = graph;
};
$hxClasses["thx.graph.GraphElement"] = thx.graph.GraphElement;
thx.graph.GraphElement.__name__ = ["thx","graph","GraphElement"];
thx.graph.GraphElement.friendDestroy = function(item) {
	return item;
}
thx.graph.GraphElement.prototype = {
	graph: null
	,id: null
	,data: null
	,destroy: function() {
		this.graph = null;
		this.id = -1;
	}
	,__class__: thx.graph.GraphElement
}
thx.graph.GEdge = function(graph,id,tail,head,weight,data) {
	thx.graph.GraphElement.call(this,graph,id,data);
	this.tail = tail;
	this.head = head;
	this.weight = weight;
};
$hxClasses["thx.graph.GEdge"] = thx.graph.GEdge;
thx.graph.GEdge.__name__ = ["thx","graph","GEdge"];
thx.graph.GEdge.create = function(graph,id,tail,head,weight,data) {
	return new thx.graph.GEdge(graph,id,tail,head,weight,data);
}
thx.graph.GEdge.__super__ = thx.graph.GraphElement;
thx.graph.GEdge.prototype = $extend(thx.graph.GraphElement.prototype,{
	tail: null
	,head: null
	,weight: null
	,destroy: function() {
		thx.graph.GraphElement.prototype.destroy.call(this);
		this.tail = null;
		this.head = null;
	}
	,split: function(times,dataf,edgef) {
		if(times == null) times = 1;
		if(times < 1) throw new thx.error.Error("the split times parameter must be an integer value greater than zero",null,null,{ fileName : "GEdge.hx", lineNumber : 34, className : "thx.graph.GEdge", methodName : "split"});
		if(null == edgef) edgef = function(_,_1,_2) {
		};
		if(null == dataf) dataf = function(_) {
			return null;
		};
		var last = this, result = [], node, e1, e2, g = last.graph;
		var _g = 0;
		while(_g < times) {
			var i = _g++;
			node = g.nodes.create(dataf(last));
			e1 = g.edges.create(last.tail,node,last.weight,last.data);
			e2 = g.edges.create(node,last.head,last.weight,last.data);
			g.edges.remove(last);
			edgef(e1,e2,i);
			last = e2;
			g = last.graph;
			result.push(e1);
		}
		result.push(last);
		return result;
	}
	,invert: function() {
		var inverted = this.graph.edges.create(this.head,this.tail,this.weight,this.data);
		this.graph.edges._remove(this);
		return inverted;
	}
	,remove: function() {
		this.graph.edges._remove(this);
	}
	,friendRemove: function() {
		return this.graph.edges;
	}
	,__class__: thx.graph.GEdge
});
thx.graph.GNode = function(graph,id,data) {
	thx.graph.GraphElement.call(this,graph,id,data);
};
$hxClasses["thx.graph.GNode"] = thx.graph.GNode;
thx.graph.GNode.__name__ = ["thx","graph","GNode"];
thx.graph.GNode.create = function(graph,id,data) {
	return new thx.graph.GNode(graph,id,data);
}
thx.graph.GNode.__super__ = thx.graph.GraphElement;
thx.graph.GNode.prototype = $extend(thx.graph.GraphElement.prototype,{
	destroy: function() {
		thx.graph.GraphElement.prototype.destroy.call(this);
	}
	,connectedBy: function(other) {
		if(other.graph != this.graph) throw new thx.error.Error("the node is not part of this graph",null,null,{ fileName : "GNode.hx", lineNumber : 41, className : "thx.graph.GNode", methodName : "connectedBy"});
		var edge = Iterators.firstf(this.graph.edges.positives(this),function(edge1) {
			return edge1.head.id == other.id;
		});
		if(null != edge) return edge;
		return Iterators.firstf(this.graph.edges.negatives(this),function(edge1) {
			return edge1.tail.id == other.id;
		});
	}
	,positiveWeight: function() {
		return this._weight(this.graph.edges.positives(this));
	}
	,negativeWeight: function() {
		return this._weight(this.graph.edges.negatives(this));
	}
	,_weight: function(it) {
		var weight = 0.0;
		while( it.hasNext() ) {
			var edge = it.next();
			weight += edge.weight;
		}
		return weight;
	}
	,isSource: function() {
		return this.graph.edges.positives(this).hasNext() && !this.graph.edges.negatives(this).hasNext();
	}
	,isSink: function() {
		return this.graph.edges.negatives(this).hasNext() && !this.graph.edges.positives(this).hasNext();
	}
	,isIsolated: function() {
		return !this.graph.edges.edges(this).hasNext();
	}
	,predecessorBy: function(successor) {
		return Iterators.firstf(this.graph.edges.positives(this),function(edge) {
			return edge.head.id == successor.id;
		});
	}
	,edges: function() {
		return this.graph.edges.edges(this);
	}
	,positives: function() {
		return this.graph.edges.positives(this);
	}
	,negatives: function() {
		return this.graph.edges.negatives(this);
	}
	,sortPositives: function(sortf) {
		this.graph.edges.sortPositives(this,sortf);
	}
	,sortNegatives: function(sortf) {
		this.graph.edges.sortNegatives(this,sortf);
	}
	,positiveCount: function() {
		return this.graph.edges.positiveCount(this);
	}
	,negativeCount: function() {
		return this.graph.edges.negativeCount(this);
	}
	,remove: function() {
		this.graph.nodes._remove(this);
	}
	,friendRemove: function() {
		return this.graph.nodes;
	}
	,friendEdges: function() {
		return this.graph.edges;
	}
	,__class__: thx.graph.GNode
});
thx.graph.Graph = function(nodeidf,edgeidf) {
	this.nodes = thx.graph.GraphNodes.newInstance(this,nodeidf);
	this.edges = thx.graph.GraphEdges.newInstance(this,edgeidf);
};
$hxClasses["thx.graph.Graph"] = thx.graph.Graph;
thx.graph.Graph.__name__ = ["thx","graph","Graph"];
thx.graph.Graph.friendNodes = function(friend) {
	return friend;
}
thx.graph.Graph.friendEdges = function(friend) {
	return friend;
}
thx.graph.Graph.prototype = {
	nodes: null
	,edges: null
	,empty: function() {
		return Iterators.count(this.nodes.iterator()) == 0;
	}
	,clone: function() {
		var g = new thx.graph.Graph();
		g.nodes = this.nodes.copyTo(g);
		g.edges = this.edges.copyTo(g);
		return g;
	}
	,findSinks: function() {
		return Iterators.filter(this.nodes.iterator(),function(n) {
			return n.isSink();
		});
	}
	,findSink: function() {
		return Iterators.firstf(this.nodes.iterator(),function(n) {
			return n.isSink();
		});
	}
	,findSource: function() {
		return Iterators.firstf(this.nodes.iterator(),function(n) {
			return n.isSource();
		});
	}
	,findIsolateds: function() {
		return Iterators.filter(this.nodes.iterator(),function(n) {
			return n.isIsolated();
		});
	}
	,__class__: thx.graph.Graph
}
thx.graph.GraphCollection = function(graph,idf) {
	var me = this;
	this.nextid = 0;
	this.graph = graph;
	this.idf = idf;
	this.collection = new IntHash();
	this._map = new Hash();
	if(null != idf) {
		var add = this.collectionCreate.$bind(this);
		this.collectionCreate = function(item) {
			me._map.set(idf(item.data),item);
			add(item);
		};
		var rem = this.collectionRemove.$bind(this);
		this.collectionRemove = function(item) {
			me._map.remove(idf(item.data));
			rem(item);
		};
	}
	this.onRemove = new hxevents.Dispatcher();
	this.onCreate = new hxevents.Dispatcher();
};
$hxClasses["thx.graph.GraphCollection"] = thx.graph.GraphCollection;
thx.graph.GraphCollection.__name__ = ["thx","graph","GraphCollection"];
thx.graph.GraphCollection.prototype = {
	onRemove: null
	,onCreate: null
	,graph: null
	,collection: null
	,nextid: null
	,idf: null
	,_map: null
	,length: null
	,getById: function(id) {
		return this._map.get(id);
	}
	,get: function(id) {
		return this.collection.get(id);
	}
	,get_length: function() {
		return IntHashes.count(this.collection);
	}
	,collectionCreate: function(item) {
		this.onCreate.dispatch(item);
		this.collection.set(item.id,item);
	}
	,collectionRemove: function(item) {
		this.collection.remove(item.id);
		this.onRemove.dispatch(item);
	}
	,iterator: function() {
		return this.collection.iterator();
	}
	,toString: function() {
		return Iterators.map(this.collection.iterator(),function(item,_) {
			return Std.string(item);
		}).join(", ");
	}
	,__class__: thx.graph.GraphCollection
	,__properties__: {get_length:"get_length"}
}
thx.graph.GraphEdges = function(graph,edgeidf) {
	thx.graph.GraphCollection.call(this,graph,edgeidf);
	this.edgesp = new IntHash();
	this.edgesn = new IntHash();
};
$hxClasses["thx.graph.GraphEdges"] = thx.graph.GraphEdges;
thx.graph.GraphEdges.__name__ = ["thx","graph","GraphEdges"];
thx.graph.GraphEdges.newInstance = function(graph,edgeidf) {
	return new thx.graph.GraphEdges(graph,edgeidf);
}
thx.graph.GraphEdges.__super__ = thx.graph.GraphCollection;
thx.graph.GraphEdges.prototype = $extend(thx.graph.GraphCollection.prototype,{
	edgesp: null
	,edgesn: null
	,copyTo: function(graph) {
		var edges = new thx.graph.GraphEdges(graph), nodes = graph.nodes, tail, head;
		var $it0 = this.collection.iterator();
		while( $it0.hasNext() ) {
			var edge = $it0.next();
			tail = nodes.get(edge.tail.id);
			head = nodes.get(edge.head.id);
			edges._create(edge.id,tail,head,edge.weight,edge.data);
		}
		edges.nextid = this.nextid;
		return edges;
	}
	,create: function(tail,head,weight,data) {
		if(weight == null) weight = 1.0;
		if(tail.graph != head.graph || tail.graph != this.graph) throw new thx.error.Error("can't create an edge between nodes on different graphs",null,null,{ fileName : "GraphEdges.hx", lineNumber : 39, className : "thx.graph.GraphEdges", methodName : "create"});
		return this._create(++this.nextid,tail,head,weight,data);
	}
	,_create: function(id,tail,head,weight,data) {
		var e = thx.graph.GEdge.create(this.graph,id,tail,head,weight,data);
		this.collectionCreate(e);
		this.connections(tail.id,this.edgesp).push(id);
		this.connections(head.id,this.edgesn).push(id);
		return e;
	}
	,remove: function(edge) {
		if(edge.graph != this.graph) throw new thx.error.Error("remove: the edge is not part of this graph",null,null,{ fileName : "GraphEdges.hx", lineNumber : 55, className : "thx.graph.GraphEdges", methodName : "remove"});
		this._remove(edge);
	}
	,_remove: function(edge) {
		this.collectionRemove(edge);
		this.removeConnection(edge.id,edge.tail.id,this.edgesp);
		this.removeConnection(edge.id,edge.head.id,this.edgesn);
		edge.destroy();
	}
	,unlink: function(node) {
		if(node.graph != this.graph) throw new thx.error.Error("unlink: the node is not part of this graph",null,null,{ fileName : "GraphEdges.hx", lineNumber : 70, className : "thx.graph.GraphEdges", methodName : "unlink"});
		this._unlink(node,this.edgesp);
		this._unlink(node,this.edgesn);
	}
	,positives: function(node) {
		return this._edges(node.id,this.edgesp).iterator();
	}
	,negatives: function(node) {
		return this._edges(node.id,this.edgesn).iterator();
	}
	,sortPositives: function(node,sortf) {
		this._sort(node,sortf,this.edgesp);
	}
	,sortNegatives: function(node,sortf) {
		this._sort(node,sortf,this.edgesn);
	}
	,_sort: function(node,sortf,collection) {
		var me = this;
		var arr = collection.get(node.id);
		if(null == arr) return;
		arr.sort(function(ida,idb) {
			var ea = me.graph.edges.get(ida), eb = me.graph.edges.get(idb);
			return sortf(ea,eb);
		});
	}
	,edges: function(node) {
		return this._edges(node.id,this.edgesp).concat(this._edges(node.id,this.edgesn)).iterator();
	}
	,positiveCount: function(node) {
		return this._edgeids(node.id,this.edgesp).length;
	}
	,negativeCount: function(node) {
		return this._edgeids(node.id,this.edgesn).length;
	}
	,edgeCount: function(node) {
		return this._edgeids(node.id,this.edgesp).length + this._edgeids(node.id,this.edgesn).length;
	}
	,_edgeids: function(id,collection) {
		var r = collection.get(id);
		if(null == r) r = [];
		return r;
	}
	,_edges: function(id,collection) {
		var me = this;
		return this._edgeids(id,collection).map(function(eid,_) {
			return me.get(eid);
		});
	}
	,_unlink: function(node,connections) {
		var ids = connections.get(node.id);
		if(null == ids) return;
		ids = ids.copy();
		var _g = 0;
		while(_g < ids.length) {
			var id = ids[_g];
			++_g;
			var edge = this.get(id);
			if(null == edge || null == edge.graph) continue;
			this._remove(edge);
		}
		connections.remove(node.id);
	}
	,connections: function(id,connections) {
		var c = connections.get(id);
		if(null == c) connections.set(id,c = []);
		return c;
	}
	,removeConnection: function(edgeid,nodeid,connections) {
		var c = connections.get(nodeid);
		if(null == c) return;
		c.remove(edgeid);
		if(c.length == 0) connections.remove(nodeid);
	}
	,toString: function() {
		return "GraphEdges (" + IntHashes.count(this.collection) + "): " + thx.graph.GraphCollection.prototype.toString.call(this);
	}
	,__class__: thx.graph.GraphEdges
});
thx.graph.GraphLayout = function(graph,layers) {
	this.graph = graph;
	this._layers = layers.map(function(arr,_) {
		return arr.copy();
	});
	this.friendCell = this._cell = new thx.graph.LayoutCell();
	this._updateMap();
	this.length = this._layers.length;
	graph.nodes.onRemove.add(this._nodeRemove.$bind(this));
};
$hxClasses["thx.graph.GraphLayout"] = thx.graph.GraphLayout;
thx.graph.GraphLayout.__name__ = ["thx","graph","GraphLayout"];
thx.graph.GraphLayout.arrayCrossings = function(graph,a,b) {
	var map = new IntHash(), c = 0;
	var _g1 = 0, _g = b.length;
	while(_g1 < _g) {
		var i = _g1++;
		map.set(b[i],i);
	}
	if(a.length <= 1 || b.length <= 1) return c;
	var _g1 = 0, _g = a.length;
	while(_g1 < _g) {
		var i = _g1++;
		var n1 = graph.nodes.get(a[i]);
		var $it0 = n1.graph.edges.positives(n1);
		while( $it0.hasNext() ) {
			var edge1 = $it0.next();
			var p1 = map.get(edge1.head.id);
			if(null == p1) continue;
			var _g3 = i + 1, _g2 = a.length;
			while(_g3 < _g2) {
				var j = _g3++;
				var n2 = graph.nodes.get(a[j]);
				var $it1 = n2.graph.edges.positives(n2);
				while( $it1.hasNext() ) {
					var edge2 = $it1.next();
					var p2 = map.get(edge2.head.id);
					if(p2 < p1) c++;
				}
			}
		}
	}
	return c;
}
thx.graph.GraphLayout.prototype = {
	graph: null
	,length: null
	,_layers: null
	,_cell: null
	,_map: null
	,friendCell: null
	,_updateMap: function() {
		var me = this;
		this._map = new IntHash();
		this.each(function(cell,node) {
			me._map.set(node.id,[cell.layer,cell.position]);
		});
	}
	,clone: function() {
		return new thx.graph.GraphLayout(this.graph.clone(),this.layers());
	}
	,each: function(f) {
		var layers = this._layers.length, positions;
		var _g = 0;
		while(_g < layers) {
			var layer = _g++;
			positions = this._layers[layer].length;
			var _g1 = 0;
			while(_g1 < positions) {
				var position = _g1++;
				this.friendCell.update(layer,position,layers,positions);
				f(this._cell,this.graph.nodes.get(this._layers[layer][position]));
			}
		}
	}
	,cell: function(node) {
		if(node.graph != this.graph) throw new thx.error.Error("node doesn't belong to this graph",null,null,{ fileName : "GraphLayout.hx", lineNumber : 59, className : "thx.graph.GraphLayout", methodName : "cell"});
		var pos = this._map.get(node.id);
		if(null == pos) return null;
		return new thx.graph.LayoutCell(pos[0],pos[1],this._layers.length,this._layers[pos[0]].length);
	}
	,nodeAt: function(layer,position) {
		var arr = this._layers[layer];
		if(null == arr) return null;
		var id = arr[position];
		if(null == id) return null;
		return this.graph.nodes.get(id);
	}
	,layer: function(i) {
		var me = this;
		return this._layers[i].map(function(id,_) {
			return me.graph.nodes.get(id);
		});
	}
	,layers: function() {
		var result = [];
		var _g = 0, _g1 = this._layers;
		while(_g < _g1.length) {
			var arr = _g1[_g];
			++_g;
			result.push(arr.copy());
		}
		return result;
	}
	,crossings: function() {
		var tot = 0;
		var _g1 = 0, _g = this._layers.length - 1;
		while(_g1 < _g) {
			var i = _g1++;
			tot += thx.graph.GraphLayout.arrayCrossings(this.graph,this._layers[i],this._layers[i + 1]);
		}
		return tot;
	}
	,_nodeRemove: function(node) {
		var c = this.cell(node);
		this._layers[c.layer].splice(c.position,1);
		if(this._layers[c.layer].length == 0) this._layers.splice(c.layer,1);
		this._updateMap();
	}
	,__class__: thx.graph.GraphLayout
}
thx.graph.LayoutCell = function(layer,position,layers,positions) {
	if(positions == null) positions = 0;
	if(layers == null) layers = 0;
	if(position == null) position = 0;
	if(layer == null) layer = 0;
	this.layer = layer;
	this.layers = layers;
	this.position = position;
	this.positions = positions;
};
$hxClasses["thx.graph.LayoutCell"] = thx.graph.LayoutCell;
thx.graph.LayoutCell.__name__ = ["thx","graph","LayoutCell"];
thx.graph.LayoutCell.prototype = {
	layer: null
	,position: null
	,layers: null
	,positions: null
	,update: function(layer,position,layers,positions) {
		this.layer = layer;
		this.layers = layers;
		this.position = position;
		this.positions = positions;
	}
	,__class__: thx.graph.LayoutCell
}
thx.graph.GraphNodes = function(graph,nodeidf) {
	thx.graph.GraphCollection.call(this,graph,nodeidf);
};
$hxClasses["thx.graph.GraphNodes"] = thx.graph.GraphNodes;
thx.graph.GraphNodes.__name__ = ["thx","graph","GraphNodes"];
thx.graph.GraphNodes.newInstance = function(graph,nodeidf) {
	return new thx.graph.GraphNodes(graph,nodeidf);
}
thx.graph.GraphNodes.__super__ = thx.graph.GraphCollection;
thx.graph.GraphNodes.prototype = $extend(thx.graph.GraphCollection.prototype,{
	copyTo: function(graph) {
		var nodes = new thx.graph.GraphNodes(graph);
		var $it0 = this.collection.iterator();
		while( $it0.hasNext() ) {
			var node = $it0.next();
			nodes._create(node.id,node.data);
		}
		nodes.nextid = this.nextid;
		return nodes;
	}
	,create: function(data) {
		return this._create(++this.nextid,data);
	}
	,_create: function(id,data) {
		var n = thx.graph.GNode.create(this.graph,id,data);
		this.collectionCreate(n);
		return n;
	}
	,_remove: function(node) {
		this.graph.edges.unlink(node);
		this.collectionRemove(node);
		node.destroy();
	}
	,toString: function() {
		return "GraphNodes (" + IntHashes.count(this.collection) + "): " + thx.graph.GraphCollection.prototype.toString.call(this);
	}
	,__class__: thx.graph.GraphNodes
});
thx.graph.Graphs = function() { }
$hxClasses["thx.graph.Graphs"] = thx.graph.Graphs;
thx.graph.Graphs.__name__ = ["thx","graph","Graphs"];
thx.graph.Graphs.findMaxPositiveOverNegative = function(graph) {
	var n = null, l = 0;
	var $it0 = graph.iterator();
	while( $it0.hasNext() ) {
		var node = $it0.next();
		var diff = node.edgesp.length - node.edgesn.length;
		if(null == n || l < diff) {
			n = node;
			l = diff;
		}
	}
	return n;
}
thx.graph.Graphs.prototype = {
	__class__: thx.graph.Graphs
}
thx.graph.GreedyCyclePartitioner = function() {
};
$hxClasses["thx.graph.GreedyCyclePartitioner"] = thx.graph.GreedyCyclePartitioner;
thx.graph.GreedyCyclePartitioner.__name__ = ["thx","graph","GreedyCyclePartitioner"];
thx.graph.GreedyCyclePartitioner.findMaxPositiveOverNegative = function(graph) {
	var n = null, l = 0;
	var $it0 = graph.nodes.collection.iterator();
	while( $it0.hasNext() ) {
		var node = $it0.next();
		var diff = node.graph.edges.positiveCount(node) - node.graph.edges.negativeCount(node);
		if(null == n || l < diff) {
			n = node;
			l = diff;
		}
	}
	return n;
}
thx.graph.GreedyCyclePartitioner.prototype = {
	partition: function(graph) {
		var left = [], right = [], clone = graph.clone(), n;
		while(!(Iterators.count(clone.nodes.iterator()) == 0)) {
			while(null != (n = clone.findSink())) {
				var $it0 = n.graph.edges.negatives(n);
				while( $it0.hasNext() ) {
					var edge = $it0.next();
					right.unshift(graph.edges.get(edge.id));
					edge.graph.edges._remove(edge);
				}
				n.graph.nodes._remove(n);
			}
			var _g = 0, _g1 = clone.findIsolateds();
			while(_g < _g1.length) {
				var isolated = _g1[_g];
				++_g;
				isolated.graph.nodes._remove(isolated);
			}
			while(null != (n = clone.findSource())) {
				var $it1 = n.graph.edges.positives(n);
				while( $it1.hasNext() ) {
					var edge = $it1.next();
					left.push(graph.edges.get(edge.id));
					edge.graph.edges._remove(edge);
				}
				n.graph.nodes._remove(n);
			}
			if(!(Iterators.count(clone.nodes.iterator()) == 0)) {
				n = thx.graph.GreedyCyclePartitioner.findMaxPositiveOverNegative(clone);
				var $it2 = n.graph.edges.negatives(n);
				while( $it2.hasNext() ) {
					var edge = $it2.next();
					right.unshift(graph.edges.get(edge.id));
					edge.graph.edges._remove(edge);
				}
				var $it3 = n.graph.edges.positives(n);
				while( $it3.hasNext() ) {
					var edge = $it3.next();
					left.push(graph.edges.get(edge.id));
					edge.graph.edges._remove(edge);
				}
				n.graph.nodes._remove(n);
			}
		}
		return { left : left, right : right};
	}
	,__class__: thx.graph.GreedyCyclePartitioner
}
thx.graph.GreedySwitchDecrosser = function() {
};
$hxClasses["thx.graph.GreedySwitchDecrosser"] = thx.graph.GreedySwitchDecrosser;
thx.graph.GreedySwitchDecrosser.__name__ = ["thx","graph","GreedySwitchDecrosser"];
thx.graph.GreedySwitchDecrosser.combined = function() {
	return { decross : function(layout) {
		layout = new thx.graph.GreedySwitchDecrosser().decross(layout);
		return new thx.graph.GreedySwitch2Decrosser().decross(layout);
	}};
}
thx.graph.GreedySwitchDecrosser.best = function() {
	return { decross : function(layout) {
		var attempts = [new thx.graph.GreedySwitchDecrosser().decross(layout),new thx.graph.GreedySwitch2Decrosser().decross(layout),thx.graph.GreedySwitchDecrosser.combined().decross(layout)];
		return Arrays.min(attempts,function(layout1) {
			return layout1.crossings();
		});
	}};
}
thx.graph.GreedySwitchDecrosser.prototype = {
	decross: function(layout) {
		var layers = layout.layers(), graph = layout.graph, newlayers, newlayout = layout;
		if(layers.length <= 1) return new thx.graph.GraphLayout(layout.graph,layers);
		var totbefore, crossings, len = layers.length - 1, a, b;
		do {
			newlayers = layers.map(function(arr,_) {
				return arr.copy();
			});
			newlayout = new thx.graph.GraphLayout(graph,layers);
			totbefore = newlayout.crossings();
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				a = newlayers[i];
				b = newlayers[i + 1];
				this.decrossPair(graph,a,b);
			}
			crossings = new thx.graph.GraphLayout(graph,newlayers).crossings();
			layers = newlayers;
		} while(totbefore > crossings);
		return newlayout;
	}
	,decrossPair: function(graph,a,b) {
		var tot = thx.graph.GraphLayout.arrayCrossings(graph,a,b), ntot = tot, t;
		do {
			tot = ntot;
			var _g1 = 0, _g = b.length - 1;
			while(_g1 < _g) {
				var i = _g1++;
				this.swap(b,i);
				if((t = thx.graph.GraphLayout.arrayCrossings(graph,a,b)) >= ntot) this.swap(b,i); else ntot = t;
			}
		} while(ntot < tot);
	}
	,swap: function(a,pos) {
		var v = a[pos];
		a[pos] = a[pos + 1];
		a[pos + 1] = v;
	}
	,__class__: thx.graph.GreedySwitchDecrosser
}
thx.graph.GreedySwitch2Decrosser = function() {
	thx.graph.GreedySwitchDecrosser.call(this);
};
$hxClasses["thx.graph.GreedySwitch2Decrosser"] = thx.graph.GreedySwitch2Decrosser;
thx.graph.GreedySwitch2Decrosser.__name__ = ["thx","graph","GreedySwitch2Decrosser"];
thx.graph.GreedySwitch2Decrosser.__super__ = thx.graph.GreedySwitchDecrosser;
thx.graph.GreedySwitch2Decrosser.prototype = $extend(thx.graph.GreedySwitchDecrosser.prototype,{
	decross: function(layout) {
		var layers = layout.layers(), graph = layout.graph, newlayers, newlayout = layout;
		if(layers.length <= 1) return new thx.graph.GraphLayout(layout.graph,layers);
		var totbefore, crossings, len = layers.length - 1, a, b, c;
		do {
			newlayers = layers.map(function(arr,_) {
				return arr.copy();
			});
			newlayout = new thx.graph.GraphLayout(graph,layers);
			totbefore = newlayout.crossings();
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				a = newlayers[i - 1];
				b = newlayers[i];
				c = newlayers[i + 1];
				this.decrossTriplet(graph,a,b,c);
			}
			crossings = new thx.graph.GraphLayout(graph,newlayers).crossings();
			layers = newlayers;
		} while(totbefore > crossings);
		return newlayout;
	}
	,decrossTriplet: function(graph,a,b,c) {
		if(null == a) this.decrossPair(graph,b,c); else if(null == c) this.decrossPair(graph,a,b); else {
			var tot = thx.graph.GraphLayout.arrayCrossings(graph,a,b) + thx.graph.GraphLayout.arrayCrossings(graph,b,c), ntot = tot, t;
			do {
				tot = ntot;
				var _g1 = 0, _g = b.length - 1;
				while(_g1 < _g) {
					var i = _g1++;
					this.swap(b,i);
					if((t = thx.graph.GraphLayout.arrayCrossings(graph,a,b) + thx.graph.GraphLayout.arrayCrossings(graph,b,c)) >= ntot) this.swap(b,i); else ntot = t;
				}
			} while(ntot < tot);
		}
	}
	,__class__: thx.graph.GreedySwitch2Decrosser
});
thx.graph.HeaviestNodeLayer = function() {
};
$hxClasses["thx.graph.HeaviestNodeLayer"] = thx.graph.HeaviestNodeLayer;
thx.graph.HeaviestNodeLayer.__name__ = ["thx","graph","HeaviestNodeLayer"];
thx.graph.HeaviestNodeLayer.prototype = {
	lay: function(graph) {
		var layers = [], nodes = Arrays.order(Iterators.array(Iterators.array(graph.nodes.iterator()).iterator()),function(a,b) {
			return Floats.compare(b.positiveWeight(),a.positiveWeight());
		});
		var getLayer = function(index) {
			var layer = layers[index];
			if(null == layer) layer = layers[index] = [];
			return layer;
		};
		var addAt = (function($this) {
			var $r;
			var addAt1 = null;
			addAt1 = function(node,lvl) {
				if(!nodes.remove(node)) return;
				var layer = getLayer(lvl);
				layer.push(node.id);
				var $it0 = node.graph.edges.positives(node);
				while( $it0.hasNext() ) {
					var edge = $it0.next();
					addAt1(edge.head,lvl + 1);
				}
			};
			$r = addAt1;
			return $r;
		}(this));
		while(nodes.length > 0) addAt(nodes[0],0);
		var _g = 0;
		while(_g < layers.length) {
			var layer = layers[_g];
			++_g;
			Arrays.order(Iterators.array(layer.iterator()),function(ida,idb) {
				return Floats.compare(graph.nodes.get(idb).positiveWeight(),graph.nodes.get(ida).positiveWeight());
			});
		}
		return layers;
	}
	,__class__: thx.graph.HeaviestNodeLayer
}
thx.graph.LongestPathLayer = function() {
};
$hxClasses["thx.graph.LongestPathLayer"] = thx.graph.LongestPathLayer;
thx.graph.LongestPathLayer.__name__ = ["thx","graph","LongestPathLayer"];
thx.graph.LongestPathLayer.distanceToASink = function(graph,node) {
	var traverse = (function($this) {
		var $r;
		var traverse1 = null;
		traverse1 = function(it,lvl) {
			var max = lvl;
			while( it.hasNext() ) {
				var edge = it.next();
				if(edge.head.isSink()) continue; else max = Ints.max(max,traverse1(edge.head.positives(),lvl + 1));
			}
			return max;
		};
		$r = traverse1;
		return $r;
	}(this));
	return node.isIsolated()?0:traverse(node.graph.edges.positives(node),1);
}
thx.graph.LongestPathLayer.prototype = {
	lay: function(graph) {
		var clone = graph.clone(), layers = [[]];
		var _g = 0, _g1 = clone.findSinks();
		while(_g < _g1.length) {
			var node = _g1[_g];
			++_g;
			layers[0].push(node.id);
		}
		var _g = 0, _g1 = Iterators.filter(clone.nodes.iterator(),function(n) {
			return !n.isSink();
		});
		while(_g < _g1.length) {
			var node = _g1[_g];
			++_g;
			var pos = thx.graph.LongestPathLayer.distanceToASink(clone,node), layer = layers[pos];
			if(null == layer) layer = layers[pos] = [];
			layer.push(node.id);
		}
		layers.reverse();
		return layers;
	}
	,__class__: thx.graph.LongestPathLayer
}
thx.graph.OneCycleRemover = function() {
};
$hxClasses["thx.graph.OneCycleRemover"] = thx.graph.OneCycleRemover;
thx.graph.OneCycleRemover.__name__ = ["thx","graph","OneCycleRemover"];
thx.graph.OneCycleRemover.prototype = {
	remove: function(graph) {
		var edge, result = [];
		var $it0 = graph.nodes.collection.iterator();
		while( $it0.hasNext() ) {
			var node = $it0.next();
			edge = node.predecessorBy(node);
			if(null == edge) continue;
			result.push({ node : node, weight : edge.weight, data : edge.data});
			edge.graph.edges._remove(edge);
		}
		return result;
	}
	,__class__: thx.graph.OneCycleRemover
}
thx.graph.SugiyamaMethod = function(partitioner,layer,splitter,decrosser) {
	var id = 0;
	this.partitioner = null == partitioner?new thx.graph.GreedyCyclePartitioner():partitioner;
	this.layer = null == layer?new thx.graph.LongestPathLayer():layer;
	this.splitter = null == splitter?new thx.graph.EdgeSplitter():splitter;
	this.decrosser = null == decrosser?thx.graph.GreedySwitchDecrosser.best():decrosser;
};
$hxClasses["thx.graph.SugiyamaMethod"] = thx.graph.SugiyamaMethod;
thx.graph.SugiyamaMethod.__name__ = ["thx","graph","SugiyamaMethod"];
thx.graph.SugiyamaMethod.prototype = {
	partitioner: null
	,layer: null
	,splitter: null
	,decrosser: null
	,resolve: function(graph,nodef,edgef) {
		var onecycles = new thx.graph.OneCycleRemover().remove(graph), twocycles = new thx.graph.TwoCycleRemover().remove(graph);
		var partitions = this.partitioner.partition(graph), reversed = new Hash();
		(partitions.left.length > partitions.right.length?partitions.right:partitions.left).forEach(function(edge,_) {
			reversed.set(edge.tail.id + "-" + edge.head.id,[edge.invert()]);
		});
		var layers = this.layer.lay(graph);
		var layout = new thx.graph.GraphLayout(graph,layers);
		var splits = [];
		layout = this.splitter.split(layout,splits,nodef,edgef);
		splits.forEach(function(split,_) {
			var key = split[split.length - 1].head.id + "-" + split[0].tail.id;
			if(reversed.exists(key)) reversed.set(key,split);
		});
		layout = this.decrosser.decross(layout);
		var $it0 = reversed.iterator();
		while( $it0.hasNext() ) {
			var path = $it0.next();
			path.forEach(function(edge,_) {
				var e = edge.invert();
			});
		}
		var _g = 0;
		while(_g < twocycles.length) {
			var item = twocycles[_g];
			++_g;
			layout.graph.edges.create(item.tail,item.head,item.weight,item.data);
		}
		var _g = 0;
		while(_g < onecycles.length) {
			var item = onecycles[_g];
			++_g;
			layout.graph.edges.create(item.node,item.node,item.weight,item.data);
		}
		return layout;
	}
	,__class__: thx.graph.SugiyamaMethod
}
thx.graph.TwoCycleRemover = function() {
};
$hxClasses["thx.graph.TwoCycleRemover"] = thx.graph.TwoCycleRemover;
thx.graph.TwoCycleRemover.__name__ = ["thx","graph","TwoCycleRemover"];
thx.graph.TwoCycleRemover.prototype = {
	remove: function(graph) {
		var result = [];
		var $it0 = graph.nodes.collection.iterator();
		while( $it0.hasNext() ) {
			var node = $it0.next();
			var $it1 = node.graph.edges.positives(node);
			while( $it1.hasNext() ) {
				var edge = $it1.next();
				var reverse = edge.head.predecessorBy(node);
				if(null == reverse) continue;
				result.push({ tail : reverse.tail, head : reverse.head, weight : reverse.weight, data : reverse.data});
				reverse.graph.edges._remove(reverse);
			}
		}
		return result;
	}
	,__class__: thx.graph.TwoCycleRemover
}
thx.json = {}
thx.json.Json = function() { }
$hxClasses["thx.json.Json"] = thx.json.Json;
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
thx.json.JsonDecoder = function(handler,tabsize) {
	if(tabsize == null) tabsize = 4;
	this.handler = handler;
	this.tabsize = tabsize;
};
$hxClasses["thx.json.JsonDecoder"] = thx.json.JsonDecoder;
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
		this.handler.objectStart();
		while(true) {
			this.ignoreWhiteSpace();
			if(this.expect("}")) break; else if(first) first = false; else if(this.expect(",")) this.ignoreWhiteSpace(); else this.error("expected ','");
			var k = this._parseString();
			this.ignoreWhiteSpace();
			if(!this.expect(":")) this.error("expected ':'");
			this.ignoreWhiteSpace();
			this.handler.objectFieldStart(k);
			this.parse();
			this.handler.objectFieldEnd();
		}
		this.handler.objectEnd();
	}
	,parseArray: function() {
		this.ignoreWhiteSpace();
		var first = true;
		this.handler.arrayStart();
		while(true) {
			this.ignoreWhiteSpace();
			if(this.expect("]")) break; else if(first) first = false; else if(this.expect(",")) this.ignoreWhiteSpace(); else this.error("expected ','");
			this.handler.arrayItemStart();
			this.parse();
			this.handler.arrayItemEnd();
		}
		this.handler.arrayEnd();
	}
	,parseValue: function() {
		if(this.expect("true")) this.handler.valueBool(true); else if(this.expect("false")) this.handler.valueBool(false); else if(this.expect("null")) this.handler.valueNull(); else this.parseFloat();
	}
	,parseString: function() {
		this.handler.valueString(this._parseString());
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
		this.handler.valueInt(Std.parseInt("0x" + v.join("")));
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
				this.handler.valueInt(Std.parseInt(v));
				return;
			} else throw(e);
		}
		try {
			if(this.expect(".")) v += "." + this.parseDigits(1); else {
				this.handler.valueInt(Std.parseInt(v));
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
				this.handler.valueFloat(Std.parseFloat(v));
				return;
			} else throw(e);
		}
		this.handler.valueFloat(Std.parseFloat(v));
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
thx.json._JsonDecoder = {}
thx.json._JsonDecoder.StreamError = $hxClasses["thx.json._JsonDecoder.StreamError"] = { __ename__ : ["thx","json","_JsonDecoder","StreamError"], __constructs__ : ["Eof"] }
thx.json._JsonDecoder.StreamError.Eof = ["Eof",0];
thx.json._JsonDecoder.StreamError.Eof.toString = $estr;
thx.json._JsonDecoder.StreamError.Eof.__enum__ = thx.json._JsonDecoder.StreamError;
thx.json.JsonEncoder = function() {
};
$hxClasses["thx.json.JsonEncoder"] = thx.json.JsonEncoder;
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
	,objectStart: function() {
		this.buf.add("{");
		this.count.push(0);
	}
	,objectFieldStart: function(name) {
		if(this.count[this.count.length - 1]++ > 0) this.buf.add(",");
		this.buf.add(this.quote(name) + ":");
	}
	,objectFieldEnd: function() {
	}
	,objectEnd: function() {
		this.buf.add("}");
		this.count.pop();
	}
	,arrayStart: function() {
		this.buf.add("[");
		this.count.push(0);
	}
	,arrayItemStart: function() {
		if(this.count[this.count.length - 1]++ > 0) this.buf.add(",");
	}
	,arrayItemEnd: function() {
	}
	,arrayEnd: function() {
		this.buf.add("]");
		this.count.pop();
	}
	,valueDate: function(d) {
		this.buf.add(d.getTime());
	}
	,valueString: function(s) {
		this.buf.add(this.quote(s));
	}
	,valueInt: function(i) {
		this.buf.add(i);
	}
	,valueFloat: function(f) {
		this.buf.add(f);
	}
	,valueNull: function() {
		this.buf.add("null");
	}
	,valueBool: function(b) {
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
thx.math.Const = function() { }
$hxClasses["thx.math.Const"] = thx.math.Const;
thx.math.Const.__name__ = ["thx","math","Const"];
thx.math.Const.prototype = {
	__class__: thx.math.Const
}
thx.math.Ease = function() { }
$hxClasses["thx.math.Ease"] = thx.math.Ease;
thx.math.Ease.__name__ = ["thx","math","Ease"];
thx.math.Ease.mode = function(easemode,f) {
	if(null == f) f = thx.math.Equations.cubic;
	if(null == easemode) easemode = thx.math.EaseMode.EaseIn;
	switch( (easemode)[1] ) {
	case 0:
		return f;
	case 1:
		return function(t) {
			return 1 - f(1 - t);
		};
	case 2:
		return function(t) {
			return .5 * (t < .5?f(2 * t):2 - f(2 - 2 * t));
		};
	case 3:
		return thx.math.Ease.mode(thx.math.EaseMode.EaseInEaseOut,thx.math.Ease.mode(thx.math.EaseMode.EaseOut,f));
	}
}
thx.math.Ease.prototype = {
	__class__: thx.math.Ease
}
thx.math.EaseMode = $hxClasses["thx.math.EaseMode"] = { __ename__ : ["thx","math","EaseMode"], __constructs__ : ["EaseIn","EaseOut","EaseInEaseOut","EaseOutEaseIn"] }
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
thx.math.Random = function(seed) {
	if(seed == null) seed = 1;
	this.seed = seed;
};
$hxClasses["thx.math.Random"] = thx.math.Random;
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
thx.math.scale = {}
thx.math.scale.IScale = function() { }
$hxClasses["thx.math.scale.IScale"] = thx.math.scale.IScale;
thx.math.scale.IScale.__name__ = ["thx","math","scale","IScale"];
thx.math.scale.IScale.prototype = {
	scale: null
	,getDomain: null
	,getRange: null
	,__class__: thx.math.scale.IScale
}
thx.math.scale.NumericScale = function() { }
$hxClasses["thx.math.scale.NumericScale"] = thx.math.scale.NumericScale;
thx.math.scale.NumericScale.__name__ = ["thx","math","scale","NumericScale"];
thx.math.scale.NumericScale.__interfaces__ = [thx.math.scale.IScale];
thx.math.scale.NumericScale.prototype = {
	_domain: null
	,_range: null
	,_output: null
	,scale: function(x,_) {
		return this._output(x);
	}
	,getDomain: function() {
		return this._domain;
	}
	,getRange: function() {
		return this._range;
	}
	,ticks: function() {
		return (function($this) {
			var $r;
			throw new thx.error.AbstractMethod({ fileName : "NumericScale.hx", lineNumber : 86, className : "thx.math.scale.NumericScale", methodName : "ticks"});
			return $r;
		}(this));
	}
	,tickFormat: function(v,i) {
		return (function($this) {
			var $r;
			throw new thx.error.AbstractMethod({ fileName : "NumericScale.hx", lineNumber : 91, className : "thx.math.scale.NumericScale", methodName : "tickFormat"});
			return $r;
		}(this));
	}
	,__class__: thx.math.scale.NumericScale
}
thx.math.scale.Linear = function() { }
$hxClasses["thx.math.scale.Linear"] = thx.math.scale.Linear;
thx.math.scale.Linear.__name__ = ["thx","math","scale","Linear"];
thx.math.scale.Linear.__super__ = thx.math.scale.NumericScale;
thx.math.scale.Linear.prototype = $extend(thx.math.scale.NumericScale.prototype,{
	m: null
	,tickRange: function() {
		var start = Arrays.min(this._domain), stop = Arrays.max(this._domain), span = stop - start, step = Math.pow(10,Math.floor(Math.log(span / this.m) / 2.302585092994046)), err = this.m / (span / step);
		if(err <= .15) step *= 10; else if(err <= .35) step *= 5; else if(err <= .75) step *= 2;
		return { start : Math.ceil(start / step) * step, stop : Math.floor(stop / step) * step + step * .5, step : step};
	}
	,ticks: function() {
		var range = this.tickRange();
		return Floats.range(range.start,range.stop,range.step);
	}
	,tickFormat: function(v,i) {
		var n = Math.max(0,-Math.floor(Math.log(this.tickRange().step) / 2.302585092994046 + .01));
		return Floats.format(v,"D:" + n);
	}
	,__class__: thx.math.scale.Linear
});
thx.math.scale.LinearT = function() { }
$hxClasses["thx.math.scale.LinearT"] = thx.math.scale.LinearT;
thx.math.scale.LinearT.__name__ = ["thx","math","scale","LinearT"];
thx.math.scale.LinearT.__interfaces__ = [thx.math.scale.IScale];
thx.math.scale.LinearT.prototype = {
	_domain: null
	,_range: null
	,_output: null
	,scale: function(x,_) {
		return this._output(x);
	}
	,getDomain: function() {
		return this._domain;
	}
	,getRange: function() {
		return this._range;
	}
	,__class__: thx.math.scale.LinearT
}
thx.svg = {}
thx.svg.Arc = function() {
	this._r0 = function(_,_1) {
		return 0;
	};
	this._r1 = function(_,_1) {
		return 1;
	};
	this._a0 = function(_,_1) {
		return 0;
	};
	this._a1 = function(_,_1) {
		return Math.PI;
	};
};
$hxClasses["thx.svg.Arc"] = thx.svg.Arc;
thx.svg.Arc.__name__ = ["thx","svg","Arc"];
thx.svg.Arc.fromAngleObject = function() {
	return new thx.svg.Arc().startAnglef(function(d,_) {
		return d.startAngle;
	}).endAnglef(function(d,_) {
		return d.endAngle;
	});
}
thx.svg.Arc.prototype = {
	_r0: null
	,_r1: null
	,_a0: null
	,_a1: null
	,innerRadius: function(v) {
		return this.innerRadiusf(function(_,_1) {
			return v;
		});
	}
	,innerRadiusf: function(v) {
		this._r0 = v;
		return this;
	}
	,outerRadius: function(v) {
		return this.outerRadiusf(function(_,_1) {
			return v;
		});
	}
	,outerRadiusf: function(v) {
		this._r1 = v;
		return this;
	}
	,startAnglef: function(v) {
		this._a0 = v;
		return this;
	}
	,endAnglef: function(v) {
		this._a1 = v;
		return this;
	}
	,shape: function(d,i) {
		var a0 = this._a0(d,i) + thx.svg.LineInternals.arcOffset, a1 = this._a1(d,i) + thx.svg.LineInternals.arcOffset, da = a1 - a0, df = da < Math.PI?"0":"1", c0 = Math.cos(a0), s0 = Math.sin(a0), c1 = Math.cos(a1), s1 = Math.sin(a1), r0 = this._r0(d,i), r1 = this._r1(d,i);
		return da >= thx.svg.LineInternals.arcMax?r0 != 0?"M0," + r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + -r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + r1 + "M0," + r0 + "A" + r0 + "," + r0 + " 0 1,1 0," + -r0 + "A" + r0 + "," + r0 + " 0 1,1 0," + r0 + "Z":"M0," + r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + -r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + r1 + "Z":r0 != 0?"M" + r1 * c0 + "," + r1 * s0 + "A" + r1 + "," + r1 + " 0 " + df + ",1 " + r1 * c1 + "," + r1 * s1 + "L" + r0 * c1 + "," + r0 * s1 + "A" + r0 + "," + r0 + " 0 " + df + ",0 " + r0 * c0 + "," + r0 * s0 + "Z":"M" + r1 * c0 + "," + r1 * s0 + "A" + r1 + "," + r1 + " 0 " + df + ",1 " + r1 * c1 + "," + r1 * s1 + "L0,0" + "Z";
	}
	,__class__: thx.svg.Arc
}
thx.svg.Area = function(x,y0,y1,interpolator) {
	this._x = x;
	this._y0 = y0;
	this._y1 = y1;
	this._interpolator = interpolator;
};
$hxClasses["thx.svg.Area"] = thx.svg.Area;
thx.svg.Area.__name__ = ["thx","svg","Area"];
thx.svg.Area.prototype = {
	_x: null
	,_y0: null
	,_y1: null
	,_interpolator: null
	,shape: function(data,i) {
		var second = thx.svg.LineInternals.linePoints(data,this._x,this._y0);
		second.reverse();
		return data.length < 1?null:"M" + thx.svg.LineInternals.interpolatePoints(thx.svg.LineInternals.linePoints(data,this._x,this._y1),this._interpolator) + "L" + thx.svg.LineInternals.interpolatePoints(second,this._interpolator) + "Z";
	}
	,interpolator: function(type) {
		this._interpolator = type;
		return this;
	}
	,x: function(v) {
		this._x = v;
		return this;
	}
	,y0: function(v) {
		this._y0 = v;
		return this;
	}
	,y1: function(v) {
		this._y1 = v;
		return this;
	}
	,__class__: thx.svg.Area
}
thx.svg.Diagonal = function() {
	this._projection = thx.svg.Diagonal.diagonalProjection;
};
$hxClasses["thx.svg.Diagonal"] = thx.svg.Diagonal;
thx.svg.Diagonal.__name__ = ["thx","svg","Diagonal"];
thx.svg.Diagonal.diagonalProjection = function(d,_) {
	return d;
}
thx.svg.Diagonal.forObject = function() {
	return new thx.svg.Diagonal().sourcef(function(d,_i) {
		return [d.x0,d.y0];
	}).targetf(function(d,_i) {
		return [d.x1,d.y1];
	});
}
thx.svg.Diagonal.forArray = function() {
	return new thx.svg.Diagonal().sourcef(function(d,_i) {
		return [d[0],d[1]];
	}).targetf(function(d,_i) {
		return [d[2],d[3]];
	});
}
thx.svg.Diagonal.prototype = {
	_source: null
	,_target: null
	,_projection: null
	,diagonal: function(d,i) {
		var p0 = this._source(d,i), p3 = this._target(d,i), m = (p0[1] + p3[1]) / 2, p = [p0,[p0[0],m],[p3[0],m],p3];
		var p2 = p.map(this._projection);
		return "M " + p2[0][0] + " " + p2[0][1] + " C " + p2[1][0] + " " + p2[1][1] + " " + p2[2][0] + " " + p2[2][1] + " " + p2[3][0] + " " + p2[3][1];
	}
	,sourcef: function(x) {
		this._source = x;
		return this;
	}
	,targetf: function(x) {
		this._target = x;
		return this;
	}
	,projection: function(x) {
		this._projection = x;
		return this;
	}
	,__class__: thx.svg.Diagonal
}
thx.svg.Line = function(x,y,interpolator) {
	this._x = x;
	this._y = y;
	this._interpolator = interpolator;
};
$hxClasses["thx.svg.Line"] = thx.svg.Line;
thx.svg.Line.__name__ = ["thx","svg","Line"];
thx.svg.Line.prototype = {
	_x: null
	,_y: null
	,_interpolator: null
	,shape: function(data,i) {
		return data.length < 1?null:"M" + thx.svg.LineInternals.interpolatePoints(thx.svg.LineInternals.linePoints(data,this._x,this._y),this._interpolator);
	}
	,interpolator: function(type) {
		this._interpolator = type;
		return this;
	}
	,__class__: thx.svg.Line
}
thx.svg.LineInternals = function() { }
$hxClasses["thx.svg.LineInternals"] = thx.svg.LineInternals;
thx.svg.LineInternals.__name__ = ["thx","svg","LineInternals"];
thx.svg.LineInternals.linePoints = function(data,x,y) {
	var points = [], value;
	var _g1 = 0, _g = data.length;
	while(_g1 < _g) {
		var i = _g1++;
		points.push([x(value = data[i],i),y(value,i)]);
	}
	return points;
}
thx.svg.LineInternals.interpolatePoints = function(points,type) {
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
		var p1;
		path.push(p[0] + "," + p[1]);
		while(++i < n - 1) {
			p = points[i];
			p1 = points[i + 1];
			path.push("H" + (p[0] + p1[0]) / 2 + "V" + p[1]);
		}
		p = points[i];
		path.push("H" + p[0] + "V" + p[1]);
		break;
	case 2:
		path.push(p[0] + "," + p[1]);
		while(++i < n) {
			p = points[i];
			path.push("V" + p[1] + "H" + p[0]);
		}
		break;
	case 3:
		path.push(p[0] + "," + p[1]);
		while(++i < n) {
			p = points[i];
			path.push("H" + p[0] + "V" + p[1]);
		}
		break;
	case 4:
		if(points.length < 3) return thx.svg.LineInternals.interpolatePoints(points,thx.svg.LineInterpolator.Linear);
		i = 1;
		p = points[1];
		var x0 = p[0], y0 = p[1], px = [x0,x0,x0,p[0]], py = [y0,y0,y0,p[1]];
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
	case 5:
		if(points.length < 4) return thx.svg.LineInternals.interpolatePoints(points,thx.svg.LineInterpolator.Linear);
		i = -1;
		var pi, px = [0.0], py = [0.0];
		while(++i < 3) {
			pi = points[i];
			px.push(pi[0]);
			py.push(pi[1]);
		}
		path.push(thx.svg.LineInternals._lineDot4(thx.svg.LineInternals._lineBasisBezier3,px) + "," + thx.svg.LineInternals._lineDot4(thx.svg.LineInternals._lineBasisBezier3,py));
		--i;
		while(++i < n) {
			pi = points[i];
			px.shift();
			px.push(pi[0]);
			py.shift();
			py.push(pi[1]);
			thx.svg.LineInternals._lineBasisBezier(path,px,py);
		}
		break;
	case 6:
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
	case 7:
		var tension = $e[2];
		if(null == tension) tension = .7;
		if(points.length < 3) return thx.svg.LineInternals.interpolatePoints(points,thx.svg.LineInterpolator.Linear); else return points[0][0] + "," + points[0][1] + thx.svg.LineInternals._lineHermite(points,thx.svg.LineInternals._lineCardinalTangents(points,tension));
		break;
	case 8:
		var tension = $e[2];
		return points.length < 4?thx.svg.LineInternals.interpolatePoints(points,thx.svg.LineInterpolator.Linear):points[1][0] + "," + points[1][1] + thx.svg.LineInternals._lineCardinalTangents(points,tension);
	case 9:
		var tension = $e[2];
		if(null == tension) tension = .7;
		return points.length < 3?thx.svg.LineInternals.interpolatePoints(points,thx.svg.LineInterpolator.Linear):points[0][0] + "," + points[0][1] + thx.svg.LineInternals._lineHermite(points,thx.svg.LineInternals._lineCardinalTangents([points[points.length - 2]].concat(points).concat([points[1]]),tension));
	case 10:
		return points.length < 3?thx.svg.LineInternals.interpolatePoints(points,thx.svg.LineInterpolator.Linear):points[0] + thx.svg.LineInternals._lineHermite(points,thx.svg.LineInternals._lineMonotoneTangents(points));
	}
	return path.join("");
}
thx.svg.LineInternals._lineDot4 = function(a,b) {
	return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}
thx.svg.LineInternals._lineBasisBezier = function(path,x,y) {
	path.push("C" + thx.svg.LineInternals._lineDot4(thx.svg.LineInternals._lineBasisBezier1,x) + "," + thx.svg.LineInternals._lineDot4(thx.svg.LineInternals._lineBasisBezier1,y) + "," + thx.svg.LineInternals._lineDot4(thx.svg.LineInternals._lineBasisBezier2,x) + "," + thx.svg.LineInternals._lineDot4(thx.svg.LineInternals._lineBasisBezier2,y) + "," + thx.svg.LineInternals._lineDot4(thx.svg.LineInternals._lineBasisBezier3,x) + "," + thx.svg.LineInternals._lineDot4(thx.svg.LineInternals._lineBasisBezier3,y));
}
thx.svg.LineInternals._lineSlope = function(p0,p1) {
	return (p1[1] - p0[1]) / (p1[0] - p0[0]);
}
thx.svg.LineInternals._lineFiniteDifferences = function(points) {
	var i = 0, j = points.length - 1, m = [], p0 = points[0], p1 = points[1], d = m[0] = thx.svg.LineInternals._lineSlope(p0,p1);
	while(++i < j) m[i] = d + (d = thx.svg.LineInternals._lineSlope(p0 = p1,p1 = points[i + 1]));
	m[i] = d;
	return m;
}
thx.svg.LineInternals._lineMonotoneTangents = function(points) {
	var tangents = [], d, a, b, s, m = thx.svg.LineInternals._lineFiniteDifferences(points), i = -1, j = points.length - 1;
	while(++i < j) {
		d = thx.svg.LineInternals._lineSlope(points[i],points[i + 1]);
		if(Math.abs(d) < 1e-6) m[i] = m[i + 1] = 0; else {
			a = m[i] / d;
			b = m[i + 1] / d;
			s = a * a + b * b;
			if(s > 9) {
				s = d * 3 / Math.sqrt(s);
				m[i] = s * a;
				m[i + 1] = s * b;
			}
		}
	}
	i = -1;
	while(++i <= j) {
		s = (points[Ints.min(j,i + 1)][0] - points[Ints.max(0,i - 1)][0]) / (6 * (1 + m[i] * m[i]));
		tangents.push([Math.isFinite(s)?s:0,Math.isFinite(s = m[i] * s)?s:0]);
	}
	return tangents;
}
thx.svg.LineInternals._lineHermite = function(points,tangents) {
	if(tangents.length < 1 || points.length != tangents.length && points.length != tangents.length + 2) return thx.svg.LineInternals.interpolatePoints(points,thx.svg.LineInterpolator.Linear);
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
	return path;
}
thx.svg.LineInternals._lineCardinalTangents = function(points,tension) {
	var tangents = [], a = (1 - tension) / 2, p0 = points[0], p1 = points[1], p2 = points[2], i = 2, n = points.length;
	while(++i < n) {
		tangents.push([a * (p2[0] - p0[0]),a * (p2[1] - p0[1])]);
		p0 = p1;
		p1 = p2;
		p2 = points[i];
	}
	tangents.push([a * (p2[0] - p0[0]),a * (p2[1] - p0[1])]);
	return tangents;
}
thx.svg.LineInternals.prototype = {
	__class__: thx.svg.LineInternals
}
thx.svg.LineInterpolator = $hxClasses["thx.svg.LineInterpolator"] = { __ename__ : ["thx","svg","LineInterpolator"], __constructs__ : ["Linear","Step","StepBefore","StepAfter","Basis","BasisOpen","BasisClosed","Cardinal","CardinalOpen","CardinalClosed","Monotone"] }
thx.svg.LineInterpolator.Linear = ["Linear",0];
thx.svg.LineInterpolator.Linear.toString = $estr;
thx.svg.LineInterpolator.Linear.__enum__ = thx.svg.LineInterpolator;
thx.svg.LineInterpolator.Step = ["Step",1];
thx.svg.LineInterpolator.Step.toString = $estr;
thx.svg.LineInterpolator.Step.__enum__ = thx.svg.LineInterpolator;
thx.svg.LineInterpolator.StepBefore = ["StepBefore",2];
thx.svg.LineInterpolator.StepBefore.toString = $estr;
thx.svg.LineInterpolator.StepBefore.__enum__ = thx.svg.LineInterpolator;
thx.svg.LineInterpolator.StepAfter = ["StepAfter",3];
thx.svg.LineInterpolator.StepAfter.toString = $estr;
thx.svg.LineInterpolator.StepAfter.__enum__ = thx.svg.LineInterpolator;
thx.svg.LineInterpolator.Basis = ["Basis",4];
thx.svg.LineInterpolator.Basis.toString = $estr;
thx.svg.LineInterpolator.Basis.__enum__ = thx.svg.LineInterpolator;
thx.svg.LineInterpolator.BasisOpen = ["BasisOpen",5];
thx.svg.LineInterpolator.BasisOpen.toString = $estr;
thx.svg.LineInterpolator.BasisOpen.__enum__ = thx.svg.LineInterpolator;
thx.svg.LineInterpolator.BasisClosed = ["BasisClosed",6];
thx.svg.LineInterpolator.BasisClosed.toString = $estr;
thx.svg.LineInterpolator.BasisClosed.__enum__ = thx.svg.LineInterpolator;
thx.svg.LineInterpolator.Cardinal = function(tension) { var $x = ["Cardinal",7,tension]; $x.__enum__ = thx.svg.LineInterpolator; $x.toString = $estr; return $x; }
thx.svg.LineInterpolator.CardinalOpen = function(tension) { var $x = ["CardinalOpen",8,tension]; $x.__enum__ = thx.svg.LineInterpolator; $x.toString = $estr; return $x; }
thx.svg.LineInterpolator.CardinalClosed = function(tension) { var $x = ["CardinalClosed",9,tension]; $x.__enum__ = thx.svg.LineInterpolator; $x.toString = $estr; return $x; }
thx.svg.LineInterpolator.Monotone = ["Monotone",10];
thx.svg.LineInterpolator.Monotone.toString = $estr;
thx.svg.LineInterpolator.Monotone.__enum__ = thx.svg.LineInterpolator;
thx.svg.LineInterpolators = function() { }
$hxClasses["thx.svg.LineInterpolators"] = thx.svg.LineInterpolators;
thx.svg.LineInterpolators.__name__ = ["thx","svg","LineInterpolators"];
thx.svg.LineInterpolators.parse = function(s,sep) {
	if(sep == null) sep = "-";
	var interp = s.split(sep)[0].toLowerCase();
	return (function($this) {
		var $r;
		switch(interp) {
		case "basis":
			$r = thx.svg.LineInterpolator.Basis;
			break;
		case "basisopen":
			$r = thx.svg.LineInterpolator.BasisOpen;
			break;
		case "basisclosed":
			$r = thx.svg.LineInterpolator.BasisClosed;
			break;
		case "cardinal":
			$r = thx.svg.LineInterpolator.Cardinal(thx.svg.LineInterpolators.argument(s));
			break;
		case "cardinalopen":
			$r = thx.svg.LineInterpolator.CardinalOpen(thx.svg.LineInterpolators.argument(s));
			break;
		case "cardinalclosed":
			$r = thx.svg.LineInterpolator.CardinalClosed(thx.svg.LineInterpolators.argument(s));
			break;
		case "monotone":
			$r = thx.svg.LineInterpolator.Monotone;
			break;
		case "step":
			$r = thx.svg.LineInterpolator.Step;
			break;
		case "stepafter":
			$r = thx.svg.LineInterpolator.StepAfter;
			break;
		case "stepbefore":
			$r = thx.svg.LineInterpolator.StepBefore;
			break;
		default:
			$r = thx.svg.LineInterpolator.Linear;
		}
		return $r;
	}(this));
}
thx.svg.LineInterpolators.argument = function(s) {
	var v = s.split("-")[1];
	if(null == v) return null; else return Std.parseFloat(v);
}
thx.svg.LineInterpolators.prototype = {
	__class__: thx.svg.LineInterpolators
}
thx.svg.PathGeoJson = function() {
	this.setPointRadius(4.5);
	this.setProjection(new thx.geo.AlbersUsa());
	this.pathTypes = new thx.svg.PathTypes(this);
	this.centroidTypes = new thx.svg.CentroidTypes(this);
	this.areaTypes = new thx.svg.AreaTypes(this);
};
$hxClasses["thx.svg.PathGeoJson"] = thx.svg.PathGeoJson;
thx.svg.PathGeoJson.__name__ = ["thx","svg","PathGeoJson"];
thx.svg.PathGeoJson.circle = function(r) {
	return "m0," + r + "a" + r + "," + r + " 0 1,1 0," + -2 * r + "a" + r + "," + r + " 0 1,1 0," + 2 * r + "z";
}
thx.svg.PathGeoJson.prototype = {
	pointRadius: null
	,projection: null
	,pathCircle: null
	,pathTypes: null
	,centroidTypes: null
	,areaTypes: null
	,path: function(d,_) {
		return this.pathTypes.path(d);
	}
	,centroid: function(d,_) {
		return this.centroidTypes.centroid(d);
	}
	,setPointRadius: function(r) {
		this.pointRadius = r;
		this.pathCircle = thx.svg.PathGeoJson.circle(r);
		return r;
	}
	,setProjection: function(projection) {
		return this.projection = projection;
	}
	,__class__: thx.svg.PathGeoJson
	,__properties__: {set_projection:"setProjection",set_pointRadius:"setPointRadius"}
}
thx.svg.PathTypes = function(geo) {
	this.geo = geo;
};
$hxClasses["thx.svg.PathTypes"] = thx.svg.PathTypes;
thx.svg.PathTypes.__name__ = ["thx","svg","PathTypes"];
thx.svg.PathTypes.prototype = {
	geo: null
	,path: function(geo) {
		var field = Reflect.field(this,Strings.lcfirst(geo.type));
		if(null == field) return "";
		return field.apply(this,[geo]);
	}
	,featureCollection: function(f) {
		var p = [], features = f.features;
		var _g1 = 0, _g = features.length;
		while(_g1 < _g) {
			var i = _g1++;
			p.push(this.path(features[i].geometry));
		}
		return p.join("");
	}
	,feature: function(f) {
		return this.path(f.geometry);
	}
	,point: function(o) {
		return "M" + this.project(o.coordinates) + this.geo.pathCircle;
	}
	,multiPoint: function(o) {
		var p = [], coordinates = o.coordinates;
		var _g1 = 0, _g = coordinates.length;
		while(_g1 < _g) {
			var i = _g1++;
			p.push("M" + this.project(coordinates[i]) + this.geo.pathCircle);
		}
		return p.join("");
	}
	,lineString: function(o) {
		var p = ["M"], coordinates = o.coordinates;
		var _g1 = 0, _g = coordinates.length;
		while(_g1 < _g) {
			var i = _g1++;
			p.push(this.project(coordinates[i]));
		}
		return p.join("L");
	}
	,multiLineString: function(o) {
		var p = [], coords = o.coordinates;
		var _g = 0;
		while(_g < coords.length) {
			var coordinates = coords[_g];
			++_g;
			p.push("M");
			var _g2 = 0, _g1 = coordinates.length;
			while(_g2 < _g1) {
				var i = _g2++;
				p.push(this.project(coordinates[i]));
				p.push("L");
			}
			p.pop();
		}
		return p.join("");
	}
	,polygon: function(o) {
		var p = [], coords = o.coordinates;
		var _g = 0;
		while(_g < coords.length) {
			var coordinates = coords[_g];
			++_g;
			p.push("M");
			var _g2 = 0, _g1 = coordinates.length;
			while(_g2 < _g1) {
				var j = _g2++;
				p.push(this.project(coordinates[j]));
				p.push("L");
			}
			p[p.length - 1] = "Z";
		}
		return p.join("");
	}
	,multiPolygon: function(o) {
		var p = [], coords = o.coordinates;
		var _g = 0;
		while(_g < coords.length) {
			var coordinates = coords[_g];
			++_g;
			var _g1 = 0;
			while(_g1 < coordinates.length) {
				var subcoordinates = coordinates[_g1];
				++_g1;
				p.push("M");
				var _g2 = 0;
				while(_g2 < subcoordinates.length) {
					var scoords = subcoordinates[_g2];
					++_g2;
					p.push(this.project(scoords));
					p.push("L");
				}
				p[p.length - 1] = "Z";
			}
		}
		return p.join("");
	}
	,geometryCollection: function(o) {
		var p = [];
		var _g = 0, _g1 = o.geometries;
		while(_g < _g1.length) {
			var geometry = _g1[_g];
			++_g;
			p.push(this.path(geometry));
		}
		return p.join("");
	}
	,project: function(coords) {
		return this.geo.projection.project(coords).join(",");
	}
	,__class__: thx.svg.PathTypes
}
thx.svg.AreaTypes = function(geo) {
	this.geo = geo;
};
$hxClasses["thx.svg.AreaTypes"] = thx.svg.AreaTypes;
thx.svg.AreaTypes.__name__ = ["thx","svg","AreaTypes"];
thx.svg.AreaTypes.prototype = {
	geo: null
	,area: function(geo) {
		var field = Reflect.field(this,Strings.lcfirst(geo.type));
		if(null == field) return 0.0;
		return field.apply(this,[geo]);
	}
	,featureCollection: function(f) {
		var a = 0.0;
		var _g = 0, _g1 = f.features;
		while(_g < _g1.length) {
			var feat = _g1[_g];
			++_g;
			a += this.area(feat.geometry);
		}
		return a;
	}
	,feature: function(f) {
		return this.area(f.geometry);
	}
	,point: function(o) {
		return 0.0;
	}
	,multiPoint: function(o) {
		return 0.0;
	}
	,lineString: function(o) {
		return 0.0;
	}
	,multiLineString: function(o) {
		return 0.0;
	}
	,polygon: function(o) {
		return this.polygonArea(o.coordinates);
	}
	,multiPolygon: function(o) {
		var sum = 0.0, coords = o.coordinates;
		var _g = 0;
		while(_g < coords.length) {
			var coordinates = coords[_g];
			++_g;
			sum += this.polygonArea(coordinates);
		}
		return sum;
	}
	,geometryCollection: function(o) {
		var sum = 0.0;
		var _g = 0, _g1 = o.geometries;
		while(_g < _g1.length) {
			var geometry = _g1[_g];
			++_g;
			sum += this.area(geometry);
		}
		return sum;
	}
	,polygonArea: function(coords) {
		var sum = this.parea(coords[0]);
		var _g1 = 1, _g = coords.length;
		while(_g1 < _g) {
			var i = _g1++;
			sum -= this.parea(coords[i]);
		}
		return sum;
	}
	,parea: function(coords) {
		return Math.abs(new thx.geom.Polygon(coords.map(this.project.$bind(this))).area());
	}
	,project: function(d,_) {
		return this.geo.projection.project(d);
	}
	,__class__: thx.svg.AreaTypes
}
thx.svg.CentroidTypes = function(geo) {
	this.geo = geo;
};
$hxClasses["thx.svg.CentroidTypes"] = thx.svg.CentroidTypes;
thx.svg.CentroidTypes.__name__ = ["thx","svg","CentroidTypes"];
thx.svg.CentroidTypes.prototype = {
	geo: null
	,centroid: function(geo) {
		var field = Reflect.field(this,Strings.lcfirst(geo.type));
		if(null == field) return [0.0,0.0];
		return field.apply(this,[geo]);
	}
	,point: function(o) {
		return this.project(o.coordinates);
	}
	,feature: function(f) {
		return this.centroid(f.geometry);
	}
	,polygon: function(o) {
		var centroid = this.polygonCentroid(o.coordinates);
		return [centroid[0] / centroid[2],centroid[1] / centroid[2]];
	}
	,multiPolygon: function(o) {
		var area = 0.0, x = 0.0, y = 0.0, z = 0.0, centroid, coords = o.coordinates;
		var _g = 0;
		while(_g < coords.length) {
			var coordinates = coords[_g];
			++_g;
			centroid = this.polygonCentroid(coordinates);
			x += centroid[0];
			y += centroid[1];
			z += centroid[2];
		}
		return [x / z,y / z];
	}
	,polygonCentroid: function(coordinates) {
		var polygon = new thx.geom.Polygon(coordinates[0].map(this.project.$bind(this))), centroid = polygon.centroid(1), x = centroid[0], y = centroid[1], z = Math.abs(polygon.area());
		var _g1 = 1, _g = coordinates.length;
		while(_g1 < _g) {
			var i = _g1++;
			polygon = new thx.geom.Polygon(coordinates[i].map(this.project.$bind(this)));
			centroid = polygon.centroid(1);
			x -= centroid[0];
			y -= centroid[1];
			z -= Math.abs(polygon.area());
		}
		return [x,y,6 * z];
	}
	,project: function(d,_) {
		return this.geo.projection.project(d);
	}
	,__class__: thx.svg.CentroidTypes
}
thx.svg.Symbol = function() { }
$hxClasses["thx.svg.Symbol"] = thx.svg.Symbol;
thx.svg.Symbol.__name__ = ["thx","svg","Symbol"];
thx.svg.Symbol.triangleDown = function(size) {
	var rx = Math.sqrt(size / thx.svg.Symbol.sqrt3), ry = rx * thx.svg.Symbol.sqrt3 / 2;
	return "M0," + ry + "L" + rx + "," + -ry + " " + -rx + "," + -ry + "Z";
}
thx.svg.Symbol.triangleUp = function(size) {
	var rx = Math.sqrt(size / thx.svg.Symbol.sqrt3), ry = rx * thx.svg.Symbol.sqrt3 / 2;
	return "M0," + -ry + "L" + rx + "," + ry + " " + -rx + "," + ry + "Z";
}
thx.svg.Symbol.square = function(size) {
	var r = Math.sqrt(size) / 2;
	return "M" + -r + "," + -r + "L" + r + "," + -r + " " + r + "," + r + " " + -r + "," + r + "Z";
}
thx.svg.Symbol.diamond = function(size) {
	var ry = Math.sqrt(size / (2 * thx.svg.Symbol.tan30)), rx = ry * thx.svg.Symbol.tan30;
	return "M0," + -ry + "L" + rx + ",0" + " 0," + ry + " " + -rx + ",0" + "Z";
}
thx.svg.Symbol.cross = function(size) {
	var r = Math.sqrt(size / 5) / 2;
	return "M" + -3 * r + "," + -r + "H" + -r + "V" + -3 * r + "H" + r + "V" + -r + "H" + 3 * r + "V" + r + "H" + r + "V" + 3 * r + "H" + -r + "V" + r + "H" + -3 * r + "Z";
}
thx.svg.Symbol.circle = function(size) {
	var r = Math.sqrt(size / Math.PI);
	return "M0," + r + "A" + r + "," + r + " 0 1,1 0," + -r + "A" + r + "," + r + " 0 1,1 0," + r + "Z";
}
thx.svg.Symbol.arrowUp = function(size) {
	var r = Math.sqrt(size / 2);
	return "M" + -r + ",0" + "h" + r / 2 + "v" + r + "h" + r + "v" + -r + "h" + r / 2 + "l" + -r + "," + -r + "Z";
}
thx.svg.Symbol.arrowDown = function(size) {
	var r = Math.sqrt(size / 2);
	return "M" + -r + ",0" + "h" + r / 2 + "v" + -r + "h" + r + "v" + r + "h" + r / 2 + "l" + -r + "," + r + "Z";
}
thx.svg.Symbol.arrowDownWide = function(size) {
	var r = Math.sqrt(size / 2.5);
	return "M" + -r + ",0" + "h" + r / 4 + "v" + -r + "h" + r * 1.5 + "v" + r + "h" + r / 4 + "l" + -r + "," + r + "Z";
}
thx.svg.Symbol.arrowRight = function(size) {
	var r = Math.sqrt(size / 2);
	return "M" + "0," + -r + "v" + r / 2 + "h" + -r + "v" + r + "h" + r + "v" + r / 2 + "l" + r + "," + -r + "Z";
}
thx.svg.Symbol.arrowLeft = function(size) {
	var r = Math.sqrt(size / 2);
	return "M" + "0," + -r + "v" + r / 2 + "h" + r + "v" + r + "h" + -r + "v" + r / 2 + "l" + -r + "," + -r + "Z";
}
thx.svg.Symbol.star = function(size) {
	var r = Math.sqrt(size / 0.31027) / 2;
	return "M0," + -r + "L" + r * 0.236 + "," + r * -0.325 + " " + r * 0.951 + "," + r * -0.309 + " " + r * 0.382 + "," + r * 0.124 + " " + r * 0.588 + "," + r * 0.809 + " " + r * 0 + "," + r * 0.401 + " " + r * -0.588 + "," + r * 0.809 + " " + r * -0.382 + "," + r * 0.124 + " " + r * -0.951 + "," + r * -0.309 + " " + r * -0.236 + "," + r * -0.325 + " " + "Z";
}
thx.svg.Symbol.prototype = {
	__class__: thx.svg.Symbol
}
thx.translation = {}
thx.translation.ITranslation = function() { }
$hxClasses["thx.translation.ITranslation"] = thx.translation.ITranslation;
thx.translation.ITranslation.__name__ = ["thx","translation","ITranslation"];
thx.translation.ITranslation.prototype = {
	domain: null
	,singular: null
	,plural: null
	,__class__: thx.translation.ITranslation
	,__properties__: {set_domain:"setDomain",get_domain:"getDomain"}
}
js.Boot.__res = {}
js.Boot.__init();
if (!('indexOf' in Array.prototype)) {
    Array.prototype.indexOf= function(find, i /*opt*/) {
        if (i===undefined) i= 0;
        if (i<0) i+= this.length;
        if (i<0) i= 0;
        for (var n= this.length; i<n; i++)
            if (i in this && this[i]===find)
                return i;
        return -1;
    };
}
if (!('lastIndexOf' in Array.prototype)) {
    Array.prototype.lastIndexOf= function(find, i /*opt*/) {
        if (i===undefined) i= this.length-1;
        if (i<0) i+= this.length;
        if (i>this.length-1) i= this.length-1;
        for (i++; i-->0;) /* i++ because from-argument is sadly inclusive */
            if (i in this && this[i]===find)
                return i;
        return -1;
    };
}
if (!('forEach' in Array.prototype)) {
    Array.prototype.forEach= function(action, that /*opt*/) {
        for (var i= 0, n= this.length; i<n; i++)
            if (i in this)
                action.call(that, this[i], i, this);
    };
}
if (!('map' in Array.prototype)) {
    Array.prototype.map= function(mapper, that /*opt*/) {
        var other= new Array(this.length);
        for (var i= 0, n= this.length; i<n; i++)
            if (i in this)
                other[i]= mapper.call(that, this[i], i, this);
        return other;
    };
}
if (!('filter' in Array.prototype)) {
    Array.prototype.filter= function(filter, that /*opt*/) {
        var other= [], v;
        for (var i=0, n= this.length; i<n; i++)
            if (i in this && filter.call(that, v= this[i], i, this))
                other.push(v);
        return other;
    };
}
if (!('every' in Array.prototype)) {
    Array.prototype.every= function(tester, that /*opt*/) {
        for (var i= 0, n= this.length; i<n; i++)
            if (i in this && !tester.call(that, this[i], i, this))
                return false;
        return true;
    };
}
{
	var bb = new BytesBuffer();
	BytesUtil.EMPTY = bb.getBytes();
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
{
	String.prototype.__class__ = $hxClasses["String"] = String;
	String.__name__ = ["String"];
	Array.prototype.__class__ = $hxClasses["Array"] = Array;
	Array.__name__ = ["Array"];
	var Int = $hxClasses["Int"] = { __name__ : ["Int"]};
	var Dynamic = $hxClasses["Dynamic"] = { __name__ : ["Dynamic"]};
	var Float = $hxClasses["Float"] = Number;
	Float.__name__ = ["Float"];
	var Bool = $hxClasses["Bool"] = Boolean;
	Bool.__ename__ = ["Bool"];
	var Class = $hxClasses["Class"] = { __name__ : ["Class"]};
	var Enum = { };
	var Void = $hxClasses["Void"] = { __ename__ : ["Void"]};
}
{
	var useragent = dhx.ClientHost.userAgent(), hasnavigator = dhx.ClientHost.hasNavigator(), pattern;
	dhx.ClientHost.host = !hasnavigator?dhx.HostType.UnknownServer:typeof module !== 'undefined' && module.exports?dhx.HostType.NodeJs:(pattern = new EReg("MSIE(?:/| )(\\S*);","")).match(useragent)?dhx.HostType.IE(pattern.matched(1)):(pattern = new EReg("Firefox(?:/| )(\\S*)","")).match(useragent)?dhx.HostType.Firefox(pattern.matched(1)):(pattern = new EReg("Chrome(?:/| )(\\S*)","")).match(useragent)?dhx.HostType.Chrome(pattern.matched(1)):(pattern = new EReg("Version(?:/| )(\\S*) Safari(?:/| )(\\S*)","")).match(useragent)?dhx.HostType.Safari(pattern.matched(1)):(pattern = new EReg("Opera(?:/| )(\\S*)","")).match(useragent)?dhx.HostType.Opera(pattern.matched(1)):dhx.HostType.Unknown(useragent);
	dhx.ClientHost.os = !hasnavigator?dhx.OSType.UnknownOs:(pattern = new EReg("Windows NT\\s+(\\d+\\.\\d+)","")).match(useragent)?(function($this) {
		var $r;
		var version = (function($this) {
			var $r;
			switch(pattern.matched(1)) {
			case "5.1":
				$r = "XP";
				break;
			case "5.2":
				$r = "2003/XP x64";
				break;
			case "6.0":
				$r = "Vista";
				break;
			case "6.1":
				$r = "7";
				break;
			case "6.2":
				$r = "8";
				break;
			default:
				$r = "unknown";
			}
			return $r;
		}($this));
		$r = dhx.OSType.Windows(version);
		return $r;
	}(this)):new EReg("Mac OS X","").match(useragent)?dhx.OSType.Mac:new EReg("(iPhone|iPad|iPod)","").match(useragent)?dhx.OSType.IOs:new EReg("Linux","").match(useragent)?dhx.OSType.Linux:new EReg("Android","").match(useragent)?dhx.OSType.Android:dhx.OSType.UnknownOs;
	dhx.ClientHost.environment = (function($this) {
		var $r;
		switch( (dhx.ClientHost.host)[1] ) {
		case 0:
			$r = dhx.EnvironmentType.Server;
			break;
		case 1:
			$r = dhx.EnvironmentType.Server;
			break;
		case 2:
		case 6:
		case 3:
			$r = dhx.EnvironmentType.Desktop;
			break;
		case 4:
			$r = (function($this) {
				var $r;
				switch( (dhx.ClientHost.os)[1] ) {
				case 1:
					$r = dhx.EnvironmentType.Mobile;
					break;
				default:
					$r = dhx.EnvironmentType.Desktop;
				}
				return $r;
			}($this));
			break;
		case 5:
			$r = (function($this) {
				var $r;
				switch( (dhx.ClientHost.os)[1] ) {
				case 2:
					$r = dhx.EnvironmentType.Mobile;
					break;
				default:
					$r = dhx.EnvironmentType.Desktop;
				}
				return $r;
			}($this));
			break;
		case 7:
			$r = (function($this) {
				var $r;
				switch( (dhx.ClientHost.os)[1] ) {
				case 5:
					$r = dhx.EnvironmentType.UnknownEnvironment;
					break;
				default:
					$r = dhx.EnvironmentType.Desktop;
				}
				return $r;
			}($this));
			break;
		}
		return $r;
	}(this));
}
{
	if(typeof document != "undefined") js.Lib.document = document;
	if(typeof window != "undefined") {
		js.Lib.window = window;
		js.Lib.window.onerror = function(msg,url,line) {
			var f = js.Lib.onerror;
			if(f == null) return false;
			return f(msg,[url + ":" + line]);
		};
	}
}
{
	var s = dhx.SizzleEngine.getSizzle();
	dhx.Sizzle = s;
	dhx.Sizzle.select = s;
}
window.requestAnimationFrame = window.requestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.oRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function(callback) { setTimeout(callback, 1000 / 60); } ;
js["XMLHttpRequest"] = window.XMLHttpRequest?XMLHttpRequest:window.ActiveXObject?function() {
	try {
		return new ActiveXObject("Msxml2.XMLHTTP");
	} catch( e ) {
		try {
			return new ActiveXObject("Microsoft.XMLHTTP");
		} catch( e1 ) {
			throw "Unable to create XMLHttpRequest object.";
		}
	}
}:(function($this) {
	var $r;
	throw "Unable to create XMLHttpRequest object.";
	return $r;
}(this));
{
	var dbits;
	var j_lm;
	var canary = 0xdeadbeefcafe;
	j_lm = (canary & 16777215) == 15715070;
	var browser = window.navigator.appName;
	if(j_lm && browser == "Microsoft Internet Explorer") dbits = 30; else if(j_lm && browser != "Netscape") dbits = 26; else dbits = 28;
	switch(dbits) {
	case 30:
		math.BigInteger.defaultAm = 2;
		break;
	case 28:
		math.BigInteger.defaultAm = 3;
		break;
	case 26:
		math.BigInteger.defaultAm = 1;
		break;
	default:
		throw "bad dbits value";
	}
	math.BigInteger.DB = dbits;
	math.BigInteger.DM = (1 << math.BigInteger.DB) - 1;
	math.BigInteger.DV = 1 << math.BigInteger.DB;
	math.BigInteger.BI_FP = 52;
	math.BigInteger.FV = Math.pow(2,math.BigInteger.BI_FP);
	math.BigInteger.F1 = math.BigInteger.BI_FP - math.BigInteger.DB;
	math.BigInteger.F2 = 2 * math.BigInteger.DB - math.BigInteger.BI_FP;
	math.BigInteger.initBiRc();
	math.BigInteger.BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
	math.BigInteger.lowprimes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509];
	math.BigInteger.lplim = 67108864 / math.BigInteger.lowprimes[math.BigInteger.lowprimes.length - 1] | 0;
}
{
	var r = window.ReportGrid?window.ReportGrid:window["ReportGrid"] = { };
	r["$"] = r["$"] || { };
	r["$"]["pk"] = r["$"]["pk"] || { };
	r["$"]["pk"]["rg_query_BaseQuery"] = r["$"]["pk"]["rg_query_BaseQuery"] || rg.query.BaseQuery;
	r["$"]["pk"]["rg_query_Query"] = r["$"]["pk"]["rg_query_Query"] || rg.query.Query;
}
rg.svg.util.SymbolCache.cache = new rg.svg.util.SymbolCache();
{
	rg.visualization.Visualizations.layoutDefault = new Hash();
	rg.visualization.Visualizations.layoutType = new Hash();
	rg.visualization.Visualizations.layoutArgs = new Hash();
	rg.visualization.Visualizations.layoutDefault.set("barchart","cartesian");
	rg.visualization.Visualizations.layoutDefault.set("funnelchart","simple");
	rg.visualization.Visualizations.layoutDefault.set("geo","simple");
	rg.visualization.Visualizations.layoutDefault.set("heatgrid","cartesian");
	rg.visualization.Visualizations.layoutDefault.set("linechart","cartesian");
	rg.visualization.Visualizations.layoutDefault.set("piechart","simple");
	rg.visualization.Visualizations.layoutDefault.set("sankey","simple");
	rg.visualization.Visualizations.layoutDefault.set("scattergraph","cartesian");
	rg.visualization.Visualizations.layoutDefault.set("streamgraph","x");
	rg.visualization.Visualizations.layoutType.set("cartesian",rg.layout.LayoutCartesian);
	rg.visualization.Visualizations.layoutType.set("simple",rg.layout.LayoutSimple);
	rg.visualization.Visualizations.layoutType.set("x",rg.layout.LayoutX);
}
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
thx.languages.En.getLanguage();
thx.cultures.EnUS.getCulture();
{
	var j;
	if(null != (j = window.JSON)) {
		thx.json.Json.nativeDecoder = j.parse;
		thx.json.Json.nativeEncoder = j.stringify;
	}
}
Constants.DIGITS_BN = "0123456789abcdefghijklmnopqrstuvwxyz";
Constants.DIGITS_BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
DateTools.DAYS_OF_MONTH = [31,28,31,30,31,30,31,31,30,31,30,31];
Dates._reparse = new EReg("^\\d{4}-\\d\\d-\\d\\d(( |T)\\d\\d:\\d\\d(:\\d\\d(\\.\\d{1,3})?)?)?Z?$","");
I32.ZERO = 0;
Ints._reparse = new EReg("^([+-])?\\d+$","");
Strings._reFormat = new EReg("{(\\d+)(?::([a-zA-Z]+))?(?:,([^\"',}]+|'[^']+'|\"[^\"]+\"))?(?:,([^\"',}]+|'[^']+'|\"[^\"]+\"))?(?:,([^\"',}]+|'[^']+'|\"[^\"]+\"))?}","m");
Strings._reCollapse = new EReg("\\s+","g");
Strings.__ucwordsPattern = new EReg("[^a-zA-Z]([a-z])","");
Strings._reInterpolateNumber = new EReg("[-+]?(?:\\d+\\.\\d+|\\d+\\.|\\.\\d+|\\d+)(?:[eE][-]?\\d+)?","");
dhx.Access.FIELD_DATA = "__dhx_data__";
dhx.Access.FIELD_EVENT = "__dhx_on__";
dhx.Access.FIELD_TRANSITION = "__dhx_transition__";
dhx.AccessAttribute.refloat = new EReg("(\\d+(?:\\.\\d+)?)","");
dhx.AccessClassed._escapePattern = new EReg("[*+?|{[()^$.# \\\\]","");
dhx.AccessStyle.refloat = new EReg("(\\d+(?:\\.\\d+)?)","");
js.Lib.onerror = null;
dhx.Dom.doc = (function() {
	var g = new dhx.Group([js.Lib.document]), gs = dhx.Selection.create([g]);
	g.parentNode = gs.parentNode = js.Lib.document.documentElement;
	return gs;
})();
dhx.Dom.selectionEngine = (function($this) {
	var $r;
	var engine;
	if(dhx.NativeSelectorEngine.supported()) engine = new dhx.NativeSelectorEngine(); else if(dhx.SizzleEngine.supported()) engine = new dhx.SizzleEngine(); else throw "no selector engine available";
	$r = engine;
	return $r;
}(this));
dhx.Namespace.prefix = (function() {
	var h = new Hash();
	h.set("svg","http://www.w3.org/2000/svg");
	h.set("xhtml","http://www.w3.org/1999/xhtml");
	h.set("xlink","http://www.w3.org/1999/xlink");
	h.set("xml","http://www.w3.org/XML/1998/namespace");
	h.set("xmlns","http://www.w3.org/2000/xmlns/");
	return h;
})();
dhx.Svg._usepage = new EReg("WebKit","").match(js.Lib.window.navigator.userAgent);
dhx.Timer.timeout = 0;
dhx.Timer.queue = null;
dhx.Timer.interval = 0;
dhx.Timer._step = dhx.Timer.step;
dhx.BaseTransition._id = 0;
dhx.BaseTransition._inheritid = 0;
rg.RGConst.BASE_URL_GEOJSON = "http://api.reportgrid.com/geo/json/";
rg.RGConst.SERVICE_RENDERING_STATIC = "http://api.reportgrid.com/services/viz/charts/up.json";
rg.RGConst.LEGACY_RENDERING_STATIC = "http://api.reportgrid.com/services/viz/charts/upandsee.{ext}";
rg.app.charts.App.lastid = 0;
rg.app.charts.App.chartsCounter = 0;
rg.app.charts.App.chartsLoaded = 0;
rg.axis.AxisTime.snapping = { minute : [{ to : 10, s : 1},{ to : 20, s : 2},{ to : 30, s : 5},{ to : 60, s : 10},{ to : 120, s : 30},{ to : 240, s : 60},{ to : 960, s : 240}], minutetop : 480, hour : [{ to : 12, s : 1},{ to : 24, s : 6},{ to : 60, s : 12},{ to : 240, s : 24},{ to : 480, s : 48},{ to : 960, s : 120}], hourtop : 240, month : [{ to : 13, s : 1},{ to : 25, s : 2},{ to : 49, s : 4},{ to : 73, s : 6}], monthtop : 12, year : [{ to : 10, s : 1},{ to : 20, s : 2},{ to : 50, s : 5}], yeartop : 10};
rg.factory.FactoryLayout.LIMIT_WIDTH = 10;
rg.factory.FactoryLayout.LIMIT_HEIGHT = 10;
rg.factory.FactoryLayout.DEFAULT_WIDTH = 400;
rg.factory.FactoryLayout.DEFAULT_HEIGHT = 300;
rg.html.chart.PivotTable.defaultColorStart = new thx.color.Hsl(210,1,1);
rg.html.chart.PivotTable.defaultColorEnd = new thx.color.Hsl(210,1,0.5);
rg.html.widget.DownloaderMenu.DEFAULT_FORMATS = ["png","jpg","pdf"];
rg.html.widget.DownloaderMenu.DEFAULT_TITLE = "Download";
rg.html.widget.Logo.registry = new Hash();
rg.html.widget.Logo._id = 0;
rg.html.widget.Logo.LOGO_WIDTH = 194;
rg.html.widget.Logo.LOGO_HEIGHT = 29;
rg.html.widget.Tooltip.DEFAULT_DISTANCE = 0;
rg.html.widget.Tooltip.DEFAULT_ANCHOR = "bottomright";
rg.info.InfoPivotTable.defaultStartColor = new thx.color.Hsl(210,1,1);
rg.info.InfoPivotTable.defaultEndColor = new thx.color.Hsl(210,1,0.5);
rg.interactive.RGDownloader.ALLOWED_FORMATS = ["pdf","ps","png","jpg","svg"];
rg.interactive.RGLegacyRenderer.FORMAT = "jpg";
rg.interactive.RGLegacyRenderer.nextframeid = 0;
rg.layout.LayoutCartesian.ALT_RIGHT = 20;
rg.layout.LayoutCartesian.ALT_LEFT = 20;
rg.layout.LayoutCartesian.ALT_TOP = 8;
rg.layout.LayoutCartesian.ALT_BOTTOM = 8;
rg.layout.LayoutCartesian.REYAXIS = new EReg("^y(\\d+)$","");
rg.layout.LayoutCartesian.REYINDEX = new EReg("^y(\\d+)","");
rg.layout.LayoutCartesian.REYTITLE = new EReg("^y(\\d+)title$","");
rg.layout.LayoutX.ALT_RIGHT = 20;
rg.layout.LayoutX.ALT_LEFT = 20;
rg.layout.LayoutX.ALT_TOP = 8;
rg.layout.LayoutX.ALT_BOTTOM = 8;
rg.svg.chart.Coords.retransform = new EReg("translate\\(\\s*(\\d+(?:\\.\\d+)?)\\s*(?:[, ]\\s*(\\d+(?:\\.\\d+)?)\\s*)?\\)","");
rg.svg.chart.StreamGraph.vid = 0;
rg.util.Decrypt.modulus = "00:ca:a7:37:07:b0:26:63:cb:f1:37:9d:e9:cc:c1:bd:f1:57:f5:90:72:4d:74:e2:5f:33:df:6c:c4:e4:7f:95:3c:87:89:ed:3c:60:cc:b0:15:f9:ad:57:77:52:4b:25:9b:c8:f9:d0:8a:b8:0a:ab:17:3d:7c:cf:1d:19:a3:8c:43:9b:ee:5b:2e:9e:45:18:b3:97:2a:91:c2:90:c2:1e:49:a3:5e:b1:48:09:1c:ee:06:b9:6e:ec:22:e6:2d:06:b8:b4:22:5f:4d:5e:81:6a:91:13:30:5d:6c:b5:7c:cc:fa:47:dc:8e:b4:f3:fd:0a:6e:d2:f8:09:3c:b1:c2:90:19";
rg.util.Decrypt.publicExponent = "3";
rg.util.Periodicity.validGroupValues = ["hour","day","week","month","year"];
rg.util.Properties.TIME_TOKEN = "time:";
rg.util.RGStrings.range = new EReg("(\\d+(?:\\.\\d+)?|\\.\\d+)?-(\\d+(?:\\.\\d+|\\.\\d+)?)?","");
rg.visualization.Visualizations.html = ["pivottable","leaderboard"];
rg.visualization.Visualizations.svg = ["barchart","geo","funnelchart","heatgrid","linechart","piechart","scattergraph","streamgraph","sankey"];
rg.visualization.Visualizations.visualizations = rg.visualization.Visualizations.svg.concat(rg.visualization.Visualizations.html);
rg.visualization.Visualizations.layouts = ["simple","cartesian","x"];
thx.color.Colors._reParse = new EReg("^(?:(hsl|rgb|rgba|cmyk)\\(([^)]+)\\))|(?:(?:0x|#)([a-f0-9]{3,6}))$","i");
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
thx.math.Const.TWO_PI = 6.283185307179586477;
thx.math.Const.TO_DEGREE = 57.29577951308232088;
thx.math.Const.TO_RADIAN = 0.01745329251994329577;
thx.math.Const.LN10 = 2.302585092994046;
thx.svg.LineInternals.arcOffset = -Math.PI / 2;
thx.svg.LineInternals.arcMax = 2 * Math.PI - 1e-6;
thx.svg.LineInternals._lineBasisBezier1 = [0,2 / 3,1 / 3,0];
thx.svg.LineInternals._lineBasisBezier2 = [0,1 / 3,2 / 3,0];
thx.svg.LineInternals._lineBasisBezier3 = [0,1 / 6,2 / 3,1 / 6];
thx.svg.Symbol.sqrt3 = Math.sqrt(3);
thx.svg.Symbol.tan30 = Math.tan(30 * Math.PI / 180);
rg.app.charts.JSBridge.main();
})()