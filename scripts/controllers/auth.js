'use strict';

angular.module('TaskNinjaApp')

.controller('authController', function($location, Auth,toaster){
	console.log("loading authcontroller")
	var self = this;

	if(Auth.signedIn()){
		$location.path('/')
	}

	this.register = function(user){
		Auth.register(user)
			.then(function(){
				console.log("Registered successfully")
				toaster.pop('success', 'signed up successfully')
				$location.path('/')
			}, function(err){
				console.log(err)
			})
	}

	this.login = function(user){
		Auth.login(user)
			.then(function(){
				console.log("logged in successfully")
				toaster.pop('success', 'logged in successfully')
				$location.path('/')
			}, function(err){
				console.log(err)
			})
	}

})