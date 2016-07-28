(function() {
	'use strict';
	angular
		.module('theRubber')
		.config(configRoutes);

		function configRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
			$urlRouterProvider.otherwise("/");

			$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'app/views/home.html'
			})
		}

}());