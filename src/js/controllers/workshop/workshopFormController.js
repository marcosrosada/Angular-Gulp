angular.module('ssms').controller("WorkshopFormCtrl", ["$scope", "workshopAPI", 'notify', '$location', '$routeParams', function ($scope, workshopAPI, notify, $location, $routeParams) {
    
    /*
    *  INIT
    */
    var init = function () {
        $scope.workshop = {};
        $scope.typesList = [ { name: 'Tipo 1' },  { name: 'Tipo 2' },  { name: 'Tipo 3' },  { name: 'Tipo 4' }];

        if ($routeParams.workshopId)
            getWorkshop($routeParams.workshopId);
    };

    
    /*
    *  Get workshop selected
    */
    var getWorkshop = function (workshopId) {
        workshopAPI.getWorkshop(workshopId).then(function(response) {
            $scope.workshop = response.data;
        },
        function(error) {
            notify.error();
        });
    };
    
        
    /*
    *  Validation Form
    */
    $scope.criticalField = function (field) {
        return $scope.criticalShowLabel(field) ? 'has-error' : '';
    };
    
        
    /*
    *  Validation Form Show Label
    */
    $scope.criticalShowLabel = function (field) {
        return (field.$touched && field.$error.required);
    };
    


    
    
        
    /*
    *  Save
    */
    $scope.onSave = function () {
        workshopAPI.create( $scope.workshop ).then(function(response) {
            $scope.workshop = response.data;
            
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
        $location.path('/workshops/');
    };


    init();
}]);