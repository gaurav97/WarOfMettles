<?php
	
	if( @mysql_connect('localhost','root','') && mysql_select_db('war_of_mettles') )
	{
		$room=$_POST['room'];
		$row=$_POST['row'];
		$col=$_POST['col'];
		$level=$_POST['level'];
		$colName = 'w'.$row.$col;
		$query = "UPDATE `walls` set $colName=$level WHERE `room`=$room;";
		mysql_query($query);
	}

?>