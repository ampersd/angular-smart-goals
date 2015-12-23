var app = angular.module('smartApp', []);

app.controller('loginController', function(){
	this.username = "";
	this.password = "";

	this.submitForm = function(isValid){
		if(isValid){
			alert(this.username + " " + this.password);
		}
	};
});