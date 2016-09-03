angular.module('formsApp', ['ngRoute','formControllers','formDirectives']);
// configure our routes
angular.module('formsApp').config(function($routeProvider) {
	$routeProvider
	
		.when('/form', {
			templateUrl : 'templates/registerForm.html',
			controller  : 'RegisterController'
		})

		.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'HomeController'
		})
		// route for the about page
		.when('/about', {
			'templateUrl': 'templates/about.html',
			'controller': 'AboutController'
		})
		// route for the contact page
		.when('/option1', {
			templateUrl: 'templates/option1.html',
			controller: 'option1Controller'
		})
		.when('/option2', {
			templateUrl: 'templates/option2.html',
			controller: 'option2Controller'
		})
		.when('/option3', {
			templateUrl: 'templates/option3.html',
			controller: 'option3Controller'
		})
		.when('/option4', {
			templateUrl: 'templates/option4.html',
			controller: 'option4Controller'
		})

		.when('/weather', {
			templateUrl: 'templates/weather.html',
			controller: 'weatherController'
		})

		.when('/gallery', {
			templateUrl: 'templates/gallery.html',
			controller: 'galleryController'
		})
		.otherwise({redirectTo: '/'});

});