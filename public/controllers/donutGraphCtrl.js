angular.module("myApp", ["chart.js"])

.controller("donutGraphCtrl", ['$scope', '$timeout', function ($scope, $timeout) {


	   //WageGap based on occupation.

	   $scope.labelsDonut = ["Male", "Female"];
	   $scope.dataDonutTotal = [78, 22];
	   $scope.colorsTotal = ["#FF0000", "#800000"];


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

	   // chartOptions = {
	   // 	cutoutPercentage: 95,
    //     showTooltips: false,
    //     backgroundColor: "#364961",
    //     scaleGridLineColor : "#364961",
    //     scaleGridLineWidth : 1,
    //     scaleOverride : true,
    //     scaleSteps : 4,
    //     scaleStepWidth : 4000,
    //     scaleStartValue : 0,
    //     scaleShowHorizontalLines: true,
    //     scaleShowVerticalLines: false,
    //     scaleShowVerticalLines: false,
    //     bezierCurve : true,
    //     bezierCurveTension : 0.4,
    //     pointDot : false,
    //     pointDotRadius : 4,
    //     pointDotStrokeWidth : 1,
    //     pointHitDetectionRadius : 20,
    //     datasetStroke : false,
    //     datasetStrokeWidth : 2,
    //     datasetFill : true,
    //   };



	   // var ctx = document.getElementById(doughnutTotal).getContext('2d');

	   // var myDoughnutChart = new Chart(ctx, {
	   // 	type: 'doughnut',
	   // 	data: [79, 21],
	   // 	options: chartOptions
	   // });





	}]);

