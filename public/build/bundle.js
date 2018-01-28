/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(3);
module.exports = __webpack_require__(4);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

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

/***/ }),
/* 2 */
/***/ (function(module, exports) {

faceRecognitionApp.controller('intruderController', function intruderController($scope, $interval, $http) {
    $scope.mainBlockTitle = 'Alarm notification';
    $scope.mainBlockSubTitle = '24 Hours performance';
    $scope.sidebarTitle = 'Recognition log';
    $scope.sidebarSubTitle = 'Last visitors list';
    // $scope.failRecogMessage = "Can't recognize the face";
    $scope.failRecogMessage = "";

    // $scope.failedRecognition = true;
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

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

/***/ }),
/* 4 */
/***/ (function(module, exports) {

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

/***/ })
/******/ ]);