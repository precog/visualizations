package rg.info.filter;

interface ITransformer<TIn, TOut>
{
	public function transform(value : TIn) : TransformResult<TOut>;
}