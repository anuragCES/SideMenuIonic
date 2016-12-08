angular.module('search', [])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })
})

.controller('SearchCtrl', function($scope) {
    console.log('search controller');
})