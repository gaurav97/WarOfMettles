<?php

	header('Content-Type: text/xml');
	echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';

	echo '<response>';

	if( @mysql_connect('localhost','root','') && mysql_select_db('war_of_mettles') )
	{
		$query = "SELECT `id`,`schedule` FROM `users` ORDER BY `schedule` DESC";
		if ($query_run = mysql_query($query))
		{
			for($i=1;$i<=50;$i++)
			{
				echo '<row'.$i.'>';
				echo '<id>'; echo mysql_result($query_run,$i-1,'id'); echo '</id>';
				echo '<score>'; echo mysql_result($query_run,$i-1,'schedule'); echo '</score>';
				echo '</row'.$i.'>';
			}
		}
	}

	echo '</response>';

?>