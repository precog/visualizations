<?php

class model_Sample {
	public function __construct(){}
	static $config = "cache=2 days\x0A[params]\x0Aviz[0]=pieChart\x0Aviz[1]=barChart\x0A[defaults]\x0Aviz=pieChart";
	static $html;
	function __toString() { return 'model.Sample'; }
}
model_Sample::$html = "<?DOCTYPE html>\x0A<html>\x0A<head>\x0A<title>Viz</title>\x0A<script src=\"" . ("http://api.reportgrid.com" . "/js/") . "reportgrid-charts.js\"></script>\x0A<link type=\"text/css\" href=\"" . ("http://api.reportgrid.com" . "/css/") . "rg-charts.css\" rel=\"stylesheet\">\x0A</head>\x0A<body>\x0A<div id=\"chart\"></div>\x0A<script>\x0AReportGrid.\$viz(\"#chart\", {\x0A  data : [{browser:\"chrome\",count:100},{browser:\"firefox\",count:80}],\x0A  axes : [\"browser\",\"count\"]\x0A});\x0A</script>\x0A</body>\x0A</html>";
