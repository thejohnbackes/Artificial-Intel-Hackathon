function interactiveWageGapCtrl($scope, $http) {

	var africanAmericanWomen = {
		wageGap:0.63,
		silhouetteLink:"media/womenSil.png",
		name: "African American"
	};

	var asianAmericanWomen = {
		wageGap:0.90,
		silhouetteLink:"media/womenSil.png",
		name: "Asian American"
	};

	var latinoAmericanWomen = {
		wageGap:0.54,
		silhouetteLink:"media/womenSil.png",
		name: "Latin American"
	};

	var caucasianAmericanWomen = {
		wageGap:0.78,
		silhouetteLink:"media/womenSil.png",
		name: "Caucasian American"
	};

	var sushi = {
		position: 0,
		image: "media/sushi.png",
		name: "Sushi",
		price: 4.50
	};

	var daycare = {
		position: 1,
		image: "media/daycare.png",
		name: "Day Care",
		price: 5.50
	};

	var studentLoan = {
		position: 2,
		image: "media/studentLoan.png",
		name: "Student Loan",
		price: 26450
	};

	var morgagepayment = {
		position: 3,
		image: "media/morgagepayment.png",
		name: "Average Morgage Payment",
		price: 221800
	};

	var gallonOfGas = {
		position: 4,
		image: "media/gallonOfGas.png",
		name: "Gallon Of Gas",
		price: 2.50
	};

	// Default Settings on Page Load
	$scope.races = [africanAmericanWomen, asianAmericanWomen, latinoAmericanWomen, caucasianAmericanWomen];
	var everydayAllProducts = [sushi, daycare, studentLoan, morgagepayment, gallonOfGas];
	$scope.leftSilhouette = _.first($scope.races).silhouetteLink;
	$scope.rightSilhouette = "media/menSil.png";
	$scope.pickedRace = _.first($scope.races);

	$scope.rightWageGap = "1.00";
	$scope.leftWageGap = _.first($scope.races).wageGap;
	$scope.pickedProduct = _.first(everydayAllProducts);
	$scope.nameOfPickedProduct = $scope.pickedProduct.name;
	$scope.priceOfPickedProduct = $scope.pickedProduct.price;


	var calculateMinutesNeededToWorkMore = function(raceWageGap, pickedProductToCompare){
		var MedianSalaryInAmerica = 51759;
		var medianSalaryWithWagegap = (51759*raceWageGap)
		var numberOfWorkedMinutesInAYear = 115200;
		var medianPayPerMinute = (MedianSalaryInAmerica/numberOfWorkedMinutesInAYear);
		var medianWageGapPayPerMinute = (medianSalaryWithWagegap/numberOfWorkedMinutesInAYear);
		var wageInEqualityNormalization = (1/(raceWageGap));
		var priceOfTheProductWhenConsideredWageInEquality = (wageInEqualityNormalization*pickedProductToCompare);
		var amountOfMinutesWorkedForMedianPayToPurchaseProduct = (pickedProductToCompare/medianPayPerMinute);
		var amountOfMinutesWorkedForWageGapCandidateToPurchaseProduct = (priceOfTheProductWhenConsideredWageInEquality/medianWageGapPayPerMinute);
		return Math.round(amountOfMinutesWorkedForWageGapCandidateToPurchaseProduct - amountOfMinutesWorkedForMedianPayToPurchaseProduct);
	};


	$scope.moveLeft = function(currentProduct) {
		for (i = 0; i < everydayAllProducts.length; i++) { 
			if(everydayAllProducts[i].name == currentProduct.name){
				if(i == 0){
					var nextSelectedProduct = everydayAllProducts[(everydayAllProducts.length - 1)];
					$scope.pickedProduct = nextSelectedProduct;
					$scope.priceOfPickedProduct = $scope.pickedProduct.price;
				} else {
					var nextSelectedProduct = everydayAllProducts[(i - 1)];
					$scope.pickedProduct = nextSelectedProduct;
					$scope.priceOfPickedProduct = $scope.pickedProduct.price;
				};
			};
		};
	};

	$scope.needToWorkLongerToAffordSageProductFilter = function() {
		$scope.needToWorkLongerToAffordSageProduct =  calculateMinutesNeededToWorkMore($scope.pickedRace.wageGap, $scope.pickedProduct.price);
	};

	$scope.refreshProduct = function(){
		$scope.nameOfPickedProduct = $scope.pickedProduct.name;
	};

	$scope.moveRight = function(currentProduct) {
		for (i = 0; i < everydayAllProducts.length; i++) { 
			if(everydayAllProducts[i].name == currentProduct.name){
				if(i == (everydayAllProducts.length - 1)){
					var nextSelectedProduct = _.first(everydayAllProducts);
					$scope.pickedProduct = nextSelectedProduct;
					$scope.priceOfPickedProduct = $scope.pickedProduct.price;
				} else {
					var nextSelectedProduct = everydayAllProducts[(i + 1)];
					$scope.pickedProduct = nextSelectedProduct;
					$scope.priceOfPickedProduct = $scope.pickedProduct.price;
				};
			};
		};
	};

	$scope.racePicked = function(race, position) {
		if(position == "left"){
			$scope.pickedRace = _.chain($scope.races).where({name: race.name}).first().value()
			$scope.leftWageGap = _.chain($scope.races).where({name: race.name}).pluck('wageGap').first().value();
		};
	};
}