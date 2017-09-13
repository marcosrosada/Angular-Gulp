angular.module('ssms').factory("subscribeAPI", function($http, config) {

    var _getList = function() {
        return $http.get(config.baseUrl + "/subscribe");
    };

    var _getSubscribe = function(subscribeId) {
        return $http.get(config.baseUrl + "/subscribe/" + subscribeId);
    };

    var _create = function(subscribeDTO) {
        return $http.post(config.baseUrl + "/subscribe/create", subscribeDTO);
    };

    var _update = function(subscribeId, subscribeDTO) {
        return $http.put(config.baseUrl + "/subscribe/update" + subscribeId, subscribeDTO);
    };

    var _remove = function(subscribeId){
        return $http.delete(config.baseUrl + "/subscribe/remove" + subscribeId);
    };

    return {
        getList         : _getList,
        getSubscribe    : _getSubscribe,
        create          : _create,
        update          : _update,
        remove          : _remove,
    };
});