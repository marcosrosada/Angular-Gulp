angular.module('ssms').factory("notify", function(Notification, $ngConfirm) {
    
    /*
    *  Info message
    */
    var _info = function(_message, _title) {
        var title   = _title   ? _title   : 'ATENÇÃO',
            message = _message ? _message : 'Operação efetuada!';

        Notification.primary({ title: title, message: message });
    };

    
    /*
    *  Warning message
    */
    var _warning = function(_message, _title) {
        var title   = _title   ? _title   : 'ATENÇÃO',
            message = _message ? _message : 'Operação efetuada!';

        Notification.warning({ title: title, message: message });
    };
    

    /*
    *  Success message
    */
    var _success = function(_message, _title) {
        var title   = _title   ? _title   : 'SUCESSO',
            message = _message ? _message : 'Operação efetuada!';
            

        Notification.success({ title: title, message: message });
    };

    
    /*
    *  Error message
    */
    var _error = function(_listMessage, _title) {
        var title   = _title ? _title   : 'ERRO',
            message = '';

        if ((_listMessage) && _listMessage.length > 0) {
            message = '<ul>';

            _listMessage.forEach( function (msg) {
                message += '<li>- ' + msg + '</li>';
            });
            
            message += '</ul>';
        } else {
            message = '<span>Operação não efetuada!</span>';
        }

        Notification.error({ title: title, message: message});
    };
    
        
    /*
    *  Confirm Dialog
    */
    var _confirm = function(itemId, itemLabel, callback) {
        $ngConfirm({
            title: 'ATENÇÃO!',
            content: 'Deseja realmente remover o <strong>' + itemLabel + '</strong>?',
            icon: 'fa fa-question-circle',
            closeIcon: true,
            closeIconClass: 'fa fa-close',
            animation: 'scaleY',
            closeAnimation: 'scaleY',
            animationBounce: 1.5,
            theme: 'modern',
            buttons: {
                    yes: {
                        text: 'Sim',
                        btnClass: 'btn-danger',
                        action: function(){
                            callback(itemId);
                        }
                    },
                    somethingElse: {
                        text: 'Não'
                    }
            }
        });
    };

    

    return {
        info    : _info,
        warning : _warning,
        success : _success,
        error   : _error,
        confirm : _confirm
    };
});