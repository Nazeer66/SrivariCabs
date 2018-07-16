app.controller('yerCtrl',function($scope,$http){

    $http.get("api/yercuad.json").then(successCallback);

    function successCallback(response){
        $scope.yerData = response.data.data;
        console.log("yercaud", $scope.yerData);
    }
    

})