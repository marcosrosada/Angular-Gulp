angular.module('ssms').controller("SubscribeCtrl", ["$scope", "subscribeAPI", 'notify', 'GRID_OPTIONS', "$location", function ($scope, subscribeAPI, notify, GRID_OPTIONS, $location) {
    
    /*
    *  INIT
    */
    var init = function () {
        $scope.grid_options = GRID_OPTIONS.config;
        setConfiList();
        $scope.getSubscribeList();
    };


    /*
    *  Set Config List
    */
    var setConfiList = function() {
        $scope.grid_options.columnDefs = [
            {
                field: 'name', 
                displayName: 'Nome', 
                width: 250, 
                cellTemplate: '<div class="ui-grid-cell-contents ng-binding ng-scope">' +
                                    '<a href="" ng-click="grid.appScope.onUpdate(row.entity.id)" class="text-sm">{{ row.entity.name }}</a>' +
                                '</div>'
            },
            {
                field: 'type',
                displayName: 'Tipo',
                width: 180
            },
            {
                field: 'description',
                displayName: 'Descrição' 
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
    *  Get Func list
    */
    $scope.getSubscribeList = function () {
        subscribeAPI.getList().then(function(response) {
            $scope.grid_options.data = response.data;
        },
        function(error) {
            notify.error();
        });

        listMock();
    };


    /*
    *  Add
    */
    $scope.onAdd = function() {
        $location.path('/inscricoes/form');
    };
    
    
    /*
    *  Navigate to Form passing subscribeId
    */
    $scope.onUpdate = function(subscribeId) {
        $location.path('/inscricoes/form/' + subscribeId);
    };
    
    
    /*
    *  Confirm before of Remove
    */
    $scope.onConfirmRemove = function(subscribeId, subscribeName) {
        notify.confirm(subscribeId, subscribeName, onRemove);
    };


    /*
    *  Do Remove
    */
    var onRemove = function(subscribeId) {
        subscribeAPI.remove(subscribeId).then(function(response) {
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
                'name': 'Inscrições 1',
                'type': 'Tipo xxxxxxxx',
                'description': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
            },
            {
                'id': 2,
                'name': 'Inscrições 2',
                'type': 'Tipo xxxxxxxx',
                'description': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
            },
            {
                'id': 3,
                'name': 'Inscrições 3',
                'type': 'Tipo xxxxxxxx',
                'description': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
            },
            {
                'id': 4,
                'name': 'Inscrições 4',
                'type': 'Tipo xxxxxxxx',
                'description': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
            },
            {
                'id': 5,
                'name': 'Inscrições 5',
                'type': 'Tipo xxxxxxxx',
                'description': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
            },
            {
                'id': 6,
                'name': 'Inscrições 6',
                'type': 'Tipo xxxxxxxx',
                'description': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
            },
            {
                'id': 7,
                'name': 'Inscrições 7',
                'type': 'Tipo xxxxxxxx',
                'description': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
            },
            {
                'id': 8,
                'name': 'Inscrições 8',
                'type': 'Tipo xxxxxxxx',
                'description': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
            },
            {
                'id': 9,
                'name': 'Inscrições 9',
                'type': 'Tipo xxxxxxxx',
                'description': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
            },
            {
                'id': 10,
                'name': 'Inscrições10',
                'type': 'Tipo xxxxxxxx',
                'description': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
            },
            {
                'id': 11,
                'name': 'Inscrições 1',
                'type': 'Tipo xxxxxxxx',
                'description': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
            },
            {
                'id': 12,
                'name': 'Inscrições 2',
                'type': 'Tipo xxxxxxxx',
                'description': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
            },
            {
                'id': 13,
                'name': 'Inscrições 3',
                'type': 'Tipo xxxxxxxx',
                'description': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
            },
            {
                'id': 14,
                'name': 'Inscrições 4',
                'type': 'Tipo xxxxxxxx',
                'description': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
            },
            {
                'id': 15,
                'name': 'Inscrições 5',
                'type': 'Tipo xxxxxxxx',
                'description': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
            },
            {
                'id': 16,
                'name': 'Inscrições 6',
                'type': 'Tipo xxxxxxxx',
                'description': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
            },
            {
                'id': 17,
                'name': 'Inscrições 7',
                'type': 'Tipo xxxxxxxx',
                'description': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
            },
            {
                'id': 18,
                'name': 'Inscrições 8',
                'type': 'Tipo xxxxxxxx',
                'description': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
            },
            {
                'id': 19,
                'name': 'Inscrições 9',
                'type': 'Tipo xxxxxxxx',
                'description': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
            },
            {
                'id': 20,
                'name': 'Inscrições10',
                'type': 'Tipo xxxxxxxx',
                'description': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
            }
        ];
    };


    init();
}]);