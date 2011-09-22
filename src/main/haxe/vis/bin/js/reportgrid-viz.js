$estr = function() { return js.Boot.__string_rec(this,''); }
if(typeof rg=='undefined') rg = {}
if(!rg.view) rg.view = {}
if(!rg.view.svg) rg.view.svg = {}
if(!rg.view.svg.widget) rg.view.svg.widget = {}
rg.view.svg.widget.BalloonShape = function() { }
rg.view.svg.widget.BalloonShape.__name__ = ["rg","view","svg","widget","BalloonShape"];
rg.view.svg.widget.BalloonShape.shape = function(width,height,rc,rp,side,offset) {
	$s.push("rg.view.svg.widget.BalloonShape::shape");
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
rg.view.svg.widget.BalloonShape.prototype.__class__ = rg.view.svg.widget.BalloonShape;
if(!rg.data) rg.data = {}
if(!rg.data.source) rg.data.source = {}
if(!rg.data.source.rgquery) rg.data.source.rgquery = {}
rg.data.source.rgquery.QExp = { __ename__ : ["rg","data","source","rgquery","QExp"], __constructs__ : ["Time","Property","Event"] }
rg.data.source.rgquery.QExp.Time = function(periodicity) { var $x = ["Time",0,periodicity]; $x.__enum__ = rg.data.source.rgquery.QExp; $x.toString = $estr; return $x; }
rg.data.source.rgquery.QExp.Property = function(name,limit,descending) { var $x = ["Property",1,name,limit,descending]; $x.__enum__ = rg.data.source.rgquery.QExp; $x.toString = $estr; return $x; }
rg.data.source.rgquery.QExp.Event = ["Event",2];
rg.data.source.rgquery.QExp.Event.toString = $estr;
rg.data.source.rgquery.QExp.Event.__enum__ = rg.data.source.rgquery.QExp;
rg.data.source.rgquery.QCondition = { __ename__ : ["rg","data","source","rgquery","QCondition"], __constructs__ : ["Equality"] }
rg.data.source.rgquery.QCondition.Equality = function(property,v) { var $x = ["Equality",0,property,v]; $x.__enum__ = rg.data.source.rgquery.QCondition; $x.toString = $estr; return $x; }
rg.data.source.rgquery.QOperation = { __ename__ : ["rg","data","source","rgquery","QOperation"], __constructs__ : ["Count"] }
rg.data.source.rgquery.QOperation.Count = ["Count",0];
rg.data.source.rgquery.QOperation.Count.toString = $estr;
rg.data.source.rgquery.QOperation.Count.__enum__ = rg.data.source.rgquery.QOperation;
if(typeof thx=='undefined') thx = {}
if(!thx.collection) thx.collection = {}
thx.collection.Set = function(p) {
	if( p === $_ ) return;
	$s.push("thx.collection.Set::new");
	var $spos = $s.length;
	this._v = [];
	this.length = 0;
	$s.pop();
}
thx.collection.Set.__name__ = ["thx","collection","Set"];
thx.collection.Set.ofArray = function(arr) {
	$s.push("thx.collection.Set::ofArray");
	var $spos = $s.length;
	var set = new thx.collection.Set();
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
thx.collection.Set.prototype.length = null;
thx.collection.Set.prototype._v = null;
thx.collection.Set.prototype.add = function(v) {
	$s.push("thx.collection.Set::add");
	var $spos = $s.length;
	this._v.remove(v);
	this._v.push(v);
	this.length = this._v.length;
	$s.pop();
}
thx.collection.Set.prototype.remove = function(v) {
	$s.push("thx.collection.Set::remove");
	var $spos = $s.length;
	var t = this._v.remove(v);
	this.length = this._v.length;
	$s.pop();
	return t;
	$s.pop();
}
thx.collection.Set.prototype.exists = function(v) {
	$s.push("thx.collection.Set::exists");
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
thx.collection.Set.prototype.iterator = function() {
	$s.push("thx.collection.Set::iterator");
	var $spos = $s.length;
	var $tmp = this._v.iterator();
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.collection.Set.prototype.array = function() {
	$s.push("thx.collection.Set::array");
	var $spos = $s.length;
	var $tmp = this._v.copy();
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.collection.Set.prototype.toString = function() {
	$s.push("thx.collection.Set::toString");
	var $spos = $s.length;
	var $tmp = "{" + this._v.join(", ") + "}";
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.collection.Set.prototype.__class__ = thx.collection.Set;
rg.data.IAxis = function() { }
rg.data.IAxis.__name__ = ["rg","data","IAxis"];
rg.data.IAxis.prototype.scale = null;
rg.data.IAxis.prototype.ticks = null;
rg.data.IAxis.prototype.__class__ = rg.data.IAxis;
rg.data.IAxisDiscrete = function() { }
rg.data.IAxisDiscrete.__name__ = ["rg","data","IAxisDiscrete"];
rg.data.IAxisDiscrete.prototype.scaleDistribution = null;
rg.data.IAxisDiscrete.prototype.range = null;
rg.data.IAxisDiscrete.prototype.__class__ = rg.data.IAxisDiscrete;
rg.data.IAxisDiscrete.__interfaces__ = [rg.data.IAxis];
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
if(!rg.controller) rg.controller = {}
if(!rg.controller.visualization) rg.controller.visualization = {}
rg.controller.visualization.Visualization = function() { }
rg.controller.visualization.Visualization.__name__ = ["rg","controller","visualization","Visualization"];
rg.controller.visualization.Visualization.prototype.independentVariables = null;
rg.controller.visualization.Visualization.prototype.dependentVariables = null;
rg.controller.visualization.Visualization.prototype.variables = null;
rg.controller.visualization.Visualization.prototype.setVariables = function(independentVariables,dependentVariables) {
	$s.push("rg.controller.visualization.Visualization::setVariables");
	var $spos = $s.length;
	this.independentVariables = independentVariables;
	this.dependentVariables = dependentVariables;
	$s.pop();
}
rg.controller.visualization.Visualization.prototype.init = function() {
	$s.push("rg.controller.visualization.Visualization::init");
	var $spos = $s.length;
	throw new thx.error.AbstractMethod({ fileName : "Visualization.hx", lineNumber : 29, className : "rg.controller.visualization.Visualization", methodName : "init"});
	$s.pop();
}
rg.controller.visualization.Visualization.prototype.feedData = function(data) {
	$s.push("rg.controller.visualization.Visualization::feedData");
	var $spos = $s.length;
	haxe.Log.trace("DATA FEED " + Dynamics.string(data),{ fileName : "Visualization.hx", lineNumber : 34, className : "rg.controller.visualization.Visualization", methodName : "feedData"});
	$s.pop();
}
rg.controller.visualization.Visualization.prototype.getVariables = function() {
	$s.push("rg.controller.visualization.Visualization::getVariables");
	var $spos = $s.length;
	var $tmp = this.independentVariables.map(function(d,i) {
		$s.push("rg.controller.visualization.Visualization::getVariables@40");
		var $spos = $s.length;
		var $tmp = d;
		$s.pop();
		return $tmp;
		$s.pop();
	}).concat(this.dependentVariables.map(function(d,i) {
		$s.push("rg.controller.visualization.Visualization::getVariables@41");
		var $spos = $s.length;
		var $tmp = d;
		$s.pop();
		return $tmp;
		$s.pop();
	}));
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.controller.visualization.Visualization.prototype.destroy = function() {
	$s.push("rg.controller.visualization.Visualization::destroy");
	var $spos = $s.length;
	$s.pop();
}
rg.controller.visualization.Visualization.prototype.__class__ = rg.controller.visualization.Visualization;
rg.controller.visualization.VisualizationSvg = function(layout) {
	if( layout === $_ ) return;
	$s.push("rg.controller.visualization.VisualizationSvg::new");
	var $spos = $s.length;
	this.layout = layout;
	$s.pop();
}
rg.controller.visualization.VisualizationSvg.__name__ = ["rg","controller","visualization","VisualizationSvg"];
rg.controller.visualization.VisualizationSvg.__super__ = rg.controller.visualization.Visualization;
for(var k in rg.controller.visualization.Visualization.prototype ) rg.controller.visualization.VisualizationSvg.prototype[k] = rg.controller.visualization.Visualization.prototype[k];
rg.controller.visualization.VisualizationSvg.prototype.layout = null;
rg.controller.visualization.VisualizationSvg.prototype.__class__ = rg.controller.visualization.VisualizationSvg;
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
rg.data.source.ITransform = function() { }
rg.data.source.ITransform.__name__ = ["rg","data","source","ITransform"];
rg.data.source.ITransform.prototype.transform = null;
rg.data.source.ITransform.prototype.__class__ = rg.data.source.ITransform;
if(!rg.data.source.rgquery.transform) rg.data.source.rgquery.transform = {}
rg.data.source.rgquery.transform.TransformTimeSeries = function(properties,event,periodicity,unit) {
	if( properties === $_ ) return;
	$s.push("rg.data.source.rgquery.transform.TransformTimeSeries::new");
	var $spos = $s.length;
	this.properties = properties;
	this.unit = unit;
	this.periodicity = periodicity;
	this.event = event;
	$s.pop();
}
rg.data.source.rgquery.transform.TransformTimeSeries.__name__ = ["rg","data","source","rgquery","transform","TransformTimeSeries"];
rg.data.source.rgquery.transform.TransformTimeSeries.prototype.properties = null;
rg.data.source.rgquery.transform.TransformTimeSeries.prototype.unit = null;
rg.data.source.rgquery.transform.TransformTimeSeries.prototype.periodicity = null;
rg.data.source.rgquery.transform.TransformTimeSeries.prototype.event = null;
rg.data.source.rgquery.transform.TransformTimeSeries.prototype.transform = function(data) {
	$s.push("rg.data.source.rgquery.transform.TransformTimeSeries::transform");
	var $spos = $s.length;
	var properties = this.properties, unit = this.unit, event = this.event, periodicity = this.periodicity;
	var result = data.map(function(d,_) {
		$s.push("rg.data.source.rgquery.transform.TransformTimeSeries::transform@32");
		var $spos = $s.length;
		var p = Objects.addFields(Dynamics.clone(properties),[rg.util.Properties.timeProperty(periodicity),unit,"event"],[d[0].timestamp,d[1],event]);
		$s.pop();
		return p;
		$s.pop();
	});
	$s.pop();
	return result;
	$s.pop();
}
rg.data.source.rgquery.transform.TransformTimeSeries.prototype.__class__ = rg.data.source.rgquery.transform.TransformTimeSeries;
rg.data.source.rgquery.transform.TransformTimeSeries.__interfaces__ = [rg.data.source.ITransform];
rg.data.AxisNumeric = function(p) {
	$s.push("rg.data.AxisNumeric::new");
	var $spos = $s.length;
	$s.pop();
}
rg.data.AxisNumeric.__name__ = ["rg","data","AxisNumeric"];
rg.data.AxisNumeric._step = function(span,m) {
	$s.push("rg.data.AxisNumeric::_step");
	var $spos = $s.length;
	var step = Math.pow(m,Math.floor(Math.log(span / m) / Math.log(m))), err = m / (span / step);
	if(err <= .05) step *= 10; else if(err <= .2) step *= 5; else if(err <= .4) step *= 4; else if(err <= .6) step *= 2;
	$s.pop();
	return step;
	$s.pop();
}
rg.data.AxisNumeric.prototype.scale = function(start,end,v) {
	$s.push("rg.data.AxisNumeric::scale");
	var $spos = $s.length;
	if(start == end) {
		$s.pop();
		return start;
	}
	var $tmp = (Floats.uninterpolatef(start,end))(v);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.AxisNumeric.prototype.ticks = function(start,end,maxTicks) {
	$s.push("rg.data.AxisNumeric::ticks");
	var $spos = $s.length;
	var span, step = 1.0, minors, majors;
	if(start % step == 0 && end % step == 0 && (span = end - start) < 10 && span >= step) {
		majors = Floats.range(start,end + step,step);
		minors = null;
	} else {
		minors = Floats.range(start,end + (step = rg.data.AxisNumeric._step(span,10)),step);
		majors = Floats.range(start,end + (step = rg.data.AxisNumeric._step(span,5)),step);
	}
	var $tmp = rg.data.Tickmarks.bound(null == minors?majors.map(function(d,i) {
		$s.push("rg.data.AxisNumeric::ticks@33");
		var $spos = $s.length;
		var $tmp = new rg.data.Tickmark(d,true,(d - start) / (end - start));
		$s.pop();
		return $tmp;
		$s.pop();
	}):minors.map(function(d,i) {
		$s.push("rg.data.AxisNumeric::ticks@34");
		var $spos = $s.length;
		var $tmp = new rg.data.Tickmark(d,majors.remove(d),(d - start) / (end - start));
		$s.pop();
		return $tmp;
		$s.pop();
	}),maxTicks);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.AxisNumeric.prototype.__class__ = rg.data.AxisNumeric;
rg.data.AxisNumeric.__interfaces__ = [rg.data.IAxis];
if(!rg.controller.info) rg.controller.info = {}
rg.controller.info.InfoSegment = function(p) {
	$s.push("rg.controller.info.InfoSegment::new");
	var $spos = $s.length;
	$s.pop();
}
rg.controller.info.InfoSegment.__name__ = ["rg","controller","info","InfoSegment"];
rg.controller.info.InfoSegment.filters = function() {
	$s.push("rg.controller.info.InfoSegment::filters");
	var $spos = $s.length;
	var $tmp = [{ field : "on", validator : function(v) {
		$s.push("rg.controller.info.InfoSegment::filters@20");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "transform", validator : function(v) {
		$s.push("rg.controller.info.InfoSegment::filters@24");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "scale", validator : function(v) {
		$s.push("rg.controller.info.InfoSegment::filters@28");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null}];
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.controller.info.InfoSegment.prototype.on = null;
rg.controller.info.InfoSegment.prototype.transform = null;
rg.controller.info.InfoSegment.prototype.scale = null;
rg.controller.info.InfoSegment.prototype.__class__ = rg.controller.info.InfoSegment;
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
rg.controller.visualization.VisualizationCartesian = function(layout) {
	if( layout === $_ ) return;
	$s.push("rg.controller.visualization.VisualizationCartesian::new");
	var $spos = $s.length;
	rg.controller.visualization.VisualizationSvg.call(this,layout);
	$s.pop();
}
rg.controller.visualization.VisualizationCartesian.__name__ = ["rg","controller","visualization","VisualizationCartesian"];
rg.controller.visualization.VisualizationCartesian.__super__ = rg.controller.visualization.VisualizationSvg;
for(var k in rg.controller.visualization.VisualizationSvg.prototype ) rg.controller.visualization.VisualizationCartesian.prototype[k] = rg.controller.visualization.VisualizationSvg.prototype[k];
rg.controller.visualization.VisualizationCartesian.prototype.info = null;
rg.controller.visualization.VisualizationCartesian.prototype.chart = null;
rg.controller.visualization.VisualizationCartesian.prototype.xlabel = null;
rg.controller.visualization.VisualizationCartesian.prototype.xrule = null;
rg.controller.visualization.VisualizationCartesian.prototype.ylabels = null;
rg.controller.visualization.VisualizationCartesian.prototype.yrules = null;
rg.controller.visualization.VisualizationCartesian.prototype.title = null;
rg.controller.visualization.VisualizationCartesian.prototype.xvariable = null;
rg.controller.visualization.VisualizationCartesian.prototype.yvariables = null;
rg.controller.visualization.VisualizationCartesian.prototype.init = function() {
	$s.push("rg.controller.visualization.VisualizationCartesian::init");
	var $spos = $s.length;
	this.initAxes();
	this.initYAxes();
	this.initXAxis();
	this.initTitle();
	this.initPadding();
	this.initChart();
	this.initCartesianChart();
	$s.pop();
}
rg.controller.visualization.VisualizationCartesian.prototype.initAxes = function() {
	$s.push("rg.controller.visualization.VisualizationCartesian::initAxes");
	var $spos = $s.length;
	throw new thx.error.AbstractMethod({ fileName : "VisualizationCartesian.hx", lineNumber : 46, className : "rg.controller.visualization.VisualizationCartesian", methodName : "initAxes"});
	$s.pop();
}
rg.controller.visualization.VisualizationCartesian.prototype.initPadding = function() {
	$s.push("rg.controller.visualization.VisualizationCartesian::initPadding");
	var $spos = $s.length;
	this.layout.adjustPadding();
	$s.pop();
}
rg.controller.visualization.VisualizationCartesian.prototype.initYAxes = function() {
	$s.push("rg.controller.visualization.VisualizationCartesian::initYAxes");
	var $spos = $s.length;
	this.ylabels = [];
	this.yrules = [];
	var _g1 = 0, _g = this.yvariables.length;
	while(_g1 < _g) {
		var i = _g1++;
		var tickmarks = this.createTickmarks(i + 1,this.yvariables[i].type,"y" + i), rules = this.createRules(i + 1,this.yvariables[i].type,rg.view.frame.Orientation.Horizontal);
		if(null != tickmarks) this.ylabels.push({ id : i, tickmarks : tickmarks});
		if(null != rules) this.yrules.push({ id : i, rules : rules});
	}
	$s.pop();
}
rg.controller.visualization.VisualizationCartesian.prototype.initXAxis = function() {
	$s.push("rg.controller.visualization.VisualizationCartesian::initXAxis");
	var $spos = $s.length;
	this.xlabel = this.createTickmarks(0,this.xvariable.type,"x");
	this.xrule = this.createRules(0,this.xvariable.type,rg.view.frame.Orientation.Vertical);
	$s.pop();
}
rg.controller.visualization.VisualizationCartesian.prototype.initChart = function() {
	$s.push("rg.controller.visualization.VisualizationCartesian::initChart");
	var $spos = $s.length;
	throw new thx.error.AbstractMethod({ fileName : "VisualizationCartesian.hx", lineNumber : 88, className : "rg.controller.visualization.VisualizationCartesian", methodName : "initChart"});
	$s.pop();
}
rg.controller.visualization.VisualizationCartesian.prototype.initCartesianChart = function() {
	$s.push("rg.controller.visualization.VisualizationCartesian::initCartesianChart");
	var $spos = $s.length;
	this.chart.animated = this.info.animation.animated;
	this.chart.animationDuration = this.info.animation.duration;
	this.chart.animationEase = this.info.animation.ease;
	this.chart.click = this.info.click;
	this.chart.labelDataPoint = this.info.label.datapoint;
	this.chart.labelDataPointOver = this.info.label.datapointover;
	this.chart.init();
	$s.pop();
}
rg.controller.visualization.VisualizationCartesian.prototype.initTitle = function() {
	$s.push("rg.controller.visualization.VisualizationCartesian::initTitle");
	var $spos = $s.length;
	if(null == this.info.label.title) {
		$s.pop();
		return;
	}
	var panelContextTitle = this.layout.getContext("title");
	if(null == panelContextTitle) {
		$s.pop();
		return;
	}
	this.title = new rg.view.svg.layer.Title(panelContextTitle.panel,null,panelContextTitle.anchor);
	$s.pop();
}
rg.controller.visualization.VisualizationCartesian.prototype.feedData = function(data) {
	$s.push("rg.controller.visualization.VisualizationCartesian::feedData");
	var $spos = $s.length;
	if(0 == data.length) {
		$s.pop();
		return;
	}
	if(null != this.title && null != this.info.label.title) {
		this.title.setText(this.info.label.title(this.getVariables(),data));
		this.layout.suggestSize("title",this.title.idealHeight());
	}
	var _g1 = 0, _g = this.ylabels.length;
	while(_g1 < _g) {
		var i = _g1++;
		var item = this.ylabels[i], variable = this.yvariables[item.id];
		item.tickmarks.update(variable.axis,variable.min,variable.max);
		var size = Math.round(item.tickmarks.desiredSize);
		this.layout.suggestSize("y" + item.id,size);
	}
	var _g1 = 0, _g = this.yrules.length;
	while(_g1 < _g) {
		var i = _g1++;
		var item = this.yrules[i], variable = this.yvariables[item.id];
		item.rules.update(variable.axis,variable.min,variable.max);
	}
	if(null != this.xlabel) {
		var variable = this.xvariable;
		this.xlabel.update(variable.axis,variable.min,variable.max);
		var size = Math.round(this.xlabel.desiredSize);
		this.layout.suggestSize("x",size);
	}
	if(null != this.xrule) {
		var variable = this.xvariable;
		this.xrule.update(variable.axis,variable.min,variable.max);
	}
	this.chart.setVariables(this.independentVariables,this.dependentVariables);
	this.chart.data(this.transformData(data));
	$s.pop();
}
rg.controller.visualization.VisualizationCartesian.prototype.transformData = function(dps) {
	$s.push("rg.controller.visualization.VisualizationCartesian::transformData");
	var $spos = $s.length;
	var $tmp = (function($this) {
		var $r;
		throw new thx.error.AbstractMethod({ fileName : "VisualizationCartesian.hx", lineNumber : 160, className : "rg.controller.visualization.VisualizationCartesian", methodName : "transformData"});
		return $r;
	}(this));
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.controller.visualization.VisualizationCartesian.prototype.destroy = function() {
	$s.push("rg.controller.visualization.VisualizationCartesian::destroy");
	var $spos = $s.length;
	this.chart.destroy();
	$s.pop();
}
rg.controller.visualization.VisualizationCartesian.prototype.setTickmarksDefaults = function(tickmarks,i,type,pname) {
	$s.push("rg.controller.visualization.VisualizationCartesian::setTickmarksDefaults");
	var $spos = $s.length;
	$s.pop();
}
rg.controller.visualization.VisualizationCartesian.prototype.createTickmarks = function(i,type,pname) {
	$s.push("rg.controller.visualization.VisualizationCartesian::createTickmarks");
	var $spos = $s.length;
	var me = this;
	var displayMinor = this.info.displayMinorTick(type), displayMajor = this.info.displayMajorTick(type), displayLabel = this.info.displayLabelTick(type), displayAnchorLine = this.info.displayAnchorLineTick(type), title = null != this.info.label.axis?this.info.label.axis(type):null, tickmarks = null, context;
	if(displayMinor || displayMajor || displayLabel || displayAnchorLine) {
		context = this.layout.getContext(pname);
		if(null == context) {
			$s.pop();
			return null;
		}
		tickmarks = new rg.view.svg.layer.TickmarksOrtho(context.panel,context.anchor);
		this.setTickmarksDefaults(tickmarks,i,type,pname);
		if(!displayLabel) tickmarks.displayLabel = false; else if(null != this.info.label.tickmark) tickmarks.tickLabel = function(d) {
			$s.push("rg.controller.visualization.VisualizationCartesian::createTickmarks@194");
			var $spos = $s.length;
			var $tmp = me.info.label.tickmark(d,type);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		tickmarks.displayMinor = displayMinor;
		tickmarks.displayMajor = displayMajor;
		tickmarks.lengthMinor = this.info.lengthTickMinor;
		tickmarks.lengthMajor = this.info.lengthTickMajor;
		tickmarks.paddingMinor = this.info.paddingTickMinor;
		tickmarks.paddingMajor = this.info.paddingTickMajor;
		tickmarks.paddingLabel = this.info.paddingLabel;
		var s = this.info.labelOrientation(type);
		if(null != s) tickmarks.labelOrientation = rg.view.svg.widget.LabelOrientations.parse(s);
		s = this.info.labelAnchor(type);
		if(null != s) tickmarks.labelAnchor = rg.view.svg.widget.GridAnchors.parse(s);
		var a;
		if(null != (a = this.info.labelAngle(type))) tickmarks.labelAngle = a;
		tickmarks.displayAnchorLine = displayAnchorLine;
	}
	if(null != title && null != (context = this.layout.getContext(pname + "title"))) {
		var t = new rg.view.svg.layer.Title(context.panel,title,context.anchor,null,"axis-title");
		var h = t.idealHeight();
		this.layout.suggestSize(pname + "title",h);
	}
	if(null != tickmarks) tickmarks.init();
	$s.pop();
	return tickmarks;
	$s.pop();
}
rg.controller.visualization.VisualizationCartesian.prototype.createRules = function(i,type,orientation) {
	$s.push("rg.controller.visualization.VisualizationCartesian::createRules");
	var $spos = $s.length;
	var displayMinor = this.info.displayMinorRule(type), displayMajor = this.info.displayMajorRule(type), displayAnchorLine = this.info.displayAnchorLineRule(type), title = null != this.info.label.axis?this.info.label.axis(type):null, rules = null, panel;
	if(displayMinor || displayMajor) {
		panel = this.layout.getPanel("main");
		if(null == panel) {
			$s.pop();
			return null;
		}
		rules = new rg.view.svg.layer.RulesOrtho(panel,orientation);
		rules.displayMinor = displayMinor;
		rules.displayMajor = displayMajor;
		rules.displayAnchorLine = displayAnchorLine;
		rules.init();
	}
	$s.pop();
	return rules;
	$s.pop();
}
rg.controller.visualization.VisualizationCartesian.prototype.__class__ = rg.controller.visualization.VisualizationCartesian;
rg.controller.visualization.VisualizationBarChart = function(layout) {
	if( layout === $_ ) return;
	$s.push("rg.controller.visualization.VisualizationBarChart::new");
	var $spos = $s.length;
	rg.controller.visualization.VisualizationCartesian.call(this,layout);
	$s.pop();
}
rg.controller.visualization.VisualizationBarChart.__name__ = ["rg","controller","visualization","VisualizationBarChart"];
rg.controller.visualization.VisualizationBarChart.__super__ = rg.controller.visualization.VisualizationCartesian;
for(var k in rg.controller.visualization.VisualizationCartesian.prototype ) rg.controller.visualization.VisualizationBarChart.prototype[k] = rg.controller.visualization.VisualizationCartesian.prototype[k];
rg.controller.visualization.VisualizationBarChart.prototype.infoBar = null;
rg.controller.visualization.VisualizationBarChart.prototype.initAxes = function() {
	$s.push("rg.controller.visualization.VisualizationBarChart::initAxes");
	var $spos = $s.length;
	this.xvariable = this.independentVariables[0];
	this.yvariables = this.dependentVariables.map(function(d,_) {
		$s.push("rg.controller.visualization.VisualizationBarChart::initAxes@23");
		var $spos = $s.length;
		$s.pop();
		return d;
		$s.pop();
	});
	$s.pop();
}
rg.controller.visualization.VisualizationBarChart.prototype.initChart = function() {
	$s.push("rg.controller.visualization.VisualizationBarChart::initChart");
	var $spos = $s.length;
	var chart = new rg.view.svg.chart.BarChart(this.layout.getPanel(this.layout.mainPanelName));
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
	this.chart = chart;
	$s.pop();
}
rg.controller.visualization.VisualizationBarChart.prototype.transformData = function(dps) {
	$s.push("rg.controller.visualization.VisualizationBarChart::transformData");
	var $spos = $s.length;
	var results = [], variable = this.independentVariables[0], values = variable.axis.range(variable.min,variable.max);
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
				$s.push("rg.controller.visualization.VisualizationBarChart::transformData@57");
				var $spos = $s.length;
				var $tmp = function(d) {
					$s.push("rg.controller.visualization.VisualizationBarChart::transformData@57@57");
					var $spos = $s.length;
					var $tmp = Reflect.field(d,variable.type) == value[0];
					$s.pop();
					return $tmp;
					$s.pop();
				};
				$s.pop();
				return $tmp;
				$s.pop();
			})(value)));
		}
		results.push(axisresults);
	}
	$s.pop();
	return results;
	$s.pop();
}
rg.controller.visualization.VisualizationBarChart.prototype.__class__ = rg.controller.visualization.VisualizationBarChart;
rg.controller.info.InfoFunnelChart = function(p) {
	if( p === $_ ) return;
	$s.push("rg.controller.info.InfoFunnelChart::new");
	var $spos = $s.length;
	this.animation = new rg.controller.info.InfoAnimation();
	this.label = new rg.controller.info.InfoLabelFunnel();
	this.padding = 2.5;
	this.flatness = 1.0;
	this.effect = rg.view.svg.chart.GradientEffect.Gradient(0.75);
	this.arrowSize = 30;
	$s.pop();
}
rg.controller.info.InfoFunnelChart.__name__ = ["rg","controller","info","InfoFunnelChart"];
rg.controller.info.InfoFunnelChart.filters = function() {
	$s.push("rg.controller.info.InfoFunnelChart::filters");
	var $spos = $s.length;
	var $tmp = [{ field : "animation", validator : function(v) {
		$s.push("rg.controller.info.InfoFunnelChart::filters@38");
		var $spos = $s.length;
		var $tmp = Reflect.isObject(v) && null == Type.getClass(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoFunnelChart::filters@39");
		var $spos = $s.length;
		var $tmp = [{ field : "animation", value : rg.controller.info.Info.feed(new rg.controller.info.InfoAnimation(),v)}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "label", validator : function(v) {
		$s.push("rg.controller.info.InfoFunnelChart::filters@45");
		var $spos = $s.length;
		var $tmp = Reflect.isObject(v) && null == Type.getClass(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoFunnelChart::filters@46");
		var $spos = $s.length;
		var $tmp = [{ field : "label", value : rg.controller.info.Info.feed(new rg.controller.info.InfoLabelFunnel(),v)}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "sort", validator : function(v) {
		$s.push("rg.controller.info.InfoFunnelChart::filters@52");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoFunnelChart::filters@53");
		var $spos = $s.length;
		var $tmp = [{ field : "sortDataPoint", value : v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "click", validator : function(v) {
		$s.push("rg.controller.info.InfoFunnelChart::filters@59");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "segmentpadding", validator : function(v) {
		$s.push("rg.controller.info.InfoFunnelChart::filters@63");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Float);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoFunnelChart::filters@64");
		var $spos = $s.length;
		var $tmp = [{ field : "padding", value : v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "flatness", validator : function(v) {
		$s.push("rg.controller.info.InfoFunnelChart::filters@70");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Float);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "effect", validator : rg.view.svg.chart.GradientEffects.canParse, filter : function(v) {
		$s.push("rg.controller.info.InfoFunnelChart::filters@75");
		var $spos = $s.length;
		var $tmp = [{ field : "effect", value : rg.view.svg.chart.GradientEffects.parse(v)}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "arrowsize", validator : function(v) {
		$s.push("rg.controller.info.InfoFunnelChart::filters@81");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Float);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoFunnelChart::filters@82");
		var $spos = $s.length;
		var $tmp = [{ field : "arrowSize", value : v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}}];
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.controller.info.InfoFunnelChart.prototype.animation = null;
rg.controller.info.InfoFunnelChart.prototype.label = null;
rg.controller.info.InfoFunnelChart.prototype.sortDataPoint = null;
rg.controller.info.InfoFunnelChart.prototype.click = null;
rg.controller.info.InfoFunnelChart.prototype.padding = null;
rg.controller.info.InfoFunnelChart.prototype.flatness = null;
rg.controller.info.InfoFunnelChart.prototype.effect = null;
rg.controller.info.InfoFunnelChart.prototype.arrowSize = null;
rg.controller.info.InfoFunnelChart.prototype.__class__ = rg.controller.info.InfoFunnelChart;
rg.data.Stats = function(sortf) {
	if( sortf === $_ ) return;
	$s.push("rg.data.Stats::new");
	var $spos = $s.length;
	this.sortf = sortf;
	this.isNumeric = false;
	this.reset();
	$s.pop();
}
rg.data.Stats.__name__ = ["rg","data","Stats"];
rg.data.Stats.prototype.min = null;
rg.data.Stats.prototype.max = null;
rg.data.Stats.prototype.count = null;
rg.data.Stats.prototype.values = null;
rg.data.Stats.prototype.sortf = null;
rg.data.Stats.prototype.isNumeric = null;
rg.data.Stats.prototype.reset = function() {
	$s.push("rg.data.Stats::reset");
	var $spos = $s.length;
	this.min = null;
	this.max = null;
	this.count = 0;
	this.values = [];
	$s.pop();
	return this;
	$s.pop();
}
rg.data.Stats.prototype.add = function(v) {
	$s.push("rg.data.Stats::add");
	var $spos = $s.length;
	this.count++;
	if(Arrays.exists(this.values,v)) {
		$s.pop();
		return this;
	}
	this.values.push(v);
	if(null != this.sortf) this.values.sort(this.sortf);
	this.min = this.values[0];
	this.max = Arrays.last(this.values);
	$s.pop();
	return this;
	$s.pop();
}
rg.data.Stats.prototype.addMany = function(it) {
	$s.push("rg.data.Stats::addMany");
	var $spos = $s.length;
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
	$s.pop();
	return this;
	$s.pop();
}
rg.data.Stats.prototype.__class__ = rg.data.Stats;
rg.data.StatsNumeric = function(sortf) {
	if( sortf === $_ ) return;
	$s.push("rg.data.StatsNumeric::new");
	var $spos = $s.length;
	if(null == sortf) sortf = Floats.compare;
	rg.data.Stats.call(this,sortf);
	this.isNumeric = true;
	$s.pop();
}
rg.data.StatsNumeric.__name__ = ["rg","data","StatsNumeric"];
rg.data.StatsNumeric.__super__ = rg.data.Stats;
for(var k in rg.data.Stats.prototype ) rg.data.StatsNumeric.prototype[k] = rg.data.Stats.prototype[k];
rg.data.StatsNumeric.prototype.tot = null;
rg.data.StatsNumeric.prototype.reset = function() {
	$s.push("rg.data.StatsNumeric::reset");
	var $spos = $s.length;
	rg.data.Stats.prototype.reset.call(this);
	this.tot = 0.0;
	$s.pop();
	return this;
	$s.pop();
}
rg.data.StatsNumeric.prototype.add = function(v) {
	$s.push("rg.data.StatsNumeric::add");
	var $spos = $s.length;
	rg.data.Stats.prototype.add.call(this,v);
	this.tot += v;
	$s.pop();
	return this;
	$s.pop();
}
rg.data.StatsNumeric.prototype.addMany = function(it) {
	$s.push("rg.data.StatsNumeric::addMany");
	var $spos = $s.length;
	rg.data.Stats.prototype.addMany.call(this,it);
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var v = $it0.next();
		this.tot += v;
	}
	$s.pop();
	return this;
	$s.pop();
}
rg.data.StatsNumeric.prototype.__class__ = rg.data.StatsNumeric;
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
rg.view.svg.widget.Balloon = function(container,bindOnTop) {
	if( container === $_ ) return;
	$s.push("rg.view.svg.widget.Balloon::new");
	var $spos = $s.length;
	if(bindOnTop == null) bindOnTop = true;
	if(bindOnTop) {
		var parent = container.node();
		while(null != parent && parent.nodeName != "svg") parent = parent.parentNode;
		this.container = null == parent?container:thx.js.Dom.selectNode(parent);
	} else this.container = container;
	this.visible = true;
	this.duration = 500;
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
		$s.push("rg.view.svg.widget.Balloon::new@75");
		var $spos = $s.length;
		var $tmp = [d[1],d[0]];
		$s.pop();
		return $tmp;
		$s.pop();
	});
	this.connector = this.balloon.append("svg:path").attr("class").string("balloon-connector").style("fill").string("none").style("display").string("none").attr("transform").string("translate(0, 0)");
	this.frame.append("svg:path").attr("class").string("bg");
	this.labelsContainer = this.frame.append("svg:g").attr("class").string("labels");
	this.labels = [];
	var temp = this.createLabel(0);
	temp.setText("HELLO");
	this.setLineHeight(temp.getSize().height);
	temp.destroy();
	$s.pop();
}
rg.view.svg.widget.Balloon.__name__ = ["rg","view","svg","widget","Balloon"];
rg.view.svg.widget.Balloon.prototype.text = null;
rg.view.svg.widget.Balloon.prototype.x = null;
rg.view.svg.widget.Balloon.prototype.y = null;
rg.view.svg.widget.Balloon.prototype.boxWidth = null;
rg.view.svg.widget.Balloon.prototype.boxHeight = null;
rg.view.svg.widget.Balloon.prototype.visible = null;
rg.view.svg.widget.Balloon.prototype.lineHeight = null;
rg.view.svg.widget.Balloon.prototype.roundedCorner = null;
rg.view.svg.widget.Balloon.prototype.paddingHorizontal = null;
rg.view.svg.widget.Balloon.prototype.paddingVertical = null;
rg.view.svg.widget.Balloon.prototype.preferredSide = null;
rg.view.svg.widget.Balloon.prototype.minwidth = null;
rg.view.svg.widget.Balloon.prototype.labels = null;
rg.view.svg.widget.Balloon.prototype.container = null;
rg.view.svg.widget.Balloon.prototype.balloon = null;
rg.view.svg.widget.Balloon.prototype.frame = null;
rg.view.svg.widget.Balloon.prototype.labelsContainer = null;
rg.view.svg.widget.Balloon.prototype.connector = null;
rg.view.svg.widget.Balloon.prototype.duration = null;
rg.view.svg.widget.Balloon.prototype.ease = null;
rg.view.svg.widget.Balloon.prototype.connectorShapeV = null;
rg.view.svg.widget.Balloon.prototype.connectorShapeH = null;
rg.view.svg.widget.Balloon.prototype.boundingBox = null;
rg.view.svg.widget.Balloon.prototype.addClass = function(name) {
	$s.push("rg.view.svg.widget.Balloon::addClass");
	var $spos = $s.length;
	this.frame.select("path.bg").classed().add(name);
	$s.pop();
}
rg.view.svg.widget.Balloon.prototype.removeClass = function(name) {
	$s.push("rg.view.svg.widget.Balloon::removeClass");
	var $spos = $s.length;
	this.frame.select("path.bg").classed().remove(name);
	$s.pop();
}
rg.view.svg.widget.Balloon.prototype.createLabel = function(i) {
	$s.push("rg.view.svg.widget.Balloon::createLabel");
	var $spos = $s.length;
	var label = new rg.view.svg.widget.Label(this.labelsContainer,true,true,false);
	label.addClass("line-" + i);
	label.setAnchor(rg.view.svg.widget.GridAnchor.Top);
	label.setOrientation(rg.view.svg.widget.LabelOrientation.Orthogonal);
	label.place(0,i * this.lineHeight,90);
	$s.pop();
	return label;
	$s.pop();
}
rg.view.svg.widget.Balloon.prototype.setPreferredSide = function(v) {
	$s.push("rg.view.svg.widget.Balloon::setPreferredSide");
	var $spos = $s.length;
	this.preferredSide = Ints.clamp(v,0,3);
	this.redraw();
	$s.pop();
	return v;
	$s.pop();
}
rg.view.svg.widget.Balloon.prototype.setText = function(v) {
	$s.push("rg.view.svg.widget.Balloon::setText");
	var $spos = $s.length;
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
	$s.pop();
	return v;
	$s.pop();
}
rg.view.svg.widget.Balloon.prototype.setLineHeight = function(v) {
	$s.push("rg.view.svg.widget.Balloon::setLineHeight");
	var $spos = $s.length;
	this.lineHeight = v;
	this.redraw();
	$s.pop();
	return v;
	$s.pop();
}
rg.view.svg.widget.Balloon.prototype.setPadding = function(h,v) {
	$s.push("rg.view.svg.widget.Balloon::setPadding");
	var $spos = $s.length;
	this.paddingHorizontal = h;
	this.paddingVertical = v;
	this.redraw();
	$s.pop();
}
rg.view.svg.widget.Balloon.prototype.setRoundedCorner = function(v) {
	$s.push("rg.view.svg.widget.Balloon::setRoundedCorner");
	var $spos = $s.length;
	this.roundedCorner = v;
	this.redraw();
	$s.pop();
	return v;
	$s.pop();
}
rg.view.svg.widget.Balloon.prototype.setBoundingBox = function(v) {
	$s.push("rg.view.svg.widget.Balloon::setBoundingBox");
	var $spos = $s.length;
	this.boundingBox = v;
	this.redraw();
	$s.pop();
	return v;
	$s.pop();
}
rg.view.svg.widget.Balloon.prototype.getBoundingBox = function() {
	$s.push("rg.view.svg.widget.Balloon::getBoundingBox");
	var $spos = $s.length;
	if(null == this.boundingBox) this.setBoundingBox(this.container.node().getBBox());
	var $tmp = this.boundingBox;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.widget.Balloon.prototype.transition_id = null;
rg.view.svg.widget.Balloon.prototype.moveTo = function(x,y,animate) {
	$s.push("rg.view.svg.widget.Balloon::moveTo");
	var $spos = $s.length;
	if(animate == null) animate = true;
	var me = this;
	if(animate) {
		var $int = thx.math.Equations.elasticf(), tid = ++this.transition_id, ix = Floats.interpolatef(this.x,x,this.ease), iy = Floats.interpolatef(this.y,y,this.ease);
		thx.js.Timer.timer(function(t) {
			$s.push("rg.view.svg.widget.Balloon::moveTo@191");
			var $spos = $s.length;
			if(tid != me.transition_id) {
				$s.pop();
				return true;
			}
			if(t > me.duration) {
				me._moveTo(x,y);
				$s.pop();
				return true;
			}
			me._moveTo(ix(t / me.duration),iy(t / me.duration));
			$s.pop();
			return false;
			$s.pop();
		},0);
	} else this._moveTo(x,y);
	$s.pop();
}
rg.view.svg.widget.Balloon.prototype._moveTo = function(x,y) {
	$s.push("rg.view.svg.widget.Balloon::_moveTo");
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
	var o = null, off = 1.0;
	if(0 == diagonal) this.connector.style("display").string("none"); else {
		this.connector.style("display").string("block");
		o = { x0 : off, y0 : off, x1 : off, y1 : off};
		switch(side) {
		case 0:
			o.x1 = tx + off + offset + 2 * this.roundedCorner;
			o.y1 = ty + off - this.roundedCorner;
			break;
		case 1:
			o.y1 = tx + off + this.boxWidth + this.roundedCorner;
			o.x1 = ty + off + offset + this.roundedCorner;
			break;
		case 2:
			o.x1 = tx + off + offset + 2 * this.roundedCorner;
			o.y1 = ty + off + this.boxHeight + this.roundedCorner;
			break;
		case 3:
			o.y1 = tx + off + -this.roundedCorner;
			o.x1 = ty + off + offset + this.roundedCorner;
			break;
		}
	}
	this.balloon.attr("transform").string("translate(" + (this.x = x) + ", " + (this.y = y) + ")");
	this.frame.attr("transform").string("translate(" + tx + ", " + ty + ")").selectAll("path").attr("d").string(rg.view.svg.widget.BalloonShape.shape(this.boxWidth,this.boxHeight,this.roundedCorner,this.roundedCorner,side,offset));
	if(0 != diagonal) this.connector.attr("d").string(side % 2 == 0?this.connectorShapeV.diagonal(o):this.connectorShapeH.diagonal(o));
	$s.pop();
}
rg.view.svg.widget.Balloon.prototype.show = function() {
	$s.push("rg.view.svg.widget.Balloon::show");
	var $spos = $s.length;
	if(!this.visible) {
		$s.pop();
		return;
	}
	this.visible = true;
	this.balloon.style("display").string("block");
	$s.pop();
}
rg.view.svg.widget.Balloon.prototype.hide = function() {
	$s.push("rg.view.svg.widget.Balloon::hide");
	var $spos = $s.length;
	if(this.visible) {
		$s.pop();
		return;
	}
	this.visible = false;
	this.balloon.style("display").string("none");
	$s.pop();
}
rg.view.svg.widget.Balloon.prototype.redraw = function() {
	$s.push("rg.view.svg.widget.Balloon::redraw");
	var $spos = $s.length;
	if(null == this.text || this.text.length == 0) {
		$s.pop();
		return;
	}
	this.boxWidth = 0.0;
	var w;
	var _g = 0, _g1 = this.labels;
	while(_g < _g1.length) {
		var label = _g1[_g];
		++_g;
		if((w = label.getSize().width) > this.boxWidth) this.boxWidth = w;
	}
	this.boxWidth += this.paddingHorizontal * 2;
	this.boxHeight = this.lineHeight * this.labels.length + this.paddingVertical * 2;
	var bg = this.frame.selectAll(".bg"), sw = bg.style("stroke-width").getFloat();
	if(Math.isNaN(sw)) sw = 0;
	this.labelsContainer.attr("transform").string("translate(" + this.boxWidth / 2 + "," + (sw + this.paddingVertical) + ")");
	bg.transition().ease(this.ease).delay(null,this.duration);
	$s.pop();
}
rg.view.svg.widget.Balloon.prototype.__class__ = rg.view.svg.widget.Balloon;
if(!rg.view.svg.panel) rg.view.svg.panel = {}
rg.view.svg.panel.Panel = function(frame) {
	if( frame === $_ ) return;
	$s.push("rg.view.svg.panel.Panel::new");
	var $spos = $s.length;
	this.frame = frame;
	frame.change = $closure(this,"reframe");
	this._layers = [];
	$s.pop();
}
rg.view.svg.panel.Panel.__name__ = ["rg","view","svg","panel","Panel"];
rg.view.svg.panel.Panel.prototype.frame = null;
rg.view.svg.panel.Panel.prototype.g = null;
rg.view.svg.panel.Panel.prototype.parent = null;
rg.view.svg.panel.Panel.prototype._layers = null;
rg.view.svg.panel.Panel.prototype.addLayer = function(layer) {
	$s.push("rg.view.svg.panel.Panel::addLayer");
	var $spos = $s.length;
	this._layers.remove(layer);
	this._layers.push(layer);
	$s.pop();
}
rg.view.svg.panel.Panel.prototype.removeLayer = function(layer) {
	$s.push("rg.view.svg.panel.Panel::removeLayer");
	var $spos = $s.length;
	this._layers.remove(layer);
	$s.pop();
}
rg.view.svg.panel.Panel.prototype.setParent = function(container) {
	$s.push("rg.view.svg.panel.Panel::setParent");
	var $spos = $s.length;
	if(null != this.g) this.g.remove();
	this.parent = container;
	if(null == container) {
		$s.pop();
		return;
	}
	this.init(container.g);
	$s.pop();
}
rg.view.svg.panel.Panel.prototype.init = function(container) {
	$s.push("rg.view.svg.panel.Panel::init");
	var $spos = $s.length;
	this.g = container.append("svg:g").attr("class").string("panel").attr("transform").string("translate(" + this.frame.x + "," + this.frame.y + ")");
	this.g.append("svg:rect").attr("class").string("panel-frame").attr("width")["float"](this.frame.width).attr("height")["float"](this.frame.height);
	$s.pop();
}
rg.view.svg.panel.Panel.prototype.reframe = function() {
	$s.push("rg.view.svg.panel.Panel::reframe");
	var $spos = $s.length;
	this.g.attr("transform").string("translate(" + this.frame.x + "," + this.frame.y + ")").select("rect.panel-frame").attr("width")["float"](this.frame.width).attr("height")["float"](this.frame.height);
	var layer;
	var _g1 = 0, _g = this._layers.length;
	while(_g1 < _g) {
		var i = _g1++;
		layer = this._layers[i];
		layer._resize();
	}
	$s.pop();
}
rg.view.svg.panel.Panel.prototype.__class__ = rg.view.svg.panel.Panel;
rg.view.svg.panel.Container = function(frame,orientation) {
	if( frame === $_ ) return;
	$s.push("rg.view.svg.panel.Container::new");
	var $spos = $s.length;
	rg.view.svg.panel.Panel.call(this,frame);
	this.stack = new rg.view.frame.Stack(frame.width,frame.height,orientation);
	this.panels = [];
	$s.pop();
}
rg.view.svg.panel.Container.__name__ = ["rg","view","svg","panel","Container"];
rg.view.svg.panel.Container.__super__ = rg.view.svg.panel.Panel;
for(var k in rg.view.svg.panel.Panel.prototype ) rg.view.svg.panel.Container.prototype[k] = rg.view.svg.panel.Panel.prototype[k];
rg.view.svg.panel.Container.prototype.stack = null;
rg.view.svg.panel.Container.prototype.panels = null;
rg.view.svg.panel.Container.prototype.insertPanel = function(pos,panel) {
	$s.push("rg.view.svg.panel.Container::insertPanel");
	var $spos = $s.length;
	if(null == panel) {
		$s.pop();
		return this;
	}
	if(pos >= this.stack.getLength()) {
		var $tmp = this.addPanel(panel);
		$s.pop();
		return $tmp;
	} else if(pos < 0) pos = 0;
	if(null != panel.parent) panel.parent.removePanel(panel);
	this.panels.insert(pos,panel);
	var f = panel;
	f.setParent(this);
	this.stack.insertItem(pos,(function($this) {
		var $r;
		var $t = panel.frame;
		if(Std["is"]($t,rg.view.frame.StackItem)) $t; else throw "Class cast error";
		$r = $t;
		return $r;
	}(this)));
	$s.pop();
	return this;
	$s.pop();
}
rg.view.svg.panel.Container.prototype.addPanel = function(panel) {
	$s.push("rg.view.svg.panel.Container::addPanel");
	var $spos = $s.length;
	var $tmp = this.addPanels([panel]);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.panel.Container.prototype.addPanels = function(it) {
	$s.push("rg.view.svg.panel.Container::addPanels");
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
			if(Std["is"]($t,rg.view.frame.StackItem)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)));
	}
	this.stack.addItems(frames);
	$s.pop();
	return this;
	$s.pop();
}
rg.view.svg.panel.Container.prototype.removePanel = function(panel) {
	$s.push("rg.view.svg.panel.Container::removePanel");
	var $spos = $s.length;
	if(!this.panels.remove(panel)) {
		$s.pop();
		return this;
	}
	this.stack.removeChild((function($this) {
		var $r;
		var $t = panel.frame;
		if(Std["is"]($t,rg.view.frame.StackItem)) $t; else throw "Class cast error";
		$r = $t;
		return $r;
	}(this)));
	var f = panel;
	f.setParent(null);
	$s.pop();
	return this;
	$s.pop();
}
rg.view.svg.panel.Container.prototype.createPanel = function(layout) {
	$s.push("rg.view.svg.panel.Container::createPanel");
	var $spos = $s.length;
	var panel = new rg.view.svg.panel.Panel(new rg.view.frame.StackItem(layout));
	this.addPanel(panel);
	$s.pop();
	return panel;
	$s.pop();
}
rg.view.svg.panel.Container.prototype.createContainer = function(layout,orientation) {
	$s.push("rg.view.svg.panel.Container::createContainer");
	var $spos = $s.length;
	var panel = new rg.view.svg.panel.Container(new rg.view.frame.StackItem(layout),orientation);
	this.addPanel(panel);
	$s.pop();
	return panel;
	$s.pop();
}
rg.view.svg.panel.Container.prototype.createPanelAt = function(pos,layout) {
	$s.push("rg.view.svg.panel.Container::createPanelAt");
	var $spos = $s.length;
	var panel = new rg.view.svg.panel.Panel(new rg.view.frame.StackItem(layout));
	this.insertPanel(pos,panel);
	$s.pop();
	return panel;
	$s.pop();
}
rg.view.svg.panel.Container.prototype.createContainerAt = function(pos,layout,orientation) {
	$s.push("rg.view.svg.panel.Container::createContainerAt");
	var $spos = $s.length;
	var panel = new rg.view.svg.panel.Container(new rg.view.frame.StackItem(layout),orientation);
	this.insertPanel(pos,panel);
	$s.pop();
	return panel;
	$s.pop();
}
rg.view.svg.panel.Container.prototype.reframe = function() {
	$s.push("rg.view.svg.panel.Container::reframe");
	var $spos = $s.length;
	rg.view.svg.panel.Panel.prototype.reframe.call(this);
	this.stack.setSize(this.frame.width,this.frame.height);
	this.stack.reflow();
	$s.pop();
}
rg.view.svg.panel.Container.prototype.__class__ = rg.view.svg.panel.Container;
rg.view.svg.panel.Space = function(width,height,domcontainer) {
	if( width === $_ ) return;
	$s.push("rg.view.svg.panel.Space::new");
	var $spos = $s.length;
	this.panel = new rg.view.frame.StackItem(rg.view.frame.FrameLayout.Fill(0,0));
	rg.view.svg.panel.Container.call(this,this.panel,rg.view.frame.Orientation.Vertical);
	this.init(this.svg = domcontainer.append("svg:svg"));
	this.resize(width,height);
	$s.pop();
}
rg.view.svg.panel.Space.__name__ = ["rg","view","svg","panel","Space"];
rg.view.svg.panel.Space.__super__ = rg.view.svg.panel.Container;
for(var k in rg.view.svg.panel.Container.prototype ) rg.view.svg.panel.Space.prototype[k] = rg.view.svg.panel.Container.prototype[k];
rg.view.svg.panel.Space.prototype.panel = null;
rg.view.svg.panel.Space.prototype.svg = null;
rg.view.svg.panel.Space.prototype.resize = function(width,height) {
	$s.push("rg.view.svg.panel.Space::resize");
	var $spos = $s.length;
	if(this.panel.width == width && this.panel.height == height) {
		$s.pop();
		return;
	}
	this.svg.attr("width")["float"](width).attr("height")["float"](height);
	var sf = this.panel;
	sf.setLayout(0,0,width,height);
	$s.pop();
}
rg.view.svg.panel.Space.prototype.__class__ = rg.view.svg.panel.Space;
rg.controller.info.Info = function() { }
rg.controller.info.Info.__name__ = ["rg","controller","info","Info"];
rg.controller.info.Info.feed = function(info,o) {
	$s.push("rg.controller.info.Info::feed");
	var $spos = $s.length;
	var cl = Type.getClass(info), method = Reflect.field(cl,"filters");
	if(null == method) {
		Objects.copyTo(o,info);
		$s.pop();
		return info;
	}
	var filters = method.apply(cl,[]), value;
	var _g = 0;
	while(_g < filters.length) {
		var filter = filters[_g];
		++_g;
		if(Reflect.hasField(o,filter.field)) {
			if(null != filter.validator && !filter.validator(value = Reflect.field(o,filter.field))) throw new thx.error.Error("the parameter '{0}' can't have value '{1}'",[filter.field,value],null,{ fileName : "Info.hx", lineNumber : 29, className : "rg.controller.info.Info", methodName : "feed"});
			var items = null == filter.filter?[{ field : filter.field, value : value}]:filter.filter(value);
			var _g1 = 0;
			while(_g1 < items.length) {
				var item = items[_g1];
				++_g1;
				info[item.field] = item.value;
			}
		}
	}
	$s.pop();
	return info;
	$s.pop();
}
rg.controller.info.Info.prototype.__class__ = rg.controller.info.Info;
rg.controller.info.InfoVariable = function(p) {
	if( p === $_ ) return;
	$s.push("rg.controller.info.InfoVariable::new");
	var $spos = $s.length;
	this.variableType = rg.controller.info.VariableType.Unknown;
	$s.pop();
}
rg.controller.info.InfoVariable.__name__ = ["rg","controller","info","InfoVariable"];
rg.controller.info.InfoVariable.__super__ = rg.controller.info.Info;
for(var k in rg.controller.info.Info.prototype ) rg.controller.info.InfoVariable.prototype[k] = rg.controller.info.Info.prototype[k];
rg.controller.info.InfoVariable.filters = function() {
	$s.push("rg.controller.info.InfoVariable::filters");
	var $spos = $s.length;
	var $tmp = [{ field : "type", validator : function(v) {
		$s.push("rg.controller.info.InfoVariable::filters@32");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "view", validator : function(v) {
		$s.push("rg.controller.info.InfoVariable::filters@36");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Array) && rg.controller.info.InfoVariable.testViewValue(v[0]) && rg.controller.info.InfoVariable.testViewValue(v[1]);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoVariable::filters@37");
		var $spos = $s.length;
		var result = [];
		if(null != v[0]) result.push({ field : "min", value : v[0]});
		if(null != v[1]) result.push({ field : "max", value : v[1]});
		$s.pop();
		return result;
		$s.pop();
	}},{ field : "values", validator : function(v) {
		$s.push("rg.controller.info.InfoVariable::filters@47");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Array) && Iterators.all(v.iterator(),function(v1) {
			$s.push("rg.controller.info.InfoVariable::filters@47@47");
			var $spos = $s.length;
			var $tmp = Types.isPrimitive(v1);
			$s.pop();
			return $tmp;
			$s.pop();
		});
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "groupby", validator : function(v) {
		$s.push("rg.controller.info.InfoVariable::filters@51");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String) && rg.util.Periodicity.isValidGroupBy(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoVariable::filters@52");
		var $spos = $s.length;
		var $tmp = [{ field : "groupBy", value : v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "variable", validator : function(v) {
		$s.push("rg.controller.info.InfoVariable::filters@60");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String) && Arrays.exists(["independent","dependent"],v.toLowerCase());
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoVariable::filters@61");
		var $spos = $s.length;
		var $tmp = [{ field : "variableType", value : Type.createEnum(rg.controller.info.VariableType,Strings.ucfirst(("" + v).toLowerCase()),[])}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "scalemode", validator : function(v) {
		$s.push("rg.controller.info.InfoVariable::filters@70");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoVariable::filters@71");
		var $spos = $s.length;
		var $tmp = [{ field : "scaleDistribution", value : Type.createEnum(rg.data.ScaleDistribution,"Scale" + Strings.ucfirst(("" + v).toLowerCase()),[])}];
		$s.pop();
		return $tmp;
		$s.pop();
	}}];
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.controller.info.InfoVariable.testViewValue = function(v) {
	$s.push("rg.controller.info.InfoVariable::testViewValue");
	var $spos = $s.length;
	var $tmp = v == null || Types.isPrimitive(v) || Std["is"](v,Date);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.controller.info.InfoVariable.prototype.type = null;
rg.controller.info.InfoVariable.prototype.min = null;
rg.controller.info.InfoVariable.prototype.max = null;
rg.controller.info.InfoVariable.prototype.values = null;
rg.controller.info.InfoVariable.prototype.groupBy = null;
rg.controller.info.InfoVariable.prototype.variableType = null;
rg.controller.info.InfoVariable.prototype.scaleDistribution = null;
rg.controller.info.InfoVariable.prototype.__class__ = rg.controller.info.InfoVariable;
rg.controller.info.VariableType = { __ename__ : ["rg","controller","info","VariableType"], __constructs__ : ["Unknown","Independent","Dependent"] }
rg.controller.info.VariableType.Unknown = ["Unknown",0];
rg.controller.info.VariableType.Unknown.toString = $estr;
rg.controller.info.VariableType.Unknown.__enum__ = rg.controller.info.VariableType;
rg.controller.info.VariableType.Independent = ["Independent",1];
rg.controller.info.VariableType.Independent.toString = $estr;
rg.controller.info.VariableType.Independent.__enum__ = rg.controller.info.VariableType;
rg.controller.info.VariableType.Dependent = ["Dependent",2];
rg.controller.info.VariableType.Dependent.toString = $estr;
rg.controller.info.VariableType.Dependent.__enum__ = rg.controller.info.VariableType;
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
rg.data.VariableIndependentContext = function(variable,partial) {
	if( variable === $_ ) return;
	$s.push("rg.data.VariableIndependentContext::new");
	var $spos = $s.length;
	this.variable = variable;
	this.partial = partial;
	$s.pop();
}
rg.data.VariableIndependentContext.__name__ = ["rg","data","VariableIndependentContext"];
rg.data.VariableIndependentContext.prototype.partial = null;
rg.data.VariableIndependentContext.prototype.variable = null;
rg.data.VariableIndependentContext.prototype.__class__ = rg.data.VariableIndependentContext;
rg.view.svg.panel.Layer = function(panel) {
	if( panel === $_ ) return;
	$s.push("rg.view.svg.panel.Layer::new");
	var $spos = $s.length;
	this.frame = (this.panel = panel).frame;
	var p = panel;
	p.addLayer(this);
	this.g = panel.g.append("svg:g");
	this.g.attr("class").string("layer");
	this._resize();
	$s.pop();
}
rg.view.svg.panel.Layer.__name__ = ["rg","view","svg","panel","Layer"];
rg.view.svg.panel.Layer.prototype.panel = null;
rg.view.svg.panel.Layer.prototype.frame = null;
rg.view.svg.panel.Layer.prototype.g = null;
rg.view.svg.panel.Layer.prototype.width = null;
rg.view.svg.panel.Layer.prototype.height = null;
rg.view.svg.panel.Layer.prototype.customClass = null;
rg.view.svg.panel.Layer.prototype.addClass = function(name) {
	$s.push("rg.view.svg.panel.Layer::addClass");
	var $spos = $s.length;
	this.g.classed().add(name);
	$s.pop();
}
rg.view.svg.panel.Layer.prototype.removeClass = function(name) {
	$s.push("rg.view.svg.panel.Layer::removeClass");
	var $spos = $s.length;
	this.g.classed().remove(name);
	$s.pop();
}
rg.view.svg.panel.Layer.prototype.toggleClass = function(name) {
	$s.push("rg.view.svg.panel.Layer::toggleClass");
	var $spos = $s.length;
	this.g.classed().toggle(name);
	$s.pop();
}
rg.view.svg.panel.Layer.prototype._resize = function() {
	$s.push("rg.view.svg.panel.Layer::_resize");
	var $spos = $s.length;
	this.width = this.frame.width;
	this.height = this.frame.height;
	this.resize();
	$s.pop();
}
rg.view.svg.panel.Layer.prototype.resize = function() {
	$s.push("rg.view.svg.panel.Layer::resize");
	var $spos = $s.length;
	$s.pop();
}
rg.view.svg.panel.Layer.prototype.destroy = function() {
	$s.push("rg.view.svg.panel.Layer::destroy");
	var $spos = $s.length;
	var p = this.panel;
	p.removeLayer(this);
	this.g.remove();
	$s.pop();
}
rg.view.svg.panel.Layer.prototype.setCustomClass = function(v) {
	$s.push("rg.view.svg.panel.Layer::setCustomClass");
	var $spos = $s.length;
	if(null != this.customClass) this.g.classed().remove(this.customClass);
	this.g.classed().add(v);
	var $tmp = this.customClass = v;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.panel.Layer.prototype.__class__ = rg.view.svg.panel.Layer;
if(!rg.view.svg.chart) rg.view.svg.chart = {}
rg.view.svg.chart.Chart = function(panel) {
	if( panel === $_ ) return;
	$s.push("rg.view.svg.chart.Chart::new");
	var $spos = $s.length;
	rg.view.svg.panel.Layer.call(this,panel);
	this.animated = true;
	this.animationDuration = 1500;
	this.animationEase = thx.math.Equations.linear;
	$s.pop();
}
rg.view.svg.chart.Chart.__name__ = ["rg","view","svg","chart","Chart"];
rg.view.svg.chart.Chart.__super__ = rg.view.svg.panel.Layer;
for(var k in rg.view.svg.panel.Layer.prototype ) rg.view.svg.chart.Chart.prototype[k] = rg.view.svg.panel.Layer.prototype[k];
rg.view.svg.chart.Chart.prototype.animated = null;
rg.view.svg.chart.Chart.prototype.animationDuration = null;
rg.view.svg.chart.Chart.prototype.animationEase = null;
rg.view.svg.chart.Chart.prototype.click = null;
rg.view.svg.chart.Chart.prototype.labelDataPoint = null;
rg.view.svg.chart.Chart.prototype.labelDataPointOver = null;
rg.view.svg.chart.Chart.prototype.panelx = null;
rg.view.svg.chart.Chart.prototype.panely = null;
rg.view.svg.chart.Chart.prototype.tooltip = null;
rg.view.svg.chart.Chart.prototype.resize = function() {
	$s.push("rg.view.svg.chart.Chart::resize");
	var $spos = $s.length;
	var coords = rg.view.svg.panel.Panels.boundingBox(this.panel);
	this.panelx = coords.x;
	this.panely = coords.y;
	$s.pop();
}
rg.view.svg.chart.Chart.prototype.init = function() {
	$s.push("rg.view.svg.chart.Chart::init");
	var $spos = $s.length;
	if(null != this.labelDataPointOver) this.tooltip = new rg.view.svg.widget.Balloon(this.g);
	this.resize();
	$s.pop();
}
rg.view.svg.chart.Chart.prototype.moveTooltip = function(x,y,animated) {
	$s.push("rg.view.svg.chart.Chart::moveTooltip");
	var $spos = $s.length;
	this.tooltip.moveTo(this.panelx + x,this.panely + y,animated);
	$s.pop();
}
rg.view.svg.chart.Chart.prototype.__class__ = rg.view.svg.chart.Chart;
rg.view.svg.chart.CartesianChart = function(panel) {
	if( panel === $_ ) return;
	$s.push("rg.view.svg.chart.CartesianChart::new");
	var $spos = $s.length;
	rg.view.svg.chart.Chart.call(this,panel);
	$s.pop();
}
rg.view.svg.chart.CartesianChart.__name__ = ["rg","view","svg","chart","CartesianChart"];
rg.view.svg.chart.CartesianChart.__super__ = rg.view.svg.chart.Chart;
for(var k in rg.view.svg.chart.Chart.prototype ) rg.view.svg.chart.CartesianChart.prototype[k] = rg.view.svg.chart.Chart.prototype[k];
rg.view.svg.chart.CartesianChart.prototype.yVariables = null;
rg.view.svg.chart.CartesianChart.prototype.xVariable = null;
rg.view.svg.chart.CartesianChart.prototype.setVariables = function(variableIndependents,variableDependents) {
	$s.push("rg.view.svg.chart.CartesianChart::setVariables");
	var $spos = $s.length;
	this.xVariable = variableIndependents[0];
	this.yVariables = variableDependents;
	$s.pop();
}
rg.view.svg.chart.CartesianChart.prototype.data = function(dps) {
	$s.push("rg.view.svg.chart.CartesianChart::data");
	var $spos = $s.length;
	throw new thx.error.AbstractMethod({ fileName : "CartesianChart.hx", lineNumber : 38, className : "rg.view.svg.chart.CartesianChart", methodName : "data"});
	$s.pop();
}
rg.view.svg.chart.CartesianChart.prototype.__class__ = rg.view.svg.chart.CartesianChart;
rg.view.svg.chart.ScatterGraph = function(panel) {
	if( panel === $_ ) return;
	$s.push("rg.view.svg.chart.ScatterGraph::new");
	var $spos = $s.length;
	rg.view.svg.chart.CartesianChart.call(this,panel);
	this.addClass("scatter-graph");
	this.chart = this.g.append("svg:g");
	$s.pop();
}
rg.view.svg.chart.ScatterGraph.__name__ = ["rg","view","svg","chart","ScatterGraph"];
rg.view.svg.chart.ScatterGraph.__super__ = rg.view.svg.chart.CartesianChart;
for(var k in rg.view.svg.chart.CartesianChart.prototype ) rg.view.svg.chart.ScatterGraph.prototype[k] = rg.view.svg.chart.CartesianChart.prototype[k];
rg.view.svg.chart.ScatterGraph.prototype.symbol = null;
rg.view.svg.chart.ScatterGraph.prototype.symbolStyle = null;
rg.view.svg.chart.ScatterGraph.prototype.chart = null;
rg.view.svg.chart.ScatterGraph.prototype.dps = null;
rg.view.svg.chart.ScatterGraph.prototype.x = function(d,i) {
	$s.push("rg.view.svg.chart.ScatterGraph::x");
	var $spos = $s.length;
	var value = Reflect.field(d,this.xVariable.type), scaled = this.xVariable.axis.scale(this.xVariable.min,this.xVariable.max,value), scaledw = scaled * this.width;
	$s.pop();
	return scaledw;
	$s.pop();
}
rg.view.svg.chart.ScatterGraph.prototype.getY1 = function(pos) {
	$s.push("rg.view.svg.chart.ScatterGraph::getY1");
	var $spos = $s.length;
	var h = this.height, v = this.yVariables[pos];
	var $tmp = function(d,i) {
		$s.push("rg.view.svg.chart.ScatterGraph::getY1@57");
		var $spos = $s.length;
		var value = Reflect.field(d,v.type), scaled = v.axis.scale(v.min,v.max,value), scaledh = scaled * h;
		var $tmp = h - scaledh;
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.chart.ScatterGraph.prototype.classf = function(pos,cls) {
	$s.push("rg.view.svg.chart.ScatterGraph::classf");
	var $spos = $s.length;
	var $tmp = function(_,i) {
		$s.push("rg.view.svg.chart.ScatterGraph::classf@68");
		var $spos = $s.length;
		var $tmp = cls + " stroke-" + pos + " fill-" + pos;
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.chart.ScatterGraph.prototype.data = function(dps) {
	$s.push("rg.view.svg.chart.ScatterGraph::data");
	var $spos = $s.length;
	this.dps = dps;
	this.redraw();
	$s.pop();
}
rg.view.svg.chart.ScatterGraph.prototype.resize = function() {
	$s.push("rg.view.svg.chart.ScatterGraph::resize");
	var $spos = $s.length;
	rg.view.svg.chart.CartesianChart.prototype.resize.call(this);
	this.redraw();
	$s.pop();
}
rg.view.svg.chart.ScatterGraph.prototype.redraw = function() {
	$s.push("rg.view.svg.chart.ScatterGraph::redraw");
	var $spos = $s.length;
	var me = this;
	if(null == this.dps || null == this.dps[0] || null == this.dps[0][0]) {
		$s.pop();
		return;
	}
	var axisgroup = this.chart.selectAll("g.group").data(this.dps);
	var axisenter = axisgroup.enter().append("svg:g").attr("class").stringf(function(_,i) {
		$s.push("rg.view.svg.chart.ScatterGraph::redraw@92");
		var $spos = $s.length;
		var $tmp = "group group-" + i;
		$s.pop();
		return $tmp;
		$s.pop();
	});
	axisgroup.exit().remove();
	var _g1 = 0, _g = this.dps.length;
	while(_g1 < _g) {
		var i = _g1++;
		var data = this.dps[i], gi = this.chart.select("g.group-" + i), stats = [this.yVariables[i].stats];
		var gsymbol = gi.selectAll("g.symbol").data(data), vars = this.yVariables, onclick = ((function() {
			$s.push("rg.view.svg.chart.ScatterGraph::redraw@104");
			var $spos = $s.length;
			var $tmp = function(f,a1) {
				$s.push("rg.view.svg.chart.ScatterGraph::redraw@104@104");
				var $spos = $s.length;
				var $tmp = (function() {
					$s.push("rg.view.svg.chart.ScatterGraph::redraw@104@104@104");
					var $spos = $s.length;
					var $tmp = function(a2,a3) {
						$s.push("rg.view.svg.chart.ScatterGraph::redraw@104@104@104@104");
						var $spos = $s.length;
						var $tmp = f(a1,a2,a3);
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
		})())($closure(this,"onclick"),stats[0]), onmouseover = ((function() {
			$s.push("rg.view.svg.chart.ScatterGraph::redraw@105");
			var $spos = $s.length;
			var $tmp = function(f,a1) {
				$s.push("rg.view.svg.chart.ScatterGraph::redraw@105@105");
				var $spos = $s.length;
				var $tmp = (function() {
					$s.push("rg.view.svg.chart.ScatterGraph::redraw@105@105@105");
					var $spos = $s.length;
					var $tmp = function(a2,a3) {
						$s.push("rg.view.svg.chart.ScatterGraph::redraw@105@105@105@105");
						var $spos = $s.length;
						var $tmp = f(a1,a2,a3);
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
		})())($closure(this,"onmouseover"),stats[0]);
		var enter = gsymbol.enter().append("svg:g").attr("class").stringf(this.classf(i,"symbol")).attr("transform").stringf(this.getTranslatePointf(i));
		if(null != this.click) enter.on("click",onclick);
		if(null != this.labelDataPointOver) enter.onNode("mouseover",onmouseover);
		var spath = enter.append("svg:path").attr("d").stringf((function(stats) {
			$s.push("rg.view.svg.chart.ScatterGraph::redraw@118");
			var $spos = $s.length;
			var $tmp = function(dp,_) {
				$s.push("rg.view.svg.chart.ScatterGraph::redraw@118@118");
				var $spos = $s.length;
				var $tmp = me.symbol(dp,stats[0]);
				$s.pop();
				return $tmp;
				$s.pop();
			};
			$s.pop();
			return $tmp;
			$s.pop();
		})(stats));
		if(null != this.symbolStyle) spath.attr("style").stringf((function(stats) {
			$s.push("rg.view.svg.chart.ScatterGraph::redraw@121");
			var $spos = $s.length;
			var $tmp = function(dp,_) {
				$s.push("rg.view.svg.chart.ScatterGraph::redraw@121@121");
				var $spos = $s.length;
				var $tmp = me.symbolStyle(dp,stats[0]);
				$s.pop();
				return $tmp;
				$s.pop();
			};
			$s.pop();
			return $tmp;
			$s.pop();
		})(stats));
		if(null != this.labelDataPoint) {
			var f = [this.labelDataPoint];
			enter.eachNode((function(f,stats) {
				$s.push("rg.view.svg.chart.ScatterGraph::redraw@126");
				var $spos = $s.length;
				var $tmp = function(n,i1) {
					$s.push("rg.view.svg.chart.ScatterGraph::redraw@126@126");
					var $spos = $s.length;
					var dp = Reflect.field(n,"__data__"), label = new rg.view.svg.widget.Label(thx.js.Dom.selectNode(n),true,true,true);
					label.setText(f[0](dp,stats[0]));
					$s.pop();
				};
				$s.pop();
				return $tmp;
				$s.pop();
			})(f,stats));
		}
		gsymbol.update().selectAll("g.symbol").dataf((function() {
			$s.push("rg.view.svg.chart.ScatterGraph::redraw@135");
			var $spos = $s.length;
			var $tmp = function(d,i1) {
				$s.push("rg.view.svg.chart.ScatterGraph::redraw@135@135");
				var $spos = $s.length;
				$s.pop();
				return d;
				$s.pop();
			};
			$s.pop();
			return $tmp;
			$s.pop();
		})()).update().attr("transform").stringf(this.getTranslatePointf(i));
		gsymbol.exit().remove();
	}
	$s.pop();
}
rg.view.svg.chart.ScatterGraph.prototype.getTranslatePointf = function(pos) {
	$s.push("rg.view.svg.chart.ScatterGraph::getTranslatePointf");
	var $spos = $s.length;
	var x = $closure(this,"x"), y = this.getY1(pos);
	var $tmp = function(dp,i) {
		$s.push("rg.view.svg.chart.ScatterGraph::getTranslatePointf@148");
		var $spos = $s.length;
		var $tmp = "translate(" + x(dp) + "," + y(dp,i) + ")";
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.chart.ScatterGraph.prototype.onmouseover = function(stats,n,i) {
	$s.push("rg.view.svg.chart.ScatterGraph::onmouseover");
	var $spos = $s.length;
	var dp = Reflect.field(n,"__data__"), text = this.labelDataPointOver(dp,stats);
	if(null == text) this.tooltip.hide(); else {
		var sel = thx.js.Dom.selectNode(n), coords = rg.view.svg.chart.Coords.fromTransform(sel.attr("transform").get());
		this.tooltip.show();
		this.tooltip.setText(text.split("\n"));
		this.moveTooltip(coords[0],coords[1]);
	}
	$s.pop();
}
rg.view.svg.chart.ScatterGraph.prototype.onclick = function(stats,dp,i) {
	$s.push("rg.view.svg.chart.ScatterGraph::onclick");
	var $spos = $s.length;
	this.click(dp,stats);
	$s.pop();
}
rg.view.svg.chart.ScatterGraph.prototype.__class__ = rg.view.svg.chart.ScatterGraph;
rg.controller.info.InfoAnimation = function(p) {
	if( p === $_ ) return;
	$s.push("rg.controller.info.InfoAnimation::new");
	var $spos = $s.length;
	this.animated = false;
	this.duration = 1500;
	this.delay = 150;
	this.ease = thx.math.Equations.elasticf();
	$s.pop();
}
rg.controller.info.InfoAnimation.__name__ = ["rg","controller","info","InfoAnimation"];
rg.controller.info.InfoAnimation.filters = function() {
	$s.push("rg.controller.info.InfoAnimation::filters");
	var $spos = $s.length;
	var $tmp = [{ field : "animated", validator : function(v) {
		$s.push("rg.controller.info.InfoAnimation::filters@29");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Bool);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "duration", validator : function(v) {
		$s.push("rg.controller.info.InfoAnimation::filters@33");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Int);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "delay", validator : function(v) {
		$s.push("rg.controller.info.InfoAnimation::filters@37");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Int);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "ease", validator : function(v) {
		$s.push("rg.controller.info.InfoAnimation::filters@41");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null}];
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.controller.info.InfoAnimation.prototype.animated = null;
rg.controller.info.InfoAnimation.prototype.duration = null;
rg.controller.info.InfoAnimation.prototype.ease = null;
rg.controller.info.InfoAnimation.prototype.delay = null;
rg.controller.info.InfoAnimation.prototype.__class__ = rg.controller.info.InfoAnimation;
rg.controller.info.InfoDataSource = function(p) {
	$s.push("rg.controller.info.InfoDataSource::new");
	var $spos = $s.length;
	$s.pop();
}
rg.controller.info.InfoDataSource.__name__ = ["rg","controller","info","InfoDataSource"];
rg.controller.info.InfoDataSource.filters = function() {
	$s.push("rg.controller.info.InfoDataSource::filters");
	var $spos = $s.length;
	var $tmp = [{ field : "query", validator : function(v) {
		$s.push("rg.controller.info.InfoDataSource::filters@30");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "path", validator : function(v) {
		$s.push("rg.controller.info.InfoDataSource::filters@34");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "event", validator : function(v) {
		$s.push("rg.controller.info.InfoDataSource::filters@38");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "name", validator : function(v) {
		$s.push("rg.controller.info.InfoDataSource::filters@42");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "start", validator : function(v) {
		$s.push("rg.controller.info.InfoDataSource::filters@46");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Float);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "end", validator : function(v) {
		$s.push("rg.controller.info.InfoDataSource::filters@50");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Float);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "timezone", validator : function(v) {
		$s.push("rg.controller.info.InfoDataSource::filters@54");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoDataSource::filters@55");
		var $spos = $s.length;
		var $tmp = [{ field : "timeZone", value : v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "data", validator : function(v) {
		$s.push("rg.controller.info.InfoDataSource::filters@60");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String) || Std["is"](v,Array) && Iterators.all(v.iterator(),function(v1) {
			$s.push("rg.controller.info.InfoDataSource::filters@60@60");
			var $spos = $s.length;
			var $tmp = Reflect.isObject(v1) && null == Type.getClass(v1);
			$s.pop();
			return $tmp;
			$s.pop();
		});
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoDataSource::filters@61");
		var $spos = $s.length;
		if(Std["is"](v,Array)) {
			var $tmp = [{ field : "data", value : v}];
			$s.pop();
			return $tmp;
		} else {
			var $tmp = [{ field : "namedData", value : v}];
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}},{ field : "groupby", validator : function(v) {
		$s.push("rg.controller.info.InfoDataSource::filters@70");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String) && rg.util.Periodicity.isValid(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoDataSource::filters@71");
		var $spos = $s.length;
		var $tmp = [{ field : "groupBy", value : v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "groupfilter", validator : function(v) {
		$s.push("rg.controller.info.InfoDataSource::filters@77");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String) || Std["is"](v,Array);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoDataSource::filters@78");
		var $spos = $s.length;
		var $tmp = [{ field : "groups", value : Std["is"](v,String)?v.split(","):v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}}];
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.controller.info.InfoDataSource.prototype.query = null;
rg.controller.info.InfoDataSource.prototype.path = null;
rg.controller.info.InfoDataSource.prototype.event = null;
rg.controller.info.InfoDataSource.prototype.namedData = null;
rg.controller.info.InfoDataSource.prototype.data = null;
rg.controller.info.InfoDataSource.prototype.name = null;
rg.controller.info.InfoDataSource.prototype.groupBy = null;
rg.controller.info.InfoDataSource.prototype.timeZone = null;
rg.controller.info.InfoDataSource.prototype.groups = null;
rg.controller.info.InfoDataSource.prototype.start = null;
rg.controller.info.InfoDataSource.prototype.end = null;
rg.controller.info.InfoDataSource.prototype.__class__ = rg.controller.info.InfoDataSource;
rg.controller.info.InfoLabel = function(p) {
	$s.push("rg.controller.info.InfoLabel::new");
	var $spos = $s.length;
	$s.pop();
}
rg.controller.info.InfoLabel.__name__ = ["rg","controller","info","InfoLabel"];
rg.controller.info.InfoLabel.filters = function() {
	$s.push("rg.controller.info.InfoLabel::filters");
	var $spos = $s.length;
	var $tmp = [{ field : "title", validator : function(v) {
		$s.push("rg.controller.info.InfoLabel::filters@24");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String) || Reflect.isFunction(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoLabel::filters@25");
		var $spos = $s.length;
		var $tmp = [{ field : "title", value : Std["is"](v,String)?function() {
			$s.push("rg.controller.info.InfoLabel::filters@25@27");
			var $spos = $s.length;
			$s.pop();
			return v;
			$s.pop();
		}:v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "value", validator : function(v) {
		$s.push("rg.controller.info.InfoLabel::filters@31");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "datapoint", validator : function(v) {
		$s.push("rg.controller.info.InfoLabel::filters@35");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "datapointover", validator : function(v) {
		$s.push("rg.controller.info.InfoLabel::filters@39");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null}];
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.controller.info.InfoLabel.prototype.title = null;
rg.controller.info.InfoLabel.prototype.datapoint = null;
rg.controller.info.InfoLabel.prototype.datapointover = null;
rg.controller.info.InfoLabel.prototype.__class__ = rg.controller.info.InfoLabel;
rg.controller.info.InfoLabelFunnel = function(p) {
	if( p === $_ ) return;
	$s.push("rg.controller.info.InfoLabelFunnel::new");
	var $spos = $s.length;
	rg.controller.info.InfoLabel.call(this);
	$s.pop();
}
rg.controller.info.InfoLabelFunnel.__name__ = ["rg","controller","info","InfoLabelFunnel"];
rg.controller.info.InfoLabelFunnel.__super__ = rg.controller.info.InfoLabel;
for(var k in rg.controller.info.InfoLabel.prototype ) rg.controller.info.InfoLabelFunnel.prototype[k] = rg.controller.info.InfoLabel.prototype[k];
rg.controller.info.InfoLabelFunnel.filters = function() {
	$s.push("rg.controller.info.InfoLabelFunnel::filters");
	var $spos = $s.length;
	var $tmp = [{ field : "arrow", validator : function(v) {
		$s.push("rg.controller.info.InfoLabelFunnel::filters@19");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null}].concat(rg.controller.info.InfoLabel.filters());
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.controller.info.InfoLabelFunnel.prototype.arrow = null;
rg.controller.info.InfoLabelFunnel.prototype.__class__ = rg.controller.info.InfoLabelFunnel;
if(!rg.view.frame) rg.view.frame = {}
rg.view.frame.FrameLayout = { __ename__ : ["rg","view","frame","FrameLayout"], __constructs__ : ["Fill","FillPercent","FillRatio","Fixed","Floating"] }
rg.view.frame.FrameLayout.Fill = function(before,after,min,max) { var $x = ["Fill",0,before,after,min,max]; $x.__enum__ = rg.view.frame.FrameLayout; $x.toString = $estr; return $x; }
rg.view.frame.FrameLayout.FillPercent = function(before,after,percent,min,max) { var $x = ["FillPercent",1,before,after,percent,min,max]; $x.__enum__ = rg.view.frame.FrameLayout; $x.toString = $estr; return $x; }
rg.view.frame.FrameLayout.FillRatio = function(before,after,ratio) { var $x = ["FillRatio",2,before,after,ratio]; $x.__enum__ = rg.view.frame.FrameLayout; $x.toString = $estr; return $x; }
rg.view.frame.FrameLayout.Fixed = function(before,after,size) { var $x = ["Fixed",3,before,after,size]; $x.__enum__ = rg.view.frame.FrameLayout; $x.toString = $estr; return $x; }
rg.view.frame.FrameLayout.Floating = function(x,y,width,height) { var $x = ["Floating",4,x,y,width,height]; $x.__enum__ = rg.view.frame.FrameLayout; $x.toString = $estr; return $x; }
if(!thx.math) thx.math = {}
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
if(!rg.controller.factory) rg.controller.factory = {}
rg.controller.factory.FactoryAxis = function(p) {
	$s.push("rg.controller.factory.FactoryAxis::new");
	var $spos = $s.length;
	$s.pop();
}
rg.controller.factory.FactoryAxis.__name__ = ["rg","controller","factory","FactoryAxis"];
rg.controller.factory.FactoryAxis.prototype.create = function(type,isnumeric,samples) {
	$s.push("rg.controller.factory.FactoryAxis::create");
	var $spos = $s.length;
	if(null != samples) {
		var $tmp = new rg.data.AxisOrdinal(samples);
		$s.pop();
		return $tmp;
	} else if(isnumeric) {
		var $tmp = new rg.data.AxisNumeric();
		$s.pop();
		return $tmp;
	} else {
		$s.pop();
		return null;
	}
	$s.pop();
}
rg.controller.factory.FactoryAxis.prototype.createDiscrete = function(type,samples,groupBy) {
	$s.push("rg.controller.factory.FactoryAxis::createDiscrete");
	var $spos = $s.length;
	if(rg.util.Properties.isTime(type)) {
		if(null != groupBy) {
			var $tmp = new rg.data.AxisGroupByTime(rg.util.Properties.periodicity(type));
			$s.pop();
			return $tmp;
		} else {
			var $tmp = new rg.data.AxisTime(rg.util.Properties.periodicity(type));
			$s.pop();
			return $tmp;
		}
	} else {
		var $tmp = new rg.data.AxisOrdinal(samples);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
rg.controller.factory.FactoryAxis.prototype.__class__ = rg.controller.factory.FactoryAxis;
rg.controller.factory.AxisHint = { __ename__ : ["rg","controller","factory","AxisHint"], __constructs__ : ["Unknown","Numeric","Samples"] }
rg.controller.factory.AxisHint.Unknown = ["Unknown",0];
rg.controller.factory.AxisHint.Unknown.toString = $estr;
rg.controller.factory.AxisHint.Unknown.__enum__ = rg.controller.factory.AxisHint;
rg.controller.factory.AxisHint.Numeric = ["Numeric",1];
rg.controller.factory.AxisHint.Numeric.toString = $estr;
rg.controller.factory.AxisHint.Numeric.__enum__ = rg.controller.factory.AxisHint;
rg.controller.factory.AxisHint.Samples = function(values) { var $x = ["Samples",2,values]; $x.__enum__ = rg.controller.factory.AxisHint; $x.toString = $estr; return $x; }
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
if(!thx.math.scale) thx.math.scale = {}
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
rg.view.svg.widget.LabelOrientations = function() { }
rg.view.svg.widget.LabelOrientations.__name__ = ["rg","view","svg","widget","LabelOrientations"];
rg.view.svg.widget.LabelOrientations.parse = function(s) {
	$s.push("rg.view.svg.widget.LabelOrientations::parse");
	var $spos = $s.length;
	var $tmp = (function($this) {
		var $r;
		switch(s.toLowerCase()) {
		case "ortho":case "orthogonal":
			$r = rg.view.svg.widget.LabelOrientation.Orthogonal;
			break;
		default:
			$r = rg.view.svg.widget.LabelOrientation.Aligned;
		}
		return $r;
	}(this));
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.widget.LabelOrientations.prototype.__class__ = rg.view.svg.widget.LabelOrientations;
rg.data.IAxisOrdinal = function() { }
rg.data.IAxisOrdinal.__name__ = ["rg","data","IAxisOrdinal"];
rg.data.IAxisOrdinal.prototype.first = null;
rg.data.IAxisOrdinal.prototype.last = null;
rg.data.IAxisOrdinal.prototype.allTicks = null;
rg.data.IAxisOrdinal.prototype.values = null;
rg.data.IAxisOrdinal.prototype.__class__ = rg.data.IAxisOrdinal;
rg.data.IAxisOrdinal.__interfaces__ = [rg.data.IAxisDiscrete];
rg.data.AxisOrdinal = function(arr,set) {
	if( arr === $_ ) return;
	$s.push("rg.data.AxisOrdinal::new");
	var $spos = $s.length;
	if(null != arr) this.setValues(thx.collection.Set.ofArray(arr)); else if(null != set) this.setValues(set); else this.setValues(new thx.collection.Set());
	this.setScaleDistribution(rg.data.ScaleDistribution.ScaleFit);
	$s.pop();
}
rg.data.AxisOrdinal.__name__ = ["rg","data","AxisOrdinal"];
rg.data.AxisOrdinal.prototype.first = null;
rg.data.AxisOrdinal.prototype.last = null;
rg.data.AxisOrdinal.prototype.values = null;
rg.data.AxisOrdinal.prototype.allTicks = null;
rg.data.AxisOrdinal.prototype.scaleDistribution = null;
rg.data.AxisOrdinal.prototype.toTickmark = function(start,end,value) {
	$s.push("rg.data.AxisOrdinal::toTickmark");
	var $spos = $s.length;
	var r = this.range(start,end);
	var $tmp = new rg.data.TickmarkOrdinal(r.indexOf(value),r,null,this.scaleDistribution);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.AxisOrdinal.prototype.ticks = function(start,end,upperBound) {
	$s.push("rg.data.AxisOrdinal::ticks");
	var $spos = $s.length;
	if(0 == upperBound) {
		var $tmp = [];
		$s.pop();
		return $tmp;
	}
	var ticks = rg.data.TickmarkOrdinal.fromArray(this.range(start,end),this.scaleDistribution);
	var $tmp = rg.data.Tickmarks.bound(ticks,upperBound);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.AxisOrdinal.prototype.range = function(start,end) {
	$s.push("rg.data.AxisOrdinal::range");
	var $spos = $s.length;
	var s = this.getValues()._v.indexOf(start), e = this.getValues()._v.indexOf(end);
	if(s < 0) throw new thx.error.Error("the start bound '{0}' is not part of the acceptable values {1}",[start,this.getValues()],null,{ fileName : "AxisOrdinal.hx", lineNumber : 53, className : "rg.data.AxisOrdinal", methodName : "range"});
	if(e < 0) throw new thx.error.Error("the end bound '{0}' is not part of the acceptable values {1}",[end,this.getValues()],null,{ fileName : "AxisOrdinal.hx", lineNumber : 55, className : "rg.data.AxisOrdinal", methodName : "range"});
	var $tmp = this.getValues().array().slice(s,e + 1);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.AxisOrdinal.prototype.scale = function(start,end,v) {
	$s.push("rg.data.AxisOrdinal::scale");
	var $spos = $s.length;
	var s = this.getValues()._v.indexOf(start), e = this.getValues()._v.indexOf(end), p = this.getValues()._v.indexOf(v);
	if(s < 0) throw new thx.error.Error("the start bound '{0}' is not part of the values {1}",[start,this.getValues()],null,{ fileName : "AxisOrdinal.hx", lineNumber : 65, className : "rg.data.AxisOrdinal", methodName : "scale"});
	if(e < 0) throw new thx.error.Error("the end bound '{0}' is not part of the values {1}",[end,this.getValues()],null,{ fileName : "AxisOrdinal.hx", lineNumber : 67, className : "rg.data.AxisOrdinal", methodName : "scale"});
	if(p < 0) throw new thx.error.Error("the value '{0}' is not part of the values {1}",[v,this.getValues()],null,{ fileName : "AxisOrdinal.hx", lineNumber : 69, className : "rg.data.AxisOrdinal", methodName : "scale"});
	var $tmp = rg.data.ScaleDistributions.distribute(this.scaleDistribution,p - s,e - s + 1);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.AxisOrdinal.prototype.getFirst = function() {
	$s.push("rg.data.AxisOrdinal::getFirst");
	var $spos = $s.length;
	var $tmp = this.getValues()._v[0];
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.AxisOrdinal.prototype.getLast = function() {
	$s.push("rg.data.AxisOrdinal::getLast");
	var $spos = $s.length;
	var $tmp = Arrays.last(this.getValues()._v);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.AxisOrdinal.prototype.getValues = function() {
	$s.push("rg.data.AxisOrdinal::getValues");
	var $spos = $s.length;
	var $tmp = this.values;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.AxisOrdinal.prototype.setValues = function(v) {
	$s.push("rg.data.AxisOrdinal::setValues");
	var $spos = $s.length;
	var $tmp = this.values = v;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.AxisOrdinal.prototype.getAllTicks = function() {
	$s.push("rg.data.AxisOrdinal::getAllTicks");
	var $spos = $s.length;
	var t = $closure(this,"toTickmark"), f = this.getFirst(), l = this.getLast();
	var $tmp = this.range(f,l).map(function(d,i) {
		$s.push("rg.data.AxisOrdinal::getAllTicks@82");
		var $spos = $s.length;
		var $tmp = t(f,l,d);
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.AxisOrdinal.prototype.setScaleDistribution = function(v) {
	$s.push("rg.data.AxisOrdinal::setScaleDistribution");
	var $spos = $s.length;
	var $tmp = this.scaleDistribution = v;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.AxisOrdinal.prototype.__class__ = rg.data.AxisOrdinal;
rg.data.AxisOrdinal.__interfaces__ = [rg.data.IAxisOrdinal];
rg.controller.info.InfoVisualizationType = function(p) {
	if( p === $_ ) return;
	$s.push("rg.controller.info.InfoVisualizationType::new");
	var $spos = $s.length;
	this.replace = true;
	$s.pop();
}
rg.controller.info.InfoVisualizationType.__name__ = ["rg","controller","info","InfoVisualizationType"];
rg.controller.info.InfoVisualizationType.filters = function() {
	$s.push("rg.controller.info.InfoVisualizationType::filters");
	var $spos = $s.length;
	var $tmp = [{ field : "visualization", validator : function(v) {
		$s.push("rg.controller.info.InfoVisualizationType::filters@21");
		var $spos = $s.length;
		var $tmp = Arrays.exists(rg.controller.Visualizations.visualizations,v.toLowerCase());
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoVisualizationType::filters@22");
		var $spos = $s.length;
		var $tmp = [{ value : v.toLowerCase(), field : "type"}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "replace", validator : function(v) {
		$s.push("rg.controller.info.InfoVisualizationType::filters@28");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Bool);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filtern : null}];
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.controller.info.InfoVisualizationType.prototype.replace = null;
rg.controller.info.InfoVisualizationType.prototype.type = null;
rg.controller.info.InfoVisualizationType.prototype.__class__ = rg.controller.info.InfoVisualizationType;
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
thx.js.Group.current = null;
thx.js.Group.prototype.parentNode = null;
thx.js.Group.prototype.nodes = null;
thx.js.Group.prototype.each = function(f) {
	$s.push("thx.js.Group::each");
	var $spos = $s.length;
	var _g1 = 0, _g = this.nodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(null != this.nodes[i]) f(thx.js.Group.current = this.nodes[i],i);
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
		$s.push("thx.js.BaseSelection::select@364");
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
		$s.push("thx.js.BaseSelection::selectAll@371");
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
		$s.push("thx.js.BaseSelection::append@382");
		var $spos = $s.length;
		var n = js.Lib.document.createElement(name);
		node.appendChild(n);
		$s.pop();
		return n;
		$s.pop();
	};
	var appendNS = function(node) {
		$s.push("thx.js.BaseSelection::append@389");
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
		$s.push("thx.js.BaseSelection::remove@401");
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
		$s.push("thx.js.BaseSelection::insert@418");
		var $spos = $s.length;
		var n = js.Lib.document.createElement(name);
		node.insertBefore(n,null != before?before:thx.js.Dom.select(beforeSelector).node());
		$s.pop();
		return n;
		$s.pop();
	};
	var insertNsDom = function(node) {
		$s.push("thx.js.BaseSelection::insert@424");
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
		$s.push("thx.js.BaseSelection::node@468");
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
		$s.push("thx.js.BaseSelection::empty@473");
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
		$s.push("thx.js.BaseSelection::onNode@503");
		var $spos = $s.length;
		var l = function(e) {
			$s.push("thx.js.BaseSelection::onNode@503@504");
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
thx.js.Selection.current = null;
thx.js.Selection.create = function(groups) {
	$s.push("thx.js.Selection::create");
	var $spos = $s.length;
	var $tmp = new thx.js.Selection(groups);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.Selection.getCurrent = function() {
	$s.push("thx.js.Selection::getCurrent");
	var $spos = $s.length;
	var $tmp = thx.js.Dom.selectNode(thx.js.Group.current);
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
rg.data.Tickmarks = function() { }
rg.data.Tickmarks.__name__ = ["rg","data","Tickmarks"];
rg.data.Tickmarks.bound = function(tickmarks,max) {
	$s.push("rg.data.Tickmarks::bound");
	var $spos = $s.length;
	if(null == max || tickmarks.length <= (2 > max?2:max)) {
		$s.pop();
		return tickmarks;
	}
	var majors = Arrays.filter(tickmarks,function(d) {
		$s.push("rg.data.Tickmarks::bound@16");
		var $spos = $s.length;
		var $tmp = d.getMajor();
		$s.pop();
		return $tmp;
		$s.pop();
	});
	if(majors.length > max) {
		var $tmp = rg.data.Tickmarks.reduce(majors,max);
		$s.pop();
		return $tmp;
	}
	var result = rg.data.Tickmarks.reduce(Arrays.filter(tickmarks,function(d) {
		$s.push("rg.data.Tickmarks::bound@19");
		var $spos = $s.length;
		var $tmp = !d.getMajor();
		$s.pop();
		return $tmp;
		$s.pop();
	}),max - majors.length).concat(majors);
	result.sort(function(a,b) {
		$s.push("rg.data.Tickmarks::bound@20");
		var $spos = $s.length;
		var $tmp = Floats.compare(a.getDelta(),b.getDelta());
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return result;
	$s.pop();
}
rg.data.Tickmarks.reduce = function(arr,max) {
	$s.push("rg.data.Tickmarks::reduce");
	var $spos = $s.length;
	if(max == 1) {
		var $tmp = [arr[0]];
		$s.pop();
		return $tmp;
	}
	if(max == 2) {
		var $tmp = [arr[arr.length - 1]];
		$s.pop();
		return $tmp;
	}
	var keep = arr.length / max, result = [], i = 0;
	do result.push(arr[Math.round(keep * i++)]); while(max > result.length);
	$s.pop();
	return result;
	$s.pop();
}
rg.data.Tickmarks.string = function(tick) {
	$s.push("rg.data.Tickmarks::string");
	var $spos = $s.length;
	var $tmp = Dynamics.string(tick.getValue()) + " (" + (tick.getMajor()?"Major":"minor") + ", " + Floats.format(tick.getDelta()) + ")";
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.Tickmarks.forFloat = function(start,end,value,major) {
	$s.push("rg.data.Tickmarks::forFloat");
	var $spos = $s.length;
	var $tmp = new rg.data.Tickmark(value,major,(value - start) / (end - start));
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.Tickmarks.prototype.__class__ = rg.data.Tickmarks;
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
if(!rg.view.html) rg.view.html = {}
if(!rg.view.html.widget) rg.view.html.widget = {}
rg.view.html.widget.PivotTable = function(container) {
	if( container === $_ ) return;
	$s.push("rg.view.html.widget.PivotTable::new");
	var $spos = $s.length;
	this.container = container;
	this.displayColumnTotal = true;
	this.displayRowTotal = true;
	this.displayHeatMap = true;
	this.colorStart = rg.view.html.widget.PivotTable.defaultColorStart;
	this.colorEnd = rg.view.html.widget.PivotTable.defaultColorEnd;
	this.incolumns = 1;
	$s.pop();
}
rg.view.html.widget.PivotTable.__name__ = ["rg","view","html","widget","PivotTable"];
rg.view.html.widget.PivotTable.prototype.displayColumnTotal = null;
rg.view.html.widget.PivotTable.prototype.displayRowTotal = null;
rg.view.html.widget.PivotTable.prototype.displayHeatMap = null;
rg.view.html.widget.PivotTable.prototype.colorStart = null;
rg.view.html.widget.PivotTable.prototype.colorEnd = null;
rg.view.html.widget.PivotTable.prototype.columnVariables = null;
rg.view.html.widget.PivotTable.prototype.rowVariables = null;
rg.view.html.widget.PivotTable.prototype.cellVariable = null;
rg.view.html.widget.PivotTable.prototype.incolumns = null;
rg.view.html.widget.PivotTable.prototype.click = null;
rg.view.html.widget.PivotTable.prototype.container = null;
rg.view.html.widget.PivotTable.prototype.stats = null;
rg.view.html.widget.PivotTable.prototype.labelDataPoint = function(dp,stats) {
	$s.push("rg.view.html.widget.PivotTable::labelDataPoint");
	var $spos = $s.length;
	var v = Reflect.field(dp,this.cellVariable.type);
	var $tmp = thx.culture.FormatNumber["int"](v);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.html.widget.PivotTable.prototype.labelDataPointOver = function(dp,stats) {
	$s.push("rg.view.html.widget.PivotTable::labelDataPointOver");
	var $spos = $s.length;
	var v = Reflect.field(dp,this.cellVariable.type);
	var $tmp = thx.culture.FormatNumber.percent(100 * v / stats.tot,1);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.html.widget.PivotTable.prototype.labelAxis = function(v) {
	$s.push("rg.view.html.widget.PivotTable::labelAxis");
	var $spos = $s.length;
	var $tmp = rg.util.Properties.humanize(v);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.html.widget.PivotTable.prototype.labelAxisValue = function(v,axis) {
	$s.push("rg.view.html.widget.PivotTable::labelAxisValue");
	var $spos = $s.length;
	if(rg.util.Properties.isTime(axis)) {
		var p = rg.util.Properties.periodicity(axis);
		var $tmp = rg.util.Periodicity.format(p,v);
		$s.pop();
		return $tmp;
	} else {
		var $tmp = rg.util.RGStrings.humanize(v);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
rg.view.html.widget.PivotTable.prototype.labelTotal = function(v,stats) {
	$s.push("rg.view.html.widget.PivotTable::labelTotal");
	var $spos = $s.length;
	var $tmp = thx.culture.FormatNumber["int"](v);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.html.widget.PivotTable.prototype.labelTotalOver = function(v,stats) {
	$s.push("rg.view.html.widget.PivotTable::labelTotalOver");
	var $spos = $s.length;
	var $tmp = thx.culture.FormatNumber.percent(100 * v / stats.tot,1);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.html.widget.PivotTable.prototype.data = function(dps) {
	$s.push("rg.view.html.widget.PivotTable::data");
	var $spos = $s.length;
	var d = this.transformData(dps), table = this.container.append("table").classed().add("pivot-table"), thead = table.append("thead"), leftspan = d.rows.length > 0?d.rows[0].values.length:0, color = thx.color.Rgb.interpolatef(this.colorStart,this.colorEnd);
	this.stats = d.stats;
	if(d.columns.length > 0) {
		var _g1 = 0, _g = d.column_headers.length;
		while(_g1 < _g) {
			var i = _g1++;
			var tr = thead.append("tr");
			this.prependSpacer(leftspan,tr);
			var header = tr.append("th").attr("class").string("col-header").text().string(this.labelAxis(d.column_headers[i]));
			if(d.columns.length > 1) header.attr("colspan")["float"](d.columns.length);
			var counter = 1, last = d.columns[0].values[i];
			tr = thead.append("tr");
			if(i == d.column_headers.length - 1) {
				var _g2 = 0, _g3 = d.row_headers;
				while(_g2 < _g3.length) {
					var h = _g3[_g2];
					++_g2;
					tr.append("th").attr("class").string("row-header").text().string(this.labelAxis(h));
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
			tr.append("th").attr("class").string(rep?"row value empty":"row value").text().string(rep?"":this.labelAxisValue(v,d.row_headers[i]));
		}
		var _g2 = 0, _g3 = row.cells;
		while(_g2 < _g3.length) {
			var cell = _g3[_g2];
			++_g2;
			var td = tr.append("td").text().string(this.formatDataPoint(cell)).attr("title").string(this.formatDataPointOver(cell));
			if(null != this.click) td.onNode("click",(function(f,a1) {
				$s.push("rg.view.html.widget.PivotTable::data@195");
				var $spos = $s.length;
				var $tmp = function(a2,a3) {
					$s.push("rg.view.html.widget.PivotTable::data@195@195");
					var $spos = $s.length;
					var $tmp = f(a1,a2,a3);
					$s.pop();
					return $tmp;
					$s.pop();
				};
				$s.pop();
				return $tmp;
				$s.pop();
			})($closure(this,"onClick"),cell));
			if(this.displayHeatMap) {
				var c = color(Reflect.field(cell,this.cellVariable.type) / d.stats.max);
				td.style("background-color").color(c).style("color").color(thx.color.Rgb.contrastBW(c));
			}
		}
		if(this.displayRowTotal && d.columns.length > 1) tr.append("th").attr("class").string("row total").text().string(this.formatTotal(row.stats.tot)).attr("title").string(this.formatTotalOver(row.stats.tot));
	}
	var tfoot = table.append("tfoot");
	if(this.displayColumnTotal && d.rows.length > 1) {
		var tr = tfoot.append("tr");
		this.prependSpacer(leftspan,tr);
		var _g = 0, _g1 = d.columns;
		while(_g < _g1.length) {
			var col = _g1[_g];
			++_g;
			tr.append("th").attr("class").string("column total").text().string(this.formatTotal(col.stats.tot)).attr("title").string(this.formatTotalOver(col.stats.tot));
		}
		if(this.displayRowTotal && d.columns.length > 1) tr.append("th").attr("class").string("table total").text().string(this.formatTotal(d.stats.tot)).attr("title").string(this.formatTotalOver(d.stats.tot));
	}
	$s.pop();
}
rg.view.html.widget.PivotTable.prototype.onClick = function(dp,_,_1) {
	$s.push("rg.view.html.widget.PivotTable::onClick");
	var $spos = $s.length;
	this.click(dp);
	$s.pop();
}
rg.view.html.widget.PivotTable.prototype.formatTotal = function(v,_) {
	$s.push("rg.view.html.widget.PivotTable::formatTotal");
	var $spos = $s.length;
	var $tmp = this.labelTotal(v,this.stats);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.html.widget.PivotTable.prototype.formatTotalOver = function(v,_) {
	$s.push("rg.view.html.widget.PivotTable::formatTotalOver");
	var $spos = $s.length;
	var $tmp = this.labelTotalOver(v,this.stats);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.html.widget.PivotTable.prototype.formatDataPoint = function(dp,_) {
	$s.push("rg.view.html.widget.PivotTable::formatDataPoint");
	var $spos = $s.length;
	var $tmp = this.labelDataPoint(dp,this.stats);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.html.widget.PivotTable.prototype.formatDataPointOver = function(dp,_) {
	$s.push("rg.view.html.widget.PivotTable::formatDataPointOver");
	var $spos = $s.length;
	var $tmp = this.labelDataPointOver(dp,this.stats);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.html.widget.PivotTable.prototype.buildValue = function(value,header,counter,tr) {
	$s.push("rg.view.html.widget.PivotTable::buildValue");
	var $spos = $s.length;
	var th = tr.append("th").attr("class").string("column value").text().string(this.labelAxisValue(value,header));
	if(counter > 1) th.attr("colspan")["float"](counter);
	$s.pop();
}
rg.view.html.widget.PivotTable.prototype.prependSpacer = function(counter,tr) {
	$s.push("rg.view.html.widget.PivotTable::prependSpacer");
	var $spos = $s.length;
	if(counter == 0) {
		$s.pop();
		return;
	}
	var th = tr.append("th").attr("class").string("spacer");
	if(counter > 1) th.attr("colspan")["float"](counter);
	$s.pop();
}
rg.view.html.widget.PivotTable.prototype.init = function() {
	$s.push("rg.view.html.widget.PivotTable::init");
	var $spos = $s.length;
	$s.pop();
}
rg.view.html.widget.PivotTable.prototype.setVariables = function(variableIndependents,variableDependents) {
	$s.push("rg.view.html.widget.PivotTable::setVariables");
	var $spos = $s.length;
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
	$s.pop();
}
rg.view.html.widget.PivotTable.prototype.destroy = function() {
	$s.push("rg.view.html.widget.PivotTable::destroy");
	var $spos = $s.length;
	this.container.html().string("");
	$s.pop();
}
rg.view.html.widget.PivotTable.prototype.transformData = function(dps) {
	$s.push("rg.view.html.widget.PivotTable::transformData");
	var $spos = $s.length;
	var column_headers = [], row_headers = [], columns = [], rows = [], tcalc = new rg.data.StatsNumeric();
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
			columns.push({ values : [value], stats : null});
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
		var column = [columns[i]], ccalc = new rg.data.StatsNumeric();
		column[0].stats = ccalc;
		var _g2 = 0, _g3 = Arrays.filter(dps,(function(column) {
			$s.push("rg.view.html.widget.PivotTable::transformData@378");
			var $spos = $s.length;
			var $tmp = function(dp) {
				$s.push("rg.view.html.widget.PivotTable::transformData@378@378");
				var $spos = $s.length;
				var _g3 = 0, _g21 = headers.length;
				while(_g3 < _g21) {
					var j = _g3++;
					name = headers[j];
					if(Reflect.field(dp,name) != column[0].values[j]) {
						$s.pop();
						return false;
					}
				}
				$s.pop();
				return true;
				$s.pop();
			};
			$s.pop();
			return $tmp;
			$s.pop();
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
	var _g = 0;
	while(_g < rows.length) {
		var row = [rows[_g]];
		++_g;
		row[0].stats = new rg.data.StatsNumeric();
		row[0].cells = [];
		var rdps = Arrays.filter(dps,(function(row) {
			$s.push("rg.view.html.widget.PivotTable::transformData@451");
			var $spos = $s.length;
			var $tmp = function(d) {
				$s.push("rg.view.html.widget.PivotTable::transformData@451@451");
				var $spos = $s.length;
				var _g2 = 0, _g1 = headers1.length;
				while(_g2 < _g1) {
					var j = _g2++;
					name1 = headers1[j];
					if(Reflect.field(d,name1) != row[0].values[j]) {
						$s.pop();
						return false;
					}
				}
				$s.pop();
				return true;
				$s.pop();
			};
			$s.pop();
			return $tmp;
			$s.pop();
		})(row));
		var _g1 = 0;
		while(_g1 < columns.length) {
			var column = [columns[_g1]];
			++_g1;
			var dp = Arrays.firstf(rdps,(function(column) {
				$s.push("rg.view.html.widget.PivotTable::transformData@463");
				var $spos = $s.length;
				var $tmp = function(dp) {
					$s.push("rg.view.html.widget.PivotTable::transformData@463@463");
					var $spos = $s.length;
					var _g3 = 0, _g2 = column[0].values.length;
					while(_g3 < _g2) {
						var i = _g3++;
						if(Reflect.field(dp,column_headers[i]) != column[0].values[i]) {
							$s.pop();
							return false;
						}
					}
					$s.pop();
					return true;
					$s.pop();
				};
				$s.pop();
				return $tmp;
				$s.pop();
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
	var $tmp = { column_headers : column_headers, row_headers : row_headers, columns : columns, rows : rows, stats : tcalc};
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.html.widget.PivotTable.prototype.range = function(variable) {
	$s.push("rg.view.html.widget.PivotTable::range");
	var $spos = $s.length;
	var $tmp = variable.axis.range(variable.min,variable.max);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.html.widget.PivotTable.prototype.__class__ = rg.view.html.widget.PivotTable;
rg.view.svg.chart.BarChart = function(panel) {
	if( panel === $_ ) return;
	$s.push("rg.view.svg.chart.BarChart::new");
	var $spos = $s.length;
	rg.view.svg.chart.CartesianChart.call(this,panel);
	this.addClass("bar-chart");
	this.defs = this.g.append("svg:defs");
	this.chart = this.g.append("svg:g");
	this.gradientLightness = 1.4;
	this.displayGradient = true;
	this.padding = 10;
	this.paddingAxis = 4;
	this.paddingDataPoint = 2;
	$s.pop();
}
rg.view.svg.chart.BarChart.__name__ = ["rg","view","svg","chart","BarChart"];
rg.view.svg.chart.BarChart.__super__ = rg.view.svg.chart.CartesianChart;
for(var k in rg.view.svg.chart.CartesianChart.prototype ) rg.view.svg.chart.BarChart.prototype[k] = rg.view.svg.chart.CartesianChart.prototype[k];
rg.view.svg.chart.BarChart.prototype.stacked = null;
rg.view.svg.chart.BarChart.prototype.chart = null;
rg.view.svg.chart.BarChart.prototype.defs = null;
rg.view.svg.chart.BarChart.prototype.dps = null;
rg.view.svg.chart.BarChart.prototype.gradientLightness = null;
rg.view.svg.chart.BarChart.prototype.displayGradient = null;
rg.view.svg.chart.BarChart.prototype.padding = null;
rg.view.svg.chart.BarChart.prototype.paddingAxis = null;
rg.view.svg.chart.BarChart.prototype.paddingDataPoint = null;
rg.view.svg.chart.BarChart.prototype.data = function(dps) {
	$s.push("rg.view.svg.chart.BarChart::data");
	var $spos = $s.length;
	var values = dps.length, axisgs = new Hash(), discrete, scaledist = rg.data.ScaleDistribution.ScaleFill, span;
	if(null != (discrete = Types["as"](this.xVariable.axis,rg.data.IAxisDiscrete)) && !Type.enumEq(rg.data.ScaleDistribution.ScaleFill,scaledist = discrete.scaleDistribution)) span = (this.width - this.padding * (values - 1)) / values; else span = (this.width - this.padding * (values - 1)) / values;
	var getGroup = function(name,container) {
		$s.push("rg.view.svg.chart.BarChart::data@63");
		var $spos = $s.length;
		var gr = axisgs.get(name);
		if(null == gr) {
			gr = container.append("svg:g").attr("class").string(name);
			axisgs.set(name,gr);
		}
		$s.pop();
		return gr;
		$s.pop();
	};
	var flatdata = Arrays.flatten(Arrays.flatten(dps));
	var _g1 = 0, _g = dps.length;
	while(_g1 < _g) {
		var i = _g1++;
		var valuedps = dps[i], waxis = (span - this.paddingAxis * (valuedps.length - 1)) / valuedps.length;
		var _g3 = 0, _g2 = valuedps.length;
		while(_g3 < _g2) {
			var j = _g3++;
			var axisdps = valuedps[j], axisg = getGroup("group-" + j,this.chart), ytype = this.yVariables[j].type, yaxis = this.yVariables[j].axis, ymin = this.yVariables[j].min, ymax = this.yVariables[j].max, w = Math.max(1,(waxis - this.paddingDataPoint * (axisdps.length - 1)) / axisdps.length), offset = -span / 2 + j * (waxis + this.paddingAxis), ystats = this.yVariables[j].stats, over = (function(f,a1) {
				$s.push("rg.view.svg.chart.BarChart::data@94");
				var $spos = $s.length;
				var $tmp = function(a2,a3) {
					$s.push("rg.view.svg.chart.BarChart::data@94@94");
					var $spos = $s.length;
					var $tmp = f(a1,a2,a3);
					$s.pop();
					return $tmp;
					$s.pop();
				};
				$s.pop();
				return $tmp;
				$s.pop();
			})($closure(this,"onmouseover"),ystats), click = (function(f,a1) {
				$s.push("rg.view.svg.chart.BarChart::data@95");
				var $spos = $s.length;
				var $tmp = function(a2,a3) {
					$s.push("rg.view.svg.chart.BarChart::data@95@95");
					var $spos = $s.length;
					var $tmp = f(a1,a2,a3);
					$s.pop();
					return $tmp;
					$s.pop();
				};
				$s.pop();
				return $tmp;
				$s.pop();
			})($closure(this,"onclick"),ystats);
			var prev = 0.0;
			var _g5 = 0, _g4 = axisdps.length;
			while(_g5 < _g4) {
				var k = _g5++;
				var dp = axisdps[k], seggroup = getGroup("fill-" + k,axisg), x = this.width * this.xVariable.axis.scale(this.xVariable.min,this.xVariable.max,Reflect.field(dp,this.xVariable.type)), y = prev, h = yaxis.scale(ymin,ymax,Reflect.field(dp,ytype)) * this.height;
				var bar = seggroup.append("svg:rect").attr("class").string("bar").attr("x")["float"](this.stacked?x + offset:x + offset + k * (w + this.paddingDataPoint)).attr("width")["float"](this.stacked?waxis:w).attr("y")["float"](this.height - h - y).attr("height")["float"](h).onNode("mouseover",over);
				bar.node()["__data__"] = dp;
				if(this.displayGradient) bar.eachNode($closure(this,"applyGradient"));
				if(this.stacked) prev = y + h;
			}
		}
	}
	$s.pop();
}
rg.view.svg.chart.BarChart.prototype.onclick = function(ystats,dp,i) {
	$s.push("rg.view.svg.chart.BarChart::onclick");
	var $spos = $s.length;
	this.click(dp,ystats);
	$s.pop();
}
rg.view.svg.chart.BarChart.prototype.onmouseover = function(ystats,n,i) {
	$s.push("rg.view.svg.chart.BarChart::onmouseover");
	var $spos = $s.length;
	var dp = Reflect.field(n,"__data__"), text = this.labelDataPointOver(dp,ystats);
	if(null == text) this.tooltip.hide(); else {
		var sel = thx.js.Dom.selectNode(n), x = sel.attr("x").getFloat(), y = sel.attr("y").getFloat(), w = sel.attr("width").getFloat();
		this.tooltip.show();
		this.tooltip.setText(text.split("\n"));
		this.moveTooltip(x + w / 2,y);
	}
	$s.pop();
}
rg.view.svg.chart.BarChart.prototype.applyGradient = function(n,i) {
	$s.push("rg.view.svg.chart.BarChart::applyGradient");
	var $spos = $s.length;
	var gn = thx.js.Dom.selectNodeData(n), dp = Reflect.field(n,"__data__"), color = rg.view.svg.util.RGColors.parse(gn.style("fill").get(),"#cccccc"), id = "rg_bar_gradient_" + color.hex("");
	if(this.defs.select("#" + id).empty()) {
		var scolor = thx.color.Hsl.darker(thx.color.Hsl.toHsl(color),this.gradientLightness).toRgbString();
		var gradient = this.defs.append("svg:linearGradient").attr("id").string(id).attr("x1").string("0%").attr("x2").string("0%").attr("y1").string("100%").attr("y2").string("0%").attr("spreadMethod").string("pad");
		gradient.append("svg:stop").attr("offset").string("0%").attr("stop-color").string(scolor).attr("stop-opacity")["float"](1);
		gradient.append("svg:stop").attr("offset").string("100%").attr("stop-color").string(color.toRgbString()).attr("stop-opacity")["float"](1);
	}
	gn.attr("style").string("fill:url(#" + id + ")");
	$s.pop();
}
rg.view.svg.chart.BarChart.prototype.__class__ = rg.view.svg.chart.BarChart;
rg.JSBridge = function() { }
rg.JSBridge.__name__ = ["rg","JSBridge"];
rg.JSBridge.log = function(msg) {
	$s.push("rg.JSBridge::log");
	var $spos = $s.length;
	var console = (window.console && window.console.warn) || alert;
	console(msg);
	$s.pop();
}
rg.JSBridge.main = function() {
	$s.push("rg.JSBridge::main");
	var $spos = $s.length;
	var r = window.ReportGrid;
	if(null == r) rg.JSBridge.log(new thx.error.Error("unable to initialize the ReportGrid visualization system, be sure to have loaded already the 'reportgrid-core.js' script",null,null,{ fileName : "JSBridge.hx", lineNumber : 32, className : "rg.JSBridge", methodName : "main"}).toString());
	var app = new rg.controller.App(r);
	r.viz = function(el,options,type) {
		$s.push("rg.JSBridge::main@38");
		var $spos = $s.length;
		var o = rg.JSBridge.chartopt(options,type);
		var execute = function(opt) {
			$s.push("rg.JSBridge::main@38@42");
			var $spos = $s.length;
			try {
				app.visualization(rg.JSBridge.select(el),opt);
			} catch( $e0 ) {
				if( js.Boot.__instanceof($e0,thx.error.Error) ) {
					var e = $e0;
					$e = [];
					while($s.length >= $spos) $e.unshift($s.pop());
					$s.push($e[0]);
					var msg = "ERROR AT " + e.toStringError();
					msg += "\n\n  " + rg.util.RGStacks.exceptionStack().join("\n  ");
					rg.JSBridge.log(msg);
				} else {
				var e = $e0;
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				rg.JSBridge.log(Std.string(e));
				}
			}
			$s.pop();
		};
		rg.controller.MVPOptions.complete(r,o,execute);
		$s.pop();
	};
	r.lineChart = function(el,options) {
		$s.push("rg.JSBridge::main@65");
		var $spos = $s.length;
		var $tmp = r.viz(el,options,"linechart");
		$s.pop();
		return $tmp;
		$s.pop();
	};
	r.pieChart = function(el,options) {
		$s.push("rg.JSBridge::main@66");
		var $spos = $s.length;
		var $tmp = r.viz(el,options,"piechart");
		$s.pop();
		return $tmp;
		$s.pop();
	};
	r.pivotTable = function(el,options) {
		$s.push("rg.JSBridge::main@67");
		var $spos = $s.length;
		var $tmp = r.viz(el,options,"pivottable");
		$s.pop();
		return $tmp;
		$s.pop();
	};
	r.leaderBoard = function(el,options) {
		$s.push("rg.JSBridge::main@68");
		var $spos = $s.length;
		var $tmp = r.viz(el,options,"leaderboard");
		$s.pop();
		return $tmp;
		$s.pop();
	};
	r.barChart = function(el,options) {
		$s.push("rg.JSBridge::main@69");
		var $spos = $s.length;
		var $tmp = r.viz(el,options,"barchart");
		$s.pop();
		return $tmp;
		$s.pop();
	};
	r.funnelChart = function(el,options) {
		$s.push("rg.JSBridge::main@70");
		var $spos = $s.length;
		var $tmp = r.viz(el,options,"funnelchart");
		$s.pop();
		return $tmp;
		$s.pop();
	};
	r.streamGraph = function(el,options) {
		$s.push("rg.JSBridge::main@71");
		var $spos = $s.length;
		var $tmp = r.viz(el,options,"streamgraph");
		$s.pop();
		return $tmp;
		$s.pop();
	};
	r.scatterGraph = function(el,options) {
		$s.push("rg.JSBridge::main@72");
		var $spos = $s.length;
		var $tmp = r.viz(el,options,"scattergraph");
		$s.pop();
		return $tmp;
		$s.pop();
	};
	r.heatGrid = function(el,options) {
		$s.push("rg.JSBridge::main@73");
		var $spos = $s.length;
		var $tmp = r.viz(el,options,"heatgrid");
		$s.pop();
		return $tmp;
		$s.pop();
	};
	r.format = Dynamics.format;
	r.compare = Dynamics.compare;
	r.dump = Dynamics.string;
	r.symbol = rg.view.svg.util.SymbolCache.cache;
	r.date = { range : function(a,b,p) {
		$s.push("rg.JSBridge::main@81");
		var $spos = $s.length;
		if(Std["is"](a,String)) a = thx.date.DateParser.parse(a);
		if(null == a) a = rg.util.Periodicity.defaultRange(p)[0];
		if(Std["is"](a,Date)) a = a.getTime();
		if(Std["is"](b,String)) b = thx.date.DateParser.parse(b);
		if(null == b) b = rg.util.Periodicity.defaultRange(p)[1];
		if(Std["is"](b,Date)) b = b.getTime();
		var $tmp = rg.util.Periodicity.range(a,b,p);
		$s.pop();
		return $tmp;
		$s.pop();
	}, parse : thx.date.DateParser.parse};
	r.humanize = function(v) {
		$s.push("rg.JSBridge::main@99");
		var $spos = $s.length;
		if(Std["is"](v,String) && rg.util.Properties.isTime(v)) {
			var $tmp = rg.util.Properties.periodicity(v);
			$s.pop();
			return $tmp;
		}
		var $tmp = rg.util.RGStrings.humanize(v);
		$s.pop();
		return $tmp;
		$s.pop();
	};
	r.math = { random : $closure(new thx.math.Random(666),"float")};
	$s.pop();
}
rg.JSBridge.select = function(el) {
	$s.push("rg.JSBridge::select");
	var $spos = $s.length;
	var s = Std["is"](el,String)?thx.js.Dom.select(el):thx.js.Dom.selectNode(el);
	if(s.empty()) throw new thx.error.Error("invalid container '{0}'",el,null,{ fileName : "JSBridge.hx", lineNumber : 115, className : "rg.JSBridge", methodName : "select"});
	$s.pop();
	return s;
	$s.pop();
}
rg.JSBridge.opt = function(o) {
	$s.push("rg.JSBridge::opt");
	var $spos = $s.length;
	var $tmp = null == o?{ }:o;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.JSBridge.chartopt = function(o,viz) {
	$s.push("rg.JSBridge::chartopt");
	var $spos = $s.length;
	o = null == o?{ }:o;
	o.options = rg.JSBridge.opt(o.options);
	o.options.visualization = null != viz?viz:o.options.visualization;
	$s.pop();
	return o;
	$s.pop();
}
rg.JSBridge.prototype.__class__ = rg.JSBridge;
rg.data.ScaleDistribution = { __ename__ : ["rg","data","ScaleDistribution"], __constructs__ : ["ScaleFit","ScaleFill","ScaleBefore","ScaleAfter"] }
rg.data.ScaleDistribution.ScaleFit = ["ScaleFit",0];
rg.data.ScaleDistribution.ScaleFit.toString = $estr;
rg.data.ScaleDistribution.ScaleFit.__enum__ = rg.data.ScaleDistribution;
rg.data.ScaleDistribution.ScaleFill = ["ScaleFill",1];
rg.data.ScaleDistribution.ScaleFill.toString = $estr;
rg.data.ScaleDistribution.ScaleFill.__enum__ = rg.data.ScaleDistribution;
rg.data.ScaleDistribution.ScaleBefore = ["ScaleBefore",2];
rg.data.ScaleDistribution.ScaleBefore.toString = $estr;
rg.data.ScaleDistribution.ScaleBefore.__enum__ = rg.data.ScaleDistribution;
rg.data.ScaleDistribution.ScaleAfter = ["ScaleAfter",3];
rg.data.ScaleDistribution.ScaleAfter.toString = $estr;
rg.data.ScaleDistribution.ScaleAfter.__enum__ = rg.data.ScaleDistribution;
rg.view.html.widget.Leadeboard = function(container) {
	if( container === $_ ) return;
	$s.push("rg.view.html.widget.Leadeboard::new");
	var $spos = $s.length;
	this.container = container;
	this.animated = true;
	this.animationDuration = 1500;
	this.animationEase = thx.math.Equations.elasticf();
	this.animationDelay = 150;
	this._created = 0;
	this.displayGradient = true;
	this.useMax = false;
	$s.pop();
}
rg.view.html.widget.Leadeboard.__name__ = ["rg","view","html","widget","Leadeboard"];
rg.view.html.widget.Leadeboard.prototype.variableIndependent = null;
rg.view.html.widget.Leadeboard.prototype.variableDependent = null;
rg.view.html.widget.Leadeboard.prototype.animated = null;
rg.view.html.widget.Leadeboard.prototype.animationDuration = null;
rg.view.html.widget.Leadeboard.prototype.animationDelay = null;
rg.view.html.widget.Leadeboard.prototype.animationEase = null;
rg.view.html.widget.Leadeboard.prototype.click = null;
rg.view.html.widget.Leadeboard.prototype.sortDataPoint = null;
rg.view.html.widget.Leadeboard.prototype.displayGradient = null;
rg.view.html.widget.Leadeboard.prototype.useMax = null;
rg.view.html.widget.Leadeboard.prototype.container = null;
rg.view.html.widget.Leadeboard.prototype.list = null;
rg.view.html.widget.Leadeboard.prototype._created = null;
rg.view.html.widget.Leadeboard.prototype.stats = null;
rg.view.html.widget.Leadeboard.prototype.labelDataPoint = function(dp,stats) {
	$s.push("rg.view.html.widget.Leadeboard::labelDataPoint");
	var $spos = $s.length;
	var p = Reflect.field(dp,this.variableIndependent.type);
	var v = Reflect.field(dp,this.variableDependent.type);
	var $tmp = rg.util.Properties.humanize(p) + ": " + thx.culture.FormatNumber.percent(100 * v / stats.tot,1);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.html.widget.Leadeboard.prototype.labelDataPointOver = function(dp,stats) {
	$s.push("rg.view.html.widget.Leadeboard::labelDataPointOver");
	var $spos = $s.length;
	var p = this.variableDependent.type;
	var v = Reflect.field(dp,this.variableDependent.type);
	var $tmp = rg.util.Properties.humanize(p) + ": " + thx.culture.FormatNumber["int"](v);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.html.widget.Leadeboard.prototype.init = function() {
	$s.push("rg.view.html.widget.Leadeboard::init");
	var $spos = $s.length;
	this.list = this.container.append("ul").attr("class").string("leaderboard");
	this.container.append("div").attr("class").string("clear");
	$s.pop();
}
rg.view.html.widget.Leadeboard.prototype.setVariables = function(variableIndependents,variableDependents) {
	$s.push("rg.view.html.widget.Leadeboard::setVariables");
	var $spos = $s.length;
	this.variableDependent = variableDependents[0];
	this.variableIndependent = variableIndependents[0];
	$s.pop();
}
rg.view.html.widget.Leadeboard.prototype.backgroundSize = function(dp,i) {
	$s.push("rg.view.html.widget.Leadeboard::backgroundSize");
	var $spos = $s.length;
	var $tmp = 100 * Reflect.field(dp,this.variableDependent.type) / (this.useMax?this.stats.max:this.stats.tot) + "%";
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.html.widget.Leadeboard.prototype.data = function(dps) {
	$s.push("rg.view.html.widget.Leadeboard::data");
	var $spos = $s.length;
	var me = this;
	var name = this.variableDependent.type;
	if(null != this.sortDataPoint) dps.sort(this.sortDataPoint);
	var stats = this.stats = (function($this) {
		var $r;
		var $t = $this.variableDependent.stats;
		if(Std["is"]($t,rg.data.StatsNumeric)) $t; else throw "Class cast error";
		$r = $t;
		return $r;
	}(this));
	var choice = this.list.selectAll("li").data(dps,$closure(this,"id"));
	var enter = choice.enter().append("li").attr("class").stringf(function(_,i) {
		$s.push("rg.view.html.widget.Leadeboard::data@96");
		var $spos = $s.length;
		var $tmp = (me.displayGradient?"":"nogradient ") + "stroke-" + i;
		$s.pop();
		return $tmp;
		$s.pop();
	}).text().stringf($closure(this,"description")).attr("title").stringf($closure(this,"title"));
	if(this.displayGradient) enter.style("background-size").stringf($closure(this,"backgroundSize"));
	if(null != this.click) enter.on("click.user",$closure(this,"onClick"));
	if(this.animated) enter.style("opacity")["float"](0).eachNode($closure(this,"fadeIn")); else enter.style("opacity")["float"](1);
	var update = choice.update().select("li").text().stringf($closure(this,"description")).attr("title").stringf($closure(this,"title"));
	if(this.displayGradient) update.style("background-size").stringf($closure(this,"backgroundSize"));
	if(this.animated) choice.exit().transition().ease(this.animationEase).duration(null,this.animationDuration).style("opacity")["float"](0).remove(); else choice.exit().remove();
	$s.pop();
}
rg.view.html.widget.Leadeboard.prototype.onClick = function(dp,_) {
	$s.push("rg.view.html.widget.Leadeboard::onClick");
	var $spos = $s.length;
	this.click(dp);
	$s.pop();
}
rg.view.html.widget.Leadeboard.prototype.fadeIn = function(n,i) {
	$s.push("rg.view.html.widget.Leadeboard::fadeIn");
	var $spos = $s.length;
	var me = this;
	thx.js.Dom.selectNodeData(n).transition().ease(this.animationEase).duration(null,this.animationDuration).delay(null,this.animationDelay * (i - this._created)).style("opacity")["float"](1).endNode(function(_,_1) {
		$s.push("rg.view.html.widget.Leadeboard::fadeIn@144");
		var $spos = $s.length;
		me._created++;
		$s.pop();
	});
	$s.pop();
}
rg.view.html.widget.Leadeboard.prototype.description = function(dp,i) {
	$s.push("rg.view.html.widget.Leadeboard::description");
	var $spos = $s.length;
	var $tmp = this.labelDataPoint(dp,this.stats);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.html.widget.Leadeboard.prototype.title = function(dp,i) {
	$s.push("rg.view.html.widget.Leadeboard::title");
	var $spos = $s.length;
	var $tmp = this.labelDataPointOver(dp,this.stats);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.html.widget.Leadeboard.prototype.id = function(dp,_) {
	$s.push("rg.view.html.widget.Leadeboard::id");
	var $spos = $s.length;
	var $tmp = rg.util.DataPoints.id(dp,[this.variableDependent.type]);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.html.widget.Leadeboard.prototype.__class__ = rg.view.html.widget.Leadeboard;
rg.view.frame.Orientation = { __ename__ : ["rg","view","frame","Orientation"], __constructs__ : ["Vertical","Horizontal"] }
rg.view.frame.Orientation.Vertical = ["Vertical",0];
rg.view.frame.Orientation.Vertical.toString = $estr;
rg.view.frame.Orientation.Vertical.__enum__ = rg.view.frame.Orientation;
rg.view.frame.Orientation.Horizontal = ["Horizontal",1];
rg.view.frame.Orientation.Horizontal.toString = $estr;
rg.view.frame.Orientation.Horizontal.__enum__ = rg.view.frame.Orientation;
rg.controller.factory.FactoryVariableContexts = function(knownproperties) {
	if( knownproperties === $_ ) return;
	$s.push("rg.controller.factory.FactoryVariableContexts::new");
	var $spos = $s.length;
	this.knownProperties = knownproperties;
	this.independentFactory = new rg.controller.factory.FactoryVariableIndependent();
	this.dependentFactory = new rg.controller.factory.FactoryVariableDependent();
	$s.pop();
}
rg.controller.factory.FactoryVariableContexts.__name__ = ["rg","controller","factory","FactoryVariableContexts"];
rg.controller.factory.FactoryVariableContexts.createFromDataContexts = function(contexts) {
	$s.push("rg.controller.factory.FactoryVariableContexts::createFromDataContexts");
	var $spos = $s.length;
	var kp = new thx.collection.Set();
	var _g = 0;
	while(_g < contexts.length) {
		var ctx = contexts[_g];
		++_g;
		var $it0 = ctx.data.sources.iterator();
		while( $it0.hasNext() ) {
			var ds = $it0.next();
			var query = Std["is"](ds,rg.data.source.DataSourceReportGrid)?ds:null;
			if(null == query) continue;
			var _g1 = 0, _g2 = query.query.exp;
			while(_g1 < _g2.length) {
				var exp = _g2[_g1];
				++_g1;
				var $e = (exp);
				switch( $e[1] ) {
				case 0:
					var p = $e[2];
					kp.add(rg.util.Properties.timeProperty(p));
					break;
				case 1:
					var n = $e[2];
					kp.add(n);
					break;
				case 2:
					kp.add("event");
					break;
				}
			}
		}
	}
	var $tmp = new rg.controller.factory.FactoryVariableContexts(kp);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.controller.factory.FactoryVariableContexts.prototype.knownProperties = null;
rg.controller.factory.FactoryVariableContexts.prototype.independentFactory = null;
rg.controller.factory.FactoryVariableContexts.prototype.dependentFactory = null;
rg.controller.factory.FactoryVariableContexts.prototype.createIndependents = function(info) {
	$s.push("rg.controller.factory.FactoryVariableContexts::createIndependents");
	var $spos = $s.length;
	var result = [], ordinal, discrete, v, ctx;
	var _g = 0;
	while(_g < info.length) {
		var i = info[_g];
		++_g;
		var moveon = (function($this) {
			var $r;
			switch( (i.variableType)[1] ) {
			case 1:
				$r = false;
				break;
			case 0:
				$r = !$this.knownProperties.exists(i.type);
				break;
			default:
				$r = true;
			}
			return $r;
		}(this));
		if(moveon) continue;
		v = this.independentFactory.create(i);
		if(null != (ordinal = Std["is"](v,rg.data.AxisOrdinal)?v:null)) ctx = new rg.data.VariableIndependentContext(v,ordinal.getValues() == null || 0 == ordinal.getValues().length); else ctx = new rg.data.VariableIndependentContext(v,null == v.max || null == v.min);
		result.push(ctx);
	}
	$s.pop();
	return result;
	$s.pop();
}
rg.controller.factory.FactoryVariableContexts.prototype.createDependents = function(info) {
	$s.push("rg.controller.factory.FactoryVariableContexts::createDependents");
	var $spos = $s.length;
	var result = [], ordinal;
	var _g = 0;
	while(_g < info.length) {
		var i = info[_g];
		++_g;
		var moveon = (function($this) {
			var $r;
			switch( (i.variableType)[1] ) {
			case 2:
				$r = false;
				break;
			case 0:
				$r = $this.knownProperties.exists(i.type);
				break;
			default:
				$r = true;
			}
			return $r;
		}(this));
		if(moveon) continue;
		var isnumeric = null != i.min?Std["is"](i.min,Float):i.max?Std["is"](i.max,Float):false, v = this.dependentFactory.create(i,isnumeric);
		result.push(new rg.data.VariableDependentContext(v,null == v.max || null == v.min || null == v.axis || null != (ordinal = Std["is"](v,rg.data.AxisOrdinal)?v:null) && 0 == ordinal.getValues().length));
	}
	$s.pop();
	return result;
	$s.pop();
}
rg.controller.factory.FactoryVariableContexts.prototype.__class__ = rg.controller.factory.FactoryVariableContexts;
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
rg.data.AxisTime = function(periodicity) {
	if( periodicity === $_ ) return;
	$s.push("rg.data.AxisTime::new");
	var $spos = $s.length;
	this.periodicity = periodicity;
	this.setScaleDistribution(rg.data.ScaleDistribution.ScaleFill);
	$s.pop();
}
rg.data.AxisTime.__name__ = ["rg","data","AxisTime"];
rg.data.AxisTime.prototype.periodicity = null;
rg.data.AxisTime.prototype.scaleDistribution = null;
rg.data.AxisTime.prototype.isMajor = function(units,value) {
	$s.push("rg.data.AxisTime::isMajor");
	var $spos = $s.length;
	switch(this.periodicity) {
	case "day":
		if(units <= 31) {
			$s.pop();
			return true;
		}
		if(units < 121) {
			var d = Date.fromTime(value).getDate();
			var $tmp = rg.util.Periodicity.firstInSeries("month",value) || rg.util.Periodicity.firstInSeries("week",value);
			$s.pop();
			return $tmp;
		}
		var $tmp = rg.util.Periodicity.firstInSeries("month",value);
		$s.pop();
		return $tmp;
	case "week":
		if(units < 31) {
			$s.pop();
			return true;
		} else {
			var $tmp = Date.fromTime(value).getDate() <= 7;
			$s.pop();
			return $tmp;
		}
		break;
	default:
		var series = Reflect.field(rg.data.AxisTime.snapping,this.periodicity), unit = rg.util.Periodicity.units(value,this.periodicity);
		if(null == series) {
			$s.pop();
			return true;
		}
		var _g = 0;
		while(_g < series.length) {
			var item = series[_g];
			++_g;
			if(units > item.to) continue;
			var $tmp = 0 == unit % item.s;
			$s.pop();
			return $tmp;
		}
		var top = Reflect.field(rg.data.AxisTime.snapping,this.periodicity + "top");
		if(null == top) top = 1;
		var $tmp = 0 == unit % top;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
rg.data.AxisTime.prototype.ticks = function(start,end,upperBound) {
	$s.push("rg.data.AxisTime::ticks");
	var $spos = $s.length;
	var me = this;
	var span = end - start, units = rg.util.Periodicity.unitsBetween(start,end,this.periodicity), values = this.range(start,end), range = values.map(function(value,i) {
		$s.push("rg.data.AxisTime::ticks@81");
		var $spos = $s.length;
		var major = me.isMajor(units,value), unit = rg.util.Periodicity.unitsBetween(start,value,me.periodicity);
		var $tmp = new rg.data.TickmarkTime(value,values,major,me.periodicity,me.scaleDistribution);
		$s.pop();
		return $tmp;
		$s.pop();
	});
	var $tmp = rg.data.Tickmarks.bound(range,upperBound);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.AxisTime.prototype.range = function(start,end) {
	$s.push("rg.data.AxisTime::range");
	var $spos = $s.length;
	var $tmp = rg.util.Periodicity.range(start,end,this.periodicity);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.AxisTime.prototype.scale = function(start,end,v) {
	$s.push("rg.data.AxisTime::scale");
	var $spos = $s.length;
	var values = this.range(start,end);
	var $tmp = rg.data.ScaleDistributions.distribute(this.scaleDistribution,values.indexOf(v),values.length);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.AxisTime.prototype.setScaleDistribution = function(v) {
	$s.push("rg.data.AxisTime::setScaleDistribution");
	var $spos = $s.length;
	var $tmp = this.scaleDistribution = v;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.AxisTime.prototype.__class__ = rg.data.AxisTime;
rg.data.AxisTime.__interfaces__ = [rg.data.IAxisDiscrete];
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
if(!rg.view.svg.layer) rg.view.svg.layer = {}
rg.view.svg.layer.RulesOrtho = function(panel,orientation) {
	if( panel === $_ ) return;
	$s.push("rg.view.svg.layer.RulesOrtho::new");
	var $spos = $s.length;
	rg.view.svg.panel.Layer.call(this,panel);
	this.orientation = orientation;
	this.displayMinor = true;
	this.displayMajor = true;
	this.displayAnchorLine = true;
	this.g.classed().add("tickmarks");
	$s.pop();
}
rg.view.svg.layer.RulesOrtho.__name__ = ["rg","view","svg","layer","RulesOrtho"];
rg.view.svg.layer.RulesOrtho.__super__ = rg.view.svg.panel.Layer;
for(var k in rg.view.svg.panel.Layer.prototype ) rg.view.svg.layer.RulesOrtho.prototype[k] = rg.view.svg.panel.Layer.prototype[k];
rg.view.svg.layer.RulesOrtho.prototype.orientation = null;
rg.view.svg.layer.RulesOrtho.prototype.displayMinor = null;
rg.view.svg.layer.RulesOrtho.prototype.displayMajor = null;
rg.view.svg.layer.RulesOrtho.prototype.displayAnchorLine = null;
rg.view.svg.layer.RulesOrtho.prototype.translate = null;
rg.view.svg.layer.RulesOrtho.prototype.x1 = null;
rg.view.svg.layer.RulesOrtho.prototype.y1 = null;
rg.view.svg.layer.RulesOrtho.prototype.x2 = null;
rg.view.svg.layer.RulesOrtho.prototype.y2 = null;
rg.view.svg.layer.RulesOrtho.prototype.x = null;
rg.view.svg.layer.RulesOrtho.prototype.y = null;
rg.view.svg.layer.RulesOrtho.prototype.axis = null;
rg.view.svg.layer.RulesOrtho.prototype.min = null;
rg.view.svg.layer.RulesOrtho.prototype.max = null;
rg.view.svg.layer.RulesOrtho.prototype.resize = function() {
	$s.push("rg.view.svg.layer.RulesOrtho::resize");
	var $spos = $s.length;
	if(null == this.axis) {
		$s.pop();
		return;
	}
	if(this.displayAnchorLine) this.updateAnchorLine();
	this.redraw();
	$s.pop();
}
rg.view.svg.layer.RulesOrtho.prototype.update = function(axis,min,max) {
	$s.push("rg.view.svg.layer.RulesOrtho::update");
	var $spos = $s.length;
	this.axis = axis;
	this.min = min;
	this.max = max;
	this.redraw();
	$s.pop();
}
rg.view.svg.layer.RulesOrtho.prototype.updateAnchorLine = function() {
	$s.push("rg.view.svg.layer.RulesOrtho::updateAnchorLine");
	var $spos = $s.length;
	var line = this.g.select("line.anchor-line");
	switch( (this.orientation)[1] ) {
	case 1:
		line.attr("x1")["float"](0).attr("y1")["float"](0).attr("x2")["float"](0).attr("y2")["float"](this.height);
		break;
	case 0:
		line.attr("x1")["float"](0).attr("y1")["float"](this.height).attr("x2")["float"](this.width).attr("y2")["float"](this.height);
		break;
	}
	$s.pop();
}
rg.view.svg.layer.RulesOrtho.prototype.maxTicks = function() {
	$s.push("rg.view.svg.layer.RulesOrtho::maxTicks");
	var $spos = $s.length;
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
	var $tmp = Math.round(size / 2.5);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.layer.RulesOrtho.prototype.id = function(d,i) {
	$s.push("rg.view.svg.layer.RulesOrtho::id");
	var $spos = $s.length;
	var $tmp = "" + d.getValue();
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.layer.RulesOrtho.prototype.redraw = function() {
	$s.push("rg.view.svg.layer.RulesOrtho::redraw");
	var $spos = $s.length;
	var ticks = this.maxTicks(), data = this.axis.ticks(this.min,this.max,ticks);
	var rule = this.g.selectAll("g.rule").data(data,$closure(this,"id"));
	var enter = rule.enter().append("svg:g").attr("class").string("rule").attr("transform").stringf(this.translate);
	if(this.displayMinor) enter.filter(function(d,i) {
		$s.push("rg.view.svg.layer.RulesOrtho::redraw@111");
		var $spos = $s.length;
		var $tmp = !d.major;
		$s.pop();
		return $tmp;
		$s.pop();
	}).append("svg:line").attr("x1").floatf(this.x1).attr("y1").floatf(this.y1).attr("x2").floatf(this.x2).attr("y2").floatf(this.y2).attr("class").stringf($closure(this,"tickClass"));
	if(this.displayMajor) enter.filter(function(d,i) {
		$s.push("rg.view.svg.layer.RulesOrtho::redraw@122");
		var $spos = $s.length;
		var $tmp = d.major;
		$s.pop();
		return $tmp;
		$s.pop();
	}).append("svg:line").attr("x1").floatf(this.x1).attr("y1").floatf(this.y1).attr("x2").floatf(this.x2).attr("y2").floatf(this.y2).attr("class").stringf($closure(this,"tickClass"));
	rule.update().attr("transform").stringf(this.translate);
	rule.exit().remove();
	$s.pop();
}
rg.view.svg.layer.RulesOrtho.prototype.initf = function() {
	$s.push("rg.view.svg.layer.RulesOrtho::initf");
	var $spos = $s.length;
	switch( (this.orientation)[1] ) {
	case 1:
		this.translate = $closure(this,"translateHorizontal");
		this.x1 = $closure(this,"x1Horizontal");
		this.y1 = $closure(this,"y1Horizontal");
		this.x2 = $closure(this,"x2Horizontal");
		this.y2 = $closure(this,"y2Horizontal");
		break;
	case 0:
		this.translate = $closure(this,"translateVertical");
		this.x1 = $closure(this,"x1Vertical");
		this.y1 = $closure(this,"y1Vertical");
		this.x2 = $closure(this,"x2Vertical");
		this.y2 = $closure(this,"y2Vertical");
		break;
	}
	$s.pop();
}
rg.view.svg.layer.RulesOrtho.prototype.init = function() {
	$s.push("rg.view.svg.layer.RulesOrtho::init");
	var $spos = $s.length;
	this.initf();
	if(this.displayAnchorLine) {
		this.g.append("svg:line").attr("class").string("anchor-line");
		this.updateAnchorLine();
	}
	$s.pop();
}
rg.view.svg.layer.RulesOrtho.prototype.t = function(x,y) {
	$s.push("rg.view.svg.layer.RulesOrtho::t");
	var $spos = $s.length;
	var $tmp = "translate(" + x + "," + y + ")";
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.layer.RulesOrtho.prototype.translateHorizontal = function(d,i) {
	$s.push("rg.view.svg.layer.RulesOrtho::translateHorizontal");
	var $spos = $s.length;
	var $tmp = "translate(" + 0 + "," + (this.height - d.getDelta() * this.height) + ")";
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.layer.RulesOrtho.prototype.translateVertical = function(d,i) {
	$s.push("rg.view.svg.layer.RulesOrtho::translateVertical");
	var $spos = $s.length;
	var $tmp = "translate(" + d.getDelta() * this.width + "," + 0 + ")";
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.layer.RulesOrtho.prototype.x1Horizontal = function(d,i) {
	$s.push("rg.view.svg.layer.RulesOrtho::x1Horizontal");
	var $spos = $s.length;
	$s.pop();
	return 0;
	$s.pop();
}
rg.view.svg.layer.RulesOrtho.prototype.x1Vertical = function(d,i) {
	$s.push("rg.view.svg.layer.RulesOrtho::x1Vertical");
	var $spos = $s.length;
	$s.pop();
	return 0;
	$s.pop();
}
rg.view.svg.layer.RulesOrtho.prototype.y1Horizontal = function(d,i) {
	$s.push("rg.view.svg.layer.RulesOrtho::y1Horizontal");
	var $spos = $s.length;
	$s.pop();
	return 0;
	$s.pop();
}
rg.view.svg.layer.RulesOrtho.prototype.y1Vertical = function(d,i) {
	$s.push("rg.view.svg.layer.RulesOrtho::y1Vertical");
	var $spos = $s.length;
	$s.pop();
	return 0;
	$s.pop();
}
rg.view.svg.layer.RulesOrtho.prototype.x2Horizontal = function(d,i) {
	$s.push("rg.view.svg.layer.RulesOrtho::x2Horizontal");
	var $spos = $s.length;
	var $tmp = this.width;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.layer.RulesOrtho.prototype.x2Vertical = function(d,i) {
	$s.push("rg.view.svg.layer.RulesOrtho::x2Vertical");
	var $spos = $s.length;
	$s.pop();
	return 0;
	$s.pop();
}
rg.view.svg.layer.RulesOrtho.prototype.y2Horizontal = function(d,i) {
	$s.push("rg.view.svg.layer.RulesOrtho::y2Horizontal");
	var $spos = $s.length;
	$s.pop();
	return 0;
	$s.pop();
}
rg.view.svg.layer.RulesOrtho.prototype.y2Vertical = function(d,i) {
	$s.push("rg.view.svg.layer.RulesOrtho::y2Vertical");
	var $spos = $s.length;
	var $tmp = this.height;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.layer.RulesOrtho.prototype.tickClass = function(d,i) {
	$s.push("rg.view.svg.layer.RulesOrtho::tickClass");
	var $spos = $s.length;
	var $tmp = d.getMajor()?"major":null;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.layer.RulesOrtho.prototype.__class__ = rg.view.svg.layer.RulesOrtho;
if(typeof hxevents=='undefined') hxevents = {}
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
if(!rg.util) rg.util = {}
rg.util.Periodicity = function() { }
rg.util.Periodicity.__name__ = ["rg","util","Periodicity"];
rg.util.Periodicity.defaultPeriodicity = function(span) {
	$s.push("rg.util.Periodicity::defaultPeriodicity");
	var $spos = $s.length;
	if(null == span || 0 == span) {
		$s.pop();
		return "eternity";
	}
	if(span <= 21600000) {
		$s.pop();
		return "minute";
	} else if(span <= 172800000) {
		$s.pop();
		return "hour";
	} else if(span <= 5184000 * 1000) {
		$s.pop();
		return "day";
	} else if(span <= 62208000 * 1000) {
		$s.pop();
		return "month";
	} else {
		$s.pop();
		return "year";
	}
	$s.pop();
}
rg.util.Periodicity.defaultRange = function(periodicity) {
	$s.push("rg.util.Periodicity::defaultRange");
	var $spos = $s.length;
	var $tmp = (function($this) {
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
	$s.pop();
	return $tmp;
	$s.pop();
}
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
rg.util.Periodicity.unitsBetween = function(start,end,periodicity) {
	$s.push("rg.util.Periodicity::unitsBetween");
	var $spos = $s.length;
	var $tmp = (function($this) {
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
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.util.Periodicity.units = function(value,periodicity) {
	$s.push("rg.util.Periodicity::units");
	var $spos = $s.length;
	var $tmp = rg.util.Periodicity.unitsBetween(0,value,periodicity) + (function($this) {
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
	$s.pop();
	return $tmp;
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
		var s = Date.fromTime(start), e = Date.fromTime(end), sy = s.getFullYear(), ey = e.getFullYear(), sm = s.getMonth(), em = e.getMonth();
		var result = [];
		while(sy < ey || sm <= em) {
			result.push(new Date(sy,sm,1,0,0,0).getTime());
			sm++;
			if(sm > 11) {
				sm = 0;
				sy++;
			}
		}
		$s.pop();
		return result;
	case "year":
		var $tmp = Ints.range(Date.fromTime(start).getFullYear(),Date.fromTime(end).getFullYear(),1).map(function(d,i) {
			$s.push("rg.util.Periodicity::range@141");
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
rg.util.Periodicity.next = function(periodicity,date,step) {
	$s.push("rg.util.Periodicity::next");
	var $spos = $s.length;
	if(step == null) step = 1;
	if(null == date) date = Date.now().getTime();
	if(0 == step) {
		$s.pop();
		return date;
	}
	var $tmp = (function($this) {
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
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.util.Periodicity.minForPeriodicityInSeries = function(arr,periodicity) {
	$s.push("rg.util.Periodicity::minForPeriodicityInSeries");
	var $spos = $s.length;
	var $tmp = Arrays.floatMin(arr,function(d) {
		$s.push("rg.util.Periodicity::minForPeriodicityInSeries@174");
		var $spos = $s.length;
		var o = Reflect.field(d,periodicity);
		var $tmp = Arrays.floatMin(Reflect.fields(o),function(d1) {
			$s.push("rg.util.Periodicity::minForPeriodicityInSeries@174@176");
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
rg.util.Periodicity.maxForPeriodicityInSeries = function(arr,periodicity) {
	$s.push("rg.util.Periodicity::maxForPeriodicityInSeries");
	var $spos = $s.length;
	var $tmp = Arrays.floatMax(arr,function(d) {
		$s.push("rg.util.Periodicity::maxForPeriodicityInSeries@182");
		var $spos = $s.length;
		var o = Reflect.field(d,periodicity);
		var $tmp = Arrays.floatMax(Reflect.fields(o),function(d1) {
			$s.push("rg.util.Periodicity::maxForPeriodicityInSeries@182@184");
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
				$s.push("rg.util.Periodicity::formatf@192");
				var $spos = $s.length;
				$s.pop();
				return "all time";
				$s.pop();
			};
			break;
		case "minute":case "hour":
			$r = function(v) {
				$s.push("rg.util.Periodicity::formatf@193");
				var $spos = $s.length;
				var $tmp = thx.culture.FormatDate.timeShort(Date.fromTime(v));
				$s.pop();
				return $tmp;
				$s.pop();
			};
			break;
		case "day":case "week":
			$r = function(v) {
				$s.push("rg.util.Periodicity::formatf@194");
				var $spos = $s.length;
				var $tmp = thx.culture.FormatDate.dateShort(Date.fromTime(v));
				$s.pop();
				return $tmp;
				$s.pop();
			};
			break;
		case "month":
			$r = function(v) {
				$s.push("rg.util.Periodicity::formatf@195");
				var $spos = $s.length;
				var $tmp = thx.culture.FormatDate.yearMonth(Date.fromTime(v));
				$s.pop();
				return $tmp;
				$s.pop();
			};
			break;
		case "year":
			$r = function(v) {
				$s.push("rg.util.Periodicity::formatf@196");
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
	case "minute":
		var $tmp = thx.culture.FormatDate.timeShort(Date.fromTime(v));
		$s.pop();
		return $tmp;
	case "hour":
		var $tmp = thx.culture.FormatDate.hourShort(Date.fromTime(v));
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
rg.util.Periodicity.smartFormat = function(periodicity,v) {
	$s.push("rg.util.Periodicity::smartFormat");
	var $spos = $s.length;
	var d = Date.fromTime(v);
	switch(periodicity) {
	case "eternity":
		$s.pop();
		return "all time";
	case "minute":
		if(rg.util.Periodicity.firstInSeries("hour",v)) {
			var $tmp = thx.culture.FormatDate.timeShort(d);
			$s.pop();
			return $tmp;
		} else {
			var $tmp = thx.culture.FormatDate.format("%i",d);
			$s.pop();
			return $tmp;
		}
		break;
	case "hour":
		if(rg.util.Periodicity.firstInSeries("day",v)) {
			var $tmp = thx.culture.FormatDate.format("%b %e",d);
			$s.pop();
			return $tmp;
		} else {
			var $tmp = thx.culture.FormatDate.hourShort(d);
			$s.pop();
			return $tmp;
		}
		break;
	case "day":
		if(rg.util.Periodicity.firstInSeries("month",v)) {
			var $tmp = thx.culture.FormatDate.format("%b %e",d);
			$s.pop();
			return $tmp;
		} else {
			var $tmp = thx.culture.FormatDate.format("%e",d);
			$s.pop();
			return $tmp;
		}
		break;
	case "week":
		if(d.getDate() <= 7) {
			var $tmp = thx.culture.FormatDate.format("%b %e",d);
			$s.pop();
			return $tmp;
		} else {
			var $tmp = thx.culture.FormatDate.format("%e",d);
			$s.pop();
			return $tmp;
		}
		break;
	case "month":
		if(rg.util.Periodicity.firstInSeries("year",v)) {
			var $tmp = thx.culture.FormatDate.year(Date.fromTime(v));
			$s.pop();
			return $tmp;
		} else {
			var $tmp = thx.culture.FormatDate.format("%b",d);
			$s.pop();
			return $tmp;
		}
		break;
	case "year":
		var $tmp = thx.culture.FormatDate.year(d);
		$s.pop();
		return $tmp;
	default:
		var $tmp = periodicity + ": " + d;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
rg.util.Periodicity.firstInSeries = function(periodicity,v) {
	$s.push("rg.util.Periodicity::firstInSeries");
	var $spos = $s.length;
	var $tmp = (function($this) {
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
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.util.Periodicity.nextPeriodicity = function(periodicity) {
	$s.push("rg.util.Periodicity::nextPeriodicity");
	var $spos = $s.length;
	var $tmp = (function($this) {
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
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.util.Periodicity.prevPeriodicity = function(periodicity) {
	$s.push("rg.util.Periodicity::prevPeriodicity");
	var $spos = $s.length;
	var $tmp = (function($this) {
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
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.util.Periodicity.parsePair = function(start,end) {
	$s.push("rg.util.Periodicity::parsePair");
	var $spos = $s.length;
	var $tmp = [thx.date.DateParser.parse(start).getTime(),thx.date.DateParser.parse(end).getTime()];
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.util.Periodicity.isValidGroupBy = function(value) {
	$s.push("rg.util.Periodicity::isValidGroupBy");
	var $spos = $s.length;
	var $tmp = Arrays.exists(rg.util.Periodicity.validGroupValues,value);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.util.Periodicity.prototype.__class__ = rg.util.Periodicity;
rg.view.svg.panel.Panels = function() { }
rg.view.svg.panel.Panels.__name__ = ["rg","view","svg","panel","Panels"];
rg.view.svg.panel.Panels.rootSize = function(panel) {
	$s.push("rg.view.svg.panel.Panels::rootSize");
	var $spos = $s.length;
	var p = panel.parent;
	while(p != null) {
		var t = p;
		p = panel.parent;
		panel = t;
	}
	var $tmp = { width : panel.frame.width, height : panel.frame.height};
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.panel.Panels.boundingBox = function(panel,ancestor) {
	$s.push("rg.view.svg.panel.Panels::boundingBox");
	var $spos = $s.length;
	var p = panel, x = 0, y = 0;
	while(ancestor != p) {
		x += p.frame.x;
		y += p.frame.y;
		p = p.parent;
	}
	var $tmp = { x : x, y : y, width : panel.frame.width, height : panel.frame.height};
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.panel.Panels.ancestorBoundingBox = function(panel,ancestor) {
	$s.push("rg.view.svg.panel.Panels::ancestorBoundingBox");
	var $spos = $s.length;
	var p = panel, x = 0, y = 0, w = 0, h = 0;
	while(ancestor != p) {
		x += p.frame.x;
		y += p.frame.y;
		w = p.frame.width;
		h = p.frame.height;
		p = p.parent;
	}
	var $tmp = { x : -x, y : -y, width : w, height : h};
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.panel.Panels.prototype.__class__ = rg.view.svg.panel.Panels;
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
rg.view.svg.chart.GradientEffects = function() { }
rg.view.svg.chart.GradientEffects.__name__ = ["rg","view","svg","chart","GradientEffects"];
rg.view.svg.chart.GradientEffects.canParse = function(d) {
	$s.push("rg.view.svg.chart.GradientEffects::canParse");
	var $spos = $s.length;
	if(!Std["is"](d,String)) {
		$s.pop();
		return false;
	}
	var s = d, parts = s.toLowerCase().split("-");
	var $tmp = (function($this) {
		var $r;
		switch(parts[0]) {
		case "gradient":case "noeffect":
			$r = true;
			break;
		default:
			$r = false;
		}
		return $r;
	}(this));
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.chart.GradientEffects.parse = function(s) {
	$s.push("rg.view.svg.chart.GradientEffects::parse");
	var $spos = $s.length;
	var parts = s.toLowerCase().split("-");
	switch(parts.shift()) {
	case "gradient":
		var lightness = 0.75, parameters = parts.pop();
		if(null != parameters) lightness = Std.parseFloat(parameters.split(",").shift());
		var $tmp = rg.view.svg.chart.GradientEffect.Gradient(lightness);
		$s.pop();
		return $tmp;
	default:
		var $tmp = rg.view.svg.chart.GradientEffect.NoEffect;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
rg.view.svg.chart.GradientEffects.prototype.__class__ = rg.view.svg.chart.GradientEffects;
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
rg.data.Segmenter = function(on,transform,scale) {
	if( on === $_ ) return;
	$s.push("rg.data.Segmenter::new");
	var $spos = $s.length;
	this.on = on;
	this.transform = transform;
	this.scale = scale;
	$s.pop();
}
rg.data.Segmenter.__name__ = ["rg","data","Segmenter"];
rg.data.Segmenter.prototype.on = null;
rg.data.Segmenter.prototype.transform = null;
rg.data.Segmenter.prototype.scale = null;
rg.data.Segmenter.prototype.segment = function(data) {
	$s.push("rg.data.Segmenter::segment");
	var $spos = $s.length;
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
	$s.pop();
	return segmented;
	$s.pop();
}
rg.data.Segmenter.prototype.__class__ = rg.data.Segmenter;
if(!rg.view.svg.util) rg.view.svg.util = {}
rg.view.svg.util.SymbolCache = function(p) {
	if( p === $_ ) return;
	$s.push("rg.view.svg.util.SymbolCache::new");
	var $spos = $s.length;
	this.c = new Hash();
	this.r = 0;
	$s.pop();
}
rg.view.svg.util.SymbolCache.__name__ = ["rg","view","svg","util","SymbolCache"];
rg.view.svg.util.SymbolCache.cache = null;
rg.view.svg.util.SymbolCache.prototype.c = null;
rg.view.svg.util.SymbolCache.prototype.r = null;
rg.view.svg.util.SymbolCache.prototype.get = function(type,size) {
	$s.push("rg.view.svg.util.SymbolCache::get");
	var $spos = $s.length;
	if(size == null) size = 100;
	this.r++;
	var k = type + ":" + size, s = this.c.get(k);
	if(null == s) {
		s = (Reflect.field(thx.svg.Symbol,type))(size);
		this.c.set(k,s);
	}
	$s.pop();
	return s;
	$s.pop();
}
rg.view.svg.util.SymbolCache.prototype.stats = function() {
	$s.push("rg.view.svg.util.SymbolCache::stats");
	var $spos = $s.length;
	var $tmp = { cachedSymbols : Iterators.array(this.c.iterator()).length, requests : this.r};
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.util.SymbolCache.prototype.__class__ = rg.view.svg.util.SymbolCache;
if(!thx.translation) thx.translation = {}
thx.translation.ITranslation = function() { }
thx.translation.ITranslation.__name__ = ["thx","translation","ITranslation"];
thx.translation.ITranslation.prototype.domain = null;
thx.translation.ITranslation.prototype._ = null;
thx.translation.ITranslation.prototype.__ = null;
thx.translation.ITranslation.prototype.__class__ = thx.translation.ITranslation;
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
rg.data.IDataSource = function() { }
rg.data.IDataSource.__name__ = ["rg","data","IDataSource"];
rg.data.IDataSource.prototype.onLoad = null;
rg.data.IDataSource.prototype.load = null;
rg.data.IDataSource.prototype.__class__ = rg.data.IDataSource;
thx.math.Const = function() { }
thx.math.Const.__name__ = ["thx","math","Const"];
thx.math.Const.prototype.__class__ = thx.math.Const;
rg.controller.factory.FactoryDataContext = function(factoryDataSource) {
	if( factoryDataSource === $_ ) return;
	$s.push("rg.controller.factory.FactoryDataContext::new");
	var $spos = $s.length;
	this.factoryDataSource = factoryDataSource;
	$s.pop();
}
rg.controller.factory.FactoryDataContext.__name__ = ["rg","controller","factory","FactoryDataContext"];
rg.controller.factory.FactoryDataContext.prototype.factoryDataSource = null;
rg.controller.factory.FactoryDataContext.prototype.create = function(info) {
	$s.push("rg.controller.factory.FactoryDataContext::create");
	var $spos = $s.length;
	if(info.sources.length == 0) throw new thx.error.Error("the data object does not contain valid data sources information",null,null,{ fileName : "FactoryDataContext.hx", lineNumber : 27, className : "rg.controller.factory.FactoryDataContext", methodName : "create"});
	var sources = [];
	var _g = 0, _g1 = info.sources;
	while(_g < _g1.length) {
		var src = _g1[_g];
		++_g;
		sources.push(this.factoryDataSource.create(src));
	}
	var processor = new rg.data.DataProcessor(new rg.data.Sources(sources));
	if(null != info.transform) processor.transform = function(dps) {
		$s.push("rg.controller.factory.FactoryDataContext::create@35");
		var $spos = $s.length;
		var res = info.transform.apply(this,dps);
		if(null == res) {
			var $tmp = [[]];
			$s.pop();
			return $tmp;
		}
		if(!Std["is"](res,Array)) res = [res];
		if(!Std["is"](res[0],Array)) res = [res];
		$s.pop();
		return res;
		$s.pop();
	};
	if(null != info.scale) processor.scale = function(dps) {
		$s.push("rg.controller.factory.FactoryDataContext::create@52");
		var $spos = $s.length;
		var res = info.scale.apply(this,dps);
		if(null == res) {
			var $tmp = [[]];
			$s.pop();
			return $tmp;
		}
		if(!Std["is"](res,Array)) res = [res];
		if(!Std["is"](res[0],Array)) res = [res];
		$s.pop();
		return res;
		$s.pop();
	};
	var $tmp = new rg.data.DataContext(info.name,processor);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.controller.factory.FactoryDataContext.prototype.__class__ = rg.controller.factory.FactoryDataContext;
thx.math.scale.IScale = function() { }
thx.math.scale.IScale.__name__ = ["thx","math","scale","IScale"];
thx.math.scale.IScale.prototype.scale = null;
thx.math.scale.IScale.prototype.getDomain = null;
thx.math.scale.IScale.prototype.getRange = null;
thx.math.scale.IScale.prototype.__class__ = thx.math.scale.IScale;
rg.data.source.DataSourceArray = function(data) {
	if( data === $_ ) return;
	$s.push("rg.data.source.DataSourceArray::new");
	var $spos = $s.length;
	this.data = data;
	this.onLoad = new hxevents.Dispatcher();
	$s.pop();
}
rg.data.source.DataSourceArray.__name__ = ["rg","data","source","DataSourceArray"];
rg.data.source.DataSourceArray.prototype.data = null;
rg.data.source.DataSourceArray.prototype.onLoad = null;
rg.data.source.DataSourceArray.prototype.load = function() {
	$s.push("rg.data.source.DataSourceArray::load");
	var $spos = $s.length;
	this.onLoad.dispatch(this.data);
	$s.pop();
}
rg.data.source.DataSourceArray.prototype.__class__ = rg.data.source.DataSourceArray;
rg.data.source.DataSourceArray.__interfaces__ = [rg.data.IDataSource];
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
Floats.round = function(number,precision) {
	$s.push("Floats::round");
	var $spos = $s.length;
	if(precision == null) precision = 2;
	number *= Math.pow(10,precision);
	var $tmp = Math.round(number) / Math.pow(10,precision);
	$s.pop();
	return $tmp;
	$s.pop();
}
Floats.prototype.__class__ = Floats;
rg.controller.visualization.VisualizationStreamGraph = function(layout) {
	if( layout === $_ ) return;
	$s.push("rg.controller.visualization.VisualizationStreamGraph::new");
	var $spos = $s.length;
	rg.controller.visualization.VisualizationCartesian.call(this,layout);
	$s.pop();
}
rg.controller.visualization.VisualizationStreamGraph.__name__ = ["rg","controller","visualization","VisualizationStreamGraph"];
rg.controller.visualization.VisualizationStreamGraph.__super__ = rg.controller.visualization.VisualizationCartesian;
for(var k in rg.controller.visualization.VisualizationCartesian.prototype ) rg.controller.visualization.VisualizationStreamGraph.prototype[k] = rg.controller.visualization.VisualizationCartesian.prototype[k];
rg.controller.visualization.VisualizationStreamGraph.prototype.infoStream = null;
rg.controller.visualization.VisualizationStreamGraph.prototype.initAxes = function() {
	$s.push("rg.controller.visualization.VisualizationStreamGraph::initAxes");
	var $spos = $s.length;
	this.xvariable = this.independentVariables[0];
	this.yvariables = this.dependentVariables.map(function(d,_) {
		$s.push("rg.controller.visualization.VisualizationStreamGraph::initAxes@22");
		var $spos = $s.length;
		$s.pop();
		return d;
		$s.pop();
	});
	$s.pop();
}
rg.controller.visualization.VisualizationStreamGraph.prototype.initChart = function() {
	$s.push("rg.controller.visualization.VisualizationStreamGraph::initChart");
	var $spos = $s.length;
	var chart = new rg.view.svg.chart.StreamGraph(this.layout.getPanel(this.layout.mainPanelName));
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
	$s.pop();
}
rg.controller.visualization.VisualizationStreamGraph.prototype.transformData = function(dps) {
	$s.push("rg.controller.visualization.VisualizationStreamGraph::transformData");
	var $spos = $s.length;
	var segmenter = new rg.data.Segmenter(this.info.segment.on,this.info.segment.transform,this.info.segment.scale);
	var $tmp = segmenter.segment(dps);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.controller.visualization.VisualizationStreamGraph.prototype.__class__ = rg.controller.visualization.VisualizationStreamGraph;
rg.view.svg.layer.Title = function(panel,text,anchor,padding,className,shadow,outline) {
	if( panel === $_ ) return;
	$s.push("rg.view.svg.layer.Title::new");
	var $spos = $s.length;
	if(outline == null) outline = false;
	if(shadow == null) shadow = true;
	if(className == null) className = "title";
	if(padding == null) padding = 1;
	rg.view.svg.panel.Layer.call(this,panel);
	this.addClass(className);
	this.group = this.g.append("svg:g");
	this.label = new rg.view.svg.widget.Label(this.group,false,shadow,outline);
	this.label.setOrientation(rg.view.svg.widget.LabelOrientation.Orthogonal);
	this.setAnchor(anchor);
	this.setPadding(padding);
	this.setText(text);
	this.resize();
	$s.pop();
}
rg.view.svg.layer.Title.__name__ = ["rg","view","svg","layer","Title"];
rg.view.svg.layer.Title.__super__ = rg.view.svg.panel.Layer;
for(var k in rg.view.svg.panel.Layer.prototype ) rg.view.svg.layer.Title.prototype[k] = rg.view.svg.panel.Layer.prototype[k];
rg.view.svg.layer.Title.prototype.text = null;
rg.view.svg.layer.Title.prototype.anchor = null;
rg.view.svg.layer.Title.prototype.padding = null;
rg.view.svg.layer.Title.prototype.label = null;
rg.view.svg.layer.Title.prototype.group = null;
rg.view.svg.layer.Title.prototype.idealHeight = function() {
	$s.push("rg.view.svg.layer.Title::idealHeight");
	var $spos = $s.length;
	var size = this.label.getSize();
	var $tmp = Math.round((function($this) {
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
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.layer.Title.prototype.resize = function() {
	$s.push("rg.view.svg.layer.Title::resize");
	var $spos = $s.length;
	if(null == this.anchor || null == this.width || this.padding == null) {
		$s.pop();
		return;
	}
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
	$s.pop();
}
rg.view.svg.layer.Title.prototype.getText = function() {
	$s.push("rg.view.svg.layer.Title::getText");
	var $spos = $s.length;
	var $tmp = this.label.text;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.layer.Title.prototype.setText = function(v) {
	$s.push("rg.view.svg.layer.Title::setText");
	var $spos = $s.length;
	var $tmp = this.label.setText(v);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.layer.Title.prototype.setAnchor = function(v) {
	$s.push("rg.view.svg.layer.Title::setAnchor");
	var $spos = $s.length;
	switch( (this.anchor = v)[1] ) {
	case 0:
		this.label.setAnchor(rg.view.svg.widget.GridAnchor.Top);
		break;
	case 1:
		this.label.setAnchor(rg.view.svg.widget.GridAnchor.Bottom);
		break;
	case 2:
		this.label.setAnchor(rg.view.svg.widget.GridAnchor.Bottom);
		break;
	case 3:
		this.label.setAnchor(rg.view.svg.widget.GridAnchor.Bottom);
		break;
	}
	$s.pop();
	return v;
	$s.pop();
}
rg.view.svg.layer.Title.prototype.setPadding = function(v) {
	$s.push("rg.view.svg.layer.Title::setPadding");
	var $spos = $s.length;
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
	$s.pop();
	return v;
	$s.pop();
}
rg.view.svg.layer.Title.prototype.__class__ = rg.view.svg.layer.Title;
if(!rg.view.layout) rg.view.layout = {}
rg.view.layout.Layout = function(width,height,container) {
	if( width === $_ ) return;
	$s.push("rg.view.layout.Layout::new");
	var $spos = $s.length;
	this.container = container;
	container.classed().add("rg");
	this.space = new rg.view.svg.panel.Space(width,height,container);
	$s.pop();
}
rg.view.layout.Layout.__name__ = ["rg","view","layout","Layout"];
rg.view.layout.Layout.prototype.mainPanelName = null;
rg.view.layout.Layout.prototype.space = null;
rg.view.layout.Layout.prototype.container = null;
rg.view.layout.Layout.prototype.getContext = function(name) {
	$s.push("rg.view.layout.Layout::getContext");
	var $spos = $s.length;
	$s.pop();
	return null;
	$s.pop();
}
rg.view.layout.Layout.prototype.getPanel = function(name) {
	$s.push("rg.view.layout.Layout::getPanel");
	var $spos = $s.length;
	$s.pop();
	return null;
	$s.pop();
}
rg.view.layout.Layout.prototype.suggestSize = function(name,size) {
	$s.push("rg.view.layout.Layout::suggestSize");
	var $spos = $s.length;
	var panel = this.getPanel(name);
	if(null == panel) {
		$s.pop();
		return;
	}
	this.suggestPanelSize(panel,size);
	$s.pop();
}
rg.view.layout.Layout.prototype.destroy = function() {
	$s.push("rg.view.layout.Layout::destroy");
	var $spos = $s.length;
	this.container.selectAll("*").remove();
	$s.pop();
}
rg.view.layout.Layout.prototype.suggestPanelSize = function(panel,size) {
	$s.push("rg.view.layout.Layout::suggestPanelSize");
	var $spos = $s.length;
	var stackitem = Types["as"](panel.frame,rg.view.frame.StackItem);
	if(null == stackitem) {
		$s.pop();
		return;
	}
	var $e = (stackitem.disposition);
	switch( $e[1] ) {
	case 3:
		var a = $e[3], b = $e[2];
		stackitem.setDisposition(rg.view.frame.FrameLayout.Fixed(b,a,size));
		break;
	default:
	}
	$s.pop();
}
rg.view.layout.Layout.prototype.suggestPanelPadding = function(panel,before,after) {
	$s.push("rg.view.layout.Layout::suggestPanelPadding");
	var $spos = $s.length;
	if(null == panel) {
		$s.pop();
		return;
	}
	var stackitem = Types["as"](panel.frame,rg.view.frame.StackItem);
	if(null == stackitem) {
		$s.pop();
		return;
	}
	var $e = (stackitem.disposition);
	switch( $e[1] ) {
	case 0:
		var max = $e[5], min = $e[4], a = $e[3], b = $e[2];
		stackitem.setDisposition(rg.view.frame.FrameLayout.Fill(null == before?b:before,null == after?a:after,min,max));
		break;
	case 1:
		var max = $e[6], min = $e[5], percent = $e[4], a = $e[3], b = $e[2];
		stackitem.setDisposition(rg.view.frame.FrameLayout.FillPercent(null == before?b:before,null == after?a:after,percent,min,max));
		break;
	case 2:
		var ratio = $e[4], a = $e[3], b = $e[2];
		stackitem.setDisposition(rg.view.frame.FrameLayout.FillRatio(null == before?b:before,null == after?a:after,ratio));
		break;
	case 3:
		var size = $e[4], a = $e[3], b = $e[2];
		stackitem.setDisposition(rg.view.frame.FrameLayout.Fixed(null == before?b:before,null == after?a:after,size));
		break;
	default:
	}
	$s.pop();
}
rg.view.layout.Layout.prototype.paddings = null;
rg.view.layout.Layout.prototype.feedOptions = function(info) {
	$s.push("rg.view.layout.Layout::feedOptions");
	var $spos = $s.length;
	this.mainPanelName = info.main;
	this.paddings = info.padding;
	$s.pop();
}
rg.view.layout.Layout.prototype.adjustPadding = function() {
	$s.push("rg.view.layout.Layout::adjustPadding");
	var $spos = $s.length;
	$s.pop();
}
rg.view.layout.Layout.prototype.__class__ = rg.view.layout.Layout;
rg.controller.info.InfoDataContext = function(p) {
	if( p === $_ ) return;
	$s.push("rg.controller.info.InfoDataContext::new");
	var $spos = $s.length;
	this.sources = [];
	$s.pop();
}
rg.controller.info.InfoDataContext.__name__ = ["rg","controller","info","InfoDataContext"];
rg.controller.info.InfoDataContext.filters = function() {
	$s.push("rg.controller.info.InfoDataContext::filters");
	var $spos = $s.length;
	var $tmp = [{ field : "name", validator : function(v) {
		$s.push("rg.controller.info.InfoDataContext::filters@25");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "transform", validator : function(v) {
		$s.push("rg.controller.info.InfoDataContext::filters@29");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "scale", validator : function(v) {
		$s.push("rg.controller.info.InfoDataContext::filters@33");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "src", validator : function(v) {
		$s.push("rg.controller.info.InfoDataContext::filters@37");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Array) && Iterators.all(v.iterator(),function(v1) {
			$s.push("rg.controller.info.InfoDataContext::filters@37@37");
			var $spos = $s.length;
			var $tmp = Reflect.isObject(v1) && null == Type.getClass(v1);
			$s.pop();
			return $tmp;
			$s.pop();
		}) || Reflect.isObject(v) && null == Type.getClass(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoDataContext::filters@38");
		var $spos = $s.length;
		var $tmp = [{ field : "sources", value : Std["is"](v,Array)?v.map(function(v1,i) {
			$s.push("rg.controller.info.InfoDataContext::filters@38@43");
			var $spos = $s.length;
			var $tmp = rg.controller.info.Info.feed(new rg.controller.info.InfoDataSource(),v1);
			$s.pop();
			return $tmp;
			$s.pop();
		}):[rg.controller.info.Info.feed(new rg.controller.info.InfoDataSource(),v)]}];
		$s.pop();
		return $tmp;
		$s.pop();
	}}];
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.controller.info.InfoDataContext.prototype.name = null;
rg.controller.info.InfoDataContext.prototype.transform = null;
rg.controller.info.InfoDataContext.prototype.scale = null;
rg.controller.info.InfoDataContext.prototype.sources = null;
rg.controller.info.InfoDataContext.prototype.__class__ = rg.controller.info.InfoDataContext;
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
rg.view.svg.chart.GradientEffect = { __ename__ : ["rg","view","svg","chart","GradientEffect"], __constructs__ : ["NoEffect","Gradient"] }
rg.view.svg.chart.GradientEffect.NoEffect = ["NoEffect",0];
rg.view.svg.chart.GradientEffect.NoEffect.toString = $estr;
rg.view.svg.chart.GradientEffect.NoEffect.__enum__ = rg.view.svg.chart.GradientEffect;
rg.view.svg.chart.GradientEffect.Gradient = function(lightness) { var $x = ["Gradient",1,lightness]; $x.__enum__ = rg.view.svg.chart.GradientEffect; $x.toString = $estr; return $x; }
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
rg.data.source.DataSourceReportGrid = function(executor,path,event,query,groupby,timezone,start,end) {
	if( executor === $_ ) return;
	$s.push("rg.data.source.DataSourceReportGrid::new");
	var $spos = $s.length;
	this.query = query;
	this.executor = executor;
	this.groupBy = groupby;
	this.timeZone = timezone;
	var e = rg.data.source.DataSourceReportGrid.normalize(query.exp);
	this.event = event;
	this.periodicity = (function($this) {
		var $r;
		var $e = (e.pop());
		switch( $e[1] ) {
		case 0:
			var p = $e[2];
			$r = p;
			break;
		default:
			$r = (function($this) {
				var $r;
				throw new thx.error.Error("normalization failed, the last value should always be a Time expression",null,null,{ fileName : "DataSourceReportGrid.hx", lineNumber : 78, className : "rg.data.source.DataSourceReportGrid", methodName : "new"});
				return $r;
			}($this));
		}
		return $r;
	}(this));
	this.exp = e.map($closure(this,"mapProperties"));
	this.where = query.where.map(function(d,i) {
		$s.push("rg.data.source.DataSourceReportGrid::new@80");
		var $spos = $s.length;
		var $tmp = (function($this) {
			var $r;
			var $e = (d);
			switch( $e[1] ) {
			case 0:
				var value = $e[3], property = $e[2];
				$r = { event : event, property : property, value : value};
				break;
			default:
				$r = (function($this) {
					var $r;
					throw new thx.error.Error("invalid data for 'where' condition",null,null,{ fileName : "DataSourceReportGrid.hx", lineNumber : 84, className : "rg.data.source.DataSourceReportGrid", methodName : "new"});
					return $r;
				}($this));
			}
			return $r;
		}(this));
		$s.pop();
		return $tmp;
		$s.pop();
	});
	this.operation = query.operation;
	switch( (this.operation)[1] ) {
	case 0:
		break;
	default:
		throw new thx.error.Error("RGDataSource doesn't support operation '{0}'",null,this.operation,{ fileName : "DataSourceReportGrid.hx", lineNumber : 90, className : "rg.data.source.DataSourceReportGrid", methodName : "new"});
	}
	this.path = path;
	this.timeStart = start;
	this.timeEnd = end;
	this.onLoad = new hxevents.Dispatcher();
	$s.pop();
}
rg.data.source.DataSourceReportGrid.__name__ = ["rg","data","source","DataSourceReportGrid"];
rg.data.source.DataSourceReportGrid.normalize = function(exp) {
	$s.push("rg.data.source.DataSourceReportGrid::normalize");
	var $spos = $s.length;
	if(exp.length > 1) {
		var pos = -1;
		var _g1 = 0, _g = exp.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(rg.data.source.DataSourceReportGrid.isTimeProperty(exp[i])) {
				if(pos >= 0) throw new thx.error.Error("cannot perform intersections on two or more time properties",null,null,{ fileName : "DataSourceReportGrid.hx", lineNumber : 223, className : "rg.data.source.DataSourceReportGrid", methodName : "normalize"});
				pos = i;
			}
		}
		if(pos >= 0) {
			var $tmp = exp.slice(0,pos).concat(exp.slice(pos + 1)).concat([exp[pos]]);
			$s.pop();
			return $tmp;
		} else {
			var $tmp = exp.copy().concat([rg.data.source.rgquery.QExp.Time("eternity")]);
			$s.pop();
			return $tmp;
		}
	} else if(exp.length == 1) {
		var $e = (exp[0]);
		switch( $e[1] ) {
		case 1:
			var name = $e[2];
			var $tmp = [exp[0],rg.data.source.rgquery.QExp.Time("eternity")];
			$s.pop();
			return $tmp;
		case 0:
			var periodicity = $e[2];
			var $tmp = [rg.data.source.rgquery.QExp.Event,exp[0]];
			$s.pop();
			return $tmp;
		case 2:
			var $tmp = [rg.data.source.rgquery.QExp.Event,rg.data.source.rgquery.QExp.Time("eternity")];
			$s.pop();
			return $tmp;
		}
	} else {
		var $tmp = [rg.data.source.rgquery.QExp.Event,rg.data.source.rgquery.QExp.Time("eternity")];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
rg.data.source.DataSourceReportGrid.propertyName = function(p) {
	$s.push("rg.data.source.DataSourceReportGrid::propertyName");
	var $spos = $s.length;
	if(null == p.property) {
		var $tmp = p.event;
		$s.pop();
		return $tmp;
	} else {
		var $tmp = p.event + p.property;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
rg.data.source.DataSourceReportGrid.isTimeProperty = function(exp) {
	$s.push("rg.data.source.DataSourceReportGrid::isTimeProperty");
	var $spos = $s.length;
	switch( (exp)[1] ) {
	case 0:
		$s.pop();
		return true;
	default:
		$s.pop();
		return false;
	}
	$s.pop();
}
rg.data.source.DataSourceReportGrid.prototype.executor = null;
rg.data.source.DataSourceReportGrid.prototype.exp = null;
rg.data.source.DataSourceReportGrid.prototype.operation = null;
rg.data.source.DataSourceReportGrid.prototype.where = null;
rg.data.source.DataSourceReportGrid.prototype.periodicity = null;
rg.data.source.DataSourceReportGrid.prototype.event = null;
rg.data.source.DataSourceReportGrid.prototype.path = null;
rg.data.source.DataSourceReportGrid.prototype.timeStart = null;
rg.data.source.DataSourceReportGrid.prototype.timeEnd = null;
rg.data.source.DataSourceReportGrid.prototype.groupBy = null;
rg.data.source.DataSourceReportGrid.prototype.timeZone = null;
rg.data.source.DataSourceReportGrid.prototype.transform = null;
rg.data.source.DataSourceReportGrid.prototype.query = null;
rg.data.source.DataSourceReportGrid.prototype.onLoad = null;
rg.data.source.DataSourceReportGrid.prototype.mapProperties = function(d,_) {
	$s.push("rg.data.source.DataSourceReportGrid::mapProperties");
	var $spos = $s.length;
	var $e = (d);
	switch( $e[1] ) {
	case 1:
		var descending = $e[4], limit = $e[3], name = $e[2];
		var $tmp = { event : this.event, property : name, limit : null == limit?10:limit, order : false == descending?"ascending":"descending"};
		$s.pop();
		return $tmp;
	case 2:
		var $tmp = { event : this.event, property : null, limit : null, order : null};
		$s.pop();
		return $tmp;
	default:
		throw new thx.error.Error("normalization failed, only Property values should be allowed",null,null,{ fileName : "DataSourceReportGrid.hx", lineNumber : 66, className : "rg.data.source.DataSourceReportGrid", methodName : "mapProperties"});
	}
	$s.pop();
}
rg.data.source.DataSourceReportGrid.prototype.basicOptions = function(appendPeriodicity) {
	$s.push("rg.data.source.DataSourceReportGrid::basicOptions");
	var $spos = $s.length;
	if(appendPeriodicity == null) appendPeriodicity = true;
	var o = { };
	if(null != this.timeStart) o["start"] = this.timeStart;
	if(null != this.timeEnd) {
		var e = rg.util.Periodicity.next(this.periodicity,this.timeEnd);
		o["end"] = e;
	}
	if(appendPeriodicity) {
		o["periodicity"] = this.periodicity;
		if(null != this.groupBy) o["groupBy"] = this.groupBy;
		if(null != this.timeZone) o["timeZone"] = this.timeZone;
	}
	if(this.where.length > 1) {
		var w = { };
		var _g = 0, _g1 = this.where;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			w.variable = rg.data.source.DataSourceReportGrid.propertyName(c);
			w.value = c.value;
		}
		o["where"] = w;
	}
	$s.pop();
	return o;
	$s.pop();
}
rg.data.source.DataSourceReportGrid.prototype.unit = function() {
	$s.push("rg.data.source.DataSourceReportGrid::unit");
	var $spos = $s.length;
	var $tmp = (function($this) {
		var $r;
		switch( ($this.operation)[1] ) {
		case 0:
			$r = "count";
			break;
		default:
			$r = (function($this) {
				var $r;
				throw new thx.error.Error("unsupported operation '{0}'",null,$this.operation,{ fileName : "DataSourceReportGrid.hx", lineNumber : 136, className : "rg.data.source.DataSourceReportGrid", methodName : "unit"});
				return $r;
			}($this));
		}
		return $r;
	}(this));
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.source.DataSourceReportGrid.prototype.load = function() {
	$s.push("rg.data.source.DataSourceReportGrid::load");
	var $spos = $s.length;
	if(0 == this.exp.length) throw new thx.error.Error("invalid empty query",null,null,{ fileName : "DataSourceReportGrid.hx", lineNumber : 144, className : "rg.data.source.DataSourceReportGrid", methodName : "load"}); else if(this.exp.length == 1 && null == this.exp[0].property || this.where.length > 0) {
		if(this.periodicity == "eternity") {
			this.transform = new rg.data.source.rgquery.transform.TransformCount({ },this.event,this.unit());
			var o = this.basicOptions(false);
			if(this.where.length > 1) this.executor.searchCount(this.path,o,$closure(this,"success"),$closure(this,"error")); else if(this.where.length == 1) {
				o.property = rg.data.source.DataSourceReportGrid.propertyName(this.exp[0]);
				o.value = this.where[0].value;
				this.executor.propertyValueCount(this.path,o,$closure(this,"success"),$closure(this,"error"));
			} else {
				o.property = rg.data.source.DataSourceReportGrid.propertyName(this.exp[0]);
				this.executor.propertyCount(this.path,o,$closure(this,"success"),$closure(this,"error"));
			}
		} else {
			this.transform = new rg.data.source.rgquery.transform.TransformTimeSeries({ periodicity : this.periodicity},this.event,this.periodicity,this.unit());
			var o = this.basicOptions(true);
			if(this.where.length > 1) this.executor.searchSeries(this.path,o,$closure(this,"success"),$closure(this,"error")); else if(this.where.length == 1) {
				o.property = rg.data.source.DataSourceReportGrid.propertyName(this.exp[0]);
				o.value = this.where[0].value;
				this.executor.propertyValueSeries(this.path,o,$closure(this,"success"),$closure(this,"error"));
			} else {
				o.property = rg.data.source.DataSourceReportGrid.propertyName(this.exp[0]);
				this.executor.propertySeries(this.path,o,$closure(this,"success"),$closure(this,"error"));
			}
		}
	} else {
		if(this.groupBy != null) {
			if(this.timeZone != null) this.transform = new rg.data.source.rgquery.transform.TransformIntersectGroupUtc({ },this.exp.map(function(d,_) {
				$s.push("rg.data.source.DataSourceReportGrid::load@181");
				var $spos = $s.length;
				var $tmp = d.property;
				$s.pop();
				return $tmp;
				$s.pop();
			}),this.event,this.periodicity,this.unit()); else this.transform = new rg.data.source.rgquery.transform.TransformIntersectGroup({ },this.exp.map(function(d,_) {
				$s.push("rg.data.source.DataSourceReportGrid::load@183");
				var $spos = $s.length;
				var $tmp = d.property;
				$s.pop();
				return $tmp;
				$s.pop();
			}),this.event,this.periodicity,this.unit());
		} else if(this.periodicity == "eternity") this.transform = new rg.data.source.rgquery.transform.TransformIntersect({ },this.exp.map(function(d,_) {
			$s.push("rg.data.source.DataSourceReportGrid::load@185");
			var $spos = $s.length;
			var $tmp = d.property;
			$s.pop();
			return $tmp;
			$s.pop();
		}),this.event,this.exp[0].order != "ascending"); else if(this.timeZone != null) this.transform = new rg.data.source.rgquery.transform.TransformIntersectUtc({ },this.exp.map(function(d,_) {
			$s.push("rg.data.source.DataSourceReportGrid::load@187");
			var $spos = $s.length;
			var $tmp = d.property;
			$s.pop();
			return $tmp;
			$s.pop();
		}),this.event,this.periodicity,this.unit()); else this.transform = new rg.data.source.rgquery.transform.TransformIntersectTime({ },this.exp.map(function(d,_) {
			$s.push("rg.data.source.DataSourceReportGrid::load@189");
			var $spos = $s.length;
			var $tmp = d.property;
			$s.pop();
			return $tmp;
			$s.pop();
		}),this.event,this.periodicity,this.unit());
		var o = this.basicOptions(true);
		o.properties = this.exp.map(function(p,i) {
			$s.push("rg.data.source.DataSourceReportGrid::load@191");
			var $spos = $s.length;
			var $tmp = { property : rg.data.source.DataSourceReportGrid.propertyName(p), limit : p.limit, order : p.order};
			$s.pop();
			return $tmp;
			$s.pop();
		});
		this.executor.intersect(this.path,o,$closure(this,"success"),$closure(this,"error"));
	}
	$s.pop();
}
rg.data.source.DataSourceReportGrid.prototype.error = function(msg) {
	$s.push("rg.data.source.DataSourceReportGrid::error");
	var $spos = $s.length;
	throw new thx.error.Error(msg,null,null,{ fileName : "DataSourceReportGrid.hx", lineNumber : 204, className : "rg.data.source.DataSourceReportGrid", methodName : "error"});
	$s.pop();
}
rg.data.source.DataSourceReportGrid.prototype.success = function(src) {
	$s.push("rg.data.source.DataSourceReportGrid::success");
	var $spos = $s.length;
	var data = this.transform.transform(src);
	this.onLoad.dispatch(data);
	$s.pop();
}
rg.data.source.DataSourceReportGrid.prototype.__class__ = rg.data.source.DataSourceReportGrid;
rg.data.source.DataSourceReportGrid.__interfaces__ = [rg.data.IDataSource];
rg.controller.factory.FactorySvgVisualization = function(p) {
	$s.push("rg.controller.factory.FactorySvgVisualization::new");
	var $spos = $s.length;
	$s.pop();
}
rg.controller.factory.FactorySvgVisualization.__name__ = ["rg","controller","factory","FactorySvgVisualization"];
rg.controller.factory.FactorySvgVisualization.prototype.create = function(type,layout,options) {
	$s.push("rg.controller.factory.FactorySvgVisualization::create");
	var $spos = $s.length;
	switch(type) {
	case "linechart":
		var chart = new rg.controller.visualization.VisualizationLineChart(layout);
		chart.info = chart.infoLine = rg.controller.info.Info.feed(new rg.controller.info.InfoLineChart(),options);
		$s.pop();
		return chart;
	case "piechart":
		var chart = new rg.controller.visualization.VisualizationPieChart(layout);
		chart.info = rg.controller.info.Info.feed(new rg.controller.info.InfoPieChart(),options);
		$s.pop();
		return chart;
	case "barchart":
		var chart = new rg.controller.visualization.VisualizationBarChart(layout);
		chart.info = chart.infoBar = rg.controller.info.Info.feed(new rg.controller.info.InfoBarChart(),options);
		$s.pop();
		return chart;
	case "funnelchart":
		var chart = new rg.controller.visualization.VisualizationFunnelChart(layout);
		chart.info = rg.controller.info.Info.feed(new rg.controller.info.InfoFunnelChart(),options);
		$s.pop();
		return chart;
	case "streamgraph":
		var chart = new rg.controller.visualization.VisualizationStreamGraph(layout);
		chart.info = chart.infoStream = rg.controller.info.Info.feed(new rg.controller.info.InfoStreamGraph(),options);
		$s.pop();
		return chart;
	case "scattergraph":
		var chart = new rg.controller.visualization.VisualizationScatterGraph(layout);
		chart.info = chart.infoScatter = rg.controller.info.Info.feed(new rg.controller.info.InfoScatterGraph(),options);
		$s.pop();
		return chart;
	case "heatgrid":
		var chart = new rg.controller.visualization.VisualizationHeatGrid(layout);
		chart.info = chart.infoHeatGrid = rg.controller.info.Info.feed(new rg.controller.info.InfoHeatGrid(),options);
		$s.pop();
		return chart;
	default:
		throw new thx.error.Error("unsupported visualization type '{0}'",null,type,{ fileName : "FactorySvgVisualization.hx", lineNumber : 65, className : "rg.controller.factory.FactorySvgVisualization", methodName : "create"});
	}
	$s.pop();
}
rg.controller.factory.FactorySvgVisualization.prototype.__class__ = rg.controller.factory.FactorySvgVisualization;
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
rg.controller.info.InfoLayout = function(p) {
	if( p === $_ ) return;
	$s.push("rg.controller.info.InfoLayout::new");
	var $spos = $s.length;
	this.main = "main";
	this.titleOnTop = true;
	this.scalePattern = rg.view.layout.ScalePattern.ScalesAlternating;
	this.padding = new rg.controller.info.InfoPadding();
	$s.pop();
}
rg.controller.info.InfoLayout.__name__ = ["rg","controller","info","InfoLayout"];
rg.controller.info.InfoLayout.filters = function() {
	$s.push("rg.controller.info.InfoLayout::filters");
	var $spos = $s.length;
	var $tmp = [{ field : "layout", validator : function(v) {
		$s.push("rg.controller.info.InfoLayout::filters@33");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String) && Arrays.exists(rg.controller.Visualizations.layouts,v.toLowerCase());
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoLayout::filters@34");
		var $spos = $s.length;
		var $tmp = [{ field : "layout", value : v.toLowerCase()}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "width", validator : function(v) {
		$s.push("rg.controller.info.InfoLayout::filters@42");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Float);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoLayout::filters@43");
		var $spos = $s.length;
		var $tmp = [{ value : Math.round(v), field : "width"}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "height", validator : function(v) {
		$s.push("rg.controller.info.InfoLayout::filters@49");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Float);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoLayout::filters@50");
		var $spos = $s.length;
		var $tmp = [{ value : Math.round(v), field : "height"}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "visualization", validator : function(v) {
		$s.push("rg.controller.info.InfoLayout::filters@56");
		var $spos = $s.length;
		var $tmp = Arrays.exists(rg.controller.Visualizations.svg,v.toLowerCase());
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoLayout::filters@57");
		var $spos = $s.length;
		var $tmp = [{ value : v.toLowerCase(), field : "type"}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "main", validator : function(v) {
		$s.push("rg.controller.info.InfoLayout::filters@63");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "titleontop", validator : function(v) {
		$s.push("rg.controller.info.InfoLayout::filters@67");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Bool);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoLayout::filters@68");
		var $spos = $s.length;
		var $tmp = [{ value : v, field : "titleOnTop"}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "yscaleposition", validator : function(v) {
		$s.push("rg.controller.info.InfoLayout::filters@74");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoLayout::filters@75");
		var $spos = $s.length;
		var $tmp = [{ value : v, field : (function($this) {
			var $r;
			switch(v) {
			case "alt":case "alternate":case "alternating":
				$r = rg.view.layout.ScalePattern.ScalesAlternating;
				break;
			case "right":
				$r = rg.view.layout.ScalePattern.ScalesAfter;
				break;
			default:
				$r = rg.view.layout.ScalePattern.ScalesBefore;
			}
			return $r;
		}(this))}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "padding", validator : function(v) {
		$s.push("rg.controller.info.InfoLayout::filters@85");
		var $spos = $s.length;
		var $tmp = Reflect.isObject(v) && null == Type.getClass(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoLayout::filters@86");
		var $spos = $s.length;
		var $tmp = [{ field : "padding", value : rg.controller.info.Info.feed(new rg.controller.info.InfoPadding(),v)}];
		$s.pop();
		return $tmp;
		$s.pop();
	}}];
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.controller.info.InfoLayout.prototype.layout = null;
rg.controller.info.InfoLayout.prototype.width = null;
rg.controller.info.InfoLayout.prototype.height = null;
rg.controller.info.InfoLayout.prototype.type = null;
rg.controller.info.InfoLayout.prototype.main = null;
rg.controller.info.InfoLayout.prototype.titleOnTop = null;
rg.controller.info.InfoLayout.prototype.scalePattern = null;
rg.controller.info.InfoLayout.prototype.padding = null;
rg.controller.info.InfoLayout.prototype.__class__ = rg.controller.info.InfoLayout;
rg.data.ITickmark = function() { }
rg.data.ITickmark.__name__ = ["rg","data","ITickmark"];
rg.data.ITickmark.prototype.delta = null;
rg.data.ITickmark.prototype.major = null;
rg.data.ITickmark.prototype.value = null;
rg.data.ITickmark.prototype.label = null;
rg.data.ITickmark.prototype.__class__ = rg.data.ITickmark;
rg.data.TickmarkOrdinal = function(pos,values,major,scaleDistribution) {
	if( pos === $_ ) return;
	$s.push("rg.data.TickmarkOrdinal::new");
	var $spos = $s.length;
	if(major == null) major = true;
	this.pos = pos;
	this.values = values;
	this.scaleDistribution = scaleDistribution;
	this.major = major;
	$s.pop();
}
rg.data.TickmarkOrdinal.__name__ = ["rg","data","TickmarkOrdinal"];
rg.data.TickmarkOrdinal.fromArray = function(values,scaleDistribution) {
	$s.push("rg.data.TickmarkOrdinal::fromArray");
	var $spos = $s.length;
	var $tmp = values.map(function(_,i) {
		$s.push("rg.data.TickmarkOrdinal::fromArray@15");
		var $spos = $s.length;
		var $tmp = new rg.data.TickmarkOrdinal(i,values,null,scaleDistribution);
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.TickmarkOrdinal.prototype.pos = null;
rg.data.TickmarkOrdinal.prototype.values = null;
rg.data.TickmarkOrdinal.prototype.scaleDistribution = null;
rg.data.TickmarkOrdinal.prototype.delta = null;
rg.data.TickmarkOrdinal.prototype.getDelta = function() {
	$s.push("rg.data.TickmarkOrdinal::getDelta");
	var $spos = $s.length;
	var $tmp = rg.data.ScaleDistributions.distribute(this.scaleDistribution,this.pos,this.values.length);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.TickmarkOrdinal.prototype.major = null;
rg.data.TickmarkOrdinal.prototype.getMajor = function() {
	$s.push("rg.data.TickmarkOrdinal::getMajor");
	var $spos = $s.length;
	var $tmp = this.major;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.TickmarkOrdinal.prototype.value = null;
rg.data.TickmarkOrdinal.prototype.getValue = function() {
	$s.push("rg.data.TickmarkOrdinal::getValue");
	var $spos = $s.length;
	var $tmp = this.values[this.pos];
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.TickmarkOrdinal.prototype.label = null;
rg.data.TickmarkOrdinal.prototype.getLabel = function() {
	$s.push("rg.data.TickmarkOrdinal::getLabel");
	var $spos = $s.length;
	var $tmp = rg.util.RGStrings.humanize(this.values[this.pos]);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.TickmarkOrdinal.prototype.toString = function() {
	$s.push("rg.data.TickmarkOrdinal::toString");
	var $spos = $s.length;
	var $tmp = rg.data.Tickmarks.string(this);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.TickmarkOrdinal.prototype.__class__ = rg.data.TickmarkOrdinal;
rg.data.TickmarkOrdinal.__interfaces__ = [rg.data.ITickmark];
rg.view.svg.chart.FunnelChart = function(panel) {
	if( panel === $_ ) return;
	$s.push("rg.view.svg.chart.FunnelChart::new");
	var $spos = $s.length;
	rg.view.svg.chart.Chart.call(this,panel);
	this.padding = 2.5;
	this.flatness = 1.0;
	this.arrowSize = 30;
	this.gradientLightness = 1;
	this.displayGradient = true;
	this.labelArrow = $closure(this,"defaultLabelArrow");
	this.labelDataPoint = $closure(this,"defaultLabelDataPoint");
	this.labelDataPointOver = $closure(this,"defaultLabelDataPointOver");
	$s.pop();
}
rg.view.svg.chart.FunnelChart.__name__ = ["rg","view","svg","chart","FunnelChart"];
rg.view.svg.chart.FunnelChart.__super__ = rg.view.svg.chart.Chart;
for(var k in rg.view.svg.chart.Chart.prototype ) rg.view.svg.chart.FunnelChart.prototype[k] = rg.view.svg.chart.Chart.prototype[k];
rg.view.svg.chart.FunnelChart.prototype.padding = null;
rg.view.svg.chart.FunnelChart.prototype.flatness = null;
rg.view.svg.chart.FunnelChart.prototype.displayGradient = null;
rg.view.svg.chart.FunnelChart.prototype.gradientLightness = null;
rg.view.svg.chart.FunnelChart.prototype.arrowSize = null;
rg.view.svg.chart.FunnelChart.prototype.labelArrow = null;
rg.view.svg.chart.FunnelChart.prototype.variableIndependent = null;
rg.view.svg.chart.FunnelChart.prototype.variableDependent = null;
rg.view.svg.chart.FunnelChart.prototype.defs = null;
rg.view.svg.chart.FunnelChart.prototype.dps = null;
rg.view.svg.chart.FunnelChart.prototype.defaultLabelArrow = function(dp,stats) {
	$s.push("rg.view.svg.chart.FunnelChart::defaultLabelArrow");
	var $spos = $s.length;
	var value = Reflect.field(dp,this.variableDependent.type) / stats.max;
	var $tmp = thx.culture.FormatNumber.percent(100 * value,0);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.chart.FunnelChart.prototype.defaultLabelDataPoint = function(dp,stats) {
	$s.push("rg.view.svg.chart.FunnelChart::defaultLabelDataPoint");
	var $spos = $s.length;
	var $tmp = rg.util.RGStrings.humanize(Reflect.field(dp,this.variableIndependent.type)).split(" ").join("\n");
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.chart.FunnelChart.prototype.defaultLabelDataPointOver = function(dp,stats) {
	$s.push("rg.view.svg.chart.FunnelChart::defaultLabelDataPointOver");
	var $spos = $s.length;
	var $tmp = Ints.format(Reflect.field(dp,this.variableDependent.type));
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.chart.FunnelChart.prototype.setVariables = function(variableIndependents,variableDependents) {
	$s.push("rg.view.svg.chart.FunnelChart::setVariables");
	var $spos = $s.length;
	this.variableIndependent = variableIndependents[0];
	this.variableDependent = variableDependents[0];
	$s.pop();
}
rg.view.svg.chart.FunnelChart.prototype.data = function(dps) {
	$s.push("rg.view.svg.chart.FunnelChart::data");
	var $spos = $s.length;
	this.dps = dps;
	this.redraw();
	$s.pop();
}
rg.view.svg.chart.FunnelChart.prototype.resize = function() {
	$s.push("rg.view.svg.chart.FunnelChart::resize");
	var $spos = $s.length;
	rg.view.svg.chart.Chart.prototype.resize.call(this);
	this.redraw();
	$s.pop();
}
rg.view.svg.chart.FunnelChart.prototype.dpvalue = function(dp) {
	$s.push("rg.view.svg.chart.FunnelChart::dpvalue");
	var $spos = $s.length;
	var $tmp = Reflect.field(dp,this.variableDependent.type);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.chart.FunnelChart.prototype.stats = null;
rg.view.svg.chart.FunnelChart.prototype.topheight = null;
rg.view.svg.chart.FunnelChart.prototype.h = null;
rg.view.svg.chart.FunnelChart.prototype.scale = function(value) {
	$s.push("rg.view.svg.chart.FunnelChart::scale");
	var $spos = $s.length;
	var $tmp = this.variableDependent.axis.scale(this.variableDependent.min,this.variableDependent.max,value);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.chart.FunnelChart.prototype.next = function(i) {
	$s.push("rg.view.svg.chart.FunnelChart::next");
	var $spos = $s.length;
	var $tmp = this.dpvalue(this.dps[i + 1 < this.dps.length?i + 1:i]);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.chart.FunnelChart.prototype.redraw = function() {
	$s.push("rg.view.svg.chart.FunnelChart::redraw");
	var $spos = $s.length;
	var me = this;
	if(null == this.dps || 0 == this.dps.length) {
		$s.pop();
		return;
	}
	this.g.selectAll("g").remove();
	this.g.selectAll("radialGradient").remove();
	this.stats = this.variableDependent.stats;
	var max = this.scale(this.stats.max), wscale = function(v) {
		$s.push("rg.view.svg.chart.FunnelChart::redraw@117");
		var $spos = $s.length;
		var $tmp = me.scale(v) / max * (me.width - 2) / 2;
		$s.pop();
		return $tmp;
		$s.pop();
	}, fx1 = function(v) {
		$s.push("rg.view.svg.chart.FunnelChart::redraw@120");
		var $spos = $s.length;
		var $tmp = me.width / 2 - wscale(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, fx2 = function(v) {
		$s.push("rg.view.svg.chart.FunnelChart::redraw@121");
		var $spos = $s.length;
		var $tmp = me.width - fx1(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, diagonal1 = new thx.svg.Diagonal().sourcef(function(o,i) {
		$s.push("rg.view.svg.chart.FunnelChart::redraw@123");
		var $spos = $s.length;
		var $tmp = [fx1(me.dpvalue(o)),0.0];
		$s.pop();
		return $tmp;
		$s.pop();
	}).targetf(function(o,i) {
		$s.push("rg.view.svg.chart.FunnelChart::redraw@124");
		var $spos = $s.length;
		var $tmp = [fx1(me.next(i)),me.h];
		$s.pop();
		return $tmp;
		$s.pop();
	}), diagonal2 = new thx.svg.Diagonal().sourcef(function(o,i) {
		$s.push("rg.view.svg.chart.FunnelChart::redraw@126");
		var $spos = $s.length;
		var $tmp = [fx2(me.next(i)),me.h];
		$s.pop();
		return $tmp;
		$s.pop();
	}).targetf(function(o,i) {
		$s.push("rg.view.svg.chart.FunnelChart::redraw@127");
		var $spos = $s.length;
		var $tmp = [fx2(me.dpvalue(o)),0.0];
		$s.pop();
		return $tmp;
		$s.pop();
	}), conj = function(v,r,dir) {
		$s.push("rg.view.svg.chart.FunnelChart::redraw@128");
		var $spos = $s.length;
		var x2 = r?fx1(v) - fx2(v):fx2(v) - fx1(v), a = 5, d = r?dir == 0?1:0:dir;
		var $tmp = " a " + a + " " + me.flatness + " 0 0 " + d + " " + x2 + " 0";
		$s.pop();
		return $tmp;
		$s.pop();
	}, conj1 = function(d,i) {
		$s.push("rg.view.svg.chart.FunnelChart::redraw@136");
		var $spos = $s.length;
		var $tmp = conj(me.dpvalue(d),true,0);
		$s.pop();
		return $tmp;
		$s.pop();
	}, conj2 = function(d,i) {
		$s.push("rg.view.svg.chart.FunnelChart::redraw@140");
		var $spos = $s.length;
		var $tmp = conj(me.next(i),false,0);
		$s.pop();
		return $tmp;
		$s.pop();
	}, conjr = function(d,i) {
		$s.push("rg.view.svg.chart.FunnelChart::redraw@144");
		var $spos = $s.length;
		var v = me.dpvalue(d);
		var $tmp = " M " + fx1(v) + " 0 " + conj(v,false,0) + conj(v,true,1);
		$s.pop();
		return $tmp;
		$s.pop();
	};
	var top = this.g.append("svg:g");
	var path = top.append("svg:path").attr("class").string("funnel-inside fill-0").attr("d").string(conjr(this.dps[0]));
	if(null != this.click) top.onNode("click",function(_,_1) {
		$s.push("rg.view.svg.chart.FunnelChart::redraw@158");
		var $spos = $s.length;
		me.click(me.dps[0],me.stats);
		$s.pop();
	});
	if(this.displayGradient) this.internalGradient(path);
	top.onNode("mouseover",function(_,_1) {
		$s.push("rg.view.svg.chart.FunnelChart::redraw@161");
		var $spos = $s.length;
		me.mouseOver(me.dps[0],0,me.stats);
		$s.pop();
	});
	this.topheight = Math.ceil(path.node().getBBox().height / 2) + 1;
	var index = this.dps.length - 1, bottom = this.g.append("svg:path").attr("class").string("funnel-inside fill-" + index).attr("d").string(conjr(this.dps[index])), bottomheight = Math.ceil(bottom.node().getBBox().height / 2) + 1;
	bottom.remove();
	this.h = (this.height - this.topheight - bottomheight - (this.dps.length - 1) * this.padding) / this.dps.length;
	top.attr("transform").string("translate(0," + this.topheight + ")");
	var section = this.g.selectAll("g.section").data(this.dps);
	var enter = section.enter().append("svg:g").attr("class").string("section").attr("transform").stringf(function(d,i) {
		$s.push("rg.view.svg.chart.FunnelChart::redraw@182");
		var $spos = $s.length;
		var $tmp = "translate(0," + (me.topheight + i * (me.padding + me.h)) + ")";
		$s.pop();
		return $tmp;
		$s.pop();
	});
	if(null != this.click) enter.on("click",function(d,_) {
		$s.push("rg.view.svg.chart.FunnelChart::redraw@187");
		var $spos = $s.length;
		me.click(d,me.stats);
		$s.pop();
	});
	enter.on("mouseover",function(d,i) {
		$s.push("rg.view.svg.chart.FunnelChart::redraw@188");
		var $spos = $s.length;
		me.mouseOver(d,i,me.stats);
		$s.pop();
	});
	var funnel = enter.append("svg:path").attr("class").stringf(function(d,i) {
		$s.push("rg.view.svg.chart.FunnelChart::redraw@191");
		var $spos = $s.length;
		var $tmp = "funnel-outside fill-" + i;
		$s.pop();
		return $tmp;
		$s.pop();
	}).attr("d").stringf(function(d,i) {
		$s.push("rg.view.svg.chart.FunnelChart::redraw@192");
		var $spos = $s.length;
		var t = diagonal2.diagonal(d,i).split("C");
		t.shift();
		var d2 = "C" + t.join("C");
		var $tmp = diagonal1.diagonal(d,i) + conj2(d,i) + d2 + conj1(d,i);
		$s.pop();
		return $tmp;
		$s.pop();
	});
	if(this.displayGradient) enter.eachNode($closure(this,"externalGradient"));
	var ga = this.g.selectAll("g.arrow").data(this.dps).enter().append("svg:g").attr("class").string("arrow").attr("transform").stringf(function(d,i) {
		$s.push("rg.view.svg.chart.FunnelChart::redraw@206");
		var $spos = $s.length;
		var $tmp = "translate(" + me.width / 2 + "," + (me.topheight + me.h * i + me.arrowSize / 2) + ")";
		$s.pop();
		return $tmp;
		$s.pop();
	});
	ga.each(function(d,i) {
		$s.push("rg.view.svg.chart.FunnelChart::redraw@210");
		var $spos = $s.length;
		if(null == me.labelArrow) {
			$s.pop();
			return;
		}
		var text = me.labelArrow(d,me.stats);
		if(null == text) {
			$s.pop();
			return;
		}
		var node = thx.js.Selection.getCurrent();
		node.append("svg:path").attr("transform").string("scale(1.1,0.85)translate(1,1)").attr("class").string("shadow").style("fill").string("#000").attr("opacity")["float"](.25).attr("d").string(thx.svg.Symbol.arrowDownWide(me.arrowSize * me.arrowSize));
		node.append("svg:path").attr("transform").string("scale(1.1,0.8)").attr("d").string(thx.svg.Symbol.arrowDownWide(me.arrowSize * me.arrowSize));
		var label = new rg.view.svg.widget.Label(node,true,true,true);
		label.setAnchor(rg.view.svg.widget.GridAnchor.Bottom);
		label.setText(text);
		$s.pop();
	});
	ga.each(function(d,i) {
		$s.push("rg.view.svg.chart.FunnelChart::redraw@238");
		var $spos = $s.length;
		if(null == me.labelDataPoint) {
			$s.pop();
			return;
		}
		var text = me.labelDataPoint(d,me.stats);
		if(null == text) {
			$s.pop();
			return;
		}
		var balloon = new rg.view.svg.widget.Balloon(me.g);
		balloon.setBoundingBox({ x : me.width / 2 + me.arrowSize / 3 * 2, y : 0, width : me.width, height : me.height});
		balloon.setPreferredSide(3);
		balloon.setText(text.split("\n"));
		balloon.moveTo(me.width / 2,me.topheight + me.h * .6 + (me.h + me.padding) * i,false);
		$s.pop();
	});
	$s.pop();
}
rg.view.svg.chart.FunnelChart.prototype.mouseOver = function(dp,i,stats) {
	$s.push("rg.view.svg.chart.FunnelChart::mouseOver");
	var $spos = $s.length;
	if(null == this.labelDataPointOver) {
		$s.pop();
		return;
	}
	var text = this.labelDataPointOver(dp,stats);
	if(null == text) this.tooltip.hide(); else {
		this.tooltip.show();
		this.tooltip.setText(text.split("\n"));
		this.moveTooltip(this.width / 2,this.topheight + this.h * .6 + (this.h + this.padding) * i,true);
	}
	$s.pop();
}
rg.view.svg.chart.FunnelChart.prototype.init = function() {
	$s.push("rg.view.svg.chart.FunnelChart::init");
	var $spos = $s.length;
	rg.view.svg.chart.Chart.prototype.init.call(this);
	if(null != this.tooltip) this.tooltip.setPreferredSide(1);
	this.defs = this.g.classed().add("funnel-chart").append("svg:defs");
	$s.pop();
}
rg.view.svg.chart.FunnelChart.prototype.internalGradient = function(d) {
	$s.push("rg.view.svg.chart.FunnelChart::internalGradient");
	var $spos = $s.length;
	var color = rg.view.svg.util.RGColors.parse(d.style("fill").get(),"#cccccc"), stops = this.defs.append("svg:radialGradient").attr("id").string("rg_funnel_int_gradient_0").attr("cx").string("50%").attr("fx").string("75%").attr("cy").string("20%").attr("r").string(Math.round(75) + "%");
	stops.append("svg:stop").attr("offset").string("0%").attr("stop-color").string(thx.color.Hsl.darker(thx.color.Hsl.toHsl(color),1.25 * this.gradientLightness).toRgbString());
	stops.append("svg:stop").attr("offset").string("100%").attr("stop-color").string(thx.color.Hsl.darker(thx.color.Hsl.toHsl(color),0.4 * this.gradientLightness).toRgbString());
	d.attr("style").string("fill:url(#rg_funnel_int_gradient_0)");
	$s.pop();
}
rg.view.svg.chart.FunnelChart.prototype.externalGradient = function(n,i) {
	$s.push("rg.view.svg.chart.FunnelChart::externalGradient");
	var $spos = $s.length;
	var g = thx.js.Dom.selectNode(n), d = g.select("path"), color = thx.color.Hsl.toHsl(rg.view.svg.util.RGColors.parse(d.style("fill").get(),"#cccccc")), vn = this.next(i), vc = this.dpvalue(this.dps[i]), ratio = Math.round(vn / vc * 100) / 100, id = "rg_funnel_ext_gradient_" + color.hex("#") + "-" + ratio;
	var stops = this.defs.append("svg:radialGradient").attr("id").string(id).attr("cx").string("50%").attr("cy").string("0%").attr("r").string("110%");
	var top = color.hex("#");
	stops.append("svg:stop").attr("offset").string("10%").attr("stop-color").string(top);
	var middlecolor = thx.color.Hsl.darker(color,1 + Math.log(ratio) / (2.5 * this.gradientLightness)).hex("#");
	stops.append("svg:stop").attr("offset").string("50%").attr("stop-color").string(middlecolor);
	stops.append("svg:stop").attr("offset").string("90%").attr("stop-color").string(top);
	d.attr("style").string("fill:url(#" + id + ")");
	$s.pop();
}
rg.view.svg.chart.FunnelChart.prototype.__class__ = rg.view.svg.chart.FunnelChart;
rg.controller.info.InfoCartesianChart = function(p) {
	if( p === $_ ) return;
	$s.push("rg.controller.info.InfoCartesianChart::new");
	var $spos = $s.length;
	this.animation = new rg.controller.info.InfoAnimation();
	this.label = new rg.controller.info.InfoLabelAxis();
	this.segment = new rg.controller.info.InfoSegment();
	this.displayMinorTick = function(_) {
		$s.push("rg.controller.info.InfoCartesianChart::new@43");
		var $spos = $s.length;
		$s.pop();
		return true;
		$s.pop();
	};
	this.displayMajorTick = function(_) {
		$s.push("rg.controller.info.InfoCartesianChart::new@44");
		var $spos = $s.length;
		$s.pop();
		return true;
		$s.pop();
	};
	this.displayLabelTick = function(_) {
		$s.push("rg.controller.info.InfoCartesianChart::new@45");
		var $spos = $s.length;
		$s.pop();
		return true;
		$s.pop();
	};
	this.displayAnchorLineTick = function(_) {
		$s.push("rg.controller.info.InfoCartesianChart::new@46");
		var $spos = $s.length;
		$s.pop();
		return false;
		$s.pop();
	};
	this.displayMinorRule = function(_) {
		$s.push("rg.controller.info.InfoCartesianChart::new@48");
		var $spos = $s.length;
		$s.pop();
		return false;
		$s.pop();
	};
	this.displayMajorRule = function(_) {
		$s.push("rg.controller.info.InfoCartesianChart::new@49");
		var $spos = $s.length;
		$s.pop();
		return false;
		$s.pop();
	};
	this.displayAnchorLineRule = function(_) {
		$s.push("rg.controller.info.InfoCartesianChart::new@50");
		var $spos = $s.length;
		$s.pop();
		return false;
		$s.pop();
	};
	this.labelOrientation = function(_) {
		$s.push("rg.controller.info.InfoCartesianChart::new@52");
		var $spos = $s.length;
		$s.pop();
		return null;
		$s.pop();
	};
	this.labelAnchor = function(_) {
		$s.push("rg.controller.info.InfoCartesianChart::new@53");
		var $spos = $s.length;
		$s.pop();
		return null;
		$s.pop();
	};
	this.labelAngle = function(_) {
		$s.push("rg.controller.info.InfoCartesianChart::new@54");
		var $spos = $s.length;
		$s.pop();
		return null;
		$s.pop();
	};
	this.lengthTickMinor = 2;
	this.lengthTickMajor = 5;
	this.paddingTickMinor = 1;
	this.paddingTickMajor = 1;
	this.paddingLabel = 10;
	$s.pop();
}
rg.controller.info.InfoCartesianChart.__name__ = ["rg","controller","info","InfoCartesianChart"];
rg.controller.info.InfoCartesianChart.filters = function() {
	$s.push("rg.controller.info.InfoCartesianChart::filters");
	var $spos = $s.length;
	var $tmp = [{ field : "animation", validator : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@67");
		var $spos = $s.length;
		var $tmp = Reflect.isObject(v) && null == Type.getClass(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@68");
		var $spos = $s.length;
		var $tmp = [{ field : "animation", value : rg.controller.info.Info.feed(new rg.controller.info.InfoAnimation(),v)}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "segmenton", validator : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@74");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@75");
		var $spos = $s.length;
		var $tmp = [{ field : "segment", value : rg.controller.info.Info.feed(new rg.controller.info.InfoSegment(),{ on : v})}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "segment", validator : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@81");
		var $spos = $s.length;
		var $tmp = Reflect.isObject(v) && null == Type.getClass(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@82");
		var $spos = $s.length;
		var $tmp = [{ field : "segment", value : rg.controller.info.Info.feed(new rg.controller.info.InfoSegment(),v)}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "y0property", validator : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@88");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "click", validator : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@92");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "label", validator : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@96");
		var $spos = $s.length;
		var $tmp = Reflect.isObject(v) && null == Type.getClass(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@97");
		var $spos = $s.length;
		var $tmp = [{ field : "label", value : rg.controller.info.Info.feed(new rg.controller.info.InfoLabelAxis(),v)}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "displaytickmarks", validator : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@103");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v) || Std["is"](v,Bool);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@104");
		var $spos = $s.length;
		var $tmp = [{ field : "displayMinorTick", value : Std["is"](v,Bool)?function(_) {
			$s.push("rg.controller.info.InfoCartesianChart::filters@104@106");
			var $spos = $s.length;
			$s.pop();
			return v;
			$s.pop();
		}:v},{ field : "displayMajorTick", value : Std["is"](v,Bool)?function(_) {
			$s.push("rg.controller.info.InfoCartesianChart::filters@104@109");
			var $spos = $s.length;
			$s.pop();
			return v;
			$s.pop();
		}:v},{ field : "displayLabelTick", value : Std["is"](v,Bool)?function(_) {
			$s.push("rg.controller.info.InfoCartesianChart::filters@104@112");
			var $spos = $s.length;
			$s.pop();
			return v;
			$s.pop();
		}:v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "displaytickminor", validator : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@116");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v) || Std["is"](v,Bool);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@117");
		var $spos = $s.length;
		var $tmp = [{ field : "displayMinorTick", value : Std["is"](v,Bool)?function(_) {
			$s.push("rg.controller.info.InfoCartesianChart::filters@117@119");
			var $spos = $s.length;
			$s.pop();
			return v;
			$s.pop();
		}:v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "displaytickmajor", validator : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@123");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v) || Std["is"](v,Bool);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@124");
		var $spos = $s.length;
		var $tmp = [{ field : "displayMajorTick", value : Std["is"](v,Bool)?function(_) {
			$s.push("rg.controller.info.InfoCartesianChart::filters@124@126");
			var $spos = $s.length;
			$s.pop();
			return v;
			$s.pop();
		}:v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "displayticklabel", validator : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@130");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v) || Std["is"](v,Bool);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@131");
		var $spos = $s.length;
		var $tmp = [{ field : "displayLabelTick", value : Std["is"](v,Bool)?function(_) {
			$s.push("rg.controller.info.InfoCartesianChart::filters@131@133");
			var $spos = $s.length;
			$s.pop();
			return v;
			$s.pop();
		}:v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "displayanchorlinetick", validator : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@137");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v) || Std["is"](v,Bool);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@138");
		var $spos = $s.length;
		var $tmp = [{ field : "displayAnchorLineTick", value : Std["is"](v,Bool)?function(_) {
			$s.push("rg.controller.info.InfoCartesianChart::filters@138@140");
			var $spos = $s.length;
			$s.pop();
			return v;
			$s.pop();
		}:v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "displayrules", validator : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@144");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v) || Std["is"](v,Bool);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@145");
		var $spos = $s.length;
		var $tmp = [{ field : "displayMinorRule", value : Std["is"](v,Bool)?function(_) {
			$s.push("rg.controller.info.InfoCartesianChart::filters@145@147");
			var $spos = $s.length;
			$s.pop();
			return v;
			$s.pop();
		}:v},{ field : "displayMajorRule", value : Std["is"](v,Bool)?function(_) {
			$s.push("rg.controller.info.InfoCartesianChart::filters@145@150");
			var $spos = $s.length;
			$s.pop();
			return v;
			$s.pop();
		}:v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "displayruleminor", validator : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@154");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v) || Std["is"](v,Bool);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@155");
		var $spos = $s.length;
		var $tmp = [{ field : "displayMinorRule", value : Std["is"](v,Bool)?function(_) {
			$s.push("rg.controller.info.InfoCartesianChart::filters@155@157");
			var $spos = $s.length;
			$s.pop();
			return v;
			$s.pop();
		}:v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "displayrulemajor", validator : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@161");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v) || Std["is"](v,Bool);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@162");
		var $spos = $s.length;
		var $tmp = [{ field : "displayMajorRule", value : Std["is"](v,Bool)?function(_) {
			$s.push("rg.controller.info.InfoCartesianChart::filters@162@164");
			var $spos = $s.length;
			$s.pop();
			return v;
			$s.pop();
		}:v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "displayanchorlinerule", validator : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@168");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v) || Std["is"](v,Bool);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@169");
		var $spos = $s.length;
		var $tmp = [{ field : "displayAnchorLineRule", value : Std["is"](v,Bool)?function(_) {
			$s.push("rg.controller.info.InfoCartesianChart::filters@169@171");
			var $spos = $s.length;
			$s.pop();
			return v;
			$s.pop();
		}:v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "lengthtick", validator : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@175");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Float);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@176");
		var $spos = $s.length;
		var $tmp = [{ field : "lengthTickMajor", value : v},{ field : "lengthTickMinor", value : v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "lengthtickminor", validator : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@185");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Float);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@186");
		var $spos = $s.length;
		var $tmp = [{ field : "lengthTickMinor", value : v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "lengthtickmajor", validator : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@192");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Float);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@193");
		var $spos = $s.length;
		var $tmp = [{ field : "lengthTickMajor", value : v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "paddingtick", validator : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@199");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Float);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@200");
		var $spos = $s.length;
		var $tmp = [{ field : "paddingTickMajor", value : v},{ field : "paddingTickMinor", value : v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "paddingtickminor", validator : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@209");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Float);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@210");
		var $spos = $s.length;
		var $tmp = [{ field : "paddingTickMinor", value : v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "paddingtickmajor", validator : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@216");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Float);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@217");
		var $spos = $s.length;
		var $tmp = [{ field : "paddingTickMajor", value : v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "paddingticklabel", validator : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@223");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Float);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@224");
		var $spos = $s.length;
		var $tmp = [{ field : "paddingLabel", value : v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "labelorientation", validator : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@230");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v) || Std["is"](v,String);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@231");
		var $spos = $s.length;
		var $tmp = [{ field : "labelOrientation", value : Std["is"](v,String)?function(_) {
			$s.push("rg.controller.info.InfoCartesianChart::filters@231@233");
			var $spos = $s.length;
			$s.pop();
			return v;
			$s.pop();
		}:v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "labelanchor", validator : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@237");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v) || Std["is"](v,String);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@238");
		var $spos = $s.length;
		var $tmp = [{ field : "labelAnchor", value : Std["is"](v,String)?function(_) {
			$s.push("rg.controller.info.InfoCartesianChart::filters@238@240");
			var $spos = $s.length;
			$s.pop();
			return v;
			$s.pop();
		}:v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "labelangle", validator : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@244");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v) || Std["is"](v,Float);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@245");
		var $spos = $s.length;
		var $tmp = [{ field : "labelAngle", value : Std["is"](v,Float)?function(_) {
			$s.push("rg.controller.info.InfoCartesianChart::filters@245@247");
			var $spos = $s.length;
			$s.pop();
			return v;
			$s.pop();
		}:v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}}];
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.controller.info.InfoCartesianChart.prototype.animation = null;
rg.controller.info.InfoCartesianChart.prototype.segment = null;
rg.controller.info.InfoCartesianChart.prototype.click = null;
rg.controller.info.InfoCartesianChart.prototype.label = null;
rg.controller.info.InfoCartesianChart.prototype.y0property = null;
rg.controller.info.InfoCartesianChart.prototype.displayMinorTick = null;
rg.controller.info.InfoCartesianChart.prototype.displayMajorTick = null;
rg.controller.info.InfoCartesianChart.prototype.displayLabelTick = null;
rg.controller.info.InfoCartesianChart.prototype.displayAnchorLineTick = null;
rg.controller.info.InfoCartesianChart.prototype.displayMinorRule = null;
rg.controller.info.InfoCartesianChart.prototype.displayMajorRule = null;
rg.controller.info.InfoCartesianChart.prototype.displayAnchorLineRule = null;
rg.controller.info.InfoCartesianChart.prototype.labelOrientation = null;
rg.controller.info.InfoCartesianChart.prototype.labelAnchor = null;
rg.controller.info.InfoCartesianChart.prototype.labelAngle = null;
rg.controller.info.InfoCartesianChart.prototype.lengthTickMinor = null;
rg.controller.info.InfoCartesianChart.prototype.lengthTickMajor = null;
rg.controller.info.InfoCartesianChart.prototype.paddingTickMinor = null;
rg.controller.info.InfoCartesianChart.prototype.paddingTickMajor = null;
rg.controller.info.InfoCartesianChart.prototype.paddingLabel = null;
rg.controller.info.InfoCartesianChart.prototype.__class__ = rg.controller.info.InfoCartesianChart;
rg.controller.info.InfoStreamGraph = function(p) {
	if( p === $_ ) return;
	$s.push("rg.controller.info.InfoStreamGraph::new");
	var $spos = $s.length;
	rg.controller.info.InfoCartesianChart.call(this);
	this.interpolation = thx.svg.LineInterpolator.Cardinal();
	this.effect = rg.view.svg.chart.StreamEffect.GradientVertical(0.75);
	$s.pop();
}
rg.controller.info.InfoStreamGraph.__name__ = ["rg","controller","info","InfoStreamGraph"];
rg.controller.info.InfoStreamGraph.__super__ = rg.controller.info.InfoCartesianChart;
for(var k in rg.controller.info.InfoCartesianChart.prototype ) rg.controller.info.InfoStreamGraph.prototype[k] = rg.controller.info.InfoCartesianChart.prototype[k];
rg.controller.info.InfoStreamGraph.filters = function() {
	$s.push("rg.controller.info.InfoStreamGraph::filters");
	var $spos = $s.length;
	var $tmp = [{ field : "interpolation", validator : function(v) {
		$s.push("rg.controller.info.InfoStreamGraph::filters@31");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoStreamGraph::filters@32");
		var $spos = $s.length;
		var $tmp = [{ field : "interpolation", value : thx.svg.LineInterpolators.parse(v)}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "effect", validator : function(v) {
		$s.push("rg.controller.info.InfoStreamGraph::filters@38");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoStreamGraph::filters@39");
		var $spos = $s.length;
		var $tmp = [{ field : "effect", value : rg.view.svg.chart.StreamEffects.parse(v)}];
		$s.pop();
		return $tmp;
		$s.pop();
	}}].concat(rg.controller.info.InfoCartesianChart.filters());
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.controller.info.InfoStreamGraph.prototype.interpolation = null;
rg.controller.info.InfoStreamGraph.prototype.effect = null;
rg.controller.info.InfoStreamGraph.prototype.__class__ = rg.controller.info.InfoStreamGraph;
rg.controller.visualization.VisualizationLineChart = function(layout) {
	if( layout === $_ ) return;
	$s.push("rg.controller.visualization.VisualizationLineChart::new");
	var $spos = $s.length;
	rg.controller.visualization.VisualizationCartesian.call(this,layout);
	$s.pop();
}
rg.controller.visualization.VisualizationLineChart.__name__ = ["rg","controller","visualization","VisualizationLineChart"];
rg.controller.visualization.VisualizationLineChart.__super__ = rg.controller.visualization.VisualizationCartesian;
for(var k in rg.controller.visualization.VisualizationCartesian.prototype ) rg.controller.visualization.VisualizationLineChart.prototype[k] = rg.controller.visualization.VisualizationCartesian.prototype[k];
rg.controller.visualization.VisualizationLineChart.prototype.infoLine = null;
rg.controller.visualization.VisualizationLineChart.prototype.initAxes = function() {
	$s.push("rg.controller.visualization.VisualizationLineChart::initAxes");
	var $spos = $s.length;
	this.xvariable = this.independentVariables[0];
	this.yvariables = this.dependentVariables.map(function(d,_) {
		$s.push("rg.controller.visualization.VisualizationLineChart::initAxes@23");
		var $spos = $s.length;
		$s.pop();
		return d;
		$s.pop();
	});
	$s.pop();
}
rg.controller.visualization.VisualizationLineChart.prototype.initChart = function() {
	$s.push("rg.controller.visualization.VisualizationLineChart::initChart");
	var $spos = $s.length;
	var chart = new rg.view.svg.chart.LineChart(this.layout.getPanel(this.layout.mainPanelName));
	chart.symbol = this.infoLine.symbol;
	chart.symbolStyle = this.infoLine.symbolStyle;
	chart.lineInterpolator = this.infoLine.interpolation;
	chart.lineEffect = this.infoLine.effect;
	if(null == this.independentVariables[0].scaleDistribution) this.independentVariables[0].scaleDistribution = rg.data.ScaleDistribution.ScaleFill;
	if(null != this.infoLine.y0property) chart.y0property = this.infoLine.y0property; else if(this.infoLine.displayarea) chart.y0property = "";
	this.chart = chart;
	$s.pop();
}
rg.controller.visualization.VisualizationLineChart.prototype.transformData = function(dps) {
	$s.push("rg.controller.visualization.VisualizationLineChart::transformData");
	var $spos = $s.length;
	var results = [], segmenter = new rg.data.Segmenter(this.info.segment.on,this.info.segment.transform,this.info.segment.scale);
	var _g1 = 0, _g = this.dependentVariables.length;
	while(_g1 < _g) {
		var i = _g1++;
		var variable = this.dependentVariables[i];
		var values = rg.util.DataPoints.filterByDependents(dps,[variable]);
		results.push(segmenter.segment(values));
	}
	$s.pop();
	return results;
	$s.pop();
}
rg.controller.visualization.VisualizationLineChart.prototype.__class__ = rg.controller.visualization.VisualizationLineChart;
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
thx.js.AccessTween.prototype.transitionCharsTween = function(value) {
	$s.push("thx.js.AccessTween::transitionCharsTween");
	var $spos = $s.length;
	var $tmp = function(d,i,a) {
		$s.push("thx.js.AccessTween::transitionCharsTween@42");
		var $spos = $s.length;
		var $tmp = Strings.interpolateCharsf(a,value);
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessTween.prototype.transitionCharsTweenf = function(f) {
	$s.push("thx.js.AccessTween::transitionCharsTweenf");
	var $spos = $s.length;
	var $tmp = function(d,i,a) {
		$s.push("thx.js.AccessTween::transitionCharsTweenf@47");
		var $spos = $s.length;
		var $tmp = Strings.interpolateCharsf(a,f(d,i));
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
		$s.push("thx.js.AccessTween::transitionFloatTween@52");
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
		$s.push("thx.js.AccessTween::transitionFloatTweenf@57");
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
Strings.interpolateChars = function(v,a,b,equation) {
	$s.push("Strings::interpolateChars");
	var $spos = $s.length;
	var $tmp = (Strings.interpolateCharsf(a,b,equation))(v);
	$s.pop();
	return $tmp;
	$s.pop();
}
Strings.interpolateCharsf = function(a,b,equation) {
	$s.push("Strings::interpolateCharsf");
	var $spos = $s.length;
	var aa = a.split(""), ab = b.split("");
	while(aa.length > ab.length) ab.insert(0," ");
	while(ab.length > aa.length) aa.insert(0," ");
	var ai = [];
	var _g1 = 0, _g = aa.length;
	while(_g1 < _g) {
		var i = _g1++;
		ai[i] = Strings.interpolateCharf(aa[i],ab[i]);
	}
	var $tmp = function(v) {
		$s.push("Strings::interpolateCharsf@509");
		var $spos = $s.length;
		var r = [];
		var _g1 = 0, _g = ai.length;
		while(_g1 < _g) {
			var i = _g1++;
			r[i] = ai[i](v);
		}
		var $tmp = StringTools.trim(r.join(""));
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
Strings.interpolateChar = function(v,a,b,equation) {
	$s.push("Strings::interpolateChar");
	var $spos = $s.length;
	var $tmp = (Strings.interpolateCharf(a,b,equation))(v);
	$s.pop();
	return $tmp;
	$s.pop();
}
Strings.interpolateCharf = function(a,b,equation) {
	$s.push("Strings::interpolateCharf");
	var $spos = $s.length;
	var ca = a.charCodeAt(0), cb = b.charCodeAt(0), i = Ints.interpolatef(ca,cb,equation);
	var $tmp = function(v) {
		$s.push("Strings::interpolateCharf@528");
		var $spos = $s.length;
		var $tmp = String.fromCharCode(i(v));
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
		$s.push("Strings::ellipsisf@541");
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
rg.view.layout.LayoutX = function(width,height,container) {
	if( width === $_ ) return;
	$s.push("rg.view.layout.LayoutX::new");
	var $spos = $s.length;
	rg.view.layout.Layout.call(this,width,height,container);
	this.titleOnTop = true;
	$s.pop();
}
rg.view.layout.LayoutX.__name__ = ["rg","view","layout","LayoutX"];
rg.view.layout.LayoutX.__super__ = rg.view.layout.Layout;
for(var k in rg.view.layout.Layout.prototype ) rg.view.layout.LayoutX.prototype[k] = rg.view.layout.Layout.prototype[k];
rg.view.layout.LayoutX.prototype.main = null;
rg.view.layout.LayoutX.prototype.titleOnTop = null;
rg.view.layout.LayoutX.prototype.bottomcontainer = null;
rg.view.layout.LayoutX.prototype.bottommiddlecontainer = null;
rg.view.layout.LayoutX.prototype.maincontainer = null;
rg.view.layout.LayoutX.prototype.middlecontainer = null;
rg.view.layout.LayoutX.prototype.xtickmarks = null;
rg.view.layout.LayoutX.prototype.title = null;
rg.view.layout.LayoutX.prototype.xtitle = null;
rg.view.layout.LayoutX.prototype.getContext = function(name) {
	$s.push("rg.view.layout.LayoutX::getContext");
	var $spos = $s.length;
	switch(name) {
	case "title":
		if(null == this.title) this.title = new rg.view.layout.PanelContext(this.space.createPanelAt(this.titleOnTop?0:1,rg.view.frame.FrameLayout.Fixed(0,0,0)),this.titleOnTop?rg.view.layout.Anchor.Bottom:rg.view.layout.Anchor.Top);
		var $tmp = this.title;
		$s.pop();
		return $tmp;
	case "x":
		var $tmp = this.getXTickmarks();
		$s.pop();
		return $tmp;
	case "xtitle":
		var $tmp = this.getXTitle();
		$s.pop();
		return $tmp;
	default:
		$s.pop();
		return null;
	}
	$s.pop();
}
rg.view.layout.LayoutX.prototype.getPanel = function(name) {
	$s.push("rg.view.layout.LayoutX::getPanel");
	var $spos = $s.length;
	switch(name) {
	case "main":
		var $tmp = this.getMain();
		$s.pop();
		return $tmp;
	case "xtickmarks":
		var $tmp = this.getBottomContainer();
		$s.pop();
		return $tmp;
	default:
		var ctx = this.getContext(name);
		if(null == ctx) {
			$s.pop();
			return null;
		}
		var $tmp = ctx.panel;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
rg.view.layout.LayoutX.prototype.suggestSize = function(name,size) {
	$s.push("rg.view.layout.LayoutX::suggestSize");
	var $spos = $s.length;
	rg.view.layout.Layout.prototype.suggestSize.call(this,name,size);
	switch(name) {
	case "x":case "xtitle":
		var size1 = 0, c = this.getPanel("x");
		if(null != c) size1 += c.frame.height;
		c = this.getPanel("xtitle");
		if(null != c) size1 += c.frame.height;
		rg.view.layout.Layout.prototype.suggestSize.call(this,"xtickmarks",size1);
		break;
	}
	$s.pop();
}
rg.view.layout.LayoutX.prototype.getXTitle = function() {
	$s.push("rg.view.layout.LayoutX::getXTitle");
	var $spos = $s.length;
	if(null == this.xtitle) this.xtitle = new rg.view.layout.PanelContext(this.getBottomMiddleContainer().createPanel(rg.view.frame.FrameLayout.Fixed(0,0,0)),rg.view.layout.Anchor.Top);
	var $tmp = this.xtitle;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.layout.LayoutX.prototype.getMainContainer = function() {
	$s.push("rg.view.layout.LayoutX::getMainContainer");
	var $spos = $s.length;
	if(null == this.maincontainer) this.maincontainer = this.space.createContainerAt(this.titleOnTop?1:0,rg.view.frame.FrameLayout.Fill(0,0),rg.view.frame.Orientation.Vertical);
	var $tmp = this.maincontainer;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.layout.LayoutX.prototype.getMiddleContainer = function() {
	$s.push("rg.view.layout.LayoutX::getMiddleContainer");
	var $spos = $s.length;
	if(null == this.middlecontainer) this.middlecontainer = this.getMainContainer().createContainerAt(0,rg.view.frame.FrameLayout.Fill(0,0),rg.view.frame.Orientation.Horizontal);
	var $tmp = this.middlecontainer;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.layout.LayoutX.prototype.getBottomContainer = function() {
	$s.push("rg.view.layout.LayoutX::getBottomContainer");
	var $spos = $s.length;
	if(null == this.bottomcontainer) this.bottomcontainer = this.getMainContainer().createContainerAt(1,rg.view.frame.FrameLayout.Fixed(0,0,0),rg.view.frame.Orientation.Horizontal);
	var $tmp = this.bottomcontainer;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.layout.LayoutX.prototype.getBottomMiddleContainer = function() {
	$s.push("rg.view.layout.LayoutX::getBottomMiddleContainer");
	var $spos = $s.length;
	if(null == this.bottommiddlecontainer) {
		var container = this.getBottomContainer();
		this.bottommiddlecontainer = container.createContainer(rg.view.frame.FrameLayout.Fill(0,0),rg.view.frame.Orientation.Vertical);
		this.bottommiddlecontainer.g.classed().add("axis-x");
	}
	var $tmp = this.bottommiddlecontainer;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.layout.LayoutX.prototype.getXTickmarks = function() {
	$s.push("rg.view.layout.LayoutX::getXTickmarks");
	var $spos = $s.length;
	if(null == this.xtickmarks) {
		var container = this.getBottomMiddleContainer();
		this.xtickmarks = new rg.view.layout.PanelContext(container.createPanelAt(0,rg.view.frame.FrameLayout.Fixed(0,0,0)),rg.view.layout.Anchor.Top);
	}
	var $tmp = this.xtickmarks;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.layout.LayoutX.prototype.getMain = function() {
	$s.push("rg.view.layout.LayoutX::getMain");
	var $spos = $s.length;
	if(null == this.main) this.main = this.getMiddleContainer().createPanelAt(1,rg.view.frame.FrameLayout.Fill(0,0));
	var $tmp = this.main;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.layout.LayoutX.prototype.feedOptions = function(info) {
	$s.push("rg.view.layout.LayoutX::feedOptions");
	var $spos = $s.length;
	rg.view.layout.Layout.prototype.feedOptions.call(this,info);
	this.titleOnTop = info.titleOnTop;
	$s.pop();
}
rg.view.layout.LayoutX.prototype.adjustPadding = function() {
	$s.push("rg.view.layout.LayoutX::adjustPadding");
	var $spos = $s.length;
	var top = null == this.title && null == this.paddings.top?8:this.paddings.top, bottom = (null == this.xtickmarks || !this.titleOnTop && null == this.title) && null == this.paddings.bottom?8:this.paddings.bottom, left = null == this.paddings.left?20:this.paddings.left, right = null == this.paddings.right?20:this.paddings.right;
	if(null != left || null != right) {
		this.suggestPanelPadding(this.getMain(),left,right);
		this.suggestPanelPadding(this.bottommiddlecontainer,left,right);
	}
	if(null != top || null != bottom) this.suggestPanelPadding(this.middlecontainer,top,bottom);
	$s.pop();
}
rg.view.layout.LayoutX.prototype.__class__ = rg.view.layout.LayoutX;
rg.view.layout.LayoutSimple = function(width,height,container) {
	if( width === $_ ) return;
	$s.push("rg.view.layout.LayoutSimple::new");
	var $spos = $s.length;
	rg.view.layout.Layout.call(this,width,height,container);
	this.titleOnTop = true;
	$s.pop();
}
rg.view.layout.LayoutSimple.__name__ = ["rg","view","layout","LayoutSimple"];
rg.view.layout.LayoutSimple.__super__ = rg.view.layout.Layout;
for(var k in rg.view.layout.Layout.prototype ) rg.view.layout.LayoutSimple.prototype[k] = rg.view.layout.Layout.prototype[k];
rg.view.layout.LayoutSimple.prototype.main = null;
rg.view.layout.LayoutSimple.prototype.titleOnTop = null;
rg.view.layout.LayoutSimple.prototype.getContext = function(name) {
	$s.push("rg.view.layout.LayoutSimple::getContext");
	var $spos = $s.length;
	switch(name) {
	case "title":
		if(null != this.title) {
			$s.pop();
			return null;
		}
		var $tmp = this.getTitle();
		$s.pop();
		return $tmp;
	default:
		$s.pop();
		return null;
	}
	$s.pop();
}
rg.view.layout.LayoutSimple.prototype.getPanel = function(name) {
	$s.push("rg.view.layout.LayoutSimple::getPanel");
	var $spos = $s.length;
	switch(name) {
	case "main":
		if(null == this.main) this.main = this.space.createPanelAt(this.titleOnTop?1:0,rg.view.frame.FrameLayout.Fill(0,0));
		var $tmp = this.main;
		$s.pop();
		return $tmp;
	case "title":
		var $tmp = this.getTitle().panel;
		$s.pop();
		return $tmp;
	default:
		$s.pop();
		return null;
	}
	$s.pop();
}
rg.view.layout.LayoutSimple.prototype.title = null;
rg.view.layout.LayoutSimple.prototype.getTitle = function() {
	$s.push("rg.view.layout.LayoutSimple::getTitle");
	var $spos = $s.length;
	if(null == this.title) this.title = new rg.view.layout.PanelContext(this.space.createPanelAt(this.titleOnTop?0:1,rg.view.frame.FrameLayout.Fixed(0,0,20)),this.titleOnTop?rg.view.layout.Anchor.Bottom:rg.view.layout.Anchor.Top);
	var $tmp = this.title;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.layout.LayoutSimple.prototype.feedOptions = function(info) {
	$s.push("rg.view.layout.LayoutSimple::feedOptions");
	var $spos = $s.length;
	rg.view.layout.Layout.prototype.feedOptions.call(this,info);
	this.titleOnTop = info.titleOnTop;
	$s.pop();
}
rg.view.layout.LayoutSimple.prototype.__class__ = rg.view.layout.LayoutSimple;
rg.controller.visualization.VisualizationScatterGraph = function(layout) {
	if( layout === $_ ) return;
	$s.push("rg.controller.visualization.VisualizationScatterGraph::new");
	var $spos = $s.length;
	rg.controller.visualization.VisualizationCartesian.call(this,layout);
	$s.pop();
}
rg.controller.visualization.VisualizationScatterGraph.__name__ = ["rg","controller","visualization","VisualizationScatterGraph"];
rg.controller.visualization.VisualizationScatterGraph.__super__ = rg.controller.visualization.VisualizationCartesian;
for(var k in rg.controller.visualization.VisualizationCartesian.prototype ) rg.controller.visualization.VisualizationScatterGraph.prototype[k] = rg.controller.visualization.VisualizationCartesian.prototype[k];
rg.controller.visualization.VisualizationScatterGraph.prototype.infoScatter = null;
rg.controller.visualization.VisualizationScatterGraph.prototype.initAxes = function() {
	$s.push("rg.controller.visualization.VisualizationScatterGraph::initAxes");
	var $spos = $s.length;
	this.xvariable = this.independentVariables[0];
	this.yvariables = this.dependentVariables.map(function(d,_) {
		$s.push("rg.controller.visualization.VisualizationScatterGraph::initAxes@23");
		var $spos = $s.length;
		$s.pop();
		return d;
		$s.pop();
	});
	$s.pop();
}
rg.controller.visualization.VisualizationScatterGraph.prototype.initChart = function() {
	$s.push("rg.controller.visualization.VisualizationScatterGraph::initChart");
	var $spos = $s.length;
	var chart = new rg.view.svg.chart.ScatterGraph(this.layout.getPanel(this.layout.mainPanelName));
	chart.symbol = this.infoScatter.symbol;
	chart.symbolStyle = this.infoScatter.symbolStyle;
	if(null == this.independentVariables[0].scaleDistribution) this.independentVariables[0].scaleDistribution = rg.data.ScaleDistribution.ScaleFill;
	this.chart = chart;
	$s.pop();
}
rg.controller.visualization.VisualizationScatterGraph.prototype.transformData = function(dps) {
	$s.push("rg.controller.visualization.VisualizationScatterGraph::transformData");
	var $spos = $s.length;
	var results = [], segmenter = new rg.data.Segmenter(this.info.segment.on,this.info.segment.transform,this.info.segment.scale);
	var _g = 0, _g1 = this.dependentVariables;
	while(_g < _g1.length) {
		var variable = _g1[_g];
		++_g;
		results.push(rg.util.DataPoints.filterByDependents(dps,[variable]));
	}
	$s.pop();
	return results;
	$s.pop();
}
rg.controller.visualization.VisualizationScatterGraph.prototype.__class__ = rg.controller.visualization.VisualizationScatterGraph;
rg.controller.App = function(executor) {
	if( executor === $_ ) return;
	$s.push("rg.controller.App::new");
	var $spos = $s.length;
	this.executor = executor;
	this.layouts = new Hash();
	$s.pop();
}
rg.controller.App.__name__ = ["rg","controller","App"];
rg.controller.App.nextid = function() {
	$s.push("rg.controller.App::nextid");
	var $spos = $s.length;
	var $tmp = ":RGVIZ-" + ++rg.controller.App.lastid;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.controller.App.prototype.executor = null;
rg.controller.App.prototype.layouts = null;
rg.controller.App.prototype.visualization = function(el,jsoptions) {
	$s.push("rg.controller.App::visualization");
	var $spos = $s.length;
	var node = el.node();
	var id = node.id;
	if(null == id) node.id = id = rg.controller.App.nextid();
	var cache = new Hash();
	var params = rg.controller.info.Info.feed(new rg.controller.info.InfoVisualizationOption(),jsoptions);
	var factoryDataSource = new rg.controller.factory.FactoryDataSource(cache,this.executor);
	var factoryDataContext = new rg.controller.factory.FactoryDataContext(factoryDataSource);
	var datacontexts = params.data.map(function(d,_) {
		$s.push("rg.controller.App::visualization@57");
		var $spos = $s.length;
		var $tmp = factoryDataContext.create(d);
		$s.pop();
		return $tmp;
		$s.pop();
	});
	var factoryVariableContexts = rg.controller.factory.FactoryVariableContexts.createFromDataContexts(datacontexts);
	var independentVariables = factoryVariableContexts.createIndependents(params.variables);
	var dependentVariables = factoryVariableContexts.createDependents(params.variables);
	var _g = 0;
	while(_g < datacontexts.length) {
		var context = datacontexts[_g];
		++_g;
		context.data.independentVariables = independentVariables;
		context.data.dependentVariables = dependentVariables;
	}
	var visualization = null;
	var infoviz = rg.controller.info.Info.feed(new rg.controller.info.InfoVisualizationType(),params.options);
	switch( (rg.controller.info.Info.feed(new rg.controller.info.InfoDomType(),params.options).kind)[1] ) {
	case 1:
		var layout = this.getLayout(id,params.options,el,infoviz.replace);
		visualization = new rg.controller.factory.FactorySvgVisualization().create(infoviz.type,layout,params.options);
		break;
	case 0:
		if(infoviz.replace) el.selectAll("*").remove();
		visualization = new rg.controller.factory.FactoryHtmlVisualization().create(infoviz.type,el,params.options);
		break;
	}
	visualization.setVariables(independentVariables.map(function(c,_) {
		$s.push("rg.controller.App::visualization@82");
		var $spos = $s.length;
		var $tmp = c.variable;
		$s.pop();
		return $tmp;
		$s.pop();
	}),dependentVariables.map(function(c,_) {
		$s.push("rg.controller.App::visualization@83");
		var $spos = $s.length;
		var $tmp = c.variable;
		$s.pop();
		return $tmp;
		$s.pop();
	}));
	visualization.init();
	var request = new rg.data.DataRequest(cache,datacontexts);
	request.onData = function(datapoints) {
		$s.push("rg.controller.App::visualization@87");
		var $spos = $s.length;
		visualization.feedData(datapoints);
		$s.pop();
	};
	request.request();
	$s.pop();
	return visualization;
	$s.pop();
}
rg.controller.App.prototype.getLayout = function(id,options,container,replace) {
	$s.push("rg.controller.App::getLayout");
	var $spos = $s.length;
	var old = this.layouts.get(id);
	if(null != old) {
		if(replace) old.destroy(); else {
			$s.pop();
			return old;
		}
	}
	var info = rg.controller.info.Info.feed(new rg.controller.info.InfoLayout(),options), layout = new rg.controller.factory.FactoryLayout().create(info,container);
	this.layouts.set(id,layout);
	$s.pop();
	return layout;
	$s.pop();
}
rg.controller.App.prototype.__class__ = rg.controller.App;
rg.view.svg.chart.HeatGrid = function(panel) {
	if( panel === $_ ) return;
	$s.push("rg.view.svg.chart.HeatGrid::new");
	var $spos = $s.length;
	rg.view.svg.chart.CartesianChart.call(this,panel);
	this.colorStart = thx.color.NamedColors.yellow;
	this.colorEnd = thx.color.NamedColors.green;
	this.levels = 20;
	this.useContour = false;
	$s.pop();
}
rg.view.svg.chart.HeatGrid.__name__ = ["rg","view","svg","chart","HeatGrid"];
rg.view.svg.chart.HeatGrid.__super__ = rg.view.svg.chart.CartesianChart;
for(var k in rg.view.svg.chart.CartesianChart.prototype ) rg.view.svg.chart.HeatGrid.prototype[k] = rg.view.svg.chart.CartesianChart.prototype[k];
rg.view.svg.chart.HeatGrid.prototype.colorStart = null;
rg.view.svg.chart.HeatGrid.prototype.colorEnd = null;
rg.view.svg.chart.HeatGrid.prototype.useContour = null;
rg.view.svg.chart.HeatGrid.prototype.dps = null;
rg.view.svg.chart.HeatGrid.prototype.colorScale = null;
rg.view.svg.chart.HeatGrid.prototype.variableDependent = null;
rg.view.svg.chart.HeatGrid.prototype.setVariables = function(variableIndependents,variableDependents) {
	$s.push("rg.view.svg.chart.HeatGrid::setVariables");
	var $spos = $s.length;
	this.xVariable = variableIndependents[0];
	this.yVariables = [variableIndependents[1]];
	this.variableDependent = variableDependents[0];
	var min = this.variableDependent.axis.scale(this.variableDependent.min,this.variableDependent.max,this.variableDependent.min), max = this.variableDependent.axis.scale(this.variableDependent.min,this.variableDependent.max,this.variableDependent.max);
	this.colorScale = thx.math.scale.Linears.forRgb().range([this.colorStart,this.colorEnd]).domain([min,max]);
	$s.pop();
}
rg.view.svg.chart.HeatGrid.prototype.init = function() {
	$s.push("rg.view.svg.chart.HeatGrid::init");
	var $spos = $s.length;
	rg.view.svg.chart.CartesianChart.prototype.init.call(this);
	this.g.classed().add("heat-grid");
	$s.pop();
}
rg.view.svg.chart.HeatGrid.prototype.resize = function() {
	$s.push("rg.view.svg.chart.HeatGrid::resize");
	var $spos = $s.length;
	rg.view.svg.chart.CartesianChart.prototype.resize.call(this);
	this.redraw();
	$s.pop();
}
rg.view.svg.chart.HeatGrid.prototype.data = function(dps) {
	$s.push("rg.view.svg.chart.HeatGrid::data");
	var $spos = $s.length;
	this.dps = dps;
	this.redraw();
	$s.pop();
}
rg.view.svg.chart.HeatGrid.prototype.value = function(dp) {
	$s.push("rg.view.svg.chart.HeatGrid::value");
	var $spos = $s.length;
	var v = Reflect.field(dp,this.variableDependent.type);
	var $tmp = this.scale(v);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.chart.HeatGrid.prototype.scale = function(v) {
	$s.push("rg.view.svg.chart.HeatGrid::scale");
	var $spos = $s.length;
	var $tmp = this.variableDependent.axis.scale(this.variableDependent.min,this.variableDependent.max,v);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.chart.HeatGrid.prototype.scaleValue = function(dp,i) {
	$s.push("rg.view.svg.chart.HeatGrid::scaleValue");
	var $spos = $s.length;
	var $tmp = this.colorScale.scale(this.value(dp));
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.chart.HeatGrid.prototype.xrange = null;
rg.view.svg.chart.HeatGrid.prototype.yrange = null;
rg.view.svg.chart.HeatGrid.prototype.cols = null;
rg.view.svg.chart.HeatGrid.prototype.rows = null;
rg.view.svg.chart.HeatGrid.prototype.w = null;
rg.view.svg.chart.HeatGrid.prototype.h = null;
rg.view.svg.chart.HeatGrid.prototype.stats = null;
rg.view.svg.chart.HeatGrid.prototype.levels = null;
rg.view.svg.chart.HeatGrid.prototype.x = function(dp,i) {
	$s.push("rg.view.svg.chart.HeatGrid::x");
	var $spos = $s.length;
	var $tmp = this.xrange.indexOf(Reflect.field(dp,this.xVariable.type)) * this.w;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.chart.HeatGrid.prototype.y = function(dp,i) {
	$s.push("rg.view.svg.chart.HeatGrid::y");
	var $spos = $s.length;
	var $tmp = this.height - (1 + this.yrange.indexOf(Reflect.field(dp,this.yVariables[0].type))) * this.h;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.chart.HeatGrid.prototype.redraw = function() {
	$s.push("rg.view.svg.chart.HeatGrid::redraw");
	var $spos = $s.length;
	if(null == this.dps || 0 == this.dps.length) {
		$s.pop();
		return;
	}
	this.stats = this.variableDependent.stats;
	this.xrange = this.range(this.xVariable);
	this.yrange = this.range(this.yVariables[0]);
	this.cols = this.xrange.length;
	this.rows = this.yrange.length;
	this.w = this.width / this.cols;
	this.h = this.height / this.rows;
	if(this.useContour) this.drawContour(); else this.drawSquares();
	$s.pop();
}
rg.view.svg.chart.HeatGrid.prototype.drawContour = function() {
	$s.push("rg.view.svg.chart.HeatGrid::drawContour");
	var $spos = $s.length;
	var me = this;
	var map = this.xrange.map(function(v,i) {
		$s.push("rg.view.svg.chart.HeatGrid::drawContour@123");
		var $spos = $s.length;
		var $tmp = Arrays.filter(me.dps,function(dp) {
			$s.push("rg.view.svg.chart.HeatGrid::drawContour@123@123");
			var $spos = $s.length;
			var $tmp = Reflect.field(dp,me.xVariable.type) == v;
			$s.pop();
			return $tmp;
			$s.pop();
		});
		$s.pop();
		return $tmp;
		$s.pop();
	}).map(function(arr,i) {
		$s.push("rg.view.svg.chart.HeatGrid::drawContour@123");
		var $spos = $s.length;
		var r = [];
		var _g1 = 0, _g = me.rows;
		while(_g1 < _g) {
			var i1 = [_g1++];
			r.push(Arrays.filter(arr,(function(i1) {
				$s.push("rg.view.svg.chart.HeatGrid::drawContour@123@126");
				var $spos = $s.length;
				var $tmp = function(dp) {
					$s.push("rg.view.svg.chart.HeatGrid::drawContour@123@126@126");
					var $spos = $s.length;
					var $tmp = Reflect.field(dp,me.yVariables[0].type) == me.yrange[i1[0]];
					$s.pop();
					return $tmp;
					$s.pop();
				};
				$s.pop();
				return $tmp;
				$s.pop();
			})(i1)).shift());
		}
		$s.pop();
		return r;
		$s.pop();
	}), level = 0.0, min = this.scale(this.variableDependent.min), max = this.scale(this.variableDependent.max), span = max - min, padding;
	var grid = function(x,y) {
		$s.push("rg.view.svg.chart.HeatGrid::drawContour@136");
		var $spos = $s.length;
		var ys = map[x];
		if(null == ys) {
			$s.pop();
			return false;
		}
		var dp = ys[y];
		if(null == dp) {
			$s.pop();
			return false;
		}
		var v = me.value(dp);
		var $tmp = v >= level;
		$s.pop();
		return $tmp;
		$s.pop();
	};
	var _g1 = 0, _g = this.levels;
	while(_g1 < _g) {
		var i = _g1++;
		var color = [this.colorScale.scale(level)];
		padding = 0;
		level = min + span / this.levels * i;
		var map1 = [this.createGridMap(grid)];
		var createContour = (function(map1,color) {
			$s.push("rg.view.svg.chart.HeatGrid::drawContour@155");
			var $spos = $s.length;
			var $tmp = function(start) {
				$s.push("rg.view.svg.chart.HeatGrid::drawContour@155@155");
				var $spos = $s.length;
				var contour = thx.geom.Contour.contour(grid,start).map((function(map1) {
					$s.push("rg.view.svg.chart.HeatGrid::drawContour@155@155@157");
					var $spos = $s.length;
					var $tmp = function(d,i1) {
						$s.push("rg.view.svg.chart.HeatGrid::drawContour@155@155@157@157");
						var $spos = $s.length;
						map1[0].remove(d[1] + "-" + d[0]);
						var $tmp = [padding + d[0] * me.w,padding + me.height - d[1] * me.h];
						$s.pop();
						return $tmp;
						$s.pop();
					};
					$s.pop();
					return $tmp;
					$s.pop();
				})(map1));
				if(contour.length > 0) contour.push(contour[0]);
				var line = thx.svg.Line.pointArray(thx.svg.LineInterpolator.Linear).shape(contour);
				me.g.append("svg:path").attr("d").string(line).style("fill").color(color[0]);
				$s.pop();
			};
			$s.pop();
			return $tmp;
			$s.pop();
		})(map1,color);
		createContour();
	}
	$s.pop();
}
rg.view.svg.chart.HeatGrid.prototype.createGridMap = function(grid) {
	$s.push("rg.view.svg.chart.HeatGrid::createGridMap");
	var $spos = $s.length;
	var map = new Hash();
	var _g1 = 0, _g = this.rows;
	while(_g1 < _g) {
		var r = _g1++;
		var _g3 = 0, _g2 = this.cols;
		while(_g3 < _g2) {
			var c = _g3++;
			if(grid(c,r)) map.set(r + "-" + c,[r,c]);
		}
	}
	$s.pop();
	return map;
	$s.pop();
}
rg.view.svg.chart.HeatGrid.prototype.drawSquares = function() {
	$s.push("rg.view.svg.chart.HeatGrid::drawSquares");
	var $spos = $s.length;
	var choice = this.g.selectAll("rect").data(this.dps);
	choice.enter().append("svg:rect").attr("x").floatf($closure(this,"x")).attr("y").floatf($closure(this,"y")).attr("width")["float"](this.w).attr("height")["float"](this.h).style("fill").colorf($closure(this,"scaleValue")).on("click",$closure(this,"onclick")).on("mouseover",$closure(this,"onmouseover"));
	$s.pop();
}
rg.view.svg.chart.HeatGrid.prototype.onmouseover = function(dp,i) {
	$s.push("rg.view.svg.chart.HeatGrid::onmouseover");
	var $spos = $s.length;
	if(null == this.labelDataPointOver) {
		$s.pop();
		return;
	}
	var text = this.labelDataPointOver(dp,this.stats);
	if(null == text) this.tooltip.hide(); else {
		this.tooltip.setText(text.split("\n"));
		this.moveTooltip(this.x(dp,i) + this.w / 2,this.y(dp,i) + this.h / 2);
		this.tooltip.show();
	}
	$s.pop();
}
rg.view.svg.chart.HeatGrid.prototype.onclick = function(dp,i) {
	$s.push("rg.view.svg.chart.HeatGrid::onclick");
	var $spos = $s.length;
	if(null == this.click) {
		$s.pop();
		return;
	}
	this.click(dp,this.stats);
	$s.pop();
}
rg.view.svg.chart.HeatGrid.prototype.range = function(variable) {
	$s.push("rg.view.svg.chart.HeatGrid::range");
	var $spos = $s.length;
	var v = Std["is"](variable,rg.data.VariableIndependent)?variable:null;
	if(null != v) {
		var $tmp = v.axis.range(v.min,v.max);
		$s.pop();
		return $tmp;
	}
	var tickmarks = variable.axis.ticks(variable.min,variable.max);
	var $tmp = tickmarks.map(function(d,i) {
		$s.push("rg.view.svg.chart.HeatGrid::range@235");
		var $spos = $s.length;
		var $tmp = d.getValue();
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.chart.HeatGrid.prototype.__class__ = rg.view.svg.chart.HeatGrid;
rg.view.svg.util.RGColors = function() { }
rg.view.svg.util.RGColors.__name__ = ["rg","view","svg","util","RGColors"];
rg.view.svg.util.RGColors.parse = function(s,alt) {
	$s.push("rg.view.svg.util.RGColors::parse");
	var $spos = $s.length;
	try {
		var c = thx.color.Colors.parse(s);
		if(null != c) {
			$s.pop();
			return c;
		}
	} catch( _ ) {
		$e = [];
		while($s.length >= $spos) $e.unshift($s.pop());
		$s.push($e[0]);
	}
	var $tmp = thx.color.Colors.parse(alt);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.util.RGColors.prototype.__class__ = rg.view.svg.util.RGColors;
rg.view.frame.Stack = function(width,height,orientation) {
	if( width === $_ ) return;
	$s.push("rg.view.frame.Stack::new");
	var $spos = $s.length;
	this.orientation = null == orientation?rg.view.frame.Orientation.Vertical:orientation;
	this.children = [];
	this.width = width;
	this.height = height;
	$s.pop();
}
rg.view.frame.Stack.__name__ = ["rg","view","frame","Stack"];
rg.view.frame.Stack.prototype.children = null;
rg.view.frame.Stack.prototype.width = null;
rg.view.frame.Stack.prototype.height = null;
rg.view.frame.Stack.prototype.orientation = null;
rg.view.frame.Stack.prototype.length = null;
rg.view.frame.Stack.prototype.moreSpaceRequired = function(size) {
	$s.push("rg.view.frame.Stack::moreSpaceRequired");
	var $spos = $s.length;
	$s.pop();
}
rg.view.frame.Stack.prototype.insertItem = function(pos,child) {
	$s.push("rg.view.frame.Stack::insertItem");
	var $spos = $s.length;
	if(null == child) {
		$s.pop();
		return this;
	}
	if(pos >= this.children.length) {
		var $tmp = this.addItem(child);
		$s.pop();
		return $tmp;
	}
	if(pos < 0) pos = 0;
	this.children.insert(pos,child);
	var f = child;
	f.setParent(this);
	this.reflow();
	$s.pop();
	return this;
	$s.pop();
}
rg.view.frame.Stack.prototype.addItem = function(child) {
	$s.push("rg.view.frame.Stack::addItem");
	var $spos = $s.length;
	if(null == child) {
		$s.pop();
		return this;
	}
	this.children.push(child);
	var f = child;
	f.setParent(this);
	this.reflow();
	$s.pop();
	return this;
	$s.pop();
}
rg.view.frame.Stack.prototype.addItems = function(it) {
	$s.push("rg.view.frame.Stack::addItems");
	var $spos = $s.length;
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
	$s.pop();
	return this;
	$s.pop();
}
rg.view.frame.Stack.prototype.removeChild = function(child) {
	$s.push("rg.view.frame.Stack::removeChild");
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
rg.view.frame.Stack.prototype.iterator = function() {
	$s.push("rg.view.frame.Stack::iterator");
	var $spos = $s.length;
	var $tmp = this.children.iterator();
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.frame.Stack.prototype.reflow = function() {
	$s.push("rg.view.frame.Stack::reflow");
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
	$s.pop();
}
rg.view.frame.Stack.prototype.getLength = function() {
	$s.push("rg.view.frame.Stack::getLength");
	var $spos = $s.length;
	var $tmp = this.children.length;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.frame.Stack.prototype.setSize = function(width,height) {
	$s.push("rg.view.frame.Stack::setSize");
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
rg.view.frame.Stack.prototype.toString = function() {
	$s.push("rg.view.frame.Stack::toString");
	var $spos = $s.length;
	var $tmp = "Stack [width: " + this.width + ", height: " + this.height + ", children: " + this.children.length + "]";
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.frame.Stack.prototype.__class__ = rg.view.frame.Stack;
rg.view.layout.ScalePattern = { __ename__ : ["rg","view","layout","ScalePattern"], __constructs__ : ["ScalesBefore","ScalesAfter","ScalesAlternating"] }
rg.view.layout.ScalePattern.ScalesBefore = ["ScalesBefore",0];
rg.view.layout.ScalePattern.ScalesBefore.toString = $estr;
rg.view.layout.ScalePattern.ScalesBefore.__enum__ = rg.view.layout.ScalePattern;
rg.view.layout.ScalePattern.ScalesAfter = ["ScalesAfter",1];
rg.view.layout.ScalePattern.ScalesAfter.toString = $estr;
rg.view.layout.ScalePattern.ScalesAfter.__enum__ = rg.view.layout.ScalePattern;
rg.view.layout.ScalePattern.ScalesAlternating = ["ScalesAlternating",2];
rg.view.layout.ScalePattern.ScalesAlternating.toString = $estr;
rg.view.layout.ScalePattern.ScalesAlternating.__enum__ = rg.view.layout.ScalePattern;
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
	var start = Arrays.min(this._domain), stop = Arrays.max(this._domain), span = stop - start, step = Math.pow(this.m,Math.floor(Math.log(span / this.m) / 2.302585092994046)), err = this.m / (span / step);
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
	var n = Math.max(this.m,-Math.floor(Math.log(this.tickRange().step) / 2.302585092994046 + .01));
	var $tmp = Floats.format(v,"D:" + n);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.scale.Linear.prototype.__class__ = thx.math.scale.Linear;
rg.util.DataPoints = function() { }
rg.util.DataPoints.__name__ = ["rg","util","DataPoints"];
rg.util.DataPoints.partition = function(dps,property,def) {
	$s.push("rg.util.DataPoints::partition");
	var $spos = $s.length;
	if(def == null) def = "default";
	var map = new thx.collection.HashList();
	var getBucket = function(n) {
		$s.push("rg.util.DataPoints::partition@21");
		var $spos = $s.length;
		var bucket = map.get(n);
		if(null == bucket) {
			bucket = [];
			map.set(n,bucket);
		}
		$s.pop();
		return bucket;
		$s.pop();
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
	var $tmp = map.array();
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.util.DataPoints.filterByIndependents = function(dps,variables) {
	$s.push("rg.util.DataPoints::filterByIndependents");
	var $spos = $s.length;
	var _g = 0;
	while(_g < variables.length) {
		var variable = [variables[_g]];
		++_g;
		var values = [variable[0].axis.range(variable[0].min,variable[0].max)];
		dps = Arrays.filter(dps,(function(values,variable) {
			$s.push("rg.util.DataPoints::filterByIndependents@49");
			var $spos = $s.length;
			var $tmp = function(dp) {
				$s.push("rg.util.DataPoints::filterByIndependents@49@49");
				var $spos = $s.length;
				var v = Reflect.field(dp,variable[0].type);
				if(null == v) {
					$s.pop();
					return false;
				}
				var $tmp = Arrays.exists(values[0],v);
				$s.pop();
				return $tmp;
				$s.pop();
			};
			$s.pop();
			return $tmp;
			$s.pop();
		})(values,variable));
	}
	$s.pop();
	return dps;
	$s.pop();
}
rg.util.DataPoints.filterByDependents = function(dps,variables) {
	$s.push("rg.util.DataPoints::filterByDependents");
	var $spos = $s.length;
	var _g = 0;
	while(_g < variables.length) {
		var variable = [variables[_g]];
		++_g;
		dps = Arrays.filter(dps,(function(variable) {
			$s.push("rg.util.DataPoints::filterByDependents@63");
			var $spos = $s.length;
			var $tmp = function(dp) {
				$s.push("rg.util.DataPoints::filterByDependents@63@63");
				var $spos = $s.length;
				if(null == Reflect.field(dp,variable[0].type)) {
					$s.pop();
					return false;
				} else {
					$s.pop();
					return true;
				}
				$s.pop();
			};
			$s.pop();
			return $tmp;
			$s.pop();
		})(variable));
	}
	$s.pop();
	return dps;
	$s.pop();
}
rg.util.DataPoints.value = function(dp,property) {
	$s.push("rg.util.DataPoints::value");
	var $spos = $s.length;
	var $tmp = Reflect.field(dp,property);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.util.DataPoints.valueAlt = function(dp,property,alt) {
	$s.push("rg.util.DataPoints::valueAlt");
	var $spos = $s.length;
	var v;
	var $tmp = null == (v = Reflect.field(dp,property))?alt:v;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.util.DataPoints.values = function(dps,property) {
	$s.push("rg.util.DataPoints::values");
	var $spos = $s.length;
	var $tmp = Arrays.filter(dps.map(function(dp,_) {
		$s.push("rg.util.DataPoints::values@83");
		var $spos = $s.length;
		var $tmp = Reflect.field(dp,property);
		$s.pop();
		return $tmp;
		$s.pop();
	}),function(d) {
		$s.push("rg.util.DataPoints::values@83");
		var $spos = $s.length;
		var $tmp = d != null;
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.util.DataPoints.id = function(dp,dependentProperties) {
	$s.push("rg.util.DataPoints::id");
	var $spos = $s.length;
	var o = Objects.clone(dp);
	var _g = 0;
	while(_g < dependentProperties.length) {
		var p = dependentProperties[_g];
		++_g;
		Reflect.deleteField(o,p);
	}
	var $tmp = haxe.Md5.encode(Dynamics.string(o));
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.util.DataPoints.prototype.__class__ = rg.util.DataPoints;
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
rg.controller.factory.FactoryHtmlVisualization = function(p) {
	$s.push("rg.controller.factory.FactoryHtmlVisualization::new");
	var $spos = $s.length;
	$s.pop();
}
rg.controller.factory.FactoryHtmlVisualization.__name__ = ["rg","controller","factory","FactoryHtmlVisualization"];
rg.controller.factory.FactoryHtmlVisualization.prototype.create = function(type,container,options) {
	$s.push("rg.controller.factory.FactoryHtmlVisualization::create");
	var $spos = $s.length;
	switch(type) {
	case "pivottable":
		var chart = new rg.controller.visualization.VisualizationPivotTable(container);
		chart.info = rg.controller.info.Info.feed(new rg.controller.info.InfoPivotTable(),options);
		$s.pop();
		return chart;
	case "leaderboard":
		var chart = new rg.controller.visualization.VisualizationLeaderboard(container);
		chart.info = rg.controller.info.Info.feed(new rg.controller.info.InfoLeaderboard(),options);
		$s.pop();
		return chart;
	default:
		throw new thx.error.Error("unsupported visualization '{0}'",null,type,{ fileName : "FactoryHtmlVisualization.hx", lineNumber : 35, className : "rg.controller.factory.FactoryHtmlVisualization", methodName : "create"});
	}
	$s.pop();
	return null;
	$s.pop();
}
rg.controller.factory.FactoryHtmlVisualization.prototype.__class__ = rg.controller.factory.FactoryHtmlVisualization;
rg.data.TickmarkTime = function(value,values,major,periodicity,scaleDistribution) {
	if( value === $_ ) return;
	$s.push("rg.data.TickmarkTime::new");
	var $spos = $s.length;
	rg.data.TickmarkOrdinal.call(this,values.indexOf(value),values,major,scaleDistribution);
	this.periodicity = periodicity;
	$s.pop();
}
rg.data.TickmarkTime.__name__ = ["rg","data","TickmarkTime"];
rg.data.TickmarkTime.__super__ = rg.data.TickmarkOrdinal;
for(var k in rg.data.TickmarkOrdinal.prototype ) rg.data.TickmarkTime.prototype[k] = rg.data.TickmarkOrdinal.prototype[k];
rg.data.TickmarkTime.prototype.periodicity = null;
rg.data.TickmarkTime.prototype.getLabel = function() {
	$s.push("rg.data.TickmarkTime::getLabel");
	var $spos = $s.length;
	var $tmp = rg.util.Periodicity.smartFormat(this.periodicity,this.values[this.pos]);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.TickmarkTime.prototype.__class__ = rg.data.TickmarkTime;
rg.data.source.rgquery.transform.TransformIntersectUtc = function(properties,fields,event,periodicity,unit) {
	if( properties === $_ ) return;
	$s.push("rg.data.source.rgquery.transform.TransformIntersectUtc::new");
	var $spos = $s.length;
	this.properties = properties;
	this.unit = unit;
	this.periodicity = periodicity;
	this.fields = fields;
	this.event = event;
	$s.pop();
}
rg.data.source.rgquery.transform.TransformIntersectUtc.__name__ = ["rg","data","source","rgquery","transform","TransformIntersectUtc"];
rg.data.source.rgquery.transform.TransformIntersectUtc.prototype.properties = null;
rg.data.source.rgquery.transform.TransformIntersectUtc.prototype.unit = null;
rg.data.source.rgquery.transform.TransformIntersectUtc.prototype.periodicity = null;
rg.data.source.rgquery.transform.TransformIntersectUtc.prototype.fields = null;
rg.data.source.rgquery.transform.TransformIntersectUtc.prototype.event = null;
rg.data.source.rgquery.transform.TransformIntersectUtc.prototype.transform = function(data) {
	$s.push("rg.data.source.rgquery.transform.TransformIntersectUtc::transform");
	var $spos = $s.length;
	var items = Objects.flatten(data,this.fields.length), properties = this.properties, unit = this.unit;
	if(null == items || 0 == items.length) {
		var $tmp = [];
		$s.pop();
		return $tmp;
	}
	var result = [];
	var _g = 0;
	while(_g < items.length) {
		var item = items[_g];
		++_g;
		var arr = item.value;
		var _g2 = 0, _g1 = arr.length;
		while(_g2 < _g1) {
			var i = _g2++;
			var p = Dynamics.clone(properties);
			Objects.addFields(p,this.fields,item.fields.map(rg.data.source.rgquery.transform.Transforms.typedValue));
			Objects.addFields(p,[rg.util.Properties.timeProperty(this.periodicity),unit],[Date.fromString(arr[i][0].datetime),arr[i][1]]);
			p.event = this.event;
			result.push(p);
		}
	}
	haxe.Log.trace(result,{ fileName : "TransformIntersectUtc.hx", lineNumber : 54, className : "rg.data.source.rgquery.transform.TransformIntersectUtc", methodName : "transform"});
	$s.pop();
	return result;
	$s.pop();
}
rg.data.source.rgquery.transform.TransformIntersectUtc.prototype.__class__ = rg.data.source.rgquery.transform.TransformIntersectUtc;
rg.data.source.rgquery.transform.TransformIntersectUtc.__interfaces__ = [rg.data.source.ITransform];
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
thx.error.Error.prototype.toStringError = function(pattern) {
	$s.push("thx.error.Error::toStringError");
	var $spos = $s.length;
	var prefix = Strings.format(null == pattern?thx.error.Error.errorPositionPattern:pattern,[this.pos.className,this.pos.methodName,this.pos.lineNumber,this.pos.fileName,this.pos.customParams]);
	var $tmp = prefix + this.toString();
	$s.pop();
	return $tmp;
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
		haxe.Log.trace("wrong parameters passed for pattern '" + this.message + "' at " + ps,{ fileName : "Error.hx", lineNumber : 42, className : "thx.error.Error", methodName : "toString"});
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
		var $tmp = rg.util.RGStrings.hstring(rg.util.RGStrings.range.matchedLeft()) + v1 + "-" + v2 + rg.util.RGStrings.hstring(rg.util.RGStrings.range.matchedRight());
		$s.pop();
		return $tmp;
	} else {
		var $tmp = rg.util.RGStrings.hstring(s);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
rg.util.RGStrings.hstring = function(s) {
	$s.push("rg.util.RGStrings::hstring");
	var $spos = $s.length;
	var $tmp = Strings.capitalize(Strings.humanize(s));
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.util.RGStrings.prototype.__class__ = rg.util.RGStrings;
if(!thx.geom) thx.geom = {}
thx.geom.Contour = function() { }
thx.geom.Contour.__name__ = ["thx","geom","Contour"];
thx.geom.Contour.contourStart = function(grid) {
	$s.push("thx.geom.Contour::contourStart");
	var $spos = $s.length;
	var x = 0, y = 0;
	while(true) {
		if(grid(x,y)) {
			var $tmp = [x,y];
			$s.pop();
			return $tmp;
		}
		if(x == 0) {
			x = y + 1;
			y = 0;
		} else {
			x = x - 1;
			y = y + 1;
		}
	}
	$s.pop();
	return null;
	$s.pop();
}
thx.geom.Contour.contour = function(grid,start) {
	$s.push("thx.geom.Contour::contour");
	var $spos = $s.length;
	var s = null == start?thx.geom.Contour.contourStart(grid):start, c = [], x = s[0], y = s[1], dx = 0, dy = 0, pdx = null, pdy = null, i = 0;
	do {
		i = 0;
		if(grid(x - 1,y - 1)) i += 1;
		if(grid(x,y - 1)) i += 2;
		if(grid(x - 1,y)) i += 4;
		if(grid(x,y)) i += 8;
		if(i == 6) {
			dx = pdy == -1?-1:1;
			dy = 0;
		} else if(i == 9) {
			dx = 0;
			dy = pdx == 1?-1:1;
		} else {
			dx = thx.geom.Contour.contourDx[i];
			dy = thx.geom.Contour.contourDy[i];
		}
		if(dx != pdx && dy != pdy) {
			c.push([x,y]);
			pdx = dx;
			pdy = dy;
		}
		x += dx;
		y += dy;
	} while(s[0] != x || s[1] != y);
	$s.pop();
	return c;
	$s.pop();
}
thx.geom.Contour.prototype.__class__ = thx.geom.Contour;
rg.view.layout.PanelContext = function(panel,anchor) {
	if( panel === $_ ) return;
	$s.push("rg.view.layout.PanelContext::new");
	var $spos = $s.length;
	this.panel = panel;
	this.anchor = anchor;
	$s.pop();
}
rg.view.layout.PanelContext.__name__ = ["rg","view","layout","PanelContext"];
rg.view.layout.PanelContext.prototype.panel = null;
rg.view.layout.PanelContext.prototype.anchor = null;
rg.view.layout.PanelContext.prototype.__class__ = rg.view.layout.PanelContext;
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
rg.data.Variable = function(type,axis,scaleDistribution,min,max) {
	if( type === $_ ) return;
	$s.push("rg.data.Variable::new");
	var $spos = $s.length;
	this.type = type;
	this.scaleDistribution = scaleDistribution;
	this.min = min;
	this.max = max;
	this.setAxis(axis);
	$s.pop();
}
rg.data.Variable.__name__ = ["rg","data","Variable"];
rg.data.Variable.prototype.type = null;
rg.data.Variable.prototype.min = null;
rg.data.Variable.prototype.max = null;
rg.data.Variable.prototype.scaleDistribution = null;
rg.data.Variable.prototype.axis = null;
rg.data.Variable.prototype.stats = null;
rg.data.Variable.prototype.setAxis = function(axis) {
	$s.push("rg.data.Variable::setAxis");
	var $spos = $s.length;
	this.axis = axis;
	if(Std["is"](axis,rg.data.AxisNumeric)) this.stats = new rg.data.StatsNumeric(); else this.stats = new rg.data.Stats();
	$s.pop();
}
rg.data.Variable.prototype.__class__ = rg.data.Variable;
rg.data.VariableIndependent = function(type,axis,scaleDistribution,min,max) {
	if( type === $_ ) return;
	$s.push("rg.data.VariableIndependent::new");
	var $spos = $s.length;
	rg.data.Variable.call(this,type,axis,scaleDistribution,min,max);
	$s.pop();
}
rg.data.VariableIndependent.__name__ = ["rg","data","VariableIndependent"];
rg.data.VariableIndependent.__super__ = rg.data.Variable;
for(var k in rg.data.Variable.prototype ) rg.data.VariableIndependent.prototype[k] = rg.data.Variable.prototype[k];
rg.data.VariableIndependent.prototype.__class__ = rg.data.VariableIndependent;
thx.collection.Sets = function() { }
thx.collection.Sets.__name__ = ["thx","collection","Sets"];
thx.collection.Sets.indexOf = function(set,value) {
	$s.push("thx.collection.Sets::indexOf");
	var $spos = $s.length;
	var $tmp = set._v.indexOf(value);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.collection.Sets.first = function(set) {
	$s.push("thx.collection.Sets::first");
	var $spos = $s.length;
	var $tmp = set._v[0];
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.collection.Sets.last = function(set) {
	$s.push("thx.collection.Sets::last");
	var $spos = $s.length;
	var $tmp = Arrays.last(set._v);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.collection.Sets.order = function(set,f) {
	$s.push("thx.collection.Sets::order");
	var $spos = $s.length;
	set._v.sort(null == f?Dynamics.compare:f);
	$s.pop();
	return set;
	$s.pop();
}
thx.collection.Sets.arr = function(set) {
	$s.push("thx.collection.Sets::arr");
	var $spos = $s.length;
	var $tmp = set._v;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.collection.Sets.prototype.__class__ = thx.collection.Sets;
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
thx.culture.FormatDate.hourShort = function(date,culture) {
	$s.push("thx.culture.FormatDate::hourShort");
	var $spos = $s.length;
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	if(null == culture.date.am) {
		var $tmp = thx.culture.FormatDate.format("%H",date,culture,false);
		$s.pop();
		return $tmp;
	} else {
		var $tmp = thx.culture.FormatDate.format("%l %p",date,culture,false);
		$s.pop();
		return $tmp;
	}
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
rg.view.svg.layer.TickmarksOrtho = function(panel,anchor) {
	if( panel === $_ ) return;
	$s.push("rg.view.svg.layer.TickmarksOrtho::new");
	var $spos = $s.length;
	rg.view.svg.panel.Layer.call(this,panel);
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
	$s.pop();
}
rg.view.svg.layer.TickmarksOrtho.__name__ = ["rg","view","svg","layer","TickmarksOrtho"];
rg.view.svg.layer.TickmarksOrtho.__super__ = rg.view.svg.panel.Layer;
for(var k in rg.view.svg.panel.Layer.prototype ) rg.view.svg.layer.TickmarksOrtho.prototype[k] = rg.view.svg.panel.Layer.prototype[k];
rg.view.svg.layer.TickmarksOrtho.prototype.anchor = null;
rg.view.svg.layer.TickmarksOrtho.prototype.displayMinor = null;
rg.view.svg.layer.TickmarksOrtho.prototype.displayMajor = null;
rg.view.svg.layer.TickmarksOrtho.prototype.displayLabel = null;
rg.view.svg.layer.TickmarksOrtho.prototype.displayAnchorLine = null;
rg.view.svg.layer.TickmarksOrtho.prototype.lengthMinor = null;
rg.view.svg.layer.TickmarksOrtho.prototype.lengthMajor = null;
rg.view.svg.layer.TickmarksOrtho.prototype.paddingMinor = null;
rg.view.svg.layer.TickmarksOrtho.prototype.paddingMajor = null;
rg.view.svg.layer.TickmarksOrtho.prototype.paddingLabel = null;
rg.view.svg.layer.TickmarksOrtho.prototype.labelOrientation = null;
rg.view.svg.layer.TickmarksOrtho.prototype.labelAnchor = null;
rg.view.svg.layer.TickmarksOrtho.prototype.labelAngle = null;
rg.view.svg.layer.TickmarksOrtho.prototype.desiredSize = null;
rg.view.svg.layer.TickmarksOrtho.prototype.tickLabel = null;
rg.view.svg.layer.TickmarksOrtho.prototype.translate = null;
rg.view.svg.layer.TickmarksOrtho.prototype.x1 = null;
rg.view.svg.layer.TickmarksOrtho.prototype.y1 = null;
rg.view.svg.layer.TickmarksOrtho.prototype.x2 = null;
rg.view.svg.layer.TickmarksOrtho.prototype.y2 = null;
rg.view.svg.layer.TickmarksOrtho.prototype.x = null;
rg.view.svg.layer.TickmarksOrtho.prototype.y = null;
rg.view.svg.layer.TickmarksOrtho.prototype.axis = null;
rg.view.svg.layer.TickmarksOrtho.prototype.min = null;
rg.view.svg.layer.TickmarksOrtho.prototype.max = null;
rg.view.svg.layer.TickmarksOrtho.prototype.resize = function() {
	$s.push("rg.view.svg.layer.TickmarksOrtho::resize");
	var $spos = $s.length;
	if(null == this.axis) {
		$s.pop();
		return;
	}
	if(this.displayAnchorLine) this.updateAnchorLine();
	this.redraw();
	$s.pop();
}
rg.view.svg.layer.TickmarksOrtho.prototype.update = function(axis,min,max) {
	$s.push("rg.view.svg.layer.TickmarksOrtho::update");
	var $spos = $s.length;
	this.axis = axis;
	this.min = min;
	this.max = max;
	this.redraw();
	$s.pop();
}
rg.view.svg.layer.TickmarksOrtho.prototype.updateAnchorLine = function() {
	$s.push("rg.view.svg.layer.TickmarksOrtho::updateAnchorLine");
	var $spos = $s.length;
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
	$s.pop();
}
rg.view.svg.layer.TickmarksOrtho.prototype.maxTicks = function() {
	$s.push("rg.view.svg.layer.TickmarksOrtho::maxTicks");
	var $spos = $s.length;
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
	var $tmp = Math.round(size / 2.5);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.layer.TickmarksOrtho.prototype.id = function(d,i) {
	$s.push("rg.view.svg.layer.TickmarksOrtho::id");
	var $spos = $s.length;
	var $tmp = "" + d.getValue();
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.layer.TickmarksOrtho.prototype.redraw = function() {
	$s.push("rg.view.svg.layer.TickmarksOrtho::redraw");
	var $spos = $s.length;
	this.desiredSize = Math.max(this.paddingMinor + this.lengthMinor,this.paddingMajor + this.lengthMajor);
	var ticks = this.maxTicks(), data = this.axis.ticks(this.min,this.max,ticks);
	var tick = this.g.selectAll("g.tick").data(data,$closure(this,"id"));
	var enter = tick.enter().append("svg:g").attr("class").string("tick").attr("transform").stringf(this.translate);
	if(this.displayMinor) enter.filter(function(d,i) {
		$s.push("rg.view.svg.layer.TickmarksOrtho::redraw@139");
		var $spos = $s.length;
		var $tmp = !d.major;
		$s.pop();
		return $tmp;
		$s.pop();
	}).append("svg:line").attr("x1").floatf(this.x1).attr("y1").floatf(this.y1).attr("x2").floatf(this.x2).attr("y2").floatf(this.y2).attr("class").stringf($closure(this,"tickClass"));
	if(this.displayMajor) enter.filter(function(d,i) {
		$s.push("rg.view.svg.layer.TickmarksOrtho::redraw@150");
		var $spos = $s.length;
		var $tmp = d.major;
		$s.pop();
		return $tmp;
		$s.pop();
	}).append("svg:line").attr("x1").floatf(this.x1).attr("y1").floatf(this.y1).attr("x2").floatf(this.x2).attr("y2").floatf(this.y2).attr("class").stringf($closure(this,"tickClass"));
	if(this.displayLabel) enter.eachNode($closure(this,"createLabel"));
	tick.update().attr("transform").stringf(this.translate);
	tick.exit().remove();
	$s.pop();
}
rg.view.svg.layer.TickmarksOrtho.prototype.createLabel = function(n,i) {
	$s.push("rg.view.svg.layer.TickmarksOrtho::createLabel");
	var $spos = $s.length;
	var d = Reflect.field(n,"__data__");
	if(!d.getMajor()) {
		$s.pop();
		return;
	}
	var label = new rg.view.svg.widget.Label(thx.js.Dom.selectNode(n),false,true,false);
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
	$s.pop();
}
rg.view.svg.layer.TickmarksOrtho.prototype.initf = function() {
	$s.push("rg.view.svg.layer.TickmarksOrtho::initf");
	var $spos = $s.length;
	switch( (this.anchor)[1] ) {
	case 0:
		this.translate = $closure(this,"translateTop");
		this.x1 = $closure(this,"x1Top");
		this.y1 = $closure(this,"y1Top");
		this.x2 = $closure(this,"x2Top");
		this.y2 = $closure(this,"y2Top");
		break;
	case 1:
		this.translate = $closure(this,"translateBottom");
		this.x1 = $closure(this,"x1Bottom");
		this.y1 = $closure(this,"y1Bottom");
		this.x2 = $closure(this,"x2Bottom");
		this.y2 = $closure(this,"y2Bottom");
		break;
	case 2:
		this.translate = $closure(this,"translateLeft");
		this.x1 = $closure(this,"x1Left");
		this.y1 = $closure(this,"y1Left");
		this.x2 = $closure(this,"x2Left");
		this.y2 = $closure(this,"y2Left");
		break;
	case 3:
		this.translate = $closure(this,"translateRight");
		this.x1 = $closure(this,"x1Right");
		this.y1 = $closure(this,"y1Right");
		this.x2 = $closure(this,"x2Right");
		this.y2 = $closure(this,"y2Right");
		break;
	}
	if(null == this.labelOrientation) {
		switch( (this.anchor)[1] ) {
		case 0:
		case 1:
			this.labelOrientation = rg.view.svg.widget.LabelOrientation.Orthogonal;
			break;
		case 2:
		case 3:
			this.labelOrientation = rg.view.svg.widget.LabelOrientation.Aligned;
			break;
		}
	}
	if(null == this.labelAnchor) {
		switch( (this.anchor)[1] ) {
		case 0:
			this.labelAnchor = rg.view.svg.widget.GridAnchor.Top;
			break;
		case 1:
			this.labelAnchor = rg.view.svg.widget.GridAnchor.Bottom;
			break;
		case 2:
			this.labelAnchor = rg.view.svg.widget.GridAnchor.Left;
			break;
		case 3:
			this.labelAnchor = rg.view.svg.widget.GridAnchor.Right;
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
	$s.pop();
}
rg.view.svg.layer.TickmarksOrtho.prototype.init = function() {
	$s.push("rg.view.svg.layer.TickmarksOrtho::init");
	var $spos = $s.length;
	this.initf();
	if(this.displayAnchorLine) {
		this.g.append("svg:line").attr("class").string("anchor-line");
		this.updateAnchorLine();
	}
	$s.pop();
}
rg.view.svg.layer.TickmarksOrtho.prototype.t = function(x,y) {
	$s.push("rg.view.svg.layer.TickmarksOrtho::t");
	var $spos = $s.length;
	var $tmp = "translate(" + x + "," + y + ")";
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.layer.TickmarksOrtho.prototype.translateTop = function(d,i) {
	$s.push("rg.view.svg.layer.TickmarksOrtho::translateTop");
	var $spos = $s.length;
	var $tmp = "translate(" + d.getDelta() * this.panel.frame.width + "," + 0 + ")";
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.layer.TickmarksOrtho.prototype.translateBottom = function(d,i) {
	$s.push("rg.view.svg.layer.TickmarksOrtho::translateBottom");
	var $spos = $s.length;
	var $tmp = "translate(" + d.getDelta() * this.panel.frame.width + "," + this.panel.frame.height + ")";
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.layer.TickmarksOrtho.prototype.translateLeft = function(d,i) {
	$s.push("rg.view.svg.layer.TickmarksOrtho::translateLeft");
	var $spos = $s.length;
	var $tmp = "translate(" + 0 + "," + (this.panel.frame.height - d.getDelta() * this.panel.frame.height) + ")";
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.layer.TickmarksOrtho.prototype.translateRight = function(d,i) {
	$s.push("rg.view.svg.layer.TickmarksOrtho::translateRight");
	var $spos = $s.length;
	var $tmp = "translate(" + this.panel.frame.width + "," + (this.panel.frame.height - d.getDelta() * this.panel.frame.height) + ")";
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.layer.TickmarksOrtho.prototype.x1Top = function(d,i) {
	$s.push("rg.view.svg.layer.TickmarksOrtho::x1Top");
	var $spos = $s.length;
	$s.pop();
	return 0;
	$s.pop();
}
rg.view.svg.layer.TickmarksOrtho.prototype.x1Bottom = function(d,i) {
	$s.push("rg.view.svg.layer.TickmarksOrtho::x1Bottom");
	var $spos = $s.length;
	$s.pop();
	return 0;
	$s.pop();
}
rg.view.svg.layer.TickmarksOrtho.prototype.x1Left = function(d,i) {
	$s.push("rg.view.svg.layer.TickmarksOrtho::x1Left");
	var $spos = $s.length;
	var $tmp = d.getMajor()?this.paddingMajor:this.paddingMinor;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.layer.TickmarksOrtho.prototype.x1Right = function(d,i) {
	$s.push("rg.view.svg.layer.TickmarksOrtho::x1Right");
	var $spos = $s.length;
	var $tmp = -(d.getMajor()?this.paddingMajor:this.paddingMinor);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.layer.TickmarksOrtho.prototype.y1Top = function(d,i) {
	$s.push("rg.view.svg.layer.TickmarksOrtho::y1Top");
	var $spos = $s.length;
	var $tmp = d.getMajor()?this.paddingMajor:this.paddingMinor;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.layer.TickmarksOrtho.prototype.y1Bottom = function(d,i) {
	$s.push("rg.view.svg.layer.TickmarksOrtho::y1Bottom");
	var $spos = $s.length;
	var $tmp = -(d.getMajor()?this.paddingMajor:this.paddingMinor);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.layer.TickmarksOrtho.prototype.y1Left = function(d,i) {
	$s.push("rg.view.svg.layer.TickmarksOrtho::y1Left");
	var $spos = $s.length;
	$s.pop();
	return 0;
	$s.pop();
}
rg.view.svg.layer.TickmarksOrtho.prototype.y1Right = function(d,i) {
	$s.push("rg.view.svg.layer.TickmarksOrtho::y1Right");
	var $spos = $s.length;
	$s.pop();
	return 0;
	$s.pop();
}
rg.view.svg.layer.TickmarksOrtho.prototype.x2Top = function(d,i) {
	$s.push("rg.view.svg.layer.TickmarksOrtho::x2Top");
	var $spos = $s.length;
	$s.pop();
	return 0;
	$s.pop();
}
rg.view.svg.layer.TickmarksOrtho.prototype.x2Bottom = function(d,i) {
	$s.push("rg.view.svg.layer.TickmarksOrtho::x2Bottom");
	var $spos = $s.length;
	$s.pop();
	return 0;
	$s.pop();
}
rg.view.svg.layer.TickmarksOrtho.prototype.x2Left = function(d,i) {
	$s.push("rg.view.svg.layer.TickmarksOrtho::x2Left");
	var $spos = $s.length;
	var $tmp = d.getMajor()?this.lengthMajor + this.paddingMajor:this.lengthMinor + this.paddingMinor;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.layer.TickmarksOrtho.prototype.x2Right = function(d,i) {
	$s.push("rg.view.svg.layer.TickmarksOrtho::x2Right");
	var $spos = $s.length;
	var $tmp = -(d.getMajor()?this.lengthMajor + this.paddingMajor:this.lengthMinor + this.paddingMinor);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.layer.TickmarksOrtho.prototype.y2Top = function(d,i) {
	$s.push("rg.view.svg.layer.TickmarksOrtho::y2Top");
	var $spos = $s.length;
	var $tmp = d.getMajor()?this.lengthMajor + this.paddingMajor:this.lengthMinor + this.paddingMinor;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.layer.TickmarksOrtho.prototype.y2Bottom = function(d,i) {
	$s.push("rg.view.svg.layer.TickmarksOrtho::y2Bottom");
	var $spos = $s.length;
	var $tmp = -(d.getMajor()?this.lengthMajor + this.paddingMajor:this.lengthMinor + this.paddingMinor);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.layer.TickmarksOrtho.prototype.y2Left = function(d,i) {
	$s.push("rg.view.svg.layer.TickmarksOrtho::y2Left");
	var $spos = $s.length;
	$s.pop();
	return 0;
	$s.pop();
}
rg.view.svg.layer.TickmarksOrtho.prototype.y2Right = function(d,i) {
	$s.push("rg.view.svg.layer.TickmarksOrtho::y2Right");
	var $spos = $s.length;
	$s.pop();
	return 0;
	$s.pop();
}
rg.view.svg.layer.TickmarksOrtho.prototype.tickClass = function(d,i) {
	$s.push("rg.view.svg.layer.TickmarksOrtho::tickClass");
	var $spos = $s.length;
	var $tmp = d.getMajor()?"major":null;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.layer.TickmarksOrtho.prototype.__class__ = rg.view.svg.layer.TickmarksOrtho;
rg.util.Properties = function() { }
rg.util.Properties.__name__ = ["rg","util","Properties"];
rg.util.Properties.isTime = function(s) {
	$s.push("rg.util.Properties::isTime");
	var $spos = $s.length;
	var $tmp = s.indexOf("#time:") >= 0;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.util.Properties.periodicity = function(s) {
	$s.push("rg.util.Properties::periodicity");
	var $spos = $s.length;
	var $tmp = s.substr(s.indexOf("#time:") + "#time:".length);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.util.Properties.timeProperty = function(periodicity) {
	$s.push("rg.util.Properties::timeProperty");
	var $spos = $s.length;
	var $tmp = "." + "#time:" + periodicity;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.util.Properties.humanize = function(s) {
	$s.push("rg.util.Properties::humanize");
	var $spos = $s.length;
	var $tmp = rg.util.RGStrings.humanize(Strings.rtrim(Strings.ltrim(s,"."),"."));
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.util.Properties.prototype.__class__ = rg.util.Properties;
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
rg.data.source.rgquery.transform.TransformIntersectGroupUtc = function(properties,fields,event,periodicity,unit) {
	if( properties === $_ ) return;
	$s.push("rg.data.source.rgquery.transform.TransformIntersectGroupUtc::new");
	var $spos = $s.length;
	this.properties = properties;
	this.unit = unit;
	this.periodicity = periodicity;
	this.fields = fields;
	this.event = event;
	$s.pop();
}
rg.data.source.rgquery.transform.TransformIntersectGroupUtc.__name__ = ["rg","data","source","rgquery","transform","TransformIntersectGroupUtc"];
rg.data.source.rgquery.transform.TransformIntersectGroupUtc.prototype.properties = null;
rg.data.source.rgquery.transform.TransformIntersectGroupUtc.prototype.unit = null;
rg.data.source.rgquery.transform.TransformIntersectGroupUtc.prototype.periodicity = null;
rg.data.source.rgquery.transform.TransformIntersectGroupUtc.prototype.groupby = null;
rg.data.source.rgquery.transform.TransformIntersectGroupUtc.prototype.fields = null;
rg.data.source.rgquery.transform.TransformIntersectGroupUtc.prototype.event = null;
rg.data.source.rgquery.transform.TransformIntersectGroupUtc.prototype.transform = function(data) {
	$s.push("rg.data.source.rgquery.transform.TransformIntersectGroupUtc::transform");
	var $spos = $s.length;
	var items = Objects.flatten(data,this.fields.length), properties = this.properties, unit = this.unit;
	if(null == items || 0 == items.length) {
		var $tmp = [];
		$s.pop();
		return $tmp;
	}
	var result = [], shift = Reflect.field(items[0].value[0][0],this.periodicity);
	var _g = 0;
	while(_g < items.length) {
		var item = items[_g];
		++_g;
		var arr = item.value;
		var _g2 = 0, _g1 = arr.length;
		while(_g2 < _g1) {
			var i = _g2++;
			var p = Dynamics.clone(properties);
			Objects.addFields(p,this.fields,item.fields.map(rg.data.source.rgquery.transform.Transforms.typedValue));
			Objects.addFields(p,[rg.util.Properties.timeProperty(this.periodicity),unit],[Reflect.field(arr[i][0],this.periodicity) - shift,arr[i][1]]);
			p.event = this.event;
			result.push(p);
		}
	}
	$s.pop();
	return result;
	$s.pop();
}
rg.data.source.rgquery.transform.TransformIntersectGroupUtc.prototype.__class__ = rg.data.source.rgquery.transform.TransformIntersectGroupUtc;
rg.data.source.rgquery.transform.TransformIntersectGroupUtc.__interfaces__ = [rg.data.source.ITransform];
if(!thx.geom.layout) thx.geom.layout = {}
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
if(typeof haxe=='undefined') haxe = {}
haxe.Md5 = function(p) {
	$s.push("haxe.Md5::new");
	var $spos = $s.length;
	$s.pop();
}
haxe.Md5.__name__ = ["haxe","Md5"];
haxe.Md5.encode = function(s) {
	$s.push("haxe.Md5::encode");
	var $spos = $s.length;
	var $tmp = new haxe.Md5().doEncode(s);
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Md5.prototype.bitOR = function(a,b) {
	$s.push("haxe.Md5::bitOR");
	var $spos = $s.length;
	var lsb = a & 1 | b & 1;
	var msb31 = a >>> 1 | b >>> 1;
	var $tmp = msb31 << 1 | lsb;
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Md5.prototype.bitXOR = function(a,b) {
	$s.push("haxe.Md5::bitXOR");
	var $spos = $s.length;
	var lsb = a & 1 ^ b & 1;
	var msb31 = a >>> 1 ^ b >>> 1;
	var $tmp = msb31 << 1 | lsb;
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Md5.prototype.bitAND = function(a,b) {
	$s.push("haxe.Md5::bitAND");
	var $spos = $s.length;
	var lsb = a & 1 & (b & 1);
	var msb31 = a >>> 1 & b >>> 1;
	var $tmp = msb31 << 1 | lsb;
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Md5.prototype.addme = function(x,y) {
	$s.push("haxe.Md5::addme");
	var $spos = $s.length;
	var lsw = (x & 65535) + (y & 65535);
	var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	var $tmp = msw << 16 | lsw & 65535;
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Md5.prototype.rhex = function(num) {
	$s.push("haxe.Md5::rhex");
	var $spos = $s.length;
	var str = "";
	var hex_chr = "0123456789abcdef";
	var _g = 0;
	while(_g < 4) {
		var j = _g++;
		str += hex_chr.charAt(num >> j * 8 + 4 & 15) + hex_chr.charAt(num >> j * 8 & 15);
	}
	$s.pop();
	return str;
	$s.pop();
}
haxe.Md5.prototype.str2blks = function(str) {
	$s.push("haxe.Md5::str2blks");
	var $spos = $s.length;
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
	$s.pop();
	return blks;
	$s.pop();
}
haxe.Md5.prototype.rol = function(num,cnt) {
	$s.push("haxe.Md5::rol");
	var $spos = $s.length;
	var $tmp = num << cnt | num >>> 32 - cnt;
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Md5.prototype.cmn = function(q,a,b,x,s,t) {
	$s.push("haxe.Md5::cmn");
	var $spos = $s.length;
	var $tmp = this.addme(this.rol(this.addme(this.addme(a,q),this.addme(x,t)),s),b);
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Md5.prototype.ff = function(a,b,c,d,x,s,t) {
	$s.push("haxe.Md5::ff");
	var $spos = $s.length;
	var $tmp = this.cmn(this.bitOR(this.bitAND(b,c),this.bitAND(~b,d)),a,b,x,s,t);
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Md5.prototype.gg = function(a,b,c,d,x,s,t) {
	$s.push("haxe.Md5::gg");
	var $spos = $s.length;
	var $tmp = this.cmn(this.bitOR(this.bitAND(b,d),this.bitAND(c,~d)),a,b,x,s,t);
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Md5.prototype.hh = function(a,b,c,d,x,s,t) {
	$s.push("haxe.Md5::hh");
	var $spos = $s.length;
	var $tmp = this.cmn(this.bitXOR(this.bitXOR(b,c),d),a,b,x,s,t);
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Md5.prototype.ii = function(a,b,c,d,x,s,t) {
	$s.push("haxe.Md5::ii");
	var $spos = $s.length;
	var $tmp = this.cmn(this.bitXOR(c,this.bitOR(b,~d)),a,b,x,s,t);
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Md5.prototype.doEncode = function(str) {
	$s.push("haxe.Md5::doEncode");
	var $spos = $s.length;
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
	var $tmp = this.rhex(a) + this.rhex(b) + this.rhex(c) + this.rhex(d);
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Md5.prototype.__class__ = haxe.Md5;
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
haxe.StackItem = { __ename__ : ["haxe","StackItem"], __constructs__ : ["CFunction","Module","FilePos","Method","Lambda"] }
haxe.StackItem.CFunction = ["CFunction",0];
haxe.StackItem.CFunction.toString = $estr;
haxe.StackItem.CFunction.__enum__ = haxe.StackItem;
haxe.StackItem.Module = function(m) { var $x = ["Module",1,m]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.FilePos = function(s,file,line) { var $x = ["FilePos",2,s,file,line]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Method = function(classname,method) { var $x = ["Method",3,classname,method]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Lambda = function(v) { var $x = ["Lambda",4,v]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.Stack = function() { }
haxe.Stack.__name__ = ["haxe","Stack"];
haxe.Stack.callStack = function() {
	$s.push("haxe.Stack::callStack");
	var $spos = $s.length;
	var $tmp = haxe.Stack.makeStack("$s");
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Stack.exceptionStack = function() {
	$s.push("haxe.Stack::exceptionStack");
	var $spos = $s.length;
	var $tmp = haxe.Stack.makeStack("$e");
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Stack.toString = function(stack) {
	$s.push("haxe.Stack::toString");
	var $spos = $s.length;
	var b = new StringBuf();
	var _g = 0;
	while(_g < stack.length) {
		var s = stack[_g];
		++_g;
		b.b[b.b.length] = "\nCalled from ";
		haxe.Stack.itemToString(b,s);
	}
	var $tmp = b.b.join("");
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Stack.itemToString = function(b,s) {
	$s.push("haxe.Stack::itemToString");
	var $spos = $s.length;
	var $e = (s);
	switch( $e[1] ) {
	case 0:
		b.b[b.b.length] = "a C function";
		break;
	case 1:
		var m = $e[2];
		b.b[b.b.length] = "module ";
		b.b[b.b.length] = m;
		break;
	case 2:
		var line = $e[4], file = $e[3], s1 = $e[2];
		if(s1 != null) {
			haxe.Stack.itemToString(b,s1);
			b.b[b.b.length] = " (";
		}
		b.b[b.b.length] = file;
		b.b[b.b.length] = " line ";
		b.b[b.b.length] = line;
		if(s1 != null) b.b[b.b.length] = ")";
		break;
	case 3:
		var meth = $e[3], cname = $e[2];
		b.b[b.b.length] = cname;
		b.b[b.b.length] = ".";
		b.b[b.b.length] = meth;
		break;
	case 4:
		var n = $e[2];
		b.b[b.b.length] = "local function #";
		b.b[b.b.length] = n;
		break;
	}
	$s.pop();
}
haxe.Stack.makeStack = function(s) {
	$s.push("haxe.Stack::makeStack");
	var $spos = $s.length;
	var a = (function($this) {
		var $r;
		try {
			$r = eval(s);
		} catch( e ) {
			$r = (function($this) {
				var $r;
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				$r = [];
				return $r;
			}($this));
		}
		return $r;
	}(this));
	var m = new Array();
	var _g1 = 0, _g = a.length - (s == "$s"?2:0);
	while(_g1 < _g) {
		var i = _g1++;
		var d = a[i].split("::");
		m.unshift(haxe.StackItem.Method(d[0],d[1]));
	}
	$s.pop();
	return m;
	$s.pop();
}
haxe.Stack.prototype.__class__ = haxe.Stack;
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
rg.data.ScaleDistributions = function() { }
rg.data.ScaleDistributions.__name__ = ["rg","data","ScaleDistributions"];
rg.data.ScaleDistributions.distribute = function(scale,pos,values) {
	$s.push("rg.data.ScaleDistributions::distribute");
	var $spos = $s.length;
	switch( (scale)[1] ) {
	case 0:
		var $tmp = (pos + 0.5) / values;
		$s.pop();
		return $tmp;
	case 1:
		var $tmp = pos / (values - 1);
		$s.pop();
		return $tmp;
	case 2:
		var $tmp = pos / values;
		$s.pop();
		return $tmp;
	case 3:
		var $tmp = (pos + 1) / values;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
rg.data.ScaleDistributions.prototype.__class__ = rg.data.ScaleDistributions;
rg.view.svg.widget.Label = function(container,dontflip,shadow,outline) {
	if( container === $_ ) return;
	$s.push("rg.view.svg.widget.Label::new");
	var $spos = $s.length;
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
	var cls = Arrays.addIf(Arrays.addIf([],!outline,"nooutline"),!shadow,"noshadow");
	this.ttext = this.gtext.append("svg:text").attr("class").string(cls.join(" "));
	this.dontFlip = dontflip;
	if(outline) this.setShadowOffset(1,1.25); else this.setShadowOffset(0.5,0.5);
	this.x = 0;
	this.y = 0;
	this.angle = 0;
	this["orientation"] = rg.view.svg.widget.LabelOrientation.FixedAngle(0);
	this["anchor"] = rg.view.svg.widget.GridAnchor.Center;
	$s.pop();
}
rg.view.svg.widget.Label.__name__ = ["rg","view","svg","widget","Label"];
rg.view.svg.widget.Label.prototype.text = null;
rg.view.svg.widget.Label.prototype.orientation = null;
rg.view.svg.widget.Label.prototype.anchor = null;
rg.view.svg.widget.Label.prototype.x = null;
rg.view.svg.widget.Label.prototype.y = null;
rg.view.svg.widget.Label.prototype.angle = null;
rg.view.svg.widget.Label.prototype.dontFlip = null;
rg.view.svg.widget.Label.prototype.shadowOffsetX = null;
rg.view.svg.widget.Label.prototype.shadowOffsetY = null;
rg.view.svg.widget.Label.prototype.shadow = null;
rg.view.svg.widget.Label.prototype.outline = null;
rg.view.svg.widget.Label.prototype.g = null;
rg.view.svg.widget.Label.prototype.gshadow = null;
rg.view.svg.widget.Label.prototype.gtext = null;
rg.view.svg.widget.Label.prototype.gshadowrot = null;
rg.view.svg.widget.Label.prototype.ttext = null;
rg.view.svg.widget.Label.prototype.toutline = null;
rg.view.svg.widget.Label.prototype.tshadow = null;
rg.view.svg.widget.Label.prototype.addClass = function(name) {
	$s.push("rg.view.svg.widget.Label::addClass");
	var $spos = $s.length;
	this.g.classed().add(name);
	$s.pop();
}
rg.view.svg.widget.Label.prototype.removeClass = function(name) {
	$s.push("rg.view.svg.widget.Label::removeClass");
	var $spos = $s.length;
	this.g.classed().remove(name);
	$s.pop();
}
rg.view.svg.widget.Label.prototype.getSize = function() {
	$s.push("rg.view.svg.widget.Label::getSize");
	var $spos = $s.length;
	try {
		var $tmp = this.g.node().getBBox();
		$s.pop();
		return $tmp;
	} catch( e ) {
		$e = [];
		while($s.length >= $spos) $e.unshift($s.pop());
		$s.push($e[0]);
		var $tmp = { width : 0.0, height : 0.0};
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
rg.view.svg.widget.Label.prototype.place = function(x,y,angle) {
	$s.push("rg.view.svg.widget.Label::place");
	var $spos = $s.length;
	this.x = x;
	this.y = y;
	this.angle = angle % 360;
	if(this.angle < 0) this.angle += 360;
	this.g.attr("transform").string("translate(" + x + "," + y + ")");
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
	$s.pop();
}
rg.view.svg.widget.Label.prototype.setShadowOffset = function(x,y) {
	$s.push("rg.view.svg.widget.Label::setShadowOffset");
	var $spos = $s.length;
	this.shadowOffsetX = x;
	this.shadowOffsetY = y;
	if(this.shadow) this.gshadow.attr("transform").string("translate(" + this.shadowOffsetX + "," + this.shadowOffsetY + ")");
	$s.pop();
}
rg.view.svg.widget.Label.prototype.setText = function(v) {
	$s.push("rg.view.svg.widget.Label::setText");
	var $spos = $s.length;
	this.text = v;
	if(this.outline) this.toutline.text().string(v);
	this.ttext.text().string(v);
	if(this.shadow) this.tshadow.text().string(v);
	this.reanchor();
	$s.pop();
	return v;
	$s.pop();
}
rg.view.svg.widget.Label.prototype.setOrientation = function(v) {
	$s.push("rg.view.svg.widget.Label::setOrientation");
	var $spos = $s.length;
	this.orientation = v;
	this.place(this.x,this.y,this.angle);
	$s.pop();
	return v;
	$s.pop();
}
rg.view.svg.widget.Label.prototype.setAnchor = function(v) {
	$s.push("rg.view.svg.widget.Label::setAnchor");
	var $spos = $s.length;
	this.anchor = v;
	this.reanchor();
	$s.pop();
	return v;
	$s.pop();
}
rg.view.svg.widget.Label.prototype.getBB = function() {
	$s.push("rg.view.svg.widget.Label::getBB");
	var $spos = $s.length;
	var h = this.ttext.style("font-size").getFloat();
	if(null == h || 0 >= h) h = this.ttext.node().getExtentOfChar("A").height;
	var $tmp = { width : this.ttext.node().getComputedTextLength(), height : h};
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.widget.Label.prototype.reanchor = function() {
	$s.push("rg.view.svg.widget.Label::reanchor");
	var $spos = $s.length;
	var bb = this.getBB(), x, y;
	var a = this.anchor;
	if(this.dontFlip) {
		switch( (this.orientation)[1] ) {
		case 1:
			if(this.angle > 90 && this.angle < 270) a = (function($this) {
				var $r;
				switch( (a)[1] ) {
				case 0:
					$r = rg.view.svg.widget.GridAnchor.BottomRight;
					break;
				case 1:
					$r = rg.view.svg.widget.GridAnchor.Bottom;
					break;
				case 2:
					$r = rg.view.svg.widget.GridAnchor.BottomLeft;
					break;
				case 3:
					$r = rg.view.svg.widget.GridAnchor.Right;
					break;
				case 4:
					$r = rg.view.svg.widget.GridAnchor.Center;
					break;
				case 5:
					$r = rg.view.svg.widget.GridAnchor.Left;
					break;
				case 6:
					$r = rg.view.svg.widget.GridAnchor.TopRight;
					break;
				case 7:
					$r = rg.view.svg.widget.GridAnchor.Top;
					break;
				case 8:
					$r = rg.view.svg.widget.GridAnchor.TopLeft;
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
					$r = rg.view.svg.widget.GridAnchor.BottomRight;
					break;
				case 1:
					$r = rg.view.svg.widget.GridAnchor.Bottom;
					break;
				case 2:
					$r = rg.view.svg.widget.GridAnchor.BottomLeft;
					break;
				case 3:
					$r = rg.view.svg.widget.GridAnchor.Right;
					break;
				case 4:
					$r = rg.view.svg.widget.GridAnchor.Center;
					break;
				case 5:
					$r = rg.view.svg.widget.GridAnchor.Left;
					break;
				case 6:
					$r = rg.view.svg.widget.GridAnchor.TopRight;
					break;
				case 7:
					$r = rg.view.svg.widget.GridAnchor.Top;
					break;
				case 8:
					$r = rg.view.svg.widget.GridAnchor.TopLeft;
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
	$s.pop();
}
rg.view.svg.widget.Label.prototype.destroy = function() {
	$s.push("rg.view.svg.widget.Label::destroy");
	var $spos = $s.length;
	this.g.remove();
	$s.pop();
}
rg.view.svg.widget.Label.prototype.__class__ = rg.view.svg.widget.Label;
rg.controller.factory.FactoryDataSource = function(cache,executor) {
	if( cache === $_ ) return;
	$s.push("rg.controller.factory.FactoryDataSource::new");
	var $spos = $s.length;
	this.cache = cache;
	this.parser = new rg.data.source.rgquery.QueryParser();
	this.executor = executor;
	$s.pop();
}
rg.controller.factory.FactoryDataSource.__name__ = ["rg","controller","factory","FactoryDataSource"];
rg.controller.factory.FactoryDataSource.prototype.cache = null;
rg.controller.factory.FactoryDataSource.prototype.parser = null;
rg.controller.factory.FactoryDataSource.prototype.executor = null;
rg.controller.factory.FactoryDataSource.prototype.create = function(info) {
	$s.push("rg.controller.factory.FactoryDataSource::create");
	var $spos = $s.length;
	if(null != info.namedData) {
		var data = this.cache.get(info.namedData);
		if(null == data) throw new thx.error.Error("the data source named '{0}' cannot be found in the current context",null,info.name,{ fileName : "FactoryDataSource.hx", lineNumber : 40, className : "rg.controller.factory.FactoryDataSource", methodName : "create"});
		$s.pop();
		return data;
	}
	if(null != info.data) {
		var $tmp = this.createFromData(info.data);
		$s.pop();
		return $tmp;
	}
	if(null != info.path && null != info.event) {
		var $tmp = this.createFromQuery(info.path,info.event,info.query,info.groupBy,info.timeZone,info.start,info.end);
		$s.pop();
		return $tmp;
	}
	throw new thx.error.Error("to create a query you need to reference by name an existing data source or provide  at least the data and the name or the event and the path parameters",null,null,{ fileName : "FactoryDataSource.hx", lineNumber : 51, className : "rg.controller.factory.FactoryDataSource", methodName : "create"});
	$s.pop();
}
rg.controller.factory.FactoryDataSource.prototype.createFromData = function(data) {
	$s.push("rg.controller.factory.FactoryDataSource::createFromData");
	var $spos = $s.length;
	var $tmp = new rg.data.source.DataSourceArray(data);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.controller.factory.FactoryDataSource.prototype.createFromQuery = function(path,event,query,groupby,timeZone,start,end) {
	$s.push("rg.controller.factory.FactoryDataSource::createFromQuery");
	var $spos = $s.length;
	if(null == query) query = "";
	var $tmp = new rg.data.source.DataSourceReportGrid(this.executor,path,event,this.parser.parse(query),groupby,timeZone,start,end);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.controller.factory.FactoryDataSource.prototype.__class__ = rg.controller.factory.FactoryDataSource;
rg.view.layout.Anchor = { __ename__ : ["rg","view","layout","Anchor"], __constructs__ : ["Top","Bottom","Left","Right"] }
rg.view.layout.Anchor.Top = ["Top",0];
rg.view.layout.Anchor.Top.toString = $estr;
rg.view.layout.Anchor.Top.__enum__ = rg.view.layout.Anchor;
rg.view.layout.Anchor.Bottom = ["Bottom",1];
rg.view.layout.Anchor.Bottom.toString = $estr;
rg.view.layout.Anchor.Bottom.__enum__ = rg.view.layout.Anchor;
rg.view.layout.Anchor.Left = ["Left",2];
rg.view.layout.Anchor.Left.toString = $estr;
rg.view.layout.Anchor.Left.__enum__ = rg.view.layout.Anchor;
rg.view.layout.Anchor.Right = ["Right",3];
rg.view.layout.Anchor.Right.toString = $estr;
rg.view.layout.Anchor.Right.__enum__ = rg.view.layout.Anchor;
rg.controller.info.InfoVisualizationOption = function(p) {
	$s.push("rg.controller.info.InfoVisualizationOption::new");
	var $spos = $s.length;
	$s.pop();
}
rg.controller.info.InfoVisualizationOption.__name__ = ["rg","controller","info","InfoVisualizationOption"];
rg.controller.info.InfoVisualizationOption.filters = function() {
	$s.push("rg.controller.info.InfoVisualizationOption::filters");
	var $spos = $s.length;
	var $tmp = [{ field : "axes", validator : function(v) {
		$s.push("rg.controller.info.InfoVisualizationOption::filters@22");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Array) || Reflect.isObject(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoVisualizationOption::filters@23");
		var $spos = $s.length;
		var $tmp = [{ field : "variables", value : Std["is"](v,Array)?v.map(function(v1,i) {
			$s.push("rg.controller.info.InfoVisualizationOption::filters@23@28");
			var $spos = $s.length;
			var $tmp = rg.controller.info.Info.feed(new rg.controller.info.InfoVariable(),v1);
			$s.pop();
			return $tmp;
			$s.pop();
		}):[rg.controller.info.Info.feed(new rg.controller.info.InfoVariable(),v)]}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "data", validator : function(v) {
		$s.push("rg.controller.info.InfoVisualizationOption::filters@34");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Array) || Reflect.isObject(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoVisualizationOption::filters@35");
		var $spos = $s.length;
		var $tmp = [{ field : "data", value : Std["is"](v,Array)?v.map(function(v1,i) {
			$s.push("rg.controller.info.InfoVisualizationOption::filters@35@40");
			var $spos = $s.length;
			var $tmp = rg.controller.info.Info.feed(new rg.controller.info.InfoDataContext(),v1);
			$s.pop();
			return $tmp;
			$s.pop();
		}):[rg.controller.info.Info.feed(new rg.controller.info.InfoDataContext(),v)]}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "options", validator : function(v) {
		$s.push("rg.controller.info.InfoVisualizationOption::filters@46");
		var $spos = $s.length;
		var $tmp = Reflect.isObject(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null}];
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.controller.info.InfoVisualizationOption.prototype.variables = null;
rg.controller.info.InfoVisualizationOption.prototype.data = null;
rg.controller.info.InfoVisualizationOption.prototype.options = null;
rg.controller.info.InfoVisualizationOption.prototype.__class__ = rg.controller.info.InfoVisualizationOption;
rg.data.source.rgquery.QueryParser = function(p) {
	$s.push("rg.data.source.rgquery.QueryParser::new");
	var $spos = $s.length;
	$s.pop();
}
rg.data.source.rgquery.QueryParser.__name__ = ["rg","data","source","rgquery","QueryParser"];
rg.data.source.rgquery.QueryParser.TOKEN_INDIVIDUAL_PARSE = null;
rg.data.source.rgquery.QueryParser.TOKEN_FIRST_PARSE = null;
rg.data.source.rgquery.QueryParser.TOKEN_CONDITION_PARSE = null;
rg.data.source.rgquery.QueryParser.parseValue = function(s) {
	$s.push("rg.data.source.rgquery.QueryParser::parseValue");
	var $spos = $s.length;
	var fc = s.substr(0,1), lc = s.substr(-1);
	if(fc == lc && (fc == "'" || fc == "\"")) {
		var $tmp = s.substr(1,s.length - 2);
		$s.pop();
		return $tmp;
	}
	if(Bools.canParse(s)) {
		var $tmp = Bools.parse(s);
		$s.pop();
		return $tmp;
	}
	if(Ints.canParse(s)) {
		var $tmp = Ints.parse(s);
		$s.pop();
		return $tmp;
	}
	if(Floats.canParse(s)) {
		var $tmp = Floats.parse(s);
		$s.pop();
		return $tmp;
	}
	var $tmp = (function($this) {
		var $r;
		throw new thx.error.Error("invalid value '{0}'",null,s,{ fileName : "QueryParser.hx", lineNumber : 150, className : "rg.data.source.rgquery.QueryParser", methodName : "parseValue"});
		return $r;
	}(this));
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.source.rgquery.QueryParser.prototype.exp = null;
rg.data.source.rgquery.QueryParser.prototype.operation = null;
rg.data.source.rgquery.QueryParser.prototype.where = null;
rg.data.source.rgquery.QueryParser.prototype.parse = function(s) {
	$s.push("rg.data.source.rgquery.QueryParser::parse");
	var $spos = $s.length;
	this.exp = [];
	this.operation = rg.data.source.rgquery.QOperation.Count;
	this.where = [];
	this.parseExp(s);
	var $tmp = { exp : this.exp, operation : this.operation, where : this.where};
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.source.rgquery.QueryParser.prototype.parseExp = function(e) {
	$s.push("rg.data.source.rgquery.QueryParser::parseExp");
	var $spos = $s.length;
	var tokens = e.split("*").map(function(d,_) {
		$s.push("rg.data.source.rgquery.QueryParser::parseExp@37");
		var $spos = $s.length;
		var $tmp = StringTools.trim(d);
		$s.pop();
		return $tmp;
		$s.pop();
	});
	if(tokens.length == 1 && "" == tokens[0]) {
		this.exp.push(rg.data.source.rgquery.QExp.Event);
		$s.pop();
		return;
	}
	var _g = 0;
	while(_g < tokens.length) {
		var token = tokens[_g];
		++_g;
		var etoken = this.parseToken(token);
		if(null != etoken) this.exp.push(etoken);
	}
	$s.pop();
}
rg.data.source.rgquery.QueryParser.prototype.parseToken = function(token) {
	$s.push("rg.data.source.rgquery.QueryParser::parseToken");
	var $spos = $s.length;
	var pos;
	if(rg.util.Properties.isTime(token)) {
		var $tmp = rg.data.source.rgquery.QExp.Time(rg.util.Properties.periodicity(token));
		$s.pop();
		return $tmp;
	} else {
		var $tmp = this.processProperty(token);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
rg.data.source.rgquery.QueryParser.prototype.processProperty = function(token) {
	$s.push("rg.data.source.rgquery.QueryParser::processProperty");
	var $spos = $s.length;
	if("(" == token.substr(0,1)) token = token.substr(1,token.length - 2);
	var parts = rg.data.source.rgquery.QueryParser.TOKEN_SPLIT.split(token), name = null, limit = null, descending = null;
	if(parts.length == 1) {
		if(!rg.data.source.rgquery.QueryParser.TOKEN_INDIVIDUAL_PARSE.match(token)) throw new thx.error.Error("invalid individual expression '{0}'",null,token,{ fileName : "QueryParser.hx", lineNumber : 84, className : "rg.data.source.rgquery.QueryParser", methodName : "processProperty"});
		name = rg.data.source.rgquery.QueryParser.TOKEN_INDIVIDUAL_PARSE.matched(1);
		if(null != rg.data.source.rgquery.QueryParser.TOKEN_INDIVIDUAL_PARSE.matched(2)) limit = Std.parseInt(rg.data.source.rgquery.QueryParser.TOKEN_INDIVIDUAL_PARSE.matched(2));
		if(null != rg.data.source.rgquery.QueryParser.TOKEN_INDIVIDUAL_PARSE.matched(3)) descending = rg.data.source.rgquery.QueryParser.TOKEN_INDIVIDUAL_PARSE.matched(3).toLowerCase() == "desc";
		if(null != rg.data.source.rgquery.QueryParser.TOKEN_INDIVIDUAL_PARSE.matched(4)) this.addWhereCondition(rg.data.source.rgquery.QueryParser.TOKEN_INDIVIDUAL_PARSE.matched(1),rg.data.source.rgquery.QueryParser.TOKEN_INDIVIDUAL_PARSE.matched(4),rg.data.source.rgquery.QueryParser.TOKEN_INDIVIDUAL_PARSE.matched(5));
	} else {
		if(!rg.data.source.rgquery.QueryParser.TOKEN_FIRST_PARSE.match(parts[0])) throw new thx.error.Error("invalid first expression '{0}' in '{1}'",[parts[0],token],null,{ fileName : "QueryParser.hx", lineNumber : 101, className : "rg.data.source.rgquery.QueryParser", methodName : "processProperty"});
		name = rg.data.source.rgquery.QueryParser.TOKEN_FIRST_PARSE.matched(1);
		if(null != rg.data.source.rgquery.QueryParser.TOKEN_FIRST_PARSE.matched(2)) limit = Std.parseInt(rg.data.source.rgquery.QueryParser.TOKEN_FIRST_PARSE.matched(2));
		if(null != rg.data.source.rgquery.QueryParser.TOKEN_FIRST_PARSE.matched(3)) descending = rg.data.source.rgquery.QueryParser.TOKEN_FIRST_PARSE.matched(3).toLowerCase() == "desc";
		this.addWhereCondition(rg.data.source.rgquery.QueryParser.TOKEN_FIRST_PARSE.matched(1),rg.data.source.rgquery.QueryParser.TOKEN_FIRST_PARSE.matched(4),rg.data.source.rgquery.QueryParser.TOKEN_FIRST_PARSE.matched(5));
		var _g1 = 1, _g = parts.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(!rg.data.source.rgquery.QueryParser.TOKEN_CONDITION_PARSE.match(parts[i])) throw new thx.error.Error("invalid expression condition '{0}' in '{1}'",[parts[i],token],null,{ fileName : "QueryParser.hx", lineNumber : 117, className : "rg.data.source.rgquery.QueryParser", methodName : "processProperty"});
			this.addWhereCondition(rg.data.source.rgquery.QueryParser.TOKEN_CONDITION_PARSE.matched(1),rg.data.source.rgquery.QueryParser.TOKEN_CONDITION_PARSE.matched(2),rg.data.source.rgquery.QueryParser.TOKEN_CONDITION_PARSE.matched(3));
		}
	}
	var $tmp = rg.data.source.rgquery.QExp.Property(name,limit,descending);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.source.rgquery.QueryParser.prototype.addWhereCondition = function(name,operator,value) {
	$s.push("rg.data.source.rgquery.QueryParser::addWhereCondition");
	var $spos = $s.length;
	switch(operator) {
	case "=":
		this.where.push(rg.data.source.rgquery.QCondition.Equality(name,rg.data.source.rgquery.QueryParser.parseValue(StringTools.rtrim(value))));
		break;
	default:
		throw new thx.error.Error("invalid operator '{0}'",null,operator,{ fileName : "QueryParser.hx", lineNumber : 135, className : "rg.data.source.rgquery.QueryParser", methodName : "addWhereCondition"});
	}
	$s.pop();
}
rg.data.source.rgquery.QueryParser.prototype.__class__ = rg.data.source.rgquery.QueryParser;
hxevents.EventException = { __ename__ : ["hxevents","EventException"], __constructs__ : ["StopPropagation"] }
hxevents.EventException.StopPropagation = ["StopPropagation",0];
hxevents.EventException.StopPropagation.toString = $estr;
hxevents.EventException.StopPropagation.__enum__ = hxevents.EventException;
rg.data.VariableDependentContext = function(variable,partial) {
	if( variable === $_ ) return;
	$s.push("rg.data.VariableDependentContext::new");
	var $spos = $s.length;
	this.variable = variable;
	this.partial = partial;
	$s.pop();
}
rg.data.VariableDependentContext.__name__ = ["rg","data","VariableDependentContext"];
rg.data.VariableDependentContext.prototype.partial = null;
rg.data.VariableDependentContext.prototype.variable = null;
rg.data.VariableDependentContext.prototype.__class__ = rg.data.VariableDependentContext;
rg.controller.factory.FactoryVariableDependent = function(p) {
	$s.push("rg.controller.factory.FactoryVariableDependent::new");
	var $spos = $s.length;
	$s.pop();
}
rg.controller.factory.FactoryVariableDependent.__name__ = ["rg","controller","factory","FactoryVariableDependent"];
rg.controller.factory.FactoryVariableDependent.prototype.create = function(info,isnumeric) {
	$s.push("rg.controller.factory.FactoryVariableDependent::create");
	var $spos = $s.length;
	if(null == info.type) throw new thx.error.Error("cannot create an axis if type is not specified",null,null,{ fileName : "FactoryVariableDependent.hx", lineNumber : 19, className : "rg.controller.factory.FactoryVariableDependent", methodName : "create"});
	var axiscreator = new rg.controller.factory.FactoryAxis(), axis = axiscreator.create(info.type,isnumeric,info.values);
	var variable = new rg.data.VariableDependent(info.type,axis,info.scaleDistribution,info.min,info.max);
	$s.pop();
	return variable;
	$s.pop();
}
rg.controller.factory.FactoryVariableDependent.prototype.__class__ = rg.controller.factory.FactoryVariableDependent;
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
Arrays.rotate = function(a) {
	$s.push("Arrays::rotate");
	var $spos = $s.length;
	if(a.length == 0) {
		var $tmp = [];
		$s.pop();
		return $tmp;
	}
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
	$s.pop();
	return result;
	$s.pop();
}
Arrays.prototype.__class__ = Arrays;
rg.controller.info.InfoPieChart = function(p) {
	if( p === $_ ) return;
	$s.push("rg.controller.info.InfoPieChart::new");
	var $spos = $s.length;
	this.innerradius = 0.0;
	this.labelradius = 0.45;
	this.labeldisplay = true;
	this.labelorientation = rg.view.svg.widget.LabelOrientation.Aligned;
	this.outerradius = 0.9;
	this.overradius = 0.95;
	this.tooltipradius = 0.5;
	this.animation = new rg.controller.info.InfoAnimation();
	this.label = new rg.controller.info.InfoLabel();
	this.effect = rg.view.svg.chart.GradientEffect.Gradient(0.65);
	this.dontfliplabel = true;
	$s.pop();
}
rg.controller.info.InfoPieChart.__name__ = ["rg","controller","info","InfoPieChart"];
rg.controller.info.InfoPieChart.validateOrientation = function(s) {
	$s.push("rg.controller.info.InfoPieChart::validateOrientation");
	var $spos = $s.length;
	var name = s.split("-")[0].toLowerCase();
	var $tmp = Arrays.exists(["fixed","ortho","orthogonal","align","aligned","horizontal"],name);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.controller.info.InfoPieChart.filterOrientation = function(s) {
	$s.push("rg.controller.info.InfoPieChart::filterOrientation");
	var $spos = $s.length;
	var name = s.split("-")[0].toLowerCase();
	switch(name) {
	case "fixed":
		var v = Std.parseFloat(s.split("-")[1]);
		if(null == v || !Math.isFinite(v)) throw new thx.error.Error("when 'fixed' is used a number should follow the 'dash' character",null,null,{ fileName : "InfoPieChart.hx", lineNumber : 62, className : "rg.controller.info.InfoPieChart", methodName : "filterOrientation"});
		var $tmp = rg.view.svg.widget.LabelOrientation.FixedAngle(v);
		$s.pop();
		return $tmp;
	case "ortho":case "orthogonal":
		var $tmp = rg.view.svg.widget.LabelOrientation.Orthogonal;
		$s.pop();
		return $tmp;
	case "align":case "aligned":
		var $tmp = rg.view.svg.widget.LabelOrientation.Aligned;
		$s.pop();
		return $tmp;
	case "horizontal":
		var $tmp = rg.view.svg.widget.LabelOrientation.FixedAngle(0);
		$s.pop();
		return $tmp;
	default:
		throw new thx.error.Error("invalid filter orientation '{0}'",null,s,{ fileName : "InfoPieChart.hx", lineNumber : 71, className : "rg.controller.info.InfoPieChart", methodName : "filterOrientation"});
	}
	$s.pop();
}
rg.controller.info.InfoPieChart.filters = function() {
	$s.push("rg.controller.info.InfoPieChart::filters");
	var $spos = $s.length;
	var $tmp = [{ field : "labelradius", validator : function(v) {
		$s.push("rg.controller.info.InfoPieChart::filters@79");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Float);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "dontfliplabel", validator : function(v) {
		$s.push("rg.controller.info.InfoPieChart::filters@83");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Bool);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "displaylabels", validator : function(v) {
		$s.push("rg.controller.info.InfoPieChart::filters@87");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Bool);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoPieChart::filters@88");
		var $spos = $s.length;
		var $tmp = [{ field : "labeldisplay", value : v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "labelorientation", validator : function(v) {
		$s.push("rg.controller.info.InfoPieChart::filters@94");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String) && rg.controller.info.InfoPieChart.validateOrientation(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoPieChart::filters@95");
		var $spos = $s.length;
		var $tmp = [{ field : "labelorientation", value : rg.controller.info.InfoPieChart.filterOrientation(v)}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "innerradius", validator : function(v) {
		$s.push("rg.controller.info.InfoPieChart::filters@101");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Float);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "outerradius", validator : function(v) {
		$s.push("rg.controller.info.InfoPieChart::filters@105");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Float);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "overradius", validator : function(v) {
		$s.push("rg.controller.info.InfoPieChart::filters@109");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Float);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "tooltipradius", validator : function(v) {
		$s.push("rg.controller.info.InfoPieChart::filters@113");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Float);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "animation", validator : function(v) {
		$s.push("rg.controller.info.InfoPieChart::filters@117");
		var $spos = $s.length;
		var $tmp = Reflect.isObject(v) && null == Type.getClass(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoPieChart::filters@118");
		var $spos = $s.length;
		var $tmp = [{ field : "animation", value : rg.controller.info.Info.feed(new rg.controller.info.InfoAnimation(),v)}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "label", validator : function(v) {
		$s.push("rg.controller.info.InfoPieChart::filters@124");
		var $spos = $s.length;
		var $tmp = Reflect.isObject(v) && null == Type.getClass(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoPieChart::filters@125");
		var $spos = $s.length;
		var $tmp = [{ field : "label", value : rg.controller.info.Info.feed(new rg.controller.info.InfoLabel(),v)}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "sort", validator : function(v) {
		$s.push("rg.controller.info.InfoPieChart::filters@131");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoPieChart::filters@132");
		var $spos = $s.length;
		var $tmp = [{ field : "sortDataPoint", value : v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "click", validator : function(v) {
		$s.push("rg.controller.info.InfoPieChart::filters@138");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "effect", validator : rg.view.svg.chart.GradientEffects.canParse, filter : function(v) {
		$s.push("rg.controller.info.InfoPieChart::filters@143");
		var $spos = $s.length;
		var $tmp = [{ field : "effect", value : rg.view.svg.chart.GradientEffects.parse(v)}];
		$s.pop();
		return $tmp;
		$s.pop();
	}}];
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.controller.info.InfoPieChart.prototype.labelradius = null;
rg.controller.info.InfoPieChart.prototype.labeldisplay = null;
rg.controller.info.InfoPieChart.prototype.labelorientation = null;
rg.controller.info.InfoPieChart.prototype.innerradius = null;
rg.controller.info.InfoPieChart.prototype.outerradius = null;
rg.controller.info.InfoPieChart.prototype.overradius = null;
rg.controller.info.InfoPieChart.prototype.tooltipradius = null;
rg.controller.info.InfoPieChart.prototype.animation = null;
rg.controller.info.InfoPieChart.prototype.label = null;
rg.controller.info.InfoPieChart.prototype.effect = null;
rg.controller.info.InfoPieChart.prototype.sortDataPoint = null;
rg.controller.info.InfoPieChart.prototype.dontfliplabel = null;
rg.controller.info.InfoPieChart.prototype.click = null;
rg.controller.info.InfoPieChart.prototype.__class__ = rg.controller.info.InfoPieChart;
thx.error.NotImplemented = function(posInfo) {
	if( posInfo === $_ ) return;
	$s.push("thx.error.NotImplemented::new");
	var $spos = $s.length;
	thx.error.Error.call(this,"method {0}.{1}() needs to be implemented",[posInfo.className,posInfo.methodName],posInfo,{ fileName : "NotImplemented.hx", lineNumber : 13, className : "thx.error.NotImplemented", methodName : "new"});
	$s.pop();
}
thx.error.NotImplemented.__name__ = ["thx","error","NotImplemented"];
thx.error.NotImplemented.__super__ = thx.error.Error;
for(var k in thx.error.Error.prototype ) thx.error.NotImplemented.prototype[k] = thx.error.Error.prototype[k];
thx.error.NotImplemented.prototype.__class__ = thx.error.NotImplemented;
rg.controller.factory.FactoryVariableIndependent = function(p) {
	$s.push("rg.controller.factory.FactoryVariableIndependent::new");
	var $spos = $s.length;
	$s.pop();
}
rg.controller.factory.FactoryVariableIndependent.__name__ = ["rg","controller","factory","FactoryVariableIndependent"];
rg.controller.factory.FactoryVariableIndependent.prototype.create = function(info) {
	$s.push("rg.controller.factory.FactoryVariableIndependent::create");
	var $spos = $s.length;
	if(null == info.type) {
		$s.pop();
		return null;
	}
	var axiscreateer = new rg.controller.factory.FactoryAxis(), axis = axiscreateer.createDiscrete(info.type,info.values,info.groupBy), min = info.min, max = info.max;
	if(null == min && null != info.values) min = info.values[0];
	if(null == max && null != info.values) max = Arrays.last(info.values);
	if(Std["is"](axis,rg.data.AxisTime)) {
		var periodicity = ((function($this) {
			var $r;
			var $t = axis;
			if(Std["is"]($t,rg.data.AxisTime)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).periodicity;
		min = null != info.min?Dates.snap(this.normalizeTime(info.min),periodicity):null;
		max = null != info.max?Dates.snap(this.normalizeTime(info.max),periodicity):null;
	} else if(Std["is"](axis,rg.data.AxisGroupByTime)) {
		var groupaxis = (function($this) {
			var $r;
			var $t = axis;
			if(Std["is"]($t,rg.data.AxisGroupByTime)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this));
		min = null != info.min?info.min:rg.data.AxisGroupByTime.defaultMin(groupaxis.groupBy);
		max = null != info.max?info.max:rg.data.AxisGroupByTime.defaultMax(groupaxis.groupBy);
	}
	var variable = new rg.data.VariableIndependent(info.type,axis,info.scaleDistribution,min,max);
	$s.pop();
	return variable;
	$s.pop();
}
rg.controller.factory.FactoryVariableIndependent.prototype.normalizeTime = function(v) {
	$s.push("rg.controller.factory.FactoryVariableIndependent::normalizeTime");
	var $spos = $s.length;
	if(null == v || Std["is"](v,Float)) {
		$s.pop();
		return v;
	}
	if(Std["is"](v,Date)) {
		var $tmp = ((function($this) {
			var $r;
			var $t = v;
			if(Std["is"]($t,Date)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).getTime();
		$s.pop();
		return $tmp;
	}
	if(Std["is"](v,String)) {
		var $tmp = thx.date.DateParser.parse(v).getTime();
		$s.pop();
		return $tmp;
	}
	throw new thx.error.Error("unable to normalize the value '{0}' into a valid date value",v,null,{ fileName : "FactoryVariableIndependent.hx", lineNumber : 56, className : "rg.controller.factory.FactoryVariableIndependent", methodName : "normalizeTime"});
	$s.pop();
}
rg.controller.factory.FactoryVariableIndependent.prototype.__class__ = rg.controller.factory.FactoryVariableIndependent;
rg.data.source.rgquery.IExecutorReportGrid = function() { }
rg.data.source.rgquery.IExecutorReportGrid.__name__ = ["rg","data","source","rgquery","IExecutorReportGrid"];
rg.data.source.rgquery.IExecutorReportGrid.prototype.children = null;
rg.data.source.rgquery.IExecutorReportGrid.prototype.propertyCount = null;
rg.data.source.rgquery.IExecutorReportGrid.prototype.propertySeries = null;
rg.data.source.rgquery.IExecutorReportGrid.prototype.propertyValues = null;
rg.data.source.rgquery.IExecutorReportGrid.prototype.propertyValueCount = null;
rg.data.source.rgquery.IExecutorReportGrid.prototype.propertyValueSeries = null;
rg.data.source.rgquery.IExecutorReportGrid.prototype.searchCount = null;
rg.data.source.rgquery.IExecutorReportGrid.prototype.searchSeries = null;
rg.data.source.rgquery.IExecutorReportGrid.prototype.intersect = null;
rg.data.source.rgquery.IExecutorReportGrid.prototype.__class__ = rg.data.source.rgquery.IExecutorReportGrid;
rg.view.svg.chart.LineChart = function(panel) {
	if( panel === $_ ) return;
	$s.push("rg.view.svg.chart.LineChart::new");
	var $spos = $s.length;
	rg.view.svg.chart.CartesianChart.call(this,panel);
	this.addClass("line-chart");
	this.chart = this.g.append("svg:g");
	$s.pop();
}
rg.view.svg.chart.LineChart.__name__ = ["rg","view","svg","chart","LineChart"];
rg.view.svg.chart.LineChart.__super__ = rg.view.svg.chart.CartesianChart;
for(var k in rg.view.svg.chart.CartesianChart.prototype ) rg.view.svg.chart.LineChart.prototype[k] = rg.view.svg.chart.CartesianChart.prototype[k];
rg.view.svg.chart.LineChart.prototype.symbol = null;
rg.view.svg.chart.LineChart.prototype.symbolStyle = null;
rg.view.svg.chart.LineChart.prototype.lineInterpolator = null;
rg.view.svg.chart.LineChart.prototype.lineEffect = null;
rg.view.svg.chart.LineChart.prototype.y0property = null;
rg.view.svg.chart.LineChart.prototype.linePathShape = null;
rg.view.svg.chart.LineChart.prototype.chart = null;
rg.view.svg.chart.LineChart.prototype.dps = null;
rg.view.svg.chart.LineChart.prototype.segment = null;
rg.view.svg.chart.LineChart.prototype.setVariables = function(variableIndependents,yVariables) {
	$s.push("rg.view.svg.chart.LineChart::setVariables");
	var $spos = $s.length;
	var me = this;
	rg.view.svg.chart.CartesianChart.prototype.setVariables.call(this,variableIndependents,yVariables);
	this.linePathShape = [];
	var _g1 = 0, _g = yVariables.length;
	while(_g1 < _g) {
		var i = _g1++;
		var line = [new thx.svg.Line($closure(this,"x"),this.getY1(i))];
		if(null != this.lineInterpolator) line[0].interpolator(this.lineInterpolator);
		this.linePathShape[i] = (function(line) {
			$s.push("rg.view.svg.chart.LineChart::setVariables@60");
			var $spos = $s.length;
			var $tmp = function(dp,i1) {
				$s.push("rg.view.svg.chart.LineChart::setVariables@60@60");
				var $spos = $s.length;
				me.segment = i1;
				var $tmp = line[0].shape(dp,i1);
				$s.pop();
				return $tmp;
				$s.pop();
			};
			$s.pop();
			return $tmp;
			$s.pop();
		})(line);
	}
	$s.pop();
}
rg.view.svg.chart.LineChart.prototype.x = function(d,i) {
	$s.push("rg.view.svg.chart.LineChart::x");
	var $spos = $s.length;
	var value = Reflect.field(d,this.xVariable.type), scaled = this.xVariable.axis.scale(this.xVariable.min,this.xVariable.max,value), scaledw = scaled * this.width;
	$s.pop();
	return scaledw;
	$s.pop();
}
rg.view.svg.chart.LineChart.prototype.getY1 = function(pos) {
	$s.push("rg.view.svg.chart.LineChart::getY1");
	var $spos = $s.length;
	var h = this.height, v = this.yVariables[pos], y0 = this.y0property;
	if(null != y0) {
		var $tmp = function(d,i) {
			$s.push("rg.view.svg.chart.LineChart::getY1@83");
			var $spos = $s.length;
			var v1 = Reflect.field(d,v.type), value = Std["is"](v1,Float)?v1 + rg.util.DataPoints.valueAlt(d,y0,v.min):v1, scaled = v.axis.scale(v.min,v.max,value), scaledh = scaled * h;
			var $tmp = h - scaledh;
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	} else {
		var $tmp = function(d,i) {
			$s.push("rg.view.svg.chart.LineChart::getY1@92");
			var $spos = $s.length;
			var value = Reflect.field(d,v.type), scaled = v.axis.scale(v.min,v.max,value), scaledh = scaled * h;
			var $tmp = h - scaledh;
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
rg.view.svg.chart.LineChart.prototype.getY0 = function(pos) {
	$s.push("rg.view.svg.chart.LineChart::getY0");
	var $spos = $s.length;
	var h = this.height, y0 = this.y0property, v = this.yVariables[pos];
	var $tmp = function(d,i) {
		$s.push("rg.view.svg.chart.LineChart::getY0@107");
		var $spos = $s.length;
		var value = rg.util.DataPoints.valueAlt(d,y0,v.min), scaled = v.axis.scale(v.min,v.max,value), scaledh = scaled * h;
		var $tmp = h - scaledh;
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.chart.LineChart.prototype.segments = null;
rg.view.svg.chart.LineChart.prototype.classf = function(pos,cls) {
	$s.push("rg.view.svg.chart.LineChart::classf");
	var $spos = $s.length;
	var $tmp = function(_,i) {
		$s.push("rg.view.svg.chart.LineChart::classf@120");
		var $spos = $s.length;
		var $tmp = cls + " stroke-" + (pos + i);
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.chart.LineChart.prototype.data = function(dps) {
	$s.push("rg.view.svg.chart.LineChart::data");
	var $spos = $s.length;
	var axisgroup = this.chart.selectAll("g.group").data(dps);
	var axisenter = axisgroup.enter().append("svg:g").attr("class").stringf(function(_,i) {
		$s.push("rg.view.svg.chart.LineChart::data@132");
		var $spos = $s.length;
		var $tmp = "group group-" + i;
		$s.pop();
		return $tmp;
		$s.pop();
	});
	axisgroup.exit().remove();
	var _g1 = 0, _g = dps.length;
	while(_g1 < _g) {
		var i = _g1++;
		this.segments = dps[i];
		var gi = this.chart.select("g.group-" + i), stats = [new rg.data.Stats()];
		stats[0].addMany(rg.util.DataPoints.values(Arrays.flatten(this.segments),this.yVariables[i].type));
		var segmentgroup = gi.selectAll("path.line").data(this.segments);
		if(null != this.y0property) {
			var area = new thx.svg.Area($closure(this,"x"),this.getY0(i),this.getY1(i));
			if(null != this.lineInterpolator) area.interpolator(this.lineInterpolator);
			segmentgroup.enter().append("svg:path").attr("class").stringf(this.classf(i,"line area")).attr("d").stringf($closure(area,"shape"));
		}
		var $e = (this.lineEffect);
		switch( $e[1] ) {
		case 1:
			var levels = $e[3], lightness = $e[2];
			var levels1 = [levels];
			var lightness1 = [lightness];
			var fs = [[]];
			segmentgroup.enter().append("svg:path").attr("class").stringf(this.classf(i,"line")).eachNode((function(fs,lightness1) {
				$s.push("rg.view.svg.chart.LineChart::data@164");
				var $spos = $s.length;
				var $tmp = function(n,i1) {
					$s.push("rg.view.svg.chart.LineChart::data@164@164");
					var $spos = $s.length;
					var start = thx.color.Hsl.toHsl(rg.view.svg.util.RGColors.parse(thx.js.Dom.selectNode(n).style("stroke").get(),"#000000")), end = thx.color.Hsl.darker(start,lightness1[0]);
					fs[0][i1] = thx.color.Hsl.interpolatef(end,start);
					$s.pop();
				};
				$s.pop();
				return $tmp;
				$s.pop();
			})(fs,lightness1)).remove();
			var _g2 = 0;
			while(_g2 < levels1[0]) {
				var j = [_g2++];
				segmentgroup.enter().append("svg:path").attr("class").string("line grad-" + (levels1[0] - j[0] - 1)).style("stroke").stringf((function(j,fs,levels1) {
					$s.push("rg.view.svg.chart.LineChart::data@175");
					var $spos = $s.length;
					var $tmp = function(_,i1) {
						$s.push("rg.view.svg.chart.LineChart::data@175@175");
						var $spos = $s.length;
						var $tmp = fs[0][i1](j[0] / levels1[0]).hex("#");
						$s.pop();
						return $tmp;
						$s.pop();
					};
					$s.pop();
					return $tmp;
					$s.pop();
				})(j,fs,levels1)).attr("d").stringf(this.linePathShape[i]);
			}
			break;
		case 2:
			var levels = $e[4], oy = $e[3], ox = $e[2];
			var _g2 = 0;
			while(_g2 < levels) {
				var j = _g2++;
				segmentgroup.enter().append("svg:path").attr("transform").string("translate(" + (1 + j) * ox + "," + (1 + j) * oy + ")").attr("class").stringf(this.classf(i,"line shadow shadow-" + j)).attr("d").stringf(this.linePathShape[i]);
			}
			break;
		default:
		}
		var path = segmentgroup.enter().append("svg:path").attr("class").stringf(this.classf(i,"line")).attr("d").stringf(this.linePathShape[i]);
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
		segmentgroup.update().attr("d").stringf(this.linePathShape[i]);
		segmentgroup.exit().remove();
		var gsymbols = gi.selectAll("g.symbols").data(this.segments), vars = this.yVariables, onclick = ((function() {
			$s.push("rg.view.svg.chart.LineChart::data@212");
			var $spos = $s.length;
			var $tmp = function(f,a1) {
				$s.push("rg.view.svg.chart.LineChart::data@212@212");
				var $spos = $s.length;
				var $tmp = (function() {
					$s.push("rg.view.svg.chart.LineChart::data@212@212@212");
					var $spos = $s.length;
					var $tmp = function(a2,a3) {
						$s.push("rg.view.svg.chart.LineChart::data@212@212@212@212");
						var $spos = $s.length;
						var $tmp = f(a1,a2,a3);
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
		})())($closure(this,"onclick"),stats[0]), onmouseover = ((function() {
			$s.push("rg.view.svg.chart.LineChart::data@213");
			var $spos = $s.length;
			var $tmp = function(f,a1) {
				$s.push("rg.view.svg.chart.LineChart::data@213@213");
				var $spos = $s.length;
				var $tmp = (function() {
					$s.push("rg.view.svg.chart.LineChart::data@213@213@213");
					var $spos = $s.length;
					var $tmp = function(a2,a3) {
						$s.push("rg.view.svg.chart.LineChart::data@213@213@213@213");
						var $spos = $s.length;
						var $tmp = f(a1,a2,a3);
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
		})())($closure(this,"onmouseover"),stats[0]);
		var enter = gsymbols.enter().append("svg:g").attr("class").stringf(this.classf(i,"symbols"));
		var gsymbol = enter.selectAll("g.symbol").dataf((function() {
			$s.push("rg.view.svg.chart.LineChart::data@219");
			var $spos = $s.length;
			var $tmp = function(d,i1) {
				$s.push("rg.view.svg.chart.LineChart::data@219@219");
				var $spos = $s.length;
				$s.pop();
				return d;
				$s.pop();
			};
			$s.pop();
			return $tmp;
			$s.pop();
		})()).enter().append("svg:g").attr("transform").stringf(this.getTranslatePointf(i));
		if(null != this.click) gsymbol.on("click",onclick);
		if(null != this.labelDataPointOver) gsymbol.onNode("mouseover",onmouseover);
		gsymbol.append("svg:circle").attr("r")["float"](6).style("fill").string("#000000").style("fill-opacity")["float"](0.0).style("stroke").string("none");
		if(null != this.symbol) {
			var sp = [this.symbol];
			var spath = gsymbol.append("svg:path").attr("d").stringf((function(sp,stats) {
				$s.push("rg.view.svg.chart.LineChart::data@243");
				var $spos = $s.length;
				var $tmp = function(dp,_) {
					$s.push("rg.view.svg.chart.LineChart::data@243@243");
					var $spos = $s.length;
					var $tmp = sp[0](dp,stats[0]);
					$s.pop();
					return $tmp;
					$s.pop();
				};
				$s.pop();
				return $tmp;
				$s.pop();
			})(sp,stats));
			if(null != this.symbolStyle) {
				var ss = [this.symbolStyle];
				spath.attr("style").stringf((function(ss,stats) {
					$s.push("rg.view.svg.chart.LineChart::data@247");
					var $spos = $s.length;
					var $tmp = function(dp,_) {
						$s.push("rg.view.svg.chart.LineChart::data@247@247");
						var $spos = $s.length;
						var $tmp = ss[0](dp,stats[0]);
						$s.pop();
						return $tmp;
						$s.pop();
					};
					$s.pop();
					return $tmp;
					$s.pop();
				})(ss,stats));
			}
		}
		if(null != this.labelDataPoint) {
			var f = [this.labelDataPoint];
			gsymbol.eachNode((function(f,stats) {
				$s.push("rg.view.svg.chart.LineChart::data@254");
				var $spos = $s.length;
				var $tmp = function(n,i1) {
					$s.push("rg.view.svg.chart.LineChart::data@254@254");
					var $spos = $s.length;
					var dp = Reflect.field(n,"__data__"), label = new rg.view.svg.widget.Label(thx.js.Dom.selectNode(n),true,true,true);
					label.setText(f[0](dp,stats[0]));
					$s.pop();
				};
				$s.pop();
				return $tmp;
				$s.pop();
			})(f,stats));
		}
		gsymbols.update().selectAll("g.symbol").dataf((function() {
			$s.push("rg.view.svg.chart.LineChart::data@266");
			var $spos = $s.length;
			var $tmp = function(d,i1) {
				$s.push("rg.view.svg.chart.LineChart::data@266@266");
				var $spos = $s.length;
				$s.pop();
				return d;
				$s.pop();
			};
			$s.pop();
			return $tmp;
			$s.pop();
		})()).update().attr("transform").stringf(this.getTranslatePointf(i));
		gsymbols.exit().remove();
	}
	$s.pop();
}
rg.view.svg.chart.LineChart.prototype.getTranslatePointf = function(pos) {
	$s.push("rg.view.svg.chart.LineChart::getTranslatePointf");
	var $spos = $s.length;
	var x = $closure(this,"x"), y = this.getY1(pos);
	var $tmp = function(dp,i) {
		$s.push("rg.view.svg.chart.LineChart::getTranslatePointf@279");
		var $spos = $s.length;
		var $tmp = "translate(" + x(dp) + "," + y(dp,i) + ")";
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.chart.LineChart.prototype.onmouseover = function(stats,n,i) {
	$s.push("rg.view.svg.chart.LineChart::onmouseover");
	var $spos = $s.length;
	var dp = Reflect.field(n,"__data__"), text = this.labelDataPointOver(dp,stats);
	if(null == text) this.tooltip.hide(); else {
		var sel = thx.js.Dom.selectNode(n), coords = rg.view.svg.chart.Coords.fromTransform(sel.attr("transform").get());
		this.tooltip.show();
		this.tooltip.setText(text.split("\n"));
		this.moveTooltip(coords[0],coords[1]);
	}
	$s.pop();
}
rg.view.svg.chart.LineChart.prototype.onclick = function(stats,dp,i) {
	$s.push("rg.view.svg.chart.LineChart::onclick");
	var $spos = $s.length;
	this.click(dp,stats);
	$s.pop();
}
rg.view.svg.chart.LineChart.prototype.__class__ = rg.view.svg.chart.LineChart;
rg.view.layout.LayoutCartesian = function(width,height,container) {
	if( width === $_ ) return;
	$s.push("rg.view.layout.LayoutCartesian::new");
	var $spos = $s.length;
	rg.view.layout.Layout.call(this,width,height,container);
	this.titleOnTop = true;
	this.left = true;
	this.alternating = true;
	this.yitems = [];
	$s.pop();
}
rg.view.layout.LayoutCartesian.__name__ = ["rg","view","layout","LayoutCartesian"];
rg.view.layout.LayoutCartesian.__super__ = rg.view.layout.Layout;
for(var k in rg.view.layout.Layout.prototype ) rg.view.layout.LayoutCartesian.prototype[k] = rg.view.layout.Layout.prototype[k];
rg.view.layout.LayoutCartesian.prototype.main = null;
rg.view.layout.LayoutCartesian.prototype.titleOnTop = null;
rg.view.layout.LayoutCartesian.prototype.leftcontainer = null;
rg.view.layout.LayoutCartesian.prototype.rightcontainer = null;
rg.view.layout.LayoutCartesian.prototype.bottomcontainer = null;
rg.view.layout.LayoutCartesian.prototype.bottommiddlecontainer = null;
rg.view.layout.LayoutCartesian.prototype.maincontainer = null;
rg.view.layout.LayoutCartesian.prototype.middlecontainer = null;
rg.view.layout.LayoutCartesian.prototype.bottomleft = null;
rg.view.layout.LayoutCartesian.prototype.bottomright = null;
rg.view.layout.LayoutCartesian.prototype.xtickmarks = null;
rg.view.layout.LayoutCartesian.prototype.title = null;
rg.view.layout.LayoutCartesian.prototype.left = null;
rg.view.layout.LayoutCartesian.prototype.alternating = null;
rg.view.layout.LayoutCartesian.prototype.yitems = null;
rg.view.layout.LayoutCartesian.prototype.xtitle = null;
rg.view.layout.LayoutCartesian.prototype.getContext = function(name) {
	$s.push("rg.view.layout.LayoutCartesian::getContext");
	var $spos = $s.length;
	if(this.isY(name)) {
		var $tmp = this.getYContext(this.getYIndex(name));
		$s.pop();
		return $tmp;
	} else if(this.isYTitle(name)) {
		var $tmp = this.getYTitle(this.getYIndex(name));
		$s.pop();
		return $tmp;
	}
	switch(name) {
	case "title":
		if(null == this.title) this.title = new rg.view.layout.PanelContext(this.space.createPanelAt(this.titleOnTop?0:1,rg.view.frame.FrameLayout.Fixed(0,0,0)),this.titleOnTop?rg.view.layout.Anchor.Bottom:rg.view.layout.Anchor.Top);
		var $tmp = this.title;
		$s.pop();
		return $tmp;
	case "x":
		var $tmp = this.getXTickmarks();
		$s.pop();
		return $tmp;
	case "xtitle":
		var $tmp = this.getXTitle();
		$s.pop();
		return $tmp;
	default:
		$s.pop();
		return null;
	}
	$s.pop();
}
rg.view.layout.LayoutCartesian.prototype.getPanel = function(name) {
	$s.push("rg.view.layout.LayoutCartesian::getPanel");
	var $spos = $s.length;
	switch(name) {
	case "main":
		var $tmp = this.getMain();
		$s.pop();
		return $tmp;
	case "xtickmarks":
		var $tmp = this.getBottomContainer();
		$s.pop();
		return $tmp;
	case "left":
		var $tmp = this.getLeftContainer();
		$s.pop();
		return $tmp;
	case "right":
		var $tmp = this.getRightContainer();
		$s.pop();
		return $tmp;
	case "bottomleft":
		var $tmp = this.bottomleft;
		$s.pop();
		return $tmp;
	case "bottomright":
		var $tmp = this.bottomright;
		$s.pop();
		return $tmp;
	default:
		var ctx = this.getContext(name);
		if(null == ctx) {
			$s.pop();
			return null;
		}
		var $tmp = ctx.panel;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
rg.view.layout.LayoutCartesian.prototype.getYItem = function(index) {
	$s.push("rg.view.layout.LayoutCartesian::getYItem");
	var $spos = $s.length;
	if(null == this.yitems[index]) this.yitems[index] = { container : null, context : null, title : null, anchor : this.alternating && index % 2 == 0?rg.view.layout.Anchor.Right:rg.view.layout.Anchor.Left};
	var $tmp = this.yitems[index];
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.layout.LayoutCartesian.prototype.getYContainer = function(index) {
	$s.push("rg.view.layout.LayoutCartesian::getYContainer");
	var $spos = $s.length;
	var item = this.getYItem(index);
	if(null == item.container) {
		if(this.alternating && index % 2 == 0) item.container = this.getLeftContainer().createContainerAt(0,rg.view.frame.FrameLayout.Fixed(0,0,0),rg.view.frame.Orientation.Horizontal); else item.container = this.getRightContainer().createContainer(rg.view.frame.FrameLayout.Fixed(0,0,0),rg.view.frame.Orientation.Horizontal);
		item.container.g.classed().add("group-" + index);
	}
	var $tmp = item.container;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.layout.LayoutCartesian.prototype.getYContext = function(index) {
	$s.push("rg.view.layout.LayoutCartesian::getYContext");
	var $spos = $s.length;
	var item = this.getYItem(index);
	if(null == item.context) {
		var panel = (function($this) {
			var $r;
			switch( (item.anchor)[1] ) {
			case 2:
				$r = $this.getYContainer(index).createPanelAt(0,rg.view.frame.FrameLayout.Fixed(0,0,0));
				break;
			case 3:
				$r = $this.getYContainer(index).createPanel(rg.view.frame.FrameLayout.Fixed(0,0,0));
				break;
			default:
				$r = null;
			}
			return $r;
		}(this));
		item.context = new rg.view.layout.PanelContext(panel,item.anchor);
	}
	var $tmp = item.context;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.layout.LayoutCartesian.prototype.getYTitle = function(index) {
	$s.push("rg.view.layout.LayoutCartesian::getYTitle");
	var $spos = $s.length;
	var item = this.getYItem(index);
	if(null == item.title) {
		var panel = (function($this) {
			var $r;
			switch( (item.anchor)[1] ) {
			case 2:
				$r = $this.getYContainer(index).createPanel(rg.view.frame.FrameLayout.Fixed(0,0,0));
				break;
			case 3:
				$r = $this.getYContainer(index).createPanelAt(0,rg.view.frame.FrameLayout.Fixed(0,0,0));
				break;
			default:
				$r = null;
			}
			return $r;
		}(this));
		item.title = new rg.view.layout.PanelContext(panel,item.anchor);
	}
	var $tmp = item.title;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.layout.LayoutCartesian.prototype.getYIndex = function(s) {
	$s.push("rg.view.layout.LayoutCartesian::getYIndex");
	var $spos = $s.length;
	if(!rg.view.layout.LayoutCartesian.REYINDEX.match(s)) {
		$s.pop();
		return -1;
	} else {
		var $tmp = Std.parseInt(rg.view.layout.LayoutCartesian.REYINDEX.matched(1));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
rg.view.layout.LayoutCartesian.prototype.isY = function(s) {
	$s.push("rg.view.layout.LayoutCartesian::isY");
	var $spos = $s.length;
	var $tmp = rg.view.layout.LayoutCartesian.REYAXIS.match(s);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.layout.LayoutCartesian.prototype.isYTitle = function(s) {
	$s.push("rg.view.layout.LayoutCartesian::isYTitle");
	var $spos = $s.length;
	var $tmp = rg.view.layout.LayoutCartesian.REYTITLE.match(s);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.layout.LayoutCartesian.prototype.suggestSize = function(name,size) {
	$s.push("rg.view.layout.LayoutCartesian::suggestSize");
	var $spos = $s.length;
	if(this.isY(name) || this.isYTitle(name)) {
		var index = this.getYIndex(name), item = this.getYItem(index);
		if(null == item.container) {
			$s.pop();
			return;
		}
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
		$s.pop();
		return;
	}
	rg.view.layout.Layout.prototype.suggestSize.call(this,name,size);
	switch(name) {
	case "x":case "xtitle":
		var size1 = 0, c = this.getPanel("x");
		if(null != c) size1 += c.frame.height;
		c = this.getPanel("xtitle");
		if(null != c) size1 += c.frame.height;
		rg.view.layout.Layout.prototype.suggestSize.call(this,"xtickmarks",size1);
		break;
	}
	$s.pop();
}
rg.view.layout.LayoutCartesian.prototype.suggestLateralSize = function(anchor) {
	$s.push("rg.view.layout.LayoutCartesian::suggestLateralSize");
	var $spos = $s.length;
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
	$s.pop();
}
rg.view.layout.LayoutCartesian.prototype.getXTitle = function() {
	$s.push("rg.view.layout.LayoutCartesian::getXTitle");
	var $spos = $s.length;
	if(null == this.xtitle) this.xtitle = new rg.view.layout.PanelContext(this.getBottomMiddleContainer().createPanel(rg.view.frame.FrameLayout.Fixed(0,0,0)),rg.view.layout.Anchor.Top);
	var $tmp = this.xtitle;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.layout.LayoutCartesian.prototype.getMainContainer = function() {
	$s.push("rg.view.layout.LayoutCartesian::getMainContainer");
	var $spos = $s.length;
	if(null == this.maincontainer) this.maincontainer = this.space.createContainerAt(this.titleOnTop?1:0,rg.view.frame.FrameLayout.Fill(0,0),rg.view.frame.Orientation.Vertical);
	var $tmp = this.maincontainer;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.layout.LayoutCartesian.prototype.getMiddleContainer = function() {
	$s.push("rg.view.layout.LayoutCartesian::getMiddleContainer");
	var $spos = $s.length;
	if(null == this.middlecontainer) this.middlecontainer = this.getMainContainer().createContainerAt(0,rg.view.frame.FrameLayout.Fill(0,0),rg.view.frame.Orientation.Horizontal);
	var $tmp = this.middlecontainer;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.layout.LayoutCartesian.prototype.getLeftContainer = function() {
	$s.push("rg.view.layout.LayoutCartesian::getLeftContainer");
	var $spos = $s.length;
	if(null == this.leftcontainer) this.leftcontainer = this.getMiddleContainer().createContainerAt(0,rg.view.frame.FrameLayout.Fixed(0,0,0),rg.view.frame.Orientation.Horizontal);
	var $tmp = this.leftcontainer;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.layout.LayoutCartesian.prototype.getRightContainer = function() {
	$s.push("rg.view.layout.LayoutCartesian::getRightContainer");
	var $spos = $s.length;
	if(null == this.rightcontainer) this.rightcontainer = this.getMiddleContainer().createContainerAt(2,rg.view.frame.FrameLayout.Fixed(0,0,0),rg.view.frame.Orientation.Horizontal);
	var $tmp = this.rightcontainer;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.layout.LayoutCartesian.prototype.getBottomContainer = function() {
	$s.push("rg.view.layout.LayoutCartesian::getBottomContainer");
	var $spos = $s.length;
	if(null == this.bottomcontainer) this.bottomcontainer = this.getMainContainer().createContainerAt(1,rg.view.frame.FrameLayout.Fixed(0,0,0),rg.view.frame.Orientation.Horizontal);
	var $tmp = this.bottomcontainer;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.layout.LayoutCartesian.prototype.getBottomMiddleContainer = function() {
	$s.push("rg.view.layout.LayoutCartesian::getBottomMiddleContainer");
	var $spos = $s.length;
	if(null == this.bottommiddlecontainer) {
		var container = this.getBottomContainer();
		this.bottomleft = container.createPanel(rg.view.frame.FrameLayout.Fixed(0,0,0));
		this.bottommiddlecontainer = container.createContainer(rg.view.frame.FrameLayout.Fill(0,0),rg.view.frame.Orientation.Vertical);
		this.bottommiddlecontainer.g.classed().add("axis-x");
		this.bottomright = container.createPanel(rg.view.frame.FrameLayout.Fixed(0,0,0));
	}
	var $tmp = this.bottommiddlecontainer;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.layout.LayoutCartesian.prototype.getXTickmarks = function() {
	$s.push("rg.view.layout.LayoutCartesian::getXTickmarks");
	var $spos = $s.length;
	if(null == this.xtickmarks) {
		var container = this.getBottomMiddleContainer();
		this.xtickmarks = new rg.view.layout.PanelContext(container.createPanelAt(0,rg.view.frame.FrameLayout.Fixed(0,0,0)),rg.view.layout.Anchor.Top);
	}
	var $tmp = this.xtickmarks;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.layout.LayoutCartesian.prototype.getMain = function() {
	$s.push("rg.view.layout.LayoutCartesian::getMain");
	var $spos = $s.length;
	if(null == this.main) this.main = this.getMiddleContainer().createPanelAt(1,rg.view.frame.FrameLayout.Fill(0,0));
	var $tmp = this.main;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.layout.LayoutCartesian.prototype.feedOptions = function(info) {
	$s.push("rg.view.layout.LayoutCartesian::feedOptions");
	var $spos = $s.length;
	rg.view.layout.Layout.prototype.feedOptions.call(this,info);
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
	$s.pop();
}
rg.view.layout.LayoutCartesian.prototype.adjustPadding = function() {
	$s.push("rg.view.layout.LayoutCartesian::adjustPadding");
	var $spos = $s.length;
	var top = null == this.title && null == this.paddings.top?8:this.paddings.top, bottom = (null == this.xtickmarks || !this.titleOnTop && null == this.title) && null == this.paddings.bottom?8:this.paddings.bottom, left = null == this.leftcontainer && null == this.paddings.left?20:this.paddings.left, right = null == this.rightcontainer && null == this.paddings.right?20:this.paddings.right;
	if(null != left || null != right) {
		this.suggestPanelPadding(this.getMain(),left,right);
		this.suggestPanelPadding(this.bottommiddlecontainer,left,right);
	}
	if(null != top || null != bottom) this.suggestPanelPadding(this.middlecontainer,top,bottom);
	$s.pop();
}
rg.view.layout.LayoutCartesian.prototype.__class__ = rg.view.layout.LayoutCartesian;
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
rg.view.svg.widget.GridAnchors = function() { }
rg.view.svg.widget.GridAnchors.__name__ = ["rg","view","svg","widget","GridAnchors"];
rg.view.svg.widget.GridAnchors.parse = function(s) {
	$s.push("rg.view.svg.widget.GridAnchors::parse");
	var $spos = $s.length;
	var $tmp = (function($this) {
		var $r;
		switch(s.toLowerCase()) {
		case "topleft":
			$r = rg.view.svg.widget.GridAnchor.TopLeft;
			break;
		case "top":
			$r = rg.view.svg.widget.GridAnchor.Top;
			break;
		case "topright":
			$r = rg.view.svg.widget.GridAnchor.TopRight;
			break;
		case "left":
			$r = rg.view.svg.widget.GridAnchor.Left;
			break;
		case "center":
			$r = rg.view.svg.widget.GridAnchor.Center;
			break;
		case "right":
			$r = rg.view.svg.widget.GridAnchor.Right;
			break;
		case "bottomleft":
			$r = rg.view.svg.widget.GridAnchor.BottomLeft;
			break;
		case "bottom":
			$r = rg.view.svg.widget.GridAnchor.Bottom;
			break;
		case "bottomright":
			$r = rg.view.svg.widget.GridAnchor.BottomRight;
			break;
		default:
			$r = rg.view.svg.widget.GridAnchor.Center;
		}
		return $r;
	}(this));
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.widget.GridAnchors.prototype.__class__ = rg.view.svg.widget.GridAnchors;
rg.view.svg.chart.StreamGraph = function(panel) {
	if( panel === $_ ) return;
	$s.push("rg.view.svg.chart.StreamGraph::new");
	var $spos = $s.length;
	rg.view.svg.chart.CartesianChart.call(this,panel);
	this.interpolator = thx.svg.LineInterpolator.Cardinal(0.6);
	this.gradientLightness = 0.75;
	this.gradientStyle = 1;
	$s.pop();
}
rg.view.svg.chart.StreamGraph.__name__ = ["rg","view","svg","chart","StreamGraph"];
rg.view.svg.chart.StreamGraph.__super__ = rg.view.svg.chart.CartesianChart;
for(var k in rg.view.svg.chart.CartesianChart.prototype ) rg.view.svg.chart.StreamGraph.prototype[k] = rg.view.svg.chart.CartesianChart.prototype[k];
rg.view.svg.chart.StreamGraph.prototype.interpolator = null;
rg.view.svg.chart.StreamGraph.prototype.gradientLightness = null;
rg.view.svg.chart.StreamGraph.prototype.gradientStyle = null;
rg.view.svg.chart.StreamGraph.prototype.dps = null;
rg.view.svg.chart.StreamGraph.prototype.area = null;
rg.view.svg.chart.StreamGraph.prototype.transformedData = null;
rg.view.svg.chart.StreamGraph.prototype.stats = null;
rg.view.svg.chart.StreamGraph.prototype.defs = null;
rg.view.svg.chart.StreamGraph.prototype.maxy = null;
rg.view.svg.chart.StreamGraph.prototype.init = function() {
	$s.push("rg.view.svg.chart.StreamGraph::init");
	var $spos = $s.length;
	rg.view.svg.chart.CartesianChart.prototype.init.call(this);
	this.defs = this.g.append("svg:defs");
	this.g.classed().add("stream-chart");
	$s.pop();
}
rg.view.svg.chart.StreamGraph.prototype.setVariables = function(variableIndependents,variableDependents) {
	$s.push("rg.view.svg.chart.StreamGraph::setVariables");
	var $spos = $s.length;
	rg.view.svg.chart.CartesianChart.prototype.setVariables.call(this,variableIndependents,variableDependents);
	$s.pop();
}
rg.view.svg.chart.StreamGraph.prototype.data = function(dps) {
	$s.push("rg.view.svg.chart.StreamGraph::data");
	var $spos = $s.length;
	this.dps = dps;
	this.prepareData();
	this.redraw();
	$s.pop();
}
rg.view.svg.chart.StreamGraph.prototype.redraw = function() {
	$s.push("rg.view.svg.chart.StreamGraph::redraw");
	var $spos = $s.length;
	if(null == this.transformedData) {
		$s.pop();
		return;
	}
	var layer = this.g.selectAll("g.group").data(this.transformedData);
	layer.update().select("path.line").attr("d").stringf($closure(this.area,"shape"));
	var node = layer.enter().append("svg:g").attr("class").string("group").onNode("mousemove",$closure(this,"onover")).onNode("click",$closure(this,"onclick")).append("svg:path").attr("class").stringf(function(d,i) {
		$s.push("rg.view.svg.chart.StreamGraph::redraw@88");
		var $spos = $s.length;
		var $tmp = "line fill-" + i;
		$s.pop();
		return $tmp;
		$s.pop();
	}).attr("d").stringf($closure(this.area,"shape"));
	if(this.gradientStyle != 0) node.each(this.gradientStyle == 1?$closure(this,"applyGradientV"):$closure(this,"applyGradientH"));
	layer.exit().remove();
	$s.pop();
}
rg.view.svg.chart.StreamGraph.prototype.getDataAtNode = function(n,i) {
	$s.push("rg.view.svg.chart.StreamGraph::getDataAtNode");
	var $spos = $s.length;
	var px = thx.js.Svg.mouse(n)[0], x = (Floats.uninterpolatef(this.transformedData[i][0].coord.x,Arrays.last(this.transformedData[i]).coord.x))(px / this.width);
	var data = Reflect.field(n,"__data__");
	var $tmp = Arrays.nearest(this.transformedData[i],x,function(d) {
		$s.push("rg.view.svg.chart.StreamGraph::getDataAtNode@104");
		var $spos = $s.length;
		var $tmp = d.coord.x;
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.chart.StreamGraph.prototype.onover = function(n,i) {
	$s.push("rg.view.svg.chart.StreamGraph::onover");
	var $spos = $s.length;
	if(null == this.labelDataPointOver) {
		$s.pop();
		return;
	}
	var dp = this.getDataAtNode(n,i);
	this.tooltip.setText(this.labelDataPointOver(dp.dp,this.stats).split("\n"));
	this.tooltip.show();
	this.moveTooltip(dp.coord.x * this.width,this.height - (dp.coord.y + dp.coord.y0) * this.height / this.maxy);
	$s.pop();
}
rg.view.svg.chart.StreamGraph.prototype.onclick = function(n,i) {
	$s.push("rg.view.svg.chart.StreamGraph::onclick");
	var $spos = $s.length;
	if(null == this.click) {
		$s.pop();
		return;
	}
	var dp = this.getDataAtNode(n,i);
	this.click(dp.dp,this.stats);
	$s.pop();
}
rg.view.svg.chart.StreamGraph.prototype.prepareData = function() {
	$s.push("rg.view.svg.chart.StreamGraph::prepareData");
	var $spos = $s.length;
	var me = this;
	this.defs.selectAll("linearGradient.h").remove();
	var xscale = (function(f,a1,a2) {
		$s.push("rg.view.svg.chart.StreamGraph::prepareData@128");
		var $spos = $s.length;
		var $tmp = function(a3) {
			$s.push("rg.view.svg.chart.StreamGraph::prepareData@128@128");
			var $spos = $s.length;
			var $tmp = f(a1,a2,a3);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
		$s.pop();
	})($closure(this.xVariable.axis,"scale"),this.xVariable.min,this.xVariable.max), xtype = this.xVariable.type, x = function(d) {
		$s.push("rg.view.svg.chart.StreamGraph::prepareData@130");
		var $spos = $s.length;
		var $tmp = xscale(Reflect.field(d,xtype));
		$s.pop();
		return $tmp;
		$s.pop();
	}, yscale = (function(f,a1,a2) {
		$s.push("rg.view.svg.chart.StreamGraph::prepareData@131");
		var $spos = $s.length;
		var $tmp = function(a3) {
			$s.push("rg.view.svg.chart.StreamGraph::prepareData@131@131");
			var $spos = $s.length;
			var $tmp = f(a1,a2,a3);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
		$s.pop();
	})($closure(this.yVariables[0].axis,"scale"),this.yVariables[0].min,this.yVariables[0].max), ytype = this.yVariables[0].type, y = function(d) {
		$s.push("rg.view.svg.chart.StreamGraph::prepareData@133");
		var $spos = $s.length;
		var $tmp = yscale(Reflect.field(d,ytype));
		$s.pop();
		return $tmp;
		$s.pop();
	};
	var coords = this.dps.map(function(d,i) {
		$s.push("rg.view.svg.chart.StreamGraph::prepareData@134");
		var $spos = $s.length;
		var $tmp = d.map(function(d1,i1) {
			$s.push("rg.view.svg.chart.StreamGraph::prepareData@134@135");
			var $spos = $s.length;
			var $tmp = { x : x(d1), y : Math.max(0,y(d1))};
			$s.pop();
			return $tmp;
			$s.pop();
		});
		$s.pop();
		return $tmp;
		$s.pop();
	});
	var data = new thx.geom.layout.Stack().offset(thx.geom.layout.StackOffset.Silhouette).order(thx.geom.layout.StackOrder.DefaultOrder).stack(coords);
	this.transformedData = data.map(function(d,i) {
		$s.push("rg.view.svg.chart.StreamGraph::prepareData@148");
		var $spos = $s.length;
		var $tmp = d.map(function(d1,j) {
			$s.push("rg.view.svg.chart.StreamGraph::prepareData@148@148");
			var $spos = $s.length;
			var $tmp = { coord : d1, dp : me.dps[i][j]};
			$s.pop();
			return $tmp;
			$s.pop();
		});
		$s.pop();
		return $tmp;
		$s.pop();
	});
	this.stats = this.yVariables[0].stats;
	this.maxy = Arrays.floatMax(data,function(d) {
		$s.push("rg.view.svg.chart.StreamGraph::prepareData@157");
		var $spos = $s.length;
		var $tmp = Arrays.floatMax(d,function(d1) {
			$s.push("rg.view.svg.chart.StreamGraph::prepareData@157@157");
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
	this.area = new thx.svg.Area().interpolator(this.interpolator).x(function(d,i) {
		$s.push("rg.view.svg.chart.StreamGraph::prepareData@161");
		var $spos = $s.length;
		var $tmp = d.coord.x * me.width;
		$s.pop();
		return $tmp;
		$s.pop();
	}).y0(function(d,i) {
		$s.push("rg.view.svg.chart.StreamGraph::prepareData@162");
		var $spos = $s.length;
		var $tmp = me.height - d.coord.y0 * me.height / me.maxy;
		$s.pop();
		return $tmp;
		$s.pop();
	}).y1(function(d,i) {
		$s.push("rg.view.svg.chart.StreamGraph::prepareData@163");
		var $spos = $s.length;
		var $tmp = me.height - (d.coord.y + d.coord.y0) * me.height / me.maxy;
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
}
rg.view.svg.chart.StreamGraph.prototype.applyGradientV = function(d,i) {
	$s.push("rg.view.svg.chart.StreamGraph::applyGradientV");
	var $spos = $s.length;
	var gn = thx.js.Selection.getCurrent(), color = rg.view.svg.util.RGColors.parse(gn.style("fill").get(),"#cccccc"), id = "rg_stream_gradient_h_" + color.hex("");
	if(this.defs.select("#" + id).empty()) {
		var scolor = thx.color.Hsl.darker(thx.color.Hsl.toHsl(color),this.gradientLightness).toRgbString();
		var gradient = this.defs.append("svg:linearGradient").attr("id").string(id).attr("x1").string("0%").attr("x2").string("0%").attr("y1").string("100%").attr("y2").string("0%").attr("spreadMethod").string("pad");
		gradient.append("svg:stop").attr("offset").string("0%").attr("stop-color").string(scolor).attr("stop-opacity")["float"](1);
		gradient.append("svg:stop").attr("offset").string("100%").attr("stop-color").string(color.toRgbString()).attr("stop-opacity")["float"](1);
	}
	gn.attr("style").string("fill:url(#" + id + ")");
	$s.pop();
}
rg.view.svg.chart.StreamGraph.prototype.applyGradientH = function(d,i) {
	$s.push("rg.view.svg.chart.StreamGraph::applyGradientH");
	var $spos = $s.length;
	var gn = thx.js.Selection.getCurrent(), color = thx.color.Hsl.toHsl(rg.view.svg.util.RGColors.parse(gn.style("fill").get(),"#cccccc")), id = "rg_stream_gradient_v_" + rg.view.svg.chart.StreamGraph.vid++;
	var gradient = this.defs.append("svg:linearGradient").attr("class").string("x").attr("id").string(id).attr("x1").string("0%").attr("x2").string("100%").attr("y1").string("0%").attr("y2").string("0%");
	var bx = d[0].coord.x, ax = d[d.length - 1].coord.x, span = ax - bx, percent = function(x) {
		$s.push("rg.view.svg.chart.StreamGraph::applyGradientH@219");
		var $spos = $s.length;
		var $tmp = Math.round((x - bx) / span * 10000) / 100;
		$s.pop();
		return $tmp;
		$s.pop();
	}, max = Arrays.floatMax(d,function(d1) {
		$s.push("rg.view.svg.chart.StreamGraph::applyGradientH@222");
		var $spos = $s.length;
		var $tmp = d1.coord.y;
		$s.pop();
		return $tmp;
		$s.pop();
	});
	var _g1 = 0, _g = d.length;
	while(_g1 < _g) {
		var i1 = _g1++;
		var dp = d[i1], v = 1 + (dp.coord.y / max - 0.5) * this.gradientLightness;
		gradient.append("svg:stop").attr("offset").string(percent(dp.coord.x) + "%").attr("stop-color").string(thx.color.Hsl.darker(color,v).hex("#")).attr("stop-opacity")["float"](1);
	}
	gn.attr("style").string("fill:url(#" + id + ")");
	$s.pop();
}
rg.view.svg.chart.StreamGraph.prototype.__class__ = rg.view.svg.chart.StreamGraph;
rg.controller.visualization.VisualizationPieChart = function(layout) {
	if( layout === $_ ) return;
	$s.push("rg.controller.visualization.VisualizationPieChart::new");
	var $spos = $s.length;
	rg.controller.visualization.VisualizationSvg.call(this,layout);
	$s.pop();
}
rg.controller.visualization.VisualizationPieChart.__name__ = ["rg","controller","visualization","VisualizationPieChart"];
rg.controller.visualization.VisualizationPieChart.__super__ = rg.controller.visualization.VisualizationSvg;
for(var k in rg.controller.visualization.VisualizationSvg.prototype ) rg.controller.visualization.VisualizationPieChart.prototype[k] = rg.controller.visualization.VisualizationSvg.prototype[k];
rg.controller.visualization.VisualizationPieChart.prototype.chart = null;
rg.controller.visualization.VisualizationPieChart.prototype.title = null;
rg.controller.visualization.VisualizationPieChart.prototype.info = null;
rg.controller.visualization.VisualizationPieChart.prototype.init = function() {
	$s.push("rg.controller.visualization.VisualizationPieChart::init");
	var $spos = $s.length;
	var panelChart = this.layout.getPanel(this.layout.mainPanelName);
	this.chart = new rg.view.svg.chart.PieChart(panelChart);
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
	this.chart.labelDisplay = this.info.labeldisplay;
	this.chart.labelOrientation = this.info.labelorientation;
	this.chart.labelDontFlip = this.info.dontfliplabel;
	this.chart.animated = this.info.animation.animated;
	this.chart.animationDuration = this.info.animation.duration;
	this.chart.animationEase = this.info.animation.ease;
	this.chart.animationDelay = this.info.animation.delay;
	if(null != this.info.click) this.chart.mouseClick = this.info.click;
	if(null != this.info.label.title) {
		var panelContextTitle = this.layout.getContext("title");
		if(null == panelContextTitle) {
			$s.pop();
			return;
		}
		this.title = new rg.view.svg.layer.Title(panelContextTitle.panel,null,panelContextTitle.anchor);
	}
	$s.pop();
}
rg.controller.visualization.VisualizationPieChart.prototype.feedData = function(data) {
	$s.push("rg.controller.visualization.VisualizationPieChart::feedData");
	var $spos = $s.length;
	this.chart.setVariables(this.independentVariables,this.dependentVariables);
	if(null != this.title) {
		if(null != this.info.label.title) {
			this.title.setText(this.info.label.title(this.getVariables(),data));
			this.layout.suggestSize("title",this.title.idealHeight());
		} else this.layout.suggestSize("title",0);
	}
	if(null != this.info.sortDataPoint) data.sort(this.info.sortDataPoint);
	this.chart.init();
	this.chart.data(data);
	$s.pop();
}
rg.controller.visualization.VisualizationPieChart.prototype.destroy = function() {
	$s.push("rg.controller.visualization.VisualizationPieChart::destroy");
	var $spos = $s.length;
	this.chart.destroy();
	if(null != this.title) this.title.destroy();
	rg.controller.visualization.VisualizationSvg.prototype.destroy.call(this);
	$s.pop();
}
rg.controller.visualization.VisualizationPieChart.prototype.__class__ = rg.controller.visualization.VisualizationPieChart;
rg.controller.visualization.VisualizationHeatGrid = function(layout) {
	if( layout === $_ ) return;
	$s.push("rg.controller.visualization.VisualizationHeatGrid::new");
	var $spos = $s.length;
	rg.controller.visualization.VisualizationCartesian.call(this,layout);
	$s.pop();
}
rg.controller.visualization.VisualizationHeatGrid.__name__ = ["rg","controller","visualization","VisualizationHeatGrid"];
rg.controller.visualization.VisualizationHeatGrid.__super__ = rg.controller.visualization.VisualizationCartesian;
for(var k in rg.controller.visualization.VisualizationCartesian.prototype ) rg.controller.visualization.VisualizationHeatGrid.prototype[k] = rg.controller.visualization.VisualizationCartesian.prototype[k];
rg.controller.visualization.VisualizationHeatGrid.prototype.infoHeatGrid = null;
rg.controller.visualization.VisualizationHeatGrid.prototype.initAxes = function() {
	$s.push("rg.controller.visualization.VisualizationHeatGrid::initAxes");
	var $spos = $s.length;
	this.xvariable = this.independentVariables[0];
	this.yvariables = [this.independentVariables[1]];
	$s.pop();
}
rg.controller.visualization.VisualizationHeatGrid.prototype.initChart = function() {
	$s.push("rg.controller.visualization.VisualizationHeatGrid::initChart");
	var $spos = $s.length;
	var chart = new rg.view.svg.chart.HeatGrid(this.layout.getPanel(this.layout.mainPanelName));
	chart.useContour = this.infoHeatGrid.contour;
	chart.colorStart = this.infoHeatGrid.startColor;
	chart.colorEnd = this.infoHeatGrid.endColor;
	this.chart = chart;
	$s.pop();
}
rg.controller.visualization.VisualizationHeatGrid.prototype.transformData = function(dps) {
	$s.push("rg.controller.visualization.VisualizationHeatGrid::transformData");
	var $spos = $s.length;
	$s.pop();
	return dps;
	$s.pop();
}
rg.controller.visualization.VisualizationHeatGrid.prototype.setTickmarksDefaults = function(tickmarks,i,type,pname) {
	$s.push("rg.controller.visualization.VisualizationHeatGrid::setTickmarksDefaults");
	var $spos = $s.length;
	if(i != 0) {
		$s.pop();
		return;
	}
	tickmarks.labelAnchor = rg.view.svg.widget.GridAnchor.Left;
	tickmarks.labelAngle = 180;
	$s.pop();
}
rg.controller.visualization.VisualizationHeatGrid.prototype.__class__ = rg.controller.visualization.VisualizationHeatGrid;
rg.controller.info.InfoHeatGrid = function(p) {
	if( p === $_ ) return;
	$s.push("rg.controller.info.InfoHeatGrid::new");
	var $spos = $s.length;
	rg.controller.info.InfoCartesianChart.call(this);
	this.startColor = rg.controller.info.InfoHeatGrid.defaultStartColor;
	this.endColor = rg.controller.info.InfoHeatGrid.defaultEndColor;
	$s.pop();
}
rg.controller.info.InfoHeatGrid.__name__ = ["rg","controller","info","InfoHeatGrid"];
rg.controller.info.InfoHeatGrid.__super__ = rg.controller.info.InfoCartesianChart;
for(var k in rg.controller.info.InfoCartesianChart.prototype ) rg.controller.info.InfoHeatGrid.prototype[k] = rg.controller.info.InfoCartesianChart.prototype[k];
rg.controller.info.InfoHeatGrid.filters = function() {
	$s.push("rg.controller.info.InfoHeatGrid::filters");
	var $spos = $s.length;
	var $tmp = [{ field : "contour", validator : function(v) {
		$s.push("rg.controller.info.InfoHeatGrid::filters@31");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Bool);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "startcolor", validator : function(v) {
		$s.push("rg.controller.info.InfoHeatGrid::filters@35");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoHeatGrid::filters@36");
		var $spos = $s.length;
		var $tmp = [{ field : "startColor", value : rg.view.svg.util.RGColors.parse(v,rg.controller.info.InfoHeatGrid.defaultStartColor.hex("#"))}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "endcolor", validator : function(v) {
		$s.push("rg.controller.info.InfoHeatGrid::filters@42");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoHeatGrid::filters@43");
		var $spos = $s.length;
		var $tmp = [{ field : "endColor", value : rg.view.svg.util.RGColors.parse(v,rg.controller.info.InfoHeatGrid.defaultEndColor.hex("#"))}];
		$s.pop();
		return $tmp;
		$s.pop();
	}}].concat(rg.controller.info.InfoCartesianChart.filters());
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.controller.info.InfoHeatGrid.prototype.contour = null;
rg.controller.info.InfoHeatGrid.prototype.startColor = null;
rg.controller.info.InfoHeatGrid.prototype.endColor = null;
rg.controller.info.InfoHeatGrid.prototype.__class__ = rg.controller.info.InfoHeatGrid;
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
		$s.push("thx.js.BoundSelection::selfData@167");
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
		$s.push("thx.js.BoundSelection::each@172");
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
		$s.push("thx.js.BoundSelection::sort@177");
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
		$s.push("thx.js.BoundSelection::filter@182");
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
		$s.push("thx.js.BoundSelection::first@205");
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
		$s.push("thx.js.BoundSelection::on@210");
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
		$s.push("thx.js.PreEnterSelection::append@229");
		var $spos = $s.length;
		var n = js.Lib.document.createElement(name);
		node.appendChild(n);
		$s.pop();
		return n;
		$s.pop();
	};
	var appendNS = function(node) {
		$s.push("thx.js.PreEnterSelection::append@236");
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
		$s.push("thx.js.PreEnterSelection::insert@249");
		var $spos = $s.length;
		var n = js.Lib.document.createElement(name), bf = null != before?before:thx.js.Dom.selectNode(node).select(beforeSelector).node();
		node.insertBefore(n,bf);
		$s.pop();
		return n;
		$s.pop();
	};
	var insertNsDom = function(node) {
		$s.push("thx.js.PreEnterSelection::insert@256");
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
rg.data.VariableDependent = function(type,axis,scaleDistribution,min,max) {
	if( type === $_ ) return;
	$s.push("rg.data.VariableDependent::new");
	var $spos = $s.length;
	rg.data.Variable.call(this,type,axis,scaleDistribution,min,max);
	$s.pop();
}
rg.data.VariableDependent.__name__ = ["rg","data","VariableDependent"];
rg.data.VariableDependent.__super__ = rg.data.Variable;
for(var k in rg.data.Variable.prototype ) rg.data.VariableDependent.prototype[k] = rg.data.Variable.prototype[k];
rg.data.VariableDependent.prototype.__class__ = rg.data.VariableDependent;
rg.controller.info.InfoBarChart = function(p) {
	if( p === $_ ) return;
	$s.push("rg.controller.info.InfoBarChart::new");
	var $spos = $s.length;
	rg.controller.info.InfoCartesianChart.call(this);
	this.stacked = true;
	this.effect = rg.view.svg.chart.GradientEffect.Gradient(0.75);
	this.barPadding = 12;
	this.barPaddingAxis = 4;
	this.barPaddingDataPoint = 2;
	$s.pop();
}
rg.controller.info.InfoBarChart.__name__ = ["rg","controller","info","InfoBarChart"];
rg.controller.info.InfoBarChart.__super__ = rg.controller.info.InfoCartesianChart;
for(var k in rg.controller.info.InfoCartesianChart.prototype ) rg.controller.info.InfoBarChart.prototype[k] = rg.controller.info.InfoCartesianChart.prototype[k];
rg.controller.info.InfoBarChart.filters = function() {
	$s.push("rg.controller.info.InfoBarChart::filters");
	var $spos = $s.length;
	var $tmp = [{ field : "stacked", validator : function(v) {
		$s.push("rg.controller.info.InfoBarChart::filters@31");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Bool);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "effect", validator : function(v) {
		$s.push("rg.controller.info.InfoBarChart::filters@35");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoBarChart::filters@36");
		var $spos = $s.length;
		var $tmp = [{ field : "effect", value : rg.view.svg.chart.GradientEffects.parse(v)}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "barpadding", validator : function(v) {
		$s.push("rg.controller.info.InfoBarChart::filters@42");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Float);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoBarChart::filters@43");
		var $spos = $s.length;
		var $tmp = [{ field : "barPadding", value : v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "barpaddingaxis", validator : function(v) {
		$s.push("rg.controller.info.InfoBarChart::filters@49");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Float);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoBarChart::filters@50");
		var $spos = $s.length;
		var $tmp = [{ field : "barPaddingAxis", value : v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "barpaddingdatapoint", validator : function(v) {
		$s.push("rg.controller.info.InfoBarChart::filters@56");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Float);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoBarChart::filters@57");
		var $spos = $s.length;
		var $tmp = [{ field : "barPaddingDataPoint", value : v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}}].concat(rg.controller.info.InfoCartesianChart.filters());
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.controller.info.InfoBarChart.prototype.stacked = null;
rg.controller.info.InfoBarChart.prototype.effect = null;
rg.controller.info.InfoBarChart.prototype.barPaddingDataPoint = null;
rg.controller.info.InfoBarChart.prototype.barPaddingAxis = null;
rg.controller.info.InfoBarChart.prototype.barPadding = null;
rg.controller.info.InfoBarChart.prototype.__class__ = rg.controller.info.InfoBarChart;
rg.view.frame.Frame = function(p) {
	if( p === $_ ) return;
	$s.push("rg.view.frame.Frame::new");
	var $spos = $s.length;
	this.x = this.y = this.width = this.height = 0;
	$s.pop();
}
rg.view.frame.Frame.__name__ = ["rg","view","frame","Frame"];
rg.view.frame.Frame.prototype.x = null;
rg.view.frame.Frame.prototype.y = null;
rg.view.frame.Frame.prototype.width = null;
rg.view.frame.Frame.prototype.height = null;
rg.view.frame.Frame.prototype.change = function() {
	$s.push("rg.view.frame.Frame::change");
	var $spos = $s.length;
	$s.pop();
}
rg.view.frame.Frame.prototype.setLayout = function(x,y,width,height) {
	$s.push("rg.view.frame.Frame::setLayout");
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
rg.view.frame.Frame.prototype.toString = function() {
	$s.push("rg.view.frame.Frame::toString");
	var $spos = $s.length;
	var $tmp = "[x: " + this.x + ", y: " + this.y + ", width: " + this.width + ", height: " + this.height + "]";
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.frame.Frame.prototype.__class__ = rg.view.frame.Frame;
rg.view.frame.StackItem = function(disposition) {
	if( disposition === $_ ) return;
	$s.push("rg.view.frame.StackItem::new");
	var $spos = $s.length;
	rg.view.frame.Frame.call(this);
	this.setDisposition(disposition);
	$s.pop();
}
rg.view.frame.StackItem.__name__ = ["rg","view","frame","StackItem"];
rg.view.frame.StackItem.__super__ = rg.view.frame.Frame;
for(var k in rg.view.frame.Frame.prototype ) rg.view.frame.StackItem.prototype[k] = rg.view.frame.Frame.prototype[k];
rg.view.frame.StackItem.prototype.disposition = null;
rg.view.frame.StackItem.prototype.parent = null;
rg.view.frame.StackItem.prototype.setParent = function(v) {
	$s.push("rg.view.frame.StackItem::setParent");
	var $spos = $s.length;
	if(null != this.parent) this.parent.removeChild(this);
	var $tmp = this.parent = v;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.frame.StackItem.prototype.setDisposition = function(v) {
	$s.push("rg.view.frame.StackItem::setDisposition");
	var $spos = $s.length;
	this.disposition = v;
	if(null != this.parent) this.parent.reflow();
	$s.pop();
	return v;
	$s.pop();
}
rg.view.frame.StackItem.prototype.__class__ = rg.view.frame.StackItem;
rg.data.AxisGroupByTime = function(groupby) {
	if( groupby === $_ ) return;
	$s.push("rg.data.AxisGroupByTime::new");
	var $spos = $s.length;
	rg.data.AxisOrdinal.call(this,rg.data.AxisGroupByTime.valuesByGroup(groupby));
	this.groupBy = groupby;
	$s.pop();
}
rg.data.AxisGroupByTime.__name__ = ["rg","data","AxisGroupByTime"];
rg.data.AxisGroupByTime.__super__ = rg.data.AxisOrdinal;
for(var k in rg.data.AxisOrdinal.prototype ) rg.data.AxisGroupByTime.prototype[k] = rg.data.AxisOrdinal.prototype[k];
rg.data.AxisGroupByTime.valuesByGroup = function(groupby) {
	$s.push("rg.data.AxisGroupByTime::valuesByGroup");
	var $spos = $s.length;
	var $tmp = Ints.range(rg.data.AxisGroupByTime.defaultMin(groupby),rg.data.AxisGroupByTime.defaultMax(groupby) + 1);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.AxisGroupByTime.defaultMin = function(periodicity) {
	$s.push("rg.data.AxisGroupByTime::defaultMin");
	var $spos = $s.length;
	switch(periodicity) {
	case "minute":case "hour":case "week":case "month":
		$s.pop();
		return 0;
	case "day":
		$s.pop();
		return 1;
	default:
		throw new thx.error.Error("invalid periodicity '{0}' for groupBy min",null,periodicity,{ fileName : "AxisGroupByTime.hx", lineNumber : 34, className : "rg.data.AxisGroupByTime", methodName : "defaultMin"});
	}
	$s.pop();
}
rg.data.AxisGroupByTime.defaultMax = function(periodicity) {
	$s.push("rg.data.AxisGroupByTime::defaultMax");
	var $spos = $s.length;
	switch(periodicity) {
	case "minute":
		$s.pop();
		return 59;
	case "hour":
		$s.pop();
		return 23;
	case "day":
		$s.pop();
		return 31;
	case "week":
		$s.pop();
		return 6;
	case "month":
		$s.pop();
		return 11;
	default:
		throw new thx.error.Error("invalid periodicity '{0}' for groupBy max",null,periodicity,{ fileName : "AxisGroupByTime.hx", lineNumber : 48, className : "rg.data.AxisGroupByTime", methodName : "defaultMax"});
	}
	$s.pop();
}
rg.data.AxisGroupByTime.prototype.groupBy = null;
rg.data.AxisGroupByTime.prototype.__class__ = rg.data.AxisGroupByTime;
rg.controller.visualization.VisualizationHtml = function(container) {
	if( container === $_ ) return;
	$s.push("rg.controller.visualization.VisualizationHtml::new");
	var $spos = $s.length;
	this.container = container;
	container.classed().add("rg");
	$s.pop();
}
rg.controller.visualization.VisualizationHtml.__name__ = ["rg","controller","visualization","VisualizationHtml"];
rg.controller.visualization.VisualizationHtml.__super__ = rg.controller.visualization.Visualization;
for(var k in rg.controller.visualization.Visualization.prototype ) rg.controller.visualization.VisualizationHtml.prototype[k] = rg.controller.visualization.Visualization.prototype[k];
rg.controller.visualization.VisualizationHtml.prototype.container = null;
rg.controller.visualization.VisualizationHtml.prototype.__class__ = rg.controller.visualization.VisualizationHtml;
rg.controller.visualization.VisualizationLeaderboard = function(container) {
	if( container === $_ ) return;
	$s.push("rg.controller.visualization.VisualizationLeaderboard::new");
	var $spos = $s.length;
	rg.controller.visualization.VisualizationHtml.call(this,container);
	$s.pop();
}
rg.controller.visualization.VisualizationLeaderboard.__name__ = ["rg","controller","visualization","VisualizationLeaderboard"];
rg.controller.visualization.VisualizationLeaderboard.__super__ = rg.controller.visualization.VisualizationHtml;
for(var k in rg.controller.visualization.VisualizationHtml.prototype ) rg.controller.visualization.VisualizationLeaderboard.prototype[k] = rg.controller.visualization.VisualizationHtml.prototype[k];
rg.controller.visualization.VisualizationLeaderboard.prototype.info = null;
rg.controller.visualization.VisualizationLeaderboard.prototype.chart = null;
rg.controller.visualization.VisualizationLeaderboard.prototype.init = function() {
	$s.push("rg.controller.visualization.VisualizationLeaderboard::init");
	var $spos = $s.length;
	this.chart = new rg.view.html.widget.Leadeboard(this.container);
	if(null != this.info.label.datapoint) this.chart.labelDataPoint = this.info.label.datapoint;
	if(null != this.info.label.datapointover) this.chart.labelDataPointOver = this.info.label.datapointover;
	this.chart.animated = this.info.animation.animated;
	this.chart.animationDuration = this.info.animation.duration;
	this.chart.animationDelay = this.info.animation.delay;
	this.chart.animationEase = this.info.animation.ease;
	this.chart.displayGradient = this.info.displayGradient;
	this.chart.useMax = this.info.gradientOnMax;
	if(null != this.info.click) this.chart.click = this.info.click;
	if(null != this.info.sortDataPoint) this.chart.sortDataPoint = this.info.sortDataPoint;
	this.chart.init();
	$s.pop();
}
rg.controller.visualization.VisualizationLeaderboard.prototype.feedData = function(data) {
	$s.push("rg.controller.visualization.VisualizationLeaderboard::feedData");
	var $spos = $s.length;
	this.chart.setVariables(this.independentVariables,this.dependentVariables);
	this.chart.data(data);
	$s.pop();
}
rg.controller.visualization.VisualizationLeaderboard.prototype.__class__ = rg.controller.visualization.VisualizationLeaderboard;
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
rg.util.ChainedExecutor = function(handler) {
	if( handler === $_ ) return;
	$s.push("rg.util.ChainedExecutor::new");
	var $spos = $s.length;
	this.handler = handler;
	this.actions = [];
	$s.pop();
}
rg.util.ChainedExecutor.__name__ = ["rg","util","ChainedExecutor"];
rg.util.ChainedExecutor.prototype.handler = null;
rg.util.ChainedExecutor.prototype.actions = null;
rg.util.ChainedExecutor.prototype.addAction = function(handler) {
	$s.push("rg.util.ChainedExecutor::addAction");
	var $spos = $s.length;
	this.actions.push(handler);
	$s.pop();
}
rg.util.ChainedExecutor.prototype.execute = function(o) {
	$s.push("rg.util.ChainedExecutor::execute");
	var $spos = $s.length;
	if(this.actions.length == 0) this.handler(o); else (this.actions.shift())(o,$closure(this,"execute"));
	$s.pop();
}
rg.util.ChainedExecutor.prototype.__class__ = rg.util.ChainedExecutor;
rg.data.DataRequest = function(cache,datacontexts) {
	if( cache === $_ ) return;
	$s.push("rg.data.DataRequest::new");
	var $spos = $s.length;
	this.cache = cache;
	this.datacontexts = datacontexts;
	$s.pop();
}
rg.data.DataRequest.__name__ = ["rg","data","DataRequest"];
rg.data.DataRequest.prototype.queue = null;
rg.data.DataRequest.prototype.cache = null;
rg.data.DataRequest.prototype.datacontexts = null;
rg.data.DataRequest.prototype.collectedData = null;
rg.data.DataRequest.prototype.onData = function(data) {
	$s.push("rg.data.DataRequest::onData");
	var $spos = $s.length;
	haxe.Log.trace(data,{ fileName : "DataRequest.hx", lineNumber : 26, className : "rg.data.DataRequest", methodName : "onData"});
	$s.pop();
}
rg.data.DataRequest.prototype.request = function() {
	$s.push("rg.data.DataRequest::request");
	var $spos = $s.length;
	this.collectedData = [];
	this.queue = this.datacontexts.copy();
	this.processQueue();
	$s.pop();
}
rg.data.DataRequest.prototype.processQueue = function() {
	$s.push("rg.data.DataRequest::processQueue");
	var $spos = $s.length;
	var next = this.queue.shift();
	if(null == next) {
		this.onData(this.collectedData);
		$s.pop();
		return;
	}
	next.data.onData.addOnce((function(f,a1) {
		$s.push("rg.data.DataRequest::processQueue@44");
		var $spos = $s.length;
		var $tmp = function(a2) {
			$s.push("rg.data.DataRequest::processQueue@44@44");
			var $spos = $s.length;
			var $tmp = f(a1,a2);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
		$s.pop();
	})($closure(this,"receiveData"),next.name));
	next.data.load();
	$s.pop();
}
rg.data.DataRequest.prototype.receiveData = function(name,data) {
	$s.push("rg.data.DataRequest::receiveData");
	var $spos = $s.length;
	if(null == name) this.cache.set(name,new rg.data.source.DataSourceArray(data));
	this.collectedData = this.collectedData.concat(data);
	this.processQueue();
	$s.pop();
}
rg.data.DataRequest.prototype.__class__ = rg.data.DataRequest;
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
rg.data.Sources = function(sources) {
	if( sources === $_ ) return;
	$s.push("rg.data.Sources::new");
	var $spos = $s.length;
	this.sources = sources;
	this.length = sources.length;
	var _g1 = 0, _g = this.length;
	while(_g1 < _g) {
		var i = _g1++;
		sources[i].onLoad.add((function(f,a1) {
			$s.push("rg.data.Sources::new@25");
			var $spos = $s.length;
			var $tmp = function(a2) {
				$s.push("rg.data.Sources::new@25@25");
				var $spos = $s.length;
				var $tmp = f(a1,a2);
				$s.pop();
				return $tmp;
				$s.pop();
			};
			$s.pop();
			return $tmp;
			$s.pop();
		})($closure(this,"loaded"),i));
	}
	this.onLoad = new hxevents.Dispatcher();
	this.onLoading = new hxevents.Notifier();
	$s.pop();
}
rg.data.Sources.__name__ = ["rg","data","Sources"];
rg.data.Sources.prototype.onLoading = null;
rg.data.Sources.prototype.onLoad = null;
rg.data.Sources.prototype.sources = null;
rg.data.Sources.prototype.length = null;
rg.data.Sources.prototype.data = null;
rg.data.Sources.prototype.count = null;
rg.data.Sources.prototype.iterator = function() {
	$s.push("rg.data.Sources::iterator");
	var $spos = $s.length;
	var $tmp = this.sources.iterator();
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.Sources.prototype.load = function() {
	$s.push("rg.data.Sources::load");
	var $spos = $s.length;
	this.onLoading.dispatch();
	this.count = 0;
	this.data = [];
	this.sources.forEach(function(source,_) {
		$s.push("rg.data.Sources::load@37");
		var $spos = $s.length;
		source.load();
		$s.pop();
	});
	$s.pop();
}
rg.data.Sources.prototype.loaded = function(pos,d) {
	$s.push("rg.data.Sources::loaded");
	var $spos = $s.length;
	this.data[pos] = d;
	this.count++;
	if(this.count == this.length) this.complete();
	$s.pop();
}
rg.data.Sources.prototype.complete = function() {
	$s.push("rg.data.Sources::complete");
	var $spos = $s.length;
	this.onLoad.dispatch(this.data);
	$s.pop();
}
rg.data.Sources.prototype.__class__ = rg.data.Sources;
rg.controller.info.InfoScatterGraph = function(p) {
	if( p === $_ ) return;
	$s.push("rg.controller.info.InfoScatterGraph::new");
	var $spos = $s.length;
	rg.controller.info.InfoCartesianChart.call(this);
	this.symbol = function(dp,s) {
		$s.push("rg.controller.info.InfoScatterGraph::new@20");
		var $spos = $s.length;
		var $tmp = rg.view.svg.util.SymbolCache.cache.get("circle",16);
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
}
rg.controller.info.InfoScatterGraph.__name__ = ["rg","controller","info","InfoScatterGraph"];
rg.controller.info.InfoScatterGraph.__super__ = rg.controller.info.InfoCartesianChart;
for(var k in rg.controller.info.InfoCartesianChart.prototype ) rg.controller.info.InfoScatterGraph.prototype[k] = rg.controller.info.InfoCartesianChart.prototype[k];
rg.controller.info.InfoScatterGraph.filters = function() {
	$s.push("rg.controller.info.InfoScatterGraph::filters");
	var $spos = $s.length;
	var $tmp = [{ field : "symbol", validator : function(v) {
		$s.push("rg.controller.info.InfoScatterGraph::filters@27");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String) || Reflect.isFunction(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoScatterGraph::filters@28");
		var $spos = $s.length;
		var $tmp = [{ field : "symbol", value : Std["is"](v,String)?function(_,_1) {
			$s.push("rg.controller.info.InfoScatterGraph::filters@28@30");
			var $spos = $s.length;
			$s.pop();
			return v;
			$s.pop();
		}:v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "symbolstyle", validator : function(v) {
		$s.push("rg.controller.info.InfoScatterGraph::filters@34");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoScatterGraph::filters@35");
		var $spos = $s.length;
		var $tmp = [{ field : "symbolStyle", value : v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}}].concat(rg.controller.info.InfoCartesianChart.filters());
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.controller.info.InfoScatterGraph.prototype.symbol = null;
rg.controller.info.InfoScatterGraph.prototype.symbolStyle = null;
rg.controller.info.InfoScatterGraph.prototype.__class__ = rg.controller.info.InfoScatterGraph;
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
rg.view.svg.widget.LabelOrientation = { __ename__ : ["rg","view","svg","widget","LabelOrientation"], __constructs__ : ["FixedAngle","Aligned","Orthogonal"] }
rg.view.svg.widget.LabelOrientation.FixedAngle = function(angle) { var $x = ["FixedAngle",0,angle]; $x.__enum__ = rg.view.svg.widget.LabelOrientation; $x.toString = $estr; return $x; }
rg.view.svg.widget.LabelOrientation.Aligned = ["Aligned",1];
rg.view.svg.widget.LabelOrientation.Aligned.toString = $estr;
rg.view.svg.widget.LabelOrientation.Aligned.__enum__ = rg.view.svg.widget.LabelOrientation;
rg.view.svg.widget.LabelOrientation.Orthogonal = ["Orthogonal",2];
rg.view.svg.widget.LabelOrientation.Orthogonal.toString = $estr;
rg.view.svg.widget.LabelOrientation.Orthogonal.__enum__ = rg.view.svg.widget.LabelOrientation;
rg.data.source.rgquery.transform.TransformCount = function(properties,event,unit) {
	if( properties === $_ ) return;
	$s.push("rg.data.source.rgquery.transform.TransformCount::new");
	var $spos = $s.length;
	this.properties = properties;
	this.unit = unit;
	this.event = event;
	$s.pop();
}
rg.data.source.rgquery.transform.TransformCount.__name__ = ["rg","data","source","rgquery","transform","TransformCount"];
rg.data.source.rgquery.transform.TransformCount.prototype.properties = null;
rg.data.source.rgquery.transform.TransformCount.prototype.unit = null;
rg.data.source.rgquery.transform.TransformCount.prototype.event = null;
rg.data.source.rgquery.transform.TransformCount.prototype.transform = function(data) {
	$s.push("rg.data.source.rgquery.transform.TransformCount::transform");
	var $spos = $s.length;
	var dp = { event : this.event};
	Objects.copyTo(this.properties,dp);
	Objects.addField(dp,this.unit,data);
	var $tmp = [dp];
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.source.rgquery.transform.TransformCount.prototype.__class__ = rg.data.source.rgquery.transform.TransformCount;
rg.data.source.rgquery.transform.TransformCount.__interfaces__ = [rg.data.source.ITransform];
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
		$s.push("thx.js.BaseTransition::new@55");
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
		$s.push("thx.js.BaseTransition::step@68");
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
		$s.push("thx.js.BaseTransition::stop@157");
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
		$s.push("thx.js.BaseTransition::delay@171");
		var $spos = $s.length;
		var x = me._delay[++k] = f(n,i);
		if(x < delayMin) delayMin = x;
		$s.pop();
	}); else {
		delayMin = v;
		this.selection.eachNode(function(n,i) {
			$s.push("thx.js.BaseTransition::delay@178");
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
			$s.push("thx.js.BaseTransition::duration@193");
			var $spos = $s.length;
			var x = me._duration[++k] = f(n,i);
			if(x > me._durationMax) me._durationMax = x;
			$s.pop();
		});
	} else {
		this._durationMax = v;
		this.selection.eachNode(function(n,i) {
			$s.push("thx.js.BaseTransition::duration@200");
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
		$s.push("thx.js.BaseTransition::select@225");
		var $spos = $s.length;
		var $tmp = delay[++k];
		$s.pop();
		return $tmp;
		$s.pop();
	});
	k = -1;
	t.delay(function(d,i) {
		$s.push("thx.js.BaseTransition::select@226");
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
		$s.push("thx.js.BaseTransition::selectAll@236");
		var $spos = $s.length;
		var $tmp = delay[i > 0?k:++k];
		$s.pop();
		return $tmp;
		$s.pop();
	});
	k = -1;
	t.delay(function(d,i) {
		$s.push("thx.js.BaseTransition::selectAll@237");
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
		throw new thx.error.AbstractMethod({ fileName : "Transition.hx", lineNumber : 243, className : "thx.js.BaseTransition", methodName : "createTransition"});
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
thx.js.UnboundTransition.prototype.text = function() {
	$s.push("thx.js.UnboundTransition::text");
	var $spos = $s.length;
	var $tmp = new thx.js.AccessTweenText(this,this._tweens);
	$s.pop();
	return $tmp;
	$s.pop();
}
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
thx.js.BoundTransition.prototype.text = function() {
	$s.push("thx.js.BoundTransition::text");
	var $spos = $s.length;
	var $tmp = new thx.js.AccessDataTweenText(this,this._tweens);
	$s.pop();
	return $tmp;
	$s.pop();
}
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
		$s.push("thx.js.BoundTransition::start@274");
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
		$s.push("thx.js.BoundTransition::end@279");
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
rg.data.source.rgquery.transform.TransformIntersectTime = function(properties,fields,event,periodicity,unit) {
	if( properties === $_ ) return;
	$s.push("rg.data.source.rgquery.transform.TransformIntersectTime::new");
	var $spos = $s.length;
	this.properties = properties;
	this.unit = unit;
	this.periodicity = periodicity;
	this.fields = fields;
	this.event = event;
	$s.pop();
}
rg.data.source.rgquery.transform.TransformIntersectTime.__name__ = ["rg","data","source","rgquery","transform","TransformIntersectTime"];
rg.data.source.rgquery.transform.TransformIntersectTime.prototype.properties = null;
rg.data.source.rgquery.transform.TransformIntersectTime.prototype.unit = null;
rg.data.source.rgquery.transform.TransformIntersectTime.prototype.periodicity = null;
rg.data.source.rgquery.transform.TransformIntersectTime.prototype.fields = null;
rg.data.source.rgquery.transform.TransformIntersectTime.prototype.event = null;
rg.data.source.rgquery.transform.TransformIntersectTime.prototype.transform = function(data) {
	$s.push("rg.data.source.rgquery.transform.TransformIntersectTime::transform");
	var $spos = $s.length;
	var items = Objects.flatten(data,this.fields.length), properties = this.properties, unit = this.unit;
	if(null == items || 0 == items.length) {
		var $tmp = [];
		$s.pop();
		return $tmp;
	}
	var result = [];
	var _g = 0;
	while(_g < items.length) {
		var item = items[_g];
		++_g;
		var arr = item.value;
		var _g2 = 0, _g1 = arr.length;
		while(_g2 < _g1) {
			var i = _g2++;
			var p = Dynamics.clone(properties);
			Objects.addFields(p,this.fields,item.fields.map(rg.data.source.rgquery.transform.Transforms.typedValue));
			Objects.addFields(p,[rg.util.Properties.timeProperty(this.periodicity),unit],[this.periodicity != "minute" && this.periodicity != "hour"?Dates.snap(arr[i][0].timestamp,this.periodicity):arr[i][0].timestamp,arr[i][1]]);
			p.event = this.event;
			result.push(p);
		}
	}
	$s.pop();
	return result;
	$s.pop();
}
rg.data.source.rgquery.transform.TransformIntersectTime.prototype.__class__ = rg.data.source.rgquery.transform.TransformIntersectTime;
rg.data.source.rgquery.transform.TransformIntersectTime.__interfaces__ = [rg.data.source.ITransform];
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
rg.controller.info.InfoLabelAxis = function(p) {
	if( p === $_ ) return;
	$s.push("rg.controller.info.InfoLabelAxis::new");
	var $spos = $s.length;
	rg.controller.info.InfoLabel.call(this);
	$s.pop();
}
rg.controller.info.InfoLabelAxis.__name__ = ["rg","controller","info","InfoLabelAxis"];
rg.controller.info.InfoLabelAxis.__super__ = rg.controller.info.InfoLabel;
for(var k in rg.controller.info.InfoLabel.prototype ) rg.controller.info.InfoLabelAxis.prototype[k] = rg.controller.info.InfoLabel.prototype[k];
rg.controller.info.InfoLabelAxis.filters = function() {
	$s.push("rg.controller.info.InfoLabelAxis::filters");
	var $spos = $s.length;
	var $tmp = [{ field : "axis", validator : function(v) {
		$s.push("rg.controller.info.InfoLabelAxis::filters@21");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "axisvalue", validator : function(v) {
		$s.push("rg.controller.info.InfoLabelAxis::filters@25");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "tickmark", validator : function(v) {
		$s.push("rg.controller.info.InfoLabelAxis::filters@29");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null}].concat(rg.controller.info.InfoLabel.filters());
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.controller.info.InfoLabelAxis.prototype.axis = null;
rg.controller.info.InfoLabelAxis.prototype.axisvalue = null;
rg.controller.info.InfoLabelAxis.prototype.tickmark = null;
rg.controller.info.InfoLabelAxis.prototype.__class__ = rg.controller.info.InfoLabelAxis;
rg.controller.info.InfoLineChart = function(p) {
	if( p === $_ ) return;
	$s.push("rg.controller.info.InfoLineChart::new");
	var $spos = $s.length;
	rg.controller.info.InfoCartesianChart.call(this);
	this.effect = rg.view.svg.chart.LineEffect.Gradient(0.75,2);
	this.interpolation = thx.svg.LineInterpolator.Linear;
	this.displayarea = false;
	$s.pop();
}
rg.controller.info.InfoLineChart.__name__ = ["rg","controller","info","InfoLineChart"];
rg.controller.info.InfoLineChart.__super__ = rg.controller.info.InfoCartesianChart;
for(var k in rg.controller.info.InfoCartesianChart.prototype ) rg.controller.info.InfoLineChart.prototype[k] = rg.controller.info.InfoCartesianChart.prototype[k];
rg.controller.info.InfoLineChart.filters = function() {
	$s.push("rg.controller.info.InfoLineChart::filters");
	var $spos = $s.length;
	var $tmp = [{ field : "symbol", validator : function(v) {
		$s.push("rg.controller.info.InfoLineChart::filters@35");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String) || Reflect.isFunction(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoLineChart::filters@36");
		var $spos = $s.length;
		var $tmp = [{ field : "symbol", value : Std["is"](v,String)?function(_,_1) {
			$s.push("rg.controller.info.InfoLineChart::filters@36@38");
			var $spos = $s.length;
			$s.pop();
			return v;
			$s.pop();
		}:v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "symbolstyle", validator : function(v) {
		$s.push("rg.controller.info.InfoLineChart::filters@42");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoLineChart::filters@43");
		var $spos = $s.length;
		var $tmp = [{ field : "symbolStyle", value : v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "displayarea", validator : function(v) {
		$s.push("rg.controller.info.InfoLineChart::filters@49");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Bool);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "effect", validator : function(v) {
		$s.push("rg.controller.info.InfoLineChart::filters@53");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoLineChart::filters@54");
		var $spos = $s.length;
		var $tmp = [{ field : "effect", value : rg.view.svg.chart.LineEffects.parse(v)}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "interpolation", validator : function(v) {
		$s.push("rg.controller.info.InfoLineChart::filters@60");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoLineChart::filters@61");
		var $spos = $s.length;
		var $tmp = [{ field : "interpolation", value : thx.svg.LineInterpolators.parse(v)}];
		$s.pop();
		return $tmp;
		$s.pop();
	}}].concat(rg.controller.info.InfoCartesianChart.filters());
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.controller.info.InfoLineChart.prototype.effect = null;
rg.controller.info.InfoLineChart.prototype.interpolation = null;
rg.controller.info.InfoLineChart.prototype.symbol = null;
rg.controller.info.InfoLineChart.prototype.symbolStyle = null;
rg.controller.info.InfoLineChart.prototype.displayarea = null;
rg.controller.info.InfoLineChart.prototype.__class__ = rg.controller.info.InfoLineChart;
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
rg.view.svg.chart.Coords = function() { }
rg.view.svg.chart.Coords.__name__ = ["rg","view","svg","chart","Coords"];
rg.view.svg.chart.Coords.fromTransform = function(s) {
	$s.push("rg.view.svg.chart.Coords::fromTransform");
	var $spos = $s.length;
	if(!rg.view.svg.chart.Coords.retransform.match(s)) {
		var $tmp = [0.0,0];
		$s.pop();
		return $tmp;
	} else {
		var y = rg.view.svg.chart.Coords.retransform.matched(2);
		var $tmp = [Std.parseFloat(rg.view.svg.chart.Coords.retransform.matched(1)),null == y?0:Std.parseFloat(y)];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
rg.view.svg.chart.Coords.prototype.__class__ = rg.view.svg.chart.Coords;
rg.data.DataContext = function(name,data) {
	if( name === $_ ) return;
	$s.push("rg.data.DataContext::new");
	var $spos = $s.length;
	this.name = name;
	this.data = data;
	$s.pop();
}
rg.data.DataContext.__name__ = ["rg","data","DataContext"];
rg.data.DataContext.prototype.name = null;
rg.data.DataContext.prototype.data = null;
rg.data.DataContext.prototype.__class__ = rg.data.DataContext;
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
rg.controller.info.InfoPadding = function(p) {
	$s.push("rg.controller.info.InfoPadding::new");
	var $spos = $s.length;
	$s.pop();
}
rg.controller.info.InfoPadding.__name__ = ["rg","controller","info","InfoPadding"];
rg.controller.info.InfoPadding.filters = function() {
	$s.push("rg.controller.info.InfoPadding::filters");
	var $spos = $s.length;
	var $tmp = [{ field : "top", validator : function(v) {
		$s.push("rg.controller.info.InfoPadding::filters@20");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Int);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "bottom", validator : function(v) {
		$s.push("rg.controller.info.InfoPadding::filters@24");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Int);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "left", validator : function(v) {
		$s.push("rg.controller.info.InfoPadding::filters@28");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Int);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "right", validator : function(v) {
		$s.push("rg.controller.info.InfoPadding::filters@32");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Int);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null}];
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.controller.info.InfoPadding.prototype.top = null;
rg.controller.info.InfoPadding.prototype.bottom = null;
rg.controller.info.InfoPadding.prototype.left = null;
rg.controller.info.InfoPadding.prototype.right = null;
rg.controller.info.InfoPadding.prototype.__class__ = rg.controller.info.InfoPadding;
rg.controller.visualization.VisualizationFunnelChart = function(layout) {
	if( layout === $_ ) return;
	$s.push("rg.controller.visualization.VisualizationFunnelChart::new");
	var $spos = $s.length;
	rg.controller.visualization.VisualizationSvg.call(this,layout);
	$s.pop();
}
rg.controller.visualization.VisualizationFunnelChart.__name__ = ["rg","controller","visualization","VisualizationFunnelChart"];
rg.controller.visualization.VisualizationFunnelChart.__super__ = rg.controller.visualization.VisualizationSvg;
for(var k in rg.controller.visualization.VisualizationSvg.prototype ) rg.controller.visualization.VisualizationFunnelChart.prototype[k] = rg.controller.visualization.VisualizationSvg.prototype[k];
rg.controller.visualization.VisualizationFunnelChart.prototype.info = null;
rg.controller.visualization.VisualizationFunnelChart.prototype.title = null;
rg.controller.visualization.VisualizationFunnelChart.prototype.chart = null;
rg.controller.visualization.VisualizationFunnelChart.prototype.init = function() {
	$s.push("rg.controller.visualization.VisualizationFunnelChart::init");
	var $spos = $s.length;
	var panelChart = this.layout.getPanel(this.layout.mainPanelName);
	this.chart = new rg.view.svg.chart.FunnelChart(panelChart);
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
		if(null == panelContextTitle) {
			$s.pop();
			return;
		}
		this.title = new rg.view.svg.layer.Title(panelContextTitle.panel,null,panelContextTitle.anchor);
	}
	$s.pop();
}
rg.controller.visualization.VisualizationFunnelChart.prototype.feedData = function(data) {
	$s.push("rg.controller.visualization.VisualizationFunnelChart::feedData");
	var $spos = $s.length;
	this.chart.setVariables(this.independentVariables,this.dependentVariables);
	var data1 = rg.util.DataPoints.filterByIndependents(rg.util.DataPoints.filterByDependents(data,this.dependentVariables),this.independentVariables);
	if(null != this.info.sortDataPoint) data1.sort(this.info.sortDataPoint);
	if(null != this.title) {
		if(null != this.info.label.title) {
			this.title.setText(this.info.label.title(this.getVariables(),data1));
			this.layout.suggestSize("title",this.title.idealHeight());
		} else this.layout.suggestSize("title",0);
	}
	if(null != this.info.sortDataPoint) data1.sort(this.info.sortDataPoint);
	this.chart.init();
	this.chart.data(data1);
	$s.pop();
}
rg.controller.visualization.VisualizationFunnelChart.prototype.destroy = function() {
	$s.push("rg.controller.visualization.VisualizationFunnelChart::destroy");
	var $spos = $s.length;
	this.chart.destroy();
	if(null != this.title) this.title.destroy();
	rg.controller.visualization.VisualizationSvg.prototype.destroy.call(this);
	$s.pop();
}
rg.controller.visualization.VisualizationFunnelChart.prototype.__class__ = rg.controller.visualization.VisualizationFunnelChart;
rg.data.source.rgquery.transform.Transforms = function() { }
rg.data.source.rgquery.transform.Transforms.__name__ = ["rg","data","source","rgquery","transform","Transforms"];
rg.data.source.rgquery.transform.Transforms.typedValue = function(s,_) {
	$s.push("rg.data.source.rgquery.transform.Transforms::typedValue");
	var $spos = $s.length;
	if(s.substr(0,1) == "\"") {
		var $tmp = StringTools.replace(s.substr(1,s.length - 2),"\\\"","\"");
		$s.pop();
		return $tmp;
	} else if((s = s.toLowerCase()) == "true") {
		$s.pop();
		return true;
	} else if(s == "false") {
		$s.pop();
		return false;
	} else {
		var $tmp = Std.parseFloat(s);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
rg.data.source.rgquery.transform.Transforms.prototype.__class__ = rg.data.source.rgquery.transform.Transforms;
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
rg.controller.info.InfoLeaderboard = function(p) {
	if( p === $_ ) return;
	$s.push("rg.controller.info.InfoLeaderboard::new");
	var $spos = $s.length;
	this.animation = new rg.controller.info.InfoAnimation();
	this.label = new rg.controller.info.InfoLabel();
	this.displayGradient = true;
	this.gradientOnMax = false;
	$s.pop();
}
rg.controller.info.InfoLeaderboard.__name__ = ["rg","controller","info","InfoLeaderboard"];
rg.controller.info.InfoLeaderboard.filters = function() {
	$s.push("rg.controller.info.InfoLeaderboard::filters");
	var $spos = $s.length;
	var $tmp = [{ field : "animation", validator : function(v) {
		$s.push("rg.controller.info.InfoLeaderboard::filters@32");
		var $spos = $s.length;
		var $tmp = Reflect.isObject(v) && null == Type.getClass(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoLeaderboard::filters@33");
		var $spos = $s.length;
		var animation = new rg.controller.info.InfoAnimation();
		animation.ease = thx.math.Equations.linear;
		var $tmp = [{ field : "animation", value : rg.controller.info.Info.feed(animation,v)}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "label", validator : function(v) {
		$s.push("rg.controller.info.InfoLeaderboard::filters@43");
		var $spos = $s.length;
		var $tmp = Reflect.isObject(v) && null == Type.getClass(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoLeaderboard::filters@44");
		var $spos = $s.length;
		var $tmp = [{ field : "label", value : rg.controller.info.Info.feed(new rg.controller.info.InfoLabel(),v)}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "click", validator : function(v) {
		$s.push("rg.controller.info.InfoLeaderboard::filters@50");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "sort", validator : function(v) {
		$s.push("rg.controller.info.InfoLeaderboard::filters@54");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoLeaderboard::filters@55");
		var $spos = $s.length;
		var $tmp = [{ field : "sortDataPoint", value : v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "effect", validator : function(v) {
		$s.push("rg.controller.info.InfoLeaderboard::filters@61");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoLeaderboard::filters@62");
		var $spos = $s.length;
		switch(v.toLowerCase()) {
		case "gradient":case "gradient-tot":
			var $tmp = [{ field : "displayGradient", value : true},{ field : "gradientOnMax", value : false}];
			$s.pop();
			return $tmp;
		case "gradient-max":
			var $tmp = [{ field : "displayGradient", value : true},{ field : "gradientOnMax", value : true}];
			$s.pop();
			return $tmp;
		default:
			var $tmp = [{ field : "displayGradient", value : false},{ field : "gradientOnMax", value : true}];
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}}];
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.controller.info.InfoLeaderboard.prototype.animation = null;
rg.controller.info.InfoLeaderboard.prototype.label = null;
rg.controller.info.InfoLeaderboard.prototype.click = null;
rg.controller.info.InfoLeaderboard.prototype.sortDataPoint = null;
rg.controller.info.InfoLeaderboard.prototype.displayGradient = null;
rg.controller.info.InfoLeaderboard.prototype.gradientOnMax = null;
rg.controller.info.InfoLeaderboard.prototype.__class__ = rg.controller.info.InfoLeaderboard;
rg.data.DataProcessor = function(sources) {
	if( sources === $_ ) return;
	$s.push("rg.data.DataProcessor::new");
	var $spos = $s.length;
	this.sources = sources;
	sources.onLoading.add($closure(this,"preprocess"));
	sources.onLoad.add($closure(this,"process"));
	this.onData = new hxevents.Dispatcher();
	$s.pop();
}
rg.data.DataProcessor.__name__ = ["rg","data","DataProcessor"];
rg.data.DataProcessor.updateStats = function(variable,dps) {
	$s.push("rg.data.DataProcessor::updateStats");
	var $spos = $s.length;
	variable.stats.addMany(rg.util.DataPoints.values(dps,variable.type));
	$s.pop();
}
rg.data.DataProcessor.prototype.sources = null;
rg.data.DataProcessor.prototype.onData = null;
rg.data.DataProcessor.prototype.independentVariables = null;
rg.data.DataProcessor.prototype.dependentVariables = null;
rg.data.DataProcessor.prototype.transform = function(s) {
	$s.push("rg.data.DataProcessor::transform");
	var $spos = $s.length;
	var $tmp = Arrays.flatten(s);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.DataProcessor.prototype.scale = function(s) {
	$s.push("rg.data.DataProcessor::scale");
	var $spos = $s.length;
	$s.pop();
	return s;
	$s.pop();
}
rg.data.DataProcessor.prototype.load = function() {
	$s.push("rg.data.DataProcessor::load");
	var $spos = $s.length;
	this.sources.load();
	$s.pop();
}
rg.data.DataProcessor.prototype.filterSubset = function(subset,variables) {
	$s.push("rg.data.DataProcessor::filterSubset");
	var $spos = $s.length;
	var $tmp = Arrays.filter(subset,(function(f,a1) {
		$s.push("rg.data.DataProcessor::filterSubset@77");
		var $spos = $s.length;
		var $tmp = function(a2) {
			$s.push("rg.data.DataProcessor::filterSubset@77@77");
			var $spos = $s.length;
			var $tmp = f(a1,a2);
			$s.pop();
			return $tmp;
			$s.pop();
		};
		$s.pop();
		return $tmp;
		$s.pop();
	})($closure(this,"filterDatapoint"),variables));
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.DataProcessor.prototype.filterDatapoint = function(variables,dp) {
	$s.push("rg.data.DataProcessor::filterDatapoint");
	var $spos = $s.length;
	var name;
	var _g1 = 0, _g = this.independentVariables.length;
	while(_g1 < _g) {
		var i = _g1++;
		name = this.independentVariables[i].variable.type;
		if(Reflect.field(dp,name) != variables[i]) {
			$s.pop();
			return false;
		}
	}
	$s.pop();
	return true;
	$s.pop();
}
rg.data.DataProcessor.prototype.preprocess = function() {
	$s.push("rg.data.DataProcessor::preprocess");
	var $spos = $s.length;
	var _g = 0, _g1 = this.independentVariables;
	while(_g < _g1.length) {
		var ctx = _g1[_g];
		++_g;
		ctx.variable.stats.reset();
	}
	var _g = 0, _g1 = this.dependentVariables;
	while(_g < _g1.length) {
		var ctx = _g1[_g];
		++_g;
		ctx.variable.stats.reset();
	}
	$s.pop();
}
rg.data.DataProcessor.prototype.process = function(data) {
	$s.push("rg.data.DataProcessor::process");
	var $spos = $s.length;
	if(null == data || data.length == 0 || data[0].length == 0) {
		this.onData.dispatch([]);
		$s.pop();
		return;
	}
	data = this.scale(data);
	this.fillIndependentVariables(data);
	var dataPoints = [];
	var variablesset = this.getVariableIndependentValues();
	var _g = 0;
	while(_g < variablesset.length) {
		var values = variablesset[_g];
		++_g;
		var subsets = [];
		var _g1 = 0;
		while(_g1 < data.length) {
			var d = data[_g1];
			++_g1;
			var subset = this.filterSubset(d,values);
			if(subset.length > 0) subsets.push(subset);
		}
		if(subsets.length == 0 || subsets[0].length == 0) continue;
		var transformed = this.transform(subsets);
		dataPoints = dataPoints.concat(transformed);
	}
	this.fillDependentVariables(dataPoints);
	this.onData.dispatch(dataPoints);
	$s.pop();
}
rg.data.DataProcessor.prototype.fillDependentVariables = function(data) {
	$s.push("rg.data.DataProcessor::fillDependentVariables");
	var $spos = $s.length;
	var _g = 0, _g1 = this.dependentVariables;
	while(_g < _g1.length) {
		var ctx = _g1[_g];
		++_g;
		if(ctx.partial) {
			var variable = ctx.variable, values = rg.util.DataPoints.values(data,variable.type);
			if(values.length == 0) continue;
			if(null == variable.axis) variable.setAxis(new rg.controller.factory.FactoryAxis().create(variable.type,Std["is"](values[0],Float)));
			variable.stats.addMany(values);
			if(null == variable.min) variable.min = variable.stats.isNumeric?0:variable.stats.min;
			if(null == variable.max) variable.max = variable.stats.max;
		} else rg.data.DataProcessor.updateStats(ctx.variable,data);
		var discrete;
		if(null != ctx.variable.scaleDistribution && null != (discrete = Types["as"](ctx.variable.axis,rg.data.IAxisDiscrete))) {
			discrete.setScaleDistribution(ctx.variable.scaleDistribution);
			ctx.variable.scaleDistribution = null;
		}
	}
	$s.pop();
}
rg.data.DataProcessor.prototype.fillIndependentVariables = function(data) {
	$s.push("rg.data.DataProcessor::fillIndependentVariables");
	var $spos = $s.length;
	var toprocess = false, flatten = Arrays.flatten(data);
	var _g = 0, _g1 = this.independentVariables;
	while(_g < _g1.length) {
		var ctx = _g1[_g];
		++_g;
		if(ctx.partial) toprocess = true;
		var discrete;
		if(null != ctx.variable.scaleDistribution && null != (discrete = Types["as"](ctx.variable.axis,rg.data.IAxisDiscrete))) {
			discrete.setScaleDistribution(ctx.variable.scaleDistribution);
			ctx.variable.scaleDistribution = null;
		}
	}
	if(toprocess) {
		var _g = 0, _g1 = this.independentVariables;
		while(_g < _g1.length) {
			var ctx = _g1[_g];
			++_g;
			if(ctx.partial) this.fillIndependentVariable(ctx.variable,flatten);
		}
	}
	$s.pop();
}
rg.data.DataProcessor.prototype.fillIndependentVariable = function(variable,data) {
	$s.push("rg.data.DataProcessor::fillIndependentVariable");
	var $spos = $s.length;
	variable.stats.addMany(rg.util.DataPoints.values(data,variable.type));
	var ordinal = Types["as"](variable.axis,rg.data.AxisOrdinal);
	if(null != ordinal) {
		if(null == ordinal.getValues() || ordinal.getValues().length == 0) ordinal.setValues(thx.collection.Set.ofArray(variable.stats.values));
	}
	if(null == variable.min) variable.min = variable.stats.min;
	if(null == variable.max) variable.max = variable.stats.max;
	$s.pop();
}
rg.data.DataProcessor.prototype.getVariableIndependentValues = function() {
	$s.push("rg.data.DataProcessor::getVariableIndependentValues");
	var $spos = $s.length;
	var $tmp = Arrays.product(this.independentVariables.map(function(d,i) {
		$s.push("rg.data.DataProcessor::getVariableIndependentValues@228");
		var $spos = $s.length;
		var $tmp = d.variable.axis.range(d.variable.min,d.variable.max);
		$s.pop();
		return $tmp;
		$s.pop();
	}));
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.DataProcessor.prototype.__class__ = rg.data.DataProcessor;
rg.data.source.rgquery.transform.TransformIntersectGroup = function(properties,fields,event,periodicity,unit) {
	if( properties === $_ ) return;
	$s.push("rg.data.source.rgquery.transform.TransformIntersectGroup::new");
	var $spos = $s.length;
	this.properties = properties;
	this.unit = unit;
	this.periodicity = periodicity;
	this.fields = fields;
	this.event = event;
	$s.pop();
}
rg.data.source.rgquery.transform.TransformIntersectGroup.__name__ = ["rg","data","source","rgquery","transform","TransformIntersectGroup"];
rg.data.source.rgquery.transform.TransformIntersectGroup.prototype.properties = null;
rg.data.source.rgquery.transform.TransformIntersectGroup.prototype.unit = null;
rg.data.source.rgquery.transform.TransformIntersectGroup.prototype.periodicity = null;
rg.data.source.rgquery.transform.TransformIntersectGroup.prototype.groupby = null;
rg.data.source.rgquery.transform.TransformIntersectGroup.prototype.fields = null;
rg.data.source.rgquery.transform.TransformIntersectGroup.prototype.event = null;
rg.data.source.rgquery.transform.TransformIntersectGroup.prototype.transform = function(data) {
	$s.push("rg.data.source.rgquery.transform.TransformIntersectGroup::transform");
	var $spos = $s.length;
	var items = Objects.flatten(data,this.fields.length), properties = this.properties, unit = this.unit;
	if(null == items || 0 == items.length) {
		var $tmp = [];
		$s.pop();
		return $tmp;
	}
	var result = [];
	var _g = 0;
	while(_g < items.length) {
		var item = items[_g];
		++_g;
		var arr = item.value;
		var _g2 = 0, _g1 = arr.length;
		while(_g2 < _g1) {
			var i = _g2++;
			var p = Dynamics.clone(properties);
			Objects.addFields(p,this.fields,item.fields.map(rg.data.source.rgquery.transform.Transforms.typedValue));
			Objects.addFields(p,[rg.util.Properties.timeProperty(this.periodicity),unit],[Reflect.field(arr[i][0],this.periodicity),arr[i][1]]);
			p.event = this.event;
			result.push(p);
		}
	}
	$s.pop();
	return result;
	$s.pop();
}
rg.data.source.rgquery.transform.TransformIntersectGroup.prototype.__class__ = rg.data.source.rgquery.transform.TransformIntersectGroup;
rg.data.source.rgquery.transform.TransformIntersectGroup.__interfaces__ = [rg.data.source.ITransform];
rg.controller.Visualizations = function() { }
rg.controller.Visualizations.__name__ = ["rg","controller","Visualizations"];
rg.controller.Visualizations.layoutDefault = null;
rg.controller.Visualizations.layoutType = null;
rg.controller.Visualizations.layoutArgs = null;
rg.controller.Visualizations.instantiateLayout = function(name,width,height,container) {
	$s.push("rg.controller.Visualizations::instantiateLayout");
	var $spos = $s.length;
	var $tmp = Type.createInstance(rg.controller.Visualizations.layoutType.get(name),[width,height,container]);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.controller.Visualizations.prototype.__class__ = rg.controller.Visualizations;
thx.js.AccessTweenText = function(transition,tweens) {
	if( transition === $_ ) return;
	$s.push("thx.js.AccessTweenText::new");
	var $spos = $s.length;
	thx.js.AccessTween.call(this,transition,tweens);
	$s.pop();
}
thx.js.AccessTweenText.__name__ = ["thx","js","AccessTweenText"];
thx.js.AccessTweenText.__super__ = thx.js.AccessTween;
for(var k in thx.js.AccessTween.prototype ) thx.js.AccessTweenText.prototype[k] = thx.js.AccessTween.prototype[k];
thx.js.AccessTweenText.prototype.stringNodef = function(f) {
	$s.push("thx.js.AccessTweenText::stringNodef");
	var $spos = $s.length;
	var $tmp = this.stringTweenNodef(this.transitionStringTweenf(f));
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessTweenText.prototype.string = function(value) {
	$s.push("thx.js.AccessTweenText::string");
	var $spos = $s.length;
	var $tmp = this.stringTweenNodef(this.transitionStringTween(value));
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessTweenText.prototype.stringTweenNodef = function(tween) {
	$s.push("thx.js.AccessTweenText::stringTweenNodef");
	var $spos = $s.length;
	var handler = function(d,i) {
		$s.push("thx.js.AccessTweenText::stringTweenNodef@31");
		var $spos = $s.length;
		var f = tween(d,i,d.textContent);
		var $tmp = function(t) {
			$s.push("thx.js.AccessTweenText::stringTweenNodef@31@34");
			var $spos = $s.length;
			d.textContent = f(t);
			$s.pop();
		};
		$s.pop();
		return $tmp;
		$s.pop();
	};
	this.tweens.set("text",handler);
	var $tmp = this.transition;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessTweenText.prototype.charsNodef = function(f) {
	$s.push("thx.js.AccessTweenText::charsNodef");
	var $spos = $s.length;
	var $tmp = this.stringTweenNodef(this.transitionCharsTweenf(f));
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessTweenText.prototype.chars = function(value) {
	$s.push("thx.js.AccessTweenText::chars");
	var $spos = $s.length;
	var $tmp = this.stringTweenNodef(this.transitionCharsTween(value));
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessTweenText.prototype.__class__ = thx.js.AccessTweenText;
thx.js.AccessDataTweenText = function(transition,tweens) {
	if( transition === $_ ) return;
	$s.push("thx.js.AccessDataTweenText::new");
	var $spos = $s.length;
	thx.js.AccessTweenText.call(this,transition,tweens);
	$s.pop();
}
thx.js.AccessDataTweenText.__name__ = ["thx","js","AccessDataTweenText"];
thx.js.AccessDataTweenText.__super__ = thx.js.AccessTweenText;
for(var k in thx.js.AccessTweenText.prototype ) thx.js.AccessDataTweenText.prototype[k] = thx.js.AccessTweenText.prototype[k];
thx.js.AccessDataTweenText.prototype.stringf = function(f) {
	$s.push("thx.js.AccessDataTweenText::stringf");
	var $spos = $s.length;
	var $tmp = this.stringTweenNodef(this.transitionStringTweenf(function(n,i) {
		$s.push("thx.js.AccessDataTweenText::stringf@64");
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
thx.js.AccessDataTweenText.prototype.charsf = function(f) {
	$s.push("thx.js.AccessDataTweenText::charsf");
	var $spos = $s.length;
	var $tmp = this.stringTweenNodef(this.transitionCharsTweenf(function(n,i) {
		$s.push("thx.js.AccessDataTweenText::charsf@69");
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
thx.js.AccessDataTweenText.prototype.stringTweenf = function(tween) {
	$s.push("thx.js.AccessDataTweenText::stringTweenf");
	var $spos = $s.length;
	var handler = function(n,i) {
		$s.push("thx.js.AccessDataTweenText::stringTweenf@74");
		var $spos = $s.length;
		var f = tween(Reflect.field(n,"__data__"),i,d.textContent);
		var $tmp = function(t) {
			$s.push("thx.js.AccessDataTweenText::stringTweenf@74@77");
			var $spos = $s.length;
			d.textContent = f(t);
			$s.pop();
		};
		$s.pop();
		return $tmp;
		$s.pop();
	};
	this.tweens.set("text",handler);
	var $tmp = this.transition;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.js.AccessDataTweenText.prototype.__class__ = thx.js.AccessDataTweenText;
rg.controller.info.InfoPivotTable = function(p) {
	if( p === $_ ) return;
	$s.push("rg.controller.info.InfoPivotTable::new");
	var $spos = $s.length;
	this.label = new rg.controller.info.InfoLabelPivotTable();
	this.heatmapColorStart = rg.controller.info.InfoPivotTable.defaultStartColor;
	this.heatmapColorEnd = rg.controller.info.InfoPivotTable.defaultEndColor;
	this.displayHeatmap = true;
	this.displayColumnTotal = true;
	this.displayRowTotal = true;
	this.columnAxes = 1;
	$s.pop();
}
rg.controller.info.InfoPivotTable.__name__ = ["rg","controller","info","InfoPivotTable"];
rg.controller.info.InfoPivotTable.filters = function() {
	$s.push("rg.controller.info.InfoPivotTable::filters");
	var $spos = $s.length;
	var $tmp = [{ field : "columnaxes", validator : function(v) {
		$s.push("rg.controller.info.InfoPivotTable::filters@48");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Int);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoPivotTable::filters@49");
		var $spos = $s.length;
		var $tmp = [{ field : "columnAxes", value : v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "displayheatmap", validator : function(v) {
		$s.push("rg.controller.info.InfoPivotTable::filters@55");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Bool);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoPivotTable::filters@56");
		var $spos = $s.length;
		var $tmp = [{ field : "displayHeatmap", value : v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "displaycolumntotal", validator : function(v) {
		$s.push("rg.controller.info.InfoPivotTable::filters@62");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Bool);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoPivotTable::filters@63");
		var $spos = $s.length;
		var $tmp = [{ field : "displayColumnTotal", value : v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "displayrowtotal", validator : function(v) {
		$s.push("rg.controller.info.InfoPivotTable::filters@69");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Bool);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoPivotTable::filters@70");
		var $spos = $s.length;
		var $tmp = [{ field : "displayRowTotal", value : v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "startcolor", validator : function(v) {
		$s.push("rg.controller.info.InfoPivotTable::filters@76");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoPivotTable::filters@77");
		var $spos = $s.length;
		var $tmp = [{ field : "heatmapColorStart", value : thx.color.Hsl.toHsl(rg.view.svg.util.RGColors.parse(v,rg.controller.info.InfoPivotTable.defaultStartColor.hex("#")))}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "endcolor", validator : function(v) {
		$s.push("rg.controller.info.InfoPivotTable::filters@83");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoPivotTable::filters@84");
		var $spos = $s.length;
		var $tmp = [{ field : "heatmapColorEnd", value : thx.color.Hsl.toHsl(rg.view.svg.util.RGColors.parse(v,rg.controller.info.InfoPivotTable.defaultEndColor.hex("#")))}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "label", validator : function(v) {
		$s.push("rg.controller.info.InfoPivotTable::filters@90");
		var $spos = $s.length;
		var $tmp = Reflect.isObject(v) && null == Type.getClass(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoPivotTable::filters@91");
		var $spos = $s.length;
		var $tmp = [{ field : "label", value : rg.controller.info.Info.feed(new rg.controller.info.InfoLabelPivotTable(),v)}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "click", validator : function(v) {
		$s.push("rg.controller.info.InfoPivotTable::filters@97");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null}];
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.controller.info.InfoPivotTable.prototype.label = null;
rg.controller.info.InfoPivotTable.prototype.heatmapColorStart = null;
rg.controller.info.InfoPivotTable.prototype.heatmapColorEnd = null;
rg.controller.info.InfoPivotTable.prototype.displayHeatmap = null;
rg.controller.info.InfoPivotTable.prototype.displayColumnTotal = null;
rg.controller.info.InfoPivotTable.prototype.displayRowTotal = null;
rg.controller.info.InfoPivotTable.prototype.columnAxes = null;
rg.controller.info.InfoPivotTable.prototype.click = null;
rg.controller.info.InfoPivotTable.prototype.__class__ = rg.controller.info.InfoPivotTable;
rg.view.svg.chart.LineEffects = function() { }
rg.view.svg.chart.LineEffects.__name__ = ["rg","view","svg","chart","LineEffects"];
rg.view.svg.chart.LineEffects.parse = function(s) {
	$s.push("rg.view.svg.chart.LineEffects::parse");
	var $spos = $s.length;
	var parts = s.toLowerCase().split("-");
	switch(parts.shift()) {
	case "dropshadow":
		var offsetx = 0.5, offsety = 0.5, levels = 2, parameters = parts.pop();
		if(null != parameters) {
			var parameters1 = parameters.split(",");
			offsetx = Std.parseFloat(parameters1[0]);
			if(parameters1.length > 1) offsety = Std.parseFloat(parameters1[1]); else offsety = offsetx;
			if(parameters1.length > 2) levels = Std.parseInt(parameters1[2]);
		}
		var $tmp = rg.view.svg.chart.LineEffect.DropShadow(offsetx,offsety,levels);
		$s.pop();
		return $tmp;
	case "gradient":
		var lightness = 0.75, levels = 2, parameters = parts.pop();
		if(null != parameters) {
			lightness = Std.parseFloat(parameters.split(",").shift());
			var nlevels = parameters.split(",").pop();
			if(null != nlevels) levels = Std.parseInt(nlevels);
		}
		var $tmp = rg.view.svg.chart.LineEffect.Gradient(lightness,levels);
		$s.pop();
		return $tmp;
	default:
		var $tmp = rg.view.svg.chart.LineEffect.NoEffect;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
rg.view.svg.chart.LineEffects.prototype.__class__ = rg.view.svg.chart.LineEffects;
thx.math.Random = function(seed) {
	if( seed === $_ ) return;
	$s.push("thx.math.Random::new");
	var $spos = $s.length;
	if(seed == null) seed = 1;
	this.seed = seed;
	$s.pop();
}
thx.math.Random.__name__ = ["thx","math","Random"];
thx.math.Random.prototype.seed = null;
thx.math.Random.prototype["int"] = function() {
	$s.push("thx.math.Random::int");
	var $spos = $s.length;
	var $tmp = (this.seed = this.seed * 16807 % 2147483647) & 1073741823;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.Random.prototype["float"] = function() {
	$s.push("thx.math.Random::float");
	var $spos = $s.length;
	var $tmp = ((this.seed = this.seed * 16807 % 2147483647) & 1073741823) / 1073741823.0;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.math.Random.prototype.__class__ = thx.math.Random;
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
thx.collection.HashList = function(p) {
	if( p === $_ ) return;
	$s.push("thx.collection.HashList::new");
	var $spos = $s.length;
	this.length = 0;
	this.__keys = [];
	this.__hash = new Hash();
	$s.pop();
}
thx.collection.HashList.__name__ = ["thx","collection","HashList"];
thx.collection.HashList.prototype.length = null;
thx.collection.HashList.prototype.set = function(key,value) {
	$s.push("thx.collection.HashList::set");
	var $spos = $s.length;
	if(!this.__hash.exists(key)) {
		this.__keys.push(key);
		this.length++;
	}
	this.__hash.set(key,value);
	$s.pop();
}
thx.collection.HashList.prototype.setAt = function(index,key,value) {
	$s.push("thx.collection.HashList::setAt");
	var $spos = $s.length;
	this.remove(key);
	this.__keys.insert(index,key);
	this.__hash.set(key,value);
	this.length++;
	$s.pop();
}
thx.collection.HashList.prototype.get = function(key) {
	$s.push("thx.collection.HashList::get");
	var $spos = $s.length;
	var $tmp = this.__hash.get(key);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.collection.HashList.prototype.getAt = function(index) {
	$s.push("thx.collection.HashList::getAt");
	var $spos = $s.length;
	var $tmp = this.__hash.get(this.__keys[index]);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.collection.HashList.prototype.indexOf = function(key) {
	$s.push("thx.collection.HashList::indexOf");
	var $spos = $s.length;
	if(!this.__hash.exists(key)) {
		$s.pop();
		return -1;
	}
	var _g1 = 0, _g = this.__keys.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(this.__keys[i] == key) {
			$s.pop();
			return i;
		}
	}
	var $tmp = (function($this) {
		var $r;
		throw "this should never happen";
		return $r;
	}(this));
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.collection.HashList.prototype.exists = function(key) {
	$s.push("thx.collection.HashList::exists");
	var $spos = $s.length;
	var $tmp = this.__hash.exists(key);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.collection.HashList.prototype.remove = function(key) {
	$s.push("thx.collection.HashList::remove");
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
thx.collection.HashList.prototype.removeAt = function(index) {
	$s.push("thx.collection.HashList::removeAt");
	var $spos = $s.length;
	var key = this.__keys[index];
	if(key == null) {
		$s.pop();
		return null;
	}
	var item = this.__hash.get(key);
	this.__hash.remove(key);
	this.__keys.remove(key);
	this.length--;
	$s.pop();
	return item;
	$s.pop();
}
thx.collection.HashList.prototype.keyAt = function(index) {
	$s.push("thx.collection.HashList::keyAt");
	var $spos = $s.length;
	var $tmp = this.__keys[index];
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.collection.HashList.prototype.keys = function() {
	$s.push("thx.collection.HashList::keys");
	var $spos = $s.length;
	var $tmp = this.__keys.iterator();
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.collection.HashList.prototype.iterator = function() {
	$s.push("thx.collection.HashList::iterator");
	var $spos = $s.length;
	var $tmp = this.array().iterator();
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.collection.HashList.prototype.clear = function() {
	$s.push("thx.collection.HashList::clear");
	var $spos = $s.length;
	this.__hash = new Hash();
	this.__keys = [];
	this.length = 0;
	$s.pop();
}
thx.collection.HashList.prototype.array = function() {
	$s.push("thx.collection.HashList::array");
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
thx.collection.HashList.prototype.toString = function() {
	$s.push("thx.collection.HashList::toString");
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
thx.collection.HashList.prototype.__keys = null;
thx.collection.HashList.prototype.__hash = null;
thx.collection.HashList.prototype.__class__ = thx.collection.HashList;
rg.controller.visualization.VisualizationPivotTable = function(container) {
	if( container === $_ ) return;
	$s.push("rg.controller.visualization.VisualizationPivotTable::new");
	var $spos = $s.length;
	rg.controller.visualization.VisualizationHtml.call(this,container);
	$s.pop();
}
rg.controller.visualization.VisualizationPivotTable.__name__ = ["rg","controller","visualization","VisualizationPivotTable"];
rg.controller.visualization.VisualizationPivotTable.__super__ = rg.controller.visualization.VisualizationHtml;
for(var k in rg.controller.visualization.VisualizationHtml.prototype ) rg.controller.visualization.VisualizationPivotTable.prototype[k] = rg.controller.visualization.VisualizationHtml.prototype[k];
rg.controller.visualization.VisualizationPivotTable.prototype.info = null;
rg.controller.visualization.VisualizationPivotTable.prototype.chart = null;
rg.controller.visualization.VisualizationPivotTable.prototype.init = function() {
	$s.push("rg.controller.visualization.VisualizationPivotTable::init");
	var $spos = $s.length;
	this.chart = new rg.view.html.widget.PivotTable(this.container);
	this.chart.displayColumnTotal = this.info.displayColumnTotal;
	this.chart.displayHeatMap = this.info.displayHeatmap;
	this.chart.displayRowTotal = this.info.displayRowTotal;
	this.chart.colorStart = this.info.heatmapColorStart;
	this.chart.colorEnd = this.info.heatmapColorEnd;
	if(null != this.info.click) this.chart.click = this.info.click;
	if(null != this.info.label.datapoint) this.chart.labelDataPoint = this.info.label.datapoint;
	if(null != this.info.label.datapointover) this.chart.labelDataPointOver = this.info.label.datapointover;
	if(null != this.info.label.axis) this.chart.labelAxis = this.info.label.axis;
	if(null != this.info.label.axisvalue) this.chart.labelAxisValue = this.info.label.axisvalue;
	if(null != this.info.label.total) this.chart.labelTotal = this.info.label.total;
	if(null != this.info.label.totalover) this.chart.labelTotalOver = this.info.label.totalover;
	this.chart.incolumns = Ints.min(this.info.columnAxes,this.independentVariables.length);
	this.chart.init();
	$s.pop();
}
rg.controller.visualization.VisualizationPivotTable.prototype.feedData = function(data) {
	$s.push("rg.controller.visualization.VisualizationPivotTable::feedData");
	var $spos = $s.length;
	this.chart.setVariables(this.independentVariables,this.dependentVariables);
	this.chart.data(data);
	$s.pop();
}
rg.controller.visualization.VisualizationPivotTable.prototype.destroy = function() {
	$s.push("rg.controller.visualization.VisualizationPivotTable::destroy");
	var $spos = $s.length;
	this.chart.destroy();
	$s.pop();
}
rg.controller.visualization.VisualizationPivotTable.prototype.__class__ = rg.controller.visualization.VisualizationPivotTable;
thx.svg.LineInternals = function() { }
thx.svg.LineInternals.__name__ = ["thx","svg","LineInternals"];
thx.svg.LineInternals.linePoints = function(data,x,y) {
	$s.push("thx.svg.LineInternals::linePoints");
	var $spos = $s.length;
	var points = [], value;
	var _g1 = 0, _g = data.length;
	while(_g1 < _g) {
		var i = _g1++;
		points.push([x(value = data[i],i),y(value,i)]);
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
rg.data.source.rgquery.transform.TransformIntersect = function(properties,fields,event,orderDescending) {
	if( properties === $_ ) return;
	$s.push("rg.data.source.rgquery.transform.TransformIntersect::new");
	var $spos = $s.length;
	this.properties = properties;
	this.fields = fields;
	this.event = event;
	this.orderDescending = orderDescending;
	$s.pop();
}
rg.data.source.rgquery.transform.TransformIntersect.__name__ = ["rg","data","source","rgquery","transform","TransformIntersect"];
rg.data.source.rgquery.transform.TransformIntersect.prototype.properties = null;
rg.data.source.rgquery.transform.TransformIntersect.prototype.fields = null;
rg.data.source.rgquery.transform.TransformIntersect.prototype.event = null;
rg.data.source.rgquery.transform.TransformIntersect.prototype.orderDescending = null;
rg.data.source.rgquery.transform.TransformIntersect.prototype.transform = function(data) {
	$s.push("rg.data.source.rgquery.transform.TransformIntersect::transform");
	var $spos = $s.length;
	var items = Objects.flatten(data,this.fields.length);
	if(null == items || 0 == items.length) {
		var $tmp = [];
		$s.pop();
		return $tmp;
	}
	var result = [];
	var _g = 0;
	while(_g < items.length) {
		var item = items[_g];
		++_g;
		var count = item.value, p = Dynamics.clone(this.properties);
		Objects.addFields(p,this.fields,item.fields.map(rg.data.source.rgquery.transform.Transforms.typedValue));
		p[".#time:eternity"] = 0;
		p.count = count;
		p.event = this.event;
		result.push(p);
	}
	if(this.orderDescending) result.sort(function(a,b) {
		$s.push("rg.data.source.rgquery.transform.TransformIntersect::transform@47");
		var $spos = $s.length;
		var $tmp = b.count - a.count;
		$s.pop();
		return $tmp;
		$s.pop();
	}); else result.sort(function(a,b) {
		$s.push("rg.data.source.rgquery.transform.TransformIntersect::transform@51");
		var $spos = $s.length;
		var $tmp = a.count - b.count;
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return result;
	$s.pop();
}
rg.data.source.rgquery.transform.TransformIntersect.prototype.__class__ = rg.data.source.rgquery.transform.TransformIntersect;
rg.data.source.rgquery.transform.TransformIntersect.__interfaces__ = [rg.data.source.ITransform];
rg.controller.factory.FactoryLayout = function(p) {
	$s.push("rg.controller.factory.FactoryLayout::new");
	var $spos = $s.length;
	$s.pop();
}
rg.controller.factory.FactoryLayout.__name__ = ["rg","controller","factory","FactoryLayout"];
rg.controller.factory.FactoryLayout.prototype.create = function(info,container) {
	$s.push("rg.controller.factory.FactoryLayout::create");
	var $spos = $s.length;
	var v, width = null == info.width?(v = container.node().clientWidth) > 10?v:400:info.width, height = null == info.height?(v = container.node().clientHeight) > 10?v:300:info.height;
	var layoutName = info.layout;
	if(null == layoutName) layoutName = rg.controller.Visualizations.layoutDefault.get(info.type);
	if(null == layoutName) throw new thx.error.Error("unable to find a suitable layout for '{0}'",null,info.type,{ fileName : "FactoryLayout.hx", lineNumber : 34, className : "rg.controller.factory.FactoryLayout", methodName : "create"});
	var layout = rg.controller.Visualizations.instantiateLayout(layoutName,width,height,container);
	layout.feedOptions(info);
	$s.pop();
	return layout;
	$s.pop();
}
rg.controller.factory.FactoryLayout.prototype.__class__ = rg.controller.factory.FactoryLayout;
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
rg.view.svg.chart.LineEffect = { __ename__ : ["rg","view","svg","chart","LineEffect"], __constructs__ : ["NoEffect","Gradient","DropShadow"] }
rg.view.svg.chart.LineEffect.NoEffect = ["NoEffect",0];
rg.view.svg.chart.LineEffect.NoEffect.toString = $estr;
rg.view.svg.chart.LineEffect.NoEffect.__enum__ = rg.view.svg.chart.LineEffect;
rg.view.svg.chart.LineEffect.Gradient = function(lightness,levels) { var $x = ["Gradient",1,lightness,levels]; $x.__enum__ = rg.view.svg.chart.LineEffect; $x.toString = $estr; return $x; }
rg.view.svg.chart.LineEffect.DropShadow = function(ox,oy,evels) { var $x = ["DropShadow",2,ox,oy,evels]; $x.__enum__ = rg.view.svg.chart.LineEffect; $x.toString = $estr; return $x; }
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
rg.util.RGStacks = function() { }
rg.util.RGStacks.__name__ = ["rg","util","RGStacks"];
rg.util.RGStacks.exceptionStack = function(skip) {
	$s.push("rg.util.RGStacks::exceptionStack");
	var $spos = $s.length;
	if(skip == null) skip = 1;
	var stack = haxe.Stack.exceptionStack();
	var _g = 0;
	while(_g < skip) {
		var i = _g++;
		stack.pop();
	}
	var skip1 = null;
	var $tmp = Arrays.filter(stack.map(function(item,_) {
		$s.push("rg.util.RGStacks::exceptionStack@19");
		var $spos = $s.length;
		var $e = (item);
		switch( $e[1] ) {
		case 0:
			$s.pop();
			return "#cfunction";
		case 1:
			var m = $e[2];
			var $tmp = "#module " + m;
			$s.pop();
			return $tmp;
		case 2:
			var line = $e[4], file = $e[3], s = $e[2];
			var $tmp = "#filepos " + file + " at " + line;
			$s.pop();
			return $tmp;
		case 3:
			var method = $e[3], classname = $e[2];
			if(null != skip1) {
				if(skip1 == classname + "." + method) {
					var $tmp = skip1 = null;
					$s.pop();
					return $tmp;
				} else skip1 = null;
			}
			if(classname == "js.Boot" && StringTools.startsWith(method,"__closure")) {
				$s.pop();
				return "in [closure]";
			}
			var line = "";
			if(rg.util.RGStacks.PATTERN_IS_CONSTRUCTOR.match(method)) {
				method = "new";
				line = rg.util.RGStacks.PATTERN_IS_CONSTRUCTOR.matched(1);
			} else if(rg.util.RGStacks.PATTERN_CONTAINS_AT.match(method)) {
				method = rg.util.RGStacks.PATTERN_CONTAINS_AT.matched(1);
				line = rg.util.RGStacks.PATTERN_CONTAINS_AT.matched(2);
				skip1 = classname + "." + method;
			}
			var $tmp = "in " + classname + "." + method + "(" + line + ")";
			$s.pop();
			return $tmp;
		case 4:
			var v = $e[2];
			var $tmp = "#lambda #" + v;
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}),function(d) {
		$s.push("rg.util.RGStacks::exceptionStack@53");
		var $spos = $s.length;
		var $tmp = null != d;
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.util.RGStacks.prototype.__class__ = rg.util.RGStacks;
rg.controller.MVPOptions = function() { }
rg.controller.MVPOptions.__name__ = ["rg","controller","MVPOptions"];
rg.controller.MVPOptions.timestamp = function(d) {
	$s.push("rg.controller.MVPOptions::timestamp");
	var $spos = $s.length;
	if(Std["is"](d,String)) {
		var $tmp = thx.date.DateParser.parse(d).getTime();
		$s.pop();
		return $tmp;
	} else if(Std["is"](d,Date)) {
		var $tmp = d.getTime();
		$s.pop();
		return $tmp;
	} else {
		$s.pop();
		return d;
	}
	$s.pop();
}
rg.controller.MVPOptions.buildQuery = function(type,property,periodicity) {
	$s.push("rg.controller.MVPOptions::buildQuery");
	var $spos = $s.length;
	switch(type) {
	default:
		var $tmp = (null != property?property + " * ":"") + ".#time:" + periodicity;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
rg.controller.MVPOptions.complete = function(executor,o,handler) {
	$s.push("rg.controller.MVPOptions::complete");
	var $spos = $s.length;
	var start = null, end = null, path = "/", events = [], property = null, chain = new rg.util.ChainedExecutor(handler), query, periodicity, groupby = null, groupfilter = null;
	if(null != o.groupby) {
		groupby = o.groupby;
		Reflect.deleteField(o,"groupby");
		if(null != o.groupfilter) {
			groupfilter = o.groupfilter;
			Reflect.deleteField(o,"groupfilter");
		}
	}
	if(null != o.property) {
		property = (o.property.substr(0,1) == "."?"":".") + o.property;
		Reflect.deleteField(o,"property");
	}
	if(null != o.start) {
		start = rg.controller.MVPOptions.timestamp(o.start);
		Reflect.deleteField(o,"start");
	}
	if(null != o.end) {
		end = rg.controller.MVPOptions.timestamp(o.end);
		Reflect.deleteField(o,"end");
	}
	if(null != o.periodicity) {
		periodicity = o.periodicity;
		Reflect.deleteField(o,"periodicity");
	} else if(null != start) periodicity = rg.util.Periodicity.defaultPeriodicity(end - start); else periodicity = (function($this) {
		var $r;
		switch(o.options.visualization) {
		case "piechart":
			$r = "eternity";
			break;
		default:
			$r = "day";
		}
		return $r;
	}(this));
	if(null == start && "eternity" != periodicity) {
		var range = rg.util.Periodicity.defaultRange(periodicity);
		start = range[0];
		end = range[1];
	}
	if(null != o.path) {
		path = o.path;
		Reflect.deleteField(o,"path");
	}
	if(null != o.events) {
		events = o.events;
		Reflect.deleteField(o,"events");
	}
	if(null != o.event) {
		events = [o.event];
		Reflect.deleteField(o,"event");
	}
	if(null != o.query) {
		query = o.query;
		Reflect.deleteField(o,"query");
		if(rg.util.Properties.isTime(query)) periodicity = rg.util.Properties.periodicity(query);
	} else query = rg.controller.MVPOptions.buildQuery(o.options.visualization,property,periodicity);
	chain.addAction(function(o1,handler1) {
		$s.push("rg.controller.MVPOptions::complete@133");
		var $spos = $s.length;
		if(null == o1.data && events.length == 0) executor.children(path,{ type : "property"},function(arr) {
			$s.push("rg.controller.MVPOptions::complete@133@137");
			var $spos = $s.length;
			events = arr;
			handler1(o1);
			$s.pop();
		}); else handler1(o1);
		$s.pop();
	});
	chain.addAction(function(o1,handler1) {
		$s.push("rg.controller.MVPOptions::complete@146");
		var $spos = $s.length;
		if(null == o1.data) {
			var src = [];
			o1.data = [{ src : src}];
			var _g = 0;
			while(_g < events.length) {
				var event = events[_g];
				++_g;
				var o2 = { path : path, event : event, query : query};
				if(null != start) {
					o2["start"] = start;
					o2["end"] = end;
				}
				if(null != groupby) {
					o2["groupby"] = groupby;
					if(null != groupfilter) o2["groupfilter"] = groupfilter;
				}
				src.push(o2);
			}
			if(null == o1.options.segmenton) o1.options.segmenton = null == property?"event":property;
		}
		handler1(o1);
		$s.pop();
	});
	chain.addAction(function(o1,handler1) {
		$s.push("rg.controller.MVPOptions::complete@177");
		var $spos = $s.length;
		if(null == o1.axes) switch(o1.options.visualization) {
		default:
			var axis = null != groupby?{ type : ".#time:" + periodicity, groupby : groupby}:{ type : ".#time:" + periodicity};
			switch(o1.options.visualization) {
			case "barchart":
				axis.scalemode = "fit";
				break;
			}
			o1.axes = [axis];
		}
		handler1(o1);
		$s.pop();
	});
	chain.addAction(function(o1,handler1) {
		$s.push("rg.controller.MVPOptions::complete@201");
		var $spos = $s.length;
		var axes = o1.axes, hasdependent = false;
		var _g = 0;
		while(_g < axes.length) {
			var axis = axes[_g];
			++_g;
			if(query.indexOf(axis.type) < 0) hasdependent = true;
		}
		if(!hasdependent) o1.axes.push({ type : "count"});
		handler1(o1);
		$s.pop();
	});
	chain.addAction(function(o1,handler1) {
		$s.push("rg.controller.MVPOptions::complete@216");
		var $spos = $s.length;
		if(null == o1.options.label) switch(o1.options.visualization) {
		case "linechart":case "barchart":
			var axes = o1.axes, type = axes[axes.length - 1].type;
			o1.options.label = { datapointover : function(dp,stats) {
				$s.push("rg.controller.MVPOptions::complete@216@226");
				var $spos = $s.length;
				var $tmp = rg.util.Properties.humanize(null != property?Reflect.field(dp,property):null != o1.options.segmenton?Reflect.field(dp,o1.options.segmenton):type) + ": " + rg.util.RGStrings.humanize(Reflect.field(dp,type));
				$s.pop();
				return $tmp;
				$s.pop();
			}};
			break;
		case "piechart":
			var axes = o1.axes, type = axes[axes.length - 1].type;
			o1.options.label = { datapoint : function(dp,stats) {
				$s.push("rg.controller.MVPOptions::complete@216@243");
				var $spos = $s.length;
				var v = Reflect.field(dp,type);
				var $tmp = stats.tot != 0.0?Floats.format(Math.round(1000 * v / stats.tot) / 10,"P:1"):rg.util.RGStrings.humanize(v);
				$s.pop();
				return $tmp;
				$s.pop();
			}, datapointover : function(dp,stats) {
				$s.push("rg.controller.MVPOptions::complete@216@252");
				var $spos = $s.length;
				var $tmp = rg.util.Properties.humanize(null != property?Reflect.field(dp,property):type) + ": " + rg.util.RGStrings.humanize(Reflect.field(dp,type));
				$s.pop();
				return $tmp;
				$s.pop();
			}};
			break;
		case "leaderboard":
			var axes = o1.axes, type = axes[axes.length - 1].type;
			o1.options.label = { datapointover : function(dp,stats) {
				$s.push("rg.controller.MVPOptions::complete@216@267");
				var $spos = $s.length;
				var v = Reflect.field(dp,type);
				var $tmp = stats.tot != 0.0?Floats.format(Math.round(1000 * v / stats.tot) / 10,"P:1"):rg.util.RGStrings.humanize(v);
				$s.pop();
				return $tmp;
				$s.pop();
			}, datapoint : function(dp,stats) {
				$s.push("rg.controller.MVPOptions::complete@216@276");
				var $spos = $s.length;
				var $tmp = rg.util.Properties.humanize(null != property?Reflect.field(dp,property):type) + ": " + rg.util.RGStrings.humanize(Reflect.field(dp,type));
				$s.pop();
				return $tmp;
				$s.pop();
			}};
			break;
		}
		handler1(o1);
		$s.pop();
	});
	chain.execute(o);
	$s.pop();
}
rg.controller.MVPOptions.prototype.__class__ = rg.controller.MVPOptions;
rg.controller.info.InfoDomType = function(p) {
	$s.push("rg.controller.info.InfoDomType::new");
	var $spos = $s.length;
	$s.pop();
}
rg.controller.info.InfoDomType.__name__ = ["rg","controller","info","InfoDomType"];
rg.controller.info.InfoDomType.filters = function() {
	$s.push("rg.controller.info.InfoDomType::filters");
	var $spos = $s.length;
	var $tmp = [{ field : "visualization", validator : function(v) {
		$s.push("rg.controller.info.InfoDomType::filters@18");
		var $spos = $s.length;
		var $tmp = Arrays.exists(rg.controller.Visualizations.visualizations,v.toLowerCase());
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoDomType::filters@19");
		var $spos = $s.length;
		var $tmp = [{ value : Arrays.exists(rg.controller.Visualizations.html,v.toLowerCase())?rg.controller.info.DomKind.Html:rg.controller.info.DomKind.Svg, field : "kind"}];
		$s.pop();
		return $tmp;
		$s.pop();
	}}];
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.controller.info.InfoDomType.prototype.kind = null;
rg.controller.info.InfoDomType.prototype.__class__ = rg.controller.info.InfoDomType;
rg.controller.info.DomKind = { __ename__ : ["rg","controller","info","DomKind"], __constructs__ : ["Html","Svg"] }
rg.controller.info.DomKind.Html = ["Html",0];
rg.controller.info.DomKind.Html.toString = $estr;
rg.controller.info.DomKind.Html.__enum__ = rg.controller.info.DomKind;
rg.controller.info.DomKind.Svg = ["Svg",1];
rg.controller.info.DomKind.Svg.toString = $estr;
rg.controller.info.DomKind.Svg.__enum__ = rg.controller.info.DomKind;
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
	var $tmp = Objects.copyTo(src,dst);
	$s.pop();
	return $tmp;
	$s.pop();
}
Objects.mergef = function(ob,new_ob,f) {
	$s.push("Objects::mergef");
	var $spos = $s.length;
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
	$s.pop();
}
Objects.merge = function(ob,new_ob) {
	$s.push("Objects::merge");
	var $spos = $s.length;
	Objects.mergef(ob,new_ob,function(key,old_v,new_v) {
		$s.push("Objects::merge@153");
		var $spos = $s.length;
		$s.pop();
		return new_v;
		$s.pop();
	});
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
			$s.push("Objects::formatf@235");
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
			$s.push("Objects::formatf@237");
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
			throw new thx.error.Error("Unsupported number format: {0}",null,format,{ fileName : "Objects.hx", lineNumber : 245, className : "Objects", methodName : "formatf"});
			return $r;
		}(this));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Objects.prototype.__class__ = Objects;
rg.view.svg.chart.PieChart = function(panel) {
	if( panel === $_ ) return;
	$s.push("rg.view.svg.chart.PieChart::new");
	var $spos = $s.length;
	rg.view.svg.chart.Chart.call(this,panel);
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
	this.labelDisplay = true;
	this.labelOrientation = rg.view.svg.widget.LabelOrientation.Orthogonal;
	this.labelDontFlip = true;
	$s.pop();
}
rg.view.svg.chart.PieChart.__name__ = ["rg","view","svg","chart","PieChart"];
rg.view.svg.chart.PieChart.__super__ = rg.view.svg.chart.Chart;
for(var k in rg.view.svg.chart.Chart.prototype ) rg.view.svg.chart.PieChart.prototype[k] = rg.view.svg.chart.Chart.prototype[k];
rg.view.svg.chart.PieChart.prototype.innerRadius = null;
rg.view.svg.chart.PieChart.prototype.outerRadius = null;
rg.view.svg.chart.PieChart.prototype.overRadius = null;
rg.view.svg.chart.PieChart.prototype.labelRadius = null;
rg.view.svg.chart.PieChart.prototype.tooltipRadius = null;
rg.view.svg.chart.PieChart.prototype.arcNormal = null;
rg.view.svg.chart.PieChart.prototype.arcStart = null;
rg.view.svg.chart.PieChart.prototype.arcBig = null;
rg.view.svg.chart.PieChart.prototype.pie = null;
rg.view.svg.chart.PieChart.prototype.radius = null;
rg.view.svg.chart.PieChart.prototype.stats = null;
rg.view.svg.chart.PieChart.prototype.variableDependent = null;
rg.view.svg.chart.PieChart.prototype.gradientLightness = null;
rg.view.svg.chart.PieChart.prototype.displayGradient = null;
rg.view.svg.chart.PieChart.prototype.animationDelay = null;
rg.view.svg.chart.PieChart.prototype.labelDisplay = null;
rg.view.svg.chart.PieChart.prototype.labelOrientation = null;
rg.view.svg.chart.PieChart.prototype.labelDontFlip = null;
rg.view.svg.chart.PieChart.prototype.labels = null;
rg.view.svg.chart.PieChart.prototype.mouseClick = null;
rg.view.svg.chart.PieChart.prototype.setVariables = function(variableIndependents,variableDependents) {
	$s.push("rg.view.svg.chart.PieChart::setVariables");
	var $spos = $s.length;
	this.variableDependent = variableDependents[0];
	$s.pop();
}
rg.view.svg.chart.PieChart.prototype.resize = function() {
	$s.push("rg.view.svg.chart.PieChart::resize");
	var $spos = $s.length;
	rg.view.svg.chart.Chart.prototype.resize.call(this);
	this.radius = Math.min(this.width,this.height) / 2;
	this.arcStart = thx.svg.Arc.fromAngleObject().innerRadius(this.radius * this.innerRadius).outerRadius(this.radius * this.innerRadius);
	this.arcNormal = thx.svg.Arc.fromAngleObject().innerRadius(this.radius * this.innerRadius).outerRadius(this.radius * this.outerRadius);
	this.arcBig = thx.svg.Arc.fromAngleObject().innerRadius(this.radius * this.innerRadius).outerRadius(this.radius * this.overRadius);
	if(this.width > this.height) this.g.attr("transform").string("translate(" + (this.width / 2 - this.height / 2) + ",0)"); else this.g.attr("transform").string("translate(0," + (this.height / 2 - this.width / 2) + ")");
	$s.pop();
}
rg.view.svg.chart.PieChart.prototype.data = function(dp) {
	$s.push("rg.view.svg.chart.PieChart::data");
	var $spos = $s.length;
	var pv = this.variableDependent.type;
	dp = Arrays.filter(dp,function(dp1) {
		$s.push("rg.view.svg.chart.PieChart::data@112");
		var $spos = $s.length;
		var $tmp = Reflect.field(dp1,pv) > 0;
		$s.pop();
		return $tmp;
		$s.pop();
	});
	this.stats = this.variableDependent.stats;
	var choice = this.g.selectAll("g.group").data(this.pief(dp),$closure(this,"id"));
	var enter = choice.enter();
	var arc = enter.append("svg:g").attr("class").stringf(function(d,i) {
		$s.push("rg.view.svg.chart.PieChart::data@123");
		var $spos = $s.length;
		var $tmp = "group fill-" + i;
		$s.pop();
		return $tmp;
		$s.pop();
	}).attr("transform").string("translate(" + this.radius + "," + this.radius + ")");
	var path = arc.append("svg:path").attr("class").string("slice");
	if(this.displayGradient) arc.eachNode($closure(this,"applyGradient"));
	if(this.animated) {
		path.attr("d").stringf(this.arcShape(this.arcStart));
		arc.eachNode($closure(this,"fadein")).onNode("mouseover.animation",$closure(this,"highlight")).onNode("mouseout.animation",$closure(this,"backtonormal"));
	} else path.attr("d").stringf(this.arcShape(this.arcNormal));
	arc.onNode("mouseover.label",$closure(this,"onMouseOver"));
	if(this.labelDisplay) arc.eachNode($closure(this,"appendLabel"));
	if(null != this.mouseClick) arc.onNode("click.user",$closure(this,"onMouseClick"));
	choice.update().select("path").transition().ease(this.animationEase).duration(null,this.animationDuration).attr("d").stringf(this.arcShape(this.arcNormal));
	if(this.labelDisplay) choice.update().eachNode($closure(this,"updateLabel"));
	choice.exit().eachNode($closure(this,"removeLabel")).remove();
	$s.pop();
}
rg.view.svg.chart.PieChart.prototype.onMouseOver = function(dom,i) {
	$s.push("rg.view.svg.chart.PieChart::onMouseOver");
	var $spos = $s.length;
	if(null == this.labelDataPointOver) {
		$s.pop();
		return;
	}
	var d = Reflect.field(dom,"__data__"), text = this.labelDataPointOver(d.dp,this.stats);
	if(null == text) this.tooltip.hide(); else {
		var a = d.startAngle + (d.endAngle - d.startAngle) / 2 - Math.PI / 2, r = this.radius * this.tooltipRadius;
		this.tooltip.show();
		this.tooltip.setText(text.split("\n"));
		this.moveTooltip(this.width / 2 + Math.cos(a) * r,this.height / 2 + Math.sin(a) * r);
	}
	$s.pop();
}
rg.view.svg.chart.PieChart.prototype.onMouseClick = function(dom,i) {
	$s.push("rg.view.svg.chart.PieChart::onMouseClick");
	var $spos = $s.length;
	var d = Reflect.field(dom,"__data__");
	this.mouseClick(d.dp);
	$s.pop();
}
rg.view.svg.chart.PieChart.prototype.removeLabel = function(dom,i) {
	$s.push("rg.view.svg.chart.PieChart::removeLabel");
	var $spos = $s.length;
	var n = thx.js.Dom.selectNode(dom), d = Reflect.field(dom,"__data__");
	var label = this.labels.get(d.id);
	label.destroy();
	this.labels.remove(d.id);
	$s.pop();
}
rg.view.svg.chart.PieChart.prototype.updateLabel = function(dom,i) {
	$s.push("rg.view.svg.chart.PieChart::updateLabel");
	var $spos = $s.length;
	var n = thx.js.Dom.selectNode(dom), d = Reflect.field(dom,"__data__"), label = this.labels.get(d.id), r = this.radius * this.labelRadius, a = d.startAngle + (d.endAngle - d.startAngle) / 2 - Math.PI / 2;
	if(null != this.labelDataPoint) {
		label.setText(this.labelDataPoint(d.dp,this.stats));
		label.place(-2.5 + Math.cos(a) * r,-2.5 + Math.sin(a) * r,57.29577951308232088 * a);
	}
	$s.pop();
}
rg.view.svg.chart.PieChart.prototype.appendLabel = function(dom,i) {
	$s.push("rg.view.svg.chart.PieChart::appendLabel");
	var $spos = $s.length;
	var n = thx.js.Dom.selectNode(dom), label = new rg.view.svg.widget.Label(n,this.labelDontFlip,true,true), d = Reflect.field(dom,"__data__"), r = this.radius * this.labelRadius, a = d.startAngle + (d.endAngle - d.startAngle) / 2 - Math.PI / 2;
	label.setOrientation(this.labelOrientation);
	switch( (this.labelOrientation)[1] ) {
	case 0:
		label.setAnchor(rg.view.svg.widget.GridAnchor.Center);
		break;
	case 1:
		label.setAnchor(rg.view.svg.widget.GridAnchor.Left);
		break;
	case 2:
		label.setAnchor(rg.view.svg.widget.GridAnchor.Top);
		break;
	}
	if(null != this.labelDataPoint) {
		label.setText(this.labelDataPoint(d.dp,this.stats));
		label.place(-2.5 + Math.cos(a) * r,-2.5 + Math.sin(a) * r,57.29577951308232088 * a);
		this.labels.set(d.id,label);
	}
	$s.pop();
}
rg.view.svg.chart.PieChart.prototype.applyGradient = function(n,i) {
	$s.push("rg.view.svg.chart.PieChart::applyGradient");
	var $spos = $s.length;
	var gn = thx.js.Dom.selectNodeData(n), dp = Reflect.field(n,"__data__"), id = dp.id;
	if(this.g.select("defs").select("#rg_pie_gradient_" + id).empty()) {
		var slice = gn.select("path.slice"), shape = this.arcNormal.shape(Reflect.field(n,"__data__")), t = gn.append("svg:path").attr("d").string(shape), box = t.node().getBBox();
		t.remove();
		var color = rg.view.svg.util.RGColors.parse(slice.style("fill").get(),"#cccccc"), scolor = thx.color.Hsl.darker(thx.color.Hsl.toHsl(color),this.gradientLightness);
		var ratio = box.width / box.height, cx = -box.x * 100 / box.width / ratio, cy = -box.y * 100 / box.height / ratio;
		var r = 100 * (box.width > box.height?Math.min(1,this.radius * this.outerRadius / box.width):Math.max(1,this.radius * this.outerRadius / box.width));
		var stops = this.g.select("defs").append("svg:radialGradient").attr("id").string("rg_pie_gradient_" + id).attr("cx").string(cx * ratio + "%").attr("cy").string(cy + "%").attr("gradientTransform").string("scale(1 " + ratio + ")").attr("r").string(r + "%");
		stops.append("svg:stop").attr("offset").string(100 * this.innerRadius + "%").attr("stop-color").string(color.toRgbString()).attr("stop-opacity")["float"](1);
		stops.append("svg:stop").attr("offset").string("100%").attr("stop-color").string(scolor.toRgbString()).attr("stop-opacity")["float"](1);
	}
	gn.select("path.slice").attr("style").string("fill:url(#rg_pie_gradient_" + id + ")");
	$s.pop();
}
rg.view.svg.chart.PieChart.prototype.fadein = function(n,i) {
	$s.push("rg.view.svg.chart.PieChart::fadein");
	var $spos = $s.length;
	var gn = thx.js.Dom.selectNodeData(n), shape = this.arcNormal.shape(Reflect.field(n,"__data__"));
	gn.selectAll("path.slice").transition().ease(this.animationEase).duration(null,this.animationDuration).delay(null,this.animationDelay).attr("d").string(shape);
	$s.pop();
}
rg.view.svg.chart.PieChart.prototype.highlight = function(d,i) {
	$s.push("rg.view.svg.chart.PieChart::highlight");
	var $spos = $s.length;
	var slice = thx.js.Dom.selectNodeData(d).selectAll("path");
	slice.transition().ease(this.animationEase).duration(null,this.animationDuration).attr("d").stringf(this.arcShape(this.arcBig));
	$s.pop();
}
rg.view.svg.chart.PieChart.prototype.backtonormal = function(d,i) {
	$s.push("rg.view.svg.chart.PieChart::backtonormal");
	var $spos = $s.length;
	var slice = thx.js.Dom.selectNodeData(d).selectAll("path");
	slice.transition().ease(this.animationEase).duration(null,this.animationDuration).attr("d").stringf(this.arcShape(this.arcNormal));
	$s.pop();
}
rg.view.svg.chart.PieChart.prototype.id = function(o,i) {
	$s.push("rg.view.svg.chart.PieChart::id");
	var $spos = $s.length;
	var $tmp = o.id;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.chart.PieChart.prototype.makeid = function(dp) {
	$s.push("rg.view.svg.chart.PieChart::makeid");
	var $spos = $s.length;
	var o = Objects.clone(dp);
	Reflect.deleteField(o,this.variableDependent.type);
	var $tmp = haxe.Md5.encode(Dynamics.string(o));
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.chart.PieChart.prototype.arcShape = function(a) {
	$s.push("rg.view.svg.chart.PieChart::arcShape");
	var $spos = $s.length;
	var $tmp = function(d,i) {
		$s.push("rg.view.svg.chart.PieChart::arcShape@324");
		var $spos = $s.length;
		var $tmp = a.shape(d);
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.chart.PieChart.prototype.pief = function(dp) {
	$s.push("rg.view.svg.chart.PieChart::pief");
	var $spos = $s.length;
	var name = this.variableDependent.type, temp = dp.map(function(d,i) {
		$s.push("rg.view.svg.chart.PieChart::pief@333");
		var $spos = $s.length;
		var $tmp = Reflect.field(d,name);
		$s.pop();
		return $tmp;
		$s.pop();
	}), arr = this.pie.pie(temp);
	var _g1 = 0, _g = arr.length;
	while(_g1 < _g) {
		var i = _g1++;
		var id = this.makeid(dp[i]);
		arr[i]["id"] = id;
		arr[i]["dp"] = dp[i];
	}
	$s.pop();
	return arr;
	$s.pop();
}
rg.view.svg.chart.PieChart.prototype.destroy = function() {
	$s.push("rg.view.svg.chart.PieChart::destroy");
	var $spos = $s.length;
	var $it0 = this.labels.iterator();
	while( $it0.hasNext() ) {
		var label = $it0.next();
		label.destroy();
	}
	rg.view.svg.chart.Chart.prototype.destroy.call(this);
	$s.pop();
}
rg.view.svg.chart.PieChart.prototype.__class__ = rg.view.svg.chart.PieChart;
rg.view.svg.chart.StreamEffects = function() { }
rg.view.svg.chart.StreamEffects.__name__ = ["rg","view","svg","chart","StreamEffects"];
rg.view.svg.chart.StreamEffects.getLightness = function(p,alt) {
	$s.push("rg.view.svg.chart.StreamEffects::getLightness");
	var $spos = $s.length;
	if(null == p) {
		$s.pop();
		return alt;
	} else {
		var $tmp = Std.parseFloat(p);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
rg.view.svg.chart.StreamEffects.parse = function(s) {
	$s.push("rg.view.svg.chart.StreamEffects::parse");
	var $spos = $s.length;
	var parts = s.toLowerCase().split("-");
	switch(parts.shift()) {
	case "gradient":case "gradientv":case "gradientvert":case "gradientvertical":
		var $tmp = rg.view.svg.chart.StreamEffect.GradientVertical(rg.view.svg.chart.StreamEffects.getLightness(parts.pop(),0.75));
		$s.pop();
		return $tmp;
	case "gradienth":case "gradienthoriz":case "gradienthorizontal":
		var $tmp = rg.view.svg.chart.StreamEffect.GradientHorizontal(rg.view.svg.chart.StreamEffects.getLightness(parts.pop(),0.75));
		$s.pop();
		return $tmp;
	default:
		var $tmp = rg.view.svg.chart.StreamEffect.NoEffect;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
rg.view.svg.chart.StreamEffects.prototype.__class__ = rg.view.svg.chart.StreamEffects;
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
	if(!thx.color.Colors._reParse.match(s = s.toLowerCase())) {
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
		switch(type) {
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
rg.data.Tickmark = function(value,major,delta) {
	if( value === $_ ) return;
	$s.push("rg.data.Tickmark::new");
	var $spos = $s.length;
	this.value = value;
	this.major = major;
	this.delta = delta;
	$s.pop();
}
rg.data.Tickmark.__name__ = ["rg","data","Tickmark"];
rg.data.Tickmark.prototype.delta = null;
rg.data.Tickmark.prototype.major = null;
rg.data.Tickmark.prototype.value = null;
rg.data.Tickmark.prototype.label = null;
rg.data.Tickmark.prototype.getDelta = function() {
	$s.push("rg.data.Tickmark::getDelta");
	var $spos = $s.length;
	var $tmp = this.delta;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.Tickmark.prototype.getMajor = function() {
	$s.push("rg.data.Tickmark::getMajor");
	var $spos = $s.length;
	var $tmp = this.major;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.Tickmark.prototype.getValue = function() {
	$s.push("rg.data.Tickmark::getValue");
	var $spos = $s.length;
	var $tmp = this.value;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.Tickmark.prototype.getLabel = function() {
	$s.push("rg.data.Tickmark::getLabel");
	var $spos = $s.length;
	var $tmp = rg.util.RGStrings.humanize(this.getValue());
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.Tickmark.prototype.toString = function() {
	$s.push("rg.data.Tickmark::toString");
	var $spos = $s.length;
	var $tmp = rg.data.Tickmarks.string(this);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.Tickmark.prototype.__class__ = rg.data.Tickmark;
rg.data.Tickmark.__interfaces__ = [rg.data.ITickmark];
rg.view.svg.chart.StreamEffect = { __ename__ : ["rg","view","svg","chart","StreamEffect"], __constructs__ : ["NoEffect","GradientHorizontal","GradientVertical"] }
rg.view.svg.chart.StreamEffect.NoEffect = ["NoEffect",0];
rg.view.svg.chart.StreamEffect.NoEffect.toString = $estr;
rg.view.svg.chart.StreamEffect.NoEffect.__enum__ = rg.view.svg.chart.StreamEffect;
rg.view.svg.chart.StreamEffect.GradientHorizontal = function(lightness) { var $x = ["GradientHorizontal",1,lightness]; $x.__enum__ = rg.view.svg.chart.StreamEffect; $x.toString = $estr; return $x; }
rg.view.svg.chart.StreamEffect.GradientVertical = function(lightness) { var $x = ["GradientVertical",2,lightness]; $x.__enum__ = rg.view.svg.chart.StreamEffect; $x.toString = $estr; return $x; }
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
rg.view.svg.widget.GridAnchor = { __ename__ : ["rg","view","svg","widget","GridAnchor"], __constructs__ : ["TopLeft","Top","TopRight","Left","Center","Right","BottomLeft","Bottom","BottomRight"] }
rg.view.svg.widget.GridAnchor.TopLeft = ["TopLeft",0];
rg.view.svg.widget.GridAnchor.TopLeft.toString = $estr;
rg.view.svg.widget.GridAnchor.TopLeft.__enum__ = rg.view.svg.widget.GridAnchor;
rg.view.svg.widget.GridAnchor.Top = ["Top",1];
rg.view.svg.widget.GridAnchor.Top.toString = $estr;
rg.view.svg.widget.GridAnchor.Top.__enum__ = rg.view.svg.widget.GridAnchor;
rg.view.svg.widget.GridAnchor.TopRight = ["TopRight",2];
rg.view.svg.widget.GridAnchor.TopRight.toString = $estr;
rg.view.svg.widget.GridAnchor.TopRight.__enum__ = rg.view.svg.widget.GridAnchor;
rg.view.svg.widget.GridAnchor.Left = ["Left",3];
rg.view.svg.widget.GridAnchor.Left.toString = $estr;
rg.view.svg.widget.GridAnchor.Left.__enum__ = rg.view.svg.widget.GridAnchor;
rg.view.svg.widget.GridAnchor.Center = ["Center",4];
rg.view.svg.widget.GridAnchor.Center.toString = $estr;
rg.view.svg.widget.GridAnchor.Center.__enum__ = rg.view.svg.widget.GridAnchor;
rg.view.svg.widget.GridAnchor.Right = ["Right",5];
rg.view.svg.widget.GridAnchor.Right.toString = $estr;
rg.view.svg.widget.GridAnchor.Right.__enum__ = rg.view.svg.widget.GridAnchor;
rg.view.svg.widget.GridAnchor.BottomLeft = ["BottomLeft",6];
rg.view.svg.widget.GridAnchor.BottomLeft.toString = $estr;
rg.view.svg.widget.GridAnchor.BottomLeft.__enum__ = rg.view.svg.widget.GridAnchor;
rg.view.svg.widget.GridAnchor.Bottom = ["Bottom",7];
rg.view.svg.widget.GridAnchor.Bottom.toString = $estr;
rg.view.svg.widget.GridAnchor.Bottom.__enum__ = rg.view.svg.widget.GridAnchor;
rg.view.svg.widget.GridAnchor.BottomRight = ["BottomRight",8];
rg.view.svg.widget.GridAnchor.BottomRight.toString = $estr;
rg.view.svg.widget.GridAnchor.BottomRight.__enum__ = rg.view.svg.widget.GridAnchor;
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
thx.svg.Symbol.star = function(size) {
	$s.push("thx.svg.Symbol::star");
	var $spos = $s.length;
	var r = Math.sqrt(size / 0.31027) / 2;
	var $tmp = "M0," + -r + "L" + r * 0.236 + "," + r * -0.325 + " " + r * 0.951 + "," + r * -0.309 + " " + r * 0.382 + "," + r * 0.124 + " " + r * 0.588 + "," + r * 0.809 + " " + r * 0 + "," + r * 0.401 + " " + r * -0.588 + "," + r * 0.809 + " " + r * -0.382 + "," + r * 0.124 + " " + r * -0.951 + "," + r * -0.309 + " " + r * -0.236 + "," + r * -0.325 + " " + "Z";
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.svg.Symbol.prototype.__class__ = thx.svg.Symbol;
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
rg.controller.info.InfoLabelPivotTable = function(p) {
	if( p === $_ ) return;
	$s.push("rg.controller.info.InfoLabelPivotTable::new");
	var $spos = $s.length;
	rg.controller.info.InfoLabelAxis.call(this);
	$s.pop();
}
rg.controller.info.InfoLabelPivotTable.__name__ = ["rg","controller","info","InfoLabelPivotTable"];
rg.controller.info.InfoLabelPivotTable.__super__ = rg.controller.info.InfoLabelAxis;
for(var k in rg.controller.info.InfoLabelAxis.prototype ) rg.controller.info.InfoLabelPivotTable.prototype[k] = rg.controller.info.InfoLabelAxis.prototype[k];
rg.controller.info.InfoLabelPivotTable.filters = function() {
	$s.push("rg.controller.info.InfoLabelPivotTable::filters");
	var $spos = $s.length;
	var $tmp = [{ field : "total", validator : function(v) {
		$s.push("rg.controller.info.InfoLabelPivotTable::filters@20");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "totalover", validator : function(v) {
		$s.push("rg.controller.info.InfoLabelPivotTable::filters@24");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null}].concat(rg.controller.info.InfoLabelAxis.filters());
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.controller.info.InfoLabelPivotTable.prototype.total = null;
rg.controller.info.InfoLabelPivotTable.prototype.totalover = null;
rg.controller.info.InfoLabelPivotTable.prototype.__class__ = rg.controller.info.InfoLabelPivotTable;
$_ = {}
js.Boot.__res = {}
$s = [];
$e = [];
js.Boot.__init();
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
window.requestAnimationFrame = window.requestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.oRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function(callback) { setTimeout(callback, 1000 / 60); } ;
thx.cultures.EnUS.getCulture();
thx.languages.En.getLanguage();
rg.view.svg.util.SymbolCache.cache = new rg.view.svg.util.SymbolCache();
{
	var _PNAME = "((?:\\.?#?\\w+)+)", _LIMIT = "(?:\\s*[(]\\s*(\\d+)(?:\\s*,\\s*(ASC|DESC))?\\s*[)])?", _COND = "(?:\\s*([=])\\s*(.+))";
	rg.data.source.rgquery.QueryParser.TOKEN_INDIVIDUAL_PARSE = new EReg("^" + _PNAME + _LIMIT + _COND + "?" + "$","i");
	rg.data.source.rgquery.QueryParser.TOKEN_FIRST_PARSE = new EReg("^" + _PNAME + _LIMIT + _COND + "$","i");
	rg.data.source.rgquery.QueryParser.TOKEN_CONDITION_PARSE = new EReg("^" + _PNAME + _COND + "$","i");
}
{
	var d = Date;
	d.now = function() {
		$s.push("rg.controller.info.InfoLabelPivotTable::filters");
		var $spos = $s.length;
		var $tmp = new Date();
		$s.pop();
		return $tmp;
		$s.pop();
	};
	d.fromTime = function(t) {
		$s.push("rg.controller.info.InfoLabelPivotTable::filters");
		var $spos = $s.length;
		var d1 = new Date();
		d1["setTime"](t);
		$s.pop();
		return d1;
		$s.pop();
	};
	d.fromString = function(s) {
		$s.push("rg.controller.info.InfoLabelPivotTable::filters");
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
		$s.push("rg.controller.info.InfoLabelPivotTable::filters");
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
	Math.__name__ = ["Math"];
	Math.NaN = Number["NaN"];
	Math.NEGATIVE_INFINITY = Number["NEGATIVE_INFINITY"];
	Math.POSITIVE_INFINITY = Number["POSITIVE_INFINITY"];
	Math.isFinite = function(i) {
		$s.push("rg.controller.info.InfoLabelPivotTable::filters");
		var $spos = $s.length;
		var $tmp = isFinite(i);
		$s.pop();
		return $tmp;
		$s.pop();
	};
	Math.isNaN = function(i) {
		$s.push("rg.controller.info.InfoLabelPivotTable::filters");
		var $spos = $s.length;
		var $tmp = isNaN(i);
		$s.pop();
		return $tmp;
		$s.pop();
	};
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
	var s = (window.Sizzle || (jQuery && jQuery.find) || ($ && $.find));
	thx.js.Sizzle = s;
	thx.js.Sizzle.select = s;
}
{
	rg.controller.Visualizations.layoutDefault = new Hash();
	rg.controller.Visualizations.layoutType = new Hash();
	rg.controller.Visualizations.layoutArgs = new Hash();
	rg.controller.Visualizations.layoutDefault.set("barchart","cartesian");
	rg.controller.Visualizations.layoutDefault.set("linechart","cartesian");
	rg.controller.Visualizations.layoutDefault.set("streamgraph","x");
	rg.controller.Visualizations.layoutDefault.set("piechart","simple");
	rg.controller.Visualizations.layoutDefault.set("funnelchart","simple");
	rg.controller.Visualizations.layoutDefault.set("scattergraph","cartesian");
	rg.controller.Visualizations.layoutDefault.set("heatgrid","cartesian");
	rg.controller.Visualizations.layoutType.set("simple",rg.view.layout.LayoutSimple);
	rg.controller.Visualizations.layoutType.set("cartesian",rg.view.layout.LayoutCartesian);
	rg.controller.Visualizations.layoutType.set("x",rg.view.layout.LayoutX);
}
Dates._reparse = new EReg("^\\d{4}-\\d\\d-\\d\\d(( |T)\\d\\d:\\d\\d(:\\d\\d(\\.\\d{1,3})?)?)?Z?$","");
thx.math.scale.Linears._default_color = new thx.color.Hsl(0,0,0);
js.Lib.onerror = null;
thx.js.Dom.doc = (function() {
	$s.push("rg.controller.info.InfoLabelPivotTable::filters");
	var $spos = $s.length;
	var g = new thx.js.Group([js.Lib.document]), gs = thx.js.Selection.create([g]);
	g.parentNode = gs.parentNode = js.Lib.document.documentElement;
	$s.pop();
	return gs;
	$s.pop();
})();
thx.js.Dom.selectionEngine = new thx.js.SizzleEngine();
rg.view.html.widget.PivotTable.defaultColorStart = new thx.color.Hsl(210,1,1);
rg.view.html.widget.PivotTable.defaultColorEnd = new thx.color.Hsl(210,1,0.5);
rg.data.AxisTime.snapping = { minute : [{ to : 10, s : 1},{ to : 20, s : 2},{ to : 30, s : 5},{ to : 60, s : 10},{ to : 120, s : 30},{ to : 240, s : 60},{ to : 960, s : 240}], minutetop : 480, hour : [{ to : 12, s : 1},{ to : 24, s : 6},{ to : 60, s : 12},{ to : 240, s : 24},{ to : 480, s : 48},{ to : 960, s : 120}], hourtop : 240, month : [{ to : 13, s : 1},{ to : 25, s : 2},{ to : 49, s : 4},{ to : 73, s : 6}], monthtop : 12, year : [{ to : 10, s : 1},{ to : 20, s : 2},{ to : 50, s : 5}], yeartop : 10};
thx.js.Timer.timeout = 0;
thx.js.Timer.queue = null;
thx.js.Timer.interval = 0;
thx.js.Timer._step = thx.js.Timer.step;
thx.text.ERegs._escapePattern = new EReg("[*+?|{[()^$.# \\\\]","");
rg.util.Periodicity.validPeriods = ["minute","hour","day","week","month","year","eternity"];
rg.util.Periodicity.validGroupValues = ["hour","day","week","month","year"];
thx.date.DateParser.daynumeric = "0?[1-9]|[1-2][0-9]|3[0-1]";
thx.date.DateParser.months = thx.cultures.EnUS.getCulture().date.months.slice(0,-1).map(function(d,i) {
	$s.push("rg.controller.info.InfoLabelPivotTable::filters");
	var $spos = $s.length;
	var $tmp = d.toLowerCase();
	$s.pop();
	return $tmp;
	$s.pop();
});
thx.date.DateParser.shortmonths = thx.cultures.EnUS.getCulture().date.abbrMonths.slice(0,-1).map(function(d,i) {
	$s.push("rg.controller.info.InfoLabelPivotTable::filters");
	var $spos = $s.length;
	var $tmp = d.toLowerCase();
	$s.pop();
	return $tmp;
	$s.pop();
});
thx.date.DateParser.days = thx.cultures.EnUS.getCulture().date.days.map(function(d,i) {
	$s.push("rg.controller.info.InfoLabelPivotTable::filters");
	var $spos = $s.length;
	var $tmp = d.toLowerCase();
	$s.pop();
	return $tmp;
	$s.pop();
});
thx.date.DateParser.shortdays = thx.cultures.EnUS.getCulture().date.abbrDays.map(function(d,i) {
	$s.push("rg.controller.info.InfoLabelPivotTable::filters");
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
rg.view.svg.util.SymbolCache.DEFAULT_SYMBOL = "circle";
thx.js.Svg._usepage = new EReg("WebKit","").match(js.Lib.window.navigator.userAgent);
thx.math.Const.TWO_PI = 6.283185307179586477;
thx.math.Const.PI = 3.141592653589793238;
thx.math.Const.HALF_PI = 1.570796326794896619;
thx.math.Const.TO_DEGREE = 57.29577951308232088;
thx.math.Const.TO_RADIAN = 0.01745329251994329577;
thx.math.Const.LN10 = 2.302585092994046;
Floats._reparse = new EReg("^(\\+|-)?\\d+(\\.\\d+)?(e-?\\d+)?$","");
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
rg.view.layout.LayoutX.ALT_RIGHT = 20;
rg.view.layout.LayoutX.ALT_LEFT = 20;
rg.view.layout.LayoutX.ALT_TOP = 8;
rg.view.layout.LayoutX.ALT_BOTTOM = 8;
rg.controller.App.lastid = 0;
thx.error.Error.errorPositionPattern = "{0}.{1}({2}): ";
rg.util.RGStrings.range = new EReg("(\\d+(?:\\.\\d+)?|\\.\\d+)?-(\\d+(?:\\.\\d+|\\.\\d+)?)?","");
thx.geom.Contour.contourDx = [1,0,1,1,-1,0,-1,1,0,0,0,0,-1,0,-1,null];
thx.geom.Contour.contourDy = [0,-1,0,0,0,-1,0,0,1,-1,1,1,0,-1,0,null];
thx.js.AccessAttribute.refloat = new EReg("(\\d+(?:\\.\\d+)?)","");
rg.util.Properties.EVENT_PATTERN = new EReg("^(\\.?[^.]+)","");
rg.util.Properties.TIME_TOKEN = "#time:";
DateTools.DAYS_OF_MONTH = [31,28,31,30,31,30,31,31,30,31,30,31];
rg.data.source.rgquery.QueryParser.TOKEN_SPLIT = new EReg("and","gi");
rg.view.layout.LayoutCartesian.ALT_RIGHT = 20;
rg.view.layout.LayoutCartesian.ALT_LEFT = 20;
rg.view.layout.LayoutCartesian.ALT_TOP = 8;
rg.view.layout.LayoutCartesian.ALT_BOTTOM = 8;
rg.view.layout.LayoutCartesian.REYAXIS = new EReg("^y(\\d+)$","");
rg.view.layout.LayoutCartesian.REYINDEX = new EReg("^y(\\d+)","");
rg.view.layout.LayoutCartesian.REYTITLE = new EReg("^y(\\d+)title$","");
rg.view.svg.chart.StreamGraph.vid = 0;
rg.controller.info.InfoHeatGrid.defaultStartColor = thx.color.NamedColors.white;
rg.controller.info.InfoHeatGrid.defaultEndColor = thx.color.NamedColors.blue;
thx.js.AccessStyle.refloat = new EReg("(\\d+(?:\\.\\d+)?)","");
thx.js.BaseTransition._id = 0;
thx.js.BaseTransition._inheritid = 0;
Ints._reparse = new EReg("^([+-])?\\d+$","");
thx.xml.Namespace.prefix = (function() {
	$s.push("rg.controller.info.InfoLabelPivotTable::filters");
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
rg.view.svg.chart.Coords.retransform = new EReg("translate\\(\\s*(\\d+(?:\\.\\d+)?)\\s*(?:,\\s*(\\d+(?:\\.\\d+)?)\\s*)?\\)","");
rg.controller.Visualizations.html = ["pivottable","leaderboard"];
rg.controller.Visualizations.svg = ["linechart","piechart","barchart","funnelchart","streamgraph","scattergraph","heatgrid"];
rg.controller.Visualizations.visualizations = rg.controller.Visualizations.svg.concat(rg.controller.Visualizations.html);
rg.controller.Visualizations.layouts = ["simple","cartesian","x"];
rg.controller.info.InfoPivotTable.defaultStartColor = new thx.color.Hsl(210,1,1);
rg.controller.info.InfoPivotTable.defaultEndColor = new thx.color.Hsl(210,1,0.5);
thx.svg.LineInternals.arcOffset = -Math.PI / 2;
thx.svg.LineInternals.arcMax = 2 * Math.PI - 1e-6;
thx.svg.LineInternals._lineBasisBezier1 = [0,2 / 3,1 / 3,0];
thx.svg.LineInternals._lineBasisBezier2 = [0,1 / 3,2 / 3,0];
thx.svg.LineInternals._lineBasisBezier3 = [0,1 / 6,2 / 3,1 / 6];
rg.controller.factory.FactoryLayout.LIMIT_WIDTH = 10;
rg.controller.factory.FactoryLayout.LIMIT_HEIGHT = 10;
rg.controller.factory.FactoryLayout.DEFAULT_WIDTH = 400;
rg.controller.factory.FactoryLayout.DEFAULT_HEIGHT = 300;
rg.util.RGStacks.PATTERN_IS_CONSTRUCTOR = new EReg("^new@(\\d+)","");
rg.util.RGStacks.PATTERN_CONTAINS_AT = new EReg("^([^@]+)@(\\d+)","");
Objects._reCheckKeyIsColor = new EReg("color\\b|\\bbackground\\b|\\bstroke\\b|\\bfill\\b","");
thx.color.Colors._reParse = new EReg("^\\s*(?:(hsl|rgb|rgba|cmyk)\\(([^)]+)\\))|(?:(?:0x|#)([a-f0-9]{3,6}))\\s*$","i");
thx.svg.Symbol.sqrt3 = Math.sqrt(3);
thx.svg.Symbol.tan30 = Math.tan(30 * Math.PI / 180);
rg.JSBridge.main()