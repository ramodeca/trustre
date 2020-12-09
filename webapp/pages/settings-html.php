
<template id="settings.html">
  <ons-page id="pageSettings">
    <ons-toolbar>
      <div class="left">
        <ons-toolbar-button onclick="myApp.open()">
          <ons-icon icon="fa-bars"></ons-icon>
        </ons-toolbar-button>
      </div>
      <div class="center scapade-font">
		Settings
	  </div>
    </ons-toolbar>
    
    <ons-list id="list-settings-level1">
		<ons-list-item tappable>
            <div class="left"><ons-icon icon="fa-hand-holding-usd"></ons-icon></div>
            <div class="center">My reservation requests</div>
        </ons-list-item>
        <ons-list-item tappable>
            <div class="left"><ons-icon icon="fa-home"></ons-icon></div>
            <div class="center">My properties</div>
        </ons-list-item>
        <ons-list-item tappable>
            <div class="left"><ons-icon icon="fa-user"></ons-icon></div>
            <div class="center">My profile</div>
        </ons-list-item>
	</ons-list>

    <div class="pageloader">
    	<div class="pageloaderText">
    		<div id="pageloader-text"></div>
    		<div class="pageloaderProgress"><ons-progress-circular indeterminate></ons-progress-circular></div>
    	</div>
    </div>
  </ons-page>
</template>
