app.directive('myfooDirective', function(){
    return{
        scope:true,
        templateUrl:"views/footer.html",
        link: function(scope, element, attributes){
            element.addClass('footerClass');
        }

    }
})