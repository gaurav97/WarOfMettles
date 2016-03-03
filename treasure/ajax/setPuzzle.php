<?php
	
	if( @mysql_connect('localhost','root','') && mysql_select_db('war_of_mettles') )
	{
		$id=$_POST['id'];
		$temp=$_POST['puzzleNumber'];
		$puzzle="puzzle".$temp;
		$query = "update `puzzles` set $puzzle='1' WHERE `id`=$id";
		mysql_query($query);
	}

?>