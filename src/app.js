var app = angular.module('smartApp', []);

app.controller('loginController', function(){
	this.username = "abcd";
	this.password = "1234";

	this.login = function(){
		alert(username + " " + password);
	};
});