myApp.services.items = {
		
	apartmentsMockupList: [
		{
			id: 1,
			type: "Apartment",
			city: "Madrid",
			country: "Spain",
			size: 750,
			bedrooms: 1,
			bathrooms: 1,
			price: 1000,
			imageURL: "assets/images/apartments/1.jpg"
		},
		{
			id: 2,
			type: "Duplex",
			city: "Sevilla",
			country: "Spain",
			size: 1000,
			bedrooms: 2,
			bathrooms: 1,
			price: 900,
			imageURL: "assets/images/apartments/2.jpg"
		},
		{
			id: 3,
			type: "Penthouse",
			city: "Barcelona",
			country: "Spain",
			size: 1400,
			bedrooms: 3,
			bathrooms: 2,
			price: 1800,
			imageURL: "assets/images/apartments/3.jpg"
		},
		{
			id: 4,
			type: "Studio",
			city: "Valencia",
			country: "Spain",
			size: 200,
			bedrooms: 0,
			bathrooms: 1,
			price: 150,
			imageURL: "assets/images/apartments/4.jpg"
		}		
	],
	
	getItemById : function(itemId) {
		var result = null;
		var counter = 0;
		
		// Only use with mock data
		if(apartmentsList.length > 0) {
			while ((counter < apartmentsList.length) && (result == null)) {
				if(apartmentsList[counter].id == itemId) {
					result = apartmentsList[counter];
				}
				counter++;
	        }
		}	
		
		return result;
	},

    getItemsPageListItems: function() {
    	apartmentsList = myApp.services.items.apartmentsMockupList;
    	
    	for (i = 0; i < apartmentsList.length; i++) {
            $('#items-list').append(myApp.services.items.getHtmlListItem(apartmentsList[i]));
        }               
    	
    	$(".pageloader").fadeOut();    	
    },

    getHtmlListItem: function(item) {     
        htmlNewItem = '<ons-list-item onclick="document.querySelector(\'#itemsHomeNavigator\').pushPage(\'itemDetail.html\').then(myApp.services.items.loadItemDetail(' + item.id + '));" tappable>' +
					        '<div class="left">' +
					        '<img class="list-item__thumbnail" src="' + item.imageURL + '" style="width: 150px; height: 100px;">' +
					      '</div>' +
					      '<div class="center">' +
					        '<span class="list-item__title">' + item.type + ' in ' + item.city + '</span><span class="list-item__subtitle">' + item.size + ' sq/ft, ' + item.bedrooms + ' beds, ' + item.bathrooms + ' baths</span><span class="list-item__subtitle">' + item.price + ' &euro;/month</span>' +
        					'</div>' +
        				'</ons-list-item>';

        return htmlNewItem;
    },
    
    loadItemDetail: function(itemId) {
    	// setTimeout only for demo purposes
    	setTimeout(() => {
    		var item = myApp.services.items.getItemById(itemId);

    		$('#apartment-title').html(item.type + ' in ' + item.city);
    		$('#apartment-image').html('<img class="list-item__thumbnail" src="' + item.imageURL + '" style="width: 100%; height: auto;"/>');
    		$('#apartment-size').html(item.size);
    		$('#apartment-bedrooms').html(item.bedrooms);
    		$('#apartment-bathrooms').html(item.bathrooms);
    		$('#apartment-price').html(item.price);
    		
    		$('#list-item-verification-button').html('<ons-button modifier="large" onclick="document.querySelector(\'#itemsHomeNavigator\').pushPage(\'verification.html\').then(myApp.services.verifications.loadVerificationDetail(' + item.id + '));">Reserve now</ons-button>');
    		
    		$(".pageloader").fadeOut();
    		return;
    	}, 500);  	
    },
};