app.controller('productCtrl', function($scope,$http){
    $http.get("api/data.json").then(successCallback);

    function successCallback(response){
        $scope.myData = response.data.data;
        console.log("myData", response.data.data);
    }

})