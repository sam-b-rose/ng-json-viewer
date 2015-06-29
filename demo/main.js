(function() {
  'use strict';

  angular
    .module('demo-app', ['jv.json-viewer'])
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$http', 'jsonViewerService'];

  function MainCtrl($http, jsonViewerService) {
    var vm = this;
    vm.showEditor = true;
    vm.jsonData = {};

    vm.toggleEditor = function() {
      vm.showEditor = !vm.showEditor;
    };

    vm.useTestJson = function() {
      var root = 'http://jsonplaceholder.typicode.com';

      $http.get(root + '/posts/1/comments').then(function(result) {
        jsonViewerService.jsonString = angular.toJson(result.data);
        jsonViewerService.parseJson();
      });
    };
  }
})();
