//Angular app name and dependencies
//angular.module('formsApp', ['ngRoute','formControllers','formDirectives', 'angular-storage', 'jsonService']);
angular.module('formsApp', ['ngRoute','formControllers','formDirectives', 'angular-storage', 'myService']);
// configure our routes
angular.module('formsApp').config(function($routeProvider) {
	$routeProvider
	//ngRoute contains routeProvider
	//below - each route has a template html page and a controller ng-controller directive binds controller to specific html
		.when('/form', {
			templateUrl : 'templates/registerForm.html',
			controller  : 'RegisterController'
		})

		.when('/home', {
			templateUrl: 'templates/home.html',
			controller: 'HomeController'
		})

		.when('/test', {
			templateUrl: 'templates/test.html',
			controller: 'TestController'
		})
		.when('/about', {
			'templateUrl': 'templates/about.html',
			'controller': 'AboutController'
		})
		.when('/activities', {
			templateUrl: 'templates/activities.html',
			controller: 'activitiesController'
		})
		.when('/prices', {
			templateUrl: 'templates/prices.html',
			controller: 'pricesController'
		})
		.when('/availability', {
			templateUrl: 'templates/availability.html',
			controller: 'availabilityController'
		})

		.when('/weather', {
			templateUrl: 'templates/weather.html',
			controller: 'weatherController'
		})

		.when('/gallery', {
			templateUrl: 'templates/gallery.html',
			controller: 'galleryController'
		})
		.otherwise({redirectTo: '/home'});

});