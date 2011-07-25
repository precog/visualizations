$estr = function() { return js.Boot.__string_rec(this,''); }
EReg = function(r,opt) {
	if( r === $_ ) return;
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
}
EReg.__name__ = ["EReg"];
EReg.prototype.r = null;
EReg.prototype.match = function(s) {
	this.r.m = this.r.exec(s);
	this.r.s = s;
	this.r.l = RegExp.leftContext;
	this.r.r = RegExp.rightContext;
	return this.r.m != null;
}
EReg.prototype.matched = function(n) {
	return this.r.m != null && n >= 0 && n < this.r.m.length?this.r.m[n]:(function($this) {
		var $r;
		throw "EReg::matched";
		return $r;
	}(this));
}
EReg.prototype.matchedLeft = function() {
	if(this.r.m == null) throw "No string matched";
	if(this.r.l == null) return this.r.s.substr(0,this.r.m.index);
	return this.r.l;
}
EReg.prototype.matchedRight = function() {
	if(this.r.m == null) throw "No string matched";
	if(this.r.r == null) {
		var sz = this.r.m.index + this.r.m[0].length;
		return this.r.s.substr(sz,this.r.s.length - sz);
	}
	return this.r.r;
}
EReg.prototype.matchedPos = function() {
	if(this.r.m == null) throw "No string matched";
	return { pos : this.r.m.index, len : this.r.m[0].length};
}
EReg.prototype.split = function(s) {
	var d = "#__delim__#";
	return s.replace(this.r,d).split(d);
}
EReg.prototype.replace = function(s,by) {
	return s.replace(this.r,by);
}
EReg.prototype.customReplace = function(s,f) {
	var buf = new StringBuf();
	while(true) {
		if(!this.match(s)) break;
		buf.b[buf.b.length] = this.matchedLeft();
		buf.b[buf.b.length] = f(this);
		s = this.matchedRight();
	}
	buf.b[buf.b.length] = s;
	return buf.b.join("");
}
EReg.prototype.__class__ = EReg;
Strings = function() { }
Strings.__name__ = ["Strings"];
Strings.format = function(pattern,values,nullstring,culture) {
	if(nullstring == null) nullstring = "null";
	return (Strings.formatf(pattern,nullstring,culture))(values);
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
	return buf.b.join("");
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
Strings.prototype.__class__ = Strings;
if(typeof thx=='undefined') thx = {}
if(!thx.color) thx.color = {}
thx.color.Rgb = function(r,g,b) {
	if( r === $_ ) return;
	this.red = Ints.clamp(r,0,255);
	this.green = Ints.clamp(g,0,255);
	this.blue = Ints.clamp(b,0,255);
}
thx.color.Rgb.__name__ = ["thx","color","Rgb"];
thx.color.Rgb.fromFloats = function(r,g,b) {
	return new thx.color.Rgb(Ints.interpolate(r,0,255),Ints.interpolate(g,0,255),Ints.interpolate(b,0,255));
}
thx.color.Rgb.fromInt = function(v) {
	return new thx.color.Rgb(v >> 16 & 255,v >> 8 & 255,v & 255);
}
thx.color.Rgb.equals = function(a,b) {
	return a.red == b.red && a.green == b.green && a.blue == b.blue;
}
thx.color.Rgb.darker = function(color,t,equation) {
	var interpolator = Ints.interpolatef(0,255,equation);
	t /= 255;
	return new thx.color.Rgb(interpolator(t * color.red),interpolator(t * color.green),interpolator(t * color.blue));
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
thx.color.Rgb.prototype.blue = null;
thx.color.Rgb.prototype.green = null;
thx.color.Rgb.prototype.red = null;
thx.color.Rgb.prototype["int"] = function() {
	return (this.red & 255) << 16 | (this.green & 255) << 8 | this.blue & 255;
}
thx.color.Rgb.prototype.hex = function(prefix) {
	if(prefix == null) prefix = "";
	return prefix + StringTools.hex(this.red,2) + StringTools.hex(this.green,2) + StringTools.hex(this.blue,2);
}
thx.color.Rgb.prototype.toCss = function() {
	return this.hex("#");
}
thx.color.Rgb.prototype.toRgbString = function() {
	return "rgb(" + this.red + "," + this.green + "," + this.blue + ")";
}
thx.color.Rgb.prototype.toString = function() {
	return this.toRgbString();
}
thx.color.Rgb.prototype.__class__ = thx.color.Rgb;
thx.color.Cmyk = function(cyan,magenta,yellow,black) {
	if( cyan === $_ ) return;
	thx.color.Rgb.call(this,Ints.interpolate(Floats.normalize(1 - cyan - black),0,255,null),Ints.interpolate(Floats.normalize(1 - magenta - black),0,255,null),Ints.interpolate(Floats.normalize(1 - yellow - black),0,255,null));
	this.cyan = Floats.normalize(cyan);
	this.magenta = Floats.normalize(magenta);
	this.yellow = Floats.normalize(yellow);
	this.black = Floats.normalize(black);
}
thx.color.Cmyk.__name__ = ["thx","color","Cmyk"];
thx.color.Cmyk.__super__ = thx.color.Rgb;
for(var k in thx.color.Rgb.prototype ) thx.color.Cmyk.prototype[k] = thx.color.Rgb.prototype[k];
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
	var v = t * color.black;
	return new thx.color.Cmyk(color.cyan,color.magenta,color.yellow,Floats.interpolate(v,0,1,equation));
}
thx.color.Cmyk.interpolate = function(a,b,t,equation) {
	return new thx.color.Cmyk(Floats.interpolate(t,a.cyan,b.cyan,equation),Floats.interpolate(t,a.magenta,b.magenta,equation),Floats.interpolate(t,a.yellow,b.yellow,equation),Floats.interpolate(t,a.black,b.black,equation));
}
thx.color.Cmyk.prototype.black = null;
thx.color.Cmyk.prototype.cyan = null;
thx.color.Cmyk.prototype.magenta = null;
thx.color.Cmyk.prototype.yellow = null;
thx.color.Cmyk.prototype.toCmykString = function() {
	return "cmyk(" + this.cyan + "," + this.magenta + "," + this.yellow + "," + this.black + ")";
}
thx.color.Cmyk.prototype.__class__ = thx.color.Cmyk;
Dynamics = function() { }
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
		default:
			return (function($this) {
				var $r;
				throw new thx.error.Error("Unsupported type format: {0}",null,Type["typeof"](v),{ fileName : "Dynamics.hx", lineNumber : 42, className : "Dynamics", methodName : "formatf"});
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
	if(!((Std["is"](a,Float) || Std["is"](a,Int)) && (Std["is"](b,Float) || Std["is"](b,Int))) && !Type.enumEq(ta,tb)) throw new thx.error.Error("arguments a ({0}) and b ({0}) have different types",[a,b],null,{ fileName : "Dynamics.hx", lineNumber : 57, className : "Dynamics", methodName : "interpolatef"});
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
			throw new thx.error.Error("cannot interpolate on instances of {0}",null,name,{ fileName : "Dynamics.hx", lineNumber : 75, className : "Dynamics", methodName : "interpolatef"});
		}
		break;
	default:
		throw new thx.error.Error("cannot interpolate on functions/enums/unknown",null,null,{ fileName : "Dynamics.hx", lineNumber : 77, className : "Dynamics", methodName : "interpolatef"});
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
	if(!Types.sameType(a,b)) throw new thx.error.Error("cannot compare 2 different types",null,null,{ fileName : "Dynamics.hx", lineNumber : 129, className : "Dynamics", methodName : "compare"});
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
Dynamics.clone = function(v) {
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
			var o = Type.createEmptyInstance(c);
			var _g = 0, _g1 = Reflect.fields(v);
			while(_g < _g1.length) {
				var field = _g1[_g];
				++_g;
				o[field] = Dynamics.clone(Reflect.field(v,field));
			}
			return o;
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
		throw new thx.error.Error("Unable to compare values: {0} and {1}",[a,b],null,{ fileName : "Dynamics.hx", lineNumber : 364, className : "Dynamics", methodName : "same"});
		return $r;
	}(this));
}
Dynamics.number = function(v) {
	return Number(v);
}
Dynamics.prototype.__class__ = Dynamics;
if(typeof rg=='undefined') rg = {}
if(!rg.layout) rg.layout = {}
rg.layout.Frame = function(p) {
	if( p === $_ ) return;
	this.x = this.y = this.width = this.height = 0;
}
rg.layout.Frame.__name__ = ["rg","layout","Frame"];
rg.layout.Frame.prototype.x = null;
rg.layout.Frame.prototype.y = null;
rg.layout.Frame.prototype.width = null;
rg.layout.Frame.prototype.height = null;
rg.layout.Frame.prototype.change = function() {
}
rg.layout.Frame.prototype.setLayout = function(x,y,width,height) {
	if(this.x == x && this.y == y && this.width == width && this.height == height) return;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.change();
}
rg.layout.Frame.prototype.toString = function() {
	return "[x: " + this.x + ", y: " + this.y + ", width: " + this.width + ", height: " + this.height + "]";
}
rg.layout.Frame.prototype.__class__ = rg.layout.Frame;
if(!rg.query) rg.query = {}
rg.query.Transform = function() { }
rg.query.Transform.__name__ = ["rg","query","Transform"];
rg.query.Transform.timeSeries = function(query,label) {
	var t = rg.query.Transform.arrayTimeSeries(query,function() {
		return [label];
	});
	return function(data) {
		return t([data]);
	};
}
rg.query.Transform.arrayTimeSeries = function(query,labels) {
	return function(data) {
		var start = null != query.time.start?query.time.start.getTime():rg.util.Periodicity.minForPeriodicityInSeries(data), end = null != query.time.end?query.time.end.getTime():rg.util.Periodicity.maxForPeriodicityInSeries(data), minx = Math.POSITIVE_INFINITY, maxx = Math.NEGATIVE_INFINITY, miny = Math.POSITIVE_INFINITY, maxy = Math.NEGATIVE_INFINITY;
		var labels1 = labels(), result = [], range = rg.util.Periodicity.range(start,end,query.time.periodicity), values, d, y;
		var _g1 = 0, _g = labels1.length;
		while(_g1 < _g) {
			var i = _g1++;
			values = [];
			d = null == data[i]?[]:data[i].data;
			var map = new Hash();
			var _g2 = 0;
			while(_g2 < d.length) {
				var v = d[_g2];
				++_g2;
				map.set("" + v[0],v[1]);
			}
			var _g2 = 0;
			while(_g2 < range.length) {
				var x = range[_g2];
				++_g2;
				y = map.get("" + x);
				if(null == y) y = 0.0;
				if(x < minx) minx = x;
				if(x > maxx) maxx = x;
				if(y < miny) miny = y;
				if(y > maxy) maxy = y;
				values.push({ x : x, y : y});
			}
			result.push({ label : labels1[i], values : values});
		}
		return { minx : minx, maxx : maxx, miny : miny, maxy : maxy, data : result};
	};
}
rg.query.Transform.prototype.__class__ = rg.query.Transform;
List = function(p) {
	if( p === $_ ) return;
	this.length = 0;
}
List.__name__ = ["List"];
List.prototype.h = null;
List.prototype.q = null;
List.prototype.length = null;
List.prototype.add = function(item) {
	var x = [item];
	if(this.h == null) this.h = x; else this.q[1] = x;
	this.q = x;
	this.length++;
}
List.prototype.push = function(item) {
	var x = [item,this.h];
	this.h = x;
	if(this.q == null) this.q = x;
	this.length++;
}
List.prototype.first = function() {
	return this.h == null?null:this.h[0];
}
List.prototype.last = function() {
	return this.q == null?null:this.q[0];
}
List.prototype.pop = function() {
	if(this.h == null) return null;
	var x = this.h[0];
	this.h = this.h[1];
	if(this.h == null) this.q = null;
	this.length--;
	return x;
}
List.prototype.isEmpty = function() {
	return this.h == null;
}
List.prototype.clear = function() {
	this.h = null;
	this.q = null;
	this.length = 0;
}
List.prototype.remove = function(v) {
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
List.prototype.iterator = function() {
	return { h : this.h, hasNext : function() {
		return this.h != null;
	}, next : function() {
		if(this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		return x;
	}};
}
List.prototype.toString = function() {
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	s.b[s.b.length] = "{";
	while(l != null) {
		if(first) first = false; else s.b[s.b.length] = ", ";
		s.b[s.b.length] = Std.string(l[0]);
		l = l[1];
	}
	s.b[s.b.length] = "}";
	return s.b.join("");
}
List.prototype.join = function(sep) {
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	while(l != null) {
		if(first) first = false; else s.b[s.b.length] = sep;
		s.b[s.b.length] = l[0];
		l = l[1];
	}
	return s.b.join("");
}
List.prototype.filter = function(f) {
	var l2 = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		if(f(v)) l2.add(v);
	}
	return l2;
}
List.prototype.map = function(f) {
	var b = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		b.add(f(v));
	}
	return b;
}
List.prototype.__class__ = List;
if(!rg.svg) rg.svg = {}
rg.svg.SvgPanel = function(frame) {
	if( frame === $_ ) return;
	this.frame = frame;
	frame.change = $closure(this,"reframe");
	this.onResize = new hxevents.Notifier();
	this._layers = [];
}
rg.svg.SvgPanel.__name__ = ["rg","svg","SvgPanel"];
rg.svg.SvgPanel.prototype.frame = null;
rg.svg.SvgPanel.prototype.svg = null;
rg.svg.SvgPanel.prototype.parent = null;
rg.svg.SvgPanel.prototype.onResize = null;
rg.svg.SvgPanel.prototype._layers = null;
rg.svg.SvgPanel.prototype.addLayer = function(layer) {
	this._layers.remove(layer);
	this._layers.push(layer);
}
rg.svg.SvgPanel.prototype.removeLayer = function(layer) {
	this._layers.remove(layer);
}
rg.svg.SvgPanel.prototype.setParent = function(v) {
	if(null != this.svg) this.svg.remove();
	if(null == v) return;
	this.init(v.svg);
}
rg.svg.SvgPanel.prototype.init = function(container) {
	this.svg = container.append("svg:g").attr("class").string("panel").attr("transform").string("translate(" + this.frame.x + "," + this.frame.y + ")");
	this.svg.append("svg:rect").attr("class").string("panel-frame").attr("width")["float"](this.frame.width).attr("height")["float"](this.frame.height);
}
rg.svg.SvgPanel.prototype.redraw = function() {
	this._layers.forEach(function(l,i) {
		l.redraw();
	});
}
rg.svg.SvgPanel.prototype.reframe = function() {
	this.svg.attr("transform").string("translate(" + this.frame.x + "," + this.frame.y + ")").select(".panel-frame").attr("width")["float"](this.frame.width).attr("height")["float"](this.frame.height);
	this.redraw();
	this.onResize.dispatch();
}
rg.svg.SvgPanel.prototype.__class__ = rg.svg.SvgPanel;
if(!thx.svg) thx.svg = {}
thx.svg.Diagonal = function(p) {
	if( p === $_ ) return;
	this._projection = thx.svg.Diagonal.diagonalProjection;
}
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
thx.svg.Diagonal.prototype._source = null;
thx.svg.Diagonal.prototype._target = null;
thx.svg.Diagonal.prototype._projection = null;
thx.svg.Diagonal.prototype.diagonal = function(d,i) {
	var p0 = this._source(d,i), p3 = this._target(d,i), m = (p0[1] + p3[1]) / 2, p = [p0,[p0[0],m],[p3[0],m],p3];
	var p2 = p.map(this._projection);
	return "M" + p2[0][0] + "," + p2[0][1] + "C" + p2[1][0] + "," + p2[1][1] + " " + p2[2][0] + "," + p2[2][1] + " " + p2[3][0] + "," + p2[3][1];
}
thx.svg.Diagonal.prototype.getSource = function() {
	return this._source;
}
thx.svg.Diagonal.prototype.sourcef = function(x) {
	this._source = x;
	return this;
}
thx.svg.Diagonal.prototype.getTarget = function() {
	return this._target;
}
thx.svg.Diagonal.prototype.targetf = function(x) {
	this._target = x;
	return this;
}
thx.svg.Diagonal.prototype.getProjection = function() {
	return this._projection;
}
thx.svg.Diagonal.prototype.projection = function(x) {
	this._projection = x;
	return this;
}
thx.svg.Diagonal.prototype.__class__ = thx.svg.Diagonal;
if(!thx.js) thx.js = {}
thx.js.Access = function(selection) {
	if( selection === $_ ) return;
	this.selection = selection;
}
thx.js.Access.__name__ = ["thx","js","Access"];
thx.js.Access.getData = function(d) {
	return Reflect.field(d,"__data__");
}
thx.js.Access.setData = function(d,v) {
	d["__data__"] = v;
}
thx.js.Access.emptyHtmlDom = function(v) {
	return { __data__ : v};
}
thx.js.Access.eventName = function(event) {
	return "__on" + event;
}
thx.js.Access.getEvent = function(d,event) {
	return Reflect.field(d,"__on" + event);
}
thx.js.Access.hasEvent = function(d,event) {
	return null != Reflect.field(d,"__on" + event);
}
thx.js.Access.addEvent = function(d,event,listener) {
	d["__on" + event] = listener;
}
thx.js.Access.removeEvent = function(d,event) {
	Reflect.deleteField(d,"__on" + event);
}
thx.js.Access.setTransition = function(d,id) {
	if(Reflect.hasField(d,"__transition__")) Reflect.field(d,"__transition__").owner = id; else d["__transition__"] = { owner : id};
}
thx.js.Access.getTransition = function(d) {
	return Reflect.field(d,"__transition__");
}
thx.js.Access.resetTransition = function(d) {
	Reflect.deleteField(d,"__transition__");
}
thx.js.Access.prototype.selection = null;
thx.js.Access.prototype._that = function() {
	return this.selection;
}
thx.js.Access.prototype.__class__ = thx.js.Access;
thx.js.AccessAttribute = function(name,selection) {
	if( name === $_ ) return;
	thx.js.Access.call(this,selection);
	this.name = name;
	this.qname = thx.xml.Namespace.qualify(name);
}
thx.js.AccessAttribute.__name__ = ["thx","js","AccessAttribute"];
thx.js.AccessAttribute.__super__ = thx.js.Access;
for(var k in thx.js.Access.prototype ) thx.js.AccessAttribute.prototype[k] = thx.js.Access.prototype[k];
thx.js.AccessAttribute.prototype.name = null;
thx.js.AccessAttribute.prototype.qname = null;
thx.js.AccessAttribute.prototype.get = function() {
	var n = this.name, q = this.qname;
	return this.selection.firstNode(function(node) {
		return q == null?node.getAttribute(n):node.getAttributeNS(q.space,q.local);
	});
}
thx.js.AccessAttribute.prototype.getFloat = function() {
	var v = this.get();
	if(thx.js.AccessAttribute.refloat.match(v)) return Std.parseFloat(thx.js.AccessAttribute.refloat.matched(1)); else return Math.NaN;
}
thx.js.AccessAttribute.prototype.remove = function() {
	if(null == this.qname) {
		var n = this.name;
		this.selection.eachNode(function(node,i) {
			node.removeAttribute(n);
		});
	} else {
		var q = this.qname;
		this.selection.eachNode(function(node,i) {
			node.removeAttributeNS(q.space,q.local);
		});
	}
	return this.selection;
}
thx.js.AccessAttribute.prototype.string = function(v) {
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
thx.js.AccessAttribute.prototype["float"] = function(v) {
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
thx.js.AccessAttribute.prototype.__class__ = thx.js.AccessAttribute;
thx.js.AccessDataAttribute = function(name,selection) {
	if( name === $_ ) return;
	thx.js.AccessAttribute.call(this,name,selection);
}
thx.js.AccessDataAttribute.__name__ = ["thx","js","AccessDataAttribute"];
thx.js.AccessDataAttribute.__super__ = thx.js.AccessAttribute;
for(var k in thx.js.AccessAttribute.prototype ) thx.js.AccessDataAttribute.prototype[k] = thx.js.AccessAttribute.prototype[k];
thx.js.AccessDataAttribute.prototype.stringf = function(v) {
	if(null == this.qname) {
		var n = this.name;
		this.selection.eachNode(function(node,i) {
			var s = v(Reflect.field(node,"__data__"),i);
			if(null == s) node.removeAttribute(n); else node.setAttribute(n,s);
		});
	} else {
		var q = this.qname;
		this.selection.eachNode(function(node,i) {
			var s = v(Reflect.field(node,"__data__"),i);
			if(null == s) node.removeAttributeNS(n); else node.setAttributeNS(q.space,q.local,s);
		});
	}
	return this.selection;
}
thx.js.AccessDataAttribute.prototype.floatf = function(v) {
	if(null == this.qname) {
		var n = this.name;
		this.selection.eachNode(function(node,i) {
			var s = v(Reflect.field(node,"__data__"),i);
			if(null == s) node.removeAttribute(n); else node.setAttribute(n,"" + s);
		});
	} else {
		var q = this.qname;
		this.selection.eachNode(function(node,i) {
			var s = v(Reflect.field(node,"__data__"),i);
			if(null == s) node.removeAttributeNS(n); else node.setAttributeNS(q.space,q.local,"" + s);
		});
	}
	return this.selection;
}
thx.js.AccessDataAttribute.prototype.data = function() {
	return this.stringf(function(d,_) {
		return "" + d;
	});
}
thx.js.AccessDataAttribute.prototype.__class__ = thx.js.AccessDataAttribute;
Bools = function() { }
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
Bools.prototype.__class__ = Bools;
IntIter = function(min,max) {
	if( min === $_ ) return;
	this.min = min;
	this.max = max;
}
IntIter.__name__ = ["IntIter"];
IntIter.prototype.min = null;
IntIter.prototype.max = null;
IntIter.prototype.hasNext = function() {
	return this.min < this.max;
}
IntIter.prototype.next = function() {
	return this.min++;
}
IntIter.prototype.__class__ = IntIter;
thx.js.AccessHtml = function(selection) {
	if( selection === $_ ) return;
	thx.js.Access.call(this,selection);
}
thx.js.AccessHtml.__name__ = ["thx","js","AccessHtml"];
thx.js.AccessHtml.__super__ = thx.js.Access;
for(var k in thx.js.Access.prototype ) thx.js.AccessHtml.prototype[k] = thx.js.Access.prototype[k];
thx.js.AccessHtml.prototype.get = function() {
	return this.selection.firstNode(function(node) {
		return node.innerHTML;
	});
}
thx.js.AccessHtml.prototype.string = function(v) {
	this.selection.eachNode(function(node,i) {
		node.innerHTML = v;
	});
	return this.selection;
}
thx.js.AccessHtml.prototype.clear = function() {
	this.selection.eachNode(function(node,i) {
		node.innerHTML = "";
	});
	return this.selection;
}
thx.js.AccessHtml.prototype["float"] = function(v) {
	this.selection.eachNode(function(node,i) {
		node.innerHTML = "" + v;
	});
	return this.selection;
}
thx.js.AccessHtml.prototype.__class__ = thx.js.AccessHtml;
thx.js.AccessDataHtml = function(selection) {
	if( selection === $_ ) return;
	thx.js.AccessHtml.call(this,selection);
}
thx.js.AccessDataHtml.__name__ = ["thx","js","AccessDataHtml"];
thx.js.AccessDataHtml.__super__ = thx.js.AccessHtml;
for(var k in thx.js.AccessHtml.prototype ) thx.js.AccessDataHtml.prototype[k] = thx.js.AccessHtml.prototype[k];
thx.js.AccessDataHtml.prototype.stringf = function(v) {
	this.selection.eachNode(function(node,i) {
		var s = v(Reflect.field(node,"__data__"),i);
		if(null == s) s = "";
		node.innerHTML = s;
	});
	return this.selection;
}
thx.js.AccessDataHtml.prototype.floatf = function(v) {
	this.selection.eachNode(function(node,i) {
		var f = v(Reflect.field(node,"__data__"),i);
		if(null == f) node.innerHTML = ""; else node.innerHTML = "" + f;
	});
	return this.selection;
}
thx.js.AccessDataHtml.prototype.data = function() {
	return this.stringf(function(d,_) {
		return "" + d;
	});
}
thx.js.AccessDataHtml.prototype.__class__ = thx.js.AccessDataHtml;
rg.svg.ISvgEffect = function() { }
rg.svg.ISvgEffect.__name__ = ["rg","svg","ISvgEffect"];
rg.svg.ISvgEffect.prototype.appendTo = null;
rg.svg.ISvgEffect.prototype.__class__ = rg.svg.ISvgEffect;
if(!rg.svg.effects) rg.svg.effects = {}
rg.svg.effects.DropShadow = function(opacity,dx,dy,blur) {
	if( opacity === $_ ) return;
	if(blur == null) blur = 1.0;
	if(dx == null) dx = 1.5;
	if(opacity == null) opacity = 0.4;
	this.opacity = opacity;
	this.dx = dx;
	this.dy = null == dy?3.0 / 4 * dx:dy;
	this.blur = blur;
}
rg.svg.effects.DropShadow.__name__ = ["rg","svg","effects","DropShadow"];
rg.svg.effects.DropShadow.prototype.opacity = null;
rg.svg.effects.DropShadow.prototype.dx = null;
rg.svg.effects.DropShadow.prototype.dy = null;
rg.svg.effects.DropShadow.prototype.blur = null;
rg.svg.effects.DropShadow.prototype.appendTo = function(container,id) {
	var filter = container.append("svg:filter").attr("x").string("-20%").attr("y").string("-20%").attr("width").string("140%").attr("height").string("140%").attr("id").string(id);
	filter.append("svg:feGaussianBlur").attr("in").string("SourceAlpha").attr("stdDeviation")["float"](this.blur).attr("result").string("dsblur");
	filter.append("svg:feColorMatrix").attr("in").string("dsblur").attr("type").string("matrix").attr("values").string("1 0 0 0 0 " + "0 1 0 0 0 " + "0 0 1 0 0 " + "0 0 0 " + this.opacity + " 0").attr("result").string("dscolor");
	filter.append("svg:feOffset").attr("in").string("dscolor").attr("dx")["float"](this.dx).attr("dy")["float"](this.dy).attr("result").string("dsoffset");
	var merge = filter.append("svg:feMerge");
	merge.append("svg:feMergeNode").attr("in").string("dsoffset");
	merge.append("svg:feMergeNode").attr("in").string("SourceGraphic");
}
rg.svg.effects.DropShadow.prototype.__class__ = rg.svg.effects.DropShadow;
rg.svg.effects.DropShadow.__interfaces__ = [rg.svg.ISvgEffect];
if(typeof js=='undefined') js = {}
js.Lib = function() { }
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
js.Lib.prototype.__class__ = js.Lib;
thx.js.Group = function(nodes) {
	if( nodes === $_ ) return;
	this.nodes = nodes;
}
thx.js.Group.__name__ = ["thx","js","Group"];
thx.js.Group.prototype.parentNode = null;
thx.js.Group.prototype.nodes = null;
thx.js.Group.prototype.each = function(f) {
	var _g1 = 0, _g = this.nodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(null != this.nodes[i]) f(this.nodes[i],i);
	}
}
thx.js.Group.prototype.iterator = function() {
	return this.nodes.iterator();
}
thx.js.Group.prototype.get = function(i) {
	return this.nodes[i];
}
thx.js.Group.prototype.count = function() {
	return this.nodes.length;
}
thx.js.Group.prototype.push = function(node) {
	this.nodes.push(node);
}
thx.js.Group.prototype.sort = function(comparator) {
	this.nodes.sort(comparator);
}
thx.js.Group.prototype.__class__ = thx.js.Group;
thx.js.BaseSelection = function(groups) {
	if( groups === $_ ) return;
	this.groups = groups;
}
thx.js.BaseSelection.__name__ = ["thx","js","BaseSelection"];
thx.js.BaseSelection.bindJoin = function(join,group,groupData,update,enter,exit) {
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
}
thx.js.BaseSelection.bind = function(group,groupData,update,enter,exit) {
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
			enterHtmlDoms[i] = { __data__ : nodeData};
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
}
thx.js.BaseSelection.prototype.parentNode = null;
thx.js.BaseSelection.prototype.groups = null;
thx.js.BaseSelection.prototype.select = function(selector) {
	return this._select(function(el) {
		return thx.js.Dom.selectionEngine.select(selector,el);
	});
}
thx.js.BaseSelection.prototype.selectAll = function(selector) {
	return this._selectAll(function(el) {
		return thx.js.Dom.selectionEngine.selectAll(selector,el);
	});
}
thx.js.BaseSelection.prototype._this = function() {
	return this;
}
thx.js.BaseSelection.prototype.append = function(name) {
	var qname = thx.xml.Namespace.qualify(name);
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
thx.js.BaseSelection.prototype.remove = function() {
	return this.eachNode(function(node,i) {
		var parent = node.parentNode;
		if(null != parent) parent.removeChild(node);
	});
}
thx.js.BaseSelection.prototype.eachNode = function(f) {
	var _g = 0, _g1 = this.groups;
	while(_g < _g1.length) {
		var group = _g1[_g];
		++_g;
		group.each(f);
	}
	return this;
}
thx.js.BaseSelection.prototype.insert = function(name,before,beforeSelector) {
	var qname = thx.xml.Namespace.qualify(name);
	var insertDom = function(node) {
		var n = js.Lib.document.createElement(name);
		node.insertBefore(n,null != before?before:thx.js.Dom.select(beforeSelector).node());
		return n;
	};
	var insertNsDom = function(node) {
		var n = js.Lib.document.createElementNS(qname.space,qname.local);
		node.insertBefore(n,null != before?before:thx.js.Dom.select(beforeSelector).node());
		return n;
	};
	return this._select(null == qname?insertDom:insertNsDom);
}
thx.js.BaseSelection.prototype.sortNode = function(comparator) {
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
	return this;
}
thx.js.BaseSelection.prototype.firstNode = function(f) {
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
thx.js.BaseSelection.prototype.node = function() {
	return this.firstNode(function(n) {
		return n;
	});
}
thx.js.BaseSelection.prototype.empty = function() {
	return null == this.firstNode(function(n) {
		return n;
	});
}
thx.js.BaseSelection.prototype.filterNode = function(f) {
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
	return this.createSelection(subgroups);
}
thx.js.BaseSelection.prototype.onNode = function(type,listener,capture) {
	if(capture == null) capture = false;
	var i = type.indexOf("."), typo = i < 0?type:type.substr(0,i);
	return this.eachNode(function(n,i1) {
		var l = function(e) {
			var o = thx.js.Dom.event;
			thx.js.Dom.event = e;
			try {
				listener(n,i1);
			} catch( e1 ) {
			}
			thx.js.Dom.event = o;
		};
		if(null != Reflect.field(n,"__on" + type)) {
			n.removeEventListener(typo,Reflect.field(n,"__on" + type),capture);
			Reflect.deleteField(n,"__on" + type);
		}
		if(null != listener) {
			n["__on" + type] = l;
			n.addEventListener(typo,l,capture);
		}
	});
}
thx.js.BaseSelection.prototype.createSelection = function(groups) {
	return (function($this) {
		var $r;
		throw new thx.error.AbstractMethod({ fileName : "Selection.hx", lineNumber : 526, className : "thx.js.BaseSelection", methodName : "createSelection"});
		return $r;
	}(this));
}
thx.js.BaseSelection.prototype._select = function(selectf) {
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
				subgroup.parentNode = node1;
				subgroup.nodes.push(subnode = selectf(node1));
				if(null != subnode) subnode["__data__"] = Reflect.field(node1,"__data__");
			} else subgroup.nodes.push(null);
		}
	}
	return this.createSelection(subgroups);
}
thx.js.BaseSelection.prototype._selectAll = function(selectallf) {
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
	return this.createSelection(subgroups);
}
thx.js.BaseSelection.prototype.__class__ = thx.js.BaseSelection;
thx.js.UnboundSelection = function(groups) {
	if( groups === $_ ) return;
	thx.js.BaseSelection.call(this,groups);
}
thx.js.UnboundSelection.__name__ = ["thx","js","UnboundSelection"];
thx.js.UnboundSelection.__super__ = thx.js.BaseSelection;
for(var k in thx.js.BaseSelection.prototype ) thx.js.UnboundSelection.prototype[k] = thx.js.BaseSelection.prototype[k];
thx.js.UnboundSelection.prototype.html = function() {
	return new thx.js.AccessHtml(this);
}
thx.js.UnboundSelection.prototype.text = function() {
	return new thx.js.AccessText(this);
}
thx.js.UnboundSelection.prototype.attr = function(name) {
	return new thx.js.AccessAttribute(name,this);
}
thx.js.UnboundSelection.prototype.classed = function() {
	return new thx.js.AccessClassed(this);
}
thx.js.UnboundSelection.prototype.property = function(name) {
	return new thx.js.AccessProperty(name,this);
}
thx.js.UnboundSelection.prototype.style = function(name) {
	return new thx.js.AccessStyle(name,this);
}
thx.js.UnboundSelection.prototype.transition = function() {
	return new thx.js.UnboundTransition(this);
}
thx.js.UnboundSelection.prototype.data = function(d,join) {
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
	return new thx.js.DataChoice(update,enter,exit);
}
thx.js.UnboundSelection.prototype.selectAllData = function(selector) {
	var selection = this.selectAll(selector);
	return new thx.js.ResumeSelection(selection.groups);
}
thx.js.UnboundSelection.prototype.__class__ = thx.js.UnboundSelection;
thx.js.Selection = function(groups) {
	if( groups === $_ ) return;
	thx.js.UnboundSelection.call(this,groups);
}
thx.js.Selection.__name__ = ["thx","js","Selection"];
thx.js.Selection.__super__ = thx.js.UnboundSelection;
for(var k in thx.js.UnboundSelection.prototype ) thx.js.Selection.prototype[k] = thx.js.UnboundSelection.prototype[k];
thx.js.Selection.create = function(groups) {
	return new thx.js.Selection(groups);
}
thx.js.Selection.prototype.createSelection = function(groups) {
	return new thx.js.Selection(groups);
}
thx.js.Selection.prototype.__class__ = thx.js.Selection;
thx.js.ISelectorEngine = function() { }
thx.js.ISelectorEngine.__name__ = ["thx","js","ISelectorEngine"];
thx.js.ISelectorEngine.prototype.select = null;
thx.js.ISelectorEngine.prototype.selectAll = null;
thx.js.ISelectorEngine.prototype.__class__ = thx.js.ISelectorEngine;
thx.js.SizzleEngine = function(p) {
}
thx.js.SizzleEngine.__name__ = ["thx","js","SizzleEngine"];
thx.js.SizzleEngine.prototype.select = function(selector,node) {
	return thx.js.Sizzle.select(selector,node)[0];
}
thx.js.SizzleEngine.prototype.selectNode = function(n,p) {
	return thx.js.Sizzle.select(n,p)[0];
}
thx.js.SizzleEngine.prototype.selectAll = function(selector,node) {
	return thx.js.Sizzle.uniqueSort(thx.js.Sizzle.select(selector,node));
}
thx.js.SizzleEngine.prototype.__class__ = thx.js.SizzleEngine;
thx.js.SizzleEngine.__interfaces__ = [thx.js.ISelectorEngine];
thx.js.Dom = function() { }
thx.js.Dom.__name__ = ["thx","js","Dom"];
thx.js.Dom.select = function(selector) {
	return thx.js.Dom.doc.select(selector);
}
thx.js.Dom.selectAll = function(selector) {
	return thx.js.Dom.doc.selectAll(selector);
}
thx.js.Dom.selectNode = function(node) {
	return thx.js.Selection.create([new thx.js.Group([node])]);
}
thx.js.Dom.selectNodeData = function(node) {
	return thx.js.ResumeSelection.create([new thx.js.Group([node])]);
}
thx.js.Dom.event = null;
thx.js.Dom.prototype.__class__ = thx.js.Dom;
if(!rg.util) rg.util = {}
rg.util.RGStrings = function() { }
rg.util.RGStrings.__name__ = ["rg","util","RGStrings"];
rg.util.RGStrings.humanize = function(d) {
	if(Std["is"](d,Int)) return Ints.format(d);
	if(Std["is"](d,Float)) return Floats.format(d);
	var s = Std.string(d);
	if(rg.util.RGStrings.range.match(s)) {
		var v1 = rg.util.RGStrings.range.matched(1), v2 = rg.util.RGStrings.range.matched(2);
		if(null != v1) v1 = Ints.canParse(v1)?Ints.format(Ints.parse(v1)):Floats.format(Floats.parse(v1)); else v1 = "";
		if(null != v2) v2 = Ints.canParse(v2)?Ints.format(Ints.parse(v2)):Floats.format(Floats.parse(v2)); else v2 = "";
		return rg.util.RGStrings.range.matchedLeft() + v1 + "-" + v2 + rg.util.RGStrings.range.matchedRight();
	} else return Strings.humanize(s);
}
rg.util.RGStrings.prototype.__class__ = rg.util.RGStrings;
if(!thx.math) thx.math = {}
if(!thx.math.scale) thx.math.scale = {}
thx.math.scale.IScale = function() { }
thx.math.scale.IScale.__name__ = ["thx","math","scale","IScale"];
thx.math.scale.IScale.prototype.scale = null;
thx.math.scale.IScale.prototype.getDomain = null;
thx.math.scale.IScale.prototype.getRange = null;
thx.math.scale.IScale.prototype.__class__ = thx.math.scale.IScale;
thx.math.scale.NumericScale = function(p) {
	if( p === $_ ) return;
	this._domain = [0.0,1.0];
	this._range = [0.0,1.0];
	this.f = Floats.interpolatef;
	this._clamp = false;
	this.rescale();
}
thx.math.scale.NumericScale.__name__ = ["thx","math","scale","NumericScale"];
thx.math.scale.NumericScale.scaleBilinear = function(domain,range,uninterpolate,interpolate) {
	var u = uninterpolate(domain[0],domain[1]), i = interpolate(range[0],range[1],null);
	return function(x) {
		return i(u(x));
	};
}
thx.math.scale.NumericScale.scalePolylinear = function(domain,range,uninterpolate,interpolate) {
	var u = [], i = [];
	var _g1 = 1, _g = domain.length;
	while(_g1 < _g) {
		var j = _g1++;
		u.push(uninterpolate(domain[j - 1],domain[j]));
		i.push(interpolate(range[j - 1],range[j],null));
	}
	return function(x) {
		var j = Arrays.bisectRight(domain,x,1,domain.length - 1) - 1;
		return i[j](u[j](x));
	};
}
thx.math.scale.NumericScale.prototype._domain = null;
thx.math.scale.NumericScale.prototype._range = null;
thx.math.scale.NumericScale.prototype.f = null;
thx.math.scale.NumericScale.prototype._clamp = null;
thx.math.scale.NumericScale.prototype._output = null;
thx.math.scale.NumericScale.prototype._input = null;
thx.math.scale.NumericScale.prototype.rescale = function() {
	var linear = this._domain.length == 2?thx.math.scale.NumericScale.scaleBilinear:thx.math.scale.NumericScale.scalePolylinear, uninterpolate = this._clamp?Floats.uninterpolateClampf:Floats.uninterpolatef;
	this._output = linear(this._domain,this._range,uninterpolate,this.f);
	this._input = linear(this._range,this._domain,uninterpolate,Floats.interpolatef);
	return this;
}
thx.math.scale.NumericScale.prototype.scale = function(x,_) {
	return this._output(x);
}
thx.math.scale.NumericScale.prototype.invert = function(y,_) {
	return this._input(y);
}
thx.math.scale.NumericScale.prototype.getDomain = function() {
	return this._domain;
}
thx.math.scale.NumericScale.prototype.domain = function(d) {
	this._domain = d;
	return this.rescale();
}
thx.math.scale.NumericScale.prototype.getRange = function() {
	return this._range;
}
thx.math.scale.NumericScale.prototype.range = function(r) {
	this._range = r;
	return this.rescale();
}
thx.math.scale.NumericScale.prototype.rangeRound = function(r) {
	this.range(r);
	this.interpolatef(Ints.interpolatef);
	return this;
}
thx.math.scale.NumericScale.prototype.getInterpolate = function() {
	return this.f;
}
thx.math.scale.NumericScale.prototype.interpolatef = function(x) {
	this.f = x;
	return this.rescale();
}
thx.math.scale.NumericScale.prototype.getClamp = function() {
	return this._clamp;
}
thx.math.scale.NumericScale.prototype.clamp = function(v) {
	this._clamp = v;
	return this.rescale();
}
thx.math.scale.NumericScale.prototype.ticks = function() {
	return (function($this) {
		var $r;
		throw new thx.error.AbstractMethod({ fileName : "NumericScale.hx", lineNumber : 86, className : "thx.math.scale.NumericScale", methodName : "ticks"});
		return $r;
	}(this));
}
thx.math.scale.NumericScale.prototype.tickFormat = function(v,i) {
	return (function($this) {
		var $r;
		throw new thx.error.AbstractMethod({ fileName : "NumericScale.hx", lineNumber : 91, className : "thx.math.scale.NumericScale", methodName : "tickFormat"});
		return $r;
	}(this));
}
thx.math.scale.NumericScale.prototype.transform = function(scale,t,a,b) {
	var range = this.getRange().map(function(v,_) {
		return (v - t) / scale;
	});
	this.domain([a,b]);
	var r = range.map($closure(this,"invert"));
	this.domain(r);
	return this;
}
thx.math.scale.NumericScale.prototype._this = function() {
	return this;
}
thx.math.scale.NumericScale.prototype.__class__ = thx.math.scale.NumericScale;
thx.math.scale.NumericScale.__interfaces__ = [thx.math.scale.IScale];
thx.math.scale.Pow = function(p) {
	if( p === $_ ) return;
	thx.math.scale.NumericScale.call(this);
	this.tick = new thx.math.scale.Linear();
	this._exponent = 1;
	this.powb = this.powp = function(v) {
		return v;
	};
}
thx.math.scale.Pow.__name__ = ["thx","math","scale","Pow"];
thx.math.scale.Pow.__super__ = thx.math.scale.NumericScale;
for(var k in thx.math.scale.NumericScale.prototype ) thx.math.scale.Pow.prototype[k] = thx.math.scale.NumericScale.prototype[k];
thx.math.scale.Pow.sqrt = function() {
	return new thx.math.scale.Pow().exponent(.5);
}
thx.math.scale.Pow._pow = function(e) {
	return function(v) {
		return Math.pow(v,e);
	};
}
thx.math.scale.Pow._pown = function(e) {
	return function(v) {
		return -Math.pow(-v,e);
	};
}
thx.math.scale.Pow.prototype.tick = null;
thx.math.scale.Pow.prototype._exponent = null;
thx.math.scale.Pow.prototype.powp = null;
thx.math.scale.Pow.prototype.powb = null;
thx.math.scale.Pow.prototype.scale = function(x,i) {
	return thx.math.scale.NumericScale.prototype.scale.call(this,this.powp(x));
}
thx.math.scale.Pow.prototype.invert = function(x,i) {
	return this.powb(thx.math.scale.NumericScale.prototype.invert.call(this,x));
}
thx.math.scale.Pow.prototype.getDomain = function() {
	var me = this;
	return thx.math.scale.NumericScale.prototype.getDomain.call(this).map(function(d,_) {
		return me.powb(d);
	});
}
thx.math.scale.Pow.prototype.domain = function(d) {
	var pow = Arrays.min(d) < 0?thx.math.scale.Pow._pown:thx.math.scale.Pow._pow;
	this.powp = pow(this._exponent);
	this.powb = pow(1.0 / this._exponent);
	thx.math.scale.NumericScale.prototype.domain.call(this,[this.powp(d[0]),this.powp(d[1])]);
	this.tick.domain(d);
	return this;
}
thx.math.scale.Pow.prototype.ticks = function() {
	return this.tick.ticks();
}
thx.math.scale.Pow.prototype.tickFormat = function(v,i) {
	return this.tick.tickFormat(v,i);
}
thx.math.scale.Pow.prototype.getModulo = function() {
	return this.tick.getModulo();
}
thx.math.scale.Pow.prototype.modulo = function(v) {
	this.tick.modulo(v);
	return this;
}
thx.math.scale.Pow.prototype.getExponent = function() {
	return this._exponent;
}
thx.math.scale.Pow.prototype.exponent = function(x) {
	var d = this.getDomain();
	this._exponent = x;
	this.domain(d);
	return this;
}
thx.math.scale.Pow.prototype.__class__ = thx.math.scale.Pow;
rg.query.DateLimit = { __ename__ : ["rg","query","DateLimit"], __constructs__ : ["NoLimit","FixedLimit","VariableLimit"] }
rg.query.DateLimit.NoLimit = ["NoLimit",0];
rg.query.DateLimit.NoLimit.toString = $estr;
rg.query.DateLimit.NoLimit.__enum__ = rg.query.DateLimit;
rg.query.DateLimit.FixedLimit = function(d) { var $x = ["FixedLimit",1,d]; $x.__enum__ = rg.query.DateLimit; $x.toString = $estr; return $x; }
rg.query.DateLimit.VariableLimit = function(f) { var $x = ["VariableLimit",2,f]; $x.__enum__ = rg.query.DateLimit; $x.toString = $estr; return $x; }
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
rg.svg.SvgLayer = function(panel) {
	if( panel === $_ ) return;
	this.panel = panel;
	var p = panel;
	p.addLayer(this);
	this.svg = panel.svg.append("svg:g");
	this.svg.attr("class").string("layer");
	panel.onResize.add($closure(this,"_resize"));
	this.init();
	this._resize();
}
rg.svg.SvgLayer.__name__ = ["rg","svg","SvgLayer"];
rg.svg.SvgLayer.prototype.panel = null;
rg.svg.SvgLayer.prototype.svg = null;
rg.svg.SvgLayer.prototype.width = null;
rg.svg.SvgLayer.prototype.height = null;
rg.svg.SvgLayer.prototype.customClass = null;
rg.svg.SvgLayer.prototype.init = function() {
}
rg.svg.SvgLayer.prototype._resize = function() {
	this.width = this.panel.frame.width;
	this.height = this.panel.frame.height;
	this.resize();
	this.redraw();
}
rg.svg.SvgLayer.prototype.resize = function() {
}
rg.svg.SvgLayer.prototype.destroy = function() {
	var p = this.panel;
	p.removeLayer(this);
	this.svg.remove();
}
rg.svg.SvgLayer.prototype.redraw = function() {
}
rg.svg.SvgLayer.prototype.setCustomClass = function(v) {
	if(null != this.customClass) this.svg.classed().remove(this.customClass);
	this.svg.classed().add(v);
	return this.customClass = v;
}
rg.svg.SvgLayer.prototype.__class__ = rg.svg.SvgLayer;
Hash = function(p) {
	if( p === $_ ) return;
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
}
Hash.__name__ = ["Hash"];
Hash.prototype.h = null;
Hash.prototype.set = function(key,value) {
	this.h["$" + key] = value;
}
Hash.prototype.get = function(key) {
	return this.h["$" + key];
}
Hash.prototype.exists = function(key) {
	try {
		key = "$" + key;
		return this.hasOwnProperty.call(this.h,key);
	} catch( e ) {
		for(var i in this.h) if( i == key ) return true;
		return false;
	}
}
Hash.prototype.remove = function(key) {
	if(!this.exists(key)) return false;
	delete(this.h["$" + key]);
	return true;
}
Hash.prototype.keys = function() {
	var a = new Array();
	for(var i in this.h) a.push(i.substr(1));
	return a.iterator();
}
Hash.prototype.iterator = function() {
	return { ref : this.h, it : this.keys(), hasNext : function() {
		return this.it.hasNext();
	}, next : function() {
		var i = this.it.next();
		return this.ref["$" + i];
	}};
}
Hash.prototype.toString = function() {
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
	return s.b.join("");
}
Hash.prototype.__class__ = Hash;
thx.color.Hsl = function(h,s,l) {
	if( h === $_ ) return;
	this.hue = h = Floats.circularWrap(h,360);
	this.saturation = s = Floats.normalize(s);
	this.lightness = l = Floats.normalize(l);
	thx.color.Rgb.call(this,Ints.interpolate(thx.color.Hsl._c(h + 120,s,l),0,255,null),Ints.interpolate(thx.color.Hsl._c(h,s,l),0,255,null),Ints.interpolate(thx.color.Hsl._c(h - 120,s,l),0,255,null));
}
thx.color.Hsl.__name__ = ["thx","color","Hsl"];
thx.color.Hsl.__super__ = thx.color.Rgb;
for(var k in thx.color.Rgb.prototype ) thx.color.Hsl.prototype[k] = thx.color.Rgb.prototype[k];
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
	var v = color.lightness * t;
	return new thx.color.Hsl(color.hue,color.saturation,Floats.interpolate(v,0,1,equation));
}
thx.color.Hsl.interpolate = function(a,b,t,equation) {
	return new thx.color.Hsl(Floats.interpolate(t,a.hue,b.hue,equation),Floats.interpolate(t,a.saturation,b.saturation,equation),Floats.interpolate(t,a.lightness,b.lightness,equation));
}
thx.color.Hsl.interpolatef = function(a,b,equation) {
	return function(t) {
		return new thx.color.Hsl(Floats.interpolate(t,a.hue,b.hue,equation),Floats.interpolate(t,a.saturation,b.saturation,equation),Floats.interpolate(t,a.lightness,b.lightness,equation));
	};
}
thx.color.Hsl.prototype.hue = null;
thx.color.Hsl.prototype.saturation = null;
thx.color.Hsl.prototype.lightness = null;
thx.color.Hsl.prototype.toHslString = function() {
	return "hsl(" + this.hue + "," + this.saturation * 100 + "%," + this.lightness * 100 + "%)";
}
thx.color.Hsl.prototype.__class__ = thx.color.Hsl;
thx.math.Const = function() { }
thx.math.Const.__name__ = ["thx","math","Const"];
thx.math.Const.prototype.__class__ = thx.math.Const;
rg.query.TimeQuery = function(p) {
	if( p === $_ ) return;
	this.onChangePeriodicity = new hxevents.Dispatcher();
	this.onChangeRange = new hxevents.Dispatcher();
	this.startLimit = rg.query.DateLimit.NoLimit;
	this.endLimit = rg.query.DateLimit.NoLimit;
	this.autosetPeriodicity = true;
	this.setPeriodicity("eternity");
}
rg.query.TimeQuery.__name__ = ["rg","query","TimeQuery"];
rg.query.TimeQuery.prototype.periodicity = null;
rg.query.TimeQuery.prototype.onChangePeriodicity = null;
rg.query.TimeQuery.prototype.onChangeRange = null;
rg.query.TimeQuery.prototype.startLimit = null;
rg.query.TimeQuery.prototype.endLimit = null;
rg.query.TimeQuery.prototype.autosetPeriodicity = null;
rg.query.TimeQuery.prototype.start = null;
rg.query.TimeQuery.prototype.end = null;
rg.query.TimeQuery.prototype.close = function() {
	this.onChangePeriodicity.clear();
	this.onChangeRange.clear();
}
rg.query.TimeQuery.prototype.update = function() {
	var s = this.getDateLimit(this.startLimit), e = this.getDateLimit(this.endLimit), ts = s == null?null:s.getTime(), te = e == null?null:e.getTime(), now = Date.now().getTime();
	if(ts != null && te != null && ts > te) {
		var td = s, tt = ts;
		s = e;
		e = td;
		ts = te;
		te = tt;
	}
	if(te != null && te > now) e = Date.fromTime(te = now);
	if(ts != null && ts > now) s = Date.fromTime(ts = now - 60000);
	var trigger = null == this.start && null != ts || null != this.start && this.start.getTime() != ts || null == this.end && null != te || null != this.end && this.end.getTime() != te;
	if(trigger) this.onChangeRange.dispatch({ start : this.start = s, end : this.end = e});
	if(this.autosetPeriodicity) this.setPeriodicity(rg.util.Periodicity.calculateBetween(this.start,this.end));
}
rg.query.TimeQuery.prototype.queryStartTime = function() {
	return null == this.start?0:this.start.getTime();
}
rg.query.TimeQuery.prototype.queryEndTime = function() {
	return null == this.end?0:this.end.getTime();
}
rg.query.TimeQuery.prototype.getDateLimit = function(limit) {
	var $e = (limit);
	switch( $e[1] ) {
	case 0:
		return null;
	case 1:
		var d = $e[2];
		return d;
	case 2:
		var f = $e[2];
		return f();
	}
}
rg.query.TimeQuery.prototype.setPeriodicity = function(v) {
	if(null == v) v = "eternity"; else {
		v = v.toLowerCase();
		if(!rg.util.Periodicity.isValid(v)) throw new thx.error.Error("invalid periodicity '{0}'",null,v,{ fileName : "TimeQuery.hx", lineNumber : 95, className : "rg.query.TimeQuery", methodName : "setPeriodicity"});
	}
	if(v != this.periodicity) this.onChangePeriodicity.dispatch(this.periodicity = v);
	return this.periodicity;
}
rg.query.TimeQuery.prototype.__class__ = rg.query.TimeQuery;
thx.math.scale.Linears = function() { }
thx.math.scale.Linears.__name__ = ["thx","math","scale","Linears"];
thx.math.scale.Linears.forString = function() {
	return new thx.math.scale.LinearT().interpolatef(Strings.interpolatef);
}
thx.math.scale.Linears.forHsl = function() {
	return new thx.math.scale.LinearT().interpolatef(thx.color.Hsl.interpolatef);
}
thx.math.scale.Linears.forHslString = function() {
	return new thx.math.scale.LinearT().interpolatef(function(a,b,f) {
		if(Strings.empty(a) || Strings.empty(b)) return function(_) {
			return "";
		};
		var ca = thx.color.Hsl.toHsl(thx.color.Colors.parse(a)), cb = thx.color.Hsl.toHsl(thx.color.Colors.parse(b)), i = thx.color.Hsl.interpolatef(ca,cb,f);
		return function(t) {
			return i(t).toHslString();
		};
	});
}
thx.math.scale.Linears.forRgb = function() {
	return new thx.math.scale.LinearT().interpolatef(thx.color.Rgb.interpolatef);
}
thx.math.scale.Linears.forRgbString = function() {
	return new thx.math.scale.LinearT().interpolatef(function(a,b,f) {
		if(Strings.empty(a) || Strings.empty(b)) return function(_) {
			return "";
		};
		var ca = thx.color.Colors.parse(a), cb = thx.color.Colors.parse(b), i = thx.color.Rgb.interpolatef(ca,cb,f);
		return function(t) {
			return i(t).toRgbString();
		};
	});
}
thx.math.scale.Linears.prototype.__class__ = thx.math.scale.Linears;
IntHash = function(p) {
	if( p === $_ ) return;
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
}
IntHash.__name__ = ["IntHash"];
IntHash.prototype.h = null;
IntHash.prototype.set = function(key,value) {
	this.h[key] = value;
}
IntHash.prototype.get = function(key) {
	return this.h[key];
}
IntHash.prototype.exists = function(key) {
	return this.h[key] != null;
}
IntHash.prototype.remove = function(key) {
	if(this.h[key] == null) return false;
	delete(this.h[key]);
	return true;
}
IntHash.prototype.keys = function() {
	var a = new Array();
	for( x in this.h ) a.push(x);
	return a.iterator();
}
IntHash.prototype.iterator = function() {
	return { ref : this.h, it : this.keys(), hasNext : function() {
		return this.it.hasNext();
	}, next : function() {
		var i = this.it.next();
		return this.ref[i];
	}};
}
IntHash.prototype.toString = function() {
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
	return s.b.join("");
}
IntHash.prototype.__class__ = IntHash;
if(!thx.translation) thx.translation = {}
thx.translation.ITranslation = function() { }
thx.translation.ITranslation.__name__ = ["thx","translation","ITranslation"];
thx.translation.ITranslation.prototype.domain = null;
thx.translation.ITranslation.prototype._ = null;
thx.translation.ITranslation.prototype.__ = null;
thx.translation.ITranslation.prototype.__class__ = thx.translation.ITranslation;
rg.layout.StackFrame = function(disposition) {
	if( disposition === $_ ) return;
	rg.layout.Frame.call(this);
	this.setDisposition(disposition);
}
rg.layout.StackFrame.__name__ = ["rg","layout","StackFrame"];
rg.layout.StackFrame.__super__ = rg.layout.Frame;
for(var k in rg.layout.Frame.prototype ) rg.layout.StackFrame.prototype[k] = rg.layout.Frame.prototype[k];
rg.layout.StackFrame.prototype.disposition = null;
rg.layout.StackFrame.prototype.parent = null;
rg.layout.StackFrame.prototype.setParent = function(v) {
	if(null != this.parent) this.parent.removeChild(this);
	return this.parent = v;
}
rg.layout.StackFrame.prototype.setDisposition = function(v) {
	this.disposition = v;
	if(null != this.parent) this.parent.reflow();
	return v;
}
rg.layout.StackFrame.prototype.__class__ = rg.layout.StackFrame;
thx.svg.Line = function(x,y,interpolator) {
	if( x === $_ ) return;
	this._x = x;
	this._y = y;
	this._interpolator = interpolator;
}
thx.svg.Line.__name__ = ["thx","svg","Line"];
thx.svg.Line.pointArray = function(interpolator) {
	return new thx.svg.Line(function(d,_) {
		return d[0];
	},function(d,_) {
		return d[1];
	},interpolator);
}
thx.svg.Line.pointObject = function(interpolator) {
	return new thx.svg.Line(function(d,_) {
		return d.x;
	},function(d,_) {
		return d.y;
	},interpolator);
}
thx.svg.Line.prototype._x = null;
thx.svg.Line.prototype._y = null;
thx.svg.Line.prototype._interpolator = null;
thx.svg.Line.prototype.shape = function(data,i) {
	return data.length < 1?null:"M" + thx.svg.LineInternals.interpolatePoints(thx.svg.LineInternals.linePoints(data,this._x,this._y),this._interpolator);
}
thx.svg.Line.prototype.getInterpolator = function() {
	return this._interpolator;
}
thx.svg.Line.prototype.interpolator = function(type) {
	this._interpolator = type;
	return this;
}
thx.svg.Line.prototype.getX = function() {
	return this._x;
}
thx.svg.Line.prototype.x = function(v) {
	this._x = v;
	return this;
}
thx.svg.Line.prototype.getY = function() {
	return this._y;
}
thx.svg.Line.prototype.y = function(v) {
	this._y = v;
	return this;
}
thx.svg.Line.prototype.__class__ = thx.svg.Line;
if(!thx.geom) thx.geom = {}
if(!thx.geom.layout) thx.geom.layout = {}
thx.geom.layout.Stack = function(p) {
	if( p === $_ ) return;
	this._order = thx.geom.layout.StackOrder.DefaultOrder;
	this._offset = thx.geom.layout.StackOffset.ZeroOffset;
}
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
	return Iterators.reduce(data.iterator(),thx.geom.layout.Stack.stackSum,0.0);
}
thx.geom.layout.Stack.stackSum = function(p,c,i) {
	return p + c.y;
}
thx.geom.layout.Stack.prototype._order = null;
thx.geom.layout.Stack.prototype._offset = null;
thx.geom.layout.Stack.prototype.stack = function(data) {
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
thx.geom.layout.Stack.prototype.getOrder = function() {
	return this._order;
}
thx.geom.layout.Stack.prototype.order = function(x) {
	this._order = x;
	return this;
}
thx.geom.layout.Stack.prototype.getOffset = function() {
	return this._offset;
}
thx.geom.layout.Stack.prototype.offset = function(x) {
	this._offset = x;
	return this;
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
if(!thx.collections) thx.collections = {}
thx.collections.IntHashList = function(p) {
	if( p === $_ ) return;
	this.length = 0;
	this.__keys = [];
	this.__hash = new IntHash();
}
thx.collections.IntHashList.__name__ = ["thx","collections","IntHashList"];
thx.collections.IntHashList.prototype.length = null;
thx.collections.IntHashList.prototype.set = function(key,value) {
	if(!this.__hash.exists(key)) {
		this.__keys.push(key);
		this.length++;
	}
	this.__hash.set(key,value);
}
thx.collections.IntHashList.prototype.get = function(key) {
	return this.__hash.get(key);
}
thx.collections.IntHashList.prototype.getAt = function(index) {
	return this.__hash.get(this.__keys[index]);
}
thx.collections.IntHashList.prototype.exists = function(key) {
	return this.__hash.exists(key);
}
thx.collections.IntHashList.prototype.remove = function(key) {
	var item = this.__hash.get(key);
	if(item == null) return null;
	this.__hash.remove(key);
	this.__keys.remove(key);
	this.length--;
	return item;
}
thx.collections.IntHashList.prototype.removeAt = function(index) {
	if(index < 0 || index >= this.length) return null;
	var key = this.__keys[index];
	var item = this.__hash.get(key);
	this.__hash.remove(key);
	this.__keys.remove(key);
	this.length--;
	return item;
}
thx.collections.IntHashList.prototype.keys = function() {
	return this.__keys.iterator();
}
thx.collections.IntHashList.prototype.iterator = function() {
	return this.array().iterator();
}
thx.collections.IntHashList.prototype.clear = function() {
	this.__hash = new IntHash();
	this.__keys = [];
	this.length = 0;
}
thx.collections.IntHashList.prototype.array = function() {
	var values = [];
	var _g = 0, _g1 = this.__keys;
	while(_g < _g1.length) {
		var k = _g1[_g];
		++_g;
		values.push(this.__hash.get(k));
	}
	return values;
}
thx.collections.IntHashList.prototype.toString = function() {
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
	return s.b.join("");
}
thx.collections.IntHashList.prototype.__keys = null;
thx.collections.IntHashList.prototype.__hash = null;
thx.collections.IntHashList.prototype.__class__ = thx.collections.IntHashList;
if(!thx.xml) thx.xml = {}
thx.xml.Namespace = function() { }
thx.xml.Namespace.__name__ = ["thx","xml","Namespace"];
thx.xml.Namespace.qualify = function(name) {
	var i = name.indexOf(":");
	if(i < 0) return null; else {
		var space = thx.xml.Namespace.prefix.get(name.substr(0,i));
		if(null == space) throw new thx.error.Error("unable to find a namespace for {0}",[space],null,{ fileName : "Namespace.hx", lineNumber : 29, className : "thx.xml.Namespace", methodName : "qualify"});
		return new thx.xml.NSQualifier(space,name.substr(i + 1));
	}
}
thx.xml.Namespace.prototype.__class__ = thx.xml.Namespace;
thx.xml.NSQualifier = function(space,local) {
	if( space === $_ ) return;
	this.space = space;
	this.local = local;
}
thx.xml.NSQualifier.__name__ = ["thx","xml","NSQualifier"];
thx.xml.NSQualifier.prototype.space = null;
thx.xml.NSQualifier.prototype.local = null;
thx.xml.NSQualifier.prototype.__class__ = thx.xml.NSQualifier;
Iterators = function() { }
Iterators.__name__ = ["Iterators"];
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
Iterators.prototype.__class__ = Iterators;
if(typeof hxevents=='undefined') hxevents = {}
hxevents.Notifier = function(p) {
	if( p === $_ ) return;
	this.handlers = new Array();
}
hxevents.Notifier.__name__ = ["hxevents","Notifier"];
hxevents.Notifier.stop = function() {
	throw hxevents.EventException.StopPropagation;
}
hxevents.Notifier.prototype.handlers = null;
hxevents.Notifier.prototype.add = function(h) {
	this.handlers.push(h);
	return h;
}
hxevents.Notifier.prototype.addOnce = function(h) {
	var me = this;
	var _h = null;
	_h = function() {
		me.remove(_h);
		h();
	};
	this.add(_h);
	return _h;
}
hxevents.Notifier.prototype.remove = function(h) {
	var _g1 = 0, _g = this.handlers.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(Reflect.compareMethods(this.handlers[i],h)) return this.handlers.splice(i,1)[0];
	}
	return null;
}
hxevents.Notifier.prototype.clear = function() {
	this.handlers = new Array();
}
hxevents.Notifier.prototype.dispatch = function() {
	try {
		var list = this.handlers.copy();
		var _g = 0;
		while(_g < list.length) {
			var l = list[_g];
			++_g;
			l();
		}
		return true;
	} catch( exc ) {
		if( js.Boot.__instanceof(exc,hxevents.EventException) ) {
			return false;
		} else throw(exc);
	}
}
hxevents.Notifier.prototype.has = function(h) {
	if(null == h) return this.handlers.length > 0; else {
		var _g = 0, _g1 = this.handlers;
		while(_g < _g1.length) {
			var handler = _g1[_g];
			++_g;
			if(h == handler) return true;
		}
		return false;
	}
}
hxevents.Notifier.prototype.__class__ = hxevents.Notifier;
StringTools = function() { }
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
StringTools.prototype.__class__ = StringTools;
if(typeof haxe=='undefined') haxe = {}
haxe.Firebug = function() { }
haxe.Firebug.__name__ = ["haxe","Firebug"];
haxe.Firebug.detect = function() {
	try {
		return console != null && console.error != null;
	} catch( e ) {
		return false;
	}
}
haxe.Firebug.redirectTraces = function() {
	haxe.Log.trace = haxe.Firebug.trace;
	js.Lib.setErrorHandler(haxe.Firebug.onError);
}
haxe.Firebug.onError = function(err,stack) {
	var buf = err + "\n";
	var _g = 0;
	while(_g < stack.length) {
		var s = stack[_g];
		++_g;
		buf += "Called from " + s + "\n";
	}
	haxe.Firebug.trace(buf,null);
	return true;
}
haxe.Firebug.trace = function(v,inf) {
	var type = inf != null && inf.customParams != null?inf.customParams[0]:null;
	if(type != "warn" && type != "info" && type != "debug" && type != "error") type = inf == null?"error":"log";
	console[type]((inf == null?"":inf.fileName + ":" + inf.lineNumber + " : ") + Std.string(v));
}
haxe.Firebug.prototype.__class__ = haxe.Firebug;
if(!thx.util) thx.util = {}
thx.util.Message = function(message,params,param) {
	if( message === $_ ) return;
	this.message = message;
	if(null == params) this.params = []; else this.params = params;
	if(null != param) this.params.push(param);
}
thx.util.Message.__name__ = ["thx","util","Message"];
thx.util.Message.prototype.message = null;
thx.util.Message.prototype.params = null;
thx.util.Message.prototype.toString = function() {
	return Strings.format(this.message,this.params);
}
thx.util.Message.prototype.translatef = function(translator) {
	return Strings.format(translator(this.message),this.params);
}
thx.util.Message.prototype.translate = function(translator,domain) {
	if(null == domain) domain = translator.getDomain();
	var culture = thx.culture.Culture.get(domain);
	if(this.params.length == 1 && Std["is"](this.params[0],Int)) return Strings.format(translator.__(null,this.message,this.params[0],domain),this.params,null,culture); else return Strings.format(translator._(this.message,domain),this.params,null,culture);
}
thx.util.Message.prototype.__class__ = thx.util.Message;
if(!rg.html) rg.html = {}
rg.html.HtmlPivotTable = function(container) {
	if( container === $_ ) return;
	this.container = container;
	container.classed().add("rg").classed().add("pivot-table");
	this.displayColumnTotal = true;
	this.displayRowTotal = true;
	this.startColor = rg.html.HtmlPivotTable.defaultStartColor;
	this.endColor = rg.html.HtmlPivotTable.defaultEndColor;
	this.heatMap = true;
}
rg.html.HtmlPivotTable.__name__ = ["rg","html","HtmlPivotTable"];
rg.html.HtmlPivotTable.prototype.displayColumnTotal = null;
rg.html.HtmlPivotTable.prototype.displayRowTotal = null;
rg.html.HtmlPivotTable.prototype.heatMap = null;
rg.html.HtmlPivotTable.prototype.startColor = null;
rg.html.HtmlPivotTable.prototype.endColor = null;
rg.html.HtmlPivotTable.prototype.container = null;
rg.html.HtmlPivotTable.prototype.loader = null;
rg.html.HtmlPivotTable.prototype.data = function(d) {
	this.container.html().string("");
	var table = this.container.append("table"), thead = table.append("thead"), leftspan = d.rows.length > 0?d.rows[0].values.length:0, color = this.heatMap?thx.color.Hsl.interpolatef(this.startColor,this.endColor):null;
	if(d.columns.length > 0) {
		var _g1 = 0, _g = d.column_headers.length;
		while(_g1 < _g) {
			var i = _g1++;
			var tr = thead.append("tr");
			this.prependSpacer(leftspan,tr);
			var header = tr.append("th").attr("class").string("col-header").text().string(this.formatHeader(d.column_headers[i]));
			if(d.columns.length > 1) header.attr("colspan")["float"](d.columns.length);
			var counter = 1, last = d.columns[0].values[i];
			tr = thead.append("tr");
			if(i == d.column_headers.length - 1) {
				var _g2 = 0, _g3 = d.row_headers;
				while(_g2 < _g3.length) {
					var h = _g3[_g2];
					++_g2;
					tr.append("th").attr("class").string("row-header").text().string(this.formatHeader(h));
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
			tr.append("th").attr("class").string("row header").text().string(this.formatHeader(h));
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
			tr.append("th").attr("class").string(rep?"row value empty":"row value").text().string(rep?"":this.formatValue(v,d.row_headers[i]));
		}
		var _g2 = 0, _g3 = row.cells;
		while(_g2 < _g3.length) {
			var cell = _g3[_g2];
			++_g2;
			var td = tr.append("td").text().string(this.formatCell(cell));
			if(this.heatMap) {
				var c = color(cell / d.calc.max);
				td.style("background-color").color(c).style("color").color(thx.color.Rgb.contrastBW(c));
			}
		}
		if(this.displayRowTotal && d.columns.length > 1) tr.append("th").attr("class").string("row total").text().string(this.formatCell(row.calc.total));
	}
	var tfoot = table.append("tfoot");
	if(this.displayColumnTotal && d.rows.length > 1) {
		var tr = tfoot.append("tr");
		this.prependSpacer(leftspan,tr);
		var _g = 0, _g1 = d.columns;
		while(_g < _g1.length) {
			var col = _g1[_g];
			++_g;
			tr.append("th").attr("class").string("column total").text().string(this.formatCell(col.calc.total));
		}
		if(this.displayRowTotal && d.columns.length > 1) tr.append("th").attr("class").string("table total").text().string(this.formatCell(d.calc.total));
	}
}
rg.html.HtmlPivotTable.prototype.buildValue = function(value,header,counter,tr) {
	var th = tr.append("th").attr("class").string("column value").text().string(this.formatValue(value,header));
	if(counter > 1) th.attr("colspan")["float"](counter);
}
rg.html.HtmlPivotTable.prototype.prependSpacer = function(counter,tr) {
	if(counter == 0) return;
	var th = tr.append("th").attr("class").string("spacer");
	if(counter > 1) th.attr("colspan")["float"](counter);
}
rg.html.HtmlPivotTable.prototype.formatCell = function(value) {
	return Floats.format(value,"I");
}
rg.html.HtmlPivotTable.prototype.formatHeader = function(value) {
	return rg.util.RGStrings.humanize(Strings.ltrim(value,"#"));
}
rg.html.HtmlPivotTable.prototype.formatValue = function(value,header) {
	if(Std["is"](value,String)) return Strings.rtrim(Strings.ltrim(value,"\""),"\"");
	if(Std["is"](value,Float)) {
		if("#" == header.substr(0,1)) return rg.util.Periodicity.format(header.substr(1),Std.parseFloat(value));
		return Floats.format(value);
	}
	if(Std["is"](value,Int)) return Ints.format(value);
	return Dynamics.string(value);
}
rg.html.HtmlPivotTable.prototype.__class__ = rg.html.HtmlPivotTable;
rg.html.HtmlLeaderBoard = function(container) {
	if( container === $_ ) return;
	this.container = container;
	container.classed().add("rg");
	this.list = container.append("ul").classed().add("leaderboard");
	this._created = 0;
	this._ease = thx.math.Equations.elasticf();
	this._duration = 1500;
}
rg.html.HtmlLeaderBoard.__name__ = ["rg","html","HtmlLeaderBoard"];
rg.html.HtmlLeaderBoard.prototype.container = null;
rg.html.HtmlLeaderBoard.prototype.list = null;
rg.html.HtmlLeaderBoard.prototype._data = null;
rg.html.HtmlLeaderBoard.prototype._total = null;
rg.html.HtmlLeaderBoard.prototype._ease = null;
rg.html.HtmlLeaderBoard.prototype._duration = null;
rg.html.HtmlLeaderBoard.prototype._created = null;
rg.html.HtmlLeaderBoard.prototype.data = function(d) {
	this._data = d;
	this._total = 0;
	var _g = 0, _g1 = this._data;
	while(_g < _g1.length) {
		var item = _g1[_g];
		++_g;
		this._total += item.value;
	}
	this._redraw();
}
rg.html.HtmlLeaderBoard.prototype._redraw = function() {
	if(null == this._data) return;
	var choice = this.list.selectAll("li").data(this._data,function(d,i) {
		return d.label;
	}), total = this._total;
	choice.enter().append("li").style("background-size").stringf(function(d,i) {
		return 100 * d.value / total + "%";
	}).text().stringf($closure(this,"_description")).attr("title").stringf($closure(this,"_title")).style("opacity")["float"](0).eachNode($closure(this,"_fadeIn"));
	choice.update().select("li").style("background-size").stringf(function(d,i) {
		return 100 * d.value / total + "%";
	}).text().stringf($closure(this,"_description")).attr("title").stringf($closure(this,"_title"));
	choice.exit().transition().ease(this._ease).duration(null,this._duration).style("opacity")["float"](1).remove();
}
rg.html.HtmlLeaderBoard.prototype._fadeIn = function(n,i) {
	var me = this;
	thx.js.Dom.selectNodeData(n).transition().ease(this._ease).duration(null,this._duration).delay(null,150 * (i - this._created)).style("opacity")["float"](1).endNode(function(_,_1) {
		me._created++;
	});
}
rg.html.HtmlLeaderBoard.prototype._description = function(o,i) {
	return this.description(o.label,o.value,this._total,i);
}
rg.html.HtmlLeaderBoard.prototype._title = function(o,i) {
	return this.title(o.label,o.value,this._total,i);
}
rg.html.HtmlLeaderBoard.prototype.description = function(label,value,total,pos) {
	return label + ": " + thx.culture.FormatNumber.percent(100 * value / total);
}
rg.html.HtmlLeaderBoard.prototype.title = function(label,value,total,pos) {
	return "total: " + Floats.format(value,"I");
}
rg.html.HtmlLeaderBoard.prototype.__class__ = rg.html.HtmlLeaderBoard;
if(!thx.culture) thx.culture = {}
thx.culture.FormatParams = function() { }
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
thx.culture.FormatParams.prototype.__class__ = thx.culture.FormatParams;
thx.culture.Info = function() { }
thx.culture.Info.__name__ = ["thx","culture","Info"];
thx.culture.Info.prototype.name = null;
thx.culture.Info.prototype["native"] = null;
thx.culture.Info.prototype.english = null;
thx.culture.Info.prototype.iso2 = null;
thx.culture.Info.prototype.iso3 = null;
thx.culture.Info.prototype.pluralRule = null;
thx.culture.Info.prototype.toString = function() {
	return this["native"] + " (" + this.english + ")";
}
thx.culture.Info.prototype.__class__ = thx.culture.Info;
Iterables = function() { }
Iterables.__name__ = ["Iterables"];
Iterables.indexOf = function(it,v,f) {
	return Iterators.indexOf(it.iterator(),v,f);
}
Iterables.contains = function(it,v,f) {
	return Iterators.contains(it.iterator(),v,f);
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
Iterables.prototype.__class__ = Iterables;
rg.svg.SvgHeatGrid = function(panel,color) {
	if( panel === $_ ) return;
	this._m = this._n = 0;
	rg.svg.SvgLayer.call(this,panel);
	this.color = color;
	this._duration = 1000;
}
rg.svg.SvgHeatGrid.__name__ = ["rg","svg","SvgHeatGrid"];
rg.svg.SvgHeatGrid.__super__ = rg.svg.SvgLayer;
for(var k in rg.svg.SvgLayer.prototype ) rg.svg.SvgHeatGrid.prototype[k] = rg.svg.SvgLayer.prototype[k];
rg.svg.SvgHeatGrid.prototype._data = null;
rg.svg.SvgHeatGrid.prototype.color = null;
rg.svg.SvgHeatGrid.prototype._duration = null;
rg.svg.SvgHeatGrid.prototype._m = null;
rg.svg.SvgHeatGrid.prototype._n = null;
rg.svg.SvgHeatGrid.prototype._grid = null;
rg.svg.SvgHeatGrid.prototype.init = function() {
	this.svg.classed().add("heat-grid");
	this._grid = this.svg.append("svg:g");
}
rg.svg.SvgHeatGrid.prototype.data = function(d) {
	if(d == null) d = [];
	this._n = d.length;
	this._m = this._n > 0?d[0].length:0;
	this._data = Arrays.flatten(d);
	this.redraw();
}
rg.svg.SvgHeatGrid.prototype.col = function(_,i) {
	return i % this._m;
}
rg.svg.SvgHeatGrid.prototype.row = function(_,i) {
	return Math.floor(i / this._m);
}
rg.svg.SvgHeatGrid.prototype.x = function(_,i) {
	return this.col(_,i) * this.width / this._m;
}
rg.svg.SvgHeatGrid.prototype.y = function(_,i) {
	return this.row(_,i) * this.height / this._n;
}
rg.svg.SvgHeatGrid.prototype.cellclass = function(_,i) {
	return "cell col-" + this.col(_,i) + " row-" + this.row(_,i);
}
rg.svg.SvgHeatGrid.prototype.over = function(x,y,d,pos) {
}
rg.svg.SvgHeatGrid.prototype._mouseover = function(d,i) {
	var x = Math.round(this.x(d,i) + this.width / this._m / 2), y = Math.round(this.y(d,i) + this.height / this._n / 2);
	this.over(x,y,d,i);
}
rg.svg.SvgHeatGrid.prototype.redraw = function() {
	if(this._m == 0) return;
	var choice = this._grid.selectAll("rect").data(this._data);
	choice.enter().append("svg:rect").attr("width")["float"](this.width / this._m).attr("height")["float"](this.height / this._n).style("fill").color(this.color.scale(0)).attr("class").stringf($closure(this,"cellclass")).attr("x").floatf($closure(this,"x")).attr("y").floatf($closure(this,"y")).style("fill-opacity")["float"](0).on("mouseover",$closure(this,"_mouseover")).transition().duration(null,this._duration).style("fill-opacity")["float"](1).style("fill").colorf($closure(this.color,"scale"));
	choice.update().transition().duration(null,this._duration).style("fill").colorf($closure(this.color,"scale")).attr("width")["float"](this.width / this._m).attr("height")["float"](this.height / this._n).attr("x").floatf($closure(this,"x")).attr("y").floatf($closure(this,"y"));
	choice.exit().transition().duration(null,this._duration).style("opacity")["float"](0).remove();
}
rg.svg.SvgHeatGrid.prototype.__class__ = rg.svg.SvgHeatGrid;
thx.culture.Culture = function() { }
thx.culture.Culture.__name__ = ["thx","culture","Culture"];
thx.culture.Culture.__super__ = thx.culture.Info;
for(var k in thx.culture.Info.prototype ) thx.culture.Culture.prototype[k] = thx.culture.Info.prototype[k];
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
thx.cultures.EnUS.__super__ = thx.culture.Culture;
for(var k in thx.culture.Culture.prototype ) thx.cultures.EnUS.prototype[k] = thx.culture.Culture.prototype[k];
thx.cultures.EnUS.culture = null;
thx.cultures.EnUS.getCulture = function() {
	if(null == thx.cultures.EnUS.culture) thx.cultures.EnUS.culture = new thx.cultures.EnUS();
	return thx.cultures.EnUS.culture;
}
thx.cultures.EnUS.prototype.__class__ = thx.cultures.EnUS;
rg.query.QueryTimerUpdate = function(query,elapse) {
	if( query === $_ ) return;
	if(elapse == null) elapse = 5000;
	this.query = query;
	query.onClose.add($closure(this,"pause"));
	this.elapse = elapse;
	this.paused = true;
	this.resume();
}
rg.query.QueryTimerUpdate.__name__ = ["rg","query","QueryTimerUpdate"];
rg.query.QueryTimerUpdate.prototype.elapse = null;
rg.query.QueryTimerUpdate.prototype.paused = null;
rg.query.QueryTimerUpdate.prototype.query = null;
rg.query.QueryTimerUpdate.prototype.pause = function() {
	if(this.paused) return;
	this.paused = true;
}
rg.query.QueryTimerUpdate.prototype.resume = function() {
	if(!this.paused) return;
	this.paused = false;
	this.query.onComplete.addOnce($closure(this,"scheduleNext"));
	this.query.load();
}
rg.query.QueryTimerUpdate.prototype.scheduleNext = function() {
	if(this.paused) return;
	haxe.Timer.delay($closure(this,"execute"),this.elapse);
}
rg.query.QueryTimerUpdate.prototype.execute = function() {
	if(this.paused) return;
	this.query.onComplete.addOnce($closure(this,"scheduleNext"));
	this.query.load();
}
rg.query.QueryTimerUpdate.prototype.__class__ = rg.query.QueryTimerUpdate;
thx.js.DataChoice = function(update,enter,exit) {
	if( update === $_ ) return;
	this._update = update;
	this._enter = enter;
	this._exit = exit;
}
thx.js.DataChoice.__name__ = ["thx","js","DataChoice"];
thx.js.DataChoice.prototype._update = null;
thx.js.DataChoice.prototype._enter = null;
thx.js.DataChoice.prototype._exit = null;
thx.js.DataChoice.prototype.enter = function() {
	return new thx.js.PreEnterSelection(this._enter,this);
}
thx.js.DataChoice.prototype.exit = function() {
	return new thx.js.ExitSelection(this._exit,this);
}
thx.js.DataChoice.prototype.update = function() {
	return new thx.js.UpdateSelection(this._update,this);
}
thx.js.DataChoice.prototype.__class__ = thx.js.DataChoice;
thx.js.BoundSelection = function(groups) {
	if( groups === $_ ) return;
	thx.js.BaseSelection.call(this,groups);
}
thx.js.BoundSelection.__name__ = ["thx","js","BoundSelection"];
thx.js.BoundSelection.__super__ = thx.js.BaseSelection;
for(var k in thx.js.BaseSelection.prototype ) thx.js.BoundSelection.prototype[k] = thx.js.BaseSelection.prototype[k];
thx.js.BoundSelection.prototype.html = function() {
	return new thx.js.AccessDataHtml(this);
}
thx.js.BoundSelection.prototype.text = function() {
	return new thx.js.AccessDataText(this);
}
thx.js.BoundSelection.prototype.attr = function(name) {
	return new thx.js.AccessDataAttribute(name,this);
}
thx.js.BoundSelection.prototype.classed = function() {
	return new thx.js.AccessDataClassed(this);
}
thx.js.BoundSelection.prototype.property = function(name) {
	return new thx.js.AccessDataProperty(name,this);
}
thx.js.BoundSelection.prototype.style = function(name) {
	return new thx.js.AccessDataStyle(name,this);
}
thx.js.BoundSelection.prototype.transition = function() {
	return new thx.js.BoundTransition(this);
}
thx.js.BoundSelection.prototype.data = function(d,join) {
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
	return new thx.js.DataChoice(update,enter,exit);
}
thx.js.BoundSelection.prototype.dataf = function(fd,join) {
	if(null == join) {
		var update = [], enter = [], exit = [], i = 0;
		var _g = 0, _g1 = this.groups;
		while(_g < _g1.length) {
			var group = _g1[_g];
			++_g;
			thx.js.BaseSelection.bind(group,fd(Reflect.field(group.parentNode,"__data__"),i++),update,enter,exit);
		}
		return new thx.js.DataChoice(update,enter,exit);
	} else {
		var update = [], enter = [], exit = [], i = 0;
		var _g = 0, _g1 = this.groups;
		while(_g < _g1.length) {
			var group = _g1[_g];
			++_g;
			thx.js.BaseSelection.bindJoin(join,group,fd(Reflect.field(group.parentNode,"__data__"),i++),update,enter,exit);
		}
		return new thx.js.DataChoice(update,enter,exit);
	}
}
thx.js.BoundSelection.prototype.selfData = function() {
	return this.dataf(function(d,_) {
		return d;
	});
}
thx.js.BoundSelection.prototype.each = function(f) {
	return this.eachNode(function(n,i) {
		f(Reflect.field(n,"__data__"),i);
	});
}
thx.js.BoundSelection.prototype.sort = function(comparator) {
	return this.sortNode(function(a,b) {
		return comparator(Reflect.field(a,"__data__"),Reflect.field(b,"__data__"));
	});
}
thx.js.BoundSelection.prototype.filter = function(f) {
	return this.filterNode(function(n,i) {
		return f(Reflect.field(n,"__data__"),i);
	});
}
thx.js.BoundSelection.prototype.map = function(f) {
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
	return this.createSelection(ngroups);
}
thx.js.BoundSelection.prototype.first = function(f) {
	return this.firstNode(function(n) {
		return f(Reflect.field(n,"__data__"));
	});
}
thx.js.BoundSelection.prototype.on = function(type,listener,capture) {
	if(capture == null) capture = false;
	return this.onNode(type,null == listener?null:function(n,i) {
		listener(Reflect.field(n,"__data__"),i);
	},capture);
}
thx.js.BoundSelection.prototype.__class__ = thx.js.BoundSelection;
thx.js.ResumeSelection = function(groups) {
	if( groups === $_ ) return;
	thx.js.BoundSelection.call(this,groups);
}
thx.js.ResumeSelection.__name__ = ["thx","js","ResumeSelection"];
thx.js.ResumeSelection.__super__ = thx.js.BoundSelection;
for(var k in thx.js.BoundSelection.prototype ) thx.js.ResumeSelection.prototype[k] = thx.js.BoundSelection.prototype[k];
thx.js.ResumeSelection.create = function(groups) {
	return new thx.js.ResumeSelection(groups);
}
thx.js.ResumeSelection.prototype.createSelection = function(groups) {
	return new thx.js.ResumeSelection(groups);
}
thx.js.ResumeSelection.prototype.__class__ = thx.js.ResumeSelection;
thx.js.PreEnterSelection = function(enter,choice) {
	if( enter === $_ ) return;
	this.groups = enter;
	this._choice = choice;
}
thx.js.PreEnterSelection.__name__ = ["thx","js","PreEnterSelection"];
thx.js.PreEnterSelection.prototype.groups = null;
thx.js.PreEnterSelection.prototype._choice = null;
thx.js.PreEnterSelection.prototype.append = function(name) {
	var qname = thx.xml.Namespace.qualify(name);
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
thx.js.PreEnterSelection.prototype.insert = function(name,before,beforeSelector) {
	var qname = thx.xml.Namespace.qualify(name);
	var insertDom = function(node) {
		var n = js.Lib.document.createElement(name), bf = null != before?before:thx.js.Dom.selectNode(node).select(beforeSelector).node();
		node.insertBefore(n,bf);
		return n;
	};
	var insertNsDom = function(node) {
		var n = js.Lib.document.createElementNS(qname.space,qname.local), bf = null != before?before:thx.js.Dom.selectNode(node).select(beforeSelector).node();
		node.insertBefore(n,bf);
		return n;
	};
	return this._select(null == qname?insertDom:insertNsDom);
}
thx.js.PreEnterSelection.prototype.createSelection = function(groups) {
	return new thx.js.EnterSelection(groups,this._choice);
}
thx.js.PreEnterSelection.prototype._select = function(selectf) {
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
	return this.createSelection(subgroups);
}
thx.js.PreEnterSelection.prototype.__class__ = thx.js.PreEnterSelection;
thx.js.EnterSelection = function(enter,choice) {
	if( enter === $_ ) return;
	thx.js.BoundSelection.call(this,enter);
	this._choice = choice;
}
thx.js.EnterSelection.__name__ = ["thx","js","EnterSelection"];
thx.js.EnterSelection.__super__ = thx.js.BoundSelection;
for(var k in thx.js.BoundSelection.prototype ) thx.js.EnterSelection.prototype[k] = thx.js.BoundSelection.prototype[k];
thx.js.EnterSelection.prototype._choice = null;
thx.js.EnterSelection.prototype.createSelection = function(groups) {
	return new thx.js.EnterSelection(groups,this._choice);
}
thx.js.EnterSelection.prototype.exit = function() {
	return this._choice.exit();
}
thx.js.EnterSelection.prototype.update = function() {
	return this._choice.update();
}
thx.js.EnterSelection.prototype.__class__ = thx.js.EnterSelection;
thx.js.ExitSelection = function(exit,choice) {
	if( exit === $_ ) return;
	thx.js.UnboundSelection.call(this,exit);
	this._choice = choice;
}
thx.js.ExitSelection.__name__ = ["thx","js","ExitSelection"];
thx.js.ExitSelection.__super__ = thx.js.UnboundSelection;
for(var k in thx.js.UnboundSelection.prototype ) thx.js.ExitSelection.prototype[k] = thx.js.UnboundSelection.prototype[k];
thx.js.ExitSelection.prototype._choice = null;
thx.js.ExitSelection.prototype.createSelection = function(groups) {
	return new thx.js.ExitSelection(groups,this._choice);
}
thx.js.ExitSelection.prototype.enter = function() {
	return this._choice.enter();
}
thx.js.ExitSelection.prototype.update = function() {
	return this._choice.update();
}
thx.js.ExitSelection.prototype.__class__ = thx.js.ExitSelection;
thx.js.UpdateSelection = function(update,choice) {
	if( update === $_ ) return;
	thx.js.BoundSelection.call(this,update);
	this._choice = choice;
}
thx.js.UpdateSelection.__name__ = ["thx","js","UpdateSelection"];
thx.js.UpdateSelection.__super__ = thx.js.BoundSelection;
for(var k in thx.js.BoundSelection.prototype ) thx.js.UpdateSelection.prototype[k] = thx.js.BoundSelection.prototype[k];
thx.js.UpdateSelection.prototype._choice = null;
thx.js.UpdateSelection.prototype.createSelection = function(groups) {
	return new thx.js.UpdateSelection(groups,this._choice);
}
thx.js.UpdateSelection.prototype.enter = function() {
	return this._choice.enter();
}
thx.js.UpdateSelection.prototype.exit = function() {
	return this._choice.exit();
}
thx.js.UpdateSelection.prototype.__class__ = thx.js.UpdateSelection;
if(!thx.error) thx.error = {}
thx.error.Error = function(message,params,param,pos) {
	if( message === $_ ) return;
	thx.util.Message.call(this,message,params,param);
	this.pos = pos;
}
thx.error.Error.__name__ = ["thx","error","Error"];
thx.error.Error.__super__ = thx.util.Message;
for(var k in thx.util.Message.prototype ) thx.error.Error.prototype[k] = thx.util.Message.prototype[k];
thx.error.Error.prototype.pos = null;
thx.error.Error.prototype.inner = null;
thx.error.Error.prototype.setInner = function(inner) {
	this.inner = inner;
	return this;
}
thx.error.Error.prototype.toString = function() {
	try {
		return Strings.format(this.message,this.params);
	} catch( e ) {
		var ps = this.pos.className + "." + this.pos.methodName + "(" + this.pos.lineNumber + ")";
		return "";
	}
}
thx.error.Error.prototype.__class__ = thx.error.Error;
Arrays = function() { }
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
		var _g1 = 1, _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(Reflect.compare(a,arr[i]) > 0) a = arr[p = i];
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
Arrays.max = function(arr,f) {
	if(arr.length == 0) return null;
	if(null == f) {
		var a = arr[0], p = 0;
		var _g1 = 1, _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(Reflect.compare(a,arr[i]) < 0) a = arr[p = i];
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
	return Iterators.reduce(arr.iterator(),f,initialValue);
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
Arrays.prototype.__class__ = Arrays;
rg.svg.SvgBorderLine = function(panel,anchor,className) {
	if( panel === $_ ) return;
	if(className == null) className = "border";
	rg.svg.SvgLayer.call(this,panel);
	this.setAnchor(anchor);
	this.setClassName(className);
}
rg.svg.SvgBorderLine.__name__ = ["rg","svg","SvgBorderLine"];
rg.svg.SvgBorderLine.__super__ = rg.svg.SvgLayer;
for(var k in rg.svg.SvgLayer.prototype ) rg.svg.SvgBorderLine.prototype[k] = rg.svg.SvgLayer.prototype[k];
rg.svg.SvgBorderLine.prototype.anchor = null;
rg.svg.SvgBorderLine.prototype.className = null;
rg.svg.SvgBorderLine.prototype._line = null;
rg.svg.SvgBorderLine.prototype.init = function() {
	this._line = this.svg.append("svg:line").attr("class").string(this.className);
}
rg.svg.SvgBorderLine.prototype.redraw = function() {
}
rg.svg.SvgBorderLine.prototype.resize = function() {
	if(null == this._line || null == this.anchor || null == this.width) return;
	switch( (this.anchor)[1] ) {
	case 0:
		this._line.attr("x1")["float"](0).attr("x2")["float"](this.width).attr("y1")["float"](0).attr("y2")["float"](0);
		break;
	case 3:
		this._line.attr("x1")["float"](this.width).attr("x2")["float"](this.width).attr("y1")["float"](0).attr("y2")["float"](this.height);
		break;
	case 2:
		this._line.attr("x1")["float"](0).attr("x2")["float"](0).attr("y1")["float"](0).attr("y2")["float"](this.height);
		break;
	case 1:
		this._line.attr("x1")["float"](0).attr("x2")["float"](this.width).attr("y1")["float"](this.height).attr("y2")["float"](this.height);
		break;
	}
}
rg.svg.SvgBorderLine.prototype.setClassName = function(v) {
	this.className = v;
	if(null != this._line) this._line.attr("class").string(v);
	return v;
}
rg.svg.SvgBorderLine.prototype.setAnchor = function(v) {
	this.anchor = v;
	this.resize();
	return v;
}
rg.svg.SvgBorderLine.prototype.__class__ = rg.svg.SvgBorderLine;
rg.query.Query = function(p) {
	if( p === $_ ) return;
	this.data = null;
	this.onLoading = new hxevents.Notifier();
	this.onComplete = new hxevents.Notifier();
	this.onClose = new hxevents.Notifier();
	this.onChange = new hxevents.Dispatcher();
	this.onData = new hxevents.Dispatcher();
	this.onError = new hxevents.Dispatcher();
}
rg.query.Query.__name__ = ["rg","query","Query"];
rg.query.Query.normalizeName = function(s) {
	if(s == null) return null;
	if("." == s.substr(0,1)) return s.substr(1); else return s;
}
rg.query.Query.prototype.data = null;
rg.query.Query.prototype.onLoading = null;
rg.query.Query.prototype.onComplete = null;
rg.query.Query.prototype.onClose = null;
rg.query.Query.prototype.onChange = null;
rg.query.Query.prototype.onData = null;
rg.query.Query.prototype.onError = null;
rg.query.Query.prototype.close = function() {
	this.onClose.dispatch();
	this.onClose.clear();
	this.onLoading.clear();
	this.onError.clear();
	this.onData.clear();
	this.onChange.clear();
	this.onComplete.clear();
}
rg.query.Query.prototype.load = function() {
	throw new thx.error.AbstractMethod({ fileName : "Query.hx", lineNumber : 48, className : "rg.query.Query", methodName : "load"});
}
rg.query.Query.prototype.__class__ = rg.query.Query;
rg.query.QueryExecutor = function(executor) {
	if( executor === $_ ) return;
	rg.query.Query.call(this);
	this.executor = executor;
	this.time = new rg.query.TimeQuery();
}
rg.query.QueryExecutor.__name__ = ["rg","query","QueryExecutor"];
rg.query.QueryExecutor.__super__ = rg.query.Query;
for(var k in rg.query.Query.prototype ) rg.query.QueryExecutor.prototype[k] = rg.query.Query.prototype[k];
rg.query.QueryExecutor.prototype.time = null;
rg.query.QueryExecutor.prototype.executor = null;
rg.query.QueryExecutor.prototype._data = null;
rg.query.QueryExecutor.prototype.queryObject = function() {
	return { start : this.time.queryStartTime(), end : this.time.queryEndTime(), periodicity : this.time.periodicity};
}
rg.query.QueryExecutor.prototype.executeLoad = function(success,error) {
	throw new thx.error.AbstractMethod({ fileName : "Query.hx", lineNumber : 87, className : "rg.query.QueryExecutor", methodName : "executeLoad"});
}
rg.query.QueryExecutor.prototype.load = function() {
	this.time.update();
	this.onLoading.dispatch();
	this.executeLoad($closure(this,"_success"),$closure(this,"_error"));
}
rg.query.QueryExecutor.prototype.transform = function(v) {
	return v;
}
rg.query.QueryExecutor.prototype.order = function(v) {
	return v;
}
rg.query.QueryExecutor.prototype.close = function() {
	rg.query.Query.prototype.close.call(this);
	this.time.close();
}
rg.query.QueryExecutor.prototype._success = function(v) {
	if(!Dynamics.same(v,this._data)) this.onChange.dispatch(this.data = this.order(this.transform(this._data = v)));
	this.onData.dispatch(this.data);
	this.onComplete.dispatch();
}
rg.query.QueryExecutor.prototype._error = function(v) {
	this.onError.dispatch(v);
	this.onComplete.dispatch();
}
rg.query.QueryExecutor.prototype.__class__ = rg.query.QueryExecutor;
rg.query.QueryPath = function(executor,path) {
	if( executor === $_ ) return;
	rg.query.QueryExecutor.call(this,executor);
	this.setPath(path);
}
rg.query.QueryPath.__name__ = ["rg","query","QueryPath"];
rg.query.QueryPath.__super__ = rg.query.QueryExecutor;
for(var k in rg.query.QueryExecutor.prototype ) rg.query.QueryPath.prototype[k] = rg.query.QueryExecutor.prototype[k];
rg.query.QueryPath.prototype.path = null;
rg.query.QueryPath.prototype.setPath = function(v) {
	if(null == v || 0 == v.length) throw new thx.error.NullArgument("v",null,{ fileName : "Query.hx", lineNumber : 144, className : "rg.query.QueryPath", methodName : "setPath"}); else null;
	return this.path = v;
}
rg.query.QueryPath.prototype.__class__ = rg.query.QueryPath;
rg.query.QueryEventsCount = function(executor,path,events) {
	if( executor === $_ ) return;
	rg.query.QueryPath.call(this,executor,path);
	this.events = events;
}
rg.query.QueryEventsCount.__name__ = ["rg","query","QueryEventsCount"];
rg.query.QueryEventsCount.__super__ = rg.query.QueryPath;
for(var k in rg.query.QueryPath.prototype ) rg.query.QueryEventsCount.prototype[k] = rg.query.QueryPath.prototype[k];
rg.query.QueryEventsCount.prototype.events = null;
rg.query.QueryEventsCount.prototype.filter = function(value,count) {
	return true;
}
rg.query.QueryEventsCount.prototype.order = function(values) {
	{
		values.sort(null == function(a,b) {
			return Floats.compare(b.value,a.value);
		}?Dynamics.compare:function(a,b) {
			return Floats.compare(b.value,a.value);
		});
		values;
	}
	return values;
}
rg.query.QueryEventsCount.prototype.load = function() {
	if(null == this.events) {
		var loader = new rg.query.QueryEventNames(this.executor,this.path), me = this;
		loader.onData.add(function(d) {
			if(null == d) d = [];
			me.events = d.map(function(d1,i) {
				return Strings.ltrim(d1,".");
			});
			loader.close();
			me.load();
		});
		loader.load();
	} else rg.query.QueryPath.prototype.load.call(this);
}
rg.query.QueryEventsCount.prototype.executeLoad = function(success,error) {
	var count = 0, total = this.events.length, result = [], totalcount = 0;
	var _success = function(pos,p,v) {
		result[pos] = { label : p, value : v};
		if(++count == total) success(result);
	};
	var query = this.queryObject();
	var _g1 = 0, _g = this.events.length;
	while(_g1 < _g) {
		var i = _g1++;
		var event = this.events[i];
		query.property = event;
		this.executor.propertyCount(this.path,query,(function(f,a1,a2) {
			return function(a3) {
				return f(a1,a2,a3);
			};
		})(_success,i,event),error);
	}
}
rg.query.QueryEventsCount.prototype.__class__ = rg.query.QueryEventsCount;
thx.math.scale.LinearT = function(p) {
	if( p === $_ ) return;
	this._domain = [0.0,1.0];
	this._range = null;
	this.f = thx.math.scale.LinearT._f;
	this._clamp = false;
	this.rescale();
}
thx.math.scale.LinearT.__name__ = ["thx","math","scale","LinearT"];
thx.math.scale.LinearT._f = function(_,_1,_2) {
	return function(_3) {
		return null;
	};
}
thx.math.scale.LinearT.scaleBilinear = function(domain,range,uninterpolate,interpolate) {
	var u = uninterpolate(domain[0],domain[1]), i = interpolate(range[0],range[1],null);
	return function(x) {
		return i(u(x));
	};
}
thx.math.scale.LinearT.scalePolylinear = function(domain,range,uninterpolate,interpolate) {
	var u = [], i = [];
	var _g1 = 1, _g = domain.length;
	while(_g1 < _g) {
		var j = _g1++;
		u.push(uninterpolate(domain[j - 1],domain[j]));
		i.push(interpolate(range[j - 1],range[j],null));
	}
	return function(x) {
		var j = Arrays.bisectRight(domain,x,1,domain.length - 1) - 1;
		return i[j](u[j](x));
	};
}
thx.math.scale.LinearT.prototype._domain = null;
thx.math.scale.LinearT.prototype._range = null;
thx.math.scale.LinearT.prototype.f = null;
thx.math.scale.LinearT.prototype._clamp = null;
thx.math.scale.LinearT.prototype._output = null;
thx.math.scale.LinearT.prototype.rescale = function() {
	if(null == this._range) return this;
	var linear = this._domain.length == 2?thx.math.scale.LinearT.scaleBilinear:thx.math.scale.LinearT.scalePolylinear, uninterpolate = this._clamp?Floats.uninterpolateClampf:Floats.uninterpolatef;
	this._output = linear(this._domain,this._range,uninterpolate,this.f);
	return this;
}
thx.math.scale.LinearT.prototype.scale = function(x,_) {
	return this._output(x);
}
thx.math.scale.LinearT.prototype.getDomain = function() {
	return this._domain;
}
thx.math.scale.LinearT.prototype.domain = function(d) {
	this._domain = d;
	return this.rescale();
}
thx.math.scale.LinearT.prototype.getRange = function() {
	return this._range;
}
thx.math.scale.LinearT.prototype.range = function(r) {
	this._range = r;
	return this.rescale();
}
thx.math.scale.LinearT.prototype.getInterpolate = function() {
	return this.f;
}
thx.math.scale.LinearT.prototype.interpolatef = function(x) {
	this.f = x;
	return this.rescale();
}
thx.math.scale.LinearT.prototype.getClamp = function() {
	return this._clamp;
}
thx.math.scale.LinearT.prototype.clamp = function(v) {
	this._clamp = v;
	return this.rescale();
}
thx.math.scale.LinearT.prototype.tickRange = function(m) {
	var start = Math.min(this._domain[0],this._domain[1]), stop = Math.max(this._domain[0],this._domain[1]), span = stop - start, step = Math.pow(10,Math.floor(Math.log(span / m) / 2.302585092994046)), err = m / (span / step);
	if(err <= .15) step *= 10; else if(err <= .35) step *= 5; else if(err <= -75) step *= 2;
	return { start : Math.ceil(start / step) * step, stop : Math.floor(stop / step) * step + step * .5, step : step};
}
thx.math.scale.LinearT.prototype.ticks = function(m) {
	var range = this.tickRange(m);
	return Floats.range(range.start,range.stop,range.step);
}
thx.math.scale.LinearT.prototype.tickFormat = function(m) {
	var n = Math.max(0,-Math.floor(Math.log(this.tickRange(m).step) / 2.302585092994046 + .01));
	return Floats.formatf("D:" + n);
}
thx.math.scale.LinearT.prototype.__class__ = thx.math.scale.LinearT;
thx.math.scale.LinearT.__interfaces__ = [thx.math.scale.IScale];
Ints = function() { }
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
Ints.prototype.__class__ = Ints;
thx.math.scale.Log = function(p) {
	if( p === $_ ) return;
	thx.math.scale.NumericScale.call(this);
	this.log = thx.math.scale.Log._log;
	this.pow = thx.math.scale.Log._pow;
}
thx.math.scale.Log.__name__ = ["thx","math","scale","Log"];
thx.math.scale.Log.__super__ = thx.math.scale.NumericScale;
for(var k in thx.math.scale.NumericScale.prototype ) thx.math.scale.Log.prototype[k] = thx.math.scale.NumericScale.prototype[k];
thx.math.scale.Log._log = function(x) {
	return Math.log(x) / 2.302585092994046;
}
thx.math.scale.Log._logn = function(x) {
	return -Math.log(-x) / 2.302585092994046;
}
thx.math.scale.Log._pow = function(x) {
	return Math.pow(10,x);
}
thx.math.scale.Log._pown = function(x) {
	return -Math.pow(10,-x);
}
thx.math.scale.Log.prototype.log = null;
thx.math.scale.Log.prototype.pow = null;
thx.math.scale.Log.prototype.scale = function(x,i) {
	return thx.math.scale.NumericScale.prototype.scale.call(this,this.log(x));
}
thx.math.scale.Log.prototype.invert = function(x,i) {
	return this.pow(thx.math.scale.NumericScale.prototype.invert.call(this,x));
}
thx.math.scale.Log.prototype.getDomain = function() {
	var me = this;
	return thx.math.scale.NumericScale.prototype.getDomain.call(this).map(function(d,_) {
		return me.pow(d);
	});
}
thx.math.scale.Log.prototype.domain = function(d) {
	if(Arrays.min(d) < 0) {
		this.log = thx.math.scale.Log._logn;
		this.pow = thx.math.scale.Log._pown;
	} else {
		this.log = thx.math.scale.Log._log;
		this.pow = thx.math.scale.Log._pow;
	}
	return thx.math.scale.NumericScale.prototype.domain.call(this,[this.log(d[0]),this.log(d[1])]);
}
thx.math.scale.Log.prototype.ticks = function() {
	var d = thx.math.scale.NumericScale.prototype.getDomain.call(this), ticks = [];
	if(d.every(function(d1,_) {
		return Math.isFinite(d1);
	})) {
		var i = Math.floor(d[0]), j = Math.ceil(d[1]), u = this.pow(d[0]), v = this.pow(d[1]);
		if(Reflect.compareMethods(this.log,thx.math.scale.Log._logn)) {
			ticks.push(this.pow(i));
			while(i++ < j) {
				var k = 9;
				do ticks.push(this.pow(i) * k); while(k-- > 0);
			}
		} else {
			do {
				var _g = 1;
				while(_g < 10) {
					var k = _g++;
					ticks.push(this.pow(i) * k);
				}
			} while(i++ < j);
			ticks.push(this.pow(i));
		}
		i = 0;
		while(ticks[i] < u) i++;
		j = ticks.length;
		while(ticks[j - 1] > v) j--;
		ticks = ticks.slice(i,j);
	}
	return ticks;
}
thx.math.scale.Log.prototype.tickFormat = function(v,i) {
	return thx.culture.FormatNumber.decimal(v,1);
}
thx.math.scale.Log.prototype.__class__ = thx.math.scale.Log;
js.Boot = function() { }
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
js.Boot.__trace = function(v,i) {
	var msg = i != null?i.fileName + ":" + i.lineNumber + ": ":"";
	msg += js.Boot.__unhtml(js.Boot.__string_rec(v,"")) + "<br/>";
	var d = document.getElementById("haxe:trace");
	if(d == null) alert("No haxe:trace element defined\n" + msg); else d.innerHTML += msg;
}
js.Boot.__clear_trace = function() {
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
}
js.Boot.__closure = function(o,f) {
	var m = o[f];
	if(m == null) return null;
	var f1 = function() {
		return m.apply(o,arguments);
	};
	f1.scope = o;
	f1.method = m;
	return f1;
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
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__") {
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
		if(x != x) return null;
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
	$closure = js.Boot.__closure;
}
js.Boot.prototype.__class__ = js.Boot;
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
rg.svg.SvgSpace = function(width,height,parentSelection,paddingTop,paddingRight,paddingBottom,paddingLeft) {
	if( width === $_ ) return;
	if(paddingTop == null) paddingTop = 0;
	this.svg = parentSelection.append("svg:svg");
	this._paddingTop = paddingTop;
	this._paddingRight = null == paddingRight?this._paddingTop:paddingRight;
	this._paddingBottom = null == paddingBottom?this._paddingTop:paddingBottom;
	this._paddingLeft = null == paddingLeft?this._paddingRight:paddingLeft;
	this._stackFrame = new rg.layout.StackFrame(rg.layout.Disposition.Fill(this._paddingTop,this._paddingBottom));
	this.workspace = new rg.svg._SvgSpace.SvgSpaceContainer(this.svg,this._stackFrame);
	this.resize(width,height);
}
rg.svg.SvgSpace.__name__ = ["rg","svg","SvgSpace"];
rg.svg.SvgSpace.prototype.svg = null;
rg.svg.SvgSpace.prototype.workspace = null;
rg.svg.SvgSpace.prototype._stackFrame = null;
rg.svg.SvgSpace.prototype._paddingTop = null;
rg.svg.SvgSpace.prototype._paddingBottom = null;
rg.svg.SvgSpace.prototype._paddingLeft = null;
rg.svg.SvgSpace.prototype._paddingRight = null;
rg.svg.SvgSpace.prototype.resize = function(width,height) {
	if(this._stackFrame.width == width && this._stackFrame.height == height) return;
	this.svg.attr("width")["float"](width).attr("height")["float"](height);
	var sf = this._stackFrame;
	sf.setLayout(this._paddingLeft,this._paddingTop,width - this._paddingLeft - this._paddingRight,height - this._paddingTop - this._paddingBottom);
}
rg.svg.SvgSpace.prototype.redraw = function() {
	this.workspace.redraw();
}
rg.svg.SvgSpace.prototype.createPanel = function(disp) {
	var panel = new rg.svg.SvgPanel(new rg.layout.StackFrame(disp));
	this.workspace.addPanel(panel);
	return panel;
}
rg.svg.SvgSpace.prototype.createContainer = function(disp,orientation) {
	var panel = new rg.svg.SvgContainer(new rg.layout.StackFrame(disp),orientation);
	this.workspace.addPanel(panel);
	return panel;
}
rg.svg.SvgSpace.prototype._filters = null;
rg.svg.SvgSpace.prototype.getFiltersContainer = function() {
	if(null == this._filters) this._filters = this.svg.insert("svg:g",this.svg.node().firstChild).attr("id").string("filters");
	return this._filters;
}
rg.svg.SvgSpace.prototype.addEffect = function(effect) {
	var name = "rgeffect" + ++rg.svg.SvgSpace._filterid;
	effect.appendTo(this.getFiltersContainer(),name);
	return name;
}
rg.svg.SvgSpace.prototype.removeEffect = function(name) {
	this.svg.select("filter#" + name).remove();
}
rg.svg.SvgSpace.prototype.__class__ = rg.svg.SvgSpace;
rg.svg.SvgContainer = function(frame,orientation) {
	if( frame === $_ ) return;
	this.stack = new rg.layout.Stack(frame.width,frame.height,orientation);
	this.panels = [];
	rg.svg.SvgPanel.call(this,frame);
}
rg.svg.SvgContainer.__name__ = ["rg","svg","SvgContainer"];
rg.svg.SvgContainer.__super__ = rg.svg.SvgPanel;
for(var k in rg.svg.SvgPanel.prototype ) rg.svg.SvgContainer.prototype[k] = rg.svg.SvgPanel.prototype[k];
rg.svg.SvgContainer.prototype.stack = null;
rg.svg.SvgContainer.prototype.panels = null;
rg.svg.SvgContainer.prototype.addPanel = function(panel) {
	return this.addPanels([panel]);
}
rg.svg.SvgContainer.prototype.addPanels = function(it) {
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
	return this;
}
rg.svg.SvgContainer.prototype.removePanel = function(panel) {
	if(!this.panels.remove(panel)) return this;
	this.stack.removeChild((function($this) {
		var $r;
		var $t = panel.frame;
		if(Std["is"]($t,rg.layout.StackFrame)) $t; else throw "Class cast error";
		$r = $t;
		return $r;
	}(this)));
	var f = panel;
	f.setParent(null);
	return this;
}
rg.svg.SvgContainer.prototype.createPanel = function(disp) {
	var panel = new rg.svg.SvgPanel(new rg.layout.StackFrame(disp));
	this.addPanel(panel);
	return panel;
}
rg.svg.SvgContainer.prototype.createContainer = function(disp,orientation) {
	var panel = new rg.svg.SvgContainer(new rg.layout.StackFrame(disp),orientation);
	this.addPanel(panel);
	return panel;
}
rg.svg.SvgContainer.prototype.redraw = function() {
	rg.svg.SvgPanel.prototype.redraw.call(this);
	Iterators.each(this.panels.iterator(),function(v,i) {
		v.redraw();
	});
}
rg.svg.SvgContainer.prototype.reframe = function() {
	rg.svg.SvgPanel.prototype.reframe.call(this);
	this.stack.setSize(this.frame.width,this.frame.height);
	this.stack.reflow();
	this.redraw();
}
rg.svg.SvgContainer.prototype.__class__ = rg.svg.SvgContainer;
if(!rg.svg._SvgSpace) rg.svg._SvgSpace = {}
rg.svg._SvgSpace.SvgSpaceContainer = function(svgcontainer,frame) {
	if( svgcontainer === $_ ) return;
	rg.svg.SvgContainer.call(this,frame,rg.layout.Orientation.Vertical);
	this.init(svgcontainer);
	this.reframe();
}
rg.svg._SvgSpace.SvgSpaceContainer.__name__ = ["rg","svg","_SvgSpace","SvgSpaceContainer"];
rg.svg._SvgSpace.SvgSpaceContainer.__super__ = rg.svg.SvgContainer;
for(var k in rg.svg.SvgContainer.prototype ) rg.svg._SvgSpace.SvgSpaceContainer.prototype[k] = rg.svg.SvgContainer.prototype[k];
rg.svg._SvgSpace.SvgSpaceContainer.prototype.__class__ = rg.svg._SvgSpace.SvgSpaceContainer;
thx.svg.LineInterpolator = { __ename__ : ["thx","svg","LineInterpolator"], __constructs__ : ["Linear","StepBefore","StepAfter","Basis","BasisOpen","BasisClosed","Cardinal","CardinalOpen","CardinalClosed","Monotone"] }
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
thx.svg.LineInterpolator.BasisOpen = ["BasisOpen",4];
thx.svg.LineInterpolator.BasisOpen.toString = $estr;
thx.svg.LineInterpolator.BasisOpen.__enum__ = thx.svg.LineInterpolator;
thx.svg.LineInterpolator.BasisClosed = ["BasisClosed",5];
thx.svg.LineInterpolator.BasisClosed.toString = $estr;
thx.svg.LineInterpolator.BasisClosed.__enum__ = thx.svg.LineInterpolator;
thx.svg.LineInterpolator.Cardinal = function(tension) { var $x = ["Cardinal",6,tension]; $x.__enum__ = thx.svg.LineInterpolator; $x.toString = $estr; return $x; }
thx.svg.LineInterpolator.CardinalOpen = function(tension) { var $x = ["CardinalOpen",7,tension]; $x.__enum__ = thx.svg.LineInterpolator; $x.toString = $estr; return $x; }
thx.svg.LineInterpolator.CardinalClosed = function(tension) { var $x = ["CardinalClosed",8,tension]; $x.__enum__ = thx.svg.LineInterpolator; $x.toString = $estr; return $x; }
thx.svg.LineInterpolator.Monotone = ["Monotone",9];
thx.svg.LineInterpolator.Monotone.toString = $estr;
thx.svg.LineInterpolator.Monotone.__enum__ = thx.svg.LineInterpolator;
rg.query.QueryEventsSeries = function(executor,path,events) {
	if( executor === $_ ) return;
	rg.query.QueryPath.call(this,executor,path);
	this.events = events;
}
rg.query.QueryEventsSeries.__name__ = ["rg","query","QueryEventsSeries"];
rg.query.QueryEventsSeries.__super__ = rg.query.QueryPath;
for(var k in rg.query.QueryPath.prototype ) rg.query.QueryEventsSeries.prototype[k] = rg.query.QueryPath.prototype[k];
rg.query.QueryEventsSeries.forLineChart = function(executor,path) {
	var query = new rg.query.QueryEventsSeries(executor,path);
	query.transform = rg.query.Transform.arrayTimeSeries(query,function() {
		return query.events;
	});
	return query;
}
rg.query.QueryEventsSeries.prototype.events = null;
rg.query.QueryEventsSeries.prototype.load = function() {
	if(null == this.events) {
		var loader = new rg.query.QueryEventNames(this.executor,this.path), me = this;
		loader.onData.add(function(d) {
			if(null == d) d = [];
			me.events = d.map(function(d1,i) {
				return Strings.ltrim(d1,".");
			});
			loader.close();
			me.load();
		});
		loader.load();
	} else rg.query.QueryPath.prototype.load.call(this);
}
rg.query.QueryEventsSeries.prototype.executeLoad = function(success,error) {
	var count = 0, total = this.events.length, result = [], totalcount = 0;
	var _success = function(pos,p,v) {
		result[pos] = v;
		if(++count == total) success(result);
	};
	var query = this.queryObject();
	var _g1 = 0, _g = this.events.length;
	while(_g1 < _g) {
		var i = _g1++;
		var event = this.events[i];
		query.property = event;
		this.executor.propertySeries(this.path,query,(function(f,a1,a2) {
			return function(a3) {
				return f(a1,a2,a3);
			};
		})(_success,i,event),error);
	}
}
rg.query.QueryEventsSeries.prototype.__class__ = rg.query.QueryEventsSeries;
thx.js.AccessStyle = function(name,selection) {
	if( name === $_ ) return;
	thx.js.Access.call(this,selection);
	this.name = name;
}
thx.js.AccessStyle.__name__ = ["thx","js","AccessStyle"];
thx.js.AccessStyle.__super__ = thx.js.Access;
for(var k in thx.js.Access.prototype ) thx.js.AccessStyle.prototype[k] = thx.js.Access.prototype[k];
thx.js.AccessStyle.prototype.name = null;
thx.js.AccessStyle.prototype.get = function() {
	var n = this.name;
	return this.selection.firstNode(function(node) {
		return js.Lib.window.getComputedStyle(node,null).getPropertyValue(n);
	});
}
thx.js.AccessStyle.prototype.getFloat = function() {
	var v = this.get();
	if(thx.js.AccessStyle.refloat.match(v)) return Std.parseFloat(thx.js.AccessStyle.refloat.matched(1)); else return Math.NaN;
}
thx.js.AccessStyle.prototype.remove = function() {
	var n = this.name;
	this.selection.eachNode(function(node,i) {
		node.style.removeProperty(n);
	});
	return this.selection;
}
thx.js.AccessStyle.prototype.string = function(v,priority) {
	var n = this.name;
	if(null == priority) priority = "";
	this.selection.eachNode(function(node,i) {
		node.style.setProperty(n,v,priority);
	});
	return this.selection;
}
thx.js.AccessStyle.prototype["float"] = function(v,priority) {
	var s = "" + v, n = this.name;
	if(null == priority) priority = "";
	this.selection.eachNode(function(node,i) {
		node.style.setProperty(n,s,priority);
	});
	return this.selection;
}
thx.js.AccessStyle.prototype.color = function(v,priority) {
	var s = v.toRgbString(), n = this.name;
	if(null == priority) priority = "";
	this.selection.eachNode(function(node,i) {
		node.style.setProperty(n,s,priority);
	});
	return this.selection;
}
thx.js.AccessStyle.prototype.__class__ = thx.js.AccessStyle;
thx.js.AccessDataStyle = function(name,selection) {
	if( name === $_ ) return;
	thx.js.AccessStyle.call(this,name,selection);
}
thx.js.AccessDataStyle.__name__ = ["thx","js","AccessDataStyle"];
thx.js.AccessDataStyle.__super__ = thx.js.AccessStyle;
for(var k in thx.js.AccessStyle.prototype ) thx.js.AccessDataStyle.prototype[k] = thx.js.AccessStyle.prototype[k];
thx.js.AccessDataStyle.prototype.stringf = function(v,priority) {
	var n = this.name;
	if(null == priority) priority = "";
	this.selection.eachNode(function(node,i) {
		var s = v(Reflect.field(node,"__data__"),i);
		if(s == null) node.style.removeProperty(n); else node.style.setProperty(n,s,priority);
	});
	return this.selection;
}
thx.js.AccessDataStyle.prototype.floatf = function(v,priority) {
	var n = this.name;
	if(null == priority) priority = "";
	this.selection.eachNode(function(node,i) {
		var s = v(Reflect.field(node,"__data__"),i);
		if(s == null) node.style.removeProperty(n); else node.style.setProperty(n,"" + s,priority);
	});
	return this.selection;
}
thx.js.AccessDataStyle.prototype.colorf = function(v,priority) {
	var n = this.name;
	if(null == priority) priority = "";
	this.selection.eachNode(function(node,i) {
		var s = v(Reflect.field(node,"__data__"),i);
		if(s == null) node.style.removeProperty(n); else node.style.setProperty(n,"" + s.toRgbString(),priority);
	});
	return this.selection;
}
thx.js.AccessDataStyle.prototype.data = function() {
	return this.stringf(function(d,_) {
		return "" + d;
	});
}
thx.js.AccessDataStyle.prototype.__class__ = thx.js.AccessDataStyle;
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
	var cl;
	try {
		cl = eval(name);
	} catch( e ) {
		cl = null;
	}
	if(cl == null || cl.__name__ == null) return null;
	return cl;
}
Type.resolveEnum = function(name) {
	var e;
	try {
		e = eval(name);
	} catch( err ) {
		e = null;
	}
	if(e == null || e.__ename__ == null) return null;
	return e;
}
Type.createInstance = function(cl,args) {
	if(args.length <= 3) return new cl(args[0],args[1],args[2]);
	if(args.length > 8) throw "Too many arguments";
	return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
}
Type.createEmptyInstance = function(cl) {
	return new cl($_);
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
	var a = Reflect.fields(c.prototype);
	a.remove("__class__");
	return a;
}
Type.getClassFields = function(c) {
	var a = Reflect.fields(c);
	a.remove("__name__");
	a.remove("__interfaces__");
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
Type.prototype.__class__ = Type;
Floats = function() { }
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
Floats.round = function(x,n) {
	if(n == null) n = 2;
	return n != 0?Math.round(x * Math.pow(10,n)) * Math.pow(10,-n):Math.round(x);
}
Floats.prototype.__class__ = Floats;
rg.svg.SvgScaleTick = function(panel,anchor) {
	if( panel === $_ ) return;
	rg.svg.SvgLayer.call(this,panel);
	this._length = rg.svg.SvgScaleTick.defaultTickLength;
	this.anchor(anchor);
	this.svg.attr("class").string("scale-ticks");
}
rg.svg.SvgScaleTick.__name__ = ["rg","svg","SvgScaleTick"];
rg.svg.SvgScaleTick.__super__ = rg.svg.SvgLayer;
for(var k in rg.svg.SvgLayer.prototype ) rg.svg.SvgScaleTick.prototype[k] = rg.svg.SvgLayer.prototype[k];
rg.svg.SvgScaleTick.ofLinear = function(panel,anchor,scale) {
	return new rg.svg.SvgScaleTick(panel,anchor).scale($closure(scale,"scale")).range($closure(scale,"range")).ticks($closure(scale,"ticks")).key(function(d,i) {
		return "" + d;
	});
}
rg.svg.SvgScaleTick.ofOrdinal = function(panel,anchor,scale) {
	var _scale = function(d,i) {
		var size = (function($this) {
			var $r;
			switch( (anchor)[1] ) {
			case 0:
			case 1:
				$r = panel.frame.width;
				break;
			case 2:
			case 3:
				$r = panel.frame.height;
				break;
			}
			return $r;
		}(this)), s = scale.rangePoints(0,size,1);
		return s.scale(d);
	};
	return new rg.svg.SvgScaleTick(panel,anchor).scale(_scale).range($closure(scale,"range")).ticks($closure(scale,"getDomain")).key(function(d,i) {
		return "" + d;
	});
}
rg.svg.SvgScaleTick.boundsOfLinear = function(panel,anchor,scale) {
	return rg.svg.SvgScaleTick.ofLinear(panel,anchor,scale).ticks(function() {
		return scale.getDomain();
	});
}
rg.svg.SvgScaleTick.prototype._anchor = null;
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
	return "translate(" + this._scale(d,i) + ",0)";
}
rg.svg.SvgScaleTick.prototype.translateY = function(d,i) {
	return "translate(0," + this._scale(d,i) + ")";
}
rg.svg.SvgScaleTick.prototype.redraw = function() {
	if(null == this._maxRange) return;
	this._range([0.0,this._maxRange()]);
	var g = this.svg.selectAll("g." + this._axis).data(this._ticks(),this._key).update().attr("transform").stringf(this._t);
	g.selectAll("line.tick").attr(this._oaxis + "1")["float"](this._pos()).attr(this._oaxis + "2")["float"](this._pos() + this._length);
	g.enter().append("svg:g").attr("class").string(this._axis).attr("transform").stringf(this._t).append("svg:line").attr("class").string("tick").attr(this._oaxis + "1")["float"](this._pos()).attr(this._oaxis + "2")["float"](this._pos() + this._length);
	g.exit().remove();
}
rg.svg.SvgScaleTick.prototype.getRange = function() {
	return this._range;
}
rg.svg.SvgScaleTick.prototype.range = function(f) {
	this._range = f;
	return this;
}
rg.svg.SvgScaleTick.prototype.getScale = function() {
	return this._scale;
}
rg.svg.SvgScaleTick.prototype.scale = function(f) {
	this._scale = f;
	return this;
}
rg.svg.SvgScaleTick.prototype.getTicks = function() {
	return this._ticks;
}
rg.svg.SvgScaleTick.prototype.ticks = function(f) {
	this._ticks = f;
	return this;
}
rg.svg.SvgScaleTick.prototype.getKey = function() {
	return this._key;
}
rg.svg.SvgScaleTick.prototype.key = function(f) {
	this._key = f;
	return this;
}
rg.svg.SvgScaleTick.prototype.getAnchor = function() {
	return this._anchor;
}
rg.svg.SvgScaleTick.prototype.anchor = function(o) {
	if(Type.enumEq(o,this._anchor)) return this;
	var panel = this.panel;
	switch( (this._anchor = o)[1] ) {
	case 0:
	case 1:
		this._axis = "x";
		this._oaxis = "y";
		this._t = $closure(this,"translateX");
		this._maxRange = function() {
			return panel.frame.width;
		};
		break;
	case 2:
	case 3:
		this._axis = "y";
		this._oaxis = "x";
		this._t = $closure(this,"translateY");
		this._maxRange = function() {
			return panel.frame.height;
		};
		break;
	}
	this.adjustPositionFunction();
	return this;
}
rg.svg.SvgScaleTick.prototype.getLength = function() {
	return this._length;
}
rg.svg.SvgScaleTick.prototype.length = function(v) {
	this._length = v;
	this.adjustPositionFunction();
	return this;
}
rg.svg.SvgScaleTick.prototype.adjustPositionFunction = function() {
	var me = this;
	switch( (this._anchor)[1] ) {
	case 0:
	case 2:
		this._pos = function() {
			return 0;
		};
		break;
	case 1:
		this._pos = function() {
			return me.panel.frame.height - me._length;
		};
		break;
	case 3:
		this._pos = function() {
			return me.panel.frame.width - me._length;
		};
		break;
	}
}
rg.svg.SvgScaleTick.prototype.__class__ = rg.svg.SvgScaleTick;
rg.query.QueryEventNames = function(executor,path) {
	if( executor === $_ ) return;
	rg.query.QueryPath.call(this,executor,path);
}
rg.query.QueryEventNames.__name__ = ["rg","query","QueryEventNames"];
rg.query.QueryEventNames.__super__ = rg.query.QueryPath;
for(var k in rg.query.QueryPath.prototype ) rg.query.QueryEventNames.prototype[k] = rg.query.QueryPath.prototype[k];
rg.query.QueryEventNames.prototype.executeLoad = function(success,error) {
	var query = this.queryObject();
	query.type = "property";
	this.executor.children(this.path,query,success,error);
}
rg.query.QueryEventNames.prototype.__class__ = rg.query.QueryEventNames;
rg.svg.SvgScaleRule = function(panel,orientation) {
	if( panel === $_ ) return;
	rg.svg.SvgLayer.call(this,panel);
	this.orientation(orientation);
	this.svg.attr("class").string("scale-rules");
}
rg.svg.SvgScaleRule.__name__ = ["rg","svg","SvgScaleRule"];
rg.svg.SvgScaleRule.__super__ = rg.svg.SvgLayer;
for(var k in rg.svg.SvgLayer.prototype ) rg.svg.SvgScaleRule.prototype[k] = rg.svg.SvgLayer.prototype[k];
rg.svg.SvgScaleRule.ofLinear = function(panel,orientation,scale) {
	return new rg.svg.SvgScaleRule(panel,orientation).scale($closure(scale,"scale")).range($closure(scale,"range")).ticks($closure(scale,"ticks")).key(function(d,i) {
		return "" + d;
	});
}
rg.svg.SvgScaleRule.ofOrdinal = function(panel,orientation,scale) {
	var _scale = function(d,i) {
		var size = (function($this) {
			var $r;
			switch( (orientation)[1] ) {
			case 0:
				$r = panel.frame.width;
				break;
			case 1:
				$r = panel.frame.height;
				break;
			}
			return $r;
		}(this)), s = scale.rangePoints(0,size,1);
		return s.scale(d);
	};
	return new rg.svg.SvgScaleRule(panel,orientation).scale(_scale).range($closure(scale,"range")).ticks($closure(scale,"getDomain")).key(function(d,i) {
		return "" + d;
	});
}
rg.svg.SvgScaleRule.boundsOfLinear = function(panel,orientation,scale) {
	return rg.svg.SvgScaleRule.ofLinear(panel,orientation,scale).ticks(function() {
		return scale.getDomain();
	});
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
	return "translate(" + this._scale(d,i) + ",0)";
}
rg.svg.SvgScaleRule.prototype.translateY = function(d,i) {
	return "translate(0," + this._scale(d,i) + ")";
}
rg.svg.SvgScaleRule.prototype.redraw = function() {
	if(null == this._maxRange) return;
	this._range([0.0,this._maxRange()]);
	var g = this.svg.selectAll("g." + this._axis).data(this._ticks(),this._key);
	g.update().attr("transform").stringf(this._t).selectAll("line.rule").attr(this._oaxis + "1")["float"](0).attr(this._oaxis + "2")["float"](this._length());
	g.enter().append("svg:g").attr("class").string(this._axis).attr("transform").stringf(this._t).append("svg:line").attr("class").string("rule").attr(this._oaxis + "1")["float"](0).attr(this._oaxis + "2")["float"](this._length());
	g.exit().remove();
}
rg.svg.SvgScaleRule.prototype.getRange = function() {
	return this._range;
}
rg.svg.SvgScaleRule.prototype.range = function(f) {
	this._range = f;
	return this;
}
rg.svg.SvgScaleRule.prototype.getScale = function() {
	return this._scale;
}
rg.svg.SvgScaleRule.prototype.scale = function(f) {
	this._scale = f;
	return this;
}
rg.svg.SvgScaleRule.prototype.getTicks = function() {
	return this._ticks;
}
rg.svg.SvgScaleRule.prototype.ticks = function(f) {
	this._ticks = f;
	return this;
}
rg.svg.SvgScaleRule.prototype.getKey = function() {
	return this._key;
}
rg.svg.SvgScaleRule.prototype.key = function(f) {
	this._key = f;
	return this;
}
rg.svg.SvgScaleRule.prototype.getOrientation = function() {
	return this._orientation;
}
rg.svg.SvgScaleRule.prototype.orientation = function(o) {
	if(Type.enumEq(o,this._orientation)) return this;
	var me = this;
	switch( (this._orientation = o)[1] ) {
	case 0:
		this._axis = "x";
		this._oaxis = "y";
		this._t = $closure(this,"translateX");
		this._maxRange = function() {
			return me.width;
		};
		this._length = function() {
			return me.height;
		};
		break;
	case 1:
		this._axis = "y";
		this._oaxis = "x";
		this._t = $closure(this,"translateY");
		this._maxRange = function() {
			return me.height;
		};
		this._length = function() {
			return me.width;
		};
		break;
	}
	return this;
}
rg.svg.SvgScaleRule.prototype.__class__ = rg.svg.SvgScaleRule;
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
rg.layout.Disposition = { __ename__ : ["rg","layout","Disposition"], __constructs__ : ["Fixed","Variable","Fill","Floating","Proportional"] }
rg.layout.Disposition.Fixed = function(before,after,size) { var $x = ["Fixed",0,before,after,size]; $x.__enum__ = rg.layout.Disposition; $x.toString = $estr; return $x; }
rg.layout.Disposition.Variable = function(before,after,percent,min,max) { var $x = ["Variable",1,before,after,percent,min,max]; $x.__enum__ = rg.layout.Disposition; $x.toString = $estr; return $x; }
rg.layout.Disposition.Fill = function(before,after,min,max) { var $x = ["Fill",2,before,after,min,max]; $x.__enum__ = rg.layout.Disposition; $x.toString = $estr; return $x; }
rg.layout.Disposition.Floating = function(x,y,width,height) { var $x = ["Floating",3,x,y,width,height]; $x.__enum__ = rg.layout.Disposition; $x.toString = $estr; return $x; }
rg.layout.Disposition.Proportional = function(before,after,ratio) { var $x = ["Proportional",4,before,after,ratio]; $x.__enum__ = rg.layout.Disposition; $x.toString = $estr; return $x; }
rg.svg.SvgPieChart = function(panel) {
	if( panel === $_ ) return;
	this._padding = 30;
	this._created = 0;
	rg.svg.SvgLayer.call(this,panel);
	this._ease = thx.math.Equations.elasticf();
	this._duration = 1500;
	this.redraw();
}
rg.svg.SvgPieChart.__name__ = ["rg","svg","SvgPieChart"];
rg.svg.SvgPieChart.__super__ = rg.svg.SvgLayer;
for(var k in rg.svg.SvgLayer.prototype ) rg.svg.SvgPieChart.prototype[k] = rg.svg.SvgLayer.prototype[k];
rg.svg.SvgPieChart.prototype._total = null;
rg.svg.SvgPieChart.prototype._data = null;
rg.svg.SvgPieChart.prototype._labels = null;
rg.svg.SvgPieChart.prototype._arc = null;
rg.svg.SvgPieChart.prototype._startarc = null;
rg.svg.SvgPieChart.prototype._bigarc = null;
rg.svg.SvgPieChart.prototype._pie = null;
rg.svg.SvgPieChart.prototype._r = null;
rg.svg.SvgPieChart.prototype._padding = null;
rg.svg.SvgPieChart.prototype._created = null;
rg.svg.SvgPieChart.prototype._ease = null;
rg.svg.SvgPieChart.prototype._duration = null;
rg.svg.SvgPieChart.prototype.tooltip = function(label,value,total) {
	return label + ": " + Ints.format(value);
}
rg.svg.SvgPieChart.prototype.label = function(label,value,total) {
	return thx.culture.FormatNumber.percent(value / total * 100,1);
}
rg.svg.SvgPieChart.prototype._label = function(d,i) {
	return this.label(this._labels[i],d.value,this._total);
}
rg.svg.SvgPieChart.prototype.init = function() {
	rg.svg.SvgLayer.prototype.init.call(this);
	this.svg.classed().add("pie-chart");
	this.svg.append("svg:defs");
}
rg.svg.SvgPieChart.prototype.redraw = function() {
	this._r = Math.min(this.width,this.height) / 2 - this._padding;
	this._pie = new thx.geom.layout.Pie();
	this._arc = thx.svg.Arc.fromAngleObject().innerRadius(this._r * .2).outerRadius(this._r);
	this._startarc = thx.svg.Arc.fromAngleObject().innerRadius(this._r * .2).outerRadius(this._r * .2);
	this._bigarc = thx.svg.Arc.fromAngleObject().innerRadius(this._r * .4).outerRadius(this._r + this._padding * .9);
	if(null == this._data || this._data.length == 0) return;
	this._redraw();
}
rg.svg.SvgPieChart.prototype.getData = function() {
	return this._data;
}
rg.svg.SvgPieChart.prototype.data = function(d) {
	this._data = [];
	this._labels = [];
	this._total = 0.0;
	var _g = 0;
	while(_g < d.length) {
		var item = d[_g];
		++_g;
		this._data.push(item.value);
		this._labels.push(item.label);
		this._total += item.value;
	}
	this.redraw();
}
rg.svg.SvgPieChart.prototype.sliceid = function(d,i) {
	return this._labels[i];
}
rg.svg.SvgPieChart.prototype._keyLayer = function(_,i) {
	return this._labels[i];
}
rg.svg.SvgPieChart.prototype._redraw = function() {
	var vis = this.svg.data([this._data]).update();
	var selection = vis.selectAll("g.group").dataf($closure(this._pie,"pie"),$closure(this,"sliceid"));
	selection.update().select("path").transition().ease(this._ease).duration(null,this._duration).attr("d").stringf($closure(this._arc,"shape"));
	selection.update().select("text").text().stringf($closure(this,"_label")).transition().ease(this._ease).duration(null,this._duration).attr("transform").stringf($closure(this,"transformLabel")).attr("display").stringf(function(d,i) {
		return d.value > .15?null:"none";
	});
	var arcs = selection.enter().append("svg:g").attr("class").stringf(function(d,i) {
		return "group item-" + i;
	}).attr("transform").string("translate(" + (this._padding + this._r) + "," + (this._padding + this._r) + ")");
	arcs.onNode("mouseover.animation",$closure(this,"_highlight")).onNode("mouseout.animation",$closure(this,"_backtonormal"));
	arcs.on("mousemove.tooltip",$closure(this,"_showtooltip")).on("mouseout.tooltip",$closure(this,"_hidetooltip"));
	arcs.append("svg:path").attr("class").string("slice").attr("d").stringf($closure(this._startarc,"shape"));
	arcs.eachNode($closure(this,"_arcinp"));
	arcs.append("svg:text").attr("transform").stringf($closure(this,"transformStartLabel")).attr("dy").string(".35em").attr("text-anchor").string("middle").attr("display").stringf(function(d,i) {
		return d.value > .15?null:"none";
	}).text().stringf($closure(this,"_label")).style("opacity")["float"](0).eachNode($closure(this,"_arcint"));
}
rg.svg.SvgPieChart.prototype._arcinp = function(n,i) {
	var g = thx.js.Dom.selectNodeData(n), slice = g.select("path.slice"), shape = this._arc.shape(Reflect.field(n,"__data__"));
	var t = g.append("svg:path").attr("d").string(shape), box = t.node().getBBox();
	t.remove();
	var color = slice.style("fill").get();
	if(this.svg.select("defs").select("#rg_pie_gradient_" + i).empty()) {
		var max = Math.max(box.width,box.height), min = Math.min(box.width,box.height), cx = -box.x * 100 / box.width, cy = -box.y * 100 / box.height;
		var stops = this.svg.select("defs").append("svg:radialGradient").attr("id").string("rg_pie_gradient_" + i).attr("cx").string(cx + "%").attr("cy").string(cy + "%").attr("r").string(100 * this._r / min + "%");
		stops.append("svg:stop").attr("offset").string("0%").attr("stop-color").string(thx.color.Hsl.darker(thx.color.Hsl.toHsl(thx.color.Colors.parse(color)),1.5).toRgbString()).attr("stop-opacity")["float"](1);
		stops.append("svg:stop").attr("offset").string("90%").attr("stop-color").string(color).attr("stop-opacity")["float"](1);
	}
	g.selectAll("path.slice").attr("style").string("fill:url(#rg_pie_gradient_" + i + ")").transition().ease(this._ease).duration(null,this._duration).delay(null,150 * (i - this._created)).attr("d").string(shape);
}
rg.svg.SvgPieChart.prototype._arcint = function(n,i) {
	thx.js.Dom.selectNodeData(n).transition().ease(this._ease).duration(null,this._duration).delay(null,150 * (i - this._created)).style("opacity")["float"](1).attr("transform").stringf($closure(this,"transformLabel"));
	if(i == this._data.length - 1) this._created = i;
}
rg.svg.SvgPieChart.prototype._highlight = function(d,i) {
	var slice = thx.js.Dom.selectNodeData(d).selectAll("path");
	slice.transition().ease(this._ease).duration(null,this._duration).attr("d").stringf($closure(this._bigarc,"shape"));
}
rg.svg.SvgPieChart.prototype._backtonormal = function(d,i) {
	var slice = thx.js.Dom.selectNodeData(d).selectAll("path");
	slice.transition().ease(this._ease).duration(null,this._duration).attr("d").stringf($closure(this._arc,"shape"));
}
rg.svg.SvgPieChart.prototype._showtooltip = function(d,i) {
	var v = this.tooltip(this._labels[i],d.value,this._total);
	rg.chart.ToolTip.display(v);
}
rg.svg.SvgPieChart.prototype._hidetooltip = function(d,i) {
	rg.chart.ToolTip.display(null);
}
rg.svg.SvgPieChart.prototype.transformLabel = function(d,i) {
	var c = this._arc.centroid(d);
	var a = -90 + 57.29577951308232088 * ((d.endAngle - d.startAngle) / 2 + d.startAngle);
	if(a > 90) a -= 180;
	return "translate(" + c[0] + "," + c[1] + ") rotate(" + a + ")";
}
rg.svg.SvgPieChart.prototype.transformStartLabel = function(d,i) {
	var c = this._startarc.centroid(d);
	var a = -90 + 57.29577951308232088 * ((d.endAngle - d.startAngle) / 2 + d.startAngle);
	if(a > 90) a -= 180;
	return "translate(" + c[0] + "," + c[1] + ") rotate(" + a + ")";
}
rg.svg.SvgPieChart.prototype.__class__ = rg.svg.SvgPieChart;
if(!rg.chart) rg.chart = {}
rg.chart.ToolTip = function(p) {
	if( p === $_ ) return;
	this._visible = false;
	this._el = js.Lib.document.createElement("div");
	js.Lib.document.body.appendChild(this._el);
	this._el.id = "tooltip";
	this._el.style.position = "absolute";
	this._el.style.display = "none";
}
rg.chart.ToolTip.__name__ = ["rg","chart","ToolTip"];
rg.chart.ToolTip._tooltip = null;
rg.chart.ToolTip.display = function(text,x,y) {
	if(null == rg.chart.ToolTip._tooltip) rg.chart.ToolTip._tooltip = new rg.chart.ToolTip();
	if(Strings.empty(text)) rg.chart.ToolTip._tooltip.hide(); else {
		rg.chart.ToolTip._tooltip.setText(text);
		if(null == x) {
			var px = js.Lib.isIE?event.clientX + document.documentElement.scrollLeft:thx.js.Dom.event.pageX;
			x = px;
		}
		if(null == y) {
			var py = js.Lib.isIE?event.clientY + document.documentElement.scrollTop:thx.js.Dom.event.pageY;
			y = py;
		}
		rg.chart.ToolTip._tooltip.show();
		rg.chart.ToolTip._tooltip.moveAt(x,y);
	}
}
rg.chart.ToolTip.prototype._visible = null;
rg.chart.ToolTip.prototype._el = null;
rg.chart.ToolTip.prototype._text = null;
rg.chart.ToolTip.prototype.setText = function(text) {
	if(text != this._text) this._el.innerHTML = this._text = text;
}
rg.chart.ToolTip.prototype.hide = function() {
	if(!this._visible) return;
	this._visible = false;
	this._el.style.display = "none";
}
rg.chart.ToolTip.prototype.show = function() {
	if(this._visible) return;
	this._visible = true;
	this._el.style.display = "block";
}
rg.chart.ToolTip.prototype.moveAt = function(x,y) {
	var w = this._el.clientWidth;
	var h = this._el.clientHeight;
	this._el.style.left = x - w / 2 + "px";
	this._el.style.top = y - h - 10 + "px";
}
rg.chart.ToolTip.prototype.__class__ = rg.chart.ToolTip;
thx.js.AccessClassed = function(selection) {
	if( selection === $_ ) return;
	thx.js.Access.call(this,selection);
}
thx.js.AccessClassed.__name__ = ["thx","js","AccessClassed"];
thx.js.AccessClassed.__super__ = thx.js.Access;
for(var k in thx.js.Access.prototype ) thx.js.AccessClassed.prototype[k] = thx.js.Access.prototype[k];
thx.js.AccessClassed.getRe = function(name) {
	return new EReg("(^|\\s+)" + thx.text.ERegs.escapeERegChars(name) + "(\\s+|$)","g");
}
thx.js.AccessClassed.prototype.exists = function(name) {
	return this.selection.firstNode(function(node) {
		var list = node.classList;
		if(null != list) return list.contains(name);
		var cls = node.className;
		var re = new EReg("(^|\\s+)" + thx.text.ERegs.escapeERegChars(name) + "(\\s+|$)","g");
		var bv = cls.baseVal;
		return re.match(null != bv?bv:cls);
	});
}
thx.js.AccessClassed.prototype.remove = function(name) {
	this.selection.eachNode((function(f,a1) {
		return function(a2,a3) {
			return f(a1,a2,a3);
		};
	})($closure(this,"_remove"),name));
	return this.selection;
}
thx.js.AccessClassed.prototype._remove = function(name,node,i) {
	var list = node.classList;
	if(null != list) {
		list.remove(name);
		return;
	}
	var cls = node.className, clsb = null != cls.baseVal, clsv = clsb?cls.baseVal:cls;
	var re = new EReg("(^|\\s+)" + thx.text.ERegs.escapeERegChars(name) + "(\\s+|$)","g");
	clsv = Strings.collapse(re.replace(clsv," "));
	if(clsb) cls.baseVal = clsv; else node.className = clsv;
}
thx.js.AccessClassed.prototype.add = function(name) {
	this.selection.eachNode((function(f,a1) {
		return function(a2,a3) {
			return f(a1,a2,a3);
		};
	})($closure(this,"_add"),name));
	return this.selection;
}
thx.js.AccessClassed.prototype._add = function(name,node,i) {
	var list = node.classList;
	if(null != list) {
		list.add(name);
		return;
	}
	var cls = node.className, clsb = null != cls.baseVal, clsv = clsb?cls.baseVal:cls;
	var re = new EReg("(^|\\s+)" + thx.text.ERegs.escapeERegChars(name) + "(\\s+|$)","g");
	if(!re.match(clsv)) {
		clsv = Strings.collapse(clsv + " " + name);
		if(clsb) cls.baseVal = clsv; else node.className = clsv;
	}
}
thx.js.AccessClassed.prototype.get = function() {
	var node = this.selection.node(), list = node.classList;
	if(null != list) return Ints.range(list.length).map(function(_,i) {
		return list.item(i);
	}).join(" ");
	var cls = node.className, clsb = null != cls.baseVal;
	if(clsb) return cls.baseVal; else return cls;
}
thx.js.AccessClassed.prototype.__class__ = thx.js.AccessClassed;
thx.js.AccessDataClassed = function(selection) {
	if( selection === $_ ) return;
	thx.js.AccessClassed.call(this,selection);
}
thx.js.AccessDataClassed.__name__ = ["thx","js","AccessDataClassed"];
thx.js.AccessDataClassed.__super__ = thx.js.AccessClassed;
for(var k in thx.js.AccessClassed.prototype ) thx.js.AccessDataClassed.prototype[k] = thx.js.AccessClassed.prototype[k];
thx.js.AccessDataClassed.prototype.removef = function(v) {
	var f = $closure(this,"_remove");
	this.selection.eachNode(function(node,i) {
		var c = v(Reflect.field(node,"__data__"),i);
		if(null != c) f(c,node,i);
	});
	return this.selection;
}
thx.js.AccessDataClassed.prototype.addf = function(v) {
	var f = $closure(this,"_add");
	this.selection.eachNode(function(node,i) {
		var c = v(Reflect.field(node,"__data__"),i);
		if(null != c) f(c,node,i);
	});
	return this.selection;
}
thx.js.AccessDataClassed.prototype.__class__ = thx.js.AccessDataClassed;
Types = function() { }
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
Types.prototype.__class__ = Types;
hxevents.EventException = { __ename__ : ["hxevents","EventException"], __constructs__ : ["StopPropagation"] }
hxevents.EventException.StopPropagation = ["StopPropagation",0];
hxevents.EventException.StopPropagation.toString = $estr;
hxevents.EventException.StopPropagation.__enum__ = hxevents.EventException;
Reflect = function() { }
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
Reflect.prototype.__class__ = Reflect;
if(!thx.culture.core) thx.culture.core = {}
thx.culture.core.DateTimeInfo = function(months,abbrMonths,days,abbrDays,shortDays,am,pm,separatorDate,separatorTime,firstWeekDay,patternYearMonth,patternMonthDay,patternDate,patternDateShort,patternDateRfc,patternDateTime,patternUniversal,patternSortable,patternTime,patternTimeShort) {
	if( months === $_ ) return;
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
if(!thx.date) thx.date = {}
thx.date.DateParser = function() { }
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
thx.date.DateParser.prototype.__class__ = thx.date.DateParser;
rg.util.Domain = function(type) {
	if( type === $_ ) return;
	this._type = type;
	this.onChange = new hxevents.Notifier();
	this._values = [];
}
rg.util.Domain.__name__ = ["rg","util","Domain"];
rg.util.Domain.prototype._values = null;
rg.util.Domain.prototype._type = null;
rg.util.Domain.prototype.onChange = null;
rg.util.Domain.prototype.set = function(index,value) {
	if(this._values[index] == value) return this;
	this._values[index] = value;
	this.onChange.dispatch();
	return this;
}
rg.util.Domain.prototype.get = function(index) {
	return this._values[index];
}
rg.util.Domain.prototype.setAll = function(a) {
	var changed = false, value;
	var _g1 = 0, _g = a.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(this._values[i] != (value = a[i])) {
			changed = true;
			this._values[i] = value;
		}
	}
	if(changed) this.onChange.dispatch();
	return this;
}
rg.util.Domain.prototype.getAll = function() {
	return this._values.copy();
}
rg.util.Domain.prototype.getType = function() {
	return this._type;
}
rg.util.Domain.prototype.__class__ = rg.util.Domain;
thx.math.scale.Linear = function(p) {
	if( p === $_ ) return;
	thx.math.scale.NumericScale.call(this);
	this.m = 10;
}
thx.math.scale.Linear.__name__ = ["thx","math","scale","Linear"];
thx.math.scale.Linear.__super__ = thx.math.scale.NumericScale;
for(var k in thx.math.scale.NumericScale.prototype ) thx.math.scale.Linear.prototype[k] = thx.math.scale.NumericScale.prototype[k];
thx.math.scale.Linear.prototype.m = null;
thx.math.scale.Linear.prototype.getModulo = function() {
	return this.m;
}
thx.math.scale.Linear.prototype.modulo = function(m) {
	this.m = m;
	return this;
}
thx.math.scale.Linear.prototype.tickRange = function() {
	var start = Arrays.min(this._domain), stop = Arrays.max(this._domain), span = stop - start, step = Math.pow(10,Math.floor(Math.log(span / this.m) / 2.302585092994046)), err = this.m / (span / step);
	if(err <= .15) step *= 10; else if(err <= .35) step *= 5; else if(err <= .75) step *= 2;
	return { start : Math.ceil(start / step) * step, stop : Math.floor(stop / step) * step + step * .5, step : step};
}
thx.math.scale.Linear.prototype.ticks = function() {
	var range = this.tickRange();
	return Floats.range(range.start,range.stop,range.step);
}
thx.math.scale.Linear.prototype.tickFormat = function(v,i) {
	var n = Math.max(0,-Math.floor(Math.log(this.tickRange().step) / 2.302585092994046 + .01));
	return Floats.format(v,"D:" + n);
}
thx.math.scale.Linear.prototype.__class__ = thx.math.scale.Linear;
thx.math.scale.LinearTime = function(p) {
	if( p === $_ ) return;
	thx.math.scale.Linear.call(this);
	this._usetimeticks = false;
	this._maxnumberofticks = 10;
}
thx.math.scale.LinearTime.__name__ = ["thx","math","scale","LinearTime"];
thx.math.scale.LinearTime.__super__ = thx.math.scale.Linear;
for(var k in thx.math.scale.Linear.prototype ) thx.math.scale.LinearTime.prototype[k] = thx.math.scale.Linear.prototype[k];
thx.math.scale.LinearTime.guessPeriodicity = function(a,b,disc) {
	if(disc == null) disc = 2;
	var delta = Math.abs(b - a);
	if(delta >= DateTools.days(365 * disc)) return "year"; else if(delta >= DateTools.days(30 * disc)) return "month"; else if(delta >= DateTools.days(7 * disc)) return "week"; else if(delta >= DateTools.days(disc)) return "day"; else if(delta >= DateTools.hours(disc)) return "hour"; else return "minute";
}
thx.math.scale.LinearTime.prototype._usetimeticks = null;
thx.math.scale.LinearTime.prototype._maxnumberofticks = null;
thx.math.scale.LinearTime.prototype._periodicity = null;
thx.math.scale.LinearTime.prototype.domain = function(d) {
	thx.math.scale.Linear.prototype.domain.call(this,d);
	this._periodicity = thx.math.scale.LinearTime.guessPeriodicity(d[0],d[1]);
	return this;
}
thx.math.scale.LinearTime.prototype.getPeriodicity = function() {
	return this._periodicity;
}
thx.math.scale.LinearTime.prototype.periodicity = function(v) {
	v = v.toLowerCase();
	if(!Arrays.exists(thx.math.scale.LinearTime.valids,v)) throw new thx.error.Error("invalid periodicity '{0}'",null,v,{ fileName : "LinearTime.hx", lineNumber : 58, className : "thx.math.scale.LinearTime", methodName : "periodicity"});
	this._periodicity = v;
	return this;
}
thx.math.scale.LinearTime.prototype.tickFormat = function(v,i) {
	var d = Date.fromTime(v);
	switch(this._periodicity) {
	case "minute":
		return thx.culture.FormatDate.timeShort(d);
	case "hour":
		return thx.culture.FormatDate.timeShort(d);
	case "day":case "week":
		return thx.culture.FormatDate.monthDay(d);
	case "month":
		return thx.culture.FormatDate.yearMonth(d);
	case "year":
		return thx.culture.FormatDate.year(d);
	}
	return "invalid date periodicity";
}
thx.math.scale.LinearTime.prototype.getUseTimeTicks = function() {
	return this._usetimeticks;
}
thx.math.scale.LinearTime.prototype.useTimeTicks = function(v) {
	this._usetimeticks = v;
	return this;
}
thx.math.scale.LinearTime.prototype.getMaxNumberOfTicks = function() {
	return this._maxnumberofticks;
}
thx.math.scale.LinearTime.prototype.maxNumberOfTicks = function(v) {
	this._maxnumberofticks = v;
	return this;
}
thx.math.scale.LinearTime.prototype.ticks = function() {
	if(this._usetimeticks) return this.timeTicks(); else return this.linearTicks();
}
thx.math.scale.LinearTime.prototype.linearTicks = function() {
	return thx.math.scale.Linear.prototype.ticks.call(this);
}
thx.math.scale.LinearTime.prototype.timeTicks = function() {
	var start = Arrays.min(this._domain);
	var stop = Arrays.max(this._domain);
	var step = 0.0;
	switch(this._periodicity) {
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
		return range;
	}
	var rsteps = Math.ceil((stop - start) / step);
	while(rsteps > this._maxnumberofticks) {
		step *= 2;
		rsteps = Math.ceil((stop - start) / step);
	}
	start = Math.ceil(start / step) * step;
	stop = Math.floor(stop / step) * step + step * .5;
	return Floats.range(start,stop,step);
}
thx.math.scale.LinearTime.prototype.__class__ = thx.math.scale.LinearTime;
if(!thx.text) thx.text = {}
thx.text.ERegs = function() { }
thx.text.ERegs.__name__ = ["thx","text","ERegs"];
thx.text.ERegs.escapeERegChars = function(s) {
	return thx.text.ERegs._escapePattern.customReplace(s,function(e) {
		return "\\" + e.matched(0);
	});
}
thx.text.ERegs.prototype.__class__ = thx.text.ERegs;
thx.culture.Language = function() { }
thx.culture.Language.__name__ = ["thx","culture","Language"];
thx.culture.Language.__super__ = thx.culture.Info;
for(var k in thx.culture.Info.prototype ) thx.culture.Language.prototype[k] = thx.culture.Info.prototype[k];
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
thx.culture.Language.prototype.__class__ = thx.culture.Language;
if(!thx.languages) thx.languages = {}
thx.languages.En = function(p) {
	if( p === $_ ) return;
	this.name = "en";
	this.english = "English";
	this["native"] = "English";
	this.iso2 = "en";
	this.iso3 = "eng";
	this.pluralRule = 1;
	thx.culture.Language.add(this);
}
thx.languages.En.__name__ = ["thx","languages","En"];
thx.languages.En.__super__ = thx.culture.Language;
for(var k in thx.culture.Language.prototype ) thx.languages.En.prototype[k] = thx.culture.Language.prototype[k];
thx.languages.En.language = null;
thx.languages.En.getLanguage = function() {
	if(null == thx.languages.En.language) thx.languages.En.language = new thx.languages.En();
	return thx.languages.En.language;
}
thx.languages.En.prototype.__class__ = thx.languages.En;
rg.svg.SvgTitle = function(panel,text,anchor,padding,className) {
	if( panel === $_ ) return;
	if(className == null) className = "title";
	if(padding == null) padding = 1;
	rg.svg.SvgLayer.call(this,panel);
	this.setText(text);
	this.setAnchor(anchor);
	this.setPadding(padding);
	this.setClassName(className);
}
rg.svg.SvgTitle.__name__ = ["rg","svg","SvgTitle"];
rg.svg.SvgTitle.__super__ = rg.svg.SvgLayer;
for(var k in rg.svg.SvgLayer.prototype ) rg.svg.SvgTitle.prototype[k] = rg.svg.SvgLayer.prototype[k];
rg.svg.SvgTitle.prototype.text = null;
rg.svg.SvgTitle.prototype.anchor = null;
rg.svg.SvgTitle.prototype.padding = null;
rg.svg.SvgTitle.prototype.className = null;
rg.svg.SvgTitle.prototype._text = null;
rg.svg.SvgTitle.prototype._gtext = null;
rg.svg.SvgTitle.prototype.init = function() {
	this._gtext = this.svg.append("svg:g");
	this._text = this._gtext.append("svg:text").attr("class").string(this.className).attr("text-anchor").string("middle");
}
rg.svg.SvgTitle.prototype.redraw = function() {
}
rg.svg.SvgTitle.prototype.resize = function() {
	if(null == this._text || null == this.anchor || null == this.width || this.padding == null) return;
	switch( (this.anchor)[1] ) {
	case 0:
		this._text.attr("transform").string("rotate(0)").attr("dominant-baseline").string("hanging");
		this._gtext.attr("transform").string("translate(" + this.width / 2 + "," + this.padding + ")");
		break;
	case 3:
		this._text.attr("transform").string("rotate(-90)").attr("dominant-baseline").string("baseline");
		this._gtext.attr("transform").string("translate(" + (this.width - this.padding) + "," + this.height / 2 + ")");
		break;
	case 2:
		this._text.attr("transform").string("rotate(90)").attr("dominant-baseline").string("baseline");
		this._gtext.attr("transform").string("translate(" + this.padding + "," + this.height / 2 + ")");
		break;
	case 1:
		this._text.attr("transform").string("rotate(0)").attr("dominant-baseline").string("baseline");
		this._gtext.attr("transform").string("translate(" + this.width / 2 + "," + (this.height - this.padding) + ")");
		break;
	}
}
rg.svg.SvgTitle.prototype.setText = function(v) {
	this.text = v;
	if(null != this._text) this._text.text().string(this.text);
	return v;
}
rg.svg.SvgTitle.prototype.setClassName = function(v) {
	this.className = v;
	if(null != this._text) this._text.attr("class").string(v);
	return v;
}
rg.svg.SvgTitle.prototype.setAnchor = function(v) {
	this.anchor = v;
	this.resize();
	return v;
}
rg.svg.SvgTitle.prototype.setPadding = function(v) {
	this.padding = v;
	this.resize();
	return v;
}
rg.svg.SvgTitle.prototype.__class__ = rg.svg.SvgTitle;
thx.svg.LineInterpolators = function() { }
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
thx.svg.LineInterpolators.prototype.__class__ = thx.svg.LineInterpolators;
rg.query.IExecutor = function() { }
rg.query.IExecutor.__name__ = ["rg","query","IExecutor"];
rg.query.IExecutor.prototype.children = null;
rg.query.IExecutor.prototype.propertyCount = null;
rg.query.IExecutor.prototype.propertySeries = null;
rg.query.IExecutor.prototype.propertyValues = null;
rg.query.IExecutor.prototype.propertyValueCount = null;
rg.query.IExecutor.prototype.propertyValueSeries = null;
rg.query.IExecutor.prototype.searchCount = null;
rg.query.IExecutor.prototype.searchSeries = null;
rg.query.IExecutor.prototype.intersect = null;
rg.query.IExecutor.prototype.__class__ = rg.query.IExecutor;
rg.svg.SvgFunnelChart = function(panel) {
	if( panel === $_ ) return;
	rg.svg.SvgLayer.call(this,panel);
	this.padding = 2;
}
rg.svg.SvgFunnelChart.__name__ = ["rg","svg","SvgFunnelChart"];
rg.svg.SvgFunnelChart.__super__ = rg.svg.SvgLayer;
for(var k in rg.svg.SvgLayer.prototype ) rg.svg.SvgFunnelChart.prototype[k] = rg.svg.SvgLayer.prototype[k];
rg.svg.SvgFunnelChart.prototype.padding = null;
rg.svg.SvgFunnelChart.prototype._data = null;
rg.svg.SvgFunnelChart.prototype.data = function(d) {
	this._data = d;
	this.redraw();
}
rg.svg.SvgFunnelChart.prototype.init = function() {
	this.svg.classed().add("funnel-chart").append("svg:defs");
}
rg.svg.SvgFunnelChart.prototype.label = function(d,i) {
	return rg.util.RGStrings.humanize(d.label);
}
rg.svg.SvgFunnelChart.prototype.redraw = function() {
	if(null == this._data || 0 == this._data.length) return;
	this.svg.selectAll("g").remove();
	this.svg.selectAll("radialGradient").remove();
	var d = this._data, choice = this.svg.selectAll("svg:g").data(d), m = d.length, p = this.padding, h = Math.floor(this.height / (m + 1)) - p, th = p + h, w = this.width / 2, tw = this.width, max = Arrays.floatMax(d,function(d1) {
		return d1.value;
	}), scale = new thx.math.scale.Linear().domain([0,max]).range([0.0,w]), fx1 = function(v) {
		return w - scale.scale(v);
	}, fx2 = function(v) {
		return tw - (w - scale.scale(v));
	}, next = function(o,i) {
		return i + 1 < m?d[i + 1].value:o.value;
	}, diagonal1 = new thx.svg.Diagonal().sourcef(function(o,i) {
		return [fx1(o.value),0.0];
	}).targetf(function(o,i) {
		return [fx1(next(o,i)),h];
	}), diagonal2 = new thx.svg.Diagonal().sourcef(function(o,i) {
		return [fx2(next(o,i)),h];
	}).targetf(function(o,i) {
		return [fx2(o.value),0.0];
	}), conj = function(v,h1,r,dir) {
		if(dir == null) dir = 0;
		if(r == null) r = false;
		var x1 = r?fx2(v):fx1(v), x2 = r?fx1(v) - fx2(v):fx2(v) - fx1(v), y1 = h1, a = 30, b = 3, d1 = r?dir == 0?1:0:dir;
		return " a " + a + " " + b + " 0 0 " + d1 + " " + x2 + " 0";
	}, conj1 = function(d1,i) {
		return conj(d1.value,0,true);
	}, conj2 = function(d1,i) {
		return conj(next(d1,i),h);
	}, conjr = function(d1,i) {
		return " M " + fx1(d1.value) + " 0 " + conj(d1.value,0) + conj(d1.value,0,true,1);
	}, me = this;
	var top = this.svg.selectAll("svg:g").data([d[0]]).enter().append("svg:g").attr("transform").stringf(function(d1,i) {
		return "translate(0," + th * (0.5 + i) + ")";
	});
	top.append("svg:path").attr("class").stringf(function(d1,i) {
		return "funnel-inside item-" + i;
	}).attr("d").stringf(conjr).eachNode($closure(this,"_internalSection"));
	var t = top.append("svg:g").attr("class").string("first-label").attr("transform").stringf(function(d1,i) {
		return "translate(" + w + "," + -h / 3 + ")";
	});
	var fontsize = Math.max(10,Math.round(this.height / 16)), bgcolor = "#fff", bgopacity = 0.95, frcolor = "#000", offset = 1;
	t.append("svg:text").attr("text-anchor").string("middle").attr("dominant-baseline").string("middle").style("fill").string(bgcolor).style("opacity")["float"](bgopacity).style("font-weight").string("bold").style("font-size").string(fontsize + "px").attr("transform").stringf(function(d1,i) {
		return "translate(" + offset + "," + offset + ")";
	}).text().stringf(function(d1,i) {
		return Floats.format(d1.value,"I");
	}).append("svg:tspan").attr("y").string(fontsize + "px").attr("x").string("0em").attr("class").string("subtitle").style("fill").string(bgcolor).style("font-weight").string("bold").style("font-size").string(fontsize + "px").text().stringf($closure(this,"label"));
	t.append("svg:text").attr("text-anchor").string("middle").attr("dominant-baseline").string("middle").style("fill").string(frcolor).style("font-weight").string("bold").style("font-size").string(fontsize + "px").text().stringf(function(d1,i) {
		return Floats.format(d1.value,"I");
	}).append("svg:tspan").attr("y").string(fontsize + "px").attr("x").string("0em").attr("class").string("subtitle").style("fill").string(frcolor).style("font-weight").string("bold").style("font-size").string(fontsize + "px").text().stringf($closure(this,"label"));
	var g = choice.enter().append("svg:g").attr("transform").stringf(function(d1,i) {
		return "translate(0," + (p + h) * (0.5 + i) + ")";
	});
	g.append("svg:path").attr("class").stringf(function(d1,i) {
		return "funnel-outside item-" + i;
	}).attr("d").stringf(function(d1,i) {
		var t1 = diagonal2.diagonal(d1,i).split("C");
		t1.shift();
		var d2 = "C" + t1.join("C");
		return diagonal1.diagonal(d1,i) + conj2(d1,i) + d2 + conj1(d1,i);
	});
	g.eachNode((function(f,a1) {
		return function(a2,a3) {
			return f(a1,a2,a3);
		};
	})($closure(this,"_externalSection"),max));
	var baloonContainer = this.svg, bb = { x : 0.0 + Math.round(tw / 5 * 3), y : 0.0, width : tw / 3, height : 0.0 + this.height}, arrowsize = Math.min(30,h / 3 * 2), arrowdata = this._data.slice(1).map(function(o,i) {
		return 100 * o.value / max;
	});
	g.each(function(d1,i) {
		if(i == 0) return;
		var baloon = new rg.svg.SvgBaloon(baloonContainer);
		baloon.setPreferredSide(3);
		baloon.setText([me.label(d1,0),Floats.format(d1.value,"I")]);
		baloon.setBoundingBox(bb);
		baloon.moveTo(tw / 2,Math.round(th * (0.5 + i) + arrowsize) + 0.5,false);
	});
	var ga = this.svg.selectAll("g.arrow").data(arrowdata).enter().append("svg:g").attr("class").string("arrow").attr("transform").stringf(function(d1,i) {
		return "translate(" + tw / 2 + "," + ((p + h) * (1.5 + i) + arrowsize / 2) + ")";
	});
	ga.append("svg:path").attr("transform").string("scale(1.1,0.85)translate(1,1)").attr("class").string("shadow").style("fill").string("#000").attr("opacity")["float"](.25).attr("d").string(thx.svg.Symbol.arrowDownWide(arrowsize * arrowsize));
	ga.append("svg:path").attr("transform").string("scale(1.1,0.8)").attr("d").string(thx.svg.Symbol.arrowDownWide(arrowsize * arrowsize));
	ga.append("svg:text").attr("text-anchor").string("middle").attr("dominant-baseline").string("baseline").style("font-size").string(Math.max(7,Math.round(arrowsize / 7 * 2)) + "px").style("font-family").string("Verdana, helvetica, sans-serif").text().stringf(function(d1,i) {
		return thx.culture.FormatNumber["int"](d1) + "%";
	});
}
rg.svg.SvgFunnelChart.prototype._internalSection = function(n,i) {
	var d = thx.js.Dom.selectNode(n), c = d.style("fill").get(), color = thx.color.Colors.parse(c);
	d.style("fill").string(thx.color.Hsl.darker(thx.color.Hsl.toHsl(color),0.6).toRgbString());
	var stops = this.svg.select("defs").append("svg:radialGradient").attr("id").string("rg_funnel_int_gradient_" + i).attr("cx").string("50%").attr("fx").string("75%").attr("cy").string("20%").attr("r").string(Math.round(75) + "%");
	stops.append("svg:stop").attr("offset").string("0%").attr("stop-color").string(thx.color.Hsl.darker(thx.color.Hsl.toHsl(color),1.25).toRgbString());
	stops.append("svg:stop").attr("offset").string("100%").attr("stop-color").string(thx.color.Hsl.darker(thx.color.Hsl.toHsl(color),0.4).toRgbString());
	d.attr("style").string("fill:url(#rg_funnel_int_gradient_" + i + ")");
}
rg.svg.SvgFunnelChart.prototype._externalSection = function(max,n,i) {
	var g = thx.js.Dom.selectNode(n), d = g.select("path"), c = d.style("fill").get(), color = thx.color.Colors.parse(c), v = i + 1 < this._data.length?(this._data[i].value - this._data[i + 1].value) / this._data[i].value:0, percent = max / this._data[i].value;
	if(null == color) color = new thx.color.Hsl(0,0,0.8);
	var stops = this.svg.select("defs").append("svg:radialGradient").attr("id").string("rg_funnel_ext_gradient_" + i).attr("gradientTransform").string("scale(" + percent + ",1)").attr("cx").string(50 / percent + "%").attr("fx").string(40 / percent + "%").attr("cy").string((1 - percent) * 3.0 + "%").attr("r").string("150%");
	var top = color.toRgbString();
	stops.append("svg:stop").attr("offset").string("30%").attr("stop-color").string(top);
	var middlecolor = thx.color.Hsl.darker(thx.color.Hsl.toHsl(color),1 - v * .75).toRgbString();
	stops.append("svg:stop").attr("offset").string("45%").attr("stop-color").string(middlecolor);
	var bottomcolor = thx.color.NamedColors.red.toRgbString();
	bottomcolor = color.toRgbString();
	stops.append("svg:stop").attr("offset").string("70%").attr("stop-color").string(bottomcolor);
	d.attr("style").string("fill:url(#rg_funnel_ext_gradient_" + i + ")");
}
rg.svg.SvgFunnelChart.prototype.resize = function() {
	this.redraw();
}
rg.svg.SvgFunnelChart.prototype.__class__ = rg.svg.SvgFunnelChart;
Lambda = function() { }
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
Lambda.prototype.__class__ = Lambda;
thx.svg.LineInternals = function() { }
thx.svg.LineInternals.__name__ = ["thx","svg","LineInternals"];
thx.svg.LineInternals.linePoints = function(data,x,y) {
	var points = [], i = -1, n = data.length, fx = null != x, fy = null != y, value;
	while(++i < n) {
		value = data[i];
		points.push([x(value,i),y(value,i)]);
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
		if(points.length < 3) return thx.svg.LineInternals.interpolatePoints(points,thx.svg.LineInterpolator.Linear);
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
	case 5:
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
	case 6:
		var tension = $e[2];
		if(null == tension) tension = .7;
		if(points.length < 3) return thx.svg.LineInternals.interpolatePoints(points,thx.svg.LineInterpolator.Linear); else return points[0][0] + "," + points[0][1] + thx.svg.LineInternals._lineHermite(points,thx.svg.LineInternals._lineCardinalTangents(points,tension));
		break;
	case 7:
		var tension = $e[2];
		return points.length < 4?thx.svg.LineInternals.interpolatePoints(points,thx.svg.LineInterpolator.Linear):points[1][0] + "," + points[1][1] + thx.svg.LineInternals._lineCardinalTangents(points,tension);
	case 8:
		var tension = $e[2];
		if(null == tension) tension = .7;
		return points.length < 3?thx.svg.LineInternals.interpolatePoints(points,thx.svg.LineInterpolator.Linear):points[0][0] + "," + points[0][1] + thx.svg.LineInternals._lineHermite(points,thx.svg.LineInternals._lineCardinalTangents([points[points.length - 2]].concat(points).concat([points[1]]),tension));
	case 9:
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
thx.svg.LineInternals.prototype.__class__ = thx.svg.LineInternals;
thx.math.scale.Ordinal = function(p) {
	if( p === $_ ) return;
	this._domain = [];
	this._range = [];
	this.rangeBand = 0.0;
}
thx.math.scale.Ordinal.__name__ = ["thx","math","scale","Ordinal"];
thx.math.scale.Ordinal.prototype._domain = null;
thx.math.scale.Ordinal.prototype._range = null;
thx.math.scale.Ordinal.prototype.rangeBand = null;
thx.math.scale.Ordinal.prototype.scale = function(x,_) {
	var i = this._domain.indexOf(x);
	if(i < 0) {
		this._domain.push(x);
		i = this._domain.length - 1;
	}
	return this._range[i];
}
thx.math.scale.Ordinal.prototype.getDomain = function() {
	return this._domain.copy();
}
thx.math.scale.Ordinal.prototype.domain = function(x) {
	this._domain = x.copy();
	return this;
}
thx.math.scale.Ordinal.prototype.getRange = function() {
	return this._range.copy();
}
thx.math.scale.Ordinal.prototype.range = function(a) {
	this._range = a.copy();
	return this;
}
thx.math.scale.Ordinal.prototype.rangePoints = function(start,stop,padding) {
	if(padding == null) padding = 0.0;
	var step = (stop - start) / (this._domain.length - 1 + padding);
	var range = this._domain.length == 1?[(start + stop) / 2]:Floats.range(start + step * padding / 2,stop + step / 2,step);
	var ordinal = new thx.math.scale.Ordinal().domain(this._domain).range(range);
	ordinal.rangeBand = 0;
	return ordinal;
}
thx.math.scale.Ordinal.prototype.rangeBands = function(start,stop,padding) {
	if(padding == null) padding = 0.0;
	var step = (stop - start) / (this._domain.length + padding);
	var range = Floats.range(start + step * padding,stop,step);
	var ordinal = new thx.math.scale.Ordinal().domain(this._domain).range(range);
	ordinal.rangeBand = step * (1 - padding);
	return ordinal;
}
thx.math.scale.Ordinal.prototype.rangeRoundBands = function(start,stop,padding) {
	if(padding == null) padding = 0.0;
	var diff = stop - start, step = Math.floor(diff / (this._domain.length + padding)), err = diff - (this._domain.length - padding) * step;
	var range = Ints.range(start + Math.round(err / 2),stop,step);
	var ordinal = new thx.math.scale.Ordinal().domain(this._domain).range(range);
	ordinal.rangeBand = Math.round(step * (1 - padding));
	return ordinal;
}
thx.math.scale.Ordinal.prototype.__class__ = thx.math.scale.Ordinal;
thx.math.scale.Ordinal.__interfaces__ = [thx.math.scale.IScale];
rg.svg.SvgStreamGraph = function(panel,xscale) {
	if( panel === $_ ) return;
	this._clipPadding = rg.svg.SvgStreamGraph.defaultClipPadding;
	this._cpid = "streamchart_clip_path_" + ++rg.svg.SvgStreamGraph._pathid;
	rg.svg.SvgLayer.call(this,panel);
	this._scalex = xscale;
}
rg.svg.SvgStreamGraph.__name__ = ["rg","svg","SvgStreamGraph"];
rg.svg.SvgStreamGraph.__super__ = rg.svg.SvgLayer;
for(var k in rg.svg.SvgLayer.prototype ) rg.svg.SvgStreamGraph.prototype[k] = rg.svg.SvgLayer.prototype[k];
rg.svg.SvgStreamGraph.prototype._data = null;
rg.svg.SvgStreamGraph.prototype._prepdata = null;
rg.svg.SvgStreamGraph.prototype._scalex = null;
rg.svg.SvgStreamGraph.prototype._cpid = null;
rg.svg.SvgStreamGraph.prototype._interpolator = null;
rg.svg.SvgStreamGraph.prototype._area = null;
rg.svg.SvgStreamGraph.prototype._timedelta = null;
rg.svg.SvgStreamGraph.prototype._clipPadding = null;
rg.svg.SvgStreamGraph.prototype.destroy = function() {
}
rg.svg.SvgStreamGraph.prototype.init = function() {
	this.svg.classed().add("stream-chart").append("svg:clipPath").attr("id").string(this._cpid).append("svg:rect").attr("x")["float"](0).attr("y")["float"](-this._clipPadding).attr("width")["float"](0).attr("height")["float"](0);
	this.svg.attr("clip-path").string("url(#" + this._cpid + ")");
}
rg.svg.SvgStreamGraph.prototype.lineInterpolator = function(interpolator) {
	this._interpolator = interpolator;
}
rg.svg.SvgStreamGraph.prototype._redrawn = null;
rg.svg.SvgStreamGraph.prototype.redraw = function() {
	this._redraw();
}
rg.svg.SvgStreamGraph.prototype.data = function(d) {
	this._data = d.map(function(d1,i) {
		return d1.values;
	});
	this._prepareData();
	this._redraw();
}
rg.svg.SvgStreamGraph.prototype._h = null;
rg.svg.SvgStreamGraph.prototype._w = null;
rg.svg.SvgStreamGraph.prototype._prepareData = function() {
	this._prepdata = new thx.geom.layout.Stack().offset(thx.geom.layout.StackOffset.Wiggle).stack(this._data.copy());
	var domx = this._scalex.getDomain();
	var minx = Arrays.min(domx);
	var stepx = Math.abs(this._prepdata[0][1].x - this._prepdata[0][0].x) + minx;
	var h = this._h = this.panel.frame.height;
	var w = this._w = this.panel.frame.width;
	var mx = this._prepdata[0].length, my = Arrays.floatMax(this._prepdata,function(d) {
		return Arrays.floatMax(d,function(d1) {
			return d1.y0 + d1.y;
		});
	}) * 1.1;
	var sx = $closure(this._scalex,"scale");
	this._area = new thx.svg.Area().interpolator(this._interpolator).x(function(d,i) {
		return sx(d.x);
	}).y0(function(d,i) {
		return h - d.y0 * h / my;
	}).y1(function(d,i) {
		return h - (d.y + d.y0) * h / my;
	});
}
rg.svg.SvgStreamGraph.prototype.updatex = function() {
	var s = this._scalex.scale(Date.now().getTime() - this._timedelta + this._scalex.getDomain()[0]);
	var layer = this.svg.selectAll("g.group").attr("transform").string("translate(-" + s + ",0)");
}
rg.svg.SvgStreamGraph.prototype._transition = function() {
	var layer = this.svg.selectAll("g.group").data(this._prepdata);
	layer.update().select("path.line").transition().attr("d").stringf($closure(this._area,"shape"));
}
rg.svg.SvgStreamGraph.prototype._over = null;
rg.svg.SvgStreamGraph.prototype.over = function(n,i) {
	if(null == this._over) return;
	this._over(this.getDataAtNode(n),i);
}
rg.svg.SvgStreamGraph.prototype._out = null;
rg.svg.SvgStreamGraph.prototype.out = function(n,i) {
	if(null == this._out) return;
	this._out(this.getDataAtNode(n),i);
}
rg.svg.SvgStreamGraph.prototype.getDataAtNode = function(n) {
	var time = this._scalex.invert(thx.js.Svg.mouse(n)[0]);
	var data = Reflect.field(n,"__data__");
	var delta = Math.POSITIVE_INFINITY, pos = 0, v = Math.abs(time - data[0].x);
	while(v < delta) {
		delta = v;
		v = Math.abs(time - data[++pos].x);
	}
	return data[pos - 1];
}
rg.svg.SvgStreamGraph.prototype.setTooltip = function(over,out) {
	this._over = over;
	this._out = out;
}
rg.svg.SvgStreamGraph.prototype._redraw = function() {
	if(null == this._data) return;
	this._timedelta = Date.now().getTime();
	this.svg.select("#" + this._cpid + " rect").attr("width")["float"](this._w).attr("height")["float"](this._h + this._clipPadding * 2);
	var layer = this.svg.selectAll("g.group").data(this._prepdata);
	layer.update().attr("transform").string("translate(0,0)").select("path.line").attr("d").stringf($closure(this._area,"shape"));
	layer.enter().append("svg:g").attr("class").string("group").attr("transform").string("translate(0,0)").onNode("mousemove",$closure(this,"over")).onNode("mouseout",$closure(this,"out")).append("svg:path").attr("class").stringf(function(d,i) {
		return "line item-" + i;
	}).attr("d").stringf($closure(this._area,"shape"));
	layer.exit().remove();
}
rg.svg.SvgStreamGraph.prototype.__class__ = rg.svg.SvgStreamGraph;
Dates = function() { }
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
Dates.snap = function(time,period) {
	switch(period) {
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
			throw new thx.error.Error("unknown period '{0}'",null,period,{ fileName : "Dates.hx", lineNumber : 109, className : "Dates", methodName : "snap"});
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
		throw new thx.error.Error("unknown week day '{0}'",null,day,{ fileName : "Dates.hx", lineNumber : 134, className : "Dates", methodName : "snapToWeekDay"});
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
Dates.prototype.__class__ = Dates;
rg.svg.SvgBaloon = function(container) {
	if( container === $_ ) return;
	this.container = container;
	this.visible = true;
	this._duration = 500;
	this.minwidth = 30;
	this.setPreferredSide(2);
	this._ease = thx.math.Ease.mode(thx.math.EaseMode.EaseInEaseOut,thx.math.Equations.cubic);
	this._strokeWidth = 1;
	this.setRoundedCorner(6);
	this.setPadding(5);
	this._transition_id = 0;
	this.baloon = container.append("svg:g").attr("class").string("baloon").attr("transform").string("translate(" + (this.x = 0) + ", " + (this.y = 0) + ")");
	this.frame = this.baloon.append("svg:g").attr("transform").string("translate(0, 0)").attr("class").string("frame");
	this.frame.append("svg:path").attr("class").string("shadow").attr("transform").string("translate(1, 1)").style("opacity")["float"](0.25).style("fill").string("none").style("stroke").string("#000").style("stroke-width")["float"](this._strokeWidth + 2);
	this._connectorShapeV = thx.svg.Diagonal.forObject();
	this._connectorShapeH = thx.svg.Diagonal.forObject().projection(function(d,i) {
		return [d[1],d[0]];
	});
	this.connector = this.baloon.append("svg:path").attr("class").string("baloon-connector").style("fill").string("none").style("display").string("none").attr("transform").string("translate(0, 0)");
	this.frame.append("svg:path").attr("class").string("bg").style("fill").string("#ff9").style("stroke").string("#fa0").style("fill-opacity")["float"](0.9).style("stroke-width")["float"](this._strokeWidth);
	var r = Math.min(10,Math.max(3,this.roundedCorner));
	this.setTextHeight(11);
}
rg.svg.SvgBaloon.__name__ = ["rg","svg","SvgBaloon"];
rg.svg.SvgBaloon.prototype.text = null;
rg.svg.SvgBaloon.prototype.x = null;
rg.svg.SvgBaloon.prototype.y = null;
rg.svg.SvgBaloon.prototype.boxWidth = null;
rg.svg.SvgBaloon.prototype.boxHeight = null;
rg.svg.SvgBaloon.prototype.visible = null;
rg.svg.SvgBaloon.prototype.textHeight = null;
rg.svg.SvgBaloon.prototype.roundedCorner = null;
rg.svg.SvgBaloon.prototype.padding = null;
rg.svg.SvgBaloon.prototype.preferredSide = null;
rg.svg.SvgBaloon.prototype.minwidth = null;
rg.svg.SvgBaloon.prototype.container = null;
rg.svg.SvgBaloon.prototype.baloon = null;
rg.svg.SvgBaloon.prototype.frame = null;
rg.svg.SvgBaloon.prototype.connector = null;
rg.svg.SvgBaloon.prototype._duration = null;
rg.svg.SvgBaloon.prototype._ease = null;
rg.svg.SvgBaloon.prototype._strokeWidth = null;
rg.svg.SvgBaloon.prototype._connectorShapeV = null;
rg.svg.SvgBaloon.prototype._connectorShapeH = null;
rg.svg.SvgBaloon.prototype.boundingBox = null;
rg.svg.SvgBaloon.prototype.setPreferredSide = function(v) {
	this.preferredSide = Ints.clamp(v,0,3);
	this.redraw();
	return v;
}
rg.svg.SvgBaloon.prototype.setText = function(v) {
	this.text = v;
	this.redraw();
	return v;
}
rg.svg.SvgBaloon.prototype.setTextHeight = function(v) {
	this.textHeight = v;
	this.redraw();
	return v;
}
rg.svg.SvgBaloon.prototype.setPadding = function(v) {
	this.padding = v;
	this.redraw();
	return v;
}
rg.svg.SvgBaloon.prototype.setRoundedCorner = function(v) {
	this.roundedCorner = v;
	this.redraw();
	return v;
}
rg.svg.SvgBaloon.prototype.setBoundingBox = function(v) {
	this.boundingBox = v;
	this.redraw();
	return v;
}
rg.svg.SvgBaloon.prototype.getBoundingBox = function() {
	if(null == this.boundingBox) this.setBoundingBox(this.container.node().getBBox());
	return this.boundingBox;
}
rg.svg.SvgBaloon.prototype._transition_id = null;
rg.svg.SvgBaloon.prototype.moveTo = function(x,y,animate) {
	if(animate == null) animate = true;
	if(animate) {
		var $int = thx.math.Equations.elasticf(), tid = ++this._transition_id, ix = Floats.interpolatef(this.x,x,this._ease), iy = Floats.interpolatef(this.y,y,this._ease), duration = this._duration, mt = $closure(this,"_moveTo"), me = this;
		thx.js.Timer.timer(function(t) {
			if(tid != me._transition_id) return true;
			if(t > duration) {
				mt(x,y);
				return true;
			}
			mt(ix(t / duration),iy(t / duration));
			return false;
		},0);
	} else this._moveTo(x,y);
}
rg.svg.SvgBaloon.prototype._moveTo = function(x,y) {
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
	var o = null;
	if(0 == diagonal) this.connector.style("display").string("none"); else {
		this.connector.style("display").string("block");
		o = { x0 : 0.0, y0 : 0.0, x1 : 0.0, y1 : 0.0};
		switch(side) {
		case 0:
			o.x1 = tx + 0.5 + offset + 2 * this.roundedCorner;
			o.y1 = ty + 0.5 - this.roundedCorner;
			break;
		case 1:
			o.y1 = tx + 0.5 + this.boxWidth + this.roundedCorner;
			o.x1 = ty + 0.5 + offset + this.roundedCorner;
			break;
		case 2:
			o.x1 = tx + 0.5 + offset + 2 * this.roundedCorner;
			o.y1 = ty + 0.5 + this.boxHeight + this.roundedCorner;
			break;
		case 3:
			o.y1 = tx + 0.5 + -this.roundedCorner;
			o.x1 = ty + 0.5 + offset + this.roundedCorner;
			break;
		}
	}
	this.baloon.attr("transform").string("translate(" + (this.x = x) + ", " + (this.y = y) + ")");
	this.frame.attr("transform").string("translate(" + tx + ", " + ty + ")").selectAll("path").attr("d").string(rg.svg.SvgBaloonShape.shape(this.boxWidth,this.boxHeight,this.roundedCorner,this.roundedCorner,side,offset));
	if(0 != diagonal) this.connector.attr("d").string(side % 2 == 0?this._connectorShapeV.diagonal(o):this._connectorShapeH.diagonal(o));
}
rg.svg.SvgBaloon.prototype.show = function() {
	if(!this.visible) return;
	this.visible = true;
	this.baloon.style("display").string("block");
}
rg.svg.SvgBaloon.prototype.hide = function() {
	if(this.visible) return;
	this.visible = false;
	this.baloon.style("display").string("none");
}
rg.svg.SvgBaloon.prototype.redraw = function() {
	if(null == this.text || this.text.length == 0) return;
	var key = function(d,i) {
		return d + ":" + i;
	};
	var choice = this.frame.selectAll("text").data(this.text,key), th = this.textHeight, linewidth = this.minwidth, pad = this.padding;
	var calculateLineWidth = function(n,i) {
		var v = n.getBBox().width;
		if(v > linewidth) linewidth = v;
	};
	choice.enter().append("svg:text").style("font-size").string(th + "px").style("font-weight").string("bold").style("fill").string("#000").text().stringf(function(d,i) {
		return d;
	}).eachNode(calculateLineWidth).attr("x")["float"](pad).attr("y").floatf(function(_,i) {
		return Math.round((0.6 + i) * 1.2 * th + pad);
	}).attr("opacity")["float"](0).transition().duration(null,this._duration).ease(this._ease).delay(null,this._duration / 3).attr("opacity")["float"](1);
	choice.update().text().stringf(function(d,i) {
		return d;
	}).eachNode(calculateLineWidth).transition().duration(null,this._duration).ease(this._ease).attr("opacity")["float"](1).attr("x")["float"](pad).attr("y").floatf(function(_,i) {
		return Math.round((0.6 + i) * 1.2 * th + pad);
	}).style("font-size").string(th + "px").style("font-weight").string("bold");
	choice.exit().transition().ease(this._ease).duration(null,this._duration / 3).attr("opacity")["float"](0).remove();
	this.boxWidth = linewidth + this.padding * 2;
	this.boxHeight = th * this.text.length + this.padding * 2;
	this.frame.selectAll(".bg").transition().ease(this._ease).delay(null,this._duration);
}
rg.svg.SvgBaloon.prototype.__class__ = rg.svg.SvgBaloon;
if(!rg.query.js) rg.query.js = {}
rg.query.js.ReportGridExecutor = function(p) {
}
rg.query.js.ReportGridExecutor.__name__ = ["rg","query","js","ReportGridExecutor"];
rg.query.js.ReportGridExecutor.prototype.children = function(path,options,success,error) {
	rg.js.ReportGrid.children(path,options,success,error);
}
rg.query.js.ReportGridExecutor.prototype.propertyCount = function(path,options,success,error) {
	rg.js.ReportGrid.propertyCount(path,options,success,error);
}
rg.query.js.ReportGridExecutor.prototype.propertySeries = function(path,options,success,error) {
	rg.js.ReportGrid.propertySeries(path,options,success,error);
}
rg.query.js.ReportGridExecutor.prototype.propertyValues = function(path,options,success,error) {
	rg.js.ReportGrid.propertyValues(path,options,success,error);
}
rg.query.js.ReportGridExecutor.prototype.propertyValueCount = function(path,options,success,error) {
	rg.js.ReportGrid.propertyValueCount(path,options,success,error);
}
rg.query.js.ReportGridExecutor.prototype.propertyValueSeries = function(path,options,success,error) {
	rg.js.ReportGrid.propertyValueSeries(path,options,success,error);
}
rg.query.js.ReportGridExecutor.prototype.searchCount = function(path,options,success,error) {
	rg.js.ReportGrid.searchCount(path,options,success,error);
}
rg.query.js.ReportGridExecutor.prototype.searchSeries = function(path,options,success,error) {
	rg.js.ReportGrid.searchSeries(path,options,success,error);
}
rg.query.js.ReportGridExecutor.prototype.intersect = function(path,options,success,error) {
	rg.js.ReportGrid.intersect(path,options,success,error);
}
rg.query.js.ReportGridExecutor.prototype.__class__ = rg.query.js.ReportGridExecutor;
rg.query.js.ReportGridExecutor.__interfaces__ = [rg.query.IExecutor];
thx.svg.Arc = function(p) {
	if( p === $_ ) return;
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
}
thx.svg.Arc.__name__ = ["thx","svg","Arc"];
thx.svg.Arc.fromObject = function() {
	return new thx.svg.Arc().innerRadiusf(function(d,_) {
		return d.innerRadius;
	}).outerRadiusf(function(d,_) {
		return d.outerRadius;
	}).startAnglef(function(d,_) {
		return d.startAngle;
	}).endAnglef(function(d,_) {
		return d.endAngle;
	});
}
thx.svg.Arc.fromAngleObject = function() {
	return new thx.svg.Arc().startAnglef(function(d,_) {
		return d.startAngle;
	}).endAnglef(function(d,_) {
		return d.endAngle;
	});
}
thx.svg.Arc.prototype._r0 = null;
thx.svg.Arc.prototype._r1 = null;
thx.svg.Arc.prototype._a0 = null;
thx.svg.Arc.prototype._a1 = null;
thx.svg.Arc.prototype.getInnerRadius = function() {
	return this._r0;
}
thx.svg.Arc.prototype.innerRadius = function(v) {
	return this.innerRadiusf(function(_,_1) {
		return v;
	});
}
thx.svg.Arc.prototype.innerRadiusf = function(v) {
	this._r0 = v;
	return this;
}
thx.svg.Arc.prototype.getOuterRadius = function() {
	return this._r1;
}
thx.svg.Arc.prototype.outerRadius = function(v) {
	return this.outerRadiusf(function(_,_1) {
		return v;
	});
}
thx.svg.Arc.prototype.outerRadiusf = function(v) {
	this._r1 = v;
	return this;
}
thx.svg.Arc.prototype.getStartAngle = function() {
	return this._a0;
}
thx.svg.Arc.prototype.startAngle = function(v) {
	return this.startAnglef(function(_,_1) {
		return v;
	});
}
thx.svg.Arc.prototype.startAnglef = function(v) {
	this._a0 = v;
	return this;
}
thx.svg.Arc.prototype.getEndAngle = function() {
	return this._a1;
}
thx.svg.Arc.prototype.endAngle = function(v) {
	return this.endAnglef(function(_,_1) {
		return v;
	});
}
thx.svg.Arc.prototype.endAnglef = function(v) {
	this._a1 = v;
	return this;
}
thx.svg.Arc.prototype.shape = function(d,i) {
	var a0 = this._a0(d,i) + thx.svg.LineInternals.arcOffset, a1 = this._a1(d,i) + thx.svg.LineInternals.arcOffset, da = a1 - a0, df = da < Math.PI?"0":"1", c0 = Math.cos(a0), s0 = Math.sin(a0), c1 = Math.cos(a1), s1 = Math.sin(a1), r0 = this._r0(d,i), r1 = this._r1(d,i);
	return da >= thx.svg.LineInternals.arcMax?r0 != 0?"M0," + r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + -r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + r1 + "M0," + r0 + "A" + r0 + "," + r0 + " 0 1,1 0," + -r0 + "A" + r0 + "," + r0 + " 0 1,1 0," + r0 + "Z":"M0," + r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + -r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + r1 + "Z":r0 != 0?"M" + r1 * c0 + "," + r1 * s0 + "A" + r1 + "," + r1 + " 0 " + df + ",1 " + r1 * c1 + "," + r1 * s1 + "L" + r0 * c1 + "," + r0 * s1 + "A" + r0 + "," + r0 + " 0 " + df + ",0 " + r0 * c0 + "," + r0 * s0 + "Z":"M" + r1 * c0 + "," + r1 * s0 + "A" + r1 + "," + r1 + " 0 " + df + ",1 " + r1 * c1 + "," + r1 * s1 + "L0,0" + "Z";
}
thx.svg.Arc.prototype.centroid = function(d,i) {
	var r = (this._r0(d,i) + this._r1(d,i)) / 2, a = (this._a0(d,i) + this._a1(d,i)) / 2 + thx.svg.LineInternals.arcOffset;
	return [Math.cos(a) * r,Math.sin(a) * r];
}
thx.svg.Arc.prototype.__class__ = thx.svg.Arc;
rg.svg.SvgLineChartHighlighter = function(panel,x) {
	if( panel === $_ ) return;
	this.x = x;
	rg.svg.SvgLayer.call(this,panel);
}
rg.svg.SvgLineChartHighlighter.__name__ = ["rg","svg","SvgLineChartHighlighter"];
rg.svg.SvgLineChartHighlighter.__super__ = rg.svg.SvgLayer;
for(var k in rg.svg.SvgLayer.prototype ) rg.svg.SvgLineChartHighlighter.prototype[k] = rg.svg.SvgLayer.prototype[k];
rg.svg.SvgLineChartHighlighter.prototype.text = null;
rg.svg.SvgLineChartHighlighter.prototype.container = null;
rg.svg.SvgLineChartHighlighter.prototype.x = null;
rg.svg.SvgLineChartHighlighter.prototype.selector = null;
rg.svg.SvgLineChartHighlighter.prototype.approximator = function(x) {
	return x;
}
rg.svg.SvgLineChartHighlighter.prototype.prepare = function() {
	var parent = this.svg;
	while(parent.node().nodeName != "g" || parent.classed().get() != "panel") parent = thx.js.Dom.selectNode(parent.node().parentNode);
	parent.onNode("mouseover.highlighter",$closure(this,"_over")).onNode("mousemove.highlighter",$closure(this,"_move"));
	this.selector = this.svg.append("svg:g").style("pointer-events").string("none").attr("class").string("linechart-highlighter");
	this.selector.append("svg:line").attr("x1")["float"](0).attr("y1").string("1em").attr("x2")["float"](0).attr("y2")["float"](this.panel.frame.height);
	this.container = this.selector.append("svg:rect").attr("rx")["float"](4).attr("ry")["float"](4);
	this.text = this.selector.append("svg:text").attr("dy").string("1em").attr("text-anchor").string("middle").attr("dominant-baseline").string("middle");
}
rg.svg.SvgLineChartHighlighter.prototype.label = function(x) {
	return thx.culture.FormatDate.dateShort(Date.fromTime(x)) + ", " + thx.culture.FormatDate.timeShort(Date.fromTime(x));
}
rg.svg.SvgLineChartHighlighter.prototype._over = function(d,_) {
	this.selector.style("display").string("block");
}
rg.svg.SvgLineChartHighlighter.prototype.coords = null;
rg.svg.SvgLineChartHighlighter.prototype.mouse = null;
rg.svg.SvgLineChartHighlighter.prototype._move = function(_,_1) {
	this.mouse = thx.js.Svg.mouse(this.svg.node());
	this._update();
}
rg.svg.SvgLineChartHighlighter.prototype.lastlabel = null;
rg.svg.SvgLineChartHighlighter.prototype._update = function() {
	if(null == this.selector) return;
	if(null == this.mouse) return;
	var vx = this.x.invert(this.mouse[0]);
	if(vx < 100) return;
	var tl = this.label(vx);
	this.lastlabel = tl;
	vx = this.approximator(vx);
	var t = "translate(" + Math.round(this.x.scale(vx)) + ",0)";
	this.selector.attr("transform").string(t);
	this.text.text().string(tl);
	var box = this.text.node().getBBox();
	var pw = 20 + Math.round(box.width);
	var ph = 4 + Math.round(box.height);
	this.container.attr("width")["float"](pw).attr("height")["float"](ph).attr("x")["float"](0.5 - pw / 2).attr("y")["float"](0.5);
}
rg.svg.SvgLineChartHighlighter.prototype._out = function(_,_1) {
	this.selector.style("display").string("none");
}
rg.svg.SvgLineChartHighlighter.prototype.resize = function() {
	this.svg.select("rect").attr("width")["float"](this.width).attr("height")["float"](this.height);
	this.svg.select(".linechart-highlighter").attr("y2")["float"](this.height);
}
rg.svg.SvgLineChartHighlighter.prototype.redraw = function() {
	this._update();
}
rg.svg.SvgLineChartHighlighter.prototype.__class__ = rg.svg.SvgLineChartHighlighter;
rg.query.ParallelQuery = function(p) {
	if( p === $_ ) return;
	rg.query.Query.call(this);
	this.queries = [];
}
rg.query.ParallelQuery.__name__ = ["rg","query","ParallelQuery"];
rg.query.ParallelQuery.__super__ = rg.query.Query;
for(var k in rg.query.Query.prototype ) rg.query.ParallelQuery.prototype[k] = rg.query.Query.prototype[k];
rg.query.ParallelQuery.prototype.queries = null;
rg.query.ParallelQuery.prototype._total = null;
rg.query.ParallelQuery.prototype._count = null;
rg.query.ParallelQuery.prototype._errorOccurred = null;
rg.query.ParallelQuery.prototype._dataChanged = null;
rg.query.ParallelQuery.prototype.load = function() {
	this._total = this.queries.length;
	this._count = 0;
	this._errorOccurred = false;
	this._dataChanged = false;
	this.data = [];
	this.onLoading.dispatch();
}
rg.query.ParallelQuery.prototype.addQuery = function(query) {
	var i = this.queries.length;
	query.onData.add((function(f,a1) {
		return function(a2) {
			return f(a1,a2);
		};
	})($closure(this,"_onData"),i));
	query.onChange.add($closure(this,"_onChange"));
	query.onError.add($closure(this,"_onError"));
	query.onClose.add($closure(this,"_onClose"));
}
rg.query.ParallelQuery.prototype._onData = function(pos,data) {
	if(this._errorOccurred) return;
	this.data[pos] = data;
	if(++this._count == this._total) {
		if(this._dataChanged) this.onChange.dispatch(this.data);
		this.onData.dispatch(this.data);
		this.onComplete.dispatch();
	}
}
rg.query.ParallelQuery.prototype._onChange = function(data) {
	if(this._errorOccurred) return;
	this._dataChanged = true;
}
rg.query.ParallelQuery.prototype._onError = function(data) {
	this._errorOccurred = true;
	this.onError.dispatch(data);
	this.onComplete.dispatch();
}
rg.query.ParallelQuery.prototype._onClose = function() {
	throw new thx.error.Error("this query belongs to a parallel query and should not be closed directy; invoke the ParallelQuery.close() method instead",null,null,{ fileName : "ParallelQuery.hx", lineNumber : 82, className : "rg.query.ParallelQuery", methodName : "_onClose"});
}
rg.query.ParallelQuery.prototype.close = function() {
	rg.query.Query.prototype.close.call(this);
	var me = this;
	this.queries.forEach(function(query,i) {
		query.onClose.remove($closure(me,"_onClose"));
		query.close();
	});
}
rg.query.ParallelQuery.prototype.__class__ = rg.query.ParallelQuery;
rg.svg.SvgScaleLabel = function(panel,anchor) {
	if( panel === $_ ) return;
	this._alwaysHorizontal = true;
	rg.svg.SvgLayer.call(this,panel);
	this._textTextHeight = rg.svg.SvgScaleLabel.defaultTexttextHeight;
	this.anchor(anchor);
	this.svg.attr("class").string("scale-ticks");
	this.idealSize = 0;
}
rg.svg.SvgScaleLabel.__name__ = ["rg","svg","SvgScaleLabel"];
rg.svg.SvgScaleLabel.__super__ = rg.svg.SvgLayer;
for(var k in rg.svg.SvgLayer.prototype ) rg.svg.SvgScaleLabel.prototype[k] = rg.svg.SvgLayer.prototype[k];
rg.svg.SvgScaleLabel.ofLinear = function(panel,anchor,scale) {
	return new rg.svg.SvgScaleLabel(panel,anchor).scale($closure(scale,"scale")).range($closure(scale,"range")).ticks($closure(scale,"ticks")).key(function(d,i) {
		return "" + d;
	}).label($closure(scale,"tickFormat"));
}
rg.svg.SvgScaleLabel.ofOrdinal = function(panel,anchor,scale) {
	var _scale = function(d,i) {
		var size = (function($this) {
			var $r;
			switch( (anchor)[1] ) {
			case 0:
			case 1:
				$r = panel.frame.width;
				break;
			case 2:
			case 3:
				$r = panel.frame.height;
				break;
			}
			return $r;
		}(this)), s = scale.rangePoints(0,size,1);
		return s.scale(d);
	};
	return new rg.svg.SvgScaleLabel(panel,anchor).scale(_scale).range($closure(scale,"range")).ticks($closure(scale,"getDomain")).key(function(d,i) {
		return "" + d;
	}).label(function(d,i) {
		return "" + d;
	});
}
rg.svg.SvgScaleLabel.boundsOfLinear = function(panel,anchor,scale) {
	return rg.svg.SvgScaleLabel.ofLinear(panel,anchor,scale).ticks(function() {
		return scale.getDomain();
	});
}
rg.svg.SvgScaleLabel.prototype._anchor = null;
rg.svg.SvgScaleLabel.prototype._textTextHeight = null;
rg.svg.SvgScaleLabel.prototype._pos = null;
rg.svg.SvgScaleLabel.prototype._t = null;
rg.svg.SvgScaleLabel.prototype._maxRange = null;
rg.svg.SvgScaleLabel.prototype._class = null;
rg.svg.SvgScaleLabel.prototype._oaxis = null;
rg.svg.SvgScaleLabel.prototype._ticks = null;
rg.svg.SvgScaleLabel.prototype._range = null;
rg.svg.SvgScaleLabel.prototype._scale = null;
rg.svg.SvgScaleLabel.prototype._key = null;
rg.svg.SvgScaleLabel.prototype._label = null;
rg.svg.SvgScaleLabel.prototype._textAnchor = null;
rg.svg.SvgScaleLabel.prototype._textBaseline = null;
rg.svg.SvgScaleLabel.prototype._alwaysHorizontal = null;
rg.svg.SvgScaleLabel.prototype.idealSize = null;
rg.svg.SvgScaleLabel.prototype.translateX = function(d,i) {
	return "translate(" + this._scale(d,i) + ",0) rotate(-90)";
}
rg.svg.SvgScaleLabel.prototype.translateXH = function(d,i) {
	return "translate(" + this._scale(d,i) + ",0)";
}
rg.svg.SvgScaleLabel.prototype.translateY = function(d,i) {
	return "translate(0," + this._scale(d,i) + ")";
}
rg.svg.SvgScaleLabel.prototype.redraw = function() {
	if(null == this._maxRange) return;
	this._range([0.0,this._maxRange()]);
	this.idealSize = 0.0;
	var me = this;
	var calculate = (function() {
		if(me.isHorizontal()) return function(n,i) {
			var box = n.getBBox();
			if(box.width > me.idealSize) me.idealSize = box.width;
		}; else return function(n,i) {
			var box = n.getBBox();
			if(box.height > me.idealSize) me.idealSize = box.height;
		};
	})();
	var g = this.svg.selectAll("g").data(this._ticks(),this._key).update().attr("transform").stringf(this._t);
	g.selectAll("text.label").attr(this._oaxis)["float"](this._pos()).attr("text-anchor").string(this._textAnchor).attr("dominant-baseline").string(this._textBaseline).text().stringf(this._label).eachNode(calculate);
	g.enter().append("svg:g").attr("class").string(this._class).attr("transform").stringf(this._t).append("svg:text").attr("class").string("label").attr(this._oaxis)["float"](this._pos()).attr("text-anchor").string(this._textAnchor).attr("dominant-baseline").string(this._textBaseline).text().stringf(this._label).eachNode(calculate);
	g.exit().remove();
}
rg.svg.SvgScaleLabel.prototype.getRange = function() {
	return this._range;
}
rg.svg.SvgScaleLabel.prototype.range = function(f) {
	this._range = f;
	return this;
}
rg.svg.SvgScaleLabel.prototype.getScale = function() {
	return this._scale;
}
rg.svg.SvgScaleLabel.prototype.scale = function(f) {
	this._scale = f;
	return this;
}
rg.svg.SvgScaleLabel.prototype.getTicks = function() {
	return this._ticks;
}
rg.svg.SvgScaleLabel.prototype.ticks = function(f) {
	this._ticks = f;
	return this;
}
rg.svg.SvgScaleLabel.prototype.getKey = function() {
	return this._key;
}
rg.svg.SvgScaleLabel.prototype.key = function(f) {
	this._key = f;
	return this;
}
rg.svg.SvgScaleLabel.prototype.getLabel = function() {
	return this._label;
}
rg.svg.SvgScaleLabel.prototype.label = function(f) {
	this._label = f;
	return this;
}
rg.svg.SvgScaleLabel.prototype.isHorizontal = function() {
	return (function($this) {
		var $r;
		switch( ($this._anchor)[1] ) {
		case 2:
		case 3:
			$r = true;
			break;
		case 0:
		case 1:
			$r = !$this._alwaysHorizontal;
			break;
		}
		return $r;
	}(this));
}
rg.svg.SvgScaleLabel.prototype.getAnchor = function() {
	return this._anchor;
}
rg.svg.SvgScaleLabel.prototype.anchor = function(o) {
	var me = this;
	switch( (this._anchor = o)[1] ) {
	case 0:
	case 1:
		this._class = "xaxis";
		this._oaxis = "x";
		if(this._alwaysHorizontal) this._t = $closure(this,"translateXH"); else this._t = $closure(this,"translateX");
		this._maxRange = function() {
			return me.width;
		};
		break;
	case 2:
	case 3:
		this._class = "xaxis";
		this._oaxis = "x";
		this._t = $closure(this,"translateY");
		this._maxRange = function() {
			return me.height;
		};
		break;
	}
	switch( (this._anchor)[1] ) {
	case 0:
		if(this._alwaysHorizontal) {
			this._textAnchor = "middle";
			this._textBaseline = "hanging";
		} else {
			this._textAnchor = "end";
			this._textBaseline = "middle";
		}
		break;
	case 1:
		if(this._alwaysHorizontal) {
			this._textAnchor = "middle";
			this._textBaseline = "baseline";
		} else {
			this._textAnchor = "start";
			this._textBaseline = "middle";
		}
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
	return this;
}
rg.svg.SvgScaleLabel.prototype.getAlwaysHorizontal = function() {
	return this._alwaysHorizontal;
}
rg.svg.SvgScaleLabel.prototype.alwaysHorizontal = function(v) {
	this._alwaysHorizontal = v;
	this.anchor(this._anchor);
	return this;
}
rg.svg.SvgScaleLabel.prototype.getTextHeight = function() {
	return this._textTextHeight;
}
rg.svg.SvgScaleLabel.prototype.textHeight = function(v) {
	this._textTextHeight = v;
	this.adjustPositionFunction();
	return this;
}
rg.svg.SvgScaleLabel.prototype.adjustPositionFunction = function() {
	var me = this;
	switch( (this._anchor)[1] ) {
	case 0:
		this._pos = function() {
			return 0;
		};
		break;
	case 2:
		this._pos = function() {
			return 0;
		};
		break;
	case 1:
		this._pos = function() {
			return me.height;
		};
		break;
	case 3:
		this._pos = function() {
			return me.width;
		};
		break;
	}
}
rg.svg.SvgScaleLabel.prototype.__class__ = rg.svg.SvgScaleLabel;
StringBuf = function(p) {
	if( p === $_ ) return;
	this.b = new Array();
}
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype.add = function(x) {
	this.b[this.b.length] = x;
}
StringBuf.prototype.addSub = function(s,pos,len) {
	this.b[this.b.length] = s.substr(pos,len);
}
StringBuf.prototype.addChar = function(c) {
	this.b[this.b.length] = String.fromCharCode(c);
}
StringBuf.prototype.toString = function() {
	return this.b.join("");
}
StringBuf.prototype.b = null;
StringBuf.prototype.__class__ = StringBuf;
Enums = function() { }
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
Enums.prototype.__class__ = Enums;
rg.query.QueryLimit = { __ename__ : ["rg","query","QueryLimit"], __constructs__ : ["Top","Bottom","NoLimit"] }
rg.query.QueryLimit.Top = function(v) { var $x = ["Top",0,v]; $x.__enum__ = rg.query.QueryLimit; $x.toString = $estr; return $x; }
rg.query.QueryLimit.Bottom = function(v) { var $x = ["Bottom",1,v]; $x.__enum__ = rg.query.QueryLimit; $x.toString = $estr; return $x; }
rg.query.QueryLimit.NoLimit = ["NoLimit",2];
rg.query.QueryLimit.NoLimit.toString = $estr;
rg.query.QueryLimit.NoLimit.__enum__ = rg.query.QueryLimit;
haxe.Log = function() { }
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
}
haxe.Log.clear = function() {
	js.Boot.__clear_trace();
}
haxe.Log.prototype.__class__ = haxe.Log;
thx.js.BaseTransition = function(selection) {
	if( selection === $_ ) return;
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
		if(Reflect.hasField(n,"__transition__")) Reflect.field(n,"__transition__").owner = tid; else n["__transition__"] = { owner : tid};
	});
	this.delay(null,0);
	this.duration(null,250);
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
	var clear = true, k = -1, me = this;
	this.selection.eachNode(function(n,i) {
		if(2 == me._stage[++k]) return;
		var t = (elapsed - me._delay[k]) / me._duration[k], tx = Reflect.field(n,"__transition__"), te, tk, ik = me._interpolators[k];
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
					Reflect.deleteField(n,"__transition__");
					if(me._remove) n.parentNode.removeChild(n);
				}
				thx.js.BaseTransition._inheritid = me._transitionId;
				if(null != me._end) me._end(n,i);
				thx.js.BaseTransition._inheritid = 0;
				tx.owner = owner;
			}
		}
	});
	return clear;
}
thx.js.BaseTransition.prototype.startNode = function(f) {
	this._start = f;
	return this._this();
}
thx.js.BaseTransition.prototype.endNode = function(f) {
	this._end = f;
	return this._this();
}
thx.js.BaseTransition.prototype.stop = function() {
	var k = -1, me = this;
	this.selection.eachNode(function(n,i) {
		me._stage[++k] = 2;
		Reflect.deleteField(n,"__transition__");
	});
	return this._this();
}
thx.js.BaseTransition.prototype.delay = function(f,v) {
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
	thx.js.Timer.timer(this._step,delayMin);
	return this._this();
}
thx.js.BaseTransition.prototype.duration = function(f,v) {
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
thx.js.BaseTransition.prototype.ease = function(f,easemode) {
	this._ease = thx.math.Ease.mode(easemode,f);
	return this._this();
}
thx.js.BaseTransition.prototype.remove = function(v) {
	if(v == null) v = true;
	this._remove = v;
	return this._this();
}
thx.js.BaseTransition.prototype.select = function(selector) {
	var k, t = this.createTransition(this.selection.select(selector));
	t._ease = this._ease;
	var delay = this._delay;
	var duration = this._duration;
	k = -1;
	t.delay(function(d,i) {
		return delay[++k];
	});
	k = -1;
	t.delay(function(d,i) {
		return duration[++k];
	});
	return t;
}
thx.js.BaseTransition.prototype.selectAll = function(selector) {
	var k, t = this.createTransition(this.selection.selectAll(selector));
	t._ease = this._ease;
	var delay = this._delay;
	var duration = this._duration;
	k = -1;
	t.delay(function(d,i) {
		return delay[i > 0?k:++k];
	});
	k = -1;
	t.delay(function(d,i) {
		return duration[i > 0?k:++k];
	});
	return t;
}
thx.js.BaseTransition.prototype.createTransition = function(selection) {
	return (function($this) {
		var $r;
		throw new thx.error.AbstractMethod({ fileName : "Transition.hx", lineNumber : 242, className : "thx.js.BaseTransition", methodName : "createTransition"});
		return $r;
	}(this));
}
thx.js.BaseTransition.prototype._this = function() {
	return this;
}
thx.js.BaseTransition.prototype.__class__ = thx.js.BaseTransition;
thx.js.UnboundTransition = function(selection) {
	if( selection === $_ ) return;
	thx.js.BaseTransition.call(this,selection);
}
thx.js.UnboundTransition.__name__ = ["thx","js","UnboundTransition"];
thx.js.UnboundTransition.__super__ = thx.js.BaseTransition;
for(var k in thx.js.BaseTransition.prototype ) thx.js.UnboundTransition.prototype[k] = thx.js.BaseTransition.prototype[k];
thx.js.UnboundTransition.prototype.style = function(name) {
	return new thx.js.AccessTweenStyle(name,this,this._tweens);
}
thx.js.UnboundTransition.prototype.attr = function(name) {
	return new thx.js.AccessTweenAttribute(name,this,this._tweens);
}
thx.js.UnboundTransition.prototype.createTransition = function(selection) {
	return new thx.js.UnboundTransition(selection);
}
thx.js.UnboundTransition.prototype.__class__ = thx.js.UnboundTransition;
thx.js.BoundTransition = function(selection) {
	if( selection === $_ ) return;
	thx.js.BaseTransition.call(this,selection);
}
thx.js.BoundTransition.__name__ = ["thx","js","BoundTransition"];
thx.js.BoundTransition.__super__ = thx.js.BaseTransition;
for(var k in thx.js.BaseTransition.prototype ) thx.js.BoundTransition.prototype[k] = thx.js.BaseTransition.prototype[k];
thx.js.BoundTransition.prototype.style = function(name) {
	return new thx.js.AccessDataTweenStyle(name,this,this._tweens);
}
thx.js.BoundTransition.prototype.attr = function(name) {
	return new thx.js.AccessDataTweenAttribute(name,this,this._tweens);
}
thx.js.BoundTransition.prototype.start = function(f) {
	return this.startNode(function(n,i) {
		f(Reflect.field(n,"__data__"),i);
	});
}
thx.js.BoundTransition.prototype.end = function(f) {
	return this.endNode(function(n,i) {
		f(Reflect.field(n,"__data__"),i);
	});
}
thx.js.BoundTransition.prototype.createTransition = function(selection) {
	return new thx.js.BoundTransition(selection);
}
thx.js.BoundTransition.prototype.__class__ = thx.js.BoundTransition;
thx.svg.Symbol = function() { }
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
thx.svg.Symbol.prototype.__class__ = thx.svg.Symbol;
thx.culture.FormatDate = function() { }
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
			buf.b[buf.b.length] = thx.culture.FormatNumber.digits(StringTools.lpad("" + thx.culture.FormatDate.getMHours(date),"0",2),culture);
			break;
		case "j":
			throw "Not Implemented Yet";
			break;
		case "k":
			buf.b[buf.b.length] = thx.culture.FormatNumber.digits(leadingspace?StringTools.lpad("" + date.getHours()," ",2):"" + date.getHours(),culture);
			break;
		case "l":
			buf.b[buf.b.length] = thx.culture.FormatNumber.digits(leadingspace?StringTools.lpad("" + thx.culture.FormatDate.getMHours(date)," ",2):"" + thx.culture.FormatDate.getMHours(date),culture);
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
thx.culture.FormatDate.prototype.__class__ = thx.culture.FormatDate;
rg.query.QueryEvent = function(executor,path,event) {
	if( executor === $_ ) return;
	rg.query.QueryPath.call(this,executor,path);
	this.setEvent(event);
}
rg.query.QueryEvent.__name__ = ["rg","query","QueryEvent"];
rg.query.QueryEvent.__super__ = rg.query.QueryPath;
for(var k in rg.query.QueryPath.prototype ) rg.query.QueryEvent.prototype[k] = rg.query.QueryPath.prototype[k];
rg.query.QueryEvent.prototype.event = null;
rg.query.QueryEvent.prototype.setEvent = function(v) {
	v = rg.query.Query.normalizeName(v);
	if(null == v) throw new thx.error.NullArgument("v","invalid null argument '{0}' for method {1}.{2}()",{ fileName : "Query.hx", lineNumber : 159, className : "rg.query.QueryEvent", methodName : "setEvent"}); else null;
	return this.event = v;
}
rg.query.QueryEvent.prototype.__class__ = rg.query.QueryEvent;
rg.query.QueryPropertyNames = function(executor,path,event) {
	if( executor === $_ ) return;
	rg.query.QueryEvent.call(this,executor,path,event);
}
rg.query.QueryPropertyNames.__name__ = ["rg","query","QueryPropertyNames"];
rg.query.QueryPropertyNames.__super__ = rg.query.QueryEvent;
for(var k in rg.query.QueryEvent.prototype ) rg.query.QueryPropertyNames.prototype[k] = rg.query.QueryEvent.prototype[k];
rg.query.QueryPropertyNames.prototype.executeLoad = function(success,error) {
	var query = this.queryObject();
	query.property = this.event;
	this.executor.children(this.path,query,success,error);
}
rg.query.QueryPropertyNames.prototype.__class__ = rg.query.QueryPropertyNames;
rg.query.QueryProperty = function(executor,path,event,property) {
	if( executor === $_ ) return;
	rg.query.QueryEvent.call(this,executor,path,event);
	this.setProperty(property);
}
rg.query.QueryProperty.__name__ = ["rg","query","QueryProperty"];
rg.query.QueryProperty.__super__ = rg.query.QueryEvent;
for(var k in rg.query.QueryEvent.prototype ) rg.query.QueryProperty.prototype[k] = rg.query.QueryEvent.prototype[k];
rg.query.QueryProperty.prototype.property = null;
rg.query.QueryProperty.prototype.setProperty = function(v) {
	v = rg.query.Query.normalizeName(v);
	if(null == v) throw new thx.error.NullArgument("v","invalid null argument '{0}' for method {1}.{2}()",{ fileName : "Query.hx", lineNumber : 177, className : "rg.query.QueryProperty", methodName : "setProperty"}); else null;
	return this.property = v;
}
rg.query.QueryProperty.prototype.__class__ = rg.query.QueryProperty;
rg.query.QueryValues = function(executor,path,event,property,values,others,otherslabel) {
	if( executor === $_ ) return;
	if(otherslabel == null) otherslabel = "others";
	if(others == null) others = false;
	rg.query.QueryProperty.call(this,executor,path,event,property);
	this.setValues(values);
	this.others = others;
	this.othersLabel = otherslabel;
}
rg.query.QueryValues.__name__ = ["rg","query","QueryValues"];
rg.query.QueryValues.__super__ = rg.query.QueryProperty;
for(var k in rg.query.QueryProperty.prototype ) rg.query.QueryValues.prototype[k] = rg.query.QueryProperty.prototype[k];
rg.query.QueryValues.prototype.values = null;
rg.query.QueryValues.prototype.others = null;
rg.query.QueryValues.prototype.othersLabel = null;
rg.query.QueryValues.prototype.formatter = function(v,i) {
	return "" + v;
}
rg.query.QueryValues.prototype.formattedValues = function() {
	var v = this.values.map($closure(this,"formatter"));
	if(this.others) v.push(this.othersLabel);
	return v;
}
rg.query.QueryValues.prototype.setValues = function(v) {
	if(null == v) throw new thx.error.NullArgument("v","invalid null argument '{0}' for method {1}.{2}()",{ fileName : "Query.hx", lineNumber : 225, className : "rg.query.QueryValues", methodName : "setValues"}); else null;
	return this.values = v;
}
rg.query.QueryValues.prototype.__class__ = rg.query.QueryValues;
rg.query.QueryValuesSeries = function(executor,path,event,property,values,others,otherslabel) {
	if( executor === $_ ) return;
	if(otherslabel == null) otherslabel = "others";
	if(others == null) others = false;
	rg.query.QueryValues.call(this,executor,path,event,property,values,others,otherslabel);
}
rg.query.QueryValuesSeries.__name__ = ["rg","query","QueryValuesSeries"];
rg.query.QueryValuesSeries.__super__ = rg.query.QueryValues;
for(var k in rg.query.QueryValues.prototype ) rg.query.QueryValuesSeries.prototype[k] = rg.query.QueryValues.prototype[k];
rg.query.QueryValuesSeries.forLineChart = function(executor,path,event,property,values,others,otherslabel) {
	var query = new rg.query.QueryValuesSeries(executor,path,event,property,values,others,otherslabel);
	query.transform = rg.query.Transform.arrayTimeSeries(query,$closure(query,"formattedValues"));
	return query;
}
rg.query.QueryValuesSeries.prototype.executeLoad = function(success,error) {
	var count = 0, total = this.values.length + (this.others?1:0), data = [], others = this.others;
	var _end = function() {
		if(others) {
			var tot = data[total - 1];
			var _g1 = 0, _g = total - 1;
			while(_g1 < _g) {
				var i = _g1++;
				var cur = data[i];
				var _g2 = 0, _g3 = Reflect.fields(cur);
				while(_g2 < _g3.length) {
					var field = _g3[_g2];
					++_g2;
					tot[field] = Reflect.field(tot,field) - Reflect.field(cur,field);
				}
			}
		}
		success(data);
	};
	var _total = function(value) {
		data[total - 1] = value;
		if(++count == total) _end();
	};
	var _collect = function(pos,value) {
		data[pos] = value;
		if(++count == total) _end();
	};
	var query = this.queryObject();
	query.property = this.event + "." + this.property;
	var _g1 = 0, _g = this.values.length;
	while(_g1 < _g) {
		var i = _g1++;
		query.value = this.values[i];
		this.executor.propertyValueSeries(this.path,query,(function(f,a1) {
			return function(a2) {
				return f(a1,a2);
			};
		})(_collect,i),error);
	}
	if(others) {
		var query1 = this.queryObject();
		query1.property = this.event + "." + this.property;
		this.executor.propertySeries(this.path,query1,_total,error);
	}
}
rg.query.QueryValuesSeries.prototype.load = function() {
	if(null == this.values || 0 == this.values.length) {
		var loader = new rg.query.QueryPropertyValues(this.executor,this.path,this.event,this.property,rg.query.QueryLimit.Top(10)), me = this;
		loader.onData.add(function(v) {
			me.setValues(v);
			loader.close();
			me.load();
		});
		loader.load();
	} else rg.query.QueryValues.prototype.load.call(this);
}
rg.query.QueryValuesSeries.prototype.__class__ = rg.query.QueryValuesSeries;
thx.culture.FormatNumber = function() { }
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
thx.culture.FormatNumber.prototype.__class__ = thx.culture.FormatNumber;
rg.Viz = function() { }
rg.Viz.__name__ = ["rg","Viz"];
rg.Viz.createRandomHeatGridData = function(n,m,top) {
	if(top == null) top = 100;
	if(m == null) m = 20;
	if(n == null) n = 20;
	return Ints.range(n).map(function(d,i) {
		return Ints.range(m).map(function(d1,i1) {
			return Math.random() * top;
		});
	});
}
rg.Viz.heatgrid = function(el,query,options) {
	var selection = rg.Viz.select(el), properties = [];
	if(null == query.path || "" == query.path) throw new thx.error.Error("path cannot be null or empty",null,null,{ fileName : "Viz.hx", lineNumber : 92, className : "rg.Viz", methodName : "heatgrid"});
	var _g1 = 0, _g = query.properties.length;
	while(_g1 < _g) {
		var i = _g1++;
		var p = query.properties[i];
		if(null == p.event || "" == p.event) throw new thx.error.Error("event cannot be null or empty",null,null,{ fileName : "Viz.hx", lineNumber : 98, className : "rg.Viz", methodName : "heatgrid"});
		if(null == p.property || "" == p.property) throw new thx.error.Error("property cannot be null or empty",null,null,{ fileName : "Viz.hx", lineNumber : 100, className : "rg.Viz", methodName : "heatgrid"});
		var istop = null != p.top || null == p.top && null == p.bottom, limit = istop?null == p.top?10:p.top:p.bottom;
		properties.push({ event : p.event, property : p.property, top : istop, limit : limit});
	}
	if(null == options) options = { };
	var o = rg.Viz.sizeOptions(selection,options);
	var loader = rg.query.QueryIntersect.forPivotTable(rg.Viz.executor,query.path,properties,1);
	if(Iterators.any(properties.iterator(),function(d) {
		return "#timestamp" == d.property;
	})) {
		if(null == o.periodicity) loader.time.autosetPeriodicity = true; else {
			loader.time.autosetPeriodicity = false;
			loader.time.setPeriodicity(o.periodicity);
		}
	} else if(null != o.periodicity) {
		loader.time.autosetPeriodicity = false;
		loader.time.setPeriodicity("eternity");
	}
	rg.Viz.setTimeLimits(loader,o);
	loader.time.update();
	var scolors = null == o.colors?["#ff0","#f00"]:o.colors, colors = scolors.map(function(d,i) {
		return thx.color.Colors.parse(d);
	}), padding = 3;
	var leftsize = 100, space = new rg.svg.SvgSpace(o.width,o.height,selection), top = space.createContainer(rg.layout.Disposition.Fill(0,0),rg.layout.Orientation.Horizontal), bottom = space.createContainer(rg.layout.Disposition.Fixed(0,0,100),rg.layout.Orientation.Horizontal), ypanel = top.createPanel(rg.layout.Disposition.Fixed(0,padding,leftsize)), chartpanel = top.createPanel(rg.layout.Disposition.Fill(0,0)), xpanel = bottom.createPanel(rg.layout.Disposition.Fixed(leftsize + padding,0,100));
	var y = new thx.math.scale.Ordinal(), yscale = rg.svg.SvgScaleLabel.ofOrdinal(ypanel,rg.svg.Anchor.Right,y), x = new thx.math.scale.Ordinal(), xscale = rg.svg.SvgScaleLabel.ofOrdinal(xpanel,rg.svg.Anchor.Top,x).alwaysHorizontal(false);
	space.svg.attr("class").string("rg");
	var color = thx.math.scale.Linears.forRgb().range(colors), chart = new rg.svg.SvgHeatGrid(chartpanel,color);
	var tooltip = new rg.svg.SvgBaloon(space.svg);
	chart.over = function(x1,y1,d,_) {
		tooltip.setText(["count: " + Floats.format(d,"I")]);
		tooltip.moveTo(x1 + chartpanel.frame.x,y1 + chartpanel.frame.y + top.frame.y);
	};
	loader.onChange.add(function(data) {
		var interpolator = Floats.interpolatef(0,data.calc.max), domain = colors.map(function(_,i) {
			return interpolator(i / (colors.length - 1));
		}), xdomain = data.columns.map(function(d,i) {
			return d.values[0];
		}), ydomain = data.rows.map(function(d,i) {
			return d.values[0];
		});
		color.domain(domain);
		x.domain(xdomain);
		y.domain(ydomain);
		yscale.label((function(f,a1) {
			return function(a2,a3) {
				return f(a1,a2,a3);
			};
		})(rg.Viz.labelValue,data.row_headers[0]));
		xscale.label((function(f,a1) {
			return function(a2,a3) {
				return f(a1,a2,a3);
			};
		})(rg.Viz.labelValue,data.column_headers[0]));
		xscale.redraw();
		yscale.redraw();
		((function($this) {
			var $r;
			var $t = ypanel.frame;
			if(Std["is"]($t,rg.layout.StackFrame)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).setDisposition(rg.layout.Disposition.Fixed(0,padding,Math.ceil(yscale.idealSize)));
		((function($this) {
			var $r;
			var $t = xpanel.frame;
			if(Std["is"]($t,rg.layout.StackFrame)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).setDisposition(rg.layout.Disposition.Fill(Math.ceil(padding + yscale.idealSize),0));
		((function($this) {
			var $r;
			var $t = bottom.frame;
			if(Std["is"]($t,rg.layout.StackFrame)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).setDisposition(rg.layout.Disposition.Fixed(padding,0,Math.ceil(xscale.idealSize)));
		chart.data(data.rows.map(function(d,i) {
			return d.cells;
		}));
		xscale.redraw();
		yscale.redraw();
	});
	rg.Viz.executeQuery(loader,o);
}
rg.Viz.labelValue = function(header,value,_) {
	if(Std["is"](value,String)) return rg.util.RGStrings.humanize(Strings.rtrim(Strings.ltrim(value,"\""),"\"")); else if(Std["is"](value,Int)) return Ints.format(value); else if(Std["is"](value,Float)) {
		if("#" == header.substr(0,1)) return rg.util.Periodicity.format(header.substr(1),Std.parseFloat(value));
		return Floats.format(value);
	} else return Std.string(value);
}
rg.Viz.pivot = function(el,query,options) {
	var properties = [];
	if(null == query.path || "" == query.path) throw new thx.error.Error("path cannot be null or empty",null,null,{ fileName : "Viz.hx", lineNumber : 263, className : "rg.Viz", methodName : "pivot"});
	var _g = 0, _g1 = query.properties;
	while(_g < _g1.length) {
		var p = _g1[_g];
		++_g;
		if((null == p.event || "" == p.event) && p.property != "#timestamp") throw new thx.error.Error("event cannot be null or empty",null,null,{ fileName : "Viz.hx", lineNumber : 268, className : "rg.Viz", methodName : "pivot"});
		if(null == p.property || "" == p.property) throw new thx.error.Error("property cannot be null or empty",null,null,{ fileName : "Viz.hx", lineNumber : 270, className : "rg.Viz", methodName : "pivot"});
		var istop = null != p.top || null == p.top && null == p.bottom, limit = istop?null == p.top?10:p.top:p.bottom;
		properties.push({ event : p.event, property : p.property, top : istop, limit : limit});
	}
	var o = null == options?{ }:options;
	var loader = rg.query.QueryIntersect.forPivotTable(rg.Viz.executor,query.path,properties,null == o.coldimensions?1:o.coldimensions);
	if(Iterators.any(properties.iterator(),function(d) {
		return "#timestamp" == d.property;
	})) {
		if(null == o.periodicity) loader.time.autosetPeriodicity = true; else {
			loader.time.autosetPeriodicity = false;
			loader.time.setPeriodicity(o.periodicity);
		}
	} else if(null != o.periodicity) {
		loader.time.autosetPeriodicity = false;
		loader.time.setPeriodicity("eternity");
	}
	rg.Viz.setTimeLimits(loader,o);
	var pivot = new rg.html.HtmlPivotTable(rg.Viz.select(el));
	loader.onChange.add($closure(pivot,"data"));
	if(null != o.displayColumnTotal) pivot.displayColumnTotal = o.displayColumnTotal == true;
	if(null != o.displayRowTotal) pivot.displayRowTotal = o.displayRowTotal == true;
	if(null != o.heatMap) pivot.heatMap = o.heatMap == true;
	if(null != o.startColor) pivot.startColor = thx.color.Hsl.toHsl(thx.color.Colors.parse(o.startColor));
	if(null != o.endColor) pivot.endColor = thx.color.Hsl.toHsl(thx.color.Colors.parse(o.endColor));
	rg.Viz.executeQuery(loader,o);
}
rg.Viz.toDateLimit = function(v) {
	if(null == v) return rg.query.DateLimit.NoLimit;
	if(Reflect.isFunction(v)) return rg.query.DateLimit.VariableLimit(v);
	if(Std["is"](v,Date)) return rg.query.DateLimit.FixedLimit(v);
	if(Std["is"](v,Float)) return rg.query.DateLimit.FixedLimit(Date.fromTime(v));
	if(Std["is"](v,String)) return rg.query.DateLimit.VariableLimit(function() {
		return thx.date.DateParser.parse(v);
	});
	throw new thx.error.Error("invalid date value '{0}'",v,null,{ fileName : "Viz.hx", lineNumber : 330, className : "rg.Viz", methodName : "toDateLimit"});
}
rg.Viz.leaderBoard = function(el,query,options) {
	var selection = rg.Viz.select(el).html().clear();
	var q = Objects.copyTo(query,rg.QueryOptionsUtil.emptyQuery());
	var top = null == q.bottom && q.top > 0;
	var limit = null != q.bottom?q.bottom:null == q.top?10:q.top;
	var loader;
	if(null != q.property && "" != q.property) {
		var l = new rg.query.QueryValuesCount(rg.Viz.executor,q.path,q.event,q.property,null,top,limit,q.other);
		loader = l;
		if(null != q.filter) l.filter = q.filter;
	} else if(null != q.event && "" != q.event) loader = new rg.query.QueryPropertiesCount(rg.Viz.executor,q.path,q.event); else loader = new rg.query.QueryEventsCount(rg.Viz.executor,q.path);
	loader.onError.add(rg.Viz.error);
	var o = null == options?{ }:options;
	rg.Viz.setTimeLimits(loader,o);
	var chart = new rg.html.HtmlLeaderBoard(selection);
	loader.onChange.add($closure(chart,"data"));
	rg.Viz.executeQuery(loader,o);
	return chart;
}
rg.Viz.executeQuery = function(loader,options) {
	var animated = null != options.refresh && options.refresh > 0;
	if(animated) new rg.query.QueryTimerUpdate(loader,options.refresh); else loader.load();
}
rg.Viz.setTimeLimits = function(loader,options,forceValues) {
	if(forceValues == null) forceValues = false;
	if(forceValues) {
		if(null == options.end) options.end = "now";
		if(null == options.start) options.start = "yesterday";
	}
	loader.time.startLimit = rg.Viz.toDateLimit(options.start);
	loader.time.endLimit = rg.Viz.toDateLimit(options.end);
	loader.time.update();
}
rg.Viz.pie = function(el,query,options) {
	var selection = rg.Viz.select(el).html().clear();
	var q = Objects.copyTo(query,rg.QueryOptionsUtil.emptyQuery());
	var top = null == q.bottom && q.top > 0;
	var limit = null != q.bottom?q.bottom:null == q.top?10:q.top;
	var loader;
	if(null != q.property && "" != q.property) {
		var l = new rg.query.QueryValuesCount(rg.Viz.executor,q.path,q.event,q.property,null,top,limit,q.other);
		loader = l;
		if(null != q.filter) l.filter = q.filter;
	} else if(null != q.event && "" != q.event) loader = new rg.query.QueryPropertiesCount(rg.Viz.executor,q.path,q.event); else loader = new rg.query.QueryEventsCount(rg.Viz.executor,q.path);
	loader.onError.add(rg.Viz.error);
	if(null == options) options = { };
	var o = rg.Viz.sizeOptions(selection,options);
	rg.Viz.setTimeLimits(loader,o);
	var space = new rg.svg.SvgSpace(o.width,o.height,selection);
	space.svg.attr("class").string("rg");
	var chart = new rg.svg.SvgPieChart(space.createPanel(rg.layout.Disposition.Fill(0,0)));
	loader.onChange.add($closure(chart,"data"));
	rg.Viz.executeQuery(loader,o);
	return chart;
}
rg.Viz.bar = function(el,query,options) {
	var selection = rg.Viz.select(el).html().clear();
	var q = Objects.copyTo(query,rg.QueryOptionsUtil.emptyQuery());
	var top = null == q.bottom && q.top > 0;
	var limit = null != q.bottom?q.bottom:null == q.top?10:q.top;
	var loader;
	if(null != q.property && "" != q.property) {
		var l = new rg.query.QueryValuesCount(rg.Viz.executor,q.path,q.event,q.property,null,top,limit,q.other);
		loader = l;
		if(null != q.filter) l.filter = q.filter;
	} else if(null != q.event && "" != q.event) loader = new rg.query.QueryPropertiesCount(rg.Viz.executor,q.path,q.event); else loader = new rg.query.QueryEventsCount(rg.Viz.executor,q.path);
	loader.onError.add(rg.Viz.error);
	if(null == options) options = { };
	var o = rg.Viz.sizeOptions(selection,options);
	rg.Viz.setTimeLimits(loader,o);
	var space = new rg.svg.SvgSpace(o.width,o.height,selection);
	space.svg.attr("class").string("rg");
	var x = new thx.math.scale.Ordinal();
	var y = new thx.math.scale.Linear();
	var ylayers = [];
	var xlayers = [];
	var top1 = space.createPanel(rg.layout.Disposition.Fixed(0,0,5)), middle = space.createContainer(rg.layout.Disposition.Fill(0,0),rg.layout.Orientation.Horizontal), left = 0;
	if(null == o.yaxis || o.yaxis.showlabels != false) {
		ylayers.push(rg.svg.SvgScaleLabel.ofLinear(middle.createPanel(rg.layout.Disposition.Fixed(0,2,50)),rg.svg.Anchor.Right,y));
		left += 52;
	}
	var chartpanel = middle.createPanel(rg.layout.Disposition.Fill(0,0));
	if(null == o.yaxis || o.yaxis.showrulers != false) ylayers.push(rg.svg.SvgScaleRule.ofLinear(chartpanel,rg.layout.Orientation.Horizontal,y));
	var chart = new rg.svg.SvgBarChart(chartpanel,x,y);
	loader.onChange.add(function(d) {
		y.domain([null != o.yscale && null != o.yscale.max?o.yscale.max:Arrays.floatMax(d,function(d1) {
			return d1.value;
		}) * 1.2,0.0]);
		ylayers.forEach(function(layer,_) {
			layer.redraw();
		});
		x.domain(d.map(function(d1,i) {
			return d1.label;
		}));
		x.range(Ints.range(d.length));
		xlayers.forEach(function(layer,_) {
			layer.redraw();
		});
		chart.data(d);
	});
	new rg.svg.SvgBorderLine(chartpanel,rg.svg.Anchor.Bottom);
	var bottom = space.createContainer(rg.layout.Disposition.Fixed(0,0,20),rg.layout.Orientation.Horizontal);
	xlayers.push(rg.svg.SvgScaleLabel.ofOrdinal(bottom.createPanel(rg.layout.Disposition.Fill(left,0)),rg.svg.Anchor.Top,x));
	rg.Viz.executeQuery(loader,o);
	return chart;
}
rg.Viz.funnel = function(el,query,options) {
	var selection = rg.Viz.select(el).html().clear();
	var q = Objects.copyTo(query,rg.QueryOptionsUtil.emptyQuery());
	var top = null == q.bottom && q.top > 0;
	var limit = null != q.bottom?q.bottom:null == q.top?10:q.top;
	var loader;
	if(null != q.property && "" != q.property) {
		var l = new rg.query.QueryValuesCount(rg.Viz.executor,q.path,q.event,q.property,null,top,limit,q.other);
		loader = l;
		if(null != q.filter) l.filter = q.filter;
	} else if(null != q.event && "" != q.event) loader = new rg.query.QueryPropertiesCount(rg.Viz.executor,q.path,q.event); else {
		var eloader = new rg.query.QueryEventsCount(rg.Viz.executor,q.path);
		loader = eloader;
		if(null != q.events) {
			eloader.order = function(d) {
				return d;
			};
			eloader.events = q.events.copy();
		}
	}
	loader.onError.add(rg.Viz.error);
	if(null == options) options = { };
	var o = rg.Viz.sizeOptions(selection,options);
	rg.Viz.setTimeLimits(loader,o);
	var space = new rg.svg.SvgSpace(o.width,o.height,selection);
	space.svg.attr("class").string("rg");
	var top1 = space.createPanel(rg.layout.Disposition.Fixed(0,0,5)), middle = space.createContainer(rg.layout.Disposition.Fill(0,0),rg.layout.Orientation.Horizontal);
	var chartpanel = middle.createPanel(rg.layout.Disposition.Fill(0,0));
	var chart = new rg.svg.SvgFunnelChart(chartpanel);
	loader.onChange.add(function(d) {
		chart.data(d);
	});
	if(null != o.label) chart.label = o.label;
	rg.Viz.executeQuery(loader,o);
	return chart;
}
rg.Viz.baloon = function(el) {
	var svg = rg.Viz.select(el).append("svg:svg").attr("width")["float"](450).attr("height")["float"](300).classed().add("rg");
	svg.append("svg:rect").attr("width")["float"](450).attr("height")["float"](300).style("fill").string("#eee");
	var bb = { x : 120.0, y : 80.0, width : 200.0, height : 150.0};
	svg.append("svg:rect").attr("x")["float"](bb.x).attr("y")["float"](bb.y).attr("width")["float"](bb.width).attr("height")["float"](bb.height).style("fill").string("#ccc");
	var baloon = new rg.svg.SvgBaloon(svg);
	baloon.setText(["hello","world","this is a baloon","another line"]);
	baloon.setBoundingBox(bb);
	svg.onNode("mousemove",function(n,i) {
		var c = thx.js.Svg.mouse(n);
		baloon.moveTo(c[0],c[1],false);
	});
}
rg.Viz.scatter = function(el,query,options) {
	var selection = rg.Viz.select(el).html().clear();
	var q = Objects.copyTo(query,rg.QueryOptionsUtil.emptyQuery());
	var top = null == q.bottom && q.top > 0;
	var limit = null != q.bottom?q.bottom:null == q.top?10:q.top;
	var loader;
	if(null != q.property && "" != q.property) {
		var l = new rg.query.QueryValuesCount(rg.Viz.executor,q.path,q.event,q.property,null,top,limit,q.other);
		loader = l;
		if(null != q.filter) l.filter = q.filter;
	} else if(null != q.event && "" != q.event) loader = new rg.query.QueryPropertiesCount(rg.Viz.executor,q.path,q.event); else loader = new rg.query.QueryEventsCount(rg.Viz.executor,q.path);
	loader.onError.add(rg.Viz.error);
	if(null == options) options = { };
	var o = rg.Viz.sizeOptions(selection,options);
	rg.Viz.setTimeLimits(loader,o);
	var space = new rg.svg.SvgSpace(o.width,o.height,selection);
	space.svg.attr("class").string("rg");
	var x = new thx.math.scale.Ordinal();
	var y = new thx.math.scale.Linear();
	var ylayers = [];
	var xlayers = [];
	var top1 = space.createPanel(rg.layout.Disposition.Fixed(0,0,5)), middle = space.createContainer(rg.layout.Disposition.Fill(0,0),rg.layout.Orientation.Horizontal), left = 0;
	if(null == o.yaxis || o.yaxis.showlabels != false) {
		ylayers.push(rg.svg.SvgScaleLabel.ofLinear(middle.createPanel(rg.layout.Disposition.Fixed(0,2,50)),rg.svg.Anchor.Right,y));
		left += 52;
	}
	var chartpanel = middle.createPanel(rg.layout.Disposition.Fill(0,0));
	if(null == o.yaxis || o.yaxis.showrulers != false) ylayers.push(rg.svg.SvgScaleRule.ofLinear(chartpanel,rg.layout.Orientation.Horizontal,y));
	if(null == o.xaxis || o.xaxis.showrulers != false) xlayers.push(rg.svg.SvgScaleRule.ofOrdinal(chartpanel,rg.layout.Orientation.Vertical,x));
	var chart = new rg.svg.SvgScatterGraph(chartpanel,x,y);
	loader.onChange.add(function(d) {
		y.domain([null != o.yscale && null != o.yscale.max?o.yscale.max:Arrays.floatMax(d,function(d1) {
			return d1.value;
		}) * 1.2,0.0]);
		ylayers.forEach(function(layer,_) {
			layer.redraw();
		});
		x.domain(d.map(function(d1,i) {
			return d1.label;
		}));
		x.range(Ints.range(d.length));
		xlayers.forEach(function(layer,_) {
			layer.redraw();
		});
		chart.data(d);
	});
	new rg.svg.SvgBorderLine(chartpanel,rg.svg.Anchor.Bottom);
	var bottom = space.createContainer(rg.layout.Disposition.Fixed(0,0,20),rg.layout.Orientation.Horizontal);
	xlayers.push(rg.svg.SvgScaleLabel.ofOrdinal(bottom.createPanel(rg.layout.Disposition.Fill(left,0)),rg.svg.Anchor.Top,x));
	rg.Viz.executeQuery(loader,o);
	return chart;
}
rg.Viz.stack = function(el,query,options) {
	var selection = rg.Viz.select(el).html().clear();
	var q = Objects.copyTo(query,rg.QueryOptionsUtil.emptyQuery());
	var top = null == q.bottom && q.top > 0;
	var limit = null != q.bottom?q.bottom:null == q.top?10:q.top;
	var loader;
	if(null != q.property && "" != q.property) {
		var l = new rg.query.QueryValuesCount(rg.Viz.executor,q.path,q.event,q.property,null,top,limit,q.other);
		loader = l;
		if(null != q.filter) l.filter = q.filter;
	} else if(null != q.event && "" != q.event) loader = new rg.query.QueryPropertiesCount(rg.Viz.executor,q.path,q.event); else loader = new rg.query.QueryEventsCount(rg.Viz.executor,q.path);
	loader.onError.add(rg.Viz.error);
	if(null == options) options = { };
	var o = rg.Viz.sizeOptions(selection,options);
	rg.Viz.setTimeLimits(loader,o);
	var space = new rg.svg.SvgSpace(o.width,o.height,selection);
	space.svg.attr("class").string("rg");
	var y = new thx.math.scale.Linear();
	var ylayers = [];
	var top1 = space.createPanel(rg.layout.Disposition.Fixed(0,0,5)), middle = space.createContainer(rg.layout.Disposition.Fill(0,0),rg.layout.Orientation.Horizontal), left = 0;
	if(null == o.yaxis || o.yaxis.showlabels != false) {
		ylayers.push(rg.svg.SvgScaleLabel.ofLinear(middle.createPanel(rg.layout.Disposition.Fixed(0,2,50)),rg.svg.Anchor.Right,y));
		left += 52;
	}
	var chartpanel = middle.createPanel(rg.layout.Disposition.Fill(0,0));
	if(null == o.yaxis || o.yaxis.showrulers != false) ylayers.push(rg.svg.SvgScaleRule.ofLinear(chartpanel,rg.layout.Orientation.Horizontal,y));
	var chart = new rg.svg.SvgStackChart(chartpanel,y);
	loader.onChange.add(function(d) {
		y.domain([null != o.yscale && null != o.yscale.max?o.yscale.max:Iterators.reduce(d.iterator(),function(a,b,i) {
			return a + b.value;
		},0) * 1.2,0.0]);
		ylayers.forEach(function(layer,_) {
			layer.redraw();
		});
		chart.data(d);
	});
	new rg.svg.SvgBorderLine(chartpanel,rg.svg.Anchor.Bottom);
	var bottom = space.createContainer(rg.layout.Disposition.Fixed(0,0,20),rg.layout.Orientation.Horizontal);
	rg.Viz.executeQuery(loader,o);
	return chart;
}
rg.Viz.error = function(e) {
	null;
}
rg.Viz.sizeOptions = function(selection,options) {
	var v;
	if(null == options) options = { };
	return Objects.copyTo(options,{ width : (v = selection.node().clientWidth) > 10?v:400, height : (v = selection.node().clientHeight) > 10?v:300});
}
rg.Viz.yinfo = function(container,q,scale,left,labelwidth,pos,ylayers,usedimensionclass) {
	var labels, ticks, title;
	var text = null == q.property?q.event:q.event + " - " + q.property;
	if(left) {
		title = new rg.svg.SvgTitle(container.createPanel(rg.layout.Disposition.Fixed(0,0,14)),text,rg.svg.Anchor.Right);
		labels = rg.svg.SvgScaleLabel.ofLinear(container.createPanel(rg.layout.Disposition.Fixed(2,0,labelwidth - 24)),rg.svg.Anchor.Right,scale);
		ticks = rg.svg.SvgScaleTick.ofLinear(container.createPanel(rg.layout.Disposition.Fixed(2,0,6)),rg.svg.Anchor.Right,scale);
	} else {
		ticks = rg.svg.SvgScaleTick.ofLinear(container.createPanel(rg.layout.Disposition.Fixed(2,0,6)),rg.svg.Anchor.Left,scale);
		labels = rg.svg.SvgScaleLabel.ofLinear(container.createPanel(rg.layout.Disposition.Fixed(2,0,labelwidth - 24)),rg.svg.Anchor.Left,scale);
		title = new rg.svg.SvgTitle(container.createPanel(rg.layout.Disposition.Fixed(0,0,14)),text,rg.svg.Anchor.Left);
	}
	if(usedimensionclass) {
		title.setCustomClass("dimension-" + pos);
		labels.setCustomClass("dimension-" + pos);
		ticks.setCustomClass("dimension-" + pos);
	}
	ylayers.push(labels);
	ylayers.push(ticks);
}
rg.Viz.line = function(el,_queries,options) {
	var selection = rg.Viz.select(el).html().clear();
	var o = rg.Viz.sizeOptions(selection,options);
	var queries = Std["is"](_queries,Array)?_queries:[_queries];
	var space = new rg.svg.SvgSpace(o.width,o.height,selection,10,0);
	space.svg.attr("class").string("rg");
	var x = new thx.math.scale.LinearTime().useTimeTicks(true);
	var container = space.createContainer(rg.layout.Disposition.Fill(0,0),rg.layout.Orientation.Horizontal);
	var chartpanel = null, highlighter = null, labelwidth = 75;
	var ylayers = [], xlayers = [], loaders = [], charts = [], isleft = true;
	var _g1 = 0, _g = queries.length;
	while(_g1 < _g) {
		var i = _g1++;
		var q = Objects.copyTo(queries[i],rg.QueryOptionsUtil.emptyQuery());
		var top = null == q.bottom && q.top > 0;
		var limit = null != q.bottom?q.bottom:null == q.top?10:q.top;
		var loader = [];
		if(null != q.property) loader[0] = rg.query.QueryValuesSeries.forLineChart(rg.Viz.executor,q.path,q.event,q.property,[]); else if(null != q.event) loader[0] = rg.query.QueryEventSeries.forLineChart(rg.Viz.executor,q.path,q.event); else {
			var eloader = rg.query.QueryEventsSeries.forLineChart(rg.Viz.executor,q.path);
			loader[0] = eloader;
			if(null != q.events) eloader.events = q.events.copy();
		}
		loader[0].time.setPeriodicity(o.periodicity);
		rg.Viz.setTimeLimits(loader[0],o,true);
		loader[0].time.update();
		loader[0].onError.add(rg.Viz.error);
		loaders.push(loader[0]);
		var y = [new thx.math.scale.LinearInt()], info;
		if(i == 0) {
			rg.Viz.yinfo(container,q,y[0],true,labelwidth,i,ylayers,queries.length > 1);
			chartpanel = container.createPanel(rg.layout.Disposition.Fill(0,0));
			if((null == o.yaxis || o.yaxis.showrulers != false) && queries.length == 1) ylayers.push(rg.svg.SvgScaleRule.ofLinear(chartpanel,rg.layout.Orientation.Horizontal,y[0]));
			highlighter = new rg.svg.SvgLineChartHighlighter(chartpanel,x);
			isleft = false;
			loader[0].onData.addOnce((function() {
				return function(d) {
					highlighter.prepare();
				};
			})());
		} else rg.Viz.yinfo(container,q,y[0],false,labelwidth,i,ylayers,queries.length > 1);
		var chart = [new rg.svg.SvgLineChart(chartpanel,x,y[0])];
		chart[0].setCustomClass("dimension-" + i);
		chart[0].lineInterpolator(null == o.lineinterpolator?thx.svg.LineInterpolator.Linear:thx.svg.LineInterpolators.parse(o.lineinterpolator));
		charts.push(chart[0]);
		if(i == 0) loader[0].onChange.add((function(loader) {
			return function(v) {
				x.domain([null == loader[0].time.start?v.minx:loader[0].time.start.getTime(),null == loader[0].time.end?v.maxx:loader[0].time.end.getTime()]);
				xlayers.forEach((function() {
					return function(layer,i1) {
						layer.redraw();
					};
				})());
			};
		})(loader));
		loader[0].onChange.add((function(chart,y) {
			return function(v) {
				y[0].domain([v.maxy * 1.2,0.0]);
				ylayers.forEach((function() {
					return function(layer,i1) {
						layer.redraw();
					};
				})());
				chart[0].data(v.data);
			};
		})(chart,y));
	}
	var bottom = space.createContainer(rg.layout.Disposition.Fixed(0,0,20),rg.layout.Orientation.Horizontal);
	var belowchart = bottom.createContainer(rg.layout.Disposition.Fill(labelwidth,labelwidth * (queries.length - 1)),rg.layout.Orientation.Vertical);
	if(null != o.xaxis && o.xaxis.labelsonbounds == true) {
		xlayers.push(rg.svg.SvgScaleTick.boundsOfLinear(belowchart.createPanel(rg.layout.Disposition.Fixed(0,0,6)),rg.svg.Anchor.Top,x));
		xlayers.push(rg.svg.SvgScaleLabel.boundsOfLinear(belowchart.createPanel(rg.layout.Disposition.Fixed(2,0,12)),rg.svg.Anchor.Top,x));
	} else {
		xlayers.push(rg.svg.SvgScaleTick.ofLinear(belowchart.createPanel(rg.layout.Disposition.Fixed(0,0,6)),rg.svg.Anchor.Top,x));
		xlayers.push(rg.svg.SvgScaleLabel.ofLinear(belowchart.createPanel(rg.layout.Disposition.Fixed(2,0,12)),rg.svg.Anchor.Top,x));
	}
	if(o.animated) thx.js.Timer.timer(function(t) {
		loaders.forEach(function(loader,_) {
			loader.time.update();
		});
		x.domain([loaders[0].time.start.getTime(),loaders[0].time.end.getTime()]);
		charts.forEach(function(chart,_) {
			chart.updatex();
		});
		xlayers.forEach(function(layer,i) {
			layer.redraw();
		});
		return false;
	});
	loaders.forEach(function(loader,_) {
		rg.Viz.executeQuery(loader,o);
	});
}
rg.Viz.stream = function(el,_queries,options) {
	var selection = rg.Viz.select(el).html().clear();
	var o = rg.Viz.sizeOptions(selection,options);
	var queries = Std["is"](_queries,Array)?_queries:[_queries];
	var space = new rg.svg.SvgSpace(o.width,o.height,selection,10,0);
	space.svg.attr("class").string("rg");
	var x = new thx.math.scale.LinearTime().useTimeTicks(true);
	var container = space.createContainer(rg.layout.Disposition.Fill(0,0),rg.layout.Orientation.Horizontal);
	var chartpanel = null;
	var xlayers = [], loaders = [], charts = [];
	var _g1 = 0, _g = queries.length;
	while(_g1 < _g) {
		var i = _g1++;
		var q = Objects.copyTo(queries[i],rg.QueryOptionsUtil.emptyQuery());
		var top = null == q.bottom && q.top > 0;
		var limit = null != q.bottom?q.bottom:null == q.top?10:q.top;
		var loader = [];
		if(null != q.property) loader[0] = rg.query.QueryValuesSeries.forLineChart(rg.Viz.executor,q.path,q.event,q.property,[]); else loader[0] = rg.query.QueryEventSeries.forLineChart(rg.Viz.executor,q.path,q.event);
		loader[0].time.setPeriodicity(o.periodicity);
		rg.Viz.setTimeLimits(loader[0],o,true);
		loader[0].time.update();
		loader[0].onError.add(rg.Viz.error);
		loaders.push(loader[0]);
		var y = [new thx.math.scale.LinearInt()], info;
		if(i == 0) chartpanel = container.createPanel(rg.layout.Disposition.Fill(0,0));
		var chart = [new rg.svg.SvgStreamGraph(chartpanel,x)];
		chart[0].setCustomClass("dimension-" + i);
		chart[0].lineInterpolator(null == o.lineinterpolator?thx.svg.LineInterpolator.Linear:thx.svg.LineInterpolators.parse(o.lineinterpolator));
		charts.push(chart[0]);
		if(i == 0) loader[0].onChange.add((function(loader) {
			return function(v) {
				x.domain([null == loader[0].time.start?v.minx:loader[0].time.start.getTime(),null == loader[0].time.end?v.maxx:loader[0].time.end.getTime()]);
				xlayers.forEach((function() {
					return function(layer,i1) {
						layer.redraw();
					};
				})());
			};
		})(loader));
		loader[0].onChange.add((function(chart,y) {
			return function(v) {
				y[0].domain([v.maxy * 1.2,0.0]);
				chart[0].data(v.data);
			};
		})(chart,y));
	}
	var bottom = space.createContainer(rg.layout.Disposition.Fixed(0,0,20),rg.layout.Orientation.Horizontal);
	var belowchart = bottom.createContainer(rg.layout.Disposition.Fill(0,0),rg.layout.Orientation.Vertical);
	if(null != o.xaxis && o.xaxis.labelsonbounds == true) {
		xlayers.push(rg.svg.SvgScaleTick.boundsOfLinear(belowchart.createPanel(rg.layout.Disposition.Fixed(0,0,6)),rg.svg.Anchor.Top,x));
		xlayers.push(rg.svg.SvgScaleLabel.boundsOfLinear(belowchart.createPanel(rg.layout.Disposition.Fixed(2,0,12)),rg.svg.Anchor.Top,x));
	} else {
		xlayers.push(rg.svg.SvgScaleTick.ofLinear(belowchart.createPanel(rg.layout.Disposition.Fixed(0,0,6)),rg.svg.Anchor.Top,x));
		xlayers.push(rg.svg.SvgScaleLabel.ofLinear(belowchart.createPanel(rg.layout.Disposition.Fixed(2,0,12)),rg.svg.Anchor.Top,x));
	}
	if(o.animated) thx.js.Timer.timer(function(t) {
		loaders.forEach(function(loader,_) {
			loader.time.update();
		});
		x.domain([loaders[0].time.start.getTime(),loaders[0].time.end.getTime()]);
		charts.forEach(function(chart,_) {
			chart.updatex();
		});
		xlayers.forEach(function(layer,i) {
			layer.redraw();
		});
		return false;
	});
	loaders.forEach(function(loader,_) {
		rg.Viz.executeQuery(loader,o);
	});
}
rg.Viz.select = function(el) {
	var el1 = Std["is"](el,String)?thx.js.Dom.select(el):thx.js.Dom.selectNode(el);
	if(el1.empty()) throw new thx.error.Error("invalid container",null,null,{ fileName : "Viz.hx", lineNumber : 1040, className : "rg.Viz", methodName : "select"});
	return el1;
}
rg.Viz.prototype.__class__ = rg.Viz;
thx.geom.layout.Pie = function(p) {
	if( p === $_ ) return;
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
}
thx.geom.layout.Pie.__name__ = ["thx","geom","layout","Pie"];
thx.geom.layout.Pie.prototype._startAngle = null;
thx.geom.layout.Pie.prototype._endAngle = null;
thx.geom.layout.Pie.prototype._sort = null;
thx.geom.layout.Pie.prototype._value = null;
thx.geom.layout.Pie.prototype.pie = function(data,i) {
	var a = this._startAngle(data,i), k = this._endAngle(data,i) - a;
	var index = Ints.range(data.length);
	if(this._sort != null) {
		var s = this._sort;
		index.sort(function(i1,j) {
			return s(data[i1],data[j]);
		});
	}
	var values = data.map(this._value);
	k /= Iterators.reduce(values.iterator(),function(p,d,_) {
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
thx.geom.layout.Pie.prototype.getStartAngle = function() {
	return this._startAngle;
}
thx.geom.layout.Pie.prototype.startAngle = function(v) {
	return this.startAnglef(function(_,_1) {
		return v;
	});
}
thx.geom.layout.Pie.prototype.startAnglef = function(v) {
	this._startAngle = v;
	return this;
}
thx.geom.layout.Pie.prototype.getEndAngle = function() {
	return this._endAngle;
}
thx.geom.layout.Pie.prototype.endAngle = function(v) {
	return this.endAnglef(function(_,_1) {
		return v;
	});
}
thx.geom.layout.Pie.prototype.endAnglef = function(v) {
	this._endAngle = v;
	return this;
}
thx.geom.layout.Pie.prototype.getSort = function() {
	return this._sort;
}
thx.geom.layout.Pie.prototype.sort = function(v) {
	this._sort = v;
	return this;
}
thx.geom.layout.Pie.prototype.getValue = function() {
	return this._value;
}
thx.geom.layout.Pie.prototype.valuef = function(v) {
	this._value = v;
	return this;
}
thx.geom.layout.Pie.prototype.__class__ = thx.geom.layout.Pie;
thx.js.AccessTween = function(transition,tweens) {
	if( transition === $_ ) return;
	this.transition = transition;
	this.tweens = tweens;
}
thx.js.AccessTween.__name__ = ["thx","js","AccessTween"];
thx.js.AccessTween.prototype.transition = null;
thx.js.AccessTween.prototype.tweens = null;
thx.js.AccessTween.prototype.transitionColorTween = function(value) {
	return function(d,i,a) {
		return thx.color.Rgb.interpolatef(a,value);
	};
}
thx.js.AccessTween.prototype.transitionColorTweenf = function(f) {
	return function(d,i,a) {
		return thx.color.Rgb.interpolatef(a,f(d,i));
	};
}
thx.js.AccessTween.prototype.transitionStringTween = function(value) {
	return function(d,i,a) {
		return Strings.interpolatef(a,value);
	};
}
thx.js.AccessTween.prototype.transitionStringTweenf = function(f) {
	return function(d,i,a) {
		return Strings.interpolatef(a,f(d,i));
	};
}
thx.js.AccessTween.prototype.transitionFloatTween = function(value) {
	return function(d,i,a) {
		return Floats.interpolatef(a,value);
	};
}
thx.js.AccessTween.prototype.transitionFloatTweenf = function(f) {
	return function(d,i,a) {
		return Floats.interpolatef(a,f(d,i));
	};
}
thx.js.AccessTween.prototype._that = function() {
	return this.transition;
}
thx.js.AccessTween.prototype.__class__ = thx.js.AccessTween;
thx.js.AccessTweenStyle = function(name,transition,tweens) {
	if( name === $_ ) return;
	thx.js.AccessTween.call(this,transition,tweens);
	this.name = name;
}
thx.js.AccessTweenStyle.__name__ = ["thx","js","AccessTweenStyle"];
thx.js.AccessTweenStyle.__super__ = thx.js.AccessTween;
for(var k in thx.js.AccessTween.prototype ) thx.js.AccessTweenStyle.prototype[k] = thx.js.AccessTween.prototype[k];
thx.js.AccessTweenStyle.prototype.name = null;
thx.js.AccessTweenStyle.prototype.floatNodef = function(f,priority) {
	return this.floatTweenNodef(this.transitionFloatTweenf(f),priority);
}
thx.js.AccessTweenStyle.prototype["float"] = function(value,priority) {
	return this.floatTweenNodef(this.transitionFloatTween(value),priority);
}
thx.js.AccessTweenStyle.prototype.floatTweenNodef = function(tween,priority) {
	if(null == priority) priority = null;
	var name = this.name;
	var styleTween = function(d,i) {
		var f = tween(d,i,Std.parseFloat(js.Lib.window.getComputedStyle(d,null).getPropertyValue(name)));
		return function(t) {
			d.style.setProperty(name,"" + f(t),priority);
		};
	};
	this.tweens.set("style." + name,styleTween);
	return this.transition;
}
thx.js.AccessTweenStyle.prototype.stringNodef = function(f,priority) {
	return this.stringTweenNodef(this.transitionStringTweenf(f),priority);
}
thx.js.AccessTweenStyle.prototype.string = function(value,priority) {
	return this.stringTweenNodef(this.transitionStringTween(value),priority);
}
thx.js.AccessTweenStyle.prototype.stringTweenNodef = function(tween,priority) {
	if(null == priority) priority = null;
	var name = this.name;
	var styleTween = function(d,i) {
		var f = tween(d,i,js.Lib.window.getComputedStyle(d,null).getPropertyValue(name));
		return function(t) {
			d.style.setProperty(name,f(t),priority);
		};
	};
	this.tweens.set("style." + name,styleTween);
	return this.transition;
}
thx.js.AccessTweenStyle.prototype.colorNodef = function(f,priority) {
	return this.colorTweenNodef(this.transitionColorTweenf(f),priority);
}
thx.js.AccessTweenStyle.prototype.color = function(value,priority) {
	return this.colorTweenNodef(this.transitionColorTween(thx.color.Colors.parse(value)),priority);
}
thx.js.AccessTweenStyle.prototype.colorTweenNodef = function(tween,priority) {
	if(null == priority) priority = null;
	var name = this.name;
	var styleTween = function(d,i) {
		var f = tween(d,i,thx.color.Colors.parse(js.Lib.window.getComputedStyle(d,null).getPropertyValue(name)));
		return function(t) {
			d.style.setProperty(name,f(t).toRgbString(),priority);
		};
	};
	this.tweens.set("style." + name,styleTween);
	return this.transition;
}
thx.js.AccessTweenStyle.prototype.__class__ = thx.js.AccessTweenStyle;
thx.js.AccessDataTweenStyle = function(name,transition,tweens) {
	if( name === $_ ) return;
	thx.js.AccessTweenStyle.call(this,name,transition,tweens);
}
thx.js.AccessDataTweenStyle.__name__ = ["thx","js","AccessDataTweenStyle"];
thx.js.AccessDataTweenStyle.__super__ = thx.js.AccessTweenStyle;
for(var k in thx.js.AccessTweenStyle.prototype ) thx.js.AccessDataTweenStyle.prototype[k] = thx.js.AccessTweenStyle.prototype[k];
thx.js.AccessDataTweenStyle.prototype.floatf = function(f,priority) {
	return this.floatTweenNodef(this.transitionFloatTweenf(function(n,i) {
		return f(Reflect.field(n,"__data__"),i);
	}),priority);
}
thx.js.AccessDataTweenStyle.prototype.floatTweenf = function(tween,priority) {
	if(null == priority) priority = null;
	var name = this.name;
	var styleTween = function(d,i) {
		var f = tween(Reflect.field(d,"__data__"),i,Std.parseFloat(js.Lib.window.getComputedStyle(d,null).getPropertyValue(name)));
		return function(t) {
			d.style.setProperty(name,"" + f(t),priority);
		};
	};
	this.tweens.set("style." + name,styleTween);
	return this.transition;
}
thx.js.AccessDataTweenStyle.prototype.stringf = function(f,priority) {
	return this.stringTweenNodef(this.transitionStringTweenf(function(n,i) {
		return f(Reflect.field(n,"__data__"),i);
	}),priority);
}
thx.js.AccessDataTweenStyle.prototype.stringTweenf = function(tween,priority) {
	if(null == priority) priority = null;
	var name = this.name;
	var styleTween = function(d,i) {
		var f = tween(Reflect.field(d,"__data__"),i,js.Lib.window.getComputedStyle(d,null).getPropertyValue(name));
		return function(t) {
			d.style.setProperty(name,f(t),priority);
		};
	};
	this.tweens.set("style." + name,styleTween);
	return this.transition;
}
thx.js.AccessDataTweenStyle.prototype.colorf = function(f,priority) {
	return this.colorTweenNodef(this.transitionColorTweenf(function(n,i) {
		return f(Reflect.field(n,"__data__"),i);
	}),priority);
}
thx.js.AccessDataTweenStyle.prototype.colorTweenf = function(tween,priority) {
	if(null == priority) priority = null;
	var name = this.name;
	var styleTween = function(d,i) {
		var f = tween(Reflect.field(d,"__data__"),i,thx.color.Colors.parse(js.Lib.window.getComputedStyle(d,null).getPropertyValue(name)));
		return function(t) {
			d.style.setProperty(name,f(t).toRgbString(),priority);
		};
	};
	this.tweens.set("style." + name,styleTween);
	return this.transition;
}
thx.js.AccessDataTweenStyle.prototype.__class__ = thx.js.AccessDataTweenStyle;
rg.query.QueryValue = function(executor,path,event,property,value) {
	if( executor === $_ ) return;
	rg.query.QueryProperty.call(this,executor,path,event,property);
	this.setValue(value);
}
rg.query.QueryValue.__name__ = ["rg","query","QueryValue"];
rg.query.QueryValue.__super__ = rg.query.QueryProperty;
for(var k in rg.query.QueryProperty.prototype ) rg.query.QueryValue.prototype[k] = rg.query.QueryProperty.prototype[k];
rg.query.QueryValue.prototype.value = null;
rg.query.QueryValue.prototype.setValue = function(v) {
	if(null == v) throw new thx.error.NullArgument("v","invalid null argument '{0}' for method {1}.{2}()",{ fileName : "Query.hx", lineNumber : 194, className : "rg.query.QueryValue", methodName : "setValue"}); else null;
	return this.value = v;
}
rg.query.QueryValue.prototype.__class__ = rg.query.QueryValue;
rg.query.QueryProperties = function(executor,path,properties) {
	if( executor === $_ ) return;
	rg.query.QueryPath.call(this,executor,path);
	this.setProperties(properties);
}
rg.query.QueryProperties.__name__ = ["rg","query","QueryProperties"];
rg.query.QueryProperties.__super__ = rg.query.QueryPath;
for(var k in rg.query.QueryPath.prototype ) rg.query.QueryProperties.prototype[k] = rg.query.QueryPath.prototype[k];
rg.query.QueryProperties.prototype.properties = null;
rg.query.QueryProperties.prototype.setProperties = function(v) {
	if(null == v || 0 == v.length) throw new thx.error.NullArgument("v",null,{ fileName : "Query.hx", lineNumber : 242, className : "rg.query.QueryProperties", methodName : "setProperties"}); else null;
	return this.properties = v;
}
rg.query.QueryProperties.prototype.__class__ = rg.query.QueryProperties;
rg.query.QuerySearch = function(executor,path,event,where) {
	if( executor === $_ ) return;
	rg.query.QueryEvent.call(this,executor,path,event);
	this.setWhere(where);
}
rg.query.QuerySearch.__name__ = ["rg","query","QuerySearch"];
rg.query.QuerySearch.__super__ = rg.query.QueryEvent;
for(var k in rg.query.QueryEvent.prototype ) rg.query.QuerySearch.prototype[k] = rg.query.QueryEvent.prototype[k];
rg.query.QuerySearch.prototype.where = null;
rg.query.QuerySearch.prototype.setWhere = function(v) {
	if(null == v || 0 == v.length) throw new thx.error.NullArgument("v",null,{ fileName : "Query.hx", lineNumber : 376, className : "rg.query.QuerySearch", methodName : "setWhere"}); else null;
	return this.where = v;
}
rg.query.QuerySearch.prototype.__class__ = rg.query.QuerySearch;
hxevents.Dispatcher = function(p) {
	if( p === $_ ) return;
	this.handlers = new Array();
}
hxevents.Dispatcher.__name__ = ["hxevents","Dispatcher"];
hxevents.Dispatcher.stop = function() {
	throw hxevents.EventException.StopPropagation;
}
hxevents.Dispatcher.prototype.handlers = null;
hxevents.Dispatcher.prototype.add = function(h) {
	this.handlers.push(h);
	return h;
}
hxevents.Dispatcher.prototype.addOnce = function(h) {
	var me = this;
	var _h = null;
	_h = function(v) {
		me.remove(_h);
		h(v);
	};
	this.add(_h);
	return _h;
}
hxevents.Dispatcher.prototype.remove = function(h) {
	var _g1 = 0, _g = this.handlers.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(Reflect.compareMethods(this.handlers[i],h)) return this.handlers.splice(i,1)[0];
	}
	return null;
}
hxevents.Dispatcher.prototype.clear = function() {
	this.handlers = new Array();
}
hxevents.Dispatcher.prototype.dispatch = function(e) {
	try {
		var list = this.handlers.copy();
		var _g = 0;
		while(_g < list.length) {
			var l = list[_g];
			++_g;
			l(e);
		}
		return true;
	} catch( exc ) {
		if( js.Boot.__instanceof(exc,hxevents.EventException) ) {
			return false;
		} else throw(exc);
	}
}
hxevents.Dispatcher.prototype.has = function(h) {
	if(null == h) return this.handlers.length > 0; else {
		var _g = 0, _g1 = this.handlers;
		while(_g < _g1.length) {
			var handler = _g1[_g];
			++_g;
			if(h == handler) return true;
		}
		return false;
	}
}
hxevents.Dispatcher.prototype.__class__ = hxevents.Dispatcher;
thx.js.Svg = function() { }
thx.js.Svg.__name__ = ["thx","js","Svg"];
thx.js.Svg.mouse = function(dom) {
	var point = (null != dom.ownerSVGElement?dom.ownerSVGElement:dom).createSVGPoint();
	if(thx.js.Svg._usepage && (js.Lib.window.scrollX || js.Lib.window.scrollY)) {
		var svg = thx.js.Dom.selectNode(js.Lib.document.body).append("svg:svg").style("position").string("absolute").style("top")["float"](0).style("left")["float"](0);
		var ctm = svg.node().getScreenCTM();
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
	return [point.x,point.y];
}
thx.js.Svg.prototype.__class__ = thx.js.Svg;
rg.layout.Stack = function(width,height,orientation) {
	if( width === $_ ) return;
	this.orientation = null == orientation?rg.layout.Orientation.Vertical:orientation;
	this.children = [];
	this.width = width;
	this.height = height;
}
rg.layout.Stack.__name__ = ["rg","layout","Stack"];
rg.layout.Stack.prototype.children = null;
rg.layout.Stack.prototype.width = null;
rg.layout.Stack.prototype.height = null;
rg.layout.Stack.prototype.orientation = null;
rg.layout.Stack.prototype.moreSpaceRequired = function(size) {
}
rg.layout.Stack.prototype.addChild = function(child) {
	this.children.push(child);
	var f = child;
	f.setParent(this);
	this.reflow();
	return this;
}
rg.layout.Stack.prototype.addMany = function(it) {
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
	return this;
}
rg.layout.Stack.prototype.removeChild = function(child) {
	if(!this.children.remove(child)) return false;
	var f = child;
	f.setParent(null);
	this.reflow();
	return true;
}
rg.layout.Stack.prototype.iterator = function() {
	return this.children.iterator();
}
rg.layout.Stack.prototype.reflow = function() {
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
			var size = $e[4], after = $e[3], before = $e[2];
			required += size + before + after;
			values.push(size + before + after);
			break;
		case 1:
			var max = $e[6], min = $e[5], percent = $e[4], after = $e[3], before = $e[2];
			var size = Math.round(percent / 100 * available);
			if(null != min && size < min) size = min;
			if(null != max && size > max) size = max;
			required += size + before + after;
			values.push(size + before + after);
			break;
		case 2:
			var max = $e[5], min = $e[4], after = $e[3], before = $e[2];
			if(null == min) min = 0;
			if(null == max) max = available;
			required += min + before + after;
			variablespace += variables[i] = max - min;
			values.push(min + before + after);
			break;
		case 3:
			var h = $e[5], w = $e[4], y = $e[3], x = $e[2];
			values.push(0);
			break;
		case 4:
			var ratio = $e[4], after = $e[3], before = $e[2];
			if(null == ratio) ratio = 1;
			var size = Math.round(otherdimension * ratio);
			required += size + before + after;
			values.push(size + before + after);
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
				sizeable.setLayout(x,y,w,h);
				break;
			case 0:
			case 1:
			case 2:
			case 4:
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
			case 3:
				var h = $e[5], w = $e[4], y = $e[3], x = $e[2];
				sizeable.setLayout(x,y,w,h);
				break;
			case 0:
			case 1:
			case 2:
			case 4:
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
rg.layout.Stack.prototype.setSize = function(width,height) {
	if(this.width == width && this.height == height) return this;
	this.width = width;
	this.height = height;
	this.reflow();
	return this;
}
rg.layout.Stack.prototype.toString = function() {
	return "Stack [width: " + this.width + ", height: " + this.height + ", children: " + this.children.length + "]";
}
rg.layout.Stack.prototype.__class__ = rg.layout.Stack;
Std = function() { }
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
Std.prototype.__class__ = Std;
rg.svg.SvgStackChart = function(panel,y) {
	if( panel === $_ ) return;
	this._cpid = "barchart_clip_path_" + ++rg.svg.SvgStackChart._pathid;
	this._y = y;
	this._ease = thx.math.Equations.elasticf();
	this._duration = 1500;
	this._created = 0;
	this.barWidth = 0.8;
	rg.svg.SvgLayer.call(this,panel);
	this.redraw();
}
rg.svg.SvgStackChart.__name__ = ["rg","svg","SvgStackChart"];
rg.svg.SvgStackChart.__super__ = rg.svg.SvgLayer;
for(var k in rg.svg.SvgLayer.prototype ) rg.svg.SvgStackChart.prototype[k] = rg.svg.SvgLayer.prototype[k];
rg.svg.SvgStackChart.prototype.barWidth = null;
rg.svg.SvgStackChart.prototype._y = null;
rg.svg.SvgStackChart.prototype._ease = null;
rg.svg.SvgStackChart.prototype._duration = null;
rg.svg.SvgStackChart.prototype._created = null;
rg.svg.SvgStackChart.prototype._data = null;
rg.svg.SvgStackChart.prototype._cpid = null;
rg.svg.SvgStackChart.prototype.getData = function() {
	return this._data;
}
rg.svg.SvgStackChart.prototype.data = function(d) {
	this._data = [];
	var cur = 0.0;
	var _g = 0;
	while(_g < d.length) {
		var item = d[_g];
		++_g;
		this._data.push({ label : item.label, value : item.value, y0 : cur});
		cur += item.value;
	}
	this.redraw();
}
rg.svg.SvgStackChart.prototype.init = function() {
	this.svg.classed().add("stack-chart").append("svg:clipPath").attr("id").string(this._cpid).append("svg:rect").attr("x")["float"](0).attr("y")["float"](0).attr("width")["float"](0).attr("height")["float"](0);
	this.svg.attr("clip-path").string("url(#" + this._cpid + ")");
	this.svg.append("svg:defs");
}
rg.svg.SvgStackChart.prototype.resize = function() {
	this._y.range([0.0,this.height]);
	this.svg.select("#" + this._cpid + " rect").attr("width")["float"](this.width).attr("height")["float"](this.height);
}
rg.svg.SvgStackChart.prototype._keyBar = function(d,i) {
	return d.label;
}
rg.svg.SvgStackChart.prototype._barwidth = null;
rg.svg.SvgStackChart.prototype.redraw = function() {
	if(null == this._data || this._data.length == 0) return;
	var start = 0, width = this.width, max = this._y.getDomain()[1];
	this._barwidth = Ints.max(1,Math.floor(width * this.barWidth));
	var bars = this.svg.selectAll("g.bar").data(this._data,$closure(this,"_keyBar"));
	var be = bars.enter().append("svg:g").attr("class").stringf(function(d,i) {
		return "bar item-" + i;
	}).attr("transform").stringf(function(d,i) {
		return "translate(" + width / 2 + ",0)";
	});
	be.append("svg:rect").attr("width")["float"](this._barwidth).attr("class").stringf(function(d,i) {
		return "bar bar-" + i;
	}).attr("height")["float"](0).attr("x")["float"](-this._barwidth / 2).attr("y")["float"](this._y.scale(0)).style("opacity")["float"](0.0);
	be.eachNode((function(f,a1) {
		return function(a2,a3) {
			return f(a1,a2,a3);
		};
	})($closure(this,"_popin"),max));
	be.sort(function(a,b) {
		if(null == a && null == b) return 0; else if(null == a) return 1; else if(null == b) return -1;
		return Floats.compare(b.y0,a.y0);
	});
	bars.update().select("text").text().stringf($closure(this,"textLabel"));
	bars.update().attr("transform").stringf(function(d,i) {
		return "translate(" + width / 2 + ",0)";
	}).select("rect").transition().duration(null,this._duration).ease(this._ease).attr("width")["float"](this._barwidth).attr("height").floatf($closure(this,"hscale")).attr("x")["float"](-this._barwidth / 2);
	bars.exit().remove();
}
rg.svg.SvgStackChart.prototype.textLabel = function(d,i) {
	return rg.util.RGStrings.humanize(d.label) + ": " + Floats.format(d.value,"I");
}
rg.svg.SvgStackChart.prototype._border = null;
rg.svg.SvgStackChart.prototype.hscale = function(d,i) {
	return Math.round(this._y.scale(0) - this._y.scale(d.value) - this._border);
}
rg.svg.SvgStackChart.prototype.yscale = function(d,i) {
	return Math.round(this._y.scale(d.y0) - (this._y.scale(0) - this._y.scale(d.value) - this._border * 2));
}
rg.svg.SvgStackChart.prototype.ylabel = function(d,i) {
	return Math.round(this._y.scale(d.y0) - (this._y.scale(0) - this._y.scale(d.value) - this._border * 2) / 2);
}
rg.svg.SvgStackChart.prototype._popin = function(max,n,i) {
	var g = thx.js.Dom.selectNodeData(n), bar = g.select("rect.bar"), shadow = g.selectAll("rect.shadow"), y = this._y;
	var color = bar.style("fill").get();
	this._border = bar.style("stroke-width").getFloat();
	if("none" == color) color = new thx.color.Hsl(Std.random(360),0.9,0.7).toRgbString();
	if(this.svg.select("defs").select("#rg_bar_gradient_" + i).empty()) {
		var stops = this.svg.select("defs").append("svg:linearGradient").attr("id").string("rg_bar_gradient_" + i).attr("x1").string("0%").attr("x2").string("0%").attr("y1").string("100%").attr("y2").string("0%").attr("spreadMethod").string("pad");
		stops.append("svg:stop").attr("offset").string("0%").attr("stop-color").string(thx.color.Hsl.darker(thx.color.Hsl.toHsl(thx.color.Colors.parse(color)),1.4).toRgbString()).attr("stop-opacity")["float"](1);
		stops.append("svg:stop").attr("offset").string("100%").attr("stop-color").string(color).attr("stop-opacity")["float"](1);
	}
	var me = this;
	bar.attr("style").string("fill:url(#rg_bar_gradient_" + i + ")").transition().ease(this._ease).duration(null,this._duration).delay(null,0 * (i - this._created)).attr("height").floatf($closure(this,"hscale")).attr("y").floatf($closure(this,"yscale")).style("opacity")["float"](1.0).endNode(function(n1,i1) {
		g.selectAll("text").transition().style("opacity")["float"](1);
		if(i1 > 0) return;
		g.onNode("mouseover.animation",$closure(me,"_highlight")).onNode("mouseout.animation",$closure(me,"_backtonormal"));
	});
	g.append("svg:text").attr("text-anchor").string("middle").attr("dominant-baseline").string("middle").attr("x")["float"](0).text().stringf($closure(this,"textLabel")).style("opacity")["float"](0.0).attr("y").floatf($closure(this,"ylabel"));
	shadow.transition().ease(this._ease).duration(null,this._duration).delay(null,0 * (i - this._created)).attr("height").floatf($closure(this,"hscale")).attr("y").floatf($closure(this,"yscale")).style("opacity")["float"](0.25);
	if(i == this._data.length - 1) this._created = i;
}
rg.svg.SvgStackChart.prototype._highlight = function(d,i) {
	var bar = thx.js.Dom.selectNodeData(d).selectAll("rect");
	bar.transition().ease(this._ease).duration(null,this._duration).attr("x")["float"](Math.ceil(-this._barwidth * 1.2 / 2)).attr("width")["float"](Math.ceil(this._barwidth * 1.2));
}
rg.svg.SvgStackChart.prototype._backtonormal = function(d,i) {
	var bar = thx.js.Dom.selectNodeData(d).selectAll("rect");
	bar.transition().ease(this._ease).duration(null,this._duration).attr("x")["float"](-this._barwidth / 2).attr("width")["float"](this._barwidth);
}
rg.svg.SvgStackChart.prototype.__class__ = rg.svg.SvgStackChart;
rg.query.QuerySubPath = function(executor,path) {
	if( executor === $_ ) return;
	rg.query.QueryPath.call(this,executor,path);
}
rg.query.QuerySubPath.__name__ = ["rg","query","QuerySubPath"];
rg.query.QuerySubPath.__super__ = rg.query.QueryPath;
for(var k in rg.query.QueryPath.prototype ) rg.query.QuerySubPath.prototype[k] = rg.query.QueryPath.prototype[k];
rg.query.QuerySubPath.prototype.executeLoad = function(success,error) {
	var query = this.queryObject();
	query.type = "path";
	this.executor.children(this.path,query,success,error);
}
rg.query.QuerySubPath.prototype.__class__ = rg.query.QuerySubPath;
rg.query.QueryEventSeries = function(executor,path,event) {
	if( executor === $_ ) return;
	rg.query.QueryEvent.call(this,executor,path,event);
}
rg.query.QueryEventSeries.__name__ = ["rg","query","QueryEventSeries"];
rg.query.QueryEventSeries.__super__ = rg.query.QueryEvent;
for(var k in rg.query.QueryEvent.prototype ) rg.query.QueryEventSeries.prototype[k] = rg.query.QueryEvent.prototype[k];
rg.query.QueryEventSeries.forLineChart = function(executor,path,event) {
	var query = new rg.query.QueryEventSeries(executor,path,event);
	query.transform = rg.query.Transform.timeSeries(query,event);
	return query;
}
rg.query.QueryEventSeries.prototype.executeLoad = function(success,error) {
	var query = this.queryObject();
	query.property = this.event;
	this.executor.propertySeries(this.path,query,success,error);
}
rg.query.QueryEventSeries.prototype.__class__ = rg.query.QueryEventSeries;
haxe.Timer = function(time_ms) {
	if( time_ms === $_ ) return;
	this.id = haxe.Timer.arr.length;
	haxe.Timer.arr[this.id] = this;
	this.timerId = window.setInterval("haxe.Timer.arr[" + this.id + "].run();",time_ms);
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
haxe.Timer.prototype.id = null;
haxe.Timer.prototype.timerId = null;
haxe.Timer.prototype.stop = function() {
	if(this.id == null) return;
	window.clearInterval(this.timerId);
	haxe.Timer.arr[this.id] = null;
	if(this.id > 100 && this.id == haxe.Timer.arr.length - 1) {
		var p = this.id - 1;
		while(p >= 0 && haxe.Timer.arr[p] == null) p--;
		haxe.Timer.arr = haxe.Timer.arr.slice(0,p + 1);
	}
	this.id = null;
}
haxe.Timer.prototype.run = function() {
}
haxe.Timer.prototype.__class__ = haxe.Timer;
rg.QueryOptionsUtil = function() { }
rg.QueryOptionsUtil.__name__ = ["rg","QueryOptionsUtil"];
rg.QueryOptionsUtil.emptyQuery = function() {
	return { path : null, event : null, events : null, property : null, values : null, filter : null, top : 10, bottom : null, other : null};
}
rg.QueryOptionsUtil.emptyPivotTableQuery = function() {
	return { path : null, event : null, availableProperties : null, properties : [], filter : null, top : null, bottom : null};
}
rg.QueryOptionsUtil.prototype.__class__ = rg.QueryOptionsUtil;
rg.svg.SvgBarChart = function(panel,x,y) {
	if( panel === $_ ) return;
	this._cpid = "barchart_clip_path_" + ++rg.svg.SvgBarChart._pathid;
	this._x = x;
	this._y = y;
	this._ease = thx.math.Equations.elasticf();
	this._duration = 1500;
	this._created = 0;
	this.barWidth = 0.6;
	rg.svg.SvgLayer.call(this,panel);
	this.redraw();
}
rg.svg.SvgBarChart.__name__ = ["rg","svg","SvgBarChart"];
rg.svg.SvgBarChart.__super__ = rg.svg.SvgLayer;
for(var k in rg.svg.SvgLayer.prototype ) rg.svg.SvgBarChart.prototype[k] = rg.svg.SvgLayer.prototype[k];
rg.svg.SvgBarChart.prototype.barWidth = null;
rg.svg.SvgBarChart.prototype._x = null;
rg.svg.SvgBarChart.prototype._y = null;
rg.svg.SvgBarChart.prototype._ease = null;
rg.svg.SvgBarChart.prototype._duration = null;
rg.svg.SvgBarChart.prototype._created = null;
rg.svg.SvgBarChart.prototype._data = null;
rg.svg.SvgBarChart.prototype._cpid = null;
rg.svg.SvgBarChart.prototype.getData = function() {
	return this._data;
}
rg.svg.SvgBarChart.prototype.data = function(d) {
	this._data = d;
	this.redraw();
}
rg.svg.SvgBarChart.prototype.init = function() {
	this.svg.classed().add("bar-chart").append("svg:clipPath").attr("id").string(this._cpid).append("svg:rect").attr("x")["float"](0).attr("y")["float"](0).attr("width")["float"](0).attr("height")["float"](0);
	this.svg.attr("clip-path").string("url(#" + this._cpid + ")");
	this.svg.append("svg:defs");
}
rg.svg.SvgBarChart.prototype.resize = function() {
	this._y.range([0.0,this.height]);
	this.svg.select("#" + this._cpid + " rect").attr("width")["float"](this.width).attr("height")["float"](this.height);
}
rg.svg.SvgBarChart.prototype._key = function(d,i) {
	return d.label;
}
rg.svg.SvgBarChart.prototype._barwidth = null;
rg.svg.SvgBarChart.prototype.redraw = function() {
	if(null == this._data || this._data.length == 0) return;
	var start = 0, width = this.width, max = this._y.getDomain()[1];
	this._barwidth = Ints.max(1,Math.floor(width / this._data.length * this.barWidth));
	var bands = this._x.rangePoints(start,width,1);
	var bars = this.svg.selectAll("g.bar").data(this._data,$closure(this,"_key"));
	var be = bars.enter().append("svg:g").attr("class").string("bar").attr("transform").stringf(function(d,i) {
		return "translate(" + bands.scale(d.label,i) + ",0)";
	});
	be.append("svg:rect").attr("class").string("shadow").attr("width")["float"](this._barwidth).attr("height")["float"](0).attr("x")["float"](-this._barwidth / 2).attr("y")["float"](this._y.scale(0)).style("opacity")["float"](0.0).attr("transform").string("translate(1,1)").style("stroke").string("#000").style("fill").string("#000").style("stroke-width")["float"](5).style("opacity")["float"](0.0);
	be.append("svg:rect").attr("class").string("shadow").attr("width")["float"](this._barwidth).attr("height")["float"](0).attr("x")["float"](-this._barwidth / 2).attr("y")["float"](this._y.scale(0)).style("opacity")["float"](0.0).attr("transform").string("translate(1,1)").style("stroke").string("#000").style("fill").string("#000").style("stroke-width")["float"](3).style("opacity")["float"](0.0);
	be.append("svg:rect").attr("width")["float"](this._barwidth).attr("class").stringf(function(d,i) {
		return "bar item-" + i;
	}).attr("height")["float"](0).attr("x")["float"](-this._barwidth / 2).attr("y")["float"](this._y.scale(0)).style("opacity")["float"](0.0);
	be.append("svg:text").attr("text-anchor").string("middle").attr("x")["float"](0).text().stringf($closure(this,"textLabel")).style("opacity")["float"](0.0).attr("y").floatf($closure(this,"ylabel"));
	be.eachNode((function(f,a1) {
		return function(a2,a3) {
			return f(a1,a2,a3);
		};
	})($closure(this,"_popin"),max));
	bars.update().attr("transform").stringf(function(d,i) {
		return "translate(" + bands.scale(d.label,i) + ",0)";
	}).select("rect").transition().duration(null,this._duration).ease(this._ease).attr("width")["float"](this._barwidth).attr("height").floatf($closure(this,"hscale")).attr("x")["float"](-this._barwidth / 2);
	bars.update().select("text").text().stringf($closure(this,"textLabel"));
	bars.exit().remove();
}
rg.svg.SvgBarChart.prototype.textLabel = function(d,i) {
	return Floats.format(d.value,"I");
}
rg.svg.SvgBarChart.prototype.hscale = function(d,_) {
	return this._y.scale(0) - this._y.scale(d.value);
}
rg.svg.SvgBarChart.prototype.yscale = function(d,_) {
	return this._y.scale(d.value);
}
rg.svg.SvgBarChart.prototype.ylabel = function(d,_) {
	return this._y.scale(d.value) - 5;
}
rg.svg.SvgBarChart.prototype._popin = function(max,n,i) {
	var g = thx.js.Dom.selectNodeData(n), bar = g.select("rect.bar"), shadow = g.selectAll("rect.shadow"), y = this._y;
	var color = bar.style("fill").get();
	if(this.svg.select("defs").select("#rg_bar_gradient_" + i).empty()) {
		var stops = this.svg.select("defs").append("svg:linearGradient").attr("id").string("rg_bar_gradient_" + i).attr("x1").string("0%").attr("x2").string("0%").attr("y1").string("100%").attr("y2").string("0%").attr("spreadMethod").string("pad");
		stops.append("svg:stop").attr("offset").string("0%").attr("stop-color").string(thx.color.Hsl.darker(thx.color.Hsl.toHsl(thx.color.Colors.parse(color)),1.4).toRgbString()).attr("stop-opacity")["float"](1);
		stops.append("svg:stop").attr("offset").string("100%").attr("stop-color").string(color).attr("stop-opacity")["float"](1);
	}
	var me = this;
	bar.attr("style").string("fill:url(#rg_bar_gradient_" + i + ")").transition().ease(this._ease).duration(null,this._duration).delay(null,150 * (i - this._created)).attr("height").floatf($closure(this,"hscale")).attr("y").floatf($closure(this,"yscale")).style("opacity")["float"](1.0).endNode(function(n1,i1) {
		g.selectAll("text").transition().style("opacity")["float"](1);
		if(i1 > 0) return;
		g.onNode("mouseover.animation",$closure(me,"_highlight")).onNode("mouseout.animation",$closure(me,"_backtonormal"));
	});
	shadow.transition().ease(this._ease).duration(null,this._duration).delay(null,150 * (i - this._created)).attr("height").floatf($closure(this,"hscale")).attr("y").floatf($closure(this,"yscale")).style("opacity")["float"](0.25);
	if(i == this._data.length - 1) this._created = i;
}
rg.svg.SvgBarChart.prototype._highlight = function(d,i) {
	var bar = thx.js.Dom.selectNodeData(d).selectAll("rect");
	bar.transition().ease(this._ease).duration(null,this._duration).attr("x")["float"](Math.ceil(-this._barwidth * 1.2 / 2)).attr("width")["float"](Math.ceil(this._barwidth * 1.2));
}
rg.svg.SvgBarChart.prototype._backtonormal = function(d,i) {
	var bar = thx.js.Dom.selectNodeData(d).selectAll("rect");
	bar.transition().ease(this._ease).duration(null,this._duration).attr("x")["float"](-this._barwidth / 2).attr("width")["float"](this._barwidth);
}
rg.svg.SvgBarChart.prototype.__class__ = rg.svg.SvgBarChart;
thx.js.AccessText = function(selection) {
	if( selection === $_ ) return;
	thx.js.Access.call(this,selection);
}
thx.js.AccessText.__name__ = ["thx","js","AccessText"];
thx.js.AccessText.__super__ = thx.js.Access;
for(var k in thx.js.Access.prototype ) thx.js.AccessText.prototype[k] = thx.js.Access.prototype[k];
thx.js.AccessText.prototype.get = function() {
	return this.selection.firstNode(function(node) {
		return node.textContent;
	});
}
thx.js.AccessText.prototype.string = function(v) {
	this.clear();
	this.selection.eachNode(function(node,_) {
		node.textContent = v;
	});
	return this.selection;
}
thx.js.AccessText.prototype.clear = function() {
	this.selection.eachNode(function(node,i) {
		node.textContent = "";
	});
	return this.selection;
}
thx.js.AccessText.prototype["float"] = function(v) {
	this.clear();
	this.selection.eachNode(function(node,_) {
		node.textContent = "" + v;
	});
	return this.selection;
}
thx.js.AccessText.prototype.stringNodef = function(v) {
	this.clear();
	this.selection.eachNode(function(node,i) {
		var x = v(node,i);
		if(null != x) node.textContent = x;
	});
	return this.selection;
}
thx.js.AccessText.prototype.floatNodef = function(v) {
	this.clear();
	this.selection.eachNode(function(node,i) {
		var x = v(node,i);
		if(null != x) node.textContent = "" + x;
	});
	return this.selection;
}
thx.js.AccessText.prototype.__class__ = thx.js.AccessText;
thx.js.AccessDataText = function(selection) {
	if( selection === $_ ) return;
	thx.js.AccessText.call(this,selection);
}
thx.js.AccessDataText.__name__ = ["thx","js","AccessDataText"];
thx.js.AccessDataText.__super__ = thx.js.AccessText;
for(var k in thx.js.AccessText.prototype ) thx.js.AccessDataText.prototype[k] = thx.js.AccessText.prototype[k];
thx.js.AccessDataText.prototype.stringf = function(v) {
	this.clear();
	this.selection.eachNode(function(node,i) {
		var x = v(Reflect.field(node,"__data__"),i);
		if(null != x) node.textContent = x;
	});
	return this.selection;
}
thx.js.AccessDataText.prototype.floatf = function(v) {
	this.clear();
	this.selection.eachNode(function(node,i) {
		var x = v(Reflect.field(node,"__data__"),i);
		if(null != x) node.textContent = "" + x;
	});
	return this.selection;
}
thx.js.AccessDataText.prototype.data = function() {
	return this.stringf(function(d,_) {
		return "" + d;
	});
}
thx.js.AccessDataText.prototype.__class__ = thx.js.AccessDataText;
thx.math.scale.LinearInt = function(p) {
	if( p === $_ ) return;
	thx.math.scale.Linear.call(this);
}
thx.math.scale.LinearInt.__name__ = ["thx","math","scale","LinearInt"];
thx.math.scale.LinearInt.__super__ = thx.math.scale.Linear;
for(var k in thx.math.scale.Linear.prototype ) thx.math.scale.LinearInt.prototype[k] = thx.math.scale.Linear.prototype[k];
thx.math.scale.LinearInt.prototype.ticks = function() {
	var range = this.tickRange();
	return Ints.range(Math.round(range.start),Math.round(range.stop),Ints.max(1,Math.round(range.step)));
}
thx.math.scale.LinearInt.prototype.tickFormat = function(v,i) {
	return Floats.format(v,"I");
}
thx.math.scale.LinearInt.prototype.__class__ = thx.math.scale.LinearInt;
rg.svg.SvgBaloonShape = function() { }
rg.svg.SvgBaloonShape.__name__ = ["rg","svg","SvgBaloonShape"];
rg.svg.SvgBaloonShape.shape = function(width,height,rc,rp,side,offset) {
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
rg.svg.SvgBaloonShape.prototype.__class__ = rg.svg.SvgBaloonShape;
Objects = function() { }
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
	Objects.copyTo(src,dst);
	return dst;
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
			throw new thx.error.Error("Unsupported number format: {0}",null,format,{ fileName : "Objects.hx", lineNumber : 225, className : "Objects", methodName : "formatf"});
			return $r;
		}(this));
	}
}
Objects.prototype.__class__ = Objects;
thx.js.AccessProperty = function(name,selection) {
	if( name === $_ ) return;
	thx.js.Access.call(this,selection);
	this.name = name;
}
thx.js.AccessProperty.__name__ = ["thx","js","AccessProperty"];
thx.js.AccessProperty.__super__ = thx.js.Access;
for(var k in thx.js.Access.prototype ) thx.js.AccessProperty.prototype[k] = thx.js.Access.prototype[k];
thx.js.AccessProperty.prototype.name = null;
thx.js.AccessProperty.prototype.get = function() {
	var n = this.name;
	return this.selection.firstNode(function(node) {
		return Reflect.field(node,n);
	});
}
thx.js.AccessProperty.prototype.remove = function() {
	var n = this.name;
	this.selection.eachNode(function(node,i) {
		Reflect.deleteField(node,n);
	});
	return this.selection;
}
thx.js.AccessProperty.prototype.string = function(v) {
	var n = this.name;
	this.selection.eachNode(function(node,i) {
		node[n] = v;
	});
	return this.selection;
}
thx.js.AccessProperty.prototype["float"] = function(v) {
	var s = "" + v;
	var n = this.name;
	this.selection.eachNode(function(node,i) {
		node[n] = s;
	});
	return this.selection;
}
thx.js.AccessProperty.prototype.__class__ = thx.js.AccessProperty;
thx.js.AccessDataProperty = function(name,selection) {
	if( name === $_ ) return;
	thx.js.AccessProperty.call(this,name,selection);
}
thx.js.AccessDataProperty.__name__ = ["thx","js","AccessDataProperty"];
thx.js.AccessDataProperty.__super__ = thx.js.AccessProperty;
for(var k in thx.js.AccessProperty.prototype ) thx.js.AccessDataProperty.prototype[k] = thx.js.AccessProperty.prototype[k];
thx.js.AccessDataProperty.prototype.stringf = function(v) {
	var n = this.name;
	this.selection.eachNode(function(node,i) {
		var s = v(Reflect.field(node,"__data__"),i);
		if(null == s) Reflect.deleteField(node,n); else node[n] = s;
	});
	return this.selection;
}
thx.js.AccessDataProperty.prototype.floatf = function(v) {
	var n = this.name;
	this.selection.eachNode(function(node,i) {
		var s = v(Reflect.field(node,"__data__"),i);
		if(null == s) Reflect.deleteField(node,n); else node[n] = "" + s;
	});
	return this.selection;
}
thx.js.AccessDataProperty.prototype.data = function() {
	return this.stringf(function(d,_) {
		return "" + d;
	});
}
thx.js.AccessDataProperty.prototype.__class__ = thx.js.AccessDataProperty;
rg.svg.SvgScatterGraph = function(panel,x,y) {
	if( panel === $_ ) return;
	this._x = x;
	this._y = y;
	this._ease = thx.math.Equations.linear;
	this._duration = 1500;
	this._created = 0;
	this._symbols = new Hash();
	rg.svg.SvgLayer.call(this,panel);
	this.redraw();
}
rg.svg.SvgScatterGraph.__name__ = ["rg","svg","SvgScatterGraph"];
rg.svg.SvgScatterGraph.__super__ = rg.svg.SvgLayer;
for(var k in rg.svg.SvgLayer.prototype ) rg.svg.SvgScatterGraph.prototype[k] = rg.svg.SvgLayer.prototype[k];
rg.svg.SvgScatterGraph.prototype._x = null;
rg.svg.SvgScatterGraph.prototype._y = null;
rg.svg.SvgScatterGraph.prototype._ease = null;
rg.svg.SvgScatterGraph.prototype._duration = null;
rg.svg.SvgScatterGraph.prototype._created = null;
rg.svg.SvgScatterGraph.prototype._data = null;
rg.svg.SvgScatterGraph.prototype.getData = function() {
	return this._data;
}
rg.svg.SvgScatterGraph.prototype.data = function(d) {
	this._data = d;
	this.redraw();
}
rg.svg.SvgScatterGraph.prototype.init = function() {
	this.svg.classed().add("scatter-graph").append("svg:defs");
}
rg.svg.SvgScatterGraph.prototype.resize = function() {
	this._y.range([0.0,this.height]);
}
rg.svg.SvgScatterGraph.prototype._key = function(d,i) {
	return d.label;
}
rg.svg.SvgScatterGraph.prototype.redraw = function() {
	if(null == this._data || this._data.length == 0) return;
	var start = 0, width = this.width, max = this._y.getDomain()[1], y = this._y;
	var bands = this._x.rangePoints(start,width,1);
	var symbols = this.svg.selectAll("g.symbol").data(this._data,$closure(this,"_key"));
	var be = symbols.enter().append("svg:g").attr("class").stringf(function(d,i) {
		return "symbol item-" + i;
	}).attr("transform").stringf(function(d,i) {
		return "translate(" + bands.scale(d.label,i) + "," + y.scale(d.value,i) + ")";
	}).style("opacity")["float"](0);
	be.append("svg:path").attr("class").string("shadow").attr("transform").string("translate(1,1)").style("stroke").string("#000").style("fill").string("#000").style("stroke-width")["float"](5).attr("d").stringf($closure(this,"_symbol")).style("opacity")["float"](0.25);
	be.append("svg:path").attr("class").string("shadow").attr("transform").string("translate(1,1)").style("stroke").string("#000").style("fill").string("#000").style("stroke-width")["float"](3).attr("d").stringf($closure(this,"_symbol")).style("opacity")["float"](0.5);
	be.append("svg:path").attr("d").stringf($closure(this,"_symbol"));
	var me = this;
	be.append("svg:text").attr("text-anchor").string("middle").attr("y").floatf(function(d,i) {
		return -Math.ceil(Math.sqrt(me.symbolSize(d,i)));
	}).text().stringf($closure(this,"textLabel"));
	be.transition().duration(null,this._duration).ease(this._ease).style("opacity")["float"](1);
	symbols.update().transition().duration(null,this._duration).ease(this._ease).attr("transform").stringf(function(d,i) {
		return "translate(" + bands.scale(d.label,i) + "," + y.scale(d.value,i) + ")";
	});
	symbols.exit().remove();
}
rg.svg.SvgScatterGraph.prototype._symbols = null;
rg.svg.SvgScatterGraph.prototype._symbol = function(d,i) {
	var name = this.symbolName(d,i);
	if(!Reflect.hasField(thx.svg.Symbol,name)) name = "circle";
	var size = this.symbolSize(d,i), key = name + "-" + size;
	var s = this._symbols.get(key);
	if(null == s) {
		s = Reflect.field(thx.svg.Symbol,name).apply(thx.svg.Symbol,[size]);
		this._symbols.set(key,s);
	}
	return s;
}
rg.svg.SvgScatterGraph.prototype.symbolName = function(d,i) {
	return "circle";
}
rg.svg.SvgScatterGraph.prototype.symbolSize = function(d,i) {
	return 100;
}
rg.svg.SvgScatterGraph.prototype.textLabel = function(d,i) {
	return Floats.format(d.value,"I");
}
rg.svg.SvgScatterGraph.prototype.__class__ = rg.svg.SvgScatterGraph;
thx.math.Ease = function() { }
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
thx.math.Ease.prototype.__class__ = thx.math.Ease;
thx.math.Equations = function() { }
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
thx.math.Equations.prototype.__class__ = thx.math.Equations;
rg.query.QueryValuesCount = function(executor,path,event,property,values,top,limit,others,othersLabel) {
	if( executor === $_ ) return;
	if(othersLabel == null) othersLabel = "others";
	if(others == null) others = true;
	if(limit == null) limit = 10;
	if(top == null) top = true;
	rg.query.QueryProperty.call(this,executor,path,event,property);
	this.top = top;
	this.limit = limit;
	this.others = others;
	this.othersLabel = othersLabel;
	this.values = values;
}
rg.query.QueryValuesCount.__name__ = ["rg","query","QueryValuesCount"];
rg.query.QueryValuesCount.__super__ = rg.query.QueryProperty;
for(var k in rg.query.QueryProperty.prototype ) rg.query.QueryValuesCount.prototype[k] = rg.query.QueryProperty.prototype[k];
rg.query.QueryValuesCount.prototype.top = null;
rg.query.QueryValuesCount.prototype.limit = null;
rg.query.QueryValuesCount.prototype.others = null;
rg.query.QueryValuesCount.prototype.othersLabel = null;
rg.query.QueryValuesCount.prototype.values = null;
rg.query.QueryValuesCount.prototype.filter = function(value,count) {
	return true;
}
rg.query.QueryValuesCount.prototype.order = function(values) {
	if(this.top) {
		values.sort(null == function(a,b) {
			return Floats.compare(b.value,a.value);
		}?Dynamics.compare:function(a,b) {
			return Floats.compare(b.value,a.value);
		});
		values;
	} else {
		values.sort(null == function(a,b) {
			return Floats.compare(a.value,b.value);
		}?Dynamics.compare:function(a,b) {
			return Floats.compare(a.value,b.value);
		});
		values;
	}
	return values;
}
rg.query.QueryValuesCount.prototype.load = function() {
	if(null == this.values || 0 == this.values.length) {
		var loader = new rg.query.QueryPropertyValues(this.executor,this.path,this.event,this.property,this.top?rg.query.QueryLimit.Top(this.limit):rg.query.QueryLimit.Bottom(this.limit)), me = this;
		loader.onData.add(function(d) {
			me.values = d;
			loader.close();
			me.load();
		});
		loader.load();
	} else rg.query.QueryProperty.prototype.load.call(this);
}
rg.query.QueryValuesCount.prototype.executeLoad = function(success,error) {
	var count = 0, total = this.values.length, result = [], totalcount = 0, others = this.others, label = this.othersLabel, filter = $closure(this,"filter");
	var _end = function() {
		if(others) result.push({ label : label, value : totalcount > 0?totalcount:0.0});
		success(result);
	};
	var _success = function(label1,v) {
		if(filter(label1,v)) {
			result.push({ label : label1, value : 0.0 + v});
			totalcount -= v;
		}
		if(++count == total) _end();
	};
	if(others) {
		total++;
		var _successtotal = function(v) {
			totalcount += v;
			if(++count == total) _end();
		};
		var query = this.queryObject();
		query.property = this.event + "." + this.property;
		this.executor.propertyCount(this.path,query,_successtotal,error);
	}
	var p = [{ property : this.event + "." + this.property, limit : this.limit, order : this.top?"descending":"ascending"}];
	this.time.autosetPeriodicity = false;
	this.time.setPeriodicity("eternity");
	var query = this.queryObject();
	query.property = this.event + "." + this.property;
	var _g = 0, _g1 = this.values;
	while(_g < _g1.length) {
		var value = _g1[_g];
		++_g;
		query.value = value;
		this.executor.propertyValueCount(this.path,query,(function(f,a1) {
			return function(a2) {
				return f(a1,a2);
			};
		})(_success,value),error);
	}
}
rg.query.QueryValuesCount.prototype.__class__ = rg.query.QueryValuesCount;
rg.query.PropertyType = { __ename__ : ["rg","query","PropertyType"], __constructs__ : ["ValueProperty","TimeProperty","EmptyProperty"] }
rg.query.PropertyType.ValueProperty = function(name,top,limit) { var $x = ["ValueProperty",0,name,top,limit]; $x.__enum__ = rg.query.PropertyType; $x.toString = $estr; return $x; }
rg.query.PropertyType.TimeProperty = function(periodicity,top) { var $x = ["TimeProperty",1,periodicity,top]; $x.__enum__ = rg.query.PropertyType; $x.toString = $estr; return $x; }
rg.query.PropertyType.EmptyProperty = ["EmptyProperty",2];
rg.query.PropertyType.EmptyProperty.toString = $estr;
rg.query.PropertyType.EmptyProperty.__enum__ = rg.query.PropertyType;
thx.color.Grey = function(value) {
	if( value === $_ ) return;
	this.grey = Floats.normalize(value);
	var c = Ints.interpolate(this.grey,0,255,null);
	thx.color.Rgb.call(this,c,c,c);
}
thx.color.Grey.__name__ = ["thx","color","Grey"];
thx.color.Grey.__super__ = thx.color.Rgb;
for(var k in thx.color.Rgb.prototype ) thx.color.Grey.prototype[k] = thx.color.Rgb.prototype[k];
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
	var v = t * color.grey;
	return new thx.color.Grey(Floats.interpolate(v,0,1,equation));
}
thx.color.Grey.interpolate = function(a,b,t,equation) {
	return new thx.color.Grey(Floats.interpolate(t,a.grey,b.grey,equation));
}
thx.color.Grey.prototype.grey = null;
thx.color.Grey.prototype.__class__ = thx.color.Grey;
thx.color.PerceivedLuminance = { __ename__ : ["thx","color","PerceivedLuminance"], __constructs__ : ["Standard","Perceived","PerceivedAccurate"] }
thx.color.PerceivedLuminance.Standard = ["Standard",0];
thx.color.PerceivedLuminance.Standard.toString = $estr;
thx.color.PerceivedLuminance.Standard.__enum__ = thx.color.PerceivedLuminance;
thx.color.PerceivedLuminance.Perceived = ["Perceived",1];
thx.color.PerceivedLuminance.Perceived.toString = $estr;
thx.color.PerceivedLuminance.Perceived.__enum__ = thx.color.PerceivedLuminance;
thx.color.PerceivedLuminance.PerceivedAccurate = ["PerceivedAccurate",2];
thx.color.PerceivedLuminance.PerceivedAccurate.toString = $estr;
thx.color.PerceivedLuminance.PerceivedAccurate.__enum__ = thx.color.PerceivedLuminance;
rg.query.QueryPropertyValues = function(executor,path,event,property,limit) {
	if( executor === $_ ) return;
	rg.query.QueryProperty.call(this,executor,path,event,property);
	this.setLimit(null == limit?rg.query.QueryLimit.NoLimit:limit);
}
rg.query.QueryPropertyValues.__name__ = ["rg","query","QueryPropertyValues"];
rg.query.QueryPropertyValues.__super__ = rg.query.QueryProperty;
for(var k in rg.query.QueryProperty.prototype ) rg.query.QueryPropertyValues.prototype[k] = rg.query.QueryProperty.prototype[k];
rg.query.QueryPropertyValues.prototype.limit = null;
rg.query.QueryPropertyValues.prototype.executeLoad = function(success,error) {
	var query = this.queryObject();
	query.property = this.event + "." + this.property;
	var $e = (this.limit);
	switch( $e[1] ) {
	case 0:
		var v = $e[2];
		query["top"] = v;
		break;
	case 1:
		var v = $e[2];
		query["bottom"] = v;
		break;
	default:
	}
	this.executor.propertyValues(this.path,query,success,error);
}
rg.query.QueryPropertyValues.prototype.setLimit = function(v) {
	if(null == v) throw new thx.error.NullArgument("v","invalid null argument '{0}' for method {1}.{2}()",{ fileName : "QueryPropertyValues.hx", lineNumber : 42, className : "rg.query.QueryPropertyValues", methodName : "setLimit"}); else null;
	return this.limit = v;
}
rg.query.QueryPropertyValues.prototype.__class__ = rg.query.QueryPropertyValues;
rg.query.QueryIntersect = function(executor,path,properties) {
	if( executor === $_ ) return;
	rg.query.QueryProperties.call(this,executor,path,properties);
}
rg.query.QueryIntersect.__name__ = ["rg","query","QueryIntersect"];
rg.query.QueryIntersect.__super__ = rg.query.QueryProperties;
for(var k in rg.query.QueryProperties.prototype ) rg.query.QueryIntersect.prototype[k] = rg.query.QueryProperties.prototype[k];
rg.query.QueryIntersect.forPivotTable = function(executor,path,properties,propertiesForColumns) {
	var query = new rg.query.QueryIntersect(executor,path,properties);
	var transformer = new rg.query._QueryIntersect.PivotTableTransform(propertiesForColumns,query);
	query.transform = $closure(transformer,"transform");
	return query;
}
rg.query.QueryIntersect.prototype.executeLoad = function(success,error) {
	var p = [];
	var _g = 0, _g1 = this.properties;
	while(_g < _g1.length) {
		var prop = _g1[_g];
		++_g;
		if(prop.property != "#timestamp") p.push({ property : prop.event + "." + prop.property, limit : prop.limit, order : prop.top?"descending":"ascending"});
	}
	var query = this.queryObject();
	query.properties = p;
	this.executor.intersect(this.path,query,success,error);
}
rg.query.QueryIntersect.prototype.__class__ = rg.query.QueryIntersect;
if(!rg.query._QueryIntersect) rg.query._QueryIntersect = {}
rg.query._QueryIntersect.PivotTableTransform = function(columns,query) {
	if( columns === $_ ) return;
	this.columns = columns;
	this.query = query;
}
rg.query._QueryIntersect.PivotTableTransform.__name__ = ["rg","query","_QueryIntersect","PivotTableTransform"];
rg.query._QueryIntersect.PivotTableTransform.emptyCalc = function() {
	return { min : Math.POSITIVE_INFINITY, max : Math.NEGATIVE_INFINITY, total : 0.0};
}
rg.query._QueryIntersect.PivotTableTransform.prototype.columns = null;
rg.query._QueryIntersect.PivotTableTransform.prototype.query = null;
rg.query._QueryIntersect.PivotTableTransform.prototype.queryHasTimeProperty = function() {
	return Iterators.any(this.query.properties.iterator(),function(v) {
		return v.property == "#timestamp";
	});
}
rg.query._QueryIntersect.PivotTableTransform.prototype.timePropertyPosition = function() {
	var _g1 = 0, _g = this.query.properties.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(this.query.properties[i].property == "#timestamp") return i;
	}
	return -1;
}
rg.query._QueryIntersect.PivotTableTransform.prototype.transform = function(src) {
	var data = { column_headers : [], row_headers : [], columns : [], rows : [], calc : rg.query._QueryIntersect.PivotTableTransform.emptyCalc()}, temp, values;
	if(this.queryHasTimeProperty()) {
		var pos = this.timePropertyPosition(), properties = this.query.properties.slice(0,pos).map(function(d,i) {
			return d.property;
		}).concat(["#" + this.query.time.periodicity]).concat(this.query.properties.slice(pos).map(function(d,i) {
			return d.property;
		})), headers = data.column_headers;
		var _g1 = 0, _g = properties.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(i == this.columns) headers = data.row_headers;
			if(properties[i] == "#timestamp") continue;
			headers.push(properties[i]);
		}
		values = [];
		temp = Objects.flatten(src,headers.length);
		var _g = 0;
		while(_g < temp.length) {
			var item = temp[_g];
			++_g;
			var arr = item.value.data;
			var _g1 = 0;
			while(_g1 < arr.length) {
				var pair = arr[_g1];
				++_g1;
				var fields = item.fields.slice(0,pos).concat([pair[0]]).concat(item.fields.slice(pos,-1));
				values.push({ fields : fields, value : pair[1]});
			}
		}
	} else {
		data.column_headers = this.query.properties.slice(0,this.columns).map(function(d,i) {
			return d.property;
		});
		data.row_headers = this.query.properties.slice(this.columns).map(function(d,i) {
			return d.property;
		});
		temp = Objects.flatten(src,this.query.properties.length);
		values = temp.map(function(d,i) {
			return { fields : d.fields, value : d.value.data.length > 0?d.value.data[0][1]:0};
		});
	}
	var rmap = new Hash(), cmap = new Hash(), rkey, ckey, rvalues, cvalues, item, row, col, value;
	var _g1 = 0, _g = values.length;
	while(_g1 < _g) {
		var i = _g1++;
		item = values[i];
		value = item.value;
		cvalues = item.fields.slice(0,this.columns);
		ckey = cvalues.join("/");
		if(cmap.exists(ckey)) col = cmap.get(ckey); else {
			col = { values : item.fields.slice(0,this.columns), calc : rg.query._QueryIntersect.PivotTableTransform.emptyCalc()};
			data.columns.push(col);
			cmap.set(ckey,col);
		}
		if(col.calc.max < value) col.calc.max = value;
		if(col.calc.min > value) col.calc.min = value;
		col.calc.total += value;
		rvalues = item.fields.slice(this.columns);
		rkey = rvalues.join("/");
		if(rmap.exists(rkey)) row = rmap.get(rkey); else {
			row = { values : rvalues, cells : [], calc : rg.query._QueryIntersect.PivotTableTransform.emptyCalc()};
			data.rows.push(row);
			rmap.set(rkey,row);
		}
		if(row.calc.max < value) row.calc.max = value;
		if(row.calc.min > value) row.calc.min = value;
		row.calc.total += value;
		if(data.calc.max < value) data.calc.max = value;
		if(data.calc.min > value) data.calc.min = value;
		data.calc.total += value;
		row.cells.push(item.value);
	}
	var toorder = [];
	var _g = 0, _g1 = data.rows;
	while(_g < _g1.length) {
		var row1 = _g1[_g];
		++_g;
		toorder = toorder.concat([row1.cells]);
	}
	Arrays.orderMultiple(data.columns,$closure(this,"orderColumns"),toorder);
	Arrays.order(data.rows,$closure(this,"orderRows"));
	return data;
}
rg.query._QueryIntersect.PivotTableTransform.prototype.orderRows = function(a,b) {
	return Arrays.compare(a.values,b.values);
}
rg.query._QueryIntersect.PivotTableTransform.prototype.orderColumns = function(a,b) {
	return Arrays.compare(a.values,b.values);
}
rg.query._QueryIntersect.PivotTableTransform.prototype.__class__ = rg.query._QueryIntersect.PivotTableTransform;
thx.js.Timer = function() { }
thx.js.Timer.__name__ = ["thx","js","Timer"];
thx.js.Timer.timer = function(f,delay) {
	if(delay == null) delay = 0.0;
	var now = Date.now().getTime(), found = false, t0, t1 = thx.js.Timer.queue;
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
	if(!found) thx.js.Timer.queue = { f : f, then : now, delay : delay, next : thx.js.Timer.queue, flush : false};
	if(0 == thx.js.Timer.interval) {
		thx.js.Timer.timeout = clearTimeout(thx.js.Timer.timeout);
		thx.js.Timer.interval = 1;
		window.requestAnimationFrame(thx.js.Timer._step);
	}
}
thx.js.Timer.step = function() {
	var elapsed, now = Date.now().getTime(), t1 = thx.js.Timer.queue;
	while(null != t1) {
		elapsed = now - t1.then;
		if(elapsed > t1.delay) t1.flush = t1.f(elapsed);
		t1 = t1.next;
	}
	var delay = thx.js.Timer._flush() - now;
	if(delay > 24) {
		if(Math.isFinite(delay)) {
			clearTimeout(thx.js.Timer.timeout);
			thx.js.Timer.timeout = setTimeout(thx.js.Timer._step,delay);
		}
		thx.js.Timer.interval = 0;
	} else {
		thx.js.Timer.interval = 1;
		window.requestAnimationFrame(thx.js.Timer._step);
	}
}
thx.js.Timer.flush = function() {
	var elapsed, now = Date.now().getTime(), t1 = thx.js.Timer.queue;
	while(null != t1) {
		elapsed = now - t1.then;
		if(t1.delay == 0) t1.flush = t1.f(elapsed);
		t1 = t1.next;
	}
	thx.js.Timer._flush();
}
thx.js.Timer._flush = function() {
	var t0 = null, t1 = thx.js.Timer.queue, then = Math.POSITIVE_INFINITY;
	while(null != t1) if(t1.flush) t1 = null != t0?t0.next = t1.next:thx.js.Timer.queue = t1.next; else {
		then = Math.min(then,t1.then + t1.delay);
		t1 = (t0 = t1).next;
	}
	return then;
}
thx.js.Timer.prototype.__class__ = thx.js.Timer;
thx.js.AccessTweenAttribute = function(name,transition,tweens) {
	if( name === $_ ) return;
	thx.js.AccessTween.call(this,transition,tweens);
	this.name = name;
	this.qname = thx.xml.Namespace.qualify(name);
}
thx.js.AccessTweenAttribute.__name__ = ["thx","js","AccessTweenAttribute"];
thx.js.AccessTweenAttribute.__super__ = thx.js.AccessTween;
for(var k in thx.js.AccessTween.prototype ) thx.js.AccessTweenAttribute.prototype[k] = thx.js.AccessTween.prototype[k];
thx.js.AccessTweenAttribute.prototype.name = null;
thx.js.AccessTweenAttribute.prototype.qname = null;
thx.js.AccessTweenAttribute.prototype.stringNodef = function(f) {
	return this.stringTweenNodef(this.transitionStringTweenf(f));
}
thx.js.AccessTweenAttribute.prototype.string = function(value) {
	return this.stringTweenNodef(this.transitionStringTween(value));
}
thx.js.AccessTweenAttribute.prototype.stringTweenNodef = function(tween) {
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
thx.js.AccessTweenAttribute.prototype.floatNodef = function(f) {
	return this.floatTweenNodef(this.transitionFloatTweenf(f));
}
thx.js.AccessTweenAttribute.prototype["float"] = function(value) {
	return this.floatTweenNodef(this.transitionFloatTween(value));
}
thx.js.AccessTweenAttribute.prototype.floatTweenNodef = function(tween) {
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
thx.js.AccessTweenAttribute.prototype.__class__ = thx.js.AccessTweenAttribute;
thx.js.AccessDataTweenAttribute = function(name,transition,tweens) {
	if( name === $_ ) return;
	thx.js.AccessTweenAttribute.call(this,name,transition,tweens);
}
thx.js.AccessDataTweenAttribute.__name__ = ["thx","js","AccessDataTweenAttribute"];
thx.js.AccessDataTweenAttribute.__super__ = thx.js.AccessTweenAttribute;
for(var k in thx.js.AccessTweenAttribute.prototype ) thx.js.AccessDataTweenAttribute.prototype[k] = thx.js.AccessTweenAttribute.prototype[k];
thx.js.AccessDataTweenAttribute.prototype.stringf = function(f) {
	return this.stringTweenNodef(this.transitionStringTweenf(function(n,i) {
		return f(Reflect.field(n,"__data__"),i);
	}));
}
thx.js.AccessDataTweenAttribute.prototype.floatf = function(f) {
	return this.floatTweenNodef(this.transitionFloatTweenf(function(n,i) {
		return f(Reflect.field(n,"__data__"),i);
	}));
}
thx.js.AccessDataTweenAttribute.prototype.stringTweenf = function(tween) {
	var name = this.name;
	var attrTween = function(n,i) {
		var f = tween(Reflect.field(n,"__data__"),i,n.getAttribute(name));
		return function(t) {
			n.setAttribute(name,f(t));
		};
	};
	var attrTweenNS = function(n,i) {
		var f = tween(Reflect.field(n,"__data__"),i,n.getAttributeNS(name.space,name.local));
		return function(t) {
			n.setAttributeNS(name.space,name.local,f(t));
		};
	};
	this.tweens.set("attr." + name,null == this.qname?attrTween:attrTweenNS);
	return this.transition;
}
thx.js.AccessDataTweenAttribute.prototype.floatTweenf = function(tween) {
	var name = this.name;
	var attrTween = function(n,i) {
		var f = tween(Reflect.field(n,"__data__"),i,Std.parseFloat(n.getAttribute(name)));
		return function(t) {
			n.setAttribute(name,"" + f(t));
		};
	};
	var attrTweenNS = function(n,i) {
		var f = tween(Reflect.field(n,"__data__"),i,Std.parseFloat(n.getAttributeNS(name.space,name.local)));
		return function(t) {
			n.setAttributeNS(name.space,name.local,"" + f(t));
		};
	};
	this.tweens.set("attr." + name,null == this.qname?attrTween:attrTweenNS);
	return this.transition;
}
thx.js.AccessDataTweenAttribute.prototype.__class__ = thx.js.AccessDataTweenAttribute;
thx.error.NullArgument = function(argumentName,message,posInfo) {
	if( argumentName === $_ ) return;
	if(null == message) message = "invalid null or empty argument '{0}' for method {1}.{2}()";
	thx.error.Error.call(this,message,[argumentName,posInfo.className,posInfo.methodName],posInfo,{ fileName : "NullArgument.hx", lineNumber : 16, className : "thx.error.NullArgument", methodName : "new"});
}
thx.error.NullArgument.__name__ = ["thx","error","NullArgument"];
thx.error.NullArgument.__super__ = thx.error.Error;
for(var k in thx.error.Error.prototype ) thx.error.NullArgument.prototype[k] = thx.error.Error.prototype[k];
thx.error.NullArgument.prototype.__class__ = thx.error.NullArgument;
thx.culture.core.NumberInfo = function(decimals,decimalsSeparator,groups,groupsSeparator,patternNegative,patternPositive) {
	if( decimals === $_ ) return;
	this.decimals = decimals;
	this.decimalsSeparator = decimalsSeparator;
	this.groups = groups;
	this.groupsSeparator = groupsSeparator;
	this.patternNegative = patternNegative;
	this.patternPositive = patternPositive;
}
thx.culture.core.NumberInfo.__name__ = ["thx","culture","core","NumberInfo"];
thx.culture.core.NumberInfo.prototype.decimals = null;
thx.culture.core.NumberInfo.prototype.decimalsSeparator = null;
thx.culture.core.NumberInfo.prototype.groups = null;
thx.culture.core.NumberInfo.prototype.groupsSeparator = null;
thx.culture.core.NumberInfo.prototype.patternNegative = null;
thx.culture.core.NumberInfo.prototype.patternPositive = null;
thx.culture.core.NumberInfo.prototype.__class__ = thx.culture.core.NumberInfo;
rg.layout.Orientation = { __ename__ : ["rg","layout","Orientation"], __constructs__ : ["Vertical","Horizontal"] }
rg.layout.Orientation.Vertical = ["Vertical",0];
rg.layout.Orientation.Vertical.toString = $estr;
rg.layout.Orientation.Vertical.__enum__ = rg.layout.Orientation;
rg.layout.Orientation.Horizontal = ["Horizontal",1];
rg.layout.Orientation.Horizontal.toString = $estr;
rg.layout.Orientation.Horizontal.__enum__ = rg.layout.Orientation;
thx.error.AbstractMethod = function(posInfo) {
	if( posInfo === $_ ) return;
	thx.error.Error.call(this,"method {0}.{1}() is abstract",[posInfo.className,posInfo.methodName],posInfo,{ fileName : "AbstractMethod.hx", lineNumber : 14, className : "thx.error.AbstractMethod", methodName : "new"});
}
thx.error.AbstractMethod.__name__ = ["thx","error","AbstractMethod"];
thx.error.AbstractMethod.__super__ = thx.error.Error;
for(var k in thx.error.Error.prototype ) thx.error.AbstractMethod.prototype[k] = thx.error.Error.prototype[k];
thx.error.AbstractMethod.prototype.__class__ = thx.error.AbstractMethod;
thx.color.Colors = function() { }
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
	if(!thx.color.Colors._reParse.match(s)) {
		var v = thx.color.NamedColors.byName.get(s);
		if(null == v) {
			if("transparent" == s) return thx.color.Rgb.fromInt(16777215); else return null;
		} else return v;
	}
	var type = thx.color.Colors._reParse.matched(1);
	if(!Strings.empty(type)) {
		var values = thx.color.Colors._reParse.matched(2).split(",");
		switch(type.toLowerCase()) {
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
thx.color.Colors.prototype.__class__ = thx.color.Colors;
DateTools = function() { }
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
		r.b[r.b.length] = DateTools.__format_get(d,f.substr(np + 1,1));
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
DateTools.prototype.__class__ = DateTools;
rg.query.QueryPropertiesCount = function(executor,path,event,properties) {
	if( executor === $_ ) return;
	rg.query.QueryEvent.call(this,executor,path,event);
	this.properties = properties;
}
rg.query.QueryPropertiesCount.__name__ = ["rg","query","QueryPropertiesCount"];
rg.query.QueryPropertiesCount.__super__ = rg.query.QueryEvent;
for(var k in rg.query.QueryEvent.prototype ) rg.query.QueryPropertiesCount.prototype[k] = rg.query.QueryEvent.prototype[k];
rg.query.QueryPropertiesCount.prototype.properties = null;
rg.query.QueryPropertiesCount.prototype.filter = function(value,count) {
	return true;
}
rg.query.QueryPropertiesCount.prototype.order = function(values) {
	{
		values.sort(null == function(a,b) {
			return Floats.compare(b.value,a.value);
		}?Dynamics.compare:function(a,b) {
			return Floats.compare(b.value,a.value);
		});
		values;
	}
	return values;
}
rg.query.QueryPropertiesCount.prototype.load = function() {
	if(null == this.properties) {
		var loader = new rg.query.QueryPropertyNames(this.executor,this.path,this.event), me = this;
		loader.onData.add(function(d) {
			me.properties = d.map(function(d1,i) {
				return Strings.ltrim(d1,".");
			});
			loader.close();
			me.load();
		});
		loader.load();
	} else rg.query.QueryEvent.prototype.load.call(this);
}
rg.query.QueryPropertiesCount.prototype.executeLoad = function(success,error) {
	var count = 0, total = this.properties.length, result = [], totalcount = 0;
	var _success = function(p,v) {
		result.push({ label : p, value : v});
		if(++count == total) success(result);
	};
	var query = this.queryObject();
	var _g = 0, _g1 = this.properties;
	while(_g < _g1.length) {
		var property = _g1[_g];
		++_g;
		query.property = this.event + "." + property;
		this.executor.propertyCount(this.path,query,(function(f,a1) {
			return function(a2) {
				return f(a1,a2);
			};
		})(_success,property),error);
	}
}
rg.query.QueryPropertiesCount.prototype.__class__ = rg.query.QueryPropertiesCount;
rg.svg.SvgLineChart = function(panel,x,y) {
	if( panel === $_ ) return;
	this._cpid = "linechart_clip_path_" + ++rg.svg.SvgLineChart._pathid;
	this._x = x;
	this._y = y;
	this._ease = thx.math.Ease.mode(thx.math.EaseMode.EaseOut,thx.math.Equations.exponential);
	this._duration = 1500;
	this._created = 0;
	rg.svg.SvgLayer.call(this,panel);
	this.redraw();
}
rg.svg.SvgLineChart.__name__ = ["rg","svg","SvgLineChart"];
rg.svg.SvgLineChart.__super__ = rg.svg.SvgLayer;
for(var k in rg.svg.SvgLayer.prototype ) rg.svg.SvgLineChart.prototype[k] = rg.svg.SvgLayer.prototype[k];
rg.svg.SvgLineChart.prototype._cpid = null;
rg.svg.SvgLineChart.prototype._data = null;
rg.svg.SvgLineChart.prototype._x = null;
rg.svg.SvgLineChart.prototype._y = null;
rg.svg.SvgLineChart.prototype._ease = null;
rg.svg.SvgLineChart.prototype._duration = null;
rg.svg.SvgLineChart.prototype._created = null;
rg.svg.SvgLineChart.prototype._interpolator = null;
rg.svg.SvgLineChart.prototype.tooltip = function(label,x,y) {
	var d = Date.fromTime(x);
	return label + ": " + Ints.format(y);
}
rg.svg.SvgLineChart.prototype.init = function() {
	this.svg.classed().add("line-chart").append("svg:clipPath").attr("id").string(this._cpid).append("svg:rect").attr("x")["float"](0).attr("y")["float"](-50).attr("width")["float"](0).attr("height")["float"](0);
	this.svg.attr("clip-path").string("url(#" + this._cpid + ")");
}
rg.svg.SvgLineChart.prototype.redraw = function() {
	if(null == this._data || this._data.length == 0) return;
	this._timedelta = Date.now().getTime();
	var layer = this.svg.selectAll("g.group").attr("transform").string("translate(0,0)").data(this._data,function(d,i) {
		return d.label;
	});
	layer.update().select("path.line").transition().ease(this._ease).duration(null,this._duration).attr("d").stringf($closure(this,"_path"));
	var g = layer.enter().append("svg:g").attr("class").string("group").onNode("mouseover.animation",$closure(this,"_highlight"),true).onNode("mouseout.animation",$closure(this,"_backtonormal"),true).on("mousemove.tooltip",$closure(this,"_showtooltip"),true).on("mouseout.tooltip",$closure(this,"_hidetooltip"),true);
	g.append("svg:path").attr("class").string("line").attr("d").stringf($closure(this,"_path0")).style("stroke").string("#000").style("stroke-width")["float"](5).style("opacity")["float"](0.0).attr("transform").string("translate(1,1)").eachNode($closure(this,"_popinshadow"));
	g.append("svg:path").attr("class").string("line").attr("d").stringf($closure(this,"_path0")).style("stroke").string("#000").style("stroke-width")["float"](3).style("opacity")["float"](0.0).attr("transform").string("translate(1,1)").eachNode($closure(this,"_popinshadow"));
	g.append("svg:path").attr("class").string("line").attr("d").stringf($closure(this,"_path0")).attr("class").stringf(function(d,i) {
		return "item-" + i;
	}).style("opacity")["float"](0).eachNode($closure(this,"_popin"));
	layer.exit().remove();
}
rg.svg.SvgLineChart.prototype.resize = function() {
	this._x.range([0.0,this.width]);
	this._y.range([0.0,this.height]);
	this.svg.select("#" + this._cpid + " rect").attr("width")["float"](this.width).attr("height")["float"](this.height + 100);
}
rg.svg.SvgLineChart.prototype.lineInterpolator = function(interpolator) {
	this._interpolator = interpolator;
}
rg.svg.SvgLineChart.prototype.getData = function() {
	return this._data;
}
rg.svg.SvgLineChart.prototype.data = function(d) {
	this._data = d;
	this.redraw();
}
rg.svg.SvgLineChart.prototype._path0 = function(d,i) {
	var x = this._x, y = this._y;
	var line = new thx.svg.Line(function(d1,i1) {
		return x.scale(d1.x);
	},function(d1,i1) {
		return y.scale(0);
	});
	if(null != this._interpolator) line.interpolator(this._interpolator);
	return line.shape(d.values);
}
rg.svg.SvgLineChart.prototype._path = function(d,i) {
	var x = this._x, y = this._y;
	var line = new thx.svg.Line(function(d1,i1) {
		return x.scale(d1.x);
	},function(d1,i1) {
		return y.scale(d1.y);
	});
	if(null != this._interpolator) line.interpolator(this._interpolator);
	return line.shape(d.values);
}
rg.svg.SvgLineChart.prototype.updatex = function() {
	var s = this._x.scale(Date.now().getTime() - this._timedelta + this._x.getDomain()[0]);
	var layer = this.svg.selectAll("g.group").attr("transform").string("translate(-" + s + ",0)");
}
rg.svg.SvgLineChart.prototype._lineEffect = null;
rg.svg.SvgLineChart.prototype.setLineEffect = function(name) {
	this._lineEffect = name;
}
rg.svg.SvgLineChart.prototype._timedelta = null;
rg.svg.SvgLineChart.prototype._highlight = function(d,i) {
	thx.js.Dom.selectNode(d).select("path").classed().add("selected");
}
rg.svg.SvgLineChart.prototype._backtonormal = function(d,i) {
	thx.js.Dom.selectNode(d).select("path").classed().remove("selected");
}
rg.svg.SvgLineChart.prototype._showtooltip = function(d,_) {
	var mouse = thx.js.Svg.mouse(this.svg.node());
	var v = Arrays.nearest(d.values,this._x.invert(mouse[0]),function(d1) {
		return d1.x;
	});
	rg.chart.ToolTip.display(this.tooltip(d.label,v.x,v.y));
}
rg.svg.SvgLineChart.prototype._hidetooltip = function(d,i) {
	rg.chart.ToolTip.display(null);
}
rg.svg.SvgLineChart.prototype._popinshadow = function(n,i) {
	var path = thx.js.Dom.selectNodeData(n);
	if(null != this._lineEffect) path.attr("filter").string("url(#" + this._lineEffect + ")");
	path.transition().ease(this._ease).duration(null,this._duration).delay(null,150 * (i - this._created)).style("opacity")["float"](0.25).attr("d").stringf($closure(this,"_path"));
}
rg.svg.SvgLineChart.prototype._popin = function(n,i) {
	var path = thx.js.Dom.selectNodeData(n);
	if(null != this._lineEffect) path.attr("filter").string("url(#" + this._lineEffect + ")");
	path.transition().ease(this._ease).duration(null,this._duration).delay(null,150 * (i - this._created)).style("opacity")["float"](1.0).attr("d").stringf($closure(this,"_path"));
	if(i == this._data.length - 1) this._created = i;
}
rg.svg.SvgLineChart.prototype.__class__ = rg.svg.SvgLineChart;
rg.util.Periodicity = function() { }
rg.util.Periodicity.__name__ = ["rg","util","Periodicity"];
rg.util.Periodicity.isValid = function(v) {
	return Arrays.exists(rg.util.Periodicity.validPeriods,v);
}
rg.util.Periodicity.calculateBetween = function(a,b,disc) {
	if(disc == null) disc = 2;
	if(null == a || null == b) return "eternity";
	var delta = Math.abs(b.getTime() - a.getTime());
	if(delta >= DateTools.days(365 * disc)) return "year"; else if(delta >= DateTools.days(30 * disc)) return "month"; else if(delta >= DateTools.days(7 * disc)) return "week"; else if(delta >= DateTools.days(disc)) return "day"; else if(delta >= DateTools.hours(disc)) return "hour"; else return "minute";
}
rg.util.Periodicity.range = function(start,end,periodicity) {
	var step = 1000;
	start = Dates.snap(start,periodicity);
	end = Dates.snap(end,periodicity);
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
		var s = Date.fromTime(start), e = Date.fromTime(end), sy = s.getFullYear(), ey = e.getFullYear(), sm = s.getMonth();
		var result = [];
		var _g = sy;
		while(_g < ey) {
			var y = _g++;
			var sr = 0, er = 12;
			if(y == sy && y == ey) {
				sr = sy;
				er = ey;
			} else if(y == sy) sr = sy; else if(y == ey) er = ey;
			var _g1 = sr;
			while(_g1 < er) {
				var m = _g1++;
				result.push(new Date(y,m,1,0,0,0).getTime());
			}
		}
		return result;
	case "year":
		return Ints.range(Date.fromTime(start).getFullYear(),Date.fromTime(end).getFullYear(),1).map(function(d,i) {
			return new Date(d,0,1,0,0,0).getTime();
		});
	}
	return Floats.range(start,end + step,step);
}
rg.util.Periodicity.next = function(periodicity,date) {
	if(null == date) date = Date.now().getTime();
	return (function($this) {
		var $r;
		switch(periodicity) {
		case "eternity":
			$r = 0.0;
			break;
		case "minute":
			$r = date + 60000;
			break;
		case "hour":
			$r = date + 3600000;
			break;
		case "day":
			$r = date + 86400000;
			break;
		case "week":
			$r = date + 604800000;
			break;
		case "month":
			$r = (function($this) {
				var $r;
				var d = Date.fromTime(date), y = d.getFullYear(), m = d.getMonth();
				m++;
				if(m == 12) {
					m = 0;
					y++;
				}
				$r = new Date(y,m,d.getDay(),d.getHours(),d.getMinutes(),d.getSeconds()).getTime();
				return $r;
			}($this));
			break;
		case "year":
			$r = (function($this) {
				var $r;
				var d = Date.fromTime(date);
				$r = new Date(d.getFullYear() + 1,d.getMonth(),d.getDay(),d.getHours(),d.getMinutes(),d.getSeconds()).getTime();
				return $r;
			}($this));
			break;
		}
		return $r;
	}(this));
}
rg.util.Periodicity.prev = function(periodicity,date) {
	if(null == date) date = Date.now().getTime();
	return (function($this) {
		var $r;
		switch(periodicity) {
		case "eternity":
			$r = 0.0;
			break;
		case "minute":
			$r = date - 60000;
			break;
		case "hour":
			$r = date - 3600000;
			break;
		case "day":
			$r = date - 86400000;
			break;
		case "week":
			$r = date - 604800000;
			break;
		case "month":
			$r = (function($this) {
				var $r;
				var d = Date.fromTime(date), y = d.getFullYear(), m = d.getMonth();
				m--;
				if(m == -1) {
					m = 11;
					y--;
				}
				$r = new Date(y,m,d.getDay(),d.getHours(),d.getMinutes(),d.getSeconds()).getTime();
				return $r;
			}($this));
			break;
		case "year":
			$r = (function($this) {
				var $r;
				var d = Date.fromTime(date);
				$r = new Date(d.getFullYear() - 1,d.getMonth(),d.getDay(),d.getHours(),d.getMinutes(),d.getSeconds()).getTime();
				return $r;
			}($this));
			break;
		}
		return $r;
	}(this));
}
rg.util.Periodicity.minForPeriodicityInSeries = function(arr) {
	return Arrays.floatMin(arr,function(d) {
		return Arrays.floatMin(d.data,function(d1) {
			return d1[1];
		});
	});
}
rg.util.Periodicity.maxForPeriodicityInSeries = function(arr) {
	return Arrays.floatMax(arr,function(d) {
		return Arrays.floatMax(d.data,function(d1) {
			return d1[1];
		});
	});
}
rg.util.Periodicity.minForPeriodicityInSeriesObject = function(arr,periodicity) {
	return Arrays.floatMin(arr,function(d) {
		var o = Reflect.field(d,periodicity);
		return Arrays.floatMin(Reflect.fields(o),function(d1) {
			return Std.parseFloat(d1);
		});
	});
}
rg.util.Periodicity.maxForPeriodicityInSeriesObject = function(arr,periodicity) {
	return Arrays.floatMax(arr,function(d) {
		var o = Reflect.field(d,periodicity);
		return Arrays.floatMax(Reflect.fields(o),function(d1) {
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
	case "minute":case "hour":
		return thx.culture.FormatDate.timeShort(Date.fromTime(v));
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
rg.util.Periodicity.prototype.__class__ = rg.util.Periodicity;
thx.svg.Area = function(x,y0,y1,interpolator) {
	if( x === $_ ) return;
	this._x = x;
	this._y0 = y0;
	this._y1 = y1;
	this._interpolator = interpolator;
}
thx.svg.Area.__name__ = ["thx","svg","Area"];
thx.svg.Area.pointArray = function(interpolator) {
	return new thx.svg.Area(function(d,_) {
		return d[0];
	},function(d,_) {
		return d[1];
	},function(d,_) {
		return d[2];
	},interpolator);
}
thx.svg.Area.pointObject = function(interpolator) {
	return new thx.svg.Area(function(d,_) {
		return d.x;
	},function(d,_) {
		return d.y0;
	},function(d,_) {
		return d.y1;
	},interpolator);
}
thx.svg.Area.pointArray2 = function(interpolator) {
	return new thx.svg.Area(function(d,_) {
		return d[0];
	},function(_,_1) {
		return 0.0;
	},function(d,_) {
		return d[1];
	},interpolator);
}
thx.svg.Area.pointObjectXY = function(interpolator) {
	return new thx.svg.Area(function(d,_) {
		return d.x;
	},function(_,_1) {
		return 0.0;
	},function(d,_) {
		return d.y;
	},interpolator);
}
thx.svg.Area.prototype._x = null;
thx.svg.Area.prototype._y0 = null;
thx.svg.Area.prototype._y1 = null;
thx.svg.Area.prototype._interpolator = null;
thx.svg.Area.prototype.shape = function(data,i) {
	var second = thx.svg.LineInternals.linePoints(data,this._x,this._y0);
	second.reverse();
	return data.length < 1?null:"M" + thx.svg.LineInternals.interpolatePoints(thx.svg.LineInternals.linePoints(data,this._x,this._y1),this._interpolator) + "L" + thx.svg.LineInternals.interpolatePoints(second,this._interpolator) + "Z";
}
thx.svg.Area.prototype.getInterpolator = function() {
	return this._interpolator;
}
thx.svg.Area.prototype.interpolator = function(type) {
	this._interpolator = type;
	return this;
}
thx.svg.Area.prototype.getX = function() {
	return this._x;
}
thx.svg.Area.prototype.x = function(v) {
	this._x = v;
	return this;
}
thx.svg.Area.prototype.getY0 = function() {
	return this._y0;
}
thx.svg.Area.prototype.y0 = function(v) {
	this._y0 = v;
	return this;
}
thx.svg.Area.prototype.getY1 = function() {
	return this._y1;
}
thx.svg.Area.prototype.y1 = function(v) {
	this._y1 = v;
	return this;
}
thx.svg.Area.prototype.__class__ = thx.svg.Area;
$_ = {}
js.Boot.__res = {}
js.Boot.__init();
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
thx.cultures.EnUS.getCulture();
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
	var s = (window.Sizzle || jQuery.find || $.find);
	thx.js.Sizzle = s;
	thx.js.Sizzle.select = s;
}
thx.languages.En.getLanguage();
{
	Math.__name__ = ["Math"];
	Math.NaN = Number["NaN"];
	Math.NEGATIVE_INFINITY = Number["NEGATIVE_INFINITY"];
	Math.POSITIVE_INFINITY = Number["POSITIVE_INFINITY"];
	Math.isFinite = function(i) {
		return isFinite(i);
	};
	Math.isNaN = function(i) {
		return isNaN(i);
	};
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
	d.prototype.__class__ = d;
	d.__name__ = ["Date"];
}
{
	haxe.Firebug.redirectTraces();
	var r = window.ReportGrid;
	r.timeSeries = rg.Viz.line;
	r.totals = rg.Viz.pie;
	r.leaderBoard = rg.Viz.leaderBoard;
	r.pivotTable = rg.Viz.pivot;
	r.barChart = rg.Viz.bar;
	r.stackChart = rg.Viz.stack;
	r.scatterGraph = rg.Viz.scatter;
	r.funnelChart = rg.Viz.funnel;
	r.heatGrid = rg.Viz.heatgrid;
	r.streamGraph = rg.Viz.stream;
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
var rg = rg || {}; rg.js = rg.js || {}; rg.js.ReportGrid = window.ReportGrid;
window.requestAnimationFrame = window.requestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.oRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function(callback) { setTimeout(callback, 1000 / 60); } ;
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
rg.svg.SvgPanel.transitionTime = 500;
thx.js.AccessAttribute.refloat = new EReg("(\\d+(?:\\.\\d+))","");
rg.svg.effects.DropShadow.AR = 3.0 / 4;
js.Lib.onerror = null;
thx.js.Dom.doc = (function() {
	var g = new thx.js.Group([js.Lib.document]), gs = thx.js.Selection.create([g]);
	g.parentNode = gs.parentNode = js.Lib.document.documentElement;
	return gs;
})();
thx.js.Dom.selectionEngine = new thx.js.SizzleEngine();
rg.util.RGStrings.range = new EReg("(\\d+(?:\\.\\d+)?|\\.\\d+)?-(\\d+(?:\\.\\d+|\\.\\d+)?)?","");
thx.math.Const.TWO_PI = 6.283185307179586477;
thx.math.Const.PI = 3.141592653589793238;
thx.math.Const.HALF_PI = 1.570796326794896619;
thx.math.Const.TO_DEGREE = 57.29577951308232088;
thx.math.Const.TO_RADIAN = 0.01745329251994329577;
thx.math.Const.LN10 = 2.302585092994046;
thx.math.scale.Linears._default_color = new thx.color.Hsl(0,0,0);
thx.xml.Namespace.prefix = (function() {
	var h = new Hash();
	h.set("svg","http://www.w3.org/2000/svg");
	h.set("xhtml","http://www.w3.org/1999/xhtml");
	h.set("xlink","http://www.w3.org/1999/xlink");
	h.set("xml","http://www.w3.org/XML/1998/namespace");
	h.set("xmlns","http://www.w3.org/2000/xmlns/");
	return h;
})();
rg.html.HtmlPivotTable.defaultStartColor = new thx.color.Hsl(210,1,1);
rg.html.HtmlPivotTable.defaultEndColor = new thx.color.Hsl(210,1,0.5);
Ints._reparse = new EReg("^([+-])?\\d+$","");
rg.svg.SvgSpace._filterid = 0;
thx.js.AccessStyle.refloat = new EReg("(\\d+(?:\\.\\d+)?)","");
Floats._reparse = new EReg("^(\\+|-)?\\d+(\\.\\d+)?(e-?\\d+)?$","");
rg.svg.SvgScaleTick.defaultTickLength = 6;
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
thx.math.scale.LinearTime.valids = ["minute","hour","day","week","month","year"];
thx.text.ERegs._escapePattern = new EReg("[*+?|{[()^$.# \\\\]","");
thx.svg.LineInternals.arcOffset = -Math.PI / 2;
thx.svg.LineInternals.arcMax = 2 * Math.PI - 1e-6;
thx.svg.LineInternals._lineBasisBezier1 = [0,2 / 3,1 / 3,0];
thx.svg.LineInternals._lineBasisBezier2 = [0,1 / 3,2 / 3,0];
thx.svg.LineInternals._lineBasisBezier3 = [0,1 / 6,2 / 3,1 / 6];
rg.svg.SvgStreamGraph.defaultClipPadding = 3;
rg.svg.SvgStreamGraph._pathid = 0;
Dates._reparse = new EReg("^\\d{4}-\\d\\d-\\d\\d(( |T)\\d\\d:\\d\\d(:\\d\\d(\\.\\d{1,3})?)?)?Z?$","");
rg.svg.SvgScaleLabel.defaultTexttextHeight = 12;
thx.js.BaseTransition._id = 0;
thx.js.BaseTransition._inheritid = 0;
thx.svg.Symbol.sqrt3 = Math.sqrt(3);
thx.svg.Symbol.tan30 = Math.tan(30 * Math.PI / 180);
rg.Viz.executor = new rg.query.js.ReportGridExecutor();
thx.js.Svg._usepage = new EReg("WebKit","").match(js.Lib.window.navigator.userAgent);
rg.svg.SvgStackChart._pathid = 0;
haxe.Timer.arr = new Array();
rg.svg.SvgBarChart._pathid = 0;
Objects._reCheckKeyIsColor = new EReg("color\\b|\\bbackground\\b|\\bstroke\\b|\\bfill\\b","");
thx.js.Timer.timeout = 0;
thx.js.Timer.queue = null;
thx.js.Timer.interval = 0;
thx.js.Timer._step = thx.js.Timer.step;
thx.color.Colors._reParse = new EReg("^\\s*(?:(hsl|rgb|rgba|cmyk)\\(([^)]+)\\))|(?:(?:0x|#)([a-f0-9]{3,6}))\\s*$","i");
DateTools.DAYS_OF_MONTH = [31,28,31,30,31,30,31,31,30,31,30,31];
rg.svg.SvgLineChart._pathid = 0;
rg.util.Periodicity.validPeriods = ["minute","hour","day","week","month","year","eternity"];
