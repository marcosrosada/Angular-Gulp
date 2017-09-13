angular.module('ssms').factory("homeAPI", function($http, config) {

    var _getList = function() {
        return $http.get(config.baseUrl + "/home");
    };

    return {
        getList : _getList
    };
});