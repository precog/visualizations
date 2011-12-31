/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.source;
import hxevents.Dispatcher;
import rg.data.source.rgquery.IExecutorReportGrid;
/*
import rg.util.Periodicity;
import rg.util.Properties;
import rg.data.IDataSource;
import rg.data.source.rgquery.QueryAst;
import thx.error.Error;
import rg.data.source.ITransform;
*/
using Arrays;

class DataSourceReportGridGraph implements IDataSource
{
	var executor : IExecutorReportGrid;

	public var path(default, null) : String;
	public var event(default, null) : String;
	public var idproperty(default, null) : String;
	public var parentproperty(default, null) : String;
	public var timeStart : Null<Float>;
	public var timeEnd : Null<Float>;
	public var whereConditions : Null<Array<{ property : String, value : Dynamic }>>;

	public var onLoad(default, null) : Dispatcher<Array<DataPoint>>;

	public function new(executor : IExecutorReportGrid, path : String, event : String, idproperty : String, parentproperty : String, whereConditions : Null<Array<{ property : String, value : Dynamic }>>, start : Null<Float>, end : Null<Float>)
	{
		this.path = path;
		this.executor = executor;
		this.event = np(event);
		this.idproperty = np(idproperty);
		this.parentproperty = np(parentproperty);
		this.whereConditions = null == whereConditions ? [] : whereConditions;
		this.timeStart = start;
		this.timeEnd = end;
		this.onLoad = new Dispatcher();
	}

	function basicOptions() : Dynamic
	{
		var opt : Dynamic = { };
		if (null != timeStart)
			Reflect.setField(opt, "start", timeStart);
		if (null != timeEnd)
			Reflect.setField(opt, "end", timeEnd);
		opt.periodicity = "eternity";
		return opt;
	}

	static function np(v : String) return StringTools.startsWith(v, ".") ? v : "." + v

	static function val(v : String) : Dynamic
	{
		if(v == "null")
			return null;
		if(v.substr(0, 1) == '"')
			return v.substr(1, v.length - 2);
		return Std.parseFloat(v);
	}

	public function load()
	{
		var properties = [{ property : event + idproperty }, { property : event + parentproperty },];
		for(item in whereConditions)
		{
			properties.push({ property : event + np(item.property) });
		}
		executor.intersect(path, { properties : properties }, function(r : Dynamic) {
			var map = new Hash(),
				queue = 0;
			function dequeue() { 
				if(--queue > 0)
					return;
				var result = [];
				for(id in map.keys())
					result.push(map.get(id));
				onLoad.dispatch(result);
			}
			function enqueue() {
				queue++;
			}

			for(key in Reflect.fields(r))
			{
				var id = val(key);
				if(null == id)
					continue;
				var item = {
					id : id,
					count : 0,
					parents : {}
				};
				map.set("" + id, item);
				var relations : Dynamic = Reflect.field(r, key),
					where : Dynamic = {};
				Reflect.setField(where, event + idproperty, id);
				for(condition in whereConditions)
				{
					Reflect.setField(where, event + np(condition.property), condition.value);
				}
	//			trace(where);
				enqueue();
				executor.searchCount(path, { where : where }, callback(function(id : String, count : Int) {
					map.get(id).count = count;
					dequeue();
				}, id));
				for(kparent in Reflect.fields(relations))
				{
					if(kparent == "null")
						continue;
					var parent = val(kparent),
						cur = Reflect.field(relations, kparent);
//					trace(cur);
					for(item in whereConditions)
					{
						if(Std.is(item.value, String))
							cur = Reflect.field(cur, '"'+item.value+'"');
						else
							cur = Reflect.field(cur, item.value);
					}
					if(null != cur)
						Reflect.setField(map.get(""+id).parents, parent, cur);
				}
			}
		});
	}
}