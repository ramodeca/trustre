myApp.services.dtp = {

	getKid: function() {
		return "TrustRE_KEY";
	},

	getClientId: function() {
		return "-UVngX0pSTmEMIPZcbCTY"; // only for hackathon purposes!
	},

	getConfig: function() {

		// JWK that contains private and public key for test, you can change this value but need to register in OP to make it works.
		var jwk = {
			"kty": "RSA",
			"n": "vaFw6y9VgOgsCZhJnMKM3nEmattuJ57QXiGoccI6bARHXjnUzTfmhayT1MRwVo3bgfj6kSAW0IxV8ccKlxSsXZET1yH4N-5LrWoLbhbeC9LNEU4pa26aPkltwVGdrhXMAvezY19E8j1evEiQVQyGEtUjHyT7bBz3phXoDjWMdnm9jNlkFFBSRfUvfXD03kRzffOT-3tg-OC1kH1MajgvKNdqh0BjvbWYXAbJgwf2oVo8oW19-U7rt1uxJvBrp5LDyWouorQmw66dgDpaxyUM3wcz5Ozw5Edep_1ke72Lbrl7a-qe0jweeFOUN5VtaCehsnFSx5qBS4E21FGC7UZyGQ",
			"e": "AQAB",
			"d": "M4KI87mV1kA6xhhx1n0aWsoNj3UvhN-k5gzqfowt5m17HWNEJMKMgb8RIPiDM1-xQqrpFUbMK7YTGmvguo1JDNl9tDBsBnVaZS6rECpyAnAueAbtRVtz1nuHrr2GwWT2V9AFEHcueUamVyq22gNe3_q5YZpgGUv9EUZeFI4DK6MKFGlJkzU0yMLWOiubi_08sI5-FRL7c93nNs82xALlqgRGvAC0Ua-BBr15dbpWXZO4u7wN2WwZSxVqM3nPzK_Lxnb18O-twDcfRQlJ-fu8vFXOGqGMU87ZpMBr5wEXpNSBvdkxI-0gt0QPXbXNSkNmptP5OvKLU_3KhOL8E32CCQ",
			"p": "7HdTNPMDCsyN5Mzm93hGMCvup5ot2NMczYUUVOGegems68qPp4YWJvZlw2MLFBLSgDKTYJAFcolGOE3pjdiI4Td4hVPM6FoyM7gEqBRrJNc20UyMlYIl8MD5Hq6m8OJoWXU13LiBatQpyxToNS4moLtGpOIjVTASYaWoWCv7bN8",
			"q": "zUupPmUbz4rHzIBd9gqb3MqCkfZa1yuG1OiLt1JkGZq2Z9bmSIHFT4rAg56uoB7ZyUSmCPhJWRg-hia1qATTwCPAL9pP-xWiuuKiBoSC_dvjcn5hsee1JxlY4KhYr82wJnH9gkOhRJcQ3qbfkMBdUBVMjwXTHdzkDfJFLjpwiAc",
			"dp": "t7CiJHm6nUL13w0FRqxZ6cXW6L-uacblkwmUF7QEi-rYd3qtSXex8aZquvNPgdJ1Tzz6m4KFmMnmkIqFqbjR7BJJP1kvzjdy1BZZF7B04vOEE-ahNusZSgK-AwWtjWZzpTqWEtYJQtF5fdbJ47XsL-QLJr68r8peHRiww323HIU",
			"dq": "kqU_SeCzkvcRbZUsiTpex8KorlcJ4LWo5KEQXG0wL9ICBf7OFHEOXplAl0RcfOhMraap67JfwpK85trz3AdGsvNWr1gE1dhIm7KUBo_Vejz-JaT9aDWZg0pp4GCgqUQGVhALBGgG5JX8aO9Ot3mRrkjonSmN-sD07rlmjXUVOTU",
			"qi": "gYv98jxf9B6dnYUh1CDqRVKS8fDsEWXTilE1N5FnfCIvhs37LhKasFzq2G0qK33RpeQYrp2Qi6zSsyiwIt8ccS6TfsI2J1Q1I79iu0X6ekV_0U5PfwFh2sq6QLvWFS7GAIwCkLAuOEVbwxEKxQ1pkB00SWVy28ErRJjhGu2JOyU",
			"kid": myApp.services.dtp.getKid(),
			"use": "sig"
		}

		// Config object used to generate automatically tokens and more...
		var cfg = {
			// JWK containing the private key for sign the security tokens
			jwk,
			// The client_id that is registeredin the OP server.
			clientID: myApp.services.dtp.getClientId(),
			// The aud parameter accepted by the OP
			aud: "https://op.iamid.io"
		}

		return cfg;
	},

	getClientAssertionToken: function() {
		// Config object used to generate automatically tokens and more...
		var cfg = myApp.services.dtp.getConfig();

		var privateKeyJwt = pmlib.clientAssertPrivateKey(cfg.jwk, cfg.clientID, cfg.aud);
		return privateKeyJwt;
	},

	initiateAuthorize: function(monthlyCost) {

		$(".pageloader").fadeIn();

		var request_object = {
			"response_type": "code",
			"redirect_uri": "http://localhost/webapp",
			"nonce": Math.random().toString(36).substring(7),
			"scope": "openid",
			"state": "myState",
			"claims": {
				"purpose": "Landlord would like to validate the following information:",
				"id_token": {
					"assertion_claims": {
						"age": {
							"purpose": "You must be of full legal age (+18)",
							"essential": true,
							"ial": 1,
							"assertion": {
								"gte": 18
							}
						},
						"total_balance": {
							"purpose": "Your current balance should be at least 2x monthly cost",
							"essential": true,
							"ial": 1,
							"assertion": {
								"props": {
									"amount": {
										"gte": monthlyCost * 2
									},
									"currency": {
										"eq": "EUR"
									}
								}
							}
						},
						"average_monthly_money_in": {
							"purpose": "Your avg. monthly income should should be at least 3x monthly cost",
							"essential": true,
							"ial": 1,
							"assertion": {
								"props": {
									"amount": {
										"gte": monthlyCost * 3
									},
									"currency": {
										"eq": "EUR"
									}
								}
							}
						},
						"last_year_money_in": {
							"purpose": "Your last year income should be at least 3x annual cost",
							"essential": true,
							"ial": 1,
							"assertion": {
								"props": {
									"amount": {
										"gte": monthlyCost * 12 * 3
									},
									"currency": {
										"eq": "EUR"
									}
								}
							}
						}
					},
					"family_name": {
						"purpose": "Your family name is needed for contact purposes and for the rental agreement",
						"essential": true
					},
					"given_name": {
						"purpose": "Your given name is needed for contact purposes and for the rental agreement",
						"essential": true
					},
					"email": {
						"purpose": "An email is needed for contact purposes",
						"essential": true
					},
					"phone_number": {
						"purpose": "A phone number is needed for contact purposes",
						"essential": true
					},
					"bank_account": {
						"purpose": "Your bank account number is needed for the rental agreement",
						"essential": true
					},
				}
			}
		}

		// Create a request Object
		var cfg = myApp.services.dtp.getConfig();
		var payload = Object.assign({
			aud: cfg.aud,
			iss: cfg.clientID,
			client_id: cfg.clientID
		}, request_object, request_object)
		var requestObject = pmlib.jwtSign(cfg.jwk, payload, {
			kid: cfg.jwk.kid
		})

		var postData = new Object();
		postData.client_assertion_type = 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer';
		postData.client_assertion = myApp.services.dtp.getClientAssertionToken();
		postData.request = requestObject;

		$.ajax({
			type: "POST",
			url: "https://live.iamid.io/initiate-authorize",
			dataType: 'json',
			data: postData,
			success: function(response) {
				var urlRedirect = 'https://live.iamid.io/web/login?request_uri=' + response.request_uri;
				window.location.replace(urlRedirect);
			},
			error: function(response) {
				ons.notification.alert({
					message: 'Please try again',
					title: 'Error',
					buttonLabel: 'OK',

				});

				$(".pageloader").fadeOut();
			}
		});
	},

	finishVerification: function(authorizeCallbackCode) {

		var itemId = 1;

		//console.log('code: ' + authorizeCallbackCode);
		document.querySelector('#itemsHomeNavigator').pushPage('verification-results.html');
		//document.querySelector('#itemsHomeNavigator').pushPage('verification.html').then(myApp.services.verifications.loadVerificationDetail(1));

		var postData = new Object();
		postData.grant_type = 'authorization_code';
		postData.code = authorizeCallbackCode;
		postData.client_assertion_type = 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer';
		postData.client_assertion = myApp.services.dtp.getClientAssertionToken();
		postData.redirect_uri = 'http://localhost/webapp';

		$.ajax({
			type: "POST",
			url: "https://live.iamid.io/token",
			dataType: 'json',
			data: postData,
			success: function(response) {
				var verificationPassed = true;
				results = myApp.services.dtp.parseJWT(response.id_token);

				// Age
				if (results.assertion_claims.age.result) {
					$('#icon-age').attr("icon", "fa-check-circle");
					$('#icon-age').css('color', '#45bdab');
				} else {
					verificationPassed = false;
				}

				// Current balance
				if (results.assertion_claims.total_balance.result) {
					$('#icon-current-balance').attr("icon", "fa-check-circle");
					$('#icon-current-balance').css('color', '#45bdab');
				} else {
					verificationPassed = false;
				}

				// Avg monthly income
				if (results.assertion_claims.average_monthly_money_in.result) {
					$('#icon-avg-monthly-income').attr("icon", "fa-check-circle");
					$('#icon-avg-monthly-income').css('color', '#45bdab');
				} else {
					verificationPassed = false;
				}

				// Last year income
				if (results.assertion_claims.last_year_money_in.result) {
					$('#icon-last-year-income').attr("icon", "fa-check-circle");
					$('#icon-last-year-income').css('color', '#45bdab');
				} else {
					verificationPassed = false;
				}



				// Full name
				if ((results.given_name) && (results.family_name)) {
					$('#verification-result-fullname').html(results.given_name + ' ' + results.family_name);
					$('#icon-fullname').attr("icon", "fa-check-circle");
					$('#icon-fullname').css('color', '#45bdab');
				} else {
					verificationPassed = false;
				}

				// Email
				if (results.email) {
					$('#verification-result-email').html(results.email);
					$('#icon-email').attr("icon", "fa-check-circle");
					$('#icon-email').css('color', '#45bdab');
				} else {
					verificationPassed = false;
				}

				// Phone number
				if (results.phone_number) {
					$('#verification-result-phone').html(results.phone_number);
					$('#icon-phone').attr("icon", "fa-check-circle");
					$('#icon-phone').css('color', '#45bdab');
				} else {
					verificationPassed = false;
				}

				// Account number
				if (results.bank_account.identifiers[1].identification) {
					$('#verification-result-account-number').html(results.bank_account.identifiers[1].identification);
					$('#icon-account-number').attr("icon", "fa-check-circle");
					$('#icon-account-number').css('color', '#45bdab');
				} else {
					verificationPassed = false;
				}


				if (!verificationPassed) {
					$('#eligibility-message').show();
					$('#reservation-button').attr("disabled", true);
				}

				$(".pageloader").fadeOut();
			},
			error: function(response) {
				ons.notification.alert({
					message: 'Please try again',
					title: 'Error',
					buttonLabel: 'OK'
				}).then(function() {
					document.querySelector('#itemsHomeNavigator').popPage();
				});

			}
		});
	},

	parseJWT: function(token) {
		var base64Url = token.split('.')[1];
		var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
		var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
			return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
		}).join(''));

		return JSON.parse(jsonPayload);
	}
	
};