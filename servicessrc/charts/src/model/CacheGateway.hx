package model;

using Arrays;
import mongo.MongoBinData;
import mongo.MongoCollection;

class CacheGateway
{
	var coll : MongoCollection;
	public function new(coll : MongoCollection)
	{
		this.coll = coll;
	}

	function key(id : String, format : String, params : Array<Dynamic>)
	{
		return Std.format("$id.$format?${params.map(function(d, _) return StringTools.urlEncode(Std.string(d))).join('&')}");
	}

	public function exists(id : String, format : String, params : Array<Dynamic>)
	{
		var uid = key(id, format, params);
		return null != coll.findOne({ uid : uid }, {});
	}

	public function insert(id : String, format : String, params : Array<Dynamic>, content : String, expiresOn : Float)
	{
		var uid = key(id, format, params);
		var ob = {
			uid       : uid,
			content   : MongoBinData.createByteArray(content),
			expiresOn : expiresOn
		};
		// store in mongo
		var r = coll.insert(ob);
		return ob;
	}

	public function load(id : String, format : String, params : Array<Dynamic>)
	{
		var uid = key(id, format, params);
		// load from mongo
		var o : {
			uid       : String,
			content   : mongo._Mongo._MongoBinData,
			expiresOn : Float
		} = coll.findOne({ uid : uid });
		if(null == o)
			return null;
		return o;
	}

	public function remove(id : String, format : String, params : Array<Dynamic>)
	{
		var uid = key(id, format, params);
		// load from mongo
		return coll.remove({ uid : uid });
	}

	public function expired()
	{
		var now = Date.now().getTime();
		return coll.find({ expiresOn : { "$lt" : now }}, { uid : true });
	}

	public function removeExpired()
	{
		var now = Date.now().getTime();
		return coll.remove({ expiresOn : { "$lt" : now }});
	}

	public function loadContent(id : String, format : String, params : Array<Dynamic>)
	{
		var uid = key(id, format, params);
		// load from mongo
		var o : {
			content : String
		} = coll.findOne({ uid : uid }, { content : true });
		if(null == o)
			return null;
		return o.content;
	}
}