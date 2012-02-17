package model;

class Sample
{
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
<script src="'+App.JS_PATH+'reportgrid-charts.js"></script>
<link type="text/css" href="'+App.CSS_PATH+'rg-charts.css" rel="stylesheet">
<script type="text/javascript">
function render()
{
  ReportGrid.$viz("#chart", {
    data : [{browser:"chrome",count:100},{browser:"firefox",count:80}],
    axes : ["browser","count"]
  });
}
</script>
</head>
<body onload="render()">
<div id="chart"></div>
</body>
</html>';
}