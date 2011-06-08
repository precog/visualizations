package rg.query.mock;

/**
 * ...
 * @author Franco Ponticelli
 */

class DefaultStructure 
{
	static var paths : Array<{ path : String, sub : Array<String>, events : Dynamic<Dynamic<Dynamic<Int>>> }>= cast [ 
		{ 
			path : "/ad",
			sub : ["nike"],
			events : 
			{
			
			}
		}, {
			path : "/ad/nike",
			sub : [],
			events : 
			{
				impression : 
				{
					target : 
					{
						iphone  : 50,
						ipad    : 35,
						android : 40,
						symbian : 5,
						pc      : 70,
						mac     : 60
					}
				}
			}
		}
	];
	public static function getStructure() : Hash<{ path : String, sub : Array<String>, events : Hash<Hash<Hash<Int>>> }>
	{
		var hash = new Hash();
		for (path in paths)
		{
			var ob = {
				path : path.path,
				sub : path.sub,
				events : new Hash()
			};
			for (nevent in Reflect.fields(path.events))
			{
				var event = Reflect.field(path.events, nevent);
				var hevent = new Hash();
				
				for (nproperty in Reflect.fields(event))
				{
					var property = Reflect.field(event, nproperty),
						hproperty = new Hash();
					
					for (nvalue in Reflect.fields(property))
					{
						var value : Int = Reflect.field(property, nvalue);
						hproperty.set(nvalue, value);
					}
					
					hevent.set(nproperty, hproperty);
				}
				ob.events.set(nevent, hevent);
			}
			hash.set(path.path, ob);
		}
		return hash;
	}
}