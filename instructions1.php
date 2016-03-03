<?php

	ob_start();
	session_start();	
	if(!isset($_SESSION['id']) || empty($_SESSION['id']))
	{
		header('Location: ../war_of_mettles');
	}
	$id = $_SESSION['id'];
	if( @mysql_connect('localhost','root','') && mysql_select_db('war_of_mettles') )
	{
		$query = "SELECT `state` FROM `users` WHERE `id`='$id';";
		$query_run = mysql_query($query);
		$state = mysql_result($query_run,0,'state');
		if($state==2)
			header('Location: schedule');
		else if($state==3)
			header('Location: instructions2.php');
		else if($state==4)
			header('Location: treasure');
		else if($state==5)
			header('Location: finished.php');
	}
?>

<html>

<head>
	<title>Instructions</title>
	<meta charset="utf-8">  
	<meta content="width=device-width, initial-scale=1.0" name="viewport" />

	<link rel="stylesheet" href="css/bootstrap.css"></link>
	<!-- <link rel="stylesheet" href="css/bootstrap-theme.css"></link> -->
	<link rel="stylesheet" href="css/font-awesome.css">
	<link rel="stylesheet" href="css/instructions.css">
	<link href='https://fonts.googleapis.com/css?family=Signika' rel='stylesheet' type='text/css'>
	<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
	<!-- <link rel="stylesheet" href="css/instructions1.css"></link> -->
</head>

<body>

	<div class="container">
	<div class="jumbotron" id="pageBox">

		<h2>Instructions - Troop scheduling</h2>

		<hr>

		<div class="row">
		<div class="col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">
		<div class="story" id="storyBox">
			<ul id="instructionList" class="list-group">
				<li class="list-group-item">
					Make a 7-day schedule for the various types of troops available with you to defend the following areas of your castle:</br> 
					<ul>
						<li>Outer Walls</li>
						<li>Watch Tower</li>
						<li>Main Gate</li>
					</ul>
				</li>
				<li class="list-group-item">
					The 7 types of troops with their capabilities of defending the different area(s) available with you are:- <br><br>
					<!-- <div id="tablediv" class="list-group-item"> -->
					<table class="table table-striped table-condensed table-bordered">
						<tr id="tablehead">
							<td>Troop:</td>
							<td>Forte Areas:</td>
						</tr>
						<tr>
							<td>Long Bow-man (A)</td>
							<td>Watch Tower</td>
						</tr>
						<tr>
							
							<td>Long Swords-man (B)</td>
							<td>Main Gate, Outer Walls</td>
						</tr>
						<tr>
							
							<td>Crossbow-man (C)</td>
							<td>Watch Tower, Outer Walls</td>
						</tr>
						<tr>
							
							<td>Ballista (D)</td>
							<td>Main Gate</td>
						</tr>
						<tr>
							
							<td>Slinger (E)</td>
							<td>Watch Tower, Outer Walls</td>
						</tr>
						<tr>
							
							<td>Axe-man (F)</td>
							<td>Outer Walls, Main Gate</td>
						</tr>
						<tr>
							
							<td>Bow-man (G)</td>
							<td>Watch Tower, Main Gate</td>
						</tr>
					</table>
					<!-- </div> -->
				</li>

				<li class="list-group-item">
					You have to allocate two types of troops per area per day. One for the early shift and one for the late shift.
				</li>
				<li class="list-group-item">Make the best available use of your troops keeping in mind the following points :
				<ul>
					<li>Each troop can be assigned duty only on one of its Forte Areas.</li>
					<li>Only one duty can be assigned to a troop on a day</li>
					<li>Every troop is entitled to mandatory day off. These are indicated with black cells in the lower table.<br>You can't assign shifts on days off.</li>
					<li>Some troops prefer to take another day off which is indicated by grey cells in the lower table.<br>Though that troop can be assigned duty on that day, it fetches negative points.</li>
					<li>The green cells in the lower table indicate strategic shifts i.e. the corresponding troop has higher than average performance in this shift. Allotting duties here fetches you more points</li>
					<li>Surely, soldiers dislike working too many late shifts. Therefore, the late shifts should be distributed as fairly as possible among the troops.<br>You should aim to assign exactly 3 late shifts to each troop over the 7-day planning period.</li>
					<li>Soldiers like it when they are given long rest (2 days or more).<br>Thus, each stretch of 2 or more days wherein that troop is not assigned any duty fetches you extra points.</li>
				</ul>
				</li>
			
			<div  align="center" class="list-group-item" id="image">
				<img id="screenshot" src="screenshots/screenshot1.png">
			</div>
			</ul>	
			<!-- </div> -->
		</div>
		</div>
		</div>

		<hr>

		<button type="button" class="btn btn-success" onclick="redirect()"  style="float:right;">I'm ready</button> 

	</div>
	</div>



	<script type="text/javascript" src="js/jquery.js"></script>
  	<script type="text/javascript" src="js/bootstrap.js"></script>
  	<script type="text/javascript" src="js/instructions1.js"></script>

</body>
</html>