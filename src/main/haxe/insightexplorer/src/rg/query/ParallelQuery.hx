/**
 * ...
 * @author Franco Ponticelli
 */

package rg.query;
import thx.error.Error;
using Arrays;

class ParallelQuery<TData> extends Query<Array<TData>> 
{
	var queries : Array<Query<TData>>;
	var _total : Int;
	var _count : Int;
	var _errorOccurred : Bool;
	var _dataChanged : Bool;
	
	public function new() 
	{
		super();
		queries = [];
	}
	
	override public function load()
	{
		_total = queries.length;
		_count = 0;
		_errorOccurred = false;
		_dataChanged = false;
		data = [];
		onLoading.dispatch();

	/*
//	public var onLoading(default, null) : Notifier;
	public var onComplete(default, null) : Notifier;
	public var onClose(default, null) : Notifier;
	public var onChange(default, null) : Dispatcher<TData>;
	public var onData(default, null) : Dispatcher<TData>;
	public var onError(default, null) : Dispatcher<String>;
	*/
	}
	
	public function addQuery(query : Query<TData>)
	{
		var i = queries.length;
		query.onData.add(callback(_onData, i));
		query.onChange.add(_onChange);
		query.onError.add(_onError);
		query.onClose.add(_onClose);
	}
	
	function _onData(pos : Int, data : TData)
	{
		if (_errorOccurred)
			return;
		untyped this.data[pos] = data;
		if (++_count == _total)
		{
			if (_dataChanged)
				onChange.dispatch(untyped this.data);
			onData.dispatch(untyped this.data);
			onComplete.dispatch();
		}
	}
	
	function _onChange(data : TData)
	{
		if (_errorOccurred)
			return;
		_dataChanged = true;
	}
	
	function _onError(data : String)
	{
		_errorOccurred = true;
		onError.dispatch(data);
		onComplete.dispatch();
	}
	
	function _onClose()
	{
		throw new Error("this query belongs to a parallel query and should not be closed directy; invoke the ParallelQuery.close() method instead");
	}
	
	override function close()
	{
		super.close();
		var me = this;
		queries.each(function(query, i) {
			query.onClose.remove(me._onClose);
			query.close();
		});
	}
}