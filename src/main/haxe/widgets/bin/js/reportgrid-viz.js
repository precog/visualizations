$estr = function() { return js.Boot.__string_rec(this,''); }
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
Strings = function() { }
Strings.__name__ = ["Strings"];
Strings.format = function(pattern,values,nullstring,culture) {
	$s.push("Strings::format");
	var $spos = $s.length;
	if(nullstring == null) nullstring = "null";
	if(null == values || 0 == values.length) {
		$s.pop();
		return pattern;
	}
	var $tmp = (Strings.formatf(pattern,nullstring,culture))(values);
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
				$s.push("Strings::formatf@122");
				var $spos = $s.length;
				var $tmp = function(_) {
					$s.push("Strings::formatf@122@122");
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
			$s.push("Strings::formatf@140");
			var $spos = $s.length;
			var $tmp = function(_) {
				$s.push("Strings::formatf@140@140");
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
			$s.push("Strings::formatf@142");
			var $spos = $s.length;
			var $tmp = function(f,a1) {
				$s.push("Strings::formatf@142@142");
				var $spos = $s.length;
				var $tmp = (function() {
					$s.push("Strings::formatf@142@142@142");
					var $spos = $s.length;
					var $tmp = function(a2) {
						$s.push("Strings::formatf@142@142@142@142");
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
			$s.push("Strings::formatf@142");
			var $spos = $s.length;
			var $tmp = function(i,v) {
				$s.push("Strings::formatf@142@142");
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
		$s.push("Strings::formatf@145");
		var $spos = $s.length;
		if(null == values) values = [];
		var $tmp = buf.map(function(df,_) {
			$s.push("Strings::formatf@145@149");
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
			$s.push("Strings::formatOnef@165");
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
			$s.push("Strings::formatOnef@173");
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
			$s.push("Strings::formatOnef@177");
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
Strings.collapse = function(value) {
	$s.push("Strings::collapse");
	var $spos = $s.length;
	var $tmp = Strings._reCollapse.replace(StringTools.trim(value)," ");
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
		$s.push("Strings::interpolatef@428");
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
					$s.push("Strings::interpolatef@466");
					var $spos = $s.length;
					var $tmp = function(_) {
						$s.push("Strings::interpolatef@466@466");
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
					$s.push("Strings::interpolatef@469");
					var $spos = $s.length;
					var $tmp = function(t) {
						$s.push("Strings::interpolatef@469@469");
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
				$s.push("Strings::interpolatef@473");
				var $spos = $s.length;
				var $tmp = function(_) {
					$s.push("Strings::interpolatef@473@473");
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
		$s.push("Strings::interpolatef@487");
		var $spos = $s.length;
		$s.pop();
		return rest;
		$s.pop();
	});
	var $tmp = function(t) {
		$s.push("Strings::interpolatef@488");
		var $spos = $s.length;
		var $tmp = functions.map(function(f,_) {
			$s.push("Strings::interpolatef@488@489");
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
		$s.push("Strings::ellipsisf@503");
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
Strings.compare = function(a,b) {
	$s.push("Strings::compare");
	var $spos = $s.length;
	var $tmp = a < b?-1:a > b?1:0;
	$s.pop();
	return $tmp;
	$s.pop();
}
Strings.prototype.__class__ = Strings;
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
	var interpolator = Ints.interpolatef(0,255,equation);
	t /= 255;
	var $tmp = new thx.color.Rgb(interpolator(t * color.red),interpolator(t * color.green),interpolator(t * color.blue));
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
		$s.push("thx.color.Rgb::interpolatef@97");
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
	var g = thx.color.Grey.toGrey(c);
	var nc = thx.color.Hsl.toHsl(c);
	if(g.grey < .5) {
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
				var $tmp = Objects.format(v,param,params,culture);
				$s.pop();
				return $tmp;
			}
			break;
		case 4:
			var $tmp = Objects.format(v,param,params,culture);
			$s.pop();
			return $tmp;
		default:
			var $tmp = (function($this) {
				var $r;
				throw new thx.error.Error("Unsupported type format: {0}",null,Type["typeof"](v),{ fileName : "Dynamics.hx", lineNumber : 42, className : "Dynamics", methodName : "formatf"});
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
	var tb = Type["typeof"](b);
	if(!((Std["is"](a,Float) || Std["is"](a,Int)) && (Std["is"](b,Float) || Std["is"](b,Int))) && !Type.enumEq(ta,tb)) throw new thx.error.Error("arguments a ({0}) and b ({0}) have different types",[a,b],null,{ fileName : "Dynamics.hx", lineNumber : 57, className : "Dynamics", methodName : "interpolatef"});
	var $e = (ta);
	switch( $e[1] ) {
	case 0:
		var $tmp = function(_) {
			$s.push("Dynamics::interpolatef@60");
			var $spos = $s.length;
			$s.pop();
			return null;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	case 1:
		if(Std["is"](b,Int)) {
			var $tmp = Ints.interpolatef(a,b,equation);
			$s.pop();
			return $tmp;
		} else {
			var $tmp = Floats.interpolatef(a,b,equation);
			$s.pop();
			return $tmp;
		}
		break;
	case 2:
		var $tmp = Floats.interpolatef(a,b,equation);
		$s.pop();
		return $tmp;
	case 3:
		var $tmp = Bools.interpolatef(a,b,equation);
		$s.pop();
		return $tmp;
	case 4:
		var $tmp = Objects.interpolatef(a,b,equation);
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
			throw new thx.error.Error("cannot interpolate on instances of {0}",null,name,{ fileName : "Dynamics.hx", lineNumber : 75, className : "Dynamics", methodName : "interpolatef"});
		}
		break;
	default:
		throw new thx.error.Error("cannot interpolate on functions/enums/unknown",null,null,{ fileName : "Dynamics.hx", lineNumber : 77, className : "Dynamics", methodName : "interpolatef"});
	}
	$s.pop();
}
Dynamics.string = function(v) {
	$s.push("Dynamics::string");
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
			result.push(key + " : " + Dynamics.string(Reflect.field(v,key)));
		}
		var $tmp = "{" + result.join(", ") + "}";
		$s.pop();
		return $tmp;
	case 6:
		var c = $e[2];
		var name = Type.getClassName(c);
		switch(name) {
		case "Array":
			var $tmp = Arrays.string(v);
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
		var $tmp = Enums.string(v);
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
Dynamics.compare = function(a,b) {
	$s.push("Dynamics::compare");
	var $spos = $s.length;
	if(!Types.sameType(a,b)) throw new thx.error.Error("cannot compare 2 different types",null,null,{ fileName : "Dynamics.hx", lineNumber : 129, className : "Dynamics", methodName : "compare"});
	if(null == a && null == b) {
		$s.pop();
		return 0;
	}
	if(null == a) {
		$s.pop();
		return -1;
	}
	if(null == b) {
		$s.pop();
		return 1;
	}
	var $e = (Type["typeof"](a));
	switch( $e[1] ) {
	case 1:
		var $tmp = a - b;
		$s.pop();
		return $tmp;
	case 2:
		var $tmp = a < b?-1:a > b?1:0;
		$s.pop();
		return $tmp;
	case 3:
		var $tmp = a == b?0:a?-1:1;
		$s.pop();
		return $tmp;
	case 4:
		var $tmp = Objects.compare(a,b);
		$s.pop();
		return $tmp;
	case 6:
		var c = $e[2];
		var name = Type.getClassName(c);
		switch(name) {
		case "Array":
			var $tmp = Arrays.compare(a,b);
			$s.pop();
			return $tmp;
		case "String":
			var $tmp = Strings.compare(a,b);
			$s.pop();
			return $tmp;
		case "Date":
			var $tmp = Floats.compare(a.getTime(),b.getTime());
			$s.pop();
			return $tmp;
		default:
			var $tmp = Strings.compare(Std.string(a),Std.string(b));
			$s.pop();
			return $tmp;
		}
		break;
	case 7:
		var e = $e[2];
		var $tmp = Enums.compare(a,b);
		$s.pop();
		return $tmp;
	default:
		$s.pop();
		return 0;
	}
	$s.pop();
}
Dynamics.comparef = function(sample) {
	$s.push("Dynamics::comparef");
	var $spos = $s.length;
	var $e = (Type["typeof"](sample));
	switch( $e[1] ) {
	case 1:
		var $tmp = Ints.compare;
		$s.pop();
		return $tmp;
	case 2:
		var $tmp = Floats.compare;
		$s.pop();
		return $tmp;
	case 3:
		var $tmp = Bools.compare;
		$s.pop();
		return $tmp;
	case 4:
		var $tmp = Objects.compare;
		$s.pop();
		return $tmp;
	case 6:
		var c = $e[2];
		var name = Type.getClassName(c);
		switch(name) {
		case "Array":
			var $tmp = Arrays.compare;
			$s.pop();
			return $tmp;
		case "String":
			var $tmp = Strings.compare;
			$s.pop();
			return $tmp;
		case "Date":
			var $tmp = Dates.compare;
			$s.pop();
			return $tmp;
		default:
			var $tmp = function(a,b) {
				$s.push("Dynamics::comparef@181");
				var $spos = $s.length;
				var $tmp = Strings.compare(Std.string(a),Std.string(b));
				$s.pop();
				return $tmp;
				$s.pop();
			};
			$s.pop();
			return $tmp;
		}
		break;
	case 7:
		var e = $e[2];
		var $tmp = Enums.compare;
		$s.pop();
		return $tmp;
	default:
		var $tmp = Dynamics.compare;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Dynamics.clone = function(v) {
	$s.push("Dynamics::clone");
	var $spos = $s.length;
	var $e = (Type["typeof"](v));
	switch( $e[1] ) {
	case 0:
		$s.pop();
		return null;
	case 1:
	case 2:
	case 3:
	case 7:
	case 8:
	case 5:
		$s.pop();
		return v;
	case 4:
		var o = { };
		Objects.copyTo(v,o);
		$s.pop();
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
			$s.pop();
			return a;
		case "String":case "Date":
			$s.pop();
			return v;
		default:
			var o = Type.createEmptyInstance(c);
			var _g = 0, _g1 = Reflect.fields(v);
			while(_g < _g1.length) {
				var field = _g1[_g];
				++_g;
				o[field] = Dynamics.clone(Reflect.field(v,field));
			}
			$s.pop();
			return o;
		}
		break;
	}
	$s.pop();
}
Dynamics.same = function(a,b) {
	$s.push("Dynamics::same");
	var $spos = $s.length;
	var ta = Types.typeName(a), tb = Types.typeName(b);
	if(ta != tb) {
		$s.pop();
		return false;
	}
	var $e = (Type["typeof"](a));
	switch( $e[1] ) {
	case 2:
		var $tmp = Floats.equals(a,b);
		$s.pop();
		return $tmp;
	case 0:
	case 1:
	case 3:
		var $tmp = a == b;
		$s.pop();
		return $tmp;
	case 5:
		var $tmp = Reflect.compareMethods(a,b);
		$s.pop();
		return $tmp;
	case 6:
		var c = $e[2];
		var ca = Type.getClassName(c), cb = Type.getClassName(Type.getClass(b));
		if(ca != cb) {
			$s.pop();
			return false;
		}
		if(Std["is"](a,String) && a != b) {
			$s.pop();
			return false;
		}
		if(Std["is"](a,Array)) {
			var aa = a, ab = b;
			if(aa.length != ab.length) {
				$s.pop();
				return false;
			}
			var _g1 = 0, _g = aa.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(!Dynamics.same(aa[i],ab[i])) {
					$s.pop();
					return false;
				}
			}
			$s.pop();
			return true;
		}
		if(Std["is"](a,Date)) {
			var $tmp = a.getTime() == b.getTime();
			$s.pop();
			return $tmp;
		}
		if(Std["is"](a,Hash) || Std["is"](a,IntHash)) {
			var ha = a, hb = b;
			var ka = Iterators.array(ha.keys()), kb = Iterators.array(hb.keys());
			if(ka.length != kb.length) {
				$s.pop();
				return false;
			}
			var _g = 0;
			while(_g < ka.length) {
				var key = ka[_g];
				++_g;
				if(!hb.exists(key) || !Dynamics.same(ha.get(key),hb.get(key))) {
					$s.pop();
					return false;
				}
			}
			$s.pop();
			return true;
		}
		var t = false;
		if((t = Iterators.isIterator(a)) || Iterables.isIterable(a)) {
			var va = t?Iterators.array(a):Iterators.array(a.iterator()), vb = t?Iterators.array(b):Iterators.array(b.iterator());
			if(va.length != vb.length) {
				$s.pop();
				return false;
			}
			var _g1 = 0, _g = va.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(!Dynamics.same(va[i],vb[i])) {
					$s.pop();
					return false;
				}
			}
			$s.pop();
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
			if(!Dynamics.same(va,vb)) {
				$s.pop();
				return false;
			}
		}
		$s.pop();
		return true;
	case 7:
		var e = $e[2];
		var ea = Type.getEnumName(e), eb = Type.getEnumName(Type.getEnum(b));
		if(ea != eb) {
			$s.pop();
			return false;
		}
		if(a[1] != b[1]) {
			$s.pop();
			return false;
		}
		var pa = a.slice(2), pb = b.slice(2);
		var _g1 = 0, _g = pa.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(!Dynamics.same(pa[i],pb[i])) {
				$s.pop();
				return false;
			}
		}
		$s.pop();
		return true;
	case 4:
		var fa = Reflect.fields(a), fb = Reflect.fields(b);
		var _g = 0;
		while(_g < fa.length) {
			var field = fa[_g];
			++_g;
			fb.remove(field);
			if(!Reflect.hasField(b,field)) {
				$s.pop();
				return false;
			}
			var va = Reflect.field(a,field);
			if(Reflect.isFunction(va)) continue;
			var vb = Reflect.field(b,field);
			if(!Dynamics.same(va,vb)) {
				$s.pop();
				return false;
			}
		}
		if(fb.length > 0) {
			$s.pop();
			return false;
		}
		var t = false;
		if((t = Iterators.isIterator(a)) || Iterables.isIterable(a)) {
			if(t && !Iterators.isIterator(b)) {
				$s.pop();
				return false;
			}
			if(!t && !Iterables.isIterable(b)) {
				$s.pop();
				return false;
			}
			var aa = t?Iterators.array(a):Iterators.array(a.iterator());
			var ab = t?Iterators.array(b):Iterators.array(b.iterator());
			if(aa.length != ab.length) {
				$s.pop();
				return false;
			}
			var _g1 = 0, _g = aa.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(!Dynamics.same(aa[i],ab[i])) {
					$s.pop();
					return false;
				}
			}
			$s.pop();
			return true;
		}
		$s.pop();
		return true;
	case 8:
		var $tmp = (function($this) {
			var $r;
			throw "Unable to compare two unknown types";
			return $r;
		}(this));
		$s.pop();
		return $tmp;
	}
	var $tmp = (function($this) {
		var $r;
		throw new thx.error.Error("Unable to compare values: {0} and {1}",[a,b],null,{ fileName : "Dynamics.hx", lineNumber : 364, className : "Dynamics", methodName : "same"});
		return $r;
	}(this));
	$s.pop();
	return $tmp;
	$s.pop();
}
Dynamics.number = function(v) {
	$s.push("Dynamics::number");
	var $spos = $s.length;
	var $tmp = Number(v);
	$s.pop();
	return $tmp;
	$s.pop();
}
Dynamics.prototype.__class__ = Dynamics;
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
rg.layout.Frame.prototype.setLayout = function(x,y,width,height) {
	$s.push("rg.layout.Frame::setLayout");
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
if(!rg.query) rg.query = {}
rg.query.Transform = function() { }
rg.query.Transform.__name__ = ["rg","query","Transform"];
rg.query.Transform.timeSeries = function(query,label) {
	$s.push("rg.query.Transform::timeSeries");
	var $spos = $s.length;
	var t = rg.query.Transform.arrayTimeSeries(query,function() {
		$s.push("rg.query.Transform::timeSeries@17");
		var $spos = $s.length;
		var $tmp = [label];
		$s.pop();
		return $tmp;
		$s.pop();
	});
	var $tmp = function(data) {
		$s.push("rg.query.Transform::timeSeries@18");
		var $spos = $s.length;
		var $tmp = t([data]);
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.query.Transform.arrayTimeSeries = function(query,labels) {
	$s.push("rg.query.Transform::arrayTimeSeries");
	var $spos = $s.length;
	var $tmp = function(data) {
		$s.push("rg.query.Transform::arrayTimeSeries@26");
		var $spos = $s.length;
		haxe.Log.trace(data,{ fileName : "Transform.hx", lineNumber : 28, className : "rg.query.Transform", methodName : "arrayTimeSeries"});
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
		var $tmp = { minx : minx, maxx : maxx, miny : miny, maxy : maxy, data : result};
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.query.Transform.prototype.__class__ = rg.query.Transform;
List = function(p) {
	if( p === $_ ) return;
	$s.push("List::new");
	var $spos = $s.length;
	this.length = 0;
	$s.pop();
}
List.__name__ = ["List"];
List.prototype.h = null;
List.prototype.q = null;
List.prototype.length = null;
List.prototype.add = function(item) {
	$s.push("List::add");
	var $spos = $s.length;
	var x = [item];
	if(this.h == null) this.h = x; else this.q[1] = x;
	this.q = x;
	this.length++;
	$s.pop();
}
List.prototype.push = function(item) {
	$s.push("List::push");
	var $spos = $s.length;
	var x = [item,this.h];
	this.h = x;
	if(this.q == null) this.q = x;
	this.length++;
	$s.pop();
}
List.prototype.first = function() {
	$s.push("List::first");
	var $spos = $s.length;
	var $tmp = this.h == null?null:this.h[0];
	$s.pop();
	return $tmp;
	$s.pop();
}
List.prototype.last = function() {
	$s.push("List::last");
	var $spos = $s.length;
	var $tmp = this.q == null?null:this.q[0];
	$s.pop();
	return $tmp;
	$s.pop();
}
List.prototype.pop = function() {
	$s.push("List::pop");
	var $spos = $s.length;
	if(this.h == null) {
		$s.pop();
		return null;
	}
	var x = this.h[0];
	this.h = this.h[1];
	if(this.h == null) this.q = null;
	this.length--;
	$s.pop();
	return x;
	$s.pop();
}
List.prototype.isEmpty = function() {
	$s.push("List::isEmpty");
	var $spos = $s.length;
	var $tmp = this.h == null;
	$s.pop();
	return $tmp;
	$s.pop();
}
List.prototype.clear = function() {
	$s.push("List::clear");
	var $spos = $s.length;
	this.h = null;
	this.q = null;
	this.length = 0;
	$s.pop();
}
List.prototype.remove = function(v) {
	$s.push("List::remove");
	var $spos = $s.length;
	var prev = null;
	var l = this.h;
	while(l != null) {
		if(l[0] == v) {
			if(prev == null) this.h = l[1]; else prev[1] = l[1];
			if(this.q == l) this.q = prev;
			this.length--;
			$s.pop();
			return true;
		}
		prev = l;
		l = l[1];
	}
	$s.pop();
	return false;
	$s.pop();
}
List.prototype.iterator = function() {
	$s.push("List::iterator");
	var $spos = $s.length;
	var $tmp = { h : this.h, hasNext : function() {
		$s.push("List::iterator@155");
		var $spos = $s.length;
		var $tmp = this.h != null;
		$s.pop();
		return $tmp;
		$s.pop();
	}, next : function() {
		$s.push("List::iterator@158");
		var $spos = $s.length;
		if(this.h == null) {
			$s.pop();
			return null;
		}
		var x = this.h[0];
		this.h = this.h[1];
		$s.pop();
		return x;
		$s.pop();
	}};
	$s.pop();
	return $tmp;
	$s.pop();
}
List.prototype.toString = function() {
	$s.push("List::toString");
	var $spos = $s.length;
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
	var $tmp = s.b.join("");
	$s.pop();
	return $tmp;
	$s.pop();
}
List.prototype.join = function(sep) {
	$s.push("List::join");
	var $spos = $s.length;
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	while(l != null) {
		if(first) first = false; else s.b[s.b.length] = sep;
		s.b[s.b.length] = l[0];
		l = l[1];
	}
	var $tmp = s.b.join("");
	$s.pop();
	return $tmp;
	$s.pop();
}
List.prototype.filter = function(f) {
	$s.push("List::filter");
	var $spos = $s.length;
	var l2 = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		if(f(v)) l2.add(v);
	}
	$s.pop();
	return l2;
	$s.pop();
}
List.prototype.map = function(f) {
	$s.push("List::map");
	var $spos = $s.length;
	var b = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		b.add(f(v));
	}
	$s.pop();
	return b;
	$s.pop();
}
List.prototype.__class__ = List;
if(!rg.svg) rg.svg = {}
rg.svg.SvgPanel = function(frame) {
	if( frame === $_ ) return;
	$s.push("rg.svg.SvgPanel::new");
	var $spos = $s.length;
	this.frame = frame;
	frame.change = $closure(this,"reframe");
	this.onResize = new hxevents.Notifier();
	this._layers = [];
	$s.pop();
}
rg.svg.SvgPanel.__name__ = ["rg","svg","SvgPanel"];
rg.svg.SvgPanel.prototype.frame = null;
rg.svg.SvgPanel.prototype.svg = null;
rg.svg.SvgPanel.prototype.parent = null;
rg.svg.SvgPanel.prototype.onResize = null;
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
	this.svg = container.append("svg:g").attr("class").string("panel").attr("transform").string("translate(" + this.frame.x + "," + this.frame.y + ")");
	this.svg.append("svg:rect").attr("class").string("panel-frame").attr("width")["float"](this.frame.width).attr("height")["float"](this.frame.height);
	$s.pop();
}
rg.svg.SvgPanel.prototype.redraw = function() {
	$s.push("rg.svg.SvgPanel::redraw");
	var $spos = $s.length;
	this._layers.forEach(function(l,i) {
		$s.push("rg.svg.SvgPanel::redraw@70");
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
	this.onResize.dispatch();
	$s.pop();
}
rg.svg.SvgPanel.prototype.__class__ = rg.svg.SvgPanel;
if(!thx.svg) thx.svg = {}
thx.svg.Diagonal = function(p) {
	if( p === $_ ) return;
	$s.push("thx.svg.Diagonal::new");
	var $spos = $s.length;
	this._projection = thx.svg.Diagonal.diagonalProjection;
	$s.pop();
}
thx.svg.Diagonal.__name__ = ["thx","svg","Diagonal"];
thx.svg.Diagonal.diagonalProjection = function(d,_) {
	$s.push("thx.svg.Diagonal::diagonalProjection");
	var $spos = $s.length;
	$s.pop();
	return d;
	$s.pop();
}
thx.svg.Diagonal.forObject = function() {
	$s.push("thx.svg.Diagonal::forObject");
	var $spos = $s.length;
	var $tmp = new thx.svg.Diagonal().sourcef(function(d,_i) {
		$s.push("thx.svg.Diagonal::forObject@54");
		var $spos = $s.length;
		var $tmp = [d.x0,d.y0];
		$s.pop();
		return $tmp;
		$s.pop();
	}).targetf(function(d,_i) {
		$s.push("thx.svg.Diagonal::forObject@55");
		var $spos = $s.length;
		var $tmp = [d.x1,d.y1];
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Diagonal.prototype._source = null;
thx.svg.Diagonal.prototype._target = null;
thx.svg.Diagonal.prototype._projection = null;
thx.svg.Diagonal.prototype.diagonal = function(d,i) {
	$s.push("thx.svg.Diagonal::diagonal");
	var $spos = $s.length;
	var p0 = this._source(d,i), p3 = this._target(d,i), m = (p0[1] + p3[1]) / 2, p = [p0,[p0[0],m],[p3[0],m],p3];
	var p2 = p.map(this._projection);
	var $tmp = "M" + p2[0][0] + "," + p2[0][1] + "C" + p2[1][0] + "," + p2[1][1] + " " + p2[2][0] + "," + p2[2][1] + " " + p2[3][0] + "," + p2[3][1];
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Diagonal.prototype.getSource = function() {
	$s.push("thx.svg.Diagonal::getSource");
	var $spos = $s.length;
	var $tmp = this._source;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Diagonal.prototype.sourcef = function(x) {
	$s.push("thx.svg.Diagonal::sourcef");
	var $spos = $s.length;
	this._source = x;
	$s.pop();
	return this;
	$s.pop();
}
thx.svg.Diagonal.prototype.getTarget = function() {
	$s.push("thx.svg.Diagonal::getTarget");
	var $spos = $s.length;
	var $tmp = this._target;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Diagonal.prototype.targetf = function(x) {
	$s.push("thx.svg.Diagonal::targetf");
	var $spos = $s.length;
	this._target = x;
	$s.pop();
	return this;
	$s.pop();
}
thx.svg.Diagonal.prototype.getProjection = function() {
	$s.push("thx.svg.Diagonal::getProjection");
	var $spos = $s.length;
	var $tmp = this._projection;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Diagonal.prototype.projection = function(x) {
	$s.push("thx.svg.Diagonal::projection");
	var $spos = $s.length;
	this._projection = x;
	$s.pop();
	return this;
	$s.pop();
}
thx.svg.Diagonal.prototype.__class__ = thx.svg.Diagonal;
if(!thx.js) thx.js = {}
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
thx.js.AccessAttribute.prototype.getFloat = function() {
	$s.push("thx.js.AccessAttribute::getFloat");
	var $spos = $s.length;
	var v = this.get();
	if(thx.js.AccessAttribute.refloat.match(v)) {
		var $tmp = Std.parseFloat(thx.js.AccessAttribute.refloat.matched(1));
		$s.pop();
		return $tmp;
	} else {
		var $tmp = Math.NaN;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
thx.js.AccessAttribute.prototype.remove = function() {
	$s.push("thx.js.AccessAttribute::remove");
	var $spos = $s.length;
	if(null == this.qname) {
		var n = this.name;
		this.selection.eachNode(function(node,i) {
			$s.push("thx.js.AccessAttribute::remove@43");
			var $spos = $s.length;
			node.removeAttribute(n);
			$s.pop();
		});
	} else {
		var q = this.qname;
		this.selection.eachNode(function(node,i) {
			$s.push("thx.js.AccessAttribute::remove@46");
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
			$s.push("thx.js.AccessAttribute::string@55");
			var $spos = $s.length;
			node.setAttribute(n,v);
			$s.pop();
		});
	} else {
		var q = this.qname;
		this.selection.eachNode(function(node,i) {
			$s.push("thx.js.AccessAttribute::string@58");
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
			$s.push("thx.js.AccessAttribute::float@68");
			var $spos = $s.length;
			node.setAttribute(n,s);
			$s.pop();
		});
	} else {
		var q = this.qname;
		this.selection.eachNode(function(node,i) {
			$s.push("thx.js.AccessAttribute::float@71");
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
			$s.push("thx.js.AccessDataAttribute::stringf@89");
			var $spos = $s.length;
			var s = v(Reflect.field(node,"__data__"),i);
			if(null == s) node.removeAttribute(n); else node.setAttribute(n,s);
			$s.pop();
		});
	} else {
		var q = this.qname;
		this.selection.eachNode(function(node,i) {
			$s.push("thx.js.AccessDataAttribute::stringf@98");
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
			$s.push("thx.js.AccessDataAttribute::floatf@113");
			var $spos = $s.length;
			var s = v(Reflect.field(node,"__data__"),i);
			if(null == s) node.removeAttribute(n); else node.setAttribute(n,"" + s);
			$s.pop();
		});
	} else {
		var q = this.qname;
		this.selection.eachNode(function(node,i) {
			$s.push("thx.js.AccessDataAttribute::floatf@122");
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
		$s.push("thx.js.AccessDataAttribute::data@135");
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
Bools.compare = function(a,b) {
	$s.push("Bools::compare");
	var $spos = $s.length;
	var $tmp = a == b?0:a?-1:1;
	$s.pop();
	return $tmp;
	$s.pop();
}
Bools.prototype.__class__ = Bools;
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
rg.svg.ISvgEffect = function() { }
rg.svg.ISvgEffect.__name__ = ["rg","svg","ISvgEffect"];
rg.svg.ISvgEffect.prototype.appendTo = null;
rg.svg.ISvgEffect.prototype.__class__ = rg.svg.ISvgEffect;
if(!rg.svg.effects) rg.svg.effects = {}
rg.svg.effects.DropShadow = function(opacity,dx,dy,blur) {
	if( opacity === $_ ) return;
	$s.push("rg.svg.effects.DropShadow::new");
	var $spos = $s.length;
	if(blur == null) blur = 1.0;
	if(dx == null) dx = 1.5;
	if(opacity == null) opacity = 0.4;
	this.opacity = opacity;
	this.dx = dx;
	this.dy = null == dy?3.0 / 4 * dx:dy;
	this.blur = blur;
	$s.pop();
}
rg.svg.effects.DropShadow.__name__ = ["rg","svg","effects","DropShadow"];
rg.svg.effects.DropShadow.prototype.opacity = null;
rg.svg.effects.DropShadow.prototype.dx = null;
rg.svg.effects.DropShadow.prototype.dy = null;
rg.svg.effects.DropShadow.prototype.blur = null;
rg.svg.effects.DropShadow.prototype.appendTo = function(container,id) {
	$s.push("rg.svg.effects.DropShadow::appendTo");
	var $spos = $s.length;
	var filter = container.append("svg:filter").attr("x").string("-20%").attr("y").string("-20%").attr("width").string("140%").attr("height").string("140%").attr("id").string(id);
	filter.append("svg:feGaussianBlur").attr("in").string("SourceAlpha").attr("stdDeviation")["float"](this.blur).attr("result").string("dsblur");
	filter.append("svg:feColorMatrix").attr("in").string("dsblur").attr("type").string("matrix").attr("values").string("1 0 0 0 0 " + "0 1 0 0 0 " + "0 0 1 0 0 " + "0 0 0 " + this.opacity + " 0").attr("result").string("dscolor");
	filter.append("svg:feOffset").attr("in").string("dscolor").attr("dx")["float"](this.dx).attr("dy")["float"](this.dy).attr("result").string("dsoffset");
	var merge = filter.append("svg:feMerge");
	merge.append("svg:feMergeNode").attr("in").string("dsoffset");
	merge.append("svg:feMergeNode").attr("in").string("SourceGraphic");
	$s.pop();
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
	$s.pop();
}
thx.js.BaseSelection.prototype.parentNode = null;
thx.js.BaseSelection.prototype.groups = null;
thx.js.BaseSelection.prototype.select = function(selector) {
	$s.push("thx.js.BaseSelection::select");
	var $spos = $s.length;
	var $tmp = this._select(function(el) {
		$s.push("thx.js.BaseSelection::select@361");
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
		$s.push("thx.js.BaseSelection::selectAll@368");
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
		node.insertBefore(n,null != before?before:thx.js.Dom.select(beforeSelector).node());
		$s.pop();
		return n;
		$s.pop();
	};
	var insertNsDom = function(node) {
		$s.push("thx.js.BaseSelection::insert@421");
		var $spos = $s.length;
		var n = js.Lib.document.createElementNS(qname.space,qname.local);
		node.insertBefore(n,null != before?before:thx.js.Dom.select(beforeSelector).node());
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
		$s.push("thx.js.BaseSelection::node@465");
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
		$s.push("thx.js.BaseSelection::empty@470");
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
thx.js.BaseSelection.prototype.onNode = function(type,listener,capture) {
	$s.push("thx.js.BaseSelection::onNode");
	var $spos = $s.length;
	if(capture == null) capture = false;
	var i = type.indexOf("."), typo = i < 0?type:type.substr(0,i);
	var $tmp = this.eachNode(function(n,i1) {
		$s.push("thx.js.BaseSelection::onNode@500");
		var $spos = $s.length;
		var l = function(e) {
			$s.push("thx.js.BaseSelection::onNode@500@501");
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
			n.removeEventListener(typo,Reflect.field(n,"__on" + type),capture);
			Reflect.deleteField(n,"__on" + type);
		}
		if(null != listener) {
			n["__on" + type] = l;
			n.addEventListener(typo,l,capture);
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
		throw new thx.error.AbstractMethod({ fileName : "Selection.hx", lineNumber : 526, className : "thx.js.BaseSelection", methodName : "createSelection"});
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
				subgroup.parentNode = node1;
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
thx.js.ISelectorEngine = function() { }
thx.js.ISelectorEngine.__name__ = ["thx","js","ISelectorEngine"];
thx.js.ISelectorEngine.prototype.select = null;
thx.js.ISelectorEngine.prototype.selectAll = null;
thx.js.ISelectorEngine.prototype.__class__ = thx.js.ISelectorEngine;
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
if(!rg.util) rg.util = {}
rg.util.RGStrings = function() { }
rg.util.RGStrings.__name__ = ["rg","util","RGStrings"];
rg.util.RGStrings.humanize = function(d) {
	$s.push("rg.util.RGStrings::humanize");
	var $spos = $s.length;
	if(Std["is"](d,Int)) {
		var $tmp = Ints.format(d);
		$s.pop();
		return $tmp;
	}
	if(Std["is"](d,Float)) {
		var $tmp = Floats.format(d);
		$s.pop();
		return $tmp;
	}
	var s = Std.string(d);
	if(rg.util.RGStrings.range.match(s)) {
		var v1 = rg.util.RGStrings.range.matched(1), v2 = rg.util.RGStrings.range.matched(2);
		if(null != v1) v1 = Ints.canParse(v1)?Ints.format(Ints.parse(v1)):Floats.format(Floats.parse(v1)); else v1 = "";
		if(null != v2) v2 = Ints.canParse(v2)?Ints.format(Ints.parse(v2)):Floats.format(Floats.parse(v2)); else v2 = "";
		var $tmp = rg.util.RGStrings.range.matchedLeft() + v1 + "-" + v2 + rg.util.RGStrings.range.matchedRight();
		$s.pop();
		return $tmp;
	} else {
		var $tmp = Strings.humanize(s);
		$s.pop();
		return $tmp;
	}
	$s.pop();
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
	$s.push("thx.math.scale.NumericScale::new");
	var $spos = $s.length;
	this._domain = [0.0,1.0];
	this._range = [0.0,1.0];
	this.f = Floats.interpolatef;
	this._clamp = false;
	this.rescale();
	$s.pop();
}
thx.math.scale.NumericScale.__name__ = ["thx","math","scale","NumericScale"];
thx.math.scale.NumericScale.scaleBilinear = function(domain,range,uninterpolate,interpolate) {
	$s.push("thx.math.scale.NumericScale::scaleBilinear");
	var $spos = $s.length;
	var u = uninterpolate(domain[0],domain[1]), i = interpolate(range[0],range[1],null);
	var $tmp = function(x) {
		$s.push("thx.math.scale.NumericScale::scaleBilinear@109");
		var $spos = $s.length;
		var $tmp = i(u(x));
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.NumericScale.scalePolylinear = function(domain,range,uninterpolate,interpolate) {
	$s.push("thx.math.scale.NumericScale::scalePolylinear");
	var $spos = $s.length;
	var u = [], i = [];
	var _g1 = 1, _g = domain.length;
	while(_g1 < _g) {
		var j = _g1++;
		u.push(uninterpolate(domain[j - 1],domain[j]));
		i.push(interpolate(range[j - 1],range[j],null));
	}
	var $tmp = function(x) {
		$s.push("thx.math.scale.NumericScale::scalePolylinear@122");
		var $spos = $s.length;
		var j = Arrays.bisectRight(domain,x,1,domain.length - 1) - 1;
		var $tmp = i[j](u[j](x));
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.NumericScale.prototype._domain = null;
thx.math.scale.NumericScale.prototype._range = null;
thx.math.scale.NumericScale.prototype.f = null;
thx.math.scale.NumericScale.prototype._clamp = null;
thx.math.scale.NumericScale.prototype._output = null;
thx.math.scale.NumericScale.prototype._input = null;
thx.math.scale.NumericScale.prototype.rescale = function() {
	$s.push("thx.math.scale.NumericScale::rescale");
	var $spos = $s.length;
	var linear = this._domain.length == 2?thx.math.scale.NumericScale.scaleBilinear:thx.math.scale.NumericScale.scalePolylinear, uninterpolate = this._clamp?Floats.uninterpolateClampf:Floats.uninterpolatef;
	this._output = linear(this._domain,this._range,uninterpolate,this.f);
	this._input = linear(this._range,this._domain,uninterpolate,Floats.interpolatef);
	var $tmp = this;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.NumericScale.prototype.scale = function(x,_) {
	$s.push("thx.math.scale.NumericScale::scale");
	var $spos = $s.length;
	var $tmp = this._output(x);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.NumericScale.prototype.invert = function(y,_) {
	$s.push("thx.math.scale.NumericScale::invert");
	var $spos = $s.length;
	var $tmp = this._input(y);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.NumericScale.prototype.getDomain = function() {
	$s.push("thx.math.scale.NumericScale::getDomain");
	var $spos = $s.length;
	var $tmp = this._domain;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.NumericScale.prototype.domain = function(d) {
	$s.push("thx.math.scale.NumericScale::domain");
	var $spos = $s.length;
	this._domain = d;
	var $tmp = this.rescale();
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.NumericScale.prototype.getRange = function() {
	$s.push("thx.math.scale.NumericScale::getRange");
	var $spos = $s.length;
	var $tmp = this._range;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.NumericScale.prototype.range = function(r) {
	$s.push("thx.math.scale.NumericScale::range");
	var $spos = $s.length;
	this._range = r;
	var $tmp = this.rescale();
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.NumericScale.prototype.rangeRound = function(r) {
	$s.push("thx.math.scale.NumericScale::rangeRound");
	var $spos = $s.length;
	this.range(r);
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
	this.f = x;
	var $tmp = this.rescale();
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
	var $tmp = this.rescale();
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.NumericScale.prototype.ticks = function() {
	$s.push("thx.math.scale.NumericScale::ticks");
	var $spos = $s.length;
	var $tmp = (function($this) {
		var $r;
		throw new thx.error.AbstractMethod({ fileName : "NumericScale.hx", lineNumber : 86, className : "thx.math.scale.NumericScale", methodName : "ticks"});
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
		throw new thx.error.AbstractMethod({ fileName : "NumericScale.hx", lineNumber : 91, className : "thx.math.scale.NumericScale", methodName : "tickFormat"});
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
		$s.push("thx.math.scale.NumericScale::transform@96");
		var $spos = $s.length;
		var $tmp = (v - t) / scale;
		$s.pop();
		return $tmp;
		$s.pop();
	});
	this.domain([a,b]);
	var r = range.map($closure(this,"invert"));
	this.domain(r);
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
thx.math.scale.NumericScale.__interfaces__ = [thx.math.scale.IScale];
thx.math.scale.Pow = function(p) {
	if( p === $_ ) return;
	$s.push("thx.math.scale.Pow::new");
	var $spos = $s.length;
	thx.math.scale.NumericScale.call(this);
	this.tick = new thx.math.scale.Linear();
	this._exponent = 1;
	this.powb = this.powp = function(v) {
		$s.push("thx.math.scale.Pow::new@24");
		var $spos = $s.length;
		$s.pop();
		return v;
		$s.pop();
	};
	$s.pop();
}
thx.math.scale.Pow.__name__ = ["thx","math","scale","Pow"];
thx.math.scale.Pow.__super__ = thx.math.scale.NumericScale;
for(var k in thx.math.scale.NumericScale.prototype ) thx.math.scale.Pow.prototype[k] = thx.math.scale.NumericScale.prototype[k];
thx.math.scale.Pow.sqrt = function() {
	$s.push("thx.math.scale.Pow::sqrt");
	var $spos = $s.length;
	var $tmp = new thx.math.scale.Pow().exponent(.5);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Pow._pow = function(e) {
	$s.push("thx.math.scale.Pow::_pow");
	var $spos = $s.length;
	var $tmp = function(v) {
		$s.push("thx.math.scale.Pow::_pow@89");
		var $spos = $s.length;
		var $tmp = Math.pow(v,e);
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Pow._pown = function(e) {
	$s.push("thx.math.scale.Pow::_pown");
	var $spos = $s.length;
	var $tmp = function(v) {
		$s.push("thx.math.scale.Pow::_pown@94");
		var $spos = $s.length;
		var $tmp = -Math.pow(-v,e);
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Pow.prototype.tick = null;
thx.math.scale.Pow.prototype._exponent = null;
thx.math.scale.Pow.prototype.powp = null;
thx.math.scale.Pow.prototype.powb = null;
thx.math.scale.Pow.prototype.scale = function(x,i) {
	$s.push("thx.math.scale.Pow::scale");
	var $spos = $s.length;
	var $tmp = thx.math.scale.NumericScale.prototype.scale.call(this,this.powp(x));
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Pow.prototype.invert = function(x,i) {
	$s.push("thx.math.scale.Pow::invert");
	var $spos = $s.length;
	var $tmp = this.powb(thx.math.scale.NumericScale.prototype.invert.call(this,x));
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Pow.prototype.getDomain = function() {
	$s.push("thx.math.scale.Pow::getDomain");
	var $spos = $s.length;
	var me = this;
	var $tmp = thx.math.scale.NumericScale.prototype.getDomain.call(this).map(function(d,_) {
		$s.push("thx.math.scale.Pow::getDomain@39");
		var $spos = $s.length;
		var $tmp = me.powb(d);
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Pow.prototype.domain = function(d) {
	$s.push("thx.math.scale.Pow::domain");
	var $spos = $s.length;
	var pow = Arrays.min(d) < 0?thx.math.scale.Pow._pown:thx.math.scale.Pow._pow;
	this.powp = pow(this._exponent);
	this.powb = pow(1.0 / this._exponent);
	thx.math.scale.NumericScale.prototype.domain.call(this,[this.powp(d[0]),this.powp(d[1])]);
	this.tick.domain(d);
	$s.pop();
	return this;
	$s.pop();
}
thx.math.scale.Pow.prototype.ticks = function() {
	$s.push("thx.math.scale.Pow::ticks");
	var $spos = $s.length;
	var $tmp = this.tick.ticks();
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Pow.prototype.tickFormat = function(v,i) {
	$s.push("thx.math.scale.Pow::tickFormat");
	var $spos = $s.length;
	var $tmp = this.tick.tickFormat(v,i);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Pow.prototype.getModulo = function() {
	$s.push("thx.math.scale.Pow::getModulo");
	var $spos = $s.length;
	var $tmp = this.tick.getModulo();
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Pow.prototype.modulo = function(v) {
	$s.push("thx.math.scale.Pow::modulo");
	var $spos = $s.length;
	this.tick.modulo(v);
	$s.pop();
	return this;
	$s.pop();
}
thx.math.scale.Pow.prototype.getExponent = function() {
	$s.push("thx.math.scale.Pow::getExponent");
	var $spos = $s.length;
	var $tmp = this._exponent;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Pow.prototype.exponent = function(x) {
	$s.push("thx.math.scale.Pow::exponent");
	var $spos = $s.length;
	var d = this.getDomain();
	this._exponent = x;
	this.domain(d);
	$s.pop();
	return this;
	$s.pop();
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
	$s.push("rg.svg.SvgLayer::new");
	var $spos = $s.length;
	this.panel = panel;
	var p = panel;
	p.addLayer(this);
	this.svg = panel.svg.append("svg:g");
	this.svg.attr("class").string("layer");
	panel.onResize.add($closure(this,"_resize"));
	this.init();
	this._resize();
	$s.pop();
}
rg.svg.SvgLayer.__name__ = ["rg","svg","SvgLayer"];
rg.svg.SvgLayer.prototype.panel = null;
rg.svg.SvgLayer.prototype.svg = null;
rg.svg.SvgLayer.prototype.width = null;
rg.svg.SvgLayer.prototype.height = null;
rg.svg.SvgLayer.prototype.customClass = null;
rg.svg.SvgLayer.prototype.init = function() {
	$s.push("rg.svg.SvgLayer::init");
	var $spos = $s.length;
	$s.pop();
}
rg.svg.SvgLayer.prototype._resize = function() {
	$s.push("rg.svg.SvgLayer::_resize");
	var $spos = $s.length;
	this.width = this.panel.frame.width;
	this.height = this.panel.frame.height;
	this.resize();
	this.redraw();
	$s.pop();
}
rg.svg.SvgLayer.prototype.resize = function() {
	$s.push("rg.svg.SvgLayer::resize");
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
rg.svg.SvgLayer.prototype.setCustomClass = function(v) {
	$s.push("rg.svg.SvgLayer::setCustomClass");
	var $spos = $s.length;
	if(null != this.customClass) this.svg.classed().remove(this.customClass);
	this.svg.classed().add(v);
	var $tmp = this.customClass = v;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgLayer.prototype.__class__ = rg.svg.SvgLayer;
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
thx.color.Hsl.darker = function(color,t,equation) {
	$s.push("thx.color.Hsl::darker");
	var $spos = $s.length;
	var v = color.lightness * t;
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
thx.color.Hsl.interpolatef = function(a,b,equation) {
	$s.push("thx.color.Hsl::interpolatef");
	var $spos = $s.length;
	var $tmp = function(t) {
		$s.push("thx.color.Hsl::interpolatef@101");
		var $spos = $s.length;
		var $tmp = new thx.color.Hsl(Floats.interpolate(t,a.hue,b.hue,equation),Floats.interpolate(t,a.saturation,b.saturation,equation),Floats.interpolate(t,a.lightness,b.lightness,equation));
		$s.pop();
		return $tmp;
		$s.pop();
	};
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
thx.math.Const = function() { }
thx.math.Const.__name__ = ["thx","math","Const"];
thx.math.Const.prototype.__class__ = thx.math.Const;
rg.query.TimeQuery = function(p) {
	if( p === $_ ) return;
	$s.push("rg.query.TimeQuery::new");
	var $spos = $s.length;
	this.onChangePeriodicity = new hxevents.Dispatcher();
	this.onChangeRange = new hxevents.Dispatcher();
	this.startLimit = rg.query.DateLimit.NoLimit;
	this.endLimit = rg.query.DateLimit.NoLimit;
	this.autosetPeriodicity = true;
	this.setPeriodicity("eternity");
	$s.pop();
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
	$s.push("rg.query.TimeQuery::close");
	var $spos = $s.length;
	this.onChangePeriodicity.clear();
	this.onChangeRange.clear();
	$s.pop();
}
rg.query.TimeQuery.prototype.update = function() {
	$s.push("rg.query.TimeQuery::update");
	var $spos = $s.length;
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
	$s.pop();
}
rg.query.TimeQuery.prototype.queryStartTime = function() {
	$s.push("rg.query.TimeQuery::queryStartTime");
	var $spos = $s.length;
	var $tmp = null == this.start?0:this.start.getTime();
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.query.TimeQuery.prototype.queryEndTime = function() {
	$s.push("rg.query.TimeQuery::queryEndTime");
	var $spos = $s.length;
	var $tmp = null == this.end?0:this.end.getTime();
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.query.TimeQuery.prototype.getDateLimit = function(limit) {
	$s.push("rg.query.TimeQuery::getDateLimit");
	var $spos = $s.length;
	var $e = (limit);
	switch( $e[1] ) {
	case 0:
		$s.pop();
		return null;
	case 1:
		var d = $e[2];
		$s.pop();
		return d;
	case 2:
		var f = $e[2];
		var $tmp = f();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
rg.query.TimeQuery.prototype.setPeriodicity = function(v) {
	$s.push("rg.query.TimeQuery::setPeriodicity");
	var $spos = $s.length;
	if(null == v) v = "eternity"; else {
		v = v.toLowerCase();
		if(!rg.util.Periodicity.isValid(v)) throw new thx.error.Error("invalid periodicity '{0}'",null,v,{ fileName : "TimeQuery.hx", lineNumber : 95, className : "rg.query.TimeQuery", methodName : "setPeriodicity"});
	}
	if(v != this.periodicity) this.onChangePeriodicity.dispatch(this.periodicity = v);
	var $tmp = this.periodicity;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.query.TimeQuery.prototype.__class__ = rg.query.TimeQuery;
thx.math.scale.Linears = function() { }
thx.math.scale.Linears.__name__ = ["thx","math","scale","Linears"];
thx.math.scale.Linears.forString = function() {
	$s.push("thx.math.scale.Linears::forString");
	var $spos = $s.length;
	var $tmp = new thx.math.scale.LinearT().interpolatef(Strings.interpolatef);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Linears.forHsl = function() {
	$s.push("thx.math.scale.Linears::forHsl");
	var $spos = $s.length;
	var $tmp = new thx.math.scale.LinearT().interpolatef(thx.color.Hsl.interpolatef);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Linears.forHslString = function() {
	$s.push("thx.math.scale.Linears::forHslString");
	var $spos = $s.length;
	var $tmp = new thx.math.scale.LinearT().interpolatef(function(a,b,f) {
		$s.push("thx.math.scale.Linears::forHslString@28");
		var $spos = $s.length;
		if(Strings.empty(a) || Strings.empty(b)) {
			var $tmp = function(_) {
				$s.push("thx.math.scale.Linears::forHslString@28@30");
				var $spos = $s.length;
				$s.pop();
				return "";
				$s.pop();
			};
			$s.pop();
			return $tmp;
		}
		var ca = thx.color.Hsl.toHsl(thx.color.Colors.parse(a)), cb = thx.color.Hsl.toHsl(thx.color.Colors.parse(b)), i = thx.color.Hsl.interpolatef(ca,cb,f);
		var $tmp = function(t) {
			$s.push("thx.math.scale.Linears::forHslString@28@34");
			var $spos = $s.length;
			var $tmp = i(t).toHslString();
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Linears.forRgb = function() {
	$s.push("thx.math.scale.Linears::forRgb");
	var $spos = $s.length;
	var $tmp = new thx.math.scale.LinearT().interpolatef(thx.color.Rgb.interpolatef);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Linears.forRgbString = function() {
	$s.push("thx.math.scale.Linears::forRgbString");
	var $spos = $s.length;
	var $tmp = new thx.math.scale.LinearT().interpolatef(function(a,b,f) {
		$s.push("thx.math.scale.Linears::forRgbString@46");
		var $spos = $s.length;
		if(Strings.empty(a) || Strings.empty(b)) {
			var $tmp = function(_) {
				$s.push("thx.math.scale.Linears::forRgbString@46@48");
				var $spos = $s.length;
				$s.pop();
				return "";
				$s.pop();
			};
			$s.pop();
			return $tmp;
		}
		var ca = thx.color.Colors.parse(a), cb = thx.color.Colors.parse(b), i = thx.color.Rgb.interpolatef(ca,cb,f);
		var $tmp = function(t) {
			$s.push("thx.math.scale.Linears::forRgbString@46@52");
			var $spos = $s.length;
			var $tmp = i(t).toRgbString();
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Linears.prototype.__class__ = thx.math.scale.Linears;
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
if(!thx.translation) thx.translation = {}
thx.translation.ITranslation = function() { }
thx.translation.ITranslation.__name__ = ["thx","translation","ITranslation"];
thx.translation.ITranslation.prototype.domain = null;
thx.translation.ITranslation.prototype._ = null;
thx.translation.ITranslation.prototype.__ = null;
thx.translation.ITranslation.prototype.__class__ = thx.translation.ITranslation;
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
			$s.push("thx.geom.layout.Stack::getStackOrder@84");
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
Iterators.lastf = function(it,f) {
	$s.push("Iterators::lastf");
	var $spos = $s.length;
	var rev = Iterators.array(it);
	rev.reverse();
	var $tmp = Arrays.lastf(rev,f);
	$s.pop();
	return $tmp;
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
Iterators.firstf = function(it,f) {
	$s.push("Iterators::firstf");
	var $spos = $s.length;
	while( it.hasNext() ) {
		var v = it.next();
		if(f(v)) {
			$s.pop();
			return v;
		}
	}
	$s.pop();
	return null;
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
Iterators.isIterator = function(v) {
	$s.push("Iterators::isIterator");
	var $spos = $s.length;
	var fields = Reflect.isObject(v) && null == Type.getClass(v)?Reflect.fields(v):Type.getInstanceFields(Type.getClass(v));
	if(!Lambda.has(fields,"next") || !Lambda.has(fields,"hasNext")) {
		$s.pop();
		return false;
	}
	var $tmp = Reflect.isFunction(Reflect.field(v,"next")) && Reflect.isFunction(Reflect.field(v,"hasNext"));
	$s.pop();
	return $tmp;
	$s.pop();
}
Iterators.prototype.__class__ = Iterators;
if(typeof hxevents=='undefined') hxevents = {}
hxevents.Notifier = function(p) {
	if( p === $_ ) return;
	$s.push("hxevents.Notifier::new");
	var $spos = $s.length;
	this.handlers = new Array();
	$s.pop();
}
hxevents.Notifier.__name__ = ["hxevents","Notifier"];
hxevents.Notifier.stop = function() {
	$s.push("hxevents.Notifier::stop");
	var $spos = $s.length;
	throw hxevents.EventException.StopPropagation;
	$s.pop();
}
hxevents.Notifier.prototype.handlers = null;
hxevents.Notifier.prototype.add = function(h) {
	$s.push("hxevents.Notifier::add");
	var $spos = $s.length;
	this.handlers.push(h);
	$s.pop();
	return h;
	$s.pop();
}
hxevents.Notifier.prototype.addOnce = function(h) {
	$s.push("hxevents.Notifier::addOnce");
	var $spos = $s.length;
	var me = this;
	var _h = null;
	_h = function() {
		$s.push("hxevents.Notifier::addOnce@19");
		var $spos = $s.length;
		me.remove(_h);
		h();
		$s.pop();
	};
	this.add(_h);
	$s.pop();
	return _h;
	$s.pop();
}
hxevents.Notifier.prototype.remove = function(h) {
	$s.push("hxevents.Notifier::remove");
	var $spos = $s.length;
	var _g1 = 0, _g = this.handlers.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(Reflect.compareMethods(this.handlers[i],h)) {
			var $tmp = this.handlers.splice(i,1)[0];
			$s.pop();
			return $tmp;
		}
	}
	$s.pop();
	return null;
	$s.pop();
}
hxevents.Notifier.prototype.clear = function() {
	$s.push("hxevents.Notifier::clear");
	var $spos = $s.length;
	this.handlers = new Array();
	$s.pop();
}
hxevents.Notifier.prototype.dispatch = function() {
	$s.push("hxevents.Notifier::dispatch");
	var $spos = $s.length;
	try {
		var list = this.handlers.copy();
		var _g = 0;
		while(_g < list.length) {
			var l = list[_g];
			++_g;
			l();
		}
		$s.pop();
		return true;
	} catch( exc ) {
		if( js.Boot.__instanceof(exc,hxevents.EventException) ) {
			$e = [];
			while($s.length >= $spos) $e.unshift($s.pop());
			$s.push($e[0]);
			$s.pop();
			return false;
		} else throw(exc);
	}
	$s.pop();
}
hxevents.Notifier.prototype.has = function(h) {
	$s.push("hxevents.Notifier::has");
	var $spos = $s.length;
	if(null == h) {
		var $tmp = this.handlers.length > 0;
		$s.pop();
		return $tmp;
	} else {
		var _g = 0, _g1 = this.handlers;
		while(_g < _g1.length) {
			var handler = _g1[_g];
			++_g;
			if(h == handler) {
				$s.pop();
				return true;
			}
		}
		$s.pop();
		return false;
	}
	$s.pop();
}
hxevents.Notifier.prototype.__class__ = hxevents.Notifier;
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
if(typeof haxe=='undefined') haxe = {}
haxe.Firebug = function() { }
haxe.Firebug.__name__ = ["haxe","Firebug"];
haxe.Firebug.detect = function() {
	$s.push("haxe.Firebug::detect");
	var $spos = $s.length;
	try {
		var $tmp = console != null && console.error != null;
		$s.pop();
		return $tmp;
	} catch( e ) {
		$e = [];
		while($s.length >= $spos) $e.unshift($s.pop());
		$s.push($e[0]);
		$s.pop();
		return false;
	}
	$s.pop();
}
haxe.Firebug.redirectTraces = function() {
	$s.push("haxe.Firebug::redirectTraces");
	var $spos = $s.length;
	haxe.Log.trace = haxe.Firebug.trace;
	js.Lib.setErrorHandler(haxe.Firebug.onError);
	$s.pop();
}
haxe.Firebug.onError = function(err,stack) {
	$s.push("haxe.Firebug::onError");
	var $spos = $s.length;
	var buf = err + "\n";
	var _g = 0;
	while(_g < stack.length) {
		var s = stack[_g];
		++_g;
		buf += "Called from " + s + "\n";
	}
	haxe.Firebug.trace(buf,null);
	$s.pop();
	return true;
	$s.pop();
}
haxe.Firebug.trace = function(v,inf) {
	$s.push("haxe.Firebug::trace");
	var $spos = $s.length;
	var type = inf != null && inf.customParams != null?inf.customParams[0]:null;
	if(type != "warn" && type != "info" && type != "debug" && type != "error") type = inf == null?"error":"log";
	console[type]((inf == null?"":inf.fileName + ":" + inf.lineNumber + " : ") + Std.string(v));
	$s.pop();
}
haxe.Firebug.prototype.__class__ = haxe.Firebug;
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
thx.util.Message.prototype.translatef = function(translator) {
	$s.push("thx.util.Message::translatef");
	var $spos = $s.length;
	var $tmp = Strings.format(translator(this.message),this.params);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.util.Message.prototype.translate = function(translator,domain) {
	$s.push("thx.util.Message::translate");
	var $spos = $s.length;
	if(null == domain) domain = translator.getDomain();
	var culture = thx.culture.Culture.get(domain);
	if(this.params.length == 1 && Std["is"](this.params[0],Int)) {
		var $tmp = Strings.format(translator.__(null,this.message,this.params[0],domain),this.params,null,culture);
		$s.pop();
		return $tmp;
	} else {
		var $tmp = Strings.format(translator._(this.message,domain),this.params,null,culture);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
thx.util.Message.prototype.__class__ = thx.util.Message;
if(!rg.html) rg.html = {}
rg.html.HtmlPivotTable = function(container) {
	if( container === $_ ) return;
	$s.push("rg.html.HtmlPivotTable::new");
	var $spos = $s.length;
	this.container = container;
	container.classed().add("rg").classed().add("pivot-table");
	this.displayColumnTotal = true;
	this.displayRowTotal = true;
	this.startColor = rg.html.HtmlPivotTable.defaultStartColor;
	this.endColor = rg.html.HtmlPivotTable.defaultEndColor;
	this.heatMap = true;
	$s.pop();
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
	$s.push("rg.html.HtmlPivotTable::data");
	var $spos = $s.length;
	haxe.Log.trace(d,{ fileName : "HtmlPivotTable.hx", lineNumber : 67, className : "rg.html.HtmlPivotTable", methodName : "data"});
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
	$s.pop();
}
rg.html.HtmlPivotTable.prototype.buildValue = function(value,header,counter,tr) {
	$s.push("rg.html.HtmlPivotTable::buildValue");
	var $spos = $s.length;
	var th = tr.append("th").attr("class").string("column value").text().string(this.formatValue(value,header));
	if(counter > 1) th.attr("colspan")["float"](counter);
	$s.pop();
}
rg.html.HtmlPivotTable.prototype.prependSpacer = function(counter,tr) {
	$s.push("rg.html.HtmlPivotTable::prependSpacer");
	var $spos = $s.length;
	if(counter == 0) {
		$s.pop();
		return;
	}
	var th = tr.append("th").attr("class").string("spacer");
	if(counter > 1) th.attr("colspan")["float"](counter);
	$s.pop();
}
rg.html.HtmlPivotTable.prototype.formatCell = function(value) {
	$s.push("rg.html.HtmlPivotTable::formatCell");
	var $spos = $s.length;
	var $tmp = Floats.format(value,"I");
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.html.HtmlPivotTable.prototype.formatHeader = function(value) {
	$s.push("rg.html.HtmlPivotTable::formatHeader");
	var $spos = $s.length;
	var $tmp = rg.util.RGStrings.humanize(Strings.ltrim(value,"#"));
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.html.HtmlPivotTable.prototype.formatValue = function(value,header) {
	$s.push("rg.html.HtmlPivotTable::formatValue");
	var $spos = $s.length;
	if(Std["is"](value,String)) {
		var $tmp = Strings.rtrim(Strings.ltrim(value,"\""),"\"");
		$s.pop();
		return $tmp;
	}
	if(Std["is"](value,Float)) {
		if("#" == header.substr(0,1)) {
			var $tmp = rg.util.Periodicity.format(header.substr(1),Std.parseFloat(value));
			$s.pop();
			return $tmp;
		}
		var $tmp = Floats.format(value);
		$s.pop();
		return $tmp;
	}
	if(Std["is"](value,Int)) {
		var $tmp = Ints.format(value);
		$s.pop();
		return $tmp;
	}
	var $tmp = Dynamics.string(value);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.html.HtmlPivotTable.prototype.__class__ = rg.html.HtmlPivotTable;
rg.html.HtmlLeaderBoard = function(container) {
	if( container === $_ ) return;
	$s.push("rg.html.HtmlLeaderBoard::new");
	var $spos = $s.length;
	this.container = container;
	container.classed().add("rg");
	this.list = container.append("ul").classed().add("leaderboard");
	this._created = 0;
	this._ease = thx.math.Equations.elasticf();
	this._duration = 1500;
	$s.pop();
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
	$s.push("rg.html.HtmlLeaderBoard::data");
	var $spos = $s.length;
	this._data = d;
	this._total = 0;
	var _g = 0, _g1 = this._data;
	while(_g < _g1.length) {
		var item = _g1[_g];
		++_g;
		this._total += item.value;
	}
	this._redraw();
	$s.pop();
}
rg.html.HtmlLeaderBoard.prototype._redraw = function() {
	$s.push("rg.html.HtmlLeaderBoard::_redraw");
	var $spos = $s.length;
	if(null == this._data) {
		$s.pop();
		return;
	}
	var choice = this.list.selectAll("li").data(this._data,function(d,i) {
		$s.push("rg.html.HtmlLeaderBoard::_redraw@49");
		var $spos = $s.length;
		var $tmp = d.label;
		$s.pop();
		return $tmp;
		$s.pop();
	}), total = this._total;
	choice.enter().append("li").style("background-size").stringf(function(d,i) {
		$s.push("rg.html.HtmlLeaderBoard::_redraw@53");
		var $spos = $s.length;
		var $tmp = 100 * d.value / total + "%";
		$s.pop();
		return $tmp;
		$s.pop();
	}).text().stringf($closure(this,"_description")).attr("title").stringf($closure(this,"_title")).style("opacity")["float"](0).eachNode($closure(this,"_fadeIn"));
	choice.update().select("li").style("background-size").stringf(function(d,i) {
		$s.push("rg.html.HtmlLeaderBoard::_redraw@62");
		var $spos = $s.length;
		var $tmp = 100 * d.value / total + "%";
		$s.pop();
		return $tmp;
		$s.pop();
	}).text().stringf($closure(this,"_description")).attr("title").stringf($closure(this,"_title"));
	choice.exit().transition().ease(this._ease).duration(null,this._duration).style("opacity")["float"](1).remove();
	$s.pop();
}
rg.html.HtmlLeaderBoard.prototype._fadeIn = function(n,i) {
	$s.push("rg.html.HtmlLeaderBoard::_fadeIn");
	var $spos = $s.length;
	var me = this;
	thx.js.Dom.selectNodeData(n).transition().ease(this._ease).duration(null,this._duration).delay(null,150 * (i - this._created)).style("opacity")["float"](1).endNode(function(_,_1) {
		$s.push("rg.html.HtmlLeaderBoard::_fadeIn@80");
		var $spos = $s.length;
		me._created++;
		$s.pop();
	});
	$s.pop();
}
rg.html.HtmlLeaderBoard.prototype._description = function(o,i) {
	$s.push("rg.html.HtmlLeaderBoard::_description");
	var $spos = $s.length;
	var $tmp = this.description(o.label,o.value,this._total,i);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.html.HtmlLeaderBoard.prototype._title = function(o,i) {
	$s.push("rg.html.HtmlLeaderBoard::_title");
	var $spos = $s.length;
	var $tmp = this.title(o.label,o.value,this._total,i);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.html.HtmlLeaderBoard.prototype.description = function(label,value,total,pos) {
	$s.push("rg.html.HtmlLeaderBoard::description");
	var $spos = $s.length;
	var $tmp = label + ": " + thx.culture.FormatNumber.percent(100 * value / total);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.html.HtmlLeaderBoard.prototype.title = function(label,value,total,pos) {
	$s.push("rg.html.HtmlLeaderBoard::title");
	var $spos = $s.length;
	var $tmp = "total: " + Floats.format(value,"I");
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.html.HtmlLeaderBoard.prototype.__class__ = rg.html.HtmlLeaderBoard;
if(!thx.culture) thx.culture = {}
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
Iterables = function() { }
Iterables.__name__ = ["Iterables"];
Iterables.indexOf = function(it,v,f) {
	$s.push("Iterables::indexOf");
	var $spos = $s.length;
	var $tmp = Iterators.indexOf(it.iterator(),v,f);
	$s.pop();
	return $tmp;
	$s.pop();
}
Iterables.contains = function(it,v,f) {
	$s.push("Iterables::contains");
	var $spos = $s.length;
	var $tmp = Iterators.contains(it.iterator(),v,f);
	$s.pop();
	return $tmp;
	$s.pop();
}
Iterables.array = function(it) {
	$s.push("Iterables::array");
	var $spos = $s.length;
	var $tmp = Iterators.array(it.iterator());
	$s.pop();
	return $tmp;
	$s.pop();
}
Iterables.map = function(it,f) {
	$s.push("Iterables::map");
	var $spos = $s.length;
	var $tmp = Iterators.map(it.iterator(),f);
	$s.pop();
	return $tmp;
	$s.pop();
}
Iterables.each = function(it,f) {
	$s.push("Iterables::each");
	var $spos = $s.length;
	var $tmp = Iterators.each(it.iterator(),f);
	$s.pop();
	return $tmp;
	$s.pop();
}
Iterables.reduce = function(it,f,initialValue) {
	$s.push("Iterables::reduce");
	var $spos = $s.length;
	var $tmp = Iterators.reduce(it.iterator(),f,initialValue);
	$s.pop();
	return $tmp;
	$s.pop();
}
Iterables.random = function(it) {
	$s.push("Iterables::random");
	var $spos = $s.length;
	var $tmp = Arrays.random(Iterators.array(it.iterator()));
	$s.pop();
	return $tmp;
	$s.pop();
}
Iterables.any = function(it,f) {
	$s.push("Iterables::any");
	var $spos = $s.length;
	var $tmp = Iterators.any(it.iterator(),f);
	$s.pop();
	return $tmp;
	$s.pop();
}
Iterables.all = function(it,f) {
	$s.push("Iterables::all");
	var $spos = $s.length;
	var $tmp = Iterators.all(it.iterator(),f);
	$s.pop();
	return $tmp;
	$s.pop();
}
Iterables.last = function(it) {
	$s.push("Iterables::last");
	var $spos = $s.length;
	var $tmp = Iterators.last(it.iterator());
	$s.pop();
	return $tmp;
	$s.pop();
}
Iterables.lastf = function(it,f) {
	$s.push("Iterables::lastf");
	var $spos = $s.length;
	var $tmp = Iterators.lastf(it.iterator(),f);
	$s.pop();
	return $tmp;
	$s.pop();
}
Iterables.first = function(it) {
	$s.push("Iterables::first");
	var $spos = $s.length;
	var $tmp = it.iterator().next();
	$s.pop();
	return $tmp;
	$s.pop();
}
Iterables.firstf = function(it,f) {
	$s.push("Iterables::firstf");
	var $spos = $s.length;
	var $tmp = Iterators.firstf(it.iterator(),f);
	$s.pop();
	return $tmp;
	$s.pop();
}
Iterables.order = function(it,f) {
	$s.push("Iterables::order");
	var $spos = $s.length;
	var $tmp = Arrays.order(Iterators.array(it.iterator()),f);
	$s.pop();
	return $tmp;
	$s.pop();
}
Iterables.isIterable = function(v) {
	$s.push("Iterables::isIterable");
	var $spos = $s.length;
	var fields = Reflect.isObject(v) && null == Type.getClass(v)?Reflect.fields(v):Type.getInstanceFields(Type.getClass(v));
	if(!Lambda.has(fields,"iterator")) {
		$s.pop();
		return false;
	}
	var $tmp = Reflect.isFunction(Reflect.field(v,"iterator"));
	$s.pop();
	return $tmp;
	$s.pop();
}
Iterables.prototype.__class__ = Iterables;
rg.svg.SvgHeatGrid = function(panel,color) {
	if( panel === $_ ) return;
	$s.push("rg.svg.SvgHeatGrid::new");
	var $spos = $s.length;
	this._m = this._n = 0;
	rg.svg.SvgLayer.call(this,panel);
	this.color = color;
	this._duration = 1000;
	$s.pop();
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
	$s.push("rg.svg.SvgHeatGrid::init");
	var $spos = $s.length;
	this.svg.classed().add("heat-grid");
	this._grid = this.svg.append("svg:g");
	$s.pop();
}
rg.svg.SvgHeatGrid.prototype.data = function(d) {
	$s.push("rg.svg.SvgHeatGrid::data");
	var $spos = $s.length;
	if(d == null) d = [];
	this._n = d.length;
	this._m = this._n > 0?d[0].length:0;
	this._data = Arrays.flatten(d);
	this.redraw();
	$s.pop();
}
rg.svg.SvgHeatGrid.prototype.col = function(_,i) {
	$s.push("rg.svg.SvgHeatGrid::col");
	var $spos = $s.length;
	var $tmp = i % this._m;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgHeatGrid.prototype.row = function(_,i) {
	$s.push("rg.svg.SvgHeatGrid::row");
	var $spos = $s.length;
	var $tmp = Math.floor(i / this._m);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgHeatGrid.prototype.x = function(_,i) {
	$s.push("rg.svg.SvgHeatGrid::x");
	var $spos = $s.length;
	var $tmp = this.col(_,i) * this.width / this._m;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgHeatGrid.prototype.y = function(_,i) {
	$s.push("rg.svg.SvgHeatGrid::y");
	var $spos = $s.length;
	var $tmp = this.row(_,i) * this.height / this._n;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgHeatGrid.prototype.cellclass = function(_,i) {
	$s.push("rg.svg.SvgHeatGrid::cellclass");
	var $spos = $s.length;
	var $tmp = "cell col-" + this.col(_,i) + " row-" + this.row(_,i);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgHeatGrid.prototype.over = function(x,y,d,pos) {
	$s.push("rg.svg.SvgHeatGrid::over");
	var $spos = $s.length;
	$s.pop();
}
rg.svg.SvgHeatGrid.prototype._mouseover = function(d,i) {
	$s.push("rg.svg.SvgHeatGrid::_mouseover");
	var $spos = $s.length;
	var x = Math.round(this.x(d,i) + this.width / this._m / 2), y = Math.round(this.y(d,i) + this.height / this._n / 2);
	this.over(x,y,d,i);
	$s.pop();
}
rg.svg.SvgHeatGrid.prototype.redraw = function() {
	$s.push("rg.svg.SvgHeatGrid::redraw");
	var $spos = $s.length;
	if(this._m == 0) {
		$s.pop();
		return;
	}
	var choice = this._grid.selectAll("rect").data(this._data);
	choice.enter().append("svg:rect").attr("width")["float"](this.width / this._m).attr("height")["float"](this.height / this._n).style("fill").color(this.color.scale(0)).attr("class").stringf($closure(this,"cellclass")).attr("x").floatf($closure(this,"x")).attr("y").floatf($closure(this,"y")).style("fill-opacity")["float"](0).on("mouseover",$closure(this,"_mouseover")).transition().duration(null,this._duration).style("fill-opacity")["float"](1).style("fill").colorf($closure(this.color,"scale"));
	choice.update().transition().duration(null,this._duration).style("fill").colorf($closure(this.color,"scale")).attr("width")["float"](this.width / this._m).attr("height")["float"](this.height / this._n).attr("x").floatf($closure(this,"x")).attr("y").floatf($closure(this,"y"));
	choice.exit().transition().duration(null,this._duration).style("opacity")["float"](0).remove();
	$s.pop();
}
rg.svg.SvgHeatGrid.prototype.__class__ = rg.svg.SvgHeatGrid;
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
rg.query.QueryTimerUpdate = function(query,elapse) {
	if( query === $_ ) return;
	$s.push("rg.query.QueryTimerUpdate::new");
	var $spos = $s.length;
	if(elapse == null) elapse = 5000;
	this.query = query;
	query.onClose.add($closure(this,"pause"));
	this.elapse = elapse;
	this.paused = true;
	this.resume();
	$s.pop();
}
rg.query.QueryTimerUpdate.__name__ = ["rg","query","QueryTimerUpdate"];
rg.query.QueryTimerUpdate.prototype.elapse = null;
rg.query.QueryTimerUpdate.prototype.paused = null;
rg.query.QueryTimerUpdate.prototype.query = null;
rg.query.QueryTimerUpdate.prototype.pause = function() {
	$s.push("rg.query.QueryTimerUpdate::pause");
	var $spos = $s.length;
	if(this.paused) {
		$s.pop();
		return;
	}
	this.paused = true;
	$s.pop();
}
rg.query.QueryTimerUpdate.prototype.resume = function() {
	$s.push("rg.query.QueryTimerUpdate::resume");
	var $spos = $s.length;
	if(!this.paused) {
		$s.pop();
		return;
	}
	this.paused = false;
	this.query.onComplete.addOnce($closure(this,"scheduleNext"));
	this.query.load();
	$s.pop();
}
rg.query.QueryTimerUpdate.prototype.scheduleNext = function() {
	$s.push("rg.query.QueryTimerUpdate::scheduleNext");
	var $spos = $s.length;
	if(this.paused) {
		$s.pop();
		return;
	}
	haxe.Timer.delay($closure(this,"execute"),this.elapse);
	$s.pop();
}
rg.query.QueryTimerUpdate.prototype.execute = function() {
	$s.push("rg.query.QueryTimerUpdate::execute");
	var $spos = $s.length;
	if(this.paused) {
		$s.pop();
		return;
	}
	this.query.onComplete.addOnce($closure(this,"scheduleNext"));
	this.query.load();
	$s.pop();
}
rg.query.QueryTimerUpdate.prototype.__class__ = rg.query.QueryTimerUpdate;
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
	var $tmp = this.dataf(function(d,_) {
		$s.push("thx.js.BoundSelection::selfData@164");
		var $spos = $s.length;
		var $tmp = d;
		$s.pop();
		return $tmp;
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
thx.js.BoundSelection.prototype.on = function(type,listener,capture) {
	$s.push("thx.js.BoundSelection::on");
	var $spos = $s.length;
	if(capture == null) capture = false;
	var $tmp = this.onNode(type,null == listener?null:function(n,i) {
		$s.push("thx.js.BoundSelection::on@207");
		var $spos = $s.length;
		listener(Reflect.field(n,"__data__"),i);
		$s.pop();
	},capture);
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
		$s.push("thx.js.PreEnterSelection::append@226");
		var $spos = $s.length;
		var n = js.Lib.document.createElement(name);
		node.appendChild(n);
		$s.pop();
		return n;
		$s.pop();
	};
	var appendNS = function(node) {
		$s.push("thx.js.PreEnterSelection::append@233");
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
		$s.push("thx.js.PreEnterSelection::insert@246");
		var $spos = $s.length;
		var n = js.Lib.document.createElement(name), bf = null != before?before:thx.js.Dom.selectNode(node).select(beforeSelector).node();
		node.insertBefore(n,bf);
		$s.pop();
		return n;
		$s.pop();
	};
	var insertNsDom = function(node) {
		$s.push("thx.js.PreEnterSelection::insert@253");
		var $spos = $s.length;
		var n = js.Lib.document.createElementNS(qname.space,qname.local), bf = null != before?before:thx.js.Dom.selectNode(node).select(beforeSelector).node();
		node.insertBefore(n,bf);
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
		haxe.Log.trace("wrong parameters passed for pattern '" + this.message + "' at " + ps,{ fileName : "Error.hx", lineNumber : 34, className : "thx.error.Error", methodName : "toString"});
		$s.pop();
		return "";
	}
	$s.pop();
}
thx.error.Error.prototype.__class__ = thx.error.Error;
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
		var _g1 = 1, _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(Reflect.compare(a,arr[i]) > 0) a = arr[p = i];
		}
		var $tmp = arr[p];
		$s.pop();
		return $tmp;
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
	var _g1 = 1, _g = arr.length;
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
		var _g1 = 1, _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(Reflect.compare(a,arr[i]) < 0) a = arr[p = i];
		}
		var $tmp = arr[p];
		$s.pop();
		return $tmp;
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
	var _g1 = 1, _g = arr.length;
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
	arr.sort(null == f?Dynamics.compare:f);
	$s.pop();
	return arr;
	$s.pop();
}
Arrays.orderMultiple = function(arr,f,rest) {
	$s.push("Arrays::orderMultiple");
	var $spos = $s.length;
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
	$s.pop();
}
Arrays.split = function(arr,f) {
	$s.push("Arrays::split");
	var $spos = $s.length;
	if(null == f) f = function(v,_) {
		$s.push("Arrays::split@166");
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
				$s.push("Arrays::format@216");
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
				$s.push("Arrays::format@218");
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
			$s.push("Arrays::formatf@233");
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
					$s.push("Arrays::formatf@233@246");
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
					$s.push("Arrays::formatf@233@248");
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
			$s.push("Arrays::formatf@252");
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
				$s.push("Arrays::interpolatef@274");
				var $spos = $s.length;
				var $tmp = function(_) {
					$s.push("Arrays::interpolatef@274@274");
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
			$s.push("Arrays::interpolatef@282");
			var $spos = $s.length;
			var $tmp = function(_) {
				$s.push("Arrays::interpolatef@282@282");
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
		$s.push("Arrays::interpolatef@285");
		var $spos = $s.length;
		var $tmp = functions.map(function(f,_) {
			$s.push("Arrays::interpolatef@285@285");
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
				$s.push("Arrays::interpolateStringsf@304");
				var $spos = $s.length;
				var $tmp = function(_) {
					$s.push("Arrays::interpolateStringsf@304@304");
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
			$s.push("Arrays::interpolateStringsf@312");
			var $spos = $s.length;
			var $tmp = function(_) {
				$s.push("Arrays::interpolateStringsf@312@312");
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
		$s.push("Arrays::interpolateStringsf@315");
		var $spos = $s.length;
		var $tmp = functions.map(function(f,_) {
			$s.push("Arrays::interpolateStringsf@315@315");
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
				$s.push("Arrays::interpolateIntsf@334");
				var $spos = $s.length;
				var $tmp = function(_) {
					$s.push("Arrays::interpolateIntsf@334@334");
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
			$s.push("Arrays::interpolateIntsf@342");
			var $spos = $s.length;
			var $tmp = function(_) {
				$s.push("Arrays::interpolateIntsf@342@342");
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
		$s.push("Arrays::interpolateIntsf@345");
		var $spos = $s.length;
		var $tmp = functions.map(function(f,_) {
			$s.push("Arrays::interpolateIntsf@345@345");
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
Arrays.string = function(arr) {
	$s.push("Arrays::string");
	var $spos = $s.length;
	var $tmp = "[" + arr.map(function(v,_) {
		$s.push("Arrays::string@400");
		var $spos = $s.length;
		var $tmp = Dynamics.string(v);
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
Arrays.lastf = function(arr,f) {
	$s.push("Arrays::lastf");
	var $spos = $s.length;
	var i = arr.length;
	while(--i >= 0) if(f(arr[i])) {
		var $tmp = arr[i];
		$s.pop();
		return $tmp;
	}
	$s.pop();
	return null;
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
Arrays.firstf = function(arr,f) {
	$s.push("Arrays::firstf");
	var $spos = $s.length;
	var _g = 0;
	while(_g < arr.length) {
		var v = arr[_g];
		++_g;
		if(f(v)) {
			$s.pop();
			return v;
		}
	}
	$s.pop();
	return null;
	$s.pop();
}
Arrays.bisect = function(a,x,lo,hi) {
	$s.push("Arrays::bisect");
	var $spos = $s.length;
	if(lo == null) lo = 0;
	var $tmp = Arrays.bisectRight(a,x,lo,hi);
	$s.pop();
	return $tmp;
	$s.pop();
}
Arrays.bisectRight = function(a,x,lo,hi) {
	$s.push("Arrays::bisectRight");
	var $spos = $s.length;
	if(lo == null) lo = 0;
	if(null == hi) hi = a.length;
	while(lo < hi) {
		var mid = lo + hi >> 1;
		if(x < a[mid]) hi = mid; else lo = mid + 1;
	}
	$s.pop();
	return lo;
	$s.pop();
}
Arrays.bisectLeft = function(a,x,lo,hi) {
	$s.push("Arrays::bisectLeft");
	var $spos = $s.length;
	if(lo == null) lo = 0;
	if(null == hi) hi = a.length;
	while(lo < hi) {
		var mid = lo + hi >> 1;
		if(a[mid] < x) lo = mid + 1; else hi = mid;
	}
	$s.pop();
	return lo;
	$s.pop();
}
Arrays.nearest = function(a,x,f) {
	$s.push("Arrays::nearest");
	var $spos = $s.length;
	var delta = [];
	var _g1 = 0, _g = a.length;
	while(_g1 < _g) {
		var i = _g1++;
		delta.push({ i : i, v : Math.abs(f(a[i]) - x)});
	}
	delta.sort(function(a1,b) {
		$s.push("Arrays::nearest@470");
		var $spos = $s.length;
		var $tmp = Floats.compare(a1.v,b.v);
		$s.pop();
		return $tmp;
		$s.pop();
	});
	var $tmp = a[delta[0].i];
	$s.pop();
	return $tmp;
	$s.pop();
}
Arrays.compare = function(a,b) {
	$s.push("Arrays::compare");
	var $spos = $s.length;
	var v;
	if((v = a.length - b.length) != 0) {
		$s.pop();
		return v;
	}
	var _g1 = 0, _g = a.length;
	while(_g1 < _g) {
		var i = _g1++;
		if((v = Dynamics.compare(a[i],b[i])) != 0) {
			$s.pop();
			return v;
		}
	}
	$s.pop();
	return 0;
	$s.pop();
}
Arrays.product = function(a) {
	$s.push("Arrays::product");
	var $spos = $s.length;
	if(a.length == 0) {
		var $tmp = [];
		$s.pop();
		return $tmp;
	}
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
	$s.pop();
	return result;
	$s.pop();
}
Arrays.prototype.__class__ = Arrays;
rg.svg.SvgBorderLine = function(panel,anchor,className) {
	if( panel === $_ ) return;
	$s.push("rg.svg.SvgBorderLine::new");
	var $spos = $s.length;
	if(className == null) className = "border";
	rg.svg.SvgLayer.call(this,panel);
	this.setAnchor(anchor);
	this.setClassName(className);
	$s.pop();
}
rg.svg.SvgBorderLine.__name__ = ["rg","svg","SvgBorderLine"];
rg.svg.SvgBorderLine.__super__ = rg.svg.SvgLayer;
for(var k in rg.svg.SvgLayer.prototype ) rg.svg.SvgBorderLine.prototype[k] = rg.svg.SvgLayer.prototype[k];
rg.svg.SvgBorderLine.prototype.anchor = null;
rg.svg.SvgBorderLine.prototype.className = null;
rg.svg.SvgBorderLine.prototype._line = null;
rg.svg.SvgBorderLine.prototype.init = function() {
	$s.push("rg.svg.SvgBorderLine::init");
	var $spos = $s.length;
	this._line = this.svg.append("svg:line").attr("class").string(this.className);
	$s.pop();
}
rg.svg.SvgBorderLine.prototype.redraw = function() {
	$s.push("rg.svg.SvgBorderLine::redraw");
	var $spos = $s.length;
	$s.pop();
}
rg.svg.SvgBorderLine.prototype.resize = function() {
	$s.push("rg.svg.SvgBorderLine::resize");
	var $spos = $s.length;
	if(null == this._line || null == this.anchor || null == this.width) {
		$s.pop();
		return;
	}
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
	$s.pop();
}
rg.svg.SvgBorderLine.prototype.setClassName = function(v) {
	$s.push("rg.svg.SvgBorderLine::setClassName");
	var $spos = $s.length;
	this.className = v;
	if(null != this._line) this._line.attr("class").string(v);
	$s.pop();
	return v;
	$s.pop();
}
rg.svg.SvgBorderLine.prototype.setAnchor = function(v) {
	$s.push("rg.svg.SvgBorderLine::setAnchor");
	var $spos = $s.length;
	this.anchor = v;
	this.resize();
	$s.pop();
	return v;
	$s.pop();
}
rg.svg.SvgBorderLine.prototype.__class__ = rg.svg.SvgBorderLine;
rg.query.Query = function(p) {
	if( p === $_ ) return;
	$s.push("rg.query.Query::new");
	var $spos = $s.length;
	this.data = null;
	this.onLoading = new hxevents.Notifier();
	this.onComplete = new hxevents.Notifier();
	this.onClose = new hxevents.Notifier();
	this.onChange = new hxevents.Dispatcher();
	this.onData = new hxevents.Dispatcher();
	this.onError = new hxevents.Dispatcher();
	$s.pop();
}
rg.query.Query.__name__ = ["rg","query","Query"];
rg.query.Query.normalizeName = function(s) {
	$s.push("rg.query.Query::normalizeName");
	var $spos = $s.length;
	if(s == null) {
		$s.pop();
		return null;
	}
	if("." == s.substr(0,1)) {
		var $tmp = s.substr(1);
		$s.pop();
		return $tmp;
	} else {
		$s.pop();
		return s;
	}
	$s.pop();
}
rg.query.Query.prototype.data = null;
rg.query.Query.prototype.onLoading = null;
rg.query.Query.prototype.onComplete = null;
rg.query.Query.prototype.onClose = null;
rg.query.Query.prototype.onChange = null;
rg.query.Query.prototype.onData = null;
rg.query.Query.prototype.onError = null;
rg.query.Query.prototype.close = function() {
	$s.push("rg.query.Query::close");
	var $spos = $s.length;
	this.onClose.dispatch();
	this.onClose.clear();
	this.onLoading.clear();
	this.onError.clear();
	this.onData.clear();
	this.onChange.clear();
	this.onComplete.clear();
	$s.pop();
}
rg.query.Query.prototype.load = function() {
	$s.push("rg.query.Query::load");
	var $spos = $s.length;
	throw new thx.error.AbstractMethod({ fileName : "Query.hx", lineNumber : 48, className : "rg.query.Query", methodName : "load"});
	$s.pop();
}
rg.query.Query.prototype.__class__ = rg.query.Query;
rg.query.QueryExecutor = function(executor) {
	if( executor === $_ ) return;
	$s.push("rg.query.QueryExecutor::new");
	var $spos = $s.length;
	rg.query.Query.call(this);
	this.executor = executor;
	this.time = new rg.query.TimeQuery();
	$s.pop();
}
rg.query.QueryExecutor.__name__ = ["rg","query","QueryExecutor"];
rg.query.QueryExecutor.__super__ = rg.query.Query;
for(var k in rg.query.Query.prototype ) rg.query.QueryExecutor.prototype[k] = rg.query.Query.prototype[k];
rg.query.QueryExecutor.prototype.time = null;
rg.query.QueryExecutor.prototype.executor = null;
rg.query.QueryExecutor.prototype._data = null;
rg.query.QueryExecutor.prototype.queryObject = function() {
	$s.push("rg.query.QueryExecutor::queryObject");
	var $spos = $s.length;
	var $tmp = { start : this.time.queryStartTime(), end : this.time.queryEndTime(), periodicity : this.time.periodicity};
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.query.QueryExecutor.prototype.executeLoad = function(success,error) {
	$s.push("rg.query.QueryExecutor::executeLoad");
	var $spos = $s.length;
	throw new thx.error.AbstractMethod({ fileName : "Query.hx", lineNumber : 87, className : "rg.query.QueryExecutor", methodName : "executeLoad"});
	$s.pop();
}
rg.query.QueryExecutor.prototype.load = function() {
	$s.push("rg.query.QueryExecutor::load");
	var $spos = $s.length;
	this.time.update();
	this.onLoading.dispatch();
	this.executeLoad($closure(this,"_success"),$closure(this,"_error"));
	$s.pop();
}
rg.query.QueryExecutor.prototype.transform = function(v) {
	$s.push("rg.query.QueryExecutor::transform");
	var $spos = $s.length;
	var $tmp = v;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.query.QueryExecutor.prototype.order = function(v) {
	$s.push("rg.query.QueryExecutor::order");
	var $spos = $s.length;
	$s.pop();
	return v;
	$s.pop();
}
rg.query.QueryExecutor.prototype.close = function() {
	$s.push("rg.query.QueryExecutor::close");
	var $spos = $s.length;
	rg.query.Query.prototype.close.call(this);
	this.time.close();
	$s.pop();
}
rg.query.QueryExecutor.prototype._success = function(v) {
	$s.push("rg.query.QueryExecutor::_success");
	var $spos = $s.length;
	if(!Dynamics.same(v,this._data)) this.onChange.dispatch(this.data = this.order(this.transform(this._data = v)));
	this.onData.dispatch(this.data);
	this.onComplete.dispatch();
	$s.pop();
}
rg.query.QueryExecutor.prototype._error = function(v) {
	$s.push("rg.query.QueryExecutor::_error");
	var $spos = $s.length;
	this.onError.dispatch(v);
	this.onComplete.dispatch();
	$s.pop();
}
rg.query.QueryExecutor.prototype.__class__ = rg.query.QueryExecutor;
rg.query.QueryPath = function(executor,path) {
	if( executor === $_ ) return;
	$s.push("rg.query.QueryPath::new");
	var $spos = $s.length;
	rg.query.QueryExecutor.call(this,executor);
	this.setPath(path);
	$s.pop();
}
rg.query.QueryPath.__name__ = ["rg","query","QueryPath"];
rg.query.QueryPath.__super__ = rg.query.QueryExecutor;
for(var k in rg.query.QueryExecutor.prototype ) rg.query.QueryPath.prototype[k] = rg.query.QueryExecutor.prototype[k];
rg.query.QueryPath.prototype.path = null;
rg.query.QueryPath.prototype.setPath = function(v) {
	$s.push("rg.query.QueryPath::setPath");
	var $spos = $s.length;
	if(null == v || 0 == v.length) throw new thx.error.NullArgument("v",null,{ fileName : "Query.hx", lineNumber : 144, className : "rg.query.QueryPath", methodName : "setPath"}); else null;
	var $tmp = this.path = v;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.query.QueryPath.prototype.__class__ = rg.query.QueryPath;
rg.query.QueryEventsCount = function(executor,path,events) {
	if( executor === $_ ) return;
	$s.push("rg.query.QueryEventsCount::new");
	var $spos = $s.length;
	rg.query.QueryPath.call(this,executor,path);
	this.events = events;
	$s.pop();
}
rg.query.QueryEventsCount.__name__ = ["rg","query","QueryEventsCount"];
rg.query.QueryEventsCount.__super__ = rg.query.QueryPath;
for(var k in rg.query.QueryPath.prototype ) rg.query.QueryEventsCount.prototype[k] = rg.query.QueryPath.prototype[k];
rg.query.QueryEventsCount.prototype.events = null;
rg.query.QueryEventsCount.prototype.filter = function(value,count) {
	$s.push("rg.query.QueryEventsCount::filter");
	var $spos = $s.length;
	$s.pop();
	return true;
	$s.pop();
}
rg.query.QueryEventsCount.prototype.order = function(values) {
	$s.push("rg.query.QueryEventsCount::order");
	var $spos = $s.length;
	{
		values.sort(null == function(a,b) {
			$s.push("rg.query.QueryEventsCount::order@23");
			var $spos = $s.length;
			var $tmp = Floats.compare(b.value,a.value);
			$s.pop();
			return $tmp;
			$s.pop();
		}?Dynamics.compare:function(a,b) {
			$s.push("rg.query.QueryEventsCount::order@23");
			var $spos = $s.length;
			var $tmp = Floats.compare(b.value,a.value);
			$s.pop();
			return $tmp;
			$s.pop();
		});
		values;
	}
	$s.pop();
	return values;
	$s.pop();
}
rg.query.QueryEventsCount.prototype.load = function() {
	$s.push("rg.query.QueryEventsCount::load");
	var $spos = $s.length;
	if(null == this.events) {
		var loader = new rg.query.QueryEventNames(this.executor,this.path), me = this;
		loader.onData.add(function(d) {
			$s.push("rg.query.QueryEventsCount::load@39");
			var $spos = $s.length;
			if(null == d) d = [];
			me.events = d.map(function(d1,i) {
				$s.push("rg.query.QueryEventsCount::load@39@42");
				var $spos = $s.length;
				var $tmp = Strings.ltrim(d1,".");
				$s.pop();
				return $tmp;
				$s.pop();
			});
			loader.close();
			me.load();
			$s.pop();
		});
		loader.load();
	} else rg.query.QueryPath.prototype.load.call(this);
	$s.pop();
}
rg.query.QueryEventsCount.prototype.executeLoad = function(success,error) {
	$s.push("rg.query.QueryEventsCount::executeLoad");
	var $spos = $s.length;
	var count = 0, total = this.events.length, result = [], totalcount = 0;
	var _success = function(pos,p,v) {
		$s.push("rg.query.QueryEventsCount::executeLoad@59");
		var $spos = $s.length;
		result[pos] = { label : p, value : v};
		if(++count == total) success(result);
		$s.pop();
	};
	var query = this.queryObject();
	var _g1 = 0, _g = this.events.length;
	while(_g1 < _g) {
		var i = _g1++;
		var event = this.events[i];
		query.property = event;
		this.executor.propertyCount(this.path,query,(function(f,a1,a2) {
			$s.push("rg.query.QueryEventsCount::executeLoad@76");
			var $spos = $s.length;
			var $tmp = function(a3) {
				$s.push("rg.query.QueryEventsCount::executeLoad@76@76");
				var $spos = $s.length;
				var $tmp = f(a1,a2,a3);
				$s.pop();
				return $tmp;
				$s.pop();
			};
			$s.pop();
			return $tmp;
			$s.pop();
		})(_success,i,event),error);
	}
	$s.pop();
}
rg.query.QueryEventsCount.prototype.__class__ = rg.query.QueryEventsCount;
thx.math.scale.LinearT = function(p) {
	if( p === $_ ) return;
	$s.push("thx.math.scale.LinearT::new");
	var $spos = $s.length;
	this._domain = [0.0,1.0];
	this._range = null;
	this.f = thx.math.scale.LinearT._f;
	this._clamp = false;
	this.rescale();
	$s.pop();
}
thx.math.scale.LinearT.__name__ = ["thx","math","scale","LinearT"];
thx.math.scale.LinearT._f = function(_,_1,_2) {
	$s.push("thx.math.scale.LinearT::_f");
	var $spos = $s.length;
	var $tmp = function(_3) {
		$s.push("thx.math.scale.LinearT::_f@12");
		var $spos = $s.length;
		$s.pop();
		return null;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.LinearT.scaleBilinear = function(domain,range,uninterpolate,interpolate) {
	$s.push("thx.math.scale.LinearT::scaleBilinear");
	var $spos = $s.length;
	var u = uninterpolate(domain[0],domain[1]), i = interpolate(range[0],range[1],null);
	var $tmp = function(x) {
		$s.push("thx.math.scale.LinearT::scaleBilinear@110");
		var $spos = $s.length;
		var $tmp = i(u(x));
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.LinearT.scalePolylinear = function(domain,range,uninterpolate,interpolate) {
	$s.push("thx.math.scale.LinearT::scalePolylinear");
	var $spos = $s.length;
	var u = [], i = [];
	var _g1 = 1, _g = domain.length;
	while(_g1 < _g) {
		var j = _g1++;
		u.push(uninterpolate(domain[j - 1],domain[j]));
		i.push(interpolate(range[j - 1],range[j],null));
	}
	var $tmp = function(x) {
		$s.push("thx.math.scale.LinearT::scalePolylinear@123");
		var $spos = $s.length;
		var j = Arrays.bisectRight(domain,x,1,domain.length - 1) - 1;
		var $tmp = i[j](u[j](x));
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.LinearT.prototype._domain = null;
thx.math.scale.LinearT.prototype._range = null;
thx.math.scale.LinearT.prototype.f = null;
thx.math.scale.LinearT.prototype._clamp = null;
thx.math.scale.LinearT.prototype._output = null;
thx.math.scale.LinearT.prototype.rescale = function() {
	$s.push("thx.math.scale.LinearT::rescale");
	var $spos = $s.length;
	if(null == this._range) {
		$s.pop();
		return this;
	}
	var linear = this._domain.length == 2?thx.math.scale.LinearT.scaleBilinear:thx.math.scale.LinearT.scalePolylinear, uninterpolate = this._clamp?Floats.uninterpolateClampf:Floats.uninterpolatef;
	this._output = linear(this._domain,this._range,uninterpolate,this.f);
	$s.pop();
	return this;
	$s.pop();
}
thx.math.scale.LinearT.prototype.scale = function(x,_) {
	$s.push("thx.math.scale.LinearT::scale");
	var $spos = $s.length;
	var $tmp = this._output(x);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.LinearT.prototype.getDomain = function() {
	$s.push("thx.math.scale.LinearT::getDomain");
	var $spos = $s.length;
	var $tmp = this._domain;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.LinearT.prototype.domain = function(d) {
	$s.push("thx.math.scale.LinearT::domain");
	var $spos = $s.length;
	this._domain = d;
	var $tmp = this.rescale();
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.LinearT.prototype.getRange = function() {
	$s.push("thx.math.scale.LinearT::getRange");
	var $spos = $s.length;
	var $tmp = this._range;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.LinearT.prototype.range = function(r) {
	$s.push("thx.math.scale.LinearT::range");
	var $spos = $s.length;
	this._range = r;
	var $tmp = this.rescale();
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.LinearT.prototype.getInterpolate = function() {
	$s.push("thx.math.scale.LinearT::getInterpolate");
	var $spos = $s.length;
	var $tmp = this.f;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.LinearT.prototype.interpolatef = function(x) {
	$s.push("thx.math.scale.LinearT::interpolatef");
	var $spos = $s.length;
	this.f = x;
	var $tmp = this.rescale();
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.LinearT.prototype.getClamp = function() {
	$s.push("thx.math.scale.LinearT::getClamp");
	var $spos = $s.length;
	var $tmp = this._clamp;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.LinearT.prototype.clamp = function(v) {
	$s.push("thx.math.scale.LinearT::clamp");
	var $spos = $s.length;
	this._clamp = v;
	var $tmp = this.rescale();
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.LinearT.prototype.tickRange = function(m) {
	$s.push("thx.math.scale.LinearT::tickRange");
	var $spos = $s.length;
	var start = Math.min(this._domain[0],this._domain[1]), stop = Math.max(this._domain[0],this._domain[1]), span = stop - start, step = Math.pow(10,Math.floor(Math.log(span / m) / 2.302585092994046)), err = m / (span / step);
	if(err <= .15) step *= 10; else if(err <= .35) step *= 5; else if(err <= -75) step *= 2;
	var $tmp = { start : Math.ceil(start / step) * step, stop : Math.floor(stop / step) * step + step * .5, step : step};
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.LinearT.prototype.ticks = function(m) {
	$s.push("thx.math.scale.LinearT::ticks");
	var $spos = $s.length;
	var range = this.tickRange(m);
	var $tmp = Floats.range(range.start,range.stop,range.step);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.LinearT.prototype.tickFormat = function(m) {
	$s.push("thx.math.scale.LinearT::tickFormat");
	var $spos = $s.length;
	var n = Math.max(0,-Math.floor(Math.log(this.tickRange(m).step) / 2.302585092994046 + .01));
	var $tmp = Floats.formatf("D:" + n);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.LinearT.prototype.__class__ = thx.math.scale.LinearT;
thx.math.scale.LinearT.__interfaces__ = [thx.math.scale.IScale];
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
thx.math.scale.Log = function(p) {
	if( p === $_ ) return;
	$s.push("thx.math.scale.Log::new");
	var $spos = $s.length;
	thx.math.scale.NumericScale.call(this);
	this.log = thx.math.scale.Log._log;
	this.pow = thx.math.scale.Log._pow;
	$s.pop();
}
thx.math.scale.Log.__name__ = ["thx","math","scale","Log"];
thx.math.scale.Log.__super__ = thx.math.scale.NumericScale;
for(var k in thx.math.scale.NumericScale.prototype ) thx.math.scale.Log.prototype[k] = thx.math.scale.NumericScale.prototype[k];
thx.math.scale.Log._log = function(x) {
	$s.push("thx.math.scale.Log::_log");
	var $spos = $s.length;
	var $tmp = Math.log(x) / 2.302585092994046;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Log._logn = function(x) {
	$s.push("thx.math.scale.Log::_logn");
	var $spos = $s.length;
	var $tmp = -Math.log(-x) / 2.302585092994046;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Log._pow = function(x) {
	$s.push("thx.math.scale.Log::_pow");
	var $spos = $s.length;
	var $tmp = Math.pow(10,x);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Log._pown = function(x) {
	$s.push("thx.math.scale.Log::_pown");
	var $spos = $s.length;
	var $tmp = -Math.pow(10,-x);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Log.prototype.log = null;
thx.math.scale.Log.prototype.pow = null;
thx.math.scale.Log.prototype.scale = function(x,i) {
	$s.push("thx.math.scale.Log::scale");
	var $spos = $s.length;
	var $tmp = thx.math.scale.NumericScale.prototype.scale.call(this,this.log(x));
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Log.prototype.invert = function(x,i) {
	$s.push("thx.math.scale.Log::invert");
	var $spos = $s.length;
	var $tmp = this.pow(thx.math.scale.NumericScale.prototype.invert.call(this,x));
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Log.prototype.getDomain = function() {
	$s.push("thx.math.scale.Log::getDomain");
	var $spos = $s.length;
	var me = this;
	var $tmp = thx.math.scale.NumericScale.prototype.getDomain.call(this).map(function(d,_) {
		$s.push("thx.math.scale.Log::getDomain@56");
		var $spos = $s.length;
		var $tmp = me.pow(d);
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Log.prototype.domain = function(d) {
	$s.push("thx.math.scale.Log::domain");
	var $spos = $s.length;
	if(Arrays.min(d) < 0) {
		this.log = thx.math.scale.Log._logn;
		this.pow = thx.math.scale.Log._pown;
	} else {
		this.log = thx.math.scale.Log._log;
		this.pow = thx.math.scale.Log._pow;
	}
	var $tmp = thx.math.scale.NumericScale.prototype.domain.call(this,[this.log(d[0]),this.log(d[1])]);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Log.prototype.ticks = function() {
	$s.push("thx.math.scale.Log::ticks");
	var $spos = $s.length;
	var d = thx.math.scale.NumericScale.prototype.getDomain.call(this), ticks = [];
	if(d.every(function(d1,_) {
		$s.push("thx.math.scale.Log::ticks@75");
		var $spos = $s.length;
		var $tmp = Math.isFinite(d1);
		$s.pop();
		return $tmp;
		$s.pop();
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
	$s.pop();
	return ticks;
	$s.pop();
}
thx.math.scale.Log.prototype.tickFormat = function(v,i) {
	$s.push("thx.math.scale.Log::tickFormat");
	var $spos = $s.length;
	var $tmp = thx.culture.FormatNumber.decimal(v,1);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Log.prototype.__class__ = thx.math.scale.Log;
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
	$s.push("rg.svg.SvgSpace::new");
	var $spos = $s.length;
	if(paddingTop == null) paddingTop = 0;
	this.svg = parentSelection.append("svg:svg");
	this._paddingTop = paddingTop;
	this._paddingRight = null == paddingRight?this._paddingTop:paddingRight;
	this._paddingBottom = null == paddingBottom?this._paddingTop:paddingBottom;
	this._paddingLeft = null == paddingLeft?this._paddingRight:paddingLeft;
	this._stackFrame = new rg.layout.StackFrame(rg.layout.Disposition.Fill(this._paddingTop,this._paddingBottom));
	this.workspace = new rg.svg._SvgSpace.SvgSpaceContainer(this.svg,this._stackFrame);
	this.resize(width,height);
	$s.pop();
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
	$s.push("rg.svg.SvgSpace::resize");
	var $spos = $s.length;
	if(this._stackFrame.width == width && this._stackFrame.height == height) {
		$s.pop();
		return;
	}
	this.svg.attr("width")["float"](width).attr("height")["float"](height);
	var sf = this._stackFrame;
	sf.setLayout(this._paddingLeft,this._paddingTop,width - this._paddingLeft - this._paddingRight,height - this._paddingTop - this._paddingBottom);
	$s.pop();
}
rg.svg.SvgSpace.prototype.redraw = function() {
	$s.push("rg.svg.SvgSpace::redraw");
	var $spos = $s.length;
	this.workspace.redraw();
	$s.pop();
}
rg.svg.SvgSpace.prototype.createPanel = function(disp) {
	$s.push("rg.svg.SvgSpace::createPanel");
	var $spos = $s.length;
	var panel = new rg.svg.SvgPanel(new rg.layout.StackFrame(disp));
	this.workspace.addPanel(panel);
	$s.pop();
	return panel;
	$s.pop();
}
rg.svg.SvgSpace.prototype.createContainer = function(disp,orientation) {
	$s.push("rg.svg.SvgSpace::createContainer");
	var $spos = $s.length;
	var panel = new rg.svg.SvgContainer(new rg.layout.StackFrame(disp),orientation);
	this.workspace.addPanel(panel);
	$s.pop();
	return panel;
	$s.pop();
}
rg.svg.SvgSpace.prototype._filters = null;
rg.svg.SvgSpace.prototype.getFiltersContainer = function() {
	$s.push("rg.svg.SvgSpace::getFiltersContainer");
	var $spos = $s.length;
	if(null == this._filters) this._filters = this.svg.insert("svg:g",this.svg.node().firstChild).attr("id").string("filters");
	var $tmp = this._filters;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgSpace.prototype.addEffect = function(effect) {
	$s.push("rg.svg.SvgSpace::addEffect");
	var $spos = $s.length;
	var name = "rgeffect" + ++rg.svg.SvgSpace._filterid;
	effect.appendTo(this.getFiltersContainer(),name);
	$s.pop();
	return name;
	$s.pop();
}
rg.svg.SvgSpace.prototype.removeEffect = function(name) {
	$s.push("rg.svg.SvgSpace::removeEffect");
	var $spos = $s.length;
	this.svg.select("filter#" + name).remove();
	$s.pop();
}
rg.svg.SvgSpace.prototype.__class__ = rg.svg.SvgSpace;
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
rg.svg.SvgContainer.prototype.createPanel = function(disp) {
	$s.push("rg.svg.SvgContainer::createPanel");
	var $spos = $s.length;
	var panel = new rg.svg.SvgPanel(new rg.layout.StackFrame(disp));
	this.addPanel(panel);
	$s.pop();
	return panel;
	$s.pop();
}
rg.svg.SvgContainer.prototype.createContainer = function(disp,orientation) {
	$s.push("rg.svg.SvgContainer::createContainer");
	var $spos = $s.length;
	var panel = new rg.svg.SvgContainer(new rg.layout.StackFrame(disp),orientation);
	this.addPanel(panel);
	$s.pop();
	return panel;
	$s.pop();
}
rg.svg.SvgContainer.prototype.redraw = function() {
	$s.push("rg.svg.SvgContainer::redraw");
	var $spos = $s.length;
	rg.svg.SvgPanel.prototype.redraw.call(this);
	Iterators.each(this.panels.iterator(),function(v,i) {
		$s.push("rg.svg.SvgContainer::redraw@79");
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
	$s.push("rg.query.QueryEventsSeries::new");
	var $spos = $s.length;
	rg.query.QueryPath.call(this,executor,path);
	this.events = events;
	$s.pop();
}
rg.query.QueryEventsSeries.__name__ = ["rg","query","QueryEventsSeries"];
rg.query.QueryEventsSeries.__super__ = rg.query.QueryPath;
for(var k in rg.query.QueryPath.prototype ) rg.query.QueryEventsSeries.prototype[k] = rg.query.QueryPath.prototype[k];
rg.query.QueryEventsSeries.forLineChart = function(executor,path) {
	$s.push("rg.query.QueryEventsSeries::forLineChart");
	var $spos = $s.length;
	var query = new rg.query.QueryEventsSeries(executor,path);
	query.transform = rg.query.Transform.arrayTimeSeries(query,function() {
		$s.push("rg.query.QueryEventsSeries::forLineChart@18");
		var $spos = $s.length;
		var $tmp = query.events;
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return query;
	$s.pop();
}
rg.query.QueryEventsSeries.prototype.events = null;
rg.query.QueryEventsSeries.prototype.load = function() {
	$s.push("rg.query.QueryEventsSeries::load");
	var $spos = $s.length;
	if(null == this.events) {
		var loader = new rg.query.QueryEventNames(this.executor,this.path), me = this;
		loader.onData.add(function(d) {
			$s.push("rg.query.QueryEventsSeries::load@38");
			var $spos = $s.length;
			if(null == d) d = [];
			me.events = d.map(function(d1,i) {
				$s.push("rg.query.QueryEventsSeries::load@38@41");
				var $spos = $s.length;
				var $tmp = Strings.ltrim(d1,".");
				$s.pop();
				return $tmp;
				$s.pop();
			});
			loader.close();
			me.load();
			$s.pop();
		});
		loader.load();
	} else rg.query.QueryPath.prototype.load.call(this);
	$s.pop();
}
rg.query.QueryEventsSeries.prototype.executeLoad = function(success,error) {
	$s.push("rg.query.QueryEventsSeries::executeLoad");
	var $spos = $s.length;
	var count = 0, total = this.events.length, result = [], totalcount = 0;
	var _success = function(pos,p,v) {
		$s.push("rg.query.QueryEventsSeries::executeLoad@58");
		var $spos = $s.length;
		result[pos] = v;
		if(++count == total) success(result);
		$s.pop();
	};
	var query = this.queryObject();
	var _g1 = 0, _g = this.events.length;
	while(_g1 < _g) {
		var i = _g1++;
		var event = this.events[i];
		query.property = event;
		this.executor.propertySeries(this.path,query,(function(f,a1,a2) {
			$s.push("rg.query.QueryEventsSeries::executeLoad@69");
			var $spos = $s.length;
			var $tmp = function(a3) {
				$s.push("rg.query.QueryEventsSeries::executeLoad@69@69");
				var $spos = $s.length;
				var $tmp = f(a1,a2,a3);
				$s.pop();
				return $tmp;
				$s.pop();
			};
			$s.pop();
			return $tmp;
			$s.pop();
		})(_success,i,event),error);
	}
	$s.pop();
}
rg.query.QueryEventsSeries.prototype.__class__ = rg.query.QueryEventsSeries;
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
thx.js.AccessStyle.prototype.getFloat = function() {
	$s.push("thx.js.AccessStyle::getFloat");
	var $spos = $s.length;
	var v = this.get();
	if(thx.js.AccessStyle.refloat.match(v)) {
		var $tmp = Std.parseFloat(thx.js.AccessStyle.refloat.matched(1));
		$s.pop();
		return $tmp;
	} else {
		var $tmp = Math.NaN;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
thx.js.AccessStyle.prototype.remove = function() {
	$s.push("thx.js.AccessStyle::remove");
	var $spos = $s.length;
	var n = this.name;
	this.selection.eachNode(function(node,i) {
		$s.push("thx.js.AccessStyle::remove@37");
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
	if(null == priority) priority = "";
	this.selection.eachNode(function(node,i) {
		$s.push("thx.js.AccessStyle::string@45");
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
	if(null == priority) priority = "";
	this.selection.eachNode(function(node,i) {
		$s.push("thx.js.AccessStyle::float@54");
		var $spos = $s.length;
		node.style.setProperty(n,s,priority);
		$s.pop();
	});
	var $tmp = this.selection;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessStyle.prototype.color = function(v,priority) {
	$s.push("thx.js.AccessStyle::color");
	var $spos = $s.length;
	var s = v.toRgbString(), n = this.name;
	if(null == priority) priority = "";
	this.selection.eachNode(function(node,i) {
		$s.push("thx.js.AccessStyle::color@63");
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
	if(null == priority) priority = "";
	this.selection.eachNode(function(node,i) {
		$s.push("thx.js.AccessDataStyle::stringf@80");
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
	if(null == priority) priority = "";
	this.selection.eachNode(function(node,i) {
		$s.push("thx.js.AccessDataStyle::floatf@94");
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
thx.js.AccessDataStyle.prototype.colorf = function(v,priority) {
	$s.push("thx.js.AccessDataStyle::colorf");
	var $spos = $s.length;
	var n = this.name;
	if(null == priority) priority = "";
	this.selection.eachNode(function(node,i) {
		$s.push("thx.js.AccessDataStyle::colorf@108");
		var $spos = $s.length;
		var s = v(Reflect.field(node,"__data__"),i);
		if(s == null) node.style.removeProperty(n); else node.style.setProperty(n,"" + s.toRgbString(),priority);
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
		$s.push("thx.js.AccessDataStyle::data@120");
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
Floats.interpolateClampf = function(min,max,equation) {
	$s.push("Floats::interpolateClampf");
	var $spos = $s.length;
	if(null == equation) equation = thx.math.Equations.linear;
	var $tmp = function(a,b) {
		$s.push("Floats::interpolateClampf@114");
		var $spos = $s.length;
		var d = b - a;
		var $tmp = function(f) {
			$s.push("Floats::interpolateClampf@114@117");
			var $spos = $s.length;
			var $tmp = a + equation(Floats.clamp(f,min,max)) * d;
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
		$s.pop();
	};
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
			$s.push("Floats::formatf@134");
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
			$s.push("Floats::formatf@136");
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
			$s.push("Floats::formatf@139");
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
			$s.push("Floats::formatf@141");
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
			$s.push("Floats::formatf@143");
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
			throw new thx.error.Error("Unsupported number format: {0}",null,format,{ fileName : "Floats.hx", lineNumber : 145, className : "Floats", methodName : "formatf"});
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
Floats.isNumeric = function(v) {
	$s.push("Floats::isNumeric");
	var $spos = $s.length;
	var $tmp = Std["is"](v,Float) || Std["is"](v,Int);
	$s.pop();
	return $tmp;
	$s.pop();
}
Floats.equals = function(a,b,approx) {
	$s.push("Floats::equals");
	var $spos = $s.length;
	if(approx == null) approx = 1e-5;
	if(Math.isNaN(a)) {
		var $tmp = Math.isNaN(b);
		$s.pop();
		return $tmp;
	} else if(Math.isNaN(b)) {
		$s.pop();
		return false;
	} else if(!Math.isFinite(a) && !Math.isFinite(b)) {
		var $tmp = a > 0 == b > 0;
		$s.pop();
		return $tmp;
	}
	var $tmp = Math.abs(b - a) < approx;
	$s.pop();
	return $tmp;
	$s.pop();
}
Floats.uninterpolatef = function(a,b) {
	$s.push("Floats::uninterpolatef");
	var $spos = $s.length;
	b = 1 / (b - a);
	var $tmp = function(x) {
		$s.push("Floats::uninterpolatef@186");
		var $spos = $s.length;
		var $tmp = (x - a) * b;
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
Floats.uninterpolateClampf = function(a,b) {
	$s.push("Floats::uninterpolateClampf");
	var $spos = $s.length;
	b = 1 / (b - a);
	var $tmp = function(x) {
		$s.push("Floats::uninterpolateClampf@192");
		var $spos = $s.length;
		var $tmp = Floats.clamp((x - a) * b,0.0,1.0);
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
Floats.round = function(x,n) {
	$s.push("Floats::round");
	var $spos = $s.length;
	if(n == null) n = 2;
	var $tmp = n != 0?Math.round(x * Math.pow(10,n)) * Math.pow(10,-n):Math.round(x);
	$s.pop();
	return $tmp;
	$s.pop();
}
Floats.prototype.__class__ = Floats;
rg.svg.SvgScaleTick = function(panel,anchor) {
	if( panel === $_ ) return;
	$s.push("rg.svg.SvgScaleTick::new");
	var $spos = $s.length;
	rg.svg.SvgLayer.call(this,panel);
	this._length = rg.svg.SvgScaleTick.defaultTickLength;
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
	var $tmp = new rg.svg.SvgScaleTick(panel,anchor).scale($closure(scale,"scale")).range($closure(scale,"range")).ticks($closure(scale,"ticks")).key(function(d,i) {
		$s.push("rg.svg.SvgScaleTick::ofLinear@20");
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
rg.svg.SvgScaleTick.ofOrdinal = function(panel,anchor,scale) {
	$s.push("rg.svg.SvgScaleTick::ofOrdinal");
	var $spos = $s.length;
	var _scale = function(d,i) {
		$s.push("rg.svg.SvgScaleTick::ofOrdinal@26");
		var $spos = $s.length;
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
		var $tmp = s.scale(d);
		$s.pop();
		return $tmp;
		$s.pop();
	};
	var $tmp = new rg.svg.SvgScaleTick(panel,anchor).scale(_scale).range($closure(scale,"range")).ticks($closure(scale,"getDomain")).key(function(d,i) {
		$s.push("rg.svg.SvgScaleTick::ofOrdinal@39");
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
rg.svg.SvgScaleTick.boundsOfLinear = function(panel,anchor,scale) {
	$s.push("rg.svg.SvgScaleTick::boundsOfLinear");
	var $spos = $s.length;
	var $tmp = rg.svg.SvgScaleTick.ofLinear(panel,anchor,scale).ticks(function() {
		$s.push("rg.svg.SvgScaleTick::boundsOfLinear@46");
		var $spos = $s.length;
		var $tmp = scale.getDomain();
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
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
	if(null == this._maxRange) {
		$s.pop();
		return;
	}
	this._range([0.0,this._maxRange()]);
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
			$s.push("rg.svg.SvgScaleTick::anchor@150");
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
			$s.push("rg.svg.SvgScaleTick::anchor@155");
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
rg.svg.SvgScaleTick.prototype.adjustPositionFunction = function() {
	$s.push("rg.svg.SvgScaleTick::adjustPositionFunction");
	var $spos = $s.length;
	var me = this;
	switch( (this._anchor)[1] ) {
	case 0:
	case 2:
		this._pos = function() {
			$s.push("rg.svg.SvgScaleTick::adjustPositionFunction@175");
			var $spos = $s.length;
			$s.pop();
			return 0;
			$s.pop();
		};
		break;
	case 1:
		this._pos = function() {
			$s.push("rg.svg.SvgScaleTick::adjustPositionFunction@177");
			var $spos = $s.length;
			var $tmp = me.panel.frame.height - me._length;
			$s.pop();
			return $tmp;
			$s.pop();
		};
		break;
	case 3:
		this._pos = function() {
			$s.push("rg.svg.SvgScaleTick::adjustPositionFunction@179");
			var $spos = $s.length;
			var $tmp = me.panel.frame.width - me._length;
			$s.pop();
			return $tmp;
			$s.pop();
		};
		break;
	}
	$s.pop();
}
rg.svg.SvgScaleTick.prototype.__class__ = rg.svg.SvgScaleTick;
rg.query.QueryEventNames = function(executor,path) {
	if( executor === $_ ) return;
	$s.push("rg.query.QueryEventNames::new");
	var $spos = $s.length;
	rg.query.QueryPath.call(this,executor,path);
	$s.pop();
}
rg.query.QueryEventNames.__name__ = ["rg","query","QueryEventNames"];
rg.query.QueryEventNames.__super__ = rg.query.QueryPath;
for(var k in rg.query.QueryPath.prototype ) rg.query.QueryEventNames.prototype[k] = rg.query.QueryPath.prototype[k];
rg.query.QueryEventNames.prototype.executeLoad = function(success,error) {
	$s.push("rg.query.QueryEventNames::executeLoad");
	var $spos = $s.length;
	var query = this.queryObject();
	query.type = "property";
	this.executor.children(this.path,query,success,error);
	$s.pop();
}
rg.query.QueryEventNames.prototype.__class__ = rg.query.QueryEventNames;
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
	var $tmp = new rg.svg.SvgScaleRule(panel,orientation).scale($closure(scale,"scale")).range($closure(scale,"range")).ticks($closure(scale,"ticks")).key(function(d,i) {
		$s.push("rg.svg.SvgScaleRule::ofLinear@21");
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
rg.svg.SvgScaleRule.ofOrdinal = function(panel,orientation,scale) {
	$s.push("rg.svg.SvgScaleRule::ofOrdinal");
	var $spos = $s.length;
	var _scale = function(d,i) {
		$s.push("rg.svg.SvgScaleRule::ofOrdinal@27");
		var $spos = $s.length;
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
		var $tmp = s.scale(d);
		$s.pop();
		return $tmp;
		$s.pop();
	};
	var $tmp = new rg.svg.SvgScaleRule(panel,orientation).scale(_scale).range($closure(scale,"range")).ticks($closure(scale,"getDomain")).key(function(d,i) {
		$s.push("rg.svg.SvgScaleRule::ofOrdinal@40");
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
rg.svg.SvgScaleRule.boundsOfLinear = function(panel,orientation,scale) {
	$s.push("rg.svg.SvgScaleRule::boundsOfLinear");
	var $spos = $s.length;
	var $tmp = rg.svg.SvgScaleRule.ofLinear(panel,orientation,scale).ticks(function() {
		$s.push("rg.svg.SvgScaleRule::boundsOfLinear@47");
		var $spos = $s.length;
		var $tmp = scale.getDomain();
		$s.pop();
		return $tmp;
		$s.pop();
	});
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
	if(null == this._maxRange) {
		$s.pop();
		return;
	}
	this._range([0.0,this._maxRange()]);
	var g = this.svg.selectAll("g." + this._axis).data(this._ticks(),this._key);
	g.update().attr("transform").stringf(this._t).selectAll("line.rule").attr(this._oaxis + "1")["float"](0).attr(this._oaxis + "2")["float"](this._length());
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
	var me = this;
	switch( (this._orientation = o)[1] ) {
	case 0:
		this._axis = "x";
		this._oaxis = "y";
		this._t = $closure(this,"translateX");
		this._maxRange = function() {
			$s.push("rg.svg.SvgScaleRule::orientation@147");
			var $spos = $s.length;
			var $tmp = me.width;
			$s.pop();
			return $tmp;
			$s.pop();
		};
		this._length = function() {
			$s.push("rg.svg.SvgScaleRule::orientation@148");
			var $spos = $s.length;
			var $tmp = me.height;
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
			$s.push("rg.svg.SvgScaleRule::orientation@153");
			var $spos = $s.length;
			var $tmp = me.height;
			$s.pop();
			return $tmp;
			$s.pop();
		};
		this._length = function() {
			$s.push("rg.svg.SvgScaleRule::orientation@154");
			var $spos = $s.length;
			var $tmp = me.width;
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
	$s.push("rg.svg.SvgPieChart::new");
	var $spos = $s.length;
	this._padding = 30;
	this._created = 0;
	rg.svg.SvgLayer.call(this,panel);
	this._ease = thx.math.Equations.elasticf();
	this._duration = 1500;
	this.redraw();
	$s.pop();
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
	$s.push("rg.svg.SvgPieChart::tooltip");
	var $spos = $s.length;
	var $tmp = label + ": " + Ints.format(value);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgPieChart.prototype.label = function(label,value,total) {
	$s.push("rg.svg.SvgPieChart::label");
	var $spos = $s.length;
	var $tmp = thx.culture.FormatNumber.percent(value / total * 100,1);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgPieChart.prototype._label = function(d,i) {
	$s.push("rg.svg.SvgPieChart::_label");
	var $spos = $s.length;
	var $tmp = this.label(this._labels[i],d.value,this._total);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgPieChart.prototype.init = function() {
	$s.push("rg.svg.SvgPieChart::init");
	var $spos = $s.length;
	rg.svg.SvgLayer.prototype.init.call(this);
	this.svg.classed().add("pie-chart");
	this.svg.append("svg:defs");
	$s.pop();
}
rg.svg.SvgPieChart.prototype.redraw = function() {
	$s.push("rg.svg.SvgPieChart::redraw");
	var $spos = $s.length;
	this._r = Math.min(this.width,this.height) / 2 - this._padding;
	this._pie = new thx.geom.layout.Pie();
	this._arc = thx.svg.Arc.fromAngleObject().innerRadius(this._r * .2).outerRadius(this._r);
	this._startarc = thx.svg.Arc.fromAngleObject().innerRadius(this._r * .2).outerRadius(this._r * .2);
	this._bigarc = thx.svg.Arc.fromAngleObject().innerRadius(this._r * .4).outerRadius(this._r + this._padding * .9);
	if(null == this._data || this._data.length == 0) {
		$s.pop();
		return;
	}
	this._redraw();
	$s.pop();
}
rg.svg.SvgPieChart.prototype.getData = function() {
	$s.push("rg.svg.SvgPieChart::getData");
	var $spos = $s.length;
	var $tmp = this._data;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgPieChart.prototype.data = function(d) {
	$s.push("rg.svg.SvgPieChart::data");
	var $spos = $s.length;
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
	$s.pop();
}
rg.svg.SvgPieChart.prototype.sliceid = function(d,i) {
	$s.push("rg.svg.SvgPieChart::sliceid");
	var $spos = $s.length;
	var $tmp = this._labels[i];
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgPieChart.prototype._keyLayer = function(_,i) {
	$s.push("rg.svg.SvgPieChart::_keyLayer");
	var $spos = $s.length;
	var $tmp = this._labels[i];
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgPieChart.prototype._redraw = function() {
	$s.push("rg.svg.SvgPieChart::_redraw");
	var $spos = $s.length;
	var vis = this.svg.data([this._data]).update();
	var selection = vis.selectAll("g.group").dataf($closure(this._pie,"pie"),$closure(this,"sliceid"));
	selection.update().select("path").transition().ease(this._ease).duration(null,this._duration).attr("d").stringf($closure(this._arc,"shape"));
	selection.update().select("text").text().stringf($closure(this,"_label")).transition().ease(this._ease).duration(null,this._duration).attr("transform").stringf($closure(this,"transformLabel")).attr("display").stringf(function(d,i) {
		$s.push("rg.svg.SvgPieChart::_redraw@174");
		var $spos = $s.length;
		var $tmp = d.value > .15?null:"none";
		$s.pop();
		return $tmp;
		$s.pop();
	});
	var arcs = selection.enter().append("svg:g").attr("class").stringf(function(d,i) {
		$s.push("rg.svg.SvgPieChart::_redraw@185");
		var $spos = $s.length;
		var $tmp = "group item-" + i;
		$s.pop();
		return $tmp;
		$s.pop();
	}).attr("transform").string("translate(" + (this._padding + this._r) + "," + (this._padding + this._r) + ")");
	arcs.onNode("mouseover.animation",$closure(this,"_highlight")).onNode("mouseout.animation",$closure(this,"_backtonormal"));
	arcs.on("mousemove.tooltip",$closure(this,"_showtooltip")).on("mouseout.tooltip",$closure(this,"_hidetooltip"));
	arcs.append("svg:path").attr("class").string("slice").attr("d").stringf($closure(this._startarc,"shape"));
	arcs.eachNode($closure(this,"_arcinp"));
	arcs.append("svg:text").attr("transform").stringf($closure(this,"transformStartLabel")).attr("dy").string(".35em").attr("text-anchor").string("middle").attr("display").stringf(function(d,i) {
		$s.push("rg.svg.SvgPieChart::_redraw@230");
		var $spos = $s.length;
		var $tmp = d.value > .15?null:"none";
		$s.pop();
		return $tmp;
		$s.pop();
	}).text().stringf($closure(this,"_label")).style("opacity")["float"](0).eachNode($closure(this,"_arcint"));
	$s.pop();
}
rg.svg.SvgPieChart.prototype._arcinp = function(n,i) {
	$s.push("rg.svg.SvgPieChart::_arcinp");
	var $spos = $s.length;
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
	$s.pop();
}
rg.svg.SvgPieChart.prototype._arcint = function(n,i) {
	$s.push("rg.svg.SvgPieChart::_arcint");
	var $spos = $s.length;
	thx.js.Dom.selectNodeData(n).transition().ease(this._ease).duration(null,this._duration).delay(null,150 * (i - this._created)).style("opacity")["float"](1).attr("transform").stringf($closure(this,"transformLabel"));
	if(i == this._data.length - 1) this._created = i;
	$s.pop();
}
rg.svg.SvgPieChart.prototype._highlight = function(d,i) {
	$s.push("rg.svg.SvgPieChart::_highlight");
	var $spos = $s.length;
	var slice = thx.js.Dom.selectNodeData(d).selectAll("path");
	slice.transition().ease(this._ease).duration(null,this._duration).attr("d").stringf($closure(this._bigarc,"shape"));
	$s.pop();
}
rg.svg.SvgPieChart.prototype._backtonormal = function(d,i) {
	$s.push("rg.svg.SvgPieChart::_backtonormal");
	var $spos = $s.length;
	var slice = thx.js.Dom.selectNodeData(d).selectAll("path");
	slice.transition().ease(this._ease).duration(null,this._duration).attr("d").stringf($closure(this._arc,"shape"));
	$s.pop();
}
rg.svg.SvgPieChart.prototype._showtooltip = function(d,i) {
	$s.push("rg.svg.SvgPieChart::_showtooltip");
	var $spos = $s.length;
	var v = this.tooltip(this._labels[i],d.value,this._total);
	rg.chart.ToolTip.display(v);
	$s.pop();
}
rg.svg.SvgPieChart.prototype._hidetooltip = function(d,i) {
	$s.push("rg.svg.SvgPieChart::_hidetooltip");
	var $spos = $s.length;
	rg.chart.ToolTip.display(null);
	$s.pop();
}
rg.svg.SvgPieChart.prototype.transformLabel = function(d,i) {
	$s.push("rg.svg.SvgPieChart::transformLabel");
	var $spos = $s.length;
	var c = this._arc.centroid(d);
	var a = -90 + 57.29577951308232088 * ((d.endAngle - d.startAngle) / 2 + d.startAngle);
	if(a > 90) a -= 180;
	var $tmp = "translate(" + c[0] + "," + c[1] + ") rotate(" + a + ")";
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgPieChart.prototype.transformStartLabel = function(d,i) {
	$s.push("rg.svg.SvgPieChart::transformStartLabel");
	var $spos = $s.length;
	var c = this._startarc.centroid(d);
	var a = -90 + 57.29577951308232088 * ((d.endAngle - d.startAngle) / 2 + d.startAngle);
	if(a > 90) a -= 180;
	var $tmp = "translate(" + c[0] + "," + c[1] + ") rotate(" + a + ")";
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgPieChart.prototype.__class__ = rg.svg.SvgPieChart;
if(!rg.chart) rg.chart = {}
rg.chart.ToolTip = function(p) {
	if( p === $_ ) return;
	$s.push("rg.chart.ToolTip::new");
	var $spos = $s.length;
	this._visible = false;
	this._el = js.Lib.document.createElement("div");
	js.Lib.document.body.appendChild(this._el);
	this._el.id = "tooltip";
	this._el.style.position = "absolute";
	this._el.style.display = "none";
	$s.pop();
}
rg.chart.ToolTip.__name__ = ["rg","chart","ToolTip"];
rg.chart.ToolTip._tooltip = null;
rg.chart.ToolTip.display = function(text,x,y) {
	$s.push("rg.chart.ToolTip::display");
	var $spos = $s.length;
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
	$s.pop();
}
rg.chart.ToolTip.prototype._visible = null;
rg.chart.ToolTip.prototype._el = null;
rg.chart.ToolTip.prototype._text = null;
rg.chart.ToolTip.prototype.setText = function(text) {
	$s.push("rg.chart.ToolTip::setText");
	var $spos = $s.length;
	if(text != this._text) this._el.innerHTML = this._text = text;
	$s.pop();
}
rg.chart.ToolTip.prototype.hide = function() {
	$s.push("rg.chart.ToolTip::hide");
	var $spos = $s.length;
	if(!this._visible) {
		$s.pop();
		return;
	}
	this._visible = false;
	this._el.style.display = "none";
	$s.pop();
}
rg.chart.ToolTip.prototype.show = function() {
	$s.push("rg.chart.ToolTip::show");
	var $spos = $s.length;
	if(this._visible) {
		$s.pop();
		return;
	}
	this._visible = true;
	this._el.style.display = "block";
	$s.pop();
}
rg.chart.ToolTip.prototype.moveAt = function(x,y) {
	$s.push("rg.chart.ToolTip::moveAt");
	var $spos = $s.length;
	var w = this._el.clientWidth;
	var h = this._el.clientHeight;
	this._el.style.left = x - w / 2 + "px";
	this._el.style.top = y - h - 10 + "px";
	$s.pop();
}
rg.chart.ToolTip.prototype.__class__ = rg.chart.ToolTip;
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
thx.js.AccessClassed.getRe = function(name) {
	$s.push("thx.js.AccessClassed::getRe");
	var $spos = $s.length;
	var $tmp = new EReg("(^|\\s+)" + thx.text.ERegs.escapeERegChars(name) + "(\\s+|$)","g");
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessClassed.prototype.toggle = function(name) {
	$s.push("thx.js.AccessClassed::toggle");
	var $spos = $s.length;
	if(this.exists(name)) this.remove(name); else this.add(name);
	var $tmp = this.selection;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessClassed.prototype.exists = function(name) {
	$s.push("thx.js.AccessClassed::exists");
	var $spos = $s.length;
	var $tmp = this.selection.firstNode(function(node) {
		$s.push("thx.js.AccessClassed::exists@31");
		var $spos = $s.length;
		var list = node.classList;
		if(null != list) {
			var $tmp = list.contains(name);
			$s.pop();
			return $tmp;
		}
		var cls = node.className;
		var re = new EReg("(^|\\s+)" + thx.text.ERegs.escapeERegChars(name) + "(\\s+|$)","g");
		var bv = cls.baseVal;
		var $tmp = re.match(null != bv?bv:cls);
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessClassed.prototype.remove = function(name) {
	$s.push("thx.js.AccessClassed::remove");
	var $spos = $s.length;
	this.selection.eachNode((function(f,a1) {
		$s.push("thx.js.AccessClassed::remove@44");
		var $spos = $s.length;
		var $tmp = function(a2,a3) {
			$s.push("thx.js.AccessClassed::remove@44@44");
			var $spos = $s.length;
			var $tmp = f(a1,a2,a3);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
		$s.pop();
	})($closure(this,"_remove"),name));
	var $tmp = this.selection;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessClassed.prototype._remove = function(name,node,i) {
	$s.push("thx.js.AccessClassed::_remove");
	var $spos = $s.length;
	var list = node.classList;
	if(null != list) {
		list.remove(name);
		$s.pop();
		return;
	}
	var cls = node.className, clsb = null != cls.baseVal, clsv = clsb?cls.baseVal:cls;
	var re = new EReg("(^|\\s+)" + thx.text.ERegs.escapeERegChars(name) + "(\\s+|$)","g");
	clsv = Strings.collapse(re.replace(clsv," "));
	if(clsb) cls.baseVal = clsv; else node.className = clsv;
	$s.pop();
}
thx.js.AccessClassed.prototype.add = function(name) {
	$s.push("thx.js.AccessClassed::add");
	var $spos = $s.length;
	this.selection.eachNode((function(f,a1) {
		$s.push("thx.js.AccessClassed::add@73");
		var $spos = $s.length;
		var $tmp = function(a2,a3) {
			$s.push("thx.js.AccessClassed::add@73@73");
			var $spos = $s.length;
			var $tmp = f(a1,a2,a3);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
		$s.pop();
	})($closure(this,"_add"),name));
	var $tmp = this.selection;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessClassed.prototype._add = function(name,node,i) {
	$s.push("thx.js.AccessClassed::_add");
	var $spos = $s.length;
	var list = node.classList;
	if(null != list) {
		list.add(name);
		$s.pop();
		return;
	}
	var cls = node.className, clsb = null != cls.baseVal, clsv = clsb?cls.baseVal:cls;
	var re = new EReg("(^|\\s+)" + thx.text.ERegs.escapeERegChars(name) + "(\\s+|$)","g");
	if(!re.match(clsv)) {
		clsv = Strings.collapse(clsv + " " + name);
		if(clsb) cls.baseVal = clsv; else node.className = clsv;
	}
	$s.pop();
}
thx.js.AccessClassed.prototype.get = function() {
	$s.push("thx.js.AccessClassed::get");
	var $spos = $s.length;
	var node = this.selection.node(), list = node.classList;
	if(null != list) {
		var $tmp = Ints.range(list.length).map(function(_,i) {
			$s.push("thx.js.AccessClassed::get@107");
			var $spos = $s.length;
			var $tmp = list.item(i);
			$s.pop();
			return $tmp;
			$s.pop();
		}).join(" ");
		$s.pop();
		return $tmp;
	}
	var cls = node.className, clsb = null != cls.baseVal;
	if(clsb) {
		var $tmp = cls.baseVal;
		$s.pop();
		return $tmp;
	} else {
		$s.pop();
		return cls;
	}
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
thx.js.AccessDataClassed.prototype.removef = function(v) {
	$s.push("thx.js.AccessDataClassed::removef");
	var $spos = $s.length;
	var f = $closure(this,"_remove");
	this.selection.eachNode(function(node,i) {
		$s.push("thx.js.AccessDataClassed::removef@135");
		var $spos = $s.length;
		var c = v(Reflect.field(node,"__data__"),i);
		if(null != c) f(c,node,i);
		$s.pop();
	});
	var $tmp = this.selection;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessDataClassed.prototype.addf = function(v) {
	$s.push("thx.js.AccessDataClassed::addf");
	var $spos = $s.length;
	var f = $closure(this,"_add");
	this.selection.eachNode(function(node,i) {
		$s.push("thx.js.AccessDataClassed::addf@146");
		var $spos = $s.length;
		var c = v(Reflect.field(node,"__data__"),i);
		if(null != c) f(c,node,i);
		$s.pop();
	});
	var $tmp = this.selection;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessDataClassed.prototype.__class__ = thx.js.AccessDataClassed;
Types = function() { }
Types.__name__ = ["Types"];
Types.className = function(o) {
	$s.push("Types::className");
	var $spos = $s.length;
	var $tmp = Type.getClassName(Type.getClass(o)).split(".").pop();
	$s.pop();
	return $tmp;
	$s.pop();
}
Types.fullName = function(o) {
	$s.push("Types::fullName");
	var $spos = $s.length;
	var $tmp = Type.getClassName(Type.getClass(o));
	$s.pop();
	return $tmp;
	$s.pop();
}
Types.typeName = function(o) {
	$s.push("Types::typeName");
	var $spos = $s.length;
	var $tmp = (function($this) {
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
	$s.pop();
	return $tmp;
	$s.pop();
}
Types.hasSuperClass = function(type,sup) {
	$s.push("Types::hasSuperClass");
	var $spos = $s.length;
	while(null != type) {
		if(type == sup) {
			$s.pop();
			return true;
		}
		type = Type.getSuperClass(type);
	}
	$s.pop();
	return false;
	$s.pop();
}
Types.isAnonymous = function(v) {
	$s.push("Types::isAnonymous");
	var $spos = $s.length;
	var $tmp = Reflect.isObject(v) && null == Type.getClass(v);
	$s.pop();
	return $tmp;
	$s.pop();
}
Types["as"] = function(value,type) {
	$s.push("Types::as");
	var $spos = $s.length;
	var $tmp = Std["is"](value,type)?value:null;
	$s.pop();
	return $tmp;
	$s.pop();
}
Types.ifIs = function(value,type,handler) {
	$s.push("Types::ifIs");
	var $spos = $s.length;
	if(Std["is"](value,type)) handler(value);
	$s.pop();
	return value;
	$s.pop();
}
Types.of = function(type,value) {
	$s.push("Types::of");
	var $spos = $s.length;
	var $tmp = Std["is"](value,type)?value:null;
	$s.pop();
	return $tmp;
	$s.pop();
}
Types.sameType = function(a,b) {
	$s.push("Types::sameType");
	var $spos = $s.length;
	if(null == a && b == null) {
		$s.pop();
		return true;
	}
	if(null == a || b == null) {
		$s.pop();
		return false;
	}
	var tb = Type["typeof"](b);
	var $e = (tb);
	switch( $e[1] ) {
	case 6:
		var c = $e[2];
		var $tmp = Std["is"](a,c);
		$s.pop();
		return $tmp;
	case 7:
		var e = $e[2];
		var $tmp = Std["is"](a,e);
		$s.pop();
		return $tmp;
	default:
		var $tmp = Type["typeof"](a) == tb;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Types.isPrimitive = function(v) {
	$s.push("Types::isPrimitive");
	var $spos = $s.length;
	var $tmp = (function($this) {
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
	$s.pop();
	return $tmp;
	$s.pop();
}
Types.prototype.__class__ = Types;
hxevents.EventException = { __ename__ : ["hxevents","EventException"], __constructs__ : ["StopPropagation"] }
hxevents.EventException.StopPropagation = ["StopPropagation",0];
hxevents.EventException.StopPropagation.toString = $estr;
hxevents.EventException.StopPropagation.__enum__ = hxevents.EventException;
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
if(!thx.date) thx.date = {}
thx.date.DateParser = function() { }
thx.date.DateParser.__name__ = ["thx","date","DateParser"];
thx.date.DateParser.parse = function(s,d) {
	$s.push("thx.date.DateParser::parse");
	var $spos = $s.length;
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
	var $tmp = Date.fromTime(new Date(year,month,day,time.hour,time.minute,time.second).getTime() + time.millis);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.date.DateParser.parseTime = function(s) {
	$s.push("thx.date.DateParser::parseTime");
	var $spos = $s.length;
	var result = { hour : 0, minute : 0, second : 0, millis : 0.0, matched : null};
	if(!thx.date.DateParser.timeexp.match(s)) {
		$s.pop();
		return result;
	}
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
	$s.pop();
	return result;
	$s.pop();
}
thx.date.DateParser.fixyear = function(y) {
	$s.push("thx.date.DateParser::fixyear");
	var $spos = $s.length;
	if(y < 70) {
		var $tmp = 2000 + y;
		$s.pop();
		return $tmp;
	} else if(y < 100) {
		var $tmp = 1900 + y;
		$s.pop();
		return $tmp;
	} else {
		$s.pop();
		return y;
	}
	$s.pop();
}
thx.date.DateParser.last = function(s) {
	$s.push("thx.date.DateParser::last");
	var $spos = $s.length;
	if(null == s) {
		$s.pop();
		return false;
	} else {
		var $tmp = "last" == s.toLowerCase();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
thx.date.DateParser.next = function(s) {
	$s.push("thx.date.DateParser::next");
	var $spos = $s.length;
	if(null == s) {
		$s.pop();
		return true;
	} else {
		var $tmp = "next" == s.toLowerCase();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
thx.date.DateParser.plusPm = function(s) {
	$s.push("thx.date.DateParser::plusPm");
	var $spos = $s.length;
	if(null == s) {
		$s.pop();
		return 0;
	} else {
		var $tmp = (function($this) {
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
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
thx.date.DateParser.prototype.__class__ = thx.date.DateParser;
rg.util.Domain = function(type) {
	if( type === $_ ) return;
	$s.push("rg.util.Domain::new");
	var $spos = $s.length;
	this._type = type;
	this.onChange = new hxevents.Notifier();
	this._values = [];
	$s.pop();
}
rg.util.Domain.__name__ = ["rg","util","Domain"];
rg.util.Domain.prototype._values = null;
rg.util.Domain.prototype._type = null;
rg.util.Domain.prototype.onChange = null;
rg.util.Domain.prototype.set = function(index,value) {
	$s.push("rg.util.Domain::set");
	var $spos = $s.length;
	if(this._values[index] == value) {
		$s.pop();
		return this;
	}
	this._values[index] = value;
	this.onChange.dispatch();
	$s.pop();
	return this;
	$s.pop();
}
rg.util.Domain.prototype.get = function(index) {
	$s.push("rg.util.Domain::get");
	var $spos = $s.length;
	var $tmp = this._values[index];
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.util.Domain.prototype.setAll = function(a) {
	$s.push("rg.util.Domain::setAll");
	var $spos = $s.length;
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
	$s.pop();
	return this;
	$s.pop();
}
rg.util.Domain.prototype.getAll = function() {
	$s.push("rg.util.Domain::getAll");
	var $spos = $s.length;
	var $tmp = this._values.copy();
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.util.Domain.prototype.getType = function() {
	$s.push("rg.util.Domain::getType");
	var $spos = $s.length;
	var $tmp = this._type;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.util.Domain.prototype.__class__ = rg.util.Domain;
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
	var start = Arrays.min(this._domain), stop = Arrays.max(this._domain), span = stop - start, step = Math.pow(10,Math.floor(Math.log(span / this.m) / 2.302585092994046)), err = this.m / (span / step);
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
thx.math.scale.LinearTime = function(p) {
	if( p === $_ ) return;
	$s.push("thx.math.scale.LinearTime::new");
	var $spos = $s.length;
	thx.math.scale.Linear.call(this);
	this._usetimeticks = false;
	this._maxnumberofticks = 10;
	$s.pop();
}
thx.math.scale.LinearTime.__name__ = ["thx","math","scale","LinearTime"];
thx.math.scale.LinearTime.__super__ = thx.math.scale.Linear;
for(var k in thx.math.scale.Linear.prototype ) thx.math.scale.LinearTime.prototype[k] = thx.math.scale.Linear.prototype[k];
thx.math.scale.LinearTime.guessPeriodicity = function(a,b,disc) {
	$s.push("thx.math.scale.LinearTime::guessPeriodicity");
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
thx.math.scale.LinearTime.prototype._maxnumberofticks = null;
thx.math.scale.LinearTime.prototype._periodicity = null;
thx.math.scale.LinearTime.prototype.domain = function(d) {
	$s.push("thx.math.scale.LinearTime::domain");
	var $spos = $s.length;
	thx.math.scale.Linear.prototype.domain.call(this,d);
	this._periodicity = thx.math.scale.LinearTime.guessPeriodicity(d[0],d[1]);
	$s.pop();
	return this;
	$s.pop();
}
thx.math.scale.LinearTime.prototype.getPeriodicity = function() {
	$s.push("thx.math.scale.LinearTime::getPeriodicity");
	var $spos = $s.length;
	var $tmp = this._periodicity;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.LinearTime.prototype.periodicity = function(v) {
	$s.push("thx.math.scale.LinearTime::periodicity");
	var $spos = $s.length;
	v = v.toLowerCase();
	if(!Arrays.exists(thx.math.scale.LinearTime.valids,v)) throw new thx.error.Error("invalid periodicity '{0}'",null,v,{ fileName : "LinearTime.hx", lineNumber : 58, className : "thx.math.scale.LinearTime", methodName : "periodicity"});
	this._periodicity = v;
	$s.pop();
	return this;
	$s.pop();
}
thx.math.scale.LinearTime.prototype.tickFormat = function(v,i) {
	$s.push("thx.math.scale.LinearTime::tickFormat");
	var $spos = $s.length;
	var d = Date.fromTime(v);
	switch(this._periodicity) {
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
	return "invalid date periodicity";
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
thx.math.scale.LinearTime.prototype.getMaxNumberOfTicks = function() {
	$s.push("thx.math.scale.LinearTime::getMaxNumberOfTicks");
	var $spos = $s.length;
	var $tmp = this._maxnumberofticks;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.LinearTime.prototype.maxNumberOfTicks = function(v) {
	$s.push("thx.math.scale.LinearTime::maxNumberOfTicks");
	var $spos = $s.length;
	this._maxnumberofticks = v;
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
	var rsteps = Math.ceil((stop - start) / step);
	while(rsteps > this._maxnumberofticks) {
		step *= 2;
		rsteps = Math.ceil((stop - start) / step);
	}
	start = Math.ceil(start / step) * step;
	stop = Math.floor(stop / step) * step + step * .5;
	var $tmp = Floats.range(start,stop,step);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.LinearTime.prototype.__class__ = thx.math.scale.LinearTime;
if(!thx.text) thx.text = {}
thx.text.ERegs = function() { }
thx.text.ERegs.__name__ = ["thx","text","ERegs"];
thx.text.ERegs.escapeERegChars = function(s) {
	$s.push("thx.text.ERegs::escapeERegChars");
	var $spos = $s.length;
	var $tmp = thx.text.ERegs._escapePattern.customReplace(s,function(e) {
		$s.push("thx.text.ERegs::escapeERegChars@8");
		var $spos = $s.length;
		var $tmp = "\\" + e.matched(0);
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.text.ERegs.prototype.__class__ = thx.text.ERegs;
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
rg.svg.SvgTitle = function(panel,text,anchor,padding,className) {
	if( panel === $_ ) return;
	$s.push("rg.svg.SvgTitle::new");
	var $spos = $s.length;
	if(className == null) className = "title";
	if(padding == null) padding = 1;
	rg.svg.SvgLayer.call(this,panel);
	this.setText(text);
	this.setAnchor(anchor);
	this.setPadding(padding);
	this.setClassName(className);
	$s.pop();
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
	$s.push("rg.svg.SvgTitle::init");
	var $spos = $s.length;
	this._gtext = this.svg.append("svg:g");
	this._text = this._gtext.append("svg:text").attr("class").string(this.className).attr("text-anchor").string("middle");
	$s.pop();
}
rg.svg.SvgTitle.prototype.redraw = function() {
	$s.push("rg.svg.SvgTitle::redraw");
	var $spos = $s.length;
	$s.pop();
}
rg.svg.SvgTitle.prototype.resize = function() {
	$s.push("rg.svg.SvgTitle::resize");
	var $spos = $s.length;
	if(null == this._text || null == this.anchor || null == this.width || this.padding == null) {
		$s.pop();
		return;
	}
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
	$s.pop();
}
rg.svg.SvgTitle.prototype.setText = function(v) {
	$s.push("rg.svg.SvgTitle::setText");
	var $spos = $s.length;
	this.text = v;
	if(null != this._text) this._text.text().string(this.text);
	$s.pop();
	return v;
	$s.pop();
}
rg.svg.SvgTitle.prototype.setClassName = function(v) {
	$s.push("rg.svg.SvgTitle::setClassName");
	var $spos = $s.length;
	this.className = v;
	if(null != this._text) this._text.attr("class").string(v);
	$s.pop();
	return v;
	$s.pop();
}
rg.svg.SvgTitle.prototype.setAnchor = function(v) {
	$s.push("rg.svg.SvgTitle::setAnchor");
	var $spos = $s.length;
	this.anchor = v;
	this.resize();
	$s.pop();
	return v;
	$s.pop();
}
rg.svg.SvgTitle.prototype.setPadding = function(v) {
	$s.push("rg.svg.SvgTitle::setPadding");
	var $spos = $s.length;
	this.padding = v;
	this.resize();
	$s.pop();
	return v;
	$s.pop();
}
rg.svg.SvgTitle.prototype.__class__ = rg.svg.SvgTitle;
thx.svg.LineInterpolators = function() { }
thx.svg.LineInterpolators.__name__ = ["thx","svg","LineInterpolators"];
thx.svg.LineInterpolators.parse = function(s,sep) {
	$s.push("thx.svg.LineInterpolators::parse");
	var $spos = $s.length;
	if(sep == null) sep = "-";
	var interp = s.split(sep)[0].toLowerCase();
	var $tmp = (function($this) {
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
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.LineInterpolators.argument = function(s) {
	$s.push("thx.svg.LineInterpolators::argument");
	var $spos = $s.length;
	var v = s.split("-")[1];
	if(null == v) {
		$s.pop();
		return null;
	} else {
		var $tmp = Std.parseFloat(v);
		$s.pop();
		return $tmp;
	}
	$s.pop();
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
	$s.push("rg.svg.SvgFunnelChart::new");
	var $spos = $s.length;
	rg.svg.SvgLayer.call(this,panel);
	this.padding = 2;
	$s.pop();
}
rg.svg.SvgFunnelChart.__name__ = ["rg","svg","SvgFunnelChart"];
rg.svg.SvgFunnelChart.__super__ = rg.svg.SvgLayer;
for(var k in rg.svg.SvgLayer.prototype ) rg.svg.SvgFunnelChart.prototype[k] = rg.svg.SvgLayer.prototype[k];
rg.svg.SvgFunnelChart.prototype.padding = null;
rg.svg.SvgFunnelChart.prototype._data = null;
rg.svg.SvgFunnelChart.prototype.data = function(d) {
	$s.push("rg.svg.SvgFunnelChart::data");
	var $spos = $s.length;
	this._data = d;
	this.redraw();
	$s.pop();
}
rg.svg.SvgFunnelChart.prototype.init = function() {
	$s.push("rg.svg.SvgFunnelChart::init");
	var $spos = $s.length;
	this.svg.classed().add("funnel-chart").append("svg:defs");
	$s.pop();
}
rg.svg.SvgFunnelChart.prototype.label = function(d,i) {
	$s.push("rg.svg.SvgFunnelChart::label");
	var $spos = $s.length;
	var $tmp = rg.util.RGStrings.humanize(d.label);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgFunnelChart.prototype.redraw = function() {
	$s.push("rg.svg.SvgFunnelChart::redraw");
	var $spos = $s.length;
	if(null == this._data || 0 == this._data.length) {
		$s.pop();
		return;
	}
	this.svg.selectAll("g").remove();
	this.svg.selectAll("radialGradient").remove();
	var d = this._data, choice = this.svg.selectAll("svg:g").data(d), m = d.length, p = this.padding, h = Math.floor(this.height / (m + 1)) - p, th = p + h, w = this.width / 2, tw = this.width, max = Arrays.floatMax(d,function(d1) {
		$s.push("rg.svg.SvgFunnelChart::redraw@73");
		var $spos = $s.length;
		var $tmp = d1.value;
		$s.pop();
		return $tmp;
		$s.pop();
	}), scale = new thx.math.scale.Linear().domain([0,max]).range([0.0,w]), fx1 = function(v) {
		$s.push("rg.svg.SvgFunnelChart::redraw@75");
		var $spos = $s.length;
		var $tmp = w - scale.scale(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, fx2 = function(v) {
		$s.push("rg.svg.SvgFunnelChart::redraw@76");
		var $spos = $s.length;
		var $tmp = tw - (w - scale.scale(v));
		$s.pop();
		return $tmp;
		$s.pop();
	}, next = function(o,i) {
		$s.push("rg.svg.SvgFunnelChart::redraw@77");
		var $spos = $s.length;
		var $tmp = i + 1 < m?d[i + 1].value:o.value;
		$s.pop();
		return $tmp;
		$s.pop();
	}, diagonal1 = new thx.svg.Diagonal().sourcef(function(o,i) {
		$s.push("rg.svg.SvgFunnelChart::redraw@79");
		var $spos = $s.length;
		var $tmp = [fx1(o.value),0.0];
		$s.pop();
		return $tmp;
		$s.pop();
	}).targetf(function(o,i) {
		$s.push("rg.svg.SvgFunnelChart::redraw@80");
		var $spos = $s.length;
		var $tmp = [fx1(next(o,i)),h];
		$s.pop();
		return $tmp;
		$s.pop();
	}), diagonal2 = new thx.svg.Diagonal().sourcef(function(o,i) {
		$s.push("rg.svg.SvgFunnelChart::redraw@82");
		var $spos = $s.length;
		var $tmp = [fx2(next(o,i)),h];
		$s.pop();
		return $tmp;
		$s.pop();
	}).targetf(function(o,i) {
		$s.push("rg.svg.SvgFunnelChart::redraw@83");
		var $spos = $s.length;
		var $tmp = [fx2(o.value),0.0];
		$s.pop();
		return $tmp;
		$s.pop();
	}), conj = function(v,h1,r,dir) {
		$s.push("rg.svg.SvgFunnelChart::redraw@84");
		var $spos = $s.length;
		if(dir == null) dir = 0;
		if(r == null) r = false;
		var x1 = r?fx2(v):fx1(v), x2 = r?fx1(v) - fx2(v):fx2(v) - fx1(v), y1 = h1, a = 30, b = 3, d1 = r?dir == 0?1:0:dir;
		var $tmp = " a " + a + " " + b + " 0 0 " + d1 + " " + x2 + " 0";
		$s.pop();
		return $tmp;
		$s.pop();
	}, conj1 = function(d1,i) {
		$s.push("rg.svg.SvgFunnelChart::redraw@95");
		var $spos = $s.length;
		var $tmp = conj(d1.value,0,true);
		$s.pop();
		return $tmp;
		$s.pop();
	}, conj2 = function(d1,i) {
		$s.push("rg.svg.SvgFunnelChart::redraw@99");
		var $spos = $s.length;
		var $tmp = conj(next(d1,i),h);
		$s.pop();
		return $tmp;
		$s.pop();
	}, conjr = function(d1,i) {
		$s.push("rg.svg.SvgFunnelChart::redraw@103");
		var $spos = $s.length;
		var $tmp = " M " + fx1(d1.value) + " 0 " + conj(d1.value,0) + conj(d1.value,0,true,1);
		$s.pop();
		return $tmp;
		$s.pop();
	}, me = this;
	var top = this.svg.selectAll("svg:g").data([d[0]]).enter().append("svg:g").attr("transform").stringf(function(d1,i) {
		$s.push("rg.svg.SvgFunnelChart::redraw@112");
		var $spos = $s.length;
		var $tmp = "translate(0," + th * (0.5 + i) + ")";
		$s.pop();
		return $tmp;
		$s.pop();
	});
	top.append("svg:path").attr("class").stringf(function(d1,i) {
		$s.push("rg.svg.SvgFunnelChart::redraw@115");
		var $spos = $s.length;
		var $tmp = "funnel-inside item-" + i;
		$s.pop();
		return $tmp;
		$s.pop();
	}).attr("d").stringf(conjr).eachNode($closure(this,"_internalSection"));
	var t = top.append("svg:g").attr("class").string("first-label").attr("transform").stringf(function(d1,i) {
		$s.push("rg.svg.SvgFunnelChart::redraw@121");
		var $spos = $s.length;
		var $tmp = "translate(" + w + "," + -h / 3 + ")";
		$s.pop();
		return $tmp;
		$s.pop();
	});
	var fontsize = Math.max(10,Math.round(this.height / 16)), bgcolor = "#fff", bgopacity = 0.95, frcolor = "#000", offset = 1;
	t.append("svg:text").attr("text-anchor").string("middle").attr("dominant-baseline").string("middle").style("fill").string(bgcolor).style("opacity")["float"](bgopacity).style("font-weight").string("bold").style("font-size").string(fontsize + "px").attr("transform").stringf(function(d1,i) {
		$s.push("rg.svg.SvgFunnelChart::redraw@134");
		var $spos = $s.length;
		var $tmp = "translate(" + offset + "," + offset + ")";
		$s.pop();
		return $tmp;
		$s.pop();
	}).text().stringf(function(d1,i) {
		$s.push("rg.svg.SvgFunnelChart::redraw@135");
		var $spos = $s.length;
		var $tmp = Floats.format(d1.value,"I");
		$s.pop();
		return $tmp;
		$s.pop();
	}).append("svg:tspan").attr("y").string(fontsize + "px").attr("x").string("0em").attr("class").string("subtitle").style("fill").string(bgcolor).style("font-weight").string("bold").style("font-size").string(fontsize + "px").text().stringf($closure(this,"label"));
	t.append("svg:text").attr("text-anchor").string("middle").attr("dominant-baseline").string("middle").style("fill").string(frcolor).style("font-weight").string("bold").style("font-size").string(fontsize + "px").text().stringf(function(d1,i) {
		$s.push("rg.svg.SvgFunnelChart::redraw@151");
		var $spos = $s.length;
		var $tmp = Floats.format(d1.value,"I");
		$s.pop();
		return $tmp;
		$s.pop();
	}).append("svg:tspan").attr("y").string(fontsize + "px").attr("x").string("0em").attr("class").string("subtitle").style("fill").string(frcolor).style("font-weight").string("bold").style("font-size").string(fontsize + "px").text().stringf($closure(this,"label"));
	var g = choice.enter().append("svg:g").attr("transform").stringf(function(d1,i) {
		$s.push("rg.svg.SvgFunnelChart::redraw@164");
		var $spos = $s.length;
		var $tmp = "translate(0," + (p + h) * (0.5 + i) + ")";
		$s.pop();
		return $tmp;
		$s.pop();
	});
	g.append("svg:path").attr("class").stringf(function(d1,i) {
		$s.push("rg.svg.SvgFunnelChart::redraw@167");
		var $spos = $s.length;
		var $tmp = "funnel-outside item-" + i;
		$s.pop();
		return $tmp;
		$s.pop();
	}).attr("d").stringf(function(d1,i) {
		$s.push("rg.svg.SvgFunnelChart::redraw@168");
		var $spos = $s.length;
		var t1 = diagonal2.diagonal(d1,i).split("C");
		t1.shift();
		var d2 = "C" + t1.join("C");
		var $tmp = diagonal1.diagonal(d1,i) + conj2(d1,i) + d2 + conj1(d1,i);
		$s.pop();
		return $tmp;
		$s.pop();
	});
	g.eachNode((function(f,a1) {
		$s.push("rg.svg.SvgFunnelChart::redraw@174");
		var $spos = $s.length;
		var $tmp = function(a2,a3) {
			$s.push("rg.svg.SvgFunnelChart::redraw@174@174");
			var $spos = $s.length;
			var $tmp = f(a1,a2,a3);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
		$s.pop();
	})($closure(this,"_externalSection"),max));
	var baloonContainer = this.svg, bb = { x : 0.0 + Math.round(tw / 5 * 3), y : 0.0, width : tw / 3, height : 0.0 + this.height}, arrowsize = Math.min(30,h / 3 * 2), arrowdata = this._data.slice(1).map(function(o,i) {
		$s.push("rg.svg.SvgFunnelChart::redraw@178");
		var $spos = $s.length;
		var $tmp = 100 * o.value / max;
		$s.pop();
		return $tmp;
		$s.pop();
	});
	g.each(function(d1,i) {
		$s.push("rg.svg.SvgFunnelChart::redraw@181");
		var $spos = $s.length;
		if(i == 0) {
			$s.pop();
			return;
		}
		var baloon = new rg.svg.SvgBaloon(baloonContainer);
		baloon.setPreferredSide(3);
		baloon.setText([me.label(d1,0),Floats.format(d1.value,"I")]);
		baloon.setBoundingBox(bb);
		baloon.moveTo(tw / 2,Math.round(th * (0.5 + i) + arrowsize) + 0.5,false);
		$s.pop();
	});
	var ga = this.svg.selectAll("g.arrow").data(arrowdata).enter().append("svg:g").attr("class").string("arrow").attr("transform").stringf(function(d1,i) {
		$s.push("rg.svg.SvgFunnelChart::redraw@196");
		var $spos = $s.length;
		var $tmp = "translate(" + tw / 2 + "," + ((p + h) * (1.5 + i) + arrowsize / 2) + ")";
		$s.pop();
		return $tmp;
		$s.pop();
	});
	ga.append("svg:path").attr("transform").string("scale(1.1,0.85)translate(1,1)").attr("class").string("shadow").style("fill").string("#000").attr("opacity")["float"](.25).attr("d").string(thx.svg.Symbol.arrowDownWide(arrowsize * arrowsize));
	ga.append("svg:path").attr("transform").string("scale(1.1,0.8)").attr("d").string(thx.svg.Symbol.arrowDownWide(arrowsize * arrowsize));
	ga.append("svg:text").attr("text-anchor").string("middle").attr("dominant-baseline").string("baseline").style("font-size").string(Math.max(7,Math.round(arrowsize / 7 * 2)) + "px").style("font-family").string("Verdana, helvetica, sans-serif").text().stringf(function(d1,i) {
		$s.push("rg.svg.SvgFunnelChart::redraw@217");
		var $spos = $s.length;
		var $tmp = thx.culture.FormatNumber["int"](d1) + "%";
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
}
rg.svg.SvgFunnelChart.prototype._internalSection = function(n,i) {
	$s.push("rg.svg.SvgFunnelChart::_internalSection");
	var $spos = $s.length;
	var d = thx.js.Dom.selectNode(n), c = d.style("fill").get(), color = thx.color.Colors.parse(c);
	d.style("fill").string(thx.color.Hsl.darker(thx.color.Hsl.toHsl(color),0.6).toRgbString());
	var stops = this.svg.select("defs").append("svg:radialGradient").attr("id").string("rg_funnel_int_gradient_" + i).attr("cx").string("50%").attr("fx").string("75%").attr("cy").string("20%").attr("r").string(Math.round(75) + "%");
	stops.append("svg:stop").attr("offset").string("0%").attr("stop-color").string(thx.color.Hsl.darker(thx.color.Hsl.toHsl(color),1.25).toRgbString());
	stops.append("svg:stop").attr("offset").string("100%").attr("stop-color").string(thx.color.Hsl.darker(thx.color.Hsl.toHsl(color),0.4).toRgbString());
	d.attr("style").string("fill:url(#rg_funnel_int_gradient_" + i + ")");
	$s.pop();
}
rg.svg.SvgFunnelChart.prototype._externalSection = function(max,n,i) {
	$s.push("rg.svg.SvgFunnelChart::_externalSection");
	var $spos = $s.length;
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
	$s.pop();
}
rg.svg.SvgFunnelChart.prototype.resize = function() {
	$s.push("rg.svg.SvgFunnelChart::resize");
	var $spos = $s.length;
	this.redraw();
	$s.pop();
}
rg.svg.SvgFunnelChart.prototype.__class__ = rg.svg.SvgFunnelChart;
Lambda = function() { }
Lambda.__name__ = ["Lambda"];
Lambda.array = function(it) {
	$s.push("Lambda::array");
	var $spos = $s.length;
	var a = new Array();
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		a.push(i);
	}
	$s.pop();
	return a;
	$s.pop();
}
Lambda.list = function(it) {
	$s.push("Lambda::list");
	var $spos = $s.length;
	var l = new List();
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		l.add(i);
	}
	$s.pop();
	return l;
	$s.pop();
}
Lambda.map = function(it,f) {
	$s.push("Lambda::map");
	var $spos = $s.length;
	var l = new List();
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		l.add(f(x));
	}
	$s.pop();
	return l;
	$s.pop();
}
Lambda.mapi = function(it,f) {
	$s.push("Lambda::mapi");
	var $spos = $s.length;
	var l = new List();
	var i = 0;
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		l.add(f(i++,x));
	}
	$s.pop();
	return l;
	$s.pop();
}
Lambda.has = function(it,elt,cmp) {
	$s.push("Lambda::has");
	var $spos = $s.length;
	if(cmp == null) {
		var $it0 = it.iterator();
		while( $it0.hasNext() ) {
			var x = $it0.next();
			if(x == elt) {
				$s.pop();
				return true;
			}
		}
	} else {
		var $it1 = it.iterator();
		while( $it1.hasNext() ) {
			var x = $it1.next();
			if(cmp(x,elt)) {
				$s.pop();
				return true;
			}
		}
	}
	$s.pop();
	return false;
	$s.pop();
}
Lambda.exists = function(it,f) {
	$s.push("Lambda::exists");
	var $spos = $s.length;
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(f(x)) {
			$s.pop();
			return true;
		}
	}
	$s.pop();
	return false;
	$s.pop();
}
Lambda.foreach = function(it,f) {
	$s.push("Lambda::foreach");
	var $spos = $s.length;
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(!f(x)) {
			$s.pop();
			return false;
		}
	}
	$s.pop();
	return true;
	$s.pop();
}
Lambda.iter = function(it,f) {
	$s.push("Lambda::iter");
	var $spos = $s.length;
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		f(x);
	}
	$s.pop();
}
Lambda.filter = function(it,f) {
	$s.push("Lambda::filter");
	var $spos = $s.length;
	var l = new List();
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(f(x)) l.add(x);
	}
	$s.pop();
	return l;
	$s.pop();
}
Lambda.fold = function(it,f,first) {
	$s.push("Lambda::fold");
	var $spos = $s.length;
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		first = f(x,first);
	}
	$s.pop();
	return first;
	$s.pop();
}
Lambda.count = function(it,pred) {
	$s.push("Lambda::count");
	var $spos = $s.length;
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
	$s.pop();
	return n;
	$s.pop();
}
Lambda.empty = function(it) {
	$s.push("Lambda::empty");
	var $spos = $s.length;
	var $tmp = !it.iterator().hasNext();
	$s.pop();
	return $tmp;
	$s.pop();
}
Lambda.indexOf = function(it,v) {
	$s.push("Lambda::indexOf");
	var $spos = $s.length;
	var i = 0;
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var v2 = $it0.next();
		if(v == v2) {
			$s.pop();
			return i;
		}
		i++;
	}
	$s.pop();
	return -1;
	$s.pop();
}
Lambda.concat = function(a,b) {
	$s.push("Lambda::concat");
	var $spos = $s.length;
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
	$s.pop();
	return l;
	$s.pop();
}
Lambda.prototype.__class__ = Lambda;
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
		if(points.length < 4) {
			var $tmp = thx.svg.LineInternals.interpolatePoints(points,thx.svg.LineInterpolator.Linear);
			$s.pop();
			return $tmp;
		}
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
	case 7:
		var tension = $e[2];
		var $tmp = points.length < 4?thx.svg.LineInternals.interpolatePoints(points,thx.svg.LineInterpolator.Linear):points[1][0] + "," + points[1][1] + thx.svg.LineInternals._lineCardinalTangents(points,tension);
		$s.pop();
		return $tmp;
	case 8:
		var tension = $e[2];
		if(null == tension) tension = .7;
		var $tmp = points.length < 3?thx.svg.LineInternals.interpolatePoints(points,thx.svg.LineInterpolator.Linear):points[0][0] + "," + points[0][1] + thx.svg.LineInternals._lineHermite(points,thx.svg.LineInternals._lineCardinalTangents([points[points.length - 2]].concat(points).concat([points[1]]),tension));
		$s.pop();
		return $tmp;
	case 9:
		var $tmp = points.length < 3?thx.svg.LineInternals.interpolatePoints(points,thx.svg.LineInterpolator.Linear):points[0] + thx.svg.LineInternals._lineHermite(points,thx.svg.LineInternals._lineMonotoneTangents(points));
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
thx.svg.LineInternals._lineSlope = function(p0,p1) {
	$s.push("thx.svg.LineInternals::_lineSlope");
	var $spos = $s.length;
	var $tmp = (p1[1] - p0[1]) / (p1[0] - p0[0]);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.LineInternals._lineFiniteDifferences = function(points) {
	$s.push("thx.svg.LineInternals::_lineFiniteDifferences");
	var $spos = $s.length;
	var i = 0, j = points.length - 1, m = [], p0 = points[0], p1 = points[1], d = m[0] = thx.svg.LineInternals._lineSlope(p0,p1);
	while(++i < j) m[i] = d + (d = thx.svg.LineInternals._lineSlope(p0 = p1,p1 = points[i + 1]));
	m[i] = d;
	$s.pop();
	return m;
	$s.pop();
}
thx.svg.LineInternals._lineMonotoneTangents = function(points) {
	$s.push("thx.svg.LineInternals::_lineMonotoneTangents");
	var $spos = $s.length;
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
	$s.pop();
	return tangents;
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
thx.math.scale.Ordinal.prototype.scale = function(x,_) {
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
thx.math.scale.Ordinal.__interfaces__ = [thx.math.scale.IScale];
rg.svg.SvgStreamGraph = function(panel,xscale) {
	if( panel === $_ ) return;
	$s.push("rg.svg.SvgStreamGraph::new");
	var $spos = $s.length;
	this._clipPadding = rg.svg.SvgStreamGraph.defaultClipPadding;
	this._cpid = "streamchart_clip_path_" + ++rg.svg.SvgStreamGraph._pathid;
	rg.svg.SvgLayer.call(this,panel);
	this._scalex = xscale;
	$s.pop();
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
	$s.push("rg.svg.SvgStreamGraph::destroy");
	var $spos = $s.length;
	$s.pop();
}
rg.svg.SvgStreamGraph.prototype.init = function() {
	$s.push("rg.svg.SvgStreamGraph::init");
	var $spos = $s.length;
	this.svg.classed().add("stream-chart").append("svg:clipPath").attr("id").string(this._cpid).append("svg:rect").attr("x")["float"](0).attr("y")["float"](-this._clipPadding).attr("width")["float"](0).attr("height")["float"](0);
	this.svg.attr("clip-path").string("url(#" + this._cpid + ")");
	$s.pop();
}
rg.svg.SvgStreamGraph.prototype.lineInterpolator = function(interpolator) {
	$s.push("rg.svg.SvgStreamGraph::lineInterpolator");
	var $spos = $s.length;
	this._interpolator = interpolator;
	$s.pop();
}
rg.svg.SvgStreamGraph.prototype._redrawn = null;
rg.svg.SvgStreamGraph.prototype.redraw = function() {
	$s.push("rg.svg.SvgStreamGraph::redraw");
	var $spos = $s.length;
	this._redraw();
	$s.pop();
}
rg.svg.SvgStreamGraph.prototype.data = function(d) {
	$s.push("rg.svg.SvgStreamGraph::data");
	var $spos = $s.length;
	this._data = d.map(function(d1,i) {
		$s.push("rg.svg.SvgStreamGraph::data@70");
		var $spos = $s.length;
		var $tmp = d1.values;
		$s.pop();
		return $tmp;
		$s.pop();
	});
	this._prepareData();
	this._redraw();
	$s.pop();
}
rg.svg.SvgStreamGraph.prototype._h = null;
rg.svg.SvgStreamGraph.prototype._w = null;
rg.svg.SvgStreamGraph.prototype._prepareData = function() {
	$s.push("rg.svg.SvgStreamGraph::_prepareData");
	var $spos = $s.length;
	this._prepdata = new thx.geom.layout.Stack().offset(thx.geom.layout.StackOffset.Wiggle).stack(this._data.copy());
	var domx = this._scalex.getDomain();
	var minx = Arrays.min(domx);
	var stepx = Math.abs(this._prepdata[0][1].x - this._prepdata[0][0].x) + minx;
	var h = this._h = this.panel.frame.height;
	var w = this._w = this.panel.frame.width;
	var mx = this._prepdata[0].length, my = Arrays.floatMax(this._prepdata,function(d) {
		$s.push("rg.svg.SvgStreamGraph::_prepareData@88");
		var $spos = $s.length;
		var $tmp = Arrays.floatMax(d,function(d1) {
			$s.push("rg.svg.SvgStreamGraph::_prepareData@88@89");
			var $spos = $s.length;
			var $tmp = d1.y0 + d1.y;
			$s.pop();
			return $tmp;
			$s.pop();
		});
		$s.pop();
		return $tmp;
		$s.pop();
	}) * 1.1;
	var sx = $closure(this._scalex,"scale");
	this._area = new thx.svg.Area().interpolator(this._interpolator).x(function(d,i) {
		$s.push("rg.svg.SvgStreamGraph::_prepareData@98");
		var $spos = $s.length;
		var $tmp = sx(d.x);
		$s.pop();
		return $tmp;
		$s.pop();
	}).y0(function(d,i) {
		$s.push("rg.svg.SvgStreamGraph::_prepareData@99");
		var $spos = $s.length;
		var $tmp = h - d.y0 * h / my;
		$s.pop();
		return $tmp;
		$s.pop();
	}).y1(function(d,i) {
		$s.push("rg.svg.SvgStreamGraph::_prepareData@100");
		var $spos = $s.length;
		var $tmp = h - (d.y + d.y0) * h / my;
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
}
rg.svg.SvgStreamGraph.prototype.updatex = function() {
	$s.push("rg.svg.SvgStreamGraph::updatex");
	var $spos = $s.length;
	var s = this._scalex.scale(Date.now().getTime() - this._timedelta + this._scalex.getDomain()[0]);
	var layer = this.svg.selectAll("g.group").attr("transform").string("translate(-" + s + ",0)");
	$s.pop();
}
rg.svg.SvgStreamGraph.prototype._transition = function() {
	$s.push("rg.svg.SvgStreamGraph::_transition");
	var $spos = $s.length;
	var layer = this.svg.selectAll("g.group").data(this._prepdata);
	layer.update().select("path.line").transition().attr("d").stringf($closure(this._area,"shape"));
	$s.pop();
}
rg.svg.SvgStreamGraph.prototype._over = null;
rg.svg.SvgStreamGraph.prototype.over = function(n,i) {
	$s.push("rg.svg.SvgStreamGraph::over");
	var $spos = $s.length;
	if(null == this._over) {
		$s.pop();
		return;
	}
	this._over(this.getDataAtNode(n),i);
	$s.pop();
}
rg.svg.SvgStreamGraph.prototype._out = null;
rg.svg.SvgStreamGraph.prototype.out = function(n,i) {
	$s.push("rg.svg.SvgStreamGraph::out");
	var $spos = $s.length;
	if(null == this._out) {
		$s.pop();
		return;
	}
	this._out(this.getDataAtNode(n),i);
	$s.pop();
}
rg.svg.SvgStreamGraph.prototype.getDataAtNode = function(n) {
	$s.push("rg.svg.SvgStreamGraph::getDataAtNode");
	var $spos = $s.length;
	var time = this._scalex.invert(thx.js.Svg.mouse(n)[0]);
	var data = Reflect.field(n,"__data__");
	var delta = Math.POSITIVE_INFINITY, pos = 0, v = Math.abs(time - data[0].x);
	while(v < delta) {
		delta = v;
		v = Math.abs(time - data[++pos].x);
	}
	var $tmp = data[pos - 1];
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgStreamGraph.prototype.setTooltip = function(over,out) {
	$s.push("rg.svg.SvgStreamGraph::setTooltip");
	var $spos = $s.length;
	this._over = over;
	this._out = out;
	$s.pop();
}
rg.svg.SvgStreamGraph.prototype._redraw = function() {
	$s.push("rg.svg.SvgStreamGraph::_redraw");
	var $spos = $s.length;
	if(null == this._data) {
		$s.pop();
		return;
	}
	this._timedelta = Date.now().getTime();
	this.svg.select("#" + this._cpid + " rect").attr("width")["float"](this._w).attr("height")["float"](this._h + this._clipPadding * 2);
	var layer = this.svg.selectAll("g.group").data(this._prepdata);
	layer.update().attr("transform").string("translate(0,0)").select("path.line").attr("d").stringf($closure(this._area,"shape"));
	layer.enter().append("svg:g").attr("class").string("group").attr("transform").string("translate(0,0)").onNode("mousemove",$closure(this,"over")).onNode("mouseout",$closure(this,"out")).append("svg:path").attr("class").stringf(function(d,i) {
		$s.push("rg.svg.SvgStreamGraph::_redraw@189");
		var $spos = $s.length;
		var $tmp = "line item-" + i;
		$s.pop();
		return $tmp;
		$s.pop();
	}).attr("d").stringf($closure(this._area,"shape"));
	layer.exit().remove();
	$s.pop();
}
rg.svg.SvgStreamGraph.prototype.__class__ = rg.svg.SvgStreamGraph;
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
		var $tmp = Math.round(time / 1000.0) * 1000.0;
		$s.pop();
		return $tmp;
	case "minute":
		var $tmp = Math.round(time / 60000.0) * 60000.0;
		$s.pop();
		return $tmp;
	case "hour":
		var $tmp = Math.round(time / 3600000.0) * 3600000.0;
		$s.pop();
		return $tmp;
	case "day":
		var $tmp = Math.round(time / 86400000.) * 86400000.;
		$s.pop();
		return $tmp;
	case "week":
		var $tmp = Math.round(time / 604800000.) * 604800000.;
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
	case "eternity":
		$s.pop();
		return 0;
	default:
		var $tmp = (function($this) {
			var $r;
			throw new thx.error.Error("unknown period '{0}'",null,period,{ fileName : "Dates.hx", lineNumber : 109, className : "Dates", methodName : "snap"});
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
		throw new thx.error.Error("unknown week day '{0}'",null,day,{ fileName : "Dates.hx", lineNumber : 134, className : "Dates", methodName : "snapToWeekDay"});
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
Dates.compare = function(a,b) {
	$s.push("Dates::compare");
	var $spos = $s.length;
	var $tmp = Floats.compare(a.getTime(),b.getTime());
	$s.pop();
	return $tmp;
	$s.pop();
}
Dates.prototype.__class__ = Dates;
rg.svg.SvgBaloon = function(container) {
	if( container === $_ ) return;
	$s.push("rg.svg.SvgBaloon::new");
	var $spos = $s.length;
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
		$s.push("rg.svg.SvgBaloon::new@69");
		var $spos = $s.length;
		var $tmp = [d[1],d[0]];
		$s.pop();
		return $tmp;
		$s.pop();
	});
	this.connector = this.baloon.append("svg:path").attr("class").string("baloon-connector").style("fill").string("none").style("display").string("none").attr("transform").string("translate(0, 0)");
	this.frame.append("svg:path").attr("class").string("bg").style("fill").string("#ff9").style("stroke").string("#fa0").style("fill-opacity")["float"](0.9).style("stroke-width")["float"](this._strokeWidth);
	var r = Math.min(10,Math.max(3,this.roundedCorner));
	this.setTextHeight(11);
	$s.pop();
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
	$s.push("rg.svg.SvgBaloon::setPreferredSide");
	var $spos = $s.length;
	this.preferredSide = Ints.clamp(v,0,3);
	this.redraw();
	$s.pop();
	return v;
	$s.pop();
}
rg.svg.SvgBaloon.prototype.setText = function(v) {
	$s.push("rg.svg.SvgBaloon::setText");
	var $spos = $s.length;
	this.text = v;
	this.redraw();
	$s.pop();
	return v;
	$s.pop();
}
rg.svg.SvgBaloon.prototype.setTextHeight = function(v) {
	$s.push("rg.svg.SvgBaloon::setTextHeight");
	var $spos = $s.length;
	this.textHeight = v;
	this.redraw();
	$s.pop();
	return v;
	$s.pop();
}
rg.svg.SvgBaloon.prototype.setPadding = function(v) {
	$s.push("rg.svg.SvgBaloon::setPadding");
	var $spos = $s.length;
	this.padding = v;
	this.redraw();
	$s.pop();
	return v;
	$s.pop();
}
rg.svg.SvgBaloon.prototype.setRoundedCorner = function(v) {
	$s.push("rg.svg.SvgBaloon::setRoundedCorner");
	var $spos = $s.length;
	this.roundedCorner = v;
	this.redraw();
	$s.pop();
	return v;
	$s.pop();
}
rg.svg.SvgBaloon.prototype.setBoundingBox = function(v) {
	$s.push("rg.svg.SvgBaloon::setBoundingBox");
	var $spos = $s.length;
	this.boundingBox = v;
	this.redraw();
	$s.pop();
	return v;
	$s.pop();
}
rg.svg.SvgBaloon.prototype.getBoundingBox = function() {
	$s.push("rg.svg.SvgBaloon::getBoundingBox");
	var $spos = $s.length;
	if(null == this.boundingBox) this.setBoundingBox(this.container.node().getBBox());
	var $tmp = this.boundingBox;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgBaloon.prototype._transition_id = null;
rg.svg.SvgBaloon.prototype.moveTo = function(x,y,animate) {
	$s.push("rg.svg.SvgBaloon::moveTo");
	var $spos = $s.length;
	if(animate == null) animate = true;
	if(animate) {
		var $int = thx.math.Equations.elasticf(), tid = ++this._transition_id, ix = Floats.interpolatef(this.x,x,this._ease), iy = Floats.interpolatef(this.y,y,this._ease), duration = this._duration, mt = $closure(this,"_moveTo"), me = this;
		thx.js.Timer.timer(function(t) {
			$s.push("rg.svg.SvgBaloon::moveTo@152");
			var $spos = $s.length;
			if(tid != me._transition_id) {
				$s.pop();
				return true;
			}
			if(t > duration) {
				mt(x,y);
				$s.pop();
				return true;
			}
			mt(ix(t / duration),iy(t / duration));
			$s.pop();
			return false;
			$s.pop();
		},0);
	} else this._moveTo(x,y);
	$s.pop();
}
rg.svg.SvgBaloon.prototype._moveTo = function(x,y) {
	$s.push("rg.svg.SvgBaloon::_moveTo");
	var $spos = $s.length;
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
	$s.pop();
}
rg.svg.SvgBaloon.prototype.show = function() {
	$s.push("rg.svg.SvgBaloon::show");
	var $spos = $s.length;
	if(!this.visible) {
		$s.pop();
		return;
	}
	this.visible = true;
	this.baloon.style("display").string("block");
	$s.pop();
}
rg.svg.SvgBaloon.prototype.hide = function() {
	$s.push("rg.svg.SvgBaloon::hide");
	var $spos = $s.length;
	if(this.visible) {
		$s.pop();
		return;
	}
	this.visible = false;
	this.baloon.style("display").string("none");
	$s.pop();
}
rg.svg.SvgBaloon.prototype.redraw = function() {
	$s.push("rg.svg.SvgBaloon::redraw");
	var $spos = $s.length;
	if(null == this.text || this.text.length == 0) {
		$s.pop();
		return;
	}
	var key = function(d,i) {
		$s.push("rg.svg.SvgBaloon::redraw@464");
		var $spos = $s.length;
		var $tmp = d + ":" + i;
		$s.pop();
		return $tmp;
		$s.pop();
	};
	var choice = this.frame.selectAll("text").data(this.text,key), th = this.textHeight, linewidth = this.minwidth, pad = this.padding;
	var calculateLineWidth = function(n,i) {
		$s.push("rg.svg.SvgBaloon::redraw@476");
		var $spos = $s.length;
		var v = n.getBBox().width;
		if(v > linewidth) linewidth = v;
		$s.pop();
	};
	choice.enter().append("svg:text").style("font-size").string(th + "px").style("font-weight").string("bold").style("fill").string("#000").text().stringf(function(d,i) {
		$s.push("rg.svg.SvgBaloon::redraw@488");
		var $spos = $s.length;
		$s.pop();
		return d;
		$s.pop();
	}).eachNode(calculateLineWidth).attr("x")["float"](pad).attr("y").floatf(function(_,i) {
		$s.push("rg.svg.SvgBaloon::redraw@491");
		var $spos = $s.length;
		var $tmp = Math.round((0.6 + i) * 1.2 * th + pad);
		$s.pop();
		return $tmp;
		$s.pop();
	}).attr("opacity")["float"](0).transition().duration(null,this._duration).ease(this._ease).delay(null,this._duration / 3).attr("opacity")["float"](1);
	choice.update().text().stringf(function(d,i) {
		$s.push("rg.svg.SvgBaloon::redraw@500");
		var $spos = $s.length;
		$s.pop();
		return d;
		$s.pop();
	}).eachNode(calculateLineWidth).transition().duration(null,this._duration).ease(this._ease).attr("opacity")["float"](1).attr("x")["float"](pad).attr("y").floatf(function(_,i) {
		$s.push("rg.svg.SvgBaloon::redraw@506");
		var $spos = $s.length;
		var $tmp = Math.round((0.6 + i) * 1.2 * th + pad);
		$s.pop();
		return $tmp;
		$s.pop();
	}).style("font-size").string(th + "px").style("font-weight").string("bold");
	choice.exit().transition().ease(this._ease).duration(null,this._duration / 3).attr("opacity")["float"](0).remove();
	this.boxWidth = linewidth + this.padding * 2;
	this.boxHeight = th * this.text.length + this.padding * 2;
	this.frame.selectAll(".bg").transition().ease(this._ease).delay(null,this._duration);
	$s.pop();
}
rg.svg.SvgBaloon.prototype.__class__ = rg.svg.SvgBaloon;
if(!rg.query.js) rg.query.js = {}
rg.query.js.ReportGridExecutor = function(p) {
	$s.push("rg.query.js.ReportGridExecutor::new");
	var $spos = $s.length;
	$s.pop();
}
rg.query.js.ReportGridExecutor.__name__ = ["rg","query","js","ReportGridExecutor"];
rg.query.js.ReportGridExecutor.prototype.children = function(path,options,success,error) {
	$s.push("rg.query.js.ReportGridExecutor::children");
	var $spos = $s.length;
	rg.js.ReportGrid.children(path,options,success,error);
	$s.pop();
}
rg.query.js.ReportGridExecutor.prototype.propertyCount = function(path,options,success,error) {
	$s.push("rg.query.js.ReportGridExecutor::propertyCount");
	var $spos = $s.length;
	rg.js.ReportGrid.propertyCount(path,options,success,error);
	$s.pop();
}
rg.query.js.ReportGridExecutor.prototype.propertySeries = function(path,options,success,error) {
	$s.push("rg.query.js.ReportGridExecutor::propertySeries");
	var $spos = $s.length;
	rg.js.ReportGrid.propertySeries(path,options,success,error);
	$s.pop();
}
rg.query.js.ReportGridExecutor.prototype.propertyValues = function(path,options,success,error) {
	$s.push("rg.query.js.ReportGridExecutor::propertyValues");
	var $spos = $s.length;
	rg.js.ReportGrid.propertyValues(path,options,success,error);
	$s.pop();
}
rg.query.js.ReportGridExecutor.prototype.propertyValueCount = function(path,options,success,error) {
	$s.push("rg.query.js.ReportGridExecutor::propertyValueCount");
	var $spos = $s.length;
	rg.js.ReportGrid.propertyValueCount(path,options,success,error);
	$s.pop();
}
rg.query.js.ReportGridExecutor.prototype.propertyValueSeries = function(path,options,success,error) {
	$s.push("rg.query.js.ReportGridExecutor::propertyValueSeries");
	var $spos = $s.length;
	rg.js.ReportGrid.propertyValueSeries(path,options,success,error);
	$s.pop();
}
rg.query.js.ReportGridExecutor.prototype.searchCount = function(path,options,success,error) {
	$s.push("rg.query.js.ReportGridExecutor::searchCount");
	var $spos = $s.length;
	rg.js.ReportGrid.searchCount(path,options,success,error);
	$s.pop();
}
rg.query.js.ReportGridExecutor.prototype.searchSeries = function(path,options,success,error) {
	$s.push("rg.query.js.ReportGridExecutor::searchSeries");
	var $spos = $s.length;
	rg.js.ReportGrid.searchSeries(path,options,success,error);
	$s.pop();
}
rg.query.js.ReportGridExecutor.prototype.intersect = function(path,options,success,error) {
	$s.push("rg.query.js.ReportGridExecutor::intersect");
	var $spos = $s.length;
	rg.js.ReportGrid.intersect(path,options,success,error);
	$s.pop();
}
rg.query.js.ReportGridExecutor.prototype.__class__ = rg.query.js.ReportGridExecutor;
rg.query.js.ReportGridExecutor.__interfaces__ = [rg.query.IExecutor];
thx.svg.Arc = function(p) {
	if( p === $_ ) return;
	$s.push("thx.svg.Arc::new");
	var $spos = $s.length;
	this._r0 = function(_,_1) {
		$s.push("thx.svg.Arc::new@16");
		var $spos = $s.length;
		$s.pop();
		return 0;
		$s.pop();
	};
	this._r1 = function(_,_1) {
		$s.push("thx.svg.Arc::new@17");
		var $spos = $s.length;
		$s.pop();
		return 1;
		$s.pop();
	};
	this._a0 = function(_,_1) {
		$s.push("thx.svg.Arc::new@18");
		var $spos = $s.length;
		$s.pop();
		return 0;
		$s.pop();
	};
	this._a1 = function(_,_1) {
		$s.push("thx.svg.Arc::new@19");
		var $spos = $s.length;
		var $tmp = Math.PI;
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
}
thx.svg.Arc.__name__ = ["thx","svg","Arc"];
thx.svg.Arc.fromObject = function() {
	$s.push("thx.svg.Arc::fromObject");
	var $spos = $s.length;
	var $tmp = new thx.svg.Arc().innerRadiusf(function(d,_) {
		$s.push("thx.svg.Arc::fromObject@102");
		var $spos = $s.length;
		var $tmp = d.innerRadius;
		$s.pop();
		return $tmp;
		$s.pop();
	}).outerRadiusf(function(d,_) {
		$s.push("thx.svg.Arc::fromObject@103");
		var $spos = $s.length;
		var $tmp = d.outerRadius;
		$s.pop();
		return $tmp;
		$s.pop();
	}).startAnglef(function(d,_) {
		$s.push("thx.svg.Arc::fromObject@104");
		var $spos = $s.length;
		var $tmp = d.startAngle;
		$s.pop();
		return $tmp;
		$s.pop();
	}).endAnglef(function(d,_) {
		$s.push("thx.svg.Arc::fromObject@105");
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
thx.svg.Arc.fromAngleObject = function() {
	$s.push("thx.svg.Arc::fromAngleObject");
	var $spos = $s.length;
	var $tmp = new thx.svg.Arc().startAnglef(function(d,_) {
		$s.push("thx.svg.Arc::fromAngleObject@112");
		var $spos = $s.length;
		var $tmp = d.startAngle;
		$s.pop();
		return $tmp;
		$s.pop();
	}).endAnglef(function(d,_) {
		$s.push("thx.svg.Arc::fromAngleObject@113");
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
thx.svg.Arc.prototype._r0 = null;
thx.svg.Arc.prototype._r1 = null;
thx.svg.Arc.prototype._a0 = null;
thx.svg.Arc.prototype._a1 = null;
thx.svg.Arc.prototype.getInnerRadius = function() {
	$s.push("thx.svg.Arc::getInnerRadius");
	var $spos = $s.length;
	var $tmp = this._r0;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Arc.prototype.innerRadius = function(v) {
	$s.push("thx.svg.Arc::innerRadius");
	var $spos = $s.length;
	var $tmp = this.innerRadiusf(function(_,_1) {
		$s.push("thx.svg.Arc::innerRadius@23");
		var $spos = $s.length;
		$s.pop();
		return v;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Arc.prototype.innerRadiusf = function(v) {
	$s.push("thx.svg.Arc::innerRadiusf");
	var $spos = $s.length;
	this._r0 = v;
	$s.pop();
	return this;
	$s.pop();
}
thx.svg.Arc.prototype.getOuterRadius = function() {
	$s.push("thx.svg.Arc::getOuterRadius");
	var $spos = $s.length;
	var $tmp = this._r1;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Arc.prototype.outerRadius = function(v) {
	$s.push("thx.svg.Arc::outerRadius");
	var $spos = $s.length;
	var $tmp = this.outerRadiusf(function(_,_1) {
		$s.push("thx.svg.Arc::outerRadius@31");
		var $spos = $s.length;
		$s.pop();
		return v;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Arc.prototype.outerRadiusf = function(v) {
	$s.push("thx.svg.Arc::outerRadiusf");
	var $spos = $s.length;
	this._r1 = v;
	$s.pop();
	return this;
	$s.pop();
}
thx.svg.Arc.prototype.getStartAngle = function() {
	$s.push("thx.svg.Arc::getStartAngle");
	var $spos = $s.length;
	var $tmp = this._a0;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Arc.prototype.startAngle = function(v) {
	$s.push("thx.svg.Arc::startAngle");
	var $spos = $s.length;
	var $tmp = this.startAnglef(function(_,_1) {
		$s.push("thx.svg.Arc::startAngle@39");
		var $spos = $s.length;
		$s.pop();
		return v;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Arc.prototype.startAnglef = function(v) {
	$s.push("thx.svg.Arc::startAnglef");
	var $spos = $s.length;
	this._a0 = v;
	$s.pop();
	return this;
	$s.pop();
}
thx.svg.Arc.prototype.getEndAngle = function() {
	$s.push("thx.svg.Arc::getEndAngle");
	var $spos = $s.length;
	var $tmp = this._a1;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Arc.prototype.endAngle = function(v) {
	$s.push("thx.svg.Arc::endAngle");
	var $spos = $s.length;
	var $tmp = this.endAnglef(function(_,_1) {
		$s.push("thx.svg.Arc::endAngle@47");
		var $spos = $s.length;
		$s.pop();
		return v;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Arc.prototype.endAnglef = function(v) {
	$s.push("thx.svg.Arc::endAnglef");
	var $spos = $s.length;
	this._a1 = v;
	$s.pop();
	return this;
	$s.pop();
}
thx.svg.Arc.prototype.shape = function(d,i) {
	$s.push("thx.svg.Arc::shape");
	var $spos = $s.length;
	var a0 = this._a0(d,i) + thx.svg.LineInternals.arcOffset, a1 = this._a1(d,i) + thx.svg.LineInternals.arcOffset, da = a1 - a0, df = da < Math.PI?"0":"1", c0 = Math.cos(a0), s0 = Math.sin(a0), c1 = Math.cos(a1), s1 = Math.sin(a1), r0 = this._r0(d,i), r1 = this._r1(d,i);
	var $tmp = da >= thx.svg.LineInternals.arcMax?r0 != 0?"M0," + r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + -r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + r1 + "M0," + r0 + "A" + r0 + "," + r0 + " 0 1,1 0," + -r0 + "A" + r0 + "," + r0 + " 0 1,1 0," + r0 + "Z":"M0," + r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + -r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + r1 + "Z":r0 != 0?"M" + r1 * c0 + "," + r1 * s0 + "A" + r1 + "," + r1 + " 0 " + df + ",1 " + r1 * c1 + "," + r1 * s1 + "L" + r0 * c1 + "," + r0 * s1 + "A" + r0 + "," + r0 + " 0 " + df + ",0 " + r0 * c0 + "," + r0 * s0 + "Z":"M" + r1 * c0 + "," + r1 * s0 + "A" + r1 + "," + r1 + " 0 " + df + ",1 " + r1 * c1 + "," + r1 * s1 + "L0,0" + "Z";
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Arc.prototype.centroid = function(d,i) {
	$s.push("thx.svg.Arc::centroid");
	var $spos = $s.length;
	var r = (this._r0(d,i) + this._r1(d,i)) / 2, a = (this._a0(d,i) + this._a1(d,i)) / 2 + thx.svg.LineInternals.arcOffset;
	var $tmp = [Math.cos(a) * r,Math.sin(a) * r];
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Arc.prototype.__class__ = thx.svg.Arc;
rg.svg.SvgLineChartHighlighter = function(panel,x) {
	if( panel === $_ ) return;
	$s.push("rg.svg.SvgLineChartHighlighter::new");
	var $spos = $s.length;
	this.x = x;
	rg.svg.SvgLayer.call(this,panel);
	$s.pop();
}
rg.svg.SvgLineChartHighlighter.__name__ = ["rg","svg","SvgLineChartHighlighter"];
rg.svg.SvgLineChartHighlighter.__super__ = rg.svg.SvgLayer;
for(var k in rg.svg.SvgLayer.prototype ) rg.svg.SvgLineChartHighlighter.prototype[k] = rg.svg.SvgLayer.prototype[k];
rg.svg.SvgLineChartHighlighter.prototype.text = null;
rg.svg.SvgLineChartHighlighter.prototype.container = null;
rg.svg.SvgLineChartHighlighter.prototype.x = null;
rg.svg.SvgLineChartHighlighter.prototype.selector = null;
rg.svg.SvgLineChartHighlighter.prototype.approximator = function(x) {
	$s.push("rg.svg.SvgLineChartHighlighter::approximator");
	var $spos = $s.length;
	$s.pop();
	return x;
	$s.pop();
}
rg.svg.SvgLineChartHighlighter.prototype.prepare = function() {
	$s.push("rg.svg.SvgLineChartHighlighter::prepare");
	var $spos = $s.length;
	var parent = this.svg;
	while(parent.node().nodeName != "g" || parent.classed().get() != "panel") parent = thx.js.Dom.selectNode(parent.node().parentNode);
	parent.onNode("mouseover.highlighter",$closure(this,"_over")).onNode("mousemove.highlighter",$closure(this,"_move"));
	this.selector = this.svg.append("svg:g").style("pointer-events").string("none").attr("class").string("linechart-highlighter");
	this.selector.append("svg:line").attr("x1")["float"](0).attr("y1").string("1em").attr("x2")["float"](0).attr("y2")["float"](this.panel.frame.height);
	this.container = this.selector.append("svg:rect").attr("rx")["float"](4).attr("ry")["float"](4);
	this.text = this.selector.append("svg:text").attr("dy").string("1em").attr("text-anchor").string("middle").attr("dominant-baseline").string("middle");
	$s.pop();
}
rg.svg.SvgLineChartHighlighter.prototype.label = function(x) {
	$s.push("rg.svg.SvgLineChartHighlighter::label");
	var $spos = $s.length;
	var $tmp = thx.culture.FormatDate.dateShort(Date.fromTime(x)) + ", " + thx.culture.FormatDate.timeShort(Date.fromTime(x));
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgLineChartHighlighter.prototype._over = function(d,_) {
	$s.push("rg.svg.SvgLineChartHighlighter::_over");
	var $spos = $s.length;
	this.selector.style("display").string("block");
	$s.pop();
}
rg.svg.SvgLineChartHighlighter.prototype.coords = null;
rg.svg.SvgLineChartHighlighter.prototype.mouse = null;
rg.svg.SvgLineChartHighlighter.prototype._move = function(_,_1) {
	$s.push("rg.svg.SvgLineChartHighlighter::_move");
	var $spos = $s.length;
	this.mouse = thx.js.Svg.mouse(this.svg.node());
	this._update();
	$s.pop();
}
rg.svg.SvgLineChartHighlighter.prototype.lastlabel = null;
rg.svg.SvgLineChartHighlighter.prototype._update = function() {
	$s.push("rg.svg.SvgLineChartHighlighter::_update");
	var $spos = $s.length;
	if(null == this.selector) {
		$s.pop();
		return;
	}
	if(null == this.mouse) {
		$s.pop();
		return;
	}
	var vx = this.x.invert(this.mouse[0]);
	if(vx < 100) {
		$s.pop();
		return;
	}
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
	$s.pop();
}
rg.svg.SvgLineChartHighlighter.prototype._out = function(_,_1) {
	$s.push("rg.svg.SvgLineChartHighlighter::_out");
	var $spos = $s.length;
	this.selector.style("display").string("none");
	$s.pop();
}
rg.svg.SvgLineChartHighlighter.prototype.resize = function() {
	$s.push("rg.svg.SvgLineChartHighlighter::resize");
	var $spos = $s.length;
	this.svg.select("rect").attr("width")["float"](this.width).attr("height")["float"](this.height);
	this.svg.select(".linechart-highlighter").attr("y2")["float"](this.height);
	$s.pop();
}
rg.svg.SvgLineChartHighlighter.prototype.redraw = function() {
	$s.push("rg.svg.SvgLineChartHighlighter::redraw");
	var $spos = $s.length;
	this._update();
	$s.pop();
}
rg.svg.SvgLineChartHighlighter.prototype.__class__ = rg.svg.SvgLineChartHighlighter;
rg.query.ParallelQuery = function(p) {
	if( p === $_ ) return;
	$s.push("rg.query.ParallelQuery::new");
	var $spos = $s.length;
	rg.query.Query.call(this);
	this.queries = [];
	$s.pop();
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
	$s.push("rg.query.ParallelQuery::load");
	var $spos = $s.length;
	this._total = this.queries.length;
	this._count = 0;
	this._errorOccurred = false;
	this._dataChanged = false;
	this.data = [];
	this.onLoading.dispatch();
	$s.pop();
}
rg.query.ParallelQuery.prototype.addQuery = function(query) {
	$s.push("rg.query.ParallelQuery::addQuery");
	var $spos = $s.length;
	var i = this.queries.length;
	query.onData.add((function(f,a1) {
		$s.push("rg.query.ParallelQuery::addQuery@46");
		var $spos = $s.length;
		var $tmp = function(a2) {
			$s.push("rg.query.ParallelQuery::addQuery@46@46");
			var $spos = $s.length;
			var $tmp = f(a1,a2);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
		$s.pop();
	})($closure(this,"_onData"),i));
	query.onChange.add($closure(this,"_onChange"));
	query.onError.add($closure(this,"_onError"));
	query.onClose.add($closure(this,"_onClose"));
	$s.pop();
}
rg.query.ParallelQuery.prototype._onData = function(pos,data) {
	$s.push("rg.query.ParallelQuery::_onData");
	var $spos = $s.length;
	if(this._errorOccurred) {
		$s.pop();
		return;
	}
	this.data[pos] = data;
	if(++this._count == this._total) {
		if(this._dataChanged) this.onChange.dispatch(this.data);
		this.onData.dispatch(this.data);
		this.onComplete.dispatch();
	}
	$s.pop();
}
rg.query.ParallelQuery.prototype._onChange = function(data) {
	$s.push("rg.query.ParallelQuery::_onChange");
	var $spos = $s.length;
	if(this._errorOccurred) {
		$s.pop();
		return;
	}
	this._dataChanged = true;
	$s.pop();
}
rg.query.ParallelQuery.prototype._onError = function(data) {
	$s.push("rg.query.ParallelQuery::_onError");
	var $spos = $s.length;
	this._errorOccurred = true;
	this.onError.dispatch(data);
	this.onComplete.dispatch();
	$s.pop();
}
rg.query.ParallelQuery.prototype._onClose = function() {
	$s.push("rg.query.ParallelQuery::_onClose");
	var $spos = $s.length;
	throw new thx.error.Error("this query belongs to a parallel query and should not be closed directy; invoke the ParallelQuery.close() method instead",null,null,{ fileName : "ParallelQuery.hx", lineNumber : 82, className : "rg.query.ParallelQuery", methodName : "_onClose"});
	$s.pop();
}
rg.query.ParallelQuery.prototype.close = function() {
	$s.push("rg.query.ParallelQuery::close");
	var $spos = $s.length;
	rg.query.Query.prototype.close.call(this);
	var me = this;
	this.queries.forEach(function(query,i) {
		$s.push("rg.query.ParallelQuery::close@89");
		var $spos = $s.length;
		query.onClose.remove($closure(me,"_onClose"));
		query.close();
		$s.pop();
	});
	$s.pop();
}
rg.query.ParallelQuery.prototype.__class__ = rg.query.ParallelQuery;
rg.svg.SvgScaleLabel = function(panel,anchor) {
	if( panel === $_ ) return;
	$s.push("rg.svg.SvgScaleLabel::new");
	var $spos = $s.length;
	this._alwaysHorizontal = true;
	rg.svg.SvgLayer.call(this,panel);
	this._textTextHeight = rg.svg.SvgScaleLabel.defaultTexttextHeight;
	this.anchor(anchor);
	this.svg.attr("class").string("scale-ticks");
	this.idealSize = 0;
	$s.pop();
}
rg.svg.SvgScaleLabel.__name__ = ["rg","svg","SvgScaleLabel"];
rg.svg.SvgScaleLabel.__super__ = rg.svg.SvgLayer;
for(var k in rg.svg.SvgLayer.prototype ) rg.svg.SvgScaleLabel.prototype[k] = rg.svg.SvgLayer.prototype[k];
rg.svg.SvgScaleLabel.ofLinear = function(panel,anchor,scale) {
	$s.push("rg.svg.SvgScaleLabel::ofLinear");
	var $spos = $s.length;
	var $tmp = new rg.svg.SvgScaleLabel(panel,anchor).scale($closure(scale,"scale")).range($closure(scale,"range")).ticks($closure(scale,"ticks")).key(function(d,i) {
		$s.push("rg.svg.SvgScaleLabel::ofLinear@20");
		var $spos = $s.length;
		var $tmp = "" + d;
		$s.pop();
		return $tmp;
		$s.pop();
	}).label($closure(scale,"tickFormat"));
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgScaleLabel.ofOrdinal = function(panel,anchor,scale) {
	$s.push("rg.svg.SvgScaleLabel::ofOrdinal");
	var $spos = $s.length;
	var _scale = function(d,i) {
		$s.push("rg.svg.SvgScaleLabel::ofOrdinal@27");
		var $spos = $s.length;
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
		var $tmp = s.scale(d);
		$s.pop();
		return $tmp;
		$s.pop();
	};
	var $tmp = new rg.svg.SvgScaleLabel(panel,anchor).scale(_scale).range($closure(scale,"range")).ticks($closure(scale,"getDomain")).key(function(d,i) {
		$s.push("rg.svg.SvgScaleLabel::ofOrdinal@40");
		var $spos = $s.length;
		var $tmp = "" + d;
		$s.pop();
		return $tmp;
		$s.pop();
	}).label(function(d,i) {
		$s.push("rg.svg.SvgScaleLabel::ofOrdinal@41");
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
rg.svg.SvgScaleLabel.boundsOfLinear = function(panel,anchor,scale) {
	$s.push("rg.svg.SvgScaleLabel::boundsOfLinear");
	var $spos = $s.length;
	var $tmp = rg.svg.SvgScaleLabel.ofLinear(panel,anchor,scale).ticks(function() {
		$s.push("rg.svg.SvgScaleLabel::boundsOfLinear@48");
		var $spos = $s.length;
		var $tmp = scale.getDomain();
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
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
	$s.push("rg.svg.SvgScaleLabel::translateX");
	var $spos = $s.length;
	var $tmp = "translate(" + this._scale(d,i) + ",0) rotate(-90)";
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgScaleLabel.prototype.translateXH = function(d,i) {
	$s.push("rg.svg.SvgScaleLabel::translateXH");
	var $spos = $s.length;
	var $tmp = "translate(" + this._scale(d,i) + ",0)";
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
	if(null == this._maxRange) {
		$s.pop();
		return;
	}
	this._range([0.0,this._maxRange()]);
	this.idealSize = 0.0;
	var me = this;
	var calculate = (function() {
		$s.push("rg.svg.SvgScaleLabel::redraw@99");
		var $spos = $s.length;
		if(me.isHorizontal()) {
			var $tmp = function(n,i) {
				$s.push("rg.svg.SvgScaleLabel::redraw@99@102");
				var $spos = $s.length;
				var box = n.getBBox();
				if(box.width > me.idealSize) me.idealSize = box.width;
				$s.pop();
			};
			$s.pop();
			return $tmp;
		} else {
			var $tmp = function(n,i) {
				$s.push("rg.svg.SvgScaleLabel::redraw@99@108");
				var $spos = $s.length;
				var box = n.getBBox();
				if(box.height > me.idealSize) me.idealSize = box.height;
				$s.pop();
			};
			$s.pop();
			return $tmp;
		}
		$s.pop();
	})();
	var g = this.svg.selectAll("g").data(this._ticks(),this._key).update().attr("transform").stringf(this._t);
	g.selectAll("text.label").attr(this._oaxis)["float"](this._pos()).attr("text-anchor").string(this._textAnchor).attr("dominant-baseline").string(this._textBaseline).text().stringf(this._label).eachNode(calculate);
	g.enter().append("svg:g").attr("class").string(this._class).attr("transform").stringf(this._t).append("svg:text").attr("class").string("label").attr(this._oaxis)["float"](this._pos()).attr("text-anchor").string(this._textAnchor).attr("dominant-baseline").string(this._textBaseline).text().stringf(this._label).eachNode(calculate);
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
rg.svg.SvgScaleLabel.prototype.isHorizontal = function() {
	$s.push("rg.svg.SvgScaleLabel::isHorizontal");
	var $spos = $s.length;
	var $tmp = (function($this) {
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
	$s.pop();
	return $tmp;
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
	var me = this;
	switch( (this._anchor = o)[1] ) {
	case 0:
	case 1:
		this._class = "xaxis";
		this._oaxis = "x";
		if(this._alwaysHorizontal) this._t = $closure(this,"translateXH"); else this._t = $closure(this,"translateX");
		this._maxRange = function() {
			$s.push("rg.svg.SvgScaleLabel::anchor@209");
			var $spos = $s.length;
			var $tmp = me.width;
			$s.pop();
			return $tmp;
			$s.pop();
		};
		break;
	case 2:
	case 3:
		this._class = "xaxis";
		this._oaxis = "x";
		this._t = $closure(this,"translateY");
		this._maxRange = function() {
			$s.push("rg.svg.SvgScaleLabel::anchor@214");
			var $spos = $s.length;
			var $tmp = me.height;
			$s.pop();
			return $tmp;
			$s.pop();
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
	$s.pop();
	return this;
	$s.pop();
}
rg.svg.SvgScaleLabel.prototype.getAlwaysHorizontal = function() {
	$s.push("rg.svg.SvgScaleLabel::getAlwaysHorizontal");
	var $spos = $s.length;
	var $tmp = this._alwaysHorizontal;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgScaleLabel.prototype.alwaysHorizontal = function(v) {
	$s.push("rg.svg.SvgScaleLabel::alwaysHorizontal");
	var $spos = $s.length;
	this._alwaysHorizontal = v;
	this.anchor(this._anchor);
	$s.pop();
	return this;
	$s.pop();
}
rg.svg.SvgScaleLabel.prototype.getTextHeight = function() {
	$s.push("rg.svg.SvgScaleLabel::getTextHeight");
	var $spos = $s.length;
	var $tmp = this._textTextHeight;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgScaleLabel.prototype.textHeight = function(v) {
	$s.push("rg.svg.SvgScaleLabel::textHeight");
	var $spos = $s.length;
	this._textTextHeight = v;
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
			$s.push("rg.svg.SvgScaleLabel::adjustPositionFunction@270");
			var $spos = $s.length;
			$s.pop();
			return 0;
			$s.pop();
		};
		break;
	case 2:
		this._pos = function() {
			$s.push("rg.svg.SvgScaleLabel::adjustPositionFunction@272");
			var $spos = $s.length;
			$s.pop();
			return 0;
			$s.pop();
		};
		break;
	case 1:
		this._pos = function() {
			$s.push("rg.svg.SvgScaleLabel::adjustPositionFunction@274");
			var $spos = $s.length;
			var $tmp = me.height;
			$s.pop();
			return $tmp;
			$s.pop();
		};
		break;
	case 3:
		this._pos = function() {
			$s.push("rg.svg.SvgScaleLabel::adjustPositionFunction@276");
			var $spos = $s.length;
			var $tmp = me.width;
			$s.pop();
			return $tmp;
			$s.pop();
		};
		break;
	}
	$s.pop();
}
rg.svg.SvgScaleLabel.prototype.__class__ = rg.svg.SvgScaleLabel;
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
Enums = function() { }
Enums.__name__ = ["Enums"];
Enums.string = function(e) {
	$s.push("Enums::string");
	var $spos = $s.length;
	var cons = e[0];
	var params = [];
	var _g = 0, _g1 = e.slice(2);
	while(_g < _g1.length) {
		var param = _g1[_g];
		++_g;
		params.push(Dynamics.string(param));
	}
	var $tmp = cons + (params.length == 0?"":"(" + params.join(", ") + ")");
	$s.pop();
	return $tmp;
	$s.pop();
}
Enums.compare = function(a,b) {
	$s.push("Enums::compare");
	var $spos = $s.length;
	var v;
	if((v = a[1] - b[1]) != 0) {
		$s.pop();
		return v;
	}
	var $tmp = Arrays.compare(a.slice(2),b.slice(2));
	$s.pop();
	return $tmp;
	$s.pop();
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
thx.svg.Symbol = function() { }
thx.svg.Symbol.__name__ = ["thx","svg","Symbol"];
thx.svg.Symbol.triangleDown = function(size) {
	$s.push("thx.svg.Symbol::triangleDown");
	var $spos = $s.length;
	var rx = Math.sqrt(size / thx.svg.Symbol.sqrt3), ry = rx * thx.svg.Symbol.sqrt3 / 2;
	var $tmp = "M0," + ry + "L" + rx + "," + -ry + " " + -rx + "," + -ry + "Z";
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Symbol.triangleUp = function(size) {
	$s.push("thx.svg.Symbol::triangleUp");
	var $spos = $s.length;
	var rx = Math.sqrt(size / thx.svg.Symbol.sqrt3), ry = rx * thx.svg.Symbol.sqrt3 / 2;
	var $tmp = "M0," + -ry + "L" + rx + "," + ry + " " + -rx + "," + ry + "Z";
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Symbol.square = function(size) {
	$s.push("thx.svg.Symbol::square");
	var $spos = $s.length;
	var r = Math.sqrt(size) / 2;
	var $tmp = "M" + -r + "," + -r + "L" + r + "," + -r + " " + r + "," + r + " " + -r + "," + r + "Z";
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Symbol.diamond = function(size) {
	$s.push("thx.svg.Symbol::diamond");
	var $spos = $s.length;
	var ry = Math.sqrt(size / (2 * thx.svg.Symbol.tan30)), rx = ry * thx.svg.Symbol.tan30;
	var $tmp = "M0," + -ry + "L" + rx + ",0" + " 0," + ry + " " + -rx + ",0" + "Z";
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Symbol.cross = function(size) {
	$s.push("thx.svg.Symbol::cross");
	var $spos = $s.length;
	var r = Math.sqrt(size / 5) / 2;
	var $tmp = "M" + -3 * r + "," + -r + "H" + -r + "V" + -3 * r + "H" + r + "V" + -r + "H" + 3 * r + "V" + r + "H" + r + "V" + 3 * r + "H" + -r + "V" + r + "H" + -3 * r + "Z";
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Symbol.circle = function(size) {
	$s.push("thx.svg.Symbol::circle");
	var $spos = $s.length;
	var r = Math.sqrt(size / Math.PI);
	var $tmp = "M0," + r + "A" + r + "," + r + " 0 1,1 0," + -r + "A" + r + "," + r + " 0 1,1 0," + r + "Z";
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Symbol.arrowUp = function(size) {
	$s.push("thx.svg.Symbol::arrowUp");
	var $spos = $s.length;
	var r = Math.sqrt(size / 2);
	var $tmp = "M" + -r + ",0" + "h" + r / 2 + "v" + r + "h" + r + "v" + -r + "h" + r / 2 + "l" + -r + "," + -r + "Z";
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Symbol.arrowDown = function(size) {
	$s.push("thx.svg.Symbol::arrowDown");
	var $spos = $s.length;
	var r = Math.sqrt(size / 2);
	var $tmp = "M" + -r + ",0" + "h" + r / 2 + "v" + -r + "h" + r + "v" + r + "h" + r / 2 + "l" + -r + "," + r + "Z";
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Symbol.arrowDownWide = function(size) {
	$s.push("thx.svg.Symbol::arrowDownWide");
	var $spos = $s.length;
	var r = Math.sqrt(size / 2.5);
	var $tmp = "M" + -r + ",0" + "h" + r / 4 + "v" + -r + "h" + r * 1.5 + "v" + r + "h" + r / 4 + "l" + -r + "," + r + "Z";
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Symbol.arrowRight = function(size) {
	$s.push("thx.svg.Symbol::arrowRight");
	var $spos = $s.length;
	var r = Math.sqrt(size / 2);
	var $tmp = "M" + "0," + -r + "v" + r / 2 + "h" + -r + "v" + r + "h" + r + "v" + r / 2 + "l" + r + "," + -r + "Z";
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Symbol.arrowLeft = function(size) {
	$s.push("thx.svg.Symbol::arrowLeft");
	var $spos = $s.length;
	var r = Math.sqrt(size / 2);
	var $tmp = "M" + "0," + -r + "v" + r / 2 + "h" + r + "v" + r + "h" + -r + "v" + r / 2 + "l" + -r + "," + -r + "Z";
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Symbol.prototype.__class__ = thx.svg.Symbol;
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
	var $tmp = buf.b.join("");
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.culture.FormatDate.getMHours = function(date) {
	$s.push("thx.culture.FormatDate::getMHours");
	var $spos = $s.length;
	var v = date.getHours();
	var $tmp = v > 12?v - 12:v;
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
rg.query.QueryEvent = function(executor,path,event) {
	if( executor === $_ ) return;
	$s.push("rg.query.QueryEvent::new");
	var $spos = $s.length;
	rg.query.QueryPath.call(this,executor,path);
	this.setEvent(event);
	$s.pop();
}
rg.query.QueryEvent.__name__ = ["rg","query","QueryEvent"];
rg.query.QueryEvent.__super__ = rg.query.QueryPath;
for(var k in rg.query.QueryPath.prototype ) rg.query.QueryEvent.prototype[k] = rg.query.QueryPath.prototype[k];
rg.query.QueryEvent.prototype.event = null;
rg.query.QueryEvent.prototype.setEvent = function(v) {
	$s.push("rg.query.QueryEvent::setEvent");
	var $spos = $s.length;
	v = rg.query.Query.normalizeName(v);
	if(null == v) throw new thx.error.NullArgument("v","invalid null argument '{0}' for method {1}.{2}()",{ fileName : "Query.hx", lineNumber : 159, className : "rg.query.QueryEvent", methodName : "setEvent"}); else null;
	var $tmp = this.event = v;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.query.QueryEvent.prototype.__class__ = rg.query.QueryEvent;
rg.query.QueryPropertyNames = function(executor,path,event) {
	if( executor === $_ ) return;
	$s.push("rg.query.QueryPropertyNames::new");
	var $spos = $s.length;
	rg.query.QueryEvent.call(this,executor,path,event);
	$s.pop();
}
rg.query.QueryPropertyNames.__name__ = ["rg","query","QueryPropertyNames"];
rg.query.QueryPropertyNames.__super__ = rg.query.QueryEvent;
for(var k in rg.query.QueryEvent.prototype ) rg.query.QueryPropertyNames.prototype[k] = rg.query.QueryEvent.prototype[k];
rg.query.QueryPropertyNames.prototype.executeLoad = function(success,error) {
	$s.push("rg.query.QueryPropertyNames::executeLoad");
	var $spos = $s.length;
	var query = this.queryObject();
	query.property = this.event;
	this.executor.children(this.path,query,success,error);
	$s.pop();
}
rg.query.QueryPropertyNames.prototype.__class__ = rg.query.QueryPropertyNames;
rg.query.QueryProperty = function(executor,path,event,property) {
	if( executor === $_ ) return;
	$s.push("rg.query.QueryProperty::new");
	var $spos = $s.length;
	rg.query.QueryEvent.call(this,executor,path,event);
	this.setProperty(property);
	$s.pop();
}
rg.query.QueryProperty.__name__ = ["rg","query","QueryProperty"];
rg.query.QueryProperty.__super__ = rg.query.QueryEvent;
for(var k in rg.query.QueryEvent.prototype ) rg.query.QueryProperty.prototype[k] = rg.query.QueryEvent.prototype[k];
rg.query.QueryProperty.prototype.property = null;
rg.query.QueryProperty.prototype.setProperty = function(v) {
	$s.push("rg.query.QueryProperty::setProperty");
	var $spos = $s.length;
	v = rg.query.Query.normalizeName(v);
	if(null == v) throw new thx.error.NullArgument("v","invalid null argument '{0}' for method {1}.{2}()",{ fileName : "Query.hx", lineNumber : 177, className : "rg.query.QueryProperty", methodName : "setProperty"}); else null;
	var $tmp = this.property = v;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.query.QueryProperty.prototype.__class__ = rg.query.QueryProperty;
rg.query.QueryValues = function(executor,path,event,property,values,others,otherslabel) {
	if( executor === $_ ) return;
	$s.push("rg.query.QueryValues::new");
	var $spos = $s.length;
	if(otherslabel == null) otherslabel = "others";
	if(others == null) others = false;
	rg.query.QueryProperty.call(this,executor,path,event,property);
	this.setValues(values);
	this.others = others;
	this.othersLabel = otherslabel;
	$s.pop();
}
rg.query.QueryValues.__name__ = ["rg","query","QueryValues"];
rg.query.QueryValues.__super__ = rg.query.QueryProperty;
for(var k in rg.query.QueryProperty.prototype ) rg.query.QueryValues.prototype[k] = rg.query.QueryProperty.prototype[k];
rg.query.QueryValues.prototype.values = null;
rg.query.QueryValues.prototype.others = null;
rg.query.QueryValues.prototype.othersLabel = null;
rg.query.QueryValues.prototype.formatter = function(v,i) {
	$s.push("rg.query.QueryValues::formatter");
	var $spos = $s.length;
	var $tmp = "" + v;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.query.QueryValues.prototype.formattedValues = function() {
	$s.push("rg.query.QueryValues::formattedValues");
	var $spos = $s.length;
	var v = this.values.map($closure(this,"formatter"));
	if(this.others) v.push(this.othersLabel);
	$s.pop();
	return v;
	$s.pop();
}
rg.query.QueryValues.prototype.setValues = function(v) {
	$s.push("rg.query.QueryValues::setValues");
	var $spos = $s.length;
	if(null == v) throw new thx.error.NullArgument("v","invalid null argument '{0}' for method {1}.{2}()",{ fileName : "Query.hx", lineNumber : 225, className : "rg.query.QueryValues", methodName : "setValues"}); else null;
	var $tmp = this.values = v;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.query.QueryValues.prototype.__class__ = rg.query.QueryValues;
rg.query.QueryValuesSeries = function(executor,path,event,property,values,others,otherslabel) {
	if( executor === $_ ) return;
	$s.push("rg.query.QueryValuesSeries::new");
	var $spos = $s.length;
	if(otherslabel == null) otherslabel = "others";
	if(others == null) others = false;
	rg.query.QueryValues.call(this,executor,path,event,property,values,others,otherslabel);
	$s.pop();
}
rg.query.QueryValuesSeries.__name__ = ["rg","query","QueryValuesSeries"];
rg.query.QueryValuesSeries.__super__ = rg.query.QueryValues;
for(var k in rg.query.QueryValues.prototype ) rg.query.QueryValuesSeries.prototype[k] = rg.query.QueryValues.prototype[k];
rg.query.QueryValuesSeries.forLineChart = function(executor,path,event,property,values,others,otherslabel) {
	$s.push("rg.query.QueryValuesSeries::forLineChart");
	var $spos = $s.length;
	var query = new rg.query.QueryValuesSeries(executor,path,event,property,values,others,otherslabel);
	query.transform = rg.query.Transform.arrayTimeSeries(query,$closure(query,"formattedValues"));
	$s.pop();
	return query;
	$s.pop();
}
rg.query.QueryValuesSeries.prototype.executeLoad = function(success,error) {
	$s.push("rg.query.QueryValuesSeries::executeLoad");
	var $spos = $s.length;
	var count = 0, total = this.values.length + (this.others?1:0), data = [], others = this.others;
	var _end = function() {
		$s.push("rg.query.QueryValuesSeries::executeLoad@23");
		var $spos = $s.length;
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
		$s.pop();
	};
	var _total = function(value) {
		$s.push("rg.query.QueryValuesSeries::executeLoad@40");
		var $spos = $s.length;
		haxe.Log.trace(value,{ fileName : "QueryValuesSeries.hx", lineNumber : 42, className : "rg.query.QueryValuesSeries", methodName : "executeLoad"});
		data[total - 1] = value;
		if(++count == total) _end();
		$s.pop();
	};
	var _collect = function(pos,value) {
		$s.push("rg.query.QueryValuesSeries::executeLoad@48");
		var $spos = $s.length;
		data[pos] = value;
		if(++count == total) _end();
		$s.pop();
	};
	var query = this.queryObject();
	query.property = this.event + "." + this.property;
	var _g1 = 0, _g = this.values.length;
	while(_g1 < _g) {
		var i = _g1++;
		query.value = this.values[i];
		this.executor.propertyValueSeries(this.path,query,(function(f,a1) {
			$s.push("rg.query.QueryValuesSeries::executeLoad@61");
			var $spos = $s.length;
			var $tmp = function(a2) {
				$s.push("rg.query.QueryValuesSeries::executeLoad@61@61");
				var $spos = $s.length;
				var $tmp = f(a1,a2);
				$s.pop();
				return $tmp;
				$s.pop();
			};
			$s.pop();
			return $tmp;
			$s.pop();
		})(_collect,i),error);
	}
	if(others) {
		var query1 = this.queryObject();
		query1.property = this.event + "." + this.property;
		this.executor.propertySeries(this.path,query1,_total,error);
	}
	$s.pop();
}
rg.query.QueryValuesSeries.prototype.load = function() {
	$s.push("rg.query.QueryValuesSeries::load");
	var $spos = $s.length;
	if(null == this.values || 0 == this.values.length) {
		var loader = new rg.query.QueryPropertyValues(this.executor,this.path,this.event,this.property,rg.query.QueryLimit.Top(10)), me = this;
		loader.onData.add(function(v) {
			$s.push("rg.query.QueryValuesSeries::load@78");
			var $spos = $s.length;
			me.setValues(v);
			loader.close();
			me.load();
			$s.pop();
		});
		loader.load();
	} else rg.query.QueryValues.prototype.load.call(this);
	$s.pop();
}
rg.query.QueryValuesSeries.prototype.__class__ = rg.query.QueryValuesSeries;
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
rg.Viz = function() { }
rg.Viz.__name__ = ["rg","Viz"];
rg.Viz.createRandomHeatGridData = function(n,m,top) {
	$s.push("rg.Viz::createRandomHeatGridData");
	var $spos = $s.length;
	if(top == null) top = 100;
	if(m == null) m = 20;
	if(n == null) n = 20;
	var $tmp = Ints.range(n).map(function(d,i) {
		$s.push("rg.Viz::createRandomHeatGridData@82");
		var $spos = $s.length;
		var $tmp = Ints.range(m).map(function(d1,i1) {
			$s.push("rg.Viz::createRandomHeatGridData@82@83");
			var $spos = $s.length;
			var $tmp = Math.random() * top;
			$s.pop();
			return $tmp;
			$s.pop();
		});
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.Viz.heatgrid = function(el,query,options) {
	$s.push("rg.Viz::heatgrid");
	var $spos = $s.length;
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
		$s.push("rg.Viz::heatgrid@118");
		var $spos = $s.length;
		var $tmp = "#timestamp" == d.property;
		$s.pop();
		return $tmp;
		$s.pop();
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
		$s.push("rg.Viz::heatgrid@135");
		var $spos = $s.length;
		var $tmp = thx.color.Colors.parse(d);
		$s.pop();
		return $tmp;
		$s.pop();
	}), padding = 3;
	var leftsize = 100, space = new rg.svg.SvgSpace(o.width,o.height,selection), top = space.createContainer(rg.layout.Disposition.Fill(0,0),rg.layout.Orientation.Horizontal), bottom = space.createContainer(rg.layout.Disposition.Fixed(0,0,100),rg.layout.Orientation.Horizontal), ypanel = top.createPanel(rg.layout.Disposition.Fixed(0,padding,leftsize)), chartpanel = top.createPanel(rg.layout.Disposition.Fill(0,0)), xpanel = bottom.createPanel(rg.layout.Disposition.Fixed(leftsize + padding,0,100));
	var y = new thx.math.scale.Ordinal(), yscale = rg.svg.SvgScaleLabel.ofOrdinal(ypanel,rg.svg.Anchor.Right,y), x = new thx.math.scale.Ordinal(), xscale = rg.svg.SvgScaleLabel.ofOrdinal(xpanel,rg.svg.Anchor.Top,x).alwaysHorizontal(false);
	space.svg.attr("class").string("rg");
	var color = thx.math.scale.Linears.forRgb().range(colors), chart = new rg.svg.SvgHeatGrid(chartpanel,color);
	var tooltip = new rg.svg.SvgBaloon(space.svg);
	chart.over = function(x1,y1,d,_) {
		$s.push("rg.Viz::heatgrid@157");
		var $spos = $s.length;
		tooltip.setText(["count: " + Floats.format(d,"I")]);
		tooltip.moveTo(x1 + chartpanel.frame.x,y1 + chartpanel.frame.y + top.frame.y);
		$s.pop();
	};
	loader.onChange.add(function(data) {
		$s.push("rg.Viz::heatgrid@163");
		var $spos = $s.length;
		var interpolator = Floats.interpolatef(0,data.calc.max), domain = colors.map(function(_,i) {
			$s.push("rg.Viz::heatgrid@163@174");
			var $spos = $s.length;
			var $tmp = interpolator(i / (colors.length - 1));
			$s.pop();
			return $tmp;
			$s.pop();
		}), xdomain = data.columns.map(function(d,i) {
			$s.push("rg.Viz::heatgrid@163@175");
			var $spos = $s.length;
			var $tmp = d.values[0];
			$s.pop();
			return $tmp;
			$s.pop();
		}), ydomain = data.rows.map(function(d,i) {
			$s.push("rg.Viz::heatgrid@163@176");
			var $spos = $s.length;
			var $tmp = d.values[0];
			$s.pop();
			return $tmp;
			$s.pop();
		});
		color.domain(domain);
		x.domain(xdomain);
		y.domain(ydomain);
		yscale.label((function(f,a1) {
			$s.push("rg.Viz::heatgrid@163@183");
			var $spos = $s.length;
			var $tmp = function(a2,a3) {
				$s.push("rg.Viz::heatgrid@163@183@183");
				var $spos = $s.length;
				var $tmp = f(a1,a2,a3);
				$s.pop();
				return $tmp;
				$s.pop();
			};
			$s.pop();
			return $tmp;
			$s.pop();
		})(rg.Viz.labelValue,data.row_headers[0]));
		xscale.label((function(f,a1) {
			$s.push("rg.Viz::heatgrid@163@184");
			var $spos = $s.length;
			var $tmp = function(a2,a3) {
				$s.push("rg.Viz::heatgrid@163@184@184");
				var $spos = $s.length;
				var $tmp = f(a1,a2,a3);
				$s.pop();
				return $tmp;
				$s.pop();
			};
			$s.pop();
			return $tmp;
			$s.pop();
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
			$s.push("rg.Viz::heatgrid@163@222");
			var $spos = $s.length;
			var $tmp = d.cells;
			$s.pop();
			return $tmp;
			$s.pop();
		}));
		xscale.redraw();
		yscale.redraw();
		$s.pop();
	});
	rg.Viz.executeQuery(loader,o);
	$s.pop();
}
rg.Viz.labelValue = function(header,value,_) {
	$s.push("rg.Viz::labelValue");
	var $spos = $s.length;
	if(Std["is"](value,String)) {
		var $tmp = rg.util.RGStrings.humanize(Strings.rtrim(Strings.ltrim(value,"\""),"\""));
		$s.pop();
		return $tmp;
	} else if(Std["is"](value,Int)) {
		var $tmp = Ints.format(value);
		$s.pop();
		return $tmp;
	} else if(Std["is"](value,Float)) {
		if("#" == header.substr(0,1)) {
			var $tmp = rg.util.Periodicity.format(header.substr(1),Std.parseFloat(value));
			$s.pop();
			return $tmp;
		}
		var $tmp = Floats.format(value);
		$s.pop();
		return $tmp;
	} else {
		var $tmp = Std.string(value);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
rg.Viz.pivot = function(el,query,options) {
	$s.push("rg.Viz::pivot");
	var $spos = $s.length;
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
		$s.push("rg.Viz::pivot@285");
		var $spos = $s.length;
		var $tmp = "#timestamp" == d.property;
		$s.pop();
		return $tmp;
		$s.pop();
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
	$s.pop();
}
rg.Viz.toDateLimit = function(v) {
	$s.push("rg.Viz::toDateLimit");
	var $spos = $s.length;
	if(null == v) {
		var $tmp = rg.query.DateLimit.NoLimit;
		$s.pop();
		return $tmp;
	}
	if(Reflect.isFunction(v)) {
		var $tmp = rg.query.DateLimit.VariableLimit(v);
		$s.pop();
		return $tmp;
	}
	if(Std["is"](v,Date)) {
		var $tmp = rg.query.DateLimit.FixedLimit(v);
		$s.pop();
		return $tmp;
	}
	if(Std["is"](v,Float)) {
		var $tmp = rg.query.DateLimit.FixedLimit(Date.fromTime(v));
		$s.pop();
		return $tmp;
	}
	if(Std["is"](v,String)) {
		var $tmp = rg.query.DateLimit.VariableLimit(function() {
			$s.push("rg.Viz::toDateLimit@329");
			var $spos = $s.length;
			var $tmp = thx.date.DateParser.parse(v);
			$s.pop();
			return $tmp;
			$s.pop();
		});
		$s.pop();
		return $tmp;
	}
	throw new thx.error.Error("invalid date value '{0}'",v,null,{ fileName : "Viz.hx", lineNumber : 330, className : "rg.Viz", methodName : "toDateLimit"});
	$s.pop();
}
rg.Viz.leaderBoard = function(el,query,options) {
	$s.push("rg.Viz::leaderBoard");
	var $spos = $s.length;
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
	$s.pop();
	return chart;
	$s.pop();
}
rg.Viz.executeQuery = function(loader,options) {
	$s.push("rg.Viz::executeQuery");
	var $spos = $s.length;
	var animated = null != options.refresh && options.refresh > 0;
	if(animated) new rg.query.QueryTimerUpdate(loader,options.refresh); else loader.load();
	$s.pop();
}
rg.Viz.setTimeLimits = function(loader,options,forceValues) {
	$s.push("rg.Viz::setTimeLimits");
	var $spos = $s.length;
	if(forceValues == null) forceValues = false;
	if(forceValues) {
		if(null == options.end) options.end = "now";
		if(null == options.start) options.start = "yesterday";
	}
	loader.time.startLimit = rg.Viz.toDateLimit(options.start);
	loader.time.endLimit = rg.Viz.toDateLimit(options.end);
	loader.time.update();
	$s.pop();
}
rg.Viz.pie = function(el,query,options) {
	$s.push("rg.Viz::pie");
	var $spos = $s.length;
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
	$s.pop();
	return chart;
	$s.pop();
}
rg.Viz.bar = function(el,query,options) {
	$s.push("rg.Viz::bar");
	var $spos = $s.length;
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
		$s.push("rg.Viz::bar@498");
		var $spos = $s.length;
		y.domain([null != o.yscale && null != o.yscale.max?o.yscale.max:Arrays.floatMax(d,function(d1) {
			$s.push("rg.Viz::bar@498@500");
			var $spos = $s.length;
			var $tmp = d1.value;
			$s.pop();
			return $tmp;
			$s.pop();
		}) * 1.2,0.0]);
		ylayers.forEach(function(layer,_) {
			$s.push("rg.Viz::bar@498@501");
			var $spos = $s.length;
			layer.redraw();
			$s.pop();
		});
		x.domain(d.map(function(d1,i) {
			$s.push("rg.Viz::bar@498@503");
			var $spos = $s.length;
			var $tmp = d1.label;
			$s.pop();
			return $tmp;
			$s.pop();
		}));
		x.range(Ints.range(d.length));
		xlayers.forEach(function(layer,_) {
			$s.push("rg.Viz::bar@498@505");
			var $spos = $s.length;
			layer.redraw();
			$s.pop();
		});
		chart.data(d);
		$s.pop();
	});
	new rg.svg.SvgBorderLine(chartpanel,rg.svg.Anchor.Bottom);
	var bottom = space.createContainer(rg.layout.Disposition.Fixed(0,0,20),rg.layout.Orientation.Horizontal);
	xlayers.push(rg.svg.SvgScaleLabel.ofOrdinal(bottom.createPanel(rg.layout.Disposition.Fill(left,0)),rg.svg.Anchor.Top,x));
	rg.Viz.executeQuery(loader,o);
	$s.pop();
	return chart;
	$s.pop();
}
rg.Viz.funnel = function(el,query,options) {
	$s.push("rg.Viz::funnel");
	var $spos = $s.length;
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
				$s.push("rg.Viz::funnel@546");
				var $spos = $s.length;
				$s.pop();
				return d;
				$s.pop();
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
		$s.push("rg.Viz::funnel@568");
		var $spos = $s.length;
		chart.data(d);
		$s.pop();
	});
	if(null != o.label) chart.label = o.label;
	rg.Viz.executeQuery(loader,o);
	$s.pop();
	return chart;
	$s.pop();
}
rg.Viz.baloon = function(el) {
	$s.push("rg.Viz::baloon");
	var $spos = $s.length;
	var svg = rg.Viz.select(el).append("svg:svg").attr("width")["float"](450).attr("height")["float"](300).classed().add("rg");
	svg.append("svg:rect").attr("width")["float"](450).attr("height")["float"](300).style("fill").string("#eee");
	var bb = { x : 120.0, y : 80.0, width : 200.0, height : 150.0};
	svg.append("svg:rect").attr("x")["float"](bb.x).attr("y")["float"](bb.y).attr("width")["float"](bb.width).attr("height")["float"](bb.height).style("fill").string("#ccc");
	var baloon = new rg.svg.SvgBaloon(svg);
	baloon.setText(["hello","world","this is a baloon","another line"]);
	baloon.setBoundingBox(bb);
	svg.onNode("mousemove",function(n,i) {
		$s.push("rg.Viz::baloon@613");
		var $spos = $s.length;
		var c = thx.js.Svg.mouse(n);
		baloon.moveTo(c[0],c[1],false);
		$s.pop();
	});
	$s.pop();
}
rg.Viz.scatter = function(el,query,options) {
	$s.push("rg.Viz::scatter");
	var $spos = $s.length;
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
		$s.push("rg.Viz::scatter@681");
		var $spos = $s.length;
		y.domain([null != o.yscale && null != o.yscale.max?o.yscale.max:Arrays.floatMax(d,function(d1) {
			$s.push("rg.Viz::scatter@681@683");
			var $spos = $s.length;
			var $tmp = d1.value;
			$s.pop();
			return $tmp;
			$s.pop();
		}) * 1.2,0.0]);
		ylayers.forEach(function(layer,_) {
			$s.push("rg.Viz::scatter@681@684");
			var $spos = $s.length;
			layer.redraw();
			$s.pop();
		});
		x.domain(d.map(function(d1,i) {
			$s.push("rg.Viz::scatter@681@686");
			var $spos = $s.length;
			var $tmp = d1.label;
			$s.pop();
			return $tmp;
			$s.pop();
		}));
		x.range(Ints.range(d.length));
		xlayers.forEach(function(layer,_) {
			$s.push("rg.Viz::scatter@681@688");
			var $spos = $s.length;
			layer.redraw();
			$s.pop();
		});
		chart.data(d);
		$s.pop();
	});
	new rg.svg.SvgBorderLine(chartpanel,rg.svg.Anchor.Bottom);
	var bottom = space.createContainer(rg.layout.Disposition.Fixed(0,0,20),rg.layout.Orientation.Horizontal);
	xlayers.push(rg.svg.SvgScaleLabel.ofOrdinal(bottom.createPanel(rg.layout.Disposition.Fill(left,0)),rg.svg.Anchor.Top,x));
	rg.Viz.executeQuery(loader,o);
	$s.pop();
	return chart;
	$s.pop();
}
rg.Viz.stack = function(el,query,options) {
	$s.push("rg.Viz::stack");
	var $spos = $s.length;
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
		$s.push("rg.Viz::stack@760");
		var $spos = $s.length;
		y.domain([null != o.yscale && null != o.yscale.max?o.yscale.max:Iterators.reduce(d.iterator(),function(a,b,i) {
			$s.push("rg.Viz::stack@760@762");
			var $spos = $s.length;
			var $tmp = a + b.value;
			$s.pop();
			return $tmp;
			$s.pop();
		},0) * 1.2,0.0]);
		ylayers.forEach(function(layer,_) {
			$s.push("rg.Viz::stack@760@763");
			var $spos = $s.length;
			layer.redraw();
			$s.pop();
		});
		chart.data(d);
		$s.pop();
	});
	new rg.svg.SvgBorderLine(chartpanel,rg.svg.Anchor.Bottom);
	var bottom = space.createContainer(rg.layout.Disposition.Fixed(0,0,20),rg.layout.Orientation.Horizontal);
	rg.Viz.executeQuery(loader,o);
	$s.pop();
	return chart;
	$s.pop();
}
rg.Viz.error = function(e) {
	$s.push("rg.Viz::error");
	var $spos = $s.length;
	haxe.Log.trace("ERROR: " + e,{ fileName : "Viz.hx", lineNumber : 778, className : "rg.Viz", methodName : "error"});
	$s.pop();
}
rg.Viz.sizeOptions = function(selection,options) {
	$s.push("rg.Viz::sizeOptions");
	var $spos = $s.length;
	var v;
	if(null == options) options = { };
	var $tmp = Objects.copyTo(options,{ width : (v = selection.node().clientWidth) > 10?v:400, height : (v = selection.node().clientHeight) > 10?v:300});
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.Viz.yinfo = function(container,q,scale,left,labelwidth,pos,ylayers,usedimensionclass) {
	$s.push("rg.Viz::yinfo");
	var $spos = $s.length;
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
	$s.pop();
}
rg.Viz.line = function(el,_queries,options) {
	$s.push("rg.Viz::line");
	var $spos = $s.length;
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
				$s.push("rg.Viz::line@874");
				var $spos = $s.length;
				var $tmp = function(d) {
					$s.push("rg.Viz::line@874@874");
					var $spos = $s.length;
					highlighter.prepare();
					$s.pop();
				};
				$s.pop();
				return $tmp;
				$s.pop();
			})());
		} else rg.Viz.yinfo(container,q,y[0],false,labelwidth,i,ylayers,queries.length > 1);
		var chart = [new rg.svg.SvgLineChart(chartpanel,x,y[0])];
		chart[0].setCustomClass("dimension-" + i);
		chart[0].lineInterpolator(null == o.lineinterpolator?thx.svg.LineInterpolator.Linear:thx.svg.LineInterpolators.parse(o.lineinterpolator));
		charts.push(chart[0]);
		if(i == 0) loader[0].onChange.add((function(loader) {
			$s.push("rg.Viz::line@889");
			var $spos = $s.length;
			var $tmp = function(v) {
				$s.push("rg.Viz::line@889@889");
				var $spos = $s.length;
				x.domain([null == loader[0].time.start?v.minx:loader[0].time.start.getTime(),null == loader[0].time.end?v.maxx:loader[0].time.end.getTime()]);
				xlayers.forEach((function() {
					$s.push("rg.Viz::line@889@889@891");
					var $spos = $s.length;
					var $tmp = function(layer,i1) {
						$s.push("rg.Viz::line@889@889@891@891");
						var $spos = $s.length;
						layer.redraw();
						$s.pop();
					};
					$s.pop();
					return $tmp;
					$s.pop();
				})());
				$s.pop();
			};
			$s.pop();
			return $tmp;
			$s.pop();
		})(loader));
		loader[0].onChange.add((function(chart,y) {
			$s.push("rg.Viz::line@895");
			var $spos = $s.length;
			var $tmp = function(v) {
				$s.push("rg.Viz::line@895@895");
				var $spos = $s.length;
				y[0].domain([v.maxy * 1.2,0.0]);
				ylayers.forEach((function() {
					$s.push("rg.Viz::line@895@895@897");
					var $spos = $s.length;
					var $tmp = function(layer,i1) {
						$s.push("rg.Viz::line@895@895@897@897");
						var $spos = $s.length;
						layer.redraw();
						$s.pop();
					};
					$s.pop();
					return $tmp;
					$s.pop();
				})());
				chart[0].data(v.data);
				$s.pop();
			};
			$s.pop();
			return $tmp;
			$s.pop();
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
		$s.push("rg.Viz::line@915");
		var $spos = $s.length;
		loaders.forEach(function(loader,_) {
			$s.push("rg.Viz::line@915@916");
			var $spos = $s.length;
			loader.time.update();
			$s.pop();
		});
		x.domain([loaders[0].time.start.getTime(),loaders[0].time.end.getTime()]);
		charts.forEach(function(chart,_) {
			$s.push("rg.Viz::line@915@920");
			var $spos = $s.length;
			chart.updatex();
			$s.pop();
		});
		xlayers.forEach(function(layer,i) {
			$s.push("rg.Viz::line@915@923");
			var $spos = $s.length;
			layer.redraw();
			$s.pop();
		});
		$s.pop();
		return false;
		$s.pop();
	});
	loaders.forEach(function(loader,_) {
		$s.push("rg.Viz::line@930");
		var $spos = $s.length;
		rg.Viz.executeQuery(loader,o);
		$s.pop();
	});
	$s.pop();
}
rg.Viz.stream = function(el,_queries,options) {
	$s.push("rg.Viz::stream");
	var $spos = $s.length;
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
			$s.push("rg.Viz::stream@990");
			var $spos = $s.length;
			var $tmp = function(v) {
				$s.push("rg.Viz::stream@990@990");
				var $spos = $s.length;
				x.domain([null == loader[0].time.start?v.minx:loader[0].time.start.getTime(),null == loader[0].time.end?v.maxx:loader[0].time.end.getTime()]);
				xlayers.forEach((function() {
					$s.push("rg.Viz::stream@990@990@992");
					var $spos = $s.length;
					var $tmp = function(layer,i1) {
						$s.push("rg.Viz::stream@990@990@992@992");
						var $spos = $s.length;
						layer.redraw();
						$s.pop();
					};
					$s.pop();
					return $tmp;
					$s.pop();
				})());
				$s.pop();
			};
			$s.pop();
			return $tmp;
			$s.pop();
		})(loader));
		loader[0].onChange.add((function(chart,y) {
			$s.push("rg.Viz::stream@996");
			var $spos = $s.length;
			var $tmp = function(v) {
				$s.push("rg.Viz::stream@996@996");
				var $spos = $s.length;
				haxe.Log.trace("Data " + Std.random(1000),{ fileName : "Viz.hx", lineNumber : 997, className : "rg.Viz", methodName : "stream"});
				y[0].domain([v.maxy * 1.2,0.0]);
				chart[0].data(v.data);
				$s.pop();
			};
			$s.pop();
			return $tmp;
			$s.pop();
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
		$s.push("rg.Viz::stream@1016");
		var $spos = $s.length;
		loaders.forEach(function(loader,_) {
			$s.push("rg.Viz::stream@1016@1017");
			var $spos = $s.length;
			loader.time.update();
			$s.pop();
		});
		x.domain([loaders[0].time.start.getTime(),loaders[0].time.end.getTime()]);
		charts.forEach(function(chart,_) {
			$s.push("rg.Viz::stream@1016@1021");
			var $spos = $s.length;
			chart.updatex();
			$s.pop();
		});
		xlayers.forEach(function(layer,i) {
			$s.push("rg.Viz::stream@1016@1024");
			var $spos = $s.length;
			layer.redraw();
			$s.pop();
		});
		$s.pop();
		return false;
		$s.pop();
	});
	loaders.forEach(function(loader,_) {
		$s.push("rg.Viz::stream@1031");
		var $spos = $s.length;
		rg.Viz.executeQuery(loader,o);
		$s.pop();
	});
	$s.pop();
}
rg.Viz.select = function(el) {
	$s.push("rg.Viz::select");
	var $spos = $s.length;
	var el1 = Std["is"](el,String)?thx.js.Dom.select(el):thx.js.Dom.selectNode(el);
	if(el1.empty()) throw new thx.error.Error("invalid container",null,null,{ fileName : "Viz.hx", lineNumber : 1040, className : "rg.Viz", methodName : "select"});
	$s.pop();
	return el1;
	$s.pop();
}
rg.Viz.prototype.__class__ = rg.Viz;
thx.geom.layout.Pie = function(p) {
	if( p === $_ ) return;
	$s.push("thx.geom.layout.Pie::new");
	var $spos = $s.length;
	this._startAngle = function(_,_1) {
		$s.push("thx.geom.layout.Pie::new@20");
		var $spos = $s.length;
		$s.pop();
		return 0.0;
		$s.pop();
	};
	this._endAngle = function(_,_1) {
		$s.push("thx.geom.layout.Pie::new@21");
		var $spos = $s.length;
		$s.pop();
		return 6.283185307179586477;
		$s.pop();
	};
	this._sort = null;
	this._value = function(d,_) {
		$s.push("thx.geom.layout.Pie::new@23");
		var $spos = $s.length;
		var $tmp = Number(d);
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
}
thx.geom.layout.Pie.__name__ = ["thx","geom","layout","Pie"];
thx.geom.layout.Pie.prototype._startAngle = null;
thx.geom.layout.Pie.prototype._endAngle = null;
thx.geom.layout.Pie.prototype._sort = null;
thx.geom.layout.Pie.prototype._value = null;
thx.geom.layout.Pie.prototype.pie = function(data,i) {
	$s.push("thx.geom.layout.Pie::pie");
	var $spos = $s.length;
	var a = this._startAngle(data,i), k = this._endAngle(data,i) - a;
	var index = Ints.range(data.length);
	if(this._sort != null) {
		var s = this._sort;
		index.sort(function(i1,j) {
			$s.push("thx.geom.layout.Pie::pie@35");
			var $spos = $s.length;
			var $tmp = s(data[i1],data[j]);
			$s.pop();
			return $tmp;
			$s.pop();
		});
	}
	var values = data.map(this._value);
	k /= Iterators.reduce(values.iterator(),function(p,d,_) {
		$s.push("thx.geom.layout.Pie::pie@42");
		var $spos = $s.length;
		var $tmp = p + d;
		$s.pop();
		return $tmp;
		$s.pop();
	},0.0);
	if(!Math.isFinite(k)) k = 0;
	var d;
	var arcs = index.map(function(_,i1) {
		$s.push("thx.geom.layout.Pie::pie@46");
		var $spos = $s.length;
		d = values[i1];
		var $tmp = { value : d, startAngle : a, endAngle : a += d * k};
		$s.pop();
		return $tmp;
		$s.pop();
	});
	var $tmp = data.map(function(d1,i1) {
		$s.push("thx.geom.layout.Pie::pie@55");
		var $spos = $s.length;
		var $tmp = arcs[index[i1]];
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.geom.layout.Pie.prototype.getStartAngle = function() {
	$s.push("thx.geom.layout.Pie::getStartAngle");
	var $spos = $s.length;
	var $tmp = this._startAngle;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.geom.layout.Pie.prototype.startAngle = function(v) {
	$s.push("thx.geom.layout.Pie::startAngle");
	var $spos = $s.length;
	var $tmp = this.startAnglef(function(_,_1) {
		$s.push("thx.geom.layout.Pie::startAngle@61");
		var $spos = $s.length;
		$s.pop();
		return v;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.geom.layout.Pie.prototype.startAnglef = function(v) {
	$s.push("thx.geom.layout.Pie::startAnglef");
	var $spos = $s.length;
	this._startAngle = v;
	$s.pop();
	return this;
	$s.pop();
}
thx.geom.layout.Pie.prototype.getEndAngle = function() {
	$s.push("thx.geom.layout.Pie::getEndAngle");
	var $spos = $s.length;
	var $tmp = this._endAngle;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.geom.layout.Pie.prototype.endAngle = function(v) {
	$s.push("thx.geom.layout.Pie::endAngle");
	var $spos = $s.length;
	var $tmp = this.endAnglef(function(_,_1) {
		$s.push("thx.geom.layout.Pie::endAngle@69");
		var $spos = $s.length;
		$s.pop();
		return v;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.geom.layout.Pie.prototype.endAnglef = function(v) {
	$s.push("thx.geom.layout.Pie::endAnglef");
	var $spos = $s.length;
	this._endAngle = v;
	$s.pop();
	return this;
	$s.pop();
}
thx.geom.layout.Pie.prototype.getSort = function() {
	$s.push("thx.geom.layout.Pie::getSort");
	var $spos = $s.length;
	var $tmp = this._sort;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.geom.layout.Pie.prototype.sort = function(v) {
	$s.push("thx.geom.layout.Pie::sort");
	var $spos = $s.length;
	this._sort = v;
	$s.pop();
	return this;
	$s.pop();
}
thx.geom.layout.Pie.prototype.getValue = function() {
	$s.push("thx.geom.layout.Pie::getValue");
	var $spos = $s.length;
	var $tmp = this._value;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.geom.layout.Pie.prototype.valuef = function(v) {
	$s.push("thx.geom.layout.Pie::valuef");
	var $spos = $s.length;
	this._value = v;
	$s.pop();
	return this;
	$s.pop();
}
thx.geom.layout.Pie.prototype.__class__ = thx.geom.layout.Pie;
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
thx.js.AccessTweenStyle.prototype.floatNodef = function(f,priority) {
	$s.push("thx.js.AccessTweenStyle::floatNodef");
	var $spos = $s.length;
	var $tmp = this.floatTweenNodef(this.transitionFloatTweenf(f),priority);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessTweenStyle.prototype["float"] = function(value,priority) {
	$s.push("thx.js.AccessTweenStyle::float");
	var $spos = $s.length;
	var $tmp = this.floatTweenNodef(this.transitionFloatTween(value),priority);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessTweenStyle.prototype.floatTweenNodef = function(tween,priority) {
	$s.push("thx.js.AccessTweenStyle::floatTweenNodef");
	var $spos = $s.length;
	if(null == priority) priority = null;
	var name = this.name;
	var styleTween = function(d,i) {
		$s.push("thx.js.AccessTweenStyle::floatTweenNodef@38");
		var $spos = $s.length;
		var f = tween(d,i,Std.parseFloat(js.Lib.window.getComputedStyle(d,null).getPropertyValue(name)));
		var $tmp = function(t) {
			$s.push("thx.js.AccessTweenStyle::floatTweenNodef@38@41");
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
thx.js.AccessTweenStyle.prototype.stringNodef = function(f,priority) {
	$s.push("thx.js.AccessTweenStyle::stringNodef");
	var $spos = $s.length;
	var $tmp = this.stringTweenNodef(this.transitionStringTweenf(f),priority);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessTweenStyle.prototype.string = function(value,priority) {
	$s.push("thx.js.AccessTweenStyle::string");
	var $spos = $s.length;
	var $tmp = this.stringTweenNodef(this.transitionStringTween(value),priority);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessTweenStyle.prototype.stringTweenNodef = function(tween,priority) {
	$s.push("thx.js.AccessTweenStyle::stringTweenNodef");
	var $spos = $s.length;
	if(null == priority) priority = null;
	var name = this.name;
	var styleTween = function(d,i) {
		$s.push("thx.js.AccessTweenStyle::stringTweenNodef@65");
		var $spos = $s.length;
		var f = tween(d,i,js.Lib.window.getComputedStyle(d,null).getPropertyValue(name));
		var $tmp = function(t) {
			$s.push("thx.js.AccessTweenStyle::stringTweenNodef@65@68");
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
thx.js.AccessTweenStyle.prototype.colorNodef = function(f,priority) {
	$s.push("thx.js.AccessTweenStyle::colorNodef");
	var $spos = $s.length;
	var $tmp = this.colorTweenNodef(this.transitionColorTweenf(f),priority);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessTweenStyle.prototype.color = function(value,priority) {
	$s.push("thx.js.AccessTweenStyle::color");
	var $spos = $s.length;
	var $tmp = this.colorTweenNodef(this.transitionColorTween(thx.color.Colors.parse(value)),priority);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessTweenStyle.prototype.colorTweenNodef = function(tween,priority) {
	$s.push("thx.js.AccessTweenStyle::colorTweenNodef");
	var $spos = $s.length;
	if(null == priority) priority = null;
	var name = this.name;
	var styleTween = function(d,i) {
		$s.push("thx.js.AccessTweenStyle::colorTweenNodef@92");
		var $spos = $s.length;
		var f = tween(d,i,thx.color.Colors.parse(js.Lib.window.getComputedStyle(d,null).getPropertyValue(name)));
		var $tmp = function(t) {
			$s.push("thx.js.AccessTweenStyle::colorTweenNodef@92@95");
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
	var $tmp = this.floatTweenNodef(this.transitionFloatTweenf(function(n,i) {
		$s.push("thx.js.AccessDataTweenStyle::floatf@114");
		var $spos = $s.length;
		var $tmp = f(Reflect.field(n,"__data__"),i);
		$s.pop();
		return $tmp;
		$s.pop();
	}),priority);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessDataTweenStyle.prototype.floatTweenf = function(tween,priority) {
	$s.push("thx.js.AccessDataTweenStyle::floatTweenf");
	var $spos = $s.length;
	if(null == priority) priority = null;
	var name = this.name;
	var styleTween = function(d,i) {
		$s.push("thx.js.AccessDataTweenStyle::floatTweenf@122");
		var $spos = $s.length;
		var f = tween(Reflect.field(d,"__data__"),i,Std.parseFloat(js.Lib.window.getComputedStyle(d,null).getPropertyValue(name)));
		var $tmp = function(t) {
			$s.push("thx.js.AccessDataTweenStyle::floatTweenf@122@125");
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
thx.js.AccessDataTweenStyle.prototype.stringf = function(f,priority) {
	$s.push("thx.js.AccessDataTweenStyle::stringf");
	var $spos = $s.length;
	var $tmp = this.stringTweenNodef(this.transitionStringTweenf(function(n,i) {
		$s.push("thx.js.AccessDataTweenStyle::stringf@136");
		var $spos = $s.length;
		var $tmp = f(Reflect.field(n,"__data__"),i);
		$s.pop();
		return $tmp;
		$s.pop();
	}),priority);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessDataTweenStyle.prototype.stringTweenf = function(tween,priority) {
	$s.push("thx.js.AccessDataTweenStyle::stringTweenf");
	var $spos = $s.length;
	if(null == priority) priority = null;
	var name = this.name;
	var styleTween = function(d,i) {
		$s.push("thx.js.AccessDataTweenStyle::stringTweenf@144");
		var $spos = $s.length;
		var f = tween(Reflect.field(d,"__data__"),i,js.Lib.window.getComputedStyle(d,null).getPropertyValue(name));
		var $tmp = function(t) {
			$s.push("thx.js.AccessDataTweenStyle::stringTweenf@144@147");
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
thx.js.AccessDataTweenStyle.prototype.colorf = function(f,priority) {
	$s.push("thx.js.AccessDataTweenStyle::colorf");
	var $spos = $s.length;
	var $tmp = this.colorTweenNodef(this.transitionColorTweenf(function(n,i) {
		$s.push("thx.js.AccessDataTweenStyle::colorf@158");
		var $spos = $s.length;
		var $tmp = f(Reflect.field(n,"__data__"),i);
		$s.pop();
		return $tmp;
		$s.pop();
	}),priority);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessDataTweenStyle.prototype.colorTweenf = function(tween,priority) {
	$s.push("thx.js.AccessDataTweenStyle::colorTweenf");
	var $spos = $s.length;
	if(null == priority) priority = null;
	var name = this.name;
	var styleTween = function(d,i) {
		$s.push("thx.js.AccessDataTweenStyle::colorTweenf@166");
		var $spos = $s.length;
		var f = tween(Reflect.field(d,"__data__"),i,thx.color.Colors.parse(js.Lib.window.getComputedStyle(d,null).getPropertyValue(name)));
		var $tmp = function(t) {
			$s.push("thx.js.AccessDataTweenStyle::colorTweenf@166@169");
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
thx.js.AccessDataTweenStyle.prototype.__class__ = thx.js.AccessDataTweenStyle;
rg.query.QueryValue = function(executor,path,event,property,value) {
	if( executor === $_ ) return;
	$s.push("rg.query.QueryValue::new");
	var $spos = $s.length;
	rg.query.QueryProperty.call(this,executor,path,event,property);
	this.setValue(value);
	$s.pop();
}
rg.query.QueryValue.__name__ = ["rg","query","QueryValue"];
rg.query.QueryValue.__super__ = rg.query.QueryProperty;
for(var k in rg.query.QueryProperty.prototype ) rg.query.QueryValue.prototype[k] = rg.query.QueryProperty.prototype[k];
rg.query.QueryValue.prototype.value = null;
rg.query.QueryValue.prototype.setValue = function(v) {
	$s.push("rg.query.QueryValue::setValue");
	var $spos = $s.length;
	if(null == v) throw new thx.error.NullArgument("v","invalid null argument '{0}' for method {1}.{2}()",{ fileName : "Query.hx", lineNumber : 194, className : "rg.query.QueryValue", methodName : "setValue"}); else null;
	var $tmp = this.value = v;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.query.QueryValue.prototype.__class__ = rg.query.QueryValue;
rg.query.QueryProperties = function(executor,path,properties) {
	if( executor === $_ ) return;
	$s.push("rg.query.QueryProperties::new");
	var $spos = $s.length;
	rg.query.QueryPath.call(this,executor,path);
	this.setProperties(properties);
	$s.pop();
}
rg.query.QueryProperties.__name__ = ["rg","query","QueryProperties"];
rg.query.QueryProperties.__super__ = rg.query.QueryPath;
for(var k in rg.query.QueryPath.prototype ) rg.query.QueryProperties.prototype[k] = rg.query.QueryPath.prototype[k];
rg.query.QueryProperties.prototype.properties = null;
rg.query.QueryProperties.prototype.setProperties = function(v) {
	$s.push("rg.query.QueryProperties::setProperties");
	var $spos = $s.length;
	if(null == v || 0 == v.length) throw new thx.error.NullArgument("v",null,{ fileName : "Query.hx", lineNumber : 242, className : "rg.query.QueryProperties", methodName : "setProperties"}); else null;
	var $tmp = this.properties = v;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.query.QueryProperties.prototype.__class__ = rg.query.QueryProperties;
rg.query.QuerySearch = function(executor,path,event,where) {
	if( executor === $_ ) return;
	$s.push("rg.query.QuerySearch::new");
	var $spos = $s.length;
	rg.query.QueryEvent.call(this,executor,path,event);
	this.setWhere(where);
	$s.pop();
}
rg.query.QuerySearch.__name__ = ["rg","query","QuerySearch"];
rg.query.QuerySearch.__super__ = rg.query.QueryEvent;
for(var k in rg.query.QueryEvent.prototype ) rg.query.QuerySearch.prototype[k] = rg.query.QueryEvent.prototype[k];
rg.query.QuerySearch.prototype.where = null;
rg.query.QuerySearch.prototype.setWhere = function(v) {
	$s.push("rg.query.QuerySearch::setWhere");
	var $spos = $s.length;
	if(null == v || 0 == v.length) throw new thx.error.NullArgument("v",null,{ fileName : "Query.hx", lineNumber : 376, className : "rg.query.QuerySearch", methodName : "setWhere"}); else null;
	var $tmp = this.where = v;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.query.QuerySearch.prototype.__class__ = rg.query.QuerySearch;
hxevents.Dispatcher = function(p) {
	if( p === $_ ) return;
	$s.push("hxevents.Dispatcher::new");
	var $spos = $s.length;
	this.handlers = new Array();
	$s.pop();
}
hxevents.Dispatcher.__name__ = ["hxevents","Dispatcher"];
hxevents.Dispatcher.stop = function() {
	$s.push("hxevents.Dispatcher::stop");
	var $spos = $s.length;
	throw hxevents.EventException.StopPropagation;
	$s.pop();
}
hxevents.Dispatcher.prototype.handlers = null;
hxevents.Dispatcher.prototype.add = function(h) {
	$s.push("hxevents.Dispatcher::add");
	var $spos = $s.length;
	this.handlers.push(h);
	$s.pop();
	return h;
	$s.pop();
}
hxevents.Dispatcher.prototype.addOnce = function(h) {
	$s.push("hxevents.Dispatcher::addOnce");
	var $spos = $s.length;
	var me = this;
	var _h = null;
	_h = function(v) {
		$s.push("hxevents.Dispatcher::addOnce@19");
		var $spos = $s.length;
		me.remove(_h);
		h(v);
		$s.pop();
	};
	this.add(_h);
	$s.pop();
	return _h;
	$s.pop();
}
hxevents.Dispatcher.prototype.remove = function(h) {
	$s.push("hxevents.Dispatcher::remove");
	var $spos = $s.length;
	var _g1 = 0, _g = this.handlers.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(Reflect.compareMethods(this.handlers[i],h)) {
			var $tmp = this.handlers.splice(i,1)[0];
			$s.pop();
			return $tmp;
		}
	}
	$s.pop();
	return null;
	$s.pop();
}
hxevents.Dispatcher.prototype.clear = function() {
	$s.push("hxevents.Dispatcher::clear");
	var $spos = $s.length;
	this.handlers = new Array();
	$s.pop();
}
hxevents.Dispatcher.prototype.dispatch = function(e) {
	$s.push("hxevents.Dispatcher::dispatch");
	var $spos = $s.length;
	try {
		var list = this.handlers.copy();
		var _g = 0;
		while(_g < list.length) {
			var l = list[_g];
			++_g;
			l(e);
		}
		$s.pop();
		return true;
	} catch( exc ) {
		if( js.Boot.__instanceof(exc,hxevents.EventException) ) {
			$e = [];
			while($s.length >= $spos) $e.unshift($s.pop());
			$s.push($e[0]);
			$s.pop();
			return false;
		} else throw(exc);
	}
	$s.pop();
}
hxevents.Dispatcher.prototype.has = function(h) {
	$s.push("hxevents.Dispatcher::has");
	var $spos = $s.length;
	if(null == h) {
		var $tmp = this.handlers.length > 0;
		$s.pop();
		return $tmp;
	} else {
		var _g = 0, _g1 = this.handlers;
		while(_g < _g1.length) {
			var handler = _g1[_g];
			++_g;
			if(h == handler) {
				$s.pop();
				return true;
			}
		}
		$s.pop();
		return false;
	}
	$s.pop();
}
hxevents.Dispatcher.prototype.__class__ = hxevents.Dispatcher;
thx.js.Svg = function() { }
thx.js.Svg.__name__ = ["thx","js","Svg"];
thx.js.Svg.mouse = function(dom) {
	$s.push("thx.js.Svg::mouse");
	var $spos = $s.length;
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
	var $tmp = [point.x,point.y];
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.Svg.prototype.__class__ = thx.js.Svg;
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
rg.svg.SvgStackChart = function(panel,y) {
	if( panel === $_ ) return;
	$s.push("rg.svg.SvgStackChart::new");
	var $spos = $s.length;
	this._cpid = "barchart_clip_path_" + ++rg.svg.SvgStackChart._pathid;
	this._y = y;
	this._ease = thx.math.Equations.elasticf();
	this._duration = 1500;
	this._created = 0;
	this.barWidth = 0.8;
	rg.svg.SvgLayer.call(this,panel);
	this.redraw();
	$s.pop();
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
	$s.push("rg.svg.SvgStackChart::getData");
	var $spos = $s.length;
	var $tmp = this._data;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgStackChart.prototype.data = function(d) {
	$s.push("rg.svg.SvgStackChart::data");
	var $spos = $s.length;
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
	$s.pop();
}
rg.svg.SvgStackChart.prototype.init = function() {
	$s.push("rg.svg.SvgStackChart::init");
	var $spos = $s.length;
	this.svg.classed().add("stack-chart").append("svg:clipPath").attr("id").string(this._cpid).append("svg:rect").attr("x")["float"](0).attr("y")["float"](0).attr("width")["float"](0).attr("height")["float"](0);
	this.svg.attr("clip-path").string("url(#" + this._cpid + ")");
	this.svg.append("svg:defs");
	$s.pop();
}
rg.svg.SvgStackChart.prototype.resize = function() {
	$s.push("rg.svg.SvgStackChart::resize");
	var $spos = $s.length;
	this._y.range([0.0,this.height]);
	this.svg.select("#" + this._cpid + " rect").attr("width")["float"](this.width).attr("height")["float"](this.height);
	$s.pop();
}
rg.svg.SvgStackChart.prototype._keyBar = function(d,i) {
	$s.push("rg.svg.SvgStackChart::_keyBar");
	var $spos = $s.length;
	var $tmp = d.label;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgStackChart.prototype._barwidth = null;
rg.svg.SvgStackChart.prototype.redraw = function() {
	$s.push("rg.svg.SvgStackChart::redraw");
	var $spos = $s.length;
	if(null == this._data || this._data.length == 0) {
		$s.pop();
		return;
	}
	var start = 0, width = this.width, max = this._y.getDomain()[1];
	this._barwidth = Ints.max(1,Math.floor(width * this.barWidth));
	var bars = this.svg.selectAll("g.bar").data(this._data,$closure(this,"_keyBar"));
	var be = bars.enter().append("svg:g").attr("class").stringf(function(d,i) {
		$s.push("rg.svg.SvgStackChart::redraw@101");
		var $spos = $s.length;
		var $tmp = "bar item-" + i;
		$s.pop();
		return $tmp;
		$s.pop();
	}).attr("transform").stringf(function(d,i) {
		$s.push("rg.svg.SvgStackChart::redraw@102");
		var $spos = $s.length;
		var $tmp = "translate(" + width / 2 + ",0)";
		$s.pop();
		return $tmp;
		$s.pop();
	});
	be.append("svg:rect").attr("width")["float"](this._barwidth).attr("class").stringf(function(d,i) {
		$s.push("rg.svg.SvgStackChart::redraw@137");
		var $spos = $s.length;
		var $tmp = "bar bar-" + i;
		$s.pop();
		return $tmp;
		$s.pop();
	}).attr("height")["float"](0).attr("x")["float"](-this._barwidth / 2).attr("y")["float"](this._y.scale(0)).style("opacity")["float"](0.0);
	be.eachNode((function(f,a1) {
		$s.push("rg.svg.SvgStackChart::redraw@144");
		var $spos = $s.length;
		var $tmp = function(a2,a3) {
			$s.push("rg.svg.SvgStackChart::redraw@144@144");
			var $spos = $s.length;
			var $tmp = f(a1,a2,a3);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
		$s.pop();
	})($closure(this,"_popin"),max));
	be.sort(function(a,b) {
		$s.push("rg.svg.SvgStackChart::redraw@147");
		var $spos = $s.length;
		if(null == a && null == b) {
			$s.pop();
			return 0;
		} else if(null == a) {
			$s.pop();
			return 1;
		} else if(null == b) {
			$s.pop();
			return -1;
		}
		var $tmp = Floats.compare(b.y0,a.y0);
		$s.pop();
		return $tmp;
		$s.pop();
	});
	bars.update().select("text").text().stringf($closure(this,"textLabel"));
	bars.update().attr("transform").stringf(function(d,i) {
		$s.push("rg.svg.SvgStackChart::redraw@162");
		var $spos = $s.length;
		var $tmp = "translate(" + width / 2 + ",0)";
		$s.pop();
		return $tmp;
		$s.pop();
	}).select("rect").transition().duration(null,this._duration).ease(this._ease).attr("width")["float"](this._barwidth).attr("height").floatf($closure(this,"hscale")).attr("x")["float"](-this._barwidth / 2);
	bars.exit().remove();
	$s.pop();
}
rg.svg.SvgStackChart.prototype.textLabel = function(d,i) {
	$s.push("rg.svg.SvgStackChart::textLabel");
	var $spos = $s.length;
	var $tmp = rg.util.RGStrings.humanize(d.label) + ": " + Floats.format(d.value,"I");
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgStackChart.prototype._border = null;
rg.svg.SvgStackChart.prototype.hscale = function(d,i) {
	$s.push("rg.svg.SvgStackChart::hscale");
	var $spos = $s.length;
	var $tmp = Math.round(this._y.scale(0) - this._y.scale(d.value) - this._border);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgStackChart.prototype.yscale = function(d,i) {
	$s.push("rg.svg.SvgStackChart::yscale");
	var $spos = $s.length;
	var $tmp = Math.round(this._y.scale(d.y0) - (this._y.scale(0) - this._y.scale(d.value) - this._border * 2));
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgStackChart.prototype.ylabel = function(d,i) {
	$s.push("rg.svg.SvgStackChart::ylabel");
	var $spos = $s.length;
	var $tmp = Math.round(this._y.scale(d.y0) - (this._y.scale(0) - this._y.scale(d.value) - this._border * 2) / 2);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgStackChart.prototype._popin = function(max,n,i) {
	$s.push("rg.svg.SvgStackChart::_popin");
	var $spos = $s.length;
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
		$s.push("rg.svg.SvgStackChart::_popin@224");
		var $spos = $s.length;
		g.selectAll("text").transition().style("opacity")["float"](1);
		if(i1 > 0) {
			$s.pop();
			return;
		}
		g.onNode("mouseover.animation",$closure(me,"_highlight")).onNode("mouseout.animation",$closure(me,"_backtonormal"));
		$s.pop();
	});
	g.append("svg:text").attr("text-anchor").string("middle").attr("dominant-baseline").string("middle").attr("x")["float"](0).text().stringf($closure(this,"textLabel")).style("opacity")["float"](0.0).attr("y").floatf($closure(this,"ylabel"));
	shadow.transition().ease(this._ease).duration(null,this._duration).delay(null,0 * (i - this._created)).attr("height").floatf($closure(this,"hscale")).attr("y").floatf($closure(this,"yscale")).style("opacity")["float"](0.25);
	if(i == this._data.length - 1) this._created = i;
	$s.pop();
}
rg.svg.SvgStackChart.prototype._highlight = function(d,i) {
	$s.push("rg.svg.SvgStackChart::_highlight");
	var $spos = $s.length;
	var bar = thx.js.Dom.selectNodeData(d).selectAll("rect");
	bar.transition().ease(this._ease).duration(null,this._duration).attr("x")["float"](Math.ceil(-this._barwidth * 1.2 / 2)).attr("width")["float"](Math.ceil(this._barwidth * 1.2));
	$s.pop();
}
rg.svg.SvgStackChart.prototype._backtonormal = function(d,i) {
	$s.push("rg.svg.SvgStackChart::_backtonormal");
	var $spos = $s.length;
	var bar = thx.js.Dom.selectNodeData(d).selectAll("rect");
	bar.transition().ease(this._ease).duration(null,this._duration).attr("x")["float"](-this._barwidth / 2).attr("width")["float"](this._barwidth);
	$s.pop();
}
rg.svg.SvgStackChart.prototype.__class__ = rg.svg.SvgStackChart;
rg.query.QuerySubPath = function(executor,path) {
	if( executor === $_ ) return;
	$s.push("rg.query.QuerySubPath::new");
	var $spos = $s.length;
	rg.query.QueryPath.call(this,executor,path);
	$s.pop();
}
rg.query.QuerySubPath.__name__ = ["rg","query","QuerySubPath"];
rg.query.QuerySubPath.__super__ = rg.query.QueryPath;
for(var k in rg.query.QueryPath.prototype ) rg.query.QuerySubPath.prototype[k] = rg.query.QueryPath.prototype[k];
rg.query.QuerySubPath.prototype.executeLoad = function(success,error) {
	$s.push("rg.query.QuerySubPath::executeLoad");
	var $spos = $s.length;
	var query = this.queryObject();
	query.type = "path";
	this.executor.children(this.path,query,success,error);
	$s.pop();
}
rg.query.QuerySubPath.prototype.__class__ = rg.query.QuerySubPath;
rg.query.QueryEventSeries = function(executor,path,event) {
	if( executor === $_ ) return;
	$s.push("rg.query.QueryEventSeries::new");
	var $spos = $s.length;
	rg.query.QueryEvent.call(this,executor,path,event);
	$s.pop();
}
rg.query.QueryEventSeries.__name__ = ["rg","query","QueryEventSeries"];
rg.query.QueryEventSeries.__super__ = rg.query.QueryEvent;
for(var k in rg.query.QueryEvent.prototype ) rg.query.QueryEventSeries.prototype[k] = rg.query.QueryEvent.prototype[k];
rg.query.QueryEventSeries.forLineChart = function(executor,path,event) {
	$s.push("rg.query.QueryEventSeries::forLineChart");
	var $spos = $s.length;
	var query = new rg.query.QueryEventSeries(executor,path,event);
	query.transform = rg.query.Transform.timeSeries(query,event);
	$s.pop();
	return query;
	$s.pop();
}
rg.query.QueryEventSeries.prototype.executeLoad = function(success,error) {
	$s.push("rg.query.QueryEventSeries::executeLoad");
	var $spos = $s.length;
	var query = this.queryObject();
	query.property = this.event;
	this.executor.propertySeries(this.path,query,success,error);
	$s.pop();
}
rg.query.QueryEventSeries.prototype.__class__ = rg.query.QueryEventSeries;
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
rg.QueryOptionsUtil = function() { }
rg.QueryOptionsUtil.__name__ = ["rg","QueryOptionsUtil"];
rg.QueryOptionsUtil.emptyQuery = function() {
	$s.push("rg.QueryOptionsUtil::emptyQuery");
	var $spos = $s.length;
	var $tmp = { path : null, event : null, events : null, property : null, values : null, filter : null, top : 10, bottom : null, other : null};
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.QueryOptionsUtil.emptyPivotTableQuery = function() {
	$s.push("rg.QueryOptionsUtil::emptyPivotTableQuery");
	var $spos = $s.length;
	var $tmp = { path : null, event : null, availableProperties : null, properties : [], filter : null, top : null, bottom : null};
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.QueryOptionsUtil.prototype.__class__ = rg.QueryOptionsUtil;
rg.svg.SvgBarChart = function(panel,x,y) {
	if( panel === $_ ) return;
	$s.push("rg.svg.SvgBarChart::new");
	var $spos = $s.length;
	this._cpid = "barchart_clip_path_" + ++rg.svg.SvgBarChart._pathid;
	this._x = x;
	this._y = y;
	this._ease = thx.math.Equations.elasticf();
	this._duration = 1500;
	this._created = 0;
	this.barWidth = 0.6;
	rg.svg.SvgLayer.call(this,panel);
	this.redraw();
	$s.pop();
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
	this.redraw();
	$s.pop();
}
rg.svg.SvgBarChart.prototype.init = function() {
	$s.push("rg.svg.SvgBarChart::init");
	var $spos = $s.length;
	this.svg.classed().add("bar-chart").append("svg:clipPath").attr("id").string(this._cpid).append("svg:rect").attr("x")["float"](0).attr("y")["float"](0).attr("width")["float"](0).attr("height")["float"](0);
	this.svg.attr("clip-path").string("url(#" + this._cpid + ")");
	this.svg.append("svg:defs");
	$s.pop();
}
rg.svg.SvgBarChart.prototype.resize = function() {
	$s.push("rg.svg.SvgBarChart::resize");
	var $spos = $s.length;
	this._y.range([0.0,this.height]);
	this.svg.select("#" + this._cpid + " rect").attr("width")["float"](this.width).attr("height")["float"](this.height);
	$s.pop();
}
rg.svg.SvgBarChart.prototype._key = function(d,i) {
	$s.push("rg.svg.SvgBarChart::_key");
	var $spos = $s.length;
	var $tmp = d.label;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgBarChart.prototype._barwidth = null;
rg.svg.SvgBarChart.prototype.redraw = function() {
	$s.push("rg.svg.SvgBarChart::redraw");
	var $spos = $s.length;
	if(null == this._data || this._data.length == 0) {
		$s.pop();
		return;
	}
	var start = 0, width = this.width, max = this._y.getDomain()[1];
	this._barwidth = Ints.max(1,Math.floor(width / this._data.length * this.barWidth));
	var bands = this._x.rangePoints(start,width,1);
	var bars = this.svg.selectAll("g.bar").data(this._data,$closure(this,"_key"));
	var be = bars.enter().append("svg:g").attr("class").string("bar").attr("transform").stringf(function(d,i) {
		$s.push("rg.svg.SvgBarChart::redraw@98");
		var $spos = $s.length;
		var $tmp = "translate(" + bands.scale(d.label,i) + ",0)";
		$s.pop();
		return $tmp;
		$s.pop();
	});
	be.append("svg:rect").attr("class").string("shadow").attr("width")["float"](this._barwidth).attr("height")["float"](0).attr("x")["float"](-this._barwidth / 2).attr("y")["float"](this._y.scale(0)).style("opacity")["float"](0.0).attr("transform").string("translate(1,1)").style("stroke").string("#000").style("fill").string("#000").style("stroke-width")["float"](5).style("opacity")["float"](0.0);
	be.append("svg:rect").attr("class").string("shadow").attr("width")["float"](this._barwidth).attr("height")["float"](0).attr("x")["float"](-this._barwidth / 2).attr("y")["float"](this._y.scale(0)).style("opacity")["float"](0.0).attr("transform").string("translate(1,1)").style("stroke").string("#000").style("fill").string("#000").style("stroke-width")["float"](3).style("opacity")["float"](0.0);
	be.append("svg:rect").attr("width")["float"](this._barwidth).attr("class").stringf(function(d,i) {
		$s.push("rg.svg.SvgBarChart::redraw@133");
		var $spos = $s.length;
		var $tmp = "bar item-" + i;
		$s.pop();
		return $tmp;
		$s.pop();
	}).attr("height")["float"](0).attr("x")["float"](-this._barwidth / 2).attr("y")["float"](this._y.scale(0)).style("opacity")["float"](0.0);
	be.append("svg:text").attr("text-anchor").string("middle").attr("x")["float"](0).text().stringf($closure(this,"textLabel")).style("opacity")["float"](0.0).attr("y").floatf($closure(this,"ylabel"));
	be.eachNode((function(f,a1) {
		$s.push("rg.svg.SvgBarChart::redraw@149");
		var $spos = $s.length;
		var $tmp = function(a2,a3) {
			$s.push("rg.svg.SvgBarChart::redraw@149@149");
			var $spos = $s.length;
			var $tmp = f(a1,a2,a3);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
		$s.pop();
	})($closure(this,"_popin"),max));
	bars.update().attr("transform").stringf(function(d,i) {
		$s.push("rg.svg.SvgBarChart::redraw@154");
		var $spos = $s.length;
		var $tmp = "translate(" + bands.scale(d.label,i) + ",0)";
		$s.pop();
		return $tmp;
		$s.pop();
	}).select("rect").transition().duration(null,this._duration).ease(this._ease).attr("width")["float"](this._barwidth).attr("height").floatf($closure(this,"hscale")).attr("x")["float"](-this._barwidth / 2);
	bars.update().select("text").text().stringf($closure(this,"textLabel"));
	bars.exit().remove();
	$s.pop();
}
rg.svg.SvgBarChart.prototype.textLabel = function(d,i) {
	$s.push("rg.svg.SvgBarChart::textLabel");
	var $spos = $s.length;
	var $tmp = Floats.format(d.value,"I");
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgBarChart.prototype.hscale = function(d,_) {
	$s.push("rg.svg.SvgBarChart::hscale");
	var $spos = $s.length;
	var $tmp = this._y.scale(0) - this._y.scale(d.value);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgBarChart.prototype.yscale = function(d,_) {
	$s.push("rg.svg.SvgBarChart::yscale");
	var $spos = $s.length;
	var $tmp = this._y.scale(d.value);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgBarChart.prototype.ylabel = function(d,_) {
	$s.push("rg.svg.SvgBarChart::ylabel");
	var $spos = $s.length;
	var $tmp = this._y.scale(d.value) - 5;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgBarChart.prototype._popin = function(max,n,i) {
	$s.push("rg.svg.SvgBarChart::_popin");
	var $spos = $s.length;
	var g = thx.js.Dom.selectNodeData(n), bar = g.select("rect.bar"), shadow = g.selectAll("rect.shadow"), y = this._y;
	var color = bar.style("fill").get();
	if(this.svg.select("defs").select("#rg_bar_gradient_" + i).empty()) {
		var stops = this.svg.select("defs").append("svg:linearGradient").attr("id").string("rg_bar_gradient_" + i).attr("x1").string("0%").attr("x2").string("0%").attr("y1").string("100%").attr("y2").string("0%").attr("spreadMethod").string("pad");
		stops.append("svg:stop").attr("offset").string("0%").attr("stop-color").string(thx.color.Hsl.darker(thx.color.Hsl.toHsl(thx.color.Colors.parse(color)),1.4).toRgbString()).attr("stop-opacity")["float"](1);
		stops.append("svg:stop").attr("offset").string("100%").attr("stop-color").string(color).attr("stop-opacity")["float"](1);
	}
	var me = this;
	bar.attr("style").string("fill:url(#rg_bar_gradient_" + i + ")").transition().ease(this._ease).duration(null,this._duration).delay(null,150 * (i - this._created)).attr("height").floatf($closure(this,"hscale")).attr("y").floatf($closure(this,"yscale")).style("opacity")["float"](1.0).endNode(function(n1,i1) {
		$s.push("rg.svg.SvgBarChart::_popin@215");
		var $spos = $s.length;
		g.selectAll("text").transition().style("opacity")["float"](1);
		if(i1 > 0) {
			$s.pop();
			return;
		}
		g.onNode("mouseover.animation",$closure(me,"_highlight")).onNode("mouseout.animation",$closure(me,"_backtonormal"));
		$s.pop();
	});
	shadow.transition().ease(this._ease).duration(null,this._duration).delay(null,150 * (i - this._created)).attr("height").floatf($closure(this,"hscale")).attr("y").floatf($closure(this,"yscale")).style("opacity")["float"](0.25);
	if(i == this._data.length - 1) this._created = i;
	$s.pop();
}
rg.svg.SvgBarChart.prototype._highlight = function(d,i) {
	$s.push("rg.svg.SvgBarChart::_highlight");
	var $spos = $s.length;
	var bar = thx.js.Dom.selectNodeData(d).selectAll("rect");
	bar.transition().ease(this._ease).duration(null,this._duration).attr("x")["float"](Math.ceil(-this._barwidth * 1.2 / 2)).attr("width")["float"](Math.ceil(this._barwidth * 1.2));
	$s.pop();
}
rg.svg.SvgBarChart.prototype._backtonormal = function(d,i) {
	$s.push("rg.svg.SvgBarChart::_backtonormal");
	var $spos = $s.length;
	var bar = thx.js.Dom.selectNodeData(d).selectAll("rect");
	bar.transition().ease(this._ease).duration(null,this._duration).attr("x")["float"](-this._barwidth / 2).attr("width")["float"](this._barwidth);
	$s.pop();
}
rg.svg.SvgBarChart.prototype.__class__ = rg.svg.SvgBarChart;
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
thx.js.AccessText.prototype.stringNodef = function(v) {
	$s.push("thx.js.AccessText::stringNodef");
	var $spos = $s.length;
	this.clear();
	this.selection.eachNode(function(node,i) {
		$s.push("thx.js.AccessText::stringNodef@42");
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
thx.js.AccessText.prototype.floatNodef = function(v) {
	$s.push("thx.js.AccessText::floatNodef");
	var $spos = $s.length;
	this.clear();
	this.selection.eachNode(function(node,i) {
		$s.push("thx.js.AccessText::floatNodef@52");
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
thx.math.scale.LinearInt = function(p) {
	if( p === $_ ) return;
	$s.push("thx.math.scale.LinearInt::new");
	var $spos = $s.length;
	thx.math.scale.Linear.call(this);
	$s.pop();
}
thx.math.scale.LinearInt.__name__ = ["thx","math","scale","LinearInt"];
thx.math.scale.LinearInt.__super__ = thx.math.scale.Linear;
for(var k in thx.math.scale.Linear.prototype ) thx.math.scale.LinearInt.prototype[k] = thx.math.scale.Linear.prototype[k];
thx.math.scale.LinearInt.prototype.ticks = function() {
	$s.push("thx.math.scale.LinearInt::ticks");
	var $spos = $s.length;
	var range = this.tickRange();
	var $tmp = Ints.range(Math.round(range.start),Math.round(range.stop),Ints.max(1,Math.round(range.step)));
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.LinearInt.prototype.tickFormat = function(v,i) {
	$s.push("thx.math.scale.LinearInt::tickFormat");
	var $spos = $s.length;
	var $tmp = Floats.format(v,"I");
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.LinearInt.prototype.__class__ = thx.math.scale.LinearInt;
rg.svg.SvgBaloonShape = function() { }
rg.svg.SvgBaloonShape.__name__ = ["rg","svg","SvgBaloonShape"];
rg.svg.SvgBaloonShape.shape = function(width,height,rc,rp,side,offset) {
	$s.push("rg.svg.SvgBaloonShape::shape");
	var $spos = $s.length;
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
	var $tmp = buf + "Z";
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgBaloonShape.prototype.__class__ = rg.svg.SvgBaloonShape;
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
		$s.push("Objects::interpolatef@85");
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
Objects.copyTo = function(src,dst) {
	$s.push("Objects::copyTo");
	var $spos = $s.length;
	var _g = 0, _g1 = Reflect.fields(src);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		var sv = Dynamics.clone(Reflect.field(src,field));
		var dv = Reflect.field(dst,field);
		if(Reflect.isObject(sv) && null == Type.getClass(sv) && (Reflect.isObject(dv) && null == Type.getClass(dv))) Objects.copyTo(sv,dv); else dst[field] = sv;
	}
	$s.pop();
	return dst;
	$s.pop();
}
Objects.clone = function(src) {
	$s.push("Objects::clone");
	var $spos = $s.length;
	var dst = { };
	Objects.copyTo(src,dst);
	var $tmp = dst;
	$s.pop();
	return $tmp;
	$s.pop();
}
Objects._flatten = function(src,cum,arr,levels,level) {
	$s.push("Objects::_flatten");
	var $spos = $s.length;
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
	$s.pop();
}
Objects.flatten = function(src,levels) {
	$s.push("Objects::flatten");
	var $spos = $s.length;
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
	$s.pop();
	return arr;
	$s.pop();
}
Objects.compare = function(a,b) {
	$s.push("Objects::compare");
	var $spos = $s.length;
	var v, fields;
	if((v = Arrays.compare(fields = Reflect.fields(a),Reflect.fields(b))) != 0) {
		$s.pop();
		return v;
	}
	var _g = 0;
	while(_g < fields.length) {
		var field = fields[_g];
		++_g;
		if((v = Dynamics.compare(Reflect.field(a,field),Reflect.field(b,field))) != 0) {
			$s.pop();
			return v;
		}
	}
	$s.pop();
	return 0;
	$s.pop();
}
Objects.addFields = function(o,fields,values) {
	$s.push("Objects::addFields");
	var $spos = $s.length;
	var _g1 = 0, _g = fields.length;
	while(_g1 < _g) {
		var i = _g1++;
		Objects.addField(o,fields[i],values[i]);
	}
	$s.pop();
	return o;
	$s.pop();
}
Objects.addField = function(o,field,value) {
	$s.push("Objects::addField");
	var $spos = $s.length;
	o[field] = value;
	$s.pop();
	return o;
	$s.pop();
}
Objects.format = function(v,param,params,culture) {
	$s.push("Objects::format");
	var $spos = $s.length;
	var $tmp = (Objects.formatf(param,params,culture))(v);
	$s.pop();
	return $tmp;
	$s.pop();
}
Objects.formatf = function(param,params,culture) {
	$s.push("Objects::formatf");
	var $spos = $s.length;
	params = thx.culture.FormatParams.params(param,params,"R");
	var format = params.shift();
	switch(format) {
	case "O":
		var $tmp = function(v) {
			$s.push("Objects::formatf@215");
			var $spos = $s.length;
			var $tmp = Std.string(v);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	case "R":
		var $tmp = function(v) {
			$s.push("Objects::formatf@217");
			var $spos = $s.length;
			var buf = [];
			var _g = 0, _g1 = Reflect.fields(v);
			while(_g < _g1.length) {
				var field = _g1[_g];
				++_g;
				buf.push(field + ":" + Dynamics.format(Reflect.field(v,field),null,null,null,culture));
			}
			var $tmp = "{" + buf.join(",") + "}";
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	default:
		var $tmp = (function($this) {
			var $r;
			throw new thx.error.Error("Unsupported number format: {0}",null,format,{ fileName : "Objects.hx", lineNumber : 225, className : "Objects", methodName : "formatf"});
			return $r;
		}(this));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Objects.prototype.__class__ = Objects;
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
rg.svg.SvgScatterGraph = function(panel,x,y) {
	if( panel === $_ ) return;
	$s.push("rg.svg.SvgScatterGraph::new");
	var $spos = $s.length;
	this._x = x;
	this._y = y;
	this._ease = thx.math.Equations.linear;
	this._duration = 1500;
	this._created = 0;
	this._symbols = new Hash();
	rg.svg.SvgLayer.call(this,panel);
	this.redraw();
	$s.pop();
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
	$s.push("rg.svg.SvgScatterGraph::getData");
	var $spos = $s.length;
	var $tmp = this._data;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgScatterGraph.prototype.data = function(d) {
	$s.push("rg.svg.SvgScatterGraph::data");
	var $spos = $s.length;
	this._data = d;
	this.redraw();
	$s.pop();
}
rg.svg.SvgScatterGraph.prototype.init = function() {
	$s.push("rg.svg.SvgScatterGraph::init");
	var $spos = $s.length;
	this.svg.classed().add("scatter-graph").append("svg:defs");
	$s.pop();
}
rg.svg.SvgScatterGraph.prototype.resize = function() {
	$s.push("rg.svg.SvgScatterGraph::resize");
	var $spos = $s.length;
	this._y.range([0.0,this.height]);
	$s.pop();
}
rg.svg.SvgScatterGraph.prototype._key = function(d,i) {
	$s.push("rg.svg.SvgScatterGraph::_key");
	var $spos = $s.length;
	var $tmp = d.label;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgScatterGraph.prototype.redraw = function() {
	$s.push("rg.svg.SvgScatterGraph::redraw");
	var $spos = $s.length;
	if(null == this._data || this._data.length == 0) {
		$s.pop();
		return;
	}
	var start = 0, width = this.width, max = this._y.getDomain()[1], y = this._y;
	var bands = this._x.rangePoints(start,width,1);
	var symbols = this.svg.selectAll("g.symbol").data(this._data,$closure(this,"_key"));
	var be = symbols.enter().append("svg:g").attr("class").stringf(function(d,i) {
		$s.push("rg.svg.SvgScatterGraph::redraw@75");
		var $spos = $s.length;
		var $tmp = "symbol item-" + i;
		$s.pop();
		return $tmp;
		$s.pop();
	}).attr("transform").stringf(function(d,i) {
		$s.push("rg.svg.SvgScatterGraph::redraw@76");
		var $spos = $s.length;
		var $tmp = "translate(" + bands.scale(d.label,i) + "," + y.scale(d.value,i) + ")";
		$s.pop();
		return $tmp;
		$s.pop();
	}).style("opacity")["float"](0);
	be.append("svg:path").attr("class").string("shadow").attr("transform").string("translate(1,1)").style("stroke").string("#000").style("fill").string("#000").style("stroke-width")["float"](5).attr("d").stringf($closure(this,"_symbol")).style("opacity")["float"](0.25);
	be.append("svg:path").attr("class").string("shadow").attr("transform").string("translate(1,1)").style("stroke").string("#000").style("fill").string("#000").style("stroke-width")["float"](3).attr("d").stringf($closure(this,"_symbol")).style("opacity")["float"](0.5);
	be.append("svg:path").attr("d").stringf($closure(this,"_symbol"));
	var me = this;
	be.append("svg:text").attr("text-anchor").string("middle").attr("y").floatf(function(d,i) {
		$s.push("rg.svg.SvgScatterGraph::redraw@110");
		var $spos = $s.length;
		var $tmp = -Math.ceil(Math.sqrt(me.symbolSize(d,i)));
		$s.pop();
		return $tmp;
		$s.pop();
	}).text().stringf($closure(this,"textLabel"));
	be.transition().duration(null,this._duration).ease(this._ease).style("opacity")["float"](1);
	symbols.update().transition().duration(null,this._duration).ease(this._ease).attr("transform").stringf(function(d,i) {
		$s.push("rg.svg.SvgScatterGraph::redraw@121");
		var $spos = $s.length;
		var $tmp = "translate(" + bands.scale(d.label,i) + "," + y.scale(d.value,i) + ")";
		$s.pop();
		return $tmp;
		$s.pop();
	});
	symbols.exit().remove();
	$s.pop();
}
rg.svg.SvgScatterGraph.prototype._symbols = null;
rg.svg.SvgScatterGraph.prototype._symbol = function(d,i) {
	$s.push("rg.svg.SvgScatterGraph::_symbol");
	var $spos = $s.length;
	var name = this.symbolName(d,i);
	if(!Reflect.hasField(thx.svg.Symbol,name)) name = "circle";
	var size = this.symbolSize(d,i), key = name + "-" + size;
	var s = this._symbols.get(key);
	if(null == s) {
		s = Reflect.field(thx.svg.Symbol,name).apply(thx.svg.Symbol,[size]);
		this._symbols.set(key,s);
	}
	$s.pop();
	return s;
	$s.pop();
}
rg.svg.SvgScatterGraph.prototype.symbolName = function(d,i) {
	$s.push("rg.svg.SvgScatterGraph::symbolName");
	var $spos = $s.length;
	$s.pop();
	return "circle";
	$s.pop();
}
rg.svg.SvgScatterGraph.prototype.symbolSize = function(d,i) {
	$s.push("rg.svg.SvgScatterGraph::symbolSize");
	var $spos = $s.length;
	$s.pop();
	return 100;
	$s.pop();
}
rg.svg.SvgScatterGraph.prototype.textLabel = function(d,i) {
	$s.push("rg.svg.SvgScatterGraph::textLabel");
	var $spos = $s.length;
	var $tmp = Floats.format(d.value,"I");
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgScatterGraph.prototype.__class__ = rg.svg.SvgScatterGraph;
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
rg.query.QueryValuesCount = function(executor,path,event,property,values,top,limit,others,othersLabel) {
	if( executor === $_ ) return;
	$s.push("rg.query.QueryValuesCount::new");
	var $spos = $s.length;
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
	$s.pop();
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
	$s.push("rg.query.QueryValuesCount::filter");
	var $spos = $s.length;
	$s.pop();
	return true;
	$s.pop();
}
rg.query.QueryValuesCount.prototype.order = function(values) {
	$s.push("rg.query.QueryValuesCount::order");
	var $spos = $s.length;
	if(this.top) {
		values.sort(null == function(a,b) {
			$s.push("rg.query.QueryValuesCount::order@29");
			var $spos = $s.length;
			var $tmp = Floats.compare(b.value,a.value);
			$s.pop();
			return $tmp;
			$s.pop();
		}?Dynamics.compare:function(a,b) {
			$s.push("rg.query.QueryValuesCount::order@29");
			var $spos = $s.length;
			var $tmp = Floats.compare(b.value,a.value);
			$s.pop();
			return $tmp;
			$s.pop();
		});
		values;
	} else {
		values.sort(null == function(a,b) {
			$s.push("rg.query.QueryValuesCount::order@31");
			var $spos = $s.length;
			var $tmp = Floats.compare(a.value,b.value);
			$s.pop();
			return $tmp;
			$s.pop();
		}?Dynamics.compare:function(a,b) {
			$s.push("rg.query.QueryValuesCount::order@31");
			var $spos = $s.length;
			var $tmp = Floats.compare(a.value,b.value);
			$s.pop();
			return $tmp;
			$s.pop();
		});
		values;
	}
	$s.pop();
	return values;
	$s.pop();
}
rg.query.QueryValuesCount.prototype.load = function() {
	$s.push("rg.query.QueryValuesCount::load");
	var $spos = $s.length;
	if(null == this.values || 0 == this.values.length) {
		var loader = new rg.query.QueryPropertyValues(this.executor,this.path,this.event,this.property,this.top?rg.query.QueryLimit.Top(this.limit):rg.query.QueryLimit.Bottom(this.limit)), me = this;
		loader.onData.add(function(d) {
			$s.push("rg.query.QueryValuesCount::load@52");
			var $spos = $s.length;
			me.values = d;
			loader.close();
			me.load();
			$s.pop();
		});
		loader.load();
	} else rg.query.QueryProperty.prototype.load.call(this);
	$s.pop();
}
rg.query.QueryValuesCount.prototype.executeLoad = function(success,error) {
	$s.push("rg.query.QueryValuesCount::executeLoad");
	var $spos = $s.length;
	var count = 0, total = this.values.length, result = [], totalcount = 0, others = this.others, label = this.othersLabel, filter = $closure(this,"filter");
	var _end = function() {
		$s.push("rg.query.QueryValuesCount::executeLoad@89");
		var $spos = $s.length;
		if(others) result.push({ label : label, value : totalcount > 0?totalcount:0.0});
		success(result);
		$s.pop();
	};
	var _success = function(label1,v) {
		$s.push("rg.query.QueryValuesCount::executeLoad@98");
		var $spos = $s.length;
		if(filter(label1,v)) {
			result.push({ label : label1, value : 0.0 + v});
			totalcount -= v;
		}
		if(++count == total) _end();
		$s.pop();
	};
	if(others) {
		total++;
		var _successtotal = function(v) {
			$s.push("rg.query.QueryValuesCount::executeLoad@112");
			var $spos = $s.length;
			totalcount += v;
			if(++count == total) _end();
			$s.pop();
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
			$s.push("rg.query.QueryValuesCount::executeLoad@136");
			var $spos = $s.length;
			var $tmp = function(a2) {
				$s.push("rg.query.QueryValuesCount::executeLoad@136@136");
				var $spos = $s.length;
				var $tmp = f(a1,a2);
				$s.pop();
				return $tmp;
				$s.pop();
			};
			$s.pop();
			return $tmp;
			$s.pop();
		})(_success,value),error);
	}
	$s.pop();
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
	$s.push("thx.color.Grey::new");
	var $spos = $s.length;
	this.grey = Floats.normalize(value);
	var c = Ints.interpolate(this.grey,0,255,null);
	thx.color.Rgb.call(this,c,c,c);
	$s.pop();
}
thx.color.Grey.__name__ = ["thx","color","Grey"];
thx.color.Grey.__super__ = thx.color.Rgb;
for(var k in thx.color.Rgb.prototype ) thx.color.Grey.prototype[k] = thx.color.Rgb.prototype[k];
thx.color.Grey.toGrey = function(rgb,luminance) {
	$s.push("thx.color.Grey::toGrey");
	var $spos = $s.length;
	if(null == luminance) luminance = thx.color.PerceivedLuminance.Perceived;
	switch( (luminance)[1] ) {
	case 0:
		var $tmp = new thx.color.Grey(rgb.red / 255 * .2126 + rgb.green / 255 * .7152 + rgb.blue / 255 * .0722);
		$s.pop();
		return $tmp;
	case 1:
		var $tmp = new thx.color.Grey(rgb.red / 255 * .299 + rgb.green / 255 * .587 + rgb.blue / 255 * .114);
		$s.pop();
		return $tmp;
	case 2:
		var $tmp = new thx.color.Grey(Math.sqrt(0.241 * Math.pow(rgb.red / 255,2) + 0.691 * Math.pow(rgb.green / 255,2) + 0.068 * Math.pow(rgb.blue / 255,2)));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
thx.color.Grey.equals = function(a,b) {
	$s.push("thx.color.Grey::equals");
	var $spos = $s.length;
	var $tmp = a.grey == b.grey;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.color.Grey.darker = function(color,t,equation) {
	$s.push("thx.color.Grey::darker");
	var $spos = $s.length;
	var v = t * color.grey;
	var $tmp = new thx.color.Grey(Floats.interpolate(v,0,1,equation));
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.color.Grey.interpolate = function(a,b,t,equation) {
	$s.push("thx.color.Grey::interpolate");
	var $spos = $s.length;
	var $tmp = new thx.color.Grey(Floats.interpolate(t,a.grey,b.grey,equation));
	$s.pop();
	return $tmp;
	$s.pop();
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
	$s.push("rg.query.QueryPropertyValues::new");
	var $spos = $s.length;
	rg.query.QueryProperty.call(this,executor,path,event,property);
	this.setLimit(null == limit?rg.query.QueryLimit.NoLimit:limit);
	$s.pop();
}
rg.query.QueryPropertyValues.__name__ = ["rg","query","QueryPropertyValues"];
rg.query.QueryPropertyValues.__super__ = rg.query.QueryProperty;
for(var k in rg.query.QueryProperty.prototype ) rg.query.QueryPropertyValues.prototype[k] = rg.query.QueryProperty.prototype[k];
rg.query.QueryPropertyValues.prototype.limit = null;
rg.query.QueryPropertyValues.prototype.executeLoad = function(success,error) {
	$s.push("rg.query.QueryPropertyValues::executeLoad");
	var $spos = $s.length;
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
	$s.pop();
}
rg.query.QueryPropertyValues.prototype.setLimit = function(v) {
	$s.push("rg.query.QueryPropertyValues::setLimit");
	var $spos = $s.length;
	if(null == v) throw new thx.error.NullArgument("v","invalid null argument '{0}' for method {1}.{2}()",{ fileName : "QueryPropertyValues.hx", lineNumber : 42, className : "rg.query.QueryPropertyValues", methodName : "setLimit"}); else null;
	var $tmp = this.limit = v;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.query.QueryPropertyValues.prototype.__class__ = rg.query.QueryPropertyValues;
rg.query.QueryIntersect = function(executor,path,properties) {
	if( executor === $_ ) return;
	$s.push("rg.query.QueryIntersect::new");
	var $spos = $s.length;
	rg.query.QueryProperties.call(this,executor,path,properties);
	$s.pop();
}
rg.query.QueryIntersect.__name__ = ["rg","query","QueryIntersect"];
rg.query.QueryIntersect.__super__ = rg.query.QueryProperties;
for(var k in rg.query.QueryProperties.prototype ) rg.query.QueryIntersect.prototype[k] = rg.query.QueryProperties.prototype[k];
rg.query.QueryIntersect.forPivotTable = function(executor,path,properties,propertiesForColumns) {
	$s.push("rg.query.QueryIntersect::forPivotTable");
	var $spos = $s.length;
	var query = new rg.query.QueryIntersect(executor,path,properties);
	var transformer = new rg.query._QueryIntersect.PivotTableTransform(propertiesForColumns,query);
	query.transform = $closure(transformer,"transform");
	$s.pop();
	return query;
	$s.pop();
}
rg.query.QueryIntersect.prototype.executeLoad = function(success,error) {
	$s.push("rg.query.QueryIntersect::executeLoad");
	var $spos = $s.length;
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
	$s.pop();
}
rg.query.QueryIntersect.prototype.__class__ = rg.query.QueryIntersect;
if(!rg.query._QueryIntersect) rg.query._QueryIntersect = {}
rg.query._QueryIntersect.PivotTableTransform = function(columns,query) {
	if( columns === $_ ) return;
	$s.push("rg.query._QueryIntersect.PivotTableTransform::new");
	var $spos = $s.length;
	this.columns = columns;
	this.query = query;
	$s.pop();
}
rg.query._QueryIntersect.PivotTableTransform.__name__ = ["rg","query","_QueryIntersect","PivotTableTransform"];
rg.query._QueryIntersect.PivotTableTransform.emptyCalc = function() {
	$s.push("rg.query._QueryIntersect.PivotTableTransform::emptyCalc");
	var $spos = $s.length;
	var $tmp = { min : Math.POSITIVE_INFINITY, max : Math.NEGATIVE_INFINITY, total : 0.0};
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.query._QueryIntersect.PivotTableTransform.prototype.columns = null;
rg.query._QueryIntersect.PivotTableTransform.prototype.query = null;
rg.query._QueryIntersect.PivotTableTransform.prototype.queryHasTimeProperty = function() {
	$s.push("rg.query._QueryIntersect.PivotTableTransform::queryHasTimeProperty");
	var $spos = $s.length;
	var $tmp = Iterators.any(this.query.properties.iterator(),function(v) {
		$s.push("rg.query._QueryIntersect.PivotTableTransform::queryHasTimeProperty@59");
		var $spos = $s.length;
		var $tmp = v.property == "#timestamp";
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.query._QueryIntersect.PivotTableTransform.prototype.timePropertyPosition = function() {
	$s.push("rg.query._QueryIntersect.PivotTableTransform::timePropertyPosition");
	var $spos = $s.length;
	var _g1 = 0, _g = this.query.properties.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(this.query.properties[i].property == "#timestamp") {
			$s.pop();
			return i;
		}
	}
	$s.pop();
	return -1;
	$s.pop();
}
rg.query._QueryIntersect.PivotTableTransform.prototype.transform = function(src) {
	$s.push("rg.query._QueryIntersect.PivotTableTransform::transform");
	var $spos = $s.length;
	var data = { column_headers : [], row_headers : [], columns : [], rows : [], calc : rg.query._QueryIntersect.PivotTableTransform.emptyCalc()}, temp, values;
	if(this.queryHasTimeProperty()) {
		var pos = this.timePropertyPosition(), properties = this.query.properties.slice(0,pos).map(function(d,i) {
			$s.push("rg.query._QueryIntersect.PivotTableTransform::transform@93");
			var $spos = $s.length;
			var $tmp = d.property;
			$s.pop();
			return $tmp;
			$s.pop();
		}).concat(["#" + this.query.time.periodicity]).concat(this.query.properties.slice(pos).map(function(d,i) {
			$s.push("rg.query._QueryIntersect.PivotTableTransform::transform@95");
			var $spos = $s.length;
			var $tmp = d.property;
			$s.pop();
			return $tmp;
			$s.pop();
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
			$s.push("rg.query._QueryIntersect.PivotTableTransform::transform@124");
			var $spos = $s.length;
			var $tmp = d.property;
			$s.pop();
			return $tmp;
			$s.pop();
		});
		data.row_headers = this.query.properties.slice(this.columns).map(function(d,i) {
			$s.push("rg.query._QueryIntersect.PivotTableTransform::transform@125");
			var $spos = $s.length;
			var $tmp = d.property;
			$s.pop();
			return $tmp;
			$s.pop();
		});
		temp = Objects.flatten(src,this.query.properties.length);
		values = temp.map(function(d,i) {
			$s.push("rg.query._QueryIntersect.PivotTableTransform::transform@127");
			var $spos = $s.length;
			var $tmp = { fields : d.fields, value : d.value.data.length > 0?d.value.data[0][1]:0};
			$s.pop();
			return $tmp;
			$s.pop();
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
	$s.pop();
	return data;
	$s.pop();
}
rg.query._QueryIntersect.PivotTableTransform.prototype.orderRows = function(a,b) {
	$s.push("rg.query._QueryIntersect.PivotTableTransform::orderRows");
	var $spos = $s.length;
	var $tmp = Arrays.compare(a.values,b.values);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.query._QueryIntersect.PivotTableTransform.prototype.orderColumns = function(a,b) {
	$s.push("rg.query._QueryIntersect.PivotTableTransform::orderColumns");
	var $spos = $s.length;
	var $tmp = Arrays.compare(a.values,b.values);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.query._QueryIntersect.PivotTableTransform.prototype.__class__ = rg.query._QueryIntersect.PivotTableTransform;
thx.js.Timer = function() { }
thx.js.Timer.__name__ = ["thx","js","Timer"];
thx.js.Timer.timer = function(f,delay) {
	$s.push("thx.js.Timer::timer");
	var $spos = $s.length;
	if(delay == null) delay = 0.0;
	var now = Date.now().getTime(), found = false, t0, t1 = thx.js.Timer.queue;
	if(!Math.isFinite(delay)) {
		$s.pop();
		return;
	}
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
	$s.pop();
}
thx.js.Timer.step = function() {
	$s.push("thx.js.Timer::step");
	var $spos = $s.length;
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
	$s.pop();
}
thx.js.Timer.flush = function() {
	$s.push("thx.js.Timer::flush");
	var $spos = $s.length;
	var elapsed, now = Date.now().getTime(), t1 = thx.js.Timer.queue;
	while(null != t1) {
		elapsed = now - t1.then;
		if(t1.delay == 0) t1.flush = t1.f(elapsed);
		t1 = t1.next;
	}
	thx.js.Timer._flush();
	$s.pop();
}
thx.js.Timer._flush = function() {
	$s.push("thx.js.Timer::_flush");
	var $spos = $s.length;
	var t0 = null, t1 = thx.js.Timer.queue, then = Math.POSITIVE_INFINITY;
	while(null != t1) if(t1.flush) t1 = null != t0?t0.next = t1.next:thx.js.Timer.queue = t1.next; else {
		then = Math.min(then,t1.then + t1.delay);
		t1 = (t0 = t1).next;
	}
	$s.pop();
	return then;
	$s.pop();
}
thx.js.Timer.prototype.__class__ = thx.js.Timer;
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
thx.js.AccessTweenAttribute.prototype.stringNodef = function(f) {
	$s.push("thx.js.AccessTweenAttribute::stringNodef");
	var $spos = $s.length;
	var $tmp = this.stringTweenNodef(this.transitionStringTweenf(f));
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessTweenAttribute.prototype.string = function(value) {
	$s.push("thx.js.AccessTweenAttribute::string");
	var $spos = $s.length;
	var $tmp = this.stringTweenNodef(this.transitionStringTween(value));
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessTweenAttribute.prototype.stringTweenNodef = function(tween) {
	$s.push("thx.js.AccessTweenAttribute::stringTweenNodef");
	var $spos = $s.length;
	var name = this.name;
	var attrTween = function(d,i) {
		$s.push("thx.js.AccessTweenAttribute::stringTweenNodef@37");
		var $spos = $s.length;
		var f = tween(d,i,d.getAttribute(name));
		var $tmp = function(t) {
			$s.push("thx.js.AccessTweenAttribute::stringTweenNodef@37@40");
			var $spos = $s.length;
			d.setAttribute(name,f(t));
			$s.pop();
		};
		$s.pop();
		return $tmp;
		$s.pop();
	};
	var attrTweenNS = function(d,i) {
		$s.push("thx.js.AccessTweenAttribute::stringTweenNodef@45");
		var $spos = $s.length;
		var f = tween(d,i,d.getAttributeNS(name.space,name.local));
		var $tmp = function(t) {
			$s.push("thx.js.AccessTweenAttribute::stringTweenNodef@45@48");
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
thx.js.AccessTweenAttribute.prototype.floatNodef = function(f) {
	$s.push("thx.js.AccessTweenAttribute::floatNodef");
	var $spos = $s.length;
	var $tmp = this.floatTweenNodef(this.transitionFloatTweenf(f));
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessTweenAttribute.prototype["float"] = function(value) {
	$s.push("thx.js.AccessTweenAttribute::float");
	var $spos = $s.length;
	var $tmp = this.floatTweenNodef(this.transitionFloatTween(value));
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessTweenAttribute.prototype.floatTweenNodef = function(tween) {
	$s.push("thx.js.AccessTweenAttribute::floatTweenNodef");
	var $spos = $s.length;
	var name = this.name;
	var attrTween = function(d,i) {
		$s.push("thx.js.AccessTweenAttribute::floatTweenNodef@71");
		var $spos = $s.length;
		var f = tween(d,i,Std.parseFloat(d.getAttribute(name)));
		var $tmp = function(t) {
			$s.push("thx.js.AccessTweenAttribute::floatTweenNodef@71@74");
			var $spos = $s.length;
			d.setAttribute(name,"" + f(t));
			$s.pop();
		};
		$s.pop();
		return $tmp;
		$s.pop();
	};
	var attrTweenNS = function(d,i) {
		$s.push("thx.js.AccessTweenAttribute::floatTweenNodef@79");
		var $spos = $s.length;
		var f = tween(d,i,Std.parseFloat(d.getAttributeNS(name.space,name.local)));
		var $tmp = function(t) {
			$s.push("thx.js.AccessTweenAttribute::floatTweenNodef@79@82");
			var $spos = $s.length;
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
	var $tmp = this.stringTweenNodef(this.transitionStringTweenf(function(n,i) {
		$s.push("thx.js.AccessDataTweenAttribute::stringf@101");
		var $spos = $s.length;
		var $tmp = f(Reflect.field(n,"__data__"),i);
		$s.pop();
		return $tmp;
		$s.pop();
	}));
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessDataTweenAttribute.prototype.floatf = function(f) {
	$s.push("thx.js.AccessDataTweenAttribute::floatf");
	var $spos = $s.length;
	var $tmp = this.floatTweenNodef(this.transitionFloatTweenf(function(n,i) {
		$s.push("thx.js.AccessDataTweenAttribute::floatf@106");
		var $spos = $s.length;
		var $tmp = f(Reflect.field(n,"__data__"),i);
		$s.pop();
		return $tmp;
		$s.pop();
	}));
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessDataTweenAttribute.prototype.stringTweenf = function(tween) {
	$s.push("thx.js.AccessDataTweenAttribute::stringTweenf");
	var $spos = $s.length;
	var name = this.name;
	var attrTween = function(n,i) {
		$s.push("thx.js.AccessDataTweenAttribute::stringTweenf@113");
		var $spos = $s.length;
		var f = tween(Reflect.field(n,"__data__"),i,n.getAttribute(name));
		var $tmp = function(t) {
			$s.push("thx.js.AccessDataTweenAttribute::stringTweenf@113@116");
			var $spos = $s.length;
			n.setAttribute(name,f(t));
			$s.pop();
		};
		$s.pop();
		return $tmp;
		$s.pop();
	};
	var attrTweenNS = function(n,i) {
		$s.push("thx.js.AccessDataTweenAttribute::stringTweenf@121");
		var $spos = $s.length;
		var f = tween(Reflect.field(n,"__data__"),i,n.getAttributeNS(name.space,name.local));
		var $tmp = function(t) {
			$s.push("thx.js.AccessDataTweenAttribute::stringTweenf@121@124");
			var $spos = $s.length;
			n.setAttributeNS(name.space,name.local,f(t));
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
thx.js.AccessDataTweenAttribute.prototype.floatTweenf = function(tween) {
	$s.push("thx.js.AccessDataTweenAttribute::floatTweenf");
	var $spos = $s.length;
	var name = this.name;
	var attrTween = function(n,i) {
		$s.push("thx.js.AccessDataTweenAttribute::floatTweenf@137");
		var $spos = $s.length;
		var f = tween(Reflect.field(n,"__data__"),i,Std.parseFloat(n.getAttribute(name)));
		var $tmp = function(t) {
			$s.push("thx.js.AccessDataTweenAttribute::floatTweenf@137@140");
			var $spos = $s.length;
			n.setAttribute(name,"" + f(t));
			$s.pop();
		};
		$s.pop();
		return $tmp;
		$s.pop();
	};
	var attrTweenNS = function(n,i) {
		$s.push("thx.js.AccessDataTweenAttribute::floatTweenf@145");
		var $spos = $s.length;
		var f = tween(Reflect.field(n,"__data__"),i,Std.parseFloat(n.getAttributeNS(name.space,name.local)));
		var $tmp = function(t) {
			$s.push("thx.js.AccessDataTweenAttribute::floatTweenf@145@148");
			var $spos = $s.length;
			n.setAttributeNS(name.space,name.local,"" + f(t));
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
thx.js.AccessDataTweenAttribute.prototype.__class__ = thx.js.AccessDataTweenAttribute;
thx.error.NullArgument = function(argumentName,message,posInfo) {
	if( argumentName === $_ ) return;
	$s.push("thx.error.NullArgument::new");
	var $spos = $s.length;
	if(null == message) message = "invalid null or empty argument '{0}' for method {1}.{2}()";
	thx.error.Error.call(this,message,[argumentName,posInfo.className,posInfo.methodName],posInfo,{ fileName : "NullArgument.hx", lineNumber : 16, className : "thx.error.NullArgument", methodName : "new"});
	$s.pop();
}
thx.error.NullArgument.__name__ = ["thx","error","NullArgument"];
thx.error.NullArgument.__super__ = thx.error.Error;
for(var k in thx.error.Error.prototype ) thx.error.NullArgument.prototype[k] = thx.error.Error.prototype[k];
thx.error.NullArgument.prototype.__class__ = thx.error.NullArgument;
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
rg.layout.Orientation = { __ename__ : ["rg","layout","Orientation"], __constructs__ : ["Vertical","Horizontal"] }
rg.layout.Orientation.Vertical = ["Vertical",0];
rg.layout.Orientation.Vertical.toString = $estr;
rg.layout.Orientation.Vertical.__enum__ = rg.layout.Orientation;
rg.layout.Orientation.Horizontal = ["Horizontal",1];
rg.layout.Orientation.Horizontal.toString = $estr;
rg.layout.Orientation.Horizontal.__enum__ = rg.layout.Orientation;
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
thx.color.Colors = function() { }
thx.color.Colors.__name__ = ["thx","color","Colors"];
thx.color.Colors.interpolatef = function(a,b,equation) {
	$s.push("thx.color.Colors::interpolatef");
	var $spos = $s.length;
	var ca = thx.color.Colors.parse(a);
	var cb = thx.color.Colors.parse(b);
	var f = thx.color.Rgb.interpolatef(ca,cb,equation);
	var $tmp = function(v) {
		$s.push("thx.color.Colors::interpolatef@19");
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
				$s.pop();
				return null;
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
		$s.push("thx.color.Colors::parse@64");
		var $spos = $s.length;
		var $tmp = d + d;
		$s.pop();
		return $tmp;
		$s.pop();
	}).join(""); else if(color.length != 6) {
		$s.pop();
		return null;
	}
	var $tmp = thx.color.Rgb.fromInt(Std.parseInt("0x" + color));
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.color.Colors._c = function(s) {
	$s.push("thx.color.Colors::_c");
	var $spos = $s.length;
	var $tmp = Std.parseInt(StringTools.trim(s));
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
rg.query.QueryPropertiesCount = function(executor,path,event,properties) {
	if( executor === $_ ) return;
	$s.push("rg.query.QueryPropertiesCount::new");
	var $spos = $s.length;
	rg.query.QueryEvent.call(this,executor,path,event);
	this.properties = properties;
	$s.pop();
}
rg.query.QueryPropertiesCount.__name__ = ["rg","query","QueryPropertiesCount"];
rg.query.QueryPropertiesCount.__super__ = rg.query.QueryEvent;
for(var k in rg.query.QueryEvent.prototype ) rg.query.QueryPropertiesCount.prototype[k] = rg.query.QueryEvent.prototype[k];
rg.query.QueryPropertiesCount.prototype.properties = null;
rg.query.QueryPropertiesCount.prototype.filter = function(value,count) {
	$s.push("rg.query.QueryPropertiesCount::filter");
	var $spos = $s.length;
	$s.pop();
	return true;
	$s.pop();
}
rg.query.QueryPropertiesCount.prototype.order = function(values) {
	$s.push("rg.query.QueryPropertiesCount::order");
	var $spos = $s.length;
	{
		values.sort(null == function(a,b) {
			$s.push("rg.query.QueryPropertiesCount::order@23");
			var $spos = $s.length;
			var $tmp = Floats.compare(b.value,a.value);
			$s.pop();
			return $tmp;
			$s.pop();
		}?Dynamics.compare:function(a,b) {
			$s.push("rg.query.QueryPropertiesCount::order@23");
			var $spos = $s.length;
			var $tmp = Floats.compare(b.value,a.value);
			$s.pop();
			return $tmp;
			$s.pop();
		});
		values;
	}
	$s.pop();
	return values;
	$s.pop();
}
rg.query.QueryPropertiesCount.prototype.load = function() {
	$s.push("rg.query.QueryPropertiesCount::load");
	var $spos = $s.length;
	if(null == this.properties) {
		var loader = new rg.query.QueryPropertyNames(this.executor,this.path,this.event), me = this;
		loader.onData.add(function(d) {
			$s.push("rg.query.QueryPropertiesCount::load@39");
			var $spos = $s.length;
			me.properties = d.map(function(d1,i) {
				$s.push("rg.query.QueryPropertiesCount::load@39@40");
				var $spos = $s.length;
				var $tmp = Strings.ltrim(d1,".");
				$s.pop();
				return $tmp;
				$s.pop();
			});
			loader.close();
			me.load();
			$s.pop();
		});
		loader.load();
	} else rg.query.QueryEvent.prototype.load.call(this);
	$s.pop();
}
rg.query.QueryPropertiesCount.prototype.executeLoad = function(success,error) {
	$s.push("rg.query.QueryPropertiesCount::executeLoad");
	var $spos = $s.length;
	var count = 0, total = this.properties.length, result = [], totalcount = 0;
	var _success = function(p,v) {
		$s.push("rg.query.QueryPropertiesCount::executeLoad@57");
		var $spos = $s.length;
		result.push({ label : p, value : v});
		if(++count == total) success(result);
		$s.pop();
	};
	var query = this.queryObject();
	var _g = 0, _g1 = this.properties;
	while(_g < _g1.length) {
		var property = _g1[_g];
		++_g;
		query.property = this.event + "." + property;
		this.executor.propertyCount(this.path,query,(function(f,a1) {
			$s.push("rg.query.QueryPropertiesCount::executeLoad@70");
			var $spos = $s.length;
			var $tmp = function(a2) {
				$s.push("rg.query.QueryPropertiesCount::executeLoad@70@70");
				var $spos = $s.length;
				var $tmp = f(a1,a2);
				$s.pop();
				return $tmp;
				$s.pop();
			};
			$s.pop();
			return $tmp;
			$s.pop();
		})(_success,property),error);
	}
	$s.pop();
}
rg.query.QueryPropertiesCount.prototype.__class__ = rg.query.QueryPropertiesCount;
rg.svg.SvgLineChart = function(panel,x,y) {
	if( panel === $_ ) return;
	$s.push("rg.svg.SvgLineChart::new");
	var $spos = $s.length;
	this._cpid = "linechart_clip_path_" + ++rg.svg.SvgLineChart._pathid;
	this._x = x;
	this._y = y;
	this._ease = thx.math.Ease.mode(thx.math.EaseMode.EaseOut,thx.math.Equations.exponential);
	this._duration = 1500;
	this._created = 0;
	rg.svg.SvgLayer.call(this,panel);
	this.redraw();
	$s.pop();
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
	$s.push("rg.svg.SvgLineChart::tooltip");
	var $spos = $s.length;
	var d = Date.fromTime(x);
	var $tmp = label + ": " + Ints.format(y);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgLineChart.prototype.init = function() {
	$s.push("rg.svg.SvgLineChart::init");
	var $spos = $s.length;
	this.svg.classed().add("line-chart").append("svg:clipPath").attr("id").string(this._cpid).append("svg:rect").attr("x")["float"](0).attr("y")["float"](-50).attr("width")["float"](0).attr("height")["float"](0);
	this.svg.attr("clip-path").string("url(#" + this._cpid + ")");
	$s.pop();
}
rg.svg.SvgLineChart.prototype.redraw = function() {
	$s.push("rg.svg.SvgLineChart::redraw");
	var $spos = $s.length;
	if(null == this._data || this._data.length == 0) {
		$s.pop();
		return;
	}
	this._timedelta = Date.now().getTime();
	var layer = this.svg.selectAll("g.group").attr("transform").string("translate(0,0)").data(this._data,function(d,i) {
		$s.push("rg.svg.SvgLineChart::redraw@74");
		var $spos = $s.length;
		var $tmp = d.label;
		$s.pop();
		return $tmp;
		$s.pop();
	});
	layer.update().select("path.line").transition().ease(this._ease).duration(null,this._duration).attr("d").stringf($closure(this,"_path"));
	var g = layer.enter().append("svg:g").attr("class").string("group").onNode("mouseover.animation",$closure(this,"_highlight"),true).onNode("mouseout.animation",$closure(this,"_backtonormal"),true).on("mousemove.tooltip",$closure(this,"_showtooltip"),true).on("mouseout.tooltip",$closure(this,"_hidetooltip"),true);
	g.append("svg:path").attr("class").string("line").attr("d").stringf($closure(this,"_path0")).style("stroke").string("#000").style("stroke-width")["float"](5).style("opacity")["float"](0.0).attr("transform").string("translate(1,1)").eachNode($closure(this,"_popinshadow"));
	g.append("svg:path").attr("class").string("line").attr("d").stringf($closure(this,"_path0")).style("stroke").string("#000").style("stroke-width")["float"](3).style("opacity")["float"](0.0).attr("transform").string("translate(1,1)").eachNode($closure(this,"_popinshadow"));
	g.append("svg:path").attr("class").string("line").attr("d").stringf($closure(this,"_path0")).attr("class").stringf(function(d,i) {
		$s.push("rg.svg.SvgLineChart::redraw@111");
		var $spos = $s.length;
		var $tmp = "item-" + i;
		$s.pop();
		return $tmp;
		$s.pop();
	}).style("opacity")["float"](0).eachNode($closure(this,"_popin"));
	layer.exit().remove();
	$s.pop();
}
rg.svg.SvgLineChart.prototype.resize = function() {
	$s.push("rg.svg.SvgLineChart::resize");
	var $spos = $s.length;
	this._x.range([0.0,this.width]);
	this._y.range([0.0,this.height]);
	this.svg.select("#" + this._cpid + " rect").attr("width")["float"](this.width).attr("height")["float"](this.height + 100);
	$s.pop();
}
rg.svg.SvgLineChart.prototype.lineInterpolator = function(interpolator) {
	$s.push("rg.svg.SvgLineChart::lineInterpolator");
	var $spos = $s.length;
	this._interpolator = interpolator;
	$s.pop();
}
rg.svg.SvgLineChart.prototype.getData = function() {
	$s.push("rg.svg.SvgLineChart::getData");
	var $spos = $s.length;
	var $tmp = this._data;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgLineChart.prototype.data = function(d) {
	$s.push("rg.svg.SvgLineChart::data");
	var $spos = $s.length;
	this._data = d;
	this.redraw();
	$s.pop();
}
rg.svg.SvgLineChart.prototype._path0 = function(d,i) {
	$s.push("rg.svg.SvgLineChart::_path0");
	var $spos = $s.length;
	var x = this._x, y = this._y;
	var line = new thx.svg.Line(function(d1,i1) {
		$s.push("rg.svg.SvgLineChart::_path0@145");
		var $spos = $s.length;
		var $tmp = x.scale(d1.x);
		$s.pop();
		return $tmp;
		$s.pop();
	},function(d1,i1) {
		$s.push("rg.svg.SvgLineChart::_path0@146");
		var $spos = $s.length;
		var $tmp = y.scale(0);
		$s.pop();
		return $tmp;
		$s.pop();
	});
	if(null != this._interpolator) line.interpolator(this._interpolator);
	var $tmp = line.shape(d.values);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgLineChart.prototype._path = function(d,i) {
	$s.push("rg.svg.SvgLineChart::_path");
	var $spos = $s.length;
	var x = this._x, y = this._y;
	var line = new thx.svg.Line(function(d1,i1) {
		$s.push("rg.svg.SvgLineChart::_path@159");
		var $spos = $s.length;
		var $tmp = x.scale(d1.x);
		$s.pop();
		return $tmp;
		$s.pop();
	},function(d1,i1) {
		$s.push("rg.svg.SvgLineChart::_path@160");
		var $spos = $s.length;
		var $tmp = y.scale(d1.y);
		$s.pop();
		return $tmp;
		$s.pop();
	});
	if(null != this._interpolator) line.interpolator(this._interpolator);
	var $tmp = line.shape(d.values);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.svg.SvgLineChart.prototype.updatex = function() {
	$s.push("rg.svg.SvgLineChart::updatex");
	var $spos = $s.length;
	var s = this._x.scale(Date.now().getTime() - this._timedelta + this._x.getDomain()[0]);
	var layer = this.svg.selectAll("g.group").attr("transform").string("translate(-" + s + ",0)");
	$s.pop();
}
rg.svg.SvgLineChart.prototype._lineEffect = null;
rg.svg.SvgLineChart.prototype.setLineEffect = function(name) {
	$s.push("rg.svg.SvgLineChart::setLineEffect");
	var $spos = $s.length;
	this._lineEffect = name;
	$s.pop();
}
rg.svg.SvgLineChart.prototype._timedelta = null;
rg.svg.SvgLineChart.prototype._highlight = function(d,i) {
	$s.push("rg.svg.SvgLineChart::_highlight");
	var $spos = $s.length;
	thx.js.Dom.selectNode(d).select("path").classed().add("selected");
	$s.pop();
}
rg.svg.SvgLineChart.prototype._backtonormal = function(d,i) {
	$s.push("rg.svg.SvgLineChart::_backtonormal");
	var $spos = $s.length;
	thx.js.Dom.selectNode(d).select("path").classed().remove("selected");
	$s.pop();
}
rg.svg.SvgLineChart.prototype._showtooltip = function(d,_) {
	$s.push("rg.svg.SvgLineChart::_showtooltip");
	var $spos = $s.length;
	var mouse = thx.js.Svg.mouse(this.svg.node());
	var v = Arrays.nearest(d.values,this._x.invert(mouse[0]),function(d1) {
		$s.push("rg.svg.SvgLineChart::_showtooltip@197");
		var $spos = $s.length;
		var $tmp = d1.x;
		$s.pop();
		return $tmp;
		$s.pop();
	});
	rg.chart.ToolTip.display(this.tooltip(d.label,v.x,v.y));
	$s.pop();
}
rg.svg.SvgLineChart.prototype._hidetooltip = function(d,i) {
	$s.push("rg.svg.SvgLineChart::_hidetooltip");
	var $spos = $s.length;
	rg.chart.ToolTip.display(null);
	$s.pop();
}
rg.svg.SvgLineChart.prototype._popinshadow = function(n,i) {
	$s.push("rg.svg.SvgLineChart::_popinshadow");
	var $spos = $s.length;
	var path = thx.js.Dom.selectNodeData(n);
	if(null != this._lineEffect) path.attr("filter").string("url(#" + this._lineEffect + ")");
	path.transition().ease(this._ease).duration(null,this._duration).delay(null,150 * (i - this._created)).style("opacity")["float"](0.25).attr("d").stringf($closure(this,"_path"));
	$s.pop();
}
rg.svg.SvgLineChart.prototype._popin = function(n,i) {
	$s.push("rg.svg.SvgLineChart::_popin");
	var $spos = $s.length;
	var path = thx.js.Dom.selectNodeData(n);
	if(null != this._lineEffect) path.attr("filter").string("url(#" + this._lineEffect + ")");
	path.transition().ease(this._ease).duration(null,this._duration).delay(null,150 * (i - this._created)).style("opacity")["float"](1.0).attr("d").stringf($closure(this,"_path"));
	if(i == this._data.length - 1) this._created = i;
	$s.pop();
}
rg.svg.SvgLineChart.prototype.__class__ = rg.svg.SvgLineChart;
rg.util.Periodicity = function() { }
rg.util.Periodicity.__name__ = ["rg","util","Periodicity"];
rg.util.Periodicity.isValid = function(v) {
	$s.push("rg.util.Periodicity::isValid");
	var $spos = $s.length;
	var $tmp = Arrays.exists(rg.util.Periodicity.validPeriods,v);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.util.Periodicity.calculateBetween = function(a,b,disc) {
	$s.push("rg.util.Periodicity::calculateBetween");
	var $spos = $s.length;
	if(disc == null) disc = 2;
	if(null == a || null == b) {
		$s.pop();
		return "eternity";
	}
	var delta = Math.abs(b.getTime() - a.getTime());
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
rg.util.Periodicity.range = function(start,end,periodicity) {
	$s.push("rg.util.Periodicity::range");
	var $spos = $s.length;
	var step = 1000;
	start = Dates.snap(start,periodicity);
	end = Dates.snap(end,periodicity);
	switch(periodicity) {
	case "eternity":
		var $tmp = [0.0];
		$s.pop();
		return $tmp;
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
		$s.pop();
		return result;
	case "year":
		var $tmp = Ints.range(Date.fromTime(start).getFullYear(),Date.fromTime(end).getFullYear(),1).map(function(d,i) {
			$s.push("rg.util.Periodicity::range@78");
			var $spos = $s.length;
			var $tmp = new Date(d,0,1,0,0,0).getTime();
			$s.pop();
			return $tmp;
			$s.pop();
		});
		$s.pop();
		return $tmp;
	}
	var $tmp = Floats.range(start,end + step,step);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.util.Periodicity.next = function(periodicity,date) {
	$s.push("rg.util.Periodicity::next");
	var $spos = $s.length;
	if(null == date) date = Date.now().getTime();
	var $tmp = (function($this) {
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
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.util.Periodicity.prev = function(periodicity,date) {
	$s.push("rg.util.Periodicity::prev");
	var $spos = $s.length;
	if(null == date) date = Date.now().getTime();
	var $tmp = (function($this) {
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
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.util.Periodicity.minForPeriodicityInSeries = function(arr) {
	$s.push("rg.util.Periodicity::minForPeriodicityInSeries");
	var $spos = $s.length;
	var $tmp = Arrays.floatMin(arr,function(d) {
		$s.push("rg.util.Periodicity::minForPeriodicityInSeries@143");
		var $spos = $s.length;
		var $tmp = Arrays.floatMin(d.data,function(d1) {
			$s.push("rg.util.Periodicity::minForPeriodicityInSeries@143@144");
			var $spos = $s.length;
			var $tmp = d1[1];
			$s.pop();
			return $tmp;
			$s.pop();
		});
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.util.Periodicity.maxForPeriodicityInSeries = function(arr) {
	$s.push("rg.util.Periodicity::maxForPeriodicityInSeries");
	var $spos = $s.length;
	var $tmp = Arrays.floatMax(arr,function(d) {
		$s.push("rg.util.Periodicity::maxForPeriodicityInSeries@150");
		var $spos = $s.length;
		var $tmp = Arrays.floatMax(d.data,function(d1) {
			$s.push("rg.util.Periodicity::maxForPeriodicityInSeries@150@151");
			var $spos = $s.length;
			var $tmp = d1[1];
			$s.pop();
			return $tmp;
			$s.pop();
		});
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.util.Periodicity.minForPeriodicityInSeriesObject = function(arr,periodicity) {
	$s.push("rg.util.Periodicity::minForPeriodicityInSeriesObject");
	var $spos = $s.length;
	var $tmp = Arrays.floatMin(arr,function(d) {
		$s.push("rg.util.Periodicity::minForPeriodicityInSeriesObject@157");
		var $spos = $s.length;
		var o = Reflect.field(d,periodicity);
		var $tmp = Arrays.floatMin(Reflect.fields(o),function(d1) {
			$s.push("rg.util.Periodicity::minForPeriodicityInSeriesObject@157@159");
			var $spos = $s.length;
			var $tmp = Std.parseFloat(d1);
			$s.pop();
			return $tmp;
			$s.pop();
		});
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.util.Periodicity.maxForPeriodicityInSeriesObject = function(arr,periodicity) {
	$s.push("rg.util.Periodicity::maxForPeriodicityInSeriesObject");
	var $spos = $s.length;
	var $tmp = Arrays.floatMax(arr,function(d) {
		$s.push("rg.util.Periodicity::maxForPeriodicityInSeriesObject@165");
		var $spos = $s.length;
		var o = Reflect.field(d,periodicity);
		var $tmp = Arrays.floatMax(Reflect.fields(o),function(d1) {
			$s.push("rg.util.Periodicity::maxForPeriodicityInSeriesObject@165@167");
			var $spos = $s.length;
			var $tmp = Std.parseFloat(d1);
			$s.pop();
			return $tmp;
			$s.pop();
		});
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.util.Periodicity.formatf = function(periodicity) {
	$s.push("rg.util.Periodicity::formatf");
	var $spos = $s.length;
	var $tmp = (function($this) {
		var $r;
		switch(periodicity) {
		case "eternity":
			$r = function(_) {
				$s.push("rg.util.Periodicity::formatf@175");
				var $spos = $s.length;
				$s.pop();
				return "all time";
				$s.pop();
			};
			break;
		case "minute":case "hour":
			$r = function(v) {
				$s.push("rg.util.Periodicity::formatf@176");
				var $spos = $s.length;
				var $tmp = thx.culture.FormatDate.timeShort(Date.fromTime(v));
				$s.pop();
				return $tmp;
				$s.pop();
			};
			break;
		case "day":case "week":
			$r = function(v) {
				$s.push("rg.util.Periodicity::formatf@177");
				var $spos = $s.length;
				var $tmp = thx.culture.FormatDate.dateShort(Date.fromTime(v));
				$s.pop();
				return $tmp;
				$s.pop();
			};
			break;
		case "month":
			$r = function(v) {
				$s.push("rg.util.Periodicity::formatf@178");
				var $spos = $s.length;
				var $tmp = thx.culture.FormatDate.yearMonth(Date.fromTime(v));
				$s.pop();
				return $tmp;
				$s.pop();
			};
			break;
		case "year":
			$r = function(v) {
				$s.push("rg.util.Periodicity::formatf@179");
				var $spos = $s.length;
				var $tmp = thx.culture.FormatDate.year(Date.fromTime(v));
				$s.pop();
				return $tmp;
				$s.pop();
			};
			break;
		}
		return $r;
	}(this));
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.util.Periodicity.format = function(periodicity,v) {
	$s.push("rg.util.Periodicity::format");
	var $spos = $s.length;
	switch(periodicity) {
	case "eternity":
		$s.pop();
		return "all time";
	case "minute":case "hour":
		var $tmp = thx.culture.FormatDate.timeShort(Date.fromTime(v));
		$s.pop();
		return $tmp;
	case "day":case "week":
		var $tmp = thx.culture.FormatDate.dateShort(Date.fromTime(v));
		$s.pop();
		return $tmp;
	case "month":
		var $tmp = thx.culture.FormatDate.yearMonth(Date.fromTime(v));
		$s.pop();
		return $tmp;
	case "year":
		var $tmp = thx.culture.FormatDate.year(Date.fromTime(v));
		$s.pop();
		return $tmp;
	default:
		var $tmp = periodicity + ": " + v;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
rg.util.Periodicity.prototype.__class__ = rg.util.Periodicity;
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
		$s.push("thx.svg.Area::pointArray@62");
		var $spos = $s.length;
		var $tmp = d[0];
		$s.pop();
		return $tmp;
		$s.pop();
	},function(d,_) {
		$s.push("thx.svg.Area::pointArray@62");
		var $spos = $s.length;
		var $tmp = d[1];
		$s.pop();
		return $tmp;
		$s.pop();
	},function(d,_) {
		$s.push("thx.svg.Area::pointArray@62");
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
		$s.push("thx.svg.Area::pointObject@67");
		var $spos = $s.length;
		var $tmp = d.x;
		$s.pop();
		return $tmp;
		$s.pop();
	},function(d,_) {
		$s.push("thx.svg.Area::pointObject@67");
		var $spos = $s.length;
		var $tmp = d.y0;
		$s.pop();
		return $tmp;
		$s.pop();
	},function(d,_) {
		$s.push("thx.svg.Area::pointObject@67");
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
		$s.push("thx.svg.Area::pointArray2@72");
		var $spos = $s.length;
		var $tmp = d[0];
		$s.pop();
		return $tmp;
		$s.pop();
	},function(_,_1) {
		$s.push("thx.svg.Area::pointArray2@72");
		var $spos = $s.length;
		$s.pop();
		return 0.0;
		$s.pop();
	},function(d,_) {
		$s.push("thx.svg.Area::pointArray2@72");
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
		$s.push("thx.svg.Area::pointObjectXY@77");
		var $spos = $s.length;
		var $tmp = d.x;
		$s.pop();
		return $tmp;
		$s.pop();
	},function(_,_1) {
		$s.push("thx.svg.Area::pointObjectXY@77");
		var $spos = $s.length;
		$s.pop();
		return 0.0;
		$s.pop();
	},function(d,_) {
		$s.push("thx.svg.Area::pointObjectXY@77");
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
$_ = {}
js.Boot.__res = {}
$s = [];
$e = [];
js.Boot.__init();
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
		$s.push("thx.svg.Area::y1");
		var $spos = $s.length;
		var $tmp = isFinite(i);
		$s.pop();
		return $tmp;
		$s.pop();
	};
	Math.isNaN = function(i) {
		$s.push("thx.svg.Area::y1");
		var $spos = $s.length;
		var $tmp = isNaN(i);
		$s.pop();
		return $tmp;
		$s.pop();
	};
}
{
	var d = Date;
	d.now = function() {
		$s.push("thx.svg.Area::y1");
		var $spos = $s.length;
		var $tmp = new Date();
		$s.pop();
		return $tmp;
		$s.pop();
	};
	d.fromTime = function(t) {
		$s.push("thx.svg.Area::y1");
		var $spos = $s.length;
		var d1 = new Date();
		d1["setTime"](t);
		$s.pop();
		return d1;
		$s.pop();
	};
	d.fromString = function(s) {
		$s.push("thx.svg.Area::y1");
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
		$s.push("thx.svg.Area::y1");
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
	$s.push("thx.svg.Area::y1");
	var $spos = $s.length;
	var g = new thx.js.Group([js.Lib.document]), gs = thx.js.Selection.create([g]);
	g.parentNode = gs.parentNode = js.Lib.document.documentElement;
	$s.pop();
	return gs;
	$s.pop();
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
	$s.push("thx.svg.Area::y1");
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
rg.html.HtmlPivotTable.defaultStartColor = new thx.color.Hsl(210,1,1);
rg.html.HtmlPivotTable.defaultEndColor = new thx.color.Hsl(210,1,0.5);
Ints._reparse = new EReg("^([+-])?\\d+$","");
rg.svg.SvgSpace._filterid = 0;
thx.js.AccessStyle.refloat = new EReg("(\\d+(?:\\.\\d+)?)","");
Floats._reparse = new EReg("^(\\+|-)?\\d+(\\.\\d+)?(e-?\\d+)?$","");
rg.svg.SvgScaleTick.defaultTickLength = 6;
thx.date.DateParser.daynumeric = "0?[1-9]|[1-2][0-9]|3[0-1]";
thx.date.DateParser.months = thx.cultures.EnUS.getCulture().date.months.slice(0,-1).map(function(d,i) {
	$s.push("thx.svg.Area::y1");
	var $spos = $s.length;
	var $tmp = d.toLowerCase();
	$s.pop();
	return $tmp;
	$s.pop();
});
thx.date.DateParser.shortmonths = thx.cultures.EnUS.getCulture().date.abbrMonths.slice(0,-1).map(function(d,i) {
	$s.push("thx.svg.Area::y1");
	var $spos = $s.length;
	var $tmp = d.toLowerCase();
	$s.pop();
	return $tmp;
	$s.pop();
});
thx.date.DateParser.days = thx.cultures.EnUS.getCulture().date.days.map(function(d,i) {
	$s.push("thx.svg.Area::y1");
	var $spos = $s.length;
	var $tmp = d.toLowerCase();
	$s.pop();
	return $tmp;
	$s.pop();
});
thx.date.DateParser.shortdays = thx.cultures.EnUS.getCulture().date.abbrDays.map(function(d,i) {
	$s.push("thx.svg.Area::y1");
	var $spos = $s.length;
	var $tmp = d.toLowerCase();
	$s.pop();
	return $tmp;
	$s.pop();
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
