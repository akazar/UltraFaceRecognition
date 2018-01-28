faceRecognitionApp.controller('homeController', function homeController($scope, $interval, $http) {
    $scope.mainBlockTitle = 'Enter recognition';
    $scope.mainBlockSubTitle = 'Look on camera';
    $scope.sidebarTitle = 'Look on camera';
    $scope.sidebarSubTitle = 'Last Campaign Performance';
    // $scope.failRecogMessage = "Can't recognize the face";
    $scope.failRecogMessage = "Can't recognize due to more than one faces detected";
    $scope.failRecogMessage = "";

    // $scope.failedRecognition = true;
    
    $scope.pinValue = "";
    $scope.addNumber = function(e){
        //document.getElementById('PINbox').value = document.getElementById('PINbox').value+element.value;
        console.log(e);
        $scope.pinValue += e;
    }
    $scope.clearForm = function(e){
        $scope.pinValue = "";
    }
    $scope.submitForm = function(e) {
        if ($scope.pinValue == "") {
            alert("Enter a PIN");
        } else {
            alert( "Your PIN has been sent! - " + $scope.pinValue );
        };
    };
    $scope.accessAllowed = true; //true for welcome message
    $scope.accessDenied = false;
    $scope.recognitionWarning = false;
});