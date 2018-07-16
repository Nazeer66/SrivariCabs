app.factory('myFactory', function(){
    return{
         getData: function(){
            return $http.get('api/userData.json').then(function(sucess){
            
            return sucess.data.userData;
             console.log("service", value);
         })
        }
    }
});