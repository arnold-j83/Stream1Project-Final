angular.module('formsApp', ['ngRoute','formControllers','formDirectives', 'angular-storage']);
// configure our routes
angular.module('formsApp').config(function($routeProvider) {
	$routeProvider
	
		.when('/form', {
			templateUrl : 'templates/registerForm.html',
			controller  : 'RegisterController'
		})

		.when('/home', {
			templateUrl: 'templates/home.html',
			controller: 'HomeController'
		})
		.when('/about', {
			'templateUrl': 'templates/about.html',
			'controller': 'AboutController'
		})
		.when('/option1', {
			templateUrl: 'templates/option1.html',
			controller: 'option1Controller'
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