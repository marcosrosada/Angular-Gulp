angular.module('ssms').controller('HeaderCtrl', ['$scope', '$route', function ($scope, $route) {

	/*
	*  INIT
	*/
	var init = function () {
		$scope.$route = $route;	
	};

	init();
}]);