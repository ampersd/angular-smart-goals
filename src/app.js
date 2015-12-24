var app = angular.module('smartApp', ['loginModule', 'registerModule']);

app.controller('appController', function(){
    this.view = "login";
    this.setView = function(){
        if (this.view === "login"){
            this.view = "register";
        } else {
            this.view = "login";
        }
    };
});