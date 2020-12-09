myApp.services.users = {
    getMyInfo: function() {

        $.ajax({
            type: "GET",
            url: "/api/v1/me",
            dataType: 'json',
            success: function(response) {
                $("#input-firstname").val(response.firstname);
                $("#input-firstname").focus();

                $("#input-lastname").val(response.lastname);
                $("#input-lastname").focus();

                if ((response.birthdate != null) && (response.birthdate.length == 10)) {
                    var arrayDate = response.birthdate.split("-");
                    if (arrayDate.length == 3) {
                        $("#input-birthdate-day").val(arrayDate[2]);
                        $("#input-birthdate-day").focus();

                        $("#input-birthdate-month").val(arrayDate[1]);

                        $("#input-birthdate-year").val(arrayDate[0]);
                        $("#input-birthdate-year").focus();
                    }
                }

                if ((response.gender != null) && (response.gender > 0)) {
                    $("#input-gender").val(response.gender);
                }

                if ((response.comms_opt_in != null) && (response.comms_opt_in == 1)) {
                    $("#check-optin-yes").prop('checked', true);
                }

                $("#input-firstname").focus();
                $("#input-firstname").blur();
                $(".pageloader").fadeOut();

            },
            error: function(response) {
                ons.notification.alert({
                    message: 'Error retrieving your user data',
                    title: 'Error',
                    buttonLabel: 'OK'
                });
            }
        });


    },

    saveProfile: function() {
        $('#button-save').attr("disabled", "true");
        event.preventDefault();
        var inputFirstName = $('#input-firstname').val();
        var inputLastName = $('#input-lastname').val();

        if (!inputFirstName) {
            $('#button-save').removeAttr("disabled");
            ons.notification.alert({
                message: 'First name is required',
                title: 'Warning'
            });
            return;
        }
        if (!inputLastName) {
            $('#button-save').removeAttr("disabled");
            ons.notification.alert({
                message: 'Last name is required',
                title: 'Warning'
            });
            return;
        }

        var formdata = new Object();
        formdata.firstname = inputFirstName;
        formdata.lastname = inputLastName;

        var jsonData = JSON.stringify(formdata);

        var responseObj;

        $.ajax({
            type: "PUT",
            url: "/api/v1/me",
            dataType: 'json',
            data: jsonData,
            success: function(response) {
                $('#menu-greetings-username').html(response.user.firstname);
                Cookies.set('access_token', response.token, {
                    expires: 365,
                    secure: true
                });
                ons.notification.toast('Your profile has been updated', {
                    timeout: 1000,
                    animation: 'fall'
                })
                myApp.load('new-transaction.html');
            },
            error: function(response) {
                $('#button-save').removeAttr("disabled");
                responseObj = JSON.parse(response.responseText);
                if (responseObj.error.code == 4000) {
                    ons.notification.alert({
                        message: 'Error saving your data',
                        title: 'Error',
                        buttonLabel: 'OK',

                    });
                } else {
                    ons.notification.alert({
                        message: 'Please try again',
                        title: 'Error',
                        buttonLabel: 'OK',

                    });
                }
            }
        });
    }
};