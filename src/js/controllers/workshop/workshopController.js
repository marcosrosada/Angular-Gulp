angular.module('ssms').controller('WorkshopCtrl', ['$scope', 'workshopAPI', 'notify', '$ngConfirm', 'GRID_OPTIONS', '$location', 
                                          function ($scope, workshopAPI, notify, $ngConfirm, GRID_OPTIONS, $location) {
    
    /*
    *  INIT
    */
    var init = function () {
        $scope.grid_options = GRID_OPTIONS.config;
        setConfiList();
        $scope.getWorkshopList();
    };


    /*
    *  Set Config List
    */
    var setConfiList = function() {
        $scope.grid_options.columnDefs = [
            {
                field: 'name', 
                displayName: 'Nome', 
                width: 360, 
                cellTemplate: '<div class="ui-grid-cell-contents ng-binding ng-scope">' +
                                    '<a href="" ng-click="grid.appScope.onOpenWorkshop(row.entity)" class="text-sm">{{ row.entity.name }}</a>' +
                                '</div>'
            },
            {
                field: 'description',
                displayName: 'Descrição' 
            },
            {
                field: 'type',
                displayName: 'Tipo',
                width: 120
            },
            {
                field: 'period',
                displayName: 'Período',
                cellClass: 'text-center',
                width: 180
            },
            {
                field: 'hours',
                displayName: 'Horas',
                cellClass: 'text-center',
                width: 80
            },
            {
                field: 'id', 
                displayName: 'Ações', 
                cellClass: 'text-center',
                enableFiltering: false,
                width: 100, 
                cellTemplate: '<button type="button" class="btn btn-clean mar-r-10" ng-click="grid.appScope.onUpdate(row.entity.id)" title="Editar"><i class="fa fa-edit"></i></button>' +
                              '<button type="button" class="btn btn-clean mar-r-10" ng-click="grid.appScope.onConfirmRemove(row.entity.id, row.entity.name)" title="Remover"><i class="fa fa-trash"></i></button>'
            }
        ];
    };


    /*
    *  Get workshop list
    */
    $scope.getWorkshopList = function () {
        workshopAPI.getList().then(function(response) {
            $scope.grid_options.data = response.data;
        },
        function(error) {
            notify.error();
        });
        
        listMock();
    };
    
    
    /*
    *  Open workshop Details
    */
    $scope.onOpenWorkshop = function (workshop) {
        $ngConfirm({
            title: 'Detalhes da Workshop',
            content: '<h3 class="mar-t-0">' + workshop.name + '</h3>' +
                        '<h5><em>' + JSON.stringify(workshop) + '</em></h5>',
            animation: 'scaleY',
            columnClass: 'col-md-6 col-md-offset-3',         
            onOpen: function ($scope) {
                $scope.changeContent = function () {
                    $scope.altContent = true;
                };
            },
        });
    };


    /*
    *  Add
    */
    $scope.onAdd = function() {
        $location.path('/workshops/form');
    };
    
    
    /*
    *  Navigate to Form passing workshopId
    */
    $scope.onUpdate = function(workshopId) {
        $location.path('/workshops/form/' + workshopId);
    };
    
    
    /*
    *  Confirm before of Remove
    */
    $scope.onConfirmRemove = function(workshopId, workshopName) {
        notify.confirm(workshopId, workshopName, onRemove);
    };


    /*
    *  Do Remove
    */
    var onRemove = function(workshopId) {
        workshopAPI.remove(workshopId).then(function(response) {
            console.log('Remover item da lista');
        },
        function(error) {
            notify.error();
        });
    };


    var listMock = function() {
        $scope.grid_options.data = [
            {
                'id': 1,
                'name': 'Workshop 1',
                'description': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
                'type': 'Tipo 1',
                'period': '01/10/2017 - 10/10/2017',
                'hours': '60h',
            },
            {
                'id': 2,
                'name': 'Workshop 2',
                'description': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
                'type': 'Tipo 2',
                'period': '01/10/2017 - 10/10/2017',
                'hours': '60h',
            },
            {
                'id': 3,
                'name': 'Workshop 3',
                'description': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
                'type': 'Tipo 2',
                'period': '01/10/2017 - 10/10/2017',
                'hours': '60h',
            },
            {
                'id': 4,
                'name': 'Workshop 4',
                'description': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
                'type': 'Tipo 2',
                'period': '01/10/2017 - 10/10/2017',
                'hours': '60h',
            },
            {
                'id': 5,
                'name': 'Workshop 5',
                'description': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
                'type': 'Tipo 2',
                'period': '01/10/2017 - 10/10/2017',
                'hours': '60h',
            },
            {
                'id': 6,
                'name': 'Workshop 6',
                'description': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
                'type': 'Tipo 4',
                'period': '01/10/2017 - 10/10/2017',
                'hours': '60h',
            },
            {
                'id': 7,
                'name': 'Workshop 7',
                'description': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
                'type': 'Tipo 3',
                'period': '01/10/2017 - 10/10/2017',
                'hours': '60h',
            },
            {
                'id': 8,
                'name': 'Workshop 8',
                'description': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
                'type': 'Tipo 1',
                'period': '01/10/2017 - 10/10/2017',
                'hours': '60h',
            },
            {
                'id': 9,
                'name': 'Workshop 9',
                'description': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
                'type': 'Tipo 2',
                'period': '01/10/2017 - 10/10/2017',
                'hours': '60h',
            },
            {
                'id': 10,
                'name': 'Workshop 10',
                'description': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
                'type': 'Tipo 1',
                'period': '01/10/2017 - 10/10/2017',
                'hours': '60h',
            },
            {
                'id': 11,
                'name': 'Workshop 1',
                'description': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
                'type': 'Tipo 1',
                'period': '01/10/2017 - 10/10/2017',
                'hours': '60h',
            },
            {
                'id': 12,
                'name': 'Workshop 2',
                'description': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
                'type': 'Tipo 2',
                'period': '01/10/2017 - 10/10/2017',
                'hours': '60h',
            },
            {
                'id': 13,
                'name': 'Workshop 3',
                'description': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
                'type': 'Tipo 2',
                'period': '01/10/2017 - 10/10/2017',
                'hours': '60h',
            },
            {
                'id': 14,
                'name': 'Workshop 4',
                'description': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
                'type': 'Tipo 2',
                'period': '01/10/2017 - 10/10/2017',
                'hours': '60h',
            },
            {
                'id': 15,
                'name': 'Workshop 5',
                'description': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
                'type': 'Tipo 2',
                'period': '01/10/2017 - 10/10/2017',
                'hours': '60h',
            },
            {
                'id': 16,
                'name': 'Workshop 6',
                'description': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
                'type': 'Tipo 4',
                'period': '01/10/2017 - 10/10/2017',
                'hours': '60h',
            },
            {
                'id': 17,
                'name': 'Workshop 7',
                'description': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
                'type': 'Tipo 3',
                'period': '01/10/2017 - 10/10/2017',
                'hours': '60h',
            },
            {
                'id': 18,
                'name': 'Workshop 8',
                'description': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
                'type': 'Tipo 1',
                'period': '01/10/2017 - 10/10/2017',
                'hours': '60h',
            },
            {
                'id': 19,
                'name': 'Workshop 9',
                'description': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
                'type': 'Tipo 2',
                'period': '01/10/2017 - 10/10/2017',
                'hours': '60h',
            },
            {
                'id': 20,
                'name': 'Workshop 10',
                'description': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
                'type': 'Tipo 1',
                'period': '01/10/2017 - 10/10/2017',
                'hours': '60h',
            }
        ];
    };


    init();
}]);