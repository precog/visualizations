package rg.chart;

typedef ChartOptions = {
	width : Int,
	height : Int,
	query : { path : String, event : String, property : String, values : Array<String> },
	
	left : ScaleInfo,
	right : ScaleInfo,
	bottom : ScaleInfo,
	top : ScaleInfo,
	
	timeranimationupdate : Int,
	timerdataupdate : Int,
	
	lineinterpolation : String,
	stacked : Bool
}

typedef ScaleInfo = 
{
	ticks : Bool,
	labels : Bool,
	ticklength : Int,
	labellength : Int,
	spacing : Int
}