angular
  .module("donationCustom", [])
  .controller("mainController", function($scope, $http) {
    $scope.amount = [];

    var vm = this;

    vm.libData = {};

    vm.addAmount = function() {
      console.log("in add amount");
      $http.post("http://localhost:8080/donate", {
        donationAmount: vm.libData.amount
      });

      vm.libData = {
        donationAmount: vm.libData.amount
      };
    };
  });
