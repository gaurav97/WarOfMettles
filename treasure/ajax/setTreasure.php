<?php
	if( @mysql_connect('localhost','root','') && mysql_select_db('war_of_mettles') )
	{
		$id=$_POST['id'];
		$change = $_POST['change'];

		$query = "update `users` set `treasure`=`treasure`+$change where `id`=$id";
		mysql_query($query);
	}

?>