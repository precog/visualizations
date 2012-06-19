package rg.info.filter;

interface IFilter<TIn, TOut>
{
	public function filter(v : TIn) : TOut
}