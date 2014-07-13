//keeping things out of the global namespace is a good thing and modules are the mechanism we use to do so.
//define a new module
var appModule = angular.module('myApp', []);

// register your controller to the module
appModule.controller('TextController', function($scope) {
	var someText = {};
	someText.message = 'Angular Journey with Modules';
	$scope.someText = someText;
});

// register StartUpController
appModule.controller('StartUpController', function($scope) {
	$scope.funding = {startingEstimate : 0};
	

	computeNeeded = function() {
		$scope.funding.needed = $scope.funding.startingEstimate * 10;
	}
	
	$scope.$watch('funding.startingEstimate',computeNeeded);
	
	$scope.requestFunding = function() {
		window.alert('Sorry, Get more customers');
	}
	
	$scope.reset = function() {
		$scope.funding.startingEstimate = 0;
	}
});