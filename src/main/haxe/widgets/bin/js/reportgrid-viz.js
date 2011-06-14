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
Strings.ascending = function(a,b) {
	return a < b?-1:a > b?1:0;
}
Strings.descending = function(a,b) {
	return a > b?-1:a < b?1:0;
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
	return new thx.color.Rgb(Ints.interpolate(t * color.red,0,255,equation),Ints.interpolate(t * color.green,0,255,equation),Ints.interpolate(t * color.blue,0,255,equation));
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
			if(c == String) return Strings.formatOne(v,param,params,culture); else if(c == Array) return Arrays.format(v,param,params,culture); else if(c == Date) return Dates.format(v,param,params,culture); else return Std.string(v);
			break;
		default:
			return (function($this) {
				var $r;
				throw new thx.error.Error("Unsupported type format: {0}",null,Type["typeof"](v),{ fileName : "Dynamics.hx", lineNumber : 40, className : "Dynamics", methodName : "formatf"});
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
	if(!((Std["is"](a,Float) || Std["is"](a,Int)) && (Std["is"](b,Float) || Std["is"](b,Int))) && !Type.enumEq(ta,tb)) throw new thx.error.Error("arguments a ({0}) and b ({0}) have different types",[a,b],null,{ fileName : "Dynamics.hx", lineNumber : 55, className : "Dynamics", methodName : "interpolatef"});
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
			throw new thx.error.Error("cannot interpolate on instances of {0}",null,name,{ fileName : "Dynamics.hx", lineNumber : 73, className : "Dynamics", methodName : "interpolatef"});
		}
		break;
	default:
		throw new thx.error.Error("cannot interpolate on functions/enums/unknown",null,null,{ fileName : "Dynamics.hx", lineNumber : 75, className : "Dynamics", methodName : "interpolatef"});
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
		throw new thx.error.Error("Unable to compare values: {0} and {1}",[a,b],null,{ fileName : "Dynamics.hx", lineNumber : 295, className : "Dynamics", methodName : "same"});
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
Bools.prototype.__class__ = Bools;
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
	var filter = container.append("svg:filter").attr("id").string(id);
	filter.append("svg:feGaussianBlur").attr("in").string("SourceAlpha").attr("stdDeviation")["float"](this.blur).attr("result").string("dsblur");
	filter.append("svg:feColorMatrix").attr("in").string("dsblur").attr("type").string("matrix").attr("values").string("1 0 0 0 0 " + "0 1 0 0 0 " + "0 0 1 0 0 " + "0 0 0 " + this.opacity + " 0").attr("result").string("dscolor");
	filter.append("svg:feOffset").attr("in").string("dscolor").attr("dx")["float"](this.dx).attr("dy")["float"](this.dy).attr("result").string("dsoffset");
	var merge = filter.append("svg:feMerge");
	merge.append("svg:feMergeNode").attr("in").string("dsoffset");
	merge.append("svg:feMergeNode").attr("in").string("SourceGraphic");
}
rg.svg.effects.DropShadow.prototype.__class__ = rg.svg.effects.DropShadow;
rg.svg.effects.DropShadow.__interfaces__ = [rg.svg.ISvgEffect];
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
		throw new thx.error.AbstractMethod({ fileName : "Selection.hx", lineNumber : 524, className : "thx.js.BaseSelection", methodName : "createSelection"});
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
if(!rg.query) rg.query = {}
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
	var v = color.lightness / t;
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
if(!thx.math) thx.math = {}
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
		if(!rg.util.Periodicity.isValid(v)) throw new thx.error.Error("invalid periodicity '{0}'",null,v,{ fileName : "TimeQuery.hx", lineNumber : 85, className : "rg.query.TimeQuery", methodName : "setPeriodicity"});
	}
	if(v != this.periodicity) this.onChangePeriodicity.dispatch(this.periodicity = v);
	return this.periodicity;
}
rg.query.TimeQuery.prototype.__class__ = rg.query.TimeQuery;
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
if(!thx.svg) thx.svg = {}
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
thx.util.Message.prototype.translate = function(translator) {
	return Strings.format(translator(this.message),this.params);
}
thx.util.Message.prototype.__class__ = thx.util.Message;
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
rg.query.QueryTimerUpdate = function(query,elapse) {
	if( query === $_ ) return;
	if(elapse == null) elapse = 5000;
	this.query = query;
	this.elapse = elapse;
	this.paused = true;
	this.resume();
}
rg.query.QueryTimerUpdate.__name__ = ["rg","query","QueryTimerUpdate"];
rg.query.QueryTimerUpdate.prototype.elapse = null;
rg.query.QueryTimerUpdate.prototype.paused = null;
rg.query.QueryTimerUpdate.prototype.query = null;
rg.query.QueryTimerUpdate.prototype.timer = null;
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
	return this.dataf(function(d,i) {
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
	arr.sort(null == f?Reflect.compare:f);
	return arr;
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
	var t = arr.copy();
	t.reverse();
	return Arrays.firstf(arr,f);
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
Arrays.prototype.__class__ = Arrays;
rg.query.Query = function(executor) {
	if( executor === $_ ) return;
	this.data = null;
	this.onLoading = new hxevents.Notifier();
	this.onComplete = new hxevents.Notifier();
	this.onChange = new hxevents.Dispatcher();
	this.onData = new hxevents.Dispatcher();
	this.onError = new hxevents.Dispatcher();
	this.executor = executor;
	this.time = new rg.query.TimeQuery();
}
rg.query.Query.__name__ = ["rg","query","Query"];
rg.query.Query.normalizeName = function(s) {
	if(s == null) return null;
	if("." == s.substr(0,1)) return s.substr(1); else return s;
}
rg.query.Query.prototype.data = null;
rg.query.Query.prototype.time = null;
rg.query.Query.prototype._data = null;
rg.query.Query.prototype.onLoading = null;
rg.query.Query.prototype.onComplete = null;
rg.query.Query.prototype.onChange = null;
rg.query.Query.prototype.onData = null;
rg.query.Query.prototype.onError = null;
rg.query.Query.prototype.executor = null;
rg.query.Query.prototype.close = function() {
	this.onLoading.clear();
	this.onError.clear();
	this.onData.clear();
	this.onChange.clear();
	this.onComplete.clear();
	this.time.close();
}
rg.query.Query.prototype.executeLoad = function(success,error) {
	throw new thx.error.AbstractMethod({ fileName : "Query.hx", lineNumber : 51, className : "rg.query.Query", methodName : "executeLoad"});
}
rg.query.Query.prototype.load = function() {
	this.time.update();
	this.onLoading.dispatch();
	this.executeLoad($closure(this,"_success"),$closure(this,"_error"));
}
rg.query.Query.prototype.transform = function(v) {
	return v;
}
rg.query.Query.prototype._success = function(v) {
	if(!Dynamics.same(v,this._data)) this.onChange.dispatch(this.data = this.transform(this._data = v));
	this.onData.dispatch(this.data);
	this.onComplete.dispatch();
}
rg.query.Query.prototype._error = function(v) {
	this.onError.dispatch(v);
	this.onComplete.dispatch();
}
rg.query.Query.prototype.__class__ = rg.query.Query;
rg.query.QueryPath = function(executor,path) {
	if( executor === $_ ) return;
	rg.query.Query.call(this,executor);
	this.setPath(path);
}
rg.query.QueryPath.__name__ = ["rg","query","QueryPath"];
rg.query.QueryPath.__super__ = rg.query.Query;
for(var k in rg.query.Query.prototype ) rg.query.QueryPath.prototype[k] = rg.query.Query.prototype[k];
rg.query.QueryPath.prototype.path = null;
rg.query.QueryPath.prototype.setPath = function(v) {
	if(null == v || 0 == v.length) throw new thx.error.NullArgument("v",{ fileName : "Query.hx", lineNumber : 107, className : "rg.query.QueryPath", methodName : "setPath"}); else null;
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
	var _success = function(p,v) {
		result.push({ label : p, value : v});
		if(++count == total) success(result);
	};
	var _g = 0, _g1 = this.events;
	while(_g < _g1.length) {
		var event = _g1[_g];
		++_g;
		this.executor.propertyCount(this.path,{ property : event},(function(f,a1) {
			return function(a2) {
				return f(a1,a2);
			};
		})(_success,event),error);
	}
}
rg.query.QueryEventsCount.prototype.__class__ = rg.query.QueryEventsCount;
if(!thx.math.scale) thx.math.scale = {}
thx.math.scale.NumericScale = function(p) {
	if( p === $_ ) return;
	this._domain = [0.0,1.0];
	this._range = [0.0,1.0];
	this.kx = 1;
	this.ky = 1;
	this.f = Floats.interpolatef;
	this._clamp = false;
	this._clampmin = 0.0;
	this._clampmax = 1.0;
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
thx.math.scale.NumericScale.prototype.kx = null;
thx.math.scale.NumericScale.prototype.ky = null;
thx.math.scale.NumericScale.prototype.f = null;
thx.math.scale.NumericScale.prototype._clamp = null;
thx.math.scale.NumericScale.prototype._clampmin = null;
thx.math.scale.NumericScale.prototype._clampmax = null;
thx.math.scale.NumericScale.prototype._output = null;
thx.math.scale.NumericScale.prototype._input = null;
thx.math.scale.NumericScale.prototype.rescale = function() {
	var linear = this._domain.length == 2?thx.math.scale.NumericScale.scaleBilinear:thx.math.scale.NumericScale.scalePolylinear, uninterpolate = this._clamp?Floats.uninterpolateClampf(this._clampmin,this._clampmax):Floats.uninterpolatef;
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
thx.math.scale.NumericScale.prototype.getClampMin = function() {
	return this._clampmin;
}
thx.math.scale.NumericScale.prototype.clampMin = function(v) {
	this._clampmin = v;
	return this.rescale();
}
thx.math.scale.NumericScale.prototype.getClampMax = function() {
	return this._clampmax;
}
thx.math.scale.NumericScale.prototype.clampMax = function(v) {
	this._clampmax = v;
	return this.rescale();
}
thx.math.scale.NumericScale.prototype.ticks = function() {
	return (function($this) {
		var $r;
		throw new thx.error.AbstractMethod({ fileName : "NumericScale.hx", lineNumber : 107, className : "thx.math.scale.NumericScale", methodName : "ticks"});
		return $r;
	}(this));
}
thx.math.scale.NumericScale.prototype.tickFormat = function(v,i) {
	return (function($this) {
		var $r;
		throw new thx.error.AbstractMethod({ fileName : "NumericScale.hx", lineNumber : 112, className : "thx.math.scale.NumericScale", methodName : "tickFormat"});
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
Ints.ascending = function(a,b) {
	return a < b?-1:a > b?1:0;
}
Ints.descending = function(a,b) {
	return a > b?-1:a < b?1:0;
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
if(!rg.pivottable) rg.pivottable = {}
rg.pivottable.QueryProperty = { __ename__ : ["rg","pivottable","QueryProperty"], __constructs__ : ["ValueProperty","TimeProperty","EmptyProperty"] }
rg.pivottable.QueryProperty.ValueProperty = function(name,top,limit) { var $x = ["ValueProperty",0,name,top,limit]; $x.__enum__ = rg.pivottable.QueryProperty; $x.toString = $estr; return $x; }
rg.pivottable.QueryProperty.TimeProperty = function(periodicity,top) { var $x = ["TimeProperty",1,periodicity,top]; $x.__enum__ = rg.pivottable.QueryProperty; $x.toString = $estr; return $x; }
rg.pivottable.QueryProperty.EmptyProperty = ["EmptyProperty",2];
rg.pivottable.QueryProperty.EmptyProperty.toString = $estr;
rg.pivottable.QueryProperty.EmptyProperty.__enum__ = rg.pivottable.QueryProperty;
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
Floats.ascending = function(a,b) {
	return a < b?-1:a > b?1:0;
}
Floats.descending = function(a,b) {
	return a > b?-1:a < b?1:0;
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
			throw new thx.error.Error("Unsupported number format: {0}",null,format,{ fileName : "Floats.hx", lineNumber : 136, className : "Floats", methodName : "formatf"});
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
Floats.uninterpolateClamp = function(a,b) {
	b = 1 / (b - a);
	return function(x) {
		return Floats.clamp((x - a) * b,0.0,1.0);
	};
}
Floats.uninterpolateClampf = function(min,max) {
	return function(a,b) {
		b = 1 / (b - a);
		return function(x) {
			return Floats.clamp((x - a) * b,min,max);
		};
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
	this.executor.children(this.path,{ type : "property"},success,error);
}
rg.query.QueryEventNames.prototype.__class__ = rg.query.QueryEventNames;
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
rg.layout.Disposition = { __ename__ : ["rg","layout","Disposition"], __constructs__ : ["Fixed","Variable","Fill","Floating"] }
rg.layout.Disposition.Fixed = function(before,after,size) { var $x = ["Fixed",0,before,after,size]; $x.__enum__ = rg.layout.Disposition; $x.toString = $estr; return $x; }
rg.layout.Disposition.Variable = function(before,after,percent,min,max) { var $x = ["Variable",1,before,after,percent,min,max]; $x.__enum__ = rg.layout.Disposition; $x.toString = $estr; return $x; }
rg.layout.Disposition.Fill = function(before,after,min,max) { var $x = ["Fill",2,before,after,min,max]; $x.__enum__ = rg.layout.Disposition; $x.toString = $estr; return $x; }
rg.layout.Disposition.Floating = function(x,y,width,height) { var $x = ["Floating",3,x,y,width,height]; $x.__enum__ = rg.layout.Disposition; $x.toString = $estr; return $x; }
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
		return "group group-" + i;
	}).attr("transform").string("translate(" + (this._padding + this._r) + "," + (this._padding + this._r) + ")");
	arcs.onNode("mouseover.animation",$closure(this,"_highlight")).onNode("mouseout.animation",$closure(this,"_backtonormal"));
	arcs.on("mousemove.tooltip",$closure(this,"_showtooltip")).on("mouseout.tooltip",$closure(this,"_hidetooltip"));
	arcs.append("svg:path").attr("d").stringf($closure(this._startarc,"shape")).eachNode($closure(this,"_arcinp"));
	arcs.append("svg:text").attr("transform").stringf($closure(this,"transformStartLabel")).attr("dy").string(".35em").attr("text-anchor").string("middle").attr("display").stringf(function(d,i) {
		return d.value > .15?null:"none";
	}).text().stringf($closure(this,"_label")).style("opacity")["float"](0).eachNode($closure(this,"_arcint"));
}
rg.svg.SvgPieChart.prototype._arcinp = function(n,i) {
	thx.js.Dom.selectNodeData(n).transition().ease(this._ease).duration(null,this._duration).delay(null,150 * (i - this._created)).attr("d").stringf($closure(this._arc,"shape"));
}
rg.svg.SvgPieChart.prototype._arcint = function(n,i) {
	thx.js.Dom.selectNodeData(n).transition().ease(this._ease).duration(null,this._duration).delay(null,150 * (i - this._created)).style("opacity")["float"](1).attr("transform").stringf($closure(this,"transformLabel"));
	if(i == this._data.length - 1) this._created = i;
}
rg.svg.SvgPieChart.prototype._highlight = function(d,i) {
	var slice = thx.js.Dom.selectNodeData(d).select("path");
	slice.transition().ease(this._ease).duration(null,this._duration).attr("d").stringf($closure(this._bigarc,"shape"));
}
rg.svg.SvgPieChart.prototype._backtonormal = function(d,i) {
	var slice = thx.js.Dom.selectNodeData(d).select("path");
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
Types.sameAs = function(a,b) {
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
Types.prototype.__class__ = Types;
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
hxevents.EventException = { __ename__ : ["hxevents","EventException"], __constructs__ : ["StopPropagation"] }
hxevents.EventException.StopPropagation = ["StopPropagation",0];
hxevents.EventException.StopPropagation.toString = $estr;
hxevents.EventException.StopPropagation.__enum__ = hxevents.EventException;
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
	var year = 0, month = 0, day = 0;
	if(thx.date.DateParser.dateexp.match(s)) {
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
	} else throw new thx.error.Error("failed to parse time for '{0}'",null,s,{ fileName : "DateParser.hx", lineNumber : 400, className : "thx.date.DateParser", methodName : "parseTime"});
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
rg.pivottable.PivotTable = function(container) {
	if( container === $_ ) return;
	this.id = "rg-pivottable-" + ++rg.pivottable.PivotTable.nextid;
	this.container = container;
	this.start = null;
	this.end = null;
	this.path = null;
	this.setAvailableProperties([]);
	this.queryProperties = [];
	this.periodicity = "day";
}
rg.pivottable.PivotTable.__name__ = ["rg","pivottable","PivotTable"];
rg.pivottable.PivotTable.formatTimef = function(p) {
	return (function($this) {
		var $r;
		switch(p) {
		case "minute":case "hour":
			$r = function(v) {
				return thx.culture.FormatDate.timeShort(Date.fromTime(v));
			};
			break;
		case "day":
			$r = function(v) {
				return thx.culture.FormatDate.dateShort(Date.fromTime(v));
			};
			break;
		case "week":
			$r = function(v) {
				return thx.culture.FormatDate.monthDay(Date.fromTime(v));
			};
			break;
		case "month":
			$r = function(v) {
				return thx.culture.FormatDate.monthNameShort(Date.fromTime(v));
			};
			break;
		case "year":
			$r = function(v) {
				return "" + Date.fromTime(v).getFullYear();
			};
			break;
		}
		return $r;
	}(this));
}
rg.pivottable.PivotTable.buildContext = function(id) {
	var b = "<div class=\"rg\" class=\"pivot-table-container\">";
	b += "<form id=\"" + id + "\">";
	b += "<div class=\"controls\">";
	b += "<div class=\"property-controls\">";
	b += "</div>";
	b += "<div class=\"time-controls\" style=\"display:none\">";
	b += "start <input placeholder=\"YYYY-MM-DD\" type=\"datetime-local\" name=\"start-time\" class=\"start-time\" disabled/>";
	b += " ";
	b += "end <input placeholder=\"YYYY-MM-DD\" type=\"datetime-local\" name=\"end-time\" class=\"end-time\" disabled/>";
	b += " ";
	b += "<select name=\"periodicity\" class=\"periodicity\" disabled><option>minute</option><option>hour</option><option selected>day</option><option>week</option><option>month</option><option>year</option></select>";
	b += "</div>";
	b += "</div>";
	b += "</form>";
	b += "<div class=\"pivot-table\"><table></table></div>";
	b += "</div>";
	return b;
}
rg.pivottable.PivotTable.prototype.container = null;
rg.pivottable.PivotTable.prototype.id = null;
rg.pivottable.PivotTable.prototype.start = null;
rg.pivottable.PivotTable.prototype.end = null;
rg.pivottable.PivotTable.prototype.path = null;
rg.pivottable.PivotTable.prototype.event = null;
rg.pivottable.PivotTable.prototype.availableProperties = null;
rg.pivottable.PivotTable.prototype.queryProperties = null;
rg.pivottable.PivotTable.prototype.usedProperties = null;
rg.pivottable.PivotTable.prototype.periodicity = null;
rg.pivottable.PivotTable.prototype.init = function() {
	this._init();
}
rg.pivottable.PivotTable.prototype.query = function() {
	var event = this.event;
	var properties = Arrays.filter(this.queryProperties,function(d) {
		return (function($this) {
			var $r;
			switch( (d)[1] ) {
			case 0:
				$r = true;
				break;
			default:
				$r = false;
			}
			return $r;
		}(this));
	}).map(function(d,_) {
		var $e = (d);
		switch( $e[1] ) {
		case 0:
			var limit = $e[4], top = $e[3], name = $e[2];
			return { property : "." + event + name, limit : limit, order : top?"descending":"ascending"};
		default:
			return (function($this) {
				var $r;
				throw new thx.error.Error("invalid property option {0}",null,d,{ fileName : "PivotTable.hx", lineNumber : 77, className : "rg.pivottable.PivotTable", methodName : "query"});
				return $r;
			}(this));
		}
	});
	var hastime = this.queryHasTimeProperty();
	if(properties.length == 0 && !hastime) return;
	rg.js.ReportGrid.intersect(this.path,{ start : !hastime || null == this.start?0:this.start.getTime(), end : !hastime || null == this.end?0:this.end.getTime(), properties : properties, periodicity : hastime?this.periodicity:"eternity"},$closure(this,"intersect"));
}
rg.pivottable.PivotTable.prototype.queryHasTimeProperty = function() {
	return Iterators.any(this.queryProperties.iterator(),function(d) {
		return (function($this) {
			var $r;
			switch( (d)[1] ) {
			case 1:
				$r = true;
				break;
			default:
				$r = false;
			}
			return $r;
		}(this));
	});
}
rg.pivottable.PivotTable.prototype.timePropertyPosition = function() {
	var i = 0;
	while(i < this.queryProperties.length) {
		switch( (this.queryProperties[i])[1] ) {
		case 1:
			return i;
		case 0:
			i++;
			break;
		case 2:
			break;
		}
	}
	return i;
}
rg.pivottable.PivotTable.prototype.intersect = function(v) {
	var data = this.normalizeData(v), table = this.container.select("table");
	table.html().string("");
	var thead = table.append("thead");
	var _bg = thx.color.Hsl.interpolatef(rg.pivottable.PivotTable.startColor,rg.pivottable.PivotTable.endColor), delta = data.max - data.min, bg = function(t) {
		return _bg((t - data.min) / delta);
	};
	var h = thead.append("tr");
	var _g1 = 0, _g = data.rows[0].headers.length;
	while(_g1 < _g) {
		var i = _g1++;
		h.append("th").attr("class").string("filler");
	}
	h.append("th").attr("class").string("columns-header").attr("colspan")["float"](data.columns.count).text().string(Strings.rtrim(Strings.ltrim(data.columns.header,"."),"."));
	h.append("th").attr("class").string("total");
	h = thead.append("tr");
	var q = this.queryProperties.copy().splice(1,this.queryProperties.length - 1);
	var properties = Arrays.filter(q,function(d) {
		return (function($this) {
			var $r;
			switch( (d)[1] ) {
			case 2:
				$r = false;
				break;
			default:
				$r = true;
			}
			return $r;
		}(this));
	}).map(function(d,i) {
		return (function($this) {
			var $r;
			var $e = (d);
			switch( $e[1] ) {
			case 0:
				var n = $e[2];
				$r = Strings.ltrim(n,".");
				break;
			case 1:
				var p = $e[2];
				$r = p;
				break;
			default:
				$r = "";
			}
			return $r;
		}(this));
	});
	var _g1 = 0, _g = properties.length;
	while(_g1 < _g) {
		var i = _g1++;
		h.append("th").attr("class").string("filler columns-header").text().string(properties[i]);
	}
	var _g = 0, _g1 = data.columns.values;
	while(_g < _g1.length) {
		var v1 = _g1[_g];
		++_g;
		h.append("th").attr("class").string("column-header").text().string(Strings.rtrim(Strings.ltrim(v1,"\""),"\""));
	}
	h.append("th").attr("class").string("column-header total").text().string("total");
	var tbody = table.append("tbody");
	var _g = 0, _g1 = data.rows;
	while(_g < _g1.length) {
		var row = _g1[_g];
		++_g;
		var tr = tbody.append("tr");
		var _g2 = 0, _g3 = row.headers;
		while(_g2 < _g3.length) {
			var header = _g3[_g2];
			++_g2;
			var th = tr.append("th").text().string(Strings.rtrim(Strings.ltrim(header,"\""),"\""));
			if(header == "") th.classed().add("empty");
		}
		var _g2 = 0, _g3 = row.values;
		while(_g2 < _g3.length) {
			var value = _g3[_g2];
			++_g2;
			var bgcolor = bg(value);
			var color = thx.color.Rgb.contrastBW(bgcolor);
			tr.append("td").text().string(Ints.format(value)).style("background-color").color(bgcolor).style("color").color(color);
		}
		tr.append("td").attr("class").string("total").text().string(Ints.format(row.total));
	}
	var tr = tbody.append("tr");
	var _g1 = 0, _g = properties.length - 1;
	while(_g1 < _g) {
		var i = _g1++;
		tr.append("th").attr("class").string("empty");
	}
	if(data.rows.length > 1) {
		tr.append("th").attr("class").string("total").text().string("total");
		var _g = 0, _g1 = data.columns.totals;
		while(_g < _g1.length) {
			var total = _g1[_g];
			++_g;
			tr.append("td").attr("class").string("total").text().string(Ints.format(total));
		}
		tr.append("td").attr("class").string("total").text().string(Ints.format(data.total));
	}
}
rg.pivottable.PivotTable.prototype.normalizeData = function(src) {
	var data = { columns : { header : null, values : [], count : 0, totals : [], averages : []}, rows : [], max : -1, min : -1, total : 0};
	var first = Arrays.firstf(this.queryProperties,function(d) {
		return !Type.enumEq(d,rg.pivottable.QueryProperty.EmptyProperty);
	});
	data.columns.header = (function($this) {
		var $r;
		var $e = (first);
		switch( $e[1] ) {
		case 0:
			var n = $e[2];
			$r = n;
			break;
		case 1:
			var p = $e[2];
			$r = "time: " + p;
			break;
		case 2:
			$r = "";
			break;
		}
		return $r;
	}(this));
	var fields = data.columns.values = Reflect.fields(src);
	data.columns.count = fields.length;
	data.columns.totals = fields.map(function(_,_1) {
		return 0;
	});
	var arr = [];
	var rows = -1;
	var _g = 0;
	while(_g < fields.length) {
		var field = fields[_g];
		++_g;
		var v = Reflect.field(src,field);
		var f = Objects.flatten(v);
		if(rows < 0) rows = f.length;
		arr = arr.concat(f);
	}
	var count = data.columns.count;
	var _g = 0;
	while(_g < rows) {
		var i = _g++;
		var row = { headers : arr[i].fields, values : [], count : 0, total : 0, average : 0.0};
		var _g1 = 0;
		while(_g1 < count) {
			var j = _g1++;
			var item = arr[i + j * rows], v = null == item?0.0:item.value;
			row.values.push(v);
			row.count++;
			row.total += v;
			data.total += v;
			if(v < data.min || data.min < 0) data.min = v;
			if(v > data.max) data.max = v;
			data.columns.totals[j] += v;
		}
		row.average = row.total / row.count;
		data.rows.push(row);
	}
	var len = data.rows[0].headers.length;
	var hastime = this.queryHasTimeProperty();
	if(!hastime) {
		var _g = 0, _g1 = data.rows;
		while(_g < _g1.length) {
			var row = _g1[_g];
			++_g;
			row.headers.pop();
			row.headers.pop();
		}
		Arrays.order(data.rows,function(a,b) {
			var ah = a.headers, bh = b.headers, c = Reflect.compare(ah[0],bh[0]), i = 1;
			while(c == 0 && i < ah.length) c = Reflect.compare(ah[i],bh[i++]);
			return c;
		});
	} else {
		var pos = this.timePropertyPosition() - 1;
		var per = data.rows[0].headers[len - 2];
		var time;
		var stime;
		var f = rg.pivottable.PivotTable.formatTimef(per);
		var _g = 0, _g1 = data.rows;
		while(_g < _g1.length) {
			var row = _g1[_g];
			++_g;
			stime = row.headers[len - 1];
			time = f(Std.parseFloat(stime));
			row.headers.pop();
			row.headers.pop();
			row.headers.insert(pos,stime);
		}
		Arrays.order(data.rows,function(a,b) {
			var ah = a.headers, bh = b.headers, c = Reflect.compare(ah[0],bh[0]), i = 1;
			while(c == 0 && i < ah.length) c = Reflect.compare(ah[i],bh[i++]);
			return c;
		});
		var _g = 0, _g1 = data.rows;
		while(_g < _g1.length) {
			var row = _g1[_g];
			++_g;
			row.headers[pos] = f(Std.parseFloat(row.headers[pos]));
		}
	}
	var last = Ints.range(len).map(function(_,_1) {
		return null;
	});
	len = hastime?len - 1:len - 2;
	var _g = 0, _g1 = data.rows;
	while(_g < _g1.length) {
		var row = _g1[_g];
		++_g;
		var _g2 = 0;
		while(_g2 < len) {
			var i = _g2++;
			if(last[i] != row.headers[i]) last[i] = row.headers[i]; else row.headers[i] = "";
		}
	}
	var _g1 = 0, _g = fields.length;
	while(_g1 < _g) {
		var i = _g1++;
		data.columns.averages[i] = data.columns.totals[i] / data.rows.length;
	}
	return data;
}
rg.pivottable.PivotTable.prototype.wired = null;
rg.pivottable.PivotTable.prototype._init = function() {
	while(this.queryProperties.length < 3) this.queryProperties.push(rg.pivottable.QueryProperty.EmptyProperty);
	this.container.node().innerHTML = rg.pivottable.PivotTable.buildContext(this.id);
	if(this.wired != true) {
		this.wired = true;
		this.wireDateControls();
	}
	this.refreshQueryProperties();
}
rg.pivottable.PivotTable.prototype.setAvailableProperties = function(values) {
	if(null == values) values = [];
	this.availableProperties = values;
	return values;
}
rg.pivottable.PivotTable.prototype.refreshQueryProperties = function() {
	this.usedProperties = [];
	var panel = this.container.select(".property-controls").selectAll("div.property-panel").data(this.queryProperties);
	var p = panel.enter().append("div").attr("class").string("property-panel").html().stringf($closure(this,"buildPanel"));
	p.select("select.property").onNode("change",$closure(this,"valueChanged"));
	p.select("input.limit").onNode("change",$closure(this,"valueChanged"));
	p.select("input.top").onNode("change",$closure(this,"valueChanged"));
}
rg.pivottable.PivotTable.prototype.periodicityChanged = function(d,i) {
	this.periodicity = thx.js.Dom.selectNode(d).property("value").get();
	var _g1 = 0, _g = this.queryProperties.length;
	while(_g1 < _g) {
		var i1 = _g1++;
		var $e = (this.queryProperties[i1]);
		switch( $e[1] ) {
		case 1:
			var a = $e[3];
			this.queryProperties[i1] = rg.pivottable.QueryProperty.TimeProperty(this.periodicity,a);
			break;
		default:
		}
	}
	this.query();
}
rg.pivottable.PivotTable.prototype.valueChanged = function(d,i) {
	var p = d.parentNode;
	while(p.className != "property-panel") p = p.parentNode;
	var parent = thx.js.Dom.selectNode(p);
	this.updateQuery(parent,i);
	this.query();
}
rg.pivottable.PivotTable.prototype.updateQuery = function(parent,i) {
	var name = parent.select("select.property").property("value").get();
	var limitcontrol = parent.select("input.limit");
	var asccontrol = parent.select("input.top");
	var limit = Std.parseInt(limitcontrol.property("value").get());
	var top = parent.select("input.top").property("checked").get();
	limitcontrol.attr("disabled").remove();
	asccontrol.attr("disabled").remove();
	switch(name) {
	case "":
		this.queryProperties[i] = rg.pivottable.QueryProperty.EmptyProperty;
		break;
	case "time":
		this.queryProperties[i] = rg.pivottable.QueryProperty.TimeProperty(this.periodicity,top);
		limitcontrol.attr("disabled").string("true");
		asccontrol.attr("disabled").string("true");
		break;
	default:
		this.queryProperties[i] = rg.pivottable.QueryProperty.ValueProperty(name,top,limit);
	}
	var timecontrols = [this.container.select("select.periodicity"),this.container.select("input.start-time"),this.container.select("input.end-time")];
	var timecontrolscontainer = this.container.select(".time-controls").style("display").string("none");
	if(this.queryHasTimeProperty()) {
		timecontrols.forEach(function(d,_) {
			d.attr("disabled").remove();
		});
		timecontrolscontainer.style("display").string("block");
	} else {
		timecontrols.forEach(function(d,_) {
			d.attr("disabled").string("true");
		});
		timecontrolscontainer.style("display").string("none");
	}
}
rg.pivottable.PivotTable.prototype.buildPanel = function(p,i) {
	var $e = (p);
	switch( $e[1] ) {
	case 1:
		var top = $e[3], periodicity = $e[2];
		return "time panel";
	case 0:
		var limit = $e[4], top = $e[3], name = $e[2];
		return "value panel " + name;
	case 2:
		var buf = "<div><select name=\"property\" class=\"property\">" + this.getOptionsString(i == 0) + "</select></div>";
		buf += "<div>limit <input name=\"limit\" class=\"limit\" type=\"number\" step=\"1\" value=\"20\"/></div>";
		buf += "<div>top <input name=\"top\" class=\"top\" type=\"checkbox\" checked/></div>";
		return buf;
	}
}
rg.pivottable.PivotTable.prototype.getOptions = function(skiptime) {
	var pairs = [{ value : null, label : "- select an option -"}];
	var _g = 0, _g1 = this.availableProperties;
	while(_g < _g1.length) {
		var p = _g1[_g];
		++_g;
		pairs.push({ value : "." + p, label : p});
	}
	if(!skiptime) pairs.push({ value : "time", label : "time"});
	return pairs;
}
rg.pivottable.PivotTable.prototype.getOptionsString = function(skiptime) {
	var buf = [];
	var _g = 0, _g1 = this.getOptions(skiptime);
	while(_g < _g1.length) {
		var option = _g1[_g];
		++_g;
		buf.push("<option value=\"" + (null == option.value?"":option.value) + "\">" + option.label + "</option>");
	}
	return buf.join("");
}
rg.pivottable.PivotTable.prototype.wireDateControls = function() {
	this.container.select("input.start-time").onNode("change",$closure(this,"startTimeChanged"));
	this.container.select("input.end-time").onNode("change",$closure(this,"endTimeChanged"));
	this.container.select("select.periodicity").onNode("change",$closure(this,"periodicityChanged"));
}
rg.pivottable.PivotTable.prototype.startTimeChanged = function(n,_) {
	var v = n.value;
	if(v == "") this.start = null; else if(Dates.canParse(v)) this.start = Dates.parse(v); else return;
	this.query();
}
rg.pivottable.PivotTable.prototype.endTimeChanged = function(n,_) {
	var v = n.value;
	if(v == "") this.end = null; else if(Dates.canParse(v)) this.end = Dates.parse(v); else return;
	this.query();
}
rg.pivottable.PivotTable.prototype._loadProperties = function(v) {
	this.setAvailableProperties(v);
	this._init();
}
rg.pivottable.PivotTable.prototype.__class__ = rg.pivottable.PivotTable;
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
	if(!Arrays.exists(thx.math.scale.LinearTime.valids,v)) throw new thx.error.Error("invalid periodicity '{0}'",null,v,{ fileName : "LinearTime.hx", lineNumber : 56, className : "thx.math.scale.LinearTime", methodName : "periodicity"});
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
rg.svg.SvgStreamGraph = function(panel,xscale) {
	if( panel === $_ ) return;
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
rg.svg.SvgStreamGraph.prototype.destroy = function() {
}
rg.svg.SvgStreamGraph.prototype.init = function() {
	this.svg.classed().add("stream-chart").append("svg:clipPath").attr("id").string(this._cpid).append("svg:rect").attr("x")["float"](0).attr("y")["float"](0).attr("width")["float"](0).attr("height")["float"](0);
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
	this.svg.select("#" + this._cpid + " rect").attr("width")["float"](this._w).attr("height")["float"](this._h);
	var layer = this.svg.selectAll("g.group").data(this._prepdata,function(d,i) {
		return "" + i;
	});
	layer.update().select("path.line").attr("d").stringf($closure(this._area,"shape"));
	layer.enter().append("svg:g").attr("class").stringf(function(d,i) {
		return "group group-" + i;
	}).onNode("mousemove",$closure(this,"over")).onNode("mouseout",$closure(this,"out")).append("svg:path").attr("class").string("line").attr("d").stringf($closure(this._area,"shape"));
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
		return Math.round(time / 1000) * 1000;
	case "minute":
		return Math.round(time / 60000) * 60000;
	case "hour":
		return Math.round(time / 3600000) * 3600000;
	case "day":
		return Math.round(time / 86400000) * 86400000;
	case "week":
		return Math.round(time / 604800000) * 604800000;
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
Dates.prototype.__class__ = Dates;
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
rg.svg.SvgLineChartHighlighter.prototype.init = function() {
	var parent = this.svg;
	while(parent.node().nodeName != "g" || parent.classed().get() != "panel") parent = thx.js.Dom.selectNode(parent.node().parentNode);
	parent.onNode("mouseover.highlighter",$closure(this,"_over")).onNode("mousemove.highlighter",$closure(this,"_move"));
	this._createHighlighter();
}
rg.svg.SvgLineChartHighlighter.prototype._eventForward = function(_,_1) {
	var e = thx.js.Dom.event;
	var parent = this.svg.node().parentNode;
	parent.fireEvent(e.type,e);
}
rg.svg.SvgLineChartHighlighter.prototype.label = function(x) {
	return thx.culture.FormatDate.dateShort(Date.fromTime(x)) + ", " + thx.culture.FormatDate.timeShort(Date.fromTime(x));
}
rg.svg.SvgLineChartHighlighter.prototype._createHighlighter = function() {
	this.selector = this.svg.append("svg:g").style("pointer-events").string("none").attr("class").string("linechart-highlighter").style("display").string("none");
	this.selector.append("svg:line").attr("x1")["float"](0).attr("y1").string("1em").attr("x2")["float"](0).attr("y2")["float"](this.panel.frame.height);
	this.container = this.selector.append("svg:rect").attr("rx")["float"](4).attr("ry")["float"](4);
	this.text = this.selector.append("svg:text").attr("dy").string("1em").attr("text-anchor").string("middle");
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
rg.svg.SvgLineChartHighlighter.prototype._update = function() {
	if(null == this.mouse) {
		this.container.style("display").string("none");
		return;
	}
	this.container.style("display").string("block");
	var vx = this.x.invert(this.mouse[0]);
	vx = this.approximator(vx);
	var t = "translate(" + this.x.scale(vx) + ",0)";
	this.selector.attr("transform").string(t);
	this.text.text().string(this.label(vx));
	var b = this.text.node().getBBox();
	var pw = 20;
	var ph = 4;
	this.container.attr("width")["float"](b.width + pw).attr("height")["float"](b.height + ph).attr("x")["float"](-(b.width + pw) / 2).attr("y")["float"](-ph / 2);
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
rg.svg.SvgScaleLabel = function(panel,anchor) {
	if( panel === $_ ) return;
	this._alwaysHorizontal = true;
	rg.svg.SvgLayer.call(this,panel);
	this._textTextHeight = rg.svg.SvgScaleLabel.defaultTexttextHeight;
	this.anchor(anchor);
	this.svg.attr("class").string("scale-ticks");
}
rg.svg.SvgScaleLabel.__name__ = ["rg","svg","SvgScaleLabel"];
rg.svg.SvgScaleLabel.__super__ = rg.svg.SvgLayer;
for(var k in rg.svg.SvgLayer.prototype ) rg.svg.SvgScaleLabel.prototype[k] = rg.svg.SvgLayer.prototype[k];
rg.svg.SvgScaleLabel.ofLinear = function(panel,anchor,scale) {
	return new rg.svg.SvgScaleLabel(panel,anchor).scale($closure(scale,"scale")).range($closure(scale,"range")).ticks($closure(scale,"ticks")).key(function(d,i) {
		return "" + d;
	}).label($closure(scale,"tickFormat"));
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
	var g = this.svg.selectAll("g").data(this._ticks(),this._key).update().attr("transform").stringf(this._t);
	g.selectAll("text.label").attr(this._oaxis)["float"](this._pos()).attr("text-anchor").string(this._textAnchor).attr("dominant-baseline").string(this._textBaseline).text().stringf(this._label);
	g.enter().append("svg:g").attr("class").string(this._class).attr("transform").stringf(this._t).append("svg:text").attr("class").string("label").attr(this._oaxis)["float"](this._pos()).attr("text-anchor").string(this._textAnchor).attr("dominant-baseline").string(this._textBaseline).text().stringf(this._label);
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
rg.svg.SvgScaleLabel.prototype.getAnchor = function() {
	return this._anchor;
}
rg.svg.SvgScaleLabel.prototype.anchor = function(o) {
	if(Type.enumEq(o,this._anchor)) return this;
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
		this._textBaseline = "central";
		break;
	case 3:
		this._textAnchor = "end";
		this._textBaseline = "central";
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
	this.adjustPositionFunction();
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
Enums.prototype.__class__ = Enums;
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
rg.query.QueryLimit = { __ename__ : ["rg","query","QueryLimit"], __constructs__ : ["Top","Bottom","NoLimit"] }
rg.query.QueryLimit.Top = function(v) { var $x = ["Top",0,v]; $x.__enum__ = rg.query.QueryLimit; $x.toString = $estr; return $x; }
rg.query.QueryLimit.Bottom = function(v) { var $x = ["Bottom",1,v]; $x.__enum__ = rg.query.QueryLimit; $x.toString = $estr; return $x; }
rg.query.QueryLimit.NoLimit = ["NoLimit",2];
rg.query.QueryLimit.NoLimit.toString = $estr;
rg.query.QueryLimit.NoLimit.__enum__ = rg.query.QueryLimit;
if(typeof haxe=='undefined') haxe = {}
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
	return buf.b.join("");
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
	if(null == v) throw new thx.error.NullArgument("v",{ fileName : "Query.hx", lineNumber : 122, className : "rg.query.QueryEvent", methodName : "setEvent"}); else null;
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
	this.executor.children(this.path,{ property : this.event},success,error);
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
	if(null == v) throw new thx.error.NullArgument("v",{ fileName : "Query.hx", lineNumber : 140, className : "rg.query.QueryProperty", methodName : "setProperty"}); else null;
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
	if(null == v) throw new thx.error.NullArgument("v",{ fileName : "Query.hx", lineNumber : 188, className : "rg.query.QueryValues", methodName : "setValues"}); else null;
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
	query.transform = function(data) {
		var start = null != query.time.start?query.time.start.getTime():rg.util.Periodicity.minForPeriodicityInSeries(data,query.time.periodicity), end = null != query.time.end?query.time.end.getTime():rg.util.Periodicity.maxForPeriodicityInSeries(data,query.time.periodicity), minx = Math.POSITIVE_INFINITY, maxx = Math.NEGATIVE_INFINITY, miny = Math.POSITIVE_INFINITY, maxy = Math.NEGATIVE_INFINITY;
		var labels = query.formattedValues(), result = [], range = rg.util.Periodicity.range(start,end,query.time.periodicity), values1, d, y;
		var _g1 = 0, _g = labels.length;
		while(_g1 < _g) {
			var i = _g1++;
			values1 = [];
			d = Reflect.field(data[i],query.time.periodicity);
			if(null == d) d = [];
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
				values1.push({ x : x, y : y});
			}
			result.push({ label : labels[i], values : values1});
		}
		return { minx : minx, maxx : maxx, miny : miny, maxy : maxy, data : result};
	};
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
	var _g1 = 0, _g = this.values.length;
	while(_g1 < _g) {
		var i = _g1++;
		this.executor.propertyValueSeries(this.path,{ start : null != this.time.start?this.time.start.getTime():0, end : null != this.time.end?this.time.end.getTime():0, periodicity : this.time.periodicity, property : this.event + "." + this.property, value : this.values[i]},(function(f,a1) {
			return function(a2) {
				return f(a1,a2);
			};
		})(_collect,i),error);
	}
	if(others) this.executor.propertySeries(this.path,{ start : null != this.time.start?this.time.start.getTime():0, end : null != this.time.end?this.time.end.getTime():0, periodicity : this.time.periodicity, property : this.event + "." + this.property},_total,error);
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
rg.Viz.pivot = function(el,query,options) {
	var pivot = new rg.pivottable.PivotTable(rg.Viz.select(el));
	var queryoptions = rg.QueryOptionsUtil.emptyPivotTableQuery();
	Objects.copyTo(query,queryoptions);
	rg.Viz.makePivotOptions(pivot,queryoptions,options,$closure(pivot,"init"));
	return pivot;
}
rg.Viz.makePivotOptions = function(pivot,query,options,handler) {
	if(null == options) options = { };
	var o = Objects.copyTo(rg.Viz.defaultOptions,options);
	if(null == query.path) throw new thx.error.Error("you must provide a path value for your query",null,null,{ fileName : "Viz.hx", lineNumber : 67, className : "rg.Viz", methodName : "makePivotOptions"});
	if(null == query.event) throw new thx.error.Error("you must provide an event name for your query",null,null,{ fileName : "Viz.hx", lineNumber : 69, className : "rg.Viz", methodName : "makePivotOptions"});
	var init = function() {
		if(null != query.filter) pivot.setAvailableProperties(Arrays.filter(query.availableProperties,query.filter)); else pivot.setAvailableProperties(query.availableProperties);
		pivot.start = (rg.Viz.toDatef(o.start))(Date.now());
		pivot.end = (rg.Viz.toDatef(o.end))(Date.now());
		pivot.path = query.path;
		pivot.event = query.event;
		pivot.queryProperties = [];
		var _g = 0, _g1 = query.properties;
		while(_g < _g1.length) {
			var property = _g1[_g];
			++_g;
			if(null != property.time) pivot.queryProperties.push(rg.pivottable.QueryProperty.TimeProperty(rg.Viz.periodicity(property.time),null == property.order?true:property.order.toLowerCase() == "top")); else pivot.queryProperties.push(rg.pivottable.QueryProperty.ValueProperty(property.name,null == property.order?false:property.order.toLowerCase() == "bottom",null == property.limit?20:property.limit));
		}
		handler();
	};
	if(null == query.availableProperties || 0 == query.availableProperties.length) rg.js.ReportGrid.children(query.path,{ property : query.event, type : "property"},function(v) {
		query.availableProperties = v.map(function(d,i) {
			if(d.substr(0,1) == ".") return d.substr(1); else return d;
		});
		init();
	}); else init();
}
rg.Viz.periodicity = function(v) {
	if(null == v) return "Eternity";
	var v1 = Strings.ucfirst(v.toLowerCase());
	if(!Reflect.hasField(rg.js.ReportGrid.Periodicity,v1)) throw new thx.error.Error("invalid periodicity '{0}'",null,v1,{ fileName : "Viz.hx", lineNumber : 126, className : "rg.Viz", methodName : "periodicity"});
	return v1;
}
rg.Viz.toDateLimit = function(v) {
	if(null == v) return rg.query.DateLimit.NoLimit;
	if(Reflect.isFunction(v)) return rg.query.DateLimit.VariableLimit(v);
	if(Std["is"](v,Date)) return rg.query.DateLimit.FixedLimit(v);
	if(Std["is"](v,Float)) return rg.query.DateLimit.FixedLimit(Date.fromTime(v));
	if(Std["is"](v,String)) return rg.query.DateLimit.VariableLimit(function() {
		return thx.date.DateParser.parse(v);
	});
	throw new thx.error.Error("invalid date value '{0}'",v,null,{ fileName : "Viz.hx", lineNumber : 142, className : "rg.Viz", methodName : "toDateLimit"});
}
rg.Viz.toDatef = function(v) {
	if(null == v) return function(_) {
		return null;
	};
	if(Reflect.isFunction(v)) return v;
	if(Std["is"](v,Date)) return function(_) {
		return v;
	};
	if(Std["is"](v,Float)) return function(_) {
		return Date.fromTime(v);
	};
	if(Std["is"](v,String)) return function(d) {
		return thx.date.DateParser.parse(v,d);
	};
	throw new thx.error.Error("invalid date value '{0}'",v,null,{ fileName : "Viz.hx", lineNumber : 157, className : "rg.Viz", methodName : "toDatef"});
}
rg.Viz.pie = function(el,query,options) {
	var selection = rg.Viz.select(el).html().clear();
	var q = Objects.copyTo(query,rg.QueryOptionsUtil.emptyQuery());
	var top = null == q.bottom && q.top > 0;
	var limit = null != q.bottom?q.bottom:null == q.top?10:q.top;
	var loader;
	if(null != q.property && "" != q.property) {
		var l = new rg.query.QueryValuesCount(rg.Viz.executor,q.path,q.event,q.property,top,limit,q.other);
		loader = l;
		if(null != q.filter) l.filter = q.filter;
	} else if(null != q.event && "" != q.event) loader = new rg.query.QueryPropertiesCount(rg.Viz.executor,q.path,q.event); else loader = new rg.query.QueryEventsCount(rg.Viz.executor,q.path);
	loader.onError.add(rg.Viz.error);
	if(null == options) options = { };
	var o = rg.Viz.sizeOptions(selection,options);
	loader.time.startLimit = rg.Viz.toDateLimit(o.start);
	loader.time.endLimit = rg.Viz.toDateLimit(o.end);
	var space = new rg.svg.SvgSpace(o.width,o.height,selection);
	space.svg.attr("class").string("rg");
	var chart = new rg.svg.SvgPieChart(space.createPanel(rg.layout.Disposition.Fill(0,0)));
	loader.onChange.add($closure(chart,"data"));
	var animated = null != o.refresh && o.refresh > 0;
	if(animated) new rg.query.QueryTimerUpdate(loader,o.refresh); else loader.load();
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
rg.Viz.yinfo = function(container,q,scale,left,labelwidth,pos) {
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
	title.setCustomClass("dimension-" + pos);
	labels.setCustomClass("dimension-" + pos);
	ticks.setCustomClass("dimension-" + pos);
	return { labels : labels, ticks : ticks};
}
rg.Viz.sub = function(path,handler) {
	var loader = new rg.query.QuerySubPath(rg.Viz.executor,path);
	loader.onData.add(handler);
	loader.load();
}
rg.Viz.line = function(el,_queries,options) {
	var selection = rg.Viz.select(el).html().clear();
	var o = rg.Viz.sizeOptions(selection,options);
	var queries = Std["is"](_queries,Array)?_queries:[_queries];
	var space = new rg.svg.SvgSpace(o.width,o.height,selection,10,0);
	space.svg.attr("class").string("rg");
	var x = new thx.math.scale.LinearTime();
	var container = space.createContainer(rg.layout.Disposition.Fill(0,0),rg.layout.Orientation.Horizontal);
	var chartpanel = null, highlighter, labelwidth = 75;
	var loaders = [], charts = [], isleft = true, xscale = null;
	var dropshadow = space.addEffect(new rg.svg.effects.DropShadow());
	var _g1 = 0, _g = queries.length;
	while(_g1 < _g) {
		var i = _g1++;
		var q = Objects.copyTo(queries[i],rg.QueryOptionsUtil.emptyQuery());
		var top = null == q.bottom && q.top > 0;
		var limit = null != q.bottom?q.bottom:null == q.top?10:q.top;
		var loader = [];
		if(null != q.property) loader[0] = rg.query.QueryValuesSeries.forLineChart(rg.Viz.executor,q.path,q.event,q.property,[]); else loader[0] = rg.query.QueryEventSeries.forLineChart(rg.Viz.executor,q.path,q.event);
		loader[0].time.setPeriodicity(o.periodicity);
		loader[0].time.startLimit = rg.Viz.toDateLimit(o.start);
		loader[0].time.endLimit = rg.Viz.toDateLimit(o.end);
		loader[0].time.update();
		loader[0].onError.add(rg.Viz.error);
		loaders.push(loader[0]);
		var y = [new thx.math.scale.Linear()], info = [];
		if(i == 0) {
			info[0] = rg.Viz.yinfo(container,q,y[0],true,labelwidth,i);
			chartpanel = container.createPanel(rg.layout.Disposition.Fill(0,0));
			highlighter = new rg.svg.SvgLineChartHighlighter(chartpanel,x);
			isleft = false;
		} else info[0] = rg.Viz.yinfo(container,q,y[0],false,labelwidth,i);
		var chart = [new rg.svg.SvgLineChart(chartpanel,x,y[0])];
		chart[0].setLineEffect(dropshadow);
		chart[0].setCustomClass("dimension-" + i);
		chart[0].lineInterpolator(null == o.lineinterpolator?thx.svg.LineInterpolator.Linear:thx.svg.LineInterpolators.parse(o.lineinterpolator));
		charts.push(chart[0]);
		if(i == 0) loader[0].onChange.add((function(loader) {
			return function(v) {
				x.domain([null == loader[0].time.start?v.minx:loader[0].time.start.getTime(),null == loader[0].time.end?v.maxx:loader[0].time.end.getTime()]);
				xscale.redraw();
			};
		})(loader));
		loader[0].onChange.add((function(y,info,chart) {
			return function(v) {
				y[0].domain([v.maxy * 1.2,0.0]);
				info[0].labels.redraw();
				info[0].ticks.redraw();
				chart[0].data(v.data);
			};
		})(y,info,chart));
	}
	var bottom = space.createContainer(rg.layout.Disposition.Fixed(0,0,20),rg.layout.Orientation.Horizontal);
	var belowchart = bottom.createContainer(rg.layout.Disposition.Fill(labelwidth,labelwidth * (queries.length - 1)),rg.layout.Orientation.Vertical);
	var xticks = rg.svg.SvgScaleTick.boundsOfLinear(belowchart.createPanel(rg.layout.Disposition.Fixed(0,0,6)),rg.svg.Anchor.Top,x);
	xscale = rg.svg.SvgScaleLabel.boundsOfLinear(belowchart.createPanel(rg.layout.Disposition.Fixed(2,0,12)),rg.svg.Anchor.Top,x);
	xticks.redraw();
	if(o.animated) thx.js.Timer.timer(function(t) {
		loaders.forEach(function(loader,_) {
			loader.time.update();
		});
		x.domain([loaders[0].time.start.getTime(),loaders[0].time.end.getTime()]);
		charts.forEach(function(chart,_) {
			chart.updatex();
		});
		xscale.redraw();
		return false;
	});
	var animated = null != o.refresh && o.refresh > 0;
	loaders.forEach(function(loader,_) {
		if(animated) new rg.query.QueryTimerUpdate(loader,o.refresh); else loader.load();
	});
}
rg.Viz.stream = function(el,query,options) {
	var selection = rg.Viz.select(el);
	var q = Objects.copyTo(query,rg.QueryOptionsUtil.emptyQuery());
	var o = rg.Viz.sizeOptions(selection,options);
	if(null == o.periodicity) o.periodicity = "hour";
	var top = null == q.bottom && q.top > 0;
	var limit = null != q.bottom?q.bottom:null == q.top?10:q.top;
	var values = new rg.query.QueryValuesCount(rg.Viz.executor,q.path,q.event,q.property,top,limit,false);
	if(null != q.filter) values.filter = q.filter;
	var loader = rg.query.QueryValuesSeries.forLineChart(rg.Viz.executor,q.path,q.event,q.property,[]);
	loader.time.setPeriodicity(o.periodicity);
	loader.time.startLimit = rg.Viz.toDateLimit(o.start);
	loader.time.endLimit = rg.Viz.toDateLimit(o.end);
	var space = new rg.svg.SvgSpace(o.width,o.height,selection,10,0);
	space.svg.attr("class").string("rg");
	var x = new thx.math.scale.LinearTime();
	var y = new thx.math.scale.Linear();
	var left = 0, right = 0;
	var container = space.createContainer(rg.layout.Disposition.Fill(0,0),rg.layout.Orientation.Horizontal);
	var title = null == q.property?q.event:q.event + " - " + q.property;
	new rg.svg.SvgTitle(container.createPanel(rg.layout.Disposition.Fixed(0,0,14)),title,rg.svg.Anchor.Right);
	left += 14;
	var chartpanel = container.createPanel(rg.layout.Disposition.Fill(0,0));
	var chart = new rg.svg.SvgStreamGraph(chartpanel,x);
	var bottom = space.createContainer(rg.layout.Disposition.Fixed(0,0,20),rg.layout.Orientation.Horizontal);
	var belowchart = bottom.createContainer(rg.layout.Disposition.Fill(left,right),rg.layout.Orientation.Vertical);
	var xticks = rg.svg.SvgScaleTick.boundsOfLinear(belowchart.createPanel(rg.layout.Disposition.Fixed(0,0,6)),rg.svg.Anchor.Top,x);
	xticks.redraw();
	loader.onChange.add(function(v) {
		y.domain([v.maxy * 1.2,0.0]);
		x.domain([null == loader.time.start?v.minx:loader.time.start.getTime(),null == loader.time.end?v.maxx:loader.time.end.getTime()]);
		chart.data(v.data);
	});
	chart.lineInterpolator(null == o.lineinterpolator?thx.svg.LineInterpolator.Linear:thx.svg.LineInterpolators.parse(o.lineinterpolator));
	loader.onError.add(rg.Viz.error);
	values.onError.add(rg.Viz.error);
	values.onChange.add(function(v) {
		loader.setValues(v.map(function(d,i) {
			return d.label;
		}));
		loader.load();
	});
	values.load();
}
rg.Viz.makeoptions = function(options,defaults) {
	var o = Objects.clone(rg.Viz.defaultOptions);
	Objects.copyTo(defaults,o);
	Objects.copyTo(options,o);
	o.start = rg.Viz.toDatef(o.start);
	o.end = rg.Viz.toDatef(o.end);
	if(null == o.animated) {
		var e1 = o.end(Date.now());
		var e2 = o.end(DateTools.delta(Date.now(),DateTools.days(-366)));
		if(e1 == null || e2 == null) o.animated = false; else o.animated = e1.getTime() != e2.getTime();
	}
	return o;
}
rg.Viz.select = function(el) {
	var el1 = Std["is"](el,String)?thx.js.Dom.select(el):thx.js.Dom.selectNode(el);
	if(el1.empty()) throw new thx.error.Error("invalid container",null,null,{ fileName : "Viz.hx", lineNumber : 555, className : "rg.Viz", methodName : "select"});
	return el1;
}
rg.Viz.scale = function(displayLabels,displayTicks,labellength) {
	return { ticks : displayTicks, labels : displayLabels, ticklength : 5, labellength : labellength, spacing : 4};
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
	if(null == v) throw new thx.error.NullArgument("v",{ fileName : "Query.hx", lineNumber : 157, className : "rg.query.QueryValue", methodName : "setValue"}); else null;
	return this.value = v;
}
rg.query.QueryValue.prototype.__class__ = rg.query.QueryValue;
rg.query.QueryProperties = function(executor,path,event,properties) {
	if( executor === $_ ) return;
	rg.query.QueryEvent.call(this,executor,path,event);
	this.setProperties(properties);
}
rg.query.QueryProperties.__name__ = ["rg","query","QueryProperties"];
rg.query.QueryProperties.__super__ = rg.query.QueryEvent;
for(var k in rg.query.QueryEvent.prototype ) rg.query.QueryProperties.prototype[k] = rg.query.QueryEvent.prototype[k];
rg.query.QueryProperties.prototype.properties = null;
rg.query.QueryProperties.prototype.setProperties = function(v) {
	if(null == v || 0 == v.length) throw new thx.error.NullArgument("v",{ fileName : "Query.hx", lineNumber : 205, className : "rg.query.QueryProperties", methodName : "setProperties"}); else null;
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
	if(null == v || 0 == v.length) throw new thx.error.NullArgument("v",{ fileName : "Query.hx", lineNumber : 340, className : "rg.query.QuerySearch", methodName : "setWhere"}); else null;
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
rg.query.QuerySubPath = function(executor,path) {
	if( executor === $_ ) return;
	rg.query.QueryPath.call(this,executor,path);
}
rg.query.QuerySubPath.__name__ = ["rg","query","QuerySubPath"];
rg.query.QuerySubPath.__super__ = rg.query.QueryPath;
for(var k in rg.query.QueryPath.prototype ) rg.query.QuerySubPath.prototype[k] = rg.query.QueryPath.prototype[k];
rg.query.QuerySubPath.prototype.executeLoad = function(success,error) {
	this.executor.children(this.path,{ type : "path"},success,error);
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
	query.transform = function(data) {
		var start = null != query.time.start?query.time.start.getTime():rg.util.Periodicity.minForPeriodicityInSeries([data],query.time.periodicity), end = null != query.time.end?query.time.end.getTime():rg.util.Periodicity.maxForPeriodicityInSeries([data],query.time.periodicity), minx = Math.POSITIVE_INFINITY, maxx = Math.NEGATIVE_INFINITY, miny = Math.POSITIVE_INFINITY, maxy = Math.NEGATIVE_INFINITY;
		var range = rg.util.Periodicity.range(start,end,query.time.periodicity), values = [], d, y;
		d = Reflect.field(data,query.time.periodicity);
		if(null == d) return { minx : 0.0, maxx : 0.0, miny : 0.0, maxy : 0.0, data : [{ label : event, values : []}]};
		var map = new Hash();
		var _g = 0;
		while(_g < d.length) {
			var v = d[_g];
			++_g;
			map.set("" + v[0],v[1]);
		}
		var _g = 0;
		while(_g < range.length) {
			var x = range[_g];
			++_g;
			y = map.get("" + x);
			if(null == y) y = 0.0;
			if(x < minx) minx = x;
			if(x > maxx) maxx = x;
			if(y < miny) miny = y;
			if(y > maxy) maxy = y;
			values.push({ x : x, y : y});
		}
		return { minx : minx, maxx : maxx, miny : miny, maxy : maxy, data : [{ label : event, values : values}]};
	};
	return query;
}
rg.query.QueryEventSeries.prototype.executeLoad = function(success,error) {
	this.executor.propertySeries(this.path,{ start : null != this.time.start?this.time.start.getTime():0, end : null != this.time.end?this.time.end.getTime():0, periodicity : this.time.periodicity, property : this.event},success,error);
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
	return { path : null, event : null, property : null, values : null, filter : null, top : 10, bottom : null, other : null};
}
rg.QueryOptionsUtil.emptyPivotTableQuery = function() {
	return { path : null, event : null, availableProperties : null, properties : [], filter : null, top : null, bottom : null};
}
rg.QueryOptionsUtil.toQueryInst = function(options) {
	return null;
}
rg.QueryOptionsUtil.prototype.__class__ = rg.QueryOptionsUtil;
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
Objects._flatten = function(src,cum,arr) {
	var _g = 0, _g1 = Reflect.fields(src);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		var clone = Objects.clone(cum);
		var v = Reflect.field(src,field);
		clone.fields.push(field);
		if(Reflect.isObject(v) && null == Type.getClass(v)) Objects._flatten(v,clone,arr); else {
			clone.value = v;
			arr.push(clone);
		}
	}
}
Objects.flatten = function(src) {
	var arr = [];
	var _g = 0, _g1 = Reflect.fields(src);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		var v = Reflect.field(src,field);
		if(Reflect.isObject(v) && null == Type.getClass(v)) {
			var item = { fields : [field], value : null};
			Objects._flatten(v,item,arr);
		} else arr.push({ fields : [field], value : v});
	}
	return arr;
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
rg.query.QueryValuesCount = function(executor,path,event,property,top,limit,others,othersLabel) {
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
}
rg.query.QueryValuesCount.__name__ = ["rg","query","QueryValuesCount"];
rg.query.QueryValuesCount.__super__ = rg.query.QueryProperty;
for(var k in rg.query.QueryProperty.prototype ) rg.query.QueryValuesCount.prototype[k] = rg.query.QueryProperty.prototype[k];
rg.query.QueryValuesCount.prototype.top = null;
rg.query.QueryValuesCount.prototype.limit = null;
rg.query.QueryValuesCount.prototype.others = null;
rg.query.QueryValuesCount.prototype.othersLabel = null;
rg.query.QueryValuesCount.prototype.filter = function(value,count) {
	return true;
}
rg.query.QueryValuesCount.prototype.transform = function(v) {
	return Reflect.fields(v).map(function(label,i) {
		var value = 0.0;
		var periods = Reflect.field(v,label);
		if(null == periods) periods = [];
		var _g = 0;
		while(_g < periods.length) {
			var item = periods[_g];
			++_g;
			value += item[1];
		}
		return { label : Strings.rtrim(Strings.ltrim(label,"\""),"\""), value : value};
	});
}
rg.query.QueryValuesCount.prototype.executeLoad = function(success,error) {
	var count = 0, total = 1, result = null, totalcount = 0, others = this.others, label = this.othersLabel, filter = $closure(this,"filter");
	var _end = function() {
		if(others) result["\"" + label + "\""] = [[0.0,totalcount]];
		success(result);
	};
	var _success = function(v) {
		result = v;
		var labels = Reflect.fields(result);
		var _g = 0;
		while(_g < labels.length) {
			var label1 = labels[_g];
			++_g;
			var value = Reflect.field(Reflect.field(Reflect.field(result,label1),"eternity"),"0");
			if(filter(label1,value)) totalcount -= value; else Reflect.deleteField(result,label1);
		}
		if(++count == total) _end();
	};
	if(others) {
		total = 2;
		var _successtotal = function(v) {
			totalcount += v;
			if(++count == total) _end();
		};
		this.executor.propertyCount(this.path,{ property : this.event + "." + this.property},_successtotal,error);
	}
	var p = [{ property : this.event + "." + this.property, limit : this.limit, order : this.top?"descending":"ascending"}];
	this.time.autosetPeriodicity = false;
	this.time.setPeriodicity("eternity");
	this.executor.intersect(this.path,{ start : this.time.start, end : this.time.end, periodicity : this.time.periodicity, properties : p},_success,error);
}
rg.query.QueryValuesCount.prototype.__class__ = rg.query.QueryValuesCount;
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
	var options = { property : this.event + "." + this.property};
	var $e = (this.limit);
	switch( $e[1] ) {
	case 0:
		var v = $e[2];
		options["top"] = v;
		break;
	case 1:
		var v = $e[2];
		options["bottom"] = v;
		break;
	default:
	}
	this.executor.propertyValues(this.path,options,success,error);
}
rg.query.QueryPropertyValues.prototype.setLimit = function(v) {
	if(null == v) throw new thx.error.NullArgument("v",{ fileName : "QueryPropertyValues.hx", lineNumber : 40, className : "rg.query.QueryPropertyValues", methodName : "setLimit"}); else null;
	return this.limit = v;
}
rg.query.QueryPropertyValues.prototype.__class__ = rg.query.QueryPropertyValues;
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
thx.error.NullArgument = function(argumentName,posInfo) {
	if( argumentName === $_ ) return;
	thx.error.Error.call(this,"invalid null or empty argument {0} for method {1}.{2}()",[argumentName,posInfo.className,posInfo.methodName],posInfo,{ fileName : "NullArgument.hx", lineNumber : 14, className : "thx.error.NullArgument", methodName : "new"});
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
			if("transparent" == s) return thx.color.Rgb.fromInt(16777215); else return (function($this) {
				var $r;
				throw new thx.error.Error("invalid color: '{0}'",null,s,{ fileName : "Colors.hx", lineNumber : 45, className : "thx.color.Colors", methodName : "parse"});
				return $r;
			}(this));
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
	}).join(""); else if(color.length != 6) return (function($this) {
		var $r;
		throw new thx.error.Error("invalid color: '{0}'",null,s,{ fileName : "Colors.hx", lineNumber : 67, className : "thx.color.Colors", methodName : "parse"});
		return $r;
	}(this));
	return thx.color.Rgb.fromInt(Std.parseInt("0x" + color));
}
thx.color.Colors._c = function(s) {
	return Std.parseInt(s);
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
	var _g = 0, _g1 = this.properties;
	while(_g < _g1.length) {
		var property = _g1[_g];
		++_g;
		this.executor.propertyCount(this.path,{ property : this.event + "." + property},(function(f,a1) {
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
	this.svg.classed().add("line-chart").append("svg:clipPath").attr("id").string(this._cpid).append("svg:rect").attr("x")["float"](0).attr("y")["float"](0).attr("width")["float"](0).attr("height")["float"](0);
	this.svg.attr("clip-path").string("url(#" + this._cpid + ")");
}
rg.svg.SvgLineChart.prototype.redraw = function() {
	if(null == this._data || this._data.length == 0) return;
	this._redraw();
}
rg.svg.SvgLineChart.prototype.resize = function() {
	this._x.range([0.0,this.width]);
	this._y.range([0.0,this.height]);
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
rg.svg.SvgLineChart.prototype._redraw = function() {
	this._timedelta = Date.now().getTime();
	this.svg.select("#" + this._cpid + " rect").attr("width")["float"](this.width).attr("height")["float"](this.height);
	var layer = this.svg.selectAll("g.group").attr("transform").string("translate(0,0)").data(this._data,function(d,i) {
		return d.label;
	});
	layer.update().select("path.line").transition().ease(this._ease).duration(null,this._duration).attr("d").stringf($closure(this,"_path"));
	var g = layer.enter().append("svg:g").attr("class").stringf(function(d,i) {
		return "group group-" + i;
	}).onNode("mouseover.animation",$closure(this,"_highlight"),true).onNode("mouseout.animation",$closure(this,"_backtonormal"),true).on("mousemove.tooltip",$closure(this,"_showtooltip"),true).on("mouseout.tooltip",$closure(this,"_hidetooltip"),true);
	g.append("svg:path").attr("class").string("line").attr("d").stringf($closure(this,"_path0")).style("opacity")["float"](0).eachNode($closure(this,"_popin"));
	layer.exit().remove();
}
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
rg.svg.SvgLineChart.prototype._popin = function(n,i) {
	var path = thx.js.Dom.selectNodeData(n);
	if(null != this._lineEffect) path.attr("filter").string("url(#" + this._lineEffect + ")");
	path.transition().ease(this._ease).duration(null,this._duration).delay(null,150 * (i - this._created)).style("opacity")["float"](1.0).attr("d").stringf($closure(this,"_path"));
	if(i == this._data.length - 1) this._created = i;
}
rg.svg.SvgLineChart.prototype.__class__ = rg.svg.SvgLineChart;
if(!rg.util) rg.util = {}
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
rg.util.Periodicity.minForPeriodicityInSeries = function(arr,periodicity) {
	return Arrays.floatMin(arr,function(d) {
		var o = Reflect.field(d,periodicity);
		return Arrays.floatMin(Reflect.fields(o),function(d1) {
			return Std.parseFloat(d1);
		});
	});
}
rg.util.Periodicity.maxForPeriodicityInSeries = function(arr,periodicity) {
	return Arrays.floatMax(arr,function(d) {
		var o = Reflect.field(d,periodicity);
		return Arrays.floatMax(Reflect.fields(o),function(d1) {
			return Std.parseFloat(d1);
		});
	});
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
	var r = window.ReportGrid;
	r.timeSeries = rg.Viz.line;
	r.totals = rg.Viz.pie;
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
	var gs = thx.js.Selection.create([new thx.js.Group([js.Lib.document])]);
	gs.parentNode = js.Lib.document.documentElement;
	return gs;
})();
thx.js.Dom.selectionEngine = new thx.js.SizzleEngine();
thx.math.Const.TWO_PI = 6.283185307179586477;
thx.math.Const.PI = 3.141592653589793238;
thx.math.Const.HALF_PI = 1.570796326794896619;
thx.math.Const.TO_DEGREE = 57.29577951308232088;
thx.math.Const.TO_RADIAN = 0.01745329251994329577;
thx.math.Const.LN10 = 2.302585092994046;
thx.xml.Namespace.prefix = (function() {
	var h = new Hash();
	h.set("svg","http://www.w3.org/2000/svg");
	h.set("xhtml","http://www.w3.org/1999/xhtml");
	h.set("xlink","http://www.w3.org/1999/xlink");
	h.set("xml","http://www.w3.org/XML/1998/namespace");
	h.set("xmlns","http://www.w3.org/2000/xmlns/");
	return h;
})();
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
rg.pivottable.PivotTable.startColor = thx.color.Hsl.toHsl(thx.color.Rgb.fromInt(10092543));
rg.pivottable.PivotTable.endColor = thx.color.Hsl.toHsl(thx.color.Rgb.fromInt(255));
rg.pivottable.PivotTable.nextid = 0;
thx.math.scale.LinearTime.valids = ["minute","hour","day","week","month","year"];
thx.text.ERegs._escapePattern = new EReg("[*+?|{[()^$.# \\\\]","");
thx.svg.LineInternals.arcOffset = -Math.PI / 2;
thx.svg.LineInternals.arcMax = 2 * Math.PI - 1e-6;
thx.svg.LineInternals._lineBasisBezier1 = [0,2 / 3,1 / 3,0];
thx.svg.LineInternals._lineBasisBezier2 = [0,1 / 3,2 / 3,0];
thx.svg.LineInternals._lineBasisBezier3 = [0,1 / 6,2 / 3,1 / 6];
rg.svg.SvgStreamGraph._pathid = 0;
Dates._reparse = new EReg("^\\d{4}-\\d\\d-\\d\\d(( |T)\\d\\d:\\d\\d(:\\d\\d(\\.\\d{1,3})?)?)?Z?$","");
rg.svg.SvgScaleLabel.defaultTexttextHeight = 12;
thx.js.BaseTransition._id = 0;
thx.js.BaseTransition._inheritid = 0;
rg.Viz.executor = new rg.query.js.ReportGridExecutor();
rg.Viz.hlen = 20;
rg.Viz.vlen = 50;
rg.Viz.defaultOptions = { width : 400, height : 400, left : rg.Viz.scale(true,true,rg.Viz.hlen), right : rg.Viz.scale(false,false,rg.Viz.hlen), top : rg.Viz.scale(false,false,rg.Viz.vlen), bottom : rg.Viz.scale(true,true,rg.Viz.vlen), lineinterpolation : null, start : null, end : null, animated : null, animation : { dataupdate : 250, refresh : 10000}};
thx.js.Svg._usepage = new EReg("WebKit","").match(js.Lib.window.navigator.userAgent);
haxe.Timer.arr = new Array();
Objects._reCheckKeyIsColor = new EReg("color\\b|\\bbackground\\b|\\bstroke\\b|\\bfill\\b","");
thx.js.Timer.timeout = 0;
thx.js.Timer.queue = null;
thx.js.Timer.interval = 0;
thx.js.Timer._step = thx.js.Timer.step;
thx.color.Colors._reParse = new EReg("^\\s*(?:(hsl|rgb|rgba|cmyk)\\(([^)]+)\\))|(?:(?:0x|#)([a-f0-9]{3,6}))\\s*$","i");
DateTools.DAYS_OF_MONTH = [31,28,31,30,31,30,31,31,30,31,30,31];
rg.svg.SvgLineChart._pathid = 0;
rg.util.Periodicity.validPeriods = ["minute","hour","day","week","month","year","eternity"];
