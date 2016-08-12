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
			.state('profile', {
				url: '/profile',
				templateUrl: 'app/views/profile.html'
			})
			.state('contact', {
				url: '/contactForm',
				templateUrl: 'app/views/contact.html'
			})
			.state('about', {
				url: '/about',
				templateUrl: 'app/views/about.html'
			})
		}

}());