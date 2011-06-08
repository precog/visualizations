package rg.query;

/**
 * ...
 * @author Franco Ponticelli
 */

enum DateLimit
{
	NoLimit;
	FixedLimit(d : Date);
	VariableLimit(f : Void -> Date);
}