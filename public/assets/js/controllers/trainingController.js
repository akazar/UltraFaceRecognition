faceRecognitionApp.controller('trainingController', function trainingController($scope, $interval, $http) {
    $scope.mainBlockTitle = 'Recognition training';
    $scope.mainBlockSubTitle = '24 Hours performance';
    $scope.sidebarTitle = 'User selection';
    $scope.sidebarSubTitle = 'Choose the user or create new';
    // $scope.failRecogMessage = "Can't recognize the face";
    $scope.failRecogMessage = "";

    // $scope.failedRecognition = true;

    $http.get("/users")
    .then(function(response) {
        $scope.userList = response.data;
        console.log($scope.userList);
    });

    $scope.recognitionResults = [
        {
            name: "Artem",
            percentage: 90
        },
        {
            name: "Tatiana",
            percentage: 65
        }
    ];
});