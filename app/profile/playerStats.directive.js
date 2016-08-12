(function() {
	'use strict';

	angular
		.module('theRubber')
		.directive('playerStats', playerStats);

	function playerStats() {
		var directive = {
			restrict: 'EA',
			templateUrl: 'app/profile/playerStats.directive.html',
			controller: PlayerStatsController,
			controllerAs: 'ps',
			bindToController: true
		};

		return directive;
	}

	PlayerStatsController.$inject = ['AuthenticationService'];

	function PlayerStatsController(AuthenticationService) {
		var ps = this;

	};

}());