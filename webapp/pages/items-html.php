
<template id="items.html">
  <ons-page id="pageItems">
    <ons-toolbar>
      <div class="left">
        <ons-toolbar-button onclick="myApp.open()">
          <ons-icon icon="fa-bars"></ons-icon>
        </ons-toolbar-button>
      </div>
      <div class="center scapade-font">
		Apartments for rent
	  </div>
    </ons-toolbar>
    
    <ons-list id="items-list">
	</ons-list>

    <div class="pageloader">
    	<div class="pageloaderText">
    		<div class="pageloaderProgress"><ons-progress-circular indeterminate></ons-progress-circular></div>
    	</div>
    </div>
  </ons-page>
</template>
