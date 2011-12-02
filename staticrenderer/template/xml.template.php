<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>ReportGrid Renderer</title>
<?php
for($i=0;$i<count($css = $config->css());$i++)
{
    echo "<link href=\"{$css[$i]}\" rel=\"stylesheet\" type=\"text/css\" />\n";
}
?>
</head>
<body<?=($config->backgroundColor() ? (' bgcolor="'.$config->backgroundColor().'"') : '')?>>
<?=($config->backgroundColor() ? (' bgcolor="'.$config->backgroundColor().'"') : '')?><br/>
COLOR: <?=$config->backgroundColor()?><br/>
<pre><?php var_dump($config); ?></pre>
<<?=$config->element()?><?=$config->id()?' id="'.$config->id().'"':''?> class="rg<?=$config->className()?' '.$config->className():''?>"><?=$config->xml()?></<?=$config->element()?>>
<script type="text/javascript"><![CDATA[
setTimeout(function() { RG_READY = true; }, 200);
]]></script>
</body>
</html>