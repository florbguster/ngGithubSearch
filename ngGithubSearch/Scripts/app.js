(function () {
    var app = angular.module("searcher", ["ngRoute"]);

    app.config(function ($routeProvider) {
        $routeProvider.when('/',
							 {
							     controller: 'SearchController'
							 })
                       .when('/User/:username',
							 {
							     templateUrl: '/templates/UserDetails.html',
							     controller: 'UserController'
							 })
                       .when('/Repo',
							 {
							     templateUrl: '/templates/Repo.html',
							     controller: 'RepoController'
							 })
					   .otherwise({ redirectTo: '/' });
    });

}());