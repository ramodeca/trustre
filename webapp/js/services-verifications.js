myApp.services.verifications = {
    
	loadVerificationDetail: function(itemId) {
		
		var item = myApp.services.items.getItemById(itemId);
		
		// setTimeout only for demo purposes
		setTimeout(() => {
			$('#verification-liquidity').html(item.price * 2);
			$('#verification-capacity').html(item.price * 3);
			$('#verification-stability').html(item.price * 12 * 3);
			
			$('#verification-button').attr('onclick', 'myApp.services.dtp.initiateAuthorize(' + item.price + ')');
			
			$(".pageloader").fadeOut();
			
		}, 500);   	
    },
    
    sendReservationRequest: function() {
    	ons.notification.alert({
            message: 'To be developed in the future...',
            title: 'Good luck!',
            buttonLabel: 'OK',

        });
    }
};