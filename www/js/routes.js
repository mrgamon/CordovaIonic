angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.pHOTOHOLIC', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/pHOTOHOLIC.html',
        controller: 'pHOTOHOLICCtrl'
      }
    }
  })

  .state('tabsController.photos', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/photos.html',
        controller: 'photosCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('aboutMe', {
    url: '/page7',
    templateUrl: 'templates/aboutMe.html',
    controller: 'aboutMeCtrl'
  })

  .state('login', {
    url: '/page12',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('tabsController.photos2', {
    url: '/page13',
    views: {
      'tab2': {
        templateUrl: 'templates/photos2.html',
        controller: 'photos2Ctrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page12')

  

});