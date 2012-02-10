package model;

import model.Renderable;
import mongo.MongoCollection;

class RenderableGateway
{
	var coll : MongoCollection;
	public function new(coll : MongoCollection)
	{
		this.coll = coll;
	}

	public function exists(uid : String)
	{
		return null != coll.findOne({ uid : uid }, {});
	}

	public function insert(r : Renderable)
	{
		var ob = {
			uid       : r.uid,
			config    : serialize(r.config),
			createdOn : r.createdOn.getTime(),
			html      : r.html,
			lastUsage : r.lastUsage.getTime(),
			usages    : r.usages
		};
		// store in mongo
		coll.insert(ob);
	}

	public function load(uid : String)
	{
		// load from mongo
		var o : {
			uid       : String,
			html      : String,
			config    : String,
			createdOn : Float,
			lastUsage : Float,
			usages    : Int
		} = coll.findOne({ uid : uid });
		if(null == o)
			return null;
		return new model.Renderable(
			o.html,
			unserialize(o.config),
			Date.fromTime(o.createdOn),
			Date.fromTime(o.lastUsage),
			o.usages
		);
	}

	public function topByUsage(limit : Int)
	{
		return coll
			.find({})
//			.sort({ usages : -1 })
			.limit(limit)
			.toArray();
	}

	public function use(uid : String)
	{
		// mongo update query
		var data : {
			lastUsage : Float,
			usages : Int
		} = coll.findOne({ uid : uid });
		data.lastUsage = Date.now().getTime();
		data.usages++;
		coll.update({ uid : uid }, { '$set' : data });
		return data;
	}

	static function serialize(o : Dynamic) : String
	{
		return php.Lib.serialize(o);
	}

	static function unserialize(s : String) : Dynamic
	{
		return php.Lib.unserialize(s);
	}
}