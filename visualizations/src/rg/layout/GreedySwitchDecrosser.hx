package rg.layout;

using rg.layout.Graphs;

class GreedySwitchDecrosser 
{
	public function new()
	{
		
	}

	public function decross(layout : Array<Array<Node>>)
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
				var a = layout[i], b = layout[i+1];
				decrossPair(a, b);
			}
			crossings = layout.layoutCrossings();
		} while(totbefore > crossings);
	}


	function decrossPair(a : Array<Node>, b : Array<Node>)
	{
		var tot = a.crossings(b),
			ntot = tot,
			t;
		do
		{
			tot = ntot;
			for(i in 0...b.length-1)
			{
				swap(b, i);
				if((t = a.crossings(b)) >= ntot)
					swap(b, i)
				else
					ntot = t;
			}
		} while(ntot < tot);
	}

	function swap<T>(a : Array<T>, pos : Int)
	{
		var v = a[pos];
		a[pos] = a[pos+1];
		a[pos+1] = v;
	}

	public static function composed()
	{
		return {
			decross : function(layout : Array<Array<Node>>)
			{
				new GreedySwitchDecrosser().decross(layout);
				new GreedySwitch2Decrosser().decross(layout);
			}
		}
	}
}