package rg.query.mock;

/**
 * ...
 * @author Franco Ponticelli
 */

class DefaultStructure 
{
	static var paths : Array<{ path : String, sub : Array<String>, events : Dynamic<Dynamic<Dynamic<Int>>> }> = cast 
	[ 
		{ 
			path : "/prod",
			sub : ["nike", "the_north_pole"],
			events : 
			{
				click : 
				{
					target : 
					{
						iphone  : 100,
						ipad    : 70,
						android : 80,
						symbian : 10,
						pc      : 140,
						mac     : 120
					}
				},
				impression : 
				{
					target : 
					{
						iphone  : 2000,
						ipad    : 1100,
						android : 800,
						symbian : 140,
						pc      : 1400,
						mac     : 1600
					}
				},
			}
		}, {
			path : "/prod/nike",
			sub : [],
			events : 
			{
				click : 
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
				},
				impression : 
				{
					target : 
					{
						iphone  : 1000,
						ipad    : 550,
						android : 400,
						symbian : 70,
						pc      : 700,
						mac     : 800
					}
				},
			}
		}, {
			path : "/prod/the_north_pole",
			sub : [],
			events : 
			{
				click : 
				{
					target : 
					{
						iphone  : 40,
						ipad    : 30,
						android : 30,
						symbian : 8,
						pc      : 50,
						mac     : 40
					}
				},
				impression : 
				{
					target : 
					{
						iphone  : 1200,
						ipad    : 350,
						android : 200,
						symbian : 70,
						pc      : 500,
						mac     : 400
					}
				},
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