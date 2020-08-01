'use strict';

angular.module('emartApp')
  .controller('SearchCtrl', ['$scope', '$stateParams', 'products', function($scope, $stateParams, products) {
   
    $scope.products = products;
    console.log($stateParams.category, $stateParams.term);
  }]);
