<?php

	session_start();
	$id = $_SESSION['id'];

	header('Content-Type: text/xml');
	echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';
	echo '<response>';

	if( @mysql_connect('localhost','root','') && mysql_select_db('war_of_mettles') )
	{
		$table = $_POST['table1'];			
		$row = $_POST['row1'];
		$col = $_POST['col1'];
		$value = $_POST['value1'];
		$colName = 'c'.$row.$col;
		$tableName = 'schedule'.$table;
		// $query = "UPDATE $tableName SET $colName='$value' WHERE `id`='$id';";
		mysql_query("UPDATE $tableName SET $colName='$value' WHERE `id`='$id'");

		$table = $_POST['table2'];			
		$row = $_POST['row2'];
		$col = $_POST['col2'];
		$value = $_POST['value2'];
		$colName = 'c'.$row.$col;
		$tableName = 'schedule'.$table;
		// $query = "UPDATE $tableName SET $colName='$value' WHERE `id`='$id';";
		mysql_query("UPDATE $tableName SET $colName='$value' WHERE `id`='$id'");
		
		
		$value = $_POST['score'];
		mysql_query("UPDATE `users` SET `schedule`='$value' WHERE `id`='$id'");
	}

	echo '</response>';
?>