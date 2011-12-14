package rg.graph;

using IntHashes;

class GraphCollection<TNodeData, TEdgeData, TData, TListItem : GraphElement<TData, TNodeData, TEdgeData>>
{
	var graph : Graph<TNodeData, TEdgeData>;
	var collection : IntHash<TListItem>;
	var nextid : Int;
	var idf : TData -> String;
	var map : Hash<TListItem>;

	public var length(get_length, null) : Int;
	function new(graph : Graph<TNodeData, TEdgeData>, ?idf : TData -> String)
	{
		nextid = 0;
		this.graph = graph;
		this.idf = idf;
		collection = new IntHash();
		map = new Hash();
		if(null != idf)
		{
			var add = collectionAdd;
			collectionAdd = function(item : TListItem)
			{
				map.set(idf(item.data), item);
				add(item);
			}
			var rem = collectionRemove;
			collectionRemove = function(item : TListItem)
			{
				map.remove(idf(item.data));
				rem(item);
			}
		}
	}

	public function getById(id : String) : TListItem
	{
		return map.get(id);
	}

	public function get(id : Int) : TListItem return collection.get(id)

	public function has(item : TListItem) return item.graph == graph && collection.exists(item.id)

	inline function get_length() : Int return collection.count()

	dynamic function collectionAdd(item : TListItem)
	{
		collection.set(item.id, item);
	}

	dynamic function collectionRemove(item : TListItem)
	{
		collection.remove(item.id);
	}

	inline public function iterator() return collection.iterator()

	public function toString() return Iterables.map(collection, function(item : TListItem, _) : String return Std.string(item)).join(", ")
}