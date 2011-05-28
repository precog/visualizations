import haxe.Timer;
import rg.Viz;
import rg.js.ReportGrid;
import thx.js.Dom;
/**
 * ...
 * @author Franco Ponticelli
 */

class Main 
{
	// TEST TOKEN: A3BC1539-E8A9-4207-BB41-3036EC2C6E6D
	// C49A058D-459D-415D-B41D-5805357FF874
	static function main() 
	{
		/*
		ReportGrid.tokens();
		ReportGrid.newToken({
			path: "/",
			permissions: {
				read: true,
				write: true,
				share: true
			},
			expires: DateTools.delta(Date.now(), DateTools.days(365)).getTime(),
			limits: {
				order: 3,
				limit: 3,
				depth: 3
			}
		});
		*/
//		ReportGrid.tokens();
//		ReportGrid.children("/", {} );
/*
		var where = { };
		Reflect.setField(where, ".tweet.startup", "@ReportGrid");
		rg.js.ReportGrid.searchSeries("/tweets", { periodicity: "eternity", where: where}, function(v) trace(v) );
		rg.js.ReportGrid.propertyCount("/tweets", { property: ".tweet.startup" }, function(v) trace("propertyCount tweets: " + v) );
		rg.js.ReportGrid.propertyValueCount("/tweets", { property: ".tweet.startup", value : "@ReportGrid" }, function(v) trace("propertyValueCount tweets: " + v) );
		rg.js.ReportGrid.propertyCount("/pivots", { property: ".click.gender" }, function(v) trace("propertyCount pivot: " + v) );
		rg.js.ReportGrid.propertyValueCount("/pivots", { property: ".click.gender", value : "male" }, function(v) trace("propertyValueCount pivot: " + v) );
*/
/*
		createPivotRandomData();

		rg.Viz.pivot("#pivot", {
			query : {
				path : PATH_PIVOTS,
				event : "click"
			},
//			properties : ["gender", "location"]
		});
*/
/*
		createTweetRandomData();
		
		var tops = ["@ReportGrid", "@One", "@Two", "@Three", "@Four", "@Five", "@Six", "@Seven", "@Eight", "@Nine"];
		var gluecons = [ "@ReportGrid", "@One", "@Two", "@Three", "@Four", "@Five", "@Six", "@Seven", "@Eight", "@Nine", "@Ten", "@Eleven", "@Twelve", "@Thirteen", "@Fourteen" ];
*/
/*
		// chart
		rg.Viz.stream("#stream", { 
			width: 940,
			height : 320,
			query : { path : PATH_TWEETS, event : "tweet", property : "startup", values : tops } 
		});
*/
/*
		rg.Viz.line("#line", { 
			width: 940,
			height : 320,
			lineinterpolation : "cardinal",
			query : { path : PATH_TWEETS, event : "tweet", property : "startup", values : gluecons } 
		});
*/
/*
		rg.Viz.pie("#pie", { 
			width: 320,
			height : 320,
			query : { path : PATH_TWEETS, event : "tweet", property : "startup", values : gluecons } 
		});
*/
	}
	
	static var MAX_PER_CREATION = 50;
	static var MIN_PER_CREATION = 10;
	static var TIME_SPAN = 1000 * 10;
	static var PATH_TWEETS = "/tweets";
	static var PATH_PIVOTS = "/pivots";
	
	static function createTimedData(creator : Void -> Void)
	{
		var timer = new Timer(TIME_SPAN);
		timer.run = creator;
		creator();
	}
	
	public static function createPivotRandomData()
	{
		createTimedData(createPivotData);
	}
	
	static function createPivotData()
	{
		var qt = Std.random(MAX_PER_CREATION - MIN_PER_CREATION) + MIN_PER_CREATION;
		var now = Date.now().getTime();
		for (i in 0...qt)
		{
			ReportGrid.track(PATH_PIVOTS, {
				count : 1,
				timestamp : now - Std.random(TIME_SPAN),
				events : {
					click : { 
						location : Arrays.random(locations),
						gender : Arrays.random(genders),
						age : Arrays.random(ageranges)
					}
				}
			});
		}
	}
	
	public static function createTweetRandomData()
	{
		createTimedData(createTweetData);
	}
	
	static function createTweetData()
	{
		var qt = Std.random(MAX_PER_CREATION - MIN_PER_CREATION) + MIN_PER_CREATION;
		var now = Date.now().getTime();
		for (i in 0...qt)
		{
			ReportGrid.track(PATH_TWEETS, {
				count : 1,
				timestamp : now - Std.random(TIME_SPAN),
				events : {
					tweet : { startup : Arrays.random(gluecons) }
				}
			});
		}
	}
	
	static var locations = [
		"El Paso",
		"Denver",
		"Denver",
		"Arapahoe",
		"Jefferson",
		"Adams",
		"Larimer",
		"Boulder",
		"Boulder",
		"Boulder",
		"Douglas",
		"Weld",
		"Pueblo",
		"Mesa",
		"Garfield"
	];
	
	static var genders = [
		"male",
		"male",
		"female",
		"female",
		"female"
	];
	
	static var ageranges = [
		"13-19",
		"20-24",
		"25-34",
		"25-34",
		"25-34",
		"35-50",
		"35-50",
		"over fifty"
	];
	
	static var gluecons = [
		"@ReportGrid",
		"@ReportGrid",
		"@ReportGrid",
		"@ReportGrid",
		"@axiomatics",
		"@axiomatics",
		"@bigdoormedia",
		"@bigdoormedia",
		"@jexyco",
		"@eclipse foundation",
		"@flomio",
		"@locvox",
		"@proxomo",
		"@singlyinc",
		"@standing_cloud",
		"@standing_cloud",
		"@statsmix",
		"@StreamStep",
		"@StreamStep",
		"@tendril",
		"@wanderfly",
		"@get_rainmaker",
		];
	
/*
 * DATA FORMAT
 * 
 * tweet {
 * 	startup : "@ReportGrid"
 * }
 * 
 * 
 * 
 * ReportGrid.track(
            "/adv",
            {
              "count": random(3),
              "timestamp": timestamp(),
              "events":{
                "conversion": {
                  "conversionType": cType[random(3) - 1],
                  "platform":platform[random(3) - 1],
                  "audience":audience[random(3) - 1],
                  "displayContext": displayContext[0]
                }
              }
            }
          )
 * 
 */
}