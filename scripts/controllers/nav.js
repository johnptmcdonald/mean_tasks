'use strict';

angular.module('TaskNinjaApp')

.controller('navController', function(Auth, $location, toaster){
	console.log("loading navController")

	var self = this;

	this.signedIn = Auth.signedIn

	this.logout = Auth.logout
	
	this.currentUser = Auth.user

	this.changePassword = function(user){
		Auth.changePassword(user)
			.then(function(){
				self.user.email = '';
       	 		self.user.oldPass = '';
        		self.user.newPass = '';
        		toaster.pop('success', 'password updated successfully')
			}, function(err){
				console.log(err)
			})
	}
})






