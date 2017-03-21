(function() {
	'use strict';

	angular
		.module('theRubber')
		.directive('contact', contact);

		function contact() {
			var directive = {
				restrict: 'EA',
				templateUrl: 'app/contact/contact.directive.html',
				controller: ContactController,
				controllerAs: 'cc',
				bindToController: true
			};

			return directive;
		};

		ContactController.$inject = ['emailService', '$state'];

		function ContactController(emailService, $state) {
			var cc = this;

			cc.contact = {
				name: undefined,
				email: undefined,
				subject: undefined,
				message: undefined
			};

			cc.home = home;
			cc.submitRequest = submitRequest;

			function home() {
				$state.go("home");
			};

			function submitRequest() {
				$state.go('thankyou');
				var headers = "FROM:"+ cc.contact.email+"\r\n";
				var email = {
					to: "put.it.to.the.rubber@gmail.com",
					subject: cc.contact.subject,
					message: cc.contact.message,
					headers: headers,
					paramters: undefined
				};

				var success = emailService.sendEmail(email, false);
				if (success === 'success') {
					$state.go('home');
				}
				else {
					//show that email could not be sent
				}

			};
		}
}());