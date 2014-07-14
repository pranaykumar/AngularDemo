var messages = {};
messages.someOtherText = "Angular Journey has just begun using proper model object!!!";
messages.youCheckedIt = false;

function HelloController($scope) {
	$scope.greeting = {
		text : 'Hello'
	};
}

function CartController($scope) {
	$scope.bill = {};

	$scope.items = [ {
		title : 'Paint pots',
		quantity : 8,
		price : 3.95
	}, {
		title : 'Polka dots',
		quantity : 17,
		price : 12.95
	}, {
		title : 'Pebbles',
		quantity : 5,
		price : 6.95
	} ];
	$scope.remove = function(index) {
		$scope.items.splice(index, 1);
	};

	//recalculate the bill properties every time Angular evaluates the page
	$scope.$watch(function() {
		var total = 0;
		for (var i = 0, len = $scope.items.length; i < len; i++) {
			total = total + $scope.items[i].price * $scope.items[i].quantity;
		}
		$scope.bill.totalCart = total;
		$scope.bill.discount = total > 100 ? 10 : 0;
		$scope.bill.subtotal = total - $scope.bill.discount;
	});
}

function TextController($scope) {
	$scope.someText = 'Angular Journey has just begun!!!'; // primitive way of
	// adding data in
	// model
	$scope.messages = messages; // adding data in scope using messages MODEL
	// object (the M in MVC!!!)
	$scope.showCheckedStatus = function() {
		alert(messages.youCheckedIt);

	}
}