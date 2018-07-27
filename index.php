<?php $userIP = $_SERVER['REMOTE_ADDR'] == '127.0.0.1' ? '98.209.224.5' : $_SERVER['REMOTE_ADDR']; ?>
<!doctype html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        
        <title>Maddalena est directrice artistique freelance pour le web et le mobile</title>
        <meta name="description" content="">
        <meta name="author" content="">
        
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
        
        <link rel="icon" type="image/png" href="images/favicon.ico" />
        
        <script type="text/javascript" src="//use.typekit.net/acf5yea.js"></script>
        <script type="text/javascript">try{Typekit.load();}catch(e){}</script>

        <link rel="stylesheet" href="css/icomoon.css">
        <link rel="stylesheet" href="css/main.css">

        <!-- GAnalytics -->
        <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-47370801-2', 'maddalenavismara.com');
            ga('send', 'pageview');
        </script>
    </head>

    <body class="reddish">
        <section id="animation">
            <a class="spiro1 icon-logo_1" href="#" onclick="ga('send', 'event', 'global', 'Spiro Click', 'Clicked on the Spirograph (and switched colors)');"></a>
            <a class="spiro2 icon-logo_2" href="#" onclick="ga('send', 'event', 'global', 'Spiro Click', 'Clicked on the Spirograph (and switched colors)');"></a>
        </section>
        <section id="content">
            <h1><span>Maddalena Vismara</span><br />Designer for all things digital<br />-</h1>
            <p class="socials">
                <a target="_blank" href="http://behance.net/m_vismara" onclick="ga('send', 'event', 'global', 'Behance click', 'Clicked on Behance link');" class="icon-be"></a>
                <a target="_blank" href="http://dribbble.com/mad" onclick="ga('send', 'event', 'global', 'Dribbble click', 'Clicked on Dribbble link');" class="icon-kjh"></a>
                <a target="_blank" href="http://www.linkedin.com/profile/view?id=168762918" onclick="ga('send', 'event', 'global', 'LinkedIn click', 'Clicked on LinkedIn link');" class="icon-in"></a>
                <a target="_blank" href="mailto:maddalena.vismara@gmail.com" onclick="ga('send', 'event', 'global', 'Contact click', 'Clicked on mailto link');" class="icon-mail"></a>
            </p>
            
        </section>

        <section id="wind-notice"></section>

        <!-- JS -->
        <script type="text/javascript" src="vendors/jquery/jquery-2.0.3.min.js"></script>
        <script type="text/javascript" src="vendors/jquery/jquery.tap.min.js"></script>
        <script type="text/javascript" src="vendors/jquery/jquery-transit-0.9.9.min.js"></script>
        <?php echo '<script type="text/javascript">var userIP = "' . $userIP . '";</script>'; ?>
        <script type="text/javascript" src="js/app.js"></script>
    </body>
</html>