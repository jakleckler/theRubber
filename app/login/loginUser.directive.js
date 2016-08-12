(function() {
	'use strict';

	angular
		.module('theRubber')
		.directive('loginUser', loginUser);

		function loginUser() {
			var directive = {
				restrict: 'EA',
				templateUrl: 'app/login/loginUser.directive.html',
				controller: LoginUserController,
				controllerAs: 'lu',
				bindToController: true
			};

			return directive;
		};

		LoginUserController.$Inject = ['$http', '$state'];

		function LoginUserController($http, $state) {
			var lu = this;
			lu.loginUser = loginUser;
			lu.login = {
				username: undefined,
				password: undefined
			};

			function loginUser() {
				var data = {
					username: lu.login.username,
					password: lu.login.password
				};

				$http.post("app/endpoints/login.php", data).success(function(response) {
					console.log(response);
					localStorage.setItem("token", JSON.stringify(response));
					$state.go("profile");
				}).error(function(error) {
					console.log(error);
				});
			};
		};
}());