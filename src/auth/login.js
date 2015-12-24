var login = angular.module("loginModule", []);

login.directive('loginForm', function factory(){
    var directiveDefinitionObject = {
        templateUrl: 'src/auth/login.html',
        restrict: 'E',
        controller: 'loginController',
        controllerAs: 'loginCtrl'
    };
    return directiveDefinitionObject;
});

login.controller('loginController', function(){
    this.username = "";
    this.password = "";

    this.submitForm = function(isValid){
        if(isValid){
            alert(this.username + " " + this.password);
        }
    };
});