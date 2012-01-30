/**
 * ...
 * @author Franco Ponticelli
 */

package rg.info;

typedef FieldFilter =
{
	field : String,
	validator : Dynamic -> Bool,
	filter : Dynamic -> Array<{ value : Dynamic, field : String }>
}