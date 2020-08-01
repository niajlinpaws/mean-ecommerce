'use strict';

angular.module('emartApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('product', {
        url: '/product/{id}',
        templateUrl: 'app/product/product.html',
        controller: 'ProductCtrl'
      })
  });
