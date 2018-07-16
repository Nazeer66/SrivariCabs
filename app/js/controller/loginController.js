app.controller('loginCtrl', function($scope,$http,$timeout){
    $scope.userData = [{
        "email":"jemsynazeer6@gmail.com",
        "username": "Nazeer",
        "password":"nazjemsy6",
        "repassword":"nazjemsy6"
    },{
        "email":"arzath@gmail.com",
        "username": "Arzath",
        "password":"arzath123",
        "repassword":"arzath123"
    },{
        "email":"dilip@gmail.com",
        "username": "Dilip",
        "password":"dilip123",
        "repassword":"dilip123"
    },{
        "email":"karthik@gmail.com",
        "username": "Karthik",
        "password":"karthi123",
        "repassword":"karthi123"
    }

]
$scope.mylogin = true;
    $scope.submitLogin = function(){
        console.log("Login field", $scope.username,$scope.password, $scope.check)

        if($scope.username != undefined && $scope.password != undefined && $scope.check != undefined){
            $scope.message =" You Successfully loged";
            $timeout(function(){
                $scope.message ="";
                $scope.username ="";
                $scope.password ="";
                $scope.check ="";
            },1000)
            $scope.myUser =  $scope.userData;
            $scope.myusername = true;
            $scope.mylogin = false;
            console.log("username",$scope.myUser);
            if($scope.username == $scope.myUser.username){
                alert("im working")
            }
        }
    }


 
})
