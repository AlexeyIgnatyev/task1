myApp.directive('modal', function() { 
  	return { 
	    restrict: 'E', 
	    scope: {
	    	title: '=',
	    	show: '='
	    },
	    //templateUrl: 'js/templates/modalDirective.html',
	    controller: function($scope, $element, modalWindowService) {	
	    	
	    	if ($scope.show) {
	    		let modalContent = $element[0].innerHTML;
	    		modalWindowService.openModal($scope.title, modalContent).then(function(result){
	    			console.log(result);
	    		});
	    	}	
	    } 
  	}
});
