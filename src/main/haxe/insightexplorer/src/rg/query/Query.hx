package rg.query;
import hxevents.Dispatcher;
import hxevents.Notifier;
import thx.error.AbstractMethod;
import thx.error.Error;
import thx.error.NullArgument;
import rg.util.Periodicity;
using Arrays;

/**
 * ...
 * @author Franco Ponticelli
 */
class Query<TService, TData>
{
	public var data(default, null) : TData;
	public var time(default, null) : TimeQuery;
	var _data : TService;
	
	public var onLoading(default, null) : Notifier;
	public var onComplete(default, null) : Notifier;
	public var onChange(default, null) : Dispatcher<TData>;
	public var onData(default, null) : Dispatcher<TData>;
	public var onError(default, null) : Dispatcher<String>;
	public var executor : IExecutor;
	
	public function new(executor : IExecutor) 
	{
		data = null;
		this.onLoading = new Notifier();
		this.onComplete = new Notifier();
		this.onChange = new Dispatcher();
		this.onData = new Dispatcher();
		this.onError = new Dispatcher();
		this.executor = executor;
		time = new TimeQuery();
	}
	
	public function close()
	{
		onLoading.clear();
		onError.clear();
		onData.clear();
		onChange.clear();
		onComplete.clear();
		time.close();
	}
	
	function executeLoad(success : TService -> Void, error : String -> Void)
	{
		throw new AbstractMethod();
	}
	
	public function load()
	{
		time.update();
		onLoading.dispatch();
		executeLoad(_success, _error);
	}
	
	public dynamic function transform(v : TService) : TData
	{
		return cast v;
	}
	
	function _success(v : TService)
	{
		if (!Dynamics.same(v, _data))
			onChange.dispatch(data = transform(_data = v));
		onData.dispatch(data);
		onComplete.dispatch();
	}
	
	function _error(v : String)
	{
		onError.dispatch(v);
		onComplete.dispatch();
	}
	
	static function normalizeName(s : String)
	{
		if (s == null)
			return null;
		if ('.' == s.substr(0, 1))
			return s.substr(1);
		else
			return s;
	}
}

class QueryPath<TService, TData> extends Query<TService, TData>
{
	public var path(default, setPath) : String;
		
	public function new(executor : IExecutor, path : String) 
	{
		super(executor);
		this.path = path;
	}
	
	function setPath(v : String)
	{
		NullArgument.throwIfNullOrEmpty(v);
		return this.path = v;
	}
}

class QueryEvent<TService, TData> extends QueryPath<TService, TData>
{
	public var event(default, setEvent) : String;
		
	public function new(executor : IExecutor, path : String, event : String) 
	{
		super(executor, path);
		this.event = event;
	}
	
	function setEvent(v : String)
	{
		v = Query.normalizeName(v);
		NullArgument.throwIfNull(v);
		return this.event = v;
	}
}

class QueryProperty<TService, TData> extends QueryEvent<TService, TData>
{
	public var property(default, setProperty) : String;
	
	public function new(executor : IExecutor, path : String, event : String, property : String) 
	{
		super(executor, path, event);
		this.property = property;
	}
	
	function setProperty(v : String)
	{
		v = Query.normalizeName(v);
		NullArgument.throwIfNull(v);
		return this.property = v;
	}
}

class QueryValue<TValue, TService, TData> extends QueryProperty<TService, TData>
{
	public var value(default, setValue) : TValue;
	
	public function new(executor : IExecutor, path : String, event : String, property : String, value : TValue) 
	{
		super(executor, path, event, property);
		this.value = value;
	}
	
	function setValue(v : TValue)
	{
		NullArgument.throwIfNull(v);
		return this.value = v;
	}
}

class QueryValues<TValue, TService, TData> extends QueryProperty<TService, TData>
{
	public var values(default, setValues) : Array<TValue>;
	public var others : Bool;
	public var othersLabel : String;
	
	public dynamic function formatter(v : TValue, i : Int) return "" + v
	
	public function new(executor : IExecutor, path : String, event : String, property : String, values : Array<TValue>, others = false, otherslabel = "others") 
	{
		super(executor, path, event, property);
		this.values = values;
		this.others = others;
		this.othersLabel = otherslabel;
	}
	
