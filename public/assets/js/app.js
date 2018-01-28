var faceRecognitionApp = angular.module('faceRecognitionApp', ['ui.router']);

// Define the `PhoneListController` controller on the `phonecatApp` module
faceRecognitionApp.controller('mainController', function mainController($scope, $interval, $http) {
  $scope.phones = [];

//   $interval(function(){
//     $scope.faceImageSrc = "/static/face_folder/img.gif?" + new Date().getTime();
//   }, 500);

  var socket = io.connect('http://localhost:3000');

  socket.on('message', function (data) {
    if(data.message) {
        console.log(data.message);
    } else {
        console.log("There is a problem:", data);
    }
  });

  socket.on('img_updated', function (data) {
    $scope.faceImageSrc = data.path;
  });
});

faceRecognitionApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html',
            controller: 'homeController'
        })

        .state('intruder', {
            url: '/intruder',
            templateUrl: 'templates/intruder.html',
            controller: 'intruderController'
        })

        .state('notifications', {
            url: '/notifications',
            templateUrl: 'templates/notifications.html',
            controller: 'notificationsController'
        })

        .state('training', {
            url: '/training',
            templateUrl: 'templates/training.html',
            controller: 'trainingController'
        });

});
