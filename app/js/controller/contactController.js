app.controller('contactCtrl',function($scope,$http){
  

        $scope.contact =[];
    // $scope.uname ="nazeer";
      $scope.sendData = function(){
          console.log($scope.name);
        //   alert("im working")
            $scope.contact.push({"name":$scope.name, "email": $scope.email, "mobile":$scope.mobile, "message":$scope.message});
            console.log("Contact Data", $scope.contact);
            $scope.name = '';
            $scope.email='';
            $scope.mobile='';
            $scope.message='';

      }
})