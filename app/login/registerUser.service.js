(function () {
	'use strict';

	angular
		.module('theRubber')
		.factory('registerUserService', registerUserService);

		registerUserService.$Inject = ['$http'];

		function registerUserService($http) {
			var service = {
				registerUser: registerUser
			}

			return service;

			function registerUser(data) {
				return $http.post("app/endpoints/register.php", data);
				

			}
		}
}());