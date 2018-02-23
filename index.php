<!DOCTYPE html>
<html>
<head>
	<title> Speed Typing </title>
	<link rel="stylesheet" type="text/css" href="styles/home_page.css">
</head>
<body>

	<div id="topbar">
		<a id="login" href="javascript:void(0)">Login</a>
		<a href="javascript:void(0)">Sign Up</a>
	</div>

	<div id="navbar">
		<a class="active" href="javascript:void(0)">Home</a>
		<a id="gameslvl" href="javascript:void(0)">Quick Game</a>
		<a href="javascript:void(0)">Level 1</a>
		<a href="javascript:void(0)">Level 2</a>
		<a href="javascript:void(0)">Level 3</a>
		<a id="inform" href="javascript:void(0)">About</a>
		<a href="javascript:void(0)">Contact</a>
	</div>
  	
  	<div class="top_body"
  		<p> body1 </p>
  		
  	</div>
  	
  	<div class="body">
		<table align="center">
    		<tr>
    			<td align="center">
           			<a href="quick_game.php"><img src="./images/quick_game.PNG" class="quick_game"></a>
       			</td>
        	</tr>
   			<tr>
    			<td align="center"><a href="quick_game.php" class="text_title">Quick Game</a></td>
    		</tr>
		</table>
	</div>
	<div class="sub_body">
		<table align="center">
    		<tr>
    			<td align="center">
           			<a href="level_1.php"><img src="./images/level_1.PNG" class="levels"></a>
       			</td>
       			<td align="center">
           			<a href="level_2.php"><img src="./images/level_2.PNG" class="levels"></a>
       			</td>
       			<td align="center">
           			<a href="level_3.php"><img src="./images/level_3.PNG" class="levels"></a>
       			</td>
        	</tr>
   			<tr>
    			<td align="center"><a href="level_1.php" class="text_title">Level 1</a></td>
    			<td align="center"><a href="level_2.php" class="text_title">Level 2</a></td>
    			<td align="center"><a href="level_2.php" class="text_title">Level 3</a></td>
    		</tr>
		</table>
  	</div>
  	
  	<div class="footer">
  		<p> footer </p>
  	</div>
  	
  	<div class="footer1">
  		<div id="top">
			<p><a href="#topbar">&#8593; Top &#8593; </a> </p>
	 	</div>
  	</div>

	<script>
		window.onscroll = function() {myFunction()};

		var navbar = document.getElementById("navbar");
		var sticky = navbar.offsetTop;

		function myFunction() {
  			if (window.pageYOffset >= sticky) {
    			navbar.classList.add("sticky")
  			} else {
    			navbar.classList.remove("sticky");
  			}
		}
	</script>

</body>
</html>