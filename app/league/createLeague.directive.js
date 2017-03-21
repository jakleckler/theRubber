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

		CreateLeagueController.$Inject = ['leagueService', '$state', '$http'];

		function CreateLeagueController(leagueService, $state, $http) {
			var cl = this;
			cl.addAttribute = addAttribute;
			cl.createGame = createGame;
			cl.createLeague = createLeague;
			cl.loadAttributes = loadAttributes;
			cl.selectAttribute = selectAttribute;
			cl.showGameWindow = showGameWindow;
			cl.attribute = {
				name: undefined
			}
			cl.attributes = [{
				id: undefined,
				name: undefined
			}]
			cl.game = {
				game_id: undefined,
				name: undefined,
				attributes: []
			};
			cl.games = undefined;
			cl.gameWindow = false;


			cl.league = {
				name: undefined,
				commissionerID: undefined,
				game: undefined,
				type: undefined,
				season: undefined
			};

			activate();

			function activate() {
				populateGameDropdown();
			}

			function addAttribute() {
				if (cl.attribute.name == undefined) {
					showError("Must enter name for attribute");
				} else {
					leagueService.addAttribute(data)
					.success(function(response) {
						console.log(response);
						cl.loadAttributes();
					}).error(function(error) {
						console.error(error);
					});
				}

			}

			function selectAttribute(attribute) {
				cl.game.attributes.push(attribute);
			}

			function populateGameDropdown() {
				//get games from datebase
				leagueService.getGames()
				.success(function(response) {
					console.log(response);
					cl.games = response;

				}).error(function(error) {
					console.error(error);
				});
			}

			function createGame() {
				data = {

				}
				leagueService.createGame(data)
				.success(function(response) {
					console.log(response);
					hideGameWindow();
					populateGameDropdown();
				}).error(function(error) {
					showError("could not create game");
				})


			}

			function createLeague() {

				if (cl.league.name == undefined || cl.league.commissionerID == undefined || cl.league.game == undefined || cl.league.type == undefined) {
					showError();					
				} else {
					data = {

					}
					leagueService.createNew(data)
					.success(function(response) {
						console.log(response);
					}).error(function(error) {
						console.error(error);
					});
				}
			}

 			function loadAttributes() {
 				leagueService.loadAttributes()
 				.success(function(response) {
 					console.log(response);
 					cl.attributes = response;
 				}).error(function(error) {
 					showError(error);
 				});

 			}

			function showGameWindow() {
				cl.gameWindow = true;
			}

			function hideGameWindow() {
				cl.gameWindow = false;
			}

			function showError(message) {
				//display error message somewhere on screen
				console.error(message); 
			}
			
		}
}());