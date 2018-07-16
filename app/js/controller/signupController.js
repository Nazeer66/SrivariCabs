app.controller('signUpCtrl',function($scope,$http,$timeout){

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

    // $scope.disable = true;
    $scope.signupSubmit = function(){
        console.log("signup field", $scope.username,$scope.email,$scope.password, $scope.repassword)

        if($scope.password != $scope.repassword){
            $scope.alertMsg = "Re-enter password correctly";
            $scope.password = '';
            $scope.repassword = '';
            // $scope.disable = true;
            // setTimeout(() => {
            //     $scope.alertMsg = '';
            // }, 1000);
            $timeout(function(){
                $scope.alertMsg = '';
            }, 1000)
           
        }else if($scope.username == undefined && $scope.email == undefined && $scope.password == undefined  && $scope.repassword == undefined && $scope.username == "" && $scope.email == "" && $scope.password == ""  && $scope.repassword == "" ){
             $scope.alertMsg = 'Please enter all the fields';
            //  $scope.disable = true;
        }
        else if($scope.username != undefined && $scope.email != undefined && $scope.password != undefined && $scope.repassword != undefined && $scope.username != "" && $scope.email != "" && $scope.password != ""  && $scope.repassword != ""){
            // $scope.disable = false;
            $scope.userData.push({
                "email":$scope.email,
                "username":$scope.username,
                "password":$scope.password,
                "repassword":$scope.repassword
            })
            $scope.username = '';
            $scope.email ='';
            $scope.password = '';
            $scope.repassword = '';
        }
       
        

        console.log("signUped data", $scope.userData);

    }
})