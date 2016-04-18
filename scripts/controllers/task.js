

angular.module('TaskNinjaApp')

.controller('taskController', function(FURL, $firebase, $location, $routeParams, toaster){
	console.log("loading taskCtrl")
	var self = this;
	var ref = new Firebase(FURL) // initializes the connect, returns the ref
	var task_id = $routeParams.task_id

	if(task_id){
		this.selectedTask = getTask(task_id)
	}

	function getTask(task_id){
		return $firebase(ref.child('tasks').child(task_id)).$asObject()
	}

	this.fbTasks = $firebase(ref.child('tasks')).$asArray() // returns as array

	this.postTask = function(task){
		this.fbTasks.$add(task);
		toaster.pop('success', 'task created successfully')
		$location.path('/browse')
	}

	this.updateTask = function(task){
		this.selectedTask.$save(task);
		toaster.pop('success', 'task updated successfully')
		$location.path('/browse')
	}	



})