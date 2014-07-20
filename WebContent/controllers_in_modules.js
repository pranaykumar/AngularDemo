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
	$scope.funding = {
		startingEstimate : 0
	};

	computeNeeded = function() {
		$scope.funding.needed = $scope.funding.startingEstimate * 10;
	}

	$scope.$watch('funding.startingEstimate', computeNeeded);

	$scope.requestFunding = function() {
		window.alert('Sorry, Get more customers');
	}

	$scope.reset = function() {
		$scope.funding.startingEstimate = 0;
	}
});

appModule.controller('StudentListController', function($scope) {
	var students = [ {
		name : 'Pranay',
		id : '1'
	}, {
		name : 'Prashant',
		id : '2'
	}, {
		name : 'Saket',
		id : '3'
	} ];

	var newStudent = '-enter name here-';

	$scope.students = students;
	$scope.newStudent = newStudent;

	// this function appends a new student in students array at the END
	$scope.addStudent = function() {
		$scope.students.splice($scope.students.length, 0, {
			name : $scope.newStudent,
			id : $scope.students.length
		});
	}
});

appModule.controller('ToggleMenuController', function($scope) {
	menuState = {};
	menuState.show = true;
	menuState.btnTxt = 'Hide';
	$scope.menuState = menuState;

	$scope.toggleMenu = function() {
		$scope.menuState.show = !$scope.menuState.show;
		if ($scope.menuState.btnTxt == 'Hide')
			$scope.menuState.btnTxt = 'Show';
		else
			$scope.menuState.btnTxt = 'Hide';

	}
});

appModule.filter('titleCase', function() {
	var titleCaseFilter = function(input) {
		var words = input.split(' ');
		for (var i = 0; i < words.length; i++) {
			words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
		}
		return words.join(' ');
	};
	return titleCaseFilter;
});

appModule
		.controller(
				'ErrorWarningController',
				function($scope) {
					$scope.isError = false;
					$scope.isWarning = false;
					// adding commonStyle object with css styles as key:value
					// pairs. This can be fed to ng-style directive in the HTML
					// template
					$scope.commonStyle = {
						'background-color' : 'gray',
						'font-family' : 'monospace',
						'font-size' : '1.1em'
					};

					$scope.showError = function() {
						$scope.isError = true;
						$scope.isWarning = false;
						$scope.messageText = 'This is an error message!!!';
					};

					$scope.showWarning = function() {
						$scope.isError = false;
						$scope.isWarning = true;
						$scope.messageText = 'This is just a warning message. You can carry on!';
					};

				});

// Set up a service factory to create Directory service interface. This will
// ideally call an API or pull data from database
appModule.factory('Directory', function() {
	var directory = {};
	directory.query = function() {
		return [ {
			name : 'McDonalds',
			cuisine : 'Fast Food',
			rating : '4'
		}, {
			name : 'Red Lobster',
			cuisine : 'Sea Food',
			rating : '5'
		}, {
			name : 'Panda Express',
			cuisine : 'Continental',
			rating : '4'
		} ];
	};
	return directory;
});

// Restaurant controller looks for Directory service using parameter name
// matching in the same module.
appModule.controller('RestaurantController', function($scope, Directory) {
	$scope.directory = Directory.query();

	$scope.selectRestaurant = function(row) {
		$scope.selectedRow = row;
	}
});