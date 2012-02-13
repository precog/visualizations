if(ReportGrid && ReportGrid.charts)
{
	ReportGrid.charts.addOnce(function() {
		window.print();
	});
} else {
	setTimeout(window.print, 100);
}