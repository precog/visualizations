package rg.pivottable;

typedef PivotTableOptions = {
	query : {
		start : Null<Dynamic>,
		end : Null<Dynamic>,
		path : String,
		event : String,
		properties : Array<PivotTableProperty>
	},
	properties : Array<String> 
}

typedef PivotTableProperty = {
	name : String,
	limit : Null<Int>, // todo, can be omitted?
	order : String,
	time : String
}