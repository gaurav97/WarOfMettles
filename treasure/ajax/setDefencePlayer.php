<?php
	
	if( @mysql_connect('localhost','root','') && mysql_select_db('war_of_mettles') )
	{
		$id=$_POST['id'];
		$room=$_POST['room'];
		$row=$_POST['row'];
		$col=$_POST['col'];			
		$query = "UPDATE `defence_player` set `room`=$room,`row`=$row,`col`=$col WHERE `id`=$id;";
		mysql_query($query);
	}

?>