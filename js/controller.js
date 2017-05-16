let myApp = angular.module('myApp', ['ui.bootstrap']);
myApp.controller('MainCtrl', function($scope, $http, modalWindowService, tabsInfoService){

	$scope.getMainContent = function(tabInfo){
		let mainContent = (_.find($scope.tabsContent, {'id': tabInfo.id})).mainContent;
		tabInfo.mainContent = mainContent;
	}

	let init = function() {
		$scope.modalTitle = 'good morning';
		$scope.show = true;
		$scope.activeTabInit = 2;

		tabsInfoService.getTabsHeader().then(function(data){
			$scope.tabsInfo = data;
		});

		tabsInfoService.getTabsContent().then(function(data){
			$scope.tabsContent = data;
			$scope.getMainContent($scope.tabsInfo[$scope.activeTabInit]);
		});
	}

	init();
});