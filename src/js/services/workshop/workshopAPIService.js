angular.module('ssms').factory("workshopAPI", function($http, config) {

    var _getList = function() {
        return $http.get(config.baseUrl + "/workshop");
    };

    var _getWorkshop = function(workshopId) {
        return $http.get(config.baseUrl + "/workshop/" + workshopId);
    };

    var _create = function(workshopDTO) {
        return $http.post(config.baseUrl + "/workshop/create", workshopDTO);
    };

    var _update = function(workshopId, workshopDTO) {
        return $http.put(config.baseUrl + "/workshop/update" + workshopId, workshopDTO);
    };

    var _remove = function(workshopId){
    	return $http.delete(config.baseUrl + "/workshop/remove" + workshopId);
    };

    return {
        getList       : _getList,
        getWorkshop   : _getWorkshop,
        create        : _create,
        update        : _update,
        remove        : _remove,
    };
});