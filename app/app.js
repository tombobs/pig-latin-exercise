(function () {

	'use strict';

  angular.module('pigLatin', [
    'ui.router',
    'pigLatin.templates'
  ])
    .config(config)
  	.run(run);

  function config($stateProvider) {
    $stateProvider.state({
      name: 'home',
      url: '',
      templateUrl: 'home.tpl.html',
      controller: 'pigLatinCtrl',
      controllerAs: 'vm'
    })
  }

  function run($state, $stateParams, $rootScope) {
    var appTitle = 'pigLatin';
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.reload = function () {
      $state.go($state.current, $stateParams, {reload: true});
    };
    $rootScope.$on('$stateChangeSuccess', function (event, toState) {
      var pageTitle = toState.data && toState.data.pageTitle && ' | ' + toState.data.pageTitle || '';
      $rootScope.pageTitle = appTitle + pageTitle;
    });
  }
})();
