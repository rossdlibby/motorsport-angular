'use strict';

angular.module('myApp.drivers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/drivers', {
		templateUrl: 'drivers/drivers.html',
		controller: 'DriversCtrl'
	});
}])

.controller('DriversCtrl', function($scope, ergastAPIservice) {
	$scope.nameFilter = null;
	$scope.driversList = [];
	$scope.searchFilter = function(driver) {
		var keyword = new RegExp($scope.nameFilter, 'i');
		return !$scope.nameFilter || keyword.test(driver.Driver.givenName) || keyword.test(driver.Driver.familyName);
	};

	ergastAPIservice.getDrivers().success(function(response) {
		// Dig into the response to get the relevant data
		$scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
	});
	$scope.driversList = [
		{
			Driver: {
				givenName:	'Sebastian',
				familyName:	'Vettel'
			},
			points: 322,
			nationality: 'German',
			Constructors: [
				{name: 'Red Bull'}
			]
		},
		{
			Driver: {
				givenName:	'Fernando',
				familyName:	'Alonso'
			},
			points: 207,
			nationality: 'Spanish',
			Constructors: [
				{name: 'Ferrari'}
			]
		},
	];
});