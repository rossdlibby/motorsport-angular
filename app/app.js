'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
	'ngRoute',
	'myApp.view1',
	'myApp.view2',
	'myApp.version',
	'myApp.drivers',
	'myApp.services',
]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when("/drivers", {templateUrl: "drivers/drivers.html", controller: "DriversCtrl"}).
	when("/drivers/:id", {templateUrl: "drivers/driver.html", controller: "DriverCtrl"}).
	otherwise({redirectTo: '/drivers'});
}]);