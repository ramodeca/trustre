<template id="verification.html">
	<ons-page id="pageVerification">
		<ons-toolbar>
            <div class="left">
				<ons-back-button></ons-back-button>
			</div>
			<div class="center scapade-font">
				Verification
			</div>
        </ons-toolbar>
        
        <ons-list>
        	<ons-list-header>Info to verify (data won't be shared)</ons-list-header>
        	<ons-list-item>
    			<div class="left"><ons-icon icon="fa-question-circle" class="list-item__icon"></ons-icon></div>
				<div class="center"><span class="list-item__title">Age: 18+</span><span class="list-item__subtitle">You must be of full legal age</span></div>
    		</ons-list-item>
        	<ons-list-item>
    			<div class="left"><ons-icon icon="fa-question-circle" class="list-item__icon"></ons-icon></div>
				<div class="center"><span class="list-item__title">Current balance: <span id="verification-liquidity">-</span>&euro;</span><span class="list-item__subtitle">Must be at least 2x monthly cost (liquidity)</span></div>
    		</ons-list-item>
    		<ons-list-item>
    			<div class="left"><ons-icon icon="fa-question-circle" class="list-item__icon"></ons-icon></div>
    			<div class="center"><span class="list-item__title">Avg. monthly income: <span id="verification-capacity">-</span>&euro;</span><span class="list-item__subtitle">Must be at least 3x monthly cost (capacity)</span></div>
    		</ons-list-item>
    		<ons-list-item>
    			<div class="left"><ons-icon icon="fa-question-circle" class="list-item__icon"></ons-icon></div>
    			<div class="center"><span class="list-item__title">Last year income: <span id="verification-stability">-</span>&euro;</span><span class="list-item__subtitle">Must be at least 3x annual cost (stable income)</span></div>
    		</ons-list-item>
    		
    		<ons-list-header>Data to share with landlord</ons-list-header>
    		<ons-list-item>
    			<div class="left"><ons-icon icon="fa-question-circle" class="list-item__icon"></ons-icon></div>
				<div class="center">Your full name</div>
    		</ons-list-item>
    		<ons-list-item>
    			<div class="left"><ons-icon icon="fa-question-circle" class="list-item__icon"></ons-icon></div>
				<div class="center">Your email</div>
    		</ons-list-item>
    		<ons-list-item>
    			<div class="left"><ons-icon icon="fa-question-circle" class="list-item__icon"></ons-icon></div>
				<div class="center">Your phone number</div>
    		</ons-list-item>
    		<ons-list-item>
    			<div class="left"><ons-icon icon="fa-question-circle" class="list-item__icon"></ons-icon></div>
				<div class="center">Your account number</div>
    		</ons-list-item>
    		
    		<ons-list-item>
    			<div class="center"><ons-button id="verification-button" modifier="large">Verify</ons-button></div>
    		</ons-list-item>
    		
        </ons-list>

    	<div class="pageloader">
        	<div class="pageloaderText">
        		<div class="pageloaderProgress"><ons-progress-circular indeterminate></ons-progress-circular></div>
        	</div>
        </div>
	</ons-page>
</template>
