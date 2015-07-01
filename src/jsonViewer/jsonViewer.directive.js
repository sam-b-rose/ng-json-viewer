(function() {
  "use strict";

  angular
    .module('jv.json-viewer')
    .directive('jvJsonViewer', jsonViewer);

  jsonViewer.$inject = ['$templateCache', 'jsonViewerService'];

  function jsonViewer($templateCache, jsonViewerService) {
    var directive = {
      restrict: 'E',
      template: $templateCache.get('jsonViewer/jsonViewer.tpl.html'),
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
          if(angular.isString(scope.data)) {
            scope.editorText = scope.data;
            jsonViewerService.jsonString = scope.data;
          } else {
            scope.editorText = angular.toJson(scope.data, false);
            jsonViewerService.jsonString = angular.toJson(scope.data, false);
          }
        }
        jsonViewerService.parseJson();
      };

    }

  }
})();
