angular.module('ssms').controller("SubscribeFormCtrl", ["$scope", "subscribeAPI", 'notify', '$location', '$routeParams', function ($scope, subscribeAPI, notify, $location, $routeParams) {
    
    /*
    *  INIT
    */
    var init = function () {
        $scope.subscribe = {};

        if ($routeParams.subscribeId)
            getsubscribe($routeParams.subscribeId);
    };

    
    /*
    *  Get Subscribe selected
    */
    var getsubscribe = function (subscribeId) {
        subscribeAPI.getsubscribe(subscribeId).then(function(response) {
            $scope.func = response.data;
        },
        function(error) {
            notify.error();
        });
    };
    
        
    /*
    *  Save
    */
    $scope.onSave = function () {
        subscribeAPI.create( $scope.subscribe ).then(function(response) {
            $scope.subscribe = response.data;
            
            notify.success();
        },
        function(error) {
            notify.error();
        });

        // Retirar qndo estiver integrado
        notify.success();
        $scope.onCancel();
    };
    
        
    /*
    *  Cancel
    */
    $scope.onCancel = function () {
        $location.path('/inscricoes/');
    };


    init();
}]);