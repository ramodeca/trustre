<template id="verification-results.html">
	<ons-page id="pageVerificationResults">
		<ons-toolbar>
            <div class="left">
				<ons-back-button></ons-back-button>
			</div>
			<div class="center scapade-font">
				Verification results
			</div>
        </ons-toolbar>
        
        <ons-list>
        	<ons-list-header>Verified information</ons-list-header>
        	<ons-list-item>
    			<div class="left"><ons-icon id="icon-age" icon="fa-times-circle" class="list-item__icon" style="color: #df4b4b;"></ons-icon></div>
				<div class="center"><span class="list-item__title">Age: 18+</span><span class="list-item__subtitle">You must be of full legal age</span></div>
    		</ons-list-item>
        	<ons-list-item>
    			<div class="left"><ons-icon id="icon-current-balance" icon="fa-times-circle" class="list-item__icon" style="color: #df4b4b;"></ons-icon></div>
				<div class="center"><span class="list-item__title">Current balance</span><span class="list-item__subtitle">Must be at least 2x monthly cost (liquidity)</span></div>
    		</ons-list-item>
    		<ons-list-item>
    			<div class="left"><ons-icon id="icon-avg-monthly-income" icon="fa-times-circle" class="list-item__icon" style="color: #df4b4b;"></ons-icon></div>
    			<div class="center"><span class="list-item__title">Avg. monthly income</span><span class="list-item__subtitle">Must be at least 3x monthly cost (capacity)</span></div>
    		</ons-list-item>
    		<ons-list-item>
    			<div class="left"><ons-icon id="icon-last-year-income" icon="fa-times-circle" class="list-item__icon" style="color: #df4b4b;"></ons-icon></div>
    			<div class="center"><span class="list-item__title">Last year income</span><span class="list-item__subtitle">Must be at least 3x annual cost (stable income)</span></div>
    		</ons-list-item>
    		
    		<ons-list-header>Information for the landlord</ons-list-header>
    		<ons-list-item>
    			<div class="left"><ons-icon id="icon-fullname" icon="fa-times-circle" class="list-item__icon" style="color: #df4b4b;"></ons-icon></div>
				<div class="center"><span class="list-item__title">Full name:</span><span class="list-item__subtitle"><span id="verification-result-fullname">-</span></span></div>
    		</ons-list-item>
    		<ons-list-item>
    			<div class="left"><ons-icon id="icon-email" icon="fa-times-circle" class="list-item__icon" style="color: #df4b4b;"></ons-icon></div>
				<div class="center"><span class="list-item__title">Email:</span><span class="list-item__subtitle"><span id="verification-result-email">-</span></span></div>
    		</ons-list-item>
    		<ons-list-item>
    			<div class="left"><ons-icon id="icon-phone" icon="fa-times-circle" class="list-item__icon" style="color: #df4b4b;"></ons-icon></div>
				<div class="center"><span class="list-item__title">Phone number:</span><span class="list-item__subtitle"><span id="verification-result-phone">-</span></span></div>
    		</ons-list-item>
    		<ons-list-item>
    			<div class="left"><ons-icon id="icon-account-number" icon="fa-times-circle" class="list-item__icon" style="color: #df4b4b;"></ons-icon></div>
				<div class="center"><span class="list-item__title">Account number:</span><span class="list-item__subtitle"><span id="verification-result-account-number">-</span></span></div>
    		</ons-list-item>
    		
    		<ons-list-item>
    		</ons-list-item>
    		<ons-list-item id="eligibility-message" style="display: none; color: #df4b4b;">
				Unfortunately you are not eligible to rent this property
    		</ons-list-item>
    		
    		<ons-list-item>
				<ons-button id="reservation-button" modifier="large" onclick="myApp.services.verifications.sendReservationRequest()">Send reservation request</ons-button>
    		</ons-list-item>
    		
        </ons-list>

    	<div class="pageloader">
        	<div class="pageloaderText">
        		<div class="pageloaderProgress"><ons-progress-circular indeterminate></ons-progress-circular></div>
        	</div>
        </div>
	</ons-page>
</template>
