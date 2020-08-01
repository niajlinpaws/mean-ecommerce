'use strict';

angular.module('emartApp.auth', [
  'emartApp.constants',
  'emartApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
