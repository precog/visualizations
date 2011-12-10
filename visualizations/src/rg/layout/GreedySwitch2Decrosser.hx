package rg.layout;

using rg.layout.Graphs;

class GreedySwitch2Decrosser extends GreedySwitchDecrosser
{
	public function new()
	{
		super();
	}

	override public function decross(layout : Array<Array<Node>>)
	{
		if(layout.length <= 1)
			return;
		var len = layout.length - 1;
		var totbefore, crossings;
		do
		{
			totbefore = layout.layoutCrossings();
			for(i in 0...len)
			{
				var a = layout[i-1], b = layout[i], c = layout[i+1];
				decrossTriplet(a, b, c);
			}
			crossings = layout.layoutCrossings();
		} while(totbefore > crossings);
	}


	function decrossTriplet(a : Array<Node>, b : Array<Node>, c : Array<Node>)
	{
		if(null == a)
		{
			decrossPair(b, c);
		} else if(null == c) {
			decrossPair(a, b);
		} else {
			var tot = a.crossings(b) + b.crossings(c),
				ntot = tot,
				t;
			do
			{
				tot = ntot;
				for(i in 0...b.length-1)
				{
					swap(b, i);
					if((t = a.crossings(b) + b.crossings(c)) >= tot)
						swap(b, i);
					else
						ntot = t;
				}
			} while(ntot < tot);
		}
	}
}