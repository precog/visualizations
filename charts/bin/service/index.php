<?php

define('SAMPLES_CHARTS_DIR', '../samples/charts/');
define('SAMPLES_DATA_DIR', '../samples/data/');
define('SAMPLE_EXT', '.js');

function extractTitle($sample)
{
	return array_pop(explode('-', basename($sample, SAMPLE_EXT), 2));
}

function listSamples()
{
	$d = dir(SAMPLES_CHARTS_DIR);
	$results = array();
	while(false !== ($entry = $d->read())) {
		if($entry == '.' || $entry == '..')
			continue;
		$results[] = array('sample' => $entry, 'title' => extractTitle($entry));
	}
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
	require('template.php');
	exit;
}

function json($v)
{
	echo json_encode($v);
	exit;
}

if(!isset($_GET['action']))
{
	echo "<ul>";
	foreach(listSamples() as $item)
		echo "<li>{$item['title']}</li>";
	echo "</ul>";
	exit;
}

switch($_GET['action'])
{
	case 'list':
		json(listSamples());
	case 'info':
		json(infoSample($_GET['sample']));
	case 'display':
		display($_GET['sample']);
	default:
		echo "INVALID ACTION";
}