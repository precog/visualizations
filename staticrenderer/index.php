<?

define("PHANTOMJS", "DISPLAY=:0 /usr/local/bin/phantomjs");

require_once('lib/config.class.php');
//require_once('lib/KLogger.class.php');

if(isset($_GET['file']))
{
	$file = $_GET['file'];
	$path = path($file);
	$format = array_pop(explode('.', $file));

	switch($format)
	{
		case "png":
			header("Content-Type: image/png");
			break;
		case "jpg":
			header("Content-Type: image/jpeg");
			break;
		case "pdf":
			header("Content-Type: application/pdf");
			break;
	}

	header("Content-Description: File Transfer");
	header("Content-Disposition: attachment; filename=visualization.$format");
	header("Content-Transfer-Encoding: binary");
	header("Content-Length: " . filesize($path));

	readfile($path);
	exit;
}

try
{
	$config = Config::fromQueryString($_REQUEST);
	$hash = $config->hash();
	$output = path($hash,'xhtml');

	if(!file_exists($output)) {
		captureTemplate($config, $output);
//		KLogger::instance()->log("html generated at $output");
	}

//	echo $output;
//	exit;

	$imagepath = path($hash, $config->format());

	if(!file_exists($imagepath)) {
		$out = renderVisualization($output, $imagepath, $config->width(), $config->height(), $config->format());
//		KLogger::instance()->log("{$config->format()} generated at $imagepath");
	}

	echo "$hash.{$config->format()}";
	exit;
} catch(Exception $e) {
//	KLogger::instance()->log($e->getMessage());
	echo "ERROR:" + $e->getMessage();
	exit;
}

function renderVisualization($input, $output, $width, $height, $format)
{
	switch($format)
	{
		case "pdf":
			require_once('lib/WKPDF.class.php');
			$render = new WKPDF();
			$render->set_orientation($width > $height ? WKPDF::$PDF_LANDSCAPE : WKPDF::$PDF_PORTRAIT);
			$render->set_page_size("letter");
			$render->set_html(file_get_contents($input));
			$render->render();
			return $render->output(WKPDF::$PDF_SAVEFILE, $output);
			break;
		default:
			return phantom("renderer.js", $input, $output, $width, $height);
	}
}

function phantom($script, $input, $output, $width, $height)
{
	$dir = __DIR__;
	$bin = escapeshellcmd(PHANTOMJS);
	$options = " --config=$dir/phantom/config.json";
	$args = "$dir/$input  $dir/$output $width $height";
	$script = "$dir/phantom/$script";
	$cmd = "$bin$options $script $args";

	shell_exec('export DYLD_LIBRARY_PATH="";');
	return shell_exec($cmd);
}

function baseUrl()
{
	$base = reset(explode("?", $_SERVER['REQUEST_URI']));
	if(substr($base, -4) == '.php')
		$base = dirname($base);
	$base = trim($base, "/");
	if($base)
		$base .= "/";
	return "http://{$_SERVER['SERVER_NAME']}/$base";
}

function url($name, $ext = null)
{
	return baseUrl() . 'cache/'.$name.(null == $ext ? '' : '.'.$ext);
}

function path($name, $ext = null)
{
	return 'cache/'.$name.(null == $ext ? '' : '.'.$ext);
}

function captureTemplate($config, $output)
{
	ob_start();
	printTemplate($config);
	$content = ob_get_contents();
	ob_end_clean();
	file_put_contents($output, $content);
}

function printTemplate($config)
{
	if($config->params())
		require_once('template/visualization.template.php');
	else
		require_once('template/xml.template.php');
}

function dump($v)
{
	echo "<pre>";
	var_dump($v);
	echo "</pre>";
}