Parse.initialize("d1dPEa5G9BMOajwjAUOhBTXMDY5VlcaVkjX8KHZQ",
    "qOigeKzwzvrg7kbVWPJYEbG3a9zSVft4Z0OlFXh5");

var app = angular.module('smartApp', ['loginModule', 'registerModule']);

app.controller('appController', function(){
    //$rootScope.currentUser = Parse.User.current();

    this.view = "login";
    this.setView = function(){
        if (this.view === "login"){
            this.view = "register";
        } else {
            this.view = "login";
        }
    };
});