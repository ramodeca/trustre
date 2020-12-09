myApp.controllers = {

	//  Menu Page Controller
	pageMenu : function(page) {
	},
	
	//  Items Home Page Controller
	pageItemsHome: function(page) {
	},

	//  Items Page Controller
	pageItems : function(page) {
		myApp.services.items.getItemsPageListItems();
	},
	
	//  Item detail Page Controller
	pageItemDetail: function(page) {
	},
	
	//  Verification Page Controller
	pageVerification: function(page) {
	},
	
	//  Verification Results Page Controller
	pageVerificationResults: function(page) {
	},
		
	//  Settings Home Page Controller
	pageSettingsHome : function(page) {
	},
	
	//  Settings Page Controller
	pageSettings : function(page) {
		$(".pageloader").fadeOut();
	},
	
	//  My Profile Settings Page Controller
	pageSettingsMyProfile : function(page) {
		myApp.services.users.getMyInfo();
	},

};
