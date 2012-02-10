package model;

class Sample
{
	public static var uid    = '1jg88nskpqtc';
	public static var config = 'cache=2 days
[params]
viz[0]=pieChart
viz[1]=barChart
[defaults]
viz=pieChart';
	public static var html   = '<?DOCTYPE html>
<html>
<head>
<title>Viz</title>
<script src="http://api.reportgrid.com/js/reportgrid-core.js?tokenId=$tokenId"></script>
<script src="http://api.reportgrid.com/js/reportgrid-charts.js"></script>
<script src="http://api.reportgrid.com/js/reportgrid-query.js"></script>
<link type="text/css" href="http://api.reportgrid.com/css/rg-charts.css" rel="stylesheet">
</head>
<body>
<div id="chart"></div>
<script>
ReportGrid.$viz("#chart", {
  data : [{browser:"chrome",count:100},{browser:"firefox",count:80}],
  axes : ["browser","count"],
  options : {
  	effect : "noeffect"
  }
});
</script>
</body>
</html>';
}