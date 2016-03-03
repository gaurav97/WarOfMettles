<?php

	session_start();

	header('Content-Type: text/xml');
	echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';

	echo '<response>';
	$id=$_POST['id'];

	if( @mysql_connect('localhost','root','') && mysql_select_db('war_of_mettles') )
	{
		$query = "select * from `materials` where `id`=$id";
		if($query_run=mysql_query($query))
		{
			echo '<wood>'.mysql_result($query_run, 0, 'material1').'</wood>';
			echo '<brick>'.mysql_result($query_run, 0, 'material2').'</brick>';
			echo '<concrete>'.mysql_result($query_run, 0, 'material3').'</concrete>';
		}
	}
	echo '</response>';
?>