<?php
	

	header('Content-Type: text/xml');
	echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';

	echo '<response>';

		$id=$_POST['id'];
		$password=$_POST['password'];

		if( @mysql_connect('localhost','root','') && mysql_select_db('war_of_mettles') )
		{
			$query = "SELECT * FROM `users` WHERE `id`='$id';";
			if ($query_run = mysql_query($query)) 
			{
				if(mysql_num_rows($query_run)>0)
				{
					if( $password == mysql_result($query_run,0,'password') )
					{
						if( mysql_result($query_run,0,'logged_in')==0 )
						{							
							$query = "UPDATE `users` set `logged_in`='1' WHERE `id`='$id'";
							mysql_query($query);							
							$query = "SELECT `state` FROM `users` WHERE `id`='$id'";
							if(mysql_result(mysql_query($query),0,'state')==0)
							{
								$query = "UPDATE `users` set `state`='1' WHERE `id`='$id'";
								mysql_query($query);
							}

							ob_start();
							session_start();
							$_SESSION['id'] = $id;

							echo "OK";
						}
						else
							echo "This team is already logged in. Use another";
					}
					else
						echo "Wrong password";
				}
				else
				{
					echo "This ID does not exist";
				}	
			}			
		}
		else
		{
			echo "Error occured while logging in";
		}

	echo '</response>';
?>