$estr = function() { return js.Boot.__string_rec(this,''); }
if(typeof rg=='undefined') rg = {}
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
rg.data.source.rgquery.MockRGExecutor = function(p) {
	if( p === $_ ) return;
	$s.push("rg.data.source.rgquery.MockRGExecutor::new");
	var $spos = $s.length;
	this.callStack = [];
	$s.pop();
}
rg.data.source.rgquery.MockRGExecutor.__name__ = ["rg","data","source","rgquery","MockRGExecutor"];
rg.data.source.rgquery.MockRGExecutor.prototype.callStack = null;
rg.data.source.rgquery.MockRGExecutor.prototype.children = function(path,options,success,error) {
	$s.push("rg.data.source.rgquery.MockRGExecutor::children");
	var $spos = $s.length;
	this.callStack.push({ method : "children", args : [path,options]});
	$s.pop();
}
rg.data.source.rgquery.MockRGExecutor.prototype.propertyCount = function(path,options,success,error) {
	$s.push("rg.data.source.rgquery.MockRGExecutor::propertyCount");
	var $spos = $s.length;
	this.callStack.push({ method : "propertyCount", args : [path,options]});
	$s.pop();
}
rg.data.source.rgquery.MockRGExecutor.prototype.propertySeries = function(path,options,success,error) {
	$s.push("rg.data.source.rgquery.MockRGExecutor::propertySeries");
	var $spos = $s.length;
	this.callStack.push({ method : "propertySeries", args : [path,options]});
	$s.pop();
}
rg.data.source.rgquery.MockRGExecutor.prototype.propertyValues = function(path,options,success,error) {
	$s.push("rg.data.source.rgquery.MockRGExecutor::propertyValues");
	var $spos = $s.length;
	this.callStack.push({ method : "propertyValues", args : [path,options]});
	$s.pop();
}
rg.data.source.rgquery.MockRGExecutor.prototype.propertyValueCount = function(path,options,success,error) {
	$s.push("rg.data.source.rgquery.MockRGExecutor::propertyValueCount");
	var $spos = $s.length;
	this.callStack.push({ method : "propertyValueCount", args : [path,options]});
	$s.pop();
}
rg.data.source.rgquery.MockRGExecutor.prototype.propertyValueSeries = function(path,options,success,error) {
	$s.push("rg.data.source.rgquery.MockRGExecutor::propertyValueSeries");
	var $spos = $s.length;
	this.callStack.push({ method : "propertyValueSeries", args : [path,options]});
	$s.pop();
}
rg.data.source.rgquery.MockRGExecutor.prototype.searchCount = function(path,options,success,error) {
	$s.push("rg.data.source.rgquery.MockRGExecutor::searchCount");
	var $spos = $s.length;
	this.callStack.push({ method : "searchCount", args : [path,options]});
	$s.pop();
}
rg.data.source.rgquery.MockRGExecutor.prototype.searchSeries = function(path,options,success,error) {
	$s.push("rg.data.source.rgquery.MockRGExecutor::searchSeries");
	var $spos = $s.length;
	this.callStack.push({ method : "searchSeries", args : [path,options]});
	$s.pop();
}
rg.data.source.rgquery.MockRGExecutor.prototype.intersect = function(path,options,success,error) {
	$s.push("rg.data.source.rgquery.MockRGExecutor::intersect");
	var $spos = $s.length;
	this.callStack.push({ method : "intersect", args : [path,options]});
	$s.pop();
}
rg.data.source.rgquery.MockRGExecutor.prototype.__class__ = rg.data.source.rgquery.MockRGExecutor;
rg.data.source.rgquery.MockRGExecutor.__interfaces__ = [rg.data.source.rgquery.IExecutorReportGrid];
if(typeof thx=='undefined') thx = {}
if(!thx.collections) thx.collections = {}
thx.collections.HashList = function(p) {
	if( p === $_ ) return;
	$s.push("thx.collections.HashList::new");
	var $spos = $s.length;
	this.length = 0;
	this.__keys = [];
	this.__hash = new Hash();
	$s.pop();
}
thx.collections.HashList.__name__ = ["thx","collections","HashList"];
thx.collections.HashList.prototype.length = null;
thx.collections.HashList.prototype.set = function(key,value) {
	$s.push("thx.collections.HashList::set");
	var $spos = $s.length;
	if(!this.__hash.exists(key)) {
		this.__keys.push(key);
		this.length++;
	}
	this.__hash.set(key,value);
	$s.pop();
}
thx.collections.HashList.prototype.setAt = function(index,key,value) {
	$s.push("thx.collections.HashList::setAt");
	var $spos = $s.length;
	this.remove(key);
	this.__keys.insert(index,key);
	this.__hash.set(key,value);
	this.length++;
	$s.pop();
}
thx.collections.HashList.prototype.get = function(key) {
	$s.push("thx.collections.HashList::get");
	var $spos = $s.length;
	var $tmp = this.__hash.get(key);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.collections.HashList.prototype.getAt = function(index) {
	$s.push("thx.collections.HashList::getAt");
	var $spos = $s.length;
	var $tmp = this.__hash.get(this.__keys[index]);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.collections.HashList.prototype.indexOf = function(key) {
	$s.push("thx.collections.HashList::indexOf");
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
thx.collections.HashList.prototype.exists = function(key) {
	$s.push("thx.collections.HashList::exists");
	var $spos = $s.length;
	var $tmp = this.__hash.exists(key);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.collections.HashList.prototype.remove = function(key) {
	$s.push("thx.collections.HashList::remove");
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
thx.collections.HashList.prototype.removeAt = function(index) {
	$s.push("thx.collections.HashList::removeAt");
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
thx.collections.HashList.prototype.keyAt = function(index) {
	$s.push("thx.collections.HashList::keyAt");
	var $spos = $s.length;
	var $tmp = this.__keys[index];
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.collections.HashList.prototype.keys = function() {
	$s.push("thx.collections.HashList::keys");
	var $spos = $s.length;
	var $tmp = this.__keys.iterator();
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.collections.HashList.prototype.iterator = function() {
	$s.push("thx.collections.HashList::iterator");
	var $spos = $s.length;
	var $tmp = this.array().iterator();
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.collections.HashList.prototype.clear = function() {
	$s.push("thx.collections.HashList::clear");
	var $spos = $s.length;
	this.__hash = new Hash();
	this.__keys = [];
	this.length = 0;
	$s.pop();
}
thx.collections.HashList.prototype.array = function() {
	$s.push("thx.collections.HashList::array");
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
thx.collections.HashList.prototype.toString = function() {
	$s.push("thx.collections.HashList::toString");
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
thx.collections.HashList.prototype.__keys = null;
thx.collections.HashList.prototype.__hash = null;
thx.collections.HashList.prototype.__class__ = thx.collections.HashList;
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
if(typeof utest=='undefined') utest = {}
if(!utest.ui) utest.ui = {}
utest.ui.Report = function() { }
utest.ui.Report.__name__ = ["utest","ui","Report"];
utest.ui.Report.create = function(runner,displaySuccessResults,headerDisplayMode) {
	$s.push("utest.ui.Report::create");
	var $spos = $s.length;
	var report;
	report = new utest.ui.text.HtmlReport(runner,null,true);
	if(null == displaySuccessResults) report.displaySuccessResults = utest.ui.common.SuccessResultsDisplayMode.ShowSuccessResultsWithNoErrors; else report.displaySuccessResults = displaySuccessResults;
	if(null == headerDisplayMode) report.displayHeader = utest.ui.common.HeaderDisplayMode.ShowHeaderWithResults; else report.displayHeader = headerDisplayMode;
	$s.pop();
	return report;
	$s.pop();
}
utest.ui.Report.prototype.__class__ = utest.ui.Report;
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
	throw new thx.error.AbstractMethod({ fileName : "Visualization.hx", lineNumber : 28, className : "rg.controller.visualization.Visualization", methodName : "init"});
	$s.pop();
}
rg.controller.visualization.Visualization.prototype.feedData = function(data) {
	$s.push("rg.controller.visualization.Visualization::feedData");
	var $spos = $s.length;
	haxe.Log.trace("DATA FEED " + Dynamics.string(data),{ fileName : "Visualization.hx", lineNumber : 33, className : "rg.controller.visualization.Visualization", methodName : "feedData"});
	$s.pop();
}
rg.controller.visualization.Visualization.prototype.getVariables = function() {
	$s.push("rg.controller.visualization.Visualization::getVariables");
	var $spos = $s.length;
	var $tmp = this.independentVariables.map(function(d,i) {
		$s.push("rg.controller.visualization.Visualization::getVariables@39");
		var $spos = $s.length;
		$s.pop();
		return d;
		$s.pop();
	}).concat(this.dependentVariables.map(function(d,i) {
		$s.push("rg.controller.visualization.Visualization::getVariables@40");
		var $spos = $s.length;
		$s.pop();
		return d;
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
rg.data.AxisNumeric = function(p) {
	$s.push("rg.data.AxisNumeric::new");
	var $spos = $s.length;
	$s.pop();
}
rg.data.AxisNumeric.__name__ = ["rg","data","AxisNumeric"];
rg.data.AxisNumeric._ticks = function(start,end,m) {
	$s.push("rg.data.AxisNumeric::_ticks");
	var $spos = $s.length;
	var span = end - start, step = Math.pow(m,Math.floor(Math.log(span / m) / Math.log(m))), err = m / (span / step);
	if(err <= .05) step *= 10; else if(err <= .2) step *= 5; else if(err <= .4) step *= 4; else if(err <= .6) step *= 2;
	var $tmp = Floats.range(start,end,step);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.AxisNumeric.prototype.scale = function(start,end,v) {
	$s.push("rg.data.AxisNumeric::scale");
	var $spos = $s.length;
	var $tmp = (Floats.uninterpolatef(start,end))(v);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.AxisNumeric.prototype.ticks = function(start,end,maxTicks) {
	$s.push("rg.data.AxisNumeric::ticks");
	var $spos = $s.length;
	var minors = rg.data.AxisNumeric._ticks(start,end,10), majors = rg.data.AxisNumeric._ticks(start,end,5);
	var $tmp = rg.data.Tickmarks.bound(minors.map(function(d,i) {
		$s.push("rg.data.AxisNumeric::ticks@23");
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
rg.controller.visualization.VisualizationCartesian.prototype.ylabels = null;
rg.controller.visualization.VisualizationCartesian.prototype.title = null;
rg.controller.visualization.VisualizationCartesian.prototype.init = function() {
	$s.push("rg.controller.visualization.VisualizationCartesian::init");
	var $spos = $s.length;
	this.initYAxes();
	this.initXAxis();
	this.initTitle();
	this.initPadding();
	this.initChart();
	this.initCartesianChart();
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
	var _g1 = 0, _g = this.dependentVariables.length;
	while(_g1 < _g) {
		var i = _g1++;
		var tickmarks = this.createTickmarks(this.dependentVariables[i].type,"y" + i);
		if(null == tickmarks) continue;
		this.ylabels.push({ id : i, tickmarks : tickmarks});
	}
	$s.pop();
}
rg.controller.visualization.VisualizationCartesian.prototype.initXAxis = function() {
	$s.push("rg.controller.visualization.VisualizationCartesian::initXAxis");
	var $spos = $s.length;
	this.xlabel = this.createTickmarks(this.independentVariables[0].type,"x");
	$s.pop();
}
rg.controller.visualization.VisualizationCartesian.prototype.initChart = function() {
	$s.push("rg.controller.visualization.VisualizationCartesian::initChart");
	var $spos = $s.length;
	throw new thx.error.AbstractMethod({ fileName : "VisualizationCartesian.hx", lineNumber : 60, className : "rg.controller.visualization.VisualizationCartesian", methodName : "initChart"});
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
	this.title = new rg.view.svg.widget.Title(panelContextTitle.panel,null,panelContextTitle.anchor);
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
		var item = this.ylabels[i], variable = this.dependentVariables[item.id];
		item.tickmarks.update(variable.axis,variable.min,variable.max);
		var size = Math.round(item.tickmarks.desiredSize);
		this.layout.suggestSize("y" + item.id,size);
	}
	if(null != this.xlabel) {
		var variable = this.independentVariables[0];
		this.xlabel.update(variable.axis,variable.min,variable.max);
		var size = Math.round(this.xlabel.desiredSize);
		this.layout.suggestSize("x",size);
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
		throw new thx.error.AbstractMethod({ fileName : "VisualizationCartesian.hx", lineNumber : 119, className : "rg.controller.visualization.VisualizationCartesian", methodName : "transformData"});
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
rg.controller.visualization.VisualizationCartesian.prototype.createTickmarks = function(type,pname) {
	$s.push("rg.controller.visualization.VisualizationCartesian::createTickmarks");
	var $spos = $s.length;
	var me = this;
	var displayMinor = this.info.displayMinor(type), displayMajor = this.info.displayMajor(type), displayLabel = this.info.displayLabel(type), title = null != this.info.label.axis?this.info.label.axis(type):null, tickmarks = null, context;
	if(displayMinor || displayMajor || displayLabel) {
		context = this.layout.getContext(pname);
		if(null == context) {
			$s.pop();
			return null;
		}
		tickmarks = new rg.view.svg.widget.TickmarksOrtho(context.panel,context.anchor);
		if(!displayLabel) tickmarks.displayLabel = false; else if(null != this.info.label.tickmark) tickmarks.tickLabel = function(d) {
			$s.push("rg.controller.visualization.VisualizationCartesian::createTickmarks@146");
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
	}
	if(null != title && null != (context = this.layout.getContext(pname + "title"))) {
		var t = new rg.view.svg.widget.Title(context.panel,title,context.anchor,null,"axis-title");
		var h = t.idealHeight();
		this.layout.suggestSize(pname + "title",h);
	}
	$s.pop();
	return tickmarks;
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
rg.controller.visualization.VisualizationBarChart.prototype.initChart = function() {
	$s.push("rg.controller.visualization.VisualizationBarChart::initChart");
	var $spos = $s.length;
	var chart = new rg.view.svg.widget.ChartBar(this.layout.getPanel(this.layout.mainPanelName));
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
	this.chart = chart;
	$s.pop();
}
rg.controller.visualization.VisualizationBarChart.prototype.transformData = function(dps) {
	$s.push("rg.controller.visualization.VisualizationBarChart::transformData");
	var $spos = $s.length;
	var results = [], values = this.independentVariables[0].range(), itype = this.independentVariables[0].type;
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
				$s.push("rg.controller.visualization.VisualizationBarChart::transformData@46");
				var $spos = $s.length;
				var $tmp = function(d) {
					$s.push("rg.controller.visualization.VisualizationBarChart::transformData@46@46");
					var $spos = $s.length;
					var $tmp = Reflect.field(d,itype) == value[0];
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
if(!rg.util) rg.util = {}
rg.util.TestProperties = function(p) {
	$s.push("rg.util.TestProperties::new");
	var $spos = $s.length;
	$s.pop();
}
rg.util.TestProperties.__name__ = ["rg","util","TestProperties"];
rg.util.TestProperties.prototype.testIsTime = function() {
	$s.push("rg.util.TestProperties::testIsTime");
	var $spos = $s.length;
	utest.Assert.isTrue(rg.util.Properties.isTime(".#time:hour"),null,{ fileName : "TestProperties.hx", lineNumber : 14, className : "rg.util.TestProperties", methodName : "testIsTime"});
	utest.Assert.isTrue(rg.util.Properties.isTime(".#time:day"),null,{ fileName : "TestProperties.hx", lineNumber : 15, className : "rg.util.TestProperties", methodName : "testIsTime"});
	utest.Assert.isFalse(rg.util.Properties.isTime("time:hour"),null,{ fileName : "TestProperties.hx", lineNumber : 16, className : "rg.util.TestProperties", methodName : "testIsTime"});
	utest.Assert.isFalse(rg.util.Properties.isTime("count"),null,{ fileName : "TestProperties.hx", lineNumber : 17, className : "rg.util.TestProperties", methodName : "testIsTime"});
	$s.pop();
}
rg.util.TestProperties.prototype.__class__ = rg.util.TestProperties;
if(!rg.data.source.rgquery.transform) rg.data.source.rgquery.transform = {}
rg.data.source.rgquery.transform.TestBase = function(p) {
	$s.push("rg.data.source.rgquery.transform.TestBase::new");
	var $spos = $s.length;
	$s.pop();
}
rg.data.source.rgquery.transform.TestBase.__name__ = ["rg","data","source","rgquery","transform","TestBase"];
rg.data.source.rgquery.transform.TestBase.prototype.assertDataPoint = function(expected,test,pos) {
	$s.push("rg.data.source.rgquery.transform.TestBase::assertDataPoint");
	var $spos = $s.length;
	utest.Assert.same(expected,test,null,null,pos);
	$s.pop();
}
rg.data.source.rgquery.transform.TestBase.prototype.assertDataPoints = function(expected,test,pos) {
	$s.push("rg.data.source.rgquery.transform.TestBase::assertDataPoints");
	var $spos = $s.length;
	var _g1 = 0, _g = expected.length;
	while(_g1 < _g) {
		var i = _g1++;
		this.assertDataPoint(expected[i],test[i],pos);
	}
	$s.pop();
}
rg.data.source.rgquery.transform.TestBase.prototype.__class__ = rg.data.source.rgquery.transform.TestBase;
rg.data.source.rgquery.transform.TestCountTimeIntersectTransform = function(p) {
	if( p === $_ ) return;
	$s.push("rg.data.source.rgquery.transform.TestCountTimeIntersectTransform::new");
	var $spos = $s.length;
	rg.data.source.rgquery.transform.TestBase.call(this);
	$s.pop();
}
rg.data.source.rgquery.transform.TestCountTimeIntersectTransform.__name__ = ["rg","data","source","rgquery","transform","TestCountTimeIntersectTransform"];
rg.data.source.rgquery.transform.TestCountTimeIntersectTransform.__super__ = rg.data.source.rgquery.transform.TestBase;
for(var k in rg.data.source.rgquery.transform.TestBase.prototype ) rg.data.source.rgquery.transform.TestCountTimeIntersectTransform.prototype[k] = rg.data.source.rgquery.transform.TestBase.prototype[k];
rg.data.source.rgquery.transform.TestCountTimeIntersectTransform.prototype.testTransform = function() {
	$s.push("rg.data.source.rgquery.transform.TestCountTimeIntersectTransform::testTransform");
	var $spos = $s.length;
	var transform = new rg.data.source.rgquery.transform.TransformCountTimeIntersect({ },[".platform"],"impression","day","count");
	var data = Objects.addFields({ },["\"iphone\"","\"android\""],[{ type : "timeseries", periodicity : "day", data : [[1310342400000,7],[1310428800000,5]]},{ type : "timeseries", periodicity : "day", data : [[1310342400000,1972],[1310428800000,2]]}]);
	this.assertDataPoints([Objects.addFields({ event : "impression", count : 7},[".#time:day",".platform"],[1310342400000,"iphone"]),Objects.addFields({ event : "impression", count : 5},[".#time:day",".platform"],[1310428800000,"iphone"]),Objects.addFields({ event : "impression", count : 1972},[".#time:day",".platform"],[1310342400000,"android"]),Objects.addFields({ event : "impression", count : 2},[".#time:day",".platform"],[1310428800000,"android"])],transform.transform(data),{ fileName : "TestCountTimeIntersectTransform.hx", lineNumber : 27, className : "rg.data.source.rgquery.transform.TestCountTimeIntersectTransform", methodName : "testTransform"});
	$s.pop();
}
rg.data.source.rgquery.transform.TestCountTimeIntersectTransform.prototype.testTransformDeep = function() {
	$s.push("rg.data.source.rgquery.transform.TestCountTimeIntersectTransform::testTransformDeep");
	var $spos = $s.length;
	var transform = new rg.data.source.rgquery.transform.TransformCountTimeIntersect({ },[".floatValue",".boolValue",".platform"],"impression","day","count");
	var data = Objects.addField({ },"1.2",Objects.addField({ },"true",Objects.addField({ },"\"iphone\"",{ type : "timeseries", periodicity : "day", data : [[1310342400000,7],[1310428800000,5]]})));
	this.assertDataPoints([Objects.addFields({ event : "impression", count : 7},[".#time:day",".platform",".boolValue",".floatValue"],[1310342400000,"iphone",true,1.2]),Objects.addFields({ event : "impression", count : 5},[".#time:day",".platform",".boolValue",".floatValue"],[1310428800000,"iphone",true,1.2])],transform.transform(data),{ fileName : "TestCountTimeIntersectTransform.hx", lineNumber : 52, className : "rg.data.source.rgquery.transform.TestCountTimeIntersectTransform", methodName : "testTransformDeep"});
	$s.pop();
}
rg.data.source.rgquery.transform.TestCountTimeIntersectTransform.prototype.__class__ = rg.data.source.rgquery.transform.TestCountTimeIntersectTransform;
rg.data.source.rgquery.transform.TestCountTransform = function(p) {
	if( p === $_ ) return;
	$s.push("rg.data.source.rgquery.transform.TestCountTransform::new");
	var $spos = $s.length;
	rg.data.source.rgquery.transform.TestBase.call(this);
	$s.pop();
}
rg.data.source.rgquery.transform.TestCountTransform.__name__ = ["rg","data","source","rgquery","transform","TestCountTransform"];
rg.data.source.rgquery.transform.TestCountTransform.__super__ = rg.data.source.rgquery.transform.TestBase;
for(var k in rg.data.source.rgquery.transform.TestBase.prototype ) rg.data.source.rgquery.transform.TestCountTransform.prototype[k] = rg.data.source.rgquery.transform.TestBase.prototype[k];
rg.data.source.rgquery.transform.TestCountTransform.prototype.testTransform = function() {
	$s.push("rg.data.source.rgquery.transform.TestCountTransform::testTransform");
	var $spos = $s.length;
	var transform = new rg.data.source.rgquery.transform.TransformCount({ },"impression","count");
	var data = 39;
	this.assertDataPoints([{ event : "impression", count : 39.0}],transform.transform(data),{ fileName : "TestCountTransform.hx", lineNumber : 17, className : "rg.data.source.rgquery.transform.TestCountTransform", methodName : "testTransform"});
	transform = new rg.data.source.rgquery.transform.TransformCount({ },"impression","otherunit");
	data = 7;
	this.assertDataPoints([{ event : "impression", otherunit : 7.0}],transform.transform(7),{ fileName : "TestCountTransform.hx", lineNumber : 27, className : "rg.data.source.rgquery.transform.TestCountTransform", methodName : "testTransform"});
	$s.pop();
}
rg.data.source.rgquery.transform.TestCountTransform.prototype.__class__ = rg.data.source.rgquery.transform.TestCountTransform;
rg.controller.info.TestInfoVisualizationOption = function(p) {
	$s.push("rg.controller.info.TestInfoVisualizationOption::new");
	var $spos = $s.length;
	$s.pop();
}
rg.controller.info.TestInfoVisualizationOption.__name__ = ["rg","controller","info","TestInfoVisualizationOption"];
rg.controller.info.TestInfoVisualizationOption.prototype.testFeedOptions = function() {
	$s.push("rg.controller.info.TestInfoVisualizationOption::testFeedOptions");
	var $spos = $s.length;
	var info = rg.controller.info.Info.feed(new rg.controller.info.InfoVisualizationOption(),{ axes : [{ type : "count"}], data : [{ name : "count", src : [{ event : "click", path : "/"}]}], options : { test : "option"}});
	utest.Assert.notNull(info.data,null,{ fileName : "TestInfoVisualizationOption.hx", lineNumber : 23, className : "rg.controller.info.TestInfoVisualizationOption", methodName : "testFeedOptions"});
	utest.Assert["is"](info.data,Array,null,{ fileName : "TestInfoVisualizationOption.hx", lineNumber : 24, className : "rg.controller.info.TestInfoVisualizationOption", methodName : "testFeedOptions"});
	var axis = info.variables[0];
	utest.Assert["is"](axis,rg.controller.info.InfoVariable,null,{ fileName : "TestInfoVisualizationOption.hx", lineNumber : 26, className : "rg.controller.info.TestInfoVisualizationOption", methodName : "testFeedOptions"});
	utest.Assert.equals("count",axis.type,null,{ fileName : "TestInfoVisualizationOption.hx", lineNumber : 27, className : "rg.controller.info.TestInfoVisualizationOption", methodName : "testFeedOptions"});
	utest.Assert.notNull(info.variables,null,{ fileName : "TestInfoVisualizationOption.hx", lineNumber : 29, className : "rg.controller.info.TestInfoVisualizationOption", methodName : "testFeedOptions"});
	utest.Assert["is"](info.variables,Array,null,{ fileName : "TestInfoVisualizationOption.hx", lineNumber : 30, className : "rg.controller.info.TestInfoVisualizationOption", methodName : "testFeedOptions"});
	var ctx = info.data[0];
	utest.Assert["is"](ctx,rg.controller.info.InfoDataContext,null,{ fileName : "TestInfoVisualizationOption.hx", lineNumber : 32, className : "rg.controller.info.TestInfoVisualizationOption", methodName : "testFeedOptions"});
	utest.Assert.equals("count",ctx.name,null,{ fileName : "TestInfoVisualizationOption.hx", lineNumber : 33, className : "rg.controller.info.TestInfoVisualizationOption", methodName : "testFeedOptions"});
	utest.Assert.equals("option",info.options.test,null,{ fileName : "TestInfoVisualizationOption.hx", lineNumber : 34, className : "rg.controller.info.TestInfoVisualizationOption", methodName : "testFeedOptions"});
	$s.pop();
}
rg.controller.info.TestInfoVisualizationOption.prototype.__class__ = rg.controller.info.TestInfoVisualizationOption;
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
if(!rg.view) rg.view = {}
if(!rg.view.svg) rg.view.svg = {}
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
if(!utest.ui.common) utest.ui.common = {}
utest.ui.common.ResultAggregator = function(runner,flattenPackage) {
	if( runner === $_ ) return;
	$s.push("utest.ui.common.ResultAggregator::new");
	var $spos = $s.length;
	if(flattenPackage == null) flattenPackage = false;
	if(runner == null) throw "runner argument is null";
	this.flattenPackage = flattenPackage;
	this.runner = runner;
	runner.onStart.add($closure(this,"start"));
	runner.onProgress.add($closure(this,"progress"));
	runner.onComplete.add($closure(this,"complete"));
	this.onStart = new utest.Notifier();
	this.onComplete = new utest.Dispatcher();
	this.onProgress = new utest.Dispatcher();
	$s.pop();
}
utest.ui.common.ResultAggregator.__name__ = ["utest","ui","common","ResultAggregator"];
utest.ui.common.ResultAggregator.prototype.runner = null;
utest.ui.common.ResultAggregator.prototype.flattenPackage = null;
utest.ui.common.ResultAggregator.prototype.root = null;
utest.ui.common.ResultAggregator.prototype.onStart = null;
utest.ui.common.ResultAggregator.prototype.onComplete = null;
utest.ui.common.ResultAggregator.prototype.onProgress = null;
utest.ui.common.ResultAggregator.prototype.start = function(runner) {
	$s.push("utest.ui.common.ResultAggregator::start");
	var $spos = $s.length;
	this.root = new utest.ui.common.PackageResult(null);
	this.onStart.dispatch();
	$s.pop();
}
utest.ui.common.ResultAggregator.prototype.getOrCreatePackage = function(pack,flat,ref) {
	$s.push("utest.ui.common.ResultAggregator::getOrCreatePackage");
	var $spos = $s.length;
	if(ref == null) ref = this.root;
	if(pack == null || pack == "") {
		$s.pop();
		return ref;
	}
	if(flat) {
		if(ref.existsPackage(pack)) {
			var $tmp = ref.getPackage(pack);
			$s.pop();
			return $tmp;
		}
		var p = new utest.ui.common.PackageResult(pack);
		ref.addPackage(p);
		$s.pop();
		return p;
	} else {
		var parts = pack.split(".");
		var _g = 0;
		while(_g < parts.length) {
			var part = parts[_g];
			++_g;
			ref = this.getOrCreatePackage(part,true,ref);
		}
		$s.pop();
		return ref;
	}
	$s.pop();
}
utest.ui.common.ResultAggregator.prototype.getOrCreateClass = function(pack,cls,setup,teardown) {
	$s.push("utest.ui.common.ResultAggregator::getOrCreateClass");
	var $spos = $s.length;
	if(pack.existsClass(cls)) {
		var $tmp = pack.getClass(cls);
		$s.pop();
		return $tmp;
	}
	var c = new utest.ui.common.ClassResult(cls,setup,teardown);
	pack.addClass(c);
	$s.pop();
	return c;
	$s.pop();
}
utest.ui.common.ResultAggregator.prototype.createFixture = function(result) {
	$s.push("utest.ui.common.ResultAggregator::createFixture");
	var $spos = $s.length;
	var f = new utest.ui.common.FixtureResult(result.method);
	var $it0 = result.assertations.iterator();
	while( $it0.hasNext() ) {
		var assertation = $it0.next();
		f.add(assertation);
	}
	$s.pop();
	return f;
	$s.pop();
}
utest.ui.common.ResultAggregator.prototype.progress = function(e) {
	$s.push("utest.ui.common.ResultAggregator::progress");
	var $spos = $s.length;
	this.root.addResult(e.result,this.flattenPackage);
	this.onProgress.dispatch(e);
	$s.pop();
}
utest.ui.common.ResultAggregator.prototype.complete = function(runner) {
	$s.push("utest.ui.common.ResultAggregator::complete");
	var $spos = $s.length;
	this.onComplete.dispatch(this.root);
	$s.pop();
}
utest.ui.common.ResultAggregator.prototype.__class__ = utest.ui.common.ResultAggregator;
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
rg.controller.info.InfoAnimation = function(p) {
	if( p === $_ ) return;
	$s.push("rg.controller.info.InfoAnimation::new");
	var $spos = $s.length;
	this.animated = true;
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
		$s.push("rg.controller.info.InfoDataSource::filters@26");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "path", validator : function(v) {
		$s.push("rg.controller.info.InfoDataSource::filters@30");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "event", validator : function(v) {
		$s.push("rg.controller.info.InfoDataSource::filters@34");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "name", validator : function(v) {
		$s.push("rg.controller.info.InfoDataSource::filters@38");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "data", validator : function(v) {
		$s.push("rg.controller.info.InfoDataSource::filters@42");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String) || Std["is"](v,Array) && Iterators.all(v.iterator(),function(v1) {
			$s.push("rg.controller.info.InfoDataSource::filters@42@42");
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
		$s.push("rg.controller.info.InfoDataSource::filters@43");
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
		$s.push("rg.controller.info.InfoDataSource::filters@52");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String) && rg.util.Periodicity.isValid(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoDataSource::filters@53");
		var $spos = $s.length;
		var $tmp = [{ field : "groupBy", value : v}];
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
rg.controller.info.InfoDataSource.prototype.__class__ = rg.controller.info.InfoDataSource;
if(!rg.controller.factory) rg.controller.factory = {}
rg.controller.factory.TestFactoryVariableIndependent = function(p) {
	$s.push("rg.controller.factory.TestFactoryVariableIndependent::new");
	var $spos = $s.length;
	$s.pop();
}
rg.controller.factory.TestFactoryVariableIndependent.__name__ = ["rg","controller","factory","TestFactoryVariableIndependent"];
rg.controller.factory.TestFactoryVariableIndependent.prototype.testIncompleteInfo = function() {
	$s.push("rg.controller.factory.TestFactoryVariableIndependent::testIncompleteInfo");
	var $spos = $s.length;
	utest.Assert.isNull(new rg.controller.factory.FactoryVariableIndependent().create(new rg.controller.info.InfoVariable()),null,{ fileName : "TestFactoryVariableIndependent.hx", lineNumber : 20, className : "rg.controller.factory.TestFactoryVariableIndependent", methodName : "testIncompleteInfo"});
	$s.pop();
}
rg.controller.factory.TestFactoryVariableIndependent.prototype.testSimpleParameters = function() {
	$s.push("rg.controller.factory.TestFactoryVariableIndependent::testSimpleParameters");
	var $spos = $s.length;
	var info = rg.controller.info.Info.feed(new rg.controller.info.InfoVariable(),{ view : [1.0,10.0], type : ".impression"}), factory = new rg.controller.factory.FactoryVariableIndependent(), variable = factory.create(info);
	utest.Assert.notNull(variable,null,{ fileName : "TestFactoryVariableIndependent.hx", lineNumber : 31, className : "rg.controller.factory.TestFactoryVariableIndependent", methodName : "testSimpleParameters"});
	utest.Assert.same(1.0,variable.min,null,null,{ fileName : "TestFactoryVariableIndependent.hx", lineNumber : 32, className : "rg.controller.factory.TestFactoryVariableIndependent", methodName : "testSimpleParameters"});
	utest.Assert.same(10.0,variable.max,null,null,{ fileName : "TestFactoryVariableIndependent.hx", lineNumber : 33, className : "rg.controller.factory.TestFactoryVariableIndependent", methodName : "testSimpleParameters"});
	utest.Assert.equals(".impression",variable.type,null,{ fileName : "TestFactoryVariableIndependent.hx", lineNumber : 34, className : "rg.controller.factory.TestFactoryVariableIndependent", methodName : "testSimpleParameters"});
	info = rg.controller.info.Info.feed(new rg.controller.info.InfoVariable(),{ type : ".impression"});
	variable = factory.create(info);
	utest.Assert.isNull(variable.min,null,{ fileName : "TestFactoryVariableIndependent.hx", lineNumber : 40, className : "rg.controller.factory.TestFactoryVariableIndependent", methodName : "testSimpleParameters"});
	utest.Assert.isNull(variable.max,null,{ fileName : "TestFactoryVariableIndependent.hx", lineNumber : 41, className : "rg.controller.factory.TestFactoryVariableIndependent", methodName : "testSimpleParameters"});
	utest.Assert.equals(".impression",variable.type,null,{ fileName : "TestFactoryVariableIndependent.hx", lineNumber : 42, className : "rg.controller.factory.TestFactoryVariableIndependent", methodName : "testSimpleParameters"});
	info = new rg.controller.info.InfoVariable();
	variable = factory.create(info);
	utest.Assert.isNull(variable,null,{ fileName : "TestFactoryVariableIndependent.hx", lineNumber : 46, className : "rg.controller.factory.TestFactoryVariableIndependent", methodName : "testSimpleParameters"});
	$s.pop();
}
rg.controller.factory.TestFactoryVariableIndependent.prototype.testAxisType = function() {
	$s.push("rg.controller.factory.TestFactoryVariableIndependent::testAxisType");
	var $spos = $s.length;
	var info = rg.controller.info.Info.feed(new rg.controller.info.InfoVariable(),{ view : [1.0,10.0], type : ".impression"}), factory = new rg.controller.factory.FactoryVariableIndependent(), variable = factory.create(info);
	utest.Assert["is"](variable.axis,rg.data.AxisOrdinal,null,{ fileName : "TestFactoryVariableIndependent.hx", lineNumber : 57, className : "rg.controller.factory.TestFactoryVariableIndependent", methodName : "testAxisType"});
	$s.pop();
}
rg.controller.factory.TestFactoryVariableIndependent.prototype.testValues = function() {
	$s.push("rg.controller.factory.TestFactoryVariableIndependent::testValues");
	var $spos = $s.length;
	var info = rg.controller.info.Info.feed(new rg.controller.info.InfoVariable(),{ view : [1.0,10.0], values : [1.0,5.0,10.0], type : ".impression"}), factory = new rg.controller.factory.FactoryVariableIndependent(), variable = factory.create(info);
	utest.Assert.same([1.0,5.0,10.0],variable.range(),null,null,{ fileName : "TestFactoryVariableIndependent.hx", lineNumber : 69, className : "rg.controller.factory.TestFactoryVariableIndependent", methodName : "testValues"});
	$s.pop();
}
rg.controller.factory.TestFactoryVariableIndependent.prototype.testTimeWithStringView = function() {
	$s.push("rg.controller.factory.TestFactoryVariableIndependent::testTimeWithStringView");
	var $spos = $s.length;
	var min = "2011-01-01", max = "2011-02-02", info = rg.controller.info.Info.feed(new rg.controller.info.InfoVariable(),{ type : ".#time:hour", view : [min,max]}), factory = new rg.controller.factory.FactoryVariableIndependent(), variable = factory.create(info);
	utest.Assert.floatEquals(Date.fromString(min).getTime(),variable.min,null,null,{ fileName : "TestFactoryVariableIndependent.hx", lineNumber : 82, className : "rg.controller.factory.TestFactoryVariableIndependent", methodName : "testTimeWithStringView"});
	utest.Assert.floatEquals(Date.fromString(max).getTime(),variable.max,null,null,{ fileName : "TestFactoryVariableIndependent.hx", lineNumber : 83, className : "rg.controller.factory.TestFactoryVariableIndependent", methodName : "testTimeWithStringView"});
	$s.pop();
}
rg.controller.factory.TestFactoryVariableIndependent.prototype.testTimeWithFloatView = function() {
	$s.push("rg.controller.factory.TestFactoryVariableIndependent::testTimeWithFloatView");
	var $spos = $s.length;
	var min = "2011-01-01", max = "2011-02-02", info = rg.controller.info.Info.feed(new rg.controller.info.InfoVariable(),{ type : ".#time:hour", view : [Date.fromString(min).getTime(),Date.fromString(max).getTime()]}), factory = new rg.controller.factory.FactoryVariableIndependent(), variable = factory.create(info);
	utest.Assert.floatEquals(Date.fromString(min).getTime(),variable.min,null,null,{ fileName : "TestFactoryVariableIndependent.hx", lineNumber : 96, className : "rg.controller.factory.TestFactoryVariableIndependent", methodName : "testTimeWithFloatView"});
	utest.Assert.floatEquals(Date.fromString(max).getTime(),variable.max,null,null,{ fileName : "TestFactoryVariableIndependent.hx", lineNumber : 97, className : "rg.controller.factory.TestFactoryVariableIndependent", methodName : "testTimeWithFloatView"});
	$s.pop();
}
rg.controller.factory.TestFactoryVariableIndependent.prototype.testTimeWithDateView = function() {
	$s.push("rg.controller.factory.TestFactoryVariableIndependent::testTimeWithDateView");
	var $spos = $s.length;
	var min = "2011-01-01", max = "2011-02-02", info = rg.controller.info.Info.feed(new rg.controller.info.InfoVariable(),{ type : ".#time:hour", view : [Date.fromString(min),Date.fromString(max)]}), factory = new rg.controller.factory.FactoryVariableIndependent(), variable = factory.create(info);
	utest.Assert.floatEquals(Date.fromString(min).getTime(),variable.min,null,null,{ fileName : "TestFactoryVariableIndependent.hx", lineNumber : 110, className : "rg.controller.factory.TestFactoryVariableIndependent", methodName : "testTimeWithDateView"});
	utest.Assert.floatEquals(Date.fromString(max).getTime(),variable.max,null,null,{ fileName : "TestFactoryVariableIndependent.hx", lineNumber : 111, className : "rg.controller.factory.TestFactoryVariableIndependent", methodName : "testTimeWithDateView"});
	$s.pop();
}
rg.controller.factory.TestFactoryVariableIndependent.prototype.testTimeGroupBy = function() {
	$s.push("rg.controller.factory.TestFactoryVariableIndependent::testTimeGroupBy");
	var $spos = $s.length;
	var min = "2011-01-01", max = "2011-02-02", info = rg.controller.info.Info.feed(new rg.controller.info.InfoVariable(),{ type : ".#time:hour", view : [Date.fromString(min),Date.fromString(max)], groupby : "day"}), factory = new rg.controller.factory.FactoryVariableIndependent(), variable = factory.create(info);
	utest.Assert["is"](variable.axis,rg.data.AxisGroupByTime,null,{ fileName : "TestFactoryVariableIndependent.hx", lineNumber : 125, className : "rg.controller.factory.TestFactoryVariableIndependent", methodName : "testTimeGroupBy"});
	var axis = Types["as"](variable.axis,rg.data.AxisGroupByTime);
	utest.Assert.equals("day",axis.groupBy,null,{ fileName : "TestFactoryVariableIndependent.hx", lineNumber : 127, className : "rg.controller.factory.TestFactoryVariableIndependent", methodName : "testTimeGroupBy"});
	$s.pop();
}
rg.controller.factory.TestFactoryVariableIndependent.prototype.__class__ = rg.controller.factory.TestFactoryVariableIndependent;
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
			var $tmp = new rg.data.AxisGroupByTime(groupBy);
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
rg.controller.factory.TestFactoryDataSource = function(p) {
	$s.push("rg.controller.factory.TestFactoryDataSource::new");
	var $spos = $s.length;
	$s.pop();
}
rg.controller.factory.TestFactoryDataSource.__name__ = ["rg","controller","factory","TestFactoryDataSource"];
rg.controller.factory.TestFactoryDataSource.prototype.executor = null;
rg.controller.factory.TestFactoryDataSource.prototype.cache = null;
rg.controller.factory.TestFactoryDataSource.prototype.factory = null;
rg.controller.factory.TestFactoryDataSource.prototype.testIncompleteRGQuery = function() {
	$s.push("rg.controller.factory.TestFactoryDataSource::testIncompleteRGQuery");
	var $spos = $s.length;
	var info = new rg.controller.info.InfoDataSource(), b = this.factory;
	utest.Assert.raises(function() {
		$s.push("rg.controller.factory.TestFactoryDataSource::testIncompleteRGQuery@29");
		var $spos = $s.length;
		b.create(info);
		$s.pop();
	},thx.error.Error,null,null,{ fileName : "TestFactoryDataSource.hx", lineNumber : 29, className : "rg.controller.factory.TestFactoryDataSource", methodName : "testIncompleteRGQuery"});
	rg.controller.info.Info.feed(info,{ query : ""});
	utest.Assert.raises(function() {
		$s.push("rg.controller.factory.TestFactoryDataSource::testIncompleteRGQuery@31");
		var $spos = $s.length;
		b.create(info);
		$s.pop();
	},thx.error.Error,null,null,{ fileName : "TestFactoryDataSource.hx", lineNumber : 31, className : "rg.controller.factory.TestFactoryDataSource", methodName : "testIncompleteRGQuery"});
	rg.controller.info.Info.feed(info,{ path : "/"});
	utest.Assert.raises(function() {
		$s.push("rg.controller.factory.TestFactoryDataSource::testIncompleteRGQuery@33");
		var $spos = $s.length;
		b.create(info);
		$s.pop();
	},thx.error.Error,null,null,{ fileName : "TestFactoryDataSource.hx", lineNumber : 33, className : "rg.controller.factory.TestFactoryDataSource", methodName : "testIncompleteRGQuery"});
	rg.controller.info.Info.feed(info,{ event : "click"});
	utest.Assert.notNull(b.create(info),null,{ fileName : "TestFactoryDataSource.hx", lineNumber : 35, className : "rg.controller.factory.TestFactoryDataSource", methodName : "testIncompleteRGQuery"});
	$s.pop();
}
rg.controller.factory.TestFactoryDataSource.prototype.testRGQueryWithEmptyQuery = function() {
	$s.push("rg.controller.factory.TestFactoryDataSource::testRGQueryWithEmptyQuery");
	var $spos = $s.length;
	var info = rg.controller.info.Info.feed(new rg.controller.info.InfoDataSource(),{ path : "/", event : "click"}), ds = this.factory.create(info);
	utest.Assert.notNull(ds,null,{ fileName : "TestFactoryDataSource.hx", lineNumber : 43, className : "rg.controller.factory.TestFactoryDataSource", methodName : "testRGQueryWithEmptyQuery"});
	utest.Assert["is"](ds,rg.data.source.DataSourceReportGrid,null,{ fileName : "TestFactoryDataSource.hx", lineNumber : 44, className : "rg.controller.factory.TestFactoryDataSource", methodName : "testRGQueryWithEmptyQuery"});
	var r = Std["is"](ds,rg.data.source.DataSourceReportGrid)?ds:null;
	utest.Assert.equals("click",r.event,null,{ fileName : "TestFactoryDataSource.hx", lineNumber : 46, className : "rg.controller.factory.TestFactoryDataSource", methodName : "testRGQueryWithEmptyQuery"});
	utest.Assert.equals("/",r.path,null,{ fileName : "TestFactoryDataSource.hx", lineNumber : 47, className : "rg.controller.factory.TestFactoryDataSource", methodName : "testRGQueryWithEmptyQuery"});
	utest.Assert.same({ exp : [rg.data.source.rgquery.QExp.Event], operation : rg.data.source.rgquery.QOperation.Count, where : []},r.query,null,null,{ fileName : "TestFactoryDataSource.hx", lineNumber : 48, className : "rg.controller.factory.TestFactoryDataSource", methodName : "testRGQueryWithEmptyQuery"});
	$s.pop();
}
rg.controller.factory.TestFactoryDataSource.prototype.testRGQuery = function() {
	$s.push("rg.controller.factory.TestFactoryDataSource::testRGQuery");
	var $spos = $s.length;
	var info = rg.controller.info.Info.feed(new rg.controller.info.InfoDataSource(),{ path : "/", event : "click", query : ".#time:hour"}), ds = this.factory.create(info);
	utest.Assert.notNull(ds,null,{ fileName : "TestFactoryDataSource.hx", lineNumber : 59, className : "rg.controller.factory.TestFactoryDataSource", methodName : "testRGQuery"});
	utest.Assert["is"](ds,rg.data.source.DataSourceReportGrid,null,{ fileName : "TestFactoryDataSource.hx", lineNumber : 60, className : "rg.controller.factory.TestFactoryDataSource", methodName : "testRGQuery"});
	var r = Std["is"](ds,rg.data.source.DataSourceReportGrid)?ds:null;
	utest.Assert.equals("click",r.event,null,{ fileName : "TestFactoryDataSource.hx", lineNumber : 62, className : "rg.controller.factory.TestFactoryDataSource", methodName : "testRGQuery"});
	utest.Assert.equals("/",r.path,null,{ fileName : "TestFactoryDataSource.hx", lineNumber : 63, className : "rg.controller.factory.TestFactoryDataSource", methodName : "testRGQuery"});
	utest.Assert.same({ exp : [rg.data.source.rgquery.QExp.Time("hour")], operation : rg.data.source.rgquery.QOperation.Count, where : []},r.query,null,null,{ fileName : "TestFactoryDataSource.hx", lineNumber : 64, className : "rg.controller.factory.TestFactoryDataSource", methodName : "testRGQuery"});
	$s.pop();
}
rg.controller.factory.TestFactoryDataSource.prototype.testArraySource = function() {
	$s.push("rg.controller.factory.TestFactoryDataSource::testArraySource");
	var $spos = $s.length;
	var info = rg.controller.info.Info.feed(new rg.controller.info.InfoDataSource(),{ data : [{ event : "click", count : 10}], name : "sample"}), ds = this.factory.create(info);
	ds.onLoad.add(function(data) {
		$s.push("rg.controller.factory.TestFactoryDataSource::testArraySource@78");
		var $spos = $s.length;
		utest.Assert.same([{ event : "click", count : 10}],data,null,null,{ fileName : "TestFactoryDataSource.hx", lineNumber : 79, className : "rg.controller.factory.TestFactoryDataSource", methodName : "testArraySource"});
		$s.pop();
	});
	ds.load();
	$s.pop();
}
rg.controller.factory.TestFactoryDataSource.prototype.testNamedSource = function() {
	$s.push("rg.controller.factory.TestFactoryDataSource::testNamedSource");
	var $spos = $s.length;
	this.cache.set("sample",new rg.data.source.DataSourceArray([]));
	var info = rg.controller.info.Info.feed(new rg.controller.info.InfoDataSource(),{ data : "sample"}), ds = this.factory.create(info);
	utest.Assert.notNull(ds,null,{ fileName : "TestFactoryDataSource.hx", lineNumber : 92, className : "rg.controller.factory.TestFactoryDataSource", methodName : "testNamedSource"});
	utest.Assert["is"](ds,rg.data.source.DataSourceArray,null,{ fileName : "TestFactoryDataSource.hx", lineNumber : 93, className : "rg.controller.factory.TestFactoryDataSource", methodName : "testNamedSource"});
	$s.pop();
}
rg.controller.factory.TestFactoryDataSource.prototype.testNamedSourceForNotExistingSource = function() {
	$s.push("rg.controller.factory.TestFactoryDataSource::testNamedSourceForNotExistingSource");
	var $spos = $s.length;
	var info = rg.controller.info.Info.feed(new rg.controller.info.InfoDataSource(),{ data : "sample"}), b = this.factory;
	utest.Assert.raises(function() {
		$s.push("rg.controller.factory.TestFactoryDataSource::testNamedSourceForNotExistingSource@100");
		var $spos = $s.length;
		b.create(info);
		$s.pop();
	},thx.error.Error,null,null,{ fileName : "TestFactoryDataSource.hx", lineNumber : 100, className : "rg.controller.factory.TestFactoryDataSource", methodName : "testNamedSourceForNotExistingSource"});
	$s.pop();
}
rg.controller.factory.TestFactoryDataSource.prototype.setup = function() {
	$s.push("rg.controller.factory.TestFactoryDataSource::setup");
	var $spos = $s.length;
	this.cache = new Hash();
	this.executor = new rg.data.source.rgquery.MockRGExecutor();
	this.factory = new rg.controller.factory.FactoryDataSource(this.cache,this.executor);
	$s.pop();
}
rg.controller.factory.TestFactoryDataSource.prototype.__class__ = rg.controller.factory.TestFactoryDataSource;
rg.data.source.rgquery.transform.TestCountTimeSeriesTransform = function(p) {
	if( p === $_ ) return;
	$s.push("rg.data.source.rgquery.transform.TestCountTimeSeriesTransform::new");
	var $spos = $s.length;
	rg.data.source.rgquery.transform.TestBase.call(this);
	$s.pop();
}
rg.data.source.rgquery.transform.TestCountTimeSeriesTransform.__name__ = ["rg","data","source","rgquery","transform","TestCountTimeSeriesTransform"];
rg.data.source.rgquery.transform.TestCountTimeSeriesTransform.__super__ = rg.data.source.rgquery.transform.TestBase;
for(var k in rg.data.source.rgquery.transform.TestBase.prototype ) rg.data.source.rgquery.transform.TestCountTimeSeriesTransform.prototype[k] = rg.data.source.rgquery.transform.TestBase.prototype[k];
rg.data.source.rgquery.transform.TestCountTimeSeriesTransform.prototype.testTransform = function() {
	$s.push("rg.data.source.rgquery.transform.TestCountTimeSeriesTransform::testTransform");
	var $spos = $s.length;
	var transform = new rg.data.source.rgquery.transform.TransformCountTimeSeries({ },"impression","day","count");
	var data = { type : "timeseries", periodicity : "day", data : [[1310342400000,0],[1310428800000,1],[1310515200000,2]]};
	this.assertDataPoints([Objects.addFields({ event : "impression", count : 0},[".#time:day"],[1310342400000]),Objects.addFields({ event : "impression", count : 1},[".#time:day"],[1310428800000]),Objects.addFields({ event : "impression", count : 2},[".#time:day"],[1310515200000])],transform.transform(data),{ fileName : "TestCountTimeSeriesTransform.hx", lineNumber : 18, className : "rg.data.source.rgquery.transform.TestCountTimeSeriesTransform", methodName : "testTransform"});
	$s.pop();
}
rg.data.source.rgquery.transform.TestCountTimeSeriesTransform.prototype.__class__ = rg.data.source.rgquery.transform.TestCountTimeSeriesTransform;
if(!rg.view.layout) rg.view.layout = {}
rg.view.layout.LayoutScaleY = { __ename__ : ["rg","view","layout","LayoutScaleY"], __constructs__ : ["ScalesOnLeft","ScalesOnRight","ScalesAlternating"] }
rg.view.layout.LayoutScaleY.ScalesOnLeft = ["ScalesOnLeft",0];
rg.view.layout.LayoutScaleY.ScalesOnLeft.toString = $estr;
rg.view.layout.LayoutScaleY.ScalesOnLeft.__enum__ = rg.view.layout.LayoutScaleY;
rg.view.layout.LayoutScaleY.ScalesOnRight = ["ScalesOnRight",1];
rg.view.layout.LayoutScaleY.ScalesOnRight.toString = $estr;
rg.view.layout.LayoutScaleY.ScalesOnRight.__enum__ = rg.view.layout.LayoutScaleY;
rg.view.layout.LayoutScaleY.ScalesAlternating = ["ScalesAlternating",2];
rg.view.layout.LayoutScaleY.ScalesAlternating.toString = $estr;
rg.view.layout.LayoutScaleY.ScalesAlternating.__enum__ = rg.view.layout.LayoutScaleY;
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
utest.ui.common.ReportTools = function() { }
utest.ui.common.ReportTools.__name__ = ["utest","ui","common","ReportTools"];
utest.ui.common.ReportTools.hasHeader = function(report,stats) {
	$s.push("utest.ui.common.ReportTools::hasHeader");
	var $spos = $s.length;
	switch( (report.displayHeader)[1] ) {
	case 1:
		$s.pop();
		return false;
	case 2:
		if(!stats.isOk) {
			$s.pop();
			return true;
		}
		switch( (report.displaySuccessResults)[1] ) {
		case 1:
			$s.pop();
			return false;
		case 0:
		case 2:
			$s.pop();
			return true;
		}
		break;
	case 0:
		$s.pop();
		return true;
	}
	$s.pop();
}
utest.ui.common.ReportTools.skipResult = function(report,stats,isOk) {
	$s.push("utest.ui.common.ReportTools::skipResult");
	var $spos = $s.length;
	if(!stats.isOk) {
		$s.pop();
		return false;
	}
	var $tmp = (function($this) {
		var $r;
		switch( (report.displaySuccessResults)[1] ) {
		case 1:
			$r = true;
			break;
		case 0:
			$r = false;
			break;
		case 2:
			$r = !isOk;
			break;
		}
		return $r;
	}(this));
	$s.pop();
	return $tmp;
	$s.pop();
}
utest.ui.common.ReportTools.hasOutput = function(report,stats) {
	$s.push("utest.ui.common.ReportTools::hasOutput");
	var $spos = $s.length;
	if(!stats.isOk) {
		$s.pop();
		return true;
	}
	var $tmp = utest.ui.common.ReportTools.hasHeader(report,stats);
	$s.pop();
	return $tmp;
	$s.pop();
}
utest.ui.common.ReportTools.prototype.__class__ = utest.ui.common.ReportTools;
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
	if(null != arr) this.values = thx.collections.Set.ofArray(arr); else if(null != set) this.values = set; else this.values = new thx.collections.Set();
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
rg.data.AxisOrdinal.prototype.getAllTicks = function() {
	$s.push("rg.data.AxisOrdinal::getAllTicks");
	var $spos = $s.length;
	var t = $closure(this,"toTickmark"), f = this.getFirst(), l = this.getLast();
	var $tmp = this.range(f,l).map(function(d,i) {
		$s.push("rg.data.AxisOrdinal::getAllTicks@81");
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
rg.view.svg.panel.TestSpace = function(p) {
	$s.push("rg.view.svg.panel.TestSpace::new");
	var $spos = $s.length;
	$s.pop();
}
rg.view.svg.panel.TestSpace.__name__ = ["rg","view","svg","panel","TestSpace"];
rg.view.svg.panel.TestSpace.prototype.container = null;
rg.view.svg.panel.TestSpace.prototype.setup = function() {
	$s.push("rg.view.svg.panel.TestSpace::setup");
	var $spos = $s.length;
	this.container = thx.js.Dom.select("body").append("div");
	$s.pop();
}
rg.view.svg.panel.TestSpace.prototype.teardown = function() {
	$s.push("rg.view.svg.panel.TestSpace::teardown");
	var $spos = $s.length;
	this.container.remove();
	$s.pop();
}
rg.view.svg.panel.TestSpace.prototype.testCreatePanelAppend = function() {
	$s.push("rg.view.svg.panel.TestSpace::testCreatePanelAppend");
	var $spos = $s.length;
	var space = new rg.view.svg.panel.Space(100,100,this.container), fixed = space.createPanel(rg.view.frame.FrameLayout.Fixed(0,0,20));
	utest.Assert.equals(0,fixed.frame.y,null,{ fileName : "TestSpace.hx", lineNumber : 32, className : "rg.view.svg.panel.TestSpace", methodName : "testCreatePanelAppend"});
	utest.Assert.equals(20,fixed.frame.height,null,{ fileName : "TestSpace.hx", lineNumber : 33, className : "rg.view.svg.panel.TestSpace", methodName : "testCreatePanelAppend"});
	var fill = space.createPanel(rg.view.frame.FrameLayout.Fill(0,0));
	utest.Assert.equals(20,fill.frame.y,null,{ fileName : "TestSpace.hx", lineNumber : 36, className : "rg.view.svg.panel.TestSpace", methodName : "testCreatePanelAppend"});
	utest.Assert.equals(80,fill.frame.height,null,{ fileName : "TestSpace.hx", lineNumber : 37, className : "rg.view.svg.panel.TestSpace", methodName : "testCreatePanelAppend"});
	$s.pop();
}
rg.view.svg.panel.TestSpace.prototype.testCreatePanelInsert = function() {
	$s.push("rg.view.svg.panel.TestSpace::testCreatePanelInsert");
	var $spos = $s.length;
	var space = new rg.view.svg.panel.Space(100,100,this.container), fixed = space.createPanel(rg.view.frame.FrameLayout.Fixed(0,0,20));
	utest.Assert.equals(0,fixed.frame.y,null,{ fileName : "TestSpace.hx", lineNumber : 44, className : "rg.view.svg.panel.TestSpace", methodName : "testCreatePanelInsert"});
	utest.Assert.equals(20,fixed.frame.height,null,{ fileName : "TestSpace.hx", lineNumber : 45, className : "rg.view.svg.panel.TestSpace", methodName : "testCreatePanelInsert"});
	var fill = space.createPanelAt(0,rg.view.frame.FrameLayout.Fill(0,0));
	utest.Assert.equals(0,fill.frame.y,null,{ fileName : "TestSpace.hx", lineNumber : 49, className : "rg.view.svg.panel.TestSpace", methodName : "testCreatePanelInsert"});
	utest.Assert.equals(80,fill.frame.height,null,{ fileName : "TestSpace.hx", lineNumber : 50, className : "rg.view.svg.panel.TestSpace", methodName : "testCreatePanelInsert"});
	utest.Assert.equals(80,fixed.frame.y,null,{ fileName : "TestSpace.hx", lineNumber : 52, className : "rg.view.svg.panel.TestSpace", methodName : "testCreatePanelInsert"});
	utest.Assert.equals(20,fixed.frame.height,null,{ fileName : "TestSpace.hx", lineNumber : 53, className : "rg.view.svg.panel.TestSpace", methodName : "testCreatePanelInsert"});
	$s.pop();
}
rg.view.svg.panel.TestSpace.prototype.testResize = function() {
	$s.push("rg.view.svg.panel.TestSpace::testResize");
	var $spos = $s.length;
	var space = new rg.view.svg.panel.Space(50,100,this.container), fill = space.createPanel(rg.view.frame.FrameLayout.Fill(0,0));
	utest.Assert.equals(50,fill.frame.width,null,{ fileName : "TestSpace.hx", lineNumber : 60, className : "rg.view.svg.panel.TestSpace", methodName : "testResize"});
	utest.Assert.equals(100,fill.frame.height,null,{ fileName : "TestSpace.hx", lineNumber : 61, className : "rg.view.svg.panel.TestSpace", methodName : "testResize"});
	space.resize(100,200);
	utest.Assert.equals(100,fill.frame.width,null,{ fileName : "TestSpace.hx", lineNumber : 63, className : "rg.view.svg.panel.TestSpace", methodName : "testResize"});
	utest.Assert.equals(200,fill.frame.height,null,{ fileName : "TestSpace.hx", lineNumber : 64, className : "rg.view.svg.panel.TestSpace", methodName : "testResize"});
	$s.pop();
}
rg.view.svg.panel.TestSpace.prototype.testLayerSize = function() {
	$s.push("rg.view.svg.panel.TestSpace::testLayerSize");
	var $spos = $s.length;
	var space = new rg.view.svg.panel.Space(50,100,this.container), panel = space.createPanel(rg.view.frame.FrameLayout.Fill(0,0)), layer = new rg.view.svg.panel.Layer(panel);
	utest.Assert.equals(50,panel.frame.width,null,{ fileName : "TestSpace.hx", lineNumber : 73, className : "rg.view.svg.panel.TestSpace", methodName : "testLayerSize"});
	utest.Assert.equals(100,panel.frame.height,null,{ fileName : "TestSpace.hx", lineNumber : 74, className : "rg.view.svg.panel.TestSpace", methodName : "testLayerSize"});
	utest.Assert.equals(50,layer.width,null,{ fileName : "TestSpace.hx", lineNumber : 76, className : "rg.view.svg.panel.TestSpace", methodName : "testLayerSize"});
	utest.Assert.equals(100,layer.height,null,{ fileName : "TestSpace.hx", lineNumber : 77, className : "rg.view.svg.panel.TestSpace", methodName : "testLayerSize"});
	space.createPanel(rg.view.frame.FrameLayout.Fill(0,0));
	utest.Assert.equals(50,layer.height,null,{ fileName : "TestSpace.hx", lineNumber : 81, className : "rg.view.svg.panel.TestSpace", methodName : "testLayerSize"});
	space.resize(100,200);
	utest.Assert.equals(100,panel.frame.width,null,{ fileName : "TestSpace.hx", lineNumber : 84, className : "rg.view.svg.panel.TestSpace", methodName : "testLayerSize"});
	utest.Assert.equals(100,panel.frame.height,null,{ fileName : "TestSpace.hx", lineNumber : 85, className : "rg.view.svg.panel.TestSpace", methodName : "testLayerSize"});
	utest.Assert.equals(100,layer.height,null,{ fileName : "TestSpace.hx", lineNumber : 87, className : "rg.view.svg.panel.TestSpace", methodName : "testLayerSize"});
	$s.pop();
}
rg.view.svg.panel.TestSpace.prototype.testContainer = function() {
	$s.push("rg.view.svg.panel.TestSpace::testContainer");
	var $spos = $s.length;
	var space = new rg.view.svg.panel.Space(200,200,this.container);
	space.createPanel(rg.view.frame.FrameLayout.FillPercent(0,0,.5));
	var cont = space.createContainer(rg.view.frame.FrameLayout.FillPercent(0,0,.5),rg.view.frame.Orientation.Horizontal);
	cont.createPanel(rg.view.frame.FrameLayout.FillPercent(0,0,.5));
	var sub = cont.createContainer(rg.view.frame.FrameLayout.FillPercent(0,0,.5),rg.view.frame.Orientation.Vertical);
	var panel1 = sub.createPanel(rg.view.frame.FrameLayout.Fill(0,0)), panel2 = sub.createPanel(rg.view.frame.FrameLayout.Fill(0,0));
	utest.Assert.equals(0,panel1.frame.x,null,{ fileName : "TestSpace.hx", lineNumber : 102, className : "rg.view.svg.panel.TestSpace", methodName : "testContainer"});
	utest.Assert.equals(0,panel1.frame.y,null,{ fileName : "TestSpace.hx", lineNumber : 103, className : "rg.view.svg.panel.TestSpace", methodName : "testContainer"});
	utest.Assert.equals(100,panel1.frame.width,null,{ fileName : "TestSpace.hx", lineNumber : 105, className : "rg.view.svg.panel.TestSpace", methodName : "testContainer"});
	utest.Assert.equals(50,panel1.frame.height,null,{ fileName : "TestSpace.hx", lineNumber : 106, className : "rg.view.svg.panel.TestSpace", methodName : "testContainer"});
	utest.Assert.equals(0,panel2.frame.x,null,{ fileName : "TestSpace.hx", lineNumber : 108, className : "rg.view.svg.panel.TestSpace", methodName : "testContainer"});
	utest.Assert.equals(50,panel2.frame.y,null,{ fileName : "TestSpace.hx", lineNumber : 109, className : "rg.view.svg.panel.TestSpace", methodName : "testContainer"});
	utest.Assert.equals(100,panel2.frame.width,null,{ fileName : "TestSpace.hx", lineNumber : 111, className : "rg.view.svg.panel.TestSpace", methodName : "testContainer"});
	utest.Assert.equals(50,panel2.frame.height,null,{ fileName : "TestSpace.hx", lineNumber : 112, className : "rg.view.svg.panel.TestSpace", methodName : "testContainer"});
	space.resize(400,400);
	utest.Assert.equals(200,panel1.frame.width,null,{ fileName : "TestSpace.hx", lineNumber : 116, className : "rg.view.svg.panel.TestSpace", methodName : "testContainer"});
	utest.Assert.equals(100,panel1.frame.height,null,{ fileName : "TestSpace.hx", lineNumber : 117, className : "rg.view.svg.panel.TestSpace", methodName : "testContainer"});
	utest.Assert.equals(100,panel2.frame.y,null,{ fileName : "TestSpace.hx", lineNumber : 119, className : "rg.view.svg.panel.TestSpace", methodName : "testContainer"});
	utest.Assert.equals(200,panel2.frame.width,null,{ fileName : "TestSpace.hx", lineNumber : 121, className : "rg.view.svg.panel.TestSpace", methodName : "testContainer"});
	utest.Assert.equals(100,panel2.frame.height,null,{ fileName : "TestSpace.hx", lineNumber : 122, className : "rg.view.svg.panel.TestSpace", methodName : "testContainer"});
	$s.pop();
}
rg.view.svg.panel.TestSpace.prototype.__class__ = rg.view.svg.panel.TestSpace;
rg.controller.info.InfoVisualizationType = function(p) {
	$s.push("rg.controller.info.InfoVisualizationType::new");
	var $spos = $s.length;
	$s.pop();
}
rg.controller.info.InfoVisualizationType.__name__ = ["rg","controller","info","InfoVisualizationType"];
rg.controller.info.InfoVisualizationType.filters = function() {
	$s.push("rg.controller.info.InfoVisualizationType::filters");
	var $spos = $s.length;
	var $tmp = [{ field : "visualization", validator : function(v) {
		$s.push("rg.controller.info.InfoVisualizationType::filters@17");
		var $spos = $s.length;
		var $tmp = Arrays.exists(rg.controller.Visualizations.visualizations,v.toLowerCase());
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoVisualizationType::filters@18");
		var $spos = $s.length;
		var $tmp = [{ value : v.toLowerCase(), field : "type"}];
		$s.pop();
		return $tmp;
		$s.pop();
	}}];
	$s.pop();
	return $tmp;
	$s.pop();
}
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
rg.data.TestDataProcessor = function(p) {
	$s.push("rg.data.TestDataProcessor::new");
	var $spos = $s.length;
	$s.pop();
}
rg.data.TestDataProcessor.__name__ = ["rg","data","TestDataProcessor"];
rg.data.TestDataProcessor.prototype.testOnData = function() {
	$s.push("rg.data.TestDataProcessor::testOnData");
	var $spos = $s.length;
	var cache = new Hash();
	var datasources = [new rg.data.source.DataSourceArray([{ count : 100, event : "click"}])];
	var sources = new rg.data.Sources(datasources);
	var processor = new rg.data.DataProcessor(sources);
	var datacontexts = [new rg.data.DataContext("count",processor)];
	var request = new rg.data.DataRequest(cache,datacontexts);
	processor.independentVariables = [new rg.data.VariableIndependentContext(new rg.data.VariableIndependent("event",new rg.data.AxisOrdinal(),null),true)];
	processor.dependentVariables = [new rg.data.VariableDependentContext(new rg.data.VariableDependent("count",null,null),true)];
	processor.onData.add(function(d) {
		$s.push("rg.data.TestDataProcessor::testOnData@29");
		var $spos = $s.length;
		utest.Assert.same([{ count : 100, event : "click"}],d,null,null,{ fileName : "TestDataProcessor.hx", lineNumber : 30, className : "rg.data.TestDataProcessor", methodName : "testOnData"});
		$s.pop();
	});
	sources.load();
	$s.pop();
}
rg.data.TestDataProcessor.prototype.testFillVariable = function() {
	$s.push("rg.data.TestDataProcessor::testFillVariable");
	var $spos = $s.length;
	var ds = new rg.data.source.DataSourceArray([{ gender : "male", count : 2, event : "click"},{ gender : "female", count : 3, event : "click"}]), sources = new rg.data.Sources([ds]), processor = new rg.data.DataProcessor(sources), vi, vd;
	processor.independentVariables = [new rg.data.VariableIndependentContext(vi = new rg.data.VariableIndependent("gender",new rg.data.AxisOrdinal(),null),true)];
	processor.dependentVariables = [new rg.data.VariableDependentContext(vd = new rg.data.VariableDependent("count",new rg.data.AxisNumeric(),null),true)];
	processor.onData.add(function(d) {
		$s.push("rg.data.TestDataProcessor::testFillVariable@53");
		var $spos = $s.length;
		utest.Assert.equals("male",vi.min,null,{ fileName : "TestDataProcessor.hx", lineNumber : 54, className : "rg.data.TestDataProcessor", methodName : "testFillVariable"});
		utest.Assert.equals("female",vi.max,null,{ fileName : "TestDataProcessor.hx", lineNumber : 55, className : "rg.data.TestDataProcessor", methodName : "testFillVariable"});
		utest.Assert.same(["male","female"],vi.range(),null,null,{ fileName : "TestDataProcessor.hx", lineNumber : 56, className : "rg.data.TestDataProcessor", methodName : "testFillVariable"});
		utest.Assert.equals(2,vd.min,null,{ fileName : "TestDataProcessor.hx", lineNumber : 58, className : "rg.data.TestDataProcessor", methodName : "testFillVariable"});
		utest.Assert.equals(3,vd.max,null,{ fileName : "TestDataProcessor.hx", lineNumber : 59, className : "rg.data.TestDataProcessor", methodName : "testFillVariable"});
		$s.pop();
	});
	sources.load();
	$s.pop();
}
rg.data.TestDataProcessor.prototype.testEvents = function() {
	$s.push("rg.data.TestDataProcessor::testEvents");
	var $spos = $s.length;
	var cache = new Hash();
	var datasources = [new rg.data.source.DataSourceArray([{ count : 100, event : "click"},{ count : 10, event : "impression"}])];
	var sources = new rg.data.Sources(datasources);
	var processor = new rg.data.DataProcessor(sources);
	var datacontexts = [new rg.data.DataContext("count",processor)];
	var request = new rg.data.DataRequest(cache,datacontexts);
	processor.independentVariables = [new rg.data.VariableIndependentContext(new rg.data.VariableIndependent("event",new rg.data.AxisOrdinal(),null),true)];
	processor.dependentVariables = [new rg.data.VariableDependentContext(new rg.data.VariableDependent("count",null,null),true)];
	processor.onData.add(function(d) {
		$s.push("rg.data.TestDataProcessor::testEvents@76");
		var $spos = $s.length;
		utest.Assert.same([{ count : 100, event : "click"},{ count : 10, event : "impression"}],d,null,null,{ fileName : "TestDataProcessor.hx", lineNumber : 77, className : "rg.data.TestDataProcessor", methodName : "testEvents"});
		$s.pop();
	});
	sources.load();
	$s.pop();
}
rg.data.TestDataProcessor.prototype.testTransform = function() {
	$s.push("rg.data.TestDataProcessor::testTransform");
	var $spos = $s.length;
	var samples = 10, start = Date.fromString("2011-07-12 00:00:00").getTime(), end = Date.fromString("2011-07-12 02:00:00").getTime(), trange = rg.util.Periodicity.range(start,end,"hour"), vrange = Ints.range(trange.length), ageRanges = ["1-12","13-20","21+"], genders = ["male","female"], defaultAxis = "count", defaultSegment = "default";
	var src = [];
	src.push(new rg.data.source.DataSourceArray(vrange.map(function(d,i) {
		$s.push("rg.data.TestDataProcessor::testTransform@101");
		var $spos = $s.length;
		var $tmp = Objects.addField(Objects.addField(Objects.addField(Objects.addField(Objects.addField({ },".#time:hour",trange[i]),".ageRange",ageRanges[i % ageRanges.length]),".gender",genders[i % genders.length]),"count",d),"event","impression");
		$s.pop();
		return $tmp;
		$s.pop();
	})));
	vrange.reverse();
	src.push(new rg.data.source.DataSourceArray(vrange.map(function(d,i) {
		$s.push("rg.data.TestDataProcessor::testTransform@109");
		var $spos = $s.length;
		var $tmp = Objects.addField(Objects.addField(Objects.addField(Objects.addField(Objects.addField({ },".#time:hour",trange[i]),".ageRange",ageRanges[i % ageRanges.length]),".gender",genders[i % genders.length]),"count",d),"event","impression");
		$s.pop();
		return $tmp;
		$s.pop();
	})));
	var iv = [], dv = [], periodicity = "hour";
	iv.push(new rg.data.VariableIndependentContext(rg.data.VariableIndependent.forTime(".#time:hour",periodicity,null,start,end),false));
	iv.push(new rg.data.VariableIndependentContext(rg.data.VariableIndependent.forOrdinal(".ageRange",null),true));
	iv.push(new rg.data.VariableIndependentContext(rg.data.VariableIndependent.forOrdinal(".gender",null,["male","female"]),false));
	dv.push(new rg.data.VariableDependentContext(new rg.data.VariableDependent("count",new rg.data.AxisNumeric(),null,0,10),false));
	var sources = new rg.data.Sources(src), processor = new rg.data.DataProcessor(sources);
	processor.independentVariables = iv;
	processor.dependentVariables = dv;
	processor.transform = function(sets) {
		$s.push("rg.data.TestDataProcessor::testTransform@132");
		var $spos = $s.length;
		var set = Arrays.flatten(sets);
		var el = Objects.clone(set[0]);
		el.count = 0;
		var _g = 0;
		while(_g < set.length) {
			var item = set[_g];
			++_g;
			el.count += item.count;
		}
		var $tmp = [el];
		$s.pop();
		return $tmp;
		$s.pop();
	};
	processor.onData.add(function(data) {
		$s.push("rg.data.TestDataProcessor::testTransform@142");
		var $spos = $s.length;
		var expected = [Objects.addFields({ event : "impression"},[".#time:hour",".ageRange",".gender","count"],[1310425200000,"1-12","male",2]),Objects.addFields({ event : "impression"},[".#time:hour",".ageRange",".gender","count"],[1310428800000,"13-20","female",2]),Objects.addFields({ event : "impression"},[".#time:hour",".ageRange",".gender","count"],[1310432400000,"21+","male",2])];
		utest.Assert.same(expected,data,null,null,{ fileName : "TestDataProcessor.hx", lineNumber : 148, className : "rg.data.TestDataProcessor", methodName : "testTransform"});
		$s.pop();
	});
	sources.load();
	$s.pop();
}
rg.data.TestDataProcessor.prototype.__class__ = rg.data.TestDataProcessor;
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
utest.ui.common.IReport = function() { }
utest.ui.common.IReport.__name__ = ["utest","ui","common","IReport"];
utest.ui.common.IReport.prototype.displaySuccessResults = null;
utest.ui.common.IReport.prototype.displayHeader = null;
utest.ui.common.IReport.prototype.setHandler = null;
utest.ui.common.IReport.prototype.__class__ = utest.ui.common.IReport;
if(!utest.ui.text) utest.ui.text = {}
utest.ui.text.HtmlReport = function(runner,outputHandler,traceRedirected) {
	if( runner === $_ ) return;
	$s.push("utest.ui.text.HtmlReport::new");
	var $spos = $s.length;
	if(traceRedirected == null) traceRedirected = true;
	this.aggregator = new utest.ui.common.ResultAggregator(runner,true);
	runner.onStart.add($closure(this,"start"));
	this.aggregator.onComplete.add($closure(this,"complete"));
	if(null == outputHandler) this.setHandler($closure(this,"_handler")); else this.setHandler(outputHandler);
	if(traceRedirected) this.redirectTrace();
	this.displaySuccessResults = utest.ui.common.SuccessResultsDisplayMode.AlwaysShowSuccessResults;
	this.displayHeader = utest.ui.common.HeaderDisplayMode.AlwaysShowHeader;
	$s.pop();
}
utest.ui.text.HtmlReport.__name__ = ["utest","ui","text","HtmlReport"];
utest.ui.text.HtmlReport.prototype.traceRedirected = null;
utest.ui.text.HtmlReport.prototype.displaySuccessResults = null;
utest.ui.text.HtmlReport.prototype.displayHeader = null;
utest.ui.text.HtmlReport.prototype.handler = null;
utest.ui.text.HtmlReport.prototype.aggregator = null;
utest.ui.text.HtmlReport.prototype.oldTrace = null;
utest.ui.text.HtmlReport.prototype._traces = null;
utest.ui.text.HtmlReport.prototype.setHandler = function(handler) {
	$s.push("utest.ui.text.HtmlReport::setHandler");
	var $spos = $s.length;
	this.handler = handler;
	$s.pop();
}
utest.ui.text.HtmlReport.prototype.redirectTrace = function() {
	$s.push("utest.ui.text.HtmlReport::redirectTrace");
	var $spos = $s.length;
	if(this.traceRedirected) {
		$s.pop();
		return;
	}
	this._traces = [];
	this.oldTrace = haxe.Log.trace;
	haxe.Log.trace = $closure(this,"_trace");
	$s.pop();
}
utest.ui.text.HtmlReport.prototype.restoreTrace = function() {
	$s.push("utest.ui.text.HtmlReport::restoreTrace");
	var $spos = $s.length;
	if(!this.traceRedirected) {
		$s.pop();
		return;
	}
	haxe.Log.trace = this.oldTrace;
	$s.pop();
}
utest.ui.text.HtmlReport.prototype._traceTime = null;
utest.ui.text.HtmlReport.prototype._trace = function(v,infos) {
	$s.push("utest.ui.text.HtmlReport::_trace");
	var $spos = $s.length;
	var time = haxe.Timer.stamp();
	var delta = this._traceTime == null?0:time - this._traceTime;
	this._traces.push({ msg : StringTools.htmlEscape(Std.string(v)), infos : infos, time : time - this.startTime, delta : delta, stack : haxe.Stack.callStack()});
	this._traceTime = haxe.Timer.stamp();
	$s.pop();
}
utest.ui.text.HtmlReport.prototype.startTime = null;
utest.ui.text.HtmlReport.prototype.start = function(e) {
	$s.push("utest.ui.text.HtmlReport::start");
	var $spos = $s.length;
	this.startTime = haxe.Timer.stamp();
	$s.pop();
}
utest.ui.text.HtmlReport.prototype.cls = function(stats) {
	$s.push("utest.ui.text.HtmlReport::cls");
	var $spos = $s.length;
	if(stats.hasErrors) {
		$s.pop();
		return "error";
	} else if(stats.hasFailures) {
		$s.pop();
		return "failure";
	} else if(stats.hasWarnings) {
		$s.pop();
		return "warn";
	} else {
		$s.pop();
		return "ok";
	}
	$s.pop();
}
utest.ui.text.HtmlReport.prototype.resultNumbers = function(buf,stats) {
	$s.push("utest.ui.text.HtmlReport::resultNumbers");
	var $spos = $s.length;
	var numbers = [];
	if(stats.assertations == 1) numbers.push("<strong>1</strong> test"); else numbers.push("<strong>" + stats.assertations + "</strong> tests");
	if(stats.successes != stats.assertations) {
		if(stats.successes == 1) numbers.push("<strong>1</strong> pass"); else if(stats.successes > 0) numbers.push("<strong>" + stats.successes + "</strong> passes");
	}
	if(stats.errors == 1) numbers.push("<strong>1</strong> error"); else if(stats.errors > 0) numbers.push("<strong>" + stats.errors + "</strong> errors");
	if(stats.failures == 1) numbers.push("<strong>1</strong> failure"); else if(stats.failures > 0) numbers.push("<strong>" + stats.failures + "</strong> failures");
	if(stats.warnings == 1) numbers.push("<strong>1</strong> warning"); else if(stats.warnings > 0) numbers.push("<strong>" + stats.warnings + "</strong> warnings");
	buf.b[buf.b.length] = numbers.join(", ");
	$s.pop();
}
utest.ui.text.HtmlReport.prototype.blockNumbers = function(buf,stats) {
	$s.push("utest.ui.text.HtmlReport::blockNumbers");
	var $spos = $s.length;
	buf.b[buf.b.length] = "<div class=\"" + this.cls(stats) + "bg statnumbers\">";
	this.resultNumbers(buf,stats);
	buf.b[buf.b.length] = "</div>";
	$s.pop();
}
utest.ui.text.HtmlReport.prototype.formatStack = function(stack,addNL) {
	$s.push("utest.ui.text.HtmlReport::formatStack");
	var $spos = $s.length;
	if(addNL == null) addNL = true;
	var parts = [];
	var nl = addNL?"\n":"";
	var last = null;
	var count = 1;
	var _g = 0, _g1 = haxe.Stack.toString(stack).split("\n");
	while(_g < _g1.length) {
		var part = _g1[_g];
		++_g;
		if(StringTools.trim(part) == "") continue;
		if(-1 < part.indexOf("Called from utest.")) continue;
		if(part == last) parts[parts.length - 1] = part + " (#" + ++count + ")"; else {
			count = 1;
			parts.push(last = part);
		}
	}
	var s = "<ul><li>" + parts.join("</li>" + nl + "<li>") + "</li></ul>" + nl;
	var $tmp = "<div>" + s + "</div>" + nl;
	$s.pop();
	return $tmp;
	$s.pop();
}
utest.ui.text.HtmlReport.prototype.addFixture = function(buf,result,name,isOk) {
	$s.push("utest.ui.text.HtmlReport::addFixture");
	var $spos = $s.length;
	if(utest.ui.common.ReportTools.skipResult(this,result.stats,isOk)) {
		$s.pop();
		return;
	}
	buf.b[buf.b.length] = "<li class=\"fixture\"><div class=\"li\">";
	buf.b[buf.b.length] = "<span class=\"" + this.cls(result.stats) + "bg fixtureresult\">";
	if(result.stats.isOk) buf.b[buf.b.length] = "OK "; else if(result.stats.hasErrors) buf.b[buf.b.length] = "ERROR "; else if(result.stats.hasFailures) buf.b[buf.b.length] = "FAILURE "; else if(result.stats.hasWarnings) buf.b[buf.b.length] = "WARNING ";
	buf.b[buf.b.length] = "</span>";
	buf.b[buf.b.length] = "<div class=\"fixturedetails\">";
	buf.b[buf.b.length] = "<strong>" + name + "</strong>";
	buf.b[buf.b.length] = ": ";
	this.resultNumbers(buf,result.stats);
	var messages = [];
	var $it0 = result.iterator();
	while( $it0.hasNext() ) {
		var assertation = $it0.next();
		var $e = (assertation);
		switch( $e[1] ) {
		case 0:
			var pos = $e[2];
			break;
		case 1:
			var pos = $e[3], msg = $e[2];
			messages.push("<strong>line " + pos.lineNumber + "</strong>: <em>" + StringTools.htmlEscape(msg) + "</em>");
			break;
		case 2:
			var s = $e[3], e = $e[2];
			messages.push("<strong>error</strong>: <em>" + this.getErrorDescription(e) + "</em>\n<br/><strong>stack</strong>:" + this.getErrorStack(s,e));
			break;
		case 3:
			var s = $e[3], e = $e[2];
			messages.push("<strong>setup error</strong>: " + this.getErrorDescription(e) + "\n<br/><strong>stack</strong>:" + this.getErrorStack(s,e));
			break;
		case 4:
			var s = $e[3], e = $e[2];
			messages.push("<strong>tear-down error</strong>: " + this.getErrorDescription(e) + "\n<br/><strong>stack</strong>:" + this.getErrorStack(s,e));
			break;
		case 5:
			var s = $e[3], missedAsyncs = $e[2];
			messages.push("<strong>missed async call(s)</strong>: " + missedAsyncs);
			break;
		case 6:
			var s = $e[3], e = $e[2];
			messages.push("<strong>async error</strong>: " + this.getErrorDescription(e) + "\n<br/><strong>stack</strong>:" + this.getErrorStack(s,e));
			break;
		case 7:
			var msg = $e[2];
			messages.push(StringTools.htmlEscape(msg));
			break;
		}
	}
	if(messages.length > 0) {
		buf.b[buf.b.length] = "<div class=\"testoutput\">";
		buf.b[buf.b.length] = messages.join("<br/>");
		buf.b[buf.b.length] = "</div>\n";
	}
	buf.b[buf.b.length] = "</div>\n";
	buf.b[buf.b.length] = "</div></li>\n";
	$s.pop();
}
utest.ui.text.HtmlReport.prototype.getErrorDescription = function(e) {
	$s.push("utest.ui.text.HtmlReport::getErrorDescription");
	var $spos = $s.length;
	var $tmp = Std.string(e);
	$s.pop();
	return $tmp;
	$s.pop();
}
utest.ui.text.HtmlReport.prototype.getErrorStack = function(s,e) {
	$s.push("utest.ui.text.HtmlReport::getErrorStack");
	var $spos = $s.length;
	var $tmp = this.formatStack(s);
	$s.pop();
	return $tmp;
	$s.pop();
}
utest.ui.text.HtmlReport.prototype.addClass = function(buf,result,name,isOk) {
	$s.push("utest.ui.text.HtmlReport::addClass");
	var $spos = $s.length;
	if(utest.ui.common.ReportTools.skipResult(this,result.stats,isOk)) {
		$s.pop();
		return;
	}
	buf.b[buf.b.length] = "<li>";
	buf.b[buf.b.length] = "<h2 class=\"classname\">" + name + "</h2>";
	this.blockNumbers(buf,result.stats);
	buf.b[buf.b.length] = "<ul>\n";
	var _g = 0, _g1 = result.methodNames();
	while(_g < _g1.length) {
		var mname = _g1[_g];
		++_g;
		this.addFixture(buf,result.get(mname),mname,isOk);
	}
	buf.b[buf.b.length] = "</ul>\n";
	buf.b[buf.b.length] = "</li>\n";
	$s.pop();
}
utest.ui.text.HtmlReport.prototype.addPackages = function(buf,result,isOk) {
	$s.push("utest.ui.text.HtmlReport::addPackages");
	var $spos = $s.length;
	if(utest.ui.common.ReportTools.skipResult(this,result.stats,isOk)) {
		$s.pop();
		return;
	}
	buf.b[buf.b.length] = "<ul id=\"utest-results-packages\">\n";
	var _g = 0, _g1 = result.packageNames(false);
	while(_g < _g1.length) {
		var name = _g1[_g];
		++_g;
		this.addPackage(buf,result.getPackage(name),name,isOk);
	}
	buf.b[buf.b.length] = "</ul>\n";
	$s.pop();
}
utest.ui.text.HtmlReport.prototype.addPackage = function(buf,result,name,isOk) {
	$s.push("utest.ui.text.HtmlReport::addPackage");
	var $spos = $s.length;
	if(utest.ui.common.ReportTools.skipResult(this,result.stats,isOk)) {
		$s.pop();
		return;
	}
	if(name == "" && result.classNames().length == 0) {
		$s.pop();
		return;
	}
	buf.b[buf.b.length] = "<li>";
	buf.b[buf.b.length] = "<h2>" + name + "</h2>";
	this.blockNumbers(buf,result.stats);
	buf.b[buf.b.length] = "<ul>\n";
	var _g = 0, _g1 = result.classNames();
	while(_g < _g1.length) {
		var cname = _g1[_g];
		++_g;
		this.addClass(buf,result.getClass(cname),cname,isOk);
	}
	buf.b[buf.b.length] = "</ul>\n";
	buf.b[buf.b.length] = "</li>\n";
	$s.pop();
}
utest.ui.text.HtmlReport.prototype.getHeader = function() {
	$s.push("utest.ui.text.HtmlReport::getHeader");
	var $spos = $s.length;
	var buf = new StringBuf();
	if(!utest.ui.common.ReportTools.hasHeader(this,this.result.stats)) {
		$s.pop();
		return "";
	}
	var end = haxe.Timer.stamp();
	var time = Std["int"]((end - this.startTime) * 1000) / 1000;
	var msg = "TEST OK";
	if(this.result.stats.hasErrors) msg = "TEST ERRORS"; else if(this.result.stats.hasFailures) msg = "TEST FAILED"; else if(this.result.stats.hasWarnings) msg = "WARNING REPORTED";
	buf.b[buf.b.length] = "<h1 class=\"" + this.cls(this.result.stats) + "bg header\">" + msg + "</h1>\n";
	buf.b[buf.b.length] = "<div class=\"headerinfo\">";
	this.resultNumbers(buf,this.result.stats);
	buf.b[buf.b.length] = " performed on <strong>" + utest.ui.text.HtmlReport.platform + "</strong>, executed in <strong> " + time + " sec. </strong></div >\n ";
	var $tmp = buf.b.join("");
	$s.pop();
	return $tmp;
	$s.pop();
}
utest.ui.text.HtmlReport.prototype.getTrace = function() {
	$s.push("utest.ui.text.HtmlReport::getTrace");
	var $spos = $s.length;
	var buf = new StringBuf();
	if(this._traces == null || this._traces.length == 0) {
		$s.pop();
		return "";
	}
	buf.b[buf.b.length] = "<div class=\"trace\"><h2>traces</h2><ol>";
	var _g = 0, _g1 = this._traces;
	while(_g < _g1.length) {
		var t = _g1[_g];
		++_g;
		buf.b[buf.b.length] = "<li><div class=\"li\">";
		var stack = StringTools.replace(this.formatStack(t.stack,false),"'","\\'");
		var method = "<span class=\"tracepackage\">" + t.infos.className + "</span><br/>" + t.infos.methodName + "(" + t.infos.lineNumber + ")";
		buf.b[buf.b.length] = "<span class=\"tracepos\" onmouseover=\"utestTooltip(this.parentNode, '" + stack + "')\" onmouseout=\"utestRemoveTooltip()\">";
		buf.b[buf.b.length] = method;
		buf.b[buf.b.length] = "</span><span class=\"tracetime\">";
		buf.b[buf.b.length] = "@ " + this.formatTime(t.time);
		if(Math.round(t.delta * 1000) > 0) buf.b[buf.b.length] = ", ~" + this.formatTime(t.delta);
		buf.b[buf.b.length] = "</span><span class=\"tracemsg\">";
		buf.b[buf.b.length] = StringTools.replace(StringTools.trim(t.msg),"\n","<br/>\n");
		buf.b[buf.b.length] = "</span><div class=\"clr\"></div></div></li>";
	}
	buf.b[buf.b.length] = "</ol></div>";
	var $tmp = buf.b.join("");
	$s.pop();
	return $tmp;
	$s.pop();
}
utest.ui.text.HtmlReport.prototype.getResults = function() {
	$s.push("utest.ui.text.HtmlReport::getResults");
	var $spos = $s.length;
	var buf = new StringBuf();
	this.addPackages(buf,this.result,this.result.stats.isOk);
	var $tmp = buf.b.join("");
	$s.pop();
	return $tmp;
	$s.pop();
}
utest.ui.text.HtmlReport.prototype.getAll = function() {
	$s.push("utest.ui.text.HtmlReport::getAll");
	var $spos = $s.length;
	if(!utest.ui.common.ReportTools.hasOutput(this,this.result.stats)) {
		$s.pop();
		return "";
	} else {
		var $tmp = this.getHeader() + this.getTrace() + this.getResults();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
utest.ui.text.HtmlReport.prototype.getHtml = function(title) {
	$s.push("utest.ui.text.HtmlReport::getHtml");
	var $spos = $s.length;
	if(null == title) title = "utest: " + utest.ui.text.HtmlReport.platform;
	var s = this.getAll();
	if("" == s) {
		$s.pop();
		return "";
	} else {
		var $tmp = this.wrapHtml(title,s);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
utest.ui.text.HtmlReport.prototype.result = null;
utest.ui.text.HtmlReport.prototype.complete = function(result) {
	$s.push("utest.ui.text.HtmlReport::complete");
	var $spos = $s.length;
	this.result = result;
	this.handler(this);
	this.restoreTrace();
	$s.pop();
}
utest.ui.text.HtmlReport.prototype.formatTime = function(t) {
	$s.push("utest.ui.text.HtmlReport::formatTime");
	var $spos = $s.length;
	var $tmp = Math.round(t * 1000) + " ms";
	$s.pop();
	return $tmp;
	$s.pop();
}
utest.ui.text.HtmlReport.prototype.cssStyle = function() {
	$s.push("utest.ui.text.HtmlReport::cssStyle");
	var $spos = $s.length;
	$s.pop();
	return "body, dd, dt {\r\n\tfont-family: Verdana, Arial, Sans-serif;\r\n\tfont-size: 12px;\r\n}\r\ndl {\r\n\twidth: 180px;\r\n}\r\ndd, dt {\r\n\tmargin : 0;\r\n\tpadding : 2px 5px;\r\n\tborder-top: 1px solid #f0f0f0;\r\n\tborder-left: 1px solid #f0f0f0;\r\n\tborder-right: 1px solid #CCCCCC;\r\n\tborder-bottom: 1px solid #CCCCCC;\r\n}\r\ndd.value {\r\n\ttext-align: center;\r\n\tbackground-color: #eeeeee;\r\n}\r\ndt {\r\n\ttext-align: left;\r\n\tbackground-color: #e6e6e6;\r\n\tfloat: left;\r\n\twidth: 100px;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\nh1 {\r\n\ttext-align: center;\r\n\tfont-weight: bold;\r\n\tpadding: 5px 0 4px 0;\r\n\tfont-family: Arial, Sans-serif;\r\n\tfont-size: 18px;\r\n\tborder-top: 1px solid #f0f0f0;\r\n\tborder-left: 1px solid #f0f0f0;\r\n\tborder-right: 1px solid #CCCCCC;\r\n\tborder-bottom: 1px solid #CCCCCC;\r\n\tmargin: 0 2px 0px 2px;\r\n}\r\n\r\nh2 {\r\n\tfont-weight: bold;\r\n\tpadding: 2px 0 2px 8px;\r\n\tfont-family: Arial, Sans-serif;\r\n\tfont-size: 13px;\r\n\tborder-top: 1px solid #f0f0f0;\r\n\tborder-left: 1px solid #f0f0f0;\r\n\tborder-right: 1px solid #CCCCCC;\r\n\tborder-bottom: 1px solid #CCCCCC;\r\n\tmargin: 0 0 0px 0;\r\n\tbackground-color: #FFFFFF;\r\n\tcolor: #777777;\r\n}\r\n\r\nh2.classname {\r\n\tcolor: #000000;\r\n}\r\n\r\n.okbg {\r\n\tbackground-color: #66FF55;\r\n}\r\n.errorbg {\r\n\tbackground-color: #CC1100;\r\n}\r\n.failurebg {\r\n\tbackground-color: #EE3322;\r\n}\r\n.warnbg {\r\n\tbackground-color: #FFCC99;\r\n}\r\n.headerinfo {\r\n\ttext-align: right;\r\n\tfont-size: 11px;\r\n\tfont - color: 0xCCCCCC;\r\n\tmargin: 0 2px 5px 2px;\r\n\tborder-left: 1px solid #f0f0f0;\r\n\tborder-right: 1px solid #CCCCCC;\r\n\tborder-bottom: 1px solid #CCCCCC;\r\n\tpadding: 2px;\r\n}\r\n\r\nli {\r\n\tpadding: 4px;\r\n\tmargin: 2px;\r\n\tborder-top: 1px solid #f0f0f0;\r\n\tborder-left: 1px solid #f0f0f0;\r\n\tborder-right: 1px solid #CCCCCC;\r\n\tborder-bottom: 1px solid #CCCCCC;\r\n\tbackground-color: #e6e6e6;\r\n}\r\n\r\nli.fixture {\r\n\tbackground-color: #f6f6f6;\r\n\tpadding-bottom: 6px;\r\n}\r\n\r\ndiv.fixturedetails {\r\n\tpadding-left: 108px;\r\n}\r\n\r\nul {\r\n\tpadding: 0;\r\n\tmargin: 6px 0 0 0;\r\n\tlist-style-type: none;\r\n}\r\n\r\nol {\r\n\tpadding: 0 0 0 28px;\r\n\tmargin: 0px 0 0 0;\r\n}\r\n\r\n.statnumbers {\r\n\tpadding: 2px 8px;\r\n}\r\n\r\n.fixtureresult {\r\n\twidth: 100px;\r\n\ttext-align: center;\r\n\tdisplay: block;\r\n\tfloat: left;\r\n\tfont-weight: bold;\r\n\tpadding: 1px;\r\n\tmargin: 0 0 0 0;\r\n}\r\n\r\n.testoutput {\r\n\tborder: 1px dashed #CCCCCC;\r\n\tmargin: 4px 0 0 0;\r\n\tpadding: 4px 8px;\r\n\tbackground-color: #eeeeee;\r\n}\r\n\r\nspan.tracepos, span.traceposempty {\r\n\tdisplay: block;\r\n\tfloat: left;\r\n\tfont-weight: bold;\r\n\tfont-size: 9px;\r\n\twidth: 170px;\r\n\tmargin: 2px 0 0 2px;\r\n}\r\n\r\nspan.tracepos:hover {\r\n\tcursor : pointer;\r\n\tbackground-color: #ffff99;\r\n}\r\n\r\nspan.tracemsg {\r\n\tdisplay: block;\r\n\tmargin-left: 180px;\r\n\tbackground-color: #eeeeee;\r\n\tpadding: 7px;\r\n}\r\n\r\nspan.tracetime {\r\n\tdisplay: block;\r\n\tfloat: right;\r\n\tmargin: 2px;\r\n\tfont-size: 9px;\r\n\tcolor: #777777;\r\n}\r\n\r\n\r\ndiv.trace ol {\r\n\tpadding: 0 0 0 40px;\r\n\tcolor: #777777;\r\n}\r\n\r\ndiv.trace li {\r\n\tpadding: 0;\r\n}\r\n\r\ndiv.trace li div.li {\r\n\tcolor: #000000;\r\n}\r\n\r\ndiv.trace h2 {\r\n\tmargin: 0 2px 0px 2px;\r\n\tpadding-left: 4px;\r\n}\r\n\r\n.tracepackage {\r\n\tcolor: #777777;\r\n\tfont-weight: normal;\r\n}\r\n\r\n.clr {\r\n\tclear: both;\r\n}\r\n\r\n#utesttip {\r\n\tmargin-top: -3px;\r\n\tmargin-left: 170px;\r\n\tfont-size: 9px;\r\n}\r\n\r\n#utesttip li {\r\n\tmargin: 0;\r\n\tbackground-color: #ffff99;\r\n\tpadding: 2px 4px;\r\n\tborder: 0;\r\n\tborder-bottom: 1px dashed #ffff33;\r\n}";
	$s.pop();
}
utest.ui.text.HtmlReport.prototype.jsScript = function() {
	$s.push("utest.ui.text.HtmlReport::jsScript");
	var $spos = $s.length;
	$s.pop();
	return "function utestTooltip(ref, text) {\r\n\tvar el = document.getElementById(\"utesttip\");\r\n\tif(!el) {\r\n\t\tvar el = document.createElement(\"div\")\r\n\t\tel.id = \"utesttip\";\r\n\t\tel.style.position = \"absolute\";\r\n\t\tdocument.body.appendChild(el)\r\n\t}\r\n\tvar p = utestFindPos(ref);\r\n\tel.style.left = (4 + p[0]) + \"px\";\r\n\tel.style.top = (p[1] - 1) + \"px\";\r\n\tel.innerHTML =  text;\r\n}\r\n\r\nfunction utestFindPos(el) {\r\n\tvar left = 0;\r\n\tvar top = 0;\r\n\tdo {\r\n\t\tleft += el.offsetLeft;\r\n\t\ttop += el.offsetTop;\r\n\t} while(el = el.offsetParent)\r\n\treturn [left, top];\r\n}\r\n\r\nfunction utestRemoveTooltip() {\r\n\tvar el = document.getElementById(\"utesttip\")\r\n\tif(el)\r\n\t\tdocument.body.removeChild(el)\r\n}";
	$s.pop();
}
utest.ui.text.HtmlReport.prototype.wrapHtml = function(title,s) {
	$s.push("utest.ui.text.HtmlReport::wrapHtml");
	var $spos = $s.length;
	var $tmp = "<head>\n<meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\" />\n<title>" + title + "</title>\r\n\t\t\t<style type=\"text/css\">" + this.cssStyle() + "</style>\r\n\t\t\t<script type=\"text/javascript\">\n" + this.jsScript() + "\n</script>\n</head>\r\n\t\t\t<body>\n" + s + "\n</body>\n</html>";
	$s.pop();
	return $tmp;
	$s.pop();
}
utest.ui.text.HtmlReport.prototype._handler = function(report) {
	$s.push("utest.ui.text.HtmlReport::_handler");
	var $spos = $s.length;
	var isDef = function(v) {
		$s.push("utest.ui.text.HtmlReport::_handler@660");
		var $spos = $s.length;
		var $tmp = typeof v != 'undefined';
		$s.pop();
		return $tmp;
		$s.pop();
	};
	var head = js.Lib.document.getElementsByTagName("head")[0];
	var script = js.Lib.document.createElement("script");
	script.type = "text/javascript";
	var sjs = report.jsScript();
	if(isDef(script.text)) script.text = sjs; else script.innerHTML = sjs;
	head.appendChild(script);
	var style = js.Lib.document.createElement("style");
	style.type = "text/css";
	var scss = report.cssStyle();
	if(isDef(style.styleSheet)) style.styleSheet.cssText = scss; else if(isDef(style.cssText)) style.cssText = scss; else if(isDef(style.innerText)) style.innerText = scss; else style.innerHTML = scss;
	head.appendChild(style);
	var el = js.Lib.document.getElementById("utest-results");
	if(null == el) {
		el = js.Lib.document.createElement("div");
		el.id = "utest-results";
		js.Lib.document.body.appendChild(el);
	}
	el.innerHTML = report.getAll();
	$s.pop();
}
utest.ui.text.HtmlReport.prototype.__class__ = utest.ui.text.HtmlReport;
utest.ui.text.HtmlReport.__interfaces__ = [utest.ui.common.IReport];
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
	var d = this.transformData(dps), table = this.container.append("table").classed().add("pivot-table"), thead = table.append("thead"), leftspan = d.rows.length > 0?d.rows[0].values.length:0, color = thx.color.Hsl.interpolatef(this.colorStart,this.colorEnd);
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
	var column_headers = [], row_headers = [], columns = [], rows = [], tcalc = { min : Math.POSITIVE_INFINITY, max : Math.NEGATIVE_INFINITY, tot : 0.0};
	var variable;
	var _g1 = 0, _g = Ints.min(1,this.columnVariables.length);
	while(_g1 < _g) {
		var i = _g1++;
		variable = this.columnVariables[i];
		column_headers.push(variable.type);
		var _g2 = 0, _g3 = variable.range();
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
			var _g3 = 0, _g4 = variable.range();
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
		var column = [columns[i]], ccalc = { min : Math.POSITIVE_INFINITY, max : Math.NEGATIVE_INFINITY, tot : 0.0};
		column[0].stats = ccalc;
		var _g2 = 0, _g3 = Arrays.filter(dps,(function(column) {
			$s.push("rg.view.html.widget.PivotTable::transformData@377");
			var $spos = $s.length;
			var $tmp = function(dp) {
				$s.push("rg.view.html.widget.PivotTable::transformData@377@377");
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
			if(v < ccalc.min) {
				ccalc.min = v;
				if(v < tcalc.min) tcalc.min = v;
			}
			if(v > ccalc.max) {
				ccalc.max = v;
				if(v > tcalc.max) tcalc.max = v;
			}
			ccalc.tot += v;
		}
		tcalc.tot += ccalc.tot;
	}
	var _g1 = 0, _g = Ints.min(1,this.rowVariables.length);
	while(_g1 < _g) {
		var i = _g1++;
		variable = this.rowVariables[i];
		row_headers.push(variable.type);
		var _g2 = 0, _g3 = variable.range();
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
			var _g3 = 0, _g4 = variable.range();
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
		row[0].stats = { min : Math.POSITIVE_INFINITY, max : Math.NEGATIVE_INFINITY, tot : 0.0};
		row[0].cells = [];
		var rdps = Arrays.filter(dps,(function(row) {
			$s.push("rg.view.html.widget.PivotTable::transformData@446");
			var $spos = $s.length;
			var $tmp = function(d) {
				$s.push("rg.view.html.widget.PivotTable::transformData@446@446");
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
				$s.push("rg.view.html.widget.PivotTable::transformData@458");
				var $spos = $s.length;
				var $tmp = function(dp) {
					$s.push("rg.view.html.widget.PivotTable::transformData@458@458");
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
			if(v < row[0].stats.min) row[0].stats.min = v;
			if(v > row[0].stats.max) row[0].stats.max = v;
			row[0].stats.tot += v;
		}
	}
	var $tmp = { column_headers : column_headers, row_headers : row_headers, columns : columns, rows : rows, stats : tcalc};
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.html.widget.PivotTable.prototype.__class__ = rg.view.html.widget.PivotTable;
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
	var o = window.ReportGrid;
	if(null == o) rg.JSBridge.log(new thx.error.Error("unable to initialize the ReportGrid visualization system, be sure to have loaded already the 'reportgrid-core.js' script",null,null,{ fileName : "JSBridge.hx", lineNumber : 31, className : "rg.JSBridge", methodName : "main"}).toString());
	var app = new rg.controller.App(o);
	o.viz = function(el,options,type) {
		$s.push("rg.JSBridge::main@37");
		var $spos = $s.length;
		try {
			var $tmp = app.visualization(rg.JSBridge.select(el),rg.JSBridge.chartopt(options,type));
			$s.pop();
			return $tmp;
		} catch( e ) {
			$e = [];
			while($s.length >= $spos) $e.unshift($s.pop());
			$s.push($e[0]);
			rg.JSBridge.log(Std.string(e));
			$s.pop();
			return null;
		}
		$s.pop();
	};
	o.lineChart = function(el,options) {
		$s.push("rg.JSBridge::main@48");
		var $spos = $s.length;
		var $tmp = o.viz(el,options,"linechart");
		$s.pop();
		return $tmp;
		$s.pop();
	};
	o.pieChart = function(el,options) {
		$s.push("rg.JSBridge::main@49");
		var $spos = $s.length;
		var $tmp = o.viz(el,options,"piechart");
		$s.pop();
		return $tmp;
		$s.pop();
	};
	o.pivotTable = function(el,options) {
		$s.push("rg.JSBridge::main@50");
		var $spos = $s.length;
		var $tmp = o.viz(el,options,"pivottable");
		$s.pop();
		return $tmp;
		$s.pop();
	};
	o.leaderBoard = function(el,options) {
		$s.push("rg.JSBridge::main@51");
		var $spos = $s.length;
		var $tmp = o.viz(el,options,"leaderboard");
		$s.pop();
		return $tmp;
		$s.pop();
	};
	o.barChart = function(el,options) {
		$s.push("rg.JSBridge::main@52");
		var $spos = $s.length;
		var $tmp = o.viz(el,options,"barchart");
		$s.pop();
		return $tmp;
		$s.pop();
	};
	o.format = Dynamics.format;
	o.compare = Dynamics.compare;
	o.dump = Dynamics.string;
	o.symbol = rg.view.svg.util.SymbolCache.cache;
	o.date = { range : function(a,b,p) {
		$s.push("rg.JSBridge::main@60");
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
	o.humanize = function(v) {
		$s.push("rg.JSBridge::main@78");
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
	o.math = { random : $closure(new thx.math.Random(666),"float")};
	$s.pop();
}
rg.JSBridge.select = function(el) {
	$s.push("rg.JSBridge::select");
	var $spos = $s.length;
	var s = Std["is"](el,String)?thx.js.Dom.select(el):thx.js.Dom.selectNode(el);
	if(s.empty()) throw new thx.error.Error("invalid container '{0}'",el,null,{ fileName : "JSBridge.hx", lineNumber : 94, className : "rg.JSBridge", methodName : "select"});
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
	o.options.visualization = viz;
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
	$s.pop();
}
rg.view.html.widget.Leadeboard.prototype.setVariables = function(variableIndependents,variableDependents) {
	$s.push("rg.view.html.widget.Leadeboard::setVariables");
	var $spos = $s.length;
	this.variableDependent = variableDependents[0];
	this.variableIndependent = variableIndependents[0];
	$s.pop();
}
rg.view.html.widget.Leadeboard.prototype.data = function(dps) {
	$s.push("rg.view.html.widget.Leadeboard::data");
	var $spos = $s.length;
	var name = this.variableDependent.type;
	if(null != this.sortDataPoint) dps.sort(this.sortDataPoint);
	var stats = this.stats = rg.util.DataPoints.stats(dps,this.variableDependent.type);
	var choice = this.list.selectAll("li").data(dps,$closure(this,"id"));
	var enter = choice.enter().append("li").style("background-size").stringf(function(d,i) {
		$s.push("rg.view.html.widget.Leadeboard::data@86");
		var $spos = $s.length;
		var $tmp = 100 * Reflect.field(d,name) / stats.tot + "%";
		$s.pop();
		return $tmp;
		$s.pop();
	}).text().stringf($closure(this,"description")).attr("title").stringf($closure(this,"title"));
	if(null != this.click) enter.on("click.user",$closure(this,"onClick"));
	if(this.animated) enter.style("opacity")["float"](0).eachNode($closure(this,"fadeIn")); else enter.style("opacity")["float"](1);
	choice.update().select("li").style("background-size").stringf(function(d,i) {
		$s.push("rg.view.html.widget.Leadeboard::data@102");
		var $spos = $s.length;
		var $tmp = 100 * Reflect.field(d,name) / stats.tot + "%";
		$s.pop();
		return $tmp;
		$s.pop();
	}).text().stringf($closure(this,"description")).attr("title").stringf($closure(this,"title"));
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
		$s.push("rg.view.html.widget.Leadeboard::fadeIn@130");
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
	var kp = new thx.collections.Set();
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
		if(null != (ordinal = Std["is"](v,rg.data.AxisOrdinal)?v:null)) ctx = new rg.data.VariableIndependentContext(v,0 == ordinal.getValues().length); else if(Std["is"](v.axis,rg.data.AxisTime)) ctx = new rg.data.VariableIndependentContext(v,false); else ctx = new rg.data.VariableIndependentContext(v,null == v.max || null == v.min);
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
		if(units < 28) {
			$s.pop();
			return true;
		}
		if(units < 121) {
			var d = Date.fromTime(value).getDate(), delta = 4;
			var $tmp = rg.util.Periodicity.firstInSeries("month",value) || d > delta && d < 31 - delta && rg.util.Periodicity.firstInSeries("week",value);
			$s.pop();
			return $tmp;
		}
		var $tmp = rg.util.Periodicity.firstInSeries("month",value);
		$s.pop();
		return $tmp;
	case "week":
		if(units < 28) {
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
		$s.push("rg.data.AxisTime::ticks@82");
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
			$s.push("rg.util.Periodicity::range@104");
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
			$r = 0.0;
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
		$s.push("rg.util.Periodicity::minForPeriodicityInSeries@137");
		var $spos = $s.length;
		var o = Reflect.field(d,periodicity);
		var $tmp = Arrays.floatMin(Reflect.fields(o),function(d1) {
			$s.push("rg.util.Periodicity::minForPeriodicityInSeries@137@139");
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
		$s.push("rg.util.Periodicity::maxForPeriodicityInSeries@145");
		var $spos = $s.length;
		var o = Reflect.field(d,periodicity);
		var $tmp = Arrays.floatMax(Reflect.fields(o),function(d1) {
			$s.push("rg.util.Periodicity::maxForPeriodicityInSeries@145@147");
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
				$s.push("rg.util.Periodicity::formatf@155");
				var $spos = $s.length;
				$s.pop();
				return "all time";
				$s.pop();
			};
			break;
		case "minute":case "hour":
			$r = function(v) {
				$s.push("rg.util.Periodicity::formatf@156");
				var $spos = $s.length;
				var $tmp = thx.culture.FormatDate.timeShort(Date.fromTime(v));
				$s.pop();
				return $tmp;
				$s.pop();
			};
			break;
		case "day":case "week":
			$r = function(v) {
				$s.push("rg.util.Periodicity::formatf@157");
				var $spos = $s.length;
				var $tmp = thx.culture.FormatDate.dateShort(Date.fromTime(v));
				$s.pop();
				return $tmp;
				$s.pop();
			};
			break;
		case "month":
			$r = function(v) {
				$s.push("rg.util.Periodicity::formatf@158");
				var $spos = $s.length;
				var $tmp = thx.culture.FormatDate.yearMonth(Date.fromTime(v));
				$s.pop();
				return $tmp;
				$s.pop();
			};
			break;
		case "year":
			$r = function(v) {
				$s.push("rg.util.Periodicity::formatf@159");
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
		case "week":
			$r = rg.util.Periodicity.parsePair("6 weeks ago","today");
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
if(!rg.view.svg.widget) rg.view.svg.widget = {}
rg.view.svg.widget.TickmarksOrtho = function(panel,anchor) {
	if( panel === $_ ) return;
	$s.push("rg.view.svg.widget.TickmarksOrtho::new");
	var $spos = $s.length;
	rg.view.svg.panel.Layer.call(this,panel);
	this.anchor = anchor;
	this.displayMinor = true;
	this.displayMajor = true;
	this.displayLabel = true;
	this.lengthMinor = 2;
	this.lengthMajor = 5;
	this.paddingMinor = 1;
	this.paddingMajor = 1;
	this.paddingLabel = 10;
	this.g.classed().add("tickmarks");
	this.initf();
	$s.pop();
}
rg.view.svg.widget.TickmarksOrtho.__name__ = ["rg","view","svg","widget","TickmarksOrtho"];
rg.view.svg.widget.TickmarksOrtho.__super__ = rg.view.svg.panel.Layer;
for(var k in rg.view.svg.panel.Layer.prototype ) rg.view.svg.widget.TickmarksOrtho.prototype[k] = rg.view.svg.panel.Layer.prototype[k];
rg.view.svg.widget.TickmarksOrtho.prototype.anchor = null;
rg.view.svg.widget.TickmarksOrtho.prototype.displayMinor = null;
rg.view.svg.widget.TickmarksOrtho.prototype.displayMajor = null;
rg.view.svg.widget.TickmarksOrtho.prototype.displayLabel = null;
rg.view.svg.widget.TickmarksOrtho.prototype.lengthMinor = null;
rg.view.svg.widget.TickmarksOrtho.prototype.lengthMajor = null;
rg.view.svg.widget.TickmarksOrtho.prototype.paddingMinor = null;
rg.view.svg.widget.TickmarksOrtho.prototype.paddingMajor = null;
rg.view.svg.widget.TickmarksOrtho.prototype.paddingLabel = null;
rg.view.svg.widget.TickmarksOrtho.prototype.labelOrientation = null;
rg.view.svg.widget.TickmarksOrtho.prototype.labelAnchor = null;
rg.view.svg.widget.TickmarksOrtho.prototype.labelAngle = null;
rg.view.svg.widget.TickmarksOrtho.prototype.desiredSize = null;
rg.view.svg.widget.TickmarksOrtho.prototype.tickLabel = null;
rg.view.svg.widget.TickmarksOrtho.prototype.translate = null;
rg.view.svg.widget.TickmarksOrtho.prototype.x1 = null;
rg.view.svg.widget.TickmarksOrtho.prototype.y1 = null;
rg.view.svg.widget.TickmarksOrtho.prototype.x2 = null;
rg.view.svg.widget.TickmarksOrtho.prototype.y2 = null;
rg.view.svg.widget.TickmarksOrtho.prototype.x = null;
rg.view.svg.widget.TickmarksOrtho.prototype.y = null;
rg.view.svg.widget.TickmarksOrtho.prototype.axis = null;
rg.view.svg.widget.TickmarksOrtho.prototype.min = null;
rg.view.svg.widget.TickmarksOrtho.prototype.max = null;
rg.view.svg.widget.TickmarksOrtho.prototype.resize = function() {
	$s.push("rg.view.svg.widget.TickmarksOrtho::resize");
	var $spos = $s.length;
	if(null == this.axis) {
		$s.pop();
		return;
	}
	this.redraw();
	$s.pop();
}
rg.view.svg.widget.TickmarksOrtho.prototype.update = function(axis,min,max) {
	$s.push("rg.view.svg.widget.TickmarksOrtho::update");
	var $spos = $s.length;
	this.axis = axis;
	this.min = min;
	this.max = max;
	this.redraw();
	$s.pop();
}
rg.view.svg.widget.TickmarksOrtho.prototype.maxTicks = function() {
	$s.push("rg.view.svg.widget.TickmarksOrtho::maxTicks");
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
rg.view.svg.widget.TickmarksOrtho.prototype.id = function(d,i) {
	$s.push("rg.view.svg.widget.TickmarksOrtho::id");
	var $spos = $s.length;
	var $tmp = "" + d.getValue();
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.widget.TickmarksOrtho.prototype.redraw = function() {
	$s.push("rg.view.svg.widget.TickmarksOrtho::redraw");
	var $spos = $s.length;
	this.desiredSize = Math.max(this.paddingMinor + this.lengthMinor,this.paddingMajor + this.lengthMajor);
	var ticks = this.maxTicks(), data = this.axis.ticks(this.min,this.max,ticks);
	var tick = this.g.selectAll("g.tick").data(data,$closure(this,"id"));
	var enter = tick.enter().append("svg:g").attr("class").string("tick").attr("transform").stringf(this.translate);
	if(this.displayMinor) enter.filter(function(d,i) {
		$s.push("rg.view.svg.widget.TickmarksOrtho::redraw@104");
		var $spos = $s.length;
		var $tmp = !d.major;
		$s.pop();
		return $tmp;
		$s.pop();
	}).append("svg:line").attr("x1").floatf(this.x1).attr("y1").floatf(this.y1).attr("x2").floatf(this.x2).attr("y2").floatf(this.y2).attr("class").stringf($closure(this,"tickClass"));
	if(this.displayMajor) enter.filter(function(d,i) {
		$s.push("rg.view.svg.widget.TickmarksOrtho::redraw@115");
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
rg.view.svg.widget.TickmarksOrtho.prototype.createLabel = function(n,i) {
	$s.push("rg.view.svg.widget.TickmarksOrtho::createLabel");
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
rg.view.svg.widget.TickmarksOrtho.prototype.initf = function() {
	$s.push("rg.view.svg.widget.TickmarksOrtho::initf");
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
rg.view.svg.widget.TickmarksOrtho.prototype.t = function(x,y) {
	$s.push("rg.view.svg.widget.TickmarksOrtho::t");
	var $spos = $s.length;
	var $tmp = "translate(" + x + "," + y + ")";
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.widget.TickmarksOrtho.prototype.translateTop = function(d,i) {
	$s.push("rg.view.svg.widget.TickmarksOrtho::translateTop");
	var $spos = $s.length;
	var $tmp = "translate(" + d.getDelta() * this.panel.frame.width + "," + 0 + ")";
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.widget.TickmarksOrtho.prototype.translateBottom = function(d,i) {
	$s.push("rg.view.svg.widget.TickmarksOrtho::translateBottom");
	var $spos = $s.length;
	var $tmp = "translate(" + d.getDelta() * this.panel.frame.width + "," + this.panel.frame.height + ")";
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.widget.TickmarksOrtho.prototype.translateLeft = function(d,i) {
	$s.push("rg.view.svg.widget.TickmarksOrtho::translateLeft");
	var $spos = $s.length;
	var $tmp = "translate(" + 0 + "," + (this.panel.frame.height - d.getDelta() * this.panel.frame.height) + ")";
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.widget.TickmarksOrtho.prototype.translateRight = function(d,i) {
	$s.push("rg.view.svg.widget.TickmarksOrtho::translateRight");
	var $spos = $s.length;
	var $tmp = "translate(" + this.panel.frame.width + "," + (this.panel.frame.height - d.getDelta() * this.panel.frame.height) + ")";
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.widget.TickmarksOrtho.prototype.x1Top = function(d,i) {
	$s.push("rg.view.svg.widget.TickmarksOrtho::x1Top");
	var $spos = $s.length;
	$s.pop();
	return 0;
	$s.pop();
}
rg.view.svg.widget.TickmarksOrtho.prototype.x1Bottom = function(d,i) {
	$s.push("rg.view.svg.widget.TickmarksOrtho::x1Bottom");
	var $spos = $s.length;
	$s.pop();
	return 0;
	$s.pop();
}
rg.view.svg.widget.TickmarksOrtho.prototype.x1Left = function(d,i) {
	$s.push("rg.view.svg.widget.TickmarksOrtho::x1Left");
	var $spos = $s.length;
	var $tmp = d.getMajor()?this.paddingMajor:this.paddingMinor;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.widget.TickmarksOrtho.prototype.x1Right = function(d,i) {
	$s.push("rg.view.svg.widget.TickmarksOrtho::x1Right");
	var $spos = $s.length;
	var $tmp = -(d.getMajor()?this.paddingMajor:this.paddingMinor);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.widget.TickmarksOrtho.prototype.y1Top = function(d,i) {
	$s.push("rg.view.svg.widget.TickmarksOrtho::y1Top");
	var $spos = $s.length;
	var $tmp = d.getMajor()?this.paddingMajor:this.paddingMinor;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.widget.TickmarksOrtho.prototype.y1Bottom = function(d,i) {
	$s.push("rg.view.svg.widget.TickmarksOrtho::y1Bottom");
	var $spos = $s.length;
	var $tmp = -(d.getMajor()?this.paddingMajor:this.paddingMinor);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.widget.TickmarksOrtho.prototype.y1Left = function(d,i) {
	$s.push("rg.view.svg.widget.TickmarksOrtho::y1Left");
	var $spos = $s.length;
	$s.pop();
	return 0;
	$s.pop();
}
rg.view.svg.widget.TickmarksOrtho.prototype.y1Right = function(d,i) {
	$s.push("rg.view.svg.widget.TickmarksOrtho::y1Right");
	var $spos = $s.length;
	$s.pop();
	return 0;
	$s.pop();
}
rg.view.svg.widget.TickmarksOrtho.prototype.x2Top = function(d,i) {
	$s.push("rg.view.svg.widget.TickmarksOrtho::x2Top");
	var $spos = $s.length;
	$s.pop();
	return 0;
	$s.pop();
}
rg.view.svg.widget.TickmarksOrtho.prototype.x2Bottom = function(d,i) {
	$s.push("rg.view.svg.widget.TickmarksOrtho::x2Bottom");
	var $spos = $s.length;
	$s.pop();
	return 0;
	$s.pop();
}
rg.view.svg.widget.TickmarksOrtho.prototype.x2Left = function(d,i) {
	$s.push("rg.view.svg.widget.TickmarksOrtho::x2Left");
	var $spos = $s.length;
	var $tmp = d.getMajor()?this.lengthMajor + this.paddingMajor:this.lengthMinor + this.paddingMinor;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.widget.TickmarksOrtho.prototype.x2Right = function(d,i) {
	$s.push("rg.view.svg.widget.TickmarksOrtho::x2Right");
	var $spos = $s.length;
	var $tmp = -(d.getMajor()?this.lengthMajor + this.paddingMajor:this.lengthMinor + this.paddingMinor);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.widget.TickmarksOrtho.prototype.y2Top = function(d,i) {
	$s.push("rg.view.svg.widget.TickmarksOrtho::y2Top");
	var $spos = $s.length;
	var $tmp = d.getMajor()?this.lengthMajor + this.paddingMajor:this.lengthMinor + this.paddingMinor;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.widget.TickmarksOrtho.prototype.y2Bottom = function(d,i) {
	$s.push("rg.view.svg.widget.TickmarksOrtho::y2Bottom");
	var $spos = $s.length;
	var $tmp = -(d.getMajor()?this.lengthMajor + this.paddingMajor:this.lengthMinor + this.paddingMinor);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.widget.TickmarksOrtho.prototype.y2Left = function(d,i) {
	$s.push("rg.view.svg.widget.TickmarksOrtho::y2Left");
	var $spos = $s.length;
	$s.pop();
	return 0;
	$s.pop();
}
rg.view.svg.widget.TickmarksOrtho.prototype.y2Right = function(d,i) {
	$s.push("rg.view.svg.widget.TickmarksOrtho::y2Right");
	var $spos = $s.length;
	$s.pop();
	return 0;
	$s.pop();
}
rg.view.svg.widget.TickmarksOrtho.prototype.tickClass = function(d,i) {
	$s.push("rg.view.svg.widget.TickmarksOrtho::tickClass");
	var $spos = $s.length;
	var $tmp = d.getMajor()?"major":null;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.widget.TickmarksOrtho.prototype.__class__ = rg.view.svg.widget.TickmarksOrtho;
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
if(typeof haxe=='undefined') haxe = {}
if(!haxe.io) haxe.io = {}
haxe.io.Bytes = function(length,b) {
	if( length === $_ ) return;
	$s.push("haxe.io.Bytes::new");
	var $spos = $s.length;
	this.length = length;
	this.b = b;
	$s.pop();
}
haxe.io.Bytes.__name__ = ["haxe","io","Bytes"];
haxe.io.Bytes.alloc = function(length) {
	$s.push("haxe.io.Bytes::alloc");
	var $spos = $s.length;
	var a = new Array();
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		a.push(0);
	}
	var $tmp = new haxe.io.Bytes(length,a);
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.io.Bytes.ofString = function(s) {
	$s.push("haxe.io.Bytes::ofString");
	var $spos = $s.length;
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
	var $tmp = new haxe.io.Bytes(a.length,a);
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.io.Bytes.ofData = function(b) {
	$s.push("haxe.io.Bytes::ofData");
	var $spos = $s.length;
	var $tmp = new haxe.io.Bytes(b.length,b);
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.io.Bytes.prototype.length = null;
haxe.io.Bytes.prototype.b = null;
haxe.io.Bytes.prototype.get = function(pos) {
	$s.push("haxe.io.Bytes::get");
	var $spos = $s.length;
	var $tmp = this.b[pos];
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.io.Bytes.prototype.set = function(pos,v) {
	$s.push("haxe.io.Bytes::set");
	var $spos = $s.length;
	this.b[pos] = v & 255;
	$s.pop();
}
haxe.io.Bytes.prototype.blit = function(pos,src,srcpos,len) {
	$s.push("haxe.io.Bytes::blit");
	var $spos = $s.length;
	if(pos < 0 || srcpos < 0 || len < 0 || pos + len > this.length || srcpos + len > src.length) throw haxe.io.Error.OutsideBounds;
	var b1 = this.b;
	var b2 = src.b;
	if(b1 == b2 && pos > srcpos) {
		var i = len;
		while(i > 0) {
			i--;
			b1[i + pos] = b2[i + srcpos];
		}
		$s.pop();
		return;
	}
	var _g = 0;
	while(_g < len) {
		var i = _g++;
		b1[i + pos] = b2[i + srcpos];
	}
	$s.pop();
}
haxe.io.Bytes.prototype.sub = function(pos,len) {
	$s.push("haxe.io.Bytes::sub");
	var $spos = $s.length;
	if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
	var $tmp = new haxe.io.Bytes(len,this.b.slice(pos,pos + len));
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.io.Bytes.prototype.compare = function(other) {
	$s.push("haxe.io.Bytes::compare");
	var $spos = $s.length;
	var b1 = this.b;
	var b2 = other.b;
	var len = this.length < other.length?this.length:other.length;
	var _g = 0;
	while(_g < len) {
		var i = _g++;
		if(b1[i] != b2[i]) {
			var $tmp = b1[i] - b2[i];
			$s.pop();
			return $tmp;
		}
	}
	var $tmp = this.length - other.length;
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.io.Bytes.prototype.readString = function(pos,len) {
	$s.push("haxe.io.Bytes::readString");
	var $spos = $s.length;
	if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
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
	$s.pop();
	return s;
	$s.pop();
}
haxe.io.Bytes.prototype.toString = function() {
	$s.push("haxe.io.Bytes::toString");
	var $spos = $s.length;
	var $tmp = this.readString(0,this.length);
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.io.Bytes.prototype.toHex = function() {
	$s.push("haxe.io.Bytes::toHex");
	var $spos = $s.length;
	var s = new StringBuf();
	var chars = [];
	var str = "0123456789abcdef";
	var _g1 = 0, _g = str.length;
	while(_g1 < _g) {
		var i = _g1++;
		chars.push(str.charCodeAt(i));
	}
	var _g1 = 0, _g = this.length;
	while(_g1 < _g) {
		var i = _g1++;
		var c = this.b[i];
		s.b[s.b.length] = String.fromCharCode(chars[c >> 4]);
		s.b[s.b.length] = String.fromCharCode(chars[c & 15]);
	}
	var $tmp = s.b.join("");
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.io.Bytes.prototype.getData = function() {
	$s.push("haxe.io.Bytes::getData");
	var $spos = $s.length;
	var $tmp = this.b;
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.io.Bytes.prototype.__class__ = haxe.io.Bytes;
thx.math.Const = function() { }
thx.math.Const.__name__ = ["thx","math","Const"];
thx.math.Const.prototype.__class__ = thx.math.Const;
rg.view.svg.widget.BarEffects = function() { }
rg.view.svg.widget.BarEffects.__name__ = ["rg","view","svg","widget","BarEffects"];
rg.view.svg.widget.BarEffects.parse = function(s) {
	$s.push("rg.view.svg.widget.BarEffects::parse");
	var $spos = $s.length;
	var parts = s.toLowerCase().split("-");
	switch(parts.shift()) {
	case "gradient":
		var lightness = 0.75, parameters = parts.pop();
		if(null != parameters) lightness = Std.parseFloat(parameters.split(",").shift());
		var $tmp = rg.view.svg.widget.BarEffect.Gradient(lightness);
		$s.pop();
		return $tmp;
	default:
		var $tmp = rg.view.svg.widget.BarEffect.NoEffect;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
rg.view.svg.widget.BarEffects.prototype.__class__ = rg.view.svg.widget.BarEffects;
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
thx.collections.Sets = function() { }
thx.collections.Sets.__name__ = ["thx","collections","Sets"];
thx.collections.Sets.indexOf = function(set,value) {
	$s.push("thx.collections.Sets::indexOf");
	var $spos = $s.length;
	var $tmp = set._v.indexOf(value);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.collections.Sets.first = function(set) {
	$s.push("thx.collections.Sets::first");
	var $spos = $s.length;
	var $tmp = set._v[0];
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.collections.Sets.last = function(set) {
	$s.push("thx.collections.Sets::last");
	var $spos = $s.length;
	var $tmp = Arrays.last(set._v);
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.collections.Sets.order = function(set,f) {
	$s.push("thx.collections.Sets::order");
	var $spos = $s.length;
	set._v.sort(null == f?Dynamics.compare:f);
	$s.pop();
	return set;
	$s.pop();
}
thx.collections.Sets.arr = function(set) {
	$s.push("thx.collections.Sets::arr");
	var $spos = $s.length;
	var $tmp = set._v;
	$s.pop();
	return $tmp;
	$s.pop();
}
thx.collections.Sets.prototype.__class__ = thx.collections.Sets;
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
utest.TestResult = function(p) {
	$s.push("utest.TestResult::new");
	var $spos = $s.length;
	$s.pop();
}
utest.TestResult.__name__ = ["utest","TestResult"];
utest.TestResult.ofHandler = function(handler) {
	$s.push("utest.TestResult::ofHandler");
	var $spos = $s.length;
	var r = new utest.TestResult();
	var path = Type.getClassName(Type.getClass(handler.fixture.target)).split(".");
	r.cls = path.pop();
	r.pack = path.join(".");
	r.method = handler.fixture.method;
	r.setup = handler.fixture.setup;
	r.teardown = handler.fixture.teardown;
	r.assertations = handler.results;
	$s.pop();
	return r;
	$s.pop();
}
utest.TestResult.prototype.pack = null;
utest.TestResult.prototype.cls = null;
utest.TestResult.prototype.method = null;
utest.TestResult.prototype.setup = null;
utest.TestResult.prototype.teardown = null;
utest.TestResult.prototype.assertations = null;
utest.TestResult.prototype.allOk = function() {
	$s.push("utest.TestResult::allOk");
	var $spos = $s.length;
	try {
		var $it0 = this.assertations.iterator();
		while( $it0.hasNext() ) {
			var l = $it0.next();
			var $e = (l);
			switch( $e[1] ) {
			case 0:
				var pos = $e[2];
				throw "__break__";
				break;
			default:
				$s.pop();
				return false;
			}
		}
	} catch( e ) { if( e != "__break__" ) throw e; }
	$s.pop();
	return true;
	$s.pop();
}
utest.TestResult.prototype.__class__ = utest.TestResult;
rg.view.svg.widget.ChartPie = function(panel) {
	if( panel === $_ ) return;
	$s.push("rg.view.svg.widget.ChartPie::new");
	var $spos = $s.length;
	rg.view.svg.panel.Layer.call(this,panel);
	this.addClass("pie-chart");
	this.g.append("svg:defs");
	this.pie = new thx.geom.layout.Pie();
	this.animated = false;
	this.animationDuration = 0;
	this.gradientLightness = 1.5;
	this.animationDelay = 0;
	this.innerRadius = 0.0;
	this.outerRadius = 0.9;
	this.overRadius = 0.95;
	this.labelRadius = 0.45;
	this.labels = new Hash();
	this.labelDisplay = true;
	this.labelOrientation = rg.view.svg.widget.LabelOrientation.Orthogonal;
	this.labelDontFlip = true;
	$s.pop();
}
rg.view.svg.widget.ChartPie.__name__ = ["rg","view","svg","widget","ChartPie"];
rg.view.svg.widget.ChartPie.__super__ = rg.view.svg.panel.Layer;
for(var k in rg.view.svg.panel.Layer.prototype ) rg.view.svg.widget.ChartPie.prototype[k] = rg.view.svg.panel.Layer.prototype[k];
rg.view.svg.widget.ChartPie.prototype.innerRadius = null;
rg.view.svg.widget.ChartPie.prototype.outerRadius = null;
rg.view.svg.widget.ChartPie.prototype.overRadius = null;
rg.view.svg.widget.ChartPie.prototype.labelRadius = null;
rg.view.svg.widget.ChartPie.prototype.arcNormal = null;
rg.view.svg.widget.ChartPie.prototype.arcStart = null;
rg.view.svg.widget.ChartPie.prototype.arcBig = null;
rg.view.svg.widget.ChartPie.prototype.pie = null;
rg.view.svg.widget.ChartPie.prototype.radius = null;
rg.view.svg.widget.ChartPie.prototype.stats = null;
rg.view.svg.widget.ChartPie.prototype.variableDependent = null;
rg.view.svg.widget.ChartPie.prototype.animated = null;
rg.view.svg.widget.ChartPie.prototype.animationDuration = null;
rg.view.svg.widget.ChartPie.prototype.animationEase = null;
rg.view.svg.widget.ChartPie.prototype.gradientLightness = null;
rg.view.svg.widget.ChartPie.prototype.animationDelay = null;
rg.view.svg.widget.ChartPie.prototype.labelDisplay = null;
rg.view.svg.widget.ChartPie.prototype.labelOrientation = null;
rg.view.svg.widget.ChartPie.prototype.labelDontFlip = null;
rg.view.svg.widget.ChartPie.prototype.labels = null;
rg.view.svg.widget.ChartPie.prototype.mouseClick = null;
rg.view.svg.widget.ChartPie.prototype.labelFormatDataPoint = function(dp,stats) {
	$s.push("rg.view.svg.widget.ChartPie::labelFormatDataPoint");
	var $spos = $s.length;
	var $tmp = thx.culture.FormatNumber.percent(100 * Reflect.field(dp,this.variableDependent.type) / stats.tot,1);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.widget.ChartPie.prototype.labelFormatDataPointOver = function(dp,stats) {
	$s.push("rg.view.svg.widget.ChartPie::labelFormatDataPointOver");
	var $spos = $s.length;
	var $tmp = Ints.format(Reflect.field(dp,this.variableDependent.type));
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.widget.ChartPie.prototype.setVariables = function(variableIndependents,variableDependents) {
	$s.push("rg.view.svg.widget.ChartPie::setVariables");
	var $spos = $s.length;
	this.variableDependent = variableDependents[0];
	$s.pop();
}
rg.view.svg.widget.ChartPie.prototype.init = function() {
	$s.push("rg.view.svg.widget.ChartPie::init");
	var $spos = $s.length;
	this.resize();
	$s.pop();
}
rg.view.svg.widget.ChartPie.prototype.resize = function() {
	$s.push("rg.view.svg.widget.ChartPie::resize");
	var $spos = $s.length;
	this.radius = Math.min(this.width,this.height) / 2;
	this.arcStart = thx.svg.Arc.fromAngleObject().innerRadius(this.radius * this.innerRadius).outerRadius(this.radius * this.innerRadius);
	this.arcNormal = thx.svg.Arc.fromAngleObject().innerRadius(this.radius * this.innerRadius).outerRadius(this.radius * this.outerRadius);
	this.arcBig = thx.svg.Arc.fromAngleObject().innerRadius(this.radius * this.innerRadius).outerRadius(this.radius * this.overRadius);
	if(this.width > this.height) this.g.attr("transform").string("translate(" + (this.width / 2 - this.height / 2) + ",0)"); else this.g.attr("transform").string("translate(0," + (this.height / 2 - this.width / 2) + ")");
	$s.pop();
}
rg.view.svg.widget.ChartPie.prototype.data = function(dp) {
	$s.push("rg.view.svg.widget.ChartPie::data");
	var $spos = $s.length;
	var pv = this.variableDependent.type;
	dp = Arrays.filter(dp,function(dp1) {
		$s.push("rg.view.svg.widget.ChartPie::data@151");
		var $spos = $s.length;
		var $tmp = Reflect.field(dp1,pv) > 0;
		$s.pop();
		return $tmp;
		$s.pop();
	});
	this.stats = rg.util.DataPoints.stats(dp,this.variableDependent.type);
	var choice = this.g.selectAll("g.group").data(this.pief(dp),$closure(this,"id"));
	var enter = choice.enter();
	var arc = enter.append("svg:g").attr("class").stringf(function(d,i) {
		$s.push("rg.view.svg.widget.ChartPie::data@162");
		var $spos = $s.length;
		var $tmp = "group item-" + i;
		$s.pop();
		return $tmp;
		$s.pop();
	}).attr("transform").string("translate(" + this.radius + "," + this.radius + ")");
	var path = arc.append("svg:path").attr("class").string("slice");
	arc.eachNode($closure(this,"applyGradient"));
	if(this.animated) {
		path.attr("d").stringf(this.arcShape(this.arcStart));
		arc.eachNode($closure(this,"fadein")).onNode("mouseover.animation",$closure(this,"highlight")).onNode("mouseout.animation",$closure(this,"backtonormal"));
	} else path.attr("d").stringf(this.arcShape(this.arcNormal));
	if(this.labelDisplay) arc.eachNode($closure(this,"appendLabel"));
	if(null != this.mouseClick) arc.onNode("click.user",$closure(this,"onMouseClick"));
	choice.update().select("path").transition().ease(this.animationEase).duration(null,this.animationDuration).attr("d").stringf(this.arcShape(this.arcNormal));
	if(this.labelDisplay) choice.update().eachNode($closure(this,"updateLabel"));
	choice.exit().eachNode($closure(this,"removeLabel")).remove();
	$s.pop();
}
rg.view.svg.widget.ChartPie.prototype.onMouseClick = function(dom,i) {
	$s.push("rg.view.svg.widget.ChartPie::onMouseClick");
	var $spos = $s.length;
	var d = Reflect.field(dom,"__data__");
	this.mouseClick(d.dp);
	$s.pop();
}
rg.view.svg.widget.ChartPie.prototype.removeLabel = function(dom,i) {
	$s.push("rg.view.svg.widget.ChartPie::removeLabel");
	var $spos = $s.length;
	var n = thx.js.Dom.selectNode(dom), d = Reflect.field(dom,"__data__");
	var label = this.labels.get(d.id);
	label.destroy();
	this.labels.remove(d.id);
	$s.pop();
}
rg.view.svg.widget.ChartPie.prototype.updateLabel = function(dom,i) {
	$s.push("rg.view.svg.widget.ChartPie::updateLabel");
	var $spos = $s.length;
	var n = thx.js.Dom.selectNode(dom), d = Reflect.field(dom,"__data__"), label = this.labels.get(d.id), r = this.radius * this.labelRadius, a = d.startAngle + (d.endAngle - d.startAngle) / 2 - Math.PI / 2;
	label.setText(this.labelFormatDataPoint(d.dp,this.stats));
	label.place(-2.5 + Math.cos(a) * r,-2.5 + Math.sin(a) * r,57.29577951308232088 * a);
	$s.pop();
}
rg.view.svg.widget.ChartPie.prototype.appendLabel = function(dom,i) {
	$s.push("rg.view.svg.widget.ChartPie::appendLabel");
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
	label.setText(this.labelFormatDataPoint(d.dp,this.stats));
	label.place(-2.5 + Math.cos(a) * r,-2.5 + Math.sin(a) * r,57.29577951308232088 * a);
	this.labels.set(d.id,label);
	$s.pop();
}
rg.view.svg.widget.ChartPie.prototype.applyGradient = function(n,i) {
	$s.push("rg.view.svg.widget.ChartPie::applyGradient");
	var $spos = $s.length;
	var gn = thx.js.Dom.selectNodeData(n), dp = Reflect.field(n,"__data__"), id = dp.id;
	if(this.g.select("defs").select("#rg_pie_gradient_" + id).empty()) {
		var slice = gn.select("path.slice"), shape = this.arcNormal.shape(Reflect.field(n,"__data__")), t = gn.append("svg:path").attr("d").string(shape), box = t.node().getBBox();
		t.remove();
		var color = slice.style("fill").get();
		if(null == color) color = "#cccccc";
		var scolor = thx.color.Hsl.darker(thx.color.Hsl.toHsl(thx.color.Colors.parse(color)),this.gradientLightness).toRgbString();
		var ratio = box.width / box.height, cx = -box.x * 100 / box.width / ratio, cy = -box.y * 100 / box.height / ratio;
		var r = 100 * (box.width > box.height?Math.min(1,this.radius * this.outerRadius / box.width):Math.max(1,this.radius * this.outerRadius / box.width));
		var stops = this.g.select("defs").append("svg:radialGradient").attr("id").string("rg_pie_gradient_" + id).attr("cx").string(cx * ratio + "%").attr("cy").string(cy + "%").attr("gradientTransform").string("scale(1 " + ratio + ")").attr("r").string(r + "%");
		stops.append("svg:stop").attr("offset").string(100 * this.innerRadius + "%").attr("stop-color").string(scolor).attr("stop-opacity")["float"](1);
		stops.append("svg:stop").attr("offset").string("100%").attr("stop-color").string(color).attr("stop-opacity")["float"](1);
	}
	gn.select("path.slice").attr("style").string("fill:url(#rg_pie_gradient_" + id + ")");
	$s.pop();
}
rg.view.svg.widget.ChartPie.prototype.fadein = function(n,i) {
	$s.push("rg.view.svg.widget.ChartPie::fadein");
	var $spos = $s.length;
	var gn = thx.js.Dom.selectNodeData(n), shape = this.arcNormal.shape(Reflect.field(n,"__data__"));
	gn.selectAll("path.slice").transition().ease(this.animationEase).duration(null,this.animationDuration).delay(null,this.animationDelay).attr("d").string(shape);
	$s.pop();
}
rg.view.svg.widget.ChartPie.prototype.highlight = function(d,i) {
	$s.push("rg.view.svg.widget.ChartPie::highlight");
	var $spos = $s.length;
	var slice = thx.js.Dom.selectNodeData(d).selectAll("path");
	slice.transition().ease(this.animationEase).duration(null,this.animationDuration).attr("d").stringf(this.arcShape(this.arcBig));
	$s.pop();
}
rg.view.svg.widget.ChartPie.prototype.backtonormal = function(d,i) {
	$s.push("rg.view.svg.widget.ChartPie::backtonormal");
	var $spos = $s.length;
	var slice = thx.js.Dom.selectNodeData(d).selectAll("path");
	slice.transition().ease(this.animationEase).duration(null,this.animationDuration).attr("d").stringf(this.arcShape(this.arcNormal));
	$s.pop();
}
rg.view.svg.widget.ChartPie.prototype.id = function(o,i) {
	$s.push("rg.view.svg.widget.ChartPie::id");
	var $spos = $s.length;
	var $tmp = o.id;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.widget.ChartPie.prototype.makeid = function(dp) {
	$s.push("rg.view.svg.widget.ChartPie::makeid");
	var $spos = $s.length;
	var o = Objects.clone(dp);
	Reflect.deleteField(o,this.variableDependent.type);
	var $tmp = haxe.Md5.encode(Dynamics.string(o));
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.widget.ChartPie.prototype.arcShape = function(a) {
	$s.push("rg.view.svg.widget.ChartPie::arcShape");
	var $spos = $s.length;
	var $tmp = function(d,i) {
		$s.push("rg.view.svg.widget.ChartPie::arcShape@339");
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
rg.view.svg.widget.ChartPie.prototype.pief = function(dp) {
	$s.push("rg.view.svg.widget.ChartPie::pief");
	var $spos = $s.length;
	var name = this.variableDependent.type, temp = dp.map(function(d,i) {
		$s.push("rg.view.svg.widget.ChartPie::pief@348");
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
rg.view.svg.widget.ChartPie.prototype.destroy = function() {
	$s.push("rg.view.svg.widget.ChartPie::destroy");
	var $spos = $s.length;
	var $it0 = this.labels.iterator();
	while( $it0.hasNext() ) {
		var label = $it0.next();
		label.destroy();
	}
	rg.view.svg.panel.Layer.prototype.destroy.call(this);
	$s.pop();
}
rg.view.svg.widget.ChartPie.prototype.__class__ = rg.view.svg.widget.ChartPie;
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
		$s.push("rg.controller.info.InfoLabel::filters@23");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String) || Reflect.isFunction(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoLabel::filters@24");
		var $spos = $s.length;
		var $tmp = [{ field : "title", value : Std["is"](v,String)?function() {
			$s.push("rg.controller.info.InfoLabel::filters@24@26");
			var $spos = $s.length;
			$s.pop();
			return v;
			$s.pop();
		}:v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "value", validator : function(v) {
		$s.push("rg.controller.info.InfoLabel::filters@30");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "datapoint", validator : function(v) {
		$s.push("rg.controller.info.InfoLabel::filters@34");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "datapointover", validator : function(v) {
		$s.push("rg.controller.info.InfoLabel::filters@38");
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
rg.view.layout.SimpleLayout = function(width,height,container) {
	if( width === $_ ) return;
	$s.push("rg.view.layout.SimpleLayout::new");
	var $spos = $s.length;
	rg.view.layout.Layout.call(this,width,height,container);
	this.titleOnTop = true;
	$s.pop();
}
rg.view.layout.SimpleLayout.__name__ = ["rg","view","layout","SimpleLayout"];
rg.view.layout.SimpleLayout.__super__ = rg.view.layout.Layout;
for(var k in rg.view.layout.Layout.prototype ) rg.view.layout.SimpleLayout.prototype[k] = rg.view.layout.Layout.prototype[k];
rg.view.layout.SimpleLayout.prototype.main = null;
rg.view.layout.SimpleLayout.prototype.titleOnTop = null;
rg.view.layout.SimpleLayout.prototype.getContext = function(name) {
	$s.push("rg.view.layout.SimpleLayout::getContext");
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
rg.view.layout.SimpleLayout.prototype.getPanel = function(name) {
	$s.push("rg.view.layout.SimpleLayout::getPanel");
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
rg.view.layout.SimpleLayout.prototype.title = null;
rg.view.layout.SimpleLayout.prototype.getTitle = function() {
	$s.push("rg.view.layout.SimpleLayout::getTitle");
	var $spos = $s.length;
	if(null == this.title) this.title = new rg.view.layout.PanelContext(this.space.createPanelAt(this.titleOnTop?0:1,rg.view.frame.FrameLayout.Fixed(0,0,20)),this.titleOnTop?rg.view.layout.Anchor.Bottom:rg.view.layout.Anchor.Top);
	var $tmp = this.title;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.layout.SimpleLayout.prototype.feedOptions = function(info) {
	$s.push("rg.view.layout.SimpleLayout::feedOptions");
	var $spos = $s.length;
	rg.view.layout.Layout.prototype.feedOptions.call(this,info);
	this.titleOnTop = info.titleOnTop;
	$s.pop();
}
rg.view.layout.SimpleLayout.prototype.__class__ = rg.view.layout.SimpleLayout;
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
rg.data.source.DataSourceReportGrid = function(executor,path,event,query,groupby,start,end) {
	if( executor === $_ ) return;
	$s.push("rg.data.source.DataSourceReportGrid::new");
	var $spos = $s.length;
	this.query = query;
	this.executor = executor;
	this.groupBy = groupby;
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
				throw new thx.error.Error("normalization failed, the last value should always be a Time expression",null,null,{ fileName : "DataSourceReportGrid.hx", lineNumber : 71, className : "rg.data.source.DataSourceReportGrid", methodName : "new"});
				return $r;
			}($this));
		}
		return $r;
	}(this));
	this.exp = e.map($closure(this,"mapProperties"));
	this.where = query.where.map(function(d,i) {
		$s.push("rg.data.source.DataSourceReportGrid::new@73");
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
					throw new thx.error.Error("invalid data for 'where' condition",null,null,{ fileName : "DataSourceReportGrid.hx", lineNumber : 77, className : "rg.data.source.DataSourceReportGrid", methodName : "new"});
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
		throw new thx.error.Error("RGDataSource doesn't support operation '{0}'",null,this.operation,{ fileName : "DataSourceReportGrid.hx", lineNumber : 83, className : "rg.data.source.DataSourceReportGrid", methodName : "new"});
	}
	this.path = path;
	this.start = start;
	this.end = end;
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
				if(pos >= 0) throw new thx.error.Error("cannot perform intersections on two or more time properties",null,null,{ fileName : "DataSourceReportGrid.hx", lineNumber : 198, className : "rg.data.source.DataSourceReportGrid", methodName : "normalize"});
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
rg.data.source.DataSourceReportGrid.prototype.start = null;
rg.data.source.DataSourceReportGrid.prototype.end = null;
rg.data.source.DataSourceReportGrid.prototype.groupBy = null;
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
		throw new thx.error.Error("normalization failed, only Property values should be allowed",null,null,{ fileName : "DataSourceReportGrid.hx", lineNumber : 60, className : "rg.data.source.DataSourceReportGrid", methodName : "mapProperties"});
	}
	$s.pop();
}
rg.data.source.DataSourceReportGrid.prototype.basicOptions = function(appendPeriodicity) {
	$s.push("rg.data.source.DataSourceReportGrid::basicOptions");
	var $spos = $s.length;
	if(appendPeriodicity == null) appendPeriodicity = true;
	var o = { };
	if(null != this.start) o["start"] = this.start;
	if(null != this.end) o["end"] = this.end;
	if(appendPeriodicity) {
		o["periodicity"] = this.periodicity;
		if(null != this.groupBy) o["groupBy"] = this.groupBy;
	}
	if(this.where.length > 1) {
		var w = { };
		var _g = 0, _g1 = this.where;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			w[rg.data.source.DataSourceReportGrid.propertyName(c)] = c.value;
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
				throw new thx.error.Error("unsupported operation '{0}'",null,$this.operation,{ fileName : "DataSourceReportGrid.hx", lineNumber : 122, className : "rg.data.source.DataSourceReportGrid", methodName : "unit"});
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
	if(0 == this.exp.length) throw new thx.error.Error("invalid empty query",null,null,{ fileName : "DataSourceReportGrid.hx", lineNumber : 130, className : "rg.data.source.DataSourceReportGrid", methodName : "load"}); else if(this.exp.length == 1 && null == this.exp[0].property || this.where.length > 0) {
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
			this.transform = new rg.data.source.rgquery.transform.TransformCountTimeSeries({ periodicity : this.periodicity},this.event,this.periodicity,this.unit());
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
		this.transform = new rg.data.source.rgquery.transform.TransformCountTimeIntersect({ },this.exp.map(function(d,_) {
			$s.push("rg.data.source.DataSourceReportGrid::load@164");
			var $spos = $s.length;
			var $tmp = d.property;
			$s.pop();
			return $tmp;
			$s.pop();
		}),this.event,this.periodicity,this.unit());
		var o = this.basicOptions(true);
		o.properties = this.exp.map(function(p,i) {
			$s.push("rg.data.source.DataSourceReportGrid::load@166");
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
	throw new thx.error.Error(msg,null,null,{ fileName : "DataSourceReportGrid.hx", lineNumber : 179, className : "rg.data.source.DataSourceReportGrid", methodName : "error"});
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
	default:
		throw new thx.error.Error("unsupported visualization type '{0}'",null,type,{ fileName : "FactorySvgVisualization.hx", lineNumber : 41, className : "rg.controller.factory.FactorySvgVisualization", methodName : "create"});
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
	this.layoutScaleY = rg.view.layout.LayoutScaleY.ScalesAlternating;
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
				$r = rg.view.layout.LayoutScaleY.ScalesAlternating;
				break;
			case "right":
				$r = rg.view.layout.LayoutScaleY.ScalesOnRight;
				break;
			default:
				$r = rg.view.layout.LayoutScaleY.ScalesOnLeft;
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
rg.controller.info.InfoLayout.prototype.layoutScaleY = null;
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
rg.data.source.ITransform = function() { }
rg.data.source.ITransform.__name__ = ["rg","data","source","ITransform"];
rg.data.source.ITransform.prototype.transform = null;
rg.data.source.ITransform.prototype.__class__ = rg.data.source.ITransform;
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
rg.controller.visualization.VisualizationLineChart.prototype.initChart = function() {
	$s.push("rg.controller.visualization.VisualizationLineChart::initChart");
	var $spos = $s.length;
	var chart = new rg.view.svg.widget.ChartLine(this.layout.getPanel(this.layout.mainPanelName));
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
rg.view.svg.widget.BaloonShape = function() { }
rg.view.svg.widget.BaloonShape.__name__ = ["rg","view","svg","widget","BaloonShape"];
rg.view.svg.widget.BaloonShape.shape = function(width,height,rc,rp,side,offset) {
	$s.push("rg.view.svg.widget.BaloonShape::shape");
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
rg.view.svg.widget.BaloonShape.prototype.__class__ = rg.view.svg.widget.BaloonShape;
rg.data.source.rgquery.TestQueryParser = function(p) {
	$s.push("rg.data.source.rgquery.TestQueryParser::new");
	var $spos = $s.length;
	$s.pop();
}
rg.data.source.rgquery.TestQueryParser.__name__ = ["rg","data","source","rgquery","TestQueryParser"];
rg.data.source.rgquery.TestQueryParser.prototype.test = function() {
	$s.push("rg.data.source.rgquery.TestQueryParser::test");
	var $spos = $s.length;
	this.assertParse([rg.data.source.rgquery.QExp.Event],rg.data.source.rgquery.QOperation.Count,[],"",{ fileName : "TestQueryParser.hx", lineNumber : 16, className : "rg.data.source.rgquery.TestQueryParser", methodName : "test"});
	this.assertParse([rg.data.source.rgquery.QExp.Property(".click")],rg.data.source.rgquery.QOperation.Count,[],".click",{ fileName : "TestQueryParser.hx", lineNumber : 22, className : "rg.data.source.rgquery.TestQueryParser", methodName : "test"});
	this.assertParse([rg.data.source.rgquery.QExp.Property(".click.gender")],rg.data.source.rgquery.QOperation.Count,[rg.data.source.rgquery.QCondition.Equality(".click.gender","female")],".click.gender = 'female'",{ fileName : "TestQueryParser.hx", lineNumber : 29, className : "rg.data.source.rgquery.TestQueryParser", methodName : "test"});
	this.assertParse([rg.data.source.rgquery.QExp.Property(".click"),rg.data.source.rgquery.QExp.Time("hour")],rg.data.source.rgquery.QOperation.Count,[],".click * .#time:hour",{ fileName : "TestQueryParser.hx", lineNumber : 36, className : "rg.data.source.rgquery.TestQueryParser", methodName : "test"});
	this.assertParse([rg.data.source.rgquery.QExp.Property(".click",10)],rg.data.source.rgquery.QOperation.Count,[],".click(10)",{ fileName : "TestQueryParser.hx", lineNumber : 43, className : "rg.data.source.rgquery.TestQueryParser", methodName : "test"});
	this.assertParse([rg.data.source.rgquery.QExp.Property(".click",10,false)],rg.data.source.rgquery.QOperation.Count,[],".click(10, asc)",{ fileName : "TestQueryParser.hx", lineNumber : 50, className : "rg.data.source.rgquery.TestQueryParser", methodName : "test"});
	this.assertParse([rg.data.source.rgquery.QExp.Property(".click",10,true)],rg.data.source.rgquery.QOperation.Count,[],".click(10,desc)",{ fileName : "TestQueryParser.hx", lineNumber : 57, className : "rg.data.source.rgquery.TestQueryParser", methodName : "test"});
	$s.pop();
}
rg.data.source.rgquery.TestQueryParser.prototype.assertParse = function(exp,operation,where,s,pos) {
	$s.push("rg.data.source.rgquery.TestQueryParser::assertParse");
	var $spos = $s.length;
	var parser = new rg.data.source.rgquery.QueryParser();
	var expected = { exp : exp, operation : operation, where : where}, test = parser.parse(s);
	utest.Assert.same(expected,test,null,"expected: " + Dynamics.string(expected) + " but was " + Dynamics.string(test),pos);
	$s.pop();
}
rg.data.source.rgquery.TestQueryParser.prototype.__class__ = rg.data.source.rgquery.TestQueryParser;
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
utest.Assert = function() { }
utest.Assert.__name__ = ["utest","Assert"];
utest.Assert.results = null;
utest.Assert.isTrue = function(cond,msg,pos) {
	$s.push("utest.Assert::isTrue");
	var $spos = $s.length;
	if(utest.Assert.results == null) throw "Assert.results is not currently bound to any assert context";
	if(null == msg) msg = "expected true";
	if(cond) utest.Assert.results.add(utest.Assertation.Success(pos)); else utest.Assert.results.add(utest.Assertation.Failure(msg,pos));
	$s.pop();
}
utest.Assert.isFalse = function(value,msg,pos) {
	$s.push("utest.Assert::isFalse");
	var $spos = $s.length;
	if(null == msg) msg = "expected false";
	utest.Assert.isTrue(value == false,msg,pos);
	$s.pop();
}
utest.Assert.isNull = function(value,msg,pos) {
	$s.push("utest.Assert::isNull");
	var $spos = $s.length;
	if(msg == null) msg = "expected null but was " + utest.Assert.q(value);
	utest.Assert.isTrue(value == null,msg,pos);
	$s.pop();
}
utest.Assert.notNull = function(value,msg,pos) {
	$s.push("utest.Assert::notNull");
	var $spos = $s.length;
	if(null == msg) msg = "expected not null but was null";
	utest.Assert.isTrue(value != null,msg,pos);
	$s.pop();
}
utest.Assert["is"] = function(value,type,msg,pos) {
	$s.push("utest.Assert::is");
	var $spos = $s.length;
	if(msg == null) msg = "expected type " + utest.Assert.typeToString(type) + " but was " + utest.Assert.typeToString(value);
	utest.Assert.isTrue(Std["is"](value,type),msg,pos);
	$s.pop();
}
utest.Assert.notEquals = function(expected,value,msg,pos) {
	$s.push("utest.Assert::notEquals");
	var $spos = $s.length;
	if(msg == null) msg = "expected " + utest.Assert.q(expected) + " and testa value " + utest.Assert.q(value) + " should be different";
	utest.Assert.isFalse(expected == value,msg,pos);
	$s.pop();
}
utest.Assert.equals = function(expected,value,msg,pos) {
	$s.push("utest.Assert::equals");
	var $spos = $s.length;
	if(msg == null) msg = "expected " + utest.Assert.q(expected) + " but was " + utest.Assert.q(value);
	utest.Assert.isTrue(expected == value,msg,pos);
	$s.pop();
}
utest.Assert.match = function(pattern,value,msg,pos) {
	$s.push("utest.Assert::match");
	var $spos = $s.length;
	if(msg == null) msg = "the value " + utest.Assert.q(value) + "does not match the provided pattern";
	utest.Assert.isTrue(pattern.match(value),msg,pos);
	$s.pop();
}
utest.Assert.floatEquals = function(expected,value,approx,msg,pos) {
	$s.push("utest.Assert::floatEquals");
	var $spos = $s.length;
	if(msg == null) msg = "expected " + utest.Assert.q(expected) + " but was " + utest.Assert.q(value);
	var $tmp = utest.Assert.isTrue(utest.Assert._floatEquals(expected,value,approx),msg,pos);
	$s.pop();
	return $tmp;
	$s.pop();
}
utest.Assert._floatEquals = function(expected,value,approx) {
	$s.push("utest.Assert::_floatEquals");
	var $spos = $s.length;
	if(Math.isNaN(expected)) {
		var $tmp = Math.isNaN(value);
		$s.pop();
		return $tmp;
	} else if(Math.isNaN(value)) {
		$s.pop();
		return false;
	} else if(!Math.isFinite(expected) && !Math.isFinite(value)) {
		var $tmp = expected > 0 == value > 0;
		$s.pop();
		return $tmp;
	}
	if(null == approx) approx = 1e-5;
	var $tmp = Math.abs(value - expected) < approx;
	$s.pop();
	return $tmp;
	$s.pop();
}
utest.Assert.getTypeName = function(v) {
	$s.push("utest.Assert::getTypeName");
	var $spos = $s.length;
	var $e = (Type["typeof"](v));
	switch( $e[1] ) {
	case 0:
		$s.pop();
		return "[null]";
	case 1:
		$s.pop();
		return "Int";
	case 2:
		$s.pop();
		return "Float";
	case 3:
		$s.pop();
		return "Bool";
	case 5:
		$s.pop();
		return "function";
	case 6:
		var c = $e[2];
		var $tmp = Type.getClassName(c);
		$s.pop();
		return $tmp;
	case 7:
		var e = $e[2];
		var $tmp = Type.getEnumName(e);
		$s.pop();
		return $tmp;
	case 4:
		$s.pop();
		return "Object";
	case 8:
		$s.pop();
		return "Unknown";
	}
	$s.pop();
}
utest.Assert.isIterable = function(v,isAnonym) {
	$s.push("utest.Assert::isIterable");
	var $spos = $s.length;
	var fields = isAnonym?Reflect.fields(v):Type.getInstanceFields(Type.getClass(v));
	if(!Lambda.has(fields,"iterator")) {
		$s.pop();
		return false;
	}
	var $tmp = Reflect.isFunction(Reflect.field(v,"iterator"));
	$s.pop();
	return $tmp;
	$s.pop();
}
utest.Assert.isIterator = function(v,isAnonym) {
	$s.push("utest.Assert::isIterator");
	var $spos = $s.length;
	var fields = isAnonym?Reflect.fields(v):Type.getInstanceFields(Type.getClass(v));
	if(!Lambda.has(fields,"next") || !Lambda.has(fields,"hasNext")) {
		$s.pop();
		return false;
	}
	var $tmp = Reflect.isFunction(Reflect.field(v,"next")) && Reflect.isFunction(Reflect.field(v,"hasNext"));
	$s.pop();
	return $tmp;
	$s.pop();
}
utest.Assert.sameAs = function(expected,value,status) {
	$s.push("utest.Assert::sameAs");
	var $spos = $s.length;
	var texpected = utest.Assert.getTypeName(expected);
	var tvalue = utest.Assert.getTypeName(value);
	if(texpected != tvalue) {
		status.error = "expected type " + texpected + " but it is " + tvalue + (status.path == ""?"":" for field " + status.path);
		$s.pop();
		return false;
	}
	var $e = (Type["typeof"](expected));
	switch( $e[1] ) {
	case 2:
		if(!utest.Assert._floatEquals(expected,value)) {
			status.error = "expected " + utest.Assert.q(expected) + " but it is " + utest.Assert.q(value) + (status.path == ""?"":" for field " + status.path);
			$s.pop();
			return false;
		}
		$s.pop();
		return true;
	case 0:
	case 1:
	case 3:
		if(expected != value) {
			status.error = "expected " + utest.Assert.q(expected) + " but it is " + utest.Assert.q(value) + (status.path == ""?"":" for field " + status.path);
			$s.pop();
			return false;
		}
		$s.pop();
		return true;
	case 5:
		if(!Reflect.compareMethods(expected,value)) {
			status.error = "expected same function reference" + (status.path == ""?"":" for field " + status.path);
			$s.pop();
			return false;
		}
		$s.pop();
		return true;
	case 6:
		var c = $e[2];
		var cexpected = Type.getClassName(c);
		var cvalue = Type.getClassName(Type.getClass(value));
		if(cexpected != cvalue) {
			status.error = "expected instance of " + utest.Assert.q(cexpected) + " but it is " + utest.Assert.q(cvalue) + (status.path == ""?"":" for field " + status.path);
			$s.pop();
			return false;
		}
		if(Std["is"](expected,String) && expected != value) {
			status.error = "expected '" + expected + "' but it is '" + value + "'";
			$s.pop();
			return false;
		}
		if(Std["is"](expected,Array)) {
			if(status.recursive || status.path == "") {
				if(expected.length != value.length) {
					status.error = "expected " + expected.length + " elements but they were " + value.length + (status.path == ""?"":" for field " + status.path);
					$s.pop();
					return false;
				}
				var path = status.path;
				var _g1 = 0, _g = expected.length;
				while(_g1 < _g) {
					var i = _g1++;
					status.path = path == ""?"array[" + i + "]":path + "[" + i + "]";
					if(!utest.Assert.sameAs(expected[i],value[i],status)) {
						status.error = "expected " + utest.Assert.q(expected) + " but it is " + utest.Assert.q(value) + (status.path == ""?"":" for field " + status.path);
						$s.pop();
						return false;
					}
				}
			}
			$s.pop();
			return true;
		}
		if(Std["is"](expected,Date)) {
			if(expected.getTime() != value.getTime()) {
				status.error = "expected " + utest.Assert.q(expected) + " but it is " + utest.Assert.q(value) + (status.path == ""?"":" for field " + status.path);
				$s.pop();
				return false;
			}
			$s.pop();
			return true;
		}
		if(Std["is"](expected,haxe.io.Bytes)) {
			if(status.recursive || status.path == "") {
				var ebytes = expected;
				var vbytes = value;
				if(ebytes.length != vbytes.length) {
					$s.pop();
					return false;
				}
				var _g1 = 0, _g = ebytes.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(ebytes.b[i] != vbytes.b[i]) {
						status.error = "expected byte " + ebytes.b[i] + " but wss " + ebytes.b[i] + (status.path == ""?"":" for field " + status.path);
						$s.pop();
						return false;
					}
				}
			}
			$s.pop();
			return true;
		}
		if(Std["is"](expected,Hash) || Std["is"](expected,IntHash)) {
			if(status.recursive || status.path == "") {
				var keys = Lambda.array({ iterator : function() {
					$s.push("utest.Assert::sameAs@289");
					var $spos = $s.length;
					var $tmp = expected.keys();
					$s.pop();
					return $tmp;
					$s.pop();
				}});
				var vkeys = Lambda.array({ iterator : function() {
					$s.push("utest.Assert::sameAs@290");
					var $spos = $s.length;
					var $tmp = value.keys();
					$s.pop();
					return $tmp;
					$s.pop();
				}});
				if(keys.length != vkeys.length) {
					status.error = "expected " + keys.length + " keys but they were " + vkeys.length + (status.path == ""?"":" for field " + status.path);
					$s.pop();
					return false;
				}
				var path = status.path;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					status.path = path == ""?"hash[" + key + "]":path + "[" + key + "]";
					if(!utest.Assert.sameAs(expected.get(key),value.get(key),status)) {
						status.error = "expected " + utest.Assert.q(expected) + " but it is " + utest.Assert.q(value) + (status.path == ""?"":" for field " + status.path);
						$s.pop();
						return false;
					}
				}
			}
			$s.pop();
			return true;
		}
		if(utest.Assert.isIterator(expected,false)) {
			if(status.recursive || status.path == "") {
				var evalues = Lambda.array({ iterator : function() {
					$s.push("utest.Assert::sameAs@311");
					var $spos = $s.length;
					$s.pop();
					return expected;
					$s.pop();
				}});
				var vvalues = Lambda.array({ iterator : function() {
					$s.push("utest.Assert::sameAs@312");
					var $spos = $s.length;
					$s.pop();
					return value;
					$s.pop();
				}});
				if(evalues.length != vvalues.length) {
					status.error = "expected " + evalues.length + " values in Iterator but they were " + vvalues.length + (status.path == ""?"":" for field " + status.path);
					$s.pop();
					return false;
				}
				var path = status.path;
				var _g1 = 0, _g = evalues.length;
				while(_g1 < _g) {
					var i = _g1++;
					status.path = path == ""?"iterator[" + i + "]":path + "[" + i + "]";
					if(!utest.Assert.sameAs(evalues[i],vvalues[i],status)) {
						status.error = "expected " + utest.Assert.q(expected) + " but it is " + utest.Assert.q(value) + (status.path == ""?"":" for field " + status.path);
						$s.pop();
						return false;
					}
				}
			}
			$s.pop();
			return true;
		}
		if(utest.Assert.isIterable(expected,false)) {
			if(status.recursive || status.path == "") {
				var evalues = Lambda.array(expected);
				var vvalues = Lambda.array(value);
				if(evalues.length != vvalues.length) {
					status.error = "expected " + evalues.length + " values in Iterable but they were " + vvalues.length + (status.path == ""?"":" for field " + status.path);
					$s.pop();
					return false;
				}
				var path = status.path;
				var _g1 = 0, _g = evalues.length;
				while(_g1 < _g) {
					var i = _g1++;
					status.path = path == ""?"iterable[" + i + "]":path + "[" + i + "]";
					if(!utest.Assert.sameAs(evalues[i],vvalues[i],status)) {
						$s.pop();
						return false;
					}
				}
			}
			$s.pop();
			return true;
		}
		if(status.recursive || status.path == "") {
			var fields = Type.getInstanceFields(Type.getClass(expected));
			var path = status.path;
			var _g = 0;
			while(_g < fields.length) {
				var field = fields[_g];
				++_g;
				status.path = path == ""?field:path + "." + field;
				var e = Reflect.field(expected,field);
				if(Reflect.isFunction(e)) continue;
				var v = Reflect.field(value,field);
				if(!utest.Assert.sameAs(e,v,status)) {
					$s.pop();
					return false;
				}
			}
		}
		$s.pop();
		return true;
	case 7:
		var e = $e[2];
		var eexpected = Type.getEnumName(e);
		var evalue = Type.getEnumName(Type.getEnum(value));
		if(eexpected != evalue) {
			status.error = "expected enumeration of " + utest.Assert.q(eexpected) + " but it is " + utest.Assert.q(evalue) + (status.path == ""?"":" for field " + status.path);
			$s.pop();
			return false;
		}
		if(status.recursive || status.path == "") {
			if(expected[1] != value[1]) {
				status.error = "expected " + utest.Assert.q(expected[0]) + " but is " + utest.Assert.q(value[0]) + (status.path == ""?"":" for field " + status.path);
				$s.pop();
				return false;
			}
			var eparams = expected.slice(2);
			var vparams = value.slice(2);
			var path = status.path;
			var _g1 = 0, _g = eparams.length;
			while(_g1 < _g) {
				var i = _g1++;
				status.path = path == ""?"enum[" + i + "]":path + "[" + i + "]";
				if(!utest.Assert.sameAs(eparams[i],vparams[i],status)) {
					status.error = "expected " + utest.Assert.q(expected) + " but it is " + utest.Assert.q(value) + (status.path == ""?"":" for field " + status.path);
					$s.pop();
					return false;
				}
			}
		}
		$s.pop();
		return true;
	case 4:
		if(status.recursive || status.path == "") {
			var tfields = Reflect.fields(value);
			var fields = Reflect.fields(expected);
			var path = status.path;
			var _g = 0;
			while(_g < fields.length) {
				var field = fields[_g];
				++_g;
				tfields.remove(field);
				status.path = path == ""?field:path + "." + field;
				if(!Reflect.hasField(value,field)) {
					status.error = "expected field " + status.path + " does not exist in " + utest.Assert.q(value);
					$s.pop();
					return false;
				}
				var e = Reflect.field(expected,field);
				if(Reflect.isFunction(e)) continue;
				var v = Reflect.field(value,field);
				if(!utest.Assert.sameAs(e,v,status)) {
					$s.pop();
					return false;
				}
			}
			if(tfields.length > 0) {
				status.error = "the tested object has extra field(s) (" + tfields.join(", ") + ") not included in the expected ones";
				$s.pop();
				return false;
			}
		}
		if(utest.Assert.isIterator(expected,true)) {
			if(!utest.Assert.isIterator(value,true)) {
				status.error = "expected Iterable but it is not " + (status.path == ""?"":" for field " + status.path);
				$s.pop();
				return false;
			}
			if(status.recursive || status.path == "") {
				var evalues = Lambda.array({ iterator : function() {
					$s.push("utest.Assert::sameAs@427");
					var $spos = $s.length;
					$s.pop();
					return expected;
					$s.pop();
				}});
				var vvalues = Lambda.array({ iterator : function() {
					$s.push("utest.Assert::sameAs@428");
					var $spos = $s.length;
					$s.pop();
					return value;
					$s.pop();
				}});
				if(evalues.length != vvalues.length) {
					status.error = "expected " + evalues.length + " values in Iterator but they were " + vvalues.length + (status.path == ""?"":" for field " + status.path);
					$s.pop();
					return false;
				}
				var path = status.path;
				var _g1 = 0, _g = evalues.length;
				while(_g1 < _g) {
					var i = _g1++;
					status.path = path == ""?"iterator[" + i + "]":path + "[" + i + "]";
					if(!utest.Assert.sameAs(evalues[i],vvalues[i],status)) {
						status.error = "expected " + utest.Assert.q(expected) + " but it is " + utest.Assert.q(value) + (status.path == ""?"":" for field " + status.path);
						$s.pop();
						return false;
					}
				}
			}
			$s.pop();
			return true;
		}
		if(utest.Assert.isIterable(expected,true)) {
			if(!utest.Assert.isIterable(value,true)) {
				status.error = "expected Iterator but it is not " + (status.path == ""?"":" for field " + status.path);
				$s.pop();
				return false;
			}
			if(status.recursive || status.path == "") {
				var evalues = Lambda.array(expected);
				var vvalues = Lambda.array(value);
				if(evalues.length != vvalues.length) {
					status.error = "expected " + evalues.length + " values in Iterable but they were " + vvalues.length + (status.path == ""?"":" for field " + status.path);
					$s.pop();
					return false;
				}
				var path = status.path;
				var _g1 = 0, _g = evalues.length;
				while(_g1 < _g) {
					var i = _g1++;
					status.path = path == ""?"iterable[" + i + "]":path + "[" + i + "]";
					if(!utest.Assert.sameAs(evalues[i],vvalues[i],status)) {
						$s.pop();
						return false;
					}
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
		throw "Unable to compare values: " + utest.Assert.q(expected) + " and " + utest.Assert.q(value);
		return $r;
	}(this));
	$s.pop();
	return $tmp;
	$s.pop();
}
utest.Assert.q = function(v) {
	$s.push("utest.Assert::q");
	var $spos = $s.length;
	if(Std["is"](v,String)) {
		var $tmp = "\"" + StringTools.replace(v,"\"","\\\"") + "\"";
		$s.pop();
		return $tmp;
	} else {
		var $tmp = Std.string(v);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
utest.Assert.same = function(expected,value,recursive,msg,pos) {
	$s.push("utest.Assert::same");
	var $spos = $s.length;
	var status = { recursive : null == recursive?true:recursive, path : "", error : null};
	if(utest.Assert.sameAs(expected,value,status)) utest.Assert.isTrue(true,msg,pos); else utest.Assert.fail(msg == null?status.error:msg,pos);
	$s.pop();
}
utest.Assert.raises = function(method,type,msgNotThrown,msgWrongType,pos) {
	$s.push("utest.Assert::raises");
	var $spos = $s.length;
	if(type == null) type = String;
	try {
		method();
		var name = Type.getClassName(type);
		if(name == null) name = "" + type;
		if(null == msgNotThrown) msgNotThrown = "exception of type " + name + " not raised";
		utest.Assert.fail(msgNotThrown,pos);
	} catch( ex ) {
		$e = [];
		while($s.length >= $spos) $e.unshift($s.pop());
		$s.push($e[0]);
		var name = Type.getClassName(type);
		if(name == null) name = "" + type;
		if(null == msgWrongType) msgWrongType = "expected throw of type " + name + " but was " + ex;
		utest.Assert.isTrue(Std["is"](ex,type),msgWrongType,pos);
	}
	$s.pop();
}
utest.Assert.allows = function(possibilities,value,msg,pos) {
	$s.push("utest.Assert::allows");
	var $spos = $s.length;
	if(Lambda.has(possibilities,value)) utest.Assert.isTrue(true,msg,pos); else utest.Assert.fail(msg == null?"value " + utest.Assert.q(value) + " not found in the expected possibilities " + possibilities:msg,pos);
	$s.pop();
}
utest.Assert.contains = function(match,values,msg,pos) {
	$s.push("utest.Assert::contains");
	var $spos = $s.length;
	if(Lambda.has(values,match)) utest.Assert.isTrue(true,msg,pos); else utest.Assert.fail(msg == null?"values " + utest.Assert.q(values) + " do not contain " + match:msg,pos);
	$s.pop();
}
utest.Assert.notContains = function(match,values,msg,pos) {
	$s.push("utest.Assert::notContains");
	var $spos = $s.length;
	if(!Lambda.has(values,match)) utest.Assert.isTrue(true,msg,pos); else utest.Assert.fail(msg == null?"values " + utest.Assert.q(values) + " do contain " + match:msg,pos);
	$s.pop();
}
utest.Assert.stringContains = function(match,value,msg,pos) {
	$s.push("utest.Assert::stringContains");
	var $spos = $s.length;
	if(value != null && value.indexOf(match) >= 0) utest.Assert.isTrue(true,msg,pos); else utest.Assert.fail(msg == null?"value " + utest.Assert.q(value) + " does not contain " + utest.Assert.q(match):msg,pos);
	$s.pop();
}
utest.Assert.stringSequence = function(sequence,value,msg,pos) {
	$s.push("utest.Assert::stringSequence");
	var $spos = $s.length;
	if(null == value) {
		utest.Assert.fail(msg == null?"null argument value":msg,pos);
		$s.pop();
		return;
	}
	var p = 0;
	var _g = 0;
	while(_g < sequence.length) {
		var s = sequence[_g];
		++_g;
		var p2 = value.indexOf(s,p);
		if(p2 < 0) {
			if(msg == null) {
				msg = "expected '" + s + "' after ";
				if(p > 0) {
					var cut = value.substr(0,p);
					if(cut.length > 30) cut = "..." + cut.substr(-27);
					msg += " '" + cut + "'";
				} else msg += " begin";
			}
			utest.Assert.fail(msg,pos);
			$s.pop();
			return;
		}
		p = p2 + s.length;
	}
	utest.Assert.isTrue(true,msg,pos);
	$s.pop();
}
utest.Assert.fail = function(msg,pos) {
	$s.push("utest.Assert::fail");
	var $spos = $s.length;
	if(msg == null) msg = "failure expected";
	utest.Assert.isTrue(false,msg,pos);
	$s.pop();
}
utest.Assert.warn = function(msg) {
	$s.push("utest.Assert::warn");
	var $spos = $s.length;
	utest.Assert.results.add(utest.Assertation.Warning(msg));
	$s.pop();
}
utest.Assert.createAsync = function(f,timeout) {
	$s.push("utest.Assert::createAsync");
	var $spos = $s.length;
	var $tmp = function() {
		$s.push("utest.Assert::createAsync@666");
		var $spos = $s.length;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
utest.Assert.createEvent = function(f,timeout) {
	$s.push("utest.Assert::createEvent");
	var $spos = $s.length;
	var $tmp = function(e) {
		$s.push("utest.Assert::createEvent@677");
		var $spos = $s.length;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
utest.Assert.typeToString = function(t) {
	$s.push("utest.Assert::typeToString");
	var $spos = $s.length;
	try {
		var _t = Type.getClass(t);
		if(_t != null) t = _t;
	} catch( e ) {
		$e = [];
		while($s.length >= $spos) $e.unshift($s.pop());
		$s.push($e[0]);
	}
	try {
		var $tmp = Type.getClassName(t);
		$s.pop();
		return $tmp;
	} catch( e ) {
		$e = [];
		while($s.length >= $spos) $e.unshift($s.pop());
		$s.push($e[0]);
	}
	try {
		var _t = Type.getEnum(t);
		if(_t != null) t = _t;
	} catch( e ) {
		$e = [];
		while($s.length >= $spos) $e.unshift($s.pop());
		$s.push($e[0]);
	}
	try {
		var $tmp = Type.getEnumName(t);
		$s.pop();
		return $tmp;
	} catch( e ) {
		$e = [];
		while($s.length >= $spos) $e.unshift($s.pop());
		$s.push($e[0]);
	}
	try {
		var $tmp = Std.string(Type["typeof"](t));
		$s.pop();
		return $tmp;
	} catch( e ) {
		$e = [];
		while($s.length >= $spos) $e.unshift($s.pop());
		$s.push($e[0]);
	}
	try {
		var $tmp = Std.string(t);
		$s.pop();
		return $tmp;
	} catch( e ) {
		$e = [];
		while($s.length >= $spos) $e.unshift($s.pop());
		$s.push($e[0]);
	}
	$s.pop();
	return "<unable to retrieve type name>";
	$s.pop();
}
utest.Assert.prototype.__class__ = utest.Assert;
haxe.io.Error = { __ename__ : ["haxe","io","Error"], __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] }
haxe.io.Error.Blocked = ["Blocked",0];
haxe.io.Error.Blocked.toString = $estr;
haxe.io.Error.Blocked.__enum__ = haxe.io.Error;
haxe.io.Error.Overflow = ["Overflow",1];
haxe.io.Error.Overflow.toString = $estr;
haxe.io.Error.Overflow.__enum__ = haxe.io.Error;
haxe.io.Error.OutsideBounds = ["OutsideBounds",2];
haxe.io.Error.OutsideBounds.toString = $estr;
haxe.io.Error.OutsideBounds.__enum__ = haxe.io.Error;
haxe.io.Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe.io.Error; $x.toString = $estr; return $x; }
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
		$s.push("rg.controller.App::visualization@58");
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
		var layout = this.getLayout(id,params.options,el);
		visualization = new rg.controller.factory.FactorySvgVisualization().create(infoviz.type,layout,params.options);
		break;
	case 0:
		visualization = new rg.controller.factory.FactoryHtmlVisualization().create(infoviz.type,el,params.options);
		break;
	}
	visualization.setVariables(independentVariables.map(function(c,_) {
		$s.push("rg.controller.App::visualization@79");
		var $spos = $s.length;
		var $tmp = c.variable;
		$s.pop();
		return $tmp;
		$s.pop();
	}),dependentVariables.map(function(c,_) {
		$s.push("rg.controller.App::visualization@80");
		var $spos = $s.length;
		var $tmp = c.variable;
		$s.pop();
		return $tmp;
		$s.pop();
	}));
	visualization.init();
	var request = new rg.data.DataRequest(cache,datacontexts);
	request.onData = function(datapoints) {
		$s.push("rg.controller.App::visualization@84");
		var $spos = $s.length;
		visualization.feedData(datapoints);
		$s.pop();
	};
	request.request();
	$s.pop();
	return visualization;
	$s.pop();
}
rg.controller.App.prototype.getLayout = function(id,options,container) {
	$s.push("rg.controller.App::getLayout");
	var $spos = $s.length;
	if(this.layouts.exists(id)) {
		var $tmp = this.layouts.get(id);
		$s.pop();
		return $tmp;
	}
	var info = rg.controller.info.Info.feed(new rg.controller.info.InfoLayout(),options), layout = new rg.controller.factory.FactoryLayout().create(info,container);
	this.layouts.set(id,layout);
	$s.pop();
	return layout;
	$s.pop();
}
rg.controller.App.prototype.__class__ = rg.controller.App;
utest.ui.common.ClassResult = function(className,setupName,teardownName) {
	if( className === $_ ) return;
	$s.push("utest.ui.common.ClassResult::new");
	var $spos = $s.length;
	this.fixtures = new Hash();
	this.className = className;
	this.setupName = setupName;
	this.hasSetup = setupName != null;
	this.teardownName = teardownName;
	this.hasTeardown = teardownName != null;
	this.methods = 0;
	this.stats = new utest.ui.common.ResultStats();
	$s.pop();
}
utest.ui.common.ClassResult.__name__ = ["utest","ui","common","ClassResult"];
utest.ui.common.ClassResult.prototype.fixtures = null;
utest.ui.common.ClassResult.prototype.className = null;
utest.ui.common.ClassResult.prototype.setupName = null;
utest.ui.common.ClassResult.prototype.teardownName = null;
utest.ui.common.ClassResult.prototype.hasSetup = null;
utest.ui.common.ClassResult.prototype.hasTeardown = null;
utest.ui.common.ClassResult.prototype.methods = null;
utest.ui.common.ClassResult.prototype.stats = null;
utest.ui.common.ClassResult.prototype.add = function(result) {
	$s.push("utest.ui.common.ClassResult::add");
	var $spos = $s.length;
	if(this.fixtures.exists(result.methodName)) throw "invalid duplicated fixture result";
	this.stats.wire(result.stats);
	this.methods++;
	this.fixtures.set(result.methodName,result);
	$s.pop();
}
utest.ui.common.ClassResult.prototype.get = function(method) {
	$s.push("utest.ui.common.ClassResult::get");
	var $spos = $s.length;
	var $tmp = this.fixtures.get(method);
	$s.pop();
	return $tmp;
	$s.pop();
}
utest.ui.common.ClassResult.prototype.exists = function(method) {
	$s.push("utest.ui.common.ClassResult::exists");
	var $spos = $s.length;
	var $tmp = this.fixtures.exists(method);
	$s.pop();
	return $tmp;
	$s.pop();
}
utest.ui.common.ClassResult.prototype.methodNames = function(errorsHavePriority) {
	$s.push("utest.ui.common.ClassResult::methodNames");
	var $spos = $s.length;
	if(errorsHavePriority == null) errorsHavePriority = true;
	var names = [];
	var $it0 = this.fixtures.keys();
	while( $it0.hasNext() ) {
		var name = $it0.next();
		names.push(name);
	}
	if(errorsHavePriority) {
		var me = this;
		names.sort(function(a,b) {
			$s.push("utest.ui.common.ClassResult::methodNames@54");
			var $spos = $s.length;
			var $as = me.get(a).stats;
			var bs = me.get(b).stats;
			if($as.hasErrors) {
				var $tmp = !bs.hasErrors?-1:$as.errors == bs.errors?Reflect.compare(a,b):Reflect.compare($as.errors,bs.errors);
				$s.pop();
				return $tmp;
			} else if(bs.hasErrors) {
				$s.pop();
				return 1;
			} else if($as.hasFailures) {
				var $tmp = !bs.hasFailures?-1:$as.failures == bs.failures?Reflect.compare(a,b):Reflect.compare($as.failures,bs.failures);
				$s.pop();
				return $tmp;
			} else if(bs.hasFailures) {
				$s.pop();
				return 1;
			} else if($as.hasWarnings) {
				var $tmp = !bs.hasWarnings?-1:$as.warnings == bs.warnings?Reflect.compare(a,b):Reflect.compare($as.warnings,bs.warnings);
				$s.pop();
				return $tmp;
			} else if(bs.hasWarnings) {
				$s.pop();
				return 1;
			} else {
				var $tmp = Reflect.compare(a,b);
				$s.pop();
				return $tmp;
			}
			$s.pop();
		});
	} else names.sort(function(a,b) {
		$s.push("utest.ui.common.ClassResult::methodNames@74");
		var $spos = $s.length;
		var $tmp = Reflect.compare(a,b);
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return names;
	$s.pop();
}
utest.ui.common.ClassResult.prototype.__class__ = utest.ui.common.ClassResult;
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
rg.view.svg.widget.ChartCartesian = function(panel) {
	if( panel === $_ ) return;
	$s.push("rg.view.svg.widget.ChartCartesian::new");
	var $spos = $s.length;
	rg.view.svg.panel.Layer.call(this,panel);
	this.animated = true;
	this.animationDuration = 1500;
	this.animationEase = thx.math.Equations.linear;
	$s.pop();
}
rg.view.svg.widget.ChartCartesian.__name__ = ["rg","view","svg","widget","ChartCartesian"];
rg.view.svg.widget.ChartCartesian.__super__ = rg.view.svg.panel.Layer;
for(var k in rg.view.svg.panel.Layer.prototype ) rg.view.svg.widget.ChartCartesian.prototype[k] = rg.view.svg.panel.Layer.prototype[k];
rg.view.svg.widget.ChartCartesian.prototype.variableDependents = null;
rg.view.svg.widget.ChartCartesian.prototype.variableIndependent = null;
rg.view.svg.widget.ChartCartesian.prototype.animated = null;
rg.view.svg.widget.ChartCartesian.prototype.animationDuration = null;
rg.view.svg.widget.ChartCartesian.prototype.animationEase = null;
rg.view.svg.widget.ChartCartesian.prototype.click = null;
rg.view.svg.widget.ChartCartesian.prototype.labelDataPoint = null;
rg.view.svg.widget.ChartCartesian.prototype.labelDataPointOver = null;
rg.view.svg.widget.ChartCartesian.prototype.tooltip = null;
rg.view.svg.widget.ChartCartesian.prototype.setVariables = function(variableIndependents,variableDependents) {
	$s.push("rg.view.svg.widget.ChartCartesian::setVariables");
	var $spos = $s.length;
	this.variableIndependent = variableIndependents[0];
	this.variableDependents = variableDependents;
	$s.pop();
}
rg.view.svg.widget.ChartCartesian.prototype.data = function(dps) {
	$s.push("rg.view.svg.widget.ChartCartesian::data");
	var $spos = $s.length;
	throw new thx.error.AbstractMethod({ fileName : "ChartCartesian.hx", lineNumber : 45, className : "rg.view.svg.widget.ChartCartesian", methodName : "data"});
	$s.pop();
}
rg.view.svg.widget.ChartCartesian.prototype.init = function() {
	$s.push("rg.view.svg.widget.ChartCartesian::init");
	var $spos = $s.length;
	if(null != this.labelDataPointOver) {
		this.tooltip = new rg.view.svg.widget.Balloon(this.g);
		var x = 0.0, y = 0.0, w = 0.0, h = 0.0;
		var p = this.panel, frame;
		while(null != p) {
			frame = p.frame;
			haxe.Log.trace(frame,{ fileName : "ChartCartesian.hx", lineNumber : 59, className : "rg.view.svg.widget.ChartCartesian", methodName : "init"});
			x += frame.x;
			y += frame.y;
			w = frame.width;
			h = frame.height;
			p = p.parent;
		}
		haxe.Log.trace("DONE",{ fileName : "ChartCartesian.hx", lineNumber : 66, className : "rg.view.svg.widget.ChartCartesian", methodName : "init"});
		var box = { x : -x, y : -y, width : w, height : h};
		this.tooltip.setBoundingBox(box);
	}
	$s.pop();
}
rg.view.svg.widget.ChartCartesian.prototype.__class__ = rg.view.svg.widget.ChartCartesian;
rg.util.DataPoints = function() { }
rg.util.DataPoints.__name__ = ["rg","util","DataPoints"];
rg.util.DataPoints.partition = function(dps,property,def) {
	$s.push("rg.util.DataPoints::partition");
	var $spos = $s.length;
	if(def == null) def = "default";
	var map = new thx.collections.HashList();
	var getBucket = function(n) {
		$s.push("rg.util.DataPoints::partition@20");
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
		var values = [variable[0].range()];
		dps = Arrays.filter(dps,(function(values,variable) {
			$s.push("rg.util.DataPoints::filterByIndependents@48");
			var $spos = $s.length;
			var $tmp = function(dp) {
				$s.push("rg.util.DataPoints::filterByIndependents@48@48");
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
			$s.push("rg.util.DataPoints::filterByDependents@62");
			var $spos = $s.length;
			var $tmp = function(dp) {
				$s.push("rg.util.DataPoints::filterByDependents@62@62");
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
rg.util.DataPoints.stats = function(dps,property) {
	$s.push("rg.util.DataPoints::stats");
	var $spos = $s.length;
	var min = Math.POSITIVE_INFINITY, max = Math.NEGATIVE_INFINITY, tot = 0.0;
	var _g = 0;
	while(_g < dps.length) {
		var dp = dps[_g];
		++_g;
		var v = Reflect.field(dp,property);
		if(null == v) continue;
		if(v < min) min = v;
		if(v > max) max = v;
		tot += v;
	}
	var $tmp = { min : min, max : max, tot : tot};
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
utest.TestFixture = function(target,method,setup,teardown) {
	if( target === $_ ) return;
	$s.push("utest.TestFixture::new");
	var $spos = $s.length;
	this.target = target;
	this.method = method;
	this.setup = setup;
	this.teardown = teardown;
	$s.pop();
}
utest.TestFixture.__name__ = ["utest","TestFixture"];
utest.TestFixture.prototype.target = null;
utest.TestFixture.prototype.method = null;
utest.TestFixture.prototype.setup = null;
utest.TestFixture.prototype.teardown = null;
utest.TestFixture.prototype.checkMethod = function(name,arg) {
	$s.push("utest.TestFixture::checkMethod");
	var $spos = $s.length;
	var field = Reflect.field(this.target,name);
	if(field == null) throw arg + " function " + name + " is not a field of target";
	if(!Reflect.isFunction(field)) throw arg + " function " + name + " is not a function";
	$s.pop();
}
utest.TestFixture.prototype.__class__ = utest.TestFixture;
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
rg.controller.info.TestInfoLayout = function(p) {
	$s.push("rg.controller.info.TestInfoLayout::new");
	var $spos = $s.length;
	$s.pop();
}
rg.controller.info.TestInfoLayout.__name__ = ["rg","controller","info","TestInfoLayout"];
rg.controller.info.TestInfoLayout.prototype.testSize = function() {
	$s.push("rg.controller.info.TestInfoLayout::testSize");
	var $spos = $s.length;
	var info = rg.controller.info.Info.feed(new rg.controller.info.InfoLayout(),{ width : 10.3, height : 5});
	utest.Assert.equals(10,info.width,null,{ fileName : "TestInfoLayout.hx", lineNumber : 15, className : "rg.controller.info.TestInfoLayout", methodName : "testSize"});
	utest.Assert.equals(5,info.height,null,{ fileName : "TestInfoLayout.hx", lineNumber : 16, className : "rg.controller.info.TestInfoLayout", methodName : "testSize"});
	$s.pop();
}
rg.controller.info.TestInfoLayout.prototype.testType = function() {
	$s.push("rg.controller.info.TestInfoLayout::testType");
	var $spos = $s.length;
	var info = rg.controller.info.Info.feed(new rg.controller.info.InfoLayout(),{ visualization : "lineChart"});
	utest.Assert.equals("linechart",info.type,null,{ fileName : "TestInfoLayout.hx", lineNumber : 22, className : "rg.controller.info.TestInfoLayout", methodName : "testType"});
	$s.pop();
}
rg.controller.info.TestInfoLayout.prototype.testLayout = function() {
	$s.push("rg.controller.info.TestInfoLayout::testLayout");
	var $spos = $s.length;
	var info = rg.controller.info.Info.feed(new rg.controller.info.InfoLayout(),{ layout : "simple"});
	utest.Assert.equals("simple",info.layout,null,{ fileName : "TestInfoLayout.hx", lineNumber : 28, className : "rg.controller.info.TestInfoLayout", methodName : "testLayout"});
	$s.pop();
}
rg.controller.info.TestInfoLayout.prototype.__class__ = rg.controller.info.TestInfoLayout;
utest.ui.common.HeaderDisplayMode = { __ename__ : ["utest","ui","common","HeaderDisplayMode"], __constructs__ : ["AlwaysShowHeader","NeverShowHeader","ShowHeaderWithResults"] }
utest.ui.common.HeaderDisplayMode.AlwaysShowHeader = ["AlwaysShowHeader",0];
utest.ui.common.HeaderDisplayMode.AlwaysShowHeader.toString = $estr;
utest.ui.common.HeaderDisplayMode.AlwaysShowHeader.__enum__ = utest.ui.common.HeaderDisplayMode;
utest.ui.common.HeaderDisplayMode.NeverShowHeader = ["NeverShowHeader",1];
utest.ui.common.HeaderDisplayMode.NeverShowHeader.toString = $estr;
utest.ui.common.HeaderDisplayMode.NeverShowHeader.__enum__ = utest.ui.common.HeaderDisplayMode;
utest.ui.common.HeaderDisplayMode.ShowHeaderWithResults = ["ShowHeaderWithResults",2];
utest.ui.common.HeaderDisplayMode.ShowHeaderWithResults.toString = $estr;
utest.ui.common.HeaderDisplayMode.ShowHeaderWithResults.__enum__ = utest.ui.common.HeaderDisplayMode;
utest.ui.common.SuccessResultsDisplayMode = { __ename__ : ["utest","ui","common","SuccessResultsDisplayMode"], __constructs__ : ["AlwaysShowSuccessResults","NeverShowSuccessResults","ShowSuccessResultsWithNoErrors"] }
utest.ui.common.SuccessResultsDisplayMode.AlwaysShowSuccessResults = ["AlwaysShowSuccessResults",0];
utest.ui.common.SuccessResultsDisplayMode.AlwaysShowSuccessResults.toString = $estr;
utest.ui.common.SuccessResultsDisplayMode.AlwaysShowSuccessResults.__enum__ = utest.ui.common.SuccessResultsDisplayMode;
utest.ui.common.SuccessResultsDisplayMode.NeverShowSuccessResults = ["NeverShowSuccessResults",1];
utest.ui.common.SuccessResultsDisplayMode.NeverShowSuccessResults.toString = $estr;
utest.ui.common.SuccessResultsDisplayMode.NeverShowSuccessResults.__enum__ = utest.ui.common.SuccessResultsDisplayMode;
utest.ui.common.SuccessResultsDisplayMode.ShowSuccessResultsWithNoErrors = ["ShowSuccessResultsWithNoErrors",2];
utest.ui.common.SuccessResultsDisplayMode.ShowSuccessResultsWithNoErrors.toString = $estr;
utest.ui.common.SuccessResultsDisplayMode.ShowSuccessResultsWithNoErrors.__enum__ = utest.ui.common.SuccessResultsDisplayMode;
rg.controller.factory.TestFactoryDataContext = function(p) {
	$s.push("rg.controller.factory.TestFactoryDataContext::new");
	var $spos = $s.length;
	$s.pop();
}
rg.controller.factory.TestFactoryDataContext.__name__ = ["rg","controller","factory","TestFactoryDataContext"];
rg.controller.factory.TestFactoryDataContext.prototype.testBuild = function() {
	$s.push("rg.controller.factory.TestFactoryDataContext::testBuild");
	var $spos = $s.length;
	var cache = new Hash(), executor = new rg.data.source.rgquery.MockRGExecutor(), factoryDataSource = new rg.controller.factory.FactoryDataSource(cache,executor), factory = new rg.controller.factory.FactoryDataContext(factoryDataSource), info = new rg.controller.info.InfoDataContext(), dc;
	utest.Assert.raises(function() {
		$s.push("rg.controller.factory.TestFactoryDataContext::testBuild@29");
		var $spos = $s.length;
		dc = factory.create(info);
		$s.pop();
	},thx.error.Error,null,null,{ fileName : "TestFactoryDataContext.hx", lineNumber : 29, className : "rg.controller.factory.TestFactoryDataContext", methodName : "testBuild"});
	rg.controller.info.Info.feed(info,{ name : "total", src : [{ event : ".sale", query : ".amount * .#time:day", path : "/seller/1"},{ event : ".sale", query : ".amount * .#time:day", path : "/seller/2"}]});
	dc = factory.create(info);
	utest.Assert.notNull(dc,null,{ fileName : "TestFactoryDataContext.hx", lineNumber : 42, className : "rg.controller.factory.TestFactoryDataContext", methodName : "testBuild"});
	utest.Assert.equals("total",dc.name,null,{ fileName : "TestFactoryDataContext.hx", lineNumber : 43, className : "rg.controller.factory.TestFactoryDataContext", methodName : "testBuild"});
	utest.Assert.equals(2,dc.data.sources.length,null,{ fileName : "TestFactoryDataContext.hx", lineNumber : 45, className : "rg.controller.factory.TestFactoryDataContext", methodName : "testBuild"});
	$s.pop();
}
rg.controller.factory.TestFactoryDataContext.prototype.__class__ = rg.controller.factory.TestFactoryDataContext;
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
rg.view.svg.widget.LineEffect = { __ename__ : ["rg","view","svg","widget","LineEffect"], __constructs__ : ["NoEffect","Gradient","DropShadow"] }
rg.view.svg.widget.LineEffect.NoEffect = ["NoEffect",0];
rg.view.svg.widget.LineEffect.NoEffect.toString = $estr;
rg.view.svg.widget.LineEffect.NoEffect.__enum__ = rg.view.svg.widget.LineEffect;
rg.view.svg.widget.LineEffect.Gradient = function(lightness,levels) { var $x = ["Gradient",1,lightness,levels]; $x.__enum__ = rg.view.svg.widget.LineEffect; $x.toString = $estr; return $x; }
rg.view.svg.widget.LineEffect.DropShadow = function(ox,oy,evels) { var $x = ["DropShadow",2,ox,oy,evels]; $x.__enum__ = rg.view.svg.widget.LineEffect; $x.toString = $estr; return $x; }
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
rg.data.Variable = function(type,scaleDistribution,min,max) {
	if( type === $_ ) return;
	$s.push("rg.data.Variable::new");
	var $spos = $s.length;
	this.type = type;
	this.scaleDistribution = scaleDistribution;
	this.min = min;
	this.max = max;
	$s.pop();
}
rg.data.Variable.__name__ = ["rg","data","Variable"];
rg.data.Variable.prototype.type = null;
rg.data.Variable.prototype.min = null;
rg.data.Variable.prototype.max = null;
rg.data.Variable.prototype.scaleDistribution = null;
rg.data.Variable.prototype.__class__ = rg.data.Variable;
rg.data.VariableIndependent = function(type,axis,scaleDistribution,min,max) {
	if( type === $_ ) return;
	$s.push("rg.data.VariableIndependent::new");
	var $spos = $s.length;
	rg.data.Variable.call(this,type,scaleDistribution,min,max);
	this.axis = axis;
	$s.pop();
}
rg.data.VariableIndependent.__name__ = ["rg","data","VariableIndependent"];
rg.data.VariableIndependent.__super__ = rg.data.Variable;
for(var k in rg.data.Variable.prototype ) rg.data.VariableIndependent.prototype[k] = rg.data.Variable.prototype[k];
rg.data.VariableIndependent.forTime = function(type,periodicity,scaleDistribution,min,max) {
	$s.push("rg.data.VariableIndependent::forTime");
	var $spos = $s.length;
	var axis = new rg.data.AxisTime(periodicity);
	var $tmp = new rg.data.VariableIndependent(type,axis,scaleDistribution,min,max);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.VariableIndependent.forOrdinal = function(type,scaleDistribution,values) {
	$s.push("rg.data.VariableIndependent::forOrdinal");
	var $spos = $s.length;
	var axis = new rg.data.AxisOrdinal(values);
	var $tmp = new rg.data.VariableIndependent(type,axis,scaleDistribution,axis.getFirst(),axis.getLast());
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.VariableIndependent.prototype.axis = null;
rg.data.VariableIndependent.prototype.range = function() {
	$s.push("rg.data.VariableIndependent::range");
	var $spos = $s.length;
	var a = Types["as"](this.axis,rg.data.AxisGroupByTime);
	if(null != a) {
		var $tmp = a.range(a.getFirst(),a.getLast());
		$s.pop();
		return $tmp;
	} else {
		var $tmp = this.axis.range(this.min,this.max);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
rg.data.VariableIndependent.prototype.__class__ = rg.data.VariableIndependent;
rg.data.TestAxisOrdinal = function(p) {
	$s.push("rg.data.TestAxisOrdinal::new");
	var $spos = $s.length;
	$s.pop();
}
rg.data.TestAxisOrdinal.__name__ = ["rg","data","TestAxisOrdinal"];
rg.data.TestAxisOrdinal.prototype.testOrdinal = function() {
	$s.push("rg.data.TestAxisOrdinal::testOrdinal");
	var $spos = $s.length;
	var ordinal = new rg.data.AxisOrdinal(["a","b","c","d","e","f","g","h"]);
	this.assertValues(["b","c","d"],ordinal.ticks("b","d"),{ fileName : "TestAxisOrdinal.hx", lineNumber : 17, className : "rg.data.TestAxisOrdinal", methodName : "testOrdinal"});
	this.assertValues([],ordinal.ticks("b","d",0),{ fileName : "TestAxisOrdinal.hx", lineNumber : 18, className : "rg.data.TestAxisOrdinal", methodName : "testOrdinal"});
	this.assertValues(["b"],ordinal.ticks("b","d",1),{ fileName : "TestAxisOrdinal.hx", lineNumber : 19, className : "rg.data.TestAxisOrdinal", methodName : "testOrdinal"});
	this.assertValues(["b","c","d"],ordinal.ticks("b","d",3),{ fileName : "TestAxisOrdinal.hx", lineNumber : 21, className : "rg.data.TestAxisOrdinal", methodName : "testOrdinal"});
	this.assertValues(["b","c","d"],ordinal.ticks("b","d",4),{ fileName : "TestAxisOrdinal.hx", lineNumber : 22, className : "rg.data.TestAxisOrdinal", methodName : "testOrdinal"});
	this.assertValues(["a","c","e","g"],ordinal.ticks("a","h",4),{ fileName : "TestAxisOrdinal.hx", lineNumber : 25, className : "rg.data.TestAxisOrdinal", methodName : "testOrdinal"});
	$s.pop();
}
rg.data.TestAxisOrdinal.prototype.assertValues = function(expected,test,pos) {
	$s.push("rg.data.TestAxisOrdinal::assertValues");
	var $spos = $s.length;
	var t = test.map(function(d,i) {
		$s.push("rg.data.TestAxisOrdinal::assertValues@30");
		var $spos = $s.length;
		var $tmp = d.getValue();
		$s.pop();
		return $tmp;
		$s.pop();
	});
	utest.Assert.same(expected,t,null,null,pos);
	$s.pop();
}
rg.data.TestAxisOrdinal.prototype.__class__ = rg.data.TestAxisOrdinal;
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
utest.Runner = function(p) {
	if( p === $_ ) return;
	$s.push("utest.Runner::new");
	var $spos = $s.length;
	this.fixtures = new Array();
	this.onProgress = new utest.Dispatcher();
	this.onStart = new utest.Dispatcher();
	this.onComplete = new utest.Dispatcher();
	this.length = 0;
	$s.pop();
}
utest.Runner.__name__ = ["utest","Runner"];
utest.Runner.prototype.fixtures = null;
utest.Runner.prototype.onProgress = null;
utest.Runner.prototype.onStart = null;
utest.Runner.prototype.onComplete = null;
utest.Runner.prototype.length = null;
utest.Runner.prototype.addCase = function(test,setup,teardown,prefix,pattern) {
	$s.push("utest.Runner::addCase");
	var $spos = $s.length;
	if(prefix == null) prefix = "test";
	if(teardown == null) teardown = "teardown";
	if(setup == null) setup = "setup";
	if(!Reflect.isObject(test)) throw "can't add a null object as a test case";
	if(!this.isMethod(test,setup)) setup = null;
	if(!this.isMethod(test,teardown)) teardown = null;
	var fields = Type.getInstanceFields(Type.getClass(test));
	if(pattern == null) {
		var _g = 0;
		while(_g < fields.length) {
			var field = fields[_g];
			++_g;
			if(!StringTools.startsWith(field,prefix)) continue;
			if(!this.isMethod(test,field)) continue;
			this.addFixture(new utest.TestFixture(test,field,setup,teardown));
		}
	} else {
		var _g = 0;
		while(_g < fields.length) {
			var field = fields[_g];
			++_g;
			if(!pattern.match(field)) continue;
			if(!this.isMethod(test,field)) continue;
			this.addFixture(new utest.TestFixture(test,field,setup,teardown));
		}
	}
	$s.pop();
}
utest.Runner.prototype.addFixture = function(fixture) {
	$s.push("utest.Runner::addFixture");
	var $spos = $s.length;
	this.fixtures.push(fixture);
	this.length++;
	$s.pop();
}
utest.Runner.prototype.getFixture = function(index) {
	$s.push("utest.Runner::getFixture");
	var $spos = $s.length;
	var $tmp = this.fixtures[index];
	$s.pop();
	return $tmp;
	$s.pop();
}
utest.Runner.prototype.isMethod = function(test,name) {
	$s.push("utest.Runner::isMethod");
	var $spos = $s.length;
	try {
		var $tmp = Reflect.isFunction(Reflect.field(test,name));
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
utest.Runner.prototype.pos = null;
utest.Runner.prototype.run = function() {
	$s.push("utest.Runner::run");
	var $spos = $s.length;
	this.pos = 0;
	this.onStart.dispatch(this);
	this.runNext();
	$s.pop();
}
utest.Runner.prototype.runNext = function() {
	$s.push("utest.Runner::runNext");
	var $spos = $s.length;
	if(this.fixtures.length > this.pos) this.runFixture(this.fixtures[this.pos++]); else this.onComplete.dispatch(this);
	$s.pop();
}
utest.Runner.prototype.runFixture = function(fixture) {
	$s.push("utest.Runner::runFixture");
	var $spos = $s.length;
	var handler = new utest.TestHandler(fixture);
	handler.onComplete.add($closure(this,"testComplete"));
	handler.execute();
	$s.pop();
}
utest.Runner.prototype.testComplete = function(h) {
	$s.push("utest.Runner::testComplete");
	var $spos = $s.length;
	this.onProgress.dispatch({ result : utest.TestResult.ofHandler(h), done : this.pos, totals : this.length});
	this.runNext();
	$s.pop();
}
utest.Runner.prototype.__class__ = utest.Runner;
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
if(!thx.geom) thx.geom = {}
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
rg.controller.factory.TestFactoryVariableContexts = function(p) {
	$s.push("rg.controller.factory.TestFactoryVariableContexts::new");
	var $spos = $s.length;
	$s.pop();
}
rg.controller.factory.TestFactoryVariableContexts.__name__ = ["rg","controller","factory","TestFactoryVariableContexts"];
rg.controller.factory.TestFactoryVariableContexts.prototype.testCreateIndependentContextsNotPartialWithTime = function() {
	$s.push("rg.controller.factory.TestFactoryVariableContexts::testCreateIndependentContextsNotPartialWithTime");
	var $spos = $s.length;
	var factory = new rg.controller.factory.FactoryVariableContexts(thx.collections.Set.ofArray([".#time:hour"])), iv = [rg.controller.info.Info.feed(new rg.controller.info.InfoVariable(),{ type : ".#time:hour"})], inds = factory.createIndependents(iv), ctx = inds[0];
	utest.Assert.notNull(ctx,null,{ fileName : "TestFactoryVariableContexts.hx", lineNumber : 22, className : "rg.controller.factory.TestFactoryVariableContexts", methodName : "testCreateIndependentContextsNotPartialWithTime"});
	utest.Assert.notNull(ctx.variable,null,{ fileName : "TestFactoryVariableContexts.hx", lineNumber : 23, className : "rg.controller.factory.TestFactoryVariableContexts", methodName : "testCreateIndependentContextsNotPartialWithTime"});
	utest.Assert.isFalse(ctx.partial,null,{ fileName : "TestFactoryVariableContexts.hx", lineNumber : 24, className : "rg.controller.factory.TestFactoryVariableContexts", methodName : "testCreateIndependentContextsNotPartialWithTime"});
	utest.Assert.notNull(ctx.variable.axis,null,{ fileName : "TestFactoryVariableContexts.hx", lineNumber : 25, className : "rg.controller.factory.TestFactoryVariableContexts", methodName : "testCreateIndependentContextsNotPartialWithTime"});
	$s.pop();
}
rg.controller.factory.TestFactoryVariableContexts.prototype.testCreateIndependentContextsPartial = function() {
	$s.push("rg.controller.factory.TestFactoryVariableContexts::testCreateIndependentContextsPartial");
	var $spos = $s.length;
	var factory = new rg.controller.factory.FactoryVariableContexts(thx.collections.Set.ofArray(["count"])), iv = [rg.controller.info.Info.feed(new rg.controller.info.InfoVariable(),{ type : "count"})], inds = factory.createIndependents(iv), ctx = inds[0];
	utest.Assert.notNull(ctx,null,{ fileName : "TestFactoryVariableContexts.hx", lineNumber : 34, className : "rg.controller.factory.TestFactoryVariableContexts", methodName : "testCreateIndependentContextsPartial"});
	utest.Assert.notNull(ctx.variable,null,{ fileName : "TestFactoryVariableContexts.hx", lineNumber : 35, className : "rg.controller.factory.TestFactoryVariableContexts", methodName : "testCreateIndependentContextsPartial"});
	utest.Assert.isTrue(ctx.partial,null,{ fileName : "TestFactoryVariableContexts.hx", lineNumber : 36, className : "rg.controller.factory.TestFactoryVariableContexts", methodName : "testCreateIndependentContextsPartial"});
	utest.Assert.notNull(ctx.variable.axis,null,{ fileName : "TestFactoryVariableContexts.hx", lineNumber : 37, className : "rg.controller.factory.TestFactoryVariableContexts", methodName : "testCreateIndependentContextsPartial"});
	$s.pop();
}
rg.controller.factory.TestFactoryVariableContexts.prototype.testCreateDependentContextsPartial = function() {
	$s.push("rg.controller.factory.TestFactoryVariableContexts::testCreateDependentContextsPartial");
	var $spos = $s.length;
	var factory = new rg.controller.factory.FactoryVariableContexts(thx.collections.Set.ofArray([".#time:hour"])), dv = [rg.controller.info.Info.feed(new rg.controller.info.InfoVariable(),{ type : "count"})], deps = factory.createDependents(dv), ctx = deps[0];
	utest.Assert.notNull(ctx,null,{ fileName : "TestFactoryVariableContexts.hx", lineNumber : 46, className : "rg.controller.factory.TestFactoryVariableContexts", methodName : "testCreateDependentContextsPartial"});
	utest.Assert.notNull(ctx.variable,null,{ fileName : "TestFactoryVariableContexts.hx", lineNumber : 47, className : "rg.controller.factory.TestFactoryVariableContexts", methodName : "testCreateDependentContextsPartial"});
	utest.Assert.isTrue(ctx.partial,null,{ fileName : "TestFactoryVariableContexts.hx", lineNumber : 48, className : "rg.controller.factory.TestFactoryVariableContexts", methodName : "testCreateDependentContextsPartial"});
	utest.Assert.isNull(ctx.variable.axis,null,{ fileName : "TestFactoryVariableContexts.hx", lineNumber : 49, className : "rg.controller.factory.TestFactoryVariableContexts", methodName : "testCreateDependentContextsPartial"});
	$s.pop();
}
rg.controller.factory.TestFactoryVariableContexts.prototype.testCreateIndependentContextsNotPartial = function() {
	$s.push("rg.controller.factory.TestFactoryVariableContexts::testCreateIndependentContextsNotPartial");
	var $spos = $s.length;
	var factory = new rg.controller.factory.FactoryVariableContexts(thx.collections.Set.ofArray([".#time:hour"])), iv = [rg.controller.info.Info.feed(new rg.controller.info.InfoVariable(),{ type : ".#time:hour", view : ["yesterday","now"]})], inds = factory.createIndependents(iv), ctx = inds[0];
	utest.Assert.notNull(ctx,null,{ fileName : "TestFactoryVariableContexts.hx", lineNumber : 61, className : "rg.controller.factory.TestFactoryVariableContexts", methodName : "testCreateIndependentContextsNotPartial"});
	utest.Assert.notNull(ctx.variable,null,{ fileName : "TestFactoryVariableContexts.hx", lineNumber : 62, className : "rg.controller.factory.TestFactoryVariableContexts", methodName : "testCreateIndependentContextsNotPartial"});
	utest.Assert.isFalse(ctx.partial,null,{ fileName : "TestFactoryVariableContexts.hx", lineNumber : 63, className : "rg.controller.factory.TestFactoryVariableContexts", methodName : "testCreateIndependentContextsNotPartial"});
	utest.Assert.notNull(ctx.variable.axis,null,{ fileName : "TestFactoryVariableContexts.hx", lineNumber : 64, className : "rg.controller.factory.TestFactoryVariableContexts", methodName : "testCreateIndependentContextsNotPartial"});
	$s.pop();
}
rg.controller.factory.TestFactoryVariableContexts.prototype.testCreateDependentContextsNotPartial = function() {
	$s.push("rg.controller.factory.TestFactoryVariableContexts::testCreateDependentContextsNotPartial");
	var $spos = $s.length;
	var factory = new rg.controller.factory.FactoryVariableContexts(thx.collections.Set.ofArray([".#time:hour"])), dv = [rg.controller.info.Info.feed(new rg.controller.info.InfoVariable(),{ type : "count", view : [0,100]})], deps = factory.createDependents(dv), ctx = deps[0];
	utest.Assert.notNull(ctx,null,{ fileName : "TestFactoryVariableContexts.hx", lineNumber : 76, className : "rg.controller.factory.TestFactoryVariableContexts", methodName : "testCreateDependentContextsNotPartial"});
	utest.Assert.notNull(ctx.variable,null,{ fileName : "TestFactoryVariableContexts.hx", lineNumber : 77, className : "rg.controller.factory.TestFactoryVariableContexts", methodName : "testCreateDependentContextsNotPartial"});
	utest.Assert.isFalse(ctx.partial,null,{ fileName : "TestFactoryVariableContexts.hx", lineNumber : 78, className : "rg.controller.factory.TestFactoryVariableContexts", methodName : "testCreateDependentContextsNotPartial"});
	utest.Assert.notNull(ctx.variable.axis,null,{ fileName : "TestFactoryVariableContexts.hx", lineNumber : 79, className : "rg.controller.factory.TestFactoryVariableContexts", methodName : "testCreateDependentContextsNotPartial"});
	$s.pop();
}
rg.controller.factory.TestFactoryVariableContexts.prototype.__class__ = rg.controller.factory.TestFactoryVariableContexts;
rg.view.frame.TestStack = function(p) {
	$s.push("rg.view.frame.TestStack::new");
	var $spos = $s.length;
	$s.pop();
}
rg.view.frame.TestStack.__name__ = ["rg","view","frame","TestStack"];
rg.view.frame.TestStack.prototype.count = null;
rg.view.frame.TestStack.prototype.setup = function() {
	$s.push("rg.view.frame.TestStack::setup");
	var $spos = $s.length;
	this.count = 0;
	$s.pop();
}
rg.view.frame.TestStack.prototype.increment = function() {
	$s.push("rg.view.frame.TestStack::increment");
	var $spos = $s.length;
	this.count++;
	$s.pop();
}
rg.view.frame.TestStack.prototype.item = function(layout) {
	$s.push("rg.view.frame.TestStack::item");
	var $spos = $s.length;
	var i = new rg.view.frame.StackItem(layout);
	i.change = $closure(this,"increment");
	$s.pop();
	return i;
	$s.pop();
}
rg.view.frame.TestStack.prototype.assertReflows = function(expected,pos) {
	$s.push("rg.view.frame.TestStack::assertReflows");
	var $spos = $s.length;
	utest.Assert.equals(expected,this.count,null,pos);
	this.count = 0;
	$s.pop();
}
rg.view.frame.TestStack.prototype.testAddMany = function() {
	$s.push("rg.view.frame.TestStack::testAddMany");
	var $spos = $s.length;
	var stack = new rg.view.frame.Stack(50,100,rg.view.frame.Orientation.Vertical), items = [this.item(rg.view.frame.FrameLayout.Fill(0,0)),this.item(rg.view.frame.FrameLayout.Fixed(0,0,40)),this.item(rg.view.frame.FrameLayout.Fill(0,0))];
	stack.addItems(items);
	utest.Assert.equals(0,items[0].y,null,{ fileName : "TestStack.hx", lineNumber : 47, className : "rg.view.frame.TestStack", methodName : "testAddMany"});
	utest.Assert.equals(30,items[0].height,null,{ fileName : "TestStack.hx", lineNumber : 48, className : "rg.view.frame.TestStack", methodName : "testAddMany"});
	utest.Assert.equals(30,items[1].y,null,{ fileName : "TestStack.hx", lineNumber : 50, className : "rg.view.frame.TestStack", methodName : "testAddMany"});
	utest.Assert.equals(40,items[1].height,null,{ fileName : "TestStack.hx", lineNumber : 51, className : "rg.view.frame.TestStack", methodName : "testAddMany"});
	utest.Assert.equals(70,items[2].y,null,{ fileName : "TestStack.hx", lineNumber : 53, className : "rg.view.frame.TestStack", methodName : "testAddMany"});
	utest.Assert.equals(30,items[2].height,null,{ fileName : "TestStack.hx", lineNumber : 54, className : "rg.view.frame.TestStack", methodName : "testAddMany"});
	$s.pop();
}
rg.view.frame.TestStack.prototype.testAdd = function() {
	$s.push("rg.view.frame.TestStack::testAdd");
	var $spos = $s.length;
	var stack = new rg.view.frame.Stack(50,100,rg.view.frame.Orientation.Vertical), first = this.item(rg.view.frame.FrameLayout.Fill(5,10));
	utest.Assert.equals(0,first.x,null,{ fileName : "TestStack.hx", lineNumber : 61, className : "rg.view.frame.TestStack", methodName : "testAdd"});
	utest.Assert.equals(0,first.y,null,{ fileName : "TestStack.hx", lineNumber : 62, className : "rg.view.frame.TestStack", methodName : "testAdd"});
	utest.Assert.equals(0,first.width,null,{ fileName : "TestStack.hx", lineNumber : 63, className : "rg.view.frame.TestStack", methodName : "testAdd"});
	utest.Assert.equals(0,first.height,null,{ fileName : "TestStack.hx", lineNumber : 64, className : "rg.view.frame.TestStack", methodName : "testAdd"});
	stack.addItem(first);
	this.assertReflows(1,{ fileName : "TestStack.hx", lineNumber : 68, className : "rg.view.frame.TestStack", methodName : "testAdd"});
	utest.Assert.equals(0,first.x,null,{ fileName : "TestStack.hx", lineNumber : 70, className : "rg.view.frame.TestStack", methodName : "testAdd"});
	utest.Assert.equals(5,first.y,null,{ fileName : "TestStack.hx", lineNumber : 71, className : "rg.view.frame.TestStack", methodName : "testAdd"});
	utest.Assert.equals(50,first.width,null,{ fileName : "TestStack.hx", lineNumber : 72, className : "rg.view.frame.TestStack", methodName : "testAdd"});
	utest.Assert.equals(85,first.height,null,{ fileName : "TestStack.hx", lineNumber : 73, className : "rg.view.frame.TestStack", methodName : "testAdd"});
	var second = this.item(rg.view.frame.FrameLayout.Fixed(5,10,20));
	stack.addItem(second);
	this.assertReflows(2,{ fileName : "TestStack.hx", lineNumber : 79, className : "rg.view.frame.TestStack", methodName : "testAdd"});
	utest.Assert.equals(0,first.x,null,{ fileName : "TestStack.hx", lineNumber : 81, className : "rg.view.frame.TestStack", methodName : "testAdd"});
	utest.Assert.equals(5,first.y,null,{ fileName : "TestStack.hx", lineNumber : 82, className : "rg.view.frame.TestStack", methodName : "testAdd"});
	utest.Assert.equals(50,first.width,null,{ fileName : "TestStack.hx", lineNumber : 83, className : "rg.view.frame.TestStack", methodName : "testAdd"});
	utest.Assert.equals(50,first.height,null,{ fileName : "TestStack.hx", lineNumber : 84, className : "rg.view.frame.TestStack", methodName : "testAdd"});
	utest.Assert.equals(0,second.x,null,{ fileName : "TestStack.hx", lineNumber : 86, className : "rg.view.frame.TestStack", methodName : "testAdd"});
	utest.Assert.equals(70,second.y,null,{ fileName : "TestStack.hx", lineNumber : 87, className : "rg.view.frame.TestStack", methodName : "testAdd"});
	utest.Assert.equals(50,second.width,null,{ fileName : "TestStack.hx", lineNumber : 88, className : "rg.view.frame.TestStack", methodName : "testAdd"});
	utest.Assert.equals(20,second.height,null,{ fileName : "TestStack.hx", lineNumber : 89, className : "rg.view.frame.TestStack", methodName : "testAdd"});
	var third = this.item(rg.view.frame.FrameLayout.FillPercent(5,10,0.1));
	stack.addItem(third);
	this.assertReflows(3,{ fileName : "TestStack.hx", lineNumber : 94, className : "rg.view.frame.TestStack", methodName : "testAdd"});
	utest.Assert.equals(0,first.x,null,{ fileName : "TestStack.hx", lineNumber : 96, className : "rg.view.frame.TestStack", methodName : "testAdd"});
	utest.Assert.equals(0,second.x,null,{ fileName : "TestStack.hx", lineNumber : 97, className : "rg.view.frame.TestStack", methodName : "testAdd"});
	utest.Assert.equals(0,third.x,null,{ fileName : "TestStack.hx", lineNumber : 98, className : "rg.view.frame.TestStack", methodName : "testAdd"});
	utest.Assert.equals(50,first.width,null,{ fileName : "TestStack.hx", lineNumber : 99, className : "rg.view.frame.TestStack", methodName : "testAdd"});
	utest.Assert.equals(50,second.width,null,{ fileName : "TestStack.hx", lineNumber : 100, className : "rg.view.frame.TestStack", methodName : "testAdd"});
	utest.Assert.equals(50,third.width,null,{ fileName : "TestStack.hx", lineNumber : 101, className : "rg.view.frame.TestStack", methodName : "testAdd"});
	utest.Assert.equals(5,first.y,null,{ fileName : "TestStack.hx", lineNumber : 103, className : "rg.view.frame.TestStack", methodName : "testAdd"});
	utest.Assert.equals(25,first.height,null,{ fileName : "TestStack.hx", lineNumber : 104, className : "rg.view.frame.TestStack", methodName : "testAdd"});
	utest.Assert.equals(45,second.y,null,{ fileName : "TestStack.hx", lineNumber : 105, className : "rg.view.frame.TestStack", methodName : "testAdd"});
	utest.Assert.equals(20,second.height,null,{ fileName : "TestStack.hx", lineNumber : 106, className : "rg.view.frame.TestStack", methodName : "testAdd"});
	utest.Assert.equals(80,third.y,null,{ fileName : "TestStack.hx", lineNumber : 107, className : "rg.view.frame.TestStack", methodName : "testAdd"});
	utest.Assert.equals(10,third.height,null,{ fileName : "TestStack.hx", lineNumber : 108, className : "rg.view.frame.TestStack", methodName : "testAdd"});
	$s.pop();
}
rg.view.frame.TestStack.prototype.testInsert = function() {
	$s.push("rg.view.frame.TestStack::testInsert");
	var $spos = $s.length;
	var stack = new rg.view.frame.Stack(50,100,rg.view.frame.Orientation.Vertical), first = this.item(rg.view.frame.FrameLayout.Fill(5,10)), second = this.item(rg.view.frame.FrameLayout.Fixed(5,10,20)), third = this.item(rg.view.frame.FrameLayout.Fixed(5,10,20)), size;
	stack.addItem(first);
	stack.insertItem(0,second);
	this.assertReflows(3,{ fileName : "TestStack.hx", lineNumber : 121, className : "rg.view.frame.TestStack", methodName : "testInsert"});
	utest.Assert.equals(40,first.y,null,{ fileName : "TestStack.hx", lineNumber : 123, className : "rg.view.frame.TestStack", methodName : "testInsert"});
	utest.Assert.equals(50,first.height,null,{ fileName : "TestStack.hx", lineNumber : 124, className : "rg.view.frame.TestStack", methodName : "testInsert"});
	utest.Assert.equals(5,second.y,null,{ fileName : "TestStack.hx", lineNumber : 126, className : "rg.view.frame.TestStack", methodName : "testInsert"});
	utest.Assert.equals(20,second.height,null,{ fileName : "TestStack.hx", lineNumber : 127, className : "rg.view.frame.TestStack", methodName : "testInsert"});
	stack.insertItem(1,third);
	this.assertReflows(2,{ fileName : "TestStack.hx", lineNumber : 130, className : "rg.view.frame.TestStack", methodName : "testInsert"});
	utest.Assert.equals(75,first.y,null,{ fileName : "TestStack.hx", lineNumber : 132, className : "rg.view.frame.TestStack", methodName : "testInsert"});
	utest.Assert.equals(15,first.height,null,{ fileName : "TestStack.hx", lineNumber : 133, className : "rg.view.frame.TestStack", methodName : "testInsert"});
	utest.Assert.equals(5,second.y,null,{ fileName : "TestStack.hx", lineNumber : 135, className : "rg.view.frame.TestStack", methodName : "testInsert"});
	utest.Assert.equals(20,second.height,null,{ fileName : "TestStack.hx", lineNumber : 136, className : "rg.view.frame.TestStack", methodName : "testInsert"});
	utest.Assert.equals(40,third.y,null,{ fileName : "TestStack.hx", lineNumber : 138, className : "rg.view.frame.TestStack", methodName : "testInsert"});
	utest.Assert.equals(20,third.height,null,{ fileName : "TestStack.hx", lineNumber : 139, className : "rg.view.frame.TestStack", methodName : "testInsert"});
	$s.pop();
}
rg.view.frame.TestStack.prototype.testHorizontal = function() {
	$s.push("rg.view.frame.TestStack::testHorizontal");
	var $spos = $s.length;
	var stack = new rg.view.frame.Stack(50,100,rg.view.frame.Orientation.Horizontal), first = this.item(rg.view.frame.FrameLayout.Fill(5,10));
	stack.addItem(first);
	utest.Assert.equals(5,first.x,null,{ fileName : "TestStack.hx", lineNumber : 149, className : "rg.view.frame.TestStack", methodName : "testHorizontal"});
	utest.Assert.equals(0,first.y,null,{ fileName : "TestStack.hx", lineNumber : 150, className : "rg.view.frame.TestStack", methodName : "testHorizontal"});
	utest.Assert.equals(35,first.width,null,{ fileName : "TestStack.hx", lineNumber : 151, className : "rg.view.frame.TestStack", methodName : "testHorizontal"});
	utest.Assert.equals(100,first.height,null,{ fileName : "TestStack.hx", lineNumber : 152, className : "rg.view.frame.TestStack", methodName : "testHorizontal"});
	$s.pop();
}
rg.view.frame.TestStack.prototype.testFloating = function() {
	$s.push("rg.view.frame.TestStack::testFloating");
	var $spos = $s.length;
	var stack = new rg.view.frame.Stack(50,100,rg.view.frame.Orientation.Vertical), first = this.item(rg.view.frame.FrameLayout.Fill(5,10)), second = this.item(rg.view.frame.FrameLayout.Floating(20,25,30,35));
	stack.addItem(first);
	stack.addItem(second);
	this.assertReflows(2,{ fileName : "TestStack.hx", lineNumber : 163, className : "rg.view.frame.TestStack", methodName : "testFloating"});
	utest.Assert.equals(5,first.y,null,{ fileName : "TestStack.hx", lineNumber : 165, className : "rg.view.frame.TestStack", methodName : "testFloating"});
	utest.Assert.equals(85,first.height,null,{ fileName : "TestStack.hx", lineNumber : 166, className : "rg.view.frame.TestStack", methodName : "testFloating"});
	utest.Assert.equals(25,second.y,null,{ fileName : "TestStack.hx", lineNumber : 168, className : "rg.view.frame.TestStack", methodName : "testFloating"});
	utest.Assert.equals(35,second.height,null,{ fileName : "TestStack.hx", lineNumber : 169, className : "rg.view.frame.TestStack", methodName : "testFloating"});
	$s.pop();
}
rg.view.frame.TestStack.prototype.__class__ = rg.view.frame.TestStack;
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
rg.controller.info.TestInfoVariable = function(p) {
	$s.push("rg.controller.info.TestInfoVariable::new");
	var $spos = $s.length;
	$s.pop();
}
rg.controller.info.TestInfoVariable.__name__ = ["rg","controller","info","TestInfoVariable"];
rg.controller.info.TestInfoVariable.prototype.testFeed = function() {
	$s.push("rg.controller.info.TestInfoVariable::testFeed");
	var $spos = $s.length;
	var info = new rg.controller.info.InfoVariable();
	utest.Assert.isNull(info.type,null,{ fileName : "TestInfoVariable.hx", lineNumber : 18, className : "rg.controller.info.TestInfoVariable", methodName : "testFeed"});
	utest.Assert.isNull(info.min,null,{ fileName : "TestInfoVariable.hx", lineNumber : 19, className : "rg.controller.info.TestInfoVariable", methodName : "testFeed"});
	utest.Assert.isNull(info.max,null,{ fileName : "TestInfoVariable.hx", lineNumber : 20, className : "rg.controller.info.TestInfoVariable", methodName : "testFeed"});
	utest.Assert.isNull(info.values,null,{ fileName : "TestInfoVariable.hx", lineNumber : 21, className : "rg.controller.info.TestInfoVariable", methodName : "testFeed"});
	utest.Assert.raises(function() {
		$s.push("rg.controller.info.TestInfoVariable::testFeed@24");
		var $spos = $s.length;
		rg.controller.info.Info.feed(info,{ type : 1});
		$s.pop();
	},thx.error.Error,null,null,{ fileName : "TestInfoVariable.hx", lineNumber : 24, className : "rg.controller.info.TestInfoVariable", methodName : "testFeed"});
	rg.controller.info.Info.feed(info,{ type : ".#time:hour"});
	utest.Assert.equals(rg.util.Properties.timeProperty("hour"),info.type,null,{ fileName : "TestInfoVariable.hx", lineNumber : 28, className : "rg.controller.info.TestInfoVariable", methodName : "testFeed"});
	rg.controller.info.Info.feed(info,{ view : [1]});
	utest.Assert.equals(1,info.min,null,{ fileName : "TestInfoVariable.hx", lineNumber : 32, className : "rg.controller.info.TestInfoVariable", methodName : "testFeed"});
	utest.Assert.raises(function() {
		$s.push("rg.controller.info.TestInfoVariable::testFeed@35");
		var $spos = $s.length;
		rg.controller.info.Info.feed(info,{ view : { }});
		$s.pop();
	},thx.error.Error,null,null,{ fileName : "TestInfoVariable.hx", lineNumber : 35, className : "rg.controller.info.TestInfoVariable", methodName : "testFeed"});
	rg.controller.info.Info.feed(info,{ view : [1,3]});
	utest.Assert.equals(3,info.max,null,{ fileName : "TestInfoVariable.hx", lineNumber : 39, className : "rg.controller.info.TestInfoVariable", methodName : "testFeed"});
	utest.Assert.raises(function() {
		$s.push("rg.controller.info.TestInfoVariable::testFeed@42");
		var $spos = $s.length;
		rg.controller.info.Info.feed(info,{ values : { }});
		$s.pop();
	},thx.error.Error,null,null,{ fileName : "TestInfoVariable.hx", lineNumber : 42, className : "rg.controller.info.TestInfoVariable", methodName : "testFeed"});
	rg.controller.info.Info.feed(info,{ values : [1,2,3]});
	utest.Assert.same([1,2,3],info.values,null,null,{ fileName : "TestInfoVariable.hx", lineNumber : 46, className : "rg.controller.info.TestInfoVariable", methodName : "testFeed"});
	rg.controller.info.Info.feed(info,{ groupby : "week"});
	utest.Assert.equals("week",info.groupBy,null,{ fileName : "TestInfoVariable.hx", lineNumber : 49, className : "rg.controller.info.TestInfoVariable", methodName : "testFeed"});
	$s.pop();
}
rg.controller.info.TestInfoVariable.prototype.__class__ = rg.controller.info.TestInfoVariable;
rg.controller.factory.TestFactoryAxis = function(p) {
	$s.push("rg.controller.factory.TestFactoryAxis::new");
	var $spos = $s.length;
	$s.pop();
}
rg.controller.factory.TestFactoryAxis.__name__ = ["rg","controller","factory","TestFactoryAxis"];
rg.controller.factory.TestFactoryAxis.prototype.testAxisTime = function() {
	$s.push("rg.controller.factory.TestFactoryAxis::testAxisTime");
	var $spos = $s.length;
	var factory = new rg.controller.factory.FactoryAxis();
	var axis = Types["as"](factory.createDiscrete(rg.util.Properties.timeProperty("hour"),[1,2,3],null),rg.data.AxisTime);
	utest.Assert.notNull(axis,null,{ fileName : "TestFactoryAxis.hx", lineNumber : 21, className : "rg.controller.factory.TestFactoryAxis", methodName : "testAxisTime"});
	utest.Assert.equals("hour",axis.periodicity,null,{ fileName : "TestFactoryAxis.hx", lineNumber : 22, className : "rg.controller.factory.TestFactoryAxis", methodName : "testAxisTime"});
	$s.pop();
}
rg.controller.factory.TestFactoryAxis.prototype.testAxisGroupByTime = function() {
	$s.push("rg.controller.factory.TestFactoryAxis::testAxisGroupByTime");
	var $spos = $s.length;
	var factory = new rg.controller.factory.FactoryAxis();
	var axis = Types["as"](factory.createDiscrete(rg.util.Properties.timeProperty("hour"),[1,2,3],"day"),rg.data.AxisGroupByTime);
	utest.Assert.notNull(axis,null,{ fileName : "TestFactoryAxis.hx", lineNumber : 29, className : "rg.controller.factory.TestFactoryAxis", methodName : "testAxisGroupByTime"});
	utest.Assert.equals("day",axis.groupBy,null,{ fileName : "TestFactoryAxis.hx", lineNumber : 30, className : "rg.controller.factory.TestFactoryAxis", methodName : "testAxisGroupByTime"});
	$s.pop();
}
rg.controller.factory.TestFactoryAxis.prototype.testAxisOrdinal = function() {
	$s.push("rg.controller.factory.TestFactoryAxis::testAxisOrdinal");
	var $spos = $s.length;
	var factory = new rg.controller.factory.FactoryAxis();
	var axis = Types["as"](factory.createDiscrete("count",[1,2,3],null),rg.data.AxisOrdinal);
	utest.Assert.equals(1,axis.getFirst(),null,{ fileName : "TestFactoryAxis.hx", lineNumber : 37, className : "rg.controller.factory.TestFactoryAxis", methodName : "testAxisOrdinal"});
	utest.Assert.equals(3,axis.getLast(),null,{ fileName : "TestFactoryAxis.hx", lineNumber : 38, className : "rg.controller.factory.TestFactoryAxis", methodName : "testAxisOrdinal"});
	utest.Assert.same(thx.collections.Set.ofArray([1,2,3]),axis.getValues(),null,null,{ fileName : "TestFactoryAxis.hx", lineNumber : 39, className : "rg.controller.factory.TestFactoryAxis", methodName : "testAxisOrdinal"});
	axis = Types["as"](factory.createDiscrete("count",null,null),rg.data.AxisOrdinal);
	utest.Assert.isNull(axis.getFirst(),null,{ fileName : "TestFactoryAxis.hx", lineNumber : 42, className : "rg.controller.factory.TestFactoryAxis", methodName : "testAxisOrdinal"});
	utest.Assert.isNull(axis.getLast(),null,{ fileName : "TestFactoryAxis.hx", lineNumber : 43, className : "rg.controller.factory.TestFactoryAxis", methodName : "testAxisOrdinal"});
	utest.Assert.equals(0,axis.getValues().length,null,{ fileName : "TestFactoryAxis.hx", lineNumber : 44, className : "rg.controller.factory.TestFactoryAxis", methodName : "testAxisOrdinal"});
	$s.pop();
}
rg.controller.factory.TestFactoryAxis.prototype.__class__ = rg.controller.factory.TestFactoryAxis;
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
	var $tmp = this.g.node().getBBox();
	$s.pop();
	return $tmp;
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
		var $tmp = this.createFromQuery(info.path,info.event,info.query,info.groupBy);
		$s.pop();
		return $tmp;
	}
	throw new thx.error.Error("to create a query you need to reference by name an existing data source or provide  at least the data and the name or the event and the path parameters",null,null,{ fileName : "FactoryDataSource.hx", lineNumber : 50, className : "rg.controller.factory.FactoryDataSource", methodName : "create"});
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
rg.controller.factory.FactoryDataSource.prototype.createFromQuery = function(path,event,query,groupby) {
	$s.push("rg.controller.factory.FactoryDataSource::createFromQuery");
	var $spos = $s.length;
	if(null == query) query = "";
	var $tmp = new rg.data.source.DataSourceReportGrid(this.executor,path,event,this.parser.parse(query),groupby);
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
rg.view.svg.widget.Balloon = function(container,bindOnTop) {
	if( container === $_ ) return;
	$s.push("rg.view.svg.widget.Balloon::new");
	var $spos = $s.length;
	if(bindOnTop == null) bindOnTop = false;
	if(bindOnTop) {
		var parent = container.node();
		while(null != parent && parent.nodeName != "svg") parent = parent.parentNode;
		this.container = null == parent?container:thx.js.Dom.selectNode(parent);
	} else this.container = container;
	this.visible = true;
	this.duration = 500;
	this.minwidth = 30;
	this.setPreferredSide(2);
	this.ease = thx.math.Ease.mode(thx.math.EaseMode.EaseInEaseOut,thx.math.Equations.cubic);
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
	if(animate) {
		var $int = thx.math.Equations.elasticf(), tid = ++this.transition_id, ix = Floats.interpolatef(this.x,x,this.ease), iy = Floats.interpolatef(this.y,y,this.ease), duration = this.duration, mt = $closure(this,"_moveTo"), me = this;
		thx.js.Timer.timer(function(t) {
			$s.push("rg.view.svg.widget.Balloon::moveTo@194");
			var $spos = $s.length;
			if(tid != me.transition_id) {
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
	this.balloon.attr("transform").string("translate(" + (this.x = x) + ", " + (this.y = y) + ")");
	this.frame.attr("transform").string("translate(" + tx + ", " + ty + ")").selectAll("path").attr("d").string(rg.view.svg.widget.BaloonShape.shape(this.boxWidth,this.boxHeight,this.roundedCorner,this.roundedCorner,side,offset));
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
hxevents.EventException = { __ename__ : ["hxevents","EventException"], __constructs__ : ["StopPropagation"] }
hxevents.EventException.StopPropagation = ["StopPropagation",0];
hxevents.EventException.StopPropagation.toString = $estr;
hxevents.EventException.StopPropagation.__enum__ = hxevents.EventException;
utest.ui.common.ResultStats = function(p) {
	if( p === $_ ) return;
	$s.push("utest.ui.common.ResultStats::new");
	var $spos = $s.length;
	this.assertations = 0;
	this.successes = 0;
	this.failures = 0;
	this.errors = 0;
	this.warnings = 0;
	this.isOk = true;
	this.hasFailures = false;
	this.hasErrors = false;
	this.hasWarnings = false;
	this.onAddSuccesses = new utest.Dispatcher();
	this.onAddFailures = new utest.Dispatcher();
	this.onAddErrors = new utest.Dispatcher();
	this.onAddWarnings = new utest.Dispatcher();
	$s.pop();
}
utest.ui.common.ResultStats.__name__ = ["utest","ui","common","ResultStats"];
utest.ui.common.ResultStats.prototype.assertations = null;
utest.ui.common.ResultStats.prototype.successes = null;
utest.ui.common.ResultStats.prototype.failures = null;
utest.ui.common.ResultStats.prototype.errors = null;
utest.ui.common.ResultStats.prototype.warnings = null;
utest.ui.common.ResultStats.prototype.onAddSuccesses = null;
utest.ui.common.ResultStats.prototype.onAddFailures = null;
utest.ui.common.ResultStats.prototype.onAddErrors = null;
utest.ui.common.ResultStats.prototype.onAddWarnings = null;
utest.ui.common.ResultStats.prototype.isOk = null;
utest.ui.common.ResultStats.prototype.hasFailures = null;
utest.ui.common.ResultStats.prototype.hasErrors = null;
utest.ui.common.ResultStats.prototype.hasWarnings = null;
utest.ui.common.ResultStats.prototype.addSuccesses = function(v) {
	$s.push("utest.ui.common.ResultStats::addSuccesses");
	var $spos = $s.length;
	if(v == 0) {
		$s.pop();
		return;
	}
	this.assertations += v;
	this.successes += v;
	this.onAddSuccesses.dispatch(v);
	$s.pop();
}
utest.ui.common.ResultStats.prototype.addFailures = function(v) {
	$s.push("utest.ui.common.ResultStats::addFailures");
	var $spos = $s.length;
	if(v == 0) {
		$s.pop();
		return;
	}
	this.assertations += v;
	this.failures += v;
	this.hasFailures = this.failures > 0;
	this.isOk = !(this.hasFailures || this.hasErrors || this.hasWarnings);
	this.onAddFailures.dispatch(v);
	$s.pop();
}
utest.ui.common.ResultStats.prototype.addErrors = function(v) {
	$s.push("utest.ui.common.ResultStats::addErrors");
	var $spos = $s.length;
	if(v == 0) {
		$s.pop();
		return;
	}
	this.assertations += v;
	this.errors += v;
	this.hasErrors = this.errors > 0;
	this.isOk = !(this.hasFailures || this.hasErrors || this.hasWarnings);
	this.onAddErrors.dispatch(v);
	$s.pop();
}
utest.ui.common.ResultStats.prototype.addWarnings = function(v) {
	$s.push("utest.ui.common.ResultStats::addWarnings");
	var $spos = $s.length;
	if(v == 0) {
		$s.pop();
		return;
	}
	this.assertations += v;
	this.warnings += v;
	this.hasWarnings = this.warnings > 0;
	this.isOk = !(this.hasFailures || this.hasErrors || this.hasWarnings);
	this.onAddWarnings.dispatch(v);
	$s.pop();
}
utest.ui.common.ResultStats.prototype.sum = function(other) {
	$s.push("utest.ui.common.ResultStats::sum");
	var $spos = $s.length;
	this.addSuccesses(other.successes);
	this.addFailures(other.failures);
	this.addErrors(other.errors);
	this.addWarnings(other.warnings);
	$s.pop();
}
utest.ui.common.ResultStats.prototype.subtract = function(other) {
	$s.push("utest.ui.common.ResultStats::subtract");
	var $spos = $s.length;
	this.addSuccesses(-other.successes);
	this.addFailures(-other.failures);
	this.addErrors(-other.errors);
	this.addWarnings(-other.warnings);
	$s.pop();
}
utest.ui.common.ResultStats.prototype.wire = function(dependant) {
	$s.push("utest.ui.common.ResultStats::wire");
	var $spos = $s.length;
	dependant.onAddSuccesses.add($closure(this,"addSuccesses"));
	dependant.onAddFailures.add($closure(this,"addFailures"));
	dependant.onAddErrors.add($closure(this,"addErrors"));
	dependant.onAddWarnings.add($closure(this,"addWarnings"));
	this.sum(dependant);
	$s.pop();
}
utest.ui.common.ResultStats.prototype.unwire = function(dependant) {
	$s.push("utest.ui.common.ResultStats::unwire");
	var $spos = $s.length;
	dependant.onAddSuccesses.remove($closure(this,"addSuccesses"));
	dependant.onAddFailures.remove($closure(this,"addFailures"));
	dependant.onAddErrors.remove($closure(this,"addErrors"));
	dependant.onAddWarnings.remove($closure(this,"addWarnings"));
	this.subtract(dependant);
	$s.pop();
}
utest.ui.common.ResultStats.prototype.__class__ = utest.ui.common.ResultStats;
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
thx.collections.Set = function(p) {
	if( p === $_ ) return;
	$s.push("thx.collections.Set::new");
	var $spos = $s.length;
	this._v = [];
	this.length = 0;
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
thx.collections.Set.prototype.length = null;
thx.collections.Set.prototype._v = null;
thx.collections.Set.prototype.add = function(v) {
	$s.push("thx.collections.Set::add");
	var $spos = $s.length;
	this._v.remove(v);
	this._v.push(v);
	this.length = this._v.length;
	$s.pop();
}
thx.collections.Set.prototype.remove = function(v) {
	$s.push("thx.collections.Set::remove");
	var $spos = $s.length;
	var t = this._v.remove(v);
	this.length = this._v.length;
	$s.pop();
	return t;
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
utest.Assertation = { __ename__ : ["utest","Assertation"], __constructs__ : ["Success","Failure","Error","SetupError","TeardownError","TimeoutError","AsyncError","Warning"] }
utest.Assertation.Success = function(pos) { var $x = ["Success",0,pos]; $x.__enum__ = utest.Assertation; $x.toString = $estr; return $x; }
utest.Assertation.Failure = function(msg,pos) { var $x = ["Failure",1,msg,pos]; $x.__enum__ = utest.Assertation; $x.toString = $estr; return $x; }
utest.Assertation.Error = function(e,stack) { var $x = ["Error",2,e,stack]; $x.__enum__ = utest.Assertation; $x.toString = $estr; return $x; }
utest.Assertation.SetupError = function(e,stack) { var $x = ["SetupError",3,e,stack]; $x.__enum__ = utest.Assertation; $x.toString = $estr; return $x; }
utest.Assertation.TeardownError = function(e,stack) { var $x = ["TeardownError",4,e,stack]; $x.__enum__ = utest.Assertation; $x.toString = $estr; return $x; }
utest.Assertation.TimeoutError = function(missedAsyncs,stack) { var $x = ["TimeoutError",5,missedAsyncs,stack]; $x.__enum__ = utest.Assertation; $x.toString = $estr; return $x; }
utest.Assertation.AsyncError = function(e,stack) { var $x = ["AsyncError",6,e,stack]; $x.__enum__ = utest.Assertation; $x.toString = $estr; return $x; }
utest.Assertation.Warning = function(msg) { var $x = ["Warning",7,msg]; $x.__enum__ = utest.Assertation; $x.toString = $estr; return $x; }
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
	this.animation = new rg.controller.info.InfoAnimation();
	this.label = new rg.controller.info.InfoLabel();
	this.gradientlightness = 1.5;
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
		if(null == v || !Math.isFinite(v)) throw new thx.error.Error("when 'fixed' is used a number should follow the 'dash' character",null,null,{ fileName : "InfoPieChart.hx", lineNumber : 58, className : "rg.controller.info.InfoPieChart", methodName : "filterOrientation"});
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
		throw new thx.error.Error("invalid filter orientation '{0}'",null,s,{ fileName : "InfoPieChart.hx", lineNumber : 67, className : "rg.controller.info.InfoPieChart", methodName : "filterOrientation"});
	}
	$s.pop();
}
rg.controller.info.InfoPieChart.filters = function() {
	$s.push("rg.controller.info.InfoPieChart::filters");
	var $spos = $s.length;
	var $tmp = [{ field : "gradientlightness", validator : function(v) {
		$s.push("rg.controller.info.InfoPieChart::filters@75");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Float);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "labelradius", validator : function(v) {
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
	}, filter : null},{ field : "animation", validator : function(v) {
		$s.push("rg.controller.info.InfoPieChart::filters@113");
		var $spos = $s.length;
		var $tmp = Reflect.isObject(v) && null == Type.getClass(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoPieChart::filters@114");
		var $spos = $s.length;
		var $tmp = [{ field : "animation", value : rg.controller.info.Info.feed(new rg.controller.info.InfoAnimation(),v)}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "label", validator : function(v) {
		$s.push("rg.controller.info.InfoPieChart::filters@120");
		var $spos = $s.length;
		var $tmp = Reflect.isObject(v) && null == Type.getClass(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoPieChart::filters@121");
		var $spos = $s.length;
		var $tmp = [{ field : "label", value : rg.controller.info.Info.feed(new rg.controller.info.InfoLabel(),v)}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "sort", validator : function(v) {
		$s.push("rg.controller.info.InfoPieChart::filters@127");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoPieChart::filters@128");
		var $spos = $s.length;
		var $tmp = [{ field : "sortDataPoint", value : v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "click", validator : function(v) {
		$s.push("rg.controller.info.InfoPieChart::filters@134");
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
rg.controller.info.InfoPieChart.prototype.labelradius = null;
rg.controller.info.InfoPieChart.prototype.labeldisplay = null;
rg.controller.info.InfoPieChart.prototype.labelorientation = null;
rg.controller.info.InfoPieChart.prototype.innerradius = null;
rg.controller.info.InfoPieChart.prototype.outerradius = null;
rg.controller.info.InfoPieChart.prototype.overradius = null;
rg.controller.info.InfoPieChart.prototype.animation = null;
rg.controller.info.InfoPieChart.prototype.label = null;
rg.controller.info.InfoPieChart.prototype.gradientlightness = null;
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
	if(Std["is"](axis,rg.data.AxisTime)) {
		var periodicity = ((function($this) {
			var $r;
			var $t = axis;
			if(Std["is"]($t,rg.data.AxisTime)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).periodicity;
		min = Dates.snap(this.defaultMin(this.normalizeTime(info.min),periodicity),periodicity);
		max = Dates.snap(this.defaultMax(this.normalizeTime(info.max),periodicity),periodicity);
	} else if(Std["is"](axis,rg.data.AxisGroupByTime)) {
		var periodicity = ((function($this) {
			var $r;
			var $t = axis;
			if(Std["is"]($t,rg.data.AxisGroupByTime)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).groupBy;
		min = this.defaultMin(this.normalizeTime(info.min),periodicity);
		max = this.defaultMax(this.normalizeTime(info.max),periodicity);
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
	throw new thx.error.Error("unable to normalize the value '{0}' into a valid date value",v,null,{ fileName : "FactoryVariableIndependent.hx", lineNumber : 51, className : "rg.controller.factory.FactoryVariableIndependent", methodName : "normalizeTime"});
	$s.pop();
}
rg.controller.factory.FactoryVariableIndependent.prototype.defaultMin = function(min,periodicity) {
	$s.push("rg.controller.factory.FactoryVariableIndependent::defaultMin");
	var $spos = $s.length;
	if(null != min) {
		$s.pop();
		return min;
	}
	switch(periodicity) {
	case "eternity":
		$s.pop();
		return null;
	case "minute":
		var $tmp = thx.date.DateParser.parse("360 minutes ago").getTime();
		$s.pop();
		return $tmp;
	case "hour":
		var $tmp = thx.date.DateParser.parse("24 hours ago").getTime();
		$s.pop();
		return $tmp;
	case "day":
		var $tmp = thx.date.DateParser.parse("30 days ago").getTime();
		$s.pop();
		return $tmp;
	case "week":
		var $tmp = thx.date.DateParser.parse("16 weeks ago").getTime();
		$s.pop();
		return $tmp;
	case "month":
		var $tmp = thx.date.DateParser.parse("12 months ago").getTime();
		$s.pop();
		return $tmp;
	case "year":
		var $tmp = thx.date.DateParser.parse("6 years ago").getTime();
		$s.pop();
		return $tmp;
	default:
		throw new thx.error.Error("invalid periodicity '{0}'",null,periodicity,{ fileName : "FactoryVariableIndependent.hx", lineNumber : 75, className : "rg.controller.factory.FactoryVariableIndependent", methodName : "defaultMin"});
	}
	$s.pop();
}
rg.controller.factory.FactoryVariableIndependent.prototype.defaultMax = function(max,periodicity) {
	$s.push("rg.controller.factory.FactoryVariableIndependent::defaultMax");
	var $spos = $s.length;
	if(null != max) {
		$s.pop();
		return max;
	}
	switch(periodicity) {
	case "eternity":
		$s.pop();
		return null;
	case "minute":case "hour":
		var $tmp = thx.date.DateParser.parse("now").getTime();
		$s.pop();
		return $tmp;
	case "day":case "week":case "month":case "year":
		var $tmp = thx.date.DateParser.parse("today").getTime();
		$s.pop();
		return $tmp;
	default:
		throw new thx.error.Error("invalid periodicity '{0}'",null,periodicity,{ fileName : "FactoryVariableIndependent.hx", lineNumber : 92, className : "rg.controller.factory.FactoryVariableIndependent", methodName : "defaultMax"});
	}
	$s.pop();
}
rg.controller.factory.FactoryVariableIndependent.prototype.__class__ = rg.controller.factory.FactoryVariableIndependent;
rg.data.source.rgquery.transform.TransformCountTimeSeries = function(properties,event,periodicity,unit) {
	if( properties === $_ ) return;
	$s.push("rg.data.source.rgquery.transform.TransformCountTimeSeries::new");
	var $spos = $s.length;
	this.properties = properties;
	this.unit = unit;
	this.periodicity = periodicity;
	this.event = event;
	$s.pop();
}
rg.data.source.rgquery.transform.TransformCountTimeSeries.__name__ = ["rg","data","source","rgquery","transform","TransformCountTimeSeries"];
rg.data.source.rgquery.transform.TransformCountTimeSeries.prototype.properties = null;
rg.data.source.rgquery.transform.TransformCountTimeSeries.prototype.unit = null;
rg.data.source.rgquery.transform.TransformCountTimeSeries.prototype.periodicity = null;
rg.data.source.rgquery.transform.TransformCountTimeSeries.prototype.event = null;
rg.data.source.rgquery.transform.TransformCountTimeSeries.prototype.transform = function(data) {
	$s.push("rg.data.source.rgquery.transform.TransformCountTimeSeries::transform");
	var $spos = $s.length;
	var properties = this.properties, unit = this.unit, event = this.event, periodicity = this.periodicity;
	if(null == data.data) {
		var $tmp = [];
		$s.pop();
		return $tmp;
	}
	var result = data.data.map(function(d,_) {
		$s.push("rg.data.source.rgquery.transform.TransformCountTimeSeries::transform@34");
		var $spos = $s.length;
		var p = Objects.addFields(Dynamics.clone(properties),[rg.util.Properties.timeProperty(periodicity),unit,"event"],[d[0],d[1],event]);
		$s.pop();
		return p;
		$s.pop();
	});
	$s.pop();
	return result;
	$s.pop();
}
rg.data.source.rgquery.transform.TransformCountTimeSeries.prototype.__class__ = rg.data.source.rgquery.transform.TransformCountTimeSeries;
rg.data.source.rgquery.transform.TransformCountTimeSeries.__interfaces__ = [rg.data.source.ITransform];
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
utest.ui.text.PlainTextReport = function(runner,outputHandler) {
	if( runner === $_ ) return;
	$s.push("utest.ui.text.PlainTextReport::new");
	var $spos = $s.length;
	this.aggregator = new utest.ui.common.ResultAggregator(runner,true);
	runner.onStart.add($closure(this,"start"));
	this.aggregator.onComplete.add($closure(this,"complete"));
	if(null != outputHandler) this.setHandler(outputHandler);
	this.displaySuccessResults = utest.ui.common.SuccessResultsDisplayMode.AlwaysShowSuccessResults;
	this.displayHeader = utest.ui.common.HeaderDisplayMode.AlwaysShowHeader;
	$s.pop();
}
utest.ui.text.PlainTextReport.__name__ = ["utest","ui","text","PlainTextReport"];
utest.ui.text.PlainTextReport.prototype.displaySuccessResults = null;
utest.ui.text.PlainTextReport.prototype.displayHeader = null;
utest.ui.text.PlainTextReport.prototype.handler = null;
utest.ui.text.PlainTextReport.prototype.aggregator = null;
utest.ui.text.PlainTextReport.prototype.newline = null;
utest.ui.text.PlainTextReport.prototype.indent = null;
utest.ui.text.PlainTextReport.prototype.setHandler = function(handler) {
	$s.push("utest.ui.text.PlainTextReport::setHandler");
	var $spos = $s.length;
	this.handler = handler;
	$s.pop();
}
utest.ui.text.PlainTextReport.prototype.startTime = null;
utest.ui.text.PlainTextReport.prototype.start = function(e) {
	$s.push("utest.ui.text.PlainTextReport::start");
	var $spos = $s.length;
	this.startTime = haxe.Timer.stamp();
	$s.pop();
}
utest.ui.text.PlainTextReport.prototype.indents = function(c) {
	$s.push("utest.ui.text.PlainTextReport::indents");
	var $spos = $s.length;
	var s = "";
	var _g = 0;
	while(_g < c) {
		var _ = _g++;
		s += this.indent;
	}
	$s.pop();
	return s;
	$s.pop();
}
utest.ui.text.PlainTextReport.prototype.dumpStack = function(stack) {
	$s.push("utest.ui.text.PlainTextReport::dumpStack");
	var $spos = $s.length;
	if(stack.length == 0) {
		$s.pop();
		return "";
	}
	var parts = haxe.Stack.toString(stack).split("\n");
	var r = [];
	var _g = 0;
	while(_g < parts.length) {
		var part = parts[_g];
		++_g;
		if(part.indexOf(" utest.") >= 0) continue;
		r.push(part);
	}
	var $tmp = r.join(this.newline);
	$s.pop();
	return $tmp;
	$s.pop();
}
utest.ui.text.PlainTextReport.prototype.addHeader = function(buf,result) {
	$s.push("utest.ui.text.PlainTextReport::addHeader");
	var $spos = $s.length;
	if(!utest.ui.common.ReportTools.hasHeader(this,result.stats)) {
		$s.pop();
		return;
	}
	var end = haxe.Timer.stamp();
	var time = Std["int"]((end - this.startTime) * 1000) / 1000;
	buf.b[buf.b.length] = "results: " + (result.stats.isOk?"ALL TESTS OK":"SOME TESTS FAILURES") + this.newline + " " + this.newline;
	buf.b[buf.b.length] = "assertations: " + result.stats.assertations + this.newline;
	buf.b[buf.b.length] = "successes: " + result.stats.successes + this.newline;
	buf.b[buf.b.length] = "errors: " + result.stats.errors + this.newline;
	buf.b[buf.b.length] = "failures: " + result.stats.failures + this.newline;
	buf.b[buf.b.length] = "warnings: " + result.stats.warnings + this.newline;
	buf.b[buf.b.length] = "execution time: " + time + this.newline;
	buf.b[buf.b.length] = this.newline;
	$s.pop();
}
utest.ui.text.PlainTextReport.prototype.result = null;
utest.ui.text.PlainTextReport.prototype.getResults = function() {
	$s.push("utest.ui.text.PlainTextReport::getResults");
	var $spos = $s.length;
	var buf = new StringBuf();
	this.addHeader(buf,this.result);
	var _g = 0, _g1 = this.result.packageNames();
	while(_g < _g1.length) {
		var pname = _g1[_g];
		++_g;
		var pack = this.result.getPackage(pname);
		if(utest.ui.common.ReportTools.skipResult(this,pack.stats,this.result.stats.isOk)) continue;
		var _g2 = 0, _g3 = pack.classNames();
		while(_g2 < _g3.length) {
			var cname = _g3[_g2];
			++_g2;
			var cls = pack.getClass(cname);
			if(utest.ui.common.ReportTools.skipResult(this,cls.stats,this.result.stats.isOk)) continue;
			buf.b[buf.b.length] = (pname == ""?"":pname + ".") + cname + this.newline;
			var _g4 = 0, _g5 = cls.methodNames();
			while(_g4 < _g5.length) {
				var mname = _g5[_g4];
				++_g4;
				var fix = cls.get(mname);
				if(utest.ui.common.ReportTools.skipResult(this,fix.stats,this.result.stats.isOk)) continue;
				buf.b[buf.b.length] = this.indents(1) + mname + ": ";
				if(fix.stats.isOk) buf.b[buf.b.length] = "OK "; else if(fix.stats.hasErrors) buf.b[buf.b.length] = "ERROR "; else if(fix.stats.hasFailures) buf.b[buf.b.length] = "FAILURE "; else if(fix.stats.hasWarnings) buf.b[buf.b.length] = "WARNING ";
				var messages = "";
				var $it0 = fix.iterator();
				while( $it0.hasNext() ) {
					var assertation = $it0.next();
					var $e = (assertation);
					switch( $e[1] ) {
					case 0:
						var pos = $e[2];
						buf.b[buf.b.length] = ".";
						break;
					case 1:
						var pos = $e[3], msg = $e[2];
						buf.b[buf.b.length] = "F";
						messages += this.indents(2) + "line: " + pos.lineNumber + ", " + msg + this.newline;
						break;
					case 2:
						var s = $e[3], e = $e[2];
						buf.b[buf.b.length] = "E";
						messages += this.indents(2) + Std.string(e) + this.dumpStack(s) + this.newline;
						break;
					case 3:
						var s = $e[3], e = $e[2];
						buf.b[buf.b.length] = "S";
						messages += this.indents(2) + Std.string(e) + this.dumpStack(s) + this.newline;
						break;
					case 4:
						var s = $e[3], e = $e[2];
						buf.b[buf.b.length] = "T";
						messages += this.indents(2) + Std.string(e) + this.dumpStack(s) + this.newline;
						break;
					case 5:
						var s = $e[3], missedAsyncs = $e[2];
						buf.b[buf.b.length] = "O";
						messages += this.indents(2) + "missed async calls: " + missedAsyncs + this.dumpStack(s) + this.newline;
						break;
					case 6:
						var s = $e[3], e = $e[2];
						buf.b[buf.b.length] = "A";
						messages += this.indents(2) + Std.string(e) + this.dumpStack(s) + this.newline;
						break;
					case 7:
						var msg = $e[2];
						buf.b[buf.b.length] = "W";
						messages += this.indents(2) + msg + this.newline;
						break;
					}
				}
				buf.b[buf.b.length] = this.newline;
				buf.b[buf.b.length] = messages;
			}
		}
	}
	var $tmp = buf.b.join("");
	$s.pop();
	return $tmp;
	$s.pop();
}
utest.ui.text.PlainTextReport.prototype.complete = function(result) {
	$s.push("utest.ui.text.PlainTextReport::complete");
	var $spos = $s.length;
	this.result = result;
	this.handler(this);
	$s.pop();
}
utest.ui.text.PlainTextReport.prototype.__class__ = utest.ui.text.PlainTextReport;
utest.ui.text.PlainTextReport.__interfaces__ = [utest.ui.common.IReport];
utest.ui.text.PrintReport = function(runner) {
	if( runner === $_ ) return;
	$s.push("utest.ui.text.PrintReport::new");
	var $spos = $s.length;
	utest.ui.text.PlainTextReport.call(this,runner,$closure(this,"_handler"));
	this.newline = "\n";
	this.indent = "  ";
	$s.pop();
}
utest.ui.text.PrintReport.__name__ = ["utest","ui","text","PrintReport"];
utest.ui.text.PrintReport.__super__ = utest.ui.text.PlainTextReport;
for(var k in utest.ui.text.PlainTextReport.prototype ) utest.ui.text.PrintReport.prototype[k] = utest.ui.text.PlainTextReport.prototype[k];
utest.ui.text.PrintReport.prototype.useTrace = null;
utest.ui.text.PrintReport.prototype._handler = function(report) {
	$s.push("utest.ui.text.PrintReport::_handler");
	var $spos = $s.length;
	this._trace(report.getResults());
	$s.pop();
}
utest.ui.text.PrintReport.prototype._trace = function(s) {
	$s.push("utest.ui.text.PrintReport::_trace");
	var $spos = $s.length;
	s = StringTools.replace(s,"  ",this.indent);
	s = StringTools.replace(s,"\n",this.newline);
	haxe.Log.trace(s,{ fileName : "PrintReport.hx", lineNumber : 66, className : "utest.ui.text.PrintReport", methodName : "_trace"});
	$s.pop();
}
utest.ui.text.PrintReport.prototype.__class__ = utest.ui.text.PrintReport;
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
	this.chart = new rg.view.svg.widget.ChartPie(panelChart);
	this.chart.innerRadius = this.info.innerradius;
	this.chart.outerRadius = this.info.outerradius;
	this.chart.overRadius = this.info.overradius;
	this.chart.gradientLightness = this.info.gradientlightness;
	if(null != this.info.label.datapoint) this.chart.labelFormatDataPoint = this.info.label.datapoint;
	if(null != this.info.label.datapoint) this.chart.labelFormatDataPointOver = this.info.label.datapointover;
	this.chart.labelRadius = this.info.labelradius;
	this.chart.labelDisplay = this.info.labeldisplay;
	this.chart.labelOrientation = this.info.labelorientation;
	this.chart.labelDontFlip = this.info.dontfliplabel;
	this.chart.animated = this.info.animation.animated;
	this.chart.animationDuration = this.info.animation.duration;
	this.chart.animationEase = this.info.animation.ease;
	this.chart.animationDelay = this.info.animation.delay;
	if(null != this.info.click) this.chart.mouseClick = this.info.click;
	var panelContextTitle = this.layout.getContext("title");
	if(null == panelContextTitle) {
		$s.pop();
		return;
	}
	this.title = new rg.view.svg.widget.Title(panelContextTitle.panel,null,panelContextTitle.anchor);
	$s.pop();
}
rg.controller.visualization.VisualizationPieChart.prototype.feedData = function(data) {
	$s.push("rg.controller.visualization.VisualizationPieChart::feedData");
	var $spos = $s.length;
	this.chart.setVariables(this.independentVariables,this.dependentVariables);
	if(null != this.title && null != this.info.label.title) {
		this.title.setText(this.info.label.title(this.getVariables(),data));
		this.layout.suggestSize("title",this.title.idealHeight());
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
rg.data.source.rgquery.transform.TransformCountTimeIntersect = function(properties,fields,event,periodicity,unit) {
	if( properties === $_ ) return;
	$s.push("rg.data.source.rgquery.transform.TransformCountTimeIntersect::new");
	var $spos = $s.length;
	this.properties = properties;
	this.unit = unit;
	this.periodicity = periodicity;
	this.fields = fields;
	this.event = event;
	$s.pop();
}
rg.data.source.rgquery.transform.TransformCountTimeIntersect.__name__ = ["rg","data","source","rgquery","transform","TransformCountTimeIntersect"];
rg.data.source.rgquery.transform.TransformCountTimeIntersect.typedValue = function(s,_) {
	$s.push("rg.data.source.rgquery.transform.TransformCountTimeIntersect::typedValue");
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
rg.data.source.rgquery.transform.TransformCountTimeIntersect.prototype.properties = null;
rg.data.source.rgquery.transform.TransformCountTimeIntersect.prototype.unit = null;
rg.data.source.rgquery.transform.TransformCountTimeIntersect.prototype.periodicity = null;
rg.data.source.rgquery.transform.TransformCountTimeIntersect.prototype.fields = null;
rg.data.source.rgquery.transform.TransformCountTimeIntersect.prototype.event = null;
rg.data.source.rgquery.transform.TransformCountTimeIntersect.prototype.transform = function(data) {
	$s.push("rg.data.source.rgquery.transform.TransformCountTimeIntersect::transform");
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
		var arr = item.value.data;
		var _g2 = 0, _g1 = arr.length;
		while(_g2 < _g1) {
			var i = _g2++;
			var p = Dynamics.clone(properties);
			Objects.addFields(p,this.fields,item.fields.map(rg.data.source.rgquery.transform.TransformCountTimeIntersect.typedValue));
			Objects.addFields(p,[rg.util.Properties.timeProperty(this.periodicity),unit],[arr[i][0],arr[i][1]]);
			p.event = this.event;
			result.push(p);
		}
	}
	$s.pop();
	return result;
	$s.pop();
}
rg.data.source.rgquery.transform.TransformCountTimeIntersect.prototype.__class__ = rg.data.source.rgquery.transform.TransformCountTimeIntersect;
rg.data.source.rgquery.transform.TransformCountTimeIntersect.__interfaces__ = [rg.data.source.ITransform];
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
rg.data.VariableDependent = function(type,axis,scaleDistribution,min,max) {
	if( type === $_ ) return;
	$s.push("rg.data.VariableDependent::new");
	var $spos = $s.length;
	rg.data.Variable.call(this,type,scaleDistribution,min,max);
	this.axis = axis;
	$s.pop();
}
rg.data.VariableDependent.__name__ = ["rg","data","VariableDependent"];
rg.data.VariableDependent.__super__ = rg.data.Variable;
for(var k in rg.data.Variable.prototype ) rg.data.VariableDependent.prototype[k] = rg.data.Variable.prototype[k];
rg.data.VariableDependent.prototype.axis = null;
rg.data.VariableDependent.prototype.setAxis = function(axis) {
	$s.push("rg.data.VariableDependent::setAxis");
	var $spos = $s.length;
	this.axis = axis;
	$s.pop();
}
rg.data.VariableDependent.prototype.__class__ = rg.data.VariableDependent;
rg.controller.info.InfoCartesianChart = function(p) {
	if( p === $_ ) return;
	$s.push("rg.controller.info.InfoCartesianChart::new");
	var $spos = $s.length;
	this.animation = new rg.controller.info.InfoAnimation();
	this.label = new rg.controller.info.InfoLabelAxis();
	this.segment = new rg.controller.info.InfoSegment();
	this.displayMinor = function(_) {
		$s.push("rg.controller.info.InfoCartesianChart::new@34");
		var $spos = $s.length;
		$s.pop();
		return true;
		$s.pop();
	};
	this.displayMajor = function(_) {
		$s.push("rg.controller.info.InfoCartesianChart::new@35");
		var $spos = $s.length;
		$s.pop();
		return true;
		$s.pop();
	};
	this.displayLabel = function(_) {
		$s.push("rg.controller.info.InfoCartesianChart::new@36");
		var $spos = $s.length;
		$s.pop();
		return true;
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
		$s.push("rg.controller.info.InfoCartesianChart::filters@49");
		var $spos = $s.length;
		var $tmp = Reflect.isObject(v) && null == Type.getClass(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@50");
		var $spos = $s.length;
		var $tmp = [{ field : "animation", value : rg.controller.info.Info.feed(new rg.controller.info.InfoAnimation(),v)}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "segmenton", validator : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@56");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@57");
		var $spos = $s.length;
		var $tmp = [{ field : "segment", value : rg.controller.info.Info.feed(new rg.controller.info.InfoSegment(),{ on : v})}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "segment", validator : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@63");
		var $spos = $s.length;
		var $tmp = Reflect.isObject(v) && null == Type.getClass(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@64");
		var $spos = $s.length;
		var $tmp = [{ field : "segment", value : rg.controller.info.Info.feed(new rg.controller.info.InfoSegment(),v)}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "y0property", validator : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@70");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "click", validator : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@74");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "label", validator : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@78");
		var $spos = $s.length;
		var $tmp = Reflect.isObject(v) && null == Type.getClass(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@79");
		var $spos = $s.length;
		var $tmp = [{ field : "label", value : rg.controller.info.Info.feed(new rg.controller.info.InfoLabelAxis(),v)}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "displaytickmarks", validator : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@85");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v) || Std["is"](v,Bool);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@86");
		var $spos = $s.length;
		var $tmp = [{ field : "displayMinor", value : Std["is"](v,Bool)?function(_) {
			$s.push("rg.controller.info.InfoCartesianChart::filters@86@88");
			var $spos = $s.length;
			$s.pop();
			return v;
			$s.pop();
		}:v},{ field : "displayMajor", value : Std["is"](v,Bool)?function(_) {
			$s.push("rg.controller.info.InfoCartesianChart::filters@86@91");
			var $spos = $s.length;
			$s.pop();
			return v;
			$s.pop();
		}:v},{ field : "displayLabel", value : Std["is"](v,Bool)?function(_) {
			$s.push("rg.controller.info.InfoCartesianChart::filters@86@94");
			var $spos = $s.length;
			$s.pop();
			return v;
			$s.pop();
		}:v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "displaytickminor", validator : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@98");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v) || Std["is"](v,Bool);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@99");
		var $spos = $s.length;
		var $tmp = [{ field : "displayMinor", value : Std["is"](v,Bool)?function(_) {
			$s.push("rg.controller.info.InfoCartesianChart::filters@99@101");
			var $spos = $s.length;
			$s.pop();
			return v;
			$s.pop();
		}:v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "displaytickmajor", validator : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@105");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v) || Std["is"](v,Bool);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@106");
		var $spos = $s.length;
		var $tmp = [{ field : "displayMajor", value : Std["is"](v,Bool)?function(_) {
			$s.push("rg.controller.info.InfoCartesianChart::filters@106@108");
			var $spos = $s.length;
			$s.pop();
			return v;
			$s.pop();
		}:v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "displayticklabel", validator : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@112");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v) || Std["is"](v,Bool);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@113");
		var $spos = $s.length;
		var $tmp = [{ field : "displayLabel", value : Std["is"](v,Bool)?function(_) {
			$s.push("rg.controller.info.InfoCartesianChart::filters@113@115");
			var $spos = $s.length;
			$s.pop();
			return v;
			$s.pop();
		}:v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "lengthtick", validator : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@119");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Float);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@120");
		var $spos = $s.length;
		var $tmp = [{ field : "lengthTickMajor", value : v},{ field : "lengthTickMinor", value : v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "lengthtickminor", validator : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@129");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Float);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@130");
		var $spos = $s.length;
		var $tmp = [{ field : "lengthTickMinor", value : v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "lengthtickmajor", validator : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@136");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Float);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@137");
		var $spos = $s.length;
		var $tmp = [{ field : "lengthTickMajor", value : v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "paddingtick", validator : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@143");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Float);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@144");
		var $spos = $s.length;
		var $tmp = [{ field : "paddingTickMajor", value : v},{ field : "paddingTickMinor", value : v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "paddingtickminor", validator : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@153");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Float);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@154");
		var $spos = $s.length;
		var $tmp = [{ field : "paddingTickMinor", value : v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "paddingtickmajor", validator : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@160");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Float);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@161");
		var $spos = $s.length;
		var $tmp = [{ field : "paddingTickMajor", value : v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "paddingticklabel", validator : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@167");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Float);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoCartesianChart::filters@168");
		var $spos = $s.length;
		var $tmp = [{ field : "paddingLabel", value : v}];
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
rg.controller.info.InfoCartesianChart.prototype.displayMinor = null;
rg.controller.info.InfoCartesianChart.prototype.displayMajor = null;
rg.controller.info.InfoCartesianChart.prototype.displayLabel = null;
rg.controller.info.InfoCartesianChart.prototype.lengthTickMinor = null;
rg.controller.info.InfoCartesianChart.prototype.lengthTickMajor = null;
rg.controller.info.InfoCartesianChart.prototype.paddingTickMinor = null;
rg.controller.info.InfoCartesianChart.prototype.paddingTickMajor = null;
rg.controller.info.InfoCartesianChart.prototype.paddingLabel = null;
rg.controller.info.InfoCartesianChart.prototype.__class__ = rg.controller.info.InfoCartesianChart;
rg.controller.info.InfoBarChart = function(p) {
	if( p === $_ ) return;
	$s.push("rg.controller.info.InfoBarChart::new");
	var $spos = $s.length;
	rg.controller.info.InfoCartesianChart.call(this);
	this.stacked = true;
	this.effect = rg.view.svg.widget.BarEffect.Gradient(0.75);
	$s.pop();
}
rg.controller.info.InfoBarChart.__name__ = ["rg","controller","info","InfoBarChart"];
rg.controller.info.InfoBarChart.__super__ = rg.controller.info.InfoCartesianChart;
for(var k in rg.controller.info.InfoCartesianChart.prototype ) rg.controller.info.InfoBarChart.prototype[k] = rg.controller.info.InfoCartesianChart.prototype[k];
rg.controller.info.InfoBarChart.filters = function() {
	$s.push("rg.controller.info.InfoBarChart::filters");
	var $spos = $s.length;
	var $tmp = [{ field : "stacked", validator : function(v) {
		$s.push("rg.controller.info.InfoBarChart::filters@25");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Bool);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "effect", validator : function(v) {
		$s.push("rg.controller.info.InfoBarChart::filters@29");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoBarChart::filters@30");
		var $spos = $s.length;
		var $tmp = [{ field : "effect", value : rg.view.svg.widget.BarEffects.parse(v)}];
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
	switch(groupby) {
	case "minute":
		var $tmp = Ints.range(1,60);
		$s.pop();
		return $tmp;
	case "hour":
		var $tmp = Ints.range(1,24);
		$s.pop();
		return $tmp;
	case "day":
		var $tmp = Ints.range(1,31);
		$s.pop();
		return $tmp;
	case "week":
		var $tmp = Ints.range(1,7);
		$s.pop();
		return $tmp;
	case "month":
		var $tmp = Ints.range(1,12);
		$s.pop();
		return $tmp;
	case "year":
		var $tmp = Ints.range(1,365);
		$s.pop();
		return $tmp;
	default:
		throw new thx.error.Error("invalid groupby value '{0}'",null,groupby,{ fileName : "AxisGroupByTime.hx", lineNumber : 29, className : "rg.data.AxisGroupByTime", methodName : "valuesByGroup"});
	}
	$s.pop();
}
rg.data.AxisGroupByTime.prototype.groupBy = null;
rg.data.AxisGroupByTime.prototype.__class__ = rg.data.AxisGroupByTime;
utest.ui.common.PackageResult = function(packageName) {
	if( packageName === $_ ) return;
	$s.push("utest.ui.common.PackageResult::new");
	var $spos = $s.length;
	this.packageName = packageName;
	this.classes = new Hash();
	this.packages = new Hash();
	this.stats = new utest.ui.common.ResultStats();
	$s.pop();
}
utest.ui.common.PackageResult.__name__ = ["utest","ui","common","PackageResult"];
utest.ui.common.PackageResult.prototype.packageName = null;
utest.ui.common.PackageResult.prototype.classes = null;
utest.ui.common.PackageResult.prototype.packages = null;
utest.ui.common.PackageResult.prototype.stats = null;
utest.ui.common.PackageResult.prototype.addResult = function(result,flattenPackage) {
	$s.push("utest.ui.common.PackageResult::addResult");
	var $spos = $s.length;
	var pack = this.getOrCreatePackage(result.pack,flattenPackage,this);
	var cls = this.getOrCreateClass(pack,result.cls,result.setup,result.teardown);
	var fix = this.createFixture(result.method,result.assertations);
	cls.add(fix);
	$s.pop();
}
utest.ui.common.PackageResult.prototype.addClass = function(result) {
	$s.push("utest.ui.common.PackageResult::addClass");
	var $spos = $s.length;
	this.classes.set(result.className,result);
	this.stats.wire(result.stats);
	$s.pop();
}
utest.ui.common.PackageResult.prototype.addPackage = function(result) {
	$s.push("utest.ui.common.PackageResult::addPackage");
	var $spos = $s.length;
	this.packages.set(result.packageName,result);
	this.stats.wire(result.stats);
	$s.pop();
}
utest.ui.common.PackageResult.prototype.existsPackage = function(name) {
	$s.push("utest.ui.common.PackageResult::existsPackage");
	var $spos = $s.length;
	var $tmp = this.packages.exists(name);
	$s.pop();
	return $tmp;
	$s.pop();
}
utest.ui.common.PackageResult.prototype.existsClass = function(name) {
	$s.push("utest.ui.common.PackageResult::existsClass");
	var $spos = $s.length;
	var $tmp = this.classes.exists(name);
	$s.pop();
	return $tmp;
	$s.pop();
}
utest.ui.common.PackageResult.prototype.getPackage = function(name) {
	$s.push("utest.ui.common.PackageResult::getPackage");
	var $spos = $s.length;
	if(this.packageName == null && name == "") {
		$s.pop();
		return this;
	}
	var $tmp = this.packages.get(name);
	$s.pop();
	return $tmp;
	$s.pop();
}
utest.ui.common.PackageResult.prototype.getClass = function(name) {
	$s.push("utest.ui.common.PackageResult::getClass");
	var $spos = $s.length;
	var $tmp = this.classes.get(name);
	$s.pop();
	return $tmp;
	$s.pop();
}
utest.ui.common.PackageResult.prototype.classNames = function(errorsHavePriority) {
	$s.push("utest.ui.common.PackageResult::classNames");
	var $spos = $s.length;
	if(errorsHavePriority == null) errorsHavePriority = true;
	var names = [];
	var $it0 = this.classes.keys();
	while( $it0.hasNext() ) {
		var name = $it0.next();
		names.push(name);
	}
	if(errorsHavePriority) {
		var me = this;
		names.sort(function(a,b) {
			$s.push("utest.ui.common.PackageResult::classNames@64");
			var $spos = $s.length;
			var $as = me.getClass(a).stats;
			var bs = me.getClass(b).stats;
			if($as.hasErrors) {
				var $tmp = !bs.hasErrors?-1:$as.errors == bs.errors?Reflect.compare(a,b):Reflect.compare($as.errors,bs.errors);
				$s.pop();
				return $tmp;
			} else if(bs.hasErrors) {
				$s.pop();
				return 1;
			} else if($as.hasFailures) {
				var $tmp = !bs.hasFailures?-1:$as.failures == bs.failures?Reflect.compare(a,b):Reflect.compare($as.failures,bs.failures);
				$s.pop();
				return $tmp;
			} else if(bs.hasFailures) {
				$s.pop();
				return 1;
			} else if($as.hasWarnings) {
				var $tmp = !bs.hasWarnings?-1:$as.warnings == bs.warnings?Reflect.compare(a,b):Reflect.compare($as.warnings,bs.warnings);
				$s.pop();
				return $tmp;
			} else if(bs.hasWarnings) {
				$s.pop();
				return 1;
			} else {
				var $tmp = Reflect.compare(a,b);
				$s.pop();
				return $tmp;
			}
			$s.pop();
		});
	} else names.sort(function(a,b) {
		$s.push("utest.ui.common.PackageResult::classNames@84");
		var $spos = $s.length;
		var $tmp = Reflect.compare(a,b);
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return names;
	$s.pop();
}
utest.ui.common.PackageResult.prototype.packageNames = function(errorsHavePriority) {
	$s.push("utest.ui.common.PackageResult::packageNames");
	var $spos = $s.length;
	if(errorsHavePriority == null) errorsHavePriority = true;
	var names = [];
	if(this.packageName == null) names.push("");
	var $it0 = this.packages.keys();
	while( $it0.hasNext() ) {
		var name = $it0.next();
		names.push(name);
	}
	if(errorsHavePriority) {
		var me = this;
		names.sort(function(a,b) {
			$s.push("utest.ui.common.PackageResult::packageNames@98");
			var $spos = $s.length;
			var $as = me.getPackage(a).stats;
			var bs = me.getPackage(b).stats;
			if($as.hasErrors) {
				var $tmp = !bs.hasErrors?-1:$as.errors == bs.errors?Reflect.compare(a,b):Reflect.compare($as.errors,bs.errors);
				$s.pop();
				return $tmp;
			} else if(bs.hasErrors) {
				$s.pop();
				return 1;
			} else if($as.hasFailures) {
				var $tmp = !bs.hasFailures?-1:$as.failures == bs.failures?Reflect.compare(a,b):Reflect.compare($as.failures,bs.failures);
				$s.pop();
				return $tmp;
			} else if(bs.hasFailures) {
				$s.pop();
				return 1;
			} else if($as.hasWarnings) {
				var $tmp = !bs.hasWarnings?-1:$as.warnings == bs.warnings?Reflect.compare(a,b):Reflect.compare($as.warnings,bs.warnings);
				$s.pop();
				return $tmp;
			} else if(bs.hasWarnings) {
				$s.pop();
				return 1;
			} else {
				var $tmp = Reflect.compare(a,b);
				$s.pop();
				return $tmp;
			}
			$s.pop();
		});
	} else names.sort(function(a,b) {
		$s.push("utest.ui.common.PackageResult::packageNames@118");
		var $spos = $s.length;
		var $tmp = Reflect.compare(a,b);
		$s.pop();
		return $tmp;
		$s.pop();
	});
	$s.pop();
	return names;
	$s.pop();
}
utest.ui.common.PackageResult.prototype.createFixture = function(method,assertations) {
	$s.push("utest.ui.common.PackageResult::createFixture");
	var $spos = $s.length;
	var f = new utest.ui.common.FixtureResult(method);
	var $it0 = assertations.iterator();
	while( $it0.hasNext() ) {
		var assertation = $it0.next();
		f.add(assertation);
	}
	$s.pop();
	return f;
	$s.pop();
}
utest.ui.common.PackageResult.prototype.getOrCreateClass = function(pack,cls,setup,teardown) {
	$s.push("utest.ui.common.PackageResult::getOrCreateClass");
	var $spos = $s.length;
	if(pack.existsClass(cls)) {
		var $tmp = pack.getClass(cls);
		$s.pop();
		return $tmp;
	}
	var c = new utest.ui.common.ClassResult(cls,setup,teardown);
	pack.addClass(c);
	$s.pop();
	return c;
	$s.pop();
}
utest.ui.common.PackageResult.prototype.getOrCreatePackage = function(pack,flat,ref) {
	$s.push("utest.ui.common.PackageResult::getOrCreatePackage");
	var $spos = $s.length;
	if(pack == null || pack == "") {
		$s.pop();
		return ref;
	}
	if(flat) {
		if(ref.existsPackage(pack)) {
			var $tmp = ref.getPackage(pack);
			$s.pop();
			return $tmp;
		}
		var p = new utest.ui.common.PackageResult(pack);
		ref.addPackage(p);
		$s.pop();
		return p;
	} else {
		var parts = pack.split(".");
		var _g = 0;
		while(_g < parts.length) {
			var part = parts[_g];
			++_g;
			ref = this.getOrCreatePackage(part,true,ref);
		}
		$s.pop();
		return ref;
	}
	$s.pop();
}
utest.ui.common.PackageResult.prototype.__class__ = utest.ui.common.PackageResult;
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
utest.ui.common.FixtureResult = function(methodName) {
	if( methodName === $_ ) return;
	$s.push("utest.ui.common.FixtureResult::new");
	var $spos = $s.length;
	this.methodName = methodName;
	this.list = new List();
	this.hasTestError = false;
	this.hasSetupError = false;
	this.hasTeardownError = false;
	this.hasTimeoutError = false;
	this.hasAsyncError = false;
	this.stats = new utest.ui.common.ResultStats();
	$s.pop();
}
utest.ui.common.FixtureResult.__name__ = ["utest","ui","common","FixtureResult"];
utest.ui.common.FixtureResult.prototype.methodName = null;
utest.ui.common.FixtureResult.prototype.hasTestError = null;
utest.ui.common.FixtureResult.prototype.hasSetupError = null;
utest.ui.common.FixtureResult.prototype.hasTeardownError = null;
utest.ui.common.FixtureResult.prototype.hasTimeoutError = null;
utest.ui.common.FixtureResult.prototype.hasAsyncError = null;
utest.ui.common.FixtureResult.prototype.stats = null;
utest.ui.common.FixtureResult.prototype.list = null;
utest.ui.common.FixtureResult.prototype.iterator = function() {
	$s.push("utest.ui.common.FixtureResult::iterator");
	var $spos = $s.length;
	var $tmp = this.list.iterator();
	$s.pop();
	return $tmp;
	$s.pop();
}
utest.ui.common.FixtureResult.prototype.add = function(assertation) {
	$s.push("utest.ui.common.FixtureResult::add");
	var $spos = $s.length;
	this.list.add(assertation);
	switch( (assertation)[1] ) {
	case 0:
		this.stats.addSuccesses(1);
		break;
	case 1:
		this.stats.addFailures(1);
		break;
	case 2:
		this.stats.addErrors(1);
		break;
	case 3:
		this.stats.addErrors(1);
		this.hasSetupError = true;
		break;
	case 4:
		this.stats.addErrors(1);
		this.hasTeardownError = true;
		break;
	case 5:
		this.stats.addErrors(1);
		this.hasTimeoutError = true;
		break;
	case 6:
		this.stats.addErrors(1);
		this.hasAsyncError = true;
		break;
	case 7:
		this.stats.addWarnings(1);
		break;
	}
	$s.pop();
}
utest.ui.common.FixtureResult.prototype.__class__ = utest.ui.common.FixtureResult;
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
rg.data.source.TestRGDataSource = function(p) {
	$s.push("rg.data.source.TestRGDataSource::new");
	var $spos = $s.length;
	$s.pop();
}
rg.data.source.TestRGDataSource.__name__ = ["rg","data","source","TestRGDataSource"];
rg.data.source.TestRGDataSource.prototype.profile = function(query,groupby) {
	$s.push("rg.data.source.TestRGDataSource::profile");
	var $spos = $s.length;
	var executor = new rg.data.source.rgquery.MockRGExecutor();
	var ds = new rg.data.source.DataSourceReportGrid(executor,"/","click",query);
	ds.groupBy = groupby;
	ds.load();
	var $tmp = executor.callStack;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.source.TestRGDataSource.prototype.assert = function(a,b,pos) {
	$s.push("rg.data.source.TestRGDataSource::assert");
	var $spos = $s.length;
	utest.Assert.same(a,b,null,"expected " + Dynamics.string(a) + " but was " + Dynamics.string(b),pos);
	$s.pop();
}
rg.data.source.TestRGDataSource.prototype.testEventCount = function() {
	$s.push("rg.data.source.TestRGDataSource::testEventCount");
	var $spos = $s.length;
	this.assert([{ method : "propertyCount", args : ["/",{ property : "click"}]}],this.profile({ exp : [rg.data.source.rgquery.QExp.Event], operation : rg.data.source.rgquery.QOperation.Count, where : []}),{ fileName : "TestRGDataSource.hx", lineNumber : 32, className : "rg.data.source.TestRGDataSource", methodName : "testEventCount"});
	$s.pop();
}
rg.data.source.TestRGDataSource.prototype.testPropertyValuesCount = function() {
	$s.push("rg.data.source.TestRGDataSource::testPropertyValuesCount");
	var $spos = $s.length;
	this.assert([{ method : "intersect", args : ["/",{ periodicity : "eternity", properties : [{ property : "click.unique", limit : 10, order : "descending"}]}]}],this.profile({ exp : [rg.data.source.rgquery.QExp.Property(".unique")], operation : rg.data.source.rgquery.QOperation.Count, where : []}),{ fileName : "TestRGDataSource.hx", lineNumber : 43, className : "rg.data.source.TestRGDataSource", methodName : "testPropertyValuesCount"});
	$s.pop();
}
rg.data.source.TestRGDataSource.prototype.testEventSeries = function() {
	$s.push("rg.data.source.TestRGDataSource::testEventSeries");
	var $spos = $s.length;
	this.assert([{ method : "propertySeries", args : ["/",{ property : "click", periodicity : "day"}]}],this.profile({ exp : [rg.data.source.rgquery.QExp.Time("day")], operation : rg.data.source.rgquery.QOperation.Count, where : []}),{ fileName : "TestRGDataSource.hx", lineNumber : 61, className : "rg.data.source.TestRGDataSource", methodName : "testEventSeries"});
	$s.pop();
}
rg.data.source.TestRGDataSource.prototype.testGroupByOption = function() {
	$s.push("rg.data.source.TestRGDataSource::testGroupByOption");
	var $spos = $s.length;
	this.assert([{ method : "propertySeries", args : ["/",{ property : "click", periodicity : "day", groupBy : "week"}]}],this.profile({ exp : [rg.data.source.rgquery.QExp.Time("day")], operation : rg.data.source.rgquery.QOperation.Count, where : []},"week"),{ fileName : "TestRGDataSource.hx", lineNumber : 72, className : "rg.data.source.TestRGDataSource", methodName : "testGroupByOption"});
	$s.pop();
}
rg.data.source.TestRGDataSource.prototype.testPropertyValuesSeries = function() {
	$s.push("rg.data.source.TestRGDataSource::testPropertyValuesSeries");
	var $spos = $s.length;
	this.assert([{ method : "intersect", args : ["/",{ periodicity : "day", properties : [{ property : "click.unique", limit : 10, order : "descending"}]}]}],this.profile({ exp : [rg.data.source.rgquery.QExp.Property(".unique"),rg.data.source.rgquery.QExp.Time("day")], operation : rg.data.source.rgquery.QOperation.Count, where : []}),{ fileName : "TestRGDataSource.hx", lineNumber : 83, className : "rg.data.source.TestRGDataSource", methodName : "testPropertyValuesSeries"});
	$s.pop();
}
rg.data.source.TestRGDataSource.prototype.testPropertyValueCount = function() {
	$s.push("rg.data.source.TestRGDataSource::testPropertyValueCount");
	var $spos = $s.length;
	this.assert([{ method : "propertyValueCount", args : ["/",{ property : "click.gender", value : "female"}]}],this.profile({ exp : [rg.data.source.rgquery.QExp.Property(".gender")], operation : rg.data.source.rgquery.QOperation.Count, where : [rg.data.source.rgquery.QCondition.Equality(".gender","female")]}),{ fileName : "TestRGDataSource.hx", lineNumber : 101, className : "rg.data.source.TestRGDataSource", methodName : "testPropertyValueCount"});
	$s.pop();
}
rg.data.source.TestRGDataSource.prototype.testPropertyValueSeries = function() {
	$s.push("rg.data.source.TestRGDataSource::testPropertyValueSeries");
	var $spos = $s.length;
	this.assert([{ method : "propertyValueSeries", args : ["/",{ property : "click.gender", value : "female", periodicity : "day"}]}],this.profile({ exp : [rg.data.source.rgquery.QExp.Property(".gender"),rg.data.source.rgquery.QExp.Time("day")], operation : rg.data.source.rgquery.QOperation.Count, where : [rg.data.source.rgquery.QCondition.Equality(".gender","female")]}),{ fileName : "TestRGDataSource.hx", lineNumber : 112, className : "rg.data.source.TestRGDataSource", methodName : "testPropertyValueSeries"});
	$s.pop();
}
rg.data.source.TestRGDataSource.prototype.testSearchValueCount = function() {
	$s.push("rg.data.source.TestRGDataSource::testSearchValueCount");
	var $spos = $s.length;
	this.assert([{ method : "searchCount", args : ["/",{ where : Objects.addFields({ },["click.gender","click.ageRange"],["female","21-30"])}]}],this.profile({ exp : [rg.data.source.rgquery.QExp.Event], operation : rg.data.source.rgquery.QOperation.Count, where : [rg.data.source.rgquery.QCondition.Equality(".gender","female"),rg.data.source.rgquery.QCondition.Equality(".ageRange","21-30")]}),{ fileName : "TestRGDataSource.hx", lineNumber : 123, className : "rg.data.source.TestRGDataSource", methodName : "testSearchValueCount"});
	$s.pop();
}
rg.data.source.TestRGDataSource.prototype.testSearchSeries = function() {
	$s.push("rg.data.source.TestRGDataSource::testSearchSeries");
	var $spos = $s.length;
	this.assert([{ method : "searchSeries", args : ["/",{ periodicity : "day", where : Objects.addFields({ },["click.gender","click.ageRange"],["female","21-30"])}]}],this.profile({ exp : [rg.data.source.rgquery.QExp.Event,rg.data.source.rgquery.QExp.Time("day")], operation : rg.data.source.rgquery.QOperation.Count, where : [rg.data.source.rgquery.QCondition.Equality(".gender","female"),rg.data.source.rgquery.QCondition.Equality(".ageRange","21-30")]}),{ fileName : "TestRGDataSource.hx", lineNumber : 137, className : "rg.data.source.TestRGDataSource", methodName : "testSearchSeries"});
	$s.pop();
}
rg.data.source.TestRGDataSource.prototype.testIntersectOverTime = function() {
	$s.push("rg.data.source.TestRGDataSource::testIntersectOverTime");
	var $spos = $s.length;
	this.assert([{ method : "intersect", args : ["/",{ periodicity : "day", properties : [{ property : "click.gender", limit : 5, order : "descending"},{ property : "click.platform", limit : 7, order : "ascending"},{ property : "click.ageRange", limit : 10, order : "descending"}]}]}],this.profile({ exp : [rg.data.source.rgquery.QExp.Property(".gender",5,true),rg.data.source.rgquery.QExp.Property(".platform",7,false),rg.data.source.rgquery.QExp.Property(".ageRange"),rg.data.source.rgquery.QExp.Time("day")], operation : rg.data.source.rgquery.QOperation.Count, where : []}),{ fileName : "TestRGDataSource.hx", lineNumber : 151, className : "rg.data.source.TestRGDataSource", methodName : "testIntersectOverTime"});
	$s.pop();
}
rg.data.source.TestRGDataSource.prototype.testNormalization = function() {
	$s.push("rg.data.source.TestRGDataSource::testNormalization");
	var $spos = $s.length;
	this.assert([rg.data.source.rgquery.QExp.Event,rg.data.source.rgquery.QExp.Time("eternity")],rg.data.source.DataSourceReportGrid.normalize([rg.data.source.rgquery.QExp.Event]),{ fileName : "TestRGDataSource.hx", lineNumber : 182, className : "rg.data.source.TestRGDataSource", methodName : "testNormalization"});
	this.assert([rg.data.source.rgquery.QExp.Event,rg.data.source.rgquery.QExp.Time("day")],rg.data.source.DataSourceReportGrid.normalize([rg.data.source.rgquery.QExp.Time("day")]),{ fileName : "TestRGDataSource.hx", lineNumber : 187, className : "rg.data.source.TestRGDataSource", methodName : "testNormalization"});
	this.assert([rg.data.source.rgquery.QExp.Event,rg.data.source.rgquery.QExp.Time("eternity")],rg.data.source.DataSourceReportGrid.normalize([]),{ fileName : "TestRGDataSource.hx", lineNumber : 192, className : "rg.data.source.TestRGDataSource", methodName : "testNormalization"});
	this.assert([rg.data.source.rgquery.QExp.Property(".platform"),rg.data.source.rgquery.QExp.Property(".ageRange"),rg.data.source.rgquery.QExp.Time("eternity")],rg.data.source.DataSourceReportGrid.normalize([rg.data.source.rgquery.QExp.Property(".platform"),rg.data.source.rgquery.QExp.Property(".ageRange")]),{ fileName : "TestRGDataSource.hx", lineNumber : 197, className : "rg.data.source.TestRGDataSource", methodName : "testNormalization"});
	this.assert([rg.data.source.rgquery.QExp.Property(".platform"),rg.data.source.rgquery.QExp.Property(".ageRange"),rg.data.source.rgquery.QExp.Time("eternity")],rg.data.source.DataSourceReportGrid.normalize([rg.data.source.rgquery.QExp.Time("eternity"),rg.data.source.rgquery.QExp.Property(".platform"),rg.data.source.rgquery.QExp.Property(".ageRange")]),{ fileName : "TestRGDataSource.hx", lineNumber : 209, className : "rg.data.source.TestRGDataSource", methodName : "testNormalization"});
	$s.pop();
}
rg.data.source.TestRGDataSource.prototype.__class__ = rg.data.source.TestRGDataSource;
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
			$s.push("rg.data.Sources::new@23");
			var $spos = $s.length;
			var $tmp = function(a2) {
				$s.push("rg.data.Sources::new@23@23");
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
	$s.pop();
}
rg.data.Sources.__name__ = ["rg","data","Sources"];
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
	this.count = 0;
	this.data = [];
	this.sources.forEach(function(source,_) {
		$s.push("rg.data.Sources::load@33");
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
rg.data.TestAxisGroupByTime = function(p) {
	$s.push("rg.data.TestAxisGroupByTime::new");
	var $spos = $s.length;
	$s.pop();
}
rg.data.TestAxisGroupByTime.__name__ = ["rg","data","TestAxisGroupByTime"];
rg.data.TestAxisGroupByTime.prototype.testYear = function() {
	$s.push("rg.data.TestAxisGroupByTime::testYear");
	var $spos = $s.length;
	var values = rg.data.AxisGroupByTime.valuesByGroup("year");
	utest.Assert.same(Ints.range(1,365),values,null,null,{ fileName : "TestAxisGroupByTime.hx", lineNumber : 15, className : "rg.data.TestAxisGroupByTime", methodName : "testYear"});
	$s.pop();
}
rg.data.TestAxisGroupByTime.prototype.testMonth = function() {
	$s.push("rg.data.TestAxisGroupByTime::testMonth");
	var $spos = $s.length;
	var values = rg.data.AxisGroupByTime.valuesByGroup("month");
	utest.Assert.same(Ints.range(1,12),values,null,null,{ fileName : "TestAxisGroupByTime.hx", lineNumber : 21, className : "rg.data.TestAxisGroupByTime", methodName : "testMonth"});
	$s.pop();
}
rg.data.TestAxisGroupByTime.prototype.testWeek = function() {
	$s.push("rg.data.TestAxisGroupByTime::testWeek");
	var $spos = $s.length;
	var values = rg.data.AxisGroupByTime.valuesByGroup("week");
	utest.Assert.same(Ints.range(1,7),values,null,null,{ fileName : "TestAxisGroupByTime.hx", lineNumber : 27, className : "rg.data.TestAxisGroupByTime", methodName : "testWeek"});
	$s.pop();
}
rg.data.TestAxisGroupByTime.prototype.testDay = function() {
	$s.push("rg.data.TestAxisGroupByTime::testDay");
	var $spos = $s.length;
	var values = rg.data.AxisGroupByTime.valuesByGroup("day");
	utest.Assert.same(Ints.range(1,31),values,null,null,{ fileName : "TestAxisGroupByTime.hx", lineNumber : 33, className : "rg.data.TestAxisGroupByTime", methodName : "testDay"});
	$s.pop();
}
rg.data.TestAxisGroupByTime.prototype.testHour = function() {
	$s.push("rg.data.TestAxisGroupByTime::testHour");
	var $spos = $s.length;
	var values = rg.data.AxisGroupByTime.valuesByGroup("hour");
	utest.Assert.same(Ints.range(1,24),values,null,null,{ fileName : "TestAxisGroupByTime.hx", lineNumber : 39, className : "rg.data.TestAxisGroupByTime", methodName : "testHour"});
	$s.pop();
}
rg.data.TestAxisGroupByTime.prototype.testMinute = function() {
	$s.push("rg.data.TestAxisGroupByTime::testMinute");
	var $spos = $s.length;
	var values = rg.data.AxisGroupByTime.valuesByGroup("minute");
	utest.Assert.same(Ints.range(1,60),values,null,null,{ fileName : "TestAxisGroupByTime.hx", lineNumber : 45, className : "rg.data.TestAxisGroupByTime", methodName : "testMinute"});
	$s.pop();
}
rg.data.TestAxisGroupByTime.prototype.__class__ = rg.data.TestAxisGroupByTime;
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
rg.view.svg.panel.TestPanel = function(p) {
	$s.push("rg.view.svg.panel.TestPanel::new");
	var $spos = $s.length;
	$s.pop();
}
rg.view.svg.panel.TestPanel.__name__ = ["rg","view","svg","panel","TestPanel"];
rg.view.svg.panel.TestPanel.prototype.container = null;
rg.view.svg.panel.TestPanel.prototype.space = null;
rg.view.svg.panel.TestPanel.prototype.cont1 = null;
rg.view.svg.panel.TestPanel.prototype.cont2 = null;
rg.view.svg.panel.TestPanel.prototype.panel1 = null;
rg.view.svg.panel.TestPanel.prototype.panel2 = null;
rg.view.svg.panel.TestPanel.prototype.setup = function() {
	$s.push("rg.view.svg.panel.TestPanel::setup");
	var $spos = $s.length;
	this.container = thx.js.Dom.select("body").append("div");
	this.space = new rg.view.svg.panel.Space(200,150,this.container);
	this.cont1 = this.space.createContainer(rg.view.frame.FrameLayout.Fill(10,0),rg.view.frame.Orientation.Horizontal);
	this.cont2 = this.cont1.createContainer(rg.view.frame.FrameLayout.Fill(10,0),rg.view.frame.Orientation.Vertical);
	this.panel1 = this.cont2.createPanel(rg.view.frame.FrameLayout.Fixed(10,0,20));
	this.panel2 = this.cont2.createPanel(rg.view.frame.FrameLayout.Fill(10,0));
	$s.pop();
}
rg.view.svg.panel.TestPanel.prototype.teardown = function() {
	$s.push("rg.view.svg.panel.TestPanel::teardown");
	var $spos = $s.length;
	this.container.remove();
	$s.pop();
}
rg.view.svg.panel.TestPanel.prototype.testBoundingBox = function() {
	$s.push("rg.view.svg.panel.TestPanel::testBoundingBox");
	var $spos = $s.length;
	utest.Assert.same({ x : 10, y : 50, width : 190, height : 100},rg.view.svg.panel.Panels.boundingBox(this.panel2),null,null,{ fileName : "TestPanel.hx", lineNumber : 42, className : "rg.view.svg.panel.TestPanel", methodName : "testBoundingBox"});
	utest.Assert.same({ x : 10, y : 40, width : 190, height : 100},rg.view.svg.panel.Panels.boundingBox(this.panel2,this.cont1),null,null,{ fileName : "TestPanel.hx", lineNumber : 49, className : "rg.view.svg.panel.TestPanel", methodName : "testBoundingBox"});
	utest.Assert.same({ x : 0, y : 40, width : 190, height : 100},rg.view.svg.panel.Panels.boundingBox(this.panel2,this.cont2),null,null,{ fileName : "TestPanel.hx", lineNumber : 56, className : "rg.view.svg.panel.TestPanel", methodName : "testBoundingBox"});
	$s.pop();
}
rg.view.svg.panel.TestPanel.prototype.ancestorBoundingBox = function() {
	$s.push("rg.view.svg.panel.TestPanel::ancestorBoundingBox");
	var $spos = $s.length;
	utest.Assert.same({ x : -10, y : -50, width : 200, height : 150},rg.view.svg.panel.Panels.ancestorBoundingBox(this.panel2),null,null,{ fileName : "TestPanel.hx", lineNumber : 66, className : "rg.view.svg.panel.TestPanel", methodName : "ancestorBoundingBox"});
	utest.Assert.same({ x : -10, y : -40, width : 200, height : 140},rg.view.svg.panel.Panels.ancestorBoundingBox(this.panel2,this.cont1),null,null,{ fileName : "TestPanel.hx", lineNumber : 73, className : "rg.view.svg.panel.TestPanel", methodName : "ancestorBoundingBox"});
	utest.Assert.same({ x : 0, y : -40, width : 190, height : 140},rg.view.svg.panel.Panels.ancestorBoundingBox(this.panel2,this.cont2),null,null,{ fileName : "TestPanel.hx", lineNumber : 80, className : "rg.view.svg.panel.TestPanel", methodName : "ancestorBoundingBox"});
	$s.pop();
}
rg.view.svg.panel.TestPanel.prototype.testRootSize = function() {
	$s.push("rg.view.svg.panel.TestPanel::testRootSize");
	var $spos = $s.length;
	utest.Assert.same({ width : 200, height : 150},rg.view.svg.panel.Panels.rootSize(this.panel2),null,null,{ fileName : "TestPanel.hx", lineNumber : 90, className : "rg.view.svg.panel.TestPanel", methodName : "testRootSize"});
	$s.pop();
}
rg.view.svg.panel.TestPanel.prototype.__class__ = rg.view.svg.panel.TestPanel;
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
utest.TestHandler = function(fixture) {
	if( fixture === $_ ) return;
	$s.push("utest.TestHandler::new");
	var $spos = $s.length;
	if(fixture == null) throw "fixture argument is null";
	this.fixture = fixture;
	this.results = new List();
	this.asyncStack = new List();
	this.onTested = new utest.Dispatcher();
	this.onTimeout = new utest.Dispatcher();
	this.onComplete = new utest.Dispatcher();
	$s.pop();
}
utest.TestHandler.__name__ = ["utest","TestHandler"];
utest.TestHandler.exceptionStack = function(pops) {
	$s.push("utest.TestHandler::exceptionStack");
	var $spos = $s.length;
	if(pops == null) pops = 2;
	var stack = haxe.Stack.exceptionStack();
	while(pops-- > 0) stack.pop();
	$s.pop();
	return stack;
	$s.pop();
}
utest.TestHandler.prototype.results = null;
utest.TestHandler.prototype.fixture = null;
utest.TestHandler.prototype.asyncStack = null;
utest.TestHandler.prototype.onTested = null;
utest.TestHandler.prototype.onTimeout = null;
utest.TestHandler.prototype.onComplete = null;
utest.TestHandler.prototype.execute = function() {
	$s.push("utest.TestHandler::execute");
	var $spos = $s.length;
	try {
		this.executeMethod(this.fixture.setup);
		try {
			this.executeMethod(this.fixture.method);
		} catch( e ) {
			$e = [];
			while($s.length >= $spos) $e.unshift($s.pop());
			$s.push($e[0]);
			this.results.add(utest.Assertation.Error(e,utest.TestHandler.exceptionStack()));
		}
	} catch( e ) {
		$e = [];
		while($s.length >= $spos) $e.unshift($s.pop());
		$s.push($e[0]);
		this.results.add(utest.Assertation.SetupError(e,utest.TestHandler.exceptionStack()));
	}
	this.checkTested();
	$s.pop();
}
utest.TestHandler.prototype.checkTested = function() {
	$s.push("utest.TestHandler::checkTested");
	var $spos = $s.length;
	if(this.expireson == null || this.asyncStack.length == 0) this.tested(); else if(haxe.Timer.stamp() > this.expireson) this.timeout(); else haxe.Timer.delay($closure(this,"checkTested"),10);
	$s.pop();
}
utest.TestHandler.prototype.expireson = null;
utest.TestHandler.prototype.setTimeout = function(timeout) {
	$s.push("utest.TestHandler::setTimeout");
	var $spos = $s.length;
	var newexpire = haxe.Timer.stamp() + timeout / 1000;
	this.expireson = this.expireson == null?newexpire:newexpire > this.expireson?newexpire:this.expireson;
	$s.pop();
}
utest.TestHandler.prototype.bindHandler = function() {
	$s.push("utest.TestHandler::bindHandler");
	var $spos = $s.length;
	utest.Assert.results = this.results;
	utest.Assert.createAsync = $closure(this,"addAsync");
	utest.Assert.createEvent = $closure(this,"addEvent");
	$s.pop();
}
utest.TestHandler.prototype.unbindHandler = function() {
	$s.push("utest.TestHandler::unbindHandler");
	var $spos = $s.length;
	utest.Assert.results = null;
	utest.Assert.createAsync = function(f,t) {
		$s.push("utest.TestHandler::unbindHandler@83");
		var $spos = $s.length;
		var $tmp = function() {
			$s.push("utest.TestHandler::unbindHandler@83@83");
			var $spos = $s.length;
			$s.pop();
		};
		$s.pop();
		return $tmp;
		$s.pop();
	};
	utest.Assert.createEvent = function(f,t) {
		$s.push("utest.TestHandler::unbindHandler@84");
		var $spos = $s.length;
		var $tmp = function(e) {
			$s.push("utest.TestHandler::unbindHandler@84@84");
			var $spos = $s.length;
			$s.pop();
		};
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
}
utest.TestHandler.prototype.addAsync = function(f,timeout) {
	$s.push("utest.TestHandler::addAsync");
	var $spos = $s.length;
	if(timeout == null) timeout = 250;
	if(null == f) f = function() {
		$s.push("utest.TestHandler::addAsync@113");
		var $spos = $s.length;
		$s.pop();
	};
	this.asyncStack.add(f);
	var handler = this;
	this.setTimeout(timeout);
	var $tmp = function() {
		$s.push("utest.TestHandler::addAsync@117");
		var $spos = $s.length;
		if(!handler.asyncStack.remove(f)) {
			handler.results.add(utest.Assertation.AsyncError("method already executed",[]));
			$s.pop();
			return;
		}
		try {
			handler.bindHandler();
			f();
		} catch( e ) {
			$e = [];
			while($s.length >= $spos) $e.unshift($s.pop());
			$s.push($e[0]);
			handler.results.add(utest.Assertation.AsyncError(e,utest.TestHandler.exceptionStack(0)));
		}
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
utest.TestHandler.prototype.addEvent = function(f,timeout) {
	$s.push("utest.TestHandler::addEvent");
	var $spos = $s.length;
	if(timeout == null) timeout = 250;
	this.asyncStack.add(f);
	var handler = this;
	this.setTimeout(timeout);
	var $tmp = function(e) {
		$s.push("utest.TestHandler::addEvent@135");
		var $spos = $s.length;
		if(!handler.asyncStack.remove(f)) {
			handler.results.add(utest.Assertation.AsyncError("event already executed",[]));
			$s.pop();
			return;
		}
		try {
			handler.bindHandler();
			f(e);
		} catch( e1 ) {
			$e = [];
			while($s.length >= $spos) $e.unshift($s.pop());
			$s.push($e[0]);
			handler.results.add(utest.Assertation.AsyncError(e1,utest.TestHandler.exceptionStack(0)));
		}
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
utest.TestHandler.prototype.executeMethod = function(name) {
	$s.push("utest.TestHandler::executeMethod");
	var $spos = $s.length;
	if(name == null) {
		$s.pop();
		return;
	}
	this.bindHandler();
	Reflect.field(this.fixture.target,name).apply(this.fixture.target,[]);
	$s.pop();
}
utest.TestHandler.prototype.tested = function() {
	$s.push("utest.TestHandler::tested");
	var $spos = $s.length;
	if(this.results.length == 0) this.results.add(utest.Assertation.Warning("no assertions"));
	this.onTested.dispatch(this);
	this.completed();
	$s.pop();
}
utest.TestHandler.prototype.timeout = function() {
	$s.push("utest.TestHandler::timeout");
	var $spos = $s.length;
	this.results.add(utest.Assertation.TimeoutError(this.asyncStack.length,[]));
	this.onTimeout.dispatch(this);
	this.completed();
	$s.pop();
}
utest.TestHandler.prototype.completed = function() {
	$s.push("utest.TestHandler::completed");
	var $spos = $s.length;
	try {
		this.executeMethod(this.fixture.teardown);
	} catch( e ) {
		$e = [];
		while($s.length >= $spos) $e.unshift($s.pop());
		$s.push($e[0]);
		this.results.add(utest.Assertation.TeardownError(e,utest.TestHandler.exceptionStack(2)));
	}
	this.unbindHandler();
	this.onComplete.dispatch(this);
	$s.pop();
}
utest.TestHandler.prototype.__class__ = utest.TestHandler;
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
rg.view.svg.widget.ChartLine = function(panel) {
	if( panel === $_ ) return;
	$s.push("rg.view.svg.widget.ChartLine::new");
	var $spos = $s.length;
	rg.view.svg.widget.ChartCartesian.call(this,panel);
	this.addClass("line-chart");
	this.chart = this.g.append("svg:g");
	$s.pop();
}
rg.view.svg.widget.ChartLine.__name__ = ["rg","view","svg","widget","ChartLine"];
rg.view.svg.widget.ChartLine.__super__ = rg.view.svg.widget.ChartCartesian;
for(var k in rg.view.svg.widget.ChartCartesian.prototype ) rg.view.svg.widget.ChartLine.prototype[k] = rg.view.svg.widget.ChartCartesian.prototype[k];
rg.view.svg.widget.ChartLine.coordsFromTransform = function(s) {
	$s.push("rg.view.svg.widget.ChartLine::coordsFromTransform");
	var $spos = $s.length;
	if(!rg.view.svg.widget.ChartLine.retransform.match(s)) {
		var $tmp = [0.0,0];
		$s.pop();
		return $tmp;
	} else {
		var $tmp = [Std.parseFloat(rg.view.svg.widget.ChartLine.retransform.matched(1)),Std.parseFloat(rg.view.svg.widget.ChartLine.retransform.matched(2))];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
rg.view.svg.widget.ChartLine.prototype.symbol = null;
rg.view.svg.widget.ChartLine.prototype.symbolStyle = null;
rg.view.svg.widget.ChartLine.prototype.segmenton = null;
rg.view.svg.widget.ChartLine.prototype.lineInterpolator = null;
rg.view.svg.widget.ChartLine.prototype.lineEffect = null;
rg.view.svg.widget.ChartLine.prototype.y0property = null;
rg.view.svg.widget.ChartLine.prototype.linePathShape = null;
rg.view.svg.widget.ChartLine.prototype.chart = null;
rg.view.svg.widget.ChartLine.prototype.dps = null;
rg.view.svg.widget.ChartLine.prototype.segment = null;
rg.view.svg.widget.ChartLine.prototype.setVariables = function(variableIndependents,variableDependents) {
	$s.push("rg.view.svg.widget.ChartLine::setVariables");
	var $spos = $s.length;
	var me = this;
	rg.view.svg.widget.ChartCartesian.prototype.setVariables.call(this,variableIndependents,variableDependents);
	this.linePathShape = [];
	var _g1 = 0, _g = variableDependents.length;
	while(_g1 < _g) {
		var i = _g1++;
		var line = [new thx.svg.Line($closure(this,"x"),this.getY1(i))];
		if(null != this.lineInterpolator) line[0].interpolator(this.lineInterpolator);
		this.linePathShape[i] = (function(line) {
			$s.push("rg.view.svg.widget.ChartLine::setVariables@60");
			var $spos = $s.length;
			var $tmp = function(dp,i1) {
				$s.push("rg.view.svg.widget.ChartLine::setVariables@60@60");
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
rg.view.svg.widget.ChartLine.prototype.x = function(d,i) {
	$s.push("rg.view.svg.widget.ChartLine::x");
	var $spos = $s.length;
	var value = Reflect.field(d,this.variableIndependent.type), scaled = this.variableIndependent.axis.scale(this.variableIndependent.min,this.variableIndependent.max,value), scaledw = scaled * this.width;
	$s.pop();
	return scaledw;
	$s.pop();
}
rg.view.svg.widget.ChartLine.prototype.getY1 = function(pos) {
	$s.push("rg.view.svg.widget.ChartLine::getY1");
	var $spos = $s.length;
	var h = this.height, v = this.variableDependents[pos], y0 = this.y0property;
	if(null != y0) {
		var $tmp = function(d,i) {
			$s.push("rg.view.svg.widget.ChartLine::getY1@83");
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
			$s.push("rg.view.svg.widget.ChartLine::getY1@92");
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
rg.view.svg.widget.ChartLine.prototype.getY0 = function(pos) {
	$s.push("rg.view.svg.widget.ChartLine::getY0");
	var $spos = $s.length;
	var h = this.height, y0 = this.y0property, v = this.variableDependents[pos];
	var $tmp = function(d,i) {
		$s.push("rg.view.svg.widget.ChartLine::getY0@107");
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
rg.view.svg.widget.ChartLine.prototype.segments = null;
rg.view.svg.widget.ChartLine.prototype.classf = function(pos,cls) {
	$s.push("rg.view.svg.widget.ChartLine::classf");
	var $spos = $s.length;
	var $tmp = function(_,i) {
		$s.push("rg.view.svg.widget.ChartLine::classf@120");
		var $spos = $s.length;
		var $tmp = cls + " item-" + (pos + i);
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.widget.ChartLine.prototype.data = function(dps) {
	$s.push("rg.view.svg.widget.ChartLine::data");
	var $spos = $s.length;
	var axisgroup = this.chart.selectAll("g.group").data(dps);
	var axisenter = axisgroup.enter().append("svg:g").attr("class").stringf(function(_,i) {
		$s.push("rg.view.svg.widget.ChartLine::data@132");
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
		var gi = this.chart.select("g.group-" + i), stats = [rg.util.DataPoints.stats(Arrays.flatten(this.segments),this.variableDependents[i].type)];
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
				$s.push("rg.view.svg.widget.ChartLine::data@164");
				var $spos = $s.length;
				var $tmp = function(n,i1) {
					$s.push("rg.view.svg.widget.ChartLine::data@164@164");
					var $spos = $s.length;
					var color = thx.js.Dom.selectNode(n).style("stroke").get();
					if(null == color) color = "#000000";
					var start = thx.color.Hsl.toHsl(thx.color.Colors.parse(color)), end = thx.color.Hsl.darker(start,lightness1[0]);
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
					$s.push("rg.view.svg.widget.ChartLine::data@178");
					var $spos = $s.length;
					var $tmp = function(_,i1) {
						$s.push("rg.view.svg.widget.ChartLine::data@178@178");
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
		var gsymbols = gi.selectAll("g.symbols").data(this.segments), vars = this.variableDependents, onclick = ((function() {
			$s.push("rg.view.svg.widget.ChartLine::data@215");
			var $spos = $s.length;
			var $tmp = function(f,a1) {
				$s.push("rg.view.svg.widget.ChartLine::data@215@215");
				var $spos = $s.length;
				var $tmp = (function() {
					$s.push("rg.view.svg.widget.ChartLine::data@215@215@215");
					var $spos = $s.length;
					var $tmp = function(a2,a3) {
						$s.push("rg.view.svg.widget.ChartLine::data@215@215@215@215");
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
			$s.push("rg.view.svg.widget.ChartLine::data@216");
			var $spos = $s.length;
			var $tmp = function(f,a1) {
				$s.push("rg.view.svg.widget.ChartLine::data@216@216");
				var $spos = $s.length;
				var $tmp = (function() {
					$s.push("rg.view.svg.widget.ChartLine::data@216@216@216");
					var $spos = $s.length;
					var $tmp = function(a2,a3) {
						$s.push("rg.view.svg.widget.ChartLine::data@216@216@216@216");
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
			$s.push("rg.view.svg.widget.ChartLine::data@222");
			var $spos = $s.length;
			var $tmp = function(d,i1) {
				$s.push("rg.view.svg.widget.ChartLine::data@222@222");
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
		gsymbol.append("svg:circle").attr("r")["float"](4).style("fill").string("#000000").style("fill-opacity")["float"](0.0).style("stroke").string("none");
		if(null != this.symbol) {
			var sp = [this.symbol];
			var spath = gsymbol.append("svg:path").attr("d").stringf((function(sp,stats) {
				$s.push("rg.view.svg.widget.ChartLine::data@246");
				var $spos = $s.length;
				var $tmp = function(dp,_) {
					$s.push("rg.view.svg.widget.ChartLine::data@246@246");
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
					$s.push("rg.view.svg.widget.ChartLine::data@250");
					var $spos = $s.length;
					var $tmp = function(dp,_) {
						$s.push("rg.view.svg.widget.ChartLine::data@250@250");
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
				$s.push("rg.view.svg.widget.ChartLine::data@257");
				var $spos = $s.length;
				var $tmp = function(n,i1) {
					$s.push("rg.view.svg.widget.ChartLine::data@257@257");
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
			$s.push("rg.view.svg.widget.ChartLine::data@269");
			var $spos = $s.length;
			var $tmp = function(d,i1) {
				$s.push("rg.view.svg.widget.ChartLine::data@269@269");
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
rg.view.svg.widget.ChartLine.prototype.getTranslatePointf = function(pos) {
	$s.push("rg.view.svg.widget.ChartLine::getTranslatePointf");
	var $spos = $s.length;
	var x = $closure(this,"x"), y = this.getY1(pos);
	var $tmp = function(dp,i) {
		$s.push("rg.view.svg.widget.ChartLine::getTranslatePointf@282");
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
rg.view.svg.widget.ChartLine.prototype.onmouseover = function(stats,n,i) {
	$s.push("rg.view.svg.widget.ChartLine::onmouseover");
	var $spos = $s.length;
	var dp = Reflect.field(n,"__data__"), text = this.labelDataPointOver(dp,stats);
	if(null == text) this.tooltip.hide(); else {
		var sel = thx.js.Dom.selectNode(n), coords = rg.view.svg.widget.ChartLine.coordsFromTransform(sel.attr("transform").get());
		this.tooltip.show();
		this.tooltip.setText(text.split("\n"));
		this.tooltip.moveTo(coords[0],coords[1]);
	}
	$s.pop();
}
rg.view.svg.widget.ChartLine.prototype.onclick = function(stats,dp,i) {
	$s.push("rg.view.svg.widget.ChartLine::onclick");
	var $spos = $s.length;
	this.click(dp,stats);
	$s.pop();
}
rg.view.svg.widget.ChartLine.prototype.__class__ = rg.view.svg.widget.ChartLine;
rg.controller.info.TestInfoDataSource = function(p) {
	$s.push("rg.controller.info.TestInfoDataSource::new");
	var $spos = $s.length;
	$s.pop();
}
rg.controller.info.TestInfoDataSource.__name__ = ["rg","controller","info","TestInfoDataSource"];
rg.controller.info.TestInfoDataSource.prototype.testDataSourceInfo = function() {
	$s.push("rg.controller.info.TestInfoDataSource::testDataSourceInfo");
	var $spos = $s.length;
	var info = new rg.controller.info.InfoDataSource();
	utest.Assert.raises(function() {
		$s.push("rg.controller.info.TestInfoDataSource::testDataSourceInfo@21");
		var $spos = $s.length;
		rg.controller.info.Info.feed(info,{ query : []});
		$s.pop();
	},thx.error.Error,null,null,{ fileName : "TestInfoDataSource.hx", lineNumber : 21, className : "rg.controller.info.TestInfoDataSource", methodName : "testDataSourceInfo"});
	rg.controller.info.Info.feed(info,{ query : ".impression"});
	utest.Assert.equals(".impression",info.query,null,{ fileName : "TestInfoDataSource.hx", lineNumber : 25, className : "rg.controller.info.TestInfoDataSource", methodName : "testDataSourceInfo"});
	utest.Assert.raises(function() {
		$s.push("rg.controller.info.TestInfoDataSource::testDataSourceInfo@29");
		var $spos = $s.length;
		rg.controller.info.Info.feed(info,{ path : []});
		$s.pop();
	},thx.error.Error,null,null,{ fileName : "TestInfoDataSource.hx", lineNumber : 29, className : "rg.controller.info.TestInfoDataSource", methodName : "testDataSourceInfo"});
	rg.controller.info.Info.feed(info,{ path : "/"});
	utest.Assert.equals("/",info.path,null,{ fileName : "TestInfoDataSource.hx", lineNumber : 33, className : "rg.controller.info.TestInfoDataSource", methodName : "testDataSourceInfo"});
	utest.Assert.raises(function() {
		$s.push("rg.controller.info.TestInfoDataSource::testDataSourceInfo@37");
		var $spos = $s.length;
		rg.controller.info.Info.feed(info,{ event : []});
		$s.pop();
	},thx.error.Error,null,null,{ fileName : "TestInfoDataSource.hx", lineNumber : 37, className : "rg.controller.info.TestInfoDataSource", methodName : "testDataSourceInfo"});
	rg.controller.info.Info.feed(info,{ event : "click"});
	utest.Assert.equals("click",info.event,null,{ fileName : "TestInfoDataSource.hx", lineNumber : 41, className : "rg.controller.info.TestInfoDataSource", methodName : "testDataSourceInfo"});
	utest.Assert.raises(function() {
		$s.push("rg.controller.info.TestInfoDataSource::testDataSourceInfo@45");
		var $spos = $s.length;
		rg.controller.info.Info.feed(info,{ data : 1});
		$s.pop();
	},thx.error.Error,null,null,{ fileName : "TestInfoDataSource.hx", lineNumber : 45, className : "rg.controller.info.TestInfoDataSource", methodName : "testDataSourceInfo"});
	rg.controller.info.Info.feed(info,{ data : "name"});
	utest.Assert.equals("name",info.namedData,null,{ fileName : "TestInfoDataSource.hx", lineNumber : 49, className : "rg.controller.info.TestInfoDataSource", methodName : "testDataSourceInfo"});
	utest.Assert.isNull(info.data,null,{ fileName : "TestInfoDataSource.hx", lineNumber : 50, className : "rg.controller.info.TestInfoDataSource", methodName : "testDataSourceInfo"});
	utest.Assert.raises(function() {
		$s.push("rg.controller.info.TestInfoDataSource::testDataSourceInfo@54");
		var $spos = $s.length;
		rg.controller.info.Info.feed(info,{ data : [1,2,3]});
		$s.pop();
	},thx.error.Error,null,null,{ fileName : "TestInfoDataSource.hx", lineNumber : 54, className : "rg.controller.info.TestInfoDataSource", methodName : "testDataSourceInfo"});
	rg.controller.info.Info.feed(info,{ data : [{ event : "click", count : 10}]});
	utest.Assert.same([{ event : "click", count : 10}],info.data,null,null,{ fileName : "TestInfoDataSource.hx", lineNumber : 57, className : "rg.controller.info.TestInfoDataSource", methodName : "testDataSourceInfo"});
	$s.pop();
}
rg.controller.info.TestInfoDataSource.prototype.__class__ = rg.controller.info.TestInfoDataSource;
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
rg.view.svg.widget.Title = function(panel,text,anchor,padding,className,shadow,outline) {
	if( panel === $_ ) return;
	$s.push("rg.view.svg.widget.Title::new");
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
rg.view.svg.widget.Title.__name__ = ["rg","view","svg","widget","Title"];
rg.view.svg.widget.Title.__super__ = rg.view.svg.panel.Layer;
for(var k in rg.view.svg.panel.Layer.prototype ) rg.view.svg.widget.Title.prototype[k] = rg.view.svg.panel.Layer.prototype[k];
rg.view.svg.widget.Title.prototype.text = null;
rg.view.svg.widget.Title.prototype.anchor = null;
rg.view.svg.widget.Title.prototype.padding = null;
rg.view.svg.widget.Title.prototype.label = null;
rg.view.svg.widget.Title.prototype.group = null;
rg.view.svg.widget.Title.prototype.idealHeight = function() {
	$s.push("rg.view.svg.widget.Title::idealHeight");
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
rg.view.svg.widget.Title.prototype.resize = function() {
	$s.push("rg.view.svg.widget.Title::resize");
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
rg.view.svg.widget.Title.prototype.getText = function() {
	$s.push("rg.view.svg.widget.Title::getText");
	var $spos = $s.length;
	var $tmp = this.label.text;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.widget.Title.prototype.setText = function(v) {
	$s.push("rg.view.svg.widget.Title::setText");
	var $spos = $s.length;
	var $tmp = this.label.setText(v);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.svg.widget.Title.prototype.setAnchor = function(v) {
	$s.push("rg.view.svg.widget.Title::setAnchor");
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
rg.view.svg.widget.Title.prototype.setPadding = function(v) {
	$s.push("rg.view.svg.widget.Title::setPadding");
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
rg.view.svg.widget.Title.prototype.__class__ = rg.view.svg.widget.Title;
rg.controller.info.InfoLineChart = function(p) {
	if( p === $_ ) return;
	$s.push("rg.controller.info.InfoLineChart::new");
	var $spos = $s.length;
	rg.controller.info.InfoCartesianChart.call(this);
	this.effect = rg.view.svg.widget.LineEffect.Gradient(0.75,2);
	this.interpolation = thx.svg.LineInterpolator.Linear;
	$s.pop();
}
rg.controller.info.InfoLineChart.__name__ = ["rg","controller","info","InfoLineChart"];
rg.controller.info.InfoLineChart.__super__ = rg.controller.info.InfoCartesianChart;
for(var k in rg.controller.info.InfoCartesianChart.prototype ) rg.controller.info.InfoLineChart.prototype[k] = rg.controller.info.InfoCartesianChart.prototype[k];
rg.controller.info.InfoLineChart.filters = function() {
	$s.push("rg.controller.info.InfoLineChart::filters");
	var $spos = $s.length;
	var $tmp = [{ field : "symbol", validator : function(v) {
		$s.push("rg.controller.info.InfoLineChart::filters@34");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String) || Reflect.isFunction(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoLineChart::filters@35");
		var $spos = $s.length;
		var $tmp = [{ field : "symbol", value : Std["is"](v,String)?function(_,_1) {
			$s.push("rg.controller.info.InfoLineChart::filters@35@37");
			var $spos = $s.length;
			$s.pop();
			return v;
			$s.pop();
		}:v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "symbolstyle", validator : function(v) {
		$s.push("rg.controller.info.InfoLineChart::filters@41");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoLineChart::filters@42");
		var $spos = $s.length;
		var $tmp = [{ field : "symbolStyle", value : v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "displayarea", validator : function(v) {
		$s.push("rg.controller.info.InfoLineChart::filters@48");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Bool);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "effect", validator : function(v) {
		$s.push("rg.controller.info.InfoLineChart::filters@52");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoLineChart::filters@53");
		var $spos = $s.length;
		var $tmp = [{ field : "effect", value : rg.view.svg.widget.LineEffects.parse(v)}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "interpolation", validator : function(v) {
		$s.push("rg.controller.info.InfoLineChart::filters@59");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoLineChart::filters@60");
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
rg.controller.info.TestInfoDataContext = function(p) {
	$s.push("rg.controller.info.TestInfoDataContext::new");
	var $spos = $s.length;
	$s.pop();
}
rg.controller.info.TestInfoDataContext.__name__ = ["rg","controller","info","TestInfoDataContext"];
rg.controller.info.TestInfoDataContext.prototype.testInfoDataContext = function() {
	$s.push("rg.controller.info.TestInfoDataContext::testInfoDataContext");
	var $spos = $s.length;
	var info = new rg.controller.info.InfoDataContext();
	utest.Assert.isNull(info.name,null,{ fileName : "TestInfoDataContext.hx", lineNumber : 18, className : "rg.controller.info.TestInfoDataContext", methodName : "testInfoDataContext"});
	utest.Assert.isNull(info.transform,null,{ fileName : "TestInfoDataContext.hx", lineNumber : 19, className : "rg.controller.info.TestInfoDataContext", methodName : "testInfoDataContext"});
	utest.Assert.equals(0,info.sources.length,null,{ fileName : "TestInfoDataContext.hx", lineNumber : 20, className : "rg.controller.info.TestInfoDataContext", methodName : "testInfoDataContext"});
	utest.Assert.raises(function() {
		$s.push("rg.controller.info.TestInfoDataContext::testInfoDataContext@24");
		var $spos = $s.length;
		rg.controller.info.Info.feed(info,{ name : []});
		$s.pop();
	},thx.error.Error,null,null,{ fileName : "TestInfoDataContext.hx", lineNumber : 24, className : "rg.controller.info.TestInfoDataContext", methodName : "testInfoDataContext"});
	rg.controller.info.Info.feed(info,{ name : "total"});
	utest.Assert.equals("total",info.name,null,{ fileName : "TestInfoDataContext.hx", lineNumber : 28, className : "rg.controller.info.TestInfoDataContext", methodName : "testInfoDataContext"});
	utest.Assert.raises(function() {
		$s.push("rg.controller.info.TestInfoDataContext::testInfoDataContext@32");
		var $spos = $s.length;
		rg.controller.info.Info.feed(info,{ transform : "doSomething"});
		$s.pop();
	},thx.error.Error,null,null,{ fileName : "TestInfoDataContext.hx", lineNumber : 32, className : "rg.controller.info.TestInfoDataContext", methodName : "testInfoDataContext"});
	rg.controller.info.Info.feed(info,{ transform : function(_) {
		$s.push("rg.controller.info.TestInfoDataContext::testInfoDataContext@35");
		var $spos = $s.length;
		$s.pop();
		return null;
		$s.pop();
	}});
	utest.Assert.isTrue(Reflect.isFunction(Reflect.field(info,"transform")),null,{ fileName : "TestInfoDataContext.hx", lineNumber : 36, className : "rg.controller.info.TestInfoDataContext", methodName : "testInfoDataContext"});
	utest.Assert.raises(function() {
		$s.push("rg.controller.info.TestInfoDataContext::testInfoDataContext@40");
		var $spos = $s.length;
		rg.controller.info.Info.feed(info,{ src : "mysource"});
		$s.pop();
	},thx.error.Error,null,null,{ fileName : "TestInfoDataContext.hx", lineNumber : 40, className : "rg.controller.info.TestInfoDataContext", methodName : "testInfoDataContext"});
	rg.controller.info.Info.feed(info,{ src : [{ data : "A"},{ data : "B"}]});
	utest.Assert.equals(2,info.sources.length,null,{ fileName : "TestInfoDataContext.hx", lineNumber : 44, className : "rg.controller.info.TestInfoDataContext", methodName : "testInfoDataContext"});
	var _g = 0, _g1 = info.sources;
	while(_g < _g1.length) {
		var src = _g1[_g];
		++_g;
		utest.Assert["is"](src,rg.controller.info.InfoDataSource,null,{ fileName : "TestInfoDataContext.hx", lineNumber : 46, className : "rg.controller.info.TestInfoDataContext", methodName : "testInfoDataContext"});
	}
	$s.pop();
}
rg.controller.info.TestInfoDataContext.prototype.__class__ = rg.controller.info.TestInfoDataContext;
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
	$s.pop();
}
rg.controller.info.InfoLeaderboard.__name__ = ["rg","controller","info","InfoLeaderboard"];
rg.controller.info.InfoLeaderboard.filters = function() {
	$s.push("rg.controller.info.InfoLeaderboard::filters");
	var $spos = $s.length;
	var $tmp = [{ field : "animation", validator : function(v) {
		$s.push("rg.controller.info.InfoLeaderboard::filters@27");
		var $spos = $s.length;
		var $tmp = Reflect.isObject(v) && null == Type.getClass(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoLeaderboard::filters@28");
		var $spos = $s.length;
		var animation = new rg.controller.info.InfoAnimation();
		animation.ease = thx.math.Equations.linear;
		var $tmp = [{ field : "animation", value : rg.controller.info.Info.feed(animation,v)}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "label", validator : function(v) {
		$s.push("rg.controller.info.InfoLeaderboard::filters@38");
		var $spos = $s.length;
		var $tmp = Reflect.isObject(v) && null == Type.getClass(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoLeaderboard::filters@39");
		var $spos = $s.length;
		var $tmp = [{ field : "label", value : rg.controller.info.Info.feed(new rg.controller.info.InfoLabel(),v)}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "click", validator : function(v) {
		$s.push("rg.controller.info.InfoLeaderboard::filters@45");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : null},{ field : "sort", validator : function(v) {
		$s.push("rg.controller.info.InfoLeaderboard::filters@49");
		var $spos = $s.length;
		var $tmp = Reflect.isFunction(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoLeaderboard::filters@50");
		var $spos = $s.length;
		var $tmp = [{ field : "sortDataPoint", value : v}];
		$s.pop();
		return $tmp;
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
rg.controller.info.InfoLeaderboard.prototype.__class__ = rg.controller.info.InfoLeaderboard;
TestAll = function() { }
TestAll.__name__ = ["TestAll"];
TestAll.addTest = function(runner) {
	$s.push("TestAll::addTest");
	var $spos = $s.length;
	runner.addCase(new rg.controller.factory.TestFactoryAxis());
	runner.addCase(new rg.controller.factory.TestFactoryDataContext());
	runner.addCase(new rg.controller.factory.TestFactoryDataSource());
	runner.addCase(new rg.controller.factory.TestFactoryVariableContexts());
	runner.addCase(new rg.controller.factory.TestFactoryVariableDependent());
	runner.addCase(new rg.controller.factory.TestFactoryVariableIndependent());
	runner.addCase(new rg.controller.info.TestInfoDataContext());
	runner.addCase(new rg.controller.info.TestInfoDataSource());
	runner.addCase(new rg.controller.info.TestInfoLayout());
	runner.addCase(new rg.controller.info.TestInfoVariable());
	runner.addCase(new rg.controller.info.TestInfoVisualizationOption());
	runner.addCase(new rg.data.TestAxisOrdinal());
	runner.addCase(new rg.data.TestDataProcessor());
	runner.addCase(new rg.data.source.TestRGDataSource());
	runner.addCase(new rg.data.source.rgquery.TestQueryParser());
	runner.addCase(new rg.data.source.rgquery.transform.TestCountTimeIntersectTransform());
	runner.addCase(new rg.data.source.rgquery.transform.TestCountTimeSeriesTransform());
	runner.addCase(new rg.data.source.rgquery.transform.TestCountTransform());
	runner.addCase(new rg.util.TestProperties());
	runner.addCase(new rg.view.frame.TestStack());
	runner.addCase(new rg.view.svg.panel.TestPanel());
	runner.addCase(new rg.view.svg.panel.TestSpace());
	runner.addCase(new rg.data.TestAxisGroupByTime());
	$s.pop();
}
TestAll.main = function() {
	$s.push("TestAll::main");
	var $spos = $s.length;
	var runner = new utest.Runner();
	TestAll.addTest(runner);
	var report = utest.ui.Report.create(runner);
	runner.run();
	$s.pop();
}
TestAll.prototype.__class__ = TestAll;
rg.data.DataProcessor = function(sources) {
	if( sources === $_ ) return;
	$s.push("rg.data.DataProcessor::new");
	var $spos = $s.length;
	this.sources = sources;
	sources.onLoad.add($closure(this,"process"));
	this.onData = new hxevents.Dispatcher();
	$s.pop();
}
rg.data.DataProcessor.__name__ = ["rg","data","DataProcessor"];
rg.data.DataProcessor.prototype.sources = null;
rg.data.DataProcessor.prototype.onData = null;
rg.data.DataProcessor.prototype.independentVariables = null;
rg.data.DataProcessor.prototype.dependentVariables = null;
rg.data.DataProcessor.prototype.transform = function(s) {
	$s.push("rg.data.DataProcessor::transform");
	var $spos = $s.length;
	var $tmp = s[0];
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.DataProcessor.prototype.load = function() {
	$s.push("rg.data.DataProcessor::load");
	var $spos = $s.length;
	var tmin = null, tmax = null;
	var _g = 0, _g1 = this.independentVariables;
	while(_g < _g1.length) {
		var variable = _g1[_g];
		++_g;
		if(!Std["is"](variable.variable.axis,rg.data.AxisTime) && !Std["is"](variable.variable.axis,rg.data.AxisGroupByTime)) continue;
		tmin = variable.variable.min;
		tmax = variable.variable.max;
		break;
	}
	if(null != tmin || null != tmax) {
		var $it0 = this.sources.iterator();
		while( $it0.hasNext() ) {
			var ds = $it0.next();
			var query = Std["is"](ds,rg.data.source.DataSourceReportGrid)?ds:null;
			if(null == query) continue;
			query.start = tmin;
			query.end = tmax;
		}
	}
	this.sources.load();
	$s.pop();
}
rg.data.DataProcessor.prototype.filterSubset = function(subset,variables) {
	$s.push("rg.data.DataProcessor::filterSubset");
	var $spos = $s.length;
	var $tmp = Arrays.filter(subset,(function(f,a1) {
		$s.push("rg.data.DataProcessor::filterSubset@62");
		var $spos = $s.length;
		var $tmp = function(a2) {
			$s.push("rg.data.DataProcessor::filterSubset@62@62");
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
rg.data.DataProcessor.prototype.process = function(data) {
	$s.push("rg.data.DataProcessor::process");
	var $spos = $s.length;
	if(null == data || data.length == 0 || data[0].length == 0) {
		this.onData.dispatch([]);
		$s.pop();
		return;
	}
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
			var variable = [ctx.variable], values = Arrays.filter(data.map((function(variable) {
				$s.push("rg.data.DataProcessor::fillDependentVariables@114");
				var $spos = $s.length;
				var $tmp = function(dp,_) {
					$s.push("rg.data.DataProcessor::fillDependentVariables@114@114");
					var $spos = $s.length;
					var $tmp = Reflect.field(dp,variable[0].type);
					$s.pop();
					return $tmp;
					$s.pop();
				};
				$s.pop();
				return $tmp;
				$s.pop();
			})(variable)),(function() {
				$s.push("rg.data.DataProcessor::fillDependentVariables@114");
				var $spos = $s.length;
				var $tmp = function(v) {
					$s.push("rg.data.DataProcessor::fillDependentVariables@114@114");
					var $spos = $s.length;
					var $tmp = null != v;
					$s.pop();
					return $tmp;
					$s.pop();
				};
				$s.pop();
				return $tmp;
				$s.pop();
			})());
			if(values.length == 0) continue;
			var value, compare = Dynamics.comparef(value = values[0]);
			if(null == variable[0].axis) variable[0].setAxis(new rg.controller.factory.FactoryAxis().create(variable[0].type,Std["is"](value,Float)));
			if(null == variable[0].min) {
				variable[0].min = value;
				var _g3 = 1, _g2 = values.length;
				while(_g3 < _g2) {
					var j = _g3++;
					value = values[j];
					if(compare(variable[0].min,value) > 0) variable[0].min = value;
				}
			}
			if(null == variable[0].max) {
				variable[0].max = value;
				var _g3 = 1, _g2 = values.length;
				while(_g3 < _g2) {
					var j = _g3++;
					value = values[j];
					if(compare(variable[0].max,value) < 0) variable[0].max = value;
				}
			}
		}
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
	var toprocess = false;
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
		var flatten = Arrays.flatten(data);
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
	var axis = variable.axis, property = variable.type, values = axis.getValues(), value;
	var _g = 0;
	while(_g < data.length) {
		var dp = data[_g];
		++_g;
		if(Reflect.hasField(dp,property)) {
			value = Reflect.field(dp,property);
			if(!values.exists(value)) {
				if(values.length == 0) variable.min = value;
				values.add(value);
				variable.max = value;
			}
		}
	}
	$s.pop();
}
rg.data.DataProcessor.prototype.getVariableIndependentValues = function() {
	$s.push("rg.data.DataProcessor::getVariableIndependentValues");
	var $spos = $s.length;
	var $tmp = Arrays.product(this.independentVariables.map(function(d,i) {
		$s.push("rg.data.DataProcessor::getVariableIndependentValues@208");
		var $spos = $s.length;
		var $tmp = d.variable.range();
		$s.pop();
		return $tmp;
		$s.pop();
	}));
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.data.DataProcessor.prototype.__class__ = rg.data.DataProcessor;
rg.view.layout.CartesianLayout = function(width,height,container) {
	if( width === $_ ) return;
	$s.push("rg.view.layout.CartesianLayout::new");
	var $spos = $s.length;
	rg.view.layout.Layout.call(this,width,height,container);
	this.titleOnTop = true;
	this.left = true;
	this.alternating = true;
	this.yitems = [];
	$s.pop();
}
rg.view.layout.CartesianLayout.__name__ = ["rg","view","layout","CartesianLayout"];
rg.view.layout.CartesianLayout.__super__ = rg.view.layout.Layout;
for(var k in rg.view.layout.Layout.prototype ) rg.view.layout.CartesianLayout.prototype[k] = rg.view.layout.Layout.prototype[k];
rg.view.layout.CartesianLayout.prototype.main = null;
rg.view.layout.CartesianLayout.prototype.titleOnTop = null;
rg.view.layout.CartesianLayout.prototype.leftcontainer = null;
rg.view.layout.CartesianLayout.prototype.rightcontainer = null;
rg.view.layout.CartesianLayout.prototype.bottomcontainer = null;
rg.view.layout.CartesianLayout.prototype.bottommiddlecontainer = null;
rg.view.layout.CartesianLayout.prototype.maincontainer = null;
rg.view.layout.CartesianLayout.prototype.middlecontainer = null;
rg.view.layout.CartesianLayout.prototype.bottomleft = null;
rg.view.layout.CartesianLayout.prototype.bottomright = null;
rg.view.layout.CartesianLayout.prototype.xtickmarks = null;
rg.view.layout.CartesianLayout.prototype.title = null;
rg.view.layout.CartesianLayout.prototype.left = null;
rg.view.layout.CartesianLayout.prototype.alternating = null;
rg.view.layout.CartesianLayout.prototype.yitems = null;
rg.view.layout.CartesianLayout.prototype.xtitle = null;
rg.view.layout.CartesianLayout.prototype.getContext = function(name) {
	$s.push("rg.view.layout.CartesianLayout::getContext");
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
rg.view.layout.CartesianLayout.prototype.getPanel = function(name) {
	$s.push("rg.view.layout.CartesianLayout::getPanel");
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
rg.view.layout.CartesianLayout.prototype.getYItem = function(index) {
	$s.push("rg.view.layout.CartesianLayout::getYItem");
	var $spos = $s.length;
	if(null == this.yitems[index]) this.yitems[index] = { container : null, context : null, title : null, anchor : this.alternating && index % 2 == 0?rg.view.layout.Anchor.Right:rg.view.layout.Anchor.Left};
	var $tmp = this.yitems[index];
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.layout.CartesianLayout.prototype.getYContainer = function(index) {
	$s.push("rg.view.layout.CartesianLayout::getYContainer");
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
rg.view.layout.CartesianLayout.prototype.getYContext = function(index) {
	$s.push("rg.view.layout.CartesianLayout::getYContext");
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
rg.view.layout.CartesianLayout.prototype.getYTitle = function(index) {
	$s.push("rg.view.layout.CartesianLayout::getYTitle");
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
rg.view.layout.CartesianLayout.prototype.getYIndex = function(s) {
	$s.push("rg.view.layout.CartesianLayout::getYIndex");
	var $spos = $s.length;
	if(!rg.view.layout.CartesianLayout.REYINDEX.match(s)) {
		$s.pop();
		return -1;
	} else {
		var $tmp = Std.parseInt(rg.view.layout.CartesianLayout.REYINDEX.matched(1));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
rg.view.layout.CartesianLayout.prototype.isY = function(s) {
	$s.push("rg.view.layout.CartesianLayout::isY");
	var $spos = $s.length;
	var $tmp = rg.view.layout.CartesianLayout.REYAXIS.match(s);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.layout.CartesianLayout.prototype.isYTitle = function(s) {
	$s.push("rg.view.layout.CartesianLayout::isYTitle");
	var $spos = $s.length;
	var $tmp = rg.view.layout.CartesianLayout.REYTITLE.match(s);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.layout.CartesianLayout.prototype.suggestSize = function(name,size) {
	$s.push("rg.view.layout.CartesianLayout::suggestSize");
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
rg.view.layout.CartesianLayout.prototype.suggestLateralSize = function(anchor) {
	$s.push("rg.view.layout.CartesianLayout::suggestLateralSize");
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
rg.view.layout.CartesianLayout.prototype.getXTitle = function() {
	$s.push("rg.view.layout.CartesianLayout::getXTitle");
	var $spos = $s.length;
	if(null == this.xtitle) this.xtitle = new rg.view.layout.PanelContext(this.getBottomMiddleContainer().createPanel(rg.view.frame.FrameLayout.Fixed(0,0,0)),rg.view.layout.Anchor.Top);
	var $tmp = this.xtitle;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.layout.CartesianLayout.prototype.getMainContainer = function() {
	$s.push("rg.view.layout.CartesianLayout::getMainContainer");
	var $spos = $s.length;
	if(null == this.maincontainer) this.maincontainer = this.space.createContainerAt(this.titleOnTop?1:0,rg.view.frame.FrameLayout.Fill(0,0),rg.view.frame.Orientation.Vertical);
	var $tmp = this.maincontainer;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.layout.CartesianLayout.prototype.getMiddleContainer = function() {
	$s.push("rg.view.layout.CartesianLayout::getMiddleContainer");
	var $spos = $s.length;
	if(null == this.middlecontainer) this.middlecontainer = this.getMainContainer().createContainerAt(0,rg.view.frame.FrameLayout.Fill(0,0),rg.view.frame.Orientation.Horizontal);
	var $tmp = this.middlecontainer;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.layout.CartesianLayout.prototype.getLeftContainer = function() {
	$s.push("rg.view.layout.CartesianLayout::getLeftContainer");
	var $spos = $s.length;
	if(null == this.leftcontainer) this.leftcontainer = this.getMiddleContainer().createContainerAt(0,rg.view.frame.FrameLayout.Fixed(0,0,0),rg.view.frame.Orientation.Horizontal);
	var $tmp = this.leftcontainer;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.layout.CartesianLayout.prototype.getRightContainer = function() {
	$s.push("rg.view.layout.CartesianLayout::getRightContainer");
	var $spos = $s.length;
	if(null == this.rightcontainer) this.rightcontainer = this.getMiddleContainer().createContainerAt(2,rg.view.frame.FrameLayout.Fixed(0,0,0),rg.view.frame.Orientation.Horizontal);
	var $tmp = this.rightcontainer;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.layout.CartesianLayout.prototype.getBottomContainer = function() {
	$s.push("rg.view.layout.CartesianLayout::getBottomContainer");
	var $spos = $s.length;
	if(null == this.bottomcontainer) this.bottomcontainer = this.getMainContainer().createContainerAt(1,rg.view.frame.FrameLayout.Fixed(0,0,0),rg.view.frame.Orientation.Horizontal);
	var $tmp = this.bottomcontainer;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.layout.CartesianLayout.prototype.getBottomMiddleContainer = function() {
	$s.push("rg.view.layout.CartesianLayout::getBottomMiddleContainer");
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
rg.view.layout.CartesianLayout.prototype.getXTickmarks = function() {
	$s.push("rg.view.layout.CartesianLayout::getXTickmarks");
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
rg.view.layout.CartesianLayout.prototype.getMain = function() {
	$s.push("rg.view.layout.CartesianLayout::getMain");
	var $spos = $s.length;
	if(null == this.main) this.main = this.getMiddleContainer().createPanelAt(1,rg.view.frame.FrameLayout.Fill(0,0));
	var $tmp = this.main;
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.view.layout.CartesianLayout.prototype.feedOptions = function(info) {
	$s.push("rg.view.layout.CartesianLayout::feedOptions");
	var $spos = $s.length;
	rg.view.layout.Layout.prototype.feedOptions.call(this,info);
	this.titleOnTop = info.titleOnTop;
	switch( (info.layoutScaleY)[1] ) {
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
rg.view.layout.CartesianLayout.prototype.adjustPadding = function() {
	$s.push("rg.view.layout.CartesianLayout::adjustPadding");
	var $spos = $s.length;
	var top = null == this.title && null == this.paddings.top?8:this.paddings.top, bottom = (null == this.xtickmarks || !this.titleOnTop && null == this.title) && null == this.paddings.bottom?8:this.paddings.bottom, left = null == this.leftcontainer && null == this.paddings.left?20:this.paddings.left, right = null == this.rightcontainer && null == this.paddings.right?20:this.paddings.right;
	if(null != left || null != right) {
		this.suggestPanelPadding(this.getMain(),left,right);
		this.suggestPanelPadding(this.bottommiddlecontainer,left,right);
	}
	if(null != top || null != bottom) this.suggestPanelPadding(this.middlecontainer,top,bottom);
	$s.pop();
}
rg.view.layout.CartesianLayout.prototype.__class__ = rg.view.layout.CartesianLayout;
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
	this.heatmapColorStart = new thx.color.Hsl(210,1,1);
	this.heatmapColorEnd = new thx.color.Hsl(210,1,0.5);
	this.displayHeatmap = true;
	this.displayColumnTotal = true;
	this.displayRowTotal = true;
	this.columnAxes = 1;
	$s.pop();
}
rg.controller.info.InfoPivotTable.__name__ = ["rg","controller","info","InfoPivotTable"];
rg.controller.info.InfoPivotTable.parseColor = function(s) {
	$s.push("rg.controller.info.InfoPivotTable::parseColor");
	var $spos = $s.length;
	var rgb = thx.color.Colors.parse(s);
	if(null == s) rgb = thx.color.NamedColors.black;
	var $tmp = thx.color.Hsl.toHsl(rgb);
	$s.pop();
	return $tmp;
	$s.pop();
}
rg.controller.info.InfoPivotTable.filters = function() {
	$s.push("rg.controller.info.InfoPivotTable::filters");
	var $spos = $s.length;
	var $tmp = [{ field : "columnaxes", validator : function(v) {
		$s.push("rg.controller.info.InfoPivotTable::filters@54");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Int);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoPivotTable::filters@55");
		var $spos = $s.length;
		var $tmp = [{ field : "columnAxes", value : v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "displayheatmap", validator : function(v) {
		$s.push("rg.controller.info.InfoPivotTable::filters@61");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Bool);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoPivotTable::filters@62");
		var $spos = $s.length;
		var $tmp = [{ field : "displayHeatmap", value : v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "displaycolumntotal", validator : function(v) {
		$s.push("rg.controller.info.InfoPivotTable::filters@68");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Bool);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoPivotTable::filters@69");
		var $spos = $s.length;
		var $tmp = [{ field : "displayColumnTotal", value : v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "displayrowtotal", validator : function(v) {
		$s.push("rg.controller.info.InfoPivotTable::filters@75");
		var $spos = $s.length;
		var $tmp = Std["is"](v,Bool);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoPivotTable::filters@76");
		var $spos = $s.length;
		var $tmp = [{ field : "displayRowTotal", value : v}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "startcolor", validator : function(v) {
		$s.push("rg.controller.info.InfoPivotTable::filters@82");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoPivotTable::filters@83");
		var $spos = $s.length;
		var $tmp = [{ field : "heatmapColorStart", value : rg.controller.info.InfoPivotTable.parseColor(v)}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "endcolor", validator : function(v) {
		$s.push("rg.controller.info.InfoPivotTable::filters@89");
		var $spos = $s.length;
		var $tmp = Std["is"](v,String);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoPivotTable::filters@90");
		var $spos = $s.length;
		var $tmp = [{ field : "heatmapColorEnd", value : rg.controller.info.InfoPivotTable.parseColor(v)}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "label", validator : function(v) {
		$s.push("rg.controller.info.InfoPivotTable::filters@96");
		var $spos = $s.length;
		var $tmp = Reflect.isObject(v) && null == Type.getClass(v);
		$s.pop();
		return $tmp;
		$s.pop();
	}, filter : function(v) {
		$s.push("rg.controller.info.InfoPivotTable::filters@97");
		var $spos = $s.length;
		var $tmp = [{ field : "label", value : rg.controller.info.Info.feed(new rg.controller.info.InfoLabelPivotTable(),v)}];
		$s.pop();
		return $tmp;
		$s.pop();
	}},{ field : "click", validator : function(v) {
		$s.push("rg.controller.info.InfoPivotTable::filters@103");
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
rg.view.svg.widget.ChartBar = function(panel) {
	if( panel === $_ ) return;
	$s.push("rg.view.svg.widget.ChartBar::new");
	var $spos = $s.length;
	rg.view.svg.widget.ChartCartesian.call(this,panel);
	this.addClass("bar-chart");
	this.defs = this.g.append("svg:defs");
	this.chart = this.g.append("svg:g");
	this.gradientLightness = 1.4;
	this.displayGradient = true;
	$s.pop();
}
rg.view.svg.widget.ChartBar.__name__ = ["rg","view","svg","widget","ChartBar"];
rg.view.svg.widget.ChartBar.__super__ = rg.view.svg.widget.ChartCartesian;
for(var k in rg.view.svg.widget.ChartCartesian.prototype ) rg.view.svg.widget.ChartBar.prototype[k] = rg.view.svg.widget.ChartCartesian.prototype[k];
rg.view.svg.widget.ChartBar.prototype.stacked = null;
rg.view.svg.widget.ChartBar.prototype.chart = null;
rg.view.svg.widget.ChartBar.prototype.defs = null;
rg.view.svg.widget.ChartBar.prototype.dps = null;
rg.view.svg.widget.ChartBar.prototype.gradientLightness = null;
rg.view.svg.widget.ChartBar.prototype.displayGradient = null;
rg.view.svg.widget.ChartBar.prototype.data = function(dps) {
	$s.push("rg.view.svg.widget.ChartBar::data");
	var $spos = $s.length;
	var padding = 10, ypadding = 4, segpadding = 2, values = dps.length, axisgs = new Hash(), discrete, scaledist = rg.data.ScaleDistribution.ScaleFill, span;
	if(null != (discrete = Types["as"](this.variableIndependent.axis,rg.data.IAxisDiscrete)) && !Type.enumEq(rg.data.ScaleDistribution.ScaleFill,scaledist = discrete.scaleDistribution)) span = (this.width - padding * (values - 1)) / values; else span = (this.width - padding * (values - 1)) / values;
	var getGroup = function(name,container) {
		$s.push("rg.view.svg.widget.ChartBar::data@59");
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
	var _g1 = 0, _g = dps.length;
	while(_g1 < _g) {
		var i = _g1++;
		var valuedps = dps[i], waxis = (span - ypadding * (valuedps.length - 1)) / valuedps.length;
		var _g3 = 0, _g2 = valuedps.length;
		while(_g3 < _g2) {
			var j = _g3++;
			var axisdps = valuedps[j], axisg = getGroup("group-" + j,this.chart), ytype = this.variableDependents[j].type, yaxis = this.variableDependents[j].axis, ymin = this.variableDependents[j].min, ymax = this.variableDependents[j].max, w = Math.max(1,(waxis - segpadding * (axisdps.length - 1)) / axisdps.length), offset = -span / 2 + j * (waxis + ypadding), stats = null, over = (function(f,a1) {
				$s.push("rg.view.svg.widget.ChartBar::data@89");
				var $spos = $s.length;
				var $tmp = function(a2,a3) {
					$s.push("rg.view.svg.widget.ChartBar::data@89@89");
					var $spos = $s.length;
					var $tmp = f(a1,a2,a3);
					$s.pop();
					return $tmp;
					$s.pop();
				};
				$s.pop();
				return $tmp;
				$s.pop();
			})($closure(this,"onmouseover"),stats);
			var prev = 0.0;
			var _g5 = 0, _g4 = axisdps.length;
			while(_g5 < _g4) {
				var k = _g5++;
				var dp = axisdps[k], seggroup = getGroup("item-" + k,axisg), x = this.width * this.variableIndependent.axis.scale(this.variableIndependent.min,this.variableIndependent.max,Reflect.field(dp,this.variableIndependent.type)), y = prev, h = yaxis.scale(ymin,ymax,Reflect.field(dp,ytype)) * this.height;
				var bar = seggroup.append("svg:rect").attr("class").string("bar").attr("x")["float"](this.stacked?x + offset:x + offset + k * (w + segpadding)).attr("width")["float"](this.stacked?waxis:w).attr("y")["float"](this.height - h - y).attr("height")["float"](h).onNode("mouseover",over);
				bar.node()["__data__"] = dp;
				if(this.displayGradient) bar.eachNode($closure(this,"applyGradient"));
				if(this.stacked) prev = y + h;
			}
		}
	}
	$s.pop();
}
rg.view.svg.widget.ChartBar.prototype.onmouseover = function(stats,n,i) {
	$s.push("rg.view.svg.widget.ChartBar::onmouseover");
	var $spos = $s.length;
	var dp = Reflect.field(n,"__data__"), text = this.labelDataPointOver(dp,stats);
	if(null == text) this.tooltip.hide(); else {
		var sel = thx.js.Dom.selectNode(n), x = sel.attr("x").getFloat(), y = sel.attr("y").getFloat(), w = sel.attr("width").getFloat();
		this.tooltip.show();
		this.tooltip.setText(text.split("\n"));
		this.tooltip.moveTo(x + w / 2,y);
	}
	$s.pop();
}
rg.view.svg.widget.ChartBar.prototype.applyGradient = function(n,i) {
	$s.push("rg.view.svg.widget.ChartBar::applyGradient");
	var $spos = $s.length;
	var gn = thx.js.Dom.selectNodeData(n), dp = Reflect.field(n,"__data__"), rgb = gn.style("fill").get(), color = thx.color.Colors.parse(null == rgb?"#cccccc":rgb), id = "rg_bar_gradient_" + color.hex("");
	if(this.defs.select("#" + id).empty()) {
		var scolor = thx.color.Hsl.darker(thx.color.Hsl.toHsl(color),this.gradientLightness).toRgbString();
		var gradient = this.defs.append("svg:linearGradient").attr("id").string(id).attr("x1").string("0%").attr("x2").string("0%").attr("y1").string("100%").attr("y2").string("0%").attr("spreadMethod").string("pad");
		gradient.append("svg:stop").attr("offset").string("0%").attr("stop-color").string(scolor).attr("stop-opacity")["float"](1);
		gradient.append("svg:stop").attr("offset").string("100%").attr("stop-color").string(color.toRgbString()).attr("stop-opacity")["float"](1);
	}
	gn.attr("style").string("fill:url(#" + id + ")");
	$s.pop();
}
rg.view.svg.widget.ChartBar.prototype.__class__ = rg.view.svg.widget.ChartBar;
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
rg.controller.factory.TestFactoryVariableDependent = function(p) {
	$s.push("rg.controller.factory.TestFactoryVariableDependent::new");
	var $spos = $s.length;
	$s.pop();
}
rg.controller.factory.TestFactoryVariableDependent.__name__ = ["rg","controller","factory","TestFactoryVariableDependent"];
rg.controller.factory.TestFactoryVariableDependent.prototype.testIncompleteInfo = function() {
	$s.push("rg.controller.factory.TestFactoryVariableDependent::testIncompleteInfo");
	var $spos = $s.length;
	utest.Assert.raises(function() {
		$s.push("rg.controller.factory.TestFactoryVariableDependent::testIncompleteInfo@21");
		var $spos = $s.length;
		new rg.controller.factory.FactoryVariableDependent().create(new rg.controller.info.InfoVariable(),false);
		$s.pop();
	},thx.error.Error,null,null,{ fileName : "TestFactoryVariableDependent.hx", lineNumber : 21, className : "rg.controller.factory.TestFactoryVariableDependent", methodName : "testIncompleteInfo"});
	$s.pop();
}
rg.controller.factory.TestFactoryVariableDependent.prototype.testSimpleParameters = function() {
	$s.push("rg.controller.factory.TestFactoryVariableDependent::testSimpleParameters");
	var $spos = $s.length;
	var info = rg.controller.info.Info.feed(new rg.controller.info.InfoVariable(),{ view : [1.0,10.0], type : "count"}), factory = new rg.controller.factory.FactoryVariableDependent(), variable = factory.create(info,true);
	utest.Assert.notNull(variable,null,{ fileName : "TestFactoryVariableDependent.hx", lineNumber : 32, className : "rg.controller.factory.TestFactoryVariableDependent", methodName : "testSimpleParameters"});
	utest.Assert.same(1.0,variable.min,null,null,{ fileName : "TestFactoryVariableDependent.hx", lineNumber : 33, className : "rg.controller.factory.TestFactoryVariableDependent", methodName : "testSimpleParameters"});
	utest.Assert.same(10.0,variable.max,null,null,{ fileName : "TestFactoryVariableDependent.hx", lineNumber : 34, className : "rg.controller.factory.TestFactoryVariableDependent", methodName : "testSimpleParameters"});
	utest.Assert.equals("count",variable.type,null,{ fileName : "TestFactoryVariableDependent.hx", lineNumber : 35, className : "rg.controller.factory.TestFactoryVariableDependent", methodName : "testSimpleParameters"});
	info = rg.controller.info.Info.feed(new rg.controller.info.InfoVariable(),{ type : "count"});
	variable = factory.create(info,true);
	utest.Assert.isNull(variable.min,null,{ fileName : "TestFactoryVariableDependent.hx", lineNumber : 41, className : "rg.controller.factory.TestFactoryVariableDependent", methodName : "testSimpleParameters"});
	utest.Assert.isNull(variable.max,null,{ fileName : "TestFactoryVariableDependent.hx", lineNumber : 42, className : "rg.controller.factory.TestFactoryVariableDependent", methodName : "testSimpleParameters"});
	utest.Assert.equals("count",variable.type,null,{ fileName : "TestFactoryVariableDependent.hx", lineNumber : 43, className : "rg.controller.factory.TestFactoryVariableDependent", methodName : "testSimpleParameters"});
	$s.pop();
}
rg.controller.factory.TestFactoryVariableDependent.prototype.testAxisType = function() {
	$s.push("rg.controller.factory.TestFactoryVariableDependent::testAxisType");
	var $spos = $s.length;
	var info = rg.controller.info.Info.feed(new rg.controller.info.InfoVariable(),{ view : [1.0,10.0], type : ".impression"}), factory = new rg.controller.factory.FactoryVariableDependent(), variable = factory.create(info,true);
	utest.Assert["is"](variable.axis,rg.data.AxisNumeric,null,{ fileName : "TestFactoryVariableDependent.hx", lineNumber : 54, className : "rg.controller.factory.TestFactoryVariableDependent", methodName : "testAxisType"});
	$s.pop();
}
rg.controller.factory.TestFactoryVariableDependent.prototype.testValues = function() {
	$s.push("rg.controller.factory.TestFactoryVariableDependent::testValues");
	var $spos = $s.length;
	var info = rg.controller.info.Info.feed(new rg.controller.info.InfoVariable(),{ view : [1.0,10.0], values : [1.0,5.0,10.0], type : ".impression"}), factory = new rg.controller.factory.FactoryVariableDependent(), variable = factory.create(info,true);
	utest.Assert.same([1.0,5.0,10.0],Types["as"](variable.axis,rg.data.AxisOrdinal).getValues().array(),null,null,{ fileName : "TestFactoryVariableDependent.hx", lineNumber : 66, className : "rg.controller.factory.TestFactoryVariableDependent", methodName : "testValues"});
	$s.pop();
}
rg.controller.factory.TestFactoryVariableDependent.prototype.__class__ = rg.controller.factory.TestFactoryVariableDependent;
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
if(!utest._Dispatcher) utest._Dispatcher = {}
utest._Dispatcher.EventException = { __ename__ : ["utest","_Dispatcher","EventException"], __constructs__ : ["StopPropagation"] }
utest._Dispatcher.EventException.StopPropagation = ["StopPropagation",0];
utest._Dispatcher.EventException.StopPropagation.toString = $estr;
utest._Dispatcher.EventException.StopPropagation.__enum__ = utest._Dispatcher.EventException;
utest.Dispatcher = function(p) {
	if( p === $_ ) return;
	$s.push("utest.Dispatcher::new");
	var $spos = $s.length;
	this.handlers = new Array();
	$s.pop();
}
utest.Dispatcher.__name__ = ["utest","Dispatcher"];
utest.Dispatcher.stop = function() {
	$s.push("utest.Dispatcher::stop");
	var $spos = $s.length;
	throw utest._Dispatcher.EventException.StopPropagation;
	$s.pop();
}
utest.Dispatcher.prototype.handlers = null;
utest.Dispatcher.prototype.add = function(h) {
	$s.push("utest.Dispatcher::add");
	var $spos = $s.length;
	this.handlers.push(h);
	$s.pop();
	return h;
	$s.pop();
}
utest.Dispatcher.prototype.remove = function(h) {
	$s.push("utest.Dispatcher::remove");
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
utest.Dispatcher.prototype.clear = function() {
	$s.push("utest.Dispatcher::clear");
	var $spos = $s.length;
	this.handlers = new Array();
	$s.pop();
}
utest.Dispatcher.prototype.dispatch = function(e) {
	$s.push("utest.Dispatcher::dispatch");
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
		if( js.Boot.__instanceof(exc,utest._Dispatcher.EventException) ) {
			$e = [];
			while($s.length >= $spos) $e.unshift($s.pop());
			$s.push($e[0]);
			$s.pop();
			return false;
		} else throw(exc);
	}
	$s.pop();
}
utest.Dispatcher.prototype.has = function() {
	$s.push("utest.Dispatcher::has");
	var $spos = $s.length;
	var $tmp = this.handlers.length > 0;
	$s.pop();
	return $tmp;
	$s.pop();
}
utest.Dispatcher.prototype.__class__ = utest.Dispatcher;
utest.Notifier = function(p) {
	if( p === $_ ) return;
	$s.push("utest.Notifier::new");
	var $spos = $s.length;
	this.handlers = new Array();
	$s.pop();
}
utest.Notifier.__name__ = ["utest","Notifier"];
utest.Notifier.stop = function() {
	$s.push("utest.Notifier::stop");
	var $spos = $s.length;
	throw utest._Dispatcher.EventException.StopPropagation;
	$s.pop();
}
utest.Notifier.prototype.handlers = null;
utest.Notifier.prototype.add = function(h) {
	$s.push("utest.Notifier::add");
	var $spos = $s.length;
	this.handlers.push(h);
	$s.pop();
	return h;
	$s.pop();
}
utest.Notifier.prototype.remove = function(h) {
	$s.push("utest.Notifier::remove");
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
utest.Notifier.prototype.clear = function() {
	$s.push("utest.Notifier::clear");
	var $spos = $s.length;
	this.handlers = new Array();
	$s.pop();
}
utest.Notifier.prototype.dispatch = function() {
	$s.push("utest.Notifier::dispatch");
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
		if( js.Boot.__instanceof(exc,utest._Dispatcher.EventException) ) {
			$e = [];
			while($s.length >= $spos) $e.unshift($s.pop());
			$s.push($e[0]);
			$s.pop();
			return false;
		} else throw(exc);
	}
	$s.pop();
}
utest.Notifier.prototype.has = function() {
	$s.push("utest.Notifier::has");
	var $spos = $s.length;
	var $tmp = this.handlers.length > 0;
	$s.pop();
	return $tmp;
	$s.pop();
}
utest.Notifier.prototype.__class__ = utest.Notifier;
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
rg.view.svg.widget.BarEffect = { __ename__ : ["rg","view","svg","widget","BarEffect"], __constructs__ : ["NoEffect","Gradient"] }
rg.view.svg.widget.BarEffect.NoEffect = ["NoEffect",0];
rg.view.svg.widget.BarEffect.NoEffect.toString = $estr;
rg.view.svg.widget.BarEffect.NoEffect.__enum__ = rg.view.svg.widget.BarEffect;
rg.view.svg.widget.BarEffect.Gradient = function(lightness) { var $x = ["Gradient",1,lightness]; $x.__enum__ = rg.view.svg.widget.BarEffect; $x.toString = $estr; return $x; }
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
haxe.Timer = function(time_ms) {
	if( time_ms === $_ ) return;
	$s.push("haxe.Timer::new");
	var $spos = $s.length;
	var arr = haxe_timers;
	this.id = arr.length;
	arr[this.id] = this;
	this.timerId = window.setInterval("haxe_timers[" + this.id + "].run();",time_ms);
	$s.pop();
}
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.delay = function(f,time_ms) {
	$s.push("haxe.Timer::delay");
	var $spos = $s.length;
	var t = new haxe.Timer(time_ms);
	t.run = function() {
		$s.push("haxe.Timer::delay@79");
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
	var arr = haxe_timers;
	arr[this.id] = null;
	if(this.id > 100 && this.id == arr.length - 1) {
		var p = this.id - 1;
		while(p >= 0 && arr[p] == null) p--;
		arr = arr.slice(0,p + 1);
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
rg.view.svg.widget.LineEffects = function() { }
rg.view.svg.widget.LineEffects.__name__ = ["rg","view","svg","widget","LineEffects"];
rg.view.svg.widget.LineEffects.parse = function(s) {
	$s.push("rg.view.svg.widget.LineEffects::parse");
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
		var $tmp = rg.view.svg.widget.LineEffect.DropShadow(offsetx,offsety,levels);
		$s.pop();
		return $tmp;
	case "gradient":
		var lightness = 0.75, levels = 2, parameters = parts.pop();
		if(null != parameters) {
			lightness = Std.parseFloat(parameters.split(",").shift());
			var nlevels = parameters.split(",").pop();
			if(null != nlevels) levels = Std.parseInt(nlevels);
		}
		var $tmp = rg.view.svg.widget.LineEffect.Gradient(lightness,levels);
		$s.pop();
		return $tmp;
	default:
		var $tmp = rg.view.svg.widget.LineEffect.NoEffect;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
rg.view.svg.widget.LineEffects.prototype.__class__ = rg.view.svg.widget.LineEffects;
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
	rg.controller.Visualizations.layoutDefault.set("piechart","simple");
	rg.controller.Visualizations.layoutType.set("simple",rg.view.layout.SimpleLayout);
	rg.controller.Visualizations.layoutType.set("cartesian",rg.view.layout.CartesianLayout);
}
if(typeof(haxe_timers) == "undefined") haxe_timers = [];
Dates._reparse = new EReg("^\\d{4}-\\d\\d-\\d\\d(( |T)\\d\\d:\\d\\d(:\\d\\d(\\.\\d{1,3})?)?)?Z?$","");
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
utest.ui.text.HtmlReport.platform = "javascript";
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
rg.controller.App.lastid = 0;
rg.util.RGStrings.range = new EReg("(\\d+(?:\\.\\d+)?|\\.\\d+)?-(\\d+(?:\\.\\d+|\\.\\d+)?)?","");
thx.js.AccessAttribute.refloat = new EReg("(\\d+(?:\\.\\d+)?)","");
rg.util.Properties.EVENT_PATTERN = new EReg("^(\\.?[^.]+)","");
rg.util.Properties.TIME_TOKEN = "#time:";
DateTools.DAYS_OF_MONTH = [31,28,31,30,31,30,31,31,30,31,30,31];
rg.data.source.rgquery.QueryParser.TOKEN_SPLIT = new EReg("and","gi");
thx.js.AccessStyle.refloat = new EReg("(\\d+(?:\\.\\d+)?)","");
utest.TestHandler.POLLING_TIME = 10;
thx.js.BaseTransition._id = 0;
thx.js.BaseTransition._inheritid = 0;
rg.view.svg.widget.ChartLine.retransform = new EReg("translate\\(\\s*(\\d+(?:\\.\\d+)?)\\s*,\\s*(\\d+(?:\\.\\d+)?)\\s*\\)","");
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
rg.view.layout.CartesianLayout.ALT_RIGHT = 20;
rg.view.layout.CartesianLayout.ALT_LEFT = 20;
rg.view.layout.CartesianLayout.ALT_TOP = 8;
rg.view.layout.CartesianLayout.ALT_BOTTOM = 8;
rg.view.layout.CartesianLayout.REYAXIS = new EReg("^y(\\d+)$","");
rg.view.layout.CartesianLayout.REYINDEX = new EReg("^y(\\d+)","");
rg.view.layout.CartesianLayout.REYTITLE = new EReg("^y(\\d+)title$","");
rg.controller.Visualizations.html = ["pivottable","leaderboard"];
rg.controller.Visualizations.svg = ["linechart","piechart","barchart"];
rg.controller.Visualizations.visualizations = rg.controller.Visualizations.svg.concat(rg.controller.Visualizations.html);
rg.controller.Visualizations.layouts = ["simple","cartesian"];
thx.svg.LineInternals.arcOffset = -Math.PI / 2;
thx.svg.LineInternals.arcMax = 2 * Math.PI - 1e-6;
thx.svg.LineInternals._lineBasisBezier1 = [0,2 / 3,1 / 3,0];
thx.svg.LineInternals._lineBasisBezier2 = [0,1 / 3,2 / 3,0];
thx.svg.LineInternals._lineBasisBezier3 = [0,1 / 6,2 / 3,1 / 6];
rg.controller.factory.FactoryLayout.LIMIT_WIDTH = 10;
rg.controller.factory.FactoryLayout.LIMIT_HEIGHT = 10;
rg.controller.factory.FactoryLayout.DEFAULT_WIDTH = 400;
rg.controller.factory.FactoryLayout.DEFAULT_HEIGHT = 300;
Objects._reCheckKeyIsColor = new EReg("color\\b|\\bbackground\\b|\\bstroke\\b|\\bfill\\b","");
thx.color.Colors._reParse = new EReg("^\\s*(?:(hsl|rgb|rgba|cmyk)\\(([^)]+)\\))|(?:(?:0x|#)([a-f0-9]{3,6}))\\s*$","i");
thx.svg.Symbol.sqrt3 = Math.sqrt(3);
thx.svg.Symbol.tan30 = Math.tan(30 * Math.PI / 180);
TestAll.main()