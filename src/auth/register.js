var register = angular.module("registerModule", []);

register.directive('registerForm', function factory(){
    var directiveDefinitionObject = {
        templateUrl: 'src/auth/register.html',
        restrict: 'E',
        controller: 'registerController',
        controllerAs: 'registerCtrl'
    };
    return directiveDefinitionObject;
});

register.controller('registerController', function(){
    this.username = "";
    this.password = "";

    this.submitForm = function(isValid){
        if(isValid){
            alert(this.username + " " + this.password);
        }
    };
});