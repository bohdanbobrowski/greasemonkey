<?php
if(isset($_GET['title']) && isset($_GET['url']) && isset($_GET['file'])) {
	$file = fopen($_GET['title'].".html","a");
	echo fwrite($file,"<a href=\"{$_GET['url']}\" title=\"{$_GET['file']}\" download=\"{$_GET['file']}\">{$_GET['file']}</a><br/>\n");
	fclose($file);	
}
?>
