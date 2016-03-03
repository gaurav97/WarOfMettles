<?php
	session_start();
	header('Content-Type: text/xml');
	echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';

	echo '<response>';

		if( @mysql_connect('localhost','root','') && mysql_select_db('war_of_mettles') )
		{
			$id = $_POST['id'];
			$query = "select * from `users` where `id` = $id";
			if($query_run = mysql_query($query))
			{
				$treasureValue = mysql_result($query_run,0,'treasure');
				echo '<treasure>'.$treasureValue.'</treasure>';
			}
		}
	echo '</response>';
?>