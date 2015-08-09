(function() {
	var app = angular.module("searcher", []);
	
	var UserController = function($scope, githubUserService ){

				var mapRepository = function(data){
					$scope.repos = data;
				};

				var errorMessage = function(reason){
					$scope.error = "User not found."
				};

				var mapUserDetails = function(data){
					$scope.user = data;
					githubUserService.getUserRepositories( $scope.user )
									 .then( mapRepository );
				};
			
				$scope.search = function(username){
					githubUserService.getUserDetails(username)
									 .then( mapUserDetails, errorMessage);
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