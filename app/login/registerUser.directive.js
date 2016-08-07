(function() {
	'use strict';

	angular
		.module('theRubber')
		.directive('registerUser', registerUser);

	function registerUser() {
		var directive = {
		restrict: 'EA',
		templateUrl: 'registerUser.directive.html',
		controller: 'RegisterUserController',
		controllerAs: 'ru',
		bindToController: true
		}
		return directive;

	}

	RegisterUserController.$Inject = ['$http', '$state'];

	function RegisterUserController($http, $state) {
		var ru = this;

		ru.registration = {
			firstName: undefined,
			lastName: undefined,
			email: undefined,
			username: undefined,
			password: undefined,
			checkPass: undefined
		};

		function registerUser () {
			if (ru.registerForm.$valid) {
				var data = {
					firstName: ru.registration.firstName,
					lastName: ru.registration.lastName,
					email: ru.registration.email,
					username : ru.registration.username,
					password : ru.registration.password,
					checkPass : ru.registration.checkPass,
					access: 0

				};

				$http.post("endpoints/register.php", data).success(function(response) {
					console.log(response);
					localStorage.setItem("token", JSON.stringify(response));
					$state.go("home");
				}).error(function(error) {
					console.log(error);
				});
			} else {
				console.log("Invalid Data");
			}
		};
	}
}());