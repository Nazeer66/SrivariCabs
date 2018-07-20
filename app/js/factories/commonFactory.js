app.factory('myYerFactory', function($http){
var factory ={};
factory.getData = function(){
    // return console.log("im working nazeer");
    return $http.get("api/yercuad.json");
}

factory.getYelagiriData = function(){
    return $http.get("api/yelagiri.json");
}
return factory;
})