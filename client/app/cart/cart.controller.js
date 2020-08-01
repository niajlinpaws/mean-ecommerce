'use strict';

angular.module('emartApp')
  .controller('CartCtrl', function($scope, Modal, ngCart) {
    $scope.clearCart = Modal.confirm.delete(function() {
      ngCart.empty()
  });
  });
