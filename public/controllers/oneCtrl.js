angular.module("myApp", ["chart.js"])

.controller("oneCtrl", ['$scope', '$timeout', function ($scope, $timeout) {



	// Bar Graph
	$scope.labels = ['Hispanic Or Latina/o', 'American Indian and Alaskan Native', 'Native Hawaiian and Other Pacific Islander', 'African American', 'White (non-Hispanic)', 'Asian American'];
	$scope.series = ['Female', 'Male'];

	$scope.dataBar = [
	[29791, 31191, 32893, 33772, 41585, 47776],
	[32272, 36886, 37461, 37570, 53267, 60426]
	];


	   // Bubble Graph
	   $scope.seriesBubble = ['White (non-Hispanic) Male', 'White (non-Hispanic) Female', 'African American Female', 'Hispanic Or Latino Female', 'Asian American Female'];

	   $scope.data = [
	   [{
	   	x: 10,
	   	y: 10,
	   	r: 100
	   }],
	   [{
	   	x: 20,
	   	y: 10,
	   	r: 78
	   }],
	   [{
	   	x: 30,
	   	y: 10,
	   	r: 63
	   }],
	   [{
	   	x: 40,
	   	y: 10,
	   	r: 54
	   }],
	   [{
	   	x: 50,
	   	y: 10,
	   	r: 90
	   }]
	   ];

	   $scope.bubbleOptions = {
	   	 offsetGridLines: false,

	   };

	   //WageGap based on occupation.

	   $scope.labelsDonut = ["Male", "Female"];
	   $scope.dataDonutTotal = [79, 21];
	   $scope.colorsTotal = ["#FD7D88", "#49D5C3"];

	   $scope.totalOptions = {
	   	cutoutPercentage : 70

	   };


	   $scope.labelsDonutPharmacists = ["Male", "Female"];
	   $scope.dataDonutPharmacists = [87, 13];


	   $scope.labelsDonutLawyer = ["Male", "Female"];
	   $scope.dataDonutLawyer = [83, 17];


	   $scope.labelsDonutComProgrammers = ["Male", "Female"];
	   $scope.dataDonutComProgrammers = [87, 13];


	   $scope.labelsDonutFinManagers = ["Male", "Female"];
	   $scope.dataDonutFinManagers = [67, 33];


	   $scope.labelsDonutMedicalScientists = ["Male", "Female"];
	   $scope.dataDonutMedicalScientists = [79, 21];


	   $scope.labelsDonutSchoolTeacher = ["Male", "Female"];
	   $scope.dataDonutSchoolTeacher = [89, 11];


	}]);

