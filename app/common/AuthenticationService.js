(function() {
	'use strict'

	angular
	.module('theRubber')
	.service("AuthenticationService", AuthenticationService);


	AuthenticationService.$inject = ["$http", "$state"];

	function AuthenticationService($http, $state) {

		var service = {
			checkToken: checkToken

		};

		return service;

		function checkToken(token) {
			var data = {token: token};
			$http.post("assets/php/checkToken.php", data).success(function(response) {
				if (response === "unauthorized") {
					console.log("unauthorized");
					$state.go("login");
				} else if (response === "authorized") {
					console.log("Loggied in");
					return response;
				}
			}).error(function(error) {
				$state.go("login");
			});
		}
	}
	
	
}());