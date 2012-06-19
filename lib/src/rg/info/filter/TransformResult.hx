package rg.info.filter;

import thx.util.Message;

enum TransformResult<T>
{
	Success(value : T);
	Failure(reason : Message);
}