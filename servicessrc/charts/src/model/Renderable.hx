package model;

class Renderable
{
	static inline var SEED = "][4p5.,vsd";
	public var html(default, null) : String;
	public var config(default, null) : ConfigRendering;
	public var createdOn(default, null) : Date;
	public var lastUsage(default, null) : Date;
	public var usages(default, null) : Int;
	public function new(html : String, config : ConfigRendering, ?createdOn : Date, ?lastUsage : Date, ?usages : Int)
	{
		this.html      = html;
		this.config    = config;
		this.createdOn = null == createdOn ? Date.now() : createdOn;
		this.lastUsage = null == lastUsage ? Date.now() : lastUsage;
		this.usages    = null == usages ? 0 : usages;
	}

	public var uid(getUid, null) : String;
	function getUid()
	{
		if(null == uid)
		{
			var s = html + "::" + haxe.Serializer.run(config);
			s = SEED + (~/\s+/mg).replace(s, '');
			uid = hash(s);
		}
		return uid;
	}

	static function hash(s : String) : String
	{
		s = untyped __call__('md5', s);
		s = untyped __call__('base_convert', s, 16, 36);
		return s.substr(0, 12);
	}
}