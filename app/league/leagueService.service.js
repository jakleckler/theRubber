(function () {
	'use strict';

	angular
		.module('theRubber')
		.factory('leagueService', leagueService);

	function leagueService() {
		var service = {
			createGame: createGame,
			createNew: createNew,
			getGames: getGames,
			loadAttributes: loadAttributes

		}

		return service;

		function createGame(data) {
			return $http.post("app/endpoints/createGame.php", data);
		}

		function createNew(data) {
			return $http.post("app/endpoints/createLeague.php", data);
			
		}

		function getGames() {
			return $http.get("app/endpoints/getGames.php");
		}

		function loadAttributes() {
			return $http.get("app/endpoints/loadAttributes.php");
		}
	}
}());