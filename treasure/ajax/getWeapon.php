<?php

	session_start();

	header('Content-Type: text/xml');
	echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';

	echo '<response>';
	$id=$_POST['id'];

	if( @mysql_connect('localhost','root','') && mysql_select_db('war_of_mettles') )
	{
		$query = "select * from `weapons` where `id`=$id";
		if($query_run=mysql_query($query))
		{
			echo '<saw>'.mysql_result($query_run, 0, 'weapon1').'</saw>';
			echo '<hammer>'.mysql_result($query_run, 0, 'weapon2').'</hammer>';
			echo '<explosive>'.mysql_result($query_run, 0, 'weapon3').'</explosive>';
		} 

	}
	echo '</response>';
?>