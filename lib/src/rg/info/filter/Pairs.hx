/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info.filter;

class Pairs
{
	var names : Array<String>;
	var values : Array<Dynamic>;
	public function new(names : Array<String>, values : Array<Dynamic>)
	{
		if(names.length != values.length)
			throw new thx.error.Error("names and values must have the same length");
		this.names = names;
		this.values = values;
	}

	public function iterator() {
		var result : Array<{ name : String, value : Dynamic }> = [];
		for(i in 0...names.length)
			result.push({ name : names[i], value : values[i] });
		return result.iterator();
	}
}
