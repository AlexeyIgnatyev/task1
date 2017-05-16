myApp.service('tabsInfoService', function($http){

	this.getTabsHeader = function(){
		return $http.get('tabsHeader.json').then(function(data){
			return data.data;
		});
	}

	this.getTabsContent = function(){
		return $http.get('tabsContent.json').then(function(data){
			return data.data;
		});
	}
});