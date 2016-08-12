(function() {
	'use strict';

	angular
		.module('theRubber')
		.directive('createLeague', createLeague);

		function createLeague() {
			var directive = {
				restrict: 'EA',
				templateUrl: 'app/league/createLeague.directive.html',
				controller: CreateLeagueController,
				controllerAs: 'cl',
				bindToController: true
			};

			return directive;
		}

		CreateLeagueController.$Inject = ['leagueService'];

		function CreateLeagueController(leagueService) {
			var cl = this;
		}
}());