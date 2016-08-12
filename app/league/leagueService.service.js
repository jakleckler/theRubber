(function () {
	'use strict';

	angular
		.module('theRubber')
		.factory('leagueService', leagueService);

	function leagueService() {
		var service = {
			createNew: createNew

		}

		return service;

		function createNew() {

		}
	}
}());