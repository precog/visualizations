package util;

import ufront.web.HttpApplication;
import haxe.PosInfos;
import mongo.Mongo;
import mongo.MongoDB;
import mongo.MongoCollection;
import ufront.web.module.ITraceModule;

class TraceToMongo implements ITraceModule
{
	var coll(getColl, null) : MongoCollection;
	var dbname : String;
	var collname : String;
	var servername : String;
	public function new(dbname : String, collname : String, servername : String)
	{
		this.dbname = dbname;
		this.collname = collname;
		this.servername = servername;
	}
	public function init(application : HttpApplication)
	{

	}
	public function trace(msg : Dynamic, ?pos : PosInfos) : Void
	{
		coll.insert({
			msg : msg,
			pos : pos,
			time : Date.now().getTime(),
			server : servername
		});
	}
	public function dispose()
	{
		
	}
	function getColl()
	{
		if(null == coll)
		{
			var m = new Mongo(),
				db = m.selectDB(dbname);
			coll = db.selectCollection(collname);
		}
		return coll;
	}
}