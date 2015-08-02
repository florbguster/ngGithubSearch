(function() {
	angular.module("searcher", ['ngAnimate'])
		   .controller( "FormController", function($scope, $http){
				var getUserDetails = function(response){
					$scope.user = response.data;
					$http.get( $scope.user.repos_url )
						 .then( getRepository );
				};
					
				var getRepository = function(response){
					$scope.repos = response.data;
				};
					
				$scope.search = function(username){
					$http.get("https://api.github.com/users/" + username)
						 .then(getUserDetails);
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
			});
}());