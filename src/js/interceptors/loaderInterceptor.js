angular.module('ssms').factory("LoaderInterceptor", function($q, blockUIConfig) {

    var loadingCount = 0,
        message = 'Aguarde ...';

    return {
        request: function(config) {
            loadingCount++;

            blockUIConfig.requestFilter = function(config) {
                switch(config.method) {
                  case 'GET':
                    blockUIConfig.message = 'Buscando ...';
                    break;          
                  case 'POST':
                    blockUIConfig.message = 'Salvando ...';
                    break;          
                  case 'DELETE':
                    blockUIConfig.message = 'Excluindo ...';
                    break;          
                  case 'PUT':
                    blockUIConfig.message = 'Atualizando ...';
                    break;
                }
            };

            //blockUIConfig.message = message;
            return config || $q.when(config);
        },
        response: function(response) {
            if ((--loadingCount) === 0) {
                //blockUIConfig.message = message;
            }
            return response || $q.when(response);

        },
        responseError: function(response) {
            if (!(--loadingCount)) {
                //blockUIConfig.message = message;
            }
            return $q.reject(response);
        }
    };
});
