package rg.query;

using Arrays;

@:keep
class Query extends BaseQuery<Query>
{
	public static function create()
	{
		var start = new Query(),
			query = start._createQuery(function(data : Array<Dynamic>, handler : Array<Dynamic> -> Void) { handler(data); }, start);
		start._next = query;
		return query;
	}

	function new()
	{
		super(null, this);
	}

	override public function load(handler : Array<Dynamic> -> Void)
	{
		loadHandler(this, handler);
	}

	public static function loadHandler(instance : BaseQuery<Dynamic>, handler : Array<Dynamic> -> Void)
	{
		var current : BaseQuery<Dynamic> = instance._next;
		function execute(results : Array<Dynamic>)
		{
			if(null == current._next)
			{
				handler(results);
				return;
			}
			current = current._next;
			current._delegate(results, execute);
		}
		execute([{}]);
	}
}

@:keep
class BaseQuery<This>
{
	var _first : BaseQuery<This>;
	var _next : BaseQuery<This>;
	var _delegate : Delegate;
	var _collected : Array<Array<Dynamic>>;

	public function new(delegate : Delegate, first : BaseQuery<This>)
	{
		this._delegate = delegate;
		this._first = first;
		this._collected = [];
	}

	public function data(handler : (Array<Dynamic> -> Void) -> Void)
	{
		return delegate(function(_, h) handler(h));
	}

	public function cross(values : Array<Dynamic>)
	{
		return transform(Transformers.cross(values));
	}

	public function map(handler : Dynamic -> ?Int -> Dynamic)
	{
		return transform(Transformers.map(handler));
	}

	public function log(?f : Array<Dynamic> -> Void)
	{
		var api : { function log(v : Dynamic) : Void; } = untyped __js__("console");
		if(null == f)
			f = api.log;
		if(null == f)
			return _this(this);
		return transform(function(d : Array<Dynamic>) : Array<Dynamic> {
			f(d);
			return d;
		});
	}

	public function logFirst(?f : Dynamic -> Void)
	{
		var api : { function log(v : Dynamic) : Void; } = untyped __js__("console");
		if(null == f)
			f = api.log;
		if(null == f)
			return _this(this);
		return transform(function(d : Array<Dynamic>) : Array<Dynamic> {
			f(d[0]);
			return d;
		});
	}

	public function mapFields(o : Dynamic)
	{
		var pairs = Reflect.fields(o).map(function(d, _) {
			return {
				src : d,
				dst : Reflect.field(o, d)
			};
		});
		return map(function(src : Dynamic, ?_) : Dynamic {
			var out = {};
			for(pair in pairs)
			{
				Reflect.setField(out, pair.dst, Reflect.field(src, pair.src));
			}
			return out;
		});
	}

	public function transform(t : Transformer)
	{
		return delegate(delegateTransform(t));
	}

	public function delegate(d : Delegate)
	{
		var query = _createQuery(d, this._first);
		this._next = query;
		return _this(query);
	}

	public function each(f : Dynamic -> (Array<Dynamic> -> Void) -> Void)
	{
		return delegate(function(data : Array<Dynamic>, handler : Array<Dynamic> -> Void) {
			var tot = data.length,
				pos = 0,
				results = [];
			function complete(i : Int, r : Array<Dynamic>)
			{
				// preserve the order of the operations
				results[i] = r;
				if(++pos == tot)
				{
					handler(Arrays.flatten(results));
				}
			}
			for(i in 0...tot)
			{
				f(data[i], callback(complete, i));
			}
		});
	}

	public function filter(f : Dynamic -> Bool)
	{
		return transform(Transformers.filter(f));
	}

	public function filterByFields(f : Dynamic)
	{
		return transform(Transformers.filterByFields(f));
	}

	public function sort(f : Dynamic -> Dynamic -> Int)
	{
		return transform(Transformers.sort(f));
	}

	public function sortByField(field : String, ?reverse : Bool)
	{
		return sortByFields([field], reverse);
	}

	public function sortByFields(fields : Array<String>, ?reverse : Bool)
	{
		reverse = null == reverse ? false : reverse;
		return sort(function(a, b) {
			var r;
			for(field in fields)
			{
				r = (reverse ? -1 : 1) * Dynamics.compare(Reflect.field(a, field), Reflect.field(b, field));
				if(r != 0)
					return r;
			}
			return 0;
		});
	}

	public function limit(?offset : Int, count : Int)
	{
		if(null == count)
		{
			count = offset;
			offset = 0;
		}
		return transform(Transformers.limit(offset, count));
	}

	public function append(?useAseSource : Bool)
	{
		if(null == useAseSource)
			useAseSource = false;
		return transform(function(arr : Array<Dynamic>) {
			_first._collected.push(arr);
			if(useAseSource)
				return arr;
			else
				return [{}];
		});
	}

	public function collect()
	{
		return transform(function(arr : Array<Dynamic>) {
			var collected = _first._collected.pop();
			return collected.concat(arr);
		});
	}

	public function reverse()
	{
		return transform(Transformers.reverse);
	}

	public function accumulate(groupby : String, on : String, forproperty : String, atproperty : String)
	{
		var map = new Hash();
		var q = sortByFields([groupby, on]);
		return _query(q).transform(function(data : Array<Dynamic>){
			var v : Float, f : String;
			data.each(function(dp, _) {
				v = map.get(f = "" + Reflect.field(dp, on));
				if(null == v) v = 0.0;
				Reflect.setField(dp, atproperty, v);
				map.set(f, v + Reflect.field(dp, forproperty));
			});
			return data;
		});
	}

	public function load(handler : Array<Dynamic> -> Void)
	{
		_first.load(handler);
	}

	inline function _query(t : This) : BaseQuery<This> return cast t

	function _createQuery(delegate : Delegate, first : BaseQuery<This>) : BaseQuery<This>
	{
		return new BaseQuery(delegate, first);
	}

	static function delegateTransform(t : Transformer) : Delegate
	{
		return function(data : Array<Dynamic>, handler : Array<Dynamic> -> Void)
		{
			handler(t(data));
		}
	}

	public function toString() return Type.getClassName(Type.getClass(this)).split(".").pop() + Std.format(" [next: ${null != _next}, delegate: ${null != _delegate}]")

	inline function _this(q) : This return cast q
}

typedef Transformer = Array<Dynamic> -> Array<Dynamic>;

typedef Delegate = Array<Dynamic> -> (Array<Dynamic> -> Void) -> Void;