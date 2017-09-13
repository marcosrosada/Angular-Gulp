angular.module('ssms', ['ngRoute', 'blockUI', 'cp.ngConfirm', 'ui-notification', 'ngAnimate', 'ui.toggle', 'ui.grid', 'ui.grid.pinning', 'ui.grid.resizeColumns', 'ui.grid.autoResize', 'ui.grid.moveColumns'])
    .config(function($httpProvider, NotificationProvider) {
      
        $httpProvider.defaults.withCredentials = true;

        NotificationProvider.setOptions({
            delay: 10000,
            startTop: 10,
            startRight: 10,
            verticalSpacing: 10,
            positionX: 'right',
            positionY: 'top'
        });
    
    })
    .animation('.reveal-animation', function() {
      return {
        enter: function(element, done) {
          element.css('display', 'none');
          element.fadeIn(300, done);
          return function() {
            element.stop();
          };
        },
        leave: function(element, done) {
          element.fadeOut(300, done);
          return function() {
            element.stop();
          };
        }
      };
    });