<!DOCTYPE html>
<html>
<head>
	<title>ReportGrid.Charts</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
	<script src="js/charts.js"></script>
	<style>
* {
	font-family: sans-serif;
	font-size: 12px;
}

h1 {
	font-size: 120%;
}

h2 {
	font-size: 110%;
}

#samplecode {
	white-space: pre;
	font-family: monospace;
}

#samplevisualization iframe {
	width: 640px;
	height: 340px;
	border: none;
}
	</style>
</head>
<body>
	<div>
		<h1>Samples:</h1>
		<ul id="samplesmenu"></ul>
	</div>
	<div>
		<h1>Visualization:</h1>
		<div id="samplevisualization"><iframe></iframe></div>
	</div>
	<div>
		<h1>Code:</h1>
		<div id="samplecode"></div>
	</div>
	<div id="docpanel">
		<h2>Description:</h1>
		<div id="sampledoc"></div>
	</div>
</body>
</html>