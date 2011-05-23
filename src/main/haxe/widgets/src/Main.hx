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
	
	static function main() 
	{
		var where = { };
		Reflect.setField(where, ".tweet.startup", "@ReportGrid");
		rg.js.ReportGrid.searchSeries("/tweets", { periodicity: "eternity", where: where}, function(v) trace(v) );
		rg.js.ReportGrid.propertyCount("/tweets", { property: ".tweet.startup" }, function(v) trace("propertyCount tweets: " + v) );
		rg.js.ReportGrid.propertyValueCount("/tweets", { property: ".tweet.startup", value : "@ReportGrid" }, function(v) trace("propertyValueCount tweets: " + v) );
		rg.js.ReportGrid.propertyCount("/pivots", { property: ".click.gender" }, function(v) trace("propertyCount pivot: " + v) );
		rg.js.ReportGrid.propertyValueCount("/pivots", { property: ".click.gender", value : "@male" }, function(v) trace("propertyValueCount pivot: " + v) );
		
		
//		createPivotRandomData();

		rg.Viz.pivot("#pivot", {
			query : {
				path : PATH_PIVOTS,
				event : "click"
			},
			properties : ["Gender", "Location"]
		});
		
		createTweetRandomData();
		
		var tops = ["@ReportGrid", "@One", "@Two", "@Three", "@Four", "@Five", "@Six", "@Seven", "@Eight", "@Nine"];
		var gluecons = [ "@ReportGrid", "@One", "@Two", "@Three", "@Four", "@Five", "@Six", "@Seven", "@Eight", "@Nine", "@Ten", "@Eleven", "@Twelve", "@Thirteen", "@Fourteen" ];

/*
		// chart
		rg.Viz.stream("#stream", { 
			width: 940,
			height : 320,
			query : { path : PATH_TWEETS, event : "tweet", property : "startup", values : tops } 
		});

		rg.Viz.time("#line", { 
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
						gender : Arrays.random(genders)
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
		"Arapahoe",
		"Jefferson",
		"Adams",
		"Larimer",
		"Boulder",
		"Douglas",
		"Weld",
		"Pueblo",
		"Mesa",
		"Garfield"
	];
	
	static var genders = [
		"male",
		"female"
	];
	
	static var gluecons = [
		"@ReportGrid",
		"@ReportGrid",
		"@ReportGrid",
		"@ReportGrid",
		"@One",
		"@One",
		"@Two",
		"@Two",
		"@Three",
		"@Four",
		"@Five",
		"@Six",
		"@Seven",
		"@Eight",
		"@Nine",
		"@Nine",
		"@Ten",
		"@Eleven",
		"@Eleven",
		"@Twelve",
		"@Thirteen",
		"@Fourteen",
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