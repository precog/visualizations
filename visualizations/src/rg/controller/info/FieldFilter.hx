/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.info;

typedef FieldFilter =
{
	field : String,
	validator : Dynamic -> Bool,
	filter : Dynamic -> Array<{ value : Dynamic, field : String }>
}