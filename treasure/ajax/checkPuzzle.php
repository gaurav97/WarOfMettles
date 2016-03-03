<?php
session_start();
header('Content-Type: text/xml');
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';

	echo '<response>';
	if( @mysql_connect('localhost','root','') && mysql_select_db('war_of_mettles') )
	{
		$id=$_POST['id'];
		$temp=$_POST['puzzleNumber'];
		$puzzle="puzzle".$temp;
		$query = "select * from `puzzles` WHERE `id`=$id";
		if($query_run=mysql_query($query)) {
			echo '<check>'.mysql_result($query_run,0,$puzzle).'</check>';
		}
	};
	echo '</response>';

?>