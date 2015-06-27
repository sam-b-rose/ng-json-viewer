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
        jsonViewerService.jsonString = scope.editorText;
        jsonViewerService.parseJson();
      };
    }

  }
})();
