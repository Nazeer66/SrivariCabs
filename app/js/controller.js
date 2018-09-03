app.controller("myCtrl", function($scope, $http){
    
    
    // $http.get("api/india.json").then(successCallback);

    // function successCallback(response){
    //     $scope.indiaData = response.data.data;
    //     console.log("India", response.data.data);
    // }


    $http.get("api/data.json").then(successCallback);

    function successCallback(response){
        $scope.myData = response.data.data;
        console.log("myData", response.data.data);
    }



})