angular.module('browse', [])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app.browse', {
    url: '/browse',
    views: {
      'menuContent': {
        templateUrl: 'templates/browse.html'
      }
    }
  })
})

.controller('BrowseCtrl', function($scope) {
    console.log('browse controller');
})