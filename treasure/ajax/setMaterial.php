<?php
	if( @mysql_connect('localhost','root','') && mysql_select_db('war_of_mettles') )
	{
		$id=$_POST['id'];
		$change = $_POST['amount'];
		$type = $_POST['type'];
		$material = 'material'.$type;

		$query = "update `materials` set `$material`=`$material`+$change where `id`=$id";
		mysql_query($query);
	}

?>