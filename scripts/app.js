'use strict';

angular.module('TaskNinjaApp', [
    'ngAnimate',
    'ngResource',    
    'ngRoute',    
    'firebase',
    'toaster'
  ])

  .constant('FURL', 'https://mean-tasks.firebaseio.com/')  

  .config(function ($routeProvider) {
    $routeProvider      
      .when('/', {
        templateUrl: 'views/browse.html',
        controller: 'taskController',
        controllerAs: 'taskCtrl'      
      })
      .when('/post', {
        templateUrl: 'views/post.html',
        controller: 'taskController',
        controllerAs: 'taskCtrl'       
      })
      .when('/edit/:task_id', {
        templateUrl: 'views/edit.html',
        controller: 'taskController',
        controllerAs: 'taskCtrl'         
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'authController',
        controllerAs: 'authCtrl'     
      })
      .when('/register', {
        templateUrl: 'views/register.html', 
        controller: 'authController',
        controllerAs: 'authCtrl'     
      })

      .otherwise({
        redirectTo: '/'
      });
  });
