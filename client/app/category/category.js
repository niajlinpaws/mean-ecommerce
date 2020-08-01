'use strict';

angular.module('emartApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('products', {
        url: '/category/{slug}',
        templateUrl: 'app/category/category.html',
        controller: 'CategoryCtrl'
      })
  });
