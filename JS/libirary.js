var app = angular.module("ThisApp", []);
// var app = angular.module("MyApp", []);


app.controller("getProducts", function ($scope, $http) {
    $http.get('https://raw.githubusercontent.com/MHH2020/MyDBs/master/Mshose.JSON')
        .then(function mySuccess1(response) { $scope.myData = response.data; }, function myError1(_error) { $scope.myData = _error.data; });

});




app.controller("httpController", function ($scope, $http) {
    $http.get('https://raw.githubusercontent.com/MHH2020/MyDBs/master/Emp.JSON')
        .then(function mySuccess(response) { $scope.mydata = response.data; }, function myError(_error) { $scope.mydata = _error.data; });

});



