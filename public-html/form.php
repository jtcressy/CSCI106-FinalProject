<!DOCTYPE HTML>
<?php session_start(); ?>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="author" content="Joel Cressy">
        <meta name="description" content="A blog about servers, networking and other related topics">
        <!-- bootstrap CSS from CDN -->
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

        <!-- Optional theme -/->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
        -->
        <!-- jquery -->
        <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
        <!-- Latest compiled and minified JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        <script src="js/main.js"></script>
        <link rel="stylesheet" href="css/main.css">
        <link rel="stylesheet" href="css/material-shadows.css">
        <?php
        
        if (isset($_POST["value"])){
            $_SESSION["value"] = $_POST["value"];
        }
        $value = $_SESSION["value"];
        ?>
        <title>Down To The Wire</title>
    </head>
    <body id="body" onload="bodyOnLoad()">
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="index.html">Down To The Wire</a>
                </div>
                <div id="navbar" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>
                            <a href="adventure-in-raidz-recovery.html">RAID-Z Recovery</a>
                        </li>
                        <li>
                            <a href="form.php">Form Demo</a>
                        </li>
                        <li>
                            <a href="phys-compute-server.html">Dr. Workman's New Server</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container">
            <div class="container main-content boxshadow-z3">
                <h1 id="title"></h1>
                <h3 id="subtitle"></h3>
                <div id="content">
                    <label for="value">Saved value in session: </label>
                    <span name="value"><?php print_r($value); ?></span>
                    <form action="form.php" method="POST">
                        <h3>Enter some text to be saved to your session:</h3>
                        <input type="text" name="value"/>
                        <input type="button" value="Submit" name="submit" type="submit"/>
                    </form>
                </div>
            </div>
        </div>
    </body>
</html>