	public function formattedValues()
	{
		var v = values.map(formatter);
		if (others)
			v.push(othersLabel);
		return v;
	}
	
	function setValues(v : Array<TValue>)
	{
		NullArgument.throwIfNull(v);
		return this.values = v;
	}
}

class QueryProperties<TService, TData> extends QueryEvent<TService, TData>
{
	public var properties(default, setProperties) : Array<{ name : String, top : Bool, limit : Int}>;
	public function new(executor : IExecutor, path : String, event : String, properties : Array<{ name : String, top : Bool, limit : Int}>) 
	{
		super(executor, path, event);
		this.properties = properties;
	}
	
	function setProperties(v : Array<{ name : String, top : Bool, limit : Int}>)
	{
		NullArgument.throwIfNullOrEmpty(v);
		return this.properties = v;
	}
	
}
/*
class QueryEventPeriodicity<TService, TData> extends QueryEvent<TService, TData>
{
	public var time(default, null) : TimeQuery;
	
	public function new(executor : IExecutor, path : String, event : String) 
	{
		super(executor, path, event);
		time = new TimeQuery();
	}
	
	override function close()
	{
		super.close();
		time.close();
	}
	
	override function load()
	{
		time.update();
		super.load();
	}
}
*/
/*
class QueryPropertiesPeriodicity<TService, TData> extends QueryProperties<TService, TData>
{
	public var time(default, null) : TimeQuery;
	
	public function new(executor : IExecutor, path : String, event : String, properties : Array<{ name : String, top : Bool, limit : Int}>) 
	{
		super(executor, path, event, properties);
		time = new TimeQuery();
	}
	
	override function close()
	{
		super.close();
		time.close();
	}
	
	override function load()
	{
		time.update();
		super.load();
	}
}

class QueryPropertyPeridocity<TService, TData> extends QueryProperty<TService, TData>
{
	public var time(default, null) : TimeQuery;
	
	public function new(executor : IExecutor, path : String, event : String, property : String) 
	{
		super(executor, path, event, property);
		time = new TimeQuery();
	}
	
	override function close()
	{
		super.close();
		time.close();
	}
	
	override function load()
	{
		time.update();
		super.load();
	}
}

class QueryValuePeriodicity<TValue, TService, TData> extends QueryValue<TValue, TService, TData>
{
	public var time(default, null) : TimeQuery;
	
	public function new(executor : IExecutor, path : String, event : String, property : String, value : TValue) 
	{
		super(executor, path, event, property, value);
		time = new TimeQuery();
	}

	override function close()
	{
		super.close();
		time.close();
	}
	
	override function load()
	{
		time.update();
		super.load();
	}
}

class QueryValuesPeridocity<TValue, TService, TData> extends QueryValues<TValue, TService, TData>
{
	public var time(default, null) : TimeQuery;
	
	public function new(executor : IExecutor, path : String, event : String, property : String, values : Array<TValue>, others = false, otherslabel = "others") 
	{
		super(executor, path, event, property, values, others, otherslabel);
		time = new TimeQuery();
	}

	override function close()
	{
		super.close();
		time.close();
	}
	
	override function load()
	{
		time.update();
		super.load();
	}
}
*/
class QuerySearch<TValue, TService, TData> extends QueryEvent<TService, TData>
{
	public var where(default, setWhere) : Array<{ property : String, value : TValue}>;
	
	public function new(executor : IExecutor, path : String, event : String, where : Array<{ property : String, value : TValue}>) 
	{
		super(executor, path, event);
		this.where = where;
	}
	
	function setWhere(v : Array<{ property : String, value : TValue}>)
	{
		NullArgument.throwIfNullOrEmpty(v);
		return this.where = v;
	}
}
/*
class QuerySearchPeridocity<TValue, TService, TData> extends QuerySearch<TValue, TService, TData>
{
	public var time(default, null) : TimeQuery;

	public function new(executor : IExecutor, path : String, event : String, where : Array<{ property : String, value : TValue}>) 
	{
		super(executor, path, event, where);
		time = new TimeQuery();
	}

	override function close()
	{
		super.close();
		time.close();
	}
	
	override function load()
	{
		time.update();
		super.load();
	}
}
*/