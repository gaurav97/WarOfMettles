<?php

	ob_start();
	session_start();
	$id = $_SESSION['id'];

	if( @mysql_connect('localhost','root','') && mysql_select_db('war_of_mettles') )
	{
		$state = $_POST['state'];
		$query = "UPDATE `users` set `state`='$state' WHERE `id`='$id';";
		mysql_query($query);
	}

?>