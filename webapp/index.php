<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	<title>TrustRE</title>

	<link rel="manifest" href="manifest.json">

	<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
	<meta http-equiv="Pragma" content="no-cache" />
	<meta http-equiv="Expires" content="0" />

	<meta name="mobile-web-app-capable" content="yes">
	<meta name="application-name" content="TrustRE">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-title" content="TrustRE">
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">		
	<meta name="theme-color" content="#545454">
	<meta name="msapplication-navbutton-color" content="#545454">	
	<meta name="msapplication-starturl" content="/">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no">
	<meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
	<meta content="IE=7; IE=8" http-equiv="X-UA-Compatible">

	<link href="https://fonts.googleapis.com/css?family=Arimo|Cantata+One|Montserrat" rel="stylesheet">
	<link rel="stylesheet" href="https://unpkg.com/onsenui/css/onsenui.min.css">
	<link rel="stylesheet" href="https://unpkg.com/onsenui/css/onsen-css-components.min.css">
	<link href="css/main.css" rel="stylesheet">
</head>

<body>
	
	<div class="pageloaderIndex">
    	<div class="pageloaderText">
    		<div class="pageloaderProgress"><ons-progress-circular indeterminate></ons-progress-circular></div>
    	</div>
    </div>

	<ons-splitter>
		<ons-splitter-side id="menu" side="left" width="250px" collapse="(max-width: 640px)">
			<ons-page id="pageMenu">

				<ons-toolbar>
			      <div class="left">
			        <ons-toolbar-button onclick="myApp.close()">
			          <ons-icon icon="fa-bars"></ons-icon>
			        </ons-toolbar-button>
			      </div>
			      <div class="center header-logo">
			        <img src="assets/images/trustre-logo.png" style="max-width: 90px; margin-top: 5px;"/>
			      </div>
			    </ons-toolbar>

    			<ons-list-title modifier="scapade-font">Welcome <span id="menu-greetings-username">Mr. Guest</span></ons-list-title>
				<ons-list modifier="scapade-font">
                    <ons-list-item onclick="myApp.load('items-home.html');" tappable>
                      	<div class="left">
            				<ons-icon icon="fa-home" style="width: 1rem;"></ons-icon>
            			</div>
            			<div class="center">
            				Apartments
            			</div>
                    </ons-list-item>
                    <ons-list-item onclick="myApp.load('settings-home.html');" tappable>
						<div class="left">
							<ons-icon icon="fa-cog" style="width: 1rem;"></ons-icon>
						</div>
						<div class="center">
							Settings
						</div>
					</ons-list-item>
				</ons-list>			
				
			</ons-page>
		</ons-splitter-side>

		<ons-splitter-content id="content" page="items-home.html">
		</ons-splitter-content>

	</ons-splitter>

	
    <?php
        include_once 'pages/items-home-html.php';
        include_once 'pages/items-html.php';
        include_once 'pages/item-detail-html.php';
        include_once 'pages/verification-html.php';
        include_once 'pages/verification-results-html.php';
        include_once 'pages/settings-home-html.php';
        include_once 'pages/settings-html.php';
    ?>

	<script src="js/libs/jquery-3.3.1.min.js"></script>
	<script src="https://unpkg.com/onsenui/js/onsenui.min.js"></script>
	<script src="js/libs/postman-util-lib-bundle.js"></script>

	<script src="js/app.js"></script>
	<script src="js/controllers.js"></script>
	<script src="js/services.js"></script>	
	<script src="js/services-sessions.js"></script>
	<script src="js/services-users.js"></script>	
	<script src="js/services-items.js"></script>
	<script src="js/services-verifications.js"></script>
	<script src="js/services-dtp.js"></script>
	
</body>

</html>