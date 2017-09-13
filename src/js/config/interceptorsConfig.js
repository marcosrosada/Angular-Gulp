angular.module('ssms').config(function ($httpProvider) {
	$httpProvider.interceptors.push("LoaderInterceptor");
});
