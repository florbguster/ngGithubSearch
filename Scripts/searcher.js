(function() {
	var app = angular.module("searcher", []);
	
	var UserController = function($scope, githubUserService ){

				var mapUserDetails = function(data){
					$scope.user = data;
					githubUserService.getUserRepositories( data )
									 .then( mapRepository );
					$scope.error = null;
				};
				
				var mapRepository = function(data){
					$scope.repos = data;
				};

				var onError = function(reason){
					$scope.error = "User not found.";
				};
			
				$scope.search = function(username){
					githubUserService.getUserDetails(username)
									 .then( mapUserDetails, onError);
				};
			
				$scope.direction = true;
				$scope.sortOrder = "name";
				$scope.sort = function(column) {
					column.active;
					if ($scope.sortOrder === column) {
						$scope.direction = !$scope.direction;
					} else {
						$scope.sortOrder = column;
						$scope.direction = true;
					}
				};
	};
	
	app.controller( "UserController", UserController);
	
}());