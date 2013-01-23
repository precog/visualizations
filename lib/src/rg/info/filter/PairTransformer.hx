package rg.info.filter;

using Arrays;

class PairTransformer implements ITransformer<Dynamic, Pairs>
{
	var names : Array<String>;
	var valueTransformer : ITransformer<Dynamic, Dynamic>;
	public function new(names : Array<String>, valueTransformer : ITransformer<Dynamic, Dynamic>)
	{
		this.names = names;
		this.valueTransformer = valueTransformer;
	}

	public function transform(value : Dynamic) : TransformResult<Pairs>
	{
		switch(valueTransformer.transform(value))
		{
			case Success(v):
				return TransformResult.Success(new Pairs(names, names.map(function(_) return v)));
			case Failure(reason):
				return TransformResult.Failure(reason);
		}
	}
}