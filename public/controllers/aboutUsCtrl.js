function aboutUsCtrl($scope, $http) {

	var mollyKraus = {
		name:"Molly Kraus",
		img:"/media/molly.jpg",
		title:"Developer",
		twitter: "https://twitter.com/mollyjkraus",
		github: "https://github.com/mjkraus",
		linkedin: "https://www.linkedin.com/in/mjkraus"
	};

	var kiranChitraju = {
		name:"Kiran Chitraju",
		img:"/media/kiran.jpg",
		title:"Developer",
		twitter: "https://twitter.com/NYCKiran",
		github: "https://github.com/phanendar",
		linkedin: "https://www.linkedin.com/in/kiran-c-10b799100"
	};

	var ameliaKaufman = {
		name:"Amelia Kaufman",
		img:"/media/amelia.jpg",
		title:"Developer",
		twitter: "https://twitter.com/AmeliaKaufman",
		github: "https://github.com/akaufman3",
		linkedin: "https://www.linkedin.com/in/kaufmanamelia"
	};

	var liviaSong = {
		name:"Livia Song",
		img:"/media/livia.jpg",
		title:"Designer",
		twitter: "https://twitter.com",
		github: "https://github.com/liviasong",
		linkedin: "https://www.linkedin.com/in/livia-song-917303b1"
	};

	$scope.teamMembers = [mollyKraus, kiranChitraju, ameliaKaufman, liviaSong];

}

