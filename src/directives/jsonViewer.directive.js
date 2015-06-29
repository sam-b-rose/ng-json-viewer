(function() {
  "use strict";

  angular
    .module('jv.json-viewer')
    .directive('jvJsonViewer', jsonViewer);

  jsonViewer.$inject = ['jsonViewerService'];

  function jsonViewer(jsonViewerService) {
    var directive = {
      restrict: 'E',
      templateUrl: 'jsonViewer.tpl.html',
      scope: {
        editor: '=',
        data: '='
      },
      link: linkFunc,
    };

    return directive;

    function linkFunc(scope, el, attr) { // jshint ignore:line

      scope.analyzeJson = function() {
        if(scope.editor)
          jsonViewerService.jsonString = scope.editorText;
        else if(scope.data) {
          if(angular.isString(scope.data))
            jsonViewerService.jsonString = scope.data;
          else
            jsonViewerService.jsonString = angular.toJson(scope.data, false);
        }
        jsonViewerService.parseJson();
      };
      
    }

  }
})();
