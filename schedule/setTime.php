<?php

	session_start();
	$id = $_SESSION['id'];

	if( @mysql_connect('localhost','root','') && mysql_select_db('war_of_mettles') )
	{
		$value = $_POST['value'];
		mysql_query("UPDATE `users` SET `time`='$value' where `id`='$id'");
	}

?>