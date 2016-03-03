<?php
	if( @mysql_connect('localhost','root','') && mysql_select_db('war_of_mettles') )
	{
		$id=$_POST['id'];
		$change = $_POST['amount'];
		$type = $_POST['type'];
		$weapon = 'weapon'.$type;

		$query = "update `weapons` set `$weapon`=`$weapon`+$change where `id`=$id";
		mysql_query($query);
	}

?>