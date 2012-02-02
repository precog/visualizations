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

	override public function execute(handler : Array<Dynamic> -> Void)
	{
		executeHandler(this, handler);
	}

	public static function executeHandler(instance : BaseQuery<Dynamic>, handler : Array<Dynamic> -> Void)
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
			current._async(results, execute);
		}
		execute([]);
	}
}

@:keep
class BaseQuery<This>
{
	var _first : BaseQuery<This>;
	var _next : BaseQuery<This>;
	var _async : Async;
	var _store : Hash<Array<Dynamic>>;

	public function new(async : Async, first : BaseQuery<This>)
	{
		this._async = async;
		this._first = first;
		this._store = new Hash();
	}

	public function load(handler : (Array<Dynamic> -> Void) -> Void)
	{
		return asyncAll(function(_, h) handler(h));
	}

	public function data(values : Array<Dynamic>)
	{
		return asyncAll(function(_, h) h(values));
	}

	public function cross(values : Array<Dynamic>)
	{
		return transform(Transformers.cross(values));
	}

	public function map(handler : Dynamic -> ?Int -> Dynamic)
	{
		return transform(Transformers.map(handler));
	}

	public function mapValue(name : String, f : Dynamic -> ?Int -> Dynamic)
	{
		var fun = function(d, i) return f(Reflect.field(d, name), i);
		return transform(Transformers.setField(name, fun));
	}

	public function audit(f : Array<Dynamic> -> Void)
	{
		return transform(function(d : Array<Dynamic>) : Array<Dynamic> {
			f(d);
			return d;
		});
	}

	public function renameFields(o : Dynamic)
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
		return asyncAll(asyncTransform(t));
	}

	public function asyncAll(d : Async)
	{
		var query = _createQuery(d, this._first);
		this._next = query;
		return _this(query);
	}

	public function asyncEach(f : Dynamic -> (Array<Dynamic> -> Void) -> Void)
	{
		return asyncAll(function(data : Array<Dynamic>, handler : Array<Dynamic> -> Void) {
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

	public function addField(name : String, f : Dynamic)
	{
		return transform(Transformers.setField(name, f));
	}

	public function addIndex(?name : String)
	{
		if(null == name) name = "index";
		return transform(Transformers.setField(name, function(_, i) return i));
	}

	public function filter(f : Dynamic -> Bool)
	{
		return transform(Transformers.filter(f));
	}

	public function filterValues(f : Dynamic)
	{
		return transform(Transformers.filterValues(f));
	}


	public function filterValue(name : String, f : Dynamic)
	{
		return transform(Transformers.filterValue(name, f));
	}

	public function sort(f : Dynamic -> Dynamic -> Int)
	{
		return transform(Transformers.sort(f));
	}

	public function sortField(field : String, ?reverse : Bool)
	{
		return sortFields([field], [reverse]);
	}

	public function sortFields(fields : Array<String>, ?reverse : Dynamic)
	{
		var rarr : Array<Bool>;
		if(null == reverse)
			rarr = Ints.range(0, fields.length).map(function(_, _) return false);
		else if(!Std.is(reverse, Array))
			rarr = Ints.range(0, fields.length).map(function(_, _) return reverse);
		else
			rarr = reverse;
		while(rarr.length < fields.length)
			rarr.push(false);
		return sort(function(a, b) {
			var r, field;
			for(i in 0...fields.length)
			{
				field = fields[i];
				r = (rarr[i] ? -1 : 1) * Dynamics.compare(Reflect.field(a, field), Reflect.field(b, field));
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

	public function reverse()
	{
		return transform(Transformers.reverse);
	}

	public function unique(?f : Dynamic -> Dynamic -> Bool)
	{
		if(null == f)
			f = Dynamics.same;
		return transform(Transformers.uniquef(f));
	}

	public function accumulate(groupby : String, on : String, forproperty : String, atproperty : String)
	{
		var map = new Hash();
		var q = sortFields([groupby, on]);
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

	public function store(?name : String)
	{
		if(null == name)
			name = "";
		return transform(function(arr : Array<Dynamic>) {
			_first._store.set(name, arr.copy());
			return arr;
		});
	}

	public function retrieve(?name : String)
	{
		if(null == name)
			name = "";
		return transform(function(arr : Array<Dynamic>) {
			return arr.concat(_first._store.get(name));
		});
	}

	public function clear()
	{
		return data([]);
	}

	public function execute(handler : Array<Dynamic> -> Void)
	{
		_first.execute(handler);
	}

	inline function _query(t : This) : BaseQuery<This> return cast t

	function _createQuery(async : Async, first : BaseQuery<This>) : BaseQuery<This>
	{
		return new BaseQuery(async, first);
	}

	static function asyncTransform(t : Transformer) : Async
	{
		return function(data : Array<Dynamic>, handler : Array<Dynamic> -> Void)
		{
			handler(t(data));
		}
	}

	public function toString() return Type.getClassName(Type.getClass(this)).split(".").pop() + Std.format(" [next: ${null != _next}, async: ${null != _async}]")

	inline function _this(q) : This return cast q
}

typedef Transformer = Array<Dynamic> -> Array<Dynamic>;

typedef Async = Array<Dynamic> -> (Array<Dynamic> -> Void) -> Void;