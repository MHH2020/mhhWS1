var app = angular.module("ThisApp", []);
// var app = angular.module("MyApp", []);

app.controller("getAllProducts", function($scope, $http) {
  $http
    .get(
      "https://raw.githubusercontent.com/MHH2020/MyDBs/master/ProductsDB.JSON"
    )
    .then(
      function Done(response) {
        $scope.data = response.data;
      },
      function Error(_error) {
        $scope.data = _error.data;
      }
    );
});

app.controller("getMenProducts", function($scope, $http) {
  $http
    .get("https://raw.githubusercontent.com/MHH2020/MyDBs/master/Mshose.JSON")
    .then(
      function mySuccess1(response) {
        $scope.myData = response.data;
      },
      function myError1(_error) {
        $scope.myData = _error.data;
      }
    );
});

app.controller("getMenSportProducts", function($scope, $http) {
  $http
    .get("https://raw.githubusercontent.com/MHH2020/MyDBs/master/MSshose.JSON")
    .then(
      function Done(response) {
        $scope.data = response.data;
      },
      function myErrror(_error) {
        $scope.data = _error.data;
      }
    );
});

app.controller("getWomenProducts", function($scope, $http) {
  $http
    .get("https://raw.githubusercontent.com/MHH2020/MyDBs/master/Wshose.JSON")
    .then(
      function Done(response) {
        $scope.data = response.data;
      },
      function myErrror(_error) {
        $scope.data = _error.data;
      }
    );
});

app.controller("getBabyProducts", function($scope, $http) {
  $http
    .get("https://raw.githubusercontent.com/MHH2020/MyDBs/master/Bshose.JSON")
    .then(
      function Done(response) {
        $scope.data = response.data;
      },
      function myErrror(_error) {
        $scope.data = _error.data;
      }
    );
});

app.controller("httpController", function($scope, $http) {
  $http
    .get("https://raw.githubusercontent.com/MHH2020/MyDBs/master/Emp.JSON")
    .then(
      function mySuccess(response) {
        $scope.mydata = response.data;
      },
      function myError(_error) {
        $scope.mydata = _error.data;
      }
    );
});
