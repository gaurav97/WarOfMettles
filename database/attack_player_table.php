<?php

	if(mysql_connect('localhost','root','') && mysql_select_db('war_of_mettles'))
	{
		$query = "DELETE FROM `attack_player` WHERE 1;";
		if(!mysql_query($query))
		{
			$query = "CREATE TABLE attack_player (
						id INT(2) UNSIGNED PRIMARY KEY, 
						room INT(2),
						row INT(2),
						col INT(2)
						)";
			mysql_query($query);
		}
		
		for($i=1;$i<10;$i++)
		{
			$query = "INSERT INTO `attack_player` (`id`, `room`, `row`, `col`) VALUES ('$i', '-1', '0', '0');";
			echo $query.'<br>';
			mysql_query($query);
		}
		for($i=10;$i<=50;$i++)
		{
			$query = "INSERT INTO `attack_player` (`id`, `room`, `row`, `col`) VALUES ('$i', '-1', '0', '0');";
			echo $query.'<br>';
			mysql_query($query);
		}		
	}
	
?>