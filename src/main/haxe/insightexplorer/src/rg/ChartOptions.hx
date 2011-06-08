package rg;

typedef ChartOptions = {
	width : Int,
	height : Int,
//	query : { path : String, event : String, property : String, values : Array<String> },
	
	left : ScaleInfo,
	right : ScaleInfo,
	bottom : ScaleInfo,
	top : ScaleInfo,
	
	start : Date -> Null<Date>,
	end : Date -> Null<Date>,
	animated : Bool,
	
	animation : {
		dataupdate : Int,
		refresh : Int
	},
	
//	timeranimationupdate : Int,
//	timerdataupdate : Int,
	
	lineinterpolation : String,
//	stacked : Bool
}