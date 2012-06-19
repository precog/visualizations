/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info.filter;

class EmptyTransformer implements ITransformer<Dynamic, Pairs>
{
	var mapto : String;
	public function new(mapto : String)
	{
		this.mapto = mapto;
	}
	public function transform(value : Dynamic) : TransformResult<Pairs>
	{
		return TransformResult.Success(new Pairs([mapto], [value]));
	}
}