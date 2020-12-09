// App logic.
window.myApp = {};

document.addEventListener('init', function(event) {
  var page = event.target;

  // Each page calls its own initialization controller.
  if (myApp.controllers.hasOwnProperty(page.id)) {
    myApp.controllers[page.id](page);
  } else {
	console.log("Page " + page.id + " has not its own controller");      
  }
  
  // Prevent swipe back and forward on iOS by removing everything from the browsers history
  window.history.replaceState(null, null, "#");
});


window.myApp.open = function() {
	var menu = document.getElementById('menu');
	menu.open();
};
window.myApp.close = function() {
	var menu = document.getElementById('menu');
	menu.close();
};
window.myApp.load = function(page) {
	var content = document.getElementById('content');
	var menu = document.getElementById('menu');
	content.load(page).then(menu.close.bind(menu));
};

$(window).on('load', function(){
	
	// BEGIN - CHECK REDIRECTS
	var currentUrl = new URL(window.location.href);
	
	var param_code = currentUrl.searchParams.get("code");
	
	var param_error = currentUrl.searchParams.get("error");
	var param_error_description = currentUrl.searchParams.get("error_description");
	
	
	if (param_error == "access_denied"){		
		ons.notification.alert({
            message: 'Access has been denied: ' + param_error_description,
            title: 'Error',
            buttonLabel: 'OK'
        });
	}
	if (param_code){
		myApp.services.dtp.finishVerification(param_code);
	}
	// END - CHECK REDIRECTS
	
	$('.pageloaderIndex').fadeOut();
	
});