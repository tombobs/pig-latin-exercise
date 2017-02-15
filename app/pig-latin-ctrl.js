(function () {

  angular.module('pigLatin').controller('pigLatinCtrl', pigLatinCtrl);

  pigLatinCtrl.$inject = ['pigLatinService'];

  function pigLatinCtrl(pigLatinService) {
    var vm = this;

    vm.numHistoryItems = 10;

    this.history = [];

    this.convert = function (input) {
      var converted = pigLatinService.convert(input);
      vm.output = converted;
      vm.history.splice(vm.numHistoryItems-1, 1);
      vm.history.unshift({
        input: input,
        output: converted
      });
    };
  }
})()