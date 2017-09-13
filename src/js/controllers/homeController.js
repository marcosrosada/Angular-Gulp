angular.module('ssms').controller("HomeCtrl", ["$scope", "homeAPI", function ($scope, homeAPI) {

	/*
	*  INIT
	*/
	var init = function () {
		console.log("Home Controller");
		$scope.helloWord = 'Hello World from Home Controller';
	};

	init();
}]);
