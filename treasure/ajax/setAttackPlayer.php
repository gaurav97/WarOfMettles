<?php
	session_start();
	header('Content-Type: text/xml');
	echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';

	echo '<response>';

	if( @mysql_connect('localhost','root','') && mysql_select_db('war_of_mettles') )
	{
		$id=$_POST['id'];
		$room=$_POST['room'];
		$row=$_POST['row'];
		$col=$_POST['col'];	

		$query = "SELECT `room` from `attack_player` WHERE `room`=$room";
		$query_run = mysql_query($query);
		if(mysql_num_rows($query_run)<3 || $room<=0)
		{
			$query = "UPDATE `attack_player` set `room`=$room,`row`=$row,`col`=$col WHERE `id`=$id";
			mysql_query($query);
			echo '<return>1</return>';
		}
		else echo '<return>0</return>';
	}
	echo "</response>";

?>