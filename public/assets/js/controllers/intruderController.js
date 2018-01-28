faceRecognitionApp.controller('intruderController', function intruderController($scope, $interval, $http) {
    $scope.mainBlockTitle = 'Alarm notification';
    $scope.mainBlockSubTitle = '24 Hours performance';
    $scope.sidebarTitle = 'Recognition log';
    $scope.sidebarSubTitle = 'Last visitors list';
    // $scope.failRecogMessage = "Can't recognize the face";
    $scope.failRecogMessage = "";

    // $scope.failedRecognition = true;
});