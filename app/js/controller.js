app.controller("myCtrl", function($scope, $http){
    
    
    $http.get("api/india.json").then(successCallback);

    function successCallback(response){
        $scope.indiaData = response.data.data;
        console.log("India", response.data.data);
    }

    
    

})