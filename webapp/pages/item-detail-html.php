<template id="itemDetail.html">
	<ons-page id="pageItemDetail">
		<ons-toolbar>
            <div class="left">
				<ons-back-button></ons-back-button>
			</div>
			<div class="center scapade-font" id="apartment-title">
			</div>
        </ons-toolbar>
        
        <ons-list>
        	<ons-list-item id="apartment-image"></ons-list-item>
    		<ons-list-item>
    			<div class="left"><ons-icon icon="fa-ruler-combined" class="list-item__icon"></ons-icon></div>
				<div class="center"><span id="apartment-size">-</span>&nbsp;sq/ft</div>
    		</ons-list-item>
    		<ons-list-item>
    			<div class="left"><ons-icon icon="fa-bed" class="list-item__icon"></ons-icon></div>
				<div class="center"><span id="apartment-bedrooms">-</span>&nbsp;bedrooms</div>
    		</ons-list-item>
    		<ons-list-item>
    			<div class="left"><ons-icon icon="fa-bath" class="list-item__icon"></ons-icon></div>
				<div class="center"><span id="apartment-bathrooms">-</span>&nbsp;bathrooms</div>
    		</ons-list-item>
    		<ons-list-item>
    			<div class="left"><ons-icon icon="fa-coins" class="list-item__icon"></ons-icon></div>
				<div class="center"><span id="apartment-price">-</span>&nbsp;&euro;/month</div>
    		</ons-list-item>
    		
    		<ons-list-item>
    			<div class="center" id="list-item-verification-button"></div>
    		</ons-list-item>
    		
        </ons-list>

    	<div class="pageloader">
        	<div class="pageloaderText">
        		<div class="pageloaderProgress"><ons-progress-circular indeterminate></ons-progress-circular></div>
        	</div>
        </div>
	</ons-page>
</template>
