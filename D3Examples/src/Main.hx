import thx.js.Dom;
using Strings;

class Main
{
	static var example : Example;
	static function main()
	{
		var classes = [
			examples.Area,
			examples.Bar,
			examples.Chord,
			examples.HelloData,
			examples.HelloDataKey,
			examples.HelloDataNestedKey,
			examples.HelloEvent,
			examples.HelloSort,
			examples.HelloTransition,
			examples.HelloTransitionUndefined,
			examples.HelloWebkitTransition,
			examples.Line,
			examples.Moire,
			examples.SelectAllEnterAdd,
			examples.SelectEnterAdd,
			examples.Stack,
			examples.Stream,
			examples.Timer,
			examples.TransitionEquations,
			examples.ZoomPan,
		];
		
		Dom
			.select("#examples")
			.selectAll("li")
				.data(classes)
				.enter()
					.append("li")
					.append("a")
						.html().stringf(description)
						.attr("href").string("#")
						.on("click", click)
						.first(function(d) click(d,0));
	}
	
	static function description(d : Class<Dynamic>, i : Int)
	{
		return Type.getClassName(d).split(".").pop().humanize();
	}
	
	static function click(d, i)
	{
		if (null != example)
			example.destroy();
		example = Type.createInstance(d, ["#example"]);
		example.run();
	}
}