/**
 * ...
 * @author Franco Ponticelli
 */

package rg.util;

class ChainedExecutor<T>
{
	var handler : Dynamic -> Void;
	var actions : Array < T -> (T -> Void) -> Void > ;
	var pos : Int;
	
	public function new(handler : T -> Void)
	{
		this.handler = handler;
		actions = [];
		pos = 0;
	}
	
	public function addAction(handler : T -> (T -> Void) -> Void )
	{
		actions.push(handler);
	}
	
	public function execute(ob : T)
	{
		if (pos == actions.length)
		{
			pos = 0;
			handler(ob);
		}
		else
		{
			actions[pos++](ob, execute);
		}
	}
}