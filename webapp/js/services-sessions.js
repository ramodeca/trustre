myApp.services.sessions = {
    logout: function() {

        $(".loader").fadeIn();

        $.ajax({
            type: "POST",
            url: "/api/v1/logout",
            // xhrFields: { withCredentials: true },
            dataType: 'json',
            success: function(response) {
                var cookieName = 'access_token';
                document.cookie = cookieName + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                window.location = "/webapp/private/logout.php";
            },
            error: function(response) {
                ons.notification.alert({
                    message: 'Error logging out',
                    title: 'Error',
                    buttonLabel: 'OK'
                });
            }
        });


    }
};