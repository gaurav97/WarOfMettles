<?php

	header('Content-Type: text/xml');
	echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';
	echo '<response>';

		date_default_timezone_set('Asia/Calcutta');
		$info = getdate();
		$nowH = $info['hours'];
		$nowM = $info['minutes'];
		$nowS = $info['seconds'];

		$page = $_POST['page'];
		if($page=='3')
		{
			$endH = 10; $endM = 30;
		}
		else if($page=='4')
		{
			$endH = $nowH + 1; $endM = $nowM + 30;
		}
		
		$left = ($endH-$nowH)*3600 + ($endM-$nowM)*60 - $nowS;
		$leftS = $left%60;
		$leftM = ($left-$leftS)/60;
		echo '<m>'.$leftM.'</m>';
		echo '<s>'.$leftS.'</s>';		

	echo '</response>';

?>