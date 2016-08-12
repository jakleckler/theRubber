(function () {
	'use strict';

	angular
		.module('theRubber')
		.factory('emailService', emailService);

		emailService.$Inject = ['$http', '$state'];

		function emailService($http, $state) {
			
			var service = {
				sendEmail: sendEmail

			};

			return service;

			function sendEmail(email, html) {
				var fromHeader = "FROM:put.it.to.TheRubber@gmail.com\r\n";
				var htmlHeaders = "MIME-Version: 1.0\r\n";
				htmlHeaders += "Content-type: text/html\r\n";
				if (email.headers === undefined) {
					email.headers = fromHeader;
				} else {
					email.headers += fromHeader;
				}
				if (html) {
					email.headers += htmlHeaders;
				}
				var data = {
					to: email.to,
					subject: email.subject,
					message: email.message,
					headers: email.headers,
					parameters: email.parameters
				};
				$http.post("app/endpoints/sendEmail.php", data).success(function(response) {
					if (response === "success") {
						console.log(response);
						//show email sent
						return response;
					} else {
						console.log(response);
						//show fail email send
					}
				}).error(function(error) {
					console.error(error);
				});
			}

		}

		
}());