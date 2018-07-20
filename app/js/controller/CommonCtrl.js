app.controller('yerCtrl',['myYerFactory' , '$scope',function(myYerFactory, $scope){

    // $http.get("api/yercuad.json").then(successCallback);

    // function successCallback(response){
    //     $scope.yerData = response.data.data;
    //     // console.log("yercaud", $scope.yerData);
    // }
    
    myYerFactory.getData().then(function(response){
        $scope.yerData = response.data.data;
        console.log("yercaud data",$scope.yerData);
    })
    myYerFactory.getYelagiriData().then(function(response){
        $scope.yelagiriData = response.data.data;
        console.log("yelagiri data",$scope.yerData);
    })
}])