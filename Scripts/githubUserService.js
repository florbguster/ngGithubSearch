(function(){

	var githubUserService = function($http){
		
		var getUserDetails = function(username){
			if(username){
				return $http.get("https://api.github.com/users/" + username )
							.then(function(response){
								return response.data;
							});
			}
		};
		
		var getUserRepositories = function(user){
			return $http.get(user.repos_url)
						.then(function(response){
							return response.data;
						});
		};
		
		return {
			getUserDetails : getUserDetails,
			getUserRepositories : getUserRepositories
		};
	};
	
	var module = angular.module("searcher");
	
	module.factory("githubUserService", githubUserService);
}());