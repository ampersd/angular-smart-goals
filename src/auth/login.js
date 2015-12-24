

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
    this.email = "";
    this.password = "";

    this.signUp = function(isValid){
        if(isValid){
            alert(this.username + " " + this.password);

            // TODO: if I understand right for properly user creating in parse we need to add email field too I think it's ok for creating
            // what about authorization there?
            var user = new Parse.User();
            user.set("username", this.username);
            user.set("password", this.password);
            var result = user.signUp(null, {
                success: function(user) {
                    return user;
                },
                error: function(user, error) {
                    alert("Unable to sign up: " + error.code + " " + error.message);
                }
            });
        }
    };
});