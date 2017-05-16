myApp.service('modalWindowService', function($uibModal) {

	this.openModal = function(title, modalContent) {
		var modalInstance = $uibModal.open({
			ariaLabelledBy: 'modal-title',
			ariaDescribedBy: 'modal-body',
			templateUrl: 'js/templates/modalWindow.html',
			size: 'md',
			controller: function($scope, $sce) {
				$scope.title = title;
				$scope.modalContent = $sce.trustAsHtml(modalContent);
				$scope.ok = function(){
					$scope.$close({ 
						reply: 'ok'
					});
				}
				
				$scope.cancel = function(){
					$scope.$close({ 
						reply: 'cancel'
					});
				}
			}
		});
		
		return modalInstance.result;
	};
});