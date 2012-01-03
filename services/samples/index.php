<?php

define('SAMPLES_CHARTS_DIR', 'samples/charts/');
define('SAMPLES_DATA_DIR', 'samples/data/');
define('SAMPLE_EXT', '.js');
define('MANAGE_CODE', '67ww78bhFGY!543fv');

$viz_categories = array(
	'SK' => array(name => 'Sankey',			sequence => 0),
	'GE' => array(name => 'Geo Chart',		sequence => 10),
	'FC' => array(name => 'Funnel Chart',	sequence => 20),
	'HM' => array(name => 'Heatmap',		sequence => 30),
	'BC' => array(name => 'Bar Chart',		sequence => 40),
	'SG' => array(name => 'Stream Graph',	sequence => 50),
	'SP' => array(name => 'Scatter Plot',	sequence => 60),
	'LC' => array(name => 'Line Chart',		sequence => 70),
	'PC' => array(name => 'Pie Chart',		sequence => 80),
	'PT' => array(name => 'Pivot Table',	sequence => 90),
	'LE' => array(name => 'Leaderboard',	sequence => 100)
);

if(in_array($_SERVER['SERVER_NAME'], array('localhost')))
{
	define('REPORTGRID_VIZ_API', 'http://localhost/rg/charts/js/reportgrid-charts.js');
	define('REPORTGRID_CSS_API', 'http://localhost/rg/charts/css/rg.css');
} else {
	define('REPORTGRID_VIZ_API', 'http://api.reportgrid.com/js/reportgrid-charts.js');
	define('REPORTGRID_CSS_API', 'http://api.reportgrid.com/css/rg.css');
}

function categories()
{
	global $viz_categories;
	$result = array();
	foreach($viz_categories as $key => $value)
	{
		$result[] = array(category => $value['name'], code => $key);
	}
	return $result;
}

function categoryOptions($cat)
{
	$d = dir(SAMPLES_CHARTS_DIR);
	$results = array();
	while(false !== ($entry = $d->read())) {
		if($cat != ($p = substr($entry, 0, 2)))
			continue;
		$results[] = array('sample' => $entry, 'title' => extractTitle($entry));
	}
	usort($results, optionComparison);
	return $results;
}

function extractTitle($sample)
{
	return array_pop(explode('-', basename($sample, SAMPLE_EXT), 2));
}

function compareCategory($v)
{
	global $viz_categories;
	$c = @$viz_categories[substr($v, 0, 2)]['sequence'];
	if($c === null)
		return 1000;
	else
		return $c;
}

function sampleComparison($a, $b)
{
	$v = compareCategory($a['sample']) - compareCategory($b['sample']);
	if($v !== 0)
		return $v;
	else
		return $a['sample']>$b['sample'];
}

function optionComparison($a, $b)
{
	return substr($a['sample'], 2) > substr($b['sample'], 2);
}

function listSamples($filtered = true)
{
	$d = dir(SAMPLES_CHARTS_DIR);
	$results = array();
	while(false !== ($entry = $d->read())) {
		if(('.' == ($c = substr($entry, 0, 1))) || ($filtered && ($c == '_' || $c == '-')))
			continue;
		$results[] = array('sample' => $entry, 'title' => extractTitle($entry));
	}
	usort($results, sampleComparison);
	return $results;
}

function infoSample($sample)
{
	$result = parseContent(file_get_contents(SAMPLES_CHARTS_DIR.basename($sample)));
	$result['title']  = extractTitle($sample);
	$result['sample'] = $sample;
	return $result;
}

function parseContent($content)
{
	$info = array();
	$parts = explode('//**', $content);
	foreach($parts as $part)
	{
		$pair = explode("\n", $part, 2);
		// first line is the section
		$key = trim(strtolower($pair[0]));
		if(!$key) continue;
		// the rest is the content
		$value = trim($pair[1]);
		if($key == 'load')
		{
			$info['data'] = 'var data = '.file_get_contents(SAMPLES_DATA_DIR.$value.'.json').";";
		} else {
			$info[$key] = $value;
		}
	}

	return $info;
}

function display($sample)
{
	$info = infoSample($sample);
	$VIZ_API = REPORTGRID_VIZ_API;
	$CSS_API = REPORTGRID_CSS_API;
	require('template.php');
	exit;
}

function delete($list)
{
	foreach($list as $item)
	{
		$file = SAMPLES_CHARTS_DIR.$item;
		unlink($file);
	}
	var_dump($list);
}

function manage()
{
	if(isset($_POST))
	{
		switch($_POST['action'])
		{
			case "delete":
				delete($_POST['selected']);
				break;
		}
	}
	$list = listSamples(false);
	require('template-manage.php');
	exit();
}

function json($v)
{
	echo json_encode($v);
	exit;
}

if(!isset($_GET['action']))
{
	echo "<ul>\n";
	foreach(listSamples() as $item)
		echo "\t<li>{$item['title']}</li>\n";
	echo "</ul>";
	exit;
}

switch($_GET['action'])
{
	case 'list':
		json(listSamples());
	case 'categories':
		json(categories());
	case 'options':
		json(categoryOptions($_GET['category']));
	case 'info':
		json(infoSample($_GET['sample']));
	case 'display':
		display($_GET['sample']);
	case 'manage':
		if($_GET['code'] == MANAGE_CODE)
			manage();
	default:
		echo "INVALID ACTION";
}