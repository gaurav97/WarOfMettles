<?php

	if(mysql_connect('localhost','root','') && mysql_select_db('war_of_mettles'))
	{
		$query = "DELETE FROM `weapons` WHERE 1;";
		if(!mysql_query($query))
		{
			$query = "CREATE TABLE weapons (
						id INT(2) UNSIGNED PRIMARY KEY, 
						weapon1 INT(6) UNSIGNED,
						weapon2 INT(6) UNSIGNED,
						weapon3 INT(6) UNSIGNED
						)";
			mysql_query($query);
		}		
		for($i=1;$i<=50;$i++)
		{
			$query = "INSERT INTO `weapons` (`id`, `weapon1`, `weapon2`, `weapon3`) VALUES ('$i', '0', '0', '0');";
			echo $query.'<br>';
			mysql_query($query);
		}		
	}
	
?>