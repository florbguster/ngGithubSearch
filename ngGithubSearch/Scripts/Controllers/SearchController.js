/// <reference path="https://code.angularjs.org/1.4.5/angular.min.js" />


(function () {
    var app = angular.module("searcher");

    var SearchController = function ($scope, $log, $location) {

        $log.info("Search Ctrl");

        $scope.search = function (username) {
            $location.path("User/" + username );
        };

    };

    app.controller("SearchController", SearchController);

}());