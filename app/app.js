'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.controllers',
  'myApp.version'
])
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  
  .state('view1', {
    url: '/view1',
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  })

  .state('view2', {
    url: '/view2',
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  })

  ;

  $urlRouterProvider.otherwise('/view1');

});
