faceRecognitionApp.controller('notificationsController', function notificationsController($scope, $interval, $http) {
    $scope.mainBlockTitle = 'Alarm notification';
    $scope.mainBlockSubTitle = 'Intruder detection';
    $scope.sidebarTitle = 'Notifications status';
    $scope.sidebarSubTitle = 'Notifications methods';
    // $scope.failRecogMessage = "Can't recognize the face";
    $scope.failRecogMessage = "";

    // $scope.failedRecognition = true;
    $scope.recognitionActive = false;
});