angular.module('ssms').config(["$routeProvider", function ($routeProvider) {

	$routeProvider.when("/", {
		templateUrl: "views/home.html",
		controller: "HomeCtrl",
		activetab: ''
	})
	.when("/workshops", {
		templateUrl: "views/workshop/workshops.html",
		controller: "WorkshopCtrl",
		activetab: 'workshop'
	})
	.when("/workshops/form/", {
		templateUrl: "views/workshop/workshopsForm.html",
		controller: "WorkshopFormCtrl",
		activetab: 'workshop'
	})
	.when("/workshops/form/:workshopId", {
		templateUrl: "views/workshop/workshopsForm.html",
		controller: "WorkshopFormCtrl",
		activetab: 'workshop'
	})
	.when("/inscricoes", {
		templateUrl: "views/subscribe/subscribe.html",
		controller: "SubscribeCtrl",
		activetab: 'subscribe'
	})
	.when("/inscricoes/form/", {
		templateUrl: "views/subscribe/subscribeForm.html",
		controller: "SubscribeFormCtrl",
		activetab: 'subscribe'
	})
	.when("/inscricoes/form/:subscribeId", {
		templateUrl: "views/subscribe/subscribeForm.html",
		controller: "SubscribeFormCtrl",
		activetab: 'subscribe'
	})
	.otherwise({redirectTo: "/"});
}]);
