package rg.layout;

using IntHashes;

class GraphCollection<TNodeData, TEdgeData, TData, TListItem : GraphElement<TData, TNodeData, TEdgeData>>
{
	var graph : Graph<TNodeData, TEdgeData>;
	var collection : IntHash<TListItem>;
	var nextid : Int;

	public var length(get_length, null) : Int;
	function new(graph : Graph<TNodeData, TEdgeData>)
	{
		this.graph = graph;
		collection = new IntHash();
	}

	public function get(id : Int) return collection.get(id)

	inline function get_length() return collection.count()

	function collectionAdd(item : TListItem)
	{
		collection.set(item.id, item);
	}

	function collectionRemove(item : TListItem)
	{
		collection.remove(item.id);
	}

	inline public function iterator() return collection.iterator()
}