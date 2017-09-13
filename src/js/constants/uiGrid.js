angular.module('ssms').constant('GRID_OPTIONS', (function() {
    
    return {
        config: {
            enableRowHeaderSelection: false,
            enableRowReordering: true,
            rowHeight: 25,
            enableColumnResizing: true,
            enableFiltering: true,
            showGridFooter: true
        }
    };
})